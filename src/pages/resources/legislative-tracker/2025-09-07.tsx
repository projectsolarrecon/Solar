import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// --- meta used by the hub index ---
export const meta = {
  date: '2025-09-07',
  title: 'TX law takes effect; WY tightens verification; NY proposes school-zone ban; MI stay denied',
  slug: '2025-09-07',
  summary:
    'Texas adds “invasive visual recording” to registry (effective Sept 1); Wyoming boosts verification and limits removal; New York proposes 1,350-ft school-zone housing ban; Michigan judge denies stay.',
};

// --- teasers used by the hub preview ---
export const teasers = {
  glance: [
    '🏛️ Texas — HB 1465 now effective (Sept 1, 2025): “invasive visual recording” triggers registration.',
    '🦬 Wyoming — HB 0280 enacted: higher verification frequency and fewer petition-off options (effective July 1, 2025).',
    '🏙️ New York — S3113 proposes 1,350-ft school-zone housing ban (500 ft in NYC).',
    '⚖️ Michigan — Does v. Whitmer: judge denied stay; ruling remains in effect during appeal.',
  ],
  highlights: [
    { icon: '🏛️', title: 'Texas — HB 1465 now in effect', url: 'https://capitol.texas.gov/billlookup/text.aspx?Bill=HB1465&LegSess=89R' },
    { icon: '🦬', title: 'Wyoming — HB 0280 raises verification', url: 'https://www.wyoleg.gov/Legislation/2025/HB0280' },
    { icon: '🏙️', title: 'New York — S3113 school-zone proposal', url: 'https://assembly.state.ny.us/leg/?Text=Y&bn=S3113&sh=printbill&term=2025' },
    { icon: '⚖️', title: 'Michigan — Does v. Whitmer stay denied', url: 'https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/' },
  ],
};

export default function Update_2025_09_07(): JSX.Element {
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
        title={`${meta.title} — SOLAR Legislative Tracker (Week of Sept 7, 2025)`}
        description="Texas HB 1465 now effective; Wyoming verification/tiering changes enacted; New York proposes school-zone housing ban; Michigan judge denies stay. Official links and ELI5 summaries."
        keywords="sex offender registry, Texas HB 1465, Wyoming HB 0280, New York S3113, Does v. Whitmer, SORA, verification frequency"
      />

      {/* Hero */}
      <section className="relative text-white">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link to="/resources/legislative-tracker" className="text-white/90 hover:underline print:hidden">← Back to Tracker hub</Link>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              {meta.title}
            </h1>
            <p className="mt-2 text-white/90">Week of September 7, 2025</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#glance" className="rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow">This week at a glance</a>
              <a href="#highlights" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Highlights</a>
              <a href="#cases" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Court decisions</a>
              <a href="#states" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Legislation by state</a>
              <a href="#media" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Media watch</a>
              <a href="#watchlist" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Watchlist</a>
            </div>
          </div>
        </div>
      </section>

      {/* This Week at a Glance */}
      <section id="glance" className="mt-8">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="calendar">🗓️</span> This Week at a Glance (ELI5)
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="space-y-2 text-slate-800">
            <li>🏛️ <strong>Texas:</strong> <strong>HB 1465</strong> now effective (<strong>Sept 1, 2025</strong>) — invasive visual recording convictions now require registration. <a className="underline" href="https://capitol.texas.gov/billlookup/text.aspx?Bill=HB1465&LegSess=89R" target="_blank" rel="noreferrer">Bill text</a></li>
            <li>🦬 <strong>Wyoming:</strong> <strong>HB 0280</strong> enacted (<strong>July 1, 2025</strong>) — higher verification frequency, limits on petition-off. <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Bill page</a></li>
            <li>🏙️ <strong>New York:</strong> <strong>S3113</strong> proposes a 1,350-ft school-zone housing ban (500 ft in NYC). <a className="underline" href="https://assembly.state.ny.us/leg/?Text=Y&bn=S3113&sh=printbill&term=2025" target="_blank" rel="noreferrer">Bill text</a></li>
            <li>⚖️ <strong>Michigan:</strong> <em>Does v. Whitmer</em> — judge <strong>denied a stay</strong>; ruling remains in force during appeal. <a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Court order</a></li>
          </ul>
          <blockquote className="mt-4 border-l-4 border-blue-400 pl-4 text-slate-700 italic">
            <strong>Why this matters:</strong> rule changes and uneven data-sharing create compliance traps; we flag what changed, what’s proposed, and where to act.
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
          {/* Texas */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="capitol">🏛️</span> Texas — HB 1465 (now in effect)</h3>
              <p className="mt-2"><strong>ELI5:</strong> Adds “invasive visual recording” (voyeurism) to offenses requiring registration.</p>
              <div className="mt-3 rounded-xl bg-amber-50 text-amber-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All Article 62 duties (reporting, verification, notices) now apply.</li>
                  <li>Effective <strong>Sept 1, 2025</strong>.</li>
                </ul>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-medium">Sources:</span>{' '}
                <a className="underline" href="https://capitol.texas.gov/billlookup/text.aspx?Bill=HB1465&LegSess=89R" target="_blank" rel="noreferrer">Bill text</a>{' · '}
                <a className="underline" href="https://capitol.texas.gov/reports/Report.aspx?ID=passed&LegSess=89R" target="_blank" rel="noreferrer">Passed report</a>{' · '}
                <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">TX DPS program</a>
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Take action</div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">TX DPS guidance</a>
                  <button
                    onClick={() => copyText('script-tx', 'Hello — please publish plain-language guidance for HB 1465 so people understand reporting timelines and verification under Article 62.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-tx' ? 'Copied!' : 'Copy message'}
                  </button>
                </div>
              </div>
            </div>
          </article>
          {/* Wyoming */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="bison">🦬</span> Wyoming — HB 0280 (effective July 1, 2025)</h3>
              <p className="mt-2"><strong>ELI5:</strong> Certain offenses move into higher classifications — meaning <strong>more frequent verification</strong> and fewer options to petition off.</p>
              <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>People who expected to petition off after some years may no longer qualify.</li>
                  <li>Missing a verification can trigger violations; know your new timeline.</li>
                </ul>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-medium">Sources:</span>{' '}
                <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Bill page</a>{' · '}
                <a className="underline" href="https://wyomingdci.wyo.gov/criminal-justice-information-services-cjis/sor-faqs" target="_blank" rel="noreferrer">Wyoming DCI — SOR FAQs</a>
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Get oriented</div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://wyomingdci.wyo.gov/criminal-justice-information-services-cjis/sex-offender-registry" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">Registry overview</a>
                  <button
                    onClick={() => copyText('script-wy', 'Hello — I need clarity on HB 0280 verification schedules and petition-off eligibility. Could you publish a simple timeline and eligibility chart?')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-wy' ? 'Copied!' : 'Copy message'}
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* New York */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="city">🏙️</span> New York — S3113 (proposed school-zone housing ban)</h3>
              <p className="mt-2"><strong>ELI5:</strong> Would ban residence within <strong>1,350 ft</strong> of school property lines statewide (and <strong>500 ft</strong> in NYC). It’s still in committee.</p>
              <div className="mt-3 rounded-xl bg-violet-50 text-violet-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Residency bans have not shown public-safety benefits but do increase homelessness and instability.</li>
                  <li>This would be among the stricter default distance rules if enacted.</li>
                </ul>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-medium">Sources:</span>{' '}
                <a className="underline" href="https://assembly.state.ny.us/leg/?Text=Y&bn=S3113&sh=printbill&term=2025" target="_blank" rel="noreferrer">Bill text</a>{' · '}
                <a className="underline" href="https://www.nysenate.gov/committees/crime-victims-crime-and-correction" target="_blank" rel="noreferrer">Senate committee page</a>
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Share input</div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.nysenate.gov/find-my-senator" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">Find your Senator</a>
                  <a href="https://www.nysenate.gov/contact" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">General contact form</a>
                  <button
                    onClick={() => copyText('script-ny', 'Chair and Members: Please reject broad school-zone housing bans in S3113. Evidence shows residency restrictions don’t improve safety and do increase homelessness. Focus on approaches that support stability and prevention.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-ny' ? 'Copied!' : 'Copy message'}
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Michigan */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2"><span role="img" aria-label="scales">⚖️</span> Michigan — <em>Does v. Whitmer</em> (stay denied)</h3>
              <p className="mt-2"><strong>ELI5:</strong> The judge refused to pause his ruling that found parts of the registry unconstitutional, so the ruling <strong>remains in effect</strong> during appeal.</p>
              <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reduces risk of being penalized under provisions already flagged as unconstitutional.</li>
                  <li>Sets up a clearer path for targeted legislative fixes.</li>
                </ul>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-medium">Sources:</span>{' '}
                <a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order denying stay</a>{' · '}
                <a className="underline" href="https://www.aclumich.org/en/sora" target="_blank" rel="noreferrer">ACLU-MI SORA hub</a>
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="font-medium">📣 Get updates / contact lawmakers</div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.aclumich.org/en/sora" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">ACLU-MI SORA updates</a>
                  <a href="https://www.legislature.mi.gov/Legislature/Legislators" target="_blank" rel="noreferrer" className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100">Find MI legislators</a>
                  <button
                    onClick={() => copyText('script-mi', 'Hello — please prioritize targeted, constitutional fixes to Michigan’s registry in light of the current ruling, with clear guidance so families can comply without surprises.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-mi' ? 'Copied!' : 'Copy message'}
                  </button>
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Court Decisions & Litigation */}
      <section id="cases" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="gavel">⚖️</span> Court Decisions & Litigation
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          {/* Michigan detail card */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Michigan — <em>Does v. Whitmer</em> (E.D. Mich.) — <span className="text-emerald-700 font-semibold">Stay denied</span></h3>
            <ul className="mt-2 list-disc pl-6 text-slate-800 space-y-1">
              <li><strong>Date:</strong> May 19, 2025 (order denying stay).</li>
              <li><strong>Plain English:</strong> The judge declined to pause his ruling; it remains in effect during appeal.</li>
            </ul>
            <p className="mt-2 text-sm">
              <span className="font-medium">Docs & explainer:</span>{' '}
              <a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order</a>{' · '}
              <a className="underline" href="https://www.aclumich.org/en/sora" target="_blank" rel="noreferrer">ACLU-MI SORA hub</a>
            </p>
          </article>
        </div>
      </section>

      {/* Legislation by State (A→Z) */}
      <section id="states" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="map">🗺️</span> Legislation by State (A→Z)
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">

          {/* New York */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">New York — S3113 (residency ban near schools)</h3>
            <p className="mt-1 text-slate-800"><strong>Status:</strong> In committee. Would set a default <strong>1,350-ft</strong> housing ban from school property lines (500 ft in NYC).</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://assembly.state.ny.us/leg/?Text=Y&bn=S3113&sh=printbill&term=2025" target="_blank" rel="noreferrer">Bill page & text</a>{' · '}
              <a className="underline" href="https://www.nysenate.gov/committees/crime-victims-crime-and-correction" target="_blank" rel="noreferrer">Senate committee</a>
            </p>
          </article>

          {/* Texas */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Texas — HB 1465 (invasive visual recording → registration)</h3>
            <p className="mt-1 text-slate-800"><strong>Status:</strong> Signed; <strong>effective Sept 1, 2025</strong>. Adds invasive visual recording to offenses requiring registration.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://capitol.texas.gov/billlookup/text.aspx?Bill=HB1465&LegSess=89R" target="_blank" rel="noreferrer">Bill text</a>{' · '}
              <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">TX DPS Registration</a>
            </p>
          </article>

          {/* Wyoming */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Wyoming — HB 0280 (verification frequency ↑; petition-off limits)</h3>
            <p className="mt-1 text-slate-800"><strong>Status:</strong> Enacted; <strong>effective July 1, 2025</strong>. Reclassifies certain offenses, increasing verification and limiting removal petitions.</p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Session page</a>{' · '}
              <a className="underline" href="https://wyomingdci.wyo.gov/criminal-justice-information-services-cjis/sor-faqs" target="_blank" rel="noreferrer">Wyoming DCI — FAQs</a>
            </p>
          </article>

          {/* No Updates Accordion */}
          <details className="rounded-2xl border border-dashed border-slate-300 p-4">
            <summary className="cursor-pointer font-medium">No state-level legislative updates this week (click to view list)</summary>
            <p className="mt-2 text-slate-700 text-sm">
              AL, AK, AZ, AR, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MN, MO, MS, MT,
              NC, ND, NE, NH, NJ, NM, NV, OH, OK, OR, PA, RI, SC, SD, TN, UT, VA, VT, WA, WI, WV
            </p>
          </details>

        </div>
      </section>
{/* Practical Corner */}
      <section id="practical" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="toolbox">🧰</span> Practical Corner (quick links)
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-4 sm:grid-cols-2">
          <a className="rounded-xl ring-1 ring-slate-200 p-4 hover:bg-slate-50"
             href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program"
             target="_blank" rel="noreferrer">🔎 Texas Article 62 basics — reporting & verification</a>
          <a className="rounded-xl ring-1 ring-slate-200 p-4 hover:bg-slate-50"
             href="https://www.nysenate.gov/find-my-senator"
             target="_blank" rel="noreferrer">📨 Find your NY Senator — send a comment on S3113</a>
          <a className="rounded-xl ring-1 ring-slate-200 p-4 hover:bg-slate-50"
             href="https://wyomingdci.wyo.gov/criminal-justice-information-services-cjis/sor-faqs"
             target="_blank" rel="noreferrer">🗺️ Wyoming registry FAQ — verification timelines</a>
          <a className="rounded-xl ring-1 ring-slate-200 p-4 hover:bg-slate-50"
             href="https://www.aclumich.org/en/sora"
             target="_blank" rel="noreferrer">🧾 Michigan SORA updates — what the ruling means</a>
        </div>
      </section>

      {/* Media Watch */}
      <section id="media" className="mt-4">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="newspaper">📰</span> Media Watch (policy-relevant coverage)
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          {/* Use durable official sources to avoid link rot; media pieces can be added when stable */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Texas — HB 1465 effective</h3>
            <p className="mt-1 text-slate-700">To confirm the change and effective date, rely on the official legislature sources below (these don’t break behind paywalls or CMS changes).</p>
            <blockquote className="mt-3 border-l-4 border-slate-300 pl-4 italic text-slate-800">
              “HB 1465 adds invasive visual recording to the list of offenses requiring registration under Chapter 62, effective September 1, 2025.”
            </blockquote>
            <ul className="mt-3 list-disc pl-6 text-sm">
              <li><a className="underline" href="https://capitol.texas.gov/billlookup/text.aspx?Bill=HB1465&LegSess=89R" target="_blank" rel="noreferrer">Texas Legislature — Bill text (all versions)</a></li>
              <li><a className="underline" href="https://capitol.texas.gov/reports/Report.aspx?ID=passed&LegSess=89R" target="_blank" rel="noreferrer">Legislature report — Passed & effective dates</a></li>
            </ul>
          </article>
        </div>
      </section>

      {/* Rolling Watchlist */}
      <section id="watchlist" className="mt-4 mb-12">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="eyes">👀</span> Rolling Watchlist
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>MI — <em>Does v. Whitmer</em></strong>: watch Sixth Circuit appeal activity and any legislative fixes. <a className="underline" href="https://www.aclumich.org/en/sora" target="_blank" rel="noreferrer">ACLU-MI SORA</a></li>
            <li><strong>NY — S3113</strong>: monitor committee hearings/amendments. <a className="underline" href="https://assembly.state.ny.us/leg/?Text=Y&bn=S3113&sh=printbill&term=2025" target="_blank" rel="noreferrer">Bill page & text</a></li>
            <li><strong>TX — HB 1465</strong>: look for DPS guidance updates. <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">TX DPS program</a></li>
            <li><strong>WY — HB 0280</strong>: impacts on verification schedules and petition expectations. <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Session page</a></li>
          </ul>
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
      
