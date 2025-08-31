            import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function InternationalTravelGuide(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="International Travel Guide for Registry Individuals | The SOLAR Project"
        description="Plain-language guidance for U.S.-based registrants planning international travel, including passport requirements, 21-day notice rules, and country-specific entry information."
        keywords="international travel sex offender registry, passport identifier, 21 day notice, SORNA travel requirements, Schengen area, travel restrictions"
      />

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700 text-white shadow-lg">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="mb-4">
                <Link to="/resources" className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-white hover:bg-slate-700/80 transition-colors">
                  ← Back to Resources
                </Link>
              </div>
              <p className="text-xs uppercase tracking-widest text-slate-200/90">SOLAR Resource Guide</p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight">International Travel for U.S.-Based People on the Registry</h1>
              <p className="mt-3 max-w-3xl text-slate-200">Plain-language guidance, with official sources linked throughout, to help U.S.-based registrants and their travel companions plan lawful, lower-stress trips abroad.</p>
              <p className="mt-2 text-sm text-slate-300">Last updated: <time dateTime="2025-08-23">August 23, 2025</time></p>
            </div>
            <div className="flex items-start gap-2">
              <button onClick={() => window.print()} className="rounded-xl bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/30 hover:bg-white/20 transition-colors">
                Print Guide
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        
        {/* Important Notice */}
        <section className="rounded-2xl bg-blue-50 ring-1 ring-blue-200 p-5 shadow-sm">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Important notice (read first)</h2>
              <p className="mt-2 text-slate-700">This guide is informational and not legal advice. Entry decisions are made by foreign border officers case-by-case and can change without notice. Always verify requirements directly with the destination's embassy/consulate and the U.S. Department of State's country pages before you book or travel.</p>
              <ul className="mt-2 list-disc pl-6 text-sm text-slate-700">
                <li>U.S. obligations (passport rules and 21‑day international travel notice) still apply even if a destination would otherwise admit you.</li>
                <li>Links below point to official pages (law, government, or intergovernmental bodies) wherever available.</li>
              </ul>
              <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Know your rights:</strong> For comprehensive information about your legal protections during travel, see our <Link to="/resources/know-your-rights" className="text-blue-600 hover:text-blue-800 underline font-semibold">Your Rights at Every Stage guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: U.S. Requirements */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="us-requirements">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">1</span>
            <h2 className="text-2xl font-bold text-slate-900">What U.S. law requires before you leave</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">A. Passport rules (International Megan's Law)</h3>
              <p className="text-slate-700 mb-3">
                If you are a <strong>"covered sex offender"</strong> (generally those with offenses involving a minor), your U.S. passport will carry a <strong>unique visual identifier</strong>. The State Department will not issue a passport without that identifier to a covered person, and may revoke a previous passport without it. See <a href="https://www.law.cornell.edu/uscode/text/22/212b" className="text-blue-700 underline" target="_blank" rel="noopener">22 U.S.C. § 212b</a> and the State Department's guidance on "<a href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html" className="text-blue-700 underline" target="_blank" rel="noopener">Passports and International Megan's Law</a>."
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  <strong>What to do if you're covered:</strong> Follow the State Department instructions to apply for or replace your passport with the identifier. The page explains what to send and how to submit.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">B. 21‑day advance notice of international travel (SORNA)</h3>
              <p className="text-slate-700 mb-3">
                Most registrants must provide <strong>at least 21 days' advance notice</strong> of international travel to their registering agency. The notice is forwarded to the <strong>U.S. Marshals Service</strong>, and DHS's <strong>Angel Watch Center</strong> may notify destination countries. See: <a href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act" className="text-blue-700 underline" target="_blank" rel="noopener">DOJ SORNA rule (2021)</a>; SMART Office <a href="https://smart.ojp.gov/sorna/current-law/implementation-documents/information-required-notice-international-travel" className="text-blue-700 underline" target="_blank" rel="noopener">notice guidance</a>; <a href="https://www.ice.gov/about-ice/hsi/centers-labs/angel-watch" className="text-blue-700 underline" target="_blank" rel="noopener">ICE Angel Watch Center</a>.
              </p>
              <ul className="list-disc pl-6 text-slate-700 mb-3">
                <li>Provide <em>all</em> trip details (countries, dates, flights, lodging contact, purpose) to avoid processing hiccups.</li>
                <li>If your plans change after you file, update your registering agency promptly.</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-amber-800">
                      <strong>State-specific requirements:</strong> Some states have additional travel notification rules beyond federal SORNA requirements. Check our <Link to="/resources/state-process-guide" className="text-amber-600 hover:text-amber-800 underline font-semibold">State Process Guide</Link> for your jurisdiction's specific rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How Foreign Entry Works */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="how-entry-works">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">2</span>
            <h2 className="text-2xl font-bold text-slate-900">How foreign entry works (and why experiences differ)</h2>
          </div>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Every country has its <strong>own</strong> entry rules. Many apply general "<strong>good character</strong>" or <strong>criminality</strong> tests (not registry‑specific) that allow border agents to refuse entry.</li>
            <li>Examples of official refusal powers: <a href="https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-9-grounds-for-refusal" className="text-blue-700 underline" target="_blank" rel="noopener">United Kingdom (Part 9)</a>; <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility.html" className="text-blue-700 underline" target="_blank" rel="noopener">Canada (criminal inadmissibility)</a>; <a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character" className="text-blue-700 underline" target="_blank" rel="noopener">Australia (Migration Act s 501)</a>; <a href="https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/good-character-requirements-and-police-certificates/character-requirements-for-new-zealand-visas/" className="text-blue-700 underline" target="_blank" rel="noopener">New Zealand (good character)</a>; <a href="https://www.japaneselawtranslation.go.jp/en/laws/view/3546/en" className="text-blue-700 underline" target="_blank" rel="noopener">Japan (Immigration Control Act)</a>.</li>
            <li>Some countries publicize <strong>exclusions for foreign sex offenders</strong>, e.g., <a href="https://immigration.gov.ph/transparency/news-and-announcements/blank-news/rls-november-11-2024-registered-sex-offenders-rso" className="text-blue-700 underline" target="_blank" rel="noopener">Philippines Bureau of Immigration notices</a>.</li>
          </ul>
          <div className="mt-4 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-200">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <div>
                <p className="text-amber-800">
                  <strong>Key point:</strong> A valid U.S. passport (even with identifier) does <em>not</em> guarantee entry. Decisions are discretionary at the border. Confirm with the destination consulate before you buy non‑refundable tickets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Planning Timeline */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="timeline">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">3</span>
            <h2 className="text-2xl font-bold text-slate-900">Planning timeline (time‑savers & stress‑reducers)</h2>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">⏰ Start Planning Early</h3>
                <p className="text-purple-800">
                  <strong>International travel requires more advance planning when you're on the registry.</strong> The 21-day notice requirement, passport processing, and embassy consultations mean you can't book last-minute trips. <span className="bg-purple-100 px-2 py-1 rounded font-semibold">Plan 60-90 days ahead for stress-free travel.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">60–90 days before travel</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>Confirm if you are a <em>covered sex offender</em> and, if so, ensure you have the identifier passport (<a href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html" className="text-blue-600 underline" target="_blank" rel="noopener">State Dept</a>).</li>
                <li>Choose destinations realistically (see lists below), and verify entry details on the State Dept's <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" className="text-blue-600 underline" target="_blank" rel="noopener">country pages</a>.</li>
                <li>Email the destination embassy/consulate to confirm whether your criminal record affects tourist entry; keep replies.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-3">30–45 days before travel</h3>
              <ul className="list-disc pl-5 text-green-700 space-y-1">
                <li>Submit the <strong>21‑day SORNA notice</strong> with complete itinerary (<a href="https://smart.ojp.gov/sorna/current-law/implementation-documents/information-required-notice-international-travel" className="text-blue-600 underline" target="_blank" rel="noopener">SMART Office</a>).</li>
                <li>Enroll in <a href="https://mytravel.state.gov/s/step" className="text-blue-600 underline" target="_blank" rel="noopener">STEP</a>. Save confirmations and copies of all documents.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Two weeks before travel</h3>
              <ul className="list-disc pl-5 text-amber-700 space-y-1">
                <li>Print lodging confirmations, return/onward tickets, and funds proof.</li>
                <li>Have embassy/consulate phone numbers and addresses handy.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-red-50 to-pink-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Day of travel</h3>
              <ul className="list-disc pl-5 text-red-700 space-y-1">
                <li>Arrive early; secondary inspection can add time.</li>
                <li>Travel with companions prepared to answer simple questions about purpose and length of stay.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-teal-800">
                  <strong>Moving between states?</strong> If you're planning to relocate before or after your trip, our <Link to="/resources/interstate-moving-guide" className="text-teal-600 hover:text-teal-800 underline font-semibold">Interstate Moving Guide</Link> covers the coordination needed between state registries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Country Buckets */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="buckets">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">4</span>
            <h2 className="text-2xl font-bold text-slate-900">"Friendly," "Case‑by‑Case," and "Often Denies"</h2>
          </div>
          <p className="text-slate-700 mb-6">Below are conservative groupings to help you plan. <strong>Entry is never guaranteed.</strong> Always verify with the embassy/consulate before you book.</p>

          <div className="space-y-6">
            {/* Country Categories */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Country Categories for RSOs</h2>
              
              {/* Generally Workable */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Generally Workable (short tourist stays)</h3>
                </div>
                <div className="space-y-3 pl-11">
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Schengen Area (Europe)</h4>
                    <p className="text-green-800 text-sm">Visa-free ≤90/180; ETIAS required starting late 2026.</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Türkiye (Turkey)</h4>
                    <p className="text-green-800 text-sm">Visa-exempt for 90/180.</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Morocco</h4>
                    <p className="text-green-800 text-sm">Visa-free ≤90 days.</p>
                  </div>
                </div>
              </div>

              {/* Case-by-Case */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Case-by-Case / Discretion-Heavy</h3>
                </div>
                <div className="space-y-3 pl-11">
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Mexico</h4>
                    <p className="text-yellow-800 text-sm">Frequent denials reported; consulates warn of refusals for criminal records.</p>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">South Korea</h4>
                    <p className="text-yellow-800 text-sm">Immigration Control Act allows refusals.</p>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Thailand, Singapore, Malaysia</h4>
                    <p className="text-yellow-800 text-sm">Broad discretionary refusal powers.</p>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Colombia</h4>
                    <p className="text-yellow-800 text-sm">No published exclusion; anecdotal variance.</p>
                  </div>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Panamá</h4>
                    <p className="text-yellow-800 text-sm">Visa-free ≤180 days; confirm locally.</p>
                  </div>
                </div>
              </div>

              {/* Often Denies */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Often Denies</h3>
                </div>
                <div className="space-y-3 pl-11">
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">United Kingdom</h4>
                    <p className="text-red-800 text-sm">Immigration Rules Part 9 - grounds for refusal include criminal convictions.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Canada</h4>
                    <p className="text-red-800 text-sm">Criminal inadmissibility laws; TRP or rehabilitation may be required.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Australia</h4>
                    <p className="text-red-800 text-sm">Migration Act s 501 - character requirements strictly enforced.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">New Zealand</h4>
                    <p className="text-red-800 text-sm">Character requirements for visas - criminal history scrutinized.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Japan</h4>
                    <p className="text-red-800 text-sm">Immigration Control Act - broad discretionary refusal powers.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Philippines</h4>
                    <p className="text-red-800 text-sm">Bureau of Immigration excludes registered sex offenders.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Costa Rica</h4>
                    <p className="text-red-800 text-sm">Enhanced screening for sex offense convictions.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Belize</h4>
                    <p className="text-red-800 text-sm">Immigration policies restrict entry for certain criminal histories.</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Greece</h4>
                    <p className="text-red-800 text-sm">RTAG reports multiple denials of entry for RSOs.</p>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> These categorizations reflect a cross-reference of RTAG Travel Matrix, NARSOL resources, and official consular sources as of August 2025. Always reconfirm with the relevant embassy/consulate before booking.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Section 5: Schengen Area */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="schengen">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">5</span>
            <h2 className="text-2xl font-bold text-slate-900">The Schengen Area (what it is, and why it matters)</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 002 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">🇪🇺 Europe's Travel Zone</h3>
                <p className="text-blue-800">
                  <strong>The Schengen Area covers 29 European countries</strong> with no internal border checks. Once you enter one Schengen country, you can travel freely between all others. <span className="bg-blue-100 px-2 py-1 rounded font-semibold">This makes Europe particularly attractive for multi-country trips.</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-700 mb-4">
            The <strong>Schengen Area</strong> is a group of European countries that abolished routine internal border checks and apply a common set of entry rules at external borders. It is <em>not</em> an Asian region—many first hear the term when researching Europe. U.S. citizens can visit visa‑free for up to <strong>90 days within any 180‑day period</strong>. Use the EU's <a href="https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en" className="text-blue-700 underline" target="_blank" rel="noopener">short‑stay calculator</a> to track days.
          </p>
          <p className="text-slate-700 mb-4">
            The EU will launch the <strong>Entry/Exit System (EES)</strong> on <strong>October 12, 2025</strong> (phased). The separate <strong>ETIAS</strong> travel authorization is scheduled for the <strong>last quarter of 2026</strong>. See the EU's official pages for <a href="https://travel-europe.europa.eu/en/ees" className="text-blue-700 underline" target="_blank" rel="noopener">EES</a> and <a href="https://travel-europe.europa.eu/etias_en" className="text-blue-700 underline" target="_blank" rel="noopener">ETIAS</a>.
          </p>
          
          <h3 className="text-lg font-semibold text-slate-800 mb-3">All 29 Schengen countries (2025)</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 text-slate-700">
            <span>Austria</span><span>Belgium</span><span>Bulgaria</span><span>Croatia</span><span>Czechia</span><span>Denmark</span>
            <span>Estonia</span><span>Finland</span><span>France</span><span>Germany</span><span>Greece</span><span>Hungary</span>
            <span>Iceland</span><span>Italy</span><span>Latvia</span><span>Liechtenstein</span><span>Lithuania</span><span>Luxembourg</span>
            <span>Malta</span><span>Netherlands</span><span>Norway</span><span>Poland</span><span>Portugal</span><span>Romania</span>
            <span>Slovakia</span><span>Slovenia</span><span>Spain</span><span>Sweden</span><span>Switzerland</span>
          </div>
        </section>

        {/* Section 6: Booking & Border Strategies */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="strategies">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">6</span>
            <h2 className="text-2xl font-bold text-slate-900">Booking & border strategies (what actually helps)</h2>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">💡 Smart Booking Strategy</h3>
                <p className="text-emerald-800">
                  <strong>Preparation and documentation are your best tools.</strong> Border officers want to see that you're a genuine tourist with clear plans and means to support yourself. <span className="bg-emerald-100 px-2 py-1 rounded font-semibold">Having the right documents ready can make the difference between smooth entry and lengthy questioning.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Before you book</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Prefer <strong>nonstops</strong> to avoid extra border checks during connections.</li>
                <li>Book <strong>refundable</strong> or "pay later" rates until a consulate confirms admissibility in writing.</li>
                <li>Email the consulate: "I am a U.S. citizen with a past conviction; do you require any documents or police certificates for tourist admission?"</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">At check‑in / boarding</h3>
              <ul className="list-disc pl-5 text-purple-700 space-y-2">
                <li>Airlines may ask for <strong>proof of return/onward travel</strong> and your first‑night lodging. Have both printed.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-3">On arrival</h3>
              <ul className="list-disc pl-5 text-green-700 space-y-2">
                <li>Carry: passport, return ticket, lodging proof, day‑by‑day tourist plan, and funds. Answer only what's asked; be brief, polite, and consistent.</li>
                <li>If referred to <strong>secondary inspection</strong>, stay calm; it's common and may add time.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-red-800 mb-3">If denied</h3>
              <ul className="list-disc pl-5 text-red-700 space-y-2">
                <li>You'll likely be returned on the same carrier. Ask the airline about re‑routing/refunds and contact travel insurance.</li>
                <li>Request the written basis of refusal and keep documents for counsel at home.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Travel Companions */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="companions">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">7</span>
            <h2 className="text-2xl font-bold text-slate-900">Notes for travel companions</h2>
          </div>
          <p className="text-slate-700 mb-4">
            Companions are not subject to the passport identifier or 21‑day notice. However, if the registrant is denied entry, companions on the same ticket may be forced to return. To minimize risk, book fares that allow changes/refunds and carry independent funds and lodging confirmations.
          </p>
          
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p className="text-indigo-800">
                  <strong>Family support:</strong> If you're traveling with family members who need guidance on supporting you through this process, our <Link to="/resources/family-support-guide" className="text-indigo-600 hover:text-indigo-800 underline font-semibold">Family Support Guide</Link> includes travel-specific advice and communication strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Quick Reference Checklist (renumbered from 9) */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="quick-check">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">8</span>
            <h2 className="text-2xl font-bold text-slate-900">Quick reference: what to double‑check before you go</h2>
          </div>
          <ol className="list-decimal pl-6 text-slate-700 space-y-3">
            <li>
              <strong>U.S. side:</strong> Do you need the <strong>identifier passport</strong>? If yes, is it issued? (<a href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept IML</a>). Have you filed the <strong>21‑day notice</strong> with complete details? (<a href="https://smart.ojp.gov/sorna/current-law/implementation-documents/information-required-notice-international-travel" className="text-blue-700 underline" target="_blank" rel="noopener">SMART Office</a>).
            </li>
            <li>
              <strong>Destination side:</strong> Visa/authorization needed? (e.g., <strong>ETIAS</strong> in late 2026 for Schengen). Any <strong>criminal‑record</strong> or "character" bars likely to apply? (UK Part 9, Canada inadmissibility, Australia s 501, NZ character, Japan Act). For <strong>"often denies"</strong> countries (incl. Costa Rica, Belize, Philippines), treat entry as unlikely unless a consulate confirms otherwise <em>in writing</em>.
            </li>
          </ol>
        </section>

        {/* Section 9: Trip Ideas */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="ideas">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">9</span>
            <h2 className="text-2xl font-bold text-slate-900">Encouraging, realistic trip ideas</h2>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-teal-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 002 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">✈️ Travel is Still Possible</h3>
                <p className="text-teal-800">
                  <strong>Don't let registry status stop you from seeing the world.</strong> With proper planning and realistic destination choices, meaningful international travel remains achievable. <span className="bg-teal-100 px-2 py-1 rounded font-semibold">Focus on countries with clear, workable entry policies.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Europe (Schengen)</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>City breaks or multi‑country rail trips (e.g., <em>Paris → Amsterdam → Berlin</em>) within the 90/180 cap. Track days and note EES launch in Oct 2025.</li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Beyond Europe</h3>
              <ul className="list-disc pl-5 text-green-700 space-y-2">
                <li><strong>Türkiye</strong> (Istanbul + Cappadocia): classic 7–10 days; confirm 90/180 rule and passport validity.</li>
                <li><strong>Morocco</strong> (Marrakesh + coast or desert): 7–12 days; do not overstay 90 days.</li>
                <li><strong>Colombia</strong> (Cartagena or Medellín): 4–8 days; print lodging and return ticket.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Appendix: Sources */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" id="sources">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Appendix: Source links (by topic)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">U.S. obligations:</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://smart.ojp.gov/sorna/current-law/implementation-documents/information-required-notice-international-travel" className="text-blue-700 underline" target="_blank" rel="noopener">21‑day notice (SMART Office)</a></li>
                <li><a href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act" className="text-blue-700 underline" target="_blank" rel="noopener">SORNA rule (2021) (Federal Register)</a></li>
                <li><a href="https://www.law.cornell.edu/uscode/text/22/212b" className="text-blue-700 underline" target="_blank" rel="noopener">Passport identifiers (22 U.S.C. § 212b)</a></li>
                <li><a href="https://travel.state.gov/content/travel/en/passports/legal-matters/passports-and-international-megans-law.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept International Megan's Law</a></li>
                <li><a href="https://www.ice.gov/about-ice/hsi/centers-labs/angel-watch" className="text-blue-700 underline" target="_blank" rel="noopener">ICE Angel Watch Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Schengen/ETIAS:</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://home-affairs.ec.europa.eu/policies/schengen/schengen-area_en" className="text-blue-700 underline" target="_blank" rel="noopener">European Commission Schengen page</a></li>
                <li><a href="https://travel-europe.europa.eu/etias_en" className="text-blue-700 underline" target="_blank" rel="noopener">ETIAS timeline (last quarter 2026)</a></li>
                <li><a href="https://travel-europe.europa.eu/en/ees" className="text-blue-700 underline" target="_blank" rel="noopener">EES start (Oct 12, 2025)</a></li>
                <li><a href="https://home-affairs.ec.europa.eu/policies/schengen/border-crossing/short-stay-calculator_en" className="text-blue-700 underline" target="_blank" rel="noopener">Short-stay calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Workable destinations:</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa" className="text-blue-700 underline" target="_blank" rel="noopener">Türkiye MFA</a></li>
                <li><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Turkey.html/" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept - Turkey</a></li>
                <li><a href="https://travel.state.gov/en/international-travel/travel-advisories/colombia.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept - Colombia</a></li>
                <li><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Morocco.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept - Morocco</a></li>
                <li><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Panama.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept - Panama</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Often denies (official powers or practice):</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://www.gov.uk/guidance/immigration-rules/immigration-rules-part-9-grounds-for-refusal" className="text-blue-700 underline" target="_blank" rel="noopener">UK Immigration Rules Part 9</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility.html" className="text-blue-700 underline" target="_blank" rel="noopener">Canada criminal inadmissibility</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/inadmissibility/temporary-resident-permits.html" className="text-blue-700 underline" target="_blank" rel="noopener">Canada TRP</a></li>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides/guide-5312-rehabilitation-persons-inadmissible-canada-past-criminal-activity.html" className="text-blue-700 underline" target="_blank" rel="noopener">Canada rehabilitation</a></li>
                <li><a href="https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character" className="text-blue-700 underline" target="_blank" rel="noopener">Australia Migration Act s 501/Home Affairs</a></li>
                <li><a href="https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/good-character-requirements-and-police-certificates/character-requirements-for-new-zealand-visas/" className="text-blue-700 underline" target="_blank" rel="noopener">New Zealand character requirements</a></li>
                <li><a href="https://www.japaneselawtranslation.go.jp/en/laws/view/3546/en" className="text-blue-700 underline" target="_blank" rel="noopener">Japan Immigration Control Act</a></li>
                <li><a href="https://immigration.gov.ph/transparency/news-and-announcements/blank-news/rls-november-11-2024-registered-sex-offenders-rso" className="text-blue-700 underline" target="_blank" rel="noopener">Philippines BI exclusions</a></li>
                <li><a href="https://www.state.gov/reports/2024-trafficking-in-persons-report/costa-rica/" className="text-blue-700 underline" target="_blank" rel="noopener">Costa Rica TIP 2024</a></li>
                <li><a href="https://www.state.gov/reports/2024-trafficking-in-persons-report/belize" className="text-blue-700 underline" target="_blank" rel="noopener">Belize TIP 2024</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Case‑by‑case examples:</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://consulmex.sre.gob.mx/montreal/index.php/es/viaje-a-mexico/405-viaje-a-mexico-con-antecedentes-penales" className="text-blue-700 underline" target="_blank" rel="noopener">Mexico consular guidance (Montreal)</a></li>
                <li><a href="https://consulmex.sre.gob.mx/miami/images/2023/visas/faq_preguntas_frecuentes_espanol2.pdf" className="text-blue-700 underline" target="_blank" rel="noopener">Mexico consular guidance (Miami PDF)</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">General travel resources:</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li><a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html" className="text-blue-700 underline" target="_blank" rel="noopener">State Dept country pages</a></li>
                <li><a href="https://mytravel.state.gov/s/step" className="text-blue-700 underline" target="_blank" rel="noopener">STEP enrollment</a></li>
                <li><a href="https://tr.usembassy.gov/visas/" className="text-blue-700 underline" target="_blank" rel="noopener">U.S. Embassy Türkiye</a></li>
                <li><a href="https://www.embassyofpanama.org/visas-1" className="text-blue-700 underline" target="_blank" rel="noopener">Panama Embassy</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Reminders */}
        <section className="rounded-2xl bg-rose-50 p-5 ring-1 ring-rose-200 shadow-sm">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-rose-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-semibold text-rose-800 mb-2">Final reminders:</p>
              <ol className="list-decimal pl-6 text-rose-700 space-y-1">
                <li>Always get the current rule from the destination's embassy/consulate and the State Dept country page.</li>
                <li>Keep copies of your 21‑day notice, itinerary, and consulate confirmations.</li>
                <li>Have a backup plan if a border officer refuses entry.</li>
              </ol>
              <p className="text-rose-700 mt-3">
                For additional travel resources and support, explore our <Link to="/resources" className="text-rose-600 hover:text-rose-800 underline font-semibold">complete resource library</Link>.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-slate-500">
        © SOLAR · This guide provides general information only and does not constitute legal advice.
      </footer>
    </div>
  );
}