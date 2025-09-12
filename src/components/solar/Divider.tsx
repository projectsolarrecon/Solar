import * as React from "react";

type DividerProps = {
  /** Optional text label centered on the divider */
  label?: string;
  /** Extra Tailwind classes */
  className?: string;
};

export default function Divider({ label, className = "" }: DividerProps) {
  if (!label) {
    return <hr className={`my-8 border-0 h-px bg-slate-200 ${className}`} />;
  }

  return (
    <div className={`my-8 ${className}`} role="separator" aria-label={label}>
      <div className="flex items-center gap-3">
        <div className="h-px bg-slate-200 flex-1" />
        <span className="text-slate-500 text-sm">{label}</span>
        <div className="h-px bg-slate-200 flex-1" />
      </div>
    </div>
  );
}
