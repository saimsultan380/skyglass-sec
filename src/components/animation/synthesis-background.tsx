"use client";

import { cn } from "@/lib/utils";

interface SynthesisBackgroundProps {
  className?: string;
  backgroundColor?: string;
}

export default function SynthesisBackground({
  className,
  backgroundColor = "#ffffff", // White background
}: SynthesisBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden",
        className,
      )}
      style={{ backgroundColor }}
      aria-hidden="true"
    >
      {/* Mobile background image - covers entire site */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg-image.webp)',
          opacity: 1.0,
        }}
      />

      {/* Desktop background image - covers entire site */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/desktop_bg_landscape.webp)',
          opacity: 1.0,
        }}
      />
    </div>
  );
}
