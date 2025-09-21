import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";

// ⬇️ Bypass barrel: import concrete component files directly
import SectionBand from "../../components/solar/SectionBand";
import SectionCard from "../../components/solar/SectionCard";
import Callout from "../../components/solar/Callout";
import Checklist from "../../components/solar/Checklist";
import SourcesOffline from "../../components/solar/SourcesOffline";
import TOC from "../../components/solar/TOC";
import ShareBar from "../../components/solar/ShareBar";

const linkCls = "text-blue-700 underline underline-offset-2 hover:text-blue-900";

export default function PolicyAlternativesResidencyRestrictions(): JSX.Element {
  return (
    <GuideLayout
      title="Policy Alternatives to Residency Restrictions"
      description="Evidence-based strategies for safety and housing without exclusion zones."
      keywords="residency restrictions, housing first, policy reform, reentry, public safety"
      date="Sep 20, 2025"
      readTime="15 min"
      badge="📘 RESOURCE GUIDE"
      lede="Residency restrictions don’t improve safety but do increase housing instability. This guide outlines better policy tools grounded in evidence."
      showTOC={true}
    >
      <div className="mb-6">
        <TOC />
      </div>

      <SectionBand title="Quick Start" subtitle="60 seconds to act" emblem={1} />
      <SectionCard>
        <p>
          Advocate for Housing First, individualized risk assessment, and repeal or narrowing of blanket exclusion zones.
          Pair with targeted supervision and services.
        </p>
        <Callout variant="reminder" title="Pro Tip" icon="💡">
          Focus on evidence: restrictions don’t reduce crime, but stable housing does.
        </Callout>
      </SectionCard>

      <SectionBand title="Why Restrictions Fail" emblem={2} />
      <SectionCard>
        <p>
          Research from the{" "}
          <a className={linkCls} href="https://www.ojp.gov/pdffiles1/nij/222759.pdf" target="_blank" rel="noopener">
            National Institute of Justice
          </a>{" "}
          shows no safety benefits from residency bans. Instead, they create homelessness and isolation, both linked to higher recidivism.
        </p>
        <Callout variant="warning" title="Risk" icon="⚠️">
          Broad exclusion zones can result in entire towns where returning citizens cannot legally live.
        </Callout>
      </SectionCard>

      <SectionBand title="Policy Alternatives" emblem={3} />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>Housing First programs that prioritize immediate, stable housing</li>
          <li>Individualized, evidence-based risk assessments</li>
          <li>Community-based reentry support and supervision</li>
          <li>Investment in affordable housing and anti-discrimination protections</li>
        </ul>
        <Callout variant="success" title="Evidence-Based" icon="📊">
          Cities using housing-first strategies report improved stability and lower re-offense rates compared to those with restrictive zoning.
        </Callout>
      </SectionCard>

      <SectionBand title="Action Steps" emblem={4} />
      <SectionCard>
        <Checklist storageKey="policy-alternatives-residency">
          <li>Review your state’s residency restriction laws</li>
          <li>Map legal vs. restricted housing zones; quantify unit loss</li>
          <li>Engage local officials with NIJ/DOJ evidence</li>
          <li>Partner with reentry coalitions and housing providers</li>
          <li>Advance repeal/reform and fund supportive housing</li>
        </Checklist>
      </SectionCard>

      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            National Institute of Justice —{" "}
            <a className={linkCls} href="https://www.ojp.gov/pdffiles1/nij/222759.pdf" target="_blank" rel="noopener">
              https://www.ojp.gov/pdffiles1/nij/222759.pdf
            </a>
          </li>
          <li>
            Prison Policy Initiative —{" "}
            <a className={linkCls} href="https://www.prisonpolicy.org/reports/housing.html" target="_blank" rel="noopener">
              https://www.prisonpolicy.org/reports/housing.html
            </a>
          </li>
          <li>
            U.S. Department of Justice, SMART Office —{" "}
            <a className={linkCls} href="https://smart.ojp.gov/" target="_blank" rel="noopener">
              https://smart.ojp.gov/
            </a>
          </li>
        </ul>
      </SectionCard>

      <SectionBand title="Related Reading" emblem="🔗" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            <Link className={linkCls} to="/blog/residency-restrictions-housing">
              How Residency Restrictions Undermine Housing Stability (Blog)
            </Link>
          </li>
          <li>
            <Link className={linkCls} to="/resources/housing-first">Housing First (Resource Guide)</Link>
          </li>
          <li>
            <Link className={linkCls} to="/blog/reentry-barriers">Breaking Down Reentry Barriers (Blog)</Link>
          </li>
        </ul>
      </SectionCard>

      <div className="mt-10">
        <ShareBar />
      </div>
    </GuideLayout>
  );
}
