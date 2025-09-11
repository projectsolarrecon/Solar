import React from "react";

/**
 * Table of Contents
 * - Scans headings inside `rootSelector` (defaults to <article>)
 * - Ensures each <h2> has an id (auto-generates h2-0, h2-1, … if missing)
 * - Highlights the heading currently in view
 */
export default function TOC({ rootSelector = "article" }: { rootSelector?: string }) {
  const [heads, setHeads] = React.useState<Array<{ id: string; text: string }>>([]);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const h2s = Array.from(root.querySelectorAll("h2"));
    const mapped = h2s.map((h, i) => {
      if (!h.id) h.id = `h2-${i}`;
      // Ensure header text is captured even if it contains nested spans/emojis
      const text = h.textContent?.trim() || `Section ${i + 1}`;
      return { id: h.id, text };
    });

    setHeads(mapped);

    // Observe each h2 to figure out which is in view
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the greatest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        // Trigger when heading reaches ~30% from top of viewport
        root: null,
        threshold: [0, 0.25, 0.5, 1],
        rootMargin: "0px 0px -70% 0px",
      }
    );

    h2s.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [rootSelector]);

  if (!heads.length) return null;

  return (
    <nav aria-label="On this page" className="border border-slate-200 rounded-xl p-4">
      <div className="text-sm font-semibold text-slate-700 mb-2">On this page</div>
      <ul className="space-y-2 text-sm">
        {heads.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`hover:underline ${
                active === h.id ? "text-blue-700 font-medium" : "text-slate-700"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
