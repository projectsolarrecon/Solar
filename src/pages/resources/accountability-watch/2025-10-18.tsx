import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

// ===== Teaser highlights (TOP-LEVEL EXPORT) =====
// The index page will read these to build the "This Week" teaser panel.
export const teaserHighlights = [
  "Lincoln (CA) police officer arrested; alleged long-term abuse of four minors.",
  "Former missionary pastor arrested in FL on NC warrants (trafficking & sex offenses).",
  "San Antonio Catholic school coach/teacher rearrested; new invasive-recording charge tied to a 13-year-old.",
  "Former NE sheriff’s deputy convicted on 3 child-porn counts; sentencing set Jan 7, 2026.",
];

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

// ----- Page (Week of Oct 12–18, 2025) -----
export default function AccountabilityWatch_2025_10_18() {
  const pageTitle = "Accountability Watch — Week of Oct 12–18, 2025 | SOLAR";

  // 1) At a Glance
  const atAGlance = [
    "California educator cases: Elk Grove HS teacher arrested; SF preschool teacher charged/arraigned.",
    "Law enforcement: Lincoln, CA police officer arrested on multi-victim child-sex allegations; former NE deputy convicted on 3 CP counts.",
    "Religious leadership: former NC missionary pastor arrested in Florida on NC human-trafficking and sex-offense warrants.",
    "School athletics: San Antonio Catholic school coach/teacher rearrested after discovery of recording a 13-year-old; more victims possible.",
  ];

  // 2) New Arrests & Charges (gatekeepers / public-trust roles)
  const newArrestsCharges = [
    {
      name: "Timothy Jaekel",
      role: "Lincoln Police Department officer",
      jurisdiction: "Sacramento County, CA",
      stage: "Arrested / Charged",
      date: "Oct 17, 2025",
      summary: <>Deputies arrested the 52-year-old officer, accused of long-term sexual abuse of four minors (including family members); Sheriff’s Office says possible youth-program access is under review.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KCRA: arrest report", href: "https://www.kcra.com/article/lincoln-officer-arrested-lewd-acts-with-children/69064779" },
        { label: "KCRA: follow-up on youth programs", href: "https://www.kcra.com/article/lincoln-officer-accused-sexual-abuse-youth-programs/69078614" },
        { label: "CBS Sacramento coverage", href: "https://www.cbsnews.com/sacramento/news/lincoln-police-officer-suspected-child-sex-abuse-crimes-deputies-say/" },
        { label: "Sacramento Sheriff (official post)", href: "https://www.facebook.com/SacSheriff/posts/1140778458242719" },
      ],
      emoji: "🚓",
    },
    {
      name: "Luis Alberto Sosa",
      role: "Former missionary pastor",
      jurisdiction: "Iredell County, NC (arrested in Flagler County, FL)",
      stage: "Arrested / Charged",
      date: "Oct 16, 2025",
      summary: <>Arrested on NC warrants for alleged sexual assaults of two Argentinian minors brought to the U.S. on a “mission trip”; charges include human trafficking, statutory sex offenses, and indecent liberties; extradition pending.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "WBTV report", href: "https://www.wbtv.com/2025/10/16/former-pastor-accused-sexually-assaulting-children-years-iredell-county/" },
        { label: "Flagler Sheriff release (PDF)", href: "https://www.flaglersheriff.com/cmsfiles/2025-183-North-Carolina-Fugitive-from-Justice-Arrested-in-Palm-Coast.pdf" },
        { label: "WCNC coverage", href: "https://www.wcnc.com/article/news/crime/former-missionary-pastor-arrested-for-alleged-abuse/275-285a6cce-0cee-4816-92fc-76119d1b22dc" },
      ],
      emoji: "⛪",
    },
    {
      name: "Armando Arnulfo Flores",
      role: "Former coach/teacher, Holy Cross of San Antonio (Catholic school)",
      jurisdiction: "Bexar County, TX",
      stage: "Arrested / Charged",
      date: "Oct 17–18, 2025",
      summary: <>After an earlier arrest for hidden-camera recordings, police added a new invasive-visual-recording charge tied to a 13-year-old; investigators say more victims are possible.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "Express-News report", href: "https://www.expressnews.com/news/article/ex-holy-cross-coach-rearrested-allegedly-filming-21106494.php" },
        { label: "MySA coverage", href: "https://www.mysanantonio.com/news/local/article/holy-cross-teacher-arrested-san-antonio-21106295.php" },
        { label: "News4SA update", href: "https://news4sanantonio.com/news/local/ex-holy-cross-hs-coach-faces-new-charges-for-illegally-filming-minor-with-hidden-camera-san-antonio-texas-investigation-police-evidence-cell-phone-victim" },
      ],
      emoji: "🏫",
    },
    {
      name: "David Collins",
      role: "Teacher, Laguna Creek High School",
      jurisdiction: "Elk Grove (Sacramento County), CA",
      stage: "Arrested / Charged",
      date: "Oct 15–16, 2025",
      summary: <>Arrested on suspicion of an illegal sexual relationship with a former underage student (alleged conduct 2015–2018); initial reports indicated no bail.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KCRA report", href: "https://www.kcra.com/article/elk-grove-teacher-arrest-sexual-offenses-with-student/69049188" },
        { label: "ABC10 video", href: "https://www.abc10.com/video/news/local/elk-grove-teacher-arrested-for-alleged-sexual-relationship-with-former-underage-student/103-2aae9f3d-f16f-4014-8184-999a36ff2805" },
        { label: "Elk Grove Police (official post)", href: "https://www.facebook.com/ElkGrovePoliceDepartment/posts/a-high-school-teacher-is-in-custody-in-connection-with-two-sex-related-offenses-/1199534205532850/" },
      ],
      emoji: "🏫",
    },
  ];

  // 3) Pleas / Convictions / Sentencings
  const pleasUpdates = [
    {
      name: "Zachary Pohlmeier",
      role: "Former Webster County Sheriff’s Deputy",
      jurisdiction: "Adams County, NE",
      stage: "Convicted",
      date: "Oct 17, 2025",
      summary: <>Found guilty on three counts of child-pornography possession (no-contest plea accepted). Sentencing set for <em>Jan 7, 2026</em>.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KSNB Local4 report", href: "https://www.ksnblocal4.com/2025/10/17/former-webster-county-deputy-convicted-child-porn-charges/" },
        { label: "KWTX/Gray pick-up", href: "https://www.kwtx.com/2025/10/18/former-deputy-faces-up-60-years-prison-after-being-convicted-child-porn-charges/" },
      ],
      emoji: "🛡️",
    },
    {
      name: "María Figueroa",
      role: "Preschool teacher, UCSF Mission Bay University Child Care Center (Bright Horizons)",
      jurisdiction: "San Mateo County, CA",
      stage: "Plea / case update",
      date: "Oct 17, 2025",
      summary: <>Arrested this week and pleaded <em>not guilty</em> to lewd-act charges involving a child under 14 (alleged 2016–2018 conduct not tied to the daycare); bail set at <em>$600,000</em>; next court date Wednesday.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "SF Standard coverage", href: "https://sfstandard.com/2025/10/17/ucsf-mission-bay-bright-horizons-maria-figueroa-arrest/" },
      ],
      emoji: "🏫",
    },
  ];

  // 4) Watchlist
  const watchlist = [
    "Luis A. Sosa (former pastor): track extradition to NC and first NC court appearance; potential added victims/charges.",
    "Zachary Pohlmeier (ex-deputy): sentencing set for Jan 7, 2026 (Adams County, NE).",
    "Armando A. Flores (ex-coach/teacher): possible additional invasive-recording charges as devices are analyzed.",
    "María Figueroa (preschool teacher): next court date Wednesday; bail $600,000; watch for any employer/licensing actions.",
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
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Oct 12–18, 2025</h1>
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