import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  ========================= */
export const teaserHighlights = [
  "Army OB-GYN at Fort Cavazos sued for allegedly filming patients during intimate exams — suspended, but not arrested.",
  "Former Celina ISD teacher/coach federally indicted for producing CSAM involving students.",
  "Detroit assistant principal, Missouri youth pastor, and Florida physician all face new sex-abuse charges tied to positions of trust.",
  "Colorado cluster: coach, teachers, and worship pastor in separate cases involving youth access and authority roles.",
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
    Arrested: "bg-rose-50 text-rose-900 ring-rose-200",
    Charged: "bg-rose-50 text-rose-900 ring-rose-200",
    Indicted: "bg-purple-50 text-purple-900 ring-purple-200",
    "Federal charges unsealed": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Civil lawsuit filed": "bg-sky-50 text-sky-900 ring-sky-200",
    "Guilty plea": "bg-amber-50 text-amber-900 ring-amber-200",
    Convicted: "bg-violet-50 text-violet-900 ring-violet-200",
    Sentenced: "bg-emerald-50 text-emerald-900 ring-emerald-200",
    "Bound over for trial": "bg-amber-50 text-amber-900 ring-amber-200",
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
    "Army OB-GYN at Fort Cavazos faces a civil class-action over alleged secret filming of patients during intimate exams — a stark failure of institutional oversight, not a gap in the registry.",
    "Teachers, clergy, healthcare professionals, and a school administrator dominate this week’s cases — all people with built-in access and authority over children or vulnerable patients.",
    "Every case we tracked this week either omits prior registry status or appears to involve first-known allegations, underscoring that public registries do little to prevent initial harm.",
    "Several cases feature systems (military medicine, school districts, churches, youth sports) that had warning signs long before charges, reinforcing that true prevention lives in accountability and oversight, not maps of former offenders.",
  ];

  const civilActions = [
    {
      name: "Blaine McGraw",
      role: "OB-GYN, Carl R. Darnall Army Medical Center (Fort Cavazos / Fort Hood)",
      jurisdiction: "Bell County, TX (federal military hospital context)",
      stage: "Civil lawsuit filed",
      date: "Nov 11, 2025",
      summary: (
        <>
          A civil class-action lawsuit alleges that McGraw secretly recorded dozens of female patients during pelvic and
          breast exams at the Army hospital, using hidden cameras during intimate procedures. The hospital suspended him
          in October while Army CID investigates.{" "}
          <strong>Why we included this:</strong> the combination of suspension, detailed allegations, and a federal civil
          suit indicates significant credibility and institutional failure — yet there is no arrest, conviction, or
          registry entry to “warn” anyone. This is exactly the kind of abuse registries cannot prevent, but internal
          accountability systems could.
        </>
      ),
      registry: "Registry status not mentioned",
      sources: [
        {
          label: "CBS News coverage",
          href: "https://www.cbsnews.com/news/blaine-mcgraw-army-gynecologist-accused-of-taking-secret-videos-of-patients/",
        },
        {
          label: "NBC News / complaint details",
          href: "https://www.nbcnews.com/news/investigations/army-gynecologist-took-secret-videos-patients-intimate-exams-lawsuit-s-rcna242846",
        },
        {
          label: "The Guardian summary",
          href: "https://www.theguardian.com/us-news/2025/nov/11/army-doctor-lawsuit-videos-patients-gynecologist",
        },
      ],
      emoji: "🏥",
    },
  ];

  const newArrestsCharges = [
    {
      name: "William Caleb Elliott",
      role: "Former teacher & coach, Celina ISD (TX)",
      jurisdiction: "U.S. Attorney’s Office, Eastern District of Texas",
      stage: "Indicted",
      date: "Nov 14, 2025",
      summary: (
        <>
          A federal grand jury indicted Elliott on multiple counts of producing and attempting to produce child sexual
          abuse material involving students he coached and taught. The indictment alleges he secretly recorded minors in
          locker rooms and other school contexts. If convicted on the most serious counts, he faces a mandatory minimum
          of 15 years in prison.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "USAO–EDTX press release",
          href: "https://www.justice.gov/usao-edtx/pr/former-celina-teachercoach-charged-production-child-pornography-eastern-district-texas",
        },
        {
          label: "CBS Colorado roundup (context)",
          href: "https://www.cbsnews.com/colorado/news/colorado-ranch-view-middle-school-teacher-arrested-sexual-assault-child/",
        },
      ],
      emoji: "📚",
    },
    {
      name: "Jerome Younger",
      role: "Assistant principal, Detroit Public Schools",
      jurisdiction: "Macomb County, MI",
      stage: "Bound over for trial",
      date: "Nov 14–15, 2025",
      summary: (
        <>
          Younger, an assistant principal at a Detroit high school, was bound over for trial on charges including
          first- and second-degree criminal sexual conduct involving a 14-year-old. Local reporting notes GPS tether
          monitoring and a substantial bond as the case moves toward circuit court.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "ClickOnDetroit coverage",
          href: "https://www.clickondetroit.com/news/local/2025/11/15/detroit-assistant-principal-accused-of-sexually-assaulting-teen-bound-over/",
        },
        {
          label: "New Media Detroit recap",
          href: "https://newmediadetroit.com/assistant-principal-bound-over-to-circuit-court-on-criminal-sexual-conduct-charges-involving-minor/",
        },
      ],
      emoji: "🏫",
    },
    {
      name: "Donald Aaron Axtell",
      role: "Youth pastor, Excelsior Springs Baptist Church",
      jurisdiction: "Clay County, MO",
      stage: "Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          Prosecutors charged Axtell, 27, with statutory rape, statutory sodomy, and furnishing pornographic material to a
          minor in connection with alleged abuse of a teenage girl in his youth group. Coverage notes that some alleged
          conduct occurred during church-sponsored activities, with additional victims possible.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "KCTV5 local report",
          href: "https://www.kctv5.com/2025/11/14/excelsior-springs-youth-pastor-charged-with-statutory-rape-other-crimes/",
        },
        {
          label: "KMBC follow-up",
          href: "https://www.kmbc.com/article/excelsior-springs-youth-pastor-donald-aaron-axtell-charged/62660749",
        },
      ],
      emoji: "⛪",
    },
    {
      name: "Dr. Christopher David Olenek",
      role: "Physician, Vero Beach, Florida",
      jurisdiction: "Indian River County, FL",
      stage: "Arrested / Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          Olenek was arrested after multiple patients reported sexual battery during medical visits. Local reporting says
          at least eight women have come forward so far, alleging inappropriate touching during exams. Licensing and
          hospital-privilege reviews are underway.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "VeroNews coverage",
          href: "https://veronews.com/2025/11/14/vero-beach-doctor-charged-after-touching-job-trainee-inappropriately/",
        },
        {
          label: "WPTV coverage",
          href: "https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-sheriff-to-discuss-vero-beach-physicians-arrest",
        },
      ],
      emoji: "🩺",
    },
  ];

  const pleasConvictions = [
    {
      name: "Dr. Philip Taylor Sobash",
      role: "Physician, formerly practicing in Austin, TX",
      jurisdiction: "U.S. Attorney’s Office, Middle District of Tennessee",
      stage: "Guilty plea",
      date: "Nov 13, 2025",
      summary: (
        <>
          Sobash pleaded guilty in federal court to charges related to the exploitation of a minor and financing sex
          trafficking involving boys overseas. According to court filings, he admitted paying for abuse livestreams and
          directing specific acts. Sentencing is set for 2026.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "NewsChannel 5 Nashville",
          href: "https://www.newschannel5.com/news/former-doctor-exploited-tennessee-minor-admits-targeting-6-others-doj-says",
        },
        {
          label: "USAO–MDTN press release",
          href: "https://www.justice.gov/usao-mdtn/pr/texas-man-pleads-guilty-sexual-exploitation-minor",
        },
      ],
      emoji: "⚕️",
    },
    {
      name: "Aaron Thomas Carrado",
      role: "Gym owner & coach (“Strength in Christ”), Colorado",
      jurisdiction: "El Paso County, CO",
      stage: "Sentenced",
      date: "Nov 13, 2025",
      summary: (
        <>
          A Colorado judge sentenced Carrado to what local outlets describe as <em>76 years to life</em> in prison for
          serial sexual assaults on teen athletes he coached. Prosecutors said he used faith-based language, training
          environments, and power imbalances to groom and control victims.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "KKTV sentencing report",
          href: "https://www.kktv.com/2025/11/13/coach-found-guilty-sexual-assault-teens-strength-christ-gym-parker/",
        },
        {
          label: "CBS Colorado report",
          href: "https://www.cbsnews.com/colorado/news/colorado-personal-trainer-convicted-sexual-assault-child/",
        },
      ],
      emoji: "🏋️",
    },
    {
      name: "Jessica Bergmann",
      role: "Teacher & soccer coach, Washington Middle School (Aurora, IL)",
      jurisdiction: "DuPage County, IL",
      stage: "Charged",
      date: "Nov 8–10, 2025",
      summary: (
        <>
          Bergmann, 34, is charged with criminal sexual assault and aggravated criminal sexual abuse of a former student.
          Authorities say the alleged abuse began after she taught and coached him, and that neighbors raised concerns
          about the teen frequently visiting her home.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "Daily Herald coverage",
          href: "https://www.dailyherald.com/20251108/crime/teacher-soccer-coach-faces-sexual-assault-charges-involving-student-at-aurora-school/",
        },
        {
          label: "WKRC national pickup",
          href: "https://local12.com/news/nation-world/teacher-charged-extremely-disturbing-sexual-assault-former-student-reportedly-visited-her-home-jessica-bergmann-aurora-illinois-wheaton-police",
        },
      ],
      emoji: "⚽",
    },
    {
      name: "Teresa Whalin",
      role: "Middle school teacher, Ranch View Middle School (CO)",
      jurisdiction: "Douglas County, CO",
      stage: "Arrested / Charged",
      date: "Nov 12–13, 2025",
      summary: (
        <>
          Whalin, 28, was arrested on suspicion of sexual assault on a child by one in a position of trust, internet
          exploitation of a child, and stalking. Investigators say she admitted to a year-long sexual relationship with a
          student and to stalking behavior after the student tried to end contact.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "Douglas County Sheriff’s Office release",
          href: "https://dcsheriff.net/ranch-view-middle-school-teacher-arrested-for-sexual-assault-on-a-child-internet-exploitation-of-a-child-and-stalking/",
        },
        {
          label: "CBS Colorado report",
          href: "https://www.cbsnews.com/colorado/news/colorado-ranch-view-middle-school-teacher-arrested-sexual-assault-child/",
        },
      ],
      emoji: "📘",
    },
    {
      name: "Matthew McGinley",
      role: "Former worship pastor & teacher, Northern Colorado Christian school",
      jurisdiction: "Fort Collins, CO",
      stage: "Arrested / Charged",
      date: "Nov 14, 2025",
      summary: (
        <>
          McGinley, 30, was arrested and charged with felony sexual assault of a minor after confessing to a past sexual
          relationship with a student he taught at a prominent Christian school. Coverage notes that church leaders
          contacted police after his disclosure and terminated him from his worship-pastor role.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "The Christian Post report",
          href: "https://www.christianpost.com/news/ex-worship-pastor-is-charged-after-confessing-to-sex-with-student.html",
        },
        {
          label: "CBS Colorado link (via Fort Collins discussion)",
          href: "https://www.cbsnews.com/colorado/news/matthew-mcginley-sexual-assault-fort-collins-pastor-teacher/",
        },
      ],
      emoji: "🎵",
    },
  ];

  const watchlist = [
    "Fort Cavazos OB-GYN (McGraw): watch for any criminal referrals, CID findings, and Army policy responses to the alleged secret recordings.",
    "Celina ISD case (Elliott): monitor for superseding indictments, victim impact filings, and school-district transparency on prior complaints.",
    "Detroit AP case (Younger): track trial schedule, plea negotiations, and Detroit Public Schools’ response and notifications to families.",
    "Vero Beach physician (Olenek): follow licensing-board actions and additional patient reports as the investigation continues.",
    "Colorado cluster (Whalin, Bergmann, McGinley, Carrado): monitor for additional victims, civil suits, and institutional accountability from schools and churches.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly Accountability Watch roundup of arrests, charges, pleas, convictions, sentencings, and civil suits involving people in positions of trust or household authority, with registry-status context."
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
            Civil and criminal cases involving people in positions of trust and authority. All defendants are presumed
            innocent unless and until proven guilty in a court of law. Registry status reflects what’s publicly reported
            in official documents or mainstream coverage; absence of mention is not definitive. Civil allegations are
            reported from complaints and news coverage and may be disputed in court.
          </p>
        </div>
      </header>
    </main>
  );
}