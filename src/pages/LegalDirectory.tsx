import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function LegalDirectory() {
  return (
    <div className="bg-white">
      <SEO 
        title="Legal Directory - Find Sex Offense Defense Attorneys | The SOLAR Project"
        description="Find qualified criminal defense attorneys who specialize in sex offense cases. Connect with experienced legal professionals who understand the unique challenges of sex offense law."
        keywords="sex offense defense attorneys, criminal defense lawyers, sex offense legal representation, qualified defense attorneys, sex crime lawyers, legal directory"
      />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Directory</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find qualified attorneys who specialize in sex offense cases and understand 
              the unique challenges involved.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-12">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Directory Coming Soon</h2>
              <p className="text-lg text-blue-800 font-semibold mb-6">Connecting You with Specialized Legal Expertise</p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-gray-700 mb-6 text-lg">
                We're building a comprehensive directory of attorneys who truly understand the complexities 
                of sex offense law and the unique challenges faced by individuals and families navigating 
                this legal landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Vetted Professionals</h3>
                  <p className="text-gray-600 text-sm">
                    Carefully screened attorneys with proven experience in sex offense cases
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
                  <p className="text-gray-600 text-sm">
                    Find qualified representation in your state and local area
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Attorneys focused on registry issues, appeals, and constitutional challenges
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparent Information</h3>
                  <p className="text-gray-600 text-sm">
                    Clear details about experience, specialties, and client reviews
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8">
                Our directory will feature detailed profiles, client reviews, and direct contact information 
                to help you make informed decisions about legal representation. We understand that finding 
                the right attorney is crucial to your case and your future.
              </p>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Launching Soon
              </div>
              
              <p className="text-gray-600">
                Want to be notified when the directory launches? 
                <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold ml-1">
                  Contact us
                </Link> to join our notification list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Attorneys Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Are You an Attorney?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're actively seeking qualified attorneys who specialize in sex offense law to join our directory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reach More Clients</h3>
              <p className="text-gray-600">
                Connect with individuals and families who need your specialized expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vetted Platform</h3>
              <p className="text-gray-600">
                Be part of a carefully curated directory that clients can trust.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make an Impact</h3>
              <p className="text-gray-600">
                Help individuals navigate complex legal challenges and rebuild their lives.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply to Join Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Help Now?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            While our directory is being built, we can still help connect you with qualified legal representation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us for Referrals
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LegalDirectory;