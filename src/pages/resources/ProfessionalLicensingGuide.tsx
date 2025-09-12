import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

/** ---------- Local icon helpers (emoji only) ---------- */
const I = {
  arrow: () => "↗",
  info: () => "ℹ️",
  warn: () => "⚠️",
  tip: () => "💡",
  success: () => "✅",
  note: () => "🗒️",
  phone: () => "☎️",
  book: () => "📘",
  hammer: () => "🔧",
  bolt: () => "⚡",
  pipe: () => "🛠️",
  weld: () => "🔥",
  truck: () => "🚚",
  cone: () => "🛣️",
  chip: () => "💻",
  keyboard: () => "⌨️",
  lock: () => "🔒",
  scissors: () => "✂️",
  salon: () => "💅",
  home: () => "🏠",
  magnify: () => "🔍",
  leaves: () => "🍃",
  bug: () => "🐜",
  stetho: () => "🩺",
  syringe: () => "💉",
  file: () => "📄",
  dollar: () => "💵",
  shield: () => "🛡️",
  check: () => "☑️",
  star: () => "⭐",
  link: () => "🔗",
  mail: () => "✉️",
  pin: () => "📌",
};

/** ---------- Shared UI ---------- */
function Band({
  label,
  number,
  icon,
}: {
  label: string;
  number?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center text-lg font-bold">
          {number ?? "✓"}
        </div>
        <div className="flex items-center gap-2 text-white">
          {icon && <span className="text-xl" aria-hidden>{icon}</span>}
          <h2 className="text-2xl font-bold">{label}</h2>
        </div>
      </div>
    </div>
  );
}

function Callout({
  title,
  children,
  tone = "info",
  icon,
}: {
  title: string;
  children: React.ReactNode;
  tone?: "info" | "warn" | "tip" | "note" | "success";
  icon?: React.ReactNode;
}) {
  const toneMap = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warn: "bg-amber-50 border-amber-200 text-amber-900",
    tip: "bg-indigo-50 border-indigo-200 text-indigo-900",
    note: "bg-slate-50 border-slate-200 text-slate-900",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  } as const;
  const cls = toneMap[tone] || toneMap.info;
  return (
    <div className={`rounded-lg border p-5 ${cls}`}>
      <div className="font-semibold mb-2 flex items-center gap-2">
        {icon && <span aria-hidden>{icon}</span>}
        <span>{title}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function CheckItem({
  id,
  label,
  checked,
  onToggle,
  icon = I.check(),
}: {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  onToggle: (id: string) => void;
  icon?: string;
}) {
  return (
    <label className="flex items-start gap-3 text-gray-800">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <span className={checked ? "line-through text-gray-500" : ""}>
        <span className="mr-2" aria-hidden>{icon}</span>
        {label}
      </span>
    </label>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="text-blue-700 underline hover:text-blue-900 inline-flex items-center gap-1"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children} <span aria-hidden>{I.arrow()}</span>
    </a>
  );
}

function IconList({
  items,
}: {
  items: Array<{ icon: string; content: React.ReactNode }>;
}) {
  return (
    <ul className="space-y-2">
      {items.map((it, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-0.5" aria-hidden>{it.icon}</span>
          <span>{it.content}</span>
        </li>
      ))}
    </ul>
  );
}

/** ---------- Page ---------- */
export default function ProfessionalLicensingGuide(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants | The SOLAR Project"
        description="Icon-forward guide to licenses, certifications, offline options, and step-by-step pathways with embedded sources for people on sex offense registries."
        keywords="SOLAR, professional licenses, certifications, trades, CDL, cosmetology, inspector, IT, phlebotomy, reentry, fair-chance licensing"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Back to Resources
            </Link>
          </div>

          <span className="bg-slate-700/70 text-white text-sm font-medium px-3 py-1 rounded-full">
            {I.star()} Career & Income
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 flex items-center gap-3">
            <span aria-hidden>{I.file()}</span>
            SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mt-4 max-w-3xl">
            Licenses and certs can unlock <strong>credibility</strong>,{" "}
            <strong>self-employment</strong>, and <strong>stability</strong>. This guide is
            packed with <em>iconic</em> callouts, offline alternatives, and embedded links so you can move today.
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => window.print()}
              className="bg-white text-slate-800 px-5 py-2 rounded-lg font-semibold hover:bg-slate-50 shadow"
            >
              🖨️ Print
            </button>
            <a
              href="#sources"
              className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-slate-800"
            >
              {I.link()} Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro / Step Zero */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.info()} label="Introduction: Why licenses matter" />
          <div className="p-6 space-y-6 text-gray-800">
            <IconList
              items={[
                { icon: I.check(), content: <><strong>Credibility</strong> employers & customers recognize</> },
                { icon: I.check(), content: <><strong>Self-employment</strong> when hiring walls appear</> },
                { icon: I.check(), content: <>A path to <strong>stability & pride</strong></> },
              ]}
            />

            <Callout title="Important reminder" tone="warn" icon={I.warn()}>
              {I.pin()} Every state is different. Many now have{" "}
              <A href="https://niccc.csgjusticecenter.org/">fair-chance licensing laws</A> requiring boards to weigh rehabilitation and job relevance. Always check exact board language.
            </Callout>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold mb-2">{I.book()} Licenses vs. Certifications</h3>
                <IconList
                  items={[
                    { icon: "🏛️", content: <><strong>License</strong>: state permission (e.g., electrician, barber)</> },
                    { icon: "🏅", content: <><strong>Certification</strong>: private credential (e.g., <A href="https://www.comptia.org/certifications/a">CompTIA A+</A>)</> },
                    { icon: "🎓", content: <><strong>Diploma/Degree</strong>: may unlock exam eligibility</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold mb-2">{I.link()} Research (Online & Offline)</h3>
                <IconList
                  items={[
                    { icon: "🌐", content: <>Online: <A href="https://niccc.csgjusticecenter.org/">NICCC</A> + your state board</> },
                    { icon: I.phone(), content: <>Call boards and request <strong>mailed packets</strong></> },
                    { icon: "🏫", content: <>Library: printed rulebooks & licensing guides</> },
                    { icon: "🤝", content: <>Reentry staff: brochures + contacts</> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Pro Tip" tone="tip" icon={I.tip()}>
              Treat your application like a mini case in your favor: {I.mail()} letters of support, {I.file()} diplomas & certificates, {I.shield()} short personal statement.
            </Callout>
          </div>
        </section>

        {/* Pathway 1: Trades */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="trades">
          <Band icon={I.hammer()} label="Pathway 1: Skilled Trades (HVAC, Electrical, Plumbing, Welding)" number="1" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} In-demand; apprenticeships often <strong>pay while you learn</strong>.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <IconList
                  items={[
                    { icon: I.hammer(), content: <>Apply to union/trade school/contractor apprenticeship</> },
                    { icon: I.bolt(), content: <>Work 2–5 yrs → pass journeyman exam</> },
                    { icon: I.pipe(), content: <>Optional master license for independence</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Costs & Funding</h4>
                <IconList
                  items={[
                    { icon: I.dollar(), content: <>Tuition $1,000–$7,000/yr; Exams $50–$150; Tools $500–$2,000</> },
                    { icon: "🧰", content: <>Funding: WIOA + <A href="https://www.apprenticeship.gov/apprenticeship-finder">Apprenticeship Finder</A></> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.phone()} Walk into union halls • {I.book()} pick up printed catalogs at community colleges • {I.hammer()} ask small contractors if they’ll train you.
            </Callout>
          </div>
        </section>

        {/* Pathway 2: CDL */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="cdl">
          <Band icon={I.truck()} label="Pathway 2: Commercial Driving (CDL)" number="2" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.info()} Massive industry; many employers recruit trainees directly.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <IconList
                  items={[
                    { icon: "📝", content: <>CDL learner’s permit (DMV written test)</> },
                    { icon: I.cone(), content: <>Complete <A href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt">FMCSA ELDT</A></> },
                    { icon: "🚦", content: <>Road test + DOT medical</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Costs & Restrictions</h4>
                <IconList
                  items={[
                    { icon: I.dollar(), content: <>School $3,000–$7,000 (often employer-funded)</> },
                    { icon: I.lock(), content: <>TSA HazMat disqualifiers: <A href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program">see list</A> (general freight usually fine)</> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.book()} Grab the free CDL handbook at DMV • {I.mail()} call carriers for mailed applications • {I.dollar()} ask workforce center about vouchers.
            </Callout>
          </div>
        </section>

        {/* Pathway 3: IT */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="it">
          <Band icon={I.chip()} label="Pathway 3: IT Certifications (Non-Licensed)" number="3" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} No state board barriers; huge need for help-desk & support.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <IconList
                  items={[
                    { icon: I.keyboard(), content: <>Study for <A href="https://www.comptia.org/certifications/a">CompTIA A+</A></> },
                    { icon: "🧪", content: <>Pass two exams (~$253 each)</> },
                    { icon: "📈", content: <>Advance to Network+ / Security+</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Low-Cost Prep</h4>
                <IconList
                  items={[
                    { icon: I.book(), content: <>Borrow exam guides at the library</> },
                    { icon: "🏫", content: <>Ask community colleges for printed catalogs</> },
                    { icon: "💼", content: <>Goodwill career centers often offer IT training</> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Pro Tip" tone="tip" icon={I.tip()}>
              Build a tiny home lab (old laptop + free virtualization). {I.file()} Add screenshots to your resume.
            </Callout>
          </div>
        </section>

        {/* Pathway 4: Cosmetology */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="cosmetology">
          <Band icon={I.scissors()} label="Pathway 4: Cosmetology & Barbering" number="4" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.info()} High self-employment potential—clients follow people, not brands.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <IconList
                  items={[
                    { icon: I.salon(), content: <>School (1,000–2,000 hours)</> },
                    { icon: "🧪", content: <>Written + practical exams</> },
                    { icon: "🪪", content: <>Apply for state license</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Know your board</h4>
                <IconList
                  items={[
                    { icon: I.shield(), content: <>Some states use “moral character” clauses; many must weigh rehabilitation</> },
                    { icon: I.link(), content: <>Example board: <A href="https://www.barbercosmo.ca.gov/">CA Barbering & Cosmetology</A></> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.phone()} Visit local cosmetology schools • call the board for mailed packets • ask churches/nonprofits about scholarships.
            </Callout>
          </div>
        </section>

        {/* Pathway 5: Home/Property */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="home-property">
          <Band icon={I.home()} label="Pathway 5: Home & Property Services (Inspector, Contractor, Landscaping, Pest Control)" number="5" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} Housing is constant; demand stays strong.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Inspector — Steps</h4>
                <IconList
                  items={[
                    { icon: I.magnify(), content: <>Pre-license course</> },
                    { icon: "📝", content: <>State exam</> },
                    { icon: I.shield(), content: <>Insurance/bonding</> },
                    { icon: "🪪", content: <>Apply for license</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">State rules</h4>
                <IconList
                  items={[
                    { icon: I.link(), content: <>Check <A href="https://www.homeinspector.org/Resources/State-Regulations">ASHI state regulations</A></> },
                    { icon: "🏢", content: <>Talk to your real-estate board for details</> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.book()} Libraries carry state licensing guides • {I.magnify()} real-estate boards often oversee inspectors • 🤝 ask local realtors about shadowing.
            </Callout>
          </div>
        </section>

        {/* Pathway 6: Health-adjacent */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="health-adjacent">
          <Band icon={I.stetho()} label="Pathway 6: Health-Adjacent Roles (Phlebotomy, Billing)" number="6" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>
              {I.info()} Healthcare always needs support staff. Some states restrict <em>direct</em> patient care; billing/coding is typically safer.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Phlebotomy — Steps</h4>
                <IconList
                  items={[
                    { icon: "⏱️", content: <>4–12 week course</> },
                    { icon: I.syringe(), content: <>NHA CPT (~$125): <A href="https://www.nhanow.com/certifications/phlebotomy-technician">details</A></> },
                    { icon: "🏥", content: <>Labs/clinics hiring pipelines</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Billing — Steps</h4>
                <IconList
                  items={[
                    { icon: I.book(), content: <>6–12 month course</> },
                    { icon: "🏅", content: <>Certification</> },
                    { icon: "💼", content: <>Remote or in-office roles</> },
                  ]}
                />
              </div>
            </div>
            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Libraries carry state licensing guides</li>
                <li>Real-estate boards often oversee inspectors</li>
                <li>Ask realtors about apprenticeship openings</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 6: Health-Adjacent */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.health()} label="Pathway 6: Health-Adjacent Roles (Phlebotomy, Billing)" number="6" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} Healthcare always needs support staff.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Phlebotomy</h4>
                <IconList
                  items={[
                    { icon: "🩸", content: <>4–12 week course</> },
                    { icon: "📜", content: <>NHA CPT exam (~$125)</> },
                    { icon: "🏥", content: <>Jobs in labs/clinics</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Billing</h4>
                <IconList
                  items={[
                    { icon: "💻", content: <>6–12 month course</> },
                    { icon: "🧾", content: <>Certification exam</> },
                    { icon: "🏠", content: <>Remote or in-office roles</> },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.phone()} Hospitals/Red Cross for local classes • {I.book()} community-college catalogs • {I.dollar()} workforce centers for scholarships.
            </Callout>
          </div>
        </section>

        {/* Pathway 7: Business & Financial */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.dollar()} label="Pathway 7: Business & Financial Services (Tax Prep, Notary, Bookkeeping)" number="7" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} Low-cost, flexible, home-based opportunities.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <IconList
                  items={[
                    { icon: "🧾", content: <>Tax prep: IRS PTIN → optional course → start seasonal work</> },
                    { icon: "🖋️", content: <>Notary: apply with state; pay fee; notarize documents</> },
                    { icon: "📊", content: <>Bookkeeping: learn QuickBooks; cert; find clients</> },
                  ]}
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Links</h4>
                <IconList
                  items={[
                    {
                      icon: I.link(),
                      content: <>IRS PTIN info: <A href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers">requirements</A></>,
                    },
                  ]}
                />
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              {I.mail()} Call IRS for PTIN by mail • 🏛️ visit county clerk for notary app • {I.book()} library/town hall adult-ed brochures.
            </Callout>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.dollar()} label="Funding Options" />
          <div className="p-6 space-y-4 text-gray-800">
            <IconList
              items={[
                { icon: I.dollar(), content: <><strong>WIOA grants</strong> — apply at workforce centers</> },
                { icon: "🏫", content: <><strong>Community-college aid</strong> — talk to financial-aid desk</> },
                { icon: "🤝", content: <><strong>Nonprofits</strong> — Goodwill, Salvation Army, local reentry orgs</> },
                { icon: "🚚", content: <><strong>Employer sponsorships</strong> — common in trucking</> },
              ]}
            />
          </div>
        </section>

        {/* Build your case */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.shield()} label="Build Your Case for Approval" />
          <div className="p-6 space-y-6 text-gray-800">
            <IconList
              items={[
                { icon: I.file(), content: <>Personal statement (typed/handwritten)</> },
                { icon: "📣", content: <>Letters of support (employers, mentors, faith leaders)</> },
                { icon: "📎", content: <>Proof of stability (work, education, treatment)</> },
                { icon: "📞", content: <>Be polite & persistent; ask about appeals</> },
              ]}
            />
            <Callout title="Offline Tip" tone="tip" icon={I.tip()}>
              Boards still accept paper letters — keep multiple <strong>signed</strong> copies ready.
            </Callout>
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.check()} label="Quick Start Checklist" />
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {[
              ["pick", "Pick a pathway that fits your interests/traits", "🧭"],
              ["rules", "Check your state’s rules (online or by phone)", "🏛️"],
              ["map", "Map training time and costs", "🗺️"],
              ["fund", "Find funding (workforce, nonprofits, employer)", "💸"],
              ["packet", "Build your evidence packet", "🗂️"],
              ["apply", "Apply honestly", "📝"],
              ["appeal", "Appeal if denied", "📨"],
              ["side", "Build side skills while waiting", "🧰"],
            ].map(([id, text, ico]) => (
              <CheckItem
                key={id}
                id={id}
                label={<span>{text}</span>}
                icon={ico as string}
                checked={!!checked[id]}
                onToggle={toggle}
              />
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="sources">
          <Band icon={I.file()} label="Sources & Lookups" />
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li><A href="https://niccc.csgjusticecenter.org/">NICCC — Collateral Consequences</A></li>
                <li><A href="https://www.apprenticeship.gov/apprenticeship-finder">Apprenticeship Finder</A></li>
                <li><A href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt">FMCSA ELDT Overview</A></li>
                <li><A href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program">TSA HazMat Disqualifiers</A></li>
                <li><A href="https://www.comptia.org/certifications/a">CompTIA A+</A></li>
              </ul>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li><A href="https://www.nhanow.com/certifications/phlebotomy-technician">NHA CPT (Phlebotomy)</A></li>
                <li><A href="https://www.barbercosmo.ca.gov/">CA Barbering & Cosmetology Board</A></li>
                <li><A href="https://www.homeinspector.org/Resources/State-Regulations">ASHI State Regulations</A></li>
                <li><A href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers">IRS PTIN Info</A></li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .print\\:mb-8 { margin-bottom: 2rem !important; }
          body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
        }

            <Callout
