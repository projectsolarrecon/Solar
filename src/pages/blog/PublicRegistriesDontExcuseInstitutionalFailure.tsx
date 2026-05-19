import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function PublicRegistriesDontExcuseInstitutionalFailure(): JSX.Element {
  return (
    <BlogLayout
      title="Public Registries Don’t Excuse Institutional Failure"
      description="The Kaiser lawsuits in the Vancouver pediatrician case show why real child safety requires complaint systems, institutional accountability, and action on warnings — not just public registries."
      keywords="institutional accountability, public registries, child safety prevention, trusted access, complaint systems, Kaiser Permanente lawsuit, Vancouver pediatrician case, institutional failure, failure to warn, medical abuse, prevention failure"
      date="May 18, 2026"
      readTime="7 min"
      badge="📝 BLOG"
      lede="A public registry can’t do an institution’s job. When warnings surface inside a trusted system, prevention depends on whether the institution acts."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            The widening Vancouver case has moved from criminal investigation to institutional
            accountability. Lawsuits against Kaiser entities allege that warnings about former
            pediatrician Michael Wilmington were ignored or minimized for years. If those
            allegations are proven, the central prevention failure was not the absence of a
            bigger public registry — it was the failure of a trusted institution to act on
            warnings inside its own system.
          </p>
        </Callout>

        <p>
          A public registry can’t do an institution’s job. When warnings surface inside a
          trusted system, prevention depends on whether the institution acts.
        </p>

        <p>That is the next lesson from the widening Vancouver case.</p>

        <p>
          The first lesson was already clear: a public list is not a prevention plan. The case
          began with a cyber tip, expanded through digital evidence, and raised hard questions
          about trusted access, adult networks, private settings, and a former pediatrician
          accused by police of abusing children. A registry-centered story was always too small
          for the facts.
        </p>

        <p>Now the case has moved into civil court, and the question is sharper.</p>

        <p>
          According to local reporting, lawsuits filed against Kaiser Permanente entities allege
          that the health system knew or should have known about warning signs involving former
          pediatrician Michael Wilmington and failed to protect children. KPTV reported that a
          May 11 complaint in King County Superior Court names Kaiser Foundation Health Plan of
          Washington, Kaiser Foundation Health Plan of the Northwest, and Kaiser Permanente
          Salmon Creek Medical Office as defendants. The plaintiff, identified as Jane Doe,
          alleges Kaiser knew about abuse and did nothing to stop it.{" "}
          <a
            className={linkCls}
            href="https://www.kptv.com/2026/05/11/lawsuit-alleges-kaiser-ignored-reports-sexual-abuse-by-vancouver-pediatrician/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KPTV
          </a>
        </p>

        <p>
          Those allegations still have to be proven. But if even part of the civil picture is
          true, the prevention failure was not hidden on a map.
        </p>

        <p>It was inside the institution.</p>

        <BandHeader title="The question is not only what police found" icon="⚖️" />

        <p>
          The criminal investigation matters. Arrests matter. Digital evidence matters. Charges
          matter. Law enforcement’s work matters.
        </p>

        <p>But when a case like this spills into civil court, the public-safety question changes.</p>

        <p>It is no longer only: what did police uncover?</p>

        <p>It becomes: what did the institution allegedly know before police arrived?</p>

        <p>That is the question Kaiser now faces in the civil lawsuits.</p>

        <p>
          KGW reported that a lawsuit accuses Kaiser of knowing for years about the danger
          Wilmington allegedly posed and failing to protect children. The report says the
          complaint alleges parents and staff raised concerns, including complaints dating back
          many years.{" "}
          <a
            className={linkCls}
            href="https://www.kgw.com/article/news/crime/lawsuit-kaiser-permanente-abuse-complaints-vancouver-pediatrician-20-years/283-8ab42184-8b9b-4f6e-bfe2-1f4a4c1d8097"
            target="_blank"
            rel="noopener noreferrer"
          >
            KGW
          </a>
        </p>

        <p>
          FOX 13 Seattle reported similar allegations: that staff and parents repeatedly
          reported misconduct, but Kaiser allegedly failed to investigate, report the behavior
          to police, or protect patients.{" "}
          <a
            className={linkCls}
            href="https://www.fox13seattle.com/news/kaiser-permanente-wa-pediatrician-child-sex-abuse"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOX 13 Seattle
          </a>
        </p>

        <p>That is not a registry problem.</p>

        <p>That is an institutional-responsibility problem.</p>

        <p>
          A registry cannot investigate a complaint.
          <br />
          A registry cannot interview staff.
          <br />
          A registry cannot enforce chaperone policies.
          <br />
          A registry cannot remove a doctor from access to children.
          <br />
          A registry cannot call a parent back.
          <br />A registry cannot decide that reputation matters less than safety.
        </p>

        <p>Only an institution can do those things.</p>

        <p>
          And when it does not, the public list becomes a distraction from the people and
          systems that actually had power.
        </p>

        <BandHeader title="A complaint system is not paperwork" icon="📋" />

        <p>
          A complaint system is not a suggestion box. It is not customer service. It is not a
          liability-management ritual.
        </p>

        <p>A complaint system is the safety system.</p>

        <p>If a parent reports boundary-crossing conduct and nothing happens, the system has failed.</p>

        <p>
          If staff notice behavior that does not belong in pediatric care and no one escalates
          it, the system has failed.
        </p>

        <p>
          If leadership treats warnings as reputational threats instead of patient-safety
          alerts, the system has failed.
        </p>

        <p>And if families are warned only after police intervention, the institution has not prevented harm.</p>

        <p>It has managed fallout.</p>

        <p>
          The lawsuit reporting is devastating because it alleges exactly the kind of failure
          that public-safety rhetoric often ignores: not a lack of public fear, but a lack of
          institutional action. Not a failure of neighbors to search a database, but a failure
          of people with direct authority to take warnings seriously.
        </p>

        <p>That is where prevention lives.</p>

        <p>In the complaint log.</p>

        <p>In the staff report.</p>

        <p>In the supervisor’s decision.</p>

        <p>In the chaperone policy.</p>

        <p>In the patient-safety review.</p>

        <p>In the mandatory-reporting call.</p>

        <p>In the choice to act before the scandal becomes public.</p>

        <BandHeader title="Public lists are too late for institutional warnings" icon="🕰️" />

        <p>
          Public registries are built around the past. They tell the public that someone has
          already been convicted of a qualifying offense.
        </p>

        <p>
          Institutional accountability is about the present. It asks whether the people closest
          to the risk are responding to warning signs right now.
        </p>

        <p>Those are not the same thing.</p>

        <p>A registry-centered politics of safety trains the public to ask, “Was this person on a list?”</p>

        <p>That question may matter sometimes. But it is nowhere near enough.</p>

        <p>The better questions are harder:</p>

        <p>Who had access?</p>

        <p>Who had authority?</p>

        <p>Who received complaints?</p>

        <p>Who dismissed them?</p>

        <p>Who documented them?</p>

        <p>Who failed to escalate them?</p>

        <p>Who protected the institution?</p>

        <p>Who warned families?</p>

        <p>Who did not?</p>

        <p>Those are the questions that expose whether a safety system exists at all.</p>

        <p>
          If the Kaiser lawsuits are accurate, then the institution closest to the alleged risk
          was not powerless. It controlled employment. It controlled clinic protocols. It
          controlled patient communication. It controlled internal complaints. It controlled
          supervision. It controlled whether staff concerns were investigated or ignored.
        </p>

        <p>A public registry could not substitute for any of that.</p>

        <BandHeader title="“We didn’t know” is different from “we didn’t act”" icon="🚨" />

        <p>
          There is a difference between a system blindsided by hidden misconduct and a system
          that receives warnings and fails to respond.
        </p>

        <p>The lawsuits against Kaiser are important because they allege the second kind of failure.</p>

        <p>
          KPTV reported that attorneys with PCVA Law said they had been contacted by about 50
          families who were current or former Wilmington patients describing similar patterns.
          The same report says the firm also heard from medical staff who claimed they reported
          inappropriate conduct and were ignored. Kaiser told KPTV that its primary concern is
          for anyone affected, that it attempted to notify every patient Wilmington saw, set up
          a dedicated support line, and continues to urge anyone with relevant information to
          contact law enforcement.{" "}
          <a
            className={linkCls}
            href="https://www.kptv.com/2026/05/11/lawsuit-alleges-kaiser-ignored-reports-sexual-abuse-by-vancouver-pediatrician/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KPTV
          </a>
        </p>

        <p>That response matters. Cooperation matters. Patient notification matters.</p>

        <p>But patient notification after a police investigation is not the same as prevention before harm.</p>

        <p>
          If warnings existed years earlier, the question is not whether the institution
          eventually responded. The question is why the response came so late.
        </p>

        <p>
          That is the brutal heart of institutional abuse cases: the harm is often not only
          what one person did. It is what the system allegedly allowed to continue after people
          raised concerns.
        </p>

        <BandHeader title="This is how institutions protect themselves" icon="🏛️" />

        <p>Institutional failure does not always look like a conspiracy.</p>

        <p>Sometimes it looks like minimizing.</p>

        <p>Sometimes it looks like paperwork going nowhere.</p>

        <p>Sometimes it looks like a parent being reassured that something inappropriate was normal.</p>

        <p>Sometimes it looks like staff concerns being treated as personality conflict.</p>

        <p>Sometimes it looks like managers deciding there is not enough proof to act.</p>

        <p>
          Sometimes it looks like nobody wanting to believe the beloved professional, the
          longtime doctor, the trusted adult, the credentialed insider could be the risk.
        </p>

        <p>And sometimes it looks like reputation protection dressed up as caution.</p>

        <p>
          That is how trusted access becomes dangerous. Not because every institution is
          malicious. Not because every complaint is true. But because institutions have
          incentives that children do not.
        </p>

        <p>Institutions want stability.</p>

        <p>They want credibility.</p>

        <p>They want legal protection.</p>

        <p>They want to avoid scandal.</p>

        <p>They want to believe their systems work.</p>

        <p>Children need something simpler.</p>

        <p>They need adults to act when something is wrong.</p>

        <BandHeader title="The wrong lesson is still waiting" icon="🛑" />

        <p>
          There will always be someone ready to turn a case like this into another argument for
          broader registries, longer registration, or more public exposure.
        </p>

        <p>That is the easy politics.</p>

        <p>But it is not the hard lesson.</p>

        <p>
          If an institution allegedly ignored complaints, a bigger registry does not answer
          that. If staff allegedly raised concerns and nothing happened, a public list does not
          answer that. If families allegedly reported conduct and were minimized, a map does
          not answer that. If recent patients were not warned until after the criminal
          investigation became unavoidable, registry expansion does not answer that.
        </p>

        <p>A public registry does not excuse institutional failure.</p>

        <p>It cannot become the alibi.</p>

        <p>
          The presence or absence of a public list does not relieve a medical provider, school
          district, church, youth organization, sports program, or child-serving agency of its
          own duty to protect children in its care.
        </p>

        <p>That duty is not outsourced to the internet.</p>

        <p>It is not outsourced to parents.</p>

        <p>It is not outsourced to police after the fact.</p>

        <p>It belongs to the institution with access, authority, records, staff, policies, and power.</p>

        <BandHeader title="Prevention is boring until it fails" icon="🌱" />

        <p>Real prevention rarely looks dramatic.</p>

        <p>It looks like a complaint taken seriously.</p>

        <p>It looks like a second adult in the room.</p>

        <p>It looks like an exam protocol that cannot be improvised by one charismatic doctor.</p>

        <p>It looks like a staff member who knows exactly where to report a concern.</p>

        <p>It looks like a supervisor who escalates instead of explains away.</p>

        <p>It looks like a parent being believed.</p>

        <p>It looks like a child being protected before a warrant exists.</p>

        <p>It looks like documentation, training, reporting, oversight, and consequences.</p>

        <p>That work is boring only until it fails.</p>

        <p>Then everyone asks how it could have happened.</p>

        <p>The answer, again and again, is that safety was treated as a slogan instead of a system.</p>

        <BandHeader title="The public deserves the real question" icon="❓" />

        <p>
          The Vancouver case is still developing. The lawsuits are allegations. The criminal
          investigation remains active. The public record will need to be followed carefully.
        </p>

        <p>But the institutional question is already unavoidable.</p>

        <p>If warnings were raised, what happened to them?</p>

        <p>If complaints were filed, who reviewed them?</p>

        <p>If staff had concerns, who heard them?</p>

        <p>If families were worried, who called them back?</p>

        <p>If the institution knew enough to act, why did it not act sooner?</p>

        <p>That is not a side issue. That is the public-safety issue.</p>

        <p>A registry can name a person after conviction.</p>

        <p>It cannot make an institution honest.</p>

        <p>It cannot make a complaint system work.</p>

        <p>It cannot force leadership to choose children over reputation.</p>

        <p>That responsibility belongs to the institution.</p>

        <p>
          And when an institution fails, no public list should be allowed to take the blame for
          it — or provide cover for it.
        </p>

        <Divider label="Sources and next steps" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            KPTV —{" "}
            <a
              className={linkCls}
              href="https://www.kptv.com/2026/05/11/lawsuit-alleges-kaiser-ignored-reports-sexual-abuse-by-vancouver-pediatrician/"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on the King County Superior Court lawsuit and Kaiser’s public response
            </a>
          </li>
          <li>
            KGW —{" "}
            <a
              className={linkCls}
              href="https://www.kgw.com/article/news/crime/lawsuit-kaiser-permanente-abuse-complaints-vancouver-pediatrician-20-years/283-8ab42184-8b9b-4f6e-bfe2-1f4a4c1d8097"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on lawsuit allegations involving complaints by parents and staff
            </a>
          </li>
          <li>
            FOX 13 Seattle —{" "}
            <a
              className={linkCls}
              href="https://www.fox13seattle.com/news/kaiser-permanente-wa-pediatrician-child-sex-abuse"
              target="_blank"
              rel="noopener noreferrer"
            >
              reporting on allegations that Kaiser failed to investigate, report, or protect patients
            </a>
          </li>
          <li>
            PCVA Law —{" "}
            <a
              className={linkCls}
              href="https://pcva.law/news/first-michael-wilmington-lawsuit-filed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              plaintiff-side description of the lawsuit theory
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link
              className={linkCls}
              to="/blog/vancouver-case-public-lists-not-prevention-plan"
            >
              The Vancouver Case Shows Why Public Lists Are Not a Prevention Plan
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/accountability-watch">
              Accountability Watch
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/advocacy">
              SOLAR’s advocacy framework
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources">
              SOLAR resources
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}