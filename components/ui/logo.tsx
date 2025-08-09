'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function Logo({ size = 40, className = "", animate = true }: LogoProps) {
  const logoVariants = {
    initial: { 
      scale: 1, 
      rotateY: 0, 
      rotateX: 0,
      rotateZ: 0
    },
    hover: { 
      scale: 1.15, 
      rotateY: 180,
      rotateX: 15,
      rotateZ: 5
    },
    pulse: { 
      scale: [1, 1.08, 1],
      rotateY: [0, 10, -10, 0],
      rotateX: [0, 5, -5, 0]
    }
  };

  return (
    <motion.div
      className={`relative ${className} float-3d`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      variants={logoVariants}
      initial="initial"
      whileHover={animate ? "hover" : undefined}
      animate={animate ? "pulse" : undefined}
      transition={{
        duration: animate ? 3 : 0.8,
        repeat: animate ? Infinity : 0,
        ease: "easeInOut"
      }}
    >
      {/* 3D Layered Shield Eye Logo */}
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {/* Back Layer */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-30"
          style={{ transform: 'translateZ(-10px)' }}
        >
          <path
            d="M50 5 L85 20 L85 45 C85 65 70 85 50 95 C30 85 15 65 15 45 L15 20 Z"
            stroke="#ffffff"
            strokeWidth="3"
            fill="rgba(255, 255, 255, 0.02)"
          />
        </svg>

        {/* Main Logo Layer */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 neon-glow-subtle"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' }}
        >
          {/* Shield Outline - Thicker for bold effect */}
          <path
            d="M50 5 L85 20 L85 45 C85 65 70 85 50 95 C30 85 15 65 15 45 L15 20 Z"
            stroke="#ffffff"
            strokeWidth="3"
            fill="rgba(255, 255, 255, 0.05)"
          />
          
          {/* Inner Shield Layers */}
          <path
            d="M50 12 L78 25 L78 45 C78 62 66 78 50 86 C34 78 22 62 22 45 L22 25 Z"
            stroke="#ffffff"
            strokeWidth="2"
            fill="rgba(255, 255, 255, 0.08)"
          />
          
          {/* Eye Shape - Enhanced */}
          <ellipse
            cx="50"
            cy="45"
            rx="25"
            ry="15"
            stroke="#ffffff"
            strokeWidth="3"
            fill="rgba(255, 255, 255, 0.1)"
          />
          
          {/* Eye Pupil - Larger and bolder */}
          <circle
            cx="50"
            cy="45"
            r="10"
            fill="#ffffff"
          />
          
          {/* Inner Pupil */}
          <circle
            cx="50"
            cy="45"
            r="5"
            fill="#000000"
          />
          
          {/* Enhanced Flowing Lines */}
          <path
            d="M25 35 Q35 30 45 35 Q55 40 65 35 Q75 30 85 35"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M25 55 Q35 60 45 55 Q55 50 65 55 Q75 60 85 55"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Additional geometric elements */}
          <circle cx="35" cy="30" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="65" cy="30" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="35" cy="60" r="2" fill="#ffffff" opacity="0.6" />
          <circle cx="65" cy="60" r="2" fill="#ffffff" opacity="0.6" />
        </svg>

        {/* Front Highlight Layer */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-60"
          style={{ transform: 'translateZ(5px)' }}
        >
          <path
            d="M35 25 Q50 20 65 25"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 bg-white/15 rounded-full blur-xl opacity-60 pulse-glow-3d" />
      <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl opacity-40" />
    </motion.div>
  );
}