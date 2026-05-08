import React from "react";

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
    icon: string;
    title: string;
    body: string;
  }
> = {
  info: {
    wrapper: "bg-blue-50 border-blue-200",
    icon: "bg-blue-100 text-blue-700",
    title: "text-blue-950",
    body: "text-blue-900",
  },
  warning: {
    wrapper: "bg-amber-50 border-amber-200",
    icon: "bg-amber-100 text-amber-700",
    title: "text-amber-950",
    body: "text-amber-900",
  },
  urgent: {
    wrapper: "bg-red-50 border-red-200",
    icon: "bg-red-100 text-red-700",
    title: "text-red-950",
    body: "text-red-900",
  },
  success: {
    wrapper: "bg-emerald-50 border-emerald-200",
    icon: "bg-emerald-100 text-emerald-700",
    title: "text-emerald-950",
    body: "text-emerald-900",
  },
  privacy: {
    wrapper: "bg-purple-50 border-purple-200",
    icon: "bg-purple-100 text-purple-700",
    title: "text-purple-950",
    body: "text-purple-900",
  },
  legal: {
    wrapper: "bg-orange-50 border-orange-200",
    icon: "bg-orange-100 text-orange-700",
    title: "text-orange-950",
    body: "text-orange-900",
  },
  reminder: {
    wrapper: "bg-yellow-50 border-yellow-200",
    icon: "bg-yellow-100 text-yellow-700",
    title: "text-yellow-950",
    body: "text-yellow-900",
  },
  neutral: {
    wrapper: "bg-slate-50 border-slate-200",
    icon: "bg-slate-100 text-slate-700",
    title: "text-slate-950",
    body: "text-slate-800",
  },
  research: {
    wrapper: "bg-teal-50 border-teal-200",
    icon: "bg-teal-100 text-teal-700",
    title: "text-teal-950",
    body: "text-teal-900",
  },
  family: {
    wrapper: "bg-rose-50 border-rose-200",
    icon: "bg-rose-100 text-rose-700",
    title: "text-rose-950",
    body: "text-rose-900",
  },
  reentry: {
    wrapper: "bg-cyan-50 border-cyan-200",
    icon: "bg-cyan-100 text-cyan-700",
    title: "text-cyan-950",
    body: "text-cyan-900",
  },
};

export function SectionHeader({
  title,
  subtitle,
  icon,
  number,
  id,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  number?: string | number;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-4">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white shadow-md">
        <div className="px-5 py-5 sm:px-6 flex items-start gap-4">
          {(icon || number !== undefined) && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 text-xl font-bold leading-none">
              <span aria-hidden="true">{number ?? icon}</span>
            </div>
          )}

          <div className="min-w-0">
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
    </div>
  );
}

export function SectionCard({
  children,
  className = "",
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <section
      className={`bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mb-8 avoid-break print:shadow-none ${className}`}
    >
      <div className={padded ? "p-5 sm:p-6 md:p-7 space-y-5" : ""}>
        {children}
      </div>
    </section>
  );
}

export function GuideProse({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-5 text-[15px] sm:text-base leading-relaxed text-slate-700 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul]:pl-6 [&>ol]:pl-6 [&>ul]:list-disc [&>ol]:list-decimal [&>li]:leading-relaxed ${className}`}
    >
      {children}
    </div>
  );
}

export function Callout({
  title,
  children,
  tone = "info",
  icon,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  tone?: Tone;
  icon?: React.ReactNode;
  className?: string;
}) {
  const styles = toneStyles[tone] ?? toneStyles.info;

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 my-5 ${styles.wrapper} ${className}`}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg ${styles.icon}`}
          >
            <span aria-hidden="true">{icon}</span>
          </div>
        )}

        <div className="min-w-0">
          {title && (
            <p className={`font-semibold leading-snug mb-1 ${styles.title}`}>
              {title}
            </p>
          )}
          <div className={`text-sm sm:text-base leading-relaxed ${styles.body}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GuideIntro({
  title = "Start Here",
  children,
  icon = "🧭",
}: {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <SectionCard>
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
          <span aria-hidden="true">{icon}</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {title}
          </h2>
          <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

export function PullQuoteBlock({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-8 rounded-2xl border-l-4 border-slate-700 bg-slate-50 px-5 py-5 sm:px-6 shadow-sm">
      <blockquote className="text-lg sm:text-xl font-semibold leading-relaxed text-slate-900">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-sm text-slate-600">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}

export function SoftDivider({ label }: { label?: string }) {
  if (!label) {
    return (
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    );
  }

  return (
    <div className="my-8 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200" />
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200" />
    </div>
  );
}
