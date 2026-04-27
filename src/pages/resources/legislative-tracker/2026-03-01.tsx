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

const slug = "2026-03-01";
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
    value: "12",
    body:
      "Federal exclusion bills, state restriction packages, court rulings, and implementation fights made February a broad burden-expansion month rather than a single-issue update.",
  },
  {
    label: "Dominant Posture",
    value: "Burden expansion",
    body:
      "The month’s center of gravity was registry status becoming a gatekeeping tool for healthcare, shelter, housing, public space, online identity, and relief access.",
  },
  {
    label: "Rights / Reform Counterpoint",
    value: "2",
    body:
      "Washington and Iowa showed a different path: reducing technical-violation escalation and requiring prosecutors to prove the exact registry duty charged.",
  },
  {
    label: "Action Paths",
    value: "4",
    body:
      "The clearest public actions focus on opposing federal exclusion bills, narrowing Florida restrictions, and supporting Washington’s penalty-reform bill.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Federal Exclusion Proposals",
    title: "CLEAN Act would deny ACA credits and Medicaid-funded assistance by sex-offense status",
    jurisdiction: "Federal / U.S. House",
    date: "Introduced February 9, 2026",
    summary:
      "The CLEAN Act would turn registry-related status into a healthcare exclusion rule, threatening the treatment, medication, disability care, and family stability that make lawful reentry possible.",
    tone: "rose",
    changed: [
      <>
        The{" "}
        <ExternalLink href="https://steube.house.gov/wp-content/uploads/2026/02/PIH-CLEAN-Act-SIGNED.pdf">
          CLEAN Act
        </ExternalLink>{" "}
        would deny ACA refundable premium tax credits to any individual, or spouse
        on a joint return, who meets the bill’s sex-offender definition as of the
        last day of the taxable year.
      </>,
      "It would also amend Medicaid funding provisions to block federal matching funds for medical assistance provided to covered individuals and would allow states to elect not to make Medicaid medical assistance available to them.",
      "The legal effect is not simply a tax or benefits adjustment. It would convert sex-offense status into a categorical barrier to major health-coverage systems.",
    ],
    matters: [
      "Health coverage is tied to medication continuity, mental-health care, treatment access, disability care, chronic-disease management, employment capacity, and family stability.",
      "For families, the burden would not stop with the covered person. Costs and consequences could shift to spouses, parents, children, emergency rooms, local systems, and untreated illness.",
      "A policy that destabilizes treatment and medical care in the name of public safety risks undermining the very stability that evidence-based reentry depends on.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it uses the registry as a gatekeeping device for ordinary medical stability, without individualized review of risk, medical need, time since offense, disability, treatment compliance, or family circumstances.",
      "The broader pattern is permanent punishment through collateral systems: not a new sentence imposed by a court, but a status-based exclusion that follows people into healthcare, poverty, disability, and family life.",
    ],
    watch: [
      "Whether H.R. 7453 receives committee activity or a Senate companion.",
      "Whether amendments define covered status by current registration, federal Adam Walsh Act categories, any qualifying conviction, or state-law registration.",
      "Whether disability, age, hospice, minor-dependent, treatment, or post-registration-relief exceptions are proposed.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Healthcare barrier", "Relief exclusion", "Reentry barrier", "Family-stability impact", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Implementation risk"],
    },
    tags: ["federal", "healthcare", "benefits exclusion"],
    sources: [
      {
        label: "CLEAN Act bill text",
        href: "https://steube.house.gov/wp-content/uploads/2026/02/PIH-CLEAN-Act-SIGNED.pdf",
        kind: "official",
        type: "official bill text hosted by sponsor",
      },
      {
        label: "Rep. Steube press release",
        href: "https://steube.house.gov/press-releases/rep-steube-no-aca-or-medicaid-for-sex-offenders/",
        kind: "official",
        type: "official congressional press release",
      },
      {
        label: "Florida Action Committee context",
        href: "https://floridaactioncommittee.org/new-federal-bill-seeks-to-eliminate-healthcare-benefits-to-people-on-the-sex-offender-registry/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Oppose healthcare exclusion by registry status",
      why:
        "Health coverage supports treatment, disability care, employment capacity, medication continuity, and family stability; categorical exclusion makes public safety worse by destabilizing the supports that reduce risk.",
      label: "Find your member of Congress",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose H.R. 7453 and any categorical healthcare exclusion based on registry or sex-offense status. Health coverage supports treatment, stability, work, disability care, and family well-being. Any public-safety policy should be evidence-based, individualized, and proportional.",
    },
  },
  {
    id: 2,
    group: "Federal Exclusion Proposals",
    title: "Safe Shelters for Survivors Act would bar covered registrants from federally funded shelters",
    jurisdiction: "Federal / U.S. House",
    date: "Introduced February 20, 2026",
    summary:
      "H.R. 7624 would make federally funded shelter access another registry exclusion point, pushing people and families toward homelessness when stability is most urgent.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.govinfo.gov/app/details/BILLS-119hr7624ih">
          H.R. 7624
        </ExternalLink>{" "}
        would prohibit covered domestic-violence and homeless shelters receiving
        federal funds from providing services or housing to covered sex offenders.
      </>,
      "The bill would make noncompliant shelters ineligible for federal funds during the following fiscal year and would prohibit covered sex offenders from entering or using covered shelters except to seek information about non-covered shelters.",
      "It would require covered sex offenders entering a covered shelter to notify staff of their status and would create criminal penalties for knowing violations, including fines or imprisonment up to five years.",
    ],
    matters: [
      "Emergency shelter is not a luxury benefit. For people facing homelessness, domestic violence, disaster displacement, poverty, eviction, or family breakdown, it may be the difference between lawful stability and street-level survival.",
      "Shelter exclusion can make registration compliance harder because many registration systems require a stable or reportable address. The practical risk is that a person is denied shelter and then punished for the instability that denial creates.",
      "Families can also be forced into impossible choices when one household member is excluded from the facility that would otherwise keep the family safe.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it turns federal funding into pressure for categorical exclusion, not individualized assessment.",
      "The bill reflects a broader registry-policy pattern: using public safety language to remove stabilizing supports, even when housing and shelter are among the most practical foundations for compliance and prevention.",
    ],
    watch: [
      "Whether H.R. 7624 receives hearing activity or a Senate companion.",
      "Whether shelter providers raise implementation, confidentiality, emergency-displacement, due-process, and homelessness concerns.",
      "Whether the bill’s covered-population definition is narrowed or remains status-based.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Shelter barrier", "Housing barrier", "Reentry barrier", "Compliance burden", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Enforcement risk"],
    },
    tags: ["federal", "shelter", "homelessness"],
    sources: [
      {
        label: "GovInfo H.R. 7624 record",
        href: "https://www.govinfo.gov/app/details/BILLS-119hr7624ih",
        kind: "official",
        type: "official federal bill record",
      },
      {
        label: "Rep. Mace press release",
        href: "https://mace.house.gov/media/press-releases/rep-nancy-mace-new-bill-would-ban-sex-offenders-federally-funded-shelters",
        kind: "official",
        type: "official congressional press release",
      },
      {
        label: "Berkeley Observer context",
        href: "https://berkeleyobserver.com/2026/02/22/nancy-mace-pushes-to-ban-sex-offenders-from-federally-funded-shelters/",
        kind: "supplemental",
        type: "media context",
      },
      {
        label: "Florida Action Committee context",
        href: "https://floridaactioncommittee.org/new-federal-bill-to-ban-registrants-from-homeless-shelters/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Oppose shelter exclusion and homelessness penalties",
      why:
        "Emergency shelter access supports compliance, safety, family stability, and lawful reentry during crisis; blanket shelter exclusion can create the instability it claims to solve.",
      label: "Find your member of Congress",
      href: "https://www.congress.gov/members/find-your-member",
      message:
        "Please oppose H.R. 7624 and any categorical shelter ban based on registry status. Denying emergency shelter can worsen homelessness, destabilize families, and make registration compliance harder. Public safety is better served by individualized risk assessment, clear safeguards, and stable housing.",
    },
  },
{
    id: 3,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Florida SB 212 / HB 45 continued moving public-pool and child-centered location restrictions",
    jurisdiction: "Florida",
    date: "Committee movement February 10 and February 24, 2026",
    summary:
      "Florida continued advancing a restriction package that would make public pools and child-centered locations new compliance risk zones for registrants under supervision and their families.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2026/212">
          Florida SB 212
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink href="https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82584">
          HB 45
        </ExternalLink>{" "}
        would expand or adjust restrictions tied to schools, child-care
        facilities, parks, public swimming pools, playgrounds, and related
        locations.
      </>,
      "The February Senate Judiciary substitute narrowed some draft language by deleting public-bathing-space references, shifting some language from a 200-foot restricted zone to an on-the-premises standard, and revising warrantless-arrest language in the same direction.",
      "The bill would still require supervising officers to deny certain requests by conditional releasees or probationers to visit a public swimming pool unless specific exemptions apply.",
    ],
    matters: [
      "The practical issue is not just whether a person can enter a pool or park. It is whether everyday geography becomes a criminal-risk map for parents, grandparents, caregivers, workers, voters, people attending religious services, and people trying to comply with supervision.",
      "Premises language may be clearer than a 200-foot buffer, but clarity does not eliminate the burden if covered locations are common, boundaries are unclear, or exceptions are too narrow to use in ordinary family life.",
      "For families, restrictions around recreation and child-centered places can turn ordinary activities into requests for permission, discretionary denials, or fear of technical violations.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the bill preserves a new restricted-location architecture while adding supervision denial rules and potential arrest exposure.",
      "The narrowing is real, but it does not change the core policy direction: Florida is still expanding where registry-impacted people may safely exist in public and family life.",
    ],
    watch: [
      "Whether final language keeps premises-based wording rather than a 200-foot zone.",
      "Whether exemptions are practical for family, voting, religious, treatment, employment, caregiving, and official-business purposes.",
      "Whether local governments and supervising officers receive clear implementation guidance.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Compliance burden", "Housing barrier", "Family-stability impact", "Supervision burden", "Punishment expansion"],
      risk: ["Watch closely", "Implementation risk", "Advocacy opening", "Clarification needed"],
    },
    tags: ["state", "place restrictions", "public pools"],
    sources: [
      {
        label: "Florida Senate SB 212 page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Florida Senate Judiciary analysis",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/Analyses/2026s00212.ju.PDF",
        kind: "official",
        type: "official bill analysis",
      },
      {
        label: "Florida House HB 45 page",
        href: "https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82584",
        kind: "official",
        type: "official companion bill page",
      },
      {
        label: "Florida House Judiciary summary",
        href: "https://flhouse.gov/meeting-bill-summary-report?CommitteeId=3298&MeetingId=15194&SessionId=113",
        kind: "official",
        type: "official committee summary",
      },
      {
        label: "Florida House Judiciary vote",
        href: "https://www.flhouse.gov/Sections/Committees/billvote.aspx?BillId=82584&IsPCB=1&VoteId=76835",
        kind: "official",
        type: "official committee vote record",
      },
    ],
    action: {
      title: "Ask Florida lawmakers to narrow location restrictions",
      why:
        "Clear boundaries, practical exemptions, and individualized supervision discretion reduce technical traps without ignoring safety.",
      label: "Find your Florida legislators",
      href: "https://www.flsenate.gov/Senators/Find",
      message:
        "Please narrow SB 212 / HB 45. Any location restriction should have clear boundaries, practical family and caregiving exceptions, individualized supervision review, and evidence-based justification. Blanket exclusions can destabilize housing, family life, work, treatment, and compliance.",
    },
  },
  {
    id: 4,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Wyoming SF 88 passed the Senate with a 1,000-foot daycare residence restriction",
    jurisdiction: "Wyoming",
    date: "Senate passage February 20, 2026",
    summary:
      "Wyoming’s daycare-buffer bill would turn childcare geography into a housing barrier, even for people whose individual circumstances do not show daycare-specific risk.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://wyoleg.gov/2026/Engross/SF0088.pdf">
          Wyoming SF 88
        </ExternalLink>{" "}
        would bar registered sex offenders age 18 or older from living within
        1,000 feet of covered childcare facilities.
      </>,
      "Covered facilities include government-run childcare facilities and daycares licensed by the Wyoming Department of Family Services.",
      "The proposal includes a limited grandfathering provision for people already established in their homes before July 1, 2026, and reported violations would carry jail and fine exposure.",
    ],
    matters: [
      "Housing stability is one of the strongest practical foundations for compliance, work, treatment, supervision success, and family support.",
      "A broad daycare buffer can shrink lawful housing options in smaller communities, especially when childcare facilities are embedded throughout residential neighborhoods.",
      "Grandfathering may protect a current address, but it does not protect people who later face eviction, rising rent, job loss, disability, caregiving needs, family reunification, or the need to move closer to support.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands exclusion by status rather than individualized risk.",
      "The danger is not only the rule itself, but how ordinary life becomes harder to navigate: lawful housing becomes dependent on maps, measurements, facility licensing, and future moves that families often cannot control.",
    ],
    watch: [
      "Whether the House preserves, narrows, or expands the Senate language.",
      "Whether measurement rules and childcare-facility boundaries are clear enough for ordinary people to follow.",
      "Whether exceptions are added for non-child-related offenses, caregiving, disability, housing scarcity, or individualized risk findings.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Housing barrier", "Family-stability impact", "Compliance burden", "Punishment expansion"],
      risk: ["Watch closely", "Advocacy opening", "Litigation risk"],
    },
    tags: ["state", "housing", "daycare buffer"],
    sources: [
      {
        label: "Wyoming SF 88 engrossed text",
        href: "https://wyoleg.gov/2026/Engross/SF0088.pdf",
        kind: "official",
        type: "official engrossed bill text",
      },
      {
        label: "Wyoming SF 88 bill page",
        href: "https://www.wyoleg.gov/Legislation/2026/SF0088",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Wyoming SF 88 digest",
        href: "https://wyoleg.gov/2026/Digest/SF0088.pdf",
        kind: "official",
        type: "official bill digest",
      },
      {
        label: "Cowboy State Daily context",
        href: "https://cowboystatedaily.com/2026/02/20/wyoming-senate-advances-bill-to-bar-sex-offenders-from-living-near-daycares/",
        kind: "supplemental",
        type: "media context",
      },
    ],
    action: {
      title: "Oppose blanket daycare-buffer housing exclusion",
      why:
        "Housing stability supports compliance, work, treatment, family support, and supervision success; broad buffers can make lawful housing scarce without individualized risk findings.",
      label: "Find your Wyoming legislator",
      href: "https://wyoleg.gov/Legislators",
      message:
        "Please oppose blanket daycare-buffer residence restrictions in SF 88 unless they are narrowed by individualized risk, clear measurement rules, hardship exceptions, and housing-impact review. Stable housing is a public-safety asset, not a loophole.",
    },
  },
  {
    id: 5,
    group: "Restriction Expansion / Housing and Place-Based Burdens",
    title: "Idaho H0683 clarified residence and habitual-living rules with housing consequences",
    jurisdiction: "Idaho",
    date: "Introduced February 16; House passage February 26, 2026",
    summary:
      "Idaho’s residence-definition bill offers compliance clarity, but that clarity can also harden enforcement against people navigating homelessness, caregiving, medical care, or unstable housing.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://legislature.idaho.gov/sessioninfo/2026/legislation/H0683/">
          Idaho H0683
        </ExternalLink>{" "}
        would clarify residence and habitual-living standards for sexual-offender
        registration purposes, including objective time and frequency rules.
      </>,
      "The bill clarifies application to homeless registrants and exceptions allowing registered adult criminal sex offenders to reside within 500 feet of a school or daycare when living in licensed or certified incarceration, hospital, health, or convalescent-care facilities.",
      "The text also references posted-notice requirements for covered property, including notice size, statutory reference, use of the term registered sex offender, and placement at public entrances.",
    ],
    matters: [
      "Residence definitions decide whether a person is compliant, unlawfully residing somewhere, or exposed to enforcement. For people with stable housing, a definition may be a paperwork issue; for people without stable housing, it can decide whether survival arrangements become legal risk.",
      "Clarity can reduce arbitrary enforcement, but objective thresholds can also expand enforcement if temporary stays, caregiving, medical placement, homelessness, or couch-surfing are treated as residence.",
      "Families may need to reassess temporary stays, shared custody, hospital or care-facility stays, treatment placement, and emergency housing under the new framework.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because clearer definitions can help people understand the rule, but the same definitions can make housing instability easier to criminalize.",
      "The implementation question is whether Idaho uses clarity to support compliance or to punish people whose housing, health, and family realities do not fit neat address categories.",
    ],
    watch: [
      "Final implementation guidance from Idaho State Police, local sheriffs, and facility administrators.",
      "How habitual-living rules apply to homelessness, temporary caregiving, shared custody, medical placement, and unstable housing.",
      "Whether posted notices stigmatize facilities or create collateral exclusion from health and care settings.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: ["Compliance clarity", "Housing barrier", "Compliance burden", "Agency implementation", "Family-stability impact"],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    tags: ["state", "residence", "housing"],
    sources: [
      {
        label: "Idaho Legislature H0683 page",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0683/",
        kind: "official",
        type: "official bill page identified by legislative mirrors",
      },
      {
        label: "Idaho Legislature H0683 text",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0683.pdf",
        kind: "official",
        type: "official bill text identified by legislative mirrors",
      },
      {
        label: "LegiScan H0683 context",
        href: "https://legiscan.com/ID/bill/H0683/2026",
        kind: "supplemental",
        type: "legislative tracking context",
      },
      {
        label: "LegiScan H0683 text mirror",
        href: "https://legiscan.com/ID/text/H0683/id/3363843",
        kind: "supplemental",
        type: "bill text mirror",
      },
      {
        label: "Tally Idaho context",
        href: "https://www.tallyidaho.com/bills/2026/h0683",
        kind: "supplemental",
        type: "civic-data context",
      },
    ],
    action: {
      title: "Seek careful Idaho implementation guidance",
      why:
        "Residence clarity should not punish homelessness, temporary caregiving, treatment, medical care, or non-willful housing instability.",
      label: "Find your Idaho legislator",
      href: "https://legislature.idaho.gov/legislators/whosmylegislator/",
      message:
        "Please ensure H0683 implementation protects people facing homelessness, temporary caregiving, treatment placement, medical care, and non-willful housing instability. Guidance should be clear, humane, and focused on compliance rather than technical traps.",
    },
  },
{
    id: 6,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "South Carolina S. 924 would impose registry-name use online as a supervision condition",
    jurisdiction: "South Carolina",
    date: "Introduced February 12, 2026",
    summary:
      "South Carolina’s online-name bill would turn ordinary digital life into a supervision condition, with criminal penalties for name-use mistakes.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.scstatehouse.gov/sess126_2025-2026/bills/924.htm">
          South Carolina S. 924
        </ExternalLink>{" "}
        would require a judge to order, as a condition of probation or parole,
        that a person convicted of a registerable offense use the person’s
        registry name when accessing social networking websites, using dating
        applications, or communicating with others for the purpose of promoting
        sexual relations.
      </>,
      "A first violation would be a misdemeanor punishable by a fine up to $1,000 or imprisonment up to one year, or both. A second or later violation would carry a fine up to $2,500 or imprisonment up to three years, or both.",
      "The proposal sits at the intersection of registration, supervision, online identity, speech, privacy, and technical-violation exposure.",
    ],
    matters: [
      "Digital identity is part of ordinary life: family communication, work, support groups, mutual aid, dating, advocacy, and basic social participation all happen online.",
      "A vague or rigid name-use rule can create risk for people who use initials, nicknames, legal name changes, aliases, shared household devices, platform-required display names, or accounts created before supervision.",
      "For families, the risk may spill into shared accounts, household technology, or the fear that ordinary online contact could be treated as a supervision violation.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it creates a new online-identity compliance rule backed by criminal penalties.",
      "The policy concern is not only whether some online restrictions can ever be lawful. It is whether the rule is narrow, constitutional, understandable, and tied to individualized risk rather than status-based exposure.",
    ],
    watch: [
      "Whether the bill is narrowed to specific platforms, conduct, or risk findings.",
      "Whether First Amendment, privacy, compelled-speech, and vagueness concerns are raised.",
      "Whether registry-name requirements account for legal name changes, aliases, initials, platform rules, and household technology use.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Online identifiers", "Compliance burden", "Rights concern", "Supervision burden", "Enforcement risk"],
      risk: ["Watch closely", "Litigation risk", "Clarification needed"],
    },
    tags: ["state", "online identifiers", "supervision"],
    sources: [
      {
        label: "South Carolina S. 924 page",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/924.htm",
        kind: "official",
        type: "official bill page",
      },
    ],
    action: {
      title: "Ask South Carolina lawmakers to narrow online-name rules",
      why:
        "Online restrictions should protect lawful family, work, support, dating, and speech activity from vague technical-violation traps.",
      label: "Find your South Carolina legislators",
      href: "https://www.scstatehouse.gov/legislatorssearch.php",
      message:
        "Please narrow S. 924 and require constitutional review before imposing online-name conditions. Any rule should be specific, evidence-based, and protective of lawful family, work, support, dating, and speech activity.",
    },
  },
  {
    id: 7,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "New Mexico HB 199 proposed SORNA alignment, tiering, shorter deadlines, and broader data collection",
    jurisdiction: "New Mexico",
    date: "Committee action February 6 and February 13, 2026",
    summary:
      "New Mexico’s postponed SORNA-alignment bill shows how federal-compliance language can carry sweeping state burdens: faster deadlines, longer registration, broader data collection, and more digital reporting.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.nmlegis.gov/Legislation/Legislation?Chamber=H&LegType=B&LegNo=199&year=26">
          New Mexico HB 199
        </ExternalLink>{" "}
        would have added tier classifications, shortened initial and change
        reporting deadlines from five business days to three, and expanded
        registrable information.
      </>,
      "The proposal would have required information including aliases, social networking identifiers for law-enforcement use, phone numbers, professional licenses, vehicle, aircraft, and watercraft identifiers, school information, passport, and immigration documents.",
      "It also would have changed verification periods to 90 days for life for tier 3, every six months for 25 years for tier 2, and annually for 15 years for tier 1, with additional rules for out-of-state and juvenile registration.",
    ],
    matters: [
      "Shorter deadlines and broader information collection increase the chance that poverty, unstable housing, transportation barriers, confusing paperwork, or ordinary life changes become felony-risk events.",
      "For families, expanded vehicle, address, temporary-location, school, work, travel, and digital reporting can make household life feel permanently administrated by registry rules.",
      "The bill was postponed indefinitely, but the architecture matters because SORNA-alignment proposals often return in later sessions or as committee substitutes.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because the proposal itself was burden-expanding, but February committee action stopped it for now.",
      "The larger lesson is that federal-compliance rhetoric can obscure the real-world question: whether added reporting, longer duration, and more data collection produce safety or simply expand punishment and technical-violation risk.",
    ],
    watch: [
      "Whether similar SORNA-alignment language returns in a future session.",
      "Whether any committee substitute narrowed burdens before postponement.",
      "Whether federal-compliance pressure is invoked in future New Mexico registry proposals.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: ["Compliance burden", "Online identifiers", "Public notification", "Retroactivity concern", "Agency implementation"],
      risk: ["Watch closely", "Advocacy opening", "Missed opportunity", "Clarification needed"],
    },
    tags: ["state", "SORNA", "tiering"],
    sources: [
      {
        label: "New Mexico HB 199 page",
        href: "https://www.nmlegis.gov/Legislation/Legislation?Chamber=H&LegType=B&LegNo=199&year=26",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "New Mexico HB 199 introduced text",
        href: "https://www.nmlegis.gov/Sessions/26%20Regular/bills/house/HB0199.html",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "New Mexico HB 199 fiscal impact report",
        href: "https://www.nmlegis.gov/Sessions/26%20Regular/firs/HB0199.PDF",
        kind: "official",
        type: "official fiscal analysis",
      },
      {
        label: "FastDemocracy HB 199 context",
        href: "https://fastdemocracy.com/bill-search/nm/2026/bills/NMB00012547/",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
  },
  {
    id: 8,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "Missouri HB 2311 fiscal note surfaced lifetime-registration and tier-expansion consequences",
    jurisdiction: "Missouri",
    date: "Fiscal note February 16, 2026",
    summary:
      "Missouri HB 2311 would make relief harder and lifetime registration more likely, turning tier placement and exemption access into deeper long-term consequences.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://documents.house.mo.gov/billtracking/bills261/hlrbillspdf/5693H.01I.pdf">
          Missouri HB 2311
        </ExternalLink>{" "}
        would expand lifetime-registration categories, change exemption
        procedure, move multiple offenses into higher tiers, and add
        registration-system handoff duties.
      </>,
      "The February fiscal note identified registry, incarceration, exemption, and agency-implementation consequences from the bill.",
      "The bill would add lifetime-registration categories, including people required to register under federal law and people required to register for an offense sexual in nature committed against a minor or incapacitated person.",
      "It would require people who qualify for exemption from registration to petition the court, and it would move multiple offenses currently listed under tier I or tier II into tier III.",
    ],
    matters: [
      "Tier movement and lifetime-registration categories are not abstract labels. They can decide how long a person remains publicly marked, how often they report, whether relief is possible, and whether family stability remains subject to permanent registry consequences.",
      "A court-petition requirement can make exemption depend on money, counsel, transportation, filing access, and the ability to navigate a legal system that many impacted families cannot easily use.",
      "Facility release and system-entry duties may reduce some administrative confusion, but they also strengthen surveillance handoffs at the moment of reentry.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands lifetime status, raises tier consequences, and makes relief more procedurally burdensome.",
      "The bill reflects a familiar pattern: relief is not formally eliminated for everyone, but it becomes harder, more expensive, and less accessible for the people most likely to need it.",
    ],
    watch: [
      "Whether any court-petition requirement includes appointed counsel, fee waivers, clear standards, and accessible procedures.",
      "Which specific offenses remain moved into tier III in final text.",
      "Whether lifetime-registration categories are tied to current federal law or broad offense characterizations.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Relief exclusion", "Compliance burden", "Punishment expansion", "Agency implementation", "Reentry barrier"],
      risk: ["Watch closely", "Implementation risk", "Litigation risk"],
    },
    tags: ["state", "tiering", "lifetime registration"],
    sources: [
      {
        label: "Missouri HB 2311 bill text",
        href: "https://documents.house.mo.gov/billtracking/bills261/hlrbillspdf/5693H.01I.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "Missouri HB 2311 fiscal note",
        href: "https://documents.house.mo.gov/billtracking/bills261/fiscal/fispdf/5693H.01I.ORG.pdf",
        kind: "official",
        type: "official fiscal note",
      },
      {
        label: "Missouri HB 2311 summary",
        href: "https://documents.house.mo.gov/billtracking/bills261/sumpdf/HB2311I.pdf",
        kind: "official",
        type: "official bill summary",
      },
    ],
    action: {
      title: "Defend relief pathways in Missouri",
      why:
        "Lifetime expansion and court-petition requirements can make relief depend on money, counsel, transportation, and legal navigation.",
      label: "Find your Missouri representative",
      href: "https://house.mo.gov/legislatorlookup.aspx",
      message:
        "Please oppose lifetime-registration expansion and resource-dependent exemption petitions in HB 2311. Relief pathways should be clear, accessible, individualized, and not limited to people who can afford counsel or navigate court procedures alone.",
    },
  },
{
    id: 9,
    group: "Compliance, Online Identifiers, and Technical-Violation Exposure",
    title: "Idaho H0604 proposed psychosexual-evaluation changes with cost and due-process questions",
    jurisdiction: "Idaho",
    date: "Introduced February 6; referred February 9, 2026",
    summary:
      "Idaho H0604 raises a core fairness question: whether evaluation rules will support accurate assessment or punish people who cannot afford or access the process.",
    tone: "indigo",
    changed: [
      <>
        <ExternalLink href="https://legislature.idaho.gov/sessioninfo/2026/legislation/H0604/">
          Idaho H0604
        </ExternalLink>{" "}
        would revise psychosexual-evaluation provisions, including how failure
        to provide an evaluation may operate as an aggravating circumstance.
      </>,
      "The bill would also revise payment provisions for psychosexual evaluations and establish rules involving certain funding and restitution.",
      "Because psychosexual evaluations can affect sentencing, treatment, supervision, risk classification, and future relief posture, the payment and nonproduction rules matter as much as the evaluation requirement itself.",
    ],
    matters: [
      "Evaluation rules can be useful when they are fair, qualified, accessible, and tied to individualized assessment. They become dangerous when poverty or lack of provider access is treated like refusal.",
      "For families, evaluation costs can become a major financial pressure point at the same moment they are already managing legal fees, transportation, housing instability, treatment costs, and reentry planning.",
      "The bill’s practical effect depends on whether Idaho builds safeguards for indigency, provider shortages, disability, and non-willful inability to produce an evaluation.",
    ],
    analysis: [
      "SOLAR reads this as unclear movement because the legal direction depends on implementation details that determine whether the bill improves assessment quality or deepens due-process problems.",
      "The reform question is whether Idaho distinguishes accountability from access barriers. A person should not face a worse legal outcome simply because the evaluation system is expensive, unavailable, or confusing.",
    ],
    watch: [
      "Full official bill text, statement of purpose, and committee analysis.",
      "Whether evaluation nonproduction distinguishes refusal from inability to pay or lack of evaluator access.",
      "Whether funding and restitution provisions create meaningful access or simply shift costs to defendants and families.",
    ],
    chips: {
      movement: ["Unclear movement"],
      impact: ["Compliance burden", "Due-process concern", "Agency implementation", "Reentry barrier"],
      risk: ["Clarification needed", "Watch closely", "Implementation risk"],
    },
    tags: ["state", "evaluation", "costs"],
    sources: [
      {
        label: "Idaho Legislature H0604 page",
        href: "https://legislature.idaho.gov/sessioninfo/2026/legislation/H0604/",
        kind: "official",
        type: "official bill page identified by legislative mirrors",
      },
      {
        label: "Idaho Legislature H0604 text",
        href: "https://legislature.idaho.gov/wp-content/uploads/sessioninfo/2026/legislation/H0604.pdf",
        kind: "official",
        type: "official bill text identified by legislative mirrors",
      },
      {
        label: "LegiScan H0604 context",
        href: "https://legiscan.com/ID/bill/H0604/2026",
        kind: "supplemental",
        type: "legislative tracking context",
      },
    ],
    action: {
      title: "Ask Idaho lawmakers for evaluation due-process safeguards",
      why:
        "Evaluation rules should not punish poverty, lack of access, or inability to secure qualified providers.",
      label: "Find your Idaho legislator",
      href: "https://legislature.idaho.gov/legislators/whosmylegislator/",
      message:
        "Please add due-process and indigency safeguards to H0604. Evaluation rules should distinguish refusal from inability to pay or access an evaluator, and funding rules should support fair assessment rather than worsening outcomes for poor defendants and families.",
    },
  },
  {
    id: 10,
    group: "Reform / Court Limits",
    title: "Washington HB 2403 advanced penalty reform for failure-to-register violations",
    jurisdiction: "Washington",
    date: "Committee action February 2, 6, and 9, 2026",
    summary:
      "Washington HB 2403 is February’s clearest reform counterpoint: it would reduce some failure-to-register escalation while preserving accountability for registration duties.",
    tone: "emerald",
    changed: [
      <>
        <ExternalLink href="https://app.leg.wa.gov/billsummary?BillNumber=2403&Year=2025&Initiative=false">
          Washington HB 2403
        </ExternalLink>{" "}
        would move failure to register as a sex offender to seriousness level I
        and remove second-or-subsequent failure to register from seriousness
        level II.
      </>,
      "The bill would keep failure to register tied to a felony registration duty as a class C felony while deleting language that escalates third or later felony failure-to-register offenses to class B felonies.",
      "It would remove second-or-subsequent felony failure-to-register from the statutory definition of sex offense for sentencing purposes, while still requiring two years of community custody for second or later violations.",
    ],
    matters: [
      "Failure-to-register prosecutions often punish instability, homelessness, confusion, poverty, transportation barriers, mental illness, administrative mistakes, or paperwork failures.",
      "Reducing repeat escalation can lower carceral exposure without eliminating registration duties or accountability.",
      "For families, this kind of reform can reduce the risk that a technical paperwork or address problem becomes a life-altering sentencing event.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because it recognizes a distinction that registry policy often erases: technical registration violations are not the same thing as new sexual harm.",
      "The narrow improvement is real, but the reform is limited. Felony exposure and community custody remain, so implementation still matters for people whose violations stem from instability rather than willful evasion.",
    ],
    watch: [
      "Whether the bill reaches the House floor.",
      "Whether amendments restore harsher penalty treatment.",
      "Whether opposition frames administrative noncompliance as equivalent to new sexual harm.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Compliance burden", "Compliance clarity", "Reentry barrier", "Supervision burden", "Court limitation"],
      risk: ["Reform opening", "Watch closely", "Implementation risk"],
    },
    tags: ["state", "failure to register", "penalty reform"],
    sources: [
      {
        label: "Washington HB 2403 page",
        href: "https://app.leg.wa.gov/billsummary?BillNumber=2403&Year=2025&Initiative=false",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Washington HB 2403 text",
        href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bills/House%20Bills/2403.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "House Rules Review report",
        href: "https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Workroom%20Reports/House%20Rules%20Review/RULES%20REVIEW%202026-030.pdf",
        kind: "official",
        type: "official legislative workroom report",
      },
      {
        label: "FPIW Action context",
        href: "https://fpiwaction.org/2026-final-report/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
    action: {
      title: "Support Washington failure-to-register penalty reform",
      why:
        "Technical registration violations should not be treated as new sexual harm or escalated in ways that deepen instability.",
      label: "Comment on HB 2403",
      href: "https://app.leg.wa.gov/pbc/bill/2403",
      message:
        "Please support HB 2403. Washington should distinguish technical registration violations from new sexual harm, reduce destabilizing felony escalation, and preserve accountability in ways that are proportional, evidence-based, and focused on compliance success.",
    },
  },
  {
    id: 11,
    group: "Reform / Court Limits",
    title: "Iowa Supreme Court reversed a temporary-lodging registry conviction in State v. Uranga",
    jurisdiction: "Iowa",
    date: "Decision filed February 13, 2026",
    summary:
      "State v. Uranga is a rights-protective reminder that registry prosecutions must match the actual statutory duty charged, not a broader theory of noncompliance.",
    tone: "emerald",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://law.justia.com/cases/iowa/supreme-court/2026/23-1001.html">
          State of Iowa v. Uranga
        </ExternalLink>
        , the Iowa Supreme Court held that a change in residence, by itself,
        does not trigger Iowa’s temporary-lodging notice statute unless the
        person is away from a principal residence for more than five days.
      </>,
      "The court concluded the State charged a temporary-lodging violation but argued a change-of-residence theory, and it found insufficient evidence for the charged temporary-lodging trigger.",
      "The court vacated the court of appeals decision, reversed the district court, and remanded for judgment of acquittal.",
    ],
    matters: [
      "Registry statutes often contain overlapping duties, and technical prosecutions can turn on precise reporting triggers.",
      "For people experiencing homelessness, eviction, temporary lodging, residence transition, or unstable family housing, the difference between one reporting duty and another can decide whether conduct becomes a criminal conviction.",
      "The decision does not eliminate reporting duties. It reinforces that the government must charge and prove the duty it actually relies on.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because it limits prosecutorial overreach and requires precision before punishment.",
      "The ruling matters beyond one case because technical registry prosecutions often happen in the gray areas of poverty, displacement, and housing instability, where clear statutory limits are essential.",
    ],
    watch: [
      "Whether prosecutors shift to charging change-of-residence provisions more carefully.",
      "Whether Iowa lawmakers respond by amending temporary-lodging or residence-change statutes.",
      "Whether defense counsel use the opinion in technical-violation cases involving unstable housing.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: ["Compliance clarity", "Due-process concern", "Court limitation", "Rights concern"],
      risk: ["Reform opening", "Litigation risk", "Watch closely"],
    },
    tags: ["court", "Iowa", "temporary lodging"],
    sources: [
      {
        label: "State v. Uranga opinion",
        href: "https://law.justia.com/cases/iowa/supreme-court/2026/23-1001.html",
        kind: "supplemental",
        type: "legal opinion mirror",
      },
      {
        label: "Iowa Code chapter 692A",
        href: "https://www.legis.iowa.gov/law/iowaCode/sections?codeChapter=692A",
        kind: "official",
        type: "official statutory framework",
      },
    ],
  },
{
    id: 12,
    group: "Litigation Watch",
    title: "Pennsylvania Commonwealth Court rejected an Act 29 constitutional challenge in D.L. v. PSP",
    jurisdiction: "Pennsylvania",
    date: "Opinion and order filed February 2, 2026",
    summary:
      "D.L. v. PSP shows how difficult broad adult Act 29 challenges remain in Pennsylvania after controlling state supreme court precedent.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.pacourts.us/assets/opinions/Commonwealth/out/405MD17_2-2-26.pdf?cb=1">
          D.L. v. Pennsylvania State Police
        </ExternalLink>
        , the Commonwealth Court rejected an Act 29 challenge raising ex post
        facto, reputation, due-process, public-disclosure, and irrebuttable
        presumption arguments.
      </>,
      "The court held that Pennsylvania Supreme Court precedent, including Lacombe and Torsilieri II, controlled the petitioner’s claims.",
      "The court denied the petitioner’s summary-relief application, granted PSP summary relief, and dismissed the amended petition.",
    ],
    matters: [
      "The decision reinforces Pennsylvania’s difficult litigation terrain for broad adult Act 29 challenges.",
      "For registrants and families, the practical meaning is that public registration, retroactivity arguments, and reputation-based claims remain hard to challenge through broad facial theories in the current state-court posture.",
      "Future litigation may need narrower claims, stronger records, juvenile distinctions, removal-stage theories, federal theories, or targeted as-applied arguments.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it closes another relief path for an adult registrant challenging retroactive and public registration obligations.",
      "The ruling also shows the limits of litigation when courts treat earlier precedent as controlling even while families continue to experience registration as public punishment, social exclusion, and long-term instability.",
    ],
    watch: [
      "Whether the petitioner appeals.",
      "Pending Pennsylvania cases challenging removal-stage presumptions or narrower Act 29 applications.",
      "Whether federal litigation develops around public dissemination, digital tracking, or individualized-risk findings.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: ["Due-process concern", "Retroactivity concern", "Public notification", "Court limitation", "Rights concern"],
      risk: ["Appeal likely", "Litigation risk", "Watch closely"],
    },
    tags: ["court", "Pennsylvania", "Act 29"],
    sources: [
      {
        label: "D.L. v. PSP opinion/order",
        href: "https://www.pacourts.us/assets/opinions/Commonwealth/out/405MD17_2-2-26.pdf?cb=1",
        kind: "official",
        type: "official court opinion and order",
      },
      {
        label: "Pennsylvania Act 29",
        href: "https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/2018/0/0029..HTM",
        kind: "official",
        type: "official statutory framework",
      },
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  developments[0].action!,
  developments[1].action!,
  developments[2].action!,
  developments[9].action!,
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida SB 212 / HB 45 final language and implementation",
    posture: "Active in February after Senate and House committee movement.",
    why:
      "Final wording determines whether Florida keeps premises language, public-pool definitions, supervision denial rules, and exceptions that families can actually use.",
    next: [
      "Watch final enrolled text and whether public-bathing-place language remains deleted.",
      "Watch agency and supervision guidance for boundary, permission, and exception rules.",
      "Watch whether family, voting, religious, treatment, employment, and caregiving exceptions are practical.",
    ],
  },
  {
    title: "Federal H.R. 7453 and H.R. 7624",
    posture: "Both federal exclusion bills were introduced in February.",
    why:
      "Together, they convert registry status into categorical exclusion from essential stabilizing systems: healthcare and shelter.",
    next: [
      "Watch for committee hearings, Senate companions, amendments, and sponsor additions.",
      "Watch how each bill defines covered sex-offense status.",
      "Watch responses from healthcare, homelessness, disability, reentry, and survivor-service organizations.",
    ],
  },
  {
    title: "Washington HB 2403",
    posture: "Advanced to House Rules in February after Appropriations action.",
    why:
      "It is a rare reform-oriented effort to reduce failure-to-register escalation and distinguish technical violations from new sexual harm.",
    next: [
      "Watch for floor action.",
      "Watch for amendments restoring harsher penalty treatment.",
      "Watch whether the bill dies under political pressure.",
    ],
  },
  {
    title: "New Mexico SORNA-alignment language",
    posture: "HB 199 was postponed indefinitely on February 13.",
    why:
      "The bill’s architecture may return: shorter deadlines, tiering, longer durations, expanded digital information, and expanded travel-related data collection.",
    next: [
      "Watch for reintroduction in future sessions.",
      "Watch whether agency or federal-compliance pressure revives similar language.",
      "Watch committee substitute language for narrowed or revived provisions.",
    ],
  },
  {
    title: "Pennsylvania Act 29 litigation after D.L. v. PSP",
    posture: "The Commonwealth Court continues applying state supreme court precedent against broad adult Act 29 challenges.",
    why:
      "The litigation path may shift toward as-applied claims, removal-stage claims, juvenile distinctions, or federal theories.",
    next: [
      "Watch for an appeal from D.L.",
      "Watch pending removal-stage or narrower Act 29 cases.",
      "Watch challenges focused on public dissemination, digital tracking, or individualized risk findings.",
    ],
  },
];

export default function LegislativeTrackerFebruary2026Update(): JSX.Element {
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
        title="Legislative Tracker — February 2026 Update | The SOLAR Project"
        description="February 2026 SOLAR Legislative Tracker update covering federal exclusion bills, state registry restrictions, penalty reform, and court decisions affecting registrants and families."
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
            Legislative Tracker — February 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            February showed how registry status keeps spreading into ordinary
            systems of survival: healthcare, shelter, housing, public spaces,
            online communication, supervision, and relief from lifetime
            consequences.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This catch-up covers developments with a meaningful event between
              February 1 and February 28, 2026, using official sources first and
              clearly labeled supplemental context where useful.
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
        <Section id="glance" eyebrow="At a Glance" title="What February moved">
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
              February matters because it shows registry status being used less
              as a narrow compliance tool and more as a broad exclusion
              architecture. The month’s proposals and rulings touch healthcare,
              shelter, housing, public space, online identity, supervision,
              technical violations, and the possibility of relief from permanent
              punishment.
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
              February 2026 was mixed, but the dominant pattern was burden
              expansion by accumulation. Instead of one sweeping national
              registry overhaul, the month brought targeted proposals that would
              push registry status into health coverage, emergency shelter,
              housing geography, public pools, online identity, tier placement,
              and relief access.
            </p>
            <p>
              For registrants and families, the practical risk is not only one
              bill or one court case. It is the combined effect of many rules
              that make ordinary life harder to navigate. That is why SOLAR ties
              this month back to{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              rather than treating each proposal as an isolated public-safety
              headline.
            </p>
            <p>
              The counterpoints matter too. Washington’s failure-to-register bill
              and Iowa’s Uranga decision show how reform and due-process limits
              can reduce technical-violation punishment without denying
              accountability. Readers tracking these patterns over time can use
              the{" "}
              <InternalLink to="/resources/legislative-tracker">
                Legislative Tracker archive
              </InternalLink>{" "}
              and SOLAR’s{" "}
              <InternalLink to="/resources">
                practical resources for impacted families
              </InternalLink>{" "}
              to connect policy changes to daily-life consequences.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="February 2026 developments"
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
            These are the clearest paths for readers who want to respond to live
            February developments without chasing every bill page individually.
            Messages should stay specific, respectful, and focused on stability,
            due process, individualized review, and evidence-based safety.
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
              laws, court opinions, agency notices, government reports, fiscal
              notes, and official public-comment portals. Reporting, advocacy
              explainers, civic-data pages, and legislative trackers may be used
              as supplemental context, but they do not replace official sources
              when official sources are available.
            </p>
            <p>
              This update includes February 2026 developments with a meaningful
              in-window event, such as introduction, committee movement, chamber
              passage, fiscal analysis, or a court opinion. Later procedural
              developments are included only when needed to orient the reader and
              are not treated as the February hook.
            </p>
            <p>
              The purpose of this tracker is to identify legal and policy
              developments that affect registry duties, reentry, housing, family
              stability, relief pathways, due process, supervision, healthcare,
              shelter access, and evidence-based reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "12 February developments across federal bills, state legislation, and court rulings.",
    "Federal proposals targeted healthcare assistance and federally funded shelter access.",
    "Washington and Iowa offered rights-protective counterpoints on failure-to-register punishment and statutory proof.",
  ],
  highlights: [
    "H.R. 7453 and H.R. 7624 would turn registry status into categorical exclusion from healthcare and shelter systems.",
    "Florida, Wyoming, Idaho, Missouri, South Carolina, and New Mexico showed how state bills keep expanding housing, location, online, tiering, and reporting burdens.",
    "State v. Uranga limited a temporary-lodging prosecution to the actual statutory trigger the State charged and proved.",
  ],
};