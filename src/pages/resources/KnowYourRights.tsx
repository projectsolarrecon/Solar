    import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function KnowYourRights(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // This would trigger a PDF download - for now, it opens print dialog
    window.print();
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Your Rights at Every Stage: A Complete Guide for Sex Offense Cases | The SOLAR Project"
        description="Comprehensive guide to legal rights for individuals accused or convicted of sex offenses. Know your constitutional protections at every stage from investigation to reentry."
        keywords="legal rights, sex offense defense, constitutional rights, Miranda rights, due process, criminal defense, legal guide"
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
              Legal Rights Guide
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Rights at Every Stage
          </h1>
          
          <p className="text-xl text-slate-200 mb-6 max-w-3xl">
            A Complete Guide for Individuals Accused or Convicted of a Sex Offense
          </p>
          
          <p className="text-lg text-slate-100 mb-8 max-w-3xl">
            This guide helps individuals and their loved ones understand their legal rights at every stage of a sex offense case. While laws may vary by state, these protections are rooted in the U.S. Constitution and federal law.
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
        
        {/* Rights by Stage */}
        <div className="space-y-10 print:space-y-6">
          
          {/* Investigation */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Investigation</h2>
                  <p className="text-slate-200">Understanding your constitutional protections during investigation</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Constitutional Rights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to remain silent</strong> (Fifth Amendment)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to an attorney</strong> before and during questioning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Protection from unlawful searches</strong> (Fourth Amendment)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <h4 className="font-semibold text-yellow-800">Critical Tip</h4>
                  </div>
                  <p className="text-yellow-700">
                    <strong>Do not speak to law enforcement without legal counsel present.</strong> Anything you say can be used against you, even if you believe you're being helpful.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Arrest */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Arrest</h2>
                  <p className="text-slate-200">Your rights when taken into custody</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights Upon Arrest:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to be informed of charges</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to remain silent</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to an attorney</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to a bail hearing</strong> (may be denied in some cases)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold text-blue-800">Preparation Tip</h4>
                  </div>
                  <p className="text-blue-700">
                    <strong>Have a trusted contact ready for bail arrangements.</strong> Know who you can call and ensure they understand the process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pre-Trial */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Pre-Trial</h2>
                  <p className="text-slate-200">Rights during the pre-trial phase</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Pre-Trial Rights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to legal counsel</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to review evidence</strong> (discovery)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to file motions</strong> challenging unlawful evidence</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to negotiate a plea deal</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h4 className="font-semibold text-green-800">Documentation Tip</h4>
                  </div>
                  <p className="text-green-700">
                    <strong>Keep detailed records of communications with your attorney.</strong> Document all meetings, calls, and advice received.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trial */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Trial</h2>
                  <p className="text-slate-200">Your rights during trial proceedings</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Trial Rights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Presumption of innocence</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to a jury trial</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to present a defense</strong> and call witnesses</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to cross-examine witnesses</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to remain silent</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold text-purple-800">Strategic Tip</h4>
                  </div>
                  <p className="text-purple-700">
                    <strong>Prepare with your attorney whether or not you will testify.</strong> This is a critical decision that requires careful consideration. Learn more about <Link to="/blog/plea-vs-trial" className="underline hover:text-purple-600">plea vs trial decisions</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sentencing */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sentencing</h2>
                  <p className="text-slate-200">Your rights during the sentencing phase</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Sentencing Rights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to speak on your own behalf</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to present mitigating evidence</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to appeal</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h4 className="font-semibold text-teal-800">Support Tip</h4>
                  </div>
                  <p className="text-teal-700">
                    <strong>Gather letters of support and documentation before sentencing.</strong> Character references and evidence of rehabilitation efforts can be crucial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Incarceration */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  6
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Incarceration</h2>
                  <p className="text-slate-200">Your rights while incarcerated</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights During Incarceration:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to humane treatment</strong> (Eighth Amendment)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to medical and mental health care</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to religious freedom</strong></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h4 className="font-semibold text-gray-800">Connection Tip</h4>
                  </div>
                  <p className="text-gray-700">
                    <strong>Maintain supportive contact with friends, family, and advocacy groups.</strong> These connections are vital for mental health and successful reentry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Post-Release & Registration */}
          <section className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  7
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Post-Release & Registration</h2>
                  <p className="text-slate-200">Your rights after release and during registration</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Post-Release Rights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Right to challenge registry errors</strong></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>In some states, right to petition for removal</strong> from registry after a certain period</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>First Amendment protections</strong> for lawful internet use (Packingham v. North Carolina)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> You may be subject to sex offender registration laws (SORNA & state-level). Learn more about <Link to="/blog/life-on-registry" className="underline hover:text-yellow-600">life on the registry</Link>.
                    </p>
                  </div>
                </div>
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h4 className="font-semibold text-emerald-800">Reentry Tip</h4>
                  </div>
                  <p className="text-emerald-700">
                    <strong>Contact advocacy groups for housing and employment assistance.</strong> Organizations like NARSOL can provide valuable support during reentry.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Quick Reference Table */}
        <section className="mt-12 print:mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Quick Reference Table</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 print:text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Stage</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Your Rights</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Investigation</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Silence, attorney, privacy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Arrest</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Miranda rights, charge info, bail</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Pre-Trial</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Counsel, discovery, trial rights</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Trial</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Jury, defense, remain silent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Sentencing</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Mitigation, appeal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Incarceration</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Medical care, safety, rights</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Reentry & Registry</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Free speech, voting (state-dependent), due process</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Resources & Contact Information */}
        <section className="mt-12 print:mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 print:text-2xl">Resources & Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
            
            {/* NARSOL */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-blue-900 mb-3">NARSOL</h3>
              <p className="text-blue-800 mb-4">National Association for Rational Sexual Offense Laws - Advocates for reforming sex offense laws and supporting affected individuals and families.</p>
              <div className="space-y-2 text-blue-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (888) 997-7765
                </p>
                <p className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Post Office Box 36123, Albuquerque, NM 87176
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.narsol.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.narsol.org</a>
                </p>
              </div>
            </div>

            {/* ACLU */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-red-900 mb-3">American Civil Liberties Union (ACLU)</h3>
              <p className="text-red-800 mb-4">Nationwide nonprofit defending individual rights guaranteed by the Constitution.</p>
              <div className="space-y-2 text-red-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (212) 549-2500
                </p>
                <p className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  125 Broad Street, 18th Floor, New York, NY 10004
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.aclu.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.aclu.org</a>
                </p>
              </div>
            </div>

            {/* NCSL */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-green-900 mb-3">National Conference of State Legislatures (NCSL)</h3>
              <p className="text-green-800 mb-4">Provides research and data on state laws, including voting rights restoration.</p>
              <div className="space-y-2 text-green-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (303) 364-7700
                </p>
                <p className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  7700 East First Place, Denver, CO 80230
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.ncsl.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.ncsl.org</a>
                </p>
              </div>
            </div>

            {/* Human Rights Watch */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-purple-900 mb-3">Human Rights Watch</h3>
              <p className="text-purple-800 mb-4">International nonprofit investigating and reporting on human rights abuses.</p>
              <div className="space-y-2 text-purple-700">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (212) 290-4700
                </p>
                <p className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  350 Fifth Avenue, 34th Floor, New York, NY 10118-3299
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.hrw.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.hrw.org</a>
                </p>
              </div>
            </div>

            {/* The Marshall Project */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">The Marshall Project</h3>
              <p className="text-yellow-800 mb-4">Nonprofit news organization covering the U.S. criminal justice system.</p>
              <div className="space-y-2 text-yellow-700">
                <p className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  P.O. Box 524644, Miami, FL 33152
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <a href="https://www.themarshallproject.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.themarshallproject.org</a>
                </p>
              </div>
            </div>

            {/* SOLAR Project */}
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 print:p-4">
              <h3 className="text-xl font-bold text-blue-900 mb-3">The SOLAR Project</h3>
              <p className="text-blue-800 mb-4">Supporting, Organizing, Learning, Advocating, and Reforming - Your source for education, advocacy, and support.</p>
              <div className="space-y-2 text-blue-700">
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
        </section>

        {/* Final Message */}
        <section className="mt-12 print:mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center print:p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Remember</h2>
            <p className="text-lg text-blue-800 mb-4">
              This process can feel overwhelming, but <strong>you are not alone</strong>.
            </p>
            <p className="text-blue-700">
              Protect your rights, lean on trusted supporters, and work closely with a qualified attorney. Stay informed and seek help from reputable organizations.
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
                to="/blog/legal-rights" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Legal Rights Blog
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