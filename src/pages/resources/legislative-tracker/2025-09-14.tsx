import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_09_14(): JSX.Element {
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
        title="Legislative Tracker — Week of Sep 14, 2025 | SOLAR"
        description="This Week at a Glance, Highlights, States, Court Decisions, Media, Watchlist, with inline action tools."
      />

{/* ===== WEEKLY TRACKER: 2025-09-14 (covers Sep 6–13, 2025) ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">📅 This Week at a Glance (Sep 6–13, 2025)</h2>
    <p className="text-slate-100 mt-1">
      Light week for new enactments or court rulings. One Texas law now active; California &amp; Michigan have bills in early stages.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="font-semibold text-emerald-900">✅ Now in force</p>
      <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
        <li><span className="font-medium">TX HB 1465</span> (invasive visual recording ⇒ registry) effective <span className="whitespace-nowrap">Sep 1</span>.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
      <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
        <li><span className="font-medium">CA Rubio bill</span> — introduced; aims to close a registration loophole.</li>
        <li><span className="font-medium">MI SB 424</span> — amends SORA sections; awaiting committee action.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
      <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
      <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
        <li>No new published decisions or agency rules this week changing registry policy.</li>
      </ul>
    </div>
  </div>

  {/* Small “context” row */}
  <div className="mt-4 grid gap-4 md:grid-cols-2">
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="text-sm text-slate-700">
        <span className="font-semibold">Gaps this week:</span> no fresh rulings, ballot measures, or major agency guidance located.
      </p>
    </div>
    <div className="rounded-lg border border-slate-200 p-4">
      <p className="text-sm text-slate-700">
        <span className="font-semibold">What’s ahead:</span> CA committee schedules, MI committee postings, TX implementation memos/practice guidance.
      </p>
    </div>
  </div>
</section>

{/* ===== HIGHLIGHTS ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">⭐ Highlights</h2>
    <p className="text-slate-100 mt-1">Three items frame this week. Details below; action tools included under each state.</p>
  </div>

  <div className="space-y-4 text-slate-800">
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <p className="font-semibold">Texas — HB 1465 now in force</p>
      <p className="text-sm">Requires registration for invasive visual recording convictions; implementation phase and local guidance to watch.</p>
      <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">registry expansion</span>
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">implementation</span>
      </div>
    </div>

    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <p className="font-semibold">California — Sen. Rubio bill introduced (Sep 1)</p>
      <p className="text-sm">Targets a loophole affecting mandatory registration in certain unlawful intercourse cases; awaiting committee hearing.</p>
      <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">mandatory registration</span>
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">age-victim</span>
      </div>
    </div>

    <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
      <p className="font-semibold">Michigan — SB 424 filed</p>
      <p className="text-sm">Would amend SORA (MCL 28.724, 28.725, 28.728c). Awaiting analysis, hearings, possible substitute language.</p>
      <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">SORA</span>
        <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">legislative amendment</span>
      </div>
    </div>
  </div>
</section>

{/* ===== STATES ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🏛️ States</h2>
    <p className="text-slate-100 mt-1">Per-state snapshots with inline action tools (lookup + copy script).</p>
  </div>

  {/* California */}
  <article className="rounded-xl border border-slate-200 p-4 mb-6">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>🏴</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">California — Sen. Susan Rubio proposal (introduced)</h3>
        <p className="text-sm text-slate-600 mt-1">Date: Sep 1, 2025 • Status: introduced; pending committee referral/hearing</p>
        <p className="mt-3 text-slate-800">
          Closes a mandatory-registration gap for certain unlawful intercourse cases involving underage victims. Awaiting committee calendar and bill text specifics.
        </p>
        <div className="mt-2 text-sm">
          <a className="text-blue-700 underline" href="#" onClick={(e) => e.preventDefault()}>
            Senate SD-22 press release (placeholder)
          </a>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">registry expansion</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">mandatory registration</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">age-victim</span>
        </div>

        {/* Action box */}
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <p className="font-semibold text-amber-900 mb-2">Take Action (California)</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://openstates.org/find_your_legislator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white ring-1 ring-amber-300 text-amber-900 hover:bg-amber-100"
            >
              🔎 Find your CA legislators
            </a>
            <button
              onClick={() => {
                const text = `Subject: Please scrutinize proposed registry expansion

Dear Senator/Assemblymember,

Regarding the proposal to close a “loophole” via mandatory registration: broad expansions rarely improve safety, but they do create collateral harm and divert resources from prevention. Please ensure any changes are narrowly tailored, evidence-based, and include relief pathways and judicial discretion.

Thank you for your consideration.`;
                navigator.clipboard.writeText(text);
                alert("Script copied to clipboard.");
              }}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700"
            >
              📋 Copy script
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>

  {/* Michigan */}
  <article className="rounded-xl border border-slate-200 p-4 mb-6">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>🟦</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">Michigan — SB 424 (amending SORA)</h3>
        <p className="text-sm text-slate-600 mt-1">Status: introduced; amends MCL 28.724, 28.725, 28.728c</p>
        <p className="mt-3 text-slate-800">
          Proposes changes within Michigan’s Sex Offender Registration Act; specifics (duties/membership/terms) to be clarified by bill text and committee analysis.
        </p>
        <div className="mt-2 text-sm">
          <a className="text-blue-700 underline" href="#" onClick={(e) => e.preventDefault()}>
            Michigan Legislature bill page (placeholder)
          </a>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">Michigan</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">SORA</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">legislative amendment</span>
        </div>

        {/* Action box */}
        <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-3">
          <p className="font-semibold text-sky-900 mb-2">Take Action (Michigan)</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://openstates.org/find_your_legislator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white ring-1 ring-sky-300 text-sky-900 hover:bg-sky-100"
            >
              🔎 Find your MI legislators
            </a>
            <button
              onClick={() => {
                const text = `Subject: SB 424 — prioritize evidence-based SORA reform

Dear Senator/Representative,

As SB 424 moves forward, please emphasize research-backed policies: targeted supervision, treatment access, and relief mechanisms for low-risk people. Avoid broad expansions that strain resources and impede reintegration. Transparency and robust fiscal analysis are essential.

Thank you.`;
                navigator.clipboard.writeText(text);
                alert("Script copied to clipboard.");
              }}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
            >
              📋 Copy script
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>

  {/* Texas */}
  <article className="rounded-xl border border-slate-200 p-4">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>⭐</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900">Texas — HB 1465 now active (invasive visual recording ⇒ registry)</h3>
        <p className="text-sm text-slate-600 mt-1">Effective: Sep 1, 2025 • Status: implementation &amp; guidance phase</p>
        <p className="mt-3 text-slate-800">
          Adds registry requirement for invasive visual recording convictions (hidden cameras, non-consensual sexual recording, etc.). Watch for consistent application, training, and due-process safeguards.
        </p>
        <div className="mt-2 text-sm">
          <a className="text-blue-700 underline" href="#" onClick={(e) => e.preventDefault()}>
            Texas bill page / law text (placeholder)
          </a>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">registry expansion</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">implementation</span>
        </div>

        {/* Action box */}
        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p className="font-semibold text-emerald-900 mb-2">Take Action (Texas)</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://openstates.org/find_your_legislator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white ring-1 ring-emerald-300 text-emerald-900 hover:bg-emerald-100"
            >
              🔎 Find your TX legislators
            </a>
            <button
              onClick={() => {
                const text = `Subject: HB 1465 implementation — clarity and fairness

Dear Senator/Representative,

With HB 1465 in effect, please ensure clear implementation guidance, training on due-process protections, and public-facing materials that prevent overbroad application. The goal should be genuine safety without unnecessary collateral harm.

Thank you for your work.`;
                navigator.clipboard.writeText(text);
                alert("Script copied to clipboard.");
              }}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              📋 Copy script
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>

{/* ===== COURT DECISIONS ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">⚖️ Court Decisions</h2>
    <p className="text-slate-100 mt-1">No new controlling decisions identified this week.</p>
  </div>
  <p className="text-slate-800">
    We’ll continue scanning appellate dockets. If a decision alters standards, procedures, or relief pathways, it will appear here with a short read-in.
  </p>
</section>

{/* ===== MEDIA ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">📰 Media</h2>
    <p className="text-slate-100 mt-1">No standout coverage added this week; prioritizing primary sources.</p>
  </div>
  <p className="text-slate-800">
    Spot strong reporting that affects policy? Send it our way for inclusion in next week’s tracker.
  </p>
</section>

{/* ===== ROLLING WATCHLIST ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">👀 Rolling Watchlist</h2>
    <p className="text-slate-100 mt-1">Carried forward until status changes.</p>
  </div>

  <ul className="list-disc pl-6 space-y-2 text-slate-800">
    <li><span className="font-medium">California — Rubio bill:</span> track committee assignment, hearing date, amendments/floor vote timeline.</li>
    <li><span className="font-medium">Michigan — SB 424:</span> monitor committee agenda, staff analysis, substitutes, and floor movement.</li>
    <li><span className="font-medium">Texas — HB 1465:</span> watch for implementation memos, charging patterns, and clarifying guidance.</li>
  </ul>

  {/* Optional SEO note card (compact) */}
  <div className="mt-6 rounded-lg border border-slate-200 p-4">
    <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
    <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
      <li>“sex offender registry expansion California 2025”</li>
      <li>“Michigan SB 424 sex offender registration reform”</li>
      <li>“Texas invasive visual recording law registry requirement”</li>
    </ul>
  </div>
</section>
      {/* (end of weekly sections) */}
      <div className="mt-10 flex gap-3">
        <button onClick={handlePrint} className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm">
          Print
        </button>
      </div>
    </div>
  );
}
