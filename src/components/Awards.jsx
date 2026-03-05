import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
  return (
    <section id="awards" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-[250px] h-[250px] bg-[#FF9500]/6 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4 shadow-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500]" />
            <span className="text-[12px] font-medium text-[#636366] tracking-tight">Recognition</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1C1E] tracking-[-0.03em]">
            Awards & Honors.
          </h2>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -4 }}
            className="relative w-full max-w-3xl rounded-3xl glass shadow-glass overflow-hidden group"
          >
            {/* Top gold gradient accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF9500] via-[#FFCC00] to-[#FF9500]" />
            
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-7">
              {/* Trophy icon */}
              <div className="w-20 h-20 shrink-0 rounded-3xl bg-gradient-to-br from-[#FF9500]/15 to-[#FFCC00]/15 border border-[#FF9500]/20 flex items-center justify-center shadow-sm">
                <span className="text-4xl">🏆</span>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg tracking-tight" style={{ background: 'rgba(255,149,0,0.10)', color: '#FF9500', border: '1px solid rgba(255,149,0,0.15)' }}>
                    2023
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg tracking-tight" style={{ background: 'rgba(255,204,0,0.10)', color: '#CC8800', border: '1px solid rgba(255,204,0,0.15)' }}>
                    Regional
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-2 tracking-[-0.02em]">
                  2nd Place — Cybersecurity Competition
                </h3>
                <p className="text-[14px] text-[#636366] leading-relaxed">
                  Lomba Kompetensi Siswa (LKS) Tingkat Kabupaten. Penghargaan atas keunggulan dalam analisis keamanan, penetrasi sistem, dan hardening server.
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
