import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  The index page reads these to build the "This Week" teaser panel.
 *  ========================= */
export const teaserHighlights = [
  "AZ intrafamilial case: 334-year sentence for serial abuse of related children (Rodman).",
  "CT arrest: adult arranged paid sex with a person he believed was 15 (Root).",
  "SC ICAC arrest: 19-year-old charged with four counts of sexual exploitation of a minor (Patton).",
];

/** =========================
 *  UI Bits
 *  ========================= */
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
  // Green for “not mentioned” -> render as "No prior registration noted"
  let label = status;
  let tone = "bg-slate-50 text-slate-900 ring-slate-200";

  if (status === "No prior registration noted" || status === "Registry status not mentioned") {
    label = "No prior registration noted";
    tone = "bg-emerald-50 text-emerald-900 ring-emerald-200";
  } else if (status === "Previously registered") {
    tone = "bg-rose-50 text-rose-900 ring-rose-200";
  }

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${tone}`}>
      Registry: {label}
    </span>
  );
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

/** =========================
 *  Page (Week of Oct 19–25, 2025)
 *  ========================= */
export default function AccountabilityWatch_2025_10_25() {
  const pageTitle = "Accountability Watch — Week of Oct 19–25, 2025 | SOLAR";

  // 1) At a Glance
  const atAGlance = [
    "Intrafamilial abuse dominated: an Arizona defendant received a 334-year sentence for serial abuse of related children.",
    "Household-access case in Connecticut: arrest after arranging paid sex with a person he believed was 15.",
    "ICAC pipeline in South Carolina: 19-year-old arrested on four sexual-exploitation counts.",
    "Fewer new public-figure incidents this week; most allegations arose from preexisting access, not stranger scenarios.",
  ];

  // 2) New Arrests & Charges (includes family/household authority under our expanded scope)
  const newArrestsCharges = [
    {
      name: "Christopher Root",
      role: "Adult with household/community access context",
      jurisdiction: "Cromwell, CT (Middlesex County)",
      stage: "Arrested / Charged",
      date: "Oct 17–22, 2025",
      summary: <>Arrested on charges of <em>enticement of a minor</em> and <em>commercial sexual abuse of a minor</em> after arranging to meet who he believed was a 15-year-old; initial info via complaint and motel surveillance; court date set for <em>Oct 28</em>.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "Middletown Press (report)", href: "https://www.middletownpress.com/news/article/christopher-root-cromwell-enticing-minor-arrest-21106917.php" },
        { label: "WFSB coverage", href: "https://www.wfsb.com/2025/10/17/man-arrested-attempting-solicit-sex-15-year-old/" },
        { label: "FOX61 (local)", href: "https://www.fox61.com/article/news/local/middlesex-county/cromwell/man-arrested-for-soliciting-sex-with-minor/520-90c41787-1d48-4431-b481-0948813981b7" },
      ],
      emoji: "🏨",
    },
    {
      name: "Jaylin William Patton",
      role: "Community adult (ICAC arrest)",
      jurisdiction: "Charleston County, SC",
      stage: "Arrested / Charged",
      date: "Oct 23–24, 2025",
      summary: <>Arrested on <em>four counts</em> connected to the sexual exploitation of a minor; investigation by the Charleston County Sheriff’s Office ICAC Task Force.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "SC Attorney General press release", href: "https://www.scag.gov/about-the-office/news/charleston-county-man-arrested-on-four-child-sexual-abuse-material-charges-2/" },
        { label: "WCIV/ABC News 4 (local)", href: "https://abcnews4.com/news/local/19-year-old-hollywood-man-charged-with-distributing-child-abuse-material-ag-alan-wilson-crimes-south-carolina" },
        { label: "SC AG — News index (context)", href: "https://www.scag.gov/about-the-office/news/" },
      ],
      emoji: "📱",
    },
  ];

  // 3) Pleas / Convictions / Sentencings
  const pleasUpdates = [
    {
      name: "Mark Alan Rodman",
      role: "Intrafamilial abuser (family authority context)",
      jurisdiction: "Maricopa County, AZ",
      stage: "Sentenced",
      date: "Oct 20, 2025",
      summary: <>Sentenced to <em>334 years</em> in prison for serial sexual abuse and molestation of related children in Peoria; MCAO posted order of confinement and details.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "Maricopa County Attorney’s Office — News", href: "https://maricopacountyattorney.org/m/newsflash/Home/Detail/1251" },
        { label: "Order of Confinement (PDF)", href: "https://maricopacountyattorney.org/DocumentCenter/View/4070/Mark-Rodman-Order-of-Confinement" },
        { label: "FOX10 Phoenix coverage", href: "https://www.fox10phoenix.com/news/arizona-man-sentenced-centuries-prison-child-sexual-abuse-mcao" },
        { label: "12News Phoenix coverage", href: "https://www.12news.com/article/news/local/arizona/defendant-sentenced-300-years-arizona-prison-for-abusing-children-peoria/75-39a15fe7-487c-4cbd-8327-5b9291c99dc1" },
      ],
      emoji: "⚖️",
    },
  ];

  // 4) Watchlist
  const watchlist = [
    "Rodman (AZ): confirm registry/PCO conditions and any lifetime supervision terms once the judgment is finalized on the docket.",
    "Root (CT): track the Oct 28 court appearance; watch for charging refinements or additional victims.",
    "Patton (SC): device forensics may add counts; monitor for bond/detention rulings and ICAC follow-ups.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving people in positions of trust, including family/household authority contexts—each with registry-status context."
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
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Oct 19–25, 2025</h1>
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
        {/* Week context note */}
        <div className="mt-6 flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <Info className="mt-0.5 h-4 w-4 text-slate-500" />
          <p className="m-0">
            This week saw fewer new incidents involving formal public figures. Most serious allegations arose from <strong>preexisting access</strong>
            — intrafamilial or household-access contexts — underscoring that the registry <em>cannot prevent</em> the vast majority of offenses.
          </p>
        </div>

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

        <Section title="Pleas / Convictions / Sentencings" icon={<Scale className="h-5 w-5 text-amber-500" />}>
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