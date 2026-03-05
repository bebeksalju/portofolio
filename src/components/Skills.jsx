import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "Python (Flask/FastAPI)", category: "backend" },
    { name: "Proxmox VE", category: "ops" },
    { name: "Docker", category: "ops" },
    { name: "Linux (Ubuntu/CentOS/Debian)", category: "sysadmin" },
    { name: "Server Hardening", category: "security" },
    { name: "MySQL", category: "database" },
    { name: "Bash Scripting", category: "sysadmin" },
    { name: "Git", category: "tools" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            <span className="text-cyber-green font-mono text-xl mr-2">02.</span>
            Technical Arsenal
          </h2>
          <div className="h-px bg-slate-700 flex-1 max-w-sm"></div>
        </motion.div>
        
        <div className="relative">
           {/* Grid aesthetic background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
            maskImage: `radial-gradient(ellipse at center, black 40%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 40%, transparent 70%)`
          }}></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4 justify-center relative z-10 py-10"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 0 15px rgba(0, 255, 65, 0.4)",
                  borderColor: "rgba(0, 255, 65, 0.8)",
                  backgroundColor: "#0a0f1d"
                }}
                className="group relative px-6 py-3 bg-cyber-darker border border-slate-700/50 rounded 
                           transition-colors duration-300 cursor-default overflow-hidden"
              >
                {/* Glow effect on hover inside button */}
                <div className="absolute inset-0 bg-cyber-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <span className="relative z-10 font-mono text-sm md:text-base text-slate-300 group-hover:text-cyber-green transition-colors">
                  {skill.name}
                </span>
                
                {/* Decoration corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-transparent group-hover:border-cyber-green transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-hover:border-cyber-green transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
