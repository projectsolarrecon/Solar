import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  GraduationCap,
  Hammer,
  Laptop,
  MapPinned,
  Phone,
  Route,
  Search,
  ShieldCheck,
  Truck,
  Users,
  Utensils,
  Wrench,
} from "lucide-react";
import SEO from "../../components/SEO";
import ShareBar from "../../components/solar/ShareBar";
import {
  GuideSectionHeader,
  GuideSectionCard,
  GuideProse,
  GuideCallout,
  GuideIntro,
  PullQuoteBlock,
  SoftDivider,
  QuickStartPanel,
  GuideChecklist,
  OfflineOptions,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  PathwayCard,
} from "../../components/solar";

const sourceLinks = {
  jobSearchGuide: "/resources/job-search-guide",
  knowYourRights: "/resources/know-your-rights",
  housingSearch: "/resources/housing-search-guide",
  reentryChecklist: "/resources/reentry-checklist",
  mentalHealthDirectory: "/resources/mental-health-directory",
  professionalLicensing: "/resources/professional-licensing",
  smallBusinessGuide: "/resources/small-business-guide",

  careerOneStopJustice: "https://www.careeronestop.org/JusticeImpacted/default.aspx",
  careerOneStopAjc:
    "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
  careerOneStopReentry:
    "https://www.careeronestop.org/JusticeImpacted/Toolkit/find-reentry-programs.aspx",
  apprenticeshipHome: "https://www.apprenticeship.gov/",
  apprenticeshipBarriers:
    "https://www.apprenticeship.gov/career-seekers/with-employment-barriers",
  dolReentry: "https://www.dol.gov/agencies/eta/reentry",
  dolReentryResources: "https://www.dol.gov/agencies/eta/reentry/resources",
  workforceGpsReentry: "https://reo.workforcegps.org/",
  secondChanceBusinessCoalition: "https://secondchancebusinesscoalition.org/",
  scbcPartnerMap: "https://secondchancebusinesscoalition.org/find-partners",
  scbcLocalEcosystems: "https://secondchancebusinesscoalition.org/local-ecosystems",
  honestJobs: "https://www.honestjobs.com/for-job-seekers",
  hireNetworkClearinghouse: "https://clearinghouse.lac.org/",
  hireNetworkProject: "https://www.lac.org/major-project/national-hire-network",
  jailsToJobs: "https://jailstojobs.org/",
  federalBonding: "https://bonds4jobs.com/",
  dolWotc: "https://www.dol.gov/agencies/eta/wotc",
  irsWotc:
    "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit",
  ftcBackgroundChecks:
    "https://consumer.ftc.gov/articles/employer-background-checks-and-your-rights",
  eeocArrestConviction: "https://www.eeoc.gov/arrestandconviction",
  eeocGuidance:
    "https://www.eeoc.gov/laws/guidance/enforcement-guidance-consideration-arrest-and-conviction-records-employment-decisions",
  lyftDriverRequirements:
    "https://help.lyft.com/hc/en-us/all/articles/115012925687-Driver-requirements",
  uberBackgroundChecks: "https://www.uber.com/us/en/newsroom/background-checks/",
  walmartCareers: "https://careers.walmart.com/",
  targetCareers: "https://corporate.target.com/careers",
  homeDepotCareers: "https://careers.homedepot.com/",
  lowesCareers: "https://talent.lowes.com/us/en",
  krogerCareers: "https://www.thekrogerco.com/careers/",
  cvsCareers: "https://jobs.cvshealth.com/",
  walgreensCareers: "https://jobs.walgreens.com/",
  mcdonaldsCareers: "https://careers.mcdonalds.com/",
  amazonJobs: "https://www.amazon.jobs/",
  upsJobs: "https://www.jobs-ups.com/",
  fedexCareers: "https://careers.fedex.com/",
  aramarkCareers: "https://www.aramarkcareers.com/",
  compassCareers: "https://www.compassgroupcareers.com/",
  sodexoCareers: "https://us.sodexo.com/careers",
  wasteManagementCareers: "https://careers.wm.com/",
  marriottCareers: "https://careers.marriott.com/",
  hiltonCareers: "https://jobs.hilton.com/us/en",
  randstadJobs: "https://www.randstadusa.com/jobs/",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Employment Directory for People on Sex Offender Registries | The SOLAR Project"
        description="A practical employment directory for people with sex offense convictions, registry requirements, or both, including fair-chance job boards, workforce offices, apprenticeships, training paths, employer leads, and restriction-check reminders."
        keywords="sex offender registry employment directory, jobs for people on sex offender registry, fair chance employers, felony friendly employers, reentry employment, apprenticeship after incarceration, American Job Center, Federal Bonding Program, SOLAR Project"
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
            Employment Directory for People on Sex Offender Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Job boards, workforce offices, training paths, apprenticeships,
            employer lead sources, and verification steps for people with sex
            offense convictions, registry requirements, or both.
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
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <GuideIntro
          title="Start here"
          icon={<Search className="h-6 w-6" aria-hidden="true" />}
        >
          <p>
            This directory is for finding leads. It is not a promise that any
            employer, job board, program, or training path will accept every
            person with a sex offense conviction or registry requirement.
          </p>

          <p>
            That distinction matters. A company may be “fair chance,”
            “second chance,” or “felony friendly” and still exclude people on sex
            offender registries, restrict certain roles, require case-by-case
            review, or use background-check rules that vary by location, job
            duty, franchise, contractor, or vendor.
          </p>

          <p>
            Still, there are meaningful places to look. Use this page to find
            stronger leads, ask better questions, avoid predictable dead ends,
            and connect with people who may know which local employers have
            actually hired registry-impacted workers.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Where to look first this week"
          subtitle="Start with places designed for people with records, workforce support, or skills-based hiring."
          icon={<ClipboardCheck className="h-6 w-6" aria-hidden="true" />}
          urgentActions={[
            <span>
              Find your nearest{" "}
              <a
                href={sourceLinks.careerOneStopAjc}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                American Job Center
              </a>{" "}
              and ask about justice-involved job seeker services, training
              funding, employer referrals, and job fairs.
            </span>,
            <span>
              Search{" "}
              <a
                href={sourceLinks.honestJobs}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Honest Jobs
              </a>{" "}
              and set alerts for roles that match your skills and restrictions.
            </span>,
            <span>
              Use the{" "}
              <a
                href={sourceLinks.scbcPartnerMap}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Second Chance Business Coalition Community Partners Map
              </a>{" "}
              to find local reentry, workforce, and training organizations.
            </span>,
          ]}
          nextActions={[
            <span>
              Search{" "}
              <a
                href={sourceLinks.apprenticeshipHome}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Apprenticeship.gov
              </a>{" "}
              for paid earn-while-you-learn paths in trades, manufacturing,
              transportation, and other fields.
            </span>,
            <span>
              Ask local reentry organizations which employers have recently hired
              people with sex offense convictions or registry status, not only
              people with records generally.
            </span>,
            <span>
              Keep a simple log of every lead: employer, role, location, contact
              person, background-check stage, restriction question, and next
              step.
            </span>,
          ]}
          reminder={
            <span>
              A lead is not a guarantee. It is a place to start asking better
              questions.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Search lane 1",
              title: "Job boards and employer leads",
              icon: <Briefcase className="h-5 w-5" aria-hidden="true" />,
              tone: "info",
              description:
                "Use fair-chance job boards, company career pages, staffing firms, and local employer lists as starting points.",
            },
            {
              eyebrow: "Search lane 2",
              title: "Training and apprenticeships",
              icon: <GraduationCap className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Look for paid training, trade certificates, apprenticeships, and workforce-funded credentials.",
            },
            {
              eyebrow: "Search lane 3",
              title: "Local help and verification",
              icon: <MapPinned className="h-5 w-5" aria-hidden="true" />,
              tone: "legal",
              description:
                "Use American Job Centers, reentry programs, legal aid, and supervision contacts to vet each lead safely.",
            },
          ]}
        />

        <GuideSectionHeader
          id="registry-aware"
          number="1"
          title="Fair chance does not always mean registry-aware"
          subtitle="This is the key rule for using the directory safely."
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A fair-chance employer may be open to people with many kinds of
              criminal records, but sex offense convictions and public registry
              status often trigger extra screening, role limits, insurance
              issues, licensing barriers, supervision concerns, or local
              restrictions.
            </p>

            <p>
              That does not make the lead useless. It means you should treat it
              as a lead to investigate, not as proof that the job is safe or
              available to you.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify each lead before you rely on it"
            whoToAsk={
              <span>
                Your supervising officer if you are on supervision; the
                registering agency for registry-specific questions; the hiring
                contact or HR office for employer-policy questions; the licensing
                board for credentialed fields; and an attorney or legal aid
                office for legal-risk questions.
              </span>
            }
            whatToAsk={
              <span>
                “Does this exact role, location, schedule, travel requirement,
                internet use, background-check policy, customer contact, and
                contact-with-minors risk fit my restrictions?”
              </span>
            }
            whatToSave={
              <span>
                The posting, employer name, role, address, date, person who
                answered, exact question asked, answer given, and any written
                confirmation.
              </span>
            }
          />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="The question is not only “Will they hire people with felonies?”"
          >
            <p>
              Ask the narrower question: whether they will consider people with
              sex offense convictions or registry requirements for this exact
              role. A warehouse job, delivery job, kitchen job, remote job, or
              trade job may be realistic in one setting and risky in another.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="best-starting-points"
          number="2"
          title="Best starting points"
          subtitle="These resources are more useful than cold-searching random job boards."
          icon={<Route className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Start with these"
            description={
              <span>
                These are not registry guarantees. They are higher-value places
                to find leads, training, referrals, and people who understand
                employment barriers.
              </span>
            }
            resources={[
              {
                label: "CareerOneStop Justice-Impacted Job Seekers",
                href: sourceLinks.careerOneStopJustice,
                badge: "Official",
                description:
                  "Career exploration, job search, training, and application guidance for people with criminal records.",
              },
              {
                label: "American Job Center Finder",
                href: sourceLinks.careerOneStopAjc,
                badge: "Official",
                description:
                  "Find local workforce offices that may offer resume help, job referrals, computer access, training funding, and workshops.",
              },
              {
                label: "CareerOneStop Reentry Program Finder",
                href: sourceLinks.careerOneStopReentry,
                badge: "Official",
                description:
                  "Search for local reentry employment programs that help people overcome barriers caused by a criminal record.",
              },
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                badge: "Fair chance",
                description:
                  "A fair-chance job board for people with criminal records. Still verify sex-offense and registry-specific restrictions.",
              },
              {
                label: "Second Chance Business Coalition Partner Map",
                href: sourceLinks.scbcPartnerMap,
                badge: "Lead finder",
                description:
                  "Find community organizations connected to second-chance hiring ecosystems in many local job markets.",
              },
              {
                label: "National H.I.R.E. Network Clearinghouse",
                href: sourceLinks.hireNetworkClearinghouse,
                badge: "Directory",
                description:
                  "State-specific government and community-based resources for people with criminal records.",
              },
              {
                label: "Jails to Jobs",
                href: sourceLinks.jailsToJobs,
                badge: "Nonprofit",
                description:
                  "Practical job-search information for people coming home from jail or prison.",
              },
              {
                label: "DOL Reentry Employment Opportunities",
                href: sourceLinks.dolReentry,
                badge: "Official",
                description:
                  "Federal reentry employment program information and links to reentry workforce resources.",
              },
            ]}
          />

          <GuideCallout
            tone="success"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Hopeful, but specific"
          >
            <p>
              The most useful question is not “Who hires registrants?” It is
              “Who near me has recently helped someone with a similar conviction,
              restriction level, transportation situation, and work history get a
              safe job?” Local reentry staff, workforce offices, and small
              employers often know more than national job boards.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="job-boards"
          number="3"
          title="Job boards and employer lead sources"
          subtitle="Use job boards to find openings, then verify the exact employer, role, and background-check process."
          icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Job boards are useful, but they can also create false hope if you
              apply everywhere without checking whether the employer has a real
              case-by-case process. Start with fair-chance and workforce-oriented
              sources, then use general job boards with targeted search terms.
            </p>

            <p>
              Useful search terms include{" "}
              <strong>second chance hiring</strong>,{" "}
              <strong>fair chance employer</strong>,{" "}
              <strong>background friendly</strong>,{" "}
              <strong>justice involved</strong>,{" "}
              <strong>reentry employment</strong>,{" "}
              <strong>warehouse no experience</strong>,{" "}
              <strong>apprentice helper</strong>,{" "}
              <strong>maintenance trainee</strong>, and{" "}
              <strong>paid training</strong>.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Job-board and lead sources"
            resources={[
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                badge: "Fair chance",
                description:
                  "Search jobs from employers that identify as open to people with criminal records. Verify registry-specific policies before relying on any listing.",
              },
              {
                label: "CareerOneStop Job Search",
                href: sourceLinks.careerOneStopJustice,
                badge: "Official",
                description:
                  "Use CareerOneStop's justice-impacted job seeker tools to explore careers, training, and job applications.",
              },
              {
                label: "SCBC Community Partners Map",
                href: sourceLinks.scbcPartnerMap,
                badge: "Local partners",
                description:
                  "Find organizations that may know local employers, job fairs, and training providers connected to second-chance hiring.",
              },
              {
                label: "National H.I.R.E. Network Clearinghouse",
                href: sourceLinks.hireNetworkClearinghouse,
                badge: "State resources",
                description:
                  "Look up state and local organizations that may offer job-related help, legal information, or referrals.",
              },
              {
                label: "American Job Centers",
                href: sourceLinks.careerOneStopAjc,
                badge: "Local help",
                description:
                  "Ask for employer leads, reentry job fairs, resume help, training funds, and job clubs.",
              },
              {
                label: "Randstad Jobs",
                href: sourceLinks.randstadJobs,
                badge: "Staffing",
                description:
                  "Staffing agencies can be useful for warehouse, manufacturing, clerical, and temporary-to-hire leads. Policies vary by client and role.",
              },
            ]}
          />

          <GuideChecklist
            id="job-board-vetting"
            title="Before you apply from a job board"
            columns={2}
            items={[
              {
                id: "company-site",
                label:
                  "Click through to the employer's own careers page when possible.",
              },
              {
                id: "address",
                label:
                  "Identify the exact worksite address, not just the company name.",
              },
              {
                id: "duties",
                label:
                  "Check whether the job involves minors, homes, schools, parks, driving, travel, internet use, or vulnerable people.",
              },
              {
                id: "background",
                label:
                  "Look for background-check timing, adverse-action process, and whether the employer says case-by-case review is possible.",
              },
              {
                id: "contact",
                label:
                  "Write down a hiring contact, HR email, staffing agency, or recruiter name.",
              },
              {
                id: "save",
                label:
                  "Save a copy or screenshot of the posting before it disappears.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="training"
          number="4"
          title="Training, apprenticeships, and credentials"
          subtitle="Paid training and short credentials can open doors, but licensing and placement rules still matter."
          icon={<GraduationCap className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Training can be one of the most hopeful paths because it gives you
              proof of current effort, a newer reference, and a skill an employer
              can understand. The best options are usually practical,
              short-to-medium length, and connected to real employers.
            </p>

            <p>
              Before spending money, verify whether the credential, license,
              worksite, internship, clinical placement, apprenticeship sponsor,
              or job placement path is realistic for someone with your conviction
              and registry status.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Training and apprenticeship resources"
            resources={[
              {
                label: "Apprenticeship.gov",
                href: sourceLinks.apprenticeshipHome,
                badge: "Official",
                description:
                  "Search Registered Apprenticeships and learn how earn-while-you-learn programs work.",
              },
              {
                label: "Apprenticeship.gov — Barriers to Employment",
                href: sourceLinks.apprenticeshipBarriers,
                badge: "Official",
                description:
                  "Information for career seekers with employment barriers, including justice-involved people.",
              },
              {
                label: "American Job Centers",
                href: sourceLinks.careerOneStopAjc,
                badge: "Training help",
                description:
                  "Ask about WIOA-funded training, occupational certificates, job clubs, computer access, and local employer partnerships.",
              },
              {
                label: "DOL Reentry Resources",
                href: sourceLinks.dolReentryResources,
                badge: "Official",
                description:
                  "Federal links for justice-involved job seekers, employers, and reentry workforce programs.",
              },
              {
                label: "WorkforceGPS Reentry Employment Opportunities",
                href: sourceLinks.workforceGpsReentry,
                badge: "Workforce",
                description:
                  "Workforce-development resources for people returning from the justice system and the programs that serve them.",
              },
              {
                label: "Professional Licensing Guide",
                href: sourceLinks.professionalLicensing,
                badge: "SOLAR",
                description:
                  "Use SOLAR's licensing guide before investing in a credential that may require background review.",
              },
            ]}
          />

          <GuideProse>
            <p>
              Common practical paths include OSHA-10/30, forklift, welding,
              HVAC, electrical helper, plumbing helper, maintenance, CDL,
              food-handler credentials, culinary programs, manufacturing,
              logistics, bookkeeping, customer support, and basic IT support.
              Some of these can be realistic; some may be blocked by licensing,
              driving, insurance, internet, or worksite restrictions.
            </p>
          </GuideProse>

          <GuideCallout
            tone="warning"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Ask about placement before enrolling"
          >
            <p>
              A school may accept you into training even if the internship,
              apprenticeship sponsor, clinical site, licensing board, or employer
              partner later rejects you. Ask direct questions before you pay:
              “Have you placed people with sex offense convictions or registry
              requirements in this field before?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="lead-banks"
          number="5"
          title="Company lead banks"
          subtitle="Use these as places to search, not endorsements or guarantees."
          icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Large employers can be worth checking because they may have
              formal HR processes, many roles, multiple worksites, and experience
              with background checks. Smaller local employers can also be
              valuable because decisions may be more personal and less automated.
            </p>

            <p>
              The companies below are examples of places to search for openings
              or role types. They are not presented as registry-friendly
              employers. A national company, local franchise, distribution
              center, contractor, or staffing partner may handle registry cases
              differently.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Retail, grocery, and big-box"
              subtitle="Stocking, overnight freight, cart attendant, receiving, warehouse, maintenance, backroom."
              icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  These employers often have many entry points, structured
                  hiring systems, and roles that may not require one-on-one
                  unsupervised contact.
                </span>
              }
              steps={[
                <span>
                  Search{" "}
                  <a href={sourceLinks.walmartCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Walmart
                  </a>
                  ,{" "}
                  <a href={sourceLinks.targetCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Target
                  </a>
                  ,{" "}
                  <a href={sourceLinks.homeDepotCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Home Depot
                  </a>
                  ,{" "}
                  <a href={sourceLinks.lowesCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Lowe's
                  </a>
                  , and{" "}
                  <a href={sourceLinks.krogerCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Kroger
                  </a>
                  .
                </span>,
                <span>
                  Check whether the role involves schools, youth events, delivery
                  to homes, pharmacy access, or customer areas that create risk.
                </span>,
                <span>
                  Ask whether the decision is made by corporate HR, a local
                  manager, a franchise, or a background-check vendor.
                </span>,
              ]}
              bestFit={
                <span>
                  People seeking structured entry-level work, stocking,
                  receiving, facilities, maintenance, or operations roles.
                </span>
              }
            />

            <PathwayCard
              title="Warehouse, logistics, and distribution"
              subtitle="Picking, packing, forklift, dock work, inventory, shipping, receiving, package handling."
              icon={<Truck className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  These jobs may value punctuality, physical stamina, safety,
                  and consistency. Some roles are less public-facing than retail.
                </span>
              }
              steps={[
                <span>
                  Search{" "}
                  <a href={sourceLinks.amazonJobs} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Amazon Jobs
                  </a>
                  ,{" "}
                  <a href={sourceLinks.upsJobs} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    UPS Jobs
                  </a>
                  ,{" "}
                  <a href={sourceLinks.fedexCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    FedEx Careers
                  </a>
                  , and local warehouses.
                </span>,
                <span>
                  Verify driving, delivery, route, airport, school-zone,
                  overnight, and travel issues before accepting.
                </span>,
                <span>
                  Ask staffing agencies which warehouse clients use case-by-case
                  background review.
                </span>,
              ]}
              bestFit={
                <span>
                  People who can work physical shifts and need a skills-first
                  entry point with advancement potential.
                </span>
              }
            />

            <PathwayCard
              title="Food service, hospitality, and facilities"
              subtitle="Kitchen, prep, dish, housekeeping, laundry, janitorial, maintenance, banquet setup."
              icon={<Utensils className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Back-of-house roles can be practical starting points and may
                  offer fast hiring, clear duties, and chances to build local
                  references.
                </span>
              }
              steps={[
                <span>
                  Search{" "}
                  <a href={sourceLinks.mcdonaldsCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    McDonald's Careers
                  </a>
                  ,{" "}
                  <a href={sourceLinks.aramarkCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Aramark
                  </a>
                  ,{" "}
                  <a href={sourceLinks.compassCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Compass Group
                  </a>
                  ,{" "}
                  <a href={sourceLinks.sodexoCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Sodexo
                  </a>
                  ,{" "}
                  <a href={sourceLinks.marriottCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Marriott
                  </a>
                  , and{" "}
                  <a href={sourceLinks.hiltonCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    Hilton
                  </a>
                  .
                </span>,
                <span>
                  Avoid youth-serving sites, schools, camps, child-centered
                  events, or unsupervised guest-room access unless clearly
                  permitted.
                </span>,
                <span>
                  Ask whether the job is corporate, franchise, contractor, or
                  facility-specific.
                </span>,
              ]}
              bestFit={
                <span>
                  People who can work fast-paced shifts and want a local
                  reference-building job.
                </span>
              }
            />

            <PathwayCard
              title="Trades, maintenance, and local contractors"
              subtitle="Helper roles, repair, landscaping, waste services, facilities, painting, cleaning, hauling."
              icon={<Hammer className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Skills can matter more than resume polish. Local contractors
                  may make decisions directly and may care most about reliability
                  and safe work.
                </span>
              }
              steps={[
                <span>
                  Search{" "}
                  <a href={sourceLinks.wasteManagementCareers} target="_blank" rel="noreferrer" className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950">
                    WM Careers
                  </a>
                  , local trade helpers, maintenance teams, landscaping
                  companies, and small contractors.
                </span>,
                <span>
                  Verify private-home access, school sites, youth facilities,
                  tools, driving, licensing, and insurance rules.
                </span>,
                <span>
                  Ask whether a short work trial, reference, or bonding
                  information would help the employer evaluate you fairly.
                </span>,
              ]}
              bestFit={
                <span>
                  People with hands-on skills, physical stamina, training
                  certificates, or a willingness to start as a helper.
                </span>
              }
            />
          </div>

          <GuideCallout
            tone="neutral"
            icon={<Users className="h-5 w-5" aria-hidden="true" />}
            title="Use second-chance employer lists carefully"
          >
            <p>
              The{" "}
              <a
                href={sourceLinks.secondChanceBusinessCoalition}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Second Chance Business Coalition
              </a>{" "}
              and similar initiatives can point you toward employers that are
              thinking about people with records. That is helpful. It is not the
              same as confirmation that a specific location or role will consider
              someone on a sex offender registry.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="green-red-flags"
          number="6"
          title="Better leads and higher-friction leads"
          subtitle="Some opportunities are worth trying first. Others may waste time or create compliance risk."
          icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <div className="grid gap-4 md:grid-cols-2">
            <GuideCallout
              tone="success"
              icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
              title="Better signs"
            >
              <GuideProse>
                <ul>
                  <li>The employer says it uses case-by-case review.</li>
                  <li>The job has a clear adult worksite.</li>
                  <li>The duties are visible and easy to explain.</li>
                  <li>The role does not involve schools, child care, youth programs, private homes, or unsupervised access to minors.</li>
                  <li>A local reentry organization has placed people there before.</li>
                  <li>The employer has HR staff who can explain the background-check process.</li>
                  <li>The job offers training, certifications, advancement, or a stable schedule.</li>
                </ul>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="warning"
              icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
              title="Higher-friction signs"
            >
              <GuideProse>
                <ul>
                  <li>The job involves minors, schools, child care, youth sports, camps, parks, or recreation programs.</li>
                  <li>The role requires entering private homes or hotel rooms alone.</li>
                  <li>The platform uses automated background screening with no human review.</li>
                  <li>The role requires rideshare, passenger driving, in-home delivery, or vulnerable-person access.</li>
                  <li>The job requires internet use that may conflict with your supervision rules.</li>
                  <li>The credential has moral-character, licensing, or insurance barriers.</li>
                  <li>The employer cannot tell you who makes the background-check decision.</li>
                </ul>
              </GuideProse>
            </GuideCallout>
          </div>

          <SoftDivider />

          <GuideProse>
            <p>
              Rideshare and passenger-driving platforms are often high-friction
              for people on sex offender registries. Lyft publicly states that a
              person may be ineligible to drive if listed on the National Sex
              Offender Registry, and Uber publicly says drivers with reported
              sexual assault convictions are permanently banned. Do not build
              your whole plan around these platforms without checking current
              rules first.
            </p>
          </GuideProse>

          <CommonMistakes
            title="Directory mistakes to avoid"
            mistakes={[
              {
                mistake: "Treating “felony friendly” as the same as registry-aware.",
                whyItMatters:
                  "Many programs and employers are open to some records but still exclude sex offense convictions, public registry status, or certain job duties.",
                betterMove:
                  "Ask whether they have worked with people with sex offense convictions or registry requirements specifically.",
              },
              {
                mistake: "Applying to every large employer without checking the role.",
                whyItMatters:
                  "One company may have safe warehouse roles, risky delivery roles, restricted school-site contracts, and different local decision-makers.",
                betterMove:
                  "Check the exact location, duties, background-check stage, and decision-maker.",
              },
              {
                mistake: "Paying for training before checking placement barriers.",
                whyItMatters:
                  "A training provider may accept your money even if the internship, license, or employer placement is unlikely.",
                betterMove:
                  "Ask written questions about placement, licensing, background checks, and registry-specific barriers before enrolling.",
              },
              {
                mistake: "Assuming remote work is automatically safe.",
                whyItMatters:
                  "Remote work can involve internet monitoring, customer data, minors, platform rules, background checks, or supervision restrictions.",
                betterMove:
                  "Verify internet use, device rules, customer contact, platform policies, and data-access limits.",
              },
              {
                mistake: "Giving up after a few dead ends.",
                whyItMatters:
                  "Some leads will not work. That does not mean all work is closed off.",
                betterMove:
                  "Track results, adjust your target list, ask local reentry staff for recent employer leads, and keep building proof of reliability.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="employer-reassurance"
          number="7"
          title="Employer reassurance tools"
          subtitle="Some employers need help understanding risk, support, and incentives."
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              You should not have to sell your humanity to an employer. Still,
              some hiring managers are nervous about people with records and do
              not know what tools exist. If the conversation is respectful and
              the job appears legally safe, a short mention of employer support
              programs can help.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Employer-facing tools"
            resources={[
              {
                label: "Federal Bonding Program",
                href: sourceLinks.federalBonding,
                badge: "Hiring support",
                description:
                  "No-cost fidelity bonding that may reduce perceived hiring risk for some employers considering job seekers with barriers.",
              },
              {
                label: "DOL WOTC page",
                href: sourceLinks.dolWotc,
                badge: "Check status",
                description:
                  "Official Department of Labor page for the Work Opportunity Tax Credit. Verify current status before mentioning it.",
              },
              {
                label: "IRS WOTC page",
                href: sourceLinks.irsWotc,
                badge: "Check status",
                description:
                  "Official IRS page explaining WOTC eligibility and timing. The program was authorized for workers beginning work on or before December 31, 2025.",
              },
              {
                label: "SCBC employer resources",
                href: sourceLinks.secondChanceBusinessCoalition,
                badge: "Employer tools",
                description:
                  "Employer-facing second-chance hiring resources that may help a company understand case-by-case hiring practices.",
              },
              {
                label: "Jails to Jobs",
                href: sourceLinks.jailsToJobs,
                badge: "Practical",
                description:
                  "Job-search and employer-education resources for people coming home from incarceration.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Do not overstate WOTC"
          >
            <p>
              WOTC was authorized for eligible workers who began work on or
              before December 31, 2025. Unless Congress renews or changes it,
              employers may not be able to claim WOTC for 2026 new hires. Check
              the IRS or DOL page before using WOTC as an employer talking point.
            </p>
          </GuideCallout>

          <GuideCallout
            tone="info"
            icon={<FileText className="h-5 w-5" aria-hidden="true" />}
            title="Simple way to mention bonding"
          >
            <p>
              “I understand employers sometimes have concerns when hiring people
              with records. There is a Federal Bonding Program that may provide a
              no-cost fidelity bond for eligible workers. I can send you the
              official information if that would help.”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="local-strategy"
          number="8"
          title="How to find local leads that are actually useful"
          subtitle="Local knowledge often beats national lists."
          icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              National lists can get you started, but the strongest leads often
              come from local people who know which employers have hired
              registry-impacted workers recently. A workforce counselor, reentry
              case manager, faith-based job club, public defender reentry staff,
              treatment provider, or trusted mentor may know which employers are
              worth your limited time.
            </p>
          </GuideProse>

          <GuideChecklist
            id="local-lead-plan"
            title="Local lead plan"
            columns={1}
            items={[
              {
                id: "ajc",
                label:
                  "Call or visit your nearest American Job Center and ask whether they have justice-involved job seeker services.",
              },
              {
                id: "reentry",
                label:
                  "Search CareerOneStop's reentry program finder and the National H.I.R.E. Network Clearinghouse for local organizations.",
              },
              {
                id: "specific",
                label:
                  "Ask every helper the specific question: “Have you placed someone with a sex offense conviction or registry status recently?”",
              },
              {
                id: "fields",
                label:
                  "Ask which fields have worked locally: warehouse, food service, trades, maintenance, manufacturing, staffing, or small employers.",
              },
              {
                id: "names",
                label:
                  "Ask for names of programs, hiring managers, staffing agencies, job fairs, and training providers.",
              },
              {
                id: "log",
                label:
                  "Write down every lead and result so you can see patterns instead of starting over each week.",
              },
            ]}
          />

          <GuideCallout
            tone="family"
            icon={<Users className="h-5 w-5" aria-hidden="true" />}
            title="For family and supporters"
          >
            <p>
              A helpful supporter can research employers, print applications,
              drive to appointments, practice interviews, organize a job log, or
              call programs to ask what services they offer. Try not to take over
              the job search. The person applying still needs ownership,
              preparation, and accurate information.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="9"
          title="If internet access, privacy, or transportation is limited"
          subtitle="A directory should still work for phone-only, paper-based, supervised, or recently released readers."
          icon={<Phone className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet ways to use this guide"
            icon={<Laptop className="h-5 w-5" aria-hidden="true" />}
            note={
              <span>
                These steps can help if you have no printer, limited internet,
                supervision restrictions, unreliable transportation, or no
                private computer.
              </span>
            }
            items={[
              <span>
                Call an American Job Center and ask for help finding local
                reentry employment services, job fairs, and training programs.
              </span>,
              <span>
                Ask for mailed forms, printed job lists, or an appointment with a
                workforce counselor if online access is difficult.
              </span>,
              <span>
                Keep a paper job lead log with employer name, role, location,
                phone number, date, restriction question, and result.
              </span>,
              <span>
                Ask a trusted person to print job postings, bus directions,
                application confirmations, and program contacts.
              </span>,
              <span>
                Use a public library, workforce center, or reentry office for
                computer access only if your supervision and internet rules allow
                it.
              </span>,
              <span>
                If you are incarcerated or preparing for release, ask family or a
                reentry worker to print nearby American Job Centers, reentry
                programs, apprenticeships, and training providers.
              </span>,
            ]}
          />

          <GuideCallout
            tone="privacy"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Do not use unsafe internet access"
          >
            <p>
              If you have internet restrictions, monitoring rules, device
              restrictions, or limits on social media or job platforms, verify
              what is allowed before using public computers, apps, job boards, or
              remote-work platforms.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="lead-vetting"
          number="10"
          title="Lead-vetting checklist"
          subtitle="Use this before applying, interviewing, accepting, or paying for training."
          icon={<ClipboardCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideChecklist
            id="lead-vetting-checklist"
            title="Check the lead"
            columns={2}
            items={[
              {
                id: "exact-location",
                label: "Do I know the exact worksite or training location?",
              },
              {
                id: "allowed-location",
                label:
                  "Is the location allowed under registry, supervision, court, and local rules?",
              },
              {
                id: "duties",
                label:
                  "Do the duties involve minors, schools, child care, parks, homes, hospitals, nursing facilities, travel, driving, or internet use?",
              },
              {
                id: "policy",
                label:
                  "Does the employer, platform, franchise, contractor, or staffing agency have a policy that affects registry status?",
              },
              {
                id: "background-stage",
                label:
                  "When does the background check happen, and who makes the decision?",
              },
              {
                id: "case-review",
                label:
                  "Is there case-by-case review, or is the background screen automatic?",
              },
              {
                id: "license",
                label:
                  "Does the job or training path require a license, credential, placement, or insurance approval?",
              },
              {
                id: "save-answer",
                label:
                  "Did I save the posting, names, dates, answers, and written confirmation if possible?",
              },
            ]}
          />

          <PullQuoteBlock>
            The goal is not to find a perfect employer. The goal is to find a
            lawful, realistic next step that can become proof of stability.
          </PullQuoteBlock>

          <GuideCallout
            tone="reentry"
            icon={<Wrench className="h-5 w-5" aria-hidden="true" />}
            title="Use this with the Employment Strategies guide"
          >
            <p>
              This directory helps you find leads. For resume structure,
              disclosure scripts, interview preparation, documentation packets,
              and first-90-days job planning, use SOLAR’s{" "}
              <Link
                to={sourceLinks.jobSearchGuide}
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Employment Strategies for People on Sex Offender Registries
              </Link>
              .
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="11"
          title="Resources, related guides, and sources"
          subtitle="Keep going with practical next steps and source links."
          icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Core employment resources"
            resources={[
              {
                label: "CareerOneStop Justice-Impacted Job Seekers",
                href: sourceLinks.careerOneStopJustice,
                badge: "Official",
                description:
                  "Career, training, and job-search tools for people with criminal records.",
              },
              {
                label: "American Job Center Finder",
                href: sourceLinks.careerOneStopAjc,
                badge: "Official",
                description:
                  "Find local workforce offices for resume help, training referrals, job search support, and workshops.",
              },
              {
                label: "CareerOneStop Reentry Program Finder",
                href: sourceLinks.careerOneStopReentry,
                badge: "Official",
                description:
                  "Find local reentry programs that may offer job search, housing, and other support.",
              },
              {
                label: "Apprenticeship.gov",
                href: sourceLinks.apprenticeshipHome,
                badge: "Official",
                description:
                  "Search registered apprenticeships and learn about paid earn-while-you-learn paths.",
              },
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                badge: "Fair chance",
                description:
                  "Fair-chance job board for people with criminal records.",
              },
              {
                label: "Federal Bonding Program",
                href: sourceLinks.federalBonding,
                badge: "Hiring support",
                description:
                  "No-cost fidelity bonding information for eligible workers and employers.",
              },
              {
                label: "FTC background-check rights",
                href: sourceLinks.ftcBackgroundChecks,
                badge: "Official",
                description:
                  "Federal guidance on applicant rights when employers use background reporting companies.",
              },
              {
                label: "EEOC arrest and conviction record resources",
                href: sourceLinks.eeocArrestConviction,
                badge: "Official",
                description:
                  "Employment-rights resources about arrest and conviction records.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Employment Strategies for People on Sex Offender Registries",
                description:
                  "Use this companion guide for resumes, disclosure scripts, interviews, documentation, and first-90-days planning.",
                to: sourceLinks.jobSearchGuide,
              },
              {
                title: "Professional Licensing & Certification Paths",
                description:
                  "Use this before paying for a credential, trade program, CDL path, or licensed field.",
                to: sourceLinks.professionalLicensing,
              },
              {
                title: "Small Business & Entrepreneurship Guide",
                description:
                  "Use this if traditional hiring is blocked and self-employment may be a realistic path.",
                to: sourceLinks.smallBusinessGuide,
              },
              {
                title: "Know Your Rights Guide",
                description:
                  "Use this for broader rights, documentation, background-check, and safe communication guidance.",
                to: sourceLinks.knowYourRights,
              },
              {
                title: "Housing Search Guide",
                description:
                  "Employment and housing often affect each other. Use this for restriction-aware housing planning.",
                to: sourceLinks.housingSearch,
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use this to coordinate employment with IDs, housing, health care, supervision, and registration tasks.",
                to: sourceLinks.reentryChecklist,
              },
              {
                title: "Mental Health & Support Directory",
                description:
                  "Use this if the job search is affecting anxiety, shame, depression, or family stress.",
                to: sourceLinks.mentalHealthDirectory,
              },
            ]}
          />

          <SoftDivider />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Legal and employment disclaimer"
          >
            <p>
              This directory provides general information and lead sources. It is
              not legal advice, supervision approval, an endorsement of any
              employer, or a promise that any company or program will hire people
              with sex offense convictions or registry requirements. Verify your
              specific restrictions, the exact role, and the employer’s current
              policy before applying, accepting work, paying for training, or
              relying on any lead.
            </p>
          </GuideCallout>

          <div id="sources">
            <SourceList
              title="Sources and verification"
              note="These links were selected because they are official government resources, reputable nonprofit resources, employer-facing second-chance resources, or practical job-search lead sources. Registry-specific employment eligibility still requires local verification."
              sources={[
                {
                  label: "CareerOneStop — Justice-Impacted Job Seekers",
                  href: sourceLinks.careerOneStopJustice,
                  description:
                    "Official job search, training, and career resources for people with criminal records.",
                },
                {
                  label: "CareerOneStop — American Job Center Finder",
                  href: sourceLinks.careerOneStopAjc,
                  description:
                    "Official finder for American Job Centers and local workforce help.",
                },
                {
                  label: "CareerOneStop — Reentry Program Finder",
                  href: sourceLinks.careerOneStopReentry,
                  description:
                    "Official finder for local reentry employment programs.",
                },
                {
                  label: "Apprenticeship.gov",
                  href: sourceLinks.apprenticeshipHome,
                  description:
                    "Official federal apprenticeship search and career-seeker resource.",
                },
                {
                  label: "Apprenticeship.gov — Career Seekers with Barriers",
                  href: sourceLinks.apprenticeshipBarriers,
                  description:
                    "Federal apprenticeship information for career seekers with barriers to employment.",
                },
                {
                  label: "U.S. Department of Labor — Reentry Employment Opportunities",
                  href: sourceLinks.dolReentry,
                  description:
                    "Federal reentry employment program information.",
                },
                {
                  label: "Second Chance Business Coalition",
                  href: sourceLinks.secondChanceBusinessCoalition,
                  description:
                    "Employer-facing second-chance hiring coalition and resources.",
                },
                {
                  label: "SCBC Community Partners Map",
                  href: sourceLinks.scbcPartnerMap,
                  description:
                    "Map of community organizations supporting people with criminal records.",
                },
                {
                  label: "SCBC Local Ecosystems",
                  href: sourceLinks.scbcLocalEcosystems,
                  description:
                    "Explanation of local second-chance employer and community partner ecosystems.",
                },
                {
                  label: "Honest Jobs",
                  href: sourceLinks.honestJobs,
                  description:
                    "Fair-chance job board and job-seeker resource for people with criminal records.",
                },
                {
                  label: "National H.I.R.E. Network Clearinghouse",
                  href: sourceLinks.hireNetworkClearinghouse,
                  description:
                    "State-specific reentry, legal, and employment resource clearinghouse.",
                },
                {
                  label: "Jails to Jobs",
                  href: sourceLinks.jailsToJobs,
                  description:
                    "Nonprofit job-search guidance for people leaving jail or prison.",
                },
                {
                  label: "Federal Bonding Program",
                  href: sourceLinks.federalBonding,
                  description:
                    "Employer and job seeker information about fidelity bonding.",
                },
                {
                  label: "DOL — Work Opportunity Tax Credit",
                  href: sourceLinks.dolWotc,
                  description:
                    "Official WOTC status and employer certification information.",
                },
                {
                  label: "IRS — Work Opportunity Tax Credit",
                  href: sourceLinks.irsWotc,
                  description:
                    "Official IRS WOTC eligibility and authorization information.",
                },
                {
                  label: "FTC — Employer Background Checks and Your Rights",
                  href: sourceLinks.ftcBackgroundChecks,
                  description:
                    "Federal background-check rights information for job applicants.",
                },
                {
                  label: "EEOC — Arrest and Conviction Records",
                  href: sourceLinks.eeocArrestConviction,
                  description:
                    "EEOC resources about arrest and conviction records in employment.",
                },
                {
                  label: "EEOC — Enforcement Guidance on Arrest and Conviction Records",
                  href: sourceLinks.eeocGuidance,
                  description:
                    "Federal guidance on use of arrest and conviction records under Title VII.",
                },
                {
                  label: "Lyft Driver Requirements",
                  href: sourceLinks.lyftDriverRequirements,
                  description:
                    "Example of rideshare platform background-check restrictions involving the National Sex Offender Registry.",
                },
                {
                  label: "Uber Background Checks",
                  href: sourceLinks.uberBackgroundChecks,
                  description:
                    "Example of rideshare background-check and disqualification information.",
                },
              ]}
            />
          </div>
        </GuideSectionCard>
      </main>
    </div>
  );
}