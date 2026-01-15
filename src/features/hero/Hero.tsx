import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Hero = () => {
  // Social Media Data
  const socialLinks = [
    { id: 1, icon: <Github size={20} />, url: "https://github.com/vanshbansal67", label: "GITHUB" },
    { id: 2, icon: <Linkedin size={20} />, url: "https://linkedin.com/in/vanshbansal67", label: "LINKEDIN" },
    { id: 3, icon: <Mail size={20} />, url: "mailto:bnslgvansh67@gmail.com", label: "GMAIL" },
  ];

  const typingContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const typingItem = {
    hidden: { display: "none", opacity: 0 },
    show: { display: "inline", opacity: 1 }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden bg-[#050505]">
      
      {/* Profile Photo & Social HUD Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-10 right-6 md:top-20 md:right-20 z-20 flex flex-col items-end gap-6"
      >
        {/* Profile Image with Gaming Frame */}
        <div className="relative group cursor-target">
          <div className="absolute -inset-2 border border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-colors duration-500 animate-pulse" />
          <img 
            src="/images/profile.png" 
            alt="Profile" 
            className="w-32 h-32 md:w-48 md:h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
          />
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF3E3E]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF3E3E]" />
        </div>

        {/* Social Links HUD */}
       {/* Social Links HUD - Fixed Alignment */}
<div className="flex flex-col items-end gap-4 mt-4">
  {socialLinks.map((link) => (
    <motion.a
      key={link.id}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: -8 }}
      className="flex items-center justify-end gap-4 group cursor-target w-fit"
    >
      {/* Label - Hidden by default, slides out on hover */}
      <span className="text-[10px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-[0.2em] pointer-events-none translate-x-2 group-hover:translate-x-0">
        {link.label}
      </span>

      {/* Icon Box - Fixed width and height for perfect vertical alignment */}
      <div className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#FF3E3E] group-hover:border-[#FF3E3E] group-hover:bg-[#FF3E3E]/10 transition-all duration-300 relative shrink-0">
        {link.icon}
        
        {/* HUD Targeting Corners */}
        <div className="absolute top-0 right-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
      </div>
    </motion.a>
  ))}
</div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[#FF3E3E] font-mono font-bold tracking-[0.5em] mb-4 flex items-center gap-2">
            <Terminal size={16} /> // SYSTEM_INITIALIZED
          </h3>
          
          <h1 className="text-6xl md:text-9xl font-gaming font-black uppercase glitch-text mb-6">
            VANSHAJ <span className="text-[#FF3E3E]">BANSAL</span>
          </h1>

          {/* Designation */}
          <motion.div 
            variants={typingContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-xl md:text-3xl font-mono font-bold text-white/80 mb-8"
          >
            {"FRONTEND_DEVELOPER // UI_ARCHITECT".split("").map((char, i) => (
              <motion.span key={i} variants={typingItem}>{char}</motion.span>
            ))}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-6 md:h-8 bg-[#FF3E3E] ml-1"
            />
          </motion.div>

          <p className="max-w-xl text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-10 border-l-2 border-[#FF3E3E]/30 pl-6">
            Crafting immersive digital experiences with high-performance code. 
            Specializing in React systems and interactive UI modules. 
            Turning complex logic into seamless, gaming-grade interfaces.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#FF3E3E] text-white font-gaming font-bold uppercase tracking-wider overflow-hidden cursor-target"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3">
                <Download size={20} />
                <span>Download_Resume.exe</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};