import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import {
  LegislativeUpdateMeta,
  legislativeUpdates,
} from "../../data/legislativeUpdates";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Gavel,
  Link as LinkIcon,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import ShareBar from "../../components/solar/ShareBar";

// Auto-discover dated update pages under /resources/legislative-tracker.
const updateModules = import.meta.glob("./legislative-tracker/*.tsx");

type Teasers = {
  glance?: string[];
  highlights?: string[] | { icon: string; title: string; url: string }[];
} | null;

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
    <div className={`rounded-xl border p-4 ${tones[tone]}`}>
      <div className="mb-1 flex items-center gap-2 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-sm leading-6 opacity-90">{children}</div>
    </div>
  );
}

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function searchableText(update: LegislativeUpdateMeta) {
  return normalize(
    [
      update.title,
      update.summary,
      update.date,
      update.slug,
      ...(update.tags ?? []),
    ].join(" ")
  );
}

export default function LegislativeTracker(): JSX.Element {
  const [latestTeasers, setLatestTeasers] = useState<Teasers>(null);
  const [query, setQuery] = useState("");

  const items = useMemo(
    () =>
      [...legislativeUpdates].sort((a, b) => {
        const keyA = a.slug ?? a.date;
        const keyB = b.slug ?? b.date;
        return keyB.localeCompare(keyA);
      }),
    []
  );

  const latest = items[0];

  useEffect(() => {
    if (!latest) return;

    const importPath = `./legislative-tracker/${latest.slug}.tsx`;
    const importer = updateModules[importPath];

    if (importer) {
      importer()
        .then((mod: any) => {
          setLatestTeasers(mod.teasers ?? null);
        })
        .catch(() => setLatestTeasers(null));
    }
  }, [latest]);

  const filteredItems = useMemo(() => {
    const q = normalize(query);
    if (!q) return items;

    return items.filter((update) => searchableText(update).includes(q));
  }, [items, query]);

  const suggestedSearches = [
    "Florida",
    "housing",
    "courts",
    "SORNA",
    "health care",
    "online identifiers",
    "relief",
    "implementation",
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <SEO
        title="Legislative Tracker & Advocacy Hub — The SOLAR Project"
        description="Monthly legislative and policy updates tracking bills, court rulings, agency actions, and advocacy opportunities that shape life on and after the registry."
        keywords="legislative tracker, registry reform, court cases, sex offense policy, SOLAR, advocacy"
      />

      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <Link
            to="/resources"
            className="text-sm font-semibold text-white/90 hover:underline print:hidden"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Chip>🏛️ Legislative Tracker</Chip>
              <Chip>Monthly Policy Watch</Chip>
              <Chip>Verified Sources</Chip>
            </div>
            <div className="hidden items-center gap-2 text-xs text-slate-200/90 sm:flex">
              <Gavel size={16} /> Bills, courts, agencies, and action paths
            </div>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl">
            Track the Laws Behind the Headlines
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
            <strong>Legislative Tracker</strong> turns bills, court rulings,
            agency moves, and implementation deadlines into plain-language
            updates for people impacted by registration laws, their families,
            advocates, and policymakers. Each roundup asks what changed, why it
            matters, and what readers can do next.
          </p>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-500/40 via-slate-200/40 to-slate-500/40" />

          <div className="mt-4">
            <ShareBar />
          </div>
        </div>
      </header>
<section className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Callout
            tone="blue"
            title="Why we track this"
            icon={<FileText className="h-4 w-4" />}
          >
            Registry policy changes through legislatures, courts, agencies, and
            local implementation. This hub helps families and advocates see what
            is moving before a rule becomes a surprise.
          </Callout>

          <Callout
            tone="emerald"
            title="What counts as progress"
            icon={<ShieldCheck className="h-4 w-4" />}
          >
            SOLAR looks for evidence-based prevention, clearer compliance
            rules, meaningful relief pathways, family stability, housing access,
            due process, and limits on overbroad punishment.
          </Callout>

          <Callout
            tone="amber"
            title="How to use it"
            icon={<BookOpen className="h-4 w-4" />}
          >
            Start with the latest update, search the archive by state or topic,
            then open the full monthly page for sources, SOLAR analysis, and
            action links.
          </Callout>
        </div>
      </section>

      {latest && (
        <section className="mx-auto max-w-5xl px-4 pb-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-700">
              <FileText className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                Latest Update: {latest.title}
              </h2>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              {latest.date}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              {latest.summary}
            </p>

            {latestTeasers?.glance && latestTeasers.glance.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-800">
                {latestTeasers.glance.slice(0, 4).map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to={`/resources/legislative-tracker/${latest.slug}`}
                className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open latest update <ArrowRight size={16} />
              </Link>

              <a
                href="#archive"
                className="inline-flex items-center gap-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Search archive <Search size={16} />
              </a>
            </div>
          </div>
        </section>
      )}

      <section id="archive" className="mx-auto max-w-5xl px-4 py-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Legislative Updates
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Search by state, topic, bill type, court issue, or policy theme.
            Try terms like <span className="font-semibold">Florida</span>,{" "}
            <span className="font-semibold">housing</span>,{" "}
            <span className="font-semibold">courts</span>,{" "}
            <span className="font-semibold">SORNA</span>, or{" "}
            <span className="font-semibold">online identifiers</span>.
          </p>
        </div>

        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <label
            htmlFor="legislative-search"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Search Legislative Tracker
          </label>

          <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              id="legislative-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by state, topic, court, bill, or keyword..."
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {suggestedSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                {term}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Search currently scans update titles, summaries, dates, slugs, and
            tags. Future metadata can add dedicated state/topic fields without
            changing the monthly pages.
          </p>
        </div>
<ul className="grid gap-3">
          {filteredItems.map((u: LegislativeUpdateMeta) => (
            <li
              key={u.slug}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Monthly / Legacy Archive
                  </p>
                  <h3 className="text-base font-bold leading-snug text-slate-950">
                    <Link
                      to={`/resources/legislative-tracker/${u.slug}`}
                      className="hover:underline"
                    >
                      {u.title}
                    </Link>
                  </h3>
                </div>
                <span className="text-sm font-semibold text-slate-500">
                  {u.date}
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {u.summary}
              </p>

              <Link
                to={`/resources/legislative-tracker/${u.slug}`}
                className="mt-4 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open update <ArrowRight size={16} />
              </Link>

              <div className="mt-3 flex flex-wrap gap-2">
                {(u.tags && u.tags.length > 0
                  ? u.tags
                  : ["official sources", "plain-language context", "action watch"]
                ).map((tag) => (
                  <ArchiveChip key={tag}>
                    <LinkIcon size={14} />
                    {tag}
                  </ArchiveChip>
                ))}
              </div>
            </li>
          ))}

          {filteredItems.length === 0 && (
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm">
              No Legislative Tracker updates matched “
              <span className="font-semibold text-slate-900">{query}</span>.”
              Try a broader term like “housing,” “courts,” “Florida,” “SORNA,”
              or “implementation.”
            </li>
          )}
        </ul>
      </section>

      <section id="glossary" className="mx-auto max-w-5xl px-4 py-4">
        <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <summary className="cursor-pointer text-lg font-semibold text-slate-950">
            Quick glossary
          </summary>

          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-bold text-slate-900">Residency ban</dt>
              <dd className="text-sm leading-6 text-slate-700">
                A rule limiting where a person may live, often based on distance
                from schools, parks, daycare facilities, or other locations.
              </dd>
            </div>

            <div>
              <dt className="font-bold text-slate-900">Presence restriction</dt>
              <dd className="text-sm leading-6 text-slate-700">
                A rule limiting where a person may go or remain, even if they do
                not live there.
              </dd>
            </div>

            <div>
              <dt className="font-bold text-slate-900">Retroactive</dt>
              <dd className="text-sm leading-6 text-slate-700">
                Applied after a case is over, including to conduct or
                convictions from the past.
              </dd>
            </div>

            <div>
              <dt className="font-bold text-slate-900">Petition for relief</dt>
              <dd className="text-sm leading-6 text-slate-700">
                A request asking a court or agency to end, reduce, or modify
                registration duties after set criteria are met.
              </dd>
            </div>

            <div>
              <dt className="font-bold text-slate-900">Technical violation</dt>
              <dd className="text-sm leading-6 text-slate-700">
                A violation based on failure to follow a reporting, address,
                travel, online-identifier, or deadline rule rather than a new
                hands-on offense.
              </dd>
            </div>

            <div>
              <dt className="font-bold text-slate-900">SORNA</dt>
              <dd className="text-sm leading-6 text-slate-700">
                The federal Sex Offender Registration and Notification Act,
                which sets national registration standards.
              </dd>
            </div>
          </dl>
        </details>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 pt-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-950">
            🧪 How we track, vet, and curate
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            SOLAR prioritizes primary sources: official bill pages, enacted
            acts, court orders, agency notices, fiscal notes, government
            reports, and public-comment materials. Reputable reporting and
            advocacy context may help explain why a development matters, but the
            tracker’s foundation is official-source review wherever possible.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            AI-assisted scanning helps flag developments, but the final goal is
            editorial judgment: what changed, how it affects registrants and
            families, whether it moves policy toward evidence-based safety or
            deeper exclusion, and what readers should watch next.
          </p>
        </div>
      </section>

      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          a { text-decoration: none !important; color: #111 !important; }
          .shadow-sm { box-shadow: none !important; }
        }
      `}</style>
    </main>
  );
}