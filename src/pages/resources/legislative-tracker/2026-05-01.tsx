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

const slug = "2026-05-01";
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
    value: "7",
    body:
      "April’s locked item set includes enacted state restrictions, two major court rulings, one active agency rulemaking, and collateral-consequence legislation.",
  },
  {
    label: "Dominant Posture",
    value: "Restrictive",
    body:
      "The month leaned toward broader housing, employment, supervision, and public-notification burdens, even where some items were framed as clarification.",
  },
  {
    label: "Rights / Reform / Litigation Counterpoint",
    value: "2",
    body:
      "California produced a due-process limit on federal SORNA prosecutions, while Colorado preserved a civil-regulatory theory for lifetime SVP registration.",
  },
  {
    label: "Action Paths",
    value: "4",
    body:
      "The most useful routes are Texas rule comments, Michigan legislative outreach, Missouri governor contact, and Colorado reform advocacy.",
  },
];
const developments: Development[] = [
  {
    id: 1,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "Florida enacted a public-pool and splash-pad restriction package",
    jurisdiction: "Florida",
    date: "Chaptered April 1, 2026; effective July 1, 2026",
    summary:
      "Florida made public swimming pools and splash-pad-style recreation spaces part of the registry restriction map, increasing housing, presence, employment-screening, and supervision risk in ordinary residential communities.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2026/212">
          CS/CS/CS/SB 212
        </ExternalLink>{" "}
        became Chapter 2026-17 and adds “public swimming pool” to several parts
        of Florida’s sex-offense restriction framework. The enrolled law defines
        that term broadly enough to include conventional pools, spa-type pools,
        wading pools, special-purpose pools, spray pools, splash pads, and other
        water recreation attractions, including many pools serving apartments,
        condominiums, mobile home parks, subdivisions, townhouses, and
        government-held-open facilities.
      </>,
      <>
        The law reaches beyond a simple recreation rule. It plugs the new pool
        category into residency restrictions, proximity and contact provisions,
        governmental registry-search duties before appointment or employment at
        places where children regularly congregate, school and child-care notice
        duties, supervision conditions, and warrantless-arrest authority.
      </>,
      <>
        The Florida Senate bill page lists Governor approval on March 31 and{" "}
        <ExternalLink href="https://laws.flrules.org/2026/17">
          Chapter No. 2026-17
        </ExternalLink>{" "}
        on April 1, with an effective date of July 1, 2026.
      </>,
    ],
    matters: [
      "This does not simply add one more location to a list. In dense housing markets, shared pools and splash pads are common features of apartment complexes, HOAs, mobile home parks, and family-oriented residential communities. A rule built around those spaces can shrink lawful housing options even when a person is trying to live with family, maintain work, and comply with supervision.",
      "For registrants and loved ones, the practical burden is uncertainty: whether a home is too close, whether a shared amenity changes the analysis, whether a probation condition becomes harder to satisfy, and whether ordinary movement inside a residential community becomes a technical-violation risk.",
      "The policy also shows how registry restrictions tend to expand by geography rather than by individualized risk. When more ordinary places are classified as child-centered exclusion zones, compliance becomes less about responsible conduct and more about navigating an increasingly complicated map.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because Florida newly worsens the legal and practical position of affected registrants and families. The law expands place-based punishment architecture into housing and supervision spaces where ordinary family stability often depends on affordable shared-community housing.",
      "The public-safety claim should be measured against real-world displacement, confusion, and enforcement patterns. Restrictions that destabilize housing and family support can undermine the very conditions that support compliance and long-term safety.",
    ],
    watch: [
      "Watch FDLE, DOC, probation/parole offices, and local law enforcement for implementation guidance before and after the July 1 effective date.",
      "Track how the “public swimming pool” definition is applied to apartments, condominiums, HOA communities, mobile home parks, and splash-pad facilities.",
      "Document housing displacement, family separation, supervision violations, or inconsistent local enforcement that may support future as-applied or facial challenges.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Compliance burden",
        "Family-stability impact",
        "Punishment expansion",
        "Supervision burden",
      ],
      risk: ["Enforcement risk", "Implementation risk", "Watch closely"],
    },
    tags: ["state", "housing", "residency restrictions", "supervision"],
    sources: [
      {
        label: "Florida Senate SB 212 bill page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Enrolled SB 212 PDF",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/BillText/er/PDF",
        kind: "official",
        type: "official enrolled bill text",
      },
      {
        label: "Florida Laws Chapter 2026-17",
        href: "https://laws.flrules.org/2026/17",
        kind: "official",
        type: "official chapter law",
      },
      {
        label: "Florida HB 45 companion",
        href: "https://www.flsenate.gov/Session/Bill/2026/45",
        kind: "official",
        type: "official related bill page",
      },
      {
        label: "Reason Foundation analysis",
        href: "https://reason.org/commentary/floridas-new-sex-offender-registrant-restrictions-will-not-improve-public-safety/",
        kind: "supplemental",
        type: "policy-context analysis",
      },
    ],
    action: {
      title: "Track Florida implementation and document housing harm",
      why:
        "The law is already enacted, so the most useful advocacy now is implementation monitoring, legislative follow-up, and documentation of displacement or family separation.",
      label: "Find Florida legislators",
      href: "https://www.flsenate.gov/Senators/Find",
      message:
        "Please review the real-world impact of Chapter 2026-17 before and after implementation. Public-pool and splash-pad restrictions can displace families from ordinary shared-community housing and create technical compliance traps without evidence of improved safety.",
    },
  },
  {
    id: 2,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "Michigan committee advanced registry-based employment bans for child-facing businesses",
    jurisdiction: "Michigan",
    date: "Reported April 27, 2026",
    summary:
      "Michigan bills would move registry consequences further into employment by barring registered people from working at businesses primarily serving minors, with possible criminal penalties for violations.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.legislature.mi.gov/Bills/Bill?ObjectName=2026-HB-5425">
          HB 5425
        </ExternalLink>{" "}
        would prohibit people on the registry from working at businesses that
        primarily provide services to people under 18 and allow “unsupervised
        access” to minors during activities. Reporting identifies examples such
        as martial arts studios, dance studios, and summer camps.
      </>,
      <>
        <ExternalLink href="https://www.legislature.mi.gov/Bills/Bill?ObjectName=2026-HB-5426">
          HB 5426
        </ExternalLink>{" "}
        would make corresponding criminal-code changes. Local reporting says
        violations could carry jail, fines, and higher penalties for multiple
        violations.
      </>,
      "The April development is committee movement: the House Judiciary Committee advanced the bills to the full House, turning a categorical employment exclusion into an active legislative threat.",
    ],
    matters: [
      "Employment is one of the central stabilizers for reentry, family support, treatment access, transportation, and compliance. A categorical employment ban can cut off work even where the job duties, workplace controls, offense history, time since offense, treatment progress, and individual risk profile would not support exclusion.",
      "The phrase “businesses that primarily provide services to minors” also creates boundary questions. Workers, employers, and families may need to guess whether a business is covered, what counts as unsupervised access, and whether owners, contractors, seasonal workers, or support staff are treated the same way.",
      "Michigan’s registry history makes the proposal especially important. Broad registry rules have already generated major constitutional litigation in the state, and new collateral bans risk repeating the pattern of status-based punishment dressed as administrative regulation.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the bills would newly worsen employment access and criminal-exposure risk for registered people. The proposal uses registry status as the trigger rather than requiring individualized risk findings, due process, or evidence-based tailoring.",
      "The public-safety concern is real, but categorical exclusion is not the same thing as prevention. Safer policy would focus on job duties, supervision, screening practices, treatment history, individualized assessment, and clear workplace safeguards.",
    ],
    watch: [
      "Watch for a full House vote, Senate referral, or substitute text narrowing the covered businesses, duties, workers, retroactivity, or penalties.",
      "Track whether lawmakers add individualized review, notice, safe-harbor language, or employer guidance to reduce compliance traps.",
      "Watch constitutional objections, especially given Michigan’s prior SORA litigation history.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Employment barrier",
        "Reentry barrier",
        "Compliance burden",
        "Due-process concern",
        "Punishment expansion",
      ],
      risk: ["Litigation risk", "Advocacy opening", "Watch closely"],
    },
    tags: ["state", "employment", "collateral consequences"],
    sources: [
      {
        label: "Michigan HB 5425 official bill page",
        href: "https://www.legislature.mi.gov/Bills/Bill?ObjectName=2026-HB-5425",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Michigan HB 5426 official bill page",
        href: "https://www.legislature.mi.gov/Bills/Bill?ObjectName=2026-HB-5426",
        kind: "official",
        type: "official companion bill page",
      },
      {
        label: "Michigan Public report",
        href: "https://www.michiganpublic.org/politics-government/2026-04-27/michigan-bills-would-ban-registered-sex-offenders-from-jobs-related-to-minors",
        kind: "supplemental",
        type: "media-context report",
      },
      {
        label: "WWMT / MidMichiganNow report",
        href: "https://midmichigannow.com/news/michigan-politics/michigan-house-bills-seek-prohibit-sex-offenders-working-child-facing-businesses-politics-aclu-republican-lansing-wwmt",
        kind: "supplemental",
        type: "media-context report",
      },
    ],
    action: {
      title: "Ask Michigan lawmakers to reject categorical employment bans",
      why:
        "Employment restrictions should be narrow, evidence-based, and tied to individualized risk rather than registry status alone.",
      label: "Find Michigan elected officials",
      href: "https://www.legislature.mi.gov/Legislators",
      message:
        "Please oppose HB 5425 and HB 5426 unless they are rewritten to require individualized risk review, clear definitions, due process, and evidence-based tailoring. Stable employment supports compliance, treatment, family stability, and real public safety.",
    },
  },
  {
    id: 3,
    group: "Courts & Rights",
    title:
      "California federal SORNA judgment limited prosecution where state registration is not required or possible",
    jurisdiction: "Federal / California",
    date: "Judgment entered April 9, 2026",
    summary:
      "A federal judgment protects a defined group of California residents from being prosecuted for impossible or state-disallowed SORNA compliance.",
    tone: "emerald",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://all4consolaws.org/wp-content/uploads/2026/04/2026-04-09-CA-SORNA-judgement-42345274-0-110469.pdf">
          <em>John Doe #2 et al. v. U.S. Department of Justice</em>
        </ExternalLink>
        , the Central District of California entered judgment and a permanent
        injunction limiting federal SORNA enforcement against California
        residents.
      </>,
      "The injunction bars federal prosecution under 18 U.S.C. § 2250, SORNA, the 2021 DOJ SORNA rule, or related regulations unless DOJ first obtains California certification that the person was required to register under California law. For alleged failure to provide particular information, DOJ must also obtain certification that California law allowed the person to provide that information.",
      "The court entered judgment for plaintiffs on one claim while entering judgment for defendants on others, making the relief significant but targeted rather than a complete invalidation of federal SORNA authority.",
    ],
    matters: [
      "The ruling addresses a central registry trap: federal law treating someone as criminally exposed for failing to do something state law does not require, or will not allow, them to do. For people who earned California relief or were removed from state registration, that conflict can create fear of a federal felony even after state law says no registration duty remains.",
      "For families, the practical relief is not abstract. It can mean less fear that a person who complied with California relief procedures will still face prosecution for non-registration, and more room to make housing, work, and family decisions without an impossible-compliance cloud.",
      "The judgment does not resolve every SORNA conflict. Travel, relocation, different state rules, appeal posture, and future DOJ interpretation remain important.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because it protects due process and compliance reality. A person should not face federal prosecution for failing to perform a registration act that the state does not require or permit.",
      "The deeper reform opening is broader than California. Whenever federal registry obligations collide with state relief, removal, or information-acceptance rules, courts and lawmakers should require clarity before punishment.",
    ],
    watch: [
      "Watch whether DOJ appeals or seeks narrower interpretation of the injunction.",
      "Track whether similar challenges are filed in states where federal SORNA obligations conflict with state relief, removal, or refusal-to-register rules.",
      "Watch how the judgment is applied to travel, relocation, and people whose California relief status changes over time.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: [
        "Due-process concern",
        "Relief protection",
        "Compliance clarity",
        "Rights concern",
      ],
      risk: ["Appeal likely", "Reform opening", "State-by-state variation", "Watch closely"],
    },
    tags: ["federal", "SORNA", "due process", "relief"],
    sources: [
      {
        label: "Filed judgment PDF",
        href: "https://all4consolaws.org/wp-content/uploads/2026/04/2026-04-09-CA-SORNA-judgement-42345274-0-110469.pdf",
        kind: "supplemental",
        type: "court judgment copy",
      },
      {
        label: "PACER docket lookup",
        href: "https://pacer.uscourts.gov/",
        kind: "official",
        type: "official federal docket access",
      },
      {
        label: "Pacific Legal Foundation update",
        href: "https://pacificlegal.org/judges-ruling-protects-due-process-rights-of-californians-caught-in-federal-registration-trap/",
        kind: "supplemental",
        type: "plaintiffs-counsel legal context",
      },
      {
        label: "ACSOL summary",
        href: "https://all4consolaws.org/2026/04/ca-judges-sorna-ruling-protects-due-process-rights-of-californians-caught-in-federal-registration-trap/",
        kind: "supplemental",
        type: "advocacy-context summary",
      },
    ],
  },
  {
    id: 4,
    group: "Courts & Rights",
    title:
      "Colorado Supreme Court held adult SVP lifetime registration is not Eighth Amendment punishment",
    jurisdiction: "Colorado",
    date: "Opinion issued April 27, 2026",
    summary:
      "Colorado’s high court preserved lifetime SVP registration and community-notification consequences by treating the scheme as non-punitive for Eighth Amendment purposes.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.coloradojudicial.gov/system/files/opinions-2026-04/24SC154.pdf">
          <em>Beagle v. People</em>, 2026 CO 24
        </ExternalLink>
        , the Colorado Supreme Court affirmed the judgment below and rejected
        the argument that adult sexually violent predator designation and
        lifetime registration should be treated as punishment under the Eighth
        Amendment.
      </>,
      "The ruling preserves Colorado’s adult SVP lifetime-registration framework against this constitutional challenge. Context reporting also noted concern from two justices that lawmakers should revisit the accuracy of risk assessment and concerns raised by the Sex Offender Management Board.",
      "The procedural posture matters because the court did not decide that lifetime public registration is easy or harmless. It decided that, for this claim, the consequences remain outside Eighth Amendment punishment analysis.",
    ],
    matters: [
      "This reinforces the civil-regulatory framing that has allowed severe registry consequences to avoid ordinary proportionality review. For people designated SVP, the practical reality can still be lifetime registration, public notification, housing and employment barriers, stigma, and family impact.",
      "For families, the difference between “civil” and “punitive” can feel disconnected from lived experience. The label affects what claims courts will hear, what proof is required, and how much room remains for individualized review.",
      "The ruling also narrows one litigation path in Colorado adult SVP cases, pushing reform energy toward legislation, state constitutional arguments, due process claims, individualized-risk standards, and risk-assessment accuracy.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it preserves a framework with lifetime public-registration consequences while limiting constitutional leverage under the Eighth Amendment. The harm is not only the outcome for one litigant, but the broader message that permanent registry burdens can be treated as non-punitive even when they operate like punishment in daily life.",
      "The reform opening remains important. If courts defer to the civil label, lawmakers should be pressed to confront whether the system actually measures current risk, permits meaningful review, and supports public safety rather than permanent exclusion.",
    ],
    watch: [
      "Watch whether Colorado lawmakers respond to concerns about SVP assessment accuracy and lifetime consequences.",
      "Track future challenges under state constitutional, due process, individualized-risk, or risk-assessment theories.",
      "Watch whether lower courts read the decision narrowly or broadly in later registry and community-notification cases.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Due-process concern",
        "Rights concern",
        "Public notification",
        "Punishment expansion",
        "Litigation risk",
      ],
      risk: ["Reform opening", "Watch closely", "Clarification needed"],
    },
    tags: ["court", "lifetime registration", "public notification"],
    sources: [
      {
        label: "Colorado Supreme Court opinion, 24SC154",
        href: "https://www.coloradojudicial.gov/system/files/opinions-2026-04/24SC154.pdf",
        kind: "official",
        type: "official court opinion",
      },
      {
        label: "Colorado Politics / Denver Gazette coverage",
        href: "https://www.coloradopolitics.com/2026/04/27/lifetime-sex-offender-registration-not-punishment-colorado-justices-say/",
        kind: "supplemental",
        type: "media-context report",
      },
    ],
    action: {
      title: "Urge Colorado lawmakers to revisit lifetime SVP registration",
      why:
        "After the court preserved the scheme under the Eighth Amendment, legislative reform may be the clearest path to individualized review and better risk-assessment standards.",
      label: "Find Colorado legislators",
      href: "https://leg.colorado.gov/find-my-legislator",
      message:
        "Please review Colorado’s adult SVP designation and lifetime-registration framework. Any public-notification system should include accurate risk assessment, meaningful individualized review, and a realistic path to relief when a person no longer presents the same risk.",
    },
  },
{
    id: 5,
    group: "Relief / Termination / Registration Procedure",
    title:
      "Missouri SB 982 advanced registry tiering, out-of-state registration, and removal changes",
    jurisdiction: "Missouri",
    date: "Delivered to governor April 23, 2026",
    summary:
      "Missouri’s public-safety package attempts to clarify registry triggers and procedures, but the out-of-state-registration provisions may increase practical compliance exposure for people with ties to Missouri.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026">
          SB 982
        </ExternalLink>{" "}
        moved through final April action and was delivered to the governor. The
        bill replaces offense-list phrasing with a tier-based trigger for people
        adjudicated for Tier I, II, or III offenses in Missouri or another
        jurisdiction and requires classification into the highest applicable
        tier.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://www.senate.mo.gov/26info/pdf-bill/tat/SB982.pdf">
          truly agreed and finally passed text
        </ExternalLink>{" "}
        also addresses juveniles, people living, working, volunteering, or
        studying in Missouri who have registration duties elsewhere, treatment
        program certification for registration-period reductions, and removal
        procedures for people required to register because of out-of-state
        adjudications.
      </>,
      <>
        The House-side page and similar bill summaries for{" "}
        <ExternalLink href="https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB3068C.pdf">
          HB 3068
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB3049I.pdf">
          HB 3049
        </ExternalLink>{" "}
        help show the broader procedural package, but the final Senate bill text
        is the key source for the enacted-or-near-enacted posture.
      </>,
    ],
    matters: [
      "Some clarification can help. People trying to understand tiering, removal, treatment-program reductions, and out-of-state obligations need rules that are knowable before they risk criminal consequences.",
      "But clarity can cut in two directions. A clearer trigger for people who live, work, study, or volunteer in Missouri can also expand practical exposure for people with out-of-state convictions or registration histories, especially when family visits, temporary work, school, or volunteer activity crosses a threshold.",
      "For registrants and families, the question is whether Missouri recognizes relief and removal from other jurisdictions fairly, or whether state-by-state variation turns travel, work, and family caregiving into a legal maze.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because the bill may reduce some procedural uncertainty while also increasing compliance burden and enforcement risk for people with out-of-state ties. Clarification is valuable only if it is narrow, accessible, and paired with fair recognition of relief.",
      "The implementation details will matter as much as the statutory text. If agencies and courts treat out-of-state history broadly while relief recognition remains narrow, the practical effect could be more registration rather than better accuracy.",
    ],
    watch: [
      "Watch governor action, final effective-date language, and whether any signing message or implementation guidance narrows practical exposure.",
      "Track Missouri State Highway Patrol guidance on tier assignment, out-of-state registration triggers, removal petitions, and treatment-program certification.",
      "Watch how Missouri courts handle out-of-state relief, termination, expungement, or non-registration orders.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance clarity",
        "Compliance burden",
        "Relief process",
        "Travel reporting",
        "State-by-state variation",
      ],
      risk: ["Clarification needed", "Implementation risk", "Advocacy opening", "Enforcement risk"],
    },
    tags: ["state", "tiering", "out-of-state registration", "relief"],
    sources: [
      {
        label: "Missouri Senate SB 982 bill information",
        href: "https://www.senate.mo.gov/BillTracking/Bills/BillInformation?billid=628&year=2026",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Missouri House SB 982 page",
        href: "https://house.mo.gov/bill.aspx?bill=SB982&code=R&year=2026",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "SB 982 truly agreed / finally passed PDF",
        href: "https://www.senate.mo.gov/26info/pdf-bill/tat/SB982.pdf",
        kind: "official",
        type: "official final bill text",
      },
      {
        label: "Missouri HB 3068 similar bill summary",
        href: "https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB3068C.pdf",
        kind: "official",
        type: "official similar bill summary",
      },
      {
        label: "Missouri HB 3049 similar bill summary",
        href: "https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB3049I.pdf",
        kind: "official",
        type: "official similar bill summary",
      },
      {
        label: "KRCG / Missouri Independent report",
        href: "https://krcgtv.com/news/local/missouri-lawmakers-send-wide-ranging-public-safety-bill-to-the-governor",
        kind: "supplemental",
        type: "media-context report",
      },
    ],
    action: {
      title: "Ask Missouri’s governor for narrow, clear implementation",
      why:
        "The bill was delivered to the governor in April, and implementation will decide whether clarification becomes fair guidance or a broader compliance trap.",
      label: "Contact Missouri Governor",
      href: "https://governor.mo.gov/contact-us",
      message:
        "Please ensure SB 982 is implemented narrowly and clearly. Missouri should recognize out-of-state relief fairly, publish plain-language compliance guidance, and avoid turning travel, school, work, volunteering, or family caregiving into technical registration traps.",
    },
  },
  {
    id: 6,
    group: "Agencies / Implementation / Action Opportunities",
    title:
      "Texas opened a comment window on sex-offender supervision standards",
    jurisdiction: "Texas",
    date: "Filed April 20, 2026; earliest adoption May 31, 2026",
    summary:
      "Texas proposed supervision-rule amendments that could shape field visits, collateral contacts, treatment referral, violation handling, transfer information, and specialized caseload expectations.",
    tone: "indigo",
    changed: [
      <>
        The Texas Department of Criminal Justice proposed amendments to{" "}
        <ExternalLink href="https://www.sos.state.tx.us/texreg/archive/May12026/Proposed%20Rules/37.PUBLIC%20SAFETY%20AND%20CORRECTIONS.html">
          37 TAC §163.38, Sex Offender Supervision
        </ExternalLink>
        . The proposal defines “sex crime” and “sex offender” for supervision
        purposes and requires Community Supervision and Corrections Department
        policies covering registration, DNA collection, victim notification,
        treatment referral, treatment participation, field visits, collateral
        contacts, violation procedures, transfer information, and specialized
        caseload staffing.
      </>,
      "The proposed rule states that specialized sex-offender caseloads may not exceed 60 people per caseload. It also directs CSOs to recommend conditions tailored to identified risk and to transmit information promptly when supervision transfers.",
      "The proposal was filed with the Secretary of State on April 20, published in the May 1 Texas Register issue, and lists May 31, 2026 as the earliest possible adoption date. Written comments are due within 30 days of publication.",
    ],
    matters: [
      "Supervision rules shape daily life more directly than many statutes. Contacts, home visits, field visits, collateral contacts, treatment requirements, violation recommendations, and transfer paperwork can affect work schedules, family privacy, housing stability, treatment access, and the risk of technical violations.",
      "The proposed rule may improve consistency and clarity across local departments, but consistency is not automatically fairness. Formalizing high-contact practices without guardrails can increase family intrusion, employer disruption, and compliance pressure.",
      "This item includes one of the month’s clearest action opportunities because public comments can ask the agency to build in individualized supervision, treatment access, transparent violation standards, and limits on unnecessary collateral contacts.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement with real implementation risk and opportunity. The text is framed as clarification, and some clarity can help, but the practical effect depends on whether local supervision becomes more individualized or more intrusive.",
      "The strongest reform ask is not to eliminate supervision standards. It is to require supervision practices that match current risk, protect family stability, ensure treatment access, and reduce avoidable technical violations.",
    ],
    watch: [
      "Submit comments within 30 days of the May 1 Texas Register publication.",
      "Watch whether final language adds safeguards around individualized supervision, family collateral contacts, treatment access, transfer information, and violation recommendations.",
      "Track whether local CSCD policies publish clear contact standards and caseload monitoring after adoption.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: [
        "Compliance clarity",
        "Supervision burden",
        "Public-comment opportunity",
        "Agency implementation",
      ],
      risk: ["Advocacy opening", "Deadline approaching", "Implementation risk"],
    },
    tags: ["agency", "supervision", "public comment", "implementation"],
    sources: [
      {
        label: "Texas Register proposed rules, Title 37",
        href: "https://www.sos.state.tx.us/texreg/archive/May12026/Proposed%20Rules/37.PUBLIC%20SAFETY%20AND%20CORRECTIONS.html",
        kind: "official",
        type: "official agency rulemaking notice",
      },
    ],
    action: {
      title: "Submit comments on Texas supervision standards",
      why:
        "The proposed rules affect field visits, collateral contacts, treatment referral, violation recommendations, transfer information, and specialized caseloads.",
      label: "Email TDCJ comments",
      href: "mailto:ogccomments@tdcj.texas.gov",
      message:
        "Please revise the proposed §163.38 amendments to require individualized supervision based on current risk, transparent violation standards, meaningful treatment access, limits on unnecessary collateral contacts, and safeguards for family stability, employment, and housing.",
    },
  },
  {
    id: 7,
    group: "Collateral Consequences",
    title:
      "Virginia enacted automatic teaching-license revocation tied to felony conviction and registry order",
    jurisdiction: "Virginia",
    date: "Approved April 6, 2026; effective July 1, 2026",
    summary:
      "Virginia converted a professional-license consequence into an automatic revocation rule for license holders convicted of a felony and ordered to register, with no hearing before the Board.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://lis.virginia.gov/bill-details/20261/HB1387">
          HB 1387
        </ExternalLink>{" "}
        was approved by the governor and chaptered as Chapter 311. The{" "}
        <ExternalLink href="https://lis.virginia.gov/bill-details/20261/HB1387/text/CHAP0311">
          chapter text
        </ExternalLink>{" "}
        requires the Board of Education to automatically revoke a teaching
        license after receiving a record showing that the license holder was
        convicted of a felony and ordered to register under the Sex Offender and
        Crimes Against Minors Registry Act.
      </>,
      "The rule applies to active licenses and to inactive licenses if the license was active when the offense occurred. The person is not entitled to a hearing before revocation.",
      "Reinstatement is sharply limited: it is available only if the conviction is overturned on appeal and the Board finds reinstatement in the best interest of public schools.",
    ],
    matters: [
      "This is a collateral consequence layered on top of conviction, sentence, and registry duty. The state is not merely regulating classroom access; it is making professional-license loss automatic for a defined group and removing individualized hearing access.",
      "For registrants and families, the practical consequences are immediate and material: loss of career, income, professional identity, benefits, and future work options. Those consequences can ripple through housing, family support, treatment access, and reentry stability.",
      "The no-hearing structure also matters when records are incomplete, incorrect, or legally complicated. Procedural protections are not just formalities; they are how people correct mistakes before losing a livelihood.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because Virginia newly expands an automatic employment and due-process consequence tied to registration. Even where schools have legitimate safety responsibilities, categorical revocation without a hearing is a blunt tool.",
      "A narrower policy would preserve public-school safeguards while allowing notice, record correction, individualized review, and a meaningful path for cases where the conviction is overturned or the registry order is legally defective.",
    ],
    watch: [
      "Watch Board of Education guidance before the July 1 effective date.",
      "Track whether implementation creates notice, correction, and appeal pathways for erroneous records or legally changed convictions.",
      "Watch for due-process challenges or legislative proposals restoring limited hearing rights.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Employment barrier",
        "Reentry barrier",
        "Due-process concern",
        "Family-stability impact",
      ],
      risk: ["Watch closely", "Litigation risk", "Clarification needed"],
    },
    tags: ["state", "teaching license", "employment", "due process"],
    sources: [
      {
        label: "Virginia LIS HB 1387 official bill page",
        href: "https://lis.virginia.gov/bill-details/20261/HB1387",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Chapter 311 text",
        href: "https://lis.virginia.gov/bill-details/20261/HB1387/text/CHAP0311",
        kind: "official",
        type: "official enacted text",
      },
    ],
    action: {
      title: "Track Virginia Board of Education implementation",
      why:
        "Implementation guidance should include notice, correction procedures, and clear handling of overturned convictions or erroneous records.",
      label: "Contact Virginia Department of Education",
      href: "https://www.doe.virginia.gov/about-vdoe/contact-us",
      message:
        "Please ensure Chapter 311 implementation includes clear notice, record-correction procedures, and guidance for cases involving erroneous records, overturned convictions, or legally changed registry orders.",
    },
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida SB 212 / Chapter 2026-17 implementation",
    posture: "Chaptered April 1 and effective July 1, 2026.",
    why:
      "The new public-pool and splash-pad definitions may create housing exclusion zones in apartments, condominiums, HOA communities, mobile home parks, and other shared residential settings.",
    next: [
      "Watch FDLE, DOC, probation/parole, and local law-enforcement guidance.",
      "Track displacement, family separation, supervision violations, and litigation tied to the new definition.",
    ],
  },
  {
    title: "California SORNA injunction",
    posture: "Judgment and permanent injunction entered April 9, 2026.",
    why:
      "The judgment limits federal prosecution where California has removed or rejected the relevant state registration duty, but appeal posture and interstate effects remain unresolved.",
    next: [
      "Watch for DOJ appeal or post-judgment motion practice.",
      "Track whether similar claims are filed in states with relief/removal conflicts.",
      "Watch how the ruling is applied to travel, relocation, and people leaving California.",
    ],
  },
  {
    title: "Missouri SB 982",
    posture: "Delivered to the governor in April.",
    why:
      "Tiering, out-of-state registration triggers, and removal procedures could reshape compliance for people who live, work, study, volunteer, travel, or seek relief in Missouri.",
    next: [
      "Watch governor action and final effective-date language.",
      "Track Missouri State Highway Patrol guidance and treatment-program certification rules.",
      "Watch how courts handle out-of-state relief and removal orders.",
    ],
  },
  {
    title: "Michigan HB 5425 / HB 5426",
    posture: "Advanced from House Judiciary Committee to the full House.",
    why:
      "The bills would create a categorical registry-based employment ban in child-facing business settings and may raise due-process, tailoring, and overbreadth concerns.",
    next: [
      "Watch for a full House vote, Senate referral, or substitute text.",
      "Track whether amendments add individualized review, clear definitions, or safe-harbor language.",
    ],
  },
  {
    title: "Texas TDCJ proposed supervision rules",
    posture: "Proposed rule filed April 20; comments due within 30 days of May 1 publication.",
    why:
      "Supervision standards affect field visits, treatment referral, collateral contacts, violation recommendations, transfer information, and caseload intensity.",
    next: [
      "Submit comments before the deadline.",
      "Watch final rule text and local CSCD policy changes after adoption.",
    ],
  },
  {
    title: "New York A.10975 Level 1 public-directory proposal",
    posture: "Reported as introduced, but official bill text was not confirmed in the handoff.",
    why:
      "If verified, the proposal would expand public online disclosure to Level 1 registrants, undermining risk-tier distinctions and increasing reentry and family-stability harms.",
    next: [
      "Confirm official Assembly/Senate bill page, sponsors, committee referral, and exact disclosure language.",
      "Watch whether the proposal moves in committee and whether lawmakers preserve individualized risk distinctions.",
    ],
  },
  {
    title: "Putnam County, Florida registrant-to-registrant housing lawsuit",
    posture: "Reported filed April 23 by advocacy source; official docket and complaint were not confirmed in the handoff.",
    why:
      "A 500-foot registrant-to-registrant housing rule would be an unusually direct attack on housing access and could affect property owners, families, and people trying to find lawful shelter.",
    next: [
      "Verify complaint, docket number, court, class definition, and ordinance text.",
      "Watch for temporary-restraining-order or preliminary-injunction briefing.",
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  {
    title: "Submit comments on Texas supervision standards",
    why:
      "Texas has an active comment window on rules that affect supervision contacts, collateral checks, treatment participation, transfer information, and violation handling.",
    label: "Email TDCJ comments",
    href: "mailto:ogccomments@tdcj.texas.gov",
    message:
      "Please revise the proposed §163.38 amendments to require individualized supervision based on current risk, transparent violation standards, meaningful treatment access, limits on unnecessary collateral contacts, and safeguards for family stability, employment, and housing.",
  },
  {
    title: "Oppose Michigan’s categorical employment ban",
    why:
      "HB 5425 and HB 5426 would expand registry consequences into work and criminal exposure without requiring individualized risk review.",
    label: "Find Michigan elected officials",
    href: "https://www.legislature.mi.gov/Legislators",
    message:
      "Please oppose HB 5425 and HB 5426 unless they are rewritten to require individualized risk review, clear definitions, due process, and evidence-based tailoring. Stable employment supports compliance, treatment, family stability, and real public safety.",
  },
  {
    title: "Ask Missouri for narrow implementation",
    why:
      "SB 982 may clarify some registry procedures, but out-of-state registration triggers and relief recognition need plain, fair guidance.",
    label: "Contact Missouri Governor",
    href: "https://governor.mo.gov/contact-us",
    message:
      "Please ensure SB 982 is implemented narrowly and clearly. Missouri should recognize out-of-state relief fairly, publish plain-language compliance guidance, and avoid turning travel, school, work, volunteering, or family caregiving into technical registration traps.",
  },
  {
    title: "Press Colorado lawmakers for individualized SVP review",
    why:
      "After Beagle, legislative reform may be the clearest route to better risk assessment, meaningful review, and relief from lifetime consequences.",
    label: "Find Colorado legislators",
    href: "https://leg.colorado.gov/find-my-legislator",
    message:
      "Please review Colorado’s adult SVP designation and lifetime-registration framework. Any public-notification system should include accurate risk assessment, meaningful individualized review, and a realistic path to relief when a person no longer presents the same risk.",
  },
];
export default function LegislativeTrackerApril2026Update(): JSX.Element {
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
        title="Legislative Tracker — April 2026 Update | The SOLAR Project"
        description="April 2026 SOLAR Legislative Tracker update covering registry restrictions, court rulings, supervision rules, collateral consequences, housing barriers, employment restrictions, and action paths."
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
            <Badge>Federal / State / Courts / Agencies</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — April 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            April brought a heavy registry-policy month: Florida enacted new
            pool and splash-pad restrictions, courts split on impossible SORNA
            compliance and lifetime registration, and state and agency actions
            raised new housing, employment, supervision, and due-process
            concerns.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              April 1–30, 2026, America/New_York. This update includes
              enacted laws, court judgments, committee movement, governor
              delivery, and agency rulemaking with concrete registry,
              supervision, relief, housing, employment, or collateral-consequence
              effects. New York A.10975 and the Putnam County lawsuit remain on
              the Watchlist because the handoff flagged official-source gaps.
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
        <Section id="glance" eyebrow="At a Glance" title="What April moved">
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
              April shows how registry policy often grows by attaching new
              consequences to ordinary life: where people may live, where they
              may work, how supervision reaches into family and community
              contacts, whether relief actually protects someone from federal
              prosecution, and whether courts treat lifetime public registration
              as punishment. The practical story is not one bill or one case; it
              is the instability created when housing, employment, movement, and
              due process depend on a shifting patchwork of state, federal, and
              local rules.
            </p>
          </div>
        </Section>

        <Section
          id="throughline"
          eyebrow="Monthly Throughline"
          title="Restriction geography, due process, and the cost of permanent status"
        >
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            <p>
              April’s dominant pattern was restriction expansion through
              ordinary geography and ordinary work. Florida added pools and
              splash pads to its registry restriction architecture, while
              Michigan moved toward a new employment ban for businesses serving
              minors. Both developments reflect the same problem SOLAR names in
              its{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              work: public safety is too often framed as exclusion by status
              rather than prevention, treatment, individualized assessment, and
              stability.
            </p>
            <p>
              The courts split the month in two. California’s SORNA judgment
              recognized that people should not face federal prosecution for
              impossible or state-disallowed compliance, while Colorado’s high
              court preserved lifetime SVP registration as non-punitive for
              Eighth Amendment purposes. For readers trying to navigate these
              conflicts, SOLAR’s{" "}
              <InternalLink to="/resources">
                plain-language resources
              </InternalLink>{" "}
              remain important because the daily stakes are housing, work,
              travel, supervision, family privacy, and relief that actually
              means relief.
            </p>
            <p>
              The Watchlist also shows why this tracker exists. New York’s
              reported Level 1 public-disclosure proposal and the reported
              Putnam County housing lawsuit both point toward the same larger
              question: whether policy will follow fear-driven public
              notification or evidence-based prevention. Readers can compare
              these patterns with{" "}
              <InternalLink to="/resources/legislative-tracker">
                prior Legislative Tracker updates
              </InternalLink>{" "}
              and with SOLAR’s work on{" "}
              <InternalLink to="/resources/accountability-watch">
                risk beyond the stranger-danger myth
              </InternalLink>
              .
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="April 2026 developments"
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
            April’s top action paths focus on places where readers can still
            shape implementation, bill movement, or reform response. Use the
            scripts as starting points and adapt them with lived experience,
            local details, and respectful specificity.
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

        <Section
          id="watchlist"
          eyebrow="Rolling Watchlist"
          title="What to watch next"
        >
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
              and civic-data sources may be used as supplemental context, but
              they do not replace official sources when official sources are
              available.
            </p>
            <p>
              The purpose of this tracker is to identify legal and policy
              developments that affect registry duties, reentry, housing, family
              stability, relief pathways, due process, supervision, employment,
              public notification, and evidence-based reform. Borderline items
              remain on the Watchlist when official bill text, docket records,
              complaints, or primary documents have not yet been confirmed.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "7 key April developments across state legislation, courts, agency implementation, and collateral consequences.",
    "Florida enacted public-pool and splash-pad restrictions; Michigan advanced a child-facing-business employment ban.",
    "California produced a due-process SORNA win while Colorado preserved lifetime SVP registration as non-punitive.",
    "Texas opened a public-comment window on sex-offender supervision standards.",
  ],
  highlights: [
    "Florida SB 212 / Chapter 2026-17 makes public swimming pools and splash pads part of multiple registry restriction frameworks.",
    "A California federal judgment limits DOJ prosecution where California has not required or allowed the relevant registration act.",
    "Colorado’s Beagle decision reinforces the civil-regulatory label for adult SVP lifetime registration.",
    "Missouri SB 982 could clarify tiering and removal while increasing out-of-state compliance risk.",
    "Virginia Chapter 311 creates automatic teaching-license revocation tied to felony conviction and a registry order.",
  ],
};