import React from "react";
import { Link } from "react-router-dom";
import { accountabilityWatch } from "../../../data/accountabilityWatch";
import { Helmet } from "react-helmet";
import { ShieldAlert, Gavel, FileWarning, ArrowRight, Link as LinkIcon, Newspaper } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Callout({
  tone = "blue",
  title,
  children,
  icon,
}: {
  tone?: "blue" | "amber" | "rose" | "emerald" | "slate";
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const tones = {
    blue: "border-blue-300 bg-blue-50 text-blue-900",
    amber: "border-amber-300 bg-amber-50 text-amber-900",
    rose: "border-rose-300 bg-rose-50 text-rose-900",
    emerald: "border-emerald-300 bg-emerald-50 text-emerald-900",
    slate: "border-slate-300 bg-slate-50 text-slate-900",
  } as const;
  return (
    <div className={`mt-4 rounded-xl border p-4 ${tones[tone]}`}>
      <div className="mb-1 flex items-center gap-2 font-semibold">
        {icon} <span>{title}</span>
      </div>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}

export default function AccountabilityWatchIndex() {
  const pageTitle = "Accountability Watch (Weekly) | SOLAR";

  // ---- Auto teaser: dynamically import the most recent weekly file and read its exported highlights ----
  // We assume accountabilityWatch is sorted DESC (newest first). If not, sort by date here.
  const latest = accountabilityWatch?.[0];
  const [teaser, setTeaser] = React.useState<string[] | null>(null);

  React.useEffect(() => {
    if (!latest?.slug) return;
    // Import all weekly modules in this folder (YYYY-MM-DD.tsx)
    const modules = import.meta.glob("./*.tsx");
    const path = `./${latest.slug}.tsx`;

    if (modules[path]) {
      modules[path]().then((m: any) => {
        // Prefer an explicit export, fallback to atAGlance if present
        const items: string[] =
          m?.teaserHighlights ??
          m?.atAGlance ??
          [];
        setTeaser(items.slice(0, 4)); // show up to 4 bullets
      }).catch(() => setTeaser(null));
    }
  }, [latest?.slug]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures—sourced from official filings and reputable reporting, with registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Chip>🧭 Accountability Watch</Chip>
              <Chip>Weekly Series</Chip>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/90">
              <Gavel size={16} /> Verified sources only
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Who’s Making News for Sex Offenses — and Why It Matters
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            <strong>Accountability Watch</strong> tracks verified arrests, charges, pleas, convictions, and sentencings involving
            <em> people in positions of public trust or influence</em>—politicians, law enforcement, corrections staff, educators,
            coaches, clergy, healthcare professionals, executives, nonprofit and community leaders, and other public-facing figures.
            We tag <strong>registry status</strong> to show how often new cases involve <strong>non-registrants</strong>, underscoring that prevention
            requires more than public registries.
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />
          <div className="mt-4">
            <ShareBar />
          </div>
        </div>
      </header>

      {/* Why this exists (permanent intro) */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Callout
            tone="blue"
            title="Why we track this"
            icon={<ShieldAlert className="h-4 w-4" />}
          >
            Public trust is concentrated in roles like lawmakers, judges, police, clergy, educators, and healthcare.
            When allegations arise here, the stakes are high for communities and policy.
          </Callout>

          <Callout
            tone="emerald"
            title="RECON perspective"
            icon={<FileWarning className="h-4 w-4" />}
          >
            Most sex offenses are committed by <strong>non-registrants</strong>. By tagging registry status, we document how new cases
            rarely involve people the registry could “pre-identify”—evidence that prevention ≠ perpetual public lists.
          </Callout>

          <Callout
            tone="amber"
            title="Standards & fairness"
            icon={<Gavel className="h-4 w-4" />}
          >
            Allegations aren’t findings of guilt. We link to primary sources when possible and avoid personal data beyond
            what’s already in public documents.
          </Callout>
        </div>
      </section>

      {/* This Week (auto teaser) */}
      {latest && teaser && teaser.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-700">
              <Newspaper className="h-5 w-5" />
              <h2 className="text-lg font-semibold">This Week: {latest.title}</h2>
            </div>
            <ul className="m-0 list-disc pl-5 text-slate-800">
              {teaser.map((t, i) => <li key={i} className="mb-1">{t}</li>)}
            </ul>
            <Link
              to={latest.path}
              className="mt-3 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800"
            >
              Open latest update <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Recent Weeks */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Recent Weeks</h2>
        <ul className="grid gap-3">
          {accountabilityWatch.map((w) => (
            <li key={w.slug} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{w.title}</span>
                <span className="ml-auto">{w.date}</span>
              </div>
              <p className="mt-1 text-slate-700">{w.summary}</p>
              <Link
                to={w.path}
                className="mt-3 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800"
              >
                Open week <ArrowRight size={16} />
              </Link>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                <Chip><LinkIcon size={14} /> Permalink</Chip>
                <Chip>Registry context</Chip>
                <Chip>Verified sources</Chip>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Reminder</p>
          <p className="mt-1">
            This index lists weekly summaries. Click through for case-level sources, stage (arrest/charge/plea/conviction/sentencing),
            and a registry-status note for each entry.
          </p>
        </div>
      </section>
    </main>
  );
}