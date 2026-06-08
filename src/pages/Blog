import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Language } from '../translations';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-claim-flight-compensation',
    title: 'How to Claim Flight Delay Compensation: A Step-by-Step Guide',
    date: '2025-05-10',
    summary: 'A complete, practical walkthrough of how to file a compensation claim against an airline under EC 261/2004 — from checking eligibility to receiving payment.',
    content: `
## How to Claim Flight Delay Compensation: A Step-by-Step Guide

Every year, millions of passengers in Europe experience delayed or cancelled flights. Under EU Regulation 261/2004, you may be entitled to up to **€600 in fixed compensation** — but airlines rarely volunteer to pay it. This guide walks you through every step of making a successful claim.

---

### Step 1: Check Your Eligibility

Before you do anything else, verify that your flight qualifies. The regulation applies if:

- Your flight **departed from any EU/EEA airport** (regardless of the airline), OR
- Your flight **arrived at an EU/EEA airport** AND was operated by an EU-based carrier.

The disruption must also meet minimum thresholds:
- **Delay**: you arrived at your final destination **3 or more hours** late.
- **Cancellation**: you were notified less than **14 days** before departure.
- **Denied boarding**: you were bumped due to overbooking.

Use our [free calculator](/) to check in under 60 seconds.

---

### Step 2: Gather Your Documents

Strong claims are supported by evidence. Collect the following:

- Your **booking confirmation** (email or PDF) — proof you were a paying passenger.
- Your **boarding pass** — confirms you checked in and were present.
- **Arrival time records** — a screenshot of the flight tracking app (e.g. FlightAware, FlightRadar24) showing actual arrival time is ideal.
- Any **communication from the airline** — SMS, email, or gate announcements about the delay or cancellation.
- **Receipts** for meals, transport, or accommodation you paid for while waiting (for reimbursement on top of compensation).

If you no longer have your boarding pass, your booking reference is usually sufficient.

---

### Step 3: Calculate Your Compensation Amount

EC 261/2004 sets fixed amounts based on the **great-circle distance** of the flight:

| Flight Distance | Compensation |
|---|---|
| Up to 1,500 km | €250 |
| 1,500–3,500 km (or intra-EU over 1,500 km) | €400 |
| Over 3,500 km | €600 |

**Important:** If you were offered a replacement flight and arrived within 2–4 hours of your original arrival time, the airline may reduce compensation by 50%. Our calculator accounts for this automatically.

---

### Step 4: Contact the Airline Directly

Always try the airline first. Most have a dedicated complaints or customer service form on their website. In your message, include:

1. Your **full name**, booking reference, and flight number.
2. The **date of travel** and the disruption (e.g., "arrived 4 hours 20 minutes late at final destination").
3. The **specific compensation amount** you are requesting under EC 261/2004 (or UK261).
4. A clear **deadline** — typically 14 days is reasonable.

Keep the tone firm but factual. Airlines often reject initial claims with vague reasons like "extraordinary circumstances." Don't be deterred — this is frequently incorrect.

---

### Step 5: Escalate If Refused

If the airline doesn't respond within 4–6 weeks, or rejects your claim unfairly, you have several escalation options:

**Option A — National Enforcement Body (NEB)**
Each EU country has an official body responsible for enforcing EC 261/2004. For example:
- **UK**: Civil Aviation Authority (CAA)
- **Germany**: Luftfahrt-Bundesamt (LBA)
- **France**: DGAC
- **Ireland**: Commission for Aviation Regulation

Filing with the NEB is free and takes minimal effort. The downside is that these bodies are slow — expect 3–12 months.

**Option B — Alternative Dispute Resolution (ADR)**
In many countries, airlines are required to participate in an ADR scheme. In the UK, for example, approved schemes include CEDR and Aviation ADR. Decisions are binding on the airline. This is usually faster than going to the NEB.

**Option C — Small Claims Court**
If the dispute is under €5,000, you can file in the European Small Claims Procedure (ESCP) or your national small claims court. Court filing fees in most countries are between €30–€75 and are added to any award. Many airlines settle before a hearing.

**Option D — Claims Management Company**
Companies like AirHelp or ClaimCompass handle the entire process for a fee of 25–35% of the compensation. They are worth considering if you find the process overwhelming, but you can easily do it yourself for free.

---

### Step 6: Receive Payment

Once your claim is approved — whether directly by the airline or through a court/ADR — the airline must pay **within 7 days** in cash, bank transfer, or electronic payment. They cannot force you to accept vouchers unless you specifically agree.

---

### Common Mistakes to Avoid

- **Accepting vouchers without asking for cash** — you are legally entitled to cash payment.
- **Missing the time limit** — most EU countries allow claims up to 3 years after the flight. Ireland and the UK allow up to 6 years.
- **Believing "technical fault" exempts the airline** — in most cases, it does not.
- **Not claiming for connecting flights** — if your final destination arrival was 3+ hours late due to a missed connection, you may still be eligible.

---

### The Bottom Line

Claiming flight compensation is entirely manageable without any specialist help. The most important things are good documentation, a clear written complaint to the airline, and persistence if you are initially refused. The law is on your side.
`,
  },
  {
    slug: 'extraordinary-circumstances-explained',
    title: 'Extraordinary Circumstances: What Airlines Can and Cannot Use as an Excuse',
    date: '2025-05-18',
    summary: 'Airlines often deny compensation by citing "extraordinary circumstances." Learn exactly what qualifies — and what does not — under EU law.',
    content: `
## Extraordinary Circumstances: What Airlines Can and Cannot Use as an Excuse

"Extraordinary circumstances" is the most common reason airlines give for refusing compensation. Under EC 261/2004, airlines are legally exempt from paying compensation if a disruption was caused by an event they could not have controlled and could not have avoided even with all reasonable measures. But what exactly qualifies?

This distinction matters enormously. A wrongful rejection could cost you hundreds of euros.

---

### What the Law Actually Says

Article 5(3) of EC 261/2004 states:

> "An operating air carrier shall not be obliged to pay compensation... if it can prove that the cancellation is caused by extraordinary circumstances which could not have been avoided even if all reasonable measures had been taken."

Two conditions must both be met:
1. The cause was an extraordinary event (outside the airline's control).
2. The airline took **all reasonable measures** to avoid or mitigate the disruption.

---

### What DOES Qualify as Extraordinary Circumstances

**Severe weather genuinely beyond normal expectations**
A mild frost or light rain does not count. Courts have consistently held that "exceptional" weather means conditions truly outside the range of seasonal norms — a rare blizzard grounding an entire airport, a hurricane, or a volcanic ash cloud. The airline must also show it made all reasonable efforts to reroute you.

**Air traffic control (ATC) strikes**
Strikes by ATC staff are generally accepted as extraordinary because airlines have no control over these bodies. However, an **airline's own staff strike** (pilots, cabin crew) is increasingly viewed by courts as part of ordinary business risk and therefore NOT extraordinary.

**Political instability and security threats**
If a government closes airspace, or a security incident closes a terminal, these are accepted as extraordinary.

**Airport infrastructure failures**
A sudden failure of airport systems (e.g., a terminal fire, power outage) that the airline could not predict or prevent can qualify.

**"Bird strikes" in rare cases**
A direct bird strike causing mechanical damage may qualify — but only if the resulting repair was genuinely unforeseeable and outside normal maintenance.

---

### What Does NOT Qualify (Despite What Airlines Claim)

**Technical faults and mechanical failures**
This is the single most important point. The European Court of Justice ruled in *Wallentin-Hermann v Alitalia* (2008) that technical problems are **not** extraordinary circumstances unless they stem from an event truly external to the aircraft. An engine fault discovered during routine checks, a hydraulic problem, or an electrical fault is considered part of normal airline operations. Airlines must maintain their aircraft to avoid these issues. They cannot claim this as an excuse for non-payment.

**Airline staff strikes**
Following a key ruling by the Court of Justice of the EU in *Airhelp v Scandinavian Airlines* (2019), strikes organised by the airline's own employees to improve pay and conditions are considered "inherent" to airline operations. They are therefore NOT extraordinary circumstances. Airlines frequently ignore this ruling when handling initial claims — always push back.

**Late arrival of an aircraft from a previous flight ("knock-on delay")**
An aircraft arriving late from an earlier journey causing your flight to be delayed is also not extraordinary. This is an internal operational matter.

**Crew shortage**
If a crew member is ill, this is typically a foreseeable risk that airlines must plan for. Courts have generally held that staff unavailability does not constitute extraordinary circumstances.

**Overbooking**
If you are denied boarding because the airline sold too many seats, extraordinary circumstances never apply. This is entirely within the airline's control.

---

### The Burden of Proof Is on the Airline

Crucially, if an airline claims extraordinary circumstances, **the burden is on them to prove it** — not on you to disprove it. They must provide specific evidence of the event and demonstrate they took all reasonable measures. Vague reference to "operational reasons" or "technical issues" without documentation does not meet this standard.

---

### What to Do When an Airline Cites Extraordinary Circumstances

1. Ask the airline in writing for the **specific reason** and supporting documentation.
2. Cross-reference with flight tracking data — if many flights on the same day operated normally, weather is unlikely to have been genuinely exceptional.
3. If the reason given is a technical fault or staff strike, inform the airline of the relevant case law and resubmit your claim.
4. If they still refuse, escalate to the national enforcement body or ADR scheme.

Persistence pays. Many initial rejections citing extraordinary circumstances are successfully overturned on appeal.
`,
  },
  {
    slug: 'connecting-flights-compensation',
    title: 'Compensation for Missed Connections: What You Need to Know',
    date: '2025-05-25',
    summary: 'Missing a connecting flight is stressful — but when does it trigger EC 261 compensation? The rules are more nuanced than people realise.',
    content: `
## Compensation for Missed Connections: What You Need to Know

Connecting flights add complexity to compensation claims. Many passengers assume they have no rights if only one leg of their journey was disrupted, but that is not always true. Under EC 261/2004, what matters most is your **arrival time at your final destination**.

---

### The "Final Destination" Rule

EC 261/2004 ties compensation to the arrival delay at your **final booked destination** — not to the disruption of any single flight segment. This is hugely important.

**Example:** You book a ticket from Warsaw to New York via Frankfurt. Your Warsaw–Frankfurt flight is delayed by 2 hours, causing you to miss your Frankfurt–New York connection. You eventually arrive in New York 5 hours late. Even though the original delay was only 2 hours, you are entitled to compensation because your **final destination arrival** exceeded 3 hours.

---

### When the Connection Is on a Single Booking

The key condition for a connected journey to trigger EC 261 rights is that **all flights must be on a single reservation** (one booking reference). If the flights are on the same booking:

- Missing the connection due to a delayed first flight counts as one disruption.
- The airline is responsible for rebooking you on the next available flight at no extra charge.
- Compensation is calculated based on the delay at your **final destination**.
- The total distance used for calculating compensation is the **total distance of your booked journey**, not just the delayed leg.

---

### When Flights Are on Separate Bookings

If you booked each flight separately — for example, one ticket for Warsaw–Frankfurt and a different ticket for Frankfurt–New York — the situation is significantly more difficult. Each ticket is treated as an independent contract. The airline operating the first flight is not responsible for you missing an independently booked second flight. EC 261/2004 does **not** apply across separate bookings.

In this case, you may have limited travel insurance options, but no automatic EC 261 rights for the missed connection.

**Advice:** Always book connecting journeys on a single ticket when possible, particularly for long-haul routes where the stakes are higher.

---

### Self-Connecting Itineraries and "Virtual Interlining"

Some booking platforms (such as Kiwi.com) offer "self-connect" itineraries that combine flights from different airlines on a single platform booking. These often come with a "connection guarantee" provided by the platform itself — but this is **not** the same as a standard airline booking covered by EC 261.

If your flights are booked through such a platform, check the platform's own guarantee terms carefully. EC 261 still applies to individual flights in the itinerary if they depart from an EU airport, but the cross-journey protection is platform-specific, not statutory.

---

### Long Minimum Connection Times

Airlines are generally not liable if you chose an unusually short connection time at booking and then missed it — unless the first flight was delayed and a reasonable connection time was included in the original schedule.

"Minimum connection times" vary by airport. Major hubs like Frankfurt or Amsterdam have strict MCTs (minimum connection times) of 45–90 minutes for domestic-to-international connections, and longer for international-to-international. If the airline sold you a ticket with a connection below this threshold, responsibility shifts more clearly to them.

---

### Practical Steps for a Missed Connection

1. **Stay at the transfer airport** — do not rebook yourself independently until you have spoken to the airline. Doing so may weaken your claim.
2. **Ask for a rebooking letter or written confirmation** of the missed connection and the cause.
3. **Request meals, refreshments, and accommodation** if you must overnight at the transit airport (you are entitled to these under the Right to Care).
4. **Keep all receipts** for any expenses.
5. **File a compensation claim** once you reach your destination, citing the total delay to your final destination.

---

### Case Study: Sturgeon v Condor and Böck v Air France

The landmark European Court of Justice ruling in the joined cases *Sturgeon v Condor* and *Böck v Air France* (2009) confirmed that passengers who experience delays of 3 hours or more at their final destination are entitled to the same compensation as those whose flights were cancelled. This ruling applies equally to situations where a missed connection caused the final delay. Airlines frequently tried to argue otherwise — courts have consistently upheld passengers' rights.
`,
  },
  {
    slug: 'flight-cancellation-rights',
    title: 'Flight Cancelled? Here Are All Your Rights Under EU Law',
    date: '2025-06-01',
    summary: 'Airlines cancel thousands of flights every week. If yours was one of them, you have powerful legal rights — including a full refund, rebooking, and potentially €250–€600 cash compensation.',
    content: `
## Flight Cancelled? Here Are All Your Rights Under EU Law

A cancelled flight is one of the most disruptive events in air travel. Beyond the immediate stress, many passengers don't know that EU law gives them a comprehensive package of rights — and that the airline is legally required to tell you about them (even if they often don't).

---

### What Counts as a Cancellation?

Under EC 261/2004, a cancellation occurs when a flight that was scheduled does **not** operate. This includes:

- Complete removal from the schedule.
- Replacement with a significantly different flight (different time or routing).
- Situations where the aircraft departs but returns and passengers are not transported.

It does **not** include very long delays that become de facto cancellations — although in such cases you may still have compensation rights based on arrival delay.

---

### Right 1: The Choice Between Refund and Rebooking

If your flight is cancelled, the airline must offer you a clear choice:

**Option A — Full Refund**
A complete refund of your unused ticket(s), plus any return flights you no longer need (e.g. if you're stuck away from home). The refund must be paid within **7 days** in cash, bank transfer, or cheque. Vouchers are only acceptable if you voluntarily agree.

**Option B — Rebooking**
Rerouting to your final destination at the **earliest opportunity** on comparable transport conditions. The airline cannot force you onto a flight 2 days later if there are available seats with another carrier sooner.

**Option C — Re-routing at a Later Date**
If the disruption no longer serves your purpose (e.g. your conference has ended), you may request rebooking for a later date at your convenience, subject to availability.

---

### Right 2: Right to Care While You Wait

While waiting at the airport for a replacement flight, regardless of the reason for cancellation, the airline must provide **free of charge**:

- Meals and refreshments appropriate to the waiting time.
- Two telephone calls, emails, or faxes.
- Hotel accommodation if an overnight stay becomes necessary.
- Transport between the airport and the hotel.

**If the airline refuses to provide these**, you can pay for them yourself and claim reimbursement — but keep all receipts and the costs must be reasonable.

---

### Right 3: Financial Compensation

In addition to the refund or rebooking, you may be entitled to fixed cash compensation:

| Distance | Amount |
|---|---|
| Flights up to 1,500 km | **€250** |
| Intra-EU flights over 1,500 km, or other flights 1,500–3,500 km | **€400** |
| All other flights over 3,500 km | **€600** |

**Exceptions — when compensation does NOT apply:**

1. **Notice of 14+ days.** If the airline notified you of the cancellation at least 14 days before departure, no cash compensation is owed (only the choice of refund/rebooking).
2. **Notice of 7–13 days with acceptable alternatives.** If you were notified 7–13 days before departure AND offered a rerouting that departs no more than 2 hours earlier and arrives no more than 4 hours later than originally scheduled.
3. **Notice under 7 days with very close alternatives.** Notified fewer than 7 days before departure AND offered a rerouting departing no more than 1 hour earlier and arriving no more than 2 hours later.
4. **Genuine extraordinary circumstances** (see our detailed guide on this topic).

If none of these exceptions apply, you are entitled to full compensation regardless of whether you chose a refund or rebooking.

---

### What to Do If Your Flight Is Cancelled At the Airport

1. **Do not leave the airport** until you have either a confirmed rerouting or a written refund commitment from the airline.
2. **Get written confirmation** of the cancellation and the reason given.
3. **Ask explicitly** for your rights under EC 261/2004 — specifically the choice of refund or rebooking, and the right to care.
4. **Note the exact time** you were informed.
5. If meals or hotels are denied, pay and keep receipts.
6. File your compensation claim as soon as you return home.

---

### Last-Minute Cancellations: A Growing Problem

In recent years, some low-cost carriers have cancelled flights at very short notice — sometimes just hours before departure — and attempted to claim extraordinary circumstances to avoid paying compensation. Courts across the EU have increasingly rejected vague excuses. If your flight was cancelled with little notice and you received a generic explanation, it is worth pursuing the claim regardless of the airline's initial response.

---

### How Long Do You Have to Claim?

Time limits vary by country but you generally have at least **3 years** from the date of the cancelled flight in most EU countries. In the UK and Ireland, the limit is **6 years**. Don't assume it's too late — check before giving up on an old claim.
`,
  },
  {
    slug: 'airline-strike-compensation',
    title: 'Can You Get Compensation When an Airline Strike Disrupts Your Flight?',
    date: '2025-06-05',
    summary: 'Strikes are common in aviation. But whether you can claim compensation depends entirely on who is striking. The rules changed significantly after a key 2019 EU court ruling.',
    content: `
## Can You Get Compensation When an Airline Strike Disrupts Your Flight?

Strikes in the aviation industry are more frequent than many passengers realise. Crew strikes, ground staff walkouts, security personnel stoppages — each type triggers different rights. The most important question is: **who is striking?**

---

### The Critical Distinction: Airline Staff vs. Third-Party Staff

**Strikes by the airline's own staff** (pilots, cabin crew, ground handling directly employed by the airline) are in most circumstances **NOT** extraordinary circumstances under EC 261/2004.

This was confirmed definitively by the Court of Justice of the European Union in **Case C-28/20 (Airhelp v Scandinavian Airlines, 2021)**. The court held that a strike organised by cabin crew to demand better pay and conditions is a normal risk that airlines must manage, not an external disruption beyond their control. Airlines are therefore **obliged to pay compensation** in such cases.

**Strikes by third-party staff** (ATC controllers, airport security, government-employed ground workers) are generally considered extraordinary circumstances, and airlines are **not** obliged to pay cash compensation — though they must still offer you the choice of refund or rebooking, and provide care.

---

### Why Airlines Still Try to Refuse

Despite the court ruling, many airlines — particularly low-cost carriers — continue to reject initial claims by citing "extraordinary circumstances" during their own staff strikes. They rely on the fact that most passengers don't know the law and won't escalate.

If an airline cites a strike as the reason for refusing your claim:
1. Ask them in writing to confirm **who was striking**.
2. If it was their own airline staff, reference the SAS ruling and resubmit your claim explicitly under EC 261/2004.
3. If they still refuse, escalate to the national enforcement body.

---

### What You Are Still Entitled to During Any Strike

Regardless of whether extraordinary circumstances apply, the airline must always:

- Offer you the choice of **full refund** or **rebooking**.
- Provide **care** (meals, accommodation) while you wait at the airport.

These rights exist independently of the compensation question. An airline cannot cancel a flight due to a strike, leave you stranded, and offer you nothing.

---

### Documenting a Strike Disruption

- Screenshot news reports confirming the strike dates and which category of staff was involved.
- Save all communications from the airline (email, SMS, app notifications).
- Note whether the airline offered an alternative flight promptly or left you to manage alone.
- Keep receipts for all expenses incurred.

---

### Summary Table

| Who Strikes | Cash Compensation | Refund/Rebooking | Right to Care |
|---|---|---|---|
| Airline's own pilots/crew | **Yes** (not extraordinary) | Yes | Yes |
| Airline's own ground staff | **Yes** (generally) | Yes | Yes |
| ATC controllers | **No** (extraordinary) | Yes | Yes |
| Airport security (government) | **No** (extraordinary) | Yes | Yes |
| Airport ground handling (3rd party) | **Depends** (case by case) | Yes | Yes |

---

### Real-World Context

In recent summers, strikes by Ryanair, Lufthansa, and Air France cabin crew have led to tens of thousands of cancelled flights. Passengers who knew their rights and pursued their claims successfully recovered hundreds of euros each. Those who accepted an initial rejection often received nothing.

The law is clear: if an airline's own staff strike, the airline bears the financial consequences — not the passenger.
`,
  },
];

// Blog list page
function BlogList({ lang }: { lang: Language }) {
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-brand-navy mb-4">Flight Passenger Rights — Guides & Articles</h1>
      <p className="text-lg text-slate-600 mb-12">
        In-depth guides on EU and UK flight compensation law, written to help you understand your rights and claim what you're owed.
      </p>
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b border-slate-200 pb-10">
            <time className="text-xs text-slate-400 uppercase tracking-wide">{post.date}</time>
            <h2 className="text-2xl font-bold text-brand-navy mt-1 mb-3">
              <Link to={`${prefix}/guides/${post.slug}`} className="hover:text-brand-gold transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{post.summary}</p>
            <Link
              to={`${prefix}/guides/${post.slug}`}
              className="text-sm font-semibold text-brand-gold hover:underline"
            >
              Read guide →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

// Individual blog post page
function BlogPost({ lang }: { lang: Language }) {
  const { slug } = useParams<{ slug: string }>();
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Article not found</h1>
        <Link to={`${prefix}/guides`} className="text-brand-gold hover:underline">
          ← Back to all guides
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <Link to={`${prefix}/guides`} className="text-sm text-slate-500 hover:text-brand-gold mb-8 inline-block">
        ← All guides
      </Link>
      <time className="text-xs text-slate-400 uppercase tracking-wide block mb-2">{post.date}</time>
      <div className="markdown-body prose lg:prose-xl text-slate-700">
        <Markdown>{post.content}</Markdown>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-200">
        <p className="text-sm text-slate-500 mb-2">Ready to check your own flight?</p>
        <Link
          to={prefix || '/'}
          className="inline-block bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Use the Free Calculator →
        </Link>
      </div>
    </div>
  );
}

export { BlogList, BlogPost, blogPosts };
