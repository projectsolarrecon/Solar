import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
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
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  PathwayCard,
} from "../../components/solar";

const sourceLinks = {
  employmentStrategies: "/resources/job-search-guide",
  employmentDirectory: "/resources/employment-directory",
  smallBusinessGuide: "/resources/small-business-guide",
  reentryChecklist: "/resources/reentry-checklist",
  knowYourRights: "/resources/know-your-rights",
  housingSearch: "/resources/housing-search-guide",

  nicccHome: "https://niccc.nationalreentryresourcecenter.org/",
  nicccConsequences: "https://niccc.nationalreentryresourcecenter.org/consequences",
  careerOneStopAjc:
    "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
  careerOneStopJustice: "https://www.careeronestop.org/JusticeImpacted/default.aspx",
  apprenticeshipHome: "https://www.apprenticeship.gov/",
  apprenticeshipFinder: "https://www.apprenticeship.gov/apprenticeship-job-finder",
  apprenticeshipBarriers:
    "https://www.apprenticeship.gov/career-seekers/with-employment-barriers",
  dolReentry: "https://www.dol.gov/agencies/eta/reentry",
  fmcsaEldt:
    "https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt",
  fmcsaTpr: "https://tpr.fmcsa.dot.gov/",
  tsaHazmat: "https://www.tsa.gov/for-industry/hazmat-endorsement",
  tsaDisqualifying: "https://www.tsa.gov/disqualifying-offenses-factors",
  irsPtin: "https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers",
  comptiaAPlus: "https://www.comptia.org/certifications/a",
  servSafe: "https://www.servsafe.com/",
  oshaTraining: "https://www.osha.gov/training/outreach",
  nhaPhlebotomy:
    "https://www.nhanow.com/certification/nha-certifications/certified-phlebotomy-technician-(cpt)",
};

export default function ProfessionalLicensingGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Professional Licenses and Certifications for People on Sex Offender Registries | The SOLAR Project"
        description="A practical guide to choosing realistic licenses, certifications, apprenticeships, trade credentials, and self-employment-ready skills for people with sex offense convictions, registry requirements, or both."
        keywords="professional license sex offender registry, certifications for people on sex offender registry, occupational licensing felony conviction, sex offense conviction professional license, reentry careers, trade license registry, CDL sex offense conviction, certifications after incarceration"
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
            Professional Licenses and Certifications for People on Sex Offender Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical guide to choosing credential paths, checking licensing
            rules early, finding training, building proof, and using skills
            toward employment or self-employment.
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
          icon={<GraduationCap className="h-6 w-6" aria-hidden="true" />}
        >
          <p>
            A license or certification can be one of the strongest ways forward.
            It can make your skills visible, help you compete when ordinary
            hiring is difficult, support better pay, and sometimes open a path to
            self-employment.
          </p>

          <p>
            The key is to choose a path with a real shot. Some credentials have
            licensing boards, background reviews, insurance rules, placement
            sites, customer-contact issues, or worksite limits. Check those gates
            early, then build proof while you train.
          </p>

          <p>
            This guide is for people with sex offense convictions, registry
            requirements, or both. It is not here to talk you out of getting
            trained. It is here to help you choose carefully, ask better
            questions, and move toward work that is lawful, stable, and
            realistic.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Build a credential plan"
          subtitle="Start with the path, then check the gate, then build proof."
          icon={<ClipboardCheck className="h-6 w-6" aria-hidden="true" />}
          urgentActions={[
            <span>
              Choose one field to explore first: trade work, CDL, IT support,
              barber or cosmetology, food service, medical admin, bookkeeping,
              tax preparation, repair, or another skill path.
            </span>,
            <span>
              Identify the credential needed for entry-level work: license,
              certification, apprenticeship, endorsement, training card, or
              degree.
            </span>,
            <span>
              Find the licensing board, certifying body, apprenticeship sponsor,
              training provider, or employer gatekeeper that controls the next
              step.
            </span>,
          ]}
          nextActions={[
            <span>
              Ask whether sex offense convictions, registry requirements,
              supervision rules, worksite limits, or background checks affect
              eligibility.
            </span>,
            <span>
              Compare at least two paths before paying out of pocket. An
              apprenticeship, American Job Center, community college, or employer
              training program may lower the cost.
            </span>,
            <span>
              Start a proof packet now: certificates, attendance, evaluations,
              references, compliance records, and written answers from boards or
              programs.
            </span>,
          ]}
          reminder={
            <span>
              A credential can be a bridge to stable work. Check the gate early,
              then build the proof you need to walk through it.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Route 1",
              title: "Certification",
              icon: <FileText className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Often faster than a license and useful for proving skills to employers, customers, or training programs.",
            },
            {
              eyebrow: "Route 2",
              title: "Apprenticeship",
              icon: <Hammer className="h-5 w-5" aria-hidden="true" />,
              tone: "reentry",
              description:
                "Paid training tied to a trade or occupation. A strong option when available and compatible with your restrictions.",
            },
            {
              eyebrow: "Route 3",
              title: "State license",
              icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
              tone: "legal",
              description:
                "A formal permission to work in a regulated field. It can be powerful, but the board rules should be checked early.",
            },
            {
              eyebrow: "Route 4",
              title: "Stackable path",
              icon: <Route className="h-5 w-5" aria-hidden="true" />,
              tone: "info",
              description:
                "Start with a shorter credential, get work experience, then build toward a larger license or better role.",
            },
            {
              eyebrow: "Route 5",
              title: "Self-employment path",
              icon: <Wrench className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Some credentials can support trade work, repair, food, grooming, bookkeeping, tax, cleaning, or specialty services.",
            },
            {
              eyebrow: "Route 6",
              title: "Degree or diploma",
              icon: <BookOpen className="h-5 w-5" aria-hidden="true" />,
              tone: "neutral",
              description:
                "Education may help, but check whether the final job, internship, clinical site, or license has a separate background review.",
            },
          ]}
        />

        <GuideSectionHeader
          id="credential-types"
          number="1"
          title="Know what kind of credential you are chasing"
          subtitle="A license, certification, apprenticeship, and degree do different jobs."
          icon={<Search className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Before you choose a program, name the final goal. Are you trying to
              get hired, enter an apprenticeship, qualify for a license, start a
              small business, or build proof of skill? Each path has a different
              gate.
            </p>

            <p>
              A <strong>license</strong> is usually permission from a state or
              government board to perform regulated work. A{" "}
              <strong>certification</strong> usually proves training or skill
              through a company, school, industry group, or testing provider. An{" "}
              <strong>apprenticeship</strong> combines paid work and training. A{" "}
              <strong>degree or diploma</strong> shows education, but it may not
              answer whether the final job or license will be available.
            </p>

            <p>
              The strongest plan usually works backward from the job you want:
              final job → required credential → training provider → background
              review → cost and funding → application packet.
            </p>
          </GuideProse>

          <GuideCallout
            tone="success"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Look for stackable wins"
          >
            <p>
              A shorter credential can sometimes lead to a first job, a better
              reference, and a stronger application later. Examples include OSHA
              training before a trade helper role, food-handler training before
              kitchen work, CompTIA A+ before help desk, or forklift training
              before warehouse work.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="check-the-gate"
          number="2"
          title="Check the gate early"
          subtitle="Do this as a planning step, not as a reason to stop."
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People with criminal records can face licensing and employment
              rules called collateral consequences. The{" "}
              <a
                href={sourceLinks.nicccHome}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                National Inventory of Collateral Consequences of Conviction
              </a>{" "}
              describes collateral consequences as legal and regulatory
              restrictions that can affect employment, occupational licensing,
              housing, education, and other opportunities. Use it as one
              research tool, then confirm with the board or agency that controls
              your field.
            </p>

            <p>
              Checking early helps you avoid expensive detours. It can also show
              you what proof the board, employer, program, or sponsor wants to
              see.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Ask before you invest heavily"
            whoToAsk={
              <span>
                The state licensing board, certifying organization, training
                provider, apprenticeship sponsor, American Job Center, supervising
                officer, registering agency, employer placement site, insurance
                or bonding contact, and legal aid or an attorney when available.
              </span>
            }
            whatToAsk={
              <span>
                “For someone with my conviction history and registry
                requirements, can this credential lead to the license, placement,
                apprenticeship, job duties, worksite, driving, internet use, or
                self-employment path I am planning?”
              </span>
            }
            whatToSave={
              <span>
                Board rules, emails, screenshots, handbooks, application
                deadlines, names, dates, written answers, appeal information, and
                copies of any forms you submit.
              </span>
            }
          />

          <GuideChecklist
            id="gate-check-checklist"
            title="Gate-check questions"
            columns={2}
            items={[
              {
                id: "board",
                label:
                  "Is there a state board, licensing agency, or certifying body?",
              },
              {
                id: "conviction",
                label:
                  "Does the rule mention criminal convictions, moral character, good cause, rehabilitation, or public safety?",
              },
              {
                id: "registry",
                label:
                  "Does public registry status affect the license, placement, worksite, or employer policy?",
              },
              {
                id: "placement",
                label:
                  "Will there be an internship, clinical site, ride-along, apprenticeship sponsor, or supervised placement?",
              },
              {
                id: "duties",
                label:
                  "Will the work involve minors, schools, homes, healthcare facilities, vulnerable people, driving, travel, or internet access?",
              },
              {
                id: "appeal",
                label:
                  "If denied, is there appeal, waiver, predetermination, reconsideration, or a waiting period?",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="pathways"
          number="3"
          title="Credential paths worth exploring"
          subtitle="These paths can lead to stable work, better pay, or self-employment when chosen carefully."
          icon={<Route className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The paths below are not one-size-fits-all. They are starting points
              that many people explore because they can be skill-based,
              practical, stackable, or connected to real work. Use the cards to
              compare the path, then check your state and situation.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Trades and apprenticeships"
              subtitle="Electrical helper, HVAC, plumbing, welding, carpentry, maintenance, facilities, repair."
              icon={<Hammer className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Trade paths can be skill-based and stackable. Apprenticeships
                  may let you earn while learning, and some trades can support
                  later self-employment.
                </span>
              }
              steps={[
                <span>
                  Search{" "}
                  <a
                    href={sourceLinks.apprenticeshipFinder}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    Apprenticeship.gov's job finder
                  </a>{" "}
                  and ask local American Job Centers about trade training.
                </span>,
                <span>
                  Ask whether the sponsor, union, contractor, or licensing board
                  has rules about convictions or registry status.
                </span>,
                <span>
                  Check jobsite issues: schools, homes, youth facilities, travel,
                  tools, driving, and insurance.
                </span>,
              ]}
              bestFit={
                <span>
                  People who like hands-on work, want a visible skill, and can
                  build proof through training, work samples, and supervisor
                  references.
                </span>
              }
            />

            <PathwayCard
              title="CDL and transportation"
              subtitle="Class A or B CDL, local delivery, warehouse-to-driver, yard work, non-passenger routes."
              icon={<Truck className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  CDL training can create a clear credential and measurable
                  skill. Local, warehouse, or non-passenger routes may be more
                  realistic for some people than school bus, passenger, or HazMat
                  paths.
                </span>
              }
              steps={[
                <span>
                  Review{" "}
                  <a
                    href={sourceLinks.fmcsaEldt}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    FMCSA Entry-Level Driver Training rules
                  </a>{" "}
                  and use the{" "}
                  <a
                    href={sourceLinks.fmcsaTpr}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    Training Provider Registry
                  </a>{" "}
                  to check providers.
                </span>,
                <span>
                  Be careful with passenger, school bus, HazMat, interstate
                  travel, overnight routes, and home delivery.
                </span>,
                <span>
                  Ask about employer insurance rules, supervision travel rules,
                  and whether any endorsement requires a separate background
                  review.
                </span>,
              ]}
              bestFit={
                <span>
                  People with driving eligibility, steady reporting habits, and a
                  plan for routes that fit supervision and registry rules.
                </span>
              }
            />

            <PathwayCard
              title="IT support and device repair"
              subtitle="CompTIA A+, help desk, computer repair, networking basics, inventory, technical support."
              icon={<Laptop className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Many IT certifications are not state licenses, and skills can
                  be shown through certificates, projects, repair work, and
                  practice labs.
                </span>
              }
              steps={[
                <span>
                  Explore entry-level certifications such as{" "}
                  <a
                    href={sourceLinks.comptiaAPlus}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    CompTIA A+
                  </a>{" "}
                  and ask training providers about job placement.
                </span>,
                <span>
                  Check internet, device, monitoring, data-access, remote-work,
                  and customer-contact rules before choosing a role.
                </span>,
                <span>
                  Build proof with labs, repair notes, volunteer tech support,
                  certificates, and references.
                </span>,
              ]}
              bestFit={
                <span>
                  People who can use computers lawfully, learn independently,
                  document work, and handle customer or internal support
                  carefully.
                </span>
              }
            />

            <PathwayCard
              title="Barber, cosmetology, grooming, and personal services"
              subtitle="Barbering, cosmetology, nails, grooming, shop assistant, booth rental, future self-employment."
              icon={<Users className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  These fields can combine practical skill, customer service, and
                  business ownership potential. A license may help someone work
                  in a shop or eventually operate independently.
                </span>
              }
              steps={[
                <span>Check your state board rules before enrolling in school.</span>,
                <span>
                  Ask about background review, student clinic rules, minors,
                  mobile services, booth rental, and shop ownership.
                </span>,
                <span>
                  Build a portfolio, attendance record, instructor reference, and
                  customer-service proof.
                </span>,
              ]}
              bestFit={
                <span>
                  People who enjoy hands-on service work, can manage boundaries,
                  and want a skill that may support future self-employment.
                </span>
              }
            />

            <PathwayCard
              title="Food service and culinary credentials"
              subtitle="Food handler, ServSafe, prep cook, bakery, catering, food truck, kitchen supervision."
              icon={<Utensils className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Food credentials can be faster and practical. Kitchen and
                  back-of-house roles can help build recent references and may
                  lead to catering, food trucks, or specialty food work.
                </span>
              }
              steps={[
                <span>
                  Check local food-handler requirements and consider{" "}
                  <a
                    href={sourceLinks.servSafe}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    ServSafe
                  </a>{" "}
                  if it fits your local market.
                </span>,
                <span>
                  Verify school, youth-event, delivery, catering, and business
                  permit issues.
                </span>,
                <span>
                  Ask whether a community college, workforce office, or employer
                  offers low-cost training.
                </span>,
              ]}
              bestFit={
                <span>
                  People who want a practical first credential, fast entry into
                  work, and possible future business options.
                </span>
              }
            />

            <PathwayCard
              title="Office, bookkeeping, tax, and notary-adjacent work"
              subtitle="Bookkeeping, QuickBooks, payroll, tax preparation, admin support, notary where allowed."
              icon={<FileText className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Office credentials can support employment, freelance work, or a
                  small service business. Some paths are certification-based
                  rather than state-license-heavy.
                </span>
              }
              steps={[
                <span>
                  For tax preparation, review{" "}
                  <a
                    href={sourceLinks.irsPtin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    IRS PTIN requirements
                  </a>{" "}
                  and any state tax-preparer rules.
                </span>,
                <span>
                  Check state notary rules, financial data access, employer
                  background checks, and privacy duties.
                </span>,
                <span>
                  Build proof with coursework, practice files, volunteer admin
                  work, bookkeeping samples, and references.
                </span>,
              ]}
              bestFit={
                <span>
                  People who are organized, careful with records, and interested
                  in office work or low-overhead self-employment.
                </span>
              }
            />
          </div>
        </GuideSectionCard>

<GuideSectionHeader
          id="more-pathways"
          number="4"
          title="More credential paths to consider"
          subtitle="Some paths need extra checking but can still be worth exploring."
          icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Healthcare support and medical admin"
              subtitle="Medical billing, coding, records, sterile processing, phlebotomy, non-patient-facing support."
              icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Healthcare is a large field with both patient-facing and
                  non-patient-facing roles. Medical admin, billing, coding, and
                  records may be more realistic for some people than direct care.
                </span>
              }
              steps={[
                <span>
                  Before enrolling, ask about clinical placements, facility
                  policies, vulnerable-person access, registry rules, and state
                  credential requirements.
                </span>,
                <span>
                  If considering phlebotomy, review certifying options such as{" "}
                  <a
                    href={sourceLinks.nhaPhlebotomy}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    NHA Certified Phlebotomy Technician
                  </a>{" "}
                  and ask about placement barriers.
                </span>,
                <span>
                  Consider medical billing, coding, scheduling, records, or
                  supply roles if direct patient care is not realistic.
                </span>,
              ]}
              bestFit={
                <span>
                  People who want stable sector work and can carefully check
                  facility, placement, and background-review rules before paying.
                </span>
              }
            />

            <PathwayCard
              title="Home repair, inspection, and service businesses"
              subtitle="Home inspection, appliance repair, cleaning, landscaping, handyman-style services where lawful."
              icon={<Wrench className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Repair and service skills can support wage work or business
                  ownership. A credential can help customers and insurers see
                  skill and professionalism.
                </span>
              }
              steps={[
                <span>
                  Check private-home access, local business licensing, insurance,
                  bonding, advertising, transportation, and supervision rules.
                </span>,
                <span>
                  Consider commercial-only work, subcontracting, shop-based
                  repair, landscaping, or facilities roles if private homes are a
                  problem.
                </span>,
                <span>
                  Save before-and-after photos, customer references, training
                  certificates, and written scope-of-work records.
                </span>,
              ]}
              bestFit={
                <span>
                  People with practical skills who want a path that may connect
                  to self-employment after careful rule-checking.
                </span>
              }
            />
          </div>

          <GuideCallout
            tone="reentry"
            icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
            title="Credentials can support self-employment"
          >
            <p>
              Some people use licenses or certifications to move into small
              business ownership: repair, cleaning, bookkeeping, tax prep, food
              service, grooming, landscaping, inspection, or trade work. That can
              be a real path. It still requires planning around internet use,
              advertising, home visits, customer contact, insurance, taxes,
              permits, and any supervision or registry rules.
            </p>

            <p>
              SOLAR’s business ownership guide can go deeper on business setup,
              taxes, pricing, customer boundaries, and risk management once that
              path looks realistic.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="funding"
          number="5"
          title="Find lower-cost training and support"
          subtitle="Do not assume you have to pay full price upfront."
          icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A credential does not have to start with an expensive private
              school. American Job Centers, community colleges, apprenticeships,
              employers, unions, adult education programs, and reentry
              organizations may help with training, tools, exam fees,
              transportation, books, or job placement.
            </p>

            <p>
              Ask who pays, whether the training is approved, whether credits or
              hours transfer, whether job placement is realistic, and whether
              there is a paid apprenticeship or employer-sponsored route.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Training and funding starting points"
            resources={[
              {
                label: "American Job Center Finder",
                href: sourceLinks.careerOneStopAjc,
                badge: "Official",
                description:
                  "Find local workforce offices that may help with training referrals, WIOA-funded programs, job search, and support services.",
              },
              {
                label: "CareerOneStop Justice-Impacted Job Seekers",
                href: sourceLinks.careerOneStopJustice,
                badge: "Official",
                description:
                  "Career and training tools for people with criminal records.",
              },
              {
                label: "Apprenticeship.gov",
                href: sourceLinks.apprenticeshipHome,
                badge: "Official",
                description:
                  "Learn about Registered Apprenticeships and search paid earn-while-you-learn opportunities.",
              },
              {
                label: "Apprenticeship.gov — Barriers to Employment",
                href: sourceLinks.apprenticeshipBarriers,
                badge: "Official",
                description:
                  "Apprenticeship resources for career seekers with barriers to employment, including justice-involved people.",
              },
              {
                label: "DOL Reentry Employment Opportunities",
                href: sourceLinks.dolReentry,
                badge: "Official",
                description:
                  "Federal reentry employment and workforce resources.",
              },
              {
                label: "NICCC Collateral Consequences Inventory",
                href: sourceLinks.nicccConsequences,
                badge: "Research tool",
                description:
                  "Search legal and regulatory restrictions by jurisdiction and category, then verify with the controlling agency.",
              },
            ]}
          />

          <GuideCallout
            tone="success"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Ask for the practical answer"
          >
            <p>
              “Can I enroll?” is not enough. Ask: “Can people with my background
              complete this program, sit for the exam, get placed, receive the
              license or certificate, and get hired or self-employed in this
              field?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="proof-packet"
          number="6"
          title="Build your credential proof packet"
          subtitle="A good packet helps a board, employer, sponsor, or program see current readiness."
          icon={<FileText className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Do not wait until the application deadline to gather proof. Build
              the packet while you train. The goal is to show the whole picture:
              skill, reliability, accountability, stability, and current
              readiness.
            </p>

            <p>
              You do not need to hand every document to every person. Keep a
              complete packet for yourself, then share only what is required,
              strategic, and safe.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Credential proof packet"
            intro={
              <span>
                Keep copies in a paper folder and a secure digital folder if
                allowed.
              </span>
            }
            categories={[
              {
                title: "Training proof",
                items: [
                  "Certificates, completion letters, attendance records, grades, transcripts, and exam results.",
                  "Instructor evaluations, apprenticeship reviews, work samples, project photos, or portfolios.",
                  "OSHA, food-handler, forklift, CompTIA, CDL training, or other credential records.",
                ],
              },
              {
                title: "Application proof",
                items: [
                  "Licensing board emails, printed rules, screenshots, forms, deadlines, fees, and written answers.",
                  "Personal statement, rehabilitation evidence, compliance proof, and letters of support if appropriate.",
                  "Employment history, volunteer records, supervisor references, and proof of stable housing or community support.",
                ],
              },
              {
                title: "Backup and appeal records",
                items: [
                  "Denial letters, delay notices, missing-document requests, appeal deadlines, and reconsideration instructions.",
                  "Notes from calls with board staff, training providers, workforce offices, attorneys, or legal aid.",
                  "Alternative credential paths if the first route takes longer than expected.",
                ],
              },
            ]}
          />

          <GuideCallout
            tone="privacy"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Share carefully"
          >
            <p>
              Some records are sensitive. Do not automatically give employers,
              schools, or boards treatment records, supervision paperwork, court
              documents, or personal history details unless they are required,
              legally appropriate, and useful to the application.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="denial-delay"
          number="7"
          title="If a board says no, delays, or asks for more"
          subtitle="A setback may mean more proof, a waiting period, an appeal, or a related path."
          icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A denial or delay is not always the end of the path. Sometimes the
              board needs more documents. Sometimes the rule allows
              reconsideration, waiver, predetermination, appeal, rehabilitation
              evidence, or reapplication after a waiting period. Sometimes the
              wiser move is a related credential that gets you working sooner.
            </p>
          </GuideProse>

          <GuideChecklist
            id="denial-delay-checklist"
            title="What to ask next"
            columns={1}
            items={[
              {
                id: "written-reason",
                label:
                  "Ask for the decision, missing-document request, or concern in writing.",
              },
              {
                id: "rule",
                label:
                  "Ask what statute, regulation, board rule, or policy controls the decision.",
              },
              {
                id: "proof",
                label:
                  "Ask what proof would matter: training, references, work history, treatment completion, compliance, time since offense, or supervision status.",
              },
              {
                id: "review",
                label:
                  "Ask whether appeal, waiver, predetermination, reconsideration, hearing, or later reapplication is available.",
              },
              {
                id: "deadline",
                label:
                  "Write down every deadline and save envelopes, emails, notices, and portal messages.",
              },
              {
                id: "help",
                label:
                  "Contact legal aid, an occupational licensing clinic, public defender reentry staff, or an attorney if the license is important to your future.",
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="common-mistakes"
          number="8"
          title="Avoid costly detours"
          subtitle="These mistakes are common, understandable, and usually preventable."
          icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Choosing the most expensive program first.",
                whyItMatters:
                  "A costly program is not always the best path to work, licensing, or self-employment.",
                betterMove:
                  "Compare community college, apprenticeship, employer-paid, American Job Center, and shorter certificate routes before signing.",
              },
              {
                mistake: "Confusing school admission with license approval.",
                whyItMatters:
                  "A school may admit you even if a board, clinical site, employer, or placement partner later raises a barrier.",
                betterMove:
                  "Ask about the final license, placement, exam, employer background check, and worksite rules before paying.",
              },
              {
                mistake: "Ignoring apprenticeships.",
                whyItMatters:
                  "Apprenticeships can combine paid work, training, mentorship, and a recognized credential.",
                betterMove:
                  "Search Apprenticeship.gov and ask local workforce offices about sponsors willing to consider people with records.",
              },
              {
                mistake: "Assuming a certification means no background check.",
                whyItMatters:
                  "A certificate may be available, but employers, clients, platforms, or placement sites may still screen applicants.",
                betterMove:
                  "Check the full chain: training, exam, placement, license, employer, insurance, and job duties.",
              },
              {
                mistake: "Picking a path with unavoidable restricted contact.",
                whyItMatters:
                  "Some roles regularly involve minors, schools, homes, healthcare facilities, travel, or internet use.",
                betterMove:
                  "Look for related roles with safer settings, such as commercial sites, shop-based repair, back-of-house work, admin support, or adult worksites.",
              },
              {
                mistake: "Not building proof while training.",
                whyItMatters:
                  "A board, sponsor, or employer may need more than a completed class.",
                betterMove:
                  "Collect certificates, attendance, evaluations, references, work samples, and written answers as you go.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="9"
          title="If internet, transportation, or printing is limited"
          subtitle="You can still research credentials with phone calls, paper records, and local help."
          icon={<Phone className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet credential research"
            icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            note={
              <span>
                Use these steps if you are phone-only, recently released,
                incarcerated, under internet restrictions, without a printer, or
                relying on someone else for research.
              </span>
            }
            items={[
              <span>
                Call the licensing board and ask for mailed forms, printed rules,
                and the correct person for criminal-history questions.
              </span>,
              <span>
                Call an American Job Center and ask about approved training,
                WIOA funding, reentry employment programs, apprenticeships, and
                transportation help.
              </span>,
              <span>
                Ask a trusted person to print licensing rules, program costs,
                board applications, apprenticeship listings, and email
                confirmations.
              </span>,
              <span>
                Keep a paper folder with names, dates, phone numbers, board
                rules, program brochures, receipts, and written answers.
              </span>,
              <span>
                Visit a public library, community college, workforce office, or
                reentry program for computer access only if your restrictions
                allow it.
              </span>,
              <span>
                If you are incarcerated, ask family or reentry staff to gather
                board rules, local training programs, and apprenticeship contacts
                before release.
              </span>,
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="10"
          title="Resources, related guides, and sources"
          subtitle="Use these tools to research, compare, and keep moving."
          icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Credential research tools"
            resources={[
              {
                label: "NICCC Collateral Consequences Inventory",
                href: sourceLinks.nicccConsequences,
                badge: "Research tool",
                description:
                  "Search legal and regulatory restrictions by jurisdiction and category, then verify with the controlling board or agency.",
              },
              {
                label: "American Job Center Finder",
                href: sourceLinks.careerOneStopAjc,
                badge: "Official",
                description:
                  "Find local workforce offices that may help with approved training, employment services, and support programs.",
              },
              {
                label: "Apprenticeship.gov Job Finder",
                href: sourceLinks.apprenticeshipFinder,
                badge: "Official",
                description:
                  "Search apprenticeship openings and apply directly with employers or program sponsors.",
              },
              {
                label: "FMCSA Training Provider Registry",
                href: sourceLinks.fmcsaTpr,
                badge: "CDL",
                description:
                  "Check CDL training providers for entry-level driver training paths.",
              },
              {
                label: "TSA HazMat Endorsement",
                href: sourceLinks.tsaHazmat,
                badge: "CDL",
                description:
                  "Review federal background-check information before planning around a HazMat endorsement.",
              },
              {
                label: "IRS PTIN Requirements",
                href: sourceLinks.irsPtin,
                badge: "Tax prep",
                description:
                  "Official IRS information for paid tax return preparer PTIN requirements.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Employment Strategies for People on Sex Offender Registries",
                description:
                  "Use this for resumes, disclosure scripts, interviews, documentation packets, and first-90-days planning.",
                to: sourceLinks.employmentStrategies,
              },
              {
                title: "Employment Directory for People on Sex Offender Registries",
                description:
                  "Use this to find job boards, workforce offices, apprenticeships, training leads, and employer lead sources.",
                to: sourceLinks.employmentDirectory,
              },
              {
                title: "Small Business & Entrepreneurship Guide",
                description:
                  "Use this when a credential may support self-employment, contracting, repair work, food service, bookkeeping, or a trade business.",
                to: sourceLinks.smallBusinessGuide,
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use this to coordinate credential planning with IDs, housing, supervision, registration, and employment tasks.",
                to: sourceLinks.reentryChecklist,
              },
              {
                title: "Know Your Rights Guide",
                description:
                  "Use this for documentation, legal-risk questions, background-check issues, and safe communication.",
                to: sourceLinks.knowYourRights,
              },
              {
                title: "Housing Search Guide",
                description:
                  "Stable housing, work, training, and supervision planning often affect each other.",
                to: sourceLinks.housingSearch,
              },
            ]}
          />

          <SoftDivider />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Legal and licensing note"
          >
            <p>
              This guide is a planning tool, not legal advice or licensing
              approval. A credential path may depend on your state, conviction
              history, registry status, supervision or court conditions, the
              exact license or certification, placement sites, employer policy,
              insurance, and local rules. Before paying for training, applying
              for a license, accepting placement, or starting a business, verify
              the current rules with the board, program, employer, supervising
              authority, or a qualified legal professional.
            </p>
          </GuideCallout>

          <div id="sources">
            <SourceList
              title="Sources and verification"
              note="These sources support credential research, apprenticeships, CDL training, HazMat checks, tax-prep requirements, and employment-barrier planning. State licensing and registry rules still need case-specific verification."
              sources={[
                {
                  label:
                    "National Inventory of Collateral Consequences of Conviction",
                  href: sourceLinks.nicccHome,
                  description:
                    "Explains collateral consequences affecting employment, occupational licensing, housing, education, and other opportunities.",
                },
                {
                  label: "NICCC Collateral Consequences Inventory",
                  href: sourceLinks.nicccConsequences,
                  description:
                    "Search tool for legal and regulatory restrictions by jurisdiction and category.",
                },
                {
                  label: "CareerOneStop — American Job Centers",
                  href: sourceLinks.careerOneStopAjc,
                  description:
                    "Official finder for local workforce offices and training support.",
                },
                {
                  label: "CareerOneStop — Justice-Impacted Job Seekers",
                  href: sourceLinks.careerOneStopJustice,
                  description:
                    "Career and training tools for people with criminal records.",
                },
                {
                  label: "Apprenticeship.gov",
                  href: sourceLinks.apprenticeshipHome,
                  description:
                    "Federal apprenticeship resource for career seekers, employers, and education partners.",
                },
                {
                  label: "Apprenticeship.gov Job Finder",
                  href: sourceLinks.apprenticeshipFinder,
                  description:
                    "Search tool for apprenticeship job opportunities and direct application to employers or sponsors.",
                },
                {
                  label: "Apprenticeship.gov — Career Seekers with Barriers",
                  href: sourceLinks.apprenticeshipBarriers,
                  description:
                    "Apprenticeship information for career seekers with employment barriers, including justice-involved people.",
                },
                {
                  label:
                    "U.S. Department of Labor — Reentry Employment Opportunities",
                  href: sourceLinks.dolReentry,
                  description:
                    "Federal reentry employment and workforce resources.",
                },
                {
                  label: "FMCSA — Entry-Level Driver Training",
                  href: sourceLinks.fmcsaEldt,
                  description:
                    "Federal CDL entry-level driver training requirements.",
                },
                {
                  label: "FMCSA Training Provider Registry",
                  href: sourceLinks.fmcsaTpr,
                  description:
                    "Registry for CDL training providers subject to entry-level driver training rules.",
                },
                {
                  label: "TSA — HazMat Endorsement",
                  href: sourceLinks.tsaHazmat,
                  description:
                    "Federal information about HazMat endorsement security threat assessment.",
                },
                {
                  label: "TSA — Disqualifying Offenses and Other Factors",
                  href: sourceLinks.tsaDisqualifying,
                  description:
                    "Federal information about offenses and factors that may affect certain TSA security threat assessments.",
                },
                {
                  label: "IRS — PTIN Requirements for Tax Return Preparers",
                  href: sourceLinks.irsPtin,
                  description:
                    "Official IRS information for paid tax return preparer PTIN requirements.",
                },
                {
                  label: "CompTIA A+",
                  href: sourceLinks.comptiaAPlus,
                  description:
                    "Entry-level IT certification referenced as an example credential path.",
                },
                {
                  label: "OSHA Outreach Training Program",
                  href: sourceLinks.oshaTraining,
                  description:
                    "Safety training referenced as a possible stackable trade credential.",
                },
                {
                  label: "ServSafe",
                  href: sourceLinks.servSafe,
                  description:
                    "Food safety certification referenced as a possible culinary or food-service credential.",
                },
                {
                  label: "NHA Certified Phlebotomy Technician",
                  href: sourceLinks.nhaPhlebotomy,
                  description:
                    "Healthcare support certification referenced as an example that requires careful placement and facility-policy review.",
                },
              ]}
            />
          </div>
        </GuideSectionCard>
      </main>
    </div>
  );
}