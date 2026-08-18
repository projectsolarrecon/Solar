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
  primaryPositionId: "closer-to-home",
  secondaryPositionId: "one-size-fits-all",
  formatId: "letter-to-editor",
  headline: "Look beyond the stranger-danger frame",
  description:
    "The Caruso allegations illustrate a prevention problem larger than one pending criminal case: serious sexual harm can arise through family relationships, trust, authority, familiarity, and access that already exists. Public discussion should reflect what research shows about those pathways rather than treating a registry map or a stereotyped dangerous outsider as a complete model of risk.",
  recommendation: {
    audienceLabel:
      "journalists, columnists, and editorial boards covering child safety and criminal justice",
    suggestion:
      "Ask media professionals to examine whether their coverage reinforces stranger-danger stereotypes or treats “sex offender” as a self-explanatory human type, and encourage reporting that distinguishes statutory classification from individualized conduct and risk while giving greater attention to trusted access and prevention.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Ask journalists and editorial boards to frame sexual-harm prevention around how abuse actually occurs—including the role of trust, familiarity, authority, and existing access—rather than allowing public discussion to default to the image of a dangerous stranger or to treat the legal phrase “sex offender” as a complete description of a person’s culpability, mechanism of offending, treatment need, or prospective risk.",
  personalContext:
    "I am writing after reading SOLAR’s analysis of the Michael Caruso case and the research it cites on victim-offender relationships, trusted access, individualized risk, and the limitations of treating registry status or geographic proximity as a complete model of sexual-harm prevention.",
  source: {
    title: "What Does a Sex Offender Look Like?",
    path: "/blog/what-does-a-sex-offender-look-like",
    type: "blog",
  },
};

export default function WhatDoesASexOffenderLookLike(): JSX.Element {
  return (
    <BlogLayout
      title="What Does a Sex Offender Look Like?"
      description="Michael Caruso’s reported claim that he could not be a “sex offender” exposes a deeper problem: treating a legal classification as a human identity can distort both justice and prevention."
      keywords="sex offender stereotype, sex offender label, stranger danger, trusted access, sexual offense registry, individualized risk assessment, sex offender risk, Michael Caruso, sexual abuse prevention"
      date="Aug 18, 2026"
      readTime="11–12 min read"
      badge="📝 BLOG"
      lede="A Florida public official reportedly argued that he could not be a “sex offender” because he was not the kind of person he imagined that label described. The deeper problem is how often public policy makes the same mistake in reverse."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="🔎">
          <p>
            “Sex offender” is a legal classification, not a diagnosis or a
            coherent human type. Michael Caruso’s reported reasoning exposes how
            stereotypes can obscure both individualized risk after conviction and
            the trusted relationships through which sexual harm often occurs
            before anyone is ever on a registry.
          </p>
        </Callout>

        <p>
          In February 2026, months before Palm Beach County Clerk of the Circuit
          Court and Comptroller Michael Caruso was arrested, law enforcement
          arranged for a conversation with him to be recorded.
        </p>

        <p>
          According to{" "}
          <a
            className={linkCls}
            href="https://www.flgov.com/eog/sites/default/files/shared/2026/08/EO_26-170_Caruso_Suspension_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            the arrest affidavit incorporated into Gov. Ron DeSantis’s suspension
            order
          </a>
          , Caruso argued that the accusations against him were “impossible.” His
          reasoning, as investigators summarized it, was that sexual deviation is
          directed toward one sex and that because he was attracted to women, he
          therefore could not be a sex offender. The affidavit also records
          another statement attributed to him: that if the matter were reported
          to authorities, there would be little of him left.
        </p>

        <p>That is more revealing than an ordinary denial.</p>

        <p>
          The apparent logic was not simply <em>I did not do this</em>. It was
          something closer to:{" "}
          <em>
            I am attracted to women. I am not sexually deviant in the way I
            understand that term. I am therefore not the kind of person who is a
            sex offender. And because I am not that kind of person, these
            accusations cannot be true.
          </em>
        </p>

        <p>
          Caruso was arrested on August 18 on five felony counts: kidnapping,
          lewd or lascivious molestation, lewd or lascivious exhibition, luring
          or enticing a child, and child abuse causing mental injury. Gov. Ron
          DeSantis immediately suspended him from office. The charges remain
          allegations. There has been no adjudication of guilt, and Caruso is
          entitled to the criminal process.
        </p>

        <p>This article is not an attempt to decide that case.</p>

        <p>It is about the idea contained in that recorded statement.</p>

        <p>
          <strong>
            What, exactly, do Americans think a “sex offender” is? And how much
            public policy has been built around the picture that appears in our
            heads when we hear the noun?
          </strong>
        </p>

        <BandHeader
          title="“Sex offender” sounds like a diagnosis. It isn't."
          icon="⚖️"
        />

        <p>
          In ordinary speech, “sex offender” often sounds as though it names a
          recognizable human type: a person with a particular psychology, a
          particular set of desires, a particular danger profile and perhaps even
          a particular way of moving through the world.
        </p>

        <p>Legally, it does nothing so precise.</p>

        <p>
          In Florida, for example, the term “sexual offender” is defined through{" "}
          <a
            className={linkCls}
            href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.0435.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            statutory criteria tied largely to convictions for qualifying
            offenses and related legal conditions
          </a>
          . Florida then attaches registration duties and public disclosure to
          that classification.
        </p>

        <p>That is a legal category. It is not a clinical diagnosis.</p>

        <p>
          And the conduct that can sit beneath sex-offense labels is remarkably
          heterogeneous. The{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/somapi/chapter-3-sex-offender-typologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justice Department’s SMART Office
          </a>{" "}
          distinguishes among people who abuse children, people convicted of
          rape, people involved in internet-facilitated offending and other
          groups, while warning that even conventional typologies have serious
          limitations and crossover between categories. It notes, among other
          things, that not everyone who sexually abuses a child has pedophilia
          and that online-only and contact offending do not present identical
          patterns of risk.
        </p>

        <p>
          The relevant distinctions are not cosmetic. Conduct may be violent or
          nonviolent, coercive or non-coercive, contact or entirely non-contact.
          It may involve adults or children. A victim may be an acquaintance,
          intimate partner, family member or, very rarely in cases involving
          children, a stranger. Conduct may be isolated or repeated. It may arise
          from different motivations and different combinations of sexual
          interest, antisocial behavior, opportunity, access and other factors.
        </p>

        <p>Different does not mean harmless.</p>

        <p>
          <strong>
            Different means different—and justice has no business pretending
            otherwise.
          </strong>
        </p>

        <PullQuote>
          “Different means different—and justice has no business pretending
          otherwise.”
        </PullQuote>

        <p>
          Those distinctions matter because culpability is individualized.
          Treatment need is individualized. The mechanisms that lead to offending
          can differ. The circumstances that make future offending more or less
          likely can differ. Even the federal government’s{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/somapi/chapter-6-sex-offender-risk-assessment"
            target="_blank"
            rel="noopener noreferrer"
          >
            review of sexual-offense risk assessment
          </a>{" "}
          emphasizes that no single factor adequately predicts future offending
          and that contemporary assessment increasingly combines multiple static
          and dynamic factors rather than relying on a single category or
          intuition.
        </p>

        <p>Yet one noun can make all that complexity disappear.</p>

        <BandHeader
          title="Caruso apparently knew what that person looked like. It wasn't him."
          icon="🪞"
        />

        <p>
          Before August 18, Michael Caruso was not the cultural image most
          Americans have been trained to associate with the phrase “sex
          offender.”
        </p>

        <p>
          He had served in the Florida House beginning in 2018 and continued
          there until his appointment as Palm Beach County Clerk of the Circuit
          Court and Comptroller took effect in August 2025. He was a certified
          public accountant and former business owner. He was a county
          constitutional officer. He was a grandfather. He occupied positions
          carrying professional standing, political legitimacy and public trust.
        </p>

        <p>None of that establishes innocence.</p>

        <p>That is precisely the point.</p>

        <p>
          The imagined sex offender is frequently an outsider. Someone socially
          marginal. Someone visibly suspect. Someone parents would know to keep
          away from their children.
        </p>

        <p>Caruso represented almost the reverse of that picture.</p>

        <p>
          If the affidavit accurately describes his thinking, he appears to have
          looked at his own identity—heterosexual man, public official,
          grandfather, established professional—and treated those characteristics
          as evidence that he could not belong to the category he associated with
          sexual offending.
        </p>

        <p>But respectable biography is not a risk assessment.</p>

        <p>Neither is marginality.</p>

        <p>
          Neither is political affiliation, profession, family status, sexuality,
          wealth, dress, neighborhood, church membership or public reputation.
        </p>

        <p>The question is what a person does.</p>

        <p>That sounds obvious. Our language suggests that it is not.</p>

        <BandHeader
          title="Trust was not incidental. It was allegedly the pathway."
          icon="🔑"
        />

        <p>
          The most important feature of the allegations may not be their location
          or even their severity. It may be the architecture of access.
        </p>

        <p>
          According to the affidavit, the child was Caruso’s grandson.
          Investigators described incidents during a fishing trip and a family
          cruise. On the cruise, the affidavit says, Caruso separated the child
          from his parents under the stated pretext of taking him for ice cream
          and remained alone with him for at least an hour. The affidavit alleges
          sexual abuse during that period. It also describes other reported
          incidents and a later family confrontation in which Caruso made limited
          admissions about circumstances while denying the central sexual
          allegations.
        </p>

        <p>Look at the structure, not merely the accusation.</p>

        <p>
          There was no unknown man approaching a child at the edge of a
          playground.
        </p>

        <p>The alleged pathway was already built.</p>

        <p>
          Family relationship created familiarity. Grandparent status created
          presumptive legitimacy. Adult authority created control. Family trust
          created access. A shared vacation created opportunity. Existing
          relationships meant that proximity did not have to be engineered by a
          stranger; it came with the role.
        </p>

        <p>
          Professional and political standing need not have caused anyone to
          lower their guard for those qualities to matter culturally.
          Respectability itself is one of the cues by which human beings decide
          whom to trust.
        </p>

        <p>
          That is why “respectable people can also commit crimes” is too weak a
          lesson.
        </p>

        <p>
          The more important lesson is that{" "}
          <strong>
            the characteristics that make someone appear least like the
            stereotypical offender can coexist with—and sometimes help
            sustain—the trust through which access becomes possible.
          </strong>
        </p>

        <p>
          Research on sexual assault makes the broader point difficult to ignore.
          In the{" "}
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics’ analysis of sexual assaults against
            juveniles reported to law enforcement
          </a>
          , almost all identified offenders were known to the victim. Strangers
          accounted for only 7 percent overall, 5 percent for children ages 6
          through 11, and just 3 percent for children younger than six. For the
          youngest children, stranger offending was exceedingly rare compared
          with abuse by people already within the child’s world.
        </p>

        <p>
          This does not mean every trusted adult should be treated as suspicious.
        </p>

        <p>It means trust cannot substitute for safeguarding.</p>

        <BandHeader
          title="Stranger-danger mythology can fail before conviction, too."
          icon="🗺️"
        />

        <p>Registry politics often speaks a geographic language.</p>

        <p>
          Where does this person live? How close is the house to a school? How
          close to a park? Is there a registrant in the neighborhood? Who is
          living within a particular radius of children?
        </p>

        <p>
          That framework has intuitive power because it corresponds to a
          particular story about danger: an identifiable dangerous outsider
          obtaining physical proximity to potential victims.
        </p>

        <p>The allegations against Caruso describe something almost opposite.</p>

        <p>Not stranger access, but trusted access.</p>

        <p>Not intrusion into a family, but membership within one.</p>

        <p>Not social marginality, but credibility.</p>

        <p>
          Not a person who first had to reach the child, but an adult to whom the
          child could already be entrusted.
        </p>

        <p>That distinction matters far beyond this case.</p>

        <p>
          A public registry can tell a parent where certain previously convicted
          people report living. It cannot tell that parent which uncle,
          grandparent, family friend, coach, teacher, clergy member, professional
          or institutional authority who has never been convicted may pose a
          risk. It cannot map secrecy, grooming, family deference, authority,
          opportunity or an adult’s ability to create unsupervised access.
        </p>

        <p>
          And the evidence on geographic controls is far less comforting than
          their intuitive appeal. The Justice Department’s{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies"
            target="_blank"
            rel="noopener noreferrer"
          >
            review of residence-restriction research
          </a>{" "}
          found multiple studies in which living near schools or day-care centers
          did not distinguish recidivists from nonrecidivists or in which
          restrictions did not produce measurable reductions in sexual
          recidivism. One study summarized by the SMART Office found that social
          proximity appeared more consequential than geographic proximity. The
          review also emphasizes limitations in the research rather than
          pretending the evidence is absolute.
        </p>

        <p>
          The same federal review describes the broader evidence on registration
          and notification as mixed: some studies found benefits on certain
          outcomes, while others found no statistically significant effects, with
          methodological limitations complicating sweeping conclusions.
        </p>

        <p>
          That is enough to support a narrower and more important proposition.
        </p>

        <p>
          <strong>
            A map of previously convicted people is not a map of where sexual
            harm originates.
          </strong>
        </p>

        <PullQuote>
          “A map of previously convicted people is not a map of where sexual harm
          originates.”
        </PullQuote>

        <p>
          Confusing the two can distort prevention before anyone is ever
          arrested.
        </p>

        <p>
          A society trained to identify a visible class of dangerous outsiders
          may become very good at looking outward while remaining comparatively
          inattentive to the ordinary mechanisms by which trusted people obtain
          privacy, authority and opportunity.
        </p>

        <BandHeader
          title="He had every institutional reason to understand what a label can do."
          icon="🏛️"
        />

        <p>
          There is another reason Caruso’s reported statement is unusually
          revealing.
        </p>

        <p>He was not institutionally naïve.</p>

        <p>
          A Florida clerk of the circuit court does not adjudicate criminal
          guilt. Caruso was not a judge. But the office he headed sits
          extraordinarily close to the machinery by which accusations become
          cases and cases become durable public records.{" "}
          <a
            className={linkCls}
            href="https://www.flclerks.com/page/RoleoftheClerk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Florida court clerks maintain and manage access to court records
          </a>
          , and Palm Beach County’s clerk system includes public access to
          criminal, civil and other court files.
        </p>

        <p>
          Caruso had also spent roughly seven years in the Florida Legislature
          before becoming clerk.{" "}
          <a
            className={linkCls}
            href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-appoints-mike-caruso-palm-beach-county-clerk-circuit-court"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gov. DeSantis’s appointment announcement
          </a>{" "}
          itself recounted his legislative service from 2018 through 2025.
        </p>

        <p>
          It would therefore be remarkable if a longtime Florida lawmaker and
          sitting county clerk were wholly unfamiliar with the fact that criminal
          labels acquire lives far beyond the moment a charge or sentence is
          imposed.
        </p>

        <p>That is especially true in Florida.</p>

        <p>
          The state maintains a{" "}
          <a
            className={linkCls}
            href="https://offender.fdle.state.fl.us/offender/sops/offenderSearch.jsf"
            target="_blank"
            rel="noopener noreferrer"
          >
            publicly searchable sexual-offender and predator system
          </a>
          . Florida law requires extensive registration information, and current
          FDLE materials describe lifetime registration requirements for sexual
          offenders and predators along with registration of home and work
          addresses and other identifying information.
        </p>

        <p>
          We cannot know from his job titles what Caruso personally understood
          about every consequence of Florida registration law. We should not
          pretend we can.
        </p>

        <p>
          But his positions placed him unusually close to systems in which names,
          charges, judgments, records and classifications matter enormously.
        </p>

        <p>
          That leaves at least two plausible ways to understand the logic
          attributed to him.
        </p>

        <p>
          Perhaps he sincerely thought in categorical terms:{" "}
          <em>people like me are not sex offenders.</em>
        </p>

        <p>
          Or perhaps this was defensive reasoning from someone who understood, at
          least generally, how catastrophic acquiring that identity could become:{" "}
          <em>whatever happened, I cannot be that.</em>
        </p>

        <p>We do not need to choose between those explanations.</p>

        <p>Either reveals the enormous social force carried by the noun.</p>

        <BandHeader
          title="Then the state performs the categorical trick in reverse."
          icon="↔️"
        />

        <p>
          This is where the case becomes more than a story about one man’s
          strange reported defense.
        </p>

        <p>Caruso’s apparent logic moved from identity to conduct:</p>

        <p>
          <strong>
            I am not that kind of person, therefore I could not have committed
            that kind of act.
          </strong>
        </p>

        <p>Post-conviction policy can perform the same error in reverse:</p>

        <p>
          <strong>
            You committed qualifying conduct, therefore you permanently are that
            kind of person.
          </strong>
        </p>

        <p>
          The first substitutes an imagined identity for evidence about what
          happened.
        </p>

        <p>
          The second can substitute a statutory identity for individualized
          evidence about what the person is like now, what produced the conduct,
          what treatment is needed and what future risk the person actually
          presents.
        </p>

        <p>Neither follows automatically.</p>

        <p>
          This does not mean past conduct becomes irrelevant the moment a
          sentence ends. Prior behavior can be highly relevant to future risk.
          Some histories are profoundly concerning. Repetition matters.
          Persistent sexual interests can matter. Prior offending matters.
          General criminality can matter. Age and other empirically supported
          factors may matter. The SMART Office’s risk-assessment review is
          emphatic on precisely this point: meaningful prediction requires
          combining relevant factors, not finding a single magical variable.
        </p>

        <p>
          That is why individualized analysis is more serious, not less serious,
          than categorical thinking.
        </p>

        <p>It asks harder questions.</p>

        <BandHeader
          title="The same noun can conceal radically different risk questions."
          icon="🧭"
        />

        <p>
          Consider what disappears when legal and public language reduces a
          person to a single designation.
        </p>

        <p>Repeated coercive hands-on abuse presents one set of questions.</p>

        <p>A wholly non-contact offense presents another.</p>

        <p>
          An offense arising from an established relationship of trust presents
          different prevention issues from an offense involving a stranger.
        </p>

        <p>Persistent patterns differ from isolated conduct.</p>

        <p>
          Image-based offending may involve different mechanisms and risk
          patterns from direct contact abuse, even though crossover exists and
          cannot simply be assumed away. The Justice Department’s own review
          recognizes these differences and reports that online-only groups and
          conventional contact groups do not present identical risk profiles.
        </p>

        <p>
          Adolescent conduct, adult conduct, violent conduct, nonviolent conduct,
          coercive conduct and conduct without the same mechanism of coercion are
          not interchangeable simply because legislatures can place them beneath
          a common statutory umbrella.
        </p>

        <p>This is not offense ranking by moral sentiment.</p>

        <p>It is the basic proposition that different facts raise different questions.</p>

        <p>
          The federal literature on risk assessment exists because researchers
          and practitioners already know that “sex offender” is not a sufficient
          prediction model. The SMART Office describes tools that combine
          multiple factors, notes that dynamic information can identify
          intervention targets, and explicitly recognizes the need to match
          treatment and management efforts to an individual’s risk and
          criminogenic needs rather than apply uniform interventions.
        </p>

        <p>If a noun were enough, none of that work would be necessary.</p>

        <p>
          The allegations against Caruso, as described in the affidavit, involve
          an especially grave constellation: a young family member, alleged
          hands-on sexual abuse, repeated incidents, existing access, isolation
          from other adults and what investigators describe as circumstances
          suggesting the use of trusted authority to obtain opportunity.
        </p>

        <p>
          Another person can enter the broad legal category without sharing
          all—or even many—of those characteristics.
        </p>

        <p>
          The fact that both may ultimately be called the same thing is not proof
          that the category conveys no information.
        </p>

        <p>
          It is proof that the category does not convey <strong>enough</strong>.
        </p>

        <BandHeader
          title="Serious conduct makes this argument stronger, not weaker."
          icon="⚖️"
        />

        <p>
          There is an understandable temptation to hear any discussion of
          heterogeneity as an attempt to minimize sexual harm.
        </p>

        <p>That would be a mistake here.</p>

        <p>
          The conduct described in the Caruso affidavit is grave. The alleged
          victim was a young child within his own family. The accusations
          describe repeated sexual acts and an extraordinary breach of trust.
          Nothing about arguing for individualized justice requires sanding those
          facts down.
        </p>

        <p>The seriousness is exactly why the example matters.</p>

        <p>
          If conduct carrying that collection of characteristics and a wholly
          non-contact, nonviolent offense can ultimately feed into the same broad
          public identity, then the identity itself plainly cannot communicate
          everything we need to know about culpability, mechanism, treatment or
          future danger.
        </p>

        <p>
          A category can carry meaningful information without carrying sufficient
          information.
        </p>

        <p>
          “Murder” tells us someone was convicted of causing a death under a
          particular criminal law. It still does not eliminate the need to know
          intent, circumstances, history and future risk.
        </p>

        <p>
          Yet with sexual offenses, the grammatical move from act to identity has
          become unusually complete.
        </p>

        <p>
          A person does not merely <em>commit a sex offense</em>.
        </p>

        <p>
          He <em>is a sex offender</em>.
        </p>

        <p>The noun quietly swallows the person.</p>

        <PullQuote>“The noun quietly swallows the person.”</PullQuote>

        <BandHeader
          title="Before conviction, details matter. Afterward, the category can swallow them."
          icon="📋"
        />

        <p>Criminal law spends enormous energy distinguishing facts.</p>

        <p>What happened?</p>

        <p>Was there force?</p>

        <p>Was there coercion?</p>

        <p>Was there contact?</p>

        <p>How old were the people involved?</p>

        <p>What was their relationship?</p>

        <p>Was the conduct repeated?</p>

        <p>Was a position of authority exploited?</p>

        <p>What does the evidence establish?</p>

        <p>What mental state did the law require?</p>

        <p>What does the person’s history show?</p>

        <p>
          Those distinctions affect charging, proof, sentencing and treatment.
        </p>

        <p>Then a remarkable thing can happen after conviction.</p>

        <p>
          The justice system that insisted factual distinctions mattered
          enormously can place people into a post-conviction framework where the
          most publicly salient fact becomes a two-word identity:
        </p>

        <p>
          <strong>SEX OFFENDER.</strong>
        </p>

        <p>
          Florida’s registry makes the legal transformation literal. The state
          defines eligibility through qualifying convictions and then makes
          identifying information about people within that category available to
          the public through its registry.
        </p>

        <p>What was once a detailed factual inquiry becomes a searchable noun.</p>

        <p>That is an extraordinary compression of information.</p>

        <p>
          And compression has consequences when policymakers or members of the
          public begin treating the compressed category as though it contains all
          the information that was discarded.
        </p>

        <p>The paradox is difficult to escape:</p>

        <p>
          <strong>
            The justice system can insist that factual distinctions matter
            enormously when determining guilt and punishment, then construct
            post-conviction policy in which many of those distinctions become
            secondary to the category itself.
          </strong>
        </p>

        <BandHeader
          title="Public notification can teach us to watch in the wrong direction."
          icon="👁️"
        />

        <p>
          None of this requires claiming that a person with a prior conviction
          can never pose a future risk.
        </p>

        <p>That would merely replace one categorical fiction with another.</p>

        <p>
          The problem is not that public information contains no useful
          information. It is that the public can be encouraged to mistake one
          particular dataset for a comprehensive model of danger.
        </p>

        <p>
          A registry identifies people who have already passed through a
          qualifying legal process.
        </p>

        <p>
          It does not identify the respected adult who has never been convicted.
        </p>

        <p>
          It does not identify the family member whose access is built into
          everyday life.
        </p>

        <p>
          It does not identify the coach who can create private moments, the
          clergy member protected by reverence, the professional protected by
          status, the family friend protected by familiarity or the institution
          whose reputation discourages uncomfortable questions.
        </p>

        <p>
          The BJS findings are stark enough that they should change how we think
          about prevention, not merely how we describe crime after the fact.
          Among juvenile victims in the study, 93 percent of identified offenders
          were known to the child. For children under six, strangers accounted
          for only 3 percent. The dominant pattern was not an unknown outsider
          crossing into the child’s world. It was someone who was already there.
        </p>

        <p>
          Caruso’s alleged circumstances make that tension unusually visible.
        </p>

        <p>
          The state can tell a parent how far a registrant lives from a school.
        </p>

        <p>
          But no map can tell that parent whether “Grandpa is taking him for ice
          cream” is safe.
        </p>

        <p>
          That kind of safety requires something harder than geographic
          awareness.
        </p>

        <p>It requires families and institutions to think about access.</p>

        <p>About supervision.</p>

        <p>About boundary violations.</p>

        <p>About secrecy.</p>

        <p>About adults who engineer isolation.</p>

        <p>
          About whether status makes questioning someone feel socially
          forbidden.
        </p>

        <p>
          About whether a child has realistic ways to disclose something
          involving a person everyone else trusts.
        </p>

        <p>Public safety fails when we train people only to recognize monsters.</p>

        <BandHeader
          title="Individualized justice requires more verbs and fewer nouns."
          icon="🔬"
        />

        <p>A more serious framework begins with four questions.</p>

        <p>
          <strong>What did the person do?</strong>
        </p>

        <p>
          That is principally a question of culpability and proportional
          punishment. Serious, coercive, violent, repeated or trust-exploiting
          conduct can justify severe consequences. Individualization does not
          imply softness. It implies that severity should attach to reasons.
        </p>

        <p>
          <strong>Why did it happen?</strong>
        </p>

        <p>
          That is a different question. Understanding the mechanism matters to
          treatment and prevention. Sexual interest, antisociality, opportunity,
          compulsive behavior, distorted cognition, access, substance misuse and
          other factors do not operate identically in every case. Federal
          research on typologies and risk repeatedly underscores that people who
          commit sexual offenses do not constitute a single psychologically
          uniform population.
        </p>

        <p>
          <strong>What risk does the person present now?</strong>
        </p>

        <p>
          Past conduct belongs in that inquiry. It does not finish it. Modern
          risk assessment exists precisely to estimate prospective risk using
          combinations of empirically relevant factors, and the SMART Office
          warns that no single characteristic is a robust predictor by itself.
        </p>

        <p>
          <strong>What intervention actually reduces that risk?</strong>
        </p>

        <p>
          That question should determine management, supervision and treatment
          strategy. The federal review explicitly recognizes the need for
          tailored interventions matched to risk and need.
        </p>

        <p>Those are four different questions.</p>

        <p>“Sex offender” cannot answer any of them adequately on its own.</p>

        <p>That is not leniency.</p>

        <p>
          It is classification doing the work classification is supposed to do:
          identifying meaningful differences rather than erasing them.
        </p>

        <BandHeader
          title="What Caruso's alleged access should teach us"
          icon="🛡️"
        />

        <p>The preventive lesson is larger than registry policy.</p>

        <p>Ask what the allegations require us to notice.</p>

        <p>How do trusted adults acquire unsupervised access to children?</p>

        <p>
          How does authority alter the way families interpret concerning
          behavior?
        </p>

        <p>How does professional prestige change the threshold for suspicion?</p>

        <p>When does family loyalty make disclosure harder?</p>

        <p>What happens when adults confuse “known to us” with “safe”?</p>

        <p>What kinds of boundaries should exist even around people we love?</p>

        <p>
          How can children report something involving a person whom everyone else
          respects?
        </p>

        <p>
          Those questions do not offer the emotional simplicity of identifying a
          dangerous class.
        </p>

        <p>
          They are harder because they require us to accept something frightening
          but useful: sexual harm does not reliably announce itself through
          social identity.
        </p>

        <p>
          Sometimes the person posing a risk will look exactly like the person we
          were warned about.
        </p>

        <p>Sometimes he will not.</p>

        <p>
          Sometimes prior convictions will provide relevant warning information.
        </p>

        <p>Sometimes there will be no prior conviction to find.</p>

        <p>Sometimes risk enters from outside.</p>

        <p>Sometimes it is already at the dinner table.</p>

        <p>
          A prevention system worthy of the word <em>prevention</em> has to be
          capable of holding all of those realities at once.
        </p>

        <BandHeader title="The question Caruso accidentally asked" icon="❓" />

        <p>Michael Caruso reportedly thought he knew what a sex offender was.</p>

        <p>That mental picture apparently excluded himself.</p>

        <p>
          If the factual allegations against him ultimately prove accurate, that
          intuition failed catastrophically.
        </p>

        <p>
          But society should resist making the mirror-image mistake after
          conviction.
        </p>

        <p>
          Caruso’s reported reasoning was:{" "}
          <em>
            I cannot be that kind of person, so I could not have done that kind
            of thing.
          </em>
        </p>

        <p>
          Registry culture too easily turns that around:{" "}
          <em>
            You did a qualifying thing, so now we know what kind of person you
            are.
          </em>
        </p>

        <p>Both shortcuts replace inquiry with identity.</p>

        <p>Both invite us to stop asking the questions that matter most.</p>

        <p>What happened?</p>

        <p>How did it happen?</p>

        <p>What made access possible?</p>

        <p>What does the conduct tell us?</p>

        <p>What does it not tell us?</p>

        <p>What risk exists now?</p>

        <p>What intervention is justified?</p>

        <p>What would actually make another victimization less likely?</p>

        <p>
          Sexual harm is real. It can be devastating. Some conduct is
          extraordinarily grave and warrants profound accountability. Precisely
          because the stakes are so high, prevention cannot afford mythology,
          and justice cannot afford categories that masquerade as complete
          explanations.
        </p>

        <p>
          <strong>
            Michael Caruso reportedly believed a sex offender could not look like
            him. Registry policy too often assumes that everyone bearing the
            label must look like one another. Both ideas substitute an imagined
            identity for the harder work of understanding conduct, risk, access
            and human behavior.
          </strong>
        </p>

        <p>
          If public safety is the goal, we should be much more interested in how
          harm actually happens than in whether someone looks like the person we
          were taught to fear.
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            Executive Office of the Governor —{" "}
            <a
              className={linkCls}
              href="https://www.flgov.com/eog/sites/default/files/shared/2026/08/EO_26-170_Caruso_Suspension_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              the arrest affidavit incorporated into Gov. Ron DeSantis’s
              suspension order
            </a>
            . Charges, suspension from office, allegations involving Caruso’s
            grandson, the fishing-trip and cruise allegations, the recorded
            February conversation, and statements attributed to Caruso.
          </li>

          <li>
            WFLX —{" "}
            <a
              className={linkCls}
              href="https://www.wflx.com/2026/08/18/palm-beach-county-clerk-court-michael-caruso-arrested-child-sex-abuse-charges/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WFLX’s reporting on Caruso’s arrest
            </a>
            . Contemporaneous local reporting on the arrest and affidavit
            allegations.
          </li>

          <li>
            Executive Office of the Governor —{" "}
            <a
              className={linkCls}
              href="https://www.flgov.com/eog/news/press/2025/governor-ron-desantis-appoints-mike-caruso-palm-beach-county-clerk-circuit-court"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gov. DeSantis’s 2025 appointment announcement
            </a>
            . Caruso’s appointment, Florida House service, and professional
            background.
          </li>

          <li>
            Florida Legislature —{" "}
            <a
              className={linkCls}
              href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0900-0999/0943/Sections/0943.0435.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Florida’s statutory definition of sexual offender
            </a>
            . Statutory classification and registration framework.
          </li>

          <li>
            Florida Department of Law Enforcement —{" "}
            <a
              className={linkCls}
              href="https://offender.fdle.state.fl.us/offender/sops/offenderSearch.jsf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Florida’s public sexual-offender and predator system
            </a>
            . Public registry search and Florida registration infrastructure.
          </li>

          <li>
            Florida Court Clerks & Comptrollers —{" "}
            <a
              className={linkCls}
              href="https://www.flclerks.com/page/RoleoftheClerk"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Florida clerks’ description of the clerk’s institutional role
            </a>
            . Court clerks’ recordkeeping and administrative role.
          </li>

          <li>
            Bureau of Justice Statistics —{" "}
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics research on sexual assaults of young
              children
            </a>
            . Victim-offender relationships and the prevalence of offenders
            already known to juvenile victims.
          </li>

          <li>
            Bureau of Justice Statistics —{" "}
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/nibrs/reports/sarble/sarble19"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJS’s NIBRS sexual-assault analysis
            </a>
            . Sexual assaults recorded by law enforcement and
            victim-offender-relationship patterns.
          </li>

          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/somapi/chapter-3-sex-offender-typologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Justice Department’s review of sex-offense typologies
            </a>
            . Heterogeneity among offending populations and limitations of
            categorical typologies.
          </li>

          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/somapi/executive-summary"
              target="_blank"
              rel="noopener noreferrer"
            >
              the SMART Office’s SOMAPI executive summary
            </a>
            . Differences in offending patterns, risk, recidivism, and
            characteristics.
          </li>

          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/somapi/chapter-6-sex-offender-risk-assessment"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Justice Department’s review of sexual-reoffense risk assessment
            </a>
            . Static and dynamic risk factors, individualized assessment, and
            intervention targets.
          </li>

          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/somapi/chapter-8-sex-offender-management-strategies"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Justice Department’s review of sex-offender management
              strategies
            </a>
            . Registration and notification research, residence restrictions,
            social versus geographic proximity, and research limitations.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/resources/accountability-watch"
            >
              SOLAR’s Accountability Watch
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">
              SOLAR’s evidence-based approach to public safety and individualized
              policy
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog">
              SOLAR Blog
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}