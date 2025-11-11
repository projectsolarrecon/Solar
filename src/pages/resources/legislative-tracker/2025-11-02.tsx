import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_11_02(): JSX.Element {
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
        title="Legislative Tracker — Week of Nov 1 2025 | SOLAR"
        description="This week in registry and policy developments: Colorado Supreme Court reviews lifetime registration; Texas county issues Halloween advisory."
      />

      {/* ===== WEEKLY TRACKER: 2025-11-02 (covers Oct 26–Nov 1, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 26–Nov 1, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Colorado’s high court weighs lifetime registration as punishment; Texas sheriff issues a Halloween safety reminder.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>None newly in effect this week.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>No new registry-specific bills identified.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">Colorado Supreme Court</span> — arguments on lifetime registration; decision pending.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No major legislative or federal rulemaking releases.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Await Colorado decision; watch for early-November registry-relief bills and SMART Office updates.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Two items mark this quiet week in registry policy.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Colorado Supreme Court — Lifetime Registration Case</p>
            <p className="text-sm">
              The state’s high court is weighing whether lifetime registration for “sexually violent predators” is punitive under the
              Colorado and U.S. Constitutions. Oral argument held Oct 22; decision pending.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">ex-post-facto</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">lifetime registration</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">Colorado</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.coloradopolitics.com/2025/10/30/colorado-supreme-court-weighs-whether-lifetime-sex-offender-registration-amounts-to-punishment/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >View coverage</a>
              <button
                onClick={() => copy('SCRIPT-CO')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >Copy note script</button>
            </div>
            <textarea
              id="SCRIPT-CO"
              className="sr-only" readOnly
              value={`Talking point: The Colorado Supreme Court is considering whether lifetime registration constitutes punishment. Monitor decision and note implications for ex-post-facto relief strategies.`}
            />
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">El Paso County (TX) — Halloween Safety Advisory</p>
            <p className="text-sm">
              The sheriff urged parents to review the sex-offender registry before Halloween as part of community safety outreach.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">presence zone</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">Halloween</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">Texas</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.yahoo.com/news/articles/el-paso-county-sheriff-oscar-001123416.html"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >Read advisory</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES / COURT DECISIONS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-semibold mb-2">⚖️ Court Decisions & Litigation</h2>
        <p className="text-sm text-slate-800">
          <strong>Colorado Supreme Court</strong> — lifetime registration constitutionality; arguments Oct 22 2025, decision pending.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">📣 Media & Local Advisories</h2>
        <p className="text-sm text-slate-800">
          <strong>El Paso County, TX</strong> — Halloween registry advisory published Oct 30 2025.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🕒 Watchlist / Upcoming</h2>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Colorado Supreme Court decision — pending outcome.</li>
          <li>Monitor possible late-session bills on registry relief / termination.</li>
          <li>Track forthcoming SMART Office / DOJ rulemaking updates.</li>
          <li>Watch seasonal enforcement advisories through early November.</li>
        </ul>
      </section>

      {/* SEO note card */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry lifetime registration Colorado</li>
            <li>presence zone Halloween sex offender advisory Texas</li>
            <li>criminal justice sex offender registration policy updates November 2025</li>
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
    '⚖️ Colorado Supreme Court hears arguments on lifetime registration — decision pending.',
    '📣 El Paso County (TX) sheriff issues Halloween registry advisory.',
  ],
  highlights: [
    {
      icon: '⚖️',
      title: 'Colorado Supreme Court — Lifetime Registration Case',
      url: 'https://www.coloradopolitics.com/2025/10/30/colorado-supreme-court-weighs-whether-lifetime-sex-offender-registration-amounts-to-punishment/',
    },
    {
      icon: '📣',
      title: 'El Paso County (TX) — Halloween Safety Advisory',
      url: 'https://www.yahoo.com/news/articles/el-paso-county-sheriff-oscar-001123416.html',
    },
  ],
};