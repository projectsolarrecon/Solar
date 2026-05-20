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
  VerifyBeforeActing,
  CommonMistakes,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
  RoleGuidanceGrid,
  TimelineGuidanceGrid,
} from "../../components/solar";

const sourceLinks = [
  {
    label:
      "American Academy of Pediatrics / HealthyChildren — Tips to Support Children When a Parent is in Prison",
    href: "https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx",
    description:
      "Supports caregiver stability, honest communication, reassurance, and helping children cope when a parent is incarcerated.",
  },
  {
    label: "National Child Traumatic Stress Network — Families and Caregivers",
    href: "https://www.nctsn.org/audiences/families-and-caregivers",
    description:
      "Supports trauma-aware caregiver responses, age-related reactions, safety, routines, and developmentally appropriate support.",
  },
  {
    label: "Sesame Workshop — Incarceration",
    href: "https://sesameworkshop.org/topics/incarceration/",
    description:
      "Child-friendly resources, videos, printables, and caregiver tools for children affected by incarceration.",
  },
  {
    label: "Sesame Workshop — Visiting a Parent in Prison",
    href: "https://sesameworkshop.org/resources/visiting-parent-prison/",
    description:
      "Supports preparing children for facility visits, including uniforms, waiting, rules, limits on touch, and saying goodbye.",
  },
  {
    label: "Stop It Now! — Talking to Children and Teens",
    href: "https://www.stopitnow.org/ohc-content/talking-to-children-and-teens",
    description:
      "Supports accurate, age-appropriate conversations with children and emphasizes adult responsibility for safety.",
  },
  {
    label:
      "NCTSN — Caring for Kids: What Parents Need to Know about Sexual Abuse",
    href: "https://www.nctsn.org/resources/caring-kids-what-parents-need-know-about-sexual-abuse",
    description:
      "Supports caregiver guidance around child safety, legal involvement, family impact, and responding to children with care.",
  },
  {
    label: "988 Suicide & Crisis Lifeline",
    href: "https://988lifeline.org/",
    description:
      "Crisis support for anyone who feels at risk of harming themselves or who needs immediate emotional support.",
  },
];

export default function ChildrenDisclosureToolkit(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Talking With Children About a Loved One’s Legal Situation | The SOLAR Project"
        description="A calm, practical SOLAR guide for caregivers and supporters talking with children about arrest, incarceration, supervision, registry rules, public stigma, and family change."
        keywords="children disclosure, family support, incarceration, registry family guide, reentry family support, talking to children about prison"
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
            Talking With Children About a Loved One’s Legal Situation
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            A disclosure and family-trust toolkit for caregivers, parents, and
            supporters navigating investigation, incarceration, supervision,
            registry rules, public stigma, and family change.
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
              href="#scripts"
              className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Jump to Scripts
            </a>

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
            You do not need a perfect speech. Children usually need three
            things first: simple truth, reassurance that they are safe and
            loved, and adults who keep showing up consistently.
          </p>

          <p>
            Much of this guidance applies to any serious family legal crisis.
            What is different here is that sex-offense cases can involve
            stricter child-contact rules, stronger public stigma, searchable
            registry information, and long-term restrictions that affect
            ordinary family life.
          </p>

          <p>
            Children still need the same basic things: truth, safety, love,
            routines, and adults who do not make them carry adult burdens.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="Before you talk with a child"
          subtitle="Use these first steps before a hard conversation, visit, call, letter, school conversation, or family meeting."
          icon="⚡"
          urgentActions={[
            <span key="write">
              Write one simple, truthful sentence before you speak.
            </span>,
            <span key="rules">
              Check whether any court order, custody order, facility rule,
              supervision condition, treatment rule, or no-contact order limits
              contact or communication.
            </span>,
            <span key="adult">
              Choose one calm adult to lead the conversation, not a crowd of
              overwhelmed relatives.
            </span>,
          ]}
          nextActions={[
            <span key="fault">
              Plan to say clearly: “You are safe,” “You are loved,” and “This
              is not your fault.”
            </span>,
            <span key="short">
              Keep the first conversation short. Answer the question the child
              asked, not every question you fear they might ask later.
            </span>,
            <span key="grounding">
              End with something grounding: a snack, a walk, bedtime routine,
              drawing, music, prayer, or quiet time together.
            </span>,
          ]}
          reminder={
            <span>
              Disclosure is usually a series of short conversations, not one
              perfect talk.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Step 1",
              title: "Stabilize first",
              icon: "🧯",
              tone: "info",
              description:
                "Children feel adult panic. Pause, write down the basic facts, and decide who is safe to involve.",
            },
            {
              eyebrow: "Step 2",
              title: "Tell enough truth",
              icon: "💬",
              tone: "family",
              description:
                "Use age-appropriate words. Do not give graphic details, legal theories, or adult conflict.",
            },
            {
              eyebrow: "Step 3",
              title: "Keep returning",
              icon: "🔁",
              tone: "success",
              description:
                "Children process in pieces. Expect repeated questions, changing feelings, and new conversations as they grow.",
            },
          ]}
        />

        <GuideSectionHeader
          id="what-is-different"
          number="1"
          title="What is universal, and what is different here"
          subtitle="The child-centered basics are familiar. The legal, stigma, and registry layers need extra care."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              The basic child guidance does not change just because the legal
              situation involves a sex offense or registry issue. Children still
              need calm adults, honest but age-appropriate words, protection
              from adult conflict, and permission to feel more than one thing at
              once.
            </p>

            <p>
              What changes is the practical environment around the child.
              Contact may be restricted. Court, custody, supervision, treatment,
              facility, school, or registry rules may affect ordinary family
              routines. Information may be public, searchable, or repeated by
              other people in cruel or incomplete ways.
            </p>

            <p>
              That means this guide avoids two extremes. It does not minimize
              harm or hide behind vague language. It also does not make a child
              carry shame, adult fear, legal strategy, or advocacy arguments.
            </p>
          </GuideProse>

          <GuideCallout tone="reminder" icon="🪷" title="The SOLAR-specific layer">
            <p>
              In this context, adults should be especially careful about child
              contact rules, public stigma, searchable information, school and
              community gossip, and long-term restrictions that may affect
              visits, housing, travel, technology, school events, and family
              routines.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="what-children-need"
          number="2"
          title="What children need to hear"
          subtitle="Simple truth, direct reassurance, and steady adults matter more than a perfect explanation."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Few moments feel as impossible as telling a child that someone
              they love is in legal trouble, incarcerated, on supervision, or
              living under registry rules. Silence can feel safer to adults, but
              children often fill silence with fear, blame, or stories they hear
              from someone else.
            </p>

            <p>
              Start with the child’s immediate world. Who will pick them up?
              Where will they sleep? Can they still love the person? Are they in
              trouble? Did they cause this? Will adults keep telling them the
              truth?
            </p>

            <p>
              Most children do not need every detail. They need enough truth to
              understand the change around them, enough reassurance to feel
              cared for, and enough consistency to believe adults are not hiding
              everything from them.
            </p>
          </GuideProse>

          <GuideCallout tone="family" icon="✨" title="A sentence to return to">
            <p>
              “This is a grown-up legal problem. You did not cause it. You are
              safe. You are loved. We will keep answering your questions in
              words you can understand.”
            </p>
          </GuideCallout>

          <GuideChecklist
            id="child-disclosure-basics"
            title="Disclosure basics"
            columns={1}
            items={[
              {
                id: "simple",
                label:
                  "Use one or two simple sentences before giving more detail.",
              },
              {
                id: "truth",
                label:
                  "Tell the truth without giving graphic facts, legal strategy, or adult-level explanations.",
              },
              {
                id: "fault",
                label:
                  "Say directly that the child did not cause the situation and is not responsible for fixing it.",
              },
              {
                id: "harm",
                label:
                  "Do not minimize serious harm, but do not make the child responsible for understanding adult details.",
              },
              {
                id: "feelings",
                label:
                  "Accept tears, silence, anger, confusion, embarrassment, loyalty, love, or repeated questions.",
              },
              {
                id: "routine",
                label:
                  "End the conversation with a predictable, calming activity.",
              },
            ]}
          />

          <VerifyBeforeActing
            title="Verify before arranging contact with a child"
            whoToAsk={
              <span>
                The attorney, court clerk if appropriate, supervising officer,
                custody attorney, facility staff, treatment provider, or agency
                with actual authority over the restriction.
              </span>
            }
            whatToAsk={
              <span>
                “Is this specific contact allowed: a visit, call, letter, text,
                school event, third-party message, or family gathering involving
                this child?”
              </span>
            }
            whatToSave={
              <span>
                Save the date, person’s name, department, exact answer, and any
                written permission, order, policy, or denial.
              </span>
            }
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts"
          number="3"
          title="Age-aware scripts"
          subtitle="Use these as starting points. Adjust names, relationships, and legal posture without adding graphic detail."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Scripts help adults speak calmly when emotions are high. They are
              not meant to hide the truth. They are meant to keep the truth
              small enough for the child’s age, safety, and role.
            </p>

            <p>
              For younger children, focus on safety, routine, and love. For
              older children and teens, use clearer words and leave room for
              anger, embarrassment, loyalty, confusion, and complicated feelings.
            </p>
          </GuideProse>

          <GuideCallout tone="info" icon="🌿" title="About the tone of these scripts">
            <p>
              The scripts below are intentionally presented in a softer style.
              They are serious, but they should not look like emergency warnings.
              The goal is to give adults calm language they can actually use.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Preschool children, roughly ages 3–5"
            tone="soft"
            context="Use very short sentences. Young children need reassurance and routine more than explanation."
            script={`Daddy cannot live at home right now because of a serious grown-up problem.\n\nYou did not cause this. You are safe. You are loved.\n\nWe are going to have dinner, read a story, and I will answer more questions when you have them.`}
          />

          <ScriptBox
            title="Elementary children, roughly ages 6–10"
            tone="soft"
            context="Children this age may ask the same question many times. Repetition can be part of feeling safe."
            script={`Mom is in legal trouble because adults believe she broke an important rule.\n\nI do not have every answer yet, but I will tell you the truth in words you can understand.\n\nThis is not your fault. You are safe, and you are loved.`}
          />

          <ScriptBox
            title="Middle school children, roughly ages 11–13"
            tone="soft"
            context="Use clearer language while still protecting them from adult details."
            script={`Uncle has a serious legal situation and has to follow rules from the court.\n\nYou may feel confused, embarrassed, angry, loyal, worried, or unsure what to think. Those feelings are allowed.\n\nYou can ask me questions. If I do not know the answer, I will say that instead of guessing.`}
          />

          <ScriptBox
            title="Teenagers, roughly ages 14–18"
            tone="soft"
            context="Teens may already know partial information from school, social media, court pages, news, or peers."
            script={`Your dad is dealing with a serious legal situation connected to sexual boundaries, safety, and choices adults are responsible for.\n\nThis may affect visits, school events, privacy, and how our family handles questions from other people.\n\nYou do not have to protect my feelings. I will listen, and we can keep talking as you have more questions.`}
          />

          <ScriptBox
            title="When there has been a conviction"
            tone="soft"
            context="Use only when it is accurate. This gives older children and teens clearer language without graphic detail."
            script={`They were convicted of breaking a law about sexual behavior and safety.\n\nThat is serious, and it is okay to have strong feelings about it.\n\nYou are not responsible for what happened, for fixing it, or for deciding today how you will feel forever.`}
          />

          <ScriptBox
            title="Young adults"
            tone="soft"
            context="Adult children may need more direct information and room to set their own boundaries."
            script={`Here is what I know, and here is what I still do not know.\n\nYou may have strong feelings, and you do not have to decide everything today.\n\nI want to keep communication open, but I will respect your boundaries and your need for support outside the family.`}
          />

          <ScriptBox
            title="When you do not know the answer yet"
            tone="soft"
            context="Use this instead of guessing, promising an outcome, or making the child carry uncertainty."
            script={`That is a fair question. I do not know the answer yet.\n\nI am going to ask the right person and write down what they say.\n\nWhen I know more, I will tell you what I can in words that make sense for you.`}
          />

          <ScriptBox
            title="When someone at school or online has heard something"
            tone="soft"
            context="Use this when the child is facing gossip, stigma, registry searches, or partial information from others."
            script={`I am sorry you had to hear that from someone else.\n\nSome of what people say may be wrong, incomplete, or said in a hurtful way.\n\nYou can bring questions to me. You do not have to explain our family to everyone, and you are allowed to ask for help if someone is being cruel.`}
          />

          <ScriptBox
            title="When a no-contact or limited-contact rule exists"
            tone="soft"
            context="Use only if it is accurate for the situation. Do not blame the child or promise the rule will change."
            script={`There is a rule right now that limits contact. That rule is for adults to follow.\n\nYou did not cause it, and it is not your job to fix it.\n\nWe will follow the rule carefully, and we will keep taking care of you while the adults work through what happens next.`}
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="family-roles"
          number="4"
          title="What different adults should do"
          subtitle="Children need adults to stay in their proper roles: calm, honest, boundaried, and protective."
        />

        <GuideSectionCard>
          <RoleGuidanceGrid
            title="Role-based guidance"
            roles={[
              {
                role: "Caregiver at home",
                icon: "🏠",
                guidance: (
                  <div>
                    <p>
                      Lead with stability. Keep school, meals, bedtime, and
                      transportation as predictable as possible.
                    </p>
                    <p>
                      Practice one simple script before you talk. Do not process
                      adult grief, anger, fear, legal strategy, or advocacy
                      arguments with the child.
                    </p>
                  </div>
                ),
              },
              {
                role: "Impacted individual",
                icon: "✉️",
                guidance: (
                  <div>
                    <p>
                      Share love without pressuring the child to reassure you.
                      Keep messages short, steady, accountable, and rule-compliant.
                    </p>
                    <p>
                      Do not ask the child to keep secrets, carry messages,
                      defend you, reject others, or promise forgiveness.
                    </p>
                  </div>
                ),
              },
              {
                role: "Spouse or partner",
                icon: "🤝",
                guidance: (
                  <div>
                    <p>
                      Your grief, anger, loyalty, fear, or ambivalence may be
                      real. The child still needs permission to have their own
                      feelings.
                    </p>
                    <p>
                      Process adult decisions with safe adults, counsel, support
                      groups, or therapy — not with the child.
                    </p>
                  </div>
                ),
              },
              {
                role: "Grandparents and extended family",
                icon: "👥",
                guidance: (
                  <div>
                    <p>
                      Support the household with meals, rides, childcare,
                      privacy, and calm presence.
                    </p>
                    <p>
                      Do not interrogate the child, gossip nearby, demand
                      details, shame the family, or undermine the caregiver’s
                      chosen script.
                    </p>
                  </div>
                ),
              },
              {
                role: "School, childcare, or community supporter",
                icon: "🎒",
                guidance: (
                  <div>
                    <p>
                      Ask the caregiver what the child needs at school or in
                      activities: privacy, routine, flexibility, or a safe adult
                      to check in with.
                    </p>
                    <p>
                      Share only what is necessary to support the child. Do not
                      turn family crisis into staff gossip.
                    </p>
                  </div>
                ),
              },
            ]}
          />

          <GuideCallout
            tone="privacy"
            icon="🛡️"
            title="Protect children from adult conversations"
          >
            <p>
              Children should not overhear strategy calls, accusations, custody
              arguments, registry research, financial panic, or relatives
              debating whether the person deserves support.
            </p>
          </GuideCallout>

          <ScriptBox
            title="Boundary phrase for relatives"
            tone="soft"
            context="Use this when people press for details or talk about the case around children."
            script={`We are not discussing details around the kids.\n\nRight now we are focused on keeping them safe, steady, and loved.\n\nIf you want to help, practical support is welcome. Gossip, pressure, and harsh comments around the children are not.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="timeline"
          number="5"
          title="What changes by stage"
          subtitle="The right conversation may change during investigation, incarceration, reentry, supervision, and long-term registry life."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="Stage-based guidance"
            stages={[
              {
                stage: "Investigation, arrest, or pretrial",
                icon: "⚖️",
                whatChanges: (
                  <p>
                    Facts may be unclear, adults may be in shock, and court,
                    custody, bond, or no-contact rules may change quickly.
                  </p>
                ),
                whatToDo: (
                  <p>
                    Keep explanations minimal and truthful. Avoid discussing
                    allegations, interviews, witness issues, or legal strategy
                    with or around children.
                  </p>
                ),
              },
              {
                stage: "Incarceration or detention",
                icon: "⛓️",
                whatChanges: (
                  <p>
                    Calls, mail, visits, and video contact may be monitored,
                    delayed, denied, or controlled by facility rules.
                  </p>
                ),
                whatToDo: (
                  <p>
                    Prepare children for what they may see: uniforms, waiting,
                    security, limited touch, short calls, and hard goodbyes.
                    Keep visit routines predictable when contact is allowed.
                  </p>
                ),
              },
              {
                stage: "Reentry and supervision",
                icon: "🚪",
                whatChanges: (
                  <p>
                    The loved one may be home or nearby but still under strict
                    rules about housing, curfew, internet, treatment, travel,
                    school events, or child contact.
                  </p>
                ),
                whatToDo: (
                  <p>
                    Explain rules simply without making the child responsible:
                    “This is an adult rule we have to follow.” Celebrate small
                    routines returning without promising everything is fixed.
                  </p>
                ),
              },
              {
                stage: "Registry and long-term family life",
                icon: "🧭",
                whatChanges: (
                  <p>
                    Children may grow into more questions about stigma,
                    internet searches, neighbors, school, friends, dating,
                    travel, and why rules still exist.
                  </p>
                ),
                whatToDo: (
                  <p>
                    Revisit the conversation as they mature. Frame the registry
                    as one legal reality the family manages, not the child’s
                    identity or burden.
                  </p>
                ),
              },
            ]}
          />

          <GuideChecklist
            id="stage-checklist"
            title="Stage check"
            columns={1}
            items={[
              {
                id: "contact",
                label:
                  "Before any contact, verify whether the contact is allowed and under what conditions.",
              },
              {
                id: "monitoring",
                label:
                  "Assume facility calls, mail, visits, and video systems may be monitored unless told otherwise in writing.",
              },
              {
                id: "school",
                label:
                  "If school support is needed, share only what helps the child function safely at school.",
              },
              {
                id: "online",
                label:
                  "Prepare older children for the possibility of online searches, registry pages, gossip, or partial information.",
              },
              {
                id: "promises",
                label:
                  "Do not promise release dates, reunification, case outcomes, registry relief, or rule changes.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="avoid"
          number="6"
          title="Common mistakes to avoid"
          subtitle="These mistakes usually come from fear or love, but they can make children feel less safe."
        />

        <GuideSectionCard>
          <CommonMistakes
            title="Disclosure and family-boundary mistakes"
            mistakes={[
              {
                mistake:
                  "Waiting so long that the child learns from gossip, search results, a registry page, or overheard adult conversations.",
                whyItMatters:
                  "Children may feel betrayed or imagine something worse than the truth.",
                betterMove:
                  "Give a short, age-aware explanation before the child is forced to piece it together alone.",
              },
              {
                mistake:
                  "Giving graphic details, legal theories, or adult-level explanations.",
                whyItMatters:
                  "Children are not lawyers, investigators, therapists, or emotional containers for adults.",
                betterMove:
                  "Answer the question asked in the simplest truthful way that protects the child.",
              },
              {
                mistake: "Minimizing the seriousness so the child will feel better.",
                whyItMatters:
                  "Older children may sense that adults are hiding or softening the truth, especially if they find public information later.",
                betterMove:
                  "Use non-graphic but honest language: serious legal situation, sexual boundaries, safety, adult choices, court rules, or conviction when accurate.",
              },
              {
                mistake: "Making the child comfort the adult.",
                whyItMatters:
                  "Children may hide their own fear, anger, or confusion to protect the caregiver.",
                betterMove:
                  "Say, “My feelings are for adults to help me with. You can have your own feelings.”",
              },
              {
                mistake:
                  "Using the child as a messenger, mediator, character witness, or proof of loyalty.",
                whyItMatters:
                  "It places the child in the middle of adult conflict and can create legal or supervision risk.",
                betterMove:
                  "Keep adult communication between adults and follow all court, custody, facility, and supervision rules.",
              },
              {
                mistake: "Promising outcomes you cannot control.",
                whyItMatters:
                  "Broken promises can damage trust more than honest uncertainty.",
                betterMove:
                  "Say, “I do not know yet, but I will tell you what I can when I know more.”",
              },
              {
                mistake:
                  "Letting relatives interrogate, shame, recruit, or gossip around the child.",
                whyItMatters:
                  "Children may internalize adult judgment as shame about themselves or their family.",
                betterMove:
                  "Set a direct boundary and remove the child from the conversation if needed.",
              },
            ]}
          />

<GuideCallout tone="legal" icon="⚠️" title="Do not coach a child">
            <p>
              Do not tell a child what to say to police, attorneys, caseworkers,
              custody evaluators, school officials, therapists, or court staff.
              If a child may be a witness, alleged victim, or involved in a
              custody or protection matter, get legal guidance before discussing
              facts of the case.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="trust"
          number="7"
          title="Rebuilding trust with children"
          subtitle="Children watch patterns more than promises. Small, kept commitments matter."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Trust is not rebuilt through one apology, one perfect visit, or
              one emotional conversation. It grows when adults tell the truth,
              keep small promises, repair missed expectations, and return to
              connection without demanding forgiveness.
            </p>

            <p>
              Children may want closeness one day and distance the next. That
              does not mean the effort is failing. It often means they are
              testing whether adults can stay steady while they have real
              feelings.
            </p>

            <p>
              In registry-affected families, trust rebuilding may also mean
              explaining why some ordinary family moments are complicated:
              school events, sleepovers, travel, internet use, neighborhood
              questions, or who can be present during visits. Keep the burden on
              adults: “These are adult rules for adults to manage.”
            </p>
          </GuideProse>

          <GuideCallout tone="success" icon="🌱" title="Micro-commitments">
            <p>
              One small promise kept consistently — a call when allowed, a
              letter, a bedtime routine, a school pickup, a meal, a check-in —
              usually rebuilds more safety than a big promise about the future.
            </p>
          </GuideCallout>

          <GuideChecklist
            id="trust-rebuilding"
            title="Trust rebuilding checklist"
            columns={1}
            items={[
              {
                id: "small",
                label:
                  "Make one small promise you can actually keep this week.",
              },
              {
                id: "calendar",
                label:
                  "Use a visible calendar for calls, visits, school events, or routines when appropriate.",
              },
              {
                id: "repair",
                label:
                  "If a promise is missed, acknowledge it without excuses and explain what happens next.",
              },
              {
                id: "feelings",
                label:
                  "Allow the child to feel angry, sad, embarrassed, loyal, loving, confused, or distant.",
              },
              {
                id: "rules",
                label:
                  "Name adult rules simply without making the child feel responsible for them.",
              },
              {
                id: "adult-support",
                label:
                  "Get adult support for adult pain so the child does not have to carry it.",
              },
            ]}
          />

          <ScriptBox
            title="Repair after a missed expectation"
            tone="soft"
            context="Use this when a call, visit, event, or promise falls through."
            script={`I said something would happen, and it did not happen.\n\nI can see how that hurt or disappointed you.\n\nI am sorry. Here is what I know now, and here is the next small thing I can do.`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="8"
          title="Resources and next steps"
          subtitle="Use outside support when children need more than one family conversation can provide."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Helpful child and family resources"
            description={
              <span>
                These resources can help caregivers find child-friendly
                language, trauma-aware support, crisis help, and family
                communication tools.
              </span>
            }
            resources={[
              {
                label: "HealthyChildren / AAP — Parent in Prison",
                href: sourceLinks[0].href,
                badge: "Medical",
                description:
                  "Caregiver guidance for supporting children when a parent is incarcerated.",
              },
              {
                label: "NCTSN — Families and Caregivers",
                href: sourceLinks[1].href,
                badge: "Trauma",
                description:
                  "Trauma-aware information for parents and caregivers supporting children.",
              },
              {
                label: "Sesame Workshop — Incarceration",
                href: sourceLinks[2].href,
                badge: "Child-friendly",
                description:
                  "Videos, printables, and activities for children and caregivers.",
              },
              {
                label: "Sesame Workshop — Visiting a Parent in Prison",
                href: sourceLinks[3].href,
                badge: "Visits",
                description:
                  "A child-friendly resource for preparing children for prison visits.",
              },
              {
                label: "Stop It Now! — Talking to Children and Teens",
                href: sourceLinks[4].href,
                badge: "Safety",
                description:
                  "Guidance on accurate, age-appropriate safety conversations.",
              },
              {
                label: "988 Suicide & Crisis Lifeline",
                href: sourceLinks[6].href,
                phone: "Call or text 988",
                badge: "Crisis",
                description:
                  "Immediate emotional crisis support for children, caregivers, and adults.",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "The SOLAR Family & Allies Guide",
                description:
                  "A broader roadmap for families supporting a loved one from arrest through reentry and beyond.",
                to: "/resources/family-support-guide",
              },
              {
                title: "Prison Communication, Mail, Visits & Monitoring",
                description:
                  "Use this for facility rules, monitored communication, visitation limits, and communication planning.",
                to: "/resources/prison-communication-mail-visits-monitoring",
              },
              {
                title: "Reentry Checklist",
                description:
                  "Use this when the family is preparing for release, supervision, housing, documents, and routines.",
                to: "/resources/reentry-checklist",
              },
              {
                title: "Mental Health & Support Directory",
                description:
                  "Use this to look for crisis support, therapy, peer support, and family resources.",
                to: "/resources/mental-health-directory",
              },
              {
                title: "Community Integration Tips",
                description:
                  "Use this for longer-term belonging, stigma, disclosure, and rebuilding community life.",
                to: "/resources/community-integration-tips",
              },
            ]}
          />

          <SourceList
            title="Sources & verification"
            note="These links should be rechecked before production publication. This guide uses current public pages where available and avoids relying on unsupported homepage-only citations."
            sources={sourceLinks}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}