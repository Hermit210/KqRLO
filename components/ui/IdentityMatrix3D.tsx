'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { User, Fingerprint, Scan, UserCheck } from 'lucide-react';

export function IdentityMatrix3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2.5;
      const y = (e.clientY / window.innerHeight - 0.5) * 2.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Central Identity Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 12,
          y: mousePosition.y * 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 20,
        }}
      >
        <div className="relative w-36 h-36 perspective-1000">
          <motion.div
            className="w-full h-full border-2 border-white/25 rounded-full wireframe flex items-center justify-center"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <User className="h-16 w-16 text-white/60" />
          </motion.div>
        </div>
      </motion.div>

      {/* Identity Verification Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-full h-full border border-white/10 rounded-full" />
          {/* Verification Points */}
          {[...Array(6)].map((_, j) => {
            const angle = (j * 60) * (Math.PI / 180);
            const radius = (150 + i * 80) / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={`point-${i}-${j}`}
                className="absolute top-1/2 left-1/2 w-3 h-3 border border-white/20 rounded-full"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + j * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: j * 0.3,
                }}
              />
            );
          })}
        </motion.div>
      ))}

      {/* Biometric Scanners */}
      {[
        { Icon: Fingerprint, position: { top: '15%', left: '20%' } },
        { Icon: Scan, position: { top: '20%', right: '25%' } },
        { Icon: UserCheck, position: { bottom: '20%', left: '30%' } },
        { Icon: User, position: { bottom: '15%', right: '20%' } },
      ].map(({ Icon, position }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          animate={{
            y: [0, -15, 0],
            rotateZ: [0, 10, -10, 0],
            x: mousePosition.x * (4 + index),
            y: mousePosition.y * (4 + index),
          }}
          transition={{
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateZ: {
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              type: 'spring',
              stiffness: 50,
              damping: 25,
            },
          }}
        >
          <div className="w-14 h-14 border border-white/20 wireframe rounded-xl flex items-center justify-center">
            <Icon className="h-7 w-7 text-white/50" />
          </div>
        </motion.div>
      ))}

      {/* Identity Data Streams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            top: '10%',
            bottom: '10%',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Verification Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  );
}