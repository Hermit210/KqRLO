'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Globe, Zap, TrendingUp, Award } from 'lucide-react';
import { SeahorseIllustration, WhaleIllustration, JellyfishIllustration, FuegoDots } from '@/components/ui/FuegoIllustrations';

const stats = [
  { icon: <Users className="h-8 w-8 text-white" />, value: '10K+', label: 'VERIFIED USERS' },
  { icon: <Shield className="h-8 w-8 text-white" />, value: '99.9%', label: 'SECURITY RATE' },
  { icon: <Globe className="h-8 w-8 text-white" />, value: '50+', label: 'COUNTRIES' },
  { icon: <Zap className="h-8 w-8 text-white" />, value: '<1s', label: 'VERIFICATION TIME' },
];

const values = [
  {
    icon: <Shield className="h-12 w-12 text-white" />,
    title: 'PRIVACY FIRST',
    description: 'WE BELIEVE PRIVACY IS A FUNDAMENTAL RIGHT. OUR ZERO-KNOWLEDGE APPROACH ENSURES YOUR PERSONAL DATA NEVER LEAVES YOUR CONTROL.'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-white" />,
    title: 'INNOVATION DRIVEN',
    description: 'CONSTANTLY PUSHING THE BOUNDARIES OF WHAT\'S POSSIBLE WITH CRYPTOGRAPHIC TECHNOLOGY AND BLOCKCHAIN INNOVATION.'
  },
  {
    icon: <Award className="h-12 w-12 text-white" />,
    title: 'EXCELLENCE',
    description: 'COMMITTED TO DELIVERING THE HIGHEST QUALITY IDENTITY VERIFICATION SOLUTIONS WITH UNCOMPROMISING SECURITY STANDARDS.'
  },
];

export default function AboutPage() {
  return (
    <div className="fuego-scroll-container">
      {/* First Section - White Background */}
      <section className="fuego-section fuego-section-white">
        <FuegoDots count={15} />
        <SeahorseIllustration className="fuego-seahorse" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fuego-heading text-black mb-6"
          >
            About KQRLO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="fuego-body text-black max-w-3xl mx-auto"
          >
            We&apos;re building the future of digital identity verification, where privacy
            and security aren&apos;t just features—they&apos;re fundamental principles.
          </motion.p>
        </div>
      </section>

      {/* Second Section - Black Background with Stats */}
      <section className="fuego-section fuego-section-black">
        <FuegoDots count={20} />
        <JellyfishIllustration className="fuego-jellyfish" />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="fuego-subheading text-white mb-2">
                  {stat.value}
                </div>
                <div className="fuego-body text-white opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Third Section - White Background with Mission */}
      <section className="fuego-section fuego-section-white">
        <FuegoDots count={12} />
        <WhaleIllustration className="fuego-whale" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fuego-subheading text-black mb-8"
          >
            Our Mission
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="fuego-body text-black leading-relaxed"
          >
            To democratize identity verification by making it accessible, secure, and private for everyone.
            We envision a world where individuals have complete control over their digital identity,
            free from the constraints of centralized authorities and the risks of data breaches.
          </motion.p>
        </div>
      </section>

      {/* Fourth Section - Black Background with Values */}
      <section className="fuego-section fuego-section-black">
        <FuegoDots count={18} />

        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fuego-subheading text-center text-white mb-12"
          >
            Our Values
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="fuego-card text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-lg flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h4 className="fuego-subheading text-white mb-4">
                  {value.title}
                </h4>
                <p className="fuego-body text-white">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fifth Section - White Background with Technology */}
      <section className="fuego-section fuego-section-white">
        <FuegoDots count={10} />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="fuego-subheading text-black mb-6">
                Cutting-Edge Technology
              </h3>
              <p className="fuego-body text-black mb-6">
                Built on the latest advancements in zero-knowledge cryptography and blockchain technology.
                Our protocol leverages ZK-SNARKs to enable privacy-preserving identity verification
                without compromising on security or usability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-black">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  <span className="fuego-body">Zero-Knowledge Succinct Non-Interactive Arguments</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  <span className="fuego-body">Ethereum Virtual Machine Compatible Smart Contracts</span>
                </div>
                <div className="flex items-center text-black">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  <span className="fuego-body">Decentralized Identity Standards (DID)</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-64 border-2 border-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Shield className="h-16 w-16 text-black mx-auto mb-4" />
                  <p className="fuego-body text-black">Secure Architecture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}