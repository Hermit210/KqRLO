'use client';

import { motion } from 'framer-motion';
import { Shield, Upload, Cpu, CheckCircle, Lock, Eye, Key, Database } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "UPLOAD CREDENTIALS",
      description: "Securely upload your identity documents to your local device. All processing happens offline.",
      icon: <Upload className="h-8 w-8 text-white" />,
      details: "Your documents never leave your device. Advanced local processing ensures complete privacy."
    },
    {
      number: "02", 
      title: "GENERATE ZK-PROOF",
      description: "Our quantum-resistant algorithms create mathematical proof of your identity without revealing data.",
      icon: <Cpu className="h-8 w-8 text-white" />,
      details: "Zero-knowledge cryptography generates verifiable proofs while keeping your information private."
    },
    {
      number: "03",
      title: "INSTANT VERIFICATION", 
      description: "Present your proof to any verifier. They can confirm your identity without seeing personal data.",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      details: "Mathematical certainty meets complete privacy. Verification in under 50 milliseconds."
    }
  ];

  const securityLayers = [
    { icon: <Lock className="h-6 w-6" />, name: "AES-256 ENCRYPTION", active: true },
    { icon: <Eye className="h-6 w-6" />, name: "ZERO-KNOWLEDGE PROOFS", active: true },
    { icon: <Key className="h-6 w-6" />, name: "QUANTUM-RESISTANT", active: true },
    { icon: <Database className="h-6 w-6" />, name: "DECENTRALIZED STORAGE", active: true }
  ];

  return (
    <section id="how-it-works" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* 3D Process Flow Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 10L110 35v50L60 110L10 85V35z'/%3E%3Cpath d='M60 30L90 45v30L60 90L30 75V45z'/%3E%3Ccircle cx='60' cy='60' r='15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating 3D Process Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Process Nodes */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-6 h-6 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-32 w-10 h-10 border border-white/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-20 w-5 h-5 bg-white/20 rotate-12 animate-pulse"></div>
        
        {/* Large 3D Process Flow */}
        <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
          <div className="w-56 h-56 relative">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-6 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-12 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="h-10 w-10 text-white/40" />
            </div>
            {/* Process Flow Indicators */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            HOW IT
            <br />
            <span className="text-white/80">WORKS</span>
          </h2>
          <p className="text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            Three simple steps to achieve mathematical proof of identity 
            while maintaining complete privacy and security.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* 3D Step Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
              
              {/* Step Content */}
              <div className="relative p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-white/10 rounded-xl border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black text-lg">{step.number}</span>
                  </div>
                </div>

                {/* 3D Icon Container */}
                <div className="flex justify-center mb-8 mt-4">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/90 font-bold mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-white/70 font-medium text-sm leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Connection Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-white/20 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Security Layers Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-black text-white text-center mb-16">
            SECURITY LAYERS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* 3D Layer Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
                
                <div className="relative p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                      {layer.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-black text-white mb-2 tracking-wide">
                    {layer.name}
                  </h4>
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${layer.active ? 'bg-white animate-pulse' : 'bg-white/30'}`}></div>
                    <span className="text-xs text-white/80 font-bold">
                      {layer.active ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-4xl font-black text-white mb-8">
              TECHNICAL SPECIFICATIONS
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <span className="text-white font-bold">Verification Speed: </span>
                  <span className="text-white/80 font-medium">&lt;50ms average response time</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <span className="text-white font-bold">Security Level: </span>
                  <span className="text-white/80 font-medium">256-bit quantum-resistant encryption</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <span className="text-white font-bold">Privacy Guarantee: </span>
                  <span className="text-white/80 font-medium">Zero personal data exposure</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <span className="text-white font-bold">Compatibility: </span>
                  <span className="text-white/80 font-medium">Cross-platform, multi-blockchain</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-white/5 rounded-2xl border-2 border-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm mx-auto">
                    <Cpu className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
                </div>
                <p className="text-xl font-bold text-white">PROCESSING ENGINE</p>
                <p className="text-white/70 font-medium mt-2">Advanced cryptographic algorithms</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}