import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote } from "lucide-react";
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

// ----- Page (Week of Oct 5–11, 2025) -----
export default function AccountabilityWatch_2025_10_11() {
  const pageTitle = "Accountability Watch — Week of Oct 5–11, 2025 | SOLAR";

  // 1) At a Glance
  const atAGlance = [
    "NC state legislator Cecil Brockman charged; judge sets ~$1.05M bond; next court Nov 13.",
    "Capital Region Chamber senior VP Peter Bardunias charged in federal enticement sting; detention hearing Oct 27.",
    "Louisville teacher Brian Hinds charged in Project Safe Childhood case (distribution/possession of CSAM).",
    "Oregon physician David Farley pleads not guilty to nearly a dozen felony sex-abuse counts; $500k bail.",
  ];

  // 2) New Arrests & Charges (gatekeepers / public-trust roles)
  const newArrestsCharges = [
    {
      name: "Cecil Brockman",
      role: "North Carolina State Representative (D–High Point)",
      jurisdiction: "North Carolina (Guilford County)",
      stage: "Arrested / Charged",
      date: "Oct 8–10, 2025",
      summary: <>Charged with two counts of statutory sex offense with a child and two counts of taking indecent liberties with a child; secured bond set at <em>~$1.05M</em>; bipartisan calls to resign; next court date <em>Nov 13</em>.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "AP wire (bond hearing)", href: "https://apnews.com/article/6385d48e02354daa422e880cdf5790a7" },
        { label: "WRAL details from hearing", href: "https://www.wral.com/news/state/brockman-sex-charges-1-million-bond-october-2025/" },
        { label: "ABC11 local update", href: "https://abc11.com/post/cecil-brockman-north-carolina-democratic-state-representative-appear-court-friday-child-sex-charges/17976918/" },
        { label: "NC Newsline recap", href: "https://ncnewsline.com/2025/10/10/judge-issues-1m-bond-for-nc-rep-brockman-in-first-court-appearance/" },
      ],
      emoji: "🏛️",
    },
    {
      name: "Peter Bardunias",
      role: "Senior VP, Capital Region Chamber of Commerce",
      jurisdiction: "Federal (USAO – Northern District of New York)",
      stage: "Arrested / Charged (criminal complaint)",
      date: "Oct 7–10, 2025",
      summary: <>Allegedly attempted to entice a person he believed was 15; explicit/violent messages; arrested after traveling to meet; detention hearing now set for <em>Oct 27</em>. Chamber mission emphasizes community safety & prosperity—making this charge notably contradictory for a senior officer.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "USAO–NDNY press release", href: "https://www.justice.gov/usao-ndny/pr/local-leader-chamber-commerce-charged-attempted-enticement-minor" },
        { label: "Times Union: hearing moved to Oct 27", href: "https://www.timesunion.com/news/article/chamber-vp-peter-bardunias-hearing-rescheduled-21094217.php" },
        { label: "Spectrum News: day-of coverage", href: "https://spectrumlocalnews.com/nys/capital-region/news/2025/10/07/capital-region-chamber-of-commerce-official-charged-in-sex-sting-" },
      ],
      emoji: "🏢",
    },
    {
      name: "Brian Hinds",
      role: "Teacher, duPont Manual HS / Youth Performing Arts School (JCPS)",
      jurisdiction: "Federal (USAO – Western District of Kentucky; Louisville)",
      stage: "Arrested / Charged",
      date: "Oct 10–11, 2025",
      summary: <>Charged with distributing and possessing CSAM in a Project Safe Childhood case; complaint alleges August 2025 distribution to an undercover officer; arrest on Oct 9–10.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "USAO–WDKY press release", href: "https://www.justice.gov/usao-wdky/pr/jefferson-county-high-school-teacher-charged-distributing-child-sexual-abuse-material" },
        { label: "WAVE3 local report", href: "https://www.wave3.com/2025/10/10/jcps-teacher-arrested-child-porn-charges-no-students-connected-case-says-us-attorney/" },
        { label: "Gray/WAVE syndication", href: "https://www.1011now.com/2025/10/11/teacher-accused-sending-explicit-photos-underage-boys-undercover-officer/" },
      ],
      emoji: "🏫",
    },
  ];

  // 3) Pleas & Case Updates
  const pleasUpdates = [
    {
      name: "Dr. David Farley",
      role: "Former physician (West Linn, OR)",
      jurisdiction: "Oregon (Clackamas County)",
      stage: "Plea / case update",
      date: "Oct 10–11, 2025",
      summary: <>Pleads <em>not guilty</em> to nearly a dozen felony sex-abuse charges; prosecutors allege many victims over years; bail set at <em>$500,000</em>.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KGW: arrest & charges overview", href: "https://www.kgw.com/article/news/crime/former-west-linn-doctor-arrested-jailed-on-nearly-dozen-felony-sexual-abuse-charges-david-farley/283-34eb9666-4bd5-4a2c-a0dd-c34bc4d14ef1" },
        { label: "KGW: plea video clip", href: "https://www.kgw.com/video/news/crime/former-west-linn-doctor-pleads-not-guilty-to-felony-sex-abuse-charges/283-6ba76bee-dc7b-4154-b9fe-253bf9ddd59b" },
        { label: "OPB background explainer", href: "https://www.opb.org/article/2025/10/10/david-farley-west-linn-sexual-abuse-allegations/" },
      ],
      emoji: "🏥",
    },
  ];

  // 4) Watchlist
  const watchlist = [
    "Brockman (NC): monitor DA filings and any formal resignation moves; next court date Nov 13.",
    "Bardunias (NDNY): detention hearing Oct 27; watch for indictment and any chamber statements/board actions.",
    "Hinds (WDKY): complaint → potential indictment; bond/detention details.",
    "Farley (OR): charging docs, additional victims, pretrial schedule, and any professional-board actions.",
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
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Oct 5–11, 2025</h1>
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