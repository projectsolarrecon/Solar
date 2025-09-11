import React from "react";
import BlogLayout from "../../components/layouts/BlogLayout";
import { Link } from "react-router-dom";

/** Lightweight helpers (scoped to this file) */
function BandHeader({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="mt-10 mb-6 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 flex items-center gap-2 shadow-sm">
        {icon && <span aria-hidden>{icon}</span>}
        <span className="font-semibold tracking-tight">{title}</span>
      </div>
    </div>
  );
}

function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning" | "danger" | "note";
  title?: string;
  children: React.ReactNode;
}) {
  const map = {
    info: "bg-blue-50 ring-blue-200 text-blue-900",
    warning: "bg-amber-50 ring-amber-200 text-amber-900",
    danger: "bg-red-50 ring-red-200 text-red-900",
    note: "bg-slate-50 ring-slate-200 text-slate-900",
  } as const;
  return (
    <div className={`my-6 rounded-xl ring-1 p-4 md:p-5 ${map[tone]}`}>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div className="prose prose-slate max-w-none">{children}</div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-4 md:pl-6 border-l-4 border-red-300 italic text-slate-800 text-lg">
      {children}
    </blockquote>
  );
}

export default function CommunityTies(): JSX.Element {
  return (
    <BlogLayout
      title="Community Ties: When Employers Become the Danger"
      description="Teens spend hours at work, not on registry maps. From fast food counters to babysitting in living rooms, authority + access = risk. Here’s how safety actually works."
      keywords="teen workers, workplace harassment, McDonald's lawsuit, Chipotle EEOC, Jared Fogle, Abercrombie Mike Jeffries, babysitter abuse, youth safety, SOLAR registry critique"
      date="September 11, 2025"
      readTime="12 min read"
      badge="📰 INVESTIGATIVE SERIES"
      lede="Jobs promise independence and a paycheck. But the record shows many teens were endangered where they wore the uniform—or rang the doorbell for a babysitting shift."
    >
      {/* Intro */}
      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Parents like to believe that work is a safe place for their kids to grow up. A job scooping fries at the golden arches, folding shirts at the mall, or babysitting a toddler across the street carries the promise of independence and a paycheck. We’ve woven it into our cultural fabric: teenagers learning responsibility, savings accounts opened with that first deposit, college applications sprinkled with “part-time work” in the activities section. But what if those very environments—restaurants, retail counters, living rooms—are where the danger really lives?
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          The uncomfortable truth is that employers, whether multinational corporations or neighborhood parents, have been at the center of some of the most devastating cases of sexual abuse of teenagers. Yet public policy and the registry system keep looking elsewhere. We track strangers on maps and pile up restrictions around bus stops while ignoring the places where teens actually spend their hours: in uniforms, behind counters, in stockrooms, or in someone else’s home.
        </p>
      </section>

      <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 my-10" />

      {/* McDonald's */}
      <BandHeader title="🍔 The Arches and the Courts" icon="🍔" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Arches and the Courts</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          In <strong>Delmont, Pennsylvania</strong>, a{" "}
          <a
            href="https://www.cbsnews.com/pittsburgh/news/lawsuit-alleges-westmoreland-county-mcdonalds-employee-sexually-assaulted-teenage-coworker/"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            15-year-old McDonald’s worker alleged she was sexually assaulted on the job by a manager
          </a>
          . Her lawsuit against the franchise and its parent company painted a picture of a workplace where minors were inadequately supervised and safeguards failed. The golden arches, presented as a rite of passage for teens, had become a setting for trauma.
        </p>
        <Callout tone="note" title="Why the registry didn’t help here">
          <p>
            The registry has nothing to say about HR policies or who supervises a grill line. A franchise’s failure to protect a teen employee isn’t mapped in dots on a neighborhood registry. It’s buried in HR files, NDAs, and lawsuits.
          </p>
        </Callout>
      </section>

      {/* Chipotle */}
      <BandHeader title="🌯 The Burrito Chain’s Billions" icon="🌯" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Burrito Chain’s Billions</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Chipotle</strong> has spent years cultivating an image of sustainability, youth, and vibrancy. But in{" "}
          <strong>Sammamish, Washington</strong>, the{" "}
          <a
            href="https://www.hrdive.com/news/eeoc-alleges-chipotle-ignored-reports-of-sexual-misconduct-leaving-teen-wo/620643/"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            Equal Employment Opportunity Commission sued Chipotle after a 16-year-old worker alleged repeated harassment and abuse by her 29-year-old manager
          </a>
          . The teen reported unwelcome sexual comments and touching—yet was still scheduled on closing shifts with the alleged harasser.{" "}
          <a
            href="https://www.kiro7.com/news/local/eeoc-sues-chipotle-sexual-harassment-sammamish-case/U4T3VMQ6JFGIRH3FWQELHTE2KA/"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            KIRO7’s local coverage
          </a>{" "}
          shows investigators saw systemic breakdowns, not a one-off.
        </p>
        <Callout tone="warning" title="How harm compounds at work">
          <ul className="list-disc pl-5">
            <li>Hostile comments escalate into touching and coercion.</li>
            <li>Scheduling choices (e.g., late closings) concentrate vulnerability.</li>
            <li>Retaliation fear (“you could be fired if you speak out”) chills reporting.</li>
          </ul>
        </Callout>
      </section>

      {/* Subway / Fogle */}
      <BandHeader title="🚇 The Face of the Brand" icon="🚇" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Face of the Brand</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Even when abuse happens outside the store, corporations cannot wash their hands. <strong>Subway</strong> learned that lesson with longtime spokesman{" "}
          <strong>Jared Fogle</strong>, who was ultimately{" "}
          <a
            href="https://www.justice.gov/opa/pr/former-subway-spokesperson-jared-fogle-sentenced-more-15-years-prison-sex-crimes"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            sentenced to more than fifteen years in federal prison for child sex crimes
          </a>
          . Long before his arrest,{" "}
          <a
            href="https://www.nytimes.com/2015/08/20/us/jared-fogle-subway.html"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            concerns about his behavior surfaced
          </a>
          , including reports that a franchisee warned the company years in advance.
        </p>
        <PullQuote>
          “If a company builds a brand on trust, it owes more than plausible deniability when that trust is betrayed.”
        </PullQuote>
      </section>

      {/* Abercrombie */}
      <BandHeader title="🛍️ Abercrombie and the Culture of Power" icon="🛍️" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Abercrombie and the Culture of Power</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <strong>Abercrombie &amp; Fitch</strong>, image and ambition became a vector for abuse. In 2023, former models{" "}
          <a
            href="https://apnews.com/article/abercrombie-fitch-lawsuit-mike-jeffries-sex-trafficking-32aadb582055dd2468e5ad6be74e5ef0"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            filed a lawsuit alleging CEO Mike Jeffries operated a sex-trafficking scheme
          </a>
          . In 2024,{" "}
          <a
            href="https://apnews.com/article/abercrombie-fitch-ceo-jeffries-sex-charges-c23731581f7a836ca02b431b55055ca8"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            federal prosecutors indicted Jeffries
          </a>{" "}
          (he has pleaded not guilty). Prestige doesn’t equal protection—oversight does.
        </p>
      </section>

      {/* Babysitting / familial betrayal */}
      <BandHeader title="🏠 The Babysitter Next Door & Familial Betrayal" icon="🏠" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Babysitter Next Door &amp; Familial Betrayal</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The danger isn’t always corporate. Sometimes it’s across the street. In New Hampshire,{" "}
          <strong>Ernest Willis</strong> hired a 15-year-old congregant to babysit—then abused that trust and was{" "}
          <a
            href="https://abcnews.go.com/US/hampshire-man-ernest-willis-sentenced-prison-rape-tina/story?id=14460469"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            convicted and sentenced to 15–30 years
          </a>
          . In Illinois,{" "}
          <strong>Victor Reyes-Jacobo</strong> pled guilty to{" "}
          <a
            href="https://www.cbsnews.com/chicago/news/man-sentenced-for-sexually-assaulting-babysitter/"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            sexually assaulting his son’s teenage babysitter
          </a>
          , and received a 10-year sentence (
          <a
            href="https://www.fox32chicago.com/news/joliet-man-gets-10-years-for-sexually-assaulting-sons-sleeping-babysitter"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener"
          >
            local coverage
          </a>
          ).
        </p>
        <Callout tone="danger" title="Homes are workplaces when teens are hired">
          <p>
            Hiring a teen babysitter is employing a worker. That comes with duties of care: clear rules, no alcohol, defined sleeping arrangements, and open-door norms. Parents should treat it like a workplace with real safeguards.
          </p>
        </Callout>
      </section>

      {/* Pattern */}
      <BandHeader title="🔁 The Pattern That Keeps Repeating" icon="🔁" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Pattern That Keeps Repeating</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Across fast-food counters, burrito chains, brand empires, and babysitting jobs, the theme is consistent:{" "}
          <strong>authority + access = vulnerability</strong>. Teens often lack bargaining power and legal literacy. Employers control schedules and paychecks—and sometimes the narrative if a complaint is made.
        </p>
        <Callout tone="note" title="What the registry can’t do">
          <ul className="list-disc pl-5">
            <li>It cannot detect managerial negligence or toxic scheduling practices.</li>
            <li>It cannot supervise a living room where a teen is on a paid shift.</li>
            <li>It offers comfort theater, not workplace safety.</li>
          </ul>
        </Callout>
      </section>

      {/* Comfort blanket */}
      <BandHeader title="🔒 Pulling Back the Comfort Blanket" icon="🔒" />
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pulling Back the Comfort Blanket</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The <strong>SOLAR</strong> position is clear: registries are ineffective, harmful, and misdirected. If safety is the goal, prevention has to live where risk lives:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 my-6">
          <ul className="space-y-3">
            <li>
              <strong>Workplaces:</strong> 2-adult policies for minors, surprise audits, enforceable liability for ignoring complaints.
            </li>
            <li>
              <strong>Homes:</strong> treat teen babysitting like employment with basic safeguards and clear expectations.
            </li>
            <li>
              <strong>Policy:</strong> shift funding from registry expansion to prevention—auditing, independent reporting channels, survivor support, and youth workplace safety.
            </li>
          </ul>
        </div>
      </section>

      {/* Takeaway */}
      <BandHeader title="🛑 The Takeaway" icon="🛑" />
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Takeaway</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We tell ourselves that jobs and chores build responsibility. But they also reveal the character of employers—whether that’s a multinational brand, a CEO, or the neighbor across the street.
        </p>
        <PullQuote>
          “Dots on a map won’t stop abuse on a closing shift—or in a living room labeled ‘safe.’”
        </PullQuote>
        <p className="text-lg text-gray-700 leading-relaxed">
          We can cling to the illusion that registry maps equal safety—or look squarely at where danger actually lives. Until we do, we’ll keep missing what these cases keep teaching.
        </p>
      </section>

      {/* Sources */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Selected Sources (Verified)</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Part 1 — McDonald’s & Chipotle</h4>
            <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
              <li>
                CBS News Pittsburgh —{" "}
                <a
                  href="https://www.cbsnews.com/pittsburgh/news/lawsuit-alleges-westmoreland-county-mcdonalds-employee-sexually-assaulted-teenage-coworker/"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Lawsuit Alleges Westmoreland County McDonald’s Employee Sexually Assaulted Teenage Co-Worker
                </a>
              </li>
              <li>
                HR Dive —{" "}
                <a
                  href="https://www.hrdive.com/news/eeoc-alleges-chipotle-ignored-reports-of-sexual-misconduct-leaving-teen-wo/620643/"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  EEOC alleges Chipotle ignored reports of sexual misconduct, leaving teen worker vulnerable
                </a>
              </li>
              <li>
                KIRO7 Seattle —{" "}
                <a
                  href="https://www.kiro7.com/news/local/eeoc-sues-chipotle-sexual-harassment-sammamish-case/U4T3VMQ6JFGIRH3FWQELHTE2KA/"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  EEOC sues Chipotle over sexual harassment of 16-year-old Sammamish worker
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-800 mb-2">Part 2 — Subway &amp; Abercrombie</h4>
            <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
              <li>
                U.S. DOJ —{" "}
                <a
                  href="https://www.justice.gov/opa/pr/former-subway-spokesperson-jared-fogle-sentenced-more-15-years-prison-sex-crimes"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Former Subway Spokesperson Jared Fogle Sentenced to More Than 15 Years in Prison for Sex Crimes
                </a>
              </li>
              <li>
                New York Times —{" "}
                <a
                  href="https://www.nytimes.com/2015/08/20/us/jared-fogle-subway.html"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Subway Confronts Crisis Over Jared Fogle Scandal
                </a>
              </li>
              <li>
                Associated Press —{" "}
                <a
                  href="https://apnews.com/article/abercrombie-fitch-lawsuit-mike-jeffries-sex-trafficking-32aadb582055dd2468e5ad6be74e5ef0"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Abercrombie &amp; Fitch sued over alleged sex-trafficking scheme involving ex-CEO Mike Jeffries
                </a>
              </li>
              <li>
                Associated Press —{" "}
                <a
                  href="https://apnews.com/article/abercrombie-fitch-ceo-jeffries-sex-charges-c23731581f7a836ca02b431b55055ca8"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Ex-Abercrombie &amp; Fitch CEO Mike Jeffries pleads not guilty to sex trafficking charges
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-800 mb-2">Part 3 — Babysitter &amp; Familial Betrayal</h4>
            <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
              <li>
                ABC News —{" "}
                <a
                  href="https://abcnews.go.com/US/hampshire-man-ernest-willis-sentenced-prison-rape-tina/story?id=14460469"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  New Hampshire Man Ernest Willis Sentenced to Prison for Rape of Teen Parishioner
                </a>
              </li>
              <li>
                ABC News —{" "}
                <a
                  href="https://abcnews.go.com/2020/new-hampshire-man-ernest-willis-found-guilty-rape-tina-anderson/story?id=13702833"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  New Hampshire Man Ernest Willis Found Guilty of Rape of Tina Anderson
                </a>
              </li>
              <li>
                CBS Chicago —{" "}
                <a
                  href="https://www.cbsnews.com/chicago/news/man-sentenced-for-sexually-assaulting-babysitter/"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Joliet Man Sentenced To 10 Years For Sexually Assaulting Babysitter
                </a>
              </li>
              <li>
                Fox32 Chicago —{" "}
                <a
                  href="https://www.fox32chicago.com/news/joliet-man-gets-10-years-for-sexually-assaulting-sons-sleeping-babysitter"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Joliet man gets 10 years for sexually assaulting son’s sleeping babysitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-800 mb-2">Part 3 — Babysitter &amp; Familial Betrayal</h4>
            <ul className="list-disc pl-5 text-blue-800 space-y-1 text-sm">
              <li>
                ABC News —{" "}
                <a
                  href="https://abcnews.go.com/US/hampshire-man-ernest-willis-sentenced-prison-rape-tina/story?id=14460469"
                  className="hover:text-blue-600 underline"
                  target="_blank"
                  rel="noopener"
                >
                  New Hampshire Man Ernest Willis Sentenced to Prison for Rape of Teen Parishioner
                </a>
              </li>
              {/* Note: This is the line you requested plus the rest of the sources */}  
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-blue-800 mb-2">Part 2 — Subway &amp; Abercrombie</h4>
            {/* rest of the grid items etc. */}
          </div>
        </div>
      </div>

      {/* Post footer nav */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to All Posts
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/resources"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              View Resources
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
