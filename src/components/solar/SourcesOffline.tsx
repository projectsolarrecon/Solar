import React from "react";

export default function SourcesOffline({
  leftTitle = "🔍 Lookups & Contact",
  rightTitle = "📖 Evidence & Best Practices",
  childrenLeft,
  childrenRight,
  offlineChildren,
}: {
  leftTitle?: string;
  rightTitle?: string;
  childrenLeft: React.ReactNode;   // <li> items
  childrenRight: React.ReactNode;  // <li> items
  offlineChildren: React.ReactNode; // <li> items
}) {
  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-800 mb-3">{leftTitle}</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">{childrenLeft}</ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-3">{rightTitle}</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">{childrenRight}</ul>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-medium text-amber-800 mb-3">📚 Offline Alternatives</h4>
        <ul className="list-disc pl-5 text-amber-700 space-y-1 text-sm">{offlineChildren}</ul>
      </div>
    </div>
  );
}
