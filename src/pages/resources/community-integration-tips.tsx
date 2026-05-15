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
  RedFlagGreenFlag,
} from "../../components/solar";

const sourceLinks = {
  belongingReentry: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5962031/",
  selfStigma: "https://pubmed.ncbi.nlm.nih.gov/38212591/",
  cjilReentry: "https://cjil.sog.unc.edu/resource/research-on-the-effectiveness-of-reentry-treatments/",
  fortuneComingHome: "https://fortunesociety.org/coming-home/",
  fortuneSociety: "https://fortunesociety.org/",
  honestJobs: "https://www.honestjobs.com/",
  peerMentorReentry: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/peer-mentored-community-reentry-reduces-recidivism",
  volunteeringReview: "https://www.ncbi.nlm.nih.gov/books/NBK159301/",
  volunteeringSocialMental:
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC10159229/",
  mnCosaEvaluation:
    "https://mn.gov/doc/assets/2018%20MnCOSA%20Outcome%20Evaluation_tcm1089-326700.pdf",
  cosaOverview:
    "https://csgjusticecenter.org/publications/circles-of-support-and-accountability/",
  cosaSystematicReview:
    "https://pubmed.ncbi.nlm.nih.gov/26369806/",
  lifeline988: "https://988lifeline.org/",
  samhsaHelpline: "https://www.samhsa.gov/find-help/helplines/national-helpline",
};

export default function CommunityIntegrationGuide(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="A Practical Guide to Belonging, Relationships, and Reintegration | The SOLAR Project"
        description="A practical SOLAR guide for rebuilding routines, relationships, roles, and repair after conviction, incarceration, supervision, or registry life."
        keywords="reentry, reintegration, community integration, relationships after incarceration, registry support, family support, belonging after conviction"
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
            A Practical Guide to Belonging, Relationships, and Reintegration
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Meaningful community life is not only something to hope for. It is
            something people can practice, plan for, protect, and rebuild with
            support, boundaries, accountability, and time.
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
            Reintegration is a process, not a test. Small, consistent actions —
            showing up on time, keeping promises, respecting boundaries, and
            asking clear questions — rebuild trust more than speeches do.
          </p>

          <p>
            Some people will not accept you. Some rejection may come from stigma,
            fear, or the label itself. Some boundaries may also come from real
            harm, broken trust, safety concerns, court orders, supervision rules,
            or community policies. This guide does not promise that everyone will
            come around.
          </p>

          <p>
            It does offer a path. Reintegration means building a lawful, stable,
            accountable life with the people and places where trust, safety,
            boundaries, and contribution are possible.
          </p>
        </GuideIntro>

        <GuideCallout
          tone="reentry"
          icon="🌱"
          title="Hope without false promises"
        >
          <p>
            You do not have to rely only on hope. Hope matters, but reintegration
            also has skills: routines, relationships, roles, and repair. You can
            actively manage your own return to community life. Families, friends,
            neighbors, faith communities, employers, and supporters can help by
            offering clear boundaries, practical support, dignity, and realistic
            chances to participate.
          </p>
        </GuideCallout>

        <QuickStartPanel
          title="Your first moves"
          subtitle="Start small enough that you can repeat it. Consistency matters more than intensity."
          icon="🛠️"
          urgentActions={[
            <span key="routine">
              Choose one stabilizing routine for this week: sleep, meals,
              movement, appointments, medication, journaling, treatment, work, or
              a daily check-in.
            </span>,
            <span key="person">
              Identify one safer person or place where contact is respectful,
              lawful, and not built around shame or secrecy.
            </span>,
            <span key="verify">
              Before joining a group, volunteering, visiting a location, dating,
              traveling, or taking a role near children or restricted places,
              verify supervision, registry, court, and local rules.
            </span>,
          ]}
          nextActions={[
            <span key="useful">
              Pick one low-risk way to be useful: clean up a shared space, help a
              relative with a task, attend a support meeting, apply for work, or
              show up consistently somewhere appropriate.
            </span>,
            <span key="script">
              Prepare a short script for questions, boundaries, or disclosure so
              you are not inventing words under pressure.
            </span>,
            <span key="notes">
              Start a paper or phone note for names, dates, rules, approvals,
              denials, schedules, and next steps.
            </span>,
          ]}
          reminder={
            <span>
              You do not have to solve your whole life this week. Build one
              repeatable step, then protect it.
            </span>
          }
        />

        <OverviewCards
          columns={4}
          cards={[
            {
              eyebrow: "Building block 1",
              title: "Routines",
              icon: "🔁",
              tone: "reentry",
              description:
                "Repeated habits make life steadier. A routine gives you something to return to after stress, rejection, or confusion.",
            },
            {
              eyebrow: "Building block 2",
              title: "Relationships",
              icon: "🤝",
              tone: "family",
              description:
                "Trust rebuilds slowly through honesty, boundaries, time, and repeated evidence that you can be safe and reliable.",
            },
            {
              eyebrow: "Building block 3",
              title: "Roles",
              icon: "🧰",
              tone: "info",
              description:
                "People become known through what they do: worker, neighbor, parent, friend, student, volunteer, faith member, or helper.",
            },
            {
              eyebrow: "Building block 4",
              title: "Repair",
              icon: "🧭",
              tone: "legal",
              description:
                "Repair means accepting accountability, respecting limits, making amends where appropriate, and not demanding instant trust.",
            },
          ]}
        />

<GuideSectionHeader
          id="stages"
          number="1"
          title="Rebuilding belonging by stage"
          subtitle="Community life changes over time. The goal is not to rush intimacy or acceptance; it is to build safe, lawful, repeatable participation."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="What to focus on at each stage"
            stages={[
              {
                stage: "First days and weeks",
                icon: "🧱",
                whatChanges:
                  "Life may feel narrow, watched, awkward, or unstable. You may be dealing with supervision, housing, work, family tension, transportation, and shame all at once.",
                whatToDo:
                  "Stabilize the basics. Keep appointments. Learn your actual conditions. Avoid rushing into dating, volunteering, disclosure, or intense new groups before you understand the rules and risks.",
              },
              {
                stage: "First few months",
                icon: "🗓️",
                whatChanges:
                  "Patterns start to form. People may notice consistency. Some relationships may open; others may stay distant or closed.",
                whatToDo:
                  "Choose a few steady roles: work, treatment, family responsibilities, support meetings, faith participation, school, or low-risk service. Practice scripts for boundaries, gossip, and private questions.",
              },
              {
                stage: "Longer-term rebuilding",
                icon: "🌿",
                whatChanges:
                  "Belonging becomes less about one dramatic breakthrough and more about durable routines, trustworthy relationships, and meaningful contribution.",
                whatToDo:
                  "Deepen the relationships and roles that are lawful, healthy, and mutual. Keep verifying before major changes. Use setbacks as information, not proof that rebuilding is impossible.",
              },
            ]}
          />

          <SoftDivider />

          <GuideProse>
            <p>
              The first goal is not to become accepted everywhere. It is to
              become steady enough to notice where participation is possible,
              where boundaries are needed, and where the safest next step is to
              walk away.
            </p>

            <p>
              Quality matters more than quantity. A few reliable relationships, a
              repeatable routine, and one meaningful role can do more for
              reintegration than chasing universal approval.
            </p>
          </GuideProse>

          <PullQuoteBlock>
            Reintegration does not mean convincing everyone to accept you. It
            means building a lawful, stable, accountable life where trust,
            safety, boundaries, and contribution are possible.
          </PullQuoteBlock>
        </GuideSectionCard>

        <GuideSectionHeader
          id="relationships"
          number="2"
          title="Relationships that help you rebuild"
          subtitle="Healthy relationships are not built on secrecy, humiliation, pressure, or instant forgiveness. They are built through care, honesty, boundaries, and time."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Start small. One or two people who are steady, respectful, and
              realistic can matter more than a large social circle. Look for
              relationships where you are encouraged to follow the law, keep your
              commitments, tell the truth where it is needed, and stay connected
              to support.
            </p>

            <p>
              You do not owe your full story to every neighbor, coworker,
              acquaintance, or group member. At the same time, some situations
              may require legal, ethical, or practical disclosure. The safer
              approach is to know your conditions, understand the setting, and
              get advice before guessing.
            </p>
          </GuideProse>

          <GuideCallout
            tone="privacy"
            icon="💙"
            title="Dating and romantic relationships need extra care"
          >
            <p>
              Dating can be part of a meaningful life, but it should not be rushed
              as proof that reintegration is working. Before dating, be honest
              with yourself about readiness, loneliness, legal limits, treatment
              guidance, supervision rules, internet or contact restrictions, and
              whether the relationship can be built without secrecy or pressure.
            </p>

            <p>
              Disclosure is not one-size-fits-all. Some people may need to know
              because of safety, parenting, housing, legal, or relationship
              realities. Others may not be entitled to private details. When the
              stakes are high, talk with a trusted attorney, supervision officer,
              treatment provider, or counselor before guessing.
            </p>
          </GuideCallout>

          <RedFlagGreenFlag
            red={
              <ul>
                <li>
                  Someone pressures you to lie, hide required information, break
                  conditions, or ignore supervision or registry rules.
                </li>
                <li>
                  A person, leader, group, or romantic partner uses your past to
                  control you, shame you, demand money, or isolate you from other
                  support.
                </li>
                <li>
                  A relationship moves very fast, asks for secrecy, or makes you
                  feel like you must accept unsafe treatment because you are
                  lucky anyone accepts you.
                </li>
              </ul>
            }
            green={
              <ul>
                <li>
                  People respect clear rules, written policies, legal limits, and
                  personal boundaries.
                </li>
                <li>
                  Support includes ordinary life: rides, meals, reminders,
                  conversation, work leads, accountability, and encouragement.
                </li>
                <li>
                  You are treated as a whole person without anyone denying harm,
                  ignoring safety, or reducing you permanently to a label.
                </li>
              </ul>
            }
          />

          <GuideCallout tone="family" icon="🏠" title="For family and loved ones">
            <p>
              Support does not mean pretending nothing happened. It also does not
              mean making shame the center of every conversation. Useful support
              is steady and specific: help with transportation, paperwork,
              meals, schedules, emotional steadiness, and honest boundaries.
            </p>
          </GuideCallout>

          <RoleGuidanceGrid
            title="How different people can help"
            roles={[
              {
                role: "Person rebuilding community life",
                icon: "🧭",
                guidance:
                  "Focus on what you can practice: showing up, keeping promises, verifying rules, choosing safer people, accepting lawful boundaries, and taking the next small step after setbacks.",
              },
              {
                role: "Family or loved one",
                icon: "🧡",
                guidance:
                  "Offer practical help without becoming the whole supervision system. Support routines, transportation, paperwork, meals, treatment, and honest conversations. Do not pressure the person to ignore rules or move faster than trust allows.",
              },
              {
                role: "Friend, neighbor, or coworker",
                icon: "🤝",
                guidance:
                  "Practice ordinary respect. You do not have to become a counselor or investigator. Clear boundaries, fair treatment, and not spreading gossip can make reintegration safer and more realistic.",
              },
              {
                role: "Faith or community leader",
                icon: "🕊️",
                guidance:
                  "Use clear policies, trained leadership, appropriate boundaries, and written expectations. Compassion and safety belong together. Do not confuse forgiveness with secrecy or lack of accountability.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="community"
          number="3"
          title="Neighbors, work, volunteering, and community spaces"
          subtitle="Community is built through roles. Choose roles that are lawful, clear, low-risk, and repeatable."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Being a good neighbor often starts with ordinary things: greeting
              people politely, keeping shared spaces clean, managing noise,
              following housing rules, and not over-explaining. Consistency can
              lower tension over time, even when some people remain distant.
            </p>

            <p>
              At work, reliability matters. Show up on time, be coachable, take
              feedback seriously, and document inappropriate comments or
              different treatment when needed. A toxic workplace is not the only
              place where you can rebuild.
            </p>

            <p>
              Volunteering, faith communities, support meetings, service
              projects, community gardens, food pantries, animal shelters, and
              cleanups can offer structure and meaning. But not every role is
              safe or allowed. Roles involving children, schools, parks, housing,
              transportation, internet access, private contact, or overnight
              events may require extra verification.
            </p>

            <p>
              Faith and spiritual communities can be powerful places of support
              when they combine compassion with clear boundaries. They can also
              become harmful when leaders demand secrecy, use shame as control,
              pressure someone to ignore rules, or treat forgiveness as a reason
              to skip safety planning. You are allowed to leave coercive,
              humiliating, or unsafe spaces.
            </p>
          </GuideProse>

          <VerifyBeforeActing
            title="Verify before joining, volunteering, traveling, dating, or disclosing"
            whoToAsk={
              <span>
                Ask the person or office with actual authority: supervising
                officer, registering agency, attorney, treatment provider, court
                clerk, housing provider, volunteer coordinator, faith/community
                leader, or employer policy contact.
              </span>
            }
            whatToAsk={
              <span>
                Ask the narrow question tied to the action you are about to take:
                “Am I allowed to be at this location, in this role, with these
                duties, on this schedule, with these people, under my current
                conditions?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, name, title, department, phone number or email,
                written policy, approval, denial, and any conditions or limits
                you were given.
              </span>
            }
          />

<DocumentPacket
            title="Keep a reintegration folder"
            intro={
              <span>
                A folder turns confusion into proof. Use paper, phone notes,
                screenshots, email folders, or all of them.
              </span>
            }
            categories={[
              {
                title: "Rules and permissions",
                items: [
                  "Supervision conditions, registry instructions, court orders, treatment rules, and written permissions.",
                  "Names, dates, and notes from calls with agencies, supervisors, employers, housing providers, or community organizations.",
                ],
              },
              {
                title: "Stability records",
                items: [
                  "Work schedules, pay stubs, appointment records, class schedules, certificates, volunteer hours, and attendance notes.",
                  "Housing documents, transportation plans, medication lists, crisis contacts, and support meeting information.",
                ],
              },
              {
                title: "Problem records",
                items: [
                  "Harassment notes, screenshots, voicemails, letters, unfair treatment records, and dates of concerning incidents.",
                  "Steps you took to report, de-escalate, ask for help, or move away from unsafe situations.",
                ],
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts"
          number="4"
          title="Scripts for hard moments"
          subtitle="Stress makes it harder to find words. Short scripts help you stay calm, honest, and boundaried."
        />

        <GuideSectionCard>
          <ScriptBox
            title="Asking a community group about eligibility"
            tone="neutral"
            context="Use this when you want to participate but need to avoid guessing about rules, restrictions, or policies."
            script={`Hello, my name is [Name]. I am interested in participating, and I want to make sure I follow all rules and policies.\n\nIs there someone I can speak with privately about eligibility, boundaries, and any written requirements for this role or activity?`}
          />

          <ScriptBox
            title="Responding to gossip or intrusive questions"
            tone="privacy"
            context="Use this when someone asks for details in a public, unsafe, or unnecessary setting."
            script={`I understand people may have questions. I am focused on living responsibly, following my conditions, and rebuilding my life.\n\nI am not going to discuss private details here.`}
          />

          <ScriptBox
            title="Asking family for practical support"
            tone="family"
            context="Use this when loved ones want to help but everyone is overwhelmed or unclear."
            script={`What helps me most right now is steady support: rides, reminders, meals, help with paperwork, and honest conversations.\n\nI also need us to respect any legal, supervision, treatment, or safety boundaries. I am not asking you to pretend this is easy. I am asking if we can focus on the next practical step.`}
          />

          <ScriptBox
            title="Supporter script for welcoming someone back"
            tone="reentry"
            context="Use this when explaining a balanced support approach to relatives, neighbors, faith groups, or community members."
            script={`We are trying to support stability and accountability. We are not asking anyone to ignore harm, safety, or legal restrictions.\n\nWe are asking for clear rules, dignity, and a fair chance to participate where appropriate.`}
          />

          <GuideCallout
            tone="reminder"
            icon="💬"
            title="Keep scripts short"
          >
            <p>
              A script is not a courtroom argument. It should name the issue, ask
              one clear question, avoid oversharing, and help you take notes. If
              the person cannot answer, ask who can.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="setbacks"
          number="5"
          title="When rejection, stigma, or setbacks happen"
          subtitle="Rejection can hurt badly. It is also information, not a verdict on whether your life can have meaning."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Some doors will not open. Some people may never want contact. Some
              family members may need distance. Some employers, landlords,
              groups, or neighbors may react to the label instead of the whole
              person. Sometimes a boundary is connected to real past conduct,
              harm, or broken trust. Sometimes it is stigma. Often it is mixed.
            </p>

            <p>
              You do not have to pretend rejection does not hurt. But do not let
              one rejection push you toward unsafe people, secrecy, isolation, or
              giving up on all community. Scale down to the next lawful, steady
              step.
            </p>
          </GuideProse>

          <GuideChecklist
            id="setback-micro-skills"
            title="A small reset when shame or panic spikes"
            columns={1}
            items={[
              {
                id: "pause",
                label: "Pause before reacting.",
                helper:
                  "Do not send the angry text, argue with gossip, quit the job, disappear from support, or make a major decision while flooded.",
              },
              {
                id: "breathe",
                label: "Breathe and name what is happening.",
                helper:
                  "Try: “This is shame,” “This is fear,” “This is rejection,” or “This is a setback, not the whole story.”",
              },
              {
                id: "facts",
                label: "Separate facts from conclusions.",
                helper:
                  "Fact: one person said no. Conclusion to challenge: nobody will ever accept me.",
              },
              {
                id: "support",
                label: "Contact one steady support person.",
                helper:
                  "Use someone who helps you slow down, stay lawful, and choose the next safe step.",
              },
              {
                id: "next-step",
                label: "Choose one next small action.",
                helper:
                  "Return to a routine, attend an appointment, write down what happened, verify a rule, or make one safe contact.",
              },
            ]}
          />

          <CommonMistakes
            title="Common mistakes that can make reintegration harder"
            mistakes={[
              {
                mistake: "Trying to explain everything to everyone.",
                whyItMatters:
                  "Over-explaining can escalate conflict, invite gossip, or create disclosure problems.",
                betterMove:
                  "Use short scripts. Share details only when legally, ethically, or practically needed.",
              },
              {
                mistake: "Rushing into the first group or person that offers acceptance.",
                whyItMatters:
                  "Instant acceptance can feel relieving, but unsafe people and groups may use shame, secrecy, money, or loyalty to control you.",
                betterMove:
                  "Look for clear rules, trained leadership, written expectations, and respect for boundaries.",
              },
              {
                mistake: "Hiding restrictions from people who need to know.",
                whyItMatters:
                  "Guessing or hiding can create legal, housing, employment, supervision, or safety risk.",
                betterMove:
                  "Verify the specific action before relying on your assumptions. Save the answer when possible.",
              },
              {
                mistake: "Giving up on all community after one rejection.",
                whyItMatters:
                  "A painful no can feel final, but it may only tell you that one person, place, or role is not workable.",
                betterMove:
                  "Pause, talk to a steady support person, adjust the plan, and choose the next small step.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="🌤️" title="A setback plan">
            <p>
              Try this sequence: pause, breathe, write down what happened, check
              whether any rule or safety issue is involved, talk to a trusted
              support person, and choose one small action that keeps you
              connected to your routine.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="plan"
          number="6"
          title="Make a weekly belonging plan"
          subtitle="Belonging grows through repeatable practice. A simple weekly plan keeps hope connected to action."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="weekly-belonging-plan"
            title="This week, I will:"
            columns={1}
            items={[
              {
                id: "routine",
                label: "Repeat one stabilizing routine.",
                helper:
                  "Examples: sleep schedule, meals, movement, treatment, work, medication, journaling, or a daily check-in.",
              },
              {
                id: "contact",
                label: "Contact one safe or steady person.",
                helper:
                  "Keep it simple: a text, call, coffee, meeting, ride request, or honest check-in.",
              },
              {
                id: "place",
                label: "Show up responsibly in one appropriate place.",
                helper:
                  "Examples: work, class, appointment, support meeting, faith service, library, community center, or family task.",
              },
              {
                id: "verify",
                label: "Verify one rule, boundary, or permission before acting.",
                helper:
                  "Do this before volunteering, joining activities, changing housing, traveling, dating, or entering restricted settings.",
              },
              {
                id: "contribute",
                label: "Choose one way to be useful.",
                helper:
                  "Help with a chore, apply for work, assist a relative, clean a shared space, attend a service project, or follow through on a promise.",
              },
              {
                id: "setback",
                label: "Name one setback without letting it define the week.",
                helper:
                  "Write down what happened, what it means, what it does not mean, and the next small step.",
              },
              {
                id: "record",
                label: "Save one important note or document.",
                helper:
                  "Names, dates, approvals, denials, policies, schedules, incident notes, or contact information.",
              },
            ]}
          />

<OfflineOptions
            title="If internet access, privacy, or transportation is limited"
            icon="📎"
            note={
              <span>
                Reintegration planning should still work for people who are
                phone-only, supervised, recently released, without a printer, or
                relying on family for help.
              </span>
            }
            items={[
              "Use a paper calendar or notebook for appointments, calls, approvals, denials, and weekly goals.",
              "Ask agencies, employers, treatment providers, or community groups for mailed forms or printed policies.",
              "Use a public library, reentry office, legal aid office, clerk’s office, or trusted helper for printing and forms when appropriate.",
              "Keep a written contact list with supervision, registry office, attorney, treatment provider, crisis line, family contacts, transportation options, and support meetings.",
              "When privacy is limited, write only what you need to remember and store sensitive papers somewhere safer.",
            ]}
          />

          <GuideProse>
            <p>
              You do not have to earn your humanity. You practice belonging
              through ordinary acts of stability, honesty, contribution, and care.
              Keep going.
            </p>
          </GuideProse>
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="7"
          title="Resources and next steps"
          subtitle="Use outside resources for support, but verify local rules and personal conditions before relying on any general guide."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Outside resources"
            description={
              <span>
                These links can help with reentry support, employment, crisis
                support, mental health, peer support, and research. Availability
                and relevance vary by location.
              </span>
            }
            resources={[
              {
                label: "The Fortune Society — Coming Home",
                href: sourceLinks.fortuneComingHome,
                badge: "Reentry",
                description:
                  "Reentry information and services from a long-running nonprofit focused on people impacted by incarceration.",
              },
              {
                label: "The Fortune Society",
                href: sourceLinks.fortuneSociety,
                badge: "Support",
                description:
                  "Programs and advocacy related to housing, employment, education, health, and community reintegration.",
              },
              {
                label: "Honest Jobs",
                href: sourceLinks.honestJobs,
                badge: "Employment",
                description:
                  "A fair-chance employment platform for people with records. Use it as a job-search tool, not legal advice.",
              },
              {
                label: "988 Suicide & Crisis Lifeline",
                href: sourceLinks.lifeline988,
                badge: "Crisis",
                phone: "Call or text 988",
                description:
                  "Free crisis support for people in suicidal crisis, emotional distress, or mental health crisis.",
              },
              {
                label: "SAMHSA National Helpline",
                href: sourceLinks.samhsaHelpline,
                badge: "Helpline",
                phone: "1-800-662-HELP (4357)",
                description:
                  "Treatment referral and information service for mental health and substance-use concerns.",
              },
              {
                label: "Council of State Governments Justice Center — CoSA",
                href: sourceLinks.cosaOverview,
                badge: "Community model",
                description:
                  "Plain-language overview of Circles of Support and Accountability and related implementation materials.",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "Employment Rights and Job Search Support",
                description:
                  "Use this with the work and reputation-building sections when employment is part of your reintegration plan.",
                to: "/resources/employment-rights",
              },
              {
                title: "Housing Search and Stability",
                description:
                  "Housing affects routines, relationships, transportation, supervision, and community participation.",
                to: "/resources/housing-search",
              },
              {
                title: "Family Support Guide",
                description:
                  "A companion guide for loved ones trying to offer practical support without ignoring boundaries or safety.",
                to: "/resources/family-support",
              },
              {
                title: "Mental Health and Crisis Resources",
                description:
                  "Use this if shame, isolation, rejection, or stress is becoming too heavy to carry alone.",
                to: "/resources/mental-health-resources",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            title="Sources and verification"
            note={
              <span>
                Research on reentry, volunteering, mentorship, stigma, and
                community support is useful but should not be overread. Local
                law, supervision, registry requirements, court orders, and agency
                policies can change the answer for a specific person.
              </span>
            }
            sources={[
              {
                label: "Belonging and reintegration research",
                href: sourceLinks.belongingReentry,
                description:
                  "Supports the guide’s framing that being seen as a person, not only a label, matters during reintegration.",
              },
              {
                label: "Self-stigma of incarceration and community integration",
                href: sourceLinks.selfStigma,
                description:
                  "Supports discussion of stigma, self-stigma, mental health, and participation barriers.",
              },
              {
                label: "UNC Criminal Justice Innovation Lab — Reentry effectiveness",
                href: sourceLinks.cjilReentry,
                description:
                  "Supports careful discussion of reentry services, employment, housing, treatment, and wraparound support.",
              },
              {
                label: "Peer-mentored community reentry",
                href: sourceLinks.peerMentorReentry,
                description:
                  "Supports cautious discussion of mentoring, social navigation, and structured reentry support.",
              },
              {
                label: "Volunteering as a public health intervention",
                href: sourceLinks.volunteeringReview,
                description:
                  "Supports the general idea that volunteering and contribution can support wellbeing, while still requiring legal and practical verification.",
              },
              {
                label: "Volunteering and social, mental, and physical health",
                href: sourceLinks.volunteeringSocialMental,
                description:
                  "Additional research context on volunteering and health-related outcomes.",
              },
              {
                label: "Minnesota Circles of Support and Accountability evaluation",
                href: sourceLinks.mnCosaEvaluation,
                description:
                  "Supports cautious discussion of structured circles, roles, boundaries, and accountability models.",
              },
              {
                label: "Council of State Governments Justice Center — CoSA",
                href: sourceLinks.cosaOverview,
                description:
                  "Plain-language overview and implementation materials for Circles of Support and Accountability.",
              },
              {
                label: "CoSA systematic review abstract",
                href: sourceLinks.cosaSystematicReview,
                description:
                  "Research context on CoSA outcomes. Use carefully because the evidence base is limited and implementation-dependent.",
              },
              {
                label: "988 Suicide & Crisis Lifeline",
                href: sourceLinks.lifeline988,
                description:
                  "Official crisis support resource for emotional distress or suicidal crisis.",
              },
              {
                label: "SAMHSA National Helpline",
                href: sourceLinks.samhsaHelpline,
                description:
                  "Official helpline for mental health and substance-use treatment referral.",
              },
            ]}
          />

          <GuideCallout tone="legal" icon="⚖️" title="This is a guide, not legal advice">
            <p>
              General reentry guidance cannot tell you what your specific court
              order, supervision condition, registry obligation, housing rule, or
              local policy allows. Before acting on something that could create
              legal, housing, employment, travel, supervision, or registration
              risk, verify the specific step with the right authority and save
              the answer when possible.
            </p>
          </GuideCallout>
        </GuideSectionCard>
      </main>
    </div>
  );
}