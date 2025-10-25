import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  ========================= */
export const teaserHighlights = [
  "KY theater teacher charged federally for distributing CSAM (Hinds).",
  "AZ intrafamilial case: 334-year sentence for serial abuse of related children (Rodman).",
  "CT household-access arrest for enticement and commercial sexual abuse of a minor (Root).",
  "SC ICAC arrest: 19-year-old charged with four counts of sexual exploitation of a minor (Patton).",
];

/** =========================
 *  Utility Components
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

  const atAGlance = [
    "Intrafamilial abuse dominated: an Arizona defendant received a 334-year sentence for serial abuse of related children.",
    "Kentucky educator charged federally for distribution and possession of CSAM.",
    "Household-access case in Connecticut: arrest after arranging paid sex with a person he believed was 15.",
    "ICAC pipeline in South Carolina: 19-year-old arrested on four sexual-exploitation counts.",
    "Fewer new public-figure incidents this week; most allegations arose from preexisting access, not stranger scenarios.",
  ];

  const newArrestsCharges = [
    {
      name: "Brian Hinds",
      role: "Theater Teacher, duPont Manual HS / YPAS (Louisville, KY)",
      jurisdiction: "Western District of Kentucky",
      stage: "Arrested / Charged",
      date: "Oct 9–10, 2025",
      summary: (
        <>
          Federal complaint alleges Hinds, 51, distributed and possessed CSAM depicting prepubescent boys. He allegedly
          admitted to sending and receiving CSAM in August 2025. Faces 5–40 years if convicted; prosecutors note no
          current or former students identified.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "USAO–WDKY press release", href: "https://www.justice.gov/usao-wdky/pr/jefferson-county-high-school-teacher-charged-distributing-child-sexual-abuse-material" },
        { label: "WAVE3 report", href: "https://www.wave3.com/2025/10/10/manual-ypas-teacher-arrested-child-porn-charges-no-students-connected-case-says-us-attorney/" },
        { label: "WDRB update", href: "https://www.wdrb.com/news/education/jcps-teacher-under-investigation-and-no-longer-reporting-to-manual-high-school/article_5295dece-2741-4157-9319-9f6679cc1ffc.html" },
      ],
      emoji: "🎭",
    },
    {
      name: "Christopher Root",
      role: "Adult with household/community access context",
      jurisdiction: "Cromwell, CT (Middlesex County)",
      stage: "Arrested / Charged",
      date: "Oct 17–22, 2025",
      summary: (
        <>
          Arrested on charges of <em>enticement of a minor</em> and <em>commercial sexual abuse of a minor</em> after arranging
          to meet who he believed was a 15-year-old; court date set for <em>Oct 28</em>.
        </>
      ),
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
      summary: (
        <>
          Arrested on <em>four counts</em> connected to the sexual exploitation of a minor; investigation by the Charleston
          County Sheriff’s Office ICAC Task Force.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        { label: "SC Attorney General press release", href: "https://www.scag.gov/about-the-office/news/charleston-county-man-arrested-on-four-child-sexual-abuse-material-charges-2/" },
        { label: "WCIV/ABC News 4 (local)", href: "https://abcnews4.com/news/local/19-year-old-hollywood-man-charged-with-distributing-child-abuse-material-ag-alan-wilson-crimes-south-carolina" },
        { label: "SC AG — News index (context)", href: "https://www.scag.gov/about-the-office/news/" },
      ],
      emoji: "📱",
    },
  ];

  const pleasUpdates = [
    {
      name: "Mark Alan Rodman",
      role: "Intrafamilial abuser (family authority context)",
      jurisdiction: "Maricopa County, AZ",
      stage: "Sentenced",
      date: "Oct 20, 2025",
      summary: (
        <>
          Sentenced to <em>334 years</em> in prison for serial sexual abuse and molestation of related children in Peoria;
          MCAO posted confinement order and case details.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        { label: "MCAO — News", href: "https://maricopacountyattorney.org/m/newsflash/Home/Detail/1251" },
        { label: "Order of Confinement (PDF)", href: "https://maricopacountyattorney.org/DocumentCenter/View/4070/Mark-Rodman-Order-of-Confinement" },
        { label: "FOX10 Phoenix coverage", href: "https://www.fox10phoenix.com/news/arizona-man-sentenced-centuries-prison-child-sexual-abuse-mcao" },
        { label: "12News Phoenix coverage", href: "https://www.12news.com/article/news/local/arizona/defendant-sentenced-300-years-arizona-prison-for-abusing-children-peoria/75-39a15fe7-487c-4cbd-8327-5b9291c99dc1" },
      ],
      emoji: "⚖️",
    },
  ];

  const watchlist = [
    "Rodman (AZ): confirm registry/PCO conditions and any lifetime supervision terms once judgment is finalized.",
    "Hinds (KY): monitor for indictment or plea filings; check JCPS and YPAS responses.",
    "Root (CT): track Oct 28 court appearance; watch for charging refinements.",
    "Patton (SC): device forensics may add counts; monitor ICAC follow-ups.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving people in positions of trust or household authority, with registry-status context."
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
        <div className="mt-6 flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <Info className="mt-0.5 h-4 w-4 text-slate-500" />
          <p className="m-0">
            This week included a new educator arrest in Kentucky and continued patterns of household and family-access
            abuse, underscoring that public registries <em>cannot prevent</em> most offenses.
          </p>
        </div>

        <Section title="At a Glance" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">{atAGlance.map((a, i) => <li key={i}>{a}</li>)}</ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people{" "}
            <strong>not previously registered</strong> — evidence that prevention requires more than public registries.
          </PullQuote>
        </Section>

        <Section title="New Arrests & Charges" icon={<Shield className="h-5 w-5 text-rose-500" />}>
          <div className="grid gap-3">
            {newArrestsCharges.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
          </div>
        </Section>

        <Section title="Pleas / Convictions / Sentencings" icon={<Scale className="h-5 w-5 text-amber-500" />}>
          <div className="grid gap-3">
            {pleasUpdates.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
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