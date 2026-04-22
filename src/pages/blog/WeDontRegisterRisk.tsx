import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function WeDontRegisterRisk(): JSX.Element {
  return (
    <BlogLayout
      title="We Don’t Register Risk. We Register Contempt."
      description="America says child safety justifies permanent registries and exclusion. But when danger is politically useful or culturally protected, the absolutism disappears."
      keywords="sex offender registry hypocrisy, child safety theater, Jan. 6 pardon, Andrew Paul Johnson, Daniel Tocci, registry reform, public safety"
      date="Apr 22, 2026"
      readTime="10 min"
      badge="📝 BLOG"
      lede="America says it is uncompromising about protecting children. That is the pose. The reality is far more selective, far more political, and far less honest."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="urgent" title="What this post argues" icon="⚖️">
          <p>
            The registry debate is usually framed as a simple question of child protection. But when you compare how
            America treats registrants to how it treats politically protected offenders, a different logic comes into
            view. The system is not organized around individualized risk. It is organized around who the culture is
            willing to hate forever.
          </p>
        </Callout>

        <BandHeader title="The Principle We Pretend to Apply" icon="🧭" />
        <p>
          Every time lawmakers defend registries, residency restrictions, public databases, exclusion zones, endless
          reporting requirements, and permanent suspicion, the justification is always the same: <em>children must come
          first.</em>
        </p>
        <p>
          We are told these measures exist because when child safety is at stake, society has to be vigilant,
          relentless, and unwilling to take chances.
        </p>
        <p>But that principle is not applied consistently. Not even close.</p>
        <p>
          Our system claims to be obsessed with protecting children, but it is wildly selective about where it applies
          surveillance, stigma, and long-term control. We impose lifelong monitoring on huge numbers of people whose
          offenses may be old, non-contact, or highly individualized, while people with obvious markers of violence,
          instability, coercion, or abuse can move through the world without anything like that level of public
          fixation or ongoing restraint.
        </p>
        <p>And when the person fits a politically protected narrative, we suddenly rediscover nuance.</p>
        <p>He is a patriot. A victim. A man who deserves mercy, context, reinstatement, a second chance.</p>
        <p>His conduct is framed as complicated. His future remains imaginable. His supporters ask us to look at the whole person.</p>
        <p>
          But when the target is a registrant — even one whose conduct was nonviolent, years old, or radically
          different from the public’s cartoon understanding of “sex offender” — nuance disappears.
        </p>
        <p>
          Then the script changes. Then we are told permanent suspicion is just common sense. Then exclusion becomes
          “safety.” Then public humiliation becomes “awareness.” Then endless punishment becomes “protection.”
        </p>

        <PullQuote>“That is not a serious public-safety framework. It is a moral sorting machine.”</PullQuote>

        <Divider label="Where the hypocrisy shows" />

        <BandHeader title="When the Protected Are Dangerous, Mercy Survives" icon="📰" />
        <p>
          According to the{" "}
          <a
            className={linkCls}
            href="https://apnews.com/article/capito-riot-trump-pardon-child-molestation-f2690d4574a30afdec82edac04c2f4b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Associated Press
          </a>
          , Andrew Paul Johnson — a Jan. 6 defendant who received clemency as part of Donald Trump’s sweeping pardon
          action for Capitol rioters — was later convicted in Florida of child molestation-related crimes and sentenced
          to life in prison. AP reported that one victim said the abuse began around April 2024, before Johnson was
          sentenced in his Jan. 6 case, and that Trump’s January 2025 clemency action covered more than 1,500 Capitol
          defendants.
        </p>
        <p>
          The details matter. Johnson was not some abstract “bad guy” dropped into a convenient political talking
          point. He was a real-world example of the exact sort of person our public-safety rhetoric claims to fear
          most: a demonstrably dangerous offender who abused children in actual life, not in fantasy, not in symbol,
          not in projection.
        </p>
        <p>
          Yet the broader political culture that insists it is ruthlessly committed to child protection had no problem
          extending mass mercy and rehabilitation to a movement full of men celebrated precisely because they fit the
          right ideological story.
        </p>
        <p>
          The point is not that every Jan. 6 defendant should have been placed on some new permanent registry. The
          point is that this country is plainly capable of treating obvious danger with flexibility, forgiveness, and
          political sympathy — just not when the target is someone society has already decided it is acceptable to hate
          forever.
        </p>

        <BandHeader title="The Contradiction Gets Worse, Not Better" icon="📚" />
        <p>
          The Daniel Tocci case sharpens that contradiction further. The{" "}
          <a
            className={linkCls}
            href="https://www.justice.gov/usao-ma/pr/amherst-man-sentenced-four-years-prison-possessing-enormous-child-pornography-collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Attorney’s Office for the District of Massachusetts
          </a>{" "}
          announced on March 30, 2026, that Tocci was sentenced to four years in prison after authorities found more
          than 100,000 files depicting the sexual abuse of minors, including material involving a toddler. Prosecutors
          also said his devices contained violent imagery, including a woman being shot in the head, animals being
          killed, and search terms related to child sexual abuse.
        </p>
        <p>
  And then there is David Daniel. Reporting on federal court records said that Daniel — another Jan. 6 defendant
  who received Trump clemency — reached a plea agreement in a separate federal child-exploitation case and was set
  to plead guilty. Earlier Justice Department reporting had already identified Daniel as a North Carolina Jan. 6
  defendant charged with assaulting law enforcement during the Capitol attack.{" "}
  <a
    className={linkCls}
    href="https://www.ms.now/rachel-maddow-show/maddowblog/pardoned-jan-6-rioter-to-plead-guilty-in-child-sexual-abuse-case-adding-to-pattern"
    target="_blank"
    rel="noopener noreferrer"
  >
    Reporting on the later plea development
  </a>{" "}
  described federal court records indicating charges involving child exploitation of multiple victims, while the{" "}
  <a
    className={linkCls}
    href="https://www.justice.gov/usao-dc/pr/north-carolina-man-arrested-assaulting-law-enforcement-and-other-charges-during-jan-6-0"
    target="_blank"
    rel="noopener noreferrer"
  >
    original DOJ release
  </a>{" "}
  confirms his Jan. 6 case identity.
</p>

<p>
  By the time we get to Johnson, Tocci, and Daniel, this is no longer a one-off embarrassment. It is a pattern:
  men tied to a political movement treated as uniquely deserving of sympathy, pardon, or rehabilitation later
  surfacing in child-exploitation or child-abuse cases while the same political culture continues to posture as
  fanatically committed to protecting children.
</p>
        <p>
          But when the danger comes wrapped in a politically protected identity — patriot, loyalist, culture-war ally,
          familiar man, useful symbol — the supposed absolutism of child protection softens into mercy, context, and
          second chances.
        </p>
        <p>
          That is what actual hypocrisy looks like. Not just inconsistency, but selective moral intensity. Not a system
          designed around risk, but one designed around contempt.
        </p>

        <Callout variant="warning" title="The deeper problem" icon="⚠️">
          <p>
            If public policy were truly built around individualized risk, demonstrated danger, and evidence-based
            prevention, America would spend far less time theatrically posturing about registrants as a permanent caste
            and far more time confronting violence, coercion, authority, grooming, domestic abuse, and the institutional
            settings in which real harm develops.
          </p>
        </Callout>

        <BandHeader title="What Registries Actually Provide" icon="🎭" />
        <p>Instead, America prefers the easier ritual.</p>
        <p>Take a broad class of already despised people.</p>
        <p>Mark them permanently.</p>
        <p>Announce that the marking itself is protection.</p>
        <p>Call the cruelty “awareness.”</p>
        <p>Call the banishment “prevention.”</p>
        <p>Call the stigma “public safety.”</p>
        <p>And then act confused when children remain unprotected.</p>
        <p>
          That is the part nobody in power wants to say out loud: a great deal of America’s child-protection posturing
          is performance.
        </p>
        <p>
          It is not designed to think clearly. It is designed to reassure the public that the government is{" "}
          <em>doing something</em>. It is designed to satisfy emotional hunger for visible enemies, visible maps,
          visible warnings, visible punishment. It is designed to convert fear into policy theater.
        </p>
        <p>And theater is exactly what registries provide.</p>
        <p>
          They give the public the illusion of control without requiring the harder work of confronting how sexual abuse
          usually happens. Abuse is often committed not by the stereotyped stranger but by people with trust, access,
          proximity, status, or emotional leverage. It happens in families, institutions, relationships, communities,
          workplaces, churches, schools, and homes.
        </p>
        <p>
          That reality is more unsettling than the registry myth because it demands a smarter and more uncomfortable
          form of vigilance than simply watching a permanent underclass. So instead, the law performs certainty where
          reality offers complexity.
        </p>

        <PullQuote>“We do not register risk. We register contempt.”</PullQuote>

        <Divider label="Why this matters to SOLAR" />

        <BandHeader title="This Is a Structural Critique, Not a Partisan Trick" icon="🏛️" />
        <p>
          Donald Trump is not some neutral messenger in this story.{" "}
          <a
            className={linkCls}
            href="https://www.reuters.com/legal/jurors-set-deliberate-civil-rape-case-against-donald-trump-2023-05-09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reuters reported
          </a>{" "}
          that a jury found Trump liable for sexual abuse and defamation in E. Jean Carroll’s civil case, and{" "}
          <a
            className={linkCls}
            href="https://www.reuters.com/legal/government/trump-fails-overturn-e-jean-carrolls-833-million-verdict-2025-09-08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reuters later reported
          </a>{" "}
          that the related verdicts remained intact on appeal.
        </p>
        <p>
          So when a convicted felon who has himself been found liable for sexual abuse extends sweeping clemency to a
          movement that later produces yet more child-abuse headlines, no one should pretend the symbolism is
          incidental.
        </p>
        <p>The larger point, however, is not partisan. It is structural.</p>
        <p>
          A society genuinely committed to child safety would build policy around reality, not ritual. It would invest
          in prevention that reflects how abuse actually happens. It would distinguish between radically different kinds
          of conduct instead of collapsing everything into one dehumanizing category.
        </p>
        <p>
          It would stop confusing permanent public degradation with effective protection. It would stop pretending that
          a registry map is a substitute for intelligence. And it would stop selectively extending nuance to the
          powerful, the violent, the politically convenient, and the culturally protected while reserving lifelong civic
          death for the people easiest to despise.
        </p>

        <BandHeader title="The Truth Beneath the Performance" icon="🔍" />
        <p>The Johnson case is a failure.</p>
        <p>The Tocci case is a failure.</p>
        <p>
          Not because the system never punished anyone in the end, but because these cases reveal how unserious our
          so-called child-protection politics really are.
        </p>
        <p>
          The public is encouraged to obsess over the permanently marked while obvious danger continues to surface
          elsewhere — sometimes in people who receive sympathy, reinstatement, or second chances from the very political
          culture that lectures everyone else about protecting children.
        </p>
        <p>So no, this is not a call to register every violent offender forever.</p>
        <p>It is not a call to widen the dragnet.</p>
        <p>It is not a call for more punishment theater.</p>
        <p>It is a call to tell the truth.</p>
        <p>
          Until this country is willing to admit what registries actually are — not a coherent public-safety framework,
          but a selective mechanism of moral banishment — all the obsessive child-protection posturing in the world
          will remain what it too often already is: performance for the public, cruelty for the marked, and failure for
          the children it claims to protect.
        </p>

        <Divider />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            Associated Press —{" "}
            <a
              className={linkCls}
              href="https://apnews.com/article/capito-riot-trump-pardon-child-molestation-f2690d4574a30afdec82edac04c2f4b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jan. 6 defendant Andrew Paul Johnson later convicted in Florida child-molestation case
            </a>
          </li>
          <li>
            U.S. Attorney’s Office, District of Massachusetts —{" "}
            <a
              className={linkCls}
              href="https://www.justice.gov/usao-ma/pr/amherst-man-sentenced-four-years-prison-possessing-enormous-child-pornography-collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amherst man sentenced for possessing more than 100,000 child sexual abuse files
            </a>
          </li>
          <li>
            Reuters —{" "}
            <a
              className={linkCls}
              href="https://www.reuters.com/legal/jurors-set-deliberate-civil-rape-case-against-donald-trump-2023-05-09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jury finds Trump liable for sexual abuse and defamation in E. Jean Carroll case
            </a>
          </li>
          <li>
            Reuters —{" "}
            <a
              className={linkCls}
              href="https://www.reuters.com/legal/government/trump-fails-overturn-e-jean-carrolls-833-million-verdict-2025-09-08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appeal leaves E. Jean Carroll verdicts intact
            </a>
          </li>
        </ul>
<li>
  MSNBC / Maddow Blog —{" "}
  <a
    className={linkCls}
    href="https://www.ms.now/rachel-maddow-show/maddowblog/pardoned-jan-6-rioter-to-plead-guilty-in-child-sexual-abuse-case-adding-to-pattern"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pardoned Jan. 6 rioter to plead guilty in child sexual abuse case
  </a>
</li>
<li>
  U.S. Department of Justice —{" "}
  <a
    className={linkCls}
    href="https://www.justice.gov/usao-dc/pr/north-carolina-man-arrested-assaulting-law-enforcement-and-other-charges-during-jan-6-0"
    target="_blank"
    rel="noopener noreferrer"
  >
    North Carolina man arrested for assaulting law enforcement during Jan. 6
  </a>
</li>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/the-safety-illusion">
              The Safety Illusion
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/the-people-in-the-room">
              The People in the Room
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/children-we-dont-protect-part1">
              The Children We Don’t Protect
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/the-cases-we-dont-investigate">
              The Cases We Don’t Investigate
            </Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}