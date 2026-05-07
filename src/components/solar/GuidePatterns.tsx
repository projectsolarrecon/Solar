import React from "react";
import { Link } from "react-router-dom";

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
    card: string;
    icon: string;
    title: string;
    body: string;
    accent: string;
  }
> = {
  info: {
    card: "bg-blue-50 border-blue-200",
    icon: "bg-blue-100 text-blue-800",
    title: "text-blue-950",
    body: "text-blue-900",
    accent: "border-blue-400",
  },
  warning: {
    card: "bg-amber-50 border-amber-200",
    icon: "bg-amber-100 text-amber-800",
    title: "text-amber-950",
    body: "text-amber-900",
    accent: "border-amber-400",
  },
  urgent: {
    card: "bg-red-50 border-red-200",
    icon: "bg-red-100 text-red-800",
    title: "text-red-950",
    body: "text-red-900",
    accent: "border-red-400",
  },
  success: {
    card: "bg-emerald-50 border-emerald-200",
    icon: "bg-emerald-100 text-emerald-800",
    title: "text-emerald-950",
    body: "text-emerald-900",
    accent: "border-emerald-400",
  },
  privacy: {
    card: "bg-purple-50 border-purple-200",
    icon: "bg-purple-100 text-purple-800",
    title: "text-purple-950",
    body: "text-purple-900",
    accent: "border-purple-400",
  },
  legal: {
    card: "bg-orange-50 border-orange-200",
    icon: "bg-orange-100 text-orange-800",
    title: "text-orange-950",
    body: "text-orange-900",
    accent: "border-orange-400",
  },
  reminder: {
    card: "bg-yellow-50 border-yellow-200",
    icon: "bg-yellow-100 text-yellow-800",
    title: "text-yellow-950",
    body: "text-yellow-900",
    accent: "border-yellow-400",
  },
  neutral: {
    card: "bg-slate-50 border-slate-200",
    icon: "bg-slate-100 text-slate-800",
    title: "text-slate-950",
    body: "text-slate-800",
    accent: "border-slate-400",
  },
  research: {
    card: "bg-teal-50 border-teal-200",
    icon: "bg-teal-100 text-teal-800",
    title: "text-teal-950",
    body: "text-teal-900",
    accent: "border-teal-400",
  },
  family: {
    card: "bg-rose-50 border-rose-200",
    icon: "bg-rose-100 text-rose-800",
    title: "text-rose-950",
    body: "text-rose-900",
    accent: "border-rose-400",
  },
  reentry: {
    card: "bg-cyan-50 border-cyan-200",
    icon: "bg-cyan-100 text-cyan-800",
    title: "text-cyan-950",
    body: "text-cyan-900",
    accent: "border-cyan-400",
  },
};

export function OverviewCards({
  cards,
  columns = 3,
}: {
  cards: Array<{
    eyebrow?: string;
    title: string;
    description: React.ReactNode;
    icon?: React.ReactNode;
    tone?: Tone;
  }>;
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <div className={`grid gap-4 ${grid} my-6`}>
      {cards.map((card, index) => {
        const tone = card.tone ?? "neutral";
        const styles = toneStyles[tone];

        return (
          <div
            key={`${card.title}-${index}`}
            className={`rounded-2xl border p-5 shadow-sm ${styles.card}`}
          >
            <div className="flex items-start gap-3">
              {card.icon && (
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${styles.icon}`}
                >
                  <span aria-hidden="true">{card.icon}</span>
                </div>
              )}
              <div className="min-w-0">
                {card.eyebrow && (
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
                    {card.eyebrow}
                  </p>
                )}
                <h3 className={`font-semibold leading-snug ${styles.title}`}>
                  {card.title}
                </h3>
                <div className={`mt-2 text-sm leading-relaxed ${styles.body}`}>
                  {card.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ResourceLinkGrid({
  title,
  description,
  resources,
}: {
  title?: string;
  description?: React.ReactNode;
  resources: Array<{
    label: string;
    href?: string;
    to?: string;
    description?: React.ReactNode;
    phone?: string;
    badge?: string;
  }>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6 my-6">
      {title && <h3 className="text-xl font-bold text-slate-900">{title}</h3>}
      {description && (
        <div className="mt-2 text-slate-700 leading-relaxed">{description}</div>
      )}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {resources.map((resource, index) => {
          const card = (
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-slate-900">{resource.label}</p>
                {resource.badge && (
                  <span className="shrink-0 rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                    {resource.badge}
                  </span>
                )}
              </div>
              {resource.description && (
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  {resource.description}
                </div>
              )}
              {resource.phone && (
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  {resource.phone}
                </p>
              )}
            </div>
          );

          if (resource.to) {
            return (
              <Link key={`${resource.label}-${index}`} to={resource.to}>
                {card}
              </Link>
            );
          }

          if (resource.href) {
            return (
              <a
                key={`${resource.label}-${index}`}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            );
          }

          return <div key={`${resource.label}-${index}`}>{card}</div>;
        })}
      </div>
    </div>
  );
}

export function RelatedGuides({
  guides,
  title = "Related SOLAR resources",
}: {
  title?: string;
  guides: Array<{
    title: string;
    description?: React.ReactNode;
    to: string;
  }>;
}) {
  return (
    <ResourceLinkGrid
      title={title}
      resources={guides.map((guide) => ({
        label: guide.title,
        description: guide.description,
        to: guide.to,
        badge: "SOLAR",
      }))}
    />
  );
}

export function SourceList({
  title = "Sources & verification",
  sources,
  note,
}: {
  title?: string;
  note?: React.ReactNode;
  sources: Array<{
    label: string;
    href: string;
    description?: React.ReactNode;
  }>;
}) {
  return (
    <div id="sources" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 my-8">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      {note && <div className="mt-2 text-sm leading-relaxed text-slate-700">{note}</div>}

      <ul className="mt-5 space-y-3">
        {sources.map((source, index) => (
          <li key={`${source.label}-${index}`} className="rounded-xl bg-white border border-slate-200 p-4">
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              {source.label}
            </a>
            {source.description && (
              <div className="mt-1 text-sm leading-relaxed text-slate-700">
                {source.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PathwayCard({
  title,
  subtitle,
  icon,
  whyItWorks,
  steps,
  details,
  bestFit,
  offlineAlternatives,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  whyItWorks?: React.ReactNode;
  steps?: React.ReactNode[];
  details?: Array<{
    label: string;
    value: React.ReactNode;
  }>;
  bestFit?: React.ReactNode;
  offlineAlternatives?: React.ReactNode[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden my-6 avoid-break print:shadow-none">
      <div className="bg-slate-50 border-b border-slate-200 p-5">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-xl">
              <span aria-hidden="true">{icon}</span>
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {whyItWorks && (
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Why it works
            </p>
            <div className="mt-1 leading-relaxed text-slate-800">
              {whyItWorks}
            </div>
          </div>
        )}

        {steps && steps.length > 0 && (
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              Typical steps
            </p>
            <ol className="mt-2 space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed text-slate-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {details && details.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {detail.label}
                </p>
                <div className="mt-1 text-sm leading-relaxed text-slate-800">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {bestFit && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
            <p className="font-semibold">Best fit</p>
            <div className="mt-1 leading-relaxed">{bestFit}</div>
          </div>
        )}

        {offlineAlternatives && offlineAlternatives.length > 0 && (
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-orange-900">
            <p className="font-semibold">Offline alternatives</p>
            <ul className="mt-2 space-y-2">
              {offlineAlternatives.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export function RoleGuidanceGrid({
  title,
  roles,
}: {
  title?: string;
  roles: Array<{
    role: string;
    icon?: React.ReactNode;
    guidance: React.ReactNode;
  }>;
}) {
  return (
    <div className="my-6">
      {title && <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>}
      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <div
            key={role.role}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              {role.icon && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                  <span aria-hidden="true">{role.icon}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-slate-900">{role.role}</p>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  {role.guidance}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TimelineGuidanceGrid({
  title,
  stages,
}: {
  title?: string;
  stages: Array<{
    stage: string;
    icon?: React.ReactNode;
    whatChanges?: React.ReactNode;
    whatToDo?: React.ReactNode;
  }>;
}) {
  return (
    <div className="my-6">
      {title && <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => (
          <div
            key={stage.stage}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-3">
              {stage.icon && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-lg">
                  <span aria-hidden="true">{stage.icon}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-slate-900">{stage.stage}</p>
              </div>
            </div>

            {stage.whatChanges && (
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  What changes
                </p>
                <div className="mt-1 text-sm leading-relaxed text-slate-700">
                  {stage.whatChanges}
                </div>
              </div>
            )}

            {stage.whatToDo && (
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  What to do
                </p>
                <div className="mt-1 text-sm leading-relaxed text-slate-700">
                  {stage.whatToDo}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DoDontJudgment({
  dos = [],
  donts = [],
  judgment = [],
}: {
  dos?: React.ReactNode[];
  donts?: React.ReactNode[];
  judgment?: React.ReactNode[];
}) {
  const Column = ({
    title,
    icon,
    items,
    tone,
  }: {
    title: string;
    icon: React.ReactNode;
    items: React.ReactNode[];
    tone: Tone;
  }) => {
    const styles = toneStyles[tone];

    return (
      <div className={`rounded-2xl border p-4 ${styles.card}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles.icon}`}>
            <span aria-hidden="true">{icon}</span>
          </div>
          <p className={`font-semibold ${styles.title}`}>{title}</p>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className={`flex items-start gap-2 text-sm leading-relaxed ${styles.body}`}>
              <span aria-hidden="true" className="mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-3 my-6">
      {dos.length > 0 && (
        <Column title="Hard DOs" icon="✅" items={dos} tone="success" />
      )}
      {donts.length > 0 && (
        <Column title="Hard DON’Ts" icon="⛔" items={donts} tone="urgent" />
      )}
      {judgment.length > 0 && (
        <Column title="Use your judgment" icon="🧭" items={judgment} tone="warning" />
      )}
    </div>
  );
}

export function RedFlagGreenFlag({
  red,
  green,
}: {
  red?: React.ReactNode;
  green?: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 my-5">
      {red && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-950">🚩 Red flag</p>
          <div className="mt-2 text-sm leading-relaxed text-red-900">{red}</div>
        </div>
      )}
      {green && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="font-semibold text-emerald-950">✅ Green flag</p>
          <div className="mt-2 text-sm leading-relaxed text-emerald-900">
            {green}
          </div>
        </div>
      )}
    </div>
  );
}

export function DualDepthSection({
  simpleTitle = "Survival advice",
  deepTitle = "Why this matters",
  simple,
  deep,
}: {
  simpleTitle?: string;
  deepTitle?: string;
  simple: React.ReactNode;
  deep: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 my-6">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
        <p className="font-semibold text-emerald-950">✨ {simpleTitle}</p>
        <div className="mt-2 leading-relaxed text-emerald-900">{simple}</div>
      </div>
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
        <p className="font-semibold text-blue-950">📘 {deepTitle}</p>
        <div className="mt-2 leading-relaxed text-blue-900">{deep}</div>
      </div>
    </div>
  );
}