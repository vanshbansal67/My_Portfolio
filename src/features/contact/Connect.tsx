import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Linkedin, Github, Mail, Phone } from 'lucide-react';

export const Connect = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

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
    }, (error) => {
      setStatus('ERROR_FAILED_RETRY');
    });
  };

  return (
    <section id="connect" className="min-h-screen w-full bg-[#050505] flex flex-col p-6 md:p-20 relative border-t border-white/5">
      
      {/* ELITE HEADER STYLE */}
      <div className="max-w-7xl w-full mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border-l-4 border-[#FF3E3E] pl-6"
        >
          <h2 className="text-5xl md:text-7xl font-gaming font-black text-white uppercase tracking-tighter italic">
            Secure_Channel
          </h2>
          <p className="font-mono text-[#FF3E3E] tracking-[0.4em] text-xs mt-2 uppercase">
            // ESTABLISH_COMM_LINK // DIRECT_ACCESS_PORTAL
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12 max-w-7xl w-full">
        
        {/* LEFT: FORM INTERFACE */}
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="relative group">
              <label className="text-[10px] font-mono text-gray-500 uppercase mb-1 block">Subject_Name</label>
              <input 
                type="text" name="from_name" required
                className="w-full bg-white/5 border border-white/10 p-4 font-mono text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target"
                placeholder="INPUT NAME..."
              />
            </div>

            <div className="relative group">
              <label className="text-[10px] font-mono text-gray-500 uppercase mb-1 block">Return_Coordinates_Email</label>
              <input 
                type="email" name="from_email" required
                className="w-full bg-white/5 border border-white/10 p-4 font-mono text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target"
                placeholder="EMAIL_ADDRESS@SERVER.COM"
              />
            </div>

            <div className="relative group">
              <label className="text-[10px] font-mono text-gray-500 uppercase mb-1 block">Transmission_Data</label>
              <textarea 
                name="message" required rows="4"
                className="w-full bg-white/5 border border-white/10 p-4 font-mono text-white focus:border-[#FF3E3E] outline-none transition-all cursor-target resize-none"
                placeholder="ENTER YOUR MESSAGE..."
              />
            </div>

            {/* TRANSMIT BUTTON - Ensured visibility with bright red background */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF3E3E] text-white font-gaming py-5 uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 cursor-target shadow-[0_0_20px_rgba(255,62,62,0.4)] z-50 mt-4"
            >
              <Send size={18} color="white" strokeWidth={3} /> 
              <span className="font-bold">{status || 'INITIATE_TRANSFER'}</span>
            </motion.button>
          </form>
        </div>

        {/* RIGHT: CONTACT INTEL */}
        <div className="w-full md:w-1/3 flex flex-col justify-between py-2 min-h-[300px]">
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#FF3E3E] transition-colors bg-white/5">
                <Mail size={20} color="#FF3E3E" />
              </div>
              <div>
                <p className="text-[9px] font-mono text-gray-600 uppercase">Comm_Email </p>
                <p className="text-sm font-mono text-white select-all italic">bnslvansh67@gmail.com </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#FF3E3E] transition-colors bg-white/5">
                <Phone size={20} color="#FF3E3E" />
              </div>
              <div>
                <p className="text-[9px] font-mono text-gray-600 uppercase">Direct_Line </p>
                <p className="text-sm font-mono text-white">+91 7300727615 </p>
              </div>
            </div>
          </div>

          {/* SOCIALS - Fixed visibility with white color and border */}
          <div className="flex gap-6 mt-12">
            <a href="https://github.com/vanshbansal67" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-[#FF3E3E] hover:bg-[#FF3E3E]/10 transition-all cursor-target bg-white/5 shadow-lg">
              <Github size={28} color="white" /> 
            </a>
            <a href="https://linkedin.com/in/vanshbansal67" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center border border-white/20 hover:border-[#FF3E3E] hover:bg-[#FF3E3E]/10 transition-all cursor-target bg-white/5 shadow-lg">
              <Linkedin size={28} color="white" /> 
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-8">
        <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">© 2026 VANSHAJ_BANSAL // ALL_SYSTEMS_GO</span>
      </div>
    </section>
  );
};