import type { JSX } from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout } from "../../components/solar";
import ContextualActionCard from "../../components/solar/ContextualActionCard";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

const contextualAction: ContextualActionConfig = {
  recipientId: "federal-lawmaker",
  primaryPositionId: "closer-to-home",
  formatId: "email",
  headline: "Ask Congress to track how platforms respond to reports of child sexual abuse material",
  description:
    "Congress can ask federal agencies how they enforce provider reporting duties and how they measure whether corporate safeguards reduce the time abuse material stays accessible.",
  recommendation: {
    audienceLabel: "your U.S. representative or senators",
    suggestion:
      "Ask for an oversight briefing and public, privacy-protective reporting on enforcement, compliance, and how quickly platforms disable access after credible reports.",
    actionLabel: "Build an email to Congress",
  },
  suggestedAsk:
    "Please request an oversight briefing on enforcement of federal provider reporting duties and seek aggregate public reporting on enforcement outcomes, corporate compliance, and time to disable public access after credible reports. Protect survivor identities and confidential investigations.",
  personalContext:
    "The Pornhub investigation led me to ask what happens after someone reports child sexual abuse material. I want Congress to track whether credible reports lead to faster removal and fewer reuploads.",
  source: {
    title: "Pornhub, Section 230, and Who Answers for CSAM",
    path: "/blog/pornhub-section-230-csam-accountability",
    type: "blog",
  },
  jurisdiction: "Federal",
};

export default function PornhubSection230CsamAccountability(): JSX.Element {
  return (
    <BlogLayout
      title="Pornhub, Section 230, and Who Answers for CSAM"
      description="ICIJ’s Pornhub investigation exposes a gap between federal CSAM sentences, corporate settlements, and the accountability survivors need from online platforms."
      keywords="Pornhub Section 230, Aylo, child sexual abuse material, CSAM, platform accountability, deferred prosecution, federal mandatory minimums, survivor remedies"
      date="Nov 19, 2026"
      readTime="10 min read"
      badge="📝 BLOG"
      lede="An undercover transfer can lead to a five-year federal prison sentence. The records behind Pornhub’s settlements show what the government can demand from a company with the power to keep abuse material online or take it down."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR">
          <p>
            Section 230 leaves federal criminal prosecution available. The Pornhub record shows
            three separate tools at work: a deferred money-laundering prosecution, a
            consumer-protection order, and a proposed civil settlement for survivors. Each addresses
            a different kind of accountability.
          </p>
        </Callout>

        <p>
          A person can forward an already-circulating file to one recipient and face a five-year
          federal prison floor. An online platform can control whether that same kind of material
          reaches thousands of people, whether copies come down after a credible report, and whether
          the people who report it get an answer. The federal response turns on what investigators
          can prove, what prosecutors charge, and which remedies the law makes available.
        </p>

        <p>
          For someone depicted in child sexual abuse material (CSAM), those distinctions have a
          practical consequence. An arrest can end one person’s distribution. It takes a different
          intervention to make a video disappear from a site, stop known copies from returning, or
          spare a survivor the job of searching for their own abuse. The Supreme Court described the
          continuing harm from circulation in{" "}
          <a
            className={linkCls}
            href="https://www.govinfo.gov/content/pkg/USREPORTS-572/pdf/USREPORTS-572-434.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paroline v. United States
          </a>
          .
        </p>

        <BandHeader title="What happened after notice?" />

        <p>
          In its November 16, 2026{" "}
          <a
            className={linkCls}
            href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            investigation of Pornhub and its parent company, Aylo
          </a>
          , the International Consortium of Investigative Journalists reported that a video
          depicting the abuse of a 12-year-old remained online for more than a month after notice
          from an Alabama law-enforcement agent. That account came from an employee deposition. An
          internal email referred to a request to leave the material up. In a separate civil
          complaint, the child’s mother alleged that officers contacted Aylo three times over
          several weeks and asked for removal. The difference matters. Investigators would need to
          establish who gave which instruction, who received it, and what actually happened to
          public access and evidence preservation. The same complaint alleged sales through a
          revenue-sharing program. That allegation remains distinct from the trafficking-related
          advertising revenue Aylo acknowledged in another case.
        </p>

        <p>
          ICIJ also reported the experience of a woman it identified as Tina, whose ex-boyfriend
          repeatedly posted intimate videos without her consent. Emails reviewed by the reporters
          showed that Pornhub told her seven months after her first notice that it had used a
          digital fingerprint to help prevent reuploads. Her account concerns nonconsensual intimate
          material. It illustrates what repeat publication and slow intervention can do to a person
          whose images remain within a platform’s control.
        </p>

        <p>
          The investigation largely concerns 2020 and earlier. Pornhub told ICIJ that it removes
          potential CSAM when there is doubt about age and continues to invest in safeguards.
          Starting in December 2020, Aylo restricted uploads to verified users, removed millions of
          videos from unverified accounts, and limited downloads. Uploader identity and the age and
          consent of every person depicted are separate verification questions. The more revealing
          test is how fast a credible report changes what the public can still see.
        </p>

        <BandHeader title="Three proceedings, three kinds of accountability" />

        <p>
          <strong>The 2023 federal criminal case.</strong>
          {" "}
          The Eastern District of New York charged Aylo Holdings under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s1957/"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 U.S.C. § 1957
          </a>
          {" "}
          with an unlawful monetary transaction involving proceeds of sex trafficking tied to
          GirlsDoPorn and GirlsDoToys. In the{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/d9/2023-12/2023.12.21_dpa_final_court_exhibit_version_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            signed deferred prosecution agreement and statement of facts
          </a>
          , Aylo acknowledged facts that included receiving victim complaints and collecting
          approximately $763,891 in advertising payments attributable to those businesses’ content.
          The charged transaction and the advertising receipts are separately described in the
          agreement. The case arose from sex-trafficking proceeds and involved a different record
          from the child-abuse material described in the Alabama complaint.
        </p>

        <p>
          The agreement required roughly $1.845 million in fines and forfeiture payable to the
          United States, a process for payments to eligible victims, and an independent monitor for
          three years. The monitoring mandate covers content screening and the handling of takedown
          requests. If Aylo fulfills the agreement, DOJ will seek dismissal with prejudice. A breach
          can put the criminal case back in motion. DOJ cited cooperation and changes to internal
          controls and recorded that the company had not voluntarily disclosed the conduct. The
          agreement expressly leaves individual prosecutions available.
        </p>

        <p>
          <strong>The 2025 FTC and Utah case.</strong>
          {" "}
          In a{" "}
          <a
            className={linkCls}
            href="https://www.ftc.gov/system/files/ftc_gov/pdf/AyloGroupLtd-et-al-Complaint.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            consumer-protection complaint
          </a>
          , regulators alleged that Aylo misled users about safeguards against CSAM and
          nonconsensual sexual content. The{" "}
          <a
            className={linkCls}
            href="https://www.ftc.gov/system/files/ftc_gov/pdf/Pornhub-StipOrder.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            stipulated order
          </a>
          {" "}
          set a $15 million judgment, with $5 million payable to Utah and the balance suspended
          subject to the order’s conditions. It also required age and consent verification, a
          prevention program, independent assessments, and public reporting. The order imposes
          enforceable obligations. Its underlying allegations were resolved by agreement.
        </p>

        <p>
          <strong>The 2026 proposed civil class settlement.</strong>
          {" "}
          On November 9, a federal judge in California gave preliminary approval to a proposed $120
          million agreement covering two class actions over content depicting people who were under
          18. The proposal includes survivor compensation and five years of outside monitoring, and
          still requires final approval. Aylo made no admission of wrongdoing in that deal. The $120
          million is the proposed gross fund, which includes amounts available for approved fees and
          expenses. It matters to survivors, and it answers a different question from whether
          evidence supports a federal distribution charge.{" "}
          <a
            className={linkCls}
            href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICIJ’s reporting
          </a>
          {" "}
          and{" "}
          <a
            className={linkCls}
            href="https://www.pollockcohen.com/media/news-releases/2026-08-17-law360-pornhub-to-pay-120m-to-end-child-abuse-content-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            class counsel’s account of the agreement
          </a>
          {" "}
          describe the proposal.
        </p>

        <BandHeader title="Where Section 230 applies" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-136/t47/s230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            47 U.S.C. § 230(c)(1)
          </a>
          {" "}
          generally prevents treating an interactive computer service or its user as the publisher
          or speaker of information supplied by another content provider. Section 230(e)(1)
          expressly preserves federal criminal enforcement, including the chapter covering sexual
          exploitation of children. The same carveout governs a federal case against someone using a
          chat app. Federal prosecutors may investigate a platform’s own conduct under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252
          </a>
          {" "}
          or{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-136/t18/s2252A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2252A
          </a>
          {" "}
          where the evidence fits. A private damages action under{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 2255
          </a>
          {" "}
          raises a separate immunity question, even though the civil statute incorporates federal
          crimes.
        </p>

        <p>
          The difference is concrete. In{" "}
          <a
            className={linkCls}
            href="https://cdn.ca9.uscourts.gov/datastore/opinions/2025/08/01/24-177.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doe 1 v. Twitter
          </a>
          , the Ninth Circuit said the federal-criminal carveout did not save the plaintiffs’
          private § 2255 claim. It also held that Section 230 barred certain theories based on
          removal and amplification of third-party posts, while allowing negligence-per-se and
          defective reporting-design theories to proceed past that defense. The ruling left those
          claims for further proceedings. The Supreme Court{" "}
          <a
            className={linkCls}
            href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-949.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            declined review in May 2026
          </a>
          , leaving the decision in place without a ruling on the merits. The 2018 law known as
          FOSTA adds a separate exception for certain civil sex-trafficking claims when the conduct
          underlying the claim constitutes a violation of § 1591, along with specified state
          criminal prosecutions. Simply invoking a federal criminal statute in a civil complaint
          does not turn the suit into federal criminal enforcement.
        </p>

        <BandHeader title="What federal law asks of a platform" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-118/t18/s2258A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 U.S.C. § 2258A
          </a>
          {" "}
          requires covered providers to report to the National Center for Missing & Exploited
          Children’s CyberTipline as soon as reasonably possible after obtaining actual knowledge of
          facts or circumstances showing an apparent covered violation. The statute provides fines
          for knowing and willful failures to make required reports. It also disclaims a general
          federal duty under that section to monitor users or affirmatively search for material. The
          reporting obligation, handling of a specific takedown request, and elements of a
          distribution offense each call for different proof. Current law provides for secure
          preservation of reported material, which can occur with public access disabled.
        </p>

        <p>
          A distribution prosecution still requires proof beyond a reasonable doubt of the
          prohibited conduct, the required knowledge, and the statutory connection to interstate or
          foreign commerce. An ad-supported site can make money from traffic without that business
          model proving who knew what about a particular file. Repeated, specific reports, what
          reviewers confirmed, records of who could disable access, and later decisions to keep
          distributing or selling material could change what the government can prove. The public
          reporting warrants those questions while leaving the evidence needed to answer them
          incomplete.
        </p>

        <p>
          Under the{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justice Department’s corporate prosecution principles
          </a>
          , a corporation can be liable for an agent’s unlawful acts within the scope of their
          duties when intended at least in part to benefit the company. Personal liability takes
          evidence of an individual’s own culpability. A title, an internal escalation, and the
          authority to act can all guide an investigation. The criminal question is what someone
          actually did with the knowledge they had and what the charged offense requires.
        </p>

        <BandHeader title="What five years means when the defendant is a person" />

        <p>
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sections 2252(a)(2) and (b)(1)
          </a>
          {" "}
          normally carry five to 20 years for knowing distribution without a qualifying prior
          conviction. The law reaches the act of distributing existing material. A sender can be
          prosecuted even when someone else made it and no money changed hands. A one-to-one
          transmission can qualify, including when the recipient is undercover. In a{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/usao-ri/pr/scituate-resident-sentenced-federal-prison-possessing-distributing-child-pornography"
            target="_blank"
            rel="noopener noreferrer"
          >
            public Rhode Island case
          </a>
          , DOJ reported a five-year sentence and eight years of supervised release after a person
          sent two images to an undercover agent and pleaded guilty to distribution and possession.
          The case also involved a much larger collection recovered from his phone. It illustrates
          how private transfers enter distribution prosecutions alongside other case facts.
        </p>

        <p>
          Federal consequences can reach far past the prison term. For covered offenses,{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s3583/"
            target="_blank"
            rel="noopener noreferrer"
          >
            § 3583(k)
          </a>
          {" "}
          authorizes supervised release from five years to life.{" "}
          <a
            className={linkCls}
            href="https://uscode.house.gov/us/usc/119-120/t18/s2259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Section 2259
          </a>
          {" "}
          requires restitution and directs courts in covered trafficking cases to consider the
          defendant’s relative role in the victim’s losses, subject to a statutory floor. The
          statute expressly considers relative responsibility for restitution. The prison floor can
          still apply across a wide range of conduct.
        </p>

        <p>
          In fiscal 2025, the{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/research/quick-facts/child-pornography"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Sentencing Commission
          </a>
          {" "}
          counted 1,432 people sentenced in its federal non-production CSAM category. Ninety-nine
          percent received prison time. The average for the Commission’s trafficking category was
          156 months. That category combines cases with different facts and records. These data
          describe people who reached sentencing and offer no comparable count of corporate
          investigations, declinations, or private settlements. In its{" "}
          <a
            className={linkCls}
            href="https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 study
          </a>
          , the Commission found that prosecutors sometimes reduced receipt or distribution charges
          to possession charges, changing the applicable minimum. The charging decision shapes how
          much room a judge has to weigh the facts. SOLAR’s{" "}
          <Link className={linkCls} to="/blog/federal-sex-crime-process">
            federal case-process guide
          </Link>
          {" "}
          explains how those stages fit together.
        </p>

        <BandHeader title="What the public can ask the government to show" />

        <p>
          The strongest argument for a corporate deal is what it can deliver. A survivor can get
          compensation. A monitor can test whether reports are acted on. An enforceable order can
          require an upload or verification process to change. A company’s workers and other people
          uninvolved in the conduct can have real stakes in the outcome. DOJ’s corporate guidance
          explicitly weighs those effects and also calls for pursuing provable culpability of
          individuals within companies. The same concern for proportionality belongs in sentencing a
          person whose role, conduct, and risk differ from those of other people convicted under the
          same statute.{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOJ’s corporate prosecution principles
          </a>
          {" "}
          lay out the institutional side of that discretion.
        </p>

        <p>
          Congress can ask for public, privacy-protective reporting on how federal authorities
          enforce provider reporting duties, what corporate compliance agreements require, how often
          breaches trigger consequences, and whether oversight can document shorter times to disable
          access and fewer known copies returning. Counts of referrals, fines, and prison years tell
          us what officials did. Survivors should also be able to learn what changed for them.{" "}
          <Link className={linkCls} to="/advocacy">
            SOLAR’s advocacy framework
          </Link>
          {" "}
          starts with that question. A person can be held accountable for sending one file. A
          company with the power to stop thousands of copies should be able to show what it did with
          that power.
        </p>

        <ContextualActionCard config={contextualAction} />

        <BandHeader title="Data Sources" icon="📚" />

        <ul className="list-disc pl-6">
          <li>
            <a
              className={linkCls}
              href="https://www.icij.org/news/2026/11/he-used-pornhub-as-the-gun/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICIJ investigation, November 16, 2026
            </a>
            {" "}
            — Investigative reporting based on interviews, company responses, and documents from
            civil litigation. Supports the accounts of notice, reuploads, alleged monetization, and
            preliminary settlement approval.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/d9/2023-12/2023.12.21_dpa_final_court_exhibit_version_0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aylo deferred prosecution agreement and statement of facts
            </a>
            {" "}
            — Federal criminal filing. Paragraphs 4 and 8–10 and Attachments C–D cover DOJ’s
            rationale, financial terms, admissions, agreement scope, and monitor duties.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ftc.gov/system/files/ftc_gov/pdf/AyloGroupLtd-et-al-Complaint.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              FTC and Utah civil complaint
            </a>
            {" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.ftc.gov/system/files/ftc_gov/pdf/Pornhub-StipOrder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              stipulated district court order
            </a>
            {" "}
            — Primary records for the consumer-protection allegations, suspended judgment, and
            operational requirements.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.pollockcohen.com/media/news-releases/2026-08-17-law360-pornhub-to-pay-120m-to-end-child-abuse-content-cases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Class counsel’s account of the proposed settlement
            </a>
            {" "}
            — Account from plaintiffs’ counsel made public before preliminary approval. Read
            alongside ICIJ’s report on the Nov. 9 order in Jane Doe v. MindGeek USA Inc., No.
            8:21-cv-00338-WLH-ADS (C.D. Cal.).
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-136/t47/s230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Section 230
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              § 2255’s civil remedy
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://cdn.ca9.uscourts.gov/datastore/opinions/2025/08/01/24-177.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Ninth Circuit’s Doe 1 opinion
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://www.supremecourt.gov/docket/docketfiles/html/public/25-949.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Supreme Court docket
            </a>
            {" "}
            — Statutes and court records for the federal criminal carveout and its limits in civil
            litigation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal distribution law
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-136/t18/s2252A/"
              target="_blank"
              rel="noopener noreferrer"
            >
              related federal CSAM offenses
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-118/t18/s2258A/"
              target="_blank"
              rel="noopener noreferrer"
            >
              provider reporting and preservation duties
            </a>
            {" "}
            — Statutory text for individual and corporate enforcement questions.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/jm/jm-9-28000-principles-federal-prosecution-business-organizations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Justice Manual on business organizations
            </a>
            {" "}
            — DOJ policy on corporate attribution, charging discretion, individual accountability,
            and corporate agreements.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s3583/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Federal supervised release
            </a>
            ,{" "}
            <a
              className={linkCls}
              href="https://uscode.house.gov/us/usc/119-120/t18/s2259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mandatory restitution
            </a>
            , and{" "}
            <a
              className={linkCls}
              href="https://www.govinfo.gov/content/pkg/USREPORTS-572/pdf/USREPORTS-572-434.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Supreme Court’s Paroline opinion
            </a>
            {" "}
            — Statutes and opinion on post-prison supervision, victim compensation, and continuing
            harm from circulation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.ussc.gov/research/quick-facts/child-pornography"
              target="_blank"
              rel="noopener noreferrer"
            >
              FY 2025 Sentencing Commission figures
            </a>
            {" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.ussc.gov/research/research-reports/federal-sentencing-child-pornography-non-production-offenses"
              target="_blank"
              rel="noopener noreferrer"
            >
              2021 non-production sentencing report
            </a>
            {" "}
            — National sentencing outcomes and analysis of charging and sentencing variation.
          </li>
          <li>
            <a
              className={linkCls}
              href="https://www.justice.gov/usao-ri/pr/scituate-resident-sentenced-federal-prison-possessing-distributing-child-pornography"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.S. Attorney’s Office for Rhode Island case summary
            </a>
            {" "}
            — Public source on the distribution and possession pleas and sentence used in the
            individual example.
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />

        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/permanent-punishment-public-temporary-shame-powerful">
              Permanent Punishment for the Public, Temporary Shame for the Powerful
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/register-every-crime-or-none">
              RECON’s consistency test for public registries
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/accountability-watch">
              SOLAR Accountability Watch
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}
