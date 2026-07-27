"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-semibold tracking-tight transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-white shine-effect",
        outline:
          "border-gradient-brand text-[#0B0E2C]",
        secondary:
          "border border-white/50 bg-white/65 text-[#0B0E2C] shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-[28px] supports-[backdrop-filter]:bg-white/55",
        ghost:
          "text-slate-700 hover:text-slate-950 border border-transparent bg-transparent",
      },
      size: {
        default: "h-11 px-5 py-2.5 rounded-[12px]",
        sm: "h-9 px-3.5 py-1.5 text-xs rounded-[12px]",
        lg: "h-13 px-6 py-3 text-base rounded-[12px]",
        icon: "h-10 w-10 p-0 rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  enableShine?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, enableShine = true, children, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

    const isPrimary = variant === "primary" || !variant;
    const showShine = isPrimary && enableShine;

    const easeCurve = [0.21, 0.47, 0.32, 0.98] as const;

    return (
      <motion.button
        ref={ref}
        whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        transition={{
          duration: 0.2,
          ease: easeCurve,
        }}
        className={cn(
          buttonVariants({ variant, size }),
          showShine && !shouldReduceMotion ? "shine-effect" : "",
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
