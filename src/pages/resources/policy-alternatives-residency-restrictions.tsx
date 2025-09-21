import React from "react";
import GuideLayout from "../../components/layouts/GuideLayout";

// direct imports (no barrel)
import SectionBand from "../../components/solar/SectionBand";
import SectionCard from "../../components/solar/SectionCard";
import Callout from "../../components/solar/Callout";

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
        <ul className="list-disc pl-6">
          <li>Review your state’s residency restriction laws</li>
          <li>Map legal vs. restricted housing zones; quantify unit loss</li>
          <li>Engage local officials with NIJ/DOJ evidence</li>
          <li>Partner with reentry coalitions and housing providers</li>
          <li>Advance repeal/reform and fund supportive housing</li>
        </ul>
      </SectionCard>

      <SectionBand title="Data Sources" emblem="📚" />
      <SectionCard>
        <ul className="list-disc pl-6">
          <li>
            National Institute of Justice —{" "}
            <a
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
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
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
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
              className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              href="https://smart.ojp.gov/"
              target="_blank"
              rel="noopener"
            >
              https://smart.ojp.gov/
            </a>
          </li>
        </ul>
      </SectionCard>
    </GuideLayout>
  );
}
