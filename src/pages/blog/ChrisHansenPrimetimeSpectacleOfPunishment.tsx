import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";
import ContextualActionCard from "../../components/solar/ContextualActionCard";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "journalist",
  primaryPositionId: "ineffective",
  secondaryPositionId: "closer-to-home",
  formatId: "letter-to-editor",
  headline: "Ask media to distinguish punishment spectacle from prevention",
  description:
    "This article argues that public exposure, humiliation, and visibility can feel like child safety without demonstrating that they prevent sexual harm. Coverage of predator-hunter content, sex-offense policy, and Primetime can either reinforce that confusion or ask the harder prevention questions.",
  recommendation: {
    audienceLabel: "a journalist, columnist, editor, or editorial board",
    suggestion:
      "Ask media outlets to distinguish exposure from measurable prevention, examine what outcomes are actually tracked, and include the evidence about trusted access, heterogeneous risk, treatment, and rehabilitation.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "When covering predator-hunter stings, Primetime, or sex-offense policy, please distinguish public exposure from measurable prevention. Ask what outcomes are tracked, include evidence about trusted access and differing risk, and avoid treating humiliation or public visibility as proof of safety.",
  personalContext:
    "I am writing because this article helped me see how easily punishment spectacle can be mistaken for prevention. I want coverage that asks whether an intervention actually reduces harm rather than assuming exposure itself makes children safer.",
  source: {
    title:
      "Why Don’t You Have a Seat? Chris Hansen, Primetime, and the Spectacle of Punishment",
    path: "/blog/chris-hansen-primetime-spectacle-of-punishment",
    type: "blog",
  },
};

export default function ChrisHansenPrimetimeSpectacleOfPunishment(): JSX.Element {
  return (
    <BlogLayout
      title="Why Don’t You Have a Seat? Chris Hansen, Primetime, and the Spectacle of Punishment"
      description="Chris Hansen says A24’s Primetime exploited him—and now acknowledges that people who commit sexual offenses differ, treatment can work, and rehabilitation is possible. SOLAR follows those premises where they lead."
      keywords="Chris Hansen Primetime, To Catch a Predator, CNN predator hunters, spectacle of punishment, A24 Primetime, Robert Pattinson Chris Hansen, predator hunters, child safety theater, public humiliation, rehabilitation, individualized risk, sex offender registry"
      date="Oct 4, 2026"
      readTime="15–17 min read"
      badge="📝 BLOG"
      lede="Chris Hansen says A24’s Primetime exploited him. He also now acknowledges that people who commit sexual offenses differ, treatment can work, and rehabilitation is possible. Those two admissions lead somewhere his registry defense does not."
    >
      <article className="prose prose-slate max-w-none">
        <p>Chris Hansen would like the public to consider context.</p>

        <p>
          That is one of the stranger developments surrounding{" "}
          <a
            className={linkCls}
            href="https://a24films.com/films/primetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Primetime</em>
          </a>
          , A24’s new film starring Robert Pattinson as a fictionalized version of
          the man who became famous walking into kitchens and asking alleged
          would-be child predators to explain themselves on national television.
        </p>

        <p>Hansen does not like what the movie does with his life.</p>

        <p>
          In{" "}
          <a
            className={linkCls}
            href="https://variety.com/2026/film/features/chris-hansen-primetime-ending-a24-legal-action-1236894822/"
            target="_blank"
            rel="noopener noreferrer"
          >
            an interview with <em>Variety</em>
          </a>
          , he objects that <em>Primetime</em> rearranges events, invents motives,
          exaggerates aspects of his personality, borrows his mannerisms, and builds
          a commercial product around a version of Chris Hansen that he says is not
          actually Chris Hansen.
        </p>

        <p>He calls the film exploitative.</p>

        <p>And here is the uncomfortable part.</p>

        <p>He has a point.</p>

        <p>
          There really is something troubling about taking a human being, selecting
          the portions of his life that make the most compelling story, assigning
          motives to him, emphasizing the characteristics that provoke the strongest
          audience reaction, reducing him to a recognizable character, and then
          making money from that character.
        </p>

        <p>
          A person is more complicated than the most sensational interpretation of
          selected moments in his life.
        </p>

        <p>Context matters.</p>

        <p>What happened before matters.</p>

        <p>What happened afterward matters.</p>

        <p>People change.</p>

        <p>
          And a human being should not necessarily become whatever character an
          audience finds most emotionally satisfying.
        </p>

        <p>
          SOLAR{" "}
          <Link
            className={linkCls}
            to="/blog/chris-hansen-doesnt-like-feeling-exploited"
          >
            made this point when Hansen first objected to <em>Primetime</em>
          </Link>
          . His complaint was more interesting than the easy irony. Losing control
          over your public identity is a deeply human thing to fear.
        </p>

        <BandHeader title="The Character Was Always Part of the Product" icon="🎥" />

        <p>
          <em>To Catch a Predator</em> did not invent concern about child sexual
          abuse. It did not invent online solicitation. And nothing in this argument
          requires pretending the conduct documented in many of its investigations
          was harmless.
        </p>

        <p>Trying to sexually exploit a child is serious conduct.</p>

        <p>
          People who commit crimes should be investigated fairly, prosecuted when
          the evidence supports prosecution, sentenced proportionately and, where
          necessary, treated and supervised.
        </p>

        <p>The question is not whether accountability matters.</p>

        <p>The question is what happens when accountability becomes entertainment.</p>

        <p>
          <em>To Catch a Predator</em> developed an extraordinarily effective
          dramatic formula.
        </p>

        <p>An adult chats online with someone he believes is underage.</p>

        <p>A meeting is arranged.</p>

        <p>He walks into a house.</p>

        <p>The audience knows something he does not.</p>

        <p>Then Hansen appears.</p>

        <p>The confrontation begins.</p>

        <p>The cameras are revealed.</p>

        <p>Police wait outside.</p>

        <p>
          The audience receives the confession or excuse, the humiliation, the walk
          outside and often the arrest.
        </p>

        <p>
          It worked because the moral universe was incredibly easy to understand.
        </p>

        <p>There was the predator.</p>

        <p>There was Chris Hansen.</p>

        <p>And there was us.</p>

        <p>
          The person sitting in the chair did not need much biography. His worst
          conduct was enough.
        </p>

        <p>
          Whatever else might be true about him—his history, psychology, level of
          risk, previous life, future treatment, capacity for change, or what he
          might become ten or twenty years later—was irrelevant to the dramatic
          function he served.
        </p>

        <p>He had become a character.</p>

        <p>
          <strong>The Predator.</strong>
        </p>

        <p>That does not mean the underlying conduct was fictional.</p>

        <p>
          It means a real person could be compressed into one socially legible
          identity.
        </p>

        <p>
          And once that identity existed, almost everything else became background
          noise.
        </p>

        <p>
          That is precisely the kind of reduction Hansen now finds objectionable
          when someone else does it to him.
        </p>

        <PullQuote>
          A person can do something terrible without that terrible thing becoming
          the only true thing about the person.
        </PullQuote>

        <p>
          Hansen does not use those words. But his objection to <em>Primetime</em>{" "}
          depends on something very close to that principle.
        </p>

        <BandHeader title="Then the Format Escaped Television" icon="📱" />

        <p>
          On October 3,{" "}
          <a
            className={linkCls}
            href="https://www.cnn.com/2026/10/03/us/to-catch-a-predator-online-pedophile-hunters-cec"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNN published a remarkable examination
          </a>{" "}
          of what happened after <em>To Catch a Predator</em>.
        </p>

        <p>The format reproduced.</p>

        <p>
          Across YouTube, Facebook, Kick and other platforms, self-appointed
          predator hunters began running their own operations: posing as minors
          online, arranging meetings, confronting targets on camera and uploading
          the encounters for an audience.
        </p>

        <p>
          Researchers interviewed by CNN describe Hansen’s influence as explicit.
          Some hunters cite him, imitate him and reproduce the interviewing
          structure that made <em>To Catch a Predator</em> instantly recognizable.
        </p>

        <p>
          SOLAR has{" "}
          <Link className={linkCls} to="/blog/child-safety-theater-goes-live">
            documented this livestream humiliation economy before
          </Link>
          .
        </p>

        <p>
          But something important changed as the format moved from network
          television into the creator economy.
        </p>

        <p>
          The institutional constraints could disappear while the most profitable
          feature remained:
        </p>

        <p>
          <strong>the confrontation.</strong>
        </p>

        <p>
          CNN describes encounters involving public pursuit, shouting, physical
          fights, a shooting and a stabbing. It also reports that Ohio law
          enforcement officials warned Dads Against Predators to stop after citing
          two suicides and another possible suicide involving men the group had
          filmed.
        </p>

        <p>
          The warning was not subtle: officials said the tactics disregarded law,
          order and due process, and that the people being exposed might be exactly
          what the group said they were—or might not.
        </p>

        <p>The technology changed.</p>

        <p>The gatekeepers changed.</p>

        <p>The business model changed.</p>

        <p>The underlying product survived.</p>

        <p>
          <strong>Exposure.</strong>
        </p>

        <p>And exposure performs extremely well online.</p>

        <BandHeader title="The Spectacle of Punishment" icon="🎭" />

        <p>
          <em>Primetime</em> director Lance Oppenheim gives CNN a useful phrase for
          what this culture has become:
        </p>

        <PullQuote>the “spectacle of punishment.”</PullQuote>

        <p>
          That phrase matters because punishment spectacle and public safety can
          look remarkably similar from a distance.
        </p>

        <p>Both may begin with serious wrongdoing.</p>

        <p>Both may involve accountability.</p>

        <p>Both may result in consequences.</p>

        <p>But they measure success very differently.</p>

        <p>A public-safety intervention eventually has to answer questions like these:</p>

        <ul className="list-disc pl-6">
          <li>Did this prevent abuse?</li>
          <li>Did it protect an actual victim?</li>
          <li>Did it produce usable evidence?</li>
          <li>Did the person stop offending?</li>
          <li>Did treatment reduce risk?</li>
          <li>Did supervision work?</li>
          <li>Did fewer people get hurt?</li>
        </ul>

        <p>Punishment spectacle can answer a much easier question:</p>

        <p>
          <strong>Did the audience get to watch someone deserving suffer?</strong>
        </p>

        <p>CNN’s reporting offers an almost perfect illustration.</p>

        <p>
          Dads Against Predators founder Joshua Mundy told CNN that the group does
          not measure success primarily through arrests or convictions. It does not
          track the people it exposes afterward.
        </p>

        <p>
          Meanwhile, CNN reports that its content is monetized, costs subscribers
          $15 per month, and has become Mundy’s full-time work.
        </p>

        <p>That does not prove Mundy does not care about children.</p>

        <p>It creates a much more basic problem.</p>

        <PullQuote>
          If you do not know what happens to the people you expose afterward, how
          exactly do you know your intervention made anyone safer?
        </PullQuote>

        <p>That question should be devastatingly simple.</p>

        <p>
          If the stated objective is child safety, then some measurable relationship
          to child safety eventually has to matter.
        </p>

        <p>Views do not tell us that.</p>

        <p>Subscribers do not tell us that.</p>

        <p>Public humiliation does not tell us that.</p>

        <p>Arrests alone do not necessarily tell us that.</p>

        <p>
          SOLAR made the same methodological point in{" "}
          <Link className={linkCls} to="/blog/results-dont-speak-for-themselves">
            <em>The Results Don’t Speak for Themselves</em>
          </Link>
          : enforcement activity is not automatically a public-safety outcome.
        </p>

        <p>A system can be very busy without being very effective.</p>

        <p>It can produce numbers without producing prevention.</p>

        <p>It can produce spectacle without producing safety.</p>

        <p>
          And when spectacle itself becomes the reward, society can stop noticing
          that nobody has answered the original question.
        </p>

        <BandHeader title="We Became Very Good at Finding the Villain" icon="🔎" />

        <p>
          There is another reason the <em>To Catch a Predator</em> format became
          culturally powerful.
        </p>

        <p>It gave sexual danger a face.</p>

        <p>
          More specifically, it gave sexual danger the <strong>right kind of face
          for television</strong>.
        </p>

        <p>The danger comes from outside.</p>

        <p>A stranger appears through the internet.</p>

        <p>Investigators identify him.</p>

        <p>He travels to a house.</p>

        <p>The cameras expose him.</p>

        <p>Police remove him.</p>

        <p>The threat is visible.</p>

        <p>The threat is geographically locatable.</p>

        <p>The threat can be confronted.</p>

        <p>The threat can be defeated before the commercial break.</p>

        <p>Real sexual abuse is usually much less cooperative.</p>

        <p>
          The{" "}
          <a
            className={linkCls}
            href="https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC reports
          </a>{" "}
          that about <strong>90% of child sexual abuse is perpetrated by someone
          known and trusted by the child or the child’s family</strong>.
        </p>

        <p>That means the prevention problem often looks very different from the spectacle.</p>

        <p>It looks like family.</p>

        <p>It looks like teachers.</p>

        <p>Coaches.</p>

        <p>Clergy.</p>

        <p>Neighbors.</p>

        <p>Family friends.</p>

        <p>Youth leaders.</p>

        <p>People whose authority or familiarity creates access.</p>

        <p>People whom the child may depend on.</p>

        <p>People whom adults may instinctively want to defend.</p>

        <p>
          That reality is much harder to dramatize because there may be no stranger
          walking through a door.
        </p>

        <p>No unmistakable outsider.</p>

        <p>No satisfying reveal.</p>

        <p>No single red dot on a map that tells parents where danger lives.</p>

        <p>
          SOLAR has spent years trying to redirect attention toward that reality,
          including in{" "}
          <Link className={linkCls} to="/blog/inside-the-house">
            <em>The Call Is Coming from Inside the House</em>
          </Link>
          .
        </p>

        <p>Real prevention asks harder questions.</p>

        <p>Can children disclose abuse safely?</p>

        <p>Will adults believe them when the accused person is trusted?</p>

        <p>Do schools recognize grooming and boundary violations?</p>

        <p>Do churches have independent reporting systems?</p>

        <p>Do youth organizations restrict unsupervised access?</p>

        <p>
          Do institutions protect reputations or children when those interests
          collide?
        </p>

        <p>
          Can people who recognize troubling thoughts or behavior obtain
          intervention before someone is harmed?
        </p>

        <p>Those are prevention questions.</p>

        <p>They are also much less entertaining.</p>

        <p>
          That matters because a society repeatedly shown one version of danger can
          begin building policy around the version it recognizes most easily.
        </p>

        <p>The spectacular stranger becomes the mental model.</p>

        <p>And once that happens, exposure itself begins to feel like protection.</p>

        <BandHeader title="Then Hansen Says Something Remarkable" icon="💬" />

        <p>This is where the story becomes considerably more interesting.</p>

        <p>
          In his <em>Variety</em> interview, Hansen is asked about redemption.
        </p>

        <p>Can people he has encountered change?</p>

        <p>Can intervention work?</p>

        <p>Can therapy matter?</p>

        <p>Hansen’s answer is not universally optimistic.</p>

        <p>It is something more important.</p>

        <p>He says yes—for some people.</p>

        <p>And then he says:</p>

        <PullQuote>
          <a
            className={linkCls}
            href="https://variety.com/2026/film/features/chris-hansen-primetime-ending-a24-legal-action-1236894822/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “These guys are not all the same guy.”
          </a>
        </PullQuote>

        <p>Stop there for a moment.</p>

        <p>
          Because that sentence blows a hole straight through one of the most
          persistent assumptions in American sex-offense policy and culture.
        </p>

        <p>
          <strong>They are not interchangeable.</strong>
        </p>

        <p>Correct.</p>

        <p>Not merely morally correct.</p>

        <p>Empirically correct.</p>

        <p>
          The Justice Department’s{" "}
          <a
            className={linkCls}
            href="https://www.smart.ojp.gov/somapi/chapter-5-adult-sex-offender-recidivism"
            target="_blank"
            rel="noopener noreferrer"
          >
            own SMART Office review
          </a>{" "}
          says people who commit sexual offenses are a diverse population and that
          different types have different propensities to reoffend. It specifically
          warns against treating them as a largely homogeneous group.
        </p>

        <p>
          Hansen has acknowledged the same basic reality in plain English.
        </p>

        <Callout variant="neutral" title="What Hansen has already conceded" icon="🧩">
          <div className="space-y-4">
            <p>
              <strong>People who commit sexual offenses are different from one another.</strong>{" "}
              The conduct grouped beneath sex-offense labels spans dramatically
              different circumstances, histories, motivations and levels of risk.
            </p>
            <p>
              <strong>Treatment can matter.</strong> Hansen specifically acknowledges
              intervention and therapy as possible routes toward change.
            </p>
            <p>
              <strong>Rehabilitation is real for at least some people.</strong> Not
              everyone. Not automatically. Not without accountability. But some.
            </p>
            <p>
              <strong>A past act does not always tell us everything about present risk.</strong>{" "}
              If people differ, and if treatment and change are possible, then who
              someone was at the time of an offense and who that person is years
              later cannot always be assumed to be identical.
            </p>
          </div>
        </Callout>

        <p>
          Hansen does not state every implication in that box explicitly. But once
          his premise is accepted, those questions cannot simply be wished away.
        </p>

        <p>
          SOLAR has made that argument repeatedly. The Justice Department itself has
          embraced{" "}
          <Link
            className={linkCls}
            to="/blog/not-you-doj-individualized-justice-registered-people"
          >
            individualized present-risk assessment in other areas of criminal-justice policy
          </Link>
          .
        </p>

        <p>Now Chris Hansen has supplied the plain-English premise:</p>

        <p>
          <strong>They are not interchangeable.</strong>
        </p>

        <PullQuote>
          If people in this category are meaningfully different, a system that treats them as though
          they are has a problem.
        </PullQuote>

        <p>That is not ideology.</p>

        <p>That is logic.</p>

        <BandHeader title="What Follows From That" icon="➡️" />

        <p>
          Hansen has already told us that some people can respond to therapy.
        </p>

        <p>That intervention can work.</p>

        <p>That redemption can happen.</p>

        <p>That people who commit sexual offenses are not interchangeable.</p>

        <p>If people in this category are meaningfully different, why should policy treat them as though they are?</p>

        <p>If therapy can work, shouldn’t successful treatment matter?</p>

        <p>If intervention can change outcomes, shouldn’t demonstrated change matter?</p>

        <p>
          If redemption exists, shouldn’t there eventually be some meaningful way
          for the law and society to recognize it?
        </p>

        <p>
          If people present different levels of risk, shouldn’t restrictions reflect
          those differences?
        </p>

        <p>If risk changes over time, shouldn’t policy be capable of changing with it?</p>

        <p>
          If someone has completed punishment, completed treatment, lived
          offense-free for years or decades and no longer resembles the person who
          committed the offense, what exactly is the public-safety justification for
          insisting that the old identity remain permanently dominant?
        </p>

        <p>Hansen does not ask those questions.</p>

        <p>But they follow directly from what he has already said.</p>

        <p>This is not a manufactured gotcha.</p>

        <p>
          The more interesting fact is that Hansen has already supplied most of the
          premises.
        </p>

        <p>SOLAR is simply following the argument to its conclusion.</p>

        <BandHeader title="The Registry Is Where the Logic Gets Hard" icon="🗺️" />

        <p>
          After acknowledging treatment, redemption and individual differences,
          Hansen points approvingly toward the sex-offense registry as the mechanism
          for keeping track of people after punishment.
        </p>

        <p>And this is where his own reasoning runs into the system he is defending.</p>

        <p>If people in this category are meaningfully different, what exactly is a broad public registry telling us?</p>

        <p>A conviction tells us something extremely important:</p>

        <p>
          <strong>what happened.</strong>
        </p>

        <p>It does not automatically answer a different question:</p>

        <p>
          <strong>what risk does this person present today?</strong>
        </p>

        <p>Those are not interchangeable questions.</p>

        <p>Risk assessment exists because they are not interchangeable questions.</p>

        <p>Treatment exists because they are not interchangeable questions.</p>

        <p>Relief mechanisms exist because they are not interchangeable questions.</p>

        <p>
          The entire concept of rehabilitation exists because they are not
          interchangeable questions.
        </p>

        <p>
          Even the federal government’s own{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/library/publications/sex-offender-risk-assessment-state-level-policies-determining-registration-and"
            target="_blank"
            rel="noopener noreferrer"
          >
            review of state risk-assessment policy
          </a>{" "}
          acknowledges the distinction: federal SORNA’s classification framework is
          offense-based, while some states use individualized risk assessments to
          determine aspects of registration or notification.
        </p>

        <p>
          A system truly built around Hansen’s own premise would care about
          distinctions.
        </p>

        <p>Age.</p>

        <p>Criminal history.</p>

        <p>Conduct.</p>

        <p>Treatment.</p>

        <p>Time offense-free.</p>

        <p>Compliance.</p>

        <p>Clinical assessment.</p>

        <p>Evidence of change.</p>

        <p>Present risk.</p>

        <p>It would care about what happened.</p>

        <p>
          But it would also care about what happened <strong>afterward</strong>.
        </p>

        <p>
          Public registry systems can collapse those questions back into one:
        </p>

        <p>
          <strong>What offense label does this person carry?</strong>
        </p>

        <p>
          That is exactly the kind of reduction Hansen now objects to when he
          believes it is being done to him.
        </p>

        <p>
          He wants the public to understand that <em>Primetime</em> does not contain
          the whole Chris Hansen.
        </p>

        <p>Fair enough.</p>

        <p>A registry entry does not contain the whole human being either.</p>

        <BandHeader title="The Registry Is Not YouTube Vigilantism. But the Logic Rhymes." icon="⚖️" />

        <Callout variant="legal" title="This is an analogy, not an equivalence" icon="⚖️">
          <p>
            The sex-offense registry and online predator hunters are not the same
            institution. One operates through law; the other through private action
            and platform culture. Their procedures, authority and legal consequences
            differ substantially.
          </p>
          <p>
            The comparison is narrower: both rely on the assumption that identifying
            and exposing a designated dangerous person is itself a meaningful form of
            prevention. The question SOLAR is asking is whether that assumption is
            supported by outcomes.
          </p>
        </Callout>

        <p>The hunter points the camera.</p>

        <p>The television program broadcasts the confrontation.</p>

        <p>The registry publishes the identity.</p>

        <p>Different institutions.</p>

        <p>Different mechanisms.</p>

        <p>But the same unresolved question follows each one:</p>

        <p>
          <strong>What measurable harm did the exposure prevent?</strong>
        </p>

        <p>
          SOLAR has asked that question directly in{" "}
          <Link className={linkCls} to="/blog/what-good-is-the-registry">
            <em>What Good Is the Registry?</em>
          </Link>
          .
        </p>

        <p>The research does not justify treating the answer as self-evident.</p>

        <p>
          A{" "}
          <a
            className={linkCls}
            href="https://ojp.gov/library/publications/sex-offender-registration-and-notification-act-summary-and-assessment-research"
            target="_blank"
            rel="noopener noreferrer"
          >
            2022 Justice Department research assessment
          </a>{" "}
          concluded that the research available through June 2019 was inconclusive
          about whether sex-offense registration and notification laws reduce
          recidivism. The report also noted research suggesting a low likelihood of
          an effect while emphasizing methodological weaknesses in that literature.
        </p>

        <p>That does not prove every registry provision accomplishes nothing.</p>

        <p>It does something more important.</p>

        <p>It removes the shortcut.</p>

        <p>The safety benefit has to be demonstrated.</p>

        <p>Exposure cannot serve as its own proof.</p>

        <p>Neither can anger.</p>

        <p>Neither can popularity.</p>

        <p>
          Neither can the intuitive satisfaction of knowing that everyone knows who
          the bad person is.
        </p>

        <BandHeader title="Hansen’s Complaint Matters More Than He Realizes" icon="🪞" />

        <p>Now return to where this story began.</p>

        <p>Chris Hansen believes <em>Primetime</em> exploits him.</p>

        <p>
          He believes someone else has taken selected parts of his life, constructed
          a narrative around them and produced a commercially useful version of him
          that he does not recognize as fair.
        </p>

        <p>Again:</p>

        <p>He may be right.</p>

        <p>And if he is, what principle has actually been violated?</p>

        <p>Not merely copyright.</p>

        <p>Not merely celebrity control.</p>

        <p>Something more fundamental.</p>

        <p>
          He is saying: <strong>I am more complicated than the character you built
          from selected events in my life.</strong>
        </p>

        <p>Yes.</p>

        <p>
          <strong>The motives you assigned to me may not reflect what was actually
          happening inside my head.</strong>
        </p>

        <p>Yes.</p>

        <p>
          <strong>The most dramatic moments may not fairly explain everything that
          happened before or afterward.</strong>
        </p>

        <p>Yes.</p>

        <p>
          <strong>A commercial narrative can become more culturally durable than the
          real person.</strong>
        </p>

        <p>Yes.</p>

        <p>
          <strong>
            Being known primarily through another institution’s chosen version of
            you can be profoundly unfair.
          </strong>
        </p>

        <p>Yes.</p>

        <p>Now apply those principles consistently.</p>

        <p>That does not mean pretending conduct did not happen.</p>

        <p>
          Hansen’s objection to <em>Primetime</em> does not require us to believe
          nothing controversial happened in his career.
        </p>

        <p>
          Likewise, acknowledging the humanity of someone convicted of a serious
          offense does not require pretending the offense disappeared.
        </p>

        <p>It means refusing to make one fact carry more weight than it can bear.</p>

        <p>A conviction is real.</p>

        <p>It matters.</p>

        <p>It may justify punishment.</p>

        <p>It may justify treatment.</p>

        <p>It may justify supervision.</p>

        <p>In some cases it may justify long-term risk management.</p>

        <p>
          But it does not automatically establish that the person remains
          permanently identical to the person who committed the offense.
        </p>

        <p>
          Hansen now wants precisely that distinction for himself:
        </p>

        <p>
          <strong>
            Do not confuse the most dramatic version of my past with the whole truth
            about who I am.
          </strong>
        </p>

        <BandHeader title="The Obvious Counterargument" icon="🧱" />

        <p>Someone will say:</p>

        <p>Fine.</p>

        <p>
          But the men on <em>To Catch a Predator</em> were trying to meet children
          for sex.
        </p>

        <p>Why should anyone care if they were humiliated?</p>

        <p>
          Because the seriousness of misconduct does not abolish the need for
          principles.
        </p>

        <p>Attempting to sexually exploit a child is serious.</p>

        <p>And due process still matters.</p>

        <p>Accountability is necessary.</p>

        <p>And punishment can still become excessive.</p>

        <p>Some people present serious ongoing risk.</p>

        <p>And others do not present the same risk.</p>

        <p>Victims deserve justice.</p>

        <p>And rehabilitation can still exist.</p>

        <p>Those propositions do not contradict one another.</p>

        <p>
          In fact, a serious commitment to child safety should make us more demanding
          about evidence, not less.
        </p>

        <p>If humiliation works, show us.</p>

        <p>If public exposure prevents crime, measure it.</p>

        <p>If blanket policies reduce reoffending, demonstrate it.</p>

        <p>
          If destabilizing housing and employment improves public safety, produce
          the evidence.
        </p>

        <p>
          If lifelong public branding remains necessary after treatment, aging and
          years without reoffending, explain why.
        </p>

        <p>Child protection is too important to rely on feelings.</p>

        <p>
          The moral seriousness of sexual abuse should make us{" "}
          <strong>less tolerant of performative safety</strong>, not more.
        </p>

        <BandHeader title="Accountability Without Spectacle" icon="🛡️" />

        <p>
          There is a persistent idea in American sex-offense policy that the
          alternative to maximum punishment is indifference.
        </p>

        <p>That is nonsense.</p>

        <p>We can aggressively investigate child sexual abuse.</p>

        <p>We can prosecute crimes supported by evidence.</p>

        <p>We can impose proportionate punishment.</p>

        <p>We can supervise people who present meaningful risk.</p>

        <p>We can require treatment when treatment is appropriate.</p>

        <p>We can develop better online-safety systems.</p>

        <p>We can teach children about boundaries.</p>

        <p>We can make disclosure safer.</p>

        <p>
          We can build stronger safeguards in schools, churches, sports programs and
          youth organizations.
        </p>

        <p>We can intervene earlier.</p>

        <p>We can assess risk individually.</p>

        <p>
          We can help people seek treatment before another person is harmed.
        </p>

        <p>We can support victims.</p>

        <p>
          And we can also permit people who have completed punishment, changed their
          behavior and demonstrated rehabilitation to return to stable community
          life.
        </p>

        <p>Nothing about those ideas is soft on abuse.</p>

        <p>They are what taking prevention seriously looks like.</p>

        <p>SOLAR’s objection has never been to accountability.</p>

        <p>It is to substituting something easier for accountability.</p>

        <p>A map is easier than examining family dynamics.</p>

        <p>A public list is easier than building effective institutional safeguards.</p>

        <p>A viral confrontation is easier than measuring long-term outcomes.</p>

        <p>A label is easier than a risk assessment.</p>

        <p>
          Permanent suspicion is easier than deciding what evidence of change should
          count.
        </p>

        <p>Humiliation is easier than rehabilitation.</p>

        <p>And spectacle is much easier than prevention.</p>

        <PullQuote>
          <p><strong>Public fury is not an outcome measure.</strong></p>
          <p><strong>Virality is not an outcome measure.</strong></p>
          <p><strong>Humiliation is not an outcome measure.</strong></p>
          <p><strong>Fewer victims is the outcome measure.</strong></p>
        </PullQuote>

        <p>Everything else is secondary.</p>

        <BandHeader title="Have a Seat, Chris" icon="🪑" />

        <p>
          There is something almost poetic about <em>Primetime</em> arriving at
          this particular moment.
        </p>

        <p>
          A filmmaker has taken Chris Hansen, selected pieces of his life,
          interpreted them, rearranged them into a dramatic narrative and created a
          character that Hansen says is distorted and unfair.
        </p>

        <p>
          Hansen asks us to understand that he is more complicated than the version
          of himself somebody else has chosen to present.
        </p>

        <p>He is right.</p>

        <p>
          CNN, meanwhile, has documented what happened after the entertainment
          formula Hansen helped popularize evolved into an online economy of
          confrontation, exposure, humiliation and sometimes violence.
        </p>

        <p>
          And Hansen himself has now acknowledged something even more important.
        </p>

        <p>The people he confronted were not interchangeable.</p>

        <p>Some can respond to intervention.</p>

        <p>Some can respond to therapy.</p>

        <p>Some can change.</p>

        <p>Some can be redeemed.</p>

        <p>
          <strong>They are not interchangeable.</strong>
        </p>

        <p>He is right about that too.</p>

        <p>Those are not small concessions.</p>

        <p>
          They are the foundations of an entirely different way of thinking about
          accountability.
        </p>

        <p>People are more than the most sensational episode of their lives.</p>

        <p>Public narratives can flatten human beings.</p>

        <p>Commercial incentives can reward humiliation.</p>

        <p>Risk differs.</p>

        <p>Treatment matters.</p>

        <p>Change is possible.</p>

        <p>Redemption exists.</p>

        <p>Past conduct and present risk are not always the same thing.</p>

        <p>Context matters.</p>

        <p>Hansen has already said almost all of it.</p>

        <p>
          The only question is whether those principles apply only to Chris
          Hansen—or whether they remain true when the person asking for context,
          humanity and the possibility of change is someone we find much easier to
          despise.
        </p>

        <p>
          A principle that applies only to people we like is not much of a
          principle.
        </p>

        <p>
          Chris Hansen spent years asking accused men to have a seat while America
          watched.
        </p>

        <p>
          Now he is asking America to look past someone else’s compelling portrayal
          and see the human being underneath.
        </p>

        <p>Fair enough.</p>

        <p>
          <strong>Keep going, Chris.</strong>
        </p>

        <p>
          <strong>You’re almost there.</strong>
        </p>

        <p>
          <strong>Have a seat.</strong>
        </p>

        <p>
          <strong>We should talk.</strong>
        </p>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            A24 —{" "}
            <a
              className={linkCls}
              href="https://a24films.com/films/primetime"
              target="_blank"
              rel="noopener noreferrer"
            >
              official <em>Primetime</em> page
            </a>{" "}
            — film, director, cast and official synopsis.
          </li>
          <li>
            <em>Variety</em> —{" "}
            <a
              className={linkCls}
              href="https://variety.com/2026/film/features/chris-hansen-primetime-ending-a24-legal-action-1236894822/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Hansen interview on <em>Primetime</em>, exploitation, treatment and redemption
            </a>
            .
          </li>
          <li>
            CNN —{" "}
            <a
              className={linkCls}
              href="https://www.cnn.com/2026/10/03/us/to-catch-a-predator-online-pedophile-hunters-cec"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on <em>To Catch a Predator</em> and the online predator-hunter economy
            </a>
            .
          </li>
          <li>
            CDC —{" "}
            <a
              className={linkCls}
              href="https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              child sexual abuse facts and the known-and-trusted perpetrator statistic
            </a>
            .
          </li>
          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://www.smart.ojp.gov/somapi/chapter-5-adult-sex-offender-recidivism"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adult Sex Offender Recidivism
            </a>{" "}
            — heterogeneity and differences in recidivism across offense groups.
          </li>
          <li>
            Office of Justice Programs —{" "}
            <a
              className={linkCls}
              href="https://www.ojp.gov/library/publications/sex-offender-risk-assessment-state-level-policies-determining-registration-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              state-level risk-assessment policies for registration and notification
            </a>
            .
          </li>
          <li>
            Office of Justice Programs —{" "}
            <a
              className={linkCls}
              href="https://ojp.gov/library/publications/sex-offender-registration-and-notification-act-summary-and-assessment-research"
              target="_blank"
              rel="noopener noreferrer"
            >
              2022 SORNA research assessment
            </a>{" "}
            — review of evidence on registration, notification and recidivism.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/primetime-predators-sting-culture">
              Primetime, Predators, and the Cruel Comfort of Sting Culture
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/exposure-is-not-prevention">
              Exposure Is Not Prevention
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/what-does-a-sex-offender-look-like">
              What Does a Sex Offender Look Like?
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
