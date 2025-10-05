import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function LegislativeTracker_2025_10_05(): JSX.Element {
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
        title="Legislative Tracker — Week of Oct 5, 2025 | SOLAR"
        description="Legislative roundup: NY buffer push, SMART grant NOFO, and Delaware SOAR alert."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-05 (covers Sep 28 – Oct 4, 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Sep 28 – Oct 4, 2025)</h2>
          <p className="text-slate-100 mt-1">
            New York officials push for a statewide 1,500 ft buffer law; SMART Office issues FY 25 grant guidance; Delaware steps up enforcement alerts.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>
                <span className="font-medium">Bee Cave (TX) Ordinance</span> — 2,000 ft child-safety buffer + Halloween rules now active. 
                <a href="https://www.statesman.com/news/local/lake-travis-view/article/bee-cave-sex-offender-residency-restrictions-21043654.php" target="_blank" rel="noreferrer">Read Bee Cave ordinance coverage</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>
                <span className="font-medium">NY S-(TBD)</span> — Statewide 1,500 ft school/playground residence buffer proposal in committee.  
                <a href="https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php" target="_blank" rel="noreferrer">Times Union article</a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>
                <span className="font-medium">SMART Office</span> — FY 25 Adam Walsh Act Implementation Grant webinar & NOFO open.
                <a href="https://smart.ojp.gov/funding" target="_blank" rel="noreferrer">View SMART NOFO</a>
              </li>
              <li>
                <span className="font-medium">Delaware State Police SOAR Unit</span> — ongoing wanted offender alert (Oct 3).  
                <a href="https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/" target="_blank" rel="noreferrer">View alert</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Gaps this week:</span> No new federal bills or major court opinions on registry reform.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-semibold">What’s ahead:</span> Track NY committee schedule and SMART grant deadlines for FY 25 applications.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Three developments frame this week’s registry policy landscape.</p>
        </div>

        <div className="space-y-4 text-slate-800">
          {/* Highlight 1 — NY buffer proposal */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">New York — Statewide 1,500 ft Residence Buffer Proposal</p>
            <p className="text-sm">
              County officials and state legislators are calling for a law barring Level 2 & 3 offenders from living within 1,500 ft of schools or playgrounds.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">residence restriction</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">buffer zones</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View media coverage
              </a>
              <button onClick={() => copy(`SCRIPT-NY-BUFFER`)}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-3 py-2 text-sm">
                Copy call script
              </button>
            </div>
            <textarea id="SCRIPT-NY-BUFFER" className="sr-only" readOnly
              value={`Hello, I'm a New York constituent concerned about the proposed 1,500 ft buffer. Evidence shows large buffers reduce housing stability and do not improve safety. Please ensure any bill is data-driven and includes reentry protections.`} />
          </div>

          {/* Highlight 2 — SMART grant guidance */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">DOJ SMART Office — FY 25 Grant Guidance</p>
            <p className="text-sm">
              The SMART Office released a webinar and NOFO for jurisdictions to support SORNA implementation and interstate coordination.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">SORNA implementation</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">grants</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://smart.ojp.gov/funding" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View NOFO
              </a>
              <button onClick={() => copy(`SCRIPT-SMART-GRANT`)}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 text-white px-3 py-2 text-sm">
                Copy outreach script
              </button>
            </div>
            <textarea id="SCRIPT-SMART-GRANT" className="sr-only" readOnly
              value={`Hello, I'm sharing the FY 25 SMART grant NOFO link for jurisdiction teams. Please review eligibility and deadlines for SORNA compliance funding: https://smart.ojp.gov/funding`} />
          </div>

          {/* Highlight 3 — Delaware enforcement alert */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Delaware State Police — SOAR Unit Enforcement Alert</p>
            <p className="text-sm">
              SOAR issued a public “wanted offenders” list and urged tips (Oct 3 update).
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">registration enforcement</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">non-compliance</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Official alert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES / COURTS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h3 className="text-xl font-semibold mb-2">⚖️ Court Decisions & Litigation</h3>
        <p className="text-sm text-slate-700">
          No new decisions this week. Carry-forward: <em>Donaldson v. City of El Reno</em> (OK Sup Ct Feb 4 2025) — retroactive 2,000 ft residency buffer upheld (subject to future appeals).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🗳️ Ballot Measures & Agency Updates</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>
            SMART Office NOFO active for FY 25 applications — SORNA implementation support.  
            <a href="https://smart.ojp.gov/funding" target="_blank" rel="noreferrer">SMART NOFO page</a>
          </li>
          <li>
            Delaware SOAR unit public alert (Oct 3).  
            <a href="https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/" target="_blank" rel="noreferrer">View alert</a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">📰 Media Coverage</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>
            <em>Times Union:</em> “Rensselaer County leaders call for state residency limits for sex offenders.”  
            <a href="https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php" className="text-blue-700 underline" target="_blank" rel="noreferrer">
              View article
            </a>
          </li>
          <li>
            <em>Statesman:</em> “Bee Cave passes sex offender residency restrictions.”  
            <a href="https://www.statesman.com/news/local/lake-travis-view/article/bee-cave-sex-offender-residency-restrictions-21043654.php" className="text-blue-700 underline" target="_blank" rel="noreferrer">
              View article
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">👁️ Watchlist / Ongoing</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Track NY buffer bill progress and committee hearing dates.</li>
          <li>Possible appeals in Oklahoma (<em>Donaldson</em>) and Alabama cohabitation case.</li>
          <li>Monitor municipal ordinances expanding Halloween restrictions (TX, FL, OH).</li>
          <li>Upcoming SMART and DOJ rulemaking on SORNA compliance.</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform</li>
            <li>buffer zone legislation / residency restriction</li>
            <li>SORNA compliance & grants</li>
            <li>registry relief / termination</li>
            <li>enforcement / noncompliance sweeps</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 flex gap-3">
        <button onClick={handlePrint} className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm">Print</button>
      </div>
    </div>
  );
}

// Exported teasers consumed by the hub page
export const teasers = {
  glance: [
    '📜 NY lawmakers push 1,500 ft buffer zone bill (statewide proposal).',
    '⚖️ SMART Office opens FY 25 SORNA grant NOFO + webinar.',
    '✅ Bee Cave (TX) enacts 2,000 ft buffer + Halloween restrictions.',
    '📣 Delaware issues SOAR “wanted offenders” alert (Oct 3).',
  ],
  highlights: [
    {
      icon: '🟠',
      title: 'New York – 1,500 ft Buffer Bill Introduced',
      url: 'https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php',
    },
    {
      icon: '🔵',
      title: 'SMART Office FY 25 Grant Webinar & NOFO',
      url: 'https://smart.ojp.gov/funding',
    },
    {
      icon: '🟢',
      title: 'Delaware SOAR Unit Enforcement Alert',
      url: 'https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/',
    },
  ],
};