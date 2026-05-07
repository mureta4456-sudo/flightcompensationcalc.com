export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  is_eu: boolean;
  is_uk: boolean;
}

export interface Airline {
  name: string;
  is_eu: boolean;
  is_uk: boolean;
}

export interface CountryInfo {
  statute_years: number;
  currency: string;
}

export type FlightStatus = "Delayed at arrival" | "Cancelled" | "Denied boarding (overbooked)";

export type Reason = 
  | "Weather" 
  | "Technical issue" 
  | "Crew shortage" 
  | "Airline staff strike" 
  | "Airport/ATC strike" 
  | "Security issue" 
  | "Other/unknown";

export interface CalculatorInputs {
  departureAirport: Airport | null;
  arrivalAirport: Airport | null;
  flightDate: string;
  status: FlightStatus;
  delayHours: number;
  airline: Airline | null;
  reason: Reason;
  isConnecting: boolean;
  cancelNoticeDays?: number;
  alternativeFlightArrivedLateHours?: number;
}

export interface CalculationResult {
  eligible: boolean;
  amountEur: number;
  amountGbp: number;
  jurisdiction: "EC261" | "UK261" | "BOTH" | "NONE";
  distanceKm: number;
  confidence: "High" | "Medium" | "Low";
  explanation: string;
  deadlineDate: string | null;
  reductionApplied: boolean;
}
