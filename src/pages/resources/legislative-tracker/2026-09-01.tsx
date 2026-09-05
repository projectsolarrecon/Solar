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

const slug = "2026-09-01";
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
          <SourcePill key={source.href} source={source} />
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
    value: "9",
    body:
      "State implementation, registration expansion, relief exclusion, removal access, classification procedure, retroactivity, and systemic litigation all landed inside the August window.",
  },
  {
    label: "Dominant Posture",
    value: "Mixed",
    body:
      "Implementation drove the month: Missouri and Louisiana laws became operative while courts split between procedural protections and relief-limiting rulings.",
  },
  {
    label: "Rights / Reform / Litigation Counterpoint",
    value: "5",
    body:
      "Massachusetts, North Carolina, Tennessee, Florida, and Puerto Rico show how classification, removal, public labeling, and timing rules shape real access to relief.",
  },
  {
    label: "Action Paths",
    value: "4",
    body:
      "The most useful actions focus on Missouri implementation guidance, Louisiana legislative fixes, Florida docket monitoring, and legal education around removal and classification rights.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "State Implementation / Registry Expansion",
    title:
      "Missouri SB 982 takes effect with a broad registry rewrite",
    jurisdiction: "Missouri",
    date: "Effective August 28, 2026",
    summary:
      "Missouri’s August effective date matters because SB 982 reshapes who must register, how tiers are assigned, how removal and exemption paths work, and what registry information remains public.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026">
          Missouri SB 982
        </ExternalLink>{" "}
        took effect on August 28 and moves core registration triggers toward
        tier-classified offenses while also addressing out-of-state registration,
        temporary residence, work, volunteer, and student connections to
        Missouri.
      </>,
      "The law gives registration officials the initial tier determination, with Missouri State Highway Patrol review, and ties regular in-person appearances to tier: annually, every six months, or every 90 days.",
      <>
        The new framework also changes removal and exemption procedures,
        allows some successive petitions within five years when an earlier
        denial rested on law later amended, repealed, or invalidated, requires
        international-travel forms at least 21 days before travel, and adjusts
        public-record rules for registry statements, lists, and metadata.
      </>,
    ],
    matters: [
      "This is the month’s largest statutory implementation item because it changes both front-end registration duties and back-end relief procedures. For impacted people, the practical question is not only whether Missouri labels the change as administrative, but whether everyday decisions about work, school, volunteering, temporary stays, and travel now carry new reporting risk.",
      "Families should treat the August 28 effective date as a compliance-reset moment. Three-business-day deadlines, tier-based appearances, temporary-residence rules, fees, international-travel notice, and out-of-state registration treatment may affect housing plans, caregiving, employment, education, and travel.",
      "The limited relief mechanisms matter, but they sit inside a broader system that still turns legal classification into recurring police contact, public exposure, and ordinary-life barriers.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because SB 982 may create clearer rules and some relief openings, but it also regularizes and expands compliance exposure across more parts of ordinary life.",
      "The implementation risk is high: county registration officials, MSHP review, courts, and out-of-state comparability decisions can produce inconsistent outcomes unless Missouri provides clear, public, plain-language guidance.",
    ],
    watch: [
      "Whether MSHP issues implementation guidance on tier review, temporary residence, nonresident work or school obligations, and international-travel forms.",
      "How courts handle exemption and removal petitions under the revised procedures, especially petitions tied to law that later changed.",
      "Whether out-of-state registrants face inconsistent tier or registration determinations across counties.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance burden",
        "Compliance clarity",
        "Relief expansion",
        "Public notification",
        "Online identifiers",
        "Travel reporting",
        "Reentry barrier",
      ],
      risk: ["Watch closely", "Implementation risk", "Advocacy opening", "Clarification needed"],
    },
    tags: ["Missouri", "implementation", "tiering", "removal", "travel"],
    sources: [
      {
        label: "Missouri Senate SB 982 bill information",
        href: "https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026",
        kind: "official",
        type: "official bill source",

      },
      {
        label: "Missouri Revisor — RSMo § 589.400",
        href: "https://www.revisor.mo.gov/main/OneSection.aspx?bid=60517&hl=+to+589.%25u2044589.404&hlr=y&section=589.400",
        kind: "official",
        type: "official statutory source",
      },
      {
        label: "Missouri Revisor — RSMo § 589.417",
        href: "https://revisor.mo.gov/main/OneSection.aspx?bid=60530&hl=&section=589.417",
        kind: "official",
        type: "official statutory source",
      },
      {
        label: "Missouri Governor signing notice",
        href: "https://governor.mo.gov/press-releases/archive/governor-kehoe-signs-eight-bills-law",
        kind: "official",
        type: "official executive source",
      },
    ],
    action: {
      title: "Ask Missouri officials for plain-language implementation guidance",
      why:
        "A broad registry rewrite can create compliance traps unless people can understand tier review, temporary residence, travel reporting, and removal procedures before enforcement begins.",
      label: "Missouri Legislator Lookup",
      href: "https://www.senate.mo.gov/BillTracking/LegislatorLookup/",
      message:
        "Please ask Missouri officials and MSHP to publish clear, plain-language guidance on SB 982 implementation, including tier review, temporary residence, nonresident work and school obligations, travel reporting, fees, and removal or exemption procedures.",
    },
  },
  {
    id: 2,
    group: "State Implementation / Registry Expansion",
    title:
      "Louisiana Act 361 adds registration for a second commercial-sex-purchase conviction",
    jurisdiction: "Louisiana",
    date: "Effective August 1, 2026",
    summary:
      "Louisiana expanded registration exposure by moving a second conviction for purchasing commercial sexual activity into the sex-offense registration framework and pairing it with a mandatory custodial floor.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.legis.la.gov/Legis/BillInfo.aspx?i=250243">
          Louisiana SB 199
        </ExternalLink>{" "}
        became Act 361 and took effect August 1. The enacted law amends
        R.S. 14:82.2(C)(2) and R.S. 15:541(24)(a), making a second conviction
        for purchase of commercial sexual activity a registration-triggering sex
        offense.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://www.legis.la.gov/legis/ViewDocument.aspx?d=1478341">
          enrolled act
        </ExternalLink>{" "}
        also imposes imprisonment of six months to two years, with at least six
        months served without benefit of probation, parole, or suspension of
        sentence.
      </>,
    ],
    matters: [
      "This is direct registration expansion. It moves commercial-sex enforcement into long-term registry consequences without requiring an individualized finding that public registration is necessary for safety.",
      "For a person and family facing a second conviction, the consequence is not only a jail or prison term. Registration can add public notification, housing exclusion, employment barriers, travel complications, family instability, and recurring compliance duties after the criminal sentence.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands the registry’s reach and attaches public, long-term status consequences to a new category of conviction.",
      "The public-safety question should be evidence and individualized risk, not whether lawmakers can convert more offenses into permanent registration triggers as a symbolic enforcement response.",
    ],
    watch: [
      "Early prosecutions after the August 1 effective date and how courts explain the registration consequence at plea or sentencing.",
      "Whether defense counsel raise notice, proportionality, or individualized-assessment arguments.",
      "Whether Louisiana clarifies duration, tier consequences, and collateral impacts for people convicted under the amended provision.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Punishment expansion",
        "Reentry barrier",
        "Compliance burden",
        "Public notification",
        "Housing barrier",
        "Employment barrier",
      ],
      risk: ["Watch closely", "Enforcement risk", "Litigation risk"],
    },
    tags: ["Louisiana", "registration trigger", "mandatory sentence"],
    sources: [
      {
        label: "Louisiana SB 199 bill page",
        href: "https://www.legis.la.gov/Legis/BillInfo.aspx?i=250243",
        kind: "official",
        type: "official bill source",
      },
      {
        label: "Louisiana Act 361 enrolled text",
        href: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1478341",
        kind: "official",
        type: "official enacted law",
      },
    ],
    action: {
      title: "Ask Louisiana lawmakers to review new registration triggers",
      why:
        "Registration expansion should be evidence-based and proportionate, with individualized review instead of automatic public consequences attached by offense category alone.",
      label: "Louisiana Find My Legislators",
      href: "https://legis.la.gov/legis/FindMyLegislators.aspx",
      message:
        "Please review Act 361’s new registration trigger and support evidence-based limits, individualized review, and proportionality before Louisiana expands public registration consequences to additional offenses.",
    },
  },
  {
    id: 3,
    group: "Compliance Notice / Supervision",
    title:
      "Louisiana Act 123 formalizes court notice and supervised-release venue rules",
    jurisdiction: "Louisiana",
    date: "Effective August 1, 2026",
    summary:
      "Louisiana’s revised court-notice form may improve formal warning, but it also reinforces the paperwork architecture later used to prosecute alleged registration and supervised-release violations.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.legis.la.gov/legis/ViewDocument.aspx?d=1475078">
          Louisiana Act 123 / HB 125
        </ExternalLink>{" "}
        took effect August 1 and updates the written court notification form
        tied to registration, notification, and supervised release.
      </>,
      "The notice language more expressly names registration periods, reporting intervals, required reporting items, temporary lodging and international-travel notice, community notification duties, annual fees, and failure-to-comply penalties.",
      "The act also adds venue rules allowing supervised-release violations to be prosecuted where the supervising court acted or where the alleged violation occurred.",
    ],
    matters: [
      "The law does not merely clean up a form. In registry practice, court notices become the compliance roadmap that officials later point to when alleging technical violations.",
      "Clear notice can help people understand duties, but the same notice infrastructure can also harden enforcement if forms are incomplete, rushed, not explained, or not paired with accessible copies of referenced statutes.",
      "For families, clearer written rules may reduce confusion only if courts apply them consistently and people leave court with practical instructions they can actually follow.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because better notice can support compliance clarity, while broader venue language and formalized warning structures can increase supervision and enforcement exposure.",
      "The implementation question is whether Louisiana uses the form to prevent technical violations or simply to strengthen prosecution after confusion occurs.",
    ],
    watch: [
      "Whether courts consistently use the updated form and provide copies of all referenced registration, notification, and supervision statutes.",
      "Whether venue changes lead prosecutors to choose broader or more strategic venues for alleged supervised-release violations.",
      "Whether technical-violation filings increase after the August 1 implementation date.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance clarity",
        "Compliance burden",
        "Supervision burden",
        "Travel reporting",
        "Online identifiers",
        "Public notification",
      ],
      risk: ["Implementation risk", "Enforcement risk", "Clarification needed"],
    },
    tags: ["Louisiana", "notice", "supervised release", "venue"],
    sources: [
      {
        label: "Louisiana Act 123 / HB 125 enrolled act",
        href: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1475078",
        kind: "official",
        type: "official enacted law",
      },
      {
        label: "Louisiana HB 125 status mirror",
        href: "https://legiscan.com/LA/bill/HB125/2026",
        kind: "supplemental",
        type: "legislative tracking source",
      },
    ],
    action: {
      title: "Ask for plain-language court notices and delivery safeguards",
      why:
        "Notice only protects people when it is understandable, complete, consistently used, and paired with access to the statutes and reporting instructions it references.",
      label: "Louisiana Find My Legislators",
      href: "https://legis.la.gov/legis/FindMyLegislators.aspx",
      message:
        "Please support plain-language registration and supervised-release notices, confirmed delivery of all referenced statutes, and safeguards that prevent technical-violation prosecutions based on confusing or incomplete instructions.",
    },
  },
  {
    id: 4,
    group: "Relief, Removal, and Exclusions",
    title:
      "Louisiana Act 526 creates survivor-clemency access but excludes registration-triggering offenses",
    jurisdiction: "Louisiana",
    date: "Effective August 1, 2026",
    summary:
      "Louisiana recognized trauma and survivor-victimization as relevant to mercy, but kept registration-triggering offenses outside the immediate clemency pathway.",
    tone: "indigo",
    changed: [
      <>
        <ExternalLink href="https://legis.la.gov/legis/ViewDocument.aspx?d=1483939">
          Louisiana Act 526
        </ExternalLink>{" "}
        took effect August 1 and allows some people who were documented victims
        of domestic abuse, human trafficking, or sexual assault at the time of
        the conviction offense to immediately apply for pardon or commutation.
      </>,
      <>
        The reform includes exceptions, including offenses requiring
        sex-offender registration, death sentences, certain terrorism offenses,
        and a delayed route for some life sentences for crimes of violence. The
        bill materials also direct the Board of Pardons to review and adopt
        needed rules and procedures.
      </>,
    ],
    matters: [
      "This is not positive movement for SOLAR’s registry-impacted audience because the law excludes people convicted of registration-triggering offenses from the immediate pathway.",
      "The policy signal is still important. Louisiana acknowledged that survivor status can matter to mercy, culpability, and second chances, but then treated registration as a categorical line that blocks individualized review.",
      "For registrants and families, that means the legal position may not worsen, but the reform leaves intact the idea that registration status can override evidence of trauma, growth, context, or rehabilitation.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement with a relief-exclusion warning: the law helps some people, but it does not directly improve relief access for registrants.",
      "The missed opportunity is the same pattern seen in many second-chance reforms: lawmakers recognize rehabilitation for others while preserving registration as a permanent exclusion category.",
    ],
    watch: [
      "Board of Pardons rulemaking and whether procedures make the new clemency pathway accessible for eligible survivors.",
      "Future amendments that replace categorical exclusions with individualized review.",
      "Whether advocates build a record showing why registration status should not automatically erase survivor context.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Relief exclusion", "Reentry barrier", "Missed opportunity"],
      risk: ["Advocacy opening", "Watch closely"],
    },
    tags: ["Louisiana", "clemency", "relief exclusion", "survivor pathway"],
    sources: [
      {
        label: "Louisiana Act 526 résumé digest",
        href: "https://legis.la.gov/legis/ViewDocument.aspx?d=1483939",
        kind: "official",
        type: "official legislative digest",
      },
      {
        label: "SB 523 engrossed digest",
        href: "https://legis.la.gov/legis/ViewDocument.aspx?d=1463844",
        kind: "official",

        type: "official bill text / digest",
      },
    ],
    action: {
      title: "Support individualized clemency eligibility",
      why:
        "A trauma-informed mercy pathway should not automatically exclude every person with a registration-triggering conviction without individualized review.",
      label: "Louisiana Find My Legislators",
      href: "https://legis.la.gov/legis/FindMyLegislators.aspx",
      message:
        "Please support future amendments to Louisiana’s survivor-clemency law that allow individualized review instead of categorical exclusion for all registration-triggering offenses.",
    },
  },
  {
    id: 5,
    group: "Relief, Removal, and Exclusions",
    title:
      "North Carolina Supreme Court raises the stakes for registry-removal appeals",
    jurisdiction: "North Carolina",
    date: "Decided August 14, 2026",
    summary:
      "State v. Lingerfelt warns that an unappealed earlier SORNA tier ruling can bind a later removal petition and delay relief for years.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.nccourts.gov/documents/appellate-court-opinions/state-v-lingerfelt-0">
          State v. Lingerfelt
        </ExternalLink>
        , the North Carolina Supreme Court held that successive petitions to
        terminate registration are part of the same underlying proceeding for
        law-of-the-case purposes.
      </>,
      "Because the petitioner did not appeal a 2019 order treating him as Tier II and therefore not eligible for removal until 25 years after initial registration, the court held he could not relitigate that tier issue in a 2023 petition.",
      "The court distinguished legal SORNA tier determinations, which it treated as preclusion-sensitive, from discretionary threat-to-public-safety determinations that may change in later petitions.",
    ],
    matters: [
      "This ruling makes the first adverse tier decision appeal-critical. A person can lose years of potential relief not because of current risk, but because a legal classification issue was not appealed at the right moment.",
      "For families, that can mean continued registration, housing and employment barriers, public exposure, and compliance obligations tied to procedural default rather than a fresh assessment of present circumstances.",
      "The decision also underscores why plain-language legal education matters: removal petitions are often navigated by people who may not understand that a tier ruling must be challenged immediately.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it restricts practical access to removal by converting an earlier unappealed tier determination into a barrier in later proceedings.",
      "The public-safety value is thin when procedural finality blocks review of whether continued registration is actually justified years later.",
    ],
    watch: [
      "Whether future North Carolina cases narrow the holding or distinguish different kinds of tier errors.",
      "Whether lawmakers clarify that each removal petition permits fresh tier review.",
      "Whether trial courts provide clear warnings that adverse SORNA tier rulings must be appealed promptly.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief restriction", "Due-process concern", "Reentry barrier", "SORNA tiering"],
      risk: ["Watch closely", "Litigation risk", "Advocacy opening"],
    },
    tags: ["North Carolina", "removal", "SORNA tiering", "law of the case"],
    sources: [
      {
        label: "North Carolina Judicial Branch — State v. Lingerfelt",
        href: "https://www.nccourts.gov/documents/appellate-court-opinions/state-v-lingerfelt-0",
        kind: "official",
        type: "official court opinion page",
      },
      {
        label: "State v. Lingerfelt opinion text via Justia",
        href: "https://law.justia.com/cases/north-carolina/supreme-court/2026/38a25.html",
        kind: "supplemental",
        type: "court opinion mirror",
      },
    ],
  },
  {
    id: 6,
    group: "Courts & Rights",
    title:
      "Massachusetts SJC requires a renewed SORB classification process with expert funding",
    jurisdiction: "Massachusetts",
    date: "Decided August 18, 2026",
    summary:
      "The Massachusetts high court strengthened procedural fairness by holding that expert evidence on current research can matter when dangerousness assumptions drive classification.",
    tone: "emerald",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.mass.gov/doc/doe-sorb-no-526105-v-sex-offender-registry-board-sjc-d13847/download">
          Doe, SORB No. 526105 v. Sex Offender Registry Board
        </ExternalLink>
        , the Massachusetts Supreme Judicial Court vacated the judgment and
        remanded for further SORB proceedings with expert funding.
      </>,
      "The court did not decide the broader constitutional question about use of multiple pre-arrest or pre-conviction offenses in dangerousness analysis under factor 37. Instead, it held that denying funds for expert testimony was an abuse of discretion where current research on repetitive offenses and dangerousness was relevant.",
      "The practical result is a renewed classification process for the registrant and a stronger argument that contested empirical-risk assumptions should not go unanswered in Level 2 classification disputes.",
    ],
    matters: [
      "Registry classification often controls public exposure, stigma, housing and employment barriers, and family stress. When an agency relies on assumptions about risk or dangerousness, the person facing classification needs a meaningful chance to challenge those assumptions.",
      "Expert funding matters because empirical questions are not always within the reach of a layperson. Without expert support, a classification hearing can become a one-sided proceeding where old assumptions carry more weight than current research.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because it strengthens due-process protections and reinforces the role of evidence in registry classification.",
      "The decision does not end classification burdens, but it creates a practical opening for advocates to insist that risk labels be grounded in current research, not agency shorthand or unsupported assumptions.",
    ],
    watch: [
      "The SORB remand outcome and whether expert testimony changes the classification analysis.",
      "Whether Massachusetts courts apply the reasoning to other factor-based classification disputes.",
      "Whether counsel preserve expert-funding requests in cases involving contested empirical claims.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Due-process concern", "Compliance clarity", "Evidence-based reform", "Court limitation"],
      risk: ["Advocacy opening", "Watch closely"],
    },
    tags: ["Massachusetts", "classification", "expert funding", "due process"],
    sources: [
      {
        label: "Massachusetts SJC opinion",
        href: "https://www.mass.gov/doc/doe-sorb-no-526105-v-sex-offender-registry-board-sjc-d13847/download",
        kind: "official",
        type: "official court opinion",
      },
    ],
  },
  {
    id: 7,
    group: "Courts & Rights",
    title:
      "Tennessee court narrows Doe v. Lee injunction but preserves challenge to categorical public label",
    jurisdiction: "Tennessee / federal",
    date: "Order dated August 5, 2026",
    summary:
      "The ruling is a mixed signal: broad preliminary relief from Tennessee’s registry narrowed, but the court kept protection against publishing a categorical child-offender label without individualized assessment.",
    tone: "amber",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://law.justia.com/cases/federal/district-courts/tennessee/tnedce/3%3A2021cv00010/98335/101/">
          Doe v. Lee
        </ExternalLink>
        , the federal district court dissolved most of an earlier preliminary
        injunction after Sixth Circuit precedent changed the governing law.
      </>,
      "The plaintiff no longer has broad preliminary relief from Tennessee’s SORVTA registry, reporting, and restriction framework at this stage.",
      "The court kept a narrow injunction against TBI Director David Rausch publicly publishing the plaintiff’s categorical classification as an “offender against children,” reasoning that the public label was tied to dangerousness, postdated the convictions, and lacked individualized assessment.",
    ],
    matters: [
      "The ruling limits broad retroactivity relief, which is a setback for people seeking immediate removal from Tennessee’s registry through similar preliminary-injunction theories.",
      "At the same time, the court preserved an important opening against public labels that imply present dangerousness without individualized review. That matters because public registry labels can shape employment, housing, family life, and community treatment even when the label is mechanically assigned.",
      "For registrants and families, the danger is not only appearing in a database; it is being publicly sorted into a risk category that may not reflect current circumstances.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because the court narrowed broad relief while still recognizing a constitutional problem with categorical public labeling.",
      "The decision shows the litigation terrain after recent Sixth Circuit rulings: registry systems may survive some broad attacks, while narrower challenges to public dangerousness labels may remain viable.",
    ],
    watch: [
      "Further proceedings against local enforcement defendants and whether the plaintiff seeks broader relief through amended claims.",
      "Whether Tennessee changes public classification practices or adds individualized assessment before publishing similar labels.",
      "Whether other plaintiffs focus on categorical public labels as distinct from registration itself.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Retroactivity concern",
        "Public notification",
        "Due-process concern",
        "Court limitation",
        "Public-labeling risk",
      ],
      risk: ["Appeal likely", "Watch closely", "Litigation risk"],
    },
    tags: ["Tennessee", "retroactivity", "public labeling", "SORVTA"],
    sources: [
      {
        label: "Doe v. Lee order text via Justia",
        href: "https://law.justia.com/cases/federal/district-courts/tennessee/tnedce/3%3A2021cv00010/98335/101/",
        kind: "supplemental",
        type: "court order mirror",
      },
      {
        label: "PACER federal records portal",
        href: "https://www.pacer.uscourts.gov/",
        kind: "official",
        type: "official federal docket-access source",
      },
    ],
  },
  {
    id: 8,
    group: "Courts & Rights",
    title:
      "Florida Action Committee files systemic federal challenge to Florida’s registry and local restrictions",
    jurisdiction: "Florida / federal",
    date: "Filed August 11, 2026",
    summary:
      "FAC v. Glass is only at the complaint stage, but it gives Florida registrants and families a major new litigation vehicle challenging cumulative registry punishment and layered local restrictions.",
    tone: "indigo",
    changed: [
      <>
        <ExternalLink href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf">
          Florida Action Committee v. Glass
        </ExternalLink>{" "}
        was filed August 11 in the U.S. District Court for the Northern District
        of Florida as Case No. 4:26-cv-00388-MW-MJF.
      </>,
      "The complaint seeks declaratory and injunctive relief against FDLE Commissioner Mark Glass and many counties and municipalities that enforce additional residence or presence restrictions.",
      "The filing challenges Florida’s registry and local restriction architecture as a cumulative system, raising theories that include the Eighth Amendment, Ex Post Facto Clause, right to travel, due process and vagueness, and the First Amendment.",
    ],
    matters: [
      "No court has granted merits relief yet, so the immediate legal posture is uncertain. But the filing matters because it targets the combined system rather than only one isolated rule.",
      "Florida’s registry and local restrictions affect housing, employment, family life, travel, homelessness, public exposure, and ordinary movement. A systemic challenge can help courts see how separate rules stack into practical punishment.",
      "For families, the lawsuit names the lived reality often missing from narrow legal analysis: the burden is cumulative, local, public, and continuous.",
    ],
    analysis: [
      "SOLAR reads this as unclear movement because a complaint does not change the law by itself, but it creates a significant reform and litigation opening.",
      "The opportunity is to build a record that shows cumulative registry punishment in ordinary life, especially where state and local rules interact to destabilize housing, work, family support, and travel.",
    ],
    watch: [
      "Motion-to-dismiss briefing and whether local defendants move separately or seek severance.",
      "Whether FAC seeks preliminary relief and whether the court reaches cumulative-punishment theories.",
      "Whether lived-experience declarations document housing, employment, family, travel, and homelessness impacts.",
    ],
    chips: {
      movement: ["Unclear movement"],
      impact: [
        "Litigation risk",
        "Due-process concern",
        "Housing barrier",
        "Family-stability impact",
        "Rights concern",
        "Retroactivity concern",
      ],
      risk: ["Watch closely", "Appeal likely", "Advocacy opening"],
    },
    tags: ["Florida", "federal litigation", "local restrictions", "cumulative punishment"],
    sources: [
      {
        label: "FAC v. Glass complaint",
        href: "https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf",
        kind: "supplemental",
        type: "ECF-stamped complaint copy hosted by plaintiff organization",
      },
      {
        label: "Northern District of Florida PACER information",
        href: "https://www.flnd.uscourts.gov/pacer-info",
        kind: "official",
        type: "official court docket-access source",
      },
      {
        label: "FAC announcement",
        href: "https://floridaactioncommittee.org/florida-action-committee-files-landmark-federal-constitutional-challenge-to-floridas-sex-offender-registry-laws/comment-page-1/",
        kind: "supplemental",
        type: "advocacy-context / case-filing source",
      },
    ],
    action: {
      title: "Track the Florida federal docket and document real-world burdens",
      why:
        "Systemic litigation depends on showing how registry rules and local restrictions combine to affect housing, work, family stability, travel, and homelessness.",
      label: "Northern District PACER information",
      href: "https://www.flnd.uscourts.gov/pacer-info",
      message:
        "Please monitor FAC v. Glass and support careful documentation of how Florida’s registry and local restrictions affect housing, employment, family stability, travel, homelessness, and access to ordinary community life.",
    },
  },
  {
    id: 9,
    group: "Courts & Rights",
    title:
      "Puerto Rico registry due-process challenge dismissed before merits relief",
    jurisdiction: "Puerto Rico / federal",
    date: "Order dated August 3, 2026",
    summary:
      "Blasini-Sanjurjo shows how timing and pleading barriers can defeat registry challenges even when the alleged consequences involve tier redesignation, family life, work, school access, residence, and travel.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://cases.justia.com/federal/district-courts/puerto-rico/prdce/3:2025cv01369/188492/83/0.pdf?ts=1785869653">
          Blasini-Sanjurjo v. Commonwealth of Puerto Rico
        </ExternalLink>
        , the federal district court granted a motion to dismiss claims tied to
        Puerto Rico registry obligations and redesignation from Tier I to Tier II.
      </>,
      "The plaintiff alleged that the redesignation occurred without notice or an opportunity to challenge it and pointed to workplace, family, school, community-contact, residence, and travel-related consequences.",
      "The court dismissed the case before merits relief, including by finding the remaining due-process claim barred by limitations.",
    ],
    matters: [
      "The ruling is a cautionary procedural development. Registry harms may be continuing in ordinary life, but courts can still treat key claims as too late if the triggering classification or agency action happened years earlier.",
      "For registrants and families, delay can mean losing the chance to challenge tiering even when the designation affects work, parenting, schooling, residence, travel, and community contact.",
      "The case underscores the need to preserve claims early after a tier change or new enforcement consequence, while also developing arguments that address ongoing harms separately where possible.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the plaintiff’s due-process challenge was dismissed before a merits remedy, leaving the alleged classification consequences in place.",
      "The broader lesson is that registry litigation often turns not only on constitutional theory, but on timing, pleading, and the ability to connect ongoing consequences to actionable state conduct.",
    ],
    watch: [
      "Whether the plaintiff appeals and how appellate briefing frames limitations and ongoing registry harms.",
      "Whether future Puerto Rico litigants file more quickly after tier changes or challenge discrete ongoing enforcement acts.",
      "Whether legal advocates build clearer records on notice, redesignation, and practical consequences at the time they occur.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Due-process concern",
        "Public notification",
        "Employment barrier",
        "Family-stability impact",
        "Litigation risk",
      ],
      risk: ["Watch closely", "Appeal possible"],
    },
    tags: ["Puerto Rico", "tiering", "due process", "limitations"],
    sources: [
      {
        label: "Blasini-Sanjurjo amended opinion/order",
        href: "https://cases.justia.com/federal/district-courts/puerto-rico/prdce/3:2025cv01369/188492/83/0.pdf?ts=1785869653",
        kind: "supplemental",
        type: "court order PDF mirror",
      },
      {
        label: "PACER federal records portal",
        href: "https://www.pacer.uscourts.gov/",
        kind: "official",
        type: "official federal docket-access source",
      },
    ],
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida FAC v. Glass",
    posture: "Complaint filed August 11; no merits ruling yet.",
    why:
      "A broad challenge to Florida’s registry and local restrictions could shape cumulative-punishment litigation beyond one state.",
    next: [
      "Watch for motions to dismiss, preliminary-injunction requests, severance issues, and local-defendant briefing.",
      "Track whether the court engages the combined burden of state registry rules and local residence or presence restrictions.",
    ],
  },
  {
    title: "Missouri SB 982 implementation",
    posture: "Effective August 28, with county registration officials and MSHP now central to implementation.",
    why:
      "The rewrite affects registration triggers, tiering, removal, travel reporting, temporary residence, nonresident connections, and registry records.",
    next: [
      "Watch for MSHP guidance and county-level implementation patterns.",
      "Track litigation or administrative disputes over out-of-state obligations and tier assignment.",
    ],
  },
  {
    title: "Tennessee SORVTA retroactivity litigation",
    posture: "Broad preliminary injunction narrowed; plaintiff retains a narrower injunction against public categorical child-offender labeling.",
    why:
      "The case shows both the limits of broad retroactivity relief and a possible path against public labels imposed without individualized assessment.",
    next: [
      "Watch further proceedings involving local enforcement defendants.",
      "Track appeal posture and any change in Tennessee public classification practices.",
    ],
  },
  {
    title: "North Carolina registry-removal petitions after Lingerfelt",
    posture: "The state supreme court applied law-of-the-case doctrine to an earlier unappealed tier determination.",
    why:
      "A missed appeal may postpone removal eligibility for many years, even when current dangerousness arguments could otherwise be revisited.",
    next: [
      "Watch for future cases narrowing the preclusion rule.",
      "Watch for legislative fixes or court warnings that make appeal consequences clearer.",
    ],
  },
  {
    title: "Louisiana Act 123 implementation",
    posture: "Effective August 1; courts should now use the updated notice form and venue framework.",
    why:
      "Court notice forms often become the practical compliance architecture used later in technical-violation prosecutions.",
    next: [
      "Watch whether courts use updated forms consistently and provide complete statutory references.",
      "Track whether supervised-release venue changes affect prosecution choices.",
    ],
  },
  {
    title: "Illinois HB 4332 drone-registration concept",
    posture: "Stalled, with August media coverage pointing to possible veto-session or future-session activity.",
    why:
      "Drone or technology-property reporting concepts may migrate to other states even when one bill has not moved.",
    next: [
      "Watch Illinois veto-session activity and any 2027 refiling.",
      "Track whether future versions define device ownership, possession, reporting deadlines, and penalties with precision.",
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  {
    title: "Missouri: request SB 982 implementation guidance",
    why:
      "SB 982 is live, and people need clear guidance before tier assignments, temporary residence, travel reporting, and removal procedures become compliance traps.",
    label: "Missouri Legislator Lookup",
    href: "https://www.senate.mo.gov/BillTracking/LegislatorLookup/",
    message:
      "Please ask Missouri officials and MSHP to publish clear, plain-language guidance on SB 982 implementation, including tier review, temporary residence, nonresident work and school obligations, travel reporting, fees, and removal or exemption procedures.",
  },
  {
    title: "Louisiana: push for notice safeguards and individualized review",
    why:
      "Louisiana’s August laws combine better formal notice, new registration expansion, and relief exclusion. The reform need is clarity, proportionality, and individualized review.",
    label: "Louisiana Find My Legislators",
    href: "https://legis.la.gov/legis/FindMyLegislators.aspx",
    message:
      "Please support registry laws that provide plain-language notice, prevent technical-violation traps, and use individualized review instead of categorical registration expansion or categorical relief exclusion.",
  },
  {
    title: "Florida: track systemic registry litigation",
    why:
      "FAC v. Glass could become a major test of cumulative registry punishment, but it needs careful monitoring and strong documentation of real-world burdens.",
    label: "Northern District PACER information",
    href: "https://www.flnd.uscourts.gov/pacer-info",
    message:
      "Please monitor FAC v. Glass and support careful documentation of how Florida’s registry and local restrictions affect housing, employment, family stability, travel, homelessness, and access to ordinary community life.",
  },
  {
    title: "Courts: preserve classification and removal arguments early",
    why:
      "Massachusetts, North Carolina, Tennessee, and Puerto Rico all show that registry rights can turn on expert evidence, appeal timing, individualized labeling, and limitations rules.",
    label: "PACER federal records portal",
    href: "https://www.pacer.uscourts.gov/",
    message:
      "Please preserve registry classification, removal, expert-funding, individualized-assessment, and timing arguments early. Procedural defaults can block relief even when the real-world registry burden is severe.",
  },
];

export default function LegislativeTrackerAugust2026(): JSX.Element {
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
        title="Legislative Tracker — August 2026 Update | The SOLAR Project"
        description="August 2026 SOLAR Legislative Tracker update covering Missouri and Louisiana registry implementation, registration expansion, relief exclusions, court rulings, and systemic registry litigation."
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
            <Badge>August 2026</Badge>
            <Badge>State / Courts / Litigation</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — August 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            August was a mixed implementation-and-litigation month: registry
            laws became operative in Missouri and Louisiana while courts
            continued defining the boundaries of classification, removal,
            retroactivity, public labeling, procedural access to relief, and
            cumulative registry punishment.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This update covers developments with a meaningful event between
              August 1 and August 31, 2026, including effective dates, court
              opinions and orders, lawsuit filings, and implementation hooks
              that affect registry duties, relief access, supervision,
              public-notification systems, or evidence-based reform.
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
              Key Developments
            </a>
            <a
              href="#actions"
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
        <Section id="glance" eyebrow="At a Glance" title="What August moved">
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
              August shows both sides of the current registry-policy landscape:
              states continued to formalize and expand obligations, while
              litigation pressed due-process, ex-post-facto,
              individualized-assessment, removal-access, and cumulative
              punishment arguments. For registrants and families, the practical
              story is implementation: rules on paper become court notices,
              tier decisions, travel forms, venue choices, public labels,
              removal deadlines, and everyday barriers to housing, work, family
              stability, and relief.
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
              August was not a single national bill wave. It was an
              implementation-and-litigation month, where registry policy showed
              up through effective dates, court orders, public labels, removal
              petitions, and the mechanics of compliance. That matters because
              the burden of registration is often felt less as one dramatic
              event than as a system of forms, deadlines, classifications,
              travel rules, public records, and local restrictions that make
              ordinary stability harder to maintain.
            </p>
            <p>
              The Missouri and Louisiana laws show why SOLAR keeps centering{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>
              : public safety is not strengthened by turning more life
              activities into status-based compliance traps or by excluding
              people categorically from relief. For impacted families, the
              practical need is also immediate access to{" "}
              <InternalLink to="/resources">
                plain-language resources
              </InternalLink>{" "}
              that help translate legal changes into housing, travel,
              supervision, and court-navigation decisions.
            </p>
            <p>
              The court developments show the other side of the same system.
              Massachusetts opened a path for expert evidence in classification,
              while North Carolina and Puerto Rico show how procedural timing
              can narrow relief before courts ever reach present risk. Florida
              and Tennessee should remain part of{" "}
              <InternalLink to="/resources/legislative-tracker">
                registry-policy trend tracking
              </InternalLink>{" "}
              because they test whether courts will treat public labels and
              cumulative restrictions as real punishment rather than background
              administration.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="August 2026 developments"
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
            August’s action paths focus on implementation safeguards, clear
            notice, individualized review, docket monitoring, and early
            preservation of legal arguments. These are the places where
            registrants, families, and allies can push for real safety,
            proportionality, and fewer technical traps.
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
              laws, court opinions, agency notices, government reports, and
              official public-comment portals. Reporting, advocacy explainers,
              legal databases, and civic-data sources may be used as
              supplemental context, but they should not replace official
              sources when official sources are available.
            </p>
            <p>
              This August update includes only developments with a meaningful
              in-window hook between August 1 and August 31, 2026. Borderline
              items were held to the watchlist when the August event was media
              coverage, local placement process, or context rather than a
              registry-law change, court ruling, agency action, or operative
              legal development.
            </p>
            <p>
              The purpose of this tracker is to identify legal and policy
              developments that affect registry duties, reentry, housing, family
              stability, relief pathways, due process, supervision, and
              evidence-based reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "Nine August developments show an implementation-heavy month shaped by Missouri and Louisiana effective dates, court rulings, and new systemic litigation.",
    "Missouri SB 982 was the largest statutory item, rewriting registration triggers, tiering, removal, travel reporting, temporary residence, and records rules.",
    "Courts split across the month: Massachusetts strengthened expert access in classification, while North Carolina and Puerto Rico narrowed relief through procedural barriers.",
  ],
  highlights: [
    "Louisiana expanded registration to a second commercial-sex-purchase conviction while also formalizing court notice and supervised-release venue rules.",
    "Florida Action Committee filed a broad federal challenge to Florida’s registry and local restrictions, creating a major cumulative-punishment watch item.",
    "Tennessee’s Doe v. Lee order narrowed broad retroactivity relief but preserved a challenge to categorical public child-offender labeling without individualized assessment.",
  ],
};