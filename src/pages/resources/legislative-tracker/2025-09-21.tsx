import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_09_21(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {/* no-op */}
  };

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker — Week of Sep 21, 2025 | SOLAR"
        description="This Week at a Glance, Highlights, States, Court Decisions, Media, Watchlist, with inline action tools."
      />

      {/* ===== WEEKLY TRACKER: 2025-09-21 (covers Sep 14–20, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Sep 14–20, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Maryland audit exposes registry oversight gaps in foster care homes, while states continue to test registry reforms.
          </p>
        </div>

        {/* 3 cards: Now in force / Moving / Courts */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li><span className="font-medium">TX HB 1465</span> — invasive visual recording now registrable (effective Sep 1).</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li><span className="font-medium">CA Rubio bill</span> — closes loophole allowing some adults to avoid registry.</li>
              <li><span className="font-medium">MI SB 424</span> — registry reforms still pending.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>No major new federal or state decisions this week.</li>
            </ul>
          </div>
        </div>

        {/* Context row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> Oversight failures flagged in Maryland foster/guardianship homes.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Michigan SORA litigation updates, CA bill committee hearings.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Three items frame this week. Details and action tools below.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Maryland — Audit of foster homes</p>
            <p className="text-sm">Audit reveals deficiencies in guardianship approvals where registered sex offenders were present.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">oversight</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.marylandmatters.org/2025/09/17/audit-finds-sex-offender-in-foster-homes/?utm_source=solar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Look up your rep</a>
              <button onClick={() => copy(`SCRIPT-MD`)} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy call script</button>
            </div>
            <textarea id="SCRIPT-MD" className="sr-only" readOnly value={`The SOLAR Project requests prompt hearings into the audit findings; families and children deserve protections based on real risk, not blanket registry assumptions.`} />
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">California — Registry Loophole Bill</p>
            <p className="text-sm">Sen. Susan Rubio introduced a bill to close gaps allowing adults to avoid registry obligations.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">legislation</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://sd22.senate.ca.gov/news/2025-09-01-senator-rubio-introduces-bill-close-sex-offender-registry-loophole?utm_source=solar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Look up your rep</a>
              <button onClick={() => copy(`SCRIPT-CA`)} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy call script</button>
            </div>
            <textarea id="SCRIPT-CA" className="sr-only" readOnly value={`Please ensure that any registry expansion is evidence-based and not duplicative; SOLAR urges focus on oversight and resources, not just expanding registrable categories.`} />
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Texas — HB 1465 Now in Effect</p>
            <p className="text-sm">HB 1465 expands the registry to include invasive visual recording crimes, effective Sep 1.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">registry expansion</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1465?utm_source=solar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Look up your rep</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-4">🏛 States</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><a href="https://www.marylandmatters.org/2025/09/17/audit-finds-sex-offender-in-foster-homes/?utm_source=solar" target="_blank" rel="noreferrer">Maryland audit</a> — auditors criticized Social Services Administration for failing to flag offenders in foster settings.</li>
          <li><a href="https://sd22.senate.ca.gov/news/2025-09-01-senator-rubio-introduces-bill-close-sex-offender-registry-loophole?utm_source=solar" target="_blank" rel="noreferrer">California bill</a> — pending committee assignment.</li>
          <li><a href="https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1465?utm_source=solar" target="_blank" rel="noreferrer">Texas HB 1465</a> — now in effect.</li>
          <li><a href="https://www.legislature.mi.gov/documents/2025-2026/billintroduced/Senate/htm/2025-SIB-0424.htm?utm_source=solar" target="_blank" rel="noreferrer">Michigan SB 424</a> — reforms pending in committee.</li>
        </ul>
      </section>

      {/* ===== COURTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-4">⚖️ Court Decisions</h2>
        <p className="text-slate-700">No new published decisions this week. Monitoring Michigan Supreme Court docket for <em>Does III</em> SORA litigation.</p>
      </section>

      {/* ===== MEDIA ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-4">📰 Media</h2>
        <p className="text-slate-700"><strong>Maryland Matters</strong>: <em>Audit finds sex offender in foster homes</em> (Sep 17, 2025). Coverage highlights oversight failures.</p>
        <p className="text-sm text-slate-600 mt-2">Outreach idea: Pitch SOLAR’s position on collateral consequences and risks of over-broad registry categories, noting that current lists do not necessarily align with actual child safety outcomes.</p>
      </section>

      {/* ===== WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-4">👀 Watchlist</h2>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Michigan SB 424 — registry reforms pending.</li>
          <li>California Rubio bill — awaiting committee action.</li>
          <li>Wyoming HB 0280 — reclassification/verification frequency bill.</li>
          <li>Federal — monitor DOJ SMART Office / USSC for guidance updates in fall.</li>
        </ul>
      </section>

      {/* ===== SEO ===== */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Maryland foster home audit sex offender registry 2025</li>
            <li>California closes loophole sex offender registry</li>
            <li>Texas invasive visual recording registry law 2025</li>
            <li>Michigan SB 424 registry reform bill</li>
            <li>sex offender registry oversight failures 2025</li>
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
    '📑 Maryland audit finds offenders in foster homes',
    '🏛 California bill to close registry loophole introduced',
    '✅ Texas HB 1465 now in effect',
    '📜 Michigan SB 424 registry reforms still pending',
    '⚖️ No major court decisions this week',
  ],
  highlights: [
    { icon: '🟢', title: 'Maryland audit exposes oversight failures', url: 'https://www.marylandmatters.org/2025/09/17/audit-finds-sex-offender-in-foster-homes/?utm_source=solar' },
    { icon: '🟠', title: 'California bill closes registry loophole', url: 'https://sd22.senate.ca.gov/news/2025-09-01-senator-rubio-introduces-bill-close-sex-offender-registry-loophole?utm_source=solar' },
    { icon: '🔵', title: 'Texas HB 1465 takes effect', url: 'https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB1465?utm_source=solar' },
  ],
};
