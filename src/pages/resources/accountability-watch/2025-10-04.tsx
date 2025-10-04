import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, AlertTriangle } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

// ----- UI Bits -----
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold ring-1 ring-white/50 backdrop-blur">
      {children}
    </span>
  );
}

function Section({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
        <span aria-hidden>{icon ?? "📑"}</span>
        <span>{title}</span>
      </h2>
      <div className="prose prose-slate max-w-none text-slate-800">{children}</div>
    </section>
  );
}

function StageBadge({ stage }: { stage: string }) {
  const map: Record<string, string> = {
    "Arrested / Charged": "bg-rose-50 text-rose-900 ring-rose-200",
    "Federal charges unsealed": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Plea / case update": "bg-amber-50 text-amber-900 ring-amber-200",
    "Convicted": "bg-violet-50 text-violet-900 ring-violet-200",
    "Sentenced": "bg-emerald-50 text-emerald-900 ring-emerald-200",
  };
  const cls = map[stage] ?? "bg-slate-50 text-slate-900 ring-slate-200";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${cls}`}>{stage}</span>;
}

function RegistryChip({ status }: { status: string }) {
  const tone =
    status === "Previously registered"
      ? "bg-rose-50 text-rose-900 ring-rose-200"
      : status === "No prior registration noted"
      ? "bg-emerald-50 text-emerald-900 ring-emerald-200"
      : "bg-slate-50 text-slate-900 ring-slate-200";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${tone}`}>Registry: {status}</span>;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-4 rounded-xl border-l-4 border-slate-300 bg-slate-50 p-4 text-slate-800">
      <div className="flex items-start gap-2">
        <Quote className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        <div className="text-sm italic">{children}</div>
      </div>
    </blockquote>
  );
}

function CaseRow({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji,
}: {
  name: string;
  role: string;
  jurisdiction: string;
  stage: string;
  date: string;
  summary: React.ReactNode;
  registry: string;
  sources: { label: string; href: string }[];
  emoji?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{emoji ?? "🧾"} {name}</span>
        <span>— {role}</span>
        <span className="ml-auto whitespace-nowrap">{date}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-2">
          <span><span className="font-medium">Jurisdiction:</span> {jurisdiction}</span>
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
        <div className="mt-2 text-slate-800">{summary}</div>
        {sources?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {sources.map((s, i) => (
              <a
                key={i}
                className="inline-flex items-center gap-1 rounded-full border px-2 py-1 hover:bg-slate-100"
                href={s.href}
                target="_blank"
                rel="noopener"
              >
                🔗 <span className="underline underline-offset-2">{s.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ----- Page (Week of Sep 28–Oct 4, 2025) -----
export default function AccountabilityWatch_2025_10_04() {
  const pageTitle = "Accountability Watch — Week of Sep 28–Oct 4, 2025 | SOLAR";

  // 1) At a Glance
  const atAGlance = [
    "Gateway Church founder Robert Morris pleads guilty in Oklahoma; must register as a sex offender.",
    "Former SC lawmaker RJ May pleads guilty to five federal CSAM counts; sentencing pending.",
    "Raleigh police officer arrested and fired over alleged on-duty sex offense; SBI investigating.",
    "NJ high-school teacher charged with sexual assault and official misconduct involving a student.",
  ];

  // 2) New Arrests & Charges (gatekeepers / public-trust roles)
  const newArrestsCharges = [
    {
      name: "Tremale Stephon Cogdell",
      role: "Raleigh Police Department officer",
      jurisdiction: "Raleigh, NC",
      stage: "Arrested / Charged",
      date: "Oct 3, 2025",
      summary: <>Charged with sexual misconduct of a person in custody, obstruction of justice, and willful neglect; department says he was terminated; SBI involved.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "WRAL detailed report", href: "https://www.wral.com/news/local/raleigh-police-officer-sex-crimes-obstruction-charges-october-2025/" },
        { label: "ABC11 (WTVD) update", href: "https://abc11.com/post/tremale-stephon-cogdell-ex-raleigh-police-officer-arrested-alleged-sex-crimes-involving-woman-encountered-duty/17931048/" },
      ],
      emoji: "🚓",
    },
    {
      name: "William Arnold",
      role: "Pequannock High School teacher",
      jurisdiction: "Morris County, NJ",
      stage: "Arrested / Charged",
      date: "Sep 30, 2025",
      summary: <>Charged with aggravated sexual assault, sexual assault, official misconduct, endangering the welfare of a child, and criminal sexual contact.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "Morris County Prosecutor release", href: "https://www.morriscountynj.gov/Departments/Prosecutor/Prosecutor-Press-Releases/Pequannock-High-School-Teacher-Charged-with-Aggravated-Sexual-Assault-and-Related-Charges" },
        { label: "WRNJ local report", href: "https://wrnjradio.com/morris-county-high-school-teacher-accused-of-sexual-assault-of-student/" },
      ],
      emoji: "🏫",
    },
  ];

  // 3) Pleas & Case Updates
  const pleasUpdates = [
    {
      name: "Robert Preston (Robert) Morris",
      role: "Founder, Gateway Church (TX); prominent evangelical leader",
      jurisdiction: "Osage County, OK",
      stage: "Convicted",
      date: "Oct 2–3, 2025",
      summary: <>Pleads guilty to five counts of lewd or indecent acts with a child (1980s conduct). Receives a 10-year sentence with <em>six months in jail</em>, remainder suspended/probated, <em>$250k restitution</em>, and mandatory <em>sex-offender registration</em>.</>,
      registry: "Previously not a registrant; registration now required",
      sources: [
        { label: "Oklahoma AG press release", href: "https://oklahoma.gov/oag/news/newsroom/2025/october/megachurch-founder-pleads-guilty-to-child-sex-abuse-charges.html" },
        { label: "CBS Texas coverage", href: "https://www.cbsnews.com/texas/news/robert-morris-gateway-church-sexual-abuse-case-oklahoma/" },
        { label: "People.com write-up", href: "https://people.com/gateway-church-founder-robert-morris-accepts-guilty-plea-in-child-sex-abuse-case-11823649" },
      ],
      emoji: "⛪",
    },
    {
      name: "RJ May (Robert John May III)",
      role: "Former South Carolina state representative",
      jurisdiction: "Federal (District of South Carolina)",
      stage: "Plea / case update",
      date: "Sep 29, 2025",
      summary: <>Pleads guilty to <em>five counts</em> of distributing child sexual abuse material (CSAM); per agreement, five additional counts to be dismissed at sentencing.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "AP (via WTOP)", href: "https://wtop.com/social-media/2025/09/ex-republican-south-carolina-house-member-admits-to-distributing-hundreds-of-child-sex-abuse-videos/" },
        { label: "USAO-SC indictment background", href: "https://www.justice.gov/usao-sc/pr/west-columbia-man-indicted-distributing-child-sexual-abuse-material" },
      ],
      emoji: "🏛️",
    },
  ];

  // 4) High-Severity Non-Gatekeeper Cases (tracked separately for context)
  const highSeverity = [
    {
      name: "Oscar Merlo Jr.",
      role: "San Antonio nightclub owner (private sector)",
      jurisdiction: "San Antonio, TX (Bexar County)",
      stage: "Arrested / Charged",
      date: "Oct 3–4, 2025",
      summary: <>Affidavits allege he employed a <em>14-year-old</em> at his nightclub using a fake ID, paid her for VIP services, and sexually assaulted her at the club and his residence. Booked into Bexar County Jail; bond set at $200,000.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "San Antonio Express-News report", href: "https://www.expressnews.com/news/article/oscar-merlo-arrested-teen-21083279.php" },
        { label: "KSAT detailed write-up", href: "https://www.ksat.com/news/local/2025/10/03/owner-of-now-closed-east-side-nightclub-arrested-on-two-charges-affidavits-state/" },
      ],
      emoji: "🏢",
    },
  ];

  // 5) Watchlist
  const watchlist = [
    "RJ May: sentencing date/posting on PACER; check for victim impact statements and guideline range.",
    "Robert Morris: custody reporting for 6-month jail term; confirm formal registry listing post-processing.",
    "Raleigh PD case (Cogdell): first appearance date; SBI filings and body-cam references.",
    "NJ teacher case (Arnold): detention hearing outcome; school district actions.",
    "San Antonio case (Merlo): added charges, TABC/permit implications; any affidavits unsealed.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures, with registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge>🧭 Accountability Watch • Weekly</Badge>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/90">
              <Scale className="h-4 w-4" /> Verified sources • <Shield className="h-4 w-4" /> Registry context
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Sep 28–Oct 4, 2025</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Credible reports and official filings only. Allegations remain allegations unless and until proven in court.
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />
          <div className="mt-4">
            <ShareBar />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-16">
        <Section title="At a Glance" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">{atAGlance.map((a, i) => <li key={i}>{a}</li>)}</ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people <strong>not previously registered</strong>—evidence
            that prevention requires more than public registries.
          </PullQuote>
        </Section>

        <Section title="New Arrests & Charges" icon={<Shield className="h-5 w-5 text-rose-500" />}>
          <div className="grid gap-3">
            {newArrestsCharges.map((c, i) => <CaseRow key={i} {...c} />)}
          </div>
        </Section>

        <Section title="Pleas & Case Updates" icon={<Scale className="h-5 w-5 text-amber-500" />}>
          <div className="grid gap-3">
            {pleasUpdates.map((c, i) => <CaseRow key={i} {...c} />)}
          </div>
        </Section>

        <Section title="⚠️ High-Severity Non-Gatekeeper Cases" icon={<AlertTriangle className="h-5 w-5 text-rose-500" />}>
          <p className="mb-3 text-sm text-slate-600">
            These cases do <em>not</em> involve public-trust roles (e.g., officials, educators, clergy, law enforcement) but are included due to
            exceptional severity or public interest. We track them separately to keep the core list focused.
          </p>
          <div className="grid gap-3">
            {highSeverity.map((c, i) => <CaseRow key={i} {...c} />)}
          </div>
        </Section>

        <Section title="Watchlist" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">{watchlist.map((w, i) => <li key={i}>{w}</li>)}</ul>
        </Section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty in a court of law. Registry status reflects
            what’s publicly reported in official documents or mainstream coverage; absence of mention is not definitive.
          </p>
        </div>
      </div>
    </main>
  );
}