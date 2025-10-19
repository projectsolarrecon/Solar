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

/* ---------- Markdown helper (safe for trusted text) ---------- */
function mdToHtml(input = ""): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let out = escape(input);
  // links
  out = out.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_m, label, url) =>
      `<a href="${url}" target="_blank" rel="noopener" class="underline hover:text-amber-700">${escape(
        label
      )}</a>`
  );
  // bold and italic
  out = out
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

/**
 * SOLAR HighlightsCard — amber theme, bold/italic/links supported
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
    <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-sm p-4 sm:p-5 mt-4 mb-6 print:bg-white print:text-black print:shadow-none">
      <h2 className="text-lg font-semibold mb-3 text-slate-900">Key Highlights</h2>
      <ul className="space-y-2">
        {items.map(({ label, icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="mt-1 text-amber-700">{icon}</div>
            <div
              className="text-sm leading-snug text-slate-800"
              dangerouslySetInnerHTML={{
                __html: `<span class="font-medium text-slate-900">${label}:</span> ${mdToHtml(text!)}`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightsCard;