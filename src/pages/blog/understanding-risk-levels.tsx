import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
  SectionCard,
} from "../../components/solar";
import { Link } from "react-router-dom";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function UnderstandingRiskLevels() {
  return (
    <BlogLayout
      title="Understanding “Risk Levels” on the Sex Offender Registry: What They Really Mean — and Don’t Mean"
      description="Explainer on what risk levels in sex offender registries mean, how they are determined, and what they actually control."
      keywords={[
        "risk levels",
        "sex offender registry",
        "SORNA",
        "recidivism",
        "static-99r",
      ]}
      date="2025-12-12"
      readTime="11 min"
      badge="📝 BLOG"
      lede="An explainer of how risk levels on sex offender registries are created, what they mean in practice, and why they often don’t match actual risk."
    >
      <article className="leading-relaxed">

        <p className="mt-6">
          Risk assessments and classification tiers shape where a person can live, how they are supervised, whether they appear online, and how long they must remain on the registry. Yet despite their enormous influence, most people — including those forced to live under them — don’t understand what these labels actually mean.
        </p>

        <p className="mt-6">
          This explainer breaks down how risk levels are created, why they differ so dramatically between states, and what they really mean for day-to-day life.
        </p>

        <Divider />

        {/* SECTION 1 */}
        <BandHeader
          title="1. Risk Levels Were Supposed to Be Scientific — But They Mostly Aren’t"
          icon="📊"
        />
        <p className="mt-6">
          When lawmakers created classification systems in the 1990s and 2000s, they claimed they were building a scientific way to identify people who might pose ongoing danger. But most current systems are <strong>not scientific at all</strong> — and some aren’t even based on risk.
        </p>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">
            A. The federal system (SORNA) is offense-based, not risk-based
          </h3>
          <p>
            The federal Sex Offender Registration and Notification Act (SORNA) assigns Tier I, II, or III <strong>solely based on the conviction statute</strong>, not on personal characteristics, treatment progress, or any actuarial risk tool.
          </p>
          <p className="mt-4">
            The DOJ SMART Office is explicit: SORNA tiers are “offense-based, not risk-based.”  
            Source:{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/sorna-ic-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMART Office Guide to SORNA
            </a>
          </p>
          <p className="mt-4">
            A Tier III designation does <strong>not</strong> mean someone is a “high risk” to reoffend — it simply means Congress placed their statute in the Tier III bucket.
          </p>

          <Callout variant="info" title="📘 What SORNA Actually Does — and Doesn’t Do">
            <p>
              Most people assume federal SORNA controls their registration level, their housing, and whether they appear online. It doesn’t.
            </p>
            <h4 className="mt-4 font-semibold">What SORNA <em>does</em>:</h4>
            <ul className="list-disc list-inside mt-2">
              <li>Sets baseline federal standards for how states should register people</li>
              <li>Defines Tier I, II, III using statutes — not risk</li>
              <li>Specifies minimum durations (15 / 25 / lifetime)</li>
              <li>Requires jurisdictions to share information</li>
              <li>Applies to states, tribes, territories, and federal agencies</li>
            </ul>
            <h4 className="mt-4 font-semibold">What SORNA <em>does NOT</em> do:</h4>
            <ul className="list-disc list-inside mt-2">
              <li>
                SORNA does not force states to adopt its tiers. Source:{" "}
                <a
                  className={linkCls}
                  href="https://www.everycrsreport.com/reports/R43954.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CRS Report R43954
                </a>
              </li>
              <li>SORNA does not override state law.</li>
              <li>SORNA does not determine public posting.</li>
              <li>SORNA does not impose residency restrictions.</li>
              <li>SORNA does not control probation or parole.</li>
              <li>SORNA tiers don’t automatically follow you across states.</li>
              <li>SORNA governs jurisdictions, not individuals.</li>
            </ul>
            <p className="mt-4 font-semibold">
              Bottom line: Your day-to-day experience is shaped by <em>state law</em>, not SORNA — and the two systems often contradict each other.
            </p>
          </Callout>

          <PullQuote>“Your risk level often reflects your ZIP code more than your actual risk.”</PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 2 */}
        <BandHeader title="2. What Risk Levels Actually Control in Daily Life" icon="🏠" />

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">A. How long you must register</h3>
          <p>
            SORNA sets federal minimums:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Tier I:</strong> 15 years</li>
            <li><strong>Tier II:</strong> 25 years</li>
            <li><strong>Tier III:</strong> Lifetime</li>
          </ul>
          <p className="mt-2">
            Source:{" "}
            <a
              className={linkCls}
              href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act"
              target="_blank"
              rel="noopener noreferrer"
            >
              SORNA Final Rule (Federal Register, 2021)
            </a>
          </p>
          <p className="mt-4">
            But states routinely create longer durations or systems that ignore SORNA entirely.
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">B. Whether you appear on the public website</h3>
          <p>
            Some states list everyone; others list only certain levels. There is <strong>no national standard</strong>, and being “high risk” doesn’t always mean public posting.
          </p>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIJ: Evaluating Effectiveness
            </a>
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">C. Housing restrictions and residency zones</h3>
          <p>
            Residency bans are among the most damaging impacts of classification systems. CASOMB found they increased homelessness and risk factors, without reducing reoffending.
          </p>
          <p className="mt-4">
            Sources:{" "}
            <a
              className={linkCls}
              href="https://casomb.org/docs/Residence_Paper_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CASOMB: Residence Restrictions (2011)
            </a>{" "}
            and{" "}
            <a
              className={linkCls}
              href="https://www.prisonlegalnews.org/media/publications/california_sex_offender_management_board_homeless_sex_offender_report_2008.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CASOMB: Homelessness Report (2008)
            </a>
          </p>
          <PullQuote>“A risk label doesn’t just follow you — it rearranges your whole life.”</PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 3 */}
        <BandHeader title="3. Why Risk Scores Are Often Misleading or Wrong" icon="⚖️" />

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">A. Group predictions ≠ individual predictions</h3>
          <p>
            Static-99R was designed to predict how <strong>groups</strong> behave — not individuals.
          </p>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sttc-2016/index-en.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Static-99R Coding Rules
            </a>
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">B. One point can change your life</h3>
          <p>
            A tiny numerical difference in score can shift someone into a “high-risk” category — even when the real-world risk difference is negligible.
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">C. Risk drops sharply over time</h3>
          <p>
            Desistance research shows that after 10–15 years offense-free, reoffense risk declines dramatically and becomes similar to nonsexual felonies.
          </p>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Sentencing Project (2024)
            </a>
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">
            D. Some tools overpredict the “high-risk” category
          </h3>
          <p>
            Minnesota DOC found MnSOST-3.1 <strong>overpredicted reoffense</strong> in its highest category.
          </p>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://mn.gov/doc/assets/MnSOST3-1DOCReport_tcm1089-272835.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              MnSOST-3.1 Technical Report
            </a>
          </p>
          <PullQuote>“Risk isn’t a lifetime identity — it changes, and the science proves it.”</PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 4 */}
        <BandHeader title="4. State vs. Federal: Why Your Risk Level Changes When You Move" icon="🧭" />

        <SectionCard variant="info">
          <ul className="list-disc list-inside mt-4">
            <li>“I was Level 1, now I’m Level 3.”</li>
            <li>“Why did my duration increase?”</li>
            <li>“Why am I online here but not there?”</li>
          </ul>
          <p className="mt-4">
            The answer: state and federal systems operate independently. Source:{" "}
            <a
              className={linkCls}
              href="https://www.everycrsreport.com/reports/R43954.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              CRS R43954
            </a>
          </p>
          <PullQuote>“Cross a state line and your ‘risk level’ may change — even though you haven’t.”</PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 5 */}
        <BandHeader title="5. The Real-World Consequences: Housing, Stability & Safety" icon="🏚️" />
<SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">A. Homelessness is the most documented outcome</h3>
          <p>
            CASOMB found an <strong>800% increase</strong> in homelessness among registrants after
            residency bans were enacted.
          </p>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://www.prisonlegalnews.org/media/publications/california_sex_offender_management_board_homeless_sex_offender_report_2008.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CASOMB: Homelessness Report (2008)
            </a>
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">
            B. High-risk labels often create instability, not safety
          </h3>
          <p>
            People labeled “high-risk” often endure community alerts, harassment, severe housing limits,
            and job discrimination — instability reduces public safety.
          </p>
        </SectionCard>

        <SectionCard variant="info">
          <h3 className="text-lg font-semibold mb-3">C. Families are caught in the blast radius</h3>
          <p>
            Partners and children often face landlord rejections, loss of housing, and social harassment.
          </p>
          <PullQuote>
            “Unstable people don’t make safer communities — stable people do.”
          </PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 6 */}
        <BandHeader title="6. What the Research Really Says About Reoffending" icon="📈" />

        <SectionCard variant="info">
          <ul className="list-disc list-inside mt-2">
            <li>
              92.3 % of people released for a sexual offense were not rearrested for another sexual
              offense.
            </li>
            <li>
              People with sexual convictions had lower overall recidivism than most other felony groups.
            </li>
          </ul>
          <p className="mt-4">
            Source:{" "}
            <a
              className={linkCls}
              href="https://www.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14"
              target="_blank"
              rel="noopener noreferrer"
            >
              BJS Recidivism Study (2005–2014)
            </a>
          </p>
          <p className="mt-4">
            A 25-year meta-analysis reached similar conclusions. Source:{" "}
            <a
              className={linkCls}
              href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zgoba & Mitchell Meta-analysis (2021)
            </a>
          </p>
          <PullQuote>
            “The data is clear: most people with sexual convictions do not reoffend.”
          </PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 7 */}
        <BandHeader title="7. What People Should Actually Expect" icon="💡" />

        <SectionCard variant="info">
          <ul className="list-disc list-inside mt-2">
            <li>Your classification may not reflect who you are.</li>
            <li>Your level may change if you move states.</li>
            <li>Downward movement is uncommon.</li>
            <li>Stability matters far more than any actuarial score.</li>
            <li>A full life is still possible.</li>
          </ul>
          <PullQuote>“A risk score is not your future — your stability is.”</PullQuote>
        </SectionCard>

        <Divider />

        {/* SECTION 8 */}
        <BandHeader title="8. Bottom Line" icon="✅" />
        <SectionCard variant="info">
          <p>
            Risk classifications were originally marketed as public-safety tools. But today they often 
            overstate danger, ignore desistance, create homelessness, destabilize families, vary wildly 
            between states, mismatch the science, and function as punishment, not prevention. A safer, 
            saner system would emphasize <strong>stability, support, and evidence</strong> — not static 
            labels or distorted predictions.
          </p>
        </SectionCard>

        <Divider />

        {/* DATA SOURCES */}
        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>
            <a className={linkCls} href="https://smart.ojp.gov/sites/g/files/xyckuh231/files/media/document/sorna-ic-guide.pdf" target="_blank" rel="noopener noreferrer">
              SMART Office Guide to SORNA
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.everycrsreport.com/reports/R43954.html" target="_blank" rel="noopener noreferrer">
              Congressional Research Service R43954
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.federalregister.gov/documents/2021/12/08/2021-26420/registration-requirements-under-the-sex-offender-registration-and-notification-act" target="_blank" rel="noopener noreferrer">
              SORNA Final Rule (Federal Register)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://nij.ojp.gov/library/publications/evaluating-effectiveness-sex-offender-registration-and-notification-policies" target="_blank" rel="noopener noreferrer">
              NIJ: Evaluating Effectiveness
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://casomb.org/docs/Residence_Paper_Final.pdf" target="_blank" rel="noopener noreferrer">
              CASOMB: Residence Restrictions (2011)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.prisonlegalnews.org/media/publications/california_sex_offender_management_board_homeless_sex_offender_report_2008.pdf" target="_blank" rel="noopener noreferrer">
              CASOMB: Homelessness Report (2008)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/sttc-2016/index-en.aspx" target="_blank" rel="noopener noreferrer">
              Static-99R Coding Rules (Public Safety Canada)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://mn.gov/doc/assets/MnSOST3-1DOCReport_tcm1089-272835.pdf" target="_blank" rel="noopener noreferrer">
              MnSOST-3.1 Technical Report
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.sentencingproject.org/policy-brief/responding-to-crimes-of-a-sexual-nature-what-we-really-want-is-no-more-victims/" target="_blank" rel="noopener noreferrer">
              The Sentencing Project (2024)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.ojp.gov/library/publications/recidivism-sex-offenders-released-state-prison-9-year-follow-2005-14" target="_blank" rel="noopener noreferrer">
              BJS Recidivism Study (2005–2014)
            </a>
          </li>
          <li>
            <a className={linkCls} href="https://www.prisonlegalnews.org/media/publications/The_Effectiveness_of_Sex_Offender_Registration_and_Notification_Sept._2021.pdf" target="_blank" rel="noopener noreferrer">
              Zgoba & Mitchell Meta-analysis (2021)
            </a>
          </li>
        </ul>

        <Divider />

        {/* RELATED READING */}
        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>
            <Link className={linkCls} to="/blog/hidden-costs-registries">
              The Hidden Costs of Registries
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/what-prison-is-actually-like">
              What Prison Is Actually Like for People with Sex-Offense Convictions
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Building Community Ties After Incarceration
            </Link>
          </li>
        </ul>

      </article>
    </BlogLayout>
  );
}