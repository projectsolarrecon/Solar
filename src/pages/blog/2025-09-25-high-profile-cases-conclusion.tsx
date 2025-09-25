import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import {
  BandHeader,
  Callout,
  PullQuote,
  Divider,
} from "../../components/solar";

const linkCls =
  "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function HighProfileCasesConclusion(): JSX.Element {
  try {
    console.log("✅ HighProfileCasesConclusion component loaded");

    return (
      <BlogLayout
        title="The Registry Is Working Exactly as Designed"
        description="The registry doesn’t fail despite its harms — it fails because it was designed to. This conclusion shows how it diverts attention from real sources of harm."
        keywords="sex offense registry, public safety, recidivism, clergy abuse, police misconduct, SOLAR"
        date="Sep 25, 2025"
        readTime="14 min"
        badge="📝 BLOG"
        lede="The registry isn’t broken — it’s doing exactly what it was designed to do: distract from the truth about where harm really lives."
      >
        <article className="prose prose-slate max-w-none">
          <Callout variant="info" title="TL;DR" icon="🔎">
            <p>
              The registry doesn’t fail by accident — it fails by design. It
              creates the illusion of safety while scapegoating people who’ve
              already repaid their debt, all while hiding systemic risks in
              authority, trust, and access. True prevention requires oversight
              and accountability, not dots on a map.
            </p>
          </Callout>

          <BandHeader
            title="The Illusion of Safety, The Reality of Harm"
            icon="🚨"
          />
          <p>
            The registry tells a simple story: danger looks like a stranger,
            danger is predictable, danger can be quarantined by drawing dots on
            a map. But every domain we explored told a different story—one that
            should unsettle anyone who genuinely cares about children’s safety.
          </p>

          <ul>
            <li>
              <strong>Politicians</strong> write laws in the name of “public
              safety,” then break those very laws in back rooms and hotel
              suites. The same lawmakers who push registry expansions have, in
              too many cases, been exposed as predators themselves. The registry
              diverts attention away from this hypocrisy.
            </li>
          </ul>
          <PullQuote>
            “How can you write laws to protect children while preying on them
            yourself?” — survivor testimony in a legislative misconduct case.
          </PullQuote>

          {/* ... all your blog content here (unchanged) ... */}

          <BandHeader title="Related Reading" icon="🔗" />
          <ul className="list-disc pl-6">
            <li>
              <Link className={linkCls} to="/blog/community-ties">
                Community Ties
              </Link>
            </li>
            <li>
              <Link className={linkCls} to="/blog/registry-myths">
                Registry Myths
              </Link>
            </li>
            <li>
              <Link className={linkCls} to="/guide/legislative-advocacy">
                Legislative Advocacy Guide
              </Link>
            </li>
          </ul>
        </article>
      </BlogLayout>
    );
  } catch (e) {
    console.error("❌ Blog page crashed:", e);
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        <h1>⚠️ Blog Page Error</h1>
        <p>{String(e)}</p>
      </div>
    );
  }
}
