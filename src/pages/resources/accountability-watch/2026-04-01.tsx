// src/pages/resources/accountability-watch/2026-04-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "March 2026 was dominated by education and youth-access roles: teachers, coaches, school employees, and youth ministers appeared across arrests, indictments, pleas, and sentencings.",
  "The strongest arrest pattern involved school access, including classroom authority, school athletics, campus-linked allegations, and teacher-student cases.",
  "Institutional-accountability items were significant: the Rhode Island Diocese report, El Monte Union settlement, and Oconto Falls lawsuit all centered on oversight, complaint handling, and prevention failure.",
  "Healthcare authority was unusually prominent, with two physician sentencings showing how medical trust and patient vulnerability fit the broader authority-and-access pattern.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Re-arrest / added charges"
  | "Guilty plea"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "AG settlement / stipulated judgment"
  | "AG report / investigative findings"
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

function Badge({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "AG settlement / stipulated judgment": "border-sky-300 bg-sky-50 text-sky-800",
    "AG report / investigative findings": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Re-arrest / added charges": "border-rose-300 bg-rose-50 text-rose-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
        tones[stage] ?? "border-slate-300 bg-slate-50 text-slate-800"
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
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
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
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <p className="text-sm leading-6">{children}</p>
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
        <div className="flex gap-3">
          {emoji && <div className="pt-1 text-2xl">{emoji}</div>}
          <div>
            <h3 className="text-lg font-bold text-slate-950">{name}</h3>
            <p className="mt-0.5 text-sm font-semibold text-slate-700">{role}</p>
          </div>
        </div>
        <div className="text-left text-sm text-slate-600 sm:text-right">
          <p className="font-semibold text-slate-800">{date}</p>
          <p>{jurisdiction}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <StageBadge stage={stage} />
        <RegistryChip status={registry} />
      </div>

      <div className="mt-3 text-sm leading-6 text-slate-700">{summary}</div>

      {whyIncluded && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <span className="font-bold">Why included: </span>
          {whyIncluded}
        </div>
      )}

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:border-slate-500 hover:text-slate-950"
            >
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20260401() {
  const pageTitle = "Accountability Watch — March 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="March 2026 Accountability Watch roundup tracking authority, access, institutional accountability, and registry-relevance patterns in verified sexual-offense and child-exploitation cases."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>March 2026 roundup</Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>Verified-source shortlist</Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Accountability Watch — March 2026 Roundup
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              March’s cases belong together because they show the same prevention gap
              from different angles: trusted adults, respected institutions, and
              child-facing systems creating access before criminal charges, civil
              lawsuits, or outside investigations surfaced the harm.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              The pattern is about more than individual misconduct. It is about
              legitimacy, authority, and institutional proximity — the conditions that
              can allow risk to sit in plain sight inside schools, youth sports,
              churches, healthcare, and public-safety roles.
            </p>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-slate-300">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included because the
              approved March case set involved public trust, school or youth-program
              access, medical authority, law-enforcement authority, clergy or religious
              legitimacy, or formal institutional-accountability action.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — March 2026 Roundup" />

          <div className="mt-6 space-y-6">
            <Section title="At a Glance" eyebrow="What March shows">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <p>
                  March’s through-line is trusted access. The included cases are not
                  interchangeable crime items; they cluster around roles and institutions
                  that gave adults credibility, proximity, privacy, or power before
                  formal accountability began.
                </p>
                <p className="mt-3">
                  Education and youth-facing roles dominated the month, while healthcare,
                  law enforcement, clergy, and school-district accountability actions
                  showed the same larger pattern: prevention often failed before courts,
                  prosecutors, civil litigation, or attorneys general entered the picture.
                </p>
                <p className="mt-3">
                  The recurring absence of prior-registration information reinforces the
                  point. The cases gathered here are best understood through authority,
                  legitimacy, access, shielding, and delayed intervention — not through a
                  simplified public-warning model of risk.
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
<PullQuote>
                March was not a random collection of criminal cases. The same access
                points appeared again and again: classrooms, locker rooms, youth
                sports, ministry, healthcare, campus policing, and institutional
                complaint systems.
              </PullQuote>
            </Section>

            <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
              <Subgroup>Education / youth sports</Subgroup>

              <CaseRow
                emoji="🤼"
                name="Ryan Brungardt"
                role="Former Salina Central High School wrestling coach"
                jurisdiction="Kansas / federal"
                stage="Charged / Indicted"
                date="March 5 and March 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Federal prosecutors first charged and later indicted Brungardt in a
                    school-athletics CSAM production case tied to a high school wrestling
                    event and minors in a locker-room setting.
                  </>
                }
                whyIncluded={
                  <>
                    School-athletics access is central: the allegations involve a former
                    coach, a high school wrestling environment, and minors in a setting
                    shaped by supervision and institutional trust.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Kansas — indictment",
                    href: "https://www.justice.gov/usao-ks/pr/former-wrestling-coach-indicted-child-pornography-production",
                  },
                  {
                    label: "Wichita Eagle",
                    href: "https://www.kansas.com/news/local/crime/article314940245.html",
                  },
                ]}
              />

              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="Benoit Cransac"
                role="Former Isidore Newman School teacher"
                jurisdiction="Louisiana / Orleans Parish"
                stage="Re-arrest / added charges"
                date="March 23, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Prosecutors added 17 child video-voyeurism counts, bringing the
                    reported total to 42 counts at that stage. Reporting connected the
                    allegations to unauthorized images, students, and campus access.
                  </>
                }
                whyIncluded={
                  <>
                    The March expansion deepened a school-linked exploitation
                    investigation involving teacher access, students, and alleged misuse
                    of a campus environment.
                  </>
                }
                sources={[
                  {
                    label: "WVUE / Fox 8",
                    href: "https://www.fox8live.com/2026/03/23/former-newman-teacher-faces-42-total-counts-investigators-add-new-allegations/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Ashley A. Fisler"
                role="Former Orchard Valley Middle School teacher"
                jurisdiction="New Jersey / Gloucester County"
                stage="Arrested / Charged"
                date="March 26, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Fisler was charged with offenses including sexual assault of a
                    minor, endangering the welfare of a child, and official misconduct.
                    Prosecutors said the allegations involved a student from the period
                    when she taught at Orchard Valley Middle School.
                  </>
                }
                whyIncluded={
                  <>
                    Teacher-student authority and an official-misconduct charge put the
                    alleged conduct squarely inside a school-access and public-trust
                    frame.
                  </>
                }
                sources={[
                  {
                    label: "Gloucester County Prosecutor",
                    href: "https://gcprosecutor.org/news/article/2816",
                  },
                  {
                    label: "CBS Philadelphia",
                    href: "https://www.cbsnews.com/philadelphia/news/ashley-fisler-washington-township-sexual-assault/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Nadia Horn"
                role="North High School special education teacher"
                jurisdiction="Wisconsin / Eau Claire County"
                stage="Arrested / Charged"
                date="March 25–30, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Horn was arrested after a school-resource-officer investigation and
                    later charged with multiple child sex offenses involving students.
                  </>
                }
                whyIncluded={
                  <>
                    This is a direct school-trust case involving a teacher and students,
                    with the initial investigation tied to a school-resource-officer
                    channel.
                  </>
                }
                sources={[
                  {
                    label: "Eau Claire Police Department",
                    href: "https://www.facebook.com/EauClairePD/posts/news-release-please-see-the-following-release-regarding-a-child-sexual-assault-t/1356917473137313/",
                  },
                  {
                    label: "WEAU — charges filed",
                    href: "https://www.weau.com/2026/03/30/charges-filed-against-north-high-school-teacher/",
                  },
                ]}
              />
            </Section>

            <Section title="Pleas / Convictions / Sentencings" eyebrow="Case outcomes">
              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Aaron Paul Lockman"
                role="Former youth minister"
                jurisdiction="Indiana / Southern District of Indiana"
                stage="Sentenced"
                date="March 6, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Lockman was sentenced to nine years in federal prison for possession
                    offenses involving minors. DOJ identified him as a youth minister and
                    linked the case to a broader child-protection investigation involving
                    a former Kentucky school superintendent.
                  </>
                }
                whyIncluded={
                  <>
                    Youth ministry confers spiritual authority, adult trust, and
                    child-facing access, making the role central to the accountability
                    pattern.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Indiana",
                    href: "https://www.justice.gov/usao-sdin/pr/indiana-youth-minister-linked-imprisoned-kentucky-school-superintendent-sentenced-nine",
                  },
                  {
                    label: "14 News",
                    href: "https://www.14news.com/2026/03/06/jasper-youth-minister-sentenced-federal-prison-child-sexual-abuse-material-charges/",
                  },
                ]}
              />

              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="William Boston"
                role="Former Intermediate Unit resource instructor"
                jurisdiction="Pennsylvania / Western District of Pennsylvania"
                stage="Sentenced"
                date="March 6, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Boston was sentenced to seven years for transporting CSAM. DOJ
                    identified him as a former Intermediate Unit resource instructor.
                  </>
                }
                whyIncluded={
                  <>
                    The education-linked role places this CSAM sentencing inside the
                    broader pattern of child-facing professional trust.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Western District of Pennsylvania",
                    href: "https://www.justice.gov/usao-wdpa/pr/former-intermediate-unit-resource-instructor-sentenced-seven-years-prison-transport",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="John Magee Gavin"
                role="Former Boston science teacher, Josiah Quincy Upper School"
                jurisdiction="Massachusetts / District of Massachusetts"
                stage="Sentenced"
                date="March 12, 2026; DOJ release March 13"
                registry="No prior registration noted"
                summary={
                  <>
                    Gavin was sentenced to 10 years in a child-exploitation case. DOJ
                    identified him as a former Boston science teacher.
                  </>
                }
                whyIncluded={
                  <>
                    Schools grant legitimacy, routine access, and adult authority around
                    students before criminal process ever begins.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Massachusetts",
                    href: "https://www.justice.gov/usao-ma/pr/former-boston-teacher-sentenced-10-years-prison-child-exploitation",
                  },
                  {
                    label: "Boston.com",
                    href: "https://www.boston.com/news/crime/2026/03/15/former-boston-public-schools-teacher-sentenced-to-10-years-in-prison-for-child-exploitation/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Kostas Fekkas"
                role="Former high school teacher"
                jurisdiction="New York / Southern District of New York"
                stage="Sentenced"
                date="March 18, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Fekkas was sentenced to 13 years for coercing minors to produce
                    CSAM. DOJ identified him as a former high school teacher.
                  </>
                }
                whyIncluded={
                  <>
                    The former teacher role remains relevant to the authority-and-trust
                    pattern even where the sentencing event is not limited to a current
                    classroom-victim framework.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of New York",
                    href: "https://www.justice.gov/usao-sdny/pr/former-high-school-teacher-sentenced-13-years-prison-coercing-minors-produce-child",
                  },
                  {
                    label: "Patch",
                    href: "https://patch.com/new-york/scarsdale/high-school-teacher-westchester-who-coerced-minors-make-child-sex-abuse",
                  },
                ]}
              />

              <Subgroup>Clergy / religious institutions / education</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Andrew Brown"
                role="Volunteer teacher and youth minister"
                jurisdiction="Ohio / Southern District of Ohio"
                stage="Sentenced"
                date="March 12, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Brown was sentenced to 160 months for CSAM distribution, receipt,
                    and possession offenses. DOJ described him as someone who served in
                    child-facing religious and school roles.
                  </>
                }
                whyIncluded={
                  <>
                    This case sits at the intersection of school and religious youth
                    access, showing how multiple institutions can confer credibility and
                    proximity to children.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Ohio",
                    href: "https://www.justice.gov/usao-sdoh/pr/jamaican-illegal-alien-who-volunteered-local-teacher-youth-minister-sentenced-more-13",
                  },
                  {
                    label: "Scioto Valley Guardian",
                    href: "https://sciotovalleyguardian.com/2026/03/12/central-ohio-youth-minister-sentenced-to-13-years-for-child-porn-was-actively-downloading-when-fbi-showed-up/",
                  },
                ]}
              />
<Subgroup>Youth sports / youth groups</Subgroup>

              <CaseRow
                emoji="🎾"
                name="Daniel James Riggs"
                role="Former Fort Lauderdale tennis coach"
                jurisdiction="Florida / Southern District of Florida"
                stage="Sentenced"
                date="March 17, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Riggs was sentenced to 20 years after pleading guilty in a case
                    involving two minor students. DOJ said he worked as a tennis coach
                    and that both minors were his students at a Fort Lauderdale tennis
                    center.
                  </>
                }
                whyIncluded={
                  <>
                    Youth-sports coaching can create routine contact, one-on-one trust,
                    training authority, and opportunities for isolation.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Southern District of Florida",
                    href: "https://www.justice.gov/usao-sdfl/pr/former-fort-lauderdale-tennis-coach-sentenced-20-years-coercing-students-engage-sexual",
                  },
                  {
                    label: "Local 10",
                    href: "https://www.local10.com/news/local/2026/03/17/grandson-of-tennis-legend-bobby-riggs-gets-20-years-for-child-sex-crimes/",
                  },
                ]}
              />

              <CaseRow
                emoji="🏃"
                name="Darius Tremayne Lawshea"
                role="Former Miami Gardens youth track coach"
                jurisdiction="Florida / Miami-Dade County"
                stage="Sentenced"
                date="March 24, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    Lawshea was sentenced to 50 years after conviction in a case
                    involving a student athlete. Reporting identified him as a longtime
                    youth track coach in Miami Gardens.
                  </>
                }
                whyIncluded={
                  <>
                    The access point was a trusted youth-coaching role inside a track
                    program, not stranger contact.
                  </>
                }
                sources={[
                  {
                    label: "NBC Miami",
                    href: "https://www.nbcmiami.com/news/local/south-florida-youth-track-coach-sentenced-to-50-years-in-prison-in-teen-molestation-case/3785602/",
                  },
                  {
                    label: "Local 10",
                    href: "https://www.local10.com/news/local/2026/03/24/miami-gardens-track-coach-gets-50-years-for-raping-14-year-old-student/",
                  },
                ]}
              />

              <CaseRow
                emoji="🤼"
                name="Stephen James Lemelin"
                role="Former Burlington High School wrestling coach"
                jurisdiction="Massachusetts / District of Massachusetts"
                stage="Sentenced"
                date="March 26, 2026; DOJ release March 30"
                registry="No prior registration noted"
                summary={
                  <>
                    Lemelin was sentenced to two years for attempted transfer of obscene
                    material to a minor.
                  </>
                }
                whyIncluded={
                  <>
                    The school-coach role places the case inside a youth-access and
                    institutional-trust pattern.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Massachusetts",
                    href: "https://www.justice.gov/usao-ma/pr/former-high-school-wrestling-coach-sentenced-sending-obscene-material-minor",
                  },
                ]}
              />

              <Subgroup>Law enforcement / corrections</Subgroup>

              <CaseRow
                emoji="🚓"
                name="Paul Aurelio McClain"
                role="Former San Diego State University Police sergeant"
                jurisdiction="California / Central District of California"
                stage="Guilty plea"
                date="March 18, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    McClain pleaded guilty to possessing more than 600 CSAM files. DOJ
                    identified him as a former SDSU Police Department sergeant.
                  </>
                }
                whyIncluded={
                  <>
                    Campus-police authority matters because public-safety institutions
                    confer legitimacy and power while often escaping the suspicion aimed
                    elsewhere.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Central District of California",
                    href: "https://www.justice.gov/usao-cdca/pr/former-san-diego-state-university-police-sergeant-pleads-guilty-possessing-sexually",
                  },
                  {
                    label: "NBC San Diego",
                    href: "https://www.nbcsandiego.com/news/local/ex-sdsu-police-sergeant-pleads-guilty-to-child-porn-charge/3996821/",
                  },
                ]}
              />

              <Subgroup>Healthcare / therapy</Subgroup>

              <CaseRow
                emoji="⚕️"
                name="Craig A. Spiegel"
                role="Former St. Louis County pediatrician"
                jurisdiction="Missouri / Eastern District of Missouri"
                stage="Sentenced"
                date="March 24, 2026"
                registry="No prior registration noted"
                summary={
                  <>
                    Spiegel was sentenced to 20 years for exchanging prescriptions for
                    sexual conduct, images, or cash. DOJ said he exploited his medical
                    position and that many affected patients had first known him when he
                    was their pediatrician.
                  </>
                }
                whyIncluded={
                  <>
                    Pediatric medicine creates exceptional trust, privacy, and
                    vulnerability; the reported exploitation of medical authority makes
                    the accountability frame central.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Missouri",
                    href: "https://www.justice.gov/usao-edmo/pr/former-st-louis-area-pediatrician-sentenced-20-years-prison-exchanging-prescriptions",
                  },
                  {
                    label: "KSDK",
                    href: "https://www.ksdk.com/article/news/crime/former-pediatrician-craig-spiegel-gets-20-years-trading-prescriptions-for-sex-cash/63-37637993-2345-4db6-af75-89e7f0ad6c69",
                  },
                ]}
              />

              <CaseRow
                emoji="⚕️"
                name="Robert Glapinski"
                role="Family medicine physician"
                jurisdiction="Michigan / Eastern District of Michigan"
                stage="Sentenced"
                date="March 25, 2026; DOJ release March 26"
                registry="No prior registration noted"
                summary={
                  <>
                    Glapinski was sentenced to 15 years for CSAM distribution and
                    possession conduct. DOJ identified him as a family medicine doctor
                    who treated adults and children.
                  </>
                }
                whyIncluded={
                  <>
                    The physician role matters because medical authority and patient
                    trust are part of the broader pattern of institutional legitimacy.
                  </>
                }
                sources={[
                  {
                    label: "DOJ / USAO Eastern District of Michigan",
                    href: "https://www.justice.gov/usao-edmi/pr/physician-sentenced-15-years-federal-prison-possessing-and-distributing-thousands",
                  },
                  {
                    label: "Tampa Free Press",
                    href: "https://www.tampafp.com/michigan-family-doctor-gets-15-years-for-massive-collection-of-csam/",
                  },
                ]}
              />
            </Section>

            <Section title="Civil / Administrative Actions" eyebrow="Institutional accountability">
              <Subgroup>Education</Subgroup>

              <CaseRow
                emoji="🏫"
                name="El Monte Union High School District"
                role="Public school district"
                jurisdiction="California / Los Angeles County"
                stage="AG settlement / stipulated judgment"
                date="March 20, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    California DOJ announced a settlement requiring oversight and reforms
                    after finding systemic shortfalls in the district’s handling of
                    student complaints. The plan requires complaint tracking, policy
                    revision, training, services, and other reforms.
                  </>
                }
                whyIncluded={
                  <>
                    The accountability issue is institutional: complaint handling,
                    prevention systems, training, services, and outside oversight.
                  </>
                }
                sources={[
                  {
                    label: "California Attorney General",
                    href: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-announces-settlement-el-monte-union-high-school-district",
                  },
                  {
                    label: "Business Insider",
                    href: "https://www.businessinsider.com/el-monte-settlement-misconduct-complaints-business-insider-investigation-2026-3",
                  },
                ]}
              />

              <CaseRow
                emoji="🏫"
                name="Oconto Falls Board of Education / Oconto Falls School District"
                role="Public school district"
                jurisdiction="Wisconsin / federal civil lawsuit"
                stage="Civil lawsuit filed"
                date="March 11, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    A federal lawsuit alleged a long-running pattern of school-district
                    failure involving teacher and coach misconduct.
                  </>
                }
                whyIncluded={
                  <>
                    The filing raises prevention and oversight questions around repeated
                    warnings, institutional response, and whether alleged harm was
                    allowed to continue.
                  </>
                }
                sources={[
                  {
                    label: "Wisconsin Public Radio",
                    href: "https://www.wpr.org/news/federal-complaint-alleges-ongoing-sexual-abuse-oconto-falls-school-district",
                  },
                  {
                    label: "WLUK / Fox 11",
                    href: "https://fox11online.com/news/local/3-former-oconto-falls-students-sue-district-alleging-years-of-staff-sexual-misconduct-amanda-watzka-brooke-lacount-grace-williams-brynn-larsen-gayle-gander-wisconsin",
                  },
                ]}
              />
            </Section>
<Section title="Institutional Shielding & Findings" eyebrow="Accountability failure">
              <Subgroup>Clergy / religious institutions</Subgroup>

              <CaseRow
                emoji="⛪"
                name="Diocese of Providence"
                role="Catholic diocese"
                jurisdiction="Rhode Island"
                stage="AG report / investigative findings"
                date="March 4, 2026"
                registry="Registry status not mentioned"
                summary={
                  <>
                    The Rhode Island Attorney General published a comprehensive report on
                    decades of clergy abuse allegations and diocesan handling. The
                    materials included recommendations and a credibly accused clergy
                    appendix, while emphasizing that allegations are not findings of guilt
                    unless otherwise established.
                  </>
                }
                whyIncluded={
                  <>
                    This is a major institutional-shield story involving decades of
                    allegations, diocesan handling, public accountability, and the gap
                    between religious authority and meaningful prevention.
                  </>
                }
                sources={[
                  {
                    label: "Rhode Island AG — report page",
                    href: "https://riag.ri.gov/diocese-report",
                  },
                  {
                    label: "Associated Press",
                    href: "https://apnews.com/article/f40c99b76870a2516999bf2d676aa144",
                  },
                ]}
              />
            </Section>

            <Section title="Monitoring Items" eyebrow="Not counted as main March entries">
              <div className="space-y-3 text-sm leading-6 text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-950">
                    Bryce Silas Patterson — Metro Detroit defendant — Michigan / Eastern
                    District of Michigan
                  </p>
                  <p className="mt-1">
                    Serious in-window federal child-exploitation case, but the available
                    source did not identify a separate institutional, professional,
                    public-trust, or household-control role.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-bold text-slate-950">
                    Robert Morris — Former Gateway Church pastor — Oklahoma / national
                    religious leadership
                  </p>
                  <p className="mt-1">
                    Relevant to clergy accountability and public hypocrisy, but the March
                    event was a custody-release development rather than a new charge,
                    plea, conviction, sentencing, civil filing, disciplinary action, or
                    investigative finding.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Watchlist" eyebrow="Developments to monitor">
              <ul className="space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  <span className="font-bold text-slate-950">
                    Ryan Brungardt / Kansas wrestling investigation:
                  </span>{" "}
                  monitor for superseding indictment, additional identified victims, and
                  school or athletics administrative fallout.
                </li>
                <li>
                  <span className="font-bold text-slate-950">
                    Benoit Cransac / Isidore Newman School:
                  </span>{" "}
                  monitor later developments, added charges, bond proceedings, school
                  response, and whether the case becomes a larger institutional-access
                  story.
                </li>
                <li>
                  <span className="font-bold text-slate-950">
                    El Monte Union High School District:
                  </span>{" "}
                  monitor court approval and implementation of the stipulated judgment,
                  complaint-tracking reforms, compliance-coordinator appointment, and AG
                  oversight updates.
                </li>
                <li>
                  <span className="font-bold text-slate-950">
                    Oconto Falls School District lawsuit:
                  </span>{" "}
                  monitor amended complaints, district response, discovery, additional
                  plaintiffs, and evidence concerning repeated ignored warnings.
                </li>
                <li>
                  <span className="font-bold text-slate-950">
                    Diocese of Providence report:
                  </span>{" "}
                  monitor legislative proposals, diocesan policy changes, civil
                  litigation, survivor responses, and any criminal or administrative
                  actions following the AG’s findings.
                </li>
              </ul>
            </Section>

            <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7">
              <h2 className="mb-3 text-xl font-bold text-slate-950">Legal and registry note</h2>
              <p>
                Arrests, charges, indictments, civil allegations, and investigative
                findings are not convictions. Defendants are presumed innocent unless and
                until proven guilty in court. Civil and institutional findings should be
                read according to their own legal posture and source language.
              </p>
              <p className="mt-3">
                Registry-status notes are limited to reviewed public source material.
                Under the current series display convention, “Registry status not
                mentioned” is displayed as “Registry: No prior registration noted” to
                preserve the prevention-policy frame without inventing registry history.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}