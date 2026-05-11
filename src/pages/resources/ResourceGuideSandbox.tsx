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
  RedFlagGreenFlag,
  DualDepthSection,
} from "../../components/solar";

const sourceLinks = [
  {
    label: "Federal Bureau of Prisons — Sex Offender Treatment Programs",
    href: "https://www.bop.gov/inmates/custody_and_care/sex_offenders.jsp",
    description:
      "Official BOP overview of residential and non-residential sex offender treatment programming.",
  },
  {
    label: "BOP Program Statement 5324.10 — Sex Offender Programs",
    href: "https://www.bop.gov/policy/progstat/5324_010.pdf",
    description:
      "Official BOP policy on sex offender management, assessment, treatment, and specialized correctional management.",
  },
  {
    label: "BOP Program Statement 5290.14 — Admission and Orientation Program",
    href: "https://www.bop.gov/policy/progstat/5290_014.pdf",
    description:
      "Official BOP policy describing admission and orientation expectations for people entering federal custody.",
  },
  {
    label: "eCFR — National Standards to Prevent, Detect, and Respond to Prison Rape",
    href: "https://www.ecfr.gov/current/title-28/chapter-I/part-115",
    description:
      "Federal PREA standards, including facility obligations around sexual safety, reporting, screening, and response.",
  },
  {
    label: "PREA Resource Center — Reporting to Other Confinement Facilities",
    href: "https://www.prearesourcecenter.org/standard/115-63",
    description:
      "Plain-language PREA resource explaining reporting duties when abuse allegations involve another confinement facility.",
  },
  {
    label: "Bureau of Justice Assistance — PREA Overview",
    href: "https://bja.ojp.gov/program/prea/overview",
    description:
      "Federal overview of the Prison Rape Elimination Act and national implementation support.",
  },
  {
    label: "National Institute of Corrections — Reentry Resources",
    href: "https://nicic.gov/resources/resources-topics-and-roles/topics/reentry",
    description:
      "Federal correctional resources related to reentry planning, transition, and correctional practice.",
  },
];

const languageTerms = [
  {
    term: "Check in",
    means:
      "Asking staff for protective custody, separation, or removal from a unit because of safety concerns.",
    notMean:
      "It does not mean you are weak, doomed, or have failed. It also does not mean every uncomfortable moment requires protective custody.",
    response:
      "Do not use it as a drama phrase. If there is a real threat, sexual pressure, extortion, assault risk, or targeted harassment, use the safest official reporting or separation channel available.",
  },
  {
    term: "Chomo",
    means:
      "A hostile prison slur often aimed at people with child-sex-related convictions, sometimes used inaccurately or just to provoke a reaction.",
    notMean:
      "It does not mean the person saying it knows your case. It does not automatically mean violence is about to happen.",
    response:
      "Do not argue the facts of your case in the dayroom. Do not explain details. Use a short, boring response and disengage.",
  },
  {
    term: "Paperwork",
    means:
      "Legal or case documents people may use to identify a charge, conviction, cooperation history, or sentence details.",
    notMean:
      "Not every request for paperwork is official. Not every incarcerated person has a right to see your documents.",
    response:
      "Know what documents you have and what you are allowed to possess. Do not fake paperwork. Do not casually pass around sensitive legal papers.",
  },
  {
    term: "PC / protective custody",
    means:
      "A safety housing status or separation process used when someone may not be safe in a regular housing setting.",
    notMean:
      "It is not always a simple safety upgrade. It can help with immediate danger, but it may also bring restrictions or program tradeoffs.",
    response:
      "If safety is at issue, ask staff what options exist: separation, a move, investigation, PREA report, mental-health contact, or formal protective custody.",
  },
  {
    term: "Kite",
    means:
      "A written request, note, grievance, medical slip, counselor request, or other written communication, depending on the facility.",
    notMean:
      "It does not always mean an official grievance. Facility language varies.",
    response:
      "Use official forms for serious issues. Write down when you submitted it, who received it, and what it said.",
  },
  {
    term: "Car",
    means:
      "A group connected by race, geography, gang affiliation, prison politics, or shared background.",
    notMean:
      "You do not need to join a group to survive. A friendly cluster is not the same thing as an obligation.",
    response:
      "Be respectful without joining drama. Avoid favors, messages, contraband, debt, or holding property.",
  },
  {
    term: "Store / commissary / on the books",
    means:
      "Commissary goods, informal lending, trade, debt, or someone tracking what another person owes.",
    notMean:
      "A small snack is not always just kindness. It may become leverage.",
    response:
      "Do not borrow, lend, run tabs, or let someone use your account, PIN, phone, or commissary.",
  },
  {
    term: "Shot caller",
    means:
      "A person with informal influence in a group or housing unit.",
    notMean:
      "They are not staff and do not have official authority over you.",
    response:
      "Stay respectful and boring. Do not seek protection, favors, permission, or status.",
  },
  {
    term: "Cellie / bunkie",
    means:
      "A cellmate or bunkmate.",
    notMean:
      "It does not automatically mean friend, ally, or trusted person.",
    response:
      "Respect space. Keep clean. Ask before touching anything. Do not casually discuss sex, charges, money, or family details.",
  },
  {
    term: "Snitch",
    means:
      "A label used for someone accused of cooperating, reporting, or violating prison norms.",
    notMean:
      "It may be used loosely, falsely, or strategically.",
    response:
      "Do not debate labels. Do not discuss other people’s cases. If there is a real safety threat, use official safety channels and document what happened.",
  },
  {
    term: "Active yard",
    means:
      "A yard or unit where prison politics, gang or racial dynamics, violence, debt enforcement, or informal rules are especially present.",
    notMean:
      "It does not mean violence is constant or unavoidable. It also does not mean every person there is gang-involved.",
    response:
      "Move slowly. Watch routines before joining activities. Avoid debts, gambling, favors, gossip, group politics, and performative toughness.",
  },
  {
    term: "Affiliated",
    means:
      "Connected to a gang, prison group, street organization, or sometimes a racial or geographic group.",
    notMean:
      "It does not always mean someone is violent. It also does not mean you should claim an affiliation or accept obligations.",
    response:
      "Do not falsely claim membership or connections. Do not carry messages, hold property, accept protection, or take sides.",
  },
  {
    term: "Dropout",
    means:
      "Someone who left a gang or prison group, debriefed, entered protective housing, or is no longer considered active by a group.",
    notMean:
      "It does not tell you the whole story. It does not automatically mean the person is safe, unsafe, truthful, or untrustworthy.",
    response:
      "Do not ask for details. Do not repeat labels. Do not get pulled into another person’s politics.",
  },
  {
    term: "GP / general population",
    means:
      "Ordinary prison housing, separate from protective custody, segregation, reception, medical, mental-health, or special housing.",
    notMean:
      "It does not mean safe or unsafe by itself. Conditions vary by facility, unit, custody level, and local dynamics.",
    response:
      "Learn the unit before assuming anything. Ask official questions about rules, movement, programs, and safety options.",
  },
  {
    term: "Politics",
    means:
      "Informal power structures and expectations inside: race, geography, gangs, debts, seating, messages, conflicts, and group pressure.",
    notMean:
      "It does not mean you need to understand or participate in everything. It also does not override official rules.",
    response:
      "Observe first. Do not take sides. Do not carry messages. Do not gossip. Do not repeat what you hear.",
  },
];

export default function ResourceGuideSandbox(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="Prison Survival Guide for People with Sex-Offense Convictions | The SOLAR Project"
        description="A calm, practical prison preparation and survival guide for people with sex-offense convictions and the families supporting them."
        keywords="prison survival guide, sex offense conviction prison, prison dos and donts, protective custody, PREA, reentry planning, prison family support"
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
            Incarceration & Reentry
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Prison Survival Guide for People with Sex-Offense Convictions
          </h1>

          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-100 leading-relaxed">
            Dos, don’ts, routines, boundaries, prison language, and family preparation for getting through incarceration safely and steadily.
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
            If you are reading this before prison, you may be scared. Your family may be terrified. That fear is understandable. Prison is serious, and no guide can promise that everything will be easy.
          </p>
          <p>
            But fear is not the same thing as a forecast. Many people get through prison by becoming steady, quiet, clean, respectful, and consistent. This guide is built around that kind of survival: not toughness, not performance, not denial — just daily choices that reduce risk and help you keep your mind intact.
          </p>
          <p>
            This guide is for people entering state or federal prison after a sex-offense conviction, people already inside who need a grounded reference, and families trying to understand what to expect without relying on internet horror stories.
          </p>
        </GuideIntro>

        <QuickStartPanel
          title="If you remember nothing else"
          subtitle="These four principles carry most of the guide. They are simple, but they matter."
          icon="⚓"
          urgentActions={[
            <span>
              <strong>Calm is currency.</strong> Move slowly, speak plainly, and do not perform anger or toughness.
            </span>,
            <span>
              <strong>Routine is safety.</strong> Work, shower, exercise, write, sleep, and repeat.
            </span>,
            <span>
              <strong>Debt is danger.</strong> Do not borrow, lend, gamble, run tabs, share PINs, or accept “protection.”
            </span>,
            <span>
              <strong>Honest but brief is safer than lying.</strong> Do not give graphic details. Do not invent a different charge.
            </span>,
          ]}
          nextActions={[
            <span>Learn the written rules during orientation and ask official questions when something affects your safety, discipline, release, or treatment programming.</span>,
            <span>Keep family contact steady and boring: predictable calls, short updates, and practical planning instead of panic.</span>,
          ]}
          reminder={
            <span>
              You do not have to solve the whole sentence today. The first job is to get through the next day without debt, drama, lies, or avoidable conflict.
            </span>
          }
        />

        <OverviewCards
          columns={3}
          cards={[
            {
              eyebrow: "Different",
              title: "Sex-offense convictions carry stigma",
              icon: "⚠️",
              tone: "warning",
              description:
                "People may use ugly labels. Your case may affect placement, programming, paperwork questions, and post-release restrictions.",
            },
            {
              eyebrow: "Also true",
              title: "Most daily safety rules are ordinary",
              icon: "🧼",
              tone: "info",
              description:
                "Cleanliness, debt avoidance, privacy, quiet routine, and respectful boundaries matter no matter what your conviction is.",
            },
            {
              eyebrow: "Safest posture",
              title: "Boring, steady, and accountable",
              icon: "🛠️",
              tone: "success",
              description:
                "You are not there to win arguments, prove yourself, or become someone else. You are there to do your time and come home alive, stable, and prepared.",
            },
          ]}
        />

        <PullQuoteBlock>
          The goal is not to look fearless. The goal is to become predictable, respectful, debt-free, and hard to pull into drama.
        </PullQuoteBlock>

        <GuideCallout tone="legal" icon="⚖️" title="This is a practical guide, not legal advice">
          <p>
            Prison rules differ by state, facility, custody level, housing unit, staff practice, and individual circumstances. Verify facility rules, classification decisions, treatment eligibility, PREA reporting options, grievance steps, and reentry requirements with the people or offices that actually control them.
          </p>
        </GuideCallout>

<GuideSectionHeader
          id="what-is-different"
          number="1"
          title="What is different — and what is not"
          subtitle="Sex-offense stigma is real. It is also not the only thing shaping prison life."
        />

        <GuideSectionCard>
          <DualDepthSection
            simpleTitle="Plain-language version"
            deepTitle="A little more detail"
            simple={
              <GuideProse>
                <p>
                  Some things may be different for people with sex-offense convictions. You may hear slurs. People may ask about paperwork. You may be assigned to a facility, unit, or program where many people have similar convictions. You may also face sex-offender treatment, registration, supervision, and housing issues after release.
                </p>
                <p>
                  But prison is not only about your conviction. Many everyday conflicts come from debt, drugs, disrespect, gossip, property, noise, hygiene, and people getting pulled into other people’s problems. Those are areas where your choices matter every day.
                </p>
              </GuideProse>
            }
            deep={
              <GuideProse>
                <p>
                  In the federal system, the Bureau of Prisons has specific sex offender treatment programming and policy guidance. Some institutions with treatment programs may house a higher number of people with sex-offense convictions. State systems vary widely, so the exact answer depends on your facility.
                </p>
                <p>
                  The practical point is this: do not assume your conviction controls every interaction. Also do not pretend it does not matter. Prepare for stigma, keep your answers brief, follow rules, document serious issues, and focus on the daily habits that lower risk.
                </p>
              </GuideProse>
            }
          />

          <GuideCallout tone="reminder" icon="🧠" title="A grounded way to think about fear">
            <p>
              Your mind may show you the worst possible version of every story you have heard. That does not mean those stories are your future. Fear may show up. You do not have to obey it.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="first-thirty-days"
          number="2"
          title="The first 30 days"
          subtitle="Early prison survival is mostly about slowing down, learning rules, and not making fast mistakes."
        />

        <GuideSectionCard>
          <TimelineGuidanceGrid
            title="What to focus on by stage"
            stages={[
              {
                stage: "Before arrival or self-surrender",
                icon: "🧳",
                whatChanges:
                  "You may still have access to family, documents, doctors, counsel, phone numbers, and a printer.",
                whatToDo:
                  "Create a paper contact list, medication list, legal-document list, family communication plan, and reentry folder. Do not rely on your phone being available later.",
              },
              {
                stage: "Intake and orientation",
                icon: "📋",
                whatChanges:
                  "You are learning count, movement, housing, mail, phone, commissary, medical, grievance, PREA, and staff expectations.",
                whatToDo:
                  "Listen more than you talk. Read the handbook. Ask procedural questions. Do not make fast friends or tell long stories.",
              },
              {
                stage: "First housing assignment",
                icon: "🏠",
                whatChanges:
                  "People may be watching how you carry yourself, how clean you are, whether you borrow, and whether you respect space.",
                whatToDo:
                  "Keep your area clean, ask before sitting or using shared space, do not touch property, and avoid borrowing even small items.",
              },
              {
                stage: "First month",
                icon: "🗓️",
                whatChanges:
                  "The shock starts becoming routine. This is when you build habits that either protect you or create problems.",
                whatToDo:
                  "Set a daily rhythm: work or program, shower, exercise, meals, writing, reading, sleep, and steady family contact.",
              },
            ]}
          />

          <SoftDivider label="First-month checklist" />

          <GuideChecklist
            id="first-month-checklist"
            title="Tasks that help you stabilize"
            columns={1}
            items={[
              {
                id: "read-handbook",
                label: "Read the facility handbook or orientation materials when available.",
              },
              {
                id: "learn-count",
                label: "Learn count times, movement rules, meal routines, mail, phone, commissary, medical, and request procedures.",
              },
              {
                id: "clean-space",
                label: "Keep your bunk, locker, cube, or cell clean from the beginning.",
              },
              {
                id: "no-debt",
                label: "Make a personal rule: no borrowing, lending, gambling, tabs, shared PINs, or commissary favors.",
              },
              {
                id: "family-rhythm",
                label: "Set a realistic family communication rhythm so everyone knows when to expect contact.",
              },
              {
                id: "mental-health",
                label: "Ask for mental-health help early if panic, depression, or self-harm thoughts become intense.",
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="daily-dos-donts"
          number="3"
          title="Hard DOs, Hard DON’Ts, and use your judgment"
          subtitle="These are the daily habits that keep many people safer."
        />

        <GuideSectionCard>
          <DoDontJudgment
            dos={[
              <span>Carry yourself calmly: walk, talk, and move at a measured pace.</span>,
              <span>Build a predictable daily routine around work, program, meals, hygiene, exercise, reading, writing, and sleep.</span>,
              <span>Keep your living area clean and your property organized.</span>,
              <span>Give simple, honest, non-graphic answers about your case if you must answer.</span>,
              <span>Follow staff instructions and use written request or grievance systems for non-emergency issues.</span>,
              <span>Use medical, mental-health, and PREA channels when safety or health is at stake.</span>,
            ]}
            donts={[
              <span>Do not gamble, borrow, lend, run tabs, or let anyone use your account, phone, commissary, or PIN.</span>,
              <span>Do not lie about your conviction, cooperation history, or paperwork.</span>,
              <span>Do not discuss graphic case details, sexual details, victims, fantasies, or other people’s cases.</span>,
              <span>Do not touch other people’s property, sit on bunks without permission, hover near phones, or stare into private spaces.</span>,
              <span>Do not carry messages, hold contraband, store property, accept protection, or take sides in conflicts.</span>,
              <span>Do not try to act tough, connected, amused by violence, or “prison smart.” It usually backfires.</span>,
            ]}
            judgment={[
              <span>How much to disclose depends on the setting. Brief truth is usually safer than long explanations.</span>,
              <span>Some disrespect is better ignored. Repeated targeting, extortion, sexual pressure, threats, or blocked movement should be treated as safety issues.</span>,
              <span>Not every staff interaction needs a grievance. Serious patterns, retaliation, abuse, medical neglect, or safety failures should be documented.</span>,
              <span>Choose activities that regulate you, not activities that pull you into heat: walking, reading, classes, work, faith groups, writing, and quiet exercise.</span>,
            ]}
          />

          <GuideCallout tone="success" icon="🌱" title="You can still build a decent day">
            <p>
              Prison can shrink your world. A routine expands it again. A clean bunk, a walk, a book, a letter, a completed class, a calm phone call, and one avoided argument are not small things. They are how people get through.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="case-paperwork-disclosure"
          number="4"
          title="Case questions, paperwork, and disclosure"
          subtitle="Do not lie, do not over-explain, and do not give people more than they need."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              People may ask what you are in for. They may ask directly, indirectly, aggressively, or casually. Some people ask because they are curious. Some are testing you. Some are trying to place you socially. Some are just repeating prison habits.
            </p>
            <p>
              The safest general approach is brief, honest, non-graphic, and boring. Do not invent another charge. Do not argue legal details in the dayroom. Do not describe conduct. Do not talk about victims. Do not compare your case to someone else’s. Do not try to make your case sound better by making another person’s case sound worse.
            </p>
          </GuideProse>

          <ScriptBox
            title="If someone asks what you are in for"
            tone="neutral"
            context="Use calm, boring language. Then stop talking."
            script={`Sex offense. I’m not proud of it. I’m doing my time and staying out of trouble.`}
          />

          <ScriptBox
            title="If someone pushes for details"
            tone="privacy"
            context="Do not debate, explain, or provide graphic information."
            script={`I’m not getting into details. I’m focused on doing my time right.`}
          />

          <ScriptBox
            title="If someone asks for paperwork"
            tone="legal"
            context="Do not fake paperwork. Do not casually pass sensitive documents around."
            script={`I’m not hiding anything, but I’m not passing my personal legal papers around.`}
          />

          <GuideCallout tone="warning" icon="⚠️" title="Never make up a different conviction">
            <p>
              Lying about your case can create more danger than telling a short truth. If the lie is exposed, people may treat the lie itself as the bigger issue. Brief truth, followed by silence, is usually safer than a story you have to maintain.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="language-you-may-hear"
          number="5"
          title="Prison language you may hear"
          subtitle="What it may mean, what it does not mean, and how to respond without adopting it."
        />

        <GuideSectionCard>
          <GuideCallout tone="privacy" icon="🗣️" title="This is a safety glossary, not a script for fitting in">
            <p>
              You may hear ugly, stigmatizing, or threatening language inside. This guide names a few terms because understanding them can help you stay calm and avoid mistakes. SOLAR does not endorse these labels. You do not need to repeat them, perform prison toughness, or accept anyone else’s label for you.
            </p>
          </GuideCallout>

          <div className="mt-6 space-y-4">
            {languageTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.term}</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      What it may mean
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.means}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      What it does not automatically mean
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.notMean}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Safer response
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SoftDivider label="Ignore, redirect, document, or ask for help" />

          <RedFlagGreenFlag
            green={
              <GuideProse>
                <ul>
                  <li>One-off insult with no follow-up.</li>
                  <li>Someone testing you verbally, then moving on.</li>
                  <li>General trash talk not tied to a demand.</li>
                  <li>People asking routine questions without pressure.</li>
                  <li>Someone saying “don’t talk about your case” and leaving it there.</li>
                </ul>
              </GuideProse>
            }
            red={
              <GuideProse>
                <ul>
                  <li>Repeated targeted harassment.</li>
                  <li>Demands for commissary, phone time, PINs, property, sex, protection money, or favors.</li>
                  <li>Threats tied to your charge, paperwork, or refusal to join a group.</li>
                  <li>Someone blocking movement, following you, entering your space, or refusing to leave you alone.</li>
                  <li>Sexual comments, touching, coercion, threats, or staff ignoring safety reports.</li>
                </ul>
              </GuideProse>
            }
          />

          <ScriptBox
            title="Short responses to pressure"
            tone="neutral"
            context="Keep your voice low. Say less than you want to say. Then disengage."
            script={`If someone uses a slur:
“I’m not here for problems. I’m doing my time.”

If someone asks for details:
“I’m not discussing details.”

If someone offers commissary or protection:
“I appreciate it, but I don’t borrow and I don’t run tabs.”

If someone asks whether you are affiliated:
“I’m not affiliated. I’m just doing my time and staying out of trouble.”`}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="safety-prea-boundaries"
          number="6"
          title="Safety, PREA, and sexual boundaries"
          subtitle="Know the difference between ordinary discomfort and a real safety issue."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              There is no way to make prison risk-free. But you can reduce risk by avoiding debt, staying out of other people’s conflicts, keeping physical boundaries, documenting serious issues, and using official channels when safety is at stake.
            </p>
            <p>
              Sexual comments, pressure, harassment, touching, coercion, abuse, and threats should be treated as safety issues. PREA requires facilities to have ways to report sexual abuse and harassment. Your facility should provide information about reporting options during orientation or through posted materials.
            </p>
          </GuideProse>

          <DoDontJudgment
            dos={[
              <span>Keep physical boundaries: no horseplay, sexual jokes, touching, staring, or lingering in bathrooms or showers.</span>,
              <span>Leave early when an argument, debt issue, gambling issue, or group conflict starts heating up.</span>,
              <span>Use PREA, medical, mental-health, counselor, unit team, grievance, or other official channels when safety is at stake.</span>,
              <span>Write down dates, times, locations, names, witnesses, exact words, forms submitted, and responses received when it is safe to do so.</span>,
            ]}
            donts={[
              <span>Do not accept sexual favors, sexual attention, protection, gifts, debt forgiveness, or special treatment tied to sex or coercion.</span>,
              <span>Do not assume you have no options because someone says reporting will make things worse.</span>,
              <span>Do not make casual threats to report someone as a way to win an argument.</span>,
              <span>Do not treat repeated pressure, extortion, blocked movement, or sexual harassment as “just prison talk.”</span>,
            ]}
            judgment={[
              <span>For minor one-time disrespect, walking away may be safest.</span>,
              <span>For repeated targeting or concrete threats, quiet documentation and official safety channels matter.</span>,
              <span>For immediate danger, prioritize getting away and reaching staff or the safest available reporting point.</span>,
            ]}
          />

          <DocumentPacket
            title="Safety information to save or write down"
            intro="If you cannot keep documents, keep notes in the safest way available. Families can also keep a copy outside."
            categories={[
              {
                title: "Facility safety contacts",
                items: [
                  "PREA reporting hotline, outside reporting address, or posted reporting method.",
                  "Counselor, case manager, unit team, mental-health, medical, and chaplain contact procedures.",
                  "Grievance/request form process and deadlines.",
                ],
              },
              {
                title: "Incident notes",
                items: [
                  "Date, time, location, names, witnesses, and exact words used.",
                  "What you did to leave, report, ask for help, or avoid escalation.",
                  "Copies or descriptions of forms, kites, grievances, medical requests, and responses.",
                ],
              },
            ]}
          />

          <VerifyBeforeActing
            title="Verify safety steps before relying on them"
            whoToAsk="Orientation staff, counselor, unit team, PREA coordinator, medical or mental-health staff, facility handbook, posted notices, or a trusted official channel."
            whatToAsk="Ask exactly how to report sexual harassment, sexual abuse, threats, extortion, medical emergencies, mental-health crises, and requests for separation or protective custody."
            whatToSave="Save the name, title, date, answer, form, hotline, address, and any confirmation number or written response when possible."
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="mental-health-routine"
          number="7"
          title="Mental health, shame, and daily routine"
          subtitle="Your mind is part of your safety plan."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Prison can hit first-time prisoners hard, especially people who never expected to be in custody. Panic, shame, grief, numbness, anger, and fear can all show up. That does not mean you are broken. It means your nervous system is trying to survive something serious.
            </p>
            <p>
              Mental health is not a luxury in prison. It is part of staying alive, staying steady, and coming home better prepared. If you are having thoughts of self-harm, intense panic, or feeling like you cannot stay safe, ask for help immediately through the safest available channel.
            </p>
          </GuideProse>

          <GuideChecklist
            id="daily-stabilizers"
            title="Daily stabilizers"
            columns={1}
            items={[
              {
                id: "shower",
                label: "Shower, brush your teeth, wash clothes, and keep bedding reasonably clean.",
              },
              {
                id: "move",
                label: "Walk, stretch, or exercise when allowed.",
              },
              {
                id: "write",
                label: "Write something each day: a letter, a journal page, a reentry note, or a list of what you did right today.",
              },
              {
                id: "read",
                label: "Read something that is not only about your case.",
              },
              {
                id: "program",
                label: "Show up for work, education, treatment, faith, or other constructive programming when available.",
              },
              {
                id: "family",
                label: "Keep family communication steady and realistic.",
              },
              {
                id: "ask-help",
                label: "Ask for medical or mental-health help early if you are spiraling.",
              },
            ]}
          />

          <GuideCallout tone="success" icon="🌤️" title="Hope can be practical">
            <p>
              Hope does not mean pretending prison is fine. Hope can mean making your bed, taking a shower, writing one honest letter, walking one more lap, apologizing when needed, refusing debt, and making tomorrow slightly easier than today.
            </p>
          </GuideCallout>
        </GuideSectionCard>

<GuideSectionHeader
          id="family-support"
          number="8"
          title="For families and loved ones"
          subtitle="You cannot serve the sentence for them, but you can help them stay connected and prepared."
        />

        <GuideSectionCard>
          <GuideProse>
            <p>
              Families often imagine the worst because they love the person going inside and cannot control what happens next. That helplessness is real. The most useful support is usually steady, practical, and predictable.
            </p>
            <p>
              Try not to flood your loved one with internet horror stories. Do not use every call to relive the case or panic about rumors. Instead, help build rhythm: mail, phone, money boundaries, documents, reentry planning, and reminders that they are still a person with a future.
            </p>
          </GuideProse>

          <RoleGuidanceGrid
            title="How different supporters can help"
            roles={[
              {
                role: "Spouse or partner",
                icon: "🤝",
                guidance:
                  "Keep calls steady when possible. Talk about practical needs, home responsibilities, emotional support, and realistic reentry planning. Avoid making every call a crisis call.",
              },
              {
                role: "Parent",
                icon: "🏡",
                guidance:
                  "Offer grounding without pretending everything is fine. Save documents, write consistently, and help them remember that one bad day is not the whole sentence.",
              },
              {
                role: "Adult child or sibling",
                icon: "✉️",
                guidance:
                  "Short letters, photos allowed by policy, books through approved vendors, and ordinary updates can matter more than perfect words.",
              },
              {
                role: "Friend or advocate",
                icon: "📌",
                guidance:
                  "Help track facility contacts, PREA reporting information, approved mail rules, release planning, and official source links. Do not give legal advice unless you are qualified.",
              },
            ]}
          />

          <ScriptBox
            title="A grounding message families can send"
            tone="family"
            context="Use your own voice, but keep it steady and concrete."
            script={`I know this is hard, and I know you may be scared. You are not alone in this. Today, focus on staying calm, staying clean, avoiding debt and drama, and getting through the next day safely. We will keep taking this one step at a time.`}
          />

          <GuideCallout tone="family" icon="❤️" title="Connection matters">
            <p>
              A predictable letter or call can help someone remember who they are outside prison. You do not need perfect advice. Calm presence, practical help, and steady contact can be powerful.
            </p>
          </GuideCallout>
        </GuideSectionCard>

        <GuideSectionHeader
          id="mistakes-offline"
          number="9"
          title="Common mistakes and offline preparation"
          subtitle="Avoid the predictable traps and make the guide usable even without internet access."
        />

        <GuideSectionCard>
          <CommonMistakes
            mistakes={[
              {
                mistake: "Believing every prison horror story online.",
                whyItMatters:
                  "Fear can make people freeze, overreact, or prepare for the wrong problem.",
                betterMove:
                  "Prepare for real risks: debt, disrespect, paperwork pressure, sexual safety, mental health, and routine.",
              },
              {
                mistake: "Trying to buy friendship with commissary.",
                whyItMatters:
                  "Generosity can turn into expectation, debt, pressure, or resentment.",
                betterMove:
                  "Be polite, but financially boring. Do not borrow, lend, gamble, or run tabs.",
              },
              {
                mistake: "Talking too much during the first week.",
                whyItMatters:
                  "Long stories give people more information to use, twist, or test.",
                betterMove:
                  "Listen more than you speak. Keep answers short and ordinary.",
              },
              {
                mistake: "Arguing about labels or slurs.",
                whyItMatters:
                  "Some people are testing your reaction, not trying to understand your life.",
                betterMove:
                  "Use one calm sentence, then disengage.",
              },
              {
                mistake: "Waiting until release to think about reentry.",
                whyItMatters:
                  "Housing, identification, treatment, supervision, registration, family expectations, and employment all take time.",
                betterMove:
                  "Start a reentry folder early and update it as rules, dates, and documents become clearer.",
              },
            ]}
          />

          <SoftDivider label="Make this usable inside" />

          <OfflineOptions
            title="If internet access is limited or this guide is being mailed in"
            icon="📝"
            note="Many readers will have limited internet, limited privacy, or no printer. Families can help by keeping outside copies."
            items={[
              "Print or copy the four core principles and the Hard DOs / Hard DON’Ts section.",
              "Hand-copy the case-question scripts and keep them short.",
              "Create a paper contact list with family, counsel, medical contacts, and emergency numbers.",
              "Ask family to save official facility rules, mail rules, phone rules, money rules, and PREA reporting information.",
              "Keep a simple notebook of dates, requests, program participation, medical issues, and important staff interactions if allowed.",
              "Ask for mailed forms or written instructions when online access is not available.",
            ]}
          />

          <DocumentPacket
            title="Prison and reentry paper folder"
            intro="Before arrival, families can help gather copies. Inside, keep only what the facility allows."
            categories={[
              {
                title: "Identity and legal basics",
                items: [
                  "Judgment and sentencing documents, if allowed.",
                  "Attorney contact information.",
                  "Identification records and Social Security information stored safely outside.",
                  "Release date, projected good-time information, and supervision contact information when available.",
                ],
              },
              {
                title: "Health and treatment",
                items: [
                  "Medication list, diagnoses, allergies, glasses, hearing aids, medical devices, and doctor information.",
                  "Mental-health history or crisis plan if relevant.",
                  "Treatment program requests, certificates, class records, and completion documents.",
                ],
              },
              {
                title: "Reentry planning",
                items: [
                  "Potential housing addresses to verify before release.",
                  "Family contact plan and transportation plan.",
                  "Registration, supervision, treatment, and court-condition questions to verify before acting.",
                  "Job history, education records, certificates, and letters of support.",
                ],
              },
            ]}
          />
        </GuideSectionCard>

        <GuideSectionHeader
          id="resources"
          number="10"
          title="Resources, verification, and next steps"
          subtitle="Use official sources where possible, and verify facility-specific answers before relying on them."
        />

        <GuideSectionCard>
          <ResourceLinkGrid
            title="Official and practical resources"
            description="These links are starting points. Facility-specific rules still control many day-to-day answers."
            resources={[
              {
                label: "BOP Sex Offender Treatment Programs",
                href: "https://www.bop.gov/inmates/custody_and_care/sex_offenders.jsp",
                description:
                  "Official federal overview of sex offender treatment programming in BOP custody.",
                badge: "Official",
              },
              {
                label: "BOP Sex Offender Programs Policy",
                href: "https://www.bop.gov/policy/progstat/5324_010.pdf",
                description:
                  "BOP policy statement on sex offender management, assessment, and treatment.",
                badge: "Policy",
              },
              {
                label: "Federal PREA Standards",
                href: "https://www.ecfr.gov/current/title-28/chapter-I/part-115",
                description:
                  "Federal regulations on preventing, detecting, and responding to sexual abuse in confinement.",
                badge: "Official",
              },
              {
                label: "BJA PREA Overview",
                href: "https://bja.ojp.gov/program/prea/overview",
                description:
                  "Federal overview of the Prison Rape Elimination Act and implementation support.",
                badge: "Federal",
              },
              {
                label: "National Institute of Corrections Reentry Resources",
                href: "https://nicic.gov/resources/resources-topics-and-roles/topics/reentry",
                description:
                  "Correctional resources related to reentry planning and transition support.",
                badge: "Federal",
              },
            ]}
          />

          <RelatedGuides
            guides={[
              {
                title: "Reentry Planning Guide",
                description:
                  "Use this with the prison guide to start release planning before the last month.",
                to: "/resources/reentry-planning",
              },
              {
                title: "Family Support Guide",
                description:
                  "For loved ones trying to stay steady, communicate well, and prepare for reentry.",
                to: "/resources/family-support",
              },
              {
                title: "Registry Survival Guide",
                description:
                  "For post-release registration, verification, documentation, and avoiding preventable violations.",
                to: "/resources/registry-survival",
              },
              {
                title: "Mental Health Support Guide",
                description:
                  "For crisis planning, support options, and staying grounded during high-stress periods.",
                to: "/resources/mental-health",
              },
            ]}
          />

          <SourceList
            title="Sources & verification"
            note="Links should be checked again before production publication. Facility rules, state prison policies, PREA contacts, treatment eligibility, and reentry procedures can change."
            sources={sourceLinks}
          />
        </GuideSectionCard>

        <GuideCallout tone="reentry" icon="🌅" title="Final word">
          <p>
            Prison is serious. It is also survivable for many people who stay steady, avoid debt, respect boundaries, document serious issues, and keep building a life beyond the sentence. You are allowed to prepare carefully and still believe you can get through this.
          </p>
        </GuideCallout>
      </main>
    </div>
  );
}