import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
  return (
    <section id="awards" className="py-20 relative bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-end gap-4 mb-16"
        >
          <div className="h-px bg-slate-700 flex-1 max-w-sm"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Awards & Honors
            <span className="text-cyber-green font-mono text-xl ml-2">.04</span>
          </h2>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-3xl group"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyber-green to-cyber-blue opacity-30 blur group-hover:opacity-70 transition duration-500"></div>
            
            <div className="relative bg-cyber-darker border border-slate-700 rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 shrink-0 bg-cyber-dark border border-cyber-green/50 rounded-full flex items-center justify-center text-cyber-green group-hover:text-cyber-blue transition-colors group-hover:border-cyber-blue shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              
              <div className="text-center md:text-left">
                <div className="font-mono text-cyber-green text-sm mb-2 group-hover:text-glow-green transition-all">
                  Tahun 2023
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  2nd Place - Cybersecurity Competition
                </h3>
                <p className="text-slate-400">
                  Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten Sidoarjo. Penghargaan atas keunggulan dalam analisis keamanan, penetrasi sistem, dan hardening server.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Awards;
