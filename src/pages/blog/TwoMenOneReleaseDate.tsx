import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

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
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              8 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🚪</span>
            The Prison Gate Opens
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            The steel doors grind shut behind them, and two men step into the bright light of freedom. Both are 36 years old. Both have just finished serving federal prison sentences. Both breathe the same air of release, but their futures could not be more different.
          </p>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <strong>Dante</strong> has lived his adult life in cycles of crime and custody. His record reads like a rap sheet greatest hits: domestic battery, animal cruelty, theft, DUI, an illegal firearms charge, and most recently, a methamphetamine deal with an undercover DEA agent. He earned his GED inside but has never managed to hold steady work.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            <strong>Ethan</strong> was once a rising star in the tech world — a college-educated sales engineer with a promising career. His downfall came one night after heavy drinking when he began chatting online with a 15-year-old girl. He knew her age. In a reckless and shameful lapse of judgment, he asked for and received explicit images. A first-time offender, he pled guilty, served his sentence, and today walks out of prison with Dante.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            Their crimes are different. Their punishments were the same in length. But their lives from this day forward will diverge in ways that defy logic, justice, and data.
          </p>
        </section>

        {/* Section 2: Dante's Clean Slate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🔓</span>
            Dante&apos;s Clean Slate
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Dante&apos;s punishment ends at the prison gate. He walks out free of registry obligations, free of public shaming, free of permanent surveillance. He can apply for housing, live next to a school, cross state lines, or buy a plane ticket without notifying anyone. His employers, neighbors, and community may never know about his violent and destructive past.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            And yet Dante&apos;s risk of reoffending is alarmingly high: firearms offenders like his gun case have the highest federal recidivism rates — <strong>70.6 percent rearrested</strong> within eight years (<a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">USSC</a>). Drug traffickers are rearrested for a new drug offense <strong>43 percent</strong> of the time within five years (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">BJS</a>). DUI and DWI offenders reoffend at rates around <strong>25 percent</strong>, and drunk driving still kills more than <strong>10,000 Americans annually</strong> (<a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NHTSA</a>).
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-green-200 bg-green-50 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-green-600 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m5 12 4.5 4.5L19 7.5" />
              </svg>
              <div className="text-gray-800">
                <p className="font-semibold mb-1">What Dante can do today</p>
                <p className="m-0">Rent near schools. Apply for jobs without disclosure. Cross state lines unnoticed. Start over without a public label.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Ethan's Invisible Shackles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⛓️</span>
            Ethan&apos;s Invisible Shackles
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Ethan&apos;s punishment does not end at the prison gate. For him, the sentence lingers for life. His name, photograph, and address are permanently listed on the public <strong>Sex Offender Registry</strong>. With a single online search, his neighbors, coworkers, or potential landlords can pull up his past.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Every detail of his life must now be reported: <strong>in-person check-ins</strong> every year, six months, or three months depending on tier (<a href="https://www.ecfr.gov/current/title-28/part-72" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">SORNA</a>); <strong>three-day deadlines</strong> to report any change in address, phone number, job, or even a brief hotel stay; and <strong>international travel restrictions</strong>, including a 21-day advance notice requirement and a <strong>passport identifier</strong> that brands him abroad (<a href="https://travel.state.gov/content/travel/en/passports/legal-matters/SORNA.html" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">U.S. State Dept.</a>).
          </p>

          <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-5 md:p-6 mb-8">
            <p className="font-semibold mb-2">🟥 Housing bans &amp; cascading instability</p>
            <p className="m-0">
              Lifetime registrants are categorically barred from federally assisted housing (<a href="https://www.govinfo.gov/content/pkg/USCODE-2010-title42/pdf/USCODE-2010-title42-chap135-sec13663.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">42 U.S.C. §13663</a>). Local ordinances in many states add “buffer zones” that force registrants into homelessness or exile. The <strong>Miami Herald</strong> documented these cycles repeatedly — from the Julia Tuttle Causeway shantytown era to later camps near industrial corridors and train tracks — asking bluntly whether harsh laws actually make the public safer (<a href="https://www.miamiherald.com/news/local/crime/article237545129.html" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Miami Herald, 2019</a>; <a href="https://www.miamiherald.com/news/local/community/miami-dade/article168569977.html" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Miami Herald, 2017</a>).
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5 md:p-6">
            <p className="font-semibold mb-2">🟦 Employment, family, and education</p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2">
              <li>
                <strong>Employment barriers:</strong> thousands of statutory licensing bans and background checks close doors (<a href="https://niccc.csgjusticecenter.org/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NICCC</a>).
              </li>
              <li>
                <strong>Family restrictions:</strong> supervised release often bars contact with minors — including one’s own children — without prior approval (<a href="https://www.uscourts.gov/services-forms/probation-and-pretrial-services/supervision/special-conditions" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">U.S. Courts</a>).
              </li>
              <li>
                <strong>Education hurdles:</strong> universities frequently deny housing or enrollment, cutting off opportunities to rebuild (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">HRW</a>).
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: The Numbers Don't Lie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📊</span>
            The Numbers Don&apos;t Lie
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            The contrast is jarring. <strong>Sex offense recidivism</strong>: only <strong>4 percent</strong> rearrested for the same crime within five years (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">BJS</a>). <strong>Federal non-production image offenders</strong>: <strong>4.3 percent</strong> rearrested for a sex offense within three years (<a href="https://www.ussc.gov/research/research-reports/recidivism-federal-child-pornography-non-production-offenders" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">USSC</a>).
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            Compared with <strong>firearms offenders</strong> at <strong>70.6 percent</strong> within eight years (<a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">USSC</a>), <strong>drug traffickers</strong> at <strong>43 percent</strong> same-type recidivism in five years (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">BJS</a>), and <strong>DUI/DWI</strong> offenders with roughly <strong>25 percent</strong> repeat rates (<a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NHTSA</a>), Ethan’s risk is among the lowest in the system while Dante’s is among the highest — yet Ethan is the one branded for life.
          </p>
        </section>

        {/* Section 5: The Human Toll */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🏚️</span>
            The Human Toll
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            This is not just policy — it is lived reality. The <strong>Marshall Project</strong> has shown how public shaming destroys stability, driving registrants into homelessness, joblessness, and isolation: “Public shaming as punishment is corrosive” (<a href="https://www.themarshallproject.org/2015/03/31/public-shamings" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Marshall Project</a>). Families are collateral damage. A comparative study found spouses and children of registrants experience shame, harassment, and social isolation (<a href="https://www.researchgate.net/publication/323778732_Ashamed_and_Alone_Comparing_Offender_and_Family_Member_Experiences_With_the_Sex_Offender_Registry" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Research</a>).
          </p>
        </section>

        {/* Section 6: Do Registries Make Us Safer? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">❓</span>
            Do Registries Make Us Safer?
          </h2>
          
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            The evidence does not support it. A New York study found no reduction in sex crimes after registration and notification laws (<a href="https://journals.sagepub.com/doi/10.1177/0011128707311641" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Sandler et al., 2008</a>). A New Jersey evaluation of Megan’s Law showed no measurable effect on recidivism (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/225370.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Zgoba et al., 2009</a>). A Justice Department meta-analysis concluded that broad notification regimes fail to reduce offending and may increase risk by destabilizing registrants (<a href="https://nij.ojp.gov/library/publications/effects-sex-offender-registration-and-notification-crime-empirical-evaluation" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NIJ</a>).
          </p>

          <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-blue-600 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M12 7v5l3 2" />
              </svg>
              <p className="text-gray-800 m-0">
                Registries are not making communities safer. They are making registrants — and their families — less stable, which research shows increases risk.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: RECON */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            RECON: Register Every Convict or None
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            We understand the instinct: people want to feel safe, and registries give the illusion of control. But if safety is the goal, then why is Dante invisible while Ethan is branded? If registries protect families, Dante should be listed too. His risk is higher, his crimes more violent, his history longer.
          </p>

          <blockquote className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-slate-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 15h.01M8 12h.01M8 9h.01m4 6h4m-4-3h4m-4-3h4" />
              </svg>
              <p className="text-slate-900 text-lg leading-relaxed m-0">
                That is the heart of <strong>RECON: Register Every Convict — or None.</strong> Anything less is hypocrisy.
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 8: SOLAR */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🌞</span>
            SOLAR: Our Mission, Our Commitment, Our Vision
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            SOLAR shines on three axes:
          </p>

          <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-6">
            <li>
              <strong>Our Mission</strong>: <strong>S</strong>upporting, <strong>O</strong>rganizing, <strong>L</strong>eading, <strong>A</strong>dvancing, <strong>R</strong>eforming justice policy.
            </li>
            <li>
              <strong>Our Commitment</strong>: <strong>S</strong>ex <strong>O</strong>ffense <strong>L</strong>earning, <strong>A</strong>dvocacy &amp; <strong>R</strong>esources — equipping individuals, families, and allies with knowledge and tools.
            </li>
            <li>
              <strong>Our Vision</strong>: <strong>S</strong>afety, <strong>O</strong>pportunity, <strong>L</strong>iberty, <strong>A</strong>ccountability, <strong>R</strong>edemption — real values grounded in evidence and dignity.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">SOLAR Vision</h3>

          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-5 md:p-6">
              <p className="font-semibold mb-1">🔒 Safety</p>
              <p className="m-0 text-gray-800">
                Same-type recidivism for sex offenses is low compared with firearm, property, drug, and DUI repeat offending; resources should track actual risk, not stigma (<a href="https://bjs.ojp.gov/library/publications/recidivism-prisoners-released-34-states-2012-2017-0" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">BJS</a>, <a href="https://www.ussc.gov/research/research-reports/recidivism-federal-firearms-offenders" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">USSC</a>, <a href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/812822" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NHTSA</a>).
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-amber-600 bg-amber-50 p-5 md:p-6">
              <p className="font-semibold mb-1">💼 Opportunity</p>
              <p className="m-0 text-gray-800">
                Registrants face structural barriers — housing bans, passport marks, in-person reporting — that do not apply to higher-risk groups, undercutting desistance and community safety (<a href="https://www.govinfo.gov/content/pkg/USCODE-2010-title42/pdf/USCODE-2010-title42-chap135-sec13663.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">42 U.S.C. §13663</a>; see also <a href="https://www.miamiherald.com/news/local/crime/article237545129.html" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Miami Herald, 2019</a> and <a href="https://www.miamiherald.com/news/local/community/miami-dade/article168569977.html" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">2017</a>).
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-indigo-600 bg-indigo-50 p-5 md:p-6">
              <p className="font-semibold mb-1">🗽 Liberty</p>
              <p className="m-0 text-gray-800">
                Courts have already flagged overbreadth. <em>Packingham v. North Carolina</em> (2017), <em>Does v. Snyder</em> (2016), and <em>In re Taylor</em> (2015) show that registries must be narrowly tailored and constitutional (<a href="https://supreme.justia.com/cases/federal/us/582/98/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Supreme Court</a>).
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-slate-600 bg-slate-50 p-5 md:p-6">
              <p className="font-semibold mb-1">⚖️ Accountability</p>
              <p className="m-0 text-gray-800">
                Emphasize compliance with evidence-based conditions like treatment and targeted supervision — while also demanding accountability from institutions and hierarchies that perpetuate systemic harm. True safety requires both (<a href="https://nij.ojp.gov/library/publications/effects-sex-offender-registration-and-notification-crime-empirical-evaluation" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">NIJ</a>).
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-green-700 bg-green-50 p-5 md:p-6">
              <p className="font-semibold mb-1">🌱 Redemption</p>
              <p className="m-0 text-gray-800">
                Stable housing, employment, and family connection are protective; indiscriminate restrictions increase instability and, paradoxically, risk. People can change, and redemption should be possible (<a href="https://www.themarshallproject.org/2015/03/31/public-shamings" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Marshall Project</a>, <a href="https://www.researchgate.net/publication/323778732_Ashamed_and_Alone_Comparing_Offender_and_Family_Member_Experiences_With_the_Sex_Offender_Registry" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener">Research</a>).
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: The Final Word */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🎯</span>
            The Final Word
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Two men, both 36 years old, stepped into freedom today. Dante, with a long history of violence, drugs, guns, and repeat offending, disappears quietly into anonymity. Ethan, with a single catastrophic offense and a much lower likelihood of reoffending, is branded for life.
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            This is not justice. It is not safety. It is not rational policy. If registries are about protection, Dante belongs on one too. If they are not, then why Ethan?
          </p>

          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            That is the choice: <strong>Register Every Convict — or None.</strong>
          </p>

          <p className="text-lg text-gray-800 leading-relaxed">
            And that is SOLAR’s light: to push for a system that values <strong>Safety, Opportunity, Liberty, Accountability, and Redemption</strong> — not fear, stigma, and politics. It is time to choose evidence over fear. Fairness over headlines. Humanity over hysteria. It is time to choose SOLAR.
          </p>
        </section>
      </article>
    </div>
  );
}
