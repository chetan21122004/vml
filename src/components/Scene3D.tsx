import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Container3D from './Container3D';
import Ship3D from './Ship3D';

interface Scene3DProps {
  type?: 'container' | 'ship';
}

const Scene3D = ({ type = 'container' }: Scene3DProps) => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#0ea5e9" />
        
        {/* 3D Models */}
        <Suspense fallback={null}>
          {type === 'container' ? <Container3D /> : <Ship3D />}
        </Suspense>

        {/* Environment */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#e0f2fe" opacity={0.3} transparent />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene3D;
