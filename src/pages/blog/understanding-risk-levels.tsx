import BlogLayout from "../../components/layouts/BlogLayout";
import { Callout, PullQuote, Divider } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function UnderstandingRiskLevels() {
  return (
    <BlogLayout
      title="Understanding “Risk Levels” on the Sex Offender Registry: What They Really Mean — and Don’t Mean"
      description="Explainer on what risk levels in sex offender registries mean, how they are determined, and what they actually control."
      keywords={["risk levels", "sex offender registry", "SORNA", "recidivism", "static-99r"]}
      date="2025-12-12"
      readTime="11 min"
      badge="📝 BLOG"
      lede="An explainer of how risk levels on sex offender registries are created, what they mean in practice, and why they often don’t match actual risk."
    >
      <article>

        {/* Intro */}
        <p className="mt-6">
          Risk assessments and classification tiers shape where a person can live, how they are supervised, whether they appear online, and how long they must remain on the registry. Yet despite their enormous influence, most people — including those forced to live under them — don’t understand what these labels actually mean.
        </p>

        <p className="mt-6">
          This explainer breaks down how risk levels are created, why they differ so dramatically between states, and what they really mean for day-to-day life.
        </p>

        <Divider />

        {/* Section 1 */}
        <h1 className="mt-6">1. Risk Levels Were Supposed to Be Scientific — But They Mostly Aren’t</h1>

        <p className="mt-6">
          When lawmakers created classification systems in the 1990s and 2000s, they claimed they were building a scientific way to identify people who might pose ongoing danger.  
          But most current systems are <strong>not scientific at all</strong> — and some aren’t even based on risk.
        </p>

        <h2 className="mt-6">A. The federal system (SORNA) is offense-based, not risk-based</h2>

        <p className="mt-6">
          The federal Sex Offender Registration and Notification Act (SORNA) assigns Tier I, II, or III <strong>solely based on the conviction statute</strong>, not on personal characteristics, treatment progress, or any actuarial risk tool.  
          The DOJ SMART Office is explicit: SORNA tiers are “offense-based, not risk-based.”  
          Source: <a className={linkCls} href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/sorna-ic-guide.pdf" target="_blank" rel="noopener noreferrer">SMART Office Guide to SORNA</a> 0
        </p>

        <p className="mt-6">
          A Tier III designation does <strong>not</strong> mean someone is a “high risk” to reoffend.  
          It means Congress put their <strong>statute</strong> in the Tier III bucket — nothing more.
        </p>

        {/* Callout Box */}
        <Callout variant="info" className="mt-6">
          <strong>📘 What SORNA Actually Does — and Doesn’t Do</strong>
          <p className="mt-2">
            Most people assume federal SORNA controls their registration level, their housing, and whether they appear online. It doesn’t.
          </p>

          <h3 className="mt-4 font-semibold">What SORNA <em>does</em>:</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Sets **baseline federal standards** for how states should register people</li>
            <li>Defines **Tier I, II, III** using statutes — not risk</li>
            <li>Specifies minimum durations (15 / 25 / lifetime)</li>
            <li>Requires jurisdictions to share information</li>
            <li>Applies to **states, tribes, territories, and federal agencies**</li>
          </ul>

          <h3 className="mt-4 font-semibold">What SORNA <em>does NOT</em> do:</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>SORNA does not force states to adopt its tiers.</strong> States can — and many do — ignore SORNA’s classification model. Source: <a className={linkCls} href="https://www.everycrsreport.com/reports/R43954.html" target="_blank" rel="noopener noreferrer">CRS Report R43954</a> 1</li>
            <li><strong>SORNA does not override state law.</strong> Your state tier, relief eligibility, housing rules, and posting rules come from **state law**, not SORNA.</li>
            <li><strong>SORNA does not determine public posting.</strong> SORNA does not require states to place everyone online.</li>
            <li><strong>SORNA does not impose residency restrictions.</strong> Federal law says nothing about where you can live — those rules are 100% state/local.</li>
            <li><strong>SORNA does not control probation or parole.</strong></li>
            <li><strong>SORNA tiers don’t automatically follow you across states.</strong></li>
            <li><strong>SORNA does not apply directly to individuals.</strong> It governs jurisdictions, not people.</li>
          </ul>

          <p className="mt-4">
            <strong>Bottom line:</strong> Your day-to-day experience is shaped by **state law**, not SORNA — and the two systems often contradict each other.
          </p>
        </Callout>

        <PullQuote className="mt-6">
          “Your risk level often reflects your ZIP code more than your actual risk.”
        </PullQuote>

        <Divider />

        {/* Section 2 */}
        <h1 className="mt-6">2. What Risk Levels Actually Control in Daily Life</h1>

        <p className="mt-6">
          Risk classifications dictate some of the most important aspects of daily living for people on the registry.
        </p>

        <h2 className="mt-6">A. How long you must register</h2>

        <p className="mt-6">
          SORNA sets federal minimums:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Tier I:</strong> 15 years</li>
          <li><strong>Tier II:</strong> 25 years</li>
          <li><strong>Tier III:</strong> Lifetime</li>
        </ul>
        <p className="mt-2">
          Source: <a className={linkCls} href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act" target="_blank" rel="noopener noreferrer">SORNA Final Rule (Federal Register, 2021)</a> 
        </p>

        <p className="mt-6">
          But states routinely create **longer durations** or systems that ignore SORNA entirely.
        </p>

        <h2 className="mt-6">B. Whether you appear on the public website</h2>

        <p className="mt-6">
          Some states list everyone, others list only certain levels. There is **no national standard**, and being “high risk” is not necessarily what places you online.
        </p>
        <p className="mt-2">
          The National Institute of Justice found mixed evidence on effectiveness of public-notification systems for reducing sexual reoffending. Source: <a className={linkCls} href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener noreferrer">NIJ: Evaluating Effectiveness</a> 3
        </p>

        <h2 className="mt-6">C. Housing restrictions and residency zones</h2>

        <p className="mt-6">
          Residency bans are one of the most damaging impacts of classification systems.
        </p>
        <p className="mt-2">
          California research found residency restrictions increased homelessness without demonstrating reductions in sexual reoffending. Source: <a className={linkCls} href="https://casomb.org/index.cfm?pid=1232" target="_blank" rel="noopener noreferrer">CASOMB Reports</a> 4
        </p>

        <h2 className="mt-6">D. Supervision intensity</h2>
        <p className="mt-6">
          Higher tiers often determine GPS monitoring, frequency of probation visits, polygraphs, curfews, internet restrictions, and treatment intensity — conditions that often remain unchanged even as actual risk declines.
        </p>

        <h2 className="mt-6">E. Employment and family life</h2>
        <p className="mt-6">
          Risk levels influence whether employers hire you, whether landlords rent to you, whether you can live with children, and whether neighbors will harass you — reshaping your whole ecosystem.
        </p>

        <Callout variant="info" className="mt-6">
          **“A risk label doesn’t just follow you — it rearranges your whole life.”**
        </Callout>

        <Divider />

        {/* Section 3 */}
        <h1 className="mt-6">3. Why Risk Scores Are Often Misleading or Wrong</h1>

        <h2 className="mt-6">A. Group predictions ≠ individual predictions</h2>
        <p className="mt-6">
          Tools like Static-99R were designed to predict how groups behave — not to reliably predict individual future behavior. Source: <a className={linkCls} href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sttc-2016/index-en.aspx" target="_blank" rel="noopener noreferrer">Static-99R Coding Rules (Public Safety Canada)</a> 5
        </p>

        <h2 className="mt-6">B. One point can change your life</h2>
        <p className="mt-6">
          A tiny numerical difference in score can shift someone into a “high-risk” category — even when real-world risk differences are negligible.
        </p>

        <h2 className="mt-6">C. Risk drops sharply over time</h2>
        <p className="mt-6">
          Research shows that after 10–15 years offense-free, sexual reoffense risk declines dramatically and aligns with other felony groups. Source: <a className={linkCls} href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/" target="_blank" rel="noopener noreferrer">Sentencing Project: What We Really Want Is No More Victims</a> 6
        </p>

        <h2 className="mt-6">D. Some tools overpredict the “high-risk” category</h2>
        <p className="mt-6">
          Many actuarial tools trend toward predicting high risk even when evidence suggests otherwise, amplifying restrictive outcomes beyond actual comparative risk. 7
        </p>

        <Callout variant="info" className="mt-6">
          **“Risk isn’t a lifetime identity — it changes, and the science proves it.”**
        </Callout>

        <Divider />

        {/* Section 4 */}
        <h1 className="mt-6">4. State vs. Federal: Why Your Risk Level Changes When You Move</h1>

        <p className="mt-6">
          People are often confused when moving states:  
          “I was Level 1, now I’m Level 3.”  
          “Why did my duration increase?”  
          “Why am I online here but not there?”
        </p>

        <p className="mt-6">
          The answer: **state and federal systems operate independently.**  
          The Congressional Research Service confirms states decide their own posting rules, durations, and tier applications. Source: <a className={linkCls} href="https://www.everycrsreport.com/reports/R43954.html" target="_blank" rel="noopener noreferrer">CRS R43954</a> 8
        </p>

        <Callout variant="info" className="mt-6">
          **“Cross a state line and your ‘risk level’ may change — even though *you* haven’t.”**
        </Callout>

        <Divider />

        {/* Section 5 */}
        <h1 className="mt-6">5. The Real-World Consequences: Housing, Stability & Safety</h1>

        <h2 className="mt-6">A. Homelessness is the most documented outcome</h2>
        <p className="mt-6">
          California analysis found residency bans correlated with dramatically higher homelessness among registrants. Source: <a className={linkCls} href="https://casomb.org/index.cfm?pid=1232" target="_blank" rel="noopener noreferrer">CASOMB Homelessness Reports</a> 9
        </p>

        <p className="mt-6">
          Homelessness leads to instability, probation violations, mental-health struggles, social isolation, and greater difficulty maintaining employment — factors linked to higher general recidivism rather than increased safety.
        </p>

        <h2 className="mt-6">B. High-risk labels often create instability, not safety</h2>
        <p className="mt-6">
          People labeled “high-risk” often face community alerts, harassment, severe housing limits, and job discrimination — fueling instability rather than safety.
        </p>

        <h2 className="mt-6">C. Families are caught in the blast radius</h2>
        <p className="mt-6">
          Partners and children often face landlord rejection, housing loss, social harassment, investigation scrutiny, and difficulty maintaining family unity.
        </p>

        <Callout variant="info" className="mt-6">
          **“Unstable people don’t make safer communities — stable people do.”**
        </Callout>

        <Divider />

        {/* Section 6 */}
        <h1 className="mt-6">6. What the Research Really Says About Reoffending</h1>

        <p className="mt-6">
          Broad research reviews find that most people released for sexual offenses are not rearrested for another sexual offense, and registries do not consistently improve public safety outcomes. 10
        </p>

        <Callout variant="info" className="mt-6">
          **“The data is clear: most people with sexual convictions do *not* reoffend.”**
        </Callout>

        <Divider />

        {/* Section 7 */}
        <h1 className="mt-6">7. What People Should Actually Expect</h1>

        <ul className="list-disc list-inside mt-2">
          <li>Your classification may not reflect who you are.</li>
          <li>Your level may change if you move states.</li>
          <li>Downward movement is uncommon.</li>
          <li>Stability matters far more than any actuarial score.</li>
          <li>A full life is still possible.</li>
        </ul>

        <Callout variant="info" className="mt-6">
          **“A risk score is not your future — your stability is.”**
        </Callout>

        <Divider />

        {/* Section 8 */}
        <h1 className="mt-6">8. Bottom Line</h1>

        <p className="mt-6">
          Risk classifications were marketed as public safety tools. Today they often overstate danger, ignore desistance, create homelessness, destabilize families, vary widely, mismatch science, and function more as punishment than prevention. A safer system emphasizes stability, support, and evidence — not static labels.
        </p>

        {/* Sources */}
        <Callout variant="info" className="mt-8">
          <strong>Sources</strong>
          <ul className="list-disc list-inside mt-2">
            <li><a className={linkCls} href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/sorna-ic-guide.pdf" target="_blank" rel="noopener noreferrer">Guide to SORNA (SMART Office)</a></li>
            <li><a className={linkCls} href="https://www.everycrsreport.com/reports/R43954.html" target="_blank" rel="noopener noreferrer">CRS Report R43954</a></li>
            <li><a className={linkCls} href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act" target="_blank" rel="noopener noreferrer">SORNA Final Rule (Federal Register)</a></li>
            <li><a className={linkCls} href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener noreferrer">NIJ: Evaluating Effectiveness</a></li>
            <li><a className={linkCls} href="https://casomb.org/index.cfm?pid=1232" target="_blank" rel="noopener noreferrer">CASOMB: Residence & Homelessness Reports</a></li>
            <li><a className={linkCls} href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sttc-2016/index-en.aspx" target="_blank" rel="noopener noreferrer">Static-99R Coding Rules (Public Safety Canada)</a></li>
            <li><a className={linkCls} href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/" target="_blank" rel="noopener noreferrer">Sentencing Project Policy Brief</a></li>
            <li><a className={linkCls} href="https://en.wikipedia.org/wiki/Sex_offender_registries_in_the_United_States" target="_blank" rel="noopener noreferrer">Sex Offender Registries in the United States (Wikipedia)</a></li>
          </ul>
        </Callout>

      </article>
    </BlogLayout>
  );
}
