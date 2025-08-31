    import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function TheEnforcers(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Enforcers — When Police, Judges, Prosecutors, and Probation Officers Commit the Crimes They Police | The SOLAR Project"
        description="Long-form investigative exposé: when the people who police, prosecute, judge, and supervise commit sexual abuse — and why public sex-offender registries don't touch the problem. Verified sources, embedded links, and SOLAR's roadmap for real safety."
        keywords="police sexual abuse, Daniel Holtzclaw, FCI Dublin, Ray Garcia, Gary Zerola, Adam Foss, Samuel Kent, Scott Gallina, probation officer abuse, custodial sexual abuse, prison rape, judicial misconduct"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-slate-200 hover:text-white transition-colors group">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Blog
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Investigative Series · Part 2
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The Enforcers — When Police, Judges, Prosecutors, and Probation Officers Commit the Crimes They Police
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-4xl">
            Who do you call when the badge is the predator? When the robe hides abuse? When the person who controls your freedom says you'll lose it unless you comply? These aren't hypotheticals. They're case files — and they reveal why the public sex-offender registry doesn't touch the real risk.
          </p>
          
          <div className="text-sm text-slate-300">
            <span>By SOLAR</span>
            <span className="mx-2">•</span>
            <span>August 26, 2025</span>
            <span className="mx-2">•</span>
            <span>Long-form investigative exposé with verified sources</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Police: badges as hunting licenses</h2>
          <p className="text-lg text-slate-700 mb-4">
            On December 10, 2015, the jury foreman in an Oklahoma City courtroom read a drumbeat of guilty verdicts. Former officer <strong>Daniel Holtzclaw</strong> collapsed in tears at the defense table as count after count was announced — sexual battery, forcible oral sodomy, rape. His victims were not the strangers we're taught to fear at playgrounds. They were Black women from marginalized neighborhoods, many with prior records he used as leverage. He picked them because he believed no one would believe them.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            Holtzclaw's method was the inversion of public safety: traffic stops as gateways to coercion; warrants and probation statuses as bargaining chips; a patrol car as a moving interrogation room with no camera rolling. Survivors told the court they felt they had no choice. "He had the power to ruin my life with one arrest," one woman said. "He told me to do what he wanted, or he would." A jury convicted him on 18 counts; he received a 263-year sentence.
          </p>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🚓</div>
              <div className="text-rose-800">
                <strong>Callout:</strong> The registry map won't warn you about the officer who pulls you over. But that's where danger so often lives. Our <Link to="/resources/know-your-rights" className="text-rose-600 hover:text-rose-800 underline font-semibold">Know Your Rights guide</Link> explains what to do when authority is abused.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            The conviction was widely covered by the <a href="https://apnews.com/article/oklahoma-city-rape-daniel-holtzclaw-0cb3732b42f94d0b8179064f21db0f2f" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Daniel Holtzclaw sentencing</a>. It was not a one-off. A 2024 <a href="https://www.washingtonpost.com/investigations/interactive/2024/police-officers-child-sexual-abuse-in-america/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post — Police child abuse investigation</a> found that over 1,800 police officers were charged with child sexual abuse between 2005 and 2022. For readers without a subscription, see <a href="https://www.reuters.com/world/us/fbi-failed-investigate-all-child-sexual-assault-allegations-senate-report-says-2024-08-29/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Reuters — FBI mishandling child abuse cases</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Corrections: when custody becomes cover</h2>
          <p className="text-lg text-slate-700 mb-4">
            Inside a federal women's prison in Dublin, California, staff had a grotesque nickname for what was happening: the <strong>"rape club."</strong> Multiple officers — including the warden — were accused or convicted of exploiting incarcerated women for sex under threat of punishment. Former warden <strong>Ray J. Garcia</strong> was ultimately convicted of sexually abusing women in custody and sentenced to more than five years in prison.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            The story didn't end with one man. Survivors sued. The <abbr title="Bureau of Prisons">BOP</abbr> shuttered the facility. The Department of Justice agreed to pay more than <strong>$100 million</strong> to settle claims. Congressional investigators documented systemic failures, from PREA (Prison Rape Elimination Act) box-checking to a culture of retaliation against women who spoke up.
          </p>
          
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🏚️</div>
              <div className="text-amber-800">
                <strong>Callout:</strong> This wasn't a bad apple. It was a rotten orchard — where PREA existed on paper and abuse thrived in practice. Our analysis of <Link to="/blog/institutional-failures" className="text-amber-600 hover:text-amber-800 underline font-semibold">institutional failures</Link> shows how systems protect themselves, not victims.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            Read the <a href="https://www.justice.gov/archives/opa/pr/former-federal-prison-warden-sentenced-sexual-abuse-three-female-inmates" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Warden sentenced for abuse</a> sentencing release for Garcia, national coverage by <a href="https://apnews.com/article/prisons-california-sexual-abuse-us-federal-bureau-of-investigation-93a168903fbeaed61f72fb9088e02dd4" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Sexual abuse in federal prison (Dublin)</a>, and Congress's bipartisan <a href="https://www.hsgac.senate.gov/subcommittees/investigations/library/files/majority-and-minority-staff-report_-sexual-abuse-of-female-inmates-in-federal-prisons/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Senate report — Abuse of female inmates</a>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Prosecutors: choosing cases by day, committing crimes by night</h2>
          <p className="text-lg text-slate-700 mb-4">
            Prosecutors decide which cases move and which die; which survivors get believed and which defendants get second chances. So what happens when the prosecutor is the predator?
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In 2024, former Boston prosecutor <strong>Gary Zerola</strong> — once profiled as a "most eligible bachelor" — was convicted of rape and sentenced to up to ten years. The case turned on testimony that he exploited trust and access to commit the assault; the court believed her, not his brand. (<a href="https://apnews.com/article/boston-lawyer-rape-sentence-gary-zerola-0cbb9fbd95b697c9c7cc94360ae001a6" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Gary Zerola sentencing</a>)
          </p>
          <p className="text-lg text-slate-700 mb-6">
            In New York, <strong>Adam Foss</strong>, a nationally feted reform advocate and former ADA, was indicted for first-degree rape in 2023 after a woman alleged he assaulted her while she slept. He has pled not guilty and the case is pending, but the indictment itself — from a DA's office that knows the evidentiary bar — should end the fantasy that charisma and a TED Talk immunize anyone from hard scrutiny. (<a href="https://manhattanda.org/d-a-bragg-announces-indictment-of-prosecutor-impact-founder-adam-foss-for-raping-a-woman-while-she-slept/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Manhattan DA — Adam Foss indictment</a>)
          </p>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚖️</div>
              <div className="text-rose-800">
                <strong>Callout:</strong> If prosecutors can decide your fate, who prosecutes them when they cross the line? Answer: the same system — if it's forced to. Our <Link to="/blog/federal-sex-crime-process" className="text-rose-600 hover:text-rose-800 underline font-semibold">federal process guide</Link> shows how these cases typically unfold when they don't involve powerful defendants.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Judges: the robe as camouflage</h2>
          <p className="text-lg text-slate-700 mb-4">
            Judges hold the state's ultimate power over liberty. Their oath begins with the words "impartial justice." But the robe can also conceal.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            In Texas, federal judge <strong>Samuel B. Kent</strong> sexually abused court employees for years. When the heat rose, he pled guilty to felony obstruction tied to that abuse and drew a 33-month sentence. (<a href="https://web.archive.org/web/20101206071701/https://www.justice.gov/opa/pr/2009/June/09-crm-566.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ Archive — Judge Samuel Kent</a>)
          </p>
          <p className="text-lg text-slate-700 mb-6">
            In Washington State, <strong>Scott Gallina</strong>, a presiding state judge, pleaded guilty to assault with sexual motivation after multiple women in the courthouse reported harassment and abuse linked to his office. The state attorney general's summary reads less like a personnel matter and more like a cautionary parable about unchecked power. (<a href="https://www.atg.wa.gov/news/news-releases/former-asotin-county-judge-scott-gallina-pleads-guilty-assault-sexual-motivation" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">WA AG — Judge Scott Gallina guilty plea</a>)
          </p>
          
          <div className="bg-cyan-50 border border-cyan-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚖️</div>
              <div className="text-cyan-800">
                <strong>Callout:</strong> The courtroom built for justice became a workplace where coercion hid behind authority. This pattern of institutional protection is exactly what our <Link to="/blog/politics-and-hypocrisy" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">political hypocrisy analysis</Link> reveals about power protecting itself.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Probation & parole: freedom as leverage</h2>
          <p className="text-lg text-slate-700 mb-6">
            If prison is hard power, community supervision is soft power — and therefore easier to abuse. A signature keeps you free; a violation sends you back. In case after case, officers turned that leverage into currency for sex.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm mr-4 flex-shrink-0">KY</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Kentucky</h4>
                  <p className="text-slate-700 text-sm">A probation and parole officer was sentenced in 2024 for sexually abusing women under supervision and covering it up. (<a href="https://www.justice.gov/archives/opa/pr/former-kentucky-probation-and-parole-officer-sentenced-sexually-abusing-women-under-his" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Kentucky probation officer sentenced</a>)</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm mr-4 flex-shrink-0">OK</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Oklahoma</h4>
                  <p className="text-slate-700 text-sm">A probation officer pled guilty to federal civil-rights charges for sexually assaulting women on his caseload. (<a href="https://www.justice.gov/archives/opa/pr/former-oklahoma-probation-officer-pleads-guilty-sexual-assault" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Oklahoma probation officer plea</a>)</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-4 flex-shrink-0">NC</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">North Carolina</h4>
                  <p className="text-slate-700 text-sm">An officer was sentenced for coercing a probationer into sex acts under threat of revocation. (<a href="https://www.fbi.gov/charlotte/press-releases/2013/former-north-carolina-probation-officer-sentenced-for-coercing-probationer-into-sexual-acts" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FBI — NC probation officer sentencing</a>)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🖊️</div>
              <div className="text-amber-800">
                <strong>Callout:</strong> When your freedom hinges on someone else's pen, coercion becomes an easy bargain. This is why our <Link to="/resources/family-support-guide" className="text-amber-600 hover:text-amber-800 underline font-semibold">family support resources</Link> include guidance on recognizing and reporting supervision abuse.
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why the registry misses it all</h2>
          <p className="text-lg text-slate-700 mb-4">
            America's registry system was designed for addresses and ZIP codes, not for <em>authority</em>. It maps where people with past convictions sleep; it doesn't map where power is abused. That's why the most harrowing cases keep erupting inside institutions with badges, keys, and letterhead — beyond the reach of any "offender search" widget.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            Federal data make plain what survivors have been saying for years. In the Bureau of Justice Statistics' survey of sexual victimization in prisons and jails, <strong>staff sexual misconduct accounts for a significant share of abuse</strong>. That's not a stranger in a park. That's the system victimizing the people it controls. (<a href="https://bjs.ojp.gov/content/pub/pdf/svpjri1112.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS — Prison/jail victimization report</a>)
          </p>
          <p className="text-lg text-slate-700 mb-4">
            Zoom out to families and communities: for children, the risk overwhelmingly comes from people they know — not unknown neighbors. RAINN's synthesis of national data shows that <strong>most child victims know their abuser</strong>. (<a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">RAINN — Youth abuse statistics</a>)
          </p>
          
          <div className="bg-cyan-50 border border-cyan-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🧭</div>
              <div className="text-cyan-800">
                <strong>Thesis:</strong> Registries are address maps for yesterday's crimes. The real risk lives in today's <em>power relationships</em>. Our <Link to="/blog/high-profile-cases-stranger-danger" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">high-profile cases analysis</Link> shows this pattern across institutions.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The myth machine vs. the evidence</h2>
          <p className="text-lg text-slate-700 mb-4">
            Public policy borrowed a line from an old Supreme Court opinion: that sex-offense recidivism is "frightening and high." The line wasn't born of rigorous science, and current federal data contradicts it. In a nine-year follow-up study, the Bureau of Justice Statistics found that <strong>7.7%</strong> of people released after serving time for rape or sexual assault were rearrested for a new sex offense — meaning <strong>over 92%</strong> were not. (<a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS — 9-year sex-offender recidivism</a>)
          </p>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-8 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">92.3%</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Did NOT reoffend</div>
              <div className="text-sm text-slate-600">9-year follow-up study of people released after sex offense convictions</div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700 mb-6">
            Meanwhile, the best empirical work suggests we're investing in the wrong lever. Police-facing registration (for investigative use) can help; broad public notification can <em>backfire</em> by destabilizing housing and work and pushing people underground. See the economic analysis by Prescott & Rockoff and state-level evaluations that found no reduction in sexual reoffending under blanket notification regimes. (<a href="https://www.journals.uchicago.edu/doi/pdf/10.1086/658485" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Prescott & Rockoff, 2011 (PDF)</a>; <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NIJ — SORN effectiveness</a>; <a href="https://journals.sagepub.com/doi/10.1177/0887403409353148" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Letourneau et al. (2010)</a>)
          </p>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🛑</div>
              <div className="text-rose-800">
                <strong>Callout:</strong> Policy built on myths becomes policy that fails — and sometimes makes things worse. Our <Link to="/advocacy" className="text-rose-600 hover:text-rose-800 underline font-semibold">advocacy work</Link> focuses on evidence-based reforms instead.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What SOLAR wants policymakers to do</h2>
          
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Build safeguards where power meets vulnerability</h4>
                  <p className="text-slate-700">Independent reporting channels outside the chain of command; unannounced audits; whistleblower protections with teeth; automatic outside referral when allegations target officials.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Right-size the registry</h4>
                  <p className="text-slate-700">Keep robust law-enforcement access; end one-size-fits-all public shaming that doesn't reduce harm; use individualized risk and conduct-based restrictions (e.g., grooming behaviors, unsupervised access to minors).</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Fund survivor services and prevention</h4>
                  <p className="text-slate-700">Crisis hotlines, trauma-informed care, youth education, and proactive compliance checks where kids actually are (schools, programs, teams, faith communities).</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-sm mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Treat custodial sexual abuse as a constitutional crime</h4>
                  <p className="text-slate-700">Prioritize civil-rights prosecutions when officials exploit authority; penalize retaliation and cover-ups.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm mr-4 flex-shrink-0">5</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Legislate from current evidence, not old slogans</h4>
                  <p className="text-slate-700">Retire the "frightening and high" trope; adopt metrics that measure <em>prevention</em>, not press releases.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 mt-8">
            <div className="flex items-start">
              <div className="text-2xl mr-4">✅</div>
              <div className="text-emerald-800">
                <strong>Bottom line:</strong> Real safety means dismantling shields of authority, not mapping strangers. Contact your representatives and demand accountability systems that actually work. Our <Link to="/contact" className="text-emerald-600 hover:text-emerald-800 underline font-semibold">advocacy toolkit</Link> can help you make your voice heard.
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Selected sources (verified)</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://apnews.com/article/oklahoma-city-rape-daniel-holtzclaw-0cb3732b42f94d0b8179064f21db0f2f" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Daniel Holtzclaw sentencing</a></li>
            <li>• <a href="https://www.washingtonpost.com/investigations/interactive/2024/police-officers-child-sexual-abuse-in-america/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post — Police child abuse investigation</a> · <a href="https://www.reuters.com/world/us/fbi-failed-investigate-all-child-sexual-assault-allegations-senate-report-says-2024-08-29/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Reuters — FBI mishandling child abuse cases</a></li>
            <li>• <a href="https://www.justice.gov/archives/opa/pr/former-federal-prison-warden-sentenced-sexual-abuse-three-female-inmates" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Warden sentenced for abuse</a> · <a href="https://apnews.com/article/prisons-california-sexual-abuse-us-federal-bureau-of-investigation-93a168903fbeaed61f72fb9088e02dd4" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Sexual abuse in federal prison (Dublin)</a> · <a href="https://www.hsgac.senate.gov/subcommittees/investigations/library/files/majority-and-minority-staff-report_-sexual-abuse-of-female-inmates-in-federal-prisons/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Senate report — Abuse of female inmates</a></li>
            <li>• <a href="https://apnews.com/article/boston-lawyer-rape-sentence-gary-zerola-0cbb9fbd95b697c9c7cc94360ae001a6" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP — Gary Zerola sentencing</a> · <a href="https://manhattanda.org/d-a-bragg-announces-indictment-of-prosecutor-impact-founder-adam-foss-for-raping-a-woman-while-she-slept/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Manhattan DA — Adam Foss indictment</a></li>
            <li>• <a href="https://web.archive.org/web/20101206071701/https://www.justice.gov/opa/pr/2009/June/09-crm-566.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ Archive — Judge Samuel Kent</a> · <a href="https://www.atg.wa.gov/news/news-releases/former-asotin-county-judge-scott-gallina-pleads-guilty-assault-sexual-motivation" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">WA AG — Judge Scott Gallina guilty plea</a></li>
            <li>• <a href="https://www.justice.gov/archives/opa/pr/former-kentucky-probation-and-parole-officer-sentenced-sexually-abusing-women-under-his" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Kentucky probation officer sentenced</a> · <a href="https://www.justice.gov/archives/opa/pr/former-oklahoma-probation-officer-pleads-guilty-sexual-assault" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">DOJ — Oklahoma probation officer plea</a> · <a href="https://www.fbi.gov/charlotte/press-releases/2013/former-north-carolina-probation-officer-sentenced-for-coercing-probationer-into-sexual-acts" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">FBI — NC probation officer sentencing</a></li>
            <li>• <a href="https://bjs.ojp.gov/content/pub/pdf/svpjri1112.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS — Prison/jail victimization report</a> · <a href="https://www.rainn.org/statistics/children-and-teens" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">RAINN — Youth abuse statistics</a></li>
            <li>• <a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">BJS — 9-year sex-offender recidivism</a> · <a href="https://www.journals.uchicago.edu/doi/pdf/10.1086/658485" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Prescott & Rockoff, 2011 (PDF)</a> · <a href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies-0" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NIJ — SORN effectiveness</a> · <a href="https://journals.sagepub.com/doi/10.1177/0887403409353148" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Letourneau et al. (2010)</a></li>
          </ul>
        </div>

      </article>
    </div>
  );
}