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
  const [activeProject, setActiveProject] = useState(projectArchives[0]);

  return (
    <section id="archives" className="min-h-screen w-full bg-[#050505] flex flex-col p-6 md:p-20 overflow-hidden border-t border-white/5">
      
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
            Mission_Archives
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // OPERATIONAL_DEPLOYMENTS // PROJECT_CHRONICLES
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row gap-8">
        
        {/* LEFT PANEL: Mission Log (Project List) */}
        <div className="w-full md:w-2/5 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-white/20 font-mono text-[9px] tracking-[0.3em] mb-4 uppercase">
            Select_Mission_Log
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

              {/* Elite Targeting Accents */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
              
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          ))}
        </div>

        {/* RIGHT PANEL: Tactical Briefing (Project Details) */}
        <div className="w-full md:w-3/5 glass-card border border-white/10 bg-white/[0.02] p-8 relative overflow-hidden flex flex-col">
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
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center p-2 relative group">
                    <img src={activeProject.logo} alt="Project Logo" className="w-full h-full object-contain" />
                    <div className="absolute -inset-1 border border-[#FF3E3E]/30 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-gaming font-black uppercase text-white tracking-tighter italic">
                      {activeProject.title}
                    </h2>
                    <a 
                      href={activeProject.liveUrl} 
                      target="_blank" 
                      className="text-[#FF3E3E] font-mono text-[10px] flex items-center gap-2 mt-1 hover:underline cursor-target tracking-widest"
                    >
                      <ExternalLink size={12} /> ESTABLISH_LIVE_LINK
                    </a>
                  </div>
                </div>
              </div>

              {/* Tech Stack Row */}
              <div className="flex flex-wrap gap-3 mb-8">
                {activeProject.techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/10">
                    <img src={`https://cdn.simpleicons.org/${tech.icon}/white`} className="w-3 h-3" alt={tech.name} />
                    <span className="text-[9px] font-mono text-white/70 uppercase tracking-tighter">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Mission Content */}
              <div className="flex-1">
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 border-l-2 border-[#FF3E3E] pl-6 py-2 bg-white/[0.01]">
                  {activeProject.details}
                </p>
              </div>

              {/* Footer Meta: Contributors & Duration */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-gray-600 flex items-center gap-2 uppercase tracking-widest"><Users size={10} /> Unit_Contributors</span>
                  <span className="text-[11px] font-mono text-white uppercase">{activeProject.contributors.join(", ")}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-mono text-gray-600 flex items-center gap-2 uppercase tracking-widest"><Calendar size={10} /> Mission_Duration</span>
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