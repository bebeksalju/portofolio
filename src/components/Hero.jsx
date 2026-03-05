import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ['DevOps Engineer', 'Cyber Security', 'Fullstack Developer'];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = roles[currentRole];
    let timeout;
    if (!isDeleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } } };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 pb-32 overflow-hidden">
      {/* Soft ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#007AFF]/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-[#5856D6]/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] bg-[#34C759]/8 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* iOS-style label badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass shadow-glass mb-8">
              <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
              <p className="text-[#636366] text-[13px] font-medium tracking-tight">
                Available for work
              </p>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-8xl font-black mb-5 leading-[1.05] tracking-[-0.03em] text-[#1C1C1E]">
            Kurnia Hansen
          </motion.h1>

          {/* Dynamic role */}
          <motion.div variants={item} className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5856D6]">
                {displayed}
              </span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-7 lg:h-9 bg-[#007AFF] ml-1 rounded-full align-middle"
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-[17px] text-[#636366] mb-10 max-w-xl leading-relaxed font-normal">
            DevOps Engineer & Full-Stack Developer dengan 3+ tahun pengalaman. Mengotomatisasi infrastruktur, hardening Linux, dan membangun aplikasi web yang scalable.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-16 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.02, boxShadow: '0 8px 40px rgba(0,122,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
              href="#projects" 
              className="px-8 py-4 bg-[#007AFF] text-white text-[15px] font-semibold rounded-2xl shadow-ios-blue transition-all tracking-tight flex items-center justify-center gap-2"
            >
              Explore Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3" />
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href="#contact" 
              className="px-8 py-4 glass text-[#1C1C1E] text-[15px] font-semibold rounded-2xl shadow-glass transition-all tracking-tight flex items-center justify-center gap-2"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats — iOS glass pills */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { value: '3+', label: 'Years Experience', icon: '⚡' },
              { value: '15+', label: 'Projects', icon: '🚀' },
              { value: '2nd', label: 'Cybersec LKS', icon: '🏆' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-3 px-5 py-3.5 glass rounded-2xl shadow-glass"
              >
                <span className="text-xl">{stat.icon}</span>
                <div className="text-left">
                  <h4 className="text-[22px] font-black text-[#1C1C1E] leading-none tracking-tight">{stat.value}</h4>
                  <p className="text-[11px] text-[#636366] font-medium mt-0.5 tracking-tight">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
