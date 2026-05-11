import React from "react";
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
  RoleGuidanceGrid,
} from "../../components/solar";

const sourceLinks = [
  {
    label: "USAGov — Replace vital documents and ID cards",
    href: "https://www.usa.gov/replace-vital-documents",
    description:
      "Official starting point for replacing government-issued ID cards and vital records.",
  },
  {
    label: "USAGov — Get a certified copy of a U.S. birth certificate",
    href: "https://www.usa.gov/birth-certificate",
    description:
      "Explains that birth certificate requests usually go through the vital records office in the birth state or territory.",
  },
  {
    label: "Social Security Administration — Replace Social Security card",
    href: "https://www.ssa.gov/number-card/replace-card",
    description:
      "Official SSA replacement card page, including online, phone, and office options.",
  },
  {
    label: "211 — Housing expenses",
    href: "https://www.211.org/get-help/housing-expenses",
    description:
      "National 211 entry point for local housing, rent, mortgage, and utility help.",
  },
  {
    label: "211 — Utilities expenses",
    href: "https://www.211.org/get-help/utilities-expenses",
    description:
      "Local help for utility bills, phone, internet, and related emergency support.",
  },
  {
    label: "U.S. Department of Labor — American Job Centers",
    href: "https://www.dol.gov/agencies/eta/american-job-centers",
    description:
      "Official DOL page explaining how to find American Job Centers and the 1-877-US-2JOBS help line.",
  },
  {
    label: "CareerOneStop — Justice-Impacted job seeker resources",
    href: "https://www.careeronestop.org/JusticeImpacted/default.aspx",
    description:
      "CareerOneStop resources for people with records who need job search, training, and career help.",
  },
  {
    label: "Internal Revenue Service — Work Opportunity Tax Credit",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit",
    description:
      "Official IRS WOTC page, including targeted groups such as formerly incarcerated people or people previously convicted of a felony.",
  },
  {
    label: "U.S. Department of Labor — Work Opportunity Tax Credit",
    href: "https://www.dol.gov/agencies/eta/wotc",
    description:
      "Official DOL overview of WOTC as a federal tax credit for employers hiring people from targeted groups.",
  },
  {
    label: "Federal Bonding Program",
    href: "https://bonds4jobs.com/",
    description:
      "Official Federal Bonding Program site for no-cost fidelity bonds for job seekers facing employment barriers.",
  },
  {
    label: "Lifeline Support — How to apply",
    href: "https://www.lifelinesupport.org/how-to-apply/",
    description:
      "Official Lifeline application page with online, company-assisted, and mail options.",
  },
  {
    label: "Lifeline Support — How to qualify",
    href: "https://www.lifelinesupport.org/how-to-qualify/",
    description:
      "Official Lifeline eligibility information based on income or participation in programs such as SNAP or Medicaid.",
  },
  {
    label: "HealthCare.gov — Medicaid and CHIP coverage",
    href: "https://www.healthcare.gov/medicaid-chip/",
    description:
      "Official health coverage page explaining Marketplace and state Medicaid application options.",
  },
  {
    label: "USDA — SNAP State Directory",
    href: "https://www.fns.usda.gov/snap/state-directory",
    description:
      "Official state-by-state contact and application directory for SNAP food assistance.",
  },
  {
    label: "USAGov — Food stamps / SNAP",
    href: "https://www.usa.gov/food-stamps",
    description:
      "Plain-language federal page explaining that SNAP applications go through state or local SNAP offices.",
  },
  {
    label: "SAMHSA — National Helpline",
    href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
    description:
      "Free, confidential, 24/7 treatment referral and information service for mental health and substance use concerns.",
  },
  {
    label: "FindTreatment.gov",
    href: "https://findtreatment.gov/",
    description:
      "SAMHSA confidential and anonymous locator for mental health and substance use treatment.",
  },
  {
    label: "988 Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/",
    description:
      "Call, text, or chat support for emotional distress, crisis, substance use concerns, or needing someone to talk to.",
  },
  {
    label: "USAGov — Find affordable legal aid",
    href: "https://www.usa.gov/legal-aid",
    description:
      "Federal starting point for finding free or low-cost legal help.",
  },
  {
    label: "NSOPW — Public sex offender registry search",
    href: "https://www.nsopw.gov/",
    description:
      "U.S. Department of Justice public search across participating state, territory, tribal, and District of Columbia registry websites.",
  },
  {
    label: "SMART Office — SORNA current law",
    href: "https://smart.ojp.gov/sorna/current-law",
    description:
      "Federal SMART Office summary of SORNA registration framework, including living, working, and school jurisdiction concepts.",
  },
  {
    label: "SMART Office — SORNA in-person registration requirements",
    href: "https://smart.ojp.gov/sorna/current-law/implementation-documents/person-verification",
    description:
      "Federal SMART Office explanation of in-person registration and verification concepts under SORNA.",
  },
  {
    label: "U.S. Courts — Cybercrime-related supervision conditions",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-cybercrime-related-conditions-probation-and-supervised",
    description:
      "Federal courts resource describing computer-device and internet-use conditions that may be imposed in qualifying supervision cases.",
  },
  {
    label: "Federal Student Aid — Pell Grants",
    href: "https://studentaid.gov/understand-aid/types/grants/pell",
    description:
      "Official Federal Student Aid page, including Pell Grant information and notes about approved Prison Education Programs.",
  },
];

const quickResources = [
  {
    label: "Call 211",
    description:
      "Ask for local housing, food, utility, transportation, health care, and reentry support. Use this when you do not know where to start.",
    phone: "Dial 211",
    href: "https://www.211.org/",
    badge: "Immediate help",
  },
  {
    label: "Call or text 988",
    description:
      "Use 988 for emotional crisis, suicidal thoughts, substance use distress, or when you need someone to talk to right now.",
    phone: "Call or text 988",
    href: "https://988lifeline.org/",
    badge: "Crisis support",
  },
  {
    label: "Find your local American Job Center",
    description:
      "Ask for resume help, job leads, interview practice, training options, and paper or in-person support if internet access is restricted.",
    phone: "1-877-US-2JOBS",
    href: "https://www.dol.gov/agencies/eta/american-job-centers",
    badge: "Employment",
  },
  {
    label: "Find treatment",
    description:
      "Search for mental health or substance use treatment, including outpatient, inpatient, and telehealth options.",
    href: "https://findtreatment.gov/",
    badge: "Health",
  },
  {
    label: "Find legal aid",
    description:
      "Use this when you need help understanding supervision, registration, housing, family law, benefits, or relief options.",
    href: "https://www.usa.gov/legal-aid",
    badge: "Legal help",
  },
  {
    label: "Check official registry sources",
    description:
      "Use NSOPW and your state registry office as a starting point, but rely on the agency with authority for your specific reporting duty.",
    href: "https://www.nsopw.gov/",
    badge: "Verify",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Reentry Checklist for People on Registries | The SOLAR Project"
        description="A practical, registry-aware reentry guide for people coming home after incarceration and the supporters helping them stabilize, document, verify, comply, and rebuild."
        keywords="reentry checklist, sex offense registry reentry, supervision checklist, registrant housing, registrant employment, reentry support, SOLAR Project"
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
            Reentry Checklist for People on Registries
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical, registry-aware roadmap for coming home: documents,
            housing, work, health care, supervision, technology, family support,
            and the next small step.
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

        <GuideIntro title="Start here" icon="🧭">
          <p>
            Coming home with registry duties or sex-offense-specific
            supervision is not the same as ordinary reentry. Housing, internet
            use, travel, employment changes, family contact, treatment, and
            registration can all carry consequences if you guess wrong.
          </p>

          <p>
            This checklist is meant to reduce panic and help you move in order:
            protect your freedom, stabilize your basic needs, document
            everything, ask the right questions, and build from there. You do
            not have to solve your whole life today. You do need to protect the
            steps that can create violations, missed deadlines, or avoidable
            instability.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="First moves: protect freedom, health, and shelter"
          subtitle="Use this when you are newly released, helping someone come home, or trying to recover after a chaotic first week."
          icon="⚡"
          urgentActions={[
            <span>
              Confirm your reporting instructions, registration deadline, curfew,
              travel limits, contact limits, treatment requirements, and any
              internet or device restrictions.
            </span>,
            <span>
              Write every deadline on paper and in a calendar. Include who gave
              the instruction, the date, the phone number, and what you were
              told.
            </span>,
            <span>
              Do not sign a lease, move addresses, start a job, leave your
              approved area, or use restricted technology until the person with
              authority confirms the step is allowed.
            </span>,
            <span>
              If food, shelter, transportation, medication, or emotional safety
              is unstable, call 211, 988, a reentry program, or a trusted
              supporter today.
            </span>,
          ]}
          nextActions={[
            <span>
              Start a paper reentry folder with ID documents, supervision
              conditions, registry instructions, receipts, certificates, medical
              records, and written confirmations.
            </span>,
            <span>
              Begin replacement ID, Social Security card, birth certificate,
              Medicaid or insurance, Lifeline phone, SNAP, and job-center steps
              as soon as possible.
            </span>,
            <span>
              Ask one trusted person to help with printing, phone calls, rides,
              or note-taking if internet access, transportation, stress, or
              literacy barriers make this harder.
            </span>,
          ]}
          reminder={
            <span>
              The safer pattern is simple: ask first, write it down, save proof,
              and keep moving one manageable step at a time.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Priority 1",
              title: "Protect your freedom",
              icon: "⚖️",
              tone: "legal",
              description:
                "Registration, supervision, travel, housing approval, treatment, curfew, device use, and contact rules come before convenience.",
            },
            {
              eyebrow: "Priority 2",
              title: "Build basic stability",
              icon: "🏠",
              tone: "reentry",
              description:
                "ID, shelter, food, medication, phone access, transportation, income, and a simple routine make compliance easier.",
            },
            {
              eyebrow: "Priority 3",
              title: "Document everything",
              icon: "🗂️",
              tone: "success",
              description:
                "A paper trail protects you when memories differ, offices change staff, websites go down, or someone asks for proof later.",
            },
          ]}
        />

        <GuideCallout tone="legal" icon="⚠️" title="This guide is not a substitute for your conditions">
          <p>
            Registry and supervision rules can change by state, court order,
            parole or probation office, local policy, treatment provider, and
            the exact facts of your case. Use this guide to organize your next
            steps, not to override written instructions from the court,
            registry office, or supervising authority.
          </p>
        </GuideCallout>

<GuideSectionHeader
          id="verify-before-acting"
          number="1"
          title="Verify before acting"
          subtitle="When a step could affect your freedom, housing, job, travel, treatment, or registration, do not rely on guesses."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A lot of reentry advice says, “get a job,” “find housing,” or
              “use online resources.” That advice can be risky for someone on a
              registry or under sex-offense-specific supervision. The same step
              that helps one person may create a violation for another if there
              are address restrictions, internet limits, victim-contact rules,
              job-reporting requirements, school-zone restrictions, treatment
              conditions, or travel notice rules.
            </p>

            <p>
              Your goal is not to ask vague questions like “Is this okay?” Your
              goal is to ask a narrow question about the exact action you are
              about to take, then save the answer.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Use this verification habit"
            whoToAsk={
              <span>
                The person or office with authority: supervising officer, parole
                or probation office, registry office, court clerk, treatment
                provider, housing program, legal aid attorney, or another
                official source depending on the issue.
              </span>
            }
            whatToAsk={
              <span>
                “Before I do this, is this exact step allowed under my written
                conditions, registration duties, local rules, and your office’s
                instructions?”
              </span>
            }
            whatToSave={
              <span>
                Name, title, office, phone number, date, exact question, exact
                answer, confirmation number, email, letter, screenshot if
                allowed, receipt, appointment card, or handwritten notes.
              </span>
            }
          />

          <ScriptBox
            title="Script: asking a compliance question"
            tone="legal"
            context="Use this when asking about housing, travel, internet use, employment changes, treatment, family contact, or registration."
            script={`Hello, my name is [Name]. I am trying to avoid making a mistake.\n\nBefore I take this step, I need to confirm whether it is allowed under my conditions and any registration rules.\n\nThe exact step is: [describe the address, job, trip, device, contact, program, or deadline].\n\nWho has authority to approve or deny this? Is there a form, deadline, or written instruction I need? I am taking notes. Could you please repeat your name, title, and office so I can write it down correctly?`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="document-packet"
          number="2"
          title="Build a reentry folder"
          subtitle="A simple folder can prevent chaos from becoming a crisis."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Keep one paper folder even if you also use a phone. Phones get
              lost, accounts get locked, internet access may be restricted, and
              agencies still often ask for paper proof. A folder also helps
              supporters assist without needing access to private accounts.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Reentry folder checklist"
            intro={
              <span>
                Start with what you have. Add receipts and proof as you go.
                Make copies when possible and keep originals somewhere safe.
              </span>
            }
            categories={[
              {
                title: "Identity and records",
                items: [
                  "State ID, driver’s license, or DMV/state ID appointment receipt",
                  "Social Security card or SSA replacement-card confirmation",
                  "Birth certificate request, receipt, or certified copy",
                  "Release paperwork, prison certificates, GED, trade certificates, and program records",
                  "Medical records, medication list, glasses/dental information, and insurance paperwork",
                ],
              },
              {
                title: "Compliance and supervision",
                items: [
                  "Judgment, sentence, supervision conditions, parole/probation instructions, and court orders",
                  "Registry instructions, reporting schedule, registration receipts, and address-verification paperwork",
                  "Treatment schedule, attendance proof, payment receipts, and completion certificates",
                  "Drug test receipts, check-in cards, travel approvals, curfew instructions, and written permissions",
                ],
              },
              {
                title: "Housing, work, and benefits",
                items: [
                  "Housing applications, landlord notes, address-approval proof, lease paperwork, and rent receipts",
                  "Resume, job applications, interview notes, WOTC or bonding information, pay stubs, and offer letters",
                  "Medicaid, SNAP, Lifeline, disability, unemployment, or other benefits applications and notices",
                  "A phone log with date, person called, number, what was said, and the next step",
                ],
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-steps"
          number="3"
          title="First steps: ID, documents, phone, benefits"
          subtitle="Many doors stay closed until you can prove who you are and receive calls or mail."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              ID and documents are not “paperwork chores.” They affect housing,
              jobs, bank accounts, benefits, medical care, transportation,
              education, and supervision compliance. Start with the documents
              you can request fastest, and save proof that you started.
            </p>
          </GuideProse>

          <GuideChecklist
            id="first-steps-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "id",
                label: "Start the state ID or driver’s license process.",
                helper:
                  "First step: use USAGov’s ID replacement page to find the right state motor vehicle agency, or ask a reentry worker, library, or supporter to help identify the office.",
              },
              {
                id: "ss-card",
                label: "Request or replace your Social Security card if needed.",
                helper:
                  "First step: use the SSA replacement-card page or call SSA if online access is not allowed or realistic.",
              },
              {
                id: "birth-certificate",
                label: "Request a certified birth certificate if you do not have one.",
                helper:
                  "First step: contact the vital records office in the state or territory where you were born. Keep the receipt.",
              },
              {
                id: "mail",
                label: "Choose a safe mailing address.",
                helper:
                  "Use an approved residence, trusted supporter, reentry program, or agency address only if allowed. Ask before using any address that could affect registration or supervision.",
              },
              {
                id: "phone",
                label: "Get reliable phone access.",
                helper:
                  "First step: ask about Lifeline if income is low or you receive Medicaid, SNAP, or another qualifying benefit. Verify device and internet rules first.",
              },
              {
                id: "benefits",
                label: "Apply for food, medical, and emergency support if needed.",
                helper:
                  "First step: call 211, contact your state Medicaid office, and use the USDA SNAP state directory or local social services office.",
              },
              {
                id: "bank",
                label: "Ask about a basic or second-chance bank account.",
                helper:
                  "Bring ID if you have it. If you do not, ask what documents the bank accepts and write down the answer.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="📝" title="Receipts count">
            <p>
              If you do not have the document yet, a receipt, appointment card,
              application confirmation, case number, or note from an agency can
              still help show progress.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="housing"
          number="4"
          title="Housing: do not sign first and ask later"
          subtitle="For people on registries, housing is both a stability issue and a compliance issue."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Housing may be affected by supervision conditions, state registry
              rules, local restrictions, landlord policy, treatment rules,
              curfew, transportation, and who else lives in the home. A cheap or
              available room is not safe if the address is not allowed.
            </p>
          </GuideProse>

          <GuideChecklist
            id="housing-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "exact-address",
                label: "Write down the exact address before agreeing to move in.",
                helper:
                  "Include apartment number, unit, hotel room, shelter name, cross streets, and whether children live nearby or in the home if that matters under your rules.",
              },
              {
                id: "approval",
                label: "Ask the supervising officer or registry office whether the exact address is allowed.",
                helper:
                  "Do this before signing a lease, paying a deposit, moving property in, or using the address for registration.",
              },
              {
                id: "temporary",
                label: "Ask how temporary, transitional, shelter, motel, or homeless status must be reported.",
                helper:
                  "Do not assume temporary housing has the same reporting rules as a permanent lease.",
              },
              {
                id: "supporter-home",
                label: "If staying with family or a supporter, review the household risks.",
                helper:
                  "Ask about minors, schools, daycare, internet access, curfew, visitors, weapons, alcohol, and any contact restrictions.",
              },
              {
                id: "local-help",
                label: "Call 211 or a local reentry program if housing is unstable.",
                helper:
                  "Ask for emergency shelter, transitional housing, rent help, utility help, transportation help, and programs that work with people with registry restrictions.",
              },
              {
                id: "paper-trail",
                label: "Save all housing-related proof.",
                helper:
                  "Keep address approvals, denial notes, application copies, landlord messages, rent receipts, utility bills, and agency instructions.",
              },
            ]}
          />

          <ScriptBox
            title="Script: checking an address before signing"
            tone="legal"
            context="Use this before paying money, signing a lease, moving in, or registering an address."
            script={`Hello, I need to confirm whether an address is allowed before I sign anything or move in.\n\nThe exact address is: [full address, unit, city, state, ZIP].\n\nCan you tell me whether this address is allowed under my supervision conditions, registration duties, and any local restrictions your office applies? If you cannot approve it, who can? Is there a form or written confirmation I should request?`}
          />

          <GuideCallout tone="urgent" icon="🚫" title="Do not let desperation erase verification">
            <p>
              Housing pressure is real. So is violation risk. If you are about
              to sleep outside, call 211, your supervising officer, a reentry
              program, legal aid, or a trusted supporter and document every
              attempt to find an allowed place.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="employment"
          number="5"
          title="Employment and income"
          subtitle="The goal is steady, reportable work that does not create hidden compliance problems."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Work can support stability, treatment, restitution, housing, and
              dignity. But some jobs may be off-limits because of your
              conditions, the worksite, internet requirements, contact with
              minors, travel, licensing rules, background checks, or schedule
              conflicts with curfew and treatment.
            </p>

            <p>
              Start with job paths that can be verified, documented, and
              explained. Use American Job Centers, reentry programs, fair-chance
              job boards, certificates earned while incarcerated, and employers
              that are willing to evaluate skills instead of relying only on
              stigma.
            </p>
          </GuideProse>

          <GuideChecklist
            id="employment-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "job-center",
                label: "Contact an American Job Center.",
                helper:
                  "Ask for resume help, interview practice, training, job leads, and paper or in-person support if you cannot use the internet freely.",
              },
              {
                id: "job-rules",
                label: "Check whether the job type, location, schedule, devices, or duties create supervision or registry problems.",
                helper:
                  "Ask before accepting work involving schools, childcare settings, delivery routes, travel, internet devices, social media, or unsupervised access to minors.",
              },
              {
                id: "resume",
                label: "Build a simple resume around skills, reliability, training, and work history.",
                helper:
                  "Include GED, trades, custodial, warehouse, kitchen, clerical, maintenance, CDL prep, safety training, or certificates earned inside.",
              },
              {
                id: "disclosure",
                label: "Prepare a short, truthful background explanation.",
                helper:
                  "Do not overshare. Take responsibility where appropriate, then move quickly to skills, accountability, restrictions you can comply with, and why you can do the job safely.",
              },
              {
                id: "wotc",
                label: "Learn whether WOTC or the Federal Bonding Program may help an employer.",
                helper:
                  "These are employer tools, not guarantees. Bring a short explanation and let the job center or employer verify eligibility.",
              },
              {
                id: "reporting",
                label: "Report job offers, job changes, income, or schedule changes when your conditions require it.",
                helper:
                  "Save pay stubs, offer letters, employer contact information, schedules, and proof that you reported changes.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking a job center for help"
            tone="reentry"
            context="Use by phone or in person at an American Job Center."
            script={`Hello, my name is [Name]. I am recently released and looking for work.\n\nI have background-related barriers and may have supervision or registry restrictions that affect job sites, travel, schedules, and internet use.\n\nCan I meet with someone who helps justice-impacted job seekers? I need help with a resume, job leads, interview practice, training options, and employers that consider people with records.`}
          />

          <ScriptBox
            title="Script: brief employer explanation"
            tone="neutral"
            context="Adapt this carefully. Do not use it if your lawyer, supervising officer, or program gives you different instructions."
            script={`I want to be direct. I have a criminal conviction in my background, and I understand that may raise questions.\n\nSince then, I have focused on accountability, stability, and work skills. I can follow workplace rules, show up on time, and do the job described. I also want to make sure the schedule, location, and duties comply with my current requirements.\n\nI am happy to talk about my qualifications and what I can do to be a reliable employee.`}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="health"
          number="6"
          title="Health, treatment, and emotional stability"
          subtitle="Medical care, medication, counseling, and crisis support are reentry infrastructure."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Reentry stress can hit the body hard. Sleep changes, shame,
              conflict, fear, medication gaps, substance use triggers, and
              treatment requirements can all pile up. Health care is not a side
              issue. It can affect appointments, work, housing, emotional
              control, and compliance.
            </p>
          </GuideProse>

          <GuideChecklist
            id="health-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "meds",
                label: "Make a medication plan before anything runs out.",
                helper:
                  "Write down medication names, dosage, prescribing doctor, pharmacy, refill date, and what to do if you need a bridge prescription.",
              },
              {
                id: "coverage",
                label: "Apply for Medicaid, Marketplace coverage, or local clinic help.",
                helper:
                  "First step: use HealthCare.gov, contact your state Medicaid agency, or ask a health department or social services office for paper/in-person help.",
              },
              {
                id: "appointments",
                label: "Schedule primary care, dental, vision, mental health, and required treatment appointments.",
                helper:
                  "Bring release paperwork, medication list, ID if available, insurance paperwork, and supervision or treatment instructions if relevant.",
              },
              {
                id: "treatment",
                label: "Use FindTreatment.gov or SAMHSA’s helpline for treatment referrals.",
                helper:
                  "Ask about mental health care, substance use treatment, outpatient services, telehealth, sliding-scale fees, and transportation options.",
              },
              {
                id: "crisis",
                label: "Use 988 if you are in emotional crisis or afraid you may hurt yourself.",
                helper:
                  "Call, text, or chat. If there is immediate physical danger, call emergency services.",
              },
              {
                id: "support",
                label: "Build one low-drama support habit.",
                helper:
                  "Examples: walking, support group, faith group, therapy, journaling, breathing practice, or weekly call with a safe supporter.",
              },
            ]}
          />

          <GuideCallout tone="reentry" icon="🫁" title="A simple grounding tool">
            <p>
              Try 4-4-8 breathing: inhale for four seconds, hold for four
              seconds, exhale for eight seconds. It will not fix the situation,
              but it can help your body slow down before a call, appointment, or
              hard conversation.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="technology"
          number="7"
          title="Technology basics without creating violations"
          subtitle="Phones, email, maps, and job applications matter — but restrictions must come first."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Modern reentry often requires phone access, email, online
              applications, maps, transit schedules, telehealth, and electronic
              documents. But people under sex-offense-specific supervision may
              have limits on devices, apps, internet access, social media,
              passwords, monitoring software, public computers, or unsupervised
              online activity.
            </p>

            <p>
              Do not assume a free phone, library computer, job-center computer,
              Gmail account, maps app, or telehealth visit is allowed just
              because it is normal for everyone else.
            </p>
          </GuideProse>

          <GuideChecklist
            id="technology-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "device-rules",
                label: "Get clear device and internet instructions in writing if possible.",
                helper:
                  "Ask what devices, apps, browsers, email, job sites, maps, banking, telehealth, social media, and public computers are allowed or restricted.",
              },
              {
                id: "lifeline",
                label: "Apply for Lifeline phone or internet support if eligible and allowed.",
                helper:
                  "Lifeline may be available based on income or participation in programs such as SNAP or Medicaid. Verify device rules first.",
              },
              {
                id: "contacts",
                label: "Save key phone numbers on paper and in your phone if allowed.",
                helper:
                  "Include supervising officer, registry office, treatment provider, doctor, pharmacy, job center, 211, 988, family supporter, and legal aid.",
              },
              {
                id: "email",
                label: "Create or recover one professional email account if allowed.",
                helper:
                  "Use it for jobs, health care, benefits, and school. Keep the password somewhere safe and permitted.",
              },
              {
                id: "maps",
                label: "Plan transportation before appointment days.",
                helper:
                  "If maps apps are restricted, ask for printed bus schedules, paper maps, transit office help, or supporter assistance.",
              },
              {
                id: "library",
                label: "Use libraries and job centers carefully.",
                helper:
                  "Ask whether public computer use is allowed. If it is, keep use job- and benefits-related and save any required documentation.",
              },
            ]}
          />

          <GuideCallout tone="privacy" icon="🔐" title="Ask about monitoring before using a device">
            <p>
              Some supervision conditions allow devices only with monitoring or
              approval. Others restrict specific apps, websites, or internet
              access. The practical question is not “Can people use phones?”
              The practical question is “What am I allowed to use, for what
              purpose, on what device, with what reporting or monitoring?”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="legal-obligations"
          number="8"
          title="Supervision, registration, and legal obligations"
          subtitle="This is the section to treat slowly, carefully, and in writing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Registration and supervision duties are not background noise.
              They can control address changes, employment, travel, schooling,
              vehicles, identifiers, internet use, treatment, curfew, contact,
              payment plans, and check-ins. Federal SORNA concepts include
              registration where a person lives, works, or goes to school, but
              states and local offices have their own procedures and deadlines.
            </p>

            <p>
              Your safest move is to follow your written instructions, ask
              narrow questions before acting, and save proof of compliance.
            </p>
          </GuideProse>

          <GuideChecklist
            id="legal-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "first-meeting",
                label: "Attend every supervision meeting on time.",
                helper:
                  "Arrive early if possible. Bring your folder, calendar, questions, documents, receipts, medication list, job information, and housing information.",
              },
              {
                id: "calendar",
                label: "Keep a calendar for every deadline.",
                helper:
                  "Include reporting, registration, treatment, curfew, drug tests, polygraph, payments, court dates, travel deadlines, and benefit appointments.",
              },
              {
                id: "registration",
                label: "Confirm registration duties with the office that handles them.",
                helper:
                  "Ask about address, work, school, vehicle, email, online identifier, travel, temporary lodging, homeless/transient, and in-person reporting rules if they apply.",
              },
              {
                id: "travel",
                label: "Ask before leaving your approved area.",
                helper:
                  "Travel can involve supervision approval, registry notice, destination rules, lodging rules, and return-reporting duties.",
              },
              {
                id: "changes",
                label: "Report changes exactly as required.",
                helper:
                  "This may include residence, job, school, phone, vehicle, email, online identifiers, relationship changes, medication, or treatment provider changes.",
              },
              {
                id: "payments",
                label: "Set up payment plans when money is tight.",
                helper:
                  "Ask for the minimum accepted payment, due date, receipt process, and what to do if you cannot pay on time.",
              },
              {
                id: "proof",
                label: "Keep proof of every compliance step.",
                helper:
                  "Save check-in receipts, registration receipts, treatment attendance, drug test slips, payment receipts, emails, letters, and notes from calls.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking what must be reported"
            tone="legal"
            context="Use when you are unsure whether a change must be reported."
            script={`I want to make sure I report changes correctly.\n\nCan you tell me exactly what changes I must report, how quickly I must report them, and whether I must report them in person, by phone, online, or in writing?\n\nI am especially asking about residence, temporary lodging, employment, school, phone number, vehicle, email, online identifiers, travel, medication, and treatment changes.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-support"
          number="9"
          title="Family and supporter guidance"
          subtitle="Support helps most when it reduces risk instead of adding pressure."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Families and supporters often want to help immediately: offer a
              couch, hand over a phone, create an email account, drive someone
              somewhere, invite people over, or push for a job. Those actions
              may be loving, but they can still cause problems if they conflict
              with supervision, registry duties, treatment rules, or household
              restrictions.
            </p>

            <p>
              The best support is calm, practical, and documented. Help the
              person verify, print, call, travel safely, keep appointments, and
              avoid rushed choices.
            </p>
          </GuideProse>

          <RoleGuidanceGrid
            title="What different people can do"
            roles={[
              {
                role: "Person coming home",
                icon: "🧭",
                guidance:
                  "Be honest about what you know and what you do not know. Do not promise a supporter that something is allowed until you verify it. Bring your folder to appointments and write down answers.",
              },
              {
                role: "Family member or partner",
                icon: "🤝",
                guidance:
                  "Ask before offering housing, devices, rides, childcare, internet access, or social events. Help with calls and paperwork without pressuring the person to take risky shortcuts.",
              },
              {
                role: "Friend, mentor, or advocate",
                icon: "📋",
                guidance:
                  "Help with transportation, printing, job leads, calendars, and notes. Avoid legal advice unless you are qualified. Encourage written verification and professional help when rules are unclear.",
              },
            ]}
          />

          <ScriptBox
            title="Script: asking a supporter for specific help"
            tone="family"
            context="Use this when you need help but do not want to overwhelm someone."
            script={`I am trying to stay organized and avoid mistakes. I do not need you to solve everything.\n\nThis week, could you help me with one specific thing: [ride / printing / phone call / documents / job center visit / grocery trip]?\n\nIf something involves housing, internet, travel, children, or supervision rules, I need to verify it before we do it.`}
          />

          <GuideCallout tone="family" icon="💛" title="Supporters: do not take confusion personally">
            <p>
              A person coming home may be overwhelmed, embarrassed, defensive,
              or afraid of making a mistake. Keep help concrete: one ride, one
              folder, one phone call, one appointment, one meal, one calm
              conversation.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="daily-living"
          number="10"
          title="Daily living and stability"
          subtitle="Small routines make big obligations easier to carry."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Reentry can feel like every hour belongs to an agency, employer,
              landlord, treatment provider, or crisis. A simple routine lowers
              the chance of missed appointments, impulsive choices, conflict,
              and paperwork loss.
            </p>
          </GuideProse>

          <GuideChecklist
            id="daily-living-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "routine",
                label: "Create a basic daily routine.",
                helper:
                  "Wake time, medication, meals, work search, treatment, check-ins, exercise, sleep, and one paperwork task.",
              },
              {
                id: "transportation",
                label: "Plan transportation for the whole week.",
                helper:
                  "Write down bus routes, ride times, backup rides, bike routes, walking time, and what to do if a ride falls through.",
              },
              {
                id: "food",
                label: "Stabilize food access.",
                helper:
                  "Call 211, apply for SNAP if eligible, ask about food pantries, and keep simple shelf-stable meals available.",
              },
              {
                id: "budget",
                label: "Make a one-page budget.",
                helper:
                  "Track rent, phone, transportation, food, medications, supervision fees, treatment fees, court payments, and emergency savings.",
              },
              {
                id: "wins",
                label: "Track small wins.",
                helper:
                  "Examples: first week without a missed appointment, first job application, first paycheck, first document replaced, first treatment session completed.",
              },
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="long-term"
          number="11"
          title="Long-term growth"
          subtitle="Once the urgent pieces are steadier, build toward education, work paths, relief options, and community."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Long-term reentry is not only about avoiding violations. It is
              also about creating a life that is stable enough to support
              accountability, relationships, work, health, and purpose.
            </p>

            <p>
              Move slowly. Some education, licensing, volunteering, housing,
              travel, and relief paths have registry or supervision issues that
              must be checked first.
            </p>
          </GuideProse>

          <GuideChecklist
            id="long-term-checklist"
            title="Action checklist"
            columns={1}
            items={[
              {
                id: "goals",
                label: "Set one 30-day goal, one 6-month goal, and one 1-year goal.",
                helper:
                  "Make each goal specific and measurable. Example: replace ID, complete 20 job applications, finish a certificate, save $300, or attend all treatment sessions.",
              },
              {
                id: "education",
                label: "Explore GED, adult education, trade school, community college, or certificate programs.",
                helper:
                  "Ask about admission rules, background checks, campus restrictions, online access, financial aid, and whether supervision approval is needed.",
              },
              {
                id: "pell",
                label: "Check Pell Grant and financial aid options.",
                helper:
                  "Federal Student Aid explains Pell Grants, including eligibility notes for approved Prison Education Programs. Ask the school’s financial aid office for your situation.",
              },
              {
                id: "relief",
                label: "Learn whether registry relief, reduction, sealing, expungement, appeal, or supervision modification is possible.",
                helper:
                  "This is state- and case-specific. Start with legal aid, a qualified attorney, court self-help resources, or official state information.",
              },
              {
                id: "community",
                label: "Build community carefully.",
                helper:
                  "Choose spaces that are lawful, stable, and low-drama. Verify restrictions before volunteering, joining groups involving minors, or using online communities.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="12"
          title="Common mistakes to avoid"
          subtitle="Most mistakes are not about bad intentions. They happen when pressure, confusion, and silence collide."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Signing a lease or moving before address approval.",
                whyItMatters:
                  "An address can be unavailable because of supervision, registry, local rules, household members, or program policy.",
                betterMove:
                  "Write down the exact address and ask the supervising officer or registry office before paying money or moving in.",
              },
              {
                mistake: "Using a phone, computer, email, or social media before checking device and internet rules.",
                whyItMatters:
                  "Technology rules may be case-specific and may involve monitoring, approval, app limits, or internet restrictions.",
                betterMove:
                  "Ask what devices and online uses are allowed, what must be installed, and what must be reported.",
              },
              {
                mistake: "Relying on a verbal answer without notes.",
                whyItMatters:
                  "Staff change, memories differ, and agencies may later ask for proof.",
                betterMove:
                  "Save the name, date, office, number, exact question, exact answer, and written confirmation when possible.",
              },
              {
                mistake: "Waiting until medication runs out.",
                whyItMatters:
                  "Medication gaps can destabilize sleep, mood, health, treatment, work, and appointments.",
                betterMove:
                  "Ask for refills, bridge prescriptions, clinic appointments, and insurance help before the last week of medication.",
              },
              {
                mistake: "Letting shame stop you from asking for help.",
                whyItMatters:
                  "Isolation increases the chance of missed deadlines, unstable housing, emotional crisis, and bad decisions.",
                betterMove:
                  "Ask for one concrete task: a ride, a printed form, a phone call, a meal, a job-center visit, or help organizing papers.",
              },
              {
                mistake: "Assuming another registrant’s rule is your rule.",
                whyItMatters:
                  "Conditions can differ by state, court, supervision office, offense, risk level, date of conviction, and individual order.",
                betterMove:
                  "Verify your own written conditions and your own agency instructions before acting.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="offline"
          number="13"
          title="If internet access is limited or restricted"
          subtitle="This guide includes websites, but the safer path may be phone, paper, in-person help, or a trusted helper."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Offline and low-internet options"
            note={
              <span>
                Use these options if you are incarcerated, newly released,
                phone-only, without a printer, under device restrictions, or
                unsure whether internet use is allowed.
              </span>
            }
            items={[
              "Call 211 from any phone and ask for housing, food, utility, medical, transportation, and reentry support.",
              "Visit or call an American Job Center and ask for paper job leads, resume help, interview practice, and staff support.",
              "Ask SSA, DMV/state ID offices, Medicaid/SNAP offices, and vital records offices for mail, phone, or in-person options.",
              "Ask a trusted supporter to print forms, but do not have them create accounts, use addresses, or submit information that could affect registration or supervision until verified.",
              "Use a public library for printing, computer classes, paper maps, and local information only if public computer or internet use is allowed under your conditions.",
              "Keep a paper calendar, paper phone list, paper folder, and handwritten call log.",
              "Ask agencies to mail forms or appointment letters when possible.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Supporters should protect privacy too">
            <p>
              Do not post updates, addresses, case details, employer names,
              treatment information, or registry-related questions on social
              media. Ask privately, document carefully, and share only what is
              needed with the person or agency that can actually help.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="14"
          title="Resources and next steps"
          subtitle="Start with official sources, then local programs and legal help."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Immediate and practical help"
            description={
              <span>
                These links are starting points. For supervision or registration
                decisions, verify with the authority responsible for your case
                before relying on general information.
              </span>
            }
            resources={quickResources}
          />

          <ResourceLinkGrid
            title="Documents, benefits, work, and health"
            resources={[
              {
                label: "Replace vital documents and ID",
                href: "https://www.usa.gov/replace-vital-documents",
                description:
                  "Use this to find state ID, vital records, and document replacement starting points.",
                badge: "Official",
              },
              {
                label: "Replace Social Security card",
                href: "https://www.ssa.gov/number-card/replace-card",
                description:
                  "SSA replacement-card page, including online and phone/in-person paths.",
                badge: "Official",
              },
              {
                label: "Apply for Medicaid or CHIP",
                href: "https://www.healthcare.gov/medicaid-chip/",
                description:
                  "Marketplace and state Medicaid agency application paths.",
                badge: "Health",
              },
              {
                label: "Find SNAP office",
                href: "https://www.fns.usda.gov/snap/state-directory",
                description:
                  "USDA state directory for food assistance application information.",
                badge: "Food",
              },
              {
                label: "Apply for Lifeline",
                href: "https://www.lifelinesupport.org/how-to-apply/",
                description:
                  "Phone or internet discount application options. Verify device/internet rules first.",
                badge: "Phone",
              },
              {
                label: "CareerOneStop Justice-Impacted resources",
                href: "https://www.careeronestop.org/JusticeImpacted/default.aspx",
                description:
                  "Career, training, and job search resources for people with records.",
                badge: "Jobs",
              },
              {
                label: "Work Opportunity Tax Credit",
                href: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit",
                description:
                  "Employer tax credit information that may help with some hires.",
                badge: "Employer tool",
              },
              {
                label: "Federal Bonding Program",
                href: "https://bonds4jobs.com/",
                description:
                  "No-cost fidelity bonds for some hard-to-place job seekers and employers.",
                badge: "Employer tool",
              },
              {
                label: "SAMHSA National Helpline",
                href: "https://www.samhsa.gov/find-help/helplines/national-helpline",
                description:
                  "Free, confidential treatment referral and information service.",
                phone: "1-800-662-HELP",
                badge: "Health",
              },
            ]}
          />

          <ResourceLinkGrid
            title="Registry, supervision, and legal verification"
            resources={[
              {
                label: "NSOPW public registry search",
                href: "https://www.nsopw.gov/",
                description:
                  "DOJ public search across state, territory, tribal, and D.C. public registry websites.",
                badge: "Registry",
              },
              {
                label: "SMART Office SORNA current law",
                href: "https://smart.ojp.gov/sorna/current-law",
                description:
                  "Federal SORNA framework. State and local registration rules still need case-specific verification.",
                badge: "Federal",
              },
              {
                label: "SORNA in-person registration requirements",
                href: "https://smart.ojp.gov/sorna/current-law/implementation-documents/person-verification",
                description:
                  "Federal SMART Office explanation of in-person registration and verification concepts.",
                badge: "Federal",
              },
              {
                label: "U.S. Courts cybercrime-related conditions",
                href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-cybercrime-related-conditions-probation-and-supervised",
                description:
                  "Useful background for understanding why some cases involve computer or internet-related supervision conditions.",
                badge: "Court",
              },
              {
                label: "Find affordable legal aid",
                href: "https://www.usa.gov/legal-aid",
                description:
                  "Federal starting point for free or low-cost legal help.",
                badge: "Legal aid",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Housing Search Guide",
                description:
                  "Use this next when you need a deeper plan for finding housing with registry restrictions.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Job Search Strategies",
                description:
                  "Use this next for applications, interviews, disclosure planning, and realistic job pathways.",
                to: "/resources/job-search-guide",
              },
              {
                title: "Mental Health & Support Directory",
                description:
                  "Use this for crisis, therapy, support, and family mental-health resources.",
                to: "/resources/mental-health-directory",
              },
              {
                title: "Family & Allies Guide",
                description:
                  "Use this with supporters who want to help without accidentally creating risk.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Interstate Moving Guide",
                description:
                  "Use this before moving or traveling across state lines while registered or supervised.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "Financial Planning Guide",
                description:
                  "Use this for budgeting, debt, banking, credit, payments, and long-term stability.",
                to: "/resources/financial-planning-guide",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="15"
          title="Sources and verification"
          subtitle="These are starting points for action and verification, not substitutes for case-specific legal advice."
        />

        <GuideSectionCard>
          <SourceList
            note={
              <span>
                Links were selected for official status, practical usefulness,
                or direct relevance to reentry tasks. Registry and supervision
                rules still require case-specific verification with the
                authority responsible for the person’s conditions.
              </span>
            }
            sources={sourceLinks}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}