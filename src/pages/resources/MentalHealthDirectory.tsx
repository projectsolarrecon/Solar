import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideProse,
  GuideCallout,
  GuideIntro,
  QuickStartPanel,
  OfflineOptions,
  VerifyBeforeActing,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

type DirectoryResource = {
  label: string;
  description: string;
  href: string;
  badge?: string;
};

type StateOrganization = {
  state: string;
  org: string;
  href?: string;
  phone?: string;
  status?: string;
  note?: string;
};

const lastChecked = "May 10, 2026";

const crisisResources: DirectoryResource[] = [
  {
    label: "988 Suicide & Crisis Lifeline",
    description:
      "Call, text, or chat 988 for free, confidential crisis support in the United States. Use this first if someone may hurt themselves, feels unable to stay safe, or needs immediate emotional support.",
    href: "https://988lifeline.org/",
    badge: "24/7 crisis support",
  },
  {
    label: "988 Lifeline chat",
    description:
      "Online chat option for people who cannot safely or privately call. If you are on supervision or have internet restrictions, verify whether chat access is allowed before using a restricted device.",
    href: "https://chat.988lifeline.org/",
    badge: "Chat",
  },
  {
    label: "Crisis Text Line",
    description:
      "Text HOME to 741741 from anywhere in the United States for free, confidential support from a trained crisis counselor.",
    href: "https://www.crisistextline.org/",
    badge: "Text HOME to 741741",
  },
  {
    label: "SAMHSA National Helpline",
    description:
      "Free, confidential treatment referral and information service for mental health and substance-use concerns. Call 1-800-662-HELP (4357).",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
    badge: "Treatment referral",
  },
  {
    label: "FindTreatment.gov",
    description:
      "SAMHSA’s confidential treatment locator for mental health and substance-use services in the United States and territories. Always confirm details directly with the provider.",
    href: "https://findtreatment.gov/",
    badge: "Official locator",
  },
];

const peerSupportResources: DirectoryResource[] = [
  {
    label: "NARSOL",
    description:
      "National advocacy, education, state affiliate referrals, and community resources for people and families affected by sex offense laws and registries.",
    href: "https://www.narsol.org/",
    badge: "National advocacy",
  },
  {
    label: "NARSOL Connections",
    description:
      "A social platform intended for people on registries and sympathetic family or friends. Verify reporting requirements before creating any account or username.",
    href: "https://www.narsol.org/community/narsol-connections/",
    badge: "Peer connection",
  },
  {
    label: "NARSOL Fearless Project",
    description:
      "Support-group project for people on registries and adult family members or friends. Check current availability through NARSOL.",
    href: "https://www.narsol.org/community/fearless-project/",
    badge: "Support groups",
  },
  {
    label: "ACSOL meetings",
    description:
      "Alliance for Constitutional Sex Offense Laws meetings, calls, recordings, and support opportunities, especially useful for California readers and national observers.",
    href: "https://all4consolaws.org/acsol-monthly-meetings/",
    badge: "Meetings",
  },
  {
    label: "Women Against Registry",
    description:
      "Family and registrant support hotline and advocacy organization. WAR states that its support line is not professional counseling, treatment, or legal assistance.",
    href: "https://womenagainstregistry.org/page-1730789",
    badge: "Support hotline",
  },
  {
    label: "CURE-SORT",
    description:
      "Sex Offenders Restored through Treatment, an issue chapter of CURE. Provides information, correspondence, and support resources; it is not a treatment program or legal service.",
    href: "https://www.cure-sort.org/contact-us.html",
    badge: "Support / information",
  },
];

const clinicalResources: DirectoryResource[] = [
  {
    label: "ATSA Member Directory",
    description:
      "Provider referral directory from the Association for the Treatment and Prevention of Sexual Abuse. Use for treatment-focused provider searches; do not send clinical details through directory tools unless you understand the privacy limits.",
    href: "https://members.atsa.com/directory",
    badge: "Specialized provider directory",
  },
  {
    label: "Safer Society treatment referrals",
    description:
      "Directory of clinicians in North America who work with people who have sexually abused, people with problematic sexual behaviors, and survivors of abuse.",
    href: "https://safersociety.org/foundation/treatment-referrals/",
    badge: "Specialized treatment referrals",
  },
  {
    label: "IITAP Therapist Directory",
    description:
      "Directory for IITAP members and Certified Sex Addiction Therapists. Best suited for compulsive sexual behavior, betrayal trauma, addiction, and related treatment needs; verify court/supervision compatibility separately.",
    href: "https://iitap.com/page/TherapistDirectory",
    badge: "CSAT / addiction treatment",
  },
  {
    label: "AAMFT Find a Therapist",
    description:
      "Marriage and family therapist locator. Useful for family, relationship, trauma, anxiety, depression, and reintegration stress; not all providers handle forensic or registry-related issues.",
    href: "https://www.aamft.org/Directories/Find_a_Therapist.aspx",
    badge: "Family therapy",
  },
  {
    label: "NCSBY",
    description:
      "National Center on the Sexual Behavior of Youth. Information and training resources for youth problematic sexual behavior, caregivers, and professionals.",
    href: "https://www.ncsby.org/",
    badge: "Youth PSB resources",
  },
];

const legalReferralResources: DirectoryResource[] = [
  {
    label: "NACDL Find a Lawyer",
    description:
      "Criminal-defense lawyer directory. Use when you need attorney referrals, especially for criminal, appellate, supervision, or post-conviction questions.",
    href: "https://www.nacdl.org/Content/FindaLawyer",
    badge: "Attorney directory",
  },
  {
    label: "NARSOL contact form",
    description:
      "NARSOL says state affiliates and local contacts are its primary source for local affairs and that it does not provide legal advice or recommend attorneys.",
    href: "https://www.narsol.org/contact-us/",
    badge: "Local referral routing",
  },
];

const stateOrganizations: StateOrganization[] = [
  {
    state: "Alabama",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Alaska",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Arizona",
    org: "Arizonans for Rational Sex Offense Laws",
    href: "https://azrsol.org",
    phone: "623-296-2904",
    status: "NARSOL affiliate",
  },
  {
    state: "Arkansas",
    org: "Arkansas Time After Time",
    href: "https://arkansastimeaftertime.org",
    phone: "501-444-2828",
    status: "NARSOL affiliate",
  },
  {
    state: "California",
    org: "Alliance for Constitutional Sex Offense Laws",
    href: "https://all4consolaws.org",
    phone: "279-444-7956",
    status: "National/state advocacy organization; not shown on NARSOL affiliate page",
  },
  {
    state: "Colorado",
    org: "Colorado Advocates for Change",
    href: "https://advocates4change.org/registry-rights/",
    status: "NARSOL affiliate",
  },
  {
    state: "Connecticut",
    org: "One Standard of Justice",
    href: "https://onestandardofjustice.org",
    phone: "203-680-0567",
    status: "NARSOL affiliate",
  },
  {
    state: "Delaware",
    org: "Delaware Advocates for the Reform of Sexual Offense Laws",
    href: "https://darsol.org",
    phone: "302-635-0468",
    status: "NARSOL associated group",
  },
  {
    state: "District of Columbia",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Florida",
    org: "Florida Action Committee",
    href: "https://floridaactioncommittee.org",
    phone: "833-273-7325",
    status: "NARSOL affiliate",
  },
  {
    state: "Georgia",
    org: "Restore Georgia",
    href: "https://restore-georgia.org",
    phone: "678-962-7765",
    status: "NARSOL affiliate",
  },
  {
    state: "Hawaii",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Idaho",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Illinois",
    org: "Illinois Voices",
    href: "https://ilvoices.com",
    phone: "888-686-4237",
    status: "NARSOL affiliate",
  },
  {
    state: "Indiana",
    org: "Indiana Voices",
    href: "https://indianavoices.org",
    phone: "317-662-0250",
    status: "NARSOL associated group",
  },
  {
    state: "Iowa",
    org: "Iowans Unafraid",
    href: "https://www.iowansunafraid.org",
    phone: "515-518-7189",
    status: "NARSOL affiliate",
  },
  {
    state: "Kansas",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Kentucky",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Louisiana",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Maine",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Maryland",
    org: "Families Advocating Intelligent Registries",
    href: "https://fairregistry.org",
    phone: "301-779-1965",
    status: "NARSOL affiliate",
  },
  {
    state: "Massachusetts",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Michigan",
    org: "Michigan Citizens for Justice",
    href: "https://micitizensforjustice.com",
    status: "NARSOL associated group",
  },
  {
    state: "Minnesota",
    org: "Minnesota for Our Rights",
    phone: "651-755-4348",
    status: "NARSOL associated group",
  },
  {
    state: "Mississippi",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Missouri",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Montana",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Nebraska",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Nevada",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "New Hampshire",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "New Jersey",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "New Mexico",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "New York",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "North Carolina",
    org: "North Carolinians for Rational Sexual Offense Laws",
    href: "https://ncrsol.org",
    phone: "919-780-4510",
    status: "NARSOL affiliate",
  },
  {
    state: "North Dakota",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Ohio",
    org: "Ohio Rational Sex Offense Laws",
    href: "https://ohrsol.com",
    status: "NARSOL affiliate",
  },
  {
    state: "Oklahoma",
    org: "Oklahoma for Rational Sexual Offense Laws",
    href: "https://ok-rsol.org",
    phone: "405-294-4299",
    status: "NARSOL affiliate",
  },
  {
    state: "Oklahoma",
    org: "OK Voices",
    href: "https://ok-voices.com",
    phone: "918-261-1757",
    status: "NARSOL affiliate",
  },
  {
    state: "Oregon",
    org: "Oregon Voices",
    href: "https://www.oregonvoices.org",
    phone: "971-317-6868",
    status: "NARSOL affiliate",
  },
  {
    state: "Pennsylvania",
    org: "Pennsylvania Association for Rational Sex Offense Laws",
    href: "https://parsol.org",
    phone: "717-820-2237",
    status: "NARSOL affiliate",
  },
  {
    state: "Rhode Island",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "South Carolina",
    org: "South Carolinians for Rational Sex Offense Laws",
    href: "https://scrsol.org",
    status: "NARSOL affiliate",
  },
  {
    state: "South Dakota",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Tennessee",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Texas",
    org: "Texas Voices for Reason and Justice",
    href: "https://texasvoices.org",
    phone: "877-215-6688",
    status: "NARSOL affiliate",
  },
  {
    state: "Utah",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Vermont",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Virginia",
    org: "Safer Virginia",
    href: "https://safervirginia.org",
    phone: "864-525-9186",
    status: "NARSOL affiliate",
  },
  {
    state: "Washington",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "West Virginia",
    org: "West Virginians for Rational Sexual Offense Laws",
    href: "https://wvrsol.org",
    phone: "304-760-9030",
    status: "NARSOL associated group",
  },
  {
    state: "Wisconsin",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
  {
    state: "Wyoming",
    org: "No NARSOL affiliate listed",
    note: "Contact NARSOL for a local contact or regional coordinator.",
  },
];

const sourceLinks: DirectoryResource[] = [
  {
    label: "988 Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/",
    description: "Supports the crisis call/text/chat listing.",
  },
  {
    label: "Crisis Text Line",
    href: "https://www.crisistextline.org/",
    description: "Supports the HOME to 741741 crisis-text listing.",
  },
  {
    label: "SAMHSA National Helpline",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
    description: "Supports the free, confidential 24/7 treatment-referral listing.",
  },
  {
    label: "FindTreatment.gov",
    href: "https://findtreatment.gov/",
    description: "Supports the official federal treatment-locator listing.",
  },
  {
    label: "NARSOL State Affiliates",
    href: "https://www.narsol.org/about/affiliates/",
    description: "Supports the state organization list and affiliate/associated-group status.",
  },
  {
    label: "NARSOL Contact Us",
    href: "https://www.narsol.org/contact-us/",
    description:
      "Supports the instruction to contact NARSOL when no affiliate is listed and the note that NARSOL does not provide legal advice or recommend attorneys.",
  },
  {
    label: "NARSOL Connections",
    href: "https://www.narsol.org/community/narsol-connections/",
    description: "Supports the peer social-platform listing and social-media reporting caution.",
  },
  {
    label: "ACSOL Monthly Meetings",
    href: "https://all4consolaws.org/acsol-monthly-meetings/",
    description: "Supports the ACSOL meetings listing.",
  },
  {
    label: "Women Against Registry Contact / Support Hotline",
    href: "https://womenagainstregistry.org/page-1730789",
    description: "Supports WAR contact, hotline, live-hours, and non-clinical-support caveat.",
  },
  {
    label: "CURE-SORT Contact",
    href: "https://www.cure-sort.org/contact-us.html",
    description: "Supports CURE-SORT contact and mailing information.",
  },
  {
    label: "ATSA Member Directory",
    href: "https://members.atsa.com/directory",
    description: "Supports the specialized provider-directory listing and privacy caution.",
  },
  {
    label: "Safer Society Treatment Referrals",
    href: "https://safersociety.org/foundation/treatment-referrals/",
    description: "Supports the treatment-referral directory listing.",
  },
  {
    label: "IITAP Therapist Directory",
    href: "https://iitap.com/page/TherapistDirectory",
    description: "Supports the CSAT/IITAP therapist-directory listing.",
  },
  {
    label: "AAMFT Find a Therapist",
    href: "https://www.aamft.org/Directories/Find_a_Therapist.aspx",
    description: "Supports the marriage and family therapist locator listing.",
  },
  {
    label: "NCSBY",
    href: "https://www.ncsby.org/",
    description: "Supports the youth problematic-sexual-behavior resource listing.",
  },
  {
    label: "NACDL Find a Lawyer",
    href: "https://www.nacdl.org/Content/FindaLawyer",
    description: "Supports the attorney-directory listing.",
  },
];

export default function MentalHealthDirectory(): JSX.Element {
  const [stateQuery, setStateQuery] = useState("");
  const [showAllStates, setShowAllStates] = useState(false);

  const handlePrint = () => window.print();

  const normalizedStateQuery = stateQuery.trim().toLowerCase();

  const filteredStateOrganizations = useMemo(() => {
    if (!normalizedStateQuery) {
      return stateOrganizations;
    }

    return stateOrganizations.filter((item) => {
      const searchableText = [
        item.state,
        item.org,
        item.phone,
        item.status,
        item.note,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedStateQuery);
    });
  }, [normalizedStateQuery]);

  const visibleStateOrganizations = useMemo(() => {
    if (normalizedStateQuery || showAllStates) {
      return filteredStateOrganizations;
    }

    return stateOrganizations.slice(0, 8);
  }, [filteredStateOrganizations, normalizedStateQuery, showAllStates]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Mental Health & Support Directory | The SOLAR Project"
        description="A verified mental health, crisis, peer support, treatment, legal referral, and state organization directory for people and families affected by sex offense laws and registries."
        keywords="mental health directory, registry support, sex offense laws, crisis support, treatment referrals, NARSOL affiliates, SOLAR Project"
      />

      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 sm:py-16 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white transition-colors"
          >
            ← Back to Resources
          </Link>

          <div className="mt-5 inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            SOLAR Resource Guide
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Mental Health & Support Directory
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Crisis support, treatment directories, peer support, legal referral tools, and state organizations for people and families affected by sex offense laws and registry systems.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Guide
            </button>

            <a
              href="#sources"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Sources
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-200">
            Links last checked: {lastChecked}
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            This directory is for people who need support but do not know where to start: people on registries, people facing charges or supervision, people preparing for reentry, family members, partners, caregivers, and advocates.
          </p>
          <p>
            Start with immediate safety, then look for the right kind of support. A crisis line, peer group, therapist, attorney, and state advocacy organization do different jobs. You may need more than one kind of help.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="This is a directory, not legal or clinical advice">
          <p>
            Listings can change. A link in this guide does not mean the provider is available, affordable, licensed in your state, approved by a court, compatible with supervision, or right for your situation. Confirm details directly before relying on any listing.
          </p>
        </GuideCallout>

        <QuickStartPanel
          title="If you need help now"
          subtitle="Use these before trying to sort through the rest of the directory."
          icon="🆘"
          urgentActions={[
            <span>Call or text <strong>988</strong>, or use the 988 online chat, if you are in emotional distress or worried about staying safe.</span>,
            <span>Text <strong>HOME</strong> to <strong>741741</strong> to reach Crisis Text Line from anywhere in the United States.</span>,
          ]}
          nextActions={[
            <span>Ask for a local referral, mobile crisis option, or treatment provider if you need continuing support after the immediate conversation.</span>,
            <span>If you are under supervision, save the name of any provider or agency before attending, paying, or sharing details.</span>,
          ]}
          reminder={<span>You do not have to solve everything in one call. The first job is to get through the next safe step.</span>}
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Start here",
              title: "Crisis support",
              icon: "🆘",
              tone: "urgent",
              description: "Use 988, Crisis Text Line, or SAMHSA when someone needs immediate emotional support or treatment referral.",
            },
            {
              eyebrow: "Connection",
              title: "Peer and family support",
              icon: "🤝",
              tone: "family",
              description: "Find advocacy groups, support hotlines, and communities that understand registry-related stress.",
            },
            {
              eyebrow: "Care",
              title: "Clinical directories",
              icon: "🩺",
              tone: "info",
              description: "Search for therapists or specialized treatment providers, then verify fit, privacy, cost, and supervision compatibility.",
            },
            {
              eyebrow: "Local help",
              title: "State organizations",
              icon: "🗺️",
              tone: "neutral",
              description: "Use the compact state list to find NARSOL affiliates or learn when to contact NARSOL for a regional referral.",
            },
            {
              eyebrow: "Legal questions",
              title: "Attorney referrals",
              icon: "⚖️",
              tone: "legal",
              description: "Use legal directories for attorney searches. Advocacy groups generally cannot give legal advice.",
            },
            {
              eyebrow: "Before acting",
              title: "Verify details",
              icon: "✅",
              tone: "reminder",
              description: "Confirm provider availability, credentials, costs, confidentiality limits, and court or supervision requirements.",
            },
          ]}
        />

        <GuideSectionHeader
          id="crisis-support"
          number="1"
          title="Crisis and treatment-referral resources"
          subtitle="Use these when the need is immediate, urgent, or too heavy to carry alone."
        />

        <GuideSectionCard>
          <ResourceLinkGrid title="Immediate support and treatment locators" resources={crisisResources} />

          <GuideCallout tone="urgent" icon="🚨" title="When there is immediate danger">
            <p>
              If someone is in immediate physical danger, call local emergency services. If calling emergency services could create special risk because of supervision, warrants, housing, or family circumstances, 988 can still help talk through safer next steps in the moment.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="peer-support"
          number="2"
          title="Peer support, family support, and advocacy organizations"
          subtitle="These resources can reduce isolation, help families understand the system, and connect readers to people who know registry-related stress."
        />

        <GuideSectionCard>
          <ResourceLinkGrid title="National and community support" resources={peerSupportResources} />

          <GuideCallout tone="privacy" icon="🔐" title="Social platforms and registration rules">
            <p>
              Some people must report online identifiers, social media accounts, screen names, or internet activity. Before joining any online community, check supervision conditions, registry reporting rules, court orders, and device restrictions.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="clinical-care"
          number="3"
          title="Therapy and clinical-care directories"
          subtitle="Directories help you start a search. They do not replace careful screening."
        />

        <GuideSectionCard>
          <ResourceLinkGrid title="Treatment and therapist directories" resources={clinicalResources} />

          <GuideProse>
            <p>
              When you contact a provider, ask whether they work with people affected by sex offense charges, convictions, registries, supervision, family reintegration, compulsive sexual behavior, trauma, shame, anxiety, depression, or youth problematic sexual behavior. Not every good therapist is trained for every situation.
            </p>
            <p>
              If treatment is court-ordered or supervision-related, ask the supervising officer or attorney whether the provider must meet specific approval rules before you schedule or pay.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="legal-referrals"
          number="4"
          title="Legal referral tools"
          subtitle="Use these when the question is legal, supervision-related, court-related, or about rights and obligations."
        />

        <GuideSectionCard>
          <ResourceLinkGrid title="Attorney and referral resources" resources={legalReferralResources} />

          <GuideCallout tone="legal" icon="⚖️" title="Advocacy support is not the same as legal advice">
            <p>
              Advocacy organizations may help you understand the landscape, find a local contact, or identify referral paths. They usually cannot tell you what the law requires in your case. For legal strategy, deadlines, court orders, probation or parole conditions, registration duties, or appeals, speak with a qualified attorney.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="state-organizations"
          number="5"
          title="State organizations and affiliate lookup"
          subtitle="Search by state, organization, status, or phone number without scrolling through the full national list."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              NARSOL says many states have groups or individuals who work with them, but the names can change frequently. If your state does not show an established group, contact NARSOL directly and ask for a state-level volunteer or regional coordinator.
            </p>
          </GuideProse>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <label htmlFor="state-directory-search" className="block text-sm font-semibold text-slate-900">
              Search by state, organization, status, or phone
            </label>

            <input
              id="state-directory-search"
              type="search"
              value={stateQuery}
              onChange={(event) => setStateQuery(event.target.value)}
              placeholder="Try “Florida,” “Texas,” “no affiliate,” or “NARSOL affiliate”"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Showing {visibleStateOrganizations.length} of {filteredStateOrganizations.length} matching entries.
              </p>

              {!normalizedStateQuery && (
                <button
                  type="button"
                  onClick={() => setShowAllStates((current) => !current)}
                  className="text-left text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  {showAllStates ? "Show fewer states" : "Show all states"}
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {visibleStateOrganizations.length > 0 ? (
              <div className="grid grid-cols-1 divide-y divide-slate-200">
                {visibleStateOrganizations.map((item, index) => (
                  <div key={`${item.state}-${item.org}-${index}`} className="p-4 sm:p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{item.state}</h3>
                        <p className="mt-1 text-sm text-slate-700">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                            >
                              {item.org}
                            </a>
                          ) : (
                            <span className="font-medium text-slate-900">{item.org}</span>
                          )}
                        </p>
                        {item.note && <p className="mt-1 text-sm text-slate-600">{item.note}</p>}
                      </div>

                      <div className="text-sm text-slate-600 sm:text-right">
                        {item.phone && <p>Phone: {item.phone}</p>}
                        {item.status && <p className="mt-1">{item.status}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-5">
                <p className="text-sm text-slate-700">
                  No matching state organization found. Try a state name, “affiliate,” “associated group,” or contact NARSOL directly for a regional referral.
                </p>
              </div>
            )}
          </div>

          <GuideCallout tone="reminder" icon="📌" title="Why this list is intentionally conservative">
            <p>
              This page favors sources that could be validated through official pages during rebuild. Some older resource packets list additional state groups, but this directory should not publish stale contacts unless they are rechecked and clearly sourced.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="offline-access"
          number="6"
          title="If internet access is limited"
          subtitle="Many readers are phone-only, incarcerated, under internet restrictions, or relying on family for research."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet ways to use this directory"
            items={[
              "Print this page or copy the crisis numbers and state contact information onto one sheet of paper.",
              "Ask a trusted person to call a provider or organization and write down the name, date, phone number, and next step.",
              "Ask organizations to mail forms, meeting schedules, referral lists, or written instructions when possible.",
              "Use a library, reentry office, public defender office, legal aid office, or family member only if doing so is allowed by supervision and device rules.",
              "Keep a paper folder with call notes, referrals, appointment confirmations, payment information, and provider requirements.",
            ]}
          />

          <VerifyBeforeActing
            whoToAsk="The organization, provider office, attorney, supervising officer, or agency with authority over the step you are about to take."
            whatToAsk="Ask whether the listing is current, whether they serve your situation, what it costs, whether there are privacy limits, and whether court or supervision approval is required."
            whatToSave="Save the date, name, phone number, email address, instructions, appointment confirmation, and any written answer or screenshot."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="7"
          title="Sources and related SOLAR guides"
          subtitle="Use the source list to recheck links before publication and during future maintenance."
        />

        <GuideSectionCard>
          <RelatedGuides
            guides={[
              {
                title: "Reentry Checklist",
                description: "Use with this directory when mental-health support is part of housing, work, supervision, or family reintegration planning.",
                to: "/resources/reentry-checklist",
              },
              {
                title: "Family Support Guide",
                description: "Helpful for spouses, parents, adult children, and loved ones trying to support someone without carrying everything alone.",
                to: "/resources/family-support",
              },
              {
                title: "Know Your Rights Guide",
                description: "Useful when a support, treatment, supervision, or registry issue becomes legal or rights-related.",
                to: "/resources/know-your-rights",
              },
            ]}
          />

          <SourceList
            note={`Links and contact information were checked during production rebuild on ${lastChecked}. Recheck state affiliates and provider directories before future publication updates because organizations, meetings, providers, and phone numbers change.`}
            sources={sourceLinks}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}