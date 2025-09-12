import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import {
  Building2,
  GraduationCap,
  Wrench,
  Truck,
  Laptop,
  Scissors,
  Home,
  Stethoscope,
  FileText,
  DollarSign,
  CheckSquare,
  Lightbulb,
  Info,
  Shield,
  AlertTriangle,
  Globe,
  Phone,
} from "lucide-react";

/** ============= tiny helpers (scoped to this file) ============= */

const I = {
  building: (c = "w-5 h-5") => <Building2 className={c} aria-hidden />,
  grad: (c = "w-5 h-5") => <GraduationCap className={c} aria-hidden />,
  wrench: (c = "w-5 h-5") => <Wrench className={c} aria-hidden />,
  truck: (c = "w-5 h-5") => <Truck className={c} aria-hidden />,
  laptop: (c = "w-5 h-5") => <Laptop className={c} aria-hidden />,
  scissors: (c = "w-5 h-5") => <Scissors className={c} aria-hidden />,
  home: (c = "w-5 h-5") => <Home className={c} aria-hidden />,
  stetho: (c = "w-5 h-5") => <Stethoscope className={c} aria-hidden />,
  file: (c = "w-5 h-5") => <FileText className={c} aria-hidden />,
  dollar: (c = "w-5 h-5") => <DollarSign className={c} aria-hidden />,
  check: (c = "w-5 h-5") => <CheckSquare className={c} aria-hidden />,
  bulb: (c = "w-5 h-5") => <Lightbulb className={c} aria-hidden />,
  info: (c = "w-5 h-5") => <Info className={c} aria-hidden />,
  shield: (c = "w-5 h-5") => <Shield className={c} aria-hidden />,
  warn: (c = "w-5 h-5") => <AlertTriangle className={c} aria-hidden />,
  globe: (c = "w-5 h-5") => <Globe className={c} aria-hidden />,
  phone: (c = "w-5 h-5") => <Phone className={c} aria-hidden />,
};

function Band({
  icon,
  label,
  number,
}: {
  icon: React.ReactNode;
  label: string;
  number?: string | React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/95 text-slate-700 rounded-full flex items-center justify-center text-lg font-bold">
          {number ?? icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{label}</h2>
        </div>
      </div>
    </div>
  );
}

function Callout({
  tone = "info",
  title,
  children,
  icon,
}: {
  tone?: "info" | "tip" | "warn" | "note" | "success";
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const map: Record<string, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
    warn: "bg-amber-50 border-amber-200 text-amber-800",
    note: "bg-slate-50 border-slate-200 text-slate-800",
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
  };
  const cls = map[tone] ?? map.info;
  return (
    <div className={`border rounded-lg p-6 ${cls}`}>
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
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
    <label className="flex items-start gap-3 text-gray-700 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
      />
      <span className={checked ? "line-through text-gray-500" : ""}>{label}</span>
    </label>
  );
}

/** ============= PAGE ============= */

export default function ProfessionalLicensingGuide(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  const handlePrint = () => window.print();

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants"
        description="Step-by-step, icon-driven guide to licenses and certifications that can unlock steady work for people on the registry — with offline alternatives, funding ideas, and state-by-state research tips."
        keywords="SOLAR, resource guide, licensing, certification, trades, CDL, cosmetology, IT certifications, phlebotomy, notary, bookkeeping, reentry, fair chance, NICCC"
      />

      {/* Header / Hero */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>

          <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            Career & Stability
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight mt-4">
            SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants
          </h1>

          <p className="text-lg md:text-xl text-slate-100 max-w-3xl">
            Licenses and certifications can unlock credibility, self-employment, and steadier income. This guide
            shows where doors are still open, how to research your state, and how to build a strong application — with
            offline options throughout.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow"
            >
              Print Guide
            </button>
            <a
              href="#sources"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors shadow inline-flex items-center gap-2"
            >
              {I.file("w-5 h-5")}
              Sources
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600" />

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-6">

        {/* Intro */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <Band icon={I.info("w-6 h-6")} label="Introduction" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">
              For many on the registry, stable work can feel out of reach. A <strong>license or certification</strong>{" "}
              can change that story:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">{I.shield()} <span>Builds <strong>credibility</strong> employers and customers recognize</span></li>
              <li className="flex items-center gap-2">{I.dollar()} <span>Opens doors to <strong>self-employment</strong></span></li>
              <li className="flex items-center gap-2">{I.grad()} <span>Restores <strong>pride and progress</strong></span></li>
            </ul>

            <Callout title="Important reminder: states differ" tone="warn" icon={I.warn()}>
              <p>
                Many states now have <strong>fair-chance laws</strong> requiring boards to weigh rehabilitation and
                relevance — but details vary. Always check your state’s rules first.
              </p>
            </Callout>
          </div>
        </section>

        {/* Step Zero */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="step-zero">
          <Band icon={I.info("w-6 h-6")} label="Step Zero: Understand the Landscape" number="0" />
          <div className="p-6 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">{I.file()} What’s the difference?</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>License</strong>: state permission (e.g., electrician, barber, inspector)</li>
                  <li><strong>Certification</strong>: credential from an org (e.g., CompTIA, NHA)</li>
                  <li><strong>Diploma/Degree</strong>: education that may be required to sit for exams</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">{I.building()} Who regulates?</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Mostly <strong>state boards</strong> (cosmetology, trades, real estate)</li>
                  <li>Some federal pieces (e.g., CDL + TSA checks)</li>
                  <li>Certs via <strong>national associations</strong> (IT, healthcare)</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Callout title="Barriers you might face" tone="note" icon={I.warn()}>
                <ul className="list-disc pl-5">
                  <li>Background checks, “good moral character” clauses</li>
                  <li>Discretion by boards</li>
                  <li>Collateral consequences that vary by state</li>
                </ul>
              </Callout>

              <Callout title="Research: offline + online" tone="tip" icon={I.globe()}>
                <ul className="list-disc pl-5">
                  <li>
                    Online:{" "}
                    <a className="text-blue-600 underline" href="https://niccc.csgjusticecenter.org/" target="_blank" rel="noopener">
                      NICCC
                    </a>{" "}
                    and your state board websites
                  </li>
                  <li>Offline: call boards for mailed packets; libraries for printed rulebooks; ask PO/reentry caseworkers for brochures</li>
                </ul>
              </Callout>
            </div>

            <Callout title="Build your case early" tone="success" icon={I.check()}>
              <ul className="list-disc pl-5">
                <li>Letters of support (employers, mentors, community leaders)</li>
                <li>Diplomas, work records, training certificates</li>
                <li>Keep a <strong>physical folder</strong> for mailed applications</li>
              </ul>
            </Callout>

            <Callout title="Pro Tip" tone="tip" icon={I.bulb()}>
              Think of your application like a <strong>case in your favor</strong> — assemble clear evidence of rehabilitation and readiness.
            </Callout>
          </div>
        </section>

        {/* Pathways */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="trades">
          <Band icon={I.wrench("w-6 h-6")} label="Pathway 1: Skilled Trades (HVAC, Electrical, Plumbing, Welding)" number="1" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">
              Trades are in demand. Apprenticeships <strong>pay while you learn</strong>, and most boards don’t impose lifetime bans.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>Apply for an apprenticeship</li>
                  <li>2–5 years paid training</li>
                  <li>Journeyman exam</li>
                  <li>Optional: master license</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: Tuition $1k–$7k/yr; exams $50–$150; tools $500–$2k</li>
                  <li>Funding: WIOA, unions, reentry vouchers</li>
                  <li>Outlook: Excellent; strong self-employment path</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Call union halls for openings</li>
                <li>Workforce centers & libraries post openings on boards</li>
                <li>Visit community colleges for printed catalogs</li>
                <li>Knock on small trade shops and ask to train</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="cdl">
          <Band icon={I.truck("w-6 h-6")} label="Pathway 2: Commercial Driving (CDL)" number="2" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">Trucking has high demand and clear steps.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>CDL learner’s permit (DMV written)</li>
                  <li>Entry-Level Driver Training (ELDT)</li>
                  <li>Road test</li>
                  <li>DOT medical exam</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: $3k–$7k school (often employer-covered)</li>
                  <li>
                    Restrictions: TSA limits <strong>HazMat</strong>; passenger endorsements may be restricted, but{" "}
                    <strong>general freight is usually fine</strong>.
                  </li>
                  <li>Outlook: Strong; $45k–$60k starting</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Pick up free CDL handbook at DMV</li>
                <li>Call recruiters; many mail paper applications</li>
                <li>Ask workforce centers about training vouchers</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="it">
          <Band icon={I.laptop("w-6 h-6")} label="Pathway 3: IT Certifications (Non-Licensed)" number="3" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">No state boards — just exams and skills.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>Study for CompTIA A+</li>
                  <li>Pass two exams</li>
                  <li>Advance to Network+ or Security+</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: ~$500+ exams; self-study can be cheap</li>
                  <li>Funding: workforce programs sometimes cover IT</li>
                  <li>Outlook: Growing for help desk/support</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="tip" icon={I.bulb()}>
              <ul className="list-disc pl-5">
                <li>Borrow study guides from the library</li>
                <li>Ask community colleges for printed catalogs</li>
                <li>Goodwill centers sometimes run IT courses</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="cosmetology">
          <Band icon={I.scissors("w-6 h-6")} label="Pathway 4: Cosmetology & Barbering" number="4" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">High self-employment potential; clients follow people they trust.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>School (1,000–2,000 hours)</li>
                  <li>Written + practical exams</li>
                  <li>Apply for state license</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: $5k–$20k; exams $50–$200</li>
                  <li>Restrictions vary by state (moral-character rules vs. rehab)</li>
                  <li>Outlook: Steady; strong for chair rental/mobile services</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Visit schools in person</li>
                <li>Call boards for mailed application packets</li>
                <li>Ask churches/nonprofits about partner programs</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="home-services">
          <Band icon={I.home("w-6 h-6")} label="Pathway 5: Home & Property Services" number="5" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">Housing is constant; inspection/contracting/landscaping/pest control are always needed.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Inspector — Steps</h4>
                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                  <li>Pre-license course</li>
                  <li>State exam</li>
                  <li>Insurance/bonding</li>
                  <li>License application</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: $1k–$3k courses; exams $100–$300</li>
                  <li>Outlook: Strong, esp. in growing markets</li>
                  <li>Self-employment: Very strong</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Libraries carry state licensing guides</li>
                <li>Real-estate boards often oversee inspectors</li>
                <li>Ask local realtors about shadowing/apprenticeship</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="health-adjacent">
          <Band icon={I.stetho("w-6 h-6")} label="Pathway 6: Health-Adjacent Roles (Phlebotomy, Billing)" number="6" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">
              Healthcare always needs support staff. Some states restrict <em>direct</em> patient care; billing/coding is typically safer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Phlebotomy — Steps</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>4–12 week course</li>
                  <li>NHA CPT exam (~$125)</li>
                  <li>Jobs in labs/clinics</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Billing — Steps</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>6–12 month course</li>
                  <li>Certification</li>
                  <li>Remote or in-office roles</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Ask hospitals/Red Cross about local classes</li>
                <li>Community college catalogs</li>
                <li>Workforce centers for scholarships</li>
              </ul>
            </Callout>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="business-finance">
          <Band icon={I.dollar("w-6 h-6")} label="Pathway 7: Business & Financial Services (Tax Prep, Notary, Bookkeeping)" number="7" />
          <div className="p-6 space-y-6">
            <p className="text-gray-700">Low-cost, flexible, and often home-based.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Steps</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Tax: get IRS PTIN; optional course; start seasonal work</li>
                  <li>Notary: apply with state; small fee; notarize docs</li>
                  <li>Bookkeeping: learn QuickBooks; certification; find clients</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">At a glance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Costs: often under $500</li>
                  <li>Outlook: Steady; strong small-business demand</li>
                  <li>Self-employment: Strong; seasonal or year-round</li>
                </ul>
              </div>
            </div>

            <Callout title="Offline alternatives" tone="note" icon={I.phone()}>
              <ul className="list-disc pl-5">
                <li>Call IRS for mailed PTIN instructions</li>
                <li>Visit county clerk for notary application</li>
                <li>Pick up adult-ed brochures at library/town hall</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <Band icon={I.dollar("w-6 h-6")} label="Funding Options" />
          <div className="p-6 space-y-4 text-gray-700">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>WIOA grants</strong>: apply in person at workforce centers</li>
              <li><strong>Community college aid</strong>: walk into the financial-aid office</li>
              <li><strong>Nonprofits</strong>: Goodwill, Salvation Army, local reentry orgs</li>
              <li><strong>Employer sponsorships</strong>: common in trucking</li>
            </ul>
          </div>
        </section>

        {/* Build your case */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <Band icon={I.shield("w-6 h-6")} label="Build Your Case for Approval" />
          <div className="p-6 space-y-6">
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Write a personal statement (typed or handwritten)</li>
              <li>Collect letters of support</li>
              <li>Gather proof of stability (work, education, treatment)</li>
              <li>Be polite and persistent</li>
            </ul>
            <Callout title="Offline Tip" tone="tip" icon={I.bulb()}>
              Boards still accept paper letters — keep multiple signed copies ready.
            </Callout>
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <Band icon={I.check("w-6 h-6")} label="Quick Start Checklist" />
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
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12" id="sources">
          <Band icon={I.file("w-6 h-6")} label="Sources & Lookups" />
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li><a className="text-blue-600 underline" href="https://niccc.csgjusticecenter.org/" target="_blank" rel="noopener">NICCC</a></li>
                <li><a className="text-blue-600 underline" href="https://www.apprenticeship.gov/apprenticeship-finder" target="_blank" rel="noopener">Apprenticeship Finder</a></li>
                <li><a className="text-blue-600 underline" href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt" target="_blank" rel="noopener">FMCSA ELDT Overview</a></li>
                <li><a className="text-blue-600 underline" href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program" target="_blank" rel="noopener">TSA HazMat Disqualifiers</a></li>
                <li><a className="text-blue-600 underline" href="https://www.comptia.org/certifications/a" target="_blank" rel="noopener">CompTIA A+</a></li>
              </ul>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li><a className="text-blue-600 underline" href="https://www.nhanow.com/certifications/phlebotomy-technician" target="_blank" rel="noopener">NHA CPT</a></li>
                <li><a className="text-blue-600 underline" href="https://www.barbercosmo.ca.gov/" target="_blank" rel="noopener">CA Cosmetology Board</a></li>
                <li><a className="text-blue-600 underline" href="https://www.homeinspector.org/Resources/State-Regulations" target="_blank" rel="noopener">ASHI State Regulations</a></li>
                <li><a className="text-blue-600 underline" href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers" target="_blank" rel="noopener">IRS PTIN Info</a></li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      {/* Print styles (note: plain <style>, not style jsx) */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .print\\:py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .print\\:pb-4 { padding-bottom: 1rem !important; }
          .print\\:mb-8 { margin-bottom: 2rem !important; }
          .print\\:mb-6 { margin-bottom: 1.5rem !important; }
          .print\\:mt-8 { margin-top: 2rem !important; }
          .print\\:space-y-6 > * + * { margin-top: 1.5rem !important; }
          .print\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
          .print\\:text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
          .print\\:text-xs { font-size: 0.75rem !important; line-height: 1rem !important; }
          .print\\:w-8 { width: 2rem !important; }
          .print\\:h-8 { height: 2rem !important; }
          .print\\:text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
          .print\\:p-6 { padding: 1.5rem !important; }
          .print\\:p-4 { padding: 1rem !important; }
          .print\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
          .print\\:gap-4 { gap: 1rem !important; }
          body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
