// src/pages/resources/Prison_Dos_and_Donts_Guide.tsx
import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  BandHeader,
  Callout,
  Divider,
  SectionBand,
  SectionCard,
  Checklist,
  SourcesOffline,
  TOC,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function Prison_Dos_and_Donts_Guide(): JSX.Element {
  return (
    <GuideLayout
      title="Prison Dos & Don’ts for People With Sex-Offense Convictions"
      description="A practical survival guide for incarcerated people and their families navigating U.S. prisons with sex-offense convictions."
      keywords="prison guide, sex offense, incarceration safety, PREA, reentry, prison survival"
      date="Dec 2025"
      readTime="40 min"
      badge="📘 RESOURCE GUIDE"
      lede="An unfiltered, policy-anchored reference on how to stay safe, stable, and grounded in custody — for people with sex-offense convictions and their loved ones."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      {/* 0. Who This Guide Is For */}
      <SectionBand title="0. Who This Guide Is For (And What It Is Not)" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 0. Who This Guide Is For (And What It Is Not)

This guide is written for:

- People heading to **U.S. state or federal prison** on a **sex-offense conviction**, especially first-time, non-violent, or online-only cases.  
- Families who are terrified about what will happen to their loved one inside.  
- People already in custody who need a clear, grounded reference on how to stay safe and stable.

What this guide is **not**:

- It is **not legal advice**.  
- It is **not tailored to any one specific prison** — details differ by state, facility, and security level.  
- It is **not a playbook for breaking rules or evading supervision**. Everything here assumes you are **following the rules**, not trying to game them.

Instead, this is meant to be the **authoritative “dos and don’ts” manual** for people with sex-offense convictions, built from:

- General prison handbooks and policy statements  
  - e.g., the **[BOP Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)**  
- Federal Bureau of Prisons (BOP) classification and security-level designations  
  - e.g., **[BOP Security Levels](https://www.bop.gov/about/facilities/federal_prisons.jsp)**  
  - **[Security Level Statistics](https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp)**  
- National Prison Rape Elimination Act (PREA) standards  
  - e.g., **[DOJ PREA Final Rule](https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape)**  
  - **[PREA Resource Center](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**  
- Broad data on U.S. prison populations and offense categories  
  - e.g., **[The Sentencing Project – “Responding to Crimes of a Sexual Nature”](https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/)**  

The guidance is **population-agnostic at the source** (meaning these rules apply to everyone), then interpreted specifically for **people with sex-offense convictions**, given the realities of stigma, placement, and daily life in SO-heavy facilities.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 1. Core Principles */}
      <SectionBand title="1. Core Principles: The Four Rules That Matter Everywhere" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 1. Core Principles: The Four Rules That Matter Everywhere

No matter what state, security level, or yard you land on, four principles are almost universal:

1. **Calm is currency.**  
2. **Routine is safety.**  
3. **Debt is danger.**  
4. **Honest but brief about your case is safer than lying.**

### Hard DOs

- **DO** carry yourself calmly — walk, talk, and move at a measured pace.  
- **DO** build a predictable daily routine (work, rec, shower, sleep at roughly the same times).  
- **DO** give simple, honest answers about your case when asked.  
- **DO** focus on your own program: work, classes, exercise, reading.

### Hard DON’Ts

- **DON’T** gamble, run tabs, or borrow commissary from others (nearly every inmate handbook bans gambling or incurring debts — see BOP handbooks such as the one linked above).  
- **DON’T** use or sell drugs.  
- **DON’T** yell, brag, posture, or act like you’re in a movie.  
- **DON’T** lie about your charges — it often gets exposed and destroys trust.

### Use-Your-Judgment

- **DO** adjust how much you talk depending on the yard culture — in some prisons, more conversation is normal; in others, quiet is safer.  
- **DO** pay attention to who seems stable and who brings drama; align yourself with the former, stay away from the latter.

If you remember nothing else from this guide, remember these four principles.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 2. Housing & Living Space */}
      <SectionBand title="2. Housing & Living Space Etiquette" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 2. Housing & Living Space Etiquette

Your bunk, cell, or cube is your anchor. How you behave there sets your reputation.

### Hard DOs

- **DO** keep your area clean and organized (bed made, property stacked, floor clear).  
- **DO** ask before sitting on someone else’s bunk or at their usual table.  
- **DO** keep noise down during early morning and late night.  
- **DO** participate in basic cleaning if it’s a shared space (trash, floor, sink, shower if it’s a unit job).  
- **DO** lock up or secure your property if your facility has lockers or footlockers.

### Hard DON’Ts

- **DON’T** touch other people’s property without permission — not even to “straighten” it.  
- **DON’T** go into someone else’s cell or cube without them present unless the prison’s rules explicitly require it.  
- **DON’T** use someone else’s hygiene items, clothes, or commissary.  
- **DON’T** slam doors, bang on rails, or blast TV/radio in ways that disturb others.

### Use-Your-Judgment

- In some units, certain seats (TV area, dayroom tables) are informally “claimed.”  
  - **DO** watch for a few days to see where people consistently sit.  
  - **DO** ask quietly, “Is anyone sitting here?”  
  - **DON’T** dig in or argue if someone asks you to move — it’s not worth it.

For people with sex-offense convictions, **housing is usually calmer than imagined** — especially in low-security and SO-heavy units. Cleanliness, respect, and quiet routine go a long way.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 3. Social Navigation */}
      <SectionBand title="3. Social Navigation & Prison Culture" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 3. Social Navigation & Prison Culture

You do **not** need to be popular, tough, or socially dominant. You need to be predictable, respectful, and boring.

### Hard DOs

- **DO** greet people with simple, neutral respect: “Morning,” “What’s up,” “Excuse me.”  
- **DO** introduce yourself to bunkies or immediate neighbors early.  
- **DO** keep conversation light unless you know someone well.  
- **DO** spend your time around people whose behavior you want to mirror (walkers, readers, workers, guys in classes).

### Hard DON’Ts

- **DON’T** gossip or repeat what you’ve heard about others.  
- **DON’T** comment on anyone’s charges, sentence, case, or past.  
- **DON’T** try to be funny by disrespecting people.  
- **DON’T** ask about someone’s crime; let them share if they want to.

### Daily Etiquette Everyone Follows (Even if Unspoken)

- **DON’T** look into other people’s cells or cubes — even a quick glance is considered intrusive.  
- **DO** walk with your eyes forward, not scanning faces or other people’s property.  
- **DON’T** watch other people’s interactions with staff.  
- **DON’T** hover near phone calls or listen in.  
- **DON’T** stand too close behind someone in line.  
- **DO** give people space in tight areas (microwaves, phones, showers).  
- **DON’T** interject yourself into someone else’s conversation — it can look like you were eavesdropping, even if you weren’t.  
- **DO** mind your own business at all times.  

This etiquette is not optional. In prison, privacy is symbolic, and violating it creates conflict.

### SO-Specific Notes

People with sex-offense convictions are often **the majority** in certain units or prisons. That changes the social dynamic:

- “Chomo” gets used casually, sometimes about half the unit.  
- Many others are in almost the same position as you — older, first-time, non-violent, online cases.

You do **not** need to defend yourself from the label. What matters is how you behave, not what slang people use.

### Use-Your-Judgment

- Some yards have active “cars” (race- or region-based groups).  
  Others (especially SO-heavy lows) treat cars as loose social clusters.  
  - **DO** keep a friendly but neutral stance — say hello, don’t pledge allegiance.  
  - **DON’T** jump into “we” language about any car; just be you.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 4. Money, Debt, and Commissary */}
      <SectionBand title="4. Money, Debt, and Commissary" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 4. Money, Debt, and Commissary

If there is one domain where rules are nearly universal, it’s this one: **debt and gambling create danger.**  
Handbooks across the country — including the **[BOP Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)** — classify gambling and debt as misconduct.

### Hard DOs

- **DO** live within your means.  
- **DO** keep track of your spending and balance.  
- **DO** send money home or save if you can — don’t let it become a status thing inside.  
- **DO** say, “I don’t borrow and I don’t lend, but I appreciate you offering,” if someone pushes commissary on you.

### Hard DON’Ts

- **DON’T** borrow food, coffee, stamps, or hygiene “until store.”  
- **DON’T** gamble — cards, sports bets, any kind of pool.  
- **DON’T** let others use your account, number, or PIN (explicitly banned in BOP policy and many state systems).  
- **DON’T** run a store or reselling operation (common rule violation).

### Use-Your-Judgment

Generosity can create expectation.  
Be financially invisible.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 5. Safety & Danger Zones */}
      <SectionBand title="5. Safety & Danger Zones" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 5. Safety & Danger Zones

There is no way to make prison risk-free, but you can dramatically reduce your risk.

### Hard DOs

- **DO** stay away from known trouble spots: bathrooms when large groups congregate, dark corners, areas where people constantly argue.  
- **DO** walk with purpose — not rushed, not lurking.  
- **DO** leave immediately if an argument escalates near you.  
- **DO** trust your gut: if a person or area feels “off,” quietly avoid it.

### Hard DON’Ts

- **DON’T** play the hero in other people’s conflicts.  
- **DON’T** respond to minor disrespect with aggression; a simple “My bad,” or walking away is usually enough.  
- **DON’T** carry contraband or do favors that involve hiding items for others.  
- **DON’T** agree to hold or move anything you don’t understand.

### PREA & Sexual Safety

Under PREA, facilities must provide ways to report sexual abuse or harassment, including outside channels.  
See: **[BJA PREA Overview](https://bja.ojp.gov/program/prea/overview)**  
And: **[PREA Resource Center](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**

Hard rules:

- **DO** report sexual abuse or serious threats through the channels your facility provides.  
- **DO** document what happened (dates, times, names) as soon as you safely can.  
- **DON’T** assume you have no options; PREA requires multiple ways to report.

### Use-Your-Judgment

In SO-heavy environments, the biggest dangers are usually **not** about your offense — they’re about **debt, drugs, and personal conflicts.**
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      <Divider label="Next → Sections 6 – 12 Staff · Programs · Health" />
{/* 6. Staff & Rules */}
      <SectionBand title="6. Staff & Rules" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 6. Staff & Rules

Staff can significantly shape your day-to-day life. Policies and handbooks emphasize following staff instructions, reporting abuse, and using grievance systems for complaints. General examples include BOP handbooks such as the **[Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)** and federal policy statements like the **[Admission & Orientation Program Statement 5290.14](https://www.bop.gov/policy/progstat/5290_014.pdf)**.

### Hard DOs

- **DO** follow direct orders unless they’re obviously illegal or clearly put you in immediate danger.  
- **DO** keep interactions short, respectful, and businesslike.  
- **DO** use grievance or request processes for non-emergency issues.  
- **DO** attend admission and orientation (A&O) programs and actually read the handbook.  
  - A&O attendance is required by BOP policy: **[Program Statement 5290.14](https://www.bop.gov/policy/progstat/5290_014.pdf)**

### Hard DON’Ts

- **DON’T** argue, roll your eyes, or show open contempt to staff; they control counts, moves, passes, and write-ups.  
- **DON’T** try to “befriend” staff or be overly familiar — that can cause problems both with staff and other incarcerated people.  
- **DON’T** ask staff to break rules for you. If they do, it can backfire hard.

### Use-Your-Judgment

Some staff are decent and consistent; others are moody or arbitrary.

- **DO** adapt your expectations to the individual CO without sucking up.  
- **DO** document important interactions (dates, times, what was said) if there’s a pattern of unfair treatment.

For SOs, **staying off staff radar** most of the time is ideal: follow rules, don’t create work for them, and don’t make yourself their project.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 7. Programs, Work, and Education */}
      <SectionBand title="7. Programs, Work, and Education" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 7. Programs, Work, and Education

Work and programs aren’t just about “checking boxes” — they structure your day and shape how staff and other incarcerated people see you. The BOP and many state systems classify people, assign work, and prioritize program needs for security and rehabilitation. See, for example, **[BOP’s “Federal Prisons” overview](https://www.bop.gov/about/facilities/federal_prisons.jsp)** for how security levels and programs fit together.

### Hard DOs

- **DO** accept a work assignment and show up on time.  
- **DO** put in a reasonable effort — you don’t have to be a star, but don’t be lazy.  
- **DO** sign up for education programs you’re eligible for (GED, college classes, vocational training).  
- **DO** use the library — for legal work and for your own mind.

### Hard DON’Ts

- **DON’T** refuse jobs without a serious, documented reason.  
- **DON’T** fake illness to get out of work on a regular basis — it builds a bad reputation.  
- **DON’T** treat programs as a joke; your counselor’s notes can affect classification, transfers, and sometimes early-release opportunities.

### Use-Your-Judgment

Some programs are well-run; others are a time-filler.

- **DO** aim for programs that help your mind (education), your body (fitness), or your reentry (vocational).  
- **DO** be strategic: a “good worker with no problems” is a label you want staff to use about you.

For SOs, consistent program participation reinforces the image that you are **low-risk, compliant, and trying to change**, which helps in classification reviews and sometimes in post-release decisions.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 8. Medical & Mental Health */}
      <SectionBand title="8. Medical & Mental Health" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 8. Medical & Mental Health

Most systems provide at least basic access to medical and mental-health services, but often with copays or delays; handbooks typically describe sick-call procedures and mental-health referrals. Examples include general BOP handbooks and policy guidance. A good supplemental primer is the **[NACDL guide to navigating the federal prison system](https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf)**, which explains health care access and limitations in plain language.

### Hard DOs

- **DO** report serious medical symptoms promptly.  
- **DO** use sick call and follow procedure even if it’s slow.  
- **DO** request mental-health support if you are experiencing panic, suicidal thoughts, or intense depression.  
- **DO** be honest about self-harm thoughts; staff are required to respond.

### Hard DON’Ts

- **DON’T** self-medicate with illegal drugs or hoarded meds.  
- **DON’T** ignore chest pain, serious infection, or major injuries.  
- **DON’T** threaten self-harm just to get a move — it can lead to restrictive placements that feel worse.

### Use-Your-Judgment

Mental-health services vary in quality.

- **DO** use them anyway if you are in crisis.  
- **DO** supplement with your own coping routines: walking, journaling, meditation, spiritual practices, structured days.

For people with sex-offense convictions — especially those with no prior criminal history — **mental health is a survival domain**, not an optional extra.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 9. Yard, Recreation, and Movement */}
      <SectionBand title="9. Yard, Recreation, and Movement" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 9. Yard, Recreation, and Movement

The yard is where you’ll spend a lot of your “free” time. Security levels differ, but official BOP materials such as the **[Security Levels overview](https://www.bop.gov/about/facilities/federal_prisons.jsp)** describe how minimum, low, medium, and high facilities differ in movement restrictions and programming.

### Hard DOs

- **DO** use the yard regularly for exercise — it helps sleep, mood, and stress.  
- **DO** walk or work out with a stable, low-drama partner or group.  
- **DO** pay attention to movement rules (what time you must be back inside, where you can and can’t go).

### Hard DON’Ts

- **DON’T** hover near groups that are arguing or “politicking.”  
- **DON’T** stand staring at people; it’s seen as intrusive.  
- **DON’T** join pickup sports if they’re known to get heated and you don’t handle conflict well.

### Use-Your-Judgment

Some yards are dominated by sports; others by walkers and small groups.

- **DO** find activities that regulate you emotionally — walking, light workouts, stretching, quiet conversation.  
- **DON’T** feel pressured to join intense sports if you’re not that person.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 10. Hygiene & Cleanliness */}
      <SectionBand title="10. Hygiene & Cleanliness" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 10. Hygiene & Cleanliness

Every handbook on earth cares about cleanliness and bans certain unsanitary behavior. See any BOP institutional handbook (for example, the **[Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)**).

### Hard DOs

- **DO** shower regularly, within the norms of your unit (daily or every other day if possible).  
- **DO** brush your teeth, wash your clothes, and keep your bedding reasonably clean.  
- **DO** clean up after yourself in shared spaces (toilets, sinks, showers, microwaves).

### Hard DON’Ts

- **DON’T** leave hair, trash, or spilled food behind.  
- **DON’T** skip showers for long stretches unless there’s a clear, temporary reason (lockdowns, water issues).  
- **DON’T** handle food with unwashed hands in front of others.

### Use-Your-Judgment

Some facilities provide better supplies than others.

- **DO** budget commissary for basics: soap, toothpaste, maybe extra laundry soap if needed.  
- **DO** respect how important smell and cleanliness are in cramped spaces.

Being clean and low-impact on others’ comfort is a **quiet but powerful safety strategy**.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 11. Boundaries, Sex, and PREA */}
      <SectionBand title="11. Boundaries, Sex, and PREA" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 11. Boundaries, Sex, and PREA

Sex in prison is **never simple** and is often prohibited outright, even when it appears consensual, under many systems’ rules and PREA definitions.

- DOJ PREA Final Rule (full standards):  
  **[Federal Register – PREA Standards](https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape)**  
- PREA Resource Center summary: **[About PREA](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**  
- BJA PREA overview: **[BJA PREA Program](https://bja.ojp.gov/program/prea/overview)**

### Hard DOs

- **DO** know that sexual contact can be treated as a rule violation or abuse issue, even if you think it’s consensual.  
- **DO** report sexual abuse or coercion through available PREA channels.  
- **DO** set clear boundaries if someone flirts or tests you sexually: “I’m not into that; I’m just doing my time.”

### Hard DON’Ts

- **DON’T** engage in sexual activity with others — it can trigger serious consequences, retaliation, or reclassification.  
- **DON’T** trade sex for protection, commissary, or favors.  
- **DON’T** make sexual comments, jokes, or gestures toward others.

### Use-Your-Judgment

Sexuality in prison is a charged topic; for people with sex-offense convictions, participating in anything sexual inside is especially risky.

- **DO** keep your sexual life in your thoughts, writing, or therapy, not in your behavior.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 12. Disclosure, Paperwork, and Lingo */}
      <SectionBand title="12. Disclosure, Paperwork, and Lingo" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 12. Disclosure, Paperwork, and Lingo

Questions about your case will come up. How you handle them matters more than the details of your offense, especially in SO-heavy environments.

### Hard DOs

- **DO** keep your answer short and honest:  
  - “Non-violent, federal case.”  
  - “Sex-offense, internet case.”  
  - “I’ve got a sex charge; I’m doing my time and going home.”  
- **DO** show your paperwork if the culture of the yard expects it and if it’s safe to do so.  
- **DO** keep it simple: nobody needs your life story.

### Hard DON’Ts

- **DON’T** lie — lies almost always unravel.  
- **DON’T** over-explain or give graphic details about your charges.  
- **DON’T** act defensive; it signals insecurity.

### Common Prison Lingo (What It Means and How It Affects Safety)

- **“Chomo”** – generic term for anyone with a sex offense; not automatically a threat word.  
- **“Car”** – informal group, often by race or region; varies by facility.  
- **“Checking in”** – asking for protective custody; done for many reasons, not just SO status.  
- **“Kite”** – written note passed through official or unofficial channels.  
- **“Paperwork”** – your judgment and PSR.  
- **“Shot caller”** – someone with informal influence in a car; often irrelevant in SO-heavy yards.  
- **“Active / non-active yard”** – active means politics are enforced; non-active means fewer politics.

### Use-Your-Judgment

- **DO** learn the lingo so you don’t misinterpret normal conversation as a threat.  
- **DON’T** try to use lingo to “sound tough.” It backfires.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      <Divider label="Next → Sections 13 – 19 Conflict · Mindset · Reentry" />
{/* 13. Conflict, Bullying, and Threats */}
      <SectionBand title="13. Conflict, Bullying, and Threats" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 13. Conflict, Bullying, and Threats

Conflict happens in any confined environment, but people with sex-offense convictions are far *less* likely than most other groups to be involved in violence — partly due to age, temperament, and placement in SO-heavy units.

### Hard DOs

- **DO** walk away early when something feels off.  
- **DO** defuse tension with polite, simple language:  
  - “My bad.”  
  - “All good.”  
  - “No disrespect.”  
- **DO** change your routine quietly if someone is clearly targeting you for annoyance rather than violence.  
- **DO** report credible threats through the channels your facility provides, especially if there is a safety concern.  

### Hard DON’Ts

- **DON’T** mouth off, posture, or escalate arguments to “save face.”  
- **DON’T** let pride override basic safety or common sense.  
- **DON’T** try to “win” verbal confrontations — winning creates resentment; neutrality creates distance.  
- **DON’T** borrow someone else’s problems by getting involved in fights or alliances.

### Use-Your-Judgment

Most conflict can be resolved by:

- walking away  
- changing seats  
- avoiding certain times of day  
- steering clear of specific people  

In SO units, most people *want no problems at all.* They’re older, quieter, and doing time the same way you are.

If you think someone is trying to bait you into conflict, you’re probably right — and the safest move is **no reaction at all.**
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 14. Mental Health, Shame, and Identity */}
      <SectionBand title="14. Mental Health, Shame, and Identity" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 14. Mental Health, Shame, and Identity

Prison forces a kind of internal reckoning that is painful, especially for people with no prior criminal history — which includes a very large share of those convicted of sex-related offenses.

### Hard DOs

- **DO** acknowledge shame, fear, grief, and identity crises as normal.  
- **DO** find one or two safe ways to process (journaling, walking, reading, meditation, faith practice).  
- **DO** reach out for mental-health support if thoughts turn dark or hopeless.  
- **DO** maintain small, daily habits that anchor you emotionally.

### Hard DON’Ts

- **DON’T** numb yourself with fantasy or denial — it makes reentry harder.  
- **DON’T** catastrophize (“My life is over”) — you are in a temporary environment, not a permanent state.  
- **DON’T** hide depression or suicidal thoughts; vulnerability is not weakness here.

### Use-Your-Judgment

You will see everything from:

- men collapsing emotionally in the first month  
- men who improve dramatically with structure  
- men who panic at release because the world outside feels overwhelming  

Your goal is not to “be strong.”  
Your goal is to **adapt**, **heal**, and **build the habits** you’ll rely on later.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 15. Religion, Groups, and Community */}
      <SectionBand title="15. Religion, Groups, and Community" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 15. Religion, Groups, and Community

Religion is often a refuge in prison. Most facilities allow multiple services and study groups, including Christian, Jewish, Muslim, Buddhist, and sometimes secular or recovery-oriented gatherings.

### Hard DOs

- **DO** attend services if they keep you grounded.  
- **DO** join faith or meditation groups if they help you stay centered.  
- **DO** respect all faiths and practices.

### Hard DON’Ts

- **DON’T** join a religious group just for protection — it creates problems.  
- **DON’T** argue doctrine or criticize someone else’s beliefs.  
- **DON’T** use religion as a mask for manipulation; people see through it fast.

### Use-Your-Judgment

Spiritual communities can be stabilizing, but stay **low-drama** and avoid groups that are known for conflict.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 16. Reentry Mindset */}
      <SectionBand title="16. Reentry Mindset (Yes, From Day One)" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 16. Reentry Mindset (Yes, From Day One)

Every decision you make inside affects the version of you that walks out the gate.

### Hard DOs

- **DO** structure your day the way you hope to structure your life after release.  
- **DO** maintain contact with family and future support networks.  
- **DO** take programs seriously; document participation if you can.  
- **DO** keep your disciplinary record clean. It matters — for jobs, transitions, and credibility with probation.

### Hard DON’Ts

- **DON’T** adopt a “prison identity” that you can’t carry into the community.  
- **DON’T** spend years gaming the system instead of improving yourself.  
- **DON’T** assume reentry will be easy — start preparing early.

### Use-Your-Judgment

Think of prison as a long, enforced pause.  
You can come out:

- more stable  
- more humbled  
- more structured  
- more disciplined  

…or more chaotic and defeated.  
Routine and mindset determine which outcome you choose.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 17. What Makes SO Time Different — And What Doesn’t */}
      <SectionBand title="17. What Makes SO Time Different — And What Doesn’t" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 17. What Makes SO Time Different — And What Doesn’t

There are ways in which being incarcerated for a sex offense is truly different:

- stigma exists  
- family shame is heavier  
- supervision after release is restrictive  
- programming availability varies  
- you are often isolated from general populations or barred from camps due to the **Public Safety Factor — Sex Offender** in BOP policy (see: **[PSF definitions](https://www.bop.gov/inmates/custody_and_care/classification.jsp)**)

But there are also ways in which it is surprisingly *not* different:

- most people do not care about your case as long as you mind your business  
- most violence has nothing to do with sex-offense stigma  
- routine, mindset, and behavior matter far more than your charge  
- many units are majority-SO environments  
- safety comes from the same habits everyone else uses  

Your job is to understand the environment, not fear the myths.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      <Divider label="Next → Sections 18–19 and References" />
{/* 18. The 20 Most Reliable Dos and Don’ts */}
      <SectionBand title="18. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 18. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)

### **Top 10 DOs**

1. **Do** walk, talk, and move calmly.  
2. **Do** build a predictable daily routine.  
3. **Do** live within your means — avoid all debt.  
4. **Do** keep your cell/cube clean and low-impact.  
5. **Do** stay close to low-drama people and activities.  
6. **Do** use education, programs, and work as anchors.  
7. **Do** protect your mental health with structured habits.  
8. **Do** respect privacy — eyes forward, ears off others.  
9. **Do** maintain solid family contact.  
10. **Do** prepare for reentry from day one.

### **Top 10 DON’Ts**

1. **Don’t** gamble or borrow — ever.  
2. **Don’t** lie about your case.  
3. **Don’t** get pulled into other people’s conflicts.  
4. **Don’t** act loud, aggressive, or perform toughness.  
5. **Don’t** disrespect staff or try to befriend them.  
6. **Don’t** ignore medical or mental-health issues.  
7. **Don’t** drift into bad habits or bad company.  
8. **Don’t** insert yourself into conversations or stare into cells.  
9. **Don’t** make sexual jokes, comments, or gestures.  
10. **Don’t** catastrophize — prison is survivable; panic is optional.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* 19. Final Words for You — and for Your Family */}
      <SectionBand title="19. Final Words for You — and for Your Family" emblem="🔹" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
## 19. Final Words for You — and for Your Family

### For the person going inside:

You are not walking into the nightmare the internet sells.  
You are walking into a rigid, bureaucratic, often boring world full of people trying to survive their own sentence.  

If you follow the simple habits in this guide:

- calm demeanor  
- predictable routine  
- clean area  
- debt-free life  
- eyes forward  
- low drama  
- honest but brief answers  
- structured days  

…you will be safer, more stable, and more emotionally grounded than you imagine right now.

Prison is not the end of your life.  
It is a **season** — a harsh one, yes, but temporary.

### For families:

Your loved one is not walking into a gladiator arena.  
They are walking into a controlled environment with:

- counts  
- staff  
- rules  
- routine  
- structure  
- hundreds of other people doing the exact same thing  

Their fear is real because the unknown is terrifying.  
But once inside, routine replaces panic, predictability replaces fear, and stability replaces overwhelm.

Stay connected.  
Stay grounded.  
Understand the reality, not the mythology.  
And remember: most people with sex-offense convictions do their time safely and return home.
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      {/* References & Further Reading */}
      <SectionBand title="References & Further Reading" emblem="📚" />
      <SectionCard>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`
# References & Further Reading

### Primary Policy and System Sources
- **Federal Bureau of Prisons – Inmate Information Handbook**  
  https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf  

- **BOP – Custody & Classification Overview**  
  https://www.bop.gov/inmates/custody_and_care/classification.jsp  

- **BOP – Federal Prisons & Security Levels**  
  https://www.bop.gov/about/facilities/federal_prisons.jsp  

- **BOP – Security Level Statistical Breakdown**  
  https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp  

- **DOJ – PREA Final Rule** (Federal Register)  
  https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape  

- **PREA Resource Center – Overview**  
  https://www.prearesourcecenter.org/about/prison-rape-elimination-act  

- **BJA – PREA Program**  
  https://bja.ojp.gov/program/prea/overview  

- **NACDL – “How to Navigate the Federal Prison System”**  
  https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf  


### Prison Population & Family Impact Research
- **The Sentencing Project – Responding to Crimes of a Sexual Nature**  
  https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/  

- **BJS – Parents in Prison and Their Minor Children**  
  https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf  

- **Prison Policy Initiative – Parental Incarceration**  
  https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/  

- **Poehlmann et al. – “Children’s Contact With Their Incarcerated Parents”** (NIH/PMC)  
  https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/
          `}</ReactMarkdown>
        </div>
      </SectionCard>

      <SourcesOffline />
    </GuideLayout>
  );
}