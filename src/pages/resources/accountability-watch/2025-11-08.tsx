import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Shield, Scale, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export default function AccountabilityWatch_2025_11_08() {
  const pageTitle = "Accountability Watch — Two-Week Update (Oct 26–Nov 8, 2025) | SOLAR";

  const atAGlance = [
    "Two-week edition covering late October and early November 2025.",
    "Educators and youth coaches dominated this period, with multiple arrests for sexual assault and exploitation.",
    "Two Texas law enforcement officers (a sheriff’s deputy and a police officer) were arrested after an ICAC cyber-tip investigation.",
    "A Colorado worship pastor and former teacher was charged with sexually assaulting a minor student.",
    "A Mississippi youth pastor received only house arrest for child sexual abuse — prosecutors called the sentence ‘a slap in the face.’",
    "Texas and Illinois educators arrested on CSAM and assault charges highlight that the majority of new offenses involve individuals not previously registered.",
  ];

  const cases = [
    {
      name: "Jessica Bergmann",
      role: "Middle-school teacher, Washington MS (Aurora IL)",
      jurisdiction: "Illinois / DuPage County",
      stage: "Arrested / Charged",
      date: "Nov 7 2025",
      summary:
        "Charged with felony criminal sexual assault and aggravated sexual abuse of a former student while in a position of authority.",
      sources: [
        {
          label: "NBC Chicago",
          href: "https://www.nbcchicago.com/news/local/aurora-teacher-arrested-charged-sexual-assault-former-student/3900419/",
        },
      ],
      registry: "No prior registration noted",
      emoji: "🏫",
    },
    {
      name: "Matthew McGinley",
      role: "Former worship pastor & teacher (Fort Collins CO)",
      jurisdiction: "Colorado / Larimer County",
      stage: "Arrested / Charged",
      date: "Nov 2025",
      summary:
        "Allegedly sexually assaulted a minor student while in a position of trust; confessed to church leaders before arrest.",
      sources: [
        {
          label: "The Coloradoan",
          href: "https://www.coloradoan.com/story/news/2025/11/03/former-fort-collins-pastor-charged-with-sexual-assault-on-child/76344123007/",
        },
      ],
      registry: "No prior registration noted",
      emoji: "⛪",
    },
    {
      name: "Skylar Laza",
      role: "Sheriff’s Deputy (Houston County TX)",
      jurisdiction: "Texas / Eastern District",
      stage: "Arrested / Indicted (Federal)",
      date: "Nov 5–6 2025",
      summary:
        "Arrested after an NCMEC cyber-tip; charged with aggravated sexual assault of a child and federal CSAM-production counts.",
      sources: [
        {
          label: "KETK News",
          href: "https://www.ketk.com/news/local-news/east-texas-deputy-arrested-for-child-sex-crimes/",
        },
      ],
      registry: "Registry status not mentioned",
      emoji: "🚓",
    },
    {
      name: "Kenan Laza",
      role: "Police Officer (Gladewater TX)",
      jurisdiction: "Texas",
      stage: "Arrested / Charged",
      date: "Nov 6 2025",
      summary:
        "Charged with indecency with a child by exposure; connected to the Houston County deputy case via ICAC task-force investigation.",
      sources: [
        {
          label: "CBS 19 Tyler",
          href: "https://www.cbs19.tv/article/news/local/gladewater-officer-arrested-child-indecency/501-58fa33cd-7a64-4df0-ae26-95ac9011a5b2",
        },
      ],
      registry: "Registry status not mentioned",
      emoji: "🚔",
    },
    {
      name: "Chad Beery",
      role: "Teacher (Mesquite Academy, Mesquite ISD TX)",
      jurisdiction: "Texas / Rockwall County",
      stage: "Arrested / Charged",
      date: "Nov 2025",
      summary:
        "Arrested on two felony child-pornography charges; district suspended him without pay pending trial.",
      sources: [
        {
          label: "WFAA Dallas",
          href: "https://www.wfaa.com/article/news/crime/mesquite-isd-teacher-child-pornography-arrest/287-c3d7b5f4-bbb7-4d26-bbe9-0c9e9b7a67cb",
        },
      ],
      registry: "No prior registration noted",
      emoji: "📚",
    },
    {
      name: "Eric Courts",
      role: "Youth basketball coach (Adidas Legacy Program, Chicago)",
      jurisdiction: "Illinois / Cook County",
      stage: "Arrested / Charged",
      date: "Nov 5 2025",
      summary:
        "Charged with solicitation and possession of CSAM after coercing a 17-year-old player to send sexual videos in exchange for gear.",
      sources: [
        {
          label: "ABC7 Chicago",
          href: "https://abc7chicago.com/chicago-basketball-coach-charged-child-pornography-csam/15209176/",
        },
      ],
      registry: "No prior registration noted",
      emoji: "🏀",
    },
    {
      name: "Lindsey Whiteside",
      role: "Former Youth Pastor & School Coach (Hernando MS)",
      jurisdiction: "Mississippi / DeSoto County",
      stage: "Pleaded Guilty / Sentenced",
      date: "Oct 13 2025",
      summary:
        "Pleaded guilty to sexually abusing a minor girl; sentenced to 3 years house arrest + 7 years probation despite prosecutor seeking 30.",
      sources: [
        {
          label: "WREG Memphis",
          href: "https://wreg.com/news/mid-south/ms-youth-pastor-sentence-house-arrest-sex-abuse/",
        },
      ],
      registry: "Previously registered / must register under plea",
      emoji: "⚖️",
    },
  ];

  const watchlist = [
    "Monitor Jessica Bergmann’s Dec 1 court appearance and potential plea.",
    "Track federal proceedings for deputies Skylar and Kenan Laza; possible new victims or charges.",
    "Follow administrative actions (license suspensions, TEA review) for Texas teachers arrested on CSAM offenses.",
    "Observe community and institutional responses to clergy and coach cases as sentencing moves forward.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Two-week roundup of arrests, charges, pleas, and sentencings involving people in positions of trust — educators, clergy, officers, and coaches — with registry-status context."
        />
      </Helmet>

      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
              🧭 Accountability Watch • Two-Week Edition
            </span>
            <span className="hidden text-xs text-slate-200 sm:block">
              Verified sources • Registry context
            </span>
          </div>
          <h1 className="text-2xl font-bold sm:text-3xl">
            Oct 26 – Nov 8, 2025
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Documenting credible reports of sexual offenses involving authority,
            community, or household-trust figures.
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />
          <ShareBar />
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-16">
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <FileText className="h-5 w-5 text-slate-500" />
            At a Glance
          </h2>
          <ul className="list-disc pl-5 text-sm">
            {atAGlance.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Shield className="h-5 w-5 text-rose-500" />
            New Cases and Updates
          </h2>
          <div className="space-y-4 text-sm">
            {cases.map((c, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
              >
                <div className="flex flex-wrap items-center gap-x-2 text-slate-700">
                  <span className="font-semibold text-slate-900">
                    {c.emoji} {c.name}
                  </span>
                  <span>— {c.role}</span>
                  <span className="ml-auto text-xs">{c.date}</span>
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  <span className="font-medium">Jurisdiction:</span>{" "}
                  {c.jurisdiction} •{" "}
                  <span className="font-medium">Stage:</span> {c.stage} •{" "}
                  <span className="font-medium">Registry:</span> {c.registry}
                </div>
                <p className="mt-1 text-slate-800">{c.summary}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.sources.map((s, j) => (
                    <a
                      key={j}
                      href={s.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center rounded-full border px-2 py-1 text-xs hover:bg-slate-100"
                    >
                      🔗 {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Scale className="h-5 w-5 text-amber-500" />
            Watchlist
          </h2>
          <ul className="list-disc pl-5 text-sm">
            {watchlist.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty
            in a court of law. Registry status reflects what’s publicly reported
            in official documents or mainstream coverage; absence of mention is
            not definitive.
          </p>
        </div>
      </div>
    </main>
  );
}