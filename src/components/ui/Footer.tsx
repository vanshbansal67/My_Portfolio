import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
export const Footer = () => {
    return (
      <footer className="py-10 px-6 md:px-20 border-t border-white/5 bg-[#050505]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            <p>Vanshaj Bansal // Head of Web Dev @ Crew TechVenture</p>
            <p className="mt-1">© 2026 All Rights Reserved [cite: 132]</p>
          </div>
          
          <div className="flex gap-10 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            <div>
              <p className="text-white">Location</p>
              <p>Noida, UP, India [cite: 2]</p>
            </div>
            <div>
              <p className="text-white">Status</p>
              <p>Open for Ops</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };