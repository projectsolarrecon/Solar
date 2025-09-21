import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "../../components/layouts/GuideLayout";

// Direct imports keep things simple/stable
import SectionBand from "../../components/solar/SectionBand";
import SectionCard from "../../components/solar/SectionCard";
import Callout from "../../components/solar/Callout";
import Checklist from "../../components/solar/Checklist";

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
      showTOC={false}
    >
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

      <SectionBand title="Action Steps" emblem={2} />
      <SectionCard>
        <Checklist
          id="policy-alternatives-residency"
          items={[
            { id: "review-laws", label: <>Review your state’s residency restriction laws</> },
            { id: "map-zones", label: <>Map legal vs. restricted housing zones; quantify unit loss</> },
            { id: "engage-officials", label: <>Engage local officials with NIJ/DOJ evidence</> },
            { id: "partner-reentry", label: <>Partner with reentry coalitions and housing providers</> },
            { id: "advance-reform", label: <>Advance repeal/reform and fund supportive housing</> },
          ]}
        />
      </SectionCard>

      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            National Institute of Justice —{" "}
            <a
              className={linkCls}
              href="https://www.ojp.gov/pdffiles1/nij/222759.pdf"
              target="_blank"
              rel="noopener"
            >
              https://www.ojp.gov/pdffiles1/nij/222759.pdf
            </a>
          </li>
          <li>
            Prison Policy Initiative —{" "}
            <a
              className={linkCls}
              href="https://www.prisonpolicy.org/reports/housing.html"
              target="_blank"
              rel="noopener"
            >
              https://www.prisonpolicy.org/reports/housing.html
            </a>
          </li>
          <li>
            U.S. Department of Justice, SMART Office —{" "}
            <a
              className={linkCls}
              href="https://smart.ojp.gov/"
              target="_blank"
              rel="noopener"
            >
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
    </GuideLayout>
  );
}
