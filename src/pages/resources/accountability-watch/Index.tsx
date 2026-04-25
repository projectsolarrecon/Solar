import React from "react";
import { Link } from "react-router-dom";
import { accountabilityWatch } from "../../../data/accountabilityWatch";
import { Helmet } from "react-helmet";
import {
  ShieldAlert,
  Gavel,
  FileWarning,
  ArrowRight,
  Link as LinkIcon,
  Newspaper,
} from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/80 bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
      {children}
    </span>
  );
}

function ArchiveChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
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
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-sm opacity-90">{children}</div>
    </div>
  );
}

export default function AccountabilityWatchIndex() {
  const pageTitle = "Accountability Watch | SOLAR";

  const latest = accountabilityWatch?.[0];
  const [teaser, setTeaser] = React.useState<string[] | null>(null);

  React.useEffect(() => {
    if (!latest?.slug) return;

    const modules = import.meta.glob("./*.tsx");
    const path = `./${latest.slug}.tsx`;

    if (modules[path]) {
      modules[path]()
        .then((m: any) => {
          const items: string[] = m?.teaserHighlights ?? m?.atAGlance ?? [];
          setTeaser(items.slice(0, 4));
        })
        .catch(() => setTeaser(null));
    }
  }, [latest?.slug]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Monthly Accountability Watch roundups documenting cases involving trusted roles, institutional access, public influence, household authority, and registry-status context."
        />
      </Helmet>

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Chip>🧭 Accountability Watch</Chip>
              <Chip>Monthly Series</Chip>
            </div>
            <div className="hidden items-center gap-2 text-xs text-slate-200/90 sm:flex">
              <Gavel size={16} /> Verified sources only
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            See Beyond the Stranger-Danger Myth
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
            <strong>Accountability Watch</strong> is a monthly
            pattern-recognition series, not a crime blotter. Each roundup tracks
            verified cases involving trusted roles, institutional access, public
            influence, household authority, and systems that often respond only
            after harm has surfaced. Registry-status context helps show why
            prevention requires more than public lists.
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />

          <div className="mt-4">
            <ShareBar />
          </div>
        </div>
      </header>

      {/* Why this exists */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Callout
            tone="blue"
            title="Why we track this"
            icon={<ShieldAlert className="h-4 w-4" />}
          >
            Public trust, professional status, household authority, and
            institutional access can create opportunity before any public
            warning system exists. Accountability Watch tracks those patterns so
            prevention is aimed where risk actually appears.
          </Callout>

          <Callout
            tone="emerald"
            title="Why registries miss the point"
            icon={<FileWarning className="h-4 w-4" />}
          >
            Public registries are built around people already known to the
            system. Many new cases involve trusted or high-status people who
            were not publicly identified that way beforehand. Real prevention
            requires institutional accountability, earlier intervention, and
            evidence over myth.
          </Callout>

          <Callout
            tone="amber"
            title="Standards & fairness"
            icon={<Gavel className="h-4 w-4" />}
          >
            Allegations are not findings of guilt. We use official sources and
            reputable reporting, avoid graphic detail, and focus on the public
            accountability lesson: authority, access, status, and prevention
            failure.
          </Callout>
        </div>
      </section>

      {/* Latest Roundup */}
      {latest && teaser && teaser.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-700">
              <Newspaper className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                Latest Roundup: {latest.title}
              </h2>
            </div>

            <ul className="m-0 list-disc pl-5 text-sm leading-6 text-slate-800">
              {teaser.map((t, i) => (
                <li key={i} className="mb-1">
                  {t}
                </li>
              ))}
            </ul>

            <Link
              to={latest.path}
              className="mt-4 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Open latest roundup <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Recent Roundups */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          Recent Roundups
        </h2>

        <ul className="grid gap-3">
          {accountabilityWatch.map((w) => (
            <li
              key={w.slug}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Monthly / Legacy Archive
                  </p>
                  <h3 className="text-base font-bold leading-snug text-slate-950">
                    {w.title}
                  </h3>
                </div>
                <span className="text-sm font-semibold text-slate-500">
                  {w.date}
                </span>
              </div>

              <p className="mt-2 max-h-24 overflow-hidden text-sm leading-6 text-slate-700">
                {w.summary}
              </p>

              <Link
                to={w.path}
                className="mt-4 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open roundup <ArrowRight size={16} />
              </Link>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                <ArchiveChip>
                  <LinkIcon size={14} /> Permalink
                </ArchiveChip>
                <ArchiveChip>Registry context</ArchiveChip>
                <ArchiveChip>Verified sources</ArchiveChip>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">Reminder</p>
          <p className="mt-1">
            This index lists monthly roundups and legacy weekly entries. Click
            through for case-level sources, procedural stage, why-included
            notes, and registry-status context for each entry.
          </p>
        </div>
      </section>
    </main>
  );
}