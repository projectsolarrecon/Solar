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
  | "Borderline / source-limited"
  | string;

type RegistryStatus =
  | "No prior registration noted"
  | "Previously registered"
  | "Registry status not mentioned";

type SourceLink = {
  label: string;
  href: string;
};

type CaseItem = {
  name: string;
  role: string;
  jurisdiction: string;
  stage: Stage;
  date: string;
  summary: React.ReactNode;
  registry: RegistryStatus;
  sources: SourceLink[];
  emoji?: string;
  subgroup: string;
  whyIncluded: React.ReactNode;
};

export const teaserHighlights = [
  "December 2025 centered on trusted access: schools, youth sports, clergy, law enforcement, corrections, healthcare, and military settings all appeared in the approved case set.",
  "Law-enforcement and corrections cases were especially prominent, including police officers, a tribal police officer, and a corrections officer accused or adjudicated in cases tied to public trust or custodial power.",
  "The supplemental status-access additions broadened the frame beyond formal child-facing roles, showing how wealth, celebrity, finance prestige, entertainment power, and public profile can also create leverage and access.",
  "Registry history was generally not reported in the reviewed public sources, reinforcing why these cases are better understood through authority, legitimacy, access, institutional response, and delayed intervention.",
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
    "Borderline / source-limited": "border-amber-300 bg-amber-50 text-amber-900",
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
  jurisdiction,
  stage,
  date,
  summary,
  registry,
  sources,
  emoji = "",
  whyIncluded,
}: CaseItem) {
  return (
    <article className="mb-5 rounded-2xl border border-slate-300/80 bg-slate-50/80 p-4 shadow-md shadow-slate-200/60 last:mb-0 sm:p-5">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            {emoji && <span className="text-xl">{emoji}</span>}
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

function renderCaseGroups(cases: CaseItem[]) {
  let currentSubgroup = "";

  return cases.map((item) => {
    const showSubgroup = item.subgroup !== currentSubgroup;
    currentSubgroup = item.subgroup;

    return (
      <React.Fragment key={`${item.name}-${item.date}`}>
        {showSubgroup && <Subgroup>{item.subgroup}</Subgroup>}
        <CaseRow {...item} />
      </React.Fragment>
    );
  });
}
const newArrests: CaseItem[] = [
  {
    name: "Elias David",
    role: "Youth volleyball coach; reported also as Department of Defense firefighter",
    jurisdiction: "Hawaii / federal",
    stage: "Charged / Indicted",
    date: "Dec. 3–5, 2025",
    emoji: "🏐",
    subgroup: "Youth sports / youth groups",
    summary:
      "Charged in a federal minor-exploitation case involving a student connected to his coaching role.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Direct role-access case involving a youth coach and a minor connected to that coaching environment.",
    sources: [
      {
        label: "DOJ / USAO Hawaii",
        href: "https://www.justice.gov/usao-hi/pr/waimanalo-man-charged-producing-child-pornography-his-minor-volleyball-student",
      },
    ],
  },
  {
    name: "Isaac Nielsen",
    role: "Roanoke Rapids Police Department officer",
    jurisdiction: "North Carolina / federal",
    stage: "Arrested / Charged",
    date: "Dec. 1–5, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary:
      "Charged in a federal child-exploitation-material case while employed by the police department.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Law-enforcement authority and public trust are central to the accountability frame, even where the alleged conduct is not tied to an on-duty complainant.",
    sources: [
      {
        label: "DOJ / USAO Eastern District of North Carolina",
        href: "https://www.justice.gov/usao-ednc/pr/roanoke-rapids-police-officer-arrested-and-charged-child-exploitation-offenses",
      },
    ],
  },
  {
    name: "Amber Nicole Ferguson",
    role: "Former Athens-Clarke County police officer",
    jurisdiction: "Georgia / federal",
    stage: "Charged / Indicted",
    date: "Dec. 9, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary: "Indicted in a federal child-exploitation case.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Former officer status makes this a public-trust case; DOJ framed the allegations as a betrayal of law-enforcement responsibility.",
    sources: [
      {
        label: "DOJ / USAO Northern District of Georgia",
        href: "https://www.justice.gov/usao-ndga/pr/former-athens-clarke-county-police-officer-charged-child-exploitation-and-bestiality",
      },
    ],
  },
  {
    name: "Myles S. Schumaker",
    role: "Middleton Police Department patrol officer",
    jurisdiction: "Wisconsin / federal",
    stage: "Charged / Indicted",
    date: "Dec. 16–19, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary: "Indicted in a federal minor-enticement case.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Police authority and public legitimacy make the case editorially relevant even where the alleged conduct is not framed as an on-duty offense.",
    sources: [
      {
        label: "DOJ / USAO Eastern District of Wisconsin",
        href: "https://www.justice.gov/usao-edwi/pr/middleton-police-officer-indicted-federal-child-sex-offense",
      },
    ],
  },
  {
    name: "Karl Eugene Leslie",
    role: "White Mountain Apache Tribal Police officer",
    jurisdiction: "Arizona / federal / Fort Apache Indian Reservation",
    stage: "Charged / Indicted",
    date: "Dec. 23, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary:
      "Indicted in an alleged on-duty abuse-of-authority case involving multiple complainants.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "High-value authority-abuse case: alleged misconduct under color of law while acting as an officer.",
    sources: [
      {
        label: "DOJ / USAO Arizona",
        href: "https://www.justice.gov/usao-az/pr/tribal-police-officer-charged-sexually-abusing-three-victims-while-duty-fbi-seeks-0",
      },
    ],
  },
  {
    name: "Sebastian Flores-Huamani",
    role: "Atlantic County Justice Facility corrections officer",
    jurisdiction: "New Jersey / county",
    stage: "Arrested / Charged",
    date: "Dec. 2, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary:
      "Charged with alleged misconduct involving an incarcerated person.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Clear custodial-power case: the alleged complainant was incarcerated and the accused was a corrections officer.",
    sources: [
      {
        label: "Atlantic County Prosecutor",
        href: "https://assets.opspolice.network/resources/agency/182/pdf/20251203-pJb9nNxY6UJbo8AX.pdf",
      },
      {
        label: "NBC Philadelphia",
        href: "https://www.nbcphiladelphia.com/news/local/atlantic-county-corrections-officer-charged-sexual-assault-inmate/4047250/",
      },
    ],
  },
  {
    name: "Joseph Lyle Campbell",
    role: "Former youth pastor at Eastland Assembly of God Church",
    jurisdiction: "Oklahoma / state",
    stage: "Charged / Indicted",
    date: "Dec. 17, 2025",
    emoji: "⛪",
    subgroup: "Clergy / religious institutions",
    summary:
      "Indicted in a historical abuse case tied to his youth-pastor role.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Faith-based authority, youth access, and delayed accountability make this a strong Accountability Watch case.",
    sources: [
      {
        label: "U.S. Marshals",
        href: "https://www.usmarshals.gov/news/press-release/us-marshals-arrest-pastor-accused-of-raping-and-molesting-underage-girls-1970s-0",
      },
    ],
  },
  {
    name: "Martin Daryl Waskowski",
    role: "Elementary school teacher",
    jurisdiction: "Michigan / federal",
    stage: "Charged / Indicted",
    date: "Dec. 19, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Charged in a federal child-exploitation-material case following a border search and investigation.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Educator role is independently relevant because schools grant trusted access to children; DOJ identified him as an elementary school teacher.",
    sources: [
      {
        label: "DOJ / USAO Eastern District of Michigan",
        href: "https://www.justice.gov/usao-edmi/pr/elementary-school-teacher-charged-sexual-exploitation-minor-and-possession-and",
      },
    ],
  },
  {
    name: "Dennis Adlai Hernandez",
    role: "Former elementary school teacher and former school-district employee",
    jurisdiction: "Missouri / federal",
    stage: "Superseding indictment",
    date: "Dec. 10–11, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Charged with additional federal counts in a child-exploitation-material case involving multiple alleged minor victims.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Former elementary-school role and multi-victim allegations place this within the school-trust and access pattern.",
    sources: [
      {
        label: "DOJ / USAO Western District of Missouri",
        href: "https://www.justice.gov/usao-wdmo/pr/former-elementary-school-teacher-charged-child-pornography-offenses",
      },
    ],
  },
  {
    name: "Katherine Albarado",
    role: "Former St. Mary Parish high school teacher",
    jurisdiction: "Louisiana / federal",
    stage: "Charged / Indicted",
    date: "Dec. 17, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Indicted in a student-enticement case; the DOJ release was published later but identifies the indictment date as Dec. 17, 2025.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Direct teacher-student authority case; included because the meaningful procedural event occurred inside the December window.",
    sources: [
      {
        label: "DOJ / USAO Western District of Louisiana",
        href: "https://www.justice.gov/usao-wdla/pr/former-st-mary-parish-teacher-indicted-attempting-entice-one-her-students-engage",
      },
    ],
  },
  {
    name: "Ciara Picard",
    role: "Former Maloney High School music teacher",
    jurisdiction: "Connecticut / local",
    stage: "Arrested / Charged",
    date: "Dec. 2–10, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Reported charged in connection with alleged misconduct involving a former student.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Clear teacher-student authority logic and in-window surrender/arrest; source support remains media-only but from identifiable local reporting.",
    sources: [
      {
        label: "WFSB",
        href: "https://www.wfsb.com/2025/12/09/former-maloney-high-school-teacher-charged-after-alleged-inappropriate-relationship-with-student/",
      },
    ],
  },
  {
    name: "Scott M. Jeffers",
    role: "Johnstown High School teacher and coach",
    jurisdiction: "New York / state",
    stage: "Arrested / Charged",
    date: "Dec. 11, 2025",
    emoji: "🏫",
    subgroup: "Education / youth sports",
    summary:
      "Arrested after allegations involving inappropriate communications with a student; State Police noted his coaching roles gave added access.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "School and coaching access are central; the official source identifies role-based access as part of the accountability concern.",
    sources: [
      {
        label: "New York State Police",
        href: "https://troopers.ny.gov/news/state-police-arrest-johnstown-high-school-teacher-following-investigation",
      },
    ],
  },
  {
    name: "Marvin Douglas Rotenberry",
    role: "Municipal court judge for Hitchcock, Santa Fe, and Bayou Vista",
    jurisdiction: "Texas / local",
    stage: "Arrested / Charged",
    date: "Dec. 2, 2025",
    emoji: "⚖️",
    subgroup: "Politics / civic leadership",
    summary: "Charged in a historical child-abuse case.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Judicial office is a high-trust public role; the charges create a public-authority accountability case even though the alleged conduct is historical.",
    sources: [
      {
        label: "KPRC / Click2Houston",
        href: "https://www.click2houston.com/news/local/2025/12/03/galveston-county-municipal-court-judge-charged-with-sexually-assaulting-two-children/",
      },
    ],
  },
  {
    name: "Blaine McGraw",
    role: "U.S. Army OB-GYN at Fort Hood / Carl R. Darnall Army Medical Center",
    jurisdiction: "Texas / military",
    stage: "Charged / Indicted",
    date: "Dec. 9–12, 2025",
    emoji: "🏥",
    subgroup: "Healthcare / military institution",
    summary:
      "Army physician formally charged in a patient-privacy and professional-misconduct case involving numerous alleged victims.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "High-value accountability case involving medical authority, patient vulnerability, military institutional setting, and alleged systemic oversight failures.",
    sources: [
      {
        label: "Austin American-Statesman",
        href: "https://www.statesman.com/news/crime/article/fort-hood-texas-army-obgyn-sexual-criminal-charge-21234978.php",
      },
    ],
  },
  {
    name: "Edward Gene Smith",
    role: "Former senior bank executive / former Citi managing director",
    jurisdiction: "New York / federal",
    stage: "Superseding indictment",
    date: "Dec. 23, 2025",
    emoji: "🏦",
    subgroup: "Finance / executive status",
    summary:
      "Charged in a multi-count federal case involving alleged exploitation offenses and obstruction; prosecutors alleged he used money, access, and influence.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Strong status-access fit. The DOJ release identifies Smith as a former senior finance executive and alleges access, money, and control as part of the alleged conduct; later reporting reinforced the finance/prestige-access angle.",
    sources: [
      {
        label: "DOJ / USAO Southern District of New York",
        href: "https://www.justice.gov/usao-sdny/pr/former-bank-executive-edward-gene-smith-charged-committing-multiple-sex-crimes-child",
      },
    ],
  },
  {
    name: "Russell Brand",
    role: "Comedian, actor, media figure / podcaster",
    jurisdiction: "United Kingdom",
    stage: "Charged / Indicted",
    date: "Dec. 23, 2025",
    emoji: "🎙️",
    subgroup: "Celebrity / media figure status",
    summary:
      "UK prosecutors authorized two additional charges involving two additional women in an existing case; Brand denies the allegations.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Public-profile and celebrity-access case. The December event was a new charging decision, not merely renewed coverage; CPS confirmed the additional charges on Dec. 23, 2025.",
    sources: [
      {
        label: "Crown Prosecution Service",
        href: "https://www.cps.gov.uk/london-south/news/cps-authorises-further-charges-against-russell-brand",
      },
    ],
  },
];
const pleasConvictionsSentencings: CaseItem[] = [
  {
    name: "Jacob Ryan Barnett",
    role: "Former youth pastor",
    jurisdiction: "Virginia / federal",
    stage: "Guilty plea",
    date: "Dec. 10, 2025",
    emoji: "⛪",
    subgroup: "Clergy / religious institutions",
    summary:
      "Pleaded guilty in a federal child-exploitation case involving online contact with a minor.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Religious youth role and community trust make this a SOLAR-fit case even without a direct in-church victim-care nexus.",
    sources: [
      {
        label: "DOJ / USAO Western District of Virginia",
        href: "https://www.justice.gov/usao-wdva/pr/former-youth-pastor-pleads-guilty-attempted-sexual-exploitation-child",
      },
    ],
  },
  {
    name: "Hunter Chase Eubanks",
    role: "Former church worship leader and church music internship leader",
    jurisdiction: "Florida / federal",
    stage: "Sentenced",
    date: "Dec. 12, 2025",
    emoji: "⛪",
    subgroup: "Clergy / religious institutions",
    summary:
      "Sentenced in a federal child-exploitation case involving a minor connected to the church setting.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Church leadership and youth-facing internship access are central to the accountability frame.",
    sources: [
      {
        label: "DOJ / USAO Northern District of Florida",
        href: "https://www.justice.gov/usao-ndfl/pr/former-tallahassee-church-worship-leader-sentenced-17-years-federal-prison-sexual",
      },
    ],
  },
  {
    name: "Aaron Anderson",
    role: "Former McCreary County High School assistant principal",
    jurisdiction: "Kentucky / federal",
    stage: "Sentenced",
    date: "Dec. 19, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Sentenced in a minor-enticement case involving school technology and school authority.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Strong institutional-access case: school role, school-issued tools, and administrator authority were all relevant.",
    sources: [
      {
        label: "DOJ / USAO Eastern District of Kentucky",
        href: "https://www.justice.gov/usao-edky/pr/former-mccreary-county-assistant-principal-sentenced-attempted-online-enticement-minor",
      },
    ],
  },
  {
    name: "John Magee Gavin",
    role: "Former Boston science teacher",
    jurisdiction: "Massachusetts / federal",
    stage: "Guilty plea",
    date: "Dec. 11, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Pleaded guilty in a child-exploitation case involving online contact with minors.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Educator role, online access to minors, and in-window plea place this within the school-trust accountability pattern.",
    sources: [
      {
        label: "DOJ / USAO Massachusetts",
        href: "https://www.justice.gov/usao-ma/pr/former-boston-teacher-pleads-guilty-child-exploitation",
      },
    ],
  },
  {
    name: "Dariel Javier Quiles-Davila",
    role: "Former Kissimmee Police Department officer",
    jurisdiction: "Florida / federal",
    stage: "Sentenced",
    date: "Dec. 22, 2025",
    emoji: "🛡️",
    subgroup: "Law enforcement / corrections",
    summary:
      "Sentenced in a child-exploitation-material case after meeting the minor while on duty.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Direct on-duty access case involving police authority and subsequent private contact.",
    sources: [
      {
        label: "DOJ / USAO Middle District of Florida",
        href: "https://www.justice.gov/usao-mdfl/pr/former-kissimmee-police-officer-sentenced-seven-years-federal-prison-receiving-child",
      },
    ],
  },
  {
    name: "Stephen James Lemelin",
    role: "Former high school wrestling coach",
    jurisdiction: "Massachusetts / federal",
    stage: "Convicted",
    date: "Dec. 3–4, 2025",
    emoji: "🤼",
    subgroup: "Youth sports / education",
    summary:
      "Convicted of attempting to send illegal obscene material to a minor; sentencing occurred later.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Former coach role gives the case a public-trust and youth-access hook; the December conviction is the in-window procedural event.",
    sources: [
      {
        label: "DOJ / USAO Massachusetts",
        href: "https://www.justice.gov/usao-ma/pr/former-high-school-wrestling-coach-convicted-attempting-send-obscene-material-minor",
      },
    ],
  },
  {
    name: "Erick Joseph Kristianson",
    role: "Former competitive cheerleading coach, assistant high-school cheer coach, and YMCA camp counselor",
    jurisdiction: "California / state",
    stage: "Convicted",
    date: "Dec. 16, 2025",
    emoji: "📣",
    subgroup: "Youth sports / youth groups",
    summary:
      "Convicted of multiple felony abuse counts connected to youth sports and camp access.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Major youth-access case involving multiple trusted child-facing roles over time; strong fit for the institutional-access pattern.",
    sources: [
      {
        label: "Orange County District Attorney",
        href: "https://orangecountyda.org/press/former-orange-county-cheerleading-coach-convicted-of-23-felony-counts-for-molesting-ten-young-girls-erick-kristianson-is-also-charged-in-florida-with-exposing-himself-to-three-young-athletes-he-coache/",
      },
    ],
  },
];

const civilAdministrativeActions: CaseItem[] = [
  {
    name: "Tyler Perry",
    role: "Filmmaker, studio founder, billionaire entertainment figure",
    jurisdiction: "California / civil",
    stage: "Civil lawsuit filed",
    date: "Dec. 25–26, 2025",
    emoji: "🎬",
    subgroup: "Celebrity / entertainment power",
    summary:
      "Actor Mario Rodriguez filed a civil misconduct lawsuit alleging Perry leveraged Hollywood power and access to acting opportunities; Perry denies the allegations.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Direct status-and-career-access case. Credible reporting framed the lawsuit around alleged career access and entertainment-industry power dynamics.",
    sources: [
      {
        label: "Associated Press",
        href: "https://apnews.com/article/tyler-perry-sexual-assault-lawsuit-actor-6da2f1833b43fd4192cdac52dc7c3c63",
      },
    ],
  },
];

const borderlineCases: CaseItem[] = [
  {
    name: "Edwardo Cantu",
    role: "McCollum High School teacher",
    jurisdiction: "Texas / local",
    stage: "Borderline / source-limited",
    date: "Dec. 2–3, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Reported arrested after a student alleged classroom misconduct.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Strong teacher-student authority logic, but source support remains local-media-only in this pass.",
    sources: [
      {
        label: "San Antonio Express-News",
        href: "https://www.expressnews.com/news/article/san-antonio-teacher-arrested-faces-sexual-21219607.php",
      },
    ],
  },
  {
    name: "Sydnee Graf",
    role: "Jefferson County elementary teacher",
    jurisdiction: "Kentucky / local",
    stage: "Borderline / source-limited",
    date: "Dec. 16, 2025",
    emoji: "🏫",
    subgroup: "Education",
    summary:
      "Reported charged over alleged inappropriate communications with an elementary student.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Strong authority/access fit, but source support is local-media-only and precise charging status should be verified before full inclusion.",
    sources: [
      {
        label: "WAVE",
        href: "https://www.wave3.com/2025/12/16/jcps-elementary-teacher-charged-with-having-sexual-conversation-with-student/",
      },
    ],
  },
  {
    name: "Miguel Ángel García-López",
    role: "Former track-and-field coach",
    jurisdiction: "Puerto Rico / federal",
    stage: "Borderline / source-limited",
    date: "Arrested Dec. 12, 2025; superseding indictment later",
    emoji: "🏃",
    subgroup: "Youth sports / youth groups",
    summary: "Charged in a federal child-exploitation case.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "The December arrest is in-window and the coach role fits, but the strongest located DOJ source is outside the December publication window.",
    sources: [
      {
        label: "DOJ / USAO Puerto Rico",
        href: "https://www.justice.gov/usao-pr/pr/former-track-field-coach-charged-superseding-indictment-child-exploitation",
      },
    ],
  },
  {
    name: "Maxwell Mandell",
    role: "Babysitter",
    jurisdiction: "Virginia / local",
    stage: "Borderline / source-limited",
    date: "Arrested in December 2025; trial later set",
    emoji: "🏠",
    subgroup: "Household / caregiver authority",
    summary:
      "Accused in a child-safety case involving children in his care.",
    registry: "Registry status not mentioned",
    whyIncluded:
      "Strong caregiver-access fit, but the located source was a later trial-setting / new-charges story rather than a contemporaneous December official release.",
    sources: [
      {
        label: "Cville Right Now",
        href: "https://cvillerightnow.com/news/208802-trial-set-for-crozet-babysitter-facing-sexual-assault-charges/",
      },
    ],
  },
];

const watchlistItems = [
  "Blaine McGraw / Fort Hood OB-GYN: monitor Army charging documents, preliminary-hearing materials, victim count, civil filings, congressional or inspector-general activity, and any institutional findings about missed warnings or lack of safeguards.",
  "Karl Eugene Leslie / tribal police officer: monitor arraignment, additional-complainant disclosures, FBI victim-information updates, and tribal/federal institutional response.",
  "Edward Gene Smith / former bank executive: monitor further proceedings and reporting on financial-institution oversight, community influence, money, access, and control mechanisms.",
  "Tyler Perry / Mario Rodriguez civil case: monitor motions, venue issues, industry response, Lionsgate-related claims, and whether the court narrows or sustains the claims.",
  "Russell Brand: monitor CPS and court proceedings, plea posture, trial scheduling, and any further charging or court actions.",
  "Ciara Picard, Edwardo Cantu, Sydnee Graf: follow up for official police, prosecutor, or court records to replace or strengthen media-only support.",
  "Miguel Ángel García-López and Maxwell Mandell: track whether official or contemporaneous December records become available that better support full inclusion.",
];
export default function AccountabilityWatch20260101() {
  const pageTitle = "Accountability Watch — December 2025 Roundup | SOLAR";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="December 2025 Accountability Watch roundup documenting cases involving authority, access, public trust, institutional legitimacy, and status-based influence."
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
                December 2025 roundup
              </Badge>
              <Badge icon={<Info className="h-4 w-4" />}>
                Authority, access, and legitimacy
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
                conditions that can allow risk to sit in plain sight inside
                schools, youth programs, churches, public-safety agencies,
                healthcare systems, and elite social spaces.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-slate-100">
              <p className="font-black uppercase tracking-[0.18em] text-slate-300">
                Framing note
              </p>
              <p className="mt-2">
                Arrests, charges, indictments, and civil allegations are not
                findings of guilt. Entries are included because the approved
                December case set involved public trust, child-facing access,
                professional or institutional authority, custodial power,
                status-based influence, or formal accountability action.
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
              <p>
                December’s through-line is trusted access and legitimacy. The
                included cases cluster around roles that gave adults credibility,
                proximity, privacy, institutional trust, or social leverage:
                teachers, coaches, police and corrections officers, clergy, a
                military physician, a judge, a finance executive, entertainment
                figures, and other high-status public-facing roles.
              </p>
              <p>
                The strongest recurring sectors were education, law enforcement
                and corrections, clergy, youth sports, healthcare and military
                institutions, and status-based public influence. Several cases
                involved direct built-in access: teacher/student, coach/student,
                officer/on-duty contact, corrections officer/incarcerated
                person, doctor/patient, clergy/youth access, and celebrity or
                career-access allegations.
              </p>
              <p>
                The supplemental status-access cases matter because authority is
                not limited to formal child-facing roles. Wealth, celebrity,
                finance prestige, entertainment power, public profile, and elite
                social access can also create leverage, credibility,
                opportunity, or silence.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {teaserHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-7 text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <PullQuote>
                <p>
                  December was not a random collection of criminal cases. The
                  same access points appeared again and again: classrooms,
                  youth sports, ministry, public-safety agencies, custodial
                  settings, medical care, military institutions, finance
                  prestige, celebrity, and career power.
                </p>
              </PullQuote>
            </div>
          </Section>

          <Section title="New Arrests & Charges" eyebrow="Criminal procedure">
            {renderCaseGroups(newArrests)}
          </Section>

          <Section
            title="Pleas / Convictions / Sentencings"
            eyebrow="Adjudication and sentencing"
          >
            {renderCaseGroups(pleasConvictionsSentencings)}
          </Section>

          <Section
            title="Civil / Administrative Actions"
            eyebrow="Civil accountability"
          >
            {renderCaseGroups(civilAdministrativeActions)}
          </Section>

          <Section
            title="Source-Limited / Borderline Items"
            eyebrow="Monitor before full inclusion"
          >
            <p className="mb-5 text-sm leading-7 text-slate-700">
              These cases remain in a separate source-limited section because
              they fit the authority/access framework but have source
              limitations, timing limitations, or unresolved verification needs.
            </p>
            {renderCaseGroups(borderlineCases)}
          </Section>

          <Section title="Monitoring Items / Watchlist" eyebrow="Follow-up">
            <ul className="space-y-3 text-sm leading-7 text-slate-800">
              {watchlistItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
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
                Registry-status entries reflect the approved case set and
                reviewed public-source materials. Where sources did not identify
                prior registration history, this page uses the current series
                display convention: “Registry status not mentioned” is displayed
                as “Registry: No prior registration noted.” That convention
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