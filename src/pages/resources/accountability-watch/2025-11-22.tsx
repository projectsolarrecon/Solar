import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

/** =========================
 *  Teaser highlights (TOP-LEVEL EXPORT)
 *  ========================= */
export const teaserHighlights = [
  "Army OB-GYN sued for allegedly secretly recording patients during intimate exams at Fort Cavazos/Fort Hood.",
  "Former Houston police captain federally indicted on child exploitation and enticement charges.",
  "Member of the extremist “764” network federally charged with sexual exploitation of minors.",
  "Trump-pardoned Jan. 6 participant arrested on serious child-sex-abuse charges in Florida.",
  "House Ethics Committee opens investigative subcommittee into Rep. Cory Mills over alleged misconduct.",
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
    "Civil lawsuit filed": "bg-sky-50 text-sky-900 ring-sky-200",
    "Arrested / Charged": "bg-rose-50 text-rose-900 ring-rose-200",
    Indicted: "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Investigative subcommittee opened": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    Convicted: "bg-violet-50 text-violet-900 ring-violet-200",
    Sentenced: "bg-emerald-50 text-emerald-900 ring-emerald-200",
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
  whyIncluded,
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
  whyIncluded?: React.ReactNode;
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
        {whyIncluded && (
          <div className="mt-2 text-xs text-slate-700">
            <span className="font-semibold">Why included: </span>
            {whyIncluded}
          </div>
        )}
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
 *  Page (Week of Nov 16–22, 2025)
 *  ========================= */
export default function AccountabilityWatch_2025_11_22() {
  const pageTitle = "Accountability Watch — Week of Nov 16–22, 2025 | SOLAR";

  const atAGlance: string[] = [
    "A former U.S. embassy employee was convicted of sexually abusing minors overseas — showing how diplomatic housing and institutional roles, not registries, create access.",
    "A former Houston police captain was federally indicted on child-exploitation and enticement counts.",
    "A member of the extremist “764” online network was federally charged with sexual exploitation of children and cyberstalking.",
    "The House Ethics Committee opened an investigative subcommittee into Rep. Cory Mills over alleged sexual misconduct and dating violence.",
    "A Trump-pardoned Jan. 6 participant was arrested on serious child-sex-abuse charges — illustrating that predation is not confined to people on registries.",
    "Across all confirmed cases this week, no defendant had a prior registration status noted — continuing the pattern that registries do not prevent first-time offending.",
  ];

  const civilActions = [
    {
      name: "Blaine McGraw",
      role: "OB-GYN, Carl R. Darnall Army Medical Center (Fort Cavazos / Fort Hood, TX)",
      jurisdiction: "Federal civil (Bell County, TX)",
      stage: "Civil lawsuit filed",
      date: "Nov 10–11, 2025",
      summary: (
        <>
          A civil class-action complaint alleges McGraw secretly recorded patients during pelvic and breast exams and
          engaged in inappropriate contact under the guise of medical care. The hospital suspended him on{" "}
          <em>Oct 17</em>; Army CID has opened a criminal investigation.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "CBS News coverage",
          href: "https://www.cbsnews.com/news/blaine-mcgraw-army-gynecologist-accused-of-taking-secret-videos-of-patients/",
        },
        {
          label: "The Guardian report",
          href: "https://www.theguardian.com/us-news/2025/nov/11/army-doctor-lawsuit-videos-patients-gynecologist",
        },
      ] as SourceLink[],
      emoji: "🏥",
      whyIncluded: (
        <>
          A classic institutional-accountability case: alleged harm inside a closed military-medical system where{" "}
          <em>no public registry lookup could have warned anyone</em>. Real safety depends on internal oversight and
          patient protections, not stranger-danger lists.
        </>
      ),
    },
  ];

  const politicalMisconduct = [
    {
      name: "Rep. Cory Mills",
      role: "Member of the U.S. House of Representatives (Florida)",
      jurisdiction: "U.S. House Committee on Ethics",
      stage: "Investigative subcommittee opened",
      date: "Nov 19–20, 2025",
      summary: (
        <>
          The House Ethics Committee unanimously formed an investigative subcommittee to examine allegations that Rep.
          Mills engaged in sexual misconduct and dating violence, along with claims concerning undisclosed gifts,
          misuse of official resources, and possible campaign-finance violations. The action follows an October ruling
          in Florida granting a protective order to an ex-girlfriend after a judge found “reasonable cause” to fear
          imminent danger.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "House Ethics Committee press release",
          href: "https://ethics.house.gov/press-releases/statement-of-the-chairman-and-ranking-member-of-the-committee-on-ethics-regarding-representative-cory-mills-2/",
        },
        {
          label: "AP News coverage",
          href: "https://apnews.com/article/cory-mills-censure-ethics-committee-nancy-macy-787891b9b1968701d684015b8ab256aa",
        },
        {
          label: "Politico – protective order",
          href: "https://www.politico.com/news/2025/10/14/cory-mills-restraining-order-florida-00608307",
        },
        {
          label: "CBS News – scope of investigation",
          href: "https://www.cbsnews.com/news/nancy-mace-cory-mills-censure-house-ethics-committee/",
        },
      ] as SourceLink[],
      emoji: "🏛️",
      whyIncluded: (
        <>
          Mills is a sitting member of Congress with national influence and legislative power. Allegations of sexual
          misconduct and dating violence involving a federal lawmaker show why public registries have no predictive or
          preventive value here: people with institutional status and insulation fall entirely outside the registry’s
          scope until after harm occurs. This case underscores the need for real oversight inside power structures, not
          reliance on public lists.
        </>
      ),
    },
  ];

  const newArrestsCharges = [
    {
      name: "Daryn Edwards",
      role: "Former Houston Police Captain",
      jurisdiction: "U.S. Attorney, Southern District of Texas",
      stage: "Indicted",
      date: "Nov 18, 2025",
      summary: (
        <>
          Federally charged with coercion and enticement of a minor, attempted exploitation, and possession of child
          sexual abuse material. Prosecutors say he used online messages to target a person he believed was a minor and
          was taken into custody at the courthouse.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ SDTX press release",
          href: "https://www.justice.gov/usao-sdtx/pr/former-houston-police-captain-indicted-child-exploitation-offenses",
        },
      ] as SourceLink[],
      emoji: "👮",
    },
    {
      name: "Erik Lee Madison",
      role: "Alleged member of extremist network “764”",
      jurisdiction: "U.S. Attorney, District of Maryland",
      stage: "Indicted",
      date: "Nov 20, 2025",
      summary: (
        <>
          Indicted on multiple counts of sexual exploitation of a child, coercion and enticement, and cyberstalking.
          Authorities say he was part of an online extremist network known as <em>“764”</em> that targeted minors with
          threats and demands for explicit images.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ Maryland press release",
          href: "https://www.justice.gov/usao-md/pr/violent-extremist-network-764-member-facing-federal-indictment-sexual-exploitation-coercion",
        },
      ] as SourceLink[],
      emoji: "🕸️",
    },
    {
      name: "Andrew Paul Johnson",
      role: "Trump-pardoned Jan. 6 participant",
      jurisdiction: "Florida (extradited from Tennessee)",
      stage: "Arrested / Charged",
      date: "Reported Nov 19, 2025",
      summary: (
        <>
          Arrested on multiple Florida counts tied to alleged sexual abuse of minors, including offenses against
          children under 12 and teens. Reporting on the probable-cause affidavit says he referenced his presidential
          pardon and promised money to try to keep a minor from disclosing the conduct.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "The Guardian coverage",
          href: "https://www.theguardian.com/us-news/2025/nov/19/jan-6-rioter-trump-pardon-child-sexual-abuse-charges",
        },
      ] as SourceLink[],
      emoji: "🇺🇸",
      whyIncluded: (
        <>
          Not a traditional teacher/coach/clergy case, but highly relevant: someone with political notoriety and a
          presidential pardon allegedly exploiting that status to harm a child. It reinforces the RECON point that
          serious harm comes from people <em>outside</em> the registry population too, making selective public registries
          a form of safety theater.
        </>
      ),
    },
  ];

  const pleasConvictions = [
    {
      name: "Fode Sitafa Mara",
      role: "Former American Embassy employee (Burkina Faso)",
      jurisdiction: "U.S. District Court, District of Maryland",
      stage: "Convicted",
      date: "Oct 31, 2025 (reported through November)",
      summary: (
        <>
          A federal jury convicted Mara of multiple counts, including aggravated sexual abuse of minors and coercion and
          enticement. The conduct occurred at U.S. Embassy–leased housing abroad, where he had access to children
          through his role connected to the diplomatic mission.
        </>
      ),
      registry: "No prior registration noted",
      sources: [
        {
          label: "DOJ Maryland conviction release",
          href: "https://www.justice.gov/usao-md/pr/former-american-embassy-employee-convicted-sexually-abusing-minors-burkina-faso",
        },
      ] as SourceLink[],
      emoji: "🌍",
      whyIncluded: (
        <>
          This is an embassy-housing, U.S.-government employment case: risk created by official placement and power, not
          by a stranger in a neighborhood. It shows again that registries do almost nothing to regulate the specific
          contexts where abuse actually happens.
        </>
      ),
    },
  ];

  const watchlist: string[] = [
    "McGraw (Army OB-GYN): watch for any public charging decisions, DoD/Army licensing actions, and broader reforms to military medical oversight.",
    "Mills (U.S. House): track Ethics Committee findings, potential sanctions, and whether patterns of abuse-of-power are substantiated.",
    "Edwards (Houston PD): follow detention/bond decisions and Houston PD’s internal accountability response.",
    "Madison (“764” network): track additional network members or related cases as digital forensics proceed.",
    "Johnson (Jan. 6): monitor for additional victims and how courts treat the use of a presidential pardon in grooming narratives.",
    "Mara (embassy employee): sentencing in federal court and any State Department or USAID reforms around safeguarding children in overseas posts.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, convictions, civil actions, and political misconduct involving people in positions of trust, influence, or institutional authority, with registry-status context."
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
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Nov 16–22, 2025</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Weekly roundup of arrests, charges, convictions, civil actions, and institutional or political misconduct
            involving people in positions of trust, influence, or authority — plus cases that show how risk extends far
            beyond the registry.
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
            All items are drawn from official filings or credible mainstream coverage. Allegations remain allegations
            unless and until proven in court. We highlight registry status where it&apos;s mentioned and explicitly note
            when it isn&apos;t.
          </p>
        </div>

        <Section title="At a Glance" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">
            {atAGlance.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people <strong>not previously registered</strong>{" "}
            — evidence that real prevention requires confronting institutional access and power, not just expanding public
            registries.
          </PullQuote>
        </Section>

        <Section title="Civil / Administrative Actions" icon={<Scale className="h-5 w-5 text-sky-500" />}>
          <div className="grid gap-3">
            {civilActions.map((c, i) => (
              <CaseRow key={i} {...c} />
            ))}
          </div>
        </Section>

        <Section
          title="Institutional & Political Misconduct"
          icon={<Scale className="h-5 w-5 text-indigo-500" />}
        >
          <div className="grid gap-3">
            {politicalMisconduct.map((c, i) => (
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
          <div className="grid gap-3">
            {pleasConvictions.map((c, i) => (
              <CaseRow key={i} {...c} />
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
            definitive. These summaries are for public-interest accountability and policy discussion, not harassment or
            vigilantism.
          </p>
        </div>
      </div>
    </main>
  );
}