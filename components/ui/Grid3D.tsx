'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Grid3DProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

export function Grid3D({ 
  className = '', 
  intensity = 'medium',
  animated = true 
}: Grid3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animated) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animated]);

  const intensitySettings = {
    low: {
      opacity: 0.1,
      gridSize: '80px 80px',
      lineWidth: '1px',
    },
    medium: {
      opacity: 0.15,
      gridSize: '60px 60px',
      lineWidth: '1px',
    },
    high: {
      opacity: 0.2,
      gridSize: '40px 40px',
      lineWidth: '2px',
    },
  };

  const settings = intensitySettings[intensity];

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={animated ? {
        x: mousePosition.x * 10,
        y: mousePosition.y * 10,
        rotateX: mousePosition.y * 2,
        rotateY: mousePosition.x * 2,
      } : {}}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, ${settings.opacity}) ${settings.lineWidth}, transparent ${settings.lineWidth}),
          linear-gradient(90deg, rgba(255, 255, 255, ${settings.opacity}) ${settings.lineWidth}, transparent ${settings.lineWidth})
        `,
        backgroundSize: settings.gridSize,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Grid Intersection Points */}
      {animated && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${(i % 5) * 25}%`,
            top: `${Math.floor(i / 5) * 25}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (i * 0.1),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Perspective Lines */}
      {animated && (
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`perspective-${i}`}
              className="absolute bg-white/10 h-px"
              style={{
                left: '0%',
                right: '0%',
                top: `${25 + i * 16.67}%`,
                transformOrigin: 'center',
              }}
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}