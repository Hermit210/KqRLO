'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Shield, Lock, Globe, Database, Cpu } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/kqrlo", icon: <Twitter className="h-6 w-6" /> },
    { name: "GitHub", href: "https://github.com/kqrlo", icon: <Github className="h-6 w-6" /> },
    { name: "Email", href: "mailto:hello@kqrlo.com", icon: <Mail className="h-6 w-6" /> }
  ];

  const securityFeatures = [
    { icon: <Shield className="h-5 w-5" />, text: "Zero-Knowledge Proofs" },
    { icon: <Lock className="h-5 w-5" />, text: "End-to-End Encryption" },
    { icon: <Database className="h-5 w-5" />, text: "Decentralized Storage" },
    { icon: <Cpu className="h-5 w-5" />, text: "Quantum-Resistant" }
  ];

  return (
    <footer className="bg-black py-20 relative overflow-hidden">
      {/* 3D Security Network Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 10L90 30v40L50 90L10 70V30z'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating 3D Security Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Security Nodes */}
        <div className="absolute top-16 left-12 w-6 h-6 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-4 h-4 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-24 left-16 w-8 h-8 border border-white/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 right-24 w-5 h-5 bg-white/20 rotate-12 animate-pulse"></div>
        
        {/* Large 3D Security Matrix */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 relative opacity-20">
            <div className="absolute inset-0 border border-white/10 rotate-45 animate-spin-slow"></div>
            <div className="absolute inset-2 border border-white/20 rotate-45 animate-pulse"></div>
            <div className="absolute inset-4 border border-white/30 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Globe className="h-6 w-6 text-white/30" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Logo size={48} />
              <div>
                <h3 className="text-3xl font-black text-white">KQRLO</h3>
                <p className="text-white/80 font-bold text-sm">ZERO-KNOWLEDGE IDENTITY</p>
              </div>
            </div>
            <p className="text-white/90 font-bold leading-relaxed">
              Pioneering privacy-first digital identity with zero-knowledge proofs. 
              Secure, private, and built for the future of digital verification.
            </p>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-black text-white">SECURITY FEATURES</h4>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-white font-bold">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-black text-white">SECURE CHANNELS</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
                    {social.icon}
                  </div>
                  <span className="text-white font-bold group-hover:text-white/80 transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Security Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-1">99.99%</div>
              <div className="text-white/70 font-bold text-sm">UPTIME</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-1">256-BIT</div>
              <div className="text-white/70 font-bold text-sm">ENCRYPTION</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-1">ZERO</div>
              <div className="text-white/70 font-bold text-sm">DATA BREACHES</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-1">24/7</div>
              <div className="text-white/70 font-bold text-sm">MONITORING</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <span className="text-white/80 font-bold">
                © 2024 KQRLO. All rights reserved.
              </span>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-white/80 font-bold text-sm">PRIVACY-FIRST</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-white/80" />
                  <span className="text-white/80 font-bold text-sm">MAXIMUM SECURITY</span>
                </div>
              </div>
            </div>
            
            {/* Security Certification */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/80 font-bold text-sm">SOC 2 CERTIFIED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}