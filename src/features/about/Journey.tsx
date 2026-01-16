import React,{useState} from 'react';
import { motion } from 'framer-motion';
// import { GlitchHeading } from '../components/GlitchHeading'; // Path to your shared component
import { GlitchHeading } from '../../components/GlitchHeading';

const educationData = [
  {
    id: "log-01",
    period: "2023 - 2027",
    institution: "Dr. APJ Abdul Kalam Technical University",
    degree: "B. Tech Computer Science and Engineering",
    stats: "Current CGPA: 8.36",
    logo: "/images/collegelogo.jfif",
    status: "CURRENT_ACTIVE_PROCESS"
  },
  {
    id: "log-02",
    period: "2022 - 2023",
    institution: "P. R. Public School",
    degree: "Higher Secondary Certificate (HSC)",
    stats: "Percentage: 85%",
    logo: "/images/schoollogo.jfif",
    status: "ARCHIVED_SUCCESSFUL"
  },
  {
    id: "log-03",
    period: "2020 - 2021",
    institution: "P. R. Public School",
    degree: "Secondary School Certificate (SSC)",
    stats: "Percentage: 74%",
    logo: "/images/schoollogo.jfif",
    status: "ARCHIVED_SUCCESSFUL"
  }
];

export const Journey = () => {
    const [glitchKey, setGlitchKey] = useState(0); // Trigger state
  
  return (
    <section id="journey" className="min-h-auto w-full bg-[#050505] py-12 md:py-20 px-6 md:px-24 relative overflow-hidden flex flex-col border-t border-white/5">
      
      {/* ELITE HEADER STYLE - Glitch & Responsive */}
      <div className="max-w-7xl mx-auto w-full mb-10 md:mb-16">
        <motion.div 
                         onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
                         className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
                       >
          <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            <GlitchHeading text="Neural_Expansion" trigger={glitchKey}/>
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase">
            // EDUCATION_DECODING // COGNITIVE_LOGS_SYNC
          </p>
        </motion.div>
      </div>

      {/* TIMELINE CONTENT */}
      <div className="flex-1 relative max-w-4xl mx-auto w-full">
        {/* The Left Circuit Line - Hidden on very small screens or made subtle */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FF3E3E] via-[#FF3E3E]/20 to-transparent" />

        <div className="space-y-10 md:space-y-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Connector Node */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-[#FF3E3E] rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_#FF3E3E]" />

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                {/* Logo with HUD styling */}
                <div className="w-12 h-12 md:w-20 md:h-20 bg-white/5 border border-white/10 p-2 relative flex-shrink-0">
                  <img 
                    src={edu.logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain brightness-75 group-hover:brightness-110 transition-all" 
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E3E]/20 group-hover:bg-[#FF3E3E]" />
                </div>

                {/* Information Block */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2">
                    <span className="text-[8px] md:text-[10px] font-mono text-[#FF3E3E] tracking-widest uppercase">{edu.status}</span>
                    <span className="text-[8px] md:text-[10px] font-mono text-gray-600">[{edu.period}]</span>
                  </div>
                  
                  <h3 className="text-lg md:text-3xl font-gaming text-white uppercase tracking-tighter leading-tight mb-1">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-gray-400 font-mono text-[10px] md:text-xs uppercase mb-4">
                    {edu.degree}
                  </p>

                  {/* Stats Strip */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
                    <span className="text-[8px] md:text-[9px] font-mono text-gray-500 uppercase">Verification_Score:</span>
                    <span className="text-[10px] md:text-xs font-mono text-white font-bold tracking-widest">{edu.stats}</span>
                  </div>
                </div>
              </div>

              {/* Background Glow Effect - Desktop Only for performance */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-[#FF3E3E]/5 to-transparent transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER-STYLE DECORATION - Responsive Spacing */}
      <div className="mt-12 md:mt-auto pt-8 border-t border-white/5 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-3 md:w-4 h-1 bg-[#FF3E3E]" />
            <div className="w-3 md:w-4 h-1 bg-[#FF3E3E]/50" />
            <div className="w-3 md:w-4 h-1 bg-[#FF3E3E]/50" />
          </div>
          <span className="text-[8px] md:text-[9px] font-mono text-gray-700 tracking-[0.3em] md:tracking-[0.5em] uppercase italic">
            Mission_Control_Database_Ready
          </span>
        </div>
      </div>
    </section>
  );
};