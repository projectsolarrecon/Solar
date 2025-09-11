import React from "react";

const CALLOUT_STYLES: Record<string, string> = {
  info: "bg-blue-50 ring-blue-200 text-blue-900",
  legal: "bg-orange-50 ring-orange-200 text-orange-900",
  urgent: "bg-red-50 ring-red-200 text-red-900",
  privacy: "bg-purple-50 ring-purple-200 text-purple-900",
  reminder: "bg-yellow-50 ring-yellow-200 text-yellow-900",
  research: "bg-teal-50 ring-teal-200 text-teal-900",
  policy: "bg-pink-50 ring-pink-200 text-pink-900",
  success: "bg-emerald-50 ring-emerald-200 text-emerald-900",
  warning: "bg-amber-50 ring-amber-200 text-amber-900",
  neutral: "bg-slate-50 ring-slate-200 text-slate-900",
};

export default function Callout({
  variant = "info",
  title,
  icon,
  children,
}: {
  variant?: keyof typeof CALLOUT_STYLES;
  title?: string;
  icon?: string;
  children: React.ReactNode;
}) {
  const styles = CALLOUT_STYLES[variant] ?? CALLOUT_STYLES.info;
  return (
    <div className={`my-6 rounded-xl ring-1 p-4 md:p-5 ${styles}`}>
      {(title || icon) && (
        <div className="font-semibold mb-1 flex items-center gap-2">
          {icon && <span aria-hidden>{icon}</span>}
          {title}
        </div>
      )}
      <div className="prose prose-slate max-w-none">{children}</div>
    </div>
  );
}
