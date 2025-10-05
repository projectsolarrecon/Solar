import React from "react";

export default function StateRegistryHub() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800">
        State Registry Rules – Hub
      </h1>
      <p className="mt-4 text-slate-700">
        This will be the nationwide overview of registry requirements and the
        entry point to each state page. (Tabs, map, and search will go here later.)
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700">
        <li>Federal framework (SORNA, Adam Walsh, IML, etc.)</li>
        <li>Interactive US map or A–Z list</li>
        <li>Search / Compare tool</li>
      </ul>
    </div>
  );
}