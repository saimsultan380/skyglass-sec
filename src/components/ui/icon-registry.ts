import {
  BadgeCheck,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Headphones,
  HelpCircle,
  MessageSquare,
  MonitorSmartphone,
  PenLine,
  Router,
  Scale,
  ShieldCheck,
  Smartphone,
  Tv,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Server Components cannot pass component references to Client Components, so
 * pages reference icons by name and the client resolves them here.
 */
export const ICONS = {
  badgeCheck: BadgeCheck,
  calendar: Calendar,
  clock: Clock,
  creditCard: CreditCard,
  fileText: FileText,
  headphones: Headphones,
  helpCircle: HelpCircle,
  messageSquare: MessageSquare,
  monitorSmartphone: MonitorSmartphone,
  penLine: PenLine,
  router: Router,
  scale: Scale,
  shieldCheck: ShieldCheck,
  smartphone: Smartphone,
  tv: Tv,
  users: Users,
  wrench: Wrench,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
