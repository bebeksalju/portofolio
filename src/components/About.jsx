import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-cyber-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            <span className="text-cyber-green font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-slate-700 flex-1 max-w-sm"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-400 text-lg leading-relaxed"
          >
            <p>
              Halo! Saya adalah seorang <span className="text-cyber-blue font-medium">DevOps Engineer</span> dan <span className="text-cyber-blue font-medium">Full-Stack Developer</span> dengan pengalaman lebih dari <span className="text-cyber-green font-mono">3 tahun</span> dalam industri IT.
            </p>
            <p>
              Fokus utama saya adalah mengoptimalkan infrastruktur virtual, melakukan <span className="text-slate-300 italic">hardening</span> pada lingkungan Linux, dan mengembangkan aplikasi web yang <span className="text-slate-300 italic">scalable</span>. Saya menggabungkan keahlian pengembangan perangkat lunak dengan prinsip-prinsip operasional untuk membangun sistem yang tangguh.
            </p>
            <p>
              Selama karir saya, saya terbukti sukses dalam mengotomatisasi alur kerja yang mampu <span className="text-cyber-green font-medium">meningkatkan efisiensi operasional hingga 25%</span>. Saya juga diakui secara regional atas keahlian keamanan siber dan sangat mahir dalam mengelola Proxmox, Docker, serta berbagai framework backend modern.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              animate={{ rotate: [3, 5, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-cyber-green/5 blur-2xl rounded-lg"
            />
            <motion.div 
              whileHover={{ scale: 1.02, borderColor: "#00ff41", boxShadow: "0 0 20px rgba(0,255,65,0.2)" }}
              className="bg-cyber-dark border border-slate-700 rounded-lg p-8 relative z-10 transition-colors duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                <div className="text-slate-500 text-sm font-mono flex-1 text-center pr-10">~/profile/stats.sh</div>
              </div>
              
              <div className="font-mono text-sm text-slate-300 space-y-4">
                <div className="group-hover:text-cyber-green transition-colors">
                  <span className="text-cyber-blue">$</span> whoami
                  <br />
                  <span className="text-slate-400">&gt; Kurnia Hansen H. S.</span>
                </div>
                <div>
                  <span className="text-cyber-blue">$</span> cat location.txt
                  <br />
                  <span className="text-slate-400">&gt; Indonesia</span>
                </div>
                <div>
                  <span className="text-cyber-blue">$</span> ./get_focus.sh
                  <br />
                  <span className="text-slate-400">&gt; DevOps_Culture, Cloud_Infrastructure, Secure_Coding</span>
                </div>
                <div>
                  <span className="text-cyber-blue text-glow-blue animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
