'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
}

interface Notification3DProps {
  notifications: Notification[];
  onRemove: (id: string) => void;
}

export function Notification3D({ notifications, onRemove }: Notification3DProps) {
  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-white" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-white" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-white" />;
      case 'info':
        return <Info className="h-5 w-5 text-white" />;
    }
  };

  const getColorClasses = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'border-white/30 bg-white/10';
      case 'error':
        return 'border-white/30 bg-white/10';
      case 'warning':
        return 'border-white/30 bg-white/10';
      case 'info':
        return 'border-white/30 bg-white/10';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            index={index}
            onRemove={onRemove}
            getIcon={getIcon}
            getColorClasses={getColorClasses}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface NotificationItemProps {
  notification: Notification;
  index: number;
  onRemove: (id: string) => void;
  getIcon: (type: Notification['type']) => JSX.Element;
  getColorClasses: (type: Notification['type']) => string;
}

function NotificationItem({ 
  notification, 
  index, 
  onRemove, 
  getIcon, 
  getColorClasses 
}: NotificationItemProps) {
  useEffect(() => {
    if (notification.duration) {
      const timer = setTimeout(() => {
        onRemove(notification.id);
      }, notification.duration);

      return () => clearTimeout(timer);
    }
  }, [notification.id, notification.duration, onRemove]);

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: 300, 
        rotateY: -90,
        scale: 0.8
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        rotateY: 0,
        scale: 1
      }}
      exit={{ 
        opacity: 0, 
        x: 300, 
        rotateY: 90,
        scale: 0.8
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1
      }}
      className={`
        card-3d layered-card p-4 min-w-80 max-w-md
        ${getColorClasses(notification.type)}
        hover:neon-glow-subtle
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <motion.div
          className="flex-shrink-0 mt-0.5"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotateY: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          {getIcon(notification.type)}
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-black text-sm tracking-wider mb-1">
            {notification.title.toUpperCase()}
          </h4>
          <p className="text-gray-300 text-sm font-bold tracking-wide">
            {notification.message.toUpperCase()}
          </p>
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => onRemove(notification.id)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.1, rotateZ: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Progress Bar */}
      {notification.duration && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white/20 rounded-b-lg"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ 
            duration: notification.duration / 1000, 
            ease: 'linear' 
          }}
        />
      )}
    </motion.div>
  );
}

// Hook for using notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return {
    notifications,
    addNotification,
    removeNotification,
  };
}