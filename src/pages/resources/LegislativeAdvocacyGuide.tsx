import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function LegislativeAdvocacyGuide(): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="SOLAR Resource Guide: Contacting Legislators & Advancing Reform | The SOLAR Project"
        description="Step-by-step SOLAR guide to contacting officials (local → federal), writing effective messages on sex-offense policy, and advocating for evidence-based reform. Includes role-based templates and trusted sources."
        keywords="SOLAR, sex offense policy, contact legislators, advocacy playbook, evidence-based reform, residency restrictions, retroactive expansions, reentry supports, transparency and data, RECON, register every convict or none, democracy.io, common cause, usa.gov, BJS, DOJ SMART, sentencing project"
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
              Advocacy Toolkit
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Legislative Advocacy Guide
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            Use this guide to quickly find your officials, choose your channel (phone or written), and make a clear, respectful, evidence-based ask. Internal links connect to SOLAR's Position Statements, the RECON stance, and our on-site script generator.
          </p>
          
          <p className="text-lg text-slate-100 mb-8 max-w-3xl">
            This resource consolidates trusted lookups, message structure, and ready-to-use scripts specific to sex-offense policy. Whether you're a registrant, family member, ally, or concerned citizen, you'll find templates, checklists, and credible citations to support safe, fair, and effective policy.
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
        
        {/* Section 1: Quick Start */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quick Start: 60 Seconds</h2>
                <p className="text-slate-200">Find your officials, pick your issue, choose your channel, personalize a template, send, and follow up.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Here (links open in a new tab):</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>☑️ Find officials (context-rich): <a href="https://www.commoncause.org/find-your-representative/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">https://www.commoncause.org/find-your-representative/</a></span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>🏛️ Official .gov directory: <a href="https://www.usa.gov/elected-officials" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">https://www.usa.gov/elected-officials</a></span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>🖥️ Open SOLAR Script Generator: <Link to="/advocacy#contact-congress" className="text-blue-600 hover:text-blue-800 underline transition-colors">/advocacy#contact-congress</Link></span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>📖 Review SOLAR Position Statements: <Link to="/advocacy#position-statement" className="text-blue-600 hover:text-blue-800 underline transition-colors">/advocacy#position-statement</Link></span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span>⚖️ Read SOLAR's RECON stance: <Link to="/advocacy#recon" className="text-blue-600 hover:text-blue-800 underline transition-colors">/advocacy#recon</Link></span>
                  </li>
                </ul>
              </div>

              {/* Pro Tip Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tip</h3>
                <p className="text-blue-700">
                  <strong>Personalize to rise to the top</strong> Staff prioritize short, specific, local messages. Add your city/ZIP and one lived-experience line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Find Who Represents You */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold">Find Who Represents You</h2>
                <p className="text-slate-200">Use these trusted tools for federal, state, and many local offices.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Lookups (final links):</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">🏛️ Federal & General:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🏛️ Common Cause: <a href="https://www.commoncause.org/find-your-representative/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🏛️ USA.gov: <a href="https://www.usa.gov/elected-officials" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🏛️ U.S. House: <a href="https://www.house.gov/representatives/find-your-representative" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🏛️ U.S. Senate: <a href="https://www.senate.gov/senators/senators-contact.htm" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        📞 Senate phone list (PDF): <a href="https://www.senate.gov/general/resources/pdf/senators_phone_list.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🏛️ Congress.gov: <a href="https://www.congress.gov/members/find-your-member" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">🌐 State & Tools:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🌐 Open States/Plural: <a href="https://open.pluralpolicy.com/find_your_legislator/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        📧 Democracy.io: <a href="https://democracy.io/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        🖥️ SOLAR Script Generator: <Link to="/advocacy#contact-congress" className="text-blue-600 hover:text-blue-800 underline transition-colors">Link</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pro Tip Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tip</h3>
                <p className="text-blue-700">
                  <strong>Match your ask to the level</strong> Local councils handle ordinances; states handle registry law and conditions; Congress handles federal funding and national standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Drafting Messages That Work */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold">Drafting Messages That Work</h2>
                <p className="text-slate-200">Keep it short, clear, respectful, and local.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The 7-Part Structure (email/letter):</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li>👤 Introduce yourself (role + city/ZIP).</li>
                    <li>📝 Make one clear ask.</li>
                    <li>📖 Cite 1–2 facts from credible sources.</li>
                    <li>👥 Add a lived-experience line.</li>
                    <li>🏘️ Explain community benefit.</li>
                    <li>📩 Request a reply or staff call.</li>
                    <li>📬 Include contact details (mailing address for Senate letters).</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Message Checklist:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-1"
                      checked={checkedItems['check-1'] || false}
                      onChange={() => toggleCheck('check-1')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-1"
                      className={`cursor-pointer ${checkedItems['check-1'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ One clear ask ("Please…")
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-2"
                      checked={checkedItems['check-2'] || false}
                      onChange={() => toggleCheck('check-2')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-2"
                      className={`cursor-pointer ${checkedItems['check-2'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ 150–250 words (email) / 1–2 minutes (call)
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-3"
                      checked={checkedItems['check-3'] || false}
                      onChange={() => toggleCheck('check-3')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-3"
                      className={`cursor-pointer ${checkedItems['check-3'] ? 'line-through text-gray-500' : ''}`}
                    >
                      📍 City/ZIP included
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-4"
                      checked={checkedItems['check-4'] || false}
                      onChange={() => toggleCheck('check-4')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-4"
                      className={`cursor-pointer ${checkedItems['check-4'] ? 'line-through text-gray-500' : ''}`}
                    >
                      👥 One sentence lived experience
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-5"
                      checked={checkedItems['check-5'] || false}
                      onChange={() => toggleCheck('check-5')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-5"
                      className={`cursor-pointer ${checkedItems['check-5'] ? 'line-through text-gray-500' : ''}`}
                    >
                      📖 One or two credible sources linked
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-6"
                      checked={checkedItems['check-6'] || false}
                      onChange={() => toggleCheck('check-6')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-6"
                      className={`cursor-pointer ${checkedItems['check-6'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ✍️ Respectful close + contact details
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="check-7"
                      checked={checkedItems['check-7'] || false}
                      onChange={() => toggleCheck('check-7')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="check-7"
                      className={`cursor-pointer ${checkedItems['check-7'] ? 'line-through text-gray-500' : ''}`}
                    >
                      📅 Calendar a follow-up in 1–2 weeks
                    </label>
                  </li>
                </ul>
              </div>

              {/* Important Note Callout */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">📌 Best-practice sources</h3>
                <p className="text-yellow-700">
                  📄 CMF recommendations: <a href="https://www.congressfoundation.org/storage/documents/CMF_Pubs/cwc_recommendationsreport.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a><br />
                  🏛️ Senate contacting guidance: <a href="https://www.senate.gov/general/contacting.htm" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a><br />
                  📖 Berkeley tips: <a href="https://guides.lib.berkeley.edu/ContactingOfficials/Tips" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Choose Your Channel */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                4
              </div>
              <div>
                <h2 className="text-2xl font-bold">Choose Your Channel</h2>
                <p className="text-slate-200">Both Phone and Email/Letter work—pick what fits the moment.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  📞 Phone is fastest before votes; be concise and repeat your ask.<br />
                  ✉️ Email/Letter leaves a durable record; include a return mailing address for Senate letters and link only 1–2 sources.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone vs. Email/Letter:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">📞 Phone</h4>
                    <div className="space-y-2 text-blue-800">
                      <p><strong>Pros:</strong> Immediate, easy to log, great pre-vote</p>
                      <p><strong>Cons:</strong> Brief, less detailed, no paper trail</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-900 mb-3">✉️ Email/Letter</h4>
                    <div className="space-y-2 text-green-800">
                      <p><strong>Pros:</strong> Detailed, citable, easy to forward</p>
                      <p><strong>Cons:</strong> Queue delays, variable forms, longer to draft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Issues & SOLAR Position Tie-Ins */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                5
              </div>
              <div>
                <h2 className="text-2xl font-bold">Issues & SOLAR Position Tie-Ins</h2>
                <p className="text-slate-200">Target your ask to one topic. Here are five high-impact issues plus SOLAR's signature RECON stance.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li>⚠️ <strong>Residency Restrictions</strong> — push families into homelessness, do not reduce harm. [DOJ SMART 2018]</li>
                  <li>📖 <strong>Evidence-Based Reform</strong> — treatment, prevention, risk-based. [SMART 2015; Sentencing Project 2024]</li>
                  <li>⚖️ <strong>Retroactive Expansions</strong> — unconstitutional, destabilizing.</li>
                  <li>🏘️ <strong>Reentry Supports</strong> — housing, jobs, family cut recidivism. [CSG Justice Center]</li>
                  <li>📊 <strong>Transparency & Data</strong> — evidence, not myth, drives policy. [SMART SOMAPI]</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Targeted Ask Checklist:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>☑️ Pick one issue</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>📖 Cite 1–2 sources</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>📍 Localize with city/ZIP</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>👥 Add lived-experience line</span>
                    </label>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>✍️ State a clear ask</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>📩 Request reply or call</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>🙏 Keep respectful tone</span>
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-3 h-4 w-4 text-green-600 rounded" />
                      <span>📅 Follow up</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: RECON */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                6
              </div>
              <div>
                <h2 className="text-2xl font-bold">RECON: Register Every Convict Or None</h2>
                <p className="text-slate-200">SOLAR's signature advocacy position: if public safety requires registries, then all convicted individuals should be registered—or none at all.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
                <ul className="space-y-3 text-violet-800">
                  <li>⚖️ <strong>The Principle:</strong> Registries single out sex-offense convictions despite lower sexual re-arrest rates than other crimes.</li>
                  <li>📊 <strong>The Evidence:</strong> BJS 9-year follow-up shows sexual re-arrest rates below those of property and drug crimes.</li>
                  <li>🚨 <strong>The Hypocrisy:</strong> Other crimes with higher reoffense rates do not have registries.</li>
                  <li>🌐 <strong>The Demand:</strong> Equal protection requires either Register Every Convict Or None.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                ✓
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quick Reference & Shortcuts (Tear-off)</h2>
                <p className="text-slate-200">Open these in a new tab while you draft.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-900">🔍 Links to Officials</h4>
                  <div className="space-y-2 text-sm text-emerald-700">
                    <div>🏛️ Common Cause: <a href="https://www.commoncause.org/find-your-representative/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                    <div>🏛️ USA.gov: <a href="https://www.usa.gov/elected-officials" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                    <div>🏛️ House: <a href="https://www.house.gov/representatives/find-your-representative" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                    <div>🏛️ Senate: <a href="https://www.senate.gov/senators/senators-contact.htm" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                    <div>🏛️ Congress.gov: <a href="https://www.congress.gov/members/find-your-member" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-900">🛠️ Templates & Tools</h4>
                  <div className="space-y-2 text-sm text-emerald-700">
                    <div>🖥️ SOLAR Generator: <Link to="/advocacy#contact-congress" className="text-blue-600 hover:text-blue-800 underline transition-colors">Link</Link></div>
                    <div>📧 Democracy.io: <a href="https://democracy.io/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Link</a></div>
                    <div>📖 SOLAR Position Statements: <Link to="/advocacy#position-statement" className="text-blue-600 hover:text-blue-800 underline transition-colors">Link</Link></div>
                    <div>⚖️ SOLAR RECON: <Link to="/advocacy#recon" className="text-blue-600 hover:text-blue-800 underline transition-colors">Link</Link></div>
                  </div>
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
                <h2 className="text-2xl font-bold">Sample Templates (Ready to Copy)</h2>
                <p className="text-slate-200">Customize these as starting points.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📞 Phone — Residency Restrictions:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <p className="text-gray-700 italic text-sm">
                    "Hello, my name is [NAME] … oppose blanket residency bans … research shows no benefit, only instability … thank you."
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✉️ Email — Evidence-Based Reform:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <p className="text-gray-700 italic text-sm">
                    "Subject: Support evidence-based reform … Dear [TITLE] … treatment, prevention, individualized risk …"
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📄 Letter — RECON:</h3>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <p className="text-gray-700 italic text-sm">
                    "Re: Register Every Convict Or None … current system is discriminatory … BJS 9-year data …"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Tips for Impact */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                9
              </div>
              <div>
                <h2 className="text-2xl font-bold">Tips for Impact</h2>
                <p className="text-slate-200">Simple actions that amplify your voice.</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Checklist:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-1"
                      checked={checkedItems['impact-1'] || false}
                      onChange={() => toggleCheck('impact-1')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-1"
                      className={`cursor-pointer ${checkedItems['impact-1'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Personalize subject line and greeting
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-2"
                      checked={checkedItems['impact-2'] || false}
                      onChange={() => toggleCheck('impact-2')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-2"
                      className={`cursor-pointer ${checkedItems['impact-2'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Add city/ZIP in first line
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-3"
                      checked={checkedItems['impact-3'] || false}
                      onChange={() => toggleCheck('impact-3')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-3"
                      className={`cursor-pointer ${checkedItems['impact-3'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Mention one lived experience
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-4"
                      checked={checkedItems['impact-4'] || false}
                      onChange={() => toggleCheck('impact-4')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-4"
                      className={`cursor-pointer ${checkedItems['impact-4'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Reference one credible source
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-5"
                      checked={checkedItems['impact-5'] || false}
                      onChange={() => toggleCheck('impact-5')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-5"
                      className={`cursor-pointer ${checkedItems['impact-5'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Ask for reply or meeting
                    </label>
                  </li>
                  <li className="flex items-start">
                    <input
                      type="checkbox"
                      id="impact-6"
                      checked={checkedItems['impact-6'] || false}
                      onChange={() => toggleCheck('impact-6')}
                      className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label 
                      htmlFor="impact-6"
                      className={`cursor-pointer ${checkedItems['impact-6'] ? 'line-through text-gray-500' : ''}`}
                    >
                      ☑️ Follow up politely in 1–2 weeks
                    </label>
                  </li>
                </ul>
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
                  <strong>✅ Consistency</strong> Be respectful, specific, and local.
                </p>
                <p className="text-lg">
                  <strong>📖 Evidence</strong> Limit to 1–2 authoritative sources.
                </p>
                <p className="text-lg">
                  <strong>📅 Follow-up</strong> One polite follow-up matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                📚
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sources & Offline Alternatives</h2>
                <p className="text-slate-200">Verified resources and alternatives for those with internet restrictions</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">🔍 Lookups & Contact</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li><a href="https://www.commoncause.org/find-your-representative/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Common Cause – Find Your Representative</a></li>
                  <li><a href="https://www.usa.gov/elected-officials" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">USA.gov – Elected Officials</a></li>
                  <li><a href="https://www.house.gov/representatives/find-your-representative" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">U.S. House – Find Your Representative</a></li>
                  <li><a href="https://www.senate.gov/senators/senators-contact.htm" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">U.S. Senate – Senators Contact Directory</a></li>
                  <li><a href="https://www.senate.gov/general/resources/pdf/senators_phone_list.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Senate phone list (PDF)</a></li>
                  <li><a href="https://www.congress.gov/members/find-your-member" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Congress.gov – Members</a></li>
                  <li><a href="https://open.pluralpolicy.com/find_your_legislator/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Open States/Plural – State lookup</a></li>
                  <li><a href="https://democracy.io/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Democracy.io – Email Congress</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">📖 Evidence & Best Practices</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li><a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/9-case-law-update-2018-residency-restrictions.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">DOJ SMART — Residency Restrictions: Case Law Update (2018)</a></li>
                  <li><a href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/recidivismofadultsexualoffenders.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">DOJ SMART — Recidivism of Adult Sexual Offenders (Przybylski, 2015)</a></li>
                  <li><a href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS — Recidivism of Sex Offenders Released from State Prison: 9-Year Follow-Up report page</a></li>
                  <li><a href="https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">BJS — Recidivism of Sex Offenders Released from State Prison: 9-Year Follow-Up PDF</a></li>
                  <li><a href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">The Sentencing Project — Responding to Crimes of a Sexual Nature (2024)</a></li>
                  <li><a href="https://csgjusticecenter.org/publications/50-states-1-goal/" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">CSG Justice Center — 50 States, 1 Goal</a></li>
                  <li><a href="https://www.congressfoundation.org/storage/documents/CMF_Pubs/cwc_recommendationsreport.pdf" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">Congressional Management Foundation — Communicating with Congress (PDF)</a></li>
                  <li><a href="https://www.senate.gov/general/contacting.htm" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">U.S. Senate — Contacting Your Senators</a></li>
                  <li><a href="https://guides.lib.berkeley.edu/ContactingOfficials/Tips" className="text-blue-600 hover:text-blue-800 underline transition-colors" target="_blank" rel="noopener">UC Berkeley Library — Tips for Contacting Officials</a></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-medium text-amber-800 mb-3">📚 Offline Alternatives</h4>
              <ul className="list-disc pl-5 text-amber-700 space-y-1 text-sm">
                <li>📚 Local public library: staff can help with lookups & printing letters</li>
                <li>🏛️ District offices: call local office for addresses & best contact method</li>
                <li>🗳️ Town/county clerk: provides council/board contacts and meeting schedules</li>
              </ul>
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