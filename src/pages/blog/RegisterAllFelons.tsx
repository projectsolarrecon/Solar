  import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function RegisterAllFelons() {
  return (
    <div className="bg-white">
      <SEO 
        title="If You're Bullish on Registries, Let's Register Everything—And I Mean Everything | The SOLAR Project"
        description="A satirical yet data-driven argument exposing the logical inconsistency of sex offender registries. Why register the lowest-recidivism group while ignoring higher-risk offenders? The numbers don't lie."
        keywords="sex offender registry criticism, recidivism rates comparison, registry logic flaws, criminal justice reform, felon registration, gun violence statistics, DUI deaths, registry effectiveness, evidence-based policy, criminal recidivism data"
      />

      {/* Add JSON-LD structured data for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "If You're Bullish on Registries, Let's Register Everything—And I Mean Everything",
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
          "datePublished": "2025-07-05",
          "dateModified": "2025-07-05",
          "description": "A satirical yet data-driven argument exposing the logical inconsistency of sex offender registries by comparing recidivism rates across crime types.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solarproject.org/blog/register-all-felons"
          },
          "keywords": ["registry criticism", "recidivism comparison", "criminal justice reform", "evidence-based policy"],
          "articleSection": "Policy Critique",
          "wordCount": 1200
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
              Policy Analysis
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Should We Register All Felons? A Critical Analysis
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Examining the logic and consequences of expanding registry systems beyond sex offenses
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              9 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              November 25, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Registry Criticism", "Recidivism Data", "Policy Logic", "Criminal Justice Reform", "Evidence-Based Analysis", "Satirical Commentary"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If registries keep us safe, why stop at one crime—especially the one with the <a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">lowest recidivism rate</a>?
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Recidivism Reality Check: Sex Offenders vs. the Rest of the Felon Parade
            </h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Bureau of Justice Statistics</a> meta-analysis found that <strong>only about 5.3%</strong> of sex offenders were rearrested for another sex crime within three years—and <strong>just 3.5% were reconvicted</strong>.
              </li>
              <li className="text-lg text-gray-700">
                Meanwhile, <strong>non-sex offenders</strong> had a <strong>68% rearrest rate</strong> over that same period.
              </li>
              <li className="text-lg text-gray-700">
                According to <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11530347/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">NIH-published research</a>, most reoffending by sex offenders is for <strong>non-sexual crimes</strong>.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10666491/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">2024 NIH analysis</a> shows sexual recidivism has <strong>declined 45–73%</strong> since the 1970s.
              </li>
              <li className="text-lg text-gray-700">
                BJS <a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">9-year follow-up report</a> confirms sex offenses rank among the lowest in reconviction risk.
              </li>
            </ul>

            <blockquote className="border-l-4 border-blue-400 pl-6 py-4 bg-blue-50 rounded-r-lg mb-8">
              <p className="text-lg italic text-blue-800 font-medium">
                "We insist on tracking the people least likely to reoffend, while the truly dangerous vanish into anonymity."
              </p>
            </blockquote>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🚸</span>
              But What Actually Kills Kids?
            </h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <a href="https://time.com/6170864/cause-of-death-children-guns/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Firearms overtook car crashes</a> in 2020 as the <strong>leading cause of death</strong> for U.S. children and teens.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://publichealth.jhu.edu/2024/guns-remain-leading-cause-of-death-for-children-and-teens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Johns Hopkins</a> confirmed guns remained #1 cause of death by 2022.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://publichealth.jhu.edu/center-for-gun-violence-solutions/annual-gun-violence-data-2022" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Gun Violence Data 2022</a> reported 2,526 child gun deaths—<strong>7 per day</strong>.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://www.health.com/surgeon-general-gun-violence-public-health-8670305" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Gun violence</a> declared a <strong>public health crisis</strong> by the U.S. Surgeon General.
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://everytownresearch.org/graph/firearms-are-the-leading-cause-of-death-for-american-children-and-teens/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Everytown Research</a> analysis shows firearms as the leading child killer as of 2023.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🤡</span>
              If We Applied Registry Logic Everywhere
            </h2>
            
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>DUI Registry</strong>: Over <a href="https://www.nhtsa.gov/risky-driving/drunk-driving" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">13,000 drunk driving deaths</a> annually.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Gun Offender Registry</strong>: Illegal possession, discharges near schools?
              </li>
              <li className="text-lg text-gray-700">
                <strong>Assault & Battery Registry</strong>: From bar fights to domestic violence.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Drug Trafficker Registry</strong>: Fentanyl and meth are mass killers.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Fraud Registry</strong>: Financial predators ruin lives too.
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Over <strong>80% of released prisoners</strong> are rearrested within 9 years—mainly for violent, property, and drug crimes (<a href="https://time.com/6170864/cause-of-death-children-guns/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">TIME</a>). Yet we zero in on the <strong>7%</strong> convicted of sex crimes. Because it's easier to fear what's been sensationalized than to reckon with what's statistically true.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🧠</span>
              The Verdict
            </h2>
            
            <ol className="list-decimal pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>Register all felons</strong>—embrace the surveillance state and legal chaos.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Admit the truth:</strong> Registries are emotional theater, not safety tools.
              </li>
            </ol>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sex offender registries punish, brand, and isolate. They're built on optics, not outcomes. If we won't register <em>everyone</em>, we should rethink registering <em>anyone</em>.
            </p>
          </section>

          {/* Data Comparison Box */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800">The Registry Paradox</h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sex offenders: 5.3% rearrest rate for same crime</li>
                    <li>All other felons: 68% rearrest rate</li>
                    <li>Gun deaths: 7 children per day</li>
                    <li>DUI deaths: 13,000+ annually</li>
                    <li>Yet we only register the lowest-risk group</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sources Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔍</span>
              Sources
            </h3>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li><a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">U.S. DOJ: Recidivism of Adult Sexual Offenders (SMART Office)</a></li>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11530347/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">NIH: Predicting Recidivism in Sex Offenders</a></li>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10666491/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">NIH 2024: Declining Recidivism Trends</a></li>
                <li><a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">BJS 9-Year Recidivism Follow-up Report</a></li>
                <li><a href="https://time.com/6170864/cause-of-death-children-guns/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">TIME: Gun Deaths and Youth Mortality</a></li>
                <li><a href="https://publichealth.jhu.edu/2024/guns-remain-leading-cause-of-death-for-children-and-teens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Johns Hopkins: Guns Now #1 Cause of Death Among Youth</a></li>
                <li><a href="https://publichealth.jhu.edu/center-for-gun-violence-solutions/annual-gun-violence-data-2022" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Gun Violence Data 2022 (Hopkins)</a></li>
                <li><a href="https://www.health.com/surgeon-general-gun-violence-public-health-8670305" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Health.com: Gun Violence Declared a Public Health Crisis</a></li>
                <li><a href="https://everytownresearch.org/graph/firearms-are-the-leading-cause-of-death-for-american-children-and-teens/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Everytown: Firearms Leading Cause of Death for Children</a></li>
                <li><a href="https://www.nhtsa.gov/risky-driving/drunk-driving" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">NHTSA: Drunk Driving Data</a></li>
              </ul>
            </div>
          </section>
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

export default RegisterAllFelons;