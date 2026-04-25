// src/pages/resources/accountability-watch/2026-01-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Superseding indictment"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil lawsuit filed"
  | "Source-limited / monitor"
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
  date: string;
  jurisdiction: string;
  stage: Stage;
  registry: RegistryStatus;
  summary: React.ReactNode;
  whyIncluded: React.ReactNode;
  sources: SourceLink[];
  marker?: string;
};

export const teaserHighlights = [
  {
    title: "Trusted access dominated the month",
    text: "The strongest December pattern ran through schools, youth sports, churches, law-enforcement agencies, corrections settings, healthcare, and military institutions — places where public trust can create proximity before formal accountability begins.",
  },
  {
    title: "Status also functioned as access",
    text: "Several cases were not traditional school, clergy, or public-safety cases. They turned on finance prestige, celebrity, entertainment power, career leverage, public profile, or elite social legitimacy.",
  },
  {
    title: "Procedure varied, the access pattern did not",
    text: "The set includes arrests, indictments, superseding indictments, guilty pleas, convictions, sentencing events, and one civil action, but the recurring frame is authority, trust, custody, professional legitimacy, or influence.",
  },
  {
    title: "Some items remain source-limited",
    text: "A separate monitoring section preserves high-relevance cases that fit the access framework but still need stronger official records or cleaner contemporaneous sourcing before being treated as fully confirmed monthly entries.",
  },
];

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
    "Civil lawsuit filed": "border-sky-300 bg-sky-50 text-sky-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Superseding indictment": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
    "Source-limited / monitor": "border-amber-300 bg-amber-50 text-amber-900",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
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
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
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
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950 sm:p-5">
      <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-800">
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
  date,
  jurisdiction,
  stage,
  registry,
  summary,
  whyIncluded,
  sources,
  marker,
}: CaseRowProps) {
  return (
    <article className="mb-5 rounded-2xl border border-slate-300/80 bg-slate-50/80 p-4 shadow-md shadow-slate-200/60 last:mb-0 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            {marker && <span className="text-xl">{marker}</span>}
            <h3 className="text-lg font-black text-slate-950">{name}</h3>
          </div>
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

      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-800">
        <p>{summary}</p>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <span className="font-black text-slate-950">Why included: </span>
          {whyIncluded}
        </div>
      </div>

      {sources.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <a
              key={`${name}-${source.href}`}
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

export default function AccountabilityWatch20260101() {
  const pageTitle = "Accountability Watch — December 2025 Roundup | SOLAR";
  const pageDescription =
    "December 2025 Accountability Watch roundup documenting cases involving authority, trust, role-based access, institutional legitimacy, status-based influence, and public accountability.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge icon={<Shield className="h-4 w-4" />}>
                Accountability Watch
              </Badge>
              <Badge icon={<FileText className="h-4 w-4" />}>
                December 2025 roundup
              </Badge>
              <Badge icon={<Info className="h-4 w-4" />}>
                Authority, access, and status
              </Badge>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Accountability Watch — December 2025 Roundup
            </h1>

            <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-slate-200">
              <p>
                December’s cases belong together because they show the same
                prevention gap from different angles: trusted adults,
                high-legitimacy roles, and status-linked access creating
                proximity, credibility, or leverage before criminal charges,
                civil litigation, or institutional scrutiny surfaced the risk.
              </p>
              <p>
                The pattern is about more than individual misconduct. It is
                about authority, legitimacy, public trust, wealth, celebrity,
                professional status, and institutional proximity — the
                conditions that can allow risk to sit inside classrooms, youth
                programs, churches, public-safety agencies, medical settings,
                military systems, and elite social spaces.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-slate-100">
              <p className="font-black uppercase tracking-[0.18em] text-slate-300">
                Search window
              </p>
              <p className="mt-2">
                December 1, 2025, 12:00 AM through December 31, 2025,
                11:59 PM, America/New_York. This rebuilt page uses the
                approved December 2025 case set as locked input.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar
            title="Accountability Watch — December 2025 Roundup"
            text="December 2025 Accountability Watch roundup from The SOLAR Project."
          />

          <Section title="At a Glance" eyebrow="What the month shows">
            <div className="space-y-5 text-sm leading-7 text-slate-800">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <p>
                  December’s through-line is trusted access and public
                  legitimacy. The approved cases cluster around roles that gave
                  adults credibility, proximity, privacy, institutional trust,
                  or social leverage: teachers, coaches, police and corrections
                  officers, clergy, a military physician, a judge, a finance
                  executive, entertainment figures, and other high-status
                  public-facing roles.
                </p>
                <p className="mt-3">
                  The month also widens the frame beyond formal child-facing
                  authority. Finance prestige, celebrity, entertainment power,
                  career leverage, and elite social access can operate as
                  access mechanisms too — not because status itself proves
                  wrongdoing, but because status can shape opportunity,
                  credibility, pressure, and delayed reporting.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <h3 className="text-sm font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <PullQuote>
                <p>
                  December was not a random collection of incidents. The cases
                  repeatedly point to the same public-safety lesson: prevention
                  fails when communities focus only on outside threats while
                  overlooking authority, custody, professional legitimacy,
                  institutional access, and status-based power already inside
                  trusted spaces.
                </p>
              </PullQuote>
            </div>
          </Section>

          <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
            <Subgroup>Youth sports / youth groups</Subgroup>

            <CaseRow
              marker="🏐"
              name="Elias David"
              role="Youth volleyball coach; reported also as Department of Defense firefighter"
              date="Dec. 3–5, 2025"
              jurisdiction="Hawaii / federal"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Federal prosecutors charged David in a minor-exploitation case
                  involving a student connected to his volleyball coaching role.
                  The alleged access point was not anonymous contact; it was a
                  youth-sports relationship that gave him credibility and
                  proximity.
                </>
              }
              whyIncluded={
                <>
                  This is a direct role-access case. Youth coaching creates
                  trust, repeated contact, and adult authority around minors,
                  which is exactly the kind of embedded access Accountability
                  Watch is designed to track.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Hawaii",
                  href: "https://www.justice.gov/usao-hi/pr/waimanalo-man-charged-producing-child-pornography-his-minor-volleyball-student",
                },
              ]}
            />

            <Subgroup>Law enforcement / corrections</Subgroup>

            <CaseRow
              marker="🛡️"
              name="Isaac Nielsen"
              role="Roanoke Rapids Police Department officer"
              date="Dec. 1–5, 2025"
              jurisdiction="North Carolina / federal"
              stage="Arrested / Charged"
              registry="Registry status not mentioned"
              summary={
                <>
                  Nielsen, then employed as a police officer, was arrested and
                  charged in a federal child-exploitation-material case. The
                  allegation was not framed as an on-duty offense, but the public
                  role matters because police officers hold state-backed
                  authority and community trust.
                </>
              }
              whyIncluded={
                <>
                  Law-enforcement authority is a legitimacy mechanism. When a
                  sworn officer is accused in a child-safety case, the public
                  trust attached to the badge is part of the accountability
                  concern even when the charged conduct is not alleged to have
                  occurred during a police call.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of North Carolina",
                  href: "https://www.justice.gov/usao-ednc/pr/roanoke-rapids-police-officer-arrested-and-charged-child-exploitation-offenses",
                },
              ]}
            />

            <CaseRow
              marker="🛡️"
              name="Amber Nicole Ferguson"
              role="Former Athens-Clarke County police officer"
              date="Dec. 9, 2025"
              jurisdiction="Georgia / federal"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Ferguson, identified by prosecutors as a former police
                  officer, was indicted in a federal child-exploitation case.
                  The public-trust dimension comes from the law-enforcement role
                  and the responsibility that role carries.
                </>
              }
              whyIncluded={
                <>
                  The case fits the accountability frame because police service
                  confers credibility and public authority. The concern is not
                  only the alleged offense category, but the contrast between
                  public-safety responsibility and the conduct charged.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Northern District of Georgia",
                  href: "https://www.justice.gov/usao-ndga/pr/former-athens-clarke-county-police-officer-charged-child-exploitation-and-bestiality",
                },
              ]}
            />

            <CaseRow
              marker="🛡️"
              name="Myles S. Schumaker"
              role="Middleton Police Department patrol officer"
              date="Dec. 16–19, 2025"
              jurisdiction="Wisconsin / federal"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Schumaker, a patrol officer, was indicted in a federal
                  minor-enticement case. The approved sources identify the
                  charged conduct and his public-safety role, making the case
                  relevant to law-enforcement legitimacy and trust.
                </>
              }
              whyIncluded={
                <>
                  Police work carries institutional authority, access to
                  community trust, and a public claim to protection. Those
                  features make the case relevant even without a source-supported
                  allegation that the charged conduct used an on-duty encounter.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Wisconsin",
                  href: "https://www.justice.gov/usao-edwi/pr/middleton-police-officer-indicted-federal-child-sex-offense",
                },
              ]}
            />

            <CaseRow
              marker="🛡️"
              name="Karl Eugene Leslie"
              role="White Mountain Apache Tribal Police officer"
              date="Dec. 23, 2025"
              jurisdiction="Arizona / federal / Fort Apache Indian Reservation"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Leslie was indicted in an alleged on-duty abuse-of-authority
                  case involving multiple complainants. The approved DOJ source
                  identifies the Dec. 23 indictment and frames the case around
                  alleged misconduct while acting as a tribal police officer.
                </>
              }
              whyIncluded={
                <>
                  This is a high-value authority-abuse case. The access
                  mechanism was not merely personal familiarity; it was alleged
                  power under color of law, where badge authority and public
                  safety responsibility are central to the misconduct alleged.
                </>
              }
              sources={[
               {
                  label: "DOJ / USAO Arizona",
                  href: "https://www.justice.gov/usao-az/pr/tribal-police-officer-charged-sexually-abusing-three-victims-while-duty-fbi-seeks-0",
                },
              ]}
            />

            <CaseRow
              marker="🛡️"
              name="Sebastian Flores-Huamani"
              role="Atlantic County Justice Facility corrections officer"
              date="Dec. 2, 2025"
              jurisdiction="New Jersey / county"
              stage="Arrested / Charged"
              registry="Registry status not mentioned"
              summary={
                <>
                  Flores-Huamani was charged with alleged misconduct involving
                  an incarcerated person while serving as a corrections officer.
                  The case turns on custodial authority: one person controlled a
                  detention setting while the other was in custody.
                </>
              }
              whyIncluded={
                <>
                  Corrections settings create acute power imbalances. When the
                  accused is a facility officer and the complainant is
                  incarcerated, custody itself becomes the access mechanism and
                  the institutional accountability issue.
                </>
              }
              sources={[
                {
                  label: "Atlantic County Prosecutor",
                  href: "https://assets.opspolice.network/resources/agency/182/pdf/20251203-pJb9nNxY6UJbo8AX.pdf",
                },
                {
                  label: "NBC Philadelphia",
                  href: "https://www.nbcphiladelphia.com/news/local/atlantic-county-corrections-officer-charged-sexual-assault-inmate/4047250/",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              marker="⛪"
              name="Joseph Lyle Campbell"
              role="Former youth pastor at Eastland Assembly of God Church"
              date="Dec. 17, 2025"
              jurisdiction="Oklahoma / state"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Campbell, a former youth pastor, was indicted in a historical
                  abuse case tied to his church youth role. The timing of
                  accountability is part of the story: the allegation surfaced
                  formally long after the period in which religious authority
                  and youth access allegedly mattered.
                </>
              }
              whyIncluded={
                <>
                  Youth ministry can combine spiritual credibility, family
                  trust, and unsupervised access. The case fits because the
                  alleged harm was connected to a role that placed an adult in a
                  trusted position around young people.
                </>
              }
              sources={[
                {
                  label: "U.S. Marshals",
                  href: "https://www.usmarshals.gov/news/press-release/us-marshals-arrest-pastor-accused-of-raping-and-molesting-underage-girls-1970s-0",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>

            <CaseRow
              marker="🏫"
              name="Martin Daryl Waskowski"
              role="Elementary school teacher"
              date="Dec. 19, 2025"
              jurisdiction="Michigan / federal"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Waskowski, identified by prosecutors as an elementary school
                  teacher, was charged in a federal child-exploitation-material
                  case after a border search and follow-up investigation. His
                  school role is relevant because elementary educators hold
                  trusted access to children.
                </>
              }
              whyIncluded={
                <>
                  Schools confer legitimacy and routine proximity. Even where
                  the charged conduct is investigated outside the classroom, an
                  elementary teaching role is a public-trust position that
                  belongs in a prevention-focused accountability review.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Michigan",
                  href: "https://www.justice.gov/usao-edmi/pr/elementary-school-teacher-charged-sexual-exploitation-minor-and-possession-and",
                },
              ]}
            />

            <CaseRow
              marker="🏫"
              name="Dennis Adlai Hernandez"
              role="Former elementary school teacher and former school-district employee"
              date="Dec. 10–11, 2025"
              jurisdiction="Missouri / federal"
              stage="Superseding indictment"
              registry="Registry status not mentioned"
              summary={
                <>
                  Hernandez, identified as a former elementary school teacher
                  and district employee, was charged in a superseding indictment
                  adding federal counts in a child-exploitation-material case
                  involving multiple alleged minor victims.
                </>
              }
              whyIncluded={
                <>
                  The case fits the school-trust pattern because the approved
                  source connects the accused to elementary education and a
                  district role. That institutional background matters when
                  assessing how adults gain credibility and proximity around
                  children.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Missouri",
                  href: "https://www.justice.gov/usao-wdmo/pr/former-elementary-school-teacher-charged-child-pornography-offenses",
                },
              ]}
            />

            <CaseRow
              marker="🏫"
              name="Katherine Albarado"
              role="Former St. Mary Parish high school teacher"
              date="Dec. 17, 2025"
              jurisdiction="Louisiana / federal"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Albarado, a former high school teacher, was indicted in a
                  federal student-enticement case. The DOJ release was published
                  after the month closed, but the approved source identifies the
                  indictment date as Dec. 17, 2025.
                </>
              }
              whyIncluded={
                <>
                  This is a direct teacher-student authority case. The relevant
                  access mechanism is school-based trust: a teacher role can
                  create credibility, repeated contact, and unequal power before
                  any formal warning system becomes relevant.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Louisiana",
                  href: "https://www.justice.gov/usao-wdla/pr/former-st-mary-parish-teacher-indicted-attempting-entice-one-her-students-engage",
                },
              ]}
            />

            <CaseRow
              marker="🏫"
              name="Ciara Picard"
              role="Former Maloney High School music teacher"
              date="Dec. 2–10, 2025"
              jurisdiction="Connecticut / local"
              stage="Arrested / Charged"
              registry="Registry status not mentioned"
              summary={
                <>
                  Picard, a former high school music teacher, was reported
                  charged in connection with alleged misconduct involving a
                  former student. The approved support is local media rather
                  than an official release, but the alleged access frame is
                  teacher-student authority.
                </>
              }
              whyIncluded={
                <>
                  Teacher-student cases are central to the Accountability Watch
                  lens because school roles carry trust, status, and access.
                  This entry remains notable because the alleged relationship to
                  the student is the accountability issue, even though the source
                  path is media-led.
                </>
              }
              sources={[
                {
                  label: "WFSB",
                  href: "https://www.wfsb.com/2025/12/09/former-maloney-high-school-teacher-charged-after-alleged-inappropriate-relationship-with-student/",
                },
              ]}
            />

            <Subgroup>Education / youth sports</Subgroup>

            <CaseRow
              marker="🏫"
              name="Scott M. Jeffers"
              role="Johnstown High School teacher and coach"
              date="Dec. 11, 2025"
              jurisdiction="New York / state"
              stage="Arrested / Charged"
              registry="Registry status not mentioned"
              summary={
                <>
                  Jeffers, a high school teacher and coach, was arrested after
                  allegations involving inappropriate communications with a
                  student. New York State Police noted that his coaching roles
                  gave him added access to students.
                </>
              }
              whyIncluded={
                <>
                  This case combines two access channels: classroom authority
                  and youth-sports proximity. The official source’s reference to
                  role-based access makes it a clear example of why prevention
                  must examine trusted positions, not only outside threats.
                </>
              }
              sources={[
                {
                  label: "New York State Police",
                  href: "https://troopers.ny.gov/news/state-police-arrest-johnstown-high-school-teacher-following-investigation",
                },
              ]}
            />

            <Subgroup>Politics / civic leadership</Subgroup>

            <CaseRow
              marker="⚖️"
              name="Marvin Douglas Rotenberry"
              role="Municipal court judge for Hitchcock, Santa Fe, and Bayou Vista"
              date="Dec. 2, 2025"
              jurisdiction="Texas / local"
              stage="Arrested / Charged"
              registry="Registry status not mentioned"
              summary={
                <>
                  Rotenberry, a municipal court judge, was charged in a
                  historical child-abuse case. The approved source is local
                  media, but the public office is a high-trust civic role that
                  makes the case relevant to public accountability.
                </>
              }
              whyIncluded={
                <>
                  Judicial office carries public legitimacy and moral authority.
                  Even when allegations concern historical conduct, a sitting or
                  recent public role can shape community trust and the public’s
                  interest in accountability.
                </>
              }
              sources={[
                {
                  label: "KPRC / Click2Houston",
                  href: "https://www.click2houston.com/news/local/2025/12/03/galveston-county-municipal-court-judge-charged-with-sexually-assaulting-two-children/",
                },
              ]}
            />

            <Subgroup>Healthcare / military institution</Subgroup>

            <CaseRow
              marker="🏥"
              name="Blaine McGraw"
              role="U.S. Army OB-GYN at Fort Hood / Carl R. Darnall Army Medical Center"
              date="Dec. 9–12, 2025"
              jurisdiction="Texas / military"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  McGraw, an Army physician, was formally charged in a
                  patient-privacy and professional-misconduct case involving
                  numerous alleged victims. The approved sources place the case
                  inside a military medical setting where patients depended on
                  professional authority and institutional safeguards.
                </>
              }
              whyIncluded={
                <>
                  Medical care creates vulnerability, privacy, and dependence on
                  professional judgment. The military setting adds institutional
                  power and raises broader oversight questions about whether
                  safeguards were adequate before formal charges arrived.
                </>
              }
              sources={[
                {
                  label: "Austin American-Statesman",
                  href: "https://www.statesman.com/news/crime/article/fort-hood-texas-army-obgyn-sexual-criminal-charge-21234978.php",
                },
              ]}
            />

            <Subgroup>Finance / executive status</Subgroup>

            <CaseRow
              marker="🏦"
              name="Edward Gene Smith"
              role="Former senior bank executive / former Citi managing director"
              date="Dec. 23, 2025"
              jurisdiction="New York / federal"
              stage="Superseding indictment"
              registry="Registry status not mentioned"
              summary={
                <>
                  Smith, identified by prosecutors as a former senior bank
                  executive, was charged in a superseding federal indictment
                  involving alleged exploitation offenses and obstruction. The
                  DOJ release alleged that money, access, and influence were
                  part of the conduct charged.
                </>
              }
              whyIncluded={
                <>
                  This is a status-access case. Finance prestige, wealth, and
                  community influence can create access and intimidation without
                  a traditional child-facing title, which is why the case
                  belongs in the broader Accountability Watch frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Southern District of New York",
                  href: "https://www.justice.gov/usao-sdny/pr/former-bank-executive-edward-gene-smith-charged-committing-multiple-sex-crimes-child",
                },
              ]}
            />

            <Subgroup>Celebrity / media figure status</Subgroup>

            <CaseRow
              marker="🎙️"
              name="Russell Brand"
              role="Comedian, actor, media figure / podcaster"
              date="Dec. 23, 2025"
              jurisdiction="United Kingdom"
              stage="Charged / Indicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  The Crown Prosecution Service authorized two additional
                  charges involving two additional women in an existing criminal
                  case. Brand denies the allegations. The December event was a
                  new charging decision, not simply renewed media coverage.
                </>
              }
              whyIncluded={
                <>
                  Celebrity and media status can function as access, influence,
                  and credibility. This entry is included because the approved
                  charging decision concerns a public-profile figure whose
                  social power is part of the accountability context.
                </>
              }
              sources={[
                {
                  label: "Crown Prosecution Service",
                  href: "https://www.cps.gov.uk/london-south/news/cps-authorises-further-charges-against-russell-brand",
                },
              ]}
            />
          </Section>

          <Section
            title="Pleas / Convictions / Sentencings"
            eyebrow="Adjudication and sentencing"
          >
            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              marker="⛪"
              name="Jacob Ryan Barnett"
              role="Former youth pastor"
              date="Dec. 10, 2025"
              jurisdiction="Virginia / federal"
              stage="Guilty plea"
              registry="Registry status not mentioned"
              summary={
                <>
                  Barnett, a former youth pastor, pleaded guilty in a federal
                  child-exploitation case involving online contact with a minor.
                  The plea resolves a criminal procedure step while preserving
                  the broader issue of religious youth leadership and trust.
                </>
              }
              whyIncluded={
                <>
                  Youth ministry places adults in roles of spiritual credibility
                  and community confidence. The case is relevant because the
                  public-safety concern is tied to trusted religious identity,
                  even where the conduct was not limited to a church building.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Virginia",
                  href: "https://www.justice.gov/usao-wdva/pr/former-youth-pastor-pleads-guilty-attempted-sexual-exploitation-child",
                },
              ]}
            />

            <CaseRow
              marker="⛪"
              name="Hunter Chase Eubanks"
              role="Former church worship leader and church music internship leader"
              date="Dec. 12, 2025"
              jurisdiction="Florida / federal"
              stage="Sentenced"
              registry="Registry status not mentioned"
              summary={
                <>
                  Eubanks, a former church worship leader and music internship
                  leader, was sentenced in a federal child-exploitation case
                  involving a minor connected to the church setting.
                </>
              }
              whyIncluded={
                <>
                  The case illustrates how church leadership can create youth
                  access through ministry, mentorship, and program participation.
                  That mix of religious legitimacy and youth-facing opportunity
                  is central to Accountability Watch’s prevention frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Northern District of Florida",
                  href: "https://www.justice.gov/usao-ndfl/pr/former-tallahassee-church-worship-leader-sentenced-17-years-federal-prison-sexual",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>

            <CaseRow
              marker="🏫"
              name="Aaron Anderson"
              role="Former McCreary County High School assistant principal"
              date="Dec. 19, 2025"
              jurisdiction="Kentucky / federal"
              stage="Sentenced"
              registry="Registry status not mentioned"
              summary={
                <>
                  Anderson, a former high school assistant principal, was
                  sentenced in a federal minor-enticement case involving school
                  technology and school authority. The adjudicated conduct was
                  linked to tools and credibility that came from an education
                  role.
                </>
              }
              whyIncluded={
                <>
                  School administrators hold power beyond ordinary classroom
                  contact: discipline, access to systems, student trust, and
                  institutional standing. This case shows how authority and
                  school-issued resources can become part of the risk pathway.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Kentucky",
                  href: "https://www.justice.gov/usao-edky/pr/former-mccreary-county-assistant-principal-sentenced-attempted-online-enticement-minor",
                },
              ]}
            />

            <CaseRow
              marker="🏫"
              name="John Magee Gavin"
              role="Former Boston science teacher"
              date="Dec. 11, 2025"
              jurisdiction="Massachusetts / federal"
              stage="Guilty plea"
              registry="Registry status not mentioned"
              summary={
                <>
                  Gavin, a former Boston science teacher, pleaded guilty in a
                  federal child-exploitation case involving online contact with
                  minors. The in-window plea connects an adjudicated step to a
                  former educator with youth-facing trust.
                </>
              }
              whyIncluded={
                <>
                  Educator status matters because schools grant credibility and
                  normalize adult access to young people. The case belongs here
                  because the accountability frame is not just the plea, but the
                  trusted role attached to the defendant.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Massachusetts",
                  href: "https://www.justice.gov/usao-ma/pr/former-boston-teacher-pleads-guilty-child-exploitation",
                },
              ]}
            />

            <Subgroup>Law enforcement / corrections</Subgroup>

            <CaseRow
              marker="🛡️"
              name="Dariel Javier Quiles-Davila"
              role="Former Kissimmee Police Department officer"
              date="Dec. 22, 2025"
              jurisdiction="Florida / federal"
              stage="Sentenced"
              registry="Registry status not mentioned"
              summary={
                <>
                  Quiles-Davila, a former police officer, was sentenced in a
                  federal child-exploitation-material case. Prosecutors said he
                  first encountered the minor while on duty, tying the case to
                  police access as well as later private contact.
                </>
              }
              whyIncluded={
                <>
                  This is a direct on-duty-access case. A police encounter can
                  carry authority, perceived safety, and unequal power; when
                  that encounter becomes the starting point for exploitation,
                  the badge itself is part of the accountability story.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Middle District of Florida",
                  href: "https://www.justice.gov/usao-mdfl/pr/former-kissimmee-police-officer-sentenced-seven-years-federal-prison-receiving-child",
                },
              ]}
            />

            <Subgroup>Youth sports / education</Subgroup>

            <CaseRow
              marker="🤼"
              name="Stephen James Lemelin"
              role="Former high school wrestling coach"
              date="Dec. 3–4, 2025"
              jurisdiction="Massachusetts / federal"
              stage="Convicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Lemelin, a former high school wrestling coach, was convicted
                  of attempting to send illegal obscene material to a minor. The
                  December conviction was the in-window adjudication event, with
                  sentencing occurring later.
                </>
              }
              whyIncluded={
                <>
                  Youth coaching is a trusted role built on mentorship,
                  discipline, and repeated access. Even where the adjudicated
                  conduct occurred outside ordinary practice settings, the
                  coaching identity is relevant to the public-trust frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Massachusetts",
                  href: "https://www.justice.gov/usao-ma/pr/former-high-school-wrestling-coach-convicted-attempting-send-obscene-material-minor",
                },
              ]}
            />

            <Subgroup>Youth sports / youth groups</Subgroup>

            <CaseRow
              marker="📣"
              name="Erick Joseph Kristianson"
              role="Former competitive cheerleading coach, assistant high-school cheer coach, and YMCA camp counselor"
              date="Dec. 16, 2025"
              jurisdiction="California / state"
              stage="Convicted"
              registry="Registry status not mentioned"
              summary={
                <>
                  Kristianson was convicted of multiple felony abuse counts
                  connected to youth sports and camp access. The approved source
                  identifies several trusted child-facing roles, including
                  competitive cheer coaching, school cheer coaching, and YMCA
                  camp work.
                </>
              }
              whyIncluded={
                <>
                  This case sits squarely inside the youth-access pattern:
                  multiple roles created repeated proximity to children across
                  sports, school-adjacent activity, and youth programming. It
                  shows why prevention must look at role-based opportunity, not
                  only formal criminal history.
                </>
              }
              sources={[
                {
                  label: "Orange County District Attorney",
                  href: "https://orangecountyda.org/press/former-orange-county-cheerleading-coach-convicted-of-23-felony-counts-for-molesting-ten-young-girls-erick-kristianson-is-also-charged-in-florida-with-exposing-himself-to-three-young-athletes-he-coache/",
                },
              ]}
            />
          </Section>

          <Section
            title="Civil / Administrative Actions"
            eyebrow="Civil accountability"
          >
            <Subgroup>Celebrity / entertainment power</Subgroup>

            <CaseRow
              marker="🎬"
              name="Tyler Perry"
              role="Filmmaker, studio founder, billionaire entertainment figure"
              date="Dec. 25–26, 2025"
              jurisdiction="California / civil"
              stage="Civil lawsuit filed"
              registry="Registry status not mentioned"
              summary={
                <>
                  Actor Mario Rodriguez filed a civil misconduct lawsuit
                  alleging Perry leveraged Hollywood power and access to acting
                  opportunities. Perry denies the allegations. The December
                  event is a civil filing, not a criminal charge.
                </>
              }
              whyIncluded={
                <>
                  This is a status-and-career-access case. The accountability
                  frame is entertainment-industry power: wealth, professional
                  gatekeeping, career opportunity, and public influence can all
                  shape whether people feel able to resist, report, or be
                  believed.
                </>
              }
              sources={[
                {
                  label: "Associated Press",
                  href: "https://apnews.com/article/tyler-perry-sexual-assault-lawsuit-actor-6da2f1833b43fd4192cdac52dc7c3c63",
                },
              ]}
            />
          </Section>

          <Section
            title="Institutional Shielding & Findings"
            eyebrow="No standalone December finding section"
          >
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-800 sm:p-5">
              <p>
                The approved December set does not include a separate attorney
                general report, investigative finding, consent decree, or
                institutional-shielding item requiring its own case row in this
                section. Institutional accountability still appears throughout
                the month through role-based access, custodial power, military
                medical oversight questions, school authority, and status-based
                influence.
              </p>
            </div>
          </Section>

          <Section
            title="Watchlist / Monitoring Items"
            eyebrow="Source-limited items and follow-up"
          >
            <p className="mb-5 text-sm leading-7 text-slate-700">
              These items preserve the approved December monitoring set. Some
              are full watchlist follow-ups from included cases; others are
              source-limited or timing-limited cases that fit the
              authority/access framework but need stronger official records,
              cleaner contemporaneous support, or later procedural updates.
            </p>

            <Subgroup>Case follow-up</Subgroup>

            <div className="space-y-3 text-sm leading-7 text-slate-800">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Blaine McGraw / Fort Hood OB-GYN:
                </span>{" "}
                Monitor Army charging documents, preliminary-hearing materials,
                victim count, civil filings, congressional or inspector-general
                activity, and any institutional findings about missed warnings
                or lack of safeguards.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Karl Eugene Leslie / tribal police officer:
                </span>{" "}
                Monitor arraignment, additional-complainant disclosures, FBI
                victim-information updates, and tribal/federal institutional
                response.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Edward Gene Smith / former bank executive:
                </span>{" "}
                Monitor further proceedings and reporting on
                financial-institution oversight, community influence, money,
                access, and control mechanisms.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Tyler Perry / Mario Rodriguez civil case:
                </span>{" "}
                Monitor motions, venue issues, industry response,
                Lionsgate-related claims, and whether the court narrows or
                sustains the claims.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Russell Brand:
                </span>{" "}
                Monitor CPS and court proceedings, plea posture, trial
                scheduling, and any further charging or court actions.
              </div>
            </div>

            <Subgroup>Source-limited / monitor before full inclusion</Subgroup>

            <CaseRow
              marker="🏫"
              name="Edwardo Cantu"
              role="McCollum High School teacher"
              date="Dec. 2–3, 2025"
              jurisdiction="Texas / local"
              stage="Source-limited / monitor"
              registry="Registry status not mentioned"
              summary={
                <>
                  Cantu, a high school teacher, was reported arrested after a
                  student alleged classroom misconduct. The authority/access
                  logic is strong, but the approved source path remains local
                  media rather than an official police, prosecutor, or court
                  record.
                </>
              }
              whyIncluded={
                <>
                  The case fits the teacher-student access pattern, but it is
                  held in monitoring status because stronger official sourcing
                  would be needed before treating it as a fully supported
                  December entry.
                </>
              }
              sources={[
                {
                  label: "San Antonio Express-News",
                  href: "https://www.expressnews.com/news/article/san-antonio-teacher-arrested-faces-sexual-21219607.php",
                },
              ]}
            />

            <CaseRow
              marker="🏫"
              name="Sydnee Graf"
              role="Jefferson County elementary teacher"
              date="Dec. 16, 2025"
              jurisdiction="Kentucky / local"
              stage="Source-limited / monitor"
              registry="Registry status not mentioned"
              summary={
                <>
                  Graf, an elementary teacher, was reported charged over alleged
                  inappropriate communications with an elementary student. The
                  case fits the school-access frame, but the approved support is
                  local-media-led.
                </>
              }
              whyIncluded={
                <>
                  Elementary teaching is a high-trust access role. The case
                  remains in the monitoring section because the precise charge
                  and official record path should be strengthened before full
                  inclusion.
                </>
              }
              sources={[
                {
                  label: "WAVE",
                  href: "https://www.wave3.com/2025/12/16/jcps-elementary-teacher-charged-with-having-sexual-conversation-with-student/",
                },
              ]}
            />

            <CaseRow
              marker="🏃"
              name="Miguel Ángel García-López"
              role="Former track-and-field coach"
              date="Arrested Dec. 12, 2025; superseding indictment later"
              jurisdiction="Puerto Rico / federal"
              stage="Source-limited / monitor"
              registry="Registry status not mentioned"
              summary={
                <>
                  García-López, a former track-and-field coach, was charged in a
                  federal child-exploitation case. The December arrest is
                  in-window, but the strongest approved DOJ source is a later
                  superseding-indictment release.
                </>
              }
              whyIncluded={
                <>
                  The youth-sports access mechanism is clear, but the sourcing
                  posture is not as clean as the fully included December cases.
                  Monitoring should focus on whether a contemporaneous December
                  record or earlier official source becomes available.
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
              marker="🏠"
              name="Maxwell Mandell"
              role="Babysitter"
              date="Arrested in December 2025; trial later set"
              jurisdiction="Virginia / local"
              stage="Source-limited / monitor"
              registry="Registry status not mentioned"
              summary={
                <>
                  Mandell was accused in a child-safety case involving children
                  in his care. The caregiver-access fit is strong, but the
                  approved source is a later trial-setting and new-charges story
                  rather than a contemporaneous December official release.
                </>
              }
              whyIncluded={
                <>
                  Babysitting creates household access and caregiver authority.
                  The case remains in monitoring status because the access frame
                  is strong but the December record support should be
                  strengthened before full inclusion.
                </>
              }
              sources={[
                {
                  label: "Cville Right Now",
                  href: "https://cvillerightnow.com/news/208802-trial-set-for-crozet-babysitter-facing-sexual-assault-charges/",
                },
              ]}
            />
          </Section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
              <Scale className="h-4 w-4" />
              Legal and registry note
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-700">
              <p>
                Arrests, charges, indictments, and civil allegations are not
                convictions. Defendants are presumed innocent unless and until
                proven guilty in court. Civil lawsuits and investigative
                allegations are included for accountability relevance but should
                not be described as adjudicated facts unless and until a court
                makes findings.
              </p>
              <p>
                Registry-status entries reflect the approved case set and cited
                public-source materials. Where sources did not identify prior
                registration history, this page uses the current series display
                convention: “Registry status not mentioned” is displayed as
                “Registry: No prior registration noted.” That convention
                preserves the prevention-policy frame without making an
                independent finding about registry history.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
          