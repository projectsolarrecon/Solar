  import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import BlogContent from "../../components/BlogContent";

export default function WhenSomeoneYouLoveIsAccused(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO 
        title="When Someone You Love Is Accused: A Field Guide for Families | The SOLAR Project"
        description="A comprehensive guide for partners, parents, siblings, friends, and chosen family supporting a loved one through a sex-offense case—while protecting your own wellbeing. Evidence-based strategies for family support."
        keywords="family support, accused loved one, sex offense family guide, supporting family member, incarceration family, prison visitation, children of incarcerated, family boundaries, collateral consequences, family resilience"
      />

      {/* Add JSON-LD structured data for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "When Someone You Love Is Accused: A Field Guide for Families",
          "author": {
            "@type": "Organization",
            "name": "The SOLAR Project"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The SOLAR Project",
            "logo": {
              "@type": "ImageObject",
              "url": "https://solarproject.org/solar-project-logo.png"
            }
          },
          "datePublished": "2025-08-14",
          "dateModified": "2025-08-14",
          "description": "A comprehensive guide for partners, parents, siblings, friends, and chosen family supporting a loved one through a sex-offense case—while protecting your own wellbeing.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solarproject.org/blog/when-someone-you-love-is-accused"
          },
          "keywords": ["family support", "accused loved one", "family guide", "incarceration support", "family resilience"],
          "articleSection": "Family Support",
          "wordCount": 2000
        })}
      </script>

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
              Family Support
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            When Someone You Love Is Accused
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            A guide for families navigating the emotional and practical challenges of sex offense accusations
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              16 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              November 15, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Family Support", "Crisis Management", "Children's Wellbeing", "Prison Visitation", "Boundaries", "Self-Care", "Evidence-Based"].map((tag) => (
            <span key={tag} className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full border border-purple-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-purple max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you're reading this, your world may have tilted on its axis. Accusations and arrests don't just happen to one person—they ripple through families, friendships, workplaces, schools, and communities. Shame shows up first. Fear and confusion follow close behind.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This guide is for you—the partners, parents, siblings, friends, and chosen family—who want to support a loved one <em>and</em> protect your own wellbeing. It blends practical steps with what we know from research about social support, outcomes, and what helps families and children cope.
          </p>

          <hr className="my-10 border-gray-300" />

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💙</span>
              First, Permission to Be Human
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You're allowed to feel everything—anger, compassion, disbelief, loyalty, grief. You don't have to pick one. In Brené Brown's language, shame grows in secrecy and silence; it shrinks when we name what's hard and stay connected to trustworthy people. You can support your loved one <em>and</em> set boundaries. Both/and is the posture that gets families through.
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-8">
              <blockquote className="text-purple-800 italic text-lg mb-3">
                "Every time the doorbell rings, my heart drops. You live in this constant state of fear."
              </blockquote>
              <p className="text-sm text-purple-600">
                — spouse of a registrant, <a href="https://www.themarshallproject.org/2016/02/18/i-married-a-sex-offender" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-800">The Marshall Project</a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📊</span>
              Why Your Support Matters (And Where the Data Is Nuanced)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Decades of research show that <strong>staying connected to family and friends while incarcerated is linked to better outcomes after release</strong>. In large state studies, people who received visits had <strong>lower and slower recidivism</strong>. A peer-reviewed meta-analysis found that experiencing prison visitation is associated with about a <strong>26% reduction</strong> in recidivism on average.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">Research Evidence</h3>
              <ul className="list-disc pl-5 text-green-700 space-y-2">
                <li>Minnesota's Department of Corrections found visited people were significantly less likely to recidivate</li>
                <li>Florida research found visitation <strong>reduces and delays</strong> recidivism</li>
                <li>Meta-analysis shows approximately <strong>26% reduction</strong> in recidivism with visitation</li>
              </ul>
              <p className="text-sm text-green-600 mt-4">
                Sources: <a href="https://www.ojp.gov/library/publications/effect-prison-visitation-reentry-success-meta-analysis" target="_blank" rel="noopener noreferrer" className="underline">Mitchell, Spooner, Zhang (2016)</a>, <a href="https://mn.gov/doc/assets/11-11PrisonVisitationResearchinBrief-Final_tcm1089-272782.pdf" target="_blank" rel="noopener noreferrer" className="underline">MN DOC Research</a>, <a href="https://journals.sagepub.com/doi/10.1177/0022427808317574" target="_blank" rel="noopener noreferrer" className="underline">Bales & Mears (2008)</a>
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Important Nuance for Sex-Offense Cases</h3>
              <p className="text-yellow-700 mb-4">
                A mixed-methods study found that <em>unstructured</em> family/friend support by itself did <em>not</em> significantly predict recidivism for sex offense cases. The quality of supervision relationships, access to <Link to="/blog/dangerous-myth" className="text-yellow-600 hover:text-yellow-800 underline">treatment</Link>, and structured re-entry supports mattered more.
              </p>
              <p className="text-yellow-700">
                Your care is crucial, and it's most effective when paired with <strong>connection + structure</strong>—accountability, treatment, and practical help like housing and transportation.
              </p>
              <p className="text-sm text-yellow-600 mt-4">
                Source: <a href="https://spa.sdsu.edu/_resources/files/documents/can_social_support_overcome.pdf" target="_blank" rel="noopener noreferrer" className="underline">Kras (2018), International Journal of Offender Therapy & Comparative Criminology</a>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Community-based reentry models like <strong>Circles of Support and Accountability (COSA)</strong>—where trained volunteers walk alongside high-risk individuals after release—have shown measurable reductions in reoffending in Minnesota's randomized trial.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">👨‍👩‍👧‍👦</span>
              What Families and Children Actually Face
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registration, notification, and residency restrictions often spill over onto loved ones. In a national survey of <strong>584 family members</strong> of registrants, the <Link to="/blog/hidden-costs-registries" className="text-blue-600 hover:text-blue-800 underline font-medium">collateral damage</Link> was extensive and preventable.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-3">Family Impact Statistics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Adults Experienced:</h4>
                  <ul className="list-disc pl-5 text-red-700 space-y-1">
                    <li><strong>44%</strong> - Threats or harassment by neighbors</li>
                    <li><strong>27%</strong> - Property damage</li>
                    <li><strong>7%</strong> - Physical assault</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Children Experienced:</h4>
                  <ul className="list-disc pl-5 text-red-700 space-y-1">
                    <li><strong>77%</strong> - Depression</li>
                    <li><strong>73%</strong> - Anxiety</li>
                    <li><strong>65%</strong> - Being left out</li>
                    <li><strong>59%</strong> - Ridicule</li>
                    <li><strong>52%</strong> - Teasing</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-red-600 mt-4">
                These are preventable, collateral harms—and they underscore why families need both protection and support. Source: <a href="https://safervirginia.org/documents/Collateral%20Damage%20-%20Family%20Members%20of%20Registered%20Sex%20Offenders%20Levenson.pdf" target="_blank" rel="noopener noreferrer" className="underline">Levenson & Tewksbury (2009)</a>
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <blockquote className="text-blue-800 italic text-lg mb-3">
                "We're living in our own little prison."
              </blockquote>
              <p className="text-sm text-blue-600">
                — mother of a registrant with disabilities, <a href="https://www.themarshallproject.org/2019/09/13/when-people-with-intellectual-disabilities-are-punished-parents-pay-the-price" target="_blank" rel="noopener noreferrer" className="underline">The Marshall Project</a>
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Also remember you're not alone: an estimated <strong>5 million U.S. children</strong> have had a parent incarcerated at some point. The <a href="https://nrccfi.camden.rutgers.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">National Resource Center on Children & Families of the Incarcerated (NRCCFI)</a> maintains directories and practical guides for caregivers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🛠️</span>
              A Steadier Footing: What to Do in the First Weeks
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Build Your Circle (Three Layers)</h3>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-purple-700">Inner circle:</strong> 1–3 people you can be fully honest with.
                  </li>
                  <li>
                    <strong className="text-purple-700">Practical circle:</strong> the folks who can drive, watch kids, organize documents.
                  </li>
                  <li>
                    <strong className="text-purple-700">Professional circle:</strong> <Link to="/blog/private-vs-public-defender" className="text-blue-600 hover:text-blue-800 underline">defense counsel</Link>, a trauma-informed therapist for <em>you</em>, and (when appropriate) a family law or benefits navigator.
                  </li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Evidence suggests relationships that combine <em>care + accountability</em> help—think COSA-like supports and reentry planning alongside family care.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Keep Contact Going—Safely and Within the Rules</h3>
                <p className="text-gray-700 mb-4">
                  Visits, calls, letters, and video chats aren't just morale boosters; they're linked to better post-release outcomes. For children, <strong>age-appropriate, supported visits</strong> help repair attachment and reduce distress when they're done in child-friendly ways.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Document Everything</h3>
                <p className="text-gray-700">
                  Keep a simple timeline, save correspondence, and file receipts. If your loved one is in custody, write down booking numbers, facility rules, and approved contact lists.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Plan for Kids' Needs</h3>
                <p className="text-gray-700 mb-4">
                  Loop in a pediatrician or school counselor as appropriate; ask the school for a point person. Many children cope better when they can safely communicate with the incarcerated parent, share drawings or photos, and have a predictable story about where the parent is and that the child is not to blame.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5. Safety and Boundaries</h3>
                <p className="text-gray-700">
                  It's loving—not disloyal—to set clear limits (e.g., regarding finances, childcare, social media). Boundaries protect relationships.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🤝</span>
              How to Support Your Loved One (and Yourself) Over Time
            </h2>
            
            <ul className="space-y-4">
              <li className="bg-green-50 p-4 rounded-lg">
                <strong className="text-green-800">Stay connected, consistently.</strong> Short, regular contact beats grand gestures. Mark holidays in creative ways (letters, photos, shared books). Consistency signals: <em>You are more than this moment.</em>
              </li>
              <li className="bg-green-50 p-4 rounded-lg">
                <strong className="text-green-800">Encourage treatment, education, and structured reentry.</strong> Where appropriate and advised by counsel, support <Link to="/blog/dangerous-myth" className="text-blue-600 hover:text-blue-800 underline">evidence-based treatment</Link>, classes, and reentry plans. Programs that combine structure with pro-social support—work release, education, COSA—are linked to better outcomes.
              </li>
              <li className="bg-green-50 p-4 rounded-lg">
                <strong className="text-green-800">Right-size the information.</strong> You don't owe the internet your family story. Decide in advance what you'll say to neighbors, coaches, or faith communities, and keep it brief.
              </li>
              <li className="bg-green-50 p-4 rounded-lg">
                <strong className="text-green-800">Practice shame-resilient self-care.</strong> Name the hard thing (to one safe person) each day. Protect sleep, movement, and nourishment—your nervous system is doing heavy lifting. Consider a therapist or peer group for justice-impacted families.
              </li>
              <li className="bg-red-50 p-4 rounded-lg">
                <strong className="text-red-800">If you're facing harassment.</strong> Document incidents, notify counsel, and—if safe—report to authorities. The fact that <em>nearly half of families</em> in one study reported threats/harassment underscores the need for <Link to="/blog/vigilantism-registry" className="text-blue-600 hover:text-blue-800 underline">safety planning</Link>.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">👶</span>
              Talking with Children (Age-Aware, Honest, Hopeful)
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li>
                  <strong className="text-blue-800">Tell the truth simply.</strong> "Dad broke an important rule and has to be away while adults work on a plan."
                </li>
                <li>
                  <strong className="text-blue-800">Answer what they ask.</strong> Keep details minimal; follow their lead.
                </li>
                <li>
                  <strong className="text-blue-800">Reassure relentlessly.</strong> "You are safe. You are loved. This is not your fault."
                </li>
                <li>
                  <strong className="text-blue-800">Prepare for visits.</strong> Walk through what they'll see, offer choices, and debrief afterwards. Federal child-welfare guidance offers concrete, age-specific tips for preparing kids for contact and visits.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📈</span>
              Data at a Glance (To Steady Your Compass)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-green-800 mb-3">Visitation & Outcomes</h3>
                <p className="text-green-700">
                  Multiple studies show visited people are less likely to reoffend. Meta-analysis estimates a ~<strong>26%</strong> reduction in recidivism.
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Support Quality Matters</h3>
                <p className="text-yellow-700">
                  Family/friend support alone did not predict recidivism—underscoring the value of <strong>structured, accountability-based support</strong> alongside family care.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg md:col-span-2">
                <h3 className="text-lg font-bold text-red-800 mb-3">Collateral Harm to Families</h3>
                <p className="text-red-700">
                  Among 584 family members of registrants: <strong>44%</strong> reported neighbor threats/harassment; <strong>27%</strong> property damage; <strong>7%</strong> physical assault. Children reported <strong>ridicule (59%)</strong>, <strong>depression (77%)</strong>, <strong>anxiety (73%)</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🗣️</span>
              Voices from the Journey
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <blockquote className="text-gray-800 italic text-lg mb-3">
                  "The dream is gone. We're living in our own little prison."
                </blockquote>
                <p className="text-sm text-gray-600">
                  — parent of an adult registrant with disabilities, <a href="https://www.themarshallproject.org/2019/09/13/when-people-with-intellectual-disabilities-are-punished-parents-pay-the-price" target="_blank" rel="noopener noreferrer" className="underline">The Marshall Project</a>
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <blockquote className="text-gray-800 italic text-lg mb-3">
                  "We thought it would go away… It never went away."
                </blockquote>
                <p className="text-sm text-gray-600">
                  — spouse describing the long tail of <Link to="/blog/rethinking-registry" className="text-blue-600 hover:text-blue-800 underline">registry rules</Link>
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These testimonies are not here to frighten you—they're here to validate you. What you're feeling is real. And there are ways forward.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voices Emerging from Hope</h3>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <blockquote className="text-green-800 italic text-lg mb-3">
                  "Since I've started this program after I got out of prison, they started getting back into my life. They're seeing that I was really trying to change… so I finally got my kids and my mom back in my life; [they are] proud of me."
                </blockquote>
                <p className="text-sm text-green-600">
                  — returning citizen describing family reunification, <a href="https://nationalreentryresourcecenter.org/reentry-through-lens-returning-individual/family-reunification" target="_blank" rel="noopener noreferrer" className="underline">National Reentry Resource Center</a>
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <blockquote className="text-green-800 italic text-lg mb-3">
                  "I'm asking you to envision a world where men and women aren't held hostage to their pasts, where misdeeds and mistakes don't define you for the rest of your life."
                </blockquote>
                <p className="text-sm text-green-600">
                  — Shaka Senghor, <a href="https://time.com/4254336/what-we-dont-understand-about-violent-offenders/" target="_blank" rel="noopener noreferrer" className="underline">TIME</a>
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These voices don't erase the trauma—you wouldn't want them to—but they offer something rarer: glimpses of what can come <em>after</em> the darkest chapters—renewed trust, restored relationships, and a path forward.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🌟</span>
              A Closing Word
            </h2>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <p className="text-lg text-purple-800 leading-relaxed">
                You didn't choose this storm, but you can choose your vessel. Choose connection over isolation, boundaries over burnout, and informed hope over magical thinking. Your steadiness can be a life raft—for your loved one, your children, and yourself.
              </p>
            </div>
          </section>

          {/* Resources Section */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Essential Resources for Families</h3>
            <ul className="list-disc pl-5 text-purple-800 space-y-2">
              <li><a href="https://nrccfi.camden.rutgers.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">National Resource Center on Children & Families of the Incarcerated</a> — Comprehensive support guides</li>
              <li><Link to="/resources" className="hover:text-purple-600 transition-colors">SOLAR Resources</Link> — Crisis support and practical guidance</li>
              <li><Link to="/blog/life-on-registry" className="hover:text-purple-600 transition-colors">Life on the Registry</Link> — Long-term adjustment strategies</li>
              <li><Link to="/blog/hidden-costs-registries" className="hover:text-purple-600 transition-colors">Hidden Costs of Registries</Link> — Understanding family impact</li>
              <li><Link to="/contact" className="hover:text-purple-600 transition-colors">Contact SOLAR</Link> — Get personalized family support</li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-600">
            <p><strong>Note:</strong> This guide provides general information and emotional support. Individual situations vary greatly, and families should consult with qualified legal and mental health professionals for specific guidance on their circumstances.</p>
          </div>
        </div>

        {/* Share and Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/blog" 
              className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
            >
              ← Back to All Posts
            </Link>
            <div className="flex space-x-4">
              <Link 
                to="/contact" 
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors shadow-md"
              >
                Get Support
              </Link>
              <Link 
                to="/resources" 
                className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Resources
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
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}