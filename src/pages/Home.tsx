import React, { useState } from 'react';
import { CalculatorForm } from '../components/CalculatorForm';
import { ResultCard } from '../components/ResultCard';
import { calculateCompensation } from '../lib/compensationLogic';
import { CalculationResult, FlightFormData } from '../types';
import { Link } from 'react-router-dom';

// Extensive educational content for SEO
const EDUCATIONAL_CONTENT = {
  en: {
    howItWorks: `
<p>The EC 261/2004 regulation is a European Union law that protects passengers' rights 
after a flight disruption. It applies to flights departing from an EU airport or 
flights to an EU airport operated by an EU airline.</p>

<h3>What Types of Disruptions Are Covered?</h3>
<ul>
  <li><strong>Delays of 3+ hours at arrival:</strong> If you arrive at your final destination 
  more than 3 hours later than the scheduled arrival time.</li>
  <li><strong>Cancellations:</strong> If cancelled 14 days or less before departure (some 
  cases may allow up to 28 days notice).</li>
  <li><strong>Denied boarding (overbooking):</strong> If you are bumped due to lack of seats 
  or overselling.</li>
</ul>

<h3>Extraordinary Circumstances</h3>
<p> Airlines are not required to pay compensation if they can prove the disruption was 
caused by extraordinary circumstances beyond their control, such as severe weather, 
airport strikes, or air traffic control strikes. However, you are still entitled to 
care (meals, drinks, accommodation) during long delays.</p>
`,
    yourRights: `
<p>Under EC 261/2004, passengers have specific rights depending on the type of 
disruption and flight distance. The regulation was strengthened in 2017 to make 
claims easier and compensation amounts more generous.</p>

<h3>The Right to Care (Denied Boarding)</h3>
<p>If you are denied boarding due to overbooking, the airline must provide care in 
addition to compensation. This includes meals, refreshments, hotel accommodation 
if necessary, and two free telephone calls or emails.</p>

<h3>Re-routing Options</h3>
<p>If your flight is cancelled or you are denied boarding, the airline must offer 
you either a full refund or re-routing to your final destination at the earliest 
possible time.</p>
`,
  },
  lv: {
    howItWorks: `...</p>` // Latvian translation would go here
  }
};
