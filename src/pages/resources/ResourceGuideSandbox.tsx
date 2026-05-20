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
  TimelineGuidanceGrid,
  DoDontJudgment,
  DualDepthSection,
} from "../../components/solar";

const sourceLinks = {
  stateRegistryHub: "/resources/state-registry",
  icaosStartTransfer:
    "https://interstatecompact.org/resources/transferring-your-supervision/starting-the-transfer-process",
  icaosCourtOfficials:
    "https://interstatecompact.org/quick-reference-guides/court-officials-guide",
  icaosSexOffenderTransfer:
    "https://interstatecompact.org/bench-book/ch3/3-3-transfer-of-supervision-of-sex-offenders",
  smartCurrentLaw: "https://smart.ojp.gov/sorna/current-law",
  ecfrHudScreening:
    "https://www.ecfr.gov/current/title-24/subtitle-A/part-5/subpart-J/section-5.905",
  hudNotice: "https://www.hud.gov/sites/documents/12-28pihn-atch.pdf",
  twoOneOneHousing: "https://www.211.org/get-help/housing-expenses",
  narsol: "https://narsol.org/",
  acsol: "https://all4consolaws.org/",
  womenAgainstRegistry: "https://womenagainstregistry.org/",
} as const;

const externalLinkClass =
  "font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-slate-700 hover:decoration-slate-700";

const sourceInventory = [
  {
    label: "SOLAR State Registry Hub",
    href: sourceLinks.stateRegistryHub,
    description:
      "Internal SOLAR state-by-state registry hub for comparing registration rules and preparing better questions before contacting agencies.",
  },
  {
    label: "ICAOS: Starting the Transfer Process",
    href: sourceLinks.icaosStartTransfer,
    description:
      "Official Interstate Compact guidance explaining transfer supervision basics for eligible people under state supervision.",
  },
  {
    label: "ICAOS Court Officials’ Guide",
    href: sourceLinks.icaosCourtOfficials,
    description:
      "Official ICAOS quick-reference guide explaining why eligible supervised people should use the Compact process before relocating.",
  },
  {
    label: "ICAOS Bench Book: Transfer of Supervision of Sex Offenders",
    href: sourceLinks.icaosSexOffenderTransfer,
    description:
      "Official ICAOS bench book section addressing additional transfer considerations for people required to register.",
  },
  {
    label: "SMART Office: Current Federal SORNA Law",
    href: sourceLinks.smartCurrentLaw,
    description:
      "Official SMART Office page for federal sex-offender registration and notification law.",
  },
  {
    label: "24 CFR § 5.905",
    href: sourceLinks.ecfrHudScreening,
    description:
      "Federal regulation requiring public housing agencies to perform lifetime sex-offender registration screening.",
  },
  {
    label: "HUD Notice PIH 2012-28",
    href: sourceLinks.hudNotice,
    description:
      "HUD guidance discussing federally assisted housing screening and related admission/termination issues.",
  },
  {
    label: "211 Housing and Expenses",
    href: sourceLinks.twoOneOneHousing,
    description:
      "National 211 resource page for local housing, utility, emergency, and community-support referrals.",
  },
  {
    label: "NARSOL",
    href: sourceLinks.narsol,
    description:
      "National advocacy and resource organization for people and families affected by registration laws.",
  },
  {
    label: "ACSOL",
    href: sourceLinks.acsol,
    description:
      "Advocacy organization with legal updates, especially strong for California and national registry-law developments.",
  },
  {
    label: "Women Against Registry",
    href: sourceLinks.womenAgainstRegistry,
    description:
      "Family- and community-focused advocacy organization supporting people affected by registry laws.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Moving While on the Registry | The SOLAR Project"
        description="A plain-language interstate moving guide for people on registries, families, and supporters trying to plan safely across state lines."
        keywords="interstate moving registry, sex offense registry move, ICAOS transfer, federal supervision transfer, registry deadlines, SOLAR Project"
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
            Moving While on the Registry
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical roadmap for planning an interstate move while protecting
            supervision status, registration compliance, housing stability, and
            proof of your good-faith efforts.
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
            Interstate moving is not just a normal address change. For people on
            registries, a move can involve supervision permission, registration
            notice, new-state registration deadlines, local housing rules, ID or
            vehicle updates, employment or school reporting, and family planning.
          </p>

          <p>
            You do not have to understand every law at once. The safer approach
            is to separate the questions, ask the right office the right
            question, and save proof of what you were told.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Before you move, answer these three questions"
          subtitle="This guide is built around the three variables that usually decide what you need to do."
          icon="⚡"
          urgentActions={[
            <span>
              Are you on <strong>federal supervision</strong>,{" "}
              <strong>state supervision</strong>, or <strong>no supervision</strong>?
            </span>,
            <span>
              What does the state you are leaving require before you go, and
              what does the state you are entering require when you arrive?
            </span>,
            <span>
              Is the exact address safe under supervision conditions, state law,
              local rules, landlord rules, and any housing-program rules?
            </span>,
          ]}
          nextActions={[
            <span>
              Use SOLAR&apos;s{" "}
              <Link to={sourceLinks.stateRegistryHub} className={externalLinkClass}>
                state registry hub
              </Link>{" "}
              to compare the leaving state and destination state before calling
              agencies.
            </span>,
            <span>
              Call or write the offices with authority before signing a lease,
              making a deposit, leaving the state, or relying on a deadline you
              found online.
            </span>,
          ]}
          reminder={
            <span>
              Guessing is the danger. Asking narrow questions and saving proof
              is the safety plan.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Variable 1",
              title: "Federal supervision",
              icon: "🏛️",
              tone: "legal",
              description:
                "For people on federal probation, supervised release, or another federal supervision term. Start with U.S. Probation or your federal supervision officer.",
            },
            {
              eyebrow: "Variable 2",
              title: "State supervision / ICAOS",
              icon: "🧾",
              tone: "warning",
              description:
                "For people on state probation, parole, or qualifying state supervision. Ask whether Interstate Compact transfer rules apply before relocating.",
            },
            {
              eyebrow: "Variable 3",
              title: "Registry rules by state",
              icon: "📍",
              tone: "info",
              description:
                "For anyone required to register. Compare both states, then confirm notice deadlines, arrival deadlines, documents, and local rules with the registering agencies.",
            },
          ]}
        />

        <GuideCallout tone="legal" icon="⚖️" title="This is a planning guide, not legal advice">
          <p>
            Registry and supervision rules can change quickly, and local
            practice can matter. Use this guide to organize the questions you
            need to verify, not as a substitute for legal advice or written
            instructions from the office with authority.
          </p>
        </GuideCallout>

<GuideSectionHeader
          id="three-variables"
          number="1"
          title="The three variables people often mix up"
          subtitle="Federal supervision, state supervision transfer, and registry duties are related to a move, but they are not the same thing."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Do not start by asking, “Can a registrant move?” That question is
              too broad. Start by asking which moving rule applies to you, then
              separately verify the registry rules in both states.
            </p>
          </GuideProse>

          <DualDepthSection
            simpleTitle="Plain-language version"
            deepTitle="The practical distinction"
            simple={
              <GuideProse>
                <p>
                  If you are on <strong>federal supervision</strong>, you need
                  to know the federal relocation or district-transfer rule{" "}
                  <strong>plus</strong> the registry variables in both states.
                </p>

                <p>
                  If you are on <strong>state probation or parole</strong>, you
                  need to know whether the{" "}
                  <a
                    href={sourceLinks.icaosStartTransfer}
                    className={externalLinkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Interstate Compact / ICAOS transfer process
                  </a>{" "}
                  applies <strong>plus</strong> the registry variables in both
                  states.
                </p>

                <p>
                  If you are <strong>not on supervision</strong>, you usually
                  skip the supervision-transfer question and focus on registry
                  notice, registration deadlines, housing rules, travel/stay
                  triggers, and proof of compliance.
                </p>
              </GuideProse>
            }
            deep={
              <GuideProse>
                <p>
                  Federal supervision usually runs through the federal court and
                  U.S. Probation system. State supervision transfer usually runs
                  through ICAOS when the person is eligible and the Compact
                  rules apply. Registration is a separate duty created by state
                  law and federal baseline frameworks, including federal SORNA
                  standards described by the{" "}
                  <a
                    href={sourceLinks.smartCurrentLaw}
                    className={externalLinkClass}
                    target="_blank"
                    rel="noreferrer"
                  >
                    SMART Office current-law page
                  </a>
                  .
                </p>

                <p>
                  The mistake is treating these as one blended approval. A
                  person may be allowed to move for supervision purposes and
                  still have strict registration deadlines. A person may be off
                  supervision and still have registration, housing, employment,
                  school, vehicle, or ID reporting duties in the new state.
                </p>
              </GuideProse>
            }
          />

          <GuideCallout tone="reminder" icon="🧩" title="The safest formula">
            <p>
              <strong>Federal supervision + registry variables</strong>, or{" "}
              <strong>ICAOS/state supervision + registry variables</strong>, or{" "}
              <strong>registry variables only</strong>. Most people are not
              dealing with both federal supervision transfer and ICAOS.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="supervision"
          number="2"
          title="If you are on supervision, do not move first and explain later"
          subtitle="Your first step depends on whether your supervision is federal or state."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              If you are under any active supervision term, ask your supervising
              officer what moving process applies before you sign a lease, pay a
              deposit, pack, leave the state, or start staying somewhere new.
            </p>

            <p>
              For state probation or parole, the{" "}
              <a
                href={sourceLinks.icaosCourtOfficials}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                Interstate Compact for Adult Offender Supervision
              </a>{" "}
              may control whether supervision can transfer to another state.
              ICAOS materials also have a specific section on{" "}
              <a
                href={sourceLinks.icaosSexOffenderTransfer}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                transfer of supervision for people required to register
              </a>
              .
            </p>

            <p>
              For federal probation or supervised release, start with your
              federal supervision officer or U.S. Probation Office. Ask what
              permission, receiving-district review, travel authorization, court
              approval, or reporting instruction is required before you relocate.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Ask, “Am I under federal supervision, state supervision, or no
                supervision right now?”
              </span>,
              <span>
                Ask the supervising officer which transfer or relocation process
                applies before you make housing commitments.
              </span>,
              <span>
                Ask for written instructions, forms, appointment dates, and the
                name of the person or office handling the move.
              </span>,
            ]}
            donts={[
              <span>
                Do not assume a job offer, family support, or available housing
                means the move is approved.
              </span>,
              <span>
                Do not leave first and rely on a phone call afterward to fix it.
              </span>,
              <span>
                Do not treat registry registration in the new state as the same
                thing as supervision transfer approval.
              </span>,
            ]}
            judgment={[
              <span>
                If your situation involves more than one case, more than one
                sentence, detainers, pending charges, or both federal and state
                agencies, ask for legal help before acting.
              </span>,
            ]}
          />

          <ScriptBox
            title="Script: asking supervision what process applies"
            tone="legal"
            context="Use this before you make a housing commitment or leave the state."
            script={`Hello, my name is [Name]. I am planning a possible move from [current state] to [destination state]. I need to confirm the correct supervision process before I act.

Am I under federal supervision, state supervision, or another type of supervision for this move?

What permission, transfer process, travel approval, address review, or written instruction do I need before I sign a lease, pay a deposit, or leave the state?

Can you tell me who handles that, what forms or deadlines apply, and how I can save written confirmation of the instructions?`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="registry-rules"
          number="3"
          title="Registry rules do not travel neatly from state to state"
          subtitle="A move can change deadlines, documents, reporting frequency, public listing, housing limits, and what counts as a reportable presence."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Registry duties are state-specific. The state you are leaving may
              require notice before departure. The state you are entering may
              require registration within a short number of days after arrival,
              or may treat work, school, temporary stays, frequent visits, or
              part-time residence as reportable events.
            </p>

            <p>
              Use SOLAR&apos;s{" "}
              <Link to={sourceLinks.stateRegistryHub} className={externalLinkClass}>
                state registry hub
              </Link>{" "}
              to compare both states before calling agencies. State pages help
              you prepare better questions, but the safer move is still to
              confirm directly with the registering agency before relying on an
              answer.
            </p>

            <p>
              Federal SORNA provides baseline registration and notification
              standards, but states write and enforce many of the rules people
              encounter in daily life. The{" "}
              <a
                href={sourceLinks.smartCurrentLaw}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                SMART Office current-law page
              </a>{" "}
              is useful for federal background, but it does not replace the
              current law and agency practice in the state where you are moving.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify the registry questions before you leave"
            whoToAsk={
              <span>
                The registering agency in the state you are leaving and the
                registering agency in the state you are entering. If you are on
                supervision, also ask your supervising officer.
              </span>
            }
            whatToAsk={
              <span>
                Ask what notice is required before departure, what triggers
                registration after arrival, how soon you must register, whether
                an appointment is required, what documents to bring, and whether
                work, school, vehicles, internet identifiers, temporary stays, or
                travel need separate reporting.
              </span>
            }
            whatToSave={
              <span>
                Save names, dates, phone numbers, emails, confirmation numbers,
                appointment slips, receipts, screenshots, forms, and written
                instructions. If someone gives an answer by phone, write down the
                exact date, time, office, and person you spoke with.
              </span>
            }
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="timeline"
          number="4"
          title="A safer timeline for planning the move"
          subtitle="The goal is not perfection. The goal is to avoid acting before the right question has been answered."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="Move planning stages"
            stages={[
              {
                stage: "Before choosing a destination",
                icon: "🗺️",
                whatChanges:
                  "Different states can classify the same person differently, require different reporting, and impose different practical limits.",
                whatToDo:
                  "Compare both states through the state registry hub, identify supervision status, and list the agencies you need to call.",
              },
              {
                stage: "Before signing a lease or paying a deposit",
                icon: "🏠",
                whatChanges:
                  "An address can be legal under one rule and still create a problem under supervision, local restrictions, landlord policy, HOA rules, or housing-program rules.",
                whatToDo:
                  "Check the exact address before committing money. Ask whether the address is allowed and save the answer if possible.",
              },
              {
                stage: "Before leaving the current state",
                icon: "🚗",
                whatChanges:
                  "The current state may require departure notice, travel permission, forms, or a final in-person update.",
                whatToDo:
                  "Confirm what must happen before departure. If supervised, do not leave until the supervising authority says you may.",
              },
              {
                stage: "First days after arrival",
                icon: "📍",
                whatChanges:
                  "Arrival deadlines may be short and may run from presence, residence, employment, school, or another trigger.",
                whatToDo:
                  "Register or check in as instructed. Bring documents and ask for proof of completion or proof that you appeared.",
              },
              {
                stage: "First month after arrival",
                icon: "🗂️",
                whatChanges:
                  "Additional updates may involve driver’s license or ID, vehicle information, employment, school, internet identifiers, local police visits, or supervision appointments.",
                whatToDo:
                  "Keep a contact log and compliance folder. Re-check anything you were told to update after getting housing, work, school, or ID changes.",
              },
            ]}
          />

          <GuideChecklist
            id="interstate-moving-checklist"
            title="Interstate move checklist"
            columns={1}
            items={[
              {
                id: "status",
                label: "Write down whether you are on federal supervision, state supervision, or no supervision.",
              },
              {
                id: "state-hub",
                label: (
                  <span>
                    Review the leaving state and destination state in the{" "}
                    <Link
                      to={sourceLinks.stateRegistryHub}
                      className={externalLinkClass}
                    >
                      SOLAR state registry hub
                    </Link>
                    .
                  </span>
                ),
              },
              {
                id: "current-state",
                label:
                  "Ask the current registering agency what notice is required before leaving.",
              },
              {
                id: "destination-state",
                label:
                  "Ask the destination registering agency what triggers registration and how soon you must appear.",
              },
              {
                id: "supervision",
                label:
                  "If supervised, ask the supervising officer what written permission, transfer, travel, or address-review process applies.",
              },
              {
                id: "address",
                label:
                  "Check the exact address before signing a lease or paying a deposit.",
              },
              {
                id: "documents",
                label:
                  "Prepare a moving packet with ID, registration paperwork, supervision documents, address proof, and contact notes.",
              },
              {
                id: "arrival",
                label:
                  "After arrival, appear as instructed and ask for proof that you appeared or completed the registration step.",
              },
              {
                id: "follow-up",
                label:
                  "Re-check follow-up duties for ID, vehicle, employment, school, internet identifiers, or supervision appointments.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="housing"
          number="5"
          title="Check the exact address before you commit"
          subtitle="Housing is not only about whether a landlord says yes."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Housing rules can come from several places: supervision
              conditions, state registry law, city or county restrictions,
              landlord screening, HOA or condo rules, shelter or transitional
              housing policy, and federally assisted housing rules.
            </p>

            <p>
              For federally assisted housing, be careful with broad statements.
              Federal rules require public housing agencies to perform lifetime
              registration screening, as reflected in{" "}
              <a
                href={sourceLinks.ecfrHudScreening}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                24 CFR § 5.905
              </a>
              . HUD guidance has also discussed screening and admission issues
              in{" "}
              <a
                href={sourceLinks.hudNotice}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                PIH Notice 2012-28
              </a>
              . If subsidized housing is involved, ask the housing authority or
              a legal aid office before relying on a general internet summary.
            </p>

            <p>
              If you need local housing, food, utility, or emergency support,
              the{" "}
              <a
                href={sourceLinks.twoOneOneHousing}
                className={externalLinkClass}
                target="_blank"
                rel="noreferrer"
              >
                211 housing and expenses finder
              </a>{" "}
              can help locate community resources. A referral is not the same as
              legal eligibility, so still verify any registry or supervision
              restriction before moving in.
            </p>
          </GuideProse>

          <GuideCallout tone="warning" icon="🏠" title="A lease is not the final answer">
            <p>
              A landlord accepting an application does not automatically mean
              the address is safe under supervision, registry law, local
              residency rules, school-zone rules, public housing rules, or a
              treatment-provider condition. Verify the address with the office
              that actually has authority over the restriction.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Script: checking an address before signing"
            tone="warning"
            context="Use this with a registering agency, supervision office, housing authority, or legal aid office."
            script={`Hello, my name is [Name]. I am planning a possible move to [full address]. Before I sign anything or pay a deposit, I need to know whether this address creates any registration, supervision, local residency, or housing-program problem.

Can you tell me whether your office can confirm that, or who I should ask?

If there is a rule I need to check, can you tell me the exact rule, office, form, or deadline? I am taking notes and would like to save the answer if possible.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="moving-packet"
          number="6"
          title="Build a moving packet"
          subtitle="When the system is arbitrary, documentation is protection."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A moving packet helps you avoid scrambling when someone asks for a
              document, proof, date, or contact history. Keep paper copies if
              possible. If you use a phone, save offline copies in case service,
              battery, or internet access fails.
            </p>
          </GuideProse>

          <DocumentPacket
            title="Documents to gather before the move"
            intro={
              <span>
                Do not carry sensitive documents around unnecessarily, but keep
                a secure folder that you or a trusted helper can access quickly.
              </span>
            }
            categories={[
              {
                title: "Identity and address",
                items: [
                  "Photo ID, driver’s license, or state ID.",
                  "Social Security card or number, if required by the agency.",
                  "Lease, letter from host, utility bill, shelter letter, or other address proof.",
                  "Vehicle registration and license plate information, if reportable.",
                ],
              },
              {
                title: "Case and supervision",
                items: [
                  "Judgment, sentence, release paperwork, or court orders.",
                  "Supervision conditions, travel permits, transfer instructions, or written approvals.",
                  "Treatment or program conditions that affect residence, travel, work, or family contact.",
                ],
              },
              {
                title: "Registration records",
                items: [
                  "Current registration paperwork.",
                  "Departure notice forms or proof of notice.",
                  "Destination-state appointment confirmation or instructions.",
                  "Receipts, proof of appearance, emails, letters, and confirmation numbers.",
                ],
              },
              {
                title: "Contact log",
                items: [
                  "Names, dates, phone numbers, departments, and instructions from every agency call.",
                  "Screenshots or printed pages of official instructions you relied on.",
                  "Notes about who told you what, especially if instructions changed.",
                ],
              },
            ]}
          />

          <OfflineOptions
            title="If internet access, printing, or private phone use is limited"
            icon="📞"
            items={[
              "Ask agencies to mail forms or written instructions when possible.",
              "Use a public library, legal aid office, reentry program, clerk’s office, or trusted helper for printing.",
              "Keep a paper contact log with names, dates, phone numbers, and exact instructions.",
              "Ask a trusted person to check the state registry hub and official agency pages, then read the information to you by phone.",
              "If incarcerated or in a facility, ask case management, reentry staff, or family to help gather address and registration questions before release.",
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="mistakes"
          number="7"
          title="Common mistakes that create avoidable risk"
          subtitle="Most problems come from assumptions, rushed housing decisions, missed deadlines, or lack of proof."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Assuming the old state’s rules follow you.",
                whyItMatters:
                  "A new state may classify, schedule, publish, restrict, or document registration differently.",
                betterMove:
                  "Compare both states, then confirm the destination state’s actual requirements with the registering agency.",
              },
              {
                mistake: "Confusing supervision permission with registration compliance.",
                whyItMatters:
                  "Being allowed to relocate for supervision purposes does not automatically complete registration duties.",
                betterMove:
                  "Ask separate questions: supervision permission, current-state departure notice, destination-state registration, and address safety.",
              },
              {
                mistake: "Signing a lease before checking the exact address.",
                whyItMatters:
                  "The address may create a problem under supervision, local restrictions, public housing rules, or program policy.",
                betterMove:
                  "Check the address before paying money and save the answer if possible.",
              },
              {
                mistake: "Relying on a general deadline found online.",
                whyItMatters:
                  "Deadlines may depend on residence, temporary stay, work, school, travel, or local practice.",
                betterMove:
                  "Ask the destination agency what triggers registration and when the clock starts.",
              },
              {
                mistake: "Failing to save proof.",
                whyItMatters:
                  "If instructions change or someone says you missed a step, your notes and receipts may matter.",
                betterMove:
                  "Keep a contact log, save written instructions, and ask for proof of appearance or completion.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="✅" title="Good-faith planning matters">
            <p>
              Careful planning cannot remove every risk in a confusing system,
              but it can help you avoid preventable mistakes. The goal is to be
              able to show what you asked, who answered, what you were told, and
              what you did next.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="family"
          number="8"
          title="Family and community planning"
          subtitle="A move affects more than paperwork. It can affect children, partners, roommates, neighbors, school routines, transportation, treatment, and support."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Families often help with housing, transportation, forms, calls,
              printing, and emotional support. That help can be valuable, but it
              should not put anyone at risk of guessing. Give supporters narrow
              tasks: check a state page, print a form, write down a phone
              number, or help build the document packet.
            </p>

            <p>
              If children, schools, custody orders, treatment rules, or family
              contact restrictions are involved, ask specific questions before
              the move. A house may be affordable and supportive but still
              create a supervision, registry, school-zone, or household-contact
              problem.
            </p>
          </GuideProse>

          <ScriptBox
            title="Script: asking a family member for focused help"
            tone="family"
            context="Use this when someone wants to help but the process feels overwhelming."
            script={`I am trying to plan this move carefully so I do not miss a rule. I do not need you to solve the whole thing.

Could you help with one specific task: [check this state page / print this form / write down these phone numbers / help me keep a call log]?

If someone gives you information, please write down the date, the office, the person’s name if available, and the exact instruction. I need proof more than opinions.`}
          />

          <GuideCallout tone="family" icon="🤝" title="Support should reduce chaos">
            <p>
              Supporters do not need to become lawyers. The most helpful role is
              often practical: keep notes, help compare states, print forms,
              make a calm call, organize transportation, or remind the person
              not to act before verification.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="9"
          title="Resources and next steps"
          subtitle="Use these links to compare states, verify official rules, find local support, and keep moving through SOLAR’s guide ecosystem."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Planning and verification links"
            description="Use official sources for legal and agency questions. Use advocacy and support sources for education, community, and practical navigation."
            resources={[
              {
                label: "SOLAR State Registry Hub",
                to: sourceLinks.stateRegistryHub,
                badge: "SOLAR",
                description:
                  "Compare the state you are leaving and the state you are entering before calling agencies.",
              },
              {
                label: "ICAOS transfer process",
                href: sourceLinks.icaosStartTransfer,
                badge: "Official",
                description:
                  "Official Interstate Compact guidance for people under qualifying state supervision.",
              },
              {
                label: "SMART Office current federal SORNA law",
                href: sourceLinks.smartCurrentLaw,
                badge: "Official",
                description:
                  "Federal background on registration and notification law. Use state and local sources for move-specific requirements.",
              },
              {
                label: "211 housing and expenses finder",
                href: sourceLinks.twoOneOneHousing,
                badge: "Support",
                description:
                  "Local referrals for housing, utility, food, emergency, and community-support needs.",
              },
              {
                label: "NARSOL",
                href: sourceLinks.narsol,
                badge: "Advocacy",
                description:
                  "National advocacy and education resources for people affected by registry laws.",
              },
              {
                label: "ACSOL",
                href: sourceLinks.acsol,
                badge: "Advocacy",
                description:
                  "Legal updates and advocacy resources, especially useful for California and national registry developments.",
              },
              {
                label: "Women Against Registry",
                href: sourceLinks.womenAgainstRegistry,
                badge: "Family",
                description:
                  "Family- and community-focused advocacy and support for people impacted by registry laws.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "State Registry Hub",
                description:
                  "Start here when comparing registration requirements between the state you are leaving and the state you are entering.",
                to: "/resources/state-registry",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Use alongside this guide if the move is connected to release, supervision, housing, work, or family stabilization.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Helps with housing strategy, landlord screening, documentation, and fallback planning.",
                to: "/resources/housing-search",
              },
              {
                title: "Family Support Guide",
                description:
                  "Helps loved ones provide practical support without increasing confusion, conflict, or risk.",
                to: "/resources/family-support",
              },
            ]}
          />

          <SourceList
            title="Sources & verification"
            note="Links were selected for sandbox drafting. Re-check official pages and any state-specific law before production publication or legal reliance."
            sources={sourceInventory}
          />

          <GuideProse>
            <h3>Source & Link Manifest</h3>

            <p>
              <strong>Official / agency sources:</strong> ICAOS transfer pages
              support state-supervision transfer guidance; SMART Office supports
              federal SORNA background; eCFR and HUD sources support federally
              assisted housing screening discussion.
            </p>

            <p>
              <strong>Internal SOLAR source:</strong> the State Registry Hub is
              used as the central internal planning link for comparing the
              leaving state and destination state before contacting agencies.
            </p>

            <p>
              <strong>Support / advocacy sources:</strong> 211, NARSOL, ACSOL,
              and Women Against Registry are included for navigation, education,
              community support, and family support. They should not be treated
              as substitutes for official legal or agency confirmation.
            </p>

            <p>
              <strong>Production concern:</strong> this guide should remain
              cautious about exact deadlines. State deadlines can be short, but
              the final page should avoid universal “3 days” or “10 days”
              language unless tied to a specific state source.
            </p>
          </GuideProse>
        </GuideSectionCard>
      </main>
    </div>
  );
}