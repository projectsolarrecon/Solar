import type { BlogPost } from "./blogPosts";

export const blogCategories = [
  "All Posts",
  "Systemic Accountability",
  "Prevention & Public Safety",
  "Registry Policy & Reform",
  "Reentry & Reintegration",
  "Incarceration & Prison Reality",
  "Legal Process & Defense",
  "Families & Support Systems",
  "Research & Evidence Literacy",
  "Institutional Abuse",
  "Legislative & Policy Tracking",
] as const;

export type BlogCategoryFilter = (typeof blogCategories)[number];
export type BlogPathwayId =
  | "new-to-solar"
  | "why-registries-fail"
  | "what-real-prevention-requires"
  | "institutional-abuse-and-trusted-access"
  | "evidence-risk-and-recidivism"
  | "for-families-and-supporters"
  | "reentry-and-stability"
  | "recon-and-unequal-accountability"
  | "institutional-danger"
  | "follow-the-money";

export type BlogSeriesId = "institutional-danger" | "follow-the-money";

export interface BlogPostCollectionMetadata {
  pathways?: BlogPathwayId[];
  series?: {
    id: BlogSeriesId;
    order: number;
    installmentLabel?: string;
  };
  originalPublicationDate?: string;
  revisedPublicationDate?: string;
}

export const blogSeries = {
  "institutional-danger": {
    id: "institutional-danger",
    title: "Institutional Danger",
    description:
      "How trusted roles, authority, access, and institutional protection create dangers that registry-centered policy does not prevent.",
  },
  "follow-the-money": {
    id: "follow-the-money",
    title: "Follow the Money",
    description:
      "How punishment, surveillance, incarceration, and compliance became profitable systems with incentives to sustain themselves.",
  },
} as const;

export const blogPostCollectionMetadata: Record<string, BlogPostCollectionMetadata> = {
  "/blog/politics-and-hypocrisy": {
    pathways: ["institutional-danger", "recon-and-unequal-accountability"],
    series: { id: "institutional-danger", order: 1, installmentLabel: "Part 1" },
  },
  "/blog/the-enforcers": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 2, installmentLabel: "Part 2" },
  },
  "/blog/sanctuary-and-silence": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 3, installmentLabel: "Part 3" },
  },
  "/blog/playing-fields-and-schoolyards": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 4, installmentLabel: "Part 4" },
  },
  "/blog/community-betrayal": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 5, installmentLabel: "Part 5" },
  },
  "/blog/first-do-no-harm": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 6, installmentLabel: "Part 6" },
  },
  "/blog/community-ties": {
    pathways: ["institutional-danger", "institutional-abuse-and-trusted-access"],
    series: { id: "institutional-danger", order: 7, installmentLabel: "Part 7" },
  },
  "/blog/inside-the-house": {
    pathways: ["institutional-danger", "what-real-prevention-requires", "new-to-solar"],
    series: { id: "institutional-danger", order: 8, installmentLabel: "Part 8" },
  },
  "/blog/follow-the-money": {
    pathways: ["follow-the-money"],
    series: { id: "follow-the-money", order: 1, installmentLabel: "Part 1" },
  },
  "/blog/follow-the-money-part2": {
    pathways: ["follow-the-money", "reentry-and-stability"],
    series: { id: "follow-the-money", order: 2, installmentLabel: "Part 2" },
  },
  "/blog/follow-the-money-part-3": {
    pathways: ["follow-the-money"],
    series: { id: "follow-the-money", order: 3, installmentLabel: "Part 3" },
  },
  "/blog/follow-the-money-part-4": {
    pathways: ["follow-the-money"],
    series: { id: "follow-the-money", order: 4, installmentLabel: "Part 4" },
  },
  "/blog/follow-the-money-part-5": {
    pathways: ["follow-the-money"],
    series: { id: "follow-the-money", order: 5, installmentLabel: "Part 5" },
  },
};

interface BlogPathwayDefinition {
  id: BlogPathwayId;
  title: string;
  eyebrow: string;
  description: string;
  pinnedPaths: string[];
  includeMetadataMembers?: boolean;
}

export const blogPathwayDefinitions: BlogPathwayDefinition[] = [
  {
    id: "new-to-solar",
    title: "New to SOLAR",
    eyebrow: "Start here",
    description:
      "A guided introduction to SOLAR’s worldview: registry critique, real risk, lived consequences, and real public safety.",
    pinnedPaths: [
      "/blog/who-is-solar",
      "/blog/rethinking-registry",
      "/blog/what-good-is-the-registry",
      "/blog/the-registry-is-not-a-prevention-plan",
      "/blog/inside-the-house",
      "/blog/child-safety-theater-isnt-child-safety",
      "/blog/life-on-registry",
      "/blog/we-dont-register-risk",
    ],
  },
  {
    id: "why-registries-fail",
    title: "Why Registries Fail",
    eyebrow: "Policy & evidence",
    description:
      "The core evidence and policy path for understanding why registry-centered safety fails communities, families, and victims.",
    pinnedPaths: [
      "/blog/the-registry-is-not-a-prevention-plan",
      "/blog/why-stranger-danger-became-law-and-institutional-abuse-became-a-report",
      "/blog/rethinking-registry",
      "/blog/what-good-is-the-registry",
      "/blog/fifty-laws-zero-logic",
      "/blog/understanding-risk-levels",
      "/blog/when-everything-is-violent",
      "/blog/the-safety-illusion",
      "/blog/why-sex-offender-registries-fail-victims",
    ],
  },
  {
    id: "what-real-prevention-requires",
    title: "What Real Prevention Requires",
    eyebrow: "What really works",
    description:
      "A constructive path for readers asking what should replace safety theater and downstream public labeling.",
    pinnedPaths: [
      "/blog/why-stranger-danger-became-law-and-institutional-abuse-became-a-report",
      "/blog/the-registry-is-not-a-prevention-plan",
      "/blog/child-safety-theater-isnt-child-safety",
      "/blog/inside-the-house",
      "/blog/the-safety-illusion",
      "/blog/the-cases-we-dont-investigate",
      "/blog/children-we-dont-protect-part1",
      "/blog/what-good-is-the-registry",
    ],
  },
  {
    id: "institutional-abuse-and-trusted-access",
    title: "Institutional Abuse and Trusted Access",
    eyebrow: "Inside the circle of trust",
    description:
      "A route through SOLAR’s work on authority, access, institutional silence, and the stranger-danger myth.",
    pinnedPaths: [
      "/blog/why-stranger-danger-became-law-and-institutional-abuse-became-a-report",
      "/blog/high-profile-cases-stranger-danger",
      "/blog/the-enforcers",
      "/blog/sanctuary-and-silence",
      "/blog/playing-fields-and-schoolyards",
      "/blog/community-betrayal",
      "/blog/first-do-no-harm",
      "/blog/community-ties",
      "/blog/prison-culture-loves-moral-certainty-until-the-accused-works-there",
    ],
  },
  {
    id: "evidence-risk-and-recidivism",
    title: "Evidence, Risk, and Recidivism",
    eyebrow: "Evidence literacy",
    description:
      "For readers who want research, risk, classification, and recidivism claims explained carefully instead of weaponized.",
    pinnedPaths: [
      "/blog/understanding-risk-levels",
      "/blog/what-good-is-the-registry",
      "/blog/when-everything-is-violent",
      "/blog/dangerous-myth",
      "/blog/political-theater",
    ],
  },
  {
    id: "for-families-and-supporters",
    title: "For Families and Supporters",
    eyebrow: "Crisis to stability",
    description:
      "A calm, practical path for spouses, parents, friends, and chosen family supporting someone through accusation, custody, registration, or reentry.",
    pinnedPaths: [
      "/blog/when-someone-you-love-is-accused",
      "/blog/legal-rights",
      "/blog/federal-sex-crime-process",
      "/blog/state-sex-crime-process",
      "/blog/vigilantism-registry",
      "/blog/hidden-costs-registries",
      "/blog/what-prison-is-actually-like",
      "/blog/community-reintegration",
    ],
  },
  {
    id: "reentry-and-stability",
    title: "Reentry and Stability",
    eyebrow: "Stability is safety",
    description:
      "A pathway about registry life, work, belonging, family strain, financial burden, incarceration reality, and rebuilding.",
    pinnedPaths: [
      "/blog/life-on-registry",
      "/blog/finding-work-after-registry",
      "/blog/community-reintegration",
      "/blog/follow-the-money-part2",
      "/blog/what-prison-is-actually-like",
      "/blog/hidden-costs-registries",
    ],
  },
  {
    id: "recon-and-unequal-accountability",
    title: "RECON and Unequal Accountability",
    eyebrow: "Register every crime or none",
    description:
      "SOLAR’s sharpest comparative path on selective punishment, public shaming, hypocrisy, and the logic of registry society.",
    pinnedPaths: [
      "/blog/register-all-felons",
      "/blog/we-dont-register-risk",
      "/blog/two-men-one-release-date",
      "/blog/welcome-to-the-neighborhood",
      "/blog/permanent-punishment-public-temporary-shame-powerful",
      "/blog/classics-and-cancel-culture",
      "/blog/politics-and-hypocrisy",
    ],
  },
  {
    id: "institutional-danger",
    title: "Institutional Danger",
    eyebrow: "Eight-part series",
    description:
      "Read SOLAR’s original series on danger embedded in trusted institutions, authority, professional roles, and community access.",
    pinnedPaths: [],
    includeMetadataMembers: true,
  },
  {
    id: "follow-the-money",
    title: "Follow the Money",
    eyebrow: "Five-part series",
    description:
      "Trace the incentives and industries that profit from punishment, surveillance, compliance, and incarceration.",
    pinnedPaths: [],
    includeMetadataMembers: true,
  },
];

export interface ResolvedBlogPathway extends Omit<BlogPathwayDefinition, "pinnedPaths"> {
  links: Array<{ label: string; path: string }>;
}

export function getBlogPostCollectionMetadata(path: string) {
  return blogPostCollectionMetadata[path];
}

export function getSeriesPosts(posts: BlogPost[], seriesId: BlogSeriesId) {
  return posts
    .filter((post) => blogPostCollectionMetadata[post.path]?.series?.id === seriesId)
    .sort(
      (a, b) =>
        (blogPostCollectionMetadata[a.path]?.series?.order ?? 0) -
        (blogPostCollectionMetadata[b.path]?.series?.order ?? 0),
    );
}

export function resolveBlogPathways(posts: BlogPost[]): ResolvedBlogPathway[] {
  const postsByPath = new Map(posts.map((post) => [post.path, post]));

  return blogPathwayDefinitions.map((pathway) => {
    const orderedPaths = [...pathway.pinnedPaths];

    if (pathway.includeMetadataMembers) {
      const metadataMembers = posts
        .filter((post) => blogPostCollectionMetadata[post.path]?.pathways?.includes(pathway.id))
        .sort((a, b) => {
          const aOrder = blogPostCollectionMetadata[a.path]?.series?.order ?? Number.MAX_SAFE_INTEGER;
          const bOrder = blogPostCollectionMetadata[b.path]?.series?.order ?? Number.MAX_SAFE_INTEGER;
          return aOrder - bOrder;
        })
        .map((post) => post.path);

      metadataMembers.forEach((path) => {
        if (!orderedPaths.includes(path)) orderedPaths.push(path);
      });
    }

    return {
      id: pathway.id,
      title: pathway.title,
      eyebrow: pathway.eyebrow,
      description: pathway.description,
      includeMetadataMembers: pathway.includeMetadataMembers,
      links: orderedPaths
        .map((path) => postsByPath.get(path))
        .filter((post): post is BlogPost => Boolean(post))
        .map((post) => ({ label: post.title, path: post.path })),
    };
  });
}
