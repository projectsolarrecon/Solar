import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Resources() {
  const resourceCategories = [
    {
      title: "Legal Resources",
      icon: "⚖️",
      resources: [
        {
          name: "Federal Sex-Crime Process Guide",
          type: "Guide",
          description: "Step-by-step roadmap through the federal criminal process from investigation to BOP placement, with official DOJ, USSC, and BOP sources.",
          link: "/resources/federal-process-guide"
        },
        {
          name: "State Sex-Crime Process Guide",
          type: "Guide",
          description: "Comprehensive guide to state-level sex offense cases, including arrest, trial, sentencing, and state registration requirements.",
          link: "/resources/state-process-guide"
        },
        {
          name: "Your Rights at Every Stage",
          type: "Guide",
          description: "Comprehensive guide to constitutional rights and legal protections from investigation through reentry.",
          link: "/resources/know-your-rights"
        },
        {
          name: "Registry Requirements by State",
          type: "Database",
          description: "State-by-state breakdown of registration requirements, restrictions, and compliance information.",
          link: "#"
        },
        {
         name: "SOLAR Appeals Guide",
         type: "Guide",
         description: "Step-by-step hand-holder for challenging convictions, sentences, supervision/registry decisions, and preserving future remedies.",
         link: "/resources/appeals-guide"
        },
        {
          name: "Court Forms & Templates",
          type: "Forms",
          description: "Legal forms and templates for common registry-related legal proceedings.",
          link: "#"
        }
      ]
    },
    {
      title: "Housing & Living",
      icon: "🏠",
      resources: [
        {
          name: "Housing Search Guide",
          type: "Guide",
          description: "Strategies for finding housing with registry restrictions and landlord communication tips.",
          link: "/resources/housing-search-guide"
        },
        {
          name: "Residency Restriction Maps",
          type: "Tool",
          description: "Interactive maps showing residency restrictions and compliant housing areas by location.",
          link: "#"
        },
        {
          name: "Tenant Rights Survival Guide",
          type: "Guide",
          description: "Plain-language survival advice + legal deep dives for registrants and families navigating housing and tenant rights.",
          link: "/resources/tenant-rights"
        },
        {
          name: "Policy Alternatives to Residency Restrictions",
          type: "Guide",
          description: "Evidence-based strategies for safety and housing without exclusion zones.",
          link: "/resources/policy-alternatives-residency-restrictions"
        },
        {
          name: "Emergency Housing Resources",
          type: "Directory",
          description: "List of emergency shelters and transitional housing programs that accept registry individuals.",
          link: "#"
        }
      ]
    },
    {
      title: "Employment & Education",
      icon: "💼",
      resources: [
        {
          name: "Job Search Strategies",
          type: "Guide",
          description: "Effective approaches to finding employment with a criminal background and registry restrictions.",
          link: "/resources/job-search-guide"
        },
        {
          name: "Employment Directory & Job Search Guide",
          type: "Directory",
          description: "Comprehensive directory of registrant-friendly employers and proven job search strategies for individuals with criminal backgrounds.",
          link: "/resources/employment-directory"
        },
        {
          name: "Professional Licensing & Certification Paths for Registrants",
          type: "Guide",
          description: "Step-by-step options for trades, CDL, IT, cosmetology, health-adjacent roles, and more — with offline alternatives, funding sources, and practical checklists.",
          link: "/resources/professional-licensing"
        },
        {
          name: "Small Business & Entrepreneurship Guide",
          type: "Guide",
          description: "Step-by-step, stigma-aware roadmap for registrants and families to overcome employment barriers through self-employment and entrepreneurship.",
          link: "/resources/small-business-guide"
        },
        {
          name: "Educational Opportunities",
          type: "Directory",
          description: "Colleges, trade schools, and online programs accessible to individuals on the registry.",
          link: "#"
        }
      ]
    },
    {
      title: "Mental Health & Support",
      icon: "🧠",
      resources: [
        {
          name: "Mental Health & Support Directory",
          type: "Directory",
          description: "Comprehensive directory of mental health, legal, and support resources for individuals and families affected by sex offense laws and registry requirements.",
          link: "/resources/mental-health-directory"
        },
        {
          name: "Support Groups",
          type: "Directory",
          description: "Local and online support groups for individuals and families affected by registry laws.",
          link: "#"
        },
        {
          name: "Crisis Resources",
          type: "Guide",
          description: "Immediate help resources for mental health crises and suicidal thoughts.",
          link: "#"
        },
        {
          name: "Family Support Resources",
          type: "Guide",
          description: "Resources specifically designed to help family members cope and find support.",
          link: "#"
        }
      ]
    },
    {
      title: "Reentry & Reintegration",
      icon: "🔄",
      resources: [
        {
          name: "Reentry Checklist",
          type: "Checklist",
          description: "Comprehensive step-by-step checklist for successful reentry after incarceration, covering housing, employment, health, legal obligations, and long-term planning.",
          link: "/resources/reentry-checklist"
        },
        {
          name: "Transportation Resources",
          type: "Directory",
          description: "Public transportation guides and resources for getting around with travel restrictions.",
          link: "#"
        },
        {
          name: "Financial Planning Guide",
          type: "Guide",
          description: "Managing finances, building credit, and planning for the future after conviction.",
          link: "/resources/financial-planning-guide"
        },
        {
          name: "Community Integration Tips",
          type: "Guide",
          description: "Practical advice for rebuilding relationships and becoming an active community member.",
          link: "#"
        }
      ]
    },
    {
      title: "Family & Supporter Resources",
      icon: "👨‍👩‍👧‍👦",
      resources: [
        {
         name: "The SOLAR Family & Allies Guide",
         type: "Guide",
         description: "Supporting a loved one through a sex-offense case—from arrest to reentry (and beyond). A grounded, action-oriented roadmap for families and allies, with scripts, checklists, and links.",
         link: "/resources/family-support-guide"
        },
        {
         name: "Children & Disclosure + Relationship Rebuilding Toolkit",
         type: "Guide",
         description: "Warm, step-by-step scripts and tools for talking with children, managing family reactions, rebuilding trust, and sustaining resilience.",
         link: "/resources/children-disclosure-toolkit"
        },
        {
          name: "Financial Support Strategies",
          type: "Guide",
          description: "Practical advice for families managing the financial impact of legal fees, lost income, and ongoing expenses.",
          link: "/resources/financial-support-strategies"
        }
      ]
    },
    {
      title: "Advocacy Toolkit",
      icon: "📢",
      resources: [
        {
          name: "Legislative Advocacy Guide",
          type: "Guide",
          description: "Step-by-step guide to contacting legislators, writing effective letters, and advocating for policy reform.",
          link: "/resources/legislative-advocacy-guide"
        },
        {
          name: "Research & Data Resources",
          type: "Database",
          description: "Access to peer-reviewed research, statistics, and evidence-based arguments for registry reform.",
          link: "/resources/research-data-resources"
        },
        {
          name: "Community Organizing Toolkit",
          type: "Toolkit",
          description: "Tools and strategies for building local advocacy groups and organizing community support.",
          link: "#"
        },
        {
          name: "Media & Communication Guide",
          type: "Guide",
          description: "Best practices for engaging with media, crafting messages, and sharing stories effectively.",
          link: "#"
        }
      ]
    },
    {
  title: "Current Events & Legislative Updates",
  icon: "📰",
  resources: [
         {
          name: "Legislative Tracker",
          type: "Database",
          description: "Real-time tracking of pending sex offense legislation, registry reform bills, and policy changes across all states.",
          link: "/resources/legislative-tracker"
         },
           {
          name: "Accountability Watch (Weekly)",
          type: "Series",
          description: "Weekly roundup of verified arrests, charges, pleas, convictions, and sentencings involving public figures — with registry-status context.",
          link: "/resources/accountability-watch"
        },
        {
          name: "Advocacy Wins & Updates",
          type: "News",
          description: "Recent victories in registry reform, successful court challenges, and positive policy changes nationwide.",
          link: "#"
        },
        {
          name: "High-Profile Case Analysis",
          type: "Analysis",
          description: "Expert analysis of significant court cases and their implications for sex offense law and registry requirements.",
          link: "/resources/high-profile-case-analysis"
        },
        {
          name: "Advocacy Events Calendar",
          type: "Calendar",
          description: "Upcoming advocacy meetings, legislative hearings, reform conferences, and community organizing events.",
          link: "#"
        }
      ]
    },
    {
      title: "Travel & Relocation",
      icon: "✈️",
      resources: [
        {
          name: "Interstate Moving Guide",
          type: "Guide",
          description: "Practical framework for safely relocating across state lines while on the registry.",
          link: "/resources/interstate-moving-guide"
        },
        {
          name: "Travel Restrictions by State",
          type: "Database",
          description: "Comprehensive database of travel notification requirements, restricted areas, and temporary travel permissions by jurisdiction.",
          link: "#"
        },
        {
          name: "International Travel Guide",
          type: "Guide",
          description: "Passport applications, international notification requirements, and country-specific entry restrictions for registry individuals.",
          link: "/resources/international-travel-guide"
        },
        {
          name: "Vacation & Business Travel Toolkit",
          type: "Toolkit",
          description: "Templates for travel notifications, compliance checklists, and emergency contact information for short-term travel.",
          link: "#"
        }
      ]
    }
  ];

  const emergencyResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support and suicide prevention"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 text-based crisis support"
    },
    {
      name: "SAMHSA National Helpline",
      phone: "1-800-662-4357",
      description: "Mental health and substance abuse treatment referrals"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Resources & Support - Legal Guides & Information | The SOLAR Project"
        description="Access comprehensive resources for individuals affected by sex offense laws. Find legal guides, housing assistance, employment resources, mental health support, and reentry information."
        keywords="sex offender resources, legal guides, housing assistance, employment help, mental health support, reentry resources, family support, registry compliance"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
              Essential Resources
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Resources & Support
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, legal information, and practical resources for individuals and families 
            navigating sex offense laws and their consequences.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600"></div>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive collection of guides, research, and tools
            </p>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className={`rounded-lg shadow-sm p-6 transition-all ${
                      resource.link !== "#" 
                        ? "bg-white hover:shadow-md hover:scale-[1.02] border-l-4 border-l-blue-500" 
                        : "bg-gray-100 border border-gray-300 border-dashed opacity-75"
                    }`}>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className={`text-lg font-semibold ${
                          resource.link !== "#" ? "text-gray-900" : "text-gray-600"
                        }`}>{resource.name}</h4>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                          resource.link !== "#" 
                            ? "bg-blue-100 text-blue-800" 
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {resource.type}
                        </span>
                      </div>
                      <p className={`mb-4 ${
                        resource.link !== "#" ? "text-gray-600" : "text-gray-500"
                      }`}>{resource.description}</p>
                      {resource.link !== "#" ? (
                        <Link 
                          to={resource.link}
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          View Resource
                        </Link>
                      ) : (
                        <div className="flex items-center text-gray-500">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">Coming Soon</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You Need?</h2>
              <p className="text-lg text-gray-600">
                We're constantly adding new resources. Let us know what you're looking for.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What type of resource are you looking for?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Housing assistance in Texas"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional details (optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any additional context that might help us find the right resource for you"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We'll only use this to follow up on your resource request
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on New Resources</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get notified when we add new resources, guides, and tools to help you succeed.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="bg-red-50 border-l-4 border-red-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800 mb-4">Emergency Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {emergencyResources.map((resource, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">{resource.name}</h4>
                    <p className="text-lg font-bold text-red-600 mb-1">{resource.phone}</p>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
