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
import ReactMarkdown from "react-markdown";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

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

      <SectionBand
        title="0. Who This Guide Is For (And What It Is Not)"
        emblem="🎯"
      />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
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
        </ReactMarkdown>
      </SectionCard>

      <SectionBand
        title="1. Core Principles: The Four Rules That Matter Everywhere"
        emblem="⚖️"
      />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
No matter what state, security level, or yard you land on, four principles are almost universal:

1. **Calm is currency.**  
2. **Routine is safety.**  
3. **Debt is danger.**  
4. **Honest but brief about your case is safer than lying.**

### Hard DOs
- **DO** carry yourself calmly — walk, talk, and move at a measured pace.  
- **DO** build a predictable daily routine.  
- **DO** give simple, honest answers about your case.  
- **DO** focus on your own program.

### Hard DON’Ts
- **DON’T** gamble or borrow.  
- **DON’T** use or sell drugs.  
- **DON’T** yell, brag, or posture.  
- **DON’T** lie about your charges.

### Use-Your-Judgment
Adapt to yard culture, align with stable people, avoid drama.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="2. Housing & Living Space Etiquette" emblem="🛏️" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
Your bunk, cell, or cube is your anchor. How you behave there sets your reputation.

### Hard DOs
- **DO** keep your area clean and organized.  
- **DO** ask before sitting on someone else’s bunk or table.  
- **DO** keep noise down during quiet hours.  
- **DO** help with unit cleaning.  
- **DO** secure your property.

### Hard DON’Ts
- **DON’T** touch others’ property without permission.  
- **DON’T** enter cells without the occupant.  
- **DON’T** use others’ hygiene items or commissary.  
- **DON’T** slam doors or blast TVs.

### Use-Your-Judgment
Observe customs before acting. Cleanliness and quiet routine earn respect.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="3. Social Navigation & Prison Culture" emblem="🤝" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
You do **not** need to be popular or tough — just predictable, respectful, and boring.

### Hard DOs
- **DO** greet politely.  
- **DO** introduce yourself to neighbors.  
- **DO** keep chat light.  
- **DO** associate with stable people.

### Hard DON’Ts
- **DON’T** gossip or comment on cases.  
- **DON’T** ask about charges.  
- **DON’T** mock others.

### Daily Etiquette Everyone Follows
- Eyes forward, don’t peer into cells.  
- Don’t hover near phones or listen in.  
- Give space in tight areas.  
- Mind your own business.

Privacy is symbolic; violating it creates conflict.  
In SO-heavy units, many share your situation — conduct matters more than labels.
`}
        </ReactMarkdown>
      </SectionCard>
<SectionBand title="4. Money, Debt, and Commissary" emblem="💵" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
If there is one domain where rules are nearly universal, it’s this one: **debt and gambling create danger.**  
Handbooks across the country — including the **[BOP Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)** — classify gambling and debt as misconduct.

### Hard DOs
- **DO** live within your means.  
- **DO** track spending.  
- **DO** send money home or save.  
- **DO** politely decline commissary loans.

### Hard DON’Ts
- **DON’T** borrow food, coffee, or hygiene items.  
- **DON’T** gamble.  
- **DON’T** share account numbers or PINs.  
- **DON’T** run a resale store.

### Use-Your-Judgment
Generosity can create expectation.  
Be financially invisible.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="5. Safety & Danger Zones" emblem="🚨" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
No environment is risk-free, but you can dramatically reduce danger.

### Hard DOs
- **DO** avoid known trouble spots.  
- **DO** walk with purpose.  
- **DO** leave when arguments start.  
- **DO** trust your gut.

### Hard DON’Ts
- **DON’T** play hero in others’ conflicts.  
- **DON’T** escalate minor disrespect.  
- **DON’T** hold contraband.  
- **DON’T** move items you don’t understand.

### PREA & Sexual Safety
Under PREA, facilities must allow multiple ways to report sexual abuse.  
See **[BJA PREA Overview](https://bja.ojp.gov/program/prea/overview)** and **[PREA Resource Center](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**.  

Hard rules:  
- **DO** report threats or abuse.  
- **DO** document events.  
- **DON’T** assume you have no options.

### Use-Your-Judgment
In SO-heavy yards, dangers stem mostly from **debt, drugs, and personal conflicts**.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="6. Staff & Rules" emblem="🧑‍✈️" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
Staff strongly influence daily life. Follow official channels like the **[Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)** and **[Program Statement 5290.14](https://www.bop.gov/policy/progstat/5290_014.pdf)**.

### Hard DOs
- **DO** follow direct orders unless illegal or unsafe.  
- **DO** stay brief and respectful.  
- **DO** use grievances properly.  
- **DO** attend admission & orientation.

### Hard DON’Ts
- **DON’T** argue or show contempt.  
- **DON’T** befriend staff.  
- **DON’T** request rule-breaking favors.

### Use-Your-Judgment
Adapt calmly to each CO.  
Document unfair patterns.  
For SOs, **staying off staff radar** is safest.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="7. Programs, Work, and Education" emblem="🎓" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
Work and classes structure your day and affect perception.  
See **[BOP Federal Prisons Overview](https://www.bop.gov/about/facilities/federal_prisons.jsp)**.

### Hard DOs
- **DO** show up on time.  
- **DO** work steadily.  
- **DO** join education or vocational programs.  
- **DO** use the library.

### Hard DON’Ts
- **DON’T** refuse jobs without reason.  
- **DON’T** fake illness.  
- **DON’T** mock programs — notes affect classification.

### Use-Your-Judgment
Choose programs that build mind, body, or reentry.  
Be the “good worker with no problems.”
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="8. Medical & Mental Health" emblem="🩺" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a
                {...props}
                className={linkCls}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
{`
Most systems provide basic care, often with copays.  
See the **[NACDL Guide to Navigating the Federal Prison System](https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf)**.

### Hard DOs
- **DO** report symptoms promptly.  
- **DO** use sick call.  
- **DO** seek mental-health help.  
- **DO** be honest about self-harm thoughts.

### Hard DON’Ts
- **DON’T** self-medicate or hoard meds.  
- **DON’T** ignore major issues.  
- **DON’T** fake crisis for moves.

### Use-Your-Judgment
Quality varies — use what’s available.  
Supplement with your own coping habits.  
For SOs, mental health is **essential**, not optional.
`}
        </ReactMarkdown>
      </SectionCard>
<SectionBand title="9. Yard, Recreation, and Movement" emblem="🏃‍♂️" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
The yard is where you’ll spend a lot of your “free” time.  Security levels differ, but see **[BOP Security Levels overview](https://www.bop.gov/about/facilities/federal_prisons.jsp)**.

### Hard DOs
- **DO** exercise regularly.  
- **DO** walk or work out with low-drama people.  
- **DO** follow movement rules.

### Hard DON’Ts
- **DON’T** hang near arguments or politics.  
- **DON’T** stare at people.  
- **DON’T** join heated sports if you can’t stay calm.

### Use-Your-Judgment
Find peaceful activities — walking, stretching, calm talk.  
Skip intense sports if that’s not you.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="10. Hygiene & Cleanliness" emblem="🧼" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Cleanliness is universally enforced.  See any **[BOP Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)**.

### Hard DOs
- **DO** shower regularly.  
- **DO** brush teeth, wash clothes, clean bedding.  
- **DO** clean up shared spaces.

### Hard DON’Ts
- **DON’T** leave messes.  
- **DON’T** skip showers for long.  
- **DON’T** handle food with dirty hands.

### Use-Your-Judgment
Budget for soap and toothpaste.  
Smell and hygiene matter in tight quarters.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="11. Boundaries, Sex, and PREA" emblem="🚫" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Sex in prison is prohibited under many rules and PREA.

- **[Federal Register – PREA Standards](https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape)**  
- **[PREA Resource Center](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**  
- **[BJA PREA Program](https://bja.ojp.gov/program/prea/overview)**

### Hard DOs
- **DO** know any sexual contact can be treated as abuse.  
- **DO** report coercion.  
- **DO** set firm boundaries.

### Hard DON’Ts
- **DON’T** engage sexually.  
- **DON’T** trade sex for favors.  
- **DON’T** make sexual jokes or gestures.

### Use-Your-Judgment
Keep sexuality private — thoughts or writing, not acts.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="12. Disclosure, Paperwork, and Lingo" emblem="📄" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Questions about your case will arise.

### Hard DOs
- **DO** keep answers short and honest.  
  - “Non-violent, federal case.”  
  - “Sex-offense, internet case.”  
- **DO** decline to show paperwork unless expected.  
- **DO** stay consistent.

### Hard DON’Ts
- **DON’T** lie — it will surface.  
- **DON’T** overshare details.  
- **DON’T** argue guilt or innocence.

### Use-Your-Judgment
Ask trusted people about local culture before showing paperwork.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="13. Family Contact & Communication" emblem="📬" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Family ties are protective.  See:

- **[Prison Policy Initiative – Parental Incarceration](https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/)**  
- **[BJS – Parents in Prison and Their Minor Children](https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf)**  
- **[Poehlmann et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/)**  

### Hard DOs
- **DO** maintain letters, calls, visits.  
- **DO** be honest yet measured.  
- **DO** reassure family.  
- **DO** respect their boundaries.

### Hard DON’Ts
- **DON’T** demand money.  
- **DON’T** vent every bad day.  
- **DON’T** hide serious issues — share calmly.

### Use-Your-Judgment
Show them you are adapting.  
Encourage them to read this guide.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="14. Handling Conflict, Bullying, and Threats" emblem="🛡️" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Conflict occurs everywhere, but SO units are usually calmer.

### Hard DOs
- **DO** walk away early.  
- **DO** defuse tension (“My bad,” “All good”).  
- **DO** alter routines quietly if targeted.  
- **DO** report credible threats.

### Hard DON’Ts
- **DON’T** posture or escalate.  
- **DON’T** let pride override safety.  
- **DON’T** “win” arguments.  
- **DON’T** inherit others’ fights.

### Use-Your-Judgment
Most conflicts fade if ignored.  
No reaction is safest.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="15. Mental Health, Shame, and Identity" emblem="🧠" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Prison triggers reckoning, especially for first-timers.

### Hard DOs
- **DO** accept shame and grief as normal.  
- **DO** process through journaling, walking, faith.  
- **DO** seek help when hopeless.  
- **DO** keep grounding habits.

### Hard DON’Ts
- **DON’T** deny or numb feelings.  
- **DON’T** catastrophize.  
- **DON’T** hide depression.

### Use-Your-Judgment
Adaptation and healing beat “toughness.”  
Your job is to rebuild, not perform strength.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="16. Religion, Groups, and Community" emblem="🙏" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Faith programs exist in most prisons.

### Hard DOs
- **DO** attend services that ground you.  
- **DO** join peaceful study or meditation groups.  
- **DO** respect all beliefs.

### Hard DON’Ts
- **DON’T** join groups for protection.  
- **DON’T** argue doctrine.  
- **DON’T** manipulate under faith’s name.

### Use-Your-Judgment
Stay low-drama.  Use spiritual spaces for calm, not conflict.
`}
        </ReactMarkdown>
      </SectionCard>
<SectionBand title="17. Reentry Mindset (Yes, From Day One)" emblem="🚪" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Every decision you make inside affects the version of you that walks out the gate.

### Hard DOs
- **DO** structure your day like post-release life.  
- **DO** keep family contact strong.  
- **DO** take programs seriously.  
- **DO** protect your record.

### Hard DON’Ts
- **DON’T** build a “prison identity.”  
- **DON’T** waste years gaming the system.  
- **DON’T** assume reentry is easy.

### Use-Your-Judgment
Prison is a long pause.  
You can leave more stable, humble, and disciplined — or more chaotic.  
Habits decide which.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="18. What Makes SO Time Different — And What Doesn’t" emblem="⚖️" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
Being incarcerated for a sex offense differs in stigma, restrictions, and supervision.

- Family shame hits harder.  
- Supervision is stricter.  
- Placement may be limited by **[PSF definitions](https://www.bop.gov/inmates/custody_and_care/classification.jsp)**.

Yet it’s also similar:
- Most people don’t care about your case.  
- Violence rarely stems from stigma.  
- Routine and conduct matter most.  
- Many SO units are majority-SO.  

Understand the environment; don’t fear the myths.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="19. The 20 Most Reliable Dos and Don’ts (Summary)" emblem="📋" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
        >
{`
### **Top 10 DOs**
1. Calm walk, talk, and movement.  
2. Predictable daily routine.  
3. Live within means — no debt.  
4. Keep your space clean.  
5. Stay near low-drama people.  
6. Use work and programs as anchors.  
7. Guard mental health.  
8. Respect privacy.  
9. Keep family contact.  
10. Prepare for reentry early.

### **Top 10 DON’Ts**
1. Don’t gamble or borrow.  
2. Don’t lie about your case.  
3. Don’t enter others’ conflicts.  
4. Don’t posture or act tough.  
5. Don’t disrespect or befriend staff.  
6. Don’t ignore health issues.  
7. Don’t slip into bad company.  
8. Don’t intrude or eavesdrop.  
9. Don’t make sexual jokes.  
10. Don’t catastrophize — prison is survivable.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="20. Final Words for You — and for Your Family" emblem="💬" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
        >
{`
### For the person going inside
You’re entering a rigid but mostly predictable world, not a movie.  
Follow these habits: calm, routine, cleanliness, honesty, low drama.  
They bring safety and stability.  
Prison is a **season** — harsh but temporary.

### For families
Your loved one enters structure, not chaos:
- counts  
- staff  
- routine  
- rules  

Fear eases once routine forms.  
Stay connected, stay grounded, know the reality — most SO-convicted people serve safely and return home.
`}
        </ReactMarkdown>
      </SectionCard>

      <SectionBand title="References & Further Reading" emblem="📚" />
      <SectionCard>
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            a: (props) => (
              <a {...props} className={linkCls} target="_blank" rel="noopener noreferrer" />
            ),
          }}
        >
{`
### Primary Policy Sources
- **[Federal Bureau of Prisons – Inmate Information Handbook](https://thegordonlawfirm.com/linked/bop_inmate_information_handbook.pdf)**  
- **[BOP – Custody & Classification Overview](https://www.bop.gov/inmates/custody_and_care/classification.jsp)**  
- **[BOP – Federal Prisons & Security Levels](https://www.bop.gov/about/facilities/federal_prisons.jsp)**  
- **[BOP – Security Level Statistics](https://www.bop.gov/about/statistics/statistics_inmate_sec_levels.jsp)**  
- **[DOJ – PREA Final Rule](https://www.federalregister.gov/documents/2012/06/20/2012-12427/national-standards-to-prevent-detect-and-respond-to-prison-rape)**  
- **[PREA Resource Center – Overview](https://www.prearesourcecenter.org/about/prison-rape-elimination-act)**  
- **[BJA – PREA Program](https://bja.ojp.gov/program/prea/overview)**  
- **[NACDL – How to Navigate the Federal Prison System](https://www.nacdl.org/getattachment/6dd87672-8ff3-4d7c-96ae-5712b55bb7a2/how-to-navigate-the-federal-prison-system-06252025.pdf)**  

### Population & Family Impact Research
- **[The Sentencing Project – Responding to Crimes of a Sexual Nature](https://www.sentencingproject.org/reports/responding-to-crimes-of-a-sexual-nature/)**  
- **[BJS – Parents in Prison and Their Minor Children](https://www.bjs.ojp.gov/content/pub/pdf/pimc16.pdf)**  
- **[Prison Policy Initiative – Parental Incarceration](https://www.prisonpolicy.org/blog/2022/08/11/parental_incarceration/)**  
- **[Poehlmann et al. – Children’s Contact With Their Incarcerated Parents](https://pmc.ncbi.nlm.nih.gov/articles/PMC4229080/)**  
`}
        </ReactMarkdown>
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