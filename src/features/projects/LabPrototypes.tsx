import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Eye, Terminal, Box, ChevronLeft, ChevronRight } from 'lucide-react';
// import { GlitchHeading } from '../components/GlitchHeading'; // Ensure this path is correct
import { GlitchHeading } from '../../components/GlitchHeading';

const labPrototypes = [
    {
      id: "proto-01",
      title: "Sarcasm Calculator",
      subtitle: "Module: Wahhh_Beta_v1.0",
      icon: "javascript",
      liveUrl: "https://sarcasmcalc.netlify.app/",
      codeUrl: "https://github.com/vanshbansal67/Sarcasm-Calculator.git",
      tech: ["HTML", "CSS", "JS"],
      details: "A sentient calculation engine designed to roast users. Features custom logic strings for mathematical anomalies (e.g., dividing by zero triggers 'NASA_RECRUITMENT' alerts). High-attitude UI with interactive feedback loops."
    },
    {
      id: "proto-02",
      title: "Lenskart Architecture",
      subtitle: "Module: Vision_Clone_Alpha",
      icon: "bootstrap",
      liveUrl: "https://lenskartclonee.netlify.app/",
      codeUrl: "https://github.com/vanshbansal67/lenskart_clone.git",
      tech: ["HTML", "CSS", "Bootstrap"],
      details: "A pixel-perfect recreation of the Lenskart retail ecosystem. Focuses on modular grid systems, responsive carousel synchronization, and a clean, efficient front-end architecture for high-traffic commerce simulation."
    },
    {
      id: "proto-03",
      title: "Gift Finder Matrix",
      subtitle: "Module: Occasion_Analyzer",
      icon: "html5",
      liveUrl: "https://admirable-faun-0ec3c5.netlify.app/",
      codeUrl: "https://github.com/vanshbansal67/Gift-Suggestion-Website.git",
      tech: ["JS", "Bootstrap", "CSS"],
      details: "An algorithmic recommendation engine for gifting logic. Uses dynamic filters and relationship-budget mapping to identify the perfect token. Features a modern gradient UI with fluid navigation paths."
    },
    {
      id: "proto-04",
      title: "RFID Sentinel",
      subtitle: "Module: Attendance_Logger",
      icon: "mysql",
      liveUrl: "https://rfidattendancesystem1.netlify.app/",
      codeUrl: "https://github.com/vanshbansal67/SnapDesk.git",
      tech: ["JS", "SQL", "PHP", "HTML"],
      details: "A full-stack hardware-software integration. Scans RFID signals to automate attendance marking. Features a comprehensive data-analysis dashboard with automated Google Sheets export capabilities for administrative efficiency."
    }
  ];

export const LabPrototypes = () => {
  const [index, setIndex] = useState(0);
  const activeProto = labPrototypes[index];
    const [glitchKey, setGlitchKey] = useState(0); // Trigger state
  

  const nextProto = () => setIndex((prev) => (prev + 1) % labPrototypes.length);
  const prevProto = () => setIndex((prev) => (prev - 1 + labPrototypes.length) % labPrototypes.length);

  return (
    <section id="prototypes" className="min-h-auto w-full bg-[#050505] flex flex-col p-4 md:p-20 overflow-hidden border-t border-white/5">
      
      {/* ELITE STYLE HEADER with Glitch & Responsive Scale */}
      <div className="max-w-7xl mx-auto w-full mb-8 md:mb-12">
      <motion.div 
          onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
          className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
        >
          <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            <GlitchHeading text="Lab_Prototypes" trigger={glitchKey}/>
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase opacity-80">
            // EXPERIMENTAL_BUILDS // CODE_SANDBOX_v4.0
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* UPPER SECTION: Project Selection List (Desktop Only) */}
        <div className="hidden md:flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
          {labPrototypes.map((proto, i) => (
            <button
              key={proto.id}
              onClick={() => setIndex(i)}
              className={`group relative min-w-[280px] border p-6 flex flex-col justify-between transition-all cursor-target ${
                index === i 
                ? "border-[#FF3E3E] bg-[#FF3E3E]/5" 
                : "border-white/5 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">{proto.subtitle}</span>
                  <Box size={14} className={index === i ? "text-[#FF3E3E]" : "text-gray-700"} />
                </div>
                <h3 className={`text-xl font-gaming uppercase tracking-tighter transition-colors ${
                  index === i ? "text-white" : "text-white/40 group-hover:text-white"
                }`}>
                  {proto.title}
                </h3>
              </div>

              <div className="flex gap-2 mt-4">
                {proto.tech.map(t => (
                  <span key={t} className="text-[8px] font-mono bg-white/5 px-2 py-0.5 border border-white/10 text-white/50">{t}</span>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
            </button>
          ))}
        </div>

        {/* LOWER SECTION: Detailed Briefing (Carousel-ready for Mobile) */}
        <div className="flex-1 mt-0 md:mt-6 glass-card border border-white/10 bg-white/[0.02] p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row gap-10 min-h-[480px] md:min-h-0">
          <div className="hidden md:block w-[1px] h-full bg-gradient-to-b from-[#FF3E3E] to-transparent opacity-40" />
               
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProto.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8">
                  <div className="overflow-hidden">
                    <h3 className="text-2xl md:text-6xl font-gaming font-black text-white uppercase italic tracking-tighter truncate">
                      {activeProto.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Terminal size={12} className="text-[#FF3E3E]" />
                      <span className="text-gray-500 font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-70">Status: Prototype_Stable</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.a 
                      href={activeProto.liveUrl} target='_blank' rel="noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-gaming text-white uppercase tracking-widest hover:border-[#FF3E3E] transition-all"
                    >
                      <Eye size={14} /> PREVIEW
                    </motion.a>
                    <motion.a 
                      href={activeProto.codeUrl} target='_blank' rel="noreferrer"
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-gaming text-white uppercase tracking-widest hover:border-[#FF3E3E] transition-all"
                    >
                      <Code size={14} /> SOURCE
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-400 font-mono text-[11px] md:text-base leading-relaxed max-w-4xl border-l-2 border-[#FF3E3E] pl-4 md:pl-8 mb-8 py-1">
                  {activeProto.details}
                </p>
              </div>

              {/* MOBILE CAROUSEL CONTROLS */}
              <div className="flex md:hidden items-center justify-between mt-auto pt-6 border-t border-white/5">
                <button 
                  onClick={prevProto} 
                  className="flex items-center gap-2 bg-[#FF3E3E] text-white px-4 py-3 text-[10px] font-gaming uppercase italic active:scale-95"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <div className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                  Log_{index + 1}/0{labPrototypes.length}
                </div>
                <button 
                  onClick={nextProto} 
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 text-[10px] font-gaming uppercase italic active:scale-95"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>

              {/* Technical Signature (Desktop Meta) */}
              <div className="hidden sm:flex justify-between items-end border-t border-white/5 pt-6 mt-4">
                 <div className="flex gap-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-mono text-gray-600 uppercase">Encryption_Hash</span>
                      <span className="text-[10px] font-mono text-white/70 uppercase">SHA-512_SECURE</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-mono text-gray-600 uppercase">Stability</span>
                      <span className="text-[10px] font-mono text-[#FF3E3E]">STABLE_98.4%</span>
                    </div>
                 </div>
                 <span className="text-[8px] font-mono text-gray-800 tracking-widest uppercase italic">Lab_Module_04 // Access_Granted</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};