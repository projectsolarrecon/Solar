import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

export default function WhenEverythingIsViolent(): JSX.Element {
  return (
    <div className="bg-white">
      <SEO
        title="When Everything Is Violent, Nothing Is Violent | The SOLAR Project"
        description="How labeling all sex crimes as 'violent' distorts justice, inflates sentences, undermines rehabilitation, and misallocates public safety resources."
        keywords="sex offender registry, violent crime classification, sentencing guidelines, child pornography laws, supervised release, Bureau of Prisons, public safety, First Step Act, RDAP, Bail Reform Act"
      />

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-slate-200 hover:text-white transition mb-6"
              aria-label="Back to blog"
            >
              <span className="mr-2">←</span> Back to Blog
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              When Everything Is Violent, Nothing Is Violent
            </h1>

            <p className="mt-4 text-slate-100/90 text-lg md:text-xl">
              What happens when the legal system equates nonviolent misconduct with true violence? The answer affects
              sentencing, prison placement, rehabilitation, and life after release—and it may be making us less safe.
            </p>

            <div className="mt-6 text-sm text-slate-200/90">
              <span>By The SOLAR Project</span>
              <span className="mx-2">•</span>
              <time dateTime="2025-09-08">September 8, 2025</time>
              <span className="mx-2">•</span>
              <span>~12–14 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro */}
        <section className="prose prose-slate max-w-none">
          <p>
            There is no dispute that sexual violence inflicts profound and lasting harm. When a person uses force,
            coercion, or intimidation to commit a sexual assault, the damage reverberates far beyond the moment of the
            crime. Those acts deserve to be called violent, and they deserve severe punishment.
          </p>
          <p>
            But in the federal criminal system — and in many state systems as well — the term “violent” has expanded far
            beyond its intuitive meaning. A college student who downloads the wrong images, a middle-aged man who
            exchanges inappropriate messages with a teenager online, or someone who possesses illegal files without ever
            contacting another human being: all can be classified in the eyes of the law as “violent” offenders.
          </p>
          <p>
            This classification is not a semantic quirk. It carries profound consequences for how people are sentenced,
            where they are imprisoned, what programs they can access, and how they are treated long after release. It
            also raises a question that goes to the heart of justice itself: what happens when we blur the line between
            genuine violence and nonviolent misconduct?
          </p>
        </section>

        {/* Callout */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
          <div className="flex items-start gap-3">
            <span className="text-xl" aria-hidden>⚖️</span>
            <p className="m-0 text-slate-800">
              This piece critiques system design—not individual accountability. It argues for{" "}
              <strong>proportionality</strong> and <strong>evidence-based classifications</strong> so public safety
              resources target genuine risk.
            </p>
          </div>
        </section>

        {/* Legal Alchemy */}
        <section className="prose prose-slate max-w-none">
          <h2>The Legal Alchemy: How Sex Crimes Become “Violent”</h2>
          <p>
            Federal law has a shortcut built into its structure. Under the{" "}
            <a
              href="https://uscode.house.gov/view.xhtml?path=/prelim@title18/part2/chapter207&edition=prelim&utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              Bail Reform Act
            </a>
            , entire categories of offenses are automatically designated as “crimes of violence” — not because they
            involved force or threats, but because Congress said so. This includes many sex offenses under{" "}
            <a
              href="https://uscode.house.gov/view.xhtml?path=/prelim@title18/part1/chapter110&edition=prelim&utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              Chapter 110
            </a>
            , the section dealing with child pornography.
          </p>
          <p>
            That means before a trial even begins, defendants in these cases face a presumption of detention, on the
            grounds that they are “violent.” What does this presumption mean in practice? It means that from the moment
            of arrest, people are locked away without access to ordinary life. They cannot go home to explain themselves
            to family without risking incrimination, cannot maintain employment, cannot preserve daily routines or
            plans. For months, sometimes years, life is placed on hold. Marriages collapse, children are left without
            parents, homes are lost. It is not simply a legal classification; it is the unraveling of a life before
            guilt or innocence has even been tested.
          </p>
          <p>
            At sentencing, the same label influences guideline calculations, mandatory minimums, and eligibility for
            early release programs. In prison, the Bureau of Prisons applies a{" "}
            <a
              href="https://www.bop.gov/policy/progstat/5100_008.pdf?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              Sex Offender Public Safety Factor
            </a>{" "}
            that ensures people are housed in harsher environments, often alongside those convicted of genuinely violent
            crimes. The alchemy is complete: a man convicted of downloading images alone becomes, by law and policy, a
            violent criminal.
          </p>
        </section>

        {/* Pull Quote */}
        <blockquote className="border-l-4 border-slate-300 pl-6 italic text-slate-700">
          “When everyone is violent, no one truly is.”
        </blockquote>

        {/* Sentencing */}
        <section className="prose prose-slate max-w-none">
          <h2>Sentencing Without Violence</h2>
          <p>
            The numbers tell a stark story. According to the{" "}
            <a
              href="https://www.ussc.gov/research/quick-facts/child-pornography?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              U.S. Sentencing Commission
            </a>
            , the average federal sentence for child pornography offenses in 2024 was{" "}
            <strong>115 months — nearly ten years</strong>. For simple possession, the average was{" "}
            <strong>82 months</strong>. For receipt or distribution, it was <strong>106 months</strong>, and for broader
            distribution networks, <strong>151 months</strong>. Ninety-nine percent of those convicted went to prison.
          </p>
          <p>
            By comparison, the{" "}
            <a
              href="https://www.ussc.gov/research/quick-facts/robbery?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              average sentence for federal robbery
            </a>{" "}
            is <strong>111 months</strong>. Without a firearm enhancement, it drops to{" "}
            <strong>79 months</strong> — less than for mere possession of illegal images. The disparity deepens when we
            look beyond robbery. Federal data show average sentences for aggravated assault are often shorter than
            possession cases. Manslaughter convictions can result in terms lower than distribution. Meanwhile,
            defendants convicted of these violent crimes are often eligible for sentence reductions through programs
            like the{" "}
            <a
              href="https://www.congress.gov/bill/115th-congress/senate-bill/756/text?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              First Step Act
            </a>{" "}
            or the{" "}
            <a
              href="https://www.ecfr.gov/current/title-28/chapter-V/subchapter-C/part-550/subpart-F?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              Residential Drug Abuse Program
            </a>
            . By contrast, nonviolent sex offenders face mandatory minimums — five years for sending a 13-second video —
            while violent offenders may serve less and still access rehabilitative opportunities that are categorically
            denied to sex offenders.
          </p>
          <p>
            These disparities are not the product of accident. They reflect decades of congressional ratcheting, where
            each new scandal spurred a new mandatory minimum or sentencing enhancement. Courts have noticed the
            distortion. The Second Circuit in{" "}
            <a
              href="https://www.courtlistener.com/opinion/152212/united-states-v-dorvee/?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              <em>United States v. Dorvee</em>
            </a>{" "}
            called the child pornography guidelines “irrational” and warned that they routinely produce “unreasonable
            sentences.” The Third Circuit in{" "}
            <a
              href="https://casetext.com/case/us-v-grober-3?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              <em>United States v. Grober</em>
            </a>{" "}
            upheld a major downward variance on similar grounds. Yet the system churns on, guided less by evidence than
            by fear.
          </p>
        </section>

        {/* Consequences of Overclassification */}
        <section className="prose prose-slate max-w-none">
          <h2>The Consequences of Overclassification</h2>

          <ul className="list-none p-0 space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-xl" aria-hidden>🏚️</span>
              <p className="m-0">
                <strong>Prison classification:</strong> Because of the sex offender designation, even low-risk
                individuals are excluded from camps and minimum security. Many end up in medium or high-security
                facilities, housed with men convicted of homicide, gang violence, and armed assaults. This cohabitation
                has practical consequences. In high-security environments, survival often requires hardening by
                necessity. New arrivals quickly learn to align with groups, project toughness, or risk being preyed
                upon. A person who has never committed a violent act is forced to develop the habits and mindset of
                someone who has. <em>The housecat went in—but by the time the doors opened years later, what walked out
                was a mountain lion. The system had created the very thing it claimed to protect society from.</em>
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl" aria-hidden>🧭</span>
              <p className="m-0">
                <strong>Program exclusion:</strong> Sex offenders are often prevented from entering the Bureau of
                Prisons’{" "}
                <a
                  href="https://www.ecfr.gov/current/title-28/chapter-V/subchapter-C/part-550/subpart-F?utm_source=chatgpt.com"
                  target="_blank" rel="noopener"
                >
                  Residential Drug Abuse Program (RDAP)
                </a>
                , which offers up to a year off one’s sentence. They are also{" "}
                <a
                  href="https://www.congress.gov/bill/115th-congress/senate-bill/756/text?utm_source=chatgpt.com"
                  target="_blank" rel="noopener"
                >
                  categorically ineligible for earned-time credits under the First Step Act
                </a>
                . Even in custody, the system signals: rehabilitation is not for you.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl" aria-hidden>📜</span>
              <p className="m-0">
                <strong>Supervised release:</strong> Upon release, the punishment continues. Federal law mandates{" "}
                <a
                  href="https://www.law.cornell.edu/uscode/text/18/3583?utm_source=chatgpt.com"
                  target="_blank" rel="noopener"
                >
                  five years to life of supervised release
                </a>{" "}
                for many sex offenses, even those involving no contact. For comparison, someone convicted of armed
                assault might serve three years of supervision.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl" aria-hidden>🚫</span>
              <p className="m-0">
                <strong>Registry and restrictions:</strong> After prison, registrants face residency bans, job
                exclusions, and internet restrictions that the Supreme Court has sometimes upheld as{" "}
                <a
                  href="https://supreme.justia.com/cases/federal/us/538/84/?utm_source=chatgpt.com"
                  target="_blank" rel="noopener"
                >
                  “nonpunitive”
                </a>
                . Only rarely, as in the Sixth Circuit’s{" "}
                <a
                  href="https://casetext.com/case/does-v-snyder-2?utm_source=chatgpt.com"
                  target="_blank" rel="noopener"
                >
                  <em>Does v. Snyder</em>
                </a>
                , have courts recognized the obvious: that perpetual restrictions and stigmatization function as
                punishment in all but name.
              </p>
            </li>
          </ul>
        </section>
{/* Stories */}
        <section className="prose prose-slate max-w-none">
          <h2>Stories Behind the Statistics</h2>
          <p>
            Consider the college student prosecuted for sharing images he received as a teenager. He never produced
            material, never had contact with a child, and yet was sentenced to a decade in prison. Classified as
            violent, he was placed in a medium-security facility with men serving time for homicide. Inside, he endured
            threats and assaults until he aligned himself with a protective group, altering his demeanor to survive.
            Letters to his family shifted in tone from youthful remorse to hardened resignation. His mother later
            described her son as “a different person” — harder, more suspicious, less hopeful.
          </p>
          <p>
            Or take the case of a middle-aged man who engaged in inappropriate chats online. He never arranged a meeting,
            never attempted contact. Convicted and classified as violent, he emerged after years behind bars into a life
            where he could not live near schools, could not use social media, and could not find work. His wife had
            divorced him while he was detained pretrial, unable to communicate without risking incrimination. His
            children refused contact after years of silence. Employers hung up as soon as they Googled his name. His
            crime was serious, but nonviolent; the punishment turned into perpetual exile.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
            <h3 className="m-0 text-slate-800 font-semibold">Supporting real-world examples</h3>
            <ul className="list-none m-0 mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-lg" aria-hidden>🔎</span>
                <p className="m-0">
                  In{" "}
                  <a
                    href="https://www.courtlistener.com/opinion/152212/united-states-v-dorvee/?utm_source=chatgpt.com"
                    target="_blank" rel="noopener"
                  >
                    <em>United States v. Dorvee</em>
                  </a>
                  , the defendant received a <strong>233-month</strong> sentence (nearly 20 years) for a non-production
                  child pornography conviction—even though he never had contact with a minor. The Second Circuit called
                  the applied guideline “irrational” for producing such an excessive sentence.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-lg" aria-hidden>📰</span>
                <p className="m-0">
                  A{" "}
                  <a
                    href="https://www.nytimes.com/2012/01/29/magazine/the-trouble-with-child-pornography.html?utm_source=chatgpt.com"
                    target="_blank" rel="noopener"
                  >
                    <em>New York Times</em> profile
                  </a>{" "}
                  told the story of a <strong>young man prosecuted for possessing images he had exchanged as a
                  teenager</strong>. The case involved no contact or production, yet he was sentenced to{" "}
                  <strong>15 years</strong>, and after release he struggled with profound social isolation and bleak
                  prospects.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-lg" aria-hidden>🏷️</span>
                <p className="m-0">
                  Investigative reporting by{" "}
                  <a
                    href="https://www.themarshallproject.org/2015/03/10/sex-offenders-are-different?utm_source=chatgpt.com"
                    target="_blank" rel="noopener"
                  >
                    <em>The Marshall Project</em>
                  </a>{" "}
                  has chronicled individuals with <strong>online-only offenses</strong> who, after serving lengthy
                  sentences, face homelessness, rejection, and deep mental-health challenges. These struggles are not
                  simply the byproduct of prison or a “violent” classification, but <strong>also</strong> of registry
                  laws that impose perpetual restrictions on housing, employment, and social participation—based on the
                  flawed assumption that people convicted of sex offenses cannot be rehabilitated.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section className="prose prose-slate max-w-none">
          <h2>Principles, Proportionality, and Public Safety</h2>
          <p>
            Justice requires proportionality. Punishment should fit not only the crime, but the manner in which it was
            committed. Classifying non-contact, non-coercive offenses as violent undermines the credibility of the law.
            It also misdirects attention and resources away from the small subset of offenders who genuinely pose a high
            risk of violent recidivism.
          </p>
          <p>
            Even judges and policymakers have begun to push back. The Sentencing Commission has openly acknowledged that
            its child pornography guidelines may be “too severe” and in need of reform. Courts have written opinions
            calling the system irrational. Scholars have documented that registries and blanket restrictions do little
            to improve safety. Yet statutory inertia — and political fear of appearing “soft” — keeps the machine
            moving.
          </p>
        </section>

        {/* Toward Smarter Policy */}
        <section className="prose prose-slate max-w-none">
          <h2>Toward Smarter Policy</h2>
          <p>
            There are alternatives. Congress could refine statutory definitions of “crime of violence” to reflect actual
            use of force or coercion. Courts could expand their willingness to depart from irrational guidelines. The
            Bureau of Prisons could recalibrate its classification rules to better align with risk rather than label.
            States could scale back the sprawl of their registries, reserving the harshest restrictions for those who
            genuinely warrant them.
          </p>
          <p>
            Programs like{" "}
            <a
              href="https://en.wikipedia.org/wiki/Circles_of_Support_and_Accountability?utm_source=chatgpt.com"
              target="_blank" rel="noopener"
            >
              Circles of Support and Accountability (CoSA)
            </a>
            , used in Canada and parts of the U.S., have shown promise in reducing reoffending by focusing on
            reintegration rather than perpetual exclusion. Risk assessment tools, if applied carefully and
            transparently, can help distinguish between those who pose real threats and those who do not.
          </p>
          <p>
            The principle is simple: we can hold people accountable without erasing the crucial distinction between
            violence and nonviolence.
          </p>
        </section>

        {/* Conclusion */}
        <section className="prose prose-slate max-w-none">
          <h2>Conclusion: Restoring the Meaning of Violence</h2>
          <p>
            When lawmakers stretch the term “violent” to cover every imaginable sex offense, they cheapen its meaning.
            They erode public trust, misallocate resources, and risk creating more danger than they prevent.
          </p>
          <p>
            No one disputes that sexual violence deserves to be punished as severely as the law allows. But to conflate
            possession of images with physical assault, or online misbehavior with predatory coercion, is to abandon
            proportionality altogether.
          </p>
          <p>
            The consequences are not theoretical. Families are destroyed before trial. Children grow up without parents,
            not because of violence, but because of labels. Men and women emerge from prison more damaged than when they
            went in, having been forced to adopt violent postures to survive. Communities inherit neighbors whose
            prospects for stability—housing, employment, social connection—have been deliberately undermined. The cycle
            feeds itself, not because people are irredeemable, but because our policies make redemption nearly
            impossible.
          </p>
          <p>
            Justice — real justice — demands sharper distinctions. It demands that we recognize the difference between
            the housecat and the mountain lion. And it demands that we have the courage to say so, even when fear and
            politics push us the other way.
          </p>
        </section>

        {/* Sources */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-slate-800 m-0">Sources</h2>
          <ul className="mt-4 space-y-2 text-slate-800">
            <li>
              U.S. Code:{" "}
              <a href="https://uscode.house.gov/view.xhtml?path=/prelim@title18/part2/chapter207&edition=prelim&utm_source=chatgpt.com" target="_blank" rel="noopener">
                Bail Reform Act (18 U.S.C. ch. 207)
              </a>{" "}
              •{" "}
              <a href="https://uscode.house.gov/view.xhtml?path=/prelim@title18/part1/chapter110&edition=prelim&utm_source=chatgpt.com" target="_blank" rel="noopener">
                Chapter 110 (Sexual Exploitation and Other Abuse of Children)
              </a>
            </li>
            <li>
              U.S. Sentencing Commission Quick Facts:{" "}
              <a href="https://www.ussc.gov/research/quick-facts/child-pornography?utm_source=chatgpt.com" target="_blank" rel="noopener">
                Child Pornography
              </a>{" "}
              •{" "}
              <a href="https://www.ussc.gov/research/quick-facts/robbery?utm_source=chatgpt.com" target="_blank" rel="noopener">
                Robbery
              </a>
            </li>
            <li>
              Case law:{" "}
              <a href="https://www.courtlistener.com/opinion/152212/united-states-v-dorvee/?utm_source=chatgpt.com" target="_blank" rel="noopener">
                United States v. Dorvee (2d Cir. 2010)
              </a>{" "}
              •{" "}
              <a href="https://casetext.com/case/us-v-grober-3?utm_source=chatgpt.com" target="_blank" rel="noopener">
                United States v. Grober (3d Cir. 2010)
              </a>{" "}
              •{" "}
              <a href="https://casetext.com/case/does-v-snyder-2?utm_source=chatgpt.com" target="_blank" rel="noopener">
                Does v. Snyder (6th Cir. 2016)
              </a>{" "}
              •{" "}
              <a href="https://supreme.justia.com/cases/federal/us/538/84/?utm_source=chatgpt.com" target="_blank" rel="noopener">
                Smith v. Doe (U.S. 2003)
              </a>
            </li>
            <li>
              BOP & Programs:{" "}
              <a href="https://www.bop.gov/policy/progstat/5100_008.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener">
                BOP Program Statement 5100.08 (Inmate Security Designation)
              </a>{" "}
              •{" "}
              <a href="https://www.ecfr.gov/current/title-28/chapter-V/subchapter-C/part-550/subpart-F?utm_source=chatgpt.com" target="_blank" rel="noopener">
                RDAP (28 C.F.R. § 550 Subpart F)
              </a>{" "}
              •{" "}
              <a href="https://www.congress.gov/bill/115th-congress/senate-bill/756/text?utm_source=chatgpt.com" target="_blank" rel="noopener">
                First Step Act (text)
              </a>{" "}
              •{" "}
              <a href="https://www.law.cornell.edu/uscode/text/18/3583?utm_source=chatgpt.com" target="_blank" rel="noopener">
                18 U.S.C. § 3583 (Supervised Release)
              </a>
            </li>
            <li>
              Reporting & analysis:{" "}
              <a href="https://www.nytimes.com/2012/01/29/magazine/the-trouble-with-child-pornography.html?utm_source=chatgpt.com" target="_blank" rel="noopener">
                The New York Times — “The Trouble With Child Pornography”
              </a>{" "}
              •{" "}
              <a href="https://www.themarshallproject.org/2015/03/10/sex-offenders-are-different?utm_source=chatgpt.com" target="_blank" rel="noopener">
                The Marshall Project — “Sex Offenders Are Different”
              </a>{" "}
              •{" "}
              <a href="https://en.wikipedia.org/wiki/Circles_of_Support_and_Accountability?utm_source=chatgpt.com" target="_blank" rel="noopener">
                Circles of Support and Accountability (overview)
              </a>
            </li>
          </ul>
        </section>

        {/* Back link */}
        <div className="pt-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-slate-700 hover:text-slate-900 transition"
          >
            <span className="mr-2">←</span> Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
                }
