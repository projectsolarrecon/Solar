import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useState, useEffect } from "react";
import { allBlogPosts } from "../data/blogPosts";

const categories = [
  "All Posts",
  "Systemic Accountability",
  "Prevention & Public Safety",
  "Registry Policy & Reform",
  "Reentry & Reintegration",
  "Incarceration & Prison Reality",
  "Legal Process & Defense",
  "Families & Support Systems",
  "Research & Evidence Literacy",
  "Institutional Abuse",
  "Legislative & Policy Tracking",
];

const readerPathways = [
  {
    title: "New to SOLAR",
    eyebrow: "Start here",
    description:
      "A guided introduction to SOLAR’s worldview: registry critique, real risk, lived consequences, and real public safety.",
    links: [
      { label: "Who Is SOLAR, and Why Should I Care?", path: "/blog/who-is-solar" },
      { label: "Rethinking the Sex Offender Registry", path: "/blog/rethinking-registry" },
      { label: "What Good Is the Registry?", path: "/blog/what-good-is-the-registry" },
      { label: "The Call Is Coming from Inside the House", path: "/blog/inside-the-house" },
      { label: "Child Safety Theater Isn’t Child Safety", path: "/blog/child-safety-theater-isnt-child-safety" },
      { label: "Life on the Registry", path: "/blog/life-on-registry" },
      { label: "We Don’t Register Risk. We Register Contempt.", path: "/blog/we-dont-register-risk" },
    ],
  },
  {
    title: "Why Registries Fail",
    eyebrow: "Policy & evidence",
    description:
      "The core evidence and policy path for understanding why registry-centered safety fails communities, families, and victims.",
    links: [
      { label: "Rethinking the Sex Offender Registry", path: "/blog/rethinking-registry" },
      { label: "What Good Is the Registry?", path: "/blog/what-good-is-the-registry" },
      { label: "Fifty Laws, Zero Logic", path: "/blog/fifty-laws-zero-logic" },
      { label: "Understanding Risk Levels", path: "/blog/understanding-risk-levels" },
      { label: "When Everything Is Violent, Nothing Is Violent", path: "/blog/when-everything-is-violent" },
      { label: "The Safety Illusion", path: "/blog/the-safety-illusion" },
      { label: "Why Sex Offender Registries Fail Victims", path: "/blog/why-sex-offender-registries-fail-victims" },
    ],
  },
  {
    title: "What Real Prevention Requires",
    eyebrow: "What really works",
    description:
      "A constructive path for readers asking what should replace safety theater and downstream public labeling.",
    links: [
      { label: "Child Safety Theater Isn’t Child Safety", path: "/blog/child-safety-theater-isnt-child-safety" },
      { label: "The Call Is Coming from Inside the House", path: "/blog/inside-the-house" },
      { label: "The Safety Illusion", path: "/blog/the-safety-illusion" },
      { label: "The Cases We Don’t Investigate", path: "/blog/the-cases-we-dont-investigate" },
      { label: "The Children We Don’t Protect", path: "/blog/children-we-dont-protect-part1" },
      { label: "What Good Is the Registry?", path: "/blog/what-good-is-the-registry" },
    ],
  },
  {
    title: "Institutional Abuse and Trusted Access",
    eyebrow: "Inside the circle of trust",
    description:
      "A route through SOLAR’s work on authority, access, institutional silence, and the stranger-danger myth.",
    links: [
      { label: "High-Profile Cases vs. Stranger Danger", path: "/blog/high-profile-cases-stranger-danger" },
      { label: "The Enforcers", path: "/blog/the-enforcers" },
      { label: "Sanctuary and Silence", path: "/blog/sanctuary-and-silence" },
      { label: "Playing Fields & Schoolyards", path: "/blog/playing-fields-and-schoolyards" },
      { label: "Community Betrayal", path: "/blog/community-betrayal" },
      { label: "First, Do No Harm", path: "/blog/first-do-no-harm" },
      { label: "Community Ties", path: "/blog/community-ties" },
      { label: "Prison Culture Loves Moral Certainty", path: "/blog/prison-culture-loves-moral-certainty-until-the-accused-works-there" },
    ],
  },
  {
    title: "Evidence, Risk, and Recidivism",
    eyebrow: "Evidence literacy",
    description:
      "For readers who want research, risk, classification, and recidivism claims explained carefully instead of weaponized.",
    links: [
      { label: "Understanding Risk Levels", path: "/blog/understanding-risk-levels" },
      { label: "What Good Is the Registry?", path: "/blog/what-good-is-the-registry" },
      { label: "When Everything Is Violent, Nothing Is Violent", path: "/blog/when-everything-is-violent" },
      { label: "The Dangerous Myth That Sex Offenders Cannot Be Cured", path: "/blog/dangerous-myth" },
      { label: "Political Theater With Dead Kids in the Wings", path: "/blog/political-theater" },
    ],
  },
  {
    title: "For Families and Supporters",
    eyebrow: "Crisis to stability",
    description:
      "A calm, practical path for spouses, parents, friends, and chosen family supporting someone through accusation, custody, registration, or reentry.",
    links: [
      { label: "When Someone You Love Is Accused", path: "/blog/when-someone-you-love-is-accused" },
      { label: "Understanding Legal Rights", path: "/blog/legal-rights" },
      { label: "Federal Sex-Crime Process", path: "/blog/federal-sex-crime-process" },
      { label: "The State Sex-Crime Case, Step by Step", path: "/blog/state-sex-crime-process" },
      { label: "Vigilantism & the Public Registry", path: "/blog/vigilantism-registry" },
      { label: "When the Label Hurts the Whole Family", path: "/blog/hidden-costs-registries" },
      { label: "What Prison Is Actually Like", path: "/blog/what-prison-is-actually-like" },
      { label: "Finding Your Place Again", path: "/blog/community-reintegration" },
    ],
  },
  {
    title: "Reentry and Stability",
    eyebrow: "Stability is safety",
    description:
      "A pathway about registry life, work, belonging, family strain, financial burden, incarceration reality, and rebuilding.",
    links: [
      { label: "Life on the Registry", path: "/blog/life-on-registry" },
      { label: "Finding Work After the Registry", path: "/blog/finding-work-after-registry" },
      { label: "Finding Your Place Again", path: "/blog/community-reintegration" },
      { label: "Fees, Fines, and Families", path: "/blog/follow-the-money-part2" },
      { label: "What Prison Is Actually Like", path: "/blog/what-prison-is-actually-like" },
      { label: "When the Label Hurts the Whole Family", path: "/blog/hidden-costs-registries" },
    ],
  },
  {
    title: "RECON and Unequal Accountability",
    eyebrow: "Register every crime or none",
    description:
      "SOLAR’s sharpest comparative path on selective punishment, public shaming, hypocrisy, and the logic of registry society.",
    links: [
      { label: "If You’re Bullish on Registries, Let’s Register Everything", path: "/blog/register-all-felons" },
      { label: "We Don’t Register Risk. We Register Contempt.", path: "/blog/we-dont-register-risk" },
      { label: "Two Men, One Release Date", path: "/blog/two-men-one-release-date" },
      { label: "Welcome to the Neighborhood", path: "/blog/welcome-to-the-neighborhood" },
      { label: "Permanent Punishment for the Public, Temporary Shame for the Powerful", path: "/blog/permanent-punishment-public-temporary-shame-powerful" },
      { label: "Classics and Cancel Culture. Registries and Red Carpets.", path: "/blog/classics-and-cancel-culture" },
      { label: "Politics & Hypocrisy", path: "/blog/politics-and-hypocrisy" },
    ],
  },
];

function Blog() {
  // Get initial state from sessionStorage or default to 4
  const getInitialVisiblePosts = () => {
    const saved = sessionStorage.getItem('blogVisiblePosts');
    return saved ? parseInt(saved, 10) : 4;
  };

  const getInitialCategory = () => {
    return sessionStorage.getItem('blogActiveCategory') || "All Posts";
  };

  const [visiblePosts, setVisiblePosts] = useState(getInitialVisiblePosts);
  const [activeCategory, setActiveCategory] = useState(getInitialCategory);

  // Save state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('blogVisiblePosts', visiblePosts.toString());
  }, [visiblePosts]);

  useEffect(() => {
    sessionStorage.setItem('blogActiveCategory', activeCategory);
  }, [activeCategory]);

  // Filter posts by category
  const filteredPosts = activeCategory === "All Posts" 
    ? allBlogPosts
    : allBlogPosts.filter(post => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const remainingPosts = filteredPosts.length - visiblePosts;
  const hasMorePosts = remainingPosts > 0;

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 4, filteredPosts.length));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisiblePosts(4);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Blog - The SOLAR Project | Legal Updates & Advocacy Articles"
        description="Read our latest articles on sex offender registry reform, legal rights, policy analysis, and personal stories. Stay informed about important legal developments and advocacy efforts."
        keywords="sex offender registry blog, legal rights articles, registry reform news, policy analysis, legal updates, advocacy articles, constitutional rights blog"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              Latest Insights
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Blog & Analysis
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Evidence-based analysis, practical guidance, and thoughtful commentary on sex offense laws, policy reform, and their impact on individuals and communities.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === activeCategory
                    ? "bg-blue-700 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Pathways */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 mb-4">
              Start reading by pathway
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not sure where to begin?
            </h2>
            <p className="text-lg text-gray-600">
              SOLAR’s blog can be read chronologically, by category, or through guided pathways built around the questions readers bring with them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {readerPathways.map((pathway) => (
              <article
                key={pathway.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    {pathway.eyebrow}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                <ol className="space-y-2">
                  {pathway.links.map((link, index) => (
                    <li key={link.path} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center text-xs font-semibold">
                        {index + 1}
                      </span>
                      <Link
                        to={link.path}
                        className="text-blue-700 hover:text-blue-900 hover:underline leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={post.path}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags && post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={post.path}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">
                  Showing {displayedPosts.length} of {filteredPosts.length} posts
                  {activeCategory !== "All Posts" && ` in ${activeCategory}`}
                </p>
              </div>
              <button 
                onClick={handleLoadMore}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md"
              >
                Load More Posts ({remainingPosts} remaining)
              </button>
            </div>
          )}

          {/* No more posts message */}
          {!hasMorePosts && filteredPosts.length > 4 && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                You've viewed all {filteredPosts.length} {activeCategory.toLowerCase() === "all posts" ? "" : activeCategory.toLowerCase()} posts.
              </p>
              {activeCategory !== "All Posts" && (
                <button 
                  onClick={() => handleCategoryChange("All Posts")}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View All Posts →
                </button>
              )}
            </div>
          )}

          {/* Show message when no posts in category */}
          {filteredPosts.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                No posts found in the "{activeCategory}" category yet.
              </p>
              <button 
                onClick={() => handleCategoryChange("All Posts")}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View All Posts →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest legal updates, resources, and advocacy news.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-300 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Blog;