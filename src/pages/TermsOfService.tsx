import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';
 
interface TermsOfServiceProps {
  lang: Language;
}
 
export default function TermsOfService({ lang }: TermsOfServiceProps) {
  const lastUpdated = 'May 2026';
  const content = `
*Last updated: ${lastUpdated}*
 
By using FlightComp at flightcompensationcalc.com (the "service"), you agree to these Terms of Service. If you do not agree, please do not use the service.
 
## 1. What This Service Is
 
FlightComp is a **free informational tool** that estimates whether you may be eligible for compensation under:
 
- **Regulation (EC) No 261/2004** — for flights departing from EU/EEA airports, or arriving at EU/EEA airports on EU-based airlines
- **The UK Air Passenger Rights and Air Travel Organisers' Licensing (Amendment) (EU Exit) Regulations 2019** ("UK261") — for flights departing from UK airports
 
The service provides general information and an eligibility estimate based on the data you enter.
 
## 2. Not Legal Advice
 
The information and calculations provided by FlightComp **do not constitute legal advice** and are **not a substitute for advice from a qualified lawyer**. Compensation outcomes depend on the specific facts of each case, which only a court, the airline, or a qualified legal professional can determine.
 
You should not rely solely on this calculator to file a claim or make legal decisions.
 
## 3. No Guarantee of Accuracy
 
We make reasonable efforts to keep the calculator up to date with current law and airline practice. However:
 
- Airline policies, court rulings, and regulations change over time
- The calculator does not have access to your full ticket or boarding records
- The calculator cannot evaluate "extraordinary circumstances" defences, which often turn on facts the airline has not yet disclosed
 
We make **no guarantee** that the result you receive matches the amount an airline or court will eventually pay.
 
## 4. Permitted Use
 
You may use the service for:
 
- Personal, non-commercial purposes
- Educational research about passenger rights
- Preparing your own claim against an airline
 
You may **not**:
 
- Scrape, copy, or republish the service or its data without permission
- Use the service to harass, defraud, or mislead others
- Attempt to disrupt, reverse-engineer, or attack the service
- Use automated tools to submit large volumes of queries
 
## 5. No Account, No Fees
 
The service does not require registration and is provided free of charge. There are no premium features, subscriptions, or paid tiers. We do not handle your money or file claims on your behalf.
 
## 6. Third-Party Services and Content
 
Some explanations may be generated using Google's Gemini AI. We do not control Gemini's output. AI-generated content may be incomplete or occasionally inaccurate; treat it as a starting point, not a final answer.
 
Links to airline websites, government bodies, or other resources are provided for convenience. We are not responsible for the content of those sites.
 
## 7. Intellectual Property
 
The calculator code, design, layout, and original written content are owned by the project maintainers. The names "EC 261/2004", "UK261", and any airline or airport trademarks belong to their respective owners; their use here is for identification only.
 
The source code may be made available under an open-source licence; see the project's GitHub repository for details.
 
## 8. Limitation of Liability
 
To the fullest extent permitted by law, FlightComp and its maintainers are **not liable** for:
 
- Any decision you make based on the calculator's output
- Any compensation you fail to receive (or do receive at a different amount)
- Indirect, incidental, or consequential losses
- Service interruptions or data inaccuracies
 
If you suffer a direct loss caused by our gross negligence, our maximum liability is limited to **€100**.
 
This does **not** limit any rights you have as a consumer that cannot be waived under your local law.
 
## 9. Indemnity
 
You agree not to hold the maintainers responsible for any third-party claim that arises from your misuse of the service or your interactions with airlines based on its output.
 
## 10. Changes
 
We may update the service and these Terms at any time. Material changes to the Terms will be reflected by an updated "Last updated" date at the top of this page. Continued use after changes means you accept them.
 
## 11. Termination
 
We may suspend or discontinue the service at any time, with or without notice. The disclaimers and limitations in sections 2, 3, 8, and 9 survive termination.
 
## 12. Governing Law
 
These Terms are governed by the laws of **Latvia**, and the courts of Latvia have jurisdiction over disputes, except where mandatory consumer protection law gives you the right to bring a claim in your country of residence.
 
## 13. Contact
 
For questions about these Terms, please contact us through the email listed in the GitHub repository for this project.
`;
 
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-8">Terms of Service</h1>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
 

