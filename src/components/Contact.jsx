import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#030610] pb-8 md:pb-10 relative overflow-hidden">
      
      {/* Massive Glowing Footer CTA */}
      <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 border-t border-slate-800/30 overflow-hidden">
        {/* Background Ambient Glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-cyber-green/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEg4VjhIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmMTcyYSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLWRhc2hhcnJheT0iMSA3Ii8+Cjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-100 mb-6 md:mb-8 tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">Build?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto font-medium px-2">
              Mari bertransformasi digital. Saya siap mengeksekusi visi teknologi Anda menjadi infrastruktur nyata.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,65,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:kurniahansenn@gmail.com" 
              className="inline-flex items-center gap-2 md:gap-3 px-8 py-4 md:px-10 md:py-5 bg-cyber-green text-cyber-darker font-bold text-lg md:text-xl rounded-full tracking-wide transition-all"
            >
              Start a Conversation
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Traditional Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="https://linkedin.com/in/kurnia-hansen-hs" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors flex items-center gap-2 font-mono text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a href="tel:+6287861749596" className="text-slate-400 hover:text-cyber-green transition-colors flex items-center gap-2 font-mono text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              WhatsApp
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-500 font-mono text-[10px] md:text-sm">
              Designed & Built with React <span className="text-cyber-green">✦</span> Framer Motion
            </p>
            <p className="text-slate-600 text-[10px] md:text-xs mt-1">
              &copy; {new Date().getFullYear()} Kurnia Hansen H. S.
            </p>
          </div>
          
        </div>
      </div>
      
    </footer>
  );
};

export default Contact;
