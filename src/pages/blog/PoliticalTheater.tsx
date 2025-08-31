                    import SEO from "../../components/SEO";
import { Link } from "react-router-dom";

function PoliticalTheater() {
  return (
    <div className="bg-white">
      <SEO 
        title="Political Theater With Dead Kids in the Wings: Why We Chose the Wrong Crime to Register - The SOLAR Project"
        description="A hard-hitting, evidence-backed examination of why public sex-offender registries are safety theater while real, repeat harms go untracked."
        keywords="sex offender registry, recidivism rates, public safety policy, criminal justice reform, evidence-based policy, registry effectiveness"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
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
            <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Investigation
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Political Theater With Dead Kids in the Wings: Why We Chose the Wrong Crime to Register
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            A hard-hitting examination of how the United States built a massive public registry for the group least likely to reoffend, while higher-harm, higher-recurrence dangers remain untracked — and why that mismatch costs lives.
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              August 25, 2025
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Evidence-Based Research", "Policy Analysis", "Recidivism Data", "Public Safety", "Criminal Justice Reform", "Registry Effectiveness"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The United States stands alone among Western democracies in publicly broadcasting the residential addresses of formerly convicted individuals—specifically those convicted of sex crimes. While countries like the UK and Canada do maintain registries, public access is tightly restricted and disclosure is targeted, based on risk and necessity (see the UK Supreme Court's requirement for review of indefinite registration: <a href="https://www.supremecourt.uk/cases/docs/uksc-2009-0182-judgment.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">R (F) v Secretary of State for the Home Department</a>).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Here, by contrast, public registries were woven into law starting with the <strong>Jacob Wetterling Act (1994)</strong>, expanded with <strong>Megan's Law (1996)</strong>, and standardized by the <strong>Adam Walsh Act (2006)</strong>.
          </p>

          {/* Pull-Quote 1: Thesis */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9.75h.01M12 12v4.5m8.25-4.5a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0Z"/>
              </svg>
              <p className="text-blue-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "If we were going to register only one class of crime, we chose the wrong one."
                </span>
              </p>
            </div>
          </blockquote>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎭</span>
              Act One: The Registry We Built
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The message is simple: sex offenders are uniquely dangerous, and you need constant protection from them. The truth is harder: <strong>if we were going to pick only one crime category for a permanent public registry, we picked the wrong one.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📊</span>
              Act Two: The Data Doesn't Lie
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The registry system rests on the claim that people convicted of sexual offenses are highly likely to reoffend. Without that premise, the logic collapses. Yet the premise is false. According to the <a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">U.S. Bureau of Justice Statistics (PDF)</a>, <strong>7.7%</strong> of individuals released for sex offenses were arrested for another sex offense within nine years (about <strong>4.4%</strong> within three years).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By comparison, the BJS's multi-state release cohorts show significantly higher "same-type" repeat offending for other categories: property (~<strong>54%</strong>), drug (~<strong>51%</strong>), and violent (~<strong>33%</strong>) within five years (<a href="https://bjs.ojp.gov/content/pub/pdf/rprts05p0510.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS, 30 States study (PDF)</a>).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>If a registry's purpose is to monitor those most likely to repeat their crime, sex offenses are near the bottom of the list.</strong>
            </p>
          </section>

          {/* Pull-Quote 2: Recidivism */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3.75 20.25h16.5M6 18V9.75M12 18V6.75M18 18v-5.25"/>
              </svg>
              <p className="text-blue-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Sex-offense same-type recidivism stays in the single digits, yet we built the biggest public registry for the group least likely to repeat."
                </span>
              </p>
            </div>
          </blockquote>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Act Three: The Illusion of Safety
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Even if reoffense risk were higher, registries would still fail because they don't capture most future offenders. A New York statewide time-series analysis found <strong>over 95%</strong> of arrests for sexual offenses involved <strong>first-time offenders</strong>—people with no prior sex-crime conviction, and thus not on the registry (<a href="https://doi.org/10.1080/07418820801913913" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Sandler, Freeman & Socia, 2008</a>).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>The map you check is not a predictive tool—it shows yesterday's offenders, not tomorrow's risk.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For children, the mismatch is even starker. Federal victimization data consistently show that <strong>most child victims know the perpetrator</strong>—<em>not</em> a stranger on a map. The non-profit RAINN, drawing on federal data, summarizes it clearly: <strong>93%</strong> of child victims knew their abuser (59% acquaintance, 34% family), only 7% were strangers (<a href="https://rainn.org/statistics/children-and-teens" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">RAINN: Children & Teens</a>). The registry, designed around the stranger-danger narrative, offers false comfort while missing the real risk patterns.
            </p>
          </section>

          {/* Pull-Quote 3: Map isn't predictive */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
              </svg>
              <p className="text-blue-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "More than 95% of new sex-crime arrests are people not on the registry; the map shows yesterday's offenders, not tomorrow's risk."
                </span>
              </p>
            </div>
          </blockquote>

          {/* Pull-Quote 4: Comfort blanket */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-yellow-200 bg-yellow-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-yellow-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0m8.25-6v-1.5a6 6 0 1 0-12 0v1.5A2.25 2.25 0 0 1 3.75 15v.75h16.5V15a2.25 2.25 0 0 1-2.25-2.25Z"/>
              </svg>
              <p className="text-yellow-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Public registries are not safety tools; they are comfort blankets."
                </span>
              </p>
            </div>
          </blockquote>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔬</span>
              Act Four: What the Evidence Shows
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ultimate test of policy is whether it reduces harm. The most rigorous synthesis to date—the <a href="https://onlinelibrary.wiley.com/doi/10.4073/csr.2021.2" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Campbell Systematic Review (2021)</a>—found <strong>no statistically significant reduction</strong> in sexual recidivism from registration and public-notification policies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In New Jersey, a comprehensive evaluation of Megan's Law reported <strong>no discernible effect</strong> on recidivism but documented substantial costs to counties each year (millions in annual expenditures, plus significant startup costs) (<a href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NIJ: Megan's Law, 10 Years Later</a>).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Several studies also indicate that while <em>police-only</em> registration may assist monitoring, broad <em>public</em> notification can <strong>increase</strong> reoffending by destabilizing housing, employment, and social supports (<a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NIJ evidence brief</a>).
            </p>
          </section>

          {/* Pull-Quote 5: Opportunity cost */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-yellow-200 bg-yellow-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-yellow-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 4.5h6M9.75 3h4.5a1.5 1.5 0 0 1 1.5 1.5v.75h.75A2.25 2.25 0 0 1 18.75 7v10.5A2.25 2.25 0 0 1 16.5 19.5h-9A2.25 2.25 0 0 1 5.25 17.5V7A2.25 2.25 0 0 1 7.5 5.25h.75V4.5A1.5 1.5 0 0 1 9.75 3Z"/>
              </svg>
              <p className="text-yellow-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Every dollar spent maintaining maps and mailers is a dollar not spent on interventions that actually save lives."
                </span>
              </p>
            </div>
          </blockquote>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💔</span>
              Act Five: The Collateral Harm
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registries do not exist in a vacuum—they produce collateral harms that ripple across families and communities. Residency-restriction "buffer zones" (1,000–2,500 feet from schools/parks) consistently fail to reduce crime while increasing homelessness and transience, which undermines supervision and stability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              State expert bodies, including the Colorado Sex Offender Management Board, have warned that residence restrictions <em>do not</em> lower risk and can push people into circumstances that <em>raise</em> it (<a href="https://dcj.colorado.gov/boards-commissions/somb" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Colorado SOMB</a> – research summaries).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Families of registrants—especially children—face stigma, eviction, bullying, and isolation despite having done nothing wrong.</strong> Law enforcement, for its part, spends substantial time on address verification, map maintenance, and compliance checks—time that could be reallocated to interventions with proven safety impact.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">⚠️</span>
              Act Six: The Real Dangers We Ignore
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Drunk Driving</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2023, alcohol-impaired driving accounted for roughly <strong>30%</strong> of U.S. traffic deaths, with fatalities in the tens of thousands (<a href="https://www.nhtsa.gov/risky-driving/drunk-driving" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NHTSA: Drunk Driving</a>). Repeat offending is common—estimates often place <strong>one-quarter to one-third</strong> of DWI offenders as repeaters.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We have a proven tool that dramatically reduces repeat offending while installed: <a href="https://www.cdc.gov/impaired-driving/ignition-interlock/index.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">ignition interlocks</a>, which the CDC and the Community Guide report <strong>reduce re-arrests by ~67–70%</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gun Violence</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Firearms are now the <strong>leading cause of death</strong> for U.S. children and teens, surpassing motor-vehicle injuries, according to the CDC's most recent summaries (<a href="https://www.cdc.gov/violenceprevention/firearms/fastfact.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CDC Firearm Fast Facts</a>). Yet there is no national public registry of violent firearm offenders. Instead, we continue to fund and expand a registry focused on those least likely to repeat their specific crime.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🌍</span>
              Act Seven: International Comparison
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Globally, the U.S. approach is an outlier. Peer democracies typically keep registries <strong>law-enforcement-only</strong>, with tightly controlled, case-specific disclosures. The UK model incorporates <strong>periodic review</strong> for indefinite registration, consistent with human-rights proportionality. The contrast underscores that a broad, permanent, public list is not a prerequisite for public safety.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎭</span>
              Act Eight: Political Theater — Dead Kids in the Wings
            </h2>

            {/* Pull-Quote 6: Theater / Dead kids */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/>
                </svg>
                <p className="text-red-900 text-lg leading-relaxed">
                  <span className="font-semibold">
                    "While the political and 'public safety' theater plays to the crowd, there are dead kids in the wings and balconies."
                  </span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registries provide lawmakers with a visible, media-friendly way to say "we're protecting children." They are simple to explain, dramatic to present, and emotionally satisfying. But as the optics of safety shine on the registry, real crises continue: drunk drivers kill thousands every year, and firearms remain the top killer of American children and teens (<a href="https://www.nhtsa.gov/risky-driving/drunk-driving" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NHTSA</a>; <a href="https://www.cdc.gov/violenceprevention/firearms/fastfact.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CDC</a>).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Meanwhile, the registry consumes attention and resources, impedes rehabilitation, and delivers no population-level safety gain.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💡</span>
              Act Nine: The Better Path
            </h2>

            {/* Pull-Quote 7: Solutions */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2.25 2.25L15 10.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <p className="text-emerald-900 text-lg leading-relaxed">
                  <span className="font-semibold">
                    "If safety is the goal, use risk-based, time-limited supervision—not lifetime public shaming."
                  </span>
                </p>
              </div>
            </blockquote>

            <ul className="list-disc pl-6 space-y-4 mb-6">
              <li className="text-lg text-gray-700">
                <strong>Evidence-based prevention:</strong> Invest in interventions with proven results, such as <a href="https://www.cdc.gov/impaired-driving/ignition-interlock/index.html" className="text-blue-600 hover:text-blue-800 underline transition-colors">ignition interlocks</a> for DWI and focused deterrence strategies for high-risk violence.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Risk-based supervision:</strong> Monitor individuals based on validated risk assessments and behavior—not static labels.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Rehabilitation and reintegration:</strong> Support stable housing, employment, and treatment—factors known to reduce reoffending.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Public honesty:</strong> Acknowledge that public registries do not prevent crime and redirect resources accordingly.
              </li>
            </ul>

            {/* Pull-Quote 8: End the performance */}
            <blockquote className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6 my-8">
              <div className="flex items-start gap-4">
                <svg className="h-7 w-7 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 18.75h6M9.75 21h4.5M12 2.25a7.5 7.5 0 0 0-3.992 13.917c.394.28.742.642.99 1.073l.298.52h4.408l.298-.52c.248-.431.596-.793.99-1.073A7.5 7.5 0 0 0 12 2.25Z"/>
                </svg>
                <p className="text-emerald-900 text-lg leading-relaxed">
                  <span className="font-semibold">
                    "End the performance. Invest in prevention, treatment, and evidence-based policy that actually reduces harm."
                  </span>
                </p>
              </div>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎬</span>
              Curtain Call: Time to End the Show
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If we were going to register only one crime, it should not have been sex offenses. The evidence is overwhelming: public registries target the wrong group, fail to prevent harm, displace real threats, and impose heavy social and financial costs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>It is safety theater—reassuring to watch, ineffective in practice—and while the audience applauds, there are dead kids in the wings and balconies.</strong> It is time to end the performance and invest in policies that save lives.
            </p>
          </section>

          {/* Evidence Summary Box */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-800">Key Evidence Points</h3>
                <div className="mt-2 text-sm text-green-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sex offense recidivism: 7.7% over 9 years (much lower than other crimes)</li>
                    <li>95%+ of new sex crimes committed by first-time offenders (not on registry)</li>
                    <li>No evidence registries reduce recidivism or improve public safety</li>
                    <li>Drunk driving kills 30% more than all sex crimes combined</li>
                    <li>Firearms are leading cause of death for children and teens</li>
                    <li>Evidence-based interventions exist but are underfunded</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sources Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Key Sources</h3>
            <ul className="list-disc pl-5 text-blue-800 space-y-2 text-sm">
              <li><a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" className="hover:text-blue-600 transition-colors">BJS — Recidivism of Sex Offenders Released from State Prison: 2005–2014 (9-year follow-up PDF)</a></li>
              <li><a href="https://bjs.ojp.gov/content/pub/pdf/rprts05p0510.pdf" className="hover:text-blue-600 transition-colors">BJS — Recidivism of Prisoners Released in 30 States in 2005: Patterns 2005–2010 (PDF)</a></li>
              <li><a href="https://doi.org/10.1080/07418820801913913" className="hover:text-blue-600 transition-colors">Sandler, Freeman & Socia (2008) — Does a Watched Pot Boil? Justice Quarterly</a></li>
              <li><a href="https://onlinelibrary.wiley.com/doi/10.4073/csr.2021.2" className="hover:text-blue-600 transition-colors">Campbell Systematic Review (2021) — Effectiveness of SORN Policies</a></li>
              <li><a href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" className="hover:text-blue-600 transition-colors">NIJ — Megan's Law: 10 Years Later (Efficacy & Costs)</a></li>
              <li><a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" className="hover:text-blue-600 transition-colors">NIJ evidence brief</a></li>
              <li><a href="https://www.supremecourt.uk/cases/docs/uksc-2009-0182-judgment.pdf" className="hover:text-blue-600 transition-colors">UK Supreme Court — R (F) v Secretary of State for the Home Department (2010)</a></li>
              <li><a href="https://www.rainn.org/statistics/children-and-teens" className="hover:text-blue-600 transition-colors">RAINN — Children & Teens Statistics</a></li>
              <li><a href="https://dcj.colorado.gov/boards-commissions/somb" className="hover:text-blue-600 transition-colors">Colorado Sex Offender Management Board — Research & Guidance</a></li>
              <li><a href="https://www.nhtsa.gov/risky-driving/drunk-driving" className="hover:text-blue-600 transition-colors">NHTSA — Drunk Driving (Facts & Data)</a></li>
              <li><a href="https://www.cdc.gov/impaired-driving/ignition-interlock/index.html" className="hover:text-blue-600 transition-colors">CDC / Community Guide — Ignition Interlocks Reduce Repeat DWI</a></li>
              <li><a href="https://www.cdc.gov/violenceprevention/firearms/fastfact.html" className="hover:text-blue-600 transition-colors">CDC — Firearm Violence Fast Facts (Children & Teens)</a></li>
            </ul>
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

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Continue Reading</h2>
          <div className="text-center">
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PoliticalTheater;