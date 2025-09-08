import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

// --- meta used by the hub index ---
export const meta = {
  date: '2025-09-07',
  title: 'Weekly: Texas Law Now In Effect, NY Proposes School-Zone Ban, Michigan Ruling Stands',
  slug: 'weekly-registry-2025-09-07-texas-ny-michigan',
  summary:
    'Texas HB 1465 takes effect; New York bill would add a 1,350-ft school-zone housing ban; Michigan judge keeps ruling in force during appeal; Wyoming reclassification already active.',
};

// --- teasers for the hub (auto-pulled) ---
export const teasers = {
  glance: [
    '🏛️ Federal — Sentencing Commission’s supervised-release changes remain set for Nov 1, 2025 (device/internet guidance).',
    '🗺️ States — TX HB 1465 is now in effect (invasive visual recording → registration); NY S3113 proposes 1,350-ft school-zone housing ban; WY HB 0280 reclassification effective Jul 1.',
    '⚖️ Cases — MI judge denied a stay, so his ruling remains active during appeal in Does v. Whitmer.',
    '📣 Action — Quick contact links provided under each highlight.',
  ],
  highlights: [
    {
      icon: '🏛️',
      title: 'Texas — HB 1465 now in effect (Sept 1, 2025)',
      url: 'https://capitol.texas.gov/tlodocs/89R/billtext/html/HB01465F.htm',
    },
    {
      icon: '⚖️',
      title: 'Michigan — Does v. Whitmer (stay denied, ruling stands)',
      url: 'https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/',
    },
    {
      icon: '🏷️',
      title: 'New York — S3113 (proposed 1,350-ft school-zone ban)',
      url: 'https://www.nysenate.gov/legislation/bills/2025/S3113',
    },
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
        title={`${meta.title} — SOLAR Legislative Tracker (Week of Sep 7, 2025)`}
        description="Texas law takes effect; New York proposes school-zone housing ban; Michigan ruling stands during appeal; Wyoming reclassification already active. Sources linked."
        keywords="sex offender registry, residency restrictions, Texas HB 1465, Michigan Does v. Whitmer, New York S3113, Wyoming HB 0280"
      />

      {/* Hero */}
      <section className="relative text-white">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link to="/resources/legislative-tracker" className="text-white/90 hover:underline print:hidden">← Back to Tracker hub</Link>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              {meta.title}
            </h1>
            <p className="mt-2 text-white/90">Week of Sep 7, 2025</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#glance" className="rounded-2xl bg-white text-slate-800 px-4 py-2 font-medium shadow">This week at a glance</a>
              <a href="#highlights" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Highlights</a>
              <a href="#states" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">States (A→W)</a>
              <a href="#cases" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Court decisions</a>
              <a href="#media" className="rounded-2xl ring-1 ring-white/40 px-4 py-2">Media</a>
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
              <span role="img" aria-label="calendar">🗓️</span> This Week at a Glance
            </h2>
          </div>
        </header>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ul className="space-y-2 text-slate-800">
            <li>🏛️ <strong>Texas:</strong> <a className="underline" href="https://capitol.texas.gov/tlodocs/89R/billtext/html/HB01465F.htm" target="_blank" rel="noreferrer">HB 1465</a> is now in force (Sept 1) — people convicted of invasive visual recording must register. <span className="text-sm text-slate-600">(See also media: <a className="underline" href="https://www.kcentv.com/article/news/local/law-expanding-sex-offender-registry-texas/500-5208c095-3de0-4751-ba15-73245009642e" target="_blank" rel="noreferrer">KCEN</a>, <a className="underline" href="https://www.khou.com/article/news/local/texas/new-texas-laws-september-1-2025-crime-education/285-2974fa10-e304-4b4e-a756-2e99a21a5133" target="_blank" rel="noreferrer">KHOU</a>)</span></li>
            <li>🏙️ <strong>New York:</strong> <a className="underline" href="https://www.nysenate.gov/legislation/bills/2025/S3113" target="_blank" rel="noreferrer">S3113</a> would create a 1,350-ft school-zone housing ban (500 ft in NYC); still in committee.</li>
            <li>🦬 <strong>Wyoming:</strong> <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">HB 0280</a> (reclassification → more frequent verification; blocks petition-off for certain offenses) has been effective since Jul 1; enrolled act: <a className="underline" href="https://legiscan.com/WY/text/HB0280/id/3153364/Wyoming-2025-HB0280-Enrolled.pdf" target="_blank" rel="noreferrer">PDF</a>.</li>
            <li>⚖️ <strong>Michigan:</strong> Judge <em>denied</em> a stay, so the ruling in <em>Does v. Whitmer</em> remains in effect during appeal (<a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">order</a>; media: <a className="underline" href="https://milawyersweekly.com/news/2025/07/11/michigan-sex-offender-registry-stay-denied/" target="_blank" rel="noreferrer">MiLawyersWeekly</a>).</li>
          </ul>
          <blockquote className="mt-4 border-l-4 border-blue-400 pl-4 text-slate-700 italic">
            <strong>Why this matters:</strong> Surprise rule changes and uneven data-sharing create compliance traps. We show what changed, what’s proposed, and where to act — with official links so you can verify fast.
          </blockquote>
        </div>
      </section>

      {/* Highlights (Top items first) */}
      <section id="highlights" className="mt-2">
        <header className="bg-gradient-to-r from-slate-100 to-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span role="img" aria-label="star">⭐</span> Highlights
            </h2>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid gap-6">
          {/* Highlight — Texas */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="state">🏛️</span> Texas — HB 1465 (now in effect)
              </h3>
              <p className="mt-2 text-slate-700"><strong>In plain terms:</strong> People convicted of <em>invasive visual recording</em> must register under Texas’s Article 62. Effective <strong>Sept 1, 2025</strong>.</p>
              <div className="mt-3 rounded-xl bg-amber-50 text-amber-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Triggers all report/verify duties (address changes, employment/school notice, timelines).</li>
                  <li>Travel/move planning should account for reporting windows to avoid violations.</li>
                </ul>
              </div>
              <div className="mt-3 text-sm">
                <span className="font-medium">Official:</span> <a className="underline" href="https://capitol.texas.gov/tlodocs/89R/billtext/html/HB01465F.htm" target="_blank" rel="noreferrer">Enrolled text</a> ·{' '}
                <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">TX DPS — Registration Program</a><br/>
                <span className="font-medium">Media:</span> <a className="underline" href="https://www.kcentv.com/article/news/local/law-expanding-sex-offender-registry-texas/500-5208c095-3de0-4751-ba15-73245009642e" target="_blank" rel="noreferrer">KCEN explainer</a> ·{' '}
                <a className="underline" href="https://www.khou.com/article/news/local/texas/new-texas-laws-september-1-2025-crime-education/285-2974fa10-e304-4b4e-a756-2e99a21a5133" target="_blank" rel="noreferrer">KHOU roundup</a>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="font-medium">📣 Know your obligations / contact your legislators</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyText('script-tx', 'Hello — With HB 1465 now in effect, please ensure clear, plain-language guidance and timelines for registration and verification so families can comply without surprises. Thank you.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-tx' ? 'Copied!' : 'Copy script'}
                  </button>
                  <a
                    href="https://wrm.capitol.texas.gov/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    Find TX legislators
                  </a>
                  <a
                    href="https://www.dps.texas.gov/section/crime-records/faq/criminal-history-records-and-texas-sex-offender-registration-program-faq"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    DPS FAQ
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Highlight — Michigan case */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="scales">⚖️</span> Michigan — <em>Does v. Whitmer</em> (stay denied)
              </h3>
              <p className="mt-2 text-slate-700"><strong>In plain terms:</strong> The judge <em>refused</em> to pause his earlier ruling that found parts of SORA unconstitutional, so that ruling remains in effect during the appeal.</p>
              <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Reduces the risk of being penalized under provisions already flagged as unconstitutional.</li>
                  <li>Signals courts expect targeted, evidence-based justifications for burdensome rules.</li>
                </ul>
              </div>
              <div className="mt-3 text-sm">
                <span className="font-medium">Official/Docs:</span> <a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order denying stay</a><br/>
                <span className="font-medium">Media/Explainers:</span> <a className="underline" href="https://milawyersweekly.com/news/2025/07/11/michigan-sex-offender-registry-stay-denied/" target="_blank" rel="noreferrer">Michigan Lawyers Weekly</a> · <a className="underline" href="https://www.aclumich.org/en/what-you-need-know-about-does-iii" target="_blank" rel="noreferrer">ACLU-MI background</a>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="font-medium">📣 Ask for legislative clarity (optional)</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyText('script-mi', 'Hello — Please prioritize clear, plain-language guidance aligning Michigan law with recent court rulings so that compliant families aren’t caught in confusion during the appeal.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-mi' ? 'Copied!' : 'Copy note'}
                  </button>
                  <a
                    href="https://www.legislature.mi.gov/Legislature/Legislators"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    Find MI legislators
                  </a>
                </div>
              </div>
            </div>
          </article>
          {/* Highlight — New York proposal */}
          <article className="rounded-2xl border border-slate-200 shadow-sm">
            <div className="px-5 pt-5">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <span role="img" aria-label="label">🏷️</span> New York — S3113 (proposed school-zone housing ban)
              </h3>
              <p className="mt-2 text-slate-700"><strong>In plain terms:</strong> Would bar certain people from living within <strong>1,350 ft</strong> of school property lines (or <strong>500 ft</strong> in NYC). Violations would be a Class C felony. In committee.</p>
              <div className="mt-3 rounded-xl bg-orange-50 text-amber-900 p-4">
                <div className="font-medium">Why it matters</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Residency bans don’t have strong evidence of improving safety and can increase homelessness and instability.</li>
                  <li>This would be among the stricter default distance rules if enacted.</li>
                </ul>
              </div>
              <div className="mt-3 text-sm">
                <span className="font-medium">Official:</span> <a className="underline" href="https://www.nysenate.gov/legislation/bills/2025/S3113" target="_blank" rel="noreferrer">NY Senate bill page</a> · <a className="underline" href="https://assembly.state.ny.us/leg/?Actions=Y&Committee%26nbspVotes=Y&Floor%26nbspVotes=Y&Summary=Y&Text=Y&bn=S03113&term=2025" target="_blank" rel="noreferrer">Assembly mirror</a>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="font-medium">📣 Send input (committee & members)</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyText('script-ny', 'Chair and Members — Please consider evidence that residency bans do not improve safety and can increase homelessness. I urge careful review of S3113 and support for stability-focused alternatives.')}
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    {copiedId === 'script-ny' ? 'Copied!' : 'Copy note'}
                  </button>
                  <a
                    href="https://www.nysenate.gov/committees/crime-victims-crime-and-correction"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    Committee page
                  </a>
                  <a
                    href="https://www.nysenate.gov/find-my-senator"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm rounded-lg px-3 py-1 ring-1 ring-slate-300 hover:bg-slate-100"
                  >
                    Find my Senator
                  </a>
                </div>
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
          {/* New York */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">New York</h3>
            <p><strong>S3113</strong> — Proposed school-zone housing ban (<strong>1,350 ft</strong>, or <strong>500 ft</strong> in NYC). <em>In committee.</em></p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.nysenate.gov/legislation/bills/2025/S3113" target="_blank" rel="noreferrer">Bill page</a> ·{' '}
              <a className="underline" href="https://assembly.state.ny.us/leg/?Actions=Y&Committee%26nbspVotes=Y&Floor%26nbspVotes=Y&Summary=Y&Text=Y&bn=S03113&term=2025" target="_blank" rel="noreferrer">Assembly mirror</a>
            </p>
          </article>

          {/* Texas */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Texas</h3>
            <p><strong>HB 1465</strong> — Invasive visual recording now a reportable offense under Article 62. <strong>Effective Sept 1, 2025.</strong></p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://capitol.texas.gov/tlodocs/89R/billtext/html/HB01465F.htm" target="_blank" rel="noreferrer">Enrolled text</a> ·{' '}
              <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">TX DPS program page</a>
            </p>
          </article>

          {/* Wyoming */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Wyoming</h3>
            <p><strong>HB 0280</strong> — Reclassification leading to more frequent verification; blocks petition-off for listed offenses. <strong>Effective Jul 1, 2025.</strong></p>
            <p className="mt-1 text-sm">
              <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Session page</a> ·{' '}
              <a className="underline" href="https://legiscan.com/WY/text/HB0280/id/3153364/Wyoming-2025-HB0280-Enrolled.pdf" target="_blank" rel="noreferrer">Enrolled Act PDF</a>
            </p>
          </article>

          {/* No-update states toggle */}
          <details className="rounded-2xl border border-dashed border-slate-300 p-4">
            <summary className="cursor-pointer font-medium">No state-level legislative movement posted this week (collapsed)</summary>
            <p className="mt-2 text-slate-700 text-sm">
              AL, AK, AZ, AR, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, OH, OK, OR, PA, RI, SC, SD, TN, UT, VA, VT, WI, WV
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
          {/* Michigan — Does v. Whitmer (order denying stay) */}
          <article className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Michigan — <em>Does v. Whitmer</em> (E.D. Mich.) — Stay denied; ruling stands during appeal</h3>
            <p><strong>In plain terms:</strong> The judge said it’s not in the public interest to keep enforcing parts of a law already found unconstitutional. The state hasn’t shown it’s likely to win on appeal, so the ruling remains in place.</p>
            <div className="mt-3 rounded-xl bg-blue-50 text-blue-900 p-4">
              <div className="font-medium">Docs & explainers</div>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li><a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order denying stay</a></li>
                <li><a className="underline" href="https://milawyersweekly.com/news/2025/07/11/michigan-sex-offender-registry-stay-denied/" target="_blank" rel="noreferrer">Michigan Lawyers Weekly summary</a></li>
              </ul>
            </div>
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
            <ul className="list-disc pl-6 space-y-2">
              <li>Texas — Effective-date coverage of HB 1465: <a className="underline" href="https://www.kcentv.com/article/news/local/law-expanding-sex-offender-registry-texas/500-5208c095-3de0-4751-ba15-73245009642e" target="_blank" rel="noreferrer">KCEN</a> · <a className="underline" href="https://www.khou.com/article/news/local/texas/new-texas-laws-september-1-2025-crime-education/285-2974fa10-e304-4b4e-a756-2e99a21a5133" target="_blank" rel="noreferrer">KHOU</a></li>
              <li>Michigan — Case posture recap: <a className="underline" href="https://milawyersweekly.com/news/2025/07/11/michigan-sex-offender-registry-stay-denied/" target="_blank" rel="noreferrer">Michigan Lawyers Weekly</a></li>
            </ul>
            <blockquote className="mt-4 border-l-4 border-slate-300 pl-4 italic text-slate-700">
              “Clear rules and clear timelines help families comply — confusion doesn’t.” Use these articles alongside the official links above for full context.
            </blockquote>
          </article>
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
              <li><strong>New York — S3113:</strong> Watch for committee hearing dates and amendments. <a className="underline" href="https://www.nysenate.gov/legislation/bills/2025/S3113" target="_blank" rel="noreferrer">Bill page</a></li>
              <li><strong>Texas — HB 1465:</strong> Implementation & DPS guidance updates. <a className="underline" href="https://www.dps.texas.gov/section/crime-records/texas-sex-offender-registration-program" target="_blank" rel="noreferrer">DPS program</a></li>
              <li><strong>Wyoming — HB 0280:</strong> Effects on verification cycles & petition expectations post-effective date. <a className="underline" href="https://www.wyoleg.gov/Legislation/2025/HB0280" target="_blank" rel="noreferrer">Session page</a></li>
              <li><strong>Michigan — Does v. Whitmer:</strong> Track appeal activity and any legislative fixes. <a className="underline" href="https://law.justia.com/cases/federal/district-courts/michigan/miedce/2%3A2022cv10209/359651/192/" target="_blank" rel="noreferrer">Order</a></li>
            </ul>
          </article>
        </div>
      </section>

      {/* Friendly AI assist note */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold flex items-center gap-2"><span role="img" aria-label="lab">🧪</span> How we track, vet, and curate</h3>
            <p className="mt-2 text-slate-700">
              We link <strong>primary sources</strong> (official bill pages, enrolled acts, court orders, agency sites) and add <strong>reputable media</strong> for context. We also use AI to scan nationwide dockets and calendars so fewer items slip through —
              but AI can miss nuance. If something looks off, please tell us and we’ll fix it quickly.
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
