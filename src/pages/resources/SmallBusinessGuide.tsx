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
  Hammer,
  Laptop,
  MapPinned,
  Megaphone,
  Phone,
  PiggyBank,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
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
  ScriptBox,
  OfflineOptions,
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const sourceLinks = {
  employmentStrategies: "/resources/job-search-guide",
  employmentDirectory: "/resources/employment-directory",
  professionalLicensing: "/resources/professional-licensing",
  reentryChecklist: "/resources/reentry-checklist",
  knowYourRights: "/resources/know-your-rights",
  housingSearch: "/resources/housing-search-guide",

  irsEin:
    "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
  irsSelfEmployed:
    "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center",
  irsSmallBusiness:
    "https://www.irs.gov/businesses/small-businesses-self-employed",
  sbaLearning: "https://www.sba.gov/sba-learning-platform",
  sbaLocalAssistance: "https://www.sba.gov/local-assistance",
  sbaMicroloans: "https://www.sba.gov/funding-programs/loans/microloans",
  sbaMicrolenderList:
    "https://www.sba.gov/funding-programs/loans/microloans/list-microlenders",
  score: "https://www.score.org/",
  sbdc: "https://americassbdc.org/find-your-sbdc/",
  careerOneStopAjc:
    "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx",
  ftcScams:
    "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/scams",
  youtube: "https://www.youtube.com/",
  redditSmallBusiness: "https://www.reddit.com/r/smallbusiness/",
  redditEntrepreneur: "https://www.reddit.com/r/Entrepreneur/",
  redditAutoDetailing: "https://www.reddit.com/r/AutoDetailing/",
};

export default function SmallBusinessGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Small Business and Self-Employment Guide for People on Sex Offender Registries | The SOLAR Project"
        description="A practical, registry-aware guide to small business, freelancing, contracting, and self-employment for people with sex offense convictions, registry requirements, or both."
        keywords="small business sex offender registry, self employment sex offender registry, start a business with felony conviction, entrepreneurship after incarceration, registrant self employment, reentry business ownership, freelancing with criminal record"
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
            Small Business and Self-Employment Guide for People on Sex Offender Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical guide to testing a simple business idea, getting first
            customers, keeping records, managing supervision and registry limits,
            and building toward stable self-employment.
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
          icon={<Briefcase className="h-6 w-6" aria-hidden="true" />}
        >
          <p>
            Self-employment is not easier than employment, but it can give you
            more control. For some people on sex offender registries, a small
            service business, freelance skill, trade, repair path, or local
            customer base can become a route to income, stability, and dignity.
          </p>

          <p>
            The goal is not to build a perfect company on day one. Start with one
            useful service, one lawful customer, one clear price, and one record
            of the work. Then repeat what works.
          </p>

          <p>
            Your business still has to fit your supervision, registry, internet,
            travel, worksite, customer-contact, tax, licensing, and insurance
            rules. Treat compliance as part of the business plan, not as the end
            of the business idea.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Start with one lawful, simple offer"
          subtitle="A small business can begin with one service you can do safely and document clearly."
          icon={<ClipboardCheck className="h-6 w-6" aria-hidden="true" />}
          urgentActions={[
            <span>
              Pick one service you can do with the tools, time, transportation,
              internet access, and customer boundaries you actually have.
            </span>,
            <span>
              Check supervision, registry, worksite, internet, travel, payment,
              and customer-contact rules before advertising or accepting work.
            </span>,
            <span>
              Write one simple offer: what you do, who it helps, what it costs,
              where you can do it, and what you will not do.
            </span>,
          ]}
          nextActions={[
            <span>
              Identify three possible first customers: a trusted person, small
              business, church, nonprofit, landlord, shop owner, or repeat local
              need.
            </span>,
            <span>
              Make one flyer, text message, paper handout, or short script to
              explain the service.
            </span>,
            <span>
              Save proof of every job: date, customer, location, payment,
              supplies, photos if appropriate, and any feedback.
            </span>,
          ]}
          reminder={
            <span>
              A simple, lawful, well-documented first job is better than a
              perfect business plan you never use.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Choose a service",
              icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Start with a problem people already pay to solve: cleaning, repair, yard work, admin help, food, resale, or practical support.",
            },
            {
              eyebrow: "Step 2",
              title: "Check the rules",
              icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
              tone: "legal",
              description:
                "Build around supervision, registry, internet, travel, customer-contact, licensing, tax, and insurance limits.",
            },
            {
              eyebrow: "Step 3",
              title: "Get one customer",
              icon: <Users className="h-5 w-5" aria-hidden="true" />,
              tone: "info",
              description:
                "Test demand with a small job before spending heavily on tools, ads, websites, or courses.",
            },
            {
              eyebrow: "Step 4",
              title: "Document everything",
              icon: <ReceiptText className="h-5 w-5" aria-hidden="true" />,
              tone: "reentry",
              description:
                "Keep records for taxes, supervision, customer trust, pricing, and future growth.",
            },
            {
              eyebrow: "Step 5",
              title: "Reinvest slowly",
              icon: <PiggyBank className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Buy better tools, insurance, training, or marketing only after real customer interest appears.",
            },
            {
              eyebrow: "Step 6",
              title: "Formalize when ready",
              icon: <Building2 className="h-5 w-5" aria-hidden="true" />,
              tone: "neutral",
              description:
                "As the idea proves itself, look at EINs, business registration, insurance, licenses, contracts, and tax planning.",
            },
          ]}
        />

        <GuideSectionHeader
          id="fit"
          number="1"
          title="Choose a business that fits your reality"
          subtitle="The best first business is useful, lawful, repeatable, and easy to document."
          icon={<Search className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Start with your actual life, not someone else’s idea of success.
              A good business idea should fit your skills, restrictions,
              transportation, internet access, tools, schedule, health, family
              responsibilities, and comfort with customers.
            </p>

            <p>
              Ask three questions: What can I do well? What do people nearby
              already pay for? What can I do without creating supervision,
              registry, internet, travel, or customer-contact problems?
            </p>
          </GuideProse>

          <GuideChecklist
            id="business-fit-checklist"
            title="Reality check before choosing an idea"
            columns={2}
            items={[
              {
                id: "skills",
                label:
                  "List five skills you already have: cleaning, repair, writing, cooking, hauling, organizing, bookkeeping, yard work, tech help, or customer service.",
              },
              {
                id: "limits",
                label:
                  "List limits you must build around: curfew, internet rules, travel radius, transportation, restricted zones, customer type, or worksite rules.",
              },
              {
                id: "tools",
                label:
                  "List tools and supplies you already own or can borrow lawfully.",
              },
              {
                id: "customers",
                label:
                  "Name three groups who might pay: small businesses, landlords, neighbors, churches, nonprofits, contractors, or repeat local customers.",
              },
              {
                id: "proof",
                label:
                  "Decide how you will document each job: receipt, invoice, job log, photo, signed note, text confirmation, or payment record.",
              },
              {
                id: "first-offer",
                label:
                  "Write one plain sentence: “I help [type of customer] with [service] for [price or estimate process].”",
              },
            ]}
          />

          <GuideCallout
            tone="success"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Start small enough to learn"
          >
            <p>
              Your first offer does not have to become your final business. A
              small job teaches pricing, timing, supplies, customer boundaries,
              and whether people will pay for the service.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="rules"
          number="2"
          title="Build the business around your rules"
          subtitle="Compliance is part of the business plan."
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Self-employment can give you control, but it does not remove legal
              or supervision responsibilities. Before you advertise, accept
              customers, use platforms, enter homes, travel, hire help, or take
              online payments, check the rules that apply to you.
            </p>

            <p>
              The answer can change depending on the exact service. Commercial
              cleaning may be different from private-home cleaning. Shop-based
              repair may be different from mobile repair. Local pickup may be
              different from delivery to private homes.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify the business setup"
            whoToAsk={
              <span>
                Your supervising officer if you are on supervision; the
                registering agency for registry-specific questions; an attorney
                or legal aid office for legal-risk questions; and a licensing,
                tax, insurance, or small-business advisor when the issue is
                business-specific.
              </span>
            }
            whatToAsk={
              <span>
                “Can I operate this exact service, in these locations, using
                these tools, payment methods, advertisements, devices, websites,
                customer contacts, and travel patterns?”
              </span>
            }
            whatToSave={
              <span>
                Written approvals, call notes, names, dates, restrictions,
                business plan summary, invoices, receipts, customer logs, and
                permission to use any internet, device, platform, or payment app.
              </span>
            }
          />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Check before using online tools"
          >
            <p>
              Free learning and online marketing can be valuable, but do not risk
              a violation to watch tutorials, use social media, join forums, run
              ads, or use payment apps. If you have internet, social media,
              device, or platform restrictions, ask what is allowed and save the
              answer.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="idea-lanes"
          number="3"
          title="Business idea lanes"
          subtitle="These are idea lanes, not limits. Use them to expand your thinking."
          icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The examples below are not the only businesses you can start. They
              are work patterns. Use them to think about what fits your skills,
              restrictions, transportation, tools, internet access, and customer
              boundaries.
            </p>
          </GuideProse>

          <GuideCallout
            tone="success"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Competition is a sign people already pay for the service"
          >
            <p>
              Do not get discouraged because someone else already offers your
              idea. That usually means the need is real. You do not have to be
              the only person mowing lawns, cleaning offices, detailing cars,
              fixing bikes, doing bookkeeping, or selling baked goods. You need a
              clear customer, reliable service, fair pricing, good records, and a
              reason someone would choose you for this job.
            </p>
          </GuideCallout>

          <div className="grid gap-4 md:grid-cols-2">
            <GuideCallout
              tone="neutral"
              icon={<Hammer className="h-5 w-5" aria-hidden="true" />}
              title="Outdoor and property services"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> mowing, leaf cleanup, snow removal,
                  pressure washing, driveway sealing, yard debris hauling, fence
                  repair, commercial groundskeeping.
                </p>
                <p>
                  <strong>Why it can work:</strong> outdoor services can start
                  small, show clear before/after results, and build local repeat
                  customers.
                </p>
                <p>
                  <strong>Check:</strong> travel radius, restricted zones, work
                  near schools or parks, private-property access, water/runoff
                  rules, insurance, and customer boundaries.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
              title="Cleaning, turnover, and facilities support"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> office cleaning, commercial
                  cleaning, move-out cleaning, post-construction cleanup,
                  trash-out services, janitorial support, restroom restock,
                  laundry pickup if allowed.
                </p>
                <p>
                  <strong>Why it can work:</strong> cleaning and facilities work
                  can become repeat income, especially with business customers.
                </p>
                <p>
                  <strong>Check:</strong> private homes, keys, access codes,
                  unsupervised entry, schools, child care, youth programs,
                  insurance, and bonding.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<Wrench className="h-5 w-5" aria-hidden="true" />}
              title="Repair, assembly, and practical help"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> furniture assembly, bike repair,
                  appliance repair, small engine repair, tool sharpening, screen
                  repair, shop-based repair, commercial maintenance help.
                </p>
                <p>
                  <strong>Why it can work:</strong> customers can see the value,
                  and practical work can grow toward trade credentials or
                  self-employment.
                </p>
                <p>
                  <strong>Check:</strong> contractor licensing, private-home
                  entry, tool rules, insurance, customer boundaries, and which
                  jobs require a licensed professional.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<Wrench className="h-5 w-5" aria-hidden="true" />}
              title="Vehicle, equipment, and surface services"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> auto detailing, fleet washing,
                  equipment cleaning, dumpster pad cleaning, graffiti removal,
                  parking lot cleanup, pressure washing, small equipment hauling.
                </p>
                <p>
                  <strong>Why it can work:</strong> surface and equipment work
                  can be documented with photos and may grow through repeat
                  commercial accounts.
                </p>
                <p>
                  <strong>Check:</strong> local water and runoff rules, business
                  permits, driving, customer-site restrictions, advertising
                  rules, and where the work happens.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
              title="Food, craft, and local product sales"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> cottage-food baking where lawful,
                  jams, sauces, spice blends, crafts, woodworking products,
                  repair/resale goods, market table items.
                </p>
                <p>
                  <strong>Why it can work:</strong> product-based work can start
                  small and grow through repeat buyers, local markets, and word
                  of mouth.
                </p>
                <p>
                  <strong>Check:</strong> cottage-food rules, permits, labels,
                  food safety, youth or school events, delivery, sales tax,
                  product liability, and online marketplace access.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<Laptop className="h-5 w-5" aria-hidden="true" />}
              title="Administrative, digital, and back-office services"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> bookkeeping, tax prep if eligible,
                  document formatting, data entry, resume formatting, virtual
                  assistant work, basic website updates, tech support, device
                  setup.
                </p>
                <p>
                  <strong>Why it can work:</strong> back-office services can
                  support local businesses and may pair well with bookkeeping,
                  tax, tech, or office certifications.
                </p>
                <p>
                  <strong>Check:</strong> internet and device restrictions,
                  customer data access, platform rules, background checks,
                  financial information, remote-work policies, and contact with
                  minors.
                </p>
              </GuideProse>
            </GuideCallout>
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="more-idea-lanes"
          number="4"
          title="More idea lanes"
          subtitle="Resale, credential-backed work, and hybrid paths can also be realistic."
          icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <div className="grid gap-4 md:grid-cols-2">
            <GuideCallout
              tone="neutral"
              icon={<ReceiptText className="h-5 w-5" aria-hidden="true" />}
              title="Resale, refurbishing, and micro-commerce"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> flea market resale, tool resale,
                  furniture flipping, appliance refurbishing, thrift-to-resale,
                  consignment support, used book resale, repair-and-resell.
                </p>
                <p>
                  <strong>Why it can work:</strong> resale can start with small
                  inventory and teach pricing, records, customer communication,
                  and profit tracking.
                </p>
                <p>
                  <strong>Check:</strong> online marketplace rules, meeting
                  locations, transportation, stolen-goods risk, receipts, proof
                  of ownership, sales tax, and platform restrictions.
                </p>
              </GuideProse>
            </GuideCallout>

            <GuideCallout
              tone="neutral"
              icon={<FileText className="h-5 w-5" aria-hidden="true" />}
              title="Credential-backed or regulated services"
            >
              <GuideProse>
                <p>
                  <strong>Examples:</strong> barbering, cosmetology, HVAC,
                  electrical helper path, plumbing helper path, tax prep,
                  bookkeeping certification, home inspection, food safety,
                  cleaning certification.
                </p>
                <p>
                  <strong>Why it can work:</strong> a license or certification
                  can help customers see skill and may support higher-value
                  self-employment over time.
                </p>
                <p>
                  <strong>Check:</strong> use SOLAR’s{" "}
                  <Link
                    to={sourceLinks.professionalLicensing}
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    Professional Licenses and Certifications guide
                  </Link>{" "}
                  to check boards, exams, worksite rules, background review,
                  insurance, and whether the credential supports employment,
                  contracting, booth rental, freelance work, or lawful business
                  ownership.
                </p>
              </GuideProse>
            </GuideCallout>
          </div>

          <GuideCallout
            tone="reentry"
            icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
            title="Mix and match the lanes"
          >
            <p>
              A business idea can combine lanes. A lawn service may add pressure
              washing. A cleaning business may add restroom restock. A repair
              service may add resale. A food product may start at local markets
              and later add catering support. Think in patterns, not boxes.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="learn-first"
          number="5"
          title="Learn the skill without paying first"
          subtitle="Free and low-cost learning can help you test an idea before buying a course or equipment."
          icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Formal training can help, especially when a license, certificate,
              insurance policy, or employer requires it. But many small-business
              skills can be explored for free or low cost before you pay for a
              program.
            </p>

            <p>
              If your internet rules allow it,{" "}
              <a
                href={sourceLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                YouTube
              </a>{" "}
              tutorials, niche forums, library resources, supplier websites,
              product manuals, trade groups, and communities like{" "}
              <a
                href={sourceLinks.redditSmallBusiness}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                r/smallbusiness
              </a>
              ,{" "}
              <a
                href={sourceLinks.redditEntrepreneur}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                r/Entrepreneur
              </a>
              , and niche communities like{" "}
              <a
                href={sourceLinks.redditAutoDetailing}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                r/AutoDetailing
              </a>{" "}
              can help you compare tools, avoid beginner mistakes, and decide
              whether an idea is worth testing.
            </p>
          </GuideProse>

          <GuideCallout
            tone="privacy"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Use online learning only if allowed"
          >
            <p>
              If you have internet, device, social media, app, or platform
              restrictions, check what is allowed before using video platforms,
              forums, social media groups, online marketplaces, or paid course
              sites. Printed manuals, library books, community workshops, and
              trusted helpers can be safer alternatives.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="learn-practice-prove"
            title="Learn, practice, prove"
            columns={1}
            items={[
              {
                id: "learn",
                label:
                  "Learn: watch, read, compare, ask questions, and study safety or legal basics before touching a customer job.",
              },
              {
                id: "practice",
                label:
                  "Practice: test the skill on your own property, a donated item, a sample project, or a trusted person’s small job with permission.",
              },
              {
                id: "prove",
                label:
                  "Prove: save before/after photos where appropriate, receipts, time logs, supply lists, practice notes, and feedback.",
              },
            ]}
          />

          <SoftDivider label="Examples" />

          <GuideProse>
            <p>
              <strong>Outdoor and surface work:</strong> learn mowing patterns,
              edging, pressure-washer safety, runoff rules, tool maintenance, and
              pricing. Practice on your own yard, a family driveway, or a small
              cleanup project. Prove it with photos, time spent, supplies used,
              and customer feedback.
            </p>

            <p>
              <strong>Cleaning and facilities:</strong> learn commercial cleaning
              checklists, safe chemical handling, restroom restock systems,
              move-out cleaning standards, and pricing per room, square foot, or
              job. Practice a room-by-room checklist. Prove it with a completed
              checklist, supply list, time log, and written feedback.
            </p>

            <p>
              <strong>Repair and assembly:</strong> learn manufacturer manuals,
              furniture assembly videos, basic tool safety, bike repair, small
              appliance troubleshooting, and when a job requires a licensed
              professional. Practice on your own items or donated goods. Prove it
              with parts receipts, photos, and short repair notes.
            </p>

            <p>
              <strong>Admin and digital work:</strong> learn spreadsheets,
              invoice templates, bookkeeping basics, document formatting,
              privacy, and basic website maintenance. Practice with sample files
              that contain no private information. Prove it with sanitized
              examples, time logs, and client feedback.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-customer"
          number="6"
          title="Get your first customer"
          subtitle="Do not wait for a perfect website, logo, or business plan."
          icon={<Users className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Your first customer should be simple, safe, and documentable. The
              goal is to prove that someone will pay for the service and that you
              can deliver it within your rules.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-customer-checklist"
            title="First-customer plan"
            columns={2}
            items={[
              {
                id: "offer",
                label:
                  "Write one clear offer: service, customer type, price or estimate method, location, and limits.",
              },
              {
                id: "list",
                label:
                  "Make a list of 10 possible customers or referral sources.",
              },
              {
                id: "flyer",
                label:
                  "Create one flyer, text message, or short script that explains the offer.",
              },
              {
                id: "deposit",
                label:
                  "For supply-heavy jobs, consider a reasonable deposit or customer-paid materials.",
              },
              {
                id: "job-log",
                label:
                  "Log the date, location, service, price, payment, time spent, supplies, and customer feedback.",
              },
              {
                id: "referral",
                label:
                  "After a good job, ask for one referral, review, repeat booking, or permission to use a before/after photo.",
              },
            ]}
          />

          <div className="space-y-4">
            <ScriptBox
              title="Simple first-customer script"
              tone="success"
              context="Use with a trusted person, small business, landlord, nonprofit, or referral source."
              script={`Hi, I’m starting a small [service] business and taking on a few simple jobs to build references.

I can help with [specific service] for [price or estimate method]. I’m keeping the work small, scheduled, and documented.

Would you or someone you know be interested in a first job or referral?`}
            />

            <ScriptBox
              title="Supervision approval script"
              tone="legal"
              context="Use before advertising, accepting jobs, using platforms, or taking payments if you are on supervision."
              script={`I am considering a small self-employment service doing [service]. The work would involve [locations], [hours], [tools], [transportation], [payment method], and [customer contact].

I want to make sure it stays fully compliant with my conditions. Can you tell me what is allowed, what I should avoid, and whether I can get that in writing?`}
            />

            <ScriptBox
              title="Referral or review request"
              tone="neutral"
              context="Use after a completed job if the customer is satisfied."
              script={`Thank you for trusting me with this job. I’m building my small business carefully and would be grateful for a referral or short review.

If you know one person or business that could use [service], would you be willing to pass along my name?`}
            />
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="money"
          number="7"
          title="Money, funding, and avoiding traps"
          subtitle="Start lean, prove demand, and avoid debt that puts pressure on your stability."
          icon={<PiggyBank className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Many small businesses fail because they buy too much before
              proving demand. Start with the smallest version that can be done
              safely and well. Rent tools, borrow lawfully, buy used, require
              customer-paid materials, or start with services that use supplies
              you already have.
            </p>

            <p>
              Official resources like the{" "}
              <a
                href={sourceLinks.sbaLearning}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                SBA Learning Platform
              </a>
              ,{" "}
              <a
                href={sourceLinks.score}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                SCORE
              </a>
              , and your local{" "}
              <a
                href={sourceLinks.sbdc}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Small Business Development Center
              </a>{" "}
              can help you think through pricing, planning, and growth before
              you borrow money.
            </p>
          </GuideProse>

          <GuideChecklist
            id="funding-options"
            title="Lower-risk funding ideas"
            columns={2}
            items={[
              {
                id: "bootstrap",
                label:
                  "Bootstrap: start with tools and supplies you already have.",
              },
              {
                id: "deposit",
                label:
                  "Use deposits or customer-paid materials for jobs that require supplies.",
              },
              {
                id: "anchor",
                label:
                  "Find one repeat customer before buying more equipment.",
              },
              {
                id: "rent",
                label:
                  "Rent, borrow lawfully, or buy used tools before buying new.",
              },
              {
                id: "micro",
                label:
                  "Research SBA microloans only after you understand repayment, demand, and risk.",
              },
              {
                id: "reinvest",
                label:
                  "Reinvest from completed jobs instead of borrowing for an untested idea.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Avoid fast-cash traps"
          >
            <p>
              Be careful with expensive loans, “guaranteed approval” offers,
              equipment financing you do not understand, fake grant promises,
              and anyone charging to get an EIN. The{" "}
              <a
                href={sourceLinks.irsEin}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-amber-400 underline-offset-2 hover:text-amber-950"
              >
                IRS says you can get an EIN directly from the IRS for free
              </a>
              .
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="basics"
          number="8"
          title="Set up the basics"
          subtitle="Simple structure and clean records protect you as the business grows."
          icon={<FileText className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              You do not need to formalize everything before your first small
              test job. But as soon as money starts moving, records matter. Good
              records help with taxes, supervision, pricing, customer trust, and
              future business decisions.
            </p>

            <p>
              The{" "}
              <a
                href={sourceLinks.irsSelfEmployed}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                IRS Self-Employed Individuals Tax Center
              </a>{" "}
              and{" "}
              <a
                href={sourceLinks.irsSmallBusiness}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                IRS Small Business and Self-Employed Tax Center
              </a>{" "}
              are useful starting points for understanding tax basics.
            </p>
          </GuideProse>

          <GuideChecklist
            id="business-basics"
            title="Basic setup checklist"
            columns={2}
            items={[
              {
                id: "name",
                label:
                  "Choose a simple business name, or start under your own name if that is simpler and allowed.",
              },
              {
                id: "ein",
                label:
                  "If you need an EIN, use the official IRS EIN page instead of a paid third-party site.",
              },
              {
                id: "money",
                label:
                  "Separate business money from personal money as early as you can.",
              },
              {
                id: "receipts",
                label:
                  "Save receipts, invoices, mileage, supplies, customer payments, and refund records.",
              },
              {
                id: "permits",
                label:
                  "Check local business registration, sales tax, food permits, contractor rules, or licensing requirements.",
              },
              {
                id: "taxes",
                label:
                  "Ask a tax preparer, VITA site, SBDC, SCORE mentor, or local business advisor about tax filing and estimated payments.",
              },
            ]}
          />

          <DocumentPacket
            title="Business records folder"
            intro={
              <span>
                Keep a paper folder and, if allowed, a secure digital folder.
              </span>
            }
            categories={[
              {
                title: "Compliance and setup",
                items: [
                  "Written supervision or registry approvals related to the business.",
                  "Business name registration, EIN confirmation, local permits, licenses, insurance, or bonding records if needed.",
                  "Notes from calls with agencies, boards, insurers, or business advisors.",
                ],
              },
              {
                title: "Customer and job records",
                items: [
                  "Job log with date, customer, location, service, price, payment, time spent, and supplies.",
                  "Invoices, receipts, estimates, signed work notes, deposit records, refunds, and payment screenshots.",
                  "Before/after photos only when appropriate and with permission.",
                ],
              },
              {
                title: "Growth records",
                items: [
                  "Marketing materials, flyers, business cards, testimonials, reviews, referral notes, and repeat-customer schedules.",
                  "Tool purchases, mileage logs, training certificates, insurance quotes, and price changes.",
                  "Monthly notes about what worked, what did not, and what to try next.",
                ],
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="marketing"
          number="9"
          title="Market with privacy and stigma awareness"
          subtitle="Build trust through service, records, referrals, and calm communication."
          icon={<Megaphone className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Marketing does not have to start online. Flyers, business cards,
              bulletin boards, local newsletters, chamber events, small business
              referrals, and word of mouth can all work. Online profiles can help
              too, but only if your rules allow them.
            </p>

            <p>
              Keep your brand focused on the service. You do not need to argue
              with strangers or explain your life story to every potential
              customer. If stigma appears online, stay calm, document threats or
              harassment, and keep the business message professional.
            </p>
          </GuideProse>

          <OfflineOptions
            title="Lower-internet marketing options"
            icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            items={[
              "Post flyers on lawful community boards, laundromats, hardware stores, small shops, churches, libraries, or apartment offices.",
              "Print simple business cards with service, phone number, area served, and one clear offer.",
              "Ask satisfied customers for one referral instead of trying to reach everyone online.",
              "Offer a founding-customer price for the first few jobs in exchange for honest feedback.",
              "Ask a trusted helper to research business resources or print materials if internet access is limited or restricted.",
              "Attend local small-business or chamber events only if travel, location, and contact rules allow it.",
            ]}
          />

          <ScriptBox
            title="Calm response to online stigma"
            tone="privacy"
            context="Use only if a response is necessary. Often the safest move is to document and not engage."
            script={`I understand people may have concerns. My business is focused on lawful, professional service, clear boundaries, and quality work. I follow my legal requirements and keep customer interactions respectful and documented.

If you have a question about the service itself, I’m happy to answer it directly.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="grow"
          number="10"
          title="Grow carefully"
          subtitle="A stable small business grows from repeatable work, not pressure."
          icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Stage 1",
                title: "Solo proof",
                icon: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
                tone: "success",
                description:
                  "Complete small jobs, save records, learn timing, improve pricing, and collect feedback.",
              },
              {
                eyebrow: "Stage 2",
                title: "Repeat work",
                icon: <Users className="h-5 w-5" aria-hidden="true" />,
                tone: "info",
                description:
                  "Look for repeat customers, simple service agreements, referral sources, and predictable schedules.",
              },
              {
                eyebrow: "Stage 3",
                title: "Formalize",
                icon: <FileText className="h-5 w-5" aria-hidden="true" />,
                tone: "reentry",
                description:
                  "Consider registration, EIN, insurance, licenses, better tools, written estimates, and tax planning.",
              },
            ]}
          />

          <GuideCallout
            tone="reminder"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Check before adding complexity"
          >
            <p>
              Before hiring helpers, using subcontractors, adding online ads,
              expanding travel, entering homes, using new payment apps, or
              offering youth-facing services, check the rules again. Growth
              should make the business stronger, not harder to keep compliant.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="11"
          title="Common mistakes to avoid"
          subtitle="These are understandable, but they can make the business harder or riskier."
          icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake:
                  "Starting with a business that depends on prohibited internet use.",
                whyItMatters:
                  "Online learning, marketing, payment apps, marketplaces, or social media can create supervision or registry issues if not approved.",
                betterMove:
                  "Ask what is allowed, save the answer, and use offline marketing or trusted-helper options when needed.",
              },
              {
                mistake: "Taking private-home jobs without checking.",
                whyItMatters:
                  "Home access, keys, minors, schools, restricted zones, and unsupervised contact can create risk.",
                betterMove:
                  "Check the exact service and consider commercial-only, outdoor-only, shop-based, or referral-only work.",
              },
              {
                mistake: "Mixing personal and business money.",
                whyItMatters:
                  "Messy records can cause tax problems, supervision confusion, pricing mistakes, and stress.",
                betterMove:
                  "Save receipts, keep a job log, and separate business income and expenses as early as possible.",
              },
              {
                mistake: "Borrowing heavily before proving demand.",
                whyItMatters:
                  "Debt creates pressure before you know whether customers will pay.",
                betterMove:
                  "Start small, rent or borrow tools lawfully, use deposits, and reinvest from completed jobs.",
              },
              {
                mistake: "Arguing online about your past.",
                whyItMatters:
                  "Online conflict can escalate, damage the business, and create documentation or supervision issues.",
                betterMove:
                  "Document harassment, respond only if needed, stay service-focused, and ask for help if threats appear.",
              },
              {
                mistake: "Scaling faster than your records and rules can support.",
                whyItMatters:
                  "More customers, helpers, travel, tools, and platforms can create new risks.",
                betterMove:
                  "Grow in stages and check rules before adding complexity.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="12"
          title="Resources, related guides, and sources"
          subtitle="Use these tools to learn, plan, fund, document, and keep moving."
          icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Small-business resources"
            resources={[
              {
                label: "SBA Learning Platform",
                href: sourceLinks.sbaLearning,
                badge: "Official",
                description:
                  "Free online business training from the U.S. Small Business Administration.",
              },
              {
                label: "SCORE",
                href: sourceLinks.score,
                badge: "Mentoring",
                description:
                  "Free business mentoring, workshops, and practical resources.",
              },
              {
                label: "Find Your SBDC",
                href: sourceLinks.sbdc,
                badge: "Local help",
                description:
                  "Find a Small Business Development Center for counseling and low-cost training.",
              },
              {
                label: "IRS EIN Application",
                href: sourceLinks.irsEin,
                badge: "Official",
                description:
                  "Apply for an EIN directly from the IRS. The IRS does not charge for an EIN.",
              },
              {
                label: "IRS Self-Employed Tax Center",
                href: sourceLinks.irsSelfEmployed,
                badge: "Tax",
                description:
                  "Federal tax information for people who work for themselves.",
              },
              {
                label: "SBA Microloans",
                href: sourceLinks.sbaMicroloans,
                badge: "Funding",
                description:
                  "Information about SBA microloans and how the program works.",
              },
              {
                label: "SBA Microlender List",
                href: sourceLinks.sbaMicrolenderList,
                badge: "Funding",
                description:
                  "Find authorized intermediary lenders participating in SBA's microloan program.",
              },
              {
                label: "American Job Center Finder",
                href: sourceLinks.careerOneStopAjc,
                badge: "Workforce",
                description:
                  "Ask about training, reentry employment help, and local workforce support.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Employment Strategies for People on Sex Offender Registries",
                description:
                  "Use this for resumes, disclosure scripts, documentation packets, interviews, and first-90-days planning.",
                to: sourceLinks.employmentStrategies,
              },
              {
                title: "Employment Directory for People on Sex Offender Registries",
                description:
                  "Use this to find job boards, workforce offices, apprenticeships, training leads, and employer lead sources.",
                to: sourceLinks.employmentDirectory,
              },
              {
                title: "Professional Licenses and Certifications for People on Sex Offender Registries",
                description:
                  "Use this when a business idea depends on a license, certification, trade credential, or regulated service.",
                to: sourceLinks.professionalLicensing,
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use this to coordinate self-employment with IDs, housing, supervision, registration, and work planning.",
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
                  "Stable housing, work, transportation, and supervision planning often affect each other.",
                to: sourceLinks.housingSearch,
              },
            ]}
          />

          <SoftDivider />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Legal, tax, and business note"
          >
            <p>
              This guide is a planning tool, not legal, tax, insurance, or
              supervision advice. A business idea may depend on your state,
              registry status, supervision or court conditions, local business
              rules, taxes, insurance, licensing, internet access, customer
              contact, and worksite. Verify the exact service and setup before
              advertising, accepting work, taking payments, entering homes,
              hiring help, or paying for training.
            </p>
          </GuideCallout>

          <div id="sources">
            <SourceList
              title="Sources and verification"
              note="These sources support business planning, mentoring, EINs, self-employment taxes, microloans, workforce help, and scam awareness. Local registry, supervision, licensing, tax, and business rules still need case-specific verification."
              sources={[
                {
                  label: "IRS — Get an Employer Identification Number",
                  href: sourceLinks.irsEin,
                  description:
                    "Official IRS EIN application page; the IRS states you can get an EIN directly from the IRS for free.",
                },
                {
                  label: "IRS — Self-Employed Individuals Tax Center",
                  href: sourceLinks.irsSelfEmployed,
                  description:
                    "Federal tax information for people who work for themselves.",
                },
                {
                  label: "IRS — Small Business and Self-Employed Tax Center",
                  href: sourceLinks.irsSmallBusiness,
                  description:
                    "IRS forms, publications, and tax resources for small businesses and self-employed taxpayers.",
                },
                {
                  label: "SBA Learning Platform",
                  href: sourceLinks.sbaLearning,
                  description:
                    "Free SBA online business training and growth resources.",
                },
                {
                  label: "SBA Local Assistance",
                  href: sourceLinks.sbaLocalAssistance,
                  description:
                    "Find SBA district offices and local small-business help.",
                },
                {
                  label: "SCORE",
                  href: sourceLinks.score,
                  description:
                    "Free business mentoring, training, workshops, and resources.",
                },
                {
                  label: "America's SBDC — Find Your SBDC",
                  href: sourceLinks.sbdc,
                  description:
                    "Small Business Development Center locator for counseling and training.",
                },
                {
                  label: "SBA Microloans",
                  href: sourceLinks.sbaMicroloans,
                  description:
                    "Official SBA information about microloans for small businesses and certain nonprofit childcare centers.",
                },
                {
                  label: "SBA List of Microlenders",
                  href: sourceLinks.sbaMicrolenderList,
                  description:
                    "Official SBA list of authorized intermediary microloan lenders.",
                },
                {
                  label: "CareerOneStop — American Job Centers",
                  href: sourceLinks.careerOneStopAjc,
                  description:
                    "Official workforce office finder for training and employment support.",
                },
                {
                  label: "FTC — Small Business Scams",
                  href: sourceLinks.ftcScams,
                  description:
                    "Federal guidance on spotting and avoiding scams targeting small businesses.",
                },
              ]}
            />
          </div>
        </GuideSectionCard>
      </main>
    </div>
  );
}