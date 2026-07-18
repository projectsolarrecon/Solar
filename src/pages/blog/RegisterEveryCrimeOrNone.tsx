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
  recipientId: "journalist",
  primaryPositionId: "recon",
  secondaryPositionId: "punitive",
  formatId: "letter-to-editor",
  headline: "Ask media voices to apply the RECON test to registry coverage",
  description:
    "This article shows why public registry logic cannot be defended selectively. A letter to the editor can ask journalists and editorial boards to stop treating sex-offense registries as obvious safety tools without applying the same scrutiny they would bring to public registries for other serious convictions.",
  recommendation: {
    audienceLabel:
      "A journalist, columnist, editorial writer, or editorial board covering criminal justice, public safety, or registry policy.",
    suggestion:
      "Ask them to apply the RECON consistency test when covering registry policy: if public registries are framed as necessary safety tools, explain why that logic should or should not apply consistently across serious crimes; if broader registries would be excessive or punitive, acknowledge that the same concerns apply to sex-offense registries.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Use the RECON consistency test when covering registry policy: do not describe public sex-offense registries as self-evident safety tools unless the same registry logic can be defended consistently across serious convictions; examine the evidence, the collateral consequences, and whether public branding after sentence completion functions as selective punishment rather than prevention.",
  personalContext:
    "I am writing after reading SOLAR’s RECON argument, which asks whether public registry logic can be defended consistently or whether it functions as selective punishment after sentence completion.",
  source: {
    title: "Register Every Crime or None: The RECON Test for Public Registries",
    path: "/blog/register-every-crime-or-none",
    type: "blog",
  },
};

const articlePartOne = (
  <>
    <Callout variant="policy" title="The RECON test" icon="⚖️">
      <p>
        RECON means Register Every Crime or None. It is a consistency test: if
        public registries are real safety tools, apply them consistently across
        serious convictions. If that sounds excessive, punitive, or absurd,
        then those objections apply to sex-offense registries too.
      </p>
    </Callout>

    <p>If public registries make communities safer, why stop at one category of crime?</p>

    <p>That is the question at the center of RECON.</p>

    <p>
      Registry defenders usually do not argue only that the public has a “right
      to know.” That is part of it, sure. But the bigger claim is much stronger:
      registries protect children. Public notification warns families.
      Searchable maps help communities identify danger. Public exposure prevents
      future harm. A registry, we are told, is not punishment. It is safety.
    </p>

    <p>Fine.</p>

    <p>Let’s take that argument seriously.</p>

    <p>
      If public notification protects children, why would we limit it to sex
      offenses?
    </p>

    <p>
      If searchable maps help families avoid danger, why not map people
      convicted of murder, armed robbery, domestic violence, child abuse, arson,
      DUI manslaughter, drug trafficking, elder fraud, and other serious crimes?
    </p>

    <p>
      If public exposure after a sentence is complete is a legitimate safety
      tool, why reserve it for one category of conviction?
    </p>

    <p>
      And if applying that same tool consistently suddenly sounds excessive,
      cruel, destabilizing, ineffective, or like punishment that never ends,
      congratulations. You found the point.
    </p>

    <p>That is RECON: Register Every Crime or None.</p>

    <BandHeader
      title="RECON Is the Argument Registry Defenders Cannot Win"
      icon="⚖️"
    />

    <p>
      RECON is not a polite reform slogan. It is not a bumper sticker. It is not
      a cute acronym we invented because “nuanced evidence-based registry
      reform” did not fit on a T-shirt.
    </p>

    <p>RECON is a consistency test.</p>

    <p>
      It asks registry defenders to live under the logic they already claim to
      believe.
    </p>

    <p>
      If registries protect the public, then let’s protect the public. Register
      every serious conviction where the same safety arguments apply. Give every
      parent every warning. Give every neighborhood every map. Give every
      employer, landlord, school, church, youth program, dating partner, and
      elderly caregiver the information registry defenders say people need to
      make themselves safe.
    </p>

    <p>Why stop at one category?</p>

    <p>
      But if that sounds like a nightmare — if a public registry for every
      serious conviction sounds like a surveillance state dressed up as child
      safety — then we agree on something important.
    </p>

    <p>
      The disagreement is whether that nightmare becomes acceptable when it is
      imposed only on people convicted of sex offenses.
    </p>

    <p>That is the trap.</p>

    <p>
      Either public registries are a valid safety model, or they are a form of
      permanent public punishment.
    </p>

    <p>
      Either public notification is prevention, or it is selective branding.
    </p>

    <p>
      Either the logic applies consistently, or it is being used against the
      group society finds easiest to exile.
    </p>

    <p>RECON forces that choice into the open.</p>

    <PullQuote>Fine. Let’s take that argument seriously.</PullQuote>

    <BandHeader
      title="The “Right to Know” Argument Cannot Stop at One Crime"
      icon="👁️"
    />

    <p>
      One of the most common defenses of public registries is that the public has
      a right to know.
    </p>

    <p>Again, let’s not dodge the argument. Let’s accept it for a moment.</p>

    <p>
      If public knowledge creates safety, why should that knowledge stop at sex
      offenses?
    </p>

    <p>
      Why would a parent have a right to know that someone nearby was convicted
      of a sex offense, but not that someone nearby was convicted of murder,
      armed robbery, domestic violence, child abuse, arson, drug trafficking, or
      a major fraud scheme targeting elderly people?
    </p>

    <p>
      If the answer is that families can make safer choices when they have
      access to conviction information, then the current registry system is not
      too broad. It is hilariously underbuilt.
    </p>

    <p>Under that logic, we have missed an enormous public-safety opportunity.</p>

    <p>A domestic violence registry could warn future partners.</p>

    <p>A DUI manslaughter registry could warn families, schools, and employers.</p>

    <p>An arson registry could warn landlords and neighbors.</p>

    <p>
      A fraud registry could warn elderly people, caregivers, and financial
      institutions.
    </p>

    <p>
      A violent felony registry could warn communities about people convicted of
      assault, robbery, or homicide.
    </p>

    <p>
      A drug trafficking registry could warn families about people convicted of
      distributing fentanyl, methamphetamine, opioids, and other dangerous drugs
      that are killing children, teenagers, parents, and whole futures.
    </p>

    <p>
      If that sounds useful, say so. Own the principle. Build the registry state
      you are defending.
    </p>

    <p>
      But if it sounds excessive, destabilizing, unreliable, and punitive, then
      stop pretending those concerns magically disappear when the target is a
      person convicted of a sex offense.
    </p>

    <p>
      The question is not whether the public has some interest in safety. Of
      course it does.
    </p>

    <p>
      The question is whether public branding after sentence completion is
      actually safety — and if it is, why are we rationing it so strangely?
    </p>

    <PullQuote>
      If the answer is that families can make safer choices when they have
      access to conviction information, then the current registry system is not
      too broad. It is hilariously underbuilt.
    </PullQuote>

    <BandHeader
      title="If the Goal Is Child Safety, the Registry Is Oddly Narrow"
      icon="🧒"
    />

    <p>Registry defenders love the phrase “child safety.”</p>

    <p>
      It is emotionally powerful. It is politically useful. It also tends to end
      conversations before they become too precise.
    </p>

    <p>But children are not endangered by only one category of harm.</p>

    <p>
      <a
        className={linkCls}
        href="https://www.cdc.gov/firearm-violence/data-research/facts-stats/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Firearm injuries are the leading cause of death among children and teens
        ages 1–19
      </a>{" "}
      in the United States, according to CDC data. Drug overdoses remain a
      massive national crisis;{" "}
      <a
        className={linkCls}
        href="https://www.cdc.gov/nchs/pressroom/releases/20250514.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        CDC provisional data estimated 80,391 overdose deaths in 2024
      </a>
      , including 47,735 involving synthetic opioids other than methadone.{" "}
      <a
        className={linkCls}
        href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813815"
        target="_blank"
        rel="noopener noreferrer"
      >
        NHTSA reported that in 2024, 1,032 children age 14 and younger were
        killed in motor-vehicle crashes, and an estimated 221 of those deaths —
        21% — occurred in alcohol-impaired-driving crashes
      </a>
      .
    </p>

    <p>
      So if the registry model protects children by warning families about
      people who may pose future danger, why would that warning be limited to sex
      offenses?
    </p>

    <p>
      Why not a public registry for people convicted of gun crimes involving
      children?
    </p>

    <p>
      Why not a registry for repeat drunk drivers, especially those who injured
      or killed someone?
    </p>

    <p>
      Why not a registry for people convicted of trafficking fentanyl,
      methamphetamine, opioids, or other dangerous drugs into communities?
    </p>

    <p>
      Why not a registry for domestic abusers whose violence destabilizes homes
      and endangers children?
    </p>

    <p>
      Why not a registry for arsonists, armed robbers, or people convicted of
      child abuse that was not sexual?
    </p>

    <p>This is where the conversation usually gets very quiet.</p>

    <p>
      Because the moment we move from “sex offender registry” to “public registry
      for everyone convicted of serious harm,” people suddenly rediscover civil
      liberties. They remember proportionality. They worry about reentry. They
      ask whether public shaming really prevents crime. They notice that families
      would be punished too. They wonder whether a conviction from years ago
      should define a person forever.
    </p>

    <p>Excellent questions. Truly. Welcome to the conversation.</p>

    <p>Now apply them consistently.</p>

    <Callout
      variant="warning"
      title="Child safety cannot be selective"
      icon="⚠️"
    >
      <p>
        If the registry model protects children by warning families about future
        danger, registry defenders must explain why that warning stops with one
        category of conviction.
      </p>
    </Callout>
  </>
);

const articlePartTwo = (
  <>
    <BandHeader
      title="“Sex Offenses Are Different” Is Not a Magic Spell"
      icon="🪄"
    />

    <p>The usual escape hatch is predictable: sex offenses are different.</p>

    <p>
      Yes. Sexual harm is serious. It can be devastating. It deserves a serious
      public response.
    </p>

    <p>
      But murder is different too. Domestic violence is different. Arson is
      different. Child abuse is different. Armed robbery is different. Drunk
      driving that kills someone is different. Drug trafficking is different.
      Fraud that destroys an elderly person’s life savings is different.
    </p>

    <p>Every serious category of harm has features that make it distinct.</p>

    <p>
      RECON does not require pretending all crimes are identical. That would be
      silly. The point is not that an armed robbery and a sex offense are the
      same act, cause the same harm, or require the same intervention.
    </p>

    <p>
      The point is that registry defenders keep making claims that are not
      actually limited to sex offenses.
    </p>

    <p>
      If public notification prevents future harm, why would we not use it for
      other serious harms?
    </p>

    <p>
      If searchable maps help families avoid danger, why would we not map people
      convicted of other dangerous offenses?
    </p>

    <p>
      If permanent public exposure is justified because people deserve warning,
      why does that warning stop with one category?
    </p>

    <p>“Different” is not an answer. It is the beginning of the question.</p>

    <p>
      What exactly is different enough to justify lifelong public branding for
      one group, but not for others? And is that difference supported by
      evidence, or by fear?
    </p>

    <BandHeader
      title="The Evidence Is Less Convenient Than the Myth"
      icon="📊"
    />

    <p>
      The public story about registries is simple: people convicted of sex
      offenses are uniquely dangerous, highly likely to reoffend, and must be
      publicly tracked so families can stay safe.
    </p>

    <p>Simple. Memorable. Politically useful.</p>

    <p>Also not nearly as solid as people think.</p>

    <p>
      The{" "}
      <a
        className={linkCls}
        href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bureau of Justice Statistics’ nine-year follow-up study
      </a>{" "}
      found that people released from state prison after serving sentences for
      rape or sexual assault were less likely than other released prisoners to
      be arrested for any crime. In that report, 7.7% of released people in that
      category were arrested for rape or sexual assault within nine years. In{" "}
      <a
        className={linkCls}
        href="https://bjs.ojp.gov/library/publications/2018-update-prisoner-recidivism-9-year-follow-period-2005-2014"
        target="_blank"
        rel="noopener noreferrer"
      >
        BJS’s broader nine-year recidivism study
      </a>{" "}
      of people released from state prison, same-type rearrest rates were much
      higher for other broad offense categories: 43.4% for people released after
      a violent offense, 60.4% after a drug offense, 63.5% after a property
      offense, and 70.3% after a public-order offense.
    </p>

    <p>
      That does not mean these categories are identical. It means the registry
      myth skips a very inconvenient question.
    </p>

    <p>
      If the point of a registry is to prevent people from committing the same
      kind of harm again, why is the public registry model aimed almost
      exclusively at the category with a lower same-type rearrest rate than many
      other offense categories?
    </p>

    <p>If drug recidivism is higher, why no drug registry?</p>

    <p>
      If violent-offense recidivism is higher, why no violent-offense registry?
    </p>

    <p>
      If property and public-order categories show higher same-type rearrest
      rates, why do we not publicly map those convictions too?
    </p>

    <p>If registries prevent recidivism, we should register all.</p>

    <p>
      And if we should not register all, then registry defenders need to stop
      pretending recidivism is the clean explanation for why this one registry
      exists.
    </p>

    <p>
      When researchers have looked at whether registration and notification
      actually reduce sexual recidivism, the evidence has not delivered the
      clean political story registry defenders want. A{" "}
      <a
        className={linkCls}
        href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies"
        target="_blank"
        rel="noopener noreferrer"
      >
        National Institute of Justice-supported South Carolina evaluation
      </a>{" "}
      found that registration and notification had no effect on deterring sexual
      recidivism, while also producing unintended effects in judicial
      decision-making.
    </p>

    <p>So the registry is sold as certainty. The evidence gives us caution.</p>

    <p>
      That matters because RECON is not just a philosophical argument. It is a
      demand for the registry defender to prove the thing they keep assuming.
    </p>

    <p>If registries work, show it.</p>

    <p>If they work only for one category of crime, explain why.</p>

    <p>
      If the evidence is mixed, weak, or context-dependent, stop pretending the
      debate is between people who care about children and people who do not.
    </p>

    <p>That is lazy. Worse, it is policy by emotional blackmail.</p>

    <Callout variant="research" title="Read the data carefully" icon="🔎">
      <p>
        The BJS comparison here uses rearrest, not proven reoffense or
        reconviction, and the broader same-type figures refer to broad offense
        categories. That caution matters — and it is exactly why registry policy
        should not be built on slogans.
      </p>

      <ul className="list-disc pl-6">
        <li>
          Rape / sexual assault rearrest after rape / sexual assault release
          category: 7.7%
        </li>
        <li>Violent broad same-type rearrest: 43.4%</li>
        <li>Drug broad same-type rearrest: 60.4%</li>
        <li>Property broad same-type rearrest: 63.5%</li>
        <li>Public-order broad same-type rearrest: 70.3%</li>
      </ul>

      <p>
        These are rearrest measures and broad offense categories, not
        offense-specific reoffense findings.
      </p>
    </Callout>

    <BandHeader
      title="“Even One Prevented Crime” Is an Argument for Every Registry"
      icon="1️⃣"
    />

    <p>
      Another familiar defense is that even if a registry prevents only one
      future crime, it is worth it.
    </p>

    <p>Very moving. Also very dangerous.</p>

    <p>But again, let’s grant the premise.</p>

    <p>
      If even one prevented crime justifies permanent public registration, why
      stop at sex offenses?
    </p>

    <p>
      If a public registry could prevent one child from being killed with a gun,
      would that be worth it?
    </p>

    <p>
      If it could prevent one child from being killed by a drunk driver, would
      that be worth it?
    </p>

    <p>
      If it could prevent one teenager from dying after taking a drug sold by a
      repeat trafficker, would that be worth it?
    </p>

    <p>
      If it could prevent one family from being terrorized by a violent domestic
      abuser, one elderly person from being financially destroyed by a fraud
      offender, or one neighborhood from being harmed by an arsonist, would that
      be worth it?
    </p>

    <p>
      If the answer is yes, then registry defenders should be advocating for
      more registries, not just defending one.
    </p>

    <p>
      If the answer is no, then “even one” is not really the standard. It is a
      slogan used selectively when the target is someone convicted of a sex
      offense.
    </p>

    <p>
      Public policy cannot be built on a slogan that would justify almost
      anything if applied consistently.
    </p>

    <p>
      Unless, of course, the goal is not principled public safety. Maybe the goal
      is to keep one group permanently exposed because doing so feels righteous
      and costs politicians nothing.
    </p>

    <p>That would be a much uglier argument.</p>

    <p>It would also be more honest.</p>
  </>
);

const articlePartThree = (
  <>
    <BandHeader
      title="A Public List Is Not the Same Thing as Prevention"
      icon="🧭"
    />

    <p>A registry is easy to understand. That is part of its appeal.</p>

    <p>
      It gives the public a map, a name, a face, and the feeling that danger has
      been located. It tells people that risk can be searched, sorted, and
      avoided.
    </p>

    <p>That feeling is powerful.</p>

    <p>It is not the same thing as prevention.</p>

    <p>
      Real prevention asks harder questions. Where does harm actually occur? Who
      has access? What institutions ignore warning signs? What treatment works?
      What supervision is lawful and individualized? What do families need? What
      do children need to know? What conditions reduce future harm? What
      reporting systems fail before the criminal legal system ever gets
      involved?
    </p>

    <p>A public list does not answer most of those questions.</p>

    <p>It does not create housing.</p>

    <p>It does not create employment.</p>

    <p>It does not provide treatment.</p>

    <p>It does not repair family systems.</p>

    <p>It does not supervise high-risk people more intelligently.</p>

    <p>
      It does not teach institutions how to identify grooming, respond to
      complaints, or stop protecting trusted insiders.
    </p>

    <p>
      It does not tell a parent which uncle, coach, pastor, teacher, partner,
      officer, doctor, or family friend is misusing trust and access right now.
    </p>

    <p>
      It gives the public a very specific kind of information about a very
      specific group of people who have already been caught, convicted,
      sentenced, and labeled.
    </p>

    <p>
      That may feel like control. But public safety is not supposed to be a
      feelings exercise.
    </p>

    <BandHeader title="“Just Information” Is Doing a Lot of Work" icon="ℹ️" />

    <p>
      Registry defenders also insist that registries are not punishment. They
      are just information.
    </p>

    <p>That is a very convenient sentence.</p>

    <p>
      But if the registry is just information, why defend it as a safety
      intervention?
    </p>

    <p>Why claim it protects children?</p>

    <p>Why claim it warns families?</p>

    <p>Why claim it prevents future harm?</p>

    <p>
      Why require people to report in person, update addresses, disclose
      identifiers, face criminal penalties for paperwork violations, endure
      public exposure, and live under restrictions that can follow them for
      years or life?
    </p>

    <p>That is a lot of machinery for “just information.”</p>

    <p>
      Registry defenders cannot have it both ways. Either public notification
      changes people’s lives and behavior enough to matter, or it does not.
    </p>

    <p>
      And if it does change lives, then we have to ask what kind of changes it
      produces.
    </p>

    <p>Does it reduce harm?</p>

    <p>
      Or does it push people into unemployment, housing instability, isolation,
      family stigma, threats, and civic exclusion while giving communities a
      false sense of control?
    </p>

    <p>
      The registry cannot be powerful enough to protect the public and harmless
      enough to dismiss its consequences.
    </p>

    <p>Pick one.</p>

    <Callout variant="urgent" title="Pick one" icon="↔️">
      <p>
        The registry cannot be powerful enough to protect the public and
        harmless enough to dismiss its consequences.
      </p>
    </Callout>

    <BandHeader
      title="The Registry Argument Depends on Exception-Making"
      icon="🚧"
    />

    <p>
      The more carefully you listen, the more obvious the double standard
      becomes.
    </p>

    <p>
      When the registry is for people convicted of sex offenses, public exposure
      is called safety.
    </p>

    <p>
      When the same idea is applied to other serious crimes, people call it
      government overreach.
    </p>

    <p>When registrants lose housing, that is accountability.</p>

    <p>
      When other people with convictions face housing barriers, that is a
      reentry problem.
    </p>

    <p>
      When registrants cannot find work, that is the consequence of their
      actions.
    </p>

    <p>
      When other people with convictions cannot find work, that is a barrier to
      stability.
    </p>

    <p>
      When registrants’ families are harassed, excluded, or destabilized, that
      is unfortunate collateral damage.
    </p>

    <p>
      When we imagine the same thing happening to other families, people
      suddenly remember that children should not be punished for a parent’s
      conviction.
    </p>

    <p>
      This is not a principled safety framework. It is a hierarchy of sympathy.
    </p>

    <p>
      RECON simply refuses to let that hierarchy hide behind public-safety
      language.
    </p>

    <PullQuote>
      This is not a principled safety framework. It is a hierarchy of sympathy.
    </PullQuote>

    <BandHeader title="The Real Choice" icon="⚖️" />

    <p>There are only two honest positions.</p>

    <p>
      The first is universal registry logic: public registries are so effective,
      necessary, and fair that they should be applied consistently across
      serious criminal convictions.
    </p>

    <p>That means accepting a much larger registry society.</p>

    <p>Not just sex offenses. All serious harm.</p>

    <p>Not just one politically despised group. Everyone.</p>

    <p>If that is the principle, defend it openly.</p>

    <p>
      Build the murder registry. Build the domestic violence registry. Build the
      DUI registry. Build the arson registry. Build the drug trafficking
      registry. Build the fraud registry. Build the violent felony registry.
      Build the searchable public database of everyone whose past conviction
      might make someone nervous.
    </p>

    <p>Ridiculous? Maybe.</p>

    <p>But it is your logic. We are just taking it seriously.</p>

    <p>
      The second position is registry abolition or serious registry rollback:
      public registries are punitive, destabilizing, overbroad, and weakly
      supported as prevention tools, so they should not be imposed as permanent
      public punishment after a person has completed the court’s sentence.
    </p>

    <p>That is the position SOLAR urges people to take seriously.</p>

    <p>
      But what registry defenders cannot honestly defend is the middle position:
      public registries are supposedly necessary for safety, but only when
      applied to the group society is most willing to exile.
    </p>

    <p>That is not evidence-based policy.</p>

    <p>That is selective outrage wearing a safety vest.</p>

    <PullQuote>
      Ridiculous? Maybe. But it is your logic. We are just taking it seriously.
    </PullQuote>

    <BandHeader
      title="Accountability Cannot Mean Permanent Exile"
      icon="🏛️"
    />

    <p>
      A person can be held accountable without being turned into a permanent
      public warning label.
    </p>

    <p>A person can be supervised without being publicly branded.</p>

    <p>
      A person can be required to complete treatment, obey lawful restrictions,
      and rebuild responsibly without being pushed into homelessness,
      unemployment, isolation, and civic death.
    </p>

    <p>
      Accountability should be real. It should be lawful. It should be
      individualized. It should be proportionate. It should make future harm
      less likely.
    </p>

    <p>Permanent public registry punishment fails that test.</p>

    <p>And RECON exposes why.</p>

    <p>
      If public registries are truly safety tools, then apply them consistently
      and admit the kind of society that creates.
    </p>

    <p>
      If they are too broad, too harmful, too unreliable, too ineffective, and
      too punitive for everyone else, then stop pretending they become
      principled when aimed at people convicted of sex offenses.
    </p>

    <p>Register every crime or none.</p>

    <p>That is not the contradiction.</p>

    <p>It is the mirror.</p>

    <p>
      The contradiction belongs to everyone who insists registries are necessary
      — right up until RECON asks them to mean it.
    </p>

    <Callout
      variant="policy"
      title="Register every crime or none"
      icon="⚖️"
    >
      <p>
        If registries are true safety tools, apply them consistently. If they
        are too broad, too punitive, or too unreliable for everyone else, stop
        pretending they become principled when aimed at people convicted of sex
        offenses.
      </p>
    </Callout>
  </>
);

const articlePartFour = (
  <>
    <ContextualActionCard config={contextualAction} />

    <Divider label="Sources and related reading" />

    <BandHeader title="Data Sources" icon="📚" />

    <ul className="list-disc pl-6">
      <li>
        <a
          className={linkCls}
          href="https://bjs.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bureau of Justice Statistics’ nine-year follow-up study on people
          released after rape or sexual assault convictions
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://bjs.ojp.gov/library/publications/2018-update-prisoner-recidivism-9-year-follow-period-2005-2014"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bureau of Justice Statistics’ broader nine-year prisoner recidivism
          report
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://www.cdc.gov/firearm-violence/data-research/facts-stats/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC firearm injury and death facts
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://www.cdc.gov/nchs/pressroom/releases/20250514.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC/NCHS 2024 provisional overdose death data
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://www.cdc.gov/nchs/fastats/drug-overdoses.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC drug overdose fast facts
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/813815"
          target="_blank"
          rel="noopener noreferrer"
        >
          NHTSA’s 2024 alcohol-impaired-driving facts
        </a>
      </li>
      <li>
        <a
          className={linkCls}
          href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Institute of Justice’s South Carolina SORN evaluation
        </a>
      </li>
    </ul>

    <BandHeader title="Related Reading" icon="🔗" />

    <ul className="list-disc pl-6">
      <li>
        <Link
          className={linkCls}
          to="/blog/the-registry-is-not-a-prevention-plan"
        >
          The Registry Is Not a Prevention Plan
        </Link>
      </li>
      <li>
        <Link className={linkCls} to="/advocacy">
          SOLAR’s evidence-based reform position
        </Link>
      </li>
      <li>
        <Link className={linkCls} to="/resources/state-registry">
          State registry overview pages
        </Link>
      </li>
      <li>
        <Link className={linkCls} to="/resources/legislative-tracker">
          SOLAR’s Legislative Tracker
        </Link>
      </li>
      <li>
        <Link className={linkCls} to="/resources">
          SOLAR’s reentry and registry resources
        </Link>
      </li>
      <li>
        <Link className={linkCls} to="/blog">
          More SOLAR analysis on registry policy and public safety
        </Link>
      </li>
    </ul>
  </>
);

export default function RegisterEveryCrimeOrNone(): JSX.Element {
  return (
    <BlogLayout
      title="Register Every Crime or None: The RECON Test for Public Registries"
      description="RECON exposes the contradiction behind public registries: if registries protect children and prevent recidivism, why stop at one crime? If they are too punitive for everyone else, the objection has already been admitted."
      keywords="sex offender registry reform, RECON, Register Every Crime or None, public registries, registry reform, conviction registry, public notification, public safety mythology, collateral consequences, selective punishment, registry punishment, recidivism"
      date="Jul 17, 2026"
      readTime="10 min read"
      badge="📝 BLOG"
      lede="If registries protect children, prevent recidivism, and make communities safer, why stop at one crime? RECON forces registry defenders to either mean what they say or admit the registry is selective punishment."
    >
      <article className="prose prose-slate max-w-none">
        {articlePartOne}
        {articlePartTwo}
        {articlePartThree}
        {articlePartFour}
      </article>
    </BlogLayout>
  );
}