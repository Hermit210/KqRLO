'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function DataFlow3D() {
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Data Stream Tubes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`tube-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 12}%`,
            top: '10%',
            bottom: '10%',
            width: '4px',
          }}
          animate={{
            x: mousePosition.x * (2 + i * 0.5),
            rotateZ: [0, 2, -2, 0],
          }}
          transition={{
            x: {
              type: 'spring',
              stiffness: 30,
              damping: 20,
            },
            rotateZ: {
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Tube Structure */}
          <div className="w-full h-full bg-gradient-to-b from-white/10 via-white/20 to-white/10 rounded-full" />
          
          {/* Data Packets */}
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={`packet-${i}-${j}`}
              className="absolute w-3 h-8 bg-white/40 rounded-full left-1/2 transform -translate-x-1/2"
              animate={{
                y: ['100%', '-100%'],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: j * (1.5 + i * 0.2),
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Horizontal Data Streams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`h-stream-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: mousePosition.y * (1 + i * 0.3),
          }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
          }}
        >
          {/* Data Points */}
          {[...Array(8)].map((_, j) => (
            <motion.div
              key={`h-point-${i}-${j}`}
              className="absolute w-2 h-2 bg-white/50 rounded-full top-1/2 transform -translate-y-1/2"
              style={{
                left: `${j * 12.5}%`,
              }}
              animate={{
                x: [0, 20, -10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + j * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: j * 0.3 + i * 0.5,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* 3D Data Cubes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`cube-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            width: '20px',
            height: '20px',
          }}
          animate={{
            x: mousePosition.x * (3 + i * 0.5),
            y: mousePosition.y * (3 + i * 0.5),
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            x: {
              type: 'spring',
              stiffness: 25,
              damping: 20,
            },
            y: {
              type: 'spring',
              stiffness: 25,
              damping: 20,
            },
            rotateX: {
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            },
            rotateY: {
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'linear',
            },
            rotateZ: {
              duration: 8 + i,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full border border-white/30 wireframe" />
        </motion.div>
      ))}

      {/* Neural Network Connections */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          const radius = 150;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={`neural-${i}`}
              className="absolute w-3 h-3 bg-white/40 rounded-full"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
            />
          );
        })}
        
        {/* Connection Lines */}
        {[...Array(12)].map((_, i) => {
          const nextIndex = (i + 1) % 12;
          const angle1 = (i * 360) / 12;
          const angle2 = (nextIndex * 360) / 12;
          const radius = 150;
          
          const x1 = Math.cos((angle1 * Math.PI) / 180) * radius;
          const y1 = Math.sin((angle1 * Math.PI) / 180) * radius;
          const x2 = Math.cos((angle2 * Math.PI) / 180) * radius;
          const y2 = Math.sin((angle2 * Math.PI) / 180) * radius;
          
          const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
          
          return (
            <motion.div
              key={`connection-${i}`}
              className="absolute h-px bg-white/20"
              style={{
                left: `${x1}px`,
                top: `${y1}px`,
                width: `${length}px`,
                transformOrigin: '0 50%',
                transform: `rotate(${angle}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}