import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getRecentPosts } from "../data/blogPosts";

type LinkCard = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: string;
  tone: string;
};

const audiencePathways: LinkCard[] = [
  {
    title: "I need practical help",
    description:
      "Start with plain-language guides for housing, work, moving, travel, reentry, supervision, and daily life on the registry.",
    link: "/resources",
    linkText: "Browse Resources",
    icon: "🧭",
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    title: "I am supporting someone I love",
    description:
      "Find family-centered guidance for communication, stability, disclosure decisions, emotional support, and long-term planning.",
    link: "/resources/family-support-guide",
    linkText: "Family Support Guide",
    icon: "🤝",
    tone: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    title: "I want to understand the evidence",
    description:
      "Use SOLAR’s research and data resources to separate prevention from punishment, evidence from myth, and claims from proof.",
    link: "/resources/research-data-resources",
    linkText: "Explore the Evidence",
    icon: "📚",
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "I want to track laws and policy",
    description:
      "Follow proposed bills, registry expansions, reform efforts, and public-safety claims across state and federal systems.",
    link: "/resources/legislative-tracker",
    linkText: "Open Legislative Tracker",
    icon: "⚖️",
    tone: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
  {
    title: "I want to advocate for reform",
    description:
      "Use respectful, evidence-based advocacy tools to contact officials, prepare testimony, organize messages, and stay focused.",
    link: "/resources/legislative-advocacy-guide",
    linkText: "Use Advocacy Guide",
    icon: "📣",
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "I am researching registry policy",
    description:
      "Find analysis for journalists, students, researchers, policymakers, and community members trying to understand what works.",
    link: "/blog",
    linkText: "Read SOLAR Analysis",
    icon: "🔎",
    tone: "bg-slate-100 text-slate-700 ring-slate-200",
  },
];

const coreTools: LinkCard[] = [
  {
    title: "State Registry Rules",
    description:
      "A practical starting point for understanding state-level registration rules, timelines, public website exposure, and relief paths.",
    link: "/resources/state-registry",
    linkText: "Check Your State",
    icon: "🗺️",
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    title: "Research & Data Resources",
    description:
      "A source-grounded guide for reading studies, recidivism claims, registry research, public-safety evidence, and policy arguments.",
    link: "/resources/research-data-resources",
    linkText: "Open Research Guide",
    icon: "📊",
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "Legislative Tracker",
    description:
      "Track new bills, lawmaking trends, public-safety narratives, and opportunities for advocacy.",
    link: "/resources/legislative-tracker",
    linkText: "Track Laws & Bills",
    icon: "🏛️",
    tone: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  },
  {
    title: "Accountability Watch",
    description:
      "Follow cases and patterns that show why real prevention requires looking beyond the stranger-danger myth.",
    link: "/resources/accountability-watch",
    linkText: "View Accountability Watch",
    icon: "👀",
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "Interstate Moving Guide",
    description:
      "Plan a move across state lines by separating registry duties, supervision rules, timing, documentation, and risk points.",
    link: "/resources/interstate-moving-guide",
    linkText: "Plan a Move",
    icon: "🚚",
    tone: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  },
  {
    title: "International Travel Guide",
    description:
      "Understand the difference between U.S. notice requirements, destination-country practice, transit risks, and practical planning.",
    link: "/resources/international-travel-guide",
    linkText: "Plan Travel Carefully",
    icon: "✈️",
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
];

const beliefCards = [
  {
    title: "Evidence over myth",
    text: "Public policy should be tested against research, real-world outcomes, and careful definitions — not panic, slogans, or political theater.",
  },
  {
    title: "Prevention over performance",
    text: "Real child safety asks who has access, who supervises that access, who receives complaints, and what happens when systems fail.",
  },
  {
    title: "Support strengthens safety",
    text: "Stable housing, employment, treatment, family support, and community reintegration are public-safety tools, not excuses.",
  },
  {
    title: "Accountability must be honest",
    text: "Individuals, institutions, lawmakers, and systems should all be accountable for harm, concealment, failed prevention, and ineffective policy.",
  },
];

export default function Home(): JSX.Element {
  const recentPosts = getRecentPosts(3);

  return (
    <div className="bg-white">
      <SEO
        title="The SOLAR Project | Registry Reform, Resources, Advocacy, and Evidence"
        description="The SOLAR Project provides source-grounded resources, evidence literacy, legislative tracking, advocacy tools, and support for people and families affected by sex offense registries."
        keywords="sex offense registry reform, sex offender registry resources, registry reform advocacy, reentry resources, sex offense law, legislative tracker, evidence-based public safety"
      />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/starry-sunset-hero-final.jpg"
            alt="Starry sunset sky with warm orange and purple colors symbolizing hope and new beginnings"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-slate-950/60 to-slate-950/80" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-100 backdrop-blur">
              Registry reform • resources • advocacy • support
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight drop-shadow-lg md:text-6xl">
              The SOLAR Project
            </h1>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-slate-100 md:text-2xl">
              Practical help, evidence-based analysis, and reform advocacy for people, families, and communities affected by sex offense registries.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/resources"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 shadow-lg transition-colors hover:bg-slate-100"
              >
                Find Practical Help
              </Link>
              <Link
                to="/resources/state-registry"
                className="rounded-lg bg-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
              >
                Check State Rules
              </Link>
              <Link
                to="/resources/legislative-tracker"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
              >
                Track New Laws
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
              <Link to="/blog" className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Read Analysis
              </Link>
              <Link to="/resources/research-data-resources" className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Explore Evidence
              </Link>
              <Link to="/resources/accountability-watch" className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Accountability Watch
              </Link>
              <Link to="/advocacy" className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Start here</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Choose the path that fits your situation</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              SOLAR serves different readers for different reasons. These entry points help people get to the right part of the site without having to know the whole structure first.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiencePathways.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl ring-1 ${item.tone}`}>
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mb-5 leading-relaxed text-slate-600">{item.description}</p>
                <span className="font-semibold text-blue-700 transition group-hover:text-blue-900">
                  {item.linkText} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-t-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-8 text-center text-white shadow-lg">
            <h2 className="text-3xl font-bold md:text-4xl">Core SOLAR Tools</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-slate-200">
              Practical, plain-language tools for navigation, policy tracking, evidence literacy, and reform advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-b-2xl border border-t-0 border-slate-200 bg-white p-5 shadow-xl md:grid-cols-2 lg:grid-cols-3">
            {coreTools.map((tool) => (
              <div key={tool.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl ring-1 ${tool.tone}`}>
                  {tool.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-950">{tool.title}</h3>
                <p className="mb-5 leading-relaxed text-slate-600">{tool.description}</p>
                <Link to={tool.link} className="font-semibold text-blue-700 hover:text-blue-900">
                  {tool.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">What SOLAR does</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                We connect practical survival needs to serious policy reform.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                People need help now. Families need stability now. Communities need prevention that works now. SOLAR’s work brings those needs together with evidence literacy, legal-system navigation, legislative tracking, and public accountability.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/about" className="rounded-lg bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-700">
                  About SOLAR
                </Link>
                <Link to="/resources/research-data-resources" className="rounded-lg border-2 border-slate-900 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-white">
                  Evidence Base
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {beliefCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-bold text-slate-950">{card.title}</h3>
                  <p className="leading-relaxed text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-t-2xl bg-gradient-to-r from-slate-800 to-slate-600 px-6 py-8 text-center text-white shadow-lg">
            <h2 className="text-3xl font-bold md:text-4xl">Latest SOLAR Analysis</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-slate-200">
              Recent writing on registry policy, institutional accountability, public-safety myths, and practical reform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-b-2xl border border-t-0 border-slate-200 bg-white p-5 shadow-xl md:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    {post.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight text-slate-950">{post.title}</h3>
                <p className="mb-5 flex-1 leading-relaxed text-slate-600">{post.excerpt}</p>
                <div className="mb-5 text-sm text-slate-500">
                  {post.date} • {post.readTime}
                </div>
                <Link to={post.path} className="font-semibold text-blue-700 hover:text-blue-900">
                  Read article →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/blog" className="inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Take action</p>
                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">Help move the conversation from fear to evidence.</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-700">
                  Reform work does not require everyone to do the same thing. Some people contact lawmakers. Some share resources. Some help families navigate crisis. Some document policy harms. SOLAR is building tools for each role.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/resources/legislative-advocacy-guide" className="rounded-lg bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600">
                    Start Advocating
                  </Link>
                  <Link to="/advocacy" className="rounded-lg border-2 border-blue-700 px-6 py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50">
                    Get Involved
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white lg:p-10">
                <h3 className="mb-6 text-2xl font-bold">Useful advocacy starting points</h3>
                <div className="space-y-4">
                  <Link to="/resources/legislative-tracker" className="block rounded-xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                    <span className="font-semibold">Track current legislation →</span>
                    <p className="mt-1 text-sm text-slate-300">See what lawmakers are proposing and where advocacy may matter.</p>
                  </Link>
                  <Link to="/resources/research-data-resources" className="block rounded-xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                    <span className="font-semibold">Use evidence carefully →</span>
                    <p className="mt-1 text-sm text-slate-300">Support claims with research while avoiding overstatement.</p>
                  </Link>
                  <Link to="/resources/accountability-watch" className="block rounded-xl bg-white/10 p-4 ring-1 ring-white/15 transition hover:bg-white/15">
                    <span className="font-semibold">Follow accountability patterns →</span>
                    <p className="mt-1 text-sm text-slate-300">Show why real prevention requires more than public registry maps.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">You are not alone in this work.</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-blue-100">
            Whether you are navigating registration, supporting someone you love, researching policy, or advocating for reform, SOLAR is building practical tools and evidence-based resources to help.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/resources" className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-800 transition hover:bg-blue-50">
              Start with Resources
            </Link>
            <Link to="/contact" className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-800">
              Contact SOLAR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
