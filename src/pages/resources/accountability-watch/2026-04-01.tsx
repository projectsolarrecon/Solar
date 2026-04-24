// src/pages/resources/accountability-watch/2026-04-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { Scale, Shield, FileText, Quote, Info } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "March’s approved set was dominated by education and youth-access roles, including teachers, school employees, coaches, and youth ministers.",
  "The strongest arrest and charge pattern involved school access, including classroom, school-athletics, and campus-linked allegations.",
  "Institutional accountability remained central, with the Rhode Island Diocese report, El Monte Union settlement, and Oconto Falls lawsuit anchoring the oversight-failure set.",
  "Healthcare authority was unusually prominent, with two physician cases highlighting medical trust, patient vulnerability, and exploitation dynamics.",
];

type Stage =
  | "Civil lawsuit filed"
  | "Arrested / Charged"
  | "Indicted"
  | "Investigative subcommittee opened"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
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
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    Indicted: "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Investigative subcommittee opened": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
    "AG settlement / stipulated judgment": "border-sky-300 bg-sky-50 text-sky-800",
    "AG report / investigative findings": "border-indigo-300 bg-indigo-50 text-indigo-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
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
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
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
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      {children}
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
  emoji = "🧾",
  whyIncluded,
}: CaseRowProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-3">
          <div className="text-2xl" aria-hidden="true">
            {emoji}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-700">{role}</p>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm font-semibold text-slate-900">{date}</p>
          <p className="text-xs text-slate-600">{jurisdiction}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <StageBadge stage={stage} />
        <RegistryChip status={registry} />
      </div>

      <div className="mt-3 text-sm leading-6 text-slate-800">{summary}</div>

      {whyIncluded && (
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <span className="font-bold">Why included: </span>
          {whyIncluded}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 underline underline-offset-2 hover:bg-blue-100"
          >
            {source.label}
          </a>
        ))}
      </div>
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
          content="March 2026 Accountability Watch roundup of verified authority, youth-access, institutional-accountability, and public-trust cases involving sexual offenses and child exploitation."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>Accountability Watch</Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>March 2026 roundup</Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>Verified-source shortlist</Badge>
            </div>

            <h1 className="max-w-4xl text-3xl font-black tracking-tight md:text-5xl">
              Accountability Watch — March 2026 Roundup
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 md:text-lg">
              Search window: March 1, 2026, 12:00 AM ET through March 31, 2026,
              11:59 PM ET. This page follows the approved March case set and is focused
              on authority, access, institutional accountability, and public-trust roles.
            </p>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-bold">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included because the
              approved case set involved school or youth-program access, clergy or
              healthcare authority, law-enforcement or campus-police authority,
              institutional oversight failures, or other public-trust dynamics.
            </div>

            <div className="mt-6">
              <ShareBar />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-6">
          <Section title="At a Glance" eyebrow="March patterns">
            <div className="grid gap-3 md:grid-cols-2">
              {teaserHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <PullQuote>
              Registry status was mostly absent from public sources in the approved March
              set. The pattern reinforces SOLAR’s focus on authority, legitimacy, and
              built-in access rather than registry-centered safety narratives.
            </PullQuote>
          </Section>

          <Section title="New Arrests & Charges" eyebrow="School access and youth-facing roles">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education / youth sports
              </h3>
            </div>

            <CaseRow
              emoji="🏫"
              name="Ryan Brungardt"
              role="Former Salina Central High School wrestling coach"
              jurisdiction="Kansas / federal"
              stage="Indicted"
              date="March 5 and March 24, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors first charged Brungardt by criminal complaint and
                  later announced a federal indictment in a school-athletics CSAM
                  production case tied to a high school wrestling event and minors in a
                  locker-room setting.
                </p>
              }
              whyIncluded="Strong school-athletics access case. The approved set identifies both the March 5 complaint and March 24 indictment as in-window federal actions."
              sources={[
                {
                  label: "DOJ / USAO Kansas — indictment",
                  href: "https://www.justice.gov/usao-ks/pr/former-wrestling-coach-indicted-child-pornography-production",
                },
                {
                  label: "DOJ / USAO Kansas — complaint",
                  href: "https://www.justice.gov/usao-ks/pr/former-kansas-high-school-coach-charged-producing-child-pornography",
                },
                {
                  label: "Kansas Reflector",
                  href: "https://kansasreflector.com/briefs/former-kansas-high-school-wrestling-coach-accused-of-recording-kids-as-they-showered/",
                },
              ]}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education
              </h3>
            </div>

            <CaseRow
              emoji="🏫"
              name="Benoit Cransac"
              role="Former Isidore Newman School teacher"
              jurisdiction="Louisiana / Orleans Parish"
              stage="Arrested / Charged"
              date="March 23, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Local reporting said prosecutors added 17 child video-voyeurism counts
                  in an ongoing school-linked exploitation investigation, bringing the
                  reported total to 42 counts at that stage.
                </p>
              }
              whyIncluded="Major school-linked exploitation investigation with an in-window expansion involving alleged unauthorized images connected to students and campus access."
              sources={[
                {
                  label: "WVUE / FOX 8",
                  href: "https://www.fox8live.com/2026/03/23/former-newman-teacher-faces-42-total-counts-investigators-add-new-allegations/",
                },
                {
                  label: "WWL Louisiana",
                  href: "https://www.wwltv.com/article/news/crime/ex-newman-teacher-faces-17-new-video-voyeurism-charges/289-bda5bd48-7a82-4e8e-a85e-d2aa2035383c",
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
                <p>
                  The Gloucester County Prosecutor’s Office announced Fisler’s arrest and
                  charges, including sexual assault of a minor, endangering the welfare of
                  a child, and official misconduct.
                </p>
              }
              whyIncluded="Teacher-student authority case with an official-misconduct charge, making the public-trust element explicit in the charging set."
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
                <p>
                  Local reporting said Horn was arrested after a school-resource-officer
                  investigation and later charged with multiple child sex offenses
                  involving students.
                </p>
              }
              whyIncluded="Direct school-trust case involving a teacher and students, with both the arrest and charging developments falling inside the March window."
              sources={[
                {
                  label: "WEAU — charges filed",
                  href: "https://www.weau.com/2026/03/30/charges-filed-against-north-high-school-teacher/",
                },
                {
                  label: "WEAU — arrest update",
                  href: "https://www.weau.com/2026/03/26/update-new-details-eau-claire-north-staff-member-arrested-inappropriate-relationship-with-student/",
                },
              ]}
            />
          </Section>

          <Section
            title="Pleas / Convictions / Sentencings"
            eyebrow="Federal sentencings, guilty pleas, and state sentencing outcomes"
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Clergy / religious institutions
              </h3>
            </div>

            <CaseRow
              emoji="⛪"
              name="Aaron Paul Lockman"
              role="Former youth minister"
              jurisdiction="Indiana / Southern District of Indiana"
              stage="Sentenced"
              date="March 6, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors reported that Lockman was sentenced to nine years in
                  federal prison for possession offenses involving minors, in a case linked
                  to a broader child-protection investigation involving a former Kentucky
                  school superintendent.
                </p>
              }
              whyIncluded="Youth-ministry trust case involving a child-facing religious role."
              sources={[
                {
                  label: "DOJ / USAO Southern Indiana",
                  href: "https://www.justice.gov/usao-sdin/pr/indiana-youth-minister-linked-imprisoned-kentucky-school-superintendent-sentenced-nine",
                },
                {
                  label: "14 News / WFIE",
                  href: "https://www.14news.com/2026/03/06/jasper-youth-minister-sentenced-federal-prison-child-sexual-abuse-material-charges/",
                },
              ]}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education
              </h3>
            </div>

            <CaseRow
              emoji="🏫"
              name="William Boston"
              role="Former Intermediate Unit resource instructor"
              jurisdiction="Pennsylvania / Western District of Pennsylvania"
              stage="Sentenced"
              date="March 6, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Boston was sentenced to seven years in federal
                  prison for transporting CSAM.
                </p>
              }
              whyIncluded="Education-linked CSAM sentencing involving a former Intermediate Unit resource instructor."
              sources={[
                {
                  label: "DOJ / USAO Western Pennsylvania",
                  href: "https://www.justice.gov/usao-wdpa/pr/former-intermediate-unit-resource-instructor-sentenced-seven-years-prison-transport",
                },
                {
                  label: "Gant / Explore Jefferson",
                  href: "https://gantnews.com/2026/03/06/former-pennsylvania-teacher-sentenced-to-7-years-for-child-exploitation/",
                },
              ]}
            />

            <CaseRow
              emoji="⛪"
              name="Andrew Brown"
              role="Volunteer teacher and youth minister"
              jurisdiction="Ohio / Southern District of Ohio"
              stage="Sentenced"
              date="March 12, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Brown was sentenced to 160 months for CSAM
                  distribution, receipt, and possession offenses after serving in
                  child-facing religious and school roles.
                </p>
              }
              whyIncluded="The DOJ account described child-facing religious and school roles, making trust and access central to the approved case."
              sources={[
                {
                  label: "DOJ / USAO Southern Ohio",
                  href: "https://www.justice.gov/usao-sdoh/pr/jamaican-illegal-alien-who-volunteered-local-teacher-youth-minister-sentenced-more-13",
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
                <p>
                  Federal prosecutors reported that Gavin, a former Boston science
                  teacher, was sentenced to 10 years in federal court in a
                  child-exploitation case.
                </p>
              }
              whyIncluded="Teacher-trust case involving a former public-school educator."
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

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Youth sports / youth groups
              </h3>
            </div>

            <CaseRow
              emoji="🎾"
              name="Daniel James Riggs"
              role="Former Fort Lauderdale tennis coach"
              jurisdiction="Florida / Southern District of Florida"
              stage="Sentenced"
              date="March 17, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Riggs was sentenced to 20 years after pleading
                  guilty in a case involving two minor students he coached at a Fort
                  Lauderdale tennis center.
                </p>
              }
              whyIncluded="Direct coach-student access case involving a youth-sports role and students under his instruction."
              sources={[
                {
                  label: "DOJ / USAO Southern Florida",
                  href: "https://www.justice.gov/usao-sdfl/pr/former-fort-lauderdale-tennis-coach-sentenced-20-years-coercing-students-engage-sexual",
                },
                {
                  label: "NBC Miami",
                  href: "https://www.nbcmiami.com/news/local/fort-lauderdale-tennis-coach-bobby-riggs-grandson-sentenced-child-sex-abuse-case/3782199/",
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
                <p>
                  Local reporting said Lawshea was sentenced to 50 years after conviction
                  in a case involving a student athlete.
                </p>
              }
              whyIncluded="Strong youth-sports authority case involving allegations that he used a youth track role to access girls he coached."
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

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education
              </h3>
            </div>

            <CaseRow
              emoji="🏫"
              name="Kostas Fekkas"
              role="Former high school teacher"
              jurisdiction="New York / Southern District of New York"
              stage="Sentenced"
              date="March 18, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Fekkas was sentenced to 13 years for coercing
                  minors to produce CSAM.
                </p>
              }
              whyIncluded="Teacher-legitimacy case. The approved rules do not require a direct victim-in-care nexus when the public-trust role itself is editorially relevant."
              sources={[
                {
                  label: "DOJ / USAO Southern New York",
                  href: "https://www.justice.gov/usao-sdny/pr/former-high-school-teacher-sentenced-13-years-prison-coercing-minors-produce-child",
                },
                {
                  label: "Hoodline",
                  href: "https://hoodline.com/2026/03/ex-hartsdale-teacher-gets-13-years-for-coercing-kids-in-explicit-photo-scheme/",
                },
              ]}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Law enforcement / corrections
              </h3>
            </div>

            <CaseRow
              emoji="🚓"
              name="Paul Aurelio McClain"
              role="Former San Diego State University Police sergeant"
              jurisdiction="California / Central District of California"
              stage="Guilty plea"
              date="March 18, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors reported that McClain pleaded guilty to possessing
                  more than 600 CSAM files.
                </p>
              }
              whyIncluded="Campus-police authority case involving a former university police sergeant."
              sources={[
                {
                  label: "DOJ / USAO Central California",
                  href: "https://www.justice.gov/usao-cdca/pr/former-san-diego-state-university-police-sergeant-pleads-guilty-possessing-sexually",
                },
                {
                  label: "NBC San Diego",
                  href: "https://www.nbcsandiego.com/news/local/ex-sdsu-police-sergeant-pleads-guilty-to-child-porn-charge/3996821/",
                },
              ]}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Healthcare / therapy
              </h3>
            </div>

            <CaseRow
              emoji="⚕️"
              name="Craig A. Spiegel"
              role="Former St. Louis County pediatrician"
              jurisdiction="Missouri / Eastern District of Missouri"
              stage="Sentenced"
              date="March 24, 2026"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Spiegel was sentenced to 20 years for
                  exchanging prescriptions for sexual conduct, images, or cash, and said he
                  exploited his medical position.
                </p>
              }
              whyIncluded="High-value healthcare-authority case involving medical trust, patient vulnerability, and exploitation of professional authority."
              sources={[
                {
                  label: "DOJ / USAO Eastern Missouri",
                  href: "https://www.justice.gov/usao-edmo/pr/former-st-louis-area-pediatrician-sentenced-20-years-prison-exchanging-prescriptions",
                },
                {
                  label: "HHS OIG",
                  href: "https://oig.hhs.gov/fraud/enforcement/former-st-louis-area-pediatrician-sentenced-to-20-years-in-prison-for-exchanging-prescriptions-for-sex-acts/",
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
                <p>
                  Federal prosecutors reported that Glapinski, a family medicine doctor,
                  was sentenced to 15 years for CSAM distribution and possession conduct.
                </p>
              }
              whyIncluded="Doctor-trust case involving a family medicine physician who treated adults and children."
              sources={[
                {
                  label: "DOJ / USAO Eastern Michigan",
                  href: "https://www.justice.gov/usao-edmi/pr/physician-sentenced-15-years-federal-prison-possessing-and-distributing-thousands",
                },
                {
                  label: "CBS Detroit",
                  href: "https://www.cbsnews.com/detroit/news/former-michigan-doctor-sentenced-to-prison-possessing-child-pornography/",
                },
              ]}
            />

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education / youth sports
              </h3>
            </div>

            <CaseRow
              emoji="🤼"
              name="Stephen James Lemelin"
              role="Former Burlington High School wrestling coach"
              jurisdiction="Massachusetts / District of Massachusetts"
              stage="Sentenced"
              date="March 26, 2026; DOJ release March 30"
              registry="No prior registration noted"
              summary={
                <p>
                  Federal prosecutors said Lemelin was sentenced to two years for attempted
                  transfer of obscene material to a minor.
                </p>
              }
              whyIncluded="School-coach authority case involving a former high school wrestling coach."
              sources={[
                {
                  label: "DOJ / USAO Massachusetts",
                  href: "https://www.justice.gov/usao-ma/pr/former-high-school-wrestling-coach-sentenced-sending-obscene-material-minor",
                },
                {
                  label: "Boston 25 News",
                  href: "https://www.boston25news.com/news/local/former-mass-high-school-wrestling-coach-gets-prison-time-sending-obscene-material-minor/LU7FBNH3LJHIVGCL65W4VBZECU/",
                },
              ]}
            />
          </Section>

          <Section
            title="Civil / Administrative Actions"
            eyebrow="District oversight, settlements, and civil litigation"
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Education
              </h3>
            </div>

            <CaseRow
              emoji="🏛️"
              name="El Monte Union High School District"
              role="Public school district"
              jurisdiction="California / Los Angeles County"
              stage="AG settlement / stipulated judgment"
              date="March 20, 2026"
              registry="Registry status not mentioned"
              summary={
                <p>
                  California DOJ announced a proposed stipulated judgment requiring
                  oversight and reforms after finding systemic shortfalls in the district’s
                  handling of student complaints involving sexual harassment, assault, and
                  abuse.
                </p>
              }
              whyIncluded="Major institutional-accountability item involving complaint tracking, policy revision, training, services, and court-and-AG oversight."
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
                <p>
                  Wisconsin Public Radio reported that a federal lawsuit alleged a
                  long-running pattern of school-district failure involving teacher and
                  coach misconduct.
                </p>
              }
              whyIncluded="Plausible school-system failure case with a March filing event and strong Accountability Watch fit."
              sources={[
                {
                  label: "Wisconsin Public Radio",
                  href: "https://www.wpr.org/news/federal-complaint-alleges-ongoing-sexual-abuse-oconto-falls-school-district",
                },
                {
                  label: "WLUK / FOX 11",
                  href: "https://abc3340.com/news/crisis-in-the-classroom/3-former-oconto-falls-students-sue-district-alleging-years-of-staff-sexual-misconduct-amanda-watzka-brooke-lacount-grace-williams-brynn-larsen-gayle-gander-wisconsin",
                },
              ]}
            />
          </Section>

          <Section
            title="Institutional / Political Misconduct"
            eyebrow="Institutional findings and oversight failures"
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                Clergy / religious institutions
              </h3>
            </div>

            <CaseRow
              emoji="⛪"
              name="Diocese of Providence"
              role="Catholic diocese"
              jurisdiction="Rhode Island"
              stage="AG report / investigative findings"
              date="March 4, 2026"
              registry="Registry status not mentioned"
              summary={
                <p>
                  The Rhode Island Attorney General published a comprehensive report on
                  decades of clergy abuse allegations and diocesan handling, with report
                  materials, recommendations, and a credibly accused clergy appendix.
                </p>
              }
              whyIncluded="Major institutional-shield story based on a yearslong AG and State Police investigation into diocesan handling of clergy abuse allegations."
              sources={[
                {
                  label: "Rhode Island Attorney General report page",
                  href: "https://riag.ri.gov/diocese-report",
                },
                {
                  label: "Associated Press",
                  href: "https://apnews.com/article/f40c99b76870a2516999bf2d676aa144",
                },
              ]}
            />
          </Section>

          <Section title="Watchlist" eyebrow="Items to monitor after March">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                <span className="font-bold">Ryan Brungardt / Kansas wrestling investigation:</span>{" "}
                monitor for superseding indictment, additional identified victims, and
                school or athletics administrative fallout.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                <span className="font-bold">Benoit Cransac / Isidore Newman School:</span>{" "}
                monitor later developments, school response, bond proceedings, and whether
                the matter becomes a larger institutional-access story.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                <span className="font-bold">El Monte Union High School District:</span>{" "}
                monitor court approval, stipulated-judgment implementation,
                complaint-tracking reforms, compliance-coordinator appointment, and AG
                oversight updates.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800">
                <span className="font-bold">Oconto Falls School District lawsuit:</span>{" "}
                monitor amended complaints, district response, discovery, additional
                plaintiffs, and any evidence of repeated ignored warnings.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-800 md:col-span-2">
                <span className="font-bold">Diocese of Providence report:</span> monitor
                legislative proposals, diocesan policy changes, civil litigation, survivor
                responses, and whether new criminal or administrative actions follow from
                the AG’s findings.
              </div>
            </div>
          </Section>

          <div className="rounded-2xl border border-slate-300 bg-white p-5 text-sm leading-6 text-slate-800 shadow-sm">
            <div className="mb-2 flex items-center gap-2 font-bold text-slate-950">
              <Scale className="h-4 w-4" />
              Presumption of innocence and registry framing
            </div>
            Defendants are presumed innocent unless and until proven guilty. Arrests,
            charges, civil complaints, and investigative findings are not convictions.
            Registry notes reflect only what was reported or established in the cited
            public sources. “Registry status not mentioned” is displayed as “Registry: No
            prior registration noted” under SOLAR’s page convention and should not be read
            as an independent registry-history finding.
          </div>
        </div>
      </main>
    </>
  );
}