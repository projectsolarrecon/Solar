import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// 👇 The component name matches the slug (underscores)
export default function LegislativeTracker_2025_10_12(): JSX.Element {
  const [copied, setCopied] = useState<string | null>(null);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker — Week of Oct 4–10, 2025 | SOLAR"
        description="This Week at a Glance, Highlights, States, Court Decisions, Media, Watchlist, with inline action tools."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-12 (covers Oct 4–10, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 4–10, 2025)</h2>
          <p className="text-slate-100 mt-1">
            A federal sentencing order, a Michigan SORA stay decision, Florida’s new verification law, Georgia registry sweep, and Maryland audit revelations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Now in force */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>
                <span className="font-medium">FL HB 1351</span> takes effect Oct 1, requiring quarterly address verifications for predators and expanded reporting duties. 0
              </li>
            </ul>
          </div>

          {/* Moving / Introduced */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>
                Michigan legislature’s registry update bill (post-Does) — after Senate passage, final enactment is still pending.
              </li>
              <li>
                California’s SB 384 registry. Press reports claim further changes/amendments; verification in official bill record needed.
              </li>
            </ul>
          </div>

          {/* Courts / Agencies */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>
                Federal court denied Michigan’s motion to stay registry-invalidating portions of SORA 2021 pending appeal. 1
              </li>
              <li>
                U.S. Marshals publish a 2025 Fact Sheet on coordination in sex offender registration enforcement.
              </li>
              <li>
                Maryland audit reveals children placed in homes with registered sex offenders and a foster home employing a convicted offender. 2
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> Final ruling in Michigan Does appellate posture remains uncertain; California registry reform claims remain unverified at legislative sources.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Watch Michigan appeal timing, California bill movement, Florida implementation challenges, and enforcement sweep announcements in other states.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Five items frame this week. Details and action tools below.</p>
        </div>

        <div className="space-y-6 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🧑‍⚖️ Court — Michigan SORA Stay Denied</p>
            <p className="text-sm">
              On July 11, 2025, the U.S. District Court for the Eastern District of Michigan denied the state’s request to stay portions of the judgment in *Doe A v. Whitmer* (Does III), which had found certain retroactive registration expansions and out-of-state conviction disparities unconstitutional. 3  
              The case remains on appeal.  
            </p>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                View opinion
              </a>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🏛️ Legislation — Florida HB 1351 Comes Into Force</p>
            <p className="text-sm">
              Effective October 1, 2025, Florida’s HB 1351 strengthens reporting and verification: sexual predators must report employment details, vehicle and Internet identifiers, and in-state travel residences within 48 hours; local law enforcement must conduct quarterly address verifications for predators and annual verifications for offenders. 4  
            </p>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Bill text / summary
              </a>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🚔 Enforcement — Georgia Operation Watchful Eye Sweep</p>
            <p className="text-sm">
              During Georgia’s tenth annual *Operation Watchful Eye*, 87 sheriffs’ offices executed over 9,600 residence verifications, resulting in 48 arrests of sex offenders and issuance of 235 warrants for registry violations. 5  
              The concentrated sweep runs ahead of Halloween, reaffirming statewide registry enforcement capacity.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                News report
              </a>
            </div>
          </div>

          {/* Highlight 4 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">⚖️ Sentencing — Payette, Idaho Man to 30 Years + Registry</p>
            <p className="text-sm">
              Heath Adams of Payette, Idaho, was sentenced to 30 years in federal prison for producing child sexual abuse material, along with lifetime supervised release and a sex offender registration requirement. 6  
            </p>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                DOJ press release
              </a>
            </div>
          </div>

          {/* Highlight 5 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">📊 Audit / Oversight — Maryland Admission of Placement Issues</p>
            <p className="text-sm">
              A 70-page audit by Maryland’s Office of Legislative Audits reveals that, over years, some state children were placed in guardianship homes where registered sex offenders lived, and that a group foster home employed a convicted sex offender whose record was not flagged. 7  
            </p>
            <div className="mt-3 flex flex-wrap gap-2 print:hidden">
              <a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">
                Audit report coverage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES / COURTS / MEDIA / WATCHLIST ===== */}
      <section className="mt-8 space-y-8 text-slate-800">
        {/* STATES */}
        <div id="states">
          <h3 className="text-xl font-semibold">States</h3>
          <div className="mt-4 space-y-6">
            {/* Florida */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">Florida: HB 1351 Implementation & Challenges</p>
              <p className="text-sm">
                With HB 1351 now effective as of Oct 1, law enforcement must begin quarterly address verification for sexual predators and annual verification for offenders; registrants must report employment, Internet identifiers, vehicles, and in-state travel residences within 48 hours. 8  
                Key implementation questions: how sheriff offices will schedule verifications, system capacity at FDLE/SHO, data integration with DMV, and compliance enforcement.
              </p>
            </div>

            {/* Michigan */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">Michigan: Post-Does Legislative Next Steps</p>
              <p className="text-sm">
                After the district court’s partial judgment (Does III) and the denial of a stay on July 11, 2025, the Michigan Senate passed a registry reform bill intended to align law with the court ruling (e.g. removing retroactive burdens, narrowing out-of-state disparity). 9  
                However, the bill still must pass the House and be signed; expect implementation guidance, transitional relief, and compliance rules once enacted.
              </p>
            </div>

            {/* California */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">California: SB 384 Tiering & Petition for Removal</p>
              <p className="text-sm">
                Media reports have suggested new changes or loosenings to registry removal under SB 384, but the core law — which created a three-tier system (10, 20, lifetime) and allowed petition after minimum period — actually became effective January 1, 2021. 10  
                It’s essential to verify whether current reports refer to amendments or misinterpretations of existing structure.
              </p>
            </div>
          </div>
        </div>

        {/* COURT DECISIONS & LITIGATION */}
        <div id="courts">
          <h3 className="text-xl font-semibold">Court Decisions & Litigation</h3>
          <div className="mt-4 space-y-6">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="font-semibold">Does v. Whitmer / Michigan SORA Challenge</p>
              <p className="text-sm">
                The E.D. Mich court’s July 11, 2025 order denied Michigan’s stay request, allowing certain invalidated SORA 2021 provisions (retroactive extensions, out-of-state disparity) to remain blocked while appeal proceeds. 11  
                Plaintiffs continue to pursue appellate review, and future decisions may affect other states’ retroactivity challenges.
              </p>
            </div>
          </div>
        </div>

        {/* MEDIA & EDITORIALS */}
        <div id="media">
          <h3 className="text-xl font-semibold">Media & Editorials</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm">
                The Maryland audit has drawn commentary in *Maryland Matters* on systemic background checks and child welfare oversight. SOLAR could offer op-eds or a policy brief on registry data audits, interagency safeguards, and best practices for guardian placement screening. 12  
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm">
                Georgia sweep coverage (e.g. *Now Habersham*) emphasizes public safety messaging around Halloween; opportunity for SOLAR to provide infographics on efficacy of verification sweeps, comparative data across states, or model protocols for sheriffs. 13  
              </p>
            </div>
          </div>
        </div>

        {/* WATCHLIST */}
        <div id="watchlist">
          <h3 className="text-xl font-semibold">Watchlist (carry-forward + new)</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-800">
            <li>
              Michigan Does appellate briefs and timeline; any decision could set a national precedent on retroactivity.
            </li>
            <li>
              Michigan registry reform bill: track full text, amendments, House vote, and implementation roll-out.
            </li>
            <li>
              California registry reform: confirm whether recent media reports reflect new bills, amendments, or misconceptions.
            </li>
            <li>
              Early implementation metrics for Florida HB 1351: verifications conducted, compliance rates, system glitches, funding needs.
            </li>
            <li>
              Potential registry enforcement sweeps in other states (especially near Halloween), and any federal DOJ/SMART grant announcements relating to registry modernization.
            </li>
          </ul>
        </div>
      </section>

      {/* SEO / internal note */}
      <section className="mt-8">
        <div className="mt-6 rounded-lg border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">🔎 SEO focus (internal)</p>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>sex offender registry reform</li>
            <li>SORNA compliance & gaps</li>
            <li>registry litigation & retroactivity</li>
            <li>registration enforcement sweeps</li>
            <li>registry removal / relief / tiering</li>
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
    '✅ FL HB 1351 now in force (address verification, reporting expansion)',
    '⚖️ Mich court denies stay in Does v. Whitmer',
    '🚔 Georgia sweep: 48 arrests, 235 warrants',
  ],
  highlights: [
    { icon: '🧑‍⚖️', title: 'Mich SORA stay denied — appeal continues', url: '' },
    { icon: '🏛️', title: 'Florida’s HB 1351 enforcement begins', url: '' },
    { icon: '🚔', title: 'Georgia registry sweep nets arrests & warrants', url: '' },
    { icon: '⚖️', title: 'Idaho man sentenced to 30 years + required registration', url: '' },
    { icon: '📊', title: 'Maryland audit: children placed in homes with registered offenders', url: '' },
  ],
};