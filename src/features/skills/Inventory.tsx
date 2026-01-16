import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { GlitchHeading } from '../components/GlitchHeading';
import { GlitchHeading } from '../../components/GlitchHeading';


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
  const scrollRef = useRef(null);
    const [glitchKey, setGlitchKey] = useState(0); // Trigger state
  

  const handleCatChange = (cat) => {
    setActiveCat(cat);
    setActiveSkill(cat.skills[0]);
  };

  return (
    <section id="skills" className="min-h-auto w-full bg-[#050505] flex flex-col p-4 md:p-20 overflow-hidden border-t border-white/5">
      
      {/* RESPONSIVE ELITE HEADER */}
      <div className="max-w-7xl mx-auto w-full mb-8 md:mb-16">
         <motion.div 
                  onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
                  className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
                >
          <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            <GlitchHeading text="Core_Capabilities" trigger={glitchKey} />
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase opacity-80">
            // TECHNICAL_INVENTORY // SKILL_TREE
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row gap-8">
        
        {/* TOP/LEFT PANEL: Category Selector */}
        {/* Mobile: Horizontal Scrollable List | Desktop: Vertical List */}
        <div className="w-full md:w-1/4 flex flex-col">
          <p className="hidden md:block text-white/20 font-mono text-[9px] tracking-[0.3em] mb-4 uppercase">Select_Module</p>
          
          <div 
            ref={scrollRef}
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 custom-scrollbar-hide md:custom-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCatChange(cat)}
                className={`flex-shrink-0 group flex items-center justify-between p-3 md:p-4 font-gaming text-[10px] md:text-[11px] uppercase tracking-widest transition-all relative overflow-hidden border ${
                  activeCat.id === cat.id 
                  ? "bg-[#FF3E3E] text-white border-[#FF3E3E]" 
                  : "bg-white/5 text-white/40 border-white/5 hover:border-white/20"
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">{cat.title}</span>
                {/* Visual indicator for active tab on mobile */}
                {activeCat.id === cat.id && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-white md:hidden" />
                )}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* CENTER PANEL: Active Nodes (Skill Icons) */}
        <div className="w-full md:w-2/4 glass-card border border-white/10 p-6 md:p-8 flex flex-col relative bg-white/[0.02]">
          <p className="text-[#FF3E3E] font-mono text-[9px] tracking-widest mb-6 md:mb-8 uppercase italic opacity-50">// ACTIVE_NODES</p>
          
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {activeCat.skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setActiveSkill(skill)}
                  className={`group aspect-square relative flex items-center justify-center p-3 md:p-4 transition-all border ${
                    activeSkill.name === skill.name 
                    ? "border-[#FF3E3E] bg-[#FF3E3E]/10 shadow-[0_0_20px_#FF3E3E1a]" 
                    : "border-white/5 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.icon}/FF3E3E`}
                    alt={skill.name} 
                    className={`w-7 h-7 md:w-10 md:h-10 object-contain transition-all duration-500 ${
                      activeSkill.name === skill.name ? "brightness-125 scale-110" : "opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                    }`}
                  />
                  <div className="absolute top-0 right-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#FF3E3E] scale-0 group-hover:scale-100 transition-transform" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT PANEL: Data Stream (Description) */}
        <div className="w-full md:w-1/4">
          <div className="h-full glass-card border-l-2 border-[#FF3E3E] bg-white/[0.03] p-6 md:p-8 relative flex flex-col min-h-[200px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col h-full"
              >
                <h4 className="text-white font-gaming text-2xl md:text-3xl tracking-tighter uppercase italic mb-2 leading-none">{activeSkill.name}</h4>
                <div className="w-8 h-1 bg-[#FF3E3E] mb-4 md:mb-6" />
                
                <p className="text-gray-400 font-mono text-[11px] md:text-sm leading-relaxed mb-6">
                  {activeSkill.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between font-mono text-[9px] mb-2 text-white/40 tracking-widest uppercase">
                    <span>Skill_Level</span>
                    <span className="text-[#FF3E3E]">{activeSkill.level}%</span>
                  </div>
                  <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkill.level}%` }}
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