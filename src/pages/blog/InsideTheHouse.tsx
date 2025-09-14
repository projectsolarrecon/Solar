import React from "react";
import BlogLayout from "../../components/layouts/BlogLayout";
import { Link } from "react-router-dom";

/** Lightweight helpers (scoped to this file) */
function BandHeader({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="mt-10 mb-6 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 flex items-center gap-2 shadow-sm">
        {icon && <span aria-hidden>{icon}</span>}
        <span className="font-semibold tracking-tight">{title}</span>
      </div>
    </div>
  );
}

function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning" | "danger" | "note";
  title?: string;
  children: React.ReactNode;
}) {
  const map = {
    info: "bg-blue-50 ring-blue-200 text-blue-900",
    warning: "bg-amber-50 ring-amber-200 text-amber-900",
    danger: "bg-red-50 ring-red-200 text-red-900",
    note: "bg-slate-50 ring-slate-200 text-slate-900",
  } as const;
  return (
    <div className={`my-6 rounded-xl ring-1 p-4 md:p-5 ${map[tone]}`}>
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div className="prose prose-slate max-w-none">{children}</div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-4 md:pl-6 border-l-4 border-red-300 italic text-slate-800 text-lg">
      {children}
    </blockquote>
  );
}

export default function InsideTheHouse(): JSX.Element {
  return (
    <BlogLayout
      title="The Call Is Coming from Inside the House"
      description="Family, proximity, and the myth that a map can save us."
      keywords="child safety, registry, family systems, prevention, OJJDP, BJS, NCMEC, ACEs"
      date="September 12, 2025"
      readTime="8 min read"
      badge="📰 INVESTIGATIVE SERIES"
      lede="Parents cling to stranger-danger and registry maps. But decades of research and prosecutions show most harm comes from inside the home—or close enough to touch it."
    >
      {/* Intro */}
      <section className="mb-10">
        <h2 className="sr-only">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Parents tell themselves comforting stories. We teach kids about “stranger danger,” consult sex-offender maps, draw wider circles around parks and bus stops, and exhale. But the data—and the cases that make it to court—say the real danger to many children isn’t lurking out on the sidewalk. It’s inside the home, or close enough to touch it. The registry, built to soothe a public terrified of the unknown predator, simply doesn’t map what many victims face: abuse by a parent, stepparent, relative, partner of a parent, or trusted family friend.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          That is not a theory. It’s a pattern that threads through decades of research and thousands of prosecutions. The{" "}
          <a className="text-blue-700 underline" href="https://ojjdp.ojp.gov/statistical-briefing-book/sbb-sexual-assault" target="_blank" rel="noopener noreferrer">
            Office of Juvenile Justice and Delinquency Prevention
          </a>{" "}
          shows that the overwhelming majority of children who are sexually assaulted are harmed by someone they know, often within the family itself. The{" "}
          <a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">
            Bureau of Justice Statistics
          </a>{" "}
          found a similar reality in a landmark report: for the youngest victims, offenders are overwhelmingly known—frequently parents or other relatives—while “strangers” are the minority.{" "}
          <a className="text-blue-700 underline" href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener noreferrer">
            RAINN
          </a>{" "}
          is blunt: for minors, most perpetrators are known to the child. And when we widen the lens to child safety generally, the{" "}
          <a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">
            National Center for Missing &amp; Exploited Children (NCMEC)
          </a>{" "}
          reports that “non-family” abductions—the classic stranger scenario—are about <strong>1%</strong> of missing-child cases.
        </p>

        <Callout tone="warning" title="⚠️ Reality Check">
          <p className="m-0">
            The map can’t show you who tucks your child in, who supervises a custody weekend, or who a parent is dating. Safety planning has to start where children actually live.
          </p>
        </Callout>

        <p className="mt-4 text-gray-700 leading-relaxed">
          If you want a celebrity case that proves the point, consider <strong>Josh Duggar</strong>—the TV-famous oldest son in a large, public, faith-branded family. In 2022, the{" "}
          <a className="text-blue-700 underline" href="https://www.justice.gov/usao-wdar/pr/former-reality-tv-star-sentenced-more-12-years-prison-receipt-child-pornography" target="_blank" rel="noopener noreferrer">
            U.S. Attorney’s Office for the Western District of Arkansas
          </a>{" "}
          sentenced him to <strong>151 months</strong> (12 years, 7 months) for receiving child sexual abuse material. But years before that, when he was 14 or 15, Josh admitted to his parents (Jim Bob and Michelle Duggar) that he had inappropriately touched <strong>four of his younger sisters</strong> and a babysitter. The family did not report to law enforcement at that time; disclosures emerged later in civil and media proceedings.
        </p>

        <PullQuote>
          <em>“When I read the police report about it, I wished I were dead.”</em> —Jill Duggar Dillard, one of Josh’s sisters{" "}
          (<a className="text-blue-700 underline" href="https://www.businessinsider.com/jill-duggar-josh-duggar-molestation-report-reaction-2023-9" target="_blank" rel="noopener noreferrer">
            Business Insider
          </a>)
        </PullQuote>

        <Callout tone="info" title="🔎 Pattern, Not Exception">
          <p className="m-0">
            The abuse here wasn’t an unknown man in a park. It was a brother, in a house famous for its supposed values.
          </p>
        </Callout>
      </section>
      {/* Parents */}
      <BandHeader title="Parents" icon="👨‍👩‍👧" />
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Start with the hardest stories: biological parents who weaponize proximity, authority, and trust.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          In <strong>Indiana</strong>,{" "}
          <a className="text-blue-700 underline" href="https://www.justice.gov/usao-sdin/pr/parents-sentenced-combined-90-years-federal-prison-sexually-abusing-and-exploiting" target="_blank" rel="noopener noreferrer">
            Tristan Mullins and Desley McLemore
          </a>{" "}
          were sentenced to a combined <strong>90 years in federal prison</strong> for producing and distributing sexual abuse images of their infant. The DOJ’s press release is explicit: the crimes took place in their home, during caregiving.
        </p>

        <Callout tone="danger" title="⚠️ Urgent">
          <p className="m-0">
            <em>“I never felt safe with my own mother. The laughter in our house felt like the lock clicking on a door I couldn’t ever open.”</em> —Victim impact excerpt (court summary)
          </p>
        </Callout>

        <p className="text-gray-700 leading-relaxed">
          The{" "}
          <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">
            CDC’s ACEs research
          </a>{" "}
          shows that such early abuse creates lifelong damage: depression, suicidality, substance use, and chronic illness.
        </p>
      </section>

      {/* Stepfamily / Mom's Boyfriend */}
      <BandHeader title="Stepfamily and “Mom’s Boyfriend”" icon="👤" />
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Even when the offender isn’t a biological parent, the defining variable remains the same: power inside the intimate sphere.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          In <strong>Texas</strong>, stepfather Hayim Cohen was sentenced to life for decades of abuse against boys in his care (
          <a className="text-blue-700 underline" href="https://www.houstonchronicle.com/news/houston-texas/crime/article/hayim-cohen-victims-impact-20270726.php" target="_blank" rel="noopener noreferrer">
            Houston Chronicle
          </a>
          ).
        </p>

        <PullQuote>
          <em>“You preyed upon innocent young boys who had nothing, and you took advantage of their vulnerability.”</em> —Victim impact statement
        </PullQuote>

        <p className="text-gray-700 leading-relaxed">
          In <strong>Washington, D.C.</strong>, a man was convicted of sexually abusing his girlfriend’s daughter and producing images (
          <a className="text-blue-700 underline" href="https://www.justice.gov/usao-dc/pr/dc-man-sentenced-15-years-prison-sexual-abuse-and-production-child-pornography" target="_blank" rel="noopener noreferrer">
            DOJ Press Release
          </a>
          ). These weren’t strangers—they were partners trusted in family life.
        </p>
      </section>

      {/* Siblings & Extended Family */}
      <BandHeader title="Siblings and Extended Family" icon="👫" />
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Abuse can also involve siblings, cousins, uncles, and others woven into everyday family life.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Josh Duggar’s victims were his <strong>own sisters</strong>, aged 5–11. Court documents and media reports confirm the timeline (
          <a className="text-blue-700 underline" href="https://www.businessinsider.com/court-documents-detail-how-josh-duggar-molestation-allegations-were-revealed-2022-2" target="_blank" rel="noopener noreferrer">
            Business Insider
          </a>
          ).
        </p>
        <p className="text-gray-700 leading-relaxed">
          The{" "}
          <a className="text-blue-700 underline" href="https://www.nctsn.org/resources/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">
            National Child Traumatic Stress Network
          </a>{" "}
          outlines how sibling abuse is both under-reported and profoundly damaging. Survivors report lifelong mistrust of intimacy and family bonds.
        </p>
      </section>

      {/* Numbers */}
      <BandHeader title="What the Numbers Actually Say" icon="📊" />
      <section className="mb-8">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Victim–offender relationship:</strong> Known to the victim in most cases; family in a large share (
            <a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">
              BJS
            </a>
            ).
          </li>
          <li>
            <strong>Kidnapping myths:</strong> Stranger abductions = about <strong>1%</strong> of NCMEC cases (
            <a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">
              NCMEC
            </a>
            ).
          </li>
          <li>
            <strong>Health impact:</strong>{" "}
            <a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">
              CDC ACEs
            </a>{" "}
            shows lifelong health and social costs.
          </li>
        </ul>

        <Callout tone="note" title="🧭 Practical Takeaway">
          <p className="m-0">
            Safety planning means vetting caregivers, respecting children’s boundaries, and building multiple ways for kids to disclose—at home, at school, and in healthcare settings.
          </p>
        </Callout>
      </section>
      {/* Why registry doesn't help */}
      <BandHeader title="Why the Registry Doesn’t Help Here" icon="🗺️" />
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          The registry can’t map who tucks your child in, who supervises during custody weekends, or who a parent dates. The{" "}
          <a className="text-blue-700 underline" href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" target="_blank" rel="noopener noreferrer">
            NIJ’s evaluations
          </a>{" "}
          consistently find little to no deterrent effect from broad public notification, and significant collateral damage.
        </p>
      </section>

      {/* What SOLAR wants */}
      <BandHeader title="What SOLAR Wants" icon="🌞" />
      <section className="mb-8">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Registries are <strong>ineffective and harmful</strong>, distracting families from the true risks.</li>
          <li>
            Safety requires <strong>prevention inside the home</strong>: stronger child-protection systems, mandatory reporter training that
            covers family dynamics, and better support for survivors.
          </li>
          <li>
            Policies must be <strong>evidence-based, not fear-based</strong>: resources should go toward intervention programs, not bus-stop
            banishment zones.
          </li>
          <li>
            Survivors must have access to <strong>trauma-informed care</strong>, financial support, and dignity—not empty promises that dots on
            a map will keep them safe.
          </li>
        </ul>
      </section>

      {/* Why we keep getting this wrong */}
      <BandHeader title="Why We Keep Getting This Wrong" icon="🧩" />
      <section className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          The stranger is easier to fear than the loved one. The alley is easier to picture than the bedroom. And the map, glowing with danger,
          is easier to sell than the messy truth that safety is systemic, not geographic.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>SOLAR’s position</strong>: registries are ineffective, harmful, and distracting from the true sources of danger. Real safety
          comes from supporting families, training institutions, and building systems of accountability that reach inside the home.
        </p>
      </section>

      {/* Sources */}
      <BandHeader title="Sources" icon="📚" />
      <section className="mb-8">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><a className="text-blue-700 underline" href="https://ojjdp.ojp.gov/statistical-briefing-book/sbb-sexual-assault" target="_blank" rel="noopener noreferrer">OJJDP Statistical Briefing Book</a></li>
          <li><a className="text-blue-700 underline" href="https://bjs.ojp.gov/content/pub/pdf/saycrle.pdf" target="_blank" rel="noopener noreferrer">BJS: Sexual Assault of Young Children</a></li>
          <li><a className="text-blue-700 underline" href="https://rainn.org/statistics/children-and-teens" target="_blank" rel="noopener noreferrer">RAINN Statistics</a></li>
          <li><a className="text-blue-700 underline" href="https://www.missingkids.org/theissues/abductions" target="_blank" rel="noopener noreferrer">NCMEC on Abductions</a></li>
          <li><a className="text-blue-700 underline" href="https://www.justice.gov/usao-wdar/pr/former-reality-tv-star-sentenced-more-12-years-prison-receipt-child-pornography" target="_blank" rel="noopener noreferrer">DOJ: Josh Duggar Sentencing</a></li>
          <li><a className="text-blue-700 underline" href="https://www.businessinsider.com/court-documents-detail-how-josh-duggar-molestation-allegations-were-revealed-2022-2" target="_blank" rel="noopener noreferrer">Business Insider: Duggar Case</a></li>
          <li><a className="text-blue-700 underline" href="https://www.businessinsider.com/jill-duggar-josh-duggar-molestation-report-reaction-2023-9" target="_blank" rel="noopener noreferrer">Business Insider: Jill Duggar Statement</a></li>
          <li><a className="text-blue-700 underline" href="https://www.justice.gov/usao-sdin/pr/parents-sentenced-combined-90-years-federal-prison-sexually-abusing-and-exploiting" target="_blank" rel="noopener noreferrer">DOJ: Mullins &amp; McLemore</a></li>
          <li><a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/aces/fastfact.html" target="_blank" rel="noopener noreferrer">CDC ACEs Fast Facts</a></li>
          <li><a className="text-blue-700 underline" href="https://www.houstonchronicle.com/news/houston-texas/crime/article/hayim-cohen-victims-impact-20270726.php" target="_blank" rel="noopener noreferrer">Houston Chronicle: Hayim Cohen</a></li>
          <li><a className="text-blue-700 underline" href="https://www.justice.gov/usao-dc/pr/dc-man-sentenced-15-years-prison-sexual-abuse-and-production-child-pornography" target="_blank" rel="noopener noreferrer">DOJ: DC Man Convicted</a></li>
          <li><a className="text-blue-700 underline" href="https://www.nctsn.org/resources/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">NCTSN: Sibling Sexual Abuse</a></li>
          <li><a className="text-blue-700 underline" href="https://nij.ojp.gov/library/publications/megan-s-law-10-years-later-evaluating-efficacy-sex-offender-registration-and" target="_blank" rel="noopener noreferrer">NIJ: Megan’s Law, 10 Years Later</a></li>
        </ul>
      </section>

      {/* Further reading */}
      <BandHeader title="Further Reading" icon="📖" />
      <section className="mb-16">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><a className="text-blue-700 underline" href="https://www.childwelfare.gov/topics/can/types/sexualabuse/" target="_blank" rel="noopener noreferrer">Child Welfare Information Gateway: Intrafamilial Child Sexual Abuse</a></li>
          <li><a className="text-blue-700 underline" href="https://rainn.org/articles/sibling-sexual-abuse" target="_blank" rel="noopener noreferrer">RAINN on Sibling Sexual Abuse</a></li>
          <li><a className="text-blue-700 underline" href="https://www.cdc.gov/violenceprevention/childsexualabuse/index.html" target="_blank" rel="noopener noreferrer">CDC Violence Prevention Research</a></li>
          <li><a className="text-blue-700 underline" href="https://www.ussc.gov/research/research-reports/federal-child-pornography-offenses" target="_blank" rel="noopener noreferrer">U.S. Sentencing Commission: Federal Child Pornography Offenses</a></li>
        </ul>

        <div className="mt-8">
          <Link to="/blog" className="text-slate-600 underline">← Back to Blog</Link>
        </div>
      </section>
    </BlogLayout>
  );
}
