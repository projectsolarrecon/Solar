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
        description="This week at a glance: court rulings, new laws in Florida, enforcement sweeps, audits, and registry litigation."
      />

      {/* ===== WEEKLY TRACKER: 2025-10-12 (covers Oct 4–10, 2025) ===== */}
      {/* This Week at a Glance */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">📅 This Week at a Glance (Oct 4–10, 2025)</h2>
          <p className="text-slate-100 mt-1">
            A federal judge denies Michigan’s stay in Does; Florida’s HB 1351 goes live; Georgia’s registry sweep yields arrests & warrants; Maryland audit uncovers state oversight gaps.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Now in force */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">✅ Now in force</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-emerald-900/90">
              <li>
                <span className="font-medium">Florida HB 1351</span> is effective Oct 1, mandating quarterly address verifications for sexual predators and annual verifications for offenders — plus expanded reporting duties.  
                (<a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer">bill summary / status</a>)  
              </li>
            </ul>
          </div>

          {/* Moving / Introduced */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-900">🕒 Moving / Introduced</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-amber-900/90">
              <li>
                Michigan’s post-Does registry reform bill (after *Does III*) — passed in the Senate, awaiting House concurrence & Governor’s signature.
              </li>
              <li>
                California’s SB 384 registry reporting in press — verify whether this is a new amendment or reprint of existing tiering structure.
              </li>
            </ul>
          </div>

          {/* Courts / Agencies */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-900">⚖️ Courts / Agencies</p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sky-900/90">
              <li>
                The U.S. District Court (E.D. Mich) denied Michigan’s motion to stay portions of the *Does III* judgment.  
                (<a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Opinion & Order denying stay</a>)  
              </li>
              <li>
                U.S. Marshals Service publishes its 2025 Sex Offender Investigations Fact Sheet (coordination, enforcement). 
              </li>
              <li>
                Maryland audit discloses that state children were placed in guardianship homes with registered sex offenders, and a group foster home employed a convicted offender whose status was not detected.  
                (<a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer">Maryland Matters coverage</a>)  
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">Gaps this week:</span> The Michigan appellate posture remains ambiguous; and California registry reform claims lack verification in official legislative sources.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm text-slate-700"><span className="font-semibold">What’s ahead:</span> Watch Michigan’s appellate briefs/ruling, California SB 384 activity, early implementation of Florida’s new verification rules, and more enforcement sweep announcements nationwide.</p>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-white rounded-2xl shadow p-6 border border-slate-200 mt-8" id="highlights">
        <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold">⭐ Highlights</h2>
          <p className="text-slate-100 mt-1">Five developments stand out—dive deeper and take action. Tools below help with replication or constituent engagement.</p>
        </div>

        <div className="space-y-6 text-slate-800">
          {/* Highlight 1 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🧑‍⚖️ Court — Michigan SORA Stay Denied</p>
            <p className="text-sm">
              On July 11, 2025, the U.S. District Court for the Eastern District of Michigan denied Michigan’s motion to stay portions of the *Does III* decision, rejecting the state’s attempt to pause enforcement while appeal proceeds.  
              (<a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order denying stay (Dkt. 192)</a>, see legal analysis)  
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Read the opinion
              </a>
              <button
                onClick={() =>
                  copy(
                    `Hello, I’m a constituent in Michigan (or potential stakeholder). I’m concerned about ongoing registry litigation and ask your office: What is your current position on aligning SORA 2021 with the Does III judgment, and will you support a clear path for removal or relief for affected individuals?`
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy call/email script
              </button>
            </div>
            <textarea id="SCRIPT-MICH-DOES" className="sr-only" readOnly value={`Hello, I’m a constituent in Michigan (or potential stakeholder). I’m concerned about ongoing registry litigation and ask your office: What is your current position on aligning SORA 2021 with the Does III judgment, and will you support a clear path for removal or relief for affected individuals?`} />
          </div>

          {/* Highlight 2 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🏛️ Legislation — Florida HB 1351 Enforcement Begins</p>
            <p className="text-sm">
              Effective October 1, 2025, HB 1351 enacts robust reforms: controllers must verify address quarterly for predators (annual for offenders), registrants must report employment/vehicle/travel/residence changes within 48 hours, and local law enforcement must conduct verifications.  
              (<a href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer">Florida Senate summary & status</a>)  
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.flsenate.gov/Session/Bill/2025/1351"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                View bill status
              </a>
              <button
                onClick={() =>
                  copy(
                    `As a concerned constituent in Florida, I support HB 1351’s goals of better tracking and accountability. Please share your plan for resourcing local law enforcement verification. Will you ensure budget allocations and audit reporting to monitor compliance?`
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy comment request / advocacy script
              </button>
            </div>
            <textarea id="SCRIPT-FL-1351" className="sr-only" readOnly value={`As a concerned constituent in Florida, I support HB 1351’s goals of better tracking and accountability. Please share your plan for resourcing local law enforcement verification. Will you ensure budget allocations and audit reporting to monitor compliance?`} />
          </div>

          {/* Highlight 3 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">🚔 Enforcement — Georgia Operation Watchful Eye Sweeps</p>
            <p className="text-sm">
              In the 2025 *Operation Watchful Eye*, Georgia’s law enforcement agencies conducted statewide verification sweeps. Multiple news outlets report **48 arrests** and **235 warrants** for registry violations across counties. (<a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer">news coverage</a>)  
              These sweeps typically intensify ahead of Halloween to enforce compliance.  
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print-hidden">
              <a
                href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Read media report
              </a>
              <button
                onClick={() =>
                  copy(
                    `Hello, I understand your office conducts registration verification sweeps like “Operation Watchful Eye.” Could you share data from recent sweeps (number of verifications, arrests, warrants)? Also, how do you evaluate cost vs. recidivism outcomes?`
                  )
                }
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy inquiry / oversight script
              </button>
            </div>
            <textarea id="SCRIPT-GA-SWEEP" className="sr-only" readOnly value={`Hello, I understand your office conducts registration verification sweeps like “Operation Watchful Eye.” Could you share data from recent sweeps (number of verifications, arrests, warrants)? Also, how do you evaluate cost vs. recidivism outcomes?`} />
          </div>

          {/* Highlight 4 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">⚖️ Sentencing — Idaho Defendant to 30 Years + Registration</p>
            <p className="text-sm">
              Heath Adams, of Payette, Idaho, received a 30-year federal prison sentence for producing child sexual abuse material. He will also be subject to lifetime supervised release plus sex offender registration.  
              (<a href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material" target="_blank" rel="noreferrer">DOJ press release</a>)  
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print:hidden">
              <a
                href="https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                See DOJ release
              </a>
              <button
                onClick={() =>
                  copy(
                    `Thank you for imposing a strong sentence in this federal case. To improve registry policy, would you support expanding post-conviction review processes, risk-based tiering, or pathways to relief where constitutional concerns exist?`
                  )
                }
                className="inline-flex items-centered gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy policy request script
              </button>
            </div>
            <textarea id="SCRIPT-ID-SENTENCE" className="sr-only" readOnly value={`Thank you for imposing a strong sentence in this federal case. To improve registry policy, would you support expanding post-conviction review processes, risk-based tiering, or pathways to relief where constitutional concerns exist?`} />
          </div>

          {/* Highlight 5 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold">📊 Audit / Oversight — Maryland Placement & Oversight Gaps</p>
            <p className="text-sm">
              A 2025 audit by Maryland’s Office of Legislative Audits flagged that over multiple years, children were placed in guardianship or foster homes with registered sex offenders, and a group home employed a convicted offender whose record had not been flagged.  
              (<a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer">audit coverage</a>)  
              The findings pose serious questions about interagency checks, placement protocols, and registry-data audit functions.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 print-hidden">
              <a
                href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm"
              >
                Review audit coverage
              </a>
              <button
                onClick={() =>
                  copy(
                    `The Maryland audit draws alarming conclusions on child placement oversight. Could your office publish a plan to audit registry-data integrity, interagency screening checks, and improvement timelines?`
                  )
                }
                className="inline-flex items-centered gap-2 rounded-lg bg-emerald-600 text-white px-3 py-2 text-sm"
              >
                Copy oversight request script
              </button>
            </div>
            <textarea id="SCRIPT-MD-AUDIT" className="sr-only" readOnly value={`The Maryland audit draws alarming conclusions on child placement oversight. Could your office publish a plan to audit registry-data integrity, interagency screening checks, and improvement timelines?`} />
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
              <p className="font-semibold">Florida: HB 1351 Implementation & Oversight</p>
              <p className="text-sm">
                With HB 1351 now live, Florida’s FDLE must build or update reporting infrastructure (e.g. in-state travel residence, employer data, vehicle data) and coordinate with local sheriffs for verification workflows. (<a href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-signs-legislation-protect-children-against-sexual-crimes" target="_blank" rel="noreferrer">Governor’s press release</a>)  
                Key questions: how agencies will fund verifications, audit compliance, and manage registrant volume.
              </p>
            </div>

            {/* Michigan */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">Michigan: Post-Does Legislative Strategy</p>
              <p className="text-sm">
                Following *Does III* and stay-denial, the Michigan Senate passed a registry reform bill intended to align statute with the court’s constitutional constraints (removing retroactivity, narrowing disparity). (<a href="https://clearinghouse.net/case/45874/" target="_blank" rel="noreferrer">Clearinghouse summary</a>)  
                The text may require transitional relief, removal pathways, and administrative rules once enacted.
              </p>
            </div>

            {/* California */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-semibold">California: SB 384 Tiering & Removal Claims</p>
              <p className="text-sm">
                Recent reporting suggests SB 384 may change the registry tier system or expand removal eligibility. Note: California’s existing law already implements a three-tier structure and some removal petitions under defined conditions (in effect since 2021). (<a href="https://oag.ca.gov/system/files/media/sb384-registrant-faqs.pdf" target="_blank" rel="noreferrer">OAG FAQ on SB 384</a>)  
                We must check the official legislative amendments for real changes beyond media summaries.
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
                The July 11, 2025 denial of Michigan’s stay motion (E.D. Mich) keeps significant parts of the *Does III* decision live while appeal proceeds. (<a href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">district court’s order</a>)  
                Plaintiffs have already sought relief in the Sixth Circuit — any appellate decision could affect registry retroactivity doctrine nationwide. (<a href="https://www.aclumich.org/en/what-you-need-know-about-does-iii" target="_blank" rel="noreferrer">ACLU Michigan explainer</a>)
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
                The Maryland audit story has sparked commentary in <em>Maryland Matters</em> around interagency oversight and registry data practices. SOLAR could pitch a guest essay or policy memo on registry-audit methodology, interjurisdictional data checks, or safer placement protocols.  
                (<a href="https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/" target="_blank" rel="noreferrer">audit story</a>)
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm">
                Coverage of Georgia’s sweeps (e.g., <em>Now Habersham</em>) emphasizes public safety messaging ahead of Halloween; SOLAR might offer infographics showing sweep efficacy and compliance trajectories across states.  
                (<a href="https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/" target="_blank" rel="noreferrer">sweep coverage</a>)
              </p>
            </div>
          </div>
        </div>

        {/* WATCHLIST */}
        <div id="watchlist">
          <h3 className="text-xl font-semibold">Watchlist (carry-forward + new)</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-800">
            <li>
              Michigan Does appellate briefs and timeline — any Sixth Circuit ruling could become a national benchmark.
            </li>
            <li>
              Implementation details of Michigan registry reform bill (amendments, administrative rules, funding).
            </li>
            <li>
              Whether SB 384 in California introduces new tiering or removal expansion (vs. reinterpretation of existing law).
            </li>
            <li>
              Early metrics for Florida HB 1351: how many verifications conducted, compliance rates, reported difficulties, and agency reports.
            </li>
            <li>
              Additional registry enforcement sweeps in states (especially around Halloween), and any DOJ/SMART grant or federal guidance releases concerning registry modernization.
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
    {
      icon: '🧑‍⚖️',
      title: 'Mich SORA stay denied — appeal continues',
      url: 'https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/',
    },
    {
      icon: '🏛️',
      title: 'Florida’s HB 1351 enforcement begins',
      url: 'https://www.flsenate.gov/Session/Bill/2025/1351',
    },
    {
      icon: '🚔',
      title: 'Georgia registry sweep nets arrests & warrants',
      url: 'https://nowhabersham.com/sheriffs-sweep-nets-arrests-warrants-in-sex-offender-checks/',
    },
    {
      icon: '⚖️',
      title: 'Idaho man sentenced to 30 years + registration',
      url: 'https://www.justice.gov/usao-id/pr/payette-man-sentenced-30-years-federal-prison-producing-child-sexual-abuse-material',
    },
    {
      icon: '📊',
      title: 'Maryland audit: children placed in homes with registered offenders',
      url: 'https://marylandmatters.org/2025/09/17/state-may-have-put-children-in-homes-where-registered-sex-offenders-lived/',
    },
  ],
};