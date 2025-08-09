'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
}

export function ParticleSystem3D() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(initialParticles);

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
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, mousePosition.x * 20, mousePosition.x * -10, 0],
            y: [0, mousePosition.y * 20, mousePosition.y * -10, 0],
            z: [0, particle.z, -particle.z, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: 8 + particle.id * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.id * 0.05,
          }}
        />
      ))}

      {/* Connecting Lines */}
      {particles.slice(0, 20).map((particle, index) => {
        const nextParticle = particles[(index + 1) % 20];
        if (!nextParticle) return null;

        return (
          <motion.div
            key={`line-${particle.id}`}
            className="absolute h-px bg-white/20"
            style={{
              left: `${Math.min(particle.x, nextParticle.x)}%`,
              top: `${Math.min(particle.y, nextParticle.y) + Math.abs(nextParticle.y - particle.y) / 2}%`,
              width: `${Math.abs(nextParticle.x - particle.x)}%`,
              transformOrigin: '0 50%',
              transform: `rotate(${Math.atan2(nextParticle.y - particle.y, nextParticle.x - particle.x) * (180 / Math.PI)}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleX: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}