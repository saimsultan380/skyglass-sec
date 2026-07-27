"use client";

import { useEffect, useRef } from "react";

/* ─── Palette ── orange → hot-pink → magenta → violet → electric-blue → cyan ─ */
const RIBBON = [
  { t: 0.00, color: [255, 130,  20] as [number,number,number] }, // orange
  { t: 0.10, color: [255,  70,  70] as [number,number,number] }, // orange-red
  { t: 0.22, color: [255,  25, 130] as [number,number,number] }, // hot pink
  { t: 0.36, color: [240,  20, 175] as [number,number,number] }, // deep pink
  { t: 0.50, color: [195,  40, 240] as [number,number,number] }, // magenta-violet
  { t: 0.63, color: [110,  70, 255] as [number,number,number] }, // violet-blue
  { t: 0.76, color: [ 40, 130, 255] as [number,number,number] }, // electric blue
  { t: 0.88, color: [  0, 190, 255] as [number,number,number] }, // sky blue
  { t: 1.00, color: [ 30, 240, 255] as [number,number,number] }, // cyan
];

type Particle = {
  t: number; off: number; r: number; baseAlpha: number;
  twinkle: number; twinkleSpeed: number; drift: number; filament: number;
};
type Bokeh = {
  t: number; off: number; r: number; alpha: number;
  color: [number,number,number]; phase: number; speed: number;
};

/* ── helpers ─────────────────────────────────────────────────────────────── */
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
function rgba(c: [number,number,number], a: number) {
  return `rgba(${c[0]|0},${c[1]|0},${c[2]|0},${a.toFixed(3)})`;
}

/* ── Canvas component ────────────────────────────────────────────────────── */
function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, time = 0;
    let particles: Particle[] = [];
    let bokehs: Bokeh[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Wave spine: strong diagonal bottom-left → top-right ── */
    const waveY = (t: number, phase: number) => {
      // diagonal base: left side at ~68 % height, right side at ~30 % height
      const diag = h * (0.68 - t * 0.38);
      const isMob = w < 640;
      // amplitude is intentionally modest so the ribbon stays thin & sharp
      const amp = isMob
        ? Math.min(w * 0.07, 28)
        : Math.min(w * 0.038, h * 0.09, 72);
      return (
        diag
        + Math.sin(t * Math.PI * 2.15 + phase)         * amp
        + Math.sin(t * Math.PI * 3.85 + phase * 1.35)  * amp * 0.32
        + Math.sin(t * Math.PI * 6.40 + phase * 0.62)  * amp * 0.11
      );
    };

    /* t-parallel unit normal → place things offset from the spine */
    const wavePoint = (t: number, phase: number, off: number) => {
      const x = t * w;
      const y = waveY(t, phase);
      const d = 0.002;
      const y2 = waveY(Math.min(1, t + d), phase);
      const dx = d * w, dy = y2 - y;
      const len = Math.hypot(dx, dy) || 1;
      return { x: x + (-dy / len) * off, y: y + (dx / len) * off };
    };

    /* ── Particle + bokeh pool ─────────────────────────────── */
    const init = () => {
      const isMob = w < 640;
      const filamentCount = isMob ? 12 : 14;
      const perFilament  = isMob ? 80 : 90;
      const spacing      = isMob ? 5.5 : 8;

      particles = [];
      for (let f = 0; f < filamentCount; f++) {
        const filamentOff = (f - (filamentCount - 1) / 2) * spacing;
        for (let i = 0; i < perFilament; i++) {
          const t = i / (perFilament - 1) + (Math.random() - 0.5) * 0.012;
          particles.push({
            t:           Math.min(1, Math.max(0, t)),
            off:         filamentOff + (Math.random() - 0.5) * spacing * 0.65,
            r:           Math.random() < 0.18
                           ? 1.5 + Math.random() * 1.8
                           : 0.4 + Math.random() * 1.0,
            baseAlpha:   0.55 + Math.random() * 0.45,
            twinkle:     Math.random() * Math.PI * 2,
            twinkleSpeed:0.014 + Math.random() * 0.030,
            drift:       (Math.random() - 0.5) * 0.00016,
            filament:    f,
          });
        }
      }

      // sparse outer sparkles
      const extras      = isMob ?  70 : 160;
      const extraSpread = isMob ? Math.min(h * 0.09, 60) : h * 0.30;
      for (let i = 0; i < extras; i++) {
        particles.push({
          t:           Math.random(),
          off:         (Math.random() - 0.5) * extraSpread,
          r:           0.35 + Math.random() * 1.3,
          baseAlpha:   0.18 + Math.random() * 0.38,
          twinkle:     Math.random() * Math.PI * 2,
          twinkleSpeed:0.010 + Math.random() * 0.026,
          drift:       (Math.random() - 0.5) * 0.00020,
          filament:    -1,
        });
      }

      const bokehSpread = isMob ? Math.min(h * 0.11, 75) : h * 0.34;
      bokehs = Array.from({ length: isMob ? 14 : 26 }, () => {
        const t = Math.random();
        const local = lerpColor(t);
        // Keep bokeh coloured — white blobs < 10 % chance to avoid oval artifacts
        const white = Math.random() > 0.90;
        return {
          t,
          off:   (Math.random() - 0.5) * bokehSpread,
          r:     isMob ? 20 + Math.random() * 50 : 40 + Math.random() * 150,
          alpha: 0.04 + Math.random() * 0.07,   // much lower — no visible blobs
          color: white ? [255,255,255] as [number,number,number] : local,
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.006,
        };
      });
    };

    /* ── Resize ────────────────────────────────────────────── */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width  = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    /* ── Wide soft glow band ───────────────────────────────── */
    const drawRibbon = (phase: number) => {
      const isMob = w < 640;
      const steps  = isMob ? 34 : 40;
      const softR  = isMob
        ? Math.min(h * 0.26, w * 0.52)
        : h * 0.52;
      const coreR  = isMob ? Math.min(h * 0.10, w * 0.24) : h * 0.20;

      // wide atmospheric halo
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const radius = softR * (0.88 + Math.sin(t * Math.PI) * 0.13);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0,    rgba(c, isMob ? 0.60 : 0.68));
        g.addColorStop(0.28, rgba(c, 0.32));
        g.addColorStop(0.55, rgba(c, 0.12));
        g.addColorStop(0.80, rgba(c, 0.04));
        g.addColorStop(1,    rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // saturated luminous core
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = wavePoint(t, phase, 0);
        const c = lerpColor(t);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, coreR);
        g.addColorStop(0,    rgba(c, 0.50));
        g.addColorStop(0.40, rgba(c, 0.20));
        g.addColorStop(1,    rgba(c, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreR, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    /* ── Bokeh blobs ───────────────────────────────────────── */
    const drawBokeh = (phase: number) => {
      for (const b of bokehs) {
        if (!reduced) b.phase += b.speed;
        const sway = Math.sin(b.phase) * 14;
        const lift = Math.cos(b.phase * 0.62) * 20;
        const pt   = wavePoint(b.t, phase, b.off);
        const x = pt.x + sway, y = pt.y + lift;

        const g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        g.addColorStop(0,   rgba(b.color, b.alpha));
        g.addColorStop(0.4, rgba(b.color, b.alpha * 0.38));
        g.addColorStop(1,   rgba(b.color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // inner rim highlight on large blobs
        if (b.r > 38) {
          ctx.beginPath();
          ctx.arc(x - b.r * 0.18, y - b.r * 0.18, b.r * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${(b.alpha * 0.55).toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    /* ── Particles + neural-web lines ─────────────────────── */
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

      /* neural-web lines — same filament + cross-filament */
      ctx.lineWidth = 0.40;
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
              const alpha = (1 - dist / 36) * 0.30 * Math.min(a.a, b.a);
              ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
              links++;
            }
          }
          // occasional cross-filament link
          if (i % 5 === 0) {
            const nb = byFilament.get(a.filament + 1);
            if (nb) {
              let best: Pos | null = null, bestD = 28;
              for (const n of nb) {
                const d = Math.hypot(a.x - n.x, a.y - n.y);
                if (d < bestD) { bestD = d; best = n; }
              }
              if (best) {
                ctx.strokeStyle = `rgba(255,255,255,${(0.10 * a.a).toFixed(3)})`;
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
          ctx.fillStyle = `rgba(255,255,255,${(p.a * 0.16).toFixed(3)})`;
          ctx.fill();
        }
      }
      ctx.restore();
    };

    /* seam hotspots removed — were causing visible white oval artifacts */

    /* ── Paint loop ────────────────────────────────────────── */
    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      const phase = reduced ? 0.4 : time * 0.00027;
      drawRibbon(phase);
      drawBokeh(phase);
      drawParticles(phase);
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
      last  = now;
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

/* ── Public export ──────────────────────────────────────────────────────── */
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
