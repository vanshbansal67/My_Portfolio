import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { GlitchHeading } from '../../components/GlitchHeading';

export const Hero = () => {
  // Glitch animation ko scroll par trigger karne ke liye state
  const [glitchKey, setGlitchKey] = useState(0);

  const socialLinks = [
    { id: 1, icon: <Github size={20} />, url: "https://github.com/vanshbansal67", label: "GITHUB" },
    { id: 2, icon: <Linkedin size={20} />, url: "https://linkedin.com/in/vanshbansal67", label: "LINKEDIN" },
    { id: 3, icon: <Mail size={20} />, url: "mailto:bnslgvansh67@gmail.com", label: "GMAIL" },
  ];

  const typingContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const typingItem = {
    hidden: { display: "none", opacity: 0 },
    show: { display: "inline", opacity: 1 }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-28 md:pt-20 overflow-hidden bg-[#050505]">
      
      {/* 1. Profile & Socials HUD Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:top-20 md:right-20 z-20 flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto px-6"
      >
        {/* Profile Image Frame */}
        <div className="relative group cursor-target">
          <div className="absolute -inset-2 border border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-colors duration-500 animate-pulse" />
          <img 
            src="/images/vanshaj-bansal-frontend-developer.png" 
            alt="Vanshaj Bansal - Frontend Developer and UI Architect" 
            title="Vanshaj Bansal Profile"
            className="w-48 h-48 md:w-48 md:h-48 object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 border border-white/10"
          />
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF3E3E]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF3E3E]" />
        </div>

        {/* Social HUD Items */}
        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -8 }}
              className="flex items-center justify-end gap-4 group cursor-target"
            >
              <span className="hidden md:block text-[10px] font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-[0.2em] translate-x-2 group-hover:translate-x-0">
                {link.label}
              </span>
              <div className="w-10 h-10 md:w-11 md:h-11 bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#FF3E3E] group-hover:border-[#FF3E3E] group-hover:bg-[#FF3E3E]/10 transition-all duration-300 relative">
                {link.icon}
                <div className="absolute top-0 right-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 2. Main Text Content Area */}
      <div className="max-w-4xl z-10 text-center md:text-left mt-20 md:mt-0">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          // Scroll trigger function
          onViewportEnter={() => setGlitchKey(prev => prev + 1)}
        >
          <h3 className="text-[#FF3E3E] font-mono font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 flex items-center justify-center md:justify-start gap-2 text-xs md:text-base">
            <Terminal size={16} /> // SYSTEM_INITIALIZED
          </h3>
          
          {/* Glitch Heading with Trigger Prop */}
          <h1 className="text-[clamp(2.2rem,10vw,7rem)] font-gaming font-black uppercase mb-4 leading-none text-white">
            <GlitchHeading text="VANSHAJ" trigger={glitchKey} />{" "}
            <span className="text-[#FF3E3E]">
              <GlitchHeading text="BANSAL" trigger={glitchKey} />
            </span>
          </h1>

          {/* Typewriter Designation */}
          <motion.div 
            variants={typingContainer}
            initial="hidden"
            whileInView="show"
            className="text-sm md:text-2xl font-mono font-bold text-white/60 mb-8 tracking-tighter"
          >
            {"FRONTEND_DEVELOPER // UI_ARCHITECT".split("").map((char, i) => (
              <motion.span key={i} variants={typingItem}>{char}</motion.span>
            ))}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 md:w-3 md:h-6 bg-[#FF3E3E] ml-1 align-middle"
            />
          </motion.div>

          {/* Professional Brief */}
          <p className="max-w-xl mx-auto md:mx-0 text-gray-500 font-mono text-[11px] md:text-base leading-relaxed mb-10 border-t-2 md:border-t-0 md:border-l-2 border-[#FF3E3E]/30 pt-6 md:pt-0 md:pl-6">
            Crafting immersive digital experiences with high-performance code. 
            Specializing in React systems and interactive UI modules. 
            Turning complex logic into seamless, gaming-grade interfaces.
          </p>

          {/* Resume CTA */}
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              download
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#FF3E3E] text-white font-gaming font-bold uppercase tracking-wider overflow-hidden active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3 text-[10px] md:text-xs">
                <Download size={18} />
                <span>Download_Resume.exe</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scanline/Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
    </section>
  );
};