"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uScale;
uniform float uComplexity;
uniform float uDistortion;
uniform float uGlowIntensity;
uniform float uFlowFrequency;
uniform float uContrast;

mat2 rot(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c);
}

void main() {
  float minRes = min(uResolution.x, uResolution.y);
  vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / minRes;
  vec2 p = uv * uScale;
  float t = uTime;

  // Multi-layered domain warping with dynamic complexity
  for(float i = 1.0; i < 20.0; i++) {
    if(i >= uComplexity) break;
    p *= rot(t * 0.08 + i * 0.15);
    p += vec2(
      sin(p.x * i + t),
      cos(p.x * i - t)
    ) * (uDistortion / i);
  }

  // Wave flow blending with dynamic frequency
  float flow1 = 0.5 + 0.5 * sin(p.x * (uFlowFrequency * 0.8) + t);
  float flow2 = 0.5 + 0.5 * sin(p.y * uFlowFrequency + t * 1.1);

  // Mix theme colors (color1, color2, color3)
  vec3 color = mix(uColor1, uColor2, flow1);
  color = mix(color, uColor3, flow2);

  // Core glow
  float dist = length(uv);
  float glow = exp(-dist * 1.5);
  color += uColor3 * glow * uGlowIntensity;

  // Dynamic contrast and saturation mapping
  color = smoothstep(0.0, uContrast, color);

  gl_FragColor = vec4(color, 1.0);
}
`;

interface SynthesisBackgroundProps {
  className?: string;
  speed?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  scale?: number;
  complexity?: number;
  distortion?: number;
  glowIntensity?: number;
  flowFrequency?: number;
  contrast?: number;
  backgroundColor?: string;
}

const Effect = ({
  speed,
  color1,
  color2,
  color3,
  scale,
  complexity,
  distortion,
  glowIntensity,
  flowFrequency,
  contrast,
}: Required<Omit<SynthesisBackgroundProps, "className" | "backgroundColor">>) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
      uScale: { value: scale },
      uComplexity: { value: complexity },
      uDistortion: { value: distortion },
      uGlowIntensity: { value: glowIntensity },
      uFlowFrequency: { value: flowFrequency },
      uContrast: { value: contrast },
    }),
    [],
  );

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uColor1.value.set(color1);
      materialRef.current.uniforms.uColor2.value.set(color2);
      materialRef.current.uniforms.uColor3.value.set(color3);
      materialRef.current.uniforms.uScale.value = scale;
      materialRef.current.uniforms.uComplexity.value = complexity;
      materialRef.current.uniforms.uDistortion.value = distortion;
      materialRef.current.uniforms.uGlowIntensity.value = glowIntensity;
      materialRef.current.uniforms.uFlowFrequency.value = flowFrequency;
      materialRef.current.uniforms.uContrast.value = contrast;
    }
  }, [
    color1,
    color2,
    color3,
    scale,
    complexity,
    distortion,
    glowIntensity,
    flowFrequency,
    contrast,
  ]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value =
        state.clock.getElapsedTime() * speed;
      materialRef.current.uniforms.uResolution.value.set(
        state.size.width,
        state.size.height,
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function SynthesisBackground({
  className,
  speed = 0.2, // Reduced from 0.4 for subtler animation
  // Using site's gradient colors: #ff6b2c, #e91e8c, #7b2fff, #2563eb
  color1 = "#ff6b2c", // Orange
  color2 = "#e91e8c", // Pink
  color3 = "#2563eb", // Blue
  scale = 1.2, // Increased scale to make patterns larger/softer
  complexity = 4.0, // Reduced from 6.0 for softer effect
  distortion = 0.4, // Reduced from 0.6 for gentler distortion
  glowIntensity = 0.25, // Reduced from 0.4 for less intense glow
  flowFrequency = 2.0, // Reduced from 3.0 for slower waves
  contrast = 0.9, // Reduced from 1.2 for softer colors
  backgroundColor = "#ffffff", // White background
}: SynthesisBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden",
        className,
      )}
      style={{ backgroundColor }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-35">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={1}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <Effect
            speed={speed}
            color1={color1}
            color2={color2}
            color3={color3}
            scale={scale}
            complexity={complexity}
            distortion={distortion}
            glowIntensity={glowIntensity}
            flowFrequency={flowFrequency}
            contrast={contrast}
          />
        </Canvas>
      </div>
      {/* Particle sparkle layer */}
      <div className="absolute inset-0 opacity-30">
        <div className="particle-wave-container" />
      </div>
    </div>
  );
}
