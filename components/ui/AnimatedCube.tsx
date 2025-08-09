'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AnimatedCube() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-80 h-80 mx-auto perspective-1000">
      <motion.div
        className="relative w-full h-full transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
        }}
      >
        {/* Cube faces - Ultra-black aesthetic */}
        {[
          { name: 'front', transform: 'translateZ(80px)' },
          { name: 'back', transform: 'translateZ(-80px) rotateY(180deg)' },
          { name: 'right', transform: 'rotateY(90deg) translateZ(80px)' },
          { name: 'left', transform: 'rotateY(-90deg) translateZ(80px)' },
          { name: 'top', transform: 'rotateX(90deg) translateZ(80px)' },
          { name: 'bottom', transform: 'rotateX(-90deg) translateZ(80px)' },
        ].map((face, index) => (
          <motion.div
            key={face.name}
            className="absolute w-40 h-40 border border-white/10 backdrop-blur-sm"
            style={{
              transform: face.transform,
              left: '50%',
              top: '50%',
              marginLeft: '-80px',
              marginTop: '-80px',
              background: `rgba(255, 255, 255, ${0.02 + index * 0.005})`,
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 255, 255, 0.05)',
                '0 0 30px rgba(255, 255, 255, 0.08)',
                '0 0 20px rgba(255, 255, 255, 0.05)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          >
            {/* Face content - geometric elements */}
            <div className="absolute inset-4 flex items-center justify-center">
              <div 
                className="w-6 h-6 border border-white/20 animate-pulse" 
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }} 
              />
              <div 
                className="absolute top-2 right-2 w-3 h-3 bg-white/30 animate-ping" 
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                }} 
              />
              <div 
                className="absolute bottom-2 left-2 w-2 h-2 bg-white/40 animate-bounce" 
                style={{ 
                  animationDelay: `${index * 0.7}s`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }} 
              />
            </div>
          </motion.div>
        ))}

        {/* Floating geometric particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20"
            style={{
              left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 140}px`,
              top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 140}px`,
              clipPath: i % 3 === 0 
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
                : i % 3 === 1 
                ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                : 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/3 rounded-full blur-3xl animate-pulse" />
      
      {/* Minimal base platform */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-sm" />
    </div>
  );
}