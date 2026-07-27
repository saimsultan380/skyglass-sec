"use client";

import dynamic from "next/dynamic";

const QuantumNebula = dynamic(() => import("@/components/ui/quantum-nebula"), {
  ssr: false,
});

/**
 * Pure white page background + particle nebula.
 * Brand colours are used only on the animated dots — not as a page tint.
 */
export function WaveBackground() {
  return (
    <div
      className="wave-bg-root aurora-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="aurora-base" />
      <div className="aurora-nebula-layer">
        <QuantumNebula className="absolute inset-0 w-full h-full z-0" />
      </div>
    </div>
  );
}
