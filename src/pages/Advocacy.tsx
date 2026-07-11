import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const positions = [
  {
    title:
      "The sex offender registry system is ineffective, harmful, and rooted in misinformation.",
    body:
      "It does not prevent crime. The vast majority of sex offenses are committed by individuals not on any registry, and empirical evidence consistently shows lower recidivism rates for people convicted of sex offenses than commonly assumed.",
  },
  {
    title:
      "Registry systems cause lasting harm to individuals, families, and communities.",
    body:
      "Rather than increasing safety, registries foster fear, isolation, discrimination, and vigilante violence. Children and families often suffer consequences through no fault of their own.",
  },
  {
    title: "The real risk to children often lies closer to home.",
    body:
      "Authority figures—including family members, teachers, coaches, clergy, and community leaders—are more likely to perpetrate sexual harm than strangers. Public registry systems misdirect attention toward the stranger-danger myth.",
  },
  {
    title:
      "Other types of crime present a greater and more consistent danger to public safety.",
    body:
      "Many serious harms to children and communities are addressed through prevention, regulation, treatment, and sentence-bound accountability rather than lifelong public branding.",
  },
  {
    title: "Registries are punitive in practice, not administrative in nature.",
    body:
      "Public exposure, recurring reporting, restrictions, and collateral consequences operate as continuing punishment after a sentence has been served and stand in tension with due process, proportionality, and fairness.",
  },
  {
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    body:
      "Blanket restrictions ignore major differences among cases, people, time elapsed, conduct, treatment, and actual risk. Policy should be individualized, reviewable, and evidence-based.",
  },
  {
    title: "Registries create a permanent underclass.",
    body:
      "They block access to housing, employment, education, financial services, and community participation, stripping people of the tools necessary to rebuild their lives and reintegrate safely.",
  },
];

const waysToHelp = [
  {
    title: "Spread Awareness",
    description:
      "Share SOLAR articles, research, and resources to help replace fear and stigma with informed discussion.",
    label: "Read & Share",
    to: "/blog",
  },
  {
    title: "Policy Advocacy",
    description:
      "Build a clear, evidence-supported message for a lawmaker, local official, journalist, or editor.",
    label: "Open the Action Hub",
    to: "/advocacy/action-hub",
  },
  {
    title: "Research the Evidence",
    description:
      "Use SOLAR’s curated research and source library to support accurate, responsible advocacy.",
    label: "Review Research & Data",
    to: "/resources/research-data-resources",
  },
  {
    title: "Share Your Story",
    description:
      "Help others understand the human impact of registry policy by sharing your experience, insight, or expertise.",
    label: "Contact SOLAR",
    to: "/contact",
  },
  {
    title: "Offer Professional Support",
    description:
      "Contribute skills in law, counseling, research, communications, technology, or community support.",
    label: "Volunteer Your Skills",
    to: "/contact",
  },
];

function Advocacy() {
  return (
    <div className="bg-white">
      <SEO
        title="SOLAR Advocacy Positions | The SOLAR Project"
        description="Read the SOLAR Project's evidence-based advocacy positions on registries, public safety, accountability, reintegration, and reform."
        keywords="SOLAR advocacy positions, sex offender registry reform, evidence-based policy, public safety, registry reform"
      />

      <section className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
              What SOLAR stands for
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              SOLAR Advocacy Positions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-100">
              Our reform work is grounded in evidence, constitutional principles,
              human dignity, and a commitment to public safety that can be measured.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/advocacy/action-hub"
                className="rounded-lg bg-amber-400 px-7 py-3 font-semibold text-slate-950 shadow-lg transition-colors hover:bg-amber-300"
              >
                Get Involved
              </Link>
              <Link
                to="/resources/research-data-resources"
                className="rounded-lg border-2 border-white px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-800"
              >
                Review the Evidence
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300" />

      <section id="position-statement" className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Position Statement
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              These seven principles guide SOLAR’s public education, policy analysis,
              advocacy tools, and reform priorities.
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
            <p className="mb-8 text-center text-lg font-medium text-gray-700">
              At SOLAR, we exist to <strong>Support, Organize, Lead, Advance, and Reform</strong>—providing{" "}
              <strong>Sex Offense Learning, Advocacy, and Resources</strong>—to realize a future of{" "}
              <strong>Safety, Opportunity, Liberty, Accountability, and Redemption</strong>.
            </p>

            <div className="space-y-6">
              {positions.map((position) => (
                <article
                  key={position.title}
                  className="rounded-r-lg border-l-4 border-yellow-400 bg-yellow-50 p-6"
                >
                  <h3 className="text-xl font-bold text-yellow-900">
                    {position.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-yellow-800">
                    {position.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-amber-200 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Put these principles into action
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
                The Advocacy Action Hub turns these positions into a personalized
                phone script, email, letter, public testimony, or letter to the editor.
              </p>
              <Link
                to="/advocacy/action-hub"
                className="mt-6 inline-flex rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-slate-700"
              >
                Open the Advocacy Action Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Current Advocacy Campaigns</h2>
            <p className="mt-4 text-lg text-gray-600">
              SOLAR’s campaign work grows from the principles above.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
              ✓
            </div>
            <h3 className="mt-5 text-2xl font-bold text-gray-900">RECON Initiative</h3>
            <p className="mt-2 text-lg font-semibold text-blue-800">
              Register Every Convict or None
            </p>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-700">
              RECON exposes the selective logic of permanent public registries. If
              lifelong public branding is truly necessary for safety, that logic should
              be applied consistently. If it cannot be applied consistently, it should
              be reconsidered.
            </p>
            <span className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">
              Campaign development underway
            </span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ways to Make a Difference</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Choose the path that best matches how you want to contribute.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {waysToHelp.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
                <Link
                  to={item.to}
                  className="mt-5 inline-flex font-semibold text-blue-700 transition-colors hover:text-blue-900"
                >
                  {item.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to make your voice heard?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-200">
            Choose your audience, position, and format. The Action Hub will help you
            build a message you can use today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/advocacy/action-hub"
              className="rounded-lg bg-white px-8 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-800"
            >
              Contact SOLAR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Advocacy;
