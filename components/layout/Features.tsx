'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Zap, Globe, Database, Cpu, Network } from 'lucide-react';

export function Features() {
  const features = [
    {
      title: "ZERO-KNOWLEDGE PROOFS",
      description: "Prove statements about your identity without revealing any underlying data using advanced cryptographic protocols.",
      icon: <Shield className="h-8 w-8 text-white" />,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "QUANTUM-RESISTANT ENCRYPTION",
      description: "Future-proof security with post-quantum cryptographic algorithms that protect against quantum computing threats.",
      icon: <Lock className="h-8 w-8 text-white" />,
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "BIOMETRIC PRIVACY VAULT",
      description: "Secure biometric data storage with homomorphic encryption ensuring your biological identity stays private.",
      icon: <Eye className="h-8 w-8 text-white" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "SELF-SOVEREIGN IDENTITY",
      description: "Complete control over your digital identity with decentralized key management and no central authority.",
      icon: <Key className="h-8 w-8 text-white" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "REAL-TIME VERIFICATION",
      description: "Lightning-fast identity verification with sub-100ms response times using optimized zk-SNARK circuits.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "CROSS-CHAIN INTEROPERABILITY",
      description: "Universal identity verification across multiple blockchain networks with seamless protocol bridging.",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      title: "ENCRYPTED DATA SHARDING",
      description: "Distributed data storage with advanced sharding techniques ensuring no single point of failure.",
      icon: <Database className="h-8 w-8 text-white" />,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "AI-POWERED THREAT DETECTION",
      description: "Machine learning algorithms continuously monitor and protect against identity theft and fraud attempts.",
      icon: <Cpu className="h-8 w-8 text-white" />,
      color: "from-pink-500/20 to-purple-500/20"
    },
    {
      title: "DECENTRALIZED NETWORK",
      description: "Peer-to-peer verification network with consensus mechanisms ensuring trust without intermediaries.",
      icon: <Network className="h-8 w-8 text-white" />,
      color: "from-cyan-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="features" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* 3D Protection Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating 3D Protection Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border border-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 border border-white/15 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3d-title text-white mb-8 leading-tight">
            ADVANCED PROTECTION
            <br />
            <span className="text-3d-embossed text-white/80">FEATURES</span>
          </h2>
          <p className="text-3d-body text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            Revolutionary security features that set new standards for digital identity protection 
            and zero-knowledge verification in the modern world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* 3D Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300" style={{background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`}}></div>
              
              {/* Card Content */}
              <div className="relative p-8 text-center">
                {/* 3D Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-3d-floating text-xl font-black text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-3d-body text-white/90 font-bold leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="btn-primary group">
            <Shield className="h-6 w-6 mr-3 group-hover:text-white transition-colors" />
            START VERIFICATION
          </button>
        </motion.div>
      </div>
    </section>
  );
}