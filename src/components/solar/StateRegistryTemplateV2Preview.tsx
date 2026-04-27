import React from "react";
import type { StateRegistryData } from "./StateRegistryTemplate";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Database,
  FileText,
  Home,
  MapPin,
  Plane,
  Shield,
  Users,
} from "lucide-react";

type QuickAnswer = {
  question: string;
  answer: string;
  dependsOn: string[];
  verify: string;
  icon: React.ReactNode;
};

type SnapshotCard = {
  label: string;
  status: string;
  body: string;
  tone: "rose" | "amber" | "emerald" | "sky" | "slate" | "indigo";
};

const toneClasses: Record<SnapshotCard["tone"], string> = {
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  sky: "border-sky-200 bg-sky-50 text-sky-950",
  slate: "border-slate-200 bg-slate-50 text-slate-900",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-950",
};

export default function StateRegistryTemplateV2Preview({
  data,
}: {
  data: StateRegistryData;
}) {
  const d = data;

  const snapshot: SnapshotCard[] = [
    {
      label: "Where can I live?",
      status: inferResidenceStatus(d),
      body: trimSummary(
        d.highlights?.residency ||
          d.residencyPresence ||
          "Check state law, local rules, and supervision conditions before signing a lease."
      ),
      tone: "amber",
    },
    {
      label: "Where can I go?",
      status: inferPresenceStatus(d),
      body: trimSummary(
        d.highlights?.presence ||
          d.residencyPresence ||
          "Presence and loitering rules may depend on level, supervision, location type, and written exceptions."
      ),
      tone: "sky",
    },
    {
      label: "How long does it last?",
      status: inferDurationStatus(d),
      body: trimSummary(
        d.highlights?.duration ||
          "Registration duration can depend on level, offense, date, removal eligibility, and out-of-state treatment."
      ),
      tone: "rose",
    },
    {
      label: "Who can see it?",
      status: inferPublicStatus(d),
      body: trimSummary(
        d.highlights?.tiering ||
          first(d.publicWebsiteExposure) ||
          "Public website exposure varies by level, risk category, offense, and notification rules."
      ),
      tone: "indigo",
    },
    {
      label: "How often do I report?",
      status: inferReportingStatus(d),
      body: trimSummary(
        d.atAGlance?.verificationCadence ||
          "Reporting may include initial registration, regular check-ins, address changes, travel, and online identifiers."
      ),
      tone: "slate",
    },
    {
      label: "Can I get removed?",
      status: inferRemovalStatus(d),
      body: trimSummary(
        first(d.reliefPaths) ||
          "Removal or reclassification may depend on level, time registered, offense type, risk category, and compliance history."
      ),
      tone: "emerald",
    },
  ];

  const quickAnswers: QuickAnswer[] = [
    {
      question: "Where can I live?",
      answer: plain(
        d.highlights?.residency ||
          d.residencyPresence ||
          "Housing rules vary by state law, local rules, and supervision status."
      ),
      dependsOn: [
        "offense category",
        "victim age",
        "level or court order",
        "local rules",
        "supervision conditions",
      ],
      verify:
        "Confirm the address with the registering agency, supervision officer, or counsel before signing a lease.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      question: "Where can I go?",
      answer: plain(
        d.highlights?.presence ||
          "Some places may be off-limits, especially schools, parks, child-care locations, youth events, or other child-focused places."
      ),
      dependsOn: [
        "level or court order",
        "written exceptions",
        "supervision status",
        "event type",
        "local enforcement practice",
      ],
      verify:
        "Ask whether exceptions exist for voting, court, treatment, worship, employment, or obligations involving your own child.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      question: "Where can I work or go to school?",
      answer: plain(
        first(d.employmentEducationInternet) ||
          "Work and school rules usually include reporting duties and may include setting-specific restrictions."
      ),
      dependsOn: [
        "job setting",
        "school or youth access",
        "licensing rules",
        "supervision terms",
        "public notification risk",
      ],
      verify:
        "Check both registry reporting rules and any separate employment, licensing, or supervision restrictions.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      question: "Who will know, and what will they see?",
      answer: plain(
        first(d.publicWebsiteExposure) ||
          "Public disclosure varies by state and may depend on level, risk category, offense, and notification rules."
      ),
      dependsOn: [
        "public website rules",
        "level or risk category",
        "community notification",
        "school or employer notice",
        "law-enforcement access",
      ],
      verify:
        "Review the official public registry and ask whether lower-level or law-enforcement-only information can still be released on request.",
      icon: <Database className="h-5 w-5" />,
    },
    {
      question: "How often do I have to report?",
      answer: plain(
        d.atAGlance?.verificationCadence ||
          first(d.verificationInPerson) ||
          "Check-in frequency depends on level, designation, and housing status."
      ),
      dependsOn: [
        "level",
        "designation",
        "homeless or transient status",
        "change events",
        "check-in windows",
      ],
      verify:
        "Ask for the next exact reporting date in writing and keep proof of every in-person visit or submission.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "How long will this last, and can I get removed?",
      answer: plain(
        d.highlights?.duration ||
          first(d.reliefPaths) ||
          "Duration and removal eligibility depend on state law, level, time registered, and compliance history."
      ),
      dependsOn: [
        "duration category",
        "level or risk category",
        "risk assessment",
        "time registered",
        "prior compliance",
        "juvenile or adult case",
      ],
      verify:
        "Confirm whether the state offers removal, reclassification, reduced public posting, or only narrow court-based options.",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      question: "What if I move, visit, or travel?",
      answer: plain(
        first(d.visitingTraveling) ||
          first(d.travelInterstate) ||
          "Moving and visiting rules can trigger new registration duties even without a permanent move."
      ),
      dependsOn: [
        "length of stay",
        "temporary lodging",
        "employment or school",
        "international travel",
        "origin-state notice rules",
      ],
      verify:
        "Check both the state you are leaving and the state you are entering before travel. Keep itinerary and agency-contact records.",
      icon: <Plane className="h-5 w-5" />,
    },
    {
      question: "What if I do not have stable housing?",
      answer: plain(
        findHousingNote(d) ||
          "People without stable housing often face more frequent reporting and must document location information carefully."
      ),
      dependsOn: [
        "transient definition",
        "shelter rules",
        "monthly or more frequent check-ins",
        "local documentation practice",
      ],
      verify:
        "Ask what exact location description is required and get written proof of each check-in.",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-sm md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
          State Registry Guide Preview
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight !text-white md:text-3xl">
          {d.state}: Start with the questions people actually ask
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 !text-slate-200 md:text-base">
          This redesigned scaffold puts practical answers first, then shows what can change the answer and where to double-check. The goal is to be useful in the first minute without pretending registry law is simple.
        </p>
        <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-6 !text-slate-100">
          <strong className="text-white">Important:</strong> This preview uses Sample State data. For real states, official sources and last-reviewed dates must control.
        </div>
      </section>

      <Section
        eyebrow="Start Here"
        title="The basics most people need before reading the fine print"
        intro="Start here for the big picture. These cards show what usually matters most for daily life. The next section explains what can change the answer and what to double-check before you make plans."
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {snapshot.map((card) => (
            <div key={card.label} className={`rounded-xl border p-4 ${toneClasses[card.tone]}`}>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] opacity-70">
                {card.label}
              </p>
              <p className="mt-1 text-lg font-black">{card.status}</p>
              <p className="mt-2 text-sm leading-6 opacity-90">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Common Questions"
        title="Plain-language answers, with what to double-check"
        intro="Use these cards when you need a practical answer first. The details below explain the rules, deadlines, exceptions, and official sources behind each answer."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {quickAnswers.map((qa) => (
            <article key={qa.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <div className="rounded-lg border border-slate-200 bg-white p-2">
                  {qa.icon}
                </div>
                <h3 className="font-black leading-snug text-slate-950">{qa.question}</h3>
              </div>

              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Quick answer
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">{qa.answer}</p>
              </div>

              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  What can change this
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {qa.dependsOn.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                  Before you make plans
                </p>
                <p className="mt-1">{qa.verify}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Top Things to Know" title="Plain-language takeaways">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Registration basics" icon={<FileText className="h-5 w-5" />}>
            <MarkdownText text={d.atAGlance?.mustRegister || d.whoMustRegister || "Verify who must register using the state’s official statute and registry agency."} />
          </InfoCard>
          <InfoCard title="Deadlines are compliance traps" icon={<Clock className="h-5 w-5" />}>
            <MarkdownText text={d.atAGlance?.initialDeadline || first(d.deadlinesReporting) || "Initial and change-reporting deadlines can be short. Ask for the exact deadline in writing."} />
          </InfoCard>
          <InfoCard title="Supervision can be stricter" icon={<Shield className="h-5 w-5" />}>
            Registry law is only the baseline. Probation, parole, treatment, housing approval, or court orders may add stricter rules.
          </InfoCard>
          <InfoCard title="Keep proof" icon={<BookOpen className="h-5 w-5" />}>
            Keep a compliance folder with stamped receipts, screenshots, confirmation numbers, agency names, and dates for every update.
          </InfoCard>
        </div>
      </Section>

      <Section eyebrow="Official Sources" title="Start with these sources">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <SourceCard label="Statutes" href={d.atAGlance?.officialLinks?.statuteIndex} />
          <SourceCard label="Administrative rules" href={d.atAGlance?.officialLinks?.adminRules} />
          <SourceCard label="Registry agency" href={d.atAGlance?.officialLinks?.statePoliceRegistry} />
          <SourceCard label="Forms / removal portal" href={d.atAGlance?.officialLinks?.formsPortal} />
          <SourceCard label="Public registry" href={d.atAGlance?.officialLinks?.publicWebsite} />
        </div>
      </Section>

      <Section
        eyebrow="The Details"
        title="The rules behind the quick answers"
        intro="Use this section when you need the fuller rule, a reporting trigger, an exception, or the source-backed explanation behind a quick answer above."
      >
        <DetailGrid
          items={[
            { title: "Who must register", icon: <Users className="h-5 w-5" />, content: d.whoMustRegister },
            { title: "Deadlines & reporting", icon: <Clock className="h-5 w-5" />, list: d.deadlinesReporting },
            { title: "Verification", icon: <Shield className="h-5 w-5" />, list: d.verificationInPerson },
            { title: "Residency & presence", icon: <MapPin className="h-5 w-5" />, content: d.residencyPresence },
            { title: "Employment, education & internet", icon: <Users className="h-5 w-5" />, list: d.employmentEducationInternet },
            { title: "Public website exposure", icon: <Database className="h-5 w-5" />, list: d.publicWebsiteExposure },
          ]}
        />
      </Section>

      <Section eyebrow="Moving, Removal & Special Situations" title="What can change over time">
        <DetailGrid
          items={[
            { title: "Removal / reclassification", icon: <CheckCircle className="h-5 w-5" />, list: d.reliefPaths },
            { title: "Moving or interstate travel", icon: <Plane className="h-5 w-5" />, list: d.travelInterstate },
            { title: "Visiting or temporary lodging", icon: <Plane className="h-5 w-5" />, list: d.visitingTraveling },
            { title: "Special populations", icon: <Users className="h-5 w-5" />, list: d.specialPopulations },
            { title: "Costs & fees", icon: <FileText className="h-5 w-5" />, list: d.costs },
            { title: "Compliance & enforcement", icon: <AlertTriangle className="h-5 w-5" />, content: d.complianceEnforcement },
          ]}
        />
      </Section>

      <Section eyebrow="Practical Checklist" title="Before you move, report, petition, or travel">
        <div className="grid gap-4 md:grid-cols-2">
          <Checklist title="New arrival / first 30 days" items={d.checklistsScripts?.newArrivalChecklist} />
          <Checklist title="Moving out / travel" items={d.checklistsScripts?.movingOutChecklist} />
        </div>
        {(d.checklistsScripts?.recordsRequestTemplate || d.checklistsScripts?.reliefPetitionOutline) && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {d.checklistsScripts.recordsRequestTemplate && (
              <ScriptBox title="Records request template" text={d.checklistsScripts.recordsRequestTemplate} />
            )}
            {d.checklistsScripts.reliefPetitionOutline && (
              <ScriptBox title="Removal / reclassification planning notes" text={d.checklistsScripts.reliefPetitionOutline} />
            )}
          </div>
        )}
      </Section>

      <Section eyebrow="Recent Changes" title="Recent changes and litigation">
        {Array.isArray(d.recentChangesLitigation) && d.recentChangesLitigation.length > 0 ? (
          <div className="grid gap-3">
            {d.recentChangesLitigation.map((item: any, index) => (
              <RecentChangeCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-700">No recent changes listed.</p>
        )}
      </Section>

      <Section eyebrow="Sources & Methodology" title="How to verify this page">
        <div className="space-y-3 text-sm leading-6 text-slate-700">
          <p>
            State registry pages should prioritize official statutes, administrative rules, registry agency guidance, official forms, court decisions, and agency pages. Practical summaries are meant to make the rules understandable, not replace legal advice.
          </p>
          <p>
            Last reviewed: {safeDate(d.lastReviewedUTC)}. For any decision about housing, travel, reporting, removal, or supervision, verify with the official agency or qualified counsel before acting.
          </p>
        </div>
        <div className="mt-4 grid gap-2">
          {Array.isArray(d.citations) && d.citations.map((citation: any, index) => (
            <CitationRow key={index} citation={citation} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{intro}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function InfoCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-2 font-black text-slate-950">{icon}<span>{title}</span></div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function SourceCard({ label, href }: { label: string; href?: string }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-bold text-blue-900 underline underline-offset-4 hover:bg-blue-100">
      {label} <ArrowRight className="ml-1 inline h-4 w-4" />
    </a>
  );
}

function DetailGrid({ items }: { items: Array<{ title: string; icon: React.ReactNode; content?: string; list?: string[] }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-2 font-black text-slate-950">{item.icon}<h3>{item.title}</h3></div>
          <div className="mt-3 text-sm leading-6 text-slate-700">
            {item.content ? <MarkdownText text={item.content} /> : <RichList items={item.list} />}
          </div>
        </article>
      ))}
    </div>
  );
}

function RichList({ items }: { items?: string[] }) {
  if (!items?.length) return <p>—</p>;
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => <li key={index}><MarkdownText text={item} /></li>)}
    </ul>
  );
}

function Checklist({ title, items }: { title: string; items?: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-700"><RichList items={items} /></div>
    </div>
  );
}

function ScriptBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <h3 className="font-black text-amber-950">{title}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-amber-950"><MarkdownText text={text} /></p>
    </div>
  );
}

function RecentChangeCard({ item }: { item: any }) {
  const title = item.name || item.bill || item.cite || "Recent update";
  const body = item.holding || item.summary || item.effective || "";
  const label = item.type || "update";
  return (
    <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <h3 className="mt-1 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700"><MarkdownText text={body} /></p>
      {item.link && <a href={item.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-bold text-blue-800 underline underline-offset-4">Source <ArrowRight className="ml-1 h-4 w-4" /></a>}
    </article>
  );
}

function CitationRow({ citation }: { citation: any }) {
  const label = typeof citation === "string" ? citation : citation.label || citation.url;
  const href = typeof citation === "string" ? citation : citation.url;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 underline underline-offset-4 hover:bg-slate-100">
      {label}
    </a>
  );
}

function MarkdownText({ text = "" }: { text?: string }) {
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let out = escape(text);
  out = out.replace(/\[([^\]]+)\]\s*\((https?:\/\/[^\s)]+)\)/g, (_m, label, url) => `<a class="underline" target="_blank" rel="noopener" href="${url}">${escape(label)}</a>`);
  out = out.replace(/(?<!["'=\]])\bhttps?:\/\/[^\s)]+/g, (url) => `<a class="underline" target="_blank" rel="noopener" href="${url}">${url}</a>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return <span dangerouslySetInnerHTML={{ __html: out }} />;
}

function first(items?: string[]) {
  return Array.isArray(items) && items.length ? items[0] : "";
}

function plain(value: string) {
  return stripMarkdown(value || "");
}

function stripMarkdown(value: string) {
  return value
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function trimSummary(value: string, max = 185) {
  const clean = stripMarkdown(value || "");
  if (clean.length <= max) return clean;
  const clipped = clean.slice(0, max);
  const sentenceBreak = clipped.lastIndexOf(". ");
  if (sentenceBreak > 80) return clipped.slice(0, sentenceBreak + 1);
  return `${clipped.trim()}…`;
}

function findHousingNote(d: StateRegistryData) {
  const haystack = [
    ...(d.atAGlance?.topGotchas || []),
    ...(d.specialPopulations || []),
    ...(d.verificationInPerson || []),
  ];
  return haystack.find((line) => /transient|homeless|stable housing|without stable/i.test(line));
}

function safeDate(value?: string) {
  if (!value) return "not listed";
  try {
    return new Date(value).toLocaleDateString();
  } catch {
    return value;
  }
}

function inferResidenceStatus(d: StateRegistryData) {
  const text = stripMarkdown(`${d.highlights?.residency || ""} ${d.residencyPresence || ""}`).toLowerCase();
  if (text.includes("no statewide") || text.includes("no blanket")) return "No blanket statewide address ban";
  if (text.includes("2,500") || text.includes("2500")) return "Large address buffer zones";
  if (text.includes("1,000") || text.includes("1000")) return "Address limits for many people";
  if (text.includes("local")) return "Check state and local rules";
  return "Confirm before leasing";
}

function inferPresenceStatus(d: StateRegistryData) {
  const text = stripMarkdown(`${d.highlights?.presence || ""} ${d.residencyPresence || ""}`).toLowerCase();
  if (text.includes("no general") || text.includes("does not authorize local")) return "No broad statewide place ban";
  if (text.includes("level 3") || text.includes("tier iii")) return "Some places may be off-limits";
  if (text.includes("schools") || text.includes("parks") || text.includes("child")) return "Child-focused places may be restricted";
  return "Check covered places";
}

function inferDurationStatus(d: StateRegistryData) {
  const text = stripMarkdown(`${d.highlights?.duration || ""} ${first(d.reliefPaths)}`).toLowerCase();
  if (text.includes("10 years") && text.includes("life")) return "Often years, sometimes life";
  if (text.includes("lifetime") || text.includes("for life")) return "Usually lifetime unless removed";
  if (text.includes("relief") || text.includes("removal")) return "Removal may be available";
  return "Check duration carefully";
}

function inferPublicStatus(d: StateRegistryData) {
  const text = stripMarkdown(`${d.highlights?.tiering || ""} ${first(d.publicWebsiteExposure)}`).toLowerCase();
  if (text.includes("only level 3")) return "Only higher levels are public";
  if (text.includes("tier iii") || text.includes("tier 3")) return "Public posting depends on level";
  if (text.includes("public")) return "Some information may be public";
  return "Check disclosure rules";
}

function inferReportingStatus(d: StateRegistryData) {
  const text = stripMarkdown(d.atAGlance?.verificationCadence || first(d.verificationInPerson)).toLowerCase();
  if (text.includes("quarterly") && text.includes("annual")) return "Set reporting reminders early";
  if (text.includes("quarterly")) return "Quarterly check-ins for some";
  if (text.includes("annual")) return "Annual check-in baseline";
  return "Confirm your next date";
}

function inferRemovalStatus(d: StateRegistryData) {
  const text = stripMarkdown(d.highlights?.duration || first(d.reliefPaths)).toLowerCase();
  if (text.includes("no broad") || text.includes("limited")) return "Removal may be limited";
  if (text.includes("level 1") || text.includes("tier i") || text.includes("petition")) return "There may be a way to ask";
  if (text.includes("lifetime")) return "Removal may be difficult";
  return "Check removal options";
}
