import React from "react";
import { useParams } from "react-router-dom";
import GuideLayout from "../../../../components/layouts/GuideLayout";
import StateRegistryTemplate, { StateRegistryData } from "../../../../components/solar/StateRegistryTemplate";

// Only pick up real state data files like "fl.ts" or "fl.json" — excludes schema.ts
const modules = import.meta.glob("../../../../data/state-registry/[a-z][a-z].{ts,json}", { eager: true });

// Build a quick index: "fl" -> module
const STATE_INDEX: Record<string, any> = {};
Object.entries(modules).forEach(([path, mod]) => {
  const filename = path.split("/").pop() || "";
  const code = filename.replace(/\.(ts|json)$/i, "").toLowerCase();
  STATE_INDEX[code] = mod as any;
});

// Helpful console in dev
if (import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.log("[StateRegistry] available codes:", Object.keys(STATE_INDEX));
}

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

  // Your route uses :state — still support :code and wildcard just in case
  const rawParam =
    (params as any)?.state ??
    (params as any)?.code ??
    (params as any)?.["*"] ??
    "";

  const code = String(rawParam).split("/").pop()?.toLowerCase() || "";

  if (!code || code.length !== 2) {
    return <NotFound message="Missing or invalid state code in the URL." />;
  }

  const mod = STATE_INDEX[code];
  if (!mod) {
    return <NotFound message={`No data file found for code "${code}".`} />;
  }

  const data = (mod.default ?? mod) as Partial<StateRegistryData>;

  // Defensive checks to avoid white screens
  if (!data || typeof data !== "object") {
    return <NotFound message={`Data file for "${code}" did not export an object.`} />;
  }
  if (!data.state) {
    return (
      <NotFound message={`Data for "${code}" is missing the "state" field. Ensure the file exports "export default { state: '...', ... }".`} />
    );
  }

  let reviewed = "";
  try {
    reviewed = new Date(data.lastReviewedUTC || Date.now()).toLocaleDateString();
  } catch {
    reviewed = "";
  }

  return (
    <GuideLayout
      title={`${data.state} — Registry Rules`}
      description={`Plain-language guide to ${data.state} sex offense registration duties with official citations.`}
      keywords={`${data.state} registry, SORNA, registration deadlines, verification, restrictions`}
      date={reviewed}
      readTime=""
      badge="📍 STATE GUIDE"
      lede={`Official-source summary for ${data.state}.`}
      showTOC={true}
    >
      {/* If anything throws inside, React will at least show a stack in dev; the data checks above avoid most issues */}
      <StateRegistryTemplate data={data as StateRegistryData} />
    </GuideLayout>
  );
}