// src/pages/resources/solar-small-business-entrepreneurship.tsx
import * as React from "react";

// ---------- Simple SEO Head ----------
export const Head = () => (
  <>
    <title>SOLAR Resource Guide: Small Business & Entrepreneurship</title>
    <meta
      name="description"
      content="Practical, stigma-aware entrepreneurship guide for registrants and families: how to start, get customers, fund, stay compliant, and grow."
    />
    <meta name="robots" content="index,follow" />
  </>
);

// ---------- Helper UI ----------
const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "bg-sky-600/15 text-sky-700" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}>
    {children}
  </span>
);

const Callout: React.FC<{ title: string; tone?: "info" | "warn" | "ok" | "danger" | "privacy"; children: React.ReactNode }> = ({
  title,
  tone = "info",
  children
}) => {
  const tones: Record<string, string> = {
    info: "bg-sky-50 border-sky-200 text-sky-900",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    ok: "bg-emerald-50 border-emerald-200 text-emerald-900",
    danger: "bg-rose-50 border-rose-200 text-rose-900",
    privacy: "bg-violet-50 border-violet-200 text-violet-900"
  };
  return (
    <div className={`border rounded-xl p-4 mt-4 ${tones[tone]}`}>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm leading-6">{children}</div>
    </div>
  );
};

const SectionCard: React.FC<{ num: number; title: string; children: React.ReactNode }> = ({ num, title, children }) => (
  <section id={`section-${num}`} className="bg-white shadow-sm ring-1 ring-black/5 rounded-2xl p-6 md:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">{num}</div>
      <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h2>
    </div>
    <div className="prose prose-slate max-w-none">
      {children}
    </div>
  </section>
);

const ChecklistItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [done, setDone] = React.useState(false);
  return (
    <label className="flex gap-3 items-start cursor-pointer select-none">
      <input type="checkbox" className="mt-1 size-4" checked={done} onChange={() => setDone(!done)} />
      <span className={`text-sm ${done ? "line-through opacity-60" : ""}`}>{children}</span>
    </label>
  );
};

// ---------- Page ----------
const GuidePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute -z-10 inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10rem,#0ea5e9_10%,transparent_60%)] opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge>Employment & Education</Badge>
            <Badge color="bg-emerald-600/15 text-emerald-700">SOLAR Resource Guide</Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Small Business & Entrepreneurship Guide
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl">
            A practical, stigma-aware roadmap for registrants and families to overcome employment barriers through self-employment,
            freelancing, and entrepreneurship — with clear steps, safety notes, and real-world tactics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#toc" className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Jump to sections</a>
            <a href="#final-checklist" className="px-4 py-2 rounded-lg bg-slate-100 text-slate-900 text-sm ring-1 ring-slate-200">Final checklist</a>
            <a href="#sources" className="px-4 py-2 rounded-lg bg-slate-100 text-slate-900 text-sm ring-1 ring-slate-200">Sources</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-24">
        {/* TOC */}
        <section id="toc" className="bg-white shadow-sm ring-1 ring-black/5 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">What’s inside</h2>
          <ol className="grid md:grid-cols-2 gap-2 text-slate-700 list-decimal list-inside">
            <li><a className="hover:underline" href="#section-1">Introduction: Why Entrepreneurship Matters</a></li>
            <li><a className="hover:underline" href="#section-2">Starting Point: Where You Are Now</a></li>
            <li><a className="hover:underline" href="#section-3">Probation, Parole, & Supervision Considerations</a></li>
            <li><a className="hover:underline" href="#section-4">Choosing a Business Path (with Guardrails)</a></li>
            <li><a className="hover:underline" href="#section-5">Overcoming Barriers</a></li>
            <li><a className="hover:underline" href="#section-6">Funding & Capital Strategies</a></li>
            <li><a className="hover:underline" href="#section-7">Step-by-Step Getting Started</a></li>
            <li><a className="hover:underline" href="#section-8">Education & Skill-Building</a></li>
            <li><a className="hover:underline" href="#section-9">Building Customers & Marketing</a></li>
            <li><a className="hover:underline" href="#section-10">Scaling Up & Hiring Help</a></li>
            <li><a className="hover:underline" href="#section-11">Legal & Compliance Basics</a></li>
            <li><a className="hover:underline" href="#section-12">Conclusion, Final Checklist & Sources</a></li>
          </ol>
        </section>

        {/* 1. Introduction */}
        <SectionCard num={1} title="Introduction: Why Entrepreneurship Matters">
          <p>
            For people with a record — especially those with a sex offense background or registry obligations — traditional
            employment can feel like a brick wall. Entrepreneurship doesn’t erase stigma, but it gives you a way around it:
            you create your own opportunities and set your own standard of professionalism and reliability.
          </p>
          <p>
            You don’t need perfection to begin: no fancy logo, no 20-page plan, no viral website. Action beats perfection.
            And your idea doesn’t have to be unique — proven markets are safer places to start. Your edge is reliability,
            quality, and consistency over time.
          </p>
          <ul>
            <li><strong>Real-world examples:</strong> a $60 mower turned into a landscaping company; handmade goods scaled through local referrals; a phone-repair skill became a paid booth at a flea market.</li>
            <li><strong>What this guide does:</strong> gives you the “how” — set up, funding, first customers, compliance, growth, and safety.</li>
          </ul>
        </SectionCard>

        {/* 2. Starting Point */}
        <SectionCard num={2} title="Starting Point: Where You Are Now">
          <p>
            Start with your skills, interests, resources, and limits. Most small businesses begin with something simple you
            can already do. Big ideas exist (and that’s great), but they’re the exception — don’t wait on them to start.
          </p>
          <h3>Quick self-inventory</h3>
          <ul>
            <li>List <strong>3 things you’re good at</strong> (including everyday skills like reliability or fixing things).</li>
            <li>List <strong>3 things you enjoy</strong> (you don’t have to “love” it, but it helps).</li>
            <li>Ask one trusted person what they’d pay you to do.</li>
          </ul>
          <h3>Factor in your reality</h3>
          <ul>
            <li><strong>Location restrictions:</strong> avoid ideas that place you at schools/parks/events.</li>
            <li><strong>Curfew/travel limits:</strong> focus on home-based or local businesses.</li>
            <li><strong>Internet/device limits:</strong> consider offline services until you have approval.</li>
            <li><strong>Reporting:</strong> record income and keep your PO informed where required.</li>
          </ul>
          <Callout title="Mini-Story: Starting with Almost Nothing" tone="ok">
            A registrant borrowed a push mower, landed neighbors as clients, reinvested, and eventually ran multiple crews,
            expanding into maintenance and design. Start small, iterate, grow.
          </Callout>
        </SectionCard>

        {/* 3. Supervision Considerations */}
        <SectionCard num={3} title="Probation, Parole, & Supervision Considerations">
          <p>
            Treat compliance as part of your business plan. Employment must be lawful and approved; device and internet use
            may be monitored or limited. Design your early business around your conditions, then expand as restrictions ease.
          </p>
          <ul>
            <li><strong>Curfews:</strong> operate in daytime windows.</li>
            <li><strong>Travel limits:</strong> serve local customers only.</li>
            <li><strong>Internet/device limits:</strong> request specific, monitored tools if needed; start offline if not permitted.</li>
            <li><strong>Disclosure rules:</strong> prepare simple records and report self-employment if required.</li>
          </ul>
          <Callout title="Special Focus: Internet & Smart Device Restrictions" tone="privacy">
            <p className="mb-2"><strong>Work with your PO proactively:</strong> request specific approvals (email invoicing, marketplace listings) and accept monitoring if needed. If conditions are unworkable, consider a modification request (link this to your SOLAR appeals guide in your site).</p>
            <p className="mb-2"><strong>Offline alternatives:</strong> flyers, business cards, local radio/newsletters, chamber events, and partnerships where a trusted person runs your online profile.</p>
            <p><strong>Start now, go online later:</strong> prove the service offline; add digital tools step by step as conditions permit.</p>
          </Callout>
          <Callout title="Mini-Story: Building Inside the Lines" tone="ok">
            Daytime office cleaning within a single county, documented with receipts for the PO, grew into steady contracts —
            fully compliant and approved.
          </Callout>
        </SectionCard>
        {/* 4. Choosing a Path */}
        <SectionCard num={4} title="Choosing a Business Path (with Guardrails)">
          <h3>Green-light (practical & proven)</h3>
          <ul>
            <li><strong>Trades/repair:</strong> appliance repair, handyman tasks, small construction, auto detailing.</li>
            <li><strong>Cleaning & maintenance:</strong> residential/commercial cleaning, pressure washing.</li>
            <li><strong>Hauling & delivery:</strong> junk removal, moving help (within travel limits).</li>
            <li><strong>Resale:</strong> flips via flea markets, Facebook Marketplace, local classifieds.</li>
            <li><strong>Digital/creative (if approved):</strong> graphic design, copywriting, technical writing, digital products.</li>
          </ul>
          <h3>Yellow-light (check first)</h3>
          <ul>
            <li>Transportation platforms (often background-check gated).</li>
            <li>Food services (permits/inspections).</li>
            <li>Online marketplaces/freelance platforms (require device approval).</li>
          </ul>
          <h3>Red-light (not viable for registrants)</h3>
          <ul>
            <li>Childcare/youth services; tutoring minors.</li>
            <li>Healthcare/security licensure paths commonly barred.</li>
            <li>Any site-based business sited near schools/parks where restricted.</li>
          </ul>
          <Callout title="Mini-Story: Designing a Business from a Laptop" tone="ok">
            With PO-approved, monitored device access, a registrant used free tools to start logo/flyer gigs, then expanded
            into technical writing and digital marketing support. Low cash, high persistence.
          </Callout>
        </SectionCard>

        {/* 5. Overcoming Barriers */}
        <SectionCard num={5} title="Overcoming Barriers">
          <h3>Stigma, trust, and involuntary disclosure</h3>
          <ul>
            <li><strong>Neutral branding:</strong> use a service-focused name; avoid personal identifiers.</li>
            <li><strong>Respond professionally:</strong> never debate your past online; keep replies brief and service-focused.</li>
            <li><strong>Flood with positives:</strong> ask happy customers for reviews; rely on referrals to drown out hostility.</li>
            <li><strong>Safety:</strong> use a business number (Google Voice), PO box/UPS box, and avoid sharing personal details.</li>
          </ul>
          <h3>Licensing restrictions</h3>
          <p>Start in fields that don’t require licensing; if blocked, pivot to adjacent services with fewer restrictions.</p>
          <h3>Access to capital</h3>
          <ul>
            <li>Start small and reinvest.</li>
            <li>Use CDFIs and SBA microloans where eligible.</li>
            <li>Avoid predatory “fast cash” offers.</li>
          </ul>
          <h3>Tech limits</h3>
          <p>Request monitored access or partner with a trusted person; otherwise lean on offline tactics until approval.</p>
          <Callout title="Mini-Story: From Rejection to Reputation" tone="ok">
            After ad-agency rejections, a registrant built a copywriting client base through a friend’s referral, then more
            referrals. When a hostile comment appeared online, loyal clients stayed because the work was strong and reliable.
          </Callout>
        </SectionCard>

        {/* 6. Funding & Capital Strategies */}
        <SectionCard num={6} title="Funding & Capital Strategies">
          <h3>1) Seed Money Fast: Bootstrapping Tactics</h3>
          <ul>
            <li><strong>Pre-sell & deposits:</strong> offer a small bundle, collect 50% up front, buy only needed materials.</li>
            <li><strong>Anchor customer:</strong> pitch one local business for recurring service with modest prepay discount.</li>
            <li><strong>Micro-flips:</strong> clean/repair/resell fast-moving items over a weekend for starter cash.</li>
            <li><strong>Rent/borrow:</strong> tools for first 1–3 jobs; include rental cost in price.</li>
            <li><strong>Partner/share:</strong> split revenue with someone who owns the key asset until you can buy your own.</li>
            <li><strong>Community micro-funding:</strong> workforce boards, reentry nonprofits, churches/civic mini-grants.</li>
            <li><strong>Service-for-referrals:</strong> trade one low-cost job for three named referrals — in writing.</li>
          </ul>
          <Callout title="Do this this week" tone="warn">
            <ul className="!mt-0">
              <li>Set a target: “I need $250 by Sunday.”</li>
              <li>Pick two tactics above (e.g., pre-sell + micro-flip).</li>
              <li>Collect deposits via Cash App/Venmo/PayPal <em>Business</em> and screenshot confirmations.</li>
              <li>Buy only job-critical materials; fulfill fast; reinvest into your core tool or 25 yard signs.</li>
            </ul>
          </Callout>

          <h3>2) Crowdfunding & Community Support</h3>
          <p>Keep it small and direct; share with supportive circles first to limit stigma blowback.</p>

          <h3>3) Microloans & CDFIs</h3>
          <ul>
            <li><strong>SBA Microloans:</strong> up to $50k via nonprofit intermediaries.</li>
            <li><strong>CDFIs:</strong> mission-driven lenders; many pair capital with coaching/credit-build.</li>
          </ul>

          <h3>4) SBA Lender Match</h3>
          <p>Quick questionnaire; lenders contact you. Even a “no” teaches what to fix for next time.</p>

          <h3>5) Modern banking & payments</h3>
          <ul>
            <li><strong>Neobanks:</strong> Chime/Current for simple accounts.</li>
            <li><strong>Payments:</strong> Cash App Business, Venmo Business, PayPal, and Square readers.</li>
            <li>Keep business funds separate from day one.</li>
          </ul>

          <h3>6) Avoid predatory loans</h3>
          <p>Watch for upfront fees, pressure tactics, and “guaranteed approval.” If it sounds too good to be true — skip it.</p>

          <Callout title="Mini-Story: Borrowed Tools → Real Contracts" tone="ok">
            A mobile detailing idea launched with borrowed supplies. Profits were reinvested, then a small CDFI loan funded a
            used van. Steady dealer contracts followed.
          </Callout>
        </SectionCard>
        {/* 7. Step-by-Step Getting Started */}
        <SectionCard num={7} title="Step-by-Step Getting Started">
          <h3>1) Choose a business name</h3>
          <ul>
            <li>Simple, professional, neutral (“Brightline Cleaning”).</li>
            <li>Search state registry + Google + social platforms for conflicts.</li>
          </ul>
          <h3>2) Register (if needed) & get EIN</h3>
          <p>Many start as sole proprietors; consider LLC for liability at any time. Get your free EIN from IRS online.</p>
          <h3>3) Open a business account</h3>
          <p>Use Cash App/PayPal/Venmo Business to start; upgrade to credit-union/CDFI checking soon. Save every receipt.</p>
          <h3>4) Price your first service</h3>
          <p>Materials + labor + margin. Research local comps; don’t undersell yourself.</p>
          <h3>5) Find your first customer</h3>
          <ul>
            <li><strong>Offline:</strong> 25–50 flyers, bulletin boards, shop windows, churches, barber shops.</li>
            <li><strong>Online (if approved):</strong> Marketplace, Craigslist, Nextdoor, and a simple one-page site.</li>
          </ul>
          <h3>6) Deliver & document</h3>
          <p>Show up on time. Get before/after photos (permission). Ask for a testimonial. Save proof of payment.</p>
          <h3>7) Reinvest & repeat</h3>
          <p>Commit a % of profit (e.g., 50%) to upgrades/marketing. Momentum beats perfection.</p>
          <Callout title="Mini-Story: First Dollar → First Client Base" tone="ok">
            $50 flyer design for a food truck led to a menu job, then five recurring clients in three months — built on a
            laptop, free tools, and referrals.
          </Callout>
        </SectionCard>

        {/* 8. Education & Skill-Building */}
        <SectionCard num={8} title="Education & Skill-Building: Free / Low-Cost">
          <p>
            In 2025, world-class training is often free. One hour a week compounds fast — pick one course and one local mentor
            and apply one new tactic each week.
          </p>
          <h3>Online programs (free/low-cost)</h3>
          <ul>
            <li>GoDaddy × The Last Mile (Empower): website, email, branding, SEO, mentorship (justice-impacted focus).</li>
            <li>SBA Learning Platform: planning, launching, funding, managing.</li>
            <li>MOBI (Santa Clara Univ.): self-paced entrepreneur certificates.</li>
            <li>UCEDC “Second Chance”: virtual program with mentorship.</li>
            <li>First Step Alliance: entrepreneurship + legal/money/banking support.</li>
            <li>Google Grow Your Business: digital marketing & AI tools.</li>
            <li>Harvard Online (free courses) & Alison (certificates).</li>
          </ul>
          <h3>Offline routes</h3>
          <ul>
            <li><strong>SCORE mentorship:</strong> free 1:1 advisors; accountability.</li>
            <li><strong>SBDCs:</strong> local coaching, workshops, market data.</li>
            <li>Trade apprenticeships/union programs (learn skills, then apply in adjacent services if licensure is blocked).</li>
            <li>Community colleges with reentry partnerships; libraries & maker spaces.</li>
          </ul>
          <Callout title="Pro Tip" tone="info">
            Choose one online course + one local resource and stick with both for 90 days. Skills + network beat algorithms.
          </Callout>
        </SectionCard>

        {/* 9. Building Customers & Marketing */}
        <SectionCard num={9} title="Building Customers & Marketing">
          <p>Grow on two tracks: <strong>offline/local presence</strong> plus <strong>online/digital</strong> when allowed. Consistency wins.</p>
          <h3>Start with your inner circle</h3>
          <ul>
            <li>Text 3–5 trusted people a one-sentence pitch with price and availability.</li>
            <li>Offer a founding-customer deal; ask explicitly for referrals.</li>
          </ul>
          <h3>Low-cost local marketing</h3>
          <ul>
            <li>50 flyers, business cards, yard signs with QR codes.</li>
            <li>Community boards, church bulletins, local shopper papers.</li>
            <li>Attend one community event/trade show this month.</li>
          </ul>
          <h3>Word-of-mouth systems</h3>
          <ul>
            <li>Referral bonus ($20 off or free add-on).</li>
            <li>Keep a simple referral log; follow up by text.</li>
          </ul>
          <h3>Digital (if approved)</h3>
          <ul>
            <li>Google Business Profile; Nextdoor; Marketplace.</li>
            <li>One-page site (Wix/GoDaddy/Google Sites). Canva for graphics.</li>
            <li>Optional $25 boosted post to test demand.</li>
          </ul>
          <h3>Handling stigma online</h3>
          <ul>
            <li>Don’t argue online. Keep replies short and service-focused.</li>
            <li>Ask satisfied clients for reviews to outweigh hostility.</li>
            <li>Use Google Alerts for your business name; escalate harassment to your PO/attorney if needed.</li>
          </ul>
          <Callout title="Mini-Story: Flyers → Local Brand" tone="ok">
            Flyers brought the first three clients; referrals brought the next ten. With PO-approved Google profile, the
            business now mixes repeat work and steady inbound requests.
          </Callout>
        </SectionCard>

        {/* 10. Scaling Up & Hiring Help */}
        <SectionCard num={10} title="Scaling Up & Hiring Help">
          <h3>Level 1 → Steady Solo</h3>
          <ul>
            <li>Upgrade tools/systems; separate finances; consider an LLC early for liability protection.</li>
            <li>Document customers, receipts, testimonials.</li>
          </ul>
          <h3>Level 2 → Small Team</h3>
          <ul>
            <li>Helpers/contractors per job; partnerships; family admin help.</li>
            <li>Use a business number (Google Voice). Try Jobber/HoneyBook for scheduling & invoices.</li>
            <li>Check supervision rules before hiring.</li>
          </ul>
          <h3>Level 3 → Structured Growth</h3>
          <ul>
            <li>Entity formalization (LLC or S-Corp), general liability insurance, bonding if needed.</li>
            <li>Standardize processes: quotes, checklists, training.</li>
            <li>Expand marketing: SEO, simple ads, local partnerships.</li>
          </ul>
          <Callout title="Mini-Story: Freelancer → Micro-Agency" tone="ok">
            Overflow work led a designer to hire per-project contractors, then form an LLC, add insurance, and run a reliable
            micro-agency with three regular collaborators.
          </Callout>
        </SectionCard>
        {/* 11. Legal & Compliance Basics */}
        <SectionCard num={11} title="Legal & Compliance Basics for Entrepreneurs">
          <h3>Contracts</h3>
          <p>Always get scope, price, and timing in writing (even a signed page or text thread). It prevents disputes.</p>
          <h3>Taxes</h3>
          <p>Report income (often Schedule C). Move 25–30% of profit into a tax savings bucket each time you’re paid.</p>
          <h3>Business structure</h3>
          <p>Sole prop is simplest; <strong>LLC adds liability protection</strong> and is valid even for single-owner startups.</p>
          <h3>Insurance</h3>
          <p>General liability, bonding (if required), and business auto if you use a vehicle.</p>
          <h3>Recordkeeping</h3>
          <p>Wave/QuickBooks/spreadsheets + cloud backups. Good records help with taxes and PO reporting.</p>
          <h3>Supervision compliance</h3>
          <p>Stay transparent with your PO. Get approvals before adding online sales or travel; document income sources.</p>
          <Callout title="Mini-Story: A Quick Save with Contracts" tone="info">
            A simple 1-page agreement + before/after photos secured full payment in a dispute — and a repeat client later.
          </Callout>
        </SectionCard>

        {/* 12. Conclusion + Final Checklist + Sources */}
        <SectionCard num={12} title="Conclusion: Building a Future with Purpose">
          <p>
            Entrepreneurship for registrants and families is about more than money — it’s stability, dignity, and momentum.
            Every invoice and referral chips away at stigma. At SOLAR, we believe your future isn’t defined by your past:
            with clear steps, safe guardrails, and persistent action, you can build something real and lasting.
          </p>
          <p>
            Your business may never make headlines. It doesn’t have to. If it feeds your family, gives you purpose, and proves
            your value to yourself and your community, it’s already a success. Keep going.
          </p>

          <h3 id="final-checklist">✅ Final Checklist</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <ChecklistItem>Write 3 ideas/skills you can sell; pick one.</ChecklistItem>
            <ChecklistItem>Confirm supervision rules; plan inside your limits.</ChecklistItem>
            <ChecklistItem>Choose a simple, professional business name.</ChecklistItem>
            <ChecklistItem>Get a free EIN and open a business payments account.</ChecklistItem>
            <ChecklistItem>Land your first paying customer (flyers, referrals).</ChecklistItem>
            <ChecklistItem>Save receipts; keep a simple job log.</ChecklistItem>
            <ChecklistItem>Reinvest early profits into tools or marketing.</ChecklistItem>
            <ChecklistItem>Consider an LLC and basic insurance early.</ChecklistItem>
            <ChecklistItem>Ask for reviews/referrals after each successful job.</ChecklistItem>
            <ChecklistItem>Commit to 1 hr/week of skill-building for 90 days.</ChecklistItem>
          </div>

          <h3 id="sources" className="mt-8">📚 Guide Sources & Recommended Resources</h3>
          <ul>
            <li><a className="underline" href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online">IRS: Apply for an EIN (free)</a></li>
            <li><a className="underline" href="https://www.sba.gov/sba-learning-platform">SBA Learning Platform</a></li>
            <li><a className="underline" href="https://www.sba.gov/funding-programs/loans/microloans">SBA Microloan Program</a></li>
            <li><a className="underline" href="https://www.cdfifund.gov/">U.S. Treasury CDFI Fund (find CDFIs)</a></li>
            <li><a className="underline" href="https://americassbdc.org/small-business-consulting-and-training/find-your-sbdc/">Find your SBDC</a></li>
            <li><a className="underline" href="https://www.score.org/">SCORE Mentorship</a></li>
            <li><a className="underline" href="https://thelastmile.org/empowering-justice-impacted-entrepreneurs-training/">GoDaddy × The Last Mile (Empower)</a></li>
            <li><a className="underline" href="https://grow.google/grow-your-business/">Google: Grow Your Business</a></li>
            <li><a className="underline" href="https://www.scu.edu/mobi/">My Own Business Institute (MOBI)</a></li>
            <li><a className="underline" href="https://ucedc.com/training/">UCEDC: Entrepreneurship as a Second Chance</a></li>
            <li><a className="underline" href="https://www.firststepalliance.org/fresh-start-business">First Step Alliance: Fresh Start</a></li>
            <li><a className="underline" href="https://pll.harvard.edu/subject/business/free">Harvard Online (free business courses)</a></li>
            <li><a className="underline" href="https://alison.com/courses/business">Alison: Free Business Courses</a></li>
          </ul>
        </SectionCard>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          a[href^="#"] { text-decoration: none !important; }
          header .flex, header .mt-6 { display: none !important; }
          header { padding-bottom: 0 !important; }
          .shadow-sm, .ring-1 { box-shadow: none !important; }
          .bg-[radial-gradient(60rem_60rem_at_50%_-10rem,#0ea5e9_10%,transparent_60%)] { display: none; }
        }
      `}</style>
    </main>
  );
};

export default GuidePage;
