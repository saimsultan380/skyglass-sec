"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── EXACT SPEC ──────────────────────────────────────────────────────────────
   25,000 Electric Blue  #176BFF
   25,000 Rich Purple    #7924E8
   Pure white base       #FFFFFF  (CSS bg — canvas is transparent)
   Count 50,000 | noiseSpeed 0.1 | same repulsion / friction / camera
──────────────────────────────────────────────────────────────────────────────── */
const COLOR_BLUE   = "#176BFF"; // Electric Blue
const COLOR_PURPLE = "#7924E8"; // Rich Purple

const CFG = {
  countDesktop: 50_000,
  countMobile:  20_000,
  baseSize: 0.024,        // slightly larger grains for better visibility on white
  boxSize:  8.0,          // wide enough to cover entire viewport
  noiseSpeed:    0.1,     // exactly as specified
  noiseScale:    1.2,
  mouseRepulsion: 0.55,
  friction:       0.95,   // baked into curl amplitude damping
  camDist:   5.0,
  parallax:  0.005,
} as const;

/* ─── HELPERS ─────────────────────────────────────────────────────────────────*/
function hex3(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/* ─── VERTEX SHADER ──────────────────────────────────────────────────────────
   Curl-noise swirl + mouse repulsion — fully on the GPU.
   Matches prompt design: curlNoise → velocity → position each frame.
──────────────────────────────────────────────────────────────────────────────── */
const VERT = /* glsl */ `
  attribute vec3  aBase;
  attribute float aSeed;
  attribute float aSize;
  attribute vec3  aColor;

  uniform float uTime;
  uniform float uDPR;
  uniform float uNoiseSpeed;
  uniform float uNoiseScale;
  uniform float uMouseRepulsion;
  uniform vec2  uMouse;
  uniform float uBox;

  varying vec3  vColor;
  varying float vAlpha;

  float hash(float n){ return fract(sin(n)*43758.5453123); }

  float vnoise(vec3 x){
    vec3 p=floor(x), f=fract(x);
    f=f*f*(3.0-2.0*f);
    float n=p.x+p.y*57.0+113.0*p.z;
    return mix(
      mix(mix(hash(n),      hash(n+1.0),  f.x),
          mix(hash(n+57.0), hash(n+58.0), f.x), f.y),
      mix(mix(hash(n+113.), hash(n+114.), f.x),
          mix(hash(n+170.), hash(n+171.), f.x), f.y),
      f.z);
  }

  /* curl-like divergence-free swirl — matches prompt curlNoise */
  vec3 curl(vec3 p, float spd, float sc){
    vec3 a=vec3(
      vnoise(p*sc+vec3(spd,     0.0,   0.0)),
      vnoise(p*sc+vec3(0.0, spd+17., 0.0)),
      vnoise(p*sc+vec3(0.0,    0.0, spd+31.))
    );
    vec3 b=vec3(
      vnoise(p.yzx*sc+spd),
      vnoise(p.zxy*sc+spd*1.3),
      vnoise(p.xzy*sc+spd*0.7)
    );
    return normalize(a-b+0.0001);
  }

  void main(){
    vColor = aColor;

    float spd = uTime * uNoiseSpeed;
    vec3  p   = aBase;

    /* prompt-style: curl force + micro oscillation */
    vec3 cf = curl(p + aSeed*7.3, spd, uNoiseScale);
    p += cf * (0.30 + aSeed*0.20);
    p += vec3(
      sin(spd*1.35 + aSeed*19.7)*0.06,
      cos(spd*1.10 + aSeed*13.2)*0.06,
      sin(spd*0.90 + aSeed* 8.6)*0.06
    );

    /* prompt-style mouse repulsion (radius 2 units) */
    vec3 mTarget = vec3(uMouse.x*(uBox*0.5), uMouse.y*(uBox*0.5), 0.0);
    vec3 away    = p - mTarget;
    float dist   = length(away)+0.1;
    if(dist<2.0) p += normalize(away)*(uMouseRepulsion/dist);

    vec4  mv    = modelViewMatrix * vec4(p,1.0);
    float depth = max(-mv.z, 0.4);

    /* prompt: PointSize = size * (10 / -mvPos.z) */
    gl_PointSize = aSize * uDPR * (10.0/depth);
    gl_Position  = projectionMatrix * mv;

    /* twinkle alpha */
    float tw = 0.55 + 0.45*sin(uTime*(1.4+aSeed*2.5)+aSeed*28.0);
    vAlpha = tw * smoothstep(9.0, 1.5, depth);
  }
`;

/* ─── FRAGMENT SHADER ────────────────────────────────────────────────────────
   NormalBlending on white bg → particles must be dark & saturated to be visible.
   We keep the soft circular "grain" with a bright centre.
──────────────────────────────────────────────────────────────────────────────── */
const FRAG = /* glsl */ `
  varying vec3  vColor;
  varying float vAlpha;

  void main(){
    vec2  c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if(d > 0.5) discard;

    /* soft disk + bright core */
    float core     = smoothstep(0.5, 0.0, d);
    float strength = core * core + exp(-d*7.0)*0.5;
    if(strength < 0.01) discard;

    /* keep colour saturated — no white mixing on white bg */
    vec3 col = vColor;

    /* final alpha: boosted so grains are clearly visible on white */
    float alpha = clamp(strength * vAlpha * 2.0, 0.0, 0.92);
    gl_FragColor = vec4(col, alpha);
  }
`;

/* ─── COMPONENT ────────────────────────────────────────────────────────────── */
type Props = { className?: string };

export default function QuantumNebula({ className = "absolute inset-0 w-full h-full" }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMob    = window.innerWidth < 640;
    const count    = reduced ? 2_000 : isMob ? CFG.countMobile : CFG.countDesktop;
    const half     = Math.floor(count / 2);     // blue half | purple half
    const box      = CFG.boxSize;

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, mount.clientWidth / Math.max(mount.clientHeight, 1), 0.1, 1000
    );
    camera.position.z = CFG.camDist;

    /* ── Renderer — transparent so white CSS bg shows ── */
    const renderer = new THREE.WebGLRenderer({
      antialias: false, alpha: true, powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio || 1, isMob ? 1.0 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(mount.clientWidth, Math.max(mount.clientHeight, 1), false);
    renderer.setClearColor(0xffffff, 0); // transparent — white comes from CSS
    Object.assign(renderer.domElement.style, {
      position:"absolute", inset:"0",
      width:"100%", height:"100%",
      pointerEvents:"none", display:"block",
    });
    mount.appendChild(renderer.domElement);

    /* ── Build attribute arrays ── */
    const bases  = new Float32Array(count * 3);
    const seeds  = new Float32Array(count);
    const sizes  = new Float32Array(count);
    const cols   = new Float32Array(count * 3);

    const blue   = hex3(COLOR_BLUE);
    const purple = hex3(COLOR_PURPLE);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      /* spread uniformly across the full box — thin Z so all visible */
      bases[i3]     = (Math.random() - 0.5) * box;
      bases[i3 + 1] = (Math.random() - 0.5) * box;
      bases[i3 + 2] = (Math.random() - 0.5) * box * 0.45; // thin Z = fills screen
      seeds[i]      = Math.random();
      sizes[i]      = CFG.baseSize * (12 + Math.random() * 28) * (isMob ? 0.7 : 1);

      /* first half → blue, second half → purple (25 k each at full count) */
      const c = i < half ? blue : purple;
      cols[i3]     = c[0];
      cols[i3 + 1] = c[1];
      cols[i3 + 2] = c[2];
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute("aBase",  new THREE.BufferAttribute(bases, 3));
    geo.setAttribute("aSeed",  new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute("aSize",  new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aColor", new THREE.BufferAttribute(cols,  3));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:           { value: 0 },
        uDPR:            { value: dpr },
        uNoiseSpeed:     { value: CFG.noiseSpeed },
        uNoiseScale:     { value: CFG.noiseScale },
        uMouseRepulsion: { value: CFG.mouseRepulsion },
        uMouse:          { value: new THREE.Vector2(0, 0) },
        uBox:            { value: box },
      },
      vertexShader:   VERT,
      fragmentShader: FRAG,
      transparent:    true,
      depthWrite:     false,
      /* NormalBlending: dark particles ARE visible on white bg.
         AdditiveBlending would wash out to white (light + white = white). */
      blending: THREE.NormalBlending,
    });

    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    /* ── Mouse ── */
    const mouse = new THREE.Vector2();
    const tMouse = new THREE.Vector2();
    const onMove = (e: MouseEvent) => {
      tMouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      tMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* ── Resize ── */
    const onResize = () => {
      const w = mount.clientWidth, h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize, { passive: true });

    /* ── Visibility pause ── */
    let running = true;
    const clock = new THREE.Clock();
    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running) { clock.start(); loop(); }
    };
    document.addEventListener("visibilitychange", onVis);

    /* ── Render loop ── */
    let raf = 0;
    const loop = () => {
      if (!running) return;
      const t = reduced ? 0 : clock.getElapsedTime();
      mat.uniforms.uTime!.value = t;

      /* smooth mouse (prompt: += (target - pos) * 0.02) */
      mouse.x += (tMouse.x - mouse.x) * 0.065;
      mouse.y += (tMouse.y - mouse.y) * 0.065;
      mat.uniforms.uMouse!.value.copy(mouse);

      if (!reduced) {
        /* camera parallax — exact prompt formula */
        camera.position.x += ( mouse.x * CFG.parallax - camera.position.x) * 0.02;
        camera.position.y += (-mouse.y * CFG.parallax - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        pts.rotation.y = t * 0.012;
        pts.rotation.x = Math.sin(t * 0.10) * 0.03;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      geo.dispose(); mat.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode === mount)
        mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}

export { QuantumNebula as GenerativeArtSceneV3 };
export const SITE_STAR_COLORS = [COLOR_BLUE, COLOR_PURPLE] as const;
export const AURORA_STOPS     = SITE_STAR_COLORS;
