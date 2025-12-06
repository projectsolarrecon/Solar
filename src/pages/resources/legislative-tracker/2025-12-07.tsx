import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_12_07(): JSX.Element {
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
        title="Legislative Tracker — Week of Dec 7 2025 | SOLAR"
        description="Federal judge orders Epstein grand-jury transcripts released under new transparency law; Illinois Clean Slate coverage highlights exclusions for registrants."
      />

      {/* ===== WEEKLY TRACKER: 2025-12-07 (covers Nov 30 – Dec 6 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Nov 30 – Dec 6, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Epstein Files Transparency Act drives a major release-order; Congress pushes DOJ to comply; Illinois Clean Slate explainers spotlight ongoing exclusions for registrants.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li><span className="font-medium">Epstein Files Transparency Act</span> — law enacted Nov 2025; first judicial implementation order (Dec 5 FL District Court).</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>Bipartisan letter (Dec 3) presses DOJ for Epstein law compliance briefing by Dec 5.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>U.S. District Court (FL) orders grand-jury transcript release under Epstein law — DOJ deadline Dec 19.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Gaps this week:</span> Few new registry-specific statutes or cases; federal transparency issues dominate headlines.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">What’s ahead:</span> DOJ must release Epstein records by Dec 19; watch for further orders and Clean Slate implementation updates.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Three core items frame this week — federal transparency, oversight pressure, and Clean Slate exclusions.</p>
        </div>

        <div className="space-y-4 text-slate-800">

          {/* 1 — Federal court order implements Epstein Files law */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Florida (US District Court) — Epstein Files Transparency Act Order</p>
            <p className="text-sm">
              Judge Rodney Smith orders DOJ to release grand-jury transcripts from Epstein’s 2005-07 federal probe by Dec 19 under the new law, overriding usual secrecy rules.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">Epstein law</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">grand-jury transparency</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://apnews.com/article/bd036cbe2fa4e98d27aa473fd6daa3bd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Read AP coverage
              </a>
              <button
                onClick={() => copy('SCRIPT-EPSTEIN')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy commentary prompt
              </button>
            </div>
            <textarea
              id="SCRIPT-EPSTEIN"
              className="sr-only"
              readOnly
              value={`Talking point: Congress built a transparency law for Epstein but still hides registry data—ask why public scrutiny applies only to symbolic cases.`}
            />
          </div>

          {/* 2 — Congressional oversight letter */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">U.S. Congress — Epstein Files Transparency Act Oversight Letter (Dec 3)</p>
            <p className="text-sm">
              Five lawmakers seek a DOJ briefing on implementation of the new law by mid-December, signaling active oversight pressure.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">federal oversight</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">Epstein law</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://rollcall.com/2025/12/03/lawmakers-seek-update-from-doj-on-epstein-disclosure-law/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View Roll Call story
              </a>
              <button
                onClick={() => copy('SCRIPT-OVERSIGHT')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy call script
              </button>
            </div>
            <textarea
              id="SCRIPT-OVERSIGHT"
              className="sr-only"
              readOnly
              value={`Hi Senator — please ensure DOJ fully complies with the Epstein Files Transparency Act and consider why similar openness is denied for state registry data.`}
            />
          </div>

          {/* 3 — Illinois Clean Slate Act coverage */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Illinois — Clean Slate Act Explainers Highlight Exclusions</p>
            <p className="text-sm">
              New local media pieces explain Illinois’s Clean Slate record-sealing law and stress that people required to register as sex offenders remain excluded from relief.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">Clean Slate</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">collateral consequences</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://capitolnewsillinois.com/news/clean-slate-act-passes-after-failing-to-clear-legislature-in-past-years/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Read Capitol News IL
              </a>
              <button
                onClick={() => copy('SCRIPT-CLEANS')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy advocacy script
              </button>
            </div>
            <textarea
              id="SCRIPT-CLEANS"
              className="sr-only"
              readOnly
              value={`Message idea: Celebrate Clean Slate progress but note the ongoing exclusion of registrants — urge lawmakers to study fair record-relief for everyone.`}
            />
          </div>
        </div>
      </section>

      {/* ===== STATES / COURTS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h2 className="text-xl font-bold mb-2">📜 Rolling Watchlist</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-800 text-sm">
          <li><span className="font-medium">Henry v. Sheriff of Tuscaloosa County (AL)</span> — family-separation provision struck down; watch state response.</li>
          <li><span className="font-medium">Doe v. Sheridan (AZ)</span> — lifetime registry rules upheld; possible appeal pending.</li>
          <li><span className="font-medium">Illinois Clean Slate Act</span> — implementation phase continues; automation expected 2029.</li>
          <li><span className="font-medium">Epstein Files Transparency Act (Federal)</span> — DOJ release deadline Dec 19 2025.</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Epstein Files Transparency Act grand jury release</li>
            <li>Illinois Clean Slate Act sex offender exclusions</li>
            <li>sex offender registry collateral consequences 2025</li>
            <li>Henry v. Sheriff of Tuscaloosa County family separation</li>
            <li>Doe v. Sheridan lifetime registration Arizona</li>
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
    '⚖️ Federal judge orders Epstein grand-jury transcripts released under new law.',
    '📜 Congress presses DOJ on Epstein law compliance before Dec deadline.',
    '📣 Illinois Clean Slate coverage highlights registrant exclusions.'
  ],
  highlights: [
    { icon: '⚖️', title: 'Epstein Files Transparency Act — FL Court Order (Dec 5 2025)', url: 'https://apnews.com/article/bd036cbe2fa4e98d27aa473fd6daa3bd' },
    { icon: '🟡', title: 'Congressional Letter to DOJ on Epstein Act (Dec 3 2025)', url: 'https://rollcall.com/2025/12/03/lawmakers-seek-update-from-doj-on-epstein-disclosure-law/' },
    { icon: '🟢', title: 'Illinois Clean Slate Act — Explanatory Coverage (2025)', url: 'https://capitolnewsillinois.com/news/clean-slate-act-passes-after-failing-to-clear-legislature-in-past-years/' }
  ],
};