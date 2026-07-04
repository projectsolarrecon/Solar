import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function LibertyForSomeRegistries(): JSX.Element {
  return (
    <BlogLayout
      title="Liberty for Some: Registries and Lifelong Punishment as American Exceptionalism"
      description="America celebrates liberty and second chances, yet maintains one of the most publicly punitive registry systems in the democratic world. SOLAR examines registries, lifelong punishment, and what real prevention could look like."
      keywords="sex offender registry reform, American exceptionalism, sex offense registry, public registry, lifelong punishment, civil liberties, reintegration, rehabilitation, restorative justice, public safety mythology, comparative justice, CoSA, risk assessment"
      date="Jul 4, 2026"
      readTime="8–10 min read"
      badge="📝 BLOG"
      lede="America celebrates liberty, second chances, and limited government every Fourth of July. But for people convicted of sex offenses, the public registry often turns punishment into a lifelong civic sentence."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="policy" title="TL;DR" icon="🇺🇸">
          <p>
            America’s registry system is not exceptional because it has solved sexual harm. It is
            exceptional because it has normalized public exposure, stigma, and post-sentence
            punishment as if they were prevention. Other models show that public safety can be built
            around risk, treatment, limited disclosure, reintegration, and an actual end point.
          </p>
        </Callout>

        <p>Every Fourth of July, America tells a story about itself.</p>

        <p>
          We hang flags from porches. We light up the sky. We talk about liberty as if it is the
          country’s native language — freedom, second chances, limited government, the right to begin
          again.
        </p>

        <p>It is a beautiful story.</p>

        <p>It is also an incomplete one.</p>

        <p>
          Because every country has a shadow story: the people it excludes from its promises, the
          punishments it excuses, the exceptions it creates and then pretends are not exceptions at all.
        </p>

        <p>For people convicted of sex offenses, America’s promise often ends at the edge of a public registry.</p>

        <p>
          The prison sentence may end. Probation may end. Court-ordered treatment may end. Years may
          pass. A person may remain offense-free, rebuild a family, find work, grow older, and try to
          live quietly.
        </p>

        <p>But the public label remains.</p>

        <p>
          The name. The photograph. The address. The searchable database. The rules that change from
          state to state. The housing denial. The job that disappears. The neighbors who are invited
          to fear before they are invited to understand.
        </p>

        <p>America calls this safety.</p>

        <p>But if we are honest, much of it is punishment by another name.</p>

        <p>
          And that is the American exceptionalism we rarely admit: a country that celebrates liberty
          while maintaining one of the most publicly punitive post-sentence systems in the democratic world.
        </p>

        <PullQuote>
          The United States is not exceptional because it has found the best way to prevent sexual
          harm. It is exceptional because it has grown comfortable calling lifelong public punishment
          a prevention strategy.
        </PullQuote>

        <BandHeader title="The American promise has an asterisk" icon="⚖️" />

        <p>America likes to imagine punishment as bounded.</p>

        <p>
          A person is convicted. A sentence is imposed. The sentence is served. Then, at least in
          theory, the person returns to society.
        </p>

        <p>
          That theory has never been equally available to everyone. Criminal records already follow
          people long after release. Poverty, race, geography, disability, addiction, and stigma all
          shape whether someone is truly allowed to come home.
        </p>

        <p>But sex-offense registries make the exception formal.</p>

        <p>They write the asterisk into law.</p>

        <p>
          Under{" "}
          <a
            className={linkCls}
            href="https://smart.ojp.gov/sorna/current-law"
            target="_blank"
            rel="noopener noreferrer"
          >
            federal SORNA standards
          </a>
          , jurisdictions are expected to require registration where a person lives, works, or
          studies; collect extensive identifying information; require periodic in-person
          verification; expand information available to the public; and impose minimum registration
          periods. This is not simply a private law-enforcement file. The American model is built
          around continuing compliance and public notification.
        </p>

        <p>That distinction matters.</p>

        <p>A police database is one thing. A public-facing system of civic exposure is another.</p>

        <p>A tool used to investigate specific crimes is one thing. A permanent public identity imposed after sentencing is another.</p>

        <p>
          The law often describes registries as civil, regulatory, or administrative. Those words do
          a great deal of work. They make the system sound neutral. They make the punishment
          disappear on paper.
        </p>

        <p>But people do not live on paper.</p>

        <p>
          They live in apartment applications, school pickup lines, church parking lots, job
          interviews, custody disputes, motel rooms, neighborhood Facebook groups, and towns where a
          public label can become a life sentence all by itself.
        </p>

        <p>
          <Link className={linkCls} to="/advocacy">
            SOLAR’s position
          </Link>{" "}
          is that registry systems are punitive in practice because they impose stigma, exclusion,
          instability, and public suspicion after the formal sentence has been served.
        </p>

        <p>That is not a technical objection. It is a moral one.</p>

        <p>
          A justice system that refuses to recognize an end point is not practicing accountability.
          It is practicing permanent banishment with better branding.
        </p>

        <BandHeader title="Public exposure is the cheapest substitute for prevention" icon="🗺️" />

        <p>Registries survive because they give the public something simple to look at.</p>

        <p>A map. A name. A face. A dot near a school. A searchable list.</p>

        <p>They turn fear into a user interface.</p>

        <p>
          That is part of their political power. A registry lets officials say, “We did something.”
          It lets communities feel that danger has been located. It lets the public believe that harm
          can be managed by watching the already-marked person down the street.
        </p>

        <p>But sexual harm has never been that simple.</p>

        <p>
          So much abuse happens through trust, access, secrecy, authority, family proximity,
          institutional failure, and silence. It happens in homes. In churches. In schools. In youth
          organizations. In locker rooms. In families. In systems where people are taught to defer,
          doubt themselves, or protect the institution before the child.
        </p>

        <p>A public registry does very little to confront that reality.</p>

        <p>It does not teach a school how to respond to grooming concerns.</p>

        <p>It does not make a church report abuse earlier.</p>

        <p>It does not train parents to recognize boundary violations.</p>

        <p>It does not fund treatment.</p>

        <p>It does not create housing.</p>

        <p>It does not make reentry safer.</p>

        <p>It does not make institutions less willing to protect their own.</p>

        <p>
          It does what American politics often does best: it creates a visible punishment for a
          despised group and calls the visibility a solution.
        </p>

        <p>That is the fraud at the center of registry politics.</p>

        <p>Not because sexual harm is minor. It is not.</p>

        <p>Not because accountability is unnecessary. It is.</p>

        <p>The fraud is that America has sold public exposure as if exposure itself were prevention.</p>

        <p>
          SOLAR’s critique is rooted in that distinction. Real public safety requires evidence,
          prevention, treatment, stability, accountability, and human dignity — not fear, stigma, and
          punishment theater.
        </p>

        <p>
          The research does not support the idea that every person with a sex-offense conviction
          presents the same permanent risk. A{" "}
          <a
            className={linkCls}
            href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sx-ffndr-rcdvsm/index-en.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Safety Canada review
          </a>{" "}
          of ten follow-up studies involving 4,724 adult males found that most people convicted of
          sexual offenses did not sexually reoffend, that people with no prior sexual convictions
          were significantly less likely to sexually reoffend than those with prior sexual
          convictions, and that risk declined the longer people remained offense-free in the community.
        </p>

        <p>That should have changed the conversation years ago.</p>

        <p>If risk varies, law should vary.</p>

        <p>If time offense-free matters, policy should recognize time offense-free.</p>

        <p>
          If stability helps people remain safe, then housing, employment, treatment, and family
          support are not side issues. They are safety infrastructure.
        </p>

        <p>
          But American registry law often works in the opposite direction. It flattens people into a
          category. It makes the label louder than the evidence. It invites the public to confuse a
          conviction history with a permanent identity.
        </p>

        <p>A country serious about safety would ask what reduces harm.</p>

        <p>America too often asks what can be punished publicly.</p>

        <Callout variant="neutral" title="A registry is not a prevention plan." icon="🔎">
          <p>A public label is not justice.</p>
        </Callout>

        <BandHeader title="America chose the exposure model" icon="🇺🇸" />

        <p>The United States did not have to build the system this way.</p>

        <p>That is one of the most important points.</p>

        <p>
          There is nothing inevitable about public registries. There is nothing automatic about
          putting names, photographs, addresses, and labels on government websites. There is nothing
          natural about forcing people to carry punishment into every apartment search, every job
          application, every family relationship, every attempt to return to ordinary life.
        </p>

        <p>Those were choices.</p>

        <p>
          Other countries also monitor people convicted of sexual offenses. They use registries,
          law-enforcement databases, specialized supervision, treatment programs, risk assessment
          tools, and disclosure mechanisms. Some systems are still harsh. Some are uneven. Some are
          moving in more punitive directions. No country has solved sexual harm.
        </p>

        <p>
          But many countries have not made the American choice: mass public exposure as the
          centerpiece of post-sentence policy.
        </p>

        <p>
          A 2022{" "}
          <a
            className={linkCls}
            href="https://www.ojp.gov/library/publications/sex-offender-registration-and-notification-laws-around-world"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Department of Justice/SMART Office international survey
          </a>{" "}
          collected registration and notification laws from roughly 90 countries, showing how widely
          these systems vary. That variation exposes the lie that public notification is the only way
          to take sexual harm seriously.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://www.justice.gc.ca/eng/rp-pr/csj-sjc/jsp-sjp/arnsor-mlrnds/p2.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canada’s National Sex Offender Registry
          </a>{" "}
          is a police-access database used to help prevent or investigate sexual offenses. Access is
          strictly controlled and limited to law enforcement for specified purposes. It is not a public
          website for neighbors, landlords, employers, or strangers to search.
        </p>

        <p>
          <a
            className={linkCls}
            href="https://www.police.govt.nz/about-us/programmes-and-initiatives/child-sex-offender-cso-register/cso-register-frequently-asked"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Zealand’s Child Sex Offender Register
          </a>{" "}
          is also not open for public searching. Police and Corrections may disclose information only
          when disclosure is assessed as necessary to protect a child or children from a significant
          threat, and the system includes strict disclosure protocols.
        </p>

        <p>
          The{" "}
          <a
            className={linkCls}
            href="https://www.coe.int/en/web/portal/-/managing-persons-accused-or-convicted-of-a-sexual-offence-council-of-europe-issues-new-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            Council of Europe recommendation
          </a>{" "}
          points to a different philosophy altogether. It tells member states to focus on assessment,
          management, treatment, intervention, risk, needs, and reintegration. It calls for
          individually tailored plans and for prison and probation agencies to manage and reintegrate
          people based on the risk they pose and the needs they present.
        </p>

        <p>That is a fundamentally different imagination of public safety.</p>

        <p>The American model asks how widely a person can be exposed.</p>

        <p>A prevention-centered model asks what must be done to reduce future harm.</p>

        <p>That difference reveals something about us.</p>

        <p>
          America has long been more comfortable with punishment than repair. More comfortable with
          public condemnation than public investment. More comfortable branding people than building
          the systems that might actually prevent harm before it happens.
        </p>

        <p>This is not just a registry problem. It is an American punishment problem.</p>

        <p>But registries make it painfully visible.</p>

        <p>
          They show how quickly a country that praises liberty will abandon it when the person losing
          liberty is unpopular enough.
        </p>

        <BandHeader title="Reintegration is safety work" icon="🌱" />

        <p>One of the great failures of American registry politics is that it has made reintegration sound like mercy.</p>

        <p>It is not mercy.</p>

        <p>It is not forgetting the harm.</p>

        <p>It is not asking victims to carry the burden of someone else’s redemption.</p>

        <p>It is not pretending that supervision, treatment, or restrictions are never necessary.</p>

        <p>Reintegration is the work of making return safer than abandonment.</p>

        <p>
          People come home from prison. People finish probation. People age. People change. People
          either return to communities with housing, treatment, work, accountability, and support — or
          they return destabilized, isolated, desperate, and publicly marked.
        </p>

        <p>Only one of those options deserves to be called public safety.</p>

        <Callout variant="success" title="Reintegration is not leniency." icon="🌱">
          <p>It is safety work.</p>
        </Callout>

        <p>
          That is why models like Circles of Support and Accountability matter. CoSA began in Canada
          as a community-based response for high-risk people returning from prison with little
          support.{" "}
          <a
            className={linkCls}
            href="https://www.canada.ca/en/public-safety-canada/news/2017/05/funding_announcedforexpansionofcirclesofsupportandaccountability.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Safety Canada describes Circles of Support and Accountability
          </a>{" "}
          as weekly support networks of trained staff and volunteers that help people accept
          accountability, complete their sentences, and safely reintegrate into the community.
        </p>

        <p>
          CoSA is not a miracle cure, and no responsible reform movement should sell it as one. But
          its premise is more honest than the premise of public shaming: people are safer when they
          are known, supported, challenged, supervised, and connected — not when they are simply
          exposed and abandoned.
        </p>

        <p>
          A{" "}
          <a
            className={linkCls}
            href="https://journals.sagepub.com/doi/10.1177/1079063209347724"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canadian national CoSA replication study
          </a>{" "}
          matched 44 high-risk people involved in CoSA with 44 similar people not involved in CoSA
          and found substantial reductions in sexual, violent, and overall recidivism among the CoSA
          group. The study defined recidivism as a new charge or conviction and concluded that
          trained community volunteers could help improve reintegration outcomes.
        </p>

        <p>
          Treatment research points in the same direction. A{" "}
          <a
            className={linkCls}
            href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2009-01-trt/index-en.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Safety Canada treatment meta-analysis
          </a>{" "}
          found that treated people had lower sexual and general recidivism rates than comparison
          groups, and that programs following Risk-Need-Responsivity principles showed the largest
          reductions.
        </p>

        <p>That is where America should be looking.</p>

        <p>Not because treatment replaces accountability.</p>

        <p>Because accountability without a pathway back is not accountability. It is disposal.</p>

        <p>And disposal is not a public-safety strategy.</p>

        <BandHeader title="The cruelty is not accidental" icon="🧱" />

        <p>The harshness of the American registry system is often defended as unfortunate but necessary.</p>

        <p>That defense deserves more scrutiny.</p>

        <p>
          When lawmakers create systems that predictably block housing, employment, family stability,
          privacy, and community reintegration, those consequences cannot be dismissed as side
          effects forever. At some point, the collateral consequences become part of the design.
        </p>

        <p>The public nature of the registry is not incidental. It is the point.</p>

        <p>
          It invites the community to participate in punishment. It outsources stigma. It allows the
          state to say, “We are only providing information,” while knowing exactly how that
          information will be used.
        </p>

        <p>By landlords.</p>

        <p>By employers.</p>

        <p>By neighbors.</p>

        <p>By schools.</p>

        <p>By strangers online.</p>

        <p>By people who want someone to fear.</p>

        <p>
          A country that valued reintegration would measure these harms carefully. A country that
          valued proportionality would ask whether a person who completed a sentence should still be
          publicly punished ten, twenty, or thirty years later. A country that valued evidence would
          ask whether broad public exposure prevents more harm than it causes.
        </p>

        <p>America rarely asks those questions with any seriousness.</p>

        <p>Instead, it hides behind the easiest political sentence in criminal justice: “What about the children?”</p>

        <p>
          That sentence has power because children matter. Their safety matters. Their trauma
          matters. Their right to be protected matters.
        </p>

        <p>But children are not protected by slogans.</p>

        <p>
          They are not protected by policies that direct attention toward the already-convicted person
          while ignoring abuse inside trusted relationships and institutions.
        </p>

        <p>
          They are not protected when prevention dollars are spent on public fear rather than early
          intervention, family support, victim services, treatment access, reporting systems, and
          institutional accountability.
        </p>

        <p>They are not protected when reentry is made more unstable.</p>

        <p>The cruelty of registry policy is not only what it does to registrants. It is what it fails to do for everyone else.</p>

        <p>It gives the public a ritual of condemnation and calls that ritual safety.</p>

        <BandHeader title="America can do better than this" icon="🛠️" />

        <p>The most patriotic thing we can do with a contradiction is refuse to look away from it.</p>

        <p>America can do better than a system that turns liberty into a privilege for the socially acceptable.</p>

        <p>
          It can do better than a registry model that tells the public where to look while leaving
          deeper patterns of risk untouched.
        </p>

        <p>
          It can do better than laws that treat people as permanently dangerous even when the evidence
          says risk varies, time matters, treatment matters, and stability matters.
        </p>

        <p>It can do better than pretending a government website is the same thing as prevention.</p>

        <p>Doing better would not mean ignoring sexual harm. It would mean taking it more seriously than the registry allows.</p>

        <p>It would mean investing in prevention before abuse happens.</p>

        <p>It would mean building complaint systems that work.</p>

        <p>
          It would mean confronting abuse in families, schools, churches, youth programs,
          institutions, and professions where trust can become access and access can become opportunity.
        </p>

        <p>It would mean using individualized risk assessment instead of category panic.</p>

        <p>It would mean providing treatment that follows evidence.</p>

        <p>It would mean preserving housing and employment whenever safely possible.</p>

        <p>
          It would mean limiting disclosure to situations where disclosure actually protects someone,
          rather than treating public exposure as a permanent entitlement.
        </p>

        <p>It would mean allowing punishment to end.</p>

        <p>That last part is essential.</p>

        <p>A country of second chances cannot maintain a permanent underclass and still call itself free.</p>

        <p>A country that believes in limited government cannot defend endless public surveillance because the target is unpopular.</p>

        <p>A country that believes in justice cannot confuse humiliation with accountability.</p>

        <p>
          And a country that believes in public safety cannot keep funding a symbol while neglecting
          the harder work of prevention.
        </p>

        <BandHeader title="Liberty cannot mean freedom for some" icon="🕯️" />

        <p>The Fourth of July should make us proud.</p>

        <p>It should also make us honest.</p>

        <p>
          American freedom has always been contested. It has always expanded only because people
          forced the country to confront the gap between its promises and its practices.
        </p>

        <p>That is the work now.</p>

        <p>The registry is one of those gaps.</p>

        <p>
          It is where liberty becomes conditional. Where punishment becomes permanent. Where fear is
          allowed to outrank evidence. Where the state insists that a person can serve a sentence and
          still never fully return.
        </p>

        <p>That should trouble anyone who takes American ideals seriously.</p>

        <p>Not because people who cause harm should escape accountability.</p>

        <p>Because accountability has to mean something better than endless exclusion.</p>

        <p>Because safety has to mean something better than a searchable list.</p>

        <p>
          Because freedom has to mean something better than fireworks once a year and civic death for
          the people we find easiest to hate.
        </p>

        <p>America’s registry system is exceptional.</p>

        <p>That is not a compliment.</p>

        <p>It is an indictment.</p>

        <p>But it does not have to be the final word.</p>

        <p>
          We can choose a different kind of exceptionalism: one rooted in truth instead of fear,
          prevention instead of performance, reintegration instead of exile, and accountability that
          is strong enough to include an end.
        </p>

        <p>A registry is not a prevention plan.</p>

        <p>A public label is not justice.</p>

        <p>
          And a nation cannot celebrate liberty honestly while defending lifelong punishment as if it
          were freedom.
        </p>

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            DOJ SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/sorna/current-law"
              target="_blank"
              rel="noopener noreferrer"
            >
              federal SORNA standards
            </a>
          </li>
          <li>
            Public Safety Canada —{" "}
            <a
              className={linkCls}
              href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sx-ffndr-rcdvsm/index-en.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sex Offender Recidivism: A Simple Question
            </a>
          </li>
          <li>
            DOJ / SMART Office —{" "}
            <a
              className={linkCls}
              href="https://www.ojp.gov/library/publications/sex-offender-registration-and-notification-laws-around-world"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sex Offender Registration and Notification Laws around the World
            </a>
          </li>
          <li>
            Department of Justice Canada —{" "}
            <a
              className={linkCls}
              href="https://www.justice.gc.ca/eng/rp-pr/csj-sjc/jsp-sjp/arnsor-mlrnds/p2.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada’s National Sex Offender Registry
            </a>
          </li>
          <li>
            New Zealand Police —{" "}
            <a
              className={linkCls}
              href="https://www.police.govt.nz/about-us/programmes-and-initiatives/child-sex-offender-cso-register/cso-register-frequently-asked"
              target="_blank"
              rel="noopener noreferrer"
            >
              Child Sex Offender Register FAQ
            </a>
          </li>
          <li>
            Council of Europe —{" "}
            <a
              className={linkCls}
              href="https://www.coe.int/en/web/portal/-/managing-persons-accused-or-convicted-of-a-sexual-offence-council-of-europe-issues-new-guidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommendation on assessment, management, and reintegration
            </a>
          </li>
          <li>
            Public Safety Canada —{" "}
            <a
              className={linkCls}
              href="https://www.canada.ca/en/public-safety-canada/news/2017/05/funding_announcedforexpansionofcirclesofsupportandaccountability.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              description of Circles of Support and Accountability
            </a>
          </li>
          <li>
            Sexual Abuse journal —{" "}
            <a
              className={linkCls}
              href="https://journals.sagepub.com/doi/10.1177/1079063209347724"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canadian national CoSA replication study
            </a>
          </li>
          <li>
            Public Safety Canada —{" "}
            <a
              className={linkCls}
              href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2009-01-trt/index-en.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              treatment meta-analysis
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/the-registry-is-not-a-prevention-plan">
              The Registry Is Not a Prevention Plan
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources">
              SOLAR’s resources
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/state-registry">
              state registry overview pages
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-tracker">
              the Legislative Tracker
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}