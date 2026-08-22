export type LegalBlock =
  | { kind: "text"; text: string }
  /** Sentence that introduces the list immediately after it. */
  | { kind: "lead"; text: string }
  /** Nested heading inside a section (e.g. Contact Information under Information We May Collect). */
  | { kind: "subheading"; text: string }
  | { kind: "bullets"; items: readonly string[] }
  | { kind: "steps"; items: readonly string[] }
  | {
      kind: "definitions";
      items: readonly { term: string; description: string }[];
    }
  /** Muted closing note, e.g. a statutory-rights caveat. */
  | { kind: "note"; text: string };

export type LegalSection = {
  title: string;
  blocks: readonly LegalBlock[];
};

export type LegalDocument = {
  /** Leading part of the H1. */
  title: string;
  /** Trailing part of the H1, rendered in the brand gradient. */
  highlight: string;
  lastUpdated: string;
  /** Key/value rows shown under the H1 (operator, address, website). */
  meta?: readonly { label: string; value: string }[];
  intro?: readonly string[];
  /** Prefix each section title with its position. */
  numbered?: boolean;
  sections: readonly LegalSection[];
};
