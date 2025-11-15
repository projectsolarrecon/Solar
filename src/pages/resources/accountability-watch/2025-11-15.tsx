import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info, Gavel } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  ========================= */
export const teaserHighlights = [
  "Former Celina ISD teacher/coach federally indicted on child-exploitation counts (Elliott).",
  "Austin physician pleads guilty in federal court to sexually exploiting a minor (Sobash).",
  "Pediatric ER nurse at a children’s hospital charged with child sexual abuse material (Hjemdahl-Monsen).",
  "Fort Cavazos Army OB-GYN accused in civil suit of secretly filming patients during exams (McGraw).",
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

function Section({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
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
    "Civil lawsuit filed": "bg-sky-50 text-sky-900 ring-sky-200",
  };
  const cls = map[stage] ?? "bg-slate-50 text-slate-900 ring-slate-200";
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${cls}`}>
      {stage}
    </span>
  );
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

type SourceLink = { label: string; href: string };

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
  sources: SourceLink[];
  emoji?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">
          {emoji ?? "🧾"} {name}
        </span>
        <span>— {role}</span>
        <span className="ml-auto whitespace-nowrap">{date}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-2">
          <span>
            <span className="font-medium">Jurisdiction:</span> {jurisdiction}
          </span>
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
 *  ========================= */
export default function AccountabilityWatch_2025_11_15() {
  const pageTitle = "Accountability Watch — Week of Nov 9–15, 2025 | SOLAR";

  const atAGlance = [
    "Former Celina ISD teacher and coach federally indicted on child-exploitation offenses after a prior local grooming investigation.",
    "Austin physician pleads guilty in federal court to sexually exploiting a Tennessee minor in a hotel room.",
    "Pediatric ER nurse at a children’s hospital charged with child sexual abuse material after law-enforcement search.",
    "Army OB-GYN at Fort Cavazos (Fort Hood) accused in a civil suit of secretly recording patients during intimate exams, with prior complaints allegedly ignored.",
    "Once again, none of the featured cases involves someone flagged ahead of time by a public registry; the failure is systemic, not a matter of dots on a map.",
  ];

  const newArrestsCharges = [
    {
      name: "William Caleb Elliott",
      role: "Former Celina ISD teacher & coach",
      jurisdiction: "Eastern District of Texas / Collin County, TX",
      stage: "Arrested / Charged",
      date: "Nov 6–8, 2025",
      summary: (
        <>
          Federal indictment alleges Elliott possessed child sexual abuse material and attempted to coerce a minor.
          Coverage notes he previously faced a local grooming allegation in Celina ISD but was allowed to resign
          quietly before the federal case emerged.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "USAO–EDTX press release",
          href: "https://www.justice.gov/usao-edtx/pr/former-celina-teachercoach-charged-production-child-pornography-eastern-district-texas",
        },
        {
          label: "CBS Texas – Celina ISD fallout",
          href: "https://www.cbsnews.com/texas/news/celina-isd-football-coach-sexual-misconduct-civil-lawsuits/",
        },
        {
          label: "Dallas Morning News coverage",
          href: "https://easttexasradio.com/former-celina-teacher-coach-now-faces-federal-charges/",
        },
      ],
      emoji: "🏫",
    },
    {
      name: "Erik Hjemdahl-Monsen",
      role: "Pediatric ER nurse, Oishei Children’s Hospital",
      jurisdiction: "Western District of New York / Buffalo, NY",
      stage: "Arrested / Charged",
      date: "Nov 12–13, 2025",
      summary: (
        <>
          Federal complaint charges Hjemdahl-Monsen with receiving and possessing child sexual abuse material. DOJ
          says investigators traced online activity to his home; hospital administrators say he has been removed
          from duty and patients are being notified.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "USAO–WDNY press release",
          href: "https://www.justice.gov/usao-wdny/pr/springville-nurse-arrested-charged-possession-and-distribution-child-pornography",
        },
        {
          label: "WKBW Buffalo – local report",
          href: "https://www.wkbw.com/news/local-news/nurse-who-worked-at-oishei-childrens-hospital-facing-child-pornography-charges",
        },
      ],
      emoji: "🏥",
    },
  ];

  const pleasUpdates = [
    {
      name: "Dr. Philip Taylor Sobash",
      role: "Austin-based physician",
      jurisdiction: "Middle District of Tennessee",
      stage: "Plea / case update",
      date: "Nov 7, 2025",
      summary: (
        <>
          Sobash pleaded guilty in federal court to <em>sexual exploitation of a minor</em> after arranging to meet a
          Tennessee minor in a Murfreesboro hotel and recording sexual abuse. Prosecutors say he faces a mandatory
          minimum 15-year sentence; sentencing is set for early 2026.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "USAO–MDTN press release",
          href: "https://www.justice.gov/usao-mdtn/pr/texas-man-pleads-guilty-sexual-exploitation-minor",
        },
        {
          label: "WSMV Nashville coverage",
          href: "https://www.wsmv.com/2025/11/13/texas-physician-pleads-guilty-using-sugar-daddy-site-exploit-victims-including-tn-girl/",
        },
      ],
      emoji: "🩺",
    },
    {
      name: "Aaron Thomas Carrado",
      role: "Owner/trainer, Strength in Christ Athletes gym",
      jurisdiction: "23rd Judicial District, Douglas County, CO",
      stage: "Sentenced",
      date: "Nov 13, 2025",
      summary: (
        <>
          A Douglas County judge sentenced Carrado to <em>76 years to life</em> in prison after a jury convicted him on
          12 counts, including multiple counts of sexual assault on a child by one in a position of trust. Prosecutors
          say he abused elite teen athletes he coached at his Christian-branded gym over several years.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "23rd Judicial DA – conviction release (PDF)",
          href: "https://coda23.gov/wp-content/uploads/2025/08/Carrrado-Sentencing.pdf",
        },
        {
          label: "Denver7 – sentencing update",
          href: "https://www.denver7.com/news/local-news/parker-personal-trainer-found-guilty-of-sexually-assaulting-2-young-athletes",
        },
        {
          label: "CBS Colorado report",
          href: "https://www.cbsnews.com/colorado/news/colorado-personal-trainer-convicted-sexual-assault-child/",
        },
      ],
      emoji: "🏋️",
    },
  ];

  const civilCases = [
    {
      name: "Maj. Blaine McGraw",
      role: "Army OB-GYN, Carl R. Darnall Army Medical Center (Fort Cavazos/Fort Hood)",
      jurisdiction: "Federal civil suit / Fort Cavazos (Killeen, TX) & prior duty stations",
      stage: "Civil lawsuit filed",
      date: "Complaint filed Nov 10, 2025",
      summary: (
        <>
          A civil lawsuit alleges McGraw secretly recorded intimate videos of patients during gynecological exams and
          sexually exploited women in his care. Reporting notes prior complaints at Fort Cavazos and earlier posts
          (including Hawaii) that did not lead to timely removal from practice.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "NBC News investigation",
          href: "https://www.nbcnews.com/news/investigations/army-gynecologist-took-secret-videos-patients-during-intimate-exams-lawsuit-s-rcna242846",
        },
        {
          label: "Hilliard Law – plaintiff firm summary",
          href: "https://www.hilliard-law.com/blog/2025/november/suspended-fort-hood-army-doctor-accused-of-sexua/",
        },
        {
          label: "Ground News coverage summary",
          href: "https://ground.news/article/army-gynecologist-took-secret-videos-of-patients-during-intimate-exams-lawsuit-says_73c3bf",
        },
      ],
      emoji: "🎖️",
      whyIncluded: (
        <>
          <strong>Why we included this:</strong> McGraw’s case shows an institution that allegedly kept a doctor in
          uniform and in exam rooms despite repeated complaints. The women harmed were never going to be “protected” by
          a registry search — only by systems that take early reports seriously and remove predators from positions of
          power.
        </>
      ),
    },
  ];

  const watchlist = [
    "Elliott (EDTX/Celina ISD): watch for superseding indictment, plea talks, and Celina ISD transparency about prior grooming concerns.",
    "Sobash (MDTN): track sentencing date and any medical-licensing board actions in Texas and Tennessee.",
    "Hjemdahl-Monsen (WDNY): monitor for indictment, additional counts, and how Oishei and Kaleida Health notify affected families.",
    "Carrado (CO): follow any post-sentence motions and civil suits from former athletes.",
    "McGraw (Army OB-GYN): watch for parallel criminal investigation outcomes and additional civil claims from prior duty stations.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly Accountability Watch roundup of arrests, pleas, sentencings, and civil suits involving people in positions of trust or household authority, with registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge>🧭 Accountability Watch • Weekly</Badge>
            <div className="hidden items-center gap-2 text-xs text-slate-200/90 sm:flex">
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
        <div className="mt-6 flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <Info className="mt-0.5 h-4 w-4 text-slate-500" />
          <p className="m-0">
            This week’s cases span public schools, hospitals, private gyms, and the U.S. Army health system. In every
            instance, the harm flowed from <em>access and unchecked authority</em> — not from a stranger flagged on a
            registry map.
          </p>
        </div>

        <Section title="At a Glance" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">
            {atAGlance.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people{" "}
            <strong>not previously registered</strong> — evidence that real prevention comes from accountability inside
            schools, hospitals, churches, and agencies, not from public shaming lists.
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

        <Section
          title="Civil Suits & Institutional Accountability"
          icon={<Gavel className="h-5 w-5 text-sky-600" />}
        >
          <div className="grid gap-3">
            {civilCases.map((c, i) => (
              <div key={i} className="space-y-2">
                <CaseRow
                  name={c.name}
                  role={c.role}
                  jurisdiction={c.jurisdiction}
                  stage={c.stage}
                  date={c.date}
                  summary={c.summary}
                  registry={c.registry}
                  sources={c.sources}
                  emoji={c.emoji}
                />
                <div className="rounded-lg bg-sky-50 p-3 text-xs text-sky-900">
                  {c.whyIncluded}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Watchlist" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">
            {watchlist.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </Section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty in a court of law. Registry status
            reflects what’s publicly reported in official documents or mainstream coverage; absence of mention is not
            definitive. Civil allegations are reported from complaints and news coverage and may be disputed in court.
          </p>
        </div>
      </div>
    </main>
  );
}