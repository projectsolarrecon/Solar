import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';

export default function TwoMenOneReleaseDate(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO 
        title="Two Men, One Release Date - The SOLAR Project"
        description="A drug trafficker walks free with no strings attached; a first-time offender is branded for life. What does that say about justice?"
        keywords="sex offender registry, recidivism, registry effectiveness, criminal justice reform, SOLAR Project, RECON, housing bans, employment barriers, international Megan's Law"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              📰 INVESTIGATIVE FEATURE
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Two Men, One Release Date
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            A drug trafficker walks free with no strings attached; a first-time offender is branded for life. What does that say about justice?
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              8 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              September 5, 2025
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Section 1: The Prison Gate Opens */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🚪</span>
            The Prison Gate Opens
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Two 36-year-old men step out of federal prison on the same morning.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Dante</strong>: domestic battery, animal cruelty, theft, DUI, a firearms charge, and meth trafficking. GED behind bars, little work history.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Ethan</strong>: college graduate, rising star sales engineer, until one drunken night of catastrophic judgment with a 15-year-old. He knew her age, pled guilty, served his time.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            They served the same sentence. But their futures look nothing alike.
          </p>
        </section>

        {/* Section 2: Dante's Clean Slate */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🔓</span>
            Dante's Clean Slate
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dante's punishment ends at the gate. No registry. No reporting. No passport marks.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  He can rent housing near schools.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  He can apply for jobs without disclosure.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  He can cross state lines unnoticed.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yet his <strong>risk of reoffending is high</strong>:
          </p>

          <div className="bg-red-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🔫 Firearms offenders: <strong>70.6 percent rearrested</strong> in 8 years (<a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">USSC</a>)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  💊 Drug traffickers: <strong>43 percent rearrested</strong> in 5 years (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS</a>)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🍺 DUI/DWI offenders: <strong>25 percent repeat</strong>, more than 10,000 deaths annually (<a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NHTSA</a>)
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Ethan's Invisible Shackles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⛓️</span>
            Ethan's Invisible Shackles
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ethan's punishment never ends.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🔒 <strong>Registry listing</strong>: name, photo, address searchable online.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🔒 <strong>Reporting</strong>: changes within 3 days, in-person check-ins 1–4 times per year (<a href="https://www.ecfr.gov/current/title-28/part-72" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">SORNA</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🔒 <strong>Travel bans</strong>: 21-day notice plus passport identifier (<a href="https://travel.state.gov/content/travel/en/passports/legal-matters/SORNA.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">State Dept</a>).
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🟥 <strong>Housing bans</strong>: lifetime registrants excluded from public housing (<a href="https://www.govinfo.gov/content/pkg/USCODE-2010-title42/pdf/USCODE-2010-title42-chap135-sec13663.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">42 U.S.C. §13663</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🟨 <strong>Homelessness crisis</strong>: Miami Herald exposed encampments under bridges caused by residency laws (<a href="https://www.miamiherald.com/news/local/crime/article237545129.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Miami Herald 2019</a>, <a href="https://www.miamiherald.com/news/local/community/miami-dade/article168569977.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">2017</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🟦 <strong>Employment barriers</strong>: blocked by statutory licensing and background checks (<a href="https://niccc.csgjusticecenter.org/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NICCC</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🟦 <strong>Family restrictions</strong>: supervised release often bars living with minors—even one's own children (<a href="https://www.uscourts.gov/services-forms/probation-and-pretrial-services/supervision/special-conditions" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">U.S. Courts</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  🟦 <strong>Education limits</strong>: campuses and housing off-limits (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">HRW</a>).
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: The Numbers Don't Lie */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📊</span>
            The Numbers Don't Lie
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Compare the data:
          </p>

          <div className="bg-green-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Sex offenses</strong>: 4 percent rearrested in 5 years (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS</a>)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Image-based federal cases</strong>: 4.3 percent rearrested in 3 years (<a href="https://www.ussc.gov/research/research-reports/recidivism-federal-child-pornography-non-production-offenders" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">USSC</a>)
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Versus:
          </p>

          <div className="bg-red-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  Firearms: 70.6 percent
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  Drugs: 43 percent
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  DUI: 25 percent
                </div>
              </li>
            </ul>
          </div>

          <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/>
              </svg>
              <p className="text-red-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Ethan's group = lowest risk. Dante's group = highest. But only Ethan is branded."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 5: The Human Toll */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🏚️</span>
            The Human Toll
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            💡 Public shaming erodes stability.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Marshall Project</strong>: "Public shaming as punishment is corrosive" (<a href="https://www.themarshallproject.org/2015/03/31/public-shamings" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Marshall Project</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Miami Herald</strong>: residency laws forced registrants into tent cities, later bulldozed.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Research</strong>: families endure shame, harassment, and isolation (<a href="https://www.researchgate.net/publication/323778732_Ashamed_and_Alone_Comparing_Offender_and_Family_Member_Experiences_With_the_Sex_Offender_Registry" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">ResearchGate</a>).
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6: Do Registries Make Us Safer? */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">❓</span>
            Do Registries Make Us Safer?
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            🟦 Studies say no.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>New York</strong>: no reduction in sex crimes (<a href="https://journals.sagepub.com/doi/10.1177/0011128707311641" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Sandler et al. 2008</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>New Jersey</strong>: no measurable benefit (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/225370.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Zgoba et al. 2009</a>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>DOJ</strong>: destabilization may <em>increase</em> risk (<a href="https://nij.ojp.gov/library/publications/effects-sex-offender-registration-and-notification-crime-empirical-evaluation" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NIJ</a>).
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7: RECON */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            RECON: Register Every Convict or None
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If the registry is about safety, Dante should be listed.<br />
            If it's not, why Ethan?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            That's <strong>RECON</strong>: Register Every Convict—or None.
          </p>
        </section>

        {/* Section 8: SOLAR Mission */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🌞</span>
            SOLAR: Our Mission, Our Commitment, Our Vision
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">1</span>
                </div>
                <div>
                  <strong>Our Mission</strong>: Supporting, Organizing, Leading, Advancing, Reforming justice policy.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">2</span>
                </div>
                <div>
                  <strong>Our Commitment</strong>: Sex Offense Learning, Advocacy & Resources—equipping individuals, families, and allies.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">3</span>
                </div>
                <div>
                  <strong>Our Vision</strong>: Safety, Opportunity, Liberty, Accountability, Redemption.
                </div>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">SOLAR Vision</h3>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">🔒 Safety</h4>
              <p className="text-blue-800">
                Same-type recidivism for sex offenses is low compared with firearms, property, drugs, and DUIs. Focus on <em>actual risk</em>, not stigma (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS</a>, <a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">USSC</a>, <a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NHTSA</a>).
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">💼 Opportunity</h4>
              <p className="text-green-800">
                Registrants face barriers—housing bans, passport marks, mandatory reporting—that higher-risk groups don't. This undermines desistance (<a href="https://www.miamiherald.com/news/local/crime/article237545129.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Miami Herald</a>).
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-3">🗽 Liberty</h4>
              <p className="text-purple-800">
                Courts flagged overreach in <em>Packingham v. North Carolina</em> (2017), <em>Does v. Snyder</em> (2016), <em>In re Taylor</em> (2015) (<a href="https://supreme.justia.com/cases/federal/us/582/98/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Supreme Court</a>). Narrow, constitutional rules are needed.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-3">⚖️ Accountability</h4>
              <p className="text-yellow-800">
                Apply evidence-based supervision (treatment, targeted conditions) <em>and</em> hold institutions and hierarchies accountable for systemic abuses (<a href="https://nij.ojp.gov/library/publications/effects-sex-offender-registration-and-notification-crime-empirical-evaluation" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NIJ</a>).
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-900 mb-3">🌱 Redemption</h4>
              <p className="text-emerald-800">
                Stable housing, jobs, and family ties lower risk. Restrictions that destabilize lives raise it. People can change, and redemption must remain possible (<a href="https://www.themarshallproject.org/2015/03/31/public-shamings" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Marshall Project</a>, <a href="https://www.researchgate.net/publication/323778732_Ashamed_and_Alone_Comparing_Offender_and_Family_Member_Experiences_With_the_Sex_Offender_Registry" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">ResearchGate</a>).
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: The Final Word */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🎯</span>
            The Final Word
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Two men, both 36, stepped into freedom today.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dante: violent, repeat offender, no registry, free to start over.<br />
            Ethan: one catastrophic crime, low risk, branded for life.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This isn't justice.<br />
            It isn't safety.<br />
            It isn't rational.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If safety is real, register Dante too.<br />
            If it's not, why Ethan?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The choice is clear: <strong>Register Every Convict—or None.</strong>
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
              </svg>
              <div className="text-blue-900 text-lg leading-relaxed">
                <p className="mb-4">
                  It's time to choose evidence over fear.<br />
                  Fairness over headlines.<br />
                  Humanity over hysteria.
                </p>
                <p className="font-semibold">
                  It's time to choose SOLAR.
                </p>
              </div>
            </div>
          </blockquote>
        </section>

        {/* Sources Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sources (Verified)</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Recidivism Data</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">USSC - Federal Firearms Offender Recidivism</a></li>
                <li><a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">BJS - Recidivism of Prisoners Released in 34 States</a></li>
                <li><a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">NHTSA - Impaired Driving Statistics</a></li>
                <li><a href="https://www.ussc.gov/research/research-reports/recidivism-federal-child-pornography-non-production-offenders" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">USSC - Federal Child Pornography Non-Production Offenders</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Registry Research & Legal</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://journals.sagepub.com/doi/10.1177/0011128707311641" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Sandler et al. - New York Registry Study (2008)</a></li>
                <li><a href="https://www.ncjrs.gov/pdffiles1/nij/grants/225370.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Zgoba et al. - New Jersey Registry Study (2009)</a></li>
                <li><a href="https://nij.ojp.gov/library/publications/effects-sex-offender-registration-and-notification-crime-empirical-evaluation" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">NIJ - Effects of Sex Offender Registration</a></li>
                <li><a href="https://supreme.justia.com/cases/federal/us/582/98/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Supreme Court - Packingham v. North Carolina</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-blue-800 mb-2">Housing & Social Impact</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.miamiherald.com/news/local/crime/article237545129.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Miami Herald - Sex Offender Homelessness (2019)</a></li>
                <li><a href="https://www.miamiherald.com/news/local/community/miami-dade/article168569977.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Miami Herald - Registry Housing Crisis (2017)</a></li>
                <li><a href="https://www.themarshallproject.org/2015/03/31/public-shamings" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Marshall Project - Public Shaming as Punishment</a></li>
                <li><a href="https://www.researchgate.net/publication/323778732_Ashamed_and_Alone_Comparing_Offender_and_Family_Member_Experiences_With_the_Sex_Offender_Registry" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">ResearchGate - Family Impact Study</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-blue-800 mb-2">Legal Framework</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.ecfr.gov/current/title-28/part-72" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">SORNA Regulations - 28 CFR Part 72</a></li>
                <li><a href="https://travel.state.gov/content/travel/en/passports/legal-matters/SORNA.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">State Department - International Megan's Law</a></li>
                <li><a href="https://www.govinfo.gov/content/pkg/USCODE-2010-title42/pdf/USCODE-2010-title42-chap135-sec13663.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">42 U.S.C. §13663 - Public Housing Exclusions</a></li>
                <li><a href="https://www.uscourts.gov/services-forms/probation-and-pretrial-services/supervision/special-conditions" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">U.S. Courts - Special Conditions of Supervision</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Share and Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/blog" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              ← Back to All Posts
            </Link>
            <div className="flex space-x-4">
              <Link 
                to="/resources" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                View Resources
              </Link>
              <Link 
                to="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
