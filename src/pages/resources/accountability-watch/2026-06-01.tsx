// src/pages/resources/accountability-watch/2026-06-01.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Info, Quote, Scale, Shield } from "lucide-react";
import ShareBar from "../../../components/solar/ShareBar";

export const teaserHighlights = [
  "May 2026 was unusually heavy on law-enforcement and public-safety roles, with police officers, a detective, a detention officer, former officers, and first-responder-linked defendants appearing in new charges.",
  "Education and youth sports remained the densest recurring lane, with teachers, school employees, coaches, a paraeducator, a national-sport coach, and volunteer coaches appearing across arrests, pleas, and sentencings.",
  "Clergy and religious-authority cases showed how spiritual legitimacy, congregational dependency, household control, and institutional response failures can create access before criminal accountability begins.",
  "Public office, wealth, commercial settings, and cross-border leverage also mattered: civic status, lodging access, money, travel, and professional credibility all appeared as access mechanisms outside the stranger-danger frame.",
];

type Stage =
  | "Arrested"
  | "Arrested / Charged"
  | "Charged"
  | "Charged / Indicted"
  | "Indicted"
  | "Superseding indictment"
  | "Guilty plea"
  | "Convicted"
  | "Sentenced"
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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
      {icon}
      {children}
    </span>
  );
}

function StageBadge({ stage }: { stage: Stage }) {
  const tones: Record<string, string> = {
    Arrested: "border-rose-300 bg-rose-50 text-rose-800",
    "Arrested / Charged": "border-rose-300 bg-rose-50 text-rose-800",
    Charged: "border-rose-300 bg-rose-50 text-rose-800",
    "Charged / Indicted": "border-indigo-300 bg-indigo-50 text-indigo-800",
    Indicted: "border-indigo-300 bg-indigo-50 text-indigo-800",
    "Superseding indictment": "border-indigo-300 bg-indigo-50 text-indigo-800",
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
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950 shadow-sm">
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
          <div className="flex items-start gap-3">
            {emoji && <div className="text-2xl leading-none">{emoji}</div>}
            <div>
              <h3 className="text-xl font-black tracking-tight text-slate-950">
                {name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-700">{role}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
            <span>{date}</span>
            <span aria-hidden="true">•</span>
            <span>{jurisdiction}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <StageBadge stage={stage} />
          <RegistryChip status={registry} />
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-800">
        <p>{summary}</p>
        {whyIncluded && (
          <p className="rounded-xl border border-slate-200 bg-white px-3 py-2">
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
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-slate-500 hover:text-slate-950"
            >
              <FileText className="h-3.5 w-3.5" />
              {source.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function AccountabilityWatch20260601() {
  const pageTitle = "Accountability Watch — May 2026 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="May 2026 Accountability Watch roundup tracking authority, access, public trust, religious legitimacy, education and youth-sports roles, public-safety personnel, and registry-context patterns."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-100">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield className="h-3.5 w-3.5" />}>
                Accountability Watch
              </Badge>
              <Badge icon={<Scale className="h-3.5 w-3.5" />}>
                May 2026 roundup
              </Badge>
              <Badge icon={<Info className="h-3.5 w-3.5" />}>
                Verified-source shortlist
              </Badge>
            </div>

            <div className="mt-8 max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
                The SOLAR Project
              </p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Accountability Watch — May 2026 Roundup
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
                May’s cases belong together because they show how authority and
                access can sit in plain sight: inside police departments,
                churches, schools, youth sports, public office, household-like
                control, and commercial settings before criminal accountability
                begins.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                The pattern is not a random crime ledger. It is a month of
                trusted roles, public legitimacy, spiritual authority, youth-facing
                proximity, and status-based access repeatedly appearing as the
                pathway to alleged or adjudicated harm.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-7 text-slate-100 shadow-lg shadow-slate-950/20">
              <p className="font-black uppercase tracking-[0.18em] text-amber-300">
                Framing note
              </p>
              <p className="mt-2">
                Allegations are not findings of guilt. Entries are included
                because the approved May case set involved law-enforcement power,
                school or youth-program access, religious legitimacy, civic status,
                business or commercial access, wealth or travel leverage, or
                trusted proximity that public registry systems do not meaningfully
                predict.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
          <ShareBar title="Accountability Watch — May 2026 Roundup" />

          <Section title="At a Glance" eyebrow="Pattern summary">
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-base leading-8 text-slate-800">
                <p>
                  May’s through-line is institutional and status-based access.
                  Law-enforcement and public-safety roles were unusually prominent,
                  while schools, youth sports, churches, public office, and
                  commercial settings showed the same larger prevention gap:
                  communities often encounter formal accountability only after
                  trusted access has already done damage.
                </p>
                <p className="mt-4">
                  Education and youth sports remained the densest recurring lane,
                  with teachers, coaches, school employees, a paraeducator, a
                  national-sport coach, and volunteer coaches appearing across
                  arrests, pleas, and sentencings. Clergy cases added another
                  high-trust pattern: spiritual authority, dependency, isolation,
                  and congregational legitimacy can all become access mechanisms.
                </p>
                <p className="mt-4">
                  The recurring absence of prior-registration information is part
                  of the accountability frame. These cases are best understood
                  through authority, legitimacy, proximity, institutional trust,
                  household-like control, public status, and delayed intervention —
                  not through a simplified public-warning model of risk.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-7 text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <PullQuote>
                May was not a stranger-danger story. It was a month of badge
                authority, classroom trust, coaching access, spiritual power,
                public office, commercial settings, and status-based leverage
                showing where prevention actually has to look.
              </PullQuote>
            </div>
          </Section>

          <Section title="New Arrests & Charges" eyebrow="May 2026">
            <Subgroup>Law enforcement / corrections</Subgroup>

            <CaseRow
              emoji="🚔"
              name="Brandon McGibbon"
              role="San Diego Police Department officer"
              jurisdiction="California / federal"
              stage="Indicted"
              date="May 22, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  A federal indictment charged McGibbon, an SDPD officer, with
                  child-exploitation offenses involving three minor victims.
                </>
              }
              whyIncluded={
                <>
                  Active police authority and public-trust status are central:
                  the alleged conduct sits inside a role the public is taught to
                  associate with protection.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Southern District of California",
                  href: "https://www.justice.gov/usao-sdca/pr/police-officer-charged-child-exploitation-crimes-involving-multiple-minor-victims",
                },
              ]}
            />

            <CaseRow
              emoji="🚔"
              name="Matthew S. Pleisse"
              role="Shippensburg Police Department detective"
              jurisdiction="Pennsylvania / federal"
              stage="Indicted"
              date="Indicted May 6; unsealed May 26, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  A police detective was indicted on federal child-exploitation
                  charges; DOJ said detention was ordered on May 19.
                </>
              }
              whyIncluded={
                <>
                  Investigative law-enforcement authority gives the case direct
                  public-trust relevance, especially because detective work itself
                  carries credibility and coercive power.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Middle District of Pennsylvania",
                  href: "https://www.justice.gov/usao-mdpa/pr/shippensburg-detective-indicted-child-exploitation-offenses",
                },
              ]}
            />

            <CaseRow
              emoji="🚔"
              name="Brian Jimenez-Gomez"
              role="Salinas police officer"
              jurisdiction="California"
              stage="Charged"
              date="May 19–20, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Jimenez-Gomez was charged with felony possession of child
                  sexual-abuse material; reporting said the department placed him
                  on leave after referral to an ICAC investigation.
                </>
              }
              whyIncluded={
                <>
                  Active officer status and institutional trust make the case a
                  public-safety accountability matter, not merely an individual
                  criminal allegation.
                </>
              }
              sources={[
                {
                  label: "KSBW",
                  href: "https://www.ksbw.com/article/salinas-police-officer-charged-child-pornography/71350444",
                },
              ]}
            />

            <CaseRow
              emoji="🚔"
              name="Dustin Bartlett"
              role="Arlington police officer"
              jurisdiction="Washington"
              stage="Arrested"
              date="May 20, 2026"
              registry="Registry status not mentioned"
              summary={
                <>
                  Bartlett was arrested on suspicion of possessing child
                  sexual-abuse images.
                </>
              }
              whyIncluded={
                <>
                  The badge and public-safety role matter because law-enforcement
                  legitimacy can shield people from the suspicion directed at
                  outsiders.
                </>
              }
              sources={[
                {
                  label: "Everett Herald",
                  href: "https://www.heraldnet.com/2026/05/20/arlington-officer-arrested-for-allegedly-having-pictures-of-child-sex-abuse/",
                },
              ]}
            />

            <CaseRow
              emoji="🚔"
              name="Christopher John Oallesma"
              role="Honolulu Police Department officer"
              jurisdiction="Hawaii"
              stage="Indicted"
              date="May 1, 2026 report; indictment earlier that week"
              registry="No prior registration noted"
              summary={
                <>
                  Oallesma was indicted on multiple sex-assault counts plus
                  official-misconduct and obstruction-related counts tied to an
                  alleged on-duty incident.
                </>
              }
              whyIncluded={
                <>
                  The alleged on-duty setting makes coercive public authority and
                  badge power central to the accountability frame.
                </>
              }
              sources={[
                {
                  label: "Hawaii News Now",
                  href: "https://www.hawaiinewsnow.com/2026/05/02/honolulu-police-officer-indicted-alleged-on-duty-sexual-assault/",
                },
              ]}
            />

            <CaseRow
              emoji="🚔"
              name="Richard Matthew Rey Mendoza"
              role="San Antonio detention officer / civilian SAPD employee"
              jurisdiction="Texas"
              stage="Arrested / Charged"
              date="May 6–7, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Mendoza was charged in a child sexual-abuse and CSAM case
                  involving a 13-year-old.
                </>
              }
              whyIncluded={
                <>
                  A detention-center role and public-safety affiliation create an
                  authority-and-access concern even where the employee is civilian.
                </>
              }
              sources={[
                {
                  label: "News4SA",
                  href: "https://news4sanantonio.com/news/local/san-antonio-detention-officer-accused-in-abuse-case-involving-13-year-old-disabled-girl-texas-investigation-evidence-police-social-media-videos-tattoos-detectives",
                },
              ]}
            />

          <CaseRow
              emoji="🚒"
              name="Matthew Joseph Fay, Allen Randolph Foltz, Paula Lawrence Foltz, Edward John Storer, Jeannine Wisler Storer, Waylon William Rogers"
              role="Former fire official / former police officers / associated defendants"
              jurisdiction="South Carolina"
              stage="Charged"
              date="May 20, 2026"
              registry="Registry status not mentioned"
              summary={
                <>
                  Six defendants were charged in an alleged child sex-ring case;
                  reporting identified a former Greenville Fire training officer,
                  a former Mauldin officer, and a former Greenville officer among
                  the accused.
                </>
              }
              whyIncluded={
                <>
                  The public-safety-role overlap and alleged coordinated access
                  make the case a major authority, legitimacy, and network-access
                  entry.
                </>
              }
              sources={[
                {
                  label: "Fox Carolina",
                  href: "https://www.foxcarolina.com/2026/05/20/former-upstate-officer-firefighter-among-6-arrested-alleged-child-sex-ring/",
                },
              ]}
            />

            <Subgroup>Politics / civic leadership</Subgroup>

            <CaseRow
              emoji="🏛️"
              name="Kevin Phillip Hedgpeth"
              role="Former Hanahan city councilman / former mayor pro tem"
              jurisdiction="South Carolina / federal"
              stage="Indicted"
              date="May 14, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Hedgpeth was indicted on sex trafficking of a minor,
                  coercion/enticement, and CSAM charges involving at least 19
                  children.
                </>
              }
              whyIncluded={
                <>
                  Public office and civic legitimacy matter because elected and
                  municipal status can create trust, access, and deference before
                  formal accountability begins.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO South Carolina",
                  href: "https://www.justice.gov/usao-sc/pr/former-hanahan-city-councilman-indicted-sex-trafficking-and-child-sexual-abuse-charges",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              emoji="⛪"
              name="Treva Edwards"
              role="Pastor / self-proclaimed prophet; Christine Edwards also charged"
              jurisdiction="New Jersey / federal"
              stage="Superseding indictment"
              date="May 20, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  A superseding indictment charged Treva Edwards with sex
                  trafficking, forced labor, and coercive control of congregants;
                  DOJ also charged Christine Edwards with forced-labor conspiracy.
                </>
              }
              whyIncluded={
                <>
                  Spiritual authority, congregational dependency, isolation, and
                  coercive control are the access mechanisms, making this a
                  religious-legitimacy and institutional-power case.
                </>
              }
              sources={[
                {
                  label: "DOJ Office of Public Affairs",
                  href: "https://www.justice.gov/opa/pr/superseding-indictment-returned-new-jersey-pastor-and-self-proclaimed-prophet-who-compelled",
                },
              ]}
            />

            <CaseRow
              emoji="⛪"
              name="Elie Dorcius"
              role="Pastor, Unity Baptist Church"
              jurisdiction="Florida"
              stage="Arrested"
              date="May 20, 2026"
              registry="Registry status not mentioned"
              summary={
                <>
                  Dorcius, a South Florida pastor, was arrested on child
                  rape/molestation-related charges; investigators said additional
                  victims may exist.
                </>
              }
              whyIncluded={
                <>
                  Pastoral authority and congregational trust are central because
                  religious leadership can create legitimacy, privacy, and access
                  that ordinary prevention narratives miss.
                </>
              }
              sources={[
                {
                  label: "Local 10",
                  href: "https://www.local10.com/news/local/2026/05/20/south-florida-pastor-accused-of-raping-young-girl-cops-say-there-may-be-additional-victims/",
                },
              ]}
            />

            <CaseRow
              emoji="⛪"
              name="Alonzo Diego Fuller Jr."
              role="Founding pastor, Journey Fort Worth Church"
              jurisdiction="Texas"
              stage="Indicted"
              date="May 5–25, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Fuller was jailed after an indictment on sexual-assault and
                  child-enticement allegations.
                </>
              }
              whyIncluded={
                <>
                  Church leadership, public religious authority, and congregational
                  trust place the allegations inside a clergy-legitimacy and access
                  frame.
                </>
              }
              sources={[
                {
                  label: "SNAP",
                  href: "https://snapnetwork.org/2026/05/25/fort-worth-pastor-jailed-after-indictment-on-sexual-assault-child-enticement-charges/",
                },
              ]}
            />

            <Subgroup>Education</Subgroup>

            <CaseRow
              emoji="🏫"
              name="Keisha Stuart"
              role="Private-school teacher"
              jurisdiction="Wisconsin"
              stage="Charged"
              date="May 26–27, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Stuart was charged with second-degree sexual assault of a child,
                  exposing a child to harmful material, and sexual misconduct by
                  school staff.
                </>
              }
              whyIncluded={
                <>
                  The role is the access point: teacher-student authority, school
                  trust, and private-school proximity are central to the prevention
                  question.
                </>
              }
              sources={[
                {
                  label: "Fox 11 / WLUK",
                  href: "https://fox11online.com/news/local/grand-chute-teacher-charged-in-alleged-sexual-relationship-with-14-year-old-student-keisha-stuart-fundamentals-appleton-fox-valley-letter-police-winnebago-county",
                },
                {
                  label: "WBAY",
                  href: "https://www.wbay.com/2026/05/27/private-school-teacher-menasha-charged-with-inappropriate-relationship-with-student/",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Samantha J. Watson"
              role="Charter-school teacher"
              jurisdiction="California"
              stage="Arrested"
              date="May 22–28, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Watson was arrested after allegations of sexual abuse involving
                  a student from her time at a Moreno Valley charter school.
                </>
              }
              whyIncluded={
                <>
                  Educator authority and student access make the school role
                  essential to the accountability frame.
                </>
              }
              sources={[
                {
                  label: "Fox News",
                  href: "https://www.foxnews.com/us/california-teacher-samantha-watson-arrested-alleged-sexual-conduct-student-charter-school",
                },
              ]}
            />

            <Subgroup>Youth sports / youth access</Subgroup>

            <CaseRow
              emoji="🧗"
              name="Matthew Maddison"
              role="USA Climbing strength coach / speed-team manager"
              jurisdiction="Utah"
              stage="Charged"
              date="May 4, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Maddison, a USA Climbing coach, was charged with 13 felony
                  child-exploitation counts.
                </>
              }
              whyIncluded={
                <>
                  National-sport legitimacy, youth-athlete access, and
                  SafeSport-adjacent oversight concerns make the coaching role
                  central.
                </>
              }
              sources={[
                {
                  label: "KSL",
                  href: "https://www.ksl.com/article/51492948/usa-climbing-coach-charged-with-13-felonies-in-child-sex-abuse-material-case",
                },
              ]}
            />

            <CaseRow
              emoji="🏟️"
              name="Rylekwun J. Poullard"
              role="Lake Charles-area volunteer coach"
              jurisdiction="Louisiana / federal"
              stage="Charged"
              date="May 26–27, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Poullard was charged with production of CSAM after prosecutors
                  said he used a false online identity to induce local boys to
                  produce material.
                </>
              }
              whyIncluded={
                <>
                  Volunteer coaching can create local trust and youth access even
                  outside formal school employment, making the role relevant to
                  prevention and accountability.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Louisiana",
                  href: "https://www.justice.gov/usao-wdla/pr/lake-charles-area-volunteer-coach-charged-and-detained-producing-child-pornography",
                },
              ]}
            />
          </Section>

          <Section title="Pleas / Convictions / Sentencings" eyebrow="May 2026">
            <Subgroup>Politics / civic leadership</Subgroup>

            <CaseRow
              emoji="🏛️"
              name="Justin Eichorn"
              role="Former Minnesota state senator"
              jurisdiction="Minnesota / federal"
              stage="Guilty plea"
              date="May 14, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Eichorn, a former state senator, pleaded guilty in a
                  child-solicitation-related sting case.
                </>
              }
              whyIncluded={
                <>
                  Elected office confers public legitimacy and civic trust, making
                  the plea a public-accountability case as well as a criminal case.
                </>
              }
              sources={[
                {
                  label: "MPR News",
                  href: "https://www.mprnews.org/story/2026/05/14/former-state-sen-justin-eichorn-expected-to-plead-guilty-in-child-solicitation-case",
                },
              ]}
            />

            <Subgroup>Clergy / religious institutions</Subgroup>

            <CaseRow
              emoji="⛪"
              name="Terry Reed"
              role="Louisiana pastor"
              jurisdiction="Louisiana"
              stage="Convicted"
              date="May 2026 report"
              registry="Registry status not mentioned"
              summary={
                <>
                  Reed, a pastor, was convicted for the third time in a case
                  involving teen boys who had lived in his home.
                </>
              }
              whyIncluded={
                <>
                  Religious authority, household access, and a repeat
                  institutional/community failure pattern make this more than an
                  isolated criminal conviction.
                </>
              }
              sources={[
                {
                  label: "The Guardian",
                  href: "https://www.theguardian.com/us-news/2026/may/09/new-orleans-pastor-guilty-sexually-molesting-teens",
                },
              ]}
            />

            <CaseRow
              emoji="⛪"
              name="Anthony Odiong"
              role="Catholic priest"
              jurisdiction="Texas / Louisiana"
              stage="Convicted"
              date="May 29, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Odiong, a Catholic priest, was convicted in a clergy
                  sexual-assault case involving adult women who alleged spiritual
                  dependency and clerical manipulation.
                </>
              }
              whyIncluded={
                <>
                  The case centers on spiritual authority, vulnerable-adult access,
                  religious counseling, and reported institutional response
                  failures.
                </>
              }
              sources={[
                {
                  label: "The Guardian",
                  href: "https://www.theguardian.com/us-news/2026/may/31/anthony-odiong-accuser-speaks-out",
                },
              ]}
            />

            <Subgroup>Education / youth sports</Subgroup>

            <CaseRow
              emoji="🏫"
              name="Dagoberto Miguel Pena"
              role="Physical-education teacher and coach"
              jurisdiction="Florida / federal"
              stage="Sentenced"
              date="May 5, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Pena, a former coach and teacher, was sentenced to 60 years for
                  child sexual-abuse and exploitation offenses.
                </>
              }
              whyIncluded={
                <>
                  School and coaching access were central, and the investigation
                  began only after outside discovery rather than routine
                  preventive safeguards.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Middle District of Florida",
                  href: "https://www.justice.gov/usao-mdfl/pr/charlotte-county-coach-sentenced-60-years-child-sexual-abuse-offenses",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Lee Hughes"
              role="Former Pinellas teacher"
              jurisdiction="Florida / federal"
              stage="Sentenced"
              date="May 21, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Hughes, a former teacher, was sentenced to 20 years for attempted
                  enticement, attempted transfer of obscene material to a minor,
                  and CSAM-related offenses.
                </>
              }
              whyIncluded={
                <>
                  The former teacher role places the case inside the larger pattern
                  of child-facing professional trust and school-linked legitimacy.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Middle District of Florida",
                  href: "https://www.justice.gov/usao-mdfl/pr/former-pinellas-teacher-sentenced-20-years-prison-child-sexual-abuse-offenses",
                },
              ]}
            />

            <CaseRow
              emoji="🤸"
              name="Sean Gardner"
              role="Former gymnastics coach"
              jurisdiction="Mississippi / Iowa / federal"
              stage="Guilty plea"
              date="May 13, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Gardner pleaded guilty to producing CSAM after secretly recording
                  minor gymnasts in a bathroom at a gym where he coached.
                </>
              }
              whyIncluded={
                <>
                  Direct youth-sports access, a SafeSport referral, and misuse of a
                  private athletic setting make trust and oversight central.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Southern District of Mississippi",
                  href: "https://www.justice.gov/usao-sdms/pr/former-gymnastics-coach-pleads-guilty-production-child-sexual-abuse-material",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Bradley Quillen"
              role="Former Rogers Middle School teacher and coach"
              jurisdiction="Arkansas / federal"
              stage="Sentenced"
              date="May 13–14, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Quillen was sentenced to more than 31 years for sexual
                  exploitation and online coercion/enticement of minors.
                </>
              }
              whyIncluded={
                <>
                  School and coaching authority are central because the case
                  involved targeting minors across school communities.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Arkansas",
                  href: "https://www.justice.gov/usao-wdar/pr/rogers-middle-school-teacher-and-coach-sentenced-more-31-years-prison-online",
                },
              ]}
            />

            <CaseRow
              emoji="🎭"
              name="Brian Hinds"
              role="Former high-school theater teacher"
              jurisdiction="Kentucky / federal"
              stage="Sentenced"
              date="May 21, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Hinds, a former theater teacher, was sentenced to 12 years and 7
                  months for CSAM distribution and possession offenses.
                </>
              }
              whyIncluded={
                <>
                  Youth-performing-arts settings can create mentorship, credibility,
                  and trusted adult access beyond the standard classroom.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Kentucky",
                  href: "https://www.justice.gov/usao-wdky/pr/former-high-school-teacher-sentenced-12-years-and-7-months-federal-prison-child",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="Seth Brummond"
              role="Former Lee’s Summit West High School teacher"
              jurisdiction="Missouri / federal"
              stage="Sentenced"
              date="May 6, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Brummond, a former teacher, was sentenced to 12 years for
                  distributing CSAM.
                </>
              }
              whyIncluded={
                <>
                  Teacher status and public-school trust place the sentencing
                  inside a child-facing professional-authority frame.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Western District of Missouri",
                  href: "https://www.justice.gov/usao-wdmo/pr/former-lees-summit-teacher-sentenced-12-years-distributing-child-pornography",
                },
              ]}
            />

            <CaseRow
              emoji="🏀"
              name="Lee Anthony Bogan Jr."
              role="Former high-school basketball coach"
              jurisdiction="Missouri / federal"
              stage="Sentenced"
              date="May 6, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Bogan, a former coach, was sentenced to 90 months for sending
                  explicit photos to high-school students and sexualized
                  communications.
                </>
              }
              whyIncluded={
                <>
                  Coach-student access and school-athletics authority make the
                  relationship between trust, supervision, and opportunity central.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Eastern District of Missouri",
                  href: "https://www.justice.gov/usao-edmo/pr/former-basketball-coach-sentenced-90-months-prison-sending-sexually-explicit-photos",
                },
              ]}
            />

            <CaseRow
              emoji="🏫"
              name="William Michael Haslach"
              role="Former school-district employee"
              jurisdiction="Minnesota / federal"
              stage="Guilty plea"
              date="May 7, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Haslach pleaded guilty to using AI technology to produce child
                  sexual-abuse imagery of children in his care.
                </>
              }
              whyIncluded={
                <>
                  School-district employment and children-in-care access make the
                  case a modern example of how trusted proximity can be exploited
                  in ways public-warning systems do not anticipate.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Minnesota",
                  href: "https://www.justice.gov/usao-mn/pr/former-school-district-employee-pleads-guilty-using-ai-technology-produce-sexual-abuse",
                },
              ]}
            />

            <CaseRow
              emoji="🏀"
              name="Christopher Maurice Fernandes"
              role="Former paraeducator and basketball coach"
              jurisdiction="Connecticut"
              stage="Sentenced"
              date="May 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Fernandes, a former school employee and coach, was sentenced in
                  a student sexual-assault case.
                </>
              }
              whyIncluded={
                <>
                  Paraeducator and coaching roles both create student access,
                  school credibility, and adult authority inside youth-facing
                  systems.
                </>
              }
              sources={[
                {
                  label: "News-Times",
                  href: "https://www.newstimes.com/news/article/new-fairfield-christopher-fernandes-sentenced-ct-22280265.php",
                },
              ]}
            />

            <Subgroup>Business / institutional access</Subgroup>

            <CaseRow
              emoji="🏨"
              name="Kavankumar Patel"
              role="Hotel employee"
              jurisdiction="Nebraska / federal"
              stage="Sentenced"
              date="May 26–28, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Patel, a hotel employee, was sentenced to 10 years in a
                  sex-trafficking case involving minors.
                </>
              }
              whyIncluded={
                <>
                  Lodging workplace access and a commercial setting matter because
                  exploitation can be facilitated by ordinary business
                  infrastructure, not only by formal caregiver roles.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Nebraska",
                  href: "https://www.justice.gov/usao-ne/pr/illegal-alien-india-sentenced-10-years-homeland-security-task-force-investigation-sex",
                },
              ]}
            />

            <Subgroup>Wealth / cross-border exploitation</Subgroup>

            <CaseRow
              emoji="🌐"
              name="Ramon Arellano Sandoval"
              role="Tennessee man with cross-border commercial access"
              jurisdiction="Florida / Colombia / federal"
              stage="Sentenced"
              date="May 27, 2026"
              registry="No prior registration noted"
              summary={
                <>
                  Sandoval was sentenced to 30 years for attempted sex trafficking
                  of a minor and attempted production of CSAM after traveling
                  overseas.
                </>
              }
              whyIncluded={
                <>
                  Money, travel, and commercial leverage created access outside
                  ordinary stranger-danger framing, making status and cross-border
                  opportunity part of the accountability pattern.
                </>
              }
              sources={[
                {
                  label: "DOJ / USAO Southern District of Florida",
                  href: "https://www.justice.gov/usao-sdfl/pr/tennessee-man-sentenced-30-years-prison-attempted-sex-trafficking-minor-and-attempted",
                },
              ]}
            />
          </Section>

          <Section title="Monitoring Items / Watchlist" eyebrow="What to follow">
            <div className="space-y-3 text-sm leading-7 text-slate-800">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Brandon McGibbon:
                </span>{" "}
                watch for superseding indictment, additional victims, SDPD
                disciplinary records, detention, plea, or trial developments.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Kevin Hedgpeth:
                </span>{" "}
                high-priority public-official/status case; monitor trial schedule,
                victim-count updates, and any local political-institution response.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Treva Edwards / Christine Edwards:
                </span>{" "}
                track forced-labor and sex-trafficking proceedings and whether the
                congregational-control evidence expands.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Greenville County group case:
                </span>{" "}
                monitor official charging documents and bond or trial developments;
                the public-safety-role overlap makes it a major Accountability
                Watch candidate.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-black text-slate-950">
                  Anthony Odiong:
                </span>{" "}
                sentencing and institutional-response reporting could make this one
                of the strongest clergy-accountability follow-ups from the month.
              </div>
            </div>
          </Section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-start gap-3">
              <Info className="mt-1 h-5 w-5 flex-none text-slate-500" />
              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950">
                  Legal and registry note
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                  <p>
                    Arrests, charges, indictments, and civil allegations are not
                    convictions. Defendants are presumed innocent unless and until
                    proven guilty in court. Convictions, pleas, and sentencings are
                    identified according to their procedural posture and cited
                    source language.
                  </p>
                  <p>
                    Registry-status notes are limited to reviewed public source
                    material. Under the current series display convention, “Registry
                    status not mentioned” is displayed as “Registry: No prior
                    registration noted” to preserve the prevention-policy frame
                    without inventing registry history.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 