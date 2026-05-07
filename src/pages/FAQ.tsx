import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface FAQProps {
  lang: Language;
}

export default function FAQ({ lang }: FAQProps) {
  const isLv = lang === 'lv';
  const content = `
## Common Questions
${isLv ? '*Saziņai par aviācijas tiesībām Latvijā varat vērsties PTAC vai izmantot specializētos kompensāciju dienestus.*' : ''}

### How long does a claim take?
Most claims take 4-12 weeks, depending on the airline's internal processing speed. If a claim goes to court, it can take 6 months or more.

### How much does it cost to use this calculator?
It is 100% free. We provide this tool to help passengers understand their rights.

### Can I claim for a flight from 2 years ago?
Yes. In most EU countries, you can claim for flights up to 3 years old. In the UK and Ireland, you have up to 6 years.

### What if I was offered food and a hotel?
Receiving "Duty of Care" (food, drink, accommodation) does not waive your right to financial compensation under EC 261/2004. You are entitled to both.

### Does it matter if I am not an EU citizen?
No. EC 261 applies to all passengers on covered flights, regardless of nationality.

### Which airports and airlines are supported?
Our calculator supports over 6,000 airports and all major airlines worldwide. Whether you flew from a major hub like London Heathrow or a regional airport like Riga (RIX), we can calculate your eligibility.

### What if the airline claims "technical issue"?
Technical issues like engine failure or component wear are considered part of the airline's normal operations and are **not** extraordinary circumstances. You are usually eligible.
`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-8">Frequently Asked Questions</h1>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
