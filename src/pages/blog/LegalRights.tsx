  import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function LegalRights() {
  return (
    <div className="bg-white">
      <SEO 
        title="Legal Rights of Individuals Accused or Convicted of Sex Offenses: A Step-by-Step Guide | The SOLAR Project"
        description="A comprehensive guide to constitutional rights for individuals accused or convicted of sex offenses, from investigation through reentry. Know your rights at every stage of the legal process."
        keywords="sex offense legal rights, constitutional rights, Miranda rights, Fourth Amendment, Fifth Amendment, Sixth Amendment, Eighth Amendment, SORNA, sex offender registration, criminal defense, due process, legal representation, prisoner rights, reentry rights"
      />

      {/* Add JSON-LD structured data for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Legal Rights of Individuals Accused or Convicted of Sex Offenses: A Step-by-Step Guide",
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
          "datePublished": "2025-07-19",
          "dateModified": "2025-07-19",
          "description": "A comprehensive guide to constitutional rights for individuals accused or convicted of sex offenses, from investigation through reentry.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solarproject.org/blog/legal-rights"
          },
          "keywords": ["legal rights", "constitutional rights", "sex offense defense", "criminal law", "due process", "SORNA"],
          "articleSection": "Legal Guide",
          "wordCount": 1600
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
              Legal Rights
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Understanding Your Legal Rights During Investigation
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            What you need to know about your constitutional protections when facing a sex offense investigation
          </p>
          
          <div className="flex items-center text-sm text-slate-300">
            <span className="flex items-center mr-6">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 min read
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              December 8, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Constitutional Rights", "Legal Defense", "Due Process", "Criminal Law", "SORNA", "Prisoner Rights", "Reentry Law"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Even when facing deeply stigmatized charges, individuals accused or convicted of sex offenses in the United States retain fundamental rights under the Constitution. From the earliest stages of investigation through incarceration and eventual reentry, these rights are crucial to ensuring fairness, dignity, and due process. Here's a comprehensive breakdown of those rights—backed by reliable sources and designed to help those affected understand what protections they still have.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔍</span>
              Investigation Stage: Know Your Rights Before You're Charged
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Even if you haven't been arrested, you still have constitutional protections. The <a href="https://www.law.cornell.edu/constitution/fifth_amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Fifth Amendment</a> protects your right to remain silent. You do not have to talk to police or answer questions without a lawyer. The <a href="https://www.law.cornell.edu/wex/fourth_amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Fourth Amendment</a> protects you from warrantless searches of your home, phone, computer, or other personal property.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're approached by law enforcement—especially in online contexts—do not interact or respond without consulting a lawyer. Many cases begin with proactive undercover work and task forces focused on online offenses; see the DOJ's <a href="https://ojjdp.ojp.gov/programs/internet-crimes-against-children-icac-task-force-program" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Internet Crimes Against Children Task Force Program</a> for context on how investigations are initiated.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🚔</span>
              Arrest & Booking: What You're Entitled To
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once you are formally arrested, law enforcement must read you your <a href="https://www.oyez.org/cases/1965/759" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Miranda rights (Miranda v. Arizona)</a>, including the right to remain silent and the right to an attorney. You must also be informed of the charges against you. In many cases, you have the right to a bail hearing, though judges may deny bail or set high amounts in sex offense cases. These decisions should be based on the alleged offense and risk to the community—not stigma alone.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">⚖️</span>
              Pre-Trial Rights & Legal Representation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The <a href="https://www.law.cornell.edu/constitution/sixth_amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Sixth Amendment</a> guarantees the right to a fair and speedy trial, legal counsel, and to confront your accusers. Your defense attorney has the right to review all evidence against you (called discovery), file motions to suppress unlawful evidence, and negotiate a plea deal if appropriate. For a plain-English overview of how a criminal case proceeds, see the NACDL's <a href="https://www.nacdl.org/GettingStarted/WhatHappensInACriminalCase" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">What Happens in a Criminal Case?</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏛️</span>
              Trial: Defending Your Rights in Court
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You are presumed innocent until proven guilty beyond a reasonable doubt. You have the right to a jury trial, to present your defense, to call witnesses, and to remain silent if you choose. Your attorney can challenge the prosecution's evidence and cross-examine witnesses. In sex offense cases, this stage often involves complex testimony and forensic evidence—experienced legal counsel is essential.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏢</span>
              Sentencing & Incarceration: What to Expect After Conviction
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sentencing</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              After conviction, you have the right to be heard at sentencing. You can present mitigating evidence—such as community support, mental health issues, or remorse—to argue for a reduced sentence. You also have the right to appeal a conviction or sentence if legal errors occurred.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">While Incarcerated</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              You retain basic human rights while incarcerated. The <a href="https://www.law.cornell.edu/wex/eighth_amendment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Eighth Amendment</a> protects you from cruel or unusual punishment. Prisons must provide necessary medical and mental health care. Those convicted of sex crimes often require protective custody and access to appropriate treatment programs. See the Columbia Law School's <a href="https://jlm.law.columbia.edu/files/2017/05/48.-Ch.-36.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Jailhouse Lawyer's Manual: Medical Care and Conditions of Confinement</a> for a detailed overview of prisoner rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📋</span>
              Post-Release & Sex Offender Registration (SORNA)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The <a href="https://smart.ojp.gov/sorna/current-law" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Sex Offender Registration and Notification Act (SORNA)</a> requires many individuals convicted of sex offenses to register with law enforcement, sometimes for life. This includes providing personal information, addresses, employer data, and in some cases, internet identifiers. Each state implements this differently, but the federal law sets a tier-based minimum standard. Learn more about the <a href="https://smart.ojp.gov/sorna/tier-system" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">tier system</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📜</span>
              Constitutional Rights After Conviction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Even post-conviction, some rights remain. In <a href="https://www.oyez.org/cases/2016/15-1194" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Packingham v. North Carolina (2017)</a>, the Supreme Court ruled that blanket bans on access to social media for registered individuals violated the First Amendment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              You also have the right to challenge errors in your registration status and, in some states, to seek removal after a certain time. Voting rights are restored automatically or by application in many jurisdictions after sentence completion; see the National Conference of State Legislatures' guide on <a href="https://www.ncsl.org/elections-and-campaigns/felon-voting-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">felon voting rights by state</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🛡️</span>
              Reform, Advocacy & Human Rights Concerns
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organizations like <a href="https://www.hrw.org/report/2007/09/11/no-easy-answers/sex-offender-laws-us" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Human Rights Watch</a> have long criticized broad registration laws as overly punitive and often ineffective. Registries can result in housing bans, job loss, and even violence. Evidence and reportage also question public-safety benefits; see <a href="https://www.themarshallproject.org/2022/09/21/sex-offender-registries-don-t-work-why-do-we-keep-them" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">The Marshall Project</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📊</span>
              Key Takeaways
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-blue-900">Stage</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-blue-900">Your Rights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Investigation</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Silence, attorney, privacy</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Arrest</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Miranda, charge info, bail</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Pre-Trial</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Counsel, discovery, trial rights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Trial</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Jury, defense, silence</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Sentencing</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Mitigation, appeal</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Incarceration</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Medical care, safety, rights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">Reentry & Registry</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Free speech, voting (state-dependent), due process</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Legal Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important Legal Disclaimer:</strong> This guide provides general information about constitutional rights and should not be considered legal advice. Laws vary by jurisdiction and change over time. Always consult with a qualified attorney for advice specific to your situation.
                </p>
              </div>
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
                to="/legal-directory" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Find Legal Help
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

export default LegalRights;