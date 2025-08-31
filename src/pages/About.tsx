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
        title="About The SOLAR Project - Sex Offender Legal Advocacy & Reform"
        description="Learn about The SOLAR Project's mission to provide legal advocacy, resources, and support for individuals affected by sex offense laws. Our commitment to justice, reform, and constitutional rights."
        keywords="about SOLAR project, sex offender advocacy organization, legal reform mission, constitutional rights advocacy, registry reform organization"
      />

      {/* Hero Section */}
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
              <strong>S</strong>ex <strong>O</strong>ffenses: <strong>L</strong>earning, <strong>A</strong>dvocacy, and <strong>R</strong>esources — <strong>S</strong>upporting, <strong>O</strong>rganizing, <strong>L</strong>eading, <strong>A</strong>dvancing, and <strong>R</strong>eforming for constitutional rights, effective public safety, and evidence-based policy.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The SOLAR Project was founded on the belief that everyone deserves accurate information, 
              fair treatment, and access to justice. We provide comprehensive resources for individuals 
              affected by sex offense laws and their families, while advocating for sensible reform 
              and constitutional protections.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our work is guided by evidence-based research, constitutional principles, and a deep 
              commitment to human dignity. We believe that effective advocacy requires both compassion 
              and expertise, which is why we combine legal knowledge with lived experience to create 
              meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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