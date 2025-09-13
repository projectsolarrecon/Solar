import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function ChildrenDisclosureToolkit(): JSX.Element {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Children & Disclosure + Relationship Rebuilding Toolkit | The SOLAR Project"
        description="Step-by-step strategies and resources for families navigating disclosure to children, rebuilding trust, and long-term resilience."
        keywords="children disclosure toolkit, rebuilding trust, registry families, SOLAR Project, resilience, family support"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">
            SOLAR Resource Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🌱 Children & Disclosure + Relationship Rebuilding Toolkit
          </h1>
          <p className="text-lg md:text-xl text-slate-100">
            For families of an impacted individual in any stage: investigation, pretrial, incarceration, supervision, registry
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={handlePrint}
              className="bg-white text-slate-700 px-4 py-2 rounded-lg shadow hover:bg-slate-100 transition"
            >
              🖨️ Print
            </button>
            <Link
              to="/resources"
              className="bg-slate-500 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-600 transition"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* ===== INTRO - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🌟 Introduction</h2>
    <p className="text-slate-100 mt-1">
      A hand to hold while you navigate disclosure, rebuilding trust, and long-term resilience.
    </p>
  </div>

  <p className="mb-4">
    When someone in your family is arrested, investigated, incarcerated, or placed on a registry, it can feel like your entire
    world has been turned inside out. Overnight, the life you thought you knew changes — and suddenly you are faced with impossible
    questions: <em>What do I tell my children? How do I face relatives or neighbors? How do we keep moving forward?</em>
  </p>

  <p className="mb-4">
    If you are reading this, you may feel fear, shame, confusion, or even anger. Please know: <strong>you are not alone.</strong>
    Thousands of families walk this path every year, and while no two stories are the same, there are safe, thoughtful ways to
    navigate these conversations and rebuild trust.
  </p>

  <p className="mb-4">
    This guide is designed to be a <strong>hand to hold</strong> in that journey. It blends two approaches:
  </p>

  <ul className="space-y-2 mb-4">
    <li className="flex items-start gap-2">
      <span aria-hidden className="mt-0.5">📖</span>
      <span>
        A <strong>step-by-step guide</strong> with clear, age-appropriate strategies for talking with children and family.
      </span>
    </li>
    <li className="flex items-start gap-2">
      <span aria-hidden className="mt-0.5">🛠️</span>
      <span>
        A <strong>practical toolkit</strong> filled with scripts, exercises, and resources to help you and your loved ones begin
        healing and reconnecting.
      </span>
    </li>
  </ul>

  {/* Warm callout (amber) */}
  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>👉</div>
      <div>
        <p className="font-semibold text-amber-900">Note on language</p>
        <p className="text-amber-900/90">
          In this guide we use the term <em>“impacted individual”</em> to describe the person at the center of the legal process —
          whether they are under investigation, incarcerated, on supervision, or on the registry. It avoids labels like
          <em> “offender”</em> or <em>“accused”</em> that may not apply at every stage, and keeps the focus on the person’s humanity.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>✨</div>
      <div>
        <p className="text-sky-900/90">
          You do not have to get this perfect. What matters most is showing up with honesty, love, and consistency. With patience
          and courage, families can move through even the most difficult circumstances together.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* ===== STEP 1 - paste your prose here ===== */}
        {/* ===== STEP 1 - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🧘 Step 1: Stabilize &amp; Ground Yourself</h2>
    <p className="text-slate-100 mt-1">Find your footing first so the storm doesn’t sweep you away.</p>
  </div>

  <p className="mb-4">
    When a crisis erupts, your body and mind may go into survival mode — racing thoughts, panic, exhaustion, or numbness.
    Before you can support children, rebuild relationships, or make thoughtful decisions, steady yourself. Think of this as
    putting on your own oxygen mask before helping others.
  </p>

  {/* Universal Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🌍</span> Universal Guidance
  </h3>

  <ul className="space-y-4 mb-6">
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🌬️</span> Breathe and Slow Down</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Your nervous system is likely on high alert. Inhale through your nose, hold for three seconds, exhale slowly.</li>
        <li>
          Even 60 seconds of intentional breathing can lower panic enough to think clearly — a practice recommended in{" "}
          <a className="text-blue-700 underline" href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach" target="_blank" rel="noopener noreferrer">
            trauma-informed care (SAMHSA)
          </a>.
        </li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>📝</span> Name the Crisis, Not Just the Feelings</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Write down exactly what happened in simple terms: <em>“My partner was arrested today.”</em></li>
        <li>Writing concrete facts can stop your mind from spinning in endless “what-ifs.”</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🍎</span> Ground in Basics</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Eat something nourishing. Hydrate. Sleep if you can.</li>
        <li>
          These aren’t small — they’re the foundation for bigger decisions. The{" "}
          <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener noreferrer">
            NCTSN
          </a>{" "}
          notes routines are powerful anchors during trauma.
        </li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🤝</span> Identify Safe People</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Who can you call right now who won’t judge or gossip? One trusted person is enough.</li>
        <li>If no one in your circle feels safe, reach out to a helpline, peer group, chaplain, or counselor.</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2"><span aria-hidden>🛑</span> Avoid Rash Decisions</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Delay big disclosures, financial moves, or confrontations while your body is still in shock.</li>
        <li>Think in 24-hour blocks: <em>“What do I need to get through today safely?”</em></li>
      </ul>
    </li>
  </ul>

  {/* Warm callouts */}
  <div className="grid gap-4 md:grid-cols-2 mb-8">
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>💡</div>
        <div>
          <p className="font-semibold text-emerald-900">Pro Tip (First 72 Hours)</p>
          <p className="text-emerald-900/90">
            Feeling like you’re drowning is normal. Small acts — a shower, a walk, a phone call — are lifelines.
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
      <div className="flex items-start gap-3">
        <div className="text-2xl" aria-hidden>🫶</div>
        <div>
          <p className="font-semibold text-rose-900">Permission Slip</p>
          <p className="text-rose-900/90">
            You’re allowed to pause, grieve, and not have answers yet. Stabilizing yourself <em>is</em> taking care of your family.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Role-Based Self-Care */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🎭</span> Role-Based Self-Care
  </h3>

  <div className="grid gap-4 md:grid-cols-2 mb-8">
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👤</span> For the Impacted Individual</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Use the structure around you (facility rules, supervision) as anchors for routine.</li>
        <li>Write brief notes of love or affirmation — it calms you and reassures family later.</li>
        <li>Request mental health support early if possible (counselor, chaplain, peer groups).</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👪</span> For Parents/Guardians at Home</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Let yourself cry or vent in private spaces.</li>
        <li>Prioritize sleep; exhaustion fuels reactivity.</li>
        <li>Set boundaries with relatives/neighbors; you don’t owe instant explanations.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>💞</span> For Spouses/Partners</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Grief and love can coexist. Both are valid.</li>
        <li>Process with a safe adult (therapist, friend, group) so kids don’t carry your load.</li>
        <li>Delay irreversible decisions until you feel steadier.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👵</span> For Extended Family</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Ground yourself before “helping.” Kids feel your state.</li>
        <li>Do regulating activities first (walk, prayer, journaling).</li>
        <li>Support without judgment; your calm presence is more valuable than advice.</li>
      </ul>
    </div>
  </div>

  {/* Timeline Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🕒</span> Timeline Guidance
  </h3>

  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🚨</span> Early (Arrest / Pre-Trial)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Focus on immediate needs: food, housing, childcare, legal help.</li>
        <li>Limit news/social media; it fuels panic.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>⛓️</span> Incarceration</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Build a routine (set call/letter times). Predictability stabilizes you.</li>
        <li>Rotate helpers with a simple support calendar.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🏠</span> Reentry / Supervision</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Expect stress spikes. Ask: “What’s in my control today?”</li>
        <li>Rebuild rhythms gradually; “normal” won’t return overnight.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📜</span> Registry / Long-Term</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Balance advocacy, parenting, and self-care to avoid burnout.</li>
        <li>Normalize the new reality for yourself first; peer/therapy support helps.</li>
      </ul>
    </div>
  </div>

  {/* Self-Stabilization Checklist (non-interactive) */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>✅</span> Self-Stabilization Checklist
  </h3>
  <ul className="space-y-2 text-slate-800">
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Pause and take three deep breaths.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Write down the facts of what has happened.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Eat, hydrate, and rest before making major decisions.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Identify one safe person to talk to.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Avoid oversharing or overexplaining until calmer.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Set one small goal for today (call lawyer, pick up kids, take a walk).</span></li>
  </ul>
</section>

        {/* ===== STEP 2 - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">👶 Step 2: Disclosure to Children</h2>
    <p className="text-slate-100 mt-1">
      Age-appropriate truth, reassurance of safety and love, and many short conversations over time.
    </p>
  </div>

  <p className="mb-4">
    Few moments feel as impossible as telling a child that a loved one is in legal trouble. Whether your child is three,
    thirteen, or twenty-three, silence can be more frightening than honesty. Thoughtful disclosure gives children language
    for what is happening, reassures them it isn’t their fault, and builds trust that adults will tell the truth — even when
    it’s hard. The{" "}
    <a className="text-blue-700 underline" href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx" target="_blank" rel="noopener noreferrer">
      American Academy of Pediatrics
    </a>{" "}
    emphasizes clear, age-appropriate truth delivered simply.
  </p>

  <p className="mb-6">
    Disclosure is a process — not a single talk. Your role is to offer age-appropriate truth, reassurance, and safety,
    returning to the conversation as your child grows and as circumstances change.
  </p>

  {/* Universal Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🌍</span> Universal Guidance
  </h3>
  <ul className="space-y-4 mb-8">
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Prepare Yourself First</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Children mirror your emotional state. Practice with another adult before you speak to them.</li>
        <li>Write it down; saying words aloud in private helps you spot heavy or confusing phrases.</li>
      </ul>
    </li>
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Choose the Right Moment</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Pick a quiet, private space. Turn off devices. Sit at their level if they’re young.</li>
        <li>Avoid “drive-by disclosures” (e.g., in the car on the way to school).</li>
      </ul>
    </li>
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Keep It Simple, Honest, and Short</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Use one or two sentences at a time. Pause. Let them ask questions.</li>
        <li>Answer what they ask, not what you fear they might ask.</li>
      </ul>
    </li>
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Reassure Safety and Love</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Say directly: <em>“You are safe.”</em> and <em>“You are loved.”</em></li>
        <li>
          Repeat often. The{" "}
          <a className="text-blue-700 underline" href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma" target="_blank" rel="noopener noreferrer">
            NCTSN
          </a>{" "}
          notes that repeated reassurance is vital during traumatic times.
        </li>
      </ul>
    </li>
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Expect Reactions</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Tears, silence, anger, withdrawal, or laughter are all normal.</li>
        <li>Don’t force a “right” reaction; give time and space.</li>
      </ul>
    </li>
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Return to the Conversation</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Preschool talks may last 30 seconds; teen talks may last an hour — both are valid.</li>
        <li>Think of disclosure as planting seeds you’ll water over time.</li>
      </ul>
    </li>
  </ul>

  {/* Pro Tip callout */}
  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>💡</div>
      <div>
        <p className="font-semibold text-amber-900">Pro Tip</p>
        <p className="text-amber-900/90">
          End each conversation with something grounding — a meal, a bedtime story, a walk. This signals that even after hard talks,
          life goes on and safety remains.
        </p>
      </div>
    </div>
  </div>

  {/* Age-Appropriate Approaches & Scripts */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🗣️</span> Age-Appropriate Approaches &amp; Scripts
  </h3>

  <div className="grid gap-4 md:grid-cols-2">
    {/* Preschool */}
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📚</span> Preschool (3–5 years)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Script: <em>“Daddy can’t live at home right now because he broke a rule. The helpers are making sure he learns how to do better. You are safe, and you are loved.”</em></li>
        <li>Follow-up: <em>“This is a grown-up problem. You did nothing wrong.”</em></li>
        <li>Keep it under 30 seconds; offer a hug, playtime, or drawing.</li>
      </ul>
    </div>

    {/* Elementary */}
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🖍️</span> Elementary (6–10 years)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Script: <em>“Mom is in trouble because she broke an important rule. The people in charge want to make sure it doesn’t happen again. She still loves you, and we are keeping our family safe.”</em></li>
        <li>Follow-up: <em>“I don’t have all the answers yet, but I’ll always tell you the truth in words you can understand.”</em></li>
        <li>Be ready for repeated questions and say: <em>“That’s a good question. I’ll tell you when I know.”</em></li>
      </ul>
    </div>

    {/* Middle School */}
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🎒</span> Middle School (11–13 years)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Script: <em>“Uncle made serious mistakes and has to follow special rules given by the court. You can ask me anything, and I’ll tell you the truth.”</em></li>
        <li>Follow-up: <em>“Feeling embarrassed or angry is normal. You can always talk to me — even if your feelings change.”</em></li>
        <li>Normalize: it’s okay to feel confused, upset, or angry.</li>
      </ul>
    </div>

    {/* Teenagers */}
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📱</span> Teenagers (14–18 years)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Script: <em>“Your dad is on supervision because of choices he made that broke the law. That doesn’t change his love for you. We can talk about what this means for our family.”</em></li>
        <li>Follow-up: <em>“You have a right to your feelings. I’ll listen without judgment.”</em></li>
        <li>Allow space for anger or rejection; validate their feelings.</li>
      </ul>
    </div>

    {/* Young Adults */}
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50 md:col-span-2">
      <p className="font-medium mb-2"><span aria-hidden>🎓</span> Young Adults (18+)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Script: <em>“Here are the facts about the legal situation. You may have strong feelings, and that’s okay. Let’s keep talking openly about how this affects you and our family.”</em></li>
        <li>Follow-up: <em>“If you’d like, I can connect you with resources or someone outside the family to talk to.”</em></li>
        <li>Treat them as partners; offer articles, support groups, or therapy options.</li>
      </ul>
      <p className="mt-3 text-slate-700">
        Child-friendly resources:{" "}
        <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener noreferrer">
          Sesame Workshop’s incarceration toolkit
        </a>.
      </p>
    </div>
  </div>

  {/* Role-Based Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🎭</span> Role-Based Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👤</span> For the Impacted Individual</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>If you can’t be present, write a short message of love a caregiver can read aloud.</li>
        <li>Keep it simple; share love, not guilt.</li>
        <li>Don’t take anger or distance personally — it’s part of processing.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👪</span> For Parents/Guardians at Home</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Agree on one script for consistency.</li>
        <li>Expect to repeat the same words many times — repetition builds safety.</li>
        <li>It’s okay to say, <em>“I don’t know yet, but I’ll find out.”</em></li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>💞</span> For Spouses/Partners</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Don’t let your own anger spill into disclosure.</li>
        <li>Reassure kids their feelings can be different from yours.</li>
        <li>Practice active listening: reflect back what they say before correcting.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👵</span> For Extended Family</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Support with calm presence, not probing questions.</li>
        <li>Use the family’s chosen script if asked.</li>
        <li>If unsure, redirect gently: <em>“That’s something your parents will talk to you about.”</em></li>
      </ul>
    </div>
  </div>

  {/* Timeline Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2 mt-8">
    <span aria-hidden>🕒</span> Timeline Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🚨</span> Early (Arrest / Pre-Trial)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Keep explanations minimal; focus on immediate safety and temporary changes.</li>
        <li>Script: <em>“Dad isn’t home because adults are helping him with a problem. You are safe.”</em></li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>⛓️</span> Incarceration</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Prepare kids for visits: uniforms, security, waiting rooms.</li>
        <li>Use pre/post-visit rituals (draw before, ice cream after) to regulate emotions.</li>
        <li>Be honest about limits: <em>“We may not be able to hug at visits, but we’ll still see each other.”</em></li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🏠</span> Reentry / Supervision</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Explain new rules simply: <em>“Mom has to be home at 7 p.m. every night.”</em></li>
        <li>Celebrate small routines returning (dinners, bedtime rituals).</li>
        <li>Give space for fears that rules might be broken again; acknowledge without defensiveness.</li>
      </ul>
    </div>
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📜</span> Registry / Long-Term</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Introduce what a registry means as children mature.</li>
        <li>Frame it as one part of life: <em>“This is a rule we live with, but it doesn’t define who we are.”</em></li>
        <li>With teens, talk openly about stigma and handling peers’ questions.</li>
      </ul>
    </div>
  </div>

  {/* Disclosure Checklist (non-interactive) */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>✅</span> Disclosure Checklist
  </h3>
  <ul className="space-y-2 text-slate-800">
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Write down what you plan to say.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Choose a quiet, private setting.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Use short, age-appropriate explanations.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Reassure love and safety directly.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Expect questions — answer simply; don’t overexplain.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>End with a comforting, normal activity.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Revisit the conversation as kids grow.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Normalize all reactions (silence, tears, anger).</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Remind: <em>“This is not your fault.”</em></span></li>
  </ul>
</section>

        {/* ===== STEP 3 - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">👨‍👩‍👧 Step 3: Managing Family Reactions &amp; Extended Network</h2>
    <p className="text-slate-100 mt-1">
      Sort your circle, use anchor phrases, and protect kids from adult conversations.
    </p>
  </div>

  <p className="mb-4">
    Once the immediate shock settles, you may face a wider circle of reactions — from grandparents and siblings to coworkers
    and neighbors. Some will help; others may judge. You are not required to share every detail. Your goal is to protect your
    children and yourself while maintaining healthy connections where possible. The{" "}
    <a className="text-blue-700 underline" href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/" target="_blank" rel="noopener noreferrer">
      Children of Incarcerated Parents Bill of Rights
    </a>{" "}
    reminds us children have the right to be protected from shame and judgment — that starts with how adults handle their reactions.
  </p>

  {/* Universal Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🌍</span> Universal Guidance
  </h3>
  <ul className="space-y-4 mb-8">
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Sort Your Circle</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li><em>Trusted helpers</em>: will support without judgment.</li>
        <li><em>Practical contacts</em>: need limited info for childcare, school, logistics.</li>
        <li><em>Not safe to share</em>: likely to gossip, criticize, or harm.</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Create Anchor Phrases</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li><em>“It’s a difficult situation. We’re focused on keeping the kids safe.”</em></li>
        <li><em>“We’re taking it one day at a time. Thank you for understanding.”</em></li>
      </ul>
      <p className="mt-2 text-slate-700">
        Using pre-prepared scripts reduces anxiety and keeps messaging consistent — a strategy echoed by{" "}
        <a className="text-blue-700 underline" href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse" target="_blank" rel="noopener noreferrer">
          Stop It Now!
        </a>.
      </p>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Expect a Spectrum of Reactions</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Support: meals, rides, childcare, listening ears.</li>
        <li>Stress: fear, anger, harsh judgment — more about their fears than your worth.</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Protect Children from Adult Conversations</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>If adults argue or gossip near kids, step in calmly: <em>“We’re not discussing this around the kids.”</em></li>
        <li>Never use children as messengers or mediators between adults.</li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Find Your Allies</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Even one or two safe adults helps enormously.</li>
        <li>Ask them to echo your anchor phrases so you’re not carrying the burden alone.</li>
      </ul>
    </li>
  </ul>

  {/* Tip callout */}
  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>💡</div>
      <div>
        <p className="font-semibold text-amber-900">Boundary Reminder</p>
        <p className="text-amber-900/90">
          You don’t have to answer every question. Silence is a boundary. Try: <em>“That’s not something I can discuss.”</em>
        </p>
      </div>
    </div>
  </div>

  {/* Role-Based Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🎭</span> Role-Based Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👤</span> For the Impacted Individual</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Some relatives will feel anger or betrayal; don’t demand instant forgiveness.</li>
        <li>Lead with accountability, not excuses: <em>“I know I caused pain. I’m working to do better.”</em></li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👪</span> For Parents/Guardians at Home</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Stand firm when pressed for details: <em>“I won’t discuss specifics, but I appreciate your support.”</em></li>
        <li>Your duty is your child’s stability — not satisfying curiosity.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>💞</span> For Spouses/Partners</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Expect conflicting advice from your own family.</li>
        <li>Use an anchor: <em>“I need time to make my own decisions. Please respect that.”</em></li>
        <li>Don’t get pulled into defending your choices repeatedly.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👵</span> For Extended Family</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Focus on actions, not opinions: bring meals, offer rides, read with kids.</li>
        <li>Avoid pressuring parents for details or venting around children.</li>
      </ul>
    </div>
  </div>

  {/* Timeline Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2 mt-8">
    <span aria-hidden>🕒</span> Timeline Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🚨</span> Early (Arrest / Pre-Trial)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Limit sharing to essentials; focus on who must know.</li>
        <li>Short phrases help: <em>“This is a legal matter. We’re focusing on the children.”</em></li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>⛓️</span> Incarceration</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Prep relatives for visits (security, waiting). Ask them not to quiz kids after.</li>
        <li>
          Share child-friendly materials from{" "}
          <a className="text-blue-700 underline" href="https://sesameworkshop.org/resources/coping-with-incarceration/" target="_blank" rel="noopener noreferrer">
            Sesame Workshop
          </a>.
        </li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🏠</span> Reentry / Supervision</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Acknowledge trust concerns without defending every choice.</li>
        <li>Limit exposure to relatives who can’t stay respectful around kids.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📜</span> Registry / Long-Term</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Address stigma directly and focus on what you can control.</li>
        <li>Invite supportive relatives into advocacy or education to reduce isolation.</li>
      </ul>
    </div>
  </div>

  {/* Managing Family Reactions Checklist */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>✅</span> Managing Family Reactions Checklist
  </h3>
  <ul className="space-y-2 text-slate-800">
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Identify who truly needs to know details.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Create one anchor phrase and use it consistently.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Protect children from overhearing adult discussions.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Prepare supportive relatives before visits.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Expect both support and criticism.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Lean on one or two trusted allies for consistent messaging.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Accept that some relationships may shift — and that’s okay.</span></li>
  </ul>
</section>

        {/* ===== STEP 4 - paste your prose here ===== */}
<section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
  <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
    <h2 className="text-2xl font-bold">🤝 Step 4: Trust Rebuilding Toolkit</h2>
    <p className="text-slate-100 mt-1">
      Small, steady, reliable acts rebuild safety and connection over time.
    </p>
  </div>

  <p className="mb-4">
    Trust is not rebuilt through apologies alone — it is earned back in daily, consistent, reliable actions. This applies both
    between partners and between parents and children. Kids especially watch for <em>patterns</em>, not promises. As the{" "}
    <a className="text-blue-700 underline" href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust" target="_blank" rel="noopener noreferrer">
      American Psychological Association
    </a>{" "}
    notes, repair comes from showing reliability in small ways, over and over again.
  </p>

  {/* Universal Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🌍</span> Universal Guidance
  </h3>
  <ul className="space-y-4 mb-8">
    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Keep Promises Small &amp; Concrete</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Say what you can do today, not in the future.</li>
        <li><em>“I’ll call you at 7 pm.” → and then call at 7 pm.</em></li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Repair Missed Expectations Quickly</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>If you forget or fail, acknowledge it right away.</li>
        <li><em>“I didn’t follow through. I see that hurt you. I’ll try again tomorrow.”</em></li>
      </ul>
    </li>

    <li className="bg-slate-50 border border-slate-200 rounded-lg p-4">
      <p className="font-medium mb-2">Consistency Beats Big Gestures</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>A daily routine (calls, letters, meals together) speaks louder than dramatic apologies.</li>
        <li>Children especially trust what happens <em>repeatedly</em>.</li>
      </ul>
    </li>
  </ul>

  {/* Callout: Micro-Commitments */}
  <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 mb-8">
    <div className="flex items-start gap-3">
      <div className="text-2xl" aria-hidden>🧱</div>
      <div>
        <p className="font-semibold text-sky-900">Micro-Commitments</p>
        <p className="text-sky-900/90">
          One small promise a week, kept consistently, restores trust more than one big apology.
        </p>
      </div>
    </div>
  </div>

  {/* Role-Based Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>🎭</span> Role-Based Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2">
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👤</span> For the Impacted Individual</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Show up when you say you will — calls, letters, visits, routines.</li>
        <li>Admit mistakes quickly; don’t hide or deflect.</li>
        <li>Keep boundaries clear: no promises you can’t control (like legal outcomes).</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👪</span> For Parents/Guardians at Home</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Children crave predictability: school routines, meals, bedtime rituals.</li>
        <li>Mark calendars visibly so kids know when calls/visits will happen.</li>
        <li>When something changes, explain it honestly: <em>“The visit was cancelled, but we’ll try again next week.”</em></li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>💞</span> For Spouses/Partners</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Trust may take months or years to rebuild. Look for patterns, not words.</li>
        <li>Encourage transparency without constant interrogation.</li>
        <li>Celebrate small wins together: one week of consistency, one month of honest check-ins.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4">
      <p className="font-medium mb-2"><span aria-hidden>👵</span> For Extended Family</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Model patience — trust is a marathon, not a sprint.</li>
        <li>Support with consistent routines (rides, meals, childcare).</li>
        <li>Back up parents’ anchor phrases with children: consistency across adults matters.</li>
      </ul>
    </div>
  </div>

  {/* Timeline Guidance */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2 mt-8">
    <span aria-hidden>🕒</span> Timeline Guidance
  </h3>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🚨</span> Early (Arrest / Pre-Trial)</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Start tiny: one reliable action a day (a check-in call, a meal together).</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>⛓️</span> Incarceration</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Keep letters or drawings regular, even if short.</li>
        <li>Ask kids to share one “rose &amp; thorn” of their day to stay emotionally connected.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>🏠</span> Reentry / Supervision</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Don’t overwhelm with promises; start with one shared meal or walk each week.</li>
        <li>Expect setbacks; repair them quickly.</li>
      </ul>
    </div>

    <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
      <p className="font-medium mb-2"><span aria-hidden>📜</span> Registry / Long-Term</p>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        <li>Anchor the family around traditions (Friday pizza, Sunday calls).</li>
        <li>Advocacy and transparency with kids about stigma builds deeper trust.</li>
      </ul>
    </div>
  </div>

  {/* Checklist */}
  <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center gap-2">
    <span aria-hidden>✅</span> Trust Rebuilding Checklist
  </h3>
  <ul className="space-y-2 text-slate-800">
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Make one small, specific promise you can keep this week.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Follow through, even if it feels trivial.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>If you slip, acknowledge it immediately and try again.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Track patterns of consistency over time — not just one-offs.</span></li>
    <li className="flex items-start gap-2"><span aria-hidden>☐</span><span>Celebrate small wins as a family to reinforce hope.</span></li>
  </ul>
</section>

        {/* ===== STEP 5 - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌄 Step 5: Ongoing Support &amp; Resilience</h2>
            <p className="text-slate-100 mt-1">Build long-term routines, supports, and perspective.</p>
          </div>

          <p className="mb-4">Paste your Step 5 paragraphs here.</p>

          {/* Warm callout (violet) */}
          <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl" aria-hidden>🌱</div>
              <div>
                <p className="font-semibold text-violet-900">Resilience Boost</p>
                <p className="text-violet-900/90">
                  Celebrate even tiny wins—momentum beats perfection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONCLUSION - paste your prose here ===== */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold">🌟 Conclusion: A Path Forward</h2>
            <p className="text-slate-100 mt-1">
              Warmth, honesty, routines, and support carry families through the long journey.
            </p>
          </div>

          <p className="mb-4">Paste your conclusion paragraphs here.</p>
        </section>

        {/* ===== SOURCES & RESOURCES (blue background card) ===== */}
        <section id="sources-resources" className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                📚
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sources &amp; Resources</h2>
                <p className="text-slate-200">Trusted, family-friendly materials you can reference and share</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              {/* Replace these with your real links (kept minimal to avoid paste errors) */}
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Tips-to-Support-Children-When-a-Parent-is-in-Prison.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Academy of Pediatrics – Tips to Support Children When a Parent is in Prison
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.samhsa.gov/resource/dbhis/infographic-6-guiding-principles-trauma-informed-approach"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAMHSA – 6 Guiding Principles of Trauma-Informed Approach
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.nctsn.org/what-is-child-trauma/about-child-trauma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Child Traumatic Stress Network – About Child Trauma
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://sesameworkshop.org/resources/coping-with-incarceration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sesame Workshop – Coping With Incarceration
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.stopitnow.org/ohc-content/parents-talking-to-children-about-sexual-abuse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stop It Now! – Parents Talking to Children About Sexual Abuse
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.atsa.com/atsa-practice-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Association for the Treatment and Prevention of Sexual Abuse (ATSA) – Practice Guidelines
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.osborneny.org/resources/children-of-incarcerated-parents-bill-of-rights/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Children of Incarcerated Parents Bill of Rights – Osborne Association
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.mstservices.com/what-is-mst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Multisystemic Therapy (MST)
                </a>
                <span> and </span>
                <a
                  className="text-blue-700 underline"
                  href="https://www.functionalfamilytherapy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Functional Family Therapy (FFT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-700 underline"
                  href="https://www.apa.org/monitor/2019/11/cover-rebuilding-trust"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Psychological Association – Rebuilding Trust
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>{/* end: main content container */}
    </div>
  );
}

export default ChildrenDisclosureToolkit;
