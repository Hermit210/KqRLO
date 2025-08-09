'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Shield, Lock, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* 3D Communication Network Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Cpath d='M40 36v8m-4-4h8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating 3D Communication Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Communication Nodes */}
        <div className="absolute top-20 left-16 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-24 w-10 h-10 border border-white/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-16 w-4 h-4 bg-white/20 rotate-12 animate-pulse"></div>
        
        {/* Large 3D Communication Hub */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="w-48 h-48 relative">
            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-8 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MessageCircle className="h-8 w-8 text-white/40" />
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
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            SECURE
            <br />
            <span className="text-white/80">COMMUNICATION</span>
          </h2>
          <p className="text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            Have questions about zero-knowledge identity verification? 
            Connect with our security experts through encrypted channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email Contact */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative p-6 flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">ENCRYPTED EMAIL</h3>
                  <p className="text-white/90 font-bold mb-2">hello@kqrlo.com</p>
                  <p className="text-white/70 font-medium">End-to-end encrypted communication</p>
                </div>
              </div>
            </div>

            {/* Support Contact */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative p-6 flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">SECURITY SUPPORT</h3>
                  <p className="text-white/90 font-bold mb-2">support@kqrlo.com</p>
                  <p className="text-white/70 font-medium">Technical implementation assistance</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"></div>
              <div className="relative p-6 flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 transition-all duration-300">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">SECURITY BREACH</h3>
                  <p className="text-white/90 font-bold mb-2">security@kqrlo.com</p>
                  <p className="text-white/70 font-medium">24/7 emergency response team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secure Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* 3D Form Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-[1.02] transition-all duration-300"></div>
            
            {/* Form Content */}
            <div className="relative p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/30">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">ENCRYPTED CONTACT FORM</h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-3">FULL NAME</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-300 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-3">SECURE EMAIL</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-300 backdrop-blur-sm"
                    placeholder="your@secureemail.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-3">SECURITY CLEARANCE</label>
                  <select className="w-full px-4 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold focus:outline-none focus:border-white/50 transition-colors duration-300 backdrop-blur-sm">
                    <option value="">Select clearance level</option>
                    <option value="public">Public Inquiry</option>
                    <option value="confidential">Confidential</option>
                    <option value="secret">Secret</option>
                    <option value="top-secret">Top Secret</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-bold mb-3">ENCRYPTED MESSAGE</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-300 backdrop-blur-sm resize-none"
                    placeholder="Your message will be automatically encrypted..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full group"
                >
                  <Send className="h-6 w-6 mr-3 group-hover:text-white transition-colors" />
                  SEND ENCRYPTED MESSAGE
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-sm font-bold text-white">SECURITY NOTICE</span>
                </div>
                <p className="text-xs text-white/70 font-medium">
                  All communications are encrypted using AES-256 and transmitted through secure channels. 
                  Your data is protected by zero-knowledge protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}