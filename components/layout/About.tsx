'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Globe, Zap, TrendingUp, Award, Lock, Eye, Database, Cpu } from 'lucide-react';

const stats = [
  { icon: <Users className="h-10 w-10 text-white" />, value: '100K+', label: 'PROTECTED IDENTITIES' },
  { icon: <Shield className="h-10 w-10 text-white" />, value: '99.99%', label: 'SECURITY UPTIME' },
  { icon: <Globe className="h-10 w-10 text-white" />, value: '150+', label: 'COUNTRIES SERVED' },
  { icon: <Zap className="h-10 w-10 text-white" />, value: '<50ms', label: 'VERIFICATION SPEED' },
];

const values = [
  {
    icon: <Shield className="h-16 w-16 text-white" />,
    title: 'PRIVACY FORTRESS',
    description: 'WE BUILD IMPENETRABLE DIGITAL FORTRESSES AROUND YOUR IDENTITY. YOUR PERSONAL DATA IS ENCRYPTED, SHARDED, AND PROTECTED BY MILITARY-GRADE CRYPTOGRAPHIC PROTOCOLS.'
  },
  {
    icon: <TrendingUp className="h-16 w-16 text-white" />,
    title: 'INNOVATION VANGUARD',
    description: 'PIONEERING THE NEXT GENERATION OF IDENTITY VERIFICATION WITH QUANTUM-RESISTANT ALGORITHMS AND AI-POWERED THREAT DETECTION SYSTEMS.'
  },
  {
    icon: <Award className="h-16 w-16 text-white" />,
    title: 'SECURITY EXCELLENCE',
    description: 'UNCOMPROMISING COMMITMENT TO THE HIGHEST SECURITY STANDARDS WITH CONTINUOUS AUDITS, PENETRATION TESTING, AND ZERO-TRUST ARCHITECTURE.'
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* 3D Hexagonal Protection Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating 3D Security Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Security Nodes */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-4 h-4 border-2 border-white/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 border border-white/25 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-white/15 rotate-12 animate-pulse"></div>
        
        {/* Large 3D Protection Sphere */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-8 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Lock className="h-12 w-12 text-white/40" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3d-title text-white mb-8 leading-tight">
            ABOUT
            <br />
            <span className="text-3d-embossed text-white/80">KQRLO</span>
          </h2>
          <p className="text-3d-body text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            We&apos;re building the future of digital identity verification, where privacy
            and security aren&apos;t just features—they&apos;re fundamental principles
            embedded in every line of code.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-bold tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl font-black text-white mb-8">
            OUR MISSION
          </h3>
          <p className="text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            To democratize identity verification by making it accessible, secure, and private for everyone.
            We envision a world where individuals have complete control over their digital identity,
            free from the constraints of centralized authorities and the risks of data breaches.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3d-subtitle text-white text-center mb-16">
            OUR VALUES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* 3D Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                        {value.icon}
                      </div>
                      <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 tracking-wide">
                    {value.title}
                  </h4>
                  <p className="text-white/90 font-bold leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-4xl font-black text-white mb-8">
              CUTTING-EDGE TECHNOLOGY
            </h3>
            <p className="text-xl text-white font-bold mb-8 leading-relaxed">
              Built on the latest advancements in zero-knowledge cryptography and blockchain technology.
              Our protocol leverages ZK-SNARKs to enable privacy-preserving identity verification
              without compromising on security or usability.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-white rounded-full mr-4" />
                <span className="font-bold">Zero-Knowledge Succinct Non-Interactive Arguments</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-white rounded-full mr-4" />
                <span className="font-bold">Quantum-Resistant Cryptographic Protocols</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-white rounded-full mr-4" />
                <span className="font-bold">Decentralized Identity Standards (DID)</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-3 h-3 bg-white rounded-full mr-4" />
                <span className="font-bold">AI-Powered Threat Detection Systems</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-white/5 rounded-2xl border-2 border-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm mx-auto">
                    <Database className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
                </div>
                <p className="text-xl font-bold text-white">SECURE ARCHITECTURE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}