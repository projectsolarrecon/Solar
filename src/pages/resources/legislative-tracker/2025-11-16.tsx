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
        description="This Week at a Glance, Highlights, States, Court Decisions, Media, Watchlist — with inline action tools."
        keywords="sex offender registry litigation 2025, Arizona lifetime registration, Operation Firewall Massachusetts, registry enforcement"
      />

      {/* ===== WEEKLY TRACKER: 2025-11-16 (covers Nov 9–15 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 9–15, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Arizona court upholds lifetime registration and online-identifier rules; Massachusetts conducts enforcement sweep targeting registration violations.
          </p>
        </div>

        {/* 3 cards: Now in force / Moving / Courts */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>No new registry-related laws took effect this week.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>No new registry-specific bills introduced this period.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">Doe v. Sheridan (Arizona U.S. District Court)</span> — Court upheld lifetime registration, online identifier, and residency-change notification provisions.</li>
              <li><span className="font-medium">Massachusetts State Police</span> — Announced Operation Firewall; 56 arrested including 7 for registry violations.</li>
            </ul>
          </div>
        </div>

        {/* Context row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> Few legislative filings or new civil-commitment cases located; many statehouses in recess.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Watch for any appeals in Doe v. Sheridan and follow-up enforcement or policy discussions in Massachusetts.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Key developments this week: Arizona federal court decision & Massachusetts enforcement operation.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Arizona — Doe v. Sheridan (U.S. District Court, D. Ariz.)</p>
            <p className="text-sm">
              The court upheld Arizona’s lifetime registration and online-identifier rules, finding they serve a legitimate public-safety interest and do not violate due process or free speech rights.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">lifetime registration</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">internet identifier</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">residency reporting</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.courtlistener.com/docket/DOEvSHERIDAN2025"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View Case Docket
              </a>
              <button
                onClick={() => copy('SCRIPT-AZ')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy summary for brief
              </button>
            </div>
            <textarea
              id="SCRIPT-AZ"
              className="sr-only"
              readOnly
              value={`Arizona federal court upheld lifetime registration and online-identifier reporting in Doe v. Sheridan (Nov 2025). The judge found the requirements constitutional under current precedent.`}
            />
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">Massachusetts — Operation Firewall (Enforcement Sweep)</p>
            <p className="text-sm">
              Massachusetts State Police announced a three-day child-exploitation sweep resulting in 56 arrests, including seven registrants charged with failing to register. Focus was enforcement rather than policy change.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">compliance sweep</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">registration enforcement</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.mass.gov/news/operation-firewall"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Official release
              </a>
              <button
                onClick={() => copy('SCRIPT-MA')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy outreach note
              </button>
            </div>
            <textarea
              id="SCRIPT-MA"
              className="sr-only"
              readOnly
              value={`Massachusetts State Police announced Operation Firewall (Nov 10, 2025), arresting 56 people including seven for registration violations. No new rule changes, but signals heightened enforcement.`}
            />
          </div>
        </div>
      </section>

      {/* ===== MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📰 Media & Watchlist</h2>
        </div>

        <div className="space-y-4 text-slate-800">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-semibold">Arizona Agenda — “Arizona has a registry problem” (Nov 13 2025)</p>
            <p className="text-sm">
              Opinion piece criticizing county-level inconsistency in supervision and notification. Suggested outreach for SOLAR commentary on statewide registry uniformity.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-slate-200 text-slate-900">opinion</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-slate-200 text-slate-900">supervision variation</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Rolling Watch-List:</span> Arizona appeal potential from Doe v. Sheridan; Massachusetts follow-ups on Operation Firewall; monitor federal SMART/DOJ rulemaking and special sessions for new bills.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEO NOTES ===== */}
      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry litigation 2025</li>
            <li>Arizona lifetime registration court decision</li>
            <li>Operation Firewall Massachusetts 2025</li>
            <li>sex offender internet identifier reporting law</li>
            <li>registration compliance sweep Massachusetts</li>
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
    '⚖️ Arizona court upholds lifetime registration and identifier rules',
    '🚓 Massachusetts Operation Firewall targets registration violations',
    '📰 Editorial calls for uniform statewide registry standards',
  ],
  highlights: [
    { icon: '⚖️', title: 'Arizona — Doe v. Sheridan (upheld lifetime registration)', url: 'https://www.courtlistener.com/docket/DOEvSHERIDAN2025' },
    { icon: '🚓', title: 'Massachusetts — Operation Firewall enforcement sweep', url: 'https://www.mass.gov/news/operation-firewall' },
  ],
};