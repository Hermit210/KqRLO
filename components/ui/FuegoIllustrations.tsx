'use client';

import { motion } from 'framer-motion';

// Hand-drawn style octopus illustration
export function OctopusIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`fuego-float ${className}`}
      viewBox="0 0 200 200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      {/* Octopus body - hand-drawn style */}
      <path
        d="M100 60 C120 62, 138 81, 140 100 C139 121, 119 139, 100 140 C81 139, 61 120, 60 100 C61 81, 81 62, 100 60 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      
      {/* Tentacles - organic, hand-drawn style */}
      <path
        d="M82 132 Q71 151, 61 171 Q56 181, 66 184 Q74 179, 71 169"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M91 136 Q86 156, 76 174 Q71 184, 81 189 Q89 184, 86 174"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M109 136 Q114 156, 124 174 Q129 184, 119 189 Q111 184, 114 174"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M118 132 Q129 151, 139 171 Q144 181, 134 184 Q126 179, 129 169"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Eyes - simple dots */}
      <circle cx="88" cy="88" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      <circle cx="112" cy="88" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      <circle cx="88" cy="88" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="112" cy="88" r="2" fill="currentColor" opacity="0.9" />
    </motion.svg>
  );
}

export function SeahorseIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`fuego-illustration fuego-float ${className}`}
      viewBox="0 0 150 250"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {/* Seahorse body */}
      <path
        d="M75 50 Q85 45, 90 55 Q95 65, 90 75 L85 100 Q80 120, 75 140 Q70 160, 65 180 Q60 200, 70 220 Q80 230, 90 220 Q95 210, 90 200"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Head and snout */}
      <path
        d="M75 50 Q70 40, 65 35 Q60 30, 55 35 Q50 40, 55 45 Q60 50, 65 45"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Dorsal fin */}
      <path
        d="M85 60 Q95 55, 100 65 Q95 75, 85 70"
        className="fuego-line-art"
        strokeWidth="2"
      />
      <path
        d="M82 80 Q92 75, 97 85 Q92 95, 82 90"
        className="fuego-line-art"
        strokeWidth="2"
      />
      <path
        d="M80 100 Q90 95, 95 105 Q90 115, 80 110"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Tail fin */}
      <path
        d="M90 200 Q100 195, 110 205 Q115 215, 105 220 Q95 215, 90 205"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Eye */}
      <circle cx="70" cy="45" r="5" className="fuego-line-art" strokeWidth="2" />
      <circle cx="70" cy="45" r="2" fill="currentColor" />
      
      {/* Body segments */}
      <path d="M70 70 Q80 70, 85 75" className="fuego-line-art" strokeWidth="1" />
      <path d="M68 90 Q78 90, 83 95" className="fuego-line-art" strokeWidth="1" />
      <path d="M66 110 Q76 110, 81 115" className="fuego-line-art" strokeWidth="1" />
      <path d="M64 130 Q74 130, 79 135" className="fuego-line-art" strokeWidth="1" />
    </motion.svg>
  );
}

export function WhaleIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`fuego-illustration fuego-float ${className}`}
      viewBox="0 0 300 150"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
    >
      {/* Whale body */}
      <path
        d="M50 75 Q100 50, 200 60 Q250 65, 280 75 Q270 85, 250 90 Q200 95, 100 100 Q50 95, 50 75 Z"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Head */}
      <path
        d="M50 75 Q30 70, 20 75 Q15 80, 20 85 Q30 90, 50 85"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Tail */}
      <path
        d="M280 75 Q290 65, 295 55 Q300 50, 295 45 Q290 50, 285 60"
        className="fuego-line-art"
        strokeWidth="2"
      />
      <path
        d="M280 75 Q290 85, 295 95 Q300 100, 295 105 Q290 100, 285 90"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Fins */}
      <path
        d="M80 95 Q75 105, 85 110 Q95 105, 90 95"
        className="fuego-line-art"
        strokeWidth="2"
      />
      <path
        d="M180 95 Q175 105, 185 110 Q195 105, 190 95"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Eye */}
      <circle cx="40" cy="75" r="4" className="fuego-line-art" strokeWidth="2" />
      <circle cx="40" cy="75" r="2" fill="currentColor" />
      
      {/* Water spout */}
      <path
        d="M120 60 Q125 45, 130 30 Q135 25, 130 20"
        className="fuego-line-art"
        strokeWidth="1"
      />
      <path
        d="M125 60 Q130 45, 135 30 Q140 25, 135 20"
        className="fuego-line-art"
        strokeWidth="1"
      />
    </motion.svg>
  );
}

export function JellyfishIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`fuego-illustration fuego-float ${className}`}
      viewBox="0 0 120 180"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 2, delay: 2 }}
    >
      {/* Jellyfish bell */}
      <path
        d="M60 30 Q80 25, 95 40 Q100 55, 95 70 Q80 85, 60 85 Q40 85, 25 70 Q20 55, 25 40 Q40 25, 60 30 Z"
        className="fuego-line-art"
        strokeWidth="2"
      />
      
      {/* Tentacles */}
      <path
        d="M45 85 Q40 100, 35 120 Q30 140, 40 160 Q45 170, 40 175"
        className="fuego-line-art"
        strokeWidth="1.5"
      />
      <path
        d="M55 85 Q50 105, 45 125 Q40 145, 50 165 Q55 175, 50 180"
        className="fuego-line-art"
        strokeWidth="1.5"
      />
      <path
        d="M65 85 Q70 105, 75 125 Q80 145, 70 165 Q65 175, 70 180"
        className="fuego-line-art"
        strokeWidth="1.5"
      />
      <path
        d="M75 85 Q80 100, 85 120 Q90 140, 80 160 Q75 170, 80 175"
        className="fuego-line-art"
        strokeWidth="1.5"
      />
      
      {/* Bell pattern */}
      <path
        d="M35 50 Q60 45, 85 50"
        className="fuego-line-art"
        strokeWidth="1"
      />
      <path
        d="M30 60 Q60 55, 90 60"
        className="fuego-line-art"
        strokeWidth="1"
      />
      
      {/* Shorter tentacles */}
      <path
        d="M40 85 Q35 95, 30 105"
        className="fuego-line-art"
        strokeWidth="1"
      />
      <path
        d="M60 85 Q55 95, 50 105"
        className="fuego-line-art"
        strokeWidth="1"
      />
      <path
        d="M80 85 Q85 95, 90 105"
        className="fuego-line-art"
        strokeWidth="1"
      />
    </motion.svg>
  );
}

export function FuegoDots({ count = 20 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    size: 4 + Math.random() * 8, // Varying sizes
  }));

  return (
    <div className="fuego-dots">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="fuego-dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0.4, 0.8, 0],
            scale: [0, 1.2, 0.8, 1, 0],
            y: [0, -15, -8, -20, 0]
          }}
          transition={{
            duration: 8,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}