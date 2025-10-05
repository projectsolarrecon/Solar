import React from "react";

export default function NYRegistryPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800">New York Registry Rules</h1>
      <p className="mt-4 text-slate-700">
        This page will hold New York’s registry requirements, restrictions, and compliance info
        in our standardized format.
      </p>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <strong>At a Glance:</strong>  
        <ul className="list-disc pl-6">
          <li>Who must register</li>
          <li>Initial deadlines</li>
          <li>Verification cadence</li>
        </ul>
      </div>

      <p className="mt-6 text-slate-700">
        More sections will follow (deadlines, restrictions, relief paths, resources…)
      </p>
    </div>
  );
}