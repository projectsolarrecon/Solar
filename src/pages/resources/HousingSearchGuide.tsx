    import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function HousingSearchGuide(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Quick-Start Housing Guide for People on the Registry | The SOLAR Project"
        description="Practical strategies for finding housing with registry restrictions. Step-by-step guide covering rules, applications, landlord communication, and compliance requirements."
        keywords="housing search, sex offender registry, housing restrictions, landlord communication, housing compliance, residency restrictions, reentry housing"
      />

      {/* Add JSON-LD structured data for enhanced SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Quick-Start Housing Guide for People on the Registry",
          "description": "Step-by-step guide for finding housing with registry restrictions and supervision requirements",
          "totalTime": "PT30M",
          "supply": ["Phone", "Paper folder", "Maps", "References"],
          "tool": ["Compliance documentation", "Application materials"],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Map the Rules",
              "text": "Call registry office and supervision officer to understand restrictions and requirements"
            },
            {
              "@type": "HowToStep", 
              "name": "Build a Shortlist",
              "text": "Use offline and low-tech methods to find potential housing options"
            },
            {
              "@type": "HowToStep",
              "name": "Contact Landlords",
              "text": "Use proven scripts and timing for disclosure and applications"
            }
          ]
        })}
      </script>

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
              Housing Guide
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Quick-Start Housing Guide for People on the Registry
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Find housing that's affordable, safe, and compliant with residency and supervision rules—without wasting time on dead ends.
          </p>
          
          <p className="text-lg text-slate-100 mb-8 max-w-3xl">
            This practical guide provides step-by-step strategies for navigating housing restrictions, communicating with landlords, and securing stable housing for individuals and families affected by registry requirements.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Save as PDF
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-6">
        
        {/* Section 1: Know Your Restrictions */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold">Know Your Restrictions (Before You Start)</h2>
                <p className="text-slate-200">Understanding your legal requirements and limitations</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get clarity on:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span><strong>Distance requirements:</strong> How far from schools, parks, daycares, etc.? (varies by state/county)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>How distance is measured:</strong> Property line to property line? Front door to front door? As the crow flies or driving distance?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Supervision conditions:</strong> Officer approval required? Curfew considerations? Internet restrictions?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span><strong>Local ordinances:</strong> Some cities/counties have additional rules beyond state law.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tip</h3>
                <p className="text-blue-700">
                  <strong>Print out your specific restrictions</strong> and keep them in a "HOUSING COMPLIANCE" folder. Include maps showing buffer zones around restricted sites. This prevents costly mistakes and shows landlords you're proactive about compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mapping & Research Tools */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold">Mapping & Research Tools</h2>
                <p className="text-slate-200">Using technology to find compliant housing options</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Free mapping resources:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span><strong>Google Maps:</strong> Search "schools near [address]" and "parks near [address]" to spot-check distances.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span><strong>County GIS websites:</strong> Many counties offer free property mapping with school district overlays.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span><strong>State education department websites:</strong> Often have school locator tools with exact addresses.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Important Note</h3>
                <p className="text-yellow-700">
                  <strong>Always verify distances with official tools or professional measurement.</strong> Online maps can be inaccurate, and a few feet can mean the difference between compliance and violation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Where to Look */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold">Where to Look (Beyond Craigslist)</h2>
                <p className="text-slate-200">Expanding your search beyond obvious sources</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Online platforms:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Facebook Marketplace (housing section)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Zillow Rentals
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apartments.com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Local newspaper classified sections (online)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Offline/community sources:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Drive neighborhoods with "For Rent" signs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Community bulletin boards (libraries, grocery stores)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Faith communities and reentry organizations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Word-of-mouth through support networks
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">🎯 Strategy Tip</h3>
              <p className="text-indigo-700">
                <strong>Focus on areas with fewer restrictions first.</strong> Rural areas, industrial zones, and older neighborhoods often have fewer schools and parks nearby. Start your search in these areas to maximize your options.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: The Application Process */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                4
              </div>
              <div>
                <h2 className="text-2xl font-bold">The Application Process: Honesty vs. Strategy</h2>
                <p className="text-slate-200">Navigating disclosure and background checks</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Two main approaches:</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-3">Upfront Disclosure</h4>
                    <p className="text-green-700 text-sm mb-3">
                      <strong>Pros:</strong> Builds trust, avoids surprises, shows responsibility
                    </p>
                    <p className="text-green-700 text-sm">
                      <strong>Cons:</strong> May face immediate rejection before you can explain your situation
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">Application First</h4>
                    <p className="text-blue-700 text-sm mb-3">
                      <strong>Pros:</strong> Gets your foot in the door, allows you to make a personal impression first
                    </p>
                    <p className="text-blue-700 text-sm">
                      <strong>Cons:</strong> May feel deceptive, could damage trust if discovered
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">📋 Application Checklist</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Government-issued ID
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Proof of income (pay stubs, benefits letter)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Employment verification
                    </li>
                  </ul>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      References (personal and professional)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Previous rental history
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Application fee (cash or money order)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: HOA / Condo Boards */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                5
              </div>
              <div>
                <h2 className="text-2xl font-bold">HOA / Condo Boards: Do Your Homework Up Front</h2>
                <p className="text-slate-200">Understanding association rules before you commit</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before you sign (rent or buy):</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span><strong>Ask for the CC&Rs and Rules & Regs.</strong> Look for: occupancy limits, guest rules, pool/playground buffers, curfews, background checks, and minimum lease terms.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Request a written statement</strong> from the HOA that no HOA rule creates a residency conflict.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">One-paragraph request to HOA manager:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 italic">
                    "I'm considering living at [address/unit]. Can you confirm in writing that the association rules do not prohibit my occupancy based on registry status and that the property is not within any restricted buffer zones under local law?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Buying a Home */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                6
              </div>
              <div>
                <h2 className="text-2xl font-bold">Buying a Home (If You Can)</h2>
                <p className="text-slate-200">Steps to avoid costly mistakes when purchasing property</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sequence that prevents costly mistakes:</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li><strong>Pre-clear the address</strong> with your officer before making an offer.</li>
                  <li><strong>Add a contract contingency:</strong> "Subject to buyer's confirmation of compliance with all residency/supervision restrictions within 10 business days."</li>
                  <li><strong>Order a title/plat map</strong> and mark distances to schools/parks/daycares.</li>
                  <li><strong>If in an HOA,</strong> get written clearance (see Section 5).</li>
                </ol>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">Low-cost options to explore:</h3>
                <ul className="text-indigo-700 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Manufactured homes on deeded lots outside restricted zones
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tiny homes/modulars where permitted (confirm local codes)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Land + RV as a temporary legal address while you build/convert
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Supervision Realities */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                7
              </div>
              <div>
                <h2 className="text-2xl font-bold">Supervision Realities (Probation/Parole/Federal SR)</h2>
                <p className="text-slate-200">Working effectively with supervision requirements</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address approval packet (what officers like to see):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full address with unit number and landlord contact
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Names/ages of all occupants
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Floor plan or a hand sketch (note doors/windows/bedrooms)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    A note on devices/internet plan
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Work schedule and curfew plan
                  </li>
                </ul>
              </div>
              
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-teal-900 mb-3">Officer check-in script:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-teal-400">
                  <p className="text-gray-700 italic text-sm">
                    "I'm considering [address]. It's [X] feet from the nearest restricted site. Landlord is [name], move-in is [date]. Here are floor plan notes and tenant rules. Anything else you need for approval?"
                  </p>
                </div>
                <p className="text-teal-700 text-sm mt-3">
                  <strong>Document approvals in writing</strong> (email/letter). Keep a copy in your HOUSING COMPLIANCE folder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Internet & Devices */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                8
              </div>
              <div>
                <h2 className="text-2xl font-bold">Internet & Devices: Finding Housing Without Being Online</h2>
                <p className="text-slate-200">Workarounds for restricted internet access</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                For many registrants, the immediate barrier isn't risky Wi-Fi—it's not being allowed to browse listings at all. Here's how to work around:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-900 mb-4">Workaround Strategies:</h3>
                <ul className="space-y-3 text-cyan-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span><strong>Designate a "Housing Scout."</strong> A family member, friend, case worker, or faith volunteer who searches, prints listings, and makes call sheets for you.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span><strong>Ask libraries to print emailed listings</strong> for pickup (you don't have to browse).</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span><strong>Realtor partner:</strong> Some agents will pre-screen addresses for compliance and bring printed packets to showings.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span><strong>Phone-first approach:</strong> Many private owners list with a yard sign only. Drive target neighborhoods outside buffers and call numbers posted.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Compliance note for leases:</h3>
                <p className="text-yellow-700 text-sm">
                  If your supervision restricts devices, ask your officer for a written exception for a basic phone or a restricted-use device (e.g., whitelist sites only) for housing tasks—or have all digital communications run through your scout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference Checklist */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quick Compliance Checklist (Tear-off)</h2>
                <p className="text-slate-200">Essential items to verify before signing any lease</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Printed maps/rules + how distance is measured</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Officer's address approval requirements (in writing)</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Paper application + ID + proof of income</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>References (employer, prior landlord, mentor/faith leader)</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Plan for deposit/co-signer</span>
                  </label>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>If HOA/condo: CC&Rs reviewed + written OK</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Lease clauses checked (no vague "complaint = eviction")</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Internet/device plan that fits supervision rules</span>
                  </label>
                  <label className="flex items-center text-emerald-700">
                    <input type="checkbox" className="mr-3 h-4 w-4 text-emerald-600 rounded" />
                    <span>Backup short-term address pre-cleared</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                📝
              </div>
              <div>
                <h2 className="text-2xl font-bold">One-Page Templates (Ready to Copy)</h2>
                <p className="text-slate-200">Copy-paste scripts for common housing situations</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">A) Landlord Intro (text or voicemail):</h3>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <p className="text-gray-700 italic text-sm">
                    "Hello, I'm interested in the unit at [address]. I have stable income and references and can move [date]. I do have a past offense and am on the registry; I follow all rules and can provide a note from my officer confirming address compliance. I'm happy to offer a larger deposit. When may I see the unit?"
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">B) Officer Approval Request (note):</h3>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 italic text-sm">
                    "I'm seeking approval to reside at [address]. It is [distance] from the nearest restricted site. Landlord is [name/phone]. Occupants: [list]. Proposed move-in: [date]. Internet/devices: [plan]. Please advise if additional documentation is required."
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">C) HOA Confirmation Email:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 italic text-sm">
                    "I'm considering [address/unit]. Could you confirm in writing that association rules do not prohibit my occupancy based on registry status and that no HOA rule conflicts with local residency restrictions?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="p-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Final Thoughts</h2>
              <div className="space-y-4 text-blue-800">
                <p className="text-lg">
                  <strong>Speed beats perfection.</strong> Get one compliant address into your officer's inbox; iterate if needed.
                </p>
                <p className="text-lg">
                  <strong>Paper beats promises.</strong> Keep everything in the HOUSING COMPLIANCE folder.
                </p>
                <p className="text-lg">
                  <strong>People help people.</strong> A housing scout and two strong references often do more than a dozen online clicks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .print\\:py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .print\\:pb-4 { padding-bottom: 1rem !important; }
          .print\\:mb-8 { margin-bottom: 2rem !important; }
          .print\\:mb-6 { margin-bottom: 1.5rem !important; }
          .print\\:mt-8 { margin-top: 2rem !important; }
          .print\\:space-y-6 > * + * { margin-top: 1.5rem !important; }
          .print\\:text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
          .print\\:text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
          .print\\:text-xs { font-size: 0.75rem !important; line-height: 1rem !important; }
          .print\\:w-8 { width: 2rem !important; }
          .print\\:h-8 { height: 2rem !important; }
          .print\\:text-base { font-size: 1rem !important; line-height: 1.5rem !important; }
          .print\\:p-6 { padding: 1.5rem !important; }
          .print\\:p-4 { padding: 1rem !important; }
          .print\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)) !important; }
          .print\\:gap-4 { gap: 1rem !important; }
          
          body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}