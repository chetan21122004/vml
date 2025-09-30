import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth3D from '@/components/Earth3D';
import LoadingProgress from '@/components/LoadingProgress';

interface WelcomeProps {
  onComplete: () => void;
}

const Welcome = ({ onComplete }: WelcomeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      onComplete();
    }, 1500); // Show completed earth for a moment before transitioning
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* 3D Earth Scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <directionalLight 
              position={[10, 5, 5]} 
              intensity={1.2} 
              color="#ffffff"
            />
            <pointLight 
              position={[-10, -5, -5]} 
              intensity={0.5} 
              color="#4fc3f7" 
            />
            
            {/* Stars background */}
            <Stars 
              radius={300} 
              depth={60} 
              count={3000} 
              factor={7} 
              saturation={0.8} 
              fade={true}
            />
            
            {/* Earth */}
            <Earth3D />
            
            {/* Orbit controls for subtle movement */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={!isLoading}
              autoRotate={!isLoading}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI * 0.7}
              minPolarAngle={Math.PI * 0.3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading UI Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingProgress onComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Completion Message */}
      {!isLoading && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
          <div className="text-center text-white space-y-6">
            <div className="text-5xl font-bold text-gradient bg-white bg-clip-text text-transparent mb-4">
              Welcome to GlobalShip
            </div>
            <div className="text-xl text-white/90">
              Your Global Logistics Partner
            </div>
            <div className="flex justify-center">
              <div className="animate-bounce mt-4">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle grid overlay for tech feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
    </div>
  );
};

export default Welcome;