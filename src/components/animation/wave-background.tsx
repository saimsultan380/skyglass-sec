"use client";

import { useEffect, useRef } from "react";

/** Reference palette — orange → pink → violet → blue → cyan */
const RIBBON = [
  { t: 0.0, color: [255, 176, 70] },
  { t: 0.12, color: [255, 110, 55] },
  { t: 0.28, color: [255, 45, 120] },
  { t: 0.42, color: [220, 40, 170] },
  { t: 0.55, color: [140, 55, 245] },
  { t: 0.7, color: [70, 90, 255] },
  { t: 0.85, color: [40, 160, 255] },
  { t: 1.0, color: [70, 220, 255] },
] as const;

type Particle = {
  t: number;
  off: number;
  r: number;
  baseAlpha: number;
  twinkle: number;
  twinkleSpeed: number;
  drift: number;
  filament: number;
};

type Bokeh = {
  t: number;
  off: number;
  r: number;
  alpha: number;
  color: [number, number, number];
  phase: number;
  speed: number;
};

function lerpColor(t: number): [number, number, number] {
  const x = Math.min(1, Math.max(0, t));
  let i = 0;
  while (i < RIBBON.length - 1 && RIBBON[i + 1]!.t < x) i++;
  const a = RIBBON[i]!;
  const b = RIBBON[Math.min(i + 1, RIBBON.length - 1)]!;
  const span = b.t - a.t || 1;
  const u = (x - a.t) / span;
  return [
    a.color[0] + (b.color[0] - a.color[0]) * u,
    a.color[1] + (b.color[1] - a.color[1]) * u,
    a.color[2] + (b.color[2] - a.color[2]) * u,
  ];
}

function rgba(c: [number, number, number], a: number) {
  return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
}

function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let time = 0;
    let particles: Particle[] = [];
    let bokehs: Bokeh[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /** Organic mid-band wave — tall vertical sweep */
    const waveY = (t: number, phase: number) => {
      const base = h * 0.48;
      const amp = Math.min(h * 0.22, 180);
      return (
        base +
        Math.sin(t * Math.PI * 2.05 + phase) * amp +
        Math.sin(t * Math.PI * 3.7 + phase * 1.4) * amp * 0.42 +
        Math.sin(t * Math.PI * 6.2 + phase * 0.6) * amp * 0.18
      );
    };

    const wavePoint = (t: number, phase: number, off: number) => {
      const x = t * w;
      const y = waveY(t, phase);
      const d = 0.0025;
      const y2 = waveY(Math.min(1, t + d), phase);
      const dx = d * w;
      const dy = y2 - y;
      const len = Math.hypot(dx, dy) || 1;
      return { x: x + (-dy / len) * off, y: y + (dx / len) * off };
    };

    const init = () => {
      const isMobile = w < 640;
      const filamentCount = isMobile ? 9 : 12;
      const perFilament = isMobile ? 55 : 75;
      const spacing = h * (isMobile ? 0.026 : 0.022);

      particles = [];
      for (let f = 0; f < filamentCount; f++) {
        const filamentOff = (f - (filamentCount - 1) / 2) * spacing;
        for (let i = 0; i < perFilament; i++) {
          const t = i / (perFilament - 1) + (Math.random() - 0.5) * 0.012;
          particles.push({
            t: Math.min(1, Math.max(0, t)),
            off: filamentOff + (Math.random() - 0.5) * spacing * 0.9,
            r: Math.random() < 0.15 ? 1.6 + Math.random() * 1.8 : 0.45 + Math.random() * 1.1,
            baseAlpha: 0.45 + Math.random() * 0.55,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.012 + Math.random() * 0.028,
            drift: (Math.random() - 0.5) * 0.00018,
            filament: f,
          });
        }
      }

      // Extra loose sparkles around the band
      const extras = isMobile ? 80 : 140;
      for (let i = 0; i < extras; i++) {
        particles.push({
          t: Math.random(),
          off: (Math.random() - 0.5) * h * 0.4,
          r: 0.4 + Math.random() * 1.4,
          baseAlpha: 0.2 + Math.random() * 0.4,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.01 + Math.random() * 0.025,
          drift: (Math.random() - 0.5) * 0.00022,
          filament: -1,
        });
      }

      bokehs = Array.from({ length: isMobile ? 14 : 22 }, () => {
        const t = Math.random();
        const local = lerpColor(t);
        const white = Math.random() > 0.55;
        return {
          t,
          off: (Math.random() - 0.5) * h * 0.42,
          r: 34 + Math.random() * (isMobile ? 90 : 130),
          alpha: 0.07 + Math.random() * 0.14,
          color: white
            ? ([255, 255, 255] as [number, number, number])
            : local,
          phase: Math.random() * Math.PI * 2,
          speed: 0.0035 + Math.random() * 0.007,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const drawRibbon = (phase: number) => {
      // Wide soft glow band (heavy blur feel via large radials)
      const steps = 36;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const radius = h * (0.42 + Math.sin(t * Math.PI) * 0.1);

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0, rgba(c, 0.62));
        g.addColorStop(0.3, rgba(c, 0.32));
        g.addColorStop(0.55, rgba(c, 0.12));
        g.addColorStop(0.8, rgba(c, 0.04));
        g.addColorStop(1, rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Saturated luminous core
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const radius = h * 0.18;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0, rgba(c, 0.42));
        g.addColorStop(0.45, rgba(c, 0.16));
        g.addColorStop(1, rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // White hotspots (esp. purple → blue zone)
      for (const t of [0.48, 0.58, 0.72, 0.82]) {
        const pulse = 0.55 + 0.45 * Math.sin(time * 0.0009 + t * 8);
        const p = wavePoint(t, phase, Math.sin(time * 0.0007 + t) * 8);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, h * 0.12);
        g.addColorStop(0, `rgba(255,255,255,${0.28 * pulse})`);
        g.addColorStop(0.5, `rgba(255,255,255,${0.08 * pulse})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, h * 0.12, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const drawBokeh = (phase: number) => {
      for (const b of bokehs) {
        if (!reduced) b.phase += b.speed;
        const sway = Math.sin(b.phase) * 12;
        const lift = Math.cos(b.phase * 0.65) * 18;
        const pt = wavePoint(b.t, phase, b.off);
        const x = pt.x + sway;
        const y = pt.y + lift;

        const g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        g.addColorStop(0, rgba(b.color, b.alpha));
        g.addColorStop(0.4, rgba(b.color, b.alpha * 0.4));
        g.addColorStop(1, rgba(b.color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();

        if (b.r > 36) {
          ctx.beginPath();
          ctx.arc(x - b.r * 0.18, y - b.r * 0.18, b.r * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${b.alpha * 0.5})`;
          ctx.fill();
        }
      }
    };

    const drawParticles = (phase: number) => {
      type Pos = { x: number; y: number; a: number; r: number; filament: number };
      const positions: Pos[] = new Array(particles.length);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;
        if (!reduced) {
          p.t += p.drift;
          if (p.t < 0) p.t += 1;
          if (p.t > 1) p.t -= 1;
          p.twinkle += p.twinkleSpeed;
        }
        const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(p.twinkle));
        const pt = wavePoint(p.t, phase, p.off);
        positions[i] = {
          x: pt.x,
          y: pt.y,
          a: Math.min(1, p.baseAlpha * pulse),
          r: p.r,
          filament: p.filament,
        };
      }

      // Fine constellation / neural web along filaments
      ctx.lineWidth = 0.45;
      const byFilament = new Map<number, Pos[]>();
      for (const p of positions) {
        if (p.filament < 0) continue;
        const list = byFilament.get(p.filament) ?? [];
        list.push(p);
        byFilament.set(p.filament, list);
      }

      for (const list of byFilament.values()) {
        list.sort((a, b) => a.x - b.x);
        for (let i = 0; i < list.length; i++) {
          const a = list[i]!;
          let links = 0;
          for (let j = i + 1; j < list.length && links < 3; j++) {
            const b = list[j]!;
            if (b.x - a.x > 38) break;
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 38) {
              const alpha = (1 - dist / 38) * 0.32 * Math.min(a.a, b.a);
              ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              links++;
            }
          }
          // Cross-link to neighboring filament occasionally
          if (i % 5 === 0 && a.filament >= 0) {
            const neighbor = byFilament.get(a.filament + 1);
            if (neighbor) {
              let best: Pos | null = null;
              let bestD = 30;
              for (const n of neighbor) {
                const d = Math.hypot(a.x - n.x, a.y - n.y);
                if (d < bestD) {
                  bestD = d;
                  best = n;
                }
              }
              if (best) {
                ctx.strokeStyle = `rgba(255,255,255,${0.12 * a.a})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(best.x, best.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Sparkle dots (no per-dot shadowBlur — cheaper + sharper like reference)
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const p of positions) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a * 0.95})`;
        ctx.fill();
        if (p.r > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${p.a * 0.18})`;
          ctx.fill();
        }
      }
      ctx.restore();
    };

    const drawSeams = (phase: number) => {
      if (reduced) return;
      const seams = [0.26, 0.42, 0.58, 0.74];
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let s = 0; s < seams.length; s++) {
        const t = seams[s]!;
        const pulse = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(time * 0.0011 + s * 1.8));
        const p = wavePoint(t, phase, Math.sin(time * 0.0008 + s) * 6);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, h * 0.16);
        g.addColorStop(0, `rgba(255,255,255,${0.38 * pulse})`);
        g.addColorStop(0.35, `rgba(255,255,255,${0.12 * pulse})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, 12, h * 0.16, -0.35 + s * 0.15, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      const phase = reduced ? 0.4 : time * 0.00028;

      drawRibbon(phase);
      drawBokeh(phase);
      drawParticles(phase);
      drawSeams(phase);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      paint();
      return () => window.removeEventListener("resize", resize);
    }

    let last = performance.now();
    const loop = (now: number) => {
      time += now - last;
      last = now;
      paint();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="aurora-particles" />;
}

export function WaveBackground() {
  return (
    <div
      className="wave-bg-root aurora-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="aurora-base" />
      <AuroraCanvas />
      <div className="wave-bg-soft-glow" />
    </div>
  );
}
