import React from 'react';
import { motion } from 'framer-motion';

const certificateProviders = [
  {
    provider: "MySkill",
    subtitle: "Spesialisasi & Learning Path",
    logoUrl: "https://www.google.com/s2/favicons?domain=myskill.id&sz=128",
    accent: "rgba(0,122,255,0.08)",
    accentBorder: "rgba(0,122,255,0.15)",
    certificates: [
      { name: "SQL for Data Analysis", date: "22 Maret 2025" },
      { name: "Backend - Node.js", date: "5 Maret 2025" },
      { name: "Frontend - JavaScript", date: "5 Maret 2025" },
      { name: "Backend - Python (Flask)", date: "13 Februari 2025" },
      { name: "Frontend - HTML", date: "2 Februari 2025" },
      { name: "Website Development Fundamental", date: "31 Januari 2025" },
      { name: "Google Looker Studio", date: "9 Januari 2025" },
      { name: "Basic Data", date: "31 Desember 2024" },
    ]
  },
  {
    provider: "Dicoding Academy",
    subtitle: "Sertifikasi Kompetensi",
    logoUrl: "https://www.google.com/s2/favicons?domain=dicoding.com&sz=128",
    accent: "rgba(52,199,89,0.08)",
    accentBorder: "rgba(52,199,89,0.15)",
    certificates: [
      { name: "Belajar Dasar Structured Query Language (SQL)", date: "2 April 2025" },
      { name: "Belajar Dasar Visualisasi Data", date: "10 Maret 2025" },
      { name: "Belajar Dasar Data Science", date: "6 Maret 2025" },
      { name: "Belajar Dasar AI", date: "19 Februari 2025" },
    ]
  },
  {
    provider: "SoloLearn",
    subtitle: "Course Completion",
    logoUrl: "https://www.google.com/s2/favicons?domain=sololearn.com&sz=128",
    accent: "rgba(88,86,214,0.08)",
    accentBorder: "rgba(88,86,214,0.15)",
    certificates: [
      { name: "Data Programming", date: "29 September 2023" },
      { name: "SQL Intermediate", date: "13 April 2023" },
      { name: "JavaScript", date: "31 Juli 2022" },
    ]
  },
  {
    provider: "BNSP",
    subtitle: "Rekayasa Perangkat Lunak",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Logo_Badan_Nasional_Sertifikasi_Profesi.png",
    accent: "rgba(255,59,48,0.08)",
    accentBorder: "rgba(255,59,48,0.15)",
    certificates: [
      { name: "Sertifikasi Kompetensi Rekayasa Perangkat Lunak", date: "Mar 2024", id: "202404030296" },
    ]
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 md:py-24 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="hidden md:block absolute top-40 right-0 w-[350px] h-[350px] bg-[#007AFF]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute -bottom-20 left-10 w-[300px] h-[300px] bg-[#5856D6]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-4 shadow-glass">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
            <span className="text-[12px] font-medium text-[#636366] tracking-tight">Verified Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1C1C1E] tracking-[-0.03em]">
            Professional Certifications.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {certificateProviders.map((providerGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ 
                y: -8, 
                boxShadow: `0 20px 40px -10px ${providerGroup.accent.replace('0.08', '0.3')}`,
                borderColor: providerGroup.accentBorder.replace('0.15', '0.4')
              }}
              className="rounded-[2.5rem] glass shadow-glass overflow-hidden flex flex-col relative transition-colors duration-500"
              style={{ border: '1px solid rgba(255,255,255,0.6)' }}
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] animate-[shimmer_3s_infinite] pointer-events-none z-20" />

              {/* Colored ambient glow at top */}
              <div className="absolute top-0 left-0 right-0 h-32 opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(180deg, ${providerGroup.accent.replace('0.08', '0.15')} 0%, transparent 100%)` }} />
              
              <div className="p-8 relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-5 mb-8 pb-6 border-b border-black/[0.04]">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-sm relative overflow-hidden"
                    style={{ background: providerGroup.accent, border: `1px solid ${providerGroup.accentBorder}` }}
                  >
                     <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                     {providerGroup.logoUrl ? (
                         <img src={providerGroup.logoUrl} alt={`${providerGroup.provider} Logo`} className="relative z-10 w-9 h-9 object-contain drop-shadow-sm" />
                     ) : (
                         <span className="relative z-10">{providerGroup.icon}</span>
                     )}
                  </motion.div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-[#1C1C1E] tracking-tight leading-none mb-1.5">
                      {providerGroup.provider}
                    </h3>
                    <div className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: providerGroup.accentBorder.replace('0.15', '1') }} />
                      <p className="text-[14px] font-medium text-[#636366]">
                        {providerGroup.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Staggered List */}
                <ul className="space-y-4 flex-grow">
                  {providerGroup.certificates.map((cert, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + (i * 0.08), ease: "easeOut" }}
                      className="flex gap-4 group/item items-start p-2 -mx-2 rounded-xl hover:bg-black/[0.02] transition-colors"
                    >
                      <div className="mt-1.5 w-6 h-6 rounded-full shrink-0 flex items-center justify-center" style={{ background: providerGroup.accent, border: `1px solid ${providerGroup.accentBorder}` }}>
                         <svg className="w-3 h-3" style={{ color: providerGroup.accentBorder.replace('0.15', '0.8') }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-[#1C1C1E] leading-snug group-hover/item:text-[#007AFF] transition-colors">
                          {cert.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                          <p className="text-[13px] text-[#8E8E93] font-medium flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            {cert.date}
                          </p>
                          {cert.id && (
                            <p className="text-[12px] text-ios-blue font-semibold px-1.5 py-0.5 bg-ios-blue/10 rounded-md">
                              ID: {cert.id}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certificates;
