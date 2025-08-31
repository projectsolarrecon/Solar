  import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function LifeOnRegistry() {
  return (
    <div className="bg-white">
      <SEO 
        title="Life on the Registry: Challenges, Adjustments, and Paths Forward | The SOLAR Project"
        description="A supportive, accurate guide for people living on the sex offender registry and their families. Practical steps, programs, and reasons for hope for registrants and supporters."
        keywords="sex offender registry life, registry challenges, registrant support, family support, reentry resources, registry adjustment, CoSA circles support, NARSOL, registry removal, tiered registration, registrant employment, housing assistance"
      />

      {/* Add JSON-LD structured data for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Life on the Registry: Challenges, Adjustments, and Paths Forward",
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
          "datePublished": "2025-07-26",
          "dateModified": "2025-07-26",
          "description": "A supportive, accurate guide for people living on the sex offender registry and their families. Practical steps, programs, and reasons for hope.",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solarproject.org/blog/life-on-registry"
          },
          "keywords": ["registry life", "registrant support", "family support", "reentry", "CoSA", "registry adjustment"],
          "articleSection": "Personal Stories",
          "wordCount": 1400
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
              Personal Stories
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Life on the Registry: Real Stories from Real People
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Understanding the human impact of sex offense registries through personal experiences and family perspectives
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              December 5, 2024
            </span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
          {["Personal Experience", "Hope", "Reintegration", "Support", "Family Resources", "Practical Guidance"].map((tag) => (
            <span key={tag} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200">
              {tag}
            </span>
          ))}
        </div>

        {/* Content with standardized typography */}
        <div className="prose prose-lg prose-blue max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔄</span>
              Adjusting to the New Reality
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The first months can feel disorienting. You may be learning about reporting schedules, residency or travel limits, and which personal details may be public. It's a lot at once. Over time, routines settle and the process becomes more manageable.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Want an overview of public-facing registry systems? The U.S. Department of Justice explains the national search portal operated by the states and tribes <a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/sex-offender-registry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">here</a>.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Offer rides or calendar reminders for check-ins and appointments.</li>
                <li>Help read and organize paperwork; build a shared checklist.</li>
                <li>Listen without judgment—early reassurance matters.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🏠</span>
              Employment and Housing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jobs and housing may take extra effort to secure. Many people succeed by looking to <strong>skilled trades</strong>, smaller employers, or <strong>self-employment</strong>. Housing often comes through trusted contacts, community groups, and persistence. Be open to stepping-stone options that build stability.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Share job leads and vouch when appropriate.</li>
                <li>Network through faith groups and local associations.</li>
                <li>Research neighborhoods and landlords open to second chances.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🤝</span>
              Social Connections and Mental Health
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Staying connected is one of the strongest predictors of long-term stability. Consider peer support, counseling, and community activities that reinforce belonging and structure.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              To find therapists familiar with criminal-justice impacts, you can start with common directories and filter for relevant experience (e.g., "reentry," "justice-involved").
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Schedule regular check-ins, meals, or shared activities.</li>
                <li>Invite—not isolate—your loved one at family events.</li>
                <li>Celebrate small wins: consistency builds confidence.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">💙</span>
              You Are Not Alone
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Advocacy and peer networks can make the journey far less isolating. These organizations offer education, support groups, and policy updates:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li className="text-lg text-gray-700">
                <strong>NARSOL – Fearless Project.</strong> Peer-led groups for registrants and their families across the U.S. <a href="https://www.narsol.org/community/fearless-project/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Learn more</a>.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Women Against Registry (W.A.R.).</strong> Family-focused resources and a support hotline (live hours listed). <a href="https://ww1.womenagainstregistry.org/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Contact W.A.R.</a> · <a href="https://en.wikipedia.org/wiki/Women_Against_Registry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">About the organization</a>.
              </li>
              <li className="text-lg text-gray-700">
                <strong>ACSOL (Alliance for Constitutional Sex Offense Laws).</strong> Legal and policy updates (California-based, with national relevance). <a href="https://all4consolaws.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">Visit ACSOL</a>.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🔗</span>
              Community-Based Support: Circles of Support & Accountability (CoSA)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <a href="https://en.wikipedia.org/wiki/Circles_of_Support_and_Accountability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">CoSA</a> pairs a "Core Member" with trained volunteers who meet regularly, provide encouragement and accountability, and help with practical needs like housing and employment. Evaluations show meaningful reductions in recidivism for participants.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              See Minnesota's randomized evaluation of CoSA outcomes <a href="https://mn.gov/doc/assets/2018%20MnCOSA%20Outcome%20Evaluation_tcm1089-326700.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">(DOC report, 2018, PDF)</a>.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>If available locally, encourage participation—or consider volunteering with a circle.</li>
                <li>CoSA expands a loved one's pro-social network and accountability.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">📈</span>
              Signs of Change
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some jurisdictions are improving access to removal petitions and refining tiered systems. For example, the California Sex Offender Management Board (CASOMB) regularly reports on tiered registration and legislative recommendations.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li className="text-lg text-gray-700">
                <a href="https://casomb.org/pdf/2024_Year_End_Report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">CASOMB Year-End Report (2024, PDF)</a>
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://casomb.org/index.cfm?pid=1214" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">CASOMB: Reports & Position Papers</a>
              </li>
              <li className="text-lg text-gray-700">
                <a href="https://all4consolaws.org/2024/01/ca-casomb-issues-report-proposing-changes-to-tiered-registry-law/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">ACSOL summary of proposed tiered-law changes (Jan 2024)</a>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Track policy shifts; timing matters for petitions and relief.</li>
                <li>Encourage compliance and documentation—it strengthens future petitions.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-3">🌟</span>
              Building a New Chapter
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Life on the registry changes the path, but not the possibility of a meaningful future. Many people build steady routines, pursue education, find purpose in work and volunteer roles, and repair relationships over time. Progress is often incremental—and that's okay.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">For families & supporters</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-2">
                <li>Celebrate small wins; show visible support during setbacks.</li>
                <li>Invite participation in community, faith, or volunteer activities.</li>
                <li>Model patience—reentry and adjustment aren't linear.</li>
              </ul>
            </div>
          </section>

          {/* Quick Links Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Links: Programs & Information</h3>
            <ul className="list-disc pl-5 text-blue-800 space-y-2">
              <li><a href="https://www.narsol.org/community/fearless-project/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">NARSOL — Fearless Project</a></li>
              <li><a href="https://ww1.womenagainstregistry.org/contact" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Women Against Registry — Contact/Hotline</a> · <a href="https://en.wikipedia.org/wiki/Women_Against_Registry" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">About W.A.R.</a></li>
              <li><a href="https://all4consolaws.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">ACSOL — Policy & Legal Updates</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Circles_of_Support_and_Accountability" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">What is CoSA?</a> · <a href="https://mn.gov/doc/assets/2018%20MnCOSA%20Outcome%20Evaluation_tcm1089-326700.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Minnesota CoSA Outcomes (PDF)</a></li>
              <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/sex-offender-registry" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">DOJ/NSOPW overview (FBI)</a></li>
              <li><a href="https://casomb.org/index.cfm?pid=1214" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">CASOMB: Reports & Positions</a></li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-gray-200 pt-6 text-sm text-gray-600">
            <p><strong>Note:</strong> Laws and procedures vary by state and may change. Always consult a qualified attorney for legal advice specific to your situation.</p>
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

export default LifeOnRegistry;