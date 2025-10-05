import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// 👇 Component name must match file
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
        description="NY statewide buffer push, SMART FY25 grant NOFO, Bee Cave ordinance, and Delaware SOAR enforcement alert."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-05 (covers Sep 28 – Oct 4, 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Sep 28 – Oct 4, 2025)</h2>
          <p className="text-slate-100 mt-1">
            NY proposes a 1,500 ft statewide buffer; SMART Office opens FY 25 grants; TX Bee Cave ordinance takes effect; DE SOAR unit issues enforcement alert.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>
                <span className="font-medium">Bee Cave (TX) Ordinance</span> — 2,000 ft child-safety buffer + Halloween rules now active.{' '}
                <a
                  href="https://www.statesman.com/news/local/lake-travis-view/article/bee-cave-sex-offender-residency-restrictions-21043654.php"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-emerald-900"
                >
                  View coverage
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>
                <span className="font-medium">NY S-(TBD)</span> — Statewide 1,500 ft residence buffer bill in committee.{' '}
                <a
                  href="https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-amber-900"
                >
                  Times Union story
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>
                <span className="font-medium">SMART Office</span> — FY 25 Adam Walsh Act Implementation Grant NOFO open.{' '}
                <a href="https://smart.ojp.gov/funding" target="_blank" rel="noreferrer" className="underline text-sky-900">
                  View NOFO
                </a>
              </li>
              <li>
                <span className="font-medium">Delaware State Police SOAR Unit</span> — Wanted-offender alert (Oct 3).{' '}
                <a
                  href="https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-sky-900"
                >
                  Official alert
                </a>
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
          <h2 className="text-2xl font-bold">⭐ Highlights & Action Tools</h2>
        </div>

        <div className="space-y-6 text-slate-800">
          {/* --- NY highlight --- */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold">New York — Statewide 1,500 ft Residence Buffer Proposal</p>
            <p className="text-sm">
              Local leaders urge legislation to ban Level 2 & 3 offenders from living within 1,500 ft of schools or playgrounds.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">residence restriction</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-amber-200 text-amber-900">buffer zones</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.nysenate.gov/find-my-senator"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Look up your Senator
              </a>
              <a
                href="https://nyassembly.gov/mem/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Look up Assembly Member
              </a>
              <button
                onClick={() => copy('SCRIPT-NY')}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 text-white px-3 py-2 text-sm"
              >
                Copy call/email script
              </button>
            </div>
            <textarea
              id="SCRIPT-NY"
              className="sr-only"
              readOnly
              value={`Hello, I'm a New York constituent writing about the proposed 1,500-foot buffer. Large buffers restrict housing and don't enhance safety. Please ensure any bill is evidence-based and protects housing & family stability.`}
            />
          </div>

          {/* --- TX highlight --- */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">Texas — Bee Cave Ordinance Now in Effect</p>
            <p className="text-sm">
              Bee Cave adopted a 2,000 ft buffer around child safety zones and added Halloween restrictions.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">local ordinance</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-emerald-200 text-emerald-900">Halloween rules</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://wrm.capitol.texas.gov/home"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Look up TX legislators
              </a>
              <button
                onClick={() => copy('SCRIPT-TX')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy local comment script
              </button>
            </div>
            <textarea
              id="SCRIPT-TX"
              className="sr-only"
              readOnly
              value={`Hello, I'm a Texas resident regarding Bee Cave's new ordinance. Please consider statewide guidance that balances public safety with housing stability and avoids over-broad restrictions.`}
            />
          </div>

          {/* --- DE highlight --- */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold">Delaware — SOAR Unit Enforcement Alert</p>
            <p className="text-sm">
              The Delaware State Police SOAR unit issued a public list of wanted registrants on Oct 3.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">registration enforcement</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-sky-200 text-sky-900">non-compliance</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://legis.delaware.gov/FindMyLegislator"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Find your DE legislators
              </a>
              <button
                onClick={() => copy('SCRIPT-DE')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 text-white px-3 py-2 text-sm"
              >
                Copy comment script
              </button>
            </div>
            <textarea
              id="SCRIPT-DE"
              className="sr-only"
              readOnly
              value={`Hello, I'm a Delaware resident. Please ensure enforcement actions protect public safety while safeguarding due process and clear registration guidance.`}
            />
          </div>

          {/* --- SMART highlight --- */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="font-semibold">DOJ SMART Office — FY 25 Grant Guidance</p>
            <p className="text-sm">
              The SMART Office released a webinar and NOFO to support SORNA implementation and coordination between jurisdictions.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-blue-200 text-blue-900">SORNA implementation</span>
              <span className="px-2 py-1 rounded-full bg-white ring-1 ring-blue-200 text-blue-900">federal grants</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://smart.ojp.gov/funding"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View NOFO
              </a>
              <a
                href="https://www.congress.gov/members/find-your-member"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Contact your Member of Congress
              </a>
              <button
                onClick={() => copy('SCRIPT-SMART')}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm"
              >
                Copy outreach script
              </button>
            </div>
            <textarea
              id="SCRIPT-SMART"
              className="sr-only"
              readOnly
              value={`Hello, I'm writing to share information on the FY 25 SMART grant NOFO. Please ensure jurisdictions are aware of funding for training and technology to maintain SORNA compliance: https://smart.ojp.gov/funding`}
            />
          </div>
        </div>
      </section>

      {/* ===== COURTS / MEDIA / WATCHLIST ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8">
        <h3 className="text-xl font-semibold mb-3">⚖️ Court Decisions & Litigation</h3>
        <p className="text-sm text-slate-700">
          No new decisions this week. Carry-forward: <em>Donaldson v. City of El Reno</em> (OK Sup Ct Feb 4 2025) — retroactive 2,000 ft residency buffer upheld (subject to future appeals).
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">📰 Media Coverage</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>
            <em>Times Union:</em> “Rensselaer County leaders call for state residency limits for sex offenders.” 
            <a
              href="https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php"
              className="text-blue-700 underline"
              target="_blank"
              rel="noreferrer"
            >
              View article
            </a>
          </li>
          <li>
            <em>Statesman:</em> “Bee Cave passes sex offender residency restrictions.” 
            <a
              href="https://www.statesman.com/news/local/lake-travis-view/article/bee-cave-sex-offender-residency-restrictions-21043654.php"
              className="text-blue-700 underline"
              target="_blank"
              rel="noreferrer"
            >
              View article
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">👁️ Watchlist / Ongoing Items</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          <ul className="list-disc pl-5 space-y-1">
            <li>Track NY buffer bill progress and committee hearings.</li>
            <li>Possible appeals in Oklahoma (<em>Donaldson</em>) and Alabama cohabitation case.</li>
            <li>Monitor municipal ordinances expanding Halloween restrictions (TX, FL, OH).</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>Upcoming SMART and DOJ rulemaking on SORNA compliance.</li>
            <li>New academic or NGO reports evaluating buffer zones, registry efficacy, or reentry outcomes.</li>
          </ul>
        </div>
      </section>

      {/* ===== SEO FOCUS ===== */}
      <section className="mt-8">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform</li>
            <li>buffer zone legislation / residency restriction</li>
            <li>SORNA compliance &amp; grants</li>
            <li>registry relief / termination</li>
            <li>enforcement / noncompliance sweeps</li>
          </ul>
        </div>
      </section>

      {/* ===== PRINT BUTTON ===== */}
      <div className="mt-10 flex gap-3">
        <button
          onClick={handlePrint}
          className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm"
        >
          Print
        </button>
      </div>
    </div>
  );
}

// Exported teasers consumed by the hub page
export const teasers = {
  glance: [
    '📜 NY lawmakers push 1,500 ft buffer bill (statewide proposal)',
    '✅ Bee Cave (TX) ordinance in force + Halloween rules',
    '⚖️ SMART Office opens FY 25 SORNA grant NOFO',
    '📣 Delaware SOAR unit issues Oct 3 enforcement alert',
  ],
  highlights: [
    {
      icon: '🟠',
      title: 'New York — 1,500 ft Buffer Bill Introduced',
      url: 'https://www.timesunion.com/news/article/rensselaer-officials-sex-offender-restrictions-21077834.php',
    },
    {
      icon: '🟢',
      title: 'Texas — Bee Cave Ordinance Now in Effect',
      url: 'https://www.statesman.com/news/local/lake-travis-view/article/bee-cave-sex-offender-residency-restrictions-21043654.php',
    },
    {
      icon: '🔵',
      title: 'SMART Office FY 25 Grant Webinar & NOFO',
      url: 'https://smart.ojp.gov/funding',
    },
    {
      icon: '🔹',
      title: 'Delaware — SOAR Unit Enforcement Alert',
      url: 'https://dsp.delaware.gov/2025/10/03/delaware-state-police-s-o-a-r-searching-for-wanted-sex-offenders-145/',
    },
  ],
};