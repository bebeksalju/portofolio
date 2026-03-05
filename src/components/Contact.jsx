import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" className="relative pb-32 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#007AFF]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-[#5856D6]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 border-t border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-8 shadow-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
              <span className="text-[12px] font-medium text-[#636366]">Open to opportunities</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#1C1C1E] mb-6 tracking-[-0.04em] leading-[1.05]">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5856D6]">Build?</span>
            </h2>
            <p className="text-[17px] text-[#636366] mb-10 max-w-xl mx-auto leading-relaxed">
              Mari bertransformasi digital. Saya siap mengeksekusi visi teknologi Anda menjadi infrastruktur nyata.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.03, boxShadow: '0 12px 50px rgba(0,122,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              href="mailto:kurniahansenn@gmail.com" 
              className="inline-flex items-center gap-3 px-9 py-4 bg-[#007AFF] text-white font-semibold text-[17px] rounded-2xl shadow-ios-blue tracking-tight transition-all"
            >
              Start a Conversation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Footer Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 p-6 md:p-7 rounded-3xl glass shadow-glass">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://linkedin.com/in/kurnia-hansen-hs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[13px] font-medium text-[#636366] hover:text-[#007AFF] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <div className="hidden sm:block w-px h-4 bg-black/10" />
            <a 
              href="mailto:kurniahansenn@gmail.com" 
              className="flex items-center gap-2 text-[13px] font-medium text-[#636366] hover:text-[#007AFF] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-[12px] text-[#AEAEB2] font-medium">
              Built with React & Framer Motion
            </p>
            <p className="text-[11px] text-[#C7C7CC] mt-0.5">
              © {new Date().getFullYear()} Kurnia Hansen H. S.
            </p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Contact;
