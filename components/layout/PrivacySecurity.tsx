'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Database, Globe, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { SecurityMatrix3D } from '@/components/ui/SecurityMatrix3D';
import { DataFlow3D } from '@/components/ui/DataFlow3D';
import { SecurityShield3D } from '@/components/ui/SecurityShield3D';

export function PrivacySecurity() {
  const [activeTab, setActiveTab] = useState('privacy');

  const privacyGuarantees = [
    {
      icon: <Shield className="h-6 w-6 icon-outline" />,
      title: "Zero-Knowledge Proofs",
      description: "Mathematical proof of identity without revealing personal data",
      details: "Using zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge), we can verify your credentials without ever seeing them."
    },
    {
      icon: <Lock className="h-6 w-6 icon-outline" />,
      title: "End-to-End Encryption",
      description: "All communications encrypted with AES-256",
      details: "Every piece of data is encrypted before leaving your device and remains encrypted throughout the entire verification process."
    },
    {
      icon: <Eye className="h-6 w-6 icon-outline" />,
      title: "No Data Collection",
      description: "We never store, sell, or share your personal information",
      details: "Our system is designed to verify without storing. Once verification is complete, no trace of your personal data remains."
    },
    {
      icon: <Key className="h-6 w-6 icon-outline" />,
      title: "Self-Sovereign Identity",
      description: "You control your digital identity completely",
      details: "Your identity credentials are stored locally on your device. You decide when and how to share verification proofs."
    }
  ];

  const securityFeatures = [
    {
      icon: <Database className="h-6 w-6 icon-outline" />,
      title: "Decentralized Architecture",
      description: "No central point of failure or data breach risk",
      status: "Active"
    },
    {
      icon: <Globe className="h-6 w-6 icon-outline" />,
      title: "Open Source",
      description: "Transparent code audited by security experts",
      status: "Verified"
    },
    {
      icon: <Shield className="h-6 w-6 icon-outline" />,
      title: "Quantum-Resistant",
      description: "Future-proof against quantum computing attacks",
      status: "Ready"
    }
  ];

  return (
    <section id="privacy-security" className="w-full h-full py-24 relative overflow-hidden flowing-bg cinematic-depth">
      {/* 3D Security Shield Background */}
      <SecurityShield3D />
      <SecurityMatrix3D />
      <DataFlow3D />
      
      {/* Additional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white/2 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/1 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 glass border border-white/20 rounded-full mb-6 neon-glow-subtle layered-card">
            <Shield className="h-4 w-4 text-white mr-2" />
            <span className="text-sm text-white font-black tracking-wider">PRIVACY & SECURITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-3d tracking-wider">
            <span className="text-white">
              YOUR PRIVACY IS
            </span>
            <br />
            <span className="text-gray-300">
              MATHEMATICALLY GUARANTEED
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-bold tracking-wide">
            BUILT WITH CUTTING-EDGE CRYPTOGRAPHIC TECHNIQUES TO ENSURE YOUR PERSONAL 
            INFORMATION NEVER LEAVES YOUR DEVICE WHILE STILL ENABLING SECURE VERIFICATION.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass layered-card border border-white/20 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-3 rounded-md font-black tracking-wider transition-all duration-500 ${
                activeTab === 'privacy'
                  ? 'bg-white/10 text-white neon-glow-subtle'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              PRIVACY GUARANTEES
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 rounded-md font-black tracking-wider transition-all duration-500 ${
                activeTab === 'security'
                  ? 'bg-white/10 text-white neon-glow-subtle'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              SECURITY FEATURES
            </button>
          </div>
        </motion.div>

        {/* Privacy Guarantees Tab */}
        {activeTab === 'privacy' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {privacyGuarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d layered-card holographic p-8 hover:neon-glow transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 border border-white/20 wireframe rounded-lg float-3d">
                    {guarantee.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-2 tracking-wider text-3d">
                      {guarantee.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-400 mb-4 font-bold tracking-wide">
                      {guarantee.description.toUpperCase()}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed font-bold tracking-wide">
                      {guarantee.details.toUpperCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Security Features Tab */}
        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d layered-card p-8 text-center hover:neon-glow transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 wireframe rounded-lg mb-6 float-3d">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-wider text-3d">
                  {feature.title.toUpperCase()}
                </h3>
                <p className="text-gray-400 mb-4 font-bold tracking-wide">
                  {feature.description.toUpperCase()}
                </p>
                <div className="inline-flex items-center px-3 py-1 glass border border-white/20 rounded-full neon-glow-subtle">
                  <CheckCircle className="h-4 w-4 text-white mr-2" />
                  <span className="text-sm text-white font-black tracking-wider">{feature.status.toUpperCase()}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Privacy Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">
              Privacy & Security Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🔒", label: "End-to-End Encryption", status: "Verified" },
                { icon: "🚫", label: "No Data Selling", status: "Guaranteed" },
                { icon: "🌐", label: "Open Source", status: "Audited" },
                { icon: "🛡️", label: "GDPR Compliant", status: "Certified" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-card/30 rounded-lg border border-border"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-medium text-card-foreground mb-1">{badge.label}</div>
                  <div className="text-xs text-green-400">{badge.status}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            How Your Data Stays Private
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Local Processing",
                description: "Your credentials are processed locally on your device",
                icon: <Database className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Zero-Knowledge Proof",
                description: "Mathematical proof is generated without revealing data",
                icon: <Key className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Verification",
                description: "Proof is verified without accessing personal information",
                icon: <CheckCircle className="h-8 w-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center flex flex-col items-center"
              >
                <div className="flex flex-col items-center mb-6">
                  {/* Step Number - Centered above icon */}
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground mb-4">
                    {step.step}
                  </div>
                  {/* Icon - Centered below number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}