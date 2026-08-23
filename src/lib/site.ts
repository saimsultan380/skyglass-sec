/** Shared service facts referenced across multiple pages. */

export const DOWNLOADER_CODE = "3824652";
export const DOWNLOADER_APP = "Downloader by AFTVnews";

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
  "Sky Glass IPTV is an independent service. This website is not affiliated with, endorsed by or operated by Sky UK Limited or the manufacturer of the Sky Glass television. Third-party names and trademarks belong to their respective owners.";

/** Reseller programme entry requirement. */
export const RESELLER_MINIMUM_CREDITS = 120;

/** Short WhatsApp prefills used across CTAs. */
export type WhatsAppIntent = "trial" | "subscription";

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
