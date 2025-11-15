import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_11_16(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const copy = async (id: string) => {
    try {
      const el = document.getElementById(id) as HTMLTextAreaElement | null;
      const text = el?.value ?? '';
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1200);
    } catch {/* no-op */}
  };

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker — Week of Nov 16, 2025 | SOLAR"
        description="Federal court upholds Arizona lifetime registration law; Massachusetts enforcement sweep arrests 56 including registrants with outstanding warrants."
        keywords="sex offender registry litigation 2025, Arizona lifetime registration, Operation Firewall Massachusetts, internet identifier requirements, SOLAR Project"
      />

      {/* ===== WEEKLY TRACKER: 2025-11-16 (covers Nov 9–15, 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 9–15, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Arizona federal court upholds lifetime registration and online-identifier reporting; Massachusetts conducts multi-day enforcement sweep.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>No new registry-related statutes or agency rules enacted this week.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>No new registry-specific legislation introduced or advanced this period.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">Doe v. Sheridan (D. Ariz.)</span> — Court upheld lifetime registration, online-identifier, and residency-change notification mandates.</li>
              <li><span className="font-medium">Massachusetts State Police — Operation Firewall</span> — 56 arrests, including registrants with outstanding warrants.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Gaps this week:</span> No new research, legislation, or agency guidance; overall light week across states.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">What’s ahead:</span> Watch for Arizona appeal filings and Massachusetts follow-up announcements; continue monitoring DOJ/SMART rulemaking.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Key rulings and enforcement activity this week.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 — Arizona */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Arizona — Doe v. Sheridan (U.S. District Court, D. Ariz.)</p>
            <p className="text-sm">
              Federal judge dismissed plaintiff’s challenge to Arizona’s lifetime registration and online-identifier rules, finding the laws constitutional under existing precedent.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">lifetime registration</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">internet identifier</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">residency reporting</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://news.yahoo.com/arizona-legislature-wins-sex-offender-204917044.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View Coverage
              </a>
              <button
                onClick={() => copy('SCRIPT-AZ')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy summary
              </button>
            </div>
            <textarea
              id="SCRIPT-AZ"
              className="sr-only"
              readOnly
              value={`Doe v. Sheridan (D. Ariz., Nov 2025): Court upheld lifetime registration and online-identifier reporting, rejecting constitutional challenges on due process and free speech grounds.`}
            />
          </div>

          {/* Highlight 2 — Massachusetts */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">Massachusetts — Operation Firewall (Statewide Enforcement Sweep)</p>
            <p className="text-sm">
              Massachusetts State Police announced “Operation Firewall,” a coordinated sting resulting in 56 arrests, including seven registrants charged with failure to register. Operation emphasizes enforcement of existing law.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">compliance sweep</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">failure to register</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">enforcement</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.mass.gov/news/operation-firewall-child-exploitation"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Official Release
              </a>
              <button
                onClick={() => copy('SCRIPT-MA')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy summary
              </button>
            </div>
            <textarea
              id="SCRIPT-MA"
              className="sr-only"
              readOnly
              value={`Massachusetts State Police announced Operation Firewall (Nov 2025): 56 arrested statewide, including seven for registry violations. Highlights enforcement priorities without new rulemaking.`}
            />
          </div>
        </div>
      </section>

      {/* ===== MEDIA ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📰 Media Coverage</h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
          <p className="font-semibold">“Arizona has a registry problem” — <i>Arizona Agenda</i> (Nov 13, 2025)</p>
          <p className="text-sm">
            Opinion piece highlighting inconsistencies in Arizona’s supervision and notification practices across counties.
          </p>
          <a
            href="https://arizonaagenda.substack.com/p/arizona-has-a-registry-problem"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 mt-3 text-sm"
          >
            Read Article
          </a>
        </div>
      </section>

      {/* ===== WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">🔭 Watchlist</h2>
        </div>

        <div className="text-sm text-slate-800">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Arizona – Doe v. Sheridan:</strong> Case dismissed; monitor for appeal.</li>
            <li><strong>Massachusetts – Operation Firewall:</strong> Watch for prosecutions and potential policy reactions.</li>
            <li><strong>50-state trackers:</strong> No new registry bills; continue monitoring 2026 pre-filed items.</li>
            <li><strong>SMART/DOJ rulemaking:</strong> No updates; continue watching Federal Register.</li>
          </ul>
        </div>
      </section>

      {/* ===== SEO NOTES ===== */}
      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry litigation 2025</li>
            <li>Arizona lifetime registration ruling</li>
            <li>Massachusetts Operation Firewall arrests</li>
            <li>internet identifier requirements sex offenders</li>
            <li>federal sex offender registry policy updates</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 flex gap-3">
        <button onClick={handlePrint} className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm">
          Print
        </button>
      </div>
    </div>
  );
}

// Exported teasers consumed by the hub page
export const teasers = {
  glance: [
    '⚖️ Arizona federal court upholds lifetime registration law',
    '🚓 Massachusetts Operation Firewall arrests 56 statewide',
    '📰 Arizona Agenda highlights registry inconsistencies',
  ],
  highlights: [
    { icon: '⚖️', title: 'Arizona — Doe v. Sheridan (registration upheld)', url: 'https://news.yahoo.com/arizona-legislature-wins-sex-offender-204917044.html' },
    { icon: '🚓', title: 'Massachusetts — Operation Firewall enforcement sweep', url: 'https://www.mass.gov/news/operation-firewall-child-exploitation' },
  ],
};