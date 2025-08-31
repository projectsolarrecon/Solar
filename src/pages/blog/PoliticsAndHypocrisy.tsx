import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function PoliticsAndHypocrisy(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Politics & Hypocrisy — When Lawmakers Are the Offenders | The SOLAR Project"
        description="A long-form investigative exposé: the politicians who wrote America's sex-offense laws—while engaging in the very conduct they thundered against. Verified sources, embedded links, and SOLAR's case for real safety reforms."
        keywords="Dennis Hastert, Mark Foley, Roy Moore, Matt Gaetz, Anthony Weiner, sex offender registry, political hypocrisy, Adam Walsh Act, Megan's Law, congressional scandals"
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
              Investigative Series · Part 1
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Politics & Hypocrisy — When Lawmakers Are the Offenders
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-4xl">
            They wrote America's sex-offense laws and sold them as a shield. But again and again, the danger wasn't a stranger on a map—it was the man with the microphone, the gavel, or the C-SPAN floor pass. This is how power made the rules and then broke them.
          </p>
          
          <div className="text-sm text-slate-300">
            <span>By SOLAR</span>
            <span className="mx-2">•</span>
            <span>August 25, 2025</span>
            <span className="mx-2">•</span>
            <span>Long-form exposé with verified sources</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The stage: how Congress sold America its comfort blanket</h2>
          <p className="text-lg text-slate-700 mb-6">
            Replay the rhetoric from the late 1990s and 2000s and you'll hear the same drumbeat: protect the children, get tougher, map the threat. President Clinton signed <a href="https://www.justice.gov/otj/compensation-programs#megan" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Megan's Law – DOJ</a> in 1996, entrenching public notification. A decade later President George W. Bush signed the <a href="https://www.congress.gov/bill/109th-congress/house-bill/4472" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Adam Walsh Act bill record</a>, building a national registry infrastructure and adding penalties. Implementation guidance continued into the 2010s via the DOJ's SMART Office as states aligned systems with federal standards.
          </p>
          
          <div className="bg-cyan-50 border border-cyan-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🔎</div>
              <div className="text-cyan-800">
                <strong>What we were told:</strong> registries would put danger at a distance. <strong>What the headlines showed:</strong> the danger sat inside the very chamber passing those laws. Our <Link to="/blog/rethinking-registry" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">critical analysis of registry history</Link> explores how these laws were built on moral panic rather than evidence.
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dennis Hastert — the Speaker with a secret</h2>
          <p className="text-lg text-slate-700 mb-4">
            <strong>Dennis Hastert</strong> looked like the safe choice when he rose from Illinois wrestling coach to Speaker of the House in 1999—a steady hand after the Gingrich era. That image collapsed when federal investigators, probing a suspicious pattern of cash withdrawals, uncovered hush-money payments to one of the boys he had abused decades earlier.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            In 2016, at Hastert's sentencing on financial charges (the sex crimes were time-barred), U.S. District Judge Thomas Durkin said out loud what had been whispered for years: Hastert was a <em>"serial child molester."</em> Survivors described grooming and abuse in the wrestling room. The second-in-line to the presidency had used his position as a trusted coach to prey on children—then used his power in Washington to project moral authority while keeping his crimes buried.
          </p>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🚨</div>
              <div className="text-rose-800">
                <strong>Callout:</strong> The man who presided over the House lectured America on law and order—while his victims lived with the fallout. This pattern of institutional abuse is exactly what our <Link to="/blog/high-profile-cases-stranger-danger" className="text-rose-600 hover:text-rose-800 underline font-semibold">analysis of high-profile cases</Link> reveals about where real danger lies.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            <a href="https://apnews.com/article/e44989b5ae6047bf9bf514e285308989" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Dennis Hastert sentencing</a> covered the sentencing in detail; the judge's words still sting because they expose the illusion at the heart of "tough on crime" politics: when the powerful offend, the system often finds a softer landing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Mark Foley — architect of the Adam Walsh Act, predator of teen pages</h2>
          <p className="text-lg text-slate-700 mb-4">
            Just months before his resignation, Florida Congressman <strong>Mark Foley</strong> spoke on the House floor about the urgency of protecting children from sexual exploitation, urging passage of the Adam Walsh Act. "We must act to protect our children from predators," he declared—language tailor-made for local news and campaign mailers.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            Then the emails surfaced. In late 2006, news broke that Foley had sent sexually explicit messages to teenage congressional pages—minors working in a program he helped oversee. He resigned within hours. The scandal wasn't a whisper campaign; it was documented, explicit, and wildly at odds with his public crusade.
          </p>
          
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚠️</div>
              <div className="text-amber-800">
                <strong>Callout:</strong> He helped build the registry that brands strangers—while abusing access to children in his own workplace. This is the institutional failure our <Link to="/resources/know-your-rights" className="text-amber-600 hover:text-amber-800 underline font-semibold">Know Your Rights guide</Link> addresses when discussing how power protects itself.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            See <a href="https://www.washingtonpost.com/archive/politics/2006/10/01/foley-built-career-as-protector-of-children-span-classbankheadhe-gained-attention-by-fighting-sex-crimesspan/a28be4ed-f364-492a-935e-cf8bed62f86b/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post – Mark Foley</a> on Foley's child-protection persona alongside the explicit chats. For non-paywalled coverage, see <a href="https://en.wikipedia.org/wiki/Mark_Foley_scandal" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Wikipedia – Mark Foley scandal summary</a>. For the law he touted, consult the <a href="https://www.congress.gov/bill/109th-congress/house-bill/4472" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Adam Walsh Act bill record</a> and his own <a href="https://votesmart.org/public-statement/195177/adam-walsh-child-protection-and-safety-act-of-2006" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Foley floor remarks</a> archived by VoteSmart.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Roy Moore — family values on the stump, allegations at the mall</h2>
          <p className="text-lg text-slate-700 mb-4">
            In Alabama, former chief justice <strong>Roy Moore</strong> turned courthouse defiance into a national brand. His 2017 Senate bid leaned on public piety and moral absolutism. Then multiple women came forward—among them <strong>Leigh Corfman</strong>, who was 14 when she says Moore, then 32, initiated sexual contact. Others described older-man advances at local malls and school events.
          </p>
          
          <blockquote className="border-l-4 border-slate-300 bg-slate-50 pl-6 py-4 my-8 text-lg italic text-slate-700">
            <div className="font-semibold text-xl">"He promised a higher moral ground—and was accused of pursuing children beneath it."</div>
          </blockquote>
          
          <p className="text-lg text-slate-700">
            The <a href="https://www.washingtonpost.com/news/politics/wp/2017/11/09/roy-moore-and-the-politics-of-moral-parenthood/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post – Roy Moore</a> documented patterns and corroborations; Moore denied wrongdoing. For non-paywalled coverage, see <a href="https://apnews.com/article/roy-moore-alabama-senate-accusations-2017" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Roy Moore allegations summary</a>. No charges followed (time and proof barriers), but the episode revealed a politics where the pulpit shields the man, not the public.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Matt Gaetz — family values in public, Ethics findings in print</h2>
          <p className="text-lg text-slate-700 mb-6">
            Florida Congressman <strong>Matt Gaetz</strong> built his persona on cultural combat and conservative family values. In 2023, the Department of Justice announced it would not charge him after a trafficking probe. But in 2024, a bipartisan <a href="https://apnews.com/article/gaetz-ethics-committee-report-53fb6c5d7b1c3f1d63233f23e24d890c" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Matt Gaetz Ethics Committee</a> report concluded there was "substantial evidence" he had paid for sex—including with a 17-year-old—used illegal drugs, and misused his office. Gaetz denied the claims; the committee's language was unusually blunt.
          </p>
          
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">⚖️</div>
              <div className="text-amber-800">
                <strong>Callout:</strong> He weighed in on federal criminal law from the dais—even as sworn evidence painted a very different portrait offstage. Our <Link to="/blog/federal-sex-crime-process" className="text-amber-600 hover:text-amber-800 underline font-semibold">federal process guide</Link> explains how these cases typically unfold when they don't involve powerful defendants.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            For context on DOJ's decision not to prosecute, see <a href="https://www.nbcnews.com/politics/justice-department/justice-department-wont-charge-rep-matt-gaetz-sex-trafficking-probe-n1289926" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NBC – DOJ Gaetz decision</a>. Declination is not exoneration; the Ethics findings stand on their own record.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Anthony Weiner — digital decency advocate, digital offender</h2>
          <p className="text-lg text-slate-700 mb-6">
            Democratic firebrand <strong>Anthony Weiner</strong> once styled himself as a guardian of online decency and a bulwark against tech-enabled abuse. Then came the cascading scandals: first adult sexting, then messages with a 15-year-old. In 2017 he pled guilty and received a 21-month sentence.
          </p>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🧨</div>
              <div className="text-rose-800">
                <strong>Callout:</strong> He warned about online predators—then became one, using the very tools he condemned. This digital dimension of abuse is something our <Link to="/resources/family-support-guide" className="text-rose-600 hover:text-rose-800 underline font-semibold">family support resources</Link> help parents understand and address.
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            The <a href="https://www.nytimes.com/2017/09/25/nyregion/anthony-weiner-sentenced.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NYT – Anthony Weiner sentencing</a> chronicled the fall; for non-paywalled coverage, see <a href="https://apnews.com/article/893bb904e4a82e8aff53fd396805bc88" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Anthony Weiner sentenced for sexting with minor</a>. The irony didn't need commentary. It wrote itself.
          </p>
        </section>

        <hr className="border-slate-200 my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The pattern you can't unsee</h2>
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="font-bold text-slate-800 mb-2">Power and proximity</h3>
                <p className="text-slate-600 text-sm">Not geography—explain these harms. The registry maps addresses; it cannot map congressional influence.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="font-bold text-slate-800 mb-2">Public virtue, private vice</h3>
                <p className="text-slate-600 text-sm">Each man quoted moral lines on the record—and crossed them off it.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-slate-800 mb-2">Different parties, same playbook</h3>
                <p className="text-slate-600 text-sm">Hypocrisy is bipartisan. So is survivor betrayal.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-50 border border-cyan-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🧭</div>
              <div className="text-cyan-800">
                <strong>Thesis:</strong> The registry is political theater that stigmatizes the powerless. It does nothing to check misconduct inside the chambers where the laws are written. Our <Link to="/advocacy" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">advocacy work</Link> focuses on real accountability measures instead.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What the registry could never do</h2>
          <p className="text-lg text-slate-700 mb-4">
            Ask a basic question: Would a bigger, harsher public registry have protected the boys Hastert abused in a high-school wrestling room? The teenage pages around Foley? The Alabama teens who told reporters about Roy Moore? The House witnesses who described Gaetz's conduct? The minor in Weiner's case?
          </p>
          <p className="text-lg text-slate-700 mb-6">
            The answer is obvious. These cases weren't about strangers lurking by swing sets. They were about <em>men with access, authority, and insulation</em>. A map cannot fix that. Oversight can.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4">✅</div>
              <div className="text-emerald-800">
                <strong>What works:</strong> independent oversight, transparent reporting channels, automatic outside referrals for allegations against officials, retaliation penalties, and resources for survivors. What doesn't: doubling down on a public map of prior convictions and calling it prevention. Learn more about effective approaches in our <Link to="/resources" className="text-emerald-600 hover:text-emerald-800 underline font-semibold">comprehensive resource library</Link>.
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What SOLAR is asking lawmakers to do</h2>
          
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Apply the law to yourselves</h4>
                  <p className="text-slate-700">Ethics rules with teeth, not press releases. When allegations involve minors or coercion, <em>automatic</em> independent investigations.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Right-size the registry</h4>
                  <p className="text-slate-700">Keep law-enforcement access robust; stop using public notification as a catch-all punishment.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Fund the places risk actually lives</h4>
                  <p className="text-slate-700">Youth programs, schools, faith communities, and the platforms where grooming happens—backed by real audits and enforcement.</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Retire the myth</h4>
                  <p className="text-slate-700">Stop legislating to satisfy "stranger danger" headlines. Start legislating to stop abuse by people in power.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-8">
            <div className="flex items-start">
              <div className="text-2xl mr-4">🛑</div>
              <div className="text-rose-800">
                <strong>Bottom line:</strong> If registries worked the way you say, Congress wouldn't keep producing the very headlines that fuel them. Contact your representatives and demand real accountability—not just for others, but for themselves. Our <Link to="/contact" className="text-rose-600 hover:text-rose-800 underline font-semibold">advocacy toolkit</Link> can help you make your voice heard.
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Selected sources (verified)</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://apnews.com/article/e44989b5ae6047bf9bf514e285308989" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Dennis Hastert sentencing ("serial child molester")</a></li>
            <li>• <a href="https://www.washingtonpost.com/archive/politics/2006/10/01/foley-built-career-as-protector-of-children-span-classbankheadhe-gained-attention-by-fighting-sex-crimesspan/a28be4ed-f364-492a-935e-cf8bed62f86b/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post – Mark Foley child-protection persona & explicit messages to pages</a> · <a href="https://en.wikipedia.org/wiki/Mark_Foley_scandal" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Wikipedia – Mark Foley scandal summary</a></li>
            <li>• <a href="https://www.congress.gov/bill/109th-congress/house-bill/4472" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Adam Walsh Act bill record</a> · <a href="https://votesmart.org/public-statement/195177/adam-walsh-child-protection-and-safety-act-of-2006" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Foley floor remarks</a></li>
            <li>• <a href="https://www.washingtonpost.com/news/politics/wp/2017/11/09/roy-moore-and-the-politics-of-moral-parenthood/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Washington Post – Roy Moore allegations (2017)</a> · <a href="https://apnews.com/article/roy-moore-alabama-senate-accusations-2017" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Roy Moore allegations summary</a></li>
            <li>• <a href="https://apnews.com/article/gaetz-ethics-committee-report-53fb6c5d7b1c3f1d63233f23e24d890c" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Matt Gaetz Ethics Committee "substantial evidence" findings</a> · <a href="https://www.nbcnews.com/politics/justice-department/justice-department-wont-charge-rep-matt-gaetz-sex-trafficking-probe-n1289926" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NBC – DOJ Gaetz decision context</a></li>
            <li>• <a href="https://www.nytimes.com/2017/09/25/nyregion/anthony-weiner-sentenced.html" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">NYT – Anthony Weiner sentencing (2017)</a> · <a href="https://apnews.com/article/893bb904e4a82e8aff53fd396805bc88" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">AP – Anthony Weiner sentenced for sexting with minor</a></li>
            <li>• <a href="https://www.justice.gov/otj/compensation-programs#megan" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800 underline">Megan's Law – DOJ overview (1996)</a></li>
          </ul>
        </div>

      </article>
    </div>
  );
}