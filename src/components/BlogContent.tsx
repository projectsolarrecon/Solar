import React from 'react';
import { Link } from 'react-router-dom';
import { suggestInternalLinks, getRelatedPosts } from '../utils/internalLinking';

interface BlogContentProps {
  children: React.ReactNode;
  currentPostPath: string;
  title: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ children, currentPostPath, title }) => {
  // Get content as string for analysis (simplified approach)
  const contentString = React.Children.toArray(children).join(' ');
  const relatedPosts = getRelatedPosts(contentString, currentPostPath);
  
  // Map of post paths to titles for related posts
  const postTitles: { [key: string]: string } = {
    '/blog/vigilantism-registry': 'Vigilantism & the Public Registry: A Real Talk for You and Your Family',
    '/blog/plea-vs-trial': 'Facing Sex-Crime Charges: Plea or Trial? A Clear, Candid Guide',
    '/blog/private-vs-public-defender': 'Private Attorney or Public Defender? A State vs. Federal Guide',
    '/blog/life-on-registry': 'Life on the Registry: Challenges, Adjustments, and Paths Forward',
    '/blog/rethinking-registry': 'Rethinking the Sex Offender Registry: A Critical Look at Its History',
    '/blog/legal-rights': 'Understanding the Legal Rights of Individuals Accused or Convicted',
    '/blog/dangerous-myth': 'The Dangerous Myth That Sex Offenders "Cannot Be Cured"',
    '/blog/register-all-felons': 'If You\'re Bullish on Registries, Let\'s Register Everything'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main blog content */}
      <article className="prose lg:prose-xl max-w-none">
        {children}
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
          <div className="space-y-3">
            {relatedPosts.map((postPath) => (
              <Link
                key={postPath}
                to={postPath}
                className="block p-4 bg-white rounded-lg border hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {postTitles[postPath] || 'Related Article'}
                </h4>
                <span className="text-sm text-blue-600 font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center p-6 bg-blue-50 rounded-lg">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Back to Blog
        </Link>
        <div className="flex gap-4">
          <Link
            to="/resources"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Resources
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;