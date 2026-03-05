import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Docker", icon: "🐳" },
  { name: "Linux", icon: "🐧" },
  { name: "Proxmox", icon: "🖥️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Bash", icon: "💻" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git", icon: "🌿" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Nginx", icon: "⚙️" },
  { name: "Ansible", icon: "🤖" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } }
};

const BentoGrid = () => {
  return (
    <section id="bento" className="py-20 md:py-24 relative overflow-hidden">
      {/* Ambient blob */}
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-[#5856D6]/6 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4 shadow-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
            <span className="text-[12px] font-medium text-[#636366] tracking-tight">About & Skills</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1C1E] tracking-[-0.03em]">
            Arsenal & Background.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 md:auto-rows-[260px]">
          
          {/* Bio Card — Large */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl glass shadow-glass p-7 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[280px] md:min-h-0"
          >
            {/* Decorative tint */}
            <div className="absolute top-0 right-0 w-52 h-52 bg-[#007AFF]/6 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-[#007AFF] flex items-center justify-center mb-5 shadow-ios-blue">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-3 tracking-[-0.02em]">Bridging Dev & Ops</h3>
              <p className="text-[#636366] leading-relaxed text-[15px]">
                Saya seorang <span className="text-[#1C1C1E] font-semibold">DevOps Engineer</span> dan <span className="text-[#1C1C1E] font-semibold">Full-Stack Developer</span> dengan pengalaman lebih dari 3 tahun. Fokus pada optimasi infrastruktur virtual, <em>hardening</em> lingkungan Linux, dan membangun arsitektur web yang scalable dan aman.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
              <span className="text-[13px] text-[#636366] font-medium">Available for impact</span>
            </div>
          </motion.div>

          {/* Skills Marquee */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2 rounded-3xl glass shadow-glass overflow-hidden relative flex flex-col justify-center min-h-[200px] md:min-h-0 py-6"
          >
            <p className="text-[11px] font-semibold text-[#636366] uppercase tracking-[0.08em] mb-5 px-6">Tech Stack</p>
            
            <div className="w-full overflow-hidden flex flex-col gap-3 relative">
              {/* Row 1 */}
              <div className="flex gap-2.5 w-max animate-marquee">
                {[...skills, ...skills].map((skill, i) => (
                  <div key={`r1-${i}`} className="flex items-center gap-1.5 px-3.5 py-2 bg-white/70 border border-white/60 rounded-xl whitespace-nowrap shadow-sm">
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-[#1C1C1E] font-medium text-[13px]">{skill.name}</span>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-2.5 w-max animate-marquee-reverse">
                {[...skills, ...skills].reverse().map((skill, i) => (
                  <div key={`r2-${i}`} className="flex items-center gap-1.5 px-3.5 py-2 bg-white/70 border border-white/60 rounded-xl whitespace-nowrap shadow-sm">
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-[#1C1C1E] font-medium text-[13px]">{skill.name}</span>
                  </div>
                ))}
              </div>
              {/* Fade edges */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/60 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/60 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl glass shadow-glass overflow-hidden relative group min-h-[200px] md:min-h-0 p-7 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/6 to-[#5856D6]/6 pointer-events-none" />
            <div className="text-3xl mb-3">🇮🇩</div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#636366] uppercase tracking-wider">Location</span>
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] tracking-tight">Indonesia 🌏</h3>
              <p className="text-[13px] text-[#636366] mt-1">Kalimantan Selatan</p>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center min-h-[200px] md:min-h-0 p-7 group"
            style={{ background: 'linear-gradient(135deg, rgba(0,122,255,0.12) 0%, rgba(88,86,214,0.10) 100%)', border: '1px solid rgba(0,122,255,0.15)' }}
          >
            <div className="backdrop-blur-sm absolute inset-0 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-5xl font-black text-[#007AFF] tracking-tight mb-2">+25%</div>
              <p className="text-[13px] text-[#636366] font-medium leading-snug">Efficiency via Automation</p>
            </div>
            <svg className="absolute w-24 h-24 text-[#007AFF]/10 -top-4 -right-4 group-hover:rotate-45 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
