import React from "react";
import SEO from "../SEO";
import { ShareBar, TOC } from "../solar";

export default function GuideLayout({
  title,
  description,
  keywords = "",
  date,
  readTime,
  badge = "📘 RESOURCE GUIDE",
  lede,
  showTOC = true,
  children,
}: {
  title: string;
  description: string;
  keywords?: string;
  date?: string;
  readTime?: string;
  badge?: string;
  lede?: string;
  showTOC?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <SEO title={title} description={description} keywords={keywords} />

      {/* Slim hero */}
      <section className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-slate-900/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {badge}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
          {lede && <p className="text-slate-100 mt-3 max-w-3xl">{lede}</p>}
          {(date || readTime) && (
            <div className="mt-4 text-sm text-slate-200/90 space-x-4">
              {readTime && <span>{readTime}</span>}
              {date && <span>{date}</span>}
            </div>
          )}
        </div>
      </section>

      {/* Thin divider */}
      <div className="h-1 bg-gradient-to-r from-slate-700 to-slate-600" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          <article className="prose prose-slate max-w-none">
            <ShareBar />
            {children}
            <ShareBar />
          </article>

          {showTOC && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TOC rootSelector="article" />
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
