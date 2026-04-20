import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white">
      <SEO 
        title="About SOLAR – Evidence-Based Reform"
        description="SOLAR works to replace stigma and fear with data, compassion, and reform. Learn about our mission, values, and measurable impact."
        openGraph={{
          title: "About SOLAR – Evidence-Based Reform",
          description: "SOLAR’s mission is to advance safety and justice through evidence-based reform.",
          image: "/og/solar-about.jpg"
        }}
      />
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white py-16">
        <h1 className="text-4xl leading-tight font-bold">About The SOLAR Project</h1>
        <p>SOLAR exists to support, organize, and advocate for research-based reform that promotes safety, opportunity, and redemption.</p>
      </section>
      <section id="our-impact">
        <h2>Our Impact</h2>
        <p>Making a difference in the lives of individuals and families through reform.</p>
      </section>
      <section id="cta" className="flex flex-wrap items-center justify-center gap-4 py-8 text-center">
        <h2 className="w-full text-2cl font-semibold mb-2">Get Involved</h2>
        <Link
          to="/contact"
          className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate(700) transition"
        >
          Join the Advocacy Network
        </Link>
        <Link to="/resources" className="border-2 border-slate-600 text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Explore Reentry Guides</Link>
      </section>
    </div>
  );
}

export default About;
