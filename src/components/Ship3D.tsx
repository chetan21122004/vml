import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const Ship3D = () => {
  const shipRef = useRef<Group>(null);

  useFrame((state) => {
    if (shipRef.current) {
      shipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      shipRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group ref={shipRef}>
      {/* Ship Hull */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[3, 0.5, 1.2]} />
        <meshStandardMaterial 
          color="#0ea5e9" 
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Ship Deck */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.2, 1]} />
        <meshStandardMaterial color="#075985" />
      </mesh>

      {/* Containers on Deck */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.3, 0]}>
          <boxGeometry args={[0.6, 0.4, 0.4]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#0ea5e9" : "#0c4a6e"}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Ship Bridge */}
      <mesh position={[-1.2, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.8]} />
        <meshStandardMaterial color="#0c4a6e" />
      </mesh>
    </group>
  );
};

export default Ship3D;
