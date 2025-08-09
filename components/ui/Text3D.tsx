'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Text3DProps {
  children: ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body';
  animate?: boolean;
  glow?: boolean;
}

export function Text3D({ 
  children, 
  className = '', 
  variant = 'body', 
  animate = true,
  glow = false 
}: Text3DProps) {
  const baseClasses = {
    heading: 'text-4xl md:text-6xl font-black tracking-wider',
    subheading: 'text-2xl md:text-3xl font-black tracking-wide',
    body: 'text-lg font-bold tracking-wide'
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      rotateX: -15,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1
    },
    hover: {
      scale: 1.02,
      rotateX: 5,
      rotateY: 2,
      textShadow: [
        '0 0 20px rgba(255, 255, 255, 0.5)',
        '0 0 40px rgba(255, 255, 255, 0.3)',
        '0 0 20px rgba(255, 255, 255, 0.5)'
      ]
    }
  };

  return (
    <motion.div
      className={`
        ${baseClasses[variant]} 
        ${glow ? 'neon-glow-subtle' : ''} 
        text-3d 
        ${className}
      `}
      variants={textVariants}
      initial={animate ? "initial" : undefined}
      animate={animate ? "animate" : undefined}
      whileHover={animate ? "hover" : undefined}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      style={{
        transformStyle: 'preserve-3d',
        textShadow: glow 
          ? '0 1px 0 rgba(255, 255, 255, 0.1), 0 2px 0 rgba(255, 255, 255, 0.08), 0 3px 0 rgba(255, 255, 255, 0.06), 0 4px 0 rgba(255, 255, 255, 0.04), 0 5px 10px rgba(0, 0, 0, 0.8)'
          : '0 1px 0 rgba(255, 255, 255, 0.05), 0 2px 0 rgba(255, 255, 255, 0.04), 0 3px 0 rgba(255, 255, 255, 0.03), 0 4px 0 rgba(255, 255, 255, 0.02), 0 5px 10px rgba(0, 0, 0, 0.6)'
      }}
    >
      {children}
    </motion.div>
  );
}