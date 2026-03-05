import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Inventory Management System",
    description: "Sistem absensi dan kasir modern dengan fitur pelacakan inventaris real-time, manajemen barang, serta rekapitulasi penjualan harian. Dirancang untuk efisiensi operasional UMKM.",
    tech: ["PHP", "CodeIgniter 4", "Bootstrap 5", "MySQL"],
    link: "#",
    icon: "📦",
    accent: "rgba(0,122,255,0.08)",
    accentBorder: "rgba(0,122,255,0.15)",
    tagColor: "#007AFF",
  },
  {
    title: "Shipment QR Code Scanner",
    description: "Aplikasi internal untuk optimasi logistik. Karyawan dapat melakukan pemindaian barcode/QR code resi pengiriman untuk melacak status paket secara otomatis dan akurat.",
    tech: ["PHP", "Bootstrap 5", "JavaScript", "Zxing Scanner"],
    link: "#",
    icon: "📷",
    accent: "rgba(52,199,89,0.08)",
    accentBorder: "rgba(52,199,89,0.15)",
    tagColor: "#34C759",
  },
  {
    title: "Infrastructure & Security Lab",
    description: "Laboratorium virtual untuk simulasi hardening server dan keamanan jaringan. Proyek eksperimental untuk menguji berbagai kerentanan dan strategi mitigasi di lingkungan isolasi.",
    tech: ["Proxmox", "Linux Server", "Docker", "Bash"],
    link: "#",
    icon: "🔐",
    accent: "rgba(88,86,214,0.08)",
    accentBorder: "rgba(88,86,214,0.15)",
    tagColor: "#5856D6",
  }
];

const ExperienceProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -bottom-20 left-0 w-[350px] h-[350px] bg-[#34C759]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4 shadow-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5856D6]" />
            <span className="text-[12px] font-medium text-[#636366] tracking-tight">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1C1E] tracking-[-0.03em]">
            Featured Works.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: `rgba(255,255,255,0.60)`,
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.65)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
              }}
            >
              {/* Colored tint at top */}
              <div className="absolute top-0 left-0 right-0 h-24 rounded-t-3xl opacity-60 pointer-events-none" style={{ background: `linear-gradient(180deg, ${project.accent} 0%, transparent 100%)` }} />
              
              <div className="p-7 flex flex-col flex-grow relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-sm"
                    style={{ background: project.accent, border: `1px solid ${project.accentBorder}` }}
                  >
                    {project.icon}
                  </div>
                  <a 
                    href={project.link} 
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors -mr-1"
                  >
                    <svg className="w-4 h-4 text-[#636366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-[18px] font-bold text-[#1C1C1E] mb-2.5 tracking-[-0.01em] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#636366] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="mt-6 pt-5 border-t border-black/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg tracking-tight"
                        style={{ background: project.accent, color: project.tagColor, border: `1px solid ${project.accentBorder}` }}
                      >
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
