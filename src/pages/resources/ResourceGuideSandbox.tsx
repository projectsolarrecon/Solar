import React from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  FolderOpen,
  GraduationCap,
  Hammer,
  Laptop,
  MapPinned,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Truck,
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
  ScriptBox,
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
  americanJobCenterFinder:
    "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx",
  dolAmericanJobCenters: "https://www.dol.gov/agencies/eta/american-job-centers",
  dolReentry: "https://www.dol.gov/agencies/eta/reentry",
  honestJobs: "https://www.honestjobs.com/",
  hireNetwork: "https://clearinghouse.lac.org/",
  federalBonding: "https://bonds4jobs.com/",
  ftcBackgroundChecks:
    "https://consumer.ftc.gov/articles/employer-background-checks-and-your-rights",
  eeocArrestConviction: "https://www.eeoc.gov/arrestandconviction",
  eeocGuidance:
    "https://www.eeoc.gov/laws/guidance/enforcement-guidance-consideration-arrest-and-conviction-records-employment-decisions",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Employment Strategies for People on Registries | The SOLAR Project"
        description="A practical, sex-offense-specific employment guide for people living with registry restrictions, supervision conditions, background checks, and reentry barriers."
        keywords="sex offense registry employment, registrant job search, reentry employment, fair chance hiring, background check rights, SOLAR Project"
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
            Employment Strategies for People on Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical guide to job searching, restrictions, resumes,
            disclosure, interviews, and steady work for people with sex offense
            convictions or registry requirements.
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
            Finding work while living on a registry is not a normal job search.
            You may be dealing with public registry exposure, supervision rules,
            employer fear, background checks, transportation limits, internet
            restrictions, or worksite restrictions involving minors, schools,
            parks, homes, or certain types of access.
          </p>

          <p>
            That does not mean work is impossible. It means your job search has
            to be more deliberate. Start by checking what work is legally safe,
            then build a focused employment packet, choose realistic job paths,
            and practice short, careful language for hard conversations.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Do this before you start applying"
          subtitle="A few careful steps can prevent wasted applications, unsafe job offers, or accidental violations."
          icon={<ClipboardCheck className="h-6 w-6" aria-hidden="true" />}
          urgentActions={[
            <span>
              Write down your known restrictions: supervision conditions,
              registry rules, location limits, internet limits,
              contact-with-minors limits, curfew, travel limits, and any court
              order.
            </span>,
            <span>
              Ask the person or office with authority whether the type of work,
              worksite, schedule, travel, internet use, and job duties are
              allowed.
            </span>,
            <span>
              Save the answer if possible. A short email, text, letter, case
              note, or written approval can matter later.
            </span>,
          ]}
          nextActions={[
            <span>
              Build a one-page resume, a short skills list, and a reference list
              before you begin applying.
            </span>,
            <span>
              Choose job paths where the duties are less likely to conflict with
              registry or supervision restrictions.
            </span>,
            <span>
              Practice a brief disclosure script so you do not freeze, overshare,
              or sound unprepared when background questions come up.
            </span>,
          ]}
          reminder={
            <span>
              You do not have to solve your whole career today. The first goal is
              a lawful, stable next step.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Verify the risk",
              icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
              tone: "legal",
              description:
                "Confirm whether the job duties, location, schedule, travel, internet use, and contact with minors are allowed.",
            },
            {
              eyebrow: "Step 2",
              title: "Prepare your materials",
              icon: <FolderOpen className="h-5 w-5" aria-hidden="true" />,
              tone: "reentry",
              description:
                "Turn training, work history, certificates, and references into a simple packet you can use quickly.",
            },
            {
              eyebrow: "Step 3",
              title: "Apply carefully",
              icon: <MessageSquare className="h-5 w-5" aria-hidden="true" />,
              tone: "success",
              description:
                "Target realistic employers, prepare for background checks, and use short, forward-looking language.",
            },
          ]}
        />

        <GuideSectionHeader
          id="restrictions"
          number="1"
          title="Check restrictions before you apply"
          subtitle="The safest job search starts with knowing what work is actually allowed."
          icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People with sex offense convictions may face restrictions that do
              not appear in ordinary job-search advice. A job can look safe on a
              job board but still create problems because of the worksite, job
              duties, travel, schedule, internet use, customer contact, or
              contact with minors.
            </p>

            <p>
              Before you invest time, money, or personal credibility in an
              application, check the rules that apply to you. The answer can come
              from state law, local registry practice, a court order, supervision
              conditions, treatment rules, employer policy, licensing rules, or
              the specific physical location where the job happens.
            </p>

            <p>
              Be especially careful with jobs involving schools, child care,
              youth programs, home visits, rideshare or delivery to private
              homes, security, healthcare, recreation facilities, internet
              access, overnight travel, or unsupervised access to vulnerable
              people.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify before applying or accepting"
            whoToAsk={
              <span>
                Your supervising officer if you are on supervision; the
                registering agency for registry-specific questions; an attorney,
                legal aid office, or public defender office for legal-risk
                questions; and the licensing board if the job requires a license.
              </span>
            }
            whatToAsk={
              <span>
                “Am I allowed to work at this exact location, in this role, with
                these duties, this schedule, this travel, this internet use, and
                this level of contact with customers, minors, or private homes?”
              </span>
            }
            whatToSave={
              <span>
                The date, name, agency or department, exact question asked,
                answer given, and written approval if you can get it.
              </span>
            }
          />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Do not rely on a general answer"
          >
            <p>
              “Construction is usually okay” is not the same as “this
              construction job at this school site is okay.” “Warehouse work is
              usually okay” is not the same as “this delivery route with private
              homes is okay.” Ask about the exact job before relying on the
              answer.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="skills"
          number="2"
          title="Translate your skills into job language"
          subtitle="Training, work assignments, and survival skills can become employment language when framed carefully."
          icon={<GraduationCap className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Many people come home with more skills than they think. In-custody
              work, vocational programs, peer roles, religious or recovery group
              service, tutoring, kitchen work, maintenance, warehouse
              assignments, and clerical tasks can all show reliability and useful
              experience.
            </p>

            <p>
              The goal is not to hide where your experience came from. The goal
              is to describe what you actually learned in language an employer
              understands.
            </p>

            <ul>
              <li>
                <strong>Vocational training:</strong> carpentry, welding, HVAC,
                culinary arts, electrical work, automotive repair, landscaping,
                painting, or maintenance.
              </li>
              <li>
                <strong>Clerical and administrative skills:</strong> typing,
                filing, data entry, inventory, scheduling, phone etiquette, or
                document organization.
              </li>
              <li>
                <strong>Peer leadership:</strong> tutoring, group facilitation,
                mentoring, conflict de-escalation, accountability work, or
                helping others complete tasks.
              </li>
              <li>
                <strong>Work release or prison industries:</strong> production,
                quality control, food service, custodial work, warehouse work,
                machine operation, or customer-service-adjacent duties.
              </li>
            </ul>
          </GuideProse>
<GuideCallout
            tone="success"
            icon={<FileText className="h-5 w-5" aria-hidden="true" />}
            title="Resume example"
          >
            <GuideProse>
              <p>
                Instead of writing only “Prison Vocational Program,” describe the
                skill, hours, and tasks:
              </p>

              <p>
                <strong>Carpentry Trainee — 1,200 hours</strong>
                <br />
                Department of Corrections Vocational Training Program, 2022–2023
              </p>

              <ul>
                <li>Completed OSHA safety training.</li>
                <li>
                  Constructed furniture and completed finish carpentry for
                  institutional use.
                </li>
                <li>
                  Used hand tools, measured materials, followed safety
                  procedures, and completed assigned projects on deadline.
                </li>
              </ul>
            </GuideProse>
          </GuideCallout>

          <GuideChecklist
            id="skills-inventory"
            title="Build a skills inventory"
            columns={2}
            items={[
              {
                id: "training",
                label:
                  "List every class, certificate, program, or apprenticeship you completed.",
              },
              {
                id: "assignments",
                label:
                  "List every work assignment, even if it was unpaid or inside a facility.",
              },
              {
                id: "tools",
                label:
                  "Write down tools, machines, software, equipment, or safety procedures you know.",
              },
              {
                id: "soft-skills",
                label:
                  "Write examples of reliability, teamwork, problem-solving, leadership, and conflict management.",
              },
              {
                id: "proof",
                label:
                  "Gather certificates, program records, evaluations, letters, or proof of hours.",
              },
              {
                id: "translation",
                label:
                  "Rewrite facility language into ordinary job language without lying or exaggerating.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="packet"
          number="3"
          title="Build an employment packet"
          subtitle="A simple folder keeps you ready when someone asks for documents, references, or proof."
          icon={<FolderOpen className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A job search can become chaotic quickly. You may apply to many
              places, repeat the same explanation, lose track of who called back,
              or need proof that a job is allowed. A paper or digital employment
              packet helps you move faster and make fewer mistakes.
            </p>

            <p>
              For many registry-impacted people, the packet should include both
              ordinary job-search materials and compliance-related documentation.
              Do not hand an employer more sensitive information than they need,
              but keep your own records organized.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Employment packet"
            intro={
              <span>
                Keep copies in a folder, envelope, binder, phone folder, or email
                account you can access safely.
              </span>
            }
            categories={[
              {
                title: "Job-search basics",
                items: [
                  "One-page resume.",
                  "Short skills inventory.",
                  "Reference list with names, phone numbers, email addresses, and how each person knows your work.",
                  "Certificates, licenses, training records, OSHA cards, apprenticeship records, or program completion letters.",
                  "Photo ID, Social Security card, work authorization documents, or other hiring paperwork you may need.",
                ],
              },
              {
                title: "Registry and supervision notes",
                items: [
                  "Written supervision conditions or court conditions that affect work.",
                  "Written answers about whether a specific job, location, schedule, internet use, or travel is allowed.",
                  "Notes from calls with names, dates, departments, and exact instructions.",
                  "A plain-language restrictions summary for your own use, not automatic employer disclosure.",
                ],
              },
              {
                title: "Application tracking",
                items: [
                  "Company name, position, date applied, contact person, and response.",
                  "Interview notes and follow-up dates.",
                  "Copies of rejection letters or adverse action notices.",
                  "Background-check company information if an employer uses a background reporting company.",
                ],
              },
            ]}
          />

          <GuideCallout
            tone="privacy"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Keep sensitive documents controlled"
          >
            <p>
              Your packet is for your organization. Do not automatically give an
              employer supervision paperwork, treatment records, registry notices,
              court documents, or personal history details. Share only what is
              required, strategic, and safe after you understand the situation.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="pathways"
          number="4"
          title="Choose realistic job paths"
          subtitle="The best job path is not only about interest. It also has to fit your restrictions, transportation, schedule, and background-check reality."
          icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              No field is automatically safe for every person on a registry.
              Still, some paths may be easier to evaluate because they often have
              clearer worksites, adult coworkers, less unsupervised access to
              minors, and more visible job duties.
            </p>

            <p>
              Use the options below as starting points, not guarantees. Confirm
              the exact job and location before applying or accepting.
            </p>
          </GuideProse>

          <div className="grid gap-4 md:grid-cols-2">
            <PathwayCard
              title="Trades, repair, and construction"
              subtitle="Carpentry, painting, HVAC, welding, electrical helper, maintenance, landscaping."
              icon={<Hammer className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Skills are concrete, experience can be demonstrated, and many
                  roles focus on tools, safety, punctuality, and project work.
                </span>
              }
              steps={[
                <span>List tools, safety training, and completed projects.</span>,
                <span>
                  Check whether job sites include schools, child care, homes, or
                  restricted locations.
                </span>,
                <span>
                  Ask about crew structure, travel, and supervision before
                  accepting.
                </span>,
              ]}
              bestFit={
                <span>
                  People with hands-on skills, certificates, apprenticeship
                  interest, or comfort with physical work.
                </span>
              }
            />

            <PathwayCard
              title="Manufacturing and warehouse"
              subtitle="Assembly, packing, forklift, machine operation, inventory, shipping and receiving."
              icon={<Factory className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  These roles often value reliability, safety, speed, and
                  consistency. Some facilities also have clearer boundaries than
                  public-facing work.
                </span>
              }
              steps={[
                <span>
                  Highlight attendance, safety, production, inventory, or
                  equipment experience.
                </span>,
                <span>
                  Ask whether the role requires delivery, driving, or
                  unsupervised access to private homes.
                </span>,
                <span>
                  Check whether background checks are handled by HR or a staffing
                  agency.
                </span>,
              ]}
              bestFit={
                <span>
                  People who can work set shifts and want a structured
                  environment with measurable duties.
                </span>
              }
            />

            <PathwayCard
              title="Food service and back-of-house"
              subtitle="Dishwashing, prep cook, line cook, bakery production, catering, food trucks."
              icon={<Utensils className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Kitchens often need dependable workers and may care more about
                  pace, cleanliness, teamwork, and attendance than perfect work
                  history.
                </span>
              }
              steps={[
                <span>Check local health-card or food-handler requirements.</span>,
                <span>
                  Ask whether the job involves schools, youth programs, delivery,
                  or events at restricted locations.
                </span>,
                <span>
                  Use references who can speak to reliability under pressure.
                </span>,
              ]}
              bestFit={
                <span>
                  People who can handle fast-paced work, teamwork, and clear
                  routines.
                </span>
              }
            />

            <PathwayCard
              title="Transportation and logistics"
              subtitle="CDL, warehouse driver, yard work, parts delivery, dispatch support."
              icon={<Truck className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Some roles are task-based and may offer stable pay, but route,
                  travel, overnight, home-delivery, and licensing issues must be
                  checked carefully.
                </span>
              }
              steps={[
                <span>
                  Verify whether your conviction affects licensing or insurance
                  eligibility.
                </span>,
                <span>
                  Confirm whether routes include schools, child care, private
                  homes, or restricted zones.
                </span>,
                <span>
                  Check travel, curfew, and reporting requirements before
                  accepting a schedule.
                </span>,
              ]}
              bestFit={
                <span>
                  People with driving eligibility, predictable reporting habits,
                  and careful attention to route rules.
                </span>
              }
            />

            <PathwayCard
              title="Reentry program or American Job Center route"
              subtitle="Local workforce office, reentry nonprofit, job club, training grant, apprenticeship referral."
              icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  A local workforce office or reentry organization may know
                  employers who have hired people with records before. You can
                  search for nearby American Job Centers through{" "}
                  <a
                    href={sourceLinks.americanJobCenterFinder}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                  >
                    CareerOneStop
                  </a>
                  .
                </span>
              }
              steps={[
                <span>
                  Call first and ask whether they work with people with felony
                  convictions or registry restrictions.
                </span>,
                <span>
                  Ask about training, resume help, interview practice, job
                  referrals, and transportation help.
                </span>,
                <span>
                  Bring your resume draft, ID, restrictions summary, and skills
                  list.
                </span>,
              ]}
              offlineAlternatives={[
                <span>Call 1-877-US-2JOBS if you cannot use the online finder.</span>,
                <span>
                  Ask a library, probation office, or reentry program to print
                  local workforce contacts.
                </span>,
              ]}
            />

            <PathwayCard
              title="Self-employment or small service work"
              subtitle="Landscaping, hauling, repair, cleaning, detailing, crafts, bookkeeping, online work."
              icon={<Wrench className="h-5 w-5" aria-hidden="true" />}
              whyItWorks={
                <span>
                  Self-employment can reduce some hiring barriers, but it can
                  create new risks around internet use, advertising, entering
                  homes, customer contact, travel, licensing, and taxes.
                </span>
              }
              steps={[
                <span>
                  Verify internet, advertising, contact, and location restrictions
                  before starting.
                </span>,
                <span>
                  Avoid private homes, youth-serving sites, or restricted
                  locations unless clearly permitted.
                </span>,
                <span>
                  Keep records of income, expenses, customer communications, and
                  permissions.
                </span>,
              ]}
              bestFit={
                <span>
                  People with a marketable skill, safe customer boundaries, and
                  enough organization to track money and rules.
                </span>
              }
            />
          </div>
<GuideCallout
            tone="info"
            icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
            title="Ask about bonding if an employer is hesitant"
          >
            <p>
              The{" "}
              <a
                href={sourceLinks.federalBonding}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-blue-400 underline-offset-2 hover:text-blue-950"
              >
                Federal Bonding Program
              </a>{" "}
              can provide no-cost fidelity bonds for some job seekers who face
              employment barriers. It will not solve every restriction, but it
              may help reassure some employers about hiring risk.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resume"
          number="5"
          title="Build a resume that leads with value"
          subtitle="A resume should help an employer see what you can do before they make assumptions about your past."
          icon={<FileText className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A functional or skills-forward resume can help when your work
              history has incarceration gaps, unstable housing periods, treatment
              obligations, supervision restrictions, or informal work that does
              not fit a clean timeline.
            </p>

            <p>
              Keep the resume honest, but do not make the conviction or registry
              the headline. Lead with reliability, skills, certificates, and the
              type of work you are ready to do now.
            </p>
          </GuideProse>

          <GuideChecklist
            id="resume-structure"
            title="Functional resume structure"
            columns={1}
            items={[
              {
                id: "contact",
                label:
                  "Contact information: phone number, professional email, city/state, and transportation note only if useful.",
              },
              {
                id: "summary",
                label:
                  "Professional summary: two or three lines focused on reliability, skills, safety, and motivation.",
              },
              {
                id: "skills",
                label:
                  "Core skills: tools, equipment, software, safety procedures, communication, customer service, or production skills.",
              },
              {
                id: "experience",
                label:
                  "Relevant experience: group by category, such as construction, kitchen, warehouse, maintenance, clerical, or leadership.",
              },
              {
                id: "education",
                label:
                  "Education and certifications: GED, college coursework, OSHA, food handler, forklift, trade certificates, or program completion.",
              },
              {
                id: "references",
                label:
                  "References available on request: keep the full reference list separate unless asked.",
              },
            ]}
          />

          <ScriptBox
            title="Professional summary example"
            tone="success"
            context="Use this as a model, not a script you must copy exactly."
            script={`Reliable entry-level maintenance and warehouse worker with hands-on experience in tool safety, inventory, cleaning, basic repairs, and team-based work. Known for showing up prepared, following instructions carefully, and staying calm under pressure. Seeking a stable role where I can contribute consistent work and continue building long-term skills.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="disclosure"
          number="6"
          title="Disclosure, background checks, and interviews"
          subtitle="Prepare short, careful language before the hard question comes up."
          icon={<MessageSquare className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Disclosure is not one-size-fits-all. Sometimes the law, employer
              policy, licensing process, background check, or supervision
              conditions will force the issue. Sometimes early disclosure may be
              strategic. Sometimes oversharing too soon can close a door before
              the employer understands your value.
            </p>

            <p>
              When an employer uses a background reporting company, the{" "}
              <a
                href={sourceLinks.ftcBackgroundChecks}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                Federal Trade Commission explains background-check rights for job
                applicants
              </a>
              . The{" "}
              <a
                href={sourceLinks.eeocArrestConviction}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
              >
                EEOC has resources for job seekers and workers with arrest or
                conviction records
              </a>
              . These resources are not registry-specific, but they can help you
              understand the general employment-rights framework.
            </p>
          </GuideProse>

          <GuideCallout
            tone="privacy"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            title="Keep the explanation brief"
          >
            <p>
              You do not need to describe the offense in graphic detail. You do
              need to be truthful when a truthful answer is required. A safer
              explanation usually accepts responsibility, names compliance,
              points to current stability, and returns to the job duties.
            </p>
          </GuideCallout>

          <div className="space-y-4">
            <ScriptBox
              title="Brief disclosure script"
              tone="neutral"
              context="Use when disclosure is required, a background check is certain, or you decide disclosure is strategically necessary."
              script={`Before we go further, I want to be transparent about something that may appear in a background check. I have a past conviction that I take seriously, and I am fully compliant with my legal requirements. Since then, I have focused on training, stability, and being dependable at work. I am prepared to discuss how I can safely and reliably perform the duties of this job.`}
            />

            <ScriptBox
              title="Work-history gap script"
              tone="neutral"
              context="Use when the employer asks about a gap without needing details about the conviction."
              script={`During that period, I was in a structured environment where I completed training and built skills in [skill], [skill], and [skill]. I am focused now on using those skills in steady work and showing that I can be reliable, prepared, and accountable.`}
            />

            <ScriptBox
              title="Restrictions question script"
              tone="legal"
              context="Use when you need to understand whether the job duties create a compliance problem."
              script={`I want to make sure I understand the duties of this role clearly. Would this job involve work at schools, child care sites, parks, private homes, youth programs, overnight travel, internet access, or unsupervised contact with minors? I need to verify any restrictions before accepting a position.`}
            />

            <ScriptBox
              title="Cold call script"
              tone="reentry"
              context="Use for small employers, trade shops, restaurants, warehouses, and local businesses."
              script={`Hi, my name is [Name]. I am calling to ask whether you are hiring for [type of work]. I have experience with [skills] and I am looking for steady work where reliability, safety, and willingness to learn matter. Is there a manager or hiring person I could speak with about current openings?`}
            />

            <ScriptBox
              title="Follow-up email"
              tone="success"
              context="Use after an interview, phone call, or referral."
              script={`Dear [Hiring Manager],

Thank you for taking the time to speak with me about the [position] role. I appreciated learning more about the work and the kind of person you need on the team.

I am interested in the opportunity to contribute my skills in [specific skill], [specific skill], and [specific skill]. I am committed to being dependable, prepared, and accountable on the job.

Thank you again for your time. I look forward to hearing from you.

Sincerely,
[Name]`}
            />

            <ScriptBox
              title="Reference request"
              tone="neutral"
              context="Use with a former supervisor, instructor, counselor, faith leader, volunteer coordinator, or reentry mentor."
              script={`Hi [Name], I hope you are doing well. I am actively looking for work and wanted to ask whether you would be willing to serve as a reference for me.

I am applying for [type of positions]. It would help if you could speak to my reliability, work ethic, skills, growth, and commitment to doing things the right way.

I understand if you are not able to do this, but I would be grateful for your support. Thank you for considering it.`}
            />
          </div>

          <SoftDivider label="Interview preparation" />

          <GuideProse>
            <p>
              Practice the STAR method for behavioral questions: situation, task,
              action, result. Prepare examples that show problem-solving,
              reliability, learning from mistakes, calm communication, and
              commitment to safe, accountable work.
            </p>

            <p>
              For registry-impacted applicants, interview preparation is not just
              about confidence. It is about staying steady when stigma enters the
              room. Practice with a trusted person, reentry counselor, sponsor,
              family member, or job coach before the real interview.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-90-days"
          number="7"
          title="Protect the job once you get it"
          subtitle="The first weeks are about reliability, communication, boundaries, and documentation."
          icon={<CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Getting hired is only one part of the process. The first 90 days
              matter because an employer is deciding whether you are dependable,
              trainable, safe, and worth keeping.
            </p>

            <p>
              You do not have to be perfect. You do need to communicate early,
              follow rules carefully, ask questions, and keep your life organized
              enough that transportation, supervision, appointments, reporting,
              and work do not collide.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-90-days-checklist"
            title="First 90 days"
            columns={2}
            items={[
              {
                id: "arrive",
                label: "Arrive on time and ready to work.",
              },
              {
                id: "notes",
                label:
                  "Take notes during training instead of pretending you understand everything.",
              },
              {
                id: "names",
                label: "Learn names, roles, schedules, and who to ask for help.",
              },
              {
                id: "communicate",
                label:
                  "Communicate early if supervision, transportation, illness, or family issues affect work.",
              },
              {
                id: "boundaries",
                label:
                  "Avoid conversations, locations, internet use, or customer contact that could create compliance risk.",
              },
              {
                id: "mistakes",
                label: "Own mistakes quickly and ask how to fix them.",
              },
              {
                id: "records",
                label:
                  "Keep pay stubs, schedules, manager messages, and any discipline or praise.",
              },
              {
                id: "growth",
                label:
                  "Ask what you should learn next after you have proven basic reliability.",
              },
            ]}
          />

          <GuideCallout
            tone="warning"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="If coworkers discover your background"
          >
            <p>
              Stay calm and do not argue in the moment. If you are safe, respond
              briefly: “I understand why people have questions. I am compliant
              with my requirements, focused on doing good work, and I would like
              to keep the workplace respectful.” Document threats, harassment, or
              policy violations and consider speaking with HR, a supervisor, or a
              legal aid organization.
            </p>
          </GuideCallout>
        </GuideSectionCard>
<GuideSectionHeader
          id="mistakes"
          number="8"
          title="Common mistakes to avoid"
          subtitle="These mistakes are understandable, especially under stress, but they can make the job search harder or riskier."
          icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Applying everywhere without checking restrictions.",
                whyItMatters:
                  "A job offer can become a compliance problem if the location, duties, travel, internet access, or contact rules are not allowed.",
                betterMove:
                  "Target jobs that seem realistic, then verify the exact job before accepting.",
              },
              {
                mistake: "Oversharing offense details too early.",
                whyItMatters:
                  "Graphic or unnecessary detail can overwhelm the conversation and shift attention away from your ability to do the job.",
                betterMove:
                  "Use short, truthful, forward-looking language and return to job duties and compliance.",
              },
              {
                mistake:
                  "Hiding a background issue when a background check is certain.",
                whyItMatters:
                  "An employer may feel misled, even if you were scared or unsure what to say.",
                betterMove:
                  "Prepare a disclosure plan before the background check stage.",
              },
              {
                mistake: "Assuming one employer's answer applies everywhere.",
                whyItMatters:
                  "Different worksites, duties, licensing rules, and supervision conditions can change the answer.",
                betterMove: "Verify each job on its own facts.",
              },
              {
                mistake:
                  "Not saving written permission or important conversations.",
                whyItMatters:
                  "If someone later questions your choice, memory alone may not protect you.",
                betterMove:
                  "Write down names, dates, departments, and exact instructions. Ask for written confirmation when possible.",
              },
              {
                mistake: "Giving up after a few rejections.",
                whyItMatters:
                  "Registry stigma creates real barriers. Rejection does not prove you are unemployable.",
                betterMove:
                  "Track applications, adjust your target list, practice scripts, and ask for help from workforce or reentry programs.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="limited-access"
          number="9"
          title="If internet access, transportation, or printing is limited"
          subtitle="A job search should not depend on perfect technology or unlimited privacy."
          icon={<Phone className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Many people on registries are phone-only, lack a printer, cannot
              use some websites, have internet restrictions, rely on family for
              transportation, or are trying to search while under close
              supervision. Build your job search around what you can actually
              access.
            </p>
          </GuideProse>

          <OfflineOptions
            title="Lower-internet options"
            icon={<Laptop className="h-5 w-5" aria-hidden="true" />}
            note={
              <span>
                These options can help if you have limited privacy, limited
                internet, supervision restrictions, or no printer.
              </span>
            }
            items={[
              <span>
                Call your nearest{" "}
                <a
                  href={sourceLinks.americanJobCenterFinder}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline decoration-slate-400 underline-offset-2 hover:text-slate-950"
                >
                  American Job Center
                </a>{" "}
                and ask about resume help, computer access, workshops, job
                referrals, and training programs.
              </span>,
              <span>
                Ask for mailed or printed information if you cannot safely use a
                website.
              </span>,
              <span>
                Keep a paper job-search log with employer name, date, contact
                person, phone number, result, and follow-up date.
              </span>,
              <span>
                Ask a trusted person to print resumes, job postings, directions,
                and appointment confirmations.
              </span>,
              <span>
                Use libraries, workforce centers, reentry programs, faith
                communities, or legal aid offices for computer access only if
                allowed by your restrictions.
              </span>,
              <span>
                If internet use is restricted, ask your supervising officer or
                attorney what job-search technology is allowed and save the
                answer.
              </span>,
            ]}
          />

          <GuideCallout
            tone="family"
            icon={<Search className="h-5 w-5" aria-hidden="true" />}
            title="For loved ones helping with the search"
          >
            <p>
              Support is helpful, but do not apply to jobs, send disclosures, or
              answer legal-risk questions for the person without their knowledge.
              A better role is helping print materials, track applications,
              practice interviews, find local workforce offices, and organize
              documents.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="growth"
          number="10"
          title="Long-term career growth"
          subtitle="The first job may not be the final goal. Stability can become a platform."
          icon={<Briefcase className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Many people have to start with the job they can get, not the job
              they want forever. That is not failure. A stable first job can help
              you build references, pay bills, satisfy supervision expectations,
              learn current workplace norms, and move toward better options.
            </p>

            <p>
              Once you have some stability, look for training that fits your
              restrictions: trade certificates, apprenticeships, community college
              programs, forklift training, food safety credentials, bookkeeping,
              repair skills, or small-business basics. Verify licensing and
              placement rules before spending money.
            </p>
          </GuideProse>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Months 1–3",
                title: "Stabilize",
                icon: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
                tone: "success",
                description:
                  "Show up, learn the job, communicate early, keep records, and avoid compliance surprises.",
              },
              {
                eyebrow: "Months 4–12",
                title: "Build proof",
                icon: <FileText className="h-5 w-5" aria-hidden="true" />,
                tone: "info",
                description:
                  "Collect references, certificates, pay records, positive feedback, and examples of reliability.",
              },
              {
                eyebrow: "Year 2+",
                title: "Move carefully",
                icon: <MapPinned className="h-5 w-5" aria-hidden="true" />,
                tone: "reentry",
                description:
                  "Look for better pay, safer schedules, training, leadership, or self-employment only after checking restrictions.",
              },
            ]}
          />

          <PullQuoteBlock>
            A first job is not a verdict on your worth. It can be a bridge to
            stability, proof, and better options.
          </PullQuoteBlock>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="11"
          title="Employment resources and next steps"
          subtitle="Use these links to look for local help, understand background-check rights, and continue planning."
          icon={<Search className="h-5 w-5" aria-hidden="true" />}
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Job-search and reentry resources"
            description={
              <span>
                These resources are starting points. Always check whether a
                program understands registry restrictions before relying on its
                advice.
              </span>
            }
            resources={[
              {
                label: "American Job Center Finder",
                href: sourceLinks.americanJobCenterFinder,
                badge: "Official",
                description:
                  "Find local workforce offices that may offer job search help, computer access, training referrals, and workshops.",
              },
              {
                label: "DOL Reentry Employment Opportunities",
                href: sourceLinks.dolReentry,
                badge: "Official",
                description:
                  "U.S. Department of Labor information about reentry employment programs and workforce strategies.",
              },
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                badge: "Job board",
                description:
                  "Fair-chance employment and reentry support platform for people with criminal records.",
              },
              {
                label: "National H.I.R.E. Network Clearinghouse",
                href: sourceLinks.hireNetwork,
                badge: "Nonprofit",
                description:
                  "State-by-state reentry employment resources from the Legal Action Center's H.I.R.E. Network clearinghouse.",
              },
              {
                label: "Federal Bonding Program",
                href: sourceLinks.federalBonding,
                badge: "Hiring support",
                description:
                  "No-cost fidelity bonding for some job seekers who face employment barriers.",
              },
              {
                label: "FTC background-check rights",
                href: sourceLinks.ftcBackgroundChecks,
                badge: "Official",
                description:
                  "Explains rights when an employer uses a background reporting company.",
              },
              {
                label: "EEOC arrest and conviction record resources",
                href: sourceLinks.eeocArrestConviction,
                badge: "Official",
                description:
                  "Resources for job seekers, workers, and employers about arrest and conviction records in employment.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Know Your Rights Guide",
                description:
                  "Use this when you need broader information about constitutional rights, legal protections, documentation, and safe communication.",
                to: "/resources/know-your-rights",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Employment and housing often affect each other. This guide helps with landlord communication, documentation, and restriction checks.",
                to: "/resources/housing-search",
              },
              {
                title: "Federal Process Guide",
                description:
                  "Use this if you or a loved one is still moving through a federal case, sentencing, incarceration, release, or registration planning.",
                to: "/resources/federal-process",
              },
            ]}
          />

          <SoftDivider />

          <GuideCallout
            tone="legal"
            icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
            title="Legal and professional advice disclaimer"
          >
            <p>
              This guide provides general information only. It is not legal
              advice, employment advice, supervision approval, or a promise that a
              particular job is safe for you. Employment laws, registry rules,
              supervision conditions, licensing rules, and employer policies vary.
              Verify your specific situation before applying, accepting work, or
              relying on any general guidance.
            </p>
          </GuideCallout>

          <SourceList
            title="Sources and verification"
            note="Links were selected for official, nonprofit, or practical job-search value. Registry-specific employment restrictions still need local verification."
            sources={[
              {
                label: "CareerOneStop American Job Center Finder",
                href: sourceLinks.americanJobCenterFinder,
                description:
                  "Local workforce office lookup for job search help, training support, and employment services.",
              },
              {
                label: "U.S. Department of Labor — American Job Centers",
                href: sourceLinks.dolAmericanJobCenters,
                description:
                  "Official DOL page explaining American Job Center services and the 1-877-US-2JOBS help line.",
              },
              {
                label:
                  "U.S. Department of Labor — Reentry Employment Opportunities",
                href: sourceLinks.dolReentry,
                description:
                  "Official DOL reentry employment program information.",
              },
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                description: "Fair-chance employment and reentry support platform.",
              },
              {
                label: "National H.I.R.E. Network Clearinghouse",
                href: sourceLinks.hireNetwork,
                description:
                  "Legal Action Center clearinghouse for state reentry employment resources.",
              },
              {
                label: "Federal Bonding Program",
                href: sourceLinks.federalBonding,
                description:
                  "Information about fidelity bonding for job seekers facing employment barriers.",
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
                  "Resources for job seekers, workers, and employers about arrest and conviction records.",
              },
              {
                label:
                  "EEOC — Enforcement Guidance on Arrest and Conviction Records",
                href: sourceLinks.eeocGuidance,
                description:
                  "Federal enforcement guidance about use of arrest and conviction records in employment decisions under Title VII.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}