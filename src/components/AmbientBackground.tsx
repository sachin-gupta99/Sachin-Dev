import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WireSphere() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.03 + mouse.x * 0.08;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.08 + mouse.y * 0.05;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[2.4, 3]} />
        <meshBasicMaterial color="#6a2bff" wireframe transparent opacity={0.07} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[3.2, 2]} />
        <meshBasicMaterial color="#9a78ff" wireframe transparent opacity={0.035} />
      </mesh>
    </group>
  );
}

function Dust() {
  const count = 450;
  const positions = useRef<Float32Array>();

  if (!positions.current) {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    positions.current = arr;
  }

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015 + mouse.x * 0.04;
    ref.current.rotation.x = mouse.y * 0.03;
  });

  return (
    <Points ref={ref} positions={positions.current} stride={3}>
      <PointMaterial
        transparent
        color="#c4b1ff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <Suspense fallback={null}>
        <WireSphere />
        <Dust />
      </Suspense>
    </Canvas>
  );
}

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(900px 500px at 85% -10%, rgba(124, 77, 255, 0.09), transparent 60%), radial-gradient(700px 420px at 10% 100%, rgba(78, 227, 165, 0.05), transparent 65%)',
        }}
      />
      <div className="absolute inset-0 opacity-80">
        <Scene />
      </div>
      <div className="absolute inset-0 bg-grid-fade bg-grid-40 opacity-[0.3] mix-blend-overlay" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
