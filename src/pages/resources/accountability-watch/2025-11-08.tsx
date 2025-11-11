import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  ========================= */
export const teaserHighlights = [
  "IL middle-school teacher charged with sexually assaulting former student (Bergmann).",
  "CO worship pastor & ex-teacher charged with sexually assaulting a minor (McGinley).",
  "TX law-enforcement pair arrested in related ICAC probe; one federally indicted (Skylar & Kenan Laza).",
  "TX teacher arrested on CSAM charges (Beery) and Chicago youth coach charged with CSAM solicitation (Courts).",
];

/** =========================
 *  Utility Components (match prior week)
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
    "Arrested / Indicted (Federal)": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Federal charges unsealed": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Plea / case update": "bg-amber-50 text-amber-900 ring-amber-200",
    "Convicted": "bg-violet-50 text-violet-900 ring-violet-200",
    "Sentenced": "bg-emerald-50 text-emerald-900 ring-emerald-200",
  };
  const cls = map[stage] ?? "bg-slate-50 text-slate-900 ring-slate-200";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${cls}`}>{stage}</span>;
}

function RegistryChip({ status }: { status: string }) {
  // Standard: green when no prior status is found (explicit or implicit)
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
 *  Page (Two-Week Update • Oct 26–Nov 8, 2025)
 *  ========================= */
export default function AccountabilityWatch_2025_11_08() {
  const pageTitle = "Accountability Watch — Two-Week Update (Oct 26–Nov 8, 2025) | SOLAR";

  const atAGlance = [
    "Two-week edition covering late October and early November 2025.",
    "Educators and youth coaches dominated: arrests/charges for sexual assault and CSAM.",
    "Two Texas law-enforcement officers arrested in related ICAC probe; one federally indicted for CSAM production.",
    "Colorado worship pastor and former teacher charged with sexually assaulting a minor student.",
    "Pattern continues: most new cases involve people not previously registered.",
  ];

  const newArrestsCharges = [
    {
      name: "Jessica Bergmann",
      role: "Middle-school teacher, Washington MS (Aurora, IL)",
      jurisdiction: "Illinois / DuPage County",
      stage: "Arrested / Charged",
      date: "Nov 7, 2025",
      summary: (
        <>
          Charged with felony criminal sexual assault and aggravated sexual abuse of a former student while in a position of authority.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "NBC Chicago", href: "https://www.nbcchicago.com/news/local/aurora-teacher-arrested-charged-sexual-assault-former-student/3900419/" },
      ],
      emoji: "🏫",
    },
    {
      name: "Matthew McGinley",
      role: "Former worship pastor & teacher (Fort Collins, CO)",
      jurisdiction: "Colorado / Larimer County",
      stage: "Arrested / Charged",
      date: "Nov 2025",
      summary: (
        <>
          Allegedly sexually assaulted a minor student while in a position of trust; reportedly confessed to church leaders before arrest.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "The Coloradoan", href: "https://www.coloradoan.com/story/news/2025/11/03/former-fort-collins-pastor-charged-with-sexual-assault-on-child/76344123007/" },
      ],
      emoji: "⛪",
    },
    {
      name: "Skylar Laza",
      role: "Sheriff’s Deputy (Houston County, TX)",
      jurisdiction: "Texas / Eastern District",
      stage: "Arrested / Indicted (Federal)",
      date: "Nov 5–6, 2025",
      summary: (
        <>
          Arrested after an NCMEC cyber-tip; charged with aggravated sexual assault of a child and federally indicted for CSAM production.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "KETK News", href: "https://www.ketk.com/news/local-news/east-texas-deputy-arrested-for-child-sex-crimes/" },
      ],
      emoji: "🚓",
    },
    {
      name: "Kenan Laza",
      role: "Police Officer (Gladewater, TX)",
      jurisdiction: "Texas",
      stage: "Arrested / Charged",
      date: "Nov 6, 2025",
      summary: (
        <>
          Charged with indecency with a child by exposure; case connected to the Houston County deputy through an ICAC task-force investigation.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "CBS 19 Tyler", href: "https://www.cbs19.tv/article/news/local/gladewater-officer-arrested-child-indecency/501-58fa33cd-7a64-4df0-ae26-95ac9011a5b2" },
      ],
      emoji: "🚔",
    },
    {
      name: "Chad Beery",
      role: "Teacher (Mesquite Academy, Mesquite ISD, TX)",
      jurisdiction: "Texas / Rockwall County",
      stage: "Arrested / Charged",
      date: "Nov 2025",
      summary: (
        <>
          Arrested on two felony child-pornography charges; district suspended him without pay pending trial.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "WFAA Dallas", href: "https://www.wfaa.com/article/news/crime/mesquite-isd-teacher-child-pornography-arrest/287-c3d7b5f4-bbb7-4d26-bbe9-0c9e9b7a67cb" },
      ],
      emoji: "📚",
    },
    {
      name: "Eric Courts",
      role: "Youth basketball coach (Adidas Legacy Program, Chicago)",
      jurisdiction: "Illinois / Cook County",
      stage: "Arrested / Charged",
      date: "Nov 5, 2025",
      summary: (
        <>
          Charged with solicitation and possession of CSAM after coercing a 17-year-old player to send sexual videos in exchange for gear.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "ABC7 Chicago", href: "https://abc7chicago.com/chicago-basketball-coach-charged-child-pornography-csam/15209176/" },
      ],
      emoji: "🏀",
    },
  ];

  const pleasUpdates = [
    {
      name: "Lindsey Whiteside",
      role: "Former youth pastor & school coach (Hernando, MS)",
      jurisdiction: "Mississippi / DeSoto County",
      stage: "Sentenced",
      date: "Oct 13, 2025",
      summary: (
        <>
          Pleaded guilty to sexually abusing a minor girl; sentenced to <em>3 years house arrest</em> + <em>7 years probation</em>,
          a leniency criticized by prosecutors who sought prison time.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        { label: "WREG Memphis", href: "https://wreg.com/news/mid-south/ms-youth-pastor-sentence-house-arrest-sex-abuse/" },
      ],
      emoji: "⚖️",
    },
  ];

  const watchlist = [
    "Bergmann (IL): monitor Dec 1 court appearance and any plea.",
    "Skylar & Kenan Laza (TX): federal/state proceedings; watch for additional counts or identified victims.",
    "Texas educator arrests (Beery): track TEA/administrative actions alongside criminal case.",
    "Community responses to clergy/coach cases as court calendars progress.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Two-week roundup of verified arrests, charges, pleas, convictions, and sentencings involving people in positions of trust or household authority, with registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge>🧭 Accountability Watch • Two-Week Edition</Badge>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/90">
              <Scale className="h-4 w-4" /> Verified sources • <Shield className="h-4 w-4" /> Registry context
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Oct 26 – Nov 8, 2025</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            We skipped posting last week — this update spans two weeks. Credible reports and official filings only. Allegations remain
            allegations unless and until proven in court.
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