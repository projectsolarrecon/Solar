import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";

type ChipSet = {
  movement: string[];
  impact: string[];
  risk: string[];
};

type Source = {
  label: string;
  href: string;
  kind: "official" | "supplemental";
  type: string;
};

type ActionLink = {
  title: string;
  why: string;
  label: string;
  href: string;
  message: string;
};

type Development = {
  id: number;
  group: string;
  title: string;
  jurisdiction: string;
  date: string;
  summary: string;
  tone: "rose" | "amber" | "emerald" | "indigo";
  changed: ReactNode[];
  matters: ReactNode[];
  analysis: ReactNode[];
  watch: ReactNode[];
  chips: ChipSet;
  tags: string[];
  sources: Source[];
  action?: ActionLink;
};

type Metric = {
  label: string;
  value: string;
  body: string;
};

type WatchItemData = {
  title: string;
  posture: string;
  why: string;
  next: string[];
};

const slug = "2026-06-01";
const canonicalUrl = `https://thesolarproject.org/resources/legislative-tracker/${slug}`;

const tones = {
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-950",
};

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/70 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">
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
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-slate-700"
    >
      {children}
    </Link>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950"
    >
      {children}
    </a>
  );
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
        {metric.label}
      </p>
      <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">
        {metric.value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{metric.body}</p>
    </div>
  );
}

function ChipGroup({ title, labels }: { title: string; labels: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-700">
        {title}
      </p>
      <div className="mt-1 flex flex-wrap gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="rounded-full border border-indigo-200 bg-white px-2.5 py-1 text-xs font-bold text-indigo-800"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SolarAnalysis({ chips, children }: { chips: ChipSet; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
        SOLAR analysis
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <ChipGroup title="Movement" labels={chips.movement} />
        <ChipGroup title="Impact" labels={chips.impact} />
        <ChipGroup title="Risk / opportunity" labels={chips.risk} />
      </div>
      <div className="mt-3 space-y-2 text-sm leading-6 text-indigo-950">
        {children}
      </div>
    </div>
  );
}

function ContentBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <div className="mt-1 space-y-2 text-sm leading-6 text-slate-800">
        {children}
      </div>
    </div>
  );
}

function SourcePill({ source }: { source: Source }) {
  const official = source.kind === "official";

  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      title={source.type}
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold underline underline-offset-2 ${
        official
          ? "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {source.label} ↗
    </a>
  );
}

function CopyButton({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
    >
      {copied ? "Copied!" : "Copy message"}
    </button>
  );
}

function DevelopmentCard({
  development,
  copiedId,
  onCopy,
}: {
  development: Development;
  copiedId: string | null;
  onCopy: (id: string, text: string) => void;
}) {
  const actionId = `development-${development.id}`;

  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${tones[development.tone]}`}
        >
          {development.group}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
          {development.jurisdiction}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">
          {development.date}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-black leading-snug text-slate-950">
        {development.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        {development.summary}
      </p>

      <div className="mt-4 grid gap-3">
        <ContentBox title="What changed">
          {development.changed.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </ContentBox>

        <ContentBox title="Why it matters">
          {development.matters.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </ContentBox>

        <SolarAnalysis chips={development.chips}>
          {development.analysis.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </SolarAnalysis>

        <ContentBox title="What to watch">
          <ul className="list-disc space-y-1 pl-5">
            {development.watch.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </ContentBox>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {development.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {development.sources.map((source) => (
          <SourcePill key={`${source.label}-${source.href}`} source={source} />
        ))}
      </div>

      {development.action && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-sm font-black text-slate-950">
            {development.action.title}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700">
            {development.action.why}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <CopyButton
              copied={copiedId === actionId}
              onCopy={() => onCopy(actionId, development.action!.message)}
            />
            <a
              href={development.action.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              {development.action.label} ↗
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

function ActionCard({
  action,
  copied,
  onCopy,
}: {
  action: ActionLink;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black text-slate-950">{action.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{action.why}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <CopyButton copied={copied} onCopy={onCopy} />
        <a
          href={action.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          {action.label} ↗
        </a>
      </div>
    </div>
  );
}

function WatchItem({ item }: { item: WatchItemData }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black text-slate-950">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Current posture:</span>{" "}
        {item.posture}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Why it matters:</span>{" "}
        {item.why}
      </p>
      <div className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Watch next:</span>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          {item.next.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const metrics: Metric[] = [
  {
    label: "Key Developments",
    value: "6",
    body:
      "May’s locked item set includes three state legislative developments, two court clusters, and one federal implementation-funding watch item.",
  },
  {
    label: "Dominant Posture",
    value: "Mixed",
    body:
      "The month was not uniformly punitive or reform-oriented, but the practical pressure leaned toward new barriers around relief, employment, and compliance.",
  },
  {
    label: "Rights / Reform Counterpoint",
    value: "2",
    body:
      "Nevada preserved access to lifetime-supervision release, while New York gave stability evidence some value in SORA departures but left youth-risk concerns unresolved.",
  },
  {
    label: "Action Paths",
    value: "3",
    body:
      "The clearest action paths are California’s termination-petition bill, Michigan’s employment-ban package, and Missouri’s implementation of SB 982.",
  },
];

const californiaAction: ActionLink = {
  title: "Ask California senators to preserve real termination access",
  why:
    "AB 1568 could make registry termination more expensive, more document-heavy, and harder for people with old cases, missing treatment records, disability, poverty, or transportation barriers.",
  label: "Track AB 1568",
  href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
  message:
    "Please amend AB 1568 to preserve meaningful access to Penal Code section 290.5 termination petitions. Any hearing, treatment-verification, or assessment requirement should include remote appearance options, clear rules for old or missing treatment records, and protections so assessment costs do not become a de facto denial for people who are otherwise eligible for relief.",
};

const michiganAction: ActionLink = {
  title: "Oppose categorical employment bans in Michigan",
  why:
    "HB 5425/HB 5426 would turn registry status into a new employment disqualification and criminal-risk category for broadly defined child-facing businesses, even without individualized findings.",
  label: "Track HB 5425",
  href: "https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-5425",
  message:
    "Please oppose categorical employment bans based only on registry status. Michigan should require individualized risk review, narrow definitions of covered work, clear limits tied to actual unsupervised access, and protections against blanket employer exclusion that destabilizes work, housing, and family income.",
};

const missouriAction: ActionLink = {
  title: "Track Missouri SB 982 implementation",
  why:
    "SB 982 contains both relief-related openings and new compliance exposure. Implementation will determine whether the law clarifies removal and reduction paths or creates new traps for people with out-of-state histories or temporary Missouri residence.",
  label: "Track SB 982",
  href: "https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026",
  message:
    "Please monitor SB 982 implementation and prioritize clear, public guidance on tier assignment, temporary-residence registration, treatment-record proof, and removal petitions. Missouri should make compliance understandable and ensure relief pathways remain accessible rather than turning technical uncertainty into new punishment.",
};

const developments: Development[] = [
  {
    id: 1,
    group: "Registry Restructuring / Relief and Compliance",
    title:
      "Missouri SB 982 restructures registry duties while reopening some relief questions",
    jurisdiction: "Missouri",
    date: "Signed May 6, 2026; effective August 28, 2026",
    summary:
      "Missouri enacted the month’s most consequential registry bill, pairing possible removal and reduction clarity with new tiering, temporary-residence, and compliance implementation risks.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026">
          Missouri SB 982
        </ExternalLink>{" "}
        moves major parts of Missouri’s registry framework from narrower offense-list mechanics toward tier-based registration language for people adjudicated of Tier I, Tier II, or Tier III offenses since July 1, 1979. The law gives local registration officials and the Missouri State Highway Patrol roles in initial tier assignment and accuracy review, and it requires certain out-of-state registrants with a temporary Missouri residence to register during that temporary residency.
      </>,
      "The act also changes treatment-program documentation rules for registration-period reductions, modifies removal procedures for people whose registration is tied to an out-of-state adjudication, and adjusts public-record handling for registry information. It was signed in May after April passage and takes effect August 28, 2026.",
      "The practical legal change is not one thing. Missouri is simultaneously reorganizing who must register, how tier classification is handled, how some removal petitions work, and how temporary-residence or nonresident work and school situations create registration duties.",
    ],
    matters: [
      "For people seeking removal or a shorter registration period, the treatment-record language may matter where old program records are missing or difficult to obtain. That can be especially important for older cases, people who completed probation long ago, and families trying to plan housing, work, and caregiving around a realistic relief timeline.",
      "For people with out-of-state histories, temporary Missouri residence, work, school, or family ties, the same bill can increase compliance exposure. A visit, temporary stay, or cross-border caregiving arrangement can become legally risky if the rules are unclear or implemented unevenly across counties.",
      "The family impact is direct: relief rules affect whether a household can move forward, while temporary-residence rules affect travel, caregiving, work assignments, and whether ordinary family support creates a new registration question.",
    ],
    analysis: [
      "SOLAR reads SB 982 as mixed movement. The relief and treatment-proof pieces may create real openings for some people, but the tiering and temporary-residence provisions also expand the number of decisions that agencies, courts, and registrants must get exactly right.",
      "The danger is implementation. If Missouri publishes clear guidance, trains registration officials, and makes removal procedures accessible, the law could reduce some uncertainty. If implementation is uneven, SB 982 could become another example of registry law turning ordinary movement and old paperwork into compliance traps.",
    ],
    watch: [
      "Missouri State Highway Patrol guidance before and after the August 28 effective date.",
      "How courts handle removal or reduction petitions where treatment records are unavailable but probation-completion records exist.",
      "Whether temporary-residence language is applied narrowly and clearly, or used to create new enforcement exposure for people with family, work, medical, or short-term housing ties in Missouri.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Relief expansion",
        "Compliance burden",
        "Compliance clarity",
        "State-by-state variation",
        "Reentry barrier",
      ],
      risk: [
        "Implementation risk",
        "Advocacy opening",
        "Watch closely",
        "Clarification needed",
      ],
    },
    tags: ["Missouri", "registry restructuring", "relief", "temporary residence"],
    sources: [
      {
        label: "Missouri Senate SB 982 bill page",
        href: "https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Governor signing release",
        href: "https://governor.mo.gov/press-releases/archive/governor-kehoe-signs-eight-bills-law",
        kind: "official",
        type: "official executive source",
      },
      {
        label: "Official fiscal note",
        href: "https://documents.house.mo.gov/billtracking/bills261/fiscal/fispdf/5756H.06T.ORG.pdf",
        kind: "official",
        type: "official fiscal/source analysis",
      },
      {
        label: "Missouri Independent context",
        href: "https://missouriindependent.com/?p=30471",
        kind: "supplemental",
        type: "media context",
      },
      {
        label: "Advocacy context",
        href: "https://all4consolaws.org/2026/05/mo-good-news-sb982-restores-the-path-for-removal-from-the-registry/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: missouriAction,
  },
  {
    id: 2,
    group: "Relief / Termination Barriers",
    title:
      "California AB 1568 would make registry-termination petitions more burdensome",
    jurisdiction: "California",
    date: "Passed Assembly May 26; sent to Senate Rules May 27",
    summary:
      "California advanced a bill that could turn a tiered-registry termination pathway into a more documentation-heavy, court-appearance-heavy process for Tier I and Tier II registrants.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568">
          California AB 1568
        </ExternalLink>{" "}
        would alter how courts handle Penal Code section 290.5 termination petitions. It would require hearings to be heard in the county where the person is registered, authorize courts to order petitioners to appear, and add new required consideration of whether the registrant was in a position of trust or authority.
      </>,
      "The bill also adds treatment-verification requirements. Courts would consider proof of participation in or completion of sex-offense-specific treatment, require proof of successful completion of a CASOMB-certified program when required, and permit SARATSO assessments where verification is unavailable or the court deems an assessment necessary.",
      "The May development was Assembly passage and Senate referral, which turned the proposal from an Assembly bill into a live statewide Senate action item.",
    ],
    matters: [
      "California’s tiered registry system created a path for some Tier I and Tier II registrants to petition for termination after the minimum period. AB 1568 does not erase that path, but it could make the path harder for people with old cases, missing records, prior treatment providers who no longer exist, limited income, transportation barriers, age-related limitations, disability, or out-of-county family obligations.",
      "The cost issue matters. If a court orders a new assessment because older treatment verification is unavailable, the practical result may depend on who pays, whether indigent petitioners get support, and whether the process becomes a delay tactic rather than a public-safety inquiry.",
      "For families, termination access is not abstract. Remaining on the registry affects housing searches, employment, school and childcare routines, travel, family privacy, and the ability to stop organizing ordinary life around public registration.",
    ],
    analysis: [
      "SOLAR reads AB 1568 as negative movement because it would add procedural and evidentiary burdens to a relief pathway that already requires time, documentation, and court review. Relief that exists on paper but becomes practically unreachable is not meaningful relief.",
      "The bill’s supporters may describe it as strengthening review, but the registry-impacted question is whether review remains individualized and accessible. Without remote appearance options, clear missing-record rules, and cost protections, AB 1568 risks making termination depend less on risk and more on paperwork, money, and geography.",
    ],
    watch: [
      "Senate committee assignment and whether the bill receives a hearing.",
      "Amendments addressing remote appearances, transportation barriers, disability accommodations, and who pays for SARATSO assessments.",
      "Language clarifying how courts should treat old cases where treatment records are unavailable through no fault of the petitioner.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Relief restriction",
        "Compliance burden",
        "Due-process concern",
        "Reentry barrier",
        "Family-stability impact",
      ],
      risk: [
        "Advocacy opening",
        "Watch closely",
        "Implementation risk",
        "Clarification needed",
      ],
    },
    tags: ["California", "termination petitions", "tiered registry", "due process"],
    sources: [
      {
        label: "California LegInfo AB 1568",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "AB 1568 text context",
        href: "https://legiscan.com/CA/text/AB1568/id/3438219",
        kind: "supplemental",
        type: "bill text / civic-data context",
      },
      {
        label: "CalMatters Digital Democracy context",
        href: "https://calmatters.digitaldemocracy.org/bills/ca_202520260ab1568",
        kind: "supplemental",
        type: "civic context",
      },
      {
        label: "Sponsor context",
        href: "https://ad22.asmrc.org/2026/03/04/alanis-bill-to-strengthen-sex-offender-law-passes-key-committee/",
        kind: "supplemental",
        type: "sponsor context",
      },
    ],
    action: californiaAction,
  },
  {
    id: 3,
    group: "Employment Barriers / Punishment Expansion",
    title:
      "Michigan HB 5425/HB 5426 would criminalize work in broadly defined youth-serving businesses",
    jurisdiction: "Michigan",
    date: "Referred to Senate committee May 7, 2026",
    summary:
      "Michigan advanced a Senate-stage package that would bar registrants from employment in many businesses primarily serving minors and create new misdemeanor and felony exposure.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-5425">
          Michigan HB 5425
        </ExternalLink>{" "}
        would add a new section to Michigan’s Sex Offenders Registration Act barring a person required to register from being an employee of a business that primarily provides services to people under 18.{" "}
        <ExternalLink href="https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-5426">
          HB 5426
        </ExternalLink>{" "}
        supplies the sentencing-guideline tie-bar.
      </>,
      "The covered examples are broad: martial arts studios, dance studios, summer camps, tutoring services, youth sports venues, art or hobby classes, mobile vending businesses, bowling alleys, laser tag centers, escape rooms, and any business allowing unsupervised access to minors during activities.",
      "A first violation would be a misdemeanor punishable by up to one year and/or a fine; a second or later violation would become a felony punishable by up to four years and/or a larger fine. The May hook is Senate referral after House passage.",
    ],
    matters: [
      "This is a direct employment restriction based on registry status rather than individualized risk, current supervision terms, work duties, or actual access. It would make work itself the trigger for criminal exposure in a large category of small businesses, recreation businesses, entertainment venues, youth services, vending, and mixed-use spaces.",
      "Employment is one of the strongest anchors for reentry, housing stability, treatment participation, child support, transportation, and family income. A categorical ban can destabilize not only the person required to register, but also spouses, children, aging parents, and households depending on that income.",
      "The chilling effect may be wider than the bill text. Employers may respond by refusing to consider registrants for jobs that do not actually involve unsupervised contact with minors, because the legal category is broad and the perceived risk of hiring is high.",
    ],
    analysis: [
      "SOLAR reads HB 5425/HB 5426 as negative movement because the package expands punishment through employment exclusion and then backs that exclusion with new criminal penalties. It treats registry status as a substitute for individualized review.",
      "Real safety is not served by making lawful employment harder to sustain. If lawmakers are concerned about actual unsupervised access, the evidence-based response is narrow role-specific screening, clear supervision rules, and individualized risk assessment—not a broad status-based employment ban that pushes people and families toward instability.",
    ],
    watch: [
      "Whether the Senate Civil Rights, Judiciary, and Public Safety Committee schedules a hearing.",
      "Amendments narrowing the definition of covered businesses or tying restrictions to actual unsupervised access rather than the business category.",
      "Whether lawmakers add individualized exceptions, employer safe-harbor clarity, or limits that prevent blanket exclusion from low-risk roles.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Employment barrier",
        "Reentry barrier",
        "Compliance burden",
        "Punishment expansion",
        "Family-stability impact",
      ],
      risk: [
        "Advocacy opening",
        "Enforcement risk",
        "Watch closely",
        "Litigation risk",
      ],
    },
    tags: ["Michigan", "employment", "youth-serving businesses", "criminal penalties"],
    sources: [
      {
        label: "Michigan HB 5425 official bill page",
        href: "https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-5425",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Michigan HB 5426 official bill page",
        href: "https://www.legislature.mi.gov/Bills/Bill?ObjectName=2025-HB-5426",
        kind: "official",
        type: "official companion bill page",
      },
      {
        label: "HB 5425 engrossed text",
        href: "https://legiscan.com/MI/text/HB5425/id/3428326",
        kind: "supplemental",
        type: "bill text context",
      },
      {
        label: "Michigan Public context",
        href: "https://www.michiganpublic.org/politics-government/2026-04-27/michigan-bills-would-ban-registered-sex-offenders-from-jobs-related-to-minors",
        kind: "supplemental",
        type: "media context",
      },
      {
        label: "Michigan Advance context",
        href: "https://michiganadvance.com/2026/02/25/michigan-house-panel-weighs-bills-preventing-sex-offenders-from-jobs-primarily-serving-children/",
        kind: "supplemental",
        type: "media context",
      },
    ],
    action: michiganAction,
  },

{
    id: 4,
    group: "Courts & Rights",
    title:
      "Nevada Del Toro decision preserves access to lifetime-supervision release",
    jurisdiction: "Nevada",
    date: "Decision issued May 7, 2026",
    summary:
      "Nevada’s high court rejected a reading that would have blocked lifetime-supervision release until the full registration period was completed.",
    tone: "emerald",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://cases.justia.com/nevada/supreme-court/2026-91210.pdf">
          Del Toro v. State
        </ExternalLink>
        , the Nevada Supreme Court held that “compliance” with registration requirements does not mean a person must complete the entire statutory registration period before petitioning for release from lifetime supervision.
      </>,
      "The court rejected the State’s full-registration-period argument. A person may still have registration obligations after release from lifetime supervision, but the running registration period does not automatically bar a supervision-release petition.",
      "The decision reverses a district court denial and clarifies that eligibility turns on compliance with registration obligations up to the time of petitioning, not on completion of the full registration term.",
    ],
    matters: [
      "This preserves a meaningful supervision-relief pathway. Without the decision, long registration periods could have functioned as automatic lifetime-supervision barriers, even when the person otherwise satisfied the statutory criteria for release.",
      "For registrants and families, the difference between continued registration and continued lifetime supervision can be substantial. Supervision can affect travel, housing, employment, family routines, privacy, treatment requirements, and the risk of technical violations.",
      "The ruling matters because it prevents one legal burden from being used to lock another in place. A person may still have to register, but that does not mean the state can automatically continue lifetime supervision on that basis alone.",
    ],
    analysis: [
      "SOLAR reads Del Toro as positive movement because it narrows an overbroad interpretation and preserves individualized access to relief. The decision does not end registration, but it stops registration duration from swallowing the separate supervision-release statute.",
      "This is the kind of procedural clarity that matters in real life. When courts require agencies and prosecutors to prove the exact legal barrier they claim, people have a fairer chance to pursue relief that the legislature already made available.",
    ],
    watch: [
      "How Nevada district courts apply Del Toro to Tier II and Tier III petitioners.",
      "Whether prosecutors attempt to narrow the decision in future cases or through legislative amendments.",
      "Whether defense counsel and impacted families use the ruling to revisit petitions previously discouraged by the State’s full-registration-period argument.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: [
        "Relief expansion",
        "Supervision burden",
        "Compliance clarity",
        "Court limitation",
      ],
      risk: ["Reform opening", "Watch closely", "Implementation risk"],
    },
    tags: ["Nevada", "lifetime supervision", "relief", "court ruling"],
    sources: [
      {
        label: "Del Toro opinion PDF",
        href: "https://cases.justia.com/nevada/supreme-court/2026-91210.pdf",
        kind: "official",
        type: "court opinion copy",
      },
      {
        label: "Justia case summary",
        href: "https://law.justia.com/cases/nevada/supreme-court/2026/91210.html",
        kind: "supplemental",
        type: "legal context",
      },
      {
        label: "CaseMine commentary",
        href: "https://www.casemine.com/commentary/us/compliance-%28not-completion%29-of-sex-offender-registration-satisfies-nrs-176.0931%283%29%28a%29-for-release-from-lifetime-supervision/view",
        kind: "supplemental",
        type: "legal analysis",
      },
    ],
  },
  {
    id: 5,
    group: "Courts & Rights",
    title:
      "New York SORA decisions recognize stability evidence but keep youth-risk rigidity in place",
    jurisdiction: "New York",
    date: "Decided May 28, 2026",
    summary:
      "New York’s high court issued a mixed SORA cluster: employment and family support can support departure arguments, but youth at offense remains trapped inside the current risk-tool framework.",
    tone: "indigo",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://law.justia.com/cases/new-york/court-of-appeals/2026/no-49.html">
          People v. Green
        </ExternalLink>
        , the Court of Appeals held that strong family support and gainful employment can legally qualify as mitigating circumstances not adequately captured by the SORA Guidelines, even though the defendant in that case did not prove entitlement to a departure.
      </>,
      <>
        In{" "}
        <ExternalLink href="https://law.justia.com/cases/new-york/court-of-appeals/2026/no-50-no-51.html">
          People v. Carnegie / People v. Dockery
        </ExternalLink>
        , the court held that youth at the time of the offense cannot be used as a mitigating basis for downward departure under the current Risk Assessment Instrument because the framework treats young age as aggravating. In{" "}
        <ExternalLink href="https://law.justia.com/cases/new-york/court-of-appeals/2026/no-48.html">
          People v. Townsend
        </ExternalLink>
        , the court affirmed an upward departure where prior conduct was found inadequately captured by the presumptive score.
      </>,
      "Together, the decisions clarify how New York courts may treat employment, family support, youth at offense, and prior history in upward and downward departure analysis.",
    ],
    matters: [
      "The useful part is Green. Employment and family support are not just character evidence; for many people, they are the foundations that reduce instability, support lawful routines, and help a person remain safely connected to community life.",
      "The limiting part is Carnegie/Dockery. Treating youth only as aggravating under the existing RAI can be out of step with modern risk and developmental evidence, especially where the person has aged, matured, completed treatment, or built a stable adult life.",
      "For families, these decisions affect risk level, public notification, registration duration, stigma, and whether stability evidence is taken seriously at the moment the state assigns a public risk label.",
    ],
    analysis: [
      "SOLAR reads the New York SORA cluster as mixed movement. Green opens a meaningful door for individualized evidence of work and family support, but Carnegie/Dockery shows how rigid instruments can still prevent courts from hearing evidence that may matter to actual risk.",
      "The broader lesson is that risk tools are policy choices, not neutral facts. When a tool treats youth as aggravating while excluding modern mitigation arguments, reform has to happen through litigation, Board reconsideration, or legislation.",
    ],
    watch: [
      "How lower courts apply Green and what evidence packages are needed to prove employment and family support as meaningful mitigation.",
      "Whether defense counsel builds stronger records around stability, housing, work, caregiving, and community support.",
      "Whether New York’s Board or legislature revisits youth-at-offense risk factors in light of developmental and desistance research.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Due-process concern",
        "Compliance clarity",
        "State-by-state variation",
        "Reentry barrier",
        "Evidence-based reform",
      ],
      risk: [
        "Reform opening",
        "Litigation risk",
        "Watch closely",
        "Clarification needed",
      ],
    },
    tags: ["New York", "SORA", "risk classification", "family support"],
    sources: [
      {
        label: "People v. Green",
        href: "https://law.justia.com/cases/new-york/court-of-appeals/2026/no-49.html",
        kind: "official",
        type: "court opinion",
      },
      {
        label: "People v. Carnegie / Dockery",
        href: "https://law.justia.com/cases/new-york/court-of-appeals/2026/no-50-no-51.html",
        kind: "official",
        type: "court opinion",
      },
      {
        label: "People v. Townsend",
        href: "https://law.justia.com/cases/new-york/court-of-appeals/2026/no-48.html",
        kind: "official",
        type: "court opinion",
      },
    ],
  },
  {
    id: 6,
    group: "Agencies / Implementation",
    title:
      "Federal SORNA/AWA funding remains an implementation signal for states and tribes",
    jurisdiction: "Federal / state / tribal implementation",
    date: "Grants.gov listing updated May 13, 2026",
    summary:
      "A May federal grant-listing update shows that SORNA implementation remains active through funding for registry systems, data exchange, NSOPW participation, and travel-notice capacity.",
    tone: "indigo",
    changed: [
      <>
        The{" "}
        <ExternalLink href="https://simpler.grants.gov/opportunity/c6927d71-c37b-4e42-b394-b9ee9aaddd82">
          SMART FY25 Support for Adam Walsh Act Implementation Grant Program
        </ExternalLink>{" "}
        listing was updated in May and remains a useful signal of federal implementation pressure even though it is not a new statute.
      </>,
      "The program supports jurisdictions developing or enhancing SORNA programs, including registry information collection, interjurisdictional exchange, NSOPW participation, and international-travel notice systems.",
      "Related FY25 SORNA funding materials also point toward ongoing federal support for state and tribal registry modernization and enforcement infrastructure.",
    ],
    matters: [
      "Agency funding can reshape registry life without a headline bill. New money can support data systems, automated exchange, public-notification tools, travel-notice processes, and enforcement coordination.",
      "That can increase compliance pressure for registrants and families, especially where agencies modernize enforcement faster than they modernize accessible guidance, error correction, language access, or due-process protections.",
      "There is also a transparency opportunity. If jurisdictions use funds to improve data quality, correct errors, and publish plain-language compliance rules, implementation could reduce some harm even within a flawed registry framework.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement because the grant listing does not directly change anyone’s legal duties by itself. Its impact depends on what jurisdictions receive funds and whether projects prioritize enforcement capacity, accuracy, public guidance, or all of the above.",
      "The watch item is important because registry systems are often experienced through agency practice: databases, notices, forms, deadlines, travel instructions, and local interpretation. Implementation can be where a law becomes either clearer or more punitive in everyday life.",
    ],
    watch: [
      "Award announcements and recipient jurisdictions.",
      "Project descriptions showing whether funds support enforcement-heavy systems or also include data accuracy, error correction, and accessible compliance guidance.",
      "Whether agencies publish public-facing implementation materials before changing procedures that registrants must follow.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: [
        "Agency implementation",
        "Compliance burden",
        "Compliance clarity",
        "Public notification",
        "Online identifiers",
      ],
      risk: ["Watch closely", "Implementation risk", "Transparency opportunity"],
    },
    tags: ["federal", "SORNA", "AWA", "implementation funding"],
    sources: [
      {
        label: "Grants.gov AWA implementation listing",
        href: "https://simpler.grants.gov/opportunity/c6927d71-c37b-4e42-b394-b9ee9aaddd82",
        kind: "official",
        type: "official grant listing",
      },
      {
        label: "SMART/OJP NOFO PDF",
        href: "https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/SMART%20FY25%20Support%20for%20Adam%20Walsh%20Act%20Implementation%20Grant%20Program_0.pdf",
        kind: "official",
        type: "official agency notice",
      },
      {
        label: "BJA SORNA funding page",
        href: "https://bja.ojp.gov/funding/opportunities/o-bja-2025-172571",
        kind: "official",
        type: "official agency funding page",
      },
    ],
    action: {
      title: "Ask agencies to prioritize accuracy and plain-language guidance",
      why:
        "SORNA implementation funds can improve systems or intensify enforcement without clarity. Agencies should build correction, notice, and guidance safeguards into any funded project.",
      label: "Track awards",
      href: "https://simpler.grants.gov/opportunity/c6927d71-c37b-4e42-b394-b9ee9aaddd82",
      message:
        "Please ensure any SORNA implementation project prioritizes data accuracy, accessible compliance guidance, error correction, due process, and clear public notice before enforcement changes take effect.",
    },
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "California AB 1568",
    posture: "In Senate Rules after Assembly passage.",
    why:
      "The bill could make registry termination harder, more expensive, and more dependent on paperwork or assessment access.",
    next: [
      "Watch for Senate committee assignment.",
      "Track amendments on remote appearances, treatment-record gaps, and assessment-cost protections.",
    ],
  },
  {
    title: "Michigan HB 5425/HB 5426",
    posture:
      "Referred to the Senate Civil Rights, Judiciary, and Public Safety Committee.",
    why:
      "The package would create a categorical employment ban and new criminal penalties tied to registry status.",
    next: [
      "Watch for a Senate hearing.",
      "Look for amendments adding individualized-risk exceptions and narrower covered-business language.",
    ],
  },
  {
    title: "Missouri SB 982",
    posture: "Signed; effective August 28, 2026.",
    why:
      "The law has mixed relief and compliance effects that will depend heavily on agency and court implementation.",
    next: [
      "Watch for Missouri State Highway Patrol guidance.",
      "Track court treatment of removal petitions and temporary-residence enforcement.",
    ],
  },
  {
    title: "Florida HB 45 / SB 212",
    posture: "July 1, 2026 effective-date watch; not included as a May development.",
    why:
      "Public-pool and public-bathing-place restrictions, notice provisions, and arrest authority could create new housing and compliance burdens.",
    next: [
      "Watch for FDLE or local guidance before July 1.",
      "Track early enforcement patterns or litigation.",
    ],
  },
  {
    title: "Indiana SEA 119",
    posture: "July 1, 2026 effective-date watch; not included as a May development.",
    why:
      "Presence and work restrictions tied to serious sex offenders and child-directed places or events may create new compliance questions.",
    next: [
      "Watch for official law-enforcement guidance.",
      "Track whether local notices become statewide implementation materials.",
    ],
  },
  {
    title: "New York SORA youth/risk-factor reform",
    posture:
      "Court of Appeals decisions left the current RAI treatment of youth as aggravating.",
    why:
      "The framework may be out of step with developmental evidence and individualized risk assessment.",
    next: [
      "Watch for Board reconsideration, legislative proposals, or new litigation using research-backed mitigation evidence.",
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  californiaAction,
  michiganAction,
  missouriAction,
];

export default function LegislativeTrackerMay2026Update(): JSX.Element {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1400);
    } catch {
      setCopiedId(null);
    }
  };

  const grouped = developments.reduce<Record<string, Development[]>>(
    (acc, item) => {
      acc[item.group] = acc[item.group] ?? [];
      acc[item.group].push(item);
      return acc;
    },
    {}
  );

  return (
    <main className="min-h-screen bg-slate-100">
      <SEO
        title="Legislative Tracker — May 2026 Update | The SOLAR Project"
        description="May 2026 SOLAR Legislative Tracker update covering Missouri SB 982, California AB 1568, Michigan HB 5425/HB 5426, Nevada Del Toro, New York SORA decisions, and federal SORNA implementation funding."
        canonical={canonicalUrl}
      />

      <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <Link
            to="/resources/legislative-tracker"
            className="text-sm font-semibold text-white/90 underline underline-offset-4 hover:text-white print:hidden"
          >
            ← Back to Legislative Tracker
          </Link>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Legislative Tracker</Badge>
            <Badge>Monthly Update</Badge>
            <Badge>State / Courts / Agencies</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — May 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            May was a mixed but registry-heavy month: Missouri enacted broad
            registry restructuring, California and Michigan advanced bills that
            could increase relief and employment barriers, courts issued
            important supervision and SORA rulings, and federal implementation
            funding remained active.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This update covers meaningful developments from May 1–31, 2026,
              including signed legislation, active state bills, published court
              decisions, and agency implementation signals with registry-policy
              consequences.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-bold text-slate-900 shadow hover:bg-slate-100"
            >
              Print
            </button>
            <a
              href="#glance"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              At a Glance
            </a>
            <a
              href="#throughline"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              Throughline
            </a>
            <a
              href="#developments"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              Action Center
            </a>
          </div>

          <div className="mt-6">
            <ShareBar />
          </div>
        </div>
      </header>

<div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
        <Section id="glance" eyebrow="At a Glance" title="What May moved">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-black text-slate-950">
              Why this update matters
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              May shows how registry policy changes on several fronts at once:
              legislatures can add new barriers to relief and work, courts can
              preserve narrow paths to individualized review, and agencies can
              reshape compliance life through implementation funding even when
              no new statute is enacted.
            </p>
          </div>
        </Section>

        <Section
          id="throughline"
          eyebrow="Monthly Throughline"
          title="The bigger pattern behind this update"
        >
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            <p>
              May’s clearest pattern is not a simple win-or-loss story. It is
              the continued use of registry status as a gatekeeping tool for
              ordinary stability: work, travel, court relief, supervision, and
              family life. That is exactly why SOLAR’s{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              work keeps returning to individualized assessment rather than
              broad status-based punishment.
            </p>
            <p>
              Missouri’s SB 982 shows how relief pathways can be real and
              fragile at the same time. California and Michigan show how quickly
              lawmakers can make relief or employment harder to reach, even when
              the stated goal is public safety. For impacted households, the
              practical question is often not abstract legal doctrine, but
              whether a family can keep housing, work, treatment, and caregiving
              routines intact; SOLAR’s{" "}
              <InternalLink to="/resources">plain-language resources</InternalLink>{" "}
              exist for that day-to-day navigation.
            </p>
            <p>
              The court developments point in both directions. Nevada limited an
              overbroad supervision argument, while New York created a narrow
              opening for employment and family support in SORA classification
              but left youth-risk reform unresolved. Together with federal
              SORNA implementation funding, the month belongs in the{" "}
              <InternalLink to="/resources/legislative-tracker">
                Legislative Tracker archive
              </InternalLink>{" "}
              as a reminder that the registry is not only a list; it is an
              expanding system of rules, databases, courts, agencies, and
              collateral barriers.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="May 2026 developments"
        >
          <div className="space-y-6">
            {Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">
                    {group}
                  </h3>
                </div>
                <div className="grid gap-4">
                  {items.map((development) => (
                    <DevelopmentCard
                      key={development.id}
                      development={development}
                      copiedId={copiedId}
                      onCopy={copyText}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="actions"
          eyebrow="Action Center"
          title="Most useful action paths"
        >
          <p className="text-sm leading-6 text-slate-700">
            These are the clearest May action paths for registrants, families,
            and reform advocates. The goal is not to repeat every source link;
            it is to focus attention on live decisions where public input,
            implementation monitoring, or documentation can still matter.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {actionCenterItems.map((action, index) => (
              <ActionCard
                key={action.title}
                action={action}
                copied={copiedId === `action-${index}`}
                onCopy={() => copyText(`action-${index}`, action.message)}
              />
            ))}
          </div>
        </Section>

        <Section id="watchlist" eyebrow="Rolling Watchlist" title="What to watch next">
          <div className="grid gap-4">
            {watchlist.map((item) => (
              <WatchItem key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="methodology"
          eyebrow="Source Note"
          title="How SOLAR tracks and vets this"
        >
          <div className="space-y-3 text-sm leading-6 text-slate-700">
            <p>
              SOLAR prioritizes official sources first: bill pages, enacted
              laws, court opinions, agency notices, government reports, grant
              listings, and official public materials. Reporting, advocacy
              explainers, and civic-data sources may be used as supplemental
              context, but they do not replace official sources when official
              sources are available.
            </p>
            <p>
              This May update preserves the approved item set and distinguishes
              included developments from borderline watchlist items. Florida and
              Indiana July 1 effective-date issues remain on the watchlist
              because they are substantively important but did not have a strong
              official May event in this pass.
            </p>
            <p>
              The purpose of this tracker is to identify legal and policy
              developments that affect registry duties, reentry, housing, family
              stability, relief pathways, due process, supervision, employment,
              agency implementation, and evidence-based reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "6 key developments across state legislation, courts, and federal implementation.",
    "Missouri enacted SB 982, a broad registry restructuring bill with both relief and compliance consequences.",
    "California AB 1568 and Michigan HB 5425/HB 5426 are the month’s clearest live action items.",
    "Nevada’s Del Toro ruling preserved access to lifetime-supervision release without requiring completion of the full registration period first.",
  ],
  highlights: [
    {
      icon: "state",
      title:
        "Missouri SB 982 becomes the month’s biggest enacted registry restructuring item.",
      url: `/resources/legislative-tracker/${slug}#developments`,
    },
    {
      icon: "action",
      title:
        "California and Michigan bills could increase practical barriers to relief and employment.",
      url: `/resources/legislative-tracker/${slug}#actions`,
    },
    {
      icon: "court",
      title:
        "Nevada and New York court rulings show both relief openings and risk-classification limits.",
      url: `/resources/legislative-tracker/${slug}#developments`,
    },
  ],
};