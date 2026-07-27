"use client";

import { GradientWave } from "@/components/animation/gradient-wave";

/** Site brand gradient stops from globals.css --grad-brand */
const BRAND_WAVE_COLORS = ["#ff6b2c", "#e91e8c", "#7b2fff", "#2563eb"];

export function WaveBackground() {
  return (
    <div
      className="wave-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <GradientWave
        colors={BRAND_WAVE_COLORS}
        isPlaying
        darkenTop={false}
        shadowPower={5}
        noiseSpeed={0.000008}
        noiseFrequency={[0.00012, 0.00035]}
        deform={{
          incline: 0.35,
          noiseAmp: 220,
          noiseFlow: 4,
          noiseSpeed: 8,
          offsetTop: -0.4,
          offsetBottom: -0.4,
        }}
        className="opacity-90"
      />
      <div className="wave-bg-soft-glow" />
    </div>
  );
}
