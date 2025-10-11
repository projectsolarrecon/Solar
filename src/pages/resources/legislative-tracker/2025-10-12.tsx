import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

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
    } catch {/* no-op */}
  };

  return (
    <div className="bg-white">
      <SEO
        title="Legislative Tracker — Week of Oct 4–10, 2025 | SOLAR"
        description="Court rulings, new laws, enforcement sweeps, and registry audits from across the U.S."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-12 (covers Oct 4–10, 2025) ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 4–10, 2025)</h2>
          <p className="text-slate-100 mt-1">
            Michigan’s SORA stay denied, Florida’s HB 1351 takes effect, Georgia’s sweep nets arrests, Maryland audit exposes oversight issues.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* ✅ Now in force */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>
                <span className="font-medium">Florida HB 1351</span> (effective Oct 1) — quarterly address verification for predators, annual for offenders, plus expanded reporting duties.{' '}
                <a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Bill summary / status
                </a>
              </li>
            </ul>
          </div>

          {/* 🕒 Moving / Introduced */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>
                Michigan’s post-<em>Does</em> registry reform bill — passed Senate, awaiting House concurrence and Governor signature.{' '}
                <a href="https://clearinghouse.net/case/45874/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Clearinghouse summary
                </a>
              </li>
              <li>
                California SB 384 reports in blogs—verify if this refers to new amendments.{' '}
                <a href="https://oag.ca.gov/system/files/media/sb384-registrant-faqs.pdf" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  OAG FAQ (existing law)
                </a>
              </li>
            </ul>
          </div>

          {/* ⚖️ Courts / Agencies */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>
                E.D. Mich denies Michigan’s motion to stay parts of <em>Does III</em>.{' '}
                <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Opinion (Dkt 192)
                </a>
              </li>
              <li>
                U.S. Marshals Service 2025 Fact Sheet outlines national registration enforcement coordination.{' '}
                <a href="https://www.usmarshals.gov/sites/default/files/media/document/usms-factsheet-sex-offender-investigations.pdf" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  USMS Fact Sheet
                </a>
              </li>
              <li>
                Maryland audit finds children placed in homes with registered offenders.{' '}
                <a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Maryland Matters coverage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps:</span> Michigan appellate calendar uncertain; California reports unverified in official record.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Track Michigan appeal, California SB 384 actions, Florida implementation, upcoming Halloween sweeps.</p>
          </div>
        </div>
      </section>

      {/* ===== ⭐ Highlights ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Five key developments — each with source link and action tools.</p>
        </div>

        <div className="space-y-6 text-slate-800">
          {/* Highlight 1 — Michigan Does */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🧑‍⚖️ Court — Michigan SORA Stay Denied</p>
            <p className="text-sm">
              On July 11 2025, E.D. Mich denied the state’s stay motion in <em>Does v. Whitmer</em> (Does III), keeping the constitutional ruling in force. 
              <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                Read Order Dkt 192
              </a>{' '}
              | 
              <a href="https://www.aclumich.org/en/what-you-need-know-about-does-iii" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                ACLU Michigan briefing
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">View opinion</a>
              <button onClick={() => copy(`Hello, I’m a Michigan constituent. Please ensure our registry statute fully complies with the Does III ruling and supports fair removal procedures.`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy script</button>
            </div>
          </div>

          {/* Highlight 2 — Florida HB 1351 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🏛️ Legislation — Florida HB 1351 Now Effective</p>
            <p className="text-sm">
              Effective Oct 1 2025, HB 1351 requires quarterly predator verifications and 48-hour reporting of employment, vehicle, or travel changes. 
              <a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                Florida Senate page
              </a>{' '}
              | 
              <a href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-signs-legislation-protect-children-against-sexual-crimes" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                Governor press release
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">View bill</a>
              <button onClick={() => copy(`I support Florida HB 1351’s enforcement improvements. Please ensure counties receive funding and publish compliance data.`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy advocacy script</button>
            </div>
          </div>

          {/* Highlight 3 — Georgia Sweep */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🚔 Enforcement — Georgia Operation Watchful Eye X</p>
            <p className="text-sm">
              Georgia’s 2025 statewide registry verification sweep checked 9,600+ residences and produced 48 arrests & 235 warrants. 
              <a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                News coverage (Now Habersham)
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Read story</a>
              <button onClick={() => copy(`Could you share your county’s data on recent registry verification sweeps (arrests, warrants, compliance rates)?`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy oversight script</button>
            </div>
          </div>

          {/* Highlight 4 — Idaho Sentence */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">⚖️ Sentencing — Idaho Man Gets 30 Years + Registration</p>
            <p className="text-sm">
              Heath Adams of Payette was sentenced to 30 years for producing child sexual abuse material and must register for life. 
              <a href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                DOJ press release
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">View DOJ release</a>
              <button onClick={() => copy(`To improve registry policy, will you support risk-based tiering and constitutional relief reviews post-sentence?`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy policy query</button>
            </div>
          </div>

          {/* Highlight 5 — Maryland Audit */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">📊 Audit — Maryland Child Placement Oversight Gaps</p>
            <p className="text-sm">
              A Sept 2025 audit found children placed in homes with registered sex offenders and a group home employing one. 
              <a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                Audit report (Maryland Matters)
              </a>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm">Read coverage</a>
              <button onClick={() => copy(`This audit shows urgent oversight failures. Will your agency publish a corrective action plan and enhance registry cross-checks for placements?`)}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm">Copy oversight request</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATES / COURT DECISIONS / MEDIA / WATCHLIST ===== */}
      <section className="mt-8 space-y-8 text-slate-800">
        {/* STATES */}
        <div id="states">
          <h3 className="text-xl font-semibold">States</h3>
          <div className="mt-4 space-y-6">
            {/* Florida */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">Florida — HB 1351 Implementation & Oversight</p>
              <p className="text-sm">
                With HB 1351 now in effect as of Oct 1, Florida’s FDLE must coordinate quarterly verifications for sexual predators and annual verifications for offenders, plus manage new 48-hour reporting requirements for employment, vehicle, and in-state travel addresses. 
                <a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Bill status
                </a>{' '}
                |{' '}
                <a href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-signs-legislation-protect-children-against-sexual-crimes" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Governor press release
                </a>
              </p>
            </div>

            {/* Michigan */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">Michigan — Post-Does Legislative Strategy</p>
              <p className="text-sm">
                Following the July 2025 denial of a stay in <em>Does v. Whitmer</em>, the Michigan Senate advanced a registry-reform bill intended to align SORA 2021 with constitutional limits (retroactivity, out-of-state disparity). 
                <a href="https://clearinghouse.net/case/45874/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Clearinghouse case summary
                </a>{' '}
                |{' '}
                <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  District court opinion
                </a>
              </p>
            </div>

            {/* California */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">California — SB 384 Tiering & Removal Claims</p>
              <p className="text-sm">
                Media posts have suggested renewed changes to registry removal under SB 384; in fact, the 2021 law already established three-tier (10/20/lifetime) durations and petition processes. Verify any proposed amendments via official record. 
                <a href="https://oag.ca.gov/system/files/media/sb384-registrant-faqs.pdf" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  OAG FAQ
                </a>{' '}
                |{' '}
                <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB384" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Legislative text
                </a>
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
                On July 11, 2025, the Eastern District of Michigan denied the state’s stay motion, leaving unconstitutional SORA provisions unenforceable pending appeal. 
                <a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Full order
                </a>{' '}
                |{' '}
                <a href="https://www.aclumich.org/en/what-you-need-know-about-does-iii" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  ACLU Michigan explainer
                </a>{' '}
                |{' '}
                <a href="https://clearinghouse.net/case/45874/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Clearinghouse record
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="font-semibold">Payette Man Sentenced — Federal Sex Offense & Registry Requirement</p>
              <p className="text-sm">
                Heath Adams of Payette, Idaho was sentenced to 30 years in federal prison for producing child sexual abuse material, plus lifetime supervised release and mandatory sex offender registration. 
                <a href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  DOJ press release
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* MEDIA & EDITORIALS */}
        <div id="media">
          <h3 className="text-xl font-semibold">Media & Editorials</h3>
          <div className="mt-4 space-y-6">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold">Maryland Matters — Child Placement Audit Coverage</p>
              <p className="text-sm">
                The audit revealed placement and screening failures involving registered offenders within guardian or foster homes. SOLAR could offer policy commentary on registry data checks and child safety protocols. 
                <a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Read coverage
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold">Georgia Sweep Media Reports (WALB / Now Habersham)</p>
              <p className="text-sm">
                Georgia’s Operation Watchful Eye X garnered broad coverage as sheriffs completed verification sweeps ahead of Halloween. SOLAR may prepare infographics comparing enforcement outcomes statewide. 
                <a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  News story
                </a>{' '}
                |{' '}
                <a href="https://www.walb.com/2025/10/09/operation-watchful-eye-x-results-announced/" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  WALB coverage
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* WATCHLIST */}
        <div id="watchlist">
          <h3 className="text-xl font-semibold">Watchlist (carry-forward + new)</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-800">
            <li>
              Michigan Does appeal timeline in Sixth Circuit — monitor briefs and potential decision impact on retroactivity doctrine.
            </li>
            <li>
              Michigan registry reform bill — watch House vote and implementation rules once enacted.
            </li>
            <li>
              California SB 384 — confirm whether “new tier changes” reported online represent actual amendments or re-summarized 2021 law.
            </li>
            <li>
              Florida HB 1351 — early implementation data (verification counts, funding needs, agency feedback).
            </li>
            <li>
              Registry enforcement operations nationwide — anticipate Halloween and holiday sweeps reports.
            </li>
            <li>
              DOJ SMART Office — potential fall guidance or grants for registry modernization and SORNA compliance updates.
            </li>
          </ul>
        </div>
      </section>

      {/* SEO Note */}
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
        <button onClick={handlePrint} className="px-3 py-2 rounded-lg bg-slate-800 text-white text-sm">Print</button>
      </div>
    </div>
  );
}

// Exported teasers consumed by the hub page
export const teasers = {
  glance: [
    '✅ FL HB 1351 now in force (address verification & expanded reporting)',
    '⚖️ Michigan court denies stay in Does v. Whitmer',
    '🚔 Georgia registry sweep — 48 arrests, 235 warrants',
  ],
  highlights: [
    {
      icon: '🧑‍⚖️',
      title: 'Michigan SORA stay denied — appeal continues',
      url: 'https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/',
    },
    {
      icon: '🏛️',
      title: 'Florida HB 1351 enforcement begins',
      url: 'https://www.flsenate.gov/Session/Bill/2025/1351',
    },
    {
      icon: '🚔',
      title: 'Georgia “Operation Watchful Eye X” sweep nets arrests & warrants',
      url: 'https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/',
    },
    {
      icon: '⚖️',
      title: 'Idaho man sentenced to 30 years + registry requirement',
      url: 'https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material',
    },
    {
      icon: '📊',
      title: 'Maryland audit finds children placed in homes with registered offenders',
      url: 'https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/',
    },
  ],
};