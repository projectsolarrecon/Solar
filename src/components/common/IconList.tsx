import React from "react";
import {
  Accessibility,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowDownUp,
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Bus,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  Car,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  Clock,
  CreditCard,
  DoorOpen,
  ExternalLink,
  Eye,
  EyeOff,
  FileCheck2,
  FileText,
  Fingerprint,
  FolderOpen,
  Gavel,
  HandCoins,
  Handshake,
  HeartHandshake,
  HelpCircle,
  Home,
  Hospital,
  Hourglass,
  IdCard,
  Landmark,
  Laptop,
  Library,
  LifeBuoy,
  Lightbulb,
  Link as LinkIcon,
  ListChecks,
  Lock,
  Mail,
  Map,
  MapPin,
  Megaphone,
  MessageCircleWarning,
  MessageSquare,
  MinusCircle,
  MonitorSmartphone,
  NotebookPen,
  Package,
  PauseCircle,
  PenLine,
  Phone,
  PiggyBank,
  Printer,
  Receipt,
  RefreshCcw,
  Scale,
  School,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  ShoppingBasket,
  Smartphone,
  Stethoscope,
  Target,
  TrainFront,
  TriangleAlert,
  UserCheck,
  UserRoundCheck,
  UserRoundX,
  Users,
  WalletCards,
  Wifi,
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
  access: Accessibility,
  accessibility: Accessibility,
  account: UserCheck,
  action: ListChecks,
  alert: AlertTriangle,
  appeal: Gavel,
  apply: PenLine,
  archive: Archive,
  arrow: ArrowRight,
  ask: HelpCircle,
  attorney: Scale,
  bank: Landmark,
  benefit: HeartHandshake,
  benefits: HeartHandshake,
  bill: FileText,
  bills: Receipt,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  budget: PiggyBank,
  building: Building2,
  bus: Bus,
  call: Phone,
  calendar: CalendarDays,
  calendarCheck: CalendarCheck,
  calendarClock: CalendarClock,
  car: Car,
  caution: TriangleAlert,
  check: CheckCircle2,
  checklist: ClipboardList,
  childSupport: HandCoins,
  clock: Clock,
  compare: ArrowDownUp,
  contact: UserRoundCheck,
  court: Gavel,
  credit: CreditCard,
  creditCard: CreditCard,
  deadline: CalendarClock,
  debt: CircleDollarSign,
  disclose: MessageSquare,
  document: FileText,
  documents: FileCheck2,
  door: DoorOpen,
  emergency: AlertCircle,
  evidence: FolderOpen,
  external: ExternalLink,
  eye: Eye,
  eyeOff: EyeOff,
  family: Users,
  file: FileText,
  fileCheck: FileCheck2,
  fileText: FileText,
  fingerprint: Fingerprint,
  folder: FolderOpen,
  food: ShoppingBasket,
  form: FileText,
  forms: FileText,
  gavel: Gavel,
  hardship: HeartHandshake,
  health: Stethoscope,
  help: HelpCircle,
  home: Home,
  hospital: Hospital,
  housing: Home,
  hourglass: Hourglass,
  id: IdCard,
  internet: Wifi,
  job: BriefcaseBusiness,
  legal: Scale,
  library: Library,
  lifeline: LifeBuoy,
  link: LinkIcon,
  list: ClipboardList,
  location: MapPin,
  lock: Lock,
  mail: Mail,
  map: Map,
  message: MessageSquare,
  messageWarning: MessageCircleWarning,
  medical: Stethoscope,
  mistake: AlertTriangle,
  money: Banknote,
  monitor: MonitorSmartphone,
  note: ClipboardCheck,
  notebook: NotebookPen,
  package: Package,
  pause: PauseCircle,
  payment: Receipt,
  phone: Phone,
  piggyBank: PiggyBank,
  plan: Target,
  print: Printer,
  privacy: ShieldAlert,
  receipt: Receipt,
  reentry: DoorOpen,
  refresh: RefreshCcw,
  report: Megaphone,
  resource: LifeBuoy,
  save: Archive,
  school: School,
  search: Search,
  send: Send,
  shield: ShieldCheck,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,
  shieldQuestion: ShieldQuestion,
  support: HeartHandshake,
  target: Target,
  tax: Landmark,
  time: Clock,
  transit: Bus,
  transport: MapPin,
  transportation: Car,
  travel: TrainFront,
  utilities: Bell,
  verify: Search,
  visit: IdCard,
  wallet: WalletCards,
  warning: AlertTriangle,
  wifi: Wifi,
  wifiOff: WifiOff,
  work: Wrench,
  yes: CheckCircle2,
  no: MinusCircle,
  userCheck: UserRoundCheck,
  userX: UserRoundX,
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
