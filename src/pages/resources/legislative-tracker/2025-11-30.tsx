import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_11_30(): JSX.Element {
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
        title="Legislative Tracker — Week of Nov 24–30, 2025 | SOLAR"
        description="Federal and New York courts expand sex-offense penalty reach while key constitutional cases remain pending. Week of Nov 24–30, 2025."
      />

      {/* ===== WEEKLY TRACKER: 2025-11-30 (covers Nov 24–30, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 24–30, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Federal and New York courts issued key rulings extending registry-related punishment logic, while major residency-law and relief cases remain pending.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>No new laws enacted this week; prior Texas registry reforms remain most recent.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>H.R. 6208 (“No Surrogacy for Sex Offenders Act”) remains in committee with no recorded hearings or markups.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">7th Cir. — United States v. Cohen:</span> false statement aiding SORNA evasion triggers “sex-offense–related” sentencing enhancement.</li>
              <li><span className="font-medium">NY — People v. Wagers:</span> Appellate court upholds Level 3 designation based on diagnoses and online contact pattern.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No new registry bills or rules filed; litigation continues to outpace legislation.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Awaiting Eleventh Circuit en banc decision in <em>Henry v. Sheriff of Tuscaloosa County</em> on Alabama’s family-separation residency law.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Two appellate opinions frame this quiet policy week.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Federal (7th Cir.) — <em>United States v. Cohen</em></p>
            <p className="text-sm">
              The Seventh Circuit ruled that lying to help someone evade SORNA registration qualifies for the harsher “sex-offense–related” obstruction guideline — even when the defendant isn’t a registrant. 
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">SORNA</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">sentencing</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">third-party liability</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://law.justia.com/cases/federal/appellate-courts/ca7/25-1746/25-1746-2025-11-24.html" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Read full opinion
              </a>
              <button
                onClick={() => copy(`COHEN-SCRIPT`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy explainer note
              </button>
            </div>
            <textarea id="COHEN-SCRIPT" className="sr-only" readOnly value={`Cohen (7th Cir., Nov 24, 2025) confirms that aiding SORNA evasion can trigger “sex-offense–related” sentencing enhancements even for non-registrants. Reinforces expansion of registry-linked penalties.`} />
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">New York — <em>People v. Wagers</em></p>
            <p className="text-sm">
              New York’s Appellate Division affirmed an upward departure to Level 3 under SORA, emphasizing paraphilic diagnoses and online contact with minors while rejecting claimed mitigating stability factors. 
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">NY SORA</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">upward departure</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">internet contact</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://law.justia.com/cases/new-york/appellate-division-second-department/2025/2024-01842.html" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View opinion
              </a>
              <button
                onClick={() => copy(`WAGERS-SCRIPT`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy summary note
              </button>
            </div>
            <textarea id="WAGERS-SCRIPT" className="sr-only" readOnly value={`People v. Wagers (NY App. Div. 2d Dept, Nov 26, 2025): Court affirms Level 3 upward departure based on psychological diagnoses and online conduct; rejects mitigation claims as non-exceptional.`} />
          </div>
        </div>
      </section>

      {/* ===== WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="watchlist">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">🔭 Watchlist</h2>
          <p className="text-slate-100 mt-1">Ongoing major cases to monitor.</p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-slate-800">
          <li><strong>Henry v. Sheriff of Tuscaloosa County</strong> — 11th Cir. en banc case on Alabama’s family-separation residency rule; amicus briefs emphasize family integrity and youth-offense proportionality. <a href="https://jlc.org/sites/default/files/attachments/2025-11/2025.11.07%20Henry%20En%20Banc%20Proposed%20Amicus%20Brief%20-%20FILESTAMPED.pdf" target="_blank" rel="noreferrer" className="text-sky-700 underline">Amicus PDF</a></li>
        </ul>
      </section>

      {/* ===== SEO NOTES ===== */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry case law 2025</li>
            <li>SORNA failure to register sentencing</li>
            <li>New York SORA risk level three upward departure</li>
            <li>Alabama sex offender residency law family separation</li>
            <li>juvenile sex offender registration constitutional challenges</li>
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
    '⚖️ 7th Cir. (Cohen) — false statement aiding SORNA evasion triggers sex-offense–related sentencing enhancement.',
    '⚖️ NY (Wagers) — appellate court affirms Level 3 upward departure based on diagnoses and online conduct.',
    '📜 No new registry legislation or agency rules filed this week.',
  ],
  highlights: [
    { icon: '🟦', title: 'United States v. Cohen (7th Cir.) — SORNA false-statement sentencing', url: 'https://law.justia.com/cases/federal/appellate-courts/ca7/25-1746/25-1746-2025-11-24.html' },
    { icon: '🟧', title: 'People v. Wagers (NY App. Div.) — Level 3 upward departure', url: 'https://law.justia.com/cases/new-york/appellate-division-second-department/2025/2024-01842.html' },
  ],
};