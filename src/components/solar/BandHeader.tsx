import React from "react";

export default function BandHeader({
  title,
  icon,
}: {
  title: string;
  icon?: string;
}) {
  return (
    <div className="mt-10 mb-4 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 flex items-center gap-2 shadow-sm">
        {icon && <span aria-hidden>{icon}</span>}
        <span className="font-semibold tracking-tight">{title}</span>
      </div>
    </div>
  );
}
