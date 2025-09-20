import React from "react";
import { Link } from "react-router-dom";
import BlogLayout from "../../components/layouts/BlogLayout";
import { BandHeader, Callout, PullQuote, Divider, ShareBar } from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function _Scaffold_Blog(): JSX.Element {
  return (
    <BlogLayout
      title="(Post Title Goes Here)"
      description="(One-sentence SEO description of this post.)"
      keywords="keyword1, keyword2, keyword3"
      date="Sep 19, 2025"
      readTime="8 min"
      badge="📝 BLOG"
      lede="(1–2 line lede that tees up the post — compelling, plain language, and scannable.)"
    >
      <article className="prose prose-slate max-w-none">
        {/* Optional quick context callout near the top */}
        <Callout variant="info" title="TL;DR" icon="🔎">
          <p>
            (Short summary.) Add inline links like{" "}
            <a className={linkCls} href="https://example.com" target="_blank" rel="noopener">
              this
            </a>{" "}
            and internal links like{" "}
            <Link className={linkCls} to="/resources/legislative-advocacy">
              Legislative Advocacy Guide
            </Link>
            .
          </p>
        </Callout>

        {/* Section 1 */}
        <BandHeader title="(Section One Title)" icon="🌱" />
        <p>
          (Long-form paragraph text…) Cite evidence inline with{" "}
          <a className={linkCls} href="https://example.org/report.pdf" target="_blank" rel="noopener">
            blue underlined links
          </a>
          .
        </p>
        <ul className="list-disc pl-6">
          <li>(Bulleted point with <a className={linkCls} href="https://example.com" target="_blank" rel="noopener">source</a>)</li>
          <li>(Another point.)</li>
        </ul>

        <PullQuote>
          “(Short powerful quote or lived-experience line that reinforces the section’s theme.)”
        </PullQuote>

        <Divider label="Deep Dive" />

        {/* Section 2 */}
        <BandHeader title="(Section Two Title)" icon="🧭" />
        <p>
          (More narrative…) Link internally to{" "}
          <Link className={linkCls} to="/blog/inside-the-house">Inside the House</Link> and{" "}
          <Link className={linkCls} to="/resources/professional-licensing-guide">Licensing Guide</Link>.
        </p>

        <Callout variant="legal" title="Policy Context" icon="⚖️">
          <p>(Legal/policy nuance with one or two concise references.)</p>
        </Callout>

        {/* Data Sources */}
        <BandHeader title="Data Sources" icon="📚" />
        <ul className="list-disc pl-6">
          <li>
            (Source Label) —{" "}
            <a className={linkCls} href="https://example.org/primary-source" target="_blank" rel="noopener">
              https://example.org/primary-source
            </a>
          </li>
          <li>
            (Secondary Analysis) —{" "}
            <a className={linkCls} href="https://example.com/analysis" target="_blank" rel="noopener">
              https://example.com/analysis
            </a>
          </li>
        </ul>

        {/* Related Reading */}
        <BandHeader title="Related Reading" icon="🔗" />
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/community-ties">Community Ties</Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/legislative-advocacy-guide">Legislative Advocacy Guide</Link>
          </li>
        </ul>

        {/* Share */}
        <div className="mt-10">
          <ShareBar />
        </div>
      </article>
    </BlogLayout>
  );
}
