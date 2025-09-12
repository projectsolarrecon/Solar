import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";

/** Local helper: lightweight callout (avoids extra imports) */
function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "note" | "warn" | "danger" | "success";
  title?: string;
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    note: "bg-slate-50 border-slate-200 text-slate-900",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    danger: "bg-red-50 border-red-200 text-red-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  };
  const cls = tones[tone] ?? tones.info;
  return (
    <div className={`rounded-xl border p-5 md:p-6 ${cls}`}>
      {title && <h4 className="font-semibold mb-2">{title}</h4>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/** Local helper: section band (thin slate gradient) */
function BandHeader({
  k,
  title,
  subtitle,
  icon,
}: {
  k: string;
  title: string;
  subtitle?: string;
  icon?: string;
}) {
  return (
    <div id={k} className="rounded-xl overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-5 py-4 flex items-center gap-3">
        {icon && <span aria-hidden className="text-xl">{icon}</span>}
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/85 text-sm">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalLicensingGuide(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) =>
    setChecked((p) => ({ ...p, [id]: !p[id] }));

  const handlePrint = () => window.print();

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants"
        description="A practical, print-friendly guide for registrants: how licenses and certifications open doors, step-by-step pathways, offline options, funding, and state-by-state considerations."
        keywords="licensing for registrants, certification, trades, CDL, cosmetology, home inspection, IT certifications, phlebotomy, billing, notary, tax prep, reentry work, SOLAR"
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              to="/resources"
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Resources
            </Link>
          </div>

          <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            Career & Licensing Toolkit
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mt-4 max-w-3xl">
            🧭 A practical, step-by-step map to stable work: what licenses are, where to start, offline alternatives, funding, and the pathways that consistently work for registrants.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow"
            >
              🖨️ Print Guide
            </button>
            <a
              href="#sources"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors shadow text-center"
            >
              📚 Skip to Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ShareBar />

        {/* Introduction */}
        <BandHeader
          k="intro"
          title="Introduction"
          icon="🎯"
          subtitle="Why licenses matter—and how to start even if you feel lost."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              Why do licenses matter? For many people on the registry, stable jobs feel out of reach.
              Applications get tossed, stigma blocks opportunities, and it can feel like there’s no way forward.
              A <strong>professional license or certification</strong> can change that story:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It creates <strong>credibility</strong> that employers and customers recognize.</li>
              <li>It can open doors to <strong>self-employment</strong>, where you set the rules.</li>
              <li>It offers a <strong>sense of pride and accomplishment</strong> after years of barriers.</li>
            </ul>
            <p>
              This guide is not just for those who already know the first step. It’s for anyone who feels lost,
              who doesn’t even know what they don’t know. It’s written to meet you at the starting line and walk you through the basics.
            </p>

            <Callout tone="warn" title="⚠️ Important Reminder">
              <p>
                Every state is different. Some boards block registrants outright, others only for certain crimes,
                and many now have <strong>fair-chance laws</strong> that require them to look at rehabilitation and relevance
                instead of issuing blanket bans. Always check your own state’s rules first.
              </p>
            </Callout>
          </div>
        </section>

        {/* Step Zero */}
        <BandHeader
          k="step-zero"
          title="Step Zero: Understanding Licenses and Preparing Yourself"
          icon="🧰"
          subtitle="Know the terms, where rules live, and how to assemble your case."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <h3 className="text-lg font-semibold">🧾 What’s the difference?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>License:</strong> Permission from your state to do certain work. Without it, you can’t legally
                practice (e.g., electrician, barber, home inspector).
              </li>
              <li>
                <strong>Certification:</strong> A credential from a group or company showing you passed their test
                (e.g., IT CompTIA, medical billing). Usually not state-controlled.
              </li>
              <li>
                <strong>Diploma/Degree:</strong> Proof of education (GED, associate’s, bachelor’s). Sometimes required to sit for exams.
              </li>
            </ul>

            <h3 className="text-lg font-semibold">🏛️ How licenses are regulated</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most are handled by <strong>state licensing boards</strong> (cosmetology, trades, real estate).</li>
              <li>Some are federal (CDL with TSA screening).</li>
              <li>Certifications are usually managed by <strong>national associations</strong> (IT, healthcare, accounting).</li>
            </ul>

            <h3 className="text-lg font-semibold">⛔ Barriers you may face</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Background checks and “good moral character” clauses.</li>
              <li>Discretionary decision-making by boards.</li>
              <li>Collateral consequences that vary by state.</li>
            </ul>

            <h3 className="text-lg font-semibold">🧭 Offline + Online Research</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Online:</strong> Use the{" "}
                <a
                  href="https://niccc.csgjusticecenter.org/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  National Inventory of Collateral Consequences (NICCC)
                </a>{" "}
                and state board websites.
              </li>
              <li>
                <strong>Offline:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>☎️ Call state boards directly and request mailed application packets.</li>
                  <li>📚 Visit libraries for printed rulebooks or licensing handbooks.</li>
                  <li>🤝 Ask probation/parole officers or reentry caseworkers for state brochures.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-lg font-semibold">📂 Build Your Case Early</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect letters of support (employers, pastors, mentors, community leaders).</li>
              <li>Gather diplomas, work records, and training certificates.</li>
              <li>Keep a <strong>physical folder</strong> with everything in it for mailed applications.</li>
            </ul>

            <Callout tone="info" title="💡 Pro Tip">
              <p>
                Think of your licensing application like a <strong>court case in your favor</strong> — the more evidence
                of rehabilitation and readiness you have, the better.
              </p>
            </Callout>
          </div>
        </section>

        {/* Pathway 1 */}
        <BandHeader
          k="path-trades"
          title="Pathway 1: Skilled Trades (HVAC, Electrical, Plumbing, Welding)"
          icon="🧱"
          subtitle="High demand, earn-while-you-learn apprenticeships, strong self-employment potential."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p>
              <strong>Why it works:</strong> Tradespeople are in demand everywhere. Apprenticeships pay you while you learn,
              and most boards don’t impose lifetime bans.
            </p>
            <h3 className="text-lg font-semibold">🪜 Steps</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Apply for apprenticeship (union, trade school, contractor).</li>
              <li>Train and work 2–5 years as apprentice.</li>
              <li>Pass journeyman exam.</li>
              <li>After more years, test for master license (optional but boosts independence).</li>
            </ol>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> Tuition $1,000–$7,000/year; exams $50–$150; starter tools $500–$2,000.</li>
              <li><strong>Funding:</strong> Workforce grants (WIOA), union support, reentry nonprofit vouchers.</li>
              <li><strong>Job Outlook:</strong> Excellent. Every community needs plumbers, HVAC, electricians.</li>
              <li><strong>Self-Employment:</strong> Strong path to contracting, repair services, and LLC ownership.</li>
            </ul>
            <p>
              👤 <strong>Best Fit Traits:</strong> Hands-on learners, problem-solvers, people who like seeing tangible results,
              and those who can handle physical work.
            </p>

            <Callout tone="note" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Call union halls directly for apprenticeship openings.</li>
                <li>Check bulletin boards at workforce centers or libraries.</li>
                <li>Visit community colleges in person for printed course catalogs.</li>
                <li>Knock on doors at small trade companies and ask if they’ll train you.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 2 */}
        <BandHeader
          k="path-cdl"
          title="Pathway 2: Commercial Driving (CDL)"
          icon="🚚"
          subtitle="One of the largest industries; solid earnings, clear steps."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> Trucking is one of the largest industries in America.</p>

            <h3 className="text-lg font-semibold">🛣️ Steps</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Get CDL learner’s permit (written test at DMV).</li>
              <li>Complete Entry-Level Driver Training (ELDT).</li>
              <li>Pass road test in a truck.</li>
              <li>Complete DOT medical exam.</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> $3,000–$7,000 CDL school (sometimes covered by employer).</li>
              <li>
                <strong>Restrictions:</strong> TSA bans <strong>HazMat endorsements</strong> for certain crimes (including sexual assault).
                Passenger endorsements may also be restricted. But <strong>general freight jobs don’t need these.</strong>
              </li>
              <li><strong>Job Outlook:</strong> Very high demand, $45k–$60k starting pay.</li>
              <li><strong>Self-Employment:</strong> Possible as owner-operator, but requires major investment in truck/insurance.</li>
            </ul>

            <p>
              👤 <strong>Best Fit Traits:</strong> Independent, detail-oriented, reliable. Good for people who enjoy travel,
              alone time, and steady paychecks.
            </p>

            <Callout tone="info" title="🗺️ Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Pick up a free CDL handbook at the DMV.</li>
                <li>Call trucking companies; they often recruit by phone and send paper applications.</li>
                <li>Visit local workforce development centers for training vouchers.</li>
              </ul>
            </Callout>
          </div>
        </section>
        {/* Pathway 3 */}
        <BandHeader
          k="path-it"
          title="Pathway 3: IT Certifications (Non-Licensed)"
          icon="💻"
          subtitle="No state board gatekeeping; start with CompTIA A+ and build."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> No state board restrictions; demand for tech help everywhere.</p>

            <h3 className="text-lg font-semibold">🪜 Typical Steps</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Study for CompTIA A+.</li>
              <li>Pass two exams ($253 each).</li>
              <li>Move to higher certifications (Network+, Security+).</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> $500+ for exams; training can be cheap with self-study.</li>
              <li><strong>Funding:</strong> Workforce programs sometimes cover IT certs.</li>
              <li><strong>Job Outlook:</strong> Growing, especially for help desk and support roles.</li>
              <li><strong>Self-Employment:</strong> Freelance computer repair, tech support, or small-business IT services.</li>
            </ul>

            <p>👤 <strong>Best Fit Traits:</strong> Logical thinkers, tinkerers, gamers, curious minds, detail-oriented.</p>

            <Callout tone="note" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Borrow study guides from the library.</li>
                <li>Ask local community colleges for printed IT program catalogs.</li>
                <li>Buy used exam prep books.</li>
                <li>Goodwill career centers sometimes offer IT training offline.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 4 */}
        <BandHeader
          k="path-cosmo"
          title="Pathway 4: Cosmetology & Barbering"
          icon="💇‍♀️"
          subtitle="High self-employment potential; clients follow people they trust."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> High self-employment potential — clients follow people they trust.</p>

            <h3 className="text-lg font-semibold">🪜 Steps</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Enroll in cosmetology/barber school (1,000–2,000 hours).</li>
              <li>Pass written and practical exams.</li>
              <li>Apply for state license.</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> $5,000–$20,000 tuition; exams $50–$200.</li>
              <li><strong>Restrictions:</strong> Vary by state. Some use “good moral character” tests, others must accept rehabilitation.</li>
              <li><strong>Job Outlook:</strong> Steady — everyone needs hair care.</li>
              <li><strong>Self-Employment:</strong> Strong — chair rental, mobile services, or owning your own shop.</li>
            </ul>

            <p>👤 <strong>Best Fit Traits:</strong> Outgoing, creative, social, detail-oriented, patient.</p>

            <Callout tone="info" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Visit local cosmetology schools in person.</li>
                <li>Call state boards for mailed application packets.</li>
                <li>Look for church or nonprofit programs that partner with beauty schools.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 5 */}
        <BandHeader
          k="path-home"
          title="Pathway 5: Home & Property Services (Inspector, Contractor, Landscaping, Pest Control)"
          icon="🏠"
          subtitle="Housing is constant; licenses open strong small-business options."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> Housing is constant; services always in demand.</p>

            <h3 className="text-lg font-semibold">🧭 Steps (Inspector)</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Complete pre-license course.</li>
              <li>Pass state exam.</li>
              <li>Buy insurance/bonding.</li>
              <li>Apply for license.</li>
            </ol>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> $1,000–$3,000 courses; exams $100–$300; insurance varies.</li>
              <li><strong>Job Outlook:</strong> Strong, especially in growing housing markets.</li>
              <li><strong>Self-Employment:</strong> Very strong — run your own business, advertise locally.</li>
            </ul>

            <p>👤 <strong>Best Fit Traits:</strong> Independent, outdoorsy, detail-minded, like physical tasks.</p>

            <Callout tone="note" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Ask your library for state licensing guides.</li>
                <li>Call your real estate board; they often oversee inspectors.</li>
                <li>Talk directly with realtors about apprenticeship opportunities.</li>
              </ul>
            </Callout>
          </div>
        </section>
        {/* Pathway 6 */}
        <BandHeader
          k="path-health"
          title="Pathway 6: Health-Adjacent Roles (Phlebotomy, Billing)"
          icon="🩺"
          subtitle="Healthcare demand is steady; billing/coding avoids direct-care restrictions."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> Healthcare always needs support staff.</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Phlebotomy Steps:</strong> Short course (4–12 weeks) → NHA CPT exam (~$125) → jobs in labs/clinics.
              </li>
              <li>
                <strong>Billing Steps:</strong> 6–12 month course → certification → remote/in-office jobs.
              </li>
            </ul>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> $1,000–$3,000 courses; $125+ exams.</li>
              <li><strong>Restrictions:</strong> Some states block direct patient care. Billing/coding is safer.</li>
              <li><strong>Job Outlook:</strong> Growing faster than average.</li>
              <li><strong>Self-Employment:</strong> Limited for phlebotomy; strong for billing as freelance contracts.</li>
            </ul>

            <p>👤 <strong>Best Fit Traits:</strong> Detail-oriented, comfortable with routine, organized, patient.</p>

            <Callout tone="info" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Ask hospitals or Red Cross about local phlebotomy classes.</li>
                <li>Pick up course catalogs at community colleges.</li>
                <li>Call workforce centers about medical billing scholarships.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 7 */}
        <BandHeader
          k="path-biz"
          title="Pathway 7: Business & Financial Services (Tax Prep, Notary, Bookkeeping)"
          icon="📇"
          subtitle="Low-cost, flexible, home-based opportunities."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <p><strong>Why it works:</strong> Low-cost, flexible, home-based opportunities.</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tax Prep Steps:</strong> Apply for IRS PTIN → optional course → offer services.</li>
              <li><strong>Notary Steps:</strong> Apply with state → pay small fee ($50–$200) → notarize documents.</li>
              <li><strong>Bookkeeping Steps:</strong> Learn QuickBooks → certification course → find clients.</li>
            </ul>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Costs:</strong> Often under $500.</li>
              <li><strong>Job Outlook:</strong> Steady, especially for small business support.</li>
              <li><strong>Self-Employment:</strong> Strong; seasonal or year-round.</li>
            </ul>

            <p>👤 <strong>Best Fit Traits:</strong> Organized, dependable, like paperwork and accuracy.</p>

            <Callout tone="note" title="📎 Offline Alternatives">
              <ul className="list-disc pl-6">
                <li>Call IRS for mailed PTIN instructions.</li>
                <li>Visit county clerk’s office for notary application.</li>
                <li>Pick up adult-ed brochures at library or town hall.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Funding Options */}
        <BandHeader
          k="funding"
          title="Funding Options"
          icon="💵"
          subtitle="Realistic ways to cover tuition, tests, and tools."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WIOA grants:</strong> Apply in person at workforce centers.</li>
              <li><strong>Community college aid:</strong> Walk into financial aid office.</li>
              <li><strong>Nonprofits:</strong> Goodwill, Salvation Army, local reentry programs.</li>
              <li><strong>Employer sponsorships:</strong> Especially in trucking.</li>
            </ul>

            <Callout tone="success" title="✅ Quick Wins">
              <ul className="list-disc pl-6">
                <li>Ask about <em>reentry-specific</em> vouchers—many offices have them but don’t advertise.</li>
                <li>Bring proof of income and ID to speed up approvals.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Building Your Case */}
        <BandHeader
          k="case"
          title="Building Your Case for Approval"
          icon="🧾"
          subtitle="Assemble a persuasive packet that boards respect."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-6 text-slate-800">
            <ul className="list-disc pl-6 space-y-2">
              <li>Write a personal statement (typed or handwritten).</li>
              <li>Collect letters of support.</li>
              <li>Gather proof of stability (work, education, treatment).</li>
              <li>Always be polite and persistent.</li>
            </ul>

            <Callout tone="note" title="💡 Offline Tip">
              <p>Boards still accept paper letters. Keep multiple copies.</p>
            </Callout>
          </div>
        </section>

        {/* Quick Start Checklist */}
        <BandHeader
          k="checklist"
          title="Quick Start Checklist"
          icon="🏁"
          subtitle="Eight moves to make progress this week."
        />
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-6 space-y-3 text-slate-800">
            {/* Simple check UI using local state */}
            {[
              { id: "qs1", text: "Pick a pathway that fits your interests and traits." },
              { id: "qs2", text: "Check your state’s rules (online or by phone)." },
              { id: "qs3", text: "Map training time and costs." },
              { id: "qs4", text: "Find funding (workforce center, nonprofits, employer)." },
              { id: "qs5", text: "Build your evidence packet." },
              { id: "qs6", text: "Apply honestly." },
              { id: "qs7", text: "Appeal if denied." },
              { id: "qs8", text: "Build side skills while waiting." },
            ].map((item) => (
              <label key={item.id} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checked[item.id]}
                  onChange={() => toggle(item.id)}
                  className="mt-1 h-4 w-4 text-emerald-600 rounded border-slate-300"
                />
                <span className={checked[item.id] ? "line-through text-slate-500" : ""}>
                  {item.text}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Sources */}
        <BandHeader
          k="sources"
          title="Sources & Lookups"
          icon="📚"
          subtitle="Verified links and official references"
        />
        <section id="sources" className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-6 space-y-4 text-slate-800">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-2 text-blue-900">
                <li>
                  <a
                    href="https://niccc.csgjusticecenter.org/"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    National Inventory of Collateral Consequences (NICCC)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.apprenticeship.gov/apprenticeship-finder"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    Apprenticeship Finder
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    FMCSA ELDT Overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    TSA HazMat Disqualifiers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.comptia.org/certifications/a"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    CompTIA A+
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhanow.com/certifications/phlebotomy-technician"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    NHA CPT
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.barbercosmo.ca.gov/"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    CA Cosmetology Board
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homeinspector.org/Resources/State-Regulations"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    ASHI State Regulations
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-blue-700"
                  >
                    IRS PTIN Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Share + Back nav */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/resources"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              ← Back to All Resources
            </Link>
            <div className="w-full sm:w-auto">
              <ShareBar />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
      }
