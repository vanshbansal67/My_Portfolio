import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Linkedin, Github, Mail, Phone } from 'lucide-react';
// import { GlitchHeading } from '../components/GlitchHeading';
import { GlitchHeading } from '../../components/GlitchHeading';

export const Connect = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
    const [glitchKey, setGlitchKey] = useState(0); // Trigger state

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('SENDING...');

    emailjs.sendForm(
      'service_31f7o3y', 
      'template_p9r0lx1', 
      form.current, 
      'zFsOn6HR3JoZoSXit'
    )
    .then(() => {
      setStatus('MESSAGE_TRANSMITTED');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, (error) => {
      setStatus('ERROR_FAILED_RETRY');
    });
  };

  return (
    <section id="connect" className="min-h-auto w-full bg-[#050505] flex flex-col p-4 md:p-20 relative border-t border-white/5">
      
      {/* RESPONSIVE ELITE HEADER */}
      <div className="max-w-7xl mx-auto w-full mb-8 md:mb-12">
        <motion.div 
                         onViewportEnter={() => setGlitchKey(prev => prev + 1)} // Trigger on scroll
                         className="border-l-4 border-[#FF3E3E] pl-4 md:pl-6"
                       >
          <h2 className="text-[clamp(1.6rem,5vw,4.5rem)] font-gaming font-black text-white uppercase tracking-tighter italic leading-none">
            <GlitchHeading text="Secure_Channel" trigger={glitchKey}/>
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mt-2 uppercase opacity-80">
            // ESTABLISH_COMM_LINK // DIRECT_ACCESS_PORTAL
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-10 md:gap-12 max-w-7xl mx-auto w-full">
        
        {/* LEFT: FORM INTERFACE (Full width on mobile) */}
        <div className="w-full md:flex-1">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
            <div className="relative group">
              <label className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase mb-1 block">Subject_Name</label>
              <input 
                type="text" name="from_name" required
                className="w-full bg-white/5 border border-white/10 p-3 md:p-4 font-mono text-sm text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target"
                placeholder="INPUT NAME..."
              />
            </div>

            <div className="relative group">
              <label className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase mb-1 block">Return_Coordinates_Email</label>
              <input 
                type="email" name="from_email" required
                className="w-full bg-white/5 border border-white/10 p-3 md:p-4 font-mono text-sm text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target"
                placeholder="EMAIL_ADDRESS@SERVER.COM"
              />
            </div>

            <div className="relative group">
              <label className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase mb-1 block">Transmission_Data</label>
              <textarea 
                name="message" required rows="4"
                className="w-full bg-white/5 border border-white/10 p-3 md:p-4 font-mono text-sm text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target resize-none"
                placeholder="ENTER YOUR MESSAGE..."
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#FF3E3E] text-white font-gaming py-4 md:py-5 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs flex items-center justify-center gap-3 cursor-target shadow-[0_0_20px_rgba(255,62,62,0.3)] mt-2"
            >
              <Send size={16} color="white" strokeWidth={3} /> 
              <span className="font-bold">{status || 'INITIATE_TRANSFER'}</span>
            </motion.button>
          </form>
        </div>

        {/* RIGHT: CONTACT INTEL (Stacked below form on mobile) */}
        <div className="w-full md:w-1/3 flex flex-col justify-between py-2 gap-8 md:gap-0">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-[#FF3E3E] transition-colors">
                <Mail size={18} color="#FF3E3E" />
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] font-mono text-gray-600 uppercase">Comm_Email </p>
                <p className="text-xs md:text-sm font-mono text-white select-all italic break-all">bnslvansh67@gmail.com </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-[#FF3E3E] transition-colors">
                <Phone size={18} color="#FF3E3E" />
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] font-mono text-gray-600 uppercase">Direct_Line </p>
                <p className="text-xs md:text-sm font-mono text-white">+91 7300727615 </p>
              </div>
            </div>
          </div>

          {/* SOCIALS - Adaptive scaling for touch */}
          <div className="flex gap-4 md:gap-6 mt-4 md:mt-12">
            <a href="https://github.com/vanshbansal67" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 hover:border-[#FF3E3E] hover:bg-[#FF3E3E]/10 transition-all bg-white/5">
              <Github size={24} className="md:w-7 md:h-7" color="white" /> 
            </a>
            <a href="https://linkedin.com/in/vanshbansal67" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/20 hover:border-[#FF3E3E] hover:bg-[#FF3E3E]/10 transition-all bg-white/5">
              <Linkedin size={24} className="md:w-7 md:h-7" color="white" /> 
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE FRIENDLY FOOTER */}
      <div className="mt-12 md:mt-auto flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/5 pt-8 gap-4 md:gap-0">
        <span className="text-[8px] md:text-[9px] font-mono text-gray-700 uppercase tracking-widest text-center md:text-left">
          © 2026 VANSHAJ_BANSAL // ALL_SYSTEMS_GO
        </span>
        <div className="flex gap-2 opacity-30 md:hidden">
            <div className="w-2 h-2 bg-[#FF3E3E] rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-[#FF3E3E] rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-[#FF3E3E] rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </section>
  );
};