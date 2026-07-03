// src/pages/resources/accountability-watch/2026-07-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "June 2026 had a stronger new-arrest pattern than a sentencing-only view would suggest, with fresh allegations involving schools, police, youth sports, foster/adoptive care, clergy, civic leadership, and international youth access.",
  "The month’s highest-signal cases clustered around embedded legitimacy: teachers, a former assistant principal, coaches, pastors, police, a former mayor, a school-board president, a doctor, military personnel, and caregiver figures.",
  "Several entries combined multiple access lanes at once, including civic status with school and foster-care authority, police authority with youth-program history, and school-board legitimacy with household access.",
  "The recurring prevention lesson is not stranger danger. It is trusted proximity, status, household control, and institutional credibility operating before registries, prosecutions, or civil litigation enter the picture.",
];

type Stage =
  | "Arrested"
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Indicted"
  | "Expanded charges"
  | "Guilty plea"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "Administrative action"
  | "Report issued"
  | string;

type RegistryStatus =
  | "No prior registration noted"
  | "Previously registered"
  | "Registry status not mentioned";

type SourceLink = {
  label: string;
  href: string;
};

type CaseRowProps = {
  name: string;
  role: string;
  jurisdiction: string;
  stage: Stage;
  date: string;
  summary: React.ReactNode;
  registry: RegistryStatus;
  sources: SourceLink[];
  emoji?: string;
  whyIncluded?: React.ReactNode;
};

function Badge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    Arrested: "border-rose-300 bg-rose-50 text-rose-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    Indicted: "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Expanded charges": "border-rose-300 bg-rose-50 text-rose-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Administrative action": "border-sky-300 bg-sky-50 text-sky-800",
    "Report issued": "border-indigo-300 bg-indigo-50 text-indigo-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
        tones[stage] ?? "border-slate-300 bg-slate-50 text-slate-700"
      }`}
    >
      {stage}
    </span>
  );
}

function RegistryChip({ status }: { status: RegistryStatus }) {
  const isPreviouslyRegistered = status === "Previously registered";
  const display = isPreviouslyRegistered
    ? "Registry: Previously registered"
    : "Registry: No prior registration noted";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
        isPreviouslyRegistered
          ? "border-rose-300 bg-rose-50 text-rose-800"
          : "border-emerald-300 bg-emerald-50 text-emerald-800"
      }`}
    >
      {display}
    </span>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Subgroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 mt-8 border-l-4 border-slate-300 bg-slate-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-700 first:mt-0">
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-slate-900 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <div className="text-base font-semibold leading-relaxed">{children}</div>
    </div>
  );
}

function CaseRow({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji = "",
  whyIncluded,
}: CaseRowProps) {
  return (
    <article className="mb-5 rounded-2xl border border-slate-300/80 bg-slate-50/80 p-4 shadow-md shadow-slate-200/60 last:mb-0 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-950">
            {emoji && <span className="mr-2">{emoji}</span>}
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate-700">{role}</p>
          <p className="mt-1 text-sm text-slate-600">
            {date} • {jurisdiction}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        <p>{summary}</p>
        {whyIncluded && (
          <p className="rounded-xl border border-slate-200 bg-white px-3 py-2">
            <span className="font-bold text-slate-950">Why included: </span>
            {whyIncluded}
          </p>
        )}
      </div>

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
            >
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20260701() {
  const pageTitle = "Accountability Watch — June 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="June 2026 Accountability Watch roundup documenting authority, access, status, caregiver control, and institutional-accountability cases involving sexual offenses and child exploitation."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge icon={<Shield className="h-4 w-4" />}>
                Accountability Watch
              </Badge>
              <Badge icon={<FileText className="h-4 w-4" />}>
                June 2026 roundup
              </Badge>
              <Badge icon={<Scale className="h-4 w-4" />}>
                Authority and access
              </Badge>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-slate-300">
              The SOLAR Project
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Accountability Watch — June 2026 Roundup
            </h1>

            <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-slate-200">
              <p>
                June’s cases belong together because they show how access is often
                built before criminal accountability begins: inside classrooms,
                athletic programs, police departments, churches, foster and
                adoptive homes, medical and military status, public office, and
                youth-serving institutions.
              </p>
              <p>
                The pattern is not a stranger-danger story. It is a month of
                trusted adults, public roles, household authority, institutional
                credibility, and status-based legitimacy repeatedly appearing as
                the pathway to alleged or adjudicated harm.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-slate-300">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included because
              the approved June case set involved school or youth-program access,
              clergy legitimacy, law-enforcement authority, caregiver control,
              foster/adoptive oversight, public office, medical or military
              credibility, or institution-facing accountability action.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar
            title="Accountability Watch — June 2026 Roundup"
            text="June 2026 Accountability Watch roundup from The SOLAR Project."
          />

          <div className="mt-8 space-y-8">
            <Section title="At a Glance" eyebrow="Pattern summary">
              <div className="space-y-5 text-base leading-7 text-slate-700">
                <p>
                  June’s through-line is embedded legitimacy. The included cases
                  are not interchangeable crime items; they cluster around roles
                  and settings that gave adults credibility, access, privacy,
                  authority, or deference before courts, prosecutors, agencies, or
                  civil filings entered the picture.
                </p>
                <p>
                  New arrests and charges were especially important this month.
                  Teachers, a school administrator, a volleyball coach, police
                  officers, a police chief, a pastor, a foster/adoptive parent, a
                  former mayor, an orphanage founder, and a nanny all appeared in
                  June’s fresh-charge lane.
                </p>
                <p>
                  The sentencing and plea cases reinforced the same pattern:
                  public-trust roles, school-board legitimacy, religious
                  authority, medical prestige, corrections power, military status,
                  caregiver control, and youth-group history all matter because
                  they can shape who is trusted, who gets access, and who is
                  believed before formal intervention happens.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <PullQuote>
                  June was not a month of anonymous outsiders. It was a month of
                  badges, classrooms, pulpits, foster/adoptive homes, sports
                  programs, military and medical status, and civic standing
                  showing where prevention actually has to look.
                </PullQuote>
              </div>
            </Section>

            <Section title="New Arrests & Charges" eyebrow="June 2026">

              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Zachary Christian Speegle"
                role="Former middle school teacher, Tulsa Honor Academy / Dove Science Academy"
                jurisdiction="Northern District of Oklahoma"
                stage="Arrested / Charged"
                date="June 3, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors said Speegle, a former teacher at Tulsa
                    Honor Academy and Dove Science Academy, was arrested and
                    charged with receipt of CSAM and possession or access with
                    intent to view CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    The teacher role and student-access context make the case a
                    direct education-and-trust entry. The prevention issue is not
                    stranger contact; it is adult credibility inside a school
                    environment.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Oklahoma",
                    href: "https://www.justice.gov/usao-ndok/pr/fired-middle-school-teacher-arrested-charges-receiving-and-possessing-child-sexual",
                  },
                  {
                    label: "KTUL",
                    href: "https://ktul.com/news/local/former-middle-school-teacher-rearrested-on-child-sexual-abuse-material-charges",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Zachary Christian Neu"
                role="Former Wylie East High School assistant principal"
                jurisdiction="Eastern District of Texas / Texas"
                stage="Arrested / Charged"
                date="June 17, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors announced that Neu, a former Wylie East
                    High School assistant principal, was charged with federal
                    child-exploitation violations after earlier local allegations
                    involving a minor student.
                  </>
                }
                whyIncluded={
                  <>
                    School-administrator authority is central. Assistant
                    principals hold disciplinary power, adult legitimacy, and
                    routine student access that can make warning signs harder to
                    surface.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Texas",
                    href: "https://www.justice.gov/usao-edtx/pr/former-wylie-assistant-principal-charged-child-exploitation-violations-eastern",
                  },
                  {
                    label: "Dallas Morning News",
                    href: "https://www.dallasnews.com/news/courts/article/wylie-east-high-school-zachary-neu-charged-22311787.php",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Maris Nichols"
                role="Former Alexander High School teacher"
                jurisdiction="Douglas County, Georgia"
                stage="Expanded charges"
                date="June 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Reporting said Nichols, a former Alexander High School
                    teacher, faced a June escalation to 27 charges involving
                    alleged misconduct with multiple students.
                  </>
                }
                whyIncluded={
                  <>
                    The June escalation matters because the alleged pattern
                    involved teacher authority, student access, repeated
                    opportunity, and school-linked trust rather than a one-off
                    outsider event.
                  </>
                }
                sources={[
                  {
                    label: "People",
                    href: "https://people.com/students-allegedly-blackmailed-teacher-accused-sex-abuse-better-grades-onlyfans-account-12003245",
                  },
                  {
                    label: "New York Post",
                    href: "https://nypost.com/2026/06/26/us-news/teacher-who-moonlighted-on-onlyfans-now-facing-27-charges-for-sex-with-at-least-7-students/",
                  },
                ]}
              />

              <Subgroup>Youth sports / youth access</Subgroup>

              <CaseRow
                emoji="🏐"
                name="Levi Miller"
                role="Local volleyball coach / Vegas United Volleyball Club figure"
                jurisdiction="Las Vegas, Nevada"
                stage="Arrested"
                date="June 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    LVMPD said detectives arrested Miller, a local coach, for
                    sexually based crimes involving juvenile victims and asked the
                    public for information about possible additional victims.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-sports coaching creates legitimacy, routine proximity,
                    and family trust. The club and coaching context are the access
                    mechanism that makes this more than a generic arrest item.
                  </>
                }
                sources={[
                  {
                    label: "Las Vegas Metropolitan Police Department",
                    href: "https://www.lvmpd.com/Home/Components/News/News/2879/263",
                  },
                  {
                    label: "News 3 Las Vegas",
                    href: "https://news3lv.com/news/local/las-vegas-coach-arrested-on-child-sex-assault-charges-police-seek-more-juvenile-victims",
                  },
                ]}
              />

              <Subgroup>Law enforcement / education / youth programs</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Chad Essert"
                role="Bethel, Ohio police chief; former teacher and youth instructor"
                jurisdiction="Clermont County, Ohio / arrested in Florida"
                stage="Indicted"
                date="June 11–13, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Clermont County authorities announced a 70-count indictment
                    against Bethel Police Chief Chad Essert tied to alleged abuse
                    from his time as a teacher and youth-program instructor.
                  </>
                }
                whyIncluded={
                  <>
                    This is an unusually strong authority-stack case: active
                    police chief status, former teacher authority, youth-program
                    access, and alleged student-victim proximity all converge.
                  </>
                }
                sources={[
                  {
                    label: "Clermont County Prosecutor",
                    href: "https://clermontprosecutor.org/press-release/seventy-county-indictment-announced-for-bethel-chief-chad-essert/",
                  },
                  {
                    label: "NBC Chicago",
                    href: "https://www.nbcchicago.com/news/national-international/bethel-ohio-police-chief-court-appearance/3952397/",
                  },
                ]}
              />

              <Subgroup>Law enforcement</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Pablo Diaz-Buscio"
                role="Houston Police Department officer"
                jurisdiction="Harris County, Texas"
                stage="Indicted"
                date="Reported June 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Reporting said Diaz-Buscio, an HPD officer, was indicted for
                    aggravated sexual assault of a child under 14 and relieved of
                    duty during the investigation.
                  </>
                }
                whyIncluded={
                  <>
                    Active law-enforcement authority and public trust are central.
                    The badge is not incidental; it is the status the public is
                    taught to associate with protection.
                  </>
                }
                sources={[
                  {
                    label: "ABC13 Houston",
                    href: "https://abc13.com/post/houston-police-officer-indicted-sexual-assault-child-14-court-records-show/19366293/",
                  },
                  {
                    label: "Houston Chronicle",
                    href: "https://www.houstonchronicle.com/news/houston-texas/crime/article/hpd-officer-child-sex-assault-22318521.php",
                  },
                ]}
              />

              <Subgroup>Household / caregiver authority</Subgroup>

              <CaseRow
                emoji="🏠"
                name="John Ballard"
                role="Foster/adoptive parent"
                jurisdiction="Pinellas County, Florida"
                stage="Arrested"
                date="June 17, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Pinellas County Sheriff’s Office said Ballard was
                    arrested after a cybertip investigation and charged with 20
                    counts of possession of CSAM and related counts; reporting
                    noted foster/adoptive parent status.
                  </>
                }
                whyIncluded={
                  <>
                    Foster and adoptive status matters because it reflects
                    state-vetted household access. The accountability question is
                    not only the individual charge, but the oversight system that
                    placed trust in the home.
                  </>
                }
                sources={[
                  {
                    label: "Pinellas County Sheriff’s Office",
                    href: "https://www.pinellassheriff.gov/Contents/ContentItems/48s8nnbg7g5q0xc57s3wh6q1w1",
                  },
                  {
                    label: "WTSP",
                    href: "https://www.wtsp.com/article/news/crime/adoptive-parent-child-porn-arrest-sexual-activity-animals-pinellas-county/67-250dd8b3-73f7-4324-9916-2e86192cb102",
                  },
                ]}
              />

              <CaseRow
                emoji="🏠"
                name="Evan Joseph Moore"
                role="Nanny / babysitter"
                jurisdiction="Montgomery County, Texas"
                stage="Arrested"
                date="June 17–18, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Moore, who had worked as a babysitter and nanny, was arrested
                    and charged with indecency with a child after a child under
                    14 reported abuse; authorities asked families with additional
                    information to come forward.
                  </>
                }
                whyIncluded={
                  <>
                    Private-home caregiver access is a core prevention issue.
                    Families rely on trust, references, familiarity, and repeated
                    unsupervised proximity long before any formal public-warning
                    system is relevant.
                  </>
                }
                sources={[
                  {
                    label: "ABC13 Houston",
                    href: "https://abc13.com/post/nanny-charged-21-year-old-evan-moore-accused-sexual-abuse-child-montgomery-county-officials-say/19325197/",
                  },
                  {
                    label: "KPRC / Click2Houston",
                    href: "https://gmg-kprc-prod.cdn.arcpublishing.com/news/local/2026/06/18/man-who-had-worked-as-a-babysitter-arrested-accused-of-sexually-abusing-child-in-montgomery-county/",
                  },
                ]}
              />

              <Subgroup>Other institutional authority / international youth access</Subgroup>

              <CaseRow
                emoji="🌍"
                name="Michael Hess"
                role="Former Nepal orphanage director / founder of Papa’s House"
                jurisdiction="Western District of North Carolina / Nepal-linked"
                stage="Indicted"
                date="June 16, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    DOJ announced that Hess, founder of Papa’s House in Nepal,
                    was indicted for illicit sexual conduct with a minor outside
                    the United States.
                  </>
                }
                whyIncluded={
                  <>
                    Orphanage leadership creates extraordinary trust and access
                    around vulnerable children, especially when charity,
                    cross-border aid, and institutional legitimacy shape who is
                    believed and who is protected.
                  </>
                }
                sources={[
                  {
                    label: "DOJ Office of Public Affairs",
                    href: "https://www.justice.gov/opa/pr/former-nepal-orphanage-director-indicted-illicit-sexual-conduct-minor-outside-united-states",
                  },
                  {
                    label: "Charlotte Observer",
                    href: "https://www.charlotteobserver.com/news/local/crime/article316168910.html",
                  },
                ]}
              />

              <Subgroup>
                Politics / civic leadership; education / youth sports; household
                / foster-care authority
              </Subgroup>

              <CaseRow
                emoji="🏛️"
                name="Ulric Jeffery Ulroan"
                role="Former Chevak mayor; former teacher, girls basketball coach, foster parent, regional pilot"
                jurisdiction="Alaska"
                stage="Indicted"
                date="June 23–25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Alaska reporting said Ulroan, a former Chevak mayor with
                    school, youth-sports, foster-care, and regional-pilot ties,
                    was indicted on 47 charges involving alleged abuse or assault
                    of teenage girls over multiple years.
                  </>
                }
                whyIncluded={
                  <>
                    This is one of June’s clearest multi-lane access cases:
                    civic authority, school and coaching legitimacy, foster-care
                    trust, regional status, and public recognition all converge in
                    a single alleged pattern.
                  </>
                }
                sources={[
                  {
                    label: "KYUK",
                    href: "https://www.kyuk.org/public-safety/2026-06-26/former-chevak-leader-indicted-on-47-sex-crime-charges",
                  },
                  {
                    label: "Alaska’s News Source",
                    href: "https://www.alaskasnewssource.com/2026/06/26/former-chevak-leader-high-school-basketball-coach-indicted-dozens-sex-abuse-crimes/",
                  },
                  {
                    label: "The Guardian",
                    href: "https://www.theguardian.com/us-news/2026/jun/29/ulric-ulroan-alaska-charges-sexual-assault",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="George Finney"
                role="Pastor, New Life Kenefick"
                jurisdiction="Liberty County, Texas"
                stage="Arrested / Charged"
                date="Late June 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Liberty County reporting said Finney, pastor of New Life
                    Kenefick, was arrested and charged with child sex crimes
                    after a June 19 report to authorities. Coverage appeared
                    mainly in early July while describing a late-June arrest
                    sequence.
                  </>
                }
                whyIncluded={
                  <>
                    Pastoral authority and church legitimacy are the access frame.
                    The case belongs here because religious leadership can create
                    trust, privacy, deference, and family proximity that ordinary
                    prevention narratives often miss.
                  </>
                }
                sources={[
                  {
                    label: "Houston Chronicle",
                    href: "https://www.chron.com/culture/religion/article/texas-pastor-child-sex-charges-22330104.php",
                  },
                  {
                    label: "ABC13 Houston",
                    href: "https://abc13.com/post/liberty-county-pastor-arrested-charged-child-sex-crimes-officials-say/19431021/",
                  },
                  {
                    label: "FOX 26 Houston",
                    href: "https://www.fox26houston.com/news/liberty-county-pastor-accused-sexually-abusing-child",
                  },
                ]}
              />
            </Section>

            <Section
              title="Pleas / Convictions / Sentencings"
              eyebrow="June 2026"
            >
              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Christopher J. Cordes"
                role="Former Tamaqua police officer"
                jurisdiction="Middle District of Pennsylvania"
                stage="Sentenced"
                date="June 5 / announced June 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    DOJ announced that Cordes, a former Tamaqua police officer,
                    was sentenced to 330 months in federal prison for production
                    of CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Law-enforcement authority and public-trust status make the
                    case a core accountability entry. The same institutions
                    tasked with protection can also confer legitimacy and lowered
                    suspicion.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Middle District of Pennsylvania",
                    href: "https://www.justice.gov/usao-mdpa/pr/former-tamaqua-police-officer-sentenced-330-months-prison-production-child-pornography",
                  },
                  {
                   label: "FOX56",
                    href: "https://fox56.com/news/local/former-tamaqua-police-officer-sentenced-to-27-years-in-federal-prison",
                  },
                ]}
              />

              <CaseRow
                emoji="🚓"
                name="Devin Scott Waldeck"
                role="Former corrections officer"
                jurisdiction="Northern District of Florida"
                stage="Guilty plea"
                date="June 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Waldeck, a former corrections officer, pleaded guilty in
                    federal court to child exploitation and distribution of CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Corrections staff hold state-backed authority and coercive
                    institutional power. That public-safety status is the
                    accountability frame even where the case centers on online
                    exploitation.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Florida",
                    href: "https://www.justice.gov/usao-ndfl/pr/former-corrections-officer-pleads-guilty-child-exploitation-and-distributing-child",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Jose Saez Jr."
                role="Pastor, Iglesia Cristiana Alumbrando El Camino"
                jurisdiction="Eastern District of New York"
                stage="Sentenced"
                date="June 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Saez, a pastor at Iglesia Cristiana Alumbrando El Camino in
                    Brentwood, New York, was sentenced to 210 months in prison
                    for sexual exploitation of a child.
                  </>
                }
                whyIncluded={
                  <>
                    Religious authority and congregational trust are central.
                    Clergy roles can give adults spiritual credibility and access
                    that families and children may be pressured to treat as safe.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of New York",
                    href: "https://www.justice.gov/usao-edny/pr/long-island-pastor-sentenced-210-months-prison-sexual-exploitation-child",
                  },
                  {
                    label: "Roys Report",
                    href: "https://roysreport.com/long-island-pastor-gets-17-5-year-prison-term-for-child-sex-exploitation/",
                  },
                ]}
              />

              <CaseRow
                emoji="⛪"
                name="Thomas Pinkerton Jr."
                role="Former Baltimore County youth pastor"
                jurisdiction="Maryland"
                stage="Guilty plea"
                date="June 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Pinkerton, a former youth pastor at Central Christian Church,
                    pleaded guilty in a Maryland case; a civil lawsuit filed days
                    later alleged church failures connected to his former
                    youth-pastor role.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-pastor status, spiritual authority, and alleged
                    church-context access place the case squarely inside the
                    clergy-trust and institutional-response pattern.
                  </>
                }
                sources={[
                  {
                    label: "Baltimore Banner",
                    href: "https://www.thebanner.com/community/criminal-justice/thomas-pinkerton-central-christian-church-youth-pastor-child-sexual-abuse-P5CDRWIRIBDLZAZRVVX2Q4HMBY/",
                  },
                  {
                    label: "MinistryWatch",
                    href: "https://ministrywatch.com/baltimore-church-sued-over-youth-pastors-sex-crimes/",
                  },
                ]}
              />

              <Subgroup>Healthcare / therapy</Subgroup>

              <CaseRow
                emoji="⚕️"
                name="Jeffrey Lynn Sponsler"
                role="Wasilla neurologist / doctor"
                jurisdiction="District of Alaska"
                stage="Sentenced"
                date="June 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Sponsler, identified by DOJ as a Wasilla neurologist, was
                    sentenced to 3.4 years in prison for possessing CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Medical prestige and public trust matter even without a
                    direct patient-victim nexus. Healthcare authority gives adults
                    credibility, privacy, and deference in community life.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO District of Alaska",
                    href: "https://www.justice.gov/usao-ak/pr/wasilla-doctor-sentenced-three-years-possessing-child-pornography",
                  },
                  {
                    label: "Alaska’s News Source",
                    href: "https://www.alaskasnewssource.com/2026/06/16/former-wasilla-doctor-sentenced-nearly-3-12-years-federal-prison-child-sex-abuse-material/",
                  },
                ]}
              />

              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Joseph Taylor McKeel"
                role="New York City public school teacher"
                jurisdiction="Eastern District of New York"
                stage="Guilty plea"
                date="June 16, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    McKeel, a New York City public school teacher, pleaded guilty
                    in federal court to possessing CSAM while employed as a high
                    school biology teacher.
                  </>
                }
                whyIncluded={
                  <>
                    Active school employment and routine student access make this
                    relevant to institutional-prevention concerns. Teacher status
                    is a trust position before any criminal process begins.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of New York",
                    href: "https://www.justice.gov/usao-edny/pr/new-york-city-public-school-teacher-pleads-guilty-possession-child-pornography",
                  },
                  {
                    label: "New York Post",
                    href: "https://nypost.com/2026/06/17/us-news/drug-fueled-nyc-teacher-who-went-by-online-handle-nysubslut-pleads-guilty-to-horrific-child-porn-charges/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Aldrich Cadiz"
                role="Former Beardsley School District employee / coach-mentor figure"
                jurisdiction="Kern County, California"
                stage="Sentenced"
                date="June 25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Cadiz, a former Beardsley School District employee, was
                    sentenced after a no-contest plea involving unlawful sexual
                    conduct with a minor and related online conduct.
                  </>
                }
                whyIncluded={
                  <>
                    The school-district role and mentor/coaching context make the
                    access mechanism central. The case sits in the education and
                    youth-trust lane rather than a generic criminal-procedure
                    category.
                  </>
                }
                sources={[
                  {
                    label: "BakersfieldNow / KBAK",
                    href: "https://bakersfieldnow.com/news/local/ex-beardsley-school-employee-sentenced-for-underage-sex-offender-crimes-court-no-contest-plea-kern-county-court-california",
                  },
                ]}
              />

              <Subgroup>Military / institutional authority</Subgroup>

              <CaseRow
                emoji="🎖️"
                name="Seth Herrera"
                role="Former U.S. Army soldier"
                jurisdiction="Federal / Alaska and Texas"
                stage="Guilty plea"
                date="June 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Herrera, a former Army soldier, pleaded guilty to federal
                    child-exploitation crimes involving CSAM and minors known to
                    him while living in Alaska and Texas.
                  </>
                }
                whyIncluded={
                  <>
                    Military status, known-minor access, and technology-enabled
                    exploitation fit the authority-and-access frame. The case also
                    shows how trusted identity can intersect with online abuse.
                  </>
                }
                sources={[
                  {
                    label: "DOJ Office of Public Affairs",
                    href: "https://www.justice.gov/opa/pr/former-army-soldier-pleads-guilty-child-exploitation-crimes-committed-alaska-and-texas",
                  },
                  {
                    label: "Stars and Stripes",
                    href: "https://www.stripes.com/theaters/us/2026-06-24/soldier-guilty-plea-child-sexual-abuse-materials-22071444.html",
                  },
                  {
                    label: "KFOX",
                    href: "https://kfoxtv.com/news/local/former-army-specialist-pleads-guilty-to-child-exploitation-and-csam-trafficking-charges",
                  },
                ]}
              />

              <Subgroup>Youth groups / youth sports</Subgroup>

              <CaseRow
                emoji="⚾"
                name="Ernest Vera"
                role="Former Cub Scout leader and youth sports coach"
                jurisdiction="Northern District of Georgia"
                stage="Sentenced"
                date="June 22 / announced June 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Vera, identified by DOJ as a former Cub Scout leader and
                    baseball and football coach, was sentenced to six years in
                    federal prison after pleading guilty to distributing CSAM.
                  </>
                }
                whyIncluded={
                  <>
                    Scouting and youth-coaching roles are classic child-facing
                    trust positions. They can create routine access, deference,
                    and credibility outside the formal classroom.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Northern District of Georgia",
                    href: "https://www.justice.gov/usao-ndga/pr/73-year-old-former-cub-scout-leader-sentenced-six-years-federal-prison-trafficking",
                  },
                  {
                    label: "Atlanta News First",
                    href: "https://www.atlantanewsfirst.com/2026/06/24/former-cub-scouts-leader-sentenced-6-years-trafficking-child-pornography/",
                  },
                  {
                    label: "WSB-TV",
                    href: "https://www.wsbtv.com/news/local/cobb-county/former-metro-atlanta-cub-scout-leader-gets-prison-time-trafficking-child-pornography/DROAIGUXVZDQDM2YR5775FALQM/",
                  },
                ]}
              />

              <Subgroup>Education / civic leadership; household authority</Subgroup>

              <CaseRow
                emoji="🏛️"
                name="Jerry James Svatek Jr."
                role="Former Boling ISD school board president; family authority figure"
                jurisdiction="Southern District of Texas"
                stage="Sentenced"
                date="June 26, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Svatek, a former Boling ISD Board of Trustees president, was
                    sentenced to 40 years in federal prison for sexual
                    exploitation and possession convictions involving a minor
                    relative.
                  </>
                }
                whyIncluded={
                  <>
                    The case combines school-board legitimacy, community standing,
                    and family access. That combination shows how public trust and
                    household authority can overlap before accountability arrives.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Texas",
                    href: "https://www.justice.gov/usao-sdtx/pr/former-school-board-president-gets-40-years-after-sexually-exploiting-minor-relative",
                  },
                  {
                    label: "Click2Houston",
                    href: "https://www.click2houston.com/news/local/2026/06/26/former-president-of-boling-isd-school-board-sentenced-for-sexually-exploiting-child-possessing-child-pornography/",
                  },
                  {
                    label: "Texas Scorecard",
                    href: "https://texasscorecard.com/local/boling-isd-trustee-gets-40-years-for-child-sex-abuse-material/",
                  },
                ]}
              />

              <Subgroup>Household / caregiver authority</Subgroup>

              <CaseRow
                emoji="🏠"
                name="Rian Wayne Johnson"
                role="Primary caregiver"
                jurisdiction="Eastern District of Virginia"
                stage="Sentenced"
                date="June 9, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Johnson was sentenced to 27 years in prison for sexually
                    exploiting an 11-year-old child for whom he was a primary
                    caregiver.
                  </>
                }
                whyIncluded={
                  <>
                    Direct caregiver control and household access are central.
                    This is exactly the kind of familiar, embedded risk that
                    registry-centered public-safety messaging often fails to
                    explain.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Virginia",
                    href: "https://www.justice.gov/usao-edva/pr/illegal-alien-bahamas-sentenced-27-years-prison-sexually-exploiting-11-year-old-victim",
                  },
                  {
                    label: "13News Now",
                    href: "https://www.13newsnow.com/article/news/local/mycity/newport-news/newport-news-man-gets-27-years-in-prison-for-sexual-abuse-of-child/291-147b297d-4400-4cad-9940-eb16e21aac14",
                  },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="June 2026">
              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Andrew J. Showers"
                role="Former Wisconsin priest"
                jurisdiction="Diocese of Madison / Wisconsin"
                stage="Administrative action"
                date="June 25, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    The Diocese of Madison announced that Showers, a former
                    Wisconsin priest facing child enticement, attempted sexual
                    assault, and CSAM-related charges, was released from the
                    clerical state.
                  </>
                }
                whyIncluded={
                  <>
                    Formal religious authority, institutional discipline, and
                    pending criminal allegations make this a significant
                    non-sentencing accountability action.
                  </>
                }
                sources={[
                  {
                    label: "OSV News",
                    href: "https://www.osvnews.com/wisconsin-priest-charged-with-child-sex-crimes-dismissed-from-clerical-state/",
                  },
                  {
                    label: "WMTV",
                    href: "https://www.wmtv15news.com/2026/06/25/madison-priest-accused-child-sex-crimes-released-ministry-duties-diocese-says/",
                  },
                ]}
              />

              <Subgroup>Institutional shielding / oversight failure</Subgroup>

              <CaseRow
                emoji="⚖️"
                name="Central Christian Church / Thomas Pinkerton Jr."
                role="Church institution and former youth pastor"
                jurisdiction="Baltimore County, Maryland"
                stage="Civil lawsuit filed"
                date="June 15, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    A civil lawsuit alleged Central Christian Church failed to act
                    on reports and warning signs involving former youth pastor
                    Thomas Pinkerton Jr.
                  </>
                }
                whyIncluded={
                  <>
                    The accountability value is institution-facing: not only what
                    one former youth pastor admitted, but whether a church failed
                    to respond to warning signs before further harm was alleged.
                  </>
                }
                sources={[
                  {
                    label: "Civil filing announcement",
                    href: "https://www.victimscivilattorneys.com/news/lawsuit-filed-against-central-christian-church-and-former-youth-pastor-thomas-pinkerton/",
                  },
                  {
                    label: "MinistryWatch",
                    href: "https://ministrywatch.com/baltimore-church-sued-over-youth-pastors-sex-crimes/",
                  },
                ]}
              />
            </Section>

            <Section
              title="Institutional Shielding & Findings"
              eyebrow="June 2026"
            >
              <Subgroup>Institutional accountability / trafficking enforcement</Subgroup>

              <CaseRow
                emoji="📊"
                name="Ohio Attorney General statewide sex-buyer report"
                role="Statewide anti-trafficking / demand-side enforcement"
                jurisdiction="Ohio"
                stage="Report issued"
                date="June 2, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The Ohio Attorney General issued a statewide report
                    summarizing outcomes for more than 1,800 sex-buyer arrests
                    from 2019 through 2025 and identifying enforcement and
                    sentencing gaps.
                  </>
                }
                whyIncluded={
                  <>
                    This is a useful June landscape item because it documents
                    state-level accountability claims, demand-side enforcement,
                    and the limits of symbolic or inconsistent consequences.
                  </>
                }
                sources={[
                  {
                    label: "Ohio Attorney General",
                    href: "https://www.ohioattorneygeneral.gov/Media/News-Releases/June-2026/Yost-Issues-First-Ever-Statewide-Report-on-Sex-Buy",
                  },
                  {
                    label: "Spectrum News 1",
                    href: "https://spectrumnews1.com/oh/columbus/news/2026/06/02/ohio-ag-report-sex-purchasers",
                  },
                ]}
              />
            </Section>

            <Section title="Monitoring Items / Watchlist" eyebrow="Follow-up">
              <ul className="space-y-4 text-sm leading-6 text-slate-700">
                <li>
                  <span className="font-bold text-slate-950">George Finney:</span>{" "}
                  monitor the exact arrest date, charging documents, church
                  response, and whether law enforcement identifies additional
                  victims or institution-facing facts.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Ulric Ulroan:</span>{" "}
                  monitor for additional alleged victims, foster-care oversight
                  issues, and any school or youth-sports institutional review of
                  prior access.
                </li>
                <li>
                  <span className="font-bold text-slate-950">Chad Essert:</span>{" "}
                  monitor extradition and court posture, employment action, and
                  any additional institutional history tied to teaching or youth
                  programs.
                </li>
                <li>
                  <span className="font-bold text-slate-950">John Ballard:</span>{" "}
                  monitor for foster/adoptive-care oversight review, additional
                  charges, or agency findings connected to household placement
                  and supervision.
                </li>
                <li>
                  <span className="font-bold text-slate-950">
                    Los Angeles Figueroa Corridor trafficking case:
                  </span>{" "}
                  treat as a likely July anchor unless docket activity inside the
                  June window is confirmed; public arrests were announced July 1
                  while alleged conduct continued through June.
                </li>
              </ul>
            </Section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm sm:p-7">
              <h2 className="mb-3 text-2xl font-black tracking-tight text-slate-950">
                Legal and registry note
              </h2>
              <p>
                Arrests, charges, indictments, civil allegations, administrative
                actions, and investigative findings are not convictions.
                Defendants are presumed innocent unless and until proven guilty
                in court. Civil and institutional claims should be read according
                to their own legal posture and source language.
              </p>
              <p className="mt-3">
                Registry-status notes are limited to reviewed public source
                material. Under the current series display convention, “Registry
                status not mentioned” is displayed as “Registry: No prior
                registration noted” to preserve the prevention-policy frame
                without inventing registry history or making an independent
                registry-history finding beyond the cited sources.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}