import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";

type ChipSet = { movement: string[]; impact: string[]; risk: string[] };
type Source = { label: string; href: string; kind: "official" | "supplemental"; type: string };
type ActionLink = { title: string; why: string; label: string; href: string; message: string };
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

type Metric = { label: string; value: string; body: string };
type WatchItemData = { title: string; posture: string; why: string; next: string[] };

const slug = "2099-01-02";
const canonicalUrl = `https://thesolarproject.org/resources/legislative-tracker/${slug}`;

const tones = {
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-950",
};

function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-white/70 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">{children}</span>;
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-slate-700">{children}</Link>;
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">{children}</a>;
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{metric.value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{metric.body}</p>
    </div>
  );
}

function ChipGroup({ title, labels }: { title: string; labels: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-indigo-700">{title}</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {labels.map((label) => <span key={label} className="rounded-full border border-indigo-200 bg-white px-2.5 py-1 text-xs font-bold text-indigo-800">{label}</span>)}
      </div>
    </div>
  );
}

function SolarAnalysis({ chips, children }: { chips: ChipSet; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">SOLAR analysis</p>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <ChipGroup title="Movement" labels={chips.movement} />
        <ChipGroup title="Impact" labels={chips.impact} />
        <ChipGroup title="Risk / opportunity" labels={chips.risk} />
      </div>
      <div className="mt-3 space-y-2 text-sm leading-6 text-indigo-950">{children}</div>
    </div>
  );
}

function ContentBox({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-xl border border-slate-200 bg-white p-3"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">{title}</p><div className="mt-1 space-y-2 text-sm leading-6 text-slate-800">{children}</div></div>;
}

function SourcePill({ source }: { source: Source }) {
  const official = source.kind === "official";
  return <a href={source.href} target="_blank" rel="noreferrer" title={source.type} className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold underline underline-offset-2 ${official ? "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>{source.label} ↗</a>;
}

function CopyButton({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return <button type="button" onClick={onCopy} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">{copied ? "Copied!" : "Copy message"}</button>;
}

function DevelopmentCard({ development, copiedId, onCopy }: { development: Development; copiedId: string | null; onCopy: (id: string, text: string) => void }) {
  const actionId = `development-${development.id}`;
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${tones[development.tone]}`}>{development.group}</span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">{development.jurisdiction}</span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">{development.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-black leading-snug text-slate-950">{development.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{development.summary}</p>
      <div className="mt-4 grid gap-3">
        <ContentBox title="What changed">{development.changed.map((item, i) => <p key={i}>{item}</p>)}</ContentBox>
        <ContentBox title="Why it matters">{development.matters.map((item, i) => <p key={i}>{item}</p>)}</ContentBox>
        <SolarAnalysis chips={development.chips}>{development.analysis.map((item, i) => <p key={i}>{item}</p>)}</SolarAnalysis>
        <ContentBox title="What to watch"><ul className="list-disc space-y-1 pl-5">{development.watch.map((item, i) => <li key={i}>{item}</li>)}</ul></ContentBox>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{development.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}</div>
      <div className="mt-4 flex flex-wrap gap-2">{development.sources.map((source) => <SourcePill key={source.href} source={source} />)}</div>
      {development.action && <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3"><p className="text-sm font-black text-slate-950">{development.action.title}</p><p className="mt-1 text-sm leading-6 text-slate-700">{development.action.why}</p><div className="mt-3 flex flex-wrap gap-2"><CopyButton copied={copiedId === actionId} onCopy={() => onCopy(actionId, development.action!.message)} /><a href={development.action.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">{development.action.label} ↗</a></div></div>}
    </article>
  );
}

function ActionCard({ action, copied, onCopy }: { action: ActionLink; copied: boolean; onCopy: () => void }) {
  return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><h3 className="font-black text-slate-950">{action.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{action.why}</p><div className="mt-4 flex flex-wrap gap-2"><CopyButton copied={copied} onCopy={onCopy} /><a href={action.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">{action.label} ↗</a></div></div>;
}

function WatchItem({ item }: { item: WatchItemData }) {
  return <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 className="font-black text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Current posture:</span> {item.posture}</p><p className="mt-2 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Why it matters:</span> {item.why}</p><div className="mt-2 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Watch next:</span><ul className="mt-1 list-disc space-y-1 pl-5">{item.next.map((line) => <li key={line}>{line}</li>)}</ul></div></div>;
}

const metrics: Metric[] = [
  { label: "Key Developments", value: "8", body: "Federal bills, state restrictions, a court ruling, and agency implementation shaped the sample month." },
  { label: "Dominant Posture", value: "Mixed", body: "Most sample activity expands burdens, while court and reform examples provide counterpoints." },
  { label: "Rights / Reform Counterpoint", value: "2", body: "A court ruling and technical-violation reform example show how narrow legal limits matter." },
  { label: "Action Paths", value: "3", body: "Top actions focus on legislator lookup, public-comment portals, and implementation safeguards." },
];

const developments: Development[] = [
  {
    id: 1,
    group: "Federal Exclusion Proposals",
    title: "Federal sample bill would deny a stabilizing public benefit by registry status",
    jurisdiction: "Federal",
    date: "Sample date",
    summary: "Shows how to present a registry-status exclusion from a stabilizing public benefit.",
    tone: "rose",
    changed: [<>The <ExternalLink href="https://www.congress.gov/">sample federal bill</ExternalLink> would use sex-offense registration status as a categorical eligibility barrier.</>, "The key issue is status-based exclusion instead of individualized review."],
    matters: ["Public benefits can support treatment, employment capacity, housing stability, medication access, and family stability."],
    analysis: ["This is negative movement because it turns registry status into a gatekeeping device for ordinary stability."],
    watch: ["Whether the bill receives a hearing or companion bill.", "Whether amendments add individualized review or exceptions."],
    chips: { movement: ["Negative movement"], impact: ["Relief exclusion", "Reentry barrier"], risk: ["Watch closely", "Advocacy opening"] },
    tags: ["federal", "exclusion", "public benefits"],
    sources: [{ label: "Congress.gov", href: "https://www.congress.gov/", kind: "official", type: "official federal legislative source" }],
    action: { title: "Oppose status-based benefit exclusion", why: "Categorical exclusion can destabilize treatment, work, housing, and family stability.", label: "Find your member of Congress", href: "https://www.congress.gov/members/find-your-member", message: "Please oppose categorical public-benefit exclusions based only on registry status. Any restriction should be narrow, evidence-based, and include individualized review." },
  },
  {
    id: 2,
    group: "Restriction Expansion / Compliance Burden",
    title: "State sample SB 100 / HB 200 would expand place-based restrictions",
    jurisdiction: "Sample State",
    date: "Sample date",
    summary: "Shows companion bill linking and concrete explanation of place-based restrictions.",
    tone: "amber",
    changed: [<> <ExternalLink href="https://example.com/sample-sb-100">Sample SB 100</ExternalLink> and <ExternalLink href="https://example.com/sample-hb-200">Sample HB 200</ExternalLink> would expand restrictions around schools, parks, child-care facilities, and recreation spaces.</>],
    matters: ["Place-based restrictions can make ordinary geography legally risky, especially when covered locations are common and boundaries are unclear."],
    analysis: ["This is negative movement because it expands exclusion zones and increases compliance-trap risk."],
    watch: ["Whether final text narrows covered places or distances.", "Whether companion bills remain identical or diverge."],
    chips: { movement: ["Negative movement"], impact: ["Compliance burden", "Housing barrier"], risk: ["Implementation risk", "Clarification needed"] },
    tags: ["state", "housing", "companion bills"],
    sources: [
      { label: "Sample SB 100 official page", href: "https://example.com/sample-sb-100", kind: "official", type: "official bill page" },
      { label: "Sample HB 200 official page", href: "https://example.com/sample-hb-200", kind: "official", type: "official companion bill page" },
    ],
    action: { title: "Ask state lawmakers to narrow restrictions", why: "Place-based restrictions can create housing and family-stability burdens unless narrow and clearly mapped.", label: "Find your state legislators", href: "https://openstates.org/find_your_legislator/", message: "Please narrow any place-based registry restriction and include clear maps, practical exceptions, and evidence-based justification." },
  },
  {
    id: 3,
    group: "Courts & Rights",
    title: "Sample court decision required proof of the exact registry duty charged",
    jurisdiction: "Sample State Supreme Court",
    date: "Sample date",
    summary: "Shows positive movement when a court requires precision in registry prosecutions.",
    tone: "emerald",
    changed: [<>The <ExternalLink href="https://example.com/sample-opinion">sample court opinion</ExternalLink> held that prosecutors must prove the specific registry duty charged.</>],
    matters: ["Technical registry cases often turn on deadlines, addresses, travel, temporary lodging, or reporting details."],
    analysis: ["This is positive movement because it requires precision before punishment."],
    watch: ["Whether lower courts apply the ruling broadly or narrowly."],
    chips: { movement: ["Positive movement"], impact: ["Due-process concern", "Compliance clarity"], risk: ["Watch closely"] },
    tags: ["court", "due process"],
    sources: [{ label: "Sample court opinion", href: "https://example.com/sample-opinion", kind: "official", type: "official court opinion" }],
  },
  {
    id: 4,
    group: "Agencies / Implementation",
    title: "Sample agency guidance opened online-identifier implementation questions",
    jurisdiction: "Sample Agency",
    date: "Sample date",
    summary: "Shows unclear movement where implementation details determine practical burden.",
    tone: "indigo",
    changed: [<>The <ExternalLink href="https://example.com/sample-agency-guidance">sample agency guidance</ExternalLink> would interpret online identifier reporting and invite public comment.</>],
    matters: ["Online-identifier rules can affect work, support groups, family contact, and ordinary digital life."],
    analysis: ["This is unclear movement because implementation can create clarity or new reporting traps."],
    watch: ["Whether final guidance defines covered platforms narrowly.", "Whether shared and employment accounts are addressed."],
    chips: { movement: ["Unclear movement"], impact: ["Online identifiers", "Agency implementation"], risk: ["Public-comment opportunity", "Implementation risk"] },
    tags: ["agency", "online identifiers"],
    sources: [{ label: "Sample agency guidance", href: "https://example.com/sample-agency-guidance", kind: "official", type: "official agency guidance" }],
    action: { title: "Submit implementation comments", why: "Public comments can document how online rules affect work, family contact, shared devices, and ordinary digital life.", label: "Open comment portal", href: "https://example.com/sample-comment-portal", message: "Please ensure online-identifier guidance is narrow, clear, and workable for shared devices, employment platforms, and family communications." },
  },
];

const watchlist: WatchItemData[] = [
  { title: "Sample federal exclusion bills", posture: "Introduced and awaiting committee activity.", why: "Federal exclusion bills can normalize registry status as a gatekeeping category.", next: ["Watch for hearings, companion bills, amendments, or sponsor additions."] },
  { title: "Sample state restriction package", posture: "Companion bills pending in separate chambers.", why: "Place-based restrictions can create housing, family, transportation, and supervision burdens.", next: ["Compare House and Senate text for divergence.", "Watch for maps, exceptions, and guidance."] },
  { title: "Sample online-identifier guidance", posture: "Implementation guidance under review.", why: "Agency interpretation will decide whether rules clarify obligations or expand technical-violation exposure.", next: ["Monitor final guidance and FAQ language."] },
];

const actionCenterItems = developments.filter((d) => d.action).slice(0, 3).map((d) => d.action!) as ActionLink[];

export default function LegislativeTrackerGoldenTemplateThroughlinePreview(): JSX.Element {
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

  const grouped = developments.reduce<Record<string, Development[]>>((acc, item) => {
    acc[item.group] = acc[item.group] ?? [];
    acc[item.group].push(item);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-slate-100">
      <SEO title="Legislative Tracker — Golden Template Preview With Throughline | The SOLAR Project" description="Live preview of the SOLAR Legislative Tracker monthly scaffold with a Monthly Throughline section." canonical={canonicalUrl} />

      <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <Link to="/resources/legislative-tracker" className="text-sm font-semibold text-white/90 underline underline-offset-4 hover:text-white print:hidden">← Back to Legislative Tracker</Link>
          <div className="mt-5 flex flex-wrap gap-2"><Badge>Legislative Tracker</Badge><Badge>Golden Template</Badge><Badge>With Monthly Throughline</Badge></div>
          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">Legislative Tracker — Golden Template Preview</h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">A live scaffold preview showing how monthly Legislative Tracker pages should combine a strong hero, January-style At a Glance metrics, a Monthly Throughline with internal SOLAR links, grouped developments, action cards, watchlist items, and source discipline.</p>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100"><p><span className="font-bold text-white">Update scope:</span> This is dummy preview content dated 2099-01-02. It exists only to render and evaluate the canonical scaffold before applying it to real monthly updates.</p></div>
          <div className="mt-6 flex flex-wrap gap-3 print:hidden"><button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-bold text-slate-900 shadow hover:bg-slate-100">Print</button><a href="#glance" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15">At a Glance</a><a href="#throughline" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15">Throughline</a><a href="#developments" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15">Key Developments</a><a href="#actions" className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15">Action Center</a></div>
          <div className="mt-6"><ShareBar /></div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
        <Section id="glance" eyebrow="At a Glance" title="What the template shows"><div className="grid gap-4 md:grid-cols-4">{metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-slate-950">Why this update matters</h3><p className="mt-2 text-sm leading-6 text-slate-700">This At a Glance block gives readers the count, posture, rights or reform counterpoint, and action paths before asking them to read dense policy cards.</p></div></Section>

        <Section id="throughline" eyebrow="Monthly Throughline" title="The bigger pattern behind this update"><div className="space-y-4 text-sm leading-7 text-slate-700"><p>This sample month shows how registry policy can expand through ordinary systems rather than through one obvious registry overhaul. A health-care exclusion, a shelter rule, a housing restriction, an online-identifier guidance document, and a technical-violation case may look separate on paper, but together they test whether policy is built around <InternalLink to="/advocacy#position-statement">evidence-based registry reform</InternalLink> or permanent status exclusion.</p><p>The throughline should also help readers find the rest of SOLAR. A month dominated by state restrictions should naturally point readers toward <InternalLink to="/resources">practical SOLAR guides</InternalLink> and the <InternalLink to="/resources/legislative-tracker">Legislative Tracker archive</InternalLink>. A month dominated by institutional-risk stories might instead connect to <InternalLink to="/resources/accountability-watch">Accountability Watch</InternalLink>.</p></div></Section>

        <Section id="developments" eyebrow="Key Developments" title="Template development cards"><div className="space-y-6">{Object.entries(grouped).map(([group, items]) => <div key={group} className="space-y-3"><div className="rounded-2xl border border-slate-200 bg-white p-3"><h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">{group}</h3></div><div className="grid gap-4">{items.map((development) => <DevelopmentCard key={development.id} development={development} copiedId={copiedId} onCopy={copyText} />)}</div></div>)}</div></Section>

        <Section id="actions" eyebrow="Action Center" title="Most useful action paths"><p className="text-sm leading-6 text-slate-700">The Action Center should surface the top two to four paths of least resistance. It should not repeat every item-level action button.</p><div className="grid gap-4 md:grid-cols-2">{actionCenterItems.map((action, index) => <ActionCard key={action.title} action={action} copied={copiedId === `action-${index}`} onCopy={() => copyText(`action-${index}`, action.message)} />)}</div></Section>

        <Section id="watchlist" eyebrow="Rolling Watchlist" title="What to watch next"><div className="grid gap-4">{watchlist.map((item) => <WatchItem key={item.title} item={item} />)}</div></Section>

        <Section id="methodology" eyebrow="Source Note" title="How SOLAR tracks and vets this"><div className="space-y-3 text-sm leading-6 text-slate-700"><p>SOLAR prioritizes official sources first: bill pages, enacted laws, court opinions, agency notices, government reports, and official public-comment portals. Reporting, advocacy explainers, and civic-data sources may be used as supplemental context, but they should not replace official sources when official sources are available.</p><p>The purpose of this tracker is to identify legal and policy developments that affect registry duties, reentry, housing, family stability, relief pathways, due process, supervision, and evidence-based reform.</p></div></Section>
      </div>
    </main>
  );
}

export const teasers = {
  glance: [
    "Golden template preview now includes a Monthly Throughline with internal SOLAR links.",
    "At a Glance uses four metric cards plus a why-it-matters synthesis card.",
    "Development cards show official/supplemental sources, SOLAR chips, action paths, and watchlist structure.",
  ],
  highlights: [
    "Monthly Throughline connects the update to SOLAR’s broader evidence-based policy frame.",
    "Dummy federal, state, court, and agency examples cover common development types.",
    "Action Center keeps reader actions distinct from source links.",
  ],
};
