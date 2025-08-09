'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator3D() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
      style={{ opacity, y }}
    >
      <div className="flex flex-col items-center space-y-2">
        {/* Scroll Text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60 text-xs font-black tracking-widest"
        >
          SCROLL
        </motion.div>

        {/* 3D Scroll Arrow */}
        <motion.div
          className="relative"
          animate={{
            y: [0, 8, 0],
            rotateX: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Back Layer */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{ transform: 'translateZ(-5px)' }}
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </div>

          {/* Main Arrow */}
          <div className="relative z-10 neon-glow-subtle">
            <ChevronDown className="h-6 w-6 text-white" />
          </div>

          {/* Front Highlight */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{ transform: 'translateZ(3px)' }}
          >
            <ChevronDown className="h-6 w-6 text-white" strokeWidth={1} />
          </div>
        </motion.div>

        {/* Progress Line */}
        <motion.div
          className="w-px h-12 bg-white/20 relative overflow-hidden"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/60"
            animate={{ height: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}