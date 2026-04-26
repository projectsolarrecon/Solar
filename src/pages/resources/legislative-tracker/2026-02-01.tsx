"use client";

import React, { useMemo, useState } from "react";

type Source = {
  label: string;
  href: string;
};

type ChipGroup = {
  movement: string[];
  impact: string[];
  risk: string[];
};

type Development = {
  id: string;
  group: string;
  status: string;
  title: string;
  jurisdiction: string;
  date: string;
  summary: string;
  whatChanged: React.ReactNode;
  whyItMatters: React.ReactNode;
  solarAnalysis: React.ReactNode;
  whatToWatch: React.ReactNode;
  chips: ChipGroup;
  tags: string[];
  sources: Source[];
  action?: {
    label: string;
    href: string;
    copy: string;
  };
};

type ActionItem = {
  title: string;
  why: string;
  href: string;
  linkLabel: string;
  copy: string;
};

type WatchItem = {
  title: string;
  posture: string;
  why: string;
  next: string;
  href?: string;
};

const pageMeta = {
  month: "January 2026",
  dateWindow: "January 1–31, 2026",
  title: "January 2026 Legislative Tracker",
  dek:
    "January’s registry-policy activity was dominated by restriction expansion, compliance-burden proposals, and implementation changes, with one major online-speech case keeping constitutional questions alive.",
};

const groups = [
  "Restriction Expansion / Compliance Burden",
  "Courts & Rights",
  "Relief / Termination",
  "Agencies / Implementation",
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "red" | "amber" | "blue" | "green" | "purple";
}) {
  const tones = {
    slate: "border-slate-300 bg-slate-100 text-slate-700",
    red: "border-red-200 bg-red-50 text-red-700",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    green: "border-green-200 bg-green-50 text-green-700",
    purple: "border-purple-200 bg-purple-50 text-purple-700",
  };

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 md:p-7">
      {eyebrow ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function SourcePill({ source }: { source: Source }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
    >
      {source.label}
    </a>
  );
}

function CopyButton({ text, label = "Copy message" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

function ShareBar() {
  const shareText = `${pageMeta.title} — The SOLAR Project`;

  async function handleShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      await navigator.share({
        title: pageMeta.title,
        text: shareText,
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-white"
      >
        Print
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
      >
        Share
      </button>
      <a
        href="#actions"
        className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
      >
        Latest actions
      </a>
    </div>
  );
}

function StatusCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-650">{detail}</p>
    </div>
  );
}

function AnalysisChips({ chips }: { chips: ChipGroup }) {
  const rows = [
    { label: "Movement", items: chips.movement },
    { label: "Impact", items: chips.impact },
    { label: "Risk / opportunity", items: chips.risk },
  ];

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      {rows.map((row) => (
        <div key={row.label}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {row.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {row.items.map((item) => (
              <Badge
                key={item}
                tone={
                  item.includes("Negative")
                    ? "red"
                    : item.includes("Positive")
                      ? "green"
                      : item.includes("Mixed") || item.includes("Unclear")
                        ? "amber"
                        : "slate"
                }
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DevelopmentCard({ development }: { development: Development }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="slate">{development.status}</Badge>
            <Badge tone="blue">{development.jurisdiction}</Badge>
            <Badge tone="purple">{development.date}</Badge>
          </div>
          <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 md:text-2xl">
            {development.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-650">{development.summary}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-black text-slate-950">What changed</h4>
          <div className="mt-2 text-sm leading-6 text-slate-700">{development.whatChanged}</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-sm font-black text-slate-950">Why it matters</h4>
          <div className="mt-2 text-sm leading-6 text-slate-700">{development.whyItMatters}</div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-black text-slate-950">SOLAR analysis</h4>
          <div className="mt-2 text-sm leading-6 text-slate-700">{development.solarAnalysis}</div>
          <div className="mt-4">
            <AnalysisChips chips={development.chips} />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-sm font-black text-slate-950">What to watch</h4>
          <div className="mt-2 text-sm leading-6 text-slate-700">{development.whatToWatch}</div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {development.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {development.action ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-black text-amber-950">Action angle</p>
          <p className="mt-2 text-sm leading-6 text-amber-950">{development.action.copy}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <CopyButton text={development.action.copy} />
            <a
              href={development.action.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-900 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-amber-800"
            >
              {development.action.label}
            </a>
          </div>
        </div>
      ) : null}

      <div className="mt-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Sources</p>
        <div className="flex flex-wrap gap-2">
          {development.sources.map((source) => (
            <SourcePill key={`${development.id}-${source.href}-${source.label}`} source={source} />
          ))}
        </div>
      </div>
    </article>
  );
}
const developments: Development[] = [
  {
    id: "florida-sb-212-hb-45",
    group: "Restriction Expansion / Compliance Burden",
    status: "Committee movement",
    title: "Florida SB 212 / HB 45 — residency, public-place, notice, arrest, and supervision expansion package",
    jurisdiction: "Florida",
    date: "Jan. 13–20",
    summary:
      "Florida advanced a broad restriction package aimed at people labeled sexual offenders or predators, with direct effects on housing, movement, work, notice duties, supervision, and arrest exposure.",
    whatChanged: (
      <p>
        <a
          href="https://www.flsenate.gov/Session/Bill/2026/212"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          Florida SB 212
        </a>{" "}
        and{" "}
        <a
          href="https://www.flsenate.gov/Session/Bill/2026/45"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          HB 45
        </a>{" "}
        would add public swimming pools or public bathing places to covered geography in some
        circumstances, broaden proximity and loitering exposure from 300 feet to 500 feet in certain
        child-congregation contexts, create notice duties involving schools or child care facilities,
        require registry checks before certain public employment or appointment decisions, authorize
        warrantless arrest for specified violations, and add or revise supervision conditions.
      </p>
    ),
    whyItMatters: (
      <p>
        The package would make ordinary housing, family, school, pool, child care, public-space,
        work, volunteer, and supervision decisions more legally fragile. It expands both the map of
        exclusion and the consequences of alleged technical noncompliance.
      </p>
    ),
    solarAnalysis: (
      <p>
        From the registrant-family perspective, this is direct negative movement. The bill relies on
        broad geographic and status-based restrictions rather than individualized risk, increasing
        the chance that stability itself becomes harder to maintain. Families could face more forced
        moves, fewer daily-life options, and higher arrest risk without evidence that wider exclusion
        zones produce real prevention.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether the public swimming pool and public bathing place provisions remain, whether
        parent or family exceptions are preserved, whether any provisions apply retroactively, how
        warrantless-arrest authority is framed, and whether litigation raises banishment,
        vagueness, due-process, liberty, or retroactivity claims.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Compliance burden",
        "Family-stability impact",
        "Punishment expansion",
        "Supervision burden",
      ],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk", "Litigation risk"],
    },
    tags: ["Residency restrictions", "Public-place restrictions", "Notice duties", "Arrest authority"],
    sources: [
      { label: "Florida SB 212", href: "https://www.flsenate.gov/Session/Bill/2026/212" },
      { label: "Florida HB 45", href: "https://www.flsenate.gov/Session/Bill/2026/45" },
      {
        label: "Florida House bill detail for CS/CS/CS/SB 212",
        href: "https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82720",
      },
    ],
    action: {
      label: "Find Florida lawmakers",
      href: "https://www.flsenate.gov/Senators/Find",
      copy:
        "Please reject broad registry-based exclusion zones and warrantless-arrest expansion unless lawmakers can show individualized risk evidence, clear family exceptions, and data proving improved safety rather than more homelessness and technical violations.",
    },
  },
  {
    id: "sc-h-4683",
    group: "Restriction Expansion / Compliance Burden",
    status: "Introduced",
    title: "South Carolina H. 4683 — Sex Offender Child Protection Act introduced",
    jurisdiction: "South Carolina",
    date: "Jan. 13",
    summary:
      "South Carolina introduced a bill expanding residence exclusions, employment and ownership limits, public-notification mechanisms, and agency notice duties for covered registrants.",
    whatChanged: (
      <p>
        <a
          href="https://www.scstatehouse.gov/sess126_2025-2026/bills/4683.htm"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          South Carolina H. 4683
        </a>{" "}
        would revise the definition of “children’s recreational facility,” add offenses that trigger
        residence exclusions near schools, daycare centers, recreational facilities, parks, or public
        playgrounds, restrict certain registrants from owning, operating, or being employed by
        businesses or organizations serving minors or allowing unsupervised access to minors, and
        require SLED to notify registrants of the act’s provisions.
      </p>
    ),
    whyItMatters: (
      <p>
        Housing and employment are two of the most important stabilizing factors after conviction.
        A bill that narrows both at once can deepen instability while increasing public exposure and
        family stress.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is negative movement for registrants and families because it expands status-based
        exclusion without requiring individualized risk findings. The employment and ownership
        pieces are especially important: public safety is not strengthened when lawful work,
        business ownership, and stable housing are treated as threats by default.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether the bill advances out of Judiciary, whether grandfather clauses or family
        exceptions remain, how “children’s recreational facility” is defined, and whether lawmakers
        evaluate housing displacement, homelessness, and employment consequences before expanding
        exclusion zones.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Employment barrier",
        "Public notification",
        "Family-stability impact",
        "Punishment expansion",
      ],
      risk: ["Advocacy opening", "Enforcement risk", "Implementation risk", "Watch closely"],
    },
    tags: ["Housing", "Employment", "Public notification", "School bus stop information"],
    sources: [
      {
        label: "South Carolina H. 4683",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/4683.htm",
      },
      {
        label: "Municipal Association of South Carolina bill summary",
        href: "https://www.masc.sc/legislative-bill/h4683-enacts-sex-offender-child-protection-act",
      },
    ],
    action: {
      label: "Find South Carolina legislators",
      href: "https://www.scstatehouse.gov/legislatorssearch.php",
      copy:
        "Please oppose broad residence and employment exclusions unless they are supported by individualized risk evidence, clear exemptions, and analysis of housing, employment, and family-stability harms.",
    },
  },
  {
    id: "wv-sb-500",
    group: "Restriction Expansion / Compliance Burden",
    status: "Introduced",
    title: "West Virginia SB 500 — 1,000-foot residency restriction bill introduced",
    jurisdiction: "West Virginia",
    date: "Jan. 19",
    summary:
      "West Virginia introduced a statewide 1,000-foot residence ban tied to schools, parks, and playgrounds, with retroactive and prospective language.",
    whatChanged: (
      <p>
        <a
          href="https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb500+intr.htm&i=500&sesstype=RS&yr=2026"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          West Virginia SB 500
        </a>{" "}
        would prohibit people required to register from residing within 1,000 feet of a school,
        park, or playground. Its retroactivity and prospectivity language raises heightened concern
        because it could affect people whose convictions or housing arrangements predate the bill.
      </p>
    ),
    whyItMatters: (
      <p>
        Broad distance-based housing rules can operate like banishment, especially where exclusion
        zones overlap or where affordable housing is already scarce. Retroactive application makes
        the practical and constitutional stakes much higher.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is direct negative movement. It treats geography as a substitute for individualized
        assessment and risks pushing people away from family support, employment, treatment, and
        stable housing. For families, the harm is not abstract: a compliant home could become
        unavailable because a map changed.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether Senate Judiciary narrows the bill, whether retroactivity remains, whether
        existing residences or family homes are protected, whether shelter access is addressed, and
        whether litigation follows if the bill is enacted.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Family-stability impact",
        "Punishment expansion",
        "Due-process concern",
        "Retroactivity concern",
      ],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk", "Litigation risk"],
    },
    tags: ["Residency restrictions", "Retroactivity", "Housing stability"],
    sources: [
      {
        label: "West Virginia SB 500 bill text",
        href: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb500+intr.htm&i=500&sesstype=RS&yr=2026",
      },
    ],
    action: {
      label: "West Virginia Senate roster",
      href: "https://www.wvlegislature.gov/Senate1/roster.cfm",
      copy:
        "Please reject retroactive residency exclusion zones. Stable housing and family support reduce risk; broad 1,000-foot bans can create homelessness, family separation, and technical violations without individualized evidence.",
    },
  },
  {
    id: "wv-hb-4135-hb-4138",
    group: "Restriction Expansion / Compliance Burden",
    status: "Introduced",
    title: "West Virginia HB 4135 / HB 4138 — online identifiers, vehicle information, and offense-trigger expansion",
    jurisdiction: "West Virginia",
    date: "Jan. 14–27",
    summary:
      "West Virginia introduced bills expanding registry reporting duties and clarifying or expanding registration-triggering offenses, including online identifiers, mobile application accounts, ATV/UTV information, sexual extortion, and retroactive language.",
    whatChanged: (
      <p>
        <a
          href="https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          West Virginia HB 4135
        </a>{" "}
        would require registrants to provide online identifiers associated with internet accounts
        and mobile application accounts, and to report information about ATVs or UTVs they operate.{" "}
        <a
          href="https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4138+intr.htm&i=4138&sesstype=RS&yr=2026"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          HB 4138
        </a>{" "}
        would clarify that sexual extortion and aggravated sexual extortion require registration and
        that a repealed spousal sexual-assault offense remains registerable, with January committee
        context describing retroactive registration language.
      </p>
    ),
    whyItMatters: (
      <p>
        Online-identifier and vehicle or equipment reporting rules can create technical-compliance
        traps. Retroactive offense-trigger language raises “moving the finish line” concerns for
        people whose convictions predate the bill.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is negative movement because it expands both what must be reported and who may be
        required to register. The online-account language is especially sensitive: digital life is
        not optional for work, family communication, services, education, and civic participation.
        Reporting systems need narrow scope, safe harbors, and law-enforcement-only treatment.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether online and mobile identifier reporting is public or law-enforcement-only,
        whether safe-harbor timing rules are added for account updates, whether ATV/UTV language is
        narrowed, whether retroactivity remains in HB 4138, and whether courts or agencies provide
        guidance if enacted.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Online identifiers",
        "Punishment expansion",
        "Due-process concern",
        "Retroactivity concern",
      ],
      risk: ["Watch closely", "Advocacy opening", "Litigation risk", "Clarification needed"],
    },
    tags: ["Online identifiers", "Mobile apps", "Vehicle reporting", "Retroactivity"],
    sources: [
      {
        label: "West Virginia HB 4135 bill text",
        href: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026",
      },
      {
        label: "West Virginia HB 4138 bill text",
        href: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4138+intr.htm&i=4138&sesstype=RS&yr=2026",
      },
      {
        label: "West Virginia House Judiciary update",
        href: "https://home.wvlegislature.gov/house-judiciary-advances-bills-on-sexual-extortion-sentencing-protections-for-vulnerable-adults/",
      },
    ],
    action: {
      label: "West Virginia House roster",
      href: "https://www.wvlegislature.gov/House/roster.cfm",
      copy:
        "Please narrow online and mobile-account reporting to law-enforcement-only use, add safe-harbor timing rules for technical updates, avoid public disclosure of identifiers, and remove retroactive registration expansion.",
    },
  },
  {
    id: "md-hb-287",
    group: "Restriction Expansion / Compliance Burden",
    status: "Introduced",
    title: "Maryland HB 287 — lifetime sexual-offender supervision conditions and discharge process",
    jurisdiction: "Maryland",
    date: "Jan. 14",
    summary:
      "Maryland introduced a bill changing lifetime sexual-offender supervision conditions, management-team reporting, hearings, victim notice, and discharge-petition provisions.",
    whatChanged: (
      <p>
        <a
          href="https://mgaleg.maryland.gov/2026RS/bills/hb/hb0287f.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          Maryland HB 287
        </a>{" "}
        would alter the conditions and administration of lifetime sexual-offender supervision,
        including potential conditions such as GPS monitoring, proximity limits, restrictions on
        employment or activities involving minors, treatment, computer access checks, polygraph
        testing, and contact restrictions. It also affects management-team reporting, hearings,
        victim notice, and discharge petitions.
      </p>
    ),
    whyItMatters: (
      <p>
        Lifetime supervision can operate as registry-adjacent punishment when layered with
        registration, movement limits, monitoring, treatment mandates, and violation exposure.
        Discharge procedure is also a relief-pathway issue.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is mixed movement. Process changes may clarify review, but expanded or more rigid
        supervision conditions can intensify daily-life control and technical-violation risk.
        SOLAR’s lens is whether review is meaningful, individualized, and reachable for people
        without money, counsel, or perfect historical records.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether discharge becomes practically easier or harder, whether conditions remain
        individualized, whether violation reporting triggers incarceration for technical
        noncompliance, and whether counsel and evidentiary standards are clear.
      </p>
    ),
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance burden",
        "Relief pathway",
        "Due-process concern",
        "Family-stability impact",
        "Supervision burden",
      ],
      risk: ["Clarification needed", "Watch closely", "Advocacy opening"],
    },
    tags: ["Supervision", "Discharge petitions", "GPS", "Technical violations"],
    sources: [
      {
        label: "Maryland HB 287 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0287f.pdf",
      },
    ],
    action: {
      label: "Find Maryland legislators",
      href: "https://mgaleg.maryland.gov/mgawebsite/members/district",
      copy:
        "Please preserve individualized supervision, meaningful discharge review, access to counsel, and proportional responses to technical violations. Lifetime supervision should not become permanent punishment by procedure.",
    },
  },
{
    id: "md-hb-501-sb-407",
    group: "Restriction Expansion / Compliance Burden",
    status: "Introduced",
    title: "Maryland HB 501 / SB 407 — tier-definition changes tied to position-of-authority offense",
    jurisdiction: "Maryland",
    date: "Jan. 27–29",
    summary:
      "Maryland introduced cross-filed bills that would alter sex-offender tier definitions in connection with offenses involving a person in a position of authority.",
    whatChanged: (
      <p>
        <a
          href="https://mgaleg.maryland.gov/2026RS/bills/hb/hb0501f.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          Maryland HB 501
        </a>{" "}
        and{" "}
        <a
          href="https://mgaleg.maryland.gov/2026RS/bills/sb/sb0407f.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          SB 407
        </a>{" "}
        would alter penalties and offense language involving sexual offense by a person in a
        position of authority while also changing definitions of “tier I sex offender” and “tier III
        sex offender” for registry purposes.
      </p>
    ),
    whyItMatters: (
      <p>
        Tier placement controls registration duration, in-person reporting frequency, and collateral
        exposure. A tier-definition change can turn a shorter registration period into a longer or
        lifetime burden.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is negative movement because the bill set could move people into more burdensome
        registry classifications depending on final text and offense mapping. Before any tier
        expansion is adopted, lawmakers should show exactly who is affected, whether application is
        prospective only, and what relief remains available.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch committee amendments, fiscal and policy analyses explaining who moves into Tier III,
        whether any people move into lower tiers, whether changes apply prospectively only, and
        whether individualized relief remains available.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: ["Punishment expansion", "Compliance burden", "Reentry barrier", "Tiering change"],
      risk: ["Watch closely", "Clarification needed", "Advocacy opening"],
    },
    tags: ["Tiering", "Registration duration", "Position of authority"],
    sources: [
      {
        label: "Maryland HB 501 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0501f.pdf",
      },
      {
        label: "Maryland SB 407 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/sb/sb0407f.pdf",
      },
    ],
    action: {
      label: "Find Maryland legislators",
      href: "https://mgaleg.maryland.gov/mgawebsite/members/district",
      copy:
        "Please require a clear public tiering-impact analysis, prospective-only application, and individualized relief mechanisms before adopting any registry-tier expansion.",
    },
  },
  {
    id: "md-hb-12",
    group: "Restriction Expansion / Compliance Burden",
    status: "Hearing posture",
    title: "Maryland HB 12 — juvenile sex-offender registry access and qualifying-offense expansion",
    jurisdiction: "Maryland",
    date: "Jan. 14–29",
    summary:
      "Maryland considered expanding who can access the juvenile sex-offender registry and adding qualifying offenses for juvenile registry inclusion.",
    whatChanged: (
      <p>
        <a
          href="https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0012?ys=2026RS"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          Maryland HB 12
        </a>{" "}
        would authorize a local superintendent or superintendent’s designee to access the juvenile
        sex-offender registry and would add offenses to the list requiring juvenile registry
        inclusion.
      </p>
    ),
    whyItMatters: (
      <p>
        Juvenile registration is high-risk from a rehabilitation and family-stability perspective.
        Expanded school access may increase exclusion, surveillance, stigma, or informal discipline
        even when the registry is not fully public.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is negative movement for youth and families. School systems need safety planning tools,
        but registry expansion and broader institutional access can undermine education stability,
        privacy, and rehabilitation unless access is narrow, controlled, and paired with enforceable
        anti-misuse safeguards.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch whether access is tightly limited, whether schools receive anti-misuse guidance,
        whether added offenses are narrow, whether confidentiality protections are enforceable, and
        whether rehabilitation and education stability are considered.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Youth registry",
        "Education barrier",
        "Family-stability impact",
        "Due-process concern",
        "Reentry barrier",
      ],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk"],
    },
    tags: ["Juvenile registry", "School access", "Confidentiality", "Education stability"],
    sources: [
      {
        label: "Maryland HB 12 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0012f.pdf",
      },
      {
        label: "Maryland HB 12 bill record",
        href: "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0012?ys=2026RS",
      },
    ],
    action: {
      label: "Find Maryland legislators",
      href: "https://mgaleg.maryland.gov/mgawebsite/members/district",
      copy:
        "Please protect juvenile rehabilitation, confidentiality, education stability, narrow access controls, and safeguards against school-based exclusion or stigma before expanding juvenile registry access.",
    },
  },
  {
    id: "doe-v-burlew",
    group: "Courts & Rights",
    status: "Published opinion",
    title: "Sixth Circuit — Doe v. Burlew remands Kentucky social-media legal-name disclosure challenge",
    jurisdiction: "Federal / Kentucky",
    date: "Jan. 26",
    summary:
      "The Sixth Circuit sent a challenge to Kentucky’s social-media legal-name disclosure law back to the district court because the lower court had not completed the required facial-overbreadth analysis.",
    whatChanged: (
      <p>
        The{" "}
        <a
          href="https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          Sixth Circuit opinion in Doe v. Burlew
        </a>{" "}
        vacated the preliminary injunction and remanded the case for further proceedings. The court
        did not finally decide whether Kentucky’s law is constitutional; it required the district
        court to complete the facial-overbreadth analysis.
      </p>
    ),
    whyItMatters: (
      <p>
        Kentucky’s challenged law requires covered registrants with offenses involving minors to
        display their full legal name on qualifying social-media accounts. Legal-name mandates can
        chill political speech, support-group participation, family communication, employment
        networking, and ordinary online life.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is mixed movement. The injunction posture changed in a way that may increase
        uncertainty for affected people, but the First Amendment challenge remains alive. The deeper
        issue is whether the state can force public self-identification online without individualized
        findings, exposing registrants and families to doxxing, harassment, and collateral stigma.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch district-court proceedings on remand, whether enforcement is stayed or resumes, and
        how courts distinguish passive reading, political speech, direct messaging, family accounts,
        commercial speech, and pseudonymous participation.
      </p>
    ),
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Rights concern",
        "Compliance burden",
        "Due-process concern",
        "Family-stability impact",
        "Litigation risk",
      ],
      risk: ["Appeal likely", "Clarification needed", "Watch closely", "Advocacy opening"],
    },
    tags: ["First Amendment", "Online identifiers", "Legal-name disclosure", "Remand"],
    sources: [
      {
        label: "Sixth Circuit opinion, Doe v. Burlew",
        href: "https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf",
      },
    ],
  },
  {
    id: "ca-ab-1568",
    group: "Relief / Termination",
    status: "Introduced",
    title: "California AB 1568 — registry-termination petition process bill introduced",
    jurisdiction: "California",
    date: "Jan. 12",
    summary:
      "California introduced a bill affecting what courts may consider when deciding petitions to terminate sex-offense registration.",
    whatChanged: (
      <p>
        <a
          href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          California AB 1568
        </a>{" "}
        concerns Penal Code section 290.5, California’s petition process for termination from the
        registry after completion of the minimum registration period. The bill would add or
        emphasize judicial considerations related to whether the registrable offense involved a
        position of trust or authority and whether the petitioner participated in or completed
        treatment.
      </p>
    ),
    whyItMatters: (
      <p>
        Registry termination is one of the most important relief issues. Even language framed as
        clarifying judicial discretion can become a practical barrier if it adds documentation
        burdens, increases hearing uncertainty, or disadvantages people without counsel or old
        treatment records.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is unclear movement. A well-designed petition process can support individualized
        review, but added factors can also make relief harder in practice. The key question is
        whether AB 1568 preserves meaningful termination or converts eligibility into a more
        discretionary and resource-heavy process.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch committee analysis, whether language becomes mandatory or permissive, whether
        inability to access treatment records is addressed, whether indigent petitioners receive
        protections, and whether the bill applies to pending or future petitions only.
      </p>
    ),
    chips: {
      movement: ["Unclear movement"],
      impact: ["Relief pathway", "Due-process concern", "Compliance clarity", "Litigation risk"],
      risk: ["Watch closely", "Clarification needed", "Advocacy opening"],
    },
    tags: ["Registry termination", "Relief", "Court petitions", "Treatment records"],
    sources: [
      {
        label: "California AB 1568",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
      },
    ],
    action: {
      label: "Find California representatives",
      href: "https://findyourrep.legislature.ca.gov/",
      copy:
        "Please preserve meaningful registry termination, avoid impossible documentation burdens, and require individualized evidence rather than categorical distrust of people who have completed their minimum registration period.",
    },
  },
  {
    id: "ca-sb-680",
    group: "Agencies / Implementation",
    status: "Operative date",
    title: "California SB 680 — new registration trigger became operative January 1, 2026",
    jurisdiction: "California",
    date: "Jan. 1",
    summary:
      "California added a tier-one registration requirement for certain unlawful-intercourse-with-a-minor convictions occurring on or after January 1, 2026, while preserving a limited statutory exception.",
    whatChanged: (
      <p>
        <a
          href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB680"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          California SB 680
        </a>{" "}
        amended Penal Code section 290 to require registration for specified Penal Code section
        261.5(c) or 261.5(d) convictions when the offense occurs on or after January 1, 2026. The
        placement is generally tier one, meaning a 10-year minimum registration period, unless the
        statutory age-gap and offense-only exception applies.
      </p>
    ),
    whyItMatters: (
      <p>
        Tier one is still a decade-long registry obligation. It can mean recurring registration,
        collateral housing and employment barriers, stigma, family stress, and risk of technical
        violations.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is negative movement because it prospectively expands who enters the registry. The
        limited exception matters, but implementation must be clear enough that affected people,
        defense counsel, courts, and families understand who is covered and how termination
        eligibility works.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch prosecutorial charging practices, court application of the statutory exception,
        California DOJ tiering guidance, and whether defense counsel and registrants receive clear
        information about termination eligibility and exception criteria.
      </p>
    ),
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Punishment expansion",
        "Reentry barrier",
        "Compliance burden",
        "Employment barrier",
        "Housing barrier",
        "Agency implementation",
      ],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    tags: ["Registration trigger", "Tier one", "Implementation", "Termination eligibility"],
    sources: [
      {
        label: "California SB 680",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB680",
      },
    ],
    action: {
      label: "Find California representatives",
      href: "https://findyourrep.legislature.ca.gov/",
      copy:
        "Please request clear DOJ and court guidance explaining who is covered by SB 680, who qualifies for the statutory exception, and how tier-one termination petitions should be explained to affected people.",
    },
  },
  {
    id: "nh-rsa-651-b",
    group: "Agencies / Implementation",
    status: "Effective date",
    title: "New Hampshire RSA 651-B amendments — January 1 statutory changes to registration definitions and tiers",
    jurisdiction: "New Hampshire",
    date: "Jan. 1",
    summary:
      "New Hampshire’s registry definitions and tier categories changed effective January 1, including updated offense lists and language around court process for certain registration determinations.",
    whatChanged: (
      <p>
        <a
          href="https://www.gencourt.state.nh.us/rsa/html/LXII/651-B/651-B-1.htm"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4"
        >
          New Hampshire RSA 651-B:1
        </a>{" "}
        lists amendments effective January 1, 2026, updating definitions of sexual offense, offense
        against a child, and tier I, tier II, and tier III sex offender categories. The amended
        language includes “creation of a child intimate visual representation” among listed offenses
        and contains process language requiring an opportunity to be heard, stated reasons, and
        appeal rights when courts impose registration for certain otherwise unlisted offenses.
      </p>
    ),
    whyItMatters: (
      <p>
        Definitions and tiers determine who is required to register, how long registration lasts, and
        what process a person receives when a court imposes registration. Implementation errors can
        lead to over-classification.
      </p>
    ),
    solarAnalysis: (
      <p>
        This is mixed movement. The updated offense lists may expand covered categories, while the
        hearing, reason-giving, and appeal language may improve process in some court-imposed
        registration decisions. The practical effect will depend on implementation and notice.
      </p>
    ),
    whatToWatch: (
      <p>
        Watch state police or court guidance, application of the opportunity-to-be-heard language,
        whether affected people receive notice, whether new offense categories are over-applied, and
        whether counsel understands appeal rights.
      </p>
    ),
    chips: {
      movement: ["Mixed movement"],
      impact: ["Tiering change", "Compliance clarity", "Due-process concern", "Agency implementation"],
      risk: ["Clarification needed", "Watch closely", "Implementation risk"],
    },
    tags: ["Definitions", "Tiering", "Court process", "Implementation"],
    sources: [
      {
        label: "New Hampshire RSA 651-B:1",
        href: "https://www.gencourt.state.nh.us/rsa/html/LXII/651-B/651-B-1.htm",
      },
    ],
    action: {
      label: "New Hampshire General Court member search",
      href: "https://www.gencourt.state.nh.us/house/members/",
      copy:
        "Please support plain-language implementation guidance for affected people, courts, counsel, and families so New Hampshire’s registry-definition and tier changes are not over-applied.",
    },
  },
];
const actionItems: ActionItem[] = [
  {
    title: "Push back on Florida’s broad restriction package",
    why:
      "SB 212 / HB 45 combines housing, movement, notice, employment, supervision, and warrantless-arrest exposure.",
    href: "https://www.flsenate.gov/Senators/Find",
    linkLabel: "Find your Florida senator",
    copy:
      "Please reject broad registry-based exclusion zones and warrantless-arrest expansion unless lawmakers can show individualized risk evidence, clear family exceptions, and data proving improved safety rather than more homelessness and technical violations.",
  },
  {
    title: "Defend housing stability in West Virginia",
    why:
      "SB 500 would create a 1,000-foot residence ban with retroactive and prospective language.",
    href: "https://www.wvlegislature.gov/Senate1/roster.cfm",
    linkLabel: "West Virginia Senate roster",
    copy:
      "Please reject retroactive residency exclusion zones. Stable housing and family support reduce risk; broad 1,000-foot bans can create homelessness, family separation, and technical violations without individualized evidence.",
  },
  {
    title: "Protect juvenile confidentiality and education stability in Maryland",
    why:
      "HB 12 would expand school-system access to juvenile registry information and add qualifying offenses.",
    href: "https://mgaleg.maryland.gov/mgawebsite/members/district",
    linkLabel: "Find your Maryland legislators",
    copy:
      "Please protect juvenile rehabilitation, confidentiality, education stability, narrow access controls, and safeguards against school-based exclusion or stigma before expanding juvenile registry access.",
  },
  {
    title: "Preserve meaningful California registry termination",
    why:
      "AB 1568 could reshape what courts consider when deciding termination petitions.",
    href: "https://findyourrep.legislature.ca.gov/",
    linkLabel: "Find California representatives",
    copy:
      "Please preserve meaningful registry termination, avoid impossible documentation burdens, and require individualized evidence rather than categorical distrust of people who have completed their minimum registration period.",
  },
];

const watchItems: WatchItem[] = [
  {
    title: "Maryland SB 230 / HB 138 — burglary-linked sexual-offense bill",
    posture:
      "Borderline item. January bill activity exists, but the registry effect is indirect and case-specific.",
    why:
      "Official fiscal materials indicate possible tier consequences in some cases, but the bill is not primarily a registry bill.",
    next:
      "Watch for official analysis showing specific tier movement, registration-duration changes, or direct registry-trigger effects.",
    href: "https://mgaleg.maryland.gov/2026RS/fnotes/bil_0000/sb0230.pdf",
  },
  {
    title: "Ellingburg v. United States — Supreme Court restitution / ex post facto decision",
    posture:
      "Legal-context item only. The case mentions sex-offender registration in civil/punitive discussion but does not decide a registry obligation.",
    why:
      "It may become relevant if later litigants or lower courts invoke its reasoning in registry retroactivity or punitive-effects litigation.",
    next:
      "Watch whether lower courts cite Ellingburg in registry cases rather than treating it as a January registry-policy development.",
    href: "https://www.supremecourt.gov/opinions/25pdf/24-482_d1oe.pdf",
  },
  {
    title: "Sixth Circuit remand in Doe v. Burlew",
    posture:
      "The First Amendment challenge remains alive after the preliminary-injunction posture changed.",
    why:
      "The case may shape how courts evaluate compelled legal-name display, pseudonymous speech, and online participation by registrants.",
    next:
      "Watch district-court proceedings on remand and any enforcement-status changes affecting covered social-media users.",
    href: "https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf",
  },
  {
    title: "Implementation of California SB 680 and New Hampshire RSA 651-B amendments",
    posture:
      "Both are January 1 implementation items rather than live hearing fights.",
    why:
      "New registration triggers, tier mapping, and court-process rules can be misapplied if agencies, courts, counsel, and families lack clear guidance.",
    next:
      "Watch for agency guidance, court interpretation, notices to affected people, and early disputes over exception or tier eligibility.",
  },
];

function ActionCard({ item }: { item: ActionItem }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-650">{item.why}</p>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm leading-6 text-slate-700">{item.copy}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <CopyButton text={item.copy} />
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-slate-800"
        >
          {item.linkLabel}
        </a>
      </div>
    </div>
  );
}

function WatchListItem({ item }: { item: WatchItem }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-black text-slate-950">{item.title}</h3>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            Track
          </a>
        ) : null}
      </div>
      <dl className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-3">
        <div>
          <dt className="font-black text-slate-950">Current posture</dt>
          <dd className="mt-1">{item.posture}</dd>
        </div>
        <div>
          <dt className="font-black text-slate-950">Why it matters</dt>
          <dd className="mt-1">{item.why}</dd>
        </div>
        <div>
          <dt className="font-black text-slate-950">What to watch next</dt>
          <dd className="mt-1">{item.next}</dd>
        </div>
      </dl>
    </div>
  );
}

export const teasers = {
  glance: [
    "January’s dominant pattern was restriction expansion: states moved proposals affecting housing, public-space access, employment, online identifiers, juvenile registry access, supervision, and tier placement.",
    "The month’s strongest rights development was Doe v. Burlew, where the Sixth Circuit remanded Kentucky’s social-media legal-name disclosure case for further First Amendment analysis.",
    "Relief remained procedurally vulnerable: California introduced AB 1568, a registry-termination petition bill that could clarify or complicate court review depending on final language.",
  ],
  highlights: [
    "Florida SB 212 / HB 45 would expand residency, public-place, notice, arrest, and supervision exposure.",
    "West Virginia SB 500 proposed a 1,000-foot residence ban with retroactivity concerns.",
    "Maryland HB 12 raised juvenile-registry concerns by expanding school-system access and qualifying offenses.",
    "California SB 680 became operative January 1, adding a prospective tier-one registration trigger for specified convictions.",
  ],
};

export default function January2026LegislativeTrackerPage() {
  const groupedDevelopments = useMemo(
    () =>
      groups
        .map((group) => ({
          group,
          items: developments.filter((development) => development.group === group),
        }))
        .filter((entry) => entry.items.length > 0),
    [],
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
          <a
            href="/legislative-tracker"
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
          >
            Back to Legislative Tracker
          </a>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge tone="blue">Monthly update</Badge>
            <Badge tone="purple">January 2026</Badge>
            <Badge tone="amber">Registry policy</Badge>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                {pageMeta.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                {pageMeta.dek}
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-300">
                Search window: {pageMeta.dateWindow}
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                Page utility
              </p>
              <div className="mt-3">
                <ShareBar />
              </div>
            </div>
          </div>

          <nav className="mt-8 flex flex-wrap gap-2 text-sm font-bold">
            <a className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20" href="#throughline">
              Throughline
            </a>
            <a className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20" href="#glance">
              At a glance
            </a>
            <a className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20" href="#developments">
              Key developments
            </a>
            <a className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20" href="#actions">
              Action Center
            </a>
            <a className="rounded-full bg-white/10 px-3 py-2 hover:bg-white/20" href="#watchlist">
              Watchlist
            </a>
          </nav>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:px-6 md:py-8">
        <Section id="throughline" eyebrow="Reader map" title="Month Throughline">
          <div className="rounded-3xl bg-slate-950 p-5 text-white md:p-6">
            <p className="text-lg font-bold leading-8 md:text-xl">
              January 2026 was dominated by restriction expansion and compliance-burden activity.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
              State legislatures moved proposals that would add or broaden residency zones,
              public-place limits, employment limits, online identifier duties, vehicle and
              equipment reporting, supervision conditions, juvenile registry access, and
              tier-triggering offenses. The month also included one significant rights-litigation
              development — the Sixth Circuit’s remand in the Kentucky social-media legal-name
              disclosure case — and two implementation or relief items: California’s
              registry-termination petition bill, California’s January 1 registration-trigger
              expansion, and New Hampshire’s January 1 registration and tiering amendments.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
              For SOLAR’s audience, the pattern is not simply “more bills.” It is a cluster of
              proposals that would make registry life more geographically restricted, technically
              fragile, and exposed to family instability, while relief pathways remained narrower
              and more procedurally vulnerable.
            </p>
          </div>
        </Section>
<Section id="glance" eyebrow="At a glance" title="What January moved">
          <div className="grid gap-4 md:grid-cols-4">
            <StatusCard
              label="Key developments"
              value="11"
              detail="Included items with January hooks: introductions, hearings, committee movement, operative dates, and a federal appellate opinion."
            />
            <StatusCard
              label="Dominant posture"
              value="Restriction"
              detail="Most included items would expand residency, reporting, tiering, supervision, public-notification, or juvenile-registry exposure."
            />
            <StatusCard
              label="Rights litigation"
              value="1"
              detail="Doe v. Burlew kept the Kentucky online legal-name disclosure challenge alive but changed the injunction posture."
            />
            <StatusCard
              label="Action paths"
              value="4"
              detail="Highest-value actions focus on Florida, West Virginia, Maryland juvenile access, and California termination relief."
            />
          </div>

          <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-black text-slate-950">Why this update matters</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              January’s bills and implementation items show how registry systems expand in pieces:
              one new location rule, one new tier definition, one new online-identifier field, one
              new juvenile-access pathway, one new supervision condition. Each piece may be framed
              as narrow. Together, they create more ways for housing, work, school, family life,
              digital life, and ordinary movement to become compliance hazards.
            </p>
          </div>
        </Section>

        <Section id="developments" eyebrow="Key developments" title="January 2026 developments">
          <div className="grid gap-8">
            {groupedDevelopments.map((entry) => (
              <div key={entry.group}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <h3 className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-700">
                    {entry.group}
                  </h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-5">
                  {entry.items.map((development) => (
                    <DevelopmentCard key={development.id} development={development} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="actions" eyebrow="Action Center" title="Highest-value reader actions">
          <div className="grid gap-4 md:grid-cols-2">
            {actionItems.map((item) => (
              <ActionCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section id="watchlist" eyebrow="Rolling watchlist" title="What remains unresolved">
          <div className="grid gap-4">
            {watchItems.map((item) => (
              <WatchListItem key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Sources and methodology" title="Source and methodology note">
          <div className="grid gap-4 text-sm leading-7 text-slate-700 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p>
                This monthly update uses the approved January 1–31, 2026 search handoff and preserves
                the locked item set. Official bill pages, official bill text, court opinions,
                statutes, and legislative materials are prioritized. Credible context sources are
                used only where they support status or framing without replacing official legal
                sources.
              </p>
              <p className="mt-3">
                The tracker focuses on practical legal effect: who is newly covered, what duties
                expand, what relief changes, what process is available, and how the development
                affects people required to register, their families, and evidence-based reform.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-black text-slate-950">Not included as key developments</p>
              <p className="mt-2">
                Borderline items remain in the watchlist when they have possible future relevance
                but no direct January registry-policy effect strong enough for a key-development
                slot.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}