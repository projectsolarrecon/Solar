import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export const meta = {
  date: '2025-09-06',
  title: 'Legislative Update — Sept 6, 2025',
  slug: '2025-09-06',
  summary: 'Federal committee hearing on X; State Y advances bill Z; notable appellate ruling ABC with potential nationwide implications.',
  tags: ['federal','states','cases']
};

export default function LegislativeUpdate_2025_09_06(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white">
      <SEO
        title={`SOLAR Legislative Update — ${meta.date}`}
        description={meta.summary}
        keywords="legislative tracker, registry, reentry, court cases, policy updates, SOLAR"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white py-10 print:bg-white print:text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-3">
            <Link to="/resources/legislative-tracker" className="text-white/80 hover:underline print:hidden">
              ← Back to Legislative Tracker
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{meta.title}</h1>
          <p className="mt-2 text-white/90">{meta.summary}</p>
          <div className="mt-4 flex gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center rounded-2xl bg-white/10 text-white px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-white/15"
            >
              Print
            </button>
          </div>
        </div>
      </section>

      {/* Body content (examples / placeholders) */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Highlight 1 */}
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Federal — Committee Hearing on X</h2>
            <p className="mt-2 text-slate-700">
              Quick summary of what happened, why it matters in plain language, and what’s next.
              Link to primary source (hearing page, PDF, or official release).
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><a className="text-slate-800 underline" href="https://example.gov/hearing" target="_blank" rel="noopener">Hearing details</a></li>
              <li><a className="text-slate-800 underline" href="https://example.gov/bill" target="_blank" rel="noopener">Bill text / summary</a></li>
            </ul>
            <div className="mt-4 rounded-xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">Take Action</div>
              <p>Contact your member of Congress about X. See our scripts in <Link className="underline" to="/resources/advocacy-guide">Advocacy Guide</Link>.</p>
            </div>
          </article>

          {/* Highlight 2 */}
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">State — Y advances Bill Z</h2>
            <p className="mt-2 text-slate-700">What the bill does, committee status, vote counts, effective dates, etc.</p>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><a className="text-slate-800 underline" href="https://example.state.gov/bill/Z" target="_blank" rel="noopener">Official bill page</a></li>
              <li><a className="text-slate-800 underline" href="https://example.state.gov/calendar" target="_blank" rel="noopener">Committee calendar</a></li>
            </ul>
            <div className="mt-4 rounded-xl bg-amber-50 text-amber-900 p-4">
              <div className="font-medium">Why it matters</div>
              <p>2–3 sentences tying to SOLAR’s position statements; concrete impact on families and reentry.</p>
            </div>
          </article>

          {/* Highlight 3 */}
          <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Case — Appellate ruling ABC</h2>
            <p className="mt-2 text-slate-700">Short procedural history; holding; any split; what to watch next; deadlines.</p>
            <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
              <li><a className="text-slate-800 underline" href="https://example.uscourts.gov/docket/abc" target="_blank" rel="noopener">Docket / opinion</a></li>
              <li><a className="text-slate-800 underline" href="https://example.law/site" target="_blank" rel="noopener">Analysis (credible source)</a></li>
            </ul>
            <div className="mt-4 rounded-xl bg-emerald-50 text-emerald-900 p-4">
              <div className="font-medium">What you can do</div>
              <p>Share testimony, join an amicus effort, or submit a comment to rulemaking (links).</p>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
