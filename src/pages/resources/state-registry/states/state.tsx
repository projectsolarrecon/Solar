import React from "react";
import { useParams } from "react-router-dom";
import GuideLayout from "../../../../components/layouts/GuideLayout";
import StateRegistryTemplate, { StateRegistryData } from "../../../../components/solar/StateRegistryTemplate";

// ✅ Only pick up files like "fl.ts" or "fl.json" — excludes schema.ts automatically
const modules = import.meta.glob("../../../../data/state-registry/[a-z][a-z].{ts,json}", { eager: true });

export default function StateRegistryStatePage(): JSX.Element {
  const params = useParams();
  const code = (params["*"] || "").split("/").pop()?.toLowerCase() || "";

  // Try to match filename {code}.ts or {code}.json
  const match = Object.entries(modules).find(([p]) =>
    p.toLowerCase().endsWith(`/data/state-registry/${code}.ts`) ||
    p.toLowerCase().endsWith(`/data/state-registry/${code}.json`)
  );

  if (!match) {
    return (
      <GuideLayout
        title="State Guide — Coming Soon"
        description="This state guide is not yet available."
        keywords="registry, coming soon"
        date=""
        readTime=""
        badge="⏳ COMING SOON"
        lede="We’re working on this state guide. Check back shortly."
        showTOC={false}
      >
        <p className="text-slate-700">If you need help now, visit the National Hub for federal rules and resources.</p>
      </GuideLayout>
    );
  }

  const mod = match[1] as any;
  const data = (mod.default ?? mod) as StateRegistryData;

  return (
    <GuideLayout
      title={`${data.state} — Registry Rules`}
      description={`Plain-language guide to ${data.state} sex offense registration duties with official citations.`}
      keywords={`${data.state} registry, SORNA, registration deadlines, verification, restrictions`}
      date={new Date(data.lastReviewedUTC || Date.now()).toLocaleDateString()}
      readTime=""
      badge="📍 STATE GUIDE"
      lede={`Official-source summary for ${data.state}.`}
      showTOC={true}
    >
      <StateRegistryTemplate data={data} />
    </GuideLayout>
  );
}