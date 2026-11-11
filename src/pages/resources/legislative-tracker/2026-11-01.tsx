import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";

/**
 * LegislativeTrackerMonthlyGoldenTemplate_LOCKED.tsx
 *
 * This is the approved structural scaffold for all future monthly
 * Legislative Tracker pages. The template is not inspiration; it is
 * the required layout. Replace month-specific content/data only.
 *
 * Based on approved live preview:
 * src/pages/resources/legislative-tracker/2099-01-02.tsx
 */

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

const slug = "2026-11-01";
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

/**
 * Replace all dummy data below with the approved monthly handoff.
 */

const metrics: Metric[] = [{"label":"Key Developments","value":"22","body":"Twenty-two substantive October court, agency, legislative and enforcement events; proposals are distinguished from laws in force."},{"label":"Dominant Posture","value":"Mixed","body":"Narrow constitutional protections survived, while compliance obligations, relief exclusions and restrictive proposals persisted."},{"label":"Rights / Reform / Litigation Counterpoint","value":"6","body":"Selected court and agency actions show safeguards for speech, due process, sentencing and legal review alongside adverse precedent."},{"label":"Action Paths","value":"4","body":"Current opportunities include California oversight, Maryland sentencing testimony, Fresno housing policy and Oklahoma reform planning."}];

const developments: Development[] = [
  {
    id: 1, group: "Courts & Constitutional Rights", title: "Eighth Circuit rejects broad challenge to Missouri’s registration system", jurisdiction: "Missouri / Eighth Circuit", date: "October 5, 2026",
    summary: "A major challenge to Missouri’s registry failed, including claims about punishment, individualized risk, online identifiers and family impacts.", tone: "rose",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca8/25-1892/25-1892-2026-10-05.html">Does v. Flannigan</ExternalLink>{" — " + "The Eighth Circuit affirmed rejection of Eighth Amendment, ex post facto, due-process, equal-protection and online-identifier vagueness arguments. Missouri uses conviction-based tiers with 15-year, 25-year and lifetime terms and differing verification frequencies, without individualized risk assessment for tier assignment."}</>,
      "The district court had separately found an unconstitutional prior restraint in the instruction to register an online identifier before using it; authorities changed the form. The appeals court did not require the legislature to eliminate all identifier reporting."
    ],
    matters: ["Registrants remain subject to a system that can demand repeated in-person reporting and long-term public exposure. The court also refused to give the experiences of spouses and children independent weight in the constitutional analysis.","That distinction matters: the practical cost to a household may be severe even when the court treats the legal duty as directed only at the registrant."],
    analysis: ["This is an adverse litigation outcome, not a newly enacted restriction. SOLAR’s concern is the gap between judicial review focused on formal statutory categories and the cumulative effects families actually experience.","The narrower First Amendment correction shows that specific, well-supported challenges can succeed even when an attack on an entire statutory scheme does not."],
    watch: ["Rehearing or certiorari efforts, if any.","Whether subsequent cases better document individualized burdens and family harms."],
    chips: {"movement":["Negative movement"],"impact":["Rights concern","Family-stability impact"],"risk":["Litigation risk"]},
    tags: ["rights concern","family-stability impact"],
    sources: [
      { label: "Eighth Circuit opinion (mirror)", href: "https://law.justia.com/cases/federal/appellate-courts/ca8/25-1892/25-1892-2026-10-05.html", kind: "supplemental", type: "searchable appellate opinion mirror" }
    ],
    
  },
  {
    id: 2, group: "Courts & Constitutional Rights", title: "Georgia restores a path to argue ongoing registration obligations", jurisdiction: "Georgia Supreme Court", date: "October 14, 2026",
    summary: "A registry challenger can continue fighting for declaratory relief, although the court did not decide whether he qualifies for removal.", tone: "emerald",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/georgia/supreme-court/2026/s25g1209.html">Gardei v. Taylor</ExternalLink>{" — " + "Georgia’s Supreme Court vacated an appellate judgment treating the request for prospective declaratory relief as an improper advisory opinion. The plaintiff contests obligations tied to out-of-state convictions and argues that continued registration is not required under Georgia law."}</>,
      "The case returns for consideration of whether an existing statutory removal process makes the declaratory action moot. No registration termination was ordered."
    ],
    matters: ["People who cross state lines can encounter conflicting determinations about whether a conviction triggers registration. A viable court process matters when reporting obligations continue despite a serious legal dispute.","For families, the difference between a procedural dismissal and merits review can determine whether housing, travel and employment plans remain subject to a potentially mistaken obligation."],
    analysis: ["SOLAR reads the remand as a procedural opening, not a complete victory. A registrant must still prove the underlying obligation is invalid before meaningful relief follows.","The ruling also demonstrates why access to a judicial remedy should not disappear merely because an agency or another statutory process exists."],
    watch: ["Court of Appeals review of mootness on remand.","Whether the trial court ultimately addresses the registration merits."],
    chips: {"movement":["Positive movement"],"impact":["Due-process concern","Relief expansion"],"risk":["Watch closely"]},
    tags: ["due-process concern","relief expansion"],
    sources: [
      { label: "Georgia Supreme Court opinion (mirror)", href: "https://law.justia.com/cases/georgia/supreme-court/2026/s25g1209.html", kind: "supplemental", type: "searchable court opinion" }
    ],
    
  },
  {
    id: 3, group: "Courts & Constitutional Rights", title: "Supreme Court leaves Halloween-sign speech victory intact", jurisdiction: "Missouri / U.S. Supreme Court", date: "October 19, 2026",
    summary: "The Court declined to review an injunction against compelled Halloween signage at registrants’ homes.", tone: "emerald",
    changed: [
      <><ExternalLink href="https://www.supremecourt.gov/search.aspx?filename=%2Fdocket%2Fdocketfiles%2Fhtml%2Fpublic%2F26-34.html">Hanaway v. Sanderson</ExternalLink>{" — " + "The Supreme Court denied Missouri’s petition seeking review of an Eighth Circuit ruling against a law requiring certain registrants to post a notice saying that no candy or treats were available at their residence on Halloween."}</>,
      "The denial leaves the underlying First Amendment decision in effect without creating a new nationwide Supreme Court precedent. One justice favored granting review."
    ],
    matters: ["A government-directed sign at the front door does more than communicate an instruction: it compels a person and household to carry the state’s message in a stigmatizing setting.","The lower-court victory thus matters to both free speech and the way policy reaches family members and homes."],
    analysis: ["This is a concrete rights-protective result against compelled speech, not proof that all Halloween restrictions are unconstitutional. SOLAR distinguishes speech coercion from ordinary, individually justified supervision.","The contrast with other October registry decisions is instructive: courts may reject broad claims while enforcing a narrower constitutional boundary."],
    watch: ["Missouri’s implementation of the injunction.","Challenges to comparable compelled-sign laws in other jurisdictions."],
    chips: {"movement":["Positive movement"],"impact":["Rights concern","Family-stability impact"],"risk":["Reform opening"]},
    tags: ["rights concern","family-stability impact"],
    sources: [
      { label: "Supreme Court docket", href: "https://www.supremecourt.gov/search.aspx?filename=%2Fdocket%2Fdocketfiles%2Fhtml%2Fpublic%2F26-34.html", kind: "official", type: "government or court source" },
      { label: "Underlying federal injunction", href: "https://www.govinfo.gov/app/details/USCOURTS-moed-4_23-cv-01242/USCOURTS-moed-4_23-cv-01242-3", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 4, group: "Courts & Constitutional Rights", title: "DOJ abandons appeal of California SORNA due-process injunction", jurisdiction: "Federal / California", date: "October 2, 2026",
    summary: "Federal authorities must account for whether California will actually accept the registration information they would prosecute someone for failing to supply.", tone: "emerald",
    changed: [
      <><ExternalLink href="https://www.justice.gov/oip/media/1465676/dl?inline=">DOJ Solicitor General notification</ExternalLink>{" — " + "DOJ notified Congress it would not appeal an injunction limiting certain federal SORNA prosecutions when California neither requires the person to register nor permits submission of the particular information at issue."}</>,
      "The injunction requires federal prosecutors in the covered circumstances to verify the California duty and ability to comply before pursuing a registration charge. The government disputed the district court’s reasoning and reserved arguments in other cases."
    ],
    matters: ["Someone cannot reliably comply with two systems when one demands what the other will not receive. Such a contradiction creates exposure to federal prosecution without a workable compliance path.","The injunction offers a safeguard against that impossible-choice problem, particularly for people transitioning across state and federal rules."],
    analysis: ["SOLAR sees this as positive due-process movement because criminal liability should require a real, knowable ability to perform the mandated act.","The order is California-specific; it should not be presented as a blanket exemption from federal SORNA everywhere."],
    watch: ["Whether DOJ tests the issue in a different jurisdiction.","How federal and California authorities document eligibility and accepted submissions."],
    chips: {"movement":["Positive movement"],"impact":["Due-process concern","Compliance clarity"],"risk":["Watch closely"]},
    tags: ["due-process concern","compliance clarity"],
    sources: [
      { label: "DOJ October 2 letter", href: "https://www.justice.gov/oip/media/1465676/dl?inline=", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 5, group: "Registration & Sentencing Changes", title: "Connecticut shifts quarterly residence verification onto registrants", jurisdiction: "Connecticut", date: "October 1, 2026",
    summary: "A new recurring documentary obligation increases the compliance workload, while an affirmative defense acknowledges unavoidable delays.", tone: "amber",
    changed: [
      <><ExternalLink href="https://www.cga.ct.gov/2026/act/pa/pdf/2026PA-00096-R00SB-00509-PA.pdf">Public Act 26-96 / SB 509</ExternalLink>{" — " + "Connecticut now generally requires registrants to initiate residence verification every 90 days, providing proof within days 75–90 rather than merely responding to a mailed verification form. Examples include current utility, financial, insurance or government correspondence."}</>,
      "The same act establishes an affirmative defense when circumstances beyond the person’s control prevented compliance, were not self-created and were cured within 20 business days after the impediment ended. It also changes classification of certain third-degree sexual-assault conduct."
    ],
    matters: ["Bills, mail delivery, unstable housing and caregiving interruptions can turn a calendar obligation into a criminal risk. Shifting responsibility to the registrant makes clear notice and reasonable document access essential.","The affirmative defense offers an important backstop, but it does not remove the stress or expense of documenting every unavoidable obstacle."],
    analysis: ["SOLAR classifies this as mixed: a heavier routine burden paired with a meaningful legal acknowledgment that some failures are genuinely outside a person’s control.","Implementation should be judged by whether people can realistically comply, not solely by whether their paperwork arrives on time."],
    watch: ["State police guidance on acceptable proof and notice.","Court interpretations of the 20-business-day defense."],
    chips: {"movement":["Mixed movement"],"impact":["Compliance burden","Compliance clarity","Due-process concern"],"risk":["Implementation risk"]},
    tags: ["compliance burden","compliance clarity"],
    sources: [
      { label: "Connecticut public act", href: "https://www.cga.ct.gov/2026/act/pa/pdf/2026PA-00096-R00SB-00509-PA.pdf", kind: "official", type: "government or court source" },
      { label: "Legislative analysis", href: "https://www.cga.ct.gov/2026/sum/pdf/2026SUM00096-R02SB-00509-SUM.pdf", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 6, group: "Registration & Sentencing Changes", title: "Maryland connects a new burglary-related offense to registration tiers", jurisdiction: "Maryland", date: "October 1, 2026",
    summary: "A newly defined third-degree sexual offense carries explicit tier consequences based on the victim’s age.", tone: "rose",
    changed: [
      <><ExternalLink href="https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/sb0230?ys=2026RS">SB 230 (Chapter 499)</ExternalLink>{" — " + "Maryland classified nonconsensual sexual contact connected to first-, second- or third-degree burglary as third-degree sexual offense conduct and expressly assigned registration tiers: Tier I for adult victims, Tier II when the victim is a minor at least 13 and Tier III when the victim is younger than 13."}</>,
      "The provision applies prospectively to qualifying conduct beginning October 1. The related HB 138 was cross-filed but SB 230 became the enacted law."
    ],
    matters: ["Offense definitions can affect years or a lifetime of reporting and public notification even when a bill’s headline is about substantive criminal law rather than registration.","Defendants, counsel and families need to understand the collateral registry consequences during charging, plea negotiations and sentencing."],
    analysis: ["This is negative prospective movement for the affected future convictions because a newly specified offense trigger carries significant registration consequences.","SOLAR’s concern is accuracy and proportionality in assigning those consequences, not minimizing the underlying offense."],
    watch: ["Implementation of the age-based tier classification.","Future amendments or litigation about interpretation."],
    chips: {"movement":["Negative movement"],"impact":["Punishment expansion","Compliance burden"],"risk":["Watch closely"]},
    tags: ["punishment expansion","compliance burden"],
    sources: [
      { label: "Enacted SB 230", href: "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/sb0230?ys=2026RS", kind: "official", type: "government or court source" },
      { label: "Cross-filed HB 138", href: "https://mgaleg.maryland.gov/mgawebsite/Legislation/Details/HB0138?ys=2026RS", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 7, group: "Agency Rulemaking", title: "Iowa proposes replacement registry administration rules", jurisdiction: "Iowa", date: "October 14, 2026",
    summary: "A proposed administrative replacement details verification, identifiers, notification and removal mechanics; no final rule was enacted in October.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://rules.iowa.gov/Notice/Details/0644D">Iowa ARC 0644D</ExternalLink>{" — " + "The Department of Public Safety proposed replacing Chapter 83 under the state’s administrative review. The notice covers forms, school and employment registration, periodic in-person reporting, information sharing, public website publication and records removal when a qualifying conviction is reversed or a term ends."}</>,
      "The proposed notification provision specifies that not receiving the initial form does not eliminate the duty to register. It also incorporates changes associated with Iowa SF 2379; not every provision represents new policy."
    ],
    matters: ["Compliance is most precarious where an agency’s forms and statutory duties are difficult to reconcile. Clear instructions and accessible record-removal procedures can reduce needless violations.","The rule also matters to people moving away from Iowa who may still have employment, educational or other connections there."],
    analysis: ["Movement remains unclear until final adoption and implementation. SOLAR would measure the final rules by notice, practical ability to report and dependable removal of obsolete records.","The November 4 comment deadline has passed; claiming a continuing public-comment window would mislead readers."],
    watch: ["Publication of final Chapter 83 text.","Changes from the proposal and actual registration-form guidance."],
    chips: {"movement":["Unclear movement"],"impact":["Agency implementation","Compliance clarity","Public notification"],"risk":["Implementation risk"]},
    tags: ["agency implementation","compliance clarity"],
    sources: [
      { label: "Iowa registry rulemaking notice", href: "https://rules.iowa.gov/Notice/Details/0644D", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 8, group: "Agency Rulemaking", title: "Iowa proposes updated rules governing sex-offense supervision", jurisdiction: "Iowa", date: "October 14, 2026",
    summary: "A separate regulatory notice addresses electronic monitoring, treatment and risk-based supervision decisions.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://rules.iowa.gov/Notice/Details/0660D">Iowa ARC 0660D</ExternalLink>{" — " + "Iowa’s Department of Corrections proposed replacing Chapter 38, including provisions about location monitoring, risk-based adjustments, victim notification and court- or parole-board-ordered intervention for specified offenses."}</>,
      "The department characterized much of the proposal as removing duplicative statutory language or outdated provisions rather than newly creating broad monitoring powers. Public comment and hearing opportunities closed in early November."
    ],
    matters: ["Electronic monitoring affects transportation, employment schedules, household privacy and the cost of ordinary daily life. Whether discretion is exercised individually matters more than the administrative label placed on the rewrite.","Families need assurance that monitoring decisions respond to actual circumstances instead of permanent presumptions about a conviction."],
    analysis: ["SOLAR treats this as neutral or uncertain legal movement pending final text. A rewrite can improve clarity while preserving extensive surveillance authority.","Meaningful scrutiny requires comparing the adopted language to existing law and actual departmental practice."],
    watch: ["Final adopted Chapter 38 language.","How supervisors document risk-based monitoring changes."],
    chips: {"movement":["Unclear movement"],"impact":["Supervision burden","Agency implementation"],"risk":["Clarification needed"]},
    tags: ["supervision burden","agency implementation"],
    sources: [
      { label: "Iowa supervision rulemaking notice", href: "https://rules.iowa.gov/Notice/Details/0660D", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 9, group: "Legislative & Local Action", title: "Oklahoma Senate studies potential registry reform", jurisdiction: "Oklahoma", date: "October 6, 2026",
    summary: "A formal interim study creates an opening to evaluate duration, disability, age and proportionality without yet changing the statute.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://oksenate.gov/publications/senate-interim-studies/review-sex-offender-act-registry">Oklahoma Senate registry interim study</ExternalLink>{" — " + "Lawmakers convened an interim Judiciary study of Oklahoma’s sex-offense registry framework and reform possibilities. Discussion included people who are elderly or medically impaired and for whom continued requirements may be difficult or of limited public-safety value."}</>,
      "A study is not a passed bill. Any changes to eligibility, duration, reporting or exemptions require legislative action in a later session."
    ],
    matters: ["A meaningful relief system must be able to ask whether long-standing obligations still serve a purpose for people with substantially changed circumstances.","Family caregivers often shoulder transport, paperwork and financial burdens when disability or illness makes in-person compliance difficult."],
    analysis: ["SOLAR sees a promising advocacy opening, while legal movement remains neutral. Reform is meaningful only if a later bill translates individual circumstances into an accessible, workable procedure.","Evidence on risk, aging, family stability and administrative cost should be introduced before the policy is drafted."],
    watch: ["2027 bills arising from the committee study.","Whether proposals include individualized relief and due-process safeguards."],
    chips: {"movement":["Neutral movement"],"impact":["Relief expansion","Transparency opportunity"],"risk":["Advocacy opening"]},
    tags: ["relief expansion","transparency opportunity"],
    sources: [
      { label: "Official Oklahoma Senate study", href: "https://oksenate.gov/publications/senate-interim-studies/review-sex-offender-act-registry", kind: "official", type: "government or court source" }
    ],
    action: {"title":"Oklahoma: follow up on the registry reform study","why":"The study creates a legislative opening before 2027 bill text is settled.","label":"Find Oklahoma senators","href":"https://oksenate.gov/senators","message":"Please use the October registry study to consider individualized relief for elderly or medically impaired people, transparent standards and clear compliance exceptions. Reform should be grounded in risk evidence and family stability."},
  },
  {
    id: 10, group: "Legislative & Local Action", title: "Fresno advances a proposed licensing scheme for registrant housing providers", jurisdiction: "Fresno, California", date: "October 22, 2026",
    summary: "Council approved a study and ordinance-drafting resolution—not the underlying housing restrictions.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://fresno.legistar.com/LegislationDetail.aspx?GUID=92A15D09-1A7B-4A60-BF42-B0CE31413FAB&ID=8290054">Fresno SHIELD Act initiation resolution</ExternalLink>{" — " + "The Fresno City Council adopted Resolution 2026-254 directing staff to explore licensing, inspection, fees and location restrictions for commercial and nonprofit operators housing people required to register. Contemplated features include limits on the number of operators per council district and restrictions near schools and parks."}</>,
      "The October action ordered feasibility studies and potential drafting. It did not itself require housing providers to obtain the proposed license or impose a final zoning restriction."
    ],
    matters: ["Concentrating or limiting lawful housing options can push people into homelessness, lengthen commutes and jeopardize approved residence arrangements.","Nonprofit operators and families may be forced to absorb new compliance costs or lose an already scarce housing option."],
    analysis: ["The policy direction threatens reentry stability, but the operative legal movement remains neutral until an ordinance is adopted. This distinction matters for accurate public guidance.","SOLAR urges the city to study actual housing displacement and prevention evidence, rather than assuming fewer placements are safer."],
    watch: ["Release of the drafted ordinance and fee study.","Council hearing and public-comment opportunities; state-law preemption questions."],
    chips: {"movement":["Neutral movement"],"impact":["Housing barrier","Reentry barrier"],"risk":["Advocacy opening","Watch closely"]},
    tags: ["housing barrier","reentry barrier"],
    sources: [
      { label: "Fresno council legislative record", href: "https://fresno.legistar.com/LegislationDetail.aspx?GUID=92A15D09-1A7B-4A60-BF42-B0CE31413FAB&ID=8290054", kind: "official", type: "government or court source" },
      { label: "October 22 meeting record", href: "https://agendas.fresno.gov/en/meetings/cmrth3dfv00lvpezf9j91dsko", kind: "official", type: "government or court source" }
    ],
    action: {"title":"Fresno: challenge restrictions before ordinance adoption","why":"The city is preparing a housing-operator proposal; there is still an opportunity to demand evidence and assess displacement.","label":"View Fresno council calendar","href":"https://fresno.legistar.com/Calendar.aspx","message":"Please assess how any proposed licensing cap or proximity restriction would affect available housing, homelessness, employment and families. Require evidence, transparent maps, individualized exceptions and public input before adopting an ordinance."},
  },
  {
    id: 11, group: "Courts, Sentencing & Compliance", title: "Maryland separates registry reporting from criminal-justice involvement in guidelines", jurisdiction: "Maryland", date: "October 1 and 13, 2026",
    summary: "Sentencing guidance makes clear that registration reporting by itself does not count as active criminal-justice involvement.", tone: "emerald",
    changed: [
      <><ExternalLink href="https://msccsp.org/news/">Maryland Sentencing Guidelines Manual v18.0</ExternalLink>{" — " + "Maryland’s voluntary guidelines clarify that continuing sex-offense registration reporting, standing alone, is not treated as criminal-justice-system involvement in calculating the offender score."}</>,
      "The clarification affects sentencing-guideline calculations in a later case; it does not alter the underlying registration requirement or create a removal pathway."
    ],
    matters: ["Reporting to police can continue for years after imprisonment and probation end. Equating that administrative duty with active criminal supervision would misstate a person’s criminal-justice status.","Accurate distinctions help prevent registration from generating additional collateral sentencing disadvantage in unrelated future proceedings."],
    analysis: ["SOLAR views this as a narrow but important clarification. It recognizes that compliance with a state reporting duty should not itself imply new misconduct or heightened supervision.","The broader lesson is that officials should distinguish registry bureaucracy from evidence of present risk or culpability."],
    watch: ["Commission implementation and related guidance.","The November 30 public hearing on sentencing policy."],
    chips: {"movement":["Positive movement"],"impact":["Compliance clarity","Rights concern"],"risk":["Reform opening"]},
    tags: ["compliance clarity","rights concern"],
    sources: [
      { label: "Maryland Sentencing Commission news", href: "https://msccsp.org/news/", kind: "official", type: "government or court source" },
      { label: "Public hearing notice", href: "https://www.msccsp.org/Files/Meetings/2026_Public_Hearing_PressRelease.pdf", kind: "official", type: "government or court source" }
    ],
    action: {"title":"Maryland: testify on fair sentencing treatment","why":"The commission's November 30 hearing allows evidence on the distinction between registration compliance and active criminal-justice involvement.","label":"Read hearing and testimony instructions","href":"https://www.msccsp.org/Files/Meetings/2026_Public_Hearing_PressRelease.pdf","message":"Please continue to distinguish routine registration reporting from active criminal supervision in sentencing policy. Collateral duties should not be interpreted as proof of current risk or criminal conduct."},
  },
  {
    id: 12, group: "Courts, Sentencing & Compliance", title: "Maryland Supreme Court rejects ordinary forgetfulness as a registration defense", jurisdiction: "Maryland Supreme Court", date: "October 26, 2026",
    summary: "Prior notice and a missed requirement can establish the knowledge element even where someone simply forgot the reporting deadline.", tone: "rose",
    changed: [
      <><ExternalLink href="https://www.mdcourts.gov/data/opinions/coa/2026/5a26.pdf">Hammond v. State</ExternalLink>{" — " + "The Maryland Supreme Court held that notice of a registration obligation followed by failure to comply generally satisfies the statute’s knowledge requirement. Mere forgetfulness is not a complete defense to a knowing failure to register."}</>,
      "The court discussed more limited circumstances that may defeat liability, including lack of notice, impossibility or a medically supported cognitive condition that actually prevents awareness of the duty."
    ],
    matters: ["When legal duties are recurring and technical, ordinary mistakes can lead to a new criminal prosecution. A single missed deadline may carry consequences far beyond the underlying administrative lapse.","This creates pressure on families to act as unofficial compliance systems, especially during illness, instability or disrupted communication."],
    analysis: ["The judgment is adverse for the individual and underscores exposure to technical violations rather than intentional danger to the public.","SOLAR would favor timely reminders, clear notice, cure periods and appropriate defenses that protect compliance without turning a memory error into disproportionate punishment."],
    watch: ["Application of impossibility and cognitive-impairment defenses.","Whether legislators add clearer notice and cure protections."],
    chips: {"movement":["Negative movement"],"impact":["Compliance burden","Due-process concern"],"risk":["Reform opening"]},
    tags: ["compliance burden","due-process concern"],
    sources: [
      { label: "Official Maryland Supreme Court opinion", href: "https://www.mdcourts.gov/data/opinions/coa/2026/5a26.pdf", kind: "official", type: "government or court source" },
      { label: "Searchable opinion mirror", href: "https://law.justia.com/cases/maryland/court-of-appeals/2026/526.html", kind: "supplemental", type: "court opinion mirror" }
    ],
    
  },
  {
    id: 13, group: "Courts, Sentencing & Compliance", title: "Third Circuit upholds a lifetime federal SORNA tier classification", jurisdiction: "Federal / Third Circuit", date: "October 6, 2026",
    summary: "A state conviction was compared with federal offense definitions to assign Tier III, even though the challenge remained reviewable after the sentence ended.", tone: "amber",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca3/25-2502/25-2502-2026-10-06.html">United States v. Summers</ExternalLink>{" — " + "The Third Circuit applied a hybrid categorical approach to a prior New York conviction in evaluating federal SORNA tier placement. It upheld a Tier III classification, associated with lifetime federal registration and more frequent verification."}</>,
      "It also recognized the tier dispute remained live after completion of the criminal sentence because registration continued to impose real obligations, and remanded for the limited step of formally recording the tier."
    ],
    matters: ["People with older or out-of-state convictions may face different duration and verification rules depending on how courts compare statutory elements.","That can affect employment schedules, interstate moves and whether a person expects an end date at all."],
    analysis: ["The outcome is mixed: the individual did not obtain a lower tier, but the court acknowledged a continuing registration consequence is substantial enough for review.","SOLAR favors transparent, reviewable tier determinations rather than unexplained lifetime obligations."],
    watch: ["Use of the tier-comparison approach in future cases.","Disputes over materially different state offense statutes."],
    chips: {"movement":["Mixed movement"],"impact":["Compliance burden","Rights concern"],"risk":["Watch closely"]},
    tags: ["compliance burden","rights concern"],
    sources: [
      { label: "Third Circuit opinion (mirror)", href: "https://law.justia.com/cases/federal/appellate-courts/ca3/25-2502/25-2502-2026-10-06.html", kind: "supplemental", type: "court opinion mirror" }
    ],
    
  },
  {
    id: 14, group: "Courts, Sentencing & Compliance", title: "Michigan appeals court leaves lifetime registration in place in youthful-offense case", jurisdiction: "Michigan", date: "October 16, 2026",
    summary: "A remand following intervening state precedent did not produce registry removal for the person challenging lifetime status.", tone: "rose",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/michigan/court-of-appeals-unpublished/2026/331903.html">People v. Malone</ExternalLink>{" — " + "On remand from the Michigan Supreme Court, the Court of Appeals reconsidered facial and as-applied challenges to lifetime registration in light of precedent recognizing the state registry’s punitive nature."}</>,
      "The panel still affirmed denial of the defendant’s request for removal. The unpublished decision is fact-specific and does not determine every youthful registrant’s situation."
    ],
    matters: ["An offense committed at a young age can leave a person navigating decades of housing, employment, public notification and family consequences.","Recognition that a registry is punishment does not automatically produce proportionality-based relief in every case."],
    analysis: ["The decision shows a limit of broader constitutional victories when applied to individual relief petitions.","SOLAR believes review should remain responsive to age at conduct, intervening rehabilitation and the real function of ongoing restrictions."],
    watch: ["Further appeal, if pursued.","Subsequent Michigan rulings applying the punitive-registry precedent."],
    chips: {"movement":["Negative movement"],"impact":["Relief exclusion","Rights concern"],"risk":["Litigation risk"]},
    tags: ["relief exclusion","rights concern"],
    sources: [
      { label: "Michigan appellate opinion (mirror)", href: "https://law.justia.com/cases/michigan/court-of-appeals-unpublished/2026/331903.html", kind: "supplemental", type: "unpublished opinion" }
    ],
    
  },
  {
    id: 15, group: "Federal Courts & Enforcement", title: "U.S. Marshals publicize nationwide Halloween compliance operation", jurisdiction: "Federal / Multistate", date: "October 30, 2026",
    summary: "Federal authorities reported thousands of compliance checks, but the arrest figures should not be confused with new sexual offenses.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://prod.usmarshals.gov/news/press-release/us-marshals-arrest-non-compliant-sex-offenders-during-operation-trick-or-treat-4">Operation Trick or Treat 4</ExternalLink>{" — " + "The U.S. Marshals Service reported 4,183 checks in 77 counties across 27 states, identified 316 people as noncompliant and reported 197 arrests. Of those arrests, 114 were described as registration violations, 57 as other offenses by registrants and 26 as unrelated arrests of other people."}</>,
      "The reported figures are enforcement outputs, not measurements of whether Halloween restrictions prevented sexual victimization."
    ],
    matters: ["Compliance sweeps can generate arrests for administrative lapses, increasing stress around home visits and scheduled activities. Families also need accurate public descriptions of what these operations actually found.","Aggregating unlike arrest categories can exaggerate what a registry operation demonstrates about risk."],
    analysis: ["The month’s enforcement story should be evaluated against prevention outcomes, costs and offense-specific evidence—not the theatrical timing of a holiday operation.","SOLAR calls for separating technical violations from new victimization and for public reporting that allows meaningful accountability."],
    watch: ["Whether detailed outcome or cost reports are released.","Whether agencies identify actual prevention results, not just number of contacts."],
    chips: {"movement":["Neutral movement"],"impact":["Transparency opportunity","Compliance burden"],"risk":["Oversight pressure"]},
    tags: ["transparency opportunity","compliance burden"],
    sources: [
      { label: "U.S. Marshals official announcement", href: "https://prod.usmarshals.gov/news/press-release/us-marshals-arrest-non-compliant-sex-offenders-during-operation-trick-or-treat-4", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 16, group: "Federal Courts & Enforcement", title: "Sixth Circuit weighs registration status in a firearm-rights challenge", jurisdiction: "Federal / Sixth Circuit", date: "October 16, 2026",
    summary: "A separate constitutional case shows how registry status can enter decisions about rights beyond registration.", tone: "rose",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca6/25-3961/25-3961-2026-10-16.html">United States v. Bloomfield</ExternalLink>{" — " + "The Sixth Circuit rejected an as-applied Second Amendment challenge to the federal felon-in-possession prohibition, considering the defendant’s underlying conduct, record and continuing sex-offense registration status."}</>,
      "The court did not rule that registration alone establishes dangerousness or create a firearm prohibition applicable to all registrants."
    ],
    matters: ["A registration label may follow a person into legal contexts far removed from the reporting system and influence how courts characterize risk.","Fair individualized assessment requires separating an actual record of conduct from assumptions attached to a registry classification."],
    analysis: ["SOLAR is concerned about registry status becoming a stand-in for dangerousness in collateral-rights litigation.","The ruling is case-specific and should not be flattened into a categorical claim about every registrant’s rights."],
    watch: ["Whether later courts treat registration as independent evidence of dangerousness.","How subsequent individualized challenges frame underlying facts."],
    chips: {"movement":["Negative movement"],"impact":["Rights concern","Reentry barrier"],"risk":["Litigation risk"]},
    tags: ["rights concern","reentry barrier"],
    sources: [
      { label: "Sixth Circuit opinion (mirror)", href: "https://law.justia.com/cases/federal/appellate-courts/ca6/25-3961/25-3961-2026-10-16.html", kind: "supplemental", type: "unpublished court opinion" }
    ],
    
  },
  {
    id: 17, group: "Federal Courts & Enforcement", title: "Eleventh Circuit rejects a SORNA tier challenge on preservation grounds", jurisdiction: "Federal / Eleventh Circuit", date: "October 29, 2026",
    summary: "The court upheld a lengthy failure-to-register sentence without resolving every underlying tier-comparison question.", tone: "rose",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca11/25-13945/25-13945-2026-10-29.html">United States v. Durdley</ExternalLink>{" — " + "The Eleventh Circuit affirmed a 72-month failure-to-register sentence plus related revocation sentences. The advisory guideline range for the new offense was substantially lower, 21–27 months."}</>,
      "The panel held that defense positions and counsel’s statements had invited any claimed error in the Tier II classification. It did not issue a general merits ruling about all convictions involving receipt or distribution."
    ],
    matters: ["Tier classification affects sentencing exposure and ongoing federal duties. A classification argument that is lost through litigation posture can be difficult to revive later.","This illustrates how technical rules about preserving an issue can determine whether someone receives appellate review."],
    analysis: ["SOLAR sees an adverse case-specific outcome and a strong reminder that accurate tier classification should be clearly resolved at the earliest stage.","The opinion should not be cited as a broad merits holding on every receipt-versus-distribution conviction."],
    watch: ["Future tier litigation with the classification issue properly preserved.","Use of invited-error doctrine in SORNA appeals."],
    chips: {"movement":["Negative movement"],"impact":["Compliance burden","Due-process concern"],"risk":["Litigation risk"]},
    tags: ["compliance burden","due-process concern"],
    sources: [
      { label: "Eleventh Circuit opinion (mirror)", href: "https://law.justia.com/cases/federal/appellate-courts/ca11/25-13945/25-13945-2026-10-29.html", kind: "supplemental", type: "unpublished court opinion" }
    ],
    
  },
  {
    id: 18, group: "Federal Courts & Enforcement", title: "Fourth Circuit vacates statutory-maximum registration sentence for inadequate reasons", jurisdiction: "Federal / Fourth Circuit", date: "October 1, 2026",
    summary: "A 120-month failure-to-register sentence was vacated because the lower court insufficiently explained its departure from the guideline range.", tone: "emerald",
    changed: [
      <><ExternalLink href="https://law.justia.com/cases/federal/appellate-courts/ca4/25-4091/25-4091-2026-10-01.html">United States v. Bixler</ExternalLink>{" — " + "The Fourth Circuit ordered resentencing after a district court imposed 120 months for failure to register against an advisory guideline range of 15–21 months without adequately confronting substantial mitigation arguments."}</>,
      "The unpublished appellate decision does not require a guideline sentence or rule out a major upward variance after a sufficient explanation."
    ],
    matters: ["Even when a court believes a severe sentence is justified, the defendant deserves a reasoned answer to arguments about personal history and proportionality.","Registration offenses can attract extraordinary punishment; transparent sentencing explanation is a minimal safeguard against arbitrary disparities."],
    analysis: ["SOLAR reads this as a procedural rights gain, not as approval of the conduct or a promised sentence reduction.","The ruling insists that judges explain why an extreme variance is warranted on an individualized record."],
    watch: ["The result on resentencing.","Further appellate treatment of large variances in registration prosecutions."],
    chips: {"movement":["Positive movement"],"impact":["Due-process concern","Punishment expansion"],"risk":["Watch closely"]},
    tags: ["due-process concern","punishment expansion"],
    sources: [
      { label: "Fourth Circuit opinion (mirror)", href: "https://law.justia.com/cases/federal/appellate-courts/ca4/25-4091/25-4091-2026-10-01.html", kind: "supplemental", type: "unpublished court opinion" }
    ],
    
  },
  {
    id: 19, group: "Relief, Restrictions & Access", title: "California’s new 25-year sentence-review program excludes registrants", jurisdiction: "California", date: "October 1, 2026",
    summary: "California created a new avenue for sentence-review recommendations, while expressly excluding current or future Penal Code 290 registrants.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://www.cdcr.ca.gov/bph/statutes/regulatory-changes/">Board of Parole Hearings RN 25-01</ExternalLink>{" — " + "New regulations effective October 1 allow the Board of Parole Hearings to review specified people who have served 25 years or more for possible recommendations to the governor for commutation or to a court for recall and resentencing."}</>,
      "The eligibility rules categorically exclude people with current or future sex-offense registration requirements, among other excluded groups. An October 20 committee memorandum analyzed the program and an October 27 meeting continued oversight."
    ],
    matters: ["Individualized reconsideration is presented as appropriate after decades of incarceration, yet the very people facing a lifelong collateral classification may never reach that review process.","The exclusion denies families the prospect of consideration based on rehabilitation, age and circumstances rather than a fixed offense category."],
    analysis: ["The new review process does not newly worsen existing obligations for excluded people, so SOLAR classifies direct legal movement as neutral with a conspicuous missed opportunity.","The policy question is why individualized judgments are acceptable for some people but unavailable to others regardless of current risk."],
    watch: ["California committee’s further review and recommendations.","Whether the board or lawmakers revisit categorical ineligibility."],
    chips: {"movement":["Neutral movement"],"impact":["Relief exclusion","Reentry barrier"],"risk":["Missed opportunity","Advocacy opening"]},
    tags: ["relief exclusion","reentry barrier"],
    sources: [
      { label: "BPH adopted regulations", href: "https://www.cdcr.ca.gov/bph/statutes/regulatory-changes/", kind: "official", type: "government or court source" },
      { label: "October 20 committee memorandum", href: "https://www.clrc.ca.gov/CRPC/Pub/Memos/CRPC26-13.pdf", kind: "official", type: "government or court source" }
    ],
    action: {"title":"California: seek review of the sentence-review exclusion","why":"The new 25-year process categorically screens out people with present or future registration obligations without individualized review.","label":"Committee agenda and meeting information","href":"https://www.clrc.ca.gov/CRPC/Meetings/Agenda.html","message":"Please review the Penal Code 290 exclusion in the new 25-year sentence-review process. Long-serving people should at least be eligible for individualized evaluation based on rehabilitation, age, current risk and family circumstances."},
  },
  {
    id: 20, group: "Relief, Restrictions & Access", title: "Florida court denies anonymity in challenge to claimed expired SORNA duty", jurisdiction: "Federal / Middle District of Florida", date: "October 22, 2026",
    summary: "A plaintiff seeking a declaration that federal registration had ended was refused permission to litigate under a pseudonym.", tone: "rose",
    changed: [
      <><ExternalLink href="https://ecf.flmd.uscourts.gov/cgi-bin/show_public_doc?2026-02388-6-6-cv=">Doe v. United States</ExternalLink>{" — " + "A plaintiff filed an October 13 action contending that his federal SORNA duty expired in March 2024 and seeking removal from federal records. The court denied permission to proceed anonymously on October 22."}</>,
      "That decision concerns case identification and the open-courts presumption; it does not resolve whether the plaintiff actually owes federal registration. The order contemplated a docket-name change subject to an objection deadline."
    ],
    matters: ["A person trying to correct a potentially obsolete registration record may face renewed public exposure merely to bring the claim.","That procedural burden can discourage meritorious challenges, especially when the disputed public classification is precisely the harm at issue."],
    analysis: ["SOLAR reads this as a privacy and access-to-justice setback, not a decision that federal registration must continue.","Courts must balance openness with the unusually durable consequences of attaching a public identity to disputed registry information."],
    watch: ["Whether the court reviews objections to the anonymity decision.","The merits of the claimed registration expiration."],
    chips: {"movement":["Negative movement"],"impact":["Rights concern","Relief exclusion"],"risk":["Litigation risk"]},
    tags: ["rights concern","relief exclusion"],
    sources: [
      { label: "Federal court October 22 order", href: "https://ecf.flmd.uscourts.gov/cgi-bin/show_public_doc?2026-02388-6-6-cv=", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 21, group: "Relief, Restrictions & Access", title: "California enhanced-record-sealing proposal leaves registry eligibility unresolved", jurisdiction: "California", date: "October 2, 2026",
    summary: "A staff proposal for stronger misdemeanor sealing builds on an automatic-relief program that still excludes current registrants.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://www.clrc.ca.gov/CRPC/Pub/Memos/CRPC26-10.pdf">California staff memorandum 2026-10</ExternalLink>{" — " + "California committee staff proposed enhanced sealing of misdemeanor arrest and conviction information after automatic record relief, potentially including petition-based or time-based procedures."}</>,
      "The underlying automatic conviction-relief statute excludes people currently required to register under Penal Code 290. The staff memorandum is not legislation, and it does not itself establish a new exclusion or erase the old one."
    ],
    matters: ["Record visibility matters for employment, licensing, rental screening and the ability to move beyond a conviction.","Reform that is built atop an already exclusionary eligibility system can improve second chances for many people while leaving registrants outside the gate."],
    analysis: ["Direct legal movement is neutral; the meaningful story is an unresolved relief exclusion and a chance to design the next recommendation more fairly.","SOLAR would ask the committee to examine individualized eligibility instead of simply inheriting categorical exclusions."],
    watch: ["Whether final recommendations address Penal Code 290 eligibility.","Any subsequent bill creating a petition process."],
    chips: {"movement":["Neutral movement"],"impact":["Relief exclusion","Employment barrier"],"risk":["Missed opportunity"]},
    tags: ["relief exclusion","employment barrier"],
    sources: [
      { label: "October 2 committee memorandum", href: "https://www.clrc.ca.gov/CRPC/Pub/Memos/CRPC26-10.pdf", kind: "official", type: "government or court source" },
      { label: "California DOJ automatic relief guidance", href: "https://www.oag.ca.gov/fingerprints/automatic-record-relief-penal-code-sections-851.93-and-1203.425", kind: "official", type: "government or court source" }
    ],
    
  },
  {
    id: 22, group: "Relief, Restrictions & Access", title: "California corrections department rejects changes to category-based custody limits", jurisdiction: "California", date: "October 30, 2026",
    summary: "Published agency decision leaves certain sex-offense-status-based prison placement and programming limits intact.", tone: "indigo",
    changed: [
      <><ExternalLink href="https://oal.ca.gov/wp-content/uploads/sites/166/2026/10/2026-Notice-Register-No.-44-Z-October-30-2026.pdf">California Regulatory Notice Register 44-Z</ExternalLink>{" — " + "A notice published October 30 describes CDCR’s rejection of reconsideration of a petition to remove restrictions associated with sex-offense classifications, including institutional placement and programming consequences."}</>,
      "The agency relied on security and classification reasoning and earlier review materials. This was a decision on a petition, not adoption of a new statewide regulation in October."
    ],
    matters: ["Categorical custody rules can influence treatment access, transfer eligibility, work programming and the practical ability to prepare for release.","People and families may experience significant consequences even when policy is framed as institutional classification rather than additional punishment."],
    analysis: ["SOLAR views the refusal as a negative reform outcome without describing it as newly imposed restrictions.","It highlights the need for current evidence, transparent classification standards and individualized review in correctional policy."],
    watch: ["Potential judicial review of the petition decision.","Future CDCR rulemaking or oversight addressing classification-based barriers."],
    chips: {"movement":["Neutral movement"],"impact":["Reentry barrier","Agency implementation"],"risk":["Reform opening"]},
    tags: ["reentry barrier","agency implementation"],
    sources: [
      { label: "California October 30 regulatory register", href: "https://oal.ca.gov/wp-content/uploads/sites/166/2026/10/2026-Notice-Register-No.-44-Z-October-30-2026.pdf", kind: "official", type: "government or court source" }
    ],
    
  }
];

const watchlist: WatchItemData[] = [{"title":"Fresno proposed SHIELD housing ordinance","posture":"October resolution directed studies and drafting; substantive licensing and location restrictions were not enacted.","why":"Proposed limits on lawful housing providers could displace residents or reduce approved housing availability.","next":["Check the draft ordinance, fee study and council hearing calendar.","Ask for evidence of housing and homelessness consequences."]},{"title":"California’s 25-year sentence-review exclusion","posture":"New parole-board regulations took effect October 1 and exclude people with current or future registration obligations.","why":"The process allows individualized review for other long-serving people while withholding that opportunity categorically.","next":["Track Committee on Revision of the Penal Code meetings.","Watch any challenges or proposals addressing excluded classes."]},{"title":"Iowa administrative Chapter 38 and Chapter 83","posture":"October notices proposed replacements; their November public-comment periods have ended.","why":"Final wording and agency forms may determine real-world reporting and electronic monitoring practice.","next":["Compare final adopted texts with the October proposals.","Check implementation guidance for verification and removal mechanics."]},{"title":"Oklahoma legislative registry study","posture":"October 6 interim study explored registry issues; no reform law resulted yet.","why":"Evidence on aging, disability and individualized relief may inform the next legislative session.","next":["Check 2027 bill introductions and committee referrals.","Review whether any proposal offers an accessible relief process."]},{"title":"Missouri compelled speech and broad registration litigation","posture":"A Supreme Court certiorari denial preserved the Halloween-sign decision, while the Eighth Circuit separately upheld the wider registry.","why":"Narrow speech claims and broad punishment claims continue to receive sharply different judicial treatment.","next":["Check for postjudgment implementation of the sign injunction.","Track further review of Does v. Flannigan."]}];

const actionCenterItems: ActionLink[] = [{"title":"Oklahoma: follow up on the registry reform study","why":"The study creates a legislative opening before 2027 bill text is settled.","label":"Find Oklahoma senators","href":"https://oksenate.gov/senators","message":"Please use the October registry study to consider individualized relief for elderly or medically impaired people, transparent standards and clear compliance exceptions. Reform should be grounded in risk evidence and family stability."},{"title":"Fresno: challenge restrictions before ordinance adoption","why":"The city is preparing a housing-operator proposal; there is still an opportunity to demand evidence and assess displacement.","label":"View Fresno council calendar","href":"https://fresno.legistar.com/Calendar.aspx","message":"Please assess how any proposed licensing cap or proximity restriction would affect available housing, homelessness, employment and families. Require evidence, transparent maps, individualized exceptions and public input before adopting an ordinance."},{"title":"Maryland: testify on fair sentencing treatment","why":"The commission's November 30 hearing allows evidence on the distinction between registration compliance and active criminal-justice involvement.","label":"Read hearing and testimony instructions","href":"https://www.msccsp.org/Files/Meetings/2026_Public_Hearing_PressRelease.pdf","message":"Please continue to distinguish routine registration reporting from active criminal supervision in sentencing policy. Collateral duties should not be interpreted as proof of current risk or criminal conduct."},{"title":"California: seek review of the sentence-review exclusion","why":"The new 25-year process categorically screens out people with present or future registration obligations without individualized review.","label":"Committee agenda and meeting information","href":"https://www.clrc.ca.gov/CRPC/Meetings/Agenda.html","message":"Please review the Penal Code 290 exclusion in the new 25-year sentence-review process. Long-serving people should at least be eligible for individualized evaluation based on rehabilitation, age, current risk and family circumstances."}];

export default function LegislativeTrackerOctober2026(): JSX.Element {
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
        title="Legislative Tracker — October 2026 Update | The SOLAR Project"
        description="October 2026 SOLAR Legislative Tracker: registry relief exclusions, Halloween speech rights, residence verification, local housing proposals, court rulings and agency oversight."
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
            <Badge>October 2026</Badge>
            <Badge>Courts / Laws / Agencies / Local Policy</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Legislative Tracker — October 2026 Update
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            October brought narrow constitutional protections alongside more registration paperwork, categorical relief exclusions and emerging restrictions on housing. These developments show both the limits and the possibilities of evidence-based reform.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <p>
              <span className="font-bold text-white">Update scope:</span>{" "}
              Events dated October 1–31, 2026, including judicial rulings, effective laws, administrative notices, local legislative action and policy-relevant enforcement. Official records are prioritized; court-opinion mirrors are labeled as supplemental.
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
        <Section id="glance" eyebrow="At a Glance" title="What October moved">
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
              In October, courts preserved limits on compelled speech and impossible-to-perform registration obligations, but refused several broader challenges to registry systems. Connecticut imposed a new cycle of documentary verification; California excluded registrants from its new 25-year sentence-review process; and Fresno initiated a plan to regulate housing providers. The question across these settings is whether public-safety policy is calibrated to real risk and individual circumstance or simply to a permanent label.
            </p>
          </div>
        </Section>

        <Section
          id="throughline"
          eyebrow="Monthly Throughline"
          title="The limits of registry reform — and the cost of compliance"
        >
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            <p>
              October showed that constitutional protection is often most effective when the legal burden is precise: courts preserved a challenge to compelled Halloween signage, protected a remedy where California could not accept registration information, and returned a Georgia dispute for further review. But Missouri’s larger registration system survived a sweeping challenge, despite the pressures that tiering, public exposure and constant reporting place on households. This is why SOLAR argues for{" "}
              <InternalLink to="/advocacy#position-statement">individualized, evidence-based registry reform</InternalLink>.
            </p>
            <p>
              At the same time, the details of ordinary life became policy battlegrounds. Connecticut assigned registrants more responsibility for quarterly documentation, while Fresno considered new controls on housing operators. Families navigating those duties need clear standards and{" "}
              <InternalLink to="/resources">practical resources</InternalLink>, not a succession of technical traps. California’s new sentence-review program sharpens the contradiction: reconsideration after decades can be available in principle but denied categorically to those with a registration label.
            </p>
            <p>
              The month also brought a nationwide Halloween enforcement operation, yet enforcement counts alone cannot establish a prevention result. SOLAR’s{" "}
              <InternalLink to="/advocacy#recon">research-backed advocacy</InternalLink>{" "}
              insists that public claims distinguish paperwork violations, new offenses, housing displacement and actual safety outcomes. The relevant question is what a rule changes for a person and family—and whether that change is proportionate and supported by evidence.
            </p>
          </div>
        </Section>

        <Section
          id="developments"
          eyebrow="Key Developments"
          title="October 2026 developments"
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
            These four October developments still offer practical avenues for readers to shape what happens next. Use the official meeting, hearing or contact pages below, and tailor the suggested message to your own experience.
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
              and civic-data sources may be used as supplemental context, but
              they should not replace official sources when official sources are
              available.
            </p>
            <p>
              This retrospective includes only meaningful events occurring October 1–31, 2026. Proposed ordinances and rules are identified as proposals, unpublished opinions are not described as binding nationwide precedent, and older developments recirculated in October were not counted as fresh actions. The focus is on actual legal and policy effects for registrants, people with sex-offense convictions, and families.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const teasers = {"glance":["October’s 22 developments paired narrow constitutional safeguards with continued registry obligations, relief exclusions and new policy proposals.","The Supreme Court left Missouri’s Halloween-sign speech victory intact; a separate Eighth Circuit case upheld the state’s wider registry.","California’s 25-year sentence-review process excludes registrants, while Connecticut now asks individuals to initiate quarterly residence verification."],"highlights":["Fresno initiated, but did not enact, a potential licensing scheme for registrant housing providers.","Oklahoma opened a formal reform study while Iowa proposed replacement registry and supervision rules.","Federal enforcement statistics from a Halloween operation do not themselves establish that the activity prevented victimization."]};
