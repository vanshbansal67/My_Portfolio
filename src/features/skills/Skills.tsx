import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = ["React", "JavaScript", "Tailwind CSS", "TypeScript", "Node.js", "Python", "MongoDB", "SQL"];
  
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 border-l-4 border-secondary pl-4">Technical Prowess</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <motion.span 
              key={skill}
              whileHover={{ scale: 1.1, color: "#00FFD1" }}
              className="px-6 py-2 border border-white/20 rounded-full text-lg font-mono"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Highlight Certification */}
        <div className="bg-gradient-to-br from-secondary/20 to-transparent p-8 rounded-2xl border border-secondary/30">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Elite Certification</h3>
          <p className="text-gray-300 italic mb-2">IIT Kanpur | NPTEL</p>
          <p className="text-white font-bold text-xl">Artificial Intelligence in Industrial and Management Engineering</p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-3xl font-bold text-accent">79%</span>
            <span className="bg-accent/10 text-accent px-3 py-1 rounded text-sm uppercase tracking-widest">Elite + Silver</span>
          </div>
        </div>
      </div>
    </section>
  );
};