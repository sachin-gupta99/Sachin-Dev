import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Crystal() {
  const solid = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (solid.current) {
      solid.current.rotation.x = t * 0.08 + mouse.y * 0.18;
      solid.current.rotation.y = t * 0.12 + mouse.x * 0.22;
    }
    if (wire.current) {
      wire.current.rotation.x = -t * 0.04 + mouse.y * 0.1;
      wire.current.rotation.y = -t * 0.06 + mouse.x * 0.12;
    }
  });

  return (
    <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={solid}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#1a1a35"
          emissive="#2a2a55"
          emissiveIntensity={0.25}
          roughness={0.65}
          metalness={0.35}
          flatShading
        />
      </mesh>
      <mesh ref={wire} scale={1.02}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#9a78ff" wireframe transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={0.7} color="#c4b1ff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.25} color="#4ee3a5" />
      <Suspense fallback={null}>
        <Crystal />
      </Suspense>
    </Canvas>
  );
}
