import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";
import {
  SectionBand,
  SectionCard,
  Callout,
  Checklist,
  SourcesOffline,
  TOC,
  ShareBar,
} from "../../components/solar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function _Scaffold_Guide(): JSX.Element {
  return (
    <GuideLayout
      title="(Guide Title Goes Here)"
      description="(One-sentence SEO description of this guide.)"
      keywords="keyword1, keyword2, keyword3"
      date="Sep 19, 2025"
      readTime="15 min"
      badge="📘 RESOURCE GUIDE"
      lede="(Brief, action-oriented lede explaining what readers will accomplish.)"
      showTOC={true}
    >
      {/* Optional explicit TOC render if you want it visible near top */}
      <div className="mb-6">
        <TOC />
      </div>

      {/* Section 1 */}
      <SectionBand title="Quick Start" subtitle="60 seconds to act" emblem={1} />
      <SectionCard>
        <p>
          Use these trusted tools to get moving now. Internal link example:{" "}
          <Link className={linkCls} to="/advocacy#contact-congress">SOLAR Script Generator</Link>.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Find officials:{" "}
            <a className={linkCls} href="https://www.usa.gov/elected-officials" target="_blank" rel="noopener">
              USA.gov directory
            </a>
          </li>
          <li>
            Message framework: see{" "}
            <Link className={linkCls} to="/blog/plea-vs-trial">Plea vs Trial</Link>
          </li>
        </ul>
        <Callout variant="reminder" title="Pro Tip" icon="💡">
          Staff prioritize short, specific, local messages. Add your city/ZIP and one lived-experience line.
        </Callout>
      </SectionCard>

      {/* Section 2 */}
      <SectionBand title="Core Steps" subtitle="Move from idea to done" emblem={2} />
      <SectionCard>
        <Checklist
          id="guide-core-steps"
          items={[
            { id: "step-1", label: <>Identify the goal &amp; audience</> },
            {
              id: "step-2",
              label: (
                <>
                  Gather two primary sources (e.g.,{" "}
                  <a className={linkCls} href="https://bjs.ojp.gov" target="_blank" rel="noopener">
                    BJS
                  </a>{" "}
                  and{" "}
                  <a className={linkCls} href="https://www.ussc.gov" target="_blank" rel="noopener">
                    USSC
                  </a>
                  )
                </>
              ),
            },
            { id: "step-3", label: <>Draft with one clear ask</> },
            { id: "step-4", label: <>Add internal links to related SOLAR content</> },
          ]}
        />
        <Callout variant="legal" title="Legal Notes" icon="⚖️">
          Policies vary by state; verify current rules via official sources before taking action.
        </Callout>
      </SectionCard>

      {/* Section 3 */}
      <SectionBand title="Lookups & Evidence" subtitle="Online + offline options" emblem={3} />
      <SectionCard>
        <SourcesOffline
          childrenLeft={
            <ul className="list-disc pl-5">
              <li>
                <a className={linkCls} href="https://www.commoncause.org/find-your-representative/" target="_blank" rel="noopener">
                  Common Cause (Find Reps)
                </a>
              </li>
              <li>
                <a className={linkCls} href="https://www.congress.gov" target="_blank" rel="noopener">
                  Congress.gov
                </a>
              </li>
            </ul>
          }
          childrenRight={
            <ul className="list-disc pl-5">
              <li>
                <a className={linkCls} href="https://bjs.ojp.gov" target="_blank" rel="noopener">
                  Bureau of Justice Statistics (BJS)
                </a>
              </li>
              <li>
                <a className={linkCls} href="https://ojjdp.ojp.gov" target="_blank" rel="noopener">
                  OJJDP
                </a>
              </li>
            </ul>
          }
          offlineChildren={
            <ul className="list-disc pl-5">
              <li>Public library law desk; print rulebooks</li>
              <li>State law library; request staff assistance</li>
            </ul>
          }
        />
      </SectionCard>

      {/* Data Sources (mirrors every inline link) */}
      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            USA.gov —{" "}
            <a className={linkCls} href="https://www.usa.gov/elected-officials" target="_blank" rel="noopener">
              https://www.usa.gov/elected-officials
            </a>
          </li>
          <li>
            Common Cause —{" "}
            <a className={linkCls} href="https://www.commoncause.org/find-your-representative/" target="_blank" rel="noopener">
              https://www.commoncause.org/find-your-representative/
            </a>
          </li>
          <li>
            BJS —{" "}
            <a className={linkCls} href="https://bjs.ojp.gov" target="_blank" rel="noopener">
              https://bjs.ojp.gov
            </a>
          </li>
          <li>
            USSC —{" "}
            <a className={linkCls} href="https://www.ussc.gov" target="_blank" rel="noopener">
              https://www.ussc.gov
            </a>
          </li>
        </ul>
      </SectionCard>

      {/* Related Reading */}
      <SectionBand title="Related Reading" emblem="🔗" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/resources/legislative-advocacy-guide">
              Legislative Advocacy Guide
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/community-ties">
              Community Ties (Blog)
            </Link>
          </li>
        </ul>
      </SectionCard>

      {/* Share */}
      <div className="mt-10">
        <ShareBar />
      </div>
    </GuideLayout>
  );
}
