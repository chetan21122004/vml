import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth3D = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Create earth texture using procedural generation since we can't load external images easily
  const createEarthTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create a gradient that looks like earth
    const gradient = ctx.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#1e40af');    // Deep blue oceans
    gradient.addColorStop(0.3, '#0ea5e9');  // Light blue oceans  
    gradient.addColorStop(0.5, '#22c55e');  // Green continents
    gradient.addColorStop(0.7, '#84cc16');  // Light green
    gradient.addColorStop(1, '#fbbf24');    // Sandy areas
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Add some continent-like shapes
    ctx.fillStyle = '#22c55e';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const width = Math.random() * 80 + 20;
      const height = Math.random() * 40 + 10;
      
      ctx.beginPath();
      ctx.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  };

  const earthTexture = createEarthTexture();

  // Rotation animation
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.3; // Smooth rotation
      earthRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1; // Subtle wobble
    }
  });

  return (
    <group>
      {/* Earth Sphere */}
      <Sphere ref={earthRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
        <meshPhongMaterial
          map={earthTexture}
          shininess={100}
          transparent={true}
          opacity={0.95}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.7, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#4fc3f7"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Inner glow */}
      <Sphere args={[2.6, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#81d4fa"
          transparent={true}
          opacity={0.05}
        />
      </Sphere>
    </group>
  );
};

export default Earth3D;