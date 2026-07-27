import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";
import ContextualActionCard from "../../components/solar/ContextualActionCard";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "journalist",
  primaryPositionId: "closer-to-home",
  secondaryPositionId: "ineffective",
  formatId: "letter-to-editor",
  headline: "Ask media to stop treating exposure as prevention",
  description:
    "This article argues that registry logic, viral accusation culture, sting content, gossip, and public shaming all teach the same false lesson: that exposure is a safety plan. Media coverage can either reinforce that mythology or help the public understand what real child safety requires.",
  recommendation: {
    audienceLabel: "a journalist, columnist, editor, or editorial board",
    suggestion:
      "Ask media outlets to cover cases like this through a prevention lens instead of a spectacle lens, with attention to trusted access, institutional safeguards, reporting systems, protective planning, and the limits of public shaming.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please cover cases like this without turning public exposure into the moral center of the story. Help readers understand the prevention questions: trusted access, institutional safeguards, reporting systems, protective planning, and why registries and viral shaming are not substitutes for child safety.",
  personalContext:
    "I am writing because this article helped me see how registry logic, viral accusation culture, and media spectacle can all teach the same dangerous lesson: that public humiliation is public safety. I want coverage that centers prevention instead.",
  source: {
    title: "Exposure Is Not Prevention",
    path: "/blog/exposure-is-not-prevention",
    type: "blog",
  },
};

export default function ExposureIsNotPrevention(): JSX.Element {
  return (
    <BlogLayout
      title="Exposure Is Not Prevention"
      description="A SOLAR analysis of how registry logic, viral accusation culture, sting content, gossip, and public shaming teach society to mistake exposure for child safety and public safety."
      keywords="public shaming is not public safety, exposure is not prevention, sex offender registry, child safety, public safety, trusted access, viral accusation culture, public shaming, predator takedowns, registry myths"
      date="Jul 27, 2026"
      readTime="11 min read"
      badge="📝 BLOG"
      lede="A public accusation is not a child-safety system. A viral post is not a protection plan. A registry map is not prevention."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="warning" title="TL;DR" icon="⚠️">
          <p>
            This is not an argument for silence. Silence has protected harm. It
            is an argument against a culture that keeps teaching people that
            public shaming, public humiliation, and public exposure are
            substitutes for child-safety infrastructure and real public-safety
            strategy.
          </p>
        </Callout>

        <p>
          The tragedy of Sara Gilson’s death should not become another excuse
          to blame a murdered woman for speaking, or another chance to turn an
          accused man into a symbol before the facts have been fully tested.
        </p>

        <p>It should force a harder question.</p>

        <p>
          Why has American culture become so convinced that the answer to
          sexual harm is exposure?
        </p>

        <p>
          Not prevention. Not protection. Not child-safety infrastructure. Not
          meaningful public-safety strategy. Exposure.
        </p>

        <p>
          Put the name out. Make the person radioactive. Warn the crowd. Let
          shame do what institutions did not. Turn accusation into spectacle.
          Turn conviction into a map. Turn fear into a public list. Turn pain
          into content.
        </p>

        <p>
          That is the hidden thread running through viral accusation culture,
          online sting culture, gossip, vigilantism, and the sex-offense
          registry itself.
        </p>

        <p>
          They look like opposites. One is informal and viral. One is state-run
          and bureaucratic. One may happen before arrest, charge, indictment, or
          trial. The other usually follows conviction. But they rest on the
          same false premise:
        </p>

        <p>
          <strong>If everyone knows who to hate, everyone will be safer.</strong>
        </p>

        <p>That premise is wrong.</p>

        <p>
          Exposure may feel like accountability. It may feel like action. It
          may feel like protection when people are frightened and no one seems
          to be moving fast enough. But exposure is not prevention. Exposure is
          not child safety. Exposure is not a public-safety plan.
        </p>

        <p>
          And when a culture teaches people that public shaming is the tool, it
          should not be surprised when terrified people reach for it.
        </p>

        <PullQuote>
          She did not invent the exposure response. She inherited it from a
          society that has mistaken public shaming for public safety.
        </PullQuote>

        <BandHeader
          title="The case that makes the question unavoidable"
          icon="⚖️"
        />

        <p>
          According to current reporting, Sara Gilson, also known as Sara
          Duffey, was killed in Owasso, Oklahoma, in what police have described
          as an apparent murder-suicide involving her estranged husband,
          Jeremiah “Shawn” Duffey.{" "}
          <a
            className={linkCls}
            href="https://www.theguardian.com/us-news/2026/jul/26/oklahoma-influencer-killed-apparent-murder-suicide"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Guardian reported
          </a>{" "}
          that both were found dead from gunshot wounds in July 2026.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://people.com/sara-gilson-estranged-husband-was-under-investigation-for-lewd-molestation-of-a-minor-at-time-of-murder-suicide-12027273"
            target="_blank"
            rel="noopener noreferrer"
          >
            People reported
          </a>{" "}
          that, before the killing, Duffey had been accused of inappropriate
          sexual contact with a 15-year-old girl who played on a youth
          basketball team he coached. The outlet reported that Gilson filed an
          emergency protective order against him on June 10, 2026, and that
          another woman filed a protective order the same day involving
          allegations concerning her daughter.
        </p>

        <p>
          Other{" "}
          <a
            className={linkCls}
            href="https://www.uppermichiganssource.com/2026/07/26/influencer-killed-by-husband-after-she-accused-him-pedophilia-tiktok-reports-say/"
            target="_blank"
            rel="noopener noreferrer"
          >
            current reporting, citing police statements
          </a>
          , reported that another coach allegedly saw inappropriate conduct,
          intervened, and told the child’s parent. That reporting also stated
          that similar alleged conduct toward the same juvenile player had
          reportedly occurred over an extended period of time, across multiple
          jurisdictions and states.
        </p>

        <p>
          Gilson later reportedly posted a TikTok referring to her estranged
          husband as a “pedophile” and using a Netflix-documentary frame.
        </p>

        <p>
          Those allegations had not been fully tested in court before Duffey’s
          death. That matters. Legal care matters. Allegations are not
          convictions. Accusations are not findings. Public outrage is not due
          process.
        </p>

        <p>But the prevention question remains.</p>

        <p>
          If the reporting is accurate, this was not a stranger-danger story.
          It was a trusted-access story. A coach. A youth-sports setting. A
          minor player. Alleged access over time. A protective-order context. A
          woman who had reason to fear. A child-safety concern sitting inside
          ordinary community trust.
        </p>

        <p>That is exactly where public-safety mythology so often fails.</p>

        <BandHeader
          title="The registry could not prevent this. Neither could viral exposure."
          icon="🗺️"
        />

        <p>
          A public registry would not have identified this danger unless Duffey
          had already been convicted of a qualifying offense or otherwise
          required to register. Based on the reporting available now, this
          draft does not rely on any claim that he had a prior sex-offense
          conviction or prior registry status.
        </p>

        <p>
          That matters because the registry is sold to the public as a
          child-safety tool. It tells parents to look outward, to check a map,
          to search for already-known people, to imagine risk as something
          publicly labeled and geographically visible.
        </p>

        <p>
          But many serious harms do not begin with someone already marked by
          the state. They begin with access. Trust. Familiarity. Authority.
          Secrecy. Grooming. Institutional blindness. A respected role. A
          family relationship. A coach’s clipboard. A church office. A
          classroom. A youth program. A household.
        </p>

        <p>The registry trains the public to look for the person already exposed.</p>

        <p>
          But child safety often depends on noticing the person who has not
          been exposed yet.
        </p>

        <p>
          That does not mean silence is safety. Silence has protected too many
          abusers for too long. Institutional secrecy has protected too many
          reputations. Families, churches, schools, sports programs, and
          powerful men have all benefited from cultures that pressure people to
          stay quiet.
        </p>

        <p>
          But there is a difference between responsible disclosure and public
          humiliation as a substitute for intervention.
        </p>

        <p>
          Responsible safety disclosure asks: Who needs to know to protect the
          child? Who has authority to restrict access? Who can investigate? Who
          can remove a coach from contact with minors? Who can enforce a
          protective order? Who can prevent retaliation? Who can build
          safeguards so this does not depend on one terrified person going
          public?
        </p>

        <p>
          Exposure culture asks: Who can we make look? Who can we make share?
          Who can we make hate? Who can we humiliate? Who can we make
          radioactive?
        </p>

        <p>Those are not the same question.</p>

        <BandHeader
          title="The five forces that keep feeding the exposure machine"
          icon="⚙️"
        />

        <p>
          American culture did not arrive here by accident. People have been
          trained toward exposure by systems, laws, media habits, political
          incentives, and public myths that all point in the same direction.
        </p>

        <p>There are at least five forces at work.</p>

        <Callout variant="neutral" title="The five forces" icon="5️⃣">
          <ol className="list-decimal pl-6">
            <li>
              Registry law taught the public that naming people is what
              prevention looks like.
            </li>
            <li>
              When institutions fail to build safety, people reach for the tool
              they can control.
            </li>
            <li>
              Sex-offense politics collapses conduct, accusation, conviction,
              risk, and identity into one permanent label.
            </li>
            <li>
              Shame feels like action when real prevention feels complicated.
            </li>
            <li>The stranger-danger myth needs a visible villain.</li>
          </ol>
        </Callout>

        <h3>
          1. Registry law taught the public that naming people is what
          prevention looks like
        </h3>

        <p>The sex-offense registry is not just a database. It is a public lesson.</p>

        <p>
          It teaches that safety comes from knowing names, faces, addresses,
          and labels. It teaches that danger can be mapped. It teaches that
          public identification is a prevention strategy.{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/sorna/community-notification"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal law requires jurisdictions to post much registry
            information on public registry websites
          </a>
          , turning exposure into a formal public-safety ritual.
        </p>

        <p>The lesson has sunk deep into the culture.</p>

        <p>
          If the state says public naming keeps children safe after conviction,
          why would the public not believe public naming might keep children
          safe before conviction? If the official safety tool is exposure, why
          would ordinary people not copy the same logic when they believe
          institutions are too slow, too weak, or too inaccessible?
        </p>

        <p>That is the uncomfortable connection.</p>

        <PullQuote>
          The registry and viral accusation culture may seem opposed. One
          claims legal authority. The other claims moral urgency. But both tell
          the public the same thing: the path to safety is to expose the
          dangerous person.
        </PullQuote>

        <p>That is not a prevention model. It is a visibility model.</p>

        <p>And visibility is not the same thing as child safety.</p>

        <h3>
          2. When institutions fail to build safety, people reach for the tool
          they can control
        </h3>

        <p>
          When schools, youth-sports organizations, churches, child-serving
          nonprofits, licensing bodies, employers, family networks, and
          community institutions lack clear safeguards, people often feel
          trapped between silence and spectacle.
        </p>

        <p>
          That is especially true when the alleged risk involves someone with
          trust, authority, popularity, or access.
        </p>

        <p>
          A parent may not know who will believe them. A spouse may not know who
          will act. A child may not know who is safe to tell. A witness may not
          know whether reporting will actually remove the person from contact
          with children. A community may not know whether leaders will protect
          children or protect the institution.
        </p>

        <p>So people improvise.</p>

        <p>
          They warn friends. They post. They tell the group chat. They name the
          person. They try to make secrecy impossible.
        </p>

        <p>
          That response may come from fear. It may come from anger. It may come
          from desperation. It may come from the belief that public exposure is
          the only remaining way to protect others.
        </p>

        <p>
          The point is not to condemn a terrified person for speaking. The
          point is to ask why people are left believing that public shaming is
          the safety mechanism.
        </p>

        <PullQuote>
          A functioning child-safety system should not depend on one person
          going viral.
        </PullQuote>

        <p>
          It should depend on enforceable reporting rules, rapid role-based
          restrictions, trauma-informed response, protective planning,
          institutional transparency, evidence preservation, child-centered
          investigation, and meaningful consequences for organizations that
          ignore credible warning signs.
        </p>

        <p>If those systems are absent or distrusted, exposure fills the vacuum.</p>

        <p>But a vacuum-filler is not a safety strategy.</p>

        <h3>
          3. Sex-offense politics collapses conduct, accusation, conviction,
          risk, and identity into one permanent label
        </h3>

        <p>In many areas of law and public life, people understand distinctions.</p>

        <p>
          An allegation is not a charge. A charge is not a conviction. A
          conviction is not a full biography. A completed sentence is not the
          same thing as current danger. Risk varies. Facts matter. Time matters.
          Treatment matters. Context matters.
        </p>

        <p>But sex-offense politics often destroys those distinctions.</p>

        <p>
          The public label becomes the person. The accusation becomes the
          identity. The conviction becomes the permanent social fact. The
          registry turns legal history into public identity. Viral culture does
          the same thing faster and with fewer guardrails.
        </p>

        <p>
          That is why accusation, arrest, conviction, registry placement,
          gossip, sting videos, mugshots, and community warnings blur together
          so easily.
        </p>

        <p>
          The culture has been told that some people are not people with
          histories, circumstances, evidence, legal rights, risk factors, and
          possible paths forward. They are a category. A warning. A threat
          class. A name to circulate.
        </p>

        <p>This does not protect children.</p>

        <p>
          It flattens reality in a way that can make prevention harder. It tells
          the public to look for labels instead of behaviors, settings, access
          patterns, secrecy, boundary violations, coercion, grooming, domestic
          violence risk, and institutional failures.
        </p>

        <p>
          A serious public-safety culture would insist on accountability
          without abandoning accuracy. It would distinguish allegation from
          proof. It would distinguish conviction from current risk. It would
          distinguish responsible warning from social punishment.
        </p>

        <p>The exposure machine does not make those distinctions.</p>

        <p>It feeds on their collapse.</p>

        <h3>4. Shame feels like action when real prevention feels complicated</h3>

        <p>Sexual harm produces justified moral outrage. It should.</p>

        <p>
          Children should be protected. Abuse should be interrupted.
          Institutions should be held accountable. People who cause harm should
          face consequences through fair, lawful, evidence-based processes.
          Victims and survivors should be believed enough to be heard,
          protected, and taken seriously.
        </p>

        <p>But shame has a dangerous appeal because it gives everyone something to do.</p>

        <p>
          Share the post. Repeat the name. Condemn the accused. Search the
          registry. Watch the sting video. Warn the neighborhood. Join the
          pile-on. Feel useful. Feel righteous. Feel less helpless.
        </p>

        <p>That emotional payoff is powerful.</p>

        <p>
          But shame does not necessarily remove access to children. It does not
          enforce a protective order. It does not disarm a dangerous person. It
          does not fund prevention programs. It does not train coaches. It does
          not create safe reporting channels. It does not make institutions
          tell the truth. It does not separate evidence from rumor. It does not
          guarantee that a child is safer tomorrow.
        </p>

        <p>Shame punishes.</p>

        <p>
          Sometimes punishment is deserved. But punishment and prevention are
          not the same thing.
        </p>

        <p>
          A culture that cannot tell the difference will keep mistaking public
          humiliation for public safety.
        </p>

        <h3>5. The stranger-danger myth needs a visible villain</h3>

        <p>
          The public is often told to imagine sexual danger as someone outside
          the circle: the stranger, the monster, the person on the map, the
          suspicious outsider.
        </p>

        <p>
          But the evidence has long shown that sexual harm often comes from
          someone known to the victim. A{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/library/publications/sex-offenses-and-offenders-analysis-data-rape-and-sexual-assault"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics report
          </a>{" "}
          found that, based on police-recorded incident data, in 90 percent of
          rapes of children younger than 12, the child knew the offender.{" "}
          <a
            className={linkCls}
            href="https://ojjdp.ojp.gov/library/publications/sexually-assaulted-children-national-estimates-and-characteristics"
            target="_blank"
            rel="noopener noreferrer"
          >
            OJJDP has also reported
          </a>{" "}
          that most child sexual-assault victims in its national-estimates
          bulletin were assaulted by someone they knew, knew by sight, or were
          related to.
        </p>

        <p>That reality is harder to face.</p>

        <p>
          Known-person abuse requires communities to examine families,
          institutions, trusted adults, authority roles, secrecy, dependency,
          and access. It requires schools to examine staff and volunteers.
          Churches to examine clergy and youth leaders. Sports programs to
          examine coaches. Families to examine people they love. Communities to
          examine people they admire.
        </p>

        <p>That is much harder than pointing at a public list.</p>

        <p>The registry offers a visible villain. Viral culture offers one too.</p>

        <p>Both allow the public to say: There. That person. That is danger.</p>

        <p>
          Sometimes a person truly is dangerous. Sometimes warning is
          necessary. Sometimes disclosure is urgent. But when the culture
          becomes addicted to visible villains, it misses the conditions that
          allow harm to happen before a villain has been publicly named.
        </p>

        <p>Child safety requires looking where access actually sits.</p>

        <p>
          That is slower. Less viral. Less emotionally satisfying. More
          threatening to institutions. More demanding of adults.
        </p>

        <p>It is also where prevention begins.</p>

        <BandHeader
          title="She did not invent the exposure response. She inherited it."
          icon="📣"
        />

        <p>
          The uncomfortable truth is that Sara Gilson’s public response did not
          come from nowhere.
        </p>

        <p>
          She lived in the same culture the rest of us live in: a culture
          saturated with “predator” takedowns, confrontation videos,{" "}
          <a
            className={linkCls}
            href="https://www.pewresearch.org/journalism/2024/02/06/an-audio-tour-through-americas-top-ranked-podcasts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            true-crime storytelling
          </a>
          , viral accusations, public shaming, humiliation rituals, and
          documentary fantasies built around the moment someone is exposed.
        </p>

        <p>Social media has trained people to believe that the brave thing is to name him.</p>

        <p>
          Streaming platforms have trained people to believe the story begins
          when the woman goes public.
        </p>

        <p>
          News coverage has trained people to believe the most shareable safety
          message is the most sensational one.
        </p>

        <p>
          The registry has trained people to believe the government itself
          endorses public exposure as child protection.
        </p>

        <p>
          So when Gilson reportedly learned that her estranged husband was the
          subject of a protective order and allegations involving a minor, why
          would she not believe broadcasting it was the obvious response? Why
          would she not believe that telling her audience was how she protected
          herself, her children, and the public? Why would she not reach for the
          very tool that law, media, politics, and social platforms have spent
          decades presenting as accountability?
        </p>

        <p>That is not an indictment of her.</p>

        <p>
          It is an indictment of the culture that handed her a microphone and
          called it a safety plan.
        </p>

        <p>
          This is what the exposure machine does. It teaches people that the
          correct response to suspected sexual harm is public naming, public
          disgust, public circulation, public punishment. It teaches that the
          most righteous person is the one who says the charged word first,
          says it loudest, and makes sure nobody can look away.
        </p>

        <p>
          And then, when exposure escalates danger instead of containing it,
          the same culture pretends to be shocked.
        </p>

        <p>But how could anyone be shocked?</p>

        <p>This is the lesson we have been teaching.</p>

        <p>
          We teach it through registries that convert past convictions into
          lifelong public identity. We teach it through mugshot culture and
          sting channels that turn accusation and humiliation into content. We
          teach it through true-crime entertainment that rewards the most
          dramatic confrontation. We teach it through algorithms that amplify
          outrage faster than evidence. We teach it through politics that
          treats sexual harm less as a public-safety problem to prevent than as
          a category of people to expose, brand, and exile.
        </p>

        <p>That machinery does not create careful safety plans. It creates instincts.</p>

        <p>Post it.</p>
        <p>Name him.</p>
        <p>Warn everyone.</p>
        <p>Shame him.</p>
        <p>Humiliate him.</p>
        <p>Expose him.</p>
        <p>Make it public.</p>
        <p>Make it impossible to ignore.</p>

        <p>
          Those instincts may feel protective. They may even come from love,
          fear, rage, and a sincere desire to stop harm. But instinct is not
          infrastructure. A viral post is not a protective order. A public
          accusation is not a child-safety protocol. A confrontation is not an
          investigation. A registry entry is not prevention.
        </p>

        <p>The tragedy is not that a frightened woman spoke.</p>

        <p>
          The tragedy is that a frightened woman had every reason to believe
          speaking publicly was the tool society had given her.
        </p>

        <BandHeader title="The two sides of the same coin" icon="🪙" />

        <p>Here is the thread we are supposed to miss:</p>

        <p>
          The registry says: after conviction, public exposure will keep us
          safe.
        </p>

        <p>
          Viral accusation culture says: before the system acts, public
          exposure will keep us safe.
        </p>

        <p>
          Sting culture says: if we can create the confrontation and publish
          the humiliation, public exposure will keep us safe.
        </p>

        <p>
          Gossip culture says: if everyone whispers the name, public exposure
          will keep us safe.
        </p>

        <p>
          Vigilante culture says: if the crowd punishes the person, public
          exposure will keep us safe.
        </p>

        <PullQuote>
          The registry says: after conviction, public exposure will keep us
          safe. Viral accusation culture says: before the system acts, public
          exposure will keep us safe.
        </PullQuote>

        <p>
          These are not separate ideas. They are variations of the same
          exposure narrative.
        </p>

        <p>
          They differ in form, legality, timing, and risk. But they share the
          same underlying claim: safety comes from making a person publicly
          known, publicly hated, publicly marked, or publicly untouchable.
        </p>

        <p>That claim has shaped American sex-offense policy for decades.</p>

        <p>
          It has also shaped how people behave when they believe formal systems
          have failed.
        </p>

        <p>
          This is why{" "}
          <Link className={linkCls} to="/advocacy">
            SOLAR’s public-safety framework
          </Link>{" "}
          is not only about registrants. It is about public safety itself. When
          society mistakes public shaming for prevention, everyone is less
          safe: children, victims, families, communities, people accused before
          proof, people convicted who are trying to live lawfully, and
          frightened people who may escalate danger by reaching for the only
          tool culture has taught them to trust.
        </p>

        <BandHeader title="Naming the failure without blaming the victim" icon="🕯️" />

        <p>
          Nothing in this argument should be read as blaming Sara Gilson for
          the violence committed against her.
        </p>

        <p>The responsibility for murder belongs to the person who kills.</p>

        <p>
          A woman who feared her estranged husband, learned of allegations
          involving a child, sought legal protection, and spoke publicly should
          not be turned into the defendant in her own death.
        </p>

        <p>
          That would be another failure of the exposure machine: redirecting
          scrutiny toward the woman’s speech instead of the culture that left
          exposure looking like protection.
        </p>

        <PullQuote>
          The better question is not, “Why did she post?” The better question
          is, “Why have we built a society where posting feels like
          protection?”
        </PullQuote>

        <p>
          Why do we tell people that public naming is safety when the person has
          a conviction, then act shocked when people apply the same logic to
          accusation?
        </p>

        <p>
          Why do we invest so much moral energy in lists, labels, maps,
          mugshots, stings, and viral denunciation, while underinvesting in the
          boring, difficult systems that actually protect children?
        </p>

        <p>
          Why do we let schools, teams, churches, youth programs, and community
          institutions benefit from trust without demanding real transparency
          and safeguards?
        </p>

        <p>
          Why do we keep teaching the public to look for exposed people instead
          of looking at access, authority, secrecy, and institutional failure?
        </p>

        <p>That is where the outrage belongs.</p>

        <p>Not at a murdered woman.</p>

        <p>
          Not even, for purposes of this argument, at an accused man whose
          alleged conduct was never adjudicated before his death.
        </p>

        <p>
          The outrage belongs at the machinery: the policies, incentives,
          narratives, and institutions that keep feeding people the same
          falsehood.
        </p>

        <p>That falsehood says public humiliation is safety.</p>

        <p>It is not.</p>

        <BandHeader title="What real public safety would ask instead" icon="🛡️" />

        <p>
          A serious child-safety and public-safety strategy would ask different
          questions.
        </p>

        <p>
          It would ask whether youth-serving organizations have enforceable
          two-adult rules, travel policies, communication boundaries, complaint
          systems, and immediate suspension protocols when credible allegations
          involve access to minors.
        </p>

        <p>
          It would ask whether parents and children know where to report
          boundary violations before abuse escalates.
        </p>

        <p>
          It would ask whether institutions are punished for ignoring warning
          signs.
        </p>

        <p>
          It would ask whether protective orders are paired with realistic
          safety planning.
        </p>

        <p>
          It would ask whether firearm access, domestic violence risk, stalking
          behavior, and retaliatory escalation are treated as urgent safety
          issues.
        </p>

        <p>
          It would ask whether media coverage is educating the public or merely
          turning tragedy into a spectacle.
        </p>

        <p>
          It would ask whether lawmakers are funding prevention or merely
          expanding punishment.
        </p>

        <p>
          It would ask whether registry policy has trained the public to confuse
          being warned with being protected.
        </p>

        <p>Those are harder questions than “Who should we expose?”</p>

        <p>They are also more useful.</p>

        <BandHeader title="The lesson" icon="🌱" />

        <p>
          This case should not become an argument for silence. Silence protects
          harm.
        </p>

        <p>
          It should not become an argument for more public lists. Public lists
          are not prevention.
        </p>

        <p>
          It should not become an argument for blaming a murdered woman. That
          would be obscene.
        </p>

        <p>It should become an argument for finally breaking the exposure habit.</p>

        <p>A public accusation is not a child-safety system.</p>
        <p>A viral post is not a protection plan.</p>
        <p>A sting video is not prevention.</p>
        <p>A registry map is not public safety.</p>
        <p>A culture of shame is not accountability.</p>

        <p>
          If we want children to be safer, if we want victims to be safer, if
          we want communities to be safer, we have to stop pretending that the
          work is done once the name is public.
        </p>

        <p>The work starts before the name is public.</p>

        <p>
          It starts with access. Oversight. Boundaries. Reporting. Intervention.
          Evidence. Due process. Protection. Treatment. Stability.
          Institutional accountability.
        </p>

        <p>
          And it starts by telling the truth about the exposure machine itself.
        </p>

        <Callout variant="urgent" title="Exposure is not prevention" icon="🚨">
          <p>Public humiliation is not a child-safety strategy.</p>
          <p>A viral accusation is not a protection plan.</p>
          <p>A registry map is not prevention.</p>
          <p>A crowd chanting a name is not accountability.</p>
        </Callout>

        <p>
          If we want fewer victims, safer children, and stronger communities,
          we have to stop treating exposure as the endpoint of justice.
        </p>

        <PullQuote>
          The goal is not to make danger famous. The goal is to stop harm.
        </PullQuote>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.theguardian.com/us-news/2026/jul/26/oklahoma-influencer-killed-apparent-murder-suicide"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Guardian’s report on the Owasso murder-suicide
            </a>{" "}
            — reported facts concerning the deaths, protective orders, and
            allegations.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://people.com/sara-gilson-estranged-husband-was-under-investigation-for-lewd-molestation-of-a-minor-at-time-of-murder-suicide-12027273"
              target="_blank"
              rel="noopener noreferrer"
            >
              People’s reporting on the protective orders and molestation
              investigation
            </a>{" "}
            — protective-order records, the youth-basketball context, police
            statements, and federal referral.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.uppermichiganssource.com/2026/07/26/influencer-killed-by-husband-after-she-accused-him-pedophilia-tiktok-reports-say/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gray Media’s report summarizing police statements and the TikTok
              post
            </a>{" "}
            — secondary reporting on the alleged conduct, intervention by
            another coach, and protective-order guidance.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.smart.ojp.gov/faqs"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ SMART Office FAQ on SORNA
            </a>{" "}
            — official background on federal sex-offender registration and
            public-notification requirements.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/sorna/community-notification"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMART Office community-notification requirements of SORNA
            </a>{" "}
            — official explanation of public registry website and notification
            infrastructure.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ojp.gov/library/publications/sex-offenses-and-offenders-analysis-data-rape-and-sexual-assault"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics’ Sex Offenses and Offenders report
            </a>{" "}
            — longstanding police-recorded incident evidence concerning
            children’s relationships to offenders.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://ojjdp.ojp.gov/library/publications/sexually-assaulted-children-national-estimates-and-characteristics"
              target="_blank"
              rel="noopener noreferrer"
            >
              OJJDP’s Sexually Assaulted Children bulletin
            </a>{" "}
            — national-estimates research on known, familiar, and related
            offenders.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.pewresearch.org/journalism/2024/02/06/an-audio-tour-through-americas-top-ranked-podcasts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pew Research Center’s analysis of top-ranked podcasts
            </a>{" "}
            — cultural context concerning the prominence of true-crime media.
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
            <Link
              className={linkCls}
              to="/resources/accountability-watch"
            >
              Accountability Watch
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">
              SOLAR Advocacy &amp; Reform
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources">
              SOLAR resources for families and impacted communities
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}