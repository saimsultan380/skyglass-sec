import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LOGO_IMAGE } from "@/lib/assets";

interface B1GLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function B1GLogo({ className, size = "md" }: B1GLogoProps) {
  const heightMap = {
    sm: "h-8",
    md: "h-[46px] sm:h-12",
    lg: "h-14 sm:h-16",
  };

  return (
    <div className={cn("relative flex items-center select-none", heightMap[size], className)}>
      <Image
        src={LOGO_IMAGE}
        alt="Sky Glass IPTV Logo"
        width={200}
        height={56}
        priority
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
