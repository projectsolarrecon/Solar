// src/pages/resources/accountability-watch/2025-12-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "November’s strongest pattern was trusted access: school employees, coaches, clergy, foster-care authority, healthcare, law enforcement, corrections, and first responders all appeared in the approved case set.",
  "Education and youth-facing roles dominated the arrest lane, including coaches, teachers, school safety personnel, and a missing head football coach wanted on child-exploitation and solicitation warrants.",
  "The month also showed institutional-accountability failures, including alleged non-reporting inside a church setting and a court order requiring disclosure of clergy-abuse investigation records.",
  "The Alexander case remains important as a status-access example: wealth, elite social spaces, public profile, and business legitimacy can function as access and concealment mechanisms even outside traditional child-facing institutions.",
];

type Stage =
  | "Arrested / Charged"
  | "Charged / Indicted"
  | "Re-arrest / added charges"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
  | "Civil / records order"
  | "Failure-to-report charge"
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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    "Civil / records order": "border-sky-300 bg-sky-50 text-sky-800",
    "Failure-to-report charge": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Re-arrest / added charges": "border-rose-300 bg-rose-50 text-rose-800",
    "Guilty plea": "border-violet-300 bg-violet-50 text-violet-800",
    Convicted: "border-violet-300 bg-violet-50 text-violet-800",
    Sentenced: "border-emerald-300 bg-emerald-50 text-emerald-800",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
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
    <div className="my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-slate-900">
      <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-800">
        <Quote className="h-4 w-4" />
        Accountability frame
      </div>
      <div className="text-base font-semibold leading-relaxed sm:text-lg">
        {children}
      </div>
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
          <div className="flex items-center gap-2">
            {emoji && <span className="text-2xl">{emoji}</span>}
            <h3 className="text-xl font-black text-slate-950">{name}</h3>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-700">{role}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            <span>{date}</span>
            <span>•</span>
            <span>{jurisdiction}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-800">
        <div>{summary}</div>
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
export default function AccountabilityWatch20251201() {
  const pageTitle = "Accountability Watch — November 2025 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="November 2025 Accountability Watch roundup documenting authority, trust, access, legitimacy, institutional shielding, and failed-prevention patterns."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge icon={<Shield className="h-4 w-4" />}>
                Accountability Watch
              </Badge>
              <Badge icon={<FileText className="h-4 w-4" />}>
                November 2025 roundup
              </Badge>
              <Badge icon={<Scale className="h-4 w-4" />}>
                Locked case set
              </Badge>
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Accountability Watch — November 2025 Roundup
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              November’s cases belong together because they show the same
              prevention gap across many settings: trusted adults, public roles,
              professional authority, household control, religious legitimacy,
              medical access, and elite status creating credibility or proximity
              before formal accountability began.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg">
              The pattern is not just misconduct by individuals. It is the way
              authority, legitimacy, secrecy, institutional proximity, and status
              can place risk inside ordinary community life while public safety
              rhetoric keeps pointing elsewhere.
            </p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-6 text-slate-100">
              <div className="mb-2 flex items-center gap-2 font-black uppercase tracking-[0.18em] text-white">
                <Info className="h-4 w-4" />
                Framing note
              </div>
              Allegations are not findings of guilt. Entries are included
              because the approved November case set involved public trust,
              school or youth-program access, clergy or religious legitimacy,
              healthcare authority, law-enforcement or corrections power,
              household and foster-care control, first-responder legitimacy,
              institutional handling, or wealth/status-based access.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar />

          <Section title="At a Glance" eyebrow="Pattern summary">
            <p className="text-base leading-7 text-slate-800 sm:text-lg">
              November’s through-line is trusted access. The included cases are
              not interchangeable crime items; they cluster around roles and
              institutions that gave adults credibility, proximity, privacy,
              authority, or social power before police, prosecutors, courts, or
              civil discovery became involved.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-800 sm:text-lg">
              The month was especially heavy in schools, youth sports, and
              youth-facing settings, but the pattern extended further: a
              pediatrician, foster parent, youth pastor, pastor, prison officer,
              sheriff’s deputies, school counselor, first responder, and wealthy
              real-estate defendants all show how access can be built through
              legitimacy rather than stranger contact.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-800 sm:text-lg">
              The institutional-failure lane also matters. Mark Vega and the
              Seton Hall / Newark litigation are not primarily about a new
              offender arrest; they are about alleged non-reporting, internal
              handling, records, and the limits of institutions investigating
              themselves.
            </p>

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
              November was not a random roundup. The same access points appeared
              again and again: classrooms, school offices, youth sports, church
              life, foster care, pediatric care, detention settings, public
              safety roles, and elite social networks.
            </PullQuote>
          </Section>

          <Section title="New Arrests & Charges" eyebrow="Procedural section">
            <Subgroup>Law enforcement / corrections</Subgroup>

            <CaseRow
              emoji="🛡️"
              name="Skyler Laza"
              role="Former Houston County sheriff’s deputy"
              jurisdiction="Texas"
              stage="Arrested / Charged"
              date="Nov. 8, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  A Houston County sheriff’s deputy was fired after being
                  arrested on allegations of aggravated sexual assault of a
                  child. Local reporting described sheriff’s-office comments
                  framing the case as a betrayal by someone who sought a
                  public-safety role.
                </>
              }
              whyIncluded={
                <>
                  Badge authority and public-safety trust are central. The
                  accountability point is not stranger danger; it is alleged harm
                  connected to someone who held community legitimacy through law
                  enforcement.
                </>
              }
              sources={[
                {
                  label: "KTRE",
                  href: "https://www.ktre.com/2025/11/06/houston-county-deputy-accused-child-sex-crime/",
                },
                {
                  label: "KTRE — connected-case follow-up",
                  href: "https://www.ktre.com/2025/11/07/child-sex-crime-case-linked-gladewater-police-officer-houston-county-deputy/",
                },
              ]}
            />

            <Subgroup>Education / youth sports</Subgroup>

            <CaseRow
              emoji="🏈"
              name="Lagarius Spikes"
              role="Bayshore High School assistant football coach / graduation enhancement technician"
              jurisdiction="Florida"
              stage="Re-arrest / added charges"
              date="Nov. 18 and Nov. 20, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Manatee County authorities reported that Spikes was charged
                  with soliciting sexual battery by an authority figure involving
                  a student, then arrested again after allegations involving
                  another juvenile.
                </>
              }
              whyIncluded={
                <>
                  This is a school and youth-sports authority case. The role
                  carried daily school legitimacy, coaching trust, and access to
                  students in spaces where adult supervision is supposed to mean
                  protection.
                </>
              }
              sources={[
                {
                  label: "Manatee County Sheriff’s Office",
                  href: "https://www.manateesheriff.com/_T24_R374.php",
                },
                {
                  label: "Fox 13 Tampa Bay",
                  href: "https://www.fox13news.com/news/bayshore-high-school-assistant-football-coach-accused-soliciting-sexual-contact-student",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Jessica Bergmann"
              role="Washington Middle School teacher / soccer coach"
              jurisdiction="Illinois"
              stage="Arrested / Charged"
              date="Nov. 8, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  DuPage County prosecutors said Bergmann was charged with
                  criminal sexual assault and aggravated criminal sexual abuse
                  involving a former student, including position-of-authority
                  charges.
                </>
              }
              whyIncluded={
                <>
                  Educator and coach access are both relevant. Prosecutors
                  described a position-of-authority case tied to a person who had
                  previously been her student and part of her school-linked
                  athletic orbit.
                </>
              }
              sources={[
                {
                  label: "DuPage County State’s Attorney",
                  href: "https://www.dupagecounty.gov/state_s_attorney/aurora_middle_school_teacher_charged_with_criminal_1570.php",
                },
                {
                  label: "ABC7 Chicago",
                  href: "https://abc7chicago.com/post/aurora-washington-middle-school-teacher-jessica-bergmann-charged-sexual-assault-former-student-wheaton-officials-say/18131091/",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Tyree McKinley Fields"
              role="Spoto High School campus safety monitor"
              jurisdiction="Florida"
              stage="Arrested / Charged"
              date="Nov. 3–4, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  The Hillsborough County Sheriff’s Office said Fields, a campus
                  safety monitor at Spoto High School, was arrested after a
                  child sexual abuse material investigation that began with a
                  cybertip.
                </>
              }
              whyIncluded={
                <>
                  Even where the alleged conduct surfaced through an online
                  investigation, the school-safety role matters: it carried
                  routine legitimacy and proximity in a student environment.
                </>
              }
              sources={[
                {
                  label: "Hillsborough County Sheriff’s Office",
                  href: "https://teamhcso.com/News/PressRelease/42cf7210-1533-4aca-b77c-50bb552ab9dd/25-155-%281%29",
                },
                {
                  label: "Tampa Bay Times",
                  href: "https://www.tampabay.com/news/crime/2025/11/04/spoto-high-school-monitor-arrest-tyree-fields/",
                },
              ]}
            />

            <CaseRow
              emoji="🏈"
              name="Travis L. Turner"
              role="Union High School head football coach"
              jurisdiction="Virginia"
              stage="Arrested / Charged"
              date="Nov. 25, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Virginia State Police obtained warrants charging Turner, a
                  missing high school head football coach, with possession of
                  child sexual abuse material and using a computer to solicit a
                  minor.
                </>
              }
              whyIncluded={
                <>
                  A head coach is a high-trust youth authority figure. The case
                  fits the youth-sports access pattern because community status,
                  school affiliation, and athletic authority can all shape
                  credibility and access.
                </>
              }
              sources={[
                {
                  label: "Associated Press",
                  href: "https://apnews.com/article/a1f7d08a9452f80313ba303924ed18cb",
                },
                {
                  label: "WDBJ7",
                  href: "https://www.wdbj7.com/2025/11/25/child-pornography-warrants-obtained-case-missing-football-coach/",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              emoji="⛪"
              name="Donald Aaron Axtell"
              role="Associate youth pastor, Excelsior Springs Baptist Church"
              jurisdiction="Missouri"
              stage="Arrested / Charged"
              date="Nov. 13–14, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Local reporting, citing Clay County Prosecutor’s Office court
                  documents, said Axtell was charged with statutory rape,
                  possession of child pornography, and furnishing pornographic
                  material to a minor.
                </>
              }
              whyIncluded={
                <>
                  Youth ministry combines spiritual authority, family trust, and
                  child-facing access. The case belongs here because the alleged
                  access mechanism was embedded in church community life.
                </>
              }
              sources={[
                {
                  label: "KCTV5",
                  href: "https://www.kctv5.com/2025/11/14/excelsior-springs-youth-pastor-charged-with-statutory-rape-other-crimes/",
                },
                {
                  label: "KSHB 41",
                  href: "https://www.kshb.com/news/crime/excelsior-springs-youth-pastor-charged-in-child-sex-crimes-case",
                },
              ]}
            />
<Subgroup>Household / caregiver authority</Subgroup>

            <CaseRow
              emoji="🏠"
              name="Eugene D. Jennings"
              role="Foster parent"
              jurisdiction="Vermont"
              stage="Arrested / Charged"
              date="Nov. 6, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Vermont State Police reported that Jennings was charged after
                  an investigation involving multiple foster children in his
                  care. Local coverage described charges including sexual
                  assault and lewd or lascivious conduct.
                </>
              }
              whyIncluded={
                <>
                  This is a core household-control and state-placement case.
                  Foster care places children inside private homes through
                  official trust, making prevention, oversight, and placement
                  accountability central.
                </>
              }
              sources={[
                {
                  label: "Vermont State Police / Vermont Business Magazine",
                  href: "https://vermontbiz.com/news/2025/november/06/vsp-multiple-charges-case-numbers-victims-occurring-foster-home-mt-holly",
                },
                {
                  label: "WCAX",
                  href: "https://www.wcax.com/2025/11/06/vt-foster-parent-accused-sexually-abusing-children/",
                },
              ]}
            />

            <Subgroup>Healthcare / therapy</Subgroup>

            <CaseRow
              emoji="⚕️"
              name="Gabriel Perez"
              role="Pediatrician, CentroMed SA Pediatrics"
              jurisdiction="Texas"
              stage="Arrested / Charged"
              date="Nov. 21–24, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  San Antonio reporting said Perez was arrested on an aggravated
                  sexual assault of a child charge involving a pediatric patient.
                  CentroMed said he was no longer employed after the arrest.
                </>
              }
              whyIncluded={
                <>
                  Pediatric care creates exceptional trust, privacy, and
                  vulnerability. The alleged access point was medical authority
                  over a child patient, not anonymous contact.
                </>
              }
              sources={[
                {
                  label: "KSAT",
                  href: "https://www.ksat.com/news/local/2025/11/25/san-antonio-pediatrician-accused-of-sexually-assaulting-patient-no-longer-employed-centromed-says/",
                },
                {
                  label: "KENS 5",
                  href: "https://www.kens5.com/article/news/local/san-antonio-texas-arrest-pediatrician-doctor-gabriel-perez-centromed-sa-pediatrics-sexual-assault-teen-patient-victim-arrest-warrant-november-2025/273-326a6404-0a5f-4979-9417-2630c24397a3",
                },
              ]}
            />

            <CaseRow
              emoji="🧠"
              name="Janell Edsall"
              role="Former school counselor"
              jurisdiction="Colorado"
              stage="Arrested / Charged"
              date="Nov. 19–20, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Fort Collins Police said Edsall was arrested on charges
                  including sexual assault on a child by one in a position of
                  trust and sexual assault on a client by a psychotherapist.
                </>
              }
              whyIncluded={
                <>
                  This is a dual-role authority case: school counseling and
                  therapeutic trust. The allegations sit at the intersection of
                  student access, client vulnerability, and professional power.
                </>
              }
              sources={[
                {
                  label: "Fort Collins Police / PublicNow",
                  href: "https://www.publicnow.com/view/BB310BA2AD50A6E6DD802702EACB9BED442F281C",
                },
                {
                  label: "CBS Colorado",
                  href: "https://www.cbsnews.com/colorado/news/former-school-counselor-fort-collins-northern-colorado-arrested-accused-sexual-assault-student/",
                },
              ]}
            />

            <Subgroup>
              Wealth / public influence / elite access / business legitimacy
            </Subgroup>

            <CaseRow
              emoji="🏙️"
              name="Alon, Oren, and Tal Alexander"
              role="Wealthy real-estate / public-profile defendants"
              jurisdiction="New York / federal"
              stage="Charged / Indicted"
              date="Nov. 12–13, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  A federal judge largely declined to dismiss sex-trafficking
                  charges against the Alexander brothers, allowing the case to
                  proceed while dismissing only a limited count on timeliness
                  grounds.
                </>
              }
              whyIncluded={
                <>
                  Wealth, luxury real-estate networks, elite spaces, public
                  profile, and professional legitimacy can operate as access and
                  concealment mechanisms. This case preserves the series’
                  status-access rule without treating influence as a generic
                  celebrity footnote.
                </>
              }
              sources={[
                {
                  label: "Associated Press",
                  href: "https://apnews.com/article/luxury-real-estate-brothers-nyc-sex-trafficking-3f4a95c67b159d6994c5f77bdc929eb2",
                },
                {
                  label: "DOJ — superseding indictment",
                  href: "https://www.justice.gov/d9/2024-12/u.s._v._alexander_et_al_superseding_indictment.pdf",
                },
              ]}
            />
          </Section>

          <Section
            title="Pleas / Convictions / Sentencings"
            eyebrow="Procedural section"
          >
            <Subgroup>Law enforcement / corrections</Subgroup>

            <CaseRow
              emoji="🛡️"
              name="Johnathan A. Edwards"
              role="Former Harnett County sheriff’s deputy"
              jurisdiction="North Carolina / federal"
              stage="Sentenced"
              date="Nov. 17, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors said Edwards, a former sheriff’s deputy,
                  was sentenced to 23 years in prison for producing child sexual
                  abuse material.
                </>
              }
              whyIncluded={
                <>
                  This is a classic badge-and-trust case. DOJ described the
                  sentence in terms of a law-enforcement officer betraying the
                  community he swore to protect, making public authority central
                  to the accountability frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of North Carolina",
                  href: "https://www.justice.gov/usao-ednc/pr/former-deputy-sheriff-sentenced-production-child-sexual-abuse-material",
                },
                {
                  label: "ABC11",
                  href: "https://abc11.com/post/johnathan-andrew-edwards-former-harnett-county-deputy-sentenced-23-years-sex-crimes-involving-children/18166262/",
                },
              ]}
            />

            <CaseRow
              emoji="🏛️"
              name="Lawrence Gacad"
              role="Former BOP correctional officer, FCI Dublin"
              jurisdiction="California / federal"
              stage="Sentenced"
              date="Nov. 19, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  The Justice Department Office of Inspector General said Gacad,
                  a former federal correctional officer at FCI Dublin, pleaded
                  guilty to abusive sexual contact and was sentenced.
                </>
              }
              whyIncluded={
                <>
                  Custody changes the power equation. A correctional officer’s
                  authority over an incarcerated person creates dependence,
                  surveillance, discipline, and vulnerability that ordinary
                  public-safety narratives often ignore.
                </>
              }
              sources={[
                {
                  label: "DOJ Office of Inspector General",
                  href: "https://oig.justice.gov/news/press-release/former-bop-correctional-officer-sentenced-abusive-sexual-contact-0",
                },
                {
                  label: "KTVU",
                  href: "https://www.ktvu.com/news/fci-dublin-correctional-officer-gets-probation-no-prison-time-sex-crime",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>

            <CaseRow
              emoji="🏫"
              name="Richard C. Colon"
              role="Former Lake Mary High School teacher"
              jurisdiction="Florida"
              stage="Guilty plea"
              date="Nov. 13–14, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Florida’s 18th Judicial Circuit State Attorney said Colon
                  pleaded guilty to sexual battery by a person in custodial
                  authority and related child-exploitation charges involving a
                  17-year-old student.
                </>
              }
              whyIncluded={
                <>
                  The school authority nexus is direct. Prosecutors described a
                  former teacher, custodial-authority charges, classroom-linked
                  conduct, and digital evidence from phones.
                </>
              }
              sources={[
                {
                  label: "18th Judicial Circuit State Attorney",
                  href: "https://sa18.org/press-release/former-lake-mary-high-teacher-pleads-guilty-to-charges-of-sex-with-student/",
                },
                {
                  label: "ClickOrlando",
                  href: "https://www.clickorlando.com/news/local/2025/11/14/former-lake-mary-high-school-teacher-pleads-guilty-to-sexually-abusing-student/",
                },
              ]}
            />

            <Subgroup>Household / caregiver authority; youth programs</Subgroup>

            <CaseRow
              emoji="🏠"
              name="Elijah Jacob Donato"
              role="Former babysitter / afterschool program director"
              jurisdiction="North Carolina"
              stage="Guilty plea"
              date="Nov. 13–17, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Local reporting said Donato, a former private babysitter and
                  afterschool-program worker, pleaded guilty to
                  child-exploitation-related charges involving children he
                  babysat.
                </>
              }
              whyIncluded={
                <>
                  Babysitting and afterschool-program roles are close-to-home
                  access points. The case fits the pattern of trusted caregiving
                  and youth-program authority rather than public stranger-danger
                  assumptions.
                </>
              }
              sources={[
                {
                  label: "WWAY",
                  href: "https://www.wwaytv3.com/wilmington-babysitter-pleads-guilty-to-child-exploitation-charges/",
                },
                {
                  label: "Port City Daily",
                  href: "https://portcitydaily.com/local-news/government/2025/11/17/guilty-plea-former-uncw-student-sentenced/",
                },
              ]}
            />

            <Subgroup>First responder / public trust</Subgroup>

            <CaseRow
              emoji="🚒"
              name="Garey A. Buscaino"
              role="Former local firefighter"
              jurisdiction="Florida / federal"
              stage="Guilty plea"
              date="Nov. 21, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Federal prosecutors said Buscaino, a former firefighter,
                  pleaded guilty to production and possession of child pornography
                  charges involving hidden-camera videos and CSAM.
                </>
              }
              whyIncluded={
                <>
                  First responders carry public trust and community legitimacy.
                  DOJ said investigators searched both the residence and
                  firehouse, making the public-role context relevant to the
                  accountability frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Northern District of Florida",
                  href: "https://www.justice.gov/usao-ndfl/pr/former-local-firefighter-pleads-guilty-federal-charges-production-and-possession-child",
                },
                {
                  label: "WEAR",
                  href: "https://weartv.com/news/local/ex-escambia-firefighter-gets-75-years-for-decade-long-pattern-of-producing-child-porn",
                },
              ]}
            />
          </Section>

          <Section
            title="Civil / Administrative Actions"
            eyebrow="Non-criminal accountability"
          >
            <Subgroup>Clergy / religious institutions; records access</Subgroup>

            <CaseRow
              emoji="📄"
              name="Seton Hall University / Archdiocese of Newark clergy-abuse litigation"
              role="Catholic university and archdiocese"
              jurisdiction="New Jersey"
              stage="Civil / records order"
              date="Nov. 13–17, 2025"
              registry="Registry status not mentioned"
              summary={
                <>
                  A New Jersey judge ordered Seton Hall University to release
                  documents from a clergy-abuse investigation in litigation tied
                  to the Archdiocese of Newark.
                </>
              }
              whyIncluded={
                <>
                  This is an institutional-accountability case about records,
                  nondisclosure, survivor litigation, and the public’s ability to
                  see how religious and educational institutions handled abuse
                  information.
                </>
              }
              sources={[
                {
                  label: "Politico",
                  href: "https://www.politico.com/news/2025/11/17/seton-hall-clergy-abuse-documents-00654168",
                },
                {
                  label: "New Jersey Monitor",
                  href: "https://newjerseymonitor.com/briefs/seton-hall-sex-abuse-case/",
                },
              ]}
            />
          </Section>

          <Section
            title="Institutional Shielding & Findings"
            eyebrow="Handling, reporting, and oversight failures"
          >
            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              emoji="⛪"
              name="Mark Anthony Vega"
              role="Senior pastor, Ignite Life Center; former Gainesville Police Department chaplain"
              jurisdiction="Florida"
              stage="Failure-to-report charge"
              date="Nov. 24–25, 2025"
              registry="No prior registration noted"
              summary={
                <>
                  Local reporting said Vega was arrested on a felony charge of
                  failing to report suspected child abuse. Coverage described
                  allegations that suspected abuse information was handled inside
                  the church rather than promptly reported outside it.
                </>
              }
              whyIncluded={
                <>
                  This is a shielding and reporting-failure case, not merely an
                  offender entry. The accountability issue is institutional
                  handling inside a trusted religious setting.
                </>
              }
              sources={[
                {
                  label: "Alachua Chronicle",
                  href: "https://alachuachronicle.com/ignite-life-center-senior-pastor-charged-with-failing-to-report-suspected-child-abuse/",
                },
                {
                  label: "Gainesville Public Information Services",
                  href: "https://www.gnvinfo.com/ignite-life-center-senior-pastor-arrested-for-child-sex-abuse-coverup/",
                },
              ]}
            />
          </Section>
<Section title="Monitoring Items / Watchlist" eyebrow="Follow-up">
            <ul className="space-y-3 text-sm leading-6 text-slate-800">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Lagarius Spikes / Bayshore High School:
                </span>{" "}
                monitor for added victims, school-district findings, DCF
                involvement, and any school-board records that clarify prior
                notice or supervision issues.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Mark Vega / Ignite Life Center:
                </span>{" "}
                monitor court filings, possible church-internal records, and any
                civil action tied to reporting failures or institutional
                handling.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Seton Hall / Newark clergy litigation:
                </span>{" "}
                monitor whether the ordered documents are produced and what they
                reveal about institutional handling, nondisclosure, and survivor
                access to records.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Gabriel Perez / CentroMed:
                </span>{" "}
                monitor Texas Medical Board action, additional-victim reporting,
                and CentroMed’s institutional response.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Travis Turner / Union High School:
                </span>{" "}
                monitor arrest status, charging documents, school-district
                disclosures, and whether school or youth-sports access is
                directly implicated.
              </li>
            </ul>
          </Section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600">
              <Scale className="h-4 w-4" />
              Legal and registry note
            </div>
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                Arrests, charges, indictments, warrants, civil allegations, and
                investigative findings are not convictions. Defendants are
                presumed innocent unless and until proven guilty in court. Civil
                and institutional matters should be read according to their own
                legal posture and source language.
              </p>
              <p>
                Registry-status notes are limited to the reviewed public source
                material. Under the current series display convention, “Registry
                status not mentioned” is displayed as “Registry: No prior
                registration noted” to preserve the prevention-policy frame
                without inventing registry history or making an independent
                registry-history finding.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}