import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Dignity",
      description: "Every person deserves to be treated with respect and dignity, regardless of their past.",
      icon: "👥"
    },
    {
      title: "Justice",
      description: "We advocate for fair treatment and constitutional rights for all individuals.",
      icon: "⚖️"
    },
    {
      title: "Education",
      description: "Knowledge is power. We provide accurate information to help people make informed decisions.",
      icon: "📚"
    },
    {
      title: "Support",
      description: "No one should navigate the legal system alone. We connect people with resources and community.",
      icon: "🤝"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="About The SOLAR Project - Sex Offense Learning, Advocacy & Resources"
        description="Learn how The SOLAR Project supports change: Supporting, Organizing, Leading, Advancing, Reforming — providing Sex Offense Learning, Advocacy, and Resources — to realize Safety, Opportunity, Liberty, Accountability, and Redemption."
        keywords="SOLAR Project, about, Supporting Organizing Leading Advancing Reforming, Sex Offense Learning Advocacy Resources, Safety Opportunity Liberty Accountability Redemption"
      />

      {/* Hero (updated) */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                Our Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About The SOLAR Project</h1>
            
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              We exist to <strong>Support, Organize, Lead, Advance, and Reform</strong> — providing <strong>Sex Offense Learning, Advocacy, and Resources</strong> — to realize a future of <strong>Safety, Opportunity, Liberty, Accountability, and Redemption</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* New condensed About narrative */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              At <strong>The SOLAR Project</strong>, our name isn’t just a label — it’s our blueprint. We bring people together, confront misinformation with research, and translate lived experience into policy reform that strengthens real public safety and restores dignity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We shine light where there’s been only shadow: replacing stigma with knowledge, fear with compassion, and permanent punishment with evidence-based paths toward stability and community safety.
            </p>
          </div>
        </div>
      </section>

      {/* Triple SOLAR cards */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Supporting, Organizing, Leading, Advancing, Reforming */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 text-xl mr-3">✨</span>
                  <h3 className="text-xl font-bold text-slate-900">Supporting • Organizing • Leading • Advancing • Reforming</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  We exist to <strong>Support, Organize, Lead, Advance, and Reform</strong> — uniting people and communities to challenge harmful laws, provide solidarity, and build a safer, more just future.
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li>🤝 Support: community, resources, and navigation</li>
                  <li>🧩 Organize: coalitions and credible advocacy</li>
                  <li>🧪 Lead: evidence over myth</li>
                  <li>🛡️ Advance: prevention, treatment, stability</li>
                  <li>⚙️ Reform: laws that perpetuate harm</li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <div className="mt-4 p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-sm">
                  Purpose in action: people-first, data-driven, reform-ready.
                </div>
              </div>
            </div>

            {/* Card 2: Sex Offense Learning, Advocacy, Resources */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600 text-xl mr-3">📚</span>
                  <h3 className="text-xl font-bold text-slate-900">Sex Offense Learning • Advocacy • Resources</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Our promise is to provide <strong>Sex Offense Learning, Advocacy, and Resources</strong> — confronting misinformation with research, speaking out for evidence-based reform, and offering practical tools for individuals and families.
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li>📖 Learning: accurate info & plain-language guides</li>
                  <li>📣 Advocacy: person-first, evidence-based policy</li>
                  <li>🧭 Resources: housing, work, travel, compliance</li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                  People are more than their worst act — language and policy should reflect that truth.
                </div>
              </div>
            </div>

            {/* Card 3: Safety, Opportunity, Liberty, Accountability, Redemption */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 text-xl mr-3">🌱</span>
                  <h3 className="text-xl font-bold text-slate-900">Safety • Opportunity • Liberty • Accountability • Redemption</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  The future we fight for is one of <strong>Safety, Opportunity, Liberty, Accountability, and Redemption</strong> — where safety is real (not performative), opportunity and dignity are restored, liberty is protected, accountability is fair, and redemption is truly possible.
                </p>
                <ul className="text-slate-700 space-y-2">
                  <li>🔒 Safety: focus on actual risk, not stigma</li>
                  <li>💼 Opportunity: remove barriers to stability</li>
                  <li>🗽 Liberty: uphold constitutional limits</li>
                  <li>⚖️ Accountability: evidence-based and mutual</li>
                  <li>🌿 Redemption: second chances that strengthen safety</li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
                  A vision that turns fear into safety — and exclusion into belonging.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-slate-100">
              Making a difference in the lives of individuals and families
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800 rounded-lg p-12 border-2 border-slate-600">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-500 text-white rounded-full mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Measuring Our Impact</h3>
                <p className="text-lg text-slate-100 mb-6">
                  We're Currently Tracking Our Progress
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-slate-100 mb-6">
                  As a growing organization, we're implementing comprehensive systems to measure 
                  and document the real impact of our work. We believe in transparency and 
                  accountability, which is why we're taking the time to establish meaningful 
                  metrics that truly reflect the lives we're touching and the changes we're creating.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="text-slate-200 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">People Served</h4>
                    <p className="text-slate-200 text-sm">
                      Tracking individuals and families who receive our resources and support
                    </p>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="text-slate-200 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Successful Outcomes</h4>
                    <p className="text-slate-200 text-sm">
                      Measuring positive legal outcomes and life improvements
                    </p>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="text-slate-200 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Policy Advocacy</h4>
                    <p className="text-slate-200 text-sm">
                      Documenting our legislative and policy reform efforts
                    </p>
                  </div>
                  
                  <div className="bg-slate-600 p-6 rounded-lg">
                    <div className="text-slate-200 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Educational Reach</h4>
                    <p className="text-slate-200 text-sm">
                      Tracking our educational resources and community outreach
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-100">
                  Our comprehensive impact report will be available soon, showcasing the tangible 
                  difference The SOLAR Project is making in communities across the country. 
                  We're committed to evidence-based advocacy and transparent reporting of our progress.
                </p>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-slate-500 text-white rounded-lg font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Impact Report Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need support, want to volunteer, or are interested in our advocacy work, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              to="/resources"
              className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
