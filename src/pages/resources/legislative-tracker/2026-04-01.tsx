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

const slug = "2026-04-01";
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
    value: "11",
    body:
      "State bills, court rulings, and federal implementation funding made March a broad registry-policy month rather than a single-issue update.",
  },
  {
    label: "Dominant Posture",
    value: "Restriction-heavy",
    body:
      "Housing zones, homelessness monitoring, fees, notice duties, and new offense triggers dominated the month’s practical impact.",
  },
  {
    label: "Rights / Reform Counterpoint",
    value: "3 court items",
    body:
      "One federal tiering decision limited supervision exposure, while Pennsylvania and New Hampshire narrowed practical relief pathways.",
  },
  {
    label: "Action Paths",
    value: "4",
    body:
      "The strongest action paths focus on Florida implementation, Rhode Island housing restrictions, Utah homelessness monitoring, and Kentucky fees.",
  },
];
const developments: Development[] = [
  {
    id: 1,
    group: "Restriction Expansion / Housing Burden",
    title:
      "Florida SB 212 / HB 45 creates a broad pool-based housing exclusion",
    jurisdiction: "Florida",
    date: "March 30, 2026",
    summary:
      "Florida sent the Governor a final bill that no longer uses the earlier beach-adjacent “public bathing place” language, but still creates a serious housing barrier by treating many residential-community pools as exclusion-zone triggers.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2026/212">
          CS/CS/CS/SB 212
        </ExternalLink>{" "}
        was signed by legislative officers and presented to the Governor on
        March 30 after the House laid companion{" "}
        <ExternalLink href="https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82584">
          CS/CS/HB 45
        </ExternalLink>{" "}
        on the table. The final enrolled bill adds “public swimming pool” to
        Florida’s 1,000-foot residency restriction for covered people whose
        listed offenses involved victims under 16.
      </>,
      <>
        The final text should not be described as a beach or public-bathing-place
        ban. Earlier drafts used broader “public bathing place” language, but
        the{" "}
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2026/212/BillText/er/PDF">
          enrolled version
        </ExternalLink>{" "}
        instead centers the final residency change on “public swimming pools.”
      </>,
      "The pool definition remains broad. It reaches pools where admission may be gained with or without a fee and includes pools operated by or serving subdivisions, apartments, condominiums, mobile home parks, townhouses, or governmental entities, even when access is controlled by a gate or similar method.",
    ],
    matters: [
      "The narrowing from “public bathing place” matters because the final law should not be overstated as a coastline or beach exclusion. But the practical housing problem remains severe because pools are common in Florida apartment complexes, condominium communities, subdivisions, mobile-home parks, and townhouse developments.",
      "For registrants and families, the danger is not only a new line in the statute. It is the way ordinary housing searches can become a mapping exercise where a pool inside a gated complex may make nearby homes unavailable, increase relocation pressure, or force families to choose between compliance and stability.",
      "A 1,000-foot rule tied to a common residential amenity can function less like a narrow child-safety measure and more like a broad exclusion from large parts of the rental and multifamily housing market.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the final bill newly expands where covered registrants may live and makes ordinary housing geography harder to navigate. The fact that the beach-related draft language was removed is important, but it does not erase the broad pool-based exclusion created by the enrolled bill.",
      "The implementation risk is substantial: local mapping choices, grandfathering decisions, adult-only-pool exclusions, hotel and RV-park exclusions, and enforcement discretion will determine whether families experience this as a narrow rule or as practical banishment from major housing categories.",
    ],
    watch: [
      "July 1, 2026 effective date and any FDLE or local enforcement guidance before implementation.",
      "How agencies map apartment, condominium, subdivision, mobile-home-park, townhouse, and government pools.",
      "Whether adult-only-pool exclusions and hotel, motel, and RV-park exclusions are applied consistently.",
      "Litigation over vagueness, overbreadth, banishment-like effects, and access to lawful housing.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Compliance burden",
        "Punishment expansion",
        "Family-stability impact",
        "Enforcement risk",
      ],
      risk: [
        "Watch closely",
        "Implementation risk",
        "Litigation risk",
        "Clarification needed",
      ],
    },
    tags: ["Florida", "housing", "residency restrictions", "public pools"],
    sources: [
      {
        label: "Florida SB 212 bill page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Enrolled SB 212 text",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/BillText/er/PDF",
        kind: "official",
        type: "official enrolled bill text",
      },
      {
        label: "Earlier SB 212 committee substitute",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/BillText/c1/PDF",
        kind: "official",
        type: "official earlier bill text",
      },
      {
        label: "Florida HB 45 companion",
        href: "https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82584",
        kind: "official",
        type: "official companion bill page",
      },
      {
        label: "WCTV context",
        href: "https://www.wctv.tv/2026/03/17/florida-sex-offender-residency-bill-awaits-desantis-signature/",
        kind: "supplemental",
        type: "media context",
      },
      {
        label: "Reason policy context",
        href: "https://reason.org/commentary/floridas-new-sex-offender-registrant-restrictions-will-not-improve-public-safety/",
        kind: "supplemental",
        type: "policy commentary",
      },
    ],
    action: {
      title: "Ask Florida officials for transparent implementation",
      why:
        "The final law turns many residential-community pools into housing-risk points, so families need clear maps, consistent exclusions, grandfathering clarity, and evidence-based review before July implementation.",
      label: "Find Florida legislators",
      href: "https://www.flhouse.gov/FindYourRepresentative",
      message:
        "Please ask FDLE and local agencies to publish clear, transparent guidance for SB 212 implementation, including mapping methods, grandfathering rules, adult-only-pool exclusions, and safeguards against broad housing displacement. Public safety is not served by making stable housing impossible.",
    },
  },
  {
    id: 2,
    group: "Restriction Expansion / Housing Burden",
    title:
      "Rhode Island S 2281 would make living within 300 feet of a school a felony",
    jurisdiction: "Rhode Island",
    date: "March 31, 2026",
    summary:
      "Rhode Island’s Senate passed a school-distance housing bill that would turn a residential address decision into felony exposure for people required to register.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://legiscan.com/RI/bill/S2281/2026">
          S 2281
        </ExternalLink>{" "}
        would make it a felony for any person required to register as a sex
        offender to knowingly reside within 300 feet of a school, as defined in
        Rhode Island’s sex-offender registration and community-notification law.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://webserver.rilegislature.gov/BillText26/SenateText26/S2281.pdf">
          bill text
        </ExternalLink>{" "}
        measures the distance from property line to property line in a straight
        line, without regard to intervening structures or objects. The Senate
        passed the bill on March 31, and the House Judiciary referral followed
        on April 1.
      </>,
      "The proposal does not merely create a civil housing rule. It attaches felony consequences to a prohibited residence location.",
    ],
    matters: [
      "Even a 300-foot rule can be destabilizing in dense neighborhoods where schools sit near ordinary rental housing, family homes, transit, and services. A short distance on paper can still erase practical housing options when the measurement rule is strict and exceptions are unclear.",
      "For registrants and families, the felony label matters. A housing mistake, a family move, or a lack of available compliant housing can become a new criminal case rather than a compliance problem solved through planning and support.",
      "Rules like this also push family members into impossible choices: provide shelter and risk legal exposure, or refuse housing support and increase homelessness risk.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the bill expands punishment through place-based housing exclusion. The proposal treats geography as a public-safety proxy without requiring individualized risk, housing availability review, or a showing that the restriction improves prevention.",
      "The House stage is the key reform opening. Lawmakers can still demand mapping transparency, exceptions, grandfathering, hardship review, and evidence that felony housing exclusion will do more than destabilize families.",
    ],
    watch: [
      "House Judiciary hearing, amendments, or carryover activity.",
      "Whether lawmakers add exceptions, grandfathering, hardship review, or individualized findings.",
      "How the state would map schools, property lines, and compliant housing in dense communities.",
      "Whether litigation follows if the proposal becomes law.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Compliance burden",
        "Punishment expansion",
        "Family-stability impact",
      ],
      risk: ["Advocacy opening", "Watch closely", "Litigation risk"],
    },
    tags: ["Rhode Island", "housing", "schools", "felony exposure"],
    sources: [
      {
        label: "Rhode Island S 2281 status",
        href: "https://legiscan.com/RI/bill/S2281/2026",
        kind: "official",
        type: "legislative status with state source links",
      },
      {
        label: "S 2281 bill text",
        href: "https://webserver.rilegislature.gov/BillText26/SenateText26/S2281.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "Rhode Island legislative release",
        href: "https://www.rilegislature.gov/pressrelease/_layouts/15/ril.pressrelease.inputform/DisplayForm.aspx?ID=376283&List=c8baae31-3c10-431c-8dcd-9dbbe21ce3e9",
        kind: "official",
        type: "official legislative context",
      },
    ],
    action: {
      title: "Urge Rhode Island lawmakers to narrow S 2281",
      why:
        "A felony school-distance rule can block housing, separate families, and punish poverty unless it includes clear maps, practical exceptions, and individualized review.",
      label: "Find Rhode Island officials",
      href: "https://www.ri.gov/links/?tags=elected+officials",
      message:
        "Please narrow S 2281 before advancing it. A felony housing restriction should not be adopted without clear mapping, grandfathering, hardship exceptions, individualized review, and evidence that it improves safety rather than increasing homelessness and family instability.",
    },
  },
  {
    id: 3,
    group: "Restriction Expansion / Housing Burden",
    title:
      "Idaho H 683 clarifies residence rules, including homelessness and habitual living",
    jurisdiction: "Idaho",
    date: "March 27, 2026",
    summary:
      "Idaho enacted a residence-definition bill that may reduce ambiguity for some people but also gives law enforcement clearer tools to enforce registration duties against people with unstable housing.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://legiscan.com/ID/drafts/H0683/2026">
          H 683
        </ExternalLink>{" "}
        clarifies where a person “resides” for sex-offender registration and
        proximity-rule purposes. The bill was signed by the Governor on March 27
        and reported as Session Law Chapter 204, effective July 1, 2026.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://legiscan.com/ID/supplement/H0683/id/671265/Idaho-2026-H0683-Statement_of_Purpose_-_Fiscal_Note.pdf">
          statement of purpose
        </ExternalLink>{" "}
        describes the bill as clarifying residence, objective standards for
        habitual living, treatment of homeless offenders, and an exception for
        people living in licensed or certified incarceration, hospital, health,
        or convalescent-care facilities.
      </>,
      "The practical change is a clearer legal framework for when a place becomes a registrable residence, including for people who do not have stable housing.",
    ],
    matters: [
      "Clarity can help when families, service providers, and registrants need to understand what must be reported. But clarity also makes enforcement easier, especially for people sleeping in temporary locations, rotating between family homes, or moving between shelters and outdoor locations.",
      "For unhoused registrants, residence rules can become compliance traps when the law expects a stable address that ordinary life does not provide. A clearer definition may reduce some uncertainty, but it can also increase criminal exposure if local agencies apply the rule rigidly.",
      "Families offering short-term help need to know when temporary shelter becomes a registrable residence and whether helping someone avoid homelessness creates new obligations.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because the bill may improve notice and reduce ambiguity, but its enforcement consequences depend on implementation. A clear rule can be protective when it is written and applied in plain language; it can be punitive when it turns homelessness into a technical-violation machine.",
      "The most important question is whether Idaho agencies treat the new standards as a way to support compliance or as a way to prosecute instability.",
    ],
    watch: [
      "Idaho State Police and local law-enforcement guidance before July 1 implementation.",
      "How “habitually live” standards are applied to temporary stays, couch surfing, shelters, and outdoor locations.",
      "Whether plain-language guidance is provided to families and people without stable housing.",
      "Whether local enforcement practices diverge across counties.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance clarity",
        "Housing barrier",
        "Compliance burden",
        "Enforcement risk",
      ],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    tags: ["Idaho", "residence", "homelessness", "implementation"],
    sources: [
      {
        label: "Idaho H 683 status",
        href: "https://legiscan.com/ID/drafts/H0683/2026",
        kind: "official",
        type: "legislative status with Idaho source link",
      },
      {
        label: "Statement of Purpose / Fiscal Note",
        href: "https://legiscan.com/ID/supplement/H0683/id/671265/Idaho-2026-H0683-Statement_of_Purpose_-_Fiscal_Note.pdf",
        kind: "official",
        type: "official legislative supplement",
      },
    ],
    action: {
      title: "Request plain-language Idaho residence guidance",
      why:
        "Families and unhoused registrants need clear, consistent rules before the July effective date, especially for temporary stays and homelessness.",
      label: "Track Idaho H 683",
      href: "https://legiscan.com/ID/drafts/H0683/2026",
      message:
        "Please publish plain-language H 683 guidance before July 1, including examples for homelessness, shelters, temporary family stays, and habitual living. Compliance should be understandable and consistent across counties.",
    },
  },
  {
    id: 4,
    group: "Compliance Burden / Agency Implementation",
    title:
      "Utah HB 370 creates a monitoring program for registrants without a residential address",
    jurisdiction: "Utah",
    date: "March 24, 2026",
    summary:
      "Utah enacted a monitoring and warrant framework for registrants who cannot provide a required residential address, shifting homelessness from an address problem into an active supervision and enforcement problem.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://legiscan.com/UT/drafts/HB0370/2026">
          HB 370
        </ExternalLink>{" "}
        requires Utah’s Department of Public Safety to create a monitoring
        program for sex offenders who cannot provide a required residential
        address. The Governor signed the bill on March 24.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://le.utah.gov/Session/2026/bills/enrolled/HB0370.pdf">
          enrolled bill
        </ExternalLink>{" "}
        delegates monitoring responsibilities to local law enforcement or Adult
        Probation and Parole, requires coordination among agencies, creates
        notice processes for arrest warrants, and requires registrants to comply
        with the monitoring program.
      </>,
      "The bill also creates criminal penalties for noncompliance and warrant-related processes that can turn housing instability into arrest exposure.",
    ],
    matters: [
      "A person without stable housing already faces the hardest version of registry compliance: no reliable mail, no fixed location, limited transportation, and frequent contact with law enforcement. Utah’s new framework may create a clearer process, but it also increases surveillance and enforcement pressure.",
      "For families, the law may create a new kind of pressure to provide housing even when they lack space, safety, money, or legal clarity. The threat of monitoring or arrest can push loved ones into emergency decisions rather than planned support.",
      "The key practical question is whether Utah treats address instability as a housing and compliance-support problem or as a reason to intensify punishment.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it adds monitoring duties, warrant processes, and criminal penalties for the people least able to comply with address-based systems. Homelessness is not solved by turning a missing address into a supervision trigger.",
      "Implementation will decide how harmful the law becomes. Written standards, non-punitive notice, housing-resource referrals, and alternatives to arrest could reduce damage; aggressive warrant practices would magnify it.",
    ],
    watch: [
      "May 6, 2026 effective date for affected provisions.",
      "Department of Public Safety rules, forms, training, and public guidance.",
      "How local law enforcement and Adult Probation and Parole divide monitoring responsibilities.",
      "Whether Utah provides housing-resource alternatives before relying on warrants or criminal penalties.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Housing barrier",
        "Supervision burden",
        "Agency implementation",
        "Enforcement risk",
      ],
      risk: ["Implementation risk", "Watch closely", "Clarification needed"],
    },
    tags: ["Utah", "homelessness", "monitoring", "warrants"],
    sources: [
      {
        label: "Utah HB 370 status",
        href: "https://legiscan.com/UT/drafts/HB0370/2026",
        kind: "official",
        type: "legislative status with Utah source link",
      },
      {
        label: "Enrolled HB 370 text",
        href: "https://le.utah.gov/Session/2026/bills/enrolled/HB0370.pdf",
        kind: "official",
        type: "official enrolled bill text",
      },
    ],
    action: {
      title: "Ask Utah officials for non-punitive implementation",
      why:
        "People without stable housing need clear notice, written standards, and housing-resource alternatives, not a monitoring system that defaults to warrants.",
      label: "Find Utah legislators",
      href: "https://le.utah.gov/GIS/findDistrict.jsp",
      message:
        "Please ensure HB 370 is implemented with clear written standards, non-punitive notice, housing-resource referrals, and alternatives to arrest. People without a residential address need a realistic compliance pathway, not more homelessness-driven criminal exposure.",
    },
  },
  {
    id: 5,
    group: "Compliance Burden / Agency Implementation",
    title:
      "Louisiana HB 784 advances registry definitions, notification duties, and a deepfake offense addition",
    jurisdiction: "Louisiana",
    date: "March 25–30, 2026",
    summary:
      "Louisiana advanced a registry bill that may look technical, but its definitions, notice forms, travel rules, publication duties, and offense additions can reshape daily compliance risk.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://legiscan.com/LA/drafts/HB784/2026">
          HB 784
        </ExternalLink>{" "}
        passed the House on March 25 and was referred to Senate Judiciary C on
        March 30. The bill provides relative to sex-offender registration and
        notification requirements.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1451160">
          engrossed text
        </ExternalLink>{" "}
        amends the definitions of “sex offense” and “sexual offense against a
        victim who is a minor,” including certain unlawful deepfakes depicting
        minors engaged in sexual conduct.
      </>,
      "The bill also addresses court written-notification forms, in-person update schedules, change-of-address duties, community notification, publication duties, employment restrictions, temporary lodging and travel reporting, social-networking notice language, and release-address presumptions.",
    ],
    matters: [
      "Registry bills framed as technical updates can still change the lives of registrants and families. A notice form, travel-reporting rule, release-address presumption, or social-networking provision can become the difference between compliance and prosecution.",
      "Expanded covered offenses also expand the registry’s reach. When new conduct is added to registration definitions, the consequences can extend far beyond the underlying conviction into housing, work, family life, public exposure, and long-term monitoring.",
      "More detailed written obligations may improve notice if they are accurate and understandable, but layering duties without simplification can increase technical-violation risk.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the bill expands or reinforces registration and notification machinery while adding offense-trigger language. Even where clearer forms could help, the overall direction is more compliance exposure and public-notification infrastructure.",
      "The Senate committee stage is the opportunity to demand plain-language notice, eliminate duplicative reporting, narrow new triggers carefully, and prevent technical confusion from becoming new punishment.",
    ],
    watch: [
      "Senate Judiciary C amendments or hearing activity.",
      "Whether the final bill narrows or broadens covered conduct and new offense triggers.",
      "Final language on temporary lodging, travel, social-networking notice, and release-address presumptions.",
      "Whether implementation materials explain duties in plain language.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Public notification",
        "Online identifiers",
        "Travel reporting",
        "Punishment expansion",
      ],
      risk: ["Watch closely", "Clarification needed", "Implementation risk"],
    },
    tags: ["Louisiana", "notification", "travel reporting", "definitions"],
    sources: [
      {
        label: "Louisiana HB 784 status",
        href: "https://legiscan.com/LA/drafts/HB784/2026",
        kind: "official",
        type: "legislative status with Louisiana source link",
      },
      {
        label: "Engrossed HB 784 text",
        href: "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1451160",
        kind: "official",
        type: "official bill text",
      },
    ],
    action: {
      title: "Ask Louisiana senators to simplify HB 784 duties",
      why:
        "Complex notice, travel, social-networking, and address rules can create prosecution risk unless the final bill is clear, narrow, and non-duplicative.",
      label: "Track HB 784 status",
      href: "https://legiscan.com/LA/drafts/HB784/2026",
      message:
        "Please review HB 784 for plain-language notice, non-duplicative reporting duties, careful narrowing of new offense triggers, and safeguards against technical violations. Registry duties should be understandable enough for people and families to actually follow.",
    },
  },
{
    id: 6,
    group: "Compliance Burden / Agency Implementation",
    title:
      "BJA posts FY25 SORNA implementation funding opportunity",
    jurisdiction: "Federal / DOJ BJA",
    date: "March 19–25, 2026",
    summary:
      "A federal SORNA grant posting does not directly change anyone’s registration duties, but it can shape the enforcement, data, and administrative systems registrants must live under.",
    tone: "indigo",
    changed: [
      <>
        The Bureau of Justice Assistance posted the{" "}
        <ExternalLink href="https://bja.ojp.gov/funding/opportunities/o-bja-2025-172571">
          FY25 Invited to Apply—Sex Offender Registration and Notification Act
          funding opportunity
        </ExternalLink>{" "}
        on March 19 and modified it on March 25.
      </>,
      "The solicitation concerns SORNA implementation funding, with Grants.gov and JustGrants deadlines in April. It is not a direct statutory change for registrants.",
      "The practical significance is administrative: federal funding can support registry infrastructure, data sharing, compliance systems, enforcement capacity, and implementation work.",
    ],
    matters: [
      "Registry systems are not only shaped by statutes and court decisions. Funding choices determine whether agencies invest in accuracy, error correction, notice, and due-process safeguards—or primarily in surveillance and enforcement expansion.",
      "For registrants and families, poor registry data can cause employment loss, housing denial, public exposure, travel problems, and law-enforcement contact. Funding that improves accuracy and correction pathways can reduce harm; funding that expands enforcement without safeguards can increase it.",
      "Implementation funding deserves public oversight because administrative capacity often becomes lived legal pressure.",
    ],
    analysis: [
      "SOLAR reads this as neutral movement because the solicitation itself does not newly change legal duties. The risk or opportunity depends on what funded jurisdictions do with the money.",
      "The important oversight question is whether grants prioritize accuracy, correction, clear notice, and due process, or whether they primarily expand enforcement infrastructure around a system already prone to permanent collateral harm.",
    ],
    watch: [
      "April 2026 application deadlines and later award announcements.",
      "Which jurisdictions receive funding and what projects they propose.",
      "Whether funded activities include registry accuracy, error correction, notice improvements, and due-process safeguards.",
      "Whether projects instead emphasize enforcement expansion without transparency.",
    ],
    chips: {
      movement: ["Neutral movement"],
      impact: ["Agency implementation", "Oversight pressure", "Compliance burden"],
      risk: ["Watch closely", "Transparency opportunity"],
    },
    tags: ["federal", "SORNA", "funding", "implementation"],
    sources: [
      {
        label: "BJA FY25 SORNA funding opportunity",
        href: "https://bja.ojp.gov/funding/opportunities/o-bja-2025-172571",
        kind: "official",
        type: "official federal agency source",
      },
    ],
  },
  {
    id: 7,
    group: "Fees and Reentry Barriers",
    title:
      "Kentucky HB 929 would impose a $1,000 initial registry fee and annual payments",
    jurisdiction: "Kentucky",
    date: "March 11, 2026",
    summary:
      "Kentucky introduced a registry-fee bill that would attach a large upfront cost and recurring annual payments to registration, shifting public registry maintenance costs onto registrants and families.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://apps.legislature.ky.gov/record/26rs/hb929.html">
          HB 929
        </ExternalLink>{" "}
        would require each registrant to pay a $1,000 initial registration fee
        to the Kentucky State Police within five days and $150 for each
        subsequent year during the registration period.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://apps.legislature.ky.gov/recorddocuments/bill/26RS/hb929/orig_bill.pdf">
          introduced text
        </ExternalLink>{" "}
        says failure to pay would not prevent registration or information
        updates, but knowing failure to pay would be a violation punishable by a
        fine of up to $500.
      </>,
      "The money would support a sex-offender registry fund administered by the Kentucky State Police.",
    ],
    matters: [
      "A $1,000 upfront fee is not a small administrative charge. For people leaving custody, starting supervision, losing employment, or relying on family support, it can be an impossible price attached to legal compliance.",
      "Even when nonpayment does not block registration, the bill creates new enforcement exposure for poverty. Families may end up paying the fee to avoid additional fines, pulling money away from housing, transportation, treatment, childcare, and basic stability.",
      "Registry fees convert a public punishment system into a user-funded burden imposed on the very people already facing employment and housing barriers.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it adds a reentry cost and a poverty-linked penalty to registry life. The proposal does not improve prevention; it makes stability more expensive.",
      "If lawmakers advance any fee structure, the minimum safeguards should include indigency waivers, no collateral consequences for inability to pay, transparent accounting, and evidence that the fee is necessary and proportionate.",
    ],
    watch: [
      "Whether the House Judiciary Committee hears the bill.",
      "Amendments adding indigency waivers or ability-to-pay review.",
      "Whether nonpayment consequences expand beyond the stated fine.",
      "Fiscal claims about registry maintenance costs and how funds would be used.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Reentry barrier",
        "Family-stability impact",
        "Fees",
      ],
      risk: ["Advocacy opening", "Watch closely", "Enforcement risk"],
    },
    tags: ["Kentucky", "fees", "reentry", "poverty"],
    sources: [
      {
        label: "Kentucky HB 929 status",
        href: "https://apps.legislature.ky.gov/record/26rs/hb929.html",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "HB 929 introduced text",
        href: "https://apps.legislature.ky.gov/recorddocuments/bill/26RS/hb929/orig_bill.pdf",
        kind: "official",
        type: "official bill text",
      },
      {
        label: "LegiScan tracking context",
        href: "https://legiscan.com/KY/text/HB929/id/3384807",
        kind: "supplemental",
        type: "tracking context",
      },
    ],
    action: {
      title: "Oppose poverty-based Kentucky registry fees",
      why:
        "A $1,000 initial fee and recurring annual payments can destabilize housing, treatment, transportation, and family support while creating new fine exposure for poverty.",
      label: "Find Kentucky legislators",
      href: "https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html",
      message:
        "Please oppose HB 929 or add strong indigency protections. Registry fees create reentry barriers, shift public-system costs onto families, and punish poverty without evidence that they improve safety.",
    },
  },
  {
    id: 8,
    group: "Courts & Relief Pathways",
    title:
      "Pennsylvania Supreme Court says PCRA is not a vehicle for SORNA II challenges",
    jurisdiction: "Pennsylvania",
    date: "March 26, 2026",
    summary:
      "Pennsylvania’s high court narrowed one procedural route for challenging ongoing registration, making the choice of legal vehicle as important as the constitutional claim itself.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.pacourts.us/assets/opinions/Supreme/out/J-34-2025cdo%20-%20106726178352043061.pdf?cb=1">
          Commonwealth v. Arnett
        </ExternalLink>
        , the Pennsylvania Supreme Court vacated a lower-court order that had
        granted relief and dismissed the petitioner’s PCRA petition.
      </>,
      "The court held that Pennsylvania’s Post Conviction Relief Act is limited to challenges tied to conviction or sentence and does not provide relief from non-punitive collateral consequences such as SORNA II registration requirements.",
      "The court reserved whether habeas or another mechanism may be available, leaving future litigants to test different procedural routes.",
    ],
    matters: [
      "For people seeking relief from registration, the procedural door can matter as much as the merits. A constitutional argument may never be heard if the court decides the person used the wrong vehicle.",
      "The decision can affect counsel strategy, timing, filing choices, and expectations for people already living under SORNA II obligations. Families may experience this as another delay in relief even when serious constitutional questions remain unresolved.",
      "The ruling reinforces a recurring problem in registry litigation: courts can describe registration as collateral or non-punitive while the practical burdens continue to shape housing, work, travel, and family stability.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it narrows a practical relief pathway. The decision does not necessarily foreclose all challenges, but it makes access to the correct procedural mechanism a threshold barrier.",
      "The watch point is not only whether future plaintiffs win. It is whether Pennsylvania courts provide a clear, usable route for people to challenge ongoing registration burdens rather than bouncing claims between procedural boxes.",
    ],
    watch: [
      "Future Pennsylvania cases testing habeas, declaratory judgment, mandamus, or other vehicles for SORNA challenges.",
      "Whether courts clarify which procedural mechanism is available for ongoing registration claims.",
      "How counsel and registrants adjust filing strategy after Arnett.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Due-process concern",
        "Relief barrier",
        "Court limitation",
        "Litigation risk",
      ],
      risk: ["Appeal likely", "Clarification needed", "Watch closely"],
    },
    tags: ["Pennsylvania", "SORNA II", "PCRA", "relief"],
    sources: [
      {
        label: "Pennsylvania Supreme Court opinion",
        href: "https://www.pacourts.us/assets/opinions/Supreme/out/J-34-2025cdo%20-%20106726178352043061.pdf?cb=1",
        kind: "official",
        type: "official court opinion",
      },
      {
        label: "Justia case page",
        href: "https://law.justia.com/cases/pennsylvania/supreme-court/2026/19-map-2023.html",
        kind: "supplemental",
        type: "legal context",
      },
      {
        label: "PARSOL case note",
        href: "https://parsol.org/scopa-says-no-pcra-for-prr/",
        kind: "supplemental",
        type: "advocacy context",
      },
    ],
  },
  {
    id: 9,
    group: "Courts & Relief Pathways",
    title:
      "Sixth Circuit limits SORNA tiering and vacates a 20-year supervised-release term in Buddi",
    jurisdiction: "Federal / Sixth Circuit",
    date: "March 2–3, 2026",
    summary:
      "The Sixth Circuit required a tighter categorical match before heightened SORNA tiering and rejected a supervised-release sentence based on a mistaken guideline range.",
    tone: "emerald",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca6/24-5953/24-5953-2026-03-03.html">
          United States v. Buddi
        </ExternalLink>
        , the Sixth Circuit held that a Florida lewd-and-lascivious-battery
        conviction did not make the defendant Tier II under SORNA for sentencing
        purposes.
      </>,
      "Applying the categorical approach, the court concluded that the Florida offense lacked the knowledge-of-age element required for comparison to the federal coercion-and-enticement offense under 18 U.S.C. § 2422(b).",
      "Because the defendant should have been treated as Tier I, not Tier II, and because the district court misunderstood the supervised-release guideline range, the Sixth Circuit reversed the tier-classification ruling, vacated the 20-year supervised-release term, and remanded.",
    ],
    matters: [
      "SORNA tier classification is not just a label. In failure-to-register cases, it can affect guideline calculations, sentencing exposure, and the length and intensity of supervised release.",
      "For registrants and families, excessive supervision terms can shape decades of ordinary life: where someone may live, travel, work, parent, use technology, or seek treatment. A court requiring precision before imposing that burden is meaningful.",
      "The decision also helps defense counsel challenge inflated tiering when state offenses do not categorically match federal comparators.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because the court demanded legal precision before heightened punishment and supervision. That is especially important in registry cases, where labels can compound into years of additional control.",
      "The ruling does not erase SORNA’s broader burdens, but it does create a useful rights-protective limit: courts cannot treat a state conviction as a higher SORNA tier unless the elements actually match the federal standard.",
    ],
    watch: [
      "How district courts in the Sixth Circuit apply Buddi to other state statutory-rape, lewdness, or age-based offenses.",
      "Government arguments on remand and in future tier-classification disputes.",
      "Whether defense counsel use Buddi to challenge excessive supervised-release terms tied to mistaken guideline ranges.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: [
        "Court limitation",
        "Due-process concern",
        "Compliance clarity",
        "Supervision burden",
      ],
      risk: ["Reform opening", "Watch closely"],
    },
    tags: ["Sixth Circuit", "SORNA", "tiering", "supervised release"],
    sources: [
      {
        label: "United States v. Buddi opinion",
        href: "https://law.justia.com/cases/federal/appellate-courts/ca6/24-5953/24-5953-2026-03-03.html",
        kind: "official",
        type: "court opinion text",
      },
      {
        label: "CaseMine legal analysis",
        href: "https://www.casemine.com/commentary/us/-2422%28b%29-requires-knowledge-of-minor-status-for-sorna-tiering%2C-and-misstating-the-supervised-release-guidelines-range-is-procedural-error-%28sixth-circuit%29/view",
        kind: "supplemental",
        type: "legal analysis",
      },
    ],
  },
  {
    id: 10,
    group: "Courts & Relief Pathways",
    title:
      "New Hampshire says out-of-state registry termination did not create in-state relief eligibility",
    jurisdiction: "New Hampshire",
    date: "March 17, 2026",
    summary:
      "New Hampshire’s Supreme Court kept relief eligibility narrow for an interstate registrant, showing how state-by-state registry systems can preserve obligations even after another state ends them.",
    tone: "rose",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://www.courts.nh.gov/sites/g/files/ehbemt471/files/documents/2026-03/20250034.pdf">
          In the Matter of James Mann
        </ExternalLink>
        , the New Hampshire Supreme Court held that a statutory relief provision
        for people convicted before “the sex offender registry” refers to New
        Hampshire’s registry, not another state’s registry.
      </>,
      <>
        The petitioner had a Massachusetts conviction predating Massachusetts’
        registry and later had his Massachusetts obligation terminated. New
        Hampshire still required him to register as a Tier II offender, and the
        court affirmed dismissal of his petition.
      </>,
      <>
        A{" "}
        <ExternalLink href="https://www.casemine.com/judgement/us/69b991bc17c547604acba4f1">
          supplemental legal mirror
        </ExternalLink>{" "}
        is included for readable case text alongside the official court PDF.
      </>,
    ],
    matters: [
      "Interstate registry rules can trap people in obligations that no longer exist in the conviction state. Moving, owning property, joining family, or relocating for work can restart or continue registration under a destination state’s law.",
      "For families, this means relief in one state may not translate into stability elsewhere. A person who reasonably believes a registry obligation has ended may still face public registration, travel burdens, housing barriers, and legal risk after crossing state lines.",
      "The decision highlights the practical unfairness of a patchwork system where relief is not portable and where ordinary mobility can revive severe consequences.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the court’s interpretation preserves a relief barrier for people with out-of-state convictions. The issue is not whether New Hampshire can define its own registry; it is whether the system gives people a fair, predictable way to rely on relief already granted elsewhere.",
      "This is a state-by-state variation problem that may need legislative clarification or future constitutional litigation focused on fairness, reliance, and interstate recognition.",
    ],
    watch: [
      "Whether New Hampshire lawmakers clarify how out-of-state termination should be treated.",
      "Future challenges based on fairness, reliance, due process, or interstate relief recognition.",
      "How attorneys advise people with out-of-state convictions before moving, working, or owning property in New Hampshire.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Relief barrier",
        "State-by-state variation",
        "Reentry barrier",
        "Due-process concern",
      ],
      risk: ["Watch closely", "Clarification needed"],
    },
    tags: ["New Hampshire", "interstate registration", "relief", "termination"],
    sources: [
      {
        label: "New Hampshire Supreme Court order",
        href: "https://www.courts.nh.gov/sites/g/files/ehbemt471/files/documents/2026-03/20250034.pdf",
        kind: "official",
        type: "official court PDF",
      },
      {
        label: "CaseMine case text",
        href: "https://www.casemine.com/judgement/us/69b991bc17c547604acba4f1",
        kind: "supplemental",
        type: "legal context",
      },
    ],
  },
  {
    id: 11,
    group: "Courts & Relief Pathways",
    title:
      "West Virginia SB 1083 would add registration for felony indecent exposure to certain minors",
    jurisdiction: "West Virginia",
    date: "March 4–5, 2026",
    summary:
      "West Virginia’s Senate passed a bill that would create or enhance indecent-exposure offenses and tie certain felony convictions to sex-offender registration.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://legiscan.com/WV/bill/SB1083/2026">
          SB 1083
        </ExternalLink>{" "}
        passed the Senate on March 4 and was sent to House Judiciary on March 5.
        The bill would require registration for a newly created felony offense
        of indecent exposure to certain minors.
      </>,
      <>
        The{" "}
        <ExternalLink href="https://legiscan.com/WV/text/SB1083/id/3381495">
          bill text
        </ExternalLink>{" "}
        defines exposure to include the nude penis, vagina, or anus, creates
        enhanced penalties for repeat violations, includes certain locker-room
        conduct, and treats felony indecent-exposure offenses as qualifying
        offenses for recidivist sentencing enhancements.
      </>,
      "The development expands the set of conduct that can trigger long-term registration and related felony consequences.",
    ],
    matters: [
      "A new registration trigger is not limited to the criminal sentence. It can lead to public exposure, housing and employment barriers, family stress, travel limits, and years of compliance obligations.",
      "When conduct categories are broad or poorly defined, registry consequences can sweep in cases that differ significantly in risk, context, intent, and harm. Precision matters because registration is a life-altering consequence.",
      "For families, the practical effect can continue long after a sentence ends: public listing, supervision expectations, address reporting, and social stigma all become part of daily life.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the bill expands registration-triggering conduct and links it to broader punishment consequences. The core concern is proportionality: whether the registry is being used as a default add-on rather than an individualized safety tool.",
      "The House Judiciary stage is the place to demand narrow definitions, clear intent requirements, careful treatment of locker-room and exposure language, and proportional consequences tied to actual risk.",
    ],
    watch: [
      "House Judiciary amendments or hearing activity.",
      "Whether final definitions are narrowed to clearly sexual or exploitative conduct.",
      "Whether registration consequences are made proportional and individualized.",
      "Whether recidivist-sentencing provisions are narrowed or expanded.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Punishment expansion",
        "Public notification",
        "Reentry barrier",
        "Compliance burden",
      ],
      risk: ["Watch closely", "Clarification needed", "Advocacy opening"],
    },
    tags: ["West Virginia", "registration trigger", "offense expansion"],
    sources: [
      {
        label: "West Virginia SB 1083 status",
        href: "https://legiscan.com/WV/bill/SB1083/2026",
        kind: "official",
        type: "legislative status with West Virginia source links",
      },
      {
        label: "SB 1083 bill text",
        href: "https://legiscan.com/WV/text/SB1083/id/3381495",
        kind: "official",
        type: "official bill text via legislative source",
      },
    ],
    action: {
      title: "Ask West Virginia lawmakers to narrow SB 1083",
      why:
        "New registration triggers should be precise, proportional, and limited to conduct that truly justifies long-term public-registration consequences.",
      label: "Track SB 1083 status",
      href: "https://legiscan.com/WV/bill/SB1083/2026",
      message:
        "Please narrow SB 1083 before any further action. New registration triggers should have precise definitions, clear intent requirements, proportional consequences, and individualized review rather than automatic long-term public registration.",
    },
  },
];

const actionCenterItems: ActionLink[] = [
  {
    title: "Demand transparent Florida SB 212 implementation",
    why:
      "Florida’s final law can turn ordinary residential-community pools into housing exclusion points, so implementation must be clear before families face July relocation pressure.",
    label: "Find Florida legislators",
    href: "https://www.flhouse.gov/FindYourRepresentative",
    message:
      "Please ask FDLE and local agencies to publish clear, transparent guidance for SB 212 implementation, including mapping methods, grandfathering rules, adult-only-pool exclusions, and safeguards against broad housing displacement. Public safety is not served by making stable housing impossible.",
  },
  {
    title: "Urge Rhode Island to narrow the 300-foot felony housing bill",
    why:
      "S 2281 would create felony exposure for living within 300 feet of a school, making mapping, exceptions, and individualized review essential.",
    label: "Find Rhode Island officials",
    href: "https://www.ri.gov/links/?tags=elected+officials",
    message:
      "Please narrow S 2281 before advancing it. A felony housing restriction should not be adopted without clear mapping, grandfathering, hardship exceptions, individualized review, and evidence that it improves safety rather than increasing homelessness and family instability.",
  },
  {
    title: "Ask Utah for a non-punitive homelessness compliance pathway",
    why:
      "HB 370 can become either a structured compliance pathway or a warrant-driven monitoring system for people without housing.",
    label: "Find Utah legislators",
    href: "https://le.utah.gov/GIS/findDistrict.jsp",
    message:
      "Please ensure HB 370 is implemented with clear written standards, non-punitive notice, housing-resource referrals, and alternatives to arrest. People without a residential address need a realistic compliance pathway, not more homelessness-driven criminal exposure.",
  },
  {
    title: "Oppose Kentucky registry fees and poverty penalties",
    why:
      "HB 929 would add a $1,000 initial fee, annual payments, and fine exposure to a population already facing employment and housing barriers.",
    label: "Find Kentucky legislators",
    href: "https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html",
    message:
      "Please oppose HB 929 or add strong indigency protections. Registry fees create reentry barriers, shift public-system costs onto families, and punish poverty without evidence that they improve safety.",
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida SB 212 implementation",
    posture:
      "Chapter No. 2026-17 posted April 1, with a July 1, 2026 effective date.",
    why:
      "The final law does not retain the earlier public-bathing-place language, but it creates a broad pool-based residency restriction that may reach gated or access-controlled pools serving apartments, condos, subdivisions, mobile-home parks, and townhouses.",
    next: [
      "Watch FDLE and local guidance.",
      "Look for mapping rules, grandfathering treatment, adult-only-pool exclusions, and hotel, motel, or RV-park exclusions.",
      "Track litigation over vagueness, overbreadth, banishment-like effects, and practical housing access.",
    ],
  },
  {
    title: "Utah HB 370 implementation",
    posture:
      "Signed March 24, with key provisions effective May 6, 2026.",
    why:
      "The law creates monitoring and warrant processes for registrants without a residential address, putting unhoused people at heightened enforcement risk.",
    next: [
      "Watch Department of Public Safety training and guidance.",
      "Track local delegation between law enforcement and Adult Probation and Parole.",
      "Look for non-carceral alternatives, housing-resource referrals, and arrest practices.",
    ],
  },
  {
    title: "Rhode Island S 2281",
    posture:
      "Senate passed March 31; House Judiciary referral followed April 1.",
    why:
      "A new felony school-distance housing restriction could reduce lawful housing options and create prosecution risk for address choices.",
    next: [
      "Watch for a House Judiciary hearing.",
      "Track amendments on exceptions, grandfathering, hardship review, and mapping method.",
      "Look for testimony on housing availability and family displacement.",
    ],
  },
  {
    title: "Louisiana HB 784",
    posture:
      "House passed; Senate Judiciary C referral occurred March 30.",
    why:
      "The bill affects registration definitions, notice duties, travel and lodging reporting, social-networking language, and new offense triggers.",
    next: [
      "Watch Senate Judiciary C amendments.",
      "Compare final duty language against the engrossed House version.",
      "Look for narrowing or expansion of new offense-trigger language.",
    ],
  },
  {
    title: "Pennsylvania post-Arnett procedural vehicles",
    posture:
      "The Pennsylvania Supreme Court held PCRA is not available for the SORNA II challenge at issue.",
    why:
      "Relief may now depend on habeas, declaratory judgment, mandamus, or another procedural route, making access to court a central barrier.",
    next: [
      "Watch cases testing alternative procedural vehicles.",
      "Track whether courts provide a clear route for ongoing registration challenges.",
      "Monitor public education for registrants and counsel after Arnett.",
    ],
  },
  {
    title: "BJA SORNA funding awards",
    posture:
      "Federal solicitation posted and modified in March, with April application deadlines.",
    why:
      "Funding choices may shape state enforcement capacity, registry accuracy work, data sharing, and due-process safeguards.",
    next: [
      "Watch award recipients and project descriptions.",
      "Look for whether projects emphasize accuracy, correction, and notice or primarily enforcement expansion.",
      "Track public reporting on funded activities.",
    ],
  },
];
export default function LegislativeTrackerMarch2026Update(): JSX.Element {
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
        title="Legislative Tracker — March 2026 Update | The SOLAR Project"
        description="March 2026 SOLAR Legislative Tracker update covering registry housing restrictions, homelessness monitoring, fees, notification duties, offense-trigger expansion, court rulings, and federal SORNA implementation funding."
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
            Legislative Tracker — March 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            March brought a restriction-heavy mix of housing exclusions,
            homelessness monitoring, registry fees, notification duties,
            offense-trigger expansion, and court rulings that split between
            relief barriers and one meaningful SORNA tiering win.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This catch-up covers meaningful developments from March 1 through
              March 31, 2026, using official bill pages, bill texts, court
              opinions, and agency postings first, with supplemental legal or
              media context only where useful.
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
        <Section id="glance" eyebrow="At a Glance" title="What March moved">
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
              March shows how registry policy expands through ordinary-life
              pressure points: where someone can sleep, whether a family can
              offer temporary shelter, whether a person can afford compliance,
              how many technical duties must be remembered, and which court door
              remains open for relief. The month was not one national shift; it
              was a patchwork of state, court, and agency actions that made
              stability harder to preserve.
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
              March’s dominant pattern was restriction by geography, paperwork,
              poverty, and procedure. Florida and Rhode Island moved housing
              exclusions; Utah and Idaho focused on address instability;
              Kentucky proposed registry fees; and Louisiana advanced a broad
              registration-and-notification package. That is why{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              has to ask not only what a law says, but whether it makes real
              safety more likely or simply makes ordinary stability harder.
            </p>
            <p>
              The courts offered a more complicated counter-pattern. The Sixth
              Circuit required precision before heightened SORNA tiering and a
              decades-long supervision term, while Pennsylvania and New
              Hampshire narrowed practical routes to relief. For people trying
              to understand compliance, relief, housing, or reentry in real
              life, SOLAR’s{" "}
              <InternalLink to="/resources">
                plain-language resources
              </InternalLink>{" "}
              remain a starting point rather than a substitute for legal advice.
            </p>
            <p>
              This update also reinforces why registry-policy trend tracking
              matters. The same public-safety language can produce very
              different legal mechanisms: a residency map, a warrant process, a
              fee, a new offense trigger, or a procedural barrier. The{" "}
              <InternalLink to="/resources/legislative-tracker">
                Legislative Tracker archive
              </InternalLink>{" "}
              helps readers see those mechanisms across months instead of
              treating each proposal as an isolated event.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="March 2026 developments"
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
            These actions focus on the highest-leverage March items where
            lawmakers or agencies can still narrow harm, demand clarity, or
            build implementation safeguards.
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
              SOLAR prioritizes official sources first: bill pages, enrolled or
              engrossed text, court opinions, agency notices, government
              reports, and official public-action pages. Reporting, advocacy
              explainers, legal mirrors, and civic-data sources may be used as
              supplemental context, but they do not replace official sources
              when official sources are available.
            </p>
            <p>
              The purpose of this tracker is to identify legal and policy
              developments that affect registry duties, reentry, housing, family
              stability, relief pathways, due process, supervision,
              implementation, and evidence-based reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "11 March developments across state legislation, courts, and federal implementation.",
    "Florida and Rhode Island moved housing restrictions, while Utah and Idaho focused on address instability.",
    "Kentucky proposed large registry fees, and Louisiana advanced a broader notification-and-definition bill.",
    "Courts split: Buddi narrowed SORNA tiering, while Arnett and Mann limited practical relief pathways.",
  ],
  highlights: [
    "Florida’s final SB 212 should be read as a broad public-swimming-pool housing exclusion, not as the earlier beach/public-bathing-place draft.",
    "Utah HB 370 creates a monitoring and warrant framework for registrants without a residential address.",
    "Kentucky HB 929 would require a $1,000 initial registry fee and $150 annual payments.",
    "The Sixth Circuit’s Buddi decision is the month’s clearest rights-protective counterpoint on SORNA tiering and supervised release.",
  ],
};