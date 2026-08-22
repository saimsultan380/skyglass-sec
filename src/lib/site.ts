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
export const LEGAL_OPERATOR_NAME = "[LEGAL OPERATOR NAME]";
export const BUSINESS_ADDRESS = "[BUSINESS ADDRESS]";
export const LEGAL_WEBSITE = SITE_DOMAIN;

export const INDEPENDENCE_NOTICE =
  "Sky Glass IPTV is an independent service. This website is not affiliated with, endorsed by or operated by Sky UK Limited or the manufacturer of the Sky Glass television. Third-party names and trademarks belong to their respective owners.";

/** Reseller programme entry requirement. */
export const RESELLER_MINIMUM_CREDITS = 120;

/** Build a WhatsApp deep link that names this website so support can see the source. */
export function buildWhatsAppHref(options?: {
  plan?: string;
  page?: string;
  intent?: string;
}): string {
  const lines = [
    `Hello Sky Glass IPTV support,`,
    ``,
    `I am contacting you from ${SITE_DOMAIN} (${SITE_URL}).`,
  ];

  if (options?.page) {
    lines.push(`Page: ${options.page}`);
  }
  if (options?.plan) {
    lines.push(`Plan of interest: ${options.plan}`);
  }
  if (options?.intent) {
    lines.push(`Request: ${options.intent}`);
  } else {
    lines.push(`Request: I would like help with a subscription / trial.`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${text}`;
}
