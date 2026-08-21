import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  ContextualActionCard,
  Divider,
  PullQuote,
  TOC,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const supportingHeadingCls =
  "mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "federal-lawmaker",
  primaryPositionId: "one-size-fits-all",
  secondaryPositionId: "inconsistent-danger",
  formatId: "email",
  headline: "Ask Congress to question DOJ’s registration-status presumption",
  description:
    "DOJ says firearm-rights restoration should examine present dangerousness, rehabilitation, passage of time, conduct, character, and individualized circumstances. But its final rule lets continuing sex-offender registration status trigger a continuing presumption against restoration. Readers can ask federal lawmakers to press DOJ for the evidence behind that proxy and to require individualized present-risk assessment instead of circular status-based reasoning.",
  recommendation: {
    audienceLabel: "federal lawmakers with DOJ oversight authority",
    suggestion:
      "Ask them to question why DOJ treats continuing registration status as evidence of present firearm dangerousness while using individualized assessment for many other felony convictions.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please ask DOJ to explain the evidentiary basis for using ongoing sex-offender registration as a continuing proxy for firearm dangerousness, and to revise the restoration process so that passage of time, rehabilitation, subsequent conduct, character, and individualized circumstances are weighed for registered applicants on the same principled basis DOJ applies to other applicants.",
  personalContext:
    "I am writing after reading SOLAR’s analysis of DOJ’s firearm-rights-restoration rule. DOJ has said that people should not be permanently deprived of a constitutional right without regard to whether they currently pose a danger, but the rule appears to treat continuing registration status as a continuing proxy for dangerousness.",
  source: {
    title:
      "Not You: DOJ Discovers Individualized Justice—Except for Registered People",
    path: "/blog/not-you-doj-individualized-justice-registered-people",
    type: "blog",
  },
  jurisdiction: "Federal",
};

export default function NotYouDOJIndividualizedJustice(): JSX.Element {
  return (
    <BlogLayout
      title="Not You: DOJ Discovers Individualized Justice—Except for Registered People"
      description="DOJ’s new firearm-rights-restoration rule embraces individualized present-risk assessment for many people with felony convictions—then treats ongoing sex-offender registration as a proxy for dangerousness."
      keywords="DOJ firearm rights restoration sex offender registration, 18 U.S.C. 925(c), firearm rights restoration, sex offender registration, SORNA tiers, individualized risk assessment, Department of Justice firearm rights rule, registry status, federal firearm disability, sex offense registry reform"
      date="Aug 20, 2026"
      readTime="10–12 min read"
      badge="📝 BLOG"
      lede="DOJ now says a conviction should not permanently answer the question of who someone is today. Then it reaches registered people and lets the registry answer that question for them."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="⚖️">
          <p>
            DOJ’s new firearm-rights-restoration rule embraces individualized
            assessment, rehabilitation, passage of time, subsequent conduct,
            character, and present risk. But for people still required to
            register, DOJ allows registration status itself to trigger a
            continuing presumption against restoration. The result is circular:
            dangerous because registered, registered because dangerous.
          </p>
        </Callout>

        <TOC />

        <p>The United States Department of Justice has discovered rehabilitation.</p>

        <p>
          People change, DOJ now tells us. A criminal conviction is not
          necessarily a permanent diagnosis of dangerousness. Time matters.
          Conduct matters. Character matters. Rehabilitation matters. The
          circumstances of the offense matter. What a person has done since the
          offense matters.
        </p>

        <p>
          And because all of those things matter, the federal government should
          not permanently strip someone of a constitutional right without asking
          whether that person actually remains dangerous.
        </p>

        <p>
          Attorney General Todd Blanche could hardly have stated the principle
          more clearly when DOJ announced its new Federal Firearm Rights
          Restoration program:
        </p>

        <PullQuote>
          <a
            className={linkCls}
            href="https://www.justice.gov/opa/pr/attorney-general-blanche-launches-new-process-restore-federal-firearm-rights"
            target="_blank"
            rel="noopener noreferrer"
          >
            “The Second Amendment is not a second-class right, and the federal
            government should not permanently deprive Americans of a
            constitutional right without regard to whether they pose a danger to
            public safety.”
          </a>
        </PullQuote>

        <p>
          That is not our paraphrase. That is the Attorney General of the United
          States.
        </p>

        <p>
          For people who have spent years arguing that permanent civil
          disabilities should not be imposed on the basis of a conviction alone,
          this sounds almost revolutionary.
        </p>

        <Callout variant="neutral" title="The principle, selectively applied">
          <p>
            <strong>DOJ:</strong> Permanent categorical disabilities are too crude.
            We should individually assess risk and character.
          </p>
          <p>
            <strong>People convicted of sex offenses:</strong> Great. We have been
            saying that for years.
          </p>
          <p>
            <strong>DOJ:</strong> Not you.
          </p>
        </Callout>

        <p>That is, remarkably, what the new rule actually does.</p>

        <p>
          DOJ has articulated a principled case against permanent categorical
          disabilities, built an individualized restoration process around that
          principle, and then carved out the population whose central grievance
          is precisely the denial of individualized assessment.
        </p>

        <p>There is no delicate way to describe that.</p>

        <p>It is blatant hypocrisy.</p>

        <h2 className="sr-only">DOJ discovers individualized justice</h2>
        <BandHeader title="DOJ discovers individualized justice" icon="⚖️" />

        <p>
          For more than three decades, the federal statutory mechanism for
          restoring firearm rights was essentially dormant. Congress had barred
          the Bureau of Alcohol, Tobacco, Firearms and Explosives from spending
          appropriated funds to process individual applications under{" "}
          <a
            className={linkCls}
            href="https://www.law.cornell.edu/uscode/text/18/925"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 U.S.C. § 925(c)
          </a>
          .
        </p>

        <p>The statute itself never disappeared.</p>

        <p>
          It says that a person prohibited from possessing firearms may seek
          relief if the Attorney General is satisfied that the circumstances
          surrounding the disability and the applicant’s “record and reputation”
          demonstrate that the person is unlikely to act dangerously and that
          restoration would not be contrary to the public interest.
        </p>

        <p>
          DOJ has now revived that process.
        </p>

        <p>And the new system is emphatically individualized.</p>

        <p>
          The Attorney General may examine an applicant’s complete criminal
          history, the seriousness of the underlying conduct, even conduct
          associated with charges dismissed as part of a plea agreement.{" "}
          <a
            className={linkCls}
            href="https://www.federalregister.gov/documents/2026/08/20/2026-16981/application-for-relief-from-disabilities-imposed-by-federal-laws-with-respect-to-the-acquisition"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOJ can examine behavior during incarceration and supervision
          </a>
          , the amount of time that has passed since completion of the sentence,
          behavior during that period, substance use, threats, mental health,
          information from local law enforcement and, finally, “other relevant
          individual circumstances.”
        </p>

        <p>
          Applicants must provide court records, plea agreements where
          applicable, factual bases, presentence reports, criminal records
          covering as much as 25 years, fingerprints and character references.
        </p>

        <p>In other words, DOJ does not want a label.</p>

        <p>It wants the person.</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>What happened?</p>
          <p>What did you actually do?</p>
          <p>What has happened since?</p>
          <p>How did you behave in prison?</p>
          <p>How did you behave on supervision?</p>
          <p>How many years have passed?</p>
          <p>What does your recent record show?</p>
          <p>What do people who know you say about your character?</p>
          <p>Are you dangerous now?</p>
        </div>

        <p>This is the language of individualized justice.</p>

        <p>
          It is also the language that people affected by sex-offense
          registration laws have been demanding for years.
        </p>

        <h2 className={supportingHeadingCls}>
          The government understands that a conviction is not a person
        </h2>

        <p>
          The philosophical premise behind the new rule deserves attention
          because it is fundamentally sound.
        </p>

        <p>
          DOJ expressly rejects the idea that someone who was once lawfully
          disarmed must therefore remain forever outside the protection of the
          Second Amendment.
        </p>

        <p>
          Responding to comments arguing that people with felony convictions
          simply fall outside the Amendment’s protection, DOJ answered that all
          citizens enjoy Second Amendment protection consistent with
          constitutional precedent. A person’s conduct may justify disarmament
          under certain circumstances, DOJ explained, but that does not mean
          government must treat that person as “permanently and entirely outside
          the scope” of the constitutional right.
        </p>

        <p>Read that again.</p>

        <p>A person’s past conduct may justify a restriction.</p>

        <p>But the past does not necessarily define the person permanently.</p>

        <p>
          DOJ even emphasizes that its restoration process goes beyond what
          courts have required because, in appropriate cases, it permits “an
          individualized assessment of a person’s fitness to exercise Second
          Amendment rights” instead of relying exclusively on categorical rules.
        </p>

        <p>That is the federal government making the argument.</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>Not SOLAR.</p>
          <p>Not a civil-rights organization.</p>
          <p>Not a defense attorney.</p>
          <p>The Department of Justice.</p>
        </div>

        <p>And then DOJ gets to registered people.</p>

        <h2 className="sr-only">Not you</h2>
        <BandHeader title="Not you" icon="🚫" />

        <p>The new regulation establishes several levels of presumptive disqualification.</p>

        <p>
          Some extremely serious offenses create a continuing presumption that
          can be overcome only through “extraordinary circumstances.” They
          include homicide, rape or sexual assault, kidnapping, domestic
          violence, robbery, carjacking, terrorism and other violent conduct.
          The same continuing presumption applies when someone used or fired a
          gun or used an explosive while committing a qualifying felony.
        </p>

        <p>Other serious offenses are treated differently.</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>Drug trafficking gets a ten-year presumption.</p>
          <p>So do threats of violence.</p>
          <p>So do manufacture, possession, transfer or use of explosives.</p>
          <p>So does certain firearm-related conduct.</p>
        </div>

        <p>
          After ten years from completion of the sentence, those categorical
          presumptions expire and DOJ may undertake the ordinary individualized
          inquiry. Most other qualifying felony convictions receive a five-year
          presumptive period.
        </p>

        <p>Then there is sex-offender registration.</p>

        <p>
          A person who remains required to register under{" "}
          <a
            className={linkCls}
            href="https://www.law.cornell.edu/uscode/text/34/20911"
            target="_blank"
            rel="noopener noreferrer"
          >
            SORNA
          </a>{" "}
          or a comparable registration law because of the offense that created
          the federal firearm disability remains presumptively disqualified and
          must demonstrate “extraordinary circumstances.”
        </p>

        <p>There is no independent five-year expiration.</p>

        <p>There is no independent ten-year expiration.</p>

        <p>The presumption lasts as long as the registration obligation does.</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>That may mean ten years.</p>
          <p>It may mean twenty-five years.</p>
          <p>
            It may mean{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/34/20915"
              target="_blank"
              rel="noopener noreferrer"
            >
              life
            </a>
            .
          </p>
        </div>

        <p>
          And unlike the individualized firearms-restoration process DOJ just
          constructed, the duration of that registration obligation generally
          was not produced by a contemporary determination that this particular
          person remains dangerous.
        </p>

        <p>It was produced by a statute.</p>

        <h2 className="sr-only">The circularity is breathtaking</h2>
        <BandHeader title="The circularity is breathtaking" icon="🔄" />

        <p>Here is the problem in its simplest form:</p>

        <p>DOJ treats him as dangerous because he is still registered.</p>

        <p>
          He is still registered because the government classifies people with
          his past offense as dangerous.
        </p>

        <p>That is the circle.</p>

        <Callout variant="warning" title="The circular logic">
          <p>
            The government first creates the label because it assumes danger,
            then later cites the label as proof of the danger it originally
            assumed.
          </p>
        </Callout>

        <p>Nothing new has been established.</p>

        <p>No fresh finding of dangerousness has entered the equation.</p>

        <p>
          The person may have completed his sentence years ago. He may have
          lived without another offense for ten, fifteen, or twenty years. He
          may have an exemplary supervision history, strong character
          references, stable employment, family support, and every other marker
          DOJ says matters when evaluating other people with felony convictions.
        </p>

        <p>For them, those facts can change the answer.</p>

        <p>
          For him, the registry can answer the question before those facts are
          ever allowed to carry the same weight.
        </p>

        <p>That is what makes the new policy so revealing.</p>

        <p>
          DOJ has just built an entire restoration process around the proposition
          that past conduct should not permanently substitute for present risk.
        </p>

        <p>But registration does exactly that.</p>

        <p>The original offense creates the registration status.</p>

        <p>
          The registration status is then treated as evidence of present
          dangerousness.
        </p>

        <p>
          And that supposed dangerousness becomes the justification for
          withholding the ordinary individualized assessment DOJ says is
          necessary to determine whether someone is actually dangerous.
        </p>

        <PullQuote>Dangerous because registered. Registered because dangerous.</PullQuote>

        <p>The registry becomes both the premise and the proof.</p>

        <p>That is not individualized risk assessment.</p>

        <p>It is a government-created presumption validating itself.</p>

        <p>And DOJ cannot claim nobody pointed this out.</p>

        <p>They did.</p>

        <h2 className={supportingHeadingCls}>DOJ was warned about exactly this problem</h2>

        <p>
          During the rulemaking process, commenters specifically objected to
          using registration status as a presumptive disqualifier.
        </p>

        <p>
          They told DOJ that sex-offender registration does not constitute an
          “assessment of ongoing dangerousness.” They argued that it instead
          creates continuing status from past conduct. They challenged the
          assumption that registration duration reflects actual individual risk
          and asked DOJ to replace the continuing presumption with a time-limited
          one.
        </p>

        <p>The comments went directly to the contradiction.</p>

        <p>
          SORNA, they argued, “does not reflect actual individual risk, public
          threat, or recidivism likelihood.” It uses offense classifications
          rather than the particular facts and circumstances of the individual
          person.
        </p>

        <p>
          That is almost exactly the problem DOJ’s own firearms-restoration
          program is supposed to solve.
        </p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>DOJ heard the argument.</p>
          <p>DOJ understood the argument.</p>
          <p>DOJ rejected it.</p>
        </div>

        <p>
          And the government’s explanation may be even more revealing than the
          rule itself.
        </p>

        <h2 className={supportingHeadingCls}>DOJ pretends the registry is a risk assessment</h2>

        <p>
          According to DOJ,{" "}
          <a
            className={linkCls}
            href="https://www.federalregister.gov/documents/2026/08/20/2026-16981/application-for-relief-from-disabilities-imposed-by-federal-laws-with-respect-to-the-acquisition"
            target="_blank"
            rel="noopener noreferrer"
          >
            SORNA’s tier system adequately answers the concern
          </a>{" "}
          because longer registration periods are attached to offenses the
          government considers more serious.
        </p>

        <p>
          DOJ wrote that people with “less dangerous offenses” will be removed
          from registration sooner and that SORNA is therefore “properly
          calibrated to retain the most dangerous offenders on the registry for
          longer periods.”
        </p>

        <p>That statement is extraordinary.</p>

        <p>SORNA is an offense-based classification system.</p>

        <p>It is not an individualized actuarial risk assessment.</p>

        <p>
          A Tier III designation does not ordinarily mean that a clinician
          evaluated one person and concluded that he presents a greater current
          risk than a Tier I registrant.
        </p>

        <p>
          It does not mean that a probation officer revisited the person’s
          circumstances ten years later.
        </p>

        <p>
          It does not mean a contemporary Static-99R, STABLE-2007, CPORT or
          other validated risk instrument found him unusually dangerous.
        </p>

        <p>
          It means that Congress assigned a particular offense to a particular
          statutory tier.
        </p>

        <p>
          DOJ has therefore taken a historical offense classification, converted
          it into a registration status, and then converted that registration
          status back into evidence of current dangerousness.
        </p>

        <p>The circularity could hardly be cleaner.</p>

        <p>
          DOJ built a firearm-restoration process specifically because the
          offense alone does not always answer the present-risk question.
        </p>

        <p>
          Then DOJ defended excluding registered people by pointing to another
          classification system built substantially from the offense alone.
        </p>

        <Divider />

        <h2 className="sr-only">Apparently ten years can transform a drug trafficker</h2>
        <BandHeader
          title="Apparently ten years can transform a drug trafficker"
          icon="⏳"
        />

        <p>The contrast with drug trafficking makes the hypocrisy impossible to ignore.</p>

        <p>
          Under the new rule, a person convicted of manufacturing, importing,
          distributing or dispensing controlled substances—or possessing them
          with intent to do so—faces a ten-year presumptive barrier after
          completing the sentence.
        </p>

        <p>After that period, the special presumption expires.</p>

        <p>The government can then ask who that person is today.</p>

        <p>This is not because DOJ thinks drug trafficking is harmless.</p>

        <p>It obviously does not.</p>

        <p>The rule simply recognizes that time and subsequent conduct matter.</p>

        <p>
          A person can commit a serious felony, complete a substantial sentence,
          spend years living lawfully, and eventually deserve a new assessment
          rather than a permanent assumption.
        </p>

        <p>That is rehabilitation.</p>

        <p>
          The same rule extends similar logic even to certain firearm and
          explosives offenses.
        </p>

        <p>
          The government understands perfectly well that serious criminal
          categories contain individuals with very different histories,
          circumstances and present risk.
        </p>

        <p>
          But for a registered person, an old nonviolent, non-coercive,
          noncontact, online-only sex offense by the defendant—such as simple
          possession of illegal sexual images—can continue supplying the
          presumption for as long as a registration statute keeps the label
          attached.
        </p>

        <p>
          That does not minimize the harm represented in the illegal material.
          It distinguishes that hypothetical applicant’s conduct from offenses
          involving physical violence, coercion, threats, firearm use, or
          contact offending by the defendant when DOJ is supposedly assessing
          firearm dangerousness.
        </p>

        <p>Imagine the comparison.</p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Callout variant="neutral" title="Drug trafficking">
            <p>
              One person participated in a serious drug-trafficking operation.
              Weapons may have been present. Associates may have used violence. A
              gun charge may never have resulted in conviction. Ten years after
              sentence completion, DOJ is prepared to examine the actual person:
              his criminal history, his conduct, his character, his prison
              record, his supervision history and his intervening years.
            </p>
          </Callout>

          <Callout variant="policy" title="Continuing registration">
            <p>
              Another person was convicted of simple possession arising from
              nonviolent, non-coercive, noncontact, online-only conduct by the
              defendant. No firearm was involved. No threat was involved. No
              physical contact occurred. No coercion was alleged. Twenty years
              later, he has no subsequent convictions and an exemplary record.
            </p>
            <p>But he lives in a jurisdiction requiring him to remain registered.</p>
          </Callout>
        </div>

        <p>DOJ’s answer is not:</p>

        <p>Let’s determine what risk this person actually presents today.</p>

        <p>It is:</p>

        <p>
          He is still registered. Therefore he begins with a presumption against
          restoration.
        </p>

        <p>
          The distinction is not based on a contemporary finding that he is more
          dangerous than the drug trafficker.
        </p>

        <p>It is based on the continued existence of the label.</p>

        <p>
          That is not a coherent application of the principle DOJ just
          announced.
        </p>

        <p>It is a population-specific exception to it.</p>

        <h2 className={supportingHeadingCls}>DOJ already knows how to look behind labels</h2>

        <p>
          The inconsistency becomes even more difficult to excuse when we look
          elsewhere within the same Department of Justice.
        </p>

        <p>
          The Federal Bureau of Prisons issued a new{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/policy/progstat/5162_006-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Categorization of Offenses Program Statement
          </a>{" "}
          in March 2026.
        </p>

        <p>
          That policy distinguishes formal “crimes of violence” from other
          offenses that may nevertheless affect eligibility for particular
          programs. BOP can examine underlying conduct, sentencing enhancements
          and presentence reports instead of pretending the title of a
          conviction tells the whole story.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/pattern.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            PATTERN
          </a>
          —the federal risk-assessment system used by BOP—has its own separate
          list of offenses used for the “instant violent offense” variable.
        </p>

        <p>These systems are not identical, and they serve different legal purposes.</p>

        <p>That is precisely the point.</p>

        <p>The federal government is perfectly capable of distinguishing among:</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>a sex offense,</p>
          <p>a violent offense,</p>
          <p>a firearm offense,</p>
          <p>the actual conduct underlying a conviction,</p>
          <p>and an individualized risk determination.</p>
        </div>

        <p>
          Indeed, the current BOP Program Statement expressly lists § 2251 and
          § 2251A in its relevant crime-of-violence categorization while{" "}
          <a
            className={linkCls}
            href="https://www.law.cornell.edu/uscode/text/18/2252"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252
          </a>{" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.law.cornell.edu/uscode/text/18/2252A"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252A
          </a>{" "}
          are not included there.
        </p>

        <p>
          The separate published{" "}
          <a
            className={linkCls}
            href="https://www.bop.gov/inmates/fsa/docs/fsa_pattern_violent_offense_codes.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            PATTERN violent-offense range
          </a>{" "}
          reaches “2251–2252,” which under ordinary statutory citation
          convention encompasses § 2251, § 2251A and § 2252, but stops before
          § 2252A.
        </p>

        <p>So a person convicted under § 2252A can occupy a remarkable position:</p>

        <p>
          His offense is not listed as a crime of violence in that new BOP
          categorization.
        </p>

        <p>
          It is not included in the published PATTERN instant-violent-offense
          statutory range.
        </p>

        <p>
          Yet if that conviction produces an ongoing registration obligation,
          the firearms-restoration rule can treat the registration status itself
          as sufficient to trigger a continuing presumption against restoration.
        </p>

        <p>
          The government does not arrive there because it has already
          established that every such offense is violent.
        </p>

        <p>The registration label is independently doing the work.</p>

        <h2 className={supportingHeadingCls}>Sexual recidivism is not firearm dangerousness</h2>

        <p>
          DOJ also responded to commenters who argued that some registered
          populations have very low recidivism rates.
        </p>

        <p>
          Rather than seriously engaging the breadth of modern risk literature,
          DOJ complained that commenters had not supplied the studies they
          referenced and cited a 2015 SMART Office research brief warning that
          short follow-up periods can understate sexual recidivism.
        </p>

        <p>
          That is an astonishingly thin answer to the question DOJ actually has
          to answer.
        </p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>Suppose we grant DOJ every benefit of the doubt.</p>
          <p>Suppose some studies underestimate sexual recidivism.</p>
          <p>Suppose longer follow-up produces higher cumulative rates.</p>
          <p>Suppose sexual offending presents unique measurement difficulties.</p>
        </div>

        <p>None of that establishes the proposition that matters here:</p>

        <p>Does this individual present an elevated risk of dangerous firearm use?</p>

        <p>
          Sexual recidivism risk and firearm-violence risk are not
          interchangeable concepts.
        </p>

        <p>
          Someone may present an elevated risk of one without presenting an
          elevated risk of the other.
        </p>

        <p>Someone may present a low risk of both.</p>

        <p>
          Someone may present a high risk of firearm violence despite having no
          history of sexual offending whatsoever.
        </p>

        <p>That is why individualized assessment exists.</p>

        <p>
          Yet DOJ invokes generalized discussion of sexual recidivism to defend
          a firearms presumption while simultaneously proclaiming that the whole
          purpose of its new process is to determine whether the particular
          applicant is likely to act in a manner dangerous to public safety.
        </p>

        <p>Again:</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>Individualized assessment when DOJ wants it.</p>
          <p>Categorical inference when the population changes.</p>
        </div>

        <Divider />

        <h2 className="sr-only">The registry becomes evidence of itself</h2>
        <BandHeader title="The registry becomes evidence of itself" icon="♻️" />

        <p>This has implications far beyond guns.</p>

        <p>
          For decades, governments have defended sex-offense registration by
          insisting that registration is not additional punishment. It is
          regulatory. It exists because government has identified a public-safety
          concern.
        </p>

        <p>
          Now another government program points to the existence of that
          regulation and says, effectively:
        </p>

        <p>See? This person must still be dangerous. Look how heavily we regulate him.</p>

        <p>
          The government first creates the label because it assumes danger, then
          later cites the label as proof of the danger it originally assumed.
        </p>

        <p>The regulatory burden becomes evidence supporting another regulatory burden.</p>

        <p>That is how a categorical system becomes self-validating.</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>The government assigns a person a status because of an old conviction.</p>
          <p>The status produces years or decades of restrictions.</p>
          <p>Other agencies encounter the status.</p>
          <p>They interpret the existence of the status as evidence of present risk.</p>
          <p>That perceived risk justifies additional restrictions.</p>
        </div>

        <p>
          Then those additional restrictions become further evidence that this
          must indeed be an extraordinarily dangerous population.
        </p>

        <p>
          At no point does anyone have to return to the original empirical
          question:
        </p>

        <p>What risk does this person actually present today?</p>

        <p>
          That is precisely the question DOJ insists must be asked when
          restoring firearm rights to other people with felony convictions.
        </p>

        <h2 className={supportingHeadingCls}>We are not arguing that everyone should have a gun</h2>

        <p>
          This article does not require anyone to believe that every person
          convicted of a crime should possess firearms.
        </p>

        <p>It does not require agreement about the Second Amendment.</p>

        <p>It does not require opposition to every presumptive disqualifier.</p>

        <p>
          DOJ may reasonably conclude that particular histories involving
          homicide, armed robbery, domestic violence, firearm misuse or other
          conduct justify unusually demanding scrutiny.
        </p>

        <p>That is not the issue.</p>

        <p>The issue is whether the principle DOJ has just announced means anything.</p>

        <p>
          If past criminal conduct does not necessarily establish present
          dangerousness, that principle does not magically become false when the
          words sex offender appear.
        </p>

        <p>
          If ten or twenty years of lawful conduct can demonstrate
          rehabilitation, those years do not lose their evidentiary value
          because a legislature assigned someone a twenty-five-year registration
          term.
        </p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>If character matters, it matters.</p>
          <p>If conduct matters, it matters.</p>
          <p>If time matters, it matters.</p>
          <p>If individualized circumstances matter, they matter.</p>
        </div>

        <p>
          And if registration status itself accurately establishes present
          dangerousness, DOJ should prove that proposition rather than treating
          the existence of the registry as proof of the assumptions that created
          it.
        </p>

        <h2 className="sr-only">The hypocrisy is the point</h2>
        <BandHeader title="The hypocrisy is the point" icon="⚠️" />

        <p>The hypocrisy here is not subtle.</p>

        <p>
          DOJ has announced that the federal government should not permanently
          strip people of a constitutional right without considering whether
          they actually remain dangerous.
        </p>

        <p>
          It has created a process capable of examining decades of criminal
          history, prison behavior, supervision performance, dismissed charges,
          substance use, mental health, law-enforcement information, character
          references and “other relevant individual circumstances.”
        </p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>It recognizes that drug traffickers can change.</p>
          <p>It recognizes that people convicted of firearm offenses can change.</p>
          <p>It recognizes that people convicted of serious felonies can change.</p>
          <p>It recognizes that time without additional crime tells us something.</p>
          <p>It recognizes that the statute of conviction is not always enough.</p>
          <p>It recognizes that categorical exclusion can be too crude.</p>
        </div>

        <p>
          It even tells courts and commenters that past conduct may justify
          disarmament without placing a person “permanently and entirely
          outside” the right, and that individualized assessment may be
          appropriate even when categorical disarmament would be legally
          available.
        </p>

        <p>
          Then DOJ reaches sex-offender registration and defends a continuing
          presumption by insisting that SORNA is calibrated to keep the “most
          dangerous offenders” registered for longer periods.
        </p>

        <p>That is the hypocrisy in its clearest form.</p>

        <p>Individualized present-risk assessment for favored categories.</p>

        <p>
          A government-created danger label treated as proof of danger for
          registered people.
        </p>

        <p>And then it reaches the population that has spent years saying:</p>

        <div className="my-6 space-y-1 [&>p]:my-0">
          <p>Please stop treating our past conviction as a permanent diagnosis.</p>
          <p>Please assess actual risk.</p>
          <p>Please distinguish offense categories from individual people.</p>
          <p>Please consider rehabilitation.</p>
          <p>Please consider the passage of time.</p>
          <p>Please stop assuming a legal label itself proves present dangerousness.</p>
        </div>

        <p>The Department of Justice has finally answered:</p>

        <p>Those are excellent principles.</p>

        <p>For everyone else.</p>

        <p>
          The federal government has now embraced the proposition that a
          conviction should not permanently answer the question of who someone
          is today.
        </p>

        <p>
          It simply has not decided that the proposition applies to everyone.
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            U.S. Department of Justice —{" "}
            <a
              className={linkCls}
              href="https://www.justice.gov/opa/pr/attorney-general-blanche-launches-new-process-restore-federal-firearm-rights"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ’s announcement of the Federal Firearm Rights Restoration
              program
            </a>
          </li>
          <li>
            Federal Register —{" "}
            <a
              className={linkCls}
              href="https://www.federalregister.gov/documents/2026/08/20/2026-16981/application-for-relief-from-disabilities-imposed-by-federal-laws-with-respect-to-the-acquisition"
              target="_blank"
              rel="noopener noreferrer"
            >
              the final DOJ firearm-rights-restoration rule
            </a>
          </li>
          <li>
            Legal Information Institute —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/18/925"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 U.S.C. § 925(c)
            </a>
          </li>
          <li>
            Legal Information Institute —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/34/20911"
              target="_blank"
              rel="noopener noreferrer"
            >
              SORNA’s tier definitions
            </a>
          </li>
          <li>
            Legal Information Institute —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/34/20915"
              target="_blank"
              rel="noopener noreferrer"
            >
              SORNA’s registration durations
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/policy/progstat/5162_006-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP Program Statement 5162.06
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/fsa/pattern.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOP’s PATTERN information page
            </a>
          </li>
          <li>
            Federal Bureau of Prisons —{" "}
            <a
              className={linkCls}
              href="https://www.bop.gov/inmates/fsa/docs/fsa_pattern_violent_offense_codes.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              PATTERN violent-offense-code list
            </a>
          </li>
          <li>
            Legal Information Institute —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/18/2252"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 U.S.C. § 2252
            </a>
          </li>
          <li>
            Legal Information Institute —{" "}
            <a
              className={linkCls}
              href="https://www.law.cornell.edu/uscode/text/18/2252A"
              target="_blank"
              rel="noopener noreferrer"
            >
              18 U.S.C. § 2252A
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/register-every-crime-or-none">
              Register Every Crime or None: The RECON Test for Public Registries
            </Link>
          </li>
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
              SOLAR’s advocacy framework
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/state-registry">
              state registry overview pages
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-tracker">
              SOLAR’s Legislative Tracker
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog">
              related SOLAR analysis
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}