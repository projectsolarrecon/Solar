import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BlogPathways from "../components/blog/BlogPathways";
import BlogSeriesFilter, {
  type BlogSeriesFilterValue,
} from "../components/blog/BlogSeriesFilter";
import SEO from "../components/SEO";
import {
  blogCategories,
  blogSeries,
  getBlogPostCollectionMetadata,
  resolveBlogPathways,
} from "../data/blogCollections";
import { allBlogPosts } from "../data/blogPosts";

function Blog() {
  const getInitialVisiblePosts = () => {
    const saved = sessionStorage.getItem("blogVisiblePosts");
    return saved ? Number.parseInt(saved, 10) : 4;
  };

  const getInitialCategory = () =>
    sessionStorage.getItem("blogActiveCategory") || "All Posts";

  const getInitialSeries = (): BlogSeriesFilterValue => {
    const saved = sessionStorage.getItem("blogActiveSeries");
    return saved === "institutional-danger" || saved === "follow-the-money"
      ? saved
      : "all";
  };

  const initialCategory = getInitialCategory();
  const initialSeries = initialCategory === "All Posts" ? getInitialSeries() : "all";

  const [visiblePosts, setVisiblePosts] = useState(getInitialVisiblePosts);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeSeries, setActiveSeries] =
    useState<BlogSeriesFilterValue>(initialSeries);
  const [expandedPathways, setExpandedPathways] = useState<string[]>([]);
  const [showPathways, setShowPathways] = useState(
    initialCategory === "All Posts" && initialSeries === "all",
  );

  const readerPathways = useMemo(() => resolveBlogPathways(allBlogPosts), []);
  const hasActiveFilter = activeCategory !== "All Posts" || activeSeries !== "all";

  useEffect(() => {
    sessionStorage.setItem("blogVisiblePosts", visiblePosts.toString());
  }, [visiblePosts]);

  useEffect(() => {
    sessionStorage.setItem("blogActiveCategory", activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    sessionStorage.setItem("blogActiveSeries", activeSeries);
  }, [activeSeries]);

  const filteredPosts = useMemo(() => {
    if (activeSeries !== "all") {
      return allBlogPosts.filter(
        (post) => getBlogPostCollectionMetadata(post.path)?.series?.id === activeSeries,
      );
    }

    if (activeCategory !== "All Posts") {
      return allBlogPosts.filter((post) => post.category === activeCategory);
    }

    return allBlogPosts;
  }, [activeCategory, activeSeries]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const remainingPosts = filteredPosts.length - visiblePosts;
  const hasMorePosts = remainingPosts > 0;

  const resetVisiblePosts = () => setVisiblePosts(4);

  const scrollToResults = () => {
    window.requestAnimationFrame(() => {
      const results = document.getElementById("latest-posts");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      results?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  const clearFilters = (scroll = false) => {
    setActiveCategory("All Posts");
    setActiveSeries("all");
    setShowPathways(true);
    resetVisiblePosts();
    if (scroll) scrollToResults();
  };

  const handleCategoryChange = (category: string) => {
    if (category === "All Posts") {
      clearFilters(true);
      return;
    }

    setActiveCategory(category);
    setActiveSeries("all");
    setShowPathways(false);
    resetVisiblePosts();
    scrollToResults();
  };

  const handleSeriesChange = (series: BlogSeriesFilterValue) => {
    if (series === "all") {
      clearFilters(true);
      return;
    }

    setActiveSeries(series);
    setActiveCategory("All Posts");
    setShowPathways(false);
    resetVisiblePosts();
    scrollToResults();
  };

  const togglePathway = (id: string) => {
    setExpandedPathways((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const activeFilterLabel =
    activeSeries !== "all" ? blogSeries[activeSeries].title : activeCategory;

  return (
    <div className="bg-white">
      <SEO
        title="Blog - The SOLAR Project | Legal Updates & Advocacy Articles"
        description="Read SOLAR analysis on registry reform, public safety, institutional accountability, reentry, legal process, and the human consequences of sex-offense policy."
        keywords="sex offender registry blog, legal rights articles, registry reform news, policy analysis, public safety, institutional accountability"
      />

      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 backdrop-blur-sm text-white py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-slate-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            Latest Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold my-6 leading-tight">
            Blog & Analysis
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Evidence-based analysis, practical guidance, and thoughtful commentary on sex-offense laws, policy reform, and their impact on individuals and communities.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500" />

      <section className="bg-gray-50 py-5 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Browse by topic
            </h2>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
            <div className="flex w-max gap-3 md:w-auto md:flex-wrap md:justify-center md:gap-4">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory && activeSeries === "all"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <BlogSeriesFilter
            activeSeries={activeSeries}
            onChange={handleSeriesChange}
          />
        </div>
      </section>

      {showPathways && (
        <BlogPathways
          pathways={readerPathways}
          expandedPathways={expandedPathways}
          onToggle={togglePathway}
        />
      )}

      <section id="latest-posts" className="py-16 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasActiveFilter && (
            <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 md:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-slate-700">
                  Showing <span className="font-semibold text-slate-900">{activeFilterLabel}</span>
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => setShowPathways((current) => !current)}
                    className="text-slate-700 hover:text-blue-800 hover:underline"
                  >
                    {showPathways ? "Hide reader pathways" : "Show reader pathways"}
                  </button>
                  <button
                    type="button"
                    onClick={() => clearFilters(false)}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    Clear filter
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => {
              const collectionMetadata = getBlogPostCollectionMetadata(post.path);
              const series = collectionMetadata?.series;

              return (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      {series && (
                        <span className="bg-slate-800 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {blogSeries[series.id].title} · {series.installmentLabel}
                        </span>
                      )}
                      <span>{post.date}</span>
                      <span aria-hidden="true">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={post.path}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
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
              );
            })}
          </div>

          {hasMorePosts && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm mb-4">
                Showing {displayedPosts.length} of {filteredPosts.length} posts
              </p>
              <button
                type="button"
                onClick={() =>
                  setVisiblePosts((current) =>
                    Math.min(current + 4, filteredPosts.length),
                  )
                }
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md"
              >
                Load More Posts ({remainingPosts} remaining)
              </button>
            </div>
          )}

          {!hasMorePosts && filteredPosts.length > 4 && (
            <p className="text-center mt-12 text-gray-600">
              You&apos;ve viewed all {filteredPosts.length} matching posts.
            </p>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                No posts are currently assigned to this browsing selection.
              </p>
              <button
                type="button"
                onClick={() => clearFilters(false)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View all posts →
              </button>
            </div>
          )}
        </div>
      </section>

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
