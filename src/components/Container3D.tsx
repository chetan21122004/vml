import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Container3D = () => {
  const containerRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (containerRef.current) {
      containerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      containerRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      {/* Container Body */}
      <mesh ref={containerRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial 
          color="#0ea5e9" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Container Details */}
      <mesh position={[0, 0, 0.51]}>
        <boxGeometry args={[1.8, 0.8, 0.05]} />
        <meshStandardMaterial color="#075985" />
      </mesh>

      {/* Container Door Lines */}
      <mesh position={[0, 0, 0.52]}>
        <boxGeometry args={[0.02, 0.8, 0.03]} />
        <meshStandardMaterial color="#0c4a6e" />
      </mesh>
    </group>
  );
};

export default Container3D;
