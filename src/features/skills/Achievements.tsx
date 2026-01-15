import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Zap } from 'lucide-react';

const eliteCredentials = [
    {
      id: "cert-01",
      issuer: "freeCodeCamp",
      title: "Data Structures & Algorithms",
      score: "COMPLETED",
      rank: "BASIC KNOWLEDGE",
      verifyUrl: "https://freecodecamp.org/certification/vanshbansal67/javascript-algorithms-and-data-structures-v8", // Add your link
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
  return (
    <section id="achievements" className="h-screen w-full bg-[#050505] flex flex-col justify-center p-6 md:p-20 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF3E3E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-12 border-l-4 border-[#FF3E3E] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic">
            Elite_Credentials
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // AUTHORIZED_ACCESS_ONLY // LEVEL_05_VERIFIED
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eliteCredentials.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] glass-card border border-white/10 p-6 flex flex-col justify-between overflow-hidden cursor-target"
            >
              {/* Animated Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3E3E]/10 to-transparent -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
              
              {/* Header: Rank + Icon */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#FF3E3E] font-bold tracking-widest">{cert.rank}</span>
                  <span className="text-[9px] font-mono text-gray-500">{cert.issuer}</span>
                </div>
                <Award className="text-white/20 group-hover:text-[#FF3E3E] transition-colors" size={24} />
              </div>

              {/* Center: Title + Score */}
              <div className="py-8">
                <h3 className="text-xl font-gaming text-white uppercase leading-tight mb-4">
                  {cert.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF3E3E]/10 border border-[#FF3E3E]/30">
                  <Zap size={12} className="text-[#FF3E3E]" />
                  <span className="text-[10px] font-mono text-white tracking-widest">SCORE: {cert.score}</span>
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
                  className="flex items-center justify-between text-[9px] font-gaming text-white/40 group-hover:text-white transition-colors"
                >
                  <span>VERIFY_PROTOCOL</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Corner Accents (Same as Intro/Skills) */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-all" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#FF3E3E]/30 group-hover:border-[#FF3E3E] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};