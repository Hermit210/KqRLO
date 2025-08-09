'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield, Lock, Eye, Key } from 'lucide-react';

export function SecurityShield3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 3;
      const y = (e.clientY / window.innerHeight - 0.5) * 3;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Central Security Shield */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 10,
          rotateY: mousePosition.x * 5,
          rotateX: -mousePosition.y * 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        <div className="relative w-32 h-32 perspective-1000">
          <motion.div
            className="w-full h-full border-2 border-white/20 rounded-lg flex items-center justify-center wireframe"
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <Shield className="h-16 w-16 text-white/60" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Security Icons */}
      {[
        { Icon: Lock, position: { top: '20%', left: '15%' }, delay: 0 },
        { Icon: Eye, position: { top: '30%', right: '20%' }, delay: 1 },
        { Icon: Key, position: { bottom: '25%', left: '25%' }, delay: 2 },
        { Icon: Shield, position: { bottom: '20%', right: '15%' }, delay: 3 },
      ].map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 180, 360],
            x: mousePosition.x * (3 + index),
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            y: {
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateZ: {
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              type: 'spring',
              stiffness: 50,
              damping: 20,
            },
            opacity: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-12 h-12 border border-white/15 wireframe rounded-lg flex items-center justify-center">
            <Icon className="h-6 w-6 text-white/40" />
          </div>
        </motion.div>
      ))}

      {/* Security Barrier Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`barrier-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{
            top: `${20 + i * 12}%`,
            left: '10%',
            right: '10%',
          }}
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Protective Dome */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}