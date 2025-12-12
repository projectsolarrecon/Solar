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
  // Insert this object at the TOP of the exported array (newest-first):
{
  id: "understanding-risk-levels",
  title: "Understanding “Risk Levels” on the Sex Offender Registry: What They Really Mean — and Don’t Mean",
  excerpt:
    "An explainer on how risk levels are created, why they differ so dramatically between states, and what they really mean for daily life under registration systems.",
  author: "SOLAR Project",
  date: "2025-12-12",
  readTime: "11 min read",
  category: "Policy & Reform",
  tags: [
    "sex offender registry",
    "risk assessment",
    "SORNA",
    "public safety",
    "recidivism",
    "classification systems",
    "criminal justice reform"
  ],
  path: "/blog/understanding-risk-levels",
},
{
  id: "what-prison-is-actually-like",
  title: "What Prison Is Actually Like for People with Sex-Offense Convictions",
  excerpt:
    "A grounded, direct narrative for first-timers and their families—dispelling fear-driven myths and describing the real, day-to-day experience of prison life for people with sex-offense convictions.",
  author: "SOLAR Project",
  date: "2025-12-07",
  readTime: "20 min read",
  category: "Incarceration & Reality",
  tags: [
    "prison life",
    "sex-offense",
    "first-time offenders",
    "incarceration",
    "family support",
    "federal prison"
  ],
  path: "/blog/what-prison-is-actually-like",
},
{
  id: "the-cases-we-dont-investigate",
  title: "THE CASES WE DON’T INVESTIGATE: How the Federal Government Pulled Thousands of Agents Off Child Protection and Cybercrime",
  excerpt:
    "Part II of II: The Federal Collapse — a revealing investigation into how Homeland Security reassigned its child-exploitation agents to immigration duty, gutting America’s child-protection capacity while preserving the illusion of safety through registries and rhetoric.",
  author: "SOLAR Project",
  date: "2025-11-23",
  readTime: "14 min read",
  category: "Systemic Accountability",
  tags: [
    "child protection",
    "federal policy",
    "registry reform",
    "immigration enforcement",
    "Homeland Security"
  ],
  path: "/blog/the-cases-we-dont-investigate",
},
{
  id: "children-we-dont-protect-part1",
  title: "THE CHILDREN WE DON’T PROTECT: How Los Angeles Defunded Its Anti-Trafficking Unit While Expanding a Registry That Saves No One",
  excerpt:
    "Part I of II: The Kiddie Stroll — an unflinching look at how Los Angeles dismantled its anti-trafficking unit while maintaining a billion-dollar registry system that saves no one. A data-rich, evidence-based exposé on misplaced priorities and moral failure.",
  author: "SOLAR Project",
  date: "2025-11-22",
  readTime: "19 min read",
  category: "Systemic Accountability",
  tags: [
    "trafficking",
    "child protection",
    "registry reform",
    "public policy",
    "Los Angeles"
  ],
  path: "/blog/children-we-dont-protect-part1",
},
{
  id: "community-reintegration",
  title: "Finding Your Place Again: Belonging, Safety, and Community After a Sexual-Offense Conviction",
  excerpt:
    "Freedom is not the same as belonging. This compassionate, evidence-based guide explores how people with sexual-offense convictions can rebuild safety, connection, and community under restrictive conditions.",
  author: "SOLAR Project",
  date: "2025-11-14",
  readTime: "17 min read",
  category: "Reentry & Belonging",
  tags: [
    "reentry",
    "community",
    "belonging",
    "registry",
    "restorative justice"
  ],
  path: "/blog/community-reintegration",
},
{
  id: "fifty-laws-zero-logic",
  title: "Fifty Laws, Zero Logic: How America’s Registry System Punishes Obedience",
  excerpt:
    "Fifty state registries were meant to unify public safety — instead, they turned compliance into a life sentence. Geography, not conduct, now defines who is free and who is still serving time.",
  author: "SOLAR Project",
  date: "2025-10-24",
  readTime: "13 min read",
  category: "Policy Analysis",
  tags: [
    "registry reform",
    "constitutional law",
    "residency restrictions",
    "criminal justice",
    "civil rights"
  ],
  path: "/blog/fifty-laws-zero-logic",
},
{
  id: "what-good-is-the-registry",
  title: "What Good Is the Registry?",
  excerpt:
    "If it can’t stop first-time offenders, doesn’t cut repeat offending beyond tools we already use, and makes communities less stable, what exactly is it doing?",
  author: "SOLAR Project",
  date: "2025-10-18",
  readTime: "12 min read",
  category: "Policy Analysis",
  tags: [
    "registry reform",
    "public safety",
    "recidivism",
    "criminal justice",
    "policy evidence"
  ],
  path: "/blog/what-good-is-the-registry",
},
{
  id: "follow-the-money-part-5",
  title: "Follow the Money, Part 5 — The Keepers of the Keys",
  excerpt:
    "Unions, prosecutors, politicians, and vendors have built a self-sustaining punishment economy — where sex-offense policy isn’t an accident of fear, but its most profitable product.",
  author: "SOLAR Project",
  date: "2025-10-17",
  readTime: "13 min read",
  category: "Investigations",
  tags: ["punishment economy", "registry reform", "mass incarceration", "private prisons", "political incentives"],
  path: "/blog/follow-the-money-part-5",
},
{
  id: "follow-the-money-part-4",
  title: "Cashing In on Captivity: How America Turned Incarceration into a Growth Industry",
  excerpt: "From $8 prison phone calls to billion-dollar private prison contracts, America has transformed captivity itself into an engine of profit — monetizing every moment of human contact behind bars.",
  author: "SOLAR Project",
  date: "2025-10-12",
  readTime: "10 min read",
  category: "Investigations",
  tags: ["mass incarceration", "prison telecoms", "private prisons", "commissary", "exploitation"],
  path: "/blog/follow-the-money-part-4"
},
{
  id: "follow-the-money-part-3",
  title: "Shackled for Profit: How Surveillance Became the New Prison Wall",
  excerpt: "The state has outsourced supervision to private industry — and turned freedom into a subscription model with people as the product.",
  author: "SOLAR Project",
  date: "2025-10-10",
  readTime: "13 min read",
  category: "Investigations",
  tags: ["criminal justice", "privatization", "sex offense policy", "electronic monitoring", "surveillance"],
  path: "/blog/follow-the-money-part-3"
},
{
  id: "halloween-safety-myth-2025-10-07",
  title: "Trick or Treat: How America’s Halloween ‘safety’ rituals trick the public with fear",
  excerpt:
    "Halloween inspires an entire industry of ‘safety’ laws that tell registrants to turn off lights, post signs, and stay indoors — but none of it prevents harm. The real danger on October 31 isn’t who’s on the registry, it’s who’s on the road.",
  author: "The SOLAR Project",
  date: "October 7, 2025",
  readTime: "9 min read",
  category: "Justice & Policy",
  tags: [
    "Halloween safety",
    "registry laws",
    "First Amendment",
    "NHTSA",
    "drunk driving",
    "public policy",
    "civil rights",
  ],
  path: "/blog/halloween-safety-myth",
},
{
  id: "follow-the-money-part2-2025-10-04",
  title: "Fees, Fines, and Families: The Hidden Cost of “Compliance”",
  excerpt:
    "Part 2 of the Follow the Money series reveals how supervision fees, therapy costs, and endless 'compliance' payments create an industry of perpetual punishment—funded by the families themselves.",
  author: "The SOLAR Project",
  date: "October 5, 2025",
  readTime: "13 min read",
  category: "Justice & Policy",
  tags: ["supervision fees", "probation", "polygraph", "criminal justice reform", "Follow the Money series"],
  path: "/blog/follow-the-money-part2",
},
{
  id: "follow-the-money-2025-10-04",
  title: "Follow the Money: How the Criminal Justice System Profits from Sex Offense Policy",
  excerpt:
    "Sex-offense policy isn’t just about public safety—it’s about profit. From federal grants to private contractors, unions, and supervision fees, this investigation exposes the economy built on endless punishment.",
  author: "The SOLAR Project",
  date: "October 4, 2025",
  readTime: "14 min read",
  category: "Justice & Policy",
  tags: ["SORNA", "prison economy", "criminal justice reform", "registry", "private contracts", "union lobbying"],
  path: "/blog/follow-the-money",
},
{
  id: "welcome-to-the-neighborhood-2025-10-04",
  title: "Welcome to the Neighborhood",
  excerpt:
    "When murderers walk free while non-violent offenders remain branded for life, something in our definition of justice has gone deeply wrong.",
  author: "The SOLAR Project",
  date: "October 4, 2025",
  readTime: "12 min read",
  category: "Justice & Sentencing",
  tags: ["parole", "violent offenders", "sex offender registry", "justice disparity", "criminal reform"],
  path: "/blog/welcome-to-the-neighborhood",
},
{
  id: "why-sex-offender-registries-fail-victims",
  title: "Why Sex Offender Registries Fail Victims",
  excerpt: "Sex offender registries promise safety but often fail survivors, families, and communities. This post examines why victims themselves are calling for change and what alternatives offer real healing.",
  author: "SOLAR Project",
  date: "2025-10-02",
  readTime: "12 min",
  category: "Analysis",
  tags: ["registry", "victims", "policy", "restorative justice"],
  path: "/blog/why-sex-offender-registries-fail-victims"
},
 {
  id: "classics-and-cancel-culture-2025-09-28",
  title: "Classics and Cancel Culture. Registries and Red Carpets.",
  excerpt:
    "The double standard of sex crimes in pop culture — where ordinary people face registries, while celebrities still enjoy ovations.",
  author: "The SOLAR Project",
  date: "September 28, 2025",
  readTime: "8 min read",
  category: "Cultural Critique",
  tags: ["cancel culture", "pop culture", "sex crimes", "hypocrisy", "registries"],
  path: "/blog/classics-and-cancel-culture",
},
 {
  id: "high-profile-cases-conclusion",
  title: "The Registry Is Working Exactly as Designed",
  excerpt: "A concluding manifesto on SOLAR’s High-Profile Cases Analysis series, showing how the registry is a weapon of mass distraction—designed to miss the real danger while scapegoating those who’ve repaid their debt.",
  author: "SOLAR Project",
  date: "2025-09-25",
  readTime: "10 min",
  category: "Analysis",
  tags: ["registry", "policy", "high-profile", "conclusion"],
  path: "/blog/2025-09-25-high-profile-cases-conclusion"
},
{
    id: "inside-the-house-2025-09-14",
    title: "The Call Is Coming from Inside the House",
    excerpt:
      "Family, proximity, and the myth that a map can save us. Why registries can’t protect children from the risks closest to home—and what real safety requires.",
    author: "The SOLAR Project",
    date: "September 14, 2025",
    readTime: "8 min read",
    category: "Investigative Series",
    tags: ["registry", "child safety", "prevention", "family"],
    path: "/blog/inside-the-house",
  },
{
  id: "community-ties-2025-09-11",
  title: "Community Ties: When Employers Become the Danger",
  excerpt:
    "From McDonald's to babysitting next door, employers often hold the power that enables abuse — yet the registry looks elsewhere.",
  author: "The SOLAR Project",
  date: "September 11, 2025",
  readTime: "7 min read",
  category: "Policy & Culture",
  tags: ["sex offender registry", "employment", "youth safety", "corporate accountability"],
  path: "/blog/community-ties",
},
{
  id: "first-do-no-harm-2025-09-09",
  title: "First, Do No Harm — White Coats, Comfort Blankets, and the Betrayal of Trust",
  excerpt:
    "Doctors swore an oath. Institutions sold safety. Survivors tell the truth: abuse thrived in exam rooms while registry maps offered false comfort.",
  author: "The SOLAR Project",
  date: "2025-09-09",
  readTime: "15 min",
  category: "Investigative",
  tags: [
    "Larry Nassar",
    "Robert Hadden",
    "George Tyndall",
    "James Heaps",
    "Richard Strauss",
    "Robert Anderson",
    "Earl Bradley",
    "Darius Paduch",
    "Zhi Alan Cheng",
    "Patricia Hill",
    "medical sexual abuse",
    "sex offender registry",
    "SOLAR Project"  ],
  path: "/blog/first-do-no-harm"
  },
  {
  id: "when-everything-is-violent-2025-09-08",
  title: "When Everything Is Violent, Nothing Is Violent",
  excerpt:
    "Labeling all sex crimes as 'violent' distorts justice, inflates sentences, undermines rehabilitation, and misallocates public-safety resources.",
  author: "The SOLAR Project",
  date: "2025-09-08",
  readTime: "12–14 min",
  category: "Policy",
  tags: ["violent crime classification",
    "sentencing guidelines",
    "sex offender registry",
    "Bureau of Prisons",
    "First Step Act",
    "RDAP"],
  path: "/blog/when-everything-is-violent"
  },
  {
  id: 'two-men-one-release-date',
  title: 'Two Men, One Release Date',
  excerpt: 'A drug trafficker walks free with no strings attached; a first-time offender is branded for life. What does that say about justice?',
  author: 'The SOLAR Project',
  date: 'September 5, 2025',
  readTime: '8 min read',
  category: 'Investigation',
  tags: ['Justice', 'Registry Reform', 'Policy', 'Comparative Sentencing', 'Investigative Feature'],
  path: '/blog/two-men-one-release-date'
  },
  {
  id: 'community-betrayal',
  title: 'Community Betrayal: When Trusted Youth Groups Failed Families',
  excerpt: 'Parents believed uniforms, slogans, and red-dot registry maps meant safety. But the greatest betrayals happened in Scouts, camps, and clubs trusted to protect children. This investigation exposes how systemic abuse thrived inside America\'s most iconic youth organizations.',
  author: 'The SOLAR Project',
  date: 'September 4, 2025',
  readTime: '15 min read',
  category: 'Investigation',
  tags: ['Boy Scouts', 'YMCA', 'Boys & Girls Clubs', 'Big Brothers Big Sisters', 'Registry Myth', 'Investigative Series'],
  path: '/blog/community-betrayal'
  },
  {
    id: 'playing-fields-and-schoolyards',
    title: 'Playing Fields & Schoolyards: Where the Protection Myth Fails',
    excerpt: 'Parents send their kids to school and practice believing two things are keeping them safe: the adults in charge and the map. But case after case shows what the map can\'t: the most catastrophic harm was inside systems families were told to trust.',
    author: 'The SOLAR Project',
    date: 'August 29, 2025',
    readTime: '16 min read',
    category: 'Investigation',
    tags: ['School Abuse', 'Sports Abuse', 'Registry Reform', 'Child Protection', 'Investigative Series'],
    path: '/blog/playing-fields-and-schoolyards'
  },
  {
    id: 'sanctuary-and-silence',
    title: 'Sanctuary and Silence — Faith Institutions, Abuse, and the False Comforts of the Registry',
    excerpt: 'The sanctuary is supposed to be the safest room in town. But for countless children, the most dangerous place wasn\'t a dark alley or a stranger\'s car—it was a pew, a rectory, a youth room, a church van, a kingdom hall.',
    author: 'The SOLAR Project',
    date: 'August 28, 2025',
    readTime: '18 min read',
    category: 'Investigation',
    tags: ['Clergy Abuse', 'Faith Institutions', 'Registry Reform', 'Child Protection', 'Investigative Series'],
    path: '/blog/sanctuary-and-silence'
  },
  {
    id: 'the-enforcers',
    title: 'The Enforcers — When Police, Judges, Prosecutors, and Probation Officers Commit the Crimes They Police',
    excerpt: 'Who do you call when the badge is the predator? When the robe hides abuse? When the person who controls your freedom says you\'ll lose it unless you comply? These aren\'t hypotheticals. They\'re case files — and they reveal why the public sex-offender registry doesn\'t touch the real risk.',
    author: 'The SOLAR Project',
    date: 'August 26, 2025',
    readTime: '20 min read',
    category: 'Investigation',
    tags: ['Police Sexual Abuse', 'Judicial Misconduct', 'Prosecutorial Abuse', 'Probation Officer Abuse', 'Investigative Series'],
    path: '/blog/the-enforcers'
  },
  {
    id: 'custody-without-cages',
    title: 'Custody Without Cages: Why Clements v. Secretary, DOC Could Redefine Liberty',
    excerpt: 'Florida\'s registration and residency restrictions impose parole-like restraints. The Eleventh Circuit remanded Clements for a facts-first look at whether those combined restraints amount to \'custody\' for habeas corpus. Evidence, law, and what\'s at stake.',
    author: 'The SOLAR Project',
    date: 'August 27, 2025',
    readTime: '14 min read',
    category: 'Legal Analysis',
    tags: ['Habeas Corpus', 'Clements Case', 'Florida Registry', 'Custody Standard', 'Eleventh Circuit', 'Civil Rights'],
    path: '/blog/custody-without-cages'
  },
  {
    id: 'political-theater',
    title: 'Political Theater With Dead Kids in the Wings: Why We Chose the Wrong Crime to Register',
    excerpt: 'A hard-hitting examination of how the United States built a massive public registry for the group least likely to reoffend, while higher-harm, higher-recurrence dangers remain untracked — and why that mismatch costs lives.',
    author: 'The SOLAR Project',
    date: 'August 25, 2025',
    readTime: '12 min read',
    category: 'Policy Analysis',
    tags: ['Evidence-Based Research', 'Policy Analysis', 'Recidivism Data', 'Public Safety', 'Criminal Justice Reform', 'Registry Effectiveness'],
    path: '/blog/political-theater'
  },
  {
    id: 'politics-and-hypocrisy',
    title: 'Politics & Hypocrisy — When Lawmakers Are the Offenders',
    excerpt: 'A long-form investigative exposé: the politicians who wrote America\'s sex-offense laws—while engaging in the very conduct they thundered against. Verified sources, embedded links, and SOLAR\'s case for real safety reforms.',
    author: 'The SOLAR Project',
    date: 'August 25, 2025',
    readTime: '12 min read',
    category: 'Policy Analysis',
    tags: ['Political Hypocrisy', 'Congressional Scandals', 'Registry Reform', 'Institutional Abuse', 'Investigative Series'],
    path: '/blog/politics-and-hypocrisy'
  },
  {
    id: 'finding-work-after-registry',
    title: 'Finding Work After the Registry: Strategy, Survival, and Hope',
    excerpt: 'A 15-minute, long-form guide for people on the registry: honest reality, evidence-based strategies, concrete first steps, fair-chance employers, and hope—without sugarcoating.',
    author: 'The SOLAR Project',
    date: 'August 24, 2025',
    readTime: '15 min read',
    category: 'Employment & Reentry',
    tags: ['Employment', 'Job Search', 'Fair Chance Hiring', 'Second Chance', 'Reentry'],
    path: '/blog/finding-work-after-registry'
  },
  {
    id: 'high-profile-cases-stranger-danger',
    title: 'High-Profile Cases vs. "Stranger Danger": What the Headlines Keep Teaching Us (and Why the Registry Doesn\'t)',
    excerpt: 'Long-form analysis connecting high-profile cases—Weinstein, Cosby, Epstein, Nassar, Sandusky, Catholic Church, Boy Scouts—to the realities of sexual harm, and why U.S. sex offender registries misdirect public safety efforts.',
    author: 'The SOLAR Project',
    date: 'August 21, 2025',
    readTime: '15 min read',
    category: 'Policy Analysis',
    tags: ['High-Profile Cases', 'Stranger Danger Myth', 'Registry Reform', 'Institutional Abuse', 'Policy Analysis'],
    path: '/blog/high-profile-cases-stranger-danger'
  },
  {
    id: 'federal-sex-crime-process',
    title: 'Federal Sex-Crime Process: Investigation to BOP Placement',
    excerpt: 'A detailed roadmap through the federal criminal process for sex offense cases, from initial investigation through Bureau of Prisons placement and registration requirements.',
    author: 'The SOLAR Project',
    date: 'August 17, 2025',
    readTime: '15 min read',
    category: 'Legal Guide',
    tags: ['Federal Courts', 'Criminal Process', 'Legal Guide', 'BOP'],
    path: '/blog/federal-sex-crime-process'
  },
  {
    id: 'state-sex-crime-process',
    title: 'The State Sex-Crime Case, Step by Step (and What Families Should Know)',
    excerpt: 'A comprehensive guide to state-level sex crime prosecutions from investigation through registration, with practical tips for defendants and families navigating the state court system.',
    author: 'The SOLAR Project',
    date: 'August 17, 2025',
    readTime: '12 min read',
    category: 'Legal Guide',
    tags: ['State Courts', 'Criminal Process', 'Legal Guide', 'Family Resources'],
    path: '/blog/state-sex-crime-process'
  },
  {
    id: 'when-someone-you-love-is-accused',
    title: 'When Someone You Love Is Accused: A Field Guide for Families',
    excerpt: 'A comprehensive guide for partners, parents, siblings, friends, and chosen family supporting a loved one through a sex-offense case—while protecting your own wellbeing.',
    date: 'August 14, 2025',
    readTime: '15 min read',
    category: 'Family Support Guide',
    tags: ['Family Support', 'Crisis Management', 'Children\'s Wellbeing', 'Prison Visitation', 'Boundaries', 'Self-Care', 'Evidence-Based'],
    path: '/blog/when-someone-you-love-is-accused'
  },
  {
    id: 'hidden-costs-registries',
    title: 'When the Label Hurts the Whole Family: Hidden Costs of Sex-Offender Registries',
    excerpt: 'A compassionate, data-driven look at how public sex-offender registries affect families—especially children—with research, real stories, and hopeful reforms.',
    date: 'August 13, 2025',
    readTime: '10 min read',
    category: 'Policy Analysis',
    tags: ['Family Impact', 'Policy Analysis', 'Children\'s Rights', 'Collateral Consequences', 'Registry Reform', 'Research Data'],
    path: '/blog/hidden-costs-registries'
  },
  {
    id: 'vigilantism-registry',
    title: 'Vigilantism & the Public Registry: A Real Talk for You and Your Family',
    excerpt: 'Understanding the documented risks of registry-linked vigilantism, including mistaken identity cases, and practical safety strategies for registrants and their families.',
    date: 'August 11, 2025',
    readTime: '8 min read',
    category: 'Safety & Security',
    tags: ['Safety', 'Vigilantism', 'Registry Risks', 'Family Protection'],
    path: '/blog/vigilantism-registry'
  },
  {
    id: 'plea-vs-trial',
    title: 'Facing Sex-Crime Charges: Plea or Trial? A Clear, Candid Guide',
    excerpt: 'Understanding the critical decision between pleading and going to trial in sex offense cases. Learn about the trial penalty, federal vs. state differences, and key factors for informed decision-making.',
    date: 'August 10, 2025',
    readTime: '12 min read',
    category: 'Legal Strategy',
    tags: ['Legal Strategy', 'Plea Bargain', 'Trial Defense', 'Federal Court', 'State Court'],
    path: '/blog/plea-vs-trial'
  },
  {
    id: 'private-vs-public-defender',
    title: 'Private Attorney or Public Defender? A State vs. Federal Guide for Sex‑Offense Cases',
    excerpt: 'Evidence-based analysis to help families choose between private defense attorneys and public defenders, with special considerations for sex offense cases in state and federal court.',
    date: 'August 9, 2025',
    readTime: '15 min read',
    category: 'Legal Guide',
    tags: ['Legal Defense', 'Criminal Attorney', 'Public Defender', 'Federal Court', 'State Court'],
    path: '/blog/private-vs-public-defender'
  },
  {
    id: 'life-on-registry',
    title: 'Life on the Registry: Challenges, Adjustments, and Paths Forward',
    excerpt: 'A supportive guide for registrants and their families, offering practical steps, community resources, and reasons for hope during the adjustment period.',
    date: 'July 26, 2025',
    readTime: '12 min read',
    category: 'Personal Stories',
    tags: ['Personal Experience', 'Hope', 'Reintegration', 'Support'],
    path: '/blog/life-on-registry'
  },
  {
    id: 'rethinking-registry',
    title: 'Rethinking the Sex Offender Registry: A Critical Look at Its History and Global Context',
    excerpt: 'A critical examination of America\'s sex offender registry system, built on moral panic rather than evidence, and how it makes us outliers among peer nations while failing to improve public safety.',
    category: 'Policy Analysis',
    date: 'July 18, 2025',
    readTime: '18 min read',
    tags: ['Registry Reform', 'International Comparison', 'Evidence-Based Policy', 'Public Safety'],
    path: '/blog/rethinking-registry'
  },
  {
    id: 'legal-rights',
    title: 'Understanding the Legal Rights of Individuals Accused or Convicted of Sex Offenses',
    excerpt: 'Navigating the criminal justice system can be overwhelming, especially when facing charges as serious and stigmatized as sex offenses. This comprehensive guide outlines your legal rights at every stage of the process.',
    category: 'Legal Updates',
    date: 'July 12, 2025',
    readTime: '15 min read',
    tags: ['Legal Rights', 'Constitutional Law', 'Criminal Defense', 'Due Process'],
    path: '/blog/legal-rights'
  },
  {
    id: 'dangerous-myth',
    title: 'The Dangerous Myth That Sex Offenders "Cannot Be Cured"',
    excerpt: 'Debunking misconceptions with research, compassion, and facts. A common, disturbing sentiment gaining traction is that pedophiles cannot be cured and should be executed or permanently ostracized. This idea is not only morally indefensible—it is also flatly contradicted by decades of research and clinical evidence.',
    category: 'Policy Analysis',
    date: 'July 12, 2025',
    readTime: '12 min read',
    tags: ['Treatment', 'Research', 'Rehabilitation', 'Mental Health'],
    path: '/blog/dangerous-myth'
  },
  {
    id: 'register-all-felons',
    title: 'If You\'re Bullish on Registries, Let\'s Register Everything—And I Mean Everything',
    excerpt: 'A satirical yet evidence-based blog post exploring why, if sex offender registries are truly about public safety, we don\'t register all serious felons.',
    category: 'Policy Analysis',
    date: 'July 5, 2025',
    readTime: '10 min read',
    tags: ['Registry Reform', 'Recidivism', 'Public Safety', 'Criminal Justice'],
    path: '/blog/register-all-felons'
  }, 
  {
  id: 'who-is-solar-2025-07-04',
  title: 'Who Is SOLAR, and Why Should I Care?',
  excerpt: 'Meet SOLAR: evidence-first, person-centered advocacy replacing stigma with true safety, opportunity, liberty, accountability, and redemption.',
  author: 'The SOLAR Project',
  date: '2025-07-04',
  readTime: '12–15 min',
  category: 'Advocacy',
  tags: ['SOLAR', 'Registry Reform', 'Evidence-Based Policy', 'RECON', 'Civil Rights'],
  path: '/blog/who-is-solar'
  }
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
