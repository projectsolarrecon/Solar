import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_10_26(): JSX.Element {
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
    } catch { /* no-op */ }
  };

  return (
    <div className="bg-white">
      <SEO
        title="Registry & Policy Update — Week of Oct 18–24 2025 | SOLAR"
        description="Federal SORNA duty ruling, Arkansas Halloween presence-zone enforcement, and DOJ compliance operations dominate this week’s registry update."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-26 (covers Oct 18–24 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 18–24 2025)</h2>
          <p className="text-slate-100 mt-1">
            Federal courts reaffirmed SORNA registration duties as Arkansas counties launched Halloween compliance and presence-zone crackdowns.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>No new state registry statutes enacted this week.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>Michigan SORA revisions (continuing monitor).</li>
              <li>California SB 384 tiering implementation updates.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li><span className="font-medium">U.S. v. McGee (9th Cir.)</span> — Court upheld SORNA registration duties as non-punitive.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> No new bills filed; focus shifts to enforcement season operations.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Oct 31 presence checks nationwide and Michigan SORA appeal briefings.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Key rulings and operations shaping fall registry enforcement.</p>
        </div>

        <div className="space-y-4 text-slate-800">

          {/* Highlight 1 */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">⚖️ U.S. v. McGee — 9th Circuit Court of Appeals</p>
            <p className="text-sm">
              The panel affirmed a defendant’s duty to register under SORNA, holding that California’s requirements are regulatory, not punitive.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">sorna</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">ex-post-facto</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://law.justia.com/cases/federal/appellate-courts/ca9/24-5532/24-5532-2025-10-24.html" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View Opinion
              </a>
              <button
                onClick={() => copy('SCRIPT-MCGEE')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy summary note
              </button>
            </div>
            <textarea id="SCRIPT-MCGEE" className="sr-only" readOnly value={`The Ninth Circuit reaffirmed that SORNA duties remain valid and non-punitive. Courts continue to reject ex-post-facto claims under Smith v. Doe.`}/>
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🧾 D.C. SORNA Compliance Operation</p>
            <p className="text-sm">
              Federal task force verified 883 registrants in the District and arrested 25 for non-compliance (9 Tier III). Operation coordinated by U.S. Marshals and MPD.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">sorna</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">compliance sweep</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.justice.gov/usao-dc/pr/us-marshals-and-dc-police-complete-sorna-compliance-operation" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                DOJ Release
              </a>
              <button
                onClick={() => copy('SCRIPT-DC')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy brief
              </button>
            </div>
            <textarea id="SCRIPT-DC" className="sr-only" readOnly value={`Federal coordination on registry compliance resulted in 25 arrests in D.C., underscoring SORNA’s enforcement footprint.`}/>
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">🎃 Arkansas — Pre-Halloween Presence-Zone Checks</p>
            <p className="text-sm">
              Craighead and Walnut Ridge law enforcement announced curfews and published Level 3–4 registrant addresses ahead of Oct 31 enforcement.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">presence zone</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">halloween restriction</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.kait8.com/2025/10/21/sheriffs-office-releases-sex-offender-addresses-ahead-halloween/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Local Coverage
              </a>
              <button
                onClick={() => copy('SCRIPT-AR')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">
                Copy media pitch
              </button>
            </div>
            <textarea id="SCRIPT-AR" className="sr-only" readOnly value={`Use data-driven messaging: Halloween presence restrictions have no proven safety impact; emphasize evidence-based prevention.`}/>
          </div>
        </div>
      </section>

      {/* WATCHLIST */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">🔎 Watchlist</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-slate-800">
          <li>Michigan SORA litigation (<i>Does v. Whitmer</i>) — appeal pending.</li>
          <li>West Virginia registry fee lawsuit — await AG response.</li>
          <li>California SB 384 tiering implementation — track DOJ bulletins.</li>
          <li>Halloween restriction trend — summaries expected next week.</li>
        </ul>
      </section>

      {/* SEO */}
      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry halloween restrictions</li>
            <li>SORNA federal duty ruling</li>
            <li>Arkansas presence zone enforcement</li>
            <li>registry compliance operation DOJ</li>
            <li>sex offender policy 2025</li>
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
    '⚖️ 9th Circuit affirms SORNA duty in U.S. v. McGee',
    '🧾 D.C. federal operation verifies 883 registrants, 25 arrests',
    '🎃 Arkansas launches Halloween presence-zone enforcement',
  ],
  highlights: [
    { icon: '⚖️', title: 'U.S. v. McGee — SORNA Duty Ruling', url: 'https://law.justia.com/cases/federal/appellate-courts/ca9/24-5532/24-5532-2025-10-24.html' },
    { icon: '🧾', title: 'D.C. SORNA Compliance Operation', url: 'https://www.justice.gov/usao-dc/pr/us-marshals-and-dc-police-complete-sorna-compliance-operation' },
    { icon: '🎃', title: 'Arkansas Pre-Halloween Checks', url: 'https://www.kait8.com/2025/10/21/sheriffs-office-releases-sex-offender-addresses-ahead-halloween/' },
  ],
};