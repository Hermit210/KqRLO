'use client';

import { motion } from 'framer-motion';

interface Loading3DProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Loading3D({ size = 'md', className = '' }: Loading3DProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Rotating Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-white/20 border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Inner Rotating Ring */}
      <motion.div
        className="absolute inset-2 border border-white/30 border-b-white rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Center Pulsing Dot */}
      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${dotSize[size]} bg-white rounded-full`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Orbiting Dots */}
      {[...Array(3)].map((_, i) => {
        const angle = (i * 120) * (Math.PI / 180);
        const radius = size === 'sm' ? 12 : size === 'md' ? 18 : 24;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${dotSize[size]} bg-white/60 rounded-full`}
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius,
                Math.cos(angle) * radius
              ],
              y: [
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI) * radius,
                Math.sin(angle) * radius
              ],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2
            }}
          />
        );
      })}
    </div>
  );
}