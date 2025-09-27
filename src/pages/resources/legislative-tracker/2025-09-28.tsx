import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_09_28(): JSX.Element {
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
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker — Week of Sep 28, 2025 | SOLAR"
        description="This Week at a Glance, Highlights, States, Court Decisions, Media, Watchlist — with inline action tools."
        keywords="sex offender registry reform 2025, registry removal, residency restrictions, SORNA rules, foster care audit"
      />

      {/* ===== WEEKLY TRACKER: 2025-09-28 (covers Sep 20–27, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Sep 20–27, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Modest pace of new registry activity: Texas law now in force, Oklahoma high court upholds retroactive residency limits, and Maryland audit exposes oversight gaps.
          </p>
        </div>

        {/* 3 cards: Now in force / Moving / Courts */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li><span className="font-medium">Texas HB 1465</span> — registry expansion to invasive visual recording offenses, effective Sept 1 and reported in force this week.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>California SB 384 — ongoing petitions for removal under tiered registry law.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>Oklahoma Supreme Court upheld retroactive residency restriction (Donaldson v. El Reno).</li>
              <li>Michigan federal court struck lifetime registration and internet identifier mandates (Goldsmith ruling, prior but in news).</li>
            </ul>
          </div>
        </div>

        {/* Context row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No brand-new state registry bills or agency rules introduced in the 7-day window.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Appeals in Michigan, oversight hearings in Maryland, and monitoring Texas HB 1465 enforcement.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Top items frame this week. Details and action tools below.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Texas — HB 1465 takes effect</p>
            <p className="text-sm">The new law adds invasive visual recording to registrable offenses. Enforcement is beginning statewide.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">registry expansion</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">visual recording</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://capitol.texas.gov" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Look up your rep
              </a>
              <button
                onClick={() => copy('SCRIPT-TX-1465')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy call script
              </button>
            </div>
            <textarea id="SCRIPT-TX-1465" className="sr-only" readOnly value={`Hello, I’m a constituent concerned about Texas HB 1465. Please monitor its enforcement and ensure it is not applied retroactively in ways that violate rights.`} />
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">Oklahoma — Donaldson v. El Reno</p>
            <p className="text-sm">The state Supreme Court upheld retroactive residency restrictions. Raises major ex post facto concerns.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">residency restrictions</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">ex post facto</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.oscn.net" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Case docket
              </a>
              <button
                onClick={() => copy('SCRIPT-OK-Donaldson')}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-3 py-2 text-sm">
                Copy advocacy script
              </button>
            </div>
            <textarea id="SCRIPT-OK-Donaldson" className="sr-only" readOnly value={`I’m writing regarding the Donaldson decision upholding retroactive residency restrictions. I urge reconsideration or legislative correction to avoid unconstitutional impacts.`} />
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Maryland — Audit exposes foster care registry gaps</p>
            <p className="text-sm">State audit shows foster/guardianship approvals allowed registrants in homes. Oversight failures pose safety and policy concerns.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">oversight</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">child welfare</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.marylandmatters.org" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Read article
              </a>
              <button
                onClick={() => copy('SCRIPT-MD-Audit')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 text-white px-3 py-2 text-sm">
                Copy oversight script
              </button>
            </div>
            <textarea id="SCRIPT-MD-Audit" className="sr-only" readOnly value={`Please investigate the Maryland foster care audit findings. Ensure registry data is properly integrated into child welfare oversight.`} />
          </div>
        </div>
      </section>

      {/* ===== STATES / COURT DECISIONS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-4">🏛️ Court Decisions & Litigation</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-800">
          <li><span className="font-semibold">Donaldson v. City of El Reno (OK Supreme Court)</span> — residency restriction retroactivity upheld, 5–3 ruling.</li>
          <li><span className="font-semibold">Michigan (Goldsmith, USDC)</span> — struck lifetime registration and internet identifier rules. Appeal expected.</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-4">📜 Legislation</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-800">
          <li><span className="font-semibold">Texas HB 1465</span> — registry expansion, now enforced.</li>
          <li><span className="font-semibold">California SB 384</span> — petitions for removal continue under tiering system.</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-4">📰 Media</h2>
        <p className="text-slate-700"><a href="https://www.marylandmatters.org" target="_blank" rel="noreferrer" className="underline">Maryland Matters</a> reported on the foster/guardianship audit revealing registry oversight gaps.</p>

        <h2 className="text-xl font-bold mt-6 mb-4">🔍 Watchlist</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>Michigan appeals following Goldsmith decision.</li>
          <li>Implementation and enforcement of Texas HB 1465.</li>
          <li>CA SB 384 petition uptake and judicial review.</li>
          <li>Maryland legislative oversight hearings on foster care audit.</li>
          <li>Potential new residency restriction proposals.</li>
          <li>Future SMART Office SORNA updates.</li>
        </ul>
      </section>

      {/* Optional SEO note card */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform 2025</li>
            <li>registry removal / tiering / petition</li>
            <li>residency restrictions &amp; ex post facto</li>
            <li>SORNA / federal registration rules</li>
            <li>registry oversight foster care / child welfare</li>
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
    '✅ Texas HB 1465 now in force (visual recording registry expansion)',
    '📜 California SB 384 petitions ongoing under tiered removal system',
    '⚖️ Oklahoma Supreme Court upholds retroactive residency restrictions',
    '📣 Maryland audit reveals foster care registry oversight failures',
  ],
  highlights: [
    { icon: '🟢', title: 'Texas HB 1465 takes effect — registry expansion', url: 'https://capitol.texas.gov' },
    { icon: '🟠', title: 'Oklahoma Supreme Court upholds residency retroactivity', url: 'https://www.oscn.net' },
    { icon: '🔵', title: 'Maryland audit exposes foster care registry oversight gaps', url: 'https://www.marylandmatters.org' },
  ],
};
