import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getRecentPosts } from "../data/blogPosts";
import { legislativeUpdates } from "../data/legislativeUpdates"; // newest-first array

// Inline component: Weekly Updates (single-file drop)
function HomeWeeklyUpdates() {
  const latest = Array.isArray(legislativeUpdates) ? legislativeUpdates.slice(0, 3) : [];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 p-5 md:p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <span aria-hidden className="text-xl">📰</span>
            <h2 className="text-lg md:text-xl font-semibold">
              Weekly Legislative & Accountability Updates
            </h2>
          </div>
          <p className="mt-1 text-slate-200 text-sm">
            Link-verified highlights from the past 7 days.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {latest.map((u) => (
            <li
              key={u.slug}
              className="rounded-2xl border border-slate-200 p-4 hover:shadow-sm transition bg-white"
            >
              <p className="text-xs text-slate-500">{u.date}</p>
              <h3 className="mt-1 font-semibold text-slate-900 text-base">{u.title}</h3>
              <p className="mt-2 text-sm text-slate-700 line-clamp-4 md:line-clamp-3">
                {u.summary}
              </p>
              <Link
                to={`/resources/legislative-tracker/${u.slug}`}
                className="mt-3 inline-flex items-center text-sm font-medium text-slate-900 hover:underline"
              >
                Read update
                <svg
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4-4 4M3 12h18"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Row */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link
            to="/resources/legislative-tracker"
            className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 w-fit"
          >
            View all updates
          </Link>
          <Link
            to="/advocacy"
            className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 w-fit"
          >
            Take action
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  // Featured resources data
  const featuredResources = [
    {
      id: 1,
      title: "Your Rights at Every Stage",
      subtitle: "A Complete Guide for Individuals Accused or Convicted of a Sex Offense",
      description:
        "This comprehensive guide helps individuals and their loved ones understand their legal rights at every stage of a sex offense case. From investigation through post-release, know your constitutional protections and how to exercise them effectively.",
      features: [
        "Constitutional rights at each stage",
        "Practical scripts and templates",
        "Crisis resources and contacts",
        "Print-friendly reference format",
      ],
      primaryButton: {
        text: "View Complete Guide",
        link: "/resources/know-your-rights",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/know-your-rights",
      },
      badge: "Legal Rights Guide",
    },
    {
      id: 2,
      title: "Quick-Start Housing Guide",
      subtitle: "For People on the Registry and Families",
      description:
        "Find housing that's affordable, safe, and compliant with residency and supervision rules—without wasting time on dead ends. This practical guide provides step-by-step strategies for navigating restrictions and securing stable housing.",
      features: [
        "Map restrictions before you search",
        "Proven landlord communication scripts",
        "Application strategies that work",
        "Templates and compliance checklists",
      ],
      primaryButton: {
        text: "View Complete Guide",
        link: "/resources/housing-search-guide",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/housing-search-guide",
      },
      badge: "Housing Guide",
    },
    {
      id: 3,
      title: "Employment Strategies Guide",
      subtitle: "Building a Sustainable Career Despite Registry Restrictions",
      description:
        "Navigate employment challenges with practical strategies for job searching, resume building, and employer communication. Learn which industries are registry-friendly and how to translate your skills into career opportunities.",
      features: [
        "Registry-friendly job sectors",
        "Resume and interview strategies",
        "Employer communication scripts",
        "Self-employment opportunities",
      ],
      primaryButton: {
        text: "View Complete Guide",
        link: "/resources/job-search-guide",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/job-search-guide",
      },
      badge: "Employment Guide",
    },
    {
      id: 4,
      title: "Mental Health Directory",
      subtitle: "Specialized Support for Individuals and Families",
      description:
        "Connect with mental health professionals who understand the unique challenges faced by individuals on registries and their families. Find therapists, support groups, and crisis resources in your area.",
      features: [
        "Registry-informed therapists by state",
        "Family counseling specialists",
        "Crisis intervention resources",
        "Insurance and payment guidance",
      ],
      primaryButton: {
        text: "View Complete Directory",
        link: "/resources/mental-health-directory",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/mental-health-directory",
      },
      badge: "Mental Health Directory",
    },
    {
      id: 5,
      title: "Reentry Success Checklist",
      subtitle: "Essential Steps for Successful Community Reintegration",
      description:
        "A comprehensive checklist covering everything from pre-release planning to long-term stability. Ensure you don't miss critical steps in housing, employment, registration, and rebuilding relationships.",
      features: [
        "Pre-release preparation timeline",
        "Registration compliance checklist",
        "Housing and employment priorities",
        "Family reunification strategies",
      ],
      primaryButton: {
        text: "View Complete Checklist",
        link: "/resources/reentry-checklist",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/reentry-checklist",
      },
      badge: "Reentry Checklist",
    },
    {
      id: 6,
      title: "Legislative Advocacy Guide",
      subtitle: "Contacting Officials & Advancing Reform",
      description:
        "Step-by-step playbook for finding your officials, choosing phone/email, and making clear, respectful, evidence-based asks. Includes templates, links to SOLAR’s Position Statements, and trusted sources.",
      features: [
        "Find local, state, and federal officials quickly",
        "Call and email scripts tailored to policy change",
        "Tips for effective respectful advocacy",
        "Links to SOLAR’s RECON stance & script generator",
      ],
      primaryButton: {
        text: "View Complete Guide",
        link: "/resources/legislative-advocacy-guide",
      },
      secondaryButton: {
        text: "Print/Save PDF",
        link: "/resources/legislative-advocacy-guide",
      },
      badge: "Advocacy Toolkit",
    },
  ];

  // Rotation state for featured resources
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResourceIndex((prev) => (prev + 1) % featuredResources.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredResources.length]);

  // Get the most recent 3 blog posts for preview
  const recentPosts = getRecentPosts(3);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  // Auto-rotate posts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % recentPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [recentPosts.length]);

  // Calculate transform styles for smooth scrolling
  const transitionStyle = {
    transform: `translateX(-${currentResourceIndex * 100}%)`,
  };

  const blogTransitionStyle = {
    transform: `translateX(-${currentPostIndex * 100}%)`,
  };

  return (
    <div className="bg-white">
      <SEO
        title="The SOLAR Project - Supporting, Organizing, Learning, Advocating, and Reforming"
        description="Evidence-based advocacy for sex offense law reform. Supporting individuals, families, and communities affected by sex offense laws through education, resources, and policy reform."
        keywords="sex offense law reform, registry reform, criminal justice reform, legal advocacy, evidence-based policy, NARSOL, sex offender registry"
      />

      {/* Hero Section (compacted min height) */}
      <section className="relative text-white overflow-hidden min-h-[64vh] md:min-h-[56vh] lg:min-h-[52vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/starry-sunset-hero-final.jpg"
            alt="Starry sunset sky with warm orange and purple colors - symbolizing hope and new beginnings"
            className="w-full h-full object-cover"
          />
          {/* Stronger overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              The SOLAR Project
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              We exist to <strong>Support, Organize, Lead, Advance, and Reform</strong> —
              providing <strong>Sex Offense Learning, Advocacy, and Resources</strong> —
              to realize a future of <strong>Safety, Opportunity, Liberty, Accountability, and Redemption</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Read Our Blog
              </Link>
              <Link
                to="/advocacy"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg"
              >
                Get Involved
              </Link>
              <Link
                to="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors shadow-lg backdrop-blur-sm"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Updates (new, right under Hero) */}
      <HomeWeeklyUpdates />

      {/* Triple SOLAR Section (Mission) – Emoji (unchanged content) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We shine light where there has been shadow—replacing stigma with knowledge, fear with compassion,
              and permanent punishment with evidence-based paths to stability and true public safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 text-2xl mr-3">🤝</span>
                  <h3 className="text-xl font-bold text-slate-900">Supporting • Organizing • Leading • Advancing • Reforming</h3>
                </div>
                <p className="text-slate-700">
                  We unite people and communities to challenge harmful laws, provide solidarity, and build a safer, more just future.
                </p>
                <ul className="mt-4 text-slate-700 space-y-2 text-sm">
                  <li>• Support: navigation, resources, community</li>
                  <li>• Organize: coalitions and credible advocacy</li>
                  <li>• Lead: evidence over myth</li>
                  <li>• Advance: prevention, treatment, stability</li>
                  <li>• Reform: overbroad laws that perpetuate harm</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 text-2xl mr-3">📚</span>
                  <h3 className="text-xl font-bold text-slate-900">Sex Offense Learning • Advocacy • Resources</h3>
                </div>
                <p className="text-slate-700">
                  We confront misinformation with research, advocate for evidence-based policy, and offer practical tools for individuals and families.
                </p>
                <ul className="mt-4 text-slate-700 space-y-2 text-sm">
                  <li>• Learning: accurate info & plain-language guides</li>
                  <li>• Advocacy: person-first, evidence-based reform</li>
                  <li>• Resources: housing, work, travel, compliance</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 text-2xl mr-3">🌱</span>
                  <h3 className="text-xl font-bold text-slate-900">Safety • Opportunity • Liberty • Accountability • Redemption</h3>
                </div>
                <p className="text-slate-700">
                  The future we fight for: real safety (not performative), restored opportunity, protected liberty, fair accountability, and true redemption.
                </p>
                <ul className="mt-4 text-slate-700 space-y-2 text-sm">
                  <li>• Safety: focus resources on actual risk, not stigma</li>
                  <li>• Opportunity: remove barriers to housing and work</li>
                  <li>• Liberty: uphold constitutional limits</li>
                  <li>• Accountability: evidence-based and mutual</li>
                  <li>• Redemption: second chances strengthen safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources (compacted) */}
      <section className="bg-white py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/80 backdrop-blur-sm border border-white/20 text-white py-6 px-8 rounded-t-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Essential Resources</h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Comprehensive guides and practical tools for navigating complex legal situations
              </p>
            </div>
          </div>

          {/* Resource Rotator (compacted + height cap on mobile) */}
          <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden max-h-[520px] md:max-h-none">
            <div className="relative">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={transitionStyle}
              >
                {featuredResources.map((resource) => (
                  <div key={resource.id} className="w-full flex-shrink-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                      {/* Content Side */}
                      <div className="p-6 lg:p-8">
                        <div className="mb-6">
                          <span className="bg-slate-800 text-white text-sm font-medium px-3 py-1 rounded-full">
                            {resource.badge}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {resource.title}
                        </h3>

                        <p className="text-base md:text-lg text-slate-700 font-medium mb-4">
                          {resource.subtitle}
                        </p>

                        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed line-clamp-5 md:line-clamp-none">
                          {resource.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to={resource.primaryButton.link}
                            className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors shadow-md flex items-center justify-center"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                            {resource.primaryButton.text}
                          </Link>
                          <Link
                            to={resource.secondaryButton.link}
                            className="border-2 border-slate-800 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center"
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            {resource.secondaryButton.text}
                          </Link>
                        </div>
                      </div>

                      {/* Features Side */}
                      <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm p-6 lg:p-8 text-white">
                        <h4 className="text-lg md:text-xl font-semibold mb-5">What's Included:</h4>
                        <ul className="space-y-6">
                          {resource.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="w-6 h-6 text-slate-300 mt-1 mr-4 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-lg leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-12 p-6 bg-slate-900/40 rounded-lg border border-slate-400/30">
                          <div className="flex items-center mb-3">
                            <svg
                              className="w-6 h-6 text-slate-300 mr-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <h5 className="font-semibold text-slate-200">Trusted & Verified</h5>
                          </div>
                          <p className="text-slate-300 text-sm">
                            All our resources are reviewed by legal experts and updated regularly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resource Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {featuredResources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentResourceIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentResourceIndex ? "bg-slate-800" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to resource ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts (compacted) */}
      <section className="bg-gray-50 py-12 md:py-14">
        {/* … keep the blog rotator, advocacy, and CTA exactly as in my previous paste … */}
      </section>
    </div>
  );
}
{/* Latest Blog Posts (compacted) */}
      <section className="bg-gray-50 py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-slate-700/80 to-slate-700/80 backdrop-blur-sm border border-white/20 text-white py-6 px-8 rounded-t-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Latest Insights</h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                Evidence-based analysis and practical guidance on sex offense laws and their impact
              </p>
            </div>
          </div>

          {/* Blog Rotator */}
          <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden max-h-[520px] md:max-h-none">
            <div className="relative">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={blogTransitionStyle}
              >
                {recentPosts.map((post) => (
                  <div key={post.id} className="w-full flex-shrink-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                      {/* Content Side */}
                      <div className="p-6 lg:p-8">
                        <div className="mb-6">
                          <span className="bg-slate-700 text-white text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed line-clamp-5 md:line-clamp-none">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-6">
                          <span className="flex items-center mr-6">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            {post.readTime}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            {post.date}
                          </span>
                        </div>

                        <Link
                          to={post.path}
                          className="inline-flex items-center bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors shadow-md"
                        >
                          Read Full Article
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </Link>
                      </div>

                      {/* Tags Side */}
                      <div className="bg-gradient-to-br from-slate-700/90 to-slate-600/90 backdrop-blur-sm p-6 lg:p-8 text-white">
                        <h4 className="text-lg md:text-xl font-semibold mb-5">Article Topics:</h4>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-slate-800/50 text-slate-100 px-3 py-2 rounded-full text-sm border border-slate-400/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-base">Research-backed analysis</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                            <span className="text-base">Practical guidance</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-base">Expert insights</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {recentPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPostIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentPostIndex ? "bg-slate-700" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to post ${index + 1}`}
              />
            ))}
          </div>

          {/* Advocacy Section */}
          <div className="text-center mt-16 mb-8">
            <div className="bg-gradient-to-r from-slate-600/80 to-slate-600/80 backdrop-blur-sm border border-white/20 text-white py-6 px-8 rounded-t-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Join the Movement</h2>
              <p className="text-lg text-slate-200 max-w-3xl mx-auto">
                Be part of meaningful change through evidence-based advocacy and community support
              </p>
            </div>
          </div>

          <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Content Side */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  Make a Difference Today
                </h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Join thousands of advocates working to reform sex offense laws and support affected individuals and families. Your voice matters.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span className="text-base font-medium text-gray-900">Join our advocacy network</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                    </svg>
                    <span className="text-base font-medium text-gray-900">Share your story</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span className="text-base font-medium text-gray-900">Access expert resources</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/advocacy"
                    className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors shadow-md flex items-center justify-center"
                  >
                    Get Involved
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-slate-600 text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Impact Side */}
              <div className="bg-gradient-to-br from-slate-600/90 to-slate-500/90 backdrop-blur-sm p-6 lg:p-8 text-white">
                <h4 className="text-lg md:text-xl font-semibold mb-5">Measuring Our Impact</h4>
                <p className="text-slate-300 text-sm mb-4">
                  We track the tangible effects of advocacy: people served, resources shared, and policy changes achieved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Help or Have Questions?</h2>
          <p className="text-lg mb-6 text-blue-200">
            We're here to provide information and connect you with the resources you need.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
                      }
