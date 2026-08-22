"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type MaskRevealPart = {
  text: string;
  className?: string;
};

interface MaskRevealProps {
  /** Plain text — split into words for the skew mask reveal */
  text?: string;
  /** Styled segments (e.g. brand gradient words) — each segment is split into words */
  parts?: MaskRevealPart[];
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: React.ElementType;
  /** `mount` for hero titles (load-in); `inView` for scroll sections */
  trigger?: "mount" | "inView";
}

type WordToken = {
  word: string;
  className?: string;
};

function toWords(text: string, className?: string): WordToken[] {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => ({ word, className }));
}

/**
 * GPU-friendly CSS skew mask reveal — no Framer Motion.
 * Transform-only (translate + skew); overflow clip handles the reveal.
 */
export function MaskReveal({
  text,
  parts,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.025,
  duration = 0.36,
  as: Component = "h1",
  trigger = "inView",
}: MaskRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const words: WordToken[] = parts?.length
    ? parts.flatMap((part) => toWords(part.text, part.className))
    : toWords(text ?? "");

  useEffect(() => {
    if (trigger === "mount") {
      // Start after paint — avoids hydration hitch / main-thread lag
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setActive(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }

    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  const durationMs = Math.round(duration * 1000);
  const delayMs = Math.round(delay * 1000);
  const staggerMs = Math.round(stagger * 1000);

  const Tag = (Component || "h1") as React.ElementType;

  return (
    <Tag
      className={cn("w-full", className)}
      data-no-reveal
    >
      <div
        ref={rootRef}
        className={cn(
          "mask-reveal flex w-full flex-wrap gap-x-[0.25em] gap-y-[0.1em]",
          active && "mask-reveal--active"
        )}
        style={
          {
            "--mask-duration": `${durationMs}ms`,
          } as React.CSSProperties
        }
      >
        {words.map((token, index) => (
          <span
            key={`${token.word}-${index}`}
            className="mask-reveal__clip inline-block overflow-hidden py-[0.05em] px-[0.02em] -my-[0.05em] -mx-[0.02em]"
          >
            <span
              className={cn(
                "mask-reveal__word",
                wordClassName,
                token.className
              )}
              style={
                {
                  "--mask-delay": `${delayMs + index * staggerMs}ms`,
                } as React.CSSProperties
              }
            >
              {token.word}
            </span>
          </span>
        ))}
      </div>
    </Tag>
  );
}
