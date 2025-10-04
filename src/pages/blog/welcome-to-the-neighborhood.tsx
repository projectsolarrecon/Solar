import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function WelcomeToTheNeighborhood(): JSX.Element {
  return (
    <BlogLayout
      title="Welcome to the Neighborhood"
      description="Examining how violent offenders quietly reenter communities while non-violent offenders face lifelong stigma."
      keywords="justice system, parole, violent offenders, sex offender registry, sentencing disparity"
      date="Oct 4, 2025"
      readTime="12 min"
      badge="📝 BLOG"
      lede="When murderers walk free while non-violent offenders remain branded for life, something in our definition of justice has gone deeply wrong."
    >
      <article className="prose prose-slate max-w-none">
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            Violent offenders — including child killers — are often paroled quietly after surprisingly short sentences, with no public registry or ongoing oversight. Meanwhile, non-violent federal sex offenders serve longer terms and live under lifelong restrictions and registration. The result: a justice system that punishes visibility, not violence.
          </p>
        </Callout>

        <BandHeader title="Welcome to the Neighborhood" icon="🏘️" />
        <p>
          <em>
            Ronald Exantus’s recent parole made headlines this week — the man who broke into a Kentucky home and killed a 6-year-old child will be fully free by June 2026, with no public registry, no restrictions, and no trace. It’s shocking, but it’s not an anomaly. This post isn’t about one case; it’s about the pattern. When murderers are quietly reintegrated while non-violent offenders remain marked for life, something in our definition of “justice” has gone very wrong.
          </em>
        </p>

        <p className="mt-6">
          Imagine a world where a man who murdered a child in cold blood is quietly released back onto your street, no public registry to warn you – while another man, who never laid a hand on anyone but possessed illegal images, is imprisoned for over a decade and will be branded for life on a public list. This isn’t a dystopian novel; it’s reality in the American justice system. Violent offenders, including child killers, often serve surprisingly short prison terms and re-enter society with little fanfare, <strong>no requirement to register or notify the public</strong>, and minimal supervision. Meanwhile, non-violent federal sex offenders (like those convicted of possessing or sharing child sexual abuse material) face long prison sentences, lifetime supervised release, and permanent inclusion on sex offender registries. The contrast is jarring – and it raises uncomfortable questions about how we prioritize punishment and public safety.
        </p>

        <PullQuote>
          “Good news: You stopped the guy who clicked a bad link from moving in.  
          Bad news: The man who killed a child is now your neighbor — and you’ll never know.”
        </PullQuote>

        <Divider label="Pattern of Release" />

        <BandHeader title="Violent Offenders Released Early, No Public Registry" icon="⚖️" />

        <p className="mt-6">
          <strong>Ronald Exantus (Kentucky)</strong> – In 2015, Exantus broke into a family’s home and stabbed 6-year-old Logan Tipton to death as the boy slept. He also attacked Logan’s father and sisters. A jury found Exantus “guilty but mentally ill” on assault charges (he was found not guilty by reason of insanity for the murder itself) and he received a 20-year sentence in 2018. Shockingly, Exantus was <strong>paroled after serving only about 7 years</strong> behind bars. Records show he was released on <strong>Oct 1, 2025</strong>, thanks to generous good-behavior and education credits. His mandatory parole supervision will end by <strong>June 18, 2026</strong>, at which point he walks free with no further oversight. There will be no requirement for Exantus to register on any public list after his sentence expires. As Logan’s outraged father put it, <em>“It just seems like a 6-year-old’s life is worth more than 10 years in prison”</em> – yet by next year, his child’s killer will be out of the system entirely.  
          <a className={linkCls} href="https://people.com/man-freed-after-killing-6-year-old-logan-tipton-11824076" target="_blank" rel="noopener">People / WLKY</a> |{" "}
          <a className={linkCls} href="https://www.wkyt.com/2025/10/02/expert-weighs-man-convicted-2015-stabbing-death-is-released-prison/" target="_blank" rel="noopener">WKYT</a> |{" "}
          <a className={linkCls} href="https://www.wlky.com/article/indiana-man-deadly-stabbing-kentucky-boy-prison/68808267" target="_blank" rel="noopener">WLKY local report</a>
        </p>

        <p className="mt-6">
          <strong>Herbert David Brown III (California)</strong> – Brown beat his 22-month-old daughter, Lily, so badly that she died from a fractured skull and other injuries in 2013. He pleaded no contest to second-degree murder in 2015 and was sentenced to 15-to-life in prison. Under California’s parole system (enhanced by Proposition 57’s “rehabilitation” credits), Brown became eligible far earlier than 15 years. In October 2024, despite fierce objections from the local District Attorney and Lily’s grieving mother, a parole board <strong>granted Brown parole after about 12 years</strong> in custody. In April 2025, that decision was upheld – clearing the way for Brown’s release well before the minimum term of his sentence. Brown will <strong>not appear on any public offender registry</strong> after release. The local DA condemned the outcome as “shameful.”  
          <a className={linkCls} href="https://www.slocounty.ca.gov/departments/district-attorney/latest-news/2025/april/convicted-child-murderer-herbert-brown-iii-of-paso-robles-granted-parole-despite-family-and-district" target="_blank" rel="noopener">San Luis Obispo DA</a> |{" "}
          <a className={linkCls} href="https://www.ksby.com/news/local-news/person-who-killed-toddler-daughter-in-paso-robles-in-2013-granted-parole" target="_blank" rel="noopener">KSBY News</a> |{" "}
          <a className={linkCls} href="https://www.sanluisobispo.com/news/local/crime/article304993881.html" target="_blank" rel="noopener">The Tribune</a>
        </p>

        <p className="mt-6">
          <strong>Jeffrey Powell (California)</strong> – In January 2013, while already on parole for prior offenses, Powell committed a <strong>home-invasion murder</strong>. He and accomplices kicked in the door of a Citrus Heights home in the middle of the night; Powell repeatedly stabbed 52-year-old Jack Swaim, who bled to death while his son and mother tried to save him. A jury convicted Powell in 2015 of second-degree murder and burglary; he received a <strong>16-years-to-life</strong> sentence. Yet in October 2023, after only about 10 years in prison, Powell was <strong>granted early parole</strong> – roughly a 40% reduction of his minimum term. California’s parole board approved his release in spite of Powell’s extensive prison misconduct (including leading a white-supremacist gang). By April 2024, the parole grant was finalized. Powell – an admittedly violent individual with a 23-year criminal history – is being freed with <strong>no requirement to register</strong> as a violent offender.  
          <a className={linkCls} href="https://www.abc10.com/article/news/crime/killer-citrus-heights-man-granted-early-parole/103-30d910dd-bdc5-4974-83a3-9b698bf45eb5" target="_blank" rel="noopener">ABC10</a> |{" "}
          <a className={linkCls} href="https://www.kcra.com/article/sacramento-early-parole-granted-home-invasion-murder/60652881" target="_blank" rel="noopener">KCRA News</a> |{" "}
          <a className={linkCls} href="https://www.sacda.org/2024/04/convicted-murderer-granted-early-parole-after-serving-only-10-yrs-in-prison/" target="_blank" rel="noopener">Sacramento DA</a> |{" "}
          <a className={linkCls} href="https://law.justia.com/cases/california/court-of-appeal/2021/c079181.html" target="_blank" rel="noopener">Justia case file</a>
        </p>

        <Callout variant="research" title="Data Snapshot" icon="📊">
          <p>
            According to the{" "}
            <a className={linkCls} href="https://bjs.ojp.gov/library/publications/time-served-state-prison-2018" target="_blank" rel="noopener">
              Bureau of Justice Statistics
            </a>
            , the average time served by people released from state prisons for murder is about <strong>17.8 years</strong>. Excluding life or death sentences, it’s <strong>15.6 years</strong>. Most convicted killers spend well under two decades in prison, and once supervision ends, they live with <strong>no public registry</strong>.
          </p>
        </Callout>

        <Divider label="Contrast" />

        <BandHeader title="Non-Violent Sex Offenders: Long Sentences, Lifetime Stigma" icon="⚖️" />
        <p>
          Contrast the above with how the system treats non-violent <strong>federal sex offenders</strong>, particularly those involved in <strong>child sexual-abuse material (CSAM)</strong>. These offenses are serious, but they do not involve physical contact; often the crime is possessing or sharing illegal files online. Yet federal sentencing policy is extremely harsh.
        </p>

        <p>
          According to the{" "}
          <a className={linkCls} href="https://www.ussc.gov/sites/default/files/pdf/research-and-publications/quick-facts/Child_Pornography_FY24.pdf" target="_blank" rel="noopener">
            U.S. Sentencing Commission Quick Facts (FY 2024)
          </a>
          , the average sentence for simply <strong>possessing</strong> CSAM is about <strong>82 months</strong> (~6.8 years). For <strong>distribution or trafficking</strong>, the average is roughly <strong>151 months</strong> (~12.6 years). Many serve longer due to <strong>mandatory minimums</strong> — typically 5-, 10-, or 15-year terms.
        </p>

        <Callout variant="info" title="After Prison" icon="🕊️">
          <p>
            Federal sex-offense convictions include <strong>supervised release of 5 years to life</strong> and <strong>lifetime registration</strong> under the{" "}
            <a className={linkCls} href="https://smart.ojp.gov/sorna" target="_blank" rel="noopener">
              Sex Offender Registration and Notification Act (SORNA)
            </a>
            . Offenders’ names, photos, and addresses are made public, and restrictions on housing, employment, and movement persist indefinitely.
          </p>
        </Callout>

        <Divider label="Final Reflection" />

        <BandHeader title="Welcome to the Neighborhood" icon="🏚️" />
        <p>
          The <strong>disparity is stark</strong>. A man who violently took a child’s life can walk free after a few years and quietly blend back into society, <strong>unregistered and anonymous</strong>. Meanwhile, a man who clicked on or shared illegal images will serve a sentence comparable to or longer than many murderers — and even after release he will never escape the <strong>scarlet letter</strong> of sex-offender status, his name and crime forever one Google search away.
        </p>

        <PullQuote>
          “Welcome to the Neighborhood — where the good news is you can easily prevent a man with a past online sex offense from moving in next door, and the bad news is that the man who murdered a child might already be living on your street, unnoticed and unchecked.”
        </PullQuote>

        <Divider label="Sources" />

        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            <a className={linkCls} href="https://people.com/man-freed-after-killing-6-year-old-logan-tipton-11824076" target="_blank" rel="noopener">
              People / WLKY — “He Broke into Family’s Home … Now He’s Released”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.wkyt.com/2025/10/02/expert-weighs-man-convicted-2015-stabbing-death-is-released-prison/" target="_blank" rel="noopener">
              WKYT — “Expert weighs in as man convicted in 2015 stabbing death is released”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.wlky.com/article/indiana-man-deadly-stabbing-kentucky-boy-prison/68808267" target="_blank" rel="noopener">
              WLKY — “Indiana man convicted in deadly stabbing … released from prison”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.slocounty.ca.gov/departments/district-attorney/latest-news/2025/april/convicted-child-murderer-herbert-brown-iii-of-paso-robles-granted-parole-despite-family-and-district" target="_blank" rel="noopener">
              San Luis Obispo County DA — “Convicted Child Murderer Herbert Brown III … Granted Early Parole”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.ksby.com/news/local-news/person-who-killed-toddler-daughter-in-paso-robles-in-2013-granted-parole" target="_blank" rel="noopener">
              KSBY — “Person who killed toddler daughter … granted parole”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.sanluisobispo.com/news/local/crime/article304993881.html" target="_blank" rel="noopener">
              The Tribune — “DA Dan Dow asks governor to reverse parole for child murderer”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.abc10.com/article/news/crime/killer-citrus-heights-man-granted-early-parole/103-30d910dd-bdc5-4974-83a3-9b698bf45eb5" target="_blank" rel="noopener">
              ABC10 — “Killer of Citrus Heights man granted early parole”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.kcra.com/article/sacramento-early-parole-granted-home-invasion-murder/60652881" target="_blank" rel="noopener">
              KCRA — “SAC man convicted … granted early parole”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.sacda.org/2024/04/convicted-murderer-granted-early-parole-after-serving-only-10-yrs-in-prison/" target="_blank" rel="noopener">
              Sacramento DA — “Convicted Murderer Granted Early Parole After Serving Only 10 Yrs”
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://law.justia.com/cases/california/court-of-appeal/2021/c079181.html" target="_blank" rel="noopener">
              Justia — California v. Powell appellate decision
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://bjs.ojp.gov/library/publications/time-served-state-prison-2018" target="_blank" rel="noopener">
              Bureau of Justice Statistics — Time Served in State Prison, 2018
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.ussc.gov/sites/default/files/pdf/research-and-publications/quick-facts/Child_Pornography_FY24.pdf" target="_blank" rel="noopener">
              U.S. Sentencing Commission — Quick Facts: Child Pornography (FY 2024)
            </a>
          </li>
        </ul>

        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">Community Ties</Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/legislative-gaps">Legislative Gaps</Link>
          </li>
        </ul>
      </article>
    </BlogLayout>
  );
}