import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function EmploymentDirectory(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Employment Directory & Job Search Guide - Registry-Friendly Employers | The SOLAR Project"
        description="Step-by-step employment guide for people on the registry: rights, fair-chance employers, industries, training, remote work, scripts, programs, and quick-start checklist."
        keywords="employment for sex offenders, fair chance employers, second chance hiring, job search with criminal record, registry employment restrictions, WOTC tax credit, federal bonding program"
      />

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 opacity-95"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-white">
          <div className="mb-4">
            <Link to="/resources" className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-white hover:bg-slate-700/80 transition-colors">
              ← Back to Resources
            </Link>
          </div>
          <p className="mb-3 text-sm opacity-90">SOLAR Resource Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Employment Guide for People on the Registry (U.S.)</h1>
          <p className="mt-4 max-w-3xl text-slate-200">
            Stable work <em>is</em> possible on the registry. This guide gives you step-by-step actions, fair-chance employers, in-demand industries, training paths, remote options, and programs that meaningfully improve your odds.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button 
              onClick={() => window.print()} 
              className="inline-flex items-center gap-2 rounded-2xl bg-white/95 text-slate-800 px-4 py-2 shadow hover:bg-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V9M6 18.75V15h12v3.75M6 15H4.5A1.5 1.5 0 0 1 3 13.5v-6A1.5 1.5 0 0 1 4.5 6H19.5A1.5 1.5 0 0 1 21 7.5v6A1.5 1.5 0 0 1 19.5 15H18"/>
              </svg>
              Print Guide
            </button>
            <a 
              href="https://secondchancebusinesscoalition.org/find-partners" 
              target="_blank" 
              rel="noopener" 
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-100 text-sky-900 px-4 py-2 shadow hover:bg-sky-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5-2.5V5l5 2.5L15 5l5 2.5v12.5L15 20l-6-3M9 7.5v12.5M15 5v12"/>
              </svg>
              SCBC Partner Map
            </a>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent"></div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Section 1 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">1</span>
            Know Your Rules, Then Plan Your Search
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-700">
            <p>
              • <strong>Check state/local employment limits first (distance rules).</strong> Some states bar registrants from <em>working</em> near schools/daycares/parks (often 1,000–2,000 ft.). Examples: <a className="text-blue-600 hover:text-blue-800 underline" href="https://law.justia.com/codes/alabama/title-15/chapter-20a/section-15-20a-13/" target="_blank" rel="noopener">Alabama</a> (2,000 ft. from schools/daycares) and <a className="text-blue-600 hover:text-blue-800 underline" href="https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-16/" target="_blank" rel="noopener">Georgia</a> (no employment at or within 1,000 ft. of schools/daycares/churches for many registrants). <a className="text-blue-600 hover:text-blue-800 underline" href="https://sor.tbi.tn.gov/api/vfs/40-39-211.pdf" target="_blank" rel="noopener">Tennessee</a> restricts employment within 1,000 ft. of schools/parks when the victim was a minor. Read your state statute (or ask counsel/supervising officer) before applying so you don't waste time on ineligible roles.
            </p>
            <p>
              • <strong>Background checks are common—honesty is required.</strong> Plan a brief, factual disclosure (what happened, what you've done since, what you offer now) and pivot to your skills. "Ban-the-Box" and <strong>Fair Chance</strong> laws in many places delay conviction questions until later, giving you a chance to show fit first (e.g., the federal <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.hhs.gov/about/agencies/asa/fair-chance-act/index.html" target="_blank" rel="noopener">Fair Chance Act</a> for U.S. agencies/contractors; broader overviews via <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.nelp.org/insights-research/ban-the-box-fair-chance-hiring-state-and-local-guide/" target="_blank" rel="noopener">NELP</a> and <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.accurate.com/ban-the-box/" target="_blank" rel="noopener">state-by-state maps</a>).
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-blue-800">
                  <strong>Know your rights:</strong> For detailed information about your legal protections during the job search process, see our <Link to="/resources/know-your-rights" className="text-blue-600 hover:text-blue-800 underline font-semibold">Your Rights at Every Stage guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">2</span>
            Fair-Chance & Second-Chance Employers (Where to Aim First)
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-700">
            <p>
              • <strong>National "Second Chance" coalitions & pledges.</strong> The <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">Second Chance Business Coalition</a> (SCBC) includes major brands—American Airlines, AT&T, Bank of America, Best Buy, Cisco, CVS, Home Depot, JPMorgan Chase, Koch, Kroger, Lowe's, McDonald's, Microsoft, Target, United, Verizon, Walgreens, Walmart, etc.—that are working to expand hiring of people with records. These firms have scale and process maturity; start here. Explore the <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/find-partners" target="_blank" rel="noopener">SCBC partner map</a> to find organizations in your metro.
            </p>
            <p>
              • <strong>Why an employer should hire you (mention incentives).</strong> Flag the <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.dol.gov/agencies/eta/wotc" target="_blank" rel="noopener">Work Opportunity Tax Credit (WOTC)</a> and <a className="text-blue-600 hover:text-blue-800 underline" href="https://bonds4jobs.com/" target="_blank" rel="noopener">Federal Bonding Program</a> in interviews; both reduce risk for the employer and can nudge a "yes." (Per IRS, WOTC is authorized through 12/31/2025: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" target="_blank" rel="noopener">IRS WOTC</a>.)
            </p>
            <p>
              • <strong>American Job Centers can match you.</strong> <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">AJCs</a> routinely help justice-impacted jobseekers and know which local employers hire. Ask for "justice-involved" services and reentry job fairs.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-green-800">
                  <strong>Pro tip:</strong> If you're preparing for reentry, our <Link to="/resources/reentry-checklist" className="text-green-600 hover:text-green-800 underline font-semibold">Reentry Checklist</Link> covers employment planning alongside housing, health, and legal obligations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">3</span>
            Industries & Roles That Often Hire (and Why)
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">🔥 Fastest Path to Employment</h3>
                <p className="text-green-800">
                  <strong>Skilled trades offer the quickest route to stable employment.</strong> These industries prioritize skills over background checks and often provide paid training. <span className="bg-green-100 px-2 py-1 rounded font-semibold">Many positions start at $15-25/hour with clear advancement paths.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed text-slate-700">
            <div className="border-l-4 border-blue-400 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
              <p>
                • <strong>Skilled trades (fastest pathway).</strong> Construction, electrical, plumbing, HVAC, welding, heavy equipment. Hiring is skills-first; apprenticeships and short certs get you in quickly (see §5). Use <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.apprenticeship.gov/" target="_blank" rel="noopener">Apprenticeship.gov</a> and funding via your <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">AJC</a>.
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
              <p>
                • <strong>Retail, grocery, warehousing.</strong> Big-box chains (and their distribution centers) regularly onboard second-chance applicants for stocking, fulfillment, and operations. Many are in <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a>.
              </p>
            </div>

            <div className="border-l-4 border-teal-400 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
              <p>
                • <strong>Food service & hospitality.</strong> Restaurants and hotels hire for kitchen, housekeeping, and maintenance, with room to advance. (Always avoid roles that conflict with local child-focused restrictions.)
              </p>
            </div>

            <div className="border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50/50 rounded-r-lg">
              <p>
                • <strong>Logistics & delivery.</strong> Warehouse roles at UPS/FedEx/Amazon are common. <span className="font-semibold">Important:</span> rideshare (Lyft/Uber) generally disqualifies applicants listed on the National Sex Offender Registry; see <a className="text-blue-600 hover:text-blue-800 underline" href="https://help.lyft.com/hc/en-us/all/articles/115012925687-Driver-requirements" target="_blank" rel="noopener">Lyft's policy</a> (and Uber's background check overview <a className="text-blue-600 hover:text-blue-800 underline" href="https://help.uber.com/driving-and-delivering/article/what-does-the-background-check-look-for?nodeId=ee210269-89bf-4bd9-87f6-43471300ebf2" target="_blank" rel="noopener">here</a>).
              </p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
              <p>
                • <strong>Other avenues.</strong> Agriculture, animal care, small local contractors, and family-owned businesses can be flexible because decisions are made locally (fewer blanket policies). (Use AJCs/networking to find them.)
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-red-800">
                  <strong>⚠️ Avoid These Platforms:</strong> Rideshare (Uber/Lyft), TaskRabbit, Instacart, and most gig economy platforms automatically disqualify registry individuals. <em>Always verify policies before applying to save time and avoid disappointment.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">4</span>
            How to Search (and Actually Get Interviews)
          </h2>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-cyan-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-cyan-800 mb-2">💡 Smart Search Strategy</h3>
                <p className="text-cyan-800">
                  <strong>Start with fair-chance platforms first.</strong> You'll get better response rates from employers who are already committed to second-chance hiring. <span className="bg-cyan-100 px-2 py-1 rounded font-semibold">This approach can save you weeks of rejections.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">1</span>
                <h3 className="font-semibold text-green-800">Fair-Chance First</h3>
              </div>
              <p className="text-green-700 text-sm">
                • <strong>Start with fair-chance platforms.</strong> <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.honestjobs.com/" target="_blank" rel="noopener">Honest Jobs</a> is a large fair-chance job board built for people with records; sign up and set alerts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">2</span>
                <h3 className="font-semibold text-purple-800">Smart Keywords</h3>
              </div>
              <p className="text-purple-700 text-sm">
                • <strong>Use general boards with smart keywords.</strong> On Indeed/ZipRecruiter/LinkedIn, search <em>"second chance," "fair chance," "felon friendly"</em>. Then cross-check each posting on the company's careers site.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">3</span>
                <h3 className="font-semibold text-amber-800">Get Professional Help</h3>
              </div>
              <p className="text-amber-700 text-sm">
                • <strong>Go where the help is.</strong> Visit an <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">American Job Center</a> (search by zip) for resume help, training money, and employer leads who already hire justice-involved applicants.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">4</span>
                <h3 className="font-semibold text-teal-800">Network Strategically</h3>
              </div>
              <p className="text-teal-700 text-sm">
                • <strong>Network on purpose.</strong> Ask mentors, faith communities, reentry groups, or past supervisors for referrals. The <a className="text-blue-600 hover:text-blue-800 underline" href="https://hirenetwork.org/" target="_blank" rel="noopener">National HIRE Network</a> directory lists state reentry orgs that can connect you.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-indigo-800">
                  <strong>Success Metric:</strong> Aim for <span className="bg-indigo-100 px-2 py-1 rounded font-semibold">5-10 applications per week</span> to fair-chance employers rather than 50+ applications to general job boards. Quality over quantity gets better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">5</span>
            Training, Certifications & Apprenticeships (Weeks to Months)
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-700">
            <p>
              • <strong>Quick credentials that move the needle:</strong> CDL, forklift, OSHA-10/30, HVAC, welding, IT support (CompTIA A+/Google IT), medical billing/coding. <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">AJCs</a> often fund these.
            </p>
            <p>
              • <strong>Earn while you learn (apprenticeships).</strong> Use <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.apprenticeship.gov/" target="_blank" rel="noopener">Apprenticeship.gov</a> to find registered apprenticeships; DOL specifically promotes these for justice-involved applicants (<a className="text-blue-600 hover:text-blue-800 underline" href="https://www.dol.gov/agencies/eta" target="_blank" rel="noopener">ETA</a> programs).
            </p>
            <p>
              • <strong>Education access.</strong> If you need a GED/adult-ed refresher, AJCs and community colleges can help; many aid programs have expanded to justice-involved learners. (Ask at your AJC.)
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">6</span>
            Remote & Flexible Work (What Works / What to Avoid)
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-700">
            <p>
              • <strong>Good targets.</strong> Remote customer support, tech support, sales development, data entry, content moderation, and freelance work (Upwork/Fiverr) often have lighter location/foot-traffic issues than on-site roles.
            </p>
            <p>
              • <strong>Companies with remote corps + fair-chance efforts.</strong> Several <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a> members hire remotely in corporate/ops roles (e.g., Home Depot, Microsoft, Target, Verizon, Walgreens/Walmart, AA/United). Search each careers site and filter for "remote."
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-amber-800">
                  <strong>Caution zones:</strong> Rideshare and many in-home service platforms screen out anyone on the National Sex Offender Registry (confirmed by <a className="text-amber-600 hover:text-amber-800 underline" href="https://help.lyft.com/hc/en-us/all/articles/115012925687-Driver-requirements" target="_blank" rel="noopener">Lyft policy</a>). Verify policies before investing time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">7</span>
            Resume, Disclosure & Interview (Scripts You Can Use)
          </h2>

          <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-violet-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-violet-800 mb-2">📝 The 3-Part Formula</h3>
                <p className="text-violet-800">
                  <strong>Resume → Disclosure → Value Proposition.</strong> Lead with skills, acknowledge the past briefly, then pivot immediately to what you bring to the team. <span className="bg-violet-100 px-2 py-1 rounded font-semibold">This approach works because it controls the narrative.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Resume Section */}
            <div className="border border-blue-200 rounded-lg p-5 bg-blue-50/30">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="font-semibold text-blue-800">Resume Strategy (1 page for now)</h3>
              </div>
              <p className="text-blue-700 mb-3">
                Lead with skills, certs, and <em>recent</em> experience or training. Keep the record off the resume unless asked in the application. Use numbers ("managed 200+ SKUs," "cut waste 15%").
              </p>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-blue-800 text-sm">
                  <strong>💡 Pro tip:</strong> If you have gaps in employment, fill them with volunteer work, training, or "Personal Development" sections. Employers want to see you've been productive.
                </p>
              </div>
            </div>

            {/* Disclosure Section */}
            <div className="border border-green-200 rounded-lg p-5 bg-green-50/30">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="font-semibold text-green-800">Disclosure Script (keep it short)</h3>
              </div>
              <div className="bg-green-100 rounded-lg p-4 mb-3">
                <p className="text-green-800 italic">
                  "I made a serious mistake in [year]. Since then I've completed [training], kept [work/volunteer], and I'm focused on showing up, learning fast, and adding value."
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white rounded p-3 border border-green-200">
                  <p className="text-green-700"><strong>✅ Do:</strong> Keep it under 30 seconds</p>
                </div>
                <div className="bg-white rounded p-3 border border-green-200">
                  <p className="text-green-700"><strong>✅ Do:</strong> Pivot immediately to skills</p>
                </div>
                <div className="bg-white rounded p-3 border border-green-200">
                  <p className="text-green-700"><strong>❌ Don't:</strong> Over-explain or make excuses</p>
                </div>
                <div className="bg-white rounded p-3 border border-green-200">
                  <p className="text-green-700"><strong>❌ Don't:</strong> Bring it up if not asked</p>
                </div>
              </div>
            </div>

            {/* Employer Reassurance Section */}
            <div className="border border-purple-200 rounded-lg p-5 bg-purple-50/30">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="font-semibold text-purple-800">Employer Reassurance (reduce their risk)</h3>
              </div>
              <p className="text-purple-700 mb-3">
                Mention <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.dol.gov/agencies/eta/wotc" target="_blank" rel="noopener">WOTC</a> and the <a className="text-blue-600 hover:text-blue-800 underline" href="https://bonds4jobs.com/" target="_blank" rel="noopener">Federal Bonding</a> Program as employer benefits; offer to connect them with your <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">AJC</a> to process it.
              </p>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-purple-800 text-sm">
                  <strong>💰 Financial incentive:</strong> WOTC can save employers up to $2,400 per hire, and Federal Bonding provides free insurance. <em>These programs exist specifically to encourage second-chance hiring.</em>
                </p>
              </div>
            </div>

            {/* Follow-up Section */}
            <div className="border border-amber-200 rounded-lg p-5 bg-amber-50/30">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold text-amber-800">Follow-up Strategy</h3>
              </div>
              <p className="text-amber-700 mb-3">
                Send a 4–6 sentence thank-you note within 24 hours, reiterating one concrete way you'll help the team.
              </p>
              <div className="bg-amber-100 rounded-lg p-3">
                <p className="text-amber-800 text-sm">
                  <strong>📧 Template:</strong> "Thank you for your time today. I'm excited about the opportunity to [specific role task]. Based on our conversation, I believe my [specific skill] would help [specific team goal]. I look forward to hearing from you."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-rose-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div>
                <p className="text-rose-800">
                  <strong>Remember:</strong> Every "no" gets you closer to a "yes." <span className="bg-rose-100 px-2 py-1 rounded font-semibold">Most successful job seekers with records report 20-50 applications before landing their first position.</span> Stay persistent and keep improving your approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">8</span>
            Programs & Help (Bookmark These)
          </h2>
          <div className="space-y-3 leading-relaxed text-slate-700">
            <p>
              • <strong>American Job Centers (finder).</strong> Resume help, training $, employer intros, job fairs: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">Find an AJC</a>.
            </p>
            <p>
              • <strong>CareerOneStop: Justice-Impacted hub.</strong> Step-by-step guides, job search tips, and training info: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/ExOffender/american-job-centers.aspx" target="_blank" rel="noopener">CareerOneStop</a>.
            </p>
            <p>
              • <strong>Apprenticeship.gov (finder).</strong> Registered apprenticeships across industries: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.apprenticeship.gov/" target="_blank" rel="noopener">Apprenticeship.gov</a>.
            </p>
            <p>
              • <strong>National HIRE Network (directory).</strong> State reentry orgs and legal resources: <a className="text-blue-600 hover:text-blue-800 underline" href="https://hirenetwork.org/" target="_blank" rel="noopener">HIRE Network</a>.
            </p>
            <p>
              • <strong>WOTC (official).</strong> What it is and who qualifies: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.dol.gov/agencies/eta/wotc" target="_blank" rel="noopener">DOL WOTC</a> • <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" target="_blank" rel="noopener">IRS WOTC</a>.
            </p>
            <p>
              • <strong>Federal Bonding (official).</strong> Free fidelity bond for your first 6 months on the job: <a className="text-blue-600 hover:text-blue-800 underline" href="https://bonds4jobs.com/" target="_blank" rel="noopener">Federal Bonding Program</a>.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-purple-800">
                  <strong>Need mental health support during your job search?</strong> Our <Link to="/resources/mental-health-directory" className="text-purple-600 hover:text-purple-800 underline font-semibold">Mental Health & Support Directory</Link> includes resources for managing stress and anxiety during this challenging process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Job Boards */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">•</span>
            Company Job Boards (Quick Links)
          </h2>
          <p className="text-slate-700 mb-4">
            These are large employers with public fair-chance commitments or SCBC membership. Search each site (add "remote" where applicable) and apply broadly:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc pl-6 text-slate-700">
            <li><strong>American Airlines Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>AT&T Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Bank of America Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Best Buy Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Cisco Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>CVS Health Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Home Depot Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Indeed (jobs marketplace)</strong> (SCBC partner) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>JPMorgan Chase Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Koch Industries Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Kroger Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Lowe's Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>McDonald's Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Microsoft Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Target Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>United Airlines Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Verizon Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Walgreens Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Walmart Careers</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Randstad (staffing)</strong> (SCBC) — see <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a></li>
            <li><strong>Honest Jobs</strong> (fair-chance job board) — <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.honestjobs.com/" target="_blank" rel="noopener">honestjobs.com</a></li>
          </ul>

          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-sky-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sky-800">
                  <strong>Tip:</strong> If a posting looks promising on a general job site, always click through to the <em>company's own careers site</em> to apply (and search for "Fair Chance," "Ban-the-Box," or "Second Chance" in their policy pages). Many SCBC members also partner with local reentry orgs—use the <a className="text-sky-600 hover:text-sky-800 underline" href="https://secondchancebusinesscoalition.org/find-partners" target="_blank" rel="noopener">SCBC partner map</a> to find connections in your metro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Checklist */}
        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold ring-2 ring-slate-200">✓</span>
            Quick Start Checklist (print this)
          </h2>
          <ol className="space-y-2 list-decimal pl-6 text-slate-700">
            <li>Look up your state's <strong>employment distance rules</strong> (or ask your supervising officer). See examples: <a className="text-blue-600 hover:text-blue-800 underline" href="https://law.justia.com/codes/alabama/title-15/chapter-20a/section-15-20a-13/" target="_blank" rel="noopener">Alabama</a>, <a className="text-blue-600 hover:text-blue-800 underline" href="https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-16/" target="_blank" rel="noopener">Georgia</a>, <a className="text-blue-600 hover:text-blue-800 underline" href="https://sor.tbi.tn.gov/api/vfs/40-39-211.pdf" target="_blank" rel="noopener">Tennessee</a>.</li>
            <li>Create a 1-page <strong>skills-first resume</strong> (add any certs or volunteer work).</li>
            <li>Register at <strong>Honest Jobs</strong> and set job alerts: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.honestjobs.com/" target="_blank" rel="noopener">honestjobs.com</a>.</li>
            <li>Visit your <strong>American Job Center</strong> for resume review, training $, and employer leads: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" target="_blank" rel="noopener">Find an AJC</a>.</li>
            <li>Apply to <strong>SCBC member companies</strong> (filter for "remote" as needed): <a className="text-blue-600 hover:text-blue-800 underline" href="https://secondchancebusinesscoalition.org/" target="_blank" rel="noopener">SCBC</a>.</li>
            <li>Practice your <strong>30-second disclosure</strong> + pivot.</li>
            <li>In interviews, mention <strong>WOTC</strong> and <strong>Federal Bonding</strong> to reassure employers: <a className="text-blue-600 hover:text-blue-800 underline" href="https://www.dol.gov/agencies/eta/wotc" target="_blank" rel="noopener">DOL WOTC</a> • <a className="text-blue-600 hover:text-blue-800 underline" href="https://bonds4jobs.com/" target="_blank" rel="noopener">Bonds4Jobs</a>.</li>
          </ol>
        </section>

        {/* Important Reminders */}
        <section className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-semibold text-yellow-800 mb-2">Key Reminder:</p>
              <p className="text-yellow-800">
                The path may not be quick, but persistence pays off. Thousands of registrants have secured stable jobs by targeting supportive industries, preparing with training, and using second-chance resources. Every application is a step closer to stability.
              </p>
              <p className="text-yellow-800 mt-3">
                For additional support during your job search, explore our <Link to="/resources" className="text-yellow-600 hover:text-yellow-800 underline font-semibold">complete resource library</Link> including housing assistance, mental health support, and family guidance.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-8 mb-12 text-center text-sm text-slate-500 px-4">
        <p>© The SOLAR Project — Employment guide for people on the registry. This page includes links to official sources and reputable organizations current as of August 2025.</p>
      </footer>
    </div>
  );
}