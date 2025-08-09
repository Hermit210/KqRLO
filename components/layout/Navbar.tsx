'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Lock } from 'lucide-react';
import { XConnectButton } from '@/components/XConnectButton';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Status3D } from '@/components/ui/Status3D';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' }
  ];

  // const dropdownItems = [
  //   { name: 'Documentation', href: '/docs' },
  //   { name: 'API Reference', href: '/api' },
  //   { name: 'GitHub', href: 'https://github.com' },
  //   { name: 'Support', href: '/support' }
  // ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo with Fuego Styling */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <Logo size={48} className="mr-3" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-wider">
                KQRLO
              </span>
              <span className="text-xs text-white/80 font-bold tracking-wide uppercase">
                Zero-Knowledge Identity
              </span>
            </div>
          </motion.div>
          <div className='flex flex-row justify-center items-center'>
            {/* Desktop Navigation with Fuego Styling */}
            <div className="hidden lg:flex items-baseline space-x-8 flex-1 justify-center px-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-all duration-300 font-medium relative group px-3 py-2 text-sm tracking-wider uppercase"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 shadow-sm shadow-white/50"></span>
                </motion.a>
              ))}

              {/* Resources Dropdown */}
              {/* <div className="relative">
              <motion.button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-1 text-[#8B949E] hover:text-[#C9D1D9] transition-colors duration-200 font-medium px-2 py-2 whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </motion.button>

               <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-[#161B22]/95 backdrop-blur-lg border border-[#30363D] rounded-lg shadow-xl py-2"
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-[#8B949E] hover:text-[#C9D1D9] hover:bg-[#58A6FF]/10 transition-colors duration-200"
                        onClick={() => setShowDropdown(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence> 
            </div> */}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeSwitcher />

              {/* Wallet Connect Button */}
              <div className="hidden md:block">
                <XConnectButton />
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-black dark:text-white hover:text-orange-500 transition-colors duration-300 font-bold text-medium-bold py-2 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Resources */}
                {/* <div className="pt-2 border-t border-[#30363D]">
                  <div className="text-sm text-[#8B949E] font-medium mb-2">Resources</div>
                  {dropdownItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-[#8B949E] hover:text-[#C9D1D9] transition-colors duration-200 py-1 pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div> */}

                {/* Mobile Wallet Connect */}
                <div className="mt-4 flex justify-center">
                  <XConnectButton />
                </div>

                {/* Mobile Privacy Status */}
                <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg mt-2">
                  <Lock className="h-4 w-4 text-white" />
                  <span className="text-sm text-white font-medium">End-to-End Encrypted</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Privacy Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block absolute top-full left-0 right-0 glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center">
            <Status3D />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}