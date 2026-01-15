import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Users, Calendar, Terminal } from 'lucide-react';


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
details: "Developed a professional Photobooth Kiosk software. Integrated with hardware camera triggers, real-time image processing, and a high-speed touch interface for instant digital and hardcopy delivery. Optimized for low-latency desktop performance."  },
  {
    id: "mission-02",
    title: "Oneness Solar Power",
    logo: "/images/oneness-logo.png",
    duration: "JULY 2025 - SEP 2025",
    contributors: ["Vanshaj Bansal","Amandeep","Kaushal Chauhan"],
    liveUrl: "https://www.onenesssolarpower.com/",
    techStack: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Bootstrap", icon: "bootstrap" }
    ],
    details: "Designed and engineered a high-performance digital portal for a leading Solar EPC provider. The platform showcases large-scale solar installations across residential and commercial sectors. Focused on creating an intuitive user journey from energy consultation to final system commissioning, integrated with dynamic project galleries and lead-capture modules." }
];
export const MissionArchives = () => {
  const [activeProject, setActiveProject] = useState(projectArchives[0]);
 
  return (
    <section id="archives" className="h-screen w-full bg-[#050505] flex items-center justify-center p-6 md:p-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full h-full flex flex-col md:flex-row gap-4">
        
        {/* LEFT PANEL: Mission Log (Project List) */}
        <div className="w-full md:w-2/5 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-[#FF3E3E] font-mono text-[10px] tracking-[0.4em] mb-4 uppercase">
            // ACTIVE_MISSIONS_LOG
          </p>
          {projectArchives.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`group flex items-center justify-between p-5 font-gaming text-[12px] uppercase tracking-widest transition-all relative cursor-target overflow-hidden border ${
                activeProject.id === project.id 
                ? "border-[#FF3E3E] bg-[#FF3E3E]/10 text-white" 
                : "border-white/5 bg-white/[0.02] text-white/40 hover:border-white/20"
              }`}
            >
              <div className="relative z-10 flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full ${activeProject.id === project.id ? "bg-[#FF3E3E] animate-ping" : "bg-white/10"}`} />
                {project.title}
              </div>

              {/* HUD Hover Effect - Match Intro */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
              
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          ))}
        </div>

        {/* RIGHT PANEL: Tactical Briefing (Project Details) */}
        <div className="w-full md:w-3/5 glass-card border border-[#FF3E3E]/20 bg-black/40 p-8 relative overflow-hidden flex flex-col">
          {/* HUD Accents */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#FF3E3E]" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#FF3E3E]" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              {/* Header: Logo + Title + Live Link */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-35 h-35 bg-white/5 border border-white/10 flex items-center justify-center p-2 relative group">
                    <img src={activeProject.logo} alt="Project Logo" className="w-full h-full object-contain" />
                    <div className="absolute -inset-1 border border-[#FF3E3E]/30 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-gaming font-black uppercase text-white tracking-tighter">
                      {activeProject.title}
                    </h2>
                    <a 
                      href={activeProject.liveUrl} 
                      target="_blank" 
                      className="text-[#FF3E3E] font-mono text-[10px] flex items-center gap-2 mt-1 hover:underline cursor-target"
                    >
                      <ExternalLink size={12} /> ESTABLISH_LIVE_LINK
                    </a>
                  </div>
                </div>
              </div>

              {/* Tech Stack Row */}
              <div className="flex flex-wrap gap-4 mb-8">
                {activeProject.techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/10">
                    <img src={`https://cdn.simpleicons.org/${tech.icon}/white`} className="w-4 h-4" alt={tech.name} />
                    <span className="text-[9px] font-mono text-white/70 uppercase">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Mission Content */}
              <div className="flex-1">
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 border-l-2 border-[#FF3E3E]/50 pl-6">
                  {activeProject.details}
                </p>
              </div>

              {/* Footer Meta: Contributors & Duration */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-gray-600 flex items-center gap-2"><Users size={10} /> UNIT_CONTRIBUTORS</span>
                  <span className="text-[11px] font-mono text-white uppercase">{activeProject.contributors.join(", ")}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-gray-600 flex items-center gap-2"><Calendar size={10} /> MISSION_DURATION</span>
                  <span className="text-[11px] font-mono text-white uppercase">{activeProject.duration}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};