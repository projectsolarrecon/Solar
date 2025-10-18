import React from "react";
import { Info, MapPin, Clock, Layers } from "lucide-react";

interface HighlightsProps {
  highlights?: {
    residency?: string;
    presence?: string;
    duration?: string;
    tiering?: string;
  };
}

/**
 * SOLAR HighlightsCard
 * Displays short summary lines at top of each state registry page.
 * (residency / presence / duration / tiering)
 */
const HighlightsCard: React.FC<HighlightsProps> = ({ highlights }) => {
  if (!highlights) return null;

  const { residency, presence, duration, tiering } = highlights;

  const items = [
    { label: "Residency Restrictions", icon: <MapPin className="w-4 h-4" />, text: residency },
    { label: "Presence / Proximity Rules", icon: <Info className="w-4 h-4" />, text: presence },
    { label: "Duration of Registration", icon: <Clock className="w-4 h-4" />, text: duration },
    { label: "Tiering / Level System", icon: <Layers className="w-4 h-4" />, text: tiering },
  ].filter((i) => i.text);

  if (items.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white rounded-2xl shadow-md p-4 sm:p-6 mt-4 mb-6 print:bg-none print:text-black print:shadow-none">
      <h2 className="text-lg font-semibold mb-3 text-white print:text-slate-900">
        Key Highlights
      </h2>
      <ul className="space-y-3">
        {items.map(({ label, icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="mt-1 text-slate-100 print:text-slate-900">{icon}</div>
            <div className="text-sm leading-snug">
              <span className="font-medium">{label}: </span>
              <span
                className="text-slate-100 print:text-slate-900"
                dangerouslySetInnerHTML={{ __html: text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline">$1</a>') }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsCard;