import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#bento' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];

  return (
    <header className="fixed bottom-6 left-0 right-0 z-[100] pointer-events-none px-4 md:px-6 flex justify-center">
      <div className="max-w-max mx-auto w-full">
        <motion.nav 
          initial={{ y: 100, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
          className="pointer-events-auto relative w-full"
        >
          {/* Mobile Menu Dropdown (pops UP from the island) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="md:hidden absolute bottom-full mb-4 left-0 right-0 p-4 rounded-3xl z-40 overflow-hidden glass-strong shadow-glass-lg"
              >
                {/* Subtle tint layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-ios-blue/5 to-transparent pointer-events-none rounded-3xl" />
                <div className="flex flex-col space-y-1.5 relative z-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-5 py-3.5 text-[15px] font-medium text-[#1C1C1E] hover:text-ios-blue hover:bg-ios-blue/8 active:bg-ios-blue/15 rounded-2xl transition-colors text-center tracking-[-0.01em]"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="h-px bg-[#3C3C43]/12 my-2 mx-4"></div>
                  <a 
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-5 py-4 text-center text-[15px] font-semibold text-white bg-[#007AFF] rounded-2xl mt-1 shadow-ios-blue"
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic Island */}
          <div className={`
            rounded-full flex justify-between items-center transition-all duration-500 w-full mx-auto
            ${isScrolled 
              ? 'glass-strong px-5 py-3 md:px-6 md:gap-8 shadow-glass-md' 
              : 'glass px-4 py-2.5 md:px-5 md:gap-4 shadow-glass'
            }
          `}>
            {/* Logo */}
            <a href="#home" className="text-[17px] md:text-[18px] font-semibold text-[#1C1C1E] flex items-center group flex-shrink-0 tracking-tight pl-1">
              <span className="text-[#007AFF] mr-1 font-bold text-xl select-none">K</span>
              <span>Hansen</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-0.5 h-4 bg-[#007AFF] ml-1.5 rounded-full"
              />
            </a>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-[14px] font-medium text-[#636366] hover:text-[#007AFF] hover:bg-[#007AFF]/8 rounded-full transition-colors whitespace-nowrap tracking-[-0.01em]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block flex-shrink-0">
              <a 
                href="#contact" 
                className="px-5 py-2.5 text-[14px] font-semibold text-white bg-[#007AFF] rounded-full shadow-ios-blue hover:shadow-ios-blue-lg hover:bg-[#0056CC] transition-all whitespace-nowrap block"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden flex-shrink-0">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none p-2 rounded-full transition-colors ${isMobileMenuOpen ? 'bg-[#007AFF]/10 text-[#007AFF]' : 'text-[#636366] hover:bg-black/5'}`}
              >
                <motion.svg 
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  {isMobileMenuOpen 
                    ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  }
                </motion.svg>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
