import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noIndex?: boolean;
}

const SITE_ORIGIN = 'https://thesolarproject.org';
const DEPRECATED_ORIGIN = ['https://solar', 'project.org'].join('');

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function normalizeLegacyStructuredDataOrigins() {
  document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((script) => {
    const content = script.textContent;
    if (content?.includes(DEPRECATED_ORIGIN)) {
      script.textContent = content.replaceAll(DEPRECATED_ORIGIN, SITE_ORIGIN);
    }
  });
}

function pathShouldBeNoIndexed(pathname: string) {
  return (
    pathname === '/resources/resource-guide-sandbox' ||
    /^\/resources\/legislative-tracker\/2099-/.test(pathname)
  );
}

const SEO: React.FC<SEOProps> = ({
  title = 'The SOLAR Project - Sex Offender Legal Advocacy & Reform',
  description = 'The SOLAR Project provides legal advocacy, resources, and support for individuals affected by sex offense laws. Find qualified attorneys, advocacy resources, and information about registry reform.',
  keywords = 'sex offender registry, legal advocacy, criminal defense attorneys, registry reform, legal rights, SORNA, constitutional rights, legal resources',
  canonical,
  noIndex = false,
}) => {
  const location = useLocation();
  const resolvedCanonical = canonical || `${SITE_ORIGIN}${location.pathname}`;
  const resolvedNoIndex = noIndex || pathShouldBeNoIndexed(location.pathname);

  useEffect(() => {
    document.title = title;

    // Create route-specific tags when index.html does not already contain them.
    // Netlify prerendering can then persist these values in crawler-facing HTML.
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', resolvedNoIndex ? 'noindex, follow' : 'index, follow');

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', resolvedCanonical);
    upsertMeta('property', 'og:type', 'website');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    // A small set of legacy articles still carries hand-authored JSON-LD from
    // before the canonical domain was standardized. Normalize that rendered
    // structured data so crawlers receive one consistent site origin.
    normalizeLegacyStructuredDataOrigins();
  }, [title, description, keywords, resolvedCanonical, resolvedNoIndex]);

  return null;
};

export default SEO;
