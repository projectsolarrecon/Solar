import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_11_09(): JSX.Element {
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
        title="Legislative Tracker — Week of Nov 8 2025 | SOLAR"
        description="Illinois Clean Slate Act passes legislature; Texas issues new registration guidance; federal and state compliance research noted."
      />

      {/* ===== WEEKLY TRACKER: 2025-11-09 (covers Nov 2–8, 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 2–8, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Illinois lawmakers advance a major record-sealing bill excluding registrants; Texas posts updated registration guidance; federal registry rulemaking remains quiet.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>None newly effective this week.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li><span className="font-medium">Illinois — Clean Slate Act</span> passed both chambers; awaits governor’s signature.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">Texas State Law Library</span> published updated guidance on registration duration.</li>
              <li>Colorado Supreme Court lifetime-registration case — decision pending.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No new federal SMART/OJP actions or registry-relief bills identified.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Governor’s decision on Illinois Clean Slate Act; potential late-fall filings on tiering or relief proposals.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Three items define this week’s policy snapshot.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* 1 — Illinois Clean Slate Act */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">Illinois — Clean Slate Act (Passed Legislature)</p>
            <p className="text-sm">
              Illinois lawmakers approved a measure to automatically seal eligible records beginning 2031. 
              It explicitly excludes convictions involving sexual violence against minors and other offenses requiring sex-offender registration.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">record sealing</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">collateral consequences</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">Illinois</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.ilga.gov/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Track bill
              </a>
              <button
                onClick={() => copy('SCRIPT-IL')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy note script
              </button>
            </div>
            <textarea
              id="SCRIPT-IL"
              className="sr-only" readOnly
              value={`Note for outreach: The Illinois Clean Slate Act has passed the legislature and awaits the governor’s signature. 
It excludes sexual-violence convictions and any requiring sex-offender registration. 
Monitor for amendments or implementation guidance.`}
            />
          </div>

          {/* 2 — Texas State Law Library Guidance */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Texas — State Law Library Registration Guidance</p>
            <p className="text-sm">
              The Texas State Law Library issued an updated explainer, clarifying that those convicted of certain offenses must remain on the registry for 10 years post-sentence or supervision completion.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">registration duration</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">Texas</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://guides.sll.texas.gov/sex-offenders/restrictions"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View guidance
              </a>
            </div>
          </div>

          {/* 3 — Cicero Institute Report */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Cicero Institute — State Compliance with SORNA</p>
            <p className="text-sm">
              This September 2025 report surveys state adherence to federal SORNA standards and cross-state data-sharing, offering a snapshot of national compliance trends.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">SORNA compliance</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">research</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.ciceroinstitute.org/"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View report
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES / COURTS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-semibold mb-2">⚖️ Court Decisions & Litigation</h2>
        <p className="text-sm text-slate-800">
          No new registry-specific court rulings this week. Prior Michigan federal decision (ACLU v. MI SORA, 2024) remains a key precedent on ex-post-facto issues.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">🏛️ State Legislation & Agency Guidance</h2>
        <ul className="list-disc pl-5 text-sm text-slate-800 space-y-1">
          <li>Illinois Clean Slate Act — awaiting signature.</li>
          <li>Texas State Law Library — updated 10-year registration resource.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">🕒 Watchlist / Upcoming</h2>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Illinois Clean Slate Act — governor’s action expected mid-November.</li>
          <li>Monitor state session drafts for tiering or relief bills.</li>
          <li>Federal SMART/OJP rulemaking — no new filings this week.</li>
          <li>Seasonal registry sweeps and safety-zone alerts to be tracked.</li>
        </ul>
      </section>

      {/* SEO focus */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform 2025</li>
            <li>SORNA compliance state sex offender registration</li>
            <li>sex offender record sealing exclusion sexual violence minors</li>
            <li>collateral consequences sex offender registration employment housing</li>
            <li>state sex offender registration guidance Texas 10 years</li>
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
    '📜 Illinois Clean Slate Act passes legislature — awaits governor’s signature.',
    '📘 Texas State Law Library publishes 10-year registration guidance.',
    '📗 Cicero Institute issues SORNA compliance report for states.',
  ],
  highlights: [
    { icon: '📜', title: 'Illinois Clean Slate Act (Passed Legislature)', url: 'https://www.ilga.gov/' },
    { icon: '📘', title: 'Texas State Law Library Registration Guidance', url: 'https://guides.sll.texas.gov/sex-offenders/restrictions' },
    { icon: '📗', title: 'Cicero Institute — SORNA Compliance Report', url: 'https://www.ciceroinstitute.org/' },
  ],
};