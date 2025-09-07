import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { legislativeUpdates, LegislativeUpdateMeta } from '../../data/legislativeUpdates';

export default function LegislativeTracker(): JSX.Element {
  const items = useMemo(() => {
    // Sort newest first by ISO date string
    return [...legislativeUpdates].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, []);

  const latest = items[0];
  const archive = items.slice(1);

  const handlePrint = () => window.print();

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker & Advocacy Hub — The SOLAR Project"
        description="Weekly legislative and court updates affecting registries and reentry, with highlights, action steps, and a browsable archive."
        keywords="legislative tracker, registry reform, reentry, sex offense policy, court cases, SOLAR"
      />

      {/* Hero / Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white py-12 print:bg-white print:text-slate-900 print:shadow-none">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-3">
            <Link to="/resources" className="text-white/80 hover:underline print:hidden">
              ← Back to Resources
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Legislative Tracker & Advocacy Hub</h1>
          <p className="mt-3 text-white/90">
            The latest weekly developments in legislation and litigation impacting registries, reentry, and reform—plus how to take action.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            {latest && (
              <Link
                to={`/resources/legislative-tracker/${latest.slug}`}
                className="inline-flex items-center rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow hover:shadow-md"
              >
                Read this week’s full update
              </Link>
            )}
            <button
              onClick={handlePrint}
              className="inline-flex items-center rounded-2xl bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-slate-900/30"
            >
              Print
            </button>
          </div>
        </div>
      </section>

      {/* How this works / evergreen explainer */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">What you’ll find here</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li>Weekly highlights at the top, with a link to the full update.</li>
              <li>Archive of all past updates, newest first.</li>
              <li>Links to primary sources: bills, dockets, hearings, official releases.</li>
              <li>Plain-language “Why it matters” notes and action steps when relevant.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Latest highlight */}
      {latest && (
        <section className="py-2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-3 text-sm text-slate-500">Latest: {latest.date}</div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold">{latest.title}</h3>
              <p className="mt-2 text-slate-700">{latest.summary}</p>
              <div className="mt-4">
                <Link
                  to={`/resources/legislative-tracker/${latest.slug}`}
                  className="inline-flex items-center rounded-xl bg-slate-800 text-white px-4 py-2 font-medium hover:bg-slate-900"
                >
                  Read full weekly update
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Archive */}
      <section id="archive" className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-lg font-semibold mb-3">Archive</h4>
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {archive.map((u: LegislativeUpdateMeta) => (
              <li key={u.slug} className="p-4 hover:bg-slate-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <Link to={`/resources/legislative-tracker/${u.slug}`} className="font-medium text-slate-800 hover:underline">
                      {u.title}
                    </Link>
                    <p className="text-sm text-slate-600 mt-1">{u.summary}</p>
                  </div>
                  <div className="text-sm text-slate-500">{u.date}</div>
                </div>
              </li>
            ))}
            {archive.length === 0 && <li className="p-4 text-slate-500">No older updates yet.</li>}
          </ul>
        </div>
      </section>
    </div>
  );
}
