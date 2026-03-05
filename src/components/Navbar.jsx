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
    { name: 'About & Skills', href: '#bento' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none px-4 md:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto relative w-full"
        >
          <div className={`
            rounded-full px-5 py-3 md:px-6 md:py-3 flex justify-between items-center transition-all duration-300 w-full
            ${isScrolled 
              ? 'bg-cyber-dark/80 backdrop-blur-xl border border-cyber-green/30 shadow-[0_4px_30px_rgba(0,255,65,0.15)]' 
              : 'bg-[#030610]/90 backdrop-blur-md border border-slate-700/80 shadow-lg'
            }
          `}>
            <a href="#home" className="text-lg md:text-xl font-mono font-bold text-slate-200 flex items-center group flex-shrink-0">
              <span className="text-cyber-green mr-1">&gt;</span> 
              KH<span className="w-1.5 h-3 md:w-2 md:h-4 bg-cyber-green ml-1 group-hover:animate-pulse">_</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 bg-cyber-darker/50 rounded-full px-2 py-1 border border-slate-800/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyber-green transition-colors font-mono text-xs lg:text-sm px-4 py-2 rounded-full hover:bg-cyber-green/10 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block flex-shrink-0">
              <a href="#contact" className="px-5 py-2 text-sm font-mono text-cyber-darker bg-cyber-green rounded-full hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:scale-105 transition-all font-bold whitespace-nowrap">
                Let's Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden flex-shrink-0">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-cyber-green focus:outline-none p-1.5 -mr-1"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="md:hidden absolute top-full left-0 right-0 mt-3 p-4 bg-cyber-darker/95 backdrop-blur-xl border border-cyber-green/30 rounded-2xl shadow-2xl z-50 w-full"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm font-mono text-slate-300 hover:text-cyber-green hover:bg-cyber-green/10 rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="h-px bg-slate-800 my-2"></div>
                  <a 
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-center text-sm font-mono text-cyber-darker bg-cyber-green rounded-xl font-bold mt-2 hover:bg-emerald-400 transition-colors"
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
