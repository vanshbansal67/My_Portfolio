import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// React Bits Components
import TargetCursor from './components/TargetCursor';
import FluidGlass from './components/FluidGlass';
import { GlitchHeading } from './components/GlitchHeading'; // Bhai isko import zaroor karna

// Feature Components
import { Hero } from './features/hero/Hero';
import { TerminalLoader } from './features/hero/TerminalLoader';
import { Inventory } from './features/skills/Inventory';
import { MissionArchives } from './features/projects/MissionArchives';
import { LabPrototypes } from './features/projects/LabPrototypes';
import { Achievements } from './features/skills/Achievements';
import { Journey } from './features/about/Journey';
import { Connect } from './features/contact/Connect';

/**
 * FluidHeader: Section breaks with Responsive Glitch Animation
 */
const FluidHeader = ({ title }) => (
  <div className="relative h-[150px] md:h-[300px] w-full flex items-center justify-center overflow-hidden border-y border-white/5 bg-black">
    <div className="absolute inset-0 z-0 opacity-50">
      <FluidGlass
        mode="lens"
        lensProps={{ scale: 0.25, ior: 1.15, thickness: 5 }}
      />
    </div>
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-[clamp(2rem,10vw,6rem)] font-gaming font-black uppercase tracking-tighter z-10 text-white/90 select-none italic"
    >
      <GlitchHeading text={title} />
    </motion.h2>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Logic to detect mobile/tablet (Cursor Removal)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px se neeche cursor hide ho jayega
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Overflow control for loader
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className={`bg-bg text-white font-mono overflow-x-hidden ${!isMobile ? 'cursor-none' : ''}`}>

      {/* Global HUD elements - Conditional Rendering for Cursor */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {!isMobile && <TargetCursor />}
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <TerminalLoader key="loader" onComplete={handleLoaderComplete} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* SECTION 01: INTRODUCTION */}
            <Hero />

            {/* SECTION 02: CORE CAPABILITIES */}
            <Inventory />

            {/* SECTION 03: MISSION ARCHIVES */}
            <MissionArchives />

            {/* SECTION 04: BASIC PROJECTS */}
            <LabPrototypes />

            {/* SECTION 05: ACHIEVEMENTS */}
            <Achievements />

            {/* SECTION 06: LEARNING JOURNEY */}
            <Journey />

            {/* SECTION 07: CONTACT */}
            <Connect />

            {/* FOOTER */}
            <footer className="py-10 text-center border-t border-white/5 font-mono text-[10px] uppercase tracking-widest text-gray-600">
              Terminal_End_Session // 2026 © // VANSHAJ_BANSAL
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;