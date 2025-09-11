import React from "react";

export default function SectionBand({
  title,
  subtitle,
  emblem, // number, emoji, or icon char
}: {
  title: string;
  subtitle?: string;
  emblem?: string | number;
}) {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-6 rounded-t-lg">
      <div className="flex items-center">
        {emblem !== undefined && (
          <div className="w-12 h-12 bg-white text-slate-700 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
            {emblem}
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-slate-200">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
