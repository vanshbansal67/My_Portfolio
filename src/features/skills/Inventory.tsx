import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: "logic",
    title: "Logic_Kernels",
    skills: [
      { name: "C++", level: 80, icon: "cplusplus", desc: "Foundational logic for high-performance algorithmic problem solving." },
      { name: "JavaScript", level: 90, icon: "javascript", desc: "Core engine for dynamic web architecture and interactions." },
    ]
  },
  {
    id: "mern",
    title: "Architecture_MERN",
    skills: [
      { name: "MERN Stack", level: 60, icon: "vuedotjs", desc: "Full-stack integration using Mongo, Express, React, and Node." }
    ]
  },
  {
    id: "interface",
    title: "Interface_Engine",
    skills: [
      { name: "HTML", level: 100, icon: "html5", desc: "Semantic structuring for accessible and SEO-friendly web content." },
      { name: "CSS", level: 90, icon: "css", desc: "Advanced styling with responsive layouts and modern design." },
      { name: "React", level: 75, icon: "react", desc: "Component-based UI development with optimized state management." },
      { name: "Tailwind CSS", level: 90, icon: "tailwindcss", desc: "Utility-first CSS for rapid, scalable, and modern styling." },
      { name: "Bootstrap", level: 80, icon: "bootstrap", desc: "Reliable grid systems for quick cross-browser compatible layouts." },
    ]
  },
  {
    id: "motion",
    title: "Motion_Protocols",
    skills: [
      { name: "Framer Motion", level: 85, icon: "framer", desc: "Production-ready declarative animations for React components." },
      { name: "GSAP", level: 75, icon: "greensock", desc: "High-performance JavaScript animations for complex timeline sequences." },
      { name: "Three.js", level: 50, icon: "threedotjs", desc: "3D scene creation using WebGL for immersive experiences." },
    ]
  },
  {
    id: "data",
    title: "Data_Clusters",
    skills: [
      { name: "MySQL", level: 70, icon: "mysql", desc: "Relational database management for structured data and queries." },
      { name: "MongoDB", level: 60, icon: "mongodb", desc: "NoSQL document storage for flexible and scalable data models." },
    ]
  },
  {
    id: "deploy",
    title: "Deployment_Relay",
    skills: [
      { name: "Vercel", level: 75, icon: "vercel", desc: "Optimized hosting for frontend frameworks and serverless functions." },
      { name: "Netlify", level: 70, icon: "netlify", desc: "Automated workflow for modern web projects and static sites." },
      { name: "Git", level: 50, icon: "git", desc: "Version control for collaborative coding and history management." },
    ]
  }
];

export const Inventory = () => {
  const [activeCat, setActiveCat] = useState(skillCategories[0]);
  const [activeSkill, setActiveSkill] = useState(skillCategories[0].skills[0]);

  const handleCatChange = (cat) => {
    setActiveCat(cat);
    setActiveSkill(cat.skills[0]);
  };

  return (
    <section id="skills" className="min-h-screen w-full bg-[#050505] flex flex-col p-6 md:p-20 overflow-hidden border-t border-white/5">
      
      {/* ELITE STYLE HEADER INTEGRATION */}
      <div className="max-w-7xl mx-auto w-full mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="border-l-4 border-[#FF3E3E] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            Core_Capabilities
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // TECHNICAL_INVENTORY // SYSTEM_SKILL_TREE
          </p>
        </motion.div>
      </div>

      {/* THREE-PANEL SYSTEM */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row gap-8">
        
        {/* LEFT PANEL: Category Selector */}
        <div className="w-full md:w-1/4 flex flex-col gap-2">
          <p className="text-white/20 font-mono text-[9px] tracking-[0.3em] mb-4 uppercase">Select_Module</p>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCatChange(cat)}
              className={`group flex items-center justify-between p-4 font-gaming text-[11px] uppercase tracking-widest transition-all relative overflow-hidden ${
                activeCat.id === cat.id ? "bg-[#FF3E3E] text-white" : "bg-white/5 text-white/40 hover:bg-white/10"
              }`}
            >
              <span className="relative z-10">{cat.title}</span>
              <div className={`absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
            </button>
          ))}
        </div>

        {/* CENTER PANEL: Active Nodes */}
        <div className="w-full md:w-2/4 glass-card border border-white/10 p-8 flex flex-col relative bg-white/[0.02]">
          <p className="text-[#FF3E3E] font-mono text-[9px] tracking-widest mb-8 uppercase italic opacity-50">// ACTIVE_NODES</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {activeCat.skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setActiveSkill(skill)}
                  className={`group aspect-square relative flex items-center justify-center p-4 transition-all border ${
                    activeSkill.name === skill.name 
                    ? "border-[#FF3E3E] bg-[#FF3E3E]/10 shadow-[0_0_20px_#FF3E3E1a]" 
                    : "border-white/5 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.icon}/FF3E3E`}
                    alt={skill.name} 
                    className={`w-10 h-10 object-contain transition-all duration-500 ${
                      activeSkill.name === skill.name ? "brightness-125" : "opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                    }`}
                  />
                  
                  {/* Elite Targeting Corners */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL: Data Stream */}
        <div className="w-full md:w-1/4">
          <div className="h-full glass-card border-l-2 border-[#FF3E3E] bg-white/[0.03] p-8 relative flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h4 className="text-white font-gaming text-3xl mb-4 tracking-tighter uppercase italic">{activeSkill.name}</h4>
                <div className="w-8 h-1 bg-[#FF3E3E] mb-6" />
                
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-10">
                  {activeSkill.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between font-mono text-[9px] mb-3 text-white/40 tracking-widest">
                    <span>LEVEL_STATUS</span>
                    <span className="text-[#FF3E3E]">{activeSkill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: `${activeSkill.level - 100}%` }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="h-full bg-[#FF3E3E] shadow-[0_0_15px_#FF3E3E]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};