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
  TimelineGuidanceGrid,
  DoDontJudgment,
  SoftDivider,
} from "../../components/solar";

const lastChecked = "June 28, 2026";

const sourceLinks = [
  {
    label: "U.S. Courts — Overview of Probation and Supervised Release Conditions",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions",
    description:
      "Supports the guide’s framing that supervision conditions set the parameters of federal probation and supervised release and are used by probation officers to monitor compliance.",
  },
  {
    label: "U.S. Courts — Authority for Probation and Supervised Release Conditions",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-1-authority-probation-and-supervised-release-conditions",
    description:
      "Supports the distinction between court authority, sentencing conditions, and officer implementation in federal probation and supervised release.",
  },
  {
    label: "U.S. Courts — Standard Condition Language",
    href: "https://www.uscourts.gov/appendix-standard-condition-language-probation-and-supervised-release-conditions",
    description:
      "Supports examples of standard federal supervision topics, including reporting, travel, employment, officer visits, truthful answers, and related conditions.",
  },
  {
    label: "U.S. Courts — Leaving the Judicial District",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-2-leaving-judicial-district-probation-and-supervised",
    description:
      "Supports the travel-permission warning that leaving an approved district may require advance permission from the court or probation officer.",
  },
  {
    label: "U.S. Courts — Search and Seizure Condition",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-search-and-seizure-probation-and-supervised-release",
    description:
      "Supports careful language about federal search conditions, reasonable suspicion, reasonable time, and reasonable manner when that condition applies.",
  },
  {
    label: "U.S. Courts — Association and Contact Restrictions",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-association-and-contact-restrictions-probation-and",
    description:
      "Supports the guide’s warning that contact restrictions may apply to victims, minors, co-defendants, or other people connected to case-specific risk factors.",
  },
  {
    label: "U.S. Courts — Revocations for Failure to Comply with Supervision Conditions",
    href: "https://www.uscourts.gov/data-news/judiciary-news/2022/06/14/just-facts-revocations-failure-comply-supervision-conditions-and-sentencing-outcomes",
    description:
      "Supports the explanation that technical violations can include conduct such as failure to report, failed drug testing, treatment refusal, or possession of contraband.",
  },
  {
    label: "U.S. Courts — Probation and Pretrial Services",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services",
    description:
      "Supports the guide’s general description of federal probation and pretrial services officers as court personnel who investigate and supervise people charged with or convicted of federal crimes.",
  },
  {
    label: "U.S. Courts — Pretrial Services",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/pretrial-services",
    description:
      "Supports the plain-language distinction between pretrial supervision and post-conviction supervision.",
  },
  {
    label: "U.S. District Court, District of South Dakota — Probation, Parole, and Supervised Release",
    href: "https://www.sdd.uscourts.gov/content/what-difference-between-probation-parole-and-supervised-release",
    description:
      "Supports the short distinction between probation, parole, and supervised release.",
  },
  {
    label: "DOJ SMART Office — SORNA",
    href: "https://smart.ojp.gov/sorna",
    description:
      "Supports the guide’s explanation that SORNA sets minimum national standards for sex offender registration and notification.",
  },
  {
    label: "DOJ SMART Office — Registration FAQs",
    href: "https://smart.ojp.gov/faqs",
    description:
      "Supports the statement that SORNA requires registration and keeping registration current in each jurisdiction where a person lives, works, or goes to school.",
  },
  {
    label: "Dru Sjodin National Sex Offender Public Website",
    href: "https://www.nsopw.gov/",
    description:
      "Supports the guide’s description of NSOPW as a DOJ-linked national search portal that draws from state, territorial, and tribal registry systems.",
  },
  {
    label: "Bureau of Prisons — Sex Offender Registration and Treatment Notification Form",
    href: "https://www.bop.gov/policy/forms/BP_A0648.pdf",
    description:
      "Supports the guide’s warning that people leaving federal custody may receive registration-related notice before release, but local registration agencies still control local reporting steps.",
  },
  {
    label: "USA.gov — Find Legal Aid",
    href: "https://www.usa.gov/legal-aid",
    description:
      "Supports the legal-help resource link for people who need free or low-cost legal assistance.",
  },
];

const resourceLinks = [
  {
    label: "U.S. Courts supervision condition overview",
    href: "https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions",
    badge: "Official",
    description:
      "Federal overview of probation and supervised release conditions, including standard and special conditions.",
  },
  {
    label: "Federal monthly supervision reporting system",
    href: "https://supervision.uscourts.gov/",
    badge: "Federal",
    description:
      "Electronic reporting portal used in some federal districts. Use only if your officer gives you access and tells you to report this way.",
  },
  {
    label: "DOJ SMART Office registration FAQs",
    href: "https://smart.ojp.gov/faqs",
    badge: "Official",
    description:
      "Federal FAQ explaining general SORNA registration concepts. Your state, local, tribal, or territorial registry office may still have additional rules.",
  },
  {
    label: "NSOPW national registry portal",
    href: "https://www.nsopw.gov/",
    badge: "DOJ",
    description:
      "National public search portal that pulls from state, territorial, and tribal registry systems. It is not a substitute for asking your registry office about your own duties.",
  },
  {
    label: "USA.gov legal aid finder",
    href: "https://www.usa.gov/legal-aid",
    badge: "Legal help",
    description:
      "Starting point for finding free or low-cost legal help if you need advice about a violation, modification, travel, housing, or registration problem.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Supervision Conditions Survival Guide | The SOLAR Project"
        description="Plain-language guide to probation, parole, supervised release, treatment rules, registry overlap, searches, violations, documentation, and communication with officers."
        keywords="probation, parole, supervised release, supervision conditions, registry compliance, treatment rules, violation, reentry, documentation, SOLAR Project"
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
            Supervision Conditions Survival Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Plain-language guide to probation, parole, supervised release,
            treatment rules, searches, violations, documentation, and
            communication with officers.
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

        <GuideIntro title="Start Here" icon="🧭">
          <p>
            Supervision can feel like trying to follow several rulebooks at the
            same time. That is often exactly what is happening.
          </p>

          <p>
            You may have conditions from a court, instructions from a probation
            or parole officer, rules from treatment, and separate registry duties
            from a sheriff, police department, state registry unit, or tribal
            authority. Those systems may overlap, but they are not the same.
          </p>

          <p>
            This guide is not legal advice. It is a survival tool: read the
            paperwork, identify who has authority, verify before acting, save
            proof, communicate calmly, and get help early when the risk is
            serious.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you are newly released, newly assigned conditions, or worried about a violation"
          subtitle="Start with the steps that reduce confusion and prevent avoidable damage."
          icon="⚡"
          urgentActions={[
            <span>
              Gather your judgment, release papers, written conditions, registry
              instructions, treatment contract, safety plan, and officer contact
              information.
            </span>,
            <span>
              Do not guess about travel, housing, internet use, devices,
              employment, contact with minors, contact with protected people, or
              registry deadlines.
            </span>,
            <span>
              If you think you missed something, report the problem calmly and
              quickly. Hiding, deleting, disappearing, or waiting usually makes
              the risk worse.
            </span>,
          ]}
          nextActions={[
            <span>
              Make one paper or digital supervision folder and start a dated log
              of every instruction, appointment, approval, denial, payment, and
              attempted contact.
            </span>,
            <span>
              Ask narrow questions: “Which rule controls this?” “Who can approve
              it?” “Can I get that in writing?”
            </span>,
            <span>
              Contact counsel or legal aid before making statements about an
              alleged violation, new law-enforcement contact, search dispute, or
              treatment discharge.
            </span>,
          ]}
          reminder={
            <span>
              The goal is not to win an argument in the moment. The goal is to
              stay safe, stay reachable, document what happened, and avoid making
              the situation harder to fix.
            </span>
          }
        />

        <GuideSectionHeader
          id="rulebooks"
          number="1"
          title="You may have more than one rulebook"
          subtitle="Probation, parole, supervised release, treatment, and registry duties can overlap without being the same authority."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People often use “probation,” “parole,” and “supervision” as if
              they mean the same thing. In real life, the distinction matters.
              The authority, paperwork, decision-maker, violation process, and
              person who can approve exceptions may be different.
            </p>

            <p>
              Probation usually means a court allowed someone to serve all or
              part of a sentence in the community instead of jail or prison.
              Parole usually means someone was released from prison before the
              full sentence ended and is supervised by a parole agency or parole
              board. Federal supervised release usually starts after a federal
              prison sentence; it is not the same as federal parole. Pretrial
              release happens before conviction or final case outcome.
            </p>

            <p>
              Treatment rules and registry duties may run alongside supervision,
              but they are not automatically the same thing. A treatment provider
              may have group rules, device rules, safety-plan rules, payment
              rules, or discharge rules. A registry office may have separate
              deadlines for address, employment, school, vehicle, identifier, or
              travel reporting.
            </p>
          </GuideProse>

          <GuideCallout
            tone="legal"
            icon="⚖️"
            title="The practical rule"
          >
            <p>
              Permission from one system may not satisfy another system. Your
              officer might approve travel, but the registry office may still
              require notice. The registry office might accept an address update,
              but your officer may still need to approve where you live. A
              treatment provider might allow something, but your court conditions
              may still forbid it.
            </p>
          </GuideCallout>

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Court sentence",
                title: "Probation",
                icon: "🏛️",
                tone: "legal",
                description:
                  "Community supervision ordered by a court, often instead of some or all incarceration. The sentencing court usually remains important.",
              },
              {
                eyebrow: "Release from prison",
                title: "Parole",
                icon: "🗝️",
                tone: "reentry",
                description:
                  "Community supervision after release from prison under a parole agency, parole board, or state correctional authority.",
              },
              {
                eyebrow: "Federal post-prison term",
                title: "Supervised release",
                icon: "📋",
                tone: "info",
                description:
                  "A federal supervision term imposed by the court and served after prison. U.S. probation officers supervise it.",
              },
              {
                eyebrow: "Before conviction",
                title: "Pretrial release",
                icon: "⏳",
                tone: "warning",
                description:
                  "Release rules while a case is still pending. Conditions may include reporting, travel limits, no-contact orders, or monitoring.",
              },
              {
                eyebrow: "Program rules",
                title: "Treatment",
                icon: "🧠",
                tone: "research",
                description:
                  "Provider rules, treatment contracts, group expectations, safety plans, assignments, payment rules, and discharge standards.",
              },
              {
                eyebrow: "Separate reporting system",
                title: "Registry duties",
                icon: "📍",
                tone: "urgent",
                description:
                  "Registration rules are separate from supervision even when they overlap. The registry agency may be a sheriff, police department, state unit, or tribal office.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="When systems overlap, verify the authority"
            whoToAsk={
              <span>
                Ask the authority that controls the specific rule: officer,
                court clerk, attorney, treatment provider, registry office,
                parole board, or pretrial services officer.
              </span>
            }
            whatToAsk={
              <span>
                “Which rulebook applies to this exact action? Who can approve
                it? Is there a form, deadline, or written approval I need before
                I act?”
              </span>
            }
            whatToSave={
              <span>
                Save the written condition, agency name, person you spoke with,
                date, time, phone number, email, form, approval, denial, and any
                confirmation number.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="2"
          title="What changes over time"
          subtitle="Supervision risk is not the same on day one, month one, routine supervision, or after a warning."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="A safer supervision timeline"
            stages={[
              {
                stage: "First 72 hours",
                icon: "🕒",
                whatChanges:
                  "Reporting deadlines, release instructions, housing approval, medication, transportation, registry instructions, and initial officer contact may all happen quickly.",
                whatToDo:
                  "Report as instructed, save every paper, write down names and times, confirm where you are allowed to stay, and ask before leaving the approved area.",
              },
              {
                              stage: "First month",
                icon: "🗂️",
                whatChanges:
                  "You may receive reporting instructions, treatment intake, employment expectations, device rules, drug testing, polygraph scheduling, registration appointments, and home visits.",
                whatToDo:
                  "Build your supervision folder, make a calendar, ask how to contact your officer after hours, and clarify which changes require advance approval.",
              },
              {
                stage: "Routine supervision",
                icon: "📆",
                whatChanges:
                  "Risk often comes from ordinary life changes: work schedule, address, phone, internet, family contact, transportation, money, treatment fees, or missed messages.",
                whatToDo:
                  "Keep reporting, update changes early, save proof, attend treatment, respond calmly, and do not let small confusion become silence.",
              },
              {
                stage: "Before a major change",
                icon: "🚦",
                whatChanges:
                  "Travel, moving, new work, new household members, device changes, online accounts, dating, school events, and contact with minors can trigger several rulebooks.",
                whatToDo:
                  "Ask before acting. Confirm supervision approval, registry reporting, treatment rules, court orders, and any local restrictions.",
              },
              {
                stage: "After a warning or alleged violation",
                icon: "⚠️",
                whatChanges:
                  "Statements, texts, deleted content, missed appointments, treatment discharge, new police contact, or angry arguments may be used later.",
                whatToDo:
                  "Stay reachable, preserve records, write a factual timeline, avoid arguing, and contact counsel before making detailed admissions or signing anything you do not understand.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="📝" title="Small records matter">
            <p>
              A dated note made the same day is often more useful than a vague
              memory weeks later. Write down what happened while it is fresh:
              who said what, what you asked, what answer you received, and what
              you did next.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="high-risk"
          number="3"
          title="High-risk areas to verify before acting"
          subtitle="These are the places where guessing can create supervision, treatment, registry, or court problems."
        />

        <GuideSectionCard>
          <DoDontJudgment
            dos={[
              <span>
                Read the exact written condition before relying on memory or
                someone else’s experience.
              </span>,
              <span>
                Ask for permission before travel, moving, changing jobs, changing
                devices, adding online accounts, or changing household members.
              </span>,
              <span>
                Report problems early: transportation failures, illness, job
                changes, payment issues, missed calls, police contact, or
                treatment conflicts.
              </span>,
            ]}
            donts={[
              <span>
                Do not assume registry reporting is handled just because your
                officer knows about the change.
              </span>,
              <span>
                Do not delete messages, apps, accounts, browser history, or files
                after a question, search, warning, or investigation begins.
              </span>,
              <span>
                Do not contact protected people, alleged victims, witnesses,
                children, or restricted family members unless the written rules
                and required approvals clearly allow it.
              </span>,
            ]}
            judgment={[
              <span>
                If a rule feels unreasonable, confusing, impossible, or in
                conflict with another rule, document the conflict and ask counsel
                about modification instead of silently ignoring it.
              </span>,
              <span>
                If an officer gives verbal permission, follow the instruction,
                but make a dated note and ask whether you can confirm it by text,
                email, portal message, or written travel pass.
              </span>,
            ]}
          />

          <SoftDivider label="Common verification topics" />

          <OverviewCards
            columns={3}
            cards={[
              {
                title: "Travel",
                icon: "🧳",
                tone: "warning",
                description:
                  "Leaving a district, county, state, or approved area may require officer, court, parole, treatment, and registry steps.",
              },
              {
                title: "Housing",
                icon: "🏠",
                tone: "legal",
                description:
                  "An address may need approval from supervision and separate registration with the registry office. Local restrictions can also matter.",
              },
              {
                title: "Work",
                icon: "🛠️",
                tone: "info",
                description:
                  "Job duties, location, schedule, minors, internet use, travel, licensing, and disclosure rules may all affect approval.",
              },
              {
                title: "Devices and internet",
                icon: "💻",
                tone: "privacy",
                description:
                  "Phones, tablets, smart TVs, gaming systems, social media, cloud accounts, work devices, and monitoring software can create risk.",
              },
              {
                title: "Contact rules",
                icon: "🚧",
                tone: "urgent",
                description:
                  "No-contact orders, minor-contact rules, family court orders, treatment safety plans, and supervision conditions can overlap.",
              },
              {
                title: "Treatment",
                icon: "🧠",
                tone: "research",
                description:
                  "Treatment attendance, assignments, payment, group behavior, polygraphs, safety plans, and discharge rules can affect supervision.",
              },
            ]}
          />

          <VerifyBeforeActing
            whoToAsk={
              <span>
                Start with your supervising officer for supervision questions,
                the registry office for registration questions, treatment staff
                for program rules, and counsel for legal-risk questions.
              </span>
            }
            whatToAsk={
              <span>
                “I am trying to avoid a violation. Before I do this, do I need
                approval, notice, a form, a travel pass, a registry update, or
                treatment permission?”
              </span>
            }
            whatToSave={
              <span>
                Save written approvals, screenshots, mailed forms, certified
                mail receipts, portal confirmations, travel passes, appointment
                cards, treatment receipts, and notes from phone calls.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="communication"
          number="4"
          title="Communicating with officers and treatment providers"
          subtitle="Calm, narrow communication is usually safer than arguing, oversharing, disappearing, or guessing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              You do not need perfect words. You need clear words. The safest
              communication is usually short, factual, respectful, and focused
              on the next required step.
            </p>

            <p>
              Do not turn every message into a legal argument. Do not confess to
              things you do not understand. Do not threaten, insult, or debate in
              writing. Ask the practical question, document the answer, and get
              legal advice when the issue could become a violation.
            </p>
          </GuideProse>

          <ScriptBox
            title="Ask your officer for clarification"
            tone="neutral"
            context="Use this when you are unsure what a condition requires."
            script={`Hello [Officer Name], I am trying to make sure I follow my conditions correctly.\n\nMy question is: [short question].\n\nWhich condition or instruction controls this, and do I need written approval before I act?\n\nThank you. I am saving this with my supervision records.`}
          />

          <ScriptBox
            title="Ask for written confirmation after verbal permission"
            tone="legal"
            context="Use this after a phone call or office conversation where you received an instruction or approval."
            script={`Hello [Officer Name], thank you for speaking with me today.\n\nMy notes say you told me: [short summary of instruction or approval].\n\nI plan to follow that instruction unless I hear otherwise. Could you please confirm whether my notes are accurate?\n\nThank you.`}
          />

          <ScriptBox
            title="Report a problem before it becomes silence"
            tone="warning"
            context="Use this when transportation, illness, work, money, or an emergency affects an appointment or requirement."
            script={`Hello [Officer/Treatment Provider], I need to report a problem right away.\n\n[Briefly describe the problem: transportation failed, illness, work schedule, family emergency, payment issue, etc.]\n\nI am not trying to miss or avoid the requirement. What is the next step you want me to take, and how should I document it?`}
          />

          <ScriptBox
            title="Ask a registry office a narrow question"
            tone="urgent"
            context="Use this when a move, job, school, vehicle, online identifier, travel, or temporary stay may trigger registry reporting."
            script={`Hello, my name is [Name]. I am trying to understand my registration duties before I act.\n\nThe situation is: [short description].\n\nDo I need to report this in person, by phone, online, or with a form? What is the deadline, and can I get a receipt or written confirmation after I report it?`}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Assume messages may be saved">
            <p>
              Texts, emails, portal messages, voicemails, screenshots, and
              treatment notes may later matter. Write like a judge, officer,
              attorney, or hearing officer could read the message out loud.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="documents"
          number="5"
          title="Build a supervision folder"
          subtitle="Documentation turns confusion into a record. It also helps attorneys, family, officers, and treatment providers understand what happened."
        />

        <GuideSectionCard>
          <DocumentPacket
            title="Documents and proof to save"
            intro={
              <span>
                Keep a paper folder if possible. Use a digital backup only if
                your device and internet rules allow it.
              </span>
            }
            categories={[
              {
                title: "Core supervision papers",
                items: [
                  <span>Judgment, sentencing order, release papers, bond order, or parole certificate.</span>,
                  <span>Standard and special conditions of supervision.</span>,
                  <span>Officer name, phone number, email, office address, after-hours instructions, and reporting method.</span>,
                  <span>Modification orders, violation paperwork, summonses, warrants, hearing notices, and attorney information.</span>,
                ],
              },
              {
                title: "Registry and treatment papers",
                items: [
                  <span>Registry instructions, appointment receipts, address updates, travel notices, and confirmation numbers.</span>,
                  <span>Treatment contract, group rules, safety plan, payment records, assignments, attendance notes, and discharge warnings.</span>,
                  <span>Polygraph appointment notices, instructions, and any written explanation of consequences for missed or incomplete testing.</span>,
                ],
              },
              {
                title: "Everyday proof",
                items: [
                  <span>Appointment cards, bus receipts, gas receipts, paystubs, work schedules, medical notes, prescription records, and proof of job search.</span>,
                  <span>Copies of emails, texts, portal messages, letters, certified mail receipts, screenshots, and written approvals.</span>,
                  <span>A dated call log with who you called, when you called, what number you used, who answered, and what they said.</span>,
                ],
              },
              {
                title: "Searches, warnings, and disputes",
                items: [
                  <span>Search date, time, officers present, areas searched, items taken, receipts, device names, passwords requested, and witnesses.</span>,
                  <span>Warnings, alleged violations, missed appointments, treatment conflicts, failed tests, police contact, or emergency events.</span>,
                  <span>Your own factual timeline written as soon as possible, without guesses, insults, or legal conclusions.</span>,
                ],
              },
            ]}
          />

          <GuideCallout tone="info" icon="✍️" title="Use facts, not arguments">
            <p>
              A good note says: “June 4, 2:15 p.m., called registry office,
              spoke with Ms. R., asked about temporary work in County B, was told
              to appear in person within [deadline].” A weaker note says:
              “They said I was fine.” Details matter.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="searches"
          number="6"
          title="Searches, devices, and home visits"
          subtitle="Search rules are highly condition-specific. Do not rely on generic advice."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some people under supervision have search conditions. Some do not.
              Some search conditions apply to a person, home, vehicle, papers,
              computers, phones, online accounts, or other property. Some
              require reasonable suspicion. Some are broader. The words in your
              actual condition matter.
            </p>

            <p>
              If officers arrive for a visit or search, the safest immediate
              posture is usually to stay calm, avoid physical resistance, avoid
              arguing in the doorway, and document what happened afterward. That
              does not mean every search is lawful or that you give up legal
              arguments. It means you preserve safety first and legal arguments
              through counsel.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>Read your exact search condition before there is a dispute.</span>,
              <span>Keep required devices, apps, accounts, and monitoring software available as instructed.</span>,
              <span>Ask calmly what authority or condition the search is based on if it is safe to ask.</span>,
              <span>Write down what happened immediately afterward and contact counsel if there is a dispute.</span>,
            ]}
            donts={[
              <span>Do not physically block, threaten, grab, delete, destroy, hide, or run.</span>,
              <span>Do not invite unnecessary conflict by arguing about constitutional law in the moment.</span>,
              <span>Do not assume a roommate, spouse, child, or guest understands what your conditions allow.</span>,
            ]}
            judgment={[
              <span>
                If a device belongs to an employer, family member, child, or
                roommate, ask counsel and your officer in advance how to handle
                access, monitoring, and privacy boundaries.
              </span>,
              <span>
                If you are required to disclose passwords or accounts, ask for
                the instruction in writing and keep a list only in a way that
                complies with your monitoring and privacy rules.
              </span>,
            ]}
          />

          <GuideCallout tone="family" icon="👪" title="For households">
            <p>
              Families should not hide devices, create secret accounts, route
              internet access around monitoring, or become the person’s private
              workaround. If a household device, child’s device, work laptop, or
              shared account could create risk, ask for rules in writing before
              using it.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="treatment"
          number="7"
          title="Treatment rules and discharge risk"
          subtitle="Treatment may be supportive, stressful, expensive, confusing, or all of those at once. It can also affect supervision."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Sex-offense-specific treatment often has rules beyond ordinary
              counseling: attendance, assignments, group behavior, payment,
              safety plans, contact rules, disclosure exercises, polygraphs,
              device restrictions, and provider communication with supervision.
            </p>

            <p>
              Treatment rules are not automatically criminal laws, but they can
              become supervision problems if your conditions require treatment,
              require truthful participation, require payment efforts, or require
              compliance with provider rules. Discharge, suspension, refusal to
              participate, or missed treatment can carry serious consequences.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Before changing anything about treatment"
            whoToAsk={
              <span>
                Ask the treatment provider about program rules and your
                supervising officer or attorney about supervision consequences.
              </span>
            }
            whatToAsk={
              <span>
                “If I miss, pause, change providers, cannot pay, disagree with a
                rule, or am at risk of discharge, what happens next and who is
                notified?”
              </span>
            }
            whatToSave={
              <span>
                Save attendance records, payment receipts, appointment notices,
                assignments submitted, warning letters, discharge notices, and
                written instructions about how to return to compliance.
              </span>
            }
          />

          <ScriptBox
                        title="Ask treatment about a rule"
            tone="research"
            context="Use this when a treatment rule is unclear or appears to conflict with supervision, family needs, work, or registry duties."
            script={`Hello [Provider Name], I want to make sure I understand the treatment rule correctly.\n\nThe rule I am asking about is: [rule].\n\nWhat exactly am I required to do, what is the deadline, and what happens if there is a conflict with work, family, registry reporting, or supervision instructions?`}
          />

          <GuideCallout tone="warning" icon="⚠️" title="Do not wait until discharge">
            <p>
              If money, transportation, work, illness, language access, disability,
              or family responsibilities are interfering with treatment, report
              the problem early and document your effort to solve it. Silence can
              look like refusal even when the real problem is logistics.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="violations"
          number="8"
          title="Warnings, alleged violations, and what to do next"
          subtitle="A warning is a moment to slow down, preserve records, and get advice — not a moment to panic or disappear."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Violations can involve new arrests, missed reporting, failed tests,
              unapproved travel, contact violations, treatment problems,
              possession of prohibited items, registry failures, dishonest
              answers, or other conduct that conflicts with conditions.
            </p>

            <p>
              Some violations are called “technical” because they involve
              breaking supervision rules rather than committing a new crime.
              Technical does not always mean minor. Missed treatment, failure to
              report, or contraband can still lead to serious consequences.
            </p>

            <p>
              If you are accused of a violation, do not rely only on your memory
              or your feelings about fairness. Build a factual timeline, preserve
              records, stay reachable, and talk to counsel before making detailed
              admissions, signing statements, waiving hearings, or agreeing to
              consequences you do not understand.
            </p>
          </GuideProse>

          <CommonMistakes
            title="Common violation traps"
            mistakes={[
              {
                mistake: "Waiting because you are embarrassed or afraid.",
                whyItMatters:
                  "Late reporting can turn a fixable problem into a larger compliance issue.",
                betterMove:
                  "Report the problem early, keep the message short, and ask what step will bring you back into compliance.",
              },
              {
                mistake: "Assuming verbal permission is enough forever.",
                whyItMatters:
                  "People remember conversations differently, and officers can change.",
                betterMove:
                  "Make a dated note and ask for written confirmation when the issue matters.",
              },
              {
                mistake: "Deleting messages, apps, files, accounts, or browser history.",
                whyItMatters:
                  "Deletion can be treated as suspicious or as a separate problem, especially with device or monitoring conditions.",
                betterMove:
                  "Stop, preserve what exists, and ask counsel before changing anything.",
              },
              {
                mistake: "Using another person’s supervision rules as your guide.",
                whyItMatters:
                  "Conditions can differ by case, court, officer, risk assessment, treatment provider, state, and registry agency.",
                betterMove:
                  "Read your own conditions and verify your own rule with the authority that controls it.",
              },
              {
                mistake: "Arguing in the moment instead of documenting.",
                whyItMatters:
                  "Anger can create new allegations and distract from the real issue.",
                betterMove:
                  "Stay calm, comply with immediate safety instructions, write down what happened, and raise disputes through counsel or the proper process.",
              },
              {
                mistake: "Treating registry reporting as part of probation only.",
                whyItMatters:
                  "Registry duties are usually separate and may be administered by a different law-enforcement agency.",
                betterMove:
                  "Ask the registry office directly about deadlines, forms, in-person reporting, and receipts.",
              },
            ]}
          />

          <GuideCallout tone="urgent" icon="🚨" title="Get legal help quickly when risk is serious">
            <p>
              Contact counsel or legal aid as soon as possible if there is a new
              arrest, alleged violation, warrant, summons, search dispute,
              treatment discharge, failed polygraph, police contact, registry
              failure, or pressure to sign something you do not understand.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="supporters"
          number="9"
          title="Family and supporter guidance"
          subtitle="Supporters can help a lot, but they should not become the rule interpreter, secret workaround, or messenger for everything."
        />

        <GuideSectionCard>
          <RoleGuidanceGrid
            title="How different people can help"
            roles={[
              {
                role: "Person under supervision",
                icon: "🧍",
                guidance:
                  "Keep the folder, ask narrow questions, stay reachable, report changes early, and do not let shame turn into silence.",
              },
              {
                role: "Spouse, partner, or close family",
                icon: "🏡",
                guidance:
                  "Help with calendars, transportation, copies, receipts, and calm reminders. Do not hide devices, route around monitoring, or speak for the person without permission.",
              },
              {
                role: "Parent or adult child",
                icon: "👪",
                guidance:
                  "Support stability without guessing about contact rules. If minors, school events, family gatherings, or caregiving are involved, verify first.",
              },
              {
                role: "Reentry helper or advocate",
                icon: "🤝",
                guidance:
                  "Help the person prepare questions, organize documents, find legal aid, and identify conflicts between housing, work, treatment, registry, and supervision rules.",
              },
              {
                role: "Attorney or legal worker",
                icon: "⚖️",
                guidance:
                  "Clarify which authority controls, whether modification is possible, what the violation process looks like, and what the person should avoid saying or signing.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="💬" title="A safer supporter sentence">
            <p>
              “I can help you organize the papers and remember deadlines, but I
              cannot guess what your officer, treatment provider, court, or
              registry office requires. Let’s ask the right office and save the
              answer.”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="offline"
          number="10"
          title="Offline and limited-access options"
          subtitle="Many people under supervision have limited internet, no printer, monitored devices, transportation barriers, or unstable housing."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="If internet access, printing, or transportation is limited"
            icon="📞"
            items={[
              <span>
                Ask officers, treatment providers, and registry offices for paper
                forms, mailed instructions, appointment cards, and written
                receipts.
              </span>,
              <span>
                Keep a small notebook with dates, times, names, phone numbers,
                instructions, attempted calls, voicemails, and confirmation
                numbers.
              </span>,
              <span>
                Use a trusted helper to print public forms only if your
                conditions allow it and the helper is not helping you hide,
                bypass, or access prohibited content.
              </span>,
              <span>
                If you cannot submit an online report, ask whether mail, office
                drop-off, phone reporting, or another approved method is allowed.
              </span>,
              <span>
                If transportation fails, document the failure: bus cancellation,
                ride no-show, repair receipt, medical issue, work conflict, or
                weather emergency.
              </span>,
              <span>
                Store copies in more than one safe place if possible: paper
                folder, trusted person, attorney, or approved digital storage.
              </span>,
            ]}
            note={
              <span>
                Do not use a public computer, library computer, or helper’s
                device for anything your conditions forbid. Access limits still
                apply when the device belongs to someone else.
              </span>
            }
          />

          <GuideCallout tone="reentry" icon="🧭" title="Phone-only is still workable">
            <p>
              A phone-only system can still produce records. Use voicemail logs,
              call screenshots if allowed, mailed letters, certified mail,
              appointment cards, paper receipts, and handwritten notes. The goal
              is not perfect technology. The goal is proof of effort and clear
              communication.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="11"
          title="Resources and next steps"
          subtitle="Use official sources as starting points, then verify the rule that applies to your case and location."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official resources and help"
            description={
              <span>
                These links are starting points. They do not replace your court
                order, parole certificate, officer instructions, treatment
                contract, registry office, or legal advice.
              </span>
            }
            resources={resourceLinks}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Reentry Checklist",
                description:
                  "Helps organize housing, identification, benefits, health care, employment, supervision, and family logistics after release.",
                to: "/resources/reentry-checklist",
              },
              {
                title: "Interstate Moving Guide",
                description:
                  "Useful before moving or staying across state lines, especially when supervision approval and registry reporting may both apply.",
                to: "/resources/interstate-moving-guide",
              },
              {
                title: "International Travel Guide",
                description:
                  "Use before any international travel discussion, especially where registry notification and supervision approval may overlap.",
                to: "/resources/international-travel-guide",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Helps evaluate addresses, document answers, and communicate with landlords while managing registry and supervision risk.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Your Rights at Every Stage",
                description:
                  "Use when a supervision issue becomes a legal dispute, search issue, new investigation, or violation allegation.",
                to: "/resources/know-your-rights",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            title="Sources & verification"
            note={
              <span>
                Source links were live-checked on {lastChecked}. Supervision,
                registry, treatment, and court rules can change by jurisdiction
                and by case, so verify before relying on any general guide.
              </span>
            }
            sources={sourceLinks}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}