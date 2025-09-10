import React from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";
import ShareBar from "../solar/ShareBar"; // you'll add this component next

export default function BlogLayout({
  title,
  description,
  keywords,
  date,
  readTime,
  badge,
  lede,
  children,
}: {
  title: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  badge: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <SEO title={title} description={description} keywords={keywords} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-slate-200 hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>

          <div className="mb-4">
            <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-200 mb-6 max-w-3xl">{lede}</p>

          <div className="flex items-center text-sm text-slate-300">
            <span className="mr-6">{readTime}</span>
            <span>{date}</span>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-600 to-slate-500"></div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ShareBar />
        {children}
        <ShareBar />
      </article>
    </div>
  );
}
