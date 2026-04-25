import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import {
  legislativeUpdates,
  LegislativeUpdateMeta,
} from "../../data/legislativeUpdates";
import {
  ArrowRight,
  BookOpen,
  Clipboard,
  FileText,
  Gavel,
  Link as LinkIcon,
  Newspaper,
  ShieldCheck,
} from "lucide-react";
import ShareBar from "../../components/solar/ShareBar";

// Auto-discover dated update pages under /resources/legislative-tracker.
// NOTE: the file/folder names can remain as-is even though the public cadence is now monthly.
const updateModules = import.meta.glob("./legislative-tracker/*.tsx");

type Teasers = {
  glance?: string[];
  highlights?: { icon: string; title: string; url: string }[];
} | null;

function HeroChip({ children }: { children: React.ReactNode }) {
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

export default function LegislativeTracker(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);
  const [latestTeasers, setLatestTeasers] = useState<Teasers>(null);

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

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      // no-op
    }
  };

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://thesolarproject.org/resources/legislative-tracker";

  return (
    <main className="min-h-screen bg-slate-50">
      <SEO
        title="Legislative Tracker & Advocacy Hub — The SOLAR Project"
        description="Monthly legislative and policy updates tracking bills, court rulings, agency actions, and advocacy opportunities that shape life on and after the registry."
        keywords="legislative tracker, registry reform, court cases, sex offense policy, SOLAR, advocacy"
      />

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="text-sm font-semibold text-white/90 hover:underline print:hidden"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <HeroChip>🏛️ Legislative Tracker</HeroChip>
              <HeroChip>Monthly Policy Watch</HeroChip>
              <HeroChip>Verified Sources</HeroChip>
            </div>
            <div className="hidden items-center gap-2 text-xs text-slate-200/90 sm:flex">
              <Gavel size={16} /> Bills, cases, agencies, and action
            </div>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
            Track the Laws Behind the Headlines
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
            The Legislative Tracker follows bills, court rulings, agency moves,
            implementation deadlines, and advocacy opportunities that shape life
            on and after the registry. Each update translates legal and policy
            movement into plain language: what changed, why it matters, and what
            people can do next.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
            <div className="mb-2 flex items-center gap-2 font-bold">
              <ShieldCheck className="h-4 w-4" />
              SOLAR framing
            </div>
            This is not just a bill list. The tracker highlights whether
            lawmakers and courts are moving toward evidence-based safety,
            stability, and due process — or doubling down on fear-driven policy,
            vague compliance burdens, and performative restrictions.
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            {latest && (
              <Link
                to={`/resources/legislative-tracker/${latest.slug}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 font-bold text-slate-900 shadow hover:bg-slate-100"
              >
                ✨ Read the latest update
              </Link>
            )}
            <a
              href="#glance"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              🗓️ Glance
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              ⭐ Highlights
            </a>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              🗂️ Archive
            </a>
            <a
              href="#glossary"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15"
            >
              📘 Glossary
            </a>
          </div>

          <div className="mt-5">
            <ShareBar />
          </div>
        </div>
      </header>

      {/* Why this exists */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Callout
            tone="blue"
            title="Why we track this"
            icon={<FileText className="h-4 w-4" />}
          >
            Registry laws change through legislatures, courts, agencies, and
            local enforcement practices. The tracker helps families, advocates,
            and policymakers see what is moving before the change reaches them
            as a surprise.
          </Callout>

          <Callout
            tone="emerald"
            title="What counts as progress"
            icon={<ShieldCheck className="h-4 w-4" />}
          >
            Real safety is not measured by the harshest headline. We look for
            evidence-based prevention, clearer compliance rules, meaningful
            relief pathways, family stability, housing access, and limits on
            overbroad punishment.
          </Callout>

          <Callout
            tone="amber"
            title="How to use it"
            icon={<Clipboard className="h-4 w-4" />}
          >
            Start with the latest glance, open the full update for sources and
            plain-language context, then use action links or scripts when a bill,
            hearing, agency rule, or court development needs public attention.
          </Callout>
        </div>
      </section>

      {/* Latest Update at a Glance */}
      <section id="glance" className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-4 text-white">
            <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
              🗓️ Latest Update at a Glance
            </h2>
          </div>

          <div className="p-5">
            <ul className="grid gap-3 md:grid-cols-2">
              {(latestTeasers?.glance ?? [
                "🏛️ Federal — loading latest update",
                "🗺️ States — loading latest update",
                "⚖️ Courts — loading latest update",
                "📣 Action — loading latest update",
              ]).map((line, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-800"
                >
                  {line}
                </li>
              ))}
            </ul>

            {latest && (
              <div className="mt-4">
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}`}
                  className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Read the full update <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-4 text-white">
            <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
              ⭐ Latest Highlights
            </h2>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2">
            {(latestTeasers?.highlights ?? []).map((h, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <h3 className="flex items-start gap-2 text-base font-bold leading-snug text-slate-950">
                  <span aria-hidden="true">{h.icon}</span>
                  <a
                    className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
                    href={h.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {h.title}
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Open the latest update for the plain-language summary, why it
                  matters, source links, and action context.
                </p>

                {latest && (
                  <div className="mt-3">
                    <Link
                      to={`/resources/legislative-tracker/${latest.slug}#highlights`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 underline underline-offset-2"
                    >
                      See details →
                    </Link>
                  </div>
                )}
              </article>
            ))}

            {(!latestTeasers || (latestTeasers?.highlights ?? []).length === 0) && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Highlights will appear here as soon as the latest update is
                loaded.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* General action */}
      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-slate-800">
              <div className="font-bold">📣 General advocacy script</div>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Use this when a bill, rule, or agency deadline affects
                compliance, housing, family stability, relief pathways, or
                access to accurate information. Personalize it when possible.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  copyText(
                    "script-feature",
                    "Hello — Please provide clear, plain-language guidance, public timelines, and practical compliance information so impacted people and families can understand their obligations without surprises. Please support evidence-based policy that improves safety without unnecessary instability."
                  )
                }
                className="rounded-lg px-3 py-2 text-sm font-semibold ring-1 ring-slate-300 hover:bg-slate-100"
              >
                {copied === "script-feature" ? "Copied!" : "Copy script"}
              </button>

              {latest && (
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}#highlights`}
                  className="rounded-lg px-3 py-2 text-sm font-semibold ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  Go to latest actions
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-lg font-bold text-slate-900">
          Recent Legislative Updates
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((u: LegislativeUpdateMeta) => (
            <article
              key={u.slug}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
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

              <p className="mt-2 max-h-24 overflow-hidden text-sm leading-6 text-slate-700">
                {u.summary}
              </p>

              <Link
                to={`/resources/legislative-tracker/${u.slug}`}
                className="mt-4 inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Open update <ArrowRight size={16} />
              </Link>

              <div className="mt-3 flex flex-wrap gap-2">
                <ArchiveChip>
                  <LinkIcon size={14} /> Official sources
                </ArchiveChip>
                <ArchiveChip>Plain-language context</ArchiveChip>
                <ArchiveChip>Action watch</ArchiveChip>
              </div>
            </article>
          ))}

          {items.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600">
              No updates yet.
            </div>
          )}
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-4 text-white">
            <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
              <BookOpen className="h-5 w-5" />
              Quick Glossary
            </h2>
          </div>

          <div className="p-5">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-bold text-slate-900">Residency ban</dt>
                <dd className="text-sm leading-6 text-slate-700">
                  Rule limiting where a person may live, often based on distance
                  from schools, parks, or other locations.
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
                  A request to a court to end or reduce registration duties after
                  set criteria are met.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">Supervised release</dt>
                <dd className="text-sm leading-6 text-slate-700">
                  Post-prison federal supervision with conditions, which may
                  include monitoring or technology restrictions.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-900">SORNA</dt>
                <dd className="text-sm leading-6 text-slate-700">
                  Federal Sex Offender Registration and Notification Act, which
                  sets national registry standards.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How we track & vet */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-950">
            🧪 How we track, vet, and curate
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            We prioritize primary sources — official bill pages, enrolled acts,
            court orders, agency notices, and government materials — then add
            reputable reporting for context. AI-assisted scanning helps flag
            developments, but human review is still necessary. If something
            looks off, tell us and we will correct it quickly.
          </p>
        </div>
      </section>

      {/* Social share */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">🔗 Share this hub</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="rounded-lg px-3 py-1 text-sm ring-1 ring-slate-300 hover:bg-slate-50"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(
                "SOLAR Legislative Tracker — plain-language policy updates and action context"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter
            </a>
            <a
              className="rounded-lg px-3 py-1 text-sm ring-1 ring-slate-300 hover:bg-slate-50"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="rounded-lg px-3 py-1 text-sm ring-1 ring-slate-300 hover:bg-slate-50"
              href={`mailto:?subject=${encodeURIComponent(
                "SOLAR Legislative Tracker"
              )}&body=${encodeURIComponent(shareUrl)}`}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Print styles */}
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