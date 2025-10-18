import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_10_18(): JSX.Element {
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
        title="Legislative Tracker — Week of Oct 18 2025 | SOLAR"
        description="U.S. sex-offender registry & policy roundup: audit findings, fee lawsuit, compliance operations, and implementation notes."
        keywords="sex offender registry reform, registry oversight audit, registry fee lawsuit, compliance checks, SOLAR"
      />

      {/* ===== WEEKLY TRACKER: 2025-10-18 (covers Oct 11–18 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 11–18 2025)</h2>
          <p className="text-slate-100 mt-1">
            Litigation over registry fees, a federal compliance sweep in D.C., and a Michigan audit headline this week’s registry policy updates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li><span className="font-medium">TX “Audrii’s Law”</span> — adds child-grooming to registry; active since Sep 1 2025, now generating new registrations.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>No new bill introductions reported this week.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">NARSOL v. West Virginia (S.D.W.Va.)</span> — lawsuit challenges $125 annual registry fee as punitive fine.</li>
              <li><span className="font-medium">U.S. Marshals Service / USAO DC</span> — enforcement sweep checks 883 registrants; 25 arrests.</li>
              <li><span className="font-medium">Michigan OAG Audit</span> — finds security lapses in state police registry management.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No new legislation, ballot measures, or residency-restriction updates located.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Watch filings in the West Virginia fee lawsuit; look for Michigan State Police responses to audit findings; monitor rollout metrics for Texas’s expanded law.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Key developments in registry oversight, litigation, and enforcement.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 — WV fee lawsuit */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">West Virginia — NARSOL files lawsuit over $125 registry fee</p>
            <p className="text-sm">Federal case challenges the annual registry fee as an unconstitutional punitive fine. Could set precedent on fee-based registry funding.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">fee requirement</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">punitive vs civil</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.narsol.org/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Case info</a>
              <button onClick={() => copy('SCRIPT-WV')} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy call script</button>
            </div>
            <textarea id="SCRIPT-WV" className="sr-only" readOnly value={`Hello, I'm contacting you regarding West Virginia's registry fee. Please support reforms that eliminate punitive fees for registrants. Thank you.`} />
          </div>

          {/* Highlight 2 — Michigan audit */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Michigan — State audit finds security gaps in registry oversight</p>
            <p className="text-sm">Audit of the Michigan State Police reveals hundreds of inactive accounts retaining registry access. Reform or oversight measures expected.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">registry oversight</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">data security</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://audgen.michigan.gov/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Read audit report</a>
            </div>
          </div>

          {/* Highlight 3 — Federal compliance sweep */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">Federal (D.C.) — Compliance sweep nets 25 arrests</p>
            <p className="text-sm">U.S. Marshals Service and D.C. U.S. Attorney’s Office conducted compliance checks of 883 registrants, arresting 25 for failure to register.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">enforcement sweep</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">SORNA compliance</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.justice.gov/usao-dc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">DOJ announcement</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEDIA ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-3">📰 Media & Editorials</h2>
        <p className="text-sm text-slate-800 mb-2"><span className="font-semibold">Michigan — Huron County Sheriff</span> warns of scams targeting registrants; highlights vulnerability to fraud and opportunity for proactive education.</p>
        <a href="https://www.thetimesherald.com/" target="_blank" rel="noreferrer" className="text-blue-700 underline text-sm">Read local coverage ( Times Herald )</a>
      </section>

      {/* ===== WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-3">🔎 Watchlist — Ongoing & New</h2>
        <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
          <li><span className="font-semibold">Michigan SORA litigation:</span> ongoing — monitor federal court filings and legislative responses.</li>
          <li><span className="font-semibold">West Virginia registry fee case:</span> newly filed — track pleadings and constitutional arguments.</li>
          <li><span className="font-semibold">Texas “Audrii’s Law” implementation:</span> active — watch early data and potential challenges.</li>
        </ul>
      </section>

      {/* ===== SEO FOCUS ===== */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform</li>
            <li>registry compliance checks</li>
            <li>registry oversight audit</li>
            <li>registry fee lawsuit</li>
            <li>child-grooming registration law</li>
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
    '✅ TX “Audrii’s Law” now in force (expands registry to child-grooming offenses)',
    '⚖️ NARSOL files lawsuit over WV registry fee',
    '📊 Michigan audit finds flaws in registry oversight',
    '🚔 Federal compliance sweep in D.C. nets 25 arrests',
  ],
  highlights: [
    { icon: '⚖️', title: 'West Virginia — Registry Fee Lawsuit Filed by NARSOL', url: 'https://www.narsol.org/' },
    { icon: '🟢', title: 'Michigan Audit Finds Registry Oversight Flaws', url: 'https://audgen.michigan.gov/' },
    { icon: '🟠', title: 'Federal Compliance Sweep in D.C.', url: 'https://www.justice.gov/usao-dc' },
  ],
};