import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlitchHeading } from '../../components/GlitchHeading';

const projectArchives = [
  {
    id: "mission-01",
    title: "SOSO-CLICKS",
    logo: "/images/soso-clicks.png",
    duration: "OCT 2025 - DEC 2025",
    contributors: ["Vanshaj Bansal", "Akshit Chauhan", "Amandeep", "Kaushal Chauhan"],
    liveUrl: "https://soso-click-tyka.vercel.app/",
    techStack: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "Electron.js", icon: "electron" },
      { name: "Tailwind", icon: "tailwindcss" }
    ],
    details: "Developed a professional Photobooth Kiosk software. Integrated with hardware camera triggers, real-time image processing, and a high-speed touch interface for instant digital and hardcopy delivery. Optimized for low-latency desktop performance."
  },
  {
    id: "mission-02",
    title: "Oneness Solar Power",
    logo: "/images/oneness-logo.png",
    duration: "JULY 2025 - SEP 2025",
    contributors: ["Vanshaj Bansal", "Amandeep", "Kaushal Chauhan"],
    liveUrl: "https://www.onenesssolarpower.com/",
    techStack: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Bootstrap", icon: "bootstrap" }
    ],
    details: "Designed and engineered a high-performance digital portal for a leading Solar EPC provider. The platform showcases large-scale solar installations across residential and commercial sectors. Focused on creating an intuitive user journey from energy consultation to final system commissioning, integrated with dynamic project galleries and lead-capture modules."
  }
];

export const MissionArchives = () => {
  const [glitchKey, setGlitchKey] = useState(0); // Trigger state
  const [index, setIndex] = useState(0);
  const activeProject = projectArchives[index];

  const nextProject = () => setIndex((prev) => (prev + 1) % projectArchives.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projectArchives.length) % projectArchives.length);

  return (
    <section id="archives" className="min-h-auto w-full bg-[#050505] flex flex-col p-4 md:p-20 overflow-hidden border-t border-white/5">
      
      {/* RESPONSIVE ELITE HEADER */}
      <div className="max-w-7xl mx-auto w-full mb-8 md:mb-8">
      <motion.div 
          onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
          className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
        >
          {/* Use clamp to ensure text never overflows mobile screens */}
          <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-tight">
            <GlitchHeading text="Mission_Archives" trigger={glitchKey}/>
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase opacity-80">
            // OPERATIONAL_DEPLOYMENTS // CHRONICLES
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* DESKTOP SIDEBAR - Hidden on Mobile */}
        <div className="hidden md:flex md:w-2/5 flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
          {projectArchives.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setIndex(i)}
              className={`group flex items-center justify-between p-5 font-gaming text-[12px] uppercase tracking-widest transition-all relative border ${
                index === i 
                ? "border-[#FF3E3E] bg-[#FF3E3E]/10 text-white" 
                : "border-white/5 bg-white/[0.02] text-white/40 hover:border-white/20"
              }`}
            >
              <div className="relative z-10 flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full ${index === i ? "bg-[#FF3E3E] animate-ping" : "bg-white/10"}`} />
                {project.title}
              </div>
            </button>
          ))}
        </div>

        {/* TACTICAL BRIEFING CARD (Adaptive Mobile Height) */}
        <div className="w-full md:w-3/5 glass-card border border-white/10 bg-white/[0.02] p-5 md:p-8 relative overflow-hidden flex flex-col min-h-[450px] md:min-h-0">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 border border-white/10 p-2 relative flex-shrink-0">
                  <img src={activeProject.logo} alt="Logo" className="w-full h-full object-contain" />
                  <div className="absolute -inset-1 border border-[#FF3E3E]/30 animate-pulse" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xl md:text-5xl font-gaming font-black uppercase text-white italic tracking-tighter truncate">
                    {activeProject.title}
                  </h3>
                  <a href={activeProject.liveUrl} target="_blank" className="text-[#FF3E3E] font-mono text-[9px] flex items-center gap-2 mt-1 uppercase">
                    <ExternalLink size={10} /> Live_Link
                  </a>
                </div>
              </div>

              {/* Briefing Text */}
              <div className="flex-1">
                <p className="text-gray-400 font-mono text-[11px] md:text-sm leading-relaxed mb-6 border-l-2 border-[#FF3E3E] pl-4">
                  {activeProject.details}
                </p>
              </div>

              {/* MOBILE CAROUSEL CONTROLS (Matches Image) */}
              <div className="flex md:hidden items-center justify-between mt-auto pt-6 border-t border-white/5">
                <button 
                  onClick={prevProject} 
                  className="flex items-center gap-2 bg-[#FF3E3E] text-white px-4 py-3 text-[10px] font-gaming uppercase italic active:scale-95 transition-transform"
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <div className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                  Archive_{index + 1}/0{projectArchives.length}
                </div>
                <button 
                  onClick={nextProject} 
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 text-[10px] font-gaming uppercase italic active:scale-95 transition-transform"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>

              {/* DESKTOP META FOOTER */}
              <div className="hidden sm:grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-gray-600 uppercase">Unit_Contributors</span>
                  <span className="text-[10px] font-mono text-white truncate uppercase">{activeProject.contributors[0]} & Team</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[8px] font-mono text-gray-600 uppercase">Duration</span>
                  <span className="text-[10px] font-mono text-white">{activeProject.duration}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};