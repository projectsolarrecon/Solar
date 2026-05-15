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
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
  DoDontJudgment,
  DualDepthSection,
} from "../../components/solar";

const sourceLinks = {
  acluPoliceRights: "https://www.aclu.org/know-your-rights/stopped-by-police",
  fdOrg: "https://www.fd.org/",
  bjsRecidivism:
    "https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14",
  rainnChildrenTeens:
    "https://rainn.org/facts-statistics-the-scope-of-the-problem/statistics-children-teens/",
  smartCurrentLaw: "https://smart.ojp.gov/sorna/current-law",
  ecfrRegistration: "https://www.ecfr.gov/current/title-28/chapter-I/part-72",
  niccc: "https://niccc.nationalreentryresourcecenter.org/",
  cfpbCreditFreeze:
    "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/answers/key-terms/#credit-freeze",
  optOutPrescreen: "https://www.optoutprescreen.com/",
  lifeline988: "https://988lifeline.org/",
  findTreatment: "https://findtreatment.gov/",
  saferSociety: "https://safersociety.org/foundation/treatment-referrals/",
  narsol: "https://narsol.org/",
  acsol: "https://all4consolaws.org/",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Family & Allies Guide | The SOLAR Project"
        description="A calm, practical guide for families and loved ones supporting someone through a sex-offense case, incarceration, reentry, registry rules, and long-term stability."
        keywords="family support, sex offense case, reentry, registry, loved one arrested, incarceration support, supervision, SOLAR Project"
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
            The SOLAR Family & Allies Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Supporting a loved one through a sex-offense case, incarceration,
            reentry, registry rules, and the long work of staying steady.
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
            If you are reading this, you probably already see your loved one as
            more than a charge, conviction, prison sentence, or registry listing.
            That does not mean ignoring harm, excusing behavior, or pretending
            the road ahead is simple. It means you are trying to support a whole
            person through a serious situation while protecting yourself, your
            household, and the people around you.
          </p>

          <p>
            You may feel shocked, loyal, angry, embarrassed, afraid, protective,
            numb, or unsure. Those reactions can exist at the same time. This
            guide is not therapy and it is not legal advice. It is a practical
            starting place: what to do first, what to avoid, what to document,
            what to verify, and how to communicate when the pressure is high.
          </p>
        </GuideIntro>

        <PullQuoteBlock>
          Loving someone through this may not be easy. But meaningful
          relationships are rarely simple. Support can be compassionate, honest,
          boundaried, and practical at the same time.
        </PullQuoteBlock>

        <QuickStartPanel
          title="If this just happened"
          subtitle="Use these steps before trying to explain, fix, defend, or debate the situation."
          icon="⚡"
          urgentActions={[
            <span>
              Do not discuss case facts with police, agents, relatives, social
              media, jail phones, texts, or recorded messaging systems. The{" "}
              <a
                href={sourceLinks.acluPoliceRights}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                ACLU’s police-rights guidance
              </a>{" "}
              is a useful starting point for understanding why silence and legal
              counsel matter.
            </span>,
            <span>
              Use simple words: “I am not answering questions. I want a lawyer.”
              Then stop talking. If officers search anyway, stay calm, do not
              interfere, and write down names, agencies, badge numbers, and what
              happened as soon as possible.
            </span>,
            <span>
              If your loved one is already in custody, keep calls focused on
              safety, logistics, money, medications, children, housing, and
              attorney contact. Save case facts for the lawyer.
            </span>,
          ]}
          nextActions={[
            <span>
              Start locating counsel. For federal cases, begin with{" "}
              <a
                href={sourceLinks.fdOrg}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                Federal Defender resources
              </a>
              . For state cases, ask about court-appointed counsel or look for a
              defense attorney with real sex-offense case experience.
            </span>,
            <span>
              Gather release and stability documents: ID, lease or mortgage,
              pay stubs, medical needs, caregiving responsibilities, treatment
              enrollment, and names of people who can provide practical support.
            </span>,
            <span>
              Prepare for possible no-contact orders, device limits, internet
              restrictions, location rules, GPS, curfews, surprise searches, or
              evaluation requirements. Do not guess; verify.
            </span>,
          ]}
          reminder={
            <span>
              You do not have to solve the whole future today. Protect the legal
              case first. Protect the household next. Move one square at a time.
            </span>
          }
        />

        <GuideCallout tone="family" icon="💛" title="You are allowed to care">
          <p>
            Caring about your loved one does not require you to minimize harm,
            ignore victims, violate court orders, or abandon your own needs.
            You are allowed to love someone and still need facts, boundaries,
            support, privacy, and time.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "First priority",
              title: "Protect the case",
              icon: "⚖️",
              tone: "legal",
              description:
                "Avoid recorded case talk, direct contact with protected people, public statements, and guesses about legal rules.",
            },
            {
              eyebrow: "Second priority",
              title: "Protect the household",
              icon: "🏠",
              tone: "privacy",
              description:
                "Stabilize children, housing, money, devices, mail, privacy, transportation, and documentation.",
            },
            {
              eyebrow: "Longer work",
              title: "Build steady support",
              icon: "🧱",
              tone: "family",
              description:
                "Support works best when it is honest, lawful, consistent, boundaried, and connected to treatment and accountability.",
            },
          ]}
        />

        <GuideSectionHeader
          id="grounding"
          number="1"
          title="Facts that may help you stay grounded"
          subtitle="Facts do not erase accountability. They help families resist panic, stigma, and hopelessness."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Public conversation often treats people accused or convicted of
              sexual misconduct as uniquely hopeless or uniquely certain to
              repeat the same kind of harm. The data does not support that.
              National{" "}
              <a
                href={sourceLinks.bjsRecidivism}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                Bureau of Justice Statistics prison-release data
              </a>{" "}
              shows same-category rearrest for sexual misconduct was far lower
              than same-category rearrest for drug, property, or violent offense
              categories.
            </p>

            <p>
              That does not mean risk is zero. It means families should make
              decisions from facts, treatment needs, supervision rules, safety
              planning, boundaries, housing stability, sobriety, internet and
              device rules, child-contact rules, and the person’s actual
              behavior — not from the myth that everyone with this kind of case
              is doomed to reoffend.
            </p>
          </GuideProse>

          <DualDepthSection
            simpleTitle="Plain-language grounding"
            deepTitle="Why this matters"
            simple={
              <p>
                A charge, conviction, or registry listing is serious, but it is
                not a complete description of a person, a family, a relationship,
                or a future.
              </p>
            }
            deep={
              <p>
                “Sex offense” is a broad legal category. Cases differ by facts,
                ages, conduct, risk, treatment needs, plea posture, supervision
                conditions, and state law. Precise language helps families make
                safer decisions than public labels do.
              </p>
            }
          />

          <GuideCallout tone="research" icon="📌" title="Real safety is specific">
            <p>
              Real prevention is not built by imagining one type of monster.{" "}
              <a
                href={sourceLinks.rainnChildrenTeens}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                RAINN’s child and teen statistics
              </a>{" "}
              show why prevention has to pay attention to access, secrecy,
              familiarity, power, and trust — not only strangers or registry
              labels.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="support-with-boundaries"
          number="2"
          title="Support without making things worse"
          subtitle="Care is strongest when it is honest, lawful, and boundaried."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Support does not mean becoming the lawyer, investigator,
              therapist, probation officer, public-relations manager, or rescuer.
              It means helping with the next safe step while refusing to create
              new risk.
            </p>

            <p>
              In practice, that usually means: do not discuss case facts on
              recorded lines; do not contact an alleged victim or protected
              person; do not post about the case; do not hide devices, evidence,
              travel, employment, housing, or rule violations; and do not rely on
              “someone said it was probably fine.”
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              "Use lawyers, court orders, supervision conditions, and written instructions as your source of truth.",
              "Keep notes with names, dates, agencies, phone numbers, and what was said.",
              "Help with logistics: rides, childcare, paperwork, medications, housing searches, treatment appointments, and calendars.",
              "Set boundaries early: what you can do, what you cannot do, and what you will not risk.",
            ]}
            donts={[
              "Do not debate case facts with police, relatives, reporters, neighbors, employers, or online commenters.",
              "Do not contact protected people, witnesses, alleged victims, or their families unless counsel says it is allowed.",
              "Do not ignore small rules about devices, passwords, locations, travel, school events, curfews, or appointments.",
              "Do not promise children, relatives, or your loved one an outcome you cannot control.",
            ]}
            judgment={[
              "You can decide how much contact is healthy for you.",
              "You can support accountability and still reject public cruelty.",
              "You can love someone and still require treatment, honesty, compliance, and changed behavior.",
              "You can step back if the relationship becomes unsafe, manipulative, or impossible to sustain.",
            ]}
          />

          <VerifyBeforeActing
            title="Verify before acting"
            whoToAsk={
              <span>
                The defense attorney, court clerk, supervising officer,
                treatment provider, registry office, school administrator,
                housing provider, or agency with actual authority over the
                question.
              </span>
            }
            whatToAsk={
              <span>
                Ask the narrow question tied to the action you are about to
                take: “Is this address allowed?” “Can this person attend this
                school event?” “Are these devices permitted?” “What travel
                approval is required?”
              </span>
            }
            whatToSave={
              <span>
                Save the rule, date, person’s name, department, written answer,
                confirmation number, email, screenshot, form, or note from the
                call. When possible, ask for the answer in writing.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="roles"
          number="3"
          title="What different supporters can do"
          subtitle="Not every supporter has the same role, capacity, or boundary."
        />

        <GuideSectionCard>
          <RoleGuidanceGrid
            title="Choose a role you can actually sustain"
            roles={[
              {
                role: "Spouse or partner",
                icon: "🤝",
                guidance:
                  "Focus on legal logistics, household stability, money, children, communication boundaries, and your own support system. You do not have to carry every task alone.",
              },
              {
                role: "Parent or adult child",
                icon: "🌱",
                guidance:
                  "Offer steady contact, paperwork help, court transportation, release planning, and emotional steadiness without taking over decisions that belong to counsel or supervision.",
              },
              {
                role: "Sibling or close friend",
                icon: "🧭",
                guidance:
                  "You may be most useful as the practical helper: rides, calendars, meals, mail, storage, job leads, or being the person who answers one specific weekly need.",
              },
              {
                role: "Caregiver for children",
                icon: "🧸",
                guidance:
                  "Keep children’s routines as stable as possible. Use truthful, age-appropriate language. Follow all no-contact, custody, school, and safety rules exactly.",
              },
              {
                role: "Extended family",
                icon: "🏡",
                guidance:
                  "Help without demanding private details. Offer concrete support: childcare, groceries, transportation, letters if counsel requests them, or calm presence at court.",
              },
              {
                role: "Advocate, faith, or community support",
                icon: "🕯️",
                guidance:
                  "Provide nonjudgmental support, practical help, and accountability. Do not pressure the family to disclose more than they safely can.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🧩" title="Support can be specific">
            <p>
              “Let me know if you need anything” is kind, but often too vague.
              Better: “I can drive to court on Tuesdays,” “I can print forms,”
              “I can watch the kids during attorney calls,” or “I can help build
              the reentry binder.”
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="4"
          title="Stage-by-stage family plan"
          subtitle="What helps changes depending on where the case or sentence is."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="The first 90 days of each phase"
            stages={[
              {
                stage: "First 48 hours",
                icon: "🚨",
                whatChanges:
                  "The risk of panic decisions is high. Police contact, searches, custody, bail, media attention, and family shock may happen quickly.",
                whatToDo:
                  "Stop case talk, request counsel, write down what happened, protect children’s routines, gather release documents, and avoid public statements.",
              },
              {
                stage: "Pretrial",
                icon: "⚖️",
                whatChanges:
                  "Court dates, conditions, evaluations, no-contact orders, device rules, and location restrictions may shape daily life.",
                whatToDo:
                  "Create a court calendar, arrange transportation and childcare, separate children’s devices if needed, prepare a court-day folder, and confirm all conditions in writing.",
              },
              {
                stage: "Incarceration",
                icon: "✉️",
                whatChanges:
                  "Communication becomes rule-bound. Calls may be recorded. Mail, visits, money, books, photos, and programming may all have facility-specific rules.",
                whatToDo:
                  "Learn facility rules, send steady letters if safe, avoid case facts, support education or treatment, and begin reentry planning early.",
              },
              {
                stage: "Release planning",
                icon: "🗂️",
                whatChanges:
                  "Housing, IDs, medications, income, transportation, treatment, supervision, and registration questions become urgent before release.",
                whatToDo:
                  "Build the reentry binder, confirm housing before release, identify treatment options, plan transportation, and ask supervision what must happen on day one.",
              },
              {
                stage: "Reentry and registry",
                icon: "🏠",
                whatChanges:
                  "Rules may affect where someone lives, works, travels, studies, goes online, uses devices, and attends family or school events.",
                whatToDo:
                  "Use the SMART Office, federal registration regulations, and local authorities only as starting points. State and local rules still need direct verification.",
              },
              {
                stage: "Long-term stability",
                icon: "🌤️",
                whatChanges:
                  "The work shifts from crisis response to sustainable routines, treatment, employment, relationships, boundaries, privacy, and repair.",
                whatToDo:
                  "Review conditions regularly, keep proof of compliance, build lawful work and housing stability, support treatment, and revisit family boundaries as life changes.",
              },
            ]}
          />

          <GuideProse>
            <p>
              For federal background, the{" "}
              <a
                href={sourceLinks.smartCurrentLaw}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                SMART Office
              </a>{" "}
              and{" "}
              <a
                href={sourceLinks.ecfrRegistration}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                federal registration regulations
              </a>{" "}
              can help you understand the larger framework. They are not a
              substitute for checking the exact state, local, court, and
              supervision rules that apply to your loved one.
            </p>
          </GuideProse>

          <OfflineOptions
            title="If internet access is limited"
            icon="📞"
            note="This guide assumes some readers are phone-only, supervised, incarcerated, without a printer, or relying on someone else for research."
            items={[
              "Call the court clerk, public defender office, supervision office, treatment provider, or registry office and ask for mailed forms or written instructions.",
              "Use a paper notebook for names, dates, confirmation numbers, and exact instructions.",
              "Ask a trusted person to print court notices, conditions, maps, forms, treatment referrals, and housing notes.",
              "Use a public library, reentry office, legal aid clinic, or courthouse self-help center when safe and allowed.",
            ]}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="scripts"
          number="5"
          title="Scripts for hard moments"
          subtitle="Use calm, narrow language. Do not overshare when privacy or legal risk is high."
        />

        <GuideSectionCard>
          <ScriptBox
            title="With your loved one on a recorded call"
            tone="family"
            context="Use this when you want to be loving without discussing case facts."
            script={`I love you. I am not going to discuss case facts on this line. We need to save that for your lawyer.\n\nHere is what I can do today: call attorneys, gather paperwork, check on housing, check on the kids, and write down deadlines.\n\nWe will move one square at a time.`}
          />

          <ScriptBox
            title="With police or agents"
            tone="legal"
            context={
              <span>
                This reflects the basic posture recommended in{" "}
                <a
                  href={sourceLinks.acluPoliceRights}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline underline-offset-2"
                >
                  know-your-rights guidance
                </a>
                : stay calm, do not debate, and request counsel.
              </span>
            }
            script={`I am not answering questions. I want a lawyer.\n\nI do not consent to a search. If you search anyway, I will not interfere.`}
          />

          <ScriptBox
            title="With children"
            tone="family"
            context="Keep it truthful, age-appropriate, and non-graphic. Follow all court and custody rules."
            script={`[Parent/Loved one] is in serious trouble with the law. Adults are working on it.\n\nYou are safe and loved. This is not your fault. You can ask questions, and if I do not know the answer yet, I will tell you that honestly.`}
          />

          <ScriptBox
            title="If there is a no-contact order"
            tone="legal"
            context="Do not criticize the order or promise when it will change."
            script={`For now, the rules say you cannot see or talk to [Name]. That is not because of you.\n\nWe are going to follow the rules carefully, and I will keep you updated in a way that is safe and honest.`}
          />

          <ScriptBox
            title="With extended family or friends"
            tone="neutral"
            context="Use this when people want details you cannot safely share."
            script={`We are following the legal process and keeping details private.\n\nIf you want to help, concrete support would mean a lot: rides, childcare, meals, printing documents, or showing up without judgment.`}
          />

          <ScriptBox
            title="With a supervising officer"
            tone="reentry"
            context="Use this to get clear instructions before acting."
            script={`We want to get this right. Can you confirm in writing the rules for internet use, devices, contact, travel, housing, and family events?\n\nIf there is a form or approval process, please tell us exactly what to use and when it is due.`}
          />

          <ScriptBox
            title="With skeptical relatives"
            tone="reminder"
            context="This protects boundaries without demanding agreement."
            script={`You do not have to approve of everything to be constructive.\n\nWe are focused on accountability, compliance, safety, and keeping the household stable. If the conversation turns cruel or unsafe, we are going to take space.`}
          />

          <ScriptBox
            title="If a reporter, neighbor, or online stranger confronts you"
            tone="privacy"
            context="Do not litigate the case in public."
            script={`We are cooperating with the legal process and have no comment.\n\nPlease direct questions to the attorney. We are asking for privacy for the family.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="privacy"
          number="6"
          title="Protecting your household and privacy"
          subtitle="Families can become targets too. Plan for privacy without escalating conflict."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some families experience harassment, doxxing, job pressure,
              school conflict, unwanted media attention, or threats. You cannot
              control every reaction, but you can reduce exposure, document
              harm, and avoid feeding public conflict.
            </p>

            <p>
              Privacy steps may include a P.O. box, tighter social media
              settings, careful device separation, removal from marketing and
              people-search lists, and a credit freeze if identity theft or
              financial targeting is a concern. The{" "}
              <a
                href={sourceLinks.cfpbCreditFreeze}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline underline-offset-2"
              >
                CFPB explains how credit freezes work
              </a>
              .
            </p>
          </GuideProse>

          <GuideChecklist
            id="privacy-steps"
            title="Household privacy checklist"
            columns={1}
            items={[
              {
                id: "social-media",
                label:
                  "Review social media privacy settings for every household member.",
              },
              {
                id: "mail",
                label:
                  "Consider a P.O. box or safer mailing address when appropriate.",
              },
              {
                id: "optout",
                label: (
                  <span>
                    Use{" "}
                    <a
                      href={sourceLinks.optOutPrescreen}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 underline underline-offset-2"
                    >
                      OptOutPrescreen
                    </a>{" "}
                    and privacy-rights resources as starting points for reducing
                    marketing and public-data exposure.
                  </span>
                ),
              },
              {
                id: "freeze",
                label:
                  "Freeze credit if there is risk of fraud, identity theft, or financial targeting.",
              },
              {
                id: "screenshots",
                label:
                  "Save screenshots of threats, harassment, doxxing, or workplace/school pressure.",
              },
              {
                id: "attorney",
                label:
                  "Ask the attorney before sending cease-and-desist letters, threatening civil action, or responding publicly.",
              },
            ]}
          />

          <GuideCallout tone="privacy" icon="🛡️" title="Do not fight every comment">
            <p>
              Public arguments can spread private details, create screenshots,
              and make the situation harder to control. Often the safer move is
              to document, block, report when necessary, and talk with counsel
              before responding.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="family-folder"
          number="7"
          title="Build a family support folder"
          subtitle="A paper or digital folder turns chaos into a practical task."
        />

        <GuideSectionCard>
          <DocumentPacket
            title="What to keep together"
            intro="Use a binder, folder, encrypted drive, or shared folder only with people who truly need access. If privacy is a concern, keep paper copies in a safe place."
            categories={[
              {
                title: "Legal and court",
                items: [
                  "Attorney name, phone, email, and emergency instructions.",
                  "Court notices, case number, next hearing date, bond or release papers.",
                  "No-contact orders, search conditions, device rules, travel rules, and written court conditions.",
                  "Notes from attorney calls that do not include privileged strategy unless counsel says how to store them.",
                ],
              },
              {
                title: "Household stability",
                items: [
                  "Lease, mortgage, utility bills, pay stubs, caregiving proof, school schedules, childcare plans.",
                  "Medication list, insurance cards, medical needs, disability paperwork, and emergency contacts.",
                  "Transportation plan for court, treatment, supervision, registry appointments, and work.",
                ],
              },
              {
                title: "Incarceration and release",
                items: [
                  "Facility mail, phone, visitation, book, commissary, photo, and property rules.",
                  "ID replacement steps, resume, housing leads, treatment referrals, and reentry contacts.",
                  "Release date estimates, supervision contact, registration instructions, and first-week calendar.",
                ],
              },
              {
                title: "Compliance proof",
                items: [
                  "Registry confirmations, supervision approvals, treatment attendance proof, travel permissions.",
                  "Housing approval notes, employment disclosures if required, device approvals, and password instructions.",
                  "Screenshots, emails, forms, receipts, confirmation numbers, and dated call notes.",
                ],
              },
            ]}
          />

<GuideChecklist
            id="stage-checklist"
            title="Expanded starter checklist"
            columns={2}
            items={[
              {
                id: "silence-lawyer",
                label: "Invoke silence and request a lawyer.",
              },
              {
                id: "secure-counsel",
                label: "Secure counsel or apply for appointed counsel.",
              },
              {
                id: "bail-package",
                label: "Prepare release or bail documents.",
              },
              {
                id: "privacy-lockdown",
                label: "Lock down privacy and document harassment.",
              },
              {
                id: "court-calendar",
                label: "Create a court and deadline calendar.",
              },
              {
                id: "facility-rules",
                label: "Learn facility mail, phone, visit, and property rules.",
              },
              {
                id: "reentry-binder",
                label: "Start the reentry binder before release.",
              },
              {
                id: "housing-confirm",
                label: "Confirm housing compliance before moving in.",
              },
              {
                id: "conditions-writing",
                label: "Get supervision and registry instructions in writing when possible.",
              },
              {
                id: "treatment",
                label: (
                  <span>
                    Use{" "}
                    <a
                      href={sourceLinks.findTreatment}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 underline underline-offset-2"
                    >
                      FindTreatment.gov
                    </a>{" "}
                    and specialized referrals to look for appropriate support.
                  </span>
                ),
              },
              {
                id: "niccc",
                label: (
                  <span>
                    Use the{" "}
                    <a
                      href={sourceLinks.niccc}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 underline underline-offset-2"
                    >
                      National Inventory of Collateral Consequences of Conviction
                    </a>{" "}
                    to begin identifying legal barriers to work, licensing,
                    housing, voting, education, and other opportunities.
                  </span>
                ),
              },
              {
                id: "routine",
                label:
                  "Build sustainable routines instead of emergency-only support.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="8"
          title="Common mistakes to avoid"
          subtitle="These are not moral failures. They are predictable stress reactions that can create real risk."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Talking about case facts on jail calls, texts, visits, or social media.",
                whyItMatters:
                  "Those communications may be recorded, saved, misunderstood, subpoenaed, or shared.",
                betterMove:
                  "Use calls for logistics and support. Save facts and strategy for the attorney.",
              },
              {
                mistake:
                  "Contacting an alleged victim, protected person, witness, school, employer, or family member to explain or smooth things over.",
                whyItMatters:
                  "Even well-meant contact can violate an order or look like pressure.",
                betterMove:
                  "Ask counsel what contact is allowed, if any. When in doubt, do not contact.",
              },
              {
                mistake:
                  "Treating “small” supervision or registry rules as flexible.",
                whyItMatters:
                  "Missed appointments, unapproved addresses, device issues, travel mistakes, passwords, or school-event confusion can have serious consequences.",
                betterMove:
                  "Verify the exact rule, write it down, calendar it, and save proof.",
              },
              {
                mistake: "Waiting until release week to solve housing or treatment.",
                whyItMatters:
                  "Housing, treatment, transportation, IDs, and registration planning can take time, and some addresses may not be approved.",
                betterMove:
                  "Start early. Ask for written housing and reporting instructions before release when possible.",
              },
              {
                mistake:
                  "Letting shame make the family disappear from every healthy support system.",
                whyItMatters:
                  "Isolation can make practical problems harder and emotional stress heavier.",
                betterMove:
                  "Choose a small circle of safe, discreet, constructive people and give them specific tasks.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="help"
          number="9"
          title="Mental health, treatment, and outside support"
          subtitle="This guide is not therapy, but support systems matter."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              You may need more than information. You may need someone to talk
              to, a treatment referral, a family support group, a lawyer, a
              reentry contact, or a crisis line. Getting help is not a sign that
              you are failing. It is often how families stay steady.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Places to start"
            description="Use these links as starting points. Confirm local rules, provider fit, insurance, confidentiality, and eligibility before relying on any outside resource."
            resources={[
              {
                label: "988 Suicide & Crisis Lifeline",
                href: sourceLinks.lifeline988,
                badge: "Crisis",
                phone: "Call or text 988",
                description:
                  "Free, confidential crisis and emotional support for people in distress and people worried about someone else.",
              },
              {
                label: "FindTreatment.gov",
                href: sourceLinks.findTreatment,
                badge: "Official",
                description:
                  "SAMHSA treatment locator for mental health, substance use, and related treatment services.",
              },
              {
                label: "Safer Society Treatment Referrals",
                href: sourceLinks.saferSociety,
                badge: "Treatment",
                description:
                  "Directory-oriented starting point for specialized providers working with sexual behavior problems, people who have caused harm, and survivors.",
              },
              {
                label: "Federal Defender resources",
                href: sourceLinks.fdOrg,
                badge: "Legal",
                description:
                  "Starting point for federal defender and CJA-related resources in federal criminal cases.",
              },
              {
                label: "SMART Office",
                href: sourceLinks.smartCurrentLaw,
                badge: "Official",
                description:
                  "Federal SORNA and registry-framework information. Use as background, not a substitute for state-specific verification.",
              },
              {
                label: "NICCC",
                href: sourceLinks.niccc,
                badge: "Reentry",
                description:
                  "Searchable inventory of collateral consequences affecting employment, licensing, housing, education, voting, and other opportunities.",
              },
              {
                label: "NARSOL",
                href: sourceLinks.narsol,
                badge: "Advocacy",
                description:
                  "National advocacy organization focused on rational sex-offense laws, education, and reform.",
              },
              {
                label: "ACSOL",
                href: sourceLinks.acsol,
                badge: "Advocacy",
                description:
                  "Advocacy and legal-education organization focused on constitutional sex-offense laws.",
              },
            ]}
          />

          <GuideCallout tone="warning" icon="⚠️" title="When support becomes unsafe">
            <p>
              If your loved one pressures you to lie, hide information, violate
              conditions, contact protected people, ignore child-safety rules, or
              keep secrets from counsel or supervision, pause and get advice.
              Support does not require you to participate in unsafe or unlawful
              behavior.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="why-support-matters"
          number="10"
          title="Why steady support matters"
          subtitle="Support is not a cure-all. But isolation, instability, and panic rarely help."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Families often feel judged from every direction: judged if they
              stay, judged if they leave, judged if they ask questions, judged if
              they do not already know what to do. This guide starts from a
              different place: you are allowed to move carefully.
            </p>

            <p>
              Steady support can mean letters, rides, childcare, paperwork,
              treatment encouragement, privacy protection, housing planning,
              job-search help, or simply not turning a person’s whole identity
              into the worst allegation, conviction, or public label attached to
              them.
            </p>

            <p>
              Support also has limits. Real accountability matters. Victims and
              safety matter. Children’s boundaries matter. Court orders matter.
              Your health and stability matter. The goal is not blind loyalty.
              The goal is a careful, honest, humane path forward.
            </p>
          </GuideProse>

          <GuideCallout tone="success" icon="🌤️" title="The future is not decided by panic">
            <p>
              Some relationships will change. Some will end. Some will become
              more boundaried. Some will survive and become steadier. The point
              is not to predict that today. The point is to make the next
              decision with care, facts, safety, and dignity.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="next-steps"
          number="11"
          title="Resources, related guides, and sources"
          subtitle="Use these to keep going without relying on memory or guesswork."
        />

        <GuideSectionCard>
          <RelatedGuides
            guides={[
              {
                title: "Federal Process Guide",
                description:
                  "Use this when the case is federal or may involve federal court, federal custody, or federal supervision.",
                to: "/resources/federal-process-guide",
              },
              {
                title: "Reentry Guide",
                description:
                  "Use this for release planning, housing, documents, employment, treatment, and first-week stability.",
                to: "/resources/reentry-guide",
              },
              {
                title: "Housing Search Guide",
                description:
                  "Use this when registry rules, supervision, or local restrictions affect housing options.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Employment Guide",
                description:
                  "Use this for job-search planning, disclosure decisions, records, and practical employment paths.",
                to: "/resources/employment-guide",
              },
            ]}
          />

          <SoftDivider label="Source list" />

          <SourceList
            title="Sources & verification"
            note="Links were live-checked during this sandbox rebuild where possible. State law, local practice, court orders, and supervision conditions still need case-specific verification."
            sources={[
              {
                label: "ACLU — Stopped by Police",
                href: sourceLinks.acluPoliceRights,
                description:
                  "Supports the guidance to stay calm, avoid answering questions, and request a lawyer during police contact.",
              },
              {
                label:
                  "Bureau of Justice Statistics — Recidivism of Sex Offenders Released from State Prison: A 9-Year Follow-Up",
                href: sourceLinks.bjsRecidivism,
                description:
                  "Primary source for same-category rearrest comparisons and research grounding about public assumptions versus observed recidivism patterns.",
              },
              {
                label: "RAINN — Statistics: Children & Teens",
                href: sourceLinks.rainnChildrenTeens,
                description:
                  "Supports the prevention framing that child sexual abuse often involves people known to the child, not only strangers.",
              },
              {
                label: "SMART Office — SORNA Current Law",
                href: sourceLinks.smartCurrentLaw,
                description:
                  "Federal background on SORNA and registry framework. State and local requirements still need direct verification.",
              },
              {
                label: "eCFR — 28 CFR Part 72",
                href: sourceLinks.ecfrRegistration,
                description:
                  "Federal registration regulation background, including where registration may be required under federal rules.",
              },
              {
                label: "National Inventory of Collateral Consequences of Conviction",
                href: sourceLinks.niccc,
                description:
                  "Searchable inventory for legal and regulatory consequences affecting work, licensing, housing, education, voting, and other opportunities.",
              },
              {
                label: "Consumer Financial Protection Bureau — Security Freeze",
                href: sourceLinks.cfpbCreditFreeze,
                description:
                  "Supports the household privacy recommendation to consider a credit freeze when identity theft or financial targeting is a concern.",
              },
              {
                label: "988 Suicide & Crisis Lifeline",
                href: sourceLinks.lifeline988,
                description:
                  "Crisis and emotional support resource for people in distress or worried about someone else.",
              },
              {
                label: "FindTreatment.gov",
                href: sourceLinks.findTreatment,
                description:
                  "Official treatment locator for mental health, substance use, and related treatment services.",
              },
              {
                label: "Safer Society — Treatment Referrals",
                href: sourceLinks.saferSociety,
                description:
                  "Specialized treatment-referral starting point for people seeking help related to sexual behavior problems, abuse prevention, or support.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}