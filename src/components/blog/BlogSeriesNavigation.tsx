import { Link, useLocation } from "react-router-dom";
import {
  blogSeries,
  getBlogPostCollectionMetadata,
  getSeriesPosts,
} from "../../data/blogCollections";
import { allBlogPosts } from "../../data/blogPosts";

interface BlogSeriesNavigationProps {
  placement: "banner" | "footer";
}

export default function BlogSeriesNavigation({
  placement,
}: BlogSeriesNavigationProps) {
  const { pathname } = useLocation();
  const metadata = getBlogPostCollectionMetadata(pathname);
  const currentSeries = metadata?.series;

  if (!currentSeries) return null;

  const series = blogSeries[currentSeries.id];
  const posts = getSeriesPosts(allBlogPosts, currentSeries.id);
  const currentIndex = posts.findIndex((post) => post.path === pathname);

  if (currentIndex === -1) return null;

  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;
  const seriesUrl = `/blog?series=${currentSeries.id}#latest-posts`;

  if (placement === "banner") {
    return (
      <aside className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Part {currentIndex + 1} of {posts.length} · Formal series
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {series.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                  {series.description}
                </p>
              </div>

              <Link
                to={seriesUrl}
                className="inline-flex flex-none items-center justify-center rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-900"
              >
                View complete series
              </Link>
            </div>

            <details className="mt-5 border-t border-slate-200 pt-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-700 hover:text-blue-800">
                See all {posts.length} installments
              </summary>
              <ol className="mt-4 space-y-2">
                {posts.map((post, index) => {
                  const isCurrent = post.path === pathname;

                  return (
                    <li key={post.path}>
                      {isCurrent ? (
                        <div className="flex gap-3 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-950">
                          <span className="font-bold">{index + 1}.</span>
                          <span className="font-semibold">{post.title} (You are here)</span>
                        </div>
                      ) : (
                        <Link
                          to={post.path}
                          className="flex gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-800"
                        >
                          <span className="font-bold">{index + 1}.</span>
                          <span>{post.title}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </details>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <nav
      aria-label={`${series.title} series navigation`}
      className="mt-12 border-t border-slate-200 pt-8"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Continue the series
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-900">
            {series.title}: Part {currentIndex + 1} of {posts.length}
          </h2>
        </div>
        <Link
          to={seriesUrl}
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
        >
          View all installments →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {previousPost ? (
          <Link
            to={previousPost.path}
            rel="prev"
            className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
              ← Previous installment
            </span>
            <span className="mt-2 block font-semibold leading-snug text-slate-900 group-hover:text-blue-800">
              {previousPost.title}
            </span>
          </Link>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">
            You are reading the first installment.
          </div>
        )}

        {nextPost ? (
          <Link
            to={nextPost.path}
            rel="next"
            className="group rounded-xl border border-slate-200 bg-slate-50 p-4 text-right transition hover:border-blue-300 hover:bg-blue-50"
          >
            <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Next installment →
            </span>
            <span className="mt-2 block font-semibold leading-snug text-slate-900 group-hover:text-blue-800">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 p-4 text-right text-sm text-slate-500">
            You have reached the final installment.
          </div>
        )}
      </div>
    </nav>
  );
}
