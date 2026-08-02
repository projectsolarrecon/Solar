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

const slug = "2026-08-01";
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
    value: "4",
    body:
      "Three state enactments took operative effect on July 1, and one local Texas proposal created a live housing-advocacy opening.",
  },
  {
    label: "Dominant Posture",
    value: "Burden expansion",
    body:
      "July’s clearest pattern was not relief. It was added geography, shorter deadlines, new fees, and local exclusion planning.",
  },
  {
    label: "Rights / Reform / Litigation Counterpoint",
    value: "0",
    body:
      "No comparably significant July relief enactment or rights-protective appellate ruling was verified for this update.",
  },
  {
    label: "Action Paths",
    value: "4",
    body:
      "The most useful actions focus on implementation documentation, agency guidance, fee safeguards, and early local intervention.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "Florida SB 212 makes public pools legally consequential and widens child-congregation proximity exposure",
    jurisdiction: "Florida",
    date: "Effective July 1, 2026",
    summary:
      "Florida expanded the places that can affect residence, employment, supervision, family access, and arrest exposure by adding public swimming pools across several sex-offense registry and supervision statutes.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2026/212">
          Florida SB 212
        </ExternalLink>{" "}
        became effective July 1 after enactment as Chapter 2026-17. The law
        defines “public swimming pool” broadly to include pools, spas, wading
        pools, spray pools, splash pads, and other recreational-water
        attractions, including many facilities serving subdivisions, apartments,
        condominiums, mobile-home parks, townhouses, and government sites.
      </>,
      <>
        The enrolled text adds qualifying public pools to specified 1,000-foot
        residency restrictions, pool-related living and work limits for some
        people under supervision, background-screening provisions for specified
        pool appointments or employment, and warrantless-arrest authority for
        designated violations. It also increases the relevant loitering or
        prowling radius around places where children congregate from 300 to 500
        feet.
      </>,
      <>
        This should not be read as a universal pool ban for everyone required to
        register. Different sections use different triggering offenses,
        victim-age requirements, offense dates, residence-change dates, and
        supervision categories, so individualized written guidance matters.
      </>,
    ],
    matters: [
      "The law changes ordinary geography. A subdivision pool, apartment pool, municipal splash pad, or similar facility may become legally relevant to where a person can live, work, volunteer, visit, or move while under supervision.",
      "For families, the practical risk is not only exclusion from recreation. It is housing loss, denied family access, transportation burdens, confusion over covered facilities, police contact, and possible arrest when the boundaries are unclear or poorly mapped.",
      "Because the law reaches across multiple statutory regimes, implementation will likely depend on local mapping choices, supervision instructions, sheriff-office communication, and whether affected people receive notice that is specific enough to rely on.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it expands punishment geography by status and supervision category rather than narrowing policy around individualized risk. Public pools become another set of places where ordinary family life can turn into a compliance hazard.",
      "The danger is not only the new pool language. It is the combination of broader covered locations, a larger proximity radius, supervision restrictions, employment screening, and warrantless-arrest exposure.",
    ],
    watch: [
      "How state and local actors map covered public swimming pools, splash pads, subdivision facilities, apartment pools, and government facilities.",
      "Whether supervision officers issue individualized written instructions rather than relying on informal warnings.",
      "How agencies treat pre-July residence facts, post-July moves, residence-change dates, and people whose triggering statutes differ.",
      "Whether enforcement produces arrests, housing displacement, family-access denials, or constitutional challenges.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Employment barrier",
        "Supervision burden",
        "Family-stability impact",
        "Compliance burden",
        "Punishment expansion",
      ],
      risk: ["Enforcement risk", "Implementation risk", "Watch closely"],
    },
    tags: ["state", "residency", "supervision", "public pools", "arrest exposure"],
    sources: [
      {
        label: "Florida Senate SB 212 bill page",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
        kind: "official",
        type: "official legislature",
      },
      {
        label: "Florida Senate bill summary",
        href: "https://www.flsenate.gov/Committees/billsummaries/2026/html/212",
        kind: "official",
        type: "official legislative summary",
      },
      {
        label: "Enrolled bill text",
        href: "https://www.flsenate.gov/Session/Bill/2026/212/BillText/er/HTML",
        kind: "official",
        type: "official enacted text",
      },
      {
        label: "Florida HB 45 companion",
        href: "https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82584",
        kind: "official",
        type: "official companion bill page",
      },
    ],
    action: {
      title: "Document SB 212 implementation problems",
      why:
        "The bill is already operative, so the most useful public record now is concrete documentation of mapping errors, unclear applicability notices, inconsistent supervision instructions, housing displacement, and denied family access.",
      label: "Track SB 212",
      href: "https://www.flsenate.gov/Session/Bill/2026/212",
      message:
        "Please document and review implementation problems under Florida SB 212, including mapping errors, unclear applicability notices, inconsistent supervision instructions, housing displacement, employment barriers, and family-access consequences. Implementation should be clear, individualized, written, and evidence-based.",
    },
  },
  {
    id: 2,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "Iowa SF 2379 shortens registry reporting windows and adds in-person employment and vehicle duties",
    jurisdiction: "Iowa",
    date: "Effective July 1, 2026",
    summary:
      "Iowa compressed several registry deadlines from five to three business days and added new in-person reporting duties that raise technical-compliance risk for registrants and families.",
    tone: "rose",
    changed: [
      <>
        Division III of{" "}
        <ExternalLink href="https://www.legis.iowa.gov/docs/publications/LGE/91/SF2379.pdf">
          Iowa SF 2379
        </ExternalLink>{" "}
        became operative July 1, 2026. The registry amendments reduce the
        initial registration deadline, residence-change reporting, employment
        and student-status reporting, other relevant-information reporting,
        interstate reporting, and temporary-lodging reporting to three business
        days.
      </>,
      "The act also requires a person initially processed by a court or releasing agency to appear in person in the county of residence to verify arrival and relevant information. A new section requires in-person reporting within three business days after changes to the name, address, or telephone number of a place of employment.",
      "Iowa also now requires reporting of the license plate and physical description, including make, model, and color, of any vehicle owned or regularly operated. The phrase “regularly operated” creates practical questions for borrowed, family, employer, shared, or intermittently used vehicles.",
    ],
    matters: [
      "Two fewer business days can be the difference between compliance and prosecution, especially when a move, job change, school change, temporary lodging, or vehicle change occurs near a weekend, holiday, medical issue, family emergency, or transportation problem.",
      "In-person duties shift the burden onto registrants and families to secure transportation, leave work, arrange childcare, collect documents, and reach the correct sheriff office quickly enough to avoid technical exposure.",
      "For people trying to maintain work and housing, the employment and vehicle provisions matter because ordinary logistics can become legal traps. A family car, a borrowed vehicle, or a workplace phone-number change may carry consequences if the state does not provide clear instructions.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it makes the registry harder to comply with while adding more facts that must be reported in person. The change does not improve individualized risk assessment; it increases the number of ways ordinary life can produce a technical violation.",
      "The implementation question is central. Statewide guidance could reduce harm, but without clear definitions, disability accommodations, holiday rules, electronic pre-notice options, and good-faith delay protections, the shortened deadlines will fall hardest on people with the least flexibility.",
    ],
    watch: [
      "Whether Iowa DPS issues statewide guidance defining three-business-day calculations, holiday handling, acceptable documentation, and electronic pre-submission.",
      "How sheriffs interpret “regularly operated” for family, employer, borrowed, shared, or intermittently used vehicles.",
      "Whether counties apply consistent accessibility accommodations and good-faith transition practices.",
      "Whether enforcement patterns show increased technical violations after July 1.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Employment barrier",
        "Family-stability impact",
        "Agency implementation",
      ],
      risk: ["Enforcement risk", "Clarification needed", "Implementation risk"],
    },
    tags: ["state", "deadlines", "employment", "vehicles", "in-person reporting"],
    sources: [
      {
        label: "Signed enrolled Iowa SF 2379",
        href: "https://www.legis.iowa.gov/docs/publications/LGE/91/SF2379.pdf",
        kind: "official",
        type: "official enacted text",
      },
      {
        label: "Iowa SF 2379 bill history",
        href: "https://www.legis.iowa.gov/legislation/billTracking/billHistory?billName=SF2379&enhanced=true&ga=91",
        kind: "official",
        type: "official legislative history",
      },
      {
        label: "Iowa HF 2704 related vehicle",
        href: "https://www.legis.iowa.gov/legislation/BillBook?ba=HF2704&ga=91",
        kind: "official",
        type: "official related bill page",
      },
      {
        label: "Iowa DPS registry program page",
        href: "https://dps.iowa.gov/divisions-iowa-department-public-safety/iowa-division-criminal-investigation/support-operations-bureau",
        kind: "official",
        type: "official agency page",
      },
    ],
    action: {
      title: "Ask Iowa DPS for uniform SF 2379 guidance",
      why:
        "Statewide guidance can reduce avoidable technical violations by clarifying deadlines, vehicle reporting, electronic notice, disability access, holidays, and good-faith delay.",
      label: "Contact Iowa DPS registry program",
      href: "https://dps.iowa.gov/divisions-iowa-department-public-safety/iowa-division-criminal-investigation/support-operations-bureau",
      message:
        "Please issue statewide public guidance for SF 2379 registry implementation, including three-business-day calculations, weekend and holiday treatment, the meaning of “regularly operated” vehicles, acceptable documentation, electronic pre-notice, disability accommodations, and good-faith transition enforcement.",
    },
  },

  {
    id: 3,
    group: "Restriction Expansion / Compliance Burden",
    title:
      "Kansas SB 487 adds a technology fee while preserving registration completion despite nonpayment",
    jurisdiction: "Kansas",
    date: "Effective July 1, 2026",
    summary:
      "Kansas added a recurring registration-related technology fee backed by criminal enforcement, while also creating an indigency petition and a limited cure path that can prevent a nonpayment charge from continuing.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.kslegislature.gov/b2025_26/bills/sb487/">
          Kansas SB 487
        </ExternalLink>{" "}
        became operative July 1 for the initial technology-fee provisions. A
        person required to register must pay a $10 technology fee to the sheriff
        in the county of residence, with the money supporting a statewide
        offender registration system scheduled for broader implementation in
        2028.
      </>,
      "The fee operates within the existing scheduled reporting-payment structure. It is not charged for every ordinary information update or every transient 30-day report unless the reporting event falls in the scheduled birthday-month cycle or the third, sixth, or ninth month before or after that month.",
      "The enrolled text also creates a district-court indigency process with no filing fee or surcharge for the petition. Registration is completed whether or not payment is made, but nonpayment can still lead to a notice to appear; if payment is made within 20 calendar days, the criminal charge must be dismissed.",
    ],
    matters: [
      "Even a small recurring fee can matter for people already navigating registration costs, unstable housing, unemployment, transportation costs, court debt, and family financial stress. The new charge adds another point where poverty and compliance collide.",
      "The indigency and cure provisions are important protections, but they require awareness, paperwork, timing, and access to the district court. A protection that exists on paper may not protect people who never receive clear notice or cannot gather documentation before the reporting event.",
      "For families, the burden may look like tracking fee months, collecting financial records, preparing affidavits, monitoring the three-year indigency window, and proving timely payment so a dismissal actually occurs after cure.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because Kansas newly attaches another fee to scheduled registration and keeps criminal process available for nonpayment. The indigency petition, registration-completion rule, and 20-day cure reduce the harm, but they do not erase the direct worsening created by a new cost.",
      "This is a classic implementation-risk development: whether the law becomes a manageable administrative cost or another poverty-driven criminal trap will depend on sheriff notices, court forms, KBI guidance, and consistent dismissal documentation.",
    ],
    watch: [
      "Whether sheriffs and KBI publish a plain-language fee calendar explaining scheduled collection months and residence-county payment.",
      "Whether courts provide standardized fee-free indigency forms and clear three-year tracking.",
      "Whether agencies clearly state that registration is completed despite nonpayment.",
      "Whether timely payment within 20 calendar days reliably produces dismissal documentation.",
      "How Kansas prepares for KBI rulemaking and broader statewide-system implementation in 2028.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Compliance burden",
        "Reentry barrier",
        "Due-process concern",
        "Family-stability impact",
        "Agency implementation",
      ],
      risk: ["Enforcement risk", "Clarification needed", "Implementation risk"],
    },
    tags: ["state", "fees", "indigency", "nonpayment", "implementation"],
    sources: [
      {
        label: "Kansas SB 487 bill page",
        href: "https://www.kslegislature.gov/b2025_26/bills/sb487/",
        kind: "official",
        type: "official legislature",
      },
      {
        label: "Kansas SB 487 enrolled text",
        href: "https://www.kslegislature.gov/b2025_26/bills/download/?apn=b2025_26%2Fyear2%2Fready_for_publication%2Fsb_487%2Fsb487_enrolled.pdf",
        kind: "official",
        type: "official enacted text",
      },
      {
        label: "Kansas supplemental note",
        href: "https://www.kslegislature.gov/b2025_26/documents/view-leg/?apn=b2025_26%2Fds_docs_li%2Fsupp_note_sb487_02_0000.pdf",
        kind: "official",
        type: "official legislative analysis",
      },
      {
        label: "KCTV implementation context",
        href: "https://www.kctv5.com/2026/05/28/kansas-set-raise-offender-registry-fees-starting-this-summer/",
        kind: "supplemental",
        type: "credible local media context",
      },
    ],
    action: {
      title: "Ask Kansas for fee and indigency guidance",
      why:
        "Uniform forms and notices can prevent poverty from becoming a technical enforcement pathway when registration is already complete despite nonpayment.",
      label: "Contact Kansas Bureau of Investigation",
      href: "https://www.kansas.gov/kbi/about/contactus.shtml",
      message:
        "Please publish uniform public guidance for SB 487 implementation, including scheduled technology-fee months, residence-county collection, a standardized indigency petition form, the three-year indigency period, notice-to-appear procedures, the 20-day cure, dismissal documentation, and confirmation that registration is completed despite nonpayment.",
    },
  },
  {
    id: 4,
    group: "Action Opportunities / Restriction Expansion",
    title:
      "Beaumont moved toward a proposed 2,000-foot child-safety-zone ordinance but had not verified final adoption",
    jurisdiction: "Beaumont, Texas",
    date: "July 7, 2026",
    summary:
      "Beaumont created a live local advocacy window by directing staff to return with a child-safety-zone ordinance and software purchase, but the July record supports proposal status—not enactment.",
    tone: "amber",
    changed: [
      <>
        Beaumont’s{" "}
        <ExternalLink href="https://www.beaumonttexas.gov/CivicAlerts.aspx?AID=849">
          July 7 Council Catch Up
        </ExternalLink>{" "}
        described a proposed child-safety-zone ordinance around locations such
        as parks, schools, and playgrounds. City staff discussed a residential
        buffer of up to 2,000 feet, grandfathering for existing registrants in
        approved housing while the housing retains its qualifying status,
        penalties for occupants and landlords, and automated database checks
        through new software.
      </>,
      "Council expressed support for the 2,000-foot approach and directed staff to pursue a countywide software partnership and return with an ordinance and purchase, with implementation targeted by January 1, 2027 or earlier if feasible.",
      "No official ordinance text, ordinance number, final adoption vote, or later-July council record confirming enactment was located in the verified handoff. This item should therefore be described as proposed, not enacted.",
    ],
    matters: [
      "A 2,000-foot housing rule can sharply reduce available housing when protected locations overlap across neighborhoods. The practical effect may be larger than the distance number suggests, especially in cities where schools, parks, playgrounds, and other child-centered sites are spread through ordinary residential areas.",
      "Landlord penalties can push owners to deny housing categorically, even beyond what the ordinance strictly requires. That can destabilize leases, group homes, family co-residence, and reentry plans before a person ever receives an individualized review.",
      "Software-assisted enforcement adds another layer of concern: mapping accuracy, address data, protected-location definitions, notice, correction rights, and appeals all matter when a database can influence housing access or enforcement.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because the proposal would expand exclusionary housing geography and add landlord pressure, even though it had not yet become final law by July 31. The movement is local and proposed, but the advocacy window is real.",
      "The most important next step is early intervention before the ordinance is locked in. Beaumont should be asked to publish the draft, publish a feasible-residence map, justify the distance with evidence, preserve durable grandfathering, protect landlords who follow the law, and create written notice, correction, and appeal procedures.",
    ],
    watch: [
      "Whether Beaumont publishes final ordinance text, an ordinance number, and a vote date.",
      "How the proposal defines protected locations and measures the 2,000-foot distance.",
      "Whether coverage is prospective only or reaches existing housing, group homes, leases, or family co-residence.",
      "Whether landlord penalties include defenses, safe harbors, notice requirements, error correction, and appeal rights.",
      "Whether the city publishes a housing-availability map before any vote.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Housing barrier",
        "Family-stability impact",
        "Reentry barrier",
        "Punishment expansion",
      ],
      risk: [
        "Advocacy opening",
        "Implementation risk",
        "Watch closely",
        "Clarification needed",
      ],
    },
    tags: ["local", "housing", "residency zones", "landlords", "software"],
    sources: [
      {
        label: "Beaumont Council Catch Up",
        href: "https://www.beaumonttexas.gov/CivicAlerts.aspx?AID=849",
        kind: "official",
        type: "official municipal summary",
      },
      {
        label: "Beaumont City Council",
        href: "https://www.beaumonttexas.gov/676/City-Council",
        kind: "official",
        type: "official municipal action page",
      },
    ],
    action: {
      title: "Intervene before Beaumont adopts a final ordinance",
      why:
        "The proposal had not been verified as enacted by July 31, which makes this the clearest live advocacy opening in the July update.",
      label: "Contact Beaumont City Council",
      href: "https://www.beaumonttexas.gov/676/City-Council",
      message:
        "Please publish the draft child-safety-zone ordinance and a feasible-residence map before any vote. Beaumont should reject blanket 2,000-foot exclusion unless it is evidence-based and narrowly tailored, and any ordinance should include durable grandfathering, landlord safe harbors, clear measurement rules, written notice, error correction, and an appeal process.",
    },
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Florida SB 212 implementation",
    posture: "Effective July 1, 2026.",
    why:
      "Multiple sections use different offense, victim-age, supervision, residence-change, and applicability triggers, so broad shorthand can misstate who is covered and when.",
    next: [
      "Watch for arrests, supervision policies, covered-pool mapping, written notices, and constitutional challenges.",
      "Track whether agencies distinguish pre-July conduct, post-July residence changes, and supervision-specific restrictions.",
    ],
  },
  {
    title: "Iowa SF 2379 county consistency",
    posture: "Division III’s registry amendments are operative.",
    why:
      "Shortened three-business-day deadlines create immediate technical-compliance risk, especially when counties interpret documentation, holidays, vehicle use, or in-person reporting differently.",
    next: [
      "Watch for Iowa DPS rules, sheriff FAQs, enforcement patterns, and interpretation of “regularly operated.”",
      "Track whether counties allow electronic pre-notice, disability accommodations, and good-faith transition practices.",
    ],
  },
  {
    title: "Kansas SB 487 fee administration",
    posture:
      "The technology fee and indigency/nonpayment provisions are effective.",
    why:
      "The statute contains real protections, but those protections require people to know about them, access court, preserve documentation, and receive consistent notices.",
    next: [
      "Watch for indigency forms, three-year order tracking, scheduled fee collection, notices to appear, and automatic dismissal after cure.",
      "Track whether agencies clearly explain that registration is completed despite nonpayment.",
    ],
  },
  {
    title: "Beaumont child-safety-zone proposal",
    posture:
      "Drafting and procurement were directed, but final enactment was not verified in the July record.",
    why:
      "A 2,000-foot housing rule and landlord penalties could substantially contract lawful housing, including group homes and family co-residence.",
    next: [
      "Watch for an ordinance number, final text, vote date, map, protected-location definitions, grandfathering language, penalties, and implementation date.",
      "Track whether the city publishes a housing-impact analysis before any vote.",
    ],
  },
];

const actionCenterItems: ActionLink[] = [
  {
    title: "Beaumont: intervene before final ordinance adoption",
    why:
      "This is the clearest live advocacy window because the record supports a proposed ordinance, not a completed enactment.",
    label: "Contact Beaumont City Council",
    href: "https://www.beaumonttexas.gov/676/City-Council",
    message:
      "Please publish the draft child-safety-zone ordinance and a feasible-residence map before any vote. Beaumont should reject blanket 2,000-foot exclusion unless it is evidence-based and narrowly tailored, and any ordinance should include durable grandfathering, landlord safe harbors, clear measurement rules, written notice, error correction, and an appeal process.",
  },
  {
    title: "Iowa: request uniform SF 2379 implementation guidance",
    why:
      "Three-business-day deadlines and new in-person duties need statewide clarity before technical violations multiply across counties.",
    label: "Contact Iowa DPS registry program",
    href: "https://dps.iowa.gov/divisions-iowa-department-public-safety/iowa-division-criminal-investigation/support-operations-bureau",
    message:
      "Please issue statewide public guidance for SF 2379 registry implementation, including three-business-day calculations, weekend and holiday treatment, the meaning of “regularly operated” vehicles, acceptable documentation, electronic pre-notice, disability accommodations, and good-faith transition enforcement.",
  },
  {
    title: "Kansas: request fee and indigency guidance",
    why:
      "A standardized public process can help prevent poverty, confusion, or missing paperwork from becoming criminal exposure.",
    label: "Contact Kansas Bureau of Investigation",
    href: "https://www.kansas.gov/kbi/about/contactus.shtml",
    message:
      "Please publish uniform public guidance for SB 487 implementation, including scheduled technology-fee months, residence-county collection, a standardized indigency petition form, the three-year indigency period, notice-to-appear procedures, the 20-day cure, dismissal documentation, and confirmation that registration is completed despite nonpayment.",
  },
  {
    title: "Florida: document implementation problems",
    why:
      "Because SB 212 is already effective, documented mapping errors, inconsistent instructions, and family or housing consequences can support oversight, litigation, and future reform.",
    label: "Track SB 212",
    href: "https://www.flsenate.gov/Session/Bill/2026/212",
    message:
      "Please document and review implementation problems under Florida SB 212, including mapping errors, unclear applicability notices, inconsistent supervision instructions, housing displacement, employment barriers, and family-access consequences. Implementation should be clear, individualized, written, and evidence-based.",
  },
];

export default function LegislativeTrackerJuly2026Update(): JSX.Element {
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
        title="Legislative Tracker — July 2026 Update | The SOLAR Project"
        description="The July 2026 SOLAR Legislative Tracker covers Florida SB 212, Iowa SF 2379, Kansas SB 487, and Beaumont’s proposed child-safety-zone ordinance."
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
            <Badge>State / Local / Implementation</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — July 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            July’s verified registry-policy story was burden expansion:
            Florida widened location-based restrictions and arrest exposure,
            Iowa shortened reporting windows, Kansas added a registration
            technology fee, and Beaumont moved toward a proposed local housing
            exclusion zone.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This July update covers verified developments from July 1 through
              July 31, 2026. SOLAR includes operative enactments and one
              proposed local action item, while excluding items that did not
              show a meaningful July legal or procedural change.
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
        <Section id="glance" eyebrow="At a Glance" title="What July moved">
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
              July did not bring a verified relief breakthrough for people
              living under registration laws. It brought more legally
              consequential geography, tighter reporting clocks, another fee
              attached to registration, and a local proposal that could shrink
              available housing before it ever reaches a final vote.
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
              July’s strongest verified pattern was implementation of added
              geographic, logistical, and financial burdens. Florida made public
              pools part of the compliance map, Iowa compressed reporting
              deadlines and added in-person details, and Kansas attached another
              cost to scheduled registration. Taken together, these developments
              move policy farther from{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              and closer to permanent punishment through ordinary life.
            </p>
            <p>
              The practical effect is felt at home first. Housing searches,
              family recreation, job changes, transportation, sheriff-office
              visits, fee payments, and paperwork become points of legal risk.
              Readers navigating these burdens should pair legal advice with{" "}
              <InternalLink to="/resources">
                resources for impacted families
              </InternalLink>{" "}
              and careful documentation of how implementation actually works in
              their county or city.
            </p>
            <p>
              Beaumont shows how the same pattern can emerge locally before a
              final ordinance exists. That is why monthly{" "}
              <InternalLink to="/resources/legislative-tracker">
                registry-policy trend tracking
              </InternalLink>{" "}
              matters: the earlier families and advocates see the proposal, the
              better chance they have to demand maps, evidence, notice,
              correction rights, and individualized safeguards before exclusion
              becomes the default.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="July 2026 developments"
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
            July’s action paths focus on implementation clarity and early local
            intervention. These messages are written for registrants, families,
            allies, and reform advocates who want evidence-based safeguards
            rather than broad exclusion by status.
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
              laws, legislative summaries, agency pages, court materials,
              government reports, and official action portals. Supplemental
              reporting may be used for context, but it does not replace
              controlling text or official status records.
            </p>
            <p>
              Two potential July items were excluded from the Key Developments
              section. Iowa Registrant Watch notifications were not used because
              the July 2026 budget brief repeated longstanding notification
              capabilities rather than showing a new July launch or expansion.
              Colorado JDF 460i was not used because the July 7 revision was
              verified, but the identified edits did not show a material
              procedural or eligibility change.
            </p>
            <p>
              The purpose of this tracker is to identify developments that
              affect registry duties, reentry, housing, family stability,
              relief pathways, due process, supervision, and evidence-based
              reform. A sparse month should remain sparse; SOLAR does not pad
              monthly updates with items that fail the date-discipline or
              substantive-change tests.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "Three state enactments supplied clear July 1 operative events.",
    "Florida produced the broadest restriction expansion.",
    "Iowa increased technical-compliance risk through three-business-day deadlines.",
    "Kansas added a recurring registration cost with limited indigency and cure protections.",
  ],
  highlights: [
    "Florida SB 212 added qualifying public pools across multiple residency, supervision, employment, presence, and enforcement provisions.",
    "Iowa SF 2379 shortened several registry reporting periods and added in-person employment and vehicle duties.",
    "Kansas SB 487 added a technology fee while preserving registration completion despite nonpayment.",
    "Beaumont created a time-sensitive local advocacy opening around a proposed 2,000-foot child-safety-zone ordinance.",
  ],
};