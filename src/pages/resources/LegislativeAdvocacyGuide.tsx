import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function LegislativeAdvocacyGuide() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Legislative Advocacy Guide - Contact Your Representatives | The SOLAR Project"
        description="Step-by-step guide to contacting legislators, writing effective letters, and advocating for evidence-based sex offense policy reform. Includes interactive template generator."
        keywords="legislative advocacy, contact representatives, policy reform, sex offense law, registry reform, advocacy guide, political action"
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
            Your step-by-step guide to contacting legislators, writing effective messages, and advocating for evidence-based sex offense policy reform.
          </p>
          
          <p className="text-lg text-slate-100 mb-8 max-w-3xl">
            This comprehensive guide helps individuals and advocates effectively communicate with elected officials to promote rational, evidence-based sex offense policy reform.
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
              onClick={handleDownload}
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-6">
        
        <div className="space-y-10 print:space-y-6">
          
          {/* Quick Start */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  ⚡
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Quick Start</h2>
                  <p className="text-slate-200">Get started with advocacy in 4 simple steps</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="mb-6 text-slate-700">Advocacy is about <strong>consistent, respectful contact</strong> with your representatives. Here's the fastest path:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm mr-3 flex-shrink-0 mt-1">1</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Find your representatives</h3>
                      <p className="text-sm text-slate-600">Use <a className="text-indigo-700 underline hover:text-indigo-800" href="https://www.commoncause.org/find-your-representative/" target="_blank" rel="noopener">Common Cause lookup</a> for comprehensive info</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm mr-3 flex-shrink-0 mt-1">2</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Pick one issue</h3>
                      <p className="text-sm text-slate-600">Choose from our 6 core advocacy areas below</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm mr-3 flex-shrink-0 mt-1">3</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Use the generator</h3>
                      <p className="text-sm text-slate-600">Our interactive tool creates personalized scripts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm mr-3 flex-shrink-0 mt-1">4</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Send & follow up</h3>
                      <p className="text-sm text-slate-600">Contact them, then follow up in 1–2 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  ⚠️
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Why This Matters</h2>
                  <p className="text-slate-200">Current policies are driven by fear, not facts</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="mb-4 text-slate-700">Sex offense policy is driven by fear, not facts. Current approaches like registries, residency bans, and blanket restrictions:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Don't prevent sexual harm (evidence shows this clearly)</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Increase homelessness, unemployment, and family instability</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Cost taxpayers millions while making communities less safe</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Violate constitutional protections and due process</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Your voice matters</p>
                    <p className="text-sm text-blue-800">Legislators hear from victims' advocates and "tough on crime" groups constantly. They rarely hear evidence-based perspectives from people who understand the real impacts of these laws.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Final Message */}
        <section className="mt-12 print:mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center print:p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Voice Matters</h2>
            <p className="text-lg text-blue-800 mb-4">
              Every call, email, and conversation moves us closer to <strong>evidence-based, constitutional policy</strong>.
            </p>
            <p className="text-blue-700">
              Start with one representative, one issue, and one message. Then keep going. Change happens when people like you speak up consistently and respectfully.
            </p>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-200 pt-6 mt-8 text-sm text-gray-600 print:text-xs">
          <p><strong>Legal Disclaimer:</strong> This guide provides general information only and is not legal advice. Laws vary by state and individual circumstances. Always consult with a qualified attorney for advice specific to your situation. The SOLAR Project does not provide legal representation.</p>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-8 print:hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to="/resources" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              ← Back to All Resources
            </Link>
            <div className="flex space-x-4">
              <Link 
                to="/advocacy" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Learn More About Advocacy
              </Link>
              <Link 
                to="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Help
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden { display: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .print\\:space-y-6 > * + * { margin-top: 1.5rem !important; }
          .print\\:mt-8 { margin-top: 2rem !important; }
          .print\\:text-xs { font-size: 0.75rem !important; line-height: 1rem !important; }
          
          body { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
          * { box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}

export default LegislativeAdvocacyGuide;