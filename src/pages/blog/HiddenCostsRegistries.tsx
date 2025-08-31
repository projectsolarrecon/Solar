  import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function HiddenCostsRegistries(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO 
        title="When the Label Hurts the Whole Family: Hidden Costs of Sex-Offender Registries | The SOLAR Project"
        description="A compassionate, data-driven look at how public sex-offender registries affect families—especially children—with research, real stories, and hopeful reforms."
        keywords="sex offender registry families, children of registrants, collateral consequences, family impact, registry reform, vigilantism, housing restrictions"
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
              Economic Impact
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The Hidden Costs of Sex Offense Registries
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Beyond the obvious impacts, registries create cascading economic and social costs that affect entire communities
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
              December 10, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Family Impact", "Policy Analysis", "Children's Rights", "Collateral Consequences", "Registry Reform"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            You've scrolled past it online: a registry listing someone's name, address—perhaps even a photo. It's meant to protect, but for many families, that listing becomes a lasting burden.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💔</span>
              Collateral Damage, Unseen and Unspoken
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Behind every name on that <Link to="/blog/rethinking-registry" className="text-blue-600 hover:text-blue-800 underline font-medium">registry</Link> is a family—a spouse, maybe children—carrying a label they never earned. A landmark nationwide survey found that families of registrants frequently endure <strong>financial hardship</strong>, <strong>housing instability</strong>, <strong>harassment</strong>, and <strong>social isolation</strong>. (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Levenson & Tewksbury, 2009</a>)
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-3">Devastating Statistics for Children</h3>
              <p className="text-red-700 mb-4">
                Research from multiple studies reveals the profound impact on innocent children:
              </p>
              <ul className="list-disc pl-5 text-red-700 space-y-2">
                <li><strong>Nearly two-thirds</strong> said their children were treated differently at school—bullied, ostracized, or forced to withdraw from activities (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Levenson & Tewksbury, 2009</a>)</li>
                <li><strong>78%</strong> reported that friendships were disrupted or other parents stopped allowing playdates (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Levenson & Tewksbury, 2009</a>)</li>
                <li><strong>More than half</strong> said teachers or school staff treated their children differently (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Levenson & Tewksbury, 2009</a>)</li>
                <li><strong>About 1 in 5</strong> said their child had been physically attacked because of the stigma (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Levenson & Tewksbury, 2009</a>)</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏠</span>
              Laws That Ensnare the Innocent
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Residency restrictions—designed to keep registrants away from places kids gather—often end up uprooting entire families. Research shows these restrictions create housing instability that affects spouses and children who had no involvement in any offense. (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Human Rights Watch, 2007</a>) These <Link to="/blog/life-on-registry" className="text-blue-600 hover:text-blue-800 underline">housing challenges</Link> affect entire families, often forcing them into unstable or unsafe living situations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">👨‍👩‍👧‍👦</span>
              Real Families, Real Stories
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Imagine being ten, and your home becomes a target—a prankster tacks up photos of you with a "wanted" tone, or a peer taunts you for the label next to your name. In one case documented by researchers, a child was so bullied that they dropped out of school. (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Levenson & Tewksbury, 2009</a>) In other instances, families faced <strong><Link to="/blog/vigilantism-registry" className="text-blue-600 hover:text-blue-800 underline font-medium">vigilante threats</Link></strong>, or their houses were vandalized—sometimes violently—all because a parent's offense, however minor or years-old, placed a target on them. (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Human Rights Watch, 2007</a>)
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📊</span>
              The Human Toll, Not Just the Statistics
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This isn't academic. It's finding your kid excluded from playdates. It's missing parent-child moments—no trick-or-treating together, no school concerts, no family vacations without anxiety. One child's normal interaction becomes a public declaration: "My parent is on the registry." That can be devastating.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Mental Health Impact on Children</h3>
              <p className="text-yellow-700 mb-4">
                The data paint a stark picture of psychological harm to innocent children:
              </p>
              <ul className="list-disc pl-5 text-yellow-700 space-y-2">
                <li><strong>77%</strong> of affected children show signs of depression (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600">Levenson & Tewksbury, 2009</a>)</li>
                <li><strong>73%</strong> experience heightened anxiety (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600">Levenson & Tewksbury, 2009</a>)</li>
                <li><strong>13%</strong> have expressed suicidal thoughts (<a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-600">Levenson & Tewksbury, 2009</a>)</li>
              </ul>
              <p className="text-sm text-yellow-600 mt-4">
                All linked to the stigma and social isolation of having a parent on the registry. These numbers aren't abstract—they are lived reality for thousands of kids whose only "crime" is being related to someone on a list.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🌟</span>
              A Thread of Hope
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Despite these challenges, there are encouraging developments in <Link to="/advocacy" className="text-blue-600 hover:text-blue-800 underline font-medium">reform efforts</Link>:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>Youth registrants</strong> are increasingly being allowed to petition for removal after a few years of a clean record (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Human Rights Watch, 2007</a>)
              </li>
              <li className="text-lg text-gray-700">
                Civil-rights groups are bringing attention to the invisible victims—spouses, children, relatives—demanding laws that consider real risk, not one-size-fits-all labeling. (<a href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/sex-offense-laws" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">ACLU, 2021</a>)
              </li>
              <li className="text-lg text-gray-700">
                Even among lawmakers, there's growing recognition that <em>public safety and compassion don't have to be mutually exclusive</em>. Some are pioneering evidence-based reforms that balance transparency with privacy and rehabilitation. (<a href="https://www.vera.org/publications/sex-offense-laws-failed-policies-new-directions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Vera Institute of Justice, 2019</a>)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🤝</span>
              Why It Matters to All of Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We all want safer communities. We just have to ask: <strong>at what cost?</strong> When the goal is protection, but the outcome is hurting innocent children and tearing families apart—we must pause and rethink.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By raising gentle awareness—sharing factual stories, statistics, reforms—we can nudge the conversation toward restorative justice, empathy, and common sense. The hope isn't naive—it's a belief that our laws can protect the public without leaving quiet casualties in their wake.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Moving Forward Together</h3>
              <p className="text-blue-700 mb-4">
                Understanding these hidden costs doesn't mean abandoning public safety—it means creating smarter, more compassionate policies that protect everyone, including the innocent family members caught in the crossfire.
              </p>
              <p className="text-blue-700">
                Learn more about <Link to="/blog/life-on-registry" className="underline hover:text-blue-600">supporting affected families</Link> and <Link to="/advocacy" className="underline hover:text-blue-600">advocacy efforts</Link> working toward evidence-based reform.
              </p>
            </div>
          </section>

          {/* Sources Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📚</span>
              Sources & Further Reading
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-disc pl-5 text-gray-700 space-y-3">
                <li>
                  <strong>Levenson, J. S., & Tewksbury, R. (2009).</strong> <em>Collateral Damage: Family Members of Registered Sex Offenders.</em> American Journal of Criminal Justice, 34(1-2), 54-68. 
                  <a href="https://www.ncjrs.gov/pdffiles1/nij/grants/231989.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">Full Study (PDF)</a>
                </li>
                <li>
                  <strong>Human Rights Watch. (2007).</strong> <em>No Easy Answers: Sex Offender Laws in the US.</em> 
                  <a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">Full Report</a>
                </li>
                <li>
                  <strong>American Civil Liberties Union. (2021).</strong> <em>Sex Offense Laws: Reform Needed.</em> 
                  <a href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/sex-offense-laws" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">ACLU Position</a>
                </li>
                <li>
                  <strong>Vera Institute of Justice. (2019).</strong> <em>Sex Offense Laws: Failed Policies, New Directions.</em> 
                  <a href="https://www.vera.org/publications/sex-offense-laws-failed-policies-new-directions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">Policy Analysis</a>
                </li>
              </ul>
            </div>
          </section>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Support Resources for Affected Families</h3>
            <ul className="list-disc pl-5 text-blue-800 space-y-2">
              <li><Link to="/resources" className="hover:text-blue-600 transition-colors">SOLAR Resources</Link> — Comprehensive guides for families navigating registration</li>
              <li><Link to="/blog/life-on-registry" className="hover:text-blue-600 transition-colors">Life on the Registry</Link> — Practical guidance for adjustment and support</li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact SOLAR</Link> — Get personalized support and information</li>
            </ul>
          </div>
        </div>

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
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Contact Us
              </Link>
              <Link 
                to="/resources" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}