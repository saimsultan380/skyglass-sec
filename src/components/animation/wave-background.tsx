"use client";

import { useEffect, useRef } from "react";

const BRAND = {
  orange: { r: 255, g: 107, b: 44 },
  pink: { r: 233, g: 30, b: 140 },
  purple: { r: 123, g: 47, b: 255 },
  blue: { r: 37, g: 99, b: 235 },
  cyan: { r: 56, g: 189, b: 248 },
} as const;

type RGB = { r: number; g: number; b: number };

interface WaterDrop {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedY: number;
  speedX: number;
  drift: number;
  phase: number;
  wobble: number;
  color: RGB;
  highlight: number;
  depth: number;
}

interface WaveParticle {
  xRatio: number;
  waveIndex: number;
  phase: number;
  brightness: number;
  sparkle: number;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
}

function lerpColor(a: RGB, b: RGB, t: number): RGB {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

function rgba(c: RGB, alpha: number) {
  return `rgba(${c.r},${c.g},${c.b},${alpha})`;
}

function waveY(
  x: number,
  time: number,
  amplitude: number,
  frequency: number,
  phase: number,
  centerY: number,
) {
  return (
    centerY +
    Math.sin(x * frequency + time + phase) * amplitude +
    Math.sin(x * frequency * 0.52 + time * 0.65 + phase * 1.4) * amplitude * 0.48 +
    Math.sin(x * frequency * 1.35 + time * 1.1 + phase * 0.7) * amplitude * 0.18
  );
}

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animationId = 0;
    let time = 0;
    let scrollY = 0;
    let width = 0;
    let height = 0;

    const drops: WaterDrop[] = [];
    const particles: WaveParticle[] = [];
    const sparkles: Sparkle[] = [];

    const initScene = () => {
      drops.length = 0;
      particles.length = 0;
      sparkles.length = 0;

      const dropCount = Math.min(52, Math.floor(width / 28));
      const palette = [BRAND.pink, BRAND.purple, BRAND.blue, BRAND.orange, BRAND.cyan];

      for (let i = 0; i < dropCount; i += 1) {
        const depth = 0.4 + Math.random() * 0.6;
        drops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: (10 + Math.random() * 34) * depth,
          opacity: (0.1 + Math.random() * 0.22) * depth,
          speedY: (0.15 + Math.random() * 0.35) * depth,
          speedX: (Math.random() - 0.5) * 0.25,
          drift: 0.18 + Math.random() * 0.42,
          phase: Math.random() * Math.PI * 2,
          wobble: 0.5 + Math.random() * 1.2,
          color: palette[i % palette.length]!,
          highlight: 0.25 + Math.random() * 0.45,
          depth,
        });
      }

      const particleCount = Math.min(260, Math.floor(width / 5));
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          xRatio: i / particleCount,
          waveIndex: i % 4,
          phase: Math.random() * Math.PI * 2,
          brightness: 0.4 + Math.random() * 0.6,
          sparkle: Math.random(),
        });
      }

      const sparkleCount = Math.min(90, Math.floor(width / 14));
      for (let i = 0; i < sparkleCount; i += 1) {
        sparkles.push({
          x: Math.random() * width,
          y: height * (0.28 + Math.random() * 0.44),
          size: 0.4 + Math.random() * 1.6,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.8,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initScene();
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const drawWaveRibbon = (
      centerY: number,
      amplitude: number,
      frequency: number,
      phase: number,
      alpha: number,
      colorStart: RGB,
      colorMid: RGB,
      colorEnd: RGB,
    ) => {
      const steps = Math.ceil(width / 3);
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let i = 0; i <= steps; i += 1) {
        const x = (i / steps) * width;
        const y = waveY(x, time, amplitude, frequency, phase, centerY);
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, centerY - amplitude * 2.5, width, centerY + amplitude * 2.5);
      gradient.addColorStop(0, rgba(colorStart, alpha * 0.55));
      gradient.addColorStop(0.35, rgba(colorMid, alpha));
      gradient.addColorStop(0.72, rgba(colorEnd, alpha * 0.95));
      gradient.addColorStop(1, rgba(colorEnd, alpha * 0.5));

      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      for (let i = 0; i <= steps; i += 1) {
        const x = (i / steps) * width;
        const y = waveY(x, time, amplitude, frequency, phase, centerY);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = rgba(colorMid, alpha * 0.35);
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    const drawParticleMesh = (centerY: number) => {
      const points: { x: number; y: number; b: number }[] = [];

      particles.forEach((p) => {
        const x = p.xRatio * width;
        const amp = 28 + p.waveIndex * 10;
        const freq = 0.004 + p.waveIndex * 0.0007;
        const y = waveY(
          x,
          time * (0.82 + p.waveIndex * 0.07),
          amp,
          freq,
          p.phase,
          centerY,
        );
        points.push({ x, y, b: p.brightness });
      });

      ctx.lineWidth = 0.45;
      for (let i = 0; i < points.length - 1; i += 1) {
        const a = points[i]!;
        const b = points[i + 1]!;
        if (Math.abs(a.y - b.y) > 42) continue;

        const t = i / points.length;
        const lineColor = lerpColor(BRAND.orange, BRAND.blue, t);
        ctx.strokeStyle = rgba(lineColor, 0.14);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        if (i % 5 === 0 && i + 6 < points.length) {
          const c = points[i + 6]!;
          if (Math.abs(a.y - c.y) < 30) {
            ctx.strokeStyle = rgba(BRAND.purple, 0.06);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      }

      points.forEach((p, i) => {
        const t = i / points.length;
        const dotColor = lerpColor(BRAND.pink, BRAND.blue, t);
        const glowR = 1.2 + p.b * 1.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = rgba(dotColor, 0.18 + p.b * 0.28);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.45 + p.b * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.45 + p.b * 0.5})`;
        ctx.fill();
      });
    };

    const drawSparkles = (centerY: number) => {
      sparkles.forEach((s) => {
        if (!reducedMotion) {
          s.y += Math.sin(time * s.speed + s.phase) * 0.08;
          s.x += Math.cos(time * s.speed * 0.6 + s.phase) * 0.12;
        }

        const pulse = 0.5 + Math.sin(time * 2.2 + s.phase) * 0.5;
        const alpha = 0.15 + pulse * 0.35;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });
    };

    const drawWaterDrops = () => {
      drops.forEach((drop) => {
        if (!reducedMotion) {
          drop.y -= drop.speedY;
          drop.x +=
            drop.speedX +
            Math.sin(time * drop.drift + drop.phase) * drop.wobble * 0.35;

          if (drop.y < -drop.radius * 3) {
            drop.y = height + drop.radius * 2;
            drop.x = Math.random() * width;
          }
          if (drop.x < -drop.radius) drop.x = width + drop.radius;
          if (drop.x > width + drop.radius) drop.x = -drop.radius;
        }

        const glow = ctx.createRadialGradient(
          drop.x,
          drop.y,
          0,
          drop.x,
          drop.y,
          drop.radius * 1.35,
        );
        glow.addColorStop(0, rgba(drop.color, drop.opacity * 1.1));
        glow.addColorStop(0.35, rgba(drop.color, drop.opacity * 0.55));
        glow.addColorStop(0.7, rgba(drop.color, drop.opacity * 0.12));
        glow.addColorStop(1, rgba(drop.color, 0));

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius * 1.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius * 0.72, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(drop.color, drop.opacity * 0.35);
        ctx.lineWidth = 0.8;
        ctx.stroke();

        const hx = drop.x - drop.radius * 0.22;
        const hy = drop.y - drop.radius * 0.28;
        const highlight = ctx.createRadialGradient(hx, hy, 0, hx, hy, drop.radius * 0.45);
        highlight.addColorStop(0, `rgba(255,255,255,${drop.highlight})`);
        highlight.addColorStop(0.5, `rgba(255,255,255,${drop.highlight * 0.25})`);
        highlight.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(hx, hy, drop.radius * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawAmbientGlow = (centerY: number) => {
      const glow = ctx.createRadialGradient(
        width * 0.5,
        centerY,
        0,
        width * 0.5,
        centerY,
        width * 0.55,
      );
      glow.addColorStop(0, "rgba(233,30,140,0.14)");
      glow.addColorStop(0.35, "rgba(123,47,255,0.1)");
      glow.addColorStop(0.65, "rgba(37,99,235,0.12)");
      glow.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const scrollOffset = reducedMotion ? 0 : (scrollY % (height * 2)) * 0.015;
      const centerY = height * 0.5 + scrollOffset;

      drawAmbientGlow(centerY);

      drawWaveRibbon(centerY - 28, 48, 0.0036, 0, 0.28, BRAND.orange, BRAND.pink, BRAND.purple);
      drawWaveRibbon(centerY - 4, 58, 0.004, 1.1, 0.34, BRAND.pink, BRAND.purple, BRAND.blue);
      drawWaveRibbon(centerY + 22, 50, 0.0034, 2.3, 0.3, BRAND.purple, BRAND.blue, BRAND.cyan);
      drawWaveRibbon(centerY + 8, 38, 0.0048, 3.6, 0.22, BRAND.pink, BRAND.pink, BRAND.purple);

      drawParticleMesh(centerY);
      drawSparkles(centerY);
      drawWaterDrops();

      const verticalFade = ctx.createLinearGradient(0, 0, 0, height);
      verticalFade.addColorStop(0, "rgba(255,255,255,0.78)");
      verticalFade.addColorStop(0.12, "rgba(255,255,255,0.22)");
      verticalFade.addColorStop(0.42, "rgba(255,255,255,0.02)");
      verticalFade.addColorStop(0.58, "rgba(255,255,255,0.02)");
      verticalFade.addColorStop(0.88, "rgba(255,255,255,0.22)");
      verticalFade.addColorStop(1, "rgba(255,255,255,0.8)");
      ctx.fillStyle = verticalFade;
      ctx.fillRect(0, 0, width, height);

      const sideFade = ctx.createLinearGradient(0, 0, width, 0);
      sideFade.addColorStop(0, "rgba(255,255,255,0.42)");
      sideFade.addColorStop(0.1, "rgba(255,255,255,0)");
      sideFade.addColorStop(0.9, "rgba(255,255,255,0)");
      sideFade.addColorStop(1, "rgba(255,255,255,0.42)");
      ctx.fillStyle = sideFade;
      ctx.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        time += 0.018;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="wave-bg-root pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="wave-bg-soft-glow" />
    </div>
  );
}
