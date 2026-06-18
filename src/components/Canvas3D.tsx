import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function WavyGrid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const positionAttribute = meshRef.current.geometry.attributes.position;
    
    // Animate the vertices of the plane to create a wave
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      
      // Calculate complex wave height
      const z = Math.sin(x * 0.5 + time * 0.5) * 0.5 + Math.cos(y * 0.5 + time * 0.4) * 0.5;
      positionAttribute.setZ(i, z);
    }
    
    positionAttribute.needsUpdate = true;
    
    // Slow cinematic rotation
    meshRef.current.rotation.z = time * 0.02;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
      {/* 40x40 size, 60x60 segments for smooth waves */}
      <planeGeometry args={[40, 40, 60, 60]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent={true} 
        opacity={0.4} 
        roughness={0}
        metalness={0.8}
      />
    </mesh>
  );
}

export function Canvas3D() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -10, pointerEvents: "none", opacity: 1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Fog makes the grid fade out beautifully into the distance */}
        <fog attach="fog" args={["#000000", 5, 20]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <Environment preset="city" />
        <WavyGrid />
      </Canvas>
    </div>
  );
}
