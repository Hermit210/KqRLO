'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorFollower3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check for interactive elements on mouse move
      const target = e.target;
      if (target && target instanceof HTMLElement) {
        const isInteractive = target.closest('button, a, [role="button"], .interactive');
        setIsHovering(!!isInteractive);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-5 h-5 border-2 border-white rounded-full" />
      </motion.div>

      {/* Trailing Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full opacity-60" />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 1,
        }}
      >
        <div className="w-10 h-10 border border-white/30 rounded-full" />
      </motion.div>

      {/* Particle Trail */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-20"
          animate={{
            x: mousePosition.x - 1,
            y: mousePosition.y - 1,
            scale: isHovering ? 0.5 : 0.3,
            opacity: isHovering ? 0.6 : 0.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 50 - i * 8,
            damping: 10 + i * 2,
            mass: 0.3 + i * 0.1,
          }}
        >
          <div 
            className="w-1 h-1 bg-white rounded-full"
            style={{ 
              opacity: 1 - (i * 0.15),
              transform: `scale(${1 - (i * 0.1)})` 
            }}
          />
        </motion.div>
      ))}
    </>
  );
}