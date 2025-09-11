import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  Info,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Wrench,
  Truck,
  Cpu,
  Scissors,
  Home,
  Stethoscope,
  FileText,
  ClipboardList,
  Users,
  Shield,
  Library,
  DollarSign,
  Printer,
} from "lucide-react";

/** ───────── Small, local UI helpers ───────── */

function IconWrap({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/90 text-slate-700 shadow-sm">{children}</span>;
}

function BandHeader({
  step,
  title,
  blurb,
  icon,
}: {
  step?: string | number;
  title: string;
  blurb?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
      <div className="flex items-center gap-4">
        {typeof step !== "undefined" ? (
          <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center text-lg font-bold">
            {step}
          </div>
        ) : (
          <IconWrap>{icon ?? <CheckCircle2 className="w-5 h-5" />}</IconWrap>
        )}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {blurb && <p className="text-slate-200">{blurb}</p>}
        </div>
      </div>
    </div>
  );
}

function Callout({
  tone = "info",
  title,
  icon,
  children,
}: {
  tone?: "info" | "warn" | "tip" | "note";
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const map: Record<string, string> = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warn: "bg-amber-50 border-amber-200 text-amber-800",
    tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
    note: "bg-slate-50 border-slate-200 text-slate-800",
  };
  return (
    <div className={`rounded-lg border p-6 ${map[tone]}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex w-6 h-6 items-center justify-center">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Bullet({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5">{icon}</span>
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />;
}

/** ───────── Page ───────── */

export default function ProfessionalLicensingGuide(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants"
        description="Practical pathways to licenses and certifications (trades, CDL, IT, cosmetology, home services, health-adjacent, business) with offline options, funding, and checklists."
        keywords="SOLAR, resource guide, licensing, certification, trades, CDL, IT, cosmetology, home inspector, phlebotomy, billing, tax preparer, notary, bookkeeping, registrants, reentry, fair-chance"
      />

      {/* Hero */}
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

          <div className="mb-4 inline-flex items-center gap-2 bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
            <ClipboardList className="w-4 h-4" /> Career & Licensing Toolkit
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            SOLAR Resource Guide: Professional Licensing & Certification Paths for Registrants
          </h1>

          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Licenses and certifications can open doors to stable income, credibility, and self-employment. This guide
            meets you at the starting line and walks you through options that work—online and offline.
          </p>

          <p className="text-lg text-slate-100 max-w-3xl flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />
            <span>
              Every state is different. Many now have <em>fair-chance laws</em> requiring boards to consider rehabilitation
              and job relevance instead of automatic bans. Always check your state’s rules first.
            </span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              onClick={() => window.print()}
              className="cursor-pointer bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg inline-flex items-center"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print / Save PDF
            </a>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600" />

      {/* Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-6">
        <ShareBar />

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader icon={<Info className="w-5 h-5" />} title="Introduction" blurb="Why licenses matter and how to start." />
          <div className="p-6 space-y-6">
            <div className="space-y-3 text-gray-800">
              <p>
                For many people on the registry, stable jobs feel out of reach. A{" "}
                <strong>professional license or certification</strong> can change that story:
              </p>
              <ul className="space-y-2">
                <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>
                  Creates <strong>credibility</strong> employers and customers recognize.
                </Bullet>
                <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>
                  Opens doors to <strong>self-employment</strong> where you set the rules.
                </Bullet>
                <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>
                  Builds <strong>pride and momentum</strong> after years of barriers.
                </Bullet>
              </ul>
            </div>

            <Callout tone="warn" title="Important reminder" icon={<AlertTriangle className="w-5 h-5" />}>
              <p>
                State boards and rules <strong>vary</strong>. Some block certain offenses; many must consider rehabilitation and
                role relevance. Check your state’s board site or call for printed packets.
              </p>
            </Callout>
          </div>
        </section>

        {/* Step Zero */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="0" title="Step Zero: Understand Licenses & Prepare Yourself" />
          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-slate-700" /> What’s the difference?
                </h3>
                <ul className="space-y-2">
                  <Bullet icon={<Shield className="w-5 h-5 text-slate-600" />}>
                    <strong>License:</strong> State permission to work (e.g., electrician, barber, inspector).
                  </Bullet>
                  <Bullet icon={<Cpu className="w-5 h-5 text-slate-600" />}>
                    <strong>Certification:</strong> Credential from associations/companies (e.g., CompTIA) proving skill mastery.
                  </Bullet>
                  <Bullet icon={<Users className="w-5 h-5 text-slate-600" />}>
                    <strong>Diploma/Degree:</strong> Education sometimes required to sit for an exam.
                  </Bullet>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Library className="w-5 h-5 text-slate-700" /> How licensing is regulated
                </h3>
                <ul className="space-y-2">
                  <Bullet icon={<Home className="w-5 h-5 text-slate-600" />}>Mostly by <strong>state boards</strong>.</Bullet>
                  <Bullet icon={<Truck className="w-5 h-5 text-slate-600" />}>Some federal aspects (CDL/TSA for HazMat).</Bullet>
                  <Bullet icon={<Cpu className="w-5 h-5 text-slate-600" />}>Certifications via <strong>national associations</strong>.</Bullet>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Common barriers
              </h3>
              <ul className="space-y-2">
                <Bullet icon={<Shield className="w-5 h-5 text-amber-600" />}>Background checks & “moral character” clauses.</Bullet>
                <Bullet icon={<FileText className="w-5 h-5 text-amber-600" />}>Board discretion & documentation gaps.</Bullet>
                <Bullet icon={<Home className="w-5 h-5 text-amber-600" />}>Collateral consequences vary by state.</Bullet>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Callout tone="info" title="Research: Online & Offline" icon={<Info className="w-5 h-5" />}>
                <ul className="list-disc pl-6">
                  <li>
                    Online:{" "}
                    <a
                      href="https://niccc.csgjusticecenter.org/"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-700 underline"
                    >
                      NICCC
                    </a>{" "}
                    + your state board websites.
                  </li>
                  <li>Offline: call boards for mailed packets; libraries for printed handbooks.</li>
                  <li>Ask probation/parole or reentry caseworkers for brochures.</li>
                </ul>
              </Callout>

              <Callout tone="tip" title="Build your case early" icon={<Lightbulb className="w-5 h-5" />}>
                <ul className="list-disc pl-6">
                  <li>Letters of support (employers, faith/community leaders, mentors).</li>
                  <li>Diplomas, work records, training certificates.</li>
                  <li>Keep a <strong>physical folder</strong> for paper submissions.</li>
                </ul>
              </Callout>
            </div>
          </div>
        </section>

        {/* Pathway 1 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="1" title="Skilled Trades (HVAC, Electrical, Plumbing, Welding)" blurb="High demand, paid apprenticeships, clear steps." />
          <div className="p-6 space-y-6">
            <p className="text-gray-700 flex items-start gap-2">
              <Wrench className="w-5 h-5 mt-0.5 text-slate-700" />
              <span>
                <strong>Why it works:</strong> Trades are needed everywhere. Apprenticeships pay while you learn; most boards
                don’t impose lifetime bans.
              </span>
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" /> Steps
                </h4>
                <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                  <li>Apply for apprenticeship (union, trade school, contractor).</li>
                  <li>Train 2–5 years as apprentice.</li>
                  <li>Pass journeyman exam.</li>
                  <li>Optional: master license for independence.</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" /> Costs • Outlook
                </h4>
                <ul className="space-y-2">
                  <Bullet icon={<DollarSign className="w-4 h-4 text-slate-600" />}>Tuition $1k–$7k/yr; exams $50–$150; tools $500–$2k.</Bullet>
                  <Bullet icon={<Users className="w-4 h-4 text-slate-600" />}>Funding: WIOA, unions, reentry vouchers.</Bullet>
                  <Bullet icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />}>Outlook: Excellent. Strong self-employment path.</Bullet>
                </ul>
              </div>
            </div>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Call union halls for openings.</li>
                <li>Workforce-center bulletin boards, libraries, community colleges.</li>
                <li>Knock on small shop doors and ask to be trained.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 2 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="2" title="Commercial Driving (CDL)" blurb="Large industry; lots of employer training options." />
          <div className="p-6 space-y-6">
            <p className="text-gray-700 flex items-start gap-2">
              <Truck className="w-5 h-5 mt-0.5 text-slate-700" />
              <span><strong>Steps:</strong> CDL permit → ELDT → road test → DOT medical.</span>
            </p>
            <ul className="space-y-2">
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: $3k–$7k (often employer-covered).</Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-600" />}>
                Restrictions: TSA disqualifies <strong>HazMat</strong> for certain crimes; passenger endorsements may be restricted.
                General freight usually fine.
              </Bullet>
              <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>Outlook: High demand, ~$45k–$60k starting.</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Grab a free CDL handbook at the DMV.</li>
                <li>Call trucking companies for paper applications.</li>
                <li>Visit workforce centers for training vouchers.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 3 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="3" title="IT Certifications (Non-Licensed)" blurb="No state boards; skill-based entry." />
          <div className="p-6 space-y-6">
            <p className="text-gray-700 flex items-start gap-2">
              <Cpu className="w-5 h-5 mt-0.5 text-slate-700" />
              <span><strong>Steps:</strong> Study <strong>CompTIA A+</strong> → pass two exams → consider Network+/Security+.</span>
            </p>
            <ul className="space-y-2">
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: ~$500+ for exams; self-study is affordable.</Bullet>
              <Bullet icon={<Users className="w-5 h-5 text-slate-600" />}>Funding: Some workforce programs cover IT certs.</Bullet>
              <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>Outlook: Growing (help desk/support).</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Borrow exam guides from the library.</li>
                <li>Request printed catalogs at community colleges.</li>
                <li>Goodwill centers sometimes run offline IT classes.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 4 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="4" title="Cosmetology & Barbering" blurb="High self-employment potential; clients follow people they trust." />
          <div className="p-6 space-y-6">
            <p className="text-gray-700 flex items-start gap-2">
              <Scissors className="w-5 h-5 mt-0.5 text-slate-700" />
              <span><strong>Steps:</strong> 1–2k hours of school → written & practical exams → state license.</span>
            </p>
            <ul className="space-y-2">
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: $5k–$20k tuition; exams $50–$200.</Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-600" />}>Restrictions vary by state (moral character vs fair-chance).</Bullet>
              <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>Outlook: Steady; strong self-employment routes.</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Visit schools in person.</li>
                <li>Call state boards for mailed packets.</li>
                <li>Look for faith/nonprofit partnerships with beauty schools.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 5 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="5" title="Home & Property Services (Inspector, Contractor, Landscaping, Pest Control)" blurb="Services stay in demand—even when housing cycles." />
          <div className="p-6 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Home className="w-5 h-5" /> Home Inspector — typical steps
              </h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>Complete pre-license course.</li>
                <li>Pass state exam.</li>
                <li>Purchase insurance/bonding.</li>
                <li>Apply for license.</li>
              </ol>
            </div>
            <ul className="space-y-2">
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: $1k–$3k courses; exams $100–$300; insurance varies.</Bullet>
              <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>Outlook: Strong, especially in growing markets.</Bullet>
              <Bullet icon={<Users className="w-5 h-5 text-slate-600" />}>Self-employment: Very strong with realtor ties.</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Libraries carry state licensing guides.</li>
                <li>Call the real estate board; some oversee inspectors.</li>
                <li>Ask realtors about shadowing/apprenticeships.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 6 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="6" title="Health-Adjacent Roles (Phlebotomy, Billing)" blurb="Growing fields; billing faces fewer barriers." />
          <div className="p-6 space-y-6">
            <ul className="space-y-2">
              <Bullet icon={<Stethoscope className="w-5 h-5 text-slate-700" />}>
                <strong>Phlebotomy:</strong> 4–12 week course →{" "}
                <a
                  href="https://www.nhanow.com/certifications/phlebotomy-technician"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  NHA CPT
                </a>{" "}
                (~$125) → labs/clinics.
              </Bullet>
              <Bullet icon={<FileText className="w-5 h-5 text-slate-700" />}>
                <strong>Billing/Coding:</strong> 6–12 month course → certification → remote/in-office roles.
              </Bullet>
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: $1k–$3k courses; $125+ exams.</Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-600" />}>Restrictions: Some states limit direct patient care; billing is safer.</Bullet>
              <Bullet icon={<Users className="w-5 h-5 text-slate-600" />}>Self-employment: Limited for phlebotomy; strong for billing contracts.</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Ask hospitals/Red Cross about local phlebotomy classes.</li>
                <li>Pick up community-college catalogs.</li>
                <li>Call workforce centers re: billing scholarships.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Pathway 7 */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader step="7" title="Business & Financial (Tax Prep, Notary, Bookkeeping)" blurb="Low cost, flexible, home-based options." />
          <div className="p-6 space-y-6">
            <ul className="space-y-2">
              <Bullet icon={<FileText className="w-5 h-5 text-slate-700" />}>
                <strong>Tax Prep:</strong> Apply for IRS <em>PTIN</em> → optional course → offer services.{" "}
                <a
                  href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  PTIN info
                </a>
                .
              </Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-700" />}>
                <strong>Notary:</strong> Apply with state → pay fee ($50–$200) → notarize documents.
              </Bullet>
              <Bullet icon={<Users className="w-5 h-5 text-slate-700" />}>
                <strong>Bookkeeping:</strong> Learn QuickBooks → cert course → small-business clients.
              </Bullet>
              <Bullet icon={<DollarSign className="w-5 h-5 text-slate-600" />}>Costs: Often &lt; $500 total.</Bullet>
            </ul>
            <Callout tone="note" title="Offline alternatives" icon={<Library className="w-5 h-5" />}>
              <ul className="list-disc pl-6">
                <li>Call IRS for mailed PTIN instructions.</li>
                <li>Visit county clerk for notary packets.</li>
                <li>Grab adult-ed brochures at libraries/town halls.</li>
              </ul>
            </Callout>
          </div>
        </section>

        {/* Funding */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader icon={<DollarSign className="w-5 h-5" />} title="Funding Options" blurb="Ways to pay that don’t require a credit card or internet access." />
          <div className="p-6 space-y-2">
            <ul className="space-y-2">
              <Bullet icon={<Users className="w-5 h-5 text-slate-700" />}>WIOA grants: apply in person at workforce centers.</Bullet>
              <Bullet icon={<Library className="w-5 h-5 text-slate-700" />}>Community-college aid: walk into the FA office.</Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-700" />}>Nonprofits: Goodwill, Salvation Army, reentry orgs.</Bullet>
              <Bullet icon={<Truck className="w-5 h-5 text-slate-700" />}>Employer sponsorships: common in trucking.</Bullet>
            </ul>
          </div>
        </section>

        {/* Build your case */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader icon={<FileText className="w-5 h-5" />} title="Building Your Case for Approval" blurb="Treat your application like a case in your favor." />
          <div className="p-6 space-y-6">
            <ul className="space-y-2">
              <Bullet icon={<FileText className="w-5 h-5 text-slate-700" />}>Write a personal statement (typed or neat handwriting).</Bullet>
              <Bullet icon={<Users className="w-5 h-5 text-slate-700" />}>Collect letters of support.</Bullet>
              <Bullet icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}>Proof of stability: work, diplomas, treatment completion.</Bullet>
              <Bullet icon={<Shield className="w-5 h-5 text-slate-700" />}>Be polite and persistent with boards.</Bullet>
            </ul>
            <Callout tone="tip" title="Offline Tip" icon={<Lightbulb className="w-5 h-5" />}>
              <p>Boards still accept paper letters. Keep multiple copies and a stamped envelope ready.</p>
            </Callout>
          </div>
        </section>

        {/* Quick start checklist */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader icon={<ClipboardList className="w-5 h-5" />} title="Quick Start Checklist" blurb="Check things off as you go." />
          <div className="p-6">
            <ul className="space-y-3 text-gray-800">
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
                <li key={item.id} className="flex items-start">
                  <input
                    type="checkbox"
                    id={item.id}
                    checked={!!checked[item.id]}
                    onChange={() => toggle(item.id)}
                    className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={item.id}
                    className={`cursor-pointer ${checked[item.id] ? "line-through text-gray-500" : ""}`}
                  >
                    {item.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sources & Lookups */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <BandHeader icon={<Library className="w-5 h-5" />} title="Sources & Lookups" blurb="Verified links (open in new tab)" />
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> Licensing • Rules • Pathways</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li><a href="https://niccc.csgjusticecenter.org/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NICCC</a></li>
                  <li><a href="https://www.apprenticeship.gov/apprenticeship-finder" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Apprenticeship Finder</a></li>
                  <li><a href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FMCSA – ELDT</a></li>
                  <li><a href="https://www.tsa.gov/for-industry/hazmat-endorsement-threat-assessment-program" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">TSA – HazMat Disqualifiers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2"><Cpu className="w-4 h-4" /> Certifications • Boards • Tax IDs</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li><a href="https://www.comptia.org/certifications/a" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">CompTIA A+</a></li>
                  <li><a href="https://www.nhanow.com/certifications/phlebotomy-technician" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NHA – CPT</a></li>
                  <li><a href="https://www.barbercosmo.ca.gov/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">CA Board of Barbering & Cosmetology</a></li>
                  <li><a href="https://www.homeinspector.org/Resources/State-Regulations" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">ASHI – State Home-Inspector Regs</a></li>
                  <li><a href="https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">IRS – PTIN Info</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-medium text-amber-800 mb-3 flex items-center gap-2"><Library className="w-4 h-4" /> Offline Alternatives</h4>
              <ul className="list-disc pl-5 text-amber-700 space-y-1 text-sm">
                <li>Public libraries: lookups, printing, proctoring, help desks.</li>
                <li>Workforce centers: WIOA intake, vouchers, paper applications.</li>
                <li>State boards: call to request mailed forms and rulebooks.</li>
              </ul>
            </div>
          </div>
        </section>

        <ShareBar />
      </article>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
