import { Link } from "react-router-dom";
import SEO from "./SEO";

interface BlogTemplateProps {
  title: string;
  description: string;
  keywords: string;
  publishDate: string;
  readTime: string;
  category?: string;
  tags?: string[];
  children: React.ReactNode;
}

function BlogTemplate({
  title,
  description,
  keywords,
  publishDate,
  readTime,
  category = "Policy Analysis",
  tags = [],
  children
}: BlogTemplateProps) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${title} | The SOLAR Project`}
        description={description}
        keywords={keywords}
      />

      {/* Add JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "author": {
            "@type": "Organization",
            "name": "The SOLAR Project"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The SOLAR Project",
            "logo": {
              "@type": "ImageObject",
              "url": "https://solarproject.org/solar-project-logo.png"
            }
          },
          "datePublished": publishDate,
          "dateModified": publishDate,
          "description": description,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://solarproject.org/blog/${slug}`
          }
        })}
      </script>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
          
          {/* Category badge */}
          {category && (
            <div className="mb-4">
              <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>
          
          <div className="flex items-center text-blue-200 text-sm">
            <span>Published by The SOLAR Project</span>
            <span className="mx-2">•</span>
            <span>{publishDate}</span>
            {readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content with standardized typography */}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>

        {/* Share and Navigation */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Continue the Conversation</h3>
            <p className="text-gray-700 text-sm mb-4">
              The SOLAR Project is committed to promoting evidence-based policies and supporting those affected by the criminal justice system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/resources"
                className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Find Resources
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Continue Reading</h2>
          <div className="text-center">
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable components for consistent styling within blog posts
export const BlogSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{title}</h2>
    {children}
  </section>
);

export const BlogSubsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">{title}</h3>
    {children}
  </div>
);

export const BlogParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
);

export const BlogQuote = ({ children, author }: { children: React.ReactNode; author?: string }) => (
  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
    <p className="text-blue-800 font-medium text-lg italic">{children}</p>
    {author && <p className="text-blue-600 text-sm mt-2">— {author}</p>}
  </div>
);

export const BlogHighlight = ({ title, children, color = "blue" }: { 
  title: string; 
  children: React.ReactNode; 
  color?: "blue" | "green" | "yellow" | "red" 
}) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-400 text-blue-800 text-blue-700",
    green: "bg-green-50 border-green-400 text-green-800 text-green-700",
    yellow: "bg-yellow-50 border-yellow-400 text-yellow-800 text-yellow-700",
    red: "bg-red-50 border-red-400 text-red-800 text-red-700"
  };

  const [bgColor, borderColor, titleColor, textColor] = colorClasses[color].split(' ');

  return (
    <div className={`${bgColor} border-l-4 ${borderColor} p-6 my-8`}>
      <h3 className={`font-bold ${titleColor} mb-3`}>{title}</h3>
      <div className={textColor}>{children}</div>
    </div>
  );
};

export const BlogLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-blue-600 hover:text-blue-800 underline transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const BlogList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const BlogTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto mb-8">
    <table className="min-w-full border-collapse border border-gray-400 bg-white shadow-sm rounded-lg">
      <thead className="bg-blue-50">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-900">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-400 px-4 py-3 text-gray-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BlogTemplate;