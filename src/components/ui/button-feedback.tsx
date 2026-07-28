"use client";

import { useEffect } from "react";
import {
  isFeedbackButtonTarget,
  triggerButtonFeedback,
} from "@/lib/button-feedback";

/** Site-wide haptic + click sound for all buttons. */
export function ButtonFeedback() {
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      if (!isFeedbackButtonTarget(event.target)) return;
      triggerButtonFeedback();
    };

    // pointerdown feels closer to real press / haptic timing than click
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, []);

  return null;
}
