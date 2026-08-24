"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Vertical travel distance in px */
  yOffset?: number;
  /** Starting blur radius in px */
  blur?: number;
}

/**
 * Blur-to-clear scroll entrance (Framer Motion).
 * Use for selective cards/blocks; global sections already use ScrollReveal.
 */
export function BlurFade({
  children,
  delay = 0,
  className,
  yOffset = 18,
  blur = 6,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: blur ? `blur(${blur}px)` : "none", y: yOffset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "0px 0px 80px 0px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("will-change-[opacity,transform]", className)}
    >
      {children}
    </motion.div>
  );
}
