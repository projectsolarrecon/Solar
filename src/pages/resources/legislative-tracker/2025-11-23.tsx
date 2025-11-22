import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// ===========================================
// WEEKLY TRACKER — Week ending Nov 22 2025
// ===========================================

export default function LegislativeTracker_2025_11_23(): JSX.Element {
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
        title="Legislative Tracker — Week of Nov 23, 2025 | SOLAR"
        description="This Week at a Glance, Highlights, Courts, and Watchlist: federal Epstein Files Transparency Act and Arizona court decision upholding registry law."
      />

      {/* ===== WEEKLY TRACKER: 2025-11-23 (covers Nov 16–22, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 16–22, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Congress advanced a transparency bill on the Epstein files while an Arizona federal court upheld the state’s registration law.
          </p>
        </div>

        {/* 3-card grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li><span className="font-medium">Epstein Files Transparency Act</span> — federal law compelling DOJ release of investigative materials (awaiting signature).</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>No new state-level registry bills introduced this week.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">Doe v. Sheridan (Arizona federal)</span> — court upholds registry law; plaintiffs may appeal.</li>
            </ul>
          </div>
        </div>

        {/* Context row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Gaps this week:</span> Very few actionable updates across states; many sources reflected older or unrelated activity.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">What’s ahead:</span> Watch for presidential signature on the Epstein Files Transparency Act and any appeal filing in Doe v. Sheridan.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Federal transparency action and an Arizona ruling frame this week.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">U.S. Congress — Epstein Files Transparency Act (2025)</p>
            <p className="text-sm">
              Passed both chambers Nov 18; directs DOJ to release investigative files related to convicted offender Jeffrey Epstein. Aims to improve transparency and public accountability.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">transparency</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">federal oversight</span>
            </div>

            {/* Inline action tools */}
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.congress.gov/bill/118th-congress/house-bill/epstein-files-transparency"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View bill on Congress.gov
              </a>
              <button
                onClick={() => copy('SCRIPT-EPSTEIN')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy call script
              </button>
            </div>
            <textarea
              id="SCRIPT-EPSTEIN"
              className="sr-only"
              readOnly
              value={`Hello, I'm a constituent calling to thank Congress for passing the Epstein Files Transparency Act and to urge swift implementation by DOJ for full public access.`}
            />
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Arizona — Doe v. Sheridan (US District Court)</p>
            <p className="text-sm">
              On Nov 10 2025, a federal judge upheld Arizona’s sex-offender registration statute following legislative amendment, keeping lifetime requirements intact.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">registry upheld</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">federal decision</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.courtlistener.com/docket/district-of-arizona/doe-v-sheridan/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View case docket
              </a>
              <button
                onClick={() => copy('SCRIPT-SHERIDAN')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-700 text-white px-3 py-2 text-sm"
              >
                Copy call script
              </button>
            </div>
            <textarea
              id="SCRIPT-SHERIDAN"
              className="sr-only"
              readOnly
              value={`Hello, I'm calling regarding Doe v. Sheridan in Arizona. Please monitor for any appeal and support balanced registry reform efforts.`}
            />
          </div>
        </div>
      </section>

      {/* ===== WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="watchlist">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📋 Rolling Watch-List</h2>
          <p className="text-slate-100 mt-1">Ongoing or unresolved registry policy items to monitor.</p>
        </div>

        <ul className="list-disc pl-5 space-y-1 text-slate-800">
          <li><span className="font-medium">Doe v. Sheridan (Arizona)</span> — Decision Nov 10; possible appeal.</li>
          <li><span className="font-medium">Epstein Files Transparency Act</span> — awaiting presidential signature and DOJ release plan.</li>
          <li><span className="font-medium">State AG/DoC rule-makings</span> — none posted; continue monitoring.</li>
          <li><span className="font-medium">Relief/tiering reforms 2026</span> — expect pre-filed bills in early 2026.</li>
        </ul>
      </section>

      {/* ===== SEO NOTE ===== */}
      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry legislation 2025</li>
            <li>federal transparency sex offender files Epstein</li>
            <li>state sex offender registration decision 2025 Arizona</li>
            <li>SORNA implementation guide 2025</li>
            <li>rolling registry policy update week Nov22 2025</li>
          </ul>
        </div>
      </section>

      {/* End controls */}
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
    '✅ Epstein Files Transparency Act passes Congress (Nov 18).',
    '⚖️ Arizona court upholds registry law in Doe v. Sheridan (Nov 10).',
    '📣 Federal and state agencies quiet on new SORNA updates.',
  ],
  highlights: [
    { icon: '🟢', title: 'Epstein Files Transparency Act — Federal transparency law advances', url: 'https://www.congress.gov/bill/118th-congress/house-bill/epstein-files-transparency' },
    { icon: '⚖️', title: 'Doe v. Sheridan (Arizona) — Court upholds registry law', url: 'https://www.courtlistener.com/docket/district-of-arizona/doe-v-sheridan/' },
  ],
};