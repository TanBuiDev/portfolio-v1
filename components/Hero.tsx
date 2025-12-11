import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { HERO_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
              Available for Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {HERO_DATA.name}
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg"
          >
            <span className="block text-slate-200 font-semibold mb-2">{HERO_DATA.title}</span>
            {HERO_DATA.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-white/5 text-slate-200 font-medium rounded-full border border-white/10 hover:bg-white/10 hover:border-emerald-400/30 transition-all hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Visual / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
             {/* Decorative Circles */}
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-4 right-4 w-full h-full border-2 border-emerald-500/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-full h-full border-2 border-cyan-500/20 rounded-full" />
            
            {/* Avatar Image */}
            <img 
              src={HERO_DATA.avatarUrl} 
              alt={HERO_DATA.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};