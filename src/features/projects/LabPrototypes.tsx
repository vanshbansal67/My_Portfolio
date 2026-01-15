import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Eye, Terminal, Box } from 'lucide-react';

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
  const [activeProto, setActiveProto] = useState(labPrototypes[0]);

  return (
    <section id="prototypes" className="h-screen w-full bg-[#050505] flex flex-col p-6 md:p-12 overflow-hidden border-t border-white/5">
      <p className="text-[#FF3E3E] font-mono text-[10px] tracking-[0.4em] mb-4 uppercase text-center md:text-left">
        // LAB_PROTOTYPES_COLLECTION
      </p>

      {/* UPPER SECTION: Project Selection List (Vertical/Horizontal Flex) */}
      <div className="flex-1 min-h-[40%] flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        {labPrototypes.map((proto) => (
          <button
            key={proto.id}
            onClick={() => setActiveProto(proto)}
            className={`group relative min-w-[280px] h-full border p-6 flex flex-col justify-between transition-all cursor-target ${
              activeProto.id === proto.id 
              ? "border-[#FF3E3E] bg-[#FF3E3E]/5" 
              : "border-white/5 bg-white/[0.02] hover:border-white/20"
            }`}
          >
            {/* Header: Name + Tech Icons */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">{proto.subtitle}</span>
                <Box size={14} className={activeProto.id === proto.id ? "text-[#FF3E3E]" : "text-gray-700"} />
              </div>
              <h3 className="text-xl font-gaming uppercase tracking-tighter text-white group-hover:text-[#FF3E3E] transition-colors">
                {proto.title}
              </h3>
            </div>

            {/* Icons row at bottom of button */}
            <div className="flex gap-2">
              {proto.tech.map(t => (
                <span key={t} className="text-[8px] font-mono bg-white/5 px-2 py-0.5 border border-white/10 text-white/50">{t}</span>
              ))}
            </div>

            {/* Hover Accents (Intro Style) */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
          </button>
        ))}
      </div>

      {/* LOWER SECTION: Detailed Briefing */}
      <div className="flex-1 mt-6 glass-card border border-white/10 bg-black/40 p-8 relative overflow-hidden flex flex-col md:flex-row gap-8">

        {/* Decorative Vertical Line */}
        <div className="hidden md:block w-[1px] h-full bg-gradient-to-b from-[#FF3E3E] to-transparent opacity-30" />
             
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProto.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-gaming font-black text-white uppercase italic tracking-tighter">
                    {activeProto.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Terminal size={12} className="text-[#FF3E3E]" />
                    <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Status: Prototype_Stable</span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4">
                  <motion.a 
                    href={activeProto.liveUrl}  target='_blank'
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-gaming hover:border-[#FF3E3E] hover:text-[#FF3E3E] cursor-target transition-all"
                  >
                    <Eye size={14} /> PREVIEW_LIVE
                  </motion.a>
                  <motion.a 
                    href={activeProto.codeUrl} target='_blank'
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-gaming hover:border-[#FF3E3E] hover:text-[#FF3E3E] cursor-target transition-all"
                  >
                    <Code size={14} /> GET_SOURCE
                  </motion.a>
                </div>
              </div>

              <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed max-w-4xl border-l-2 border-[#FF3E3E]/30 pl-6 mb-8">
                {activeProto.details}
              </p>
            </div>

            {/* Technical Signature */}
            <div className="flex justify-between items-end border-t border-white/5 pt-4">
               <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-600">ENCRYPTION</span>
                    <span className="text-[11px] font-mono text-white/80">AES-256_BASE</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-600">STABILITY</span>
                    <span className="text-[11px] font-mono text-white/80">98.4%</span>
                  </div>
               </div>
               <span className="text-[10px] font-mono text-gray-800 opacity-50 select-none tracking-tighter">USER_ID_VANSHAJ_BANSAL // LAB_04</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};