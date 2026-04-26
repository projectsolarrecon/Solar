import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";
import {
  ArrowLeft,
  Clipboard,
  ExternalLink,
  FileText,
  Printer,
  Scale,
} from "lucide-react";

type Tone = "sky" | "amber" | "emerald" | "slate" | "rose" | "indigo";

type Source = {
  label: string;
  href: string;
};

type Development = {
  tone: Tone;
  label: string;
  title: string;
  whatChanged: React.ReactNode;
  whyItMatters: React.ReactNode;
  movementLabels?: string[];
  impactLabels?: string[];
  riskLabels?: string[];
  solarRead: React.ReactNode;
  whatToWatch: React.ReactNode;
  tags: string[];
  sources: Source[];
  scriptId?: string;
  scriptLabel?: string;
  scriptText?: string;
  officialActionLabel?: string;
  officialActionHref?: string;
};

type Action = {
  title: string;
  children: React.ReactNode;
  scriptId: string;
  script: string;
  actionLabel?: string;
  actionHref?: string;
};

type WatchItemData = {
  title: string;
  posture: string;
  why: string;
  next: string;
};

const tones: Record<Tone, string> = {
  sky: "border-sky-200 bg-sky-50 text-sky-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  slate: "border-slate-200 bg-slate-50 text-slate-900",
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-950",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
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
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8"
    >
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function StatusCard({
  tone,
  title,
  children,
}: {
  tone: Tone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <h3 className="text-base font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6">{children}</p>
    </div>
  );
}

function SourcePill({ source }: { source: Source }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 hover:border-slate-500 hover:text-slate-950"
    >
      {source.label}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}
function AnalysisChipGroup({
  title,
  labels,
}: {
  title: string;
  labels?: string[];
}) {
  if (!labels || labels.length === 0) return null;

  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function SolarAnalysis({
  movementLabels,
  impactLabels,
  riskLabels,
  children,
}: {
  movementLabels?: string[];
  impactLabels?: string[];
  riskLabels?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-2">
        <Scale className="h-4 w-4 text-slate-600" />
        <h4 className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">
          SOLAR analysis
        </h4>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <AnalysisChipGroup title="Movement" labels={movementLabels} />
        <AnalysisChipGroup title="Impact" labels={impactLabels} />
        <AnalysisChipGroup title="Risk / opportunity" labels={riskLabels} />
      </div>
      <div className="mt-5 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}

function DevelopmentCard({
  tone,
  label,
  title,
  whatChanged,
  whyItMatters,
  movementLabels,
  impactLabels,
  riskLabels,
  solarRead,
  whatToWatch,
  tags,
  sources,
  scriptId,
  scriptLabel = "Copy talking point",
  scriptText,
  officialActionLabel,
  officialActionHref,
  copied,
  onCopy,
}: Development & {
  copied?: string | null;
  onCopy?: (id: string, text: string) => void;
}) {
  return (
    <article className={`rounded-3xl border p-5 shadow-sm md:p-6 ${tones[tone]}`}>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] opacity-75">
            {label}
          </p>
          <h3 className="mt-2 text-xl font-black tracking-tight md:text-2xl">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <div className="rounded-2xl border border-white/70 bg-white/75 p-5">
          <h4 className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
            What changed
          </h4>
          <div className="mt-2 text-sm leading-7">{whatChanged}</div>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/75 p-5">
          <h4 className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
            Why it matters
          </h4>
          <div className="mt-2 text-sm leading-7">{whyItMatters}</div>
        </div>

        <SolarAnalysis
          movementLabels={movementLabels}
          impactLabels={impactLabels}
          riskLabels={riskLabels}
        >
          {solarRead}
        </SolarAnalysis>

        <div className="rounded-2xl border border-white/70 bg-white/75 p-5">
          <h4 className="text-sm font-black uppercase tracking-[0.18em] opacity-70">
            What to watch
          </h4>
          <div className="mt-2 text-sm leading-7">{whatToWatch}</div>
        </div>

        <div className="flex flex-wrap gap-2">
          {sources.map((source) => (
            <SourcePill key={`${title}-${source.label}`} source={source} />
          ))}

          {officialActionHref && (
            <a
              href={officialActionHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-bold text-white hover:bg-slate-800"
            >
              {officialActionLabel ?? "Official action link"}
              <ExternalLink className="h-3 w-3" />
            </a>
          )}

          {scriptId && scriptText && onCopy && (
            <button
              type="button"
              onClick={() => onCopy(scriptId, scriptText)}
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 hover:bg-emerald-100"
            >
              <Clipboard className="h-3 w-3" />
              {copied === scriptId ? "Copied!" : scriptLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
function ActionCard({
  title,
  children,
  scriptId,
  script,
  actionLabel,
  actionHref,
  copied,
  onCopy,
}: Action & {
  copied: string | null;
  onCopy: (id: string, text: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
        {script}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onCopy(scriptId, script)}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <Clipboard className="h-4 w-4" />
          {copied === scriptId ? "Copied!" : "Copy message"}
        </button>
        {actionHref && actionLabel && (
          <a
            href={actionHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500 hover:text-slate-950"
          >
            {actionLabel}
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function WatchItem({ title, posture, why, next }: WatchItemData) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <p className="text-sm leading-6 text-slate-700">
          <span className="font-bold text-slate-950">Current posture:</span>{" "}
          {posture}
        </p>
        <p className="text-sm leading-6 text-slate-700">
          <span className="font-bold text-slate-950">Why it matters:</span> {why}
        </p>
        <p className="text-sm leading-6 text-slate-700">
          <span className="font-bold text-slate-950">Watch next:</span> {next}
        </p>
      </div>
    </div>
  );
}

const developments: Development[] = [
  {
    tone: "rose",
    label: "Florida package advanced",
    title:
      "Florida SB 212 / HB 45 — residency, presence, notice, arrest, and supervision expansion package",
    whatChanged:
      "Florida SB 212 was introduced on January 13, placed on the Senate Criminal Justice Committee agenda on January 15, and passed Criminal Justice as a committee substitute on January 20. The package revises residency restrictions, modifies loitering and proximity provisions, requires notice to schools or child care facilities in certain circumstances, authorizes warrantless arrest for specified violations, and revises conditional-release, probation, and community-control conditions.",
    whyItMatters:
      "This is a direct registrant-family impact item. It would expand where people can live, where they can be present, what they must report, and how easily alleged violations can trigger arrest. Those rules can translate into housing instability, family logistics problems around schools and child care, technical-violation exposure, and heightened supervision consequences.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Housing barrier",
      "Compliance burden",
      "Family-stability impact",
      "Punishment expansion",
      "Enforcement risk",
    ],
    riskLabels: [
      "Watch closely",
      "Advocacy opening",
      "Implementation risk",
      "Litigation risk",
    ],
    solarRead:
      "From SOLAR’s perspective, this is the kind of broad restriction package that turns registry status into a daily geography and supervision trap. The public-safety question is not whether the bill sounds tough; it is whether added exclusion zones, notice duties, and arrest authority reduce harm or instead increase homelessness, instability, and technical violations without individualized risk review.",
    whatToWatch:
      "Watch committee amendments, whether parent and grandparent exceptions remain intact, final effective-date language, and whether legal challenges focus on liberty, retroactivity, vagueness, or housing banishment.",
    tags: ["Florida", "Residency restrictions", "Presence restrictions", "Supervision"],
    sources: [
      {
        label: "Florida Senate SB 212",
        href: "https://www.flsenate.gov/Session/Bill/2026/212",
      },
    ],
    scriptId: "SCRIPT-FL-SB212",
    scriptLabel: "Copy Florida message",
    scriptText:
      "Please oppose broad registry restrictions that expand housing exclusion, presence limits, notice duties, and arrest exposure without individualized risk review. Florida should preserve family-related exceptions, require evidence that any restriction improves safety, and avoid rules that increase homelessness, instability, and technical violations.",
    officialActionLabel: "Florida SB 212 bill page",
    officialActionHref: "https://www.flsenate.gov/Session/Bill/2026/212",
  },
  {
    tone: "indigo",
    label: "Federal appellate ruling",
    title:
      "Sixth Circuit — Doe v. Burlew remands Kentucky social-media legal-name disclosure challenge",
    whatChanged:
      "On January 26, the Sixth Circuit issued a published opinion in Doe v. Burlew. Kentucky’s law requires certain registrants with offenses involving minors to display their full legal name on qualifying social-media accounts. The Sixth Circuit held that the district court had not performed the required facial-overbreadth analysis, vacated the preliminary injunction, and remanded the case for further proceedings.",
    whyItMatters:
      "This is a major online-identifier and anonymous-speech case. It affects whether registrants can participate in ordinary online life, political speech, family communication, and support spaces without attaching their legal identity to social-media accounts. The remand creates uncertainty for registrants and families who may face pressure to self-identify, deactivate accounts, or risk enforcement.",
    movementLabels: ["Mixed movement"],
    impactLabels: [
      "Rights concern",
      "Compliance burden",
      "Due-process concern",
      "Family-stability impact",
      "Litigation risk",
    ],
    riskLabels: [
      "Appeal likely",
      "Clarification needed",
      "Watch closely",
      "Advocacy opening",
    ],
    solarRead:
      "The opinion does not end the challenge, but it does reopen uncertainty around online speech. For registrants and families, mandatory public name display can chill political participation, mutual-support spaces, family communication, and ordinary social use while exposing households to doxxing or harassment. The next phase matters because courts will have to grapple with anonymity, overbreadth, and enforcement realities rather than treating online identity rules as a narrow administrative detail.",
    whatToWatch:
      "Watch whether the district court narrows the case to as-applied claims, whether Kentucky enforcement resumes or remains limited, and how courts treat anonymity, political speech, direct messaging, passive browsing, and accounts managed for family purposes.",
    tags: ["Kentucky", "First Amendment", "Online identifiers", "Court challenge"],
    sources: [
      {
        label: "Sixth Circuit opinion",
        href: "https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf",
      },
    ],
    officialActionLabel: "Sixth Circuit opinion",
    officialActionHref:
      "https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf",
  },
{
    tone: "rose",
    label: "Operative date",
    title: "California SB 680 — new registration trigger took effect January 1",
    whatChanged:
      "California’s SB 680, enacted in 2025, became operative for covered offenses occurring on or after January 1. The law amended Penal Code section 290 to require registration for certain convictions under Penal Code section 261.5(c) or (d), generally placing the person in tier one for 10 years unless the statutory exception applies.",
    whyItMatters:
      "This directly expands mandatory registration exposure in California for a category that previously could avoid mandatory registration in some circumstances. New registrants may face 10 years of registration, public stigma, employment and housing barriers, and technical compliance risk. The exception matters, but affected people may not understand it without legal help.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Punishment expansion",
      "Reentry barrier",
      "Compliance burden",
      "Employment barrier",
      "Housing barrier",
    ],
    riskLabels: ["Implementation risk", "Clarification needed", "Watch closely"],
    solarRead:
      "SB 680 shows how registration can expand through offense-category changes that look technical but carry decade-long consequences. The key implementation concern is over-registration: prosecutors, courts, defense counsel, and the Department of Justice need to apply the exception correctly so people are not swept into registration beyond what the statute requires.",
    whatToWatch:
      "Watch how prosecutors charge qualifying cases, whether courts and counsel correctly apply the age-gap and offense-only exception, and whether California provides clear tiering and termination guidance.",
    tags: ["California", "Registration trigger", "Tier one", "Effective date"],
    sources: [
      {
        label: "California SB 680",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB680",
      },
    ],
    officialActionLabel: "California SB 680 bill page",
    officialActionHref:
      "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB680",
  },
  {
    tone: "amber",
    label: "California bill introduced",
    title:
      "California AB 1568 — registry-termination petition process bill introduced",
    whatChanged:
      "AB 1568 was introduced on January 12. The bill concerns Penal Code section 290.5, California’s petition process for termination from the registry after the minimum registration period. The introduced text would add considerations around position of trust or authority and treatment participation or completion in the termination decision.",
    whyItMatters:
      "Relief and removal procedure is one of the most important registry-life issues. Even changes framed as clarifying can make termination harder, more discretionary, or more costly if they add evidentiary burdens. People nearing tier-one or tier-two termination could face more documentation demands, more hearing risk, and potentially more continued-registration orders.",
    movementLabels: ["Unclear movement"],
    impactLabels: [
      "Relief pathway",
      "Due-process concern",
      "Compliance clarity",
      "Litigation risk",
    ],
    riskLabels: ["Watch closely", "Clarification needed", "Advocacy opening"],
    solarRead:
      "The bill’s effect depends on what the added considerations become in practice. If courts use them as individualized, evidence-based factors, the change may be manageable. If they become new categorical barriers or impossible documentation hurdles, the registry-termination pathway could become less meaningful for people who have already completed their minimum registration period.",
    whatToWatch:
      "Watch committee analyses, amendments, whether the bill creates mandatory appearance or treatment-documentation barriers, and whether it protects indigent petitioners and people who cannot access old treatment records.",
    tags: ["California", "Registry termination", "Relief process", "Court petitions"],
    sources: [
      {
        label: "California AB 1568",
        href: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
      },
    ],
    scriptId: "SCRIPT-CA-AB1568",
    scriptLabel: "Copy California message",
    scriptText:
      "Please preserve meaningful registry-termination relief in AB 1568. Any added court considerations should be individualized, prospective, and evidence-based, not retroactive or impossible documentation burdens. People who have completed their minimum registration period need a fair, accessible path to review.",
    officialActionLabel: "California AB 1568 bill page",
    officialActionHref:
      "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
  },
  {
    tone: "rose",
    label: "South Carolina bill introduced",
    title:
      "South Carolina H. 4683 — “Sex Offender Child Protection Act” introduced",
    whatChanged:
      "H. 4683 was introduced and referred to Judiciary on January 13. The bill would revise the definition of children’s recreational facility, add offenses that trigger residence exclusions near schools, daycare centers, recreational facilities, parks, or public playgrounds, restrict certain registrants from owning, operating, or being employed in businesses or organizations serving minors or involving unsupervised access to minors, and require SLED to notify registrants of the act’s provisions.",
    whyItMatters:
      "This is a direct expansion of housing and employment exclusion rules. It also increases public-notification pressure by requiring school districts to provide names and addresses near bus stops or link to registry information. More people may be forced to move, lose job options, avoid volunteer or community roles, or face heightened public exposure near school-bus-stop geography.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Housing barrier",
      "Employment barrier",
      "Public notification",
      "Family-stability impact",
      "Punishment expansion",
    ],
    riskLabels: [
      "Advocacy opening",
      "Enforcement risk",
      "Implementation risk",
      "Watch closely",
    ],
    solarRead:
      "The proposal layers housing exclusion, employment exclusion, and public-notification pressure onto registry status. For families, the practical impact can be immediate: where a household can live, whether a parent can work, and whether school-related geography becomes a source of public exposure. Evidence-based policy should ask whether these restrictions improve safety or simply widen instability.",
    whatToWatch:
      "Watch whether the bill advances from Judiciary, whether grandfather exceptions remain, and whether lawmakers assess homelessness, employment loss, and family-stability consequences.",
    tags: [
      "South Carolina",
      "Residency restrictions",
      "Employment restrictions",
      "Public notification",
    ],
    sources: [
      {
        label: "South Carolina H. 4683",
        href: "https://www.scstatehouse.gov/sess126_2025-2026/bills/4683.htm",
      },
    ],
    scriptId: "SCRIPT-SC-H4683",
    scriptLabel: "Copy South Carolina message",
    scriptText:
      "Please oppose broad residence and employment bans in H. 4683 unless they are supported by individualized risk review, clear evidence, and workable family-stability exceptions. Policies that force people from housing and employment can undermine reentry and public safety rather than improve it.",
    officialActionLabel: "South Carolina H. 4683 bill page",
    officialActionHref:
      "https://www.scstatehouse.gov/sess126_2025-2026/bills/4683.htm",
  },
{
    tone: "rose",
    label: "West Virginia bill introduced",
    title:
      "West Virginia SB 500 — 1,000-foot residency restriction bill introduced",
    whatChanged:
      "SB 500 was introduced on January 19 and referred to Senate Judiciary. The bill proposes to amend the Sex Offender Registration Act to prohibit registrants from residing within 1,000 feet of schools, parks, or playgrounds. The bill text states that the article applies both retroactively and prospectively.",
    whyItMatters:
      "A broad distance rule can function as banishment, especially in rural communities with limited housing and in cities where exclusion zones overlap. Retroactivity language raises added constitutional and practical concerns. Registrants and families could face forced moves, homelessness risk, family separation, inability to live with supportive relatives, and increased violation risk based on geography rather than individualized conduct.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Housing barrier",
      "Family-stability impact",
      "Punishment expansion",
      "Due-process concern",
      "Litigation risk",
    ],
    riskLabels: [
      "Watch closely",
      "Advocacy opening",
      "Appeal likely if enacted",
      "Implementation risk",
    ],
    solarRead:
      "Residency bans are often presented as simple protective measures, but they can operate as housing banishment. The retroactivity language is especially significant because it threatens to move the legal finish line for people and families who already built housing arrangements around existing rules.",
    whatToWatch:
      "Watch whether Judiciary adds exceptions for existing residences, family homes, rural housing scarcity, shelters, or individualized risk review.",
    tags: ["West Virginia", "Residency restrictions", "Retroactivity", "Housing"],
    sources: [
      {
        label: "West Virginia SB 500",
        href: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb500+intr.htm&i=500&sesstype=RS&yr=2026",
      },
    ],
    scriptId: "SCRIPT-WV-SB500",
    scriptLabel: "Copy West Virginia message",
    scriptText:
      "Please oppose retroactive 1,000-foot residence bans in SB 500. Housing stability and family support are central to reentry and public safety. Any residence rule should be prospective, individualized, evidence-based, and include clear exceptions for existing homes, shelters, and family-support placements.",
    officialActionLabel: "West Virginia SB 500 bill page",
    officialActionHref:
      "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb500+intr.htm&i=500&sesstype=RS&yr=2026",
  },
  {
    tone: "rose",
    label: "West Virginia registry package",
    title:
      "West Virginia HB 4135 / HB 4138 — online identifiers, vehicle information, and offense-trigger expansion bills introduced",
    whatChanged:
      "HB 4135 and HB 4138 were introduced on January 14. HB 4138 was also discussed in a January 27 House Judiciary update as advancing. HB 4135 would require registrants to provide all online identifiers from internet and mobile application accounts and information about ATVs or UTVs they operate. HB 4138 would clarify that sexual extortion and aggravated sexual extortion require registration and that a repealed spousal sexual-assault offense remains registerable, with legislative blog discussion indicating retroactive language.",
    whyItMatters:
      "Online-identifier reporting and vehicle-equipment reporting expand compliance traps. Retroactive offense-trigger language raises the same moving-the-finish-line concerns SOLAR tracks in registry litigation. Registrants and families could face more reporting obligations, more risk of technical violations, more law-enforcement data collection, and potential new registration exposure tied to older convictions.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Compliance burden",
      "Online identifiers",
      "Punishment expansion",
      "Due-process concern",
      "Retroactivity concern",
    ],
    riskLabels: [
      "Watch closely",
      "Advocacy opening",
      "Litigation risk",
      "Clarification needed",
    ],
    solarRead:
      "The compliance footprint matters. Every added identifier, account category, vehicle category, or retroactive trigger creates another path to enforcement even when no new harm has occurred. A narrow, nonpublic, law-enforcement-only approach with safe harbors would be less destabilizing than broad reporting duties that convert ordinary digital and transportation changes into violation risk.",
    whatToWatch:
      "Watch whether online identifier language is narrowed, whether retroactivity survives, and whether the bills distinguish public disclosure from law-enforcement-only reporting.",
    tags: [
      "West Virginia",
      "Online identifiers",
      "Compliance duties",
      "Retroactivity",
    ],
    sources: [
      {
        label: "West Virginia HB 4135",
        href: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026",
      },
    ],
    scriptId: "SCRIPT-WV-HB4135-HB4138",
    scriptLabel: "Copy West Virginia message",
    scriptText:
      "Please narrow HB 4135 and HB 4138. Online identifier reporting should be clear, limited, nonpublic, and law-enforcement-only, with safe-harbor time to update information. Please also oppose retroactive registration expansion that places people on the registry after the legal consequences of their cases were already set.",
    officialActionLabel: "West Virginia HB 4135 bill page",
    officialActionHref:
      "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026",
  },
  {
    tone: "amber",
    label: "Maryland bill introduced",
    title:
      "Maryland HB 287 — lifetime sexual-offender supervision conditions and discharge process",
    whatChanged:
      "HB 287 was introduced and read for the first time on January 14. The bill concerns lifetime sexual-offender supervision and would alter conditions of supervision, reporting requirements for management teams, hearing requirements, and discharge-petition provisions. The bill text includes potential conditions such as GPS monitoring, proximity restrictions, employment or activity limits involving minors, treatment, computer access checks, polygraphs, and contact restrictions.",
    whyItMatters:
      "Supervision rules can function like registry-adjacent punishment, especially when layered on top of registration and enforced through new violations. The bill could mean expanded supervision conditions, more violation referrals, more monitoring, and more complex discharge litigation for people seeking eventual release from lifetime supervision.",
    movementLabels: ["Mixed movement"],
    impactLabels: [
      "Compliance burden",
      "Relief pathway",
      "Due-process concern",
      "Family-stability impact",
      "Supervision burden",
    ],
    riskLabels: ["Clarification needed", "Watch closely", "Advocacy opening"],
    solarRead:
      "This item is mixed because discharge-process changes may matter for relief, while expanded or more easily triggered supervision conditions can deepen long-term control. The key SOLAR question is whether the bill preserves individualized supervision and meaningful discharge review or turns lifetime supervision into a broader technical-violation pipeline.",
    whatToWatch:
      "Watch whether the discharge process becomes easier or harder in practice, whether mandatory violation reporting increases incarceration risk, and whether individualized conditions remain available.",
    tags: ["Maryland", "Lifetime supervision", "Discharge petitions", "Compliance"],
    sources: [
      {
        label: "Maryland HB 287 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0287f.pdf",
      },
    ],
    scriptId: "SCRIPT-MD-HB287",
    scriptLabel: "Copy Maryland message",
    scriptText:
      "Please preserve individualized supervision and meaningful discharge review in HB 287. Lifetime supervision conditions should be tailored to actual risk, supported by evidence, and paired with access to counsel and proportional responses to technical violations.",
    officialActionLabel: "Maryland HB 287 bill text",
    officialActionHref:
      "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0287f.pdf",
  },
{
    tone: "rose",
    label: "Maryland cross-filed bills",
    title:
      "Maryland HB 501 / SB 407 — tier-definition changes tied to position-of-authority offense",
    whatChanged:
      "HB 501 was introduced on January 27, and SB 407 was introduced on January 29. The cross-filed bills would alter penalties and add or adjust offenses involving a person in a position of authority, while also altering the definitions of tier I sex offender and tier III sex offender for registry purposes.",
    whyItMatters:
      "Tier placement controls registration length and reporting frequency. A tier-definition change can move someone from a time-limited obligation into longer or lifetime registration. Families may experience longer registration duration, more frequent in-person reporting, and more severe collateral consequences depending on final tier placement.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Punishment expansion",
      "Compliance burden",
      "Reentry barrier",
      "Tiering change",
    ],
    riskLabels: ["Watch closely", "Clarification needed", "Advocacy opening"],
    solarRead:
      "A tiering bill can look like a definitional cleanup, but tier labels are the architecture of registration length and intensity. The policy concern is whether lawmakers are expanding lifetime or higher-tier consequences without a clear, prospective-only analysis of who is affected and why that longer registration period is evidence-based.",
    whatToWatch:
      "Watch fiscal notes and committee amendments explaining who moves into Tier III, whether any lower-tier adjustments exist, and whether changes apply prospectively only.",
    tags: ["Maryland", "Tiering", "Registration duration", "Position of authority"],
    sources: [
      {
        label: "Maryland HB 501 bill text",
        href: "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0501f.pdf",
      },
    ],
    scriptId: "SCRIPT-MD-HB501-SB407",
    scriptLabel: "Copy Maryland message",
    scriptText:
      "Please require a clear registry-tier impact analysis for HB 501 and SB 407. Any tier changes should be prospective only, evidence-based, and paired with individualized relief mechanisms so people are not moved into longer or lifetime registration without meaningful review.",
    officialActionLabel: "Maryland HB 501 bill text",
    officialActionHref:
      "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0501f.pdf",
  },
  {
    tone: "rose",
    label: "Maryland juvenile registry",
    title:
      "Maryland HB 12 — juvenile sex-offender registry access and qualifying-offense expansion",
    whatChanged:
      "HB 12 received first reading on January 14 and a hearing notice on January 16 for a January 29 hearing. The bill would authorize a local superintendent or designee to access the juvenile sex-offender registry and add offenses to the list requiring juvenile registry inclusion.",
    whyItMatters:
      "Juvenile registry expansion is especially high-risk because youth registration can destabilize education, family life, and rehabilitation while adding long-term stigma. More youth could be placed in registry systems, and school-system access could increase exclusion, monitoring, or informal stigma even if the registry is not fully public.",
    movementLabels: ["Negative movement"],
    impactLabels: [
      "Youth registry",
      "Education barrier",
      "Family-stability impact",
      "Due-process concern",
      "Reentry barrier",
    ],
    riskLabels: ["Watch closely", "Advocacy opening", "Implementation risk"],
    solarRead:
      "Youth registry policy deserves heightened caution. A registry label can follow a young person through school, family systems, treatment, and early adulthood. If school access expands, safeguards must be strong enough to prevent exclusionary use, rumor-driven stigma, or informal punishment that undermines rehabilitation.",
    whatToWatch:
      "Watch whether access remains tightly limited, whether schools receive guidance against exclusionary misuse, and whether added offenses are narrowly defined.",
    tags: ["Maryland", "Juvenile registry", "School access", "Education stability"],
    sources: [
      {
        label: "Maryland HB 12 bill record",
        href: "https://legiscan.com/MD/bill/HB12/2026",
      },
    ],
    scriptId: "SCRIPT-MD-HB12",
    scriptLabel: "Copy Maryland message",
    scriptText:
      "Please protect youth confidentiality, education stability, and rehabilitation in HB 12. Any school-system access to juvenile registry information should be narrow, controlled, and paired with clear safeguards against exclusion, stigma, or misuse.",
    officialActionLabel: "Maryland HB 12 bill record",
    officialActionHref: "https://legiscan.com/MD/bill/HB12/2026",
  },
  {
    tone: "amber",
    label: "New Hampshire effective date",
    title:
      "New Hampshire RSA 651-B amendments — January 1 statutory changes to registration definitions and tiers",
    whatChanged:
      "Amendments to New Hampshire’s registration chapter took effect on January 1. The official RSA page for Chapter 651-B lists updated definitions for sexual offense, offense against a child, tier I, tier II, and tier III, including creation of a child intimate visual representation among listed offenses. It also includes language requiring an opportunity to be heard, stated reasons, and appeal rights when courts impose registration for certain otherwise unlisted offenses.",
    whyItMatters:
      "Effective-date statutory changes can alter who must register, how they are tiered, and what process applies when courts impose registration outside enumerated categories. The practical impact may include new qualifying offenses, changed tier exposure, and possible process protections depending on the conviction category.",
    movementLabels: ["Mixed movement"],
    impactLabels: [
      "Tiering change",
      "Compliance clarity",
      "Due-process concern",
      "Agency implementation",
    ],
    riskLabels: ["Clarification needed", "Watch closely", "Implementation risk"],
    solarRead:
      "This is an implementation item rather than a public bill fight. The mixed posture comes from the combination of possible new registration exposure and process language around hearings, reasons, and appeals. The implementation risk is over-classification if courts or agencies apply the revised categories too broadly or without plain-language guidance.",
    whatToWatch:
      "Watch agency guidance, court application of the hearing language, and whether people are over-classified under updated offense categories.",
    tags: ["New Hampshire", "Tiering", "Definitions", "Implementation"],
    sources: [
      {
        label: "New Hampshire RSA 651-B:1",
        href: "https://www.gencourt.state.nh.us/rsa/html/LXII/651-B/651-B-1.htm",
      },
    ],
    officialActionLabel: "New Hampshire RSA 651-B:1",
    officialActionHref:
      "https://www.gencourt.state.nh.us/rsa/html/LXII/651-B/651-B-1.htm",
  },
];

const actions: Action[] = [
  {
    title: "Florida: ask lawmakers to reject broad restriction expansion",
    children:
      "Use this for SB 212 / HB 45, especially around housing exclusion, presence limits, family exceptions, and warrantless-arrest exposure.",
    scriptId: "ACTION-FLORIDA",
    script:
      "Please oppose broad registry restrictions that expand housing exclusion, presence limits, notice duties, and arrest exposure without individualized risk review. Florida should preserve family-related exceptions, require evidence that any restriction improves safety, and avoid rules that increase homelessness, instability, and technical violations.",
    actionLabel: "Florida SB 212 bill page",
    actionHref: "https://www.flsenate.gov/Session/Bill/2026/212",
  },
{
    title: "California: protect meaningful registry-termination review",
    children:
      "Use this for AB 1568 as lawmakers consider changes to the court process for termination petitions.",
    scriptId: "ACTION-CALIFORNIA",
    script:
      "Please preserve meaningful registry-termination relief in AB 1568. Any added court considerations should be individualized, prospective, and evidence-based, not retroactive or impossible documentation burdens. People who have completed their minimum registration period need a fair, accessible path to review.",
    actionLabel: "California AB 1568 bill page",
    actionHref:
      "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB1568",
  },
  {
    title: "South Carolina: oppose broad housing and employment bans",
    children:
      "Use this for H. 4683, which combines residence exclusions, employment restrictions, and public-notification pressure.",
    scriptId: "ACTION-SOUTH-CAROLINA",
    script:
      "Please oppose broad residence and employment bans in H. 4683 unless they are supported by individualized risk review, clear evidence, and workable family-stability exceptions. Policies that force people from housing and employment can undermine reentry and public safety rather than improve it.",
    actionLabel: "South Carolina H. 4683 bill page",
    actionHref:
      "https://www.scstatehouse.gov/sess126_2025-2026/bills/4683.htm",
  },
  {
    title: "West Virginia: narrow reporting duties and reject retroactivity",
    children:
      "Use this for SB 500, HB 4135, and HB 4138, with emphasis on housing stability, online identifiers, safe harbors, and retroactive registration expansion.",
    scriptId: "ACTION-WEST-VIRGINIA",
    script:
      "Please narrow West Virginia’s registry bills. Residence restrictions should be individualized and should not force people from stable housing. Online identifier reporting should be clear, limited, nonpublic, and law-enforcement-only, with safe-harbor time to update information. Please also oppose retroactive registration expansion that places people on the registry after the legal consequences of their cases were already set.",
    actionLabel: "West Virginia HB 4135 bill page",
    actionHref:
      "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026",
  },
  {
    title: "Maryland: protect youth, due process, and individualized review",
    children:
      "Use this across Maryland’s January bills involving juvenile registry access, lifetime supervision, discharge petitions, and tier-definition changes.",
    scriptId: "ACTION-MARYLAND",
    script:
      "Please protect due process, youth rehabilitation, and individualized review in Maryland’s registry-related bills. Juvenile registry access should be narrow and confidential, lifetime supervision should remain tailored to actual risk, and any tier changes should be prospective, evidence-based, and paired with meaningful relief mechanisms.",
    actionLabel: "Maryland HB 287 bill text",
    actionHref:
      "https://mgaleg.maryland.gov/2026RS/bills/hb/hb0287f.pdf",
  },
];

const watchItems: WatchItemData[] = [
  {
    title: "Florida SB 212 / HB 45",
    posture:
      "The package advanced from Senate Criminal Justice during the January window, with later activity continuing outside this update period.",
    why:
      "Residency, presence, notice, arrest, and supervision changes could reshape daily life for registrants and families.",
    next:
      "Watch final text, exceptions, effective-date language, and litigation posture, especially around housing and family-related exceptions.",
  },
  {
    title: "Kentucky / Sixth Circuit Doe v. Burlew remand",
    posture:
      "The Sixth Circuit vacated the preliminary injunction and remanded for the required facial-overbreadth analysis.",
    why:
      "The case affects anonymous speech, online participation, family communication, and public self-identification mandates.",
    next:
      "Watch whether the case becomes as-applied, whether enforcement resumes, and how the district court treats political speech, direct messaging, and family-managed accounts.",
  },
  {
    title: "California AB 1568",
    posture:
      "The registry-termination petition bill was introduced in January, with later amendments and analysis expected to clarify its practical effect.",
    why:
      "Termination petitions are a core relief pathway, and added considerations can become either manageable standards or new barriers.",
    next:
      "Watch amendments and committee analyses for appearance requirements, treatment-proof burdens, risk-assessment language, and protections for indigent petitioners.",
  },
  {
    title: "West Virginia registry package",
    posture:
      "SB 500, HB 4135, and HB 4138 created a January cluster of residency, online identifier, vehicle-information, offense-trigger, and retroactivity proposals.",
    why:
      "Together, the bills could expand housing exclusion, compliance traps, and retroactive registration exposure.",
    next:
      "Watch HB 4138 retroactivity, HB 4135 online and mobile identifier breadth, and SB 500’s 1,000-foot residence ban.",
  },
  {
    title: "Maryland juvenile and lifetime-supervision bills",
    posture:
      "Maryland introduced January bills affecting juvenile registry access, lifetime supervision, discharge petitions, and tier definitions.",
    why:
      "The bills implicate youth confidentiality, education stability, discharge review, technical violations, and registration duration.",
    next:
      "Watch whether lawmakers add safeguards for youth confidentiality, school use limits, individualized supervision, counsel access, and proportional responses to technical violations.",
  },
  {
    title: "New Hampshire implementation",
    posture:
      "New Hampshire’s RSA 651-B amendments took effect January 1, changing definitions, tiers, and some process language.",
    why:
      "Implementation will determine whether the changes create clarity, over-classification, or meaningful hearing protections.",
    next:
      "Watch agency guidance, court application of hearing and appeal language, and classification decisions under the updated offense categories.",
  },
];

export const teasers = {
  glance: [
    "Florida advanced a broad registry restriction package affecting residence, presence, notice duties, arrest authority, and supervision conditions.",
    "The Sixth Circuit remanded Kentucky’s social-media legal-name disclosure case, keeping anonymous-speech and online-identifier issues live.",
    "California’s SB 680 registration trigger became operative while AB 1568 opened a new fight over registry-termination petitions.",
    "West Virginia, South Carolina, and Maryland introduced January bills affecting housing, online identifiers, youth registry access, supervision, and tiering.",
  ],
  highlights: [
    {
      icon: "🏠",
      title: "Florida SB 212 / HB 45 — Restriction Expansion Package",
      url: "https://www.flsenate.gov/Session/Bill/2026/212",
    },
    {
      icon: "⚖️",
      title: "Sixth Circuit — Doe v. Burlew Social-Media Disclosure Remand",
      url: "https://www.opn.ca6.uscourts.gov/opinions.pdf/26a0023p-06.pdf",
    },
    {
      icon: "📌",
      title: "California SB 680 — New Registration Trigger Operative Jan. 1",
      url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB680",
    },
    {
      icon: "🧭",
      title: "West Virginia Registry Package — Residency, Identifiers, Retroactivity",
      url: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb4135+intr.htm&i=4135&sesstype=RS&yr=2026",
    },
  ],
};
export default function LegislativeTracker_2026_01(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      // no-op
    }
  };

  return (
    <>
      <SEO
        title="January 2026 Legislative Tracker | The SOLAR Project"
        description="January 2026 registry-policy developments affecting registrants, families, relief pathways, online identifiers, residency restrictions, supervision, tiering, and evidence-based reform."
        keywords="sex offense registry, legislative tracker, residency restrictions, registry reform, online identifiers, registration relief, SOLAR Project"
      />

      <main className="bg-slate-100 text-slate-900">
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <Link
              to="/resources/legislative-tracker"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Legislative Tracker
            </Link>

            <div className="mt-8 max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <Badge>Legislative Tracker</Badge>
                <Badge>January 2026 Update</Badge>
                <Badge>State / Courts / Implementation</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                A Restriction-Heavy Start to 2026
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                January’s registry-policy activity leaned sharply toward restriction
                expansion: residency zones, online identifiers, school and child-care
                proximity rules, supervision conditions, tier changes, and new registration
                triggers. This update focuses on what those developments mean for people
                required to register, their families, and evidence-based reform.
              </p>

              <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                  Update scope
                </p>
                <p className="mt-2 text-base leading-7 text-slate-100">
                  Coverage window: January 1 through January 31, 2026, Eastern time.
                  Included items had a meaningful January event such as bill introduction,
                  committee movement, operative date, statutory implementation, or court
                  opinion. Borderline cases are not included in this build.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-slate-100"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </button>
                <a
                  href="#at-a-glance"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  At a Glance
                </a>
                <a
                  href="#key-developments"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Key Developments
                </a>
                <a
                  href="#action-center"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Action Center
                </a>
                <a
                  href="#watchlist"
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Watchlist
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:px-6 md:py-10">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <ShareBar />
          </div>

          <Section id="at-a-glance" eyebrow="At a Glance" title="January leaned toward restriction expansion">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatusCard tone="rose" title="Dominant pattern">
                January activity leaned toward restriction expansion: residency zones,
                online-name and identifier controls, proximity rules, employment
                restrictions, supervision conditions, and added registration triggers.
              </StatusCard>
              <StatusCard tone="amber" title="Strongest January items">
                Florida SB 212 / HB 45, the Sixth Circuit’s Doe v. Burlew remand,
                California SB 680’s operative date, South Carolina H. 4683, and West
                Virginia’s registry package carried the clearest direct impact.
              </StatusCard>
              <StatusCard tone="sky" title="Best relief/removal item">
                California AB 1568 is the main relief-pathway item because it directly
                affects registry-termination petitions. Its movement remains unclear
                until amendments and analyses show whether it creates manageable
                standards or new barriers.
              </StatusCard>
              <StatusCard tone="indigo" title="Highest family-stability concern">
                Florida, South Carolina, and West Virginia raise the strongest housing
                and family concerns because broad exclusion zones can destabilize
                households without individualized risk findings.
              </StatusCard>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Why this update matters
              </p>
              <p className="mt-3 text-base leading-8 text-slate-100">
                The month’s pattern is not just “more bills.” It is a familiar policy
                direction: expanding the geography, paperwork, supervision, and
                public-identification burdens attached to registry status. The key
                question for evidence-based reform is whether these measures prevent
                harm or instead widen instability, housing loss, technical violations,
                and family disruption while leaving real prevention unaddressed.
              </p>
            </div>
          </Section>

          <Section id="key-developments" eyebrow="Key Developments" title="January developments">
            <div className="grid gap-6">
              {developments.map((item) => (
                <DevelopmentCard
                  key={item.title}
                  {...item}
                  copied={copied}
                  onCopy={copyText}
                />
              ))}
            </div>
          </Section>

          <Section id="action-center" eyebrow="Action Center" title="Practical response scripts">
            <p className="-mt-2 mb-5 max-w-3xl text-sm leading-7 text-slate-700">
              These messages are designed for registrants, families, allies, and reform
              supporters. They focus on clarity, due process, stability, individualized
              review, and evidence-based public safety.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {actions.map((action) => (
                <ActionCard
                  key={action.scriptId}
                  {...action}
                  copied={copied}
                  onCopy={copyText}
                />
              ))}
            </div>
          </Section>

          <Section id="watchlist" eyebrow="Rolling Watchlist" title="What carries forward">
            <div className="grid gap-4">
              {watchItems.map((item) => (
                <WatchItem key={item.title} {...item} />
              ))}
            </div>
          </Section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-slate-600" />
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                Source and methodology note
              </h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              This monthly update is based on the approved January 1–31, 2026 item set.
              Sources emphasize official legislature pages, court opinions, statutory
              pages, and bill PDFs. Credible media or context sources are used only where
              helpful and available. The page does not add borderline cases, later-month
              developments, or newly discovered items. It evaluates each development
              through SOLAR’s lens: how the law or policy affects people required to
              register, people with sex-offense convictions, their families, and
              evidence-based reform.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}