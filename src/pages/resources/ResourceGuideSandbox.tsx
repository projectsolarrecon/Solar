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
  VerifyBeforeActing,
  OverviewCards,
  ResourceLinkGrid,
  RelatedGuides,
  SourceList,
} from "../../components/solar";

const officialLookupLinks = [
  {
    label: "Common Cause — Find Your Representative",
    description:
      "A broad lookup tool for federal, state, and local elected officials.",
    href: "https://www.commoncause.org/find-your-representative/",
    badge: "Lookup",
  },
  {
    label: "USA.gov — Elected Officials",
    description:
      "Official federal directory for finding federal, state, territorial, and local officials.",
    href: "https://www.usa.gov/elected-officials",
    badge: "Official",
  },
  {
    label: "U.S. House — Find Your Representative",
    description:
      "Official House lookup by ZIP code for your member of Congress.",
    href: "https://www.house.gov/representatives/find-your-representative",
    badge: "Official",
  },
  {
    label: "U.S. Senate — Contact Senators",
    description:
      "Official Senate directory for senator contact pages and office information.",
    href: "https://www.senate.gov/senators/senators-contact.htm",
    badge: "Official",
  },
  {
    label: "Congress.gov — Members",
    description:
      "Official congressional member and bill information from the Library of Congress.",
    href: "https://www.congress.gov/members",
    badge: "Official",
  },
  {
    label: "Open States / Plural — State Legislator Lookup",
    description:
      "A state-level lookup tool for finding state lawmakers and legislative districts.",
    href: "https://open.pluralpolicy.com/find_your_legislator/",
    badge: "State",
  },
];

const solarAdvocacyLinks = [
  {
    label: "SOLAR Advocacy Hub",
    description:
      "Use SOLAR advocacy tools, position statements, and campaign materials.",
    href: "/advocacy",
    badge: "SOLAR",
  },
  {
    label: "SOLAR Script Generator",
    description:
      "Draft a message to lawmakers and adapt it to your state, issue, and role.",
    href: "/advocacy#contact-congress",
    badge: "Tool",
  },
  {
    label: "SOLAR Position Statements",
    description:
      "Review SOLAR’s issue framing before drafting your own message.",
    href: "/advocacy#position-statement",
    badge: "SOLAR",
  },
  {
    label: "RECON — Register Every Convict Or None",
    description:
      "Read SOLAR’s equal-treatment argument about registry policy and public safety.",
    href: "/advocacy#recon",
    badge: "SOLAR",
  },
];

const evidenceAndPracticeSources = [
  {
    label: "DOJ SMART — Sex Offender Management Assessment and Planning Initiative",
    href: "https://smart.ojp.gov/somapi",
    description:
      "Federal SMART Office materials on sex offense policy, management, and research background.",
  },
  {
    label: "DOJ SMART — Adult Sex Offender Recidivism",
    href: "https://smart.ojp.gov/somapi/chapter-5-adult-sex-offender-recidivism",
    description:
      "Archived SMART Office chapter often used for background on recidivism research.",
  },
  {
    label: "BJS — Recidivism of Sex Offenders Released from State Prison: 9-Year Follow-Up",
    href: "https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf",
    description:
      "Bureau of Justice Statistics report frequently cited in registry and recidivism policy discussions.",
  },
  {
    label: "The Sentencing Project — Responding to Crimes of a Sexual Nature",
    href: "https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/",
    description:
      "Policy-focused report discussing prevention, accountability, punishment, and alternatives.",
  },
  {
    label: "Council of State Governments Justice Center — 50 States, 1 Goal",
    href: "https://csgjusticecenter.org/publications/state-recidivism-rates-2006-2022/",
    description:
      "State recidivism trends resource that can help advocates ask for data-driven policy.",
  },
  {
    label: "Congressional Management Foundation — Communicating with Congress",
    href: "https://www.congressfoundation.org/projects/communicating-with-congress",
    description:
      "Best-practice resource on how congressional offices receive and process constituent messages.",
  },
  {
    label: "U.S. Senate — Contacting Your Senators",
    href: "https://www.senate.gov/senators/senators-contact.htm",
    description:
      "Official Senate contact information and office access point.",
  },
  {
    label: "UC Berkeley Library — Contacting Elected Officials",
    href: "https://guides.lib.berkeley.edu/ContactOfficials",
    description:
      "Plain-language tips for contacting elected officials and preparing messages.",
  },
];

const policyIssueCards = [
  {
    eyebrow: "Registry expansion",
    title: "More people, longer terms, fewer off-ramps",
    icon: "📋",
    tone: "legal",
    description:
      "Speak against automatic expansion that increases public exposure without individualized review, evidence, or a clear safety purpose.",
  },
  {
    eyebrow: "Retroactive punishment",
    title: "New rules applied after sentencing",
    icon: "⚖️",
    tone: "warning",
    description:
      "Explain why changing rules years later can destabilize housing, work, family life, and reentry planning.",
  },
  {
    eyebrow: "Residency restrictions",
    title: "Housing bans that can create instability",
    icon: "🏠",
    tone: "urgent",
    description:
      "Ask lawmakers to reject blanket distance rules that push people away from housing, treatment, employment, transportation, and family support.",
  },
  {
    eyebrow: "Employment barriers",
    title: "Rules that block lawful work",
    icon: "🧰",
    tone: "info",
    description:
      "Advocate for fair hiring, licensing review, and work access that supports accountability and stability after punishment.",
  },
  {
    eyebrow: "Family separation",
    title: "Policies that punish households",
    icon: "👨‍👩‍👧",
    tone: "family",
    description:
      "Describe how broad restrictions can affect spouses, children, parents, caregivers, and people trying to maintain safe family relationships.",
  },
  {
    eyebrow: "Public notification",
    title: "Exposure without clear prevention",
    icon: "📣",
    tone: "warning",
    description:
      "Ask whether online exposure, broad alerts, or public shaming actually prevent harm or simply increase harassment and instability.",
  },
  {
    eyebrow: "Deregistration",
    title: "Meaningful paths to review and relief",
    icon: "🛤️",
    tone: "success",
    description:
      "Support individualized relief pathways based on time offense-free, conduct, treatment progress, risk review, and due process.",
  },
  {
    eyebrow: "Evidence and data",
    title: "Require proof before expanding restrictions",
    icon: "📊",
    tone: "research",
    description:
      "Ask lawmakers to demand data, fiscal notes, constitutional review, and real prevention evidence before passing new restrictions.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Legislative Advocacy Guide | The SOLAR Project"
        description="A plain-language SOLAR guide for people affected by sex offense laws who want to contact lawmakers with clear, respectful, evidence-aware messages."
        keywords="sex offense registry advocacy, legislative advocacy, registry reform, residency restrictions, reentry, sex offense policy, SOLAR Project"
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
            Legislative Advocacy Guide
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            You do not have to be an activist or policy expert to contact a
            lawmaker. This guide helps people affected by sex offense laws use
            their voice clearly, safely, and practically.
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

        <GuideIntro title="Start here: you do not have to be an activist" icon="🧭">
          <p>
            Many people arrive at sex offense policy after something has already
            happened to them or someone they love: an accusation, conviction,
            sentence, registry requirement, supervision condition, housing loss,
            family disruption, or a proposed law that would make life even more
            unstable.
          </p>

          <p>
            Advocacy does not mean excusing harm, denying victims, or asking for
            no accountability. It means asking whether a law actually prevents
            harm, supports accountability, protects families, and helps people
            build stable lives after punishment.
          </p>

          <p>
            Your message does not have to explain everything. A short, respectful,
            local message with one clear ask can help lawmakers understand what
            these laws do in real life.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you want to contact a lawmaker this week"
          subtitle="Start small. One message to the right office is better than a perfect message you never send."
          icon="⚡"
          urgentActions={[
            <span key="find">
              Find your state legislator first if the issue involves registry
              rules, residency restrictions, removal from the registry, state
              supervision law, or local reentry barriers.
            </span>,
            <span key="one-ask">
              Pick one issue and one clear ask. Do not try to explain every
              unfair part of the system in the same message.
            </span>,
            <span key="local">
              Add your city or ZIP code and one sentence about real-life impact:
              housing, work, family, treatment, safety, or reentry stability.
            </span>,
          ]}
          nextActions={[
            <span key="source">
              Add one credible source or ask the office to require evidence
              before expanding restrictions.
            </span>,
            <span key="reply">
              Ask for a written reply, staff call, or the lawmaker’s position on
              the bill or issue.
            </span>,
            <span key="save">
              Save what you sent, the date, the office contacted, and any reply.
            </span>,
          ]}
          reminder={
            <span>
              You are allowed to be emotional. The message works better when the
              words stay calm, specific, and focused on real public safety.
            </span>
          }
        />

        <GuideCallout tone="legal" icon="⚖️" title="Before you share personal details">
          <p>
            If you have a pending case, active appeal, open investigation, strict
            supervision condition, no-contact order, internet restriction, or
            unresolved registration question, talk with a lawyer or supervising
            authority before sharing details that could create risk. You can
            still advocate by speaking generally, using family impact language,
            or asking evidence-based questions.
          </p>
        </GuideCallout>

<GuideSectionHeader
          id="what-lawmakers-can-change"
          number="1"
          title="What lawmakers can actually change"
          subtitle="Different offices control different parts of the system. Matching your ask to the right level helps your message land."
        />

        <GuideSectionCard>
          <OverviewCards
            columns={2}
            cards={[
              {
                eyebrow: "State lawmakers",
                title: "Registry law, restrictions, relief, and reentry barriers",
                icon: "🏛️",
                tone: "legal",
                description:
                  "State legislatures usually control registration rules, duration, reporting duties, residency restrictions, deregistration paths, state supervision law, and many collateral consequences.",
              },
              {
                eyebrow: "Local officials",
                title: "Ordinances, zoning, public meetings, and local implementation",
                icon: "📍",
                tone: "info",
                description:
                  "City councils, county boards, and local agencies may shape housing restrictions, park/library rules, meeting agendas, zoning, shelter access, and how state law is enforced locally.",
              },
              {
                eyebrow: "Congress",
                title: "Federal standards, funding, and national policy pressure",
                icon: "🇺🇸",
                tone: "research",
                description:
                  "Congress may affect federal registry standards, funding incentives, interstate systems, federal supervision, federal sentencing policy, and national agency priorities.",
              },
              {
                eyebrow: "Agencies",
                title: "Forms, guidance, procedures, and practical rules",
                icon: "🗂️",
                tone: "neutral",
                description:
                  "Agencies often decide how rules are explained, what forms are used, how records are handled, and how people are told to comply. Some advocacy asks belong there, not with a legislator.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🎯" title="Aim your ask at the right office">
            <p>
              If your issue is a state registry law, start with state lawmakers.
              If your issue is a city ordinance, start with the city or county.
              If your issue is a proposed federal bill, contact your U.S. House
              member and senators. If your issue is a confusing form or agency
              practice, the agency may be the first place to ask.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="what-makes-this-different"
          number="2"
          title="What makes sex offense advocacy different"
          subtitle="This is not generic criminal justice advocacy. The politics, stigma, and safety claims are different, so the message needs care."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Sex offense policy is often written in a climate of fear. Lawmakers
              may hear emotional news stories, campaign pressure, police or
              prosecutor talking points, and broad claims about public safety.
              They may hear much less from families, people on registries,
              treatment providers, reentry workers, researchers, and people
              living with the day-to-day consequences of these laws.
            </p>

            <p>
              A useful message does not argue that harm is not serious. It argues
              that serious harm deserves serious policy: evidence, prevention,
              accountability, treatment, constitutional limits, individualized
              review, stable reentry, and rules that do not punish families for
              the rest of their lives.
            </p>

            <p>
              Your goal is not to win every argument in one email. Your goal is
              to help an office see a concrete issue differently: how a proposed
              law would affect housing, work, family, treatment, transportation,
              compliance, prevention, or the ability to live safely after
              punishment.
            </p>
          </GuideProse>

          <SoftDivider />

          <OverviewCards
            columns={3}
            cards={[
              {
                eyebrow: "Do not minimize harm",
                title: "Stay morally clear",
                icon: "🧭",
                tone: "neutral",
                description:
                  "Acknowledge that sexual harm is serious. Then explain why fear-based policy can still be ineffective, overbroad, or destructive.",
              },
              {
                eyebrow: "Do not overexplain",
                title: "Make one ask",
                icon: "✉️",
                tone: "info",
                description:
                  "Staff can process a clear message faster than a long personal history. One issue, one ask, one local impact line is enough.",
              },
              {
                eyebrow: "Do not argue from shame",
                title: "Use dignity and facts",
                icon: "📚",
                tone: "research",
                description:
                  "The strongest message connects human impact to evidence, prevention, public safety, and constitutional fairness.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="choose-one-ask"
          number="3"
          title="Choose one clear ask"
          subtitle="A lawmaker or staff member should be able to summarize your request in one sentence."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Start by choosing the policy issue you want the office to act on.
              You can speak from personal experience, family experience,
              professional experience, or community concern. The important part
              is to keep the ask specific.
            </p>
          </GuideProse>

          <OverviewCards columns={2} cards={policyIssueCards} />

          <GuideCallout tone="info" icon="✍️" title="Examples of clear asks">
            <GuideProse>
              <ul>
                <li>
                  Please oppose blanket residency restrictions that make housing
                  and reentry less stable.
                </li>
                <li>
                  Please oppose retroactive registry expansions that change the
                  consequences after sentencing.
                </li>
                <li>
                  Please support individualized registry relief and meaningful
                  review pathways.
                </li>
                <li>
                  Please require data, fiscal notes, and constitutional review
                  before expanding sex offense restrictions.
                </li>
                <li>
                  Please protect families from unnecessary collateral punishment
                  when they are supporting safe reentry.
                </li>
              </ul>
            </GuideProse>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="build-message"
          number="4"
          title="Build a message staff can actually use"
          subtitle="Short, local, respectful messages are easier for offices to record, forward, and respond to."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              A good advocacy message is not a legal brief. It is a clear
              constituent communication. It tells the office who you are, what
              you are asking for, why it matters, and how to follow up.
            </p>
          </GuideProse>

          <GuideChecklist
            id="seven-part-message"
            title="The seven-part structure"
            columns={1}
            items={[
              {
                id: "intro",
                label:
                  "Introduce yourself by role and location: constituent, family member, person affected by registry law, professional, faith leader, provider, or concerned resident.",
              },
              {
                id: "ask",
                label:
                  "Make one clear ask: oppose, support, amend, study, delay, require data, or meet with impacted people.",
              },
              {
                id: "impact",
                label:
                  "Add one lived-experience line about housing, work, family, compliance, treatment, safety, or reentry.",
              },
              {
                id: "evidence",
                label:
                  "Use one or two credible sources at most. Do not bury the message in links.",
              },
              {
                id: "safety",
                label:
                  "Explain the public-safety reason: stability, prevention, individualized review, due process, or better use of resources.",
              },
              {
                id: "reply",
                label:
                  "Ask for a reply, staff call, meeting, or the lawmaker’s position.",
              },
              {
                id: "contact",
                label:
                  "Include your name, city, ZIP code, and safe contact information.",
              },
            ]}
          />

          <GuideCallout tone="family" icon="👪" title="For family members and loved ones">
            <p>
              You do not have to disclose every detail of your loved one’s case.
              You can focus on what the law does to the household: housing loss,
              child stability, caregiving, transportation, employment, treatment
              access, or the ability to follow rules successfully.
            </p>
          </GuideCallout>

          <VerifyBeforeActing
            whoToAsk="A lawyer, supervising officer, case manager, or trusted advocate if you are unsure whether a message could affect a pending case, supervision condition, registration duty, or safety plan."
            whatToAsk="Ask whether it is safe to identify yourself, mention your loved one, discuss case details, use email, attend a meeting, or publish testimony."
            whatToSave="Save the guidance you receive, the date, the person’s name or office, and a copy of any message you send."
          />
        </GuideSectionCard>

<GuideSectionHeader
          id="tell-story-safely"
          number="5"
          title="Tell your story without oversharing"
          subtitle="Personal experience can matter, but you do not need to expose private details to be effective."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People affected by sex offense laws often feel pressure to explain
              everything because the system can feel arbitrary and unfair. But
              legislative offices usually need a short, usable message. You can
              be honest without giving details that are private, graphic, legally
              risky, or unnecessary.
            </p>

            <p>
              A safe personal sentence usually names the impact, not the full
              history. For example: “This restriction would make it harder for my
              family to keep stable housing,” or “A clear relief process would
              give people who have remained offense-free a reason to keep
              building a stable life.”
            </p>
          </GuideProse>

          <OverviewCards
            columns={2}
            cards={[
              {
                eyebrow: "Safer to share",
                title: "Impact, location, and policy concern",
                icon: "✅",
                tone: "success",
                description:
                  "Housing instability, work barriers, family impact, confusing compliance rules, lack of review, and why the proposed policy would help or hurt public safety.",
              },
              {
                eyebrow: "Be careful with",
                title: "Case details, names, and admissions",
                icon: "⚠️",
                tone: "warning",
                description:
                  "Pending cases, victim identities, disputed facts, supervision details, treatment records, addresses, school names, workplace names, or anything a court order limits.",
              },
            ]}
          />

          <GuideChecklist
            id="before-you-send"
            title="Before you send"
            columns={1}
            items={[
              {
                id: "one-ask",
                label: "Can a staff member identify your one clear ask?",
              },
              {
                id: "not-too-long",
                label:
                  "Is the message short enough to read quickly: about 150–250 words for an email or one to two minutes for a call?",
              },
              {
                id: "local",
                label: "Did you include your city or ZIP code?",
              },
              {
                id: "one-impact",
                label:
                  "Did you include one practical impact instead of your whole life story?",
              },
              {
                id: "respectful",
                label:
                  "Would the message still sound respectful if read aloud at a public meeting?",
              },
              {
                id: "safe",
                label:
                  "Did you remove details that could create legal, privacy, supervision, family, or safety risk?",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="scripts"
          number="6"
          title="Scripts you can copy"
          subtitle="Use these as starting points. Replace bracketed text and keep the message focused."
        />

        <GuideSectionCard>
          <ScriptBox
            title="Phone call: oppose blanket residency restrictions"
            tone="neutral"
            context="Use this when a bill, ordinance, or public meeting is moving quickly."
            script={`Hello, my name is [NAME], and I live in [CITY/ZIP]. I am calling about [BILL NUMBER / ORDINANCE / ISSUE].

Please oppose blanket residency restrictions for people on sex offense registries. These rules can push people away from stable housing, family support, work, treatment, and transportation. That instability can make compliance harder and does not create the kind of prevention our community needs.

I support accountability and real public safety. I am asking [REPRESENTATIVE/SENATOR/COUNCIL MEMBER NAME] to oppose blanket restrictions and support evidence-based, individualized policy instead.

Can you please record my position and let me know where the office stands on this issue?`}
          />

          <ScriptBox
            title="Email or contact form: support registry relief and review"
            tone="neutral"
            context="Use this when asking for individualized review, removal pathways, or limits on permanent public punishment."
            script={`Subject: Please support individualized registry review

Dear [TITLE AND NAME],

My name is [NAME], and I live in [CITY/ZIP]. I am writing as [a person affected by registry law / a family member / a concerned constituent / a provider / a community member].

Please support a meaningful, individualized process for registry relief. People who have completed their sentence, followed the law, remained offense-free, and built stable lives should have a fair way to ask for review.

Permanent public registration can affect housing, work, family stability, transportation, and safety long after punishment is complete. A review process does not erase accountability. It asks whether continued public registration is still necessary, evidence-based, and proportionate.

I urge you to support policies that include due process, individualized risk review, clear eligibility rules, and a path for people who demonstrate long-term stability.

Please let me know your position on this issue.

Thank you,
[NAME]
[CITY/ZIP]
[SAFE CONTACT INFORMATION]`}
          />

          <ScriptBox
            title="Email or letter: require evidence before expanding restrictions"
            tone="neutral"
            context="Use this when a legislature is considering a new restriction, expansion, public-notification rule, or retroactive change."
            script={`Subject: Please require evidence before expanding sex offense restrictions

Dear [TITLE AND NAME],

My name is [NAME], and I live in [CITY/ZIP]. I am writing about [BILL NUMBER / ISSUE].

Sexual harm is serious, and prevention matters. That is why I am asking you to require evidence before expanding registry restrictions, residency bans, public notification, or retroactive penalties.

Before passing new restrictions, lawmakers should ask: What problem does this solve? What evidence shows it will prevent harm? What are the housing, employment, family, treatment, compliance, and fiscal impacts? Will this apply retroactively? Is there individualized review? Are there safer and more effective alternatives?

Fear-based laws can sound protective while making reentry less stable and families less secure. Please support prevention-focused, evidence-based policy instead of automatic expansion.

I would appreciate a reply with your position on this issue.

Sincerely,
[NAME]
[CITY/ZIP]
[SAFE CONTACT INFORMATION]`}
          />

          <ScriptBox
            title="Family member script: explain household impact"
            tone="neutral"
            context="Use this when you want to speak as a spouse, parent, adult child, caregiver, or loved one without sharing private case details."
            script={`Dear [TITLE AND NAME],

My name is [NAME], and I live in [CITY/ZIP]. I am writing as a family member affected by sex offense registry laws.

I support accountability and safety. I also want lawmakers to understand that broad restrictions often affect entire families, including spouses, children, parents, and caregivers who were not convicted of anything.

When rules make housing, work, transportation, or family contact unstable, the burden does not fall on one person alone. It can affect children’s routines, caregiving, finances, mental health, and the ability of a household to stay safe and compliant.

Please consider the family impact before expanding registry restrictions, residency bans, public notification, or retroactive requirements. I ask you to support individualized, evidence-based policy that protects the public without creating unnecessary collateral harm.

Thank you for your time,
[NAME]
[CITY/ZIP]
[SAFE CONTACT INFORMATION]`}
          />

          <ScriptBox
            title="RECON framing: Register Every Convict Or None"
            tone="neutral"
            context="Use carefully. This is strongest when framed as an equal-treatment and evidence question, not as a slogan alone."
            script={`Dear [TITLE AND NAME],

My name is [NAME], and I live in [CITY/ZIP]. I am asking you to examine the fairness and evidence behind public registry policy.

SOLAR’s RECON position means Register Every Convict Or None. The point is not that every conviction should lead to a public registry. The point is that sex offense registries single out one category of conviction for public exposure and long-term collateral punishment while many other serious offenses do not trigger the same public system.

If public registries are truly necessary for safety, lawmakers should be able to explain why the rule applies here, why it does not apply elsewhere, what evidence supports it, and whether less harmful prevention strategies would work better.

Please support policy that is evidence-based, individualized, constitutional, and focused on real prevention rather than permanent public punishment.

Sincerely,
[NAME]
[CITY/ZIP]
[SAFE CONTACT INFORMATION]`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes"
          number="7"
          title="Mistakes that can weaken your message"
          subtitle="These are common, especially when someone is scared, angry, exhausted, or newly affected by the system."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="common-mistakes"
            title="Try to avoid"
            columns={1}
            items={[
              {
                id: "everything",
                label:
                  "Trying to explain every injustice at once. Pick one issue and one ask.",
              },
              {
                id: "minimize",
                label:
                  "Minimizing harm or sounding dismissive of victims. Stay clear that prevention and accountability matter.",
              },
              {
                id: "angry",
                label:
                  "Sending insults, threats, or all-caps anger. Anger is understandable, but hostile messages are easy to dismiss.",
              },
              {
                id: "stats",
                label:
                  "Using too many statistics. One credible source and one local impact line are usually stronger.",
              },
              {
                id: "overshare",
                label:
                  "Sharing case facts, names, addresses, treatment details, or supervision information that does not need to be shared.",
              },
              {
                id: "wrong-office",
                label:
                  "Contacting the wrong level of government. State registry law usually belongs with state lawmakers, not Congress.",
              },
              {
                id: "silence",
                label:
                  "Assuming silence means your message did not matter. Offices often log constituent contacts even when replies are slow or generic.",
              },
            ]}
          />

          <GuideCallout tone="reminder" icon="🕯️" title="You do not have to carry the whole issue alone">
            <p>
              Advocacy in this area can be emotionally heavy. A short message,
              one phone call, one public comment, or one follow-up is still real
              participation. Consistency matters more than intensity.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="follow-up"
          number="8"
          title="Follow up without burning out"
          subtitle="A simple recordkeeping habit helps you stay organized and protects your energy."
        />

        <GuideSectionCard>
          <GuideChecklist
            id="follow-up-checklist"
            title="After you contact an office"
            columns={1}
            items={[
              {
                id: "save-copy",
                label: "Save a copy or screenshot of what you sent.",
              },
              {
                id: "log-office",
                label:
                  "Write down the official’s name, office, staff member if known, date, and contact method.",
              },
              {
                id: "calendar",
                label:
                  "Put one polite follow-up reminder on your calendar for one to two weeks later.",
              },
              {
                id: "track-position",
                label:
                  "If the office replies, save the response and note whether they supported, opposed, avoided, or misunderstood your ask.",
              },
              {
                id: "share-carefully",
                label:
                  "Share updates with trusted people, but avoid posting private legal or family details publicly.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="🌱" title="A small message can still be useful">
            <p>
              Lawmakers may never fully understand this issue unless affected
              people and families speak. Your message can add one more real-life
              data point against fear-based policy.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="offline-limited-access"
          number="9"
          title="If internet access, privacy, or supervision is limited"
          subtitle="You can still participate even if you are phone-only, without a printer, relying on a helper, incarcerated, or under restrictions."
        />

        <GuideSectionCard>
          <OfflineOptions
            title="Lower-internet and paper-based options"
            items={[
              "Call the district office and ask for the best mailing address, staff contact, or public-comment instructions.",
              "Ask a public library, legal aid office, reentry organization, faith community, or trusted helper to print a bill, meeting agenda, or letter.",
              "Use a paper notebook to track names, dates, offices, phone numbers, bill numbers, and what each office told you.",
              "If you are incarcerated, ask whether family, counsel, clergy, or an approved outside contact can print materials or mail a letter for you.",
              "If you are under supervision or internet restrictions, verify what contact methods are allowed before using online forms, public comment systems, or social media.",
              "If you cannot safely identify yourself, consider a shorter message focused on policy impact, family impact, or evidence questions rather than personal case details.",
            ]}
          />

          <GuideCallout tone="privacy" icon="🔒" title="Privacy reminder">
            <p>
              Public comment, hearing testimony, emails to public offices, and
              online forms may become records. Do not include private addresses,
              victim names, children’s details, treatment information, disputed
              case facts, or anything a court or supervision condition limits.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="find-officials"
          number="10"
          title="Find officials, track bills, and keep going"
          subtitle="Use official lookup tools first, then use SOLAR resources to shape the message."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Find the right official"
            resources={officialLookupLinks}
          />

          <SoftDivider />

          <ResourceLinkGrid
            title="SOLAR advocacy tools"
            resources={solarAdvocacyLinks}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="sources"
          number="11"
          title="Sources and related guides"
          subtitle="Use sources to support the message, not to overwhelm it."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              For most lawmaker messages, one credible source is enough. Choose a
              source that matches your ask: recidivism data for registry
              expansion, local impact for housing rules, constitutional concerns
              for retroactive punishment, or reentry research for employment and
              stability.
            </p>
          </GuideProse>

          <ResourceLinkGrid
            title="Evidence and advocacy practice resources"
            resources={[
              {
                label: "DOJ SMART — SOMAPI",
                description:
                  "Federal sex offense management and research background materials.",
                href: "https://smart.ojp.gov/somapi",
                badge: "Federal",
              },
              {
                label: "BJS — 9-Year Recidivism Follow-Up",
                description:
                  "Federal report often cited in registry and recidivism policy discussions.",
                href: "https://bjs.ojp.gov/content/pub/pdf/rsorsp9yfu0514.pdf",
                badge: "Federal",
              },
              {
                label: "The Sentencing Project",
                description:
                  "Policy report on responding to crimes of a sexual nature.",
                href: "https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/",
                badge: "Research",
              },
              {
                label: "CSG Justice Center — 50 States, 1 Goal",
                description:
                  "State recidivism trend resource for data-driven policy conversations.",
                href: "https://csgjusticecenter.org/publications/state-recidivism-rates-2006-2022/",
                badge: "Research",
              },
              {
                label: "Congressional Management Foundation",
                description:
                  "Best-practice guidance on how congressional offices process constituent communication.",
                href: "https://www.congressfoundation.org/projects/communicating-with-congress",
                badge: "Practice",
              },
              {
                label: "UC Berkeley Library — Contacting Officials",
                description:
                  "Plain-language tips for preparing and sending messages to elected officials.",
                href: "https://guides.lib.berkeley.edu/ContactOfficials",
                badge: "Guide",
              },
            ]}
          />

          <SoftDivider />

          <RelatedGuides
            guides={[
              {
                title: "SOLAR Advocacy Hub",
                description:
                  "Use SOLAR’s advocacy tools, position statements, and issue campaigns.",
                to: "/advocacy",
              },
              {
                title: "SOLAR Script Generator",
                description:
                  "Draft a lawmaker message and adapt it to your role, state, and issue.",
                to: "/advocacy#contact-congress",
              },
              {
                title: "SOLAR Position Statements",
                description:
                  "Review SOLAR’s public policy framing before writing your own message.",
                to: "/advocacy#position-statement",
              },
              {
                title: "RECON",
                description:
                  "Explore SOLAR’s Register Every Convict Or None position and equal-treatment argument.",
                to: "/advocacy#recon",
              },
            ]}
          />

          <SoftDivider />

          <SourceList
            note="External links should be reviewed periodically before publication. Some research sources are useful background but may be archived or updated over time."
            sources={[
              ...evidenceAndPracticeSources,
              {
                label: "Common Cause — Find Your Representative",
                href: "https://www.commoncause.org/find-your-representative/",
                description:
                  "Representative lookup tool used in the official lookup section.",
              },
              {
                label: "USA.gov — Elected Officials",
                href: "https://www.usa.gov/elected-officials",
                description:
                  "Official directory for federal, state, territorial, and local elected officials.",
              },
              {
                label: "U.S. House — Find Your Representative",
                href: "https://www.house.gov/representatives/find-your-representative",
                description:
                  "Official House lookup tool for congressional representatives.",
              },
              {
                label: "U.S. Senate — Contact Senators",
                href: "https://www.senate.gov/senators/senators-contact.htm",
                description:
                  "Official Senate contact directory.",
              },
              {
                label: "Congress.gov — Members",
                href: "https://www.congress.gov/members",
                description:
                  "Official member and bill lookup from the Library of Congress.",
              },
              {
                label: "Open States / Plural — Find Your Legislator",
                href: "https://open.pluralpolicy.com/find_your_legislator/",
                description:
                  "State legislator lookup tool used for state advocacy.",
              },
            ]}
          />
        </GuideSectionCard>
      </main>
    </div>
  );
}