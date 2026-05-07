import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface HowItWorksProps {
  lang: Language;
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const content = `
## How EC 261/2004 Works

EU Regulation 261/2004 was established to protect passenger rights when air travel doesn't go as planned. It mandates that airlines compensate passengers for significant disruptions.

### When are you eligible?
You are likely eligible for compensation if:
- **Your flight departed from an EU/EEA airport.**
- **OR your flight arrived at an EU/EEA airport on an airline based in the EU.**
- **And one of the following happened:**
  - You arrived at your final destination more than **3 hours late**.
  - Your flight was cancelled with less than **14 days notice**.
  - You were denied boarding due to overbooking.

### Compensation Amounts
Compensation is fixed based on the flight distance:
- **€250** for flights up to 1,500 km.
- **€400** for intra-EU flights over 1,500 km, or other flights between 1,500 km and 3,500 km.
- **€600** for all other flights over 3,500 km.

### Extraordinary Circumstances
Airlines do not have to pay if the disruption was caused by "extraordinary circumstances" that could not have been avoided. This includes:
- Adverse weather conditions (e.g., heavy snow, hurricanes).
- Airport or Air Traffic Control (ATC) strikes.
- Political instability or security risks.
- **Note:** Technical issues and airline staff strikes are generally NOT considered extraordinary.

### UK261 (Post-Brexit)
Since 2021, the UK has its own domestic version called UK261. It works almost identically but applies to UK airlines and flights departing from the UK. Compensation is paid in GBP (£220 / £350 / £520).
`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-8">Understanding EC 261/2004</h1>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
