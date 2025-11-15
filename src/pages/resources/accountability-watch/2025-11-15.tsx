import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 * ========================= */
export const teaserHighlights = [
  "Lead: Army OB-GYN lawsuit alleges secret recordings of patients during gynecologic exams at Fort Hood.",
  "TX teacher/coach indicted on CSAM production involving students.",
  "TN physician pleads guilty to sexual exploitation of minor and international trafficking of boys.",
  "MI assistant principal bound over for trial after alleged sexual assault of 14-year-old student.",
];

/** =========================
 *  Utility Components (matching prior styling)
 * ========================= */
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
    "Civil lawsuit filed": "bg-cyan-50 text-cyan-900 ring-cyan-200",
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
 *  Page (Week of Nov 9–15, 2025)
 * ========================= */
export default function AccountabilityWatch_2025_11_15() {
  const pageTitle = "Accountability Watch — Week of Nov 9–15, 2025 | SOLAR";

  const atAGlance = [
    "Lead story: Civil class-action filed against Army OB-GYN alleging secret recordings of patients during gynecologic exams; suspension in October underscores institutional failure even before arrest.",
    "Educators, coaches, and healthcare professionals dominated this week’s cases — individuals with high trust and access to minors or vulnerable populations.",
    "Multiple cases show registry status not publicly noted prior to first offense, reinforcing that public registries do not prevent initial abuse.",
    "Institutional oversight (schools, hospitals, churches, law enforcement) arises again as a key vulnerability rather than just offender-monitoring.",
  ];

  const civilAdmin = [
    {
      name: "Army OB-GYN (per complaint)",
      role: "Military physician — Army hospital",
      jurisdiction: "Federal (civil suit)",
      stage: "Civil lawsuit filed",
      date: "Nov 11, 2025",
      summary: (
        <>
          A civil class-action alleges the physician secretly recorded dozens of female patients during intimate exams.
          The hospital reportedly suspended him in October; no public arrest yet. <strong>Why we included this:</strong> the lawsuit
          and suspension combined indicate credible allegations and institutional accountability failures — even though no arrest, the scope and access speak to systemic risk.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "NBC News investigation",
          href: "https://www.nbcnews.com/news/investigations/army-gynecologist-took-secret-videos-patients-intimate-exams-lawsuit-s-rcna242846",
        },
      ],
      emoji: "🏥",
    },
  ];

  const newArrestsCharges = [
    {
      name: "William Caleb Elliott",
      role: "Former teacher/coach (Celina ISD, TX)",
      jurisdiction: "E.D. Tex. (Federal)",
      stage: "Indicted",
      date: "Nov 14, 2025",
      summary: (
        <>
          Indicted on seven counts of CSAM production and one count of attempted production involving students; highlights teacher-coach access to minors.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ E.D. Tex. press release",
          href: "https://www.justice.gov/usao-edtx/pr/former-celina-isd-teacher-indicted-seven-counts-child-pornography",
        },
      ],
      emoji: "🏫",
    },
    {
      name: "Philip Taylor Sobash",
      role: "Physician (Austin, TX)",
      jurisdiction: "M.D. Tenn. (Federal)",
      stage: "Plea / case update",
      date: "Nov 13, 2025",
      summary: (
        <>
          Physician admitted guilt to sexual exploitation of a minor and international trafficking of boys; sentencing scheduled for 2026.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ M.D. Tenn. press release",
          href: "https://www.justice.gov/usao-mdtn/pr/austin-physician-pleads-guilty-sexual-exploitation-minor",
        },
      ],
      emoji: "🩺",
    },
    {
      name: "Jerome Younger",
      role: "Assistant principal, Detroit Public Schools",
      jurisdiction: "Macomb County, MI (State)",
      stage: "Arrested / Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          Bound over to circuit court on 1st- and 2nd-degree CSC charges; alleged sexual assault of a 14-year-old student.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "ClickOnDetroit report",
          href: "https://www.clickondetroit.com/news/2025/11/14/assistant-principal-charged-sexual-conduct-student-detroit-public-schools/",
        },
      ],
      emoji: "🧑‍🏫",
    },
    {
      name: "Donald Aaron Axtell",
      role: "Youth pastor (Excelsior Springs Baptist Church, MO)",
      jurisdiction: "Clay County, MO (State)",
      stage: "Arrested / Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          Youth pastor charged with statutory rape, statutory sodomy and furnishing pornography to a minor in church youth-group context.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "KCTV5 Kansas City",
          href: "https://www.kctv5.com/news/missouri/youth-pastor-charged-with-sex-crimes-involving-minor/article_5fa0e910-6a27-11ee-8f3d-bb9b7f3dfc33.html",
        },
      ],
      emoji: "⛪",
    },
    {
      name: "Dr. Christopher David Olenek",
      role: "Physician (Vero Beach, FL)",
      jurisdiction: "Indian River County, FL (State)",
      stage: "Arrested / Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          Arrested amid investigation of inappropriate sexual conduct involving at least eight female patients; license review underway.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "WPBF 25 News",
          href: "https://www.wpbf.com/article/vero-beach-physician-arrested-for-sexual-battery-on-patients/43297743",
        },
      ],
      emoji: "🏥",
    },
  ];

  const pleasUpdates = [
    {
      name: "Erik Hjemdahl-Monsen",
      role: "Former ER nurse (Oishei Children’s Hospital, NY)",
      jurisdiction: "W.D. N.Y. (Federal)",
      stage: "Sentenced",
      date: "Nov 14, 2025",
      summary: (
        <>
          Received 72 months in federal prison for possession of CSAM involving a prepubescent child; followed by 10 years supervised release.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ W.D. N.Y. press release",
          href: "https://www.justice.gov/usao-wdny/pr/former-children-s-hospital-nurse-sentenced-72-months-child-pornography-offense",
        },
      ],
      emoji: "👩‍⚕️",
    },
    {
      name: "Aaron Thomas Carrado",
      role: "Gym owner/coach (“Strength in Christ”), CO",
      jurisdiction: "El Paso County, CO (State)",
      stage: "Sentenced",
      date: "Nov 13, 2025",
      summary: (
        <>
          Sentenced to 76 years to life for serial sexual assaults of teen athletes; coach-athlete trust relationship central.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "KKTV 11 News",
          href: "https://www.kktv.com/2025/11/13/coach-sentenced-76-years-serial-sexual-assault-teens/",
        },
      ],
      emoji: "🏋️",
    },
    {
      name: "Jessica Bergmann",
      role: "Teacher & soccer coach (Washington Middle School, IL)",
      jurisdiction: "DuPage County, IL (State)",
      stage: "Charged",
      date: "Nov 10, 2025",
      summary: (
        <>
          Teacher and youth coach charged with criminal sexual assault and aggravated sexual abuse of a former student; coach/mentor role flagged.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "Chicago Sun-Times",
          href: "https://chicago.suntimes.com/2025/11/10/teacher-charged-sexual-assault-former-student-dupage/",
        },
      ],
      emoji: "⚽",
    },
    {
      name: "Teresa Whalin",
      role: "Teacher (Ranch View Middle School, CO)",
      jurisdiction: "Douglas County, CO (State)",
      stage: "Arrested / Charged",
      date: "Nov 12, 2025",
      summary: (
        <>
          Arrested on suspicion of sexual assault by person in position of trust, internet exploitation, and stalking a child; bond set at $50,000.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "CBS Colorado",
          href: "https://www.cbsnews.com/colorado/news/douglas-county-teacher-arrested-sexual-assault-child-trust/",
        },
      ],
      emoji: "📘",
    },
    {
      name: "Matthew McGinley",
      role: "Former worship pastor & teacher (Fort Collins, CO)",
      jurisdiction: "Larimer County, CO (State)",
      stage: "Arrested / Charged",
      date: "Nov 12, 2025",
      summary: (
        <>
          Charged with felony sexual assault of a minor while in a position of trust (teacher/pastor); church and district investigating.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "Coloradoan",
          href: "https://www.coloradoan.com/story/news/2025/11/12/former-fort-collins-pastor-teacher-charged-sexual-assault-minor/76344123007/",
        },
      ],
      emoji: "🛐",
    },
  ];

  const watchlist = [
    "Army OB-GYN lead: monitor for criminal referral, DoD action and institutional change.",
    "Detroit district case: assistant principal Jerome Younger arraignment Nov 24 — track plea/outcome.",
    "Florida Vero Beach physician: medical board decision and any criminal indictment.",
    "Missouri youth pastor case: additional counts / victims and church accountability response.",
    "Colorado teacher/coach arrests: district licensing review and broader coach-athlete vulnerability.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions and civil filings involving individuals in positions of trust or authority – educators, clergy, coaches, doctors, law-enforcement and institutional leaders."
        />
      </Helmet>

      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge>🧭 Accountability Watch • Weekly</Badge>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/90">
              <Scale className="h-4 w-4" /> Verified sources • <Shield className="h-4 w-4" /> Registry context
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Nov 9–15, 2025</h1>
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
          <ul className="list-disc pl-5 text-sm">{atAGlance.map((a, i) => <li key={i}>{a}</li>)}</ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people <strong>not previously registered</strong> — because registration alone cannot stop first-time offending by authority or access figures.
          </PullQuote>
        </Section>

        <Section title="Civil / Administrative Actions" icon={<FileText className="h-5 w-5 text-cyan-500" />}>
          <div className="grid gap-3">
            {civilAdmin.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
          </div>
        </Section>

        <Section title="New Arrests & Charges" icon={<Shield className="h-5 w-5 text-rose-500" />}>
          <div className="grid gap-3">
            {newArrestsCharges.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
          </div>
        </Section>

        <Section title="Pleas / Convictions / Sentencings" icon={<Scale className="h-5 w-5 text-amber-500" />}>
          <div classItem="grid gap-3">
            {pleasUpdates.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
          </div>
        </Section>

        <Section title="Watchlist" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="list-disc pl-5 text-sm">{watchlist.map((w, i) => <li key={i}>{w}</li>)}</ul>
        </Section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty in a court of law. Registry status reflects what’s publicly
            reported in official documents or mainstream coverage; an absence of mention does not guarantee non-registration.
          </p>
        </div>
      </div>
    </main>
  );
}