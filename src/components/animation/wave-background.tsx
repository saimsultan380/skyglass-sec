"use client";

import { useEffect, useRef } from "react";

/* ─── 2-Colour Palette: Electric Blue + Pure White ────────────────────────── */
/* Ribbon stays blue throughout — white comes from sparkle particles only.    */
const RIBBON = [
  { t: 0.00, color: [ 60, 140, 255] as [number, number, number] }, // bright blue
  { t: 0.25, color: [ 35, 115, 255] as [number, number, number] }, // mid blue
  { t: 0.50, color: [ 23, 107, 255] as [number, number, number] }, // #176BFF core
  { t: 0.75, color: [ 35, 115, 255] as [number, number, number] }, // mid blue
  { t: 1.00, color: [ 60, 140, 255] as [number, number, number] }, // bright blue
];

type Particle = {
  t: number; off: number; r: number; baseAlpha: number;
  twinkle: number; twinkleSpeed: number; drift: number; filament: number;
};
type Bokeh = {
  t: number; off: number; r: number; alpha: number;
  color: [number, number, number]; phase: number; speed: number;
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
  return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a.toFixed(3)})`;
}

function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0, w = 0, h = 0, time = 0;
    let particles: Particle[] = [];
    let bokehs: Bokeh[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Diagonal wave spine: bottom-left → top-right ── */
    const waveY = (t: number, phase: number) => {
      const diag = h * (0.68 - t * 0.36);
      const isMob = w < 640;
      const amp = isMob
        ? Math.min(w * 0.06, 26)
        : Math.min(w * 0.032, h * 0.08, 65);
      return (
        diag
        + Math.sin(t * Math.PI * 2.10 + phase)        * amp
        + Math.sin(t * Math.PI * 3.80 + phase * 1.30) * amp * 0.30
        + Math.sin(t * Math.PI * 6.30 + phase * 0.60) * amp * 0.10
      );
    };

    const wavePoint = (t: number, phase: number, off: number) => {
      const x = t * w;
      const y = waveY(t, phase);
      const d = 0.002;
      const y2 = waveY(Math.min(1, t + d), phase);
      const dx = d * w, dy = y2 - y;
      const len = Math.hypot(dx, dy) || 1;
      return { x: x + (-dy / len) * off, y: y + (dx / len) * off };
    };

    /* ── Particle + bokeh pool ── */
    const init = () => {
      const isMob = w < 640;
      const filamentCount = isMob ? 11 : 13;
      const perFilament   = isMob ? 75  : 85;
      const spacing       = isMob ? 5.5 : 8;
      particles = [];

      for (let f = 0; f < filamentCount; f++) {
        const filamentOff = (f - (filamentCount - 1) / 2) * spacing;
        for (let i = 0; i < perFilament; i++) {
          const t = i / (perFilament - 1) + (Math.random() - 0.5) * 0.012;
          particles.push({
            t:            Math.min(1, Math.max(0, t)),
            off:          filamentOff + (Math.random() - 0.5) * spacing * 0.65,
            r:            Math.random() < 0.18 ? 1.4 + Math.random() * 1.8 : 0.4 + Math.random() * 1.0,
            baseAlpha:    0.55 + Math.random() * 0.45,
            twinkle:      Math.random() * Math.PI * 2,
            twinkleSpeed: 0.014 + Math.random() * 0.030,
            drift:        (Math.random() - 0.5) * 0.00016,
            filament:     f,
          });
        }
      }

      const extras      = isMob ? 65 : 150;
      const extraSpread = isMob ? Math.min(h * 0.09, 58) : h * 0.28;
      for (let i = 0; i < extras; i++) {
        particles.push({
          t:            Math.random(),
          off:          (Math.random() - 0.5) * extraSpread,
          r:            0.35 + Math.random() * 1.2,
          baseAlpha:    0.18 + Math.random() * 0.38,
          twinkle:      Math.random() * Math.PI * 2,
          twinkleSpeed: 0.010 + Math.random() * 0.026,
          drift:        (Math.random() - 0.5) * 0.00020,
          filament:     -1,
        });
      }

      /* Bokeh — blue or white, no other colours */
      const bokehSpread = isMob ? Math.min(h * 0.11, 72) : h * 0.32;
      bokehs = Array.from({ length: isMob ? 13 : 24 }, () => {
        const t = Math.random();
        const isWhite = Math.random() > 0.55; // mix of blue + white bokeh
        const color: [number, number, number] = isWhite
          ? [255, 255, 255]
          : lerpColor(t);
        return {
          t,
          off:   (Math.random() - 0.5) * bokehSpread,
          r:     isMob ? 18 + Math.random() * 46 : 38 + Math.random() * 140,
          alpha: 0.05 + Math.random() * 0.10,
          color,
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.006,
        };
      });
    };

    /* ── Resize ── */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width  = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    /* ── Wide soft glow band ── */
    const drawRibbon = (phase: number) => {
      const isMob = w < 640;
      const steps = isMob ? 32 : 38;
      // Larger radii = wave visible even under section overlays
      const softR = isMob ? Math.min(h * 0.32, w * 0.60) : h * 0.60;
      const coreR = isMob ? Math.min(h * 0.12, w * 0.28) : h * 0.22;

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const radius = softR * (0.90 + Math.sin(t * Math.PI) * 0.11);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0,    rgba(c, isMob ? 0.75 : 0.82)); // strong centre
        g.addColorStop(0.25, rgba(c, 0.45));
        g.addColorStop(0.50, rgba(c, 0.20));
        g.addColorStop(0.75, rgba(c, 0.07));
        g.addColorStop(1,    rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, coreR);
        g.addColorStop(0,    rgba(c, 0.70));
        g.addColorStop(0.35, rgba(c, 0.30));
        g.addColorStop(1,    rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreR, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    /* ── Bokeh blobs ── */
    const drawBokeh = (phase: number) => {
      for (const b of bokehs) {
        if (!reduced) b.phase += b.speed;
        const sway = Math.sin(b.phase) * 12;
        const lift = Math.cos(b.phase * 0.62) * 18;
        const pt   = wavePoint(b.t, phase, b.off);
        const x = pt.x + sway, y = pt.y + lift;
        const g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        g.addColorStop(0,   rgba(b.color, b.alpha));
        g.addColorStop(0.4, rgba(b.color, b.alpha * 0.36));
        g.addColorStop(1,   rgba(b.color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /* ── Particles + neural-web ── */
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
        const pt    = wavePoint(p.t, phase, p.off);
        positions[i] = { x: pt.x, y: pt.y, a: Math.min(1, p.baseAlpha * pulse), r: p.r, filament: p.filament };
      }

      /* neural-web lines */
      ctx.lineWidth = 0.38;
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
            if (b.x - a.x > 36) break;
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 36) {
              const alpha = (1 - dist / 36) * 0.28 * Math.min(a.a, b.a);
              ctx.strokeStyle = `rgba(180,215,255,${alpha.toFixed(3)})`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
              links++;
            }
          }
          if (i % 5 === 0) {
            const nb = byFilament.get(a.filament + 1);
            if (nb) {
              let best: Pos | null = null, bestD = 28;
              for (const n of nb) {
                const d = Math.hypot(a.x - n.x, a.y - n.y);
                if (d < bestD) { bestD = d; best = n; }
              }
              if (best) {
                ctx.strokeStyle = `rgba(180,215,255,${(0.09 * a.a).toFixed(3)})`;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(best.x, best.y); ctx.stroke();
              }
            }
          }
        }
      }

      /* sparkle dots */
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const p of positions) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(p.a * 0.95).toFixed(3)})`;
        ctx.fill();
        if (p.r > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,225,255,${(p.a * 0.16).toFixed(3)})`;
          ctx.fill();
        }
      }
      ctx.restore();
    };

    /* ── Paint loop ── */
    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      const phase = reduced ? 0.4 : time * 0.00026;
      drawRibbon(phase);
      drawBokeh(phase);
      drawParticles(phase);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduced) { paint(); return () => window.removeEventListener("resize", resize); }

    let last = performance.now();
    const loop = (now: number) => {
      time += now - last; last = now;
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

/* ── Public export ── */
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
