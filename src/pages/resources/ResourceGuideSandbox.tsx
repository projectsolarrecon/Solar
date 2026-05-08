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
  SoftDivider,
  QuickStartPanel,
  GuideChecklist,
  ScriptBox,
  OfflineOptions,
  DocumentPacket,
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  GuideIconList,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  TimelineGuidanceGrid,
  DoDontJudgment,
} from "../../components/solar";

const sourceLinks = {
  cornellBillOfRights: "https://www.law.cornell.edu/constitution/billofrights",
  cornellFourth: "https://www.law.cornell.edu/constitution/fourth_amendment",
  cornellFifth: "https://www.law.cornell.edu/constitution/fifth_amendment",
  cornellSixth: "https://www.law.cornell.edu/constitution/sixth_amendment",
  cornellMiranda: "https://www.law.cornell.edu/wex/miranda_v._arizona_%281966%29",
  cornellRightToCounsel: "https://www.law.cornell.edu/wex/right_to_counsel",
  cornellBrady: "https://www.law.cornell.edu/wex/brady_rule",
  cornellRule16: "https://www.law.cornell.edu/rules/frcrmp/rule_16",
  justiaPackingham: "https://supreme.justia.com/cases/federal/us/582/15-1194/",
  bopLegalGuide: "https://www.bop.gov/resources/pdfs/legal_guide.pdf",
  nacdlDirectory: "https://www.nacdl.org/directory/public",
  lscLegalHelp: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
  usaGovLegalAid: "https://www.usa.gov/legal-aid",
  ncslVotingRights: "https://www.ncsl.org/elections-and-campaigns/felon-voting-rights",
  narsolResources: "https://resources.narsol.org/",
};

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Know Your Rights During a Sex Offense Case | The SOLAR Project"
        description="A practical, sex-offense-specific guide for protecting your rights, slowing down police and court pressure, documenting what happens, and knowing when to ask for legal help."
        keywords="sex offense case rights, right to remain silent, right to counsel, search warrant, registry rights, supervision rules, criminal defense, legal aid"
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
            Internal Sandbox Preview
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Know Your Rights During a Sex Offense Case
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A practical, sex-offense-specific guide for slowing down, protecting
            your rights, communicating safely, documenting what happens, and
            knowing when to pause before acting.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100 transition-colors"
            >
              🖨️ Print Sandbox
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

        <GuideIntro title="Start Here" icon="⚖️">
          <p>
            If you or someone you love is being investigated, charged, sentenced,
            incarcerated, supervised, or required to register after a sex offense
            case, the pressure can make people talk too fast, agree too quickly,
            or rely on guesses. This guide is meant to slow the moment down.
          </p>

          <p>
            The safest first move is usually simple: stay calm, do not try to
            explain your way out of the situation, ask for a lawyer, avoid
            unnecessary consent, save paperwork, and document what happened. The
            details can change by state, court, case, supervision term, and
            registry rule, so verify before acting.
          </p>

          <p>
            This page is for accused people, convicted people, registrants,
            people preparing for release, people under supervision, and family
            members trying to help without accidentally making things worse.
          </p>
        </GuideIntro>

        <GuideCallout tone="legal" icon="⚖️" title="A quick legal note">
          <p>
            This guide is for education and preparation. It is not legal advice,
            and it cannot replace a lawyer who knows your case, your court
            orders, your supervision rules, and your local law.
          </p>
          <p>
            Use it to slow down, ask better questions, document what happens, and
            know when to pause before acting.
          </p>
        </GuideCallout>

        <QuickStartPanel
          title="If police contact, questioning, or a search is happening now"
          subtitle="Use short sentences. Do not debate facts in the moment. Protect your rights calmly and clearly."
          icon="🚨"
          urgentActions={[
            <span>
              Say: “I am using my right to remain silent. I want a lawyer.” Then
              stop explaining.
            </span>,
            <span>
              If asked to search your phone, computer, car, home, accounts, or
              private messages, say: “I do not consent to a search.” Do not
              physically resist.
            </span>,
            <span>
              If officers show a warrant, do not interfere. Ask for a copy and
              write down what was searched or taken.
            </span>,
          ]}
          nextActions={[
            <span>
              Contact a criminal defense attorney, public defender, or trusted
              legal-help referral as soon as possible.
            </span>,
            <span>
              Tell a family member to save paperwork and call-log details, not to
              argue with police or delete anything.
            </span>,
            <span>
              Start a written timeline with dates, names, badge numbers,
              agencies, searches, seizures, court dates, release conditions, and
              deadlines.
            </span>,
          ]}
          reminder={
            <span>
              Being polite does not mean answering investigative questions.
              Silence, counsel, and documentation are protective tools.
            </span>
          }
        />

        <GuideCallout tone="warning" icon="⚠️" title="Do not use a general guide to make a case-specific legal decision">
          <p>
            This guide can help you slow down and protect information, but it
            cannot tell you what to say, what to sign, whether to consent,
            whether to unlock a device, whether to contact someone, or whether
            to accept a plea in your specific case. Those decisions need
            case-specific legal advice whenever possible.
          </p>
        </GuideCallout>

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Right 1",
              title: "Silence",
              icon: "🤐",
              tone: "privacy",
              description:
                "You can protect yourself by clearly saying you are using your right to remain silent.",
            },
            {
              eyebrow: "Right 2",
              title: "Counsel",
              icon: "⚖️",
              tone: "legal",
              description:
                "Ask for a lawyer before questioning, plea decisions, court strategy, or registry-risk decisions.",
            },
            {
              eyebrow: "Right 3",
              title: "Search limits",
              icon: "🔎",
              tone: "warning",
              description:
                "Warrants, consent, devices, accounts, and supervision searches are serious. Do not guess.",
            },
            {
              eyebrow: "Right 4",
              title: "Documentation",
              icon: "🗂️",
              tone: "success",
              description:
                "Save orders, notices, warrants, property receipts, conditions, deadlines, and written instructions.",
            },
          ]}
        />

        <GuideSectionHeader
          id="rights-by-stage"
          number="1"
          title="Rights you may have at each stage"
          subtitle="Start with the rights themselves, then use the rest of the guide to protect them under pressure."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Rights do not disappear because the accusation is serious, because
              a person is on a registry, or because a case involves the internet,
              children, family, treatment, or supervision. But the way rights
              work depends on the stage of the case and the rules already in
              place.
            </p>

            <p>
              This section names common rights and protections in plain language.
              It is not a complete legal analysis. Use it to prepare questions
              for counsel and to recognize when you should pause before acting.
            </p>
          </GuideProse>

          <TimelineGuidanceGrid
            title="Named rights and protections by stage"
            stages={[
              {
                stage: "Investigation",
                icon: "🔎",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to remain silent;
                    right to ask for a lawyer; right not to consent to a search
                    when consent is requested; Fourth Amendment protections
                    against unreasonable searches and seizures; limits on
                    government questioning and evidence collection.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before answering questions, signing statements,
                    unlocking devices, sharing passwords, giving consent, or
                    letting family explain facts.
                  </span>
                ),
              },
              {
                stage: "Arrest and booking",
                icon: "🚔",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to remain silent;
                    right to counsel; right to know the charge or reason for
                    arrest; right to a first appearance or prompt court review,
                    depending on jurisdiction; possible right to bail or bond,
                    subject to state law, charge type, risk findings, and court
                    conditions.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before discussing facts on recorded calls, jail phones,
                    body cameras, transport conversations, text messages, or with
                    other people in custody.
                  </span>
                ),
              },
              {
                stage: "Pretrial",
                icon: "📄",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to counsel; right to
                    review discovery through counsel; right to challenge
                    unlawful searches, statements, or evidence through motions;
                    right to seek clarification or modification of unclear or
                    unworkable release conditions; presumption of innocence.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before contacting anyone named in an order, returning
                    home, using restricted devices, traveling, posting online, or
                    changing housing or work.
                  </span>
                ),
              },
              {
                stage: "Trial",
                icon: "🏛️",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> presumption of innocence;
                    right to require the government to prove the case beyond a
                    reasonable doubt; right to a public trial; right to a jury
                    trial where available; right to confront and cross-examine
                    witnesses; right to present a defense and call witnesses;
                    right not to testify.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before speaking publicly about the case, contacting
                    witnesses, posting online, or assuming the defense strategy
                    is obvious from the outside.
                  </span>
                ),
              },
              {
                stage: "Plea and sentencing",
                icon: "⚖️",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to understand what
                    rights a plea gives up; right to ask about registration,
                    supervision, immigration, housing, employment, internet, and
                    family consequences; right to speak at sentencing or
                    allocution where available; right to present mitigation;
                    possible right to appeal or seek review, subject to deadlines
                    and plea limits.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before signing a plea, agreeing to facts, waiving
                    appeal rights, or assuming registration and supervision are
                    only paperwork.
                  </span>
                ),
              },
              {
                stage: "Incarceration",
                icon: "🔒",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to basic safety and
                    humane treatment; right to medical and mental health care;
                    right to use grievance or administrative remedy systems;
                    right to access courts, mail, and religious practice,
                    subject to custody rules.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before ignoring medical, safety, discipline, mail, or
                    grievance paperwork. Save requests and responses when
                    possible.
                  </span>
                ),
              },
              {
                stage: "Release, supervision, and registration",
                icon: "🧭",
                whatChanges: (
                  <span>
                    <strong>Rights to know:</strong> right to receive written
                    conditions and instructions; right to ask for clarification;
                    right to challenge registry errors; possible petition,
                    reduction, relief, or removal pathways in some
                    jurisdictions; state-dependent voting rights restoration;
                    constitutional protections still apply, though supervision
                    and registry rules may limit ordinary activity.
                  </span>
                ),
                whatToDo: (
                  <span>
                    Pause before moving, traveling, changing jobs, opening
                    accounts, using online platforms, changing devices, missing
                    deadlines, or relying on another person’s registry rules.
                  </span>
                ),
              },
            ]}
          />
        </GuideSectionCard>
<GuideSectionHeader
          id="police-contact"
          number="2"
          title="Investigation, police contact, and questioning"
          subtitle="You do not have to explain yourself just because someone with authority asks questions."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People often talk because they are scared, embarrassed, angry, or
              convinced they can clear things up. In sex offense investigations,
              even small statements can be misunderstood, incomplete, or used
              later. You can be respectful and still decline to answer questions
              without a lawyer.
            </p>

            <p>
              This matters for family members too. A spouse, parent, roommate, or
              adult child may think they are helping by speaking to police,
              explaining context, checking a device, contacting a witness, or
              deleting something upsetting. Those actions can create new legal
              problems.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Clearly say: “I am using my right to remain silent. I want a
                lawyer.”
              </span>,
              <span>
                Stay calm, keep your hands visible, follow safety commands, and
                write down names, agencies, dates, and what happened afterward.
              </span>,
            ]}
            donts={[
              <span>
                Do not try to explain, guess, joke, minimize, argue facts, or
                answer “just a few questions” without counsel.
              </span>,
              <span>
                Do not ask family to contact alleged victims, witnesses,
                investigators, employers, schools, or neighbors to “fix it.”
              </span>,
            ]}
            judgment={[
              <span>
                Basic identifying information and immediate safety commands may
                be different from investigative questioning. When the question
                moves toward facts, allegations, devices, timelines, people, or
                messages, pause and ask for counsel.
              </span>,
            ]}
          />

          <ScriptBox
            title="Police contact script"
            tone="legal"
            context="Use calmly. Repeat if needed. Do not add explanations afterward."
            script={`I am using my right to remain silent.

I want a lawyer.

I do not want to answer questions without my lawyer present.`}
          />

          <ScriptBox
            title="Family member script"
            tone="family"
            context="Use if police, an investigator, a school, a caseworker, or another authority contacts a loved one."
            script={`I understand this is serious.

I am not comfortable answering questions or guessing about facts. I want to make sure we do this the right way.

Please send any request in writing, and I will encourage [Name] to speak with a lawyer.`}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Do not delete, edit, or “clean up” anything">
            <p>
              Do not delete messages, photos, files, accounts, browser history,
              apps, cloud backups, or social media posts because you are scared.
              Do not ask someone else to do it. Tell your lawyer what exists and
              ask what to do next.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="searches-devices"
          number="3"
          title="Searches, devices, accounts, and warrants"
          subtitle="Phones, computers, cloud accounts, messages, apps, and passwords can become central evidence."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Sex offense investigations often involve digital evidence: phones,
              computers, tablets, cloud accounts, photos, downloads, search
              history, location data, messaging apps, gaming platforms, social
              media, smart-home devices, and shared family devices.
            </p>

            <p>
              Search law is complicated. A warrant, a consent request, a
              subpoena, a probation search condition, a parole instruction, a
              school or workplace device policy, and a family member handing over
              a device are not the same thing. Do not assume the rule. Slow down
              and preserve the paper trail.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Ask whether officers have a warrant. If they do, ask for a copy
                and do not interfere.
              </span>,
              <span>
                Write down what was searched, what was taken, who took it, and
                whether you received a property receipt.
              </span>,
            ]}
            donts={[
              <span>
                Do not consent to searches of your home, phone, computer, car,
                accounts, or private messages without legal advice when you have
                a choice.
              </span>,
              <span>
                Do not wipe devices, change accounts, destroy storage media,
                delete files, or tell family members to do so.
              </span>,
            ]}
            judgment={[
              <span>
                Passwords, biometric unlocking, cloud accounts, and supervised
                release search conditions are jurisdiction-specific. Ask a lawyer
                before deciding what must be provided and what can be refused.
              </span>,
            ]}
          />

          <ScriptBox
            title="Search or consent script"
            tone="warning"
            context="Use if officers ask permission to search. Do not physically resist a search."
            script={`I do not consent to a search.

If you have a warrant, I will not interfere. Please give me a copy of the warrant and a receipt for anything taken.

I want to speak with a lawyer before answering questions.`}
          />

          <DocumentPacket
            title="Device and search records to save"
            intro={
              <span>
                Save this information for your lawyer. Do not rely on memory.
              </span>
            }
            items={[
              "Date, time, location, agency, officer names, badge numbers, and case number if provided.",
              "A copy or photo of any warrant, subpoena, property receipt, inventory sheet, or business card.",
              "List of devices, accounts, storage media, papers, vehicles, rooms, or online accounts searched or seized.",
              "Names of family members, roommates, employers, schools, or providers who were contacted or asked for access.",
              "Any statement you or someone else made about passwords, ownership, users, shared devices, or accounts.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="arrest-pretrial"
          number="4"
          title="Arrest, booking, and pretrial release"
          subtitle="Release conditions can begin immediately and can be easy to violate by accident."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              After arrest or a first court appearance, you may receive bond,
              pretrial release, GPS monitoring, no-contact orders, internet
              restrictions, travel limits, firearm restrictions, child-contact
              restrictions, residence restrictions, school or workplace limits,
              or treatment requirements.
            </p>

            <p>
              Treat every condition as serious. If a condition is confusing, the
              safer move is not to guess. Ask your lawyer or the court for
              clarification before you contact someone, go somewhere, post
              online, travel, move, return home, or use a shared device.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Read every release condition before leaving court or custody, and
                ask for a copy if you do not have one.
              </span>,
              <span>
                Save court dates, deadlines, no-contact names, address rules,
                travel limits, and internet or device instructions in one place.
              </span>,
            ]}
            donts={[
              <span>
                Do not contact alleged victims, witnesses, minors, restricted
                people, or restricted places unless your lawyer confirms it is
                allowed.
              </span>,
              <span>
                Do not rely on “they contacted me first” as permission to respond
                when a no-contact order exists.
              </span>,
            ]}
            judgment={[
              <span>
                Family logistics, childcare, housing, work, medical care,
                religious services, treatment, and internet access may require
                modified conditions. Ask your lawyer about requesting changes
                instead of informally working around the rule.
              </span>,
            ]}
          />

          <GuideChecklist
            id="pretrial-condition-check"
            title="Pretrial condition checklist"
            columns={1}
            items={[
              {
                id: "orders",
                label:
                  "Save all bond, release, no-contact, protective, GPS, travel, and internet/device orders.",
              },
              {
                id: "contacts",
                label:
                  "List every person, place, platform, school, workplace, or household situation the order may affect.",
              },
              {
                id: "housing",
                label:
                  "Ask whether you may return home, live with family, live near children, or move to a new address.",
              },
              {
                id: "work",
                label:
                  "Ask how the conditions affect work, job searches, school, travel, phone use, email, and online accounts.",
              },
              {
                id: "clarification",
                label:
                  "Send unclear questions to your lawyer and save the answer in writing when possible.",
              },
            ]}
          />

          <ScriptBox
            title="Attorney call script after release"
            tone="legal"
            context="Use when you need help understanding conditions quickly."
            script={`Hello, my name is [Name]. I was released with conditions in [court/county] on [date].

I need help understanding what I can and cannot do before I accidentally violate anything.

The conditions I am most worried about are:
- Contact with [person/group]
- Living at [address]
- Internet or device use
- Work or travel
- Court deadlines

Can we review these before I act?`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="plea-trial-sentencing"
          number="5"
          title="Plea, trial, and sentencing decisions"
          subtitle="The legal outcome may affect registration, supervision, housing, work, family contact, immigration, and long-term stability."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A plea or conviction can carry consequences far beyond the sentence
              announced in court. In sex offense cases, the consequences may
              include registration, public listing, residence limits, employment
              barriers, treatment conditions, internet restrictions, travel
              notice rules, lifetime supervision, immigration consequences,
              family-court effects, and limits on where you can live or work.
            </p>

            <p>
              This guide cannot tell you whether to plead, go to trial, testify,
              appeal, or accept a sentence. It can help you ask better questions
              before making decisions that may shape the rest of your life.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Ask your lawyer what each charge, plea, conviction, sentence, and
                registration category would mean in daily life.
              </span>,
              <span>
                Ask about appeal deadlines, immigration consequences, registry
                duration, supervision rules, treatment requirements, voting
                rights, and housing effects before deciding.
              </span>,
            ]}
            donts={[
              <span>
                Do not accept “you will probably be fine” as the full explanation
                of consequences.
              </span>,
              <span>
                Do not sign plea paperwork until you understand what you are
                admitting, what rights you are giving up, and what consequences
                may follow.
              </span>,
            ]}
            judgment={[
              <span>
                Plea and trial decisions are personal and legal. Family members
                can help organize questions and documents, but the accused person
                needs case-specific advice from counsel.
              </span>,
            ]}
          />

          <GuideIconList
            title="Questions to ask before a plea or sentencing"
            description="Use this list with your lawyer. Add state-specific and immigration questions if they apply."
            columns={2}
            variant="cards"
            tone="legal"
            items={[
              {
                icon: "court",
                title: "What rights am I giving up?",
                description:
                  "Ask about trial rights, appeal limits, factual admissions, sentencing exposure, and whether the plea can be withdrawn.",
              },
              {
                icon: "fingerprint",
                title: "Will registration be required?",
                description:
                  "Ask about duration, public listing, tier/classification, address rules, work reporting, travel notices, and removal eligibility.",
              },
              {
                icon: "home",
                title: "How will this affect housing and family?",
                description:
                  "Ask about living with children, returning home, school zones, custody/visitation, lease issues, and supervision approval.",
              },
              {
                icon: "internet",
                title: "Will internet or device limits apply?",
                description:
                  "Ask about phones, computers, social media, work accounts, treatment software, monitoring, passwords, and shared family devices.",
              },
              {
                icon: "reentry",
                title: "What will supervision require?",
                description:
                  "Ask about curfew, GPS, treatment, polygraph, travel, employment, contact rules, home visits, searches, and violation consequences.",
              },
              {
                icon: "document",
                title: "What should I save?",
                description:
                  "Ask for copies of plea forms, sentencing orders, conditions, registry instructions, treatment referrals, and appeal deadlines.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🗣️" title="Sentencing is also a documentation moment">
            <p>
              If sentencing is coming up, ask counsel what mitigation is useful,
              whether the person has a right to speak, what support letters or
              treatment records should be gathered, what appeal deadlines may
              apply, and what paperwork must be saved before leaving court.
            </p>
          </GuideCallout>
        </GuideSectionCard>
<GuideSectionHeader
          id="incarceration-release"
          number="6"
          title="Incarceration, release, supervision, and registration"
          subtitle="Rights still matter after conviction, but deadlines and written rules become especially important."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              During incarceration, practical rights often involve safety,
              medical care, mental health care, religious practice, disability
              access, mail, visitation, grievances, discipline, records, and
              preparation for release. Families can help by keeping organized
              notes, saving mail, tracking requests, and helping prepare a
              reentry folder.
            </p>

            <p>
              After release, registry and supervision rules can change ordinary
              life quickly. Moving, traveling, changing jobs, using the internet,
              living with family, missing appointments, or misunderstanding a
              reporting deadline can create serious consequences.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>
                Keep orders, conditions, registry paperwork, officer
                instructions, treatment rules, and deadlines in one folder.
              </span>,
              <span>
                Verify before moving, traveling, changing employment, using a new
                device, opening an account, changing household members, or
                relying on voting-rights assumptions.
              </span>,
            ]}
            donts={[
              <span>
                Do not rely on memory, old paperwork, another person’s registry
                rules, or informal advice from people in a different county or
                state.
              </span>,
              <span>
                Do not ignore a rule because it seems impossible. Ask for written
                clarification or legal help before the deadline passes.
              </span>,
            ]}
            judgment={[
              <span>
                Officer instructions, court orders, registry-office instructions,
                treatment rules, and local ordinances can overlap or conflict.
                When they do, pause and ask for clarification in writing.
              </span>,
            ]}
          />

          <VerifyBeforeActing
            title="Verify before acting after release"
            whoToAsk={
              <span>
                Your lawyer, supervising officer, registering agency, court
                clerk, treatment provider, housing authority, or another office
                with actual authority over the specific rule.
              </span>
            }
            whatToAsk={
              <span>
                “Before I act, can you confirm what rule applies to [move,
                travel, job change, internet use, family contact, address change,
                vehicle, phone, account, voting registration, or deadline], who
                must approve it, and whether I need written permission?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, name, office, phone number or email, exact
                instruction, deadline, form, approval, denial, and any follow-up
                steps.
              </span>
            }
          />

          <GuideCallout tone="legal" icon="🧾" title="Registry errors and relief pathways">
            <p>
              If a registry entry is wrong, outdated, missing context, showing
              the wrong address, listing the wrong status, or failing to reflect
              relief already granted, document the problem and ask the
              registering agency or counsel how to correct it. Some jurisdictions
              also allow petitions for removal, reduction, termination, relief,
              or review after certain requirements are met. These pathways vary
              widely, so verify locally before assuming you are eligible.
            </p>
          </GuideCallout>

          <OfflineOptions
            title="If internet access is limited or monitored"
            icon="📵"
            note={
              <span>
                Many people on supervision or in custody cannot safely rely on
                private internet access. Use paper and trusted helpers when
                needed.
              </span>
            }
            items={[
              "Ask a lawyer, public defender office, library, reentry worker, or family member to print court orders, registry rules, and legal-help contacts.",
              "Use a paper notebook for officer instructions, registration dates, treatment appointments, and questions for counsel.",
              "Ask for mailed forms or written instructions if online reporting, portals, or accounts are restricted.",
              "Have a trusted helper save screenshots, appointment confirmations, transportation plans, and written approvals.",
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts-documents"
          number="7"
          title="Scripts and documents to keep close"
          subtitle="Simple language and organized records help when stress is high."
        />

        <GuideSectionCard>
          <ScriptBox
            title="Officer or registry clarification script"
            tone="reentry"
            context="Use when a rule is unclear and you need the answer documented."
            script={`Hello [Name/Office],

I am trying to follow my rules correctly. Before I act, I need clarification about [specific issue].

My question is: [one clear question].

Can you please tell me:
1. What rule applies?
2. Who has authority to approve or deny it?
3. Whether I need written permission or a form?
4. What deadline applies?

I am saving the answer for my records. Thank you.`}
          />

          <DocumentPacket
            title="Rights protection folder"
            intro={
              <span>
                Keep one folder for the documents that prove what happened, what
                you were told, and what deadlines apply.
              </span>
            }
            categories={[
              {
                title: "Police, search, and investigation records",
                items: [
                  "Warrants, subpoenas, property receipts, search inventories, officer cards, agency names, case numbers, and device/account seizure notes.",
                  "Timeline of police contact, interviews, family contact, school/work contact, child-protection contact, or digital-forensics events.",
                  "Names and contact details for attorneys, public defenders, investigators, advocates, and trusted family helpers.",
                ],
              },
              {
                title: "Court and defense records",
                items: [
                  "Charging documents, bond or release conditions, no-contact orders, protective orders, discovery notices, hearing dates, plea paperwork, sentencing orders, and appeal deadlines.",
                  "Attorney meeting notes, questions to ask, answers received, mitigation records, treatment records, support letters, and reentry planning documents.",
                  "Immigration, custody, housing, employment, school, professional licensing, voting-rights, and benefits questions that may need separate legal advice.",
                ],
              },
              {
                title: "Release, supervision, and registration records",
                items: [
                  "Supervision conditions, registry paperwork, address forms, travel forms, employment reporting forms, treatment rules, internet/device rules, and officer instructions.",
                  "Written approvals, denials, appointment confirmations, registration receipts, reporting deadlines, and copies of anything submitted.",
                  "A log of calls, visits, emails, mailed forms, names, departments, dates, and exact instructions.",
                ],
              },
            ]}
          />

          <GuideChecklist
            id="family-helper-checklist"
            title="Family helper checklist"
            columns={1}
            items={[
              {
                id: "no-explaining",
                label:
                  "Do not explain facts to police, alleged victims, witnesses, schools, employers, neighbors, or online groups without legal advice.",
              },
              {
                id: "no-delete",
                label:
                  "Do not delete, edit, hide, wipe, forward, or post about messages, photos, devices, accounts, or documents.",
              },
              {
                id: "save-paper",
                label:
                  "Save paperwork, envelopes, screenshots, call logs, appointment dates, and written instructions.",
              },
              {
                id: "legal-help",
                label:
                  "Help find a lawyer, public defender contact, legal aid office, or criminal defense referral instead of trying to solve the case yourself.",
              },
              {
                id: "support",
                label:
                  "Support practical stability: transportation, medication, housing notes, court-date reminders, clothing for court, and calm communication.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="8"
          title="Common mistakes to avoid"
          subtitle="Most mistakes happen because people are scared and trying to fix everything too quickly."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Talking to clear things up.",
                whyItMatters:
                  "Statements can be incomplete, misunderstood, recorded, repeated, or used later even when the person meant well.",
                betterMove:
                  "Say you are using your right to remain silent and want a lawyer.",
              },
              {
                mistake: "Consenting to searches without advice.",
                whyItMatters:
                  "Consent can affect phones, computers, accounts, homes, cars, and shared family spaces.",
                betterMove:
                  "Do not consent when you have a choice. Ask whether there is a warrant and request a copy.",
              },
              {
                mistake: "Deleting or changing digital evidence.",
                whyItMatters:
                  "Trying to clean up files, accounts, messages, or devices can create new legal problems.",
                betterMove:
                  "Preserve what exists and tell your lawyer about it.",
              },
              {
                mistake: "Contacting alleged victims or witnesses.",
                whyItMatters:
                  "Even peaceful contact can violate orders, look like pressure, or become new evidence.",
                betterMove:
                  "Let lawyers handle case-related contact.",
              },
              {
                mistake: "Treating supervision or registry instructions as informal advice.",
                whyItMatters:
                  "Missed deadlines, unapproved travel, address issues, or unclear internet rules can lead to violations or new charges.",
                betterMove:
                  "Verify the rule, save the answer, and ask for clarification before acting.",
              },
              {
                mistake: "Letting family members become investigators.",
                whyItMatters:
                  "Family helpers can accidentally become witnesses, spread information, alter evidence, or trigger contact violations.",
                betterMove:
                  "Ask family to organize documents, help find counsel, and support stability.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="Before relying on this guide">
            <p>
              This page is educational and practical, not legal advice. If
              something here conflicts with your lawyer’s advice, court order,
              supervision condition, registry instruction, or local law, pause
              and get clarification from a qualified legal professional or the
              authority responsible for that rule.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="9"
          title="Resources and next steps"
          subtitle="Use official sources where possible, but get case-specific legal help before making legal decisions."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Legal help and rights resources"
            description={
              <span>
                These are starting points for education and referrals. They do
                not replace a lawyer who knows your case.
              </span>
            }
            resources={[
              {
                label: "NACDL Find a Lawyer Directory",
                href: sourceLinks.nacdlDirectory,
                badge: "Defense",
                description:
                  "Criminal defense lawyer directory from the National Association of Criminal Defense Lawyers.",
              },
              {
                label: "Legal Services Corporation legal help finder",
                href: sourceLinks.lscLegalHelp,
                badge: "Legal aid",
                description:
                  "Find LSC-funded civil legal aid organizations by location.",
              },
              {
                label: "USAGov legal aid overview",
                href: sourceLinks.usaGovLegalAid,
                badge: "Official",
                description:
                  "Federal starting point for affordable legal aid, LawHelp.org, and pro bono resources.",
              },
              {
                label: "Cornell Bill of Rights",
                href: sourceLinks.cornellBillOfRights,
                badge: "Legal reference",
                description:
                  "Plain access to constitutional text and explanations, including the Fourth, Fifth, Sixth, Eighth, and Fourteenth Amendments.",
              },
              {
                label: "NCSL felony voting rights",
                href: sourceLinks.ncslVotingRights,
                badge: "State law",
                description:
                  "State-by-state voting rights restoration information for people with felony convictions.",
              },
              {
                label: "NARSOL Resources",
                href: sourceLinks.narsolResources,
                badge: "Registry-specific",
                description:
                  "Registry-focused resource collection, advocacy materials, research, links, and court-case resources.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Housing Search Guide",
                description:
                  "Use this when release, supervision, or registration rules affect where someone can live.",
                to: "/resources/housing-search-guide",
              },
              {
                title: "Reentry Planning Guide",
                description:
                  "Helpful for organizing release paperwork, appointments, housing, work, transportation, and documentation.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Family Support Guide",
                description:
                  "Helps loved ones support someone safely without escalating legal, emotional, or practical risk.",
                to: "/resources/family-support",
              },
            ]}
          />

          <SourceList
            title="Sources and verification"
            note={
              <span>
                Links were checked for live access during sandbox preparation.
                Constitutional rights, criminal procedure, registry duties,
                supervision rules, voting rights, and incarceration rules still
                require jurisdiction-specific verification before use in a
                specific case.
              </span>
            }
            sources={[
              {
                label: "Cornell Legal Information Institute: Bill of Rights",
                href: sourceLinks.cornellBillOfRights,
                description:
                  "Constitutional reference for the Fourth, Fifth, Sixth, Eighth, and Fourteenth Amendment framework used in this guide.",
              },
              {
                label: "Cornell Legal Information Institute: Fourth Amendment",
                href: sourceLinks.cornellFourth,
                description:
                  "Reference for search, seizure, warrants, surveillance, and privacy-related protections.",
              },
              {
                label: "Cornell Legal Information Institute: Fifth Amendment",
                href: sourceLinks.cornellFifth,
                description:
                  "Reference for self-incrimination and due-process protections.",
              },
              {
                label: "Cornell Legal Information Institute: Sixth Amendment",
                href: sourceLinks.cornellSixth,
                description:
                  "Reference for counsel, trial, confrontation, jury, and criminal-prosecution rights.",
              },
              {
                label: "Cornell Legal Information Institute: Miranda v. Arizona",
                href: sourceLinks.cornellMiranda,
                description:
                  "Reference for custodial interrogation, the right to remain silent, and counsel warnings.",
              },
              {
                label: "Cornell Legal Information Institute: Right to counsel",
                href: sourceLinks.cornellRightToCounsel,
                description:
                  "Reference for the right of a criminal defendant to have legal assistance.",
              },
              {
                label: "Cornell Legal Information Institute: Brady rule",
                href: sourceLinks.cornellBrady,
                description:
                  "Reference for prosecution disclosure of material exculpatory information.",
              },
              {
                label: "Federal Rule of Criminal Procedure 16",
                href: sourceLinks.cornellRule16,
                description:
                  "Reference for federal criminal discovery and inspection rules.",
              },
              {
                label: "Justia U.S. Supreme Court: Packingham v. North Carolina",
                href: sourceLinks.justiaPackingham,
                description:
                  "Reference for registry-related First Amendment internet-access limits and lawful speech concerns.",
              },
              {
                label: "Federal Bureau of Prisons Legal Resource Guide",
                href: sourceLinks.bopLegalGuide,
                description:
                  "Federal custody reference for BOP medical care, administrative remedies, and prison legal-resource topics.",
              },
              {
                label: "NCSL felony voting rights",
                href: sourceLinks.ncslVotingRights,
                description:
                  "State-by-state reference for voting-rights restoration after felony convictions.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}