import { CalculatorInputs, CalculationResult, Airport } from "../types";
import countriesData from "../data/countries.json";
import { addYears, format } from "date-fns";

const countries = countriesData as Record<string, { statute_years: number; currency: string }>;

/**
 * Haversine formula to calculate distance between two coordinates in KM
 */
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export function calculateCompensation(inputs: CalculatorInputs): CalculationResult {
  const { 
    departureAirport, 
    arrivalAirport, 
    status, 
    delayHours, 
    airline, 
    reason, 
    isConnecting,
    flightDate,
    alternativeFlightArrivedLateHours
  } = inputs;

  const result: CalculationResult = {
    eligible: false,
    amountEur: 0,
    amountGbp: 0,
    jurisdiction: "NONE",
    distanceKm: 0,
    confidence: "Low",
    explanation: "",
    deadlineDate: null,
    reductionApplied: false
  };

  if (!departureAirport || !arrivalAirport) return result;

  // 1. Distance
  const distance = calculateDistance(
    departureAirport.lat, departureAirport.lng,
    arrivalAirport.lat, arrivalAirport.lng
  );
  result.distanceKm = distance;

  // 2. Jurisdiction
  const isFromEU = departureAirport.is_eu;
  const isToEU = arrivalAirport.is_eu;
  const isFromUK = departureAirport.is_uk;
  const isToUK = arrivalAirport.is_uk;
  const isEUAairline = airline?.is_eu ?? false;
  const isUKairline = airline?.is_uk ?? false;

  const coversEC261 = isFromEU || (isToEU && isEUAairline);
  const coversUK261 = isFromUK || (isToUK && isUKairline);

  if (coversEC261 && coversUK261) result.jurisdiction = "BOTH";
  else if (coversEC261) result.jurisdiction = "EC261";
  else if (coversUK261) result.jurisdiction = "UK261";
  else {
    result.eligible = false;
    result.explanation = "This flight does not start in the EU/UK, and was not operated by an EU/UK airline arriving in the EU/UK.";
    result.confidence = "High";
    return result;
  }

  // 3. Eligibility conditions
  let baseEligible = false;
  if (status === "Delayed at arrival" || (status === "Cancelled" && delayHours >= 3)) {
    if (delayHours >= 3) baseEligible = true;
  } else if (status === "Denied boarding (overbooked)") {
    baseEligible = true;
  } else if (status === "Cancelled") {
    // Note: cancellation logic simplified for this calc - usually depends on notice
    baseEligible = true;
  }

  // Extraordinary circumstances
  const extraordinaryReasons = ["Weather", "Airport/ATC strike", "Security issue"];
  const isExtraordinary = extraordinaryReasons.includes(reason);

  if (isExtraordinary) {
    result.eligible = true; // Technically showing potential, but reducing confidence
    result.confidence = "Low";
    result.explanation = `Your flight was ${status.toLowerCase()} due to ${reason.toLowerCase()}. This is often considered an 'extraordinary circumstance', but you may still be eligible if the airline could have avoided it.`;
  } else if (baseEligible) {
    result.eligible = true;
    
    // Confidence Logic
    if (reason === "Crew shortage" || reason === "Airline staff strike" || reason === "Other/unknown") {
      if (delayHours >= 4 && result.jurisdiction !== "BOTH") {
        result.confidence = "High";
      } else {
        result.confidence = "Medium";
      }
    } else if (reason === "Technical issue") {
      result.confidence = "Medium";
      result.explanation = "Most technical issues qualify, but hidden manufacturing defects might be exempt.";
    }

    if (result.jurisdiction === "BOTH" || result.jurisdiction === "UK261") {
       result.confidence = "Medium"; // UK261 adds jurisdictional nuance
    }
  }

  // 4. Compensation Amount Calculation
  let amountEur = 0;
  let amountGbp = 0;

  if (distance <= 1500) {
    amountEur = 250;
    amountGbp = 220;
  } else if (distance > 1500 && distance <= 3500) {
    amountEur = 400;
    amountGbp = 350;
  } else if (distance > 3500) {
    // If intra-community (intra-EU) flight > 1500km, it's €400
    if (departureAirport.is_eu && arrivalAirport.is_eu) {
      amountEur = 400;
      amountGbp = 350;
    } else {
      amountEur = 600;
      amountGbp = 520;
    }
  }

  // 5. 50% Reduction Rule
  // Apply to all tiers if rerouted arrival is within certain window (primarily for cancellations)
  if (status === "Cancelled" && alternativeFlightArrivedLateHours !== undefined) {
    let reduction = false;
    if (distance <= 1500 && alternativeFlightArrivedLateHours < 2) reduction = true;
    else if (distance > 1500 && distance <= 3500 && alternativeFlightArrivedLateHours < 3) reduction = true;
    else if (distance > 3500 && alternativeFlightArrivedLateHours < 4) reduction = true;

    if (reduction) {
      amountEur /= 2;
      amountGbp /= 2;
      result.reductionApplied = true;
    }
  }

  result.amountEur = amountEur;
  result.amountGbp = amountGbp;

  // 6. Deadline Calculation
  const country = departureAirport.country || arrivalAirport.country;
  const countryInfo = countries[country] || { statute_years: 2, currency: "EUR" };
  if (flightDate) {
    const deadline = addYears(new Date(flightDate), countryInfo.statute_years);
    result.deadlineDate = format(deadline, "PPP");
  }

  // Final Explanation refinement
  if (result.eligible) {
    const currency = result.jurisdiction === "UK261" ? `£${result.amountGbp}` : `€${result.amountEur}`;
    result.explanation = `Because your flight from ${departureAirport.code} to ${arrivalAirport.code} was ${distance} km and you were ${status.toLowerCase()}, you may be entitled to ${currency} per passenger.`;
    if (result.jurisdiction === "BOTH") {
      result.explanation += " Your flight falls under both EU and UK regulations. You can choose which jurisdiction to claim under.";
    } else if (result.jurisdiction === "UK261") {
      result.explanation += " This flight is covered by UK261 regulations.";
    }
    
    if (isConnecting) {
      result.explanation += " Since this was a connecting flight, compensation is based on the arrival delay at your final destination.";
    }
  }

  return result;
}
