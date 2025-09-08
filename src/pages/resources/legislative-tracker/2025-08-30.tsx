import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// --- meta used by the hub index ---
export const meta = {
  date: '2025-08-30',
  title: 'YTD 2025: Courts Narrow Relief, States Tinker with Tiers, Zones Expand',
  slug: 'sex-offender-registry-2025-ytd-roundup-courts-tiers-presence-zones',
  summary:
    'Year-to-date roundup: courts split on registry challenges, states tweak tiering/definitions, and presence-zone bans expand. Florida overhaul signed; USSC amendments effective Nov 1.',
};

export const teasers = {
  glance: [
    '🏛️ Federal — USSC adopted supervised-release changes effective Nov 1, 2025.',
    '🗺️ States — PA Act 22 (youth-sports/nonprofit -> Tier II); TN TBI classification; AR expands “no-go” zones + juvenile fee waiver; FL overhaul effective Oct 1; UT recodified; WV fees/admin.',
    '⚖️ Cases — OK upheld retroactive park-distance rule; MO upheld lifetime GPS (as-applied); 10th Cir okayed strict device/internet limits; 6th Cir says TN injunctions must target specific provisions.',
    '📣 Action — Florida implementation ahead of Oct 1; track Michigan SB 424; watch WA SB 5312 re-intro in 2026.',
  ],
  highlights: [
    {
      icon: '🏛️',
      title: 'USSC — Supervised-Release Changes',
      url: 'https://www.ussc.gov/guidelines/amendments/adopted-amendments-effective-november-1-2025',
    },
    {
      icon: '🏷️',
      title: 'Florida — CS/HB 1351 (Effective Oct 1, 2025)',
      url: 'https://www.flsenate.gov/Session/Bill/2025/1351',
    },
    {
      icon: '⚖️',
      title: 'Case Watch — Doe v. Lee (6th Cir.)',
      url: 'https://law.justia.com/cases/federal/appellate-courts/ca6/24-6020/24-6020-2025-05-12.html',
    },
  ],
};

export default function Update_2025_08_30(): JSX.Element {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {}
  };

  return (
    <div className="bg-white">
      <SEO
        title={`${meta.title} — SOLAR Legislative Tracker (Week of Aug 30, 2025)`}
        description="Courts narrow relief; states expand tiers and zones; USSC supervised-release changes effective Nov 1; Florida overhaul signed. Sources linked."
        keywords="sex offender registry, SORNA, residency restrictions, tiers, supervised release, Doe v. Lee, Donaldson, Kornacki, GPS monitoring"
      />

      {/* Hero */}
      <section className="relative text-white">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link to="/resources/legislative-tracker" className="text-white/90 hover:underline print:hidden">
              ← Back to Tracker hub
            </Link>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{meta.title}</h1>
            <p className="mt-2 text-white/90">Week 1 (Aug 30, 2025)</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#glance" className="rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow">
                This week at a glance
              </a>
              <a href="#highlights" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">
                Highlights
              </a>
              <a href="#states" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">
                States (A→W)
              </a>
              <a href="#cases" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">
                Court decisions
              </a>
              <a href="#media" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">
                Media
              </a>
              <a href="#watchlist" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">
                Watchlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* This Week at a Glance */}
      <section id="glance" className="mt-8">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="calendar">🗓️</span> This Week at a Glance
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="space-y-2 text-slate-800">
            <li>
              🏛️ <strong>Federal:</strong> The U.S. Sentencing Commission adopted supervised-release changes (effective{' '}
              <strong>Nov 1, 2025</strong>) shaping internet/device rules and responses to violations.{' '}
              <a className="underline" href="https://www.ussc.gov/guidelines/amendments/adopted-amendments-effective-november-1-2025" target="_blank" rel="noreferrer">
                USSC amendments
              </a>{' '}
              ·{' '}
              <a className="underline" href="https://www.federalregister.gov/documents/2025/05/09/2025-07785/sentencing-guidelines-for-united-states-courts" target="_blank" rel="noreferrer">
                Federal Register notice
              </a>
            </li>
            <li>
              🗺️ <strong>States:</strong> PA (Act 22) adds youth-sports/nonprofit abuse to Tier II; TN centralizes classifications; AR expands “no-go”
              zones and adds juvenile fee waiver; FL passed a broad update effective Oct 1; UT recodified registry statutes; WV adjusted administrative fees.
            </li>
            <li>
              ⚖️ <strong>Cases:</strong> OK upheld retroactive park-distance rule; MO upheld lifetime GPS in an as-applied challenge; 10th Cir okayed strict
              device/internet limits; 6th Cir said TN injunctions must target specific provisions.
            </li>
            <li>
              📣 <strong>Action:</strong> Florida CS/HB 1351 implementation ahead of Oct 1; track Michigan SB 424 hearings; watch WA SB 5312 re-intro in 2026.
            </li>
          </ul>
          <blockquote className="mt-4 border-l-4 border-blue-400 pl-4 text-slate-700 italic">
            <strong>Why this matters:</strong> Policy moves fast; we translate the legalese and link official sources so you can verify and act.
          </blockquote>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mt-2">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="star">⭐</span> Highlights
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">

          {/* Highlight: Federal */}
          <article className="rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="federal">🏛️</span> U.S. Sentencing Commission — Supervised-Release Changes
            </h3>
            <p className="mt-2 text-slate-700">
              <strong>In plain terms:</strong> New guidance tells judges how to tailor supervised-release rules, including internet/device monitoring and how to respond to violations. Takes effect <strong>Nov 1, 2025</strong>.
            </p>
            <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">Why it matters</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>More consistent rules across courts; still individualized to the person.</li>
                <li>Clarifies when tech limits and checks are appropriate.</li>
              </ul>
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Official & analysis: </span>
              <a className="underline" href="https://www.ussc.gov/guidelines/amendments/adopted-amendments-effective-november-1-2025" target="_blank" rel="noreferrer">USSC adopted amendments</a>{' '}
              · <a className="underline" href="https://www.ussc.gov/sites/default/files/pdf/amendment-process/amendments-in-brief/AIB_2025-supervised-release.pdf" target="_blank" rel="noreferrer">Amendments-in-Brief (PDF)</a>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 One-minute message (optional)</div>
                <button
                  onClick={() =>
                    copyText(
                      'script-ussc',
                      'Hello — please support fair, individualized supervised-release technology conditions and oversight. Clear rules help families succeed while keeping communities safe.'
                    )
                  }
                  className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  {copiedId === 'script-ussc' ? 'Copied!' : 'Copy script'}
                </button>
              </div>
              <div className="mt-3 text-sm text-slate-700">
                Send to your federal delegation: <a className="underline" href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noreferrer">Find your U.S. Representative</a>{' '}
                · <a className="underline" href="https://www.senate.gov/senators/senators-contact.htm" target="_blank" rel="noreferrer">Contact your U.S. Senators</a>
              </div>
            </div>
          </article>

          {/* Highlight: State Spotlight — Florida */}
          <article className="rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="state">🏷️</span> Florida — CS/HB 1351 (Signed; Effective Oct 1, 2025)
            </h3>
            <p className="mt-2 text-slate-700">
              <strong>In plain terms:</strong> Florida passed a broad update to its registration laws. It tweaks definitions and reporting/verification rules starting <strong>Oct 1, 2025</strong>.
            </p>
            <div className="mt-3 rounded-xl bg-amber-50 text-amber-900 p-4">
              <div className="font-medium">Why it matters</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Florida’s rules affect many travelers/relocators; changes can trigger reporting surprises.</li>
                <li>Implementation details will shape day-to-day compliance.</li>
              </ul>
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Official & media: </span>
              <a className="underline" href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer">Bill page</a>{' '}
              · <a className="underline" href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-signs-legislation-protect-children-against-sexual-crimes" target="_blank" rel="noreferrer">Governor press (signed)</a>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Prep call to action</div>
                <button
                  onClick={() =>
                    copyText(
                      'script-fl',
                      'Hello — I’m seeking clear, accessible guidance for CS/HB 1351 before Oct 1 so families can comply without surprise. Please publish plain-language FAQs and timelines.'
                    )
                  }
                  className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  {copiedId === 'script-fl' ? 'Copied!' : 'Copy script'}
                </button>
              </div>
              <div className="mt-3 text-sm text-slate-700">
                Where to send: <a className="underline" href="https://www.fdle.state.fl.us/Sexual-Offenders" target="_blank" rel="noreferrer">FDLE Sex Offender Registry (program page)</a>{' '}
                · <a className="underline" href="https://www.flsenate.gov/Senators/#find" target="_blank" rel="noreferrer">Find your Florida Senator</a>{' '}
                · <a className="underline" href="https://www.myfloridahouse.gov/Representatives" target="_blank" rel="noreferrer">Find your Florida Representative</a>
              </div>
            </div>
          </article>

          {/* Highlight: Case Watch — Doe v. Lee */}
          <article className="rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="scales">⚖️</span> Case Watch — Doe v. Lee (6th Cir., Tennessee)
            </h3>
            <p className="mt-2 text-slate-700">
              <strong>In plain terms:</strong> The appeals court said Tennessee courts can’t block the <em>entire</em> registry at once; any injunction must target <em>specific</em> rules shown to be punitive.
            </p>
            <div className="mt-3 rounded-xl bg-violet-50 text-violet-900 p-4">
              <div className="font-medium">Why it matters</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Relief likely becomes narrower and slower — focused on particular provisions.</li>
                <li>Document concrete harms tied to specific rules (e.g., housing bans, reporting burdens).</li>
              </ul>
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium">Official & tracker: </span>
              <a className="underline" href="https://law.justia.com/cases/federal/appellate-courts/ca6/24-6020/24-6020-2025-05-12.html" target="_blank" rel="noreferrer">Opinion (6th Cir.)</a>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Join amicus / story-gathering</div>
                <button
                  onClick={() =>
                    copyText(
                      'script-tn',
                      'I’m interested in supporting provision-specific challenges after Doe v. Lee. Please keep me posted on amicus opportunities and what documentation helps most.'
                    )
                  }
                  className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                >
                  {copiedId === 'script-tn' ? 'Copied!' : 'Copy note'}
                </button>
              </div>
              <div className="mt-3 text-sm text-slate-700">
                Reach your state lawmakers: <a className="underline" href="https://wapp.capitol.tn.gov/apps/legislatorsearch/" target="_blank" rel="noreferrer">Find your Tennessee legislators</a>
              </div>
            </div>
          </article>

        </div>
      </section>
      {/* States (alphabetized) */}
      <section id="states" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="map">🗺️</span> State Highlights (A→W)
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">

          {/* Arkansas */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Arkansas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Act 158 (HB 1437)</strong> — Expands “no-go” zones to water parks, swimming areas, and playgrounds in public parks.{' '}
                <a className="underline" href="https://arkleg.state.ar.us/Acts/FTPDocument?ddBienniumSession=2025%2F2025R&file=158.pdf&path=%2FACTS%2F2025R%2FPublic%2F" target="_blank" rel="noreferrer">Act PDF</a>{' '}
                · <a className="underline" href="https://arkleg.state.ar.us/Bills/Detail?ddBienniumSession=2025%2F2025R&id=HB1437" target="_blank" rel="noreferrer">Bill page</a>
              </li>
              <li>
                <strong>Act 972 (SB 490)</strong> — Allows courts to waive certain fees when a juvenile is ordered to register.{' '}
                <a className="underline" href="https://arkleg.state.ar.us/Acts/FTPDocument?ddBienniumSession=2025%2F2025R&file=972.pdf&path=%2FACTS%2F2025R%2FPublic%2F" target="_blank" rel="noreferrer">Act PDF</a>
              </li>
            </ul>
          </article>

          {/* Florida */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Florida</h3>
            <p><strong>CS/HB 1351</strong> — Broad registration update; signed June 10, 2025; effective Oct 1, 2025.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer">Senate bill page</a>{' '}
              · <a className="underline" href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-signs-legislation-protect-children-against-sexual-crimes" target="_blank" rel="noreferrer">Governor press</a>
            </p>
          </article>

          {/* Kansas */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Kansas</h3>
            <p><strong>HB 2404</strong> — Combined a school-property restriction with a petition-for-relief pathway; <em>did not pass</em> in 2025 (watch for re-intro next session).</p>
          </article>

          {/* Michigan */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Michigan</h3>
            <p><strong>SB 424</strong> — Would create/clarify a petition-for-relief framework and adjust verification timelines. <em>Pending</em>.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.legislature.mi.gov/documents/2025-2026/billanalysis/Senate/pdf/2025-SFA-0424-F2.pdf" target="_blank" rel="noreferrer">SFA Analysis (Aug 12)</a>{' '}
              · <a className="underline" href="https://www.legislature.mi.gov/documents/2025-2026/billanalysis/Senate/pdf/2025-SFA-0424-F.pdf" target="_blank" rel="noreferrer">SFA Analysis (June 17)</a>
            </p>
          </article>

          {/* Nevada */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Nevada</h3>
            <p><strong>AB 151</strong> — Proposed Tier II classification for “solicitation of a child for prostitution”; did not advance this session.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.leg.state.nv.us/App/NELIS/REL/83rd2025/Bill/12093/Overview/" target="_blank" rel="noreferrer">NELIS overview</a>{' '}
              · <a className="underline" href="https://www.leg.state.nv.us/Session/83rd2025/Bills/AB/AB151.pdf" target="_blank" rel="noreferrer">Bill PDF</a>
            </p>
          </article>

          {/* Pennsylvania */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Pennsylvania</h3>
            <p><strong>Act 22 of 2025</strong> (from SB 255) — Adds sexual assault by youth-sports officials/volunteers or nonprofit employees to Tier II.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.palegis.us/legislation/bills/2025/sb255" target="_blank" rel="noreferrer">Bill page (Act 22 of 2025)</a>
            </p>
          </article>

          {/* Tennessee */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Tennessee</h3>
            <p><strong>HB 582 / SB 531 → Public Chapter 66</strong> — TBI classification authority and notices.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.capitol.tn.gov/Bills/114/Bill/HB0582.pdf" target="_blank" rel="noreferrer">Enacted text (PDF)</a>{' '}
              · <a className="underline" href="https://capitol.tn.gov/bills/114/House/Journals/03132025RD15.pdf" target="_blank" rel="noreferrer">House Journal excerpt</a>
            </p>
          </article>

          {/* Utah */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Utah</h3>
            <p><strong>SB 41</strong> — Registry recodification/updates; <strong>signed Mar 25, 2025</strong>.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://le.utah.gov/~2025/bills/static/SB0041.html" target="_blank" rel="noreferrer">Bill page</a>{' '}
              · <a className="underline" href="https://le.utah.gov/Session/2025/bills/introduced/SB0041S01.pdf" target="_blank" rel="noreferrer">Text (PDF)</a>
            </p>
          </article>

          {/* Washington */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Washington</h3>
            <p>
              <strong>SB 5312</strong> — “Net-Nanny” sting cases: proposed 5-year registration (with limited public notice) if no sexual-motivation finding; <em>did not move</em> in 2025.
            </p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bill%20Reports/Senate/5312%20SBR%20LAW%20TA%2025.pdf" target="_blank" rel="noreferrer">Senate Bill Report (PDF)</a>{' '}
              · <a className="underline" href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Bill%20Reports/Senate/5312%20SBR%20LAW%20TA%2025.htm" target="_blank" rel="noreferrer">HTML report</a>
            </p>
          </article>

          {/* West Virginia */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">West Virginia</h3>
            <p><strong>HB 3164</strong> — Administrative/fee changes to registry processes.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=hb3164+sub1+enr.htm&i=3164&sesstype=RS&yr=2025" target="_blank" rel="noreferrer">Enrolled text</a>
            </p>
          </article>

          {/* No-update states accordion */}
          <details className="rounded-2xl border border-dashed border-slate-300 p-4">
            <summary className="cursor-pointer font-medium">No state-level updates posted this week — tap to view list</summary>
            <p className="mt-2 text-slate-700 text-sm">
              AL, AK, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NY, OH, OK, OR, PR, RI, SC, SD, TX, VA, VT, WI, WY
            </p>
          </details>

        </div>
      </section>

      {/* Court decisions */}
      <section id="cases" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="scales">⚖️</span> Court Decisions & Litigation
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">

          {/* Donaldson — OK Sup Ct */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Oklahoma — <em>Donaldson v. City of El Reno</em> (Okla. Sup. Ct., Feb 4, 2025)</h3>
            <p><strong>In plain terms:</strong> The state high court said the 2,000-ft park rule can apply retroactively because it’s considered non-punitive.</p>
            <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">Why it matters</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ex-post-facto challenges will likely be decided provision-by-provision (parks vs. schools vs. presence rules).</li>
                <li>Expect follow-on litigation targeting other specific SORA provisions.</li>
              </ul>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-medium">Official & analysis:</span>{' '}
              <a className="underline" href="https://law.justia.com/cases/oklahoma/supreme-court/2025/120617.html" target="_blank" rel="noreferrer">Opinion (OK Sup. Ct.)</a>{' '}
              · <a className="underline" href="https://statecourtreport.org/case-tracker/donaldson-v-city-el-reno" target="_blank" rel="noreferrer">Case tracker summary</a>
            </p>
          </article>

          {/* F.S. — MO Sup Ct */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Missouri — <em>F.S. v. Missouri Dept. of Corrections</em> (Mo. Sup. Ct., Feb 11, 2025)</h3>
            <p><strong>In plain terms:</strong> The court upheld lifetime GPS monitoring in this case because the person didn’t show enough specific proof that GPS was unconstitutional <em>for them</em>.</p>
            <div className="mt-3 rounded-xl bg-yellow-50 text-yellow-900 p-4">
              <div className="font-medium">Why it matters</div>
              <ul className="list-disc pl-6 space-y-1">
                <li>Future challenges need detailed, person-specific evidence of burden/harm, not only broad arguments.</li>
              </ul>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-medium">Official & media:</span>{' '}
              <a className="underline" href="https://www.courts.mo.gov/file.jsp?id=217453" target="_blank" rel="noreferrer">Opinion (PDF)</a>{' '}
              · <a className="underline" href="https://law.justia.com/cases/missouri/supreme-court/2025/sc100558.html" target="_blank" rel="noreferrer">Justia mirror</a>{' '}
              · <a className="underline" href="https://www.missourinet.com/2025/02/12/missouri-supreme-court-rules-in-case-challenging-lifetime-monitoring-of-sex-offender/" target="_blank" rel="noreferrer">Missourinet write-up</a>
            </p>
          </article>

          {/* Kornacki — 10th Cir */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">10th Circuit — <em>United States v. Kornacki</em> (May 8, 2025)</h3>
            <p><strong>In plain terms:</strong> The appeals court okayed strict internet/device limits (monitoring/approval) for someone on federal supervised release.</p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Official source:</span>{' '}
              <a className="underline" href="https://www.govinfo.gov/app/details/USCOURTS-ca10-24-01071/USCOURTS-ca10-24-01071-0" target="_blank" rel="noreferrer">Opinion docket (PDF)</a>
            </p>
          </article>

          {/* Doe v. Lee — 6th Cir */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Sixth Circuit — <em>Doe v. Lee</em> (Tennessee, May 12, 2025)</h3>
            <p><strong>In plain terms:</strong> Injunctions must be tailored to specific provisions of the registry shown to be punitive; no blanket “shut the whole thing down” orders.</p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Official source:</span>{' '}
              <a className="underline" href="https://law.justia.com/cases/federal/appellate-courts/ca6/24-6020/24-6020-2025-05-12.html" target="_blank" rel="noreferrer">Opinion (6th Cir.)</a>
            </p>
          </article>

        </div>
      </section>
      {/* Research & Reports */}
      <section id="research" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="book">📘</span> Research & Reports (context)
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">US DOJ SMART — SORNA implementation & grants</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a className="underline" href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/SORNA%20progress%20check%2005212025.pdf" target="_blank" rel="noreferrer">
                  SORNA Progress Check (May 2025) — PDF
                </a>
              </li>
              <li>
                <a className="underline" href="https://smart.ojp.gov/funding/opportunities/o-smart-2025-172307" target="_blank" rel="noreferrer">
                  FY25 AWA Implementation Grant — NOFO
                </a>
              </li>
              <li>
                <a className="underline" href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/SMART%20FY25%20Support%20for%20Adam%20Walsh%20Act%20Implementation%20Grant%20Program_0.pdf" target="_blank" rel="noreferrer">
                  NOFO PDF
                </a>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">California CDCR — SOMP 2025 Annual Report</h3>
            <p className="text-slate-700">
              Program outcomes and supervision metrics. (When CDCR posts the public PDF, we can add the direct link.)
            </p>
          </article>
        </div>
      </section>

      {/* Media */}
      <section id="media" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="newspaper">📰</span> Media coverage worth reading
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-slate-800">Oklahoma — <em>Donaldson</em> residency retroactivity</h4>
                <p className="text-slate-700 text-sm">
                  Clear explainer on why the court allowed parks restrictions to apply to people with older convictions, and what that could mean for future challenges.
                </p>
                <blockquote className="mt-2 border-l-4 border-slate-300 pl-4 italic text-slate-700">
                  “The decision leaves the door open to challenges against other provisions…”
                </blockquote>
                <p className="mt-2 text-sm">
                  <a className="underline" href="https://nondoc.com/2025/02/07/divided-ok-supreme-court-rules-sex-offender-residency-restriction-can-be-retroactive/" target="_blank" rel="noreferrer">
                    Read the NonDoc explainer
                  </a>
                </p>
              </div>

              <hr className="border-slate-200" />

              <div>
                <h4 className="font-medium text-slate-800">Missouri — lifetime GPS monitoring case</h4>
                <p className="text-slate-700 text-sm">
                  Quick recap of the Missouri Supreme Court decision upholding lifetime GPS in an as-applied challenge and what evidence future cases might need.
                </p>
                <blockquote className="mt-2 border-l-4 border-slate-300 pl-4 italic text-slate-700">
                  “The court ruled the challenger failed to show GPS monitoring was unconstitutional for him specifically.”
                </blockquote>
                <p className="mt-2 text-sm">
                  <a className="underline" href="https://www.missourinet.com/2025/02/12/missouri-supreme-court-rules-in-case-challenging-lifetime-monitoring-of-sex-offender/" target="_blank" rel="noreferrer">
                    Read the Missourinet recap
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Quick Glossary */}
      <section id="glossary" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="book">📖</span> Quick Glossary
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="font-medium text-slate-800">Residency ban</div>
            <div className="text-slate-700 text-sm">A rule about where someone may live (for example, near schools or parks).</div>
          </div>
          <div>
            <div className="font-medium text-slate-800">Retroactive</div>
            <div className="text-slate-700 text-sm">Applied to someone after their case is over; courts ask if it functions like extra punishment.</div>
          </div>
          <div>
            <div className="font-medium text-slate-800">Amicus brief</div>
            <div className="text-slate-700 text-sm">A “friend of the court” filing that offers expertise to help a judge decide a case.</div>
          </div>
          <div>
            <div className="font-medium text-slate-800">Verification</div>
            <div className="text-slate-700 text-sm">The required check-in schedule with law enforcement to confirm your information.</div>
          </div>
        </div>
      </section>

      {/* Watchlist */}
      <section id="watchlist" className="mt-4 mb-12">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="eyes">👀</span> Rolling Watchlist
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Florida — CS/HB 1351:</strong> Implementation ahead of <strong>Oct 1, 2025</strong>.{' '}
                <a className="underline" href="https://www.flsenate.gov/Session/Bill/2025/1351" target="_blank" rel="noreferrer">
                  Bill page
                </a>
              </li>
              <li>
                <strong>Michigan — SB 424:</strong> Track committee/floor actions.{' '}
                <a className="underline" href="https://www.legislature.mi.gov/documents/2025-2026/billanalysis/Senate/pdf/2025-SFA-0424-F2.pdf" target="_blank" rel="noreferrer">
                  Latest SFA analysis
                </a>
              </li>
              <li>
                <strong>Washington — SB 5312:</strong> Potential 2026 re-intro.{' '}
                <a className="underline" href="https://lawfilesext.leg.wa.gov/biennium/2025-26/Pdf/Bill%20Reports/Senate/5312%20SBR%20LAW%20TA%2025.pdf" target="_blank" rel="noreferrer">
                  Bill report
                </a>
              </li>
              <li>
                <strong>Oklahoma — post-<em>Donaldson</em>:</strong> Watch new challenges to other SORA provisions.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* AI & Source Note (weekly page) */}
      <section className="mt-6 mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-50 text-blue-900 p-5 ring-1 ring-blue-100">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span role="img" aria-label="info">ℹ️</span> How we track and vet sources
            </h3>
            <p className="mt-2">
              We link to <strong>official documents</strong> (court opinions, enrolled acts, agency guidance) and add <strong>reputable coverage</strong> for context. We also use AI to scan nationwide dockets and calendars so we don’t miss items—but humans review and verify links. See something off? Please let us know and we’ll correct it quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Print styles */}
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          a { text-decoration: none !important; color: #111 !important; }
          .shadow-sm { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
