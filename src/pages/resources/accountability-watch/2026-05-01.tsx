// src/pages/resources/accountability-watch/2026-05-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "April 2026 cut across celebrity/public profile, clergy, schools, youth sports, law enforcement, healthcare, and childcare — but the access pattern was consistent: trusted roles and public legitimacy created proximity before formal accountability began.",
  "Youth-access cases were especially prominent, including a former track coach, youth soccer coach, school basketball coach, national climbing coach, daycare worker, and multiple teachers or tutors.",
  "Healthcare and childcare cases raised institutional questions alongside individual allegations: clinical authority, daycare supervision, state-agency review, facility closure, and broader oversight failures.",
  "The strongest through-line was not stranger danger. It was access created by pastor/youth-leader status, teacher-student authority, coach-athlete trust, physician-patient privacy, police power, daycare custody, and celebrity/public-profile influence.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Superseding indictment"
  | "Additional charges"
  | "New indictment / expanded charges"
  | "Convicted / Sentenced"
  | "Sentenced"
  | "Administrative leave"
  | "Expanded criminal case plus civil/institutional allegations"
  | "Facility closure / agency investigations"
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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Administrative leave": "border-sky-300 bg-sky-50 text-sky-800",
    "Facility closure / agency investigations":
      "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Expanded criminal case plus civil/institutional allegations":
      "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Superseding indictment": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Additional charges": "border-rose-300 bg-rose-50 text-rose-800",
    "New indictment / expanded charges":
      "border-rose-300 bg-rose-50 text-rose-800",
    "Convicted / Sentenced": "border-emerald-300 bg-emerald-50 text-emerald-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${
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
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${
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
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
      <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <div className="text-base font-semibold leading-7">{children}</div>
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
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            {emoji && <span aria-hidden="true">{emoji}</span>}
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate-700">{role}</p>
          <p className="mt-1 text-sm text-slate-600">
            {date} · {jurisdiction}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
      </div>

      <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-800">
        <p>{summary}</p>
        {whyIncluded && (
          <p className="rounded-xl border border-slate-200 bg-white p-3">
            <span className="font-black text-slate-950">Why included: </span>
            {whyIncluded}
          </p>
        )}
      </div>

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={`${name}-${source.href}`}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
            >
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20260501() {
  const pageTitle = "Accountability Watch — April 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="April 2026 Accountability Watch roundup tracking authority, access, public profile, institutional oversight, and prevention failures across schools, youth sports, clergy, healthcare, childcare, law enforcement, and celebrity/public influence cases."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>
                Accountability Watch
              </Badge>
              <Badge icon={<FileText className="h-3.5 w-3.5" />}>
                April 2026 roundup
              </Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>
                Verified-source shortlist
              </Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Accountability Watch — April 2026 Roundup
            </h1>

            <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-slate-200">
              <p>
                April’s cases belong together because they show how credibility,
                authority, and public legitimacy can create access before courts,
                agencies, employers, or governing bodies intervene.
              </p>
              <p>
                The month moved across celebrity/public profile, clergy, schools,
                youth sports, law enforcement, healthcare, and childcare. The
                settings changed, but the prevention gap did not: risk repeatedly
                appeared inside relationships and institutions that were already
                trusted.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-black uppercase tracking-[0.18em] text-slate-300">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included because
              the approved April case set involved public trust, child-facing
              access, healthcare authority, religious authority, badge power,
              public-profile legitimacy, youth-program proximity, or formal
              institutional-accountability action.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar title={pageTitle} />

          <Section title="At a Glance" eyebrow="Pattern summary">
            <div className="space-y-4 text-[16px] leading-8 text-slate-800">
              <p>
                April’s through-line is access through trust. The included cases
                are not interchangeable crime items; they cluster around roles,
                reputations, and institutions that gave adults credibility,
                proximity, privacy, or power before formal accountability began.
              </p>
              <p>
                Youth-access cases were especially prominent: a former track and
                field coach, youth soccer coach, school basketball coach, national
                climbing coach, daycare worker, teachers, a tutor, and a pastor
                identified as a youth leader. Healthcare and childcare entries
                added a second layer: not only alleged individual misconduct, but
                questions about professional oversight, institutional response,
                and whether safeguards worked when children or patients were
                already inside trusted systems.
              </p>
              <p>
                The recurring absence of prior-registration information reinforces
                the prevention point. These cases are best understood through
                authority, legitimacy, access, concealment, and delayed
                intervention — not through a simplified public-warning model of
                risk.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {teaserHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <PullQuote>
              April was not a random set of headlines. The same access points
              appeared again and again: public profile, clergy trust, classrooms,
              sports programs, daycare custody, patient privacy, and badge
              authority.
            </PullQuote>
          </Section>
<Section title="New Arrests & Charges" eyebrow="April 1–30, 2026">
            <Subgroup>Celebrity / public profile; wealth / public influence</Subgroup>
            <CaseRow
              emoji="🎵"
              name="David Anthony Burke / D4vd"
              role="Musician / public-profile defendant"
              jurisdiction="California"
              stage="Arrested / Charged"
              date="April 20, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Los Angeles prosecutors charged Burke, known professionally as
                  D4vd, in a case involving the death of 14-year-old Celeste Rivas
                  Hernandez and alleged prior sexual abuse. The charging theory
                  also raises public-profile concealment concerns tied to
                  reputation, secrecy, and career protection.
                </>
              }
              whyIncluded={
                <>
                  This is a major status/public-profile case. The accountability
                  relevance is not celebrity scandal; it is the alleged
                  intersection of fame, reputation, access, secrecy, and the
                  incentives that can surround public-facing careers.
                </>
              }
              sources={[
                {
                  label: "AP",
                  href: "https://apnews.com/article/5f0f75063da762ad8b73951851b1f0d6",
                },
                {
                  label: "Reuters",
                  href: "https://www.reuters.com/lifestyle/musician-d4vd-charged-with-murder-14yearold-girl-los-angeles-2026-04-20/",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>
            <CaseRow
              emoji="⛪"
              name="Lawrence Turnbull"
              role="Pastor / youth leader"
              jurisdiction="U.S. Virgin Islands"
              stage="Arrested / Charged"
              date="April 1–6, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors said Turnbull was arrested on charges
                  related to alleged minor-involved sexual misconduct and
                  identified him as the minor’s pastor and youth leader.
                </>
              }
              whyIncluded={
                <>
                  The alleged access point was not stranger contact. Prosecutors
                  specifically identified a religious and youth-leader role, which
                  carries spiritual legitimacy, adult trust, and repeated
                  child-facing access.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Virgin Islands",
                  href: "https://www.justice.gov/usao-vi/pr/st-thomas-pastor-arrested-federal-and-local-sex-offenses-involving-minor",
                },
                {
                  label: "Virgin Islands Consortium",
                  href: "https://viconsortium.com/vi-crime/virgin-islands-st--thomas-pastor-faces-10-years-to-life-on-charges-including-minor-transport--coercion-and-unlawful-sexual-contact",
                },
              ]}
            />

            <Subgroup>Youth sports / youth groups</Subgroup>
            <CaseRow
              emoji="🏃"
              name="Miguel Ángel García-López"
              role="Former track and field coach"
              jurisdiction="Puerto Rico"
              stage="Superseding indictment"
              date="April 15–16, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  A federal grand jury returned a superseding indictment charging
                  García-López, a former track and field coach, with
                  child-exploitation offenses involving multiple alleged minor
                  victims.
                </>
              }
              whyIncluded={
                <>
                  Youth-sports authority can create trust, repeated contact, and
                  institutional legitimacy. The April development expanded a
                  federal case where the coach role is central to the access
                  pattern.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Puerto Rico",
                  href: "https://www.justice.gov/usao-pr/pr/former-track-field-coach-charged-superseding-indictment-child-exploitation",
                },
              ]}
            />

            <CaseRow
              emoji="⚽"
              name="Chason Pointer"
              role="Youth soccer coach"
              jurisdiction="Michigan / Ohio"
              stage="Charged / Indicted"
              date="April 10 and April 23, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors said Pointer used online contact, crossed
                  state lines, and transported a minor. DOJ also asked families
                  with youth-soccer contact to come forward.
                </>
              }
              whyIncluded={
                <>
                  This is a built-in-access case involving a youth soccer coach.
                  DOJ’s own framing connected the investigation to youth-soccer
                  families, making the authority and access logic stronger than a
                  generic online-offense frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Michigan",
                  href: "https://www.justice.gov/usao-edmi/pr/holly-youth-soccer-coach-indicted-federal-grand-jury-transporting-minor-ohio-michigan",
                },
                {
                  label: "13abc",
                  href: "https://www.13abc.com/2026/04/20/man-charged-with-sex-crimes-against-minor-allegedly-traveled-nwo-take-teen-hotel/",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>
            <CaseRow
              emoji="🏫"
              name="Richard Villigram"
              role="Plaza Middle School teacher"
              jurisdiction="Missouri"
              stage="Arrested / Charged"
              date="April 22, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors charged Villigram with attempted
                  enticement of a minor and attempted receipt of child pornography
                  after an undercover investigation.
                </>
              }
              whyIncluded={
                <>
                  Although the charged contact arose from an undercover operation,
                  the middle-school teaching role matters. Accountability Watch
                  tracks child-facing professionals who appear in exploitation
                  cases before any registry-based public warning would exist.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Missouri",
                  href: "https://www.justice.gov/usao-wdmo/pr/park-hill-teacher-charged-attempted-enticement-minor-and-attempted-receipt-child",
                },
                {
                  label: "KCTV",
                  href: "https://www.kctv5.com/2026/04/22/park-hill-middle-school-teacher-charged-with-online-child-sex-crime/",
                },
              ]}
            />

            <Subgroup>Education / youth sports</Subgroup>
            <CaseRow
              emoji="🏀"
              name="Paige Adams"
              role="Former Cold Springs High School basketball coach / school employee"
              jurisdiction="Alabama"
              stage="Arrested / Charged"
              date="April 21–23, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting said Adams was indicted on more than 30 charges
                  involving a student under 19, including school-employee
                  sexual-offense counts and obscene-material allegations. The case
                  followed a school complaint and resignation.
                </>
              }
              whyIncluded={
                <>
                  This is a direct educator and coach access case. The alleged
                  misconduct involved a student, a school role, and a sports
                  authority position carrying trust, visibility, and repeated
                  access.
                </>
              }
              sources={[
                {
                  label: "ABC 33/40",
                  href: "https://abc3340.com/news/local/former-cold-springs-high-school-coach-charged-with-sexual-offenses-involving-student-alabama-cullman-county-paige-adams-2026",
                },
                {
                  label: "Cullman Tribune",
                  href: "https://www.cullmantribune.com/2026/04/21/adams-arrested-charged-with-sexual-crimes-with-student/",
                },
              ]}
            />

            <Subgroup>Law enforcement / corrections</Subgroup>
            <CaseRow
              emoji="🚓"
              name="Peter Alphonso Blake"
              role="Benson police officer / former Raleigh police officer"
              jurisdiction="North Carolina"
              stage="Arrested / Charged"
              date="April 22–23, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  The North Carolina SBI charged Blake with serious
                  sexual-violence and coercion-related offenses. Reporting said
                  the allegation was brought to the police department and then
                  referred for outside investigation.
                </>
              }
              whyIncluded={
                <>
                  Police authority creates a distinct public-power imbalance. The
                  accountability relevance comes from a sworn law-enforcement role,
                  departmental handling, and the need for independent review when
                  allegations involve badge authority.
                </>
              }
              sources={[
                {
                  label: "WRAL",
                  href: "https://www.wral.com/news/local/benson-peter-alphonso-blake-arrest-april-2026/",
                },
                {
                  label: "ABC11",
                  href: "https://abc11.com/post/former-benson-police-officer-peter-alphonso-blake-was-charged-rape-kidnapping-burglary/18941820/",
                },
              ]}
            />

            <Subgroup>Youth sports / youth groups</Subgroup>
            <CaseRow
              emoji="🧗"
              name="Matthew Maddison"
              role="USA Climbing strength/conditioning coach and Speed Team manager"
              jurisdiction="Utah"
              stage="Arrested / Charged"
              date="April 28–30, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting said Maddison, a USA Climbing coach and youth mentor,
                  was arrested on allegations involving child sexual abuse
                  material. USA Climbing placed him on unpaid leave.
                </>
              }
              whyIncluded={
                <>
                  This is a youth-sport access case involving a national-level
                  coach and mentor role, teenage athlete access, travel, and an
                  immediate institutional response by a sport governing body.
                </>
              }
              sources={[
                {
                  label: "KSL",
                  href: "https://www.ksl.com/article/51490770/youth-mentor-in-utah-arrested-accused-of-having-child-sex-abuse-material",
                },
                {
                  label: "Climbing",
                  href: "https://www.climbing.com/news/usa-climbing-coach-matthew-maddison-arrested/",
                },
              ]}
            />

            <Subgroup>Healthcare / therapy</Subgroup>
            <CaseRow
              emoji="⚕️"
              name="Derrick Todd"
              role="Former Brigham and Women’s / Faulkner Hospital physician"
              jurisdiction="Massachusetts"
              stage="New indictment / expanded charges"
              date="April 21–22, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Suffolk County prosecutors announced 81 new sexual-assault
                  charges involving 22 alleged victims. Reporting identified Todd
                  as a former Boston-area rheumatologist who practiced at Brigham
                  and Women’s and Faulkner.
                </>
              }
              whyIncluded={
                <>
                  This is a high-trust medical-authority case. The alleged
                  misconduct occurred under the legitimacy of clinical care, where
                  patients rely on professional authority, privacy, and
                  institutional safeguards.
                </>
              }
              sources={[
                {
                  label: "CBS Boston",
                  href: "https://www.cbsnews.com/boston/news/dr-derrick-todd-charges-sexual-assault/",
                },
                {
                  label: "NBC Boston",
                  href: "https://www.nbcboston.com/news/local/da-to-announce-new-developments-in-case-of-ex-brigham-and-womens-doctor-accused-of-sexually-assaulting-patients-watch-at-1/3937175/",
                },
              ]}
            />

            <Subgroup>Education / childcare; institutional oversight failure</Subgroup>
            <CaseRow
              emoji="🧸"
              name="Jan Carlos Berrios-Otero"
              role="Daycare worker at BrightPath Early Learning and Child Care Center"
              jurisdiction="Connecticut"
              stage="Additional charges"
              date="April 29, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting said Berrios-Otero, first arrested April 1, faced
                  additional charges after investigators identified more alleged
                  child victims at the daycare. State child-care and
                  child-protection agencies opened investigations into the
                  facility.
                </>
              }
              whyIncluded={
                <>
                  This is a core childcare-access case. The alleged abuse occurred
                  inside a daycare setting, involved very young children, and now
                  includes institutional questions about supervision, safety
                  practices, and facility accountability.
                </>
              }
              sources={[
                {
                  label: "CT Insider",
                  href: "https://www.ctinsider.com/news/article/avon-day-care-child-sex-assault-berrios-otero-22232363.php",
                },
                {
                  label: "WFSB",
                  href: "https://www.wfsb.com/2026/04/29/former-avon-daycare-worker-due-court-faces-additional-charges/",
                },
              ]}
            />

            <Subgroup>Politics / civic leadership; community leadership</Subgroup>
            <CaseRow
              emoji="🏛️"
              name="Chad-Alan Carr"
              role="Former Gettysburg mayor / former community theater leader"
              jurisdiction="Pennsylvania"
              stage="Additional charges"
              date="April 8–9, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting based on charging documents said Carr faced new
                  felony sexual-assault and child-image-related charges after
                  additional alleged victims came forward.
                </>
              }
              whyIncluded={
                <>
                  This is a public-office and community-leader legitimacy case.
                  Civic trust, social credibility, and community-theater access can
                  function as powerful forms of status and proximity.
                </>
              }
              sources={[
                {
                  label: "Keystone Newsroom",
                  href: "https://keystonenewsroom.com/local/former-gettysburg-mayor-faces-new-felony-charges-of-sexual-assault/",
                },
                {
                  label: "The Gettysburgian",
                  href: "https://gettysburgian.com/2026/04/former-mayor-chad-alan-carr-faces-new-charges/",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>
            <CaseRow
              emoji="🏫"
              name="Heather Mashburn-Smith"
              role="High-school teacher"
              jurisdiction="Florida"
              stage="Arrested / Charged"
              date="April 30, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting citing the Charlotte County Sheriff’s Office said
                  Mashburn-Smith was charged after allegedly engaging in unlawful
                  sexual activity with a 17-year-old student on campus. The charge
                  was enhanced because of her educator role.
                </>
              }
              whyIncluded={
                <>
                  This is a strong educator/student case. The alleged conduct
                  occurred in the school context, and the reported charge
                  enhancement directly reflects the authority and trust attached
                  to the teacher role.
                </>
              }
              sources={[
                {
                  label: "New York Post",
                  href: "https://nypost.com/2026/04/30/us-news/florida-teacher-admits-having-sex-with-underage-student-multiple-times-on-campus-sheriff/",
                },
                {
                  label: "CBS12",
                  href: "https://cbs12.com/news/crisis-in-the-classroom/florida-crime-news-port-charlotte-high-school-female-teacher-charged-having-sex-with-her-student-on-campus-two-times-unlawful-sexual-activity-minor",
                },
              ]}
            />
          </Section>
<Section title="Pleas / Convictions / Sentencings" eyebrow="April 2026 case outcomes">
            <Subgroup>Education / religious school</Subgroup>
            <CaseRow
              emoji="🏫"
              name="Richard Adamsky"
              role="Longtime Catholic grade-school teacher"
              jurisdiction="Pennsylvania"
              stage="Sentenced"
              date="April 14, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors said Adamsky, a 7th- and 8th-grade teacher
                  who had taught at the school for decades, was sentenced to 90
                  months in a child-pornography case.
                </>
              }
              whyIncluded={
                <>
                  The case combines child-exploitation conduct with long-term
                  school trust. The accountability point is the decades-long
                  embedded position in a youth-serving religious-school
                  environment.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Pennsylvania",
                  href: "https://www.justice.gov/usao-edpa/pr/longtime-bucks-county-teacher-sentenced-seven-and-half-years-prison-child-pornography",
                },
                {
                  label: "6abc",
                  href: "https://6abc.com/post/longtime-bucks-county-catholic-school-teacher-richard-adamsky-sentenced-possessing-child-pornography/18890381/",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>
            <CaseRow
              emoji="⛪"
              name="Jonathan Edward Elwing"
              role="Senior pastor, Palmetto-area church"
              jurisdiction="Florida"
              stage="Convicted / Sentenced"
              date="April 21–22, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  A jury convicted Elwing of 12 felony offenses involving child
                  sexual abuse and child-exploitation material. Prosecutors said
                  he was convicted after trial and sentenced to life terms.
                </>
              }
              whyIncluded={
                <>
                  This is a severe religious-authority case involving a senior
                  pastor, child victims, and child-exploitation conduct. It fits
                  SOLAR’s focus on serious harm emerging inside trusted
                  institutions rather than through stranger-danger narratives.
                </>
              }
              sources={[
                {
                  label: "Florida 12th Judicial Circuit State Attorney",
                  href: "https://www.sao12.org/press-release-jonathan-elwing/",
                },
                {
                  label: "Bradenton Herald",
                  href: "https://www.bradenton.com/news/local/crime/article315485129.html",
                },
              ]}
            />

            <Subgroup>Celebrity / public profile; spiritual authority</Subgroup>
            <CaseRow
              emoji="🎬"
              name="Nathan Chasing Horse"
              role="Actor / self-described spiritual leader"
              jurisdiction="Nevada"
              stage="Sentenced"
              date="April 27, 2026"
              registry="Previously registered"
              summary={
                <>
                  Chasing Horse was sentenced to 37 years to life after
                  convictions on 13 felony charges. Prosecutors and AP reported
                  that he misused spiritual-leader status and community trust to
                  target Indigenous women and girls.
                </>
              }
              whyIncluded={
                <>
                  This is a central status and legitimacy case. The pattern is not
                  only public fame; it is misuse of spiritual authority, cultural
                  trust, and public profile to create access and silence.
                </>
              }
              sources={[
                {
                  label: "Clark County DA",
                  href: "https://www.clarkcountynv.gov/adobe/assets/urn%3Aaaid%3Aaem%3Ab328e310-5a42-4029-b246-9fabc19cf031/original/as/Nathan-Chasing-Horse-sentenced.pdf",
                },
                {
                  label: "AP",
                  href: "https://apnews.com/article/bf864d7a775d24f22a49d48a067f37cc",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>
            <CaseRow
              emoji="🏫"
              name="Mark Williams"
              role="Former high-school teacher"
              jurisdiction="District of Columbia"
              stage="Sentenced"
              date="April 17, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Williams was sentenced to 16 years after convictions involving
                  sexual abuse of a secondary-education student and sexual abuse
                  of a minor. DOJ said the case involved grooming and abuse of an
                  underage student.
                </>
              }
              whyIncluded={
                <>
                  This is a direct educator/student authority case. The conviction
                  and sentencing reflect abuse connected to a school trust
                  relationship, with delayed disclosure reinforcing why prevention
                  cannot rely on public registry lookups.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO District of Columbia",
                  href: "https://www.justice.gov/usao-dc/pr/former-high-school-teacher-sentenced-16-years-prison-sexually-abusing-minor-student",
                },
                {
                  label: "NBC Washington",
                  href: "https://www.nbcwashington.com/news/local/ex-teacher-at-dcs-duke-ellington-school-sentenced-to-16-years-after-sex-abuse-conviction/4092356/",
                },
              ]}
            />

            <Subgroup>Education / childcare</Subgroup>
            <CaseRow
              emoji="🧸"
              name="Tony Leroy Bartley Jr."
              role="Former pre-kindergarten teacher"
              jurisdiction="Florida"
              stage="Sentenced"
              date="April 23, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Bartley was sentenced to 10 years for attempting to entice a
                  13-year-old. DOJ said he was working as a pre-K teacher at the
                  time of arrest.
                </>
              }
              whyIncluded={
                <>
                  The pre-K role matters because it placed the defendant in a
                  trusted early-childhood setting. Even though the charged conduct
                  was online, the case fits because a child-facing professional
                  role was present before the offense came to light.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Middle District of Florida",
                  href: "https://www.justice.gov/usao-mdfl/pr/former-pre-kindergarten-teacher-sentenced-10-years-federal-prison-attempting-entice-13",
                },
                {
                  label: "News4JAX",
                  href: "https://www.news4jax.com/news/local/2026/04/23/ponte-vedra-beach-pre-k-teacher-sentenced-to-10-years-in-prison-for-trying-to-entice-13-year-old-child-online/",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>
            <CaseRow
              emoji="🏫"
              name="Anthony Michael Souza"
              role="Former New York City public-school teacher"
              jurisdiction="New York"
              stage="Sentenced"
              date="April 6, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Souza was sentenced to 150 months for receipt and distribution
                  of child pornography. DOJ identified him as a former public-
                  school teacher and said the case involved exploitation of
                  minors, including students.
                </>
              }
              whyIncluded={
                <>
                  DOJ’s framing ties the conduct to classroom legitimacy and
                  minors in the school orbit, making it relevant to trusted
                  systems and failed assumptions about where risk sits.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Southern District of New York",
                  href: "https://www.justice.gov/usao-sdny/pr/former-new-york-city-public-school-teacher-sentenced-150-months-prison-receipt-and",
                },
                {
                  label: "New York Post",
                  href: "https://nypost.com/2026/05/02/us-news/nyc-theater-teacher-sentenced-to-12-5-years-behind-bars-for-child-pornography/",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Jocelyn Sanroman"
              role="Former teacher / tutor"
              jurisdiction="Michigan"
              stage="Sentenced"
              date="April 28–29, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting said Sanroman was sentenced after pleading guilty in a
                  criminal sexual conduct case involving a 16-year-old student she
                  tutored.
                </>
              }
              whyIncluded={
                <>
                  The tutoring relationship created one-on-one trust, access, and
                  a power imbalance beyond a generic acquaintance context.
                </>
              }
              sources={[
                {
                  label: "People",
                  href: "https://people.com/teacher-sentenced-for-disgusting-sex-crimes-against-student-she-tutored-11961177",
                },
                {
                  label: "FOX 2 Detroit",
                  href: "https://www.fox2detroit.com/news/ex-waterford-teacher-sentenced-jail-sex-crimes-against-minor-she-tutored",
                },
              ]}
            />
          </Section>

          <Section title="Civil / Administrative Actions" eyebrow="Formal institutional response">
            <Subgroup>Youth sports / institutional response</Subgroup>
            <CaseRow
              emoji="🧗"
              name="Matthew Maddison / USA Climbing"
              role="National youth-sport staff member / sport governing body"
              jurisdiction="Utah / national organization"
              stage="Administrative leave"
              date="April 28–30, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  After Maddison’s arrest, USA Climbing placed him on unpaid
                  leave, according to reporting.
                </>
              }
              whyIncluded={
                <>
                  The organizational response is part of the accountability story:
                  youth-sport institutions have screening, supervision, reporting,
                  and athlete-safety responsibilities independent of the criminal
                  case.
                </>
              }
              sources={[
                {
                  label: "KSL",
                  href: "https://www.ksl.com/article/51490770/youth-mentor-in-utah-arrested-accused-of-having-child-sex-abuse-material",
                },
                {
                  label: "Climbing",
                  href: "https://www.climbing.com/news/usa-climbing-coach-matthew-maddison-arrested/",
                },
              ]}
            />
          </Section>
<Section title="Institutional Shielding & Findings" eyebrow="Oversight, response, and system failure">
            <Subgroup>Healthcare / institutional oversight failure</Subgroup>
            <CaseRow
              emoji="⚕️"
              name="Derrick Todd / Brigham and Women’s–Faulkner Context"
              role="Former physician / hospital systems"
              jurisdiction="Massachusetts"
              stage="Expanded criminal case plus civil/institutional allegations"
              date="April 21–22, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  The April indictment expansion occurred against a broader
                  backdrop of civil claims and prior allegations involving former
                  patients of a Boston-area rheumatologist.
                </>
              }
              whyIncluded={
                <>
                  This belongs in the institutional lane because the alleged
                  misconduct occurred under medical authority and raises questions
                  about patient complaints, hospital oversight, professional
                  discipline, and how long alleged patterns can persist inside
                  trusted systems.
                </>
              }
              sources={[
                {
                  label: "CBS Boston",
                  href: "https://www.cbsnews.com/boston/news/dr-derrick-todd-charges-sexual-assault/",
                },
                {
                  label: "Boston.com",
                  href: "https://www.boston.com/news/crime/2026/04/21/former-brigham-and-womens-doctor-indicted-on-81-new-sexual-assault-charges/",
                },
                {
                  label: "NBC Boston",
                  href: "https://www.nbcboston.com/news/local/da-to-announce-new-developments-in-case-of-ex-brigham-and-womens-doctor-accused-of-sexually-assaulting-patients-watch-at-1/3937175/",
                },
              ]}
            />

            <Subgroup>Childcare / institutional oversight failure</Subgroup>
            <CaseRow
              emoji="🧸"
              name="BrightPath Avon / Jan Carlos Berrios-Otero Context"
              role="Daycare facility and child-care oversight"
              jurisdiction="Connecticut"
              stage="Facility closure / agency investigations"
              date="April 29–30, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Reporting said BrightPath planned to close the Avon daycare
                  after charges expanded, while state child-care and
                  child-protection agencies investigated facility practices.
                </>
              }
              whyIncluded={
                <>
                  The institutional concern is concrete: alleged abuse inside a
                  daycare, additional children identified by investigators, state
                  agency review, facility closure, and family questions about
                  supervision and accountability.
                </>
              }
              sources={[
                {
                  label: "CT Insider — additional charges",
                  href: "https://www.ctinsider.com/news/article/avon-day-care-child-sex-assault-berrios-otero-22232363.php",
                },
                {
                  label: "CT Insider — closure scrutiny",
                  href: "https://www.ctinsider.com/news/article/brightpath-avon-sex-assault-closure-scrutiny-22235599.php",
                },
              ]}
            />
          </Section>

          <Section title="Monitoring Items / Watchlist" eyebrow="Follow-up developments to track">
            <div className="space-y-4 text-[15px] leading-7 text-slate-800">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">Jeffrey Wilson / FCI Dublin</h3>
                <p>
                  <span className="font-bold">Status:</span> Strong May inclusion,
                  but sentencing fell on May 1, just outside the April search window.
                </p>
                <p>
                  <span className="font-bold">Reason to monitor:</span>{" "}
                  Correctional authority, institutional pattern, and broader FCI
                  Dublin accountability context.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">Christopher Wooten</h3>
                <p>
                  <span className="font-bold">Status:</span> Likely May education
                  or youth-sports inclusion; arrest appears to fall on May 1.
                </p>
                <p>
                  <span className="font-bold">Reason to monitor:</span>{" "}
                  Teacher/coach access and student-involved allegations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">Patrick Cacho</h3>
                <p>
                  <span className="font-bold">Status:</span> Hold pending official
                  verification.
                </p>
                <p>
                  <span className="font-bold">Reason to monitor:</span>{" "}
                  Reporting described an on-duty officer allegation. The
                  authority-access logic is strong if confirmed through an Illinois
                  State Police, prosecutor, court, or agency source.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">Marsel Javaris Smith</h3>
                <p>
                  <span className="font-bold">Status:</span> Hold pending stronger
                  source.
                </p>
                <p>
                  <span className="font-bold">Reason to monitor:</span>{" "}
                  Substitute-teacher/student access case if verified by court,
                  police, school-district, or prosecutor materials.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-black text-slate-950">
                  BrightPath Avon / Berrios-Otero
                </h3>
                <p>
                  <span className="font-bold">Status:</span> Continue monitoring.
                </p>
                <p>
                  <span className="font-bold">Reason to monitor:</span>{" "}
                  Possible state agency findings, civil filings, licensing action,
                  or documentation about supervision failures.
                </p>
              </div>
            </div>
          </Section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:p-7">
            <h2 className="mb-3 text-xl font-black text-slate-950">
              Legal and registry note
            </h2>
            <p>
              Arrests, charges, indictments, civil allegations, administrative
              actions, and investigative findings are not convictions. Defendants
              are presumed innocent unless and until proven guilty in court. Civil,
              institutional, and administrative developments should be read
              according to their own legal posture and source language.
            </p>
            <p className="mt-3">
              Registry-status notes are limited to reviewed public source
              material. Under the current series display convention, “Registry
              status not mentioned” is displayed as “Registry: No prior
              registration noted” to preserve the prevention-policy frame without
              inventing registry history. A “No prior registration noted” display
              does not represent an independent registry-history finding beyond the
              cited public materials.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}