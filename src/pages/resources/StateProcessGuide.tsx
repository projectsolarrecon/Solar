import { useState } from 'react';
import SEO from '../../components/SEO';

function StateProcessGuide() {
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

  const processStages = [
    {
      id: 'investigation',
      title: '1. Investigation',
      duration: 'Weeks to Months',
      description: 'Local police and ICAC task forces investigate potential crimes',
      familyTips: [
        'Do not authorize interviews or searches without legal counsel',
        'Document all interactions with law enforcement',
        'Secure qualified state criminal defense attorney immediately',
        'Avoid discussing the case publicly or on social media'
      ],
      checklist: [
        'Contact experienced state defense attorney',
        'Avoid speaking to investigators without counsel present',
        'Preserve relevant documents and communications',
        'Begin gathering character references'
      ],
      resources: [
        { name: 'ICAC Task Force Program', url: 'https://ojjdp.ojp.gov/programs/internet-crimes-against-children-task-force-program' },
        { name: 'State Bar Attorney Directory', url: 'https://www.americanbar.org/groups/legal_services/flh-home/flh-bar-directories-and-lawyer-finders/' }
      ]
    },
    {
      id: 'arrest-appearance',
      title: '2. Arrest & First Appearance',
      duration: '24-72 Hours',
      description: 'Initial court appearance for charges, rights, and bail consideration',
      familyTips: [
        'Attend the initial appearance if possible for support',
        'Understand bail conditions and restrictions that may be imposed',
        'Prepare for potential no-contact orders and device restrictions',
        'Begin planning for legal expenses and time commitments'
      ],
      checklist: [
        'Confirm attorney representation at first appearance',
        'Understand all bail conditions and restrictions',
        'Review charges and potential penalties with counsel',
        'Plan for compliance with any pretrial conditions'
      ],
      resources: [
        { name: 'California Criminal Court Overview', url: 'https://selfhelp.courts.ca.gov/criminal-court/overview' },
        { name: 'National Center for State Courts', url: 'https://www.ncsc.org/resources-courts' }
      ]
    },
    {
      id: 'charging',
      title: '3. Formal Charging',
      duration: '2-8 Weeks',
      description: 'Prosecutor files complaint, information, or seeks grand jury indictment',
      familyTips: [
        'Prepare emotionally for formal charges to be filed',
        'Research the specific charges and potential penalties',
        'Begin building support network and gathering resources',
        'Consider family counseling to cope with stress'
      ],
      checklist: [
        'Review formal charges with attorney in detail',
        'Understand difference between felony and misdemeanor charges',
        'Discuss potential plea options and trial strategy',
        'Begin collecting mitigation evidence'
      ],
      resources: [
        { name: 'LawHelp.org Legal Information', url: 'https://www.lawhelp.org/' },
        { name: 'RAINN Criminal Justice Process', url: 'https://rainn.org/articles/what-expect-criminal-justice-system' }
      ]
    },
    {
      id: 'discovery-motions',
      title: '4. Discovery & Pretrial Motions',
      duration: '3-12 Months',
      description: 'Evidence exchange and legal motions to suppress or exclude evidence',
      familyTips: [
        'Be patient - this phase often takes the longest',
        'Support your loved one through evidence review process',
        'Continue gathering character references and support letters',
        'Maintain normal family routines where possible'
      ],
      checklist: [
        'Review discovery materials with attorney',
        'Identify potential defense witnesses',
        'Gather mitigation evidence and character letters',
        'Understand any pretrial motion outcomes'
      ],
      resources: [
        { name: 'State Rules of Criminal Procedure', url: 'https://www.ncsc.org/information-and-resources' },
        { name: 'Rape Shield Law Information', url: 'https://rainn.org/articles/rape-shield-laws' }
      ]
    },
    {
      id: 'plea-trial',
      title: '5. Plea Negotiation or Trial',
      duration: '1-4 Weeks (Trial)',
      description: 'Case resolves through plea agreement or jury trial',
      familyTips: [
        'Understand the risks and benefits of plea vs. trial',
        'Prepare emotionally for either outcome',
        'Plan for court attendance and family support',
        'Consider impact on employment and housing'
      ],
      checklist: [
        'Discuss plea vs. trial options thoroughly with counsel',
        'Understand registration requirements for any conviction',
        'Review sentencing exposure for charges',
        'Prepare for potential trial testimony and evidence'
      ],
      resources: [
        { name: 'RAINN Trial Process Overview', url: 'https://rainn.org/articles/what-expect-criminal-trial' },
        { name: 'Plea Bargaining Information', url: 'https://www.uscourts.gov/about-federal-courts/types-cases/criminal-cases' }
      ]
    },
    {
      id: 'sentencing',
      title: '6. Sentencing & PSI',
      duration: '30-90 Days Post-Conviction',
      description: 'Presentence investigation and judicial sentencing',
      familyTips: [
        'Participate in presentence investigation interview',
        'Submit character letters and mitigation evidence',
        'Prepare concrete reentry plan for housing and employment',
        'Attend sentencing hearing for support'
      ],
      checklist: [
        'Complete presentence investigation process',
        'Submit all character letters and mitigation materials',
        'Understand state sentencing guidelines if applicable',
        'Plan for immediate post-sentencing needs'
      ],
      resources: [
        { name: 'Minnesota Sentencing Guidelines', url: 'https://mn.gov/sentencing-guidelines/' },
        { name: 'Presentence Report Information', url: 'https://www.uscourts.gov/services-forms/probation-and-pretrial-services' }
      ]
    },
    {
      id: 'incarceration',
      title: '7. Incarceration',
      duration: 'Varies by Sentence',
      description: 'Service of sentence in county jail or state prison',
      familyTips: [
        'Research the assigned facility policies and procedures',
        'Set up visitation schedules and communication plans',
        'Prepare financially for commissary and phone costs',
        'Maintain family connections and support systems'
      ],
      checklist: [
        'Understand facility rules and visiting procedures',
        'Set up commissary account and communication methods',
        'Plan for family visits and ongoing support',
        'Research available programs and treatment options'
      ],
      resources: [
        { name: 'Prison Policy Initiative', url: 'https://www.prisonpolicy.org/reports/pie2025.html' },
        { name: 'State Department of Corrections', url: 'https://www.corrections.gov/' }
      ]
    },
    {
      id: 'registration-supervision',
      title: '8. Registration & Supervision',
      duration: 'Upon Release',
      description: 'Compliance with registration and probation/parole requirements',
      familyTips: [
        'Understand state-specific registration requirements',
        'Plan for housing restrictions and employment challenges',
        'Prepare family for ongoing supervision conditions',
        'Research available support services and resources'
      ],
      checklist: [
        'Register with local law enforcement as required',
        'Meet with probation/parole officer',
        'Understand all supervision conditions and restrictions',
        'Begin reintegration and compliance planning'
      ],
      resources: [
        { name: 'NCSL Sex Offender Database', url: 'https://www.ncsl.org/civil-and-criminal-justice/sex-offender-enactments-database' },
        { name: 'Collateral Consequences Resource Center', url: 'https://ccresourcecenter.org/state-restoration-profiles/50-state-comparison-relief-from-sex-offender-registration-obligations/' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="State Sex-Crime Process Guide - Step-by-Step Resource | The SOLAR Project"
        description="Comprehensive guide to the state sex-crime legal process from investigation to registration. Includes family tips, checklists, and official resources for each stage."
        keywords="state sex crime process, state criminal defense, arraignment, plea bargain, presentence investigation, sex offender registration, state court process"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                Resource Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              State Sex-Crime Process Guide
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              A step-by-step roadmap through the state criminal process from investigation to registration, 
              with practical tips for families and official resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePrint}
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Guide
              </button>
              <a
                href="/blog/state-sex-crime-process"
                className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Detailed Article
              </a>
              <a
                href="/resources/federal-process-guide"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Federal Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Process Overview */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">State Process Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The state sex-crime process involves 8 distinct stages, each with specific requirements, 
              timelines, and considerations for families. Note that procedures vary by state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage, index) => (
              <div key={stage.id} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stage.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{stage.duration}</p>
                <p className="text-sm text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Stages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {processStages.map((stage, index) => (
              <div key={stage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{stage.title}</h3>
                      <p className="text-slate-200">Duration: {stage.duration}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-slate-100">{stage.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Family Tips */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Family Tips
                      </h4>
                      <ul className="space-y-2">
                        {stage.familyTips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Checklist */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Action Checklist
                      </h4>
                      <ul className="space-y-2">
                        {stage.checklist.map((item, itemIndex) => {
                          const checkId = `${stage.id}-${itemIndex}`;
                          return (
                            <li key={itemIndex} className="flex items-start">
                              <input
                                type="checkbox"
                                id={checkId}
                                checked={checkedItems[checkId] || false}
                                onChange={() => toggleCheck(checkId)}
                                className="mt-1 mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                              />
                              <label 
                                htmlFor={checkId}
                                className={`text-gray-700 cursor-pointer ${checkedItems[checkId] ? 'line-through text-gray-500' : ''}`}
                              >
                                {item}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Official Resources
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stage.resources.map((resource, resourceIndex) => (
                        <a
                          key={resourceIndex}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-4 h-4 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span className="text-gray-900 font-medium">{resource.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State vs Federal Comparison */}
      <section className="bg-blue-50 border-l-4 border-blue-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-800 mb-4">Key Differences from Federal Process</h3>
              <div className="text-blue-700 space-y-2">
                <p>• <strong>Speed:</strong> State cases often move faster than federal, but timelines vary by jurisdiction</p>
                <p>• <strong>Bail:</strong> States more frequently allow pretrial release, though conditions can be strict</p>
                <p>• <strong>Sentencing:</strong> No uniform guidelines across states; local statutes and practice drive outcomes</p>
                <p>• <strong>Dual sovereignty:</strong> Both state and federal authorities may prosecute the same conduct</p>
                <p>• <strong>Compare processes:</strong> See our <a href="/resources/federal-process-guide" className="text-blue-600 hover:text-blue-800 underline">Federal Process Guide</a> for detailed comparison</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800 mb-4">Important Reminders</h3>
              <div className="text-yellow-700 space-y-2">
                <p>• <strong>State laws vary significantly</strong> - Procedures and timelines differ by jurisdiction</p>
                <p>• <strong>Legal representation is crucial</strong> - Always consult with an experienced state defense attorney</p>
                <p>• <strong>Stay informed</strong> - Laws and procedures can change; verify current information with official sources</p>
                <p>• <strong>Support is available</strong> - Don't navigate this process alone; seek help from qualified professionals</p>
              </div>
            </div>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Federal Process Guide</h3>
              <p className="text-gray-600 mb-4">
                Compare with our comprehensive federal sex-crime process guide for cases involving federal jurisdiction.
              </p>
              <a href="/resources/federal-process-guide" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Know Your Rights Guide</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to constitutional rights and legal protections from investigation through reentry.
              </p>
              <a href="/resources/know-your-rights" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Housing Search Guide</h3>
              <p className="text-gray-600 mb-4">
                Strategies for finding housing with registry restrictions and landlord communication tips.
              </p>
              <a href="/resources/housing-search-guide" className="text-blue-600 font-medium hover:text-blue-800">
                View Guide →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StateProcessGuide;