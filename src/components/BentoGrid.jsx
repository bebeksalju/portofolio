import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  const skills = [
    { name: "Python", color: "text-blue-400" },
    { name: "React", color: "text-cyan-400" },
    { name: "Docker", color: "text-blue-500" },
    { name: "Linux", color: "text-yellow-500" },
    { name: "Proxmox", color: "text-orange-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Bash", color: "text-slate-300" },
    { name: "MySQL", color: "text-blue-300" },
    { name: "Git", color: "text-red-400" },
    { name: "Tailwind", color: "text-teal-400" }
  ];

  return (
    <section id="bento" className="py-20 md:py-24 relative bg-[#030610] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            Arsenal & Background.
            <span className="w-12 h-1 bg-cyber-green rounded-full inline-block mt-2 sm:mt-0"></span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout - Responsive grid rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[250px]">
          
          {/* Main Bio Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-slate-900/50 border border-slate-800 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative min-h-[300px] md:min-h-0"
          >
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-cyber-blue/5 rounded-full blur-3xl group-hover:bg-cyber-blue/10 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyber-dark border border-slate-700 flex items-center justify-center mb-4 md:mb-6">
                 <svg className="w-5 h-5 md:w-6 md:h-6 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-3 md:mb-4">Bridging Dev & Ops</h3>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                Seorang <span className="text-slate-200 font-medium tracking-wide">DevOps Engineer</span> dan <span className="text-slate-200 font-medium tracking-wide">Full-Stack Developer</span>. Fokus saya adalah mengoptimangkan infrastruktur, melakukan *hardening* lingkungan, dan membangun arsitektur web yang tahan banting.
              </p>
            </div>
            
            <div className="mt-6 md:mt-8 flex items-center text-xs md:text-sm font-mono text-slate-500 relative z-10">
              <span className="text-cyber-green mr-2 animate-pulse">●</span> Available for impact
            </div>
          </motion.div>

          {/* Infinite Marquee Skills */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 rounded-[2rem] bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm p-6 overflow-hidden relative flex flex-col justify-center min-h-[200px] md:min-h-0"
          >
             <h3 className="text-xs md:text-sm font-mono text-slate-500 mb-4 md:mb-6 uppercase tracking-widest pl-2 z-10">Tech Stack</h3>
             
             <div className="w-full overflow-hidden flex flex-col gap-3 md:gap-4 relative z-0">
               {/* Row 1 */}
               <div className="flex gap-3 md:gap-4 w-max animate-marquee">
                  {[...skills, ...skills].map((skill, index) => (
                    <div key={`r1-${index}`} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg md:rounded-xl whitespace-nowrap">
                       <span className={`text-lg md:text-xl ${skill.color}`}>•</span>
                       <span className="text-slate-300 font-medium text-sm md:text-base">{skill.name}</span>
                    </div>
                  ))}
               </div>
               
               {/* Row 2 (Reverse) */}
               <div className="flex gap-3 md:gap-4 w-max animate-marquee-reverse">
                  {[...skills, ...skills].reverse().map((skill, index) => (
                    <div key={`r2-${index}`} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg md:rounded-xl whitespace-nowrap">
                       <span className={`text-lg md:text-xl ${skill.color}`}>•</span>
                       <span className="text-slate-300 font-medium text-sm md:text-base">{skill.name}</span>
                    </div>
                  ))}
               </div>
             </div>
             
             {/* Fade edges */}
             <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0d1222] to-transparent pointer-events-none z-10"></div>
             <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0d1222] to-transparent pointer-events-none z-10"></div>
          </motion.div>

          {/* Location Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] bg-slate-900/80 border border-slate-800 overflow-hidden relative group min-h-[200px] md:min-h-0"
          >
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBmZjQxIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')]"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            
            <div className="absolute bottom-6 left-6 z-20">
               <div className="flex items-center gap-2 mb-2">
                 <div className="relative">
                   <div className="w-2 h-2 rounded-full bg-cyber-green animate-ping absolute"></div>
                   <div className="relative w-2 h-2 rounded-full bg-cyber-green"></div>
                 </div>
                 <span className="text-xs md:text-sm font-mono text-cyber-green">Located In</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-slate-100">Indonesia</h3>
            </div>
          </motion.div>

          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="rounded-[2rem] bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[200px] md:min-h-0"
          >
             <div className="absolute inset-0 bg-cyber-dark mix-blend-overlay"></div>
             <div className="relative z-10">
               <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-400 mb-2">+25%</div>
               <p className="text-xs md:text-sm text-slate-300 font-medium px-4">Efficiency Increase via Automation</p>
             </div>
             <svg className="absolute w-24 h-24 md:w-32 md:h-32 text-cyber-green/10 -top-6 -right-6 md:-top-10 md:-right-10 group-hover:rotate-45 transition-transform duration-700 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
