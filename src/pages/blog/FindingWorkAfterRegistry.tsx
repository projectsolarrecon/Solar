  import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function FindingWorkAfterRegistry(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Finding Work After the Registry: Strategy, Survival, and Hope | The SOLAR Project"
        description="A 15-minute, long-form guide for people on the registry: honest reality, evidence-based strategies, concrete first steps, fair-chance employers, and hope—without sugarcoating."
        keywords="sex offender registry employment, finding work with criminal record, fair chance hiring, second chance employers, job search strategies, registry employment barriers"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16 -mx-6 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-white hover:bg-slate-700/80 transition-colors">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Employment & Reentry
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Finding Work After the Registry: Strategy, Survival, and Hope
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-3xl">
            It's narrative, data-driven, and honest—moving from barriers and stigma through concrete strategy and actionable first steps, ending with hope and forward-looking perspective. All sources are embedded and verified.
          </p>
          
          <div className="text-sm text-slate-300">
            <span>August 24, 2025</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500 -mx-6 mb-12"></div>

      <article className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* The Weight of Starting Over */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v1m-9 0h12a2 2 0 0 1 2 2v3H4V9a2 2 0 0 1 2-2Zm-2 5h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z"/>
              </svg>
              The Weight of Starting Over
            </h2>
            
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-6 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">🌙 The Midnight Job Hunt</h3>
                  <p className="text-blue-800">
                    <strong>It's past midnight. Your phone screen glows as you scroll through job boards.</strong> This isn't just job hunting—this is job hunting on the registry. Every application feels like rolling dice with loaded odds.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              Imagine this: it's past midnight. Your phone screen glows as you scroll through Indeed, ZipRecruiter, or local classifieds. You're searching "warehouse jobs near me," or "night shift stocking." You fill out application after application, but nothing comes back. Or worse—you get the call, sail through the interview, only to be turned down as soon as the background check clears.
            </p>
            <p className="text-slate-700 mb-4">
              This isn't just job hunting. This is job hunting on the registry.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ The Triple Barrier</h4>
                  <p className="text-red-800 text-sm">
                    <strong>Legal restrictions + Background checks + Social stigma</strong> = A job search unlike any other. Understanding these barriers is the first step to overcoming them.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              The hurdles show up before you even hit "apply." Some states impose "no work zones," banning registrants from holding jobs within 1,000–2,000 feet of schools, daycare centers, or parks (<a href="https://law.justia.com/codes/alabama/title-15/chapter-20a/section-15-20a-13/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Alabama law</a>, <a href="https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-16/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Georgia law</a>, <a href="https://sor.tbi.tn.gov/api/vfs/40-39-211.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Tennessee restrictions PDF</a>). That means an otherwise great warehouse job downtown might be off-limits simply because there's a daycare next door.
            </p>
            <p className="text-slate-700 mb-4">
              Then there's the background check. Employers have the legal right to run them, and registries ensure your past is never hidden. Even decades-old offenses surface instantly. This isn't like a DUI or theft charge buried on page three of a report. Registry status sits on top, visible to anyone with a search bar.
            </p>
            <p className="text-slate-700 mb-4">
              Finally, there's stigma—the hardest barrier to quantify but often the hardest to overcome. A British study on men with sexual convictions captured it bluntly: <em>"It's okay if you were in for robbery—but sex offending? That's a NO-NO"</em> (<a href="https://www.russellwebster.com/how-do-you-find-work-as-a-released-sex-offender/?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Russell Webster</a>). That perception lingers no matter your rehabilitation, treatment, or the time that's passed.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-emerald-800">
                    <strong>So yes—it's hard. Brutally so. But it's not impossible.</strong> The strategies that follow have helped thousands of people on the registry find meaningful work and rebuild their lives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Employment is the Lifeline */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75l4.5 4.5m0-4.5-4.5 4.5"/>
              </svg>
              Why Employment is the Lifeline
            </h2>
            
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-teal-800 mb-2">💼 More Than a Paycheck</h3>
                  <p className="text-teal-800">
                    <strong>Jobs provide structure, dignity, and purpose.</strong> For people on the registry, they're also one of the strongest predictors of safe reentry. <span className="bg-teal-100 px-2 py-1 rounded font-semibold">Work literally saves lives.</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              Jobs are more than paychecks. They're structure, dignity, purpose. For people on the registry, they're also one of the strongest predictors of safe reentry.
            </p>
            <p className="text-slate-700 mb-4">
              Research is clear: stable employment significantly reduces the likelihood of reoffending or returning to prison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11545130/?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NCBI</a>). For people with sex offense convictions specifically, where recidivism rates are already lower than most other crimes, a job provides an anchor against isolation, depression, and hopelessness.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-amber-800">
                    <strong>The flip side:</strong> Exclusion from the workforce increases instability. A 2023 analysis found that public registries not only fail to reduce sexual recidivism, but in many cases <strong>increase homelessness and unemployment</strong>, fueling risks they were meant to prevent.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700">
              The opposite is also true. Exclusion from the workforce increases instability. A 2023 analysis found that public registries not only fail to reduce sexual recidivism, but in many cases <strong>increase homelessness and unemployment</strong>, fueling risks they were meant to prevent (<a href="https://en.wikipedia.org/wiki/Effectiveness_of_sex_offender_registration_policies_in_the_United_States?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Wikipedia – Effectiveness of Registries</a>).
            </p>
            <p className="text-slate-700 font-semibold">
              In short: work saves lives. Both yours, and potentially someone else's.
            </p>
          </section>

          {/* The Emotional Toll */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.182 15.182a4 4 0 0 0-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9h.01M15 9h.01"/>
              </svg>
              The Emotional Toll of Job Hunting While Registered
            </h2>
            
            <p className="text-slate-700 mb-4">
              The practical barriers are bad enough, but the emotional weight is crushing. Every rejection can feel like confirmation that you'll never escape your past. It's not about skills or motivation—it's about stigma.
            </p>
            <p className="text-slate-700 mb-4">
              The Georgia Justice Project has documented how lack of employment access affects not just the individual, but entire families. Parents unable to find work sink into depression. Partners carry financial burdens alone. Children lose stability, watching one parent spiral under shame and exclusion (<a href="https://gjp.org/wp-content/uploads/2022/06/2022.5.16-GJP-Second-Chance-Hiring-Employer-Resource-Page.pdf?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">GJP report</a>).
            </p>
            
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-5 mb-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-rose-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div>
                  <p className="text-rose-800">
                    <strong>The cycle of hopelessness:</strong> Try, fail, retreat. Social isolation and shame correlate with higher risks of relapse and reoffense. Breaking this cycle requires both practical strategy and emotional support.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              Hopelessness can become its own prison. In interviews, registrants often describe a cycle: try, fail, retreat. The danger isn't just economic—it's psychological. Social isolation and shame correlate with higher risks of relapse and reoffense.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-green-800">
                    <strong>But here's the flip side:</strong> once momentum begins, hope grows. The key is knowing <strong>where</strong> to start—and how to keep moving even when barriers stack up. Our <Link to="/resources/family-support-guide" className="text-green-600 hover:text-green-800 underline font-semibold">Family Support Guide</Link> can help your loved ones understand and support this journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategy Over Stigma */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10c0 7.5-7.5 10.5-7.5 10.5S4.5 17.5 4.5 10a7.5 7.5 0 1 1 15 0Z"/>
              </svg>
              Strategy Over Stigma: Mapping the Road Forward
            </h2>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">💡 Smart Strategy Beats Random Applications</h3>
                  <p className="text-indigo-800">
                    <strong>Don't spray and pray with job applications.</strong> Target employers who have already committed to second-chance hiring. <span className="bg-indigo-100 px-2 py-1 rounded font-semibold">Work smarter, not harder.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Fair-Chance Employers: A Better Starting Line</h3>
                <p className="text-slate-700 mb-4">
                  The <strong>Second Chance Business Coalition (SCBC)</strong> is a group of major U.S. employers pledging to expand hiring for people with records. Members include American Airlines, AT&T, Bank of America, Best Buy, CVS, Home Depot, JPMorgan Chase, Kroger, Lowe's, McDonald's, Microsoft, Target, United Airlines, Verizon, Walgreens, and Walmart (<a href="https://secondchancebusinesscoalition.org/find-partners?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">SCBC partner map</a>).
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800">
                    <strong>Does this mean guaranteed jobs?</strong> No. But it means you're not starting at zero. These employers have at least <em>acknowledged</em> that hiring people with records is part of their mission. Our <Link to="/resources/employment-directory" className="text-blue-600 hover:text-blue-800 underline font-semibold">Employment Directory</Link> has a comprehensive list of fair-chance employers and application strategies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Ban-the-Box: Promise and Pitfalls</h3>
                <p className="text-slate-700 mb-4">
                  Over 35 states and 150+ localities have passed <strong>Ban-the-Box</strong> or <strong>Fair Chance hiring</strong> laws. These delay the question about criminal history until later in the application, giving you a chance to present yourself first (<a href="https://www.nelp.org/insights-research/ban-the-box-fair-chance-hiring-state-and-local-guide/?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NELP state guide</a>).
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ The Promise</h4>
                    <p className="text-green-700 text-sm">You get your foot in the door and can present your skills first.</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">⚠️ The Pitfall</h4>
                    <p className="text-amber-700 text-sm">Some employers discriminate more subtly once records are revealed.</p>
                  </div>
                </div>
                <p className="text-slate-700 mt-4">
                  Still, in practice, many registrants have found Ban-the-Box jurisdictions more workable than others.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Community-Based Models: Circles of Support</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Circles of Support and Accountability (CoSA)</strong> is a volunteer-driven program where small groups of community members support registrants through reentry. Studies show CoSA participants have <strong>70% lower rates of reoffending</strong> (<a href="https://en.wikipedia.org/wiki/Circles_of_Support_and_Accountability?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Wikipedia</a>).
                </p>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <p className="text-teal-800">
                    <strong>While not primarily job programs,</strong> CoSAs often connect people to employers through trust and accountability networks—something job boards can't replicate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started: First Five Steps */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.59 14.37-5.47 5.47a.75.75 0 0 1-1.28-.53l.12-3.65-3.67-.1a.75.75 0 0 1-.53-1.28l5.47-5.47m5.87 5.77 3.06-3.06a7.5 7.5 0 0 0-9.9-9.9l-3.06 3.06M9.75 9.75l4.5 4.5"/>
              </svg>
              Getting Started: The First Five Steps
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">🚀 Start Here When Everything Feels Overwhelming</h3>
                  <p className="text-green-800">
                    <strong>These five steps are designed to generate momentum within a week.</strong> Don't try to solve everything at once. <span className="bg-green-100 px-2 py-1 rounded font-semibold">Small steps create big changes.</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-6">When everything feels overwhelming, start here. These steps are designed to generate momentum within a week.</p>
            
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Check your state's restrictions</h4>
                    <p className="text-slate-700 mb-3">Print the statute. Highlight off-limit areas. Circle the jobs that are still legal. Don't waste energy applying for positions you can't legally hold.</p>
                    <div className="space-y-1 text-sm">
                      <p>– <a href="https://law.justia.com/codes/alabama/title-15/chapter-20a/section-15-20a-13/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Alabama law</a></p>
                      <p>– <a href="https://law.justia.com/codes/georgia/title-42/chapter-1/article-2/section-42-1-16/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Georgia law</a></p>
                      <p>– <a href="https://sor.tbi.tn.gov/api/vfs/40-39-211.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Tennessee PDF</a></p>
                      <p className="mt-2 text-slate-600">Our <Link to="/resources/state-process-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">State Process Guide</Link> covers employment restrictions for all 50 states.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Write your 30-second disclosure</h4>
                    <p className="text-slate-700 mb-3">Keep it honest but forward-focused:</p>
                    <div className="bg-slate-100 rounded-lg p-3 italic text-slate-700">
                      "I made mistakes in the past. Since then I've completed training in [X], worked in [Y], and I'm committed to being reliable and contributing here."
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Visit an American Job Center (AJC)</h4>
                    <p className="text-slate-700 mb-3">These centers provide resume help, training funding, and links to local employers already familiar with second-chance hiring.</p>
                    <a href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" className="text-blue-600 hover:text-blue-800 underline font-semibold" target="_blank" rel="noopener">Find an AJC near you →</a>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Create a profile on Honest Jobs</h4>
                    <p className="text-slate-700 mb-3">This platform exists for people with records. Upload your resume and commit to three applications this week.</p>
                    <a href="https://www.honestjobs.com/" className="text-blue-600 hover:text-blue-800 underline font-semibold" target="_blank" rel="noopener">Get started on Honest Jobs →</a>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm mr-4 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Choose one certification</h4>
                    <p className="text-slate-700 mb-3">Whether forklift, OSHA, CDL, HVAC, or IT support, pick one credential and make the call to sign up. One step forward creates momentum for the next.</p>
                    <p className="text-slate-600 text-sm">Our <Link to="/resources/employment-directory" className="text-blue-600 hover:text-blue-800 underline font-semibold">Employment Directory</Link> includes a comprehensive section on certifications and training programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deepening the Strategy */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.25 18 7.5-7.5 4.5 4.5 7.5-7.5M15.75 6h5.25v5.25"/>
              </svg>
              Deepening the Strategy
            </h2>
            
            <p className="text-slate-700 mb-6">Once you've started, build on it.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h4 className="font-semibold text-blue-800 mb-3">🏭 Target skill-driven industries</h4>
                <p className="text-blue-700 text-sm">Warehousing, trades, construction, food service, and hospitality are more open because they're desperate for workers.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h4 className="font-semibold text-green-800 mb-3">💰 Leverage employer incentives</h4>
                <p className="text-green-700 text-sm">Employers can claim up to $2,400 in tax credits for hiring someone with a record under <a href="https://www.dol.gov/agencies/eta/wotc" className="text-green-600 underline" target="_blank" rel="noopener">WOTC</a>. They can also get free insurance through the <a href="https://bonds4jobs.com/" className="text-green-600 underline" target="_blank" rel="noopener">Federal Bonding Program</a>.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Apply smart</h4>
                <p className="text-purple-700 text-sm">Always apply on the company's own careers page, not just through third-party job boards. Many SCBC companies explicitly note their fair-chance policies online.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <h4 className="font-semibold text-orange-800 mb-3">🔧 Use apprenticeships</h4>
                <p className="text-orange-700 text-sm">Search <a href="https://www.apprenticeship.gov/" className="text-orange-600 underline" target="_blank" rel="noopener">Apprenticeship.gov</a> to find programs where you earn while you learn.</p>
              </div>
              
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-5 md:col-span-2">
                <h4 className="font-semibold text-teal-800 mb-3">🤝 Network intentionally</h4>
                <p className="text-teal-700 text-sm">Don't underestimate the power of telling a mentor, pastor, or former coworker: <em>"I'm ready to work—if you hear of anything, let me know."</em> Many jobs come this way, not through a cold application.</p>
              </div>
            </div>
          </section>

          {/* Stories of Resilience */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 6.188 8.25 3.75l-1.563 2.438L4.25 7.75l2.437 1.563L8.25 11.75l1.563-2.437L12.25 7.75 9.813 6.188Zm9 7 1.687-2.625-2.625-1.687-1.687-2.625-1.687 2.625-2.625 1.687 2.625 1.688 1.687 2.624 1.687-2.687Z"/>
              </svg>
              Stories of Resilience
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">✨ Real People, Real Success</h3>
                  <p className="text-yellow-800">
                    <strong>These aren't fairy tales—they're real stories of persistence paying off.</strong> Every person on the registry who finds meaningful work proves it's possible. <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">Your story could be next.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Charandip's Union Job</h3>
                <p className="text-slate-700">
                  Charandip had no full-time work history when he came home. Through the Center for Employment Opportunities (CEO), he gained transitional work experience and eventually landed a full union job with benefits (<a href="https://www.ceoworks.org/blog/charandips-journey-from-incarceration-to-a-union-job?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">CEO Works</a>). It wasn't easy—but persistence plus support opened doors.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Eppie Sprung's Fight</h3>
                <p className="text-slate-700">
                  After her conviction in the UK, former teacher Eppie Sprung faced rejection after rejection. Eventually, she founded Next Chapter Scotland to support others in similar positions (<a href="https://www.thetimes.co.uk/article/sex-offender-teacher-i-want-to-help-others-with-spent-convictions-b5dzcjnck?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">The Times</a>). Her story is less about immediate employment and more about resilience and purpose.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Everyday Resilience</h3>
                <p className="text-slate-700">
                  In online communities, registrants share tips: "Try the auto parts warehouse—they hired me despite my record," or "FedEx gave me a chance." These aren't glossy success stories—but they're real. And for many, real is enough to keep going (<a href="https://www.reddit.com/r/SexOffenderSupport/comments/wsqeut/any_successful_people_that_are_registered_as_a/?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Reddit thread</a>).
                </p>
              </div>
            </div>
          </section>

          {/* Reframing Hope */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v2.25M12 18.75V21M4.5 12H2.25M21.75 12H19.5M5.47 5.47l1.59 1.59M16.94 16.94l1.59 1.59M5.47 18.53l1.59-1.59M16.94 7.06l1.59-1.59M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              Reframing Hope
            </h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 mb-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">🌅 Hope is Practical</h3>
                  <p className="text-orange-800">
                    <strong>Hope isn't abstract—it's built through concrete action.</strong> Every resume sent, training class started, and interview landed adds to your foundation. <span className="bg-orange-100 px-2 py-1 rounded font-semibold">Hope grows with momentum.</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              Hope isn't abstract. It's practical. It grows with each concrete step: the first resume sent, the first training class started, the first interview landed.
            </p>
            <p className="text-slate-700 mb-4">
              It's also collective. April is recognized as <a href="https://en.wikipedia.org/wiki/Second_Chance_Month?utm_source=chatgpt.com" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Second Chance Month</a>, a reminder that society benefits when people are given the chance to rebuild. Families stabilize. Communities grow safer. Employers find loyal, motivated workers.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div>
                  <p className="text-emerald-800 text-lg">
                    <strong>If you're on the registry, you are not defined by your past.</strong> You are more than the worst thing you've ever done. The system may be stacked against you—but with strategy, persistence, and support, progress is possible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <svg className="w-6 h-6 text-slate-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3v18M5 4.5h10.19a.75.75 0 0 1 .53.22l2.56 2.56a.75.75 0 0 0 .53.22H21v8h-2.19a.75.75 0 0 0-.53.22l-2.56 2.56a.75.75 0 0 1-.53.22H5"/>
              </svg>
              Start Small, Aim Big
            </h2>
            
            <div className="bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl p-8 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Your Week 1 Action Plan</h3>
                <div className="grid md:grid-cols-5 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-semibold text-blue-600 mb-1">Day 1</div>
                    <div className="text-slate-700">Check state law</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-semibold text-purple-600 mb-1">Day 2</div>
                    <div className="text-slate-700">Write disclosure script</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-semibold text-green-600 mb-1">Day 3</div>
                    <div className="text-slate-700">Visit AJC</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-semibold text-orange-600 mb-1">Day 4</div>
                    <div className="text-slate-700">Join Honest Jobs</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="font-semibold text-red-600 mb-1">Day 5</div>
                    <div className="text-slate-700">Pick certification</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-700 mb-4">
              This week, check your state's law. Write your 30-second script. Visit an AJC. Apply to three jobs on Honest Jobs. Pick a certification and sign up. Five small steps. One big shift.
            </p>
            <p className="text-slate-700 mb-4">
              You don't have to solve everything today. You just have to start. And once you do, momentum builds.
            </p>
            
            <div className="text-center">
              <p className="text-xl font-semibold text-slate-800">
                The road is uphill. But it's walkable.
              </p>
            </div>
          </section>

          {/* Coming Soon */}
          <div className="border-t border-slate-200 pt-8">
            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Coming soon on SOLAR:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>– <em>How to Find Remote Work While on the Registry</em></li>
                <li>– <em>Self-Employment and Side Hustles for People with Convictions</em></li>
              </ul>
              <p className="mt-4 text-slate-600 text-sm">
                Want comprehensive employment resources right now? Check out our <Link to="/resources/employment-directory" className="text-blue-600 hover:text-blue-800 underline font-semibold">Employment Directory & Job Search Guide</Link> for detailed strategies, employer lists, and step-by-step application advice.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}