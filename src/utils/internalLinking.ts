// Internal linking system for blog posts
export interface LinkingRule {
  keywords: string[];
  targetPath: string;
  linkText: string;
  description: string;
}

// Define internal linking rules
export const internalLinkingRules: LinkingRule[] = [
  // Cross-blog post links
  {
    keywords: ['plea bargain', 'plea deal', 'pleading guilty', 'trial penalty'],
    targetPath: '/blog/plea-vs-trial',
    linkText: 'plea vs trial decision',
    description: 'Links to comprehensive guide on plea vs trial decisions'
  },
  {
    keywords: ['public defender', 'private attorney', 'legal representation', 'defense attorney'],
    targetPath: '/blog/private-vs-public-defender',
    linkText: 'choosing legal representation',
    description: 'Links to guide comparing private vs public defenders'
  },
  {
    keywords: ['legal rights', 'constitutional rights', 'due process', 'miranda rights'],
    targetPath: '/blog/legal-rights',
    linkText: 'understanding your legal rights',
    description: 'Links to comprehensive legal rights guide'
  },
  {
    keywords: ['registry system', 'sex offender registry', 'registry laws', 'registration requirements'],
    targetPath: '/blog/rethinking-registry',
    linkText: 'registry system analysis',
    description: 'Links to critical analysis of registry system'
  },
  {
    keywords: ['vigilantism', 'vigilante attacks', 'registry violence', 'public safety risks'],
    targetPath: '/blog/vigilantism-registry',
    linkText: 'vigilantism and registry risks',
    description: 'Links to safety guide about vigilantism'
  },
  {
    keywords: ['life after conviction', 'reintegration', 'living on registry', 'post-conviction life'],
    targetPath: '/blog/life-on-registry',
    linkText: 'life on the registry',
    description: 'Links to supportive guide for life after conviction'
  },
  {
    keywords: ['treatment effectiveness', 'rehabilitation', 'recidivism rates', 'cannot be cured'],
    targetPath: '/blog/dangerous-myth',
    linkText: 'treatment and rehabilitation facts',
    description: 'Links to evidence-based article on treatment'
  },
  {
    keywords: ['registry for all felons', 'other crimes', 'selective enforcement', 'registry logic'],
    targetPath: '/blog/register-all-felons',
    linkText: 'registry logic analysis',
    description: 'Links to satirical analysis of registry logic'
  },

  // Site page links
  {
    keywords: ['crisis resources', 'mental health support', 'emergency help', 'suicide prevention'],
    targetPath: '/resources',
    linkText: 'crisis and support resources',
    description: 'Links to resources page with crisis support'
  },
  {
    keywords: ['housing assistance', 'employment resources', 'reentry support', 'practical resources'],
    targetPath: '/resources',
    linkText: 'practical resources and support',
    description: 'Links to comprehensive resources page'
  },
  {
    keywords: ['advocacy efforts', 'reform movement', 'get involved', 'policy change'],
    targetPath: '/advocacy',
    linkText: 'advocacy and reform efforts',
    description: 'Links to advocacy page'
  },
  {
    keywords: ['contact us', 'need help', 'questions', 'consultation'],
    targetPath: '/contact',
    linkText: 'contact our team',
    description: 'Links to contact page'
  },
  {
    keywords: ['about our mission', 'our organization', 'SOLAR Project', 'who we are'],
    targetPath: '/about',
    linkText: 'about The SOLAR Project',
    description: 'Links to about page'
  }
];

// Function to automatically add internal links to blog post content
export const addInternalLinks = (content: string, currentPostPath: string): string => {
  let processedContent = content;
  
  // Sort rules by keyword length (longest first) to avoid partial matches
  const sortedRules = [...internalLinkingRules].sort((a, b) => 
    Math.max(...b.keywords.map(k => k.length)) - Math.max(...a.keywords.map(k => k.length))
  );
  
  sortedRules.forEach(rule => {
    // Skip if linking to current post
    if (rule.targetPath === currentPostPath) return;
    
    rule.keywords.forEach(keyword => {
      // Create case-insensitive regex that doesn't match already linked text
      const regex = new RegExp(
        `(?<!<[^>]*>)\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?![^<]*</a>)`,
        'gi'
      );
      
      // Only replace first occurrence to avoid over-linking
      let hasReplaced = false;
      processedContent = processedContent.replace(regex, (match) => {
        if (hasReplaced) return match;
        hasReplaced = true;
        return `<a href="${rule.targetPath}" className="text-blue-600 hover:text-blue-800 underline font-medium">${match}</a>`;
      });
    });
  });
  
  return processedContent;
};

// Function to suggest internal links for manual review
export const suggestInternalLinks = (content: string, currentPostPath: string): LinkingRule[] => {
  const suggestions: LinkingRule[] = [];
  
  internalLinkingRules.forEach(rule => {
    if (rule.targetPath === currentPostPath) return;
    
    const hasKeyword = rule.keywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (hasKeyword) {
      suggestions.push(rule);
    }
  });
  
  return suggestions;
};

// Helper function to get related posts based on content analysis
export const getRelatedPosts = (content: string, currentPostPath: string): string[] => {
  const relatedPosts: string[] = [];
  
  internalLinkingRules.forEach(rule => {
    if (rule.targetPath === currentPostPath) return;
    if (!rule.targetPath.startsWith('/blog/')) return;
    
    const relevanceScore = rule.keywords.reduce((score, keyword) => {
      const regex = new RegExp(keyword, 'gi');
      const matches = content.match(regex);
      return score + (matches ? matches.length : 0);
    }, 0);
    
    if (relevanceScore > 0) {
      relatedPosts.push(rule.targetPath);
    }
  });
  
  return relatedPosts.slice(0, 3); // Return top 3 related posts
};