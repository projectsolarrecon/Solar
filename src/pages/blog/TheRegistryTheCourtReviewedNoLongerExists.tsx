import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
  ContextualActionCard,
} from "../../components/solar";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "journalist",
  primaryPositionId: "punitive",
  secondaryPositionId: "one-size-fits-all",
  formatId: "letter-to-editor",
  headline:
    "Ask media outlets to cover the case as a constitutional test of the modern registry",
  description:
    "FAC v. Glass should not be covered only as another lawsuit filing. The important question is whether courts will evaluate Florida’s registry as it exists today — with layered restrictions, criminal enforcement, local ordinances, and lifetime consequences — rather than relying on assumptions from earlier registry cases.",
  recommendation: {
    audienceLabel: "a journalist, columnist, editorial board, or public commentator",
    suggestion:
      "Ask them to explain the case carefully: Smith v. Doe remains binding, Ellingburg did not overrule it, surviving dismissal would not prove FAC’s claims, and the real issue is whether today’s accumulated registry system still deserves the civil label courts applied to earlier regimes.",
    actionLabel: "Build a message from this article",
  },
  suggestedAsk:
    "Please cover FAC v. Glass as a serious constitutional test of the modern registry system. The public needs coverage that distinguishes allegations from findings, explains why prior precedent matters, and examines whether Florida’s current registry functions as civil regulation or continuing punishment in practice.",
  personalContext:
    "I am writing because registry policy affects real people, families, housing, employment, movement, and public safety. Accurate coverage should help readers understand what the lawsuit actually asks courts to decide without overstating either side.",
  source: {
    title: "The Registry the Court Reviewed No Longer Exists",
    path: "/blog/the-registry-the-court-reviewed-no-longer-exists",
    type: "blog",
  },
  jurisdiction: "Florida",
};

export default function TheRegistryTheCourtReviewedNoLongerExists(): JSX.Element {
  return (
    <BlogLayout
      title="The Registry the Court Reviewed No Longer Exists"
      description="Florida Action Committee’s new federal lawsuit is not just another registry challenge. It asks whether Florida’s modern system has become punishment in everything but name."
      keywords="Florida sex offender registry lawsuit, Florida Action Committee v. Glass, Smith v. Doe, sex offender registry constitutional challenge, Florida registry laws, Ex Post Facto registry, registry punishment, residency restrictions, presence restrictions, First Amendment registry laws, vagueness registry restrictions"
      date="Aug 13, 2026"
      readTime="11–13 minutes"
      badge="📝 BLOG"
      lede="Florida Action Committee’s new federal lawsuit is not just another registry challenge. It asks whether courts can keep treating today’s registry as though it were still the far simpler system reviewed decades ago."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="🔎">
          <p>
            FAC v. Glass matters because it operates on two tracks. One asks whether Florida’s
            accumulated registry restrictions have become punishment in substance. The other asks
            whether, even if courts continue calling the system civil, Florida has crossed independent
            constitutional lines involving vagueness, physical presence, travel, and speech.
          </p>
        </Callout>

        <p>Florida Action Committee’s new federal lawsuit is easy to describe too simply.</p>

        <p>
          The headline version is that FAC has filed a major constitutional challenge to Florida’s
          sex-offense registry system. That is true. The complaint, filed August 11, 2026, in the
          Northern District of Florida, names FDLE Commissioner Mark Glass and dozens of county and
          municipal defendants, and seeks declaratory and injunctive relief against state and local
          registry restrictions. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          ) (
          <a className={linkCls} href="https://floridaactioncommittee.org/florida-action-committee-files-landmark-federal-constitutional-challenge-to-floridas-sex-offender-registry-laws/" target="_blank" rel="noopener noreferrer">FAC announcement</a>
          )
        </p>

        <p>But the more important point is not merely that FAC filed a lawsuit.</p>

        <p>
          The more important point is that <em>Florida Action Committee v. Glass</em> appears to
          operate on <strong>two constitutional tracks</strong>.
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-6 not-prose">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-800">
            <p>
              One is ambitious: the argument that Florida’s modern registry system has become <strong>punishment
              in substance</strong>, whatever civil label courts have historically used.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-800">
            <p>
              The other is more conventional but still significant: the argument that <strong>even if courts
              continue calling the registry “civil,”</strong> Florida’s rules still cross independent constitutional
              lines involving vagueness, physical presence, travel, and speech.
            </p>
          </div>
        </div>

        <p>
          That two-track structure is why this case is worth watching. Not because a district-court
          complaint creates national precedent. It does not. Not because <em>Smith v. Doe</em> has
          been overturned. It has not. But because FAC may have built one of the most interesting
          modern attempts to force courts to compare the relatively early registry system
          constitutionalized in 2003 with the far more restrictive institution government has built
          since.
        </p>

        <p>
          For a non-lawyer reader, the basic issue is this: courts do not review every registry
          challenge on a blank slate. They operate inside a hierarchy of prior decisions. A district
          judge in Florida must take Supreme Court precedent seriously. The judge must also follow
          binding Eleventh Circuit precedent. That means FAC is not simply asking one judge whether
          Florida’s system seems unfair. It is asking the court to apply existing doctrine to a much
          more developed factual record about what Florida’s registry has become.
        </p>

        <PullQuote>
          A “landmark” result is premature. A landmark-capable question is not.
        </PullQuote>

        <BandHeader title="Two Constitutional Tracks Inside One Complaint" icon="⚖️" />

        <p>
          The first track inside <em>FAC v. Glass</em> is the long-game constitutional challenge.
        </p>

        <p>
          FAC argues that Florida’s registry has evolved from a notification and recordkeeping scheme
          into a system of continuing punishment. The complaint describes a cumulative structure of
          registration duties, residency restrictions, presence restrictions, travel reporting, local
          ordinances, speech restrictions, criminal enforcement, and lifelong consequences. Its
          introduction says Florida’s system has moved from public notification into “endless
          governmental supervision, exclusion zones, speech bans, and travel restrictions” that
          allegedly make large parts of ordinary life unavailable. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>That is the revolutionary track.</p>

        <p>
          If a court accepts that the modern Florida regime is punishment in substance, then
          constitutional provisions governing punishment become available in a way they often have
          not been under the Supreme Court’s 2003 decision in <em>Smith v. Doe</em>. That matters
          especially for FAC’s Ex Post Facto and Eighth Amendment theories. The complaint asks the
          court to declare, among other things, that specified residency and presence restrictions
          impose cruel and unusual punishment and that newly adopted burdens may not be retroactively
          applied. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <Callout variant="policy" title="Why the label matters" icon="🔎">
          <p>
            Here is the plain-English version: if the registry is treated as a civil safety rule, courts
            give the government much more room. If it is treated as punishment, then constitutional
            rules about punishment come into play. The Ex Post Facto Clause limits retroactive
            punishment — the government generally cannot increase punishment after the fact. The
            Eighth Amendment limits cruel and unusual punishment. So the label matters because the
            label controls which constitutional doors are open.
          </p>
        </Callout>

        <p>The second track inside <em>FAC v. Glass</em> is different.</p>

        <p>
          It does not require a court to decide that Florida’s entire registry regime is punishment. It
          asks whether particular restrictions are unconstitutional under ordinary constitutional
          doctrine even if the registry remains classified as civil regulation.
        </p>

        <p>That track includes claims that</p>
        <ul className="list-disc pl-6">
          <li>Florida and local governments have used vague criminal terms such as “loiter,” “congregate,” “regularly congregate,” and “vicinity”;</li>
          <li>that presence restrictions criminalize otherwise innocent presence in public places;</li>
          <li>that travel-notice rules unlawfully burden interstate travel;</li>
          <li>and that some public-park speech restrictions are content-based or speaker-based bans on protected expression. (<a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>)</li>
        </ul>

        <p>
          This matters materially because a person does not need a court to declare the whole registry
          punitive before the court can still say: this particular restriction is too vague, this
          speech restriction goes too far, or this presence rule gives police too much discretion.
          Those are narrower claims, but they can have real consequences for people trying to
          understand where they may live, where they may stand, when they may travel, and what they
          may say without risking prosecution.
        </p>

        <p>That is the strategic importance of the complaint’s architecture.</p>

        <Callout variant="policy" title="The two-track strategy" icon="⚖️">
          <ul className="list-disc pl-6">
            <li>Track One asks: has the modern registry finally become punishment?</li>
            <li>Track Two asks: even if courts keep calling it civil, has Florida crossed other constitutional lines anyway?</li>
          </ul>
        </Callout>

        <BandHeader title="The Hard Road Through Smith and McGuire" icon="🧭" />

        <p>The punishment theory faces real doctrinal obstacles.</p>

        <p>
          The Supreme Court’s <em>Smith v. Doe</em> decision remains binding precedent. In{" "}
          <em>Smith</em>, the Court held that Alaska’s registration statute was nonpunitive and that
          its retroactive application did not violate the Ex Post Facto Clause. The Court used an
          intent-effects framework: if the legislature intended a civil regulatory scheme, challengers
          must show by the <strong>“clearest proof”</strong> that the law’s effects are so punitive that they override
          that civil label. (
          <a className={linkCls} href="https://www.law.cornell.edu/supremecourt/text/538/84" target="_blank" rel="noopener noreferrer">Smith v. Doe</a>
          )
        </p>

        <p>That standard is hard by design.</p>

        <p>
          A simple way to understand it is this: FAC does not get to win by proving the registry is
          burdensome, humiliating, expensive, or disruptive. Under <em>Smith</em>, FAC must show
          something more demanding — that the real-world effects are so punitive that the court
          should treat the system as punishment despite the government’s civil label.
        </p>

        <p>That is why prior decisions matter so much here.</p>

        <p>
          Courts are not just asking, “Is Florida’s registry harsh?” They are asking, “Does this case
          look enough like earlier cases where courts upheld registry laws, or does it look different
          enough that the old answer no longer controls?”
        </p>

        <p>
          The Eleventh Circuit’s 2022 decision in <em>McGuire v. Marshall</em> shows how hard that can
          be. In that case, the court reviewed Alabama’s registration and community-notification law
          and repeatedly concluded that the plaintiff had not met the heavy “clearest proof” burden.
          The court rejected Ex Post Facto challenges to several provisions, including residency and
          employment restrictions, weekly homeless reporting, travel notification, and direct
          community notification. (
          <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/ca11/15-10958/15-10958-2022-10-03.html" target="_blank" rel="noopener noreferrer">McGuire v. Marshall</a>
          )
        </p>

        <p>
          That means FAC cannot simply say the restrictions are harsh and win. <strong>Harshness alone is not
          the doctrinal test.</strong> Courts applying <em>Smith</em> ask whether the cumulative effects are so
          punitive that they overcome the legislature’s stated civil purpose.
        </p>

        <p>That is also why the lawsuit’s early stage matters.</p>

        <p>
          At a motion-to-dismiss stage, the court is usually not deciding who ultimately wins. It is
          deciding whether the complaint alleges enough to proceed. If the case survives dismissal,
          FAC may get discovery — the legal process for obtaining evidence, data, testimony, maps,
          enforcement records, housing information, and other proof. For a cumulative-effects case,
          that can be the difference between arguing in the abstract and building a factual record.
        </p>

        <p>That is why the complaint’s factual design matters.</p>

        <p>
          FAC appears to be trying to distinguish <em>Smith</em>, <em>Doe v. Moore</em>, and{" "}
          <em>McGuire</em> not by pretending they do not exist, but by arguing that the modern Florida
          system is materially different from the systems those cases reviewed.
        </p>

        <BandHeader title="Why Miami-Dade Matters" icon="🏠" />

        <p>
          The most important Eleventh Circuit doorway for FAC may be <em>Doe v. Miami-Dade County</em>.
        </p>

        <p>
          In 2017, the Eleventh Circuit considered an Ex Post Facto challenge to Miami-Dade’s residency
          restriction. The court did not hold that the ordinance was unconstitutional. It did
          something narrower but important: it held that two plaintiffs had plausibly alleged that
          the residency restriction was so punitive in effect that the claim should survive a motion
          to dismiss and proceed to discovery. (
          <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/ca11/15-14336/15-14336-2017-01-25.html" target="_blank" rel="noopener noreferrer">Doe v. Miami-Dade County</a>
          )
        </p>

        <p>That distinction matters.</p>

        <p>
          At the motion-to-dismiss stage, the question is not whether FAC has already proved that
          Florida’s registry is punishment. The question is whether FAC has pleaded plausible
          constitutional claims that deserve factual development.
        </p>

        <Callout variant="legal" title="Procedural posture" icon="⚖️">
          <p>
            Surviving a motion to dismiss would <strong>not mean FAC has proved the registry is punishment.</strong> It
            would mean the court has allowed FAC to <strong>build the factual record needed to test that
            claim.</strong>
          </p>
        </Callout>

        <p>
          For readers following the case materially, this is the first major thing to watch. A survival
          order would not mean the court has struck down Florida’s registry. It would mean the court
          has allowed FAC to keep going, gather evidence, and try to prove the real-world effects it
          alleges.
        </p>

        <p>
          In <em>Miami-Dade</em>, the Eleventh Circuit emphasized allegations that the restriction
          caused homelessness by severely limiting available, affordable housing. The court also noted
          allegations that the ordinance was excessive in relation to its stated public-safety
          purpose. (
          <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/ca11/15-14336/15-14336-2017-01-25.html" target="_blank" rel="noopener noreferrer">Doe v. Miami-Dade County</a>
          )
        </p>

        <p>FAC’s new complaint appears built with that doorway in mind.</p>

        <p>
          It does not challenge only one isolated rule. It emphasizes the overlap between state
          restrictions and local ordinances. It alleges that Florida’s statewide residency restriction
          alone blocks access to nearly <strong>98.9 percent</strong> of residential housing units for newly subject
          individuals when legal and practical factors are considered, and that local ordinances make
          the problem worse in major urban areas. The complaint specifically alleges that Broward
          County reaches <strong>99 percent legal unavailability</strong> under combined restrictions. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>Those allegations are doing legal work.</p>

        <p>
          FAC is trying to show something closer to exclusion, banishment, or practical expulsion than
          the Eleventh Circuit found in <em>McGuire</em>. The complaint expressly distinguishes{" "}
          <em>McGuire</em> on that ground, arguing that Alabama registrants retained a meaningful
          ability to live and move within communities, while Florida’s layered restrictions allegedly
          eliminate those opportunities in densely populated areas and whole counties. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>
          In other words, FAC’s argument is not just “Florida has a residency restriction.” Courts
          have seen residency restrictions before. The argument is closer to: Florida has a statewide
          restriction, layered with local ordinances and other legal barriers, that may function in
          practice as large-scale exclusion from housing and ordinary community life.
        </p>

        <p><strong>That is the factual distinction FAC needs.</strong></p>

        <p>That does not mean FAC will win.</p>

        <p>
          It does mean the complaint is not merely rhetorical. It is aimed at the precise factual gap
          courts often identify when rejecting punitive-effect claims.
        </p>

        <BandHeader title="What Ellingburg Changed — and What It Did Not" icon="📜" />

        <p>
          The Supreme Court’s 2026 decision in <em>Ellingburg v. United States</em> should be handled
          carefully.
        </p>

        <Callout variant="legal" title="What Ellingburg did not decide" icon="⚖️">
          <p>
            It <strong>did not overrule <em>Smith v. Doe</em>.</strong> It <strong>did not hold that sex-offense registries are
            punishment.</strong> It <strong>did not announce a new registry doctrine.</strong>
          </p>
        </Callout>

        <p>
          What it did hold is that restitution under the federal Mandatory Victims Restitution Act is
          criminal punishment for Ex Post Facto purposes. The Court reached that conclusion by
          looking closely at statutory text and structure: restitution under the MVRA is labeled a
          penalty, imposed only after conviction, ordered at sentencing, enforced in a criminal
          proceeding, and codified within the federal criminal code. (
          <a className={linkCls} href="https://www.law.cornell.edu/supremecourt/text/24-482" target="_blank" rel="noopener noreferrer">Ellingburg v. United States</a>
          )
        </p>

        <p>
          The layperson version is this: <em>Ellingburg</em> was not a registry case, but it was a case
          about when the government can call something something other than punishment and still have
          courts treat it as punishment for constitutional purposes.
        </p>

        <p>That matters for FAC in a limited way.</p>

        <p>
          The majority opinion gives registry challengers a fresh vocabulary for asking whether
          something officially called “civil” is structurally punishment. FAC cannot cite{" "}
          <em>Ellingburg</em> as though it supersedes <em>Smith</em>. But it can point to{" "}
          <em>Ellingburg</em> for the proposition that courts should examine how a legal regime
          actually operates, where it is placed, how it is enforced, and whether its structure
          resembles punishment rather than ordinary civil regulation.
        </p>

        <p>
          The Thomas concurrence, joined by Justice Gorsuch, goes further — but it is not controlling
          law. Justice Thomas questioned the modern doctrine that allows legislatures to rely heavily
          on civil labels, and suggested that many nominally civil laws would have been treated as
          punishment under an older understanding of the Ex Post Facto Clauses when they impose
          coercive penalties for public wrongs. (
          <a className={linkCls} href="https://www.law.cornell.edu/supremecourt/text/24-482" target="_blank" rel="noopener noreferrer">Ellingburg v. United States</a>
          )
        </p>

        <p>
          That concurrence is not a holding. District courts are not free to replace <em>Smith</em>{" "}
          with Justice Thomas’s historical theory.
        </p>

        <p>
          But it is an emerging theory worth watching. It signals that at least two Justices are
          interested in a deeper question: how long can government impose coercive consequences for
          past criminal conduct while insulating those consequences from punishment-based
          constitutional protections through a civil label?
        </p>

        <p>FAC’s complaint sits directly inside that question.</p>

        <BandHeader title="The Registry the Supreme Court Reviewed No Longer Exists" icon="⏳" />

        <p>The larger SOLAR point is simple: constitutional analysis cannot remain frozen in 2003.</p>

        <p>
          <em>Smith v. Doe</em> reviewed the Alaska statute before the Court at that time. The Court
          held that statute nonpunitive. But courts have often treated <em>Smith</em> as though it
          permanently answered the constitutional status of anything the government later chooses to
          call a sex-offense registry.
        </p>

        <p>That is not a logical rule. It is a habit.</p>

        <p>
          Registries did not remain frozen in 2003. Over the past two decades, legislatures have added
          more reporting requirements, more frequent in-person appearances, internet identifiers,
          travel duties, residency exclusions, presence exclusions, local ordinances layered on top of
          state restrictions, criminal penalties for technical noncompliance, longer registration
          periods, and additional collateral consequences.
        </p>

        <p>
          Florida is an especially important example because FAC’s complaint emphasizes evolution. It
          alleges that Florida’s original 1997 registry, initially framed as reporting and notice, has
          grown through almost two dozen statutory amendments into a far more burdensome system. It
          also alleges that Florida’s current regime limits physical liberty in ways that the{" "}
          <em>Smith</em> Court did not confront when reviewing Alaska’s earlier scheme. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>
          FAC’s own public explanation makes the same point: the lawsuit asks the court to examine
          Florida’s registry “as it exists today,” after decades of legislative expansion and local
          restrictions, not as a simpler notification system. (
          <a className={linkCls} href="https://floridaactioncommittee.org/fac-weekly-update-2026-08-12-monumental-lawsuit-filed-by-fac/" target="_blank" rel="noopener noreferrer">FAC weekly update</a>
          )
        </p>

        <Callout variant="policy" title="The Ship of Theseus problem" icon="⏳">
          <p>That is the constitutional Ship of Theseus problem.</p>
          <p>
            If every plank of a ship is replaced, is it still the same ship? And if a registry begins as
            a notification system but accumulates supervision-like reporting, exclusion zones, speech
            limits, travel restrictions, local banishment effects, and felony enforcement for technical
            violations, at what point is it no longer the same civil system courts once reviewed?
          </p>
        </Callout>

        <PullQuote>
          A doctrine saying that one registry was civil in 2003 cannot logically mean that every
          future restriction attached to every future registry inherits constitutional immunity
          forever.
        </PullQuote>

        <p>At some point, courts must examine the institution actually operating before them.</p>

        <p>
          For impacted people and families, this is not abstract. The material question is whether a
          person can find lawful housing, hold a job, travel without triggering new reporting
          obligations, attend public events, enter public spaces, use the internet, support family
          members, and live without constant fear that a vague boundary or technical mistake could
          become a new felony.
        </p>

        <p>That is why cumulative burden matters.</p>

        <p>The constitutional question is about doctrine. The human question is about daily life.</p>

        <p>The lawsuit connects them.</p>

        <BandHeader title="When Regulation Becomes Punishment" icon="⚖️" />

        <p>
          The central constitutional question is not whether any single registry burden can be
          described in isolation as regulatory.
        </p>

        <p>The harder question is cumulative.</p>

        <p>
          A reporting duty may look civil in isolation. A public website may look civil in isolation.
          A residency restriction may be defended as spatial risk management. A presence restriction
          may be defended as prevention. A travel-notice rule may be defended as administrative
          tracking. A local ordinance may be defended as local public safety. A felony penalty may be
          defended as enforcement.
        </p>

        <PullQuote>
          But people do not live under these rules one at a time. They live under the combined system.
        </PullQuote>

        <p>
          That is why FAC’s complaint focuses on overlap: state law plus county law plus municipal law
          plus criminal enforcement plus vague boundaries plus lifetime duration. The complaint
          alleges that registrants may avoid populated areas, commercial districts, public facilities,
          and civic spaces because the boundaries of prohibited areas are difficult to determine with
          precision. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>This is where SOLAR’s broader critique fits the constitutional issue.</p>

        <p>
          Government says these systems are prospective public-safety regulation rather than
          continuing punishment. But a genuinely prospective safety system would logically ask
          prospective questions: Who currently presents risk? What kind of risk? In what setting?
          Under what conditions? What has changed with time, age, treatment, stability, health, family
          support, employment, and decades offense-free?
        </p>

        <p>Many registry systems largely refuse that inquiry.</p>

        <p>
          Someone may complete every court-imposed sentence, remain offense-free for decades, age
          substantially beyond peak offending years, demonstrate rehabilitation, and build a stable
          life — yet the restrictions may remain unchanged. That matters because a system supposedly
          justified by current public safety becomes harder to defend as genuinely risk-based when
          current risk is never meaningfully reassessed.
        </p>

        <p>The contradiction is not subtle.</p>

        <p>
          The state claims the registry is not punishment because it is regulation aimed at future
          safety. But it often applies that regulation based on past conviction status alone, without
          the individualized prospective-risk inquiry that the public-safety justification would seem
          to require.
        </p>

        <p>
          That does not automatically win an Ex Post Facto case. But it sharpens the question courts
          should be asking: what is this system actually designed to do?
        </p>

        <p>
          A useful way to explain this to a lay reader is through ordinary government power. The state
          can regulate many things for public safety. It can require licenses, inspections, reporting,
          zoning, and permits. But when regulation begins to resemble continuing supervision, forced
          exclusion, public branding, and criminal punishment for ordinary movement or technical
          mistakes, courts should ask whether the government is still regulating future risk — or
          continuing punishment under another name.
        </p>

        <p>That is the line FAC is asking the court to examine.</p>

        <BandHeader title="The Independent Claims May Keep the Bigger Question Alive" icon="🔀" />

        <p>
          The conventional constitutional claims may prove just as important as the ambitious
          punishment theory.
        </p>

        <p>
          Even if Judge Mark Walker concludes that <em>Smith</em>, <em>Doe v. Moore</em>, and{" "}
          <em>McGuire</em> constrain the broadest punishment arguments, that does not mean Florida has
          unlimited constitutional authority.
        </p>

        <p>
          Civil regulation is still regulation by the government. It still must comply with the
          Constitution.
        </p>

        <p>
          FAC’s vagueness claim does not require the court to first declare the entire registry
          punitive. It argues that criminal restrictions using terms like “loiter,” “children,”
          “congregating,” “regularly congregate,” and “vicinity” fail to give fair notice and invite
          arbitrary enforcement. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>
          That is easier to understand in everyday terms: criminal laws are supposed to tell people
          what is forbidden before they risk arrest or prosecution. If a person has to guess whether
          standing near a place, passing through an area, attending an event, or remaining in a public
          space counts as unlawful “loitering” or being in the “vicinity” of a prohibited place, the
          vagueness problem is not just theoretical. It affects how people move through the world.
        </p>

        <p>
          FAC’s innocent-presence claim likewise does not depend on winning the full punishment
          theory. It argues that restrictions on remaining in public places for innocent purposes
          violate liberty principles recognized in cases like <em>City of Chicago v. Morales</em>.
          The complaint frames the issue as criminalizing harmless presence rather than targeting
          distinct culpable conduct. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>
          The First Amendment claim is also independent. FAC alleges that Section 856.022(4)(a) and
          similar local provisions impose speaker-based and content-based restrictions on protected
          expression in traditional public forums. (
          <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
          )
        </p>

        <p>
          These claims matter because constitutional rights do not disappear just because the
          government calls a system civil. A civil registry rule may still be too vague. A civil
          restriction may still burden speech. A civil ordinance may still criminalize ordinary
          presence without enough notice or justification.
        </p>

        <p>
          Those claims may give the lawsuit a realistic route through early litigation even if the
          court is cautious about the broader punishment theory.
        </p>

        <p>
          That is why the two-track structure matters. The independent claims may survive long enough
          to create factual development that also illuminates the punishment question: how these rules
          operate, how they are enforced, how much ordinary life they restrict, and whether the system
          resembles public-safety regulation or continuing supervision and exclusion.
        </p>

        <BandHeader title="What This Could Mean Materially" icon="🔎" />

        <p>The immediate question is not whether Florida’s registry disappears.</p>

        <p>It almost certainly will not be that simple.</p>

        <p>The more realistic material possibilities are narrower, staged, and legally specific.</p>

        <ul className="list-disc pl-6">
          <li>The court could dismiss some claims and allow others to proceed.</li>
          <li>It could allow FAC to develop evidence about residency exclusion while rejecting other theories.</li>
          <li>It could permit vagueness or First Amendment claims to move forward without reaching the broader question of whether the whole regime is punishment.</li>
          <li>It could treat statewide provisions differently from local ordinances.</li>
          <li>It could find some plaintiffs have standing to challenge some rules but not others.</li>
        </ul>

        <p>That may sound unsatisfying, but in constitutional litigation, partial survival can matter.</p>

        <p>
          If the court allows key claims into discovery, FAC may be able to force a more concrete
          record about housing exclusion, homelessness, enforcement discretion, local overlap, travel
          burdens, speech restrictions, and the lack of individualized risk assessment. That kind of
          record can shape later rulings, appeals, settlement pressure, legislative debates, and
          public understanding.
        </p>

        <p>
          For people on the registry, material relief could eventually mean fewer vague restrictions,
          narrower presence rules, limits on retroactive application, changes to local ordinances,
          more precise enforcement standards, or a stronger legal pathway for challenging cumulative
          burdens.
        </p>

        <p>None of that is guaranteed.</p>

        <p>
          But the lawsuit matters because it asks courts to stop evaluating the modern registry as a
          slogan and start evaluating it as a system.
        </p>

        <BandHeader title="What to Watch Next" icon="👀" />

        <p>The first major test will likely be motions to dismiss.</p>

        <p>
          A significant early victory would not require the district court to invalidate Florida’s
          registry. It would not require a ruling that FAC has proved punishment. It could simply be
          an order allowing key claims to proceed into discovery.
        </p>

        <p>That would matter.</p>

        <p>
          Discovery could help develop a record on geographic exclusion, housing availability,
          homelessness, cumulative state and local restrictions, the real-world effects of presence
          rules, the relationship between restrictions and individualized risk, and whether the burdens
          resemble historical forms of punishment such as banishment or continuing supervision.
        </p>

        <p>That record could matter beyond Florida.</p>

        <p>
          Not because a district court filing binds the nation. It does not. But because appellate
          courts and ultimately the Supreme Court can only confront the modern registry honestly if
          litigants build records showing what the modern registry actually is.
        </p>

        <p>
          FAC’s burden remains substantial. The defendants will likely argue that <em>Smith</em>,{" "}
          <em>Doe v. Moore</em>, and <em>McGuire</em> foreclose much of the case; that the challenged
          provisions are civil public-safety regulation; that FAC lacks standing for some claims or
          defendants; that local ordinances vary too much to be treated together; and that the
          complaint overstates practical exclusion.
        </p>

        <p>Those arguments should be taken seriously.</p>

        <p>
          But FAC’s response is visible from the complaint: this is not 2003, this is not the old
          Florida scheme reviewed in <em>Doe v. Moore</em>, and this is not a challenge to one
          isolated rule. It is a challenge to the accumulated institution Florida now operates.
        </p>

        <p>So the early questions to watch are practical ones.</p>

        <ul className="list-disc pl-6">
          <li>Does the court treat FAC’s allegations as meaningfully different from the earlier cases?</li>
          <li>Does it allow factual development on cumulative burden?</li>
          <li>Does it view <em>Miami-Dade</em> as a narrow one-off or as a doorway for this kind of claim?</li>
          <li>Does it read <em>Ellingburg</em> as irrelevant to registry litigation, or as a useful reminder that structure and effect matter?</li>
          <li>Does it separate the conventional constitutional claims from the broader punishment theory?</li>
        </ul>

        <p>Those questions will tell us more than the headline.</p>

        <BandHeader title="A Civil Label Is Not a Constitutional Answer" icon="📌" />

        <p>
          The most important question in <em>FAC v. Glass</em> is not whether government may maintain
          records. It is not whether serious offenses may be punished. They can be, and Florida law
          already provides criminal punishment through sentencing.
        </p>

        <p>
          The question is whether government may continue adding restrictions after sentence
          completion, call the resulting structure civil, and then ask courts to analyze it as though
          nothing has changed.
        </p>

        <p>That is the constitutional problem FAC is trying to force into view.</p>

        <p>
          A civil label may matter. Under current doctrine, it matters a great deal. But it cannot be
          the end of the analysis forever.
        </p>

        <p>
          If a system tells people where they may live, where they may stand, when they may travel,
          what they may say in public spaces, when they must appear before law enforcement, and how
          long they must remain under threat of prison for technical missteps, courts should not
          pretend the only relevant fact is the label attached decades ago.
        </p>

        <PullQuote>
          The registry the Supreme Court reviewed in 2003 no longer exists. The question now is whether constitutional doctrine is willing to notice.
        </PullQuote>

        <ContextualActionCard config={contextualAction} />

        <Divider label="Sources and next reading" />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            Florida Action Committee —{" "}
            <a className={linkCls} href="https://floridaactioncommittee.org/wp-content/uploads/2026/08/FAC-v-Glass-ET-AL.pdf" target="_blank" rel="noopener noreferrer">FAC complaint</a>
            . Primary legal filing supporting the complaint’s allegations, constitutional claims,
            cumulative-burden theory, and requested declaratory and injunctive relief.
          </li>
          <li>
            Florida Action Committee —{" "}
            <a className={linkCls} href="https://floridaactioncommittee.org/florida-action-committee-files-landmark-federal-constitutional-challenge-to-floridas-sex-offender-registry-laws/" target="_blank" rel="noopener noreferrer">FAC announcement</a>
            . FAC’s public announcement and framing of the August 2026 filing.
          </li>
          <li>
            Florida Action Committee —{" "}
            <a className={linkCls} href="https://floridaactioncommittee.org/fac-weekly-update-2026-08-12-monumental-lawsuit-filed-by-fac/" target="_blank" rel="noopener noreferrer">FAC weekly update</a>
            . FAC’s explanation that the challenge asks courts to examine the registry as it exists
            today.
          </li>
          <li>
            Supreme Court of the United States —{" "}
            <a className={linkCls} href="https://www.law.cornell.edu/supremecourt/text/538/84" target="_blank" rel="noopener noreferrer">Smith v. Doe</a>
            . Binding Supreme Court precedent applying the intent-effects framework and “clearest
            proof” standard.
          </li>
          <li>
            U.S. Court of Appeals for the Eleventh Circuit —{" "}
            <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/F3/410/1337/574385/" target="_blank" rel="noopener noreferrer">Doe v. Moore</a>
            . Eleventh Circuit precedent addressing earlier Florida registration and notification
            provisions.
          </li>
          <li>
            U.S. Court of Appeals for the Eleventh Circuit —{" "}
            <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/ca11/15-14336/15-14336-2017-01-25.html" target="_blank" rel="noopener noreferrer">Doe v. Miami-Dade County</a>
            . Eleventh Circuit decision allowing a punitive-effects challenge to a residency
            restriction to proceed past dismissal.
          </li>
          <li>
            U.S. Court of Appeals for the Eleventh Circuit —{" "}
            <a className={linkCls} href="https://law.justia.com/cases/federal/appellate-courts/ca11/15-10958/15-10958-2022-10-03.html" target="_blank" rel="noopener noreferrer">McGuire v. Marshall</a>
            . Eleventh Circuit decision illustrating the difficulty of satisfying the “clearest
            proof” standard.
          </li>
          <li>
            Supreme Court of the United States —{" "}
            <a className={linkCls} href="https://www.law.cornell.edu/supremecourt/text/24-482" target="_blank" rel="noopener noreferrer">Ellingburg v. United States</a>
            . The Supreme Court’s 2026 restitution decision, including the majority’s punishment
            analysis and the separate Thomas concurrence joined by Justice Gorsuch.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/the-registry-is-not-a-prevention-plan">The Registry Is Not a Prevention Plan</Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">SOLAR’s broader reform framework</Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/state-registry">state registry overview pages</Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
