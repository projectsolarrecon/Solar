import { Link } from "react-router-dom";
import type { ResolvedBlogPathway } from "../../data/blogCollections";

interface BlogPathwaysProps {
  pathways: ResolvedBlogPathway[];
  expandedPathways: string[];
  onToggle: (id: string) => void;
}

export default function BlogPathways({
  pathways,
  expandedPathways,
  onToggle,
}: BlogPathwaysProps) {
  return (
    <section className="bg-white py-10 md:py-14 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 mb-4">
            Guided reading collections
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Not sure where to begin?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Topics show every article about a subject. These curated collections recommend what to read first and next.
          </p>
          <a
            href="#latest-posts"
            className="inline-flex mt-5 text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
          >
            Skip to the latest articles ↓
          </a>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-4 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
          <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5">
            {pathways.map((pathway) => {
              const isExpanded = expandedPathways.includes(pathway.id);
              const visibleLinks = isExpanded ? pathway.links : pathway.links.slice(0, 3);
              const hiddenCount = pathway.links.length - visibleLinks.length;

              return (
                <article
                  key={pathway.id}
                  className="w-[84vw] max-w-sm flex-none snap-start bg-slate-50 border border-slate-200 rounded-2xl p-4 md:w-auto md:max-w-none md:p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                      {pathway.eyebrow}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-2 mb-2">
                      {pathway.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>

                  <ol className="space-y-2">
                    {visibleLinks.map((link, index) => (
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

                  {pathway.links.length > 3 && (
                    <button
                      type="button"
                      onClick={() => onToggle(pathway.id)}
                      className="mt-4 text-sm font-semibold text-slate-700 hover:text-blue-800"
                    >
                      {isExpanded ? "Show fewer" : `View full collection (${hiddenCount} more)`}
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500 md:hidden">
          Swipe to explore more guided collections →
        </p>
      </div>
    </section>
  );
}
