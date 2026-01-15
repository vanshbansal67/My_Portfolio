import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 border-l-4 border-[#FF3E3E] pl-6"
    >
      <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic">
        {title}
      </h2>
      <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
        // {subtitle} // {id}_MODULE_VERIFIED
      </p>
    </motion.div>
  );
};