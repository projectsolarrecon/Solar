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

const slug = "2026-10-01";
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
    value: "19",
    body:
      "September produced a dense mix of court rulings, enacted restrictions, relief disputes, federal legislation, and agency implementation.",
  },
  {
    label: "Dominant Posture",
    value: "Mostly restrictive",
    body:
      "Three major rights-and-relief wins stood out, but most other movement tightened supervision, narrowed relief, or added collateral barriers.",
  },
  {
    label: "Rights / Reform / Litigation Counterpoint",
    value: "3 major wins",
    body:
      "Michigan, the Eleventh Circuit, and Georgia each rejected forms of automatic or unnecessarily prolonged registry burden.",
  },
  {
    label: "Action Paths",
    value: "3",
    body:
      "Readers can comment on California treatment policy, contact Congress on H.R. 8775, and weigh in on New York placement-notification legislation.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Major Rights & Relief Wins",
    title:
      "Michigan ruling removes more than 20,000 people from registration",
    jurisdiction: "Michigan",
    date: "September 9–11, 2026",
    summary:
      "Michigan’s Supreme Court drew a hard retroactivity line at July 1, 2011, and the state quickly translated that ruling into one of the largest registry-removal events in recent years.",
    tone: "emerald",
    changed: [
      <>
        In <ExternalLink href="https://www.michigan.gov/msp/le/legal-resources/legal-update/legal-updates-pages/172">
          People v. Smith
        </ExternalLink>, the Michigan Supreme Court held that the 2021 Sex
        Offenders Registration Act cannot constitutionally impose its regime on
        people whose Michigan-registerable conduct occurred before July 1,
        2011.
      </>,
      <>
        Michigan State Police then announced that people required to register
        solely because of pre-July 2011 conduct must be permanently removed
        from both the public registry and law-enforcement database. By
        September 11, MSP reported that more than 20,000 people had been
        removed from a population of roughly 43,000 people who had been
        actively registered or required to register.
      </>,
    ],
    matters: [
      "This is not a cosmetic change to public visibility. For the affected cohort, Michigan registration, reporting, and verification duties end altogether, including for qualifying people whose registration obligation originated in another state.",
      "The scale matters for families as much as the doctrine does: tens of thousands of households no longer have to organize work, housing, travel, identification, and routine police reporting around a retroactively expanded registration system.",
    ],
    analysis: [
      "SOLAR reads this as strong positive movement because the court treated the cumulative modern registry as a constitutional burden that cannot simply be imposed backward in time.",
      "The ruling also exposes a central policy problem: a system described as civil administration had grown severe enough that retroactive application could not survive ex-post-facto scrutiny.",
    ],
    watch: [
      "Whether Michigan lawmakers attempt a statutory response and, if so, whether it respects the court’s retroactivity holding.",
      "Whether MSP and local agencies correct residual records promptly, especially for people with out-of-state convictions whose only Michigan duty arose from pre-July 2011 conduct.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Relief expansion", "Retroactivity protection", "Rights protection"],
      risk: ["Reform opening", "Implementation risk"],
    },
    tags: ["Michigan", "retroactivity", "registry removal", "ex post facto"],
    sources: [
      {
        label: "Michigan State Police Legal Update 172",
        href: "https://www.michigan.gov/msp/le/legal-resources/legal-update/legal-updates-pages/172",
        kind: "official",
        type: "official state legal update",
      },
      {
        label: "MSP September 11 implementation statement",
        href: "https://www.michigan.gov/mspnewsroom/news-releases/2026/09/11/sor-compliance-official-statement",
        kind: "official",
        type: "official agency implementation statement",
      },
    ],
  },
  {
    id: 2,
    group: "Major Rights & Relief Wins",
    title:
      "Eleventh Circuit rejects Alabama’s lifetime parent-child cohabitation ban as applied",
    jurisdiction: "Alabama / Eleventh Circuit",
    date: "September 29, 2026",
    summary:
      "A federal appeals court held that Alabama could not automatically bar Bruce Henry from ever living with or having overnight visits with his own child based solely on his registry-triggering conviction.",
    tone: "emerald",
    changed: [
      <>
        In <ExternalLink href="https://www.govinfo.gov/app/details/USCOURTS-ca11-24-10139/USCOURTS-ca11-24-10139-1">
          Henry v. Sheriff of Tuscaloosa County
        </ExternalLink>, the Eleventh Circuit applied strict scrutiny to
        Alabama SORCNA’s lifetime prohibition on certain registrants residing
        with or having overnight visits with any minor, including their own
        children.
      </>,
      "The panel held that the restriction failed strict scrutiny as applied to Henry, whose registration-triggering offense was possession of child pornography. The decision did not facially invalidate the entire Alabama statute.",
    ],
    matters: [
      "The practical issue is family life, not just residence paperwork. A categorical lifetime ban can separate a parent from a child inside the home even when the state has never made an individualized finding that the parent presents a contact risk to that child.",
      "The ruling gives similarly situated families a serious constitutional argument that fundamental parent-child relationships cannot be extinguished forever through registry status alone.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because the court required Alabama to justify an extraordinary family restriction with narrow tailoring rather than fear-based categorical assumptions.",
      "The as-applied posture is important: this is not a universal invalidation, but it creates a meaningful route for individualized constitutional review where SORCNA’s blanket rule collides with fundamental family rights.",
    ],
    watch: [
      "Any rehearing or Supreme Court activity and how Alabama responds to the ruling.",
      "How district courts apply Henry to other parents with different offense histories and factual records.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Family-stability impact", "Rights concern", "Due-process concern"],
      risk: ["Reform opening", "Watch closely"],
    },
    tags: ["Alabama", "family rights", "SORCNA", "strict scrutiny"],
    sources: [
      {
        label: "Henry v. Sheriff of Tuscaloosa County",
        href: "https://www.govinfo.gov/app/details/USCOURTS-ca11-24-10139/USCOURTS-ca11-24-10139-1",
        kind: "official",
        type: "official federal appellate opinion via GovInfo",
      },
      {
        label: "Eleventh Circuit opinion mirror",
        href: "https://law.justia.com/cases/federal/appellate-courts/ca11/24-10139/24-10139-2026-09-29.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 3,
    group: "Major Rights & Relief Wins",
    title:
      "Georgia appellate court restores a Level I registrant’s path to removal review",
    jurisdiction: "Georgia",
    date: "September 10, 2026",
    summary:
      "Georgia’s Court of Appeals held that a newer five-year waiting rule did not govern a pre-July 2024 offense, reopening the trial court’s ability to consider removal for a Level I registrant.",
    tone: "emerald",
    changed: [
      <>
        In <ExternalLink href="https://caselaw.findlaw.com/court/ga-court-of-appeals/391917.html">
          Perry v. State
        </ExternalLink>, the Court of Appeals held that the version of Georgia’s
        removal statute governing Kenneth Perry’s pre-July 1, 2024 offense
        controls his petition.
      </>,
      "Under that earlier version, a Level I / low-risk classification independently permits a court to consider removal. The appellate court did not order Perry removed; it vacated the denial and returned the case for the trial court to exercise the authority the older statute provides.",
    ],
    matters: [
      "A waiting-period interpretation can turn a nominal relief process into years of additional public registration even for someone the state has already classified at its lowest risk level.",
      "For similarly situated Georgia registrants, Perry may preserve access to individualized removal review that would otherwise have been delayed by a later statutory amendment.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because the court refused to use a later law to postpone a relief opportunity that existed under the statute governing the offense.",
      "The decision does not guarantee removal. Its value is procedural and practical: it preserves the court’s ability to decide the person in front of it rather than mechanically extending registration through a newer waiting period.",
    ],
    watch: [
      "The trial court’s decision on remand and how it evaluates Perry’s Level I classification and current circumstances.",
      "Whether Georgia courts apply the same statutory timing rule to other pre-July 2024 petitioners.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Relief expansion", "Compliance clarity"],
      risk: ["Reform opening", "Watch closely"],
    },
    tags: ["Georgia", "Level I", "registry removal", "statutory interpretation"],
    sources: [
      {
        label: "Georgia Court of Appeals",
        href: "https://www.gaappeals.gov/",
        kind: "official",
        type: "official appellate court source",
      },
      {
        label: "Perry v. State opinion mirror",
        href: "https://caselaw.findlaw.com/court/ga-court-of-appeals/391917.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 4,
    group: "Registry Relief Under Pressure",
    title:
      "Florida Fourth DCA says current removal law governs older registrants’ petitions",
    jurisdiction: "Florida",
    date: "September 2, 2026",
    summary:
      "Florida’s Fourth District Court of Appeal made it harder to rely on earlier, more favorable registry-removal rules by treating the petition process as a current civil procedure.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://law.justia.com/cases/florida/fourth-district-court-of-appeal/2026/4d2025-2547.html">
          FDLE v. Garcia
        </ExternalLink>, the Fourth DCA reversed an order removing Angel Garcia
        from Florida’s registry and held that the version of section 943.0435
        in effect when a removal petition is filed governs the proceeding.
      </>,
      "The court also held that registry-removal proceedings are civil regulatory matters and that FDLE has standing to challenge a removal order that affects its statutory registry-maintenance duties.",
    ],
    matters: [
      "For people who completed sentences under older rules, the decision blocks an argument that a more favorable historical removal procedure remains attached to their case.",
      "That can convert legislative amendments made years later into additional years of registration, even when the person’s original conviction and sentence are long finished.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it narrows access to relief and permits later procedural restrictions to govern people whose cases arose under earlier law.",
      "The civil-regulatory label again does important work: it allows the state to alter the path to ending registration without treating the change like an increase in criminal punishment.",
    ],
    watch: [
      "Whether the Florida Supreme Court is asked to resolve appellate disagreement over the nature and review of registry-removal proceedings.",
      "How Garcia is applied to petitions filed under other historical versions of section 943.0435.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief restriction", "Retroactivity concern"],
      risk: ["Litigation risk", "Watch closely"],
    },
    tags: ["Florida", "registry removal", "FDLE", "civil regulatory"],
    sources: [
      {
        label: "Florida Fourth DCA opinions",
        href: "https://4dca.flcourts.gov/Opinions",
        kind: "official",
        type: "official appellate court opinions portal",
      },
      {
        label: "FDLE v. Garcia opinion mirror",
        href: "https://law.justia.com/cases/florida/fourth-district-court-of-appeal/2026/4d2025-2547.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 5,
    group: "Registry Relief Under Pressure",
    title:
      "Florida Third DCA reinforces current-law rule for registry removal",
    jurisdiction: "Florida",
    date: "September 30, 2026",
    summary:
      "A second Florida appellate court reached the same practical result as Garcia: a registrant seeking removal cannot lock in the more favorable petition rules that existed years earlier.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://law.justia.com/cases/florida/third-district-court-of-appeal/2026/3d24-1122.html">
          State v. Hernandez
        </ExternalLink>, the Third DCA reversed a registry-removal order and
        held that the current version of section 943.0435 governs when relief
        is sought.
      </>,
      "Hernandez argued for the 2002 version, which permitted qualifying petitions after 20 years. The court concluded that the removal procedure is civil and procedural and that he had no vested right to the older process before lawmakers lengthened and changed eligibility rules.",
    ],
    matters: [
      "Garcia and Hernandez together look less like isolated cases and more like an emerging Florida appellate rule: later legislatures can reshape the path to registry removal before a person becomes eligible to use it.",
      "For families planning around a future termination date, that means the statutory finish line may move while registration is already underway.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it strengthens a legal framework in which relief can become more remote after the original sentence has ended.",
      "The September 30 opinion was still within the rehearing/finality window at month’s end, so its immediate posture should be treated carefully even though its reasoning reinforces Garcia.",
    ],
    watch: [
      "Rehearing, finality, and any request for Florida Supreme Court review.",
      "Whether later cases reconcile or deepen disagreements among Florida districts over registry-removal procedure.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief restriction", "Retroactivity concern"],
      risk: ["Appeal likely", "Litigation risk"],
    },
    tags: ["Florida", "registry removal", "current law", "relief"],
    sources: [
      {
        label: "Florida Third DCA written opinions",
        href: "https://3dca.flcourts.gov/opinions/Search-Opinions/Written-Opinions",
        kind: "official",
        type: "official appellate court opinions portal",
      },
      {
        label: "State v. Hernandez opinion mirror",
        href: "https://law.justia.com/cases/florida/third-district-court-of-appeal/2026/3d24-1122.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 6,
    group: "Registry Relief Under Pressure",
    title:
      "Pennsylvania nonprecedential ruling leaves Subchapter I registration in place",
    jurisdiction: "Pennsylvania",
    date: "September 3, 2026",
    summary:
      "A Commonwealth Court panel rejected a SORNA II challenge while pointing to Pennsylvania’s separate 25-year petition route for some people who can show they no longer pose a threat.",
    tone: "indigo",
    changed: [
      <>
        In <ExternalLink href="https://law.justia.com/cases/pennsylvania/commonwealth-court/2026/144-m-d-2021.html">
          C.L. Haigh v. Pennsylvania State Police
        </ExternalLink>, Commonwealth Court rejected the petitioner’s challenge
        and held that SORNA II Subchapter I applied where the statutory
        prerequisites were satisfied.
      </>,
      "The court noted that Subchapter I separately permits a qualifying person to seek relief after 25 years of compliant registration by showing that continued registration is no longer necessary for public protection. The September disposition is nonprecedential.",
    ],
    matters: [
      "The ruling does not newly create the 25-year route, but it illustrates how narrow and delayed relief can be for people whose underlying convictions predate today’s registry structure.",
      "Because the opinion is nonprecedential, its broader legal reach is limited, but the practical burden on the individual remains substantial.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement rather than a new punitive expansion: the decision largely applies existing Pennsylvania doctrine and does not itself create a new duty.",
      "The case still belongs in the tracker because it shows the difference between a theoretical relief mechanism and timely relief in ordinary life.",
    ],
    watch: [
      "Whether future precedential Pennsylvania decisions revisit Subchapter I retroactivity or the 25-year termination mechanism.",
      "How courts evaluate evidence that a long-term registrant no longer poses a public-safety threat.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Relief limitation", "Retroactivity concern"],
      risk: ["Watch closely"],
    },
    tags: ["Pennsylvania", "SORNA II", "Subchapter I", "nonprecedential"],
    sources: [
      {
        label: "Pennsylvania Commonwealth Court",
        href: "https://www.pacourts.us/courts/commonwealth-court",
        kind: "official",
        type: "official court source",
      },
      {
        label: "Haigh opinion mirror",
        href: "https://law.justia.com/cases/pennsylvania/commonwealth-court/2026/144-m-d-2021.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 7,
    group: "Registry Relief Under Pressure",
    title:
      "Federal court again says Florida registry consequences do not create habeas custody",
    jurisdiction: "Florida / federal",
    date: "September 30, 2026",
    summary:
      "A federal district court held that Florida registration and related restrictions, standing alone after a sentence has expired, do not open the federal habeas route for attacking the old conviction.",
    tone: "indigo",
    changed: [
      <>
        In <ExternalLink href="https://law.justia.com/cases/federal/district-courts/florida/flmdce/2%3A2024cv00294/426069/35/">
          Clements v. Secretary, Department of Corrections
        </ExternalLink>, the Middle District of Florida again dismissed a
        section 2254 petition for lack of jurisdiction after an Eleventh
        Circuit remand for factual development.
      </>,
      "The court held that Florida’s registration, reporting, residency, and related consequences do not place a person whose criminal sentence has expired “in custody” for federal habeas purposes. The dismissal was without prejudice and did not decide whether the challenged restrictions are constitutional on the merits.",
    ],
    matters: [
      "Procedure determines whether a court can ever reach the substance of a registry challenge. Here, the ongoing restrictions may be significant in daily life, but they are not enough to satisfy habeas jurisdiction.",
      "For registrants and families, that means constitutional challenges to an expired conviction or its registry consequences may need a different vehicle, such as a properly framed civil-rights action.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement with a real litigation barrier. The court did not endorse Florida’s registry system; it held that this particular federal remedy is unavailable.",
      "That distinction matters because describing the case as a merits victory for the registry would overstate what the court actually decided.",
    ],
    watch: [
      "Any appeal and whether the Eleventh Circuit further defines when registry restraints can satisfy federal custody requirements.",
      "Whether similar plaintiffs shift toward section 1983 or other civil-rights litigation rather than habeas.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Rights concern", "Litigation barrier"],
      risk: ["Litigation risk", "Clarification needed"],
    },
    tags: ["Florida", "habeas", "federal court", "jurisdiction"],
    sources: [
      {
        label: "Middle District of Florida opinions index",
        href: "https://ecf.flmd.uscourts.gov/cgi-bin/Opinions.pl?division=2",
        kind: "official",
        type: "official federal court opinions source",
      },
      {
        label: "Clements opinion mirror",
        href: "https://law.justia.com/cases/federal/district-courts/florida/flmdce/2%3A2024cv00294/426069/35/",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 8,
    group: "Supervision Expands",
    title:
      "New Mexico extends mandatory sex-offense probation rules to conditional discharge",
    jurisdiction: "New Mexico",
    date: "September 10, 2026",
    summary:
      "New Mexico’s Court of Appeals closed a route to early discharge by holding that a mandatory five-to-twenty-year sex-offender probation statute applies even when the underlying disposition is a conditional discharge.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://coa.nmcourts.gov/formsfiles/september-10-2026-state-of-new-mexico-v-patrick-howard-no-a-1-ca-42236/">
          State v. Howard
        </ExternalLink>, the Court of Appeals held that the state’s
        sex-offender-specific probation statute applies to a defendant who
        received a statutory conditional discharge.
      </>,
      "That statute requires qualifying sex offenders to serve an indeterminate period of supervised probation of at least five and no more than twenty years. The appellate court reversed a trial court ruling that had allowed early discharge outside that framework.",
    ],
    matters: [
      "A conditional discharge can otherwise function as a less punitive disposition, but Howard makes the sex-offense supervision statute controlling even in that setting.",
      "The practical result is years of continued supervision exposure, including the possibility of treatment rules, searches, technology restrictions, travel limits, and revocation risk that accompany probation.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands the reach of a long, offense-specific supervision framework and removes a route to earlier completion.",
      "The case illustrates how sex-offense statutes can override the ordinary meaning of a more lenient disposition and make supervision duration turn on offense category rather than demonstrated current need.",
    ],
    watch: [
      "Any New Mexico Supreme Court review of the interaction between conditional discharge and mandatory sex-offense probation.",
      "How trial courts calculate and administer the five-to-twenty-year term after Howard.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Supervision burden", "Punishment expansion"],
      risk: ["Enforcement risk", "Watch closely"],
    },
    tags: ["New Mexico", "probation", "conditional discharge", "supervision"],
    sources: [
      {
        label: "New Mexico Court of Appeals — State v. Howard",
        href: "https://coa.nmcourts.gov/formsfiles/september-10-2026-state-of-new-mexico-v-patrick-howard-no-a-1-ca-42236/",
        kind: "official",
        type: "official appellate opinion source",
      },
    ],
  },
  {
    id: 9,
    group: "Supervision Expands",
    title:
      "Virginia Supreme Court upholds broad internet controls during probation",
    jurisdiction: "Virginia",
    date: "September 3, 2026",
    summary:
      "Virginia’s high court distinguished Packingham and upheld probation conditions requiring approval before internet or social-media use, plus monitoring when access is allowed.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://law.justia.com/cases/virginia/supreme-court/2026/250701.html">
          Commonwealth v. Kuykendall
        </ExternalLink>, the Virginia Supreme Court reinstated sex-offense
        probation conditions restricting internet and social-networking use
        without probation-officer approval.
      </>,
      "Approved access could also require monitoring software and use of the probation officer as an accountability partner. The court distinguished Packingham v. North Carolina because Packingham involved a law applied to people who had completed their sentences, while Kuykendall remained on probation with a suspended sentence.",
    ],
    matters: [
      "Internet access now touches employment, healthcare, banking, education, family communication, transportation, government services, and basic reentry. Broad supervision controls can therefore reach far beyond social media.",
      "The decision gives Virginia courts significant room to condition access during probation when the restrictions are tied to rehabilitation and public safety.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it validates a substantial barrier to ordinary digital life during supervision and leaves important access decisions to probation approval.",
      "The supervision distinction is legally important, but it does not erase practical consequences: a condition can be constitutional in the court’s view while still making work, family support, and reintegration materially harder.",
    ],
    watch: [
      "How Virginia trial courts tailor internet conditions after Kuykendall and whether they require offense-specific findings.",
      "Whether future cases test denials of access needed for work, education, telehealth, or family communication.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Online identifiers", "Supervision burden", "Rights concern"],
      risk: ["Enforcement risk", "Implementation risk"],
    },
    tags: ["Virginia", "internet", "probation", "Packingham"],
    sources: [
      {
        label: "Supreme Court of Virginia",
        href: "https://www.vacourts.gov/courts/scv/home.html",
        kind: "official",
        type: "official state supreme court source",
      },
      {
        label: "Kuykendall opinion mirror",
        href: "https://law.justia.com/cases/virginia/supreme-court/2026/250701.html",
        kind: "supplemental",
        type: "supplemental court opinion mirror",
      },
    ],
  },
  {
    id: 10,
    group: "Supervision Expands",
    title:
      "Fifth Circuit allows home detention and GPS to continue with unfinished treatment",
    jurisdiction: "Federal / Fifth Circuit",
    date: "September 1, 2026",
    summary:
      "The Fifth Circuit upheld a supervised-release modification tying home detention and GPS monitoring to completion of court-ordered sex-offender treatment.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://www.ca5.uscourts.gov/opinions/pub/24/24-20462-CR0.pdf">
          United States v. Tampico
        </ExternalLink>, the Fifth Circuit upheld six months of home detention
        and GPS location monitoring, with continuation if sex-offender treatment
        remained incomplete.
      </>,
      "The court rejected the argument that these restrictions improperly extended punishment beyond the statutory imprisonment maximum because they were imposed by modifying an existing term of supervised release rather than adding imprisonment after revocation.",
    ],
    matters: [
      "Home detention and continuous GPS can sharply limit employment, caregiving, medical appointments, family activities, and ordinary movement even when they are formally classified as supervision rather than incarceration.",
      "Tying those restrictions to treatment completion can also make their duration depend on program availability, treatment decisions, and a person’s ability to satisfy requirements outside the courtroom.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the ruling supports substantial liberty restrictions during supervised release and permits those restrictions to persist with unfinished treatment.",
      "The case is another example of legal labels doing real work: calling the restrictions a modification of supervision does not make their day-to-day impact disappear.",
    ],
    watch: [
      "How Fifth Circuit district courts use Tampico when modifying supervision for treatment noncompletion.",
      "Whether future cases challenge treatment-linked restrictions where delay is caused by program capacity rather than the supervisee’s conduct.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Supervision burden", "Location monitoring"],
      risk: ["Litigation risk", "Enforcement risk"],
    },
    tags: ["federal", "Fifth Circuit", "GPS", "home detention", "treatment"],
    sources: [
      {
        label: "Fifth Circuit — United States v. Tampico",
        href: "https://www.ca5.uscourts.gov/opinions/pub/24/24-20462-CR0.pdf",
        kind: "official",
        type: "official federal appellate opinion PDF",
      },
    ],
  },
  {
    id: 11,
    group: "Supervision Expands",
    title:
      "Kansas Supreme Court reinstates lifetime postrelease supervision",
    jurisdiction: "Kansas",
    date: "September 11, 2026",
    summary:
      "Kansas’s high court held that an adult defendant’s age could support mandatory lifetime postrelease supervision after a valid general jury-trial waiver and admission.",
    tone: "rose",
    changed: [
      <>
        In <ExternalLink href="https://searchdro.kscourts.gov/documents/pdf/caseDecisions/6a64ecc0-4711-4dfd-8aa4-24c01d323f5f_127830.pdf">
          State v. Contreras
        </ExternalLink>, the Kansas Supreme Court reinstated lifetime
        postrelease supervision on qualifying sexually violent offense counts.
      </>,
      "The court agreed that adulthood at the time of the offense is an Apprendi fact because it increases punishment, but held that Contreras’s knowing and voluntary general jury-trial waiver and admission adequately established the relevant age; a second, separately itemized waiver was not required.",
    ],
    matters: [
      "The immediate consequence is lifetime state control after imprisonment for the qualifying counts, with all of the compliance, revocation, employment, travel, and family implications that indefinite supervision can carry.",
      "The procedural holding also reduces one route for challenging lifetime supervision where age was admitted through the plea process.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the ruling restores a permanent supervision consequence and narrows a constitutional procedure argument against it.",
      "Lifetime supervision deserves particular scrutiny because it assumes a need for state control decades into the future without requiring a later individualized showing that the person still presents the same risk.",
    ],
    watch: [
      "Whether federal constitutional challenges to Kansas lifetime postrelease supervision continue on other grounds.",
      "Any legislative movement toward periodic individualized review or termination standards.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Supervision burden", "Punishment expansion", "Due-process concern"],
      risk: ["Litigation risk", "Watch closely"],
    },
    tags: ["Kansas", "lifetime supervision", "Apprendi", "postrelease"],
    sources: [
      {
        label: "Kansas Supreme Court — State v. Contreras",
        href: "https://searchdro.kscourts.gov/documents/pdf/caseDecisions/6a64ecc0-4711-4dfd-8aa4-24c01d323f5f_127830.pdf",
        kind: "official",
        type: "official state supreme court opinion PDF",
      },
    ],
  },
  {
    id: 12,
    group: "Supervision Expands",
    title:
      "California AB 1816 allows an extra year of probation for unfinished programming",
    jurisdiction: "California",
    date: "Signed September 30, 2026",
    summary:
      "California created a registrant-specific mechanism for extending probation when required programming remains incomplete, adding up to one more year of supervision.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1816">
          AB 1816
        </ExternalLink>, Chapter 833, allows a probation department to petition
        for additional supervision for a person required to register.
      </>,
      "If the court finds that probation has not been successfully completed and more time is necessary to complete specified programming, probation may be extended for up to one additional year.",
    ],
    matters: [
      "An extra year of probation can mean another year of searches, travel approval, technology controls, treatment mandates, employment scrutiny, and revocation exposure.",
      "The most important implementation question is causation: people should not be kept under supervision longer simply because programming was unavailable, delayed, or administratively difficult to complete.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the law creates a sex-registration-linked path to extend supervision beyond the ordinary term.",
      "Programming can support rehabilitation, but treatment should not become a mechanism for prolonging state control when noncompletion is not evidence of dangerousness or willful noncompliance.",
    ],
    watch: [
      "How probation departments document the need for an extension and whether courts distinguish unwillingness from lack of program access.",
      "Whether implementation guidance addresses waitlists, disability accommodations, language access, cost, and other barriers outside the probationer’s control.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Supervision burden", "Punishment expansion"],
      risk: ["Implementation risk", "Enforcement risk"],
    },
    tags: ["California", "AB 1816", "probation", "programming"],
    sources: [
      {
        label: "California Legislature — AB 1816",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1816",
        kind: "official",
        type: "official chaptered bill source",
      },
      {
        label: "Governor signing announcement",
        href: "https://www.gov.ca.gov/2026/09/30/governor-newsom-signs-bills-to-protect-sexual-assault-survivors-and-increase-safety-on-college-campuses/",
        kind: "official",
        type: "official executive source",
      },
    ],
  },
  {
    id: 13,
    group: "New Collateral Restrictions",
    title:
      "California AB 767 expands SVP placement exclusion zones to day-care centers",
    jurisdiction: "California",
    date: "Signed September 18, 2026",
    summary:
      "California added day-care centers to a one-quarter-mile conditional-release placement exclusion, while protecting existing placements from being displaced by a later-opening facility.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB767">
          AB 767
        </ExternalLink>, Chapter 266, adds day-care centers to the existing
        one-quarter-mile placement restriction that applies to certain sexually
        violent predator conditional-release placements.
      </>,
      "The final law also includes an important limiting rule: a day-care center or private school established after an existing placement does not retroactively make that placement unlawful.",
    ],
    matters: [
      "Expanding exclusion geography can make already difficult conditional-release housing searches even harder, especially in communities where day-care facilities are dispersed through residential areas.",
      "The grandfathering rule is meaningful because it prevents a lawfully established placement from becoming illegal solely because a new child-serving facility later opens nearby.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement. The dominant effect is restrictive because lawful placement options shrink, but the anti-displacement protection prevents an additional form of instability.",
      "The broader policy question remains whether geographic exclusion is a better safety tool than individualized placement assessment, supervision, treatment, and enforceable person-specific conditions.",
    ],
    watch: [
      "How counties and courts measure the quarter-mile distance and identify qualifying day-care centers.",
      "Whether placement searches become longer or more geographically concentrated after the new restriction takes effect.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: ["Housing barrier", "Compliance clarity"],
      risk: ["Implementation risk", "Watch closely"],
    },
    tags: ["California", "AB 767", "SVP", "housing", "day care"],
    sources: [
      {
        label: "California Legislature — AB 767",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB767",
        kind: "official",
        type: "official chaptered bill source",
      },
    ],
  },
  {
    id: 14,
    group: "New Collateral Restrictions",
    title:
      "California AB 2691 uses registration-triggering crimes to expand elective-office disqualification",
    jurisdiction: "California",
    date: "Signed September 27, 2026",
    summary:
      "California tied an additional civic disability to a category of felony sexual-assault convictions defined through the state’s registration statute.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2691">
          AB 2691
        </ExternalLink>, Chapter 480, expands California’s existing
        disqualification from state or local elective office to specified
        felony convictions involving sexual assault or human trafficking.
      </>,
      "For the sexual-assault category, the chaptered definition reaches offenses requiring registration under Penal Code section 290(d)(3), making the registration framework itself part of the trigger for an additional civic exclusion.",
    ],
    matters: [
      "The law does more than punish the original offense. It uses a registry classification to determine who may be categorically barred from holding elected office after the criminal case.",
      "That matters because registry status increasingly functions as a gateway to collateral consequences far beyond the stated purpose of keeping an address database.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands a status-linked civil disability without individualized consideration of present fitness, rehabilitation, or time offense-free.",
      "Public office can reasonably carry integrity rules, but using registration status as a proxy for permanent civic unfitness extends punishment into a different domain of citizenship.",
    ],
    watch: [
      "Implementation of the new disqualification and any legal challenges involving restoration of civil rights.",
      "Whether California or other states extend registration classifications into additional occupational or civic eligibility rules.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Reentry barrier", "Rights concern"],
      risk: ["Symbolic but important", "Watch closely"],
    },
    tags: ["California", "AB 2691", "civil rights", "elected office"],
    sources: [
      {
        label: "California Legislature — AB 2691",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2691",
        kind: "official",
        type: "official chaptered bill source",
      },
    ],
  },
  {
    id: 15,
    group: "New Collateral Restrictions",
    title:
      "House passes federal bill adding sex-offense-based union employment disqualification",
    jurisdiction: "Federal",
    date: "House passage September 16, 2026",
    summary:
      "H.R. 8775 would add a “sex offense against a minor” to the federal crimes that bar people from specified union and labor-relations positions for a lengthy statutory period.",
    tone: "rose",
    changed: [
      <>
        The House passed <ExternalLink href="https://www.govinfo.gov/app/details/BILLS-119hr8775eh">
          H.R. 8775, the Ending Predator Access to Union Power Act
        </ExternalLink>, and sent it to the Senate.
      </>,
      "The bill would amend section 504(a) of the Labor-Management Reporting and Disclosure Act to add a “sex offense against a minor” to offenses triggering disqualification from specified labor-organization offices, union employment and advisory roles, and certain employer labor-relations positions. The existing framework generally runs for 13 years after conviction or release.",
    ],
    matters: [
      "Employment stability is one of the strongest foundations for successful reentry, treatment continuity, housing, and family support. A categorical federal job bar removes opportunities based on conviction category rather than the demands of a particular position or present risk.",
      "The bill had passed only the House by September 30, so it had not yet become law.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the proposal would add a new federal employment barrier tied to a sex-offense category and extend punishment into labor participation years after the criminal case.",
      "A narrower approach could protect genuinely sensitive positions while preserving individualized review, rehabilitation evidence, and proportionality rather than imposing a broad categorical exclusion.",
    ],
    watch: [
      "Whether the Senate takes up H.R. 8775, adds a companion measure, or amends the covered offenses or disqualification period.",
      "Whether lawmakers consider individualized waiver, rehabilitation, or job-duty-based exceptions.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Employment barrier", "Reentry barrier"],
      risk: ["Watch closely", "Advocacy opening"],
    },
    tags: ["federal", "H.R. 8775", "employment", "unions"],
    sources: [
      {
        label: "GovInfo — H.R. 8775 engrossed text",
        href: "https://www.govinfo.gov/app/details/BILLS-119hr8775eh",
        kind: "official",
        type: "official federal legislative source",
      },
    ],
    action: {
      title: "Ask Congress to reject a categorical employment bar",
      why:
        "The Senate can still change or stop the bill. Employment restrictions should be tied to actual job duties and individualized risk, not a permanent assumption based on conviction category.",
      label: "Find your member of Congress",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose H.R. 8775 unless it is narrowed to require individualized, job-related review. Stable employment supports housing, treatment, family stability, and successful reentry; categorical exclusions should not substitute for evidence of present risk.",
    },
  },
  {
    id: 16,
    group: "New Collateral Restrictions",
    title:
      "New York bill would require advance local and school notification before certain placements",
    jurisdiction: "New York",
    date: "Introduced September 2, 2026",
    summary:
      "A11703 would require state officials to alert municipal leadership and the local school superintendent at least ten days before a registrant is transferred to a community program or residence.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.nysenate.gov/legislation/bills/2025/A11703">
          A11703
        </ExternalLink> would require the Mental Hygiene commissioner to notify
        the chief executive of the municipality and the local school
        superintendent at least ten calendar days before a “sex offender” is
        transferred to a community program or residence.
      </>,
      <>
        The proposal has a Senate companion, <ExternalLink href="https://www.nysenate.gov/legislation/bills/2025/S637">
          S637
        </ExternalLink>. The bill itself requires advance notice to government
        and school-system officials; it does not, by its own terms, create a
        general public-notification mandate.
      </>,
    ],
    matters: [
      "Placement can already be one of the hardest parts of reentry. Advance institutional notification can increase political pressure, stigma, and placement instability even when the person has been approved for a structured community program.",
      "The distinction between government notice and public disclosure matters, but information passed through multiple local offices can still shape whether a placement survives community opposition.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it adds a registrant-specific notification layer to community placement and can make stable housing or programming harder to secure.",
      "If lawmakers believe a particular placement creates a concrete safety issue, individualized planning and enforceable conditions are more precise than treating registry status itself as a reason for preemptive institutional alarm.",
    ],
    watch: [
      "Committee action on A11703 and S637 and whether either chamber narrows who receives notice or what information may be disclosed.",
      "Any amendments adding confidentiality safeguards, individualized findings, or limits on secondary public dissemination.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Public notification", "Reentry barrier", "Family-stability impact"],
      risk: ["Advocacy opening", "Watch closely"],
    },
    tags: ["New York", "A11703", "S637", "placement", "notification"],
    sources: [
      {
        label: "New York Senate — A11703",
        href: "https://www.nysenate.gov/legislation/bills/2025/A11703",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "New York Senate — S637 companion",
        href: "https://www.nysenate.gov/legislation/bills/2025/S637",
        kind: "official",
        type: "official companion bill page",
      },
    ],
    action: {
      title: "Ask New York lawmakers to add placement safeguards",
      why:
        "If officials receive advance notice, the law should prevent unnecessary disclosure and require placement decisions to remain grounded in individualized safety planning rather than stigma.",
      label: "Find your Assembly member",
      href: "https://nyassembly.gov/mem/search/",
      message:
        "Please amend A11703/S637 so any placement notification is narrowly limited, confidential, and tied to individualized safety needs. Stable housing and treatment placements should not be undermined by broad status-based disclosure.",
    },
  },
  {
    id: 17,
    group: "Reform That Stops at the Registry",
    title:
      "California expands record relief but keeps registrants outside automatic conviction relief",
    jurisdiction: "California",
    date: "Signed September 27, 2026",
    summary:
      "SB 1342 broadens California record-relief machinery for other people while preserving the statutory line that excludes anyone required to register from automatic conviction relief.",
    tone: "indigo",
    changed: [
      <>
        <ExternalLink href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB1342">
          SB 1342
        </ExternalLink>, Chapter 702, expands aspects of California criminal
        record relief, including additional automatic handling of qualifying
        dismissed felony arrests and related administrative changes.
      </>,
      "But the eligibility rules for automatic conviction relief continue to require that the person not be required to register under California’s Sex Offender Registration Act.",
    ],
    matters: [
      "Record relief can improve employment, housing, licensing, and reintegration. Leaving registrants categorically outside automatic relief means the people facing some of the most durable public collateral consequences remain excluded from a major second-chance reform.",
      "Nothing in SB 1342 newly makes a registrant’s position worse; the significance is that California expanded relief around them without removing the existing exclusion.",
    ],
    analysis: [
      "SOLAR therefore reads this as neutral movement for registrants, paired with a clear missed opportunity. The reform helps others but does not directly change the legal position of the registry-impacted population.",
      "This is the recurring policy boundary SOLAR tracks: lawmakers endorse rehabilitation and automatic second chances in general, then treat registry status as the point where those principles stop.",
    ],
    watch: [
      "Future California Clean Slate legislation that revisits the registration exclusion or creates individualized relief.",
      "Whether advocates use evidence on desistance, time offense-free, employment, and family stability to challenge categorical exclusion from record relief.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Relief exclusion", "Reentry barrier"],
      risk: ["Missed opportunity", "Advocacy opening"],
    },
    tags: ["California", "SB 1342", "Clean Slate", "relief exclusion"],
    sources: [
      {
        label: "California Legislature — SB 1342",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB1342",
        kind: "official",
        type: "official chaptered bill source",
      },
    ],
  },
  {
    id: 18,
    group: "Agency / Implementation",
    title:
      "Massachusetts begins modernization of its public SORB website",
    jurisdiction: "Massachusetts",
    date: "September 2026 implementation",
    summary:
      "Massachusetts is using Adam Walsh Act implementation funding to modernize the public-facing Sex Offender Registry Board website and address federal SORNA implementation deficiencies.",
    tone: "indigo",
    changed: [
      <>
        A September procurement and grant record for the{" "}
        <ExternalLink href={"https://www.commbuys.com/bso/external/bidDetail.sda?docId=BD-27-1044-EPS11-1044O-133352&external=true&parentUrl=close"}>
          SFY25 Adam Walsh Grant
        </ExternalLink>{" "}
        describes a $135,000 project beginning in September 2026 to modernize
        Massachusetts’s roughly decade-old public registry website.
      </>,
      "The project concerns the public system that displays qualifying Level 2 and Level 3 information and is intended in part to address issues identified through federal SORNA implementation review.",
    ],
    matters: [
      "This is infrastructure rather than a new statutory registration duty, so it should not be overstated as a new punishment or expansion by itself.",
      "Website design still matters: searchability, data presentation, labels, accuracy, accessibility, and correction procedures can affect employment, housing, family privacy, and public stigma even when the underlying disclosure rules stay the same.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement with implementation consequences. Modernizing a government system can improve accuracy and usability, but a better public-notification interface can also amplify the reach of the same underlying exposure.",
      "The key policy question is whether modernization includes safeguards for accuracy, context, correction, and proportional disclosure rather than simply making public identification easier.",
    ],
    watch: [
      "Project specifications and any SORB guidance describing what will change on the public site.",
      "Whether modernization adds clearer correction mechanisms, contextual information, accessibility features, or broader public search functions.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Agency implementation", "Public notification"],
      risk: ["Implementation risk", "Transparency opportunity"],
    },
    tags: ["Massachusetts", "SORB", "SORNA", "website", "implementation"],
    sources: [
      {
        label: "COMMBUYS — SFY25 Adam Walsh Grant",
        href: "https://www.commbuys.com/bso/external/bidDetail.sda?docId=BD-27-1044-EPS11-1044O-133352&external=true&parentUrl=close",
        kind: "official",
        type: "official Massachusetts procurement/grant source",
      },
      {
        label: "GovTribe grant summary",
        href: "https://govtribe.com/opportunity/state-local-contract-opportunity/sfy25-adam-walsh-grant-bd271044eps111044o133352",
        kind: "supplemental",
        type: "supplemental grant-tracking context",
      },
    ],
  },
  {
    id: 19,
    group: "Agency / Implementation",
    title:
      "California treatment and SVP policy drafts open a public-comment window",
    jurisdiction: "California",
    date: "September 2026",
    summary:
      "CASOMB posted two September draft reports for public review, creating a direct opportunity to shape how California discusses in-custody treatment access and sexually violent predator policy.",
    tone: "amber",
    changed: [
      <>
        The <ExternalLink href="https://casomb.org/index.cfm?pid=1214">
          California Sex Offender Management Board reports page
        </ExternalLink> posted two September drafts: “Strengthening
        California’s Public Safety Through Access to Evidence-Based Sexual
        Offense Treatment During Incarceration” and “Sexually Violent Predator
        Project: Executive Summary.”
      </>,
      "CASOMB expressly states that documents in this section are drafts that have not been considered, adopted, or voted upon, and it provides a Public Comment Card for reader feedback.",
    ],
    matters: [
      "Treatment access during incarceration can shape release readiness, continuity of care, supervision outcomes, and public safety. Policy written before release can determine whether people have a realistic chance to complete evidence-based programming when it matters most.",
      "Because these documents are still drafts, this is one of the rare tracker items where readers can engage before a policy position hardens into a final board product.",
    ],
    analysis: [
      "SOLAR reads this as unclear movement with a genuine advocacy opening. Draft status means the final policy direction is not yet fixed.",
      "The strongest contribution is evidence-based: prioritize treatment availability, individualized assessment, measurable outcomes, and successful reintegration rather than assuming that more restriction automatically produces more safety.",
    ],
    watch: [
      "Revisions to either draft after public comment and whether CASOMB formally adopts, rejects, or materially changes the recommendations.",
      "Upcoming CASOMB meetings or subcommittee work that moves either draft toward a final board vote.",
    ],
    chips: {
      movement: ["Unclear movement"],
      impact: ["Public-comment opportunity", "Treatment policy", "Agency implementation"],
      risk: ["Advocacy opening", "Watch closely"],
    },
    tags: ["California", "CASOMB", "treatment", "SVP", "public comment"],
    sources: [
      {
        label: "CASOMB reports and public comment",
        href: "https://casomb.org/index.cfm?pid=1214",
        kind: "official",
        type: "official agency reports/public-comment page",
      },
    ],
    action: {
      title: "Submit evidence-based comments to CASOMB",
      why:
        "These documents are still drafts, so treatment access, individualized assessment, measurable outcomes, and reintegration can still be emphasized before board adoption.",
      label: "Open CASOMB public comment",
      href: "https://casomb.org/index.cfm?pid=1214",
      message:
        "Please prioritize timely access to evidence-based treatment, individualized assessment, measurable outcomes, and successful reintegration. Public-safety policy should expand effective treatment and evaluate results rather than rely on categorical assumptions.",
    },
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Michigan implementation after People v. Smith",
    posture:
      "MSP has removed more than 20,000 people whose Michigan duty rested solely on pre-July 1, 2011 conduct.",
    why:
      "A ruling this large can generate record-correction problems, out-of-state comparability questions, and pressure for a legislative response.",
    next: [
      "Watch for Michigan legislation responding to the decision.",
      "Track complaints about people who remain listed or subject to duties despite qualifying for removal.",
    ],
  },
  {
    title: "Alabama family-rights litigation after Henry",
    posture:
      "The Eleventh Circuit held Alabama’s lifetime parent-child cohabitation ban unconstitutional as applied to Henry.",
    why:
      "The decision creates a meaningful individualized-review route without facially invalidating the entire statute.",
    next: [
      "Watch rehearing or Supreme Court activity.",
      "Track how district courts apply strict scrutiny to similarly situated parents.",
    ],
  },
  {
    title: "Florida registry-removal doctrine",
    posture:
      "Garcia and Hernandez both favor applying current removal law rather than older, more favorable procedures.",
    why:
      "The paired September rulings can move the practical relief date for people whose convictions and sentences are long complete.",
    next: [
      "Watch Hernandez finality and rehearing.",
      "Track any Florida Supreme Court review or district conflict.",
    ],
  },
  {
    title: "Hawaii — Holmes v. State",
    posture:
      "The Hawaii Supreme Court accepted certiorari September 14 and requested briefing on the timing of a registry-termination hearing.",
    why:
      "The case could decide whether making someone wait 40 years for a termination hearing satisfies state due process.",
    next: [
      "Watch supplemental briefing and oral argument.",
      "Track whether the court reaches the constitutional timing question on the merits.",
    ],
  },
  {
    title: "Maryland — Hammond v. State",
    posture:
      "Maryland’s Supreme Court heard argument September 4 on whether genuinely forgetting to register can satisfy a statute requiring a knowing violation.",
    why:
      "The answer could affect technical-violation prosecutions where the disputed issue is knowledge rather than the existence of a reporting duty.",
    next: [
      "Watch for the merits opinion.",
      "Track how the court defines knowledge and what evidence is required to prove it.",
    ],
  },
  {
    title: "Missouri Halloween-sign case at the U.S. Supreme Court",
    posture:
      "The respondent filed a brief in opposition September 8 in Hanaway v. Sanderson, involving Missouri’s compelled Halloween-sign requirement.",
    why:
      "The petition raises a nationally important compelled-speech question about forcing registrants to post government messages at their homes.",
    next: [
      "Watch the Supreme Court docket for conference and certiorari disposition.",
      "Track any request for the Solicitor General’s views or relisting.",
    ],
  },
  {
    title: "H.R. 8775 in the Senate",
    posture:
      "The House passed the labor-position disqualification bill September 16; it had not become law by month’s end.",
    why:
      "The proposal would add a federal employment barrier tied to a sex-offense category.",
    next: [
      "Watch Senate committee referral, hearings, amendments, or a companion bill.",
      "Track whether individualized review or waiver language is added.",
    ],
  },
  {
    title: "CASOMB September drafts",
    posture:
      "Two treatment/SVP policy documents remain drafts open to public comment.",
    why:
      "Draft status creates an opportunity to push evidence-based treatment access and individualized policy before formal adoption.",
    next: [
      "Watch for revised drafts and board agendas.",
      "Track whether public comments materially change the recommendations.",
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  {
    title: "California: comment on CASOMB’s September drafts",
    why:
      "The treatment and SVP documents are still drafts, making this a real pre-adoption opportunity to center evidence, treatment access, individualized assessment, and measurable outcomes.",
    label: "Open CASOMB public comment",
    href: "https://casomb.org/index.cfm?pid=1214",
    message:
      "Please prioritize timely access to evidence-based treatment, individualized assessment, measurable outcomes, and successful reintegration. Public-safety policy should expand effective treatment and evaluate results rather than rely on categorical assumptions.",
  },
  {
    title: "Federal: oppose categorical employment exclusion in H.R. 8775",
    why:
      "The bill has passed the House but still requires Senate action. Stable employment supports housing, treatment, family stability, and successful reentry.",
    label: "Find your member of Congress",
    href: "https://www.congress.gov/members/find-your-member",
    message:
      "Please oppose H.R. 8775 unless it is narrowed to require individualized, job-related review. Stable employment supports housing, treatment, family stability, and successful reentry; categorical exclusions should not substitute for evidence of present risk.",
  },
  {
    title: "New York: ask for safeguards in A11703 / S637",
    why:
      "Advance placement notice should not become an informal public-notification system that destabilizes approved housing or treatment.",
    label: "Find your Assembly member",
    href: "https://nyassembly.gov/mem/search/",
    message:
      "Please amend A11703/S637 so any placement notification is narrowly limited, confidential, and tied to individualized safety needs. Stable housing and treatment placements should not be undermined by broad status-based disclosure.",
  },
];

export default function LegislativeTrackerSeptember2026(): JSX.Element {
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
        title="Legislative Tracker — September 2026 Update | The SOLAR Project"
        description="September 2026 SOLAR Legislative Tracker: major registry-relief and family-rights rulings, supervision expansion, new collateral restrictions, relief exclusions, and agency action."
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
            <Badge>September 2026</Badge>
            <Badge>Courts / Legislation / Implementation</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — September 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            September redrew the boundaries of registry life in both
            directions: courts delivered major relief and family-rights wins in
            Michigan, Alabama, and Georgia, while other rulings and new laws
            tightened supervision, narrowed removal, and extended registry
            status into employment, housing, and civic life.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This update covers developments with a meaningful event between
              September 1 and September 30, 2026, including court opinions,
              enacted laws, active federal and state legislation, agency
              implementation, and public-comment opportunities directly
              affecting registry life, relief, supervision, reentry, or family
              stability.
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
        <Section id="glance" eyebrow="At a Glance" title="What September moved">
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
              September shows why registry policy cannot be understood as one
              single trend. Michigan eliminated registration for a huge
              retroactively covered cohort and the Eleventh Circuit protected a
              parent-child relationship from a categorical lifetime ban. At
              the same time, courts reinforced long supervision terms and
              procedural barriers to relief, while lawmakers extended
              sex-offense status into employment, placement, probation, and
              civic eligibility. The practical question is always the same:
              what does a legal label do to ordinary life after the sentence?
            </p>
          </div>
        </Section>

        <Section
          id="throughline"
          eyebrow="Monthly Throughline"
          title="Courts redraw the boundaries — in both directions"
        >
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            <p>
              September was unusually court-driven. Michigan’s mass removals,
              Henry’s protection of the parent-child relationship, and
              Georgia’s restored removal pathway all pushed against the idea
              that registry consequences can be extended indefinitely without
              regard to retroactivity, individual risk, or fundamental family
              rights. Those decisions fit SOLAR’s case for{" "}
              <InternalLink to="/advocacy#position-statement">
                individualized, evidence-based registry reform
              </InternalLink>
              .
            </p>
            <p>
              But the same month also shows how easily “civil regulation”
              becomes permanent infrastructure around a person’s life. Florida
              made relief harder to preserve under older rules; New Mexico,
              Virginia, Kansas, and the Fifth Circuit reinforced significant
              supervision burdens; and California added new probation,
              placement, and civic restrictions. For families trying to
              translate those rules into real decisions about housing,
              treatment, work, and supervision, SOLAR’s{" "}
              <InternalLink to="/resources">
                plain-language resources
              </InternalLink>{" "}
              remain the practical companion to the legal headlines.
            </p>
            <p>
              California captures the month’s contradiction especially well:
              lawmakers broadened record relief for many people while leaving
              registrants categorically outside automatic conviction relief.
              That is why{" "}
              <InternalLink to="/resources/legislative-tracker">
                registry-policy trend tracking
              </InternalLink>{" "}
              matters. The issue is not whether government ever regulates
              risk; it is whether policy keeps substituting status for current
              evidence, proportionality, and measurable public-safety results.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="September 2026 developments"
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
            September offers three concrete places where readers can still
            affect what happens next: a live California public-comment process,
            a federal employment-disqualification bill that has not become
            law, and pending New York placement-notification legislation.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {actionCenterItems.map((action, index) => (
              <ActionCard
                key={action.title}
                action={action}
                copied={copiedId === "action-" + index}
                onCopy={() => copyText("action-" + index, action.message)}
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
              official public-comment portals. Court-opinion mirrors and
              tracking sources are labeled as supplemental when a clean direct
              official opinion link is not readily available.
            </p>
            <p>
              This September update includes only developments with a
              meaningful in-window event between September 1 and September 30,
              2026. Older laws that merely resurfaced in September coverage,
              ordinary failure-to-register prosecutions without a broader
              legal rule, and sex-offense criminal-law changes without a direct
              registry, relief, supervision, reentry, or collateral-consequence
              connection were not treated as Key Developments.
            </p>
            <p>
              The purpose of this tracker is to explain what policy actually
              does to registrants, people with sex-offense convictions, their
              families, and evidence-based public-safety reform — not simply to
              count bills and cases.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "Nineteen September developments made this an unusually court-driven month, with major rights wins alongside broad supervision and collateral restrictions.",
    "Michigan removed more than 20,000 people after its Supreme Court barred retroactive application of the 2021 registry to pre-July 2011 conduct.",
    "The Eleventh Circuit held Alabama’s lifetime parent-child cohabitation ban unconstitutional as applied, while Georgia restored a Level I registrant’s path to removal review.",
  ],
  highlights: [
    "Florida appellate courts moved toward a current-law rule that can make older registry-removal procedures unavailable when relief is finally sought.",
    "New Mexico, Virginia, Kansas, the Fifth Circuit, and California all reinforced or expanded forms of sex-offense-specific supervision and collateral control.",
    "California expanded general record relief while keeping registrants outside automatic conviction relief, a clear second-chance-policy missed opportunity.",
  ],
};
