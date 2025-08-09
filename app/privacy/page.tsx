'use client';

import { FuegoDots } from '@/components/ui/FuegoIllustrations';
import { data } from 'framer-motion/client';
import { div } from 'framer-motion/client';
import { section } from 'framer-motion/client';
import { FuegoDots } from '@/components/ui/FuegoIllustrations';
import { FuegoDots } from '@/components/ui/FuegoIllustrations';
import { section } from 'framer-motion/client';
import { section } from 'framer-motion/client';
import { div } from 'framer-motion/client';
import { data } from 'framer-motion/client';
import { div } from 'framer-motion/client';
import { section } from 'framer-motion/client';
import { motion } from 'framer-motion';
import { section } from 'framer-motion/client';
import { div } from 'framer-motion/client';
import { data } from 'framer-motion/client';
import { Shield, Lock, Eye, Database, Key, Globe, AlertTriangle, CheckCircle } from 'lucide-react';

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      title: "ZERO DATA COLLECTION",
      icon: <Database className="h-8 w-8 text-white" />,
      content: "We collect absolutely no personal information. All identity verification happens locally on your device using advanced cryptographic protocols.",
      guarantee: "MATHEMATICALLY GUARANTEED"
    },
    {
      title: "ZERO-KNOWLEDGE ARCHITECTURE",
      icon: <Shield className="h-8 w-8 text-white" />,
      content: "Our zero-knowledge proofs ensure complete privacy. We can verify your identity without ever seeing, storing, or accessing your personal data.",
      guarantee: "CRYPTOGRAPHICALLY PROVEN"
    },
    {
      title: "MILITARY-GRADE ENCRYPTION",
      icon: <Lock className="h-8 w-8 text-white" />,
      content: "All communications use AES-256 encryption with quantum-resistant algorithms. Your data is protected against current and future threats.",
      guarantee: "QUANTUM-RESISTANT"
    },
    {
      title: "NO SURVEILLANCE",
      icon: <Eye className="h-8 w-8 text-white" />,
      content: "We don't use tracking cookies, analytics, behavioral monitoring, or any surveillance technologies. Your privacy is absolute.",
      guarantee: "SURVEILLANCE-FREE"
    },
    {
      title: "SELF-SOVEREIGN CONTROL",
      icon: <Key className="h-8 w-8 text-white" />,
      content: "You maintain complete control over your digital identity. No central authority can access, modify, or revoke your credentials.",
      guarantee: "USER-CONTROLLED"
    },
    {
      title: "DECENTRALIZED NETWORK",
      icon: <Globe className="h-8 w-8 text-white" />,
      content: "Our decentralized architecture eliminates single points of failure and ensures no central entity can compromise your privacy.",
      guarantee: "DECENTRALIZED"
    }
  ];

  const dataRights = [
    { right: "RIGHT TO PRIVACY", status: "ABSOLUTE", description: "Your personal data never leaves your device" },
    { right: "RIGHT TO ANONYMITY", status: "GUARANTEED", description: "Identity verification without revealing identity" },
    { right: "RIGHT TO DELETION", status: "AUTOMATIC", description: "No data stored means nothing to delete" },
    { right: "RIGHT TO PORTABILITY", status: "BUILT-IN", description: "Your credentials work across all platforms" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* 3D Privacy Shield Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 5L85 20v30c0 20-15 40-35 45C30 90 15 70 15 50V20z'/%3E%3Ccircle cx='50' cy='45' r='15'/%3E%3Cpath d='M35 40h30M35 50h30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Privacy Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-24 w-10 h-10 border border-white/15 rounded-full animate-bounce"></div>
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-white/20 rotate-12 animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            PRIVACY
            <br />
            <span className="text-white/80">POLICY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white font-bold max-w-3xl mx-auto leading-relaxed"
          >
            Your privacy is not just protected—it&apos;s mathematically guaranteed. 
            We&apos;ve built the world&apos;s first truly private identity verification system.
          </motion.p>
        </div>
      </section>

      {/* Privacy Principles Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8">
              PRIVACY PRINCIPLES
            </h2>
            <p className="text-lg text-white/90 font-bold max-w-3xl mx-auto">
              Six fundamental principles that govern how we protect your privacy and ensure your data sovereignty.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* 3D Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                        {principle.icon}
                      </div>
                      <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-4 text-center tracking-wide">
                    {principle.title}
                  </h3>
                  <p className="text-white/90 font-bold mb-6 leading-relaxed text-center">
                    {principle.content}
                  </p>
                  
                  {/* Guarantee Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20">
                      <CheckCircle className="h-4 w-4 text-white mr-2" />
                      <span className="text-xs font-black text-white tracking-wider">{principle.guarantee}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Rights Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8">
              YOUR DATA RIGHTS
            </h2>
            <p className="text-lg text-white/90 font-bold max-w-3xl mx-auto">
              We don&apos;t just respect your data rights—we make them technically impossible to violate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataRights.map((right, index) => (
              <motion.div
                key={right.right}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* 3D Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
                
                <div className="relative p-8 flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-black text-white tracking-wide">
                        {right.right}
                      </h3>
                      <span className="px-3 py-1 bg-white/10 text-white text-xs font-black rounded-full border border-white/30">
                        {right.status}
                      </span>
                    </div>
                    <p className="text-white/80 font-bold">
                      {right.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 3D Alert Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20"></div>
            
            <div className="relative p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4">
                IMPORTANT SECURITY NOTICE
              </h3>
              <p className="text-white/90 font-bold leading-relaxed mb-6">
                This privacy policy is not just a legal document—it&apos;s a technical specification. 
                Our zero-knowledge architecture makes it technically impossible for us to access your personal data, 
                even if we wanted to or were compelled by law enforcement.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20">
                <Lock className="h-5 w-5 text-white mr-3" />
                <span className="text-white font-black tracking-wider">MATHEMATICALLY ENFORCED PRIVACY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-white mb-6">
              QUESTIONS ABOUT PRIVACY?
            </h3>
            <p className="text-lg text-white/90 font-bold mb-8">
              Our privacy team is available 24/7 to answer any questions about how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@kqrlo.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Eye className="h-5 w-5 mr-3" />
                PRIVACY@KQRLO.COM
              </a>
              <a
                href="mailto:security@kqrlo.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Shield className="h-5 w-5 mr-3" />
                SECURITY@KQRLO.COM
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
          >
            Your privacy is our priority. Learn how we protect your data with zero-knowledge technology.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="fuego-section fuego-section-white">
        <FuegoDots count={15} />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="fuego-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="fuego-subheading text-black mb-3">
                      {section.title}
                    </h3>
                    <p className="fuego-body text-black">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="fuego-subheading text-black mb-4">Our Commitment</h2>
                <p className="fuego-body text-black">
                  KQRLO is built on the principle that privacy is a fundamental right. 
                  We use cutting-edge zero-knowledge cryptography to ensure that your 
                  personal information never leaves your control.
                </p>
              </div>

              <div>
                <h2 className="fuego-subheading text-black mb-4">What We Don&apos;t Do</h2>
                <ul className="space-y-2">
                  <li className="fuego-body text-black flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We don&apos;t store your personal information on our servers
                  </li>
                  <li className="fuego-body text-black flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We don&apos;t sell or share your data with third parties
                  </li>
                  <li className="fuego-body text-black flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We don&apos;t track you across websites
                  </li>
                  <li className="fuego-body text-black flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    We don&apos;t use invasive analytics or advertising cookies
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="fuego-subheading text-black mb-4">Contact Us</h2>
                <p className="fuego-body text-black">
                  If you have questions about this privacy policy, please contact us at{' '}
                  <a href="mailto:privacy@kqrlo.com" className="text-orange-500 hover:underline">
                    privacy@kqrlo.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}