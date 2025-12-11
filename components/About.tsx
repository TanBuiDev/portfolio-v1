import React from 'react';
import { Section } from './ui/Section';
import { ABOUT_TEXT } from '../constants';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-900/30">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
           <div className="sticky top-28">
             <div className="w-16 h-16 bg-emerald-500/10 flex items-center justify-center rounded-2xl mb-6 border border-emerald-500/20">
               <User className="text-emerald-400" size={32} />
             </div>
             <h2 className="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
             <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
           </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl shadow-xl hover:border-emerald-500/20 transition-all duration-300">
             <p className="text-lg text-slate-300 leading-relaxed">
               {ABOUT_TEXT}
             </p>
             
             <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
               <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-white/5">
                 <div className="text-2xl font-bold text-emerald-400">3.6</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">GPA</div>
               </div>
               <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-white/5">
                 <div className="text-2xl font-bold text-cyan-400">3+</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Projects</div>
               </div>
               <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-white/5">
                 <div className="text-2xl font-bold text-emerald-400">24/7</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Learner</div>
               </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-xl border border-white/5">
                 <div className="text-2xl font-bold text-cyan-400">100%</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Commitment</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};