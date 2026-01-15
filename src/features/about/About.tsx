import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-20 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#00FFD1] pl-6 uppercase tracking-tighter">
          Technical Background
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I am a Computer Science student specializing in modern front-end architecture and user experience design[cite: 4]. 
          With a focus on performance and responsive design, I transform complex problems into elegant web interfaces[cite: 5, 6].
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[#00FFD1] font-mono">01.</span>
            <span className="text-white">B.Tech CSE (2023-2027) [cite: 8]</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00FFD1] font-mono">02.</span>
            <span className="text-white">Current CGPA: 8.36 [cite: 8]</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#00FFD1] font-mono">03.</span>
            <span className="text-white">Elite NPTEL AI Certified (79%)</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative border border-white/10 p-8 rounded-2xl bg-[#0a0a0a]"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-[#00FFD1] font-mono text-sm mb-4">// My Philosophy</h3>
        <p className="text-white text-2xl font-semibold leading-snug">
          "I build high-performance interfaces that bridge the gap between design and clean code." [cite: 6]
        </p>
        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4 text-sm font-mono text-gray-500">
          <div>
            <p className="text-white">Schooling</p>
            <p>P.R. Public School [cite: 8]</p>
          </div>
          <div>
            <p className="text-white">Performance</p>
            <p>85% Higher Secondary [cite: 8]</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};