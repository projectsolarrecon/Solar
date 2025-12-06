// src/pages/resources/accountability-watch/2025-12-06.tsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { Scale, Shield, FileText, Quote, Info } from 'lucide-react';
import ShareBar from '../../../components/solar/ShareBar';

export const teaserHighlights = [
  'Florida teacher sentenced to 135 years after investigators say he used school Wi-Fi to send and receive CSAM and committed sexual abuse involving a family pet.',
  'Former Minneapolis teacher and former Highlands School District teacher face prison and new charges tied to child sexual abuse material and alleged institutional sexual assault.',
  'Multiple law-enforcement officials and a volunteer fire chief are charged in sexualized misconduct cases that rely on their official authority and access—not prior registry flags.',
];

type Stage =
  | 'Arrested / Charged'
  | 'Indicted'
  | 'Sentenced'
  | 'Civil lawsuit filed'
  | 'Investigative subcommittee opened'
  | string;

interface SourceLink {
  label: string;
  href: string;
}

interface CaseRowProps {
  name: string;
  role: string;
  jurisdiction: string;
  stage: Stage;
  date: string;
  summary: React.ReactNode;
  registry: 'No prior registration noted' | 'Registry status not mentioned' | 'Previously registered';
  sources: SourceLink[];
  emoji?: string;
  whyIncluded?: React.ReactNode;
}

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100">
    {children}
  </span>
);

const StageBadge: React.FC<{ stage: Stage }> = ({ stage }) => {
  let base =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset';

  let tone = 'bg-slate-50 text-slate-900 ring-slate-200';

  if (stage === 'Civil lawsuit filed') {
    tone = 'bg-sky-50 text-sky-900 ring-sky-200';
  } else if (stage === 'Arrested / Charged') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
  } else if (stage === 'Indicted') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Investigative subcommittee opened') {
    tone = 'bg-indigo-50 text-indigo-900 ring-indigo-200';
  } else if (stage === 'Sentenced') {
    tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  }

  return <span className={`${base} ${tone}`}>{stage}</span>;
};

const RegistryChip: React.FC<{ status: CaseRowProps['registry'] }> = ({ status }) => {
  let tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
  let label = 'No prior registration noted';

  if (status === 'Previously registered') {
    tone = 'bg-rose-50 text-rose-900 ring-rose-200';
    label = 'Previously registered';
  } else if (status === 'Registry status not mentioned') {
    tone = 'bg-emerald-50 text-emerald-900 ring-emerald-200';
    label = 'No prior registration noted';
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}
    >
      <span className="mr-1 font-semibold">Registry:</span>
      {label}
    </span>
  );
};

const Section: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <section className="space-y-4 rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
    <header className="flex items-center gap-3 border-b border-slate-100 pb-3">
      {icon && <div className="rounded-xl bg-slate-100 p-2 text-slate-700">{icon}</div>}
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    </header>
    <div className="space-y-4 text-sm text-slate-800">{children}</div>
  </section>
);

const PullQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <figure className="border-l-4 border-slate-400 pl-4 text-sm italic text-slate-700">
    <Quote className="mb-2 h-4 w-4 text-slate-400" />
    <blockquote>{children}</blockquote>
  </figure>
);

const CaseRow: React.FC<CaseRowProps> = ({
  name,
  role,
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji = '🧾',
  whyIncluded,
}) => (
  <article className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="text-lg" aria-hidden>
          {emoji}
        </span>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-600">{role}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1 text-right">
        <p className="text-xs font-medium text-slate-700">{date}</p>
        <p className="text-xs text-slate-500">{jurisdiction}</p>
      </div>
    </div>

    <div className="flex flex-wrap items-center gap-2">
      <StageBadge stage={stage} />
      <RegistryChip status={registry} />
    </div>

    <div className="text-sm text-slate-800">{summary}</div>

    {whyIncluded && (
      <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-900 ring-1 ring-amber-100">
        <div className="mb-1 flex items-center gap-1 font-semibold">
          <Info className="h-3 w-3" />
          <span>Why this case is included</span>
        </div>
        <div>{whyIncluded}</div>
      </div>
    )}

    {sources.length > 0 && (
      <div className="flex flex-wrap gap-2 pt-1">
        {sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 underline hover:bg-slate-100"
          >
            {source.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const AccountabilityWatch2025_12_06: React.FC = () => {
  const pageTitle =
    'Accountability Watch – Authority & Access Cases for November 30–December 6, 2025';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-12 text-slate-100">
        <header className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-3">
                <Badge>Accountability Watch · SOLAR</Badge>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Authority & Access · Week of November 30–December 6, 2025
                </h1>
                <p className="max-w-2xl text-sm text-slate-300">
                  Weekly snapshot of arrests, charges, sentencings, and civil actions involving
                  people in positions of institutional or household authority. Emphasis is on cases
                  where risk emerged inside roles like teacher, coach, clergy, law enforcement, or
                  administrator rather than through prior sex-offender registration.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>Jurisdictions: U.S. federal & state; local institutions.</span>
                  <span>Window: Sunday–Saturday, Nov 30–Dec 6, 2025 (America/New_York).</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-700">
                  <Scale className="h-5 w-5 text-emerald-300" />
                  <div className="text-xs text-slate-200">
                    <p className="font-semibold">Presumption of innocence</p>
                    <p>All defendants are presumed innocent unless and until proven guilty.</p>
                  </div>
                </div>
                <ShareBar
                  title={pageTitle}
                  url="https://solarcoalition.org/resources/accountability-watch/2025-12-06"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto mt-8 flex max-w-5xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          {/* At a Glance */}
          <Section
            title="At a Glance"
            icon={<Shield className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold">
                  Teachers and school staff remain prominent in this week&apos;s cases.
                </span>{' '}
                A Central Florida teacher received a 135-year sentence after investigators said he
                used school Wi-Fi to traffic child sexual abuse material, while other teachers in
                Minnesota, Pennsylvania, Colorado, Nevada, and Louisiana faced sentencing or new
                charges for exploitation involving students or minors.
              </li>
              <li>
                Several cases involve{' '}
                <span className="font-semibold">online and digital exploitation</span>—including
                educators convicted of possessing CSAM or soliciting someone they believed to be a
                minor—illustrating that risk can originate from authority figures’ private devices
                even when alleged victims are not their own students.
              </li>
              <li>
                <span className="font-semibold">Law enforcement and public-safety officials</span>{' '}
                appear again: a Missouri police officer admitted to stealing intimate photos from
                women&apos;s phones during traffic stops, a Texas K-9 officer was arrested on sexual
                assault and official oppression charges, and a former New Jersey police officer and
                volunteer fire chief is accused of groping firefighters under the guise of training.
              </li>
              <li>
                New civil lawsuits against{' '}
                <span className="font-semibold">
                  Celina ISD in Texas and Sierra Canyon School in Los Angeles
                </span>{' '}
                allege institutional negligence and cover-up around child sexual abuse and bullying
                dynamics, reinforcing how systems—not registries—often fail to prevent harm.
              </li>
              <li>
                Across all cases, there is{' '}
                <span className="font-semibold">
                  no public indication that pre-existing sex-offender registration
                </span>{' '}
                warned families or institutions; instead, allegations surfaced through student and
                victim disclosures, digital forensics, and internal complaints.
              </li>
            </ul>
          </Section>

          {/* Criminal cases – educators and school authority */}
          <Section
            title="Criminal Cases – Educators and School-Based Authority"
            icon={<FileText className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">
              <CaseRow
                name="David Robert McKeown"
                role="Former teacher, UBIC Academy (private school), Holly Hill"
                jurisdiction="Volusia County, Florida"
                stage="Sentenced"
                date="Sentencing reported Dec. 2, 2025"
                registry="No prior registration noted"
                emoji="📚"
                summary={
                  <>
                    <p>
                      McKeown was sentenced to{' '}
                      <span className="font-semibold">135 years in state prison</span> on child
                      pornography and related charges. According to statements from the Florida
                      Attorney General&apos;s office and local coverage, investigators determined he
                      used <span className="font-semibold">school Wi-Fi at UBIC Academy</span>{' '}
                      during school hours to send and receive child sexual abuse material. Some of
                      the material involved very young children.
                    </p>
                    <p className="mt-2">
                      McKeown was convicted of aggravated possession of child pornography, multiple
                      counts of possession of child pornography, and several counts related to
                      sexual conduct with the family&apos;s dog. As part of the sentence, he was
                      designated a sexual offender and prohibited from owning animals if he is ever
                      released.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    McKeown served as a classroom teacher and allegedly used his{' '}
                    <span className="font-semibold">professional position and school infrastructure</span>{' '}
                    while engaging in serious child sexual abuse material offenses. Reporting does
                    not indicate that he previously appeared on a registry; the registry status
                    arises only{' '}
                    <span className="font-semibold">
                      after conviction, not as a prior warning to families
                    </span>
                    .
                  </>
                }
                sources={[
                  {
                    label: 'WESH – Florida teacher sentenced to 135 years after CSAM and pet-abuse case',
                    href: 'https://www.wesh.com/article/florida-teacher-sentenced-135-years-sex-images-students-pet/69610208',
                  },
                ]}
              />

              <CaseRow
                name="Preston Palmer"
                role="Former elementary school teacher, Minneapolis Public Schools"
                jurisdiction="Hennepin County, Minnesota"
                stage="Sentenced"
                date="Sentencing reported Dec. 4, 2025"
                registry="Registry status not mentioned"
                emoji="🖥️"
                summary={
                  <>
                    <p>
                      Palmer, a former elementary school teacher, was sentenced to{' '}
                      <span className="font-semibold">10 years in prison</span> after pleading
                      guilty to <span className="font-semibold">one count of electronic
                      solicitation of a child (or person believed to be a child)</span> and five
                      counts of possessing child sexual abuse material. According to charging
                      documents, he communicated with an undercover officer he believed to be a
                      13-year-old boy and claimed he had 87 gigabytes and more than 1,000 videos of
                      child sexual abuse material stored on a device he called his “pedophone.”
                    </p>
                    <p className="mt-2">
                      He arranged to meet the purported minor at a public park, where he was
                      arrested. Coverage notes that he was employed as a teacher in a Minneapolis
                      public school at the time of his arrest and was later terminated from his
                      position.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Even though the identified victim in the criminal case was part of a law
                    enforcement sting rather than one of his students, Palmer&apos;s role as a{' '}
                    <span className="font-semibold">
                      classroom teacher entrusted with young children
                    </span>{' '}
                    makes this a clear hypocrisy and access case. Reporting does not state that he
                    was previously on any registry; the public only learned of his risk through this
                    prosecution, not via registry-based warnings.
                  </>
                }
                sources={[
                  {
                    label: 'CBS Minnesota – Former Minneapolis teacher sentenced for CSAM and solicitation',
                    href: 'https://www.cbsnews.com/minnesota/news/minneaoplis-teacher-child-sexual-abuse-material-sentencing/?intcid=CNR-02-0623',
                  },
                ]}
              />

              <CaseRow
                name="Sean Dicer"
                role="Former teacher, Highlands School District"
                jurisdiction="Allegheny County, Pennsylvania"
                stage="Arrested / Charged"
                date="Charges reported Dec. 5, 2025"
                registry="No prior registration noted"
                emoji="🏫"
                summary={
                  <>
                    <p>
                      Dicer, a former Highlands School District teacher, was charged with sexually
                      abusing two male students. According to the criminal complaint summarized in
                      local coverage, one victim alleges abuse beginning when he was around 11 or
                      12, and another reports abuse as a minor student. Prosecutors say Dicer
                      allegedly paid one victim more than $6,000 over time in an effort to keep him
                      from reporting.
                    </p>
                    <p className="mt-2">
                      The charges include institutional sexual assault of a minor, unlawful contact
                      with a minor, corruption of minors, indecent assault, and related offenses.
                      The case appears to involve conduct tied directly to his position as a teacher
                      and his access to students.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Dicer&apos;s case fits the{' '}
                    <span className="font-semibold">
                      classic pattern of alleged teacher–student abuse
                    </span>
                    , with power imbalances and alleged hush payments. Reporting does not mention
                    prior sex-offense convictions or registry status, so parents and students would
                    have seen him as a trusted educator, not as someone flagged by the registry
                    system.
                  </>
                }
                sources={[
                  {
                    label: 'CBS Pittsburgh – Former Highlands teacher charged with sexually abusing 2 students',
                    href: 'https://www.cbsnews.com/pittsburgh/news/former-highlands-school-district-teacher-charged-sexual-abuse/',
                  },
                ]}
              />

              <CaseRow
                name="Anthony Coffield"
                role="Theatre teacher, Green Valley High School"
                jurisdiction="Henderson, Nevada (Clark County)"
                stage="Arrested / Charged"
                date="Court appearance reported Dec. 2, 2025"
                registry="No prior registration noted"
                emoji="🎭"
                summary={
                  <>
                    <p>
  Coffield, 35, a Green Valley High School theater teacher, was arrested on
  multiple sex-offense charges, including sexual assault and sexual conduct
  between a school employee and a pupil over 16. According to a Henderson police
                      report referenced in local coverage, he allegedly lured a student to the
                      school's theater by email a few days before her graduation, sexually assaulted
                      her in a dressing room, and she later became pregnant.
                    </p>
                    <p className="mt-2">
                      Reports say the student first disclosed the assault to her mother; Coffield
                      has since appeared in court and no longer works for the Clark County School
                      District. Additional media coverage has prompted broader conversations
                      locally about warning signs and how schools respond to allegations of
                      educator misconduct.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Coffield is alleged to have used{' '}
                    <span className="font-semibold">school email and campus space</span> to obtain
                    access to a student for sexual assault. There is no indication he was on a
                    registry before these charges; the risk appears to have emerged entirely within
                    the teacher–student relationship and school environment.
                  </>
                }
                sources={[
                  {
                    label: 'FOX5 Vegas – Green Valley teacher appears in court on sex-abuse charges',
                    href: 'https://www.fox5vegas.com/2025/12/02/green-valley-teacher-appears-court-multiple-sexual-abuse-charges/',
                  },
                  {
                    label: 'KSNV – Psychologist weighs in after allegations against Green Valley teacher',
                    href: 'https://news3lv.com/news/local/psychologist-offers-insight-on-alleged-teacher-misconduct-cases',
                  },
                ]}
              />
<CaseRow
                name="Christen Cassic"
                role="Former teacher and soccer coach, Douglas County School District"
                jurisdiction="Douglas County, Colorado"
                stage="Sentenced"
                date="Sentencing reported Dec. 6, 2025"
                registry="Registry status not mentioned"
                emoji="⚽"
                summary={
                  <>
                    <p>
                      Cassic, 56, a former Douglas County teacher and soccer coach, was sentenced to{' '}
                      <span className="font-semibold">90 days in jail</span> and{' '}
                      <span className="font-semibold">
                        10 years of sex-offender intensive supervised probation
                      </span>{' '}
                      after pleading guilty to sexual exploitation of a child. According to the 23rd
                      Judicial District Attorney's Office, a fellow teacher found him in January
                      2024 sitting at his desk with his pants down, watching pornography on his
                      laptop; investigators later found images on his phone that included students
                      photographed without their knowledge.
                    </p>
                    <p className="mt-2">
                      The DA’s office said that some images focused on students as they bent over
                      or climbed stairs. Cassic will be subject to strict probation conditions and
                      ongoing monitoring, but local coverage does not explicitly detail his registry
                      classification beyond the sex-offender-focused probation terms.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Cassic’s case demonstrates how a{' '}
                    <span className="font-semibold">
                      teacher–coach with daily access to students
                    </span>{' '}
                    can engage in hidden exploitation—secretly photographing and cataloging images
                    of children—without any prior registry status alerting families or colleagues.
                  </>
                }
                sources={[
                  {
                    label: 'KKTV – Former Colorado teacher sentenced for sexual exploitation of a child',
                    href: 'https://www.kktv.com/2025/12/06/former-colorado-teacher-sentenced-90-days-jail-after-pleading-guilty-sexual-exploitation-child/',
                  },
                ]}
              />
<CaseRow
                name="Victoria Marling"
                role="Teacher (Concordia Parish school)"
                jurisdiction="Concordia Parish, Louisiana"
                stage="Arrested / Charged"
                date="Arrest announced Dec. 5, 2025"
                registry="No prior registration noted"
                emoji="✏️"
                summary={
                  <>
                    <p>
                      The Concordia Parish Sheriff’s Office announced the arrest of Victoria
                      Marling, described as a school teacher, on allegations of{' '}
                      <span className="font-semibold">
                        sexual misconduct between an educator and student
                      </span>
                      , obscenity, and obstruction of justice. According to the sheriff’s office,
                      deputies received a report of suspected sexual abuse on November 18, 2025.
                    </p>
                    <p className="mt-2">
                      Detectives executed social-media search warrants and, after reviewing digital
                      communications, developed probable cause for her arrest. No additional details
                      regarding the student or duration of alleged misconduct were provided in the
                      public statements.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Marling’s case represents a{' '}
                    <span className="font-semibold">direct allegation of educator sexual misconduct</span>{' '}
                    requiring digital forensics to investigate. Reporting contains no indication
                    of prior registry status; risk surfaced only when a student reported abuse.
                  </>
                }
                sources={[
                  {
                    label: 'KNOE – Concordia Parish teacher accused of sexual misconduct with student',
                    href: 'https://www.knoe.com/2025/12/05/concordia-parish-teacher-accused-sexual-misconduct-with-student/',
                  },
                  {
                    label: 'CPSO Facebook – Press release on teacher arrest',
                    href: 'https://www.facebook.com/CPsheriff/posts/press-releaseschool-teacher-arrested-for-prohibited-sexual-conduct-with-a-studen/1240508868124200/',
                  },
                ]}
              />
</div>
          </Section>

          <Section
            title="Law Enforcement & Public-Safety Authority"
            icon={<Shield className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">
<CaseRow
                name="Julian Alcala"
                role="Former police officer, Florissant Police Department"
                jurisdiction="St. Louis County, Missouri · U.S. District Court (W.D. Mo.)"
                stage="Sentenced"
                date="Guilty plea reported Dec. 3, 2025"
                registry="No prior registration noted"
                emoji="🚓"
                summary={
                  <>
                    <p>
                      Alcala, a former Florissant police officer, pleaded guilty in federal court to
                      <span className="font-semibold"> 20 felony counts including civil-rights violations and computer fraud</span>.
                      According to federal prosecutors, during multiple traffic stops he took
                      women’s phones under the pretense of checking documents, unlocked them, and
                      searched their photo galleries to send intimate images and videos to devices he
                      controlled—without their knowledge or consent.
                    </p>
                    <p className="mt-2">
                      The U.S. Attorney’s Office reports that nearly two dozen women and individuals
                      depicted in the stolen images have filed federal civil-rights lawsuits against Alcala
                      and the City of Florissant. Those suits are paused pending sentencing, where he
                      faces up to 25 years in prison.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Alcala’s case reflects a profound
                    <span className="font-semibold"> abuse of law-enforcement authority and privileged digital access</span>.
                    The misconduct was discovered through victim disclosures and federal investigation—
                    not through any prior registry warning.
                  </>
                }
                sources={[
                  {
                    label: 'KCUR – Former Missouri police officer admits stealing intimate photos during stops',
                    href: 'https://www.kcur.org/news/2025-12-03/former-missouri-police-officer-admits-to-stealing-intimate-photos-during-traffic-stops',
                  },
                ]}
              />

              <CaseRow
                name="Alberto De La Torre"
                role="Former K-9 officer, Schertz Police Department"
                jurisdiction="Guadalupe County, Texas"
                stage="Arrested / Charged"
                date="Arrest reported Dec. 4–5, 2025"
                registry="No prior registration noted"
                emoji="🐕‍🦺"
                summary={
                  <>
                    <p>
                      De La Torre, 31, a former Schertz Police Department K-9 officer, was fired and
                      later arrested on a warrant charging him with <span className="font-semibold">sexual assault</span>.
                      According to reporting summarizing law enforcement statements, he was terminated
                      on November 18, 2025, after an internal investigation into a complaint concerning
                      truthfulness, and was under investigation for a November 14 police report alleging
                      sexual assault and official oppression.
                    </p>
                    <p className="mt-2">
                      Guadalupe County deputies arrested him following what they described as a
                      “high risk traffic stop” in Cibolo. Specific details of the alleged assault were
                      not publicly released.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    De La Torre’s case involves alleged sexual misconduct linked to
                    <span className="font-semibold"> policing authority</span>. The investigation began
                    after internal and external complaints rather than any registry-based alert.
                  </>
                }
                sources={[
                  {
                    label: 'San Antonio Express-News – Fired Schertz officer arrested on sexual assault charge',
                    href: 'https://www.expressnews.com/news/article/schertz-police-officer-fired-arrest-sexual-assault-21222862.php',
                  },
                ]}
              />

              <CaseRow
                name="Robert Sinnott Jr."
                role="Former police officer; former chief, Silverton Volunteer Fire Company"
                jurisdiction="Ocean County, New Jersey (arrested in Florida)"
                stage="Arrested / Charged"
                date="Charges announced Dec. 5–6, 2025"
                registry="No prior registration noted"
                emoji="🚒"
                summary={
                  <>
                    <p>
                      Sinnott, a former municipal police officer and ex-chief of the Silverton
                      Volunteer Fire Company, was arrested in Florida after New Jersey authorities charged
                      him with <span className="font-semibold">four counts of criminal sexual contact and one count of official misconduct</span>.
                      According to the New Jersey Attorney General’s office, multiple male volunteer
                      firefighters report Sinnott handcuffed and groped them during purported “training
                      sessions,” and in some cases photographed them while restrained.
                    </p>
                    <p className="mt-2">
                      The alleged incidents occurred both at the Silverton firehouse and at Sinnott’s
                      home. Investigators say the victims initially believed the exercises were legitimate
                      law-enforcement or safety training.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    Sinnott’s case highlights how
                    <span className="font-semibold"> training authority and law-enforcement credibility</span>
                    may be leveraged to facilitate alleged sexual misconduct. There is no indication he
                    previously appeared on a sex-offender registry; risk was embedded in his institutional
                    authority roles.
                  </>
                }
                sources={[
                  {
                    label: 'FirefighterNation – NJ firefighters say ex-cop handcuffed, groped them',
                    href: 'https://www.firefighternation.com/news/nj-firefighters-say-ex-cop-handcuffed-groped-them/',
                  },
                ]}
              />
            </div>
          </Section>
<Section
            title="Institutional Accountability & Civil Actions"
            icon={<Scale className="h-5 w-5 text-slate-700" aria-hidden />}
          >
            <div className="space-y-4">

              <CaseRow
                name="Celina ISD & former coach/teacher Caleb Elliott (multiple civil suits)"
                role="Public school district; former middle-school teacher & football coach"
                jurisdiction="Collin County, Texas (civil court)"
                stage="Civil lawsuit filed"
                date="Third and fourth lawsuits reported Nov. 26–Dec. 4, 2025"
                registry="No prior registration noted"
                emoji="🏈"
                summary={
                  <>
                    <p>
                      Multiple families have filed civil lawsuits against Celina ISD and former Moore
                      Middle School teacher/coach Caleb Elliott. Recent filings include a
                      <span className="font-semibold"> third and fourth lawsuit</span> alleging that
                      Elliott secretly recorded boys in various stages of undress in a locker room and
                      coerced students into nude exercises. Families claim the district ignored or
                      downplayed warning signs.
                    </p>
                    <p className="mt-2">
                      Reports indicate at least 39 alleged victims. Suits say administrators failed to
                      act on prior concerns and that Celina police closed an earlier investigation too
                      quickly. One suit uses a new Texas statute allowing claims against districts in
                      certain sexual-misconduct cases despite sovereign immunity.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    These lawsuits focus on
                    <span className="font-semibold"> institutional responsibility and oversight failures</span>.
                    No reporting indicates Elliott had prior registration status; alleged misconduct
                    emerged internally and through student disclosures, not through any registry-based
                    prevention system.
                  </>
                }
                sources={[
                  {
                    label: 'CBS Texas – Third lawsuit claims Celina ISD enabled misconduct',
                    href: 'https://www.cbsnews.com/texas/news/third-lawsuit-celina-isd-enabled-former-teacher-coach-caleb-elliott-alleged-sexual-misconduct/',
                  },
                  {
                    label: 'Texas Scorecard – Fourth lawsuit filed against Celina ISD',
                    href: 'https://texasscorecard.com/local/fourth-lawsuit-filed-against-celina-isd-coach-caleb-elliott/',
                  },
                  {
                    label: 'NBC 5 DFW – Lawsuit filed on behalf of 17 families',
                    href: 'https://www.nbcdfw.com/news/local/lawsuit-against-celina-isd-former-coach-17-families/3951754/',
                  },
                  {
                    label: 'FOX 4 – Celina ISD investigation dispute',
                    href: 'https://www.fox4news.com/news/celina-isd-investigation-police-vs-attorneys',
                  },
                ]}
              />

              <CaseRow
                name="Sierra Canyon School – “Kissing Club” lawsuit"
                role="Private school leadership and staff"
                jurisdiction="Los Angeles County, California (civil court)"
                stage="Civil lawsuit filed"
                date="Suit reported Dec. 4, 2025"
                registry="No prior registration noted"
                emoji="🏫"
                summary={
                  <>
                    <p>
                      Parents of an 8-year-old filed suit against Sierra Canyon School alleging older
                      students pressured younger children into a “<span className="font-semibold">kissing club</span>”
                      involving unwanted, sexualized contact in bathrooms. The family contends school
                      officials failed to supervise adequately or report concerns promptly.
                    </p>
                    <p className="mt-2">
                      According to the complaint, the mother had previously raised concerns in 2023
                      about bullying and boundaries but felt the school minimized the seriousness.
                      The family eventually withdrew their child, alleging institutional negligence.
                    </p>
                  </>
                }
                whyIncluded={
                  <>
                    The lawsuit focuses on
                    <span className="font-semibold"> institutional duty of care</span>. Although no
                    adult perpetrator is identified, the case illustrates gaps in school supervision
                    and reporting systems. Registry mechanisms play no role in this form of harm;
                    accountability depends entirely on school policies.
                  </>
                }
                sources={[
                  {
                    label: 'Los Angeles Times – Private school “kissing club” lawsuit',
                    href: 'https://www.latimes.com/california/story/2025-12-04/kissing-club-chatsworth-private-school-bullying-sexual-assault-lawsuit',
                  },
                  {
                    label: 'CBS Los Angeles – Family sues Sierra Canyon',
                    href: 'https://www.cbsnews.com/losangeles/news/sierra-canyon-school-sued-kissing-club-7-year-old-alleged-victim/',
                  },
                  {
                    label: 'ABC7 – Family sues LA school',
                    href: 'https://abc7.com/post/family-of-8-year-old-girl-sues-los-angeles-school-alleging-daughter-was-sexually-assaulted-by-older-students/18247749/',
                  },
                ]}
              />
            </div>
          </Section>

          <section className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-xs text-slate-200">
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-100">
              <Info className="h-4 w-4 text-emerald-300" />
              <span>Methodology & disclaimer</span>
            </div>
            <p className="mb-2">
              This Accountability Watch entry focuses on alleged or confirmed misconduct involving
              authority roles—teachers, coaches, clergy, police, administrators, and others—reported
              between November 30 and December 6, 2025. All defendants are presumed innocent unless
              convicted. Civil complaints describe allegations only.
            </p>
            <p className="mb-2">
              Descriptions rely on legal or journalistic phrasing (e.g., “sexual abuse,” “exploitation,”
              “child pornography offenses”) without graphic detail. Links lead to reputable news or
              official documents; registry notes reflect only what sources mention.
            </p>
            <p>
              The purpose of this resource is to highlight how sexualized misconduct often arises
              within trusted authority roles rather than from individuals already listed on registries.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default AccountabilityWatch2025_12_06;