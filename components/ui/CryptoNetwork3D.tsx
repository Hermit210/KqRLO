'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Cpu, Network, Zap, Hash } from 'lucide-react';

export function CryptoNetwork3D() {
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

  // Network nodes positions
  const networkNodes = [
    { x: 20, y: 20 }, { x: 80, y: 25 }, { x: 15, y: 60 },
    { x: 85, y: 65 }, { x: 50, y: 15 }, { x: 45, y: 85 },
    { x: 30, y: 40 }, { x: 70, y: 45 }, { x: 60, y: 70 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Central Processing Unit */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15,
        }}
        transition={{
          type: 'spring',
          stiffness: 70,
          damping: 25,
        }}
      >
        <div className="relative w-32 h-32 perspective-1000">
          <motion.div
            className="w-full h-full border-2 border-white/30 rounded-lg wireframe flex items-center justify-center"
            animate={{
              rotateX: [0, 15, -15, 0],
              rotateY: [0, 15, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <Cpu className="h-12 w-12 text-white/70" />
            {/* Processing Indicators */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full"
                style={{
                  top: i < 2 ? '10%' : '90%',
                  left: i % 2 === 0 ? '10%' : '90%',
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Network Nodes */}
      {networkNodes.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 0.9, 0.4],
            x: mousePosition.x * (2 + index * 0.3),
            y: mousePosition.y * (2 + index * 0.3),
          }}
          transition={{
            scale: {
              duration: 2 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 2 + index * 0.2,
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
          <div className="w-10 h-10 border border-white/25 wireframe rounded-lg flex items-center justify-center">
            {index % 4 === 0 && <Network className="h-5 w-5 text-white/50" />}
            {index % 4 === 1 && <Hash className="h-5 w-5 text-white/50" />}
            {index % 4 === 2 && <Zap className="h-5 w-5 text-white/50" />}
            {index % 4 === 3 && <div className="w-3 h-3 bg-white/50 rounded-full" />}
          </div>
        </motion.div>
      ))}

      {/* Network Connections */}
      {networkNodes.map((node, index) => {
        const nextNode = networkNodes[(index + 1) % networkNodes.length];
        const x1 = node.x;
        const y1 = node.y;
        const x2 = nextNode.x;
        const y2 = nextNode.y;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        
        return (
          <motion.div
            key={`connection-${index}`}
            className="absolute h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20"
            style={{
              left: `${x1}%`,
              top: `${y1}%`,
              width: `${length * 0.8}%`,
              transformOrigin: '0 50%',
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.5,
            }}
          />
        );
      })}

      {/* Data Packets */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Encryption Waves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
          style={{
            width: `${100 + i * 100}px`,
            height: `${100 + i * 100}px`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );
}