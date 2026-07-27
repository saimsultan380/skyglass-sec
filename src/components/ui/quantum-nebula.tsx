"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Website palette only — used for star / particle animation colours.
 * (Prompt HSL cyan colours are intentionally NOT used.)
 */
export const SITE_STAR_COLORS = [
  "#FFB21A", // Golden Yellow
  "#FF7A18", // Bright Orange
  "#FF405F", // Coral
  "#FF087F", // Hot Pink
  "#EC00BE", // Vibrant Magenta
  "#B21FFF", // Electric Violet
  "#7924E8", // Rich Purple
  "#4937EE", // Indigo
  "#176BFF", // Electric Blue
  "#00CFFF", // Bright Cyan
  "#0754DB", // Deep Blue
] as const;

/** Alias for older imports */
export const AURORA_STOPS = SITE_STAR_COLORS;

const config = {
  particles: {
    countDesktop: 12000,
    countMobile: 6000,
    size: 0.065,
    boxSize: 5.2,
  },
  simulation: {
    noiseSpeed: 0.12,
    noiseScale: 1.15,
    mouseRepulsion: 0.55,
  },
  camera: {
    initialDistance: 5.0,
    parallaxIntensity: 0.22,
  },
};

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const VERTEX = /* glsl */ `
  attribute vec3 aBase;
  attribute float aSeed;
  attribute float aSize;
  attribute vec3 aColor;

  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uNoiseSpeed;
  uniform float uNoiseScale;
  uniform float uMouseRepulsion;
  uniform vec2 uMouse;
  uniform float uBoxSize;

  varying vec3 vColor;
  varying float vAlpha;

  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(
      mix(mix(hash(n), hash(n + 1.0), f.x),
          mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
      mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
          mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y),
      f.z
    );
  }

  // Curl-like swirling field (GPU — same design as prompt, without CPU lag)
  vec3 curlForce(vec3 p, float speed, float scale) {
    float t = speed;
    float s = scale;
    float n1 = noise(p * s + vec3(t, 0.0, 0.0));
    float n2 = noise(p * s + vec3(0.0, t + 17.0, 0.0));
    float n3 = noise(p * s + vec3(0.0, 0.0, t + 31.0));
    vec3 a = vec3(n1, n2, n3);
    vec3 b = vec3(
      noise(p.yzx * s + t),
      noise(p.zxy * s + t * 1.3),
      noise(p.xzy * s + t * 0.7)
    );
    return normalize(a - b + 0.0001);
  }

  void main() {
    vColor = aColor;

    float speed = uTime * uNoiseSpeed;
    vec3 p = aBase;

    // Organic swirl around base position
    vec3 curl = curlForce(p + aSeed, speed, uNoiseScale);
    p += curl * (0.35 + aSeed * 0.25);
    p += vec3(
      sin(speed * 1.4 + aSeed * 20.0) * 0.08,
      cos(speed * 1.1 + aSeed * 14.0) * 0.08,
      sin(speed * 0.9 + aSeed * 9.0) * 0.08
    );

    // Mouse repulsion (prompt-style interaction)
    vec3 mouseTarget = vec3(uMouse.x * (uBoxSize * 0.45), uMouse.y * (uBoxSize * 0.45), 0.0);
    vec3 away = p - mouseTarget;
    float dist = length(away) + 0.12;
    if (dist < 2.2) {
      p += normalize(away) * (uMouseRepulsion / dist);
    }

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    float depth = max(-mvPosition.z, 0.4);
    gl_PointSize = aSize * uPixelRatio * (13.5 / depth);
    gl_Position = projectionMatrix * mvPosition;

    float twinkle = 0.65 + 0.35 * sin(uTime * (1.4 + aSeed * 2.5) + aSeed * 30.0);
    float depthFade = smoothstep(8.5, 1.8, depth);
    vAlpha = twinkle * (0.72 + 0.28 * depthFade);
  }
`;

const FRAGMENT = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft circular star (prompt fragment style + glow halo)
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;

    float core = smoothstep(0.5, 0.0, d);
    float halo = exp(-d * 5.0);
    float strength = max(core * core, halo * 0.8);
    if (strength < 0.015) discard;

    vec3 col = vColor * 1.15;
    col = mix(col, vec3(1.0), core * 0.28);
    col = min(col, vec3(1.0));
    gl_FragColor = vec4(col, min(1.0, strength * vAlpha * 1.15));
  }
`;

type QuantumNebulaProps = {
  className?: string;
};

/**
 * Interactive particle nebula (prompt design) on a transparent / white page bg.
 * Motion + glow stay on the GPU — no 50k CPU simulation / EffectComposer.
 */
export default function QuantumNebula({
  className = "absolute inset-0 w-full h-full",
}: QuantumNebulaProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 640;
    const count = reduced
      ? 1800
      : isMobile
        ? config.particles.countMobile
        : config.particles.countDesktop;
    const box = config.particles.boxSize;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.z = config.camera.initialDistance;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    // Transparent clear → page white shows through (black → white request)
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      display: "block",
    });

    const bases = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      bases[i3] = (Math.random() - 0.5) * box;
      bases[i3 + 1] = (Math.random() - 0.5) * box;
      bases[i3 + 2] = (Math.random() - 0.5) * box;
      seeds[i] = Math.random();
      sizes[i] = config.particles.size * (18 + Math.random() * 34);
      const hex =
        SITE_STAR_COLORS[Math.floor(Math.random() * SITE_STAR_COLORS.length)]!;
      const c = hexToRgb(hex);
      colors[i3] = c[0];
      colors[i3 + 1] = c[1];
      colors[i3 + 2] = c[2];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aBase", new THREE.BufferAttribute(bases, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: dpr },
        uNoiseSpeed: { value: config.simulation.noiseSpeed },
        uNoiseScale: { value: config.simulation.noiseScale },
        uMouseRepulsion: { value: config.simulation.mouseRepulsion },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uBoxSize: { value: box },
      },
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);
    const onMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    let running = true;
    const clock = new THREE.Clock();

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) {
        clock.start();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize, { passive: true });

    const tick = () => {
      if (!running) return;
      const t = reduced ? 0 : clock.getElapsedTime();
      material.uniforms.uTime!.value = t;

      mouse.x += (targetMouse.x - mouse.x) * 0.07;
      mouse.y += (targetMouse.y - mouse.y) * 0.07;
      material.uniforms.uMouse!.value.copy(mouse);

      if (!reduced) {
        const p = config.camera.parallaxIntensity;
        camera.position.x += (mouse.x * p - camera.position.x) * 0.04;
        camera.position.y += (-mouse.y * p - camera.position.y) * 0.04;
        camera.lookAt(scene.position);
        particleSystem.rotation.y = t * 0.02;
        particleSystem.rotation.x = Math.sin(t * 0.15) * 0.04;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}

/** Prompt demo name alias */
export { QuantumNebula as GenerativeArtSceneV3 };
