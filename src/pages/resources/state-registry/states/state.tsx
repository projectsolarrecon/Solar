import React from "react";
import { useParams } from "react-router-dom";
import GuideLayout from "../../../../components/layouts/GuideLayout";
import StateRegistryTemplate, { StateRegistryData } from "../../../../components/solar/StateRegistryTemplate";
import StateRegistryTemplateV2Preview from "../../../../components/solar/StateRegistryTemplateV2Preview";
import HighlightsCard from "../../../../components/solar/HighlightsCard";

// ✅ Use a root-absolute glob so Vite always finds your files in any env
//    This will include ONLY two-letter codes (e.g., "sc.ts" or "sc.json") and skip schema.ts
const modules = import.meta.glob("/src/data/state-registry/[a-z][a-z].{ts,json}", { eager: true });

// Build an index like { sc: module, fl: module, ... }
const STATE_INDEX: Record<string, any> = {};
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split("/").pop() || "";
  const code = filename.replace(/\.(ts|json)$/i, "").toLowerCase();
  STATE_INDEX[code] = mod as any;
}

const V2_PREVIEW_ALIASES: Record<string, string> = {
  ss: "ss",
  xf: "fl",
  xo: "or",
};

function NotFound({ message }: { message: string }) {
  return (
    <GuideLayout
      title="State Guide — Not Found"
      description="This state guide is not yet available or failed to load."
      keywords="registry, state not found"
      date=""
      readTime=""
      badge="⏳ COMING SOON"
      lede="We’re working on this state guide. Check back shortly."
      showTOC={false}
    >
      <div className="text-slate-700 space-y-3">
        <p>{message}</p>
        <p className="text-sm text-slate-500">
          If this persists, please let us know which state you tried to open.
        </p>
      </div>
    </GuideLayout>
  );
}

export default function StateRegistryStatePage(): JSX.Element {
  const params = useParams();

  // Your router uses :state — still support :code and wildcard for safety
  const rawParam =
    (params as any)?.state ??
    (params as any)?.code ??
    (params as any)?.["*"] ??
    "";

  const code = String(rawParam).split("/").pop()?.toLowerCase() || "";

  if (!code || code.length !== 2) {
    return <NotFound message="Missing or invalid state code in the URL." />;
  }

  const dataCode = V2_PREVIEW_ALIASES[code] ?? code;
  const isV2Preview = Boolean(V2_PREVIEW_ALIASES[code]);

  const mod = STATE_INDEX[dataCode];
  if (!mod) {
    // Helpful: shows what the app sees at runtime
    const seen = Object.keys(STATE_INDEX).sort().join(", ");
    return <NotFound message={`No data file found for "${dataCode}". Seen codes: ${seen || "(none)"}.`} />;
  }

  const data = (mod.default ?? mod) as Partial<StateRegistryData>;
  if (!data || typeof data !== "object" || !data.state) {
    return <NotFound message={`Data for "${dataCode}" failed to load or is missing the "state" field.`} />;
  }

  let reviewed = "";
  try { reviewed = new Date(data.lastReviewedUTC || Date.now()).toLocaleDateString(); } catch {}

  const titlePrefix = isV2Preview && code !== dataCode ? `${data.state} — V2 Preview` : `${data.state} — Registry Rules`;

  return (
    <GuideLayout
      title={titlePrefix}
      description={`Plain-language guide to ${data.state} sex offense registration duties with official citations.`}
      keywords={`${data.state} registry, SORNA, registration deadlines, verification, restrictions`}
      date={reviewed}
      readTime=""
      badge={isV2Preview ? "🧪 V2 PREVIEW" : "📍 STATE GUIDE"}
      lede={isV2Preview ? `Preview of the new reader-first scaffold using ${data.state} data.` : `Official-source summary for ${data.state}.`}
      showTOC={!isV2Preview}
    >
      {isV2Preview ? (
        <StateRegistryTemplateV2Preview data={data as StateRegistryData} />
      ) : (
        <>
          {/* ✅ Top-of-page highlights (auto-hides if the state file has no `highlights`) */}
          <HighlightsCard highlights={(data as any).highlights} />
          <StateRegistryTemplate data={data as StateRegistryData} />
        </>
      )}
    </GuideLayout>
  );
}