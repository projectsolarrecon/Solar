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
  secondaryPositionId: "ineffective",
  formatId: "letter-to-editor",
  headline: "Ask media to cover the ecosystem, not just the scandal",
  description:
    "This article argues that the Tate story should not disappear into celebrity spectacle. Readers can ask journalists and editorial boards to examine the broader public-safety failure: how misogyny, grooming, coercion, platform incentives, and political usefulness can make sexual harm visible and still culturally protected.",
  recommendation: {
    audienceLabel:
      "journalists, columnists, editorial boards, and public commentators",
    suggestion:
      "Ask coverage to move beyond the arrest-and-extradition storyline and examine the ecosystem that made the warning signs profitable, visible, and defensible.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please cover the Tate case not only as a celebrity extradition story, but as a public-safety failure that exposes how sexual harm can be normalized, monetized, and defended in plain sight while registry politics keeps families focused on the mythological stranger.",
  personalContext:
    "I am writing because the Tate story shows how public safety coverage can miss the point when it treats sexual exploitation as celebrity scandal while registry politics keeps families focused on strangers rather than access, coercion, power, and institutional tolerance.",
  source: {
    title: "Everyone Saw the Warning Signs",
    path: "/blog/everyone-saw-the-warning-signs",
    type: "blog",
  },
};

export default function EveryoneSawTheWarningSigns(): JSX.Element {
  return (
    <BlogLayout
      title="Everyone Saw the Warning Signs"
      description="The Tate story is not just about celebrity scandal. It exposes how stranger-danger registry politics points families away from the visible ecosystems of power, coercion, misogyny, and exploitation that real prevention must confront."
      keywords="Andrew Tate public safety, Andrew Tate allegations, stranger danger myth, registry politics, sexual exploitation ecosystem, young women and coercion, manosphere misogyny, public safety theater, trafficking allegations, grooming and coercion"
      date="Jul 27, 2026"
      readTime="8–10 min read"
      badge="📝 BLOG"
      lede="The warning signs were not hidden. They were branded, monetized, defended, and sold as masculinity."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="urgent" title="The point" icon="⚠️">
          <p>
            Registry politics points families toward the mythological stranger.
            The Tate story points toward something much more dangerous and much
            more visible: an ecosystem of misogyny, coercion, sexual labor,
            celebrity worship, platform profit, and institutional hesitation.
            Real prevention has to look where the power is.
          </p>
        </Callout>

        <p>
          <strong>
            Registry politics points families toward the mythological stranger.
            Real prevention would point them toward the ecosystem the Tates
            exemplified.
          </strong>
        </p>

        <p>
          The most revealing thing about the Andrew Tate story is not that
          prosecutors now describe a sprawling pattern of alleged sexual
          exploitation. The most revealing thing is how much of the warning
          system was already public.
        </p>

        <p>
          Tate did not become famous by hiding contempt for girls and young
          women. He became famous by branding it, monetizing it, and selling it
          back to millions of men as strength. He built a celebrity identity out
          of domination, sexual entitlement, humiliation, evasion, and control.
          And for years, a large audience did not treat that as a warning sign.
        </p>

        <p>They treated it as content.</p>
        <p>They treated it as masculinity.</p>
        <p>They treated it as hustle.</p>
        <p>They treated it as entertainment.</p>

        <p>
          That is what makes the public-safety conversation around this case so
          damning. While registry politics keeps training families to scan maps
          for strangers, one of the loudest misogyny brands in the world was
          allegedly building, marketing, and defending an ecosystem of sexual
          exploitation in plain sight.
        </p>

        <p>
          The Tates deny the allegations against them. They are presumed
          innocent unless convicted. That matters. Legal process matters.
        </p>

        <p>
          But the public-safety lesson does not require us to prejudge the
          criminal case. It requires us to ask a different question:
        </p>

        <p>
          <strong>
            Why did so many people need prosecutors to tell them that this
            ecosystem was dangerous?
          </strong>
        </p>

        <PullQuote>
          “The warning signs were not hidden. They were branded, monetized,
          defended, and sold as masculinity.”
        </PullQuote>

        <BandHeader title="The Stranger Was Never the Whole Story" icon="🗺️" />

        <p>
          American sex-offense policy is built around a familiar image: the
          lurking stranger.
        </p>

        <p>
          The stranger near the bus stop.
          <br />
          The stranger in the van.
          <br />
          The stranger on the registry map.
          <br />
          The stranger whose address must be broadcast so families can feel
          informed.
        </p>

        <p>
          That story is emotionally powerful. It is also{" "}
          <a
            className={linkCls}
            href="https://ojp.gov/library/publications/sex-offenses-and-offenders-analysis-data-rape-and-sexual-assault"
            target="_blank"
            rel="noopener noreferrer"
          >
            dangerously incomplete
          </a>
          .
        </p>

        <p>
          The problem is not that strangers can never cause harm. Of course they
          can. The problem is that stranger-danger politics has consumed so much
          public attention that it leaves families less prepared to recognize
          the forms of risk that grow through access, trust, secrecy, grooming,
          status, money, platforms, and institutional tolerance.
        </p>

        <p>The Tate story is an almost grotesque example of that failure.</p>

        <p>
          Here was not a hidden figure quietly evading public awareness. Here
          was a global celebrity whose brand openly celebrated misogyny and
          control. Here was a business model reportedly built around young women
          performing online sexual labor. Here was a cultural machine that sold
          boys and men the idea that domination was confidence, cruelty was
          honesty, and girls and young women were assets to be managed.
        </p>

        <p>And millions applauded.</p>

        <p>
          That is not a failure of visibility. It is a failure of moral
          recognition.
        </p>

        <Callout variant="policy" title="What prevention misses" icon="🔎">
          <p>
            The problem is that stranger-danger politics has consumed so much
            public attention that it leaves families less prepared to recognize
            the forms of risk that grow through access, trust, secrecy,
            grooming, status, money, platforms, and institutional tolerance.
          </p>
        </Callout>

        <PullQuote>
          “That is not a failure of visibility. It is a failure of moral
          recognition.”
        </PullQuote>

        <BandHeader
          title="The Allegations Are Not Minor, and They Are Not Abstract"
          icon="⚖️"
        />

        <p>
          On July 19, 2026, the{" "}
          <a
            className={linkCls}
            href="https://www.cps.gov.uk/national-news/news/cps-decides-prosecute-tate-brothers-additional-sexual-offences"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crown Prosecution Service announced
          </a>{" "}
          that it had authorized additional charges against Andrew and Tristan
          Tate, adding to earlier charges already announced in 2025. The CPS
          said Andrew Tate faces additional counts including rape, arranging or
          facilitating trafficking for sexual exploitation, assault occasioning
          actual bodily harm, and offenses related to indecent images of a child
          and extreme pornography. Tristan Tate faces additional counts
          including rape, sexual assault, and arranging or facilitating
          trafficking for sexual exploitation. The alleged conduct spans 2010
          through 2017 and involves seven alleged victims across the cases. The
          CPS also emphasized that proceedings are active and that the
          defendants have the right to a fair trial.
        </p>

        <p>
          After their arrest in Miami, the brothers appeared in federal court on
          July 20, 2026. According to the{" "}
          <a
            className={linkCls}
            href="https://apnews.com/article/andrew-tristan-tate-sex-trafficking-rape-uk-miami-3a3748e075f49b00f286a003f5103485"
            target="_blank"
            rel="noopener noreferrer"
          >
            Associated Press
          </a>
          , they are fighting extradition to the United Kingdom and remain in
          federal detention, with another hearing set for July 27.
        </p>

        <p>Those are the formal legal facts. They deserve careful language.</p>

        <p>
          But the public record around the Tates is not limited to court dates
          and charge sheets. In a major{" "}
          <a
            className={linkCls}
            href="https://www.newyorker.com/magazine/2026/06/15/andrew-tates-empire-of-abuse"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Yorker investigation
          </a>
          , Heidi Blake described a wider media and business empire built around
          allegations of coercion, abuse, misogyny, and sexual exploitation.{" "}
          <a
            className={linkCls}
            href="https://www.newyorker.com/podcast/political-scene/the-abuse-that-fuelled-andrew-tates-media-empire"
            target="_blank"
            rel="noopener noreferrer"
          >
            The New Yorker’s podcast summary
          </a>{" "}
          says Blake’s reporting examined Tate’s media empire, allegations of
          rape, assault, coercion, and sex trafficking across multiple
          countries, and the possibility that British, Romanian, and American
          officials ignored exploitation and violence.
        </p>

        <p>
          That is the point this case forces into view: the alleged harm did not
          exist in isolation from the public brand. The brand helped normalize
          the conditions around it.
        </p>

        <Callout variant="legal" title="Legal care" icon="⚖️">
          <p>
            The Tates deny the allegations against them. They are presumed
            innocent unless convicted. Legal process matters. The public-safety
            lesson does not require us to prejudge the criminal case.
          </p>
        </Callout>

        <BandHeader title="The Warning Signs Were the Product" icon="📣" />

        <p>
          There is a certain kind of public figure who does not hide the red
          flags because the red flags are the marketing strategy.
        </p>

        <p>
          Andrew Tate’s public persona was not accidentally misogynistic. It was
          not a misunderstood side comment. It was not a private defect
          discovered after the fact. Misogyny was central to the product.
        </p>

        <p>That should matter to any serious public-safety conversation.</p>

        <p>
          A society that claims to be hypervigilant about sexual danger somehow
          found room to turn an openly woman-hating influencer into a
          multimillionaire celebrity. Boys watched him. Men defended him.
          Platforms distributed him. Political figures flirted with his
          audience. Media outlets debated whether he was dangerous,
          misunderstood, censored, or merely provocative.
        </p>

        <p>Meanwhile, the basic message was not subtle.</p>

        <p>
          Girls and young women were talked about as property.
          <br />
          Control was reframed as leadership.
          <br />
          Exploitation was repackaged as entrepreneurship.
          <br />
          Cruelty became a brand identity.
          <br />
          Sexual entitlement became a business funnel.
        </p>

        <p>And the culture blinked.</p>

        <p>Or worse, it clicked subscribe.</p>

        <p>
          This is what registry politics cannot teach us to see. A registry can
          point to a person with a prior conviction. It cannot teach a society
          to recognize a sexual-harm economy while it is being livestreamed,
          merchandised, memed, defended, and sold as empowerment.
        </p>

        <Callout variant="warning" title="The ecosystem" icon="📡">
          <p>
            Andrew Tate’s public persona was not accidentally misogynistic. It
            was not a misunderstood side comment. It was not a private defect
            discovered after the fact. Misogyny was central to the product.
          </p>
        </Callout>

        <BandHeader
          title="These Were Girls and Young Women, Not Fully Formed Adults With Equal Power"
          icon="🧭"
        />

        <p>The language matters here.</p>

        <p>
          This was not simply a story about “women” in the flattened adult sense
          that lets the audience imagine equal bargaining power, clean consent,
          and independent choices made from a position of safety. The reporting
          and allegations repeatedly involve girls and young women — teenagers,
          barely adults, young women isolated from home, young women allegedly
          pressured into sexual labor, young women whose dependence could be
          cultivated before it was exploited.
        </p>

        <p>
          That distinction matters because predatory systems often do not begin
          with a dramatic kidnapping. They begin with attention. Flattery.
          Romance. Status. Travel. Promises. Money. The slow removal of other
          options. The gradual destruction of objections. The conversion of
          affection into labor.
        </p>

        <p>
          A young woman may be over the legal age of consent and still be
          groomed. She may be old enough for a man to claim the law is on his
          side and still be too young, isolated, dependent, frightened, or
          manipulated to meaningfully stand on equal ground. She may appear on
          camera and still be operating inside a system of coercion. She may
          technically be able to leave and still be trapped by money, geography,
          threats, shame, immigration status, housing, loyalty, fear, or the
          belief that no one will care.
        </p>

        <p>
          That is why the phrase “legal age” can become a moral escape hatch. It
          lets the public avoid the harder question: who had power, who had
          options, who had control, and who profited?
        </p>

        <p>
          The public does not need to convict the Tates in the comment section
          to recognize the pattern. Credible reporting describes an alleged
          system built around young women’s vulnerability, sexual labor,
          obedience, isolation, and monetization. That is exactly the kind of
          danger registry politics teaches people not to see, because it does
          not look like the mythological stranger near the bus stop. It looks
          like fame. Money. Travel. Romance. Hustle culture. A private compound.
          A camera. A fan base. A man calling domination success.
        </p>

        <Callout variant="research" title="The harder question" icon="🧩">
          <p>
            A young woman may be over the legal age of consent and still be
            groomed. She may be legally an adult and still be isolated,
            manipulated, threatened, financially trapped, or dependent on the
            person exploiting her.
          </p>
        </Callout>

        <BandHeader title="“Legal Age” Is Not a Magic Wand" icon="🚫" />

        <p>
          Part of the ugliness of this ecosystem is the way it hides behind
          technical legality.
        </p>

        <p>
          The law draws age lines because it has to. Public morality cannot stop
          there. A girl does not become immune to grooming the moment a birthday
          passes. A young woman does not become exploitation-proof because
          someone can point to a statute. And consent is not made meaningful by
          pretending that money, age, isolation, threats, dependence, violence,
          immigration status, and geography do not shape the choices available
          to her.
        </p>

        <p>The question is not only whether someone was “legal.”</p>

        <p>
          <strong>The question is whether she was free.</strong>
        </p>

        <p>
          A young woman can be over the age of consent and still be coerced. She
          can be legally an adult and still be isolated, manipulated,
          threatened, financially trapped, or dependent on the person exploiting
          her. She can appear on camera and still be operating inside a system
          of control. She can be in another country and still be stuck.
        </p>

        <p>
          That is why “but she was legal” is such a thin and morally bankrupt
          answer to exploitation. It turns the law into a shield for the
          powerful instead of a floor for basic protection.
        </p>

        <p>
          The public has been trained to imagine sexual danger as a sudden
          attack by a stranger. But a great deal of sexual harm is slower than
          that. It is relational. It is economic. It is reputational. It is
          built through dependence and shame. It can be reinforced by
          immigration status, housing insecurity, online humiliation, threats,
          debt, isolation, and the fear that no one will believe you.
        </p>

        <p>
          The Tate story, as alleged and reported, is not just about individual
          criminal accusations. It is about an ecosystem where girls’ and young
          women’s bodies, vulnerability, youth, attention, and sexual labor
          could be converted into money and masculine status.
        </p>

        <p>
          And it is about how many people saw that ecosystem and called it
          success.
        </p>

        <PullQuote>
          “The question is not only whether someone was ‘legal.’ The question is
          whether she was free.”
        </PullQuote>

        <BandHeader title="This Is What Public Safety Theater Misses" icon="🎭" />

        <p>
          Public registries offer a simple story: danger has a name, an address,
          and a map pin.
        </p>

        <p>
          That simplicity is politically useful. It gives lawmakers something
          to expand, police something to enforce, media something to dramatize,
          and the public something to check. It creates the feeling of control.
        </p>

        <p>But the feeling of control is not the same as prevention.</p>

        <p>
          If a young woman is being recruited, isolated, groomed, threatened, or
          financially trapped, a registry map may tell her nothing useful. If an
          influencer is teaching millions of boys to view girls and young women
          as disposable, a registry map does not interrupt the lesson. If
          platforms profit from misogynistic spectacle, a registry map does not
          change the incentive. If powerful men can use celebrity, money,
          lawyers, political proximity, and international mobility to delay
          accountability, a registry map does not confront that power.
        </p>

        <p>That is the contradiction.</p>

        <p>
          We have built an enormous public-safety ritual around the idea that
          the public must be protected from the known, marked, publicly listed
          person. But when danger presents itself through fame, wealth, access,
          image, coercion, and cultural permission, the same society often
          becomes confused.
        </p>

        <p>
          It asks whether the man is entertaining.
          <br />
          Whether he is being cancelled.
          <br />
          Whether he is good for clicks.
          <br />
          Whether his fans will be angry.
          <br />
          Whether his politics are useful.
          <br />
          Whether his “message” speaks to young men.
        </p>

        <p>
          Those questions are not prevention. They are complicity dressed up as
          curiosity.
        </p>

        <Callout variant="policy" title="The contradiction" icon="🗺️">
          <p>
            A registry map does not interrupt an influencer teaching millions
            of boys to view girls and young women as disposable. It does not
            change platform incentives or confront the power created by
            celebrity, money, lawyers, political proximity, and international
            mobility.
          </p>
        </Callout>

        <BandHeader title="The Ecosystem Had Defenders" icon="🕸️" />

        <p>
          The Tate phenomenon did not become powerful because two brothers
          uploaded videos into a vacuum.
        </p>

        <p>It became powerful because an ecosystem rewarded them.</p>

        <p>
          Social platforms amplified them until public pressure and platform
          rules forced partial removals. Fan accounts recycled their clips.
          Young men treated domination as advice. Podcasters and influencers
          converted controversy into attention. Political actors saw a useful
          audience. Media cycles turned misogyny into debate content. And a
          broader culture kept pretending that the issue was whether Tate was
          “problematic,” instead of whether millions of people were being taught
          to confuse abuse with masculinity.
        </p>

        <p>
          This matters because sexual harm does not grow only in private.
          Sometimes it grows in public, surrounded by applause.
        </p>

        <p>
          Sometimes the grooming is not just of individual girls or young
          women. Sometimes an entire audience is groomed to stop recognizing
          cruelty.
        </p>

        <p>That is the ecosystem real prevention must confront.</p>

        <p>
          Not only the person accused of harm.
          <br />
          Not only the platform that hosted him.
          <br />
          Not only the men who paid him.
          <br />
          Not only the political figures who found him useful.
          <br />
          Not only the institutions that allegedly moved too slowly.
        </p>

        <p>All of it.</p>

        <p>The whole machine.</p>

        <Callout variant="warning" title="The ecosystem" icon="🕸️">
          <p>
            Platforms amplified it. Fan accounts recycled it. Influencers
            converted controversy into attention. Political actors saw a useful
            audience. Media cycles turned misogyny into debate content.
          </p>
        </Callout>

        <PullQuote>
          “Sometimes the grooming is not just of individual girls or young
          women. Sometimes an entire audience is groomed to stop recognizing
          cruelty.”
        </PullQuote>

        <BandHeader title="The Registry Points the Wrong Way" icon="↗️" />

        <p>
          This is where the Tate story collides directly with registry politics.
        </p>

        <p>
          For decades, the public has been told that safety depends on knowing
          where “sex offenders” live. That frame does several things at once. It
          reduces people to a permanent label. It suggests that past conviction
          status is the central way to identify risk. It pushes fear outward,
          toward strangers and outsiders. And it allows institutions, families,
          platforms, and communities to avoid harder questions about access,
          prevention, and power.
        </p>

        <p>But the Tate story points in the opposite direction.</p>

        <p>
          It points toward influence.
          <br />
          It points toward money.
          <br />
          It points toward sexual labor markets.
          <br />
          It points toward misogynistic indoctrination.
          <br />
          It points toward platforms and profit.
          <br />
          It points toward international mobility.
          <br />
          It points toward lawyers, public relations, and political proximity.
          <br />
          It points toward the audience itself.
        </p>

        <p>
          Registry politics points families toward the mythological stranger.
          Real prevention would point them toward the ecosystem the Tates
          exemplified.
        </p>

        <p>
          That is not a minor distinction. It is the difference between public
          safety as theater and public safety as actual prevention.
        </p>

        <PullQuote>
          “That is the difference between public safety as theater and public
          safety as actual prevention.”
        </PullQuote>

        <BandHeader title="Accountability Cannot Be Selective" icon="⚖️" />

        <p>There is another contradiction here that should make people uncomfortable.</p>

        <p>
          Ordinary people convicted of sex offenses can face years, decades, or
          lifetimes of public branding, housing exclusion, employment barriers,
          banishment zones, and social death — often after completing their
          sentence. The public is told this is necessary because safety demands
          maximum visibility and permanent suspicion.
        </p>

        <p>
          But when wealthy or famous men are surrounded by public warning signs,
          the culture often becomes strangely patient.
        </p>

        <p>
          It wants nuance.
          <br />
          It wants debate.
          <br />
          It wants to separate the art from the artist, the message from the
          conduct, the brand from the harm.
          <br />
          It wants to know whether the accused man is being targeted.
          <br />
          It wants to know whether his fans have a point.
          <br />
          It wants to know whether the allegations are politically inconvenient.
        </p>

        <p>Due process belongs to everyone. That is not the problem.</p>

        <p>The problem is selective moral imagination.</p>

        <p>
          If society can understand complexity when the accused person is rich,
          famous, useful, or charismatic, then society can understand complexity
          when the person is poor, unknown, convicted, released, trying to work,
          trying to find housing, or trying to rebuild a life.
        </p>

        <p>
          And if society insists that sexual harm requires serious
          accountability, then that accountability cannot stop at the person
          already easy to hate. It has to reach the people and systems that
          normalize, monetize, excuse, and protect the conditions in which harm
          flourishes.
        </p>

        <p>That includes the audience.</p>

        <Callout
          variant="policy"
          title="Unequal accountability"
          icon="⚖️"
        >
          <p>
            Due process belongs to everyone. That is not the problem. The
            problem is selective moral imagination.
          </p>
          <p>
            <Link
              className={linkCls}
              to="/blog/register-every-crime-or-none"
            >
              Register Every Crime or None: The RECON Test for Public
              Registries
            </Link>{" "}
            examines the selective logic of public registry punishment.
          </p>
        </Callout>

        <PullQuote>
          “Due process belongs to everyone. That is not the problem. The problem
          is selective moral imagination.”
        </PullQuote>

        <BandHeader title="Anger Is Appropriate" icon="🔥" />

        <p>People should be angry about this.</p>

        <p>Not because anger is a substitute for evidence. It is not.</p>

        <p>
          People should be angry because the evidence keeps showing us that our
          public-safety imagination is too small. We keep building policy around
          the easiest villain while entire ecosystems of risk operate through
          legitimacy, money, status, secrecy, misogyny, and institutional
          failure.
        </p>

        <p>
          We should be angry that girls and young women were allegedly turned
          into inventory for a sexual economy and that millions were trained to
          see the men profiting from it as aspirational.
        </p>

        <p>
          We should be angry that young men were sold a worldview in which
          women’s humiliation was proof of male strength.
        </p>

        <p>
          We should be angry that sexual exploitation could be repackaged as
          entrepreneurship.
        </p>

        <p>
          We should be angry that platforms could profit from the spread of this
          ideology and then act surprised when people asked what it was
          producing.
        </p>

        <p>
          We should be angry that political culture can flirt with misogynistic
          celebrity when it is useful, then retreat into procedural distance
          when the consequences become harder to ignore.
        </p>

        <p>
          And we should be angry that public policy still points families toward
          the mythological stranger while failing to build the tools that would
          help them recognize coercion, grooming, exploitation, and abuse when
          those things come wrapped in fame, wealth, confidence, and a fan base.
        </p>

        <p>Anger is not the opposite of careful thinking.</p>

        <p>
          Sometimes anger is what happens when careful thinking finally catches
          up with what was obvious all along.
        </p>

        <PullQuote>
          “Anger is not the opposite of careful thinking.”
        </PullQuote>

        <BandHeader
          title="Real Prevention Has to Look Where the Power Is"
          icon="🔦"
        />

        <p>
          The answer is not to replace one panic with another. It is not to
          abandon due process. It is not to declare guilt by reputation. It is
          not to turn every high-profile allegation into public punishment
          before trial.
        </p>

        <p>The answer is to stop pretending that registries are a prevention plan.</p>

        <p>Real prevention would ask different questions.</p>

        <p>
          Who has access?
          <br />
          Who has power?
          <br />
          Who is isolated?
          <br />
          Who is being financially controlled?
          <br />
          Who is being sexualized before they can meaningfully understand the
          system around them?
          <br />
          Who is being taught that domination is masculinity?
          <br />
          Who profits from that lesson?
          <br />
          Who looked away because the money was good, the audience was large,
          or the politics were convenient?
        </p>

        <p>Those questions do not fit neatly on a registry map.</p>

        <p>But they are the questions that matter.</p>

        <p>
          The Tate story should not become another celebrity scandal that burns
          hot for a week and then disappears into the content machine that
          helped create it. It should force a more honest public-safety
          conversation.
        </p>

        <p>
          Not the comforting one.
          <br />
          Not the theatrical one.
          <br />
          Not the one that pretends danger is always somewhere else, attached
          to someone else, already labeled for us.
        </p>

        <p>The real question is not whether everyone knew every allegation.</p>

        <p>
          The question is why so many people saw the ecosystem and refused to
          call it dangerous.
        </p>

        <Callout variant="urgent" title="Real prevention" icon="🔦">
          <p>
            Real prevention has to look where the power is: access, isolation,
            financial control, sexualization, platform profit, cultural
            permission, and the institutions that look away.
          </p>
        </Callout>

        <PullQuote>
          “The real question is not whether everyone knew every allegation. The
          question is why so many people saw the ecosystem and refused to call
          it dangerous.”
        </PullQuote>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            Crown Prosecution Service —{" "}
            <a
              className={linkCls}
              href="https://www.cps.gov.uk/national-news/news/cps-decides-prosecute-tate-brothers-additional-sexual-offences"
              target="_blank"
              rel="noopener noreferrer"
            >
              CPS decides to prosecute Tate brothers with additional sexual
              offences
            </a>
            . Official charging announcement, alleged-offense dates,
            alleged-victim count, extradition request, and fair-trial warning.
          </li>
          <li>
            Associated Press —{" "}
            <a
              className={linkCls}
              href="https://apnews.com/article/andrew-tristan-tate-sex-trafficking-rape-uk-miami-3a3748e075f49b00f286a003f5103485"
              target="_blank"
              rel="noopener noreferrer"
            >
              report on the Miami extradition proceedings
            </a>
            . Federal-court appearance, detention status, extradition dispute,
            and scheduled hearing.
          </li>
          <li>
            The New Yorker —{" "}
            <a
              className={linkCls}
              href="https://www.newyorker.com/magazine/2026/06/15/andrew-tates-empire-of-abuse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrew Tate’s Empire of Abuse
            </a>
            . Investigative reporting on the broader media, business, coercion,
            exploitation, and misogyny ecosystem.
          </li>
          <li>
            The New Yorker —{" "}
            <a
              className={linkCls}
              href="https://www.newyorker.com/podcast/political-scene/the-abuse-that-fuelled-andrew-tates-media-empire"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Abuse That Fuelled Andrew Tate’s Media Empire
            </a>
            . Podcast summary of Heidi Blake’s reporting and the institutional
            questions it raises.
          </li>

          <li>
            Office of Justice Programs —{" "}
            <a
              className={linkCls}
              href="https://ojp.gov/library/publications/sex-offenses-and-offenders-analysis-data-rape-and-sexual-assault"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sex Offenses and Offenders: Analysis of Data on Rape and Sexual
              Assault
            </a>
            . Government research on victim-offender relationships and the
            limits of stranger-centered framing.
          </li>
          <li>
            Bureau of Justice Statistics —{" "}
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/sexual-assault-young-children-reported-law-enforcement-victim-incident-and"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sexual Assault of Young Children as Reported to Law Enforcement
            </a>
            . Government research on child victims, incidents, offenders, and
            known-offender patterns.
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
              to="/blog/register-every-crime-or-none"
            >
              Register Every Crime or None: The RECON Test for Public
              Registries
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/resources/accountability-watch"
            >
              SOLAR’s Accountability Watch archive
            </Link>
          </li>
        </ul>

        <p>
          Read more about{" "}
          <Link className={linkCls} to="/advocacy">
            SOLAR’s public-safety framework
          </Link>{" "}
          or browse{" "}
          <Link className={linkCls} to="/blog">
            related SOLAR analysis
          </Link>
          .
        </p>
      </article>
    </BlogLayout>
  );
}