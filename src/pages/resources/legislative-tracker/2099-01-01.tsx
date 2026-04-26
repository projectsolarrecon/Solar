import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";

/**
 * LegislativeTrackerMonthlyGoldenTemplate.tsx
 *
 * Purpose:
 * This is the canonical monthly Legislative Tracker scaffold for The SOLAR Project.
 *
 * File path convention for real monthly pages:
 * src/pages/resources/legislative-tracker/{slug}.tsx
 *
 * Example:
 * slug: 2026-03-01
 * file: src/pages/resources/legislative-tracker/2026-03-01.tsx
 * public URL: https://thesolarproject.org/resources/legislative-tracker/2026-03-01
 *
 * Matching metadata object belongs in:
 * src/data/legislativeUpdates.ts
 *
 * Example metadata:
 * {
 *   date: "March 1, 2026",
 *   title: "Legislative Tracker — February 2026 Update",
 *   slug: "2026-03-01",
 *   summary: "Short archive-card summary of the update.",
 *   tags: ["federal", "state", "courts", "implementation"],
 * },
 */

type SourceKind = "official" | "supplemental";
type Tone = "sky" | "amber" | "emerald" | "slate" | "rose" | "indigo";

type Source = {
  label: string;
  href: string;
  kind: SourceKind;
  type: string;
};

type PrimaryLink = {
  label: string;
  href: string;
  note?: string;
};

type ChipSet = {
  movement: string[];
  impact: string[];
  risk: string[];
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
  status: string;
  date: string;
  summary: string;
  tone: Tone;
  primaryLinks: PrimaryLink[];
  changed: ReactNode[];
  matters: ReactNode[];
  analysis: ReactNode[];
  watch: ReactNode[];
  chips: ChipSet;
  tags: string[];
  sources: Source[];
  action?: ActionLink;
};

type WatchItemData = {
  title: string;
  posture: string;
  why: string;
  next: string[];
};

type GlanceMetric = {
  label: string;
  value: string;
  body: string;
};

const siteOrigin = "https://thesolarproject.org";
const slug = "2099-01-01";
const canonicalUrl = `${siteOrigin}/resources/legislative-tracker/${slug}`;

const pageTitle = "Legislative Tracker — Golden Template Preview | The SOLAR Project";
const pageDescription =
  "Monthly SOLAR Legislative Tracker update covering registry law, court decisions, agency action, relief pathways, compliance burdens, and policy developments affecting registrants and families.";

const tones: Record<Tone, string> = {
  sky: "border-sky-200 bg-sky-50 text-sky-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  slate: "border-slate-200 bg-slate-50 text-slate-900",
  rose: "border-rose-200 bg-rose-50 text-rose-950",
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
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
  className = "font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function SourcePill({ source }: { source: Source }) {
  const isOfficial = source.kind === "official";

  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold underline underline-offset-2 ${
        isOfficial
          ? "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
      title={source.type}
    >
      {source.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function MetricCard({ metric }: { metric: GlanceMetric }) {
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

function AnalysisChipGroup({
  title,
  labels,
}: {
  title: string;
  labels: string[];
}) {
  if (!labels.length) return null;

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

function SolarAnalysis({
  chips,
  children,
}: {
  chips: ChipSet;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">
        SOLAR analysis
      </p>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <AnalysisChipGroup title="Movement" labels={chips.movement} />
        <AnalysisChipGroup title="Impact" labels={chips.impact} />
        <AnalysisChipGroup title="Risk / opportunity" labels={chips.risk} />
      </div>

      <div className="mt-3 space-y-2 text-sm leading-6 text-indigo-950">
        {children}
      </div>
    </div>
  );
}

function ContentBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
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

function CopyButton({
  text,
  copied,
  onCopy,
  label = "Copy message",
}: {
  text: string;
  copied: boolean;
  onCopy: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
    >
      {copied ? "Copied!" : label}
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
  const actionId = `development-action-${development.id}`;

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

      {development.primaryLinks.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {development.primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900 underline underline-offset-2 hover:bg-amber-100"
              title={link.note}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="mt-4 grid gap-3">
        <ContentBox title="What changed">
          {development.changed.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ContentBox>

        <ContentBox title="Why it matters">
          {development.matters.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ContentBox>

        <SolarAnalysis chips={development.chips}>
          {development.analysis.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </SolarAnalysis>

        <ContentBox title="What to watch">
          <ul className="list-disc space-y-1 pl-5">
            {development.watch.map((item, index) => (
              <li key={index}>{item}</li>
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
              text={development.action.message}
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
        <CopyButton text={action.message} copied={copied} onCopy={onCopy} />
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

/**
 * Dummy data below covers common edge cases:
 * - federal bill
 * - state bill with companion bill
 * - court decision
 * - agency/report item
 * - official + supplemental sources
 * - item-level action
 * - no-action item
 * - negative, mixed, positive, and unclear movement
 */

const glanceMetrics: GlanceMetric[] = [
  {
    label: "Key Developments",
    value: "8",
    body:
      "Federal bills, state restriction proposals, a court ruling, and an agency implementation item shaped the month.",
  },
  {
    label: "Dominant Posture",
    value: "Mixed",
    body:
      "Most activity expanded burdens, but one court ruling and one reform proposal created meaningful counterpoints.",
  },
  {
    label: "Rights / Reform Counterpoint",
    value: "2",
    body:
      "A court decision and a technical-violation reform bill showed how narrow legal limits can still matter.",
  },
  {
    label: "Action Paths",
    value: "3",
    body:
      "Highest-value actions focus on official legislator lookup, public-comment portals, and implementation safeguards.",
  },
];

const whyThisUpdateMatters =
  "This sample month shows how registry policy rarely moves through one dramatic overhaul. Instead, it accumulates through health-care exclusions, shelter rules, housing limits, online-identity proposals, agency implementation details, and court interpretations. For registrants and families, that accumulation can decide whether ordinary life remains stable, understandable, and legally navigable.";

const developments: Development[] = [
  {
    id: 1,
    group: "Federal Exclusion Proposals",
    title:
      "Federal sample bill would deny a stabilizing public benefit by registry status",
    jurisdiction: "Federal",
    status: "Introduced; referred to committee",
    date: "Sample date",
    summary:
      "This sample federal bill shows how to present a registry-status exclusion from a stabilizing public benefit.",
    tone: "rose",
    primaryLinks: [
      {
        label: "Sample federal bill text",
        href: "https://www.congress.gov/",
      },
    ],
    changed: [
      <>
        The{" "}
        <ExternalLink href="https://www.congress.gov/">
          sample federal bill
        </ExternalLink>{" "}
        would use sex-offense registration status as a categorical eligibility
        barrier for a stabilizing public benefit. The important substance is the
        exclusion itself, not merely the date of introduction.
      </>,
      "The proposal would apply a status-based rule instead of an individualized risk, need, or compliance assessment.",
    ],
    matters: [
      "Public benefits can support treatment, employment capacity, housing stability, disability care, medication access, and family stability.",
      "A categorical status exclusion can shift costs to families, local systems, emergency services, and supervision agencies.",
    ],
    analysis: [
      "This is negative movement because it turns registry status into a gatekeeping device for ordinary stability rather than a narrow public-safety tool.",
      "The policy risk is spillover: once one stabilizing system adopts categorical exclusion, other systems may copy the model.",
    ],
    watch: [
      "Whether the bill receives a hearing or companion bill.",
      "Whether amendments add individualized review, exceptions, or limiting language.",
      "Whether similar exclusions appear in state proposals.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Relief exclusion",
        "Reentry barrier",
        "Family-stability impact",
        "Punishment expansion",
      ],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk"],
    },
    tags: ["federal", "exclusion", "public benefits"],
    sources: [
      {
        label: "Congress.gov",
        href: "https://www.congress.gov/",
        kind: "official",
        type: "official federal legislative source",
      },
      {
        label: "Sample media/context source",
        href: "https://apnews.com/",
        kind: "supplemental",
        type: "media context",
      },
    ],
    action: {
      title: "Oppose status-based benefit exclusion",
      why:
        "A categorical exclusion can destabilize treatment, employment, housing, and family stability without individualized review.",
      label: "Find your member of Congress",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose categorical public-benefit exclusions based only on registry status. Any restriction should be narrow, evidence-based, and include individualized review, clear exceptions, and family-stability protections.",
    },
  },
  {
    id: 2,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "State sample SB 100 / HB 200 would expand place-based restrictions",
    jurisdiction: "Sample State",
    status: "Companion bills introduced; one chamber advanced",
    date: "Sample date",
    summary:
      "This sample state companion-bill item shows how to link both bill versions and explain place-based restrictions clearly.",
    tone: "amber",
    primaryLinks: [
      {
        label: "Sample SB 100 official page",
        href: "https://example.com/sample-sb-100",
      },
      {
        label: "Sample HB 200 official page",
        href: "https://example.com/sample-hb-200",
      },
    ],
    changed: [
      <>
        <ExternalLink href="https://example.com/sample-sb-100">
          Sample SB 100
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://example.com/sample-hb-200">
          Sample HB 200
        </ExternalLink>{" "}
        would expand place-based restrictions around schools, parks, child-care
        facilities, and public recreation spaces.
      </>,
      "The bill pair would create new compliance boundaries affecting housing, movement, family activity, employment, and supervision permissions.",
    ],
    matters: [
      "Place-based restrictions can make ordinary geography legally risky, especially when covered locations are common and boundaries are unclear.",
      "Families often experience these restrictions as household-level burdens because housing, caregiving, transportation, school events, and public recreation are shared activities.",
    ],
    analysis: [
      "This is negative movement because it expands exclusion zones and increases the chance that ordinary life becomes a compliance trap.",
      "If lawmakers insist on place-based rules, the minimum safeguards should include clear maps, narrow definitions, practical exceptions, and individualized discretion.",
    ],
    watch: [
      "Whether final text narrows covered places or distances.",
      "Whether companion bills remain identical or diverge.",
      "Whether official maps, guidance, or exceptions are added.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Housing barrier",
        "Family-stability impact",
        "Supervision burden",
      ],
      risk: ["Implementation risk", "Advocacy opening", "Clarification needed"],
    },
    tags: ["state", "housing", "presence restrictions", "companion bills"],
    sources: [
      {
        label: "Sample SB 100 official page",
        href: "https://example.com/sample-sb-100",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Sample HB 200 official page",
        href: "https://example.com/sample-hb-200",
        kind: "official",
        type: "official companion bill page",
      },
      {
        label: "Sample tracking context",
        href: "https://legiscan.com/",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
    action: {
      title: "Ask state lawmakers to narrow place-based restrictions",
      why:
        "Restrictions around schools, parks, pools, and child-care locations can create housing and family-stability burdens unless they are narrow and clearly mapped.",
      label: "Find your state legislators",
      href: "https://openstates.org/find_your_legislator/",
      message:
        "Please narrow any place-based registry restriction. Families need clear boundaries, practical exceptions for employment, treatment, caregiving, worship, voting, and school-related obligations, and evidence-based justification for any restriction.",
    },
  },
  {
    id: 3,
    group: "Courts & Rights",
    title:
      "Sample court decision required the government to prove the exact registry duty charged",
    jurisdiction: "Sample State Supreme Court",
    status: "Opinion issued",
    date: "Sample date",
    summary:
      "This sample court item shows positive or rights-protective movement when a court requires precision in registry prosecutions.",
    tone: "emerald",
    primaryLinks: [
      {
        label: "Sample court opinion",
        href: "https://example.com/sample-opinion",
      },
    ],
    changed: [
      <>
        The{" "}
        <ExternalLink href="https://example.com/sample-opinion">
          sample court opinion
        </ExternalLink>{" "}
        held that prosecutors must prove the specific registry duty charged
        rather than relying on generalized noncompliance.
      </>,
      "The ruling did not eliminate registration duties, but it narrowed how a technical-violation prosecution must be proven.",
    ],
    matters: [
      "Failure-to-register cases often turn on technical duties, deadlines, addresses, travel, temporary lodging, or reporting details.",
      "Requiring proof of the exact duty charged protects due process and reduces the risk that unclear rules become automatic criminal liability.",
    ],
    analysis: [
      "This is positive movement because it requires precision before punishment and recognizes that registry compliance is a detailed legal regime, not a simple moral label.",
      "For families, clearer proof requirements can reduce the risk of destabilizing prosecutions based on confusion or vague allegations.",
    ],
    watch: [
      "Whether lower courts apply the ruling broadly or narrowly.",
      "Whether prosecutors amend charging language in future cases.",
      "Whether lawmakers respond by clarifying duties or expanding liability.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Due-process concern", "Compliance clarity", "Rights concern"],
      risk: ["Watch closely", "Litigation risk"],
    },
    tags: ["court", "failure to register", "due process"],
    sources: [
      {
        label: "Sample court opinion",
        href: "https://example.com/sample-opinion",
        kind: "official",
        type: "official court opinion",
      },
    ],
  },
  {
    id: 4,
    group: "Agencies / Implementation",
    title:
      "Sample agency guidance opened implementation questions for online identifier reporting",
    jurisdiction: "Sample Agency",
    status: "Guidance issued; comment period pending",
    date: "Sample date",
    summary:
      "This sample agency item shows unclear movement where implementation details will decide whether the policy creates clarity or new risk.",
    tone: "indigo",
    primaryLinks: [
      {
        label: "Sample agency guidance",
        href: "https://example.com/sample-agency-guidance",
      },
      {
        label: "Sample comment portal",
        href: "https://example.com/sample-comment-portal",
      },
    ],
    changed: [
      <>
        The{" "}
        <ExternalLink href="https://example.com/sample-agency-guidance">
          sample agency guidance
        </ExternalLink>{" "}
        would interpret online identifier reporting requirements and invite
        public comment on implementation.
      </>,
      "The key practical issue is whether the guidance clarifies reporting duties or expands reporting risk across ordinary accounts, shared devices, employment platforms, and family communications.",
    ],
    matters: [
      "Online-identifier rules can affect speech, work, support groups, family contact, dating, and ordinary digital life.",
      "Implementation guidance can either reduce confusion or multiply technical-violation exposure.",
    ],
    analysis: [
      "This is unclear movement because implementation details will determine whether the guidance creates compliance clarity or new reporting traps.",
      "The public-comment period is an advocacy opening for families and impacted people to explain real-world digital life.",
    ],
    watch: [
      "Whether the final guidance defines covered platforms narrowly.",
      "Whether shared household accounts, employment accounts, and inactive accounts are addressed.",
      "Whether the agency provides plain-language examples and grace periods.",
    ],
    chips: {
      movement: ["Unclear movement"],
      impact: [
        "Online identifiers",
        "Compliance clarity",
        "Compliance burden",
        "Agency implementation",
      ],
      risk: ["Public-comment opportunity", "Implementation risk", "Clarification needed"],
    },
    tags: ["agency", "online identifiers", "public comment"],
    sources: [
      {
        label: "Sample agency guidance",
        href: "https://example.com/sample-agency-guidance",
        kind: "official",
        type: "official agency guidance",
      },
      {
        label: "Sample public comment portal",
        href: "https://example.com/sample-comment-portal",
        kind: "official",
        type: "official action portal",
      },
    ],
    action: {
      title: "Submit implementation comments",
      why:
        "Public comments can document how online-identifier rules affect work, family contact, shared devices, and ordinary digital life.",
      label: "Open comment portal",
      href: "https://example.com/sample-comment-portal",
      message:
        "Please ensure online-identifier guidance is narrow, clear, and workable. It should address shared devices, inactive accounts, employment platforms, family communications, grace periods, and plain-language examples.",
    },
  },
];

const actionCenterItems = developments
  .filter((development) => development.action)
  .slice(0, 3)
  .map((development) => development.action!) satisfies ActionLink[];

const watchlist: WatchItemData[] = [
  {
    title: "Sample federal exclusion bills",
    posture: "Introduced and awaiting committee activity.",
    why:
      "Federal exclusion bills can normalize registry status as a gatekeeping category for health care, housing, benefits, and emergency support.",
    next: [
      "Watch for hearings, companion bills, amendments, or sponsor additions.",
      "Track whether limiting exceptions or individualized-review language appears.",
    ],
  },
  {
    title: "Sample state place-based restriction package",
    posture: "Companion bills pending in separate chambers.",
    why:
      "Place-based restrictions can create major housing, family, transportation, and supervision burdens even when bill language appears technical.",
    next: [
      "Compare House and Senate text for divergence.",
      "Watch for committee substitutes, maps, exceptions, and agency guidance.",
    ],
  },
  {
    title: "Sample agency online-identifier guidance",
    posture: "Implementation guidance under review.",
    why:
      "Agency interpretation will determine whether the rule clarifies obligations or expands technical-violation exposure.",
    next: [
      "Monitor final guidance, FAQ language, and comment responses.",
      "Look for examples addressing shared accounts, employment platforms, and inactive accounts.",
    ],
  },
];

export default function LegislativeTrackerMonthlyGoldenTemplate(): JSX.Element {
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

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const groupedDevelopments = developments.reduce<Record<string, Development[]>>(
    (acc, development) => {
      acc[development.group] = acc[development.group] ?? [];
      acc[development.group].push(development);
      return acc;
    },
    {}
  );

  return (
    <main className="min-h-screen bg-slate-100">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="legislative tracker, registry reform, sex offense laws, SORNA, reentry, registry policy"
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
            <Badge>Federal / State / Courts</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — Golden Template Preview
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            A plain-language SOLAR roundup of the month’s registry-policy
            developments, including legislation, court decisions, agency action,
            implementation issues, and action paths for impacted people,
            families, and reform advocates.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span> This
              is a live visual preview of the Golden Template scaffold using dummy data. It is intentionally dated 2099-01-01 so it can render directly without being listed as a real monthly update.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <button
              type="button"
              onClick={handlePrint}
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
            <a
              href="#watchlist"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              Watchlist
            </a>
          </div>

          <div className="mt-6">
            <ShareBar />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
        <Section id="glance" eyebrow="At a Glance" title="What the template shows">
          <div className="grid gap-4 md:grid-cols-4">
            {glanceMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-black text-slate-950">
              Why this update matters
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {whyThisUpdateMatters}
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="Template development cards"
        >
          <div className="space-y-6">
            {Object.entries(groupedDevelopments).map(([group, items]) => (
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

        <Section id="actions" eyebrow="Action Center" title="Most useful action paths">
          <p className="text-sm leading-6 text-slate-700">
            These are the highest-value reader actions from this update. The
            Action Center should not repeat every item-level script; it should
            surface the top two to four meaningful paths.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {actionCenterItems.map((action, index) => (
              <ActionCard
                key={action.title}
                action={action}
                copied={copiedId === `action-center-${index}`}
                onCopy={() =>
                  copyText(`action-center-${index}`, action.message)
                }
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
              official public-comment portals. Reputable reporting,
              legislative-tracking pages, advocacy explainers, and civic-data
              sources may be used as supplemental context, but they should not
              replace official sources when official sources are available.
            </p>
            <p>
              The purpose of this tracker is not to catalogue every criminal
              case or every public-safety headline. It is to identify legal and
              policy developments that affect registry duties, reentry,
              housing, family stability, relief pathways, due process,
              supervision, and evidence-based reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "Sample teaser: the month’s dominant pattern was mixed, with burden-expanding bills and rights-protective counterpoints.",
    "Sample teaser: federal and state proposals showed how registry status can become a gatekeeping tool for ordinary stability.",
    "Sample teaser: action paths focus on official legislator lookup, public-comment portals, and implementation safeguards.",
  ],
  highlights: [
    "Sample federal bill would deny a stabilizing public benefit by registry status.",
    "Sample state companion bills would expand place-based restrictions.",
    "Sample court decision required proof of the exact registry duty charged.",
    "Sample agency guidance opened implementation questions for online identifier reporting.",
  ],
};
