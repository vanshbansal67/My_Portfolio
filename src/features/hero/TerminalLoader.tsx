import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState("");
  const fullText = "> npm install vanshaj-bansal-portfolio --force...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black font-mono"
    >
      <div className="text-accent text-xl md:text-2xl">
        {text}<span className="animate-pulse">_</span>
      </div>
    </motion.div>
  );
};