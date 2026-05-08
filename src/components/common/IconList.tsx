import React from "react";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  ExternalLink,
  FileText,
  FolderOpen,
  HeartHandshake,
  HelpCircle,
  Home,
  Landmark,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PiggyBank,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Users,
  WalletCards,
  WifiOff,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type IconListTone =
  | "neutral"
  | "info"
  | "warning"
  | "urgent"
  | "success"
  | "legal"
  | "privacy"
  | "family"
  | "money"
  | "reentry";

export type IconListVariant = "cards" | "rows" | "compact";

export const iconMap = {
  alert: AlertTriangle,
  arrow: ArrowRight,
  bank: Landmark,
  benefits: HeartHandshake,
  bill: FileText,
  calendar: CalendarDays,
  call: Phone,
  check: CheckCircle2,
  clipboard: ClipboardList,
  credit: CreditCard,
  document: FileText,
  external: ExternalLink,
  family: Users,
  folder: FolderOpen,
  food: HeartHandshake,
  help: HelpCircle,
  home: Home,
  legal: Scale,
  mail: Mail,
  medical: Stethoscope,
  message: MessageSquare,
  money: Banknote,
  note: ClipboardCheck,
  phone: Phone,
  piggyBank: PiggyBank,
  privacy: ShieldAlert,
  search: Search,
  shield: ShieldCheck,
  support: HeartHandshake,
  transport: MapPin,
  utilities: Bell,
  verify: Search,
  warning: AlertTriangle,
  wifiOff: WifiOff,
  work: Wrench,
  wallet: WalletCards,
  book: BookOpen,
} satisfies Record<string, LucideIcon>;

export type IconListIconName = keyof typeof iconMap;

export type IconListItem = {
  icon?: IconListIconName | React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
  href?: string;
  tone?: IconListTone;
};

const toneStyles: Record<
  IconListTone,
  {
    wrapper: string;
    icon: string;
    title: string;
    body: string;
    meta: string;
  }
> = {
  neutral: {
    wrapper: "border-slate-200 bg-white",
    icon: "bg-slate-100 text-slate-700",
    title: "text-slate-950",
    body: "text-slate-700",
    meta: "text-slate-500",
  },
  info: {
    wrapper: "border-blue-200 bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    title: "text-blue-950",
    body: "text-blue-900",
    meta: "text-blue-700",
  },
  warning: {
    wrapper: "border-amber-200 bg-amber-50",
    icon: "bg-amber-100 text-amber-700",
    title: "text-amber-950",
    body: "text-amber-900",
    meta: "text-amber-700",
  },
  urgent: {
    wrapper: "border-red-200 bg-red-50",
    icon: "bg-red-100 text-red-700",
    title: "text-red-950",
    body: "text-red-900",
    meta: "text-red-700",
  },
  success: {
    wrapper: "border-emerald-200 bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    title: "text-emerald-950",
    body: "text-emerald-900",
    meta: "text-emerald-700",
  },
  legal: {
    wrapper: "border-orange-200 bg-orange-50",
    icon: "bg-orange-100 text-orange-700",
    title: "text-orange-950",
    body: "text-orange-900",
    meta: "text-orange-700",
  },
  privacy: {
    wrapper: "border-purple-200 bg-purple-50",
    icon: "bg-purple-100 text-purple-700",
    title: "text-purple-950",
    body: "text-purple-900",
    meta: "text-purple-700",
  },
  family: {
    wrapper: "border-rose-200 bg-rose-50",
    icon: "bg-rose-100 text-rose-700",
    title: "text-rose-950",
    body: "text-rose-900",
    meta: "text-rose-700",
  },
  money: {
    wrapper: "border-emerald-200 bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    title: "text-emerald-950",
    body: "text-emerald-900",
    meta: "text-emerald-700",
  },
  reentry: {
    wrapper: "border-cyan-200 bg-cyan-50",
    icon: "bg-cyan-100 text-cyan-700",
    title: "text-cyan-950",
    body: "text-cyan-900",
    meta: "text-cyan-700",
  },
};

function RenderIcon({ icon }: { icon?: IconListIconName | React.ReactNode }) {
  if (!icon) {
    return <CheckCircle2 aria-hidden="true" className="h-4 w-4" />;
  }

  if (typeof icon === "string") {
    const Icon = iconMap[icon] ?? CheckCircle2;
    return <Icon aria-hidden="true" className="h-4 w-4" />;
  }

  return <span aria-hidden="true">{icon}</span>;
}

export function IconList({
  title,
  description,
  items,
  variant = "cards",
  columns = 2,
  tone = "neutral",
  className = "",
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  items: IconListItem[];
  variant?: IconListVariant;
  columns?: 1 | 2 | 3;
  tone?: IconListTone;
  className?: string;
}) {
  const gridClass =
    columns === 3
      ? "md:grid-cols-3"
      : columns === 2
        ? "md:grid-cols-2"
        : "grid-cols-1";

  const isCompact = variant === "compact";
  const isRows = variant === "rows";

  return (
    <div className={`my-5 ${className}`}>
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-base sm:text-lg font-semibold text-slate-950">
              {title}
            </h3>
          )}
          {description && (
            <div className="mt-1 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              {description}
            </div>
          )}
        </div>
      )}

      <div
        className={
          isRows
            ? "space-y-3"
            : `grid grid-cols-1 gap-3 ${gridClass}`
        }
      >
        {items.map((item, index) => {
          const styles = toneStyles[item.tone ?? tone] ?? toneStyles.neutral;
          const content = (
            <div
              className={`flex items-start gap-3 rounded-2xl border ${styles.wrapper} ${
                isCompact ? "p-3" : "p-4"
              } ${item.href ? "transition-colors hover:bg-white" : ""}`}
            >
              <div
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
              >
                <RenderIcon icon={item.icon} />
              </div>

              <div className="min-w-0">
                <div
                  className={`text-[15px] sm:text-base font-semibold leading-snug ${styles.title}`}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div
                    className={`mt-1 text-sm sm:text-[15px] leading-relaxed ${styles.body}`}
                  >
                    {item.description}
                  </div>
                )}
                {item.meta && (
                  <div
                    className={`mt-2 text-xs font-semibold uppercase tracking-wide ${styles.meta}`}
                  >
                    {item.meta}
                  </div>
                )}
              </div>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded-2xl"
              >
                {content}
              </a>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </div>
  );
}

export default IconList;
