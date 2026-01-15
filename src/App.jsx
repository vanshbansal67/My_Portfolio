import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import Lenis from '@studio-freight/lenis';

// React Bits Components
import TargetCursor from './components/TargetCursor';
import FluidGlass from './components/FluidGlass';

// Feature Components
import { Hero } from './features/hero/Hero';
import { TerminalLoader } from './features/hero/TerminalLoader';
import { Inventory } from './features/skills/Inventory';
import { MissionArchives } from './features/projects/MissionArchives';
import { LabPrototypes } from './features/projects/LabPrototypes';
import { Achievements } from './features/skills/Achievements';
import { Journey } from './features/about/Journey';
import { Connect } from './features/contact/Connect';
// Placeholder Components (You will replace these as we build them)
const SectionPlaceholder = ({ id, title }) => (
  <section id={id} className="min-h-screen relative">
    <FluidHeader title={title} />
    <div className="py-20 px-10 text-center font-mono text-gray-500">
      {id.toUpperCase()}_MODULE_PENDING...
    </div>
  </section>
);

/**
 * FluidHeader: A localized sub-component for section breaks.
 * Animates the title using Framer Motion as it enters the viewport.
 */
const FluidHeader = ({ title }) => (
  <div className="relative h-[200px] md:h-[300px] w-full flex items-center justify-center overflow-hidden border-y border-white/5 bg-black">
    <div className="absolute inset-0 z-0 opacity-50">
      <FluidGlass
        mode="lens"
        lensProps={{ scale: 0.25, ior: 1.15, thickness: 5 }}
      />
    </div>
    <motion.h2
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: false, amount: 0.5 }} // Set once to false to re-animate on scroll
      className="text-5xl md:text-8xl font-gaming font-black uppercase tracking-tighter z-10 text-white/90 cursor-target select-none"
    >
      {title}
    </motion.h2>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  // Keep only the overflow control for the loader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);



  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="bg-bg text-white font-mono cursor-none overflow-x-hidden">
      {/* Global HUD elements */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <TargetCursor />
        {/* Optional: Add a subtle vignette or scanline overlay here for gaming look */}
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

            {/* SECTION 02: CORE CAPABILITIES (REPLACED PLACEHOLDER) */}
            <FluidHeader title="Core Capabilities" />
            <Inventory />

            {/* SECTION 03: MISSION ARCHIVES (Next Section) */}
            <FluidHeader id="experience" title="Mission Archives" />
            <MissionArchives />

            {/* SECTION 04: BASIC PROJECTS */}
            <FluidHeader id="prototypes" title="Lab Prototypes" />
            <LabPrototypes />

            {/* SECTION 05: ACHIEVEMENTS */}
            {/* <FluidHeader id="achievements" title="Elite Credentials" /> */}
            <Achievements />
            {/* SECTION 06: LEARNING JOURNEY */}
            {/* <SectionPlaceholder id="journey" title="Neural Expansion" /> */}
            <Journey />

            {/* SECTION 07: CONTACT */}
            {/* <SectionPlaceholder id="contact" title="Transmit Signal" /> */}
            <Connect />

            {/* FOOTER */}
            <footer className="py-10 text-center border-t border-white/5 font-mono text-[10px] uppercase tracking-widest text-gray-600">
              Terminal_End_Session // 2026 ©
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;