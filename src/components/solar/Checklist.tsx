import React from "react";

type Item = { id: string; label: React.ReactNode };

export default function Checklist({ id, items }: { id: string; items: Item[] }) {
  const key = `checklist:${id}`;
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    try { const raw = localStorage.getItem(key); if (raw) setChecked(JSON.parse(raw)); } catch {}
  }, [key]);

  const toggle = (itemId: string) => {
    setChecked(prev => {
      const next = { ...prev, [itemId]: !prev[itemId] };
      try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return (
    <ul className="space-y-3 text-gray-700">
      {items.map(item => (
        <li key={item.id} className="flex items-start">
          <input
            type="checkbox"
            id={`${id}-${item.id}`}
            checked={!!checked[item.id]}
            onChange={() => toggle(item.id)}
            className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor={`${id}-${item.id}`}
            className={`cursor-pointer ${checked[item.id] ? "line-through text-gray-500" : ""}`}
          >
            {item.label}
          </label>
        </li>
      ))}
    </ul>
  );
}
