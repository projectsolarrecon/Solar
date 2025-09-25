export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  path: string;
  author?: string;
}

export const allBlogPosts: BlogPost[] = [
  {
  id: "high-profile-cases-conclusion",
  title: "The Registry Is Working Exactly as Designed",
  excerpt: "A concluding manifesto on SOLAR’s High-Profile Cases Analysis series, showing how the registry is a weapon of mass distraction’designed to miss the real danger while scapegoating those who&rsquo;re repaid their debt.",
  author: "SOLAR Project",
  date: "2025-09-25",
  readTime: "10 min",
  category: "Analysis",
  tags: ["registry", "policy", "high-profile","conclusion"],
  path: "/pages/blog/2025-09-25-high-profile-cases-conclusion",
  },
  // Older posts are appended here
  // Inserted before: residency-restrictions-housing-2025-09-20
  {
    id: "residency-restrictions-housing-2025-09-20",
    title: "How Residency Restrictions Undermine Housing Stability",
    excerpt: "Residency restrictions sound like safety policy— showing how they function like a housing ban, pushing people into instability without measurable safety gains.",
    author: "The SOLAR Project",
    date: "September 20, 2025",
    readTime: "10 min read",
    category: "Policy & Housing",
    tags: ["residency restrictions", "housing stability", "homelessness", "reentry"],
    path: "/blog/residency-restrictions-housing",
  },
];

// Helper function to get the most recent posts
export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return allBlogPosts.slice(0, count);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All Posts") return allBlogPosts;
  return allBlogPosts.filter(post => post.category === category);
};

// Categories list
export const categories = [
  "All Posts",
  "Investigation",
  "Employment & Reentry",
  "Safety & Security",
  "Policy Analysis",
  "Legal Updates",
  "Personal Stories",
  "Resources",
  "Legal Guide",
   "Legal Strategy",
   "Legal Analysis",
  "Family Support Guide"
];
