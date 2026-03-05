import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Inventory Management System",
    description: "Sistem absensi dan kasir modern dengan fitur pelacakan inventaris real-time, manajemen barang, serta rekapitulasi penjualan harian. Dirancang untuk efisiensi operasional UMKM.",
    tech: ["PHP", "CodeIgniter 4", "Bootstrap 5", "MySQL"],
    link: "#",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Shipment QR Code Scanner",
    description: "Aplikasi internal untuk optimasi logistik. Karyawan dapat melakukan pemindaian barcode/QR code resi pengiriman untuk melacak status paket secara otomatis dan akurat.",
    tech: ["PHP", "Bootstrap 5", "JavaScript", "Zxing Scanner"],
    link: "#",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Infrastructure & Security Lab",
    description: "Laboratorium virtual untuk simulasi hardening server dan keamanan jaringan. Proyek eksperimental untuk menguji berbagai kerentanan dan strategi mitigasi di lingkungan isolasi.",
    tech: ["Proxmox", "Linux Server", "Docker", "Bash"],
    link: "#",
    color: "from-purple-500/20 to-indigo-500/20"
  }
];

const ExperienceProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative bg-[#030610]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-blue/5 via-transparent to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-green/5 via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyber-blue animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-mono text-cyber-blue uppercase tracking-wider">Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 flex flex-col md:flex-row items-center gap-3 md:gap-4">
            Featured Works
            <span className="w-12 md:w-16 h-1 bg-cyber-blue rounded-full mt-1 md:mt-0 inline-block"></span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-[2rem] p-1 bg-gradient-to-b from-slate-800 to-slate-900/50 hover:from-cyber-green/50 hover:to-cyber-blue/50 transition-all duration-500"
            >
              {/* Card Aura/Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-green to-cyber-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-[2rem]" />
              
              {/* Inner Acrylic Card */}
              <div className="relative h-full bg-[#0a0f1d] rounded-[30px] p-6 md:p-8 flex flex-col overflow-hidden">
                
                {/* Subtle top light reflection */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                {/* Project Ambient Color */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-5 md:mb-6 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/80 border border-slate-700 rounded-xl flex items-center justify-center group-hover:border-cyber-green/50 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-cyber-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                  </div>
                  <a href={project.link} className="text-slate-500 hover:text-cyber-blue transition-colors p-2 -mr-2">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"></path></svg>
                  </a>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-green group-hover:to-cyber-blue transition-all">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6 md:mb-8">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack Footer */}
                <div className="relative z-10 mt-auto pt-5 md:pt-6 border-t border-slate-800/50">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs font-mono text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-lg group-hover:border-slate-600 transition-colors whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ExperienceProjects;
