import React from 'react';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface YourRightsProps {
  lang: Language;
}

export default function YourRights({ lang }: YourRightsProps) {
  const content = `
## Your Rights as a Passenger

When your flight is delayed, cancelled, or you are denied boarding, EU and UK law gives you concrete rights — not just optional courtesies. Airlines must respect these even if they don't mention them at the gate.

### 1. The Right to Care
If your flight is delayed by **2+ hours** (short-haul), **3+ hours** (medium-haul) or **4+ hours** (long-haul), the airline must provide, free of charge:

- Meals and refreshments proportional to the wait
- Two phone calls or emails
- Hotel accommodation if an overnight stay is required
- Transport between the airport and the hotel

**Important:** This applies regardless of the cause of delay — even in "extraordinary circumstances."

### 2. The Right to Reimbursement or Re-routing
If your flight is **cancelled** or delayed by **5+ hours**, you have a choice:

- **Full refund** of your ticket within 7 days, OR
- **Re-routing** to your final destination at the earliest opportunity, OR
- **Re-routing** at a later date of your convenience (subject to availability)

### 3. The Right to Compensation
On top of care and refunds, you may be entitled to a **fixed cash compensation**:

- **€250 / £220** — flights up to 1,500 km
- **€400 / £350** — intra-EU flights over 1,500 km, or other flights 1,500–3,500 km
- **€600 / £520** — flights over 3,500 km

Compensation is paid **in addition** to any refund. The airline cannot offer vouchers in place of cash unless you agree.

### 4. The Right to Information
Airlines must give you a **written notice** of your rights at the airport. If you weren't given one, ask. The absence of this notice does **not** waive your rights.

### 5. The Right to Downgrade Reimbursement
If you are placed in a lower class than booked:

- **30%** refund of the ticket price for flights up to 1,500 km
- **50%** for intra-EU flights over 1,500 km, or other flights 1,500–3,500 km
- **75%** for flights over 3,500 km

### 6. The Right to Claim — Time Limits
You don't lose your rights immediately. You can usually claim for past flights:

- **Most EU countries:** up to **3 years**
- **UK & Ireland:** up to **6 years**
- **Germany:** **3 years** from the end of the year of the flight
- **France:** **5 years**

### What the Airline Cannot Do
- They **cannot** force you to sign away your rights for a voucher
- They **cannot** refuse compensation by claiming "operational reasons" — only genuine extraordinary circumstances qualify
- They **cannot** pay less than the legal amount because of a fare sale or discount

### If the Airline Refuses
1. Submit a formal written claim to the airline (keep proof)
2. Wait their response window (usually 6–8 weeks)
3. Escalate to your **National Enforcement Body** (in Latvia: PTAC — Patērētāju tiesību aizsardzības centrs)
4. Use Small Claims Court or a claim management service as a last step

You have these rights regardless of nationality, ticket price, or whether you booked with miles. Use the calculator on the home page to estimate what you may be owed.
`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-8">Your Rights</h1>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
