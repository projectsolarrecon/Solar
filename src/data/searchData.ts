export interface SearchItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  url: string;
  category: string;
  type: 'page' | 'blog';
  tags?: string[];
}

export const searchData: SearchItem[] = [
  // Blog Posts
  {
    id: 'all-felon-registry',
    title: 'If Registries Keep Us Safe, Why Not Register All Felons?',
    content: 'Examining the logical inconsistency of sex offender registries when other crimes have higher recidivism rates. According to the U.S. Department of Justice 2019 study tracking over 67,000 released prisoners, only 7.7% of individuals convicted of sex offenses were arrested for a new sexual crime within nine years. Meanwhile, over 80% of sex offender re-arrests were for non-sexual crimes, like drug offenses or assault. Overall recidivism: 73% of all released prisoners were rearrested within five years.',
    excerpt: 'Examining the logical inconsistency of sex offender registries when other crimes have higher recidivism rates. A data-driven analysis of registry effectiveness and fairness.',
    url: '/blog/all-felon-registry',
    category: 'Policy Analysis',
    type: 'blog',
    tags: ['Registry Reform', 'Recidivism', 'Public Safety', 'Criminal Justice']
  },
  {
    id: 'dangerous-myth',
    title: 'The Dangerous Myth That Sex Offenders "Cannot Be Cured"',
    content: 'Debunking misconceptions with verified research, compassion, and facts. This view is not only immoral—it is contradicted by robust research, clinical evidence, and constitutional principles. A meta-analysis by Lösel & Schmucker reviewed nearly 5,000 treated versus 5,400 untreated sexual offenders. Treatment programs show significant reduction in recidivism rates.',
    excerpt: 'Debunking misconceptions with verified research, compassion, and facts. Examining the false belief that sex offenders cannot be rehabilitated and why this myth is contradicted by decades of research.',
    url: '/blog/dangerous-myth',
    category: 'Policy Analysis',
    type: 'blog',
    tags: ['Treatment', 'Research', 'Rehabilitation', 'Mental Health']
  },
  {
    id: 'legal-rights',
    title: 'Understanding the Legal Rights of Individuals Accused or Convicted of Sex Offenses',
    content: 'Navigating the criminal justice system can be overwhelming, especially when facing charges as serious and stigmatized as sex offenses. This comprehensive guide outlines your legal rights at every stage of the process, from arrest through trial and beyond. Constitutional protections, due process rights, and defense strategies.',
    excerpt: 'Navigating the criminal justice system can be overwhelming, especially when facing charges as serious and stigmatized as sex offenses. This comprehensive guide outlines your legal rights at every stage of the process.',
    url: '/blog/legal-rights',
    category: 'Legal Updates',
    type: 'blog',
    tags: ['Legal Rights', 'Constitutional Law', 'Criminal Defense', 'Due Process']
  },
  {
    id: 'life-on-registry',
    title: 'Life on the Registry: Hard Truths, Real Challenges, and Reasons to Hope',
    content: 'For those newly placed on the sex offender registry, the experience can feel like a door slamming shut. This post explores the real challenges while offering genuine reasons for hope and paths forward. Housing restrictions, employment challenges, family impact, and community reintegration strategies.',
    excerpt: 'For those newly placed on the sex offender registry, the experience can feel like a door slamming shut. This post explores the real challenges while offering genuine reasons for hope and paths forward.',
    url: '/blog/life-on-registry',
    category: 'Personal Stories',
    type: 'blog',
    tags: ['Personal Experience', 'Hope', 'Reintegration', 'Support']
  },
  {
    id: 'rethinking-registry',
    title: 'Rethinking the Sex Offender Registry: A Critical Look at Its History and Global Context',
    content: 'A critical examination of America\'s sex offender registry system, built on moral panic rather than evidence, and how it makes us outliers among peer nations while failing to improve public safety. The recidivism rate for sex offenses is dramatically lower than for almost every other crime - DOJ shows 5.3% reoffense rate over 3 years compared to 68% general prison recidivism. European approaches focus on risk-based, non-public registries.',
    excerpt: 'A critical examination of America\'s sex offender registry system, built on moral panic rather than evidence, and how it makes us outliers among peer nations while failing to improve public safety.',
    url: '/blog/rethinking-registry',
    category: 'Policy Analysis',
    type: 'blog',
    tags: ['Registry Reform', 'International Comparison', 'Evidence-Based Policy', 'Public Safety']
  },
  // Pages
  {
    id: 'home',
    title: 'The SOLAR Project - Home',
    content: 'Supporting, Organizing, Learning, Advocating, and Reforming. Providing relevant, accurate, and timely information for sex offenders and their loved ones, while advocating for their rights and connecting them with specialized legal resources.',
    excerpt: 'Supporting, Organizing, Learning, Advocating, and Reforming',
    url: '/',
    category: 'Main',
    type: 'page'
  },
  {
    id: 'about',
    title: 'About Us',
    content: 'Learn about The SOLAR Project mission, values, and commitment to advocacy and reform.',
    excerpt: 'Learn about The SOLAR Project mission, values, and commitment to advocacy and reform.',
    url: '/about',
    category: 'Main',
    type: 'page'
  },
  {
    id: 'advocacy',
    title: 'Get Involved - Advocacy',
    content: 'Join us in advocating for justice, reform, and human rights. Your voice matters. Together, we can create meaningful change and ensure fair treatment for all individuals.',
    excerpt: 'Join us in advocating for justice, reform, and human rights',
    url: '/advocacy',
    category: 'Advocacy',
    type: 'page'
  },
  {
    id: 'legal-directory',
    title: 'Legal Directory',
    content: 'Find qualified attorneys who specialize in sex offense cases and understand the unique challenges involved. Connect with experienced legal professionals.',
    excerpt: 'Find qualified attorneys who specialize in sex offense cases',
    url: '/legal-directory',
    category: 'Legal',
    type: 'page'
  },
  {
    id: 'resources',
    title: 'Resources',
    content: 'Access helpful resources, guides, and information to support you through legal and personal challenges.',
    excerpt: 'Access helpful resources, guides, and information',
    url: '/resources',
    category: 'Support',
    type: 'page'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'Get in touch with The SOLAR Project. We are here to help with questions, requests for information, or to learn more about our advocacy work.',
    excerpt: 'Get in touch with The SOLAR Project for support and information',
    url: '/contact',
    category: 'Support',
    type: 'page'
  },
  {
    id: 'blog',
    title: 'Blog',
    content: 'Read our latest articles on legal updates, advocacy efforts, policy analysis, and personal stories. Stay informed about important developments.',
    excerpt: 'Read our latest articles on legal updates and advocacy efforts',
    url: '/blog',
    category: 'Main',
    type: 'page'
  }
];