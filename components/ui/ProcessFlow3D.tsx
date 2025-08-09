'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Workflow, Cog, CheckCircle } from 'lucide-react';

export function ProcessFlow3D() {
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

  // Process flow positions
  const processSteps = [
    { x: 15, y: 30, icon: Workflow },
    { x: 40, y: 20, icon: Cog },
    { x: 65, y: 35, icon: ArrowRight },
    { x: 85, y: 25, icon: CheckCircle },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Central Process Pipeline */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 20,
        }}
      >
        <div className="relative w-80 h-20 perspective-1000">
          <motion.div
            className="w-full h-full border border-white/20 rounded-lg wireframe flex items-center justify-center"
            animate={{
              rotateX: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Process Flow Indicators */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/40 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Process Step Nodes */}
      {processSteps.map((step, index) => (
        <motion.div
          key={`step-${index}`}
          className="absolute"
          style={{
            left: `${step.x}%`,
            top: `${step.y}%`,
          }}
          animate={{
            y: [0, -12, 0],
            rotateZ: [0, 5, -5, 0],
            x: mousePosition.x * (3 + index),
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateZ: {
              duration: 6 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              type: 'spring',
              stiffness: 50,
              damping: 25,
            },
            scale: {
              duration: 2 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div className="w-16 h-16 border border-white/25 wireframe rounded-xl flex items-center justify-center">
            <step.icon className="h-8 w-8 text-white/60" />
          </div>
        </motion.div>
      ))}

      {/* Process Flow Lines */}
      {processSteps.slice(0, -1).map((step, index) => {
        const nextStep = processSteps[index + 1];
        const x1 = step.x;
        const y1 = step.y;
        const x2 = nextStep.x;
        const y2 = nextStep.y;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        
        return (
          <motion.div
            key={`flow-${index}`}
            className="absolute h-px bg-gradient-to-r from-white/30 via-white/60 to-white/30"
            style={{
              left: `${x1}%`,
              top: `${y1}%`,
              width: `${length * 0.7}%`,
              transformOrigin: '0 50%',
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.8,
            }}
          />
        );
      })}

      {/* Data Processing Streams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
          style={{
            left: `${25 + i * 10}%`,
            top: '20%',
            bottom: '20%',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Workflow Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute border border-white/10 rounded-full"
          style={{
            width: `${120 + i * 80}px`,
            height: `${120 + i * 80}px`,
            top: `${40 + i * 5}%`,
            left: `${30 + i * 10}%`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      {/* Processing Indicators */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`indicator-${i}`}
          className="absolute w-1 h-1 bg-white/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -25, 50, 0],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}