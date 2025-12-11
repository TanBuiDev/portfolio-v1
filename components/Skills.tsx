import React from 'react';
import { Section } from './ui/Section';
import { SKILLS_DATA, SKILL_ICONS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Skills</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive toolkit I've cultivated through academic excellence and hands-on projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((category, index) => {
          // Dynamic Icon mapping (Fallback to default if not found)
          const IconComponent = SKILL_ICONS[category.title as keyof typeof SKILL_ICONS];
          
          return (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                   {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-xl font-semibold text-slate-200">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 group-hover:border-emerald-500/30 group-hover:text-emerald-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 bg-slate-900/80 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
         <div>
            <h4 className="text-lg font-semibold text-white mb-1">Soft Skills</h4>
            <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>English (TOEIC 600)</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Teamwork</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Agile/Scrum</span>
            </div>
         </div>
      </div>
    </Section>
  );
};