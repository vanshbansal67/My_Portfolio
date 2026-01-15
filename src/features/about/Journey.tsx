import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="journey" className="h-screen w-full bg-[#050505] py-20 px-6 md:px-24 relative overflow-hidden flex flex-col border-t border-white/5">
      
      {/* ELITE HEADER STYLE - Left Aligned */}
      <div className="max-w-4xl mb-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="border-l-4 border-[#FF3E3E] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic">
            Neural_Expansion
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // EDUCATION_DECODING // COGNITIVE_LOGS_SYNC
          </p>
        </motion.div>
      </div>

      {/* LEFT-ALIGNED LOG CONTENT */}
      <div className="flex-1 relative max-w-4xl">
        {/* The Left Circuit Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#FF3E3E] via-[#FF3E3E]/20 to-transparent" />

        <div className="space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 group cursor-target"
            >
              {/* Connector Node */}
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-[#FF3E3E] rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_#FF3E3E]" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Logo with HUD styling */}
                <div className="w-16 h-16 bg-white/5 border border-white/10 p-2 relative flex-shrink-0">
                  <img 
                    src={edu.logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain brightness-75 group-hover:brightness-110 transition-all" 
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E3E]/20 group-hover:bg-[#FF3E3E]" />
                </div>

                {/* Information Block */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-1">
                    <span className="text-[10px] font-mono text-[#FF3E3E] tracking-widest">{edu.status}</span>
                    <span className="text-[10px] font-mono text-gray-600">[{edu.period}]</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-gaming text-white uppercase tracking-tighter leading-tight">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-gray-400 font-mono text-xs uppercase mb-2">
                    {edu.degree}
                  </p>

                  {/* Horizontal Stats Strip */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
                    <span className="text-[9px] font-mono text-gray-500 uppercase">Verification_Score:</span>
                    <span className="text-[11px] font-mono text-white font-bold tracking-widest">{edu.stats}</span>
                  </div>
                </div>
              </div>

              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-[#FF3E3E]/5 to-transparent transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER-STYLE DECORATION AT BOTTOM LEFT */}
      <div className="mt-auto pt-8 border-t border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-4 h-1 bg-[#FF3E3E]" />
            <div className="w-4 h-1 bg-[#FF3E3E]/50" />
            <div className="w-4 h-1 bg-[#FF3E3E]/50" />
          </div>
          <span className="text-[9px] font-mono text-gray-700 tracking-[0.5em] uppercase italic">
            Mission_Control_Database_Ready
          </span>
        </div>
      </div>
    </section>
  );
};