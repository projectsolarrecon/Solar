import React from "react";
import GuideLayout from "../../components/layouts/GuideLayout";
import SectionBand from "../../components/solar/SectionBand";
import SectionCard from "../../components/solar/SectionCard";

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
        <div>Card Works ✅</div>
      </SectionCard>
    </GuideLayout>
  );
}
