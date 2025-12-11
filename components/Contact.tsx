import React from 'react';
import { Section } from './ui/Section';
import { CONTACT_INFO, HERO_DATA } from '../constants';
import { Mail, Phone, Linkedin, Github, ChevronUp } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <a 
          href="#home"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-400 transition-all shadow-lg"
        >
          <ChevronUp size={24} />
        </a>
      </div>

      <Section id="contact-content" className="pb-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center justify-center gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 uppercase tracking-wider">Email Me</div>
                <div className="text-slate-200 font-medium break-all">{CONTACT_INFO.email}</div>
              </div>
            </a>

            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="text-left">
                 <div className="text-xs text-slate-500 uppercase tracking-wider">Call Me</div>
                 <div className="text-slate-200 font-medium">{CONTACT_INFO.phone}</div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a href={CONTACT_INFO.linkedin} className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={28} />
            </a>
            <a href={CONTACT_INFO.github} className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github size={28} />
            </a>
          </div>

          <div className="text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {HERO_DATA.name}. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind CSS & Framer Motion.</p>
          </div>
        </div>
      </Section>
    </footer>
  );
};