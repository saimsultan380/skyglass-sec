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
        "pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden transform-gpu",
        className,
      )}
      style={{
        backgroundColor,
        height: "100vh",
        transform: "translateZ(0)",
      }}
      aria-hidden="true"
    >
      {/* Static image for mobile - locked background */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat transform-gpu"
        style={{
          backgroundImage: 'url(/hero-bg-image.webp)',
          backgroundAttachment: 'scroll',
          transform: 'translateZ(0)',
          height: "100%",
          width: "100%",
          opacity: 1.0,
        }}
      />

      {/* Static image for desktop/tablet */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu"
        style={{
          backgroundImage: 'url(/desktop_bg_landscape.webp)',
          backgroundAttachment: 'scroll',
          transform: 'translateZ(0)',
          height: "100%",
          width: "100%",
          opacity: 1.0,
        }}
      />
    </div>
  );
}
