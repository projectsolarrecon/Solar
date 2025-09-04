import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function CommunityBetrayal(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO 
        title="Community Betrayal: When Trusted Youth Groups Failed Families - The SOLAR Project"
        description="From Scouts to YMCA, Boys & Girls Clubs, and Big Brothers Big Sisters, youth groups concealed abuse while registries misled parents into false safety."
        keywords="Boy Scouts sex abuse settlement, Scouting America lawsuits, Kanakuk camp abuse, YMCA camp scandal, Boys & Girls Clubs abuse cases, Big Brothers Big Sisters lawsuits, child sexual abuse in youth organizations, registry myth, institutional cover-up, SOLAR Project"
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
              📰 INVESTIGATIVE SERIES
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Community Betrayal: When Trusted Youth Groups Failed Families
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Parents believed uniforms, slogans, and red-dot registry maps meant safety. But the greatest betrayals happened in Scouts, camps, and clubs trusted to protect children. This investigation exposes how systemic abuse thrived inside America's most iconic youth organizations.
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              September 4, 2025
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* TL;DR Callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <div className="text-2xl mr-4">💡</div>
            <div className="text-blue-800">
              <strong>TL;DR:</strong> While parents checked registry maps for "stranger danger," the largest abuse scandals in American history unfolded inside trusted youth organizations. From Boy Scouts' $2.46 billion settlement to systematic failures at camps, YMCAs, and mentorship programs, the real predators wore uniforms and carried organizational credentials.
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🟥</span>
            The Scouting Catastrophe: A Billion-Dollar Betrayal
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Few scandals rival the collapse of the Boy Scouts of America, now renamed Scouting America. Once a symbol of honor and citizenship, the Scouts faced over 82,000 abuse claims and ultimately agreed to a $2.46 billion settlement — one of the largest in U.S. history (<a href="https://www.reuters.com/legal/government/boy-scouts-organization-defeats-appeals-over-246-bln-sex-abuse-settlement-2025-05-13" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Reuters</a>, <a href="https://en.wikipedia.org/wiki/Boy_Scouts_of_America_sexual_abuse_settlement_(2022)" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Wikipedia</a>).
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Scouts' secret "perversion files" catalogued thousands of abusive leaders, revealing deliberate suppression while recruitment continued. Families sent their children into troop meetings and campouts believing the brand stood for safety. Instead, it became the setting for one of America's worst abuse scandals.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The hypocrisy is staggering: lawmakers expanded registries to track "strangers," while the largest abuse scandal in U.S. history unfolded inside America's most trusted youth program.
          </p>

          {/* Callout Box */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
              </svg>
              <p className="text-red-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "More survivors came forward in Scouting than in some entire state sex-offender registries combined."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🟡</span>
            Camps of Horror: Kanakuk and Beyond
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Summer camps were marketed as havens of innocence and growth. A CBS News investigation identified 578 victims of sexual abuse across U.S. camps over 55 years (<a href="https://www.cbsnews.com/news/hundreds-sexual-abuse-cases-childrens-camps-reported-across-us-cbs-this-morning/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CBS News</a>).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The most notorious case: Kanakuk Kamps in Missouri. Director Pete Newman was convicted of abusing boys, and lawsuits allege leaders knew and concealed abuse, silencing families with NDAs (<a href="https://missouriindependent.com/2025/04/15/new-lawsuit-seeks-to-hold-kanakuk-summer-camp-responsible-for-missouri-staffers-abuse" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Missouri Independent</a>, <a href="https://www.dmagazine.com/publications/d-magazine/2025/march/a-summer-camp-of-horrors/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">D Magazine</a>).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Parents assumed the risk lived elsewhere — but predators thrived inside the cabins and activities they trusted most.
          </p>

          {/* Callout Box */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"/>
              </svg>
              <p className="text-amber-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "Parents packed sleeping bags, not realizing the danger was already zipped inside."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🔵</span>
            YMCA, Boys & Girls Clubs, and the Silent Epidemic
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The YMCA promised "For Youth Development." But in Washington, a man abused at Camp Seymour decades ago won a $7.5 million verdict (<a href="https://www.fox13seattle.com/news/victim-of-summer-camp-sexual-abuse-awarded-7-5m-nearly-50-years-later" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Fox13 Seattle</a>, <a href="https://www.thenewstribune.com/news/local/article286604430.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Tacoma News Tribune</a>). In North Carolina, lawsuits exposed grooming by counselors that leadership ignored (<a href="https://www.newsobserver.com/news/state/north-carolina/article240918196.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">News & Observer</a>).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Boys & Girls Clubs of America suffered systemic abuse across 30+ states, revealed by Hearst Connecticut Media's At Risk project (<a href="https://www.ctinsider.com/news/investigations/at-risk/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CT Insider</a>, <a href="https://www.ctpost.com/news/article/At-risk-Boys-Girls-Clubs-and-sexual-abuse-14295166.php" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CT Post</a>). Their decentralized model left affiliates vulnerable, predators exploited gaps, and survivors were silenced.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            📊 Investigations did what no registry ever could: exposed predators already embedded inside afterschool programs.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            Mentorship Betrayed: Big Brothers Big Sisters
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Big Brothers Big Sisters was supposed to be a lifeline for vulnerable children. Yet lawsuits revealed cases where mentors became predators. In New York, appellate courts questioned whether BBBS failed its duty to screen and supervise volunteers (<a href="https://apnews.com/general-news-38184e452a424c8f868389b424cec2e5" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">AP</a>, <a href="https://www.nycourts.gov/courts/AD2/Handowns/2024/Decisions/D73998.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">NY Courts PDF</a>).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Survivors trusted the brand's promise of protection. Instead, predators exploited weak oversight to harm the very kids the program pledged to protect.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">💰</span>
            The Culture of Concealment
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Across all these cases, a familiar pattern emerges: institutional silence and cover-up.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Scouts hid predators</strong> in secret "perversion files."
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Kanakuk bound survivors</strong> with NDAs to keep them quiet.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>YMCA and BGCA minimized reports</strong> to protect their reputations.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Big Brothers Big Sisters downplayed accountability</strong> when mentors harmed children.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The institutions knew — and chose protection of their brands over protection of children.
          </p>

          {/* Callout Box */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p className="text-amber-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "We broadcast registrants' addresses on maps while survivors were gagged with settlements."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">📉</span>
            Data We Ignore, Lessons We Refuse
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The CDC and RAINN have been clear: the majority of child sexual abuse is committed by family members, acquaintances, or trusted adults in youth-serving institutions — not by strangers lurking in alleys (<a href="https://www.rainn.org/statistics/children-and-teens" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">RAINN</a>, <a href="https://www.cdc.gov/child-abuse-neglect/programs/index.html" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CDC</a>).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yet lawmakers poured billions into registry expansion instead of requiring audits, whistleblower protections, or survivor services for organizations where kids actually spend time.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The result: decades of abuse hidden in plain sight while the public clung to the illusion of safety.
          </p>

          {/* Callout Box */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-cyan-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
              </svg>
              <p className="text-cyan-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "We demanded more red dots on maps, but never demanded audits of youth programs."
                </span>
              </p>
            </div>
          </blockquote>
        </section>

        {/* Section 7 - Conclusion */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-3">🔚</span>
            Conclusion: The Real Danger Zone
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The betrayal is simple: families trusted uniforms, logos, and mottos more than evidence. And politicians sold them a lie.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Registries became the comfort blanket — soothing fears with red dots on maps. But the scandals that rocked Scouting America, Kanakuk, YMCA, Boys & Girls Clubs, and Big Brothers Big Sisters all prove the same truth: the real threats weren't strangers in alleys, they were trusted leaders in cabins, gyms, and afterschool programs.
          </p>

          {/* Final Callout */}
          <blockquote className="relative overflow-hidden rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6 my-8">
            <div className="flex items-start gap-4">
              <svg className="h-7 w-7 shrink-0 text-red-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
              </svg>
              <p className="text-red-900 text-lg leading-relaxed">
                <span className="font-semibold">
                  "The most dangerous places weren't shadowy alleys — they were the safe havens we celebrated."
                </span>
              </p>
            </div>
          </blockquote>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            And here's the hypocrisy:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Billions of dollars spent on registries</strong> — but no funding mandated for independent audits of youth organizations.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Survivors silenced with NDAs and settlements</strong>, while registrants' addresses were blasted online.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <strong>Politicians posing as protectors of children</strong>, while ignoring the institutions where predators thrived for decades.
                </div>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If we are serious about protecting kids, we must stop mistaking surveillance for prevention. Safety comes from audits, whistleblower protections, survivor services, and real accountability — not maps and myths.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The takeaway is unavoidable: we can either keep clinging to registry theater, or build systems that actually protect children. But we cannot pretend they are the same thing.
          </p>
        </section>

        {/* Sources Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sources (Verified)</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Legal/Settlements</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.reuters.com/legal/government/boy-scouts-organization-defeats-appeals-over-246-bln-sex-abuse-settlement-2025-05-13" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Reuters: Boy Scouts $2.46B settlement</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Boy_Scouts_of_America_sexual_abuse_settlement_(2022)" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Wikipedia: BSA Settlement</a></li>
                <li><a href="https://www.fox13seattle.com/news/victim-of-summer-camp-sexual-abuse-awarded-7-5m-nearly-50-years-later" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Fox13 Seattle: YMCA $7.5M verdict</a></li>
                <li><a href="https://www.thenewstribune.com/news/local/article286604430.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Tacoma News Tribune: YMCA abuse case</a></li>
                <li><a href="https://apnews.com/general-news-38184e452a424c8f868389b424cec2e5" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">AP: Big Brothers Big Sisters case</a></li>
                <li><a href="https://www.nycourts.gov/courts/AD2/Handowns/2024/Decisions/D73998.pdf" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">NY Courts: BBBS appellate decision</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Investigations/Journalism</h4>
              <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
                <li><a href="https://www.cbsnews.com/news/hundreds-sexual-abuse-cases-childrens-camps-reported-across-us-cbs-this-morning/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CBS News: 578 victims at U.S. camps</a></li>
                <li><a href="https://missouriindependent.com/2025/04/15/new-lawsuit-seeks-to-hold-kanakuk-summer-camp-responsible-for-missouri-staffers-abuse/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">Missouri Independent: Kanakuk lawsuit</a></li>
                <li><a href="https://www.dmagazine.com/publications/d-magazine/2025/march/a-summer-camp-of-horrors/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">D Magazine: Kanakuk investigation</a></li>
                <li><a href="https://www.newsobserver.com/news/state/north-carolina/article240918196.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">News & Observer: NC YMCA cases</a></li>
                <li><a href="https://www.ctinsider.com/news/investigations/at-risk/" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CT Insider: At Risk investigation</a></li>
                <li><a href="https://www.ctpost.com/news/article/At-risk-Boys-Girls-Clubs-and-sexual-abuse-14295166.php" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CT Post: Boys & Girls Clubs abuse</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium text-blue-800 mb-2">Research & Data</h4>
            <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
              <li><a href="https://www.rainn.org/statistics/children-and-teens" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">RAINN: Children & Teens Statistics</a></li>
              <li><a href="https://www.cdc.gov/child-abuse-neglect/programs/index.html" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener">CDC: Child Abuse & Neglect Prevention</a></li>
            </ul>
          </div>
        </div>

        {/* Series Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">High-Profile Cases & Hidden Realities Series</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/blog/politics-and-hypocrisy" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h4 className="font-medium text-gray-800">Politics & Hypocrisy</h4>
                  <p className="text-sm text-gray-600">When lawmakers who created registries faced their own scandals</p>
                </div>
              </div>
            </Link>
            <Link to="/blog/the-enforcers" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👮</span>
                <div>
                  <h4 className="font-medium text-gray-800">The Enforcers</h4>
                  <p className="text-sm text-gray-600">Police and prosecutors who enforced registry laws while committing crimes</p>
                </div>
              </div>
            </Link>
            <Link to="/blog/sanctuary-and-silence" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⛪</span>
                <div>
                  <h4 className="font-medium text-gray-800">Sanctuary & Silence</h4>
                  <p className="text-sm text-gray-600">Religious institutions that harbored predators while preaching morality</p>
                </div>
              </div>
            </Link>
            <Link to="/blog/playing-fields-and-schoolyards" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏫</span>
                <div>
                  <h4 className="font-medium text-gray-800">Playing Fields & Schoolyards</h4>
                  <p className="text-sm text-gray-600">Coaches and educators who exploited their trusted positions</p>
                </div>
              </div>
            </Link>
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
