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
    <section id="skills" className="h-screen w-full bg-[#050505] flex items-center justify-center p-6 md:p-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full h-full flex flex-col md:flex-row gap-6">
        
        {/* LEFT PANEL: Category Selector (Menu Style) */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <p className="text-[#FF3E3E] font-mono text-[10px] tracking-[0.4em] mb-4">// SELECT_MODULE</p>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCatChange(cat)}
              className={`group flex items-center justify-between p-4 font-gaming text-[11px] uppercase tracking-widest transition-all relative cursor-target overflow-hidden ${
                activeCat.id === cat.id ? "bg-[#FF3E3E] text-white" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="relative z-10">{cat.title}</span>
              
              {/* Sliding HUD Label Effect */}
              <motion.span 
                initial={false}
                animate={{ x: activeCat.id === cat.id ? 0 : 20, opacity: activeCat.id === cat.id ? 1 : 0 }}
                className="text-[9px] font-mono text-white/60"
              >
                {activeCat.id === cat.id ? "ACTIVE" : ""}
              </motion.span>

              {/* Background Slide Effect like Intro Button */}
              <div className={`absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0`} />
            </button>
          ))}
        </div>

        {/* CENTER PANEL: Active Nodes (Icon HUD Style) */}
        <div className="w-full md:w-1/3 glass-card border border-white/10 p-6 flex flex-col relative bg-black/20">
          <p className="text-gray-500 font-mono text-[10px] tracking-widest mb-6 uppercase italic">// ACTIVE_NODES</p>
          
          <div className="grid grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {activeCat.skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ x: 5 }} // Slight shift like the social links
                  onClick={() => setActiveSkill(skill)}
                  className={`group aspect-square relative flex items-center justify-center p-2 transition-all cursor-target border ${
                    activeSkill.name === skill.name 
                    ? "border-[#FF3E3E] bg-[#FF3E3E]/10" 
                    : "border-white/10 bg-white/5 hover:border-[#FF3E3E]/50"
                  }`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.icon}/FF3E3E`}
                    alt={skill.name} 
                    className={`w-10 h-10 object-contain transition-all duration-300 ${
                      activeSkill.name === skill.name ? "brightness-125 scale-110" : "opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* HUD Targeting Corners (EXACTLY AS IN INTRO) */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-top-right" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform origin-bottom-left" />
                  
                  {/* Selected Indicator */}
                  {activeSkill.name === skill.name && (
                    <div className="absolute -inset-1 border border-[#FF3E3E] animate-pulse pointer-events-none" />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL: Data Stream (Remains same but fits 100vh) */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="flex-1 glass-card border border-[#FF3E3E]/30 bg-[#FF3E3E]/5 p-8 relative">
             <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#FF3E3E]" />
             <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF3E3E]" />

             <AnimatePresence mode="wait">
               <motion.div
                 key={activeSkill.name}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="h-full flex flex-col"
               >
                 <h4 className="text-white font-gaming text-3xl mb-2 tracking-tighter uppercase">{activeSkill.name}</h4>
                 <p className="text-gray-400 font-mono text-sm leading-relaxed mb-auto py-4">
                   {activeSkill.desc}
                 </p>
                 <div className="pt-6 border-t border-white/10">
                   <div className="flex justify-between font-mono text-[10px] mb-2 text-white/50">
                     <span>SKILL_COMPETENCY</span>
                     <span className="text-[#FF3E3E]">{activeSkill.level}%</span>
                   </div>
                   <div className="h-1 bg-white/10 w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeSkill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-[#FF3E3E] shadow-[0_0_10px_#FF3E3E]"
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