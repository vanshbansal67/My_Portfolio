import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Zap } from 'lucide-react';
// import { GlitchHeading } from '../components/GlitchHeading'; // Path to your shared component
import { GlitchHeading } from '../../components/GlitchHeading';

const eliteCredentials = [
    {
      id: "cert-01",
      issuer: "freeCodeCamp",
      title: "Data Structures & Algorithms",
      score: "COMPLETED",
      rank: "BASIC KNOWLEDGE",
      verifyUrl: "https://freecodecamp.org/certification/vanshbansal67/javascript-algorithms-and-data-structures-v8",
      details: "Advanced proficiency in algorithmic optimization and complex data structures. Certified via national-level examination."
    },
    {
      id: "cert-02",
      issuer: "freeCodeCamp",
      title: "Responsive Web Design",
      score: "COMPLETED",
      rank: "PRO_ARCHITECT",
      verifyUrl: "https://freecodecamp.org/certification/vanshbansal67/responsive-web-design",
      details: "Mastery of modern CSS architecture, Flexbox, CSS Grid, and mobile-first design principles."
    },
    {
      id: "cert-03",
      issuer: "LetsUpgrade",
      title: "JavaScript Logic BootCamp",
      score: "GRADUATED",
      rank: "LOGIC_OPERATIVE",
      verifyUrl: "https://verify.letsupgrade.in/certificate/LUEJSNOV124878",
      details: "Intensive training in DOM manipulation, ES6+ syntax, and asynchronous programming logic."
    },
    {
      id: "cert-04",
      issuer: "HackerRank",
      title: "Python (Basic) Protocol",
      score: "CERTIFIED",
      rank: "DATA_STRIKER",
      verifyUrl: "https://www.hackerrank.com/certificates/87ba48fdaf04",
      details: "Verified technical proficiency in Python scripting, functional programming, and data handling."
    }
  ];

export const Achievements = () => {
    const [glitchKey, setGlitchKey] = useState(0); // Trigger state
  
  return (
    <section id="achievements" className="min-h-screen w-full bg-[#050505] flex flex-col p-6 md:p-20 overflow-hidden relative border-t border-white/5">
      
      {/* Background Decorative Element - Scaled for Mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#FF3E3E]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* RESPONSIVE ELITE HEADER with Glitch Animation */}
        <motion.div 
                 onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
                 className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
               >
          <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            <GlitchHeading text="Elite_Credentials" trigger={glitchKey}/>
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase">
            // AUTHORIZED_ACCESS_ONLY // LEVEL_05_VERIFIED
          </p>
        </motion.div>

        {/* Certificate Grid - Optimized for Mobile (1 Column) to Desktop (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {eliteCredentials.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-auto md:h-[400px] glass-card border border-white/10 p-6 flex flex-col justify-between overflow-hidden bg-white/[0.02]"
            >
              {/* Scanline Effect - Simplified for mobile performance */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3E3E]/5 to-transparent -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none hidden md:block" />
              
              {/* Header: Rank + Icon */}
              <div className="flex justify-between items-start mb-6 md:mb-0">
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] font-mono text-[#FF3E3E] font-bold tracking-widest uppercase">{cert.rank}</span>
                  <span className="text-[8px] md:text-[9px] font-mono text-gray-500 uppercase">{cert.issuer}</span>
                </div>
                <Award className="text-white/20 group-hover:text-[#FF3E3E] transition-colors" size={20} />
              </div>

              {/* Center: Title + Score */}
              <div className="py-4 md:py-8">
                <h3 className="text-lg md:text-xl font-gaming text-white uppercase leading-tight mb-4 tracking-tighter italic">
                  {cert.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3E3E]/10 border border-[#FF3E3E]/30">
                  <Zap size={10} className="text-[#FF3E3E]" />
                  <span className="text-[9px] md:text-[10px] font-mono text-white tracking-widest">STATUS: {cert.score}</span>
                </div>
              </div>

              {/* Bottom: Details + Link */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {cert.details}
                </p>
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-[9px] font-gaming text-white/40 group-hover:text-[#FF3E3E] transition-all py-2 border border-transparent hover:border-white/5 px-2 -mx-2"
                >
                  <span className="tracking-widest italic">VERIFY_PROTOCOL</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-all" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};