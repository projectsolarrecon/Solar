import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function JobSearchGuide(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Employment Strategies for Individuals on the Sex Offender Registry | The SOLAR Project"
        description="A practical guide for navigating employment restrictions and building a sustainable career. Learn job search strategies, resume tips, and employer communication scripts for registry individuals."
        keywords="employment strategies, job search, sex offender registry, career building, resume tips, employer communication, vocational training, employment restrictions"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
              Employment Guide
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Employment Strategies for Individuals on the Sex Offender Registry
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            A Practical Guide for Navigating Restrictions and Building a Sustainable Career
          </p>
          
          <p className="text-lg text-slate-100 mb-8 max-w-3xl">
            This comprehensive guide provides practical strategies for job searching, resume building, interview preparation, and career development for individuals affected by registry requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Guide
            </button>
            <button
              onClick={handlePrint}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors shadow-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-3">Important Notice</h2>
              <p className="text-blue-700">
                Finding employment with registry restrictions requires strategy and persistence, but it's absolutely achievable. This guide provides practical, tested methods to help you build a sustainable career. <strong>Always verify local employment restrictions and supervision requirements, as they vary by jurisdiction.</strong>
              </p>
            </div>
          </div>

          <div className="space-y-12">
            
            {/* Section 1: Understanding Your Legal Landscape */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Understanding Your Legal Landscape</h2>
                    <p className="text-slate-200">Know your restrictions before you start searching</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Before job searching, clarify your employment restrictions:</h3>
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span><strong>State & local laws</strong> – Some prohibit work in schools, child care, healthcare, security, or positions involving minors.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span><strong>Supervision conditions</strong> – Parole/probation rules may further limit work location, hours, or internet use.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span><strong>Check before applying</strong> – When in doubt, speak to your supervising officer or consult your jurisdiction's registry statutes.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-semibold text-blue-800">Pro Tip</h4>
                    </div>
                    <p className="text-blue-700">
                      Keep a printed copy of your specific restrictions handy. This helps avoid accidental violations and reassures employers that you are proactive about compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Translating Skills */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Translating Prison Programming into Marketable Skills</h2>
                    <p className="text-slate-200">Turn your experience into valuable qualifications</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Many in-custody programs translate directly into valuable job qualifications:</h3>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span><strong>Vocational training:</strong> Carpentry, welding, HVAC, culinary arts, electrical, automotive repair.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span><strong>Clerical & administrative skills:</strong> Typing, data entry, inventory management.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span><strong>Peer leadership:</strong> Facilitating groups, tutoring, mentoring — shows leadership and communication skills.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        <span><strong>Work release or prison industries:</strong> These often match real-world job functions.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      <h4 className="font-semibold text-green-800">Resume Tip</h4>
                    </div>
                    <p className="text-green-700 mb-4">
                      Instead of listing "Prison Vocational Program," frame it like this:
                    </p>
                    <div className="bg-white p-4 rounded border border-green-200">
                      <p className="font-semibold text-gray-900">Carpentry Trainee – 1,200 hours</p>
                      <p className="text-gray-700 italic mb-2">Department of Corrections Vocational Training Program, 2022–2023</p>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Completed OSHA safety certification</li>
                        <li>Constructed furniture and completed finish carpentry for institutional use</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Resume Strategies */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Resume Strategies</h2>
                    <p className="text-slate-200">Present your strengths effectively</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Keep it strengths-based and forward-looking:</h3>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span><strong>Lead with skills, not chronology</strong> — a "Functional Resume" format can minimize gaps.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><strong>Highlight any certifications, apprenticeships, or college coursework</strong> completed.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span><strong>Include volunteer work, even inside</strong> — community reentry programs value soft skills.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Functional Resume Structure:</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li><strong>Contact Info</strong> (phone, professional email)</li>
                      <li><strong>Professional Summary</strong> – 2–3 lines emphasizing reliability, skill, and motivation.</li>
                      <li><strong>Core Skills</strong> – Bullet list of relevant abilities.</li>
                      <li><strong>Relevant Experience</strong> – Grouped by skill category (e.g., "Construction Experience," "Administrative Experience")</li>
                      <li><strong>Education & Certifications</strong></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Job Sectors */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Job Sectors with Fewer Restrictions</h2>
                    <p className="text-slate-200">Focus your search on registry-friendly fields</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Generally registry-friendly fields (confirm locally):</h3>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span><strong>Skilled Trades:</strong> Construction, painting, welding, HVAC, electrical work.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span><strong>Manufacturing & Warehousing:</strong> Forklift operation, assembly lines, machine operators.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                        <span><strong>Transportation:</strong> Some CDL jobs possible with clearance.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                        <span><strong>Food Service:</strong> Kitchens, catering, food trucks (check local health licensing rules).</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        <span><strong>Self-Employment:</strong> Landscaping, handyman, online services (with internet clearance).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <h4 className="font-semibold text-blue-800">Resources</h4>
                    </div>
                    <ul className="list-disc pl-5 text-blue-700 space-y-2">
                      <li><strong>Honest Jobs</strong> – Felony-friendly employers, with some registry-specific filters.</li>
                      <li><strong>National HIRE Network</strong> – Employment and reentry resources.</li>
                      <li><strong>70MillionJobs</strong> – Second chance employment platform.</li>
                      <li><strong>American Job Centers</strong> – Free federal employment services.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Approaching Employers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Approaching Employers: Conversation Scripts</h2>
                    <p className="text-slate-200">Strategic disclosure and communication</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">When disclosure is required or you choose to be upfront:</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-3">Initial conversation (brief & forward-focused):</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-green-400">
                          <p className="text-green-700 italic">
                            "Before we proceed, I want to be transparent about something that will come up in a background check. I made a serious mistake in my past, and I've worked hard to rebuild my life and skills since then. I'm fully compliant with all laws, and I'm committed to being a dependable and valuable member of your team."
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-3">When asked about gaps in work history:</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                          <p className="text-blue-700 italic">
                            "During that time, I was in a structured environment where I completed vocational training and developed skills in [skill], [skill], and [skill]. I'm ready to put those to work in a productive role."
                          </p>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-800 mb-3">If the employer asks about restrictions:</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                          <p className="text-purple-700 italic">
                            "My restrictions don't affect my ability to perform the duties of this job. I'm happy to provide documentation if needed so you can be confident about compliance."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Interview Strategies */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    6
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Interview Strategies</h2>
                    <p className="text-slate-200">Turn challenges into strengths</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key principles:</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span><strong>Focus on value, not your past</strong> – Keep responses forward-looking.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span><strong>Prepare for the hard questions</strong> – Practice with a trusted friend or reentry counselor.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span><strong>Body language matters</strong> – Eye contact, calm posture, and listening skills help build trust.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span><strong>Turn "weakness" into motivation</strong> – "That experience taught me discipline and responsibility, which I bring to every job I take."</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-semibold text-cyan-800">Interview Preparation</h4>
                    </div>
                    <p className="text-cyan-700 text-sm mb-3">
                      Practice the STAR method (Situation, Task, Action, Result) for behavioral questions. Have specific examples ready that demonstrate:
                    </p>
                    <ul className="text-cyan-700 text-sm space-y-1">
                      <li>• Problem-solving abilities</li>
                      <li>• Reliability and work ethic</li>
                      <li>• Learning from mistakes</li>
                      <li>• Commitment to positive change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: On the Job Success */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    7
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">On the Job Success: First 90 Days</h2>
                    <p className="text-slate-200">Prove your value and build trust</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Building trust and proving value:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Show up early, stay late when needed
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Ask questions and take detailed notes
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Learn everyone's name and role
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Volunteer for additional tasks
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Be consistent and reliable
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Take ownership of mistakes
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <h4 className="font-semibold text-indigo-800">Handling Challenges</h4>
                    </div>
                    <ul className="text-indigo-700 text-sm space-y-2">
                      <li><strong>If coworkers discover your background:</strong> Address it directly and professionally. Focus on your current contributions.</li>
                      <li><strong>If you face discrimination:</strong> Document incidents and speak with HR about company policies.</li>
                      <li><strong>If struggling with tasks:</strong> Ask for additional training rather than trying to figure it out alone.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8: Long-term Career Growth */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                    8
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Long-term Career Growth</h2>
                    <p className="text-slate-200">Building a sustainable career path</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Building a sustainable career path:</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Technical Skills Development:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Industry certifications
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Software proficiency
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Trade-specific training
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Soft Skills Development:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Leadership and management
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Communication and presentation
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Problem-solving and critical thinking
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-3">5-Year Career Plan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-2">Years 1-2: Foundation</h4>
                        <ul className="text-emerald-700 text-sm space-y-1">
                          <li>• Prove reliability and competence</li>
                          <li>• Build workplace relationships</li>
                          <li>• Gain industry knowledge</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-2">Years 3-4: Growth</h4>
                        <ul className="text-emerald-700 text-sm space-y-1">
                          <li>• Seek additional responsibilities</li>
                          <li>• Pursue training and certifications</li>
                          <li>• Consider leadership roles</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-2">Year 5+: Leadership</h4>
                        <ul className="text-emerald-700 text-sm space-y-1">
                          <li>• Mentor new employees</li>
                          <li>• Consider entrepreneurship</li>
                          <li>• Give back to reentry community</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Templates */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Reference Templates</h2>
            <p className="text-lg text-gray-600">
              Ready-to-use scripts for common employment situations
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">A) Cold Call Script:</h3>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-400">
                <p className="text-gray-700 italic text-sm">
                  "Hi, my name is [Name]. I'm calling about potential opportunities in [department/field]. I have [X] years of experience in [skills] and I'm committed to bringing value to your team. I do have a background I'd be happy to discuss, but I'm focused on proving my worth through hard work and reliability. Would you have a few minutes to talk about your current needs?"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">B) Follow-up Email:</h3>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-green-400">
                <p className="text-gray-700 italic text-sm">
                  "Dear [Hiring Manager], Thank you for taking the time to speak with me about the [position] role. I'm very interested in the opportunity to contribute to [company name] and bring my [specific skills] to your team. As discussed, I have a background that I take full responsibility for, and I'm committed to proving my value through consistent performance and dedication. I've attached my resume and references. I look forward to hearing from you."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">C) Reference Request:</h3>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-400">
                <p className="text-gray-700 italic text-sm">
                  "Hi [Name], I hope you're doing well. I'm actively job searching and would be honored if you'd serve as a reference for me. I'm applying for [type of positions] and would appreciate if you could speak to my [work ethic/skills/character]. I know my background may come up, and I'd be grateful if you could focus on my growth and commitment to positive change. Thank you for considering this."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Employment Resources</h2>
            <p className="text-lg text-gray-600">
              Organizations and platforms that can help with your job search
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* HonestJobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">HonestJobs</h3>
              <p className="text-gray-600 mb-4">Job board specifically for people with criminal records, including registry-specific filters.</p>
              <div className="space-y-2 text-blue-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.honestjobs.co" target="_blank" rel="noopener noreferrer" className="hover:underline">www.honestjobs.co</a>
                </p>
              </div>
            </div>

            {/* 70MillionJobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3">70MillionJobs</h3>
              <p className="text-gray-600 mb-4">Second chance employment platform connecting job seekers with fair chance employers.</p>
              <div className="space-y-2 text-green-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.70millionjobs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.70millionjobs.com</a>
                </p>
              </div>
            </div>

            {/* American Job Centers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-3">American Job Centers</h3>
              <p className="text-gray-600 mb-4">Free federal employment services including job search assistance and training programs.</p>
              <div className="space-y-2 text-purple-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" target="_blank" rel="noopener noreferrer" className="hover:underline">Find Local Centers</a>
                </p>
              </div>
            </div>

            {/* SOLAR Project */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">The SOLAR Project</h3>
              <p className="text-gray-600 mb-4">Supporting, Organizing, Learning, Advocating, and Reforming - Your source for education, advocacy, and support.</p>
              <div className="space-y-2 text-slate-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <Link to="/contact" className="hover:underline">Contact SOLAR</Link>
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <Link to="/resources" className="hover:underline">Additional Resources</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Remember</h2>
          <div className="space-y-4 text-blue-800">
            <p className="text-xl">
              <strong>Your past doesn't define your future.</strong> Every day is a chance to prove your worth and build the career you want.
            </p>
            <p className="text-xl">
              <strong>Persistence pays off.</strong> It may take time, but the right opportunity is out there for someone willing to work for it.
            </p>
            <p className="text-xl">
              <strong>You have value to offer.</strong> Focus on your strengths, learn from setbacks, and keep moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <p className="text-lg text-gray-600">
              Additional guides and resources to help you through this process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Know Your Rights Guide</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to constitutional rights and legal protections from investigation through reentry.
              </p>
              <Link to="/resources/know-your-rights" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Housing Search Guide</h3>
              <p className="text-gray-600 mb-4">
                Strategies for finding housing with registry restrictions and landlord communication tips.
              </p>
              <Link to="/resources/housing-search-guide" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Federal Process Guide</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step roadmap through the federal criminal process from investigation to registration.
              </p>
              <Link to="/resources/federal-process-guide" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800 mb-4">Legal Disclaimer</h3>
              <div className="text-yellow-700">
                <p><strong>This guide provides general information only and is not legal or professional advice.</strong> Employment laws and restrictions vary by jurisdiction. Always verify local requirements and consult with qualified professionals about your specific situation before making employment decisions. The SOLAR Project does not provide legal representation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}