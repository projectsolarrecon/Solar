  import { useState } from 'react';
import SEO from '../../components/SEO';

function MentalHealthDirectory() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const emergencyResources = [
    {
      name: '988 Suicide & Crisis Lifeline',
      description: 'Free, confidential support by call, text, or chat',
      phone: '988',
      phoneLink: 'tel:988',
      textLink: 'sms:988',
      website: 'https://988lifeline.org',
      chat: 'https://988lifeline.org/chat'
    },
    {
      name: 'Crisis Text Line',
      description: 'Text with a trained crisis counselor',
      textInfo: 'HOME to 741741',
      textLink: 'sms:+1741741?&body=HOME',
      website: 'https://www.crisistextline.org'
    }
  ];

  const nationalOrganizations = [
    {
      name: 'NARSOL (National Association for Rational Sexual Offense Laws)',
      website: 'https://www.narsol.org',
      phone: '888-997-7765',
      phoneLink: 'tel:+18889977765',
      email: 'communications@narsol.org',
      address: 'PO Box 36123, Albuquerque, NM 87176',
      features: [
        { name: 'Community forum', link: 'https://www.narsol.org/community/narsol-connections/', text: 'NARSOL Connections' },
        { name: 'Peer support', link: 'https://www.narsol.org/community/fearless-project/', text: 'Fearless Project' }
      ]
    },
    {
      name: 'ACSOL (Alliance for Constitutional Sex Offense Laws)',
      website: 'https://all4consolaws.org',
      phone: '279-444-7956',
      phoneLink: 'tel:+12794447956',
      address: '2110 K Street, Sacramento, CA 95816',
      features: [
        { name: 'Meetings', link: 'https://all4consolaws.org/acsol-monthly-meetings/', text: 'ACSOL Monthly Meetings' }
      ]
    },
    {
      name: 'Women Against Registry (WAR)',
      website: 'https://womenagainstregistry.org',
      phone: '800-311-3764 (Option 1; live 10am–10pm CT)',
      phoneLink: 'tel:+18003113764',
      email: 'contact@womenagainstregistry.com'
    },
    {
      name: 'CURE-SORT (Sex Offenders Restored Through Treatment)',
      website: 'https://www.cure-sort.org',
      phone: '405-639-7262',
      phoneLink: 'tel:+14056397262',
      email: 'info@cure-sort.org',
      address: 'PO Box 1022, Norman, OK 73070-1022'
    },
    {
      name: 'Fellow Travelers Recovery Intergroup',
      description: '12-step support including MAPs recovery',
      features: [
        { name: 'Meetings', link: 'https://ftrecovery.org/meetings', text: 'ftrecovery.org/meetings' }
      ]
    }
  ];

  const therapyDirectories = [
    {
      name: 'ATSA Referral Directory',
      description: 'Association for the Treatment of Sexual Abusers certified providers',
      website: 'https://members.atsa.com/asaimis/contacts/search',
      linkText: 'Find a provider'
    },
    {
      name: 'IITAP (Certified Sex Addiction Therapists)',
      website: 'https://iitap.com',
      linkText: 'iitap.com'
    },
    {
      name: 'AAMFT Therapist Locator',
      description: 'American Association for Marriage and Family Therapy',
      website: 'https://www.aamft.org/therapistlocator/',
      linkText: 'aamft.org/therapistlocator'
    },
    {
      name: 'Safer Society Foundation',
      website: 'https://safersociety.org',
      linkText: 'safersociety.org'
    },
    {
      name: 'NCSBY (National Center on the Sexual Behavior of Youth)',
      website: 'https://www.ncsby.org',
      linkText: 'ncsby.org'
    }
  ];

  const legalResources = [
    {
      name: 'NACDL (National Association of Criminal Defense Lawyers)',
      phone: '202-872-8600',
      phoneLink: 'tel:+12028728600',
      email: 'assist@nacdl.org',
      website: 'https://www.nacdl.org/Content/FindaLawyer',
      linkText: 'Find a Lawyer'
    },
    {
      name: 'NARSOL Attorney Database',
      website: 'https://www.narsol.org/2023/09/narsols-attorney-database-is-open-for-business/',
      linkText: 'Attorney Referrals'
    }
  ];

  const stateOrganizations = [
    { state: 'Alabama', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Alaska', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Arizona', org: 'AZRSOL', website: 'https://azrsol.org', phone: '623-296-2904', phoneLink: 'tel:+16232962904' },
    { state: 'Arkansas', org: 'Arkansas Time After Time', website: 'https://arkansastimeaftertime.org', phone: '501-444-2828', phoneLink: 'tel:+15014442828' },
    { state: 'California', org: 'ACSOL', website: 'https://all4consolaws.org', phone: '279-444-7956', phoneLink: 'tel:+12794447956' },
    { state: 'Colorado', org: 'CSOR', website: 'https://csor-home.org', phone: '720-690-7125', phoneLink: 'tel:+17206907125' },
    { state: 'Connecticut', org: 'One Standard of Justice', website: 'https://onestandardofjustice.org', phone: '203-680-0567', phoneLink: 'tel:+12036800567' },
    { state: 'Delaware', org: 'DARSOL', website: 'https://darsol.org', phone: '302-635-0468', phoneLink: 'tel:+13026350468' },
    { state: 'Florida', org: 'Florida Action Committee', website: 'https://floridaactioncommittee.org', phone: '833-273-7325', phoneLink: 'tel:+18332737325' },
    { state: 'Georgia', org: 'Restore Georgia', website: 'https://restore-georgia.org', phone: '678-962-7765', phoneLink: 'tel:+16789627765' },
    { state: 'Hawaii', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Idaho', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Illinois', org: 'Illinois Voices', website: 'https://ilvoices.com', phone: '888-686-4237', phoneLink: 'tel:+18886864237' },
    { state: 'Indiana', org: 'Indiana Voices', website: 'https://indianavoices.org', phone: '317-662-0250', phoneLink: 'tel:+13176620250' },
    { state: 'Iowa', org: 'Iowans Unafraid', website: 'https://www.iowansunafraid.org', phone: '515-518-7189', phoneLink: 'tel:+15155187189' },
    { state: 'Kansas', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Kentucky', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Louisiana', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Maine', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Maryland', org: 'FAIR', website: 'https://fairregistry.org', phone: '301-779-1965', phoneLink: 'tel:+13017791965' },
    { state: 'Massachusetts', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Michigan', org: 'Michigan Citizens for Justice', website: 'https://micitizensforjustice.com' },
    { state: 'Minnesota', org: 'Minnesota for Our Rights', website: 'https://mnforourrights.org', phone: '651-755-4348', phoneLink: 'tel:+16517554348' },
    { state: 'Mississippi', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Missouri', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Montana', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Nebraska', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Nevada', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'New Hampshire', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'New Jersey', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'New Mexico', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'New York', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'North Carolina', org: 'NCRSOL', website: 'https://ncrsol.org', phone: '919-780-4510', phoneLink: 'tel:+19197804510' },
    { state: 'North Dakota', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Ohio', org: 'OHRsol', website: 'https://ohrsol.com' },
    { state: 'Oklahoma', org: 'OK-RSOL', website: 'https://ok-rsol.org', phone: '405-294-4299', phoneLink: 'tel:+14052944299' },
    { state: 'Oregon', org: 'Oregon Voices', website: 'https://www.oregonvoices.org', phone: '971-317-6868', phoneLink: 'tel:+19713176868' },
    { state: 'Pennsylvania', org: 'PARSOL', website: 'https://parsol.org', phone: '717-820-2237', phoneLink: 'tel:+17178202237' },
    { state: 'Rhode Island', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'South Carolina', org: 'SCRSOL', website: 'https://scrsol.org' },
    { state: 'South Dakota', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Tennessee', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Texas', org: 'Texas Voices', website: 'https://texasvoices.org', phone: '877-215-6688', phoneLink: 'tel:+18772156688' },
    { state: 'Utah', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Vermont', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Virginia', org: 'Safer Virginia', website: 'https://safervirginia.org', phone: '864-525-9186', phoneLink: 'tel:+18645259186' },
    { state: 'Washington', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'West Virginia', org: 'WVRSOL', website: 'https://wvrsol.org', phone: '304-760-9030', phoneLink: 'tel:+13047609030' },
    { state: 'Wisconsin', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'Wyoming', org: 'No active affiliate', contact: 'Contact NARSOL' },
    { state: 'District of Columbia', org: 'No active affiliate', contact: 'Contact NARSOL' }
  ];

  const reentryResources = [
    {
      name: 'CSOR (Colorado)',
      description: 'Mentoring & resource referrals',
      phone: '720-690-7125',
      phoneLink: 'tel:+17206907125'
    },
    {
      name: 'Unbroken Dreams (Florida)',
      description: 'Housing & reentry support',
      website: 'https://unbrokendreamsinc.org',
      phone: '813-440-7740',
      phoneLink: 'tel:+18134407740'
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Mental Health & Support Directory - Resources for Registry-Affected Individuals | The SOLAR Project"
        description="Comprehensive directory of mental health, legal, and support resources for individuals and families affected by sex offense laws and registry requirements. Find therapists, advocacy groups, and crisis support."
        keywords="mental health resources, sex offense support, registry support, therapy directory, crisis support, advocacy organizations, legal help, peer support groups, NARSOL, ACSOL, 988 crisis line"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                Resource Directory
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mental Health & Support Directory
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Support & Mental Health Resources for People Affected by Sex-Crime Justice & Registry Laws (U.S.)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePrint}
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Directory
              </button>
            </div>

            <div className="mt-6 text-sm text-slate-300">
              <strong>Last updated:</strong> August 17, 2025<br />
              <strong>Note:</strong> This guide is informational, not legal or clinical advice. Availability and schedules can change; always confirm directly with the organization.
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* How to Use This Directory */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Directory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">If you're in emotional distress</h3>
                  <p className="text-gray-600">
                    Use <a href="tel:988" className="text-red-600 font-semibold hover:text-red-800">988</a> or text{' '}
                    <a href="sms:+1741741?&body=HOME" className="text-red-600 font-semibold hover:text-red-800">HOME to 741741</a>.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For peer support & advocacy</h3>
                  <p className="text-gray-600">
                    Contact a state organization or join{' '}
                    <a href="https://www.narsol.org/community/fearless-project/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Fearless</a> or{' '}
                    <a href="https://all4consolaws.org/acsol-monthly-meetings/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ACSOL's meetings</a>.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For therapy</h3>
                  <p className="text-gray-600">
                    Check{' '}
                    <a href="https://members.atsa.com/asaimis/contacts/search" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ATSA</a>,{' '}
                    <a href="https://iitap.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">IITAP</a>, or{' '}
                    <a href="https://www.aamft.org/therapistlocator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">AAMFT</a>.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For legal help</h3>
                  <p className="text-gray-600">
                    See{' '}
                    <a href="https://www.nacdl.org/Content/FindaLawyer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NACDL's directory</a> or{' '}
                    <a href="https://www.narsol.org/2023/09/narsols-attorney-database-is-open-for-business/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NARSOL's attorney list</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency/Crisis Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-400 rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🚨</div>
                <div>
                  <h3 className="text-2xl font-bold">Emergency / Crisis Support (24/7)</h3>
                  <p className="text-red-100">Immediate help when you need it most</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyResources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-red-200">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{resource.name}</h4>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    <div className="space-y-2">
                      {resource.phone && (
                        <p>
                          <strong>Call:</strong>{' '}
                          <a href={resource.phoneLink} className="text-red-600 font-semibold hover:text-red-800">{resource.phone}</a>
                          {resource.textLink && (
                            <>
                              {' · '}
                              <strong>Text:</strong>{' '}
                              <a href={resource.textLink} className="text-red-600 font-semibold hover:text-red-800">988</a>
                            </>
                          )}
                        </p>
                      )}
                      {resource.textInfo && (
                        <p>
                          <strong>Text:</strong>{' '}
                          <a href={resource.textLink} className="text-red-600 font-semibold hover:text-red-800">{resource.textInfo}</a>
                        </p>
                      )}
                      {resource.website && (
                        <p>
                          <strong>Website:</strong>{' '}
                          <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            {resource.website.replace('https://', '')}
                          </a>
                        </p>
                      )}
                      {resource.chat && (
                        <p>
                          <a href={resource.chat} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            Chat online
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* National Advocacy & Peer Support */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🤝</div>
                <div>
                  <h3 className="text-2xl font-bold">National Advocacy & Peer Support</h3>
                  <p className="text-slate-200">Organizations providing advocacy, community, and peer support</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {nationalOrganizations.map((org, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">{org.name}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        {org.website && (
                          <p>
                            <strong>Website:</strong>{' '}
                            <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                              {org.website.replace('https://', '').replace('www.', '')}
                            </a>
                          </p>
                        )}
                        {org.phone && (
                          <p>
                            <strong>Phone:</strong>{' '}
                            <a href={org.phoneLink} className="text-blue-600 hover:text-blue-800">{org.phone}</a>
                          </p>
                        )}
                        {org.email && (
                          <p>
                            <strong>Email:</strong>{' '}
                            <a href={`mailto:${org.email}`} className="text-blue-600 hover:text-blue-800">{org.email}</a>
                          </p>
                        )}
                      </div>
                      <div>
                        {org.address && <p><strong>Mailing:</strong> {org.address}</p>}
                      </div>
                    </div>

                    {org.features && (
                      <div>
                        <strong className="text-gray-900">Features:</strong>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                          {org.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>
                              <strong>{feature.name}:</strong>{' '}
                              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                {feature.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {org.description && (
                      <p className="text-gray-600 mt-2">{org.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Therapy & Clinical Care */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🏥</div>
                <div>
                  <h3 className="text-2xl font-bold">Therapy & Clinical Care (Find a Provider)</h3>
                  <p className="text-slate-200">Professional directories for finding qualified therapists</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {therapyDirectories.map((directory, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{directory.name}</h4>
                    {directory.description && <p className="text-gray-600 mb-3">{directory.description}</p>}
                    <a 
                      href={directory.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      {directory.linkText} →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Help */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">⚖️</div>
                <div>
                  <h3 className="text-2xl font-bold">Legal Help & Know-Your-Rights</h3>
                  <p className="text-slate-200">Find qualified attorneys experienced with sex offense cases</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalResources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">{resource.name}</h4>
                    <div className="space-y-2">
                      <p>
                        <strong>Directory:</strong>{' '}
                        <a 
                          href={resource.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          {resource.linkText}
                        </a>
                      </p>
                      {resource.phone && (
                        <p>
                          <strong>Phone:</strong>{' '}
                          <a href={resource.phoneLink} className="text-blue-600 hover:text-blue-800">{resource.phone}</a>
                        </p>
                      )}
                      {resource.email && (
                        <p>
                          <strong>Email:</strong>{' '}
                          <a href={`mailto:${resource.email}`} className="text-blue-600 hover:text-blue-800">{resource.email}</a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* State Organizations */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">🗺️</div>
                  <div>
                    <h3 className="text-2xl font-bold">State-by-State Organizations</h3>
                    <p className="text-slate-200">Local advocacy and support organizations by state</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSection('states')}
                  className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {expandedSections['states'] ? 'Collapse' : 'Expand All'}
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-lg">
                <p className="text-slate-700">
                  <strong>Note:</strong> If your state is not listed, contact NARSOL for referrals:{' '}
                  <a href="https://www.narsol.org/contact-us" target="_blank" rel="noopener noreferrer" className="underline">narsol.org/contact-us</a> ·{' '}
                  <a href="tel:+18889977765" className="underline">888-997-7765</a>
                </p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${expandedSections['states'] ? '' : 'max-h-96 overflow-hidden'}`}>
                {stateOrganizations.map((state, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{state.state}</h4>
                    <div className="space-y-1">
                      {state.website ? (
                        <p>
                          <a href={state.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                            {state.org}
                          </a>
                        </p>
                      ) : (
                        <p className="text-gray-700 italic">{state.org}</p>
                      )}
                      {state.phone && (
                        <p className="text-sm text-gray-600">
                          <strong>Phone:</strong>{' '}
                          <a href={state.phoneLink} className="text-blue-600 hover:text-blue-800">{state.phone}</a>
                        </p>
                      )}
                      {state.contact && (
                        <p className="text-sm text-gray-500">{state.contact}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {!expandedSections['states'] && (
                <div className="mt-4 text-center">
                  <button
                    onClick={() => toggleSection('states')}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Show All States
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Reentry & Practical Help */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">🏠</div>
                <div>
                  <h3 className="text-2xl font-bold">Reentry & Practical Help (selected)</h3>
                  <p className="text-slate-200">Organizations providing housing, mentoring, and reentry support</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reentryResources.map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{resource.name}</h4>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    <div className="space-y-2">
                      {resource.phone && (
                        <p>
                          <strong>Phone:</strong>{' '}
                          <a href={resource.phoneLink} className="text-blue-600 hover:text-blue-800">{resource.phone}</a>
                        </p>
                      )}
                      {resource.website && (
                        <p>
                          <strong>Website:</strong>{' '}
                          <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            {resource.website.replace('https://', '')}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Keep This Directory Updated</h3>
            <p className="text-gray-600">
              Organizations and contact information change frequently. If you find outdated information or know of 
              resources that should be included, please help us keep this directory current by contacting The SOLAR Project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MentalHealthDirectory;