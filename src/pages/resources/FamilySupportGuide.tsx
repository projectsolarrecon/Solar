import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function FamilySupportGuide(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="The SOLAR Family & Allies Guide | The SOLAR Project"
        description="Supporting a loved one through a sex-offense case—from arrest to reentry (and beyond). A grounded, action-oriented roadmap for families and allies, with scripts, checklists, and links."
        keywords="Family guide, allies, sex offense case, arrest, pretrial, incarceration, reentry, registry, scripts, checklists, resources"
      />

      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          .print-bg-none { background: none !important; }
          .print-shadow-none { box-shadow: none !important; }
          .avoid-break { page-break-inside: avoid; break-inside: avoid; }
        }
        @page { margin: 0.5in; }
        a { text-decoration: underline; }
      `}</style>

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-16 print-bg-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
              Family & Allies Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The SOLAR Family & Allies Guide
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            <span className="font-semibold">Supporting a loved one through a sex-offense case—from arrest to reentry (and beyond)</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center no-print">
            <button 
              onClick={handlePrint}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Guide
            </button>
            <Link
              to="/resources"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600 print-bg-none"></div>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg avoid-break">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-bold text-blue-800">Important Notice</h2>
            </div>
            <p className="text-blue-700">
              <em>Note: This is not legal advice. Laws and procedures vary by state and case. Use this as a grounded, action-oriented roadmap, and confirm steps with your attorney.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section 1 - Quick Start */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">1</div>
                <div>
                  <h2 className="text-2xl font-bold">Quick-start: the first 48 hours</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-900 mb-2">If police or agents call/text/knock:</p>
                    <ul className="space-y-2 text-red-800">
                      <li>Don't explain, debate, or "clear things up." Say: <em>"I'm invoking the right to remain silent. I want a lawyer."</em> Then stop talking (<a href="https://www.aclu.org/know-your-rights/what-do-if-youre-stopped-police" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 underline">ACLU</a>).</li>
                      <li>If your loved one is already in custody, <strong>do not</strong> discuss facts of the case on recorded jail phones or messages. Save facts for the attorney.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Get counsel moving, fast:</p>
                    <ul className="space-y-2 text-blue-800">
                      <li><strong>If it's federal:</strong> contact your district's <a href="https://www.fd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Federal Public Defender</a> office (they regularly handle sex-offense cases).</li>
                      <li><strong>If it's state and money is tight:</strong> court-appointed defenders are an option; if hiring privately, choose an attorney with demonstrated sex-offense experience (review actual case dockets, not just marketing).</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-yellow-900 mb-2">Bail/release prep (day 1–2):</p>
                    <ul className="space-y-2 text-yellow-800">
                      <li>Gather pay stubs, lease/mortgage, proof of caregiving, treatment enrollment, and letters of community support to help with release arguments.</li>
                      <li>Expect possible <strong>no-contact orders, GPS/curfew, internet/device limits, and surprise searches</strong> as pretrial conditions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Ground Truths */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">2</div>
                <div>
                  <h2 className="text-2xl font-bold">Ground truths to steady you</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-semibold mb-2">
                      <strong>Most people convicted of sex offenses do not commit a new sex crime after release.</strong>
                    </p>
                    <p className="text-green-700">
                      In a major DOJ study, only about <strong>8%</strong> were arrested for a new sexual offense over nine years (<a href="https://bjs.ojp.gov/library/publications/recidivism-persons-released-prison-34-states-2012-2017" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">BJS report</a>).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-800 font-semibold mb-2">
                      <strong>Most child sexual abuse is by someone the child knows</strong>, not a stranger.
                    </p>
                    <p className="text-blue-700">
                      Reference: <a href="https://www.rainn.org/statistics/perpetrators-sexual-violence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">RAINN Statistics</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-purple-800 font-semibold mb-2">
                      <strong>Families get targeted too.</strong>
                    </p>
                    <p className="text-purple-700">
                      In one national study, <strong>44%</strong> of registrants reported harassment or threats, and <strong>30%</strong> said their families experienced it as well (<a href="https://www.researchgate.net/publication/237510245_Collateral_Damage_Family_Members_of_Registered_Sex_Offenders" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Levenson & Tewksbury, 2009</a>).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <p className="text-teal-800 font-semibold mb-2">
                      <strong>Family contact matters.</strong>
                    </p>
                    <p className="text-teal-700">
                      Regular visitation is associated with <strong>lower recidivism</strong> after release (<a href="https://nij.ojp.gov/topics/articles/importance-families-and-social-support-networking-reentry" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">NIJ summary</a>).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Communication Playbook */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">3</div>
                <div>
                  <h2 className="text-2xl font-bold">Your communication playbook</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-indigo-900 mb-2">With your loved one (recorded calls/visits):</p>
                    <ul className="space-y-2 text-indigo-800">
                      <li>"I love you. I won't discuss case facts on this line. Let's save everything for your lawyer. Here's what I <em>can</em> do today: (1) call attorneys, (2) gather paperwork, (3) check on housing/work/kids."</li>
                      <li>"I hear you're scared. Me too. We'll move one square at a time—lawyer first, basic needs next."</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-900 mb-2">With police/agents:</p>
                    <ul className="space-y-2 text-red-800">
                      <li>"I'm not answering questions. I want a lawyer." (Repeat. Do not consent to searches. If they search anyway, stay calm, don't interfere; note names/badge numbers.)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-green-900 mb-2">With kids (truthful, age-appropriate):</p>
                    <ul className="space-y-2 text-green-800">
                      <li>"Dad/Mom is in a serious kind of trouble with the law. Adults are working on it. You are safe and loved. You can ask questions anytime."</li>
                      <li>If there's a no-contact order: "For now, the rules say you can't see/talk to ___; it's not because of you. We'll keep you updated."</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">With extended family & friends:</p>
                    <ul className="space-y-2 text-blue-800">
                      <li>"We're following the legal process and keeping details private. If you want to help, here's how: rides for kids, letters for the court, showing up without judgment."</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <p className="font-semibold text-purple-900 mb-2">With employer/school:</p>
                    <ul className="space-y-2 text-purple-800">
                      <li>"A legal matter requires my loved one's absence/modified schedule. We're complying with court orders. I'll keep you posted only on what affects work/school logistics."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Protecting Privacy */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">4</div>
                <div>
                  <h2 className="text-2xl font-bold">Protecting your household & privacy</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-purple-800">
                      <li><strong>Data broker opt-outs:</strong> use consolidated services (e.g., <a href="https://www.optoutprescreen.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">OptOutPrescreen</a>, <a href="https://privacyrights.org/resources/online-information-brokers" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Privacy Rights Clearinghouse list</a>).</li>
                      <li><strong>Credit freeze:</strong> free through <a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Equifax</a>, <a href="https://www.experian.com/freeze/center.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Experian</a>, and <a href="https://www.transunion.com/credit-freeze" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">TransUnion</a>.</li>
                      <li><strong>P.O. box</strong> for mail, tighten social media privacy, remove home address where possible.</li>
                      <li>If harassment escalates: document, save screenshots, and report. Ask your attorney before taking civil action.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 - Pretrial */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">5</div>
                <div>
                  <h2 className="text-2xl font-bold">Pretrial: what families can do</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-orange-900 mb-2">Conditions to expect:</p>
                    <ul className="space-y-2 text-orange-800">
                      <li>No-contact orders, restricted internet/computer use, device searches, location restrictions, mandated evaluations, or polygraphs.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Practical supports:</p>
                    <ul className="space-y-2 text-blue-800">
                      <li>Transportation to court, childcare, pillbox for meds, appointment calendars, "court-day folder" with essentials.</li>
                      <li>If internet/device limits apply, create separate devices for kids' schoolwork; log usage.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 - Incarceration */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">6</div>
                <div>
                  <h2 className="text-2xl font-bold">If incarceration happens</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-gray-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-gray-800">
                      <li><strong>Visits:</strong> Prioritize steady, predictable visits or letters. Contact near release is especially protective against reoffending (<a href="https://nij.ojp.gov/topics/articles/importance-families-and-social-support-networking-reentry" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">NIJ</a>).</li>
                      <li><strong>What to send/do:</strong> Photos (if permitted), hobby books, reentry prep (IDs checklist, resumes, housing leads).</li>
                      <li><strong>Routine contact:</strong> Letters, scheduled calls, and short but frequent check-ins matter more than occasional "grand gestures."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 - Reentry & Registry */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">7</div>
                <div>
                  <h2 className="text-2xl font-bold">Reentry & the registry</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-emerald-800">
                      <li><strong>Day 1–3:</strong> <strong className="text-red-600">Register immediately</strong>. Most states require registration within <strong>24–72 hours of release</strong> (<a href="https://smart.ojp.gov/sorna-map" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">SMART Office state directory</a>). Keep copies of all forms and confirmations.</li>
                      <li><strong>Housing:</strong> Plan early; broad residency bans create homelessness (<a href="https://www.ncsl.org/civil-and-criminal-justice/housing-for-people-with-criminal-records" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">NCSL housing report</a>). Ask probation/parole for compliant lists.</li>
                      <li><strong>Employment:</strong> Explore trade programs, supportive employers, or small business options. Use the <a href="https://niccc.nationalreentryresourcecenter.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">National Inventory of Collateral Consequences of Conviction</a> to understand restrictions.</li>
                      <li><strong>Conditions:</strong> Review in writing with your supervising officer; comply exactly. Even small violations (missed check-in, forgotten password) can return someone to custody.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 - Mental Health */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">8</div>
                <div>
                  <h2 className="text-2xl font-bold">Mental health: support for you and them</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-pink-800">
                      <li><strong>Crisis line:</strong> Call or text <strong>988</strong> (<a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">988 Lifeline</a>) for confidential support.</li>
                      <li><strong>Treatment locator:</strong> <a href="https://findtreatment.gov/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">FindTreatment.gov</a> for therapy, psychiatry, or substance-use help.</li>
                      <li><strong>Sex-offense-specific programs:</strong> <a href="https://www.safersociety.org/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">Safer Society</a> provides directories of specialized treatment providers.</li>
                      <li><strong>Family self-care:</strong> Join support groups, seek therapy for yourself, and create private outlets for stress.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 - Advocacy */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">9</div>
                <div>
                  <h2 className="text-2xl font-bold">Advocacy & information hubs</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-cyan-800">
                      <li><a href="https://narsol.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">NARSOL</a> — National Association for Rational Sex Offense Laws (policy, reform, state affiliates).</li>
                      <li><a href="https://all4consolaws.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">ACSOL</a> — Alliance for Constitutional Sex Offense Laws (litigation, education).</li>
                      <li><a href="https://smart.ojp.gov/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">SMART Office</a> — DOJ's registry standards and state-by-state information.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 10 - Scripts */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">10</div>
                <div>
                  <h2 className="text-2xl font-bold">Scripts for tough moments</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">To supervising officer:</p>
                      <p className="text-amber-800 italic">"We want to get this right. Can you confirm in writing the internet, contact, and travel conditions for our home?"</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">To school administrator:</p>
                      <p className="text-amber-800 italic">"I'm (child's) guardian. I have school-zone restrictions. How can we handle pickups, conferences, and events within the rules?"</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">To skeptical relatives:</p>
                      <p className="text-amber-800 italic">"You don't have to approve of everything to support us. We're focused on accountability, compliance, and safety. If you can't be constructive, we'll take some space."</p>
                    </div>
                    <div>
                      <p className="font-semibold text-amber-900 mb-2">If a reporter/neighbor confronts you:</p>
                      <p className="text-amber-800 italic">"We're cooperating with the legal process and have no comment. Please direct questions to our attorney."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 11 - Pitfalls */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">11</div>
                <div>
                  <h2 className="text-2xl font-bold">Common pitfalls to avoid</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <ul className="space-y-2 text-red-800">
                      <li>Talking about case facts on jail calls or texts.</li>
                      <li>Contacting the alleged victim or family directly.</li>
                      <li>Ignoring "minor" rules like device passwords or curfews.</li>
                      <li>Waiting until the last minute for housing or employment solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 12 - Stage Plans */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">12</div>
                <div>
                  <h2 className="text-2xl font-bold">Stage-by-stage starter plan (first 90 days of each phase)</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Pretrial (first 90 days):</h4>
                <ul className="space-y-2 text-blue-800">
                  <li><strong>Weeks 1–2:</strong> Secure counsel; invoke silence; gather documents; lock down privacy.</li>
                  <li><strong>Weeks 3–4:</strong> Prepare for bail/release; adjust household tech use; build support network.</li>
                  <li><strong>Month 2:</strong> Manage court logistics, support groups, childcare routines.</li>
                  <li><strong>Month 3:</strong> Draft support letters for possible sentencing; maintain compliance.</li>
                </ul>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Incarceration (first 90 days):</h4>
                <ul className="space-y-2 text-gray-800">
                  <li><strong>Weeks 1–2:</strong> Learn facility rules; put funds on commissary.</li>
                  <li><strong>Weeks 3–4:</strong> Set up steady letters/visits; encourage early programming.</li>
                  <li><strong>Month 2:</strong> Build a reentry binder; send educational/work prep materials.</li>
                  <li><strong>Month 3:</strong> Identify facility support (chaplain, reentry coordinators); manage expectations around contact.</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-2">Reentry & Registry (first 90 days):</h4>
                <ul className="space-y-2 text-green-800">
                  <li><strong>Days 1–3:</strong> <strong className="text-red-600">Register immediately</strong> (24–72 hours in most states); confirm housing with parole/probation; get conditions in writing.</li>
                  <li><strong>Weeks 1–2:</strong> Secure basic housing and income; start therapy and treatment.</li>
                  <li><strong>Weeks 3–4:</strong> Document compliance; begin early job/vocational training.</li>
                  <li><strong>Month 2:</strong> Establish family routines; explore volunteering or trade programs.</li>
                  <li><strong>Month 3:</strong> Review long-term goals (education, career, community reintegration).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 13 - Why Support Matters */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">13</div>
                <div>
                  <h2 className="text-2xl font-bold">Why your support matters</h2>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div className="space-y-4">
                    <p className="text-teal-800">Families often feel isolated and judged, but research shows:</p>
                    <ul className="space-y-2 text-teal-800">
                      <li><strong>Sex-offense recidivism is lower than most think</strong>.</li>
                      <li><strong>Pro-social family contact is protective.</strong></li>
                      <li><strong>Steady, realistic support helps rebuild lives</strong>.</li>
                    </ul>
                    <p className="text-teal-800">Your presence—paired with clear boundaries and compliance—can change outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 14 - Expanded Checklist */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden avoid-break print-shadow-none">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 print-bg-none">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">14</div>
                <div>
                  <h2 className="text-2xl font-bold">Expanded checklist</h2>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Pretrial:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Invoke silence & request lawyer.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Secure counsel; prepare bail package.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Gather IDs, medical, financial records.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Lock down privacy (opt-outs, credit freeze, P.O. box).</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Create court-day binder.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Set home compliance plan.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded" /> Draft scripts for work, school, family.</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">During incarceration:</h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Learn mail/call/visit rules.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Send regular, small support (letters, books, commissary).</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Encourage education, treatment, and reentry prep.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Build reentry binder.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Maintain outside contact lists.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-gray-600 border-gray-300 rounded" /> Balance family support with self-care.</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Reentry & Registry:</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> <strong className="text-red-600">Register within 24–72 hours of release</strong>; keep proof.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Confirm housing compliance with supervision.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Get all conditions in writing from supervising officer.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Start therapy/treatment programs immediately.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Document all compliance efforts.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Explore employment/vocational training options.</li>
                  <li className="flex items-center"><input type="checkbox" className="mr-3 h-4 w-4 text-green-600 border-gray-300 rounded" /> Build sustainable family routines and support systems.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Important Reminders */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-lg font-semibold text-yellow-800">Important Reminders</h2>
            </div>
            <ul className="list-disc list-inside text-yellow-700 space-y-1">
              <li>This guide is not a substitute for legal advice. Always consult your attorney about case-specific decisions.</li>
              <li>Confirm deadlines for registration, court appearances, and supervision requirements — missing even small ones can lead to serious consequences.</li>
              <li>Take care of yourself as well as your loved one — family stability is a protective factor during and after legal proceedings.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}