// PASTE 1 OF 4 — New blog page TSX file, part 1

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
  recipientId: "state-lawmaker",
  primaryPositionId: "one-size-fits-all",
  secondaryPositionId: "punitive",
  formatId: "email",
  headline: "Ask lawmakers to make registry review evidence-based",
  description:
    "This article shows that states already know how to create review processes that consider time, conduct, rehabilitation, and current risk. Lawmakers can apply that same principle to long-term and lifetime registration without making relief automatic.",
  recommendation: {
    audienceLabel: "state lawmakers",
    suggestion:
      "Ask state lawmakers to create a meaningful individualized review process for long-term or lifetime registration, so continued public registration must be justified by current evidence rather than permanent status alone.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please support legislation creating an individualized review process for people subject to long-term or lifetime sex-offense registration. The process should allow decision-makers to consider time offense-free, age, treatment, conduct after conviction, stability, and current risk, without requiring automatic removal.",
  personalContext:
    "I am writing after reading SOLAR’s analysis of California’s new parole-board review process and the registry’s refusal to apply the same reassessment principle to people with sex offenses in their pasts.",
  source: {
    title:
      "Scott Peterson, California Parole, and the Registry’s Refusal to Believe in Change",
    path: "/blog/scott-peterson-california-parole-registry-refusal-believe-change",
    type: "blog",
  },
};

export default function ScottPetersonCaliforniaParoleRegistryRefusalBelieveChange(): JSX.Element {
  return (
    <BlogLayout
      title="Scott Peterson, California Parole, and the Registry’s Refusal to Believe in Change"
      description="California’s Scott Peterson parole controversy reveals a deeper registry double standard: states know how to reassess punishment, risk, and rehabilitation, but often refuse to apply that logic to people on sex-offense registries."
      keywords="Scott Peterson California parole registry, California parole, Scott Peterson, Laci Peterson, sex offender registry, lifetime registration, SORNA, Florida registry, individualized risk assessment, rehabilitation, registry reform"
      date="Aug 11, 2026"
      readTime="8 min read"
      badge="📝 BLOG"
      lede="California’s Scott Peterson parole controversy is not really about one man. It reveals a deeper contradiction: states know how to reassess time, rehabilitation, conduct, and current risk when they choose to, while registry law often refuses to ask the same question."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="🔎">
          <p>
            California’s new review process does not mean Scott Peterson will walk free,
            and this article does not argue that he should. The point is that California
            has shown states know how to build individualized reassessment systems without
            guaranteeing outcomes. Registry law often refuses that same principle,
            treating sex-offense convictions as permanent public identities rather than
            evidence that can be weighed against time, rehabilitation, conduct, and
            current risk.
          </p>
        </Callout>

        <p>Scott Peterson is not the point.</p>

        <p>He is the reason people are paying attention.</p>

        <p>
          California’s new parole-board process has entered the public conversation
          through one of the most recognizable murder cases in the country.{" "}
          <a
            className={linkCls}
            href="https://www.the-independent.com/news/world/americas/crime/laci-peterson-california-parole-free-serial-killers-b3031150.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laci Peterson’s family and other victims’ advocates
          </a>{" "}
          have warned that the policy could eventually place people convicted of
          notorious crimes inside a formal review process. Their fear is understandable.
          To a grieving family, the word “review” can sound like the state reopening a
          door that punishment was supposed to close.
        </p>

        <p>
          But the deeper issue is not whether Scott Peterson will ever leave prison. I do
          not know that. I am not arguing for it. And this piece does not depend on it.
        </p>

        <p>
          The deeper issue is that California has now made something visible: the state
          knows how to imagine individualized reassessment.
        </p>

        <p>
          It knows how to ask whether time matters. Whether age matters. Whether
          institutional conduct matters. Whether rehabilitation matters. Whether current
          risk should be evaluated with current evidence rather than frozen forever at
          the moment of conviction.
        </p>

        <p>That is not a scandal.</p>

        <p>That is what an evidence-based system should be willing to do.</p>

        <p>
          The scandal is that this same imagination so often disappears when the
          conviction is a sex offense.
        </p>

        <BandHeader title="Review is not release" icon="⚖️" />

        <p>
          California’s Board of Parole Hearings has adopted a{" "}
          <a
            className={linkCls}
            href="https://www.cdcr.ca.gov/bph/statutes/regulatory-changes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            new process for reviewing certain incarcerated people for possible
            recommendation for commutation or recall of sentence and resentencing
          </a>
          . The regulations are scheduled to take effect October 1, 2026. They do not
          automatically release anyone. They create a process for possible recommendation.
        </p>

        <p>That distinction matters.</p>

        <PullQuote>Review is not release.</PullQuote>

        <p>
          Review is not release. Review is not forgiveness. Review is not exoneration.
          Review is not a promise that the person will ever walk out of prison.
        </p>

        <p>Review means the state is willing to ask a question.</p>

        <PullQuote>Who is this person now?</PullQuote>

        <p>Who is this person now?</p>

        <p>
          That is the part worth noticing. Some answers will be no. Some people have not
          changed. Some cases should not come out differently.
        </p>

        <p>But the question itself matters.</p>

        <p>
          A system that can ask the question has already accepted a principle: people are
          not frozen forever at the worst moment of their lives. Time may produce
          evidence. Age may change risk. Conduct may reveal something. Rehabilitation may
          matter. The person standing before the state decades later may not be reducible
          to the person sentenced long ago.
        </p>

        <p>California is not wrong to recognize that possibility.</p>

        <p>California is right.</p>

        <p>
          The problem is that American registry law so often refuses to recognize the
          same possibility.
        </p>

        <BandHeader title="The state already knows how to do this" icon="🔍" />

        <p>
          That is what makes the Peterson controversy useful, even for people who have no
          opinion about Peterson himself.
        </p>

        <p>
          The state already knows how to build a review process that does not guarantee an
          outcome.
        </p>

        <p>
          It knows how to say: after enough time, we will look. We will consider evidence.
          We will distinguish one person from another. We will not pretend the original
          crime has disappeared, but we also will not pretend that nothing after the crime
          can ever matter.
        </p>

        <p>That is the principle.</p>

        <p>
          And once the state accepts that principle for people convicted of the most
          serious crimes, it becomes harder to defend its refusal to apply the same logic
          to people on sex-offense registries.
        </p>

        <p>
          The point is not that murder and sex offenses are the same. They are not. Harm
          differs. Facts differ. Victims differ. Sentences differ. Risk differs.
          Public-safety needs differ.
        </p>

        <p>
          The point is that individualized reassessment is either a legitimate
          public-safety tool or it is not.
        </p>

        <p>
          If it is responsible enough to consider after decades of incarceration for
          people convicted of extreme violence, then it cannot be dismissed as naïve,
          dangerous, or unserious when people convicted of sex offenses ask for the same
          basic principle.
        </p>

        <p>Not automatic removal.</p>

        <p>Not denial of harm.</p>

        <p>Not a shortcut around accountability.</p>

        <p>A meaningful chance to show who they are now.</p>

// PASTE 2 OF 4 — New blog page TSX file, part 2

        <BandHeader title="The registry is built to resist that question" icon="🧱" />

        <p>
          Sex-offense registration is not just a collection of different state
          experiments. It rests on a federal architecture that already assumes long-term,
          and sometimes lifetime, public status.
        </p>

        <p>
          Under SORNA,{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/registration-frequently-asked-questions"
            target="_blank"
            rel="noopener noreferrer"
          >
            the federal minimum registration periods are 15 years for Tier I, 25 years
            for Tier II, and life for Tier III
          </a>
          . The federal government also ties substantial implementation to{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/faqs"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal funding consequences
          </a>
          , which gives states a strong incentive to maintain registry systems inside
          that national framework.
        </p>

        <p>
          States still vary. Some create tiers. Some create limited petition pathways.
          Some publish more information than others. Some add residence restrictions,
          travel burdens, internet-identifier reporting, driver’s license markings, or
          local rules that go far beyond the federal baseline.
        </p>

        <p>But the larger structure is clear.</p>

        <p>
          The registry is not ordinary supervision. It is not simply a sentence being
          served. It is a long-term status system.
        </p>

        <p>
          And in many jurisdictions, that status system does not meaningfully ask the
          question California is now willing to ask in the prison context.
        </p>

        <p>Who is this person now?</p>

        <p>Instead, the registry asks a much narrower question.</p>

        <p>What was the label then?</p>

        <p>
          Once that label attaches, the rest of the person’s life can become secondary.
          Completion of sentence becomes secondary. Completion of supervision becomes
          secondary. Age becomes secondary. Treatment becomes secondary. Stability
          becomes secondary. Decades without another offense become secondary.
        </p>

        <PullQuote>The label does the work.</PullQuote>

        <p>The label does the work.</p>

        <BandHeader
          title="California has already admitted that blanket permanence is too blunt"
          icon="📜"
        />

        <p>California itself proves the point.</p>

        <p>
          California is not the harshest registry state. In fact, California has already
          moved away from universal lifetime registration.{" "}
          <a
            className={linkCls}
            href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB384"
            target="_blank"
            rel="noopener noreferrer"
          >
            SB 384 created a tiered registry structure for adults: 10 years, 20 years,
            and lifetime
          </a>
          .
        </p>

        <p>
          That reform matters. It was an admission that one-size-fits-all lifetime
          registration was too blunt. It recognized that every person, offense,
          circumstance, and risk profile should not be treated identically forever.
        </p>

        <p>
          California has also written some individualized factors into its{" "}
          <a
            className={linkCls}
            href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=290.5."
            target="_blank"
            rel="noopener noreferrer"
          >
            registration-termination process
          </a>
          . In certain petition proceedings, courts may consider conduct before and after
          conviction, the time during which the person has not reoffended, treatment
          completion, and current risk assessment information. Those are exactly the
          kinds of facts an evidence-based system should consider.
        </p>

        <p>So the critique is not that California has done nothing.</p>

        <p>
          The critique is that California has not carried its own principle far enough.
        </p>

        <p>
          If the state can create a structured review process after 25 years for people
          serving some of the most severe sentences it can impose, then why should
          lifetime registration begin from a presumption that, for some people, no amount
          of time can require a comparable reassessment?
        </p>

        <p>
          Why does the state know how to ask better questions in one setting and then stop
          asking them in another?
        </p>

        <BandHeader title="The problem is bigger than California" icon="🗺️" />

        <p>
          California shows that states know how to build individualized review when they
          choose to.
        </p>

        <p>Other jurisdictions show how often those tools are withheld.</p>

        <p>
          Across the country, registry systems still treat the original conviction as the
          controlling fact long after prison, supervision, and formal punishment have
          ended. Relief may be unavailable, narrow, discretionary, delayed for decades,
          or functionally unreachable for many people. Public registration can continue
          not because the state has proved that the person remains dangerous today, but
          because the category itself is treated as enough.
        </p>

        <p>Florida is one example of that broader permanence problem.</p>

        <p>
          <a
            className={linkCls}
            href="https://www.flsenate.gov/Laws/Statutes/2025/943.0435"
            target="_blank"
            rel="noopener noreferrer"
          >
            Florida law states that, unless otherwise specifically provided, a person
            classified as a sexual offender must maintain registration for life unless
            the person receives a full pardon or has the qualifying conviction set aside
            in postconviction proceedings
          </a>
          .
        </p>

        <p>For ordinary purposes, that is permanence.</p>

        <p>
          Not supervision for a defined term. Not registration until the state proves
          continued need. Not a public-safety measure that must justify itself with
          current evidence.
        </p>

        <p>A life status.</p>

        <p>
          And Florida does not meaningfully distinguish, from the standpoint of lifetime
          public registration, between vastly different kinds of conduct. The person
          swept into a qualifying offense from a consensual relationship in their teens,
          the person convicted of a non-contact internet offense, and the person
          convicted of hands-on abuse may have radically different facts, histories,
          risks, and lives after conviction.
        </p>

        <p>But the registry collapses those distinctions.</p>

        <p>The public label remains.</p>

        <p>
          The person is not primarily assessed as an individual. The person is sorted
          into a category. And once the category attaches, the state may treat the
          original conviction as the most important fact forever.
        </p>

        <p>That is not individualized public safety.</p>

        <PullQuote>That is category punishment.</PullQuote>

        <p>That is category punishment.</p>

        <BandHeader title="Murder can have an endpoint. The registry often does not." icon="⏳" />

        <p>
          The inconsistency becomes even harder to defend when we remember that people
          convicted of murder are routinely released from prison across the United
          States.
        </p>

        <p>
          That does not mean murder is treated lightly. It does not mean the harm
          disappears. It does not mean victims’ families stop grieving. It means the
          criminal legal system has long recognized that even very serious punishment can
          have an endpoint.
        </p>

        <p>
          The{" "}
          <a
            className={linkCls}
            href="https://bjs.ojp.gov/library/publications/time-served-state-prison-2016"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Justice Statistics reported that among people released from state
            prison in 2016, those sentenced for murder or non-negligent manslaughter
            served an average of 15 years before initial release
          </a>
          ; BJS also reported that 70 percent of those released after sentences for
          murder or non-negligent manslaughter served less than 20 years before initial
          release.
        </p>

        <p>
          When people convicted of murder return to the community, they may face parole,
          supervision, stigma, employment barriers, housing barriers, and ordinary
          criminal-record consequences.
        </p>

        <p>But they are not generally placed on a public murder registry for life.</p>

        <p>
          The state does not usually maintain a permanent public website identifying them
          as murderers. It does not usually require them to appear in person several
          times a year to verify a public label. It does not usually require neighbors,
          employers, schools, parks, hotels, licensing agencies, and online users to
          encounter them first through a government warning page.
        </p>

        <p>For sex offenses, the opposite model has become normal.</p>

        <p>The sentence can end.</p>

        <p>Supervision can end.</p>

        <p>Decades can pass.</p>

        <p>But the label remains.</p>

// PASTE 3 OF 4 — New blog page TSX file, part 3

        <BandHeader title="That is the real double standard" icon="⚖️" />

        <p>
          The easy version of this argument would be: “Murderers get second chances, but
          people on the registry do not.”
        </p>

        <p>
          That is emotionally understandable, but it is not quite the point.
        </p>

        <p>
          The deeper point is that American law can imagine punishment ending for murder.
          It can imagine review after decades for people convicted of notorious violence.
          It can imagine a person standing before the state as more than the crime.
        </p>

        <p>
          But for sex offenses, the law often converts the conviction into a permanent
          public identity.
        </p>

        <p>Some crimes are treated as terrible things a person did.</p>

        <p>Sex offenses are often treated as proof of what a person permanently is.</p>

        <p>That difference matters.</p>

        <p>
          It is why the registry can survive even when it fails to operate like real
          prevention. It is why broad restrictions can be defended even when they
          destabilize housing, employment, family support, and reintegration. It is why
          individualized evidence can be dismissed as irrelevant before it is even heard.
        </p>

        <p>Because the registry does not merely remember a conviction.</p>

        <p>It brands a status.</p>

        <p>
          And status systems do not like reassessment. Reassessment threatens the whole
          premise. If the person can change, if risk can decline, if decades of lawful
          conduct can matter, then the label can no longer do all the work.
        </p>

        <p>The state would have to ask better questions.</p>

        <BandHeader title="The question is not whether everyone has changed" icon="🧭" />

        <p>
          No serious registry reform argument requires pretending that every person has
          changed.
        </p>

        <p>That is not the demand.</p>

        <p>
          Some people may still pose serious risk. Some people may not have done the work.
          Some cases may justify continued restrictions. Some petitions should be denied.
          Some forms of supervision may be lawful and necessary.
        </p>

        <p>But none of that justifies refusing to ask the question.</p>

        <p>
          The existence of hard cases does not excuse a system built on permanent
          assumptions. The existence of risk does not justify ignoring evidence. The
          existence of serious harm does not require the state to pretend that time, age,
          treatment, stability, and conduct after conviction are meaningless.
        </p>

        <p>
          A serious public-safety system should be able to say yes in some cases, no in
          others, and explain why.
        </p>

        <p>That is what individualized review is for.</p>

        <BandHeader title="What California has shown" icon="🔎" />

        <p>
          That is why California’s new process should not be dismissed simply because it
          is controversial.
        </p>

        <p>
          The principle underneath it is worth defending: punishment and public safety
          should be capable of looking at the person who exists now, not only the person
          who was sentenced decades ago.
        </p>

        <p>
          California has shown that the government can build a process without promising
          an outcome.
        </p>

        <p>It can create review without guaranteeing release.</p>

        <p>It can consider rehabilitation without erasing harm.</p>

        <p>
          It can ask whether continued punishment remains justified while still
          acknowledging the original crime.
        </p>

        <p>Good.</p>

        <p>Now apply that principle honestly.</p>

        <p>
          Apply it to people whose sentences ended years ago. Apply it to people who
          completed supervision. Apply it to people who have lived offense-free for
          decades. Apply it to people whose current risk bears little resemblance to the
          public myth attached to their label. Apply it to people whose conduct was
          serious enough to punish, but not serious enough to justify permanent public
          branding without meaningful reassessment.
        </p>

        <p>Do not guarantee relief.</p>

        <PullQuote>Ask the question.</PullQuote>

        <p>Ask the question.</p>

        <BandHeader title="The registry’s refusal to believe in change" icon="🔓" />

        <p>The point is not that Scott Peterson should be released.</p>

        <p>Nor is this about mercy for any one person.</p>

        <p>
          California has publicly revealed something registry law usually tries to hide:
          the state knows how to imagine change when it wants to.
        </p>

        <p>
          It knows how to create a process. It knows how to weigh evidence. It knows how
          to consider time. It knows how to distinguish review from release.
        </p>

        <p>But for people on registries, the law too often forgets all of that.</p>

        <p>
          It treats a conviction as a permanent public identity. It treats risk as fixed.
          It treats rehabilitation as beside the point. It treats decades of lawful
          conduct as legally secondary to the original label.
        </p>

        <p>That is not evidence-based safety.</p>

        <PullQuote>That is permanent punishment wearing the language of prevention.</PullQuote>

        <p>That is permanent punishment wearing the language of prevention.</p>

        <PullQuote>
          A state that can imagine individualized reassessment for people sentenced to die
          in prison cannot credibly insist that reassessment becomes dangerous or
          irrelevant when the conviction is a sex offense.
        </PullQuote>

        <p>
          A state that can imagine individualized reassessment for people sentenced to die
          in prison cannot credibly insist that reassessment becomes dangerous or
          irrelevant when the conviction is a sex offense.
        </p>

        <p>
          The scandal is not that California can imagine review for people convicted of
          terrible crimes.
        </p>

        <p>
          The scandal is that, for so many people on registries, the law still cannot
          imagine change at all.
        </p>

// PASTE 4 OF 4 — New blog page TSX file, part 4

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and related reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.the-independent.com/news/world/americas/crime/laci-peterson-california-parole-free-serial-killers-b3031150.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Independent’s reporting on Laci Peterson’s family and the California
              parole-board controversy
            </a>{" "}
            — reporting on the public opposition involving Laci Peterson’s family,
            victims’ advocates, and the Scott Peterson case.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.cdcr.ca.gov/bph/statutes/regulatory-changes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              California Board of Parole Hearings regulatory changes
            </a>{" "}
            — the adopted commutation and recall-of-sentence recommendation assessment
            process and its October 1, 2026 effective date.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.cdcr.ca.gov/parole/registration-requirements/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDCR registration requirements summary
            </a>{" "}
            — California’s tier-based registration structure and petition framework.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=290.5."
              target="_blank"
              rel="noopener noreferrer"
            >
              California Penal Code section 290.5
            </a>{" "}
            — registration-termination procedures and individualized factors including
            conduct, time without reoffense, treatment, and current risk.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB384"
              target="_blank"
              rel="noopener noreferrer"
            >
              SB 384
            </a>{" "}
            — California’s transition from universal lifetime registration to adult
            registration tiers of at least 10 years, at least 20 years, and life.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/registration-frequently-asked-questions"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ SMART Office Registration FAQs
            </a>{" "}
            — SORNA’s federal minimum registration periods, verification frequency, and
            limited federal reduction provisions.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://smart.ojp.gov/faqs"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOJ SMART Office SORNA implementation FAQs
            </a>{" "}
            — the federal implementation framework and funding consequences for
            jurisdictions that do not substantially implement SORNA.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.flsenate.gov/Laws/Statutes/2025/943.0435"
              target="_blank"
              rel="noopener noreferrer"
            >
              Florida Statutes section 943.0435
            </a>{" "}
            — Florida registration duties, lifetime-registration language, and statutory
            relief provisions.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://bjs.ojp.gov/library/publications/time-served-state-prison-2016"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bureau of Justice Statistics’ 2016 time-served report
            </a>{" "}
            — time served before initial release from state prison, including people
            sentenced for murder or non-negligent manslaughter.
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
              Register Every Crime or None: The RECON Test for Public Registries
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/state-registry">
              State Registry Resources
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">
              SOLAR’s advocacy framework
            </Link>
          </li>
          <li>
            <Link
              className={linkCls}
              to="/resources/legislative-tracker"
            >
              Registry legislation and policy tracking
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}