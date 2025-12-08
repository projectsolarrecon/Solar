import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  Checklist,
  SourcesOffline,
  TOC,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function Prison_Dos_and_Donts_Guide(): JSX.Element {
  return (
    <GuideLayout
      title="Prison Dos & Don’ts for People with Sex-Offense Convictions"
      description="A practical survival guide for incarcerated people and their families navigating prison life safely and sanely."
      keywords="prison safety, sex offense, incarceration, PREA, survival guide, federal prison, BOP handbook"
      date="Dec 2025"
      readTime="35 min"
      badge="📘 RESOURCE GUIDE"
      lede="A full-spectrum, plain-language guide for people entering U.S. prisons on sex-offense convictions — and for their families who want real answers, not fear myths."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      <SectionBand title="0. Who This Guide Is For (And What It Is Not)" emblem="🎯" />
      <SectionCard>
        {`
# PRISON DOS & DON’TS FOR PEOPLE WITH SEX-OFFENSE CONVICTIONS  
*A Practical Survival Guide for Incarcerated People and Their Families*


---

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

The guidance is **population-agnostic at the source**, then interpreted specifically for **people with sex-offense convictions**, given the realities of stigma, placement, and daily life in SO-heavy facilities.
`}
      </SectionCard>

      <SectionBand title="1. Core Principles: The Four Rules That Matter Everywhere" emblem="⚖️" />
      <SectionCard>
        {`
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

- **DON’T** gamble, run tabs, or borrow commissary from others.  
- **DON’T** use or sell drugs.  
- **DON’T** yell, brag, posture, or act like you’re in a movie.  
- **DON’T** lie about your charges — it often gets exposed and destroys trust.

### Use-Your-Judgment

- **DO** adjust how much you talk depending on the yard culture.  
- **DO** pay attention to who seems stable and who brings drama.

If you remember nothing else from this guide, remember these four principles.
`}
      </SectionCard>

      <SectionBand title="2. Housing & Living Space Etiquette" emblem="🛏️" />
      <SectionCard>
        {`
Your bunk, cell, or cube is your anchor. How you behave there sets your reputation.

### Hard DOs
- **DO** keep your area clean and organized.  
- **DO** ask before sitting on someone else’s bunk or table.  
- **DO** keep noise down during early morning and late night.  
- **DO** participate in basic cleaning if it’s a shared space.  
- **DO** lock up or secure your property.

### Hard DON’Ts
- **DON’T** touch other people’s property without permission.  
- **DON’T** go into someone else’s cell or cube without them present.  
- **DON’T** use someone else’s hygiene items or commissary.  
- **DON’T** slam doors or blast TV/radio.

### Use-Your-Judgment
Observe seating customs, ask politely, avoid conflict.  
For people with sex-offense convictions, housing is usually calmer than imagined — cleanliness and quiet routine go a long way.
`}
      </SectionCard>

      <SectionBand title="3. Social Navigation & Prison Culture" emblem="🤝" />
      <SectionCard>
        {`
You do **not** need to be popular, tough, or dominant. You need to be predictable, respectful, and boring.

### Hard DOs
- **DO** greet people with simple, neutral respect.  
- **DO** introduce yourself to bunkies or neighbors early.  
- **DO** keep conversation light unless you know someone well.  
- **DO** spend time around people whose behavior you want to mirror.

### Hard DON’Ts
- **DON’T** gossip or repeat what you’ve heard.  
- **DON’T** comment on anyone’s charges.  
- **DON’T** try to be funny by disrespecting people.  
- **DON’T** ask about someone’s crime.

---

### Daily Etiquette Everyone Follows (Even if Unspoken)
- **DON’T** look into other people’s cells.  
- **DO** walk eyes forward.  
- **DON’T** watch others’ interactions with staff.  
- **DON’T** hover near phones or listen in.  
- **DON’T** stand too close in line.  
- **DO** give space in tight areas.  
- **DON’T** interject into conversations.  
- **DO** mind your own business.

Privacy is symbolic; violating it creates conflict.

People with sex-offense convictions are often the majority in certain units. You don’t need to defend yourself from labels; behavior matters more than slang.
`}
      </SectionCard>
<SectionBand title="4. Money, Debt, and Commissary" emblem="💵" />
      <SectionCard>
        {`
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
- **DON’T** let others use your account, number, or PIN.  
- **DON’T** run a store or reselling operation.

### Use-Your-Judgment
Generosity can create expectation.  
Be financially invisible.
`}
      </SectionCard>

      <SectionBand title="5. Safety & Danger Zones" emblem="🚨" />
      <SectionCard>
        {`
There is no way to make prison risk-free, but you can dramatically reduce your risk.

### Hard DOs
- **DO** stay away from known trouble spots: bathrooms when large groups congregate, dark corners, areas where people constantly argue.  
- **DO** walk with purpose — not rushed, not lurking.  
- **DO** leave immediately if an argument escalates near you.  
- **DO** trust your gut.

### Hard DON’Ts
- **DON’T** play the hero in other people’s conflicts.  
- **DON’T** respond to minor disrespect with aggression.  
- **DON’T** carry contraband or hide items for others.  
- **DON’T** agree to hold or move anything you don’t understand.

### PREA & Sexual Safety
Under PREA, facilities must provide ways to report sexual abuse or harassment, including outside channels.  
See: **[BJA PREA Overview](https://bja.ojp.gov/program/prea/overview)** and **[PREA Resource Center](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**  

Hard rules:  
- **DO** report sexual abuse or serious threats through official channels.  
- **DO** document what happened as soon as safely possible.  
- **DON’T** assume you have no options; PREA requires multiple ways to report.

### Use-Your-Judgment  
In SO-heavy environments, the biggest dangers are usually not about your offense — they’re about **debt, drugs, and personal conflicts.**
`}
      </SectionCard>

      <SectionBand title="6. Staff & Rules" emblem="🧑‍✈️" />
      <SectionCard>
        {`
Staff can significantly shape your day-to-day life. Policies and handbooks emphasize following staff instructions, reporting abuse, and using grievance systems. Examples include the **[Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)** and **[Program Statement 5290.14](https://www.bop.gov/policy/progstat/5290_014.pdf)**.

### Hard DOs
- **DO** follow direct orders unless they’re obviously illegal or unsafe.  
- **DO** keep interactions short, respectful, businesslike.  
- **DO** use grievance or request forms for non-emergency issues.  
- **DO** attend admission & orientation and actually read the handbook.

### Hard DON’Ts
- **DON’T** argue, roll eyes, or show contempt.  
- **DON’T** try to “befriend” staff.  
- **DON’T** ask staff to break rules for you.

### Use-Your-Judgment
Some staff are consistent; others moody.  
Document patterns of unfair treatment.  
For SOs, staying off staff radar most of the time is ideal: follow rules, don’t create work for them.
`}
      </SectionCard>

      <SectionBand title="7. Programs, Work, and Education" emblem="🎓" />
      <SectionCard>
        {`
Work and programs aren’t just about “checking boxes” — they structure your day and shape how others see you. See **[BOP’s “Federal Prisons” overview](https://www.bop.gov/about/facilities/federal_prisons.jsp)**.

### Hard DOs
- **DO** accept a work assignment and show up on time.  
- **DO** put in reasonable effort.  
- **DO** sign up for education programs (GED, college, vocational).  
- **DO** use the library for learning and legal research.

### Hard DON’Ts
- **DON’T** refuse jobs without valid reason.  
- **DON’T** fake illness to skip work.  
- **DON’T** treat programs as a joke — staff notes affect classification and reentry.

### Use-Your-Judgment
Aim for programs that help mind, body, and reentry. Being a “good worker with no problems” helps you with staff and future reviews.
`}
      </SectionCard>

      <SectionBand title="8. Medical & Mental Health" emblem="🩺" />
      <SectionCard>
        {`
Most systems provide basic medical and mental-health services, often with copays or delays. See the **[NACDL Guide to Navigating the Federal Prison System](https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf)**.

### Hard DOs
- **DO** report serious symptoms promptly.  
- **DO** use sick call and follow procedure.  
- **DO** request mental-health help for panic or depression.  
- **DO** be honest about self-harm thoughts.

### Hard DON’Ts
- **DON’T** self-medicate or hoard meds.  
- **DON’T** ignore chest pain or infection.  
- **DON’T** fake crisis for moves — it can backfire.

### Use-Your-Judgment
Mental-health services vary in quality — use them anyway. Supplement with your own coping routines.  
For first-timers with sex-offense convictions, mental health is a survival domain, not optional.
`}
      </SectionCard>
<SectionBand title="9. Yard, Recreation, and Movement" emblem="🏃" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="10. Hygiene & Cleanliness" emblem="🧼" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="11. Boundaries, Sex, and PREA" emblem="🚫" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="12. Disclosure, Paperwork, and Lingo" emblem="📄" />
      <SectionCard>
        {`
Questions about your case will come up. How you handle them matters more than the details of your offense, especially in SO-heavy environments.

### Hard DOs
- **DO** keep your answer short and honest:  
  - “Non-violent, federal case.”  
  - “Sex-offense, internet case.”  
  - “I’ve got a sex charge; I’m doing my time and going home.”  
- **DO** refuse to show paperwork if your unit’s culture doesn’t demand it.  
- **DO** be consistent — don’t change your story.

### Hard DON’Ts
- **DON’T** lie about your charges; paperwork, legal calls, or gossip often expose it.  
- **DON’T** overshare details, especially if your offense involved children.  
- **DON’T** argue or debate your case with strangers on the unit.

### Use-Your-Judgment
In some prisons, paperwork checks are a big deal; in others, almost no one cares.  
- **DO** ask a couple of safe people quietly: “What’s the culture like here on paperwork?”  
- **DO** default to simple, honest, low-detail answers unless you fully trust the person asking.
`}
      </SectionCard>

      <SectionBand title="13. Family Contact & Communication" emblem="📞" />
      <SectionCard>
        {`
Contact with family is one of the strongest protective factors for mental health and reentry. BJS and multiple reviews highlight family ties as predictors of better outcomes.

Sources:
- **[Prison Policy Initiative – Parental Incarceration](https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/)**  
- **[BJS – Parents in Prison and Their Minor Children](https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf)**  
- **[Poehlmann et al., “Children’s Contact With Their Incarcerated Parents”](https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/)**  

### Hard DOs
- **DO** stay in regular contact through letters, phone, and visits if allowed.  
- **DO** be honest but measured about conditions.  
- **DO** reassure your family when you are safe.  
- **DO** encourage them to set healthy boundaries emotionally and financially.

### Hard DON’Ts
- **DON’T** demand money or guilt them.  
- **DON’T** use family as emotional punching bag.  
- **DON’T** hide serious safety or medical crises — share factually, not fearfully.

### Use-Your-Judgment
Families need to hear that you are adapting and taking safety seriously.  
- **DO** share routines: “I walk every morning, work in the afternoon, read at night.”  
- **DO** invite them to read guides like this so they understand reality, not myths.
`}
      </SectionCard>

      <SectionBand title="14. Handling Conflict, Bullying, and Threats" emblem="🛡️" />
      <SectionCard>
        {`
Conflict happens in any confined environment, but people with sex-offense convictions are far *less* likely than most other groups to be involved in violence.

### Hard DOs
- **DO** walk away early when something feels off.  
- **DO** defuse tension with “My bad,” “All good,” or “No disrespect.”  
- **DO** change your routine quietly if someone targets you.  
- **DO** report credible threats.

### Hard DON’Ts
- **DON’T** mouth off, posture, or escalate to save face.  
- **DON’T** let pride override safety.  
- **DON’T** try to “win” verbal confrontations.  
- **DON’T** borrow others’ problems.

### Use-Your-Judgment
Most conflict can be resolved by walking away, changing seats or times, or avoiding certain people.  
In SO units, most people want no problems at all.  
If someone tries to bait you — **no reaction** is safest.
`}
      </SectionCard>

      <SectionBand title="15. Mental Health, Shame, and Identity" emblem="🧠" />
      <SectionCard>
        {`
Prison forces internal reckoning that is painful, especially for first-time offenders.

### Hard DOs
- **DO** acknowledge shame, fear, grief, and identity crises as normal.  
- **DO** process through journaling, walking, meditation, faith.  
- **DO** reach out for mental-health support if thoughts turn dark.  
- **DO** maintain daily habits that anchor you emotionally.

### Hard DON’Ts
- **DON’T** numb yourself with fantasy or denial.  
- **DON’T** catastrophize (“My life is over”).  
- **DON’T** hide depression or suicidal thoughts.

### Use-Your-Judgment
You’ll see men collapse, improve, or panic at release.  
Your goal isn’t to “be strong.” It’s to **adapt**, **heal**, and **build habits** for later.
`}
      </SectionCard>

      <SectionBand title="16. Religion, Groups, and Community" emblem="🙏" />
      <SectionCard>
        {`
Religion is often a refuge in prison. Most facilities allow multiple services and study groups.

### Hard DOs
- **DO** attend services if they keep you grounded.  
- **DO** join faith or meditation groups that help you stay centered.  
- **DO** respect all faiths and practices.

### Hard DON’Ts
- **DON’T** join religious groups just for protection.  
- **DON’T** argue doctrine.  
- **DON’T** use religion manipulatively.

### Use-Your-Judgment
Spiritual communities can stabilize you — stay **low-drama** and avoid groups known for conflict.
`}
      </SectionCard>
<SectionBand title="17. Reentry Mindset (Yes, From Day One)" emblem="🚪" />
      <SectionCard>
        {`
Every decision you make inside affects the version of you that walks out the gate.

### Hard DOs
- **DO** structure your day the way you hope to structure your life after release.  
- **DO** maintain contact with family and future support networks.  
- **DO** take programs seriously; document participation if you can.  
- **DO** keep your disciplinary record clean.

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
`}
      </SectionCard>

      <SectionBand title="18. What Makes SO Time Different — And What Doesn’t" emblem="⚖️" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="19. The 20 Most Reliable Dos and Don’ts (A One-Page Summary)" emblem="📋" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="20. Final Words for You — and for Your Family" emblem="💬" />
      <SectionCard>
        {`
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
`}
      </SectionCard>

      <SectionBand title="References & Further Reading" emblem="📚" />
      <SectionCard>
        {`
### Primary Policy and System Sources
- **Federal Bureau of Prisons – Inmate Information Handbook**  
  https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf  
- **BOP – Custody & Classification Overview**  
  https://www.bop.gov/inmates/custody_and_care/classification.jsp  
- **BOP – Federal Prisons & Security Levels**  
  https://www.bop.gov/about/facilities/federal_prisons.jsp  
- **BOP – Security Level Statistical Breakdown**  
  https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp  
- **DOJ – PREA Final Rule**  
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
- **Poehlmann et al. – “Children’s Contact With Their Incarcerated Parents”**  
  https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/  
`}
      </SectionCard>

      <SectionBand title="Related Reading" emblem="🔗" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/resources/reentry-basics">
              Reentry Basics Guide
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties (Blog)
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/family-support">
              Family Support Guide
            </Link>
          </li>
        </ul>
      </SectionCard>

      <div className="mt-10">
        <SourcesOffline />
      </div>
    </GuideLayout>
  );
}