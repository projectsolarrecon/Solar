import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold ring-1 ring-white/50 backdrop-blur">
      {children}
    </span>
  );
}

function Section({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
        <span aria-hidden>{icon ?? "📑"}</span>
        <span>{title}</span>
      </h2>
      <div className="prose prose-slate max-w-none text-slate-800">{children}</div>
    </section>
  );
}

function StageBadge({ stage }: { stage: string }) {
  const map: Record<string, string> = {
    "Arrested / Charged": "bg-rose-50 text-rose-900 ring-rose-200",
    "Federal charges unsealed": "bg-indigo-50 text-indigo-900 ring-indigo-200",
    "Plea / case update": "bg-amber-50 text-amber-900 ring-amber-200",
    "Convicted": "bg-violet-50 text-violet-900 ring-violet-200",
    "Sentenced": "bg-emerald-50 text-emerald-900 ring-emerald-200",
  };
  const cls = map[stage] ?? "bg-slate-50 text-slate-900 ring-slate-200";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${cls}`}>{stage}</span>;
}

function RegistryChip({ status }: { status: string }) {
  const tone =
    status === "Previously registered"
      ? "bg-rose-50 text-rose-900 ring-rose-200"
      : status === "No prior registration noted"
      ? "bg-emerald-50 text-emerald-900 ring-emerald-200"
      : "bg-slate-50 text-slate-900 ring-slate-200";
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring ${tone}`}>Registry: {status}</span>;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-4 rounded-xl border-l-4 border-slate-300 bg-slate-50 p-4 text-slate-800">
      <div className="flex items-start gap-2">
        <Quote className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        <div className="text-sm italic">{children}</div>
      </div>
    </blockquote>
  );
}

function CaseRow({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji,
}: {
  name: string;
  role: string;
  jurisdiction: string;
  stage: string;
  date: string;
  summary: React.ReactNode;
  registry: string;
  sources: { label: string; href: string }[];
  emoji?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{emoji ?? "🧾"} {name}</span>
        <span>— {role}</span>
        <span className="ml-auto whitespace-nowrap">{date}</span>
      </div>
      <div className="mt-1 text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-2">
          <span><span className="font-medium">Jurisdiction:</span> {jurisdiction}</span>
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
        <div className="mt-2 text-slate-800">{summary}</div>
        {sources?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {sources.map((s, i) => (
              <a
                key={i}
                className="inline-flex items-center gap-1 rounded-full border px-2 py-1 hover:bg-slate-100"
                href={s.href}
                target="_blank"
                rel="noopener"
              >
                🔗 <span className="underline underline-offset-2">{s.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AccountabilityWatch_2025_09_27() {
  const pageTitle = "Accountability Watch — Week of Sep 21–27, 2025 | SOLAR";

  const atAGlance = [
    "SC lawmaker RJ May enters guilty plea to federal CSAM counts.",
    "Former LA official & ex-priest Mark Ford arrested on severe abuse charges.",
    "NYC teacher Christopher Ward federally charged for CSAM offenses.",
    "UK RB Jamarion Wilcox arrested for sexual abuse; team suspension.",
    "TX physician Kenneth Haygood plea/dismissal controversy.",
  ];

  const newArrestsCharges = [
    {
      name: "Mark Francis Ford",
      role: "former Louisiana state official & ex-priest",
      jurisdiction: "New Orleans, LA / Indiana (extradition)",
      stage: "Arrested / Charged",
      date: "Sep 26, 2025",
      summary: <>Accused of long-term abuse of a disabled child; arrested in Indiana on Louisiana warrants (counts include first-degree rape and kidnapping).</>,
      registry: "No prior registration noted",
      sources: [
        { label: "Guardian", href: "https://www.theguardian.com/us-news/2025/sep/26/former-priest-official-arrested-louisiana" },
        { label: "WWL-TV", href: "https://www.wwltv.com/" },
      ],
      emoji: "🏛️",
    },
    {
      name: "Christopher Ward",
      role: "NYC first-grade public school teacher",
      jurisdiction: "SDNY / Queens, NY",
      stage: "Federal charges unsealed",
      date: "Sep 25, 2025",
      summary: <>Complaint alleges possession & distribution of CSAM; includes admissions referenced in the filing.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "SDNY Press", href: "https://www.justice.gov/usao-sdny" },
        { label: "ABC7NY", href: "https://abc7ny.com/" },
      ],
      emoji: "🏫",
    },
    {
      name: "Jamarion (Jamairon) Wilcox",
      role: "University of Kentucky RB (SEC)",
      jurisdiction: "Lexington, KY",
      stage: "Arrested / Charged",
      date: "Sep 26, 2025",
      summary: <>Arrest stems from Aug 20 incident; police allege unwanted sexual contact. Participation paused pending case.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "Spectrum News 1 KY", href: "https://spectrumnews1.com/ky/lexington" },
        { label: "WHAS11", href: "https://www.whas11.com/" },
      ],
      emoji: "🏈",
    },
  ];

  const pleasUpdates = [
    {
      name: "RJ May (Robert John May III)",
      role: "former South Carolina state representative",
      jurisdiction: "Federal (South Carolina)",
      stage: "Plea / case update",
      date: "Sep 26, 2025",
      summary: <>Agreed to plead guilty to 5 counts of distributing CSAM; prosecutors to dismiss 5 additional counts from the June 2025 indictment.</>,
      registry: "No prior registration noted",
      sources: [
        { label: "DOJ / USAO-SC", href: "https://www.justice.gov/usao-sc/pr/west-columbia-man-indicted-distributing-child-sexual-abuse-material" },
        { label: "AP", href: "https://apnews.com/" },
        { label: "Live5 News", href: "https://www.live5news.com/" },
      ],
      emoji: "🏛️",
    },
    {
      name: "Dr. Kenneth D. Haygood",
      role: "Texas physician (suspended)",
      jurisdiction: "Tyler, TX",
      stage: "Plea / case update",
      date: "Sep 26, 2025",
      summary: <>Plea agreements accepted and some charges dismissed; local reporting says victims were not notified ahead of the hearing.</>,
      registry: "Registry status not mentioned",
      sources: [
        { label: "KLTV", href: "https://www.kltv.com/" },
        { label: "CBS19 Tyler", href: "https://www.cbs19.tv/" },
      ],
      emoji: "🏥",
    },
  ];

  const watchlist = [
    "NYC DOE / UFT responses following Ward charges.",
    "RJ May: sentencing timeline (next week).",
    "Wilcox case: pretrial motions in October; UK athletics review.",
    "Ford extradition (IN → LA).",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures, with registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge>🧭 Accountability Watch • Weekly</Badge>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/90">
              <Scale className="h-4 w-4" /> Verified sources • <Shield className="h-4 w-4" /> Registry context
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Week of Sep 21–27, 2025</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            Credible reports and official filings only. Allegations remain allegations unless and until proven in court.
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />
          <div className="mt-4">
            <ShareBar />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-16">
        <Section title="At a Glance" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">{atAGlance.map((a, i) => <li key={i}>{a}</li>)}</ul>
          <PullQuote>
            We tag registry status to document how often new cases involve people <strong>not previously registered</strong>—evidence
            that prevention requires more than public registries.
          </PullQuote>
        </Section>

        <Section title="New Arrests & Charges" icon={<Shield className="h-5 w-5 text-rose-500" />}>
          <div className="grid gap-3">
            {newArrestsCharges.map((c, i) => <CaseRow key={i} {...c} />)}
          </div>
        </Section>

        <Section title="Pleas & Case Updates" icon={<Scale className="h-5 w-5 text-amber-500" />}>
          <div className="grid gap-3">
            {pleasUpdates.map((c, i) => <CaseRow key={i} {...c} />)}
          </div>
        </Section>

        <Section title="Watchlist" icon={<FileText className="h-5 w-5 text-slate-500" />}>
          <ul className="m-0 list-disc pl-5">{watchlist.map((w, i) => <li key={i}>{w}</li>)}</ul>
        </Section>

        <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-1">
            All defendants are presumed innocent unless and until proven guilty in a court of law. Registry status reflects
            what’s publicly reported in official documents or mainstream coverage; absence of mention is not definitive.
          </p>
        </div>
      </div>
    </main>
  );
            }
