'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle, Lock } from 'lucide-react';
import { ParticleSystem3D } from '@/components/ui/ParticleSystem3D';
import { ScrollIndicator3D } from '@/components/ui/ScrollIndicator3D';

export function Hero() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = async () => {
    setIsVerifying(true);
    // Simulate zk-SNARK verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsVerifying(false);
    setIsVerified(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-black"></div>
      </div>
      
      {/* 3D Protection Shield Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large 3D Protection Shield */}
        <div className="absolute top-1/2 right-10 lg:right-20 transform -translate-y-1/2">
          <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
            {/* Outer Shield Ring */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow">
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/30 rounded-full animate-pulse">
                <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/40 rounded-full">
                  {/* Center Eye Shield Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-white">
                      {/* Shield outline */}
                      <path
                        d="M100 20 L160 50 L160 120 Q160 160, 100 180 Q40 160, 40 120 L40 50 Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                      />
                      {/* Eye in center */}
                      <ellipse cx="100" cy="100" rx="35" ry="20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="100" r="8" fill="currentColor" />
                      {/* Protection lines */}
                      <path d="M70 80 Q100 70, 130 80" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M70 120 Q100 130, 130 120" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Protection Nodes */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* 3D Protection Cards */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-16 right-8 lg:top-20 lg:right-32 glass p-3 lg:p-4 rounded-xl border border-white/20 backdrop-blur-xl"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs text-white/80 font-bold">PROTECTION ACTIVE</span>
          </div>
          <div className="text-sm text-white font-bold">ZERO-KNOWLEDGE SHIELD</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-24 right-12 lg:bottom-32 lg:right-40 glass p-4 lg:p-6 rounded-xl border border-white/20 backdrop-blur-xl"
        >
          <div className="flex items-center space-x-3 mb-3">
            <Lock className="h-5 w-5 text-white" />
            <span className="text-white font-bold">ENCRYPTED VAULT</span>
          </div>
          <div className="text-xs text-white/80 font-bold">MILITARY-GRADE PROTECTION</div>
          <div className="text-xs text-white/80 font-bold">FOR ALL DATA</div>
        </motion.div>

        {/* 3D Geometric Protection Elements */}
        <div className="absolute top-40 right-10">
          <div className="w-16 h-16 border border-white/30 rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-40 right-16">
          <div className="w-12 h-12 border border-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8" style={{ color: '#ffffff' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm"
            >
              <Shield className="h-5 w-5 text-white mr-3" />
              <span className="text-3d-neon text-white text-sm font-bold tracking-wider uppercase">ZERO-KNOWLEDGE PROTECTION</span>
            </motion.div>

            {/* Main Heading - Enhanced 3D */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3d-title text-white mb-8 leading-tight"
            >
              VERIFY YOUR IDENTITY
              <br />
              WITHOUT REVEALING IT
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3d-body text-lg text-white/90 max-w-2xl leading-relaxed"
            >
              Revolutionary zk-SNARKs technology enables you to prove your age, nationality, 
              or credentials without exposing any personal information. Complete privacy, 
              mathematical certainty.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleVerification}
                disabled={isVerifying || isVerified}
                className="btn-primary group"
              >
                {isVerifying ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                    GENERATING PROOF...
                  </>
                ) : isVerified ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-3 text-white" />
                    IDENTITY VERIFIED
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5 mr-3 group-hover:text-white transition-colors" />
                    START VERIFICATION
                  </>
                )}
              </button>
              
              <button className="btn-secondary group">
                LEARN MORE
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Side - 3D Protection Visualization */}
          <div className="relative lg:block hidden">
            {/* Additional 3D Elements for Balance */}
            <div className="w-full h-96 flex items-center justify-center">
              <div className="text-center text-white/20">
                <div className="w-32 h-32 border-2 border-white/10 rounded-full mx-auto mb-4 animate-pulse"></div>
                <p className="text-sm font-bold">3D PROTECTION ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator3D />
    </section>
  );
}