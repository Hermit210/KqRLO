'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Shield, Lock, Eye, Key, Database, Zap } from 'lucide-react';

export function SecurityMatrix3D() {
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

  const securityNodes = [
    { x: 20, y: 25, icon: Shield, label: 'SHIELD' },
    { x: 80, y: 25, icon: Lock, label: 'LOCK' },
    { x: 20, y: 75, icon: Eye, label: 'PRIVACY' },
    { x: 80, y: 75, icon: Key, label: 'ACCESS' },
    { x: 50, y: 50, icon: Database, label: 'CORE' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Central Security Matrix */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15,
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 40,
          damping: 20,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Matrix Grid */}
        <div className="relative w-96 h-96">
          {/* Grid Lines */}
          {[...Array(8)].map((_, i) => (
            <div key={`h-${i}`}>
              <div
                className="absolute w-full h-px bg-white/10"
                style={{ top: `${i * 12.5}%` }}
              />
              <div
                className="absolute h-full w-px bg-white/10"
                style={{ left: `${i * 12.5}%` }}
              />
            </div>
          ))}

          {/* Security Nodes */}
          {securityNodes.map((node, index) => (
            <motion.div
              key={`node-${index}`}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                y: [0, -8, 0],
                rotateZ: [0, 10, -10, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
            >
              <div className="relative">
                {/* Node Core */}
                <div className="w-16 h-16 border-2 border-white/30 wireframe rounded-xl flex items-center justify-center neon-glow-subtle">
                  <node.icon className="h-8 w-8 text-white/80" />
                </div>
                
                {/* Node Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs text-white/60 font-black tracking-wider">
                    {node.label}
                  </span>
                </div>

                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border border-white/20 rounded-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: index * 0.6,
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Connection Lines */}
          {securityNodes.map((node, index) => (
            securityNodes.slice(index + 1).map((targetNode, targetIndex) => {
              const actualTargetIndex = index + targetIndex + 1;
              return (
                <motion.div
                  key={`connection-${index}-${actualTargetIndex}`}
                  className="absolute bg-white/20 h-px"
                  style={{
                    left: `${Math.min(node.x, targetNode.x)}%`,
                    top: `${Math.min(node.y, targetNode.y) + Math.abs(targetNode.y - node.y) / 2}%`,
                    width: `${Math.abs(targetNode.x - node.x)}%`,
                    transformOrigin: '0 50%',
                    transform: `rotate(${Math.atan2(targetNode.y - node.y, targetNode.x - node.x) * (180 / Math.PI)}deg)`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + index + targetIndex,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (index + actualTargetIndex) * 0.4,
                  }}
                />
              );
            })
          ))}
        </div>
      </motion.div>

      {/* Floating Security Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Security Scan Lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`scan-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            top: `${25 + i * 20}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Rotating Security Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-white/10 rounded-full"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}