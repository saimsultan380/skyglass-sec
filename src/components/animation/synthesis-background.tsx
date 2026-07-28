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
      {/* Static image for mobile - always render, hide on desktop */}
      <div 
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: 'url(/hero-bg-image.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1.0
        }}
      />

      {/* Static image for desktop/tablet - hide on mobile */}
      <div 
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: 'url(/desktop_bg_landscape.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1.0
        }}
      />
    </div>
  );
}
