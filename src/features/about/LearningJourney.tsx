import { motion } from 'framer-motion';

export const LearningJourney = () => {
  const education = [
    { title: "B.Tech Computer Science", inst: "AKTU", date: "2023 - 2027", score: "8.36 CGPA" },
    { title: "CBSE Class XII", inst: "P. R. Public School", date: "2022 - 2023", score: "85%" }
  ];

  return (
    <section className="py-20 px-6 md:px-20 border-t border-white/5">
      <div className="grid grid-cols-1 gap-12">
        {education.map((edu, i) => (
          <motion.div key={i} whileInView={{ x: [20, 0], opacity: [0, 1] }} className="border-l-2 border-[#FF3E3E] pl-8">
            <span className="text-xs font-mono text-gray-500">{edu.date}</span>
            <h3 className="text-2xl font-bold uppercase">{edu.title}</h3>
            <p className="text-[#FF3E3E] font-black text-4xl mt-2 tracking-tighter">{edu.score}</p>
            <p className="text-gray-500 font-mono text-sm uppercase">{edu.inst}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};