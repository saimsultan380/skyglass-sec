import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Protect custom typography tokens from being treated as text-color utilities.
 * Without this, cn("text-h1-b1g", "text-[#0B0E2C]") drops text-h1-b1g (font-size).
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["h1-b1g", "h2", "body"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
