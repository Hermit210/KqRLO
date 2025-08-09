'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Zap, Globe, Users } from 'lucide-react';
import { OctopusIllustration, SeahorseIllustration, WhaleIllustration, JellyfishIllustration, FuegoDots } from './FuegoIllustrations';

const sections = [
  {
    id: 'hero',
    type: 'black',
    title: 'Zero-Knowledge Identity',
    subtitle: 'Prove who you are without revealing who you are',
    description: 'Revolutionary privacy-first identity verification using zk-SNARKs. Your data stays yours.',
    icon: Shield,
    illustration: 'octopus'
  },
  {
    id: 'privacy',
    type: 'white',
    title: 'Complete Privacy',
    subtitle: 'Your secrets remain secret',
    description: 'End-to-end encryption ensures your personal information never leaves your device.',
    icon: Eye,
    illustration: 'seahorse'
  },
  {
    id: 'security',
    type: 'black',
    title: 'Military-Grade Security',
    subtitle: 'Cryptographic proofs you can trust',
    description: 'Advanced cryptography and blockchain technology secure your digital identity.',
    icon: Lock,
    illustration: 'whale'
  },
  {
    id: 'speed',
    type: 'white',
    title: 'Lightning Fast',
    subtitle: 'Instant verification',
    description: 'Verify your identity in seconds, not minutes. Optimized for real-world use.',
    icon: Zap,
    illustration: 'jellyfish'
  },
  {
    id: 'global',
    type: 'black',
    title: 'Global Access',
    subtitle: 'Borderless identity',
    description: 'Use your verified identity anywhere in the world, on any platform.',
    icon: Globe,
    illustration: 'octopus'
  },
  {
    id: 'community',
    type: 'white',
    title: 'Open Source',
    subtitle: 'Built by the community',
    description: 'Transparent, auditable, and continuously improved by developers worldwide.',
    icon: Users,
    illustration: 'seahorse'
  }
];

export function FuegoSections() {
  return (
    <div className="fuego-scroll-container">
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          className={`fuego-section ${
            section.type === 'black' ? 'fuego-section-black' : 'fuego-section-white'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Background Dots */}
          <div className="fuego-dots">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="fuego-dot"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`
                }}
              />
            ))}
          </div>

          {/* Floating Illustration */}
          {section.illustration === 'octopus' && <OctopusIllustration className={`fuego-${section.illustration} fuego-float`} />}
          {section.illustration === 'seahorse' && <SeahorseIllustration className={`fuego-${section.illustration} fuego-float`} />}
          {section.illustration === 'whale' && <WhaleIllustration className={`fuego-${section.illustration} fuego-float`} />}
          {section.illustration === 'jellyfish' && <JellyfishIllustration className={`fuego-${section.illustration} fuego-float`} />}

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <section.icon 
                  size={80} 
                  className={`mx-auto ${
                    section.type === 'black' ? 'text-white' : 'text-black'
                  } opacity-80`}
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="fuego-heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {section.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.h3
                className="fuego-subheading opacity-80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {section.subtitle}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="fuego-body max-w-2xl mx-auto mb-8 opacity-70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {section.description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="fuego-btn fuego-btn-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Section Number */}
          <div className={`absolute top-8 right-8 text-6xl font-bold opacity-10 ${
            section.type === 'black' ? 'text-white' : 'text-black'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </motion.section>
      ))}
    </div>
  );
}