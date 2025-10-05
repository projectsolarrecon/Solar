import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { legislativeUpdates, LegislativeUpdateMeta } from '../../data/legislativeUpdates';

// Auto-discover weekly pages under /resources/legislative-tracker
const weeklyModules = import.meta.glob('./legislative-tracker/*.tsx');

type Teasers = {
  glance?: string[];
  highlights?: { icon: string; title: string; url: string }[];
} | null;

export default function LegislativeTracker(): JSX.Element {
  const navigate = useNavigate();
  const [copied, setCopied] = useState<string | null>(null);
  const [latestTeasers, setLatestTeasers] = useState<Teasers>(null);

  // newest first
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
  const archive = items.slice(1);

  useEffect(() => {
    if (!latest) return;
    // try to import teasers from latest weekly page
    const importPath = `./legislative-tracker/${latest.slug}.tsx`;
    const importer = weeklyModules[importPath];
    if (importer) {
      importer().then((mod: any) => {
        setLatestTeasers(mod.teasers ?? null);
      }).catch(() => setLatestTeasers(null));
    }
  }, [latest]);

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1400);
    } catch {/* no-op */}
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://thesolarproject.org/resources/legislative-tracker';

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker & Advocacy Hub — The SOLAR Project"
        description="Weekly highlights, plain-language explanations, and direct actions on laws and cases that shape life on and after the registry."
        keywords="legislative tracker, registry reform, court cases, testimony, SOLAR"
      />

      {/* Hero */}
      <section className="relative text-white">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/resources" className="text-white/90 hover:underline print:hidden">← Back to Resources</Link>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold">Legislative Tracker & Advocacy Hub</h1>
            <p className="mt-3 max-w-3xl text-white/90">
              Plain-language weekly updates with official links, context, and quick ways to act.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              {latest && (
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}`}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow hover:shadow-md"
                >
                  ✨ Read this week’s full update
                </Link>
              )}
              <a href="#glance" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30">🗓️ Glance</a>
              <a href="#highlights" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30">⭐ Highlights</a>
              <a href="#archive" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30">🗂️ Archive</a>
              <a href="#glossary" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30">📘 Glossary</a>
            </div>
          </div>
        </div>
      </section>

      {/* How to use (accordion) */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <summary className="cursor-pointer text-lg font-semibold">🧭 How to use this page</summary>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><strong>Start at “Glance”.</strong> 60-second overview of the week.</li>
              <li><strong>Open any highlight</strong> to see what changed, why it matters, and what to do.</li>
              <li><strong>Use the Archive</strong> to browse prior weeks and track trends.</li>
            </ul>
            <div className="mt-4 text-sm text-slate-600 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Info</span>
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-yellow-400" /> Reminder</span>
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-orange-500" /> Legal</span>
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Resource</span>
              <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-rose-500" /> Urgent</span>
            </div>
          </details>
        </div>
      </section>

      {/* This Week at a Glance — dark gradient header */}
      <section id="glance" className="mt-2">
        <header className="text-white bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">🗓️ This Week at a Glance</h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="grid gap-3 md:grid-cols-2">
            {(latestTeasers?.glance ?? [
              '🏛️ Federal — (loading latest)',
              '🗺️ States — (loading latest)',
              '⚖️ Cases — (loading latest)',
              '📣 Action — (loading latest)',
            ]).map((line, i) => (
              <li key={i} className="rounded-xl ring-1 ring-slate-200 p-3 text-slate-800 bg-slate-50">{line}</li>
            ))}
          </ul>
          {latest && (
            <div className="mt-4">
              <Link to={`/resources/legislative-tracker/${latest.slug}`} className="inline-flex items-center gap-2 text-slate-700 underline">
                Read the full weekly update →
              </Link>
            </div>
          )}
        </div>
      </section>
      {/* Highlights — dark gradient header */}
      <section id="highlights" className="mt-4">
        <header className="text-white bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">⭐ Highlights</h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6 md:grid-cols-2">
          {(latestTeasers?.highlights ?? []).map((h, idx) => (
            <article key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span aria-hidden="true">{h.icon}</span> <a className="hover:underline text-slate-800" href={h.url} target="_blank" rel="noreferrer">{h.title}</a>
              </h3>
              <p className="mt-2 text-slate-700 text-sm">Open the weekly page for the plain-language summary, why it matters, and direct action links.</p>
              {latest && (
                <div className="mt-3">
                  <Link to={`/resources/legislative-tracker/${latest.slug}#highlights`} className="inline-flex items-center gap-2 text-slate-700 underline">See details →</Link>
                </div>
              )}
            </article>
          ))}
          {(!latestTeasers || (latestTeasers?.highlights ?? []).length === 0) && (
            <div className="text-slate-600">Highlights will appear here as soon as the weekly page is loaded.</div>
          )}
        </div>
      </section>

      {/* Featured action (always visible) */}
      <section className="mt-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 shadow-sm flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-slate-800">
              <div className="font-semibold">📣 Featured action</div>
              <p className="text-sm">Copy a short message and send it through the official portal. Personalize if you can.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyText('script-feature', 'Hello — Please provide clear, plain-language guidance and timelines so families can comply without surprises. Thank you.')}
                className="text-sm rounded-lg px-3 py-2 ring-1 ring-slate-300 hover:bg-slate-100"
              >
                {copied === 'script-feature' ? 'Copied!' : 'Copy script'}
              </button>
              {latest && (
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}#highlights`}
                  className="text-sm rounded-lg px-3 py-2 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  Go to this week’s actions
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Archive — dark gradient header */}
      <section id="archive" className="mt-6">
        <header className="text-white bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">🗂️ Archive of Weekly Updates (Newest first)</h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((u: LegislativeUpdateMeta) => (
              <article key={u.slug} className="rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    <Link to={`/resources/legislative-tracker/${u.slug}`} className="text-slate-800 hover:underline">
                      {u.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-slate-700 text-sm">{u.summary}</p>
                </div>
                <div className="mt-3 text-sm text-slate-500">{u.date}</div>
              </article>
            ))}
            {items.length === 0 && (
              <div className="text-slate-600">No updates yet.</div>
            )}
          </div>
        </div>
      </section>

      {/* Glossary — dark gradient header */}
      <section id="glossary" className="mt-4">
        <header className="text-white bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">📘 Quick glossary</h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-slate-800">Residency ban</dt>
              <dd className="text-slate-700">Rule limiting where a person may live (e.g., near schools or parks).</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Retroactive</dt>
              <dd className="text-slate-700">Applied <strong>after</strong> a case is over, covering conduct from the past.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Petition for relief</dt>
              <dd className="text-slate-700">A request to a court to end or reduce registration duties after set criteria are met.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Supervised release</dt>
              <dd className="text-slate-700">Post-prison federal supervision with conditions (e.g., monitoring, tech limits).</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">SORNA</dt>
              <dd className="text-slate-700">Federal Sex Offender Registration and Notification Act — sets national standards.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* How we track & vet (AI note) — dark gradient header */}
      <section className="mt-2">
        <header className="text-white bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">🧪 How we track, vet, and curate</h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-slate-700">
              We link <strong>primary sources</strong> (official bill pages, enrolled acts, court orders, agency sites) and add <strong>reputable media</strong> for context.
              We also use AI to scan nationwide dockets and calendars so fewer items slip through — but AI can miss nuance.
              <strong> If something looks off, please tell us and we’ll fix it quickly.</strong>
            </p>
          </div>
        </div>
      </section>
      {/* Sticky "Take Action" bar (desktop & mobile) */}

      {/* Social share */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">🔗 Share this hub</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                className="rounded-lg ring-1 ring-slate-300 px-3 py-1 text-sm hover:bg-slate-50"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('SOLAR Legislative Tracker — verified weekly updates & actions')}`}
                target="_blank" rel="noreferrer"
              >
                X / Twitter
              </a>
              <a
                className="rounded-lg ring-1 ring-slate-300 px-3 py-1 text-sm hover:bg-slate-50"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="rounded-lg ring-1 ring-slate-300 px-3 py-1 text-sm hover:bg-slate-50"
                href={`mailto:?subject=${encodeURIComponent('SOLAR Legislative Tracker')}&body=${encodeURIComponent(shareUrl)}`}
              >
                Email
              </a>
            </div>
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
    </div>
  );
}
