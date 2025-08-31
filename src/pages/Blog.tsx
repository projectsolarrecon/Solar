        import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useState, useEffect } from "react";
import { allBlogPosts, categories } from "../data/blogPosts";

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