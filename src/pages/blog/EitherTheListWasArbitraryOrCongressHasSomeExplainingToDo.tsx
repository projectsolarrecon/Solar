import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  Divider,
  PullQuote,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "federal-lawmaker",
  primaryPositionId: "one-size-fits-all",
  secondaryPositionId: "punitive",
  formatId: "email",
  headline:
    "Ask Congress to make First Step Act exclusions explainable and evidence-based",
  description:
    "The First Step Act can categorically exclude simple § 2252A possession while leaving room for other serious offenses to remain eligible for earned time credits. Congress can review whether those exclusions actually track conduct, individualized risk, rehabilitation progress, and release readiness.",
  recommendation: {
    audienceLabel:
      "your U.S. representative and senators, especially members working on federal sentencing, prison policy, or judiciary oversight",
    suggestion:
      "Ask Congress to hold oversight or introduce legislation requiring First Step Act earned-time-credit exclusions to be explainable, evidence-based, and tied to individualized risk, conduct, rehabilitation progress, and release readiness rather than statute numbers alone.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please review and amend the First Step Act earned-time-credit disqualifying-offense structure. Hold oversight or introduce legislation requiring categorical exclusions to be supported by explainable evidence and tied to actual conduct, individualized risk, rehabilitation progress, and release readiness rather than statute numbers alone.",
  personalContext:
    "I am writing after reading SOLAR’s analysis of how the First Step Act can categorically exclude simple § 2252A possession while leaving room for other serious offenses, including manslaughter, drug trafficking, illegal firearm conduct, and attempted child enticement, to remain eligible for earned time credits.",
  source: {
    title: "Either the List Was Arbitrary, or Congress Has Some Explaining to Do",
    path: "/blog/either-the-list-was-arbitrary-or-congress-has-some-explaining-to-do",
    type: "blog",
  },
  jurisdiction: "Federal",
};

export default function EitherTheListWasArbitraryOrCongressHasSomeExplainingToDo(): JSX.Element {
  return (
    <BlogLayout
      title="Either the List Was Arbitrary, or Congress Has Some Explaining to Do"
      description="The First Step Act claims to reward rehabilitation, but its time-credit exclusions can bar simple § 2252A possession while allowing eligibility for manslaughter, drug, gun, and enticement convictions."
      keywords="First Step Act time credits, First Step Act earned time credits, FSA disqualifying offenses, BOP time credits, § 2252A possession, § 2422(b) enticement, federal prison reform, recidivism reduction, manslaughter FSA eligibility, drug trafficking FSA eligibility, firearm offenses FSA eligibility"
      date="Jul 29, 2026"
      readTime="8 min read"
      badge="📝 BLOG"
      lede="The First Step Act claims to reward rehabilitation. But its exclusion list can bar simple possession from earned time credits while leaving room for manslaughter, drug trafficking, illegal gun conduct, and attempted child enticement."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="🔎">
          <p>
            The First Step Act’s earned-time-credit system is supposed to
            reduce recidivism through programming and reentry incentives. But
            the disqualifying-offense list does not consistently track
            comparative dangerousness. It can categorically exclude simple
            § 2252A possession while leaving other serious crimes potentially
            eligible.
          </p>
        </Callout>

        <p>The First Step Act was supposed to reward rehabilitation.</p>

        <p>
          That was the public promise: people in federal prison could earn time
          credits by completing evidence-based recidivism-reduction programming
          and productive activities.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/overview.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Bureau of Prisons describes the law
          </a>{" "}
          as creating a risk-and-needs system that guides people into
          programming based on criminogenic needs, while{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/education/first-step-act-earned-time-credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            the U.S. Sentencing Commission describes First Step Act earned time
            credits
          </a>{" "}
          as a mechanism that can move eligible people from secure custody into
          prerelease custody or supervised release.
        </p>

        <p>But then Congress built a disqualifying-offense list.</p>

        <p>And that list raises a question Congress should have to answer.</p>

        <p>
          A person convicted of simple possession of illegal abuse images under
          18 U.S.C. § 2252A is categorically barred from earning First Step Act
          time credits. The offense is serious. The images document real abuse,
          and their possession and circulation can extend harm. Nothing about
          this comparison minimizes that.
        </p>

        <p>But public-safety law should still be coherent.</p>

        <p>
          Because under the same statutory scheme, people convicted of
          manslaughter, drug trafficking, illegal firearm conduct, and even
          attempting to entice a child for unlawful sexual activity may still
          be eligible for First Step Act credits in many ordinary
          circumstances.
        </p>

        <p>
          That does not mean those offenses are always treated lightly. It does
          not mean everyone with an eligible conviction actually receives
          credits. It does not mean prison conduct, risk level, immigration
          status, sentence structure, or other rules never matter.
        </p>

        <p>It means something narrower and more damning:</p>

        <p>
          The First Step Act can treat a non-contact possession offense as
          categorically beyond earned rehabilitation credits while leaving room
          for people convicted of conduct involving death, guns, drugs,
          violence, or attempted contact with a child.
        </p>

        <p>That is not an evidence-based risk principle.</p>

        <p>That is a statute-number lottery.</p>

        <BandHeader title="What the First Step Act Actually Does" icon="⚖️" />

        <p>
          The First Step Act is a federal prison reform law passed in 2018. One
          of its central promises was simple: if people in federal custody
          complete evidence-based recidivism-reduction programs and productive
          activities, they can earn time credits that move them out of secure
          prison custody earlier and into prerelease custody, home confinement,
          a Residential Reentry Center, or supervised release.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/faq.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP says eligible people may earn time credits
          </a>{" "}
          through assigned evidence-based recidivism-reduction programs or
          productive activities;{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/education/first-step-act-earned-time-credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            the U.S. Sentencing Commission explains
          </a>{" "}
          that those credits may support early transfer from secure custody.
        </p>

        <p>In plain English, the law was supposed to reward rehabilitation.</p>

        <p>
          That matters because FSA credits are not symbolic. For eligible
          people, they can substantially change how much time is actually spent
          inside a federal prison facility. The credits may be applied toward
          prerelease custody in the community or supervised release for people
          who meet the risk and eligibility requirements, and{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/faq.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP says the Director may transfer a person to supervised release
            earlier based on FSA credits
          </a>
          , not to exceed twelve months.
        </p>

        <p>
          The effect can be especially significant when FSA credits interact
          with other federal prison mechanisms. Good-conduct time can reduce
          the time served on a federal sentence. RDAP can provide separate
          prerelease or sentence-reduction benefits for qualifying
          participants. Second Chance Act placement can move people into
          Residential Reentry Centers, and BOP says RRC placement may be up to
          twelve months.{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/education/first-step-act-earned-time-credits"
            target="_blank"
            rel="noopener noreferrer"
          >
            The U.S. Sentencing Commission specifically notes
          </a>{" "}
          that FSA credits are distinct from, and may apply in addition to,
          good-conduct time, RDAP, and other community-corrections placement
          authorities.
        </p>

        <p>
          Stacked together, these mechanisms can make the practical difference
          enormous. In some cases, they can reduce the time a person spends
          inside a secure prison facility by many months or even years. The
          combined effect can approach something close to half the sentence
          being served outside secure prison walls rather than inside them.
        </p>

        <p>That is why the exclusion list matters.</p>

        <p>
          This is not a paperwork question. It is not merely about who gets a
          certificate for completing a class. It is about who gets access to
          one of the most powerful federal prison reform mechanisms Congress
          created — and who is categorically told that rehabilitation credits
          do not count for them at all.
        </p>

        <p>
          That is what makes the comparison so glaring. The statute does not
          merely express disapproval. It decides who can use a major federal
          release pathway after sentencing — and who cannot even enter the
          line.
        </p>

        <BandHeader
          title="If This Is About Recidivism, the Exclusion Is Even Harder to Defend"
          icon="📊"
        />

        <p>
          The First Step Act was not supposed to be a moral popularity contest.
          It was supposed to reduce future crime.
        </p>

        <p>
          That matters because the public mythology around sex offenses often
          treats people in this category as uniquely unreformable and uniquely
          likely to reoffend. The evidence does not support that story.{" "}
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics data found
          </a>{" "}
          that people released after rape or sexual-assault sentences were more
          than 20% less likely than other released prisoners to be rearrested
          for any crime over nine years.
        </p>

        <p>That should have made Congress more careful, not less.</p>

        <p>
          If the point of the First Step Act is to make communities safer by
          encouraging recidivism-reduction programming, then excluding broad
          categories of people convicted of sex offenses creates an obvious
          contradiction.
        </p>

        <p>
          Either Congress believed recidivism risk for many people convicted of
          sex offenses was already low enough that incentives did not matter —
          which would make categorical exclusion unnecessary.
        </p>

        <p>
          Or Congress believed recidivism-reduction programming does matter,
          but intentionally denied many people convicted of sex offenses the
          main incentive Congress created to encourage participation.
        </p>

        <p>Neither answer fits the law’s public-safety promise.</p>

        <p>
          A serious prevention system would want people convicted of sex
          offenses completing treatment, building insight, addressing
          criminogenic needs, maintaining clean conduct, and preparing for
          lawful reentry. If public safety is the goal, those are not optional
          extras. They are the work.
        </p>

        <p>
          So why build a law that tells many of those people, before any
          individualized review, that their participation cannot earn the same
          credits available to people convicted of other serious crimes?
        </p>

        <p>
          That is not recidivism reduction. That is political exclusion wearing
          the language of rehabilitation.
        </p>

        <BandHeader
          title="The Baseline: Simple Possession Is Categorically Out"
          icon="🚫"
        />

        <p>Start with the cleanest comparison.</p>

        <p>
          A person convicted under § 2252A for simple possession of child sexual
          abuse material has committed a serious crime. The harm is real because
          the material depicts abuse, and demand for those images contributes
          to a market built on exploitation.
        </p>

        <p>
          But simple possession is also not the same conduct as producing abuse
          images, committing a hands-on offense, using force, trafficking drugs,
          carrying a gun during violence, causing a death, or attempting to meet
          a child for sexual abuse.
        </p>

        <p>
          That distinction should matter in a law that claims to reward
          rehabilitation and reduce recidivism.
        </p>

        <p>
          Under the First Step Act’s time-credit rules, however, § 2252A is on
          the disqualifying list.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP’s public table lists Chapter 110, § 2252A
          </a>{" "}
          — “relating to certain activities involving material constituting or
          containing child pornography,” using the statute’s terminology — as a
          disqualifying offense.
        </p>

        <p>That means the person serving a sentence for simple possession is out.</p>

        <p>
          Not because a validated risk tool says he is more dangerous than
          someone else.
        </p>

        <p>Not because he failed programming.</p>

        <p>Not because he committed violence in prison.</p>

        <p>Not because he tried to meet a child.</p>

        <p>Because Congress put the citation on the list.</p>

        <BandHeader title="Now Compare the Conduct Congress Left Room For" icon="↔️" />

        <p>
          The contrast is not abstract. It is not theoretical. It is not a
          law-school puzzle about statutory interpretation.
        </p>

        <p>It is a conduct comparison.</p>

        <p>
          A person can cause another person’s death and still potentially remain
          eligible for First Step Act time credits, depending on the conviction.{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/view.xhtml?req=(title:18%20section:1112%20edition:prelim)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal manslaughter under § 1112
          </a>{" "}
          is “the unlawful killing of a human being without malice,” and{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP’s disqualifying table
          </a>{" "}
          excludes most Chapter 51 homicide offenses but expressly carves out
          § 1112 manslaughter from that broad homicide exclusion.
        </p>

        <p>That means the law can say this:</p>

        <p>
          A person convicted of simple possession under § 2252A is categorically
          ineligible.
        </p>

        <p>
          A person convicted of manslaughter under § 1112 may still have a path
          to earn credits.
        </p>

        <p>
          That is not a claim that every manslaughter case is the same. It is
          not a claim that every person convicted of manslaughter receives FSA
          credits. It is a claim about statutory design: Congress categorically
          shut one door while leaving the other open.
        </p>

        <p>Now compare drug trafficking.</p>

        <p>
          There are people in federal prison for drug-trafficking conduct that
          damaged whole communities. Some supplied dangerous narcotics through
          networks that reached families, neighborhoods, and children. Some
          trafficked substances that fed addiction, destabilized homes, and
          contributed to death.
        </p>

        <p>
          And yet drug offenses are not categorically excluded across the
          board.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            The BOP table identifies specific drug-trafficking disqualifiers
          </a>{" "}
          tied to particular substances, quantities, leadership findings, or
          death-or-serious-bodily-injury outcomes.
        </p>

        <p>
          Again, the point is not that every drug defendant is eligible. The
          point is that Congress knew how to draw conditional lines for drug
          crimes. It did not say: drug trafficking equals automatic exclusion in
          every case.
        </p>

        <p>For § 2252A possession, it did.</p>

        <p>Now compare firearms.</p>

        <p>
          A person can be in federal prison for unlawful gun possession and
          still not necessarily be categorically excluded by the same rule.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/overview.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP’s overview describes excluded categories
          </a>{" "}
          as including a “repeat felon in possession of firearm” and certain
          listed firearm-related offenses, not every federal gun conviction.
        </p>

        <p>
          The{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            disqualifying table specifically lists § 924(c)
          </a>
          , a major firearm statute, but the table does not operate as a blanket
          exclusion for every federal firearm offense.
        </p>

        <p>So again, Congress left room.</p>

        <p>
          A person convicted of some illegal firearm conduct may still be able
          to earn rehabilitation credits.
        </p>

        <p>The simple possession defendant under § 2252A cannot.</p>

        <p>Now compare enticement.</p>

        <p>This is the comparison Congress should have to explain most directly.</p>

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/view.xhtml?req=(title:18%20section:2422%20edition:prelim)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Section 2422(b)
          </a>{" "}
          covers using the mail, the internet, or another interstate or
          foreign-commerce facility to knowingly persuade, induce, entice, or
          coerce a person under 18 to engage in prostitution or unlawful sexual
          activity, or attempting to do so.
        </p>

        <p>
          In plain English: a person convicted under § 2422(b) may have tried to
          get a real or decoy child into unlawful sexual activity.
        </p>

        <p>
          That offense is not listed in{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP’s disqualifying-offense table
          </a>
          .
        </p>

        <p>Section 2252A is.</p>

        <p>
          So the First Step Act can treat the person convicted of simple image
          possession as categorically ineligible while leaving room for the
          person convicted of attempting to entice a child for unlawful sexual
          activity to earn credits.
        </p>

        <p>That is the dissonance in its cleanest form.</p>

        <BandHeader
          title="This Is Not About Letting Sex Offenses Off the Hook"
          icon="🧭"
        />

        <p>
          The enticement comparison matters because it prevents the usual escape
          hatch.
        </p>

        <p>
          This is not a comparison between “sex offenses” and “non-sex offenses”
          only. It is not an argument that people convicted of sex offenses
          should be excused, minimized, or treated as if no harm occurred.
        </p>

        <p>
          The First Step Act’s own treatment of federal sex offenses is
          internally incoherent.
        </p>

        <p>
          A person convicted of simple possession under § 2252A is categorically
          excluded from earning First Step Act time credits.
        </p>

        <p>
          A person convicted under § 2422(b) of attempting to persuade, induce,
          entice, or coerce a minor into unlawful sexual activity may remain
          eligible.
        </p>

        <p>
          If Congress did not apply coherent scrutiny, then the exclusion list
          is not an evidence-based public-safety tool. It is a political sorting
          chart.
        </p>

        <p>
          But if Congress insists that it did apply coherent scrutiny across the
          criminal code, then it owes the public an explanation: why is the
          simple possession defendant treated as categorically less redeemable
          than the enticement defendant?
        </p>

        <p>Congress cannot have it both ways.</p>

        <p>
          Either the list is arbitrary, or Congress believes attempted contact
          with a child is categorically more compatible with earned
          rehabilitation credits than non-contact possession.
        </p>

        <p>Neither answer makes the statute look serious.</p>

        <PullQuote>
          The First Step Act does not ask whether a person is more dangerous
          than someone who killed, trafficked, armed, or tried to exploit. It
          asks whether Congress put the statute number on the list.
        </PullQuote>

        <BandHeader title="The Problem Is Comparative Dangerousness" icon="⚖️" />

        <p>
          The central question is not whether § 2252A possession is serious.
        </p>

        <p>It is.</p>

        <p>
          The question is whether Congress had a coherent public-safety reason
          to make that offense categorically ineligible while leaving room for
          other crimes that, in ordinary moral and public-safety terms, many
          people would recognize as at least as dangerous, and often more
          immediately dangerous.
        </p>

        <p>A person who caused a death may have a path.</p>

        <p>A person who trafficked drugs may have a path.</p>

        <p>
          A person who possessed or supplied illegal firearms may have a path.
        </p>

        <p>
          A person who tried to entice a child for unlawful sexual activity may
          have a path.
        </p>

        <p>But the person who possessed illegal images does not.</p>

        <p>
          That is not a careful risk distinction. It is not individualized
          assessment. It is not rehabilitation policy. It is a categorical
          punishment rule embedded inside a law that claimed to be about
          evidence-based recidivism reduction.
        </p>

        <p>
          And once that contradiction is visible, the broader question becomes
          unavoidable:
        </p>

        <p>
          If Congress could not apply coherent scrutiny inside one of the most
          politically sensitive categories — sex offenses — why should anyone
          assume it applied coherent scrutiny across the rest of the criminal
          code?
        </p>

        <BandHeader title="“Eligible” Does Not Mean “Automatically Released”" icon="ℹ️" />

        <p>There is an important caveat.</p>

        <p>
          First Step Act eligibility is not automatic release. A person still
          has to earn credits through qualifying programming or productive
          activities. BOP still applies rules. Risk assessments still matter.
          Credits may affect prerelease custody or supervised release timing,
          and other statutory exclusions can still apply.{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/faq.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOP says eligible people may earn time credits through assigned
            programs or activities
          </a>
          , and that those credits may be applied to prerelease custody or
          supervised release only when risk and other requirements are met.
        </p>

        <p>But that caveat does not fix the problem.</p>

        <p>In fact, it makes the problem harder to defend.</p>

        <p>
          If the First Step Act already has mechanisms for assessing risk,
          conduct, programming, and readiness, why does simple § 2252A
          possession require categorical exclusion before any of that
          individualized review can matter?
        </p>

        <p>Why not ask the same questions the law asks of many other people?</p>

        <p>Did the person complete treatment?</p>

        <p>Did the person participate in programming?</p>

        <p>What is the person’s assessed risk?</p>

        <p>What was the actual conduct?</p>

        <p>
          Was there contact, coercion, production, force, violence, or attempted
          meeting?
        </p>

        <p>What release plan exists?</p>

        <p>What supervision conditions would protect the public?</p>

        <p>
          Those questions are not soft on accountability. They are what
          accountability looks like when public safety is taken seriously.
        </p>

        <BandHeader title="The List Looks Tough. That Does Not Mean It Is Smart." icon="🧱" />

        <p>Politically, it is easy to understand why Congress did this.</p>

        <p>
          No one wants to be accused of being lenient toward people convicted
          of sex offenses. No one wants to explain nuance when fear is easier.
          No one wants to defend individualized review for an unpopular
          category of people, even when individualized review is exactly what an
          evidence-based system is supposed to do.
        </p>

        <p>So Congress reached for a shortcut.</p>

        <p>Put the citation on the list. Exclude the category. Call it public safety.</p>

        <p>But a shortcut is not a principle.</p>

        <p>
          A rule that categorically excludes simple possession while leaving
          room for manslaughter, drug trafficking, illegal gun conduct, and
          attempted child enticement is not self-explanatory. It is not
          obviously evidence-based. It is not obviously tied to comparative
          dangerousness.
        </p>

        <p>
          It is a reminder that “tough on paper” and “serious about safety” are
          not the same thing.
        </p>

        <BandHeader title="What a Coherent Rule Would Ask" icon="✅" />

        <p>
          A coherent earned-credit system would not pretend all offenses are
          identical. It would not ignore harm. It would not erase victims. It
          would not guarantee early transfer to everyone who completes a class.
        </p>

        <p>But it would ask questions that actually relate to safety.</p>

        <p>It would distinguish conduct.</p>

        <p>It would distinguish possession from production.</p>

        <p>It would distinguish non-contact conduct from attempted contact.</p>

        <p>It would distinguish violence from nonviolence.</p>

        <p>
          It would distinguish people who complete treatment and demonstrate
          stability from people who do not.
        </p>

        <p>It would use risk assessment carefully, not magically.</p>

        <p>It would make exclusions explainable.</p>

        <p>
          Most importantly, it would not hide political fear behind the language
          of evidence-based rehabilitation.
        </p>

        <BandHeader title="Congress Should Have to Answer the Question" icon="🏛️" />

        <p>
          The First Step Act’s exclusion list may look technical, but the moral
          question is simple.
        </p>

        <p>
          Why is the person convicted of simple § 2252A possession categorically
          barred from earning time credits when people convicted of
          manslaughter, drug trafficking, illegal gun conduct, and attempted
          child enticement may still be eligible?
        </p>

        <p>
          If the answer is “because Congress studied the comparative risk and
          rehabilitation evidence,” then Congress should show its work.
        </p>

        <p>
          If the answer is “because sex-offense politics made nuance
          impossible,” then the public should know that too.
        </p>

        <p>Either way, the current list deserves scrutiny.</p>

        <p>
          Because real public safety does not come from pretending that statute
          numbers are risk assessments. It comes from asking harder questions:
          what happened, what risk remains, what treatment occurred, what
          stability exists, what supervision is needed, and what actually
          reduces future harm.
        </p>

        <p>
          The First Step Act was supposed to move federal prison policy toward
          rehabilitation.
        </p>

        <p>
          Its exclusion list shows how easily that promise collapses when
          Congress confuses political comfort with evidence.
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/fsa/overview.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP’s First Step Act overview
            </a>{" "}
            — the law’s risk-and-needs system, recidivism-reduction programming,
            good-conduct-time changes, general excluded-offense categories, and
            prerelease-custody framework.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/fsa/faq.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP’s First Step Act FAQ
            </a>{" "}
            — eligibility, earning and applying credits, risk requirements,
            prerelease custody, supervised release, and the non-automatic nature
            of release.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.bop.gov/resources/fsa/time_credits_disqualifying_offenses.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP’s disqualifying-offense table
            </a>{" "}
            — the listed treatment of § 2252A, Chapter 51 homicide offenses,
            drug offenses, firearm offenses, and the absence of § 2422(b).
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ussc.gov/education/first-step-act-earned-time-credits"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Sentencing Commission’s First Step Act earned-time-credit
              overview
            </a>{" "}
            — how FSA credits differ from good-conduct time, RDAP, and other
            prerelease or community-placement authorities.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics’ nine-year follow-up study
            </a>{" "}
            — comparative rearrest findings for people released after rape or
            sexual-assault sentences and other released prisoners.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/view.xhtml?req=(title:18%20section:1112%20edition:prelim)"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 U.S.C. § 1112
            </a>{" "}
            — the federal manslaughter definition.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/view.xhtml?req=(title:18%20section:2422%20edition:prelim)"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 U.S.C. § 2422
            </a>{" "}
            — the federal enticement statute.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/advocacy">
              SOLAR’s evidence-based reform framework
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-tracker">
              SOLAR’s Legislative Tracker
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog">
              Related SOLAR analysis on public-safety myths and reform
            </Link>
          </li>
        </ul>

        <p>
          People and families dealing with federal custody, release planning,
          or reentry can also review{" "}
          <Link className={linkCls} to="/resources">
            resources for people and families navigating the system
          </Link>
          .
        </p>
      </article>
    </BlogLayout>
  );
}