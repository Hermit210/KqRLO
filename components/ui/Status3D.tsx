'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

interface Status3DProps {
  className?: string;
}

export function Status3D({ className = '' }: Status3DProps) {
  const statusItems = [
    {
      icon: Shield,
      label: 'SECURE',
      status: 'ACTIVE',
      color: 'text-white'
    },
    {
      icon: Zap,
      label: 'FAST',
      status: 'OPTIMAL',
      color: 'text-white'
    },
    {
      icon: Globe,
      label: 'GLOBAL',
      status: 'ONLINE',
      color: 'text-white'
    }
  ];

  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      {statusItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: 'easeOut'
          }}
        >
          {/* Status Indicator */}
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.3
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full neon-glow-subtle" />
            <motion.div
              className="absolute inset-0 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: index * 0.3
              }}
            />
          </motion.div>

          {/* Icon */}
          <motion.div
            className="icon-3d"
            whileHover={{ scale: 1.1 }}
          >
            <item.icon className={`h-4 w-4 ${item.color}`} />
          </motion.div>

          {/* Status Text */}
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-wider text-white">
              {item.label}
            </span>
            <span className="text-xs font-bold tracking-wider text-gray-400">
              {item.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}