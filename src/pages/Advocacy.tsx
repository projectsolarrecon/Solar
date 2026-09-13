import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const positions = [
  {
    title:
      "The sex offender registry system is ineffective and rooted in misinformation.",
    body:
      "Decades of research have not shown that broad registry systems reduce sexual offending. The vast majority of sexual offenses are committed by people not on a registry, and recidivism among people convicted of sex offenses is substantially lower than public rhetoric often suggests.",
  },
  {
    title: "Registry policies can make communities less safe.",
    body:
      "Policies that destabilize housing, employment, treatment, and family support can undermine the conditions that support successful reentry. Research also suggests that broad public notification can increase recidivism, challenging the assumption that more exposure necessarily means more safety.",
  },
  {
    title:
      "Sexual harm to children is primarily a relationship-and-access problem, not a stranger-location problem.",
    body:
      "Most reported child sexual abuse is committed by someone the child knows. Prevention therefore requires attention to family and trusted-access relationships—including teachers, coaches, clergy, and community leaders—not just the locations of people already on a public registry.",
  },
  {
    title: "Other serious harms are addressed without lifelong public branding.",
    body:
      "Nearly every other serious harm to children is addressed through prevention, regulation, treatment, and ordinary sentence-bound accountability—not lifelong public branding.",
  },
  {
    title: "Registries are punitive in practice, not merely administrative.",
    body:
      "Public exposure, recurring reporting, residence, proximity, employment, and other restrictions can persist long beyond the original sentence, functioning as continuing punishment in everyday life and raising serious questions of due process, proportionality, and fairness.",
  },
  {
    title: "Registry systems punish families and children too.",
    body:
      "Public identification, housing and employment barriers, and other restrictions can destabilize entire households. Spouses and children who committed no offense can face financial strain, forced moves, stigma, harassment, isolation, and lost opportunities of their own.",
  },
  {
    title: "One-size-fits-all registry laws are fundamentally flawed.",
    body:
      "Universal requirements, restrictions, and labels ignore major differences among cases, people, time elapsed, conduct, treatment, and actual risk. Policy should be individualized, reviewable, and evidence-based.",
  },
  {
    title: "Registries create a permanent underclass.",
    body:
      "They erect formidable barriers to housing, employment, education, financial services, and community participation, stripping many people of the basic tools needed to rebuild their lives and reintegrate safely.",
  },
  {
    title:
      "Public-safety policy should be judged by measurable outcomes, not presumed benefits.",
    body:
      "The seriousness of sexual harm does not make every intervention imposed in its name effective. Registration, public notification, supervision, treatment, and other interventions should be evaluated according to what they actually accomplish, whom they affect, and whether their demonstrated benefits justify their burdens.",
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

      <section
        id="position-statement"
        className="bg-gradient-to-b from-gray-50 via-white to-amber-50/40 py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Position Statement
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              These nine principles guide SOLAR’s public education, policy analysis,
              advocacy tools, and reform priorities.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              The SOLAR framework
            </p>

            <div className="grid gap-3 md:grid-cols-3">
              <article className="rounded-xl border border-slate-200 border-t-2 border-t-amber-300 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  How we work
                </p>
                <div className="mt-3 space-y-0.5 text-base font-semibold leading-6 text-slate-900">
                  <p><strong className="font-black text-amber-600">S</strong>upport</p>
                  <p><strong className="font-black text-amber-600">O</strong>rganize</p>
                  <p><strong className="font-black text-amber-600">L</strong>ead</p>
                  <p><strong className="font-black text-amber-600">A</strong>dvance</p>
                  <p><strong className="font-black text-amber-600">R</strong>eform</p>
                </div>
              </article>

              <article className="rounded-xl border border-slate-200 border-t-2 border-t-amber-300 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  What we provide
                </p>
                <div className="mt-3 space-y-0.5 text-base font-semibold leading-6 text-slate-900">
                  <p><strong className="font-black text-amber-600">S</strong>ex</p>
                  <p><strong className="font-black text-amber-600">O</strong>ffense</p>
                  <p><strong className="font-black text-amber-600">L</strong>earning</p>
                  <p><strong className="font-black text-amber-600">A</strong>dvocacy</p>
                  <p><strong className="font-black text-amber-600">R</strong>esources</p>
                </div>
              </article>

              <article className="rounded-xl border border-slate-200 border-t-2 border-t-amber-300 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  What we seek
                </p>
                <div className="mt-3 space-y-0.5 text-base font-semibold leading-6 text-slate-900">
                  <p><strong className="font-black text-amber-600">S</strong>afety</p>
                  <p><strong className="font-black text-amber-600">O</strong>pportunity</p>
                  <p><strong className="font-black text-amber-600">L</strong>iberty</p>
                  <p><strong className="font-black text-amber-600">A</strong>ccountability</p>
                  <p><strong className="font-black text-amber-600">R</strong>edemption</p>
                </div>
              </article>
            </div>
          </div>

          <ol className="mx-auto mt-8 max-w-6xl space-y-4">
            {positions.map((position, index) => (
              <li
                key={position.title}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-sm transition-shadow hover:shadow-md"
              >
                <article className="grid gap-5 px-6 py-8 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8 md:px-10 md:py-10">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-sm font-black tracking-[0.12em] text-amber-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                    <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                      {position.title}
                    </h3>
                    <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                      {position.body}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-amber-50 p-8 text-center shadow-sm md:p-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Put these principles into action
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
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
