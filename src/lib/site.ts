/** Shared service facts referenced across multiple pages. */

export const DOWNLOADER_CODE = "2245820";
export const DOWNLOADER_APP = "Downloader by AFTVnews";

export const CATALOGUE_LIVE = "27,000+";
export const CATALOGUE_VOD = "120,000+";
export const CATALOGUE_LIVE_LABEL = "27,000+ live channel entries";
export const CATALOGUE_VOD_LABEL = "120,000+ film and series entries";

export const PREMIUM_PRICES = {
  month1: "£12",
  month3: "£22",
  month6: "£30",
  month12: "£40",
} as const;

export const PREMIUM_MONTHLY_EQUIVALENTS = {
  month1: "£12.00",
  month3: "about £7.33",
  month6: "£5",
  month12: "about £3.33",
} as const;

export const CONTACT_PHONE = "+44 7450 620840";
export const CONTACT_PHONE_HREF = "tel:+447450620840";
export const CONTACT_WHATSAPP_NUMBER = "447450620840";
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "iptvskyglass745@gmail.com";
export const CONTACT_EMAIL_HREF = "mailto:iptvskyglass745@gmail.com";

/** Brand / website label used in outbound WhatsApp messages. */
export const SITE_BRAND = "Sky Glass IPTV";
export const SITE_DOMAIN = "skyglass-iptv.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;

/** Supported Smart TV players (Samsung, LG and other non-Android platforms). */
export const SMART_TV_PLAYERS = [
  "CR7 Player",
  "IBO Player",
  "SmartOne IPTV",
  "HOT IPTV",
] as const;

export const LEGAL_LAST_UPDATED = "22 August 2026";
/** Trading name used publicly; replace with registered legal entity after review. */
export const LEGAL_OPERATOR_NAME = "Sky Glass IPTV";
/** Correspondence contact until a registered business address is confirmed. */
export const BUSINESS_ADDRESS = `UK correspondence via ${CONTACT_EMAIL} or WhatsApp ${CONTACT_PHONE}`;
export const LEGAL_WEBSITE = SITE_DOMAIN;

export const INDEPENDENCE_NOTICE =
  "Sky Glass IPTV is provided independently through Skyglass-iptv.com. It is not affiliated with, endorsed by or operated by Sky or the official Sky Glass television service. Third-party names and trademarks belong to their respective owners.";

/** Reseller programme entry requirement. */
export const RESELLER_MINIMUM_CREDITS = 120;

/** Short WhatsApp prefills used across CTAs. */
export type WhatsAppIntent =
  | "trial"
  | "subscription"
  | "setup"
  | "channel"
  | "install";

/**
 * Build a WhatsApp deep link with a short prefilled message:
 * - Skyglass-iptv free trial
 * - Skyglass-iptv subscription
 * - Skyglass-iptv subscription - 1 Month £12 (when plan/price given)
 */
export function buildWhatsAppHref(options?: {
  intent?: WhatsAppIntent;
  /** Plan name, e.g. "1 Month" or "1-Month Plan" */
  plan?: string;
  /** Plan price, e.g. "£12" */
  price?: string;
}): string {
  const intent = options?.intent ?? "subscription";
  let message: string;

  if (intent === "trial") {
    message = "Skyglass-iptv free trial";
  } else if (intent === "setup") {
    message = "Skyglass-iptv setup";
  } else if (intent === "channel") {
    message = "Skyglass-iptv channel or title check";
  } else if (intent === "install") {
    message = `Skyglass-iptv installation help - Downloader code ${DOWNLOADER_CODE}`;
  } else if (options?.plan && options?.price) {
    message = `Skyglass-iptv subscription - ${options.plan} ${options.price}`;
  } else if (options?.plan) {
    message = `Skyglass-iptv subscription - ${options.plan}`;
  } else {
    message = "Skyglass-iptv subscription";
  }

  return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_TRIAL_HREF = buildWhatsAppHref({ intent: "trial" });
export const WHATSAPP_SUBSCRIPTION_HREF = buildWhatsAppHref({
  intent: "subscription",
});
export const WHATSAPP_SETUP_HREF = buildWhatsAppHref({ intent: "setup" });
export const WHATSAPP_CHANNEL_HREF = buildWhatsAppHref({ intent: "channel" });
export const WHATSAPP_INSTALL_HREF = buildWhatsAppHref({ intent: "install" });
