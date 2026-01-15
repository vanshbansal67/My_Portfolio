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
    <section id="prototypes" className="min-h-screen w-full bg-[#050505] flex flex-col p-6 md:p-20 overflow-hidden border-t border-white/5">
      
      {/* ELITE STYLE HEADER INTEGRATION */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-[#FF3E3E] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            Lab_Prototypes
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // EXPERIMENTAL_BUILDS // CODE_SANDBOX_v4.0
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* UPPER SECTION: Project Selection List */}
        <div className="flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
          {labPrototypes.map((proto) => (
            <button
              key={proto.id}
              onClick={() => setActiveProto(proto)}
              className={`group relative min-w-[280px] border p-6 flex flex-col justify-between transition-all cursor-target ${
                activeProto.id === proto.id 
                ? "border-[#FF3E3E] bg-[#FF3E3E]/5" 
                : "border-white/5 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">{proto.subtitle}</span>
                  <Box size={14} className={activeProto.id === proto.id ? "text-[#FF3E3E]" : "text-gray-700"} />
                </div>
                <h3 className={`text-xl font-gaming uppercase tracking-tighter transition-colors ${
                  activeProto.id === proto.id ? "text-white" : "text-white/40 group-hover:text-white"
                }`}>
                  {proto.title}
                </h3>
              </div>

              <div className="flex gap-2 mt-4">
                {proto.tech.map(t => (
                  <span key={t} className="text-[8px] font-mono bg-white/5 px-2 py-0.5 border border-white/10 text-white/50">{t}</span>
                ))}
              </div>

              {/* Elite Targeting Accents */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
            </button>
          ))}
        </div>

        {/* LOWER SECTION: Detailed Briefing */}
        <div className="flex-1 mt-6 glass-card border border-white/10 bg-white/[0.02] p-10 relative overflow-hidden flex flex-col md:flex-row gap-10">
          {/* Elite Vertical Accent Line */}
          <div className="hidden md:block w-[1px] h-full bg-gradient-to-b from-[#FF3E3E] to-transparent opacity-40" />
               
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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-gaming font-black text-white uppercase italic tracking-tighter">
                      {activeProto.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-3">
                      <Terminal size={14} className="text-[#FF3E3E]" />
                      <span className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">Status: Prototype_Stable</span>
                    </div>
                  </div>

                  {/* Action Links with Elite Styling */}
                  <div className="flex gap-4">
                    <motion.a 
                      href={activeProto.liveUrl}  target='_blank'
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-[10px] font-gaming text-white uppercase tracking-widest hover:border-[#FF3E3E] hover:text-[#FF3E3E] transition-all"
                    >
                      <Eye size={16} /> PREVIEW_LIVE
                    </motion.a>
                    <motion.a 
                      href={activeProto.codeUrl} target='_blank'
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-[10px] font-gaming text-white uppercase tracking-widest hover:border-[#FF3E3E] hover:text-[#FF3E3E] transition-all"
                    >
                      <Code size={16} /> GET_SOURCE
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed max-w-4xl border-l-2 border-[#FF3E3E] pl-8 mb-10 py-2 bg-white/[0.01]">
                  {activeProto.details}
                </p>
              </div>

              {/* Technical Signature */}
              <div className="flex justify-between items-end border-t border-white/5 pt-6">
                 <div className="flex gap-10">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-tighter">Encryption_Hash</span>
                      <span className="text-xs font-mono text-white/70">SHA-512_SECURE</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-tighter">System_Stability</span>
                      <span className="text-xs font-mono text-[#FF3E3E]">STABLE_98.4%</span>
                    </div>
                 </div>
                 <span className="text-[9px] font-mono text-gray-800 tracking-widest">USER_ID: VANSHAJ_BANSAL // MODULE_ARCHIVE</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};