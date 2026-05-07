import React, { useState } from "react";

type Tone =
  | "info"
  | "warning"
  | "urgent"
  | "success"
  | "privacy"
  | "legal"
  | "reminder"
  | "neutral"
  | "research"
  | "family"
  | "reentry";

const toneStyles: Record<
  Tone,
  {
    wrapper: string;
    badge: string;
    title: string;
    body: string;
    button: string;
  }
> = {
  info: {
    wrapper: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
    title: "text-blue-950",
    body: "text-blue-900",
    button: "bg-blue-700 hover:bg-blue-800 text-white",
  },
  warning: {
    wrapper: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    title: "text-amber-950",
    body: "text-amber-900",
    button: "bg-amber-700 hover:bg-amber-800 text-white",
  },
  urgent: {
    wrapper: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-800",
    title: "text-red-950",
    body: "text-red-900",
    button: "bg-red-700 hover:bg-red-800 text-white",
  },
  success: {
    wrapper: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    title: "text-emerald-950",
    body: "text-emerald-900",
    button: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  privacy: {
    wrapper: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-800",
    title: "text-purple-950",
    body: "text-purple-900",
    button: "bg-purple-700 hover:bg-purple-800 text-white",
  },
  legal: {
    wrapper: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-800",
    title: "text-orange-950",
    body: "text-orange-900",
    button: "bg-orange-700 hover:bg-orange-800 text-white",
  },
  reminder: {
    wrapper: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-800",
    title: "text-yellow-950",
    body: "text-yellow-900",
    button: "bg-yellow-700 hover:bg-yellow-800 text-white",
  },
  neutral: {
    wrapper: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-800",
    title: "text-slate-950",
    body: "text-slate-800",
    button: "bg-slate-700 hover:bg-slate-800 text-white",
  },
  research: {
    wrapper: "bg-teal-50 border-teal-200",
    badge: "bg-teal-100 text-teal-800",
    title: "text-teal-950",
    body: "text-teal-900",
    button: "bg-teal-700 hover:bg-teal-800 text-white",
  },
  family: {
    wrapper: "bg-rose-50 border-rose-200",
    badge: "bg-rose-100 text-rose-800",
    title: "text-rose-950",
    body: "text-rose-900",
    button: "bg-rose-700 hover:bg-rose-800 text-white",
  },
  reentry: {
    wrapper: "bg-cyan-50 border-cyan-200",
    badge: "bg-cyan-100 text-cyan-800",
    title: "text-cyan-950",
    body: "text-cyan-900",
    button: "bg-cyan-700 hover:bg-cyan-800 text-white",
  },
};

export function QuickStartPanel({
  title = "Start Here",
  subtitle,
  urgentActions = [],
  nextActions = [],
  reminder,
  icon = "⚡",
}: {
  title?: string;
  subtitle?: string;
  urgentActions?: React.ReactNode[];
  nextActions?: React.ReactNode[];
  reminder?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden mb-8 avoid-break print:shadow-none">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/12 ring-1 ring-white/20 text-xl">
            <span aria-hidden="true">{icon}</span>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold leading-snug">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-sm sm:text-base text-slate-100/90 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-7 space-y-6">
        {urgentActions.length > 0 && (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
              Do first
            </h3>
            <ul className="space-y-3">
              {urgentActions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                    {index + 1}
                  </span>
                  <div className="text-slate-800 leading-relaxed">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {nextActions.length > 0 && (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
              Then do next
            </h3>
            <ul className="space-y-3">
              {nextActions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                    {index + 1}
                  </span>
                  <div className="text-slate-800 leading-relaxed">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {reminder && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <p className="font-semibold mb-1">Remember</p>
            <div className="leading-relaxed">{reminder}</div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Checklist({
  id,
  title,
  items,
  columns = 1,
}: {
  id: string;
  title?: string;
  items: Array<{
    id: string;
    label: React.ReactNode;
    helper?: React.ReactNode;
  }>;
  columns?: 1 | 2;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (itemId: string) => {
    const key = `${id}-${itemId}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 my-5">
      {title && (
        <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      )}

      <ul
        className={`grid gap-3 ${
          columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {items.map((item) => {
          const key = `${id}-${item.id}`;
          const isChecked = !!checked[key];

          return (
            <li key={item.id}>
              <label className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-slate-700 focus:ring-slate-500"
                />
                <span className="min-w-0">
                  <span
                    className={`block leading-relaxed ${
                      isChecked
                        ? "line-through text-slate-500"
                        : "text-slate-800"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.helper && (
                    <span className="mt-1 block text-sm text-slate-500 leading-relaxed">
                      {item.helper}
                    </span>
                  )}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ScriptBox({
  title,
  context,
  script,
  tone = "neutral",
  buttonLabel = "Copy script",
}: {
  title: string;
  context?: React.ReactNode;
  script: string;
  tone?: Tone;
  buttonLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const styles = toneStyles[tone] ?? toneStyles.neutral;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      window.alert("Copy failed. You can still press and hold the script text to copy it manually.");
    }
  };

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 my-5 ${styles.wrapper}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className={`font-semibold ${styles.title}`}>{title}</p>
          {context && (
            <div className={`mt-1 text-sm leading-relaxed ${styles.body}`}>
              {context}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={copy}
          className={`no-print shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${styles.button}`}
        >
          {copied ? "Copied!" : buttonLabel}
        </button>
      </div>

      <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-white/80 border border-white/70 p-4 text-sm leading-relaxed text-slate-900 font-sans">
        {script}
      </pre>
    </div>
  );
}

export function OfflineOptions({
  title = "Offline options",
  items,
  note,
  icon = "📵",
}: {
  title?: string;
  items: React.ReactNode[];
  note?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4 sm:p-5 my-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-800">
          <span aria-hidden="true">{icon}</span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-orange-950">{title}</p>
          {note && (
            <div className="mt-1 text-sm leading-relaxed text-orange-900">
              {note}
            </div>
          )}
          <ul className="mt-3 space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-orange-900">
                <span aria-hidden="true" className="mt-0.5">
                  •
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function DocumentPacket({
  title = "Documents to save",
  intro,
  items,
  categories,
}: {
  title?: string;
  intro?: React.ReactNode;
  items?: React.ReactNode[];
  categories?: Array<{
    title: string;
    items: React.ReactNode[];
  }>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5 my-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
          <span aria-hidden="true">🗂️</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-slate-950">{title}</p>
          {intro && (
            <div className="mt-1 text-sm leading-relaxed text-slate-700">
              {intro}
            </div>
          )}

          {items && (
            <ul className="mt-4 space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-800">
                  <span aria-hidden="true" className="mt-0.5 text-slate-500">
                    ☐
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {categories && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="font-semibold text-slate-900 mb-2">
                    {category.title}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span aria-hidden="true" className="mt-0.5">
                          ☐
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function VerifyBeforeActing({
  title = "Verify before acting",
  whoToAsk,
  whatToAsk,
  whatToSave,
}: {
  title?: string;
  whoToAsk: React.ReactNode;
  whatToAsk: React.ReactNode;
  whatToSave?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 sm:p-5 my-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-xl text-sky-800">
          <span aria-hidden="true">🔎</span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sky-950">{title}</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 border border-sky-100 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
                Who to ask
              </p>
              <div className="mt-1 text-sm leading-relaxed text-sky-900">
                {whoToAsk}
              </div>
            </div>
            <div className="rounded-xl bg-white/80 border border-sky-100 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
                What to ask
              </p>
              <div className="mt-1 text-sm leading-relaxed text-sky-900">
                {whatToAsk}
              </div>
            </div>
            {whatToSave && (
              <div className="rounded-xl bg-white/80 border border-sky-100 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
                  What to save
                </p>
                <div className="mt-1 text-sm leading-relaxed text-sky-900">
                  {whatToSave}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CommonMistakes({
  title = "Common mistakes",
  mistakes,
}: {
  title?: string;
  mistakes: Array<{
    mistake: React.ReactNode;
    whyItMatters?: React.ReactNode;
    betterMove?: React.ReactNode;
  }>;
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 sm:p-5 my-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl text-red-800">
          <span aria-hidden="true">🚩</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-red-950">{title}</p>
          <div className="mt-4 space-y-4">
            {mistakes.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/80 border border-red-100 p-4"
              >
                <p className="font-semibold text-red-950">{item.mistake}</p>
                {item.whyItMatters && (
                  <div className="mt-2 text-sm leading-relaxed text-red-900">
                    <span className="font-semibold">Why it matters: </span>
                    {item.whyItMatters}
                  </div>
                )}
                {item.betterMove && (
                  <div className="mt-2 text-sm leading-relaxed text-red-900">
                    <span className="font-semibold">Better move: </span>
                    {item.betterMove}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}