'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThreeDBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Diamonds */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`diamond-${i}`}
          className="floating-diamond"
          style={{
            width: `${40 + Math.random() * 30}px`,
            height: `${40 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * (8 + i * 2),
            y: mousePosition.y * (8 + i * 2),
          }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Floating Hexagons */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`hexagon-${i}`}
          className="floating-hexagon"
          style={{
            width: `${50 + Math.random() * 35}px`,
            height: `${50 + Math.random() * 35}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: mousePosition.x * (6 + i * 1.5),
            y: mousePosition.y * (6 + i * 1.5),
          }}
          transition={{
            type: 'spring',
            stiffness: 35,
            damping: 22,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="geometric-shape"
          style={{
            width: `${30 + Math.random() * 20}px`,
            height: `${30 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            clipPath: i % 3 === 0 
              ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
              : i % 3 === 1 
              ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
              : 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            x: mousePosition.x * (5 + i),
            y: mousePosition.y * (5 + i),
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              type: 'spring',
              stiffness: 30,
              damping: 20,
            },
            y: {
              type: 'spring',
              stiffness: 30,
              damping: 20,
            },
          }}
        />
      ))}

      {/* Wireframe Cubes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`cube-${i}`}
          className="wireframe"
          style={{
            width: '80px',
            height: '80px',
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
            position: 'absolute',
          }}
          animate={{
            rotateX: 360,
            rotateY: 360,
            x: mousePosition.x * (8 + i * 2),
            y: mousePosition.y * (8 + i * 2),
          }}
          transition={{
            rotate: {
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              type: 'spring',
              stiffness: 40,
              damping: 25,
            },
            y: {
              type: 'spring',
              stiffness: 40,
              damping: 25,
            },
          }}
        />
      ))}

      {/* Holographic Panels */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`panel-${i}`}
          className="holographic"
          style={{
            width: '200px',
            height: '120px',
            left: `${60 + i * 10}%`,
            top: `${30 + i * 20}%`,
            position: 'absolute',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
          }}
          animate={{
            rotateY: [0, 180, 360],
            x: mousePosition.x * (6 + i),
            y: mousePosition.y * (6 + i),
          }}
          transition={{
            rotateY: {
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              type: 'spring',
              stiffness: 35,
              damping: 22,
            },
            y: {
              type: 'spring',
              stiffness: 35,
              damping: 22,
            },
          }}
        />
      ))}

      {/* Perspective Grid */}
      <div 
        className="perspective-grid absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{
          transformOrigin: 'bottom center',
        }}
      />
    </div>
  );
}