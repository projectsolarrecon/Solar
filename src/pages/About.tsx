import SEO from "../components/SEO";
import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      title: "Dignity",
      description: "Every person deserves to be treated with respect and dignity, regardless of their past.",
      icon: "👥"
    },
    {
      title: "Justice",
      description: "We advocate for fair treatment and constitutional rights for all individuals.",
      icon: "⚖️"
    },
    {
      title: "Education",
      description: "Knowledge is power. We provide accurate information to help people make informed decisions.",
      icon: "📚"
    },
    {
      title: "Support",
      description: "No one should navigate the legal system alone. We connect people with resources and community.",
      icon: "🤝"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="About SOLAR – Evidence-Based Reform"
        description="SOLAR works to replace stigma and fear with data, compassion, and reform. Learn about our mission, values, and measurable impact."
        openGraph={
          title: "About SOLAR – Evidence-Based Reform",
          description: "SOLAR’s mission is to advance safety and justice through evidence-based reform.",
          image: "/og/solar-about.jpg"
        }
      />
      <section className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white py-16">
        <h1 className="text-4xl font-bold leading-tight">About The SOLAR Project</h1>
        <p>SOLAR exists to support, organize, and advocate for research-based reform that promotes safety, opportunity, and redemption.</p>
      </section>
      <section id="our-impact">
        <h2>Our Impact</h2>
        <p>Making a difference in the lives of individuals and families through reform.</p>
      </section>
      <section id="cta">
        <h2>Get Involved</h2>
        <Link to="/contact" className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold">Join the Advocacy Network</Link>
        <Link to="/resources" className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-lg font-semibold">Explore Reentry Guides</Link>
      </section>
    </div>
  );
}

export default About;
