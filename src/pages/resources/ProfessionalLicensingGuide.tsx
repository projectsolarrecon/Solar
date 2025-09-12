import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

/** ---------- Local icon helpers (emoji, zero deps) ---------- */
const I = {
  info: () => "ℹ️",
  warn: () => "⚠️",
  tip: () => "💡",
  success: () => "✅",
  phone: () => "☎️",
  book: () => "📘",
  hammer: () => "🔧",
  truck: () => "🚚",
  chip: () => "💻",
  scissors: () => "✂️",
  home: () => "🏠",
  stetho: () => "🩺",
  dollar: () => "💵",
  shield: () => "🛡️",
  check: () => "☑️",
  file: () => "📄",
  link: () => "🔗",
};

/** ---------- Small shared UI ---------- */
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
}: {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <label className="flex items-start gap-3 text-gray-800">
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <span className={checked ? "line-through text-gray-500" : ""}>{label}</span>
    </label>
  );
}

function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-blue-700 underline hover:text-blue-900 inline-flex items-center gap-1"
      href={href}
      target="_blank"
      rel="noopener"
    >
      {children} <span aria-hidden>↗</span>
    </a>
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
        description="High-utility, icon-driven guide to licenses, certifications, offline options, and step-by-step pathways with embedded sources for people on sex offense registries."
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
            Career & Income
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            {I.file()} SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants
          </h1>

          <p className="text-lg md:text-xl text-slate-100 mt-4 max-w-3xl">
            Licenses and certs can unlock credibility, self-employment, and pride.
            This guide is heavy on **practical steps**, **offline alternatives**, and
            **embedded links** so you can move forward today.
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
            <p>
              {I.check()} <strong>Credibility</strong> employers & customers recognize. <br />
              {I.check()} <strong>Self-employment</strong> paths when hiring walls appear. <br />
              {I.check()} A real shot at <strong>stability & pride</strong>.
            </p>

            <Callout title="Important reminder" tone="warn" icon={I.warn()}>
              Every state is different. Many now have{" "}
              <A href="https://niccc.csgjusticecenter.org/">fair-chance licensing rules</A>{" "}
              requiring boards to weigh rehabilitation and job relevance.
              Always check your state board’s exact language.
            </Callout>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold mb-2">{I.book()} Licenses vs. Certifications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>License</strong>: state permission to practice (e.g., electrician, barber).</li>
                  <li><strong>Certification</strong>: private credential (e.g., <A href="https://www.comptia.org/certifications/a">CompTIA A+</A>).</li>
                  <li><strong>Diploma/Degree</strong>: education requirement that may unlock exams.</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold mb-2">{I.link()} Research (Online & Offline)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Online: <A href="https://niccc.csgjusticecenter.org/">NICCC</A> + state boards</li>
                  <li>Phone: call boards and request mailed packets</li>
                  <li>Library: printed rulebooks & licensing guides</li>
                  <li>Reentry staff: ask for brochures + contacts</li>
                </ul>
              </div>
            </div>

            <Callout title="Pro Tip" tone="tip" icon={I.tip()}>
              Treat your application like a small case in your favor: letters of support, diplomas,
              work records, training certificates, and a short personal statement.
            </Callout>
          </div>
        </section>

        {/* Pathway 1: Trades */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="trades">
          <Band icon={I.hammer()} label="Pathway 1: Skilled Trades (HVAC, Electrical, Plumbing, Welding)" number="1" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>
              {I.success()} In demand everywhere; apprenticeships often{" "}
              <strong>pay while you learn</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Apply to union/trade school/contractor apprenticeship</li>
                  <li>Work 2–5 yrs as apprentice → pass journeyman exam</li>
                  <li>Optional: master license for independence</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Costs & Funding</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tuition: $1,000–$7,000/yr; Exams: $50–$150</li>
                  <li>Tools: $500–$2,000 (starter kit)</li>
                  <li>
                    Funding: WIOA grants + apprenticeships via{" "}
                    <A href="https://www.apprenticeship.gov/apprenticeship-finder">Apprenticeship Finder</A>
                  </li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Walk into union halls; visit community colleges for printed catalogs; ask small
              contractors if they’ll train you.
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
                <ol className="list-decimal pl-5 space-y-1">
                  <li>CDL learner’s permit (DMV written test)</li>
                  <li>
                    Complete{" "}
                    <A href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt">
                      FMCSA ELDT
                    </A>
                  </li>
                  <li>Road test in a truck + DOT medical</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Costs & Restrictions</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>$3,000–$7,000 school (often employer-funded)</li>
                  <li>
                    TSA HazMat rules: see{" "}
                    <A href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program">
                      disqualifiers
                    </A>{" "}
                    (general freight usually fine)
                  </li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Pick up the free CDL handbook at DMV; call trucking companies for mailed applications; ask
              your workforce center about vouchers.
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
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Study for <A href="https://www.comptia.org/certifications/a">CompTIA A+</A></li>
                  <li>Pass two exams (about $253 each)</li>
                  <li>Advance to Network+ / Security+</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Low-Cost Prep</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Borrow exam guides from the library</li>
                  <li>Community-college catalogs (ask for printed copies)</li>
                  <li>Goodwill career centers often offer IT training</li>
                </ul>
              </div>
            </div>

            <Callout title="Pro Tip" tone="tip" icon={I.tip()}>
              Build a tiny lab: old laptop + free virtualization + trial Windows/Linux. Show screenshots
              on your resume.
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
                <ol className="list-decimal pl-5 space-y-1">
                  <li>School (1,000–2,000 hours)</li>
                  <li>Written + practical exams</li>
                  <li>Apply for state license</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Know your board</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Some states use “moral character” clauses; many must weigh rehabilitation
                  </li>
                  <li>
                    Example board page:{" "}
                    <A href="https://www.barbercosmo.ca.gov/">CA Barbering & Cosmetology</A>
                  </li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Visit local cosmetology schools; call the board for mailed packets; ask churches/nonprofits
              about scholarships partnered with beauty schools.
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
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Complete pre-license course</li>
                  <li>Pass state exam</li>
                  <li>Insurance/bonding</li>
                  <li>Apply for license</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">State rules</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Check your state via{" "}
                    <A href="https://www.homeinspector.org/Resources/State-Regulations">ASHI regulations</A>
                  </li>
                  <li>Talk to your real-estate board for details</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Libraries carry state licensing guides; real-estate boards often oversee inspectors; ask
              local realtors about shadowing/apprenticeship.
            </Callout>
          </div>
        </section>

        {/* Pathway 6: Health-adjacent */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="health-adjacent">
          <Band icon={I.stetho()} label="Pathway 6: Health-Adjacent Roles (Phlebotomy, Billing)" number="6" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>
              {I.info()} Healthcare always needs support staff. Some states restrict{" "}
              <em>direct</em> patient care; billing/coding is typically safer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Phlebotomy — Steps</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>4–12 week course</li>
                  <li>
                    NHA CPT exam (~$125) —{" "}
                    <A href="https://www.nhanow.com/certifications/phlebotomy-technician">learn more</A>
                  </li>
                  <li>Labs/clinics hiring pipelines</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Billing — Steps</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>6–12 month course</li>
                  <li>Certification</li>
                  <li>Remote or in-office roles</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Ask hospitals/Red Cross about local classes; pick up community-college catalogs; ask
              workforce centers about scholarships.
            </Callout>
          </div>
        </section>

        {/* Pathway 7: Biz/Finance */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden" id="business-finance">
          <Band icon={I.dollar()} label="Pathway 7: Business & Financial Services (Tax Prep, Notary, Bookkeeping)" number="7" />
          <div className="p-6 space-y-6 text-gray-800">
            <p>{I.success()} Low-cost, flexible, often home-based.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tax: get IRS PTIN → optional course → start seasonal work</li>
                  <li>Notary: apply with state; small fee; notarize documents</li>
                  <li>Bookkeeping: learn QuickBooks; cert; get clients</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-semibold mb-2">Links</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    IRS PTIN info:{" "}
                    <A href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers">
                      irs.gov/…/ptin-requirements
                    </A>
                  </li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              Call IRS for mailed PTIN instructions; visit county clerk for notary application; grab
              adult-ed brochures at the library/town hall.
            </Callout>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.dollar()} label="Funding Options" />
          <div className="p-6 space-y-4 text-gray-800">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>WIOA grants</strong> — apply at workforce centers (in person works best)</li>
              <li><strong>Community-college aid</strong> — talk to the financial-aid desk</li>
              <li><strong>Nonprofits</strong> — Goodwill, Salvation Army, local reentry orgs</li>
              <li><strong>Employer sponsorships</strong> — common in trucking</li>
            </ul>
          </div>
        </section>

        {/* Build your case */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.shield()} label="Build Your Case for Approval" />
          <div className="p-6 space-y-6 text-gray-800">
            <ul className="list-disc pl-5 space-y-1">
              <li>Short personal statement (tone: accountable, focused on stability)</li>
              <li>Letters of support (employers, mentors, faith leaders)</li>
              <li>Proof of stability (work, education, treatment)</li>
              <li>Always be polite and persistent; ask about appeal steps</li>
            </ul>
            <Callout title="Offline Tip" tone="tip" icon={I.tip()}>
              Boards still accept paper letters — keep multiple signed copies ready.
            </Callout>
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Band icon={I.check()} label="Quick Start Checklist" />
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {[
              ["pick", "Pick a pathway that fits your interests/traits"],
              ["rules", "Check your state’s rules (online or by phone)"],
              ["map", "Map training time and costs"],
              ["fund", "Find funding (workforce, nonprofits, employer)"],
              ["packet", "Build your evidence packet"],
              ["apply", "Apply honestly"],
              ["appeal", "Appeal if denied"],
              ["side", "Build side skills while waiting"],
            ].map(([id, text]) => (
              <CheckItem
                key={id}
                id={id}
                label={<span>☑️ {text}</span>}
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
