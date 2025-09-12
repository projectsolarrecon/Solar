// src/pages/resources/ChildrenDisclosureToolkit.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import HeaderBand from "../../components/solar/HeaderBand";
import SectionCard from "../../components/solar/SectionCard";
import Callout from "../../components/solar/Callout";
import Divider from "../../components/solar/Divider";
import ShareBar from "../../components/solar/ShareBar";

export default function ChildrenDisclosureToolkit(): JSX.Element {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Resource Guide: Children & Disclosure + Relationship Rebuilding Toolkit"
        description="Age-appropriate disclosure to children, managing family reactions, and practical trust-rebuilding strategies for families navigating investigation, incarceration, supervision, or registry."
        keywords="children disclosure, registry, incarceration, supervision, family toolkit, relationship rebuilding, trauma-informed"
      />

      <HeaderBand
        badge="Family Toolkit"
        title="🌱 Children & Disclosure + Relationship Rebuilding Toolkit"
        subtitle="For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry"
        backHref="/resources"
        backLabel="Back to Resources"
      />

      <ShareBar className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6" />

      <main>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

          {/* Introduction */}
          <SectionCard
            title="🌟 Introduction"
            kicker=""
          >
            <p>
              When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like your entire world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly you are faced with impossible questions: <em>What do I tell my children? How do I face relatives or neighbors? How do we keep moving forward?</em>
            </p>
            <p>
              If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not alone.</strong> Thousands of families walk this path every year, and while no two stories are the same, there are safe, thoughtful ways to navigate these conversations and rebuild trust.
            </p>
            <p>
              This guide is designed to be a <strong>hand to hold</strong> in that journey. It blends two approaches:
            </p>
            <ul className="list-disc pl-6">
              <li>📖 A <strong>step-by-step guide</strong> with clear, age-appropriate strategies for talking with children and family.</li>
              <li>🛠️ A <strong>practical toolkit</strong> filled with scripts, exercises, and resources to help you and your loved ones begin healing and reconnecting.</li>
            </ul>
            <p>
              👉 <strong>Note on language:</strong> In this guide we use the term <em>“impacted individual”</em> to describe the person at the center of the legal process — whether they are under investigation, incarcerated, on supervision, or on the registry. It avoids labels like <em>“offender”</em> or <em>“accused”</em> that may not apply at every stage, and keeps the focus on the person’s humanity.
            </p>
            <p>
              ✨ You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency. With patience and courage, families can move through even the most difficult circumstances together.
            </p>

            <Callout title="Warm reminder" tone="note" icon="💛">
              You don’t need perfect words — you just need to show up with care, tell the truth in simple language, and repeat your reassurance.
            </Callout>
          </SectionCard>

          <Divider />

          {/* Step 1 */}
          <SectionCard title="🧘 Step 1: Stabilize & Ground Yourself">
            <p>
              When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or numbness. Before you can support children, rebuild relationships, or make thoughtful decisions, you must first steady yourself. Think of this as putting on your own oxygen mask before helping others.
            </p>
            <p>This step is about <strong>finding your footing</strong>, so that the storm around you doesn’t sweep you away.</p>

            <h3 className="text-lg font-semibold mt-6">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>🌬️ Breathe and Slow Down</strong><br />
                Inhale through your nose, hold for three, exhale slowly. Even 60 seconds of intentional breathing can lower panic — a practice recommended in{" "}
                <a href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener" className="text-blue-700 underline">
                  trauma-informed care
                </a>.
              </li>
              <li>
                <strong>📝 Name the Crisis, Not Just the Feelings</strong><br />
                Write down simple facts: <em>“My partner was arrested today.”</em> Facts keep your mind from spiraling.
              </li>
              <li>
                <strong>🍎 Ground in Basics</strong><br />
                Eat, hydrate, sleep. The{" "}
                <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener" className="text-blue-700 underline">
                  NCTSN
                </a>{" "}
                notes routine is a powerful anchor in trauma.
              </li>
              <li>
                <strong>🤝 Identify Safe People</strong><br />
                Call one trusted person who won’t judge. If no one is available, use a helpline or local family service.
              </li>
              <li>
                <strong>🛑 Avoid Rash Decisions</strong><br />
                Defer big disclosures or financial moves until your body is calmer. Focus on 24-hour survival blocks.
              </li>
            </ol>

            <Callout title="Pro Tip" tone="success" icon="💡">
              In the first 72 hours it’s normal to feel underwater. Small acts of care — a shower, a walk, a short call — are lifelines.
            </Callout>

            <h3 className="text-lg font-semibold mt-6">🎭 Role-Based Self-Care</h3>
            <ul className="space-y-3">
              <li>
                <strong>👤 For the Impacted Individual:</strong> Use routine to your advantage; write brief notes of love; request mental health support early if possible.
              </li>
              <li>
                <strong>👪 For Parents/Guardians:</strong> Allow private releases (cry, write), prioritize rest, and set boundaries with outsiders.
              </li>
              <li>
                <strong>💞 For Spouses/Partners:</strong> Acknowledge grief and betrayal if present; process with a peer so kids aren’t the outlet; delay big choices until steadier.
              </li>
              <li>
                <strong>👵 For Extended Family:</strong> Ground before helping; support without judgment; calm presence beats advice.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🕒 Timeline Guidance</h3>
            <ul className="space-y-2">
              <li><strong>🚨 Early Stage (Arrest / Pre-Trial):</strong> Focus on immediate needs; limit media intake.</li>
              <li><strong>⛓️ Incarceration:</strong> Build predictable routines (call times, letters); create a support calendar.</li>
              <li><strong>🏠 Reentry / Supervision:</strong> Expect stress spikes; add structure gradually.</li>
              <li><strong>📜 Registry / Long-Term:</strong> Pace yourself; normalize the new reality; seek ongoing support.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">✅ Self-Stabilization Checklist</h3>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Pause for three deep breaths</li>
              <li>Write the basic facts</li>
              <li>Eat, hydrate, rest before big decisions</li>
              <li>Identify one safe person to talk to</li>
              <li>Avoid oversharing until calmer</li>
              <li>Set one small goal for today</li>
            </ul>
          </SectionCard>

          <Divider />

          {/* Step 2 */}
          <SectionCard title="👶 Step 2: Disclosure to Children">
            <p>
              Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child is three, thirteen, or twenty-three, your instinct may be to protect them from the truth. But children sense when something is wrong — and silence can be more frightening than honesty.
            </p>
            <p>
              Children who are left in the dark may imagine worst-case scenarios, blame themselves, or feel abandoned. Thoughtful disclosure, by contrast, gives children language for what is happening, reassures them that they are not at fault, and builds trust that adults will tell them the truth — even when it’s hard.{" "}
              <a
                href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
                target="_blank"
                rel="noopener"
                className="text-blue-700 underline"
              >
                American Academy of Pediatrics
              </a>{" "}
              emphasizes the importance of clear, age-appropriate truth.
            </p>
            <p>
              Disclosure does not have to happen all at once. It is a <strong>process of many conversations</strong> that evolve as your child grows and as your family’s circumstances change. Your role is not to provide every detail, but to offer <strong>age-appropriate truth, reassurance, and safety</strong>.
            </p>

            <h3 className="text-lg font-semibold mt-6">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Prepare Yourself First</strong><br />
                Practice with an adult; write down what you’ll say.
              </li>
              <li>
                <strong>Choose the Right Moment</strong><br />
                Quiet, private space; avoid rushed “drive-by” disclosures.
              </li>
              <li>
                <strong>Keep It Simple, Honest, and Short</strong><br />
                One or two sentences, then pause for questions.
              </li>
              <li>
                <strong>Reassure Safety and Love</strong><br />
                Say directly: <em>“You are safe.” “You are loved.”</em> The{" "}
                <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener" className="text-blue-700 underline">
                  NCTSN
                </a>{" "}
                highlights the power of repeated reassurance.
              </li>
              <li>
                <strong>Expect Reactions</strong><br />
                Tears, silence, anger, even laughter can be normal.
              </li>
              <li>
                <strong>Return to the Conversation</strong><br />
                Think of disclosure as planting seeds you’ll water over time.
              </li>
            </ol>

            <Callout title="Pro Tip" tone="success" icon="💡">
              End tough talks with something grounding — a meal, story, or walk — to signal that safety remains.
            </Callout>
            <h3 className="text-lg font-semibold mt-6">🗣️ Age-Appropriate Approaches & Scripts</h3>

            <p><strong>📚 Preschool (3–5 years)</strong></p>
            <p>
              Script: <em>“Daddy can’t live at home right now because he broke a rule. The helpers are making sure he learns how to do better. You are safe, and you are loved.”</em><br />
              Follow-up: <em>“This is a grown-up problem. You did nothing wrong.”</em><br />
              ✅ Keep it under 30 seconds; transition to play or drawing.
            </p>

            <p className="mt-4"><strong>🖍️ Elementary (6–10 years)</strong></p>
            <p>
              Script: <em>“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</em><br />
              Follow-up: <em>“I don’t have all the answers yet, but I’ll always tell you the truth in words you can understand.”</em><br />
              ✅ Be ready for repeated questions; it’s okay to say you’ll find answers.
            </p>

            <p className="mt-4"><strong>🎒 Middle School (11–13 years)</strong></p>
            <p>
              Script: <em>“Uncle made serious mistakes and has to follow special rules given by the court. You can ask me anything, and I’ll always tell you the truth.”</em><br />
              Follow-up: <em>“Feeling embarrassed or angry is normal. You can always talk to me.”</em><br />
              ✅ Normalize feelings without pressure to respond a certain way.
            </p>

            <p className="mt-4"><strong>📱 Teenagers (14–18 years)</strong></p>
            <p>
              Script: <em>“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</em><br />
              Follow-up: <em>“You have a right to your feelings. I’ll listen without judgment.”</em><br />
              ✅ Allow space for anger or distance; avoid lecturing.
            </p>

            <p className="mt-4"><strong>🎓 Young Adults (18+)</strong></p>
            <p>
              Script: <em>“Here are the facts about the legal situation. You may have strong feelings — that’s okay. Let’s keep talking openly about how this affects you and our family.”</em><br />
              Follow-up: <em>“If you’d like, I can connect you with resources or someone outside the family to talk to.”</em><br />
              ✅ Treat them as partners; provide resource options.
            </p>

            <p className="mt-4">
              🧸 Resources like{" "}
              <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener" className="text-blue-700 underline">
                Sesame Workshop’s incarceration toolkit
              </a>{" "}
              offer age-specific videos, storybooks, and caregiver guides.
            </p>

            <h3 className="text-lg font-semibold mt-6">🎭 Role-Based Guidance</h3>
            <ul className="space-y-3">
              <li>
                <strong>👤 For the Impacted Individual:</strong> If absent, write a short message of love to be read aloud; keep it simple; don’t take children’s anger personally.
              </li>
              <li>
                <strong>👪 For Parents/Guardians:</strong> Agree on one script; expect repetition; it’s okay to say “I don’t know yet.”
              </li>
              <li>
                <strong>💞 For Spouses/Partners:</strong> Don’t let your anger color the disclosure; validate kids’ feelings; use active listening.
              </li>
              <li>
                <strong>👵 For Extended Family:</strong> Offer calm presence; use the family script; avoid over-explaining — redirect to parents if unsure.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🕒 Timeline Guidance</h3>
            <ul className="space-y-2">
              <li>
                <strong>🚨 Early Stage (Arrest / Pre-Trial):</strong> Keep explanations minimal; emphasize safety and routine.
              </li>
              <li>
                <strong>⛓️ Incarceration:</strong> Prepare kids for visits (security, uniforms); create pre/post visit rituals.
              </li>
              <li>
                <strong>🏠 Reentry / Supervision:</strong> Explain new rules plainly; celebrate small routines returning.
              </li>
              <li>
                <strong>📜 Registry / Long-Term:</strong> Introduce registry gradually; frame it as one part of life; talk openly with teens about stigma.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">✅ Disclosure Checklist</h3>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Write down what you plan to say</li>
              <li>Choose a quiet, private setting</li>
              <li>Use short, age-appropriate explanations</li>
              <li>Reassure love and safety directly</li>
              <li>Answer questions simply; don’t over-explain</li>
              <li>End with a comforting, normal activity</li>
              <li>Revisit as children grow</li>
              <li>Normalize all reactions</li>
              <li>Remind: <em>“This is not your fault.”</em></li>
            </ul>
          </SectionCard>

          <Divider />

          {/* Step 3 */}
          <SectionCard title="👨‍👩‍👧 Step 3: Managing Family Reactions & Extended Network">
            <p>
              Once the immediate shock settles, you may find yourself facing the wider circle of family, friends, and community. Grandparents, siblings, co-parents, and neighbors may have questions — or judgments. Some may rally to support you, while others may withdraw or even lash out.
            </p>
            <p>
              The{" "}
              <a href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/" target="_blank" rel="noopener" className="text-blue-700 underline">
                Children of Incarcerated Parents Bill of Rights
              </a>{" "}
              reminds us that children have the right to be protected from shame and judgment. That starts with how adults — relatives, neighbors, friends — handle their reactions.
            </p>
            <p>
              This step is about <strong>navigating those reactions without losing your stability</strong>. Remember: you are not required to share every detail with everyone. You can set boundaries. Your goal is to protect your children and yourself while maintaining healthy connections where possible.
            </p>

            <h3 className="text-lg font-semibold mt-6">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Sort Your Circle</strong><br />
                Make three lists: trusted helpers; practical contacts; not-safe-to-share. This clarifies who gets details and who gets anchor phrases.
              </li>
              <li>
                <strong>Create Anchor Phrases</strong><br />
                Short, repeatable lines for prying questions: <em>“It’s a difficult situation. We’re focusing on keeping the kids safe.”</em> / <em>“One day at a time — thanks for understanding.”</em><br />
                Using pre-prepared scripts reduces anxiety and ensures consistency — a strategy supported by{" "}
                <a href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener" className="text-blue-700 underline">
                  Stop It Now!
                </a>.
              </li>
              <li>
                <strong>Expect a Spectrum of Reactions</strong><br />
                Some will support; others may judge. Their reactions reflect their fears/biases, not your worth.
              </li>
              <li>
                <strong>Protect Children from Adult Conversations</strong><br />
                If adults argue or gossip near kids, step in: <em>“We’re not discussing this around the children.”</em> Never use kids as messengers.
              </li>
              <li>
                <strong>Find Your Allies</strong><br />
                Even one or two safe adults can echo your anchor phrases so you don’t carry the burden alone.
              </li>
            </ol>

            <Callout title="Pro Tip" tone="note" icon="🧡">
              You don’t have to answer every question. <em>Silence is a boundary.</em> “That’s not something I can discuss” is enough.
            </Callout>
            <h3 className="text-lg font-semibold mt-6">🎭 Role-Based Guidance</h3>
            <ul className="space-y-3">
              <li>
                <strong>👤 For the Impacted Individual:</strong> Accept anger without demanding instant forgiveness; show accountability first.
              </li>
              <li>
                <strong>👪 For Parents/Guardians:</strong> Stand firm on boundaries; protect child stability over others’ curiosity.
              </li>
              <li>
                <strong>💞 For Spouses/Partners:</strong> Expect conflicting advice from your own family; ask for time and respect for your decisions.
              </li>
              <li>
                <strong>👵 For Extended Family:</strong> Help with actions (meals, rides, reading with kids); avoid pressuring for details or venting near children.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🕒 Timeline Guidance</h3>
            <ul className="space-y-2">
              <li>
                <strong>🚨 Early Stage (Arrest / Pre-Trial):</strong> Share only essentials; focus on who must know.{" "}
                <em>“This is a legal matter. We’re focusing on the children.”</em>
              </li>
              <li>
                <strong>⛓️ Incarceration:</strong> Prep relatives for visits (security, waiting); ask them to send letters/drawings;{" "}
                <a href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener" className="text-blue-700 underline">
                  Sesame Workshop
                </a>{" "}
                has child-friendly prep tools.
              </li>
              <li>
                <strong>🏠 Reentry / Supervision:</strong> Acknowledge trust concerns; limit exposure to relatives who can’t be respectful.
              </li>
              <li>
                <strong>📜 Registry / Long-Term:</strong> Address stigma directly; invite supportive relatives into advocacy or education.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">✅ Managing Family Reactions Checklist</h3>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Decide who truly needs details</li>
              <li>Create and practice one anchor phrase</li>
              <li>Shield kids from adult conversations</li>
              <li>Prepare supportive relatives for visit norms</li>
              <li>Expect both support and criticism</li>
              <li>Lean on 1–2 allies for consistent messaging</li>
              <li>Accept that some relationships may shift</li>
            </ul>
          </SectionCard>

          <Divider />

          {/* Step 4 */}
          <SectionCard title="🤝 Step 4: Trust Rebuilding Toolkit">
            <p>
              When the legal system enters your life, it doesn’t just take away freedom — it often takes away jobs, income, housing, friendships, and social standing. Invitations vanish. Neighbors avoid eye contact. Some people walk out of your life entirely.
            </p>
            <p>
              That is why relationships with those who remain — your children, partner, parents, or a handful of trusted friends — are more than just important. They are your lifeline.
            </p>
            <p>
              Trust, once broken, can feel impossible to restore. But it is possible. Not through instant fixes or big promises, but through <strong>small, steady, reliable acts that prove safety and care over time</strong>. Even when everything else is lost, rebuilding trust inside your closest relationships gives you the foundation to face the outside world again.
            </p>

            <h3 className="text-lg font-semibold mt-6">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Acknowledge the Break</strong> — name it plainly; honesty about rupture enables repair. See{" "}
                <a href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener" className="text-blue-700 underline">APA</a>.
              </li>
              <li><strong>Begin with Basics</strong> — be where you say you’ll be; follow rules; keep routines.</li>
              <li><strong>Consistency Is Everything</strong> — reliability beats dramatic apologies.</li>
              <li><strong>Repair, Don’t Defend</strong> — own slips quickly; defensiveness drains trust.</li>
              <li><strong>Build Shared Rituals</strong> — weekly meetings, bedtime check-ins, walks.</li>
            </ol>

            <Callout title="Pro Tip" tone="success" icon="💡">
              Trust is rebuilt less through “big talks” and more through daily reliability.
            </Callout>

            <h3 className="text-lg font-semibold mt-6">🛠️ Practical Tools & Exercises</h3>
            <p>
              Evidence-based family programs like{" "}
              <a href="https://www.mstservices.com/what-is-mst" target="_blank" rel="noopener" className="text-blue-700 underline">MST</a>{" "}
              and{" "}
              <a href="https://www.functionalfamilytherapy.com/" target="_blank" rel="noopener" className="text-blue-700 underline">FFT</a>{" "}
              emphasize small, consistent commitments and structured rituals.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Micro-Commitments:</strong> one promise/week; keep it; build up.</li>
              <li><strong>Family Talk Circle:</strong> 5 min each; no interruptions; reflect back feelings.</li>
              <li><strong>Letter Exchange:</strong> short written notes reduce conflict and support expression.</li>
              <li><strong>Trust Jar:</strong> record kept promises; review monthly.</li>
              <li><strong>Celebrate Progress:</strong> end each week by naming one trust-building action per person.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🎭 Role-Based Guidance</h3>
            <ul className="space-y-3">
              <li><strong>👤 Impacted Individual:</strong> replace “trust me” with consistent actions; listen to anger without arguing; see{" "}
                <a href="https://www.atsa.com/atsa-practice-guidelines" target="_blank" rel="noopener" className="text-blue-700 underline">ATSA</a>.
              </li>
              <li><strong>👪 Parents/Guardians:</strong> your consistency anchors kids; keep promises small and specific.</li>
              <li><strong>💞 Spouses/Partners:</strong> ask directly for what you need; protect space for your own joy.</li>
              <li><strong>👵 Extended Family:</strong> show up in steady, practical ways; never put kids in the middle.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🕒 Timeline Guidance</h3>
            <ul className="space-y-2">
              <li><strong>🚨 Early Stage:</strong> focus on survival and unity statements.</li>
              <li><strong>⛓️ Incarceration:</strong> predictable calls/letters build trust; prepare kids for missed calls due to rules.</li>
              <li><strong>🏠 Reentry / Supervision:</strong> manage expectations; frame rules as safety.</li>
              <li><strong>📜 Registry / Long-Term:</strong> shift from survival to growth routines; shared purpose fosters resilience.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">✅ Trust Rebuilding Checklist</h3>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Acknowledge that trust was broken</li>
              <li>Make one small, realistic promise — keep it</li>
              <li>Build consistency via daily routines</li>
              <li>Use rituals of connection</li>
              <li>Repair quickly when mistakes happen</li>
              <li>Celebrate small wins</li>
              <li>Remember: rebuilding takes time</li>
            </ul>
          </SectionCard>

          <Divider />

          {/* Step 5 */}
          <SectionCard title="🌄 Step 5: Ongoing Support & Resilience">
            <p>
              The crisis may begin with an arrest, but it doesn’t end there. The reality of long investigations, incarceration, supervision, and the registry can stretch for years — sometimes decades. Families need more than survival skills; they need <strong>resilience strategies</strong> that carry them through the long haul.
            </p>
            <p>
              Resilience doesn’t mean pretending everything is fine. It means building the strength, routines, and support networks that allow your family to keep moving forward, even when challenges continue. This step is about finding hope and support not just for today, but for tomorrow and beyond.
            </p>

            <h3 className="text-lg font-semibold mt-6">🌍 Universal Guidance</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Build a Long-Term Support System</strong> — identify one or two safe people/groups. The{" "}
                <a href="https://www.osborneny.org/" target="_blank" rel="noopener" className="text-blue-700 underline">Osborne Association</a>{" "}
                offers family-focused support.
              </li>
              <li>
                <strong>Invest in Professional Help When Possible</strong> — trauma-informed therapy and family counseling can help; see{" "}
                <a href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener" className="text-blue-700 underline">
                  SAMHSA’s principles
                </a>.
              </li>
              <li>
                <strong>Create Family Routines of Resilience</strong> — meetings, game nights, walks, journaling.
              </li>
              <li>
                <strong>Balance Privacy and Connection</strong> — protect details but avoid isolation; the{" "}
                <a href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener" className="text-blue-700 underline">
                  NCTSN
                </a>{" "}
                warns isolation compounds trauma.
              </li>
              <li><strong>Keep Perspective</strong> — seasons change; you are more than your hardest moment.</li>
            </ol>

            <Callout title="Pro Tip" tone="note" icon="🌱">
              Celebrate small wins — a school day completed, a job interview taken, a rule followed — resilience grows by noticing progress.
            </Callout>

            <h3 className="text-lg font-semibold mt-6">🎭 Role-Based Guidance</h3>
            <ul className="space-y-3">
              <li><strong>👤 Impacted Individual:</strong> invest in growth (therapy, education, work); be transparent about rules; model healthy coping.</li>
              <li><strong>👪 Parents/Guardians:</strong> protect your mental health; build your own support team; teach kids simple coping tools.</li>
              <li><strong>💞 Spouses/Partners:</strong> your role will shift over time; allow joy and personal goals too.</li>
              <li><strong>👵 Extended Family:</strong> keep showing up for ordinary moments; offer practical help to lighten the load.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">🕒 Timeline Guidance</h3>
            <ul className="space-y-2">
              <li><strong>🚨 Early Stage:</strong> stabilize meals, school, sleep.</li>
              <li><strong>⛓️ Incarceration:</strong> normalize letters/visits/calls; prepare kids for mixed feelings.</li>
              <li><strong>🏠 Reentry / Supervision:</strong> manage expectations; frame rules as safety.</li>
              <li><strong>📜 Registry / Long-Term:</strong> move toward growth routines; teach teens to handle stigma with dignity; build shared purpose.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6">✅ Resilience Checklist</h3>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Identify at least one safe support person or group</li>
              <li>Create a weekly family ritual</li>
              <li>Celebrate small victories</li>
              <li>Seek professional support if available</li>
              <li>Protect privacy while staying connected</li>
              <li>Remind: <em>“We are more than this situation.”</em></li>
            </ul>
          </SectionCard>

          <Divider />

          {/* Conclusion */}
          <SectionCard title="🌟 Conclusion: A Path Forward">
            <p>
              If you’ve read this far, it means you are committed to holding your family together in the middle of one of the hardest journeys imaginable. That commitment alone is an act of love and resilience.
            </p>
            <p>
              The truth is: there are no perfect words and no perfect steps. Disclosure may feel messy. Trust may take longer to rebuild than you hoped. Family reactions may surprise you, for better or worse. And resilience may sometimes feel like survival.
            </p>
            <p>
              But you are not alone. Families across the country are finding ways to adapt, to grow, and to keep their love intact — supported by resources like{" "}
              <a href="https://sesameworkshop.org/resources/coping-with-incarceration" target="_blank" rel="noopener" className="text-blue-700 underline">Sesame Workshop’s caregiver tools</a>{" "}
              and{" "}
              <a href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener" className="text-blue-700 underline">Stop It Now!’s family safety guides</a>.
            </p>
            <p>
              Your children don’t need you to have all the answers. They need your honesty, your steadiness, and your willingness to show up, again and again. Your partner, parents, or siblings may not always understand, but with patience, boundaries, and compassion, relationships can heal and even deepen.
            </p>
            <p>
              🌅 There is life beyond this moment. It may look different than the life you imagined, but it can still hold safety, joy, dignity, and connection. With courage, love, and the support of others who understand, your family can emerge not only surviving, but stronger and wiser.
            </p>
          </SectionCard>

          {/* Sources */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 not-prose">
            <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-3">
              <span aria-hidden>📚</span> Sources & Resources
            </h2>
            <ul className="list-disc pl-6 text-blue-900 space-y-1">
              <li>
                <a
                  href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
                </a>
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
                </a>
              </li>
              <li>
                <a
                  href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  National Child Traumatic Stress Network – About Child Trauma
                </a>
              </li>
              <li>
                <a
                  href="https://sesameworkshop.org/resources/coping-with-incarceration/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Sesame Workshop – Coping With Incarceration
                </a>
              </li>
              <li>
                <a
                  href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Stop It Now! – Parents Talking to Children About Sexual Abuse
                </a>
              </li>
              <li>
                <a
                  href="https://www.atsa.com/atsa-practice-guidelines"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Association for the Treatment and Prevention of Sexual Abuse (ATSA)
                </a>
              </li>
              <li>
                <a
                  href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Children of Incarcerated Parents Bill of Rights – Osborne Association
                </a>
              </li>
              <li>
                <a
                  href="https://www.mstservices.com/what-is-mst"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Multisystemic Therapy (MST)
                </a>{" "}
                and{" "}
                <a
                  href="https://www.functionalfamilytherapy.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  Functional Family Therapy (FFT)
                </a>
              </li>
              <li>
                <a
                  href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-700 underline"
                >
                  American Psychological Association – Rebuilding Trust
                </a>
              </li>
            </ul>
          </section>
        </article>

        <ShareBar className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" />
      </main>
    </div>
  );
      }
