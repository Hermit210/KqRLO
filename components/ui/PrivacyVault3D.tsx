'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Database, Lock, Eye, Shield } from 'lucide-react';

export function PrivacyVault3D() {
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
      {/* Central Vault */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 8,
          y: mousePosition.y * 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
        }}
      >
        <div className="relative w-40 h-40 perspective-1000">
          {/* Vault Door */}
          <motion.div
            className="absolute inset-0 border-2 border-white/20 rounded-xl wireframe"
            animate={{
              rotateY: [0, 10, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute inset-4 border border-white/15 rounded-lg flex items-center justify-center">
              <Database className="h-12 w-12 text-white/50" />
            </div>
            {/* Vault Lock Mechanism */}
            <motion.div
              className="absolute top-2 right-2 w-6 h-6 border border-white/20 rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="w-2 h-2 bg-white/30 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Privacy Layers */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`layer-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${200 + i * 60}px`,
            height: `${200 + i * 60}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-full h-full border border-white/5 rounded-full" />
        </motion.div>
      ))}

      {/* Data Encryption Nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const radius = 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={`node-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
              x: mousePosition.x * (2 + i * 0.5),
              y: mousePosition.y * (2 + i * 0.5),
            }}
            transition={{
              scale: {
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                type: 'spring',
                stiffness: 40,
                damping: 20,
              },
              y: {
                type: 'spring',
                stiffness: 40,
                damping: 20,
              },
            }}
          >
            <div className="w-8 h-8 border border-white/20 rounded-lg flex items-center justify-center wireframe">
              <div className="w-2 h-2 bg-white/40 rounded-full" />
            </div>
          </motion.div>
        );
      })}

      {/* Privacy Barriers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`barrier-${i}`}
          className="absolute"
          style={{
            top: `${30 + i * 20}%`,
            left: '20%',
            right: '20%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
}