import { useState } from 'react';
import SEO from '../../components/SEO';

function ReentryChecklist() {
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

  const checklistSections = [
    {
      id: 'first-steps',
      title: '1. First Steps',
      icon: '🏁',
      description: 'Essential documents and basic setup for reentry',
      items: [
        'Get your state ID or driver\'s license (DMV)',
        'Apply for/recover Social Security card & birth certificate',
        'Open a bank account (ask about "second chance" accounts)',
        'Organize documents in a binder: supervision papers, ID, certificates, medical records'
      ],
      tips: [
        'Start with ID and Social Security card - you\'ll need these for everything else',
        'Many banks offer second chance programs for people with banking history issues',
        'Keep all important documents in one secure, organized place',
        'Make copies of everything and store them separately'
      ]
    },
    {
      id: 'housing',
      title: '2. Housing',
      icon: '🏠',
      description: 'Securing safe, compliant housing arrangements',
      items: [
        'Confirm residency restrictions (ask supervising officer before signing a lease)',
        'Apply to transitional housing/halfway house if no stable family housing',
        'Call 211 for local shelters or housing support',
        'Save money for a deposit & rent'
      ],
      tips: [
        'NEVER sign a lease without confirming address compliance with your supervising officer',
        'Transitional housing can provide structure and support during early reentry',
        '211 is available 24/7 and connects you to local housing resources',
        'Start saving for housing costs as early as possible - deposits can be substantial'
      ]
    },
    {
      id: 'employment',
      title: '3. Employment & Income',
      icon: '💼',
      description: 'Finding work and building financial stability',
      items: [
        'Register with CareerOneStop Reentry Portal or local American Job Center',
        'Search on HonestJobs.com or other "fair chance" job boards',
        'Practice an interview script: take responsibility + focus on skills & growth',
        'Use certificates/skills earned in prison (GED, trades, custodial, clerical)',
        'Apply for jobs in construction, trucking (CDL), manufacturing, hospitality',
        'Ask employers about WOTC tax credit & Federal Bonding Program'
      ],
      tips: [
        'American Job Centers offer free services including resume help and interview practice',
        'Be honest about your background but focus on your skills and commitment to change',
        'Highlight any education, training, or certifications you earned while incarcerated',
        'Some industries are more open to hiring people with records - research these first',
        'WOTC and Federal Bonding can make you more attractive to employers'
      ],
      offlineAlternatives: [
        'Visit the Job Center in person; ask for paper job postings and staff support',
        'Use newspaper classifieds; ask local nonprofits for employer lists'
      ]
    },
    {
      id: 'health',
      title: '4. Health & Wellness',
      icon: '🏥',
      description: 'Maintaining physical and mental health',
      items: [
        'Schedule a medical & dental check-up',
        'Apply for Medicaid/insurance ASAP',
        'Fill/refill prescriptions before running out',
        'Call 988 if in emotional crisis',
        'Join a support group (NAMI, AA/NA, therapy if required)',
        'Try simple coping: 4-4-8 breathing (inhale 4s, hold 4s, exhale 8s)'
      ],
      tips: [
        'Don\'t wait for health problems to get worse - preventive care is cheaper',
        'Medicaid applications can take time, so apply immediately upon release',
        'Never let prescriptions run out - plan refills in advance',
        '988 is free, confidential, and available 24/7 for mental health crises',
        'Support groups provide community and accountability',
        'Simple breathing exercises can help manage stress and anxiety'
      ],
      offlineAlternatives: [
        'Go to your local health department or social services office for Medicaid help'
      ]
    },
    {
      id: 'technology',
      title: '5. Technology Basics',
      icon: '📱',
      description: 'Essential digital skills for modern life',
      items: [
        'Get a smartphone (ask about Lifeline free phone program)',
        'Learn: calls, texts, saving contacts, email setup',
        'Create a Gmail account for jobs & services',
        'Use Google Maps for directions & bus routes',
        'Visit the library for computer/internet basics classes'
      ],
      tips: [
        'Lifeline provides free or low-cost phones for qualifying individuals',
        'Start with basic functions before moving to advanced features',
        'Email is essential for job applications and communicating with services',
        'GPS navigation can help you get to appointments and interviews on time',
        'Libraries offer free computer classes and internet access'
      ],
      offlineAlternatives: [
        'Ask supervising officer or reentry program if they provide phones',
        'Ask Job Center staff to help set up email on their computers',
        'Ask for a paper bus schedule or transit map'
      ]
    },
    {
      id: 'legal',
      title: '6. Legal Obligations',
      icon: '⚖️',
      description: 'Staying compliant with supervision requirements',
      items: [
        'Meet with supervising officer on time — every time',
        'Keep a calendar of check-ins, curfew, treatment sessions',
        'Ask before traveling outside your area',
        'Report job changes, new residence, or medications to supervising officer',
        'Set up a payment plan for fines/restitution; keep receipts',
        'Keep copies of compliance documents (drug test results, pay stubs, certificates)'
      ],
      tips: [
        'Punctuality shows respect and responsibility - arrive early to appointments',
        'Use a physical calendar or phone calendar to track all requirements',
        'When in doubt about travel, ask first - violations aren\'t worth the risk',
        'Over-communicate with your supervising officer rather than under-communicate',
        'Payment plans show good faith effort even when money is tight',
        'Documentation protects you if there are ever questions about compliance'
      ]
    },
    {
      id: 'family',
      title: '7. Family & Support Network',
      icon: '👨‍👩‍👧‍👦',
      description: 'Rebuilding relationships and community connections',
      items: [
        'Rebuild relationships with honest communication & patience',
        'Spend quality time (walks, shared meals, family activities)',
        'Avoid old negative influences & unhealthy friendships',
        'Join community or faith groups open to returning citizens',
        'Supporters: learn supervision rules so you don\'t cause violations by accident'
      ],
      tips: [
        'Relationships take time to heal - be patient and consistent',
        'Actions speak louder than words - show change through behavior',
        'It\'s okay to end relationships that threaten your progress',
        'Community involvement helps build positive social connections',
        'Family members should understand supervision rules to avoid accidental violations'
      ]
    },
    {
      id: 'daily-living',
      title: '8. Daily Living',
      icon: '🌅',
      description: 'Building healthy routines and life skills',
      items: [
        'Create a daily routine (wake/sleep, meals, work, exercise)',
        'Practice cooking & budgeting for independence',
        'Plan transportation (bus card, bike, ride-shares)',
        'Celebrate small wins (first week violation-free, first paycheck)'
      ],
      tips: [
        'Consistent routines provide structure and reduce decision fatigue',
        'Basic life skills like cooking and budgeting build confidence and save money',
        'Reliable transportation is crucial for maintaining employment and appointments',
        'Acknowledging progress, even small steps, helps maintain motivation'
      ],
      offlineAlternatives: [
        'Ask supervising officer about approved transportation resources'
      ]
    },
    {
      id: 'long-term',
      title: '9. Long-Term Growth',
      icon: '🌱',
      description: 'Building toward a better future',
      items: [
        'Set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)',
        'Enroll in GED, trade school, or certificate program',
        'Explore community college or vocational training with Pell Grants',
        'Volunteer or mentor when able to give back',
        'Learn about registry relief/removal options in your state'
      ],
      tips: [
        'SMART goals help you focus on achievable, meaningful objectives',
        'Education and training open doors to better employment opportunities',
        'Pell Grants can make education affordable for eligible individuals',
        'Giving back to your community helps build purpose and connections',
        'Some states offer pathways to reduce or remove registry requirements'
      ],
      offlineAlternatives: [
        'Visit your local community college or adult education center'
      ]
    }
  ];

  const emergencyResources = [
    { name: '211', description: 'Local housing, food, and reentry services', contact: 'Dial 211' },
    { name: '988 Suicide & Crisis Lifeline', description: 'Mental health crisis support', contact: 'Dial 988' },
    { name: 'CareerOneStop Reentry Portal', description: 'Employment resources for returning citizens', url: 'https://www.careeronestop.org/ReEntry/reentry.aspx' },
    { name: 'HonestJobs', description: 'Job board for people with criminal records', url: 'https://honestjobs.com' },
    { name: 'SAMHSA Treatment Locator', description: 'Find mental health and substance abuse treatment', url: 'https://findtreatment.gov' },
    { name: 'NAMI', description: 'Mental health support and resources', url: 'https://nami.org' },
    { name: 'Root & Rebound', description: 'Legal hotline and reentry guides', url: 'https://rootandrebound.org' }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Reentry Checklist - Complete Guide for Returning Citizens | The SOLAR Project"
        description="Comprehensive reentry checklist for returning citizens and their families. Step-by-step guide covering housing, employment, health, legal obligations, and long-term success after incarceration."
        keywords="reentry checklist, returning citizens, post-incarceration, reentry planning, prison release, supervision compliance, employment after prison, housing after prison, reentry resources"
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
              Reentry Checklist for Returning Citizens
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              A comprehensive, step-by-step guide to successful reentry after incarceration. 
              Break down the big picture into manageable steps for staying safe, staying free, and building a better life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePrint}
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Introduction */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Checklist</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Go Step by Step</h3>
                  <p className="text-gray-600">Don't try to do everything in one day. Pick a few items each week and work through them.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Check Things Off</h3>
                  <p className="text-gray-600">Mark your progress as you go. Small victories add up quickly.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ask for Help</h3>
                  <p className="text-gray-600">Family, friends, reentry case managers, and mentors can walk through steps with you.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keep It Handy</h3>
                  <p className="text-gray-600">Carry a copy in your folder, wallet, or post it somewhere you'll see daily.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800 mb-2">Important Note</h3>
                  <p className="text-yellow-700">
                    This list is not one-size-fits-all. Everyone's conditions are different — supervision rules vary by state, 
                    supervising officer, and individual circumstances. Use this checklist as a guide, not a substitute for your 
                    supervision requirements. <strong>Always confirm anything you're unsure about with your supervising officer.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Restrictions Notice */}
      <section className="bg-blue-50 border-l-4 border-blue-400 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-800 mb-4">If You Have Internet Restrictions</h3>
              <p className="text-blue-700 mb-4">
                Some parts of this checklist mention websites or online applications. If your supervision limits internet use, 
                practical alternatives are provided throughout this guide, including:
              </p>
              <div className="text-blue-700 space-y-2">
                <p>• <strong>Job search:</strong> Visit your local American Job Center for paper applications and in-person assistance</p>
                <p>• <strong>Housing search:</strong> Check newspaper classifieds or ask community organizations for help</p>
                <p>• <strong>Health services:</strong> Dial 211 from any phone to connect with local services</p>
                <p>• <strong>Education:</strong> Visit community colleges or libraries directly for program information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {checklistSections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{section.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="text-slate-200">{section.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Checklist Items */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        Action Items
                      </h4>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => {
                          const checkId = `${section.id}-${itemIndex}`;
                          return (
                            <li key={itemIndex} className="flex items-start">
                              <input
                                type="checkbox"
                                id={checkId}
                                checked={checkedItems[checkId] || false}
                                onChange={() => toggleCheck(checkId)}
                                className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
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

                    {/* Tips */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Helpful Tips
                      </h4>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Offline Alternatives */}
                  {section.offlineAlternatives && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Offline Alternatives
                      </h4>
                      <ul className="space-y-2">
                        {section.offlineAlternatives.map((alternative, altIndex) => (
                          <li key={altIndex} className="flex items-start">
                            <svg className="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{alternative}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="bg-red-50 border-l-4 border-red-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-xl font-medium text-red-800 mb-6">Emergency & Essential Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{resource.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                    {resource.contact && (
                      <p className="text-red-600 font-medium">{resource.contact}</p>
                    )}
                    {resource.url && (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="bg-green-50 border-l-4 border-green-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                <strong>This list is a living document.</strong> Check things off as you complete them, and keep adding goals as you move forward. 
                Every small step is progress toward building the life you want. You've got this! 💪
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReentryChecklist;