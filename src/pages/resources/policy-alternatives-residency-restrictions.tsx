import React from "react";
import GuideLayout from "../../components/layouts/GuideLayout";

// Direct imports from concrete files (no barrel)
import SectionBand from "../../components/solar/SectionBand";
import SectionCard from "../../components/solar/SectionCard";
import Callout from "../../components/solar/Callout";
import Checklist from "../../components/solar/Checklist";
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
      lede="Residency restrictions don’t improve safety but do increase housing instability."
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
        <Checklist storageKey="policy-alternatives-residency">
          <li>Review your state’s residency restriction laws</li>
          <li>Map legal vs. restricted housing zones; quantify unit loss</li>
          <li>Engage local officials with NIJ/DOJ evidence</li>
          <li>Partner with reentry coalitions and housing providers</li>
          <li>Advance repeal/reform and fund supportive housing</li>
        </Checklist>
      </SectionCard>

      <div className="mt-10">
        <ShareBar />
      </div>
    </GuideLayout>
  );
}
