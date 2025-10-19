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

  // Amber, dark text, compact; links rendered from Markdown
  const renderLinks = (s: string) =>
    s.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline">$1</a>');

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-sm p-4 sm:p-5 mb-6 print:bg-white">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-slate-900">
        Key Highlights
      </h2>
      <ul className="space-y-2.5">
        {items.map(({ label, icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="mt-0.5 text-amber-700">{icon}</div>
            <div className="text-sm leading-relaxed text-slate-800">
              <span className="font-semibold">{label}:</span>{" "}
              <span
                dangerouslySetInnerHTML={{ __html: renderLinks(text!) }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsCard;