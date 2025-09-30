import { useEffect, useState } from 'react';

interface LoadingProgressProps {
  onComplete: () => void;
}

const LoadingProgress = ({ onComplete }: LoadingProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Initializing Global Network...');

  const stages = [
    'Initializing Global Network...',
    'Connecting Shipping Routes...',
    'Loading Container Data...',
    'Establishing Port Connections...',
    'Synchronizing Cargo Systems...',
    'Preparing Logistics Dashboard...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update stage based on progress
        const stageIndex = Math.min(Math.floor((newProgress / 100) * stages.length), stages.length - 1);
        setStage(stages[stageIndex]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        
        return Math.min(newProgress, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center space-y-6">
      {/* Progress Text */}
      <div className="text-white/90 space-y-2">
        <h2 className="text-3xl font-bold text-gradient bg-white bg-clip-text text-transparent">
          GlobalShip Logistics
        </h2>
        <p className="text-lg">{stage}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="w-80 mx-auto">
        <div className="bg-white/20 rounded-full h-2 backdrop-blur-sm">
          <div 
            className="bg-gradient-hero h-2 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        <div className="flex justify-between text-white/70 text-sm mt-2">
          <span>0%</span>
          <span className="font-mono">{Math.round(progress)}%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Dots animation */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.4s'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingProgress;