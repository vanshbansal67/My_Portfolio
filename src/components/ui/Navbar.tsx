import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-6 mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2"
      >
        <div className="w-2 h-2 bg-[#FF3E3E] rounded-full animate-pulse" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-white">SYSTEM_ACTIVE</span>
      </motion.div>
      
      <div className="hidden md:flex gap-8">
        {['Introduction', 'Learning', 'Archives', 'Inventory', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#FF3E3E] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};