import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

/** Lightweight Share Bar (top & bottom) */
function ShareBar({ title }: { title: string }) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://thesolarproject.org/inside-the-house";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareNative = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
      }
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="no-print mt-6 mb-2 flex flex-wrap gap-2">
      <button
        onClick={shareNative}
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
        aria-label="Share"
      >
        🔗 Share
      </button>
      <a
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        𝕏 / Twitter
      </a>
      <a
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
      >
        Email
      </a>
    </div>
  );
}

export default function InsideTheHouse(): JSX.Element {
  const pageTitle = "The Call Is Coming from Inside the House — Family, Proximity, and the Myth That a Map Can Save Us";

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="The Call Is Coming from Inside the House | The SOLAR Project"
        description="Family, proximity, and the myth that a map can save us. Why registries can’t protect children from the risks closest to home—and what real safety requires."
        keywords="sex offense registry, child safety, intrafamilial abuse, prevention, SOLAR Project"
      />

      {/* Hero */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white py-16 shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-200 uppercase tracking-wide mb-2 text-sm font-semibold">Investigative Series</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Call Is Coming from Inside the House
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-slate-100">
            Family, Proximity, and the Myth That a Map Can Save Us
          </p>
          <ShareBar title={pageTitle} />
        </div>
      </header>

      {/* Main container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro */}
        <article className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">🌟 Introduction</h2>
            <p className="text-slate-100 mt-1">Why “stranger danger” misses the reality many children face.</p>
          </div>

          <p className="mb-4">
            Parents tell themselves comforting stories. We teach kids about “stranger danger,” consult sex-offender maps, draw wider
            circles around parks and bus stops, and exhale. But the data—and the cases that make it to court—say the real danger to many
            children isn’t lurking out on the sidewalk. It’s inside the home, or close enough to touch it. The registry, built to
            soothe a public terrified of the unknown predator, simply doesn’t map what many victims face: abuse by a parent, stepparent,
            relative, partner of a parent, or trusted family friend.
          </p>

          <p className="mb-4">
            That is not a theory. It’s a pattern that threads through decades of research and thousands of prosecutions. The{" "}
            <a className="text-blue-700 underline" href="https://ojjdp.ojp.gov/statistical-briefing-book/sbb-sexual-assault" target="_blank" rel="noopener noreferrer">
              Office of Juvenile Justice and Delinquency Prevention
            </a>{" "}
            shows that the overwhelming majority of children who are sexually assaulted are harmed by someone they know, often within the
            family itself. The{" "}
            <a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">
              Bureau of Justice Statistics
            </a>{" "}
            found a similar reality in a landmark report: for the youngest victims, offenders are overwhelmingly known—frequently parents
            or other relatives—while “strangers” are the minority.{" "}
            <a className="text-blue-700 underline" href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener noreferrer">
              RAINN
            </a>{" "}
            is blunt: for minors, most perpetrators are known to the child. And when we widen the lens to child safety generally, the{" "}
            <a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">
              National Center for Missing &amp; Exploited Children (NCMEC)
            </a>{" "}
            reports that “non-family” abductions—the classic stranger scenario—are about <strong>1%</strong> of missing-child cases.
          </p>

          <p className="mb-4">
            If you want a celebrity case that proves the point, consider <strong>Josh Duggar</strong>—the TV-famous oldest son in a large,
            public, faith-branded family. In 2022, the{" "}
            <a className="text-blue-700 underline" href="https://www.justice.gov/usao-wdar/pr/former-reality-tv-star-sentenced-more-12-years-prison-receipt-child-pornography" target="_blank" rel="noopener noreferrer">
              U.S. Attorney’s Office for the Western District of Arkansas
            </a>{" "}
            sentenced him to <strong>151 months</strong> (12 years, 7 months) for receiving child sexual abuse material. But years before
            that, when he was 14 or 15, Josh admitted to his parents (Jim Bob and Michelle Duggar) that he had inappropriately touched{" "}
            <strong>four of his younger sisters</strong> and a babysitter. The family did not report to law enforcement at that time; disclosures
            emerged later in civil and media proceedings.
          </p>

          {/* Pull Quote */}
          <blockquote className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="text-lg italic">
              “When I read the police report about it, I wished I were dead.” —Jill Duggar Dillard, one of Josh’s sisters{" "}
              <a className="text-blue-700 underline" href="https://www.businessinsider.com/jill-duggar-josh-duggar-molestation-report-reaction-2023-9" target="_blank" rel="noopener noreferrer">
                (Business Insider)
              </a>
            </p>
          </blockquote>

          <p className="mt-4">
            The abuse here wasn’t an unknown man in a park. It was a brother, in a house famous for its supposed values.
          </p>
        </article>
        {/* Parents */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">👪 Parents</h2>
            <p className="text-slate-100 mt-1">When proximity and authority are weaponized.</p>
          </div>

          <p className="mb-4">
            Start with the hardest stories: biological parents who weaponize proximity, authority, and trust.
          </p>

          <p className="mb-4">
            In <strong>Indiana</strong>,{" "}
            <a className="text-blue-700 underline" href="https://www.justice.gov/usao-sdin/pr/parents-sentenced-combined-90-years-federal-prison-sexually-abusing-and-exploiting" target="_blank" rel="noopener noreferrer">
              Tristan Mullins and Desley McLemore
            </a>{" "}
            were sentenced to a combined <strong>90 years in federal prison</strong> for producing and distributing sexual abuse images of their
            infant. The DOJ’s press release is explicit: the crimes took place in their home, during caregiving.
          </p>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <p className="text-slate-900 italic">
                  “I never felt safe with my own mother. The laughter in our house felt like the lock clicking on a door I couldn’t ever open.”
                </p>
                <p className="text-slate-700 text-sm mt-1">—Victim impact excerpt (court summary)</p>
              </div>
            </div>
          </div>

          <p className="mt-4">
            The{" "}
            <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">
              CDC’s ACEs research
            </a>{" "}
            shows that such early abuse creates lifelong damage: depression, suicidality, substance use, and chronic illness.
          </p>
        </section>

        {/* Stepfamily & “Mom’s Boyfriend” */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">🏠 Stepfamily and “Mom’s Boyfriend”</h2>
            <p className="text-slate-100 mt-1">Power inside the intimate sphere.</p>
          </div>

          <p className="mb-4">
            Even when the offender isn’t a biological parent, the defining variable remains the same: power inside the intimate sphere.
          </p>

          <p className="mb-4">
            In <strong>Texas</strong>, stepfather Hayim Cohen was sentenced to life for decades of abuse against boys in his care{" "}
            <a className="text-blue-700 underline" href="https://www.houstonchronicle.com/news/houston-texas/crime/article/hayim-cohen-victims-impact-20270726.php" target="_blank" rel="noopener noreferrer">
              (Houston Chronicle)
            </a>.
          </p>

          <blockquote className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="text-lg italic">
              “You preyed upon innocent young boys who had nothing, and you took advantage of their vulnerability.” —Victim impact statement
            </p>
          </blockquote>

          <p className="mt-4">
            In <strong>Washington, D.C.</strong>, a man was convicted of sexually abusing his girlfriend’s daughter and producing images{" "}
            <a className="text-blue-700 underline" href="https://www.justice.gov/usao-dc/pr/dc-man-sentenced-15-years-prison-sexual-abuse-and-production-child-pornography" target="_blank" rel="noopener noreferrer">
              (DOJ Press Release)
            </a>. These weren’t strangers—they were partners trusted in family life.
          </p>
        </section>

        {/* Siblings & Extended Family */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">👧👦 Siblings and Extended Family</h2>
            <p className="text-slate-100 mt-1">Under-reported, profoundly damaging—and close to home.</p>
          </div>

          <p className="mb-4">
            Josh Duggar’s victims were his <strong>own sisters</strong>, aged 5–11. Court documents and media reports confirm the timeline{" "}
            <a className="text-blue-700 underline" href="https://www.businessinsider.com/court-documents-detail-how-josh-duggar-molestation-allegations-were-revealed-2022-2" target="_blank" rel="noopener noreferrer">
              (Business Insider)
            </a>.
          </p>

          <p className="mb-4">
            The{" "}
            <a className="text-blue-700 underline" href="https://www.nctsn.org/resources/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">
              National Child Traumatic Stress Network
            </a>{" "}
            outlines how sibling abuse is both under-reported and profoundly damaging. Survivors report lifelong mistrust of intimacy and family bonds.
          </p>
        </section>

        {/* What the Numbers Say */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">📊 What the Numbers Actually Say</h2>
            <p className="text-slate-100 mt-1">Evidence that punctures the “stranger danger” myth.</p>
          </div>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">👥</span>
              <span>
                <strong>Victim–offender relationship</strong>: Known to the victim in most cases; family in a large share{" "}
                <a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">
                  (BJS)
                </a>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🗺️</span>
              <span>
                <strong>Kidnapping myths</strong>: Stranger abductions ≈ <strong>1%</strong> of NCMEC cases{" "}
                <a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">
                  (NCMEC)
                </a>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🧠</span>
              <span>
                <strong>Health impact</strong>:{" "}
                <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">
                  CDC ACEs
                </a>{" "}
                show lifelong health and social costs.
              </span>
            </li>
          </ul>
        </section>
        {/* Why the Registry Doesn’t Help */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">🚫 Why the Registry Doesn’t Help Here</h2>
            <p className="text-slate-100 mt-1">Maps can’t chart the risks closest to home.</p>
          </div>

          <p className="mb-4">
            The registry can’t map who tucks your child in, who supervises during custody weekends, or who a parent dates. The{" "}
            <a className="text-blue-700 underline" href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" target="_blank" rel="noopener noreferrer">
              NIJ’s evaluations
            </a>{" "}
            consistently find little to no deterrent effect from broad public notification, and significant collateral damage.
          </p>
        </section>

        {/* What SOLAR Wants */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">🌞 What SOLAR Wants</h2>
            <p className="text-slate-100 mt-1">Evidence-based safety that starts at home.</p>
          </div>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-xl">🧭</span>
              <span>
                Registries are <strong>ineffective and harmful</strong>, distracting families from the true risks.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🏡</span>
              <span>
                Safety requires <strong>prevention inside the home</strong>: stronger child-protection systems, mandatory reporter training that
                covers family dynamics, and better support for survivors.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">📚</span>
              <span>
                Policies must be <strong>evidence-based, not fear-based</strong>: resources should go toward intervention programs, not bus-stop
                banishment zones.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl">🤝</span>
              <span>
                Survivors must have access to <strong>trauma-informed care</strong>, financial support, and dignity—not empty promises that dots
                on a map will keep them safe.
              </span>
            </li>
          </ul>
        </section>

        {/* Why We Keep Getting This Wrong */}
        <section className="bg-white rounded-2xl shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">🧩 Why We Keep Getting This Wrong</h2>
            <p className="text-slate-100 mt-1">Maps feel simple. Families are not.</p>
          </div>

          <p className="mb-4">
            The stranger is easier to fear than the loved one. The alley is easier to picture than the bedroom. And the map, glowing with
            danger, is easier to sell than the messy truth that safety is systemic, not geographic.
          </p>

          <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 p-4">
            <p>
              <strong>SOLAR’s position</strong>: registries are ineffective, harmful, and distracting from the true sources of danger. Real safety
              comes from supporting families, training institutions, and building systems of accountability that reach inside the home.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-xl font-bold">📚</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Sources</h2>
                <p className="text-slate-200">Key research, reporting, and official documents</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <ul className="list-disc pl-6 space-y-2 text-slate-800">
              <li>
                <a className="text-blue-700 underline" href="https://ojjdp.ojp.gov/statistical-briefing-book/sbb-sexual-assault" target="_blank" rel="noopener noreferrer">
                  OJJDP Statistical Briefing Book
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">
                  BJS: Sexual Assault of Young Children
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener noreferrer">
                  RAINN Statistics
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">
                  NCMEC on Abductions
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.justice.gov/usao-wdar/pr/former-reality-tv-star-sentenced-more-12-years-prison-receipt-child-pornography" target="_blank" rel="noopener noreferrer">
                  DOJ: Josh Duggar Sentencing
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.businessinsider.com/court-documents-detail-how-josh-duggar-molestation-allegations-were-revealed-2022-2" target="_blank" rel="noopener noreferrer">
                  Business Insider: Duggar Case
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.businessinsider.com/jill-duggar-josh-duggar-molestation-report-reaction-2023-9" target="_blank" rel="noopener noreferrer">
                  Business Insider: Jill Duggar Statement
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.justice.gov/usao-sdin/pr/parents-sentenced-combined-90-years-federal-prison-sexually-abusing-and-exploiting" target="_blank" rel="noopener noreferrer">
                  DOJ: Mullins &amp; McLemore
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">
                  CDC ACEs Fast Facts
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.houstonchronicle.com/news/houston-texas/crime/article/hayim-cohen-victims-impact-20270726.php" target="_blank" rel="noopener noreferrer">
                  Houston Chronicle: Hayim Cohen
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.justice.gov/usao-dc/pr/dc-man-sentenced-15-years-prison-sexual-abuse-and-production-child-pornography" target="_blank" rel="noopener noreferrer">
                  DOJ: DC Man Convicted
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://www.nctsn.org/resources/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">
                  NCTSN: Sibling Sexual Abuse
                </a>
              </li>
              <li>
                <a className="text-blue-700 underline" href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" target="_blank" rel="noopener noreferrer">
                  NIJ: Megan’s Law, 10 Years Later
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* Further Reading */}
        <section className="bg-white rounded-lg shadow p-6 border border-slate-200">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white -m-6 mb-6 p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">📖 Further Reading</h2>
            <p className="text-slate-100 mt-1">Deeper dives on intrafamilial dynamics and prevention</p>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-slate-800">
            <li>
              <a className="text-blue-700 underline" href="https://www.childwelfare.gov/topics/can/types/sexualabuse/" target="_blank" rel="noopener noreferrer">
                Child Welfare Information Gateway: Intrafamilial Child Sexual Abuse
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://rainn.org/articles/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">
                RAINN on Sibling Sexual Abuse
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/childsexualabuse/index.html" target="_blank" rel="noopener noreferrer">
                CDC Violence Prevention Research
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.ussc.gov/research/research-reports/federal-child-pornography-offenses" target="_blank" rel="noopener noreferrer">
                U.S. Sentencing Commission: Federal Child Pornography Offenses
              </a>
            </li>
          </ul>
        </section>

        {/* Bottom share */}
        <div className="pt-2">
          <ShareBar title={pageTitle} />
        </div>

        {/* Back to blog index / resources, if desired */}
        <div className="no-print text-sm text-slate-600">
          <Link to="/blog" className="underline text-blue-700">← Back to Blog</Link>
        </div>
      </main>
    </div>
  );
}
