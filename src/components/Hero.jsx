import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "whoami";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[#030610]">
      {/* Absolute Dynamic Mesh Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-0 right-0 top-0 h-[300px] md:h-[500px] w-full bg-gradient-to-b from-cyber-blue/5 to-transparent"></div>
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyber-blue/10 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyber-green/10 rounded-full blur-[80px] md:blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZD0iTTAgMEg4VjhIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmMTcyYSIgc3Ryb2tlLW9wYWNpdHk9IjAuMyIgc3Ryb2tlLWRhc2hhcnJheT0iMSA3Ii8+Cjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left pt-6 lg:pt-0"
          >
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md mb-6 md:mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(0,255,65,0.05)]">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyber-green animate-pulse"></span>
              <p className="text-cyber-green font-mono text-xs md:text-sm tracking-wide">
                $ {typingText}<span className="inline-block w-1.5 md:w-2 bg-cyber-green animate-pulse ml-0.5">&nbsp;</span>
              </p>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tighter">
              <span className="block text-slate-100">Kurnia Hansen</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-emerald-400 to-cyber-blue drop-shadow-lg pb-2">
                DevOps & Web.
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 max-w-lg md:max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Membangun infrastruktur skalabel dan arsitektur web modern yang tangguh. Merajut sekuritas dengan peforma tak kenal kompromi.
            </p>
            
            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-cyber-darker rounded-xl overflow-hidden font-mono font-bold text-cyber-green border border-cyber-green/50 hover:border-cyber-green shadow-[0_0_20px_rgba(0,255,65,0.15)] transition-all text-sm md:text-base w-full sm:w-auto text-center"
              >
                <div className="absolute inset-0 bg-cyber-green/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out skew-x-12"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
                </span>
              </motion.a>
            </div>
            
            {/* Mini Stats */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 border-t border-slate-800/50 pt-6 md:pt-8">
               <div className="text-center md:text-left">
                 <h4 className="text-2xl md:text-3xl font-black text-slate-200">3+</h4>
                 <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-wider">Years Exp.</p>
               </div>
               <div className="w-px h-8 md:h-12 bg-slate-800 hidden sm:block"></div>
               <div className="text-center md:text-left">
                 <h4 className="text-2xl md:text-3xl font-black text-slate-200">15+</h4>
                 <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-wider">Projects</p>
               </div>
               <div className="w-px h-8 md:h-12 bg-slate-800 hidden sm:block"></div>
               <div className="text-center md:text-left w-full sm:w-auto mt-4 sm:mt-0">
                 <h4 className="text-2xl md:text-3xl font-black text-slate-200">2nd</h4>
                 <p className="text-[10px] md:text-xs font-mono text-cyber-green uppercase tracking-wider text-glow-green">Cybersec LKS</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 hidden md:flex items-center justify-center relative w-full h-[400px] md:h-[500px] lg:h-[600px] scale-75 lg:scale-100 mt-10 lg:mt-0"
          >
            {/* Orbital System */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none">
              
              {/* Outer Orbit */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-slate-800/60 rounded-full flex items-center justify-center"
              >
                 <div className="absolute -top-4 w-12 h-12 bg-[#030610] border border-cyber-blue/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)] text- cyber-blue rotate-0">
                    <svg className="w-6 h-6 text-cyber-blue" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.05L7 16l1.41-1.41L12 18.22l3.59-3.63L17 16l-5 5.05zm0-18.1L17 8l-1.41 1.41L12 5.78 8.41 9.41 7 8l5-5.05zm5 9.05h1.5v1.5H17v-1.5zm-11.5 0H7v1.5H5.5v-1.5zm11.5-3H17v1.5H17v-1.5zm-11.5 0H7v1.5H5.5v-1.5zm11.5 6H17v1.5H17v-1.5zm-11.5 0H7v1.5H5.5v-1.5z"/></svg>
                 </div>
                 <div className="absolute -bottom-4 w-12 h-12 bg-[#030610] border border-cyber-green/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.2)] text-cyber-green rotate-180">
                    <svg className="w-6 h-6 text-cyber-green" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                 </div>
              </motion.div>

              {/* Inner Orbit */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] border border-slate-700/60 rounded-full flex items-center justify-center border-dashed"
              >
                 <div className="absolute -left-5 md:-left-6 w-12 h-12 md:w-14 md:h-14 bg-cyber-dark border border-slate-600 rounded-full flex items-center justify-center shadow-lg -rotate-45">
                    <span className="font-mono text-xs md:text-sm text-slate-300 font-bold">PY</span>
                 </div>
                 <div className="absolute -right-5 md:-right-6 w-12 h-12 md:w-14 md:h-14 bg-[#111] border border-cyber-blue/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.1)] rotate-45">
                    <span className="font-mono text-xs md:text-sm text-cyber-blue font-bold">DB</span>
                 </div>
              </motion.div>

              {/* Core Avatar */}
              <div className="absolute z-20 w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-cyber-darker to-slate-800 border-4 border-slate-900 shadow-[0_0_40px_rgba(0,255,65,0.2)] p-1 overflow-hidden group pointer-events-auto">
                 <div className="w-full h-full rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-cyber-green mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <div className="w-full h-full bg-[#0a0f1d] flex items-center justify-center">
                      <svg className="w-20 h-20 md:w-24 md:h-24 text-slate-700 mt-4 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.162Q10.35 13 12 13q1.65 0 3.25.388 1.6.387 3.15 1.162.725.362 1.163 1.075Q20 16.35 20 17.2V20Z"/>
                      </svg>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
