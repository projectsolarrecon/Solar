import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO";
import ShareBar from "../../../components/solar/ShareBar";
import {
  ArrowLeft,
  Clipboard,
  ExternalLink,
  FileText,
  Gavel,
  Printer,
  Scale,
  ShieldCheck,
} from "lucide-react";

type Tone = "sky" | "amber" | "emerald" | "slate" | "rose" | "indigo";

type Source = {
  label: string;
  href: string;
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
  children: React.ReactNode;
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
    <div className={`rounded-xl border p-4 ${tones[tone]}`}>
      <p className="font-bold">{title}</p>
      <div className="mt-2 text-sm leading-6 opacity-90">{children}</div>
    </div>
  );
}

function SourcePill({ source }: { source: Source }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 underline underline-offset-2 hover:bg-blue-100"
    >
      {source.label}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}

function DevelopmentCard({
  tone,
  label,
  title,
  whatChanged,
  whyItMatters,
  whatToWatch,
  tags,
  sources,
  scriptId,
  scriptLabel = "Copy talking point",
  scriptText,
  copied,
  onCopy,
}: {
  tone: Tone;
  label: string;
  title: string;
  whatChanged: React.ReactNode;
  whyItMatters: React.ReactNode;
  whatToWatch: React.ReactNode;
  tags: string[];
  sources: Source[];
  scriptId?: string;
  scriptLabel?: string;
  scriptText?: string;
  copied?: string | null;
  onCopy?: (id: string, text: string) => void;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <span
            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${tones[tone]}`}
          >
            {label}
          </span>
          <h3 className="mt-3 text-lg font-black leading-snug text-slate-950">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            What changed
          </p>
          <div className="mt-1 text-sm leading-6 text-slate-800">
            {whatChanged}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Why it matters
          </p>
          <div className="mt-1 text-sm leading-6 text-slate-800">
            {whyItMatters}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            What to watch
          </p>
          <div className="mt-1 text-sm leading-6 text-slate-800">
            {whatToWatch}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {sources.map((source) => (
          <SourcePill key={source.href} source={source} />
        ))}

        {scriptId && scriptText && onCopy && (
          <button
            onClick={() => onCopy(scriptId, scriptText)}
            className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 hover:bg-emerald-100"
          >
            <Clipboard className="h-3 w-3" />
            {copied === scriptId ? "Copied!" : scriptLabel}
          </button>
        )}
      </div>
    </article>
  );
}

function ActionCard({
  title,
  children,
  scriptId,
  script,
  copied,
  onCopy,
}: {
  title: string;
  children: React.ReactNode;
  scriptId: string;
  script: string;
  copied: string | null;
  onCopy: (id: string, text: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black text-slate-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
      <button
        onClick={() => onCopy(scriptId, script)}
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        <Clipboard className="h-4 w-4" />
        {copied === scriptId ? "Copied!" : "Copy message"}
      </button>
    </div>
  );
}

function WatchItem({
  title,
  posture,
  why,
  next,
}: {
  title: string;
  posture: string;
  why: string;
  next: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Current posture:</span>{" "}
        {posture}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Why it matters:</span> {why}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">Watch next:</span> {next}
      </p>
    </div>
  );
}

export default function LegislativeTracker_2025_12_07(): JSX.Element {
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
    <main className="min-h-screen bg-slate-100">
      <SEO
        title="Legislative Tracker — December 2025 Update | SOLAR"
        description="Federal transparency orders, congressional oversight pressure, and Illinois Clean Slate coverage expose the tension between symbolic reform, registry exclusions, and real accountability."
      />

      {/* Hero */}
      <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <Link
            to="/resources/legislative-tracker"
            className="text-sm font-semibold text-white/90 underline underline-offset-4 hover:text-white print:hidden"
          >
            <ArrowLeft className="mr-1 inline h-4 w-4" />
            Back to Legislative Tracker
          </Link>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Legislative Tracker</Badge>
            <Badge>December 2025 Update</Badge>
            <Badge>Federal / State / Courts</Badge>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
            Transparency, Exclusion, and the Limits of Symbolic Reform
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            This update tracks a federal transparency fight, congressional
            oversight pressure, and state record-relief coverage that exposes a
            familiar policy gap: lawmakers often know how to demand openness and
            reform in high-profile moments, while ordinary registry policy
            remains opaque, exclusionary, and hard for impacted people to
            navigate.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <div className="mb-2 flex items-center gap-2 font-bold">
              <Scale className="h-4 w-4" />
              Update scope
            </div>
            Coverage window: Nov. 30 through Dec. 6, 2025. Core items include
            the first judicial implementation order under the Epstein Files
            Transparency Act, congressional oversight pressure on DOJ, and
            Illinois Clean Slate coverage highlighting continued exclusion of
            people required to register.
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-bold text-slate-900 shadow hover:bg-slate-100"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
            <a
              href="#glance"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              🗓️ At a Glance
            </a>
            <a
              href="#developments"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              ⭐ Key Developments
            </a>
            <a
              href="#action"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              📣 Action Center
            </a>
            <a
              href="#watchlist"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              📜 Watchlist
            </a>
          </div>

          <div className="mt-6">
            <ShareBar />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
        {/* At a Glance */}
        <Section id="glance" eyebrow="Plain-language summary" title="At a Glance">
          <div className="grid gap-4 md:grid-cols-3">
            <StatusCard tone="sky" title="⚖️ Court order">
              A federal judge ordered release of Epstein-related grand-jury
              transcripts under the newly enacted transparency law, with DOJ
              facing a Dec. 19 deadline.
            </StatusCard>

            <StatusCard tone="amber" title="🏛️ Oversight pressure">
              Members of Congress pressed DOJ for a briefing on implementation,
              keeping the transparency law in the public-policy spotlight.
            </StatusCard>

            <StatusCard tone="emerald" title="📣 Relief gap">
              Illinois Clean Slate coverage highlighted a familiar reform
              pattern: broad record-relief progress still leaves registrants
              excluded from automatic relief.
            </StatusCard>
          </div>

          <div className="rounded-2xl border border-slate-300 bg-slate-950 p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              Why this update matters
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              The week’s thread is not just transparency. It is selective
              reform. In high-profile cases, lawmakers can move quickly to
              demand disclosure, oversight, and accountability. In registry
              policy, the same urgency often disappears, leaving people and
              families to navigate confusing rules, broad exclusions, and
              compliance systems that punish mistakes long before they clarify
              obligations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <StatusCard tone="slate" title="Gaps this update">
              Few new registry-specific statutes or major registry cases moved
              during this window. Federal transparency issues and state
              record-relief exclusions carried the update.
            </StatusCard>

            <StatusCard tone="slate" title="What’s ahead">
              Watch the Dec. 19 DOJ deadline, any further federal court orders,
              and the Illinois Clean Slate implementation process as automatic
              relief moves toward a 2029 launch.
            </StatusCard>
          </div>
        </Section>

        {/* Key Developments */}
        <Section
          id="developments"
          eyebrow="What changed, why it matters, what to watch"
          title="Key Developments"
        >
          <DevelopmentCard
            tone="sky"
            label="Court order"
            title="Florida Federal Court — Epstein Files Transparency Act Implementation"
            whatChanged={
              <p>
                U.S. District Judge Rodney Smith ordered DOJ to release
                grand-jury transcripts from the 2005–2007 Epstein federal probe
                by Dec. 19 under the new Epstein Files Transparency Act.
              </p>
            }
            whyItMatters={
              <p>
                The order shows how quickly Congress and courts can create and
                enforce transparency mechanisms when political attention is
                focused. For SOLAR, the contrast matters: registry systems
                routinely impose life-altering public consequences while leaving
                many rules, relief pathways, and implementation details opaque
                to the people required to comply.
              </p>
            }
            whatToWatch={
              <p>
                Watch DOJ compliance with the Dec. 19 deadline, any disputes
                over redactions, and whether the transparency framing spills
                into broader policy conversations about secrecy, public safety,
                and institutional accountability.
              </p>
            }
            tags={["Federal", "Court order", "Transparency", "Oversight"]}
            sources={[
              {
                label: "Associated Press",
                href: "https://apnews.com/article/bd036cbe2fa4e98d27aa473fd6daa3bd",
              },
            ]}
            scriptId="SCRIPT-EPSTEIN"
            scriptLabel="Copy talking point"
            scriptText="Talking point: Transparency should not be reserved for symbolic high-profile cases. Lawmakers should apply the same urgency to registry systems by requiring clear public rules, accessible relief pathways, and plain-language compliance guidance for impacted people and families."
            copied={copied}
            onCopy={copyText}
          />

          <DevelopmentCard
            tone="amber"
            label="Congressional oversight"
            title="U.S. Congress — DOJ Pressed on Epstein Files Transparency Act Compliance"
            whatChanged={
              <p>
                A bipartisan group of lawmakers sought a DOJ briefing on
                implementation of the new transparency law, signaling active
                congressional oversight after enactment.
              </p>
            }
            whyItMatters={
              <p>
                Oversight is most useful when it moves beyond symbolic moments
                and asks whether government systems actually work. Registry
                policy often creates complex compliance duties without
                comparable attention to clear notice, accurate information,
                proportional rules, or evidence that restrictions improve safety.
              </p>
            }
            whatToWatch={
              <p>
                Watch whether congressional attention remains limited to Epstein
                disclosure or expands toward broader questions about prevention,
                institutional accountability, and transparency in sex-offense
                policy.
              </p>
            }
            tags={["Federal", "Congress", "Oversight", "Implementation"]}
            sources={[
              {
                label: "Roll Call",
                href: "https://rollcall.com/2025/12/03/lawmakers-seek-update-from-doj-on-epstein-disclosure-law/",
              },
            ]}
            scriptId="SCRIPT-OVERSIGHT"
            scriptLabel="Copy legislator message"
            scriptText="Hello — Please ensure DOJ fully complies with the Epstein Files Transparency Act. Please also support broader transparency in sex-offense policy, including plain-language registry rules, accessible relief information, and public evidence showing whether restrictions actually improve safety."
            copied={copied}
            onCopy={copyText}
          />

          <DevelopmentCard
            tone="emerald"
            label="Record relief"
            title="Illinois — Clean Slate Coverage Highlights Registrant Exclusions"
            whatChanged={
              <p>
                Local coverage explained Illinois’s Clean Slate record-sealing
                law and noted that people required to register as sex offenders
                remain excluded from automatic relief.
              </p>
            }
            whyItMatters={
              <p>
                Clean Slate laws recognize that stability, employment, housing,
                and reduced collateral consequences can support public safety.
                But when registrants are categorically excluded, reform preserves
                the same permanent underclass logic that blocks reintegration,
                even for people who may have completed sentences and remained
                law-abiding.
              </p>
            }
            whatToWatch={
              <p>
                Watch implementation planning ahead of the expected 2029
                automation timeline, future amendments, and whether lawmakers
                study individualized relief pathways for people currently
                excluded from automatic record sealing.
              </p>
            }
            tags={["Illinois", "Clean Slate", "Records relief", "Exclusion"]}
            sources={[
              {
                label: "Capitol News Illinois",
                href: "https://capitolnewsillinois.com/news/clean-slate-act-passes-after-failing-to-clear-legislature-in-past-years/",
              },
            ]}
            scriptId="SCRIPT-CLEANS"
            scriptLabel="Copy advocacy message"
            scriptText="Message idea: Illinois’s Clean Slate reforms are important progress. Please also study fair, individualized record-relief pathways for people excluded because of registration requirements, especially where stability, housing, and employment would support long-term public safety."
            copied={copied}
            onCopy={copyText}
          />
        </Section>

        {/* Action Center */}
        <Section id="action" eyebrow="Practical response" title="Action Center">
          <div className="grid gap-4 md:grid-cols-3">
            <ActionCard
              title="Ask for transparency beyond headline cases"
              scriptId="ACTION-TRANSPARENCY"
              copied={copied}
              onCopy={copyText}
              script="Hello — Please apply transparency consistently. High-profile cases deserve disclosure and accountability, but registry systems also need clear rules, public evidence, accessible relief information, and plain-language compliance guidance for impacted people and families."
            >
              Use when contacting federal lawmakers about transparency,
              oversight, or government accountability in sex-offense policy.
            </ActionCard>

            <ActionCard
              title="Ask for plain-language compliance rules"
              scriptId="ACTION-COMPLIANCE"
              copied={copied}
              onCopy={copyText}
              script="Hello — Please require plain-language compliance guidance, public timelines, and practical notice before registry-related rules change. People and families cannot comply with rules they cannot understand or find."
            >
              Use when a bill, agency rule, court order, or enforcement change
              affects reporting duties, residency, travel, internet identifiers,
              or other registry obligations.
            </ActionCard>

            <ActionCard
              title="Ask for individualized relief"
              scriptId="ACTION-RELIEF"
              copied={copied}
              onCopy={copyText}
              script="Hello — Please support individualized relief pathways that consider time offense-free, rehabilitation, stability, treatment, and actual risk. Permanent categorical exclusion can undermine housing, work, family stability, and reintegration."
            >
              Use when record relief, Clean Slate, expungement, sealing, or
              registry-removal policies exclude people categorically.
            </ActionCard>
          </div>
        </Section>

        {/* Rolling Watchlist */}
        <Section id="watchlist" eyebrow="Items to keep tracking" title="Rolling Watchlist">
          <div className="grid gap-4 md:grid-cols-2">
            <WatchItem
              title="Henry v. Sheriff of Tuscaloosa County"
              posture="Alabama family-separation provision struck down; state response remains important."
              why="Family-separation rules can destabilize housing, parenting, and reintegration without individualized safety analysis."
              next="Watch for appeals, legislative response, or enforcement changes after the ruling."
            />

            <WatchItem
              title="Doe v. Sheridan"
              posture="Arizona lifetime registry rules upheld; possible appeal remains a live concern."
              why="Lifetime registration and online-identifier requirements raise core questions about proportionality, due process, and whether registry rules are functioning as punishment."
              next="Watch for appellate movement, related challenges, or state-level reform proposals."
            />

            <WatchItem
              title="Illinois Clean Slate Act"
              posture="Implementation phase continues, with automation expected in 2029."
              why="Clean Slate reform advances stability for many people, but exclusions for registrants preserve permanent collateral consequences."
              next="Watch for implementation rules, amendment proposals, and advocacy around individualized relief."
            />

            <WatchItem
              title="Epstein Files Transparency Act"
              posture="Federal disclosure process underway with DOJ release deadline set for Dec. 19, 2025."
              why="The law shows how quickly transparency mechanisms can move when Congress prioritizes a high-profile case."
              next="Watch DOJ compliance, redaction disputes, and whether oversight expands beyond this singular context."
            />
          </div>
        </Section>

        {/* Methodology */}
        <section className="rounded-2xl border border-slate-300 bg-white p-5 text-sm leading-6 text-slate-800 shadow-sm">
          <h2 className="flex items-center gap-2 font-black text-slate-950">
            <FileText className="h-4 w-4" />
            Source and methodology note
          </h2>
          <p className="mt-2">
            SOLAR prioritizes primary sources, including official bill pages,
            enrolled acts, court orders, agency notices, and government
            materials. Reputable reporting is used for context when official
            sources are unavailable, delayed, or incomplete. AI-assisted scanning
            may help identify developments, but entries are reviewed for
            relevance, source quality, and public-policy significance.
          </p>
        </section>
      </div>
    </main>
  );
}

// Exported teasers consumed by the hub page
export const teasers = {
  glance: [
    "⚖️ Federal court orders Epstein grand-jury transcripts released under new transparency law.",
    "🏛️ Congress presses DOJ on implementation and compliance before the December deadline.",
    "📣 Illinois Clean Slate coverage highlights continued exclusion of people required to register.",
    "🧭 Watch next: DOJ compliance, Clean Slate implementation, and litigation over registry scope.",
  ],
  highlights: [
    {
      icon: "⚖️",
      title: "Epstein Files Transparency Act — FL Court Order (Dec. 5, 2025)",
      url: "https://apnews.com/article/bd036cbe2fa4e98d27aa473fd6daa3bd",
    },
    {
      icon: "🏛️",
      title: "Congressional Letter to DOJ on Epstein Act (Dec. 3, 2025)",
      url: "https://rollcall.com/2025/12/03/lawmakers-seek-update-from-doj-on-epstein-disclosure-law/",
    },
    {
      icon: "📣",
      title: "Illinois Clean Slate Act — Explanatory Coverage",
      url: "https://capitolnewsillinois.com/news/clean-slate-act-passes-after-failing-to-clear-legislature-in-past-years/",
    },
  ],
};