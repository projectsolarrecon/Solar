    import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function VigilantismRegistry() {
  return (
    <div className="bg-white">
      <SEO 
        title="Vigilantism & the Public Registry: Real Risks and Safety Strategies | The SOLAR Project"
        description="Understanding the documented risks of registry-linked vigilantism, including mistaken identity cases, and practical safety strategies for registrants and their families."
        keywords="sex offender registry vigilantism, registry safety, mistaken identity attacks, registrant family safety, vigilante violence, registry harassment, public safety concerns"
      />

      {/* Add JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Vigilantism & the Public Registry: A Real Talk for You and Your Family",
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
          "datePublished": "2025-08-11",
          "dateModified": "2025-08-11",
          "description": "Understanding the documented risks of registry-linked vigilantism, including mistaken identity cases, and practical safety strategies for registrants and their families.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solarproject.org/blog/vigilantism-registry"
          }
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
              Public Safety
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            When Registries Enable Vigilantism
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            How public registries can undermine public safety by encouraging dangerous vigilante behavior
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              7 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              November 18, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          <span className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full border border-red-200">Safety</span>
          <span className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full border border-red-200">Vigilantism</span>
          <span className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full border border-red-200">Registry Risks</span>
          <span className="bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full border border-red-200">Family Protection</span>
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you're on the public sex offender registry—or connected to someone who is—you're often navigating more than stigma. In some cases, people's registry information has become a target for others' misguided "justice," sometimes with innocent victims caught in the crossfire.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This isn't to alarm you—but to inform and empower you with the risks and how to manage them.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              The Troubling Paradox
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's a deep and troubling paradox at the heart of this issue:
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The very government policy meant to keep citizens safe—by publicly sharing registry information—can actually fuel vigilantism.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While promoted as a tool for public protection, the registry can put an entire segment of the population directly in harm's way, and by extension, the public at large. Mistaken identity, wrong addresses, and the inability (or unwillingness) of vigilantes to distinguish between offense types mean the harm often extends far beyond those listed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In this way, a safety measure becomes a catalyst for violence and fear, undermining the very goal it claims to serve. This isn't just a flaw in execution—it's a structural contradiction, where a policy designed for protection actively increases the risk of harm for everyone.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              What the Data Tells Us
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                A 2018 study documented <strong>279 incidents</strong> of registry-linked vigilantism in the U.S.—from flyers and vandalism to murder. (<a href="https://doi.org/10.1080/01639625.2017.1420459" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Cubellis et al., <em>Deviant Behavior</em> 2018</a>)
              </li>
              <li className="text-lg text-gray-700">
                Research shows that <strong>5–16% of registrants report physical assaults</strong> tied to their registry status. <strong>Many say their families are also targeted—with 19% reporting harassment, vandalism, or threats spilling over onto loved ones</strong>. (<a href="https://trace.tennessee.edu/cgi/viewcontent.cgi?article=3472&context=utk_chanhonoproj" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Levenson & Tewksbury, 2009</a>)
              </li>
              <li className="text-lg text-gray-700">
                Even <strong>juveniles and those with non-violent offenses</strong> have been murdered after being listed on public registries, with attackers often failing—or not caring—to distinguish between offense types. (<a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-united-states" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Human Rights Watch, 2007</a>)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              Real U.S. Cases of Mistaken Identity
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
              Innocent people have been hurt when vigilantes misused addresses or confused identities.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>Dallas, Texas — Wrong Address Attack.</strong> Vigilantes visited the address of someone listed on the registry—and beat up the new tenant, who had nothing to do with the registry at all. (<a href="https://www.prisonlegalnews.org/news/2017/may/5/vigilantes-assault-rob-and-murder-registered-sex-offenders/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Prison Legal News</a>)
              </li>
              <li className="text-lg text-gray-700">
                <strong>California — Wrongful Arrest.</strong> A man was mistakenly identified as a sex offender due to identity confusion and spent <strong>five days in jail</strong> facing a fabricated child molestation warrant. (<a href="https://www.sacbee.com/news/california/article288190130.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">The Sacramento Bee (May 2024)</a>)
              </li>
              <li className="text-lg text-gray-700">
                <strong>Wrongful Convictions with Official Oversight.</strong> Some people have been compelled to register due to <strong>mistaken identity or wrongful convictions</strong>. Clarence Elkins, for instance, was convicted based on unreliable testimony and served years before being exonerated via DNA, yet remained on the registry for some time. (<a href="https://en.wikipedia.org/wiki/Clarence_Elkins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Elkins case summary</a>)
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              When Vigilantism Turns Deadly
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>Maine, 2006:</strong> Stephen Marshall used the state's online registry to find and murder two registrants at their homes, selecting victims from ~2,200 names. (<a href="https://en.wikipedia.org/wiki/Stephen_Marshall_(murderer)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Case overview</a>)
              </li>
              <li className="text-lg text-gray-700">
                <strong>Alaska, 2016:</strong> Jason Vukovich—the "Alaskan Avenger"—attacked three registrants he located via the online registry. He was sentenced to more than 23 years. (<a href="https://www.adn.com/alaska-news/crime-courts/2018/09/26/alaskan-avenger-who-targeted-sex-offenders-sentenced-to-23-years-in-prison/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Anchorage Daily News</a>)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              Voices from Those Who've Been Hurt
            </h2>
            <blockquote className="border-l-4 border-red-300 pl-6 italic text-gray-700 bg-red-50 py-4 my-8 rounded-r-lg">
              <p className="mb-4">
                "<strong>It's made outcasts of our whole family. The damage has been done. There's no repairing it.</strong>"
              </p>
              <footer className="text-sm text-gray-600">
                — Mike Grottalio (Texas), whose family endured flyers, BB-gun attacks, and even a Molotov cocktail (<a href="https://www.newyorker.com/magazine/2016/03/14/when-kids-are-accused-of-sex-crimes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">The New Yorker, 2016</a>)
              </footer>
            </blockquote>
            <blockquote className="border-l-4 border-red-300 pl-6 italic text-gray-700 bg-red-50 py-4 my-8 rounded-r-lg">
              <p className="mb-4">
                Locals held what she described as "<strong>just short of a lynch mob</strong>" meeting about her son—then someone fired a BB gun at his bedroom door.
              </p>
              <footer className="text-sm text-gray-600">
                — Heidi Nuttall (Montana), describing escalating community targeting (<a href="https://www.newyorker.com/magazine/2016/03/14/when-kids-are-accused-of-sex-crimes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">The New Yorker, 2016</a>)
              </footer>
            </blockquote>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              Practical Tips to Reduce Your Exposure
            </h2>
            <div className="grid gap-4 mb-8">
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Limit Personal Exposure</h3>
                <p className="text-blue-800">
                  Keep daily routines, social media, and public movements as private as reasonable.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Secure Home & Routine</h3>
                <p className="text-blue-800">
                  Lighting, cameras, and strong locks are protective—not paranoid.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Document All Harassment</h3>
                <p className="text-blue-800">
                  Keep logs/photos and report every incident to police promptly.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Stay in Contact with Authorities</h3>
                <p className="text-blue-800">
                  If hostility escalates, alert probation/parole and local law enforcement.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Build a Trusted Support Network</h3>
                <p className="text-blue-800">
                  Family, advocates, and legal aid can buffer stress and respond quickly.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 p-6 shadow-sm bg-blue-50">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Understand Your Rights</h3>
                <p className="text-blue-800">
                  Some states penalize misuse of registry info—knowing local laws helps.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
              Final Thought
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registry listings can expose you or your family to unwarranted danger—even when someone is completely unrelated. Awareness is your tool—not fear. You can't control others' actions, but you can be informed, prepared, and supported.
            </p>
          </section>

          <footer className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>
              <strong>Sources:</strong> Cubellis et al. (2018), Levenson & Tewksbury (2009), Human Rights Watch (2007), Anchorage Daily News (2018), Prison Legal News (2017), The New Yorker (2016), The Sacramento Bee (2024), Elkins case summary.
            </p>
          </footer>
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

export default VigilantismRegistry;