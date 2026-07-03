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

const slug = "2026-07-01";
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
    value: "5",
    body:
      "June brought five registry-policy developments across compliance mechanics, address verification, occupational licensing, punishment exposure, and SVP-status review.",
  },
  {
    label: "Dominant Posture",
    value: "Mixed",
    body:
      "Louisiana and Connecticut contain process-improvement elements, but the month still leans toward added obligations, exclusion, and punishment risk.",
  },
  {
    label: "Rights / Reform Counterpoint",
    value: "2",
    body:
      "Connecticut created a narrow technical-violation safeguard, while Indiana clarified evidence needs for future SVP-removal petitions.",
  },
  {
    label: "Action Paths",
    value: "3",
    body:
      "The clearest action lanes focus on Louisiana implementation guidance, Connecticut DESPP guidance, and Illinois licensing-exclusion advocacy.",
  },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Compliance Burden / Identification Systems",
    title:
      "Louisiana Act 838 reduces visible ID stigma while adding new compliance risks",
    jurisdiction: "Louisiana",
    date: "Signed June 9, 2026",
    summary:
      "Louisiana enacted a broad registry bill that replaces some public-facing ID labeling with a QR-code mechanism, but also adds or clarifies reporting, notification, online-identifier, release-address, and ID-carry obligations.",
    tone: "amber",
    changed: [
      <>
        <ExternalLink href="https://www.legis.la.gov/Legis/BillInfo.aspx?i=250671">
          Louisiana HB 784
        </ExternalLink>{" "}
        became Act 838 on June 9. The act changes multiple parts of
        Louisiana registration law, including offense triggers, release-related
        registration timing, community-notification mechanics, court
        notification forms, and online-identity reporting.
      </>,
      <>
        The enacted text adds unlawful deepfakes involving minors into
        Louisiana&apos;s sex-offense framework and adds certain deepfake and
        indecent-behavior offenses involving victims under 13 into the category
        of sexual offenses against a victim who is a minor. It also requires
        certain registration steps within three business days after release from
        the initial confinement for the offense requiring registration.
      </>,
      <>
        The ID provisions replace visible &ldquo;sex offender&rdquo; license
        language with a QR-code mechanism on the back of a driver&apos;s
        license or special identification card for law-enforcement
        identification. They also require the person to carry the license or
        special ID whenever outside the residence, retain a penalty for
        intentional failure to meet the ID requirements, and make those ID
        sections effective January 1, 2027.
      </>,
      <>
        The online-identifier change should be read carefully. Act 838 does
        not require registrants to obtain a static IP address. It adds static
        IP addresses to the online identity information that must be provided
        when those addresses exist and are used by the registrant to communicate
        on the Internet.
      </>,
    ],
    matters: [
      "The QR-code shift may reduce visible public humiliation during ordinary ID presentation, but it does not remove state signaling or law-enforcement access. For many people, the practical question will be whether the QR code is limited to law enforcement, what information it exposes, and how often ordinary ID checks become registry checks.",
      "The new ID-carry duty also matters because ordinary movement outside the home becomes tied to a document obligation. Missing, expired, lost, or inaccessible identification can become more than an inconvenience when the statute attaches penalties to intentional failure to comply.",
      "The static-IP language creates compliance-clarity risk. Many people do not know whether their home, mobile, workplace, shared, VPN, or ISP-controlled connection uses a static or dynamic address, and many IP addresses change without the person choosing or controlling the change.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement because the reduction in visible orange-label stigma is real, but it comes inside a broader law that expands compliance obligations and leaves major implementation questions unresolved.",
      "The narrow improvement may reduce some public-facing harm for families, but the added ID-carry and online-identifier rules can create new compliance traps unless agencies publish plain-language guidance before enforcement begins.",
    ],
    watch: [
      "OMV implementation before the January 1, 2027 ID-section effective date.",
      "Louisiana State Police registry guidance on QR-code access, privacy, and whether QR data is visible only to law enforcement.",
      "Agency guidance distinguishing static, dynamic, mobile, shared, workplace, VPN, and carrier-grade NAT addresses.",
      "Whether enforcement treats ISP-controlled address changes as documentation issues rather than intentional concealment.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Compliance burden",
        "Compliance clarity",
        "Online identifiers",
        "Public notification",
        "Family-stability impact",
      ],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    tags: [
      "state",
      "identification",
      "online identifiers",
      "QR code",
      "implementation",
    ],
    sources: [
      {
        label: "Louisiana Legislature — HB 784",
        href: "https://www.legis.la.gov/Legis/BillInfo.aspx?i=250671",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "HB 784 / Act 838 text",
        href: "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1481468",
        kind: "official",
        type: "official enacted law PDF",
      },
    ],
    action: {
      title: "Ask Louisiana agencies to clarify Act 838 implementation",
      why:
        "Clear guidance can reduce avoidable violations around QR-code access, ID-carry enforcement, and static-IP reporting before the January 1, 2027 ID provisions take effect.",
      label: "Track Act 838 status",
      href: "https://www.legis.la.gov/Legis/BillInfo.aspx?i=250671",
      message:
        "Please publish plain-language Act 838 guidance before enforcement begins. Registrants and families need clear instructions on QR-code access and privacy, ID-carry enforcement, and static-IP reporting. Guidance should explain that static IP reporting applies only when a static IP exists and is used to communicate online, and it should identify what documentation is sufficient when an ISP assigns only dynamic or changing addresses.",
    },
  },
  {
    id: 2,
    group: "Compliance Clarity / Technical Violation Reform",
    title:
      "Connecticut Public Act 26-96 creates a proactive address-verification pathway",
    jurisdiction: "Connecticut",
    date: "Signed June 4, 2026",
    summary:
      "Connecticut enacted a narrow but meaningful address-verification reform that gives registrants more ways to prove residency and adds limited safeguards before some reporting failures become felony exposure.",
    tone: "emerald",
    changed: [
      <>
        <ExternalLink href="https://www.cga.ct.gov/asp/CGABillStatus/cgabillstatus.asp?bill_num=SB509&selBillType=Bill">
          Connecticut SB 509
        </ExternalLink>{" "}
        became Public Act No. 26-96 after the governor&apos;s June 4 signature.
        The act keeps the registry framework in place, but changes the
        mechanics of address verification.
      </>,
      <>
        The act allows a registrant to provide proof of residency to DESPP by
        mail, fax, email, or in person between 75 and 90 days after initial
        registration. Acceptable proof can include a utility bill, financial
        statement, insurance bill, government correspondence, or another
        document DESPP deems sufficient.
      </>,
      <>
        If DESPP has not received proof, the department must mail a
        nonforwardable address-verification form to the person&apos;s last
        reported residence. The registrant must return it by mail, fax, email,
        or in person by a date 10 days after the postmark, and the form must
        include bold instructions listing the return methods and addresses.
      </>,
      <>
        The act also adds a limited buffer for certain failures to notify DESPP
        of a change of name, address, status, or another reportable event:
        felony exposure applies only if the failure continues for five business
        days. It also creates an affirmative defense when circumstances beyond
        the person&apos;s control prevented compliance, the person did not create
        those circumstances, and the person returned to compliance within 20
        business days after those circumstances ended.
      </>,
    ],
    matters: [
      "Address-verification systems can turn mail delays, housing instability, homelessness, disability, poverty, administrative confusion, or documentation barriers into felony exposure. A proactive proof pathway gives people a way to reduce that risk before a mailed form is missed, delayed, or impossible to return.",
      "For families, the reform may make compliance more predictable. A household can identify acceptable documents, submit proof through more than one channel, and keep records of submission rather than waiting for one piece of mail to arrive and be returned correctly.",
      "The reform is still narrow. Failure to return the form or provide proof can still trigger local police or state police notification and an arrest-warrant application, so implementation details will decide whether the reform prevents technical violations in practice.",
    ],
    analysis: [
      "SOLAR reads this as positive movement because it modestly reduces avoidable technical-violation risk in a system where process failure can become criminal punishment.",
      "The improvement does not create broad registry relief, shorten registration terms, or reduce public notification. Its value is practical: it recognizes that compliance systems must account for real life, including unstable housing, mail problems, and circumstances outside a person&apos;s control.",
    ],
    watch: [
      "DESPP guidance before the October 1, 2026 effective date.",
      "Which documents DESPP accepts under the catchall proof category.",
      "Whether email, fax, and in-person submissions generate confirmation receipts that registrants can keep.",
      "How unhoused registrants or people without stable mail delivery can verify residency.",
      "Whether the five-business-day buffer and affirmative defense are applied consistently by law enforcement and prosecutors.",
    ],
    chips: {
      movement: ["Positive movement"],
      impact: [
        "Compliance clarity",
        "Compliance burden",
        "Due-process concern",
        "Family-stability impact",
      ],
      risk: ["Implementation risk", "Clarification needed", "Watch closely"],
    },
    tags: [
      "state",
      "address verification",
      "technical violations",
      "agency implementation",
    ],
    sources: [
      {
        label: "Connecticut Legislature — SB 509",
        href: "https://www.cga.ct.gov/asp/CGABillStatus/cgabillstatus.asp?bill_num=SB509&selBillType=Bill",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Public Act No. 26-96",
        href: "https://www.cga.ct.gov/2026/ACT/PA/PDF/2026PA-00096-R00SB-00509-PA.PDF",
        kind: "official",
        type: "official public act PDF",
      },
    ],
    action: {
      title: "Ask Connecticut DESPP for clear address-verification guidance",
      why:
        "The new law can prevent technical violations only if registrants know what proof is accepted, how to confirm submission, and how the safeguards apply when compliance is delayed by circumstances beyond their control.",
      label: "View DESPP registry page",
      href: "https://portal.ct.gov/services/public-safety/sex-offender-registry",
      message:
        "Please publish plain-language guidance for Public Act 26-96 before October 1, 2026. Registrants and families need instructions on acceptable proof-of-residency documents, email and fax submission confirmations, in-person receipts, procedures for people without stable housing or mail delivery, and consistent application of the five-business-day and affirmative-defense protections.",
    },
  },

  {
    id: 3,
    group: "Employment and Collateral Consequences",
    title:
      "Illinois HB 5387 would make registry status a permanent massage-therapy licensing bar",
    jurisdiction: "Illinois",
    date: "Passed both houses June 1; sent to governor June 26, 2026",
    summary:
      "Illinois advanced a professional-licensing exclusion that would turn specified sex-related convictions and any-point registry status into a permanent bar to massage-therapy licensure.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.ilga.gov/legislation/BillStatus?DocNum=5387&DocTypeID=HB&GAID=18&LegID=167180&SessionID=114">
          Illinois HB 5387
        </ExternalLink>{" "}
        would require the Department of Financial and Professional Regulation
        to revoke, without a hearing, a massage-therapy license when the
        licensee is convicted of specified sex-related offenses, including any
        crime requiring compliance with the Sex Offender Registration Act.
      </>,
      "The bill also provides that those convictions operate as a permanent bar to practice. A person convicted of the covered offenses, or required at any point to register as a sex offender, could not receive, maintain, or restore a massage-therapy license in Illinois.",
      "The June window matters because the bill passed both houses on June 1 and was sent to the governor on June 26.",
    ],
    matters: [
      "This is not only a professional discipline bill. It converts registry status and certain convictions into a categorical occupational exclusion, removing individualized review from a livelihood path.",
      "Employment is one of the stabilizing supports that helps people maintain housing, treatment, transportation, family support, and compliance. A permanent licensing bar can extend punishment long after sentence completion and can affect spouses, children, and households that depend on lawful work.",
      "The phrase without a hearing is especially important. If implemented as written, the bill would treat the conviction or status category as dispositive, rather than allowing evidence about time since offense, rehabilitation, risk, work history, supervision history, or the facts of the particular case.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it newly worsens reentry and employment prospects by transforming registry history into a permanent professional barrier.",
      "Public safety is not strengthened by blocking stable work without individualized review. A better approach would preserve client protection while requiring due process, narrow tailoring, time-since-offense review, rehabilitation evidence, and case-specific findings.",
    ],
    watch: [
      "Governor action if HB 5387 remains pending at publication.",
      "IDFPR implementation if the bill is signed.",
      "Whether the no-hearing revocation provision generates due-process litigation.",
      "Whether similar categorical licensing exclusions spread to other occupations.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Employment barrier",
        "Reentry barrier",
        "Punishment expansion",
        "Due-process concern",
      ],
      risk: ["Advocacy opening", "Watch closely", "Implementation risk"],
    },
    tags: [
      "state",
      "employment",
      "licensing",
      "collateral consequences",
      "due process",
    ],
    sources: [
      {
        label: "Illinois General Assembly — HB 5387",
        href: "https://www.ilga.gov/legislation/BillStatus?DocNum=5387&DocTypeID=HB&GAID=18&LegID=167180&SessionID=114",
        kind: "official",
        type: "official bill page",
      },
      {
        label: "Illinois Governor contact",
        href: "https://gov.illinois.gov/contact-us/voice-an-opinion.html",
        kind: "official",
        type: "official governor contact form",
      },
    ],
    action: {
      title: "Oppose categorical lifetime occupational exclusion",
      why:
        "Illinois can protect clients without making registry status a permanent work ban. Individualized review and hearing rights matter for reentry, family stability, and constitutional fairness.",
      label: "Contact the Illinois Governor",
      href: "https://gov.illinois.gov/contact-us/voice-an-opinion.html",
      message:
        "Please oppose categorical lifetime occupational exclusions based only on registry status or a listed conviction. Any licensing restriction should include individualized review, notice and hearing rights, time-since-offense consideration, rehabilitation evidence, and narrow tailoring to the actual duties of the profession.",
    },
  },
  {
    id: 4,
    group: "Punishment Expansion / Registry-Status Enhancements",
    title:
      "South Carolina Act 189 adds registrant-specific punishment enhancements",
    jurisdiction: "South Carolina",
    date: "Act No. 189 entry June 2, 2026",
    summary:
      "South Carolina enacted higher penalties for sexual-exploitation-of-a-minor offenses and made registered status independently consequential for sentencing exposure.",
    tone: "rose",
    changed: [
      <>
        <ExternalLink href="https://www.scstatehouse.gov/sess126_2025-2026/bills/4804.htm">
          South Carolina H.4804
        </ExternalLink>{" "}
        became Act No. 189. The official legislative page lists the governor
        signing the bill on May 18 and the June 2 entries for effective date
        and Act No. 189.
      </>,
      "The act increases the minimum penalty for first-degree sexual exploitation of a minor to five years and adds an additional penalty for registered sex offenders who violate the statute. It also increases the minimum penalty for second-degree sexual exploitation of a minor to three years and adds an additional penalty for registered sex offenders.",
      "For third-degree sexual exploitation, the act creates image-count-based penalty ranges and provides a five-year minimum for a registered sex offender who violates the third-degree statute.",
    ],
    matters: [
      "This development does not directly change registration duties, but it makes registry status a punishment multiplier. A person already required to register faces higher mandatory exposure than a non-registrant charged under the same statute.",
      "That matters for families because increased incarceration exposure can destabilize housing, caregiving, employment, and financial survival. It also reinforces a broader policy pattern in which registry status becomes a legal lever for added punishment beyond the original sentence.",
      "The legal significance is not only the offense category. The deeper issue is the use of status as an enhancement, which can encourage future legislation to treat registration as a general penalty amplifier.",
    ],
    analysis: [
      "SOLAR reads this as negative movement because it newly worsens the position of people already on the registry by tying registered status to enhanced punishment exposure.",
      "The policy relies on status-based escalation rather than individualized risk assessment. That approach may satisfy punitive politics, but it does not answer whether the enhancement is evidence-based, proportionate, or necessary for prevention.",
    ],
    watch: [
      "Charging practices under Act 189.",
      "Whether registrant-specific enhancements are challenged in future cases.",
      "Whether later South Carolina bills use registry status as a broader penalty multiplier.",
      "How courts handle proportionality arguments when mandatory minimums are tied to registered status.",
    ],
    chips: {
      movement: ["Negative movement"],
      impact: [
        "Punishment expansion",
        "Family-stability impact",
        "Supervision burden",
        "Litigation risk",
      ],
      risk: ["Watch closely", "Enforcement risk"],
    },
    tags: [
      "state",
      "sentencing",
      "status enhancement",
      "punishment expansion",
    ],
    sources: [
      {
        label: "South Carolina Legislature — H.4804 / Act 189",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/4804.htm",
        kind: "official",
        type: "official legislative and enacted-law source",
      },
    ],
  },
  {
    id: 5,
    group: "Courts & Relief Pathways",
    title:
      "Indiana Supreme Court clarifies the evidence needed for SVP-status review",
    jurisdiction: "Indiana",
    date: "Decided June 23, 2026",
    summary:
      "Indiana’s high court affirmed denial of SVP-status removal while giving future petitioners a clearer roadmap for evidence focused on current risk and the statutory SVP standard.",
    tone: "indigo",
    changed: [
      <>
        In{" "}
        <ExternalLink href="https://public.courts.in.gov/Decisions/api/Document/Opinion?Id=IOsFdgRB4GR25TG4cRA2KkFcFr2GWqC8dV59cL8gbWVw7DRgZENn5ZBDC6r-lmIc0">
          Marty J. Wilson v. State of Indiana
        </ExternalLink>
        , the Indiana Supreme Court affirmed the denial of Wilson&apos;s
        petition to remove his sexually violent predator status and affirmed
        denial of his motion to correct error.
      </>,
      "The majority rejected Wilson’s ex post facto challenge as applied, reasoning that the availability of meaningful review matters to the constitutional analysis and that the trial court did not rely solely on the historical facts of Wilson’s decades-old offense.",
      "The practical clarification is that petitioners seeking SVP-status removal should build evidence around current risk and whether they continue to meet the qualifying mental-abnormality or personality-disorder standard. Long-term compliance, stable employment, marriage, or lack of new prosecution may help, but the decision suggests they may not be enough by themselves.",
    ],
    matters: [
      "SVP status is one of the most burdensome registry classifications. A formally available removal pathway matters, but a pathway that requires expert-driven proof can be difficult to use without money, legal support, treatment records, and access to qualified professionals.",
      "For registrants and families, the decision is a warning against assuming that years of stability alone will secure relief. The stronger petition will likely connect stability to current-risk evidence, treatment history, expert affidavits, and the statutory criteria for no longer qualifying as SVP.",
      "The case also shows the difference between relief on paper and relief in practice. Meaningful review can exist doctrinally while still being resource-intensive for the people most affected.",
    ],
    analysis: [
      "SOLAR reads this as mixed movement. The individual petitioner lost, and the court left the SVP framework intact; that is not rights-expanding relief in the immediate case.",
      "At the same time, the opinion gives future petitioners and legal-service partners a more concrete evidentiary roadmap. The reform opening is practical rather than sweeping: build petitions around present risk, treatment evidence, expert support, and the statutory standard.",
    ],
    watch: [
      "How Indiana trial courts apply the prima facie threshold after Wilson.",
      "Whether petitioners can access experts and hearings in practice.",
      "Whether future cases challenge denials where meaningful review exists in theory but is difficult to obtain.",
      "How legal-service partners use current-risk evidence, treatment records, and expert affidavits in future SVP-removal petitions.",
    ],
    chips: {
      movement: ["Mixed movement"],
      impact: [
        "Relief clarification",
        "Due-process concern",
        "Court limitation",
        "Compliance clarity",
      ],
      risk: ["Reform opening", "Litigation risk", "Clarification needed"],
    },
    tags: ["court", "SVP", "relief pathway", "due process"],
    sources: [
      {
        label: "Indiana Supreme Court opinion",
        href: "https://public.courts.in.gov/Decisions/api/Document/Opinion?Id=IOsFdgRB4GR25TG4cRA2KkFcFr2GWqC8dV59cL8gbWVw7DRgZENn5ZBDC6r-lmIc0",
        kind: "official",
        type: "official court opinion",
      },
    ],
  },
];

const watchlist: WatchItemData[] = [
  {
    title: "Louisiana Act 838 implementation",
    posture:
      "Enacted; the ID and special-identification provisions become effective January 1, 2027.",
    why:
      "The QR-code mechanism, ID-carry duty, and static-IP reporting language could either reduce visible stigma with clear safeguards or create new compliance traps if implemented without plain-language guidance.",
    next: [
      "Watch OMV and Louisiana State Police guidance on QR-code access and privacy.",
      "Look for instructions on static versus dynamic IP addresses, shared networks, mobile connections, VPNs, and ISP-controlled changes.",
      "Track whether enforcement guidance treats documentation problems differently from intentional noncompliance.",
    ],
  },
  {
    title: "Connecticut Public Act 26-96 implementation",
    posture:
      "Enacted; the address-verification reforms take effect October 1, 2026.",
    why:
      "The reform can reduce avoidable technical violations only if DESPP gives registrants clear instructions, reliable submission receipts, and workable procedures for people without stable housing or mail delivery.",
    next: [
      "Watch for DESPP guidance on accepted proof-of-residency documents.",
      "Look for confirmation procedures for email, fax, and in-person submissions.",
      "Track how the five-business-day buffer and affirmative defense are applied by law enforcement and prosecutors.",
    ],
  },
  {
    title: "Illinois HB 5387 governor action and implementation",
    posture:
      "Passed both houses and was sent to the governor on June 26 in the June handoff window.",
    why:
      "The bill would make registry status and specified convictions a permanent barrier to massage-therapy licensure, raising employment, reentry, and due-process concerns.",
    next: [
      "Confirm signature, veto, or amendatory veto status before publication.",
      "If enacted, watch IDFPR implementation and any litigation over revocation without a hearing.",
      "Watch whether similar categorical exclusions appear in other licensing fields.",
    ],
  },
  {
    title: "Indiana SVP-removal practice after Wilson",
    posture:
      "Denial affirmed; the court clarified what future meaningful-review petitions may need.",
    why:
      "SVP relief may be formally available but practically resource-intensive, especially if petitioners need expert evidence and treatment records to show current risk has changed.",
    next: [
      "Watch trial-court handling of expert requests and hearings.",
      "Track whether future petitions succeed with current-risk evidence, treatment history, and expert affidavits.",
      "Look for litigation where meaningful review is available in theory but difficult to access in practice.",
    ],
  },
];

const actionCenterItems = developments
  .filter((d) => d.action)
  .slice(0, 3)
  .map((d) => d.action!) as ActionLink[];

export default function LegislativeTrackerJune2026Update(): JSX.Element {
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
        title="Legislative Tracker — June 2026 Update | The SOLAR Project"
        description="June 2026 SOLAR Legislative Tracker update covering registry compliance, address verification, occupational licensing, punishment enhancements, and SVP-status review."
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
            <Badge>State / Courts / Implementation</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — June 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            June was a mixed but burden-heavy month: Louisiana and Connecticut
            showed how registry policy often turns on administrative details,
            while Illinois and South Carolina moved toward exclusion and
            enhanced punishment, and Indiana clarified the evidence needed for
            SVP-status review.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              This monthly update covers meaningful developments from June 1,
              2026 through June 30, 2026, including governor signatures,
              enacted-law status, sent-to-governor action, effective-date
              entries, and a state high-court opinion.
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
        <Section id="glance" eyebrow="At a Glance" title="What June moved">
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
              June shows how registry policy often expands through the ordinary
              machinery of compliance: IDs, address forms, deadlines, license
              rules, sentencing enhancements, and court-created proof burdens.
              The month includes two narrow process improvements, but it also
              shows how quickly registration status can become a barrier to
              work, a sentencing multiplier, or a resource-heavy relief fight.
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
              June was not a simple rollback month or a simple expansion month.
              Louisiana and Connecticut both show why the details of registry
              administration matter: a QR code, an ID-carry duty, a proof-of-
              residency document, an email submission option, or a five-business-
              day buffer can decide whether a person stays compliant or becomes
              exposed to new punishment. That is why{" "}
              <InternalLink to="/advocacy#position-statement">
                evidence-based registry reform
              </InternalLink>{" "}
              has to look beyond slogans and ask how the system operates in
              ordinary life.
            </p>
            <p>
              Connecticut&apos;s Public Act 26-96 is the clearest positive
              counterpoint this month because it recognizes that address
              verification can become a technical-violation trap. But the reform
              is narrow, and Louisiana&apos;s Act 838 illustrates the other side
              of implementation: stigma may be reduced in one place while new
              reporting duties and enforcement questions appear elsewhere.
              Families trying to navigate these systems need{" "}
              <InternalLink to="/resources">plain-language resources</InternalLink>{" "}
              as much as they need statutory text.
            </p>
            <p>
              Illinois and South Carolina show the more familiar punitive
              pattern: registry status becomes a gatekeeping category for work
              or a multiplier for punishment. Indiana adds a court-centered
              lesson: relief can exist on paper while still requiring expertise,
              records, and legal support to become real. SOLAR will keep
              tracking these patterns through the{" "}
              <InternalLink to="/resources/legislative-tracker">
                Legislative Tracker archive
              </InternalLink>
              .
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="June 2026 developments"
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
            These are the top implementation and advocacy paths from the June
            update. Each script is written for registrants, families, and allies
            who want clearer rules, due process, individualized review, and
            policy that supports real stability.
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
              official public-comment or contact portals. Reporting, advocacy
              explainers, and civic-data sources may be used as supplemental
              context, but they do not replace official sources when official
              sources are available.
            </p>
            <p>
              This June update includes developments with meaningful in-window
              events between June 1 and June 30, 2026, including governor
              signature, enacted-law status, sent-to-governor action,
              effective-date entry, and a court opinion. The tracker focuses on
              legal and policy developments that affect registration duties,
              reentry, employment, family stability, relief pathways, due
              process, supervision, punishment exposure, and evidence-based
              reform.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "5 June developments across Louisiana, Connecticut, Illinois, South Carolina, and Indiana.",
    "Mixed but burden-heavy month: narrow process improvements alongside exclusion and punishment expansion.",
    "Connecticut created a proactive address-verification pathway; Louisiana added major implementation questions.",
  ],
  highlights: [
    "Louisiana Act 838 replaces some visible ID labeling with a QR-code system while adding ID-carry and online-identifier risks.",
    "Connecticut Public Act 26-96 gives registrants more ways to prove residency and adds limited safeguards before some reporting failures become felony exposure.",
    "Illinois HB 5387 would turn registry status and specified convictions into a permanent massage-therapy licensing bar.",
    "South Carolina Act 189 uses registered status as a sentencing enhancer for covered sexual-exploitation offenses.",
    "Indiana’s Wilson decision affirms denial of SVP-status removal while clarifying the evidence future petitioners may need.",
  ],
};