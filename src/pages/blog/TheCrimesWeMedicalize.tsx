import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  PullQuote,
  Divider,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "state-lawmaker",
  primaryPositionId: "punitive",
  secondaryPositionId: "one-size-fits-all",
  formatId: "email",
  headline:
    "Ask state lawmakers to review invasive bodily and psychological controls",
  description:
    "Sex-offense policy has normalized surgical castration, chemical castration, genital arousal testing, and polygraph-based supervision under the language of treatment and public safety. State lawmakers can require stronger evidence, individualized necessity, proportionality, and meaningful medical-ethics safeguards.",
  recommendation: {
    audienceLabel: "state lawmakers",
    suggestion:
      "Ask lawmakers to hold hearings and review, limit, or reject laws and supervision practices that impose invasive bodily or psychological controls without individualized necessity, strong evidence, medical-ethics safeguards, and proportionality.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Review and limit laws or supervision practices that authorize surgical castration, chemical castration, genital arousal testing, or polygraph-based liberty consequences for people convicted of sex offenses unless the practice is individualized, evidence-based, medically ethical, subject to meaningful judicial findings, and no more intrusive than necessary.",
  personalContext:
    "I am writing after reading SOLAR’s analysis of how sex-offense policy has normalized invasive bodily and psychological controls — including surgical castration, chemical castration, penile arousal testing, and polygraph-based supervision — under the language of treatment and public safety.",
  source: {
    title:
      "The Crimes We Medicalize: Castration Laws, Arousal Testing, and the Separate System Built Around Sex Offenses",
    path: "/blog/the-crimes-we-medicalize-castration-arousal-testing-sex-offenses",
    type: "blog",
  },
};

function ArticlePartOne(): JSX.Element {
  return (
    <>
      <Callout variant="policy" title="TL;DR" icon="⚖️">
        <p>
          Sexual harm is serious, and prevention matters. But seriousness does
          not give the state a blank check to use surgical castration, chemical
          suppression, genital arousal measurement, and disputed lie-detection
          tools while calling them treatment. This piece asks why those
          practices have become politically imaginable for one class of
          conviction — and what that reveals about fear, stigma, and selective
          accountability.
        </p>
      </Callout>

      <p>
        There are many crimes that raise legitimate questions about future
        risk. Drunk driving. Domestic violence. Assault. Arson. Stalking. Child
        abuse. Weapons offenses. Repeated fraud. Violence inside families.
        Violence inside institutions.
      </p>

      <p>
        But the state does not respond to all future-risk crimes in the same
        way.
      </p>

      <p>
        For one class of conviction, American law and supervision practice have
        built something far more intimate than ordinary probation. The system
        does not merely monitor where a person lives or whether they attend
        treatment. It reaches into the body, the genitals, the sexual history,
        the fantasy life, the therapy room, the family relationship, the
        internet search bar, and the machine-generated ritual of “truth.”
      </p>

      <p>Sex-offense policy has created a separate medical-surveillance regime.</p>

      <p>
        That phrase sounds extreme until we say out loud what the regime
        includes: chemical castration laws, penile arousal testing, compelled
        sexual-history disclosure, treatment polygraphs, pornography
        restrictions, recurring risk assessments, and therapy models that can
        blur the line between treatment and interrogation.
      </p>

      <p>
        This is not an argument that sexual harm is unserious. It is serious. It
        deserves prevention, accountability, treatment, and careful supervision
        when supervision is lawful and individualized.
      </p>

      <p>But seriousness is not a blank check.</p>

      <p>
        A policy can invoke children, safety, and treatment while still becoming
        barbaric. A court can call something a condition of release while still
        ordering an invasion that would horrify the public if applied to nearly
        any other class of crime. A state can say “treatment” while using the
        body as a site of punishment.
      </p>

      <p>That is the issue.</p>

      <BandHeader
        title="The State Does Not Treat Every Future-Risk Crime This Way"
        icon="⚖️"
      />

      <p>
        Most people understand that conviction can bring restrictions. A person
        convicted of drunk driving may face license suspension, ignition
        interlock requirements, alcohol testing, treatment, or probation. A
        person convicted of domestic violence may face no-contact orders,
        firearms restrictions, counseling, or supervision. A person convicted
        of drug offenses may face testing, treatment, and search conditions.
      </p>

      <p>
        Those conditions can be burdensome. Some may be justified. Some may be
        overused. Some may be unfair.
      </p>

      <p>
        But sex-offense supervision often goes further. It is not only about
        conduct. It is about sexual identity, arousal, private thought,
        disclosure, bodily reaction, and compulsory confession.
      </p>

      <p>
        This is not an activist caricature of the system.{" "}
        <a
          className={linkCls}
          href="https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-sex-offense-specific-assessment-treatment-and"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal supervision guidance on sex-offense-specific assessment and
          physiological testing
        </a>{" "}
        recognizes that sex-offense-specific evaluations and treatment may
        include physiological testing such as the plethysmograph, visual
        reaction testing, or the clinical polygraph. It also states that if
        clinical assessment after release shows physiological testing
        mechanisms such as the plethysmograph or visual reaction time are
        necessary, a probation officer may recommend that the court modify
        supervision conditions.
      </p>

      <p>That should stop us for a moment.</p>

      <p>
        A plethysmograph is not a workbook. It is not a conversation with a
        therapist. It is not a urine test. In the sex-offense context, penile
        plethysmography involves attaching a measuring device to a person’s
        genitals while exposing the person to sexual stimuli, then interpreting
        physical arousal as data.
      </p>

      <p>The clinical name hides the reality.</p>

      <PullQuote>
        “The state can order genital arousal measurement and call it treatment.”
      </PullQuote>

      <BandHeader
        title="Chemical Castration Is Bodily Control, Not Treatment"
        icon="🧬"
      />

      <p>
        Chemical castration is often described in policy language as
        medication, hormonal treatment, or anti-androgen therapy.
      </p>

      <p>That language is too clean.</p>

      <p>
        Chemical castration means the state authorizes drugs intended to
        suppress sexual drive and sexual functioning. In some legal settings,
        this is attached to release, parole, probation, or continued control
        after imprisonment. It may be described as treatment, but the context
        matters. Treatment chosen by a patient for a medical purpose is one
        thing. Medication imposed by the criminal legal system as a condition of
        liberty is another.
      </p>

      <p>
        <a
          className={linkCls}
          href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=645."
          target="_blank"
          rel="noopener noreferrer"
        >
          California law
        </a>
        , for example, provides that a person convicted of specified offenses
        involving a victim under 13 may, upon parole and at the court’s
        discretion, undergo medroxyprogesterone acetate treatment or its
        chemical equivalent; for a second conviction, the statute says the
        person “shall” undergo that treatment upon parole. The same statute
        states that a person who voluntarily undergoes a permanent surgical
        alternative is not subject to that section.
      </p>

      <p>
        Louisiana went further in 2024. For certain aggravated sex offenses
        involving children under 13,{" "}
        <a
          className={linkCls}
          href="https://legis.la.gov/Legis/Law.aspx?d=1388414"
          target="_blank"
          rel="noopener noreferrer"
        >
          Louisiana law now allows a court to sentence a person to surgical
          castration
        </a>
        , administered through the Department of Public Safety and Corrections
        by a licensed physician. Put plainly, this is not a metaphor. It is not
        “monitoring.” It is not a treatment class or a restriction on movement.
        Surgical castration means what the phrase says. In male bodies, it means
        the physical removal or disabling of the testicles. It is the state
        authorizing the physical mutilation of a person’s reproductive organs as
        punishment, then laundering that reality through the language of
        medicine and public safety.
      </p>

      <p>
        The point is not that medication can never be part of ethical treatment.
        The point is that sex-offense law has made bodily suppression
        politically imaginable in a way that would be almost unthinkable
        elsewhere.
      </p>

      <p>
        Imagine a legislature proposing hormone-altering medication for people
        convicted of domestic violence because the state believes testosterone
        contributes to aggression. Imagine a statute authorizing a medical
        intervention to blunt impulsivity among people convicted of assault.
        Imagine public officials proposing recurring bodily interventions for
        people convicted of drunk driving, not because they requested medical
        help, but because the public wanted visible proof that the state was
        being tough.
      </p>

      <p>The public would recognize the danger immediately.</p>

      <p>
        People would ask: Is it medically necessary? Is it voluntary? Is it
        individualized? What are the side effects? Who decides? Can refusal keep
        someone incarcerated? Does the punishment end? What evidence shows that
        this works better than less invasive alternatives?
      </p>

      <p>
        Those questions should not disappear when the conviction label is a sex
        offense.
      </p>

      <p>
        <Link className={linkCls} to="/advocacy">
          SOLAR’s position is not anti-accountability
        </Link>
        . It is anti-myth, anti-permanent-punishment, and anti-fear-based policy.
        Public safety must be evidence-based, proportional, humane, and
        constitutionally grounded. A separate bodily-control regime for one
        despised class should face more scrutiny, not less.
      </p>
    </>
  );
}

function ArticlePartTwo(): JSX.Element {
  return (
    <>
      <BandHeader
        title="The Penile Plethysmograph: When the State Measures Arousal"
        icon="📊"
      />

      <p>
        If chemical castration is the most visible example, penile
        plethysmography may be the most revealing.
      </p>

      <p>
        The phrase sounds technical enough to pass through court orders and
        treatment documents without moral alarm. But again, plain language
        matters.
      </p>

      <p>
        A penile plethysmograph is a device used to measure physical changes in
        the penis while a person is exposed to sexual material. In practice,
        that means a person can be required to have a device attached to his
        genitals while the system presents stimuli and records bodily reaction.
      </p>

      <p>
        That description is not SOLAR exaggerating for effect. In{" "}
        <a
          className={linkCls}
          href="https://law.justia.com/cases/federal/appellate-courts/ca2/12-3514/12-3514-2013-10-03.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          United States v. McLaurin
        </a>
        , the Second Circuit described penile plethysmography as a procedure in
        which a device is attached to a person’s penis while the person is shown
        pornographic images or videos so the examiner can measure erectile
        response. The court called the condition “unduly intrusive” in that case
        and found it was not reasonably related to the statutory goals of
        treatment, deterrence, or public protection.
      </p>

      <p>That is not merely “assessment.”</p>

      <p>It is government-facilitated genital monitoring.</p>

      <p>
        The intrusion is so extraordinary that courts have sometimes said so in
        unusually blunt terms. The Second Circuit recognized that penile
        plethysmography imposes a serious physical intrusion and quoted prior
        judicial concern about the humiliation of having the size and rigidity
        of one’s penis measured and monitored by the government.
      </p>

      <p>That phrase should not be buried in a footnote.</p>

      <p>Measured and monitored by the government.</p>

      <p>That is what we are talking about.</p>

      <p>
        The state would not casually order most people convicted of crimes to
        expose their bodies to a machine so the government can measure an
        involuntary physical response. It would not call that ordinary
        rehabilitation. It would not call public discomfort irrational. It would
        not expect the person to be grateful for the opportunity to demonstrate
        “treatment progress.”
      </p>

      <p>
        But in sex-offense supervision, the unimaginable becomes administrative.
      </p>

      <p>
        And once a practice is placed inside the treatment box, the public often
        stops asking whether the practice is ethical, reliable, proportionate,
        or necessary. The label does the work. It is “for safety.” It is
        “clinical.” It is “risk management.”
      </p>

      <p>Those words are not enough.</p>

      <p>
        A procedure can be clinical and still be degrading. It can be ordered by
        a court and still be excessive. It can be connected to a real harm and
        still fail the test of proportionality.
      </p>

      <BandHeader
        title="The Polygraph Problem: Too Unreliable for Court, Useful Enough for Control"
        icon="📈"
      />

      <p>Then there is the polygraph.</p>

      <p>
        Polygraphs occupy a strange place in American law. Courts have often
        treated polygraph evidence with skepticism because of reliability
        concerns. In{" "}
        <a
          className={linkCls}
          href="https://www.law.cornell.edu/supct/html/96-1133.ZC.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          United States v. Scheffer
        </a>
        , the Supreme Court upheld a rule excluding polygraph evidence in
        court-martial proceedings, pointing to continuing disagreement among
        experts and courts about polygraph reliability.
      </p>

      <p>
        That skepticism is not mysterious. A polygraph does not read the soul.
        It measures physiological responses such as heart rate, blood pressure,
        breathing, and skin conductivity while a person answers questions. The
        machine does not directly detect lies. It records stress responses and
        invites an examiner to interpret them.
      </p>

      <p>
        Yet in sex-offense supervision, the same technology courts often
        distrust becomes a recurring management tool.
      </p>

      <p>
        <a
          className={linkCls}
          href="https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-polygraph-sex-offender-management-probation-and"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal supervision guidance on polygraph use for sex-offender
          management
        </a>{" "}
        describes the polygraph as a sex-offender-management tool used to gather
        historical information, assess risk, target treatment interventions,
        increase disclosure, and deter reoffending during supervision. It also
        distinguishes sexual history disclosure polygraphs, maintenance and
        monitoring polygraphs, and issue-specific polygraphs.{" "}
        <a
          className={linkCls}
          href="https://www.flsenate.gov/Laws/Statutes/2025/0948.30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Florida law
        </a>{" "}
        likewise requires, for certain people on probation or community control
        for specified sex offenses, at least annual polygraph examinations as
        part of treatment to obtain information for risk management and
        treatment and to reduce denial mechanisms.
      </p>

      <p>So the system’s position becomes almost absurd:</p>

      <PullQuote>
        “Not reliable enough to prove truth in court. Reliable enough to shape
        liberty under supervision.”
      </PullQuote>

      <p>That contradiction deserves to be named.</p>

      <p>
        The polygraph may not be formally admitted as courtroom proof in many
        settings, but in practice it can still matter enormously.{" "}
        <a
          className={linkCls}
          href="https://www.uscourts.gov/appendix-sample-special-condition-language-probation-and-supervised-release-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federal sample condition language
        </a>{" "}
        says a person may be required to submit to periodic polygraph testing at
        the probation officer’s discretion as a way to ensure compliance with
        supervision or treatment requirements. It can influence treatment
        status. It can generate pressure from probation. It can affect whether
        someone is viewed as compliant, deceptive, minimizing, or “in denial.”
        It can trigger more questioning, more restrictions, more suspicion, and
        more treatment consequences.
      </p>

      <p>
        Even where a failed polygraph cannot by itself prove a violation, the
        process can still function as leverage.
      </p>

      <p>
        That is why the phrase “treatment polygraph” deserves scrutiny.
        Treatment is supposed to be a clinical process aimed at growth,
        accountability, and risk reduction. A polygraph is an interrogation
        machine wrapped in wires. When those two things merge, the therapy room
        becomes something else.
      </p>

      <BandHeader
        title="Therapy, Surveillance, and Confession Get Blurred"
        icon="🧠"
      />

      <p>
        Sex-offense treatment is often described as a pathway to accountability.
      </p>

      <p>
        Sometimes it may be. Ethical, evidence-based treatment can matter.
        People who have caused harm may need intervention, boundaries, insight,
        and support to prevent future harm. Communities need effective
        prevention tools.
      </p>

      <p>
        But a treatment system becomes dangerous when progress is measured by
        submission to a predetermined script.
      </p>

      <p>
        Did you disclose enough? Did you admit enough? Did you describe enough?
        Did your body respond correctly? Did the machine say you were truthful?
        Did your hesitation become “denial”? Did your discomfort become
        “minimization”? Did your refusal to submit to an invasive test become
        evidence that you are hiding something?
      </p>

      <p>This is where sex-offense supervision can become Kafkaesque.</p>

      <p>
        The official language confirms the blur. In federal guidance, the
        polygraph is described as a tool for risk assessment, treatment
        targeting, disclosure, deterrence, and supervision compliance. Those may
        be legitimate goals in some circumstances, but they are not the same
        goal. When they collapse into one process, the person under supervision
        is not simply in therapy. They are inside a hybrid system of treatment,
        interrogation, and surveillance.
      </p>

      <p>
        A person can be told that the system wants honesty, but the terms of
        honesty are controlled by the system. A person can be told that treatment
        is voluntary in theory, while liberty depends on participation in
        practice. A person can be told that the process is therapeutic, while
        every disclosure may have supervision consequences. A person can be told
        that the polygraph is not court evidence, while everyone in the room
        knows it can still change the way probation and treatment providers
        treat them.
      </p>

      <p>
        This does not mean there should be no treatment. It means treatment
        should not become a disguised extension of punishment without the
        protections we usually associate with punishment.
      </p>

      <p>
        It also means we should be honest about the emotional and bodily reality
        of these practices.
      </p>

      <p>
        Being ordered to discuss one’s sexual history under threat of
        supervision consequences is invasive.
      </p>

      <p>
        Being ordered to submit to genital arousal measurement is invasive.
      </p>

      <p>
        Being ordered to undergo recurring lie-detector examinations about
        sexual conduct, thoughts, or compliance is invasive.
      </p>

      <p>
        Being required to take medication that suppresses sexual functioning as
        a condition of release is invasive.
      </p>

      <p>
        The public may support these practices because the people targeted are
        unpopular. But constitutional limits, medical ethics, and basic human
        dignity are not supposed to depend on popularity.
      </p>
    </>
  );
}

function ArticlePartThree(): JSX.Element {
  return (
    <>
      <BandHeader title="Why Is This Normal Only Here?" icon="⚖️" />

      <p>This is the RECON question.</p>

      <p>
        RECON does not mean SOLAR wants a registry for every crime or a
        bodily-control regime for every conviction. The point is the opposite.
        RECON asks why the claimed logic of public safety is applied so
        selectively. If the state says public fear, future risk, and community
        notification justify permanent public punishment for one class, why
        does that logic stop there? If the same logic would be intolerable when
        applied broadly, why is it accepted here?
      </p>

      <p>The same question applies to medicalized control.</p>

      <p>
        If chemical castration, genital arousal testing, and polygraph-driven
        supervision are justified because sex offenses are serious and future
        harm matters, then what principle limits the state from building
        equivalent bodily regimes for other serious harms?
      </p>

      <p>
        Why not compelled physiological testing for people convicted of
        domestic violence?
      </p>

      <p>
        Why not recurring machine-based “truth” tests for people convicted of
        child abuse, elder abuse, arson, or drunk driving?
      </p>

      <p>
        Why not medication-based release conditions for people convicted of
        violent assault?
      </p>

      <p>
        Most readers instinctively understand the danger. They may believe in
        accountability. They may support supervision. But they do not want the
        government casually attaching machines to bodies, medicating people into
        compliance, or using disputed pseudo-scientific rituals as liberty
        filters.
      </p>

      <p>That instinct is correct.</p>

      <p>
        The problem is that many people suspend that instinct when the label is
        “sex offender.”
      </p>

      <p>
        That is how exceptional systems are built. Not all at once. Not with one
        law. Not with one court order. They are built through stigma, fear,
        administrative language, and the repeated assurance that this group is
        different enough that ordinary limits need not apply.
      </p>

      <BandHeader
        title="Other Democracies Are Wrestling With the Same Line"
        icon="🌍"
      />

      <p>This is not only an American question.</p>

      <p>
        Other advanced democracies are also wrestling with the boundary between
        treatment, punishment, public safety, and bodily control. The{" "}
        <a
          className={linkCls}
          href="https://www.gov.uk/government/news/more-sex-offenders-given-chemical-suppressants"
          target="_blank"
          rel="noopener noreferrer"
        >
          United Kingdom’s Ministry of Justice announced in September 2025 that
          it was expanding a chemical-suppression pilot
        </a>{" "}
        to three regions, saying that around 6,400 people convicted of sex
        offenses would be able to access medication alongside psychological
        treatment. The government described SSRIs and anti-androgens as
        medication options aimed at reducing intrusive sexual thoughts or
        reducing testosterone and libido.
      </p>

      <p>
        That comparison should not be used to pretend Europe is uniformly
        enlightened. It is not. The same medicalized logic appears there too,
        often wrapped in rehabilitation language.
      </p>

      <p>
        But the European human-rights frame sometimes names the danger more
        directly than American policy does.{" "}
        <a
          className={linkCls}
          href="https://www.echr-cpt.com/2025/03/22/czechia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Council of Europe’s anti-torture committee has continued to
          criticize the use of surgical castration in Czechia
        </a>{" "}
        in the treatment of people convicted of sex offenses, keeping the issue
        inside a framework of torture prevention and protection against inhuman
        or degrading treatment.
      </p>

      <p>That difference matters.</p>

      <p>
        In the United States, these practices are often domesticated into the
        language of sentencing, supervision, assessment, and treatment. The
        question becomes administrative: Did the statute allow it? Did the judge
        order it? Did probation request it? Did the treatment provider recommend
        it?
      </p>

      <p>
        The human-rights question is more basic: when does the state’s pursuit
        of risk management become degrading treatment?
      </p>

      <p>That is the line every democracy should be forced to answer.</p>

      <BandHeader
        title="Real Prevention Does Not Require Ritual Humiliation"
        icon="🛡️"
      />

      <p>
        The defenders of these practices will say the stakes are too high to be
        squeamish.
      </p>

      <p>That response misses the point.</p>

      <p>
        The objection is not squeamishness. The objection is that humiliation
        is not the same thing as prevention. Bodily invasion is not the same
        thing as accountability. A machine is not truth. A coerced confession is
        not necessarily insight. A medication requirement is not automatically
        ethical because a statute authorizes it.
      </p>

      <p>
        Real prevention requires evidence, proportionality, and individualized
        judgment.
      </p>

      <p>It requires accurate risk assessment, not category panic.</p>

      <p>
        It requires lawful supervision that is actually connected to a person’s
        circumstances.
      </p>

      <p>
        It requires treatment that can be clinically meaningful rather than
        merely coercive.
      </p>

      <p>
        Even{" "}
        <a
          className={linkCls}
          href="https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-sex-offense-specific-assessment-treatment-and"
          target="_blank"
          rel="noopener noreferrer"
        >
          federal supervision guidance
        </a>{" "}
        points toward evidence-based correctional principles, including risk,
        need, and responsivity. It says interventions should be rooted in
        empirical knowledge about sources of criminal conduct and should target
        dynamic risk factors that can be changed. Those principles are useful
        precisely because they cut against blanket humiliation. The question is
        whether practice actually follows them, or whether “treatment” becomes
        the word used to make extraordinary coercion sound ordinary.
      </p>

      <p>
        Real prevention requires stable housing, employment, family support, and
        reintegration, because destabilization is not safety infrastructure.
      </p>

      <p>
        It requires institutions to focus on where harm actually occurs,
        including families, schools, churches, youth organizations, medical
        settings, correctional settings, and other places where trust and access
        can be abused.
      </p>

      <p>
        It requires earlier intervention, better reporting systems, and real
        accountability for institutions that ignore warning signs.
      </p>

      <p>
        It does not require pretending that every person with a sex-offense
        conviction is the same. It does not require a permanent underclass. And
        it does not require giving the state unlimited permission to invade the
        body because the public has been trained not to care.
      </p>

      <BandHeader title="The Safety Question the System Avoids" icon="❓" />

      <p>The core question is not whether sexual harm matters.</p>

      <p>Of course it does.</p>

      <p>
        The question is whether the policies built in the name of preventing
        sexual harm are honest, effective, proportionate, and subject to the
        same skepticism we would apply anywhere else.
      </p>

      <p>
        Sex-offense policy has normalized a separate regime of bodily and
        psychological control. Chemical castration laws turn medication into
        punishment. Penile plethysmography turns genital response into
        government data. Treatment polygraphs turn disputed lie-detection
        technology into supervision leverage. Compelled disclosure systems blur
        the line between therapy and interrogation.
      </p>

      <p>The state calls this treatment.</p>

      <p>The public should ask whether it is also punishment.</p>

      <p>
        And if we would reject this kind of regime for almost any other category
        of crime, we should be honest about why it became acceptable here.
      </p>

      <p>Not because it is obviously scientific.</p>

      <p>Not because it is obviously effective.</p>

      <p>Not because it is obviously constitutional in every application.</p>

      <p>
        But because the people subjected to it are politically easy to
        dehumanize.
      </p>

      <p>That is not a prevention strategy. It is a warning sign.</p>

      <p>
        A society committed to real safety can hold people accountable without
        turning fear into medicalized control. It can prevent harm without
        ritual humiliation. It can use treatment without converting treatment
        into surveillance. It can recognize the seriousness of sexual abuse
        without abandoning bodily autonomy, evidence, proportionality, and human
        dignity.
      </p>

      <PullQuote>
        “The measure of a justice system is not how carefully it treats the
        popular.”
      </PullQuote>

      <p>
        It is how many limits it remembers when the person standing before it is
        someone the public has been taught to despise.
      </p>

      <ContextualActionCard config={contextualAction} />

      <Divider label="Sources and next steps" />
    </>
  );
}

function ArticlePartFour(): JSX.Element {
  return (
    <>
      <BandHeader title="Data Sources" icon="📚" />

      <ul className="list-disc pl-6">
        <li>
          U.S. Courts —{" "}
          <a
            className={linkCls}
            href="https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-sex-offense-specific-assessment-treatment-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal supervision guidance on sex-offense-specific assessment and
            physiological testing
          </a>
        </li>
        <li>
          California Legislature —{" "}
          <a
            className={linkCls}
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=645."
            target="_blank"
            rel="noopener noreferrer"
          >
            California Penal Code section 645
          </a>
        </li>
        <li>
          Louisiana Legislature —{" "}
          <a
            className={linkCls}
            href="https://legis.la.gov/Legis/Law.aspx?d=1388414"
            target="_blank"
            rel="noopener noreferrer"
          >
            Louisiana Revised Statutes section 14:43.7
          </a>
        </li>
        <li>
          Associated Press —{" "}
          <a
            className={linkCls}
            href="https://apnews.com/article/louisiana-surgical-castration-sex-crime-offender-234cdd9da804382d90dec409756dc445"
            target="_blank"
            rel="noopener noreferrer"
          >
            reporting on Louisiana’s surgical-castration law
          </a>
        </li>
        <li>
          U.S. Court of Appeals for the Second Circuit —{" "}
          <a
            className={linkCls}
            href="https://law.justia.com/cases/federal/appellate-courts/ca2/12-3514/12-3514-2013-10-03.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            United States v. McLaurin
          </a>
        </li>
        <li>
          U.S. Supreme Court —{" "}
          <a
            className={linkCls}
            href="https://www.law.cornell.edu/supct/html/96-1133.ZC.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            United States v. Scheffer
          </a>
        </li>
        <li>
          U.S. Courts —{" "}
          <a
            className={linkCls}
            href="https://www.uscourts.gov/about-federal-courts/probation-and-pretrial-services/post-conviction-supervision/overview-probation-and-supervised-release-conditions/chapter-3-polygraph-sex-offender-management-probation-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal supervision guidance on polygraph use for sex-offender
            management
          </a>
        </li>
        <li>
          Florida Senate —{" "}
          <a
            className={linkCls}
            href="https://www.flsenate.gov/Laws/Statutes/2025/0948.30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Florida Statutes section 948.30
          </a>
        </li>
        <li>
          U.S. Courts —{" "}
          <a
            className={linkCls}
            href="https://www.uscourts.gov/appendix-sample-special-condition-language-probation-and-supervised-release-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            sample special-condition language for probation and supervised
            release
          </a>
        </li>
        <li>
          UK Ministry of Justice —{" "}
          <a
            className={linkCls}
            href="https://www.gov.uk/government/news/more-sex-offenders-given-chemical-suppressants"
            target="_blank"
            rel="noopener noreferrer"
          >
            announcement on expanding access to chemical suppressants
          </a>
        </li>
        <li>
          Council of Europe anti-torture reporting —{" "}
          <a
            className={linkCls}
            href="https://www.echr-cpt.com/2025/03/22/czechia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            report on the committee’s 2024 visit to Czechia
          </a>
        </li>
      </ul>

      <BandHeader title="Related Reading" icon="🔗" />

      <ul className="list-disc pl-6">
        <li>
          <Link className={linkCls} to="/advocacy">
            SOLAR Advocacy &amp; Reform
          </Link>
        </li>
        <li>
          <Link className={linkCls} to="/resources/legislative-tracker">
            Legislative Tracker
          </Link>
        </li>
        <li>
          <Link className={linkCls} to="/resources/state-registry">
            State Registry Overview
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function TheCrimesWeMedicalize(): JSX.Element {
  return (
    <BlogLayout
      title="The Crimes We Medicalize: Castration Laws, Arousal Testing, and the Separate System Built Around Sex Offenses"
      description="Sex-offense policy has normalized chemical castration, penile arousal testing, and treatment polygraphs as “public safety.” SOLAR asks why one class of conviction is subjected to a separate bodily-surveillance regime."
      keywords="sex offense treatment polygraph, chemical castration laws, penile plethysmograph, arousal testing, surgical castration Louisiana, sex offender treatment, supervised release conditions, bodily autonomy, sex offense supervision, RECON, unequal accountability"
      date="Jul 24, 2026"
      readTime="12 min read"
      badge="📝 BLOG"
      lede="Sex-offense policy has normalized chemical castration, genital arousal testing, and treatment polygraphs as “public safety.” The question is why one class of conviction is subjected to a bodily-surveillance regime that would shock the public almost anywhere else."
    >
      <article className="prose prose-slate max-w-none">
        <ArticlePartOne />
        <ArticlePartTwo />
        <ArticlePartThree />
        <ArticlePartFour />
      </article>
    </BlogLayout>
  );
}