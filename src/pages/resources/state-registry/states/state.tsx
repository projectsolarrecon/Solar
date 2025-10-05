import React from "react";
import { useParams, Navigate } from "react-router-dom";
import StateRegistryTemplate, { StateRegistryData } from "../../../../components/solar/StateRegistryTemplate";

// Glob-import every JSON in this folder at build time (Vite)
const files = import.meta.glob("/src/data/state-registry/*.json", { eager: true });

function getDataFor(code: string): StateRegistryData | null {
  // Expect files named like /src/data/state-registry/ny.json, ca.json, etc.
  const key = Object.keys(files).find((k) => k.endsWith(`/${code.toLowerCase()}.json`));
  if (!key) return null;
  // Vite eager JSON modules expose the default export
  // @ts-ignore
  return (files[key]?.default || files[key]) as StateRegistryData;
}

export default function StateRegistryStatePage() {
  const params = useParams();
  const code = (params.state || "").toLowerCase();
  const data = getDataFor(code);

  if (!code || !data) {
    // If no matching JSON, kick back to hub (or render a friendly 404)
    return <Navigate to="/resources/state-registry" replace />;
  }

  return <StateRegistryTemplate data={data} />;
}