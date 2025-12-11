import React from 'react';
import { Section } from './ui/Section';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS } from '../constants';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-slate-900/30">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">My Journey</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-emerald-400" size={24} />
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-3 space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-500 group-hover:scale-125 transition-transform"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-slate-200">{exp.role}</h4>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{exp.duration}</span>
                </div>
                <h5 className="text-lg text-slate-400 mb-3">{exp.company}</h5>
                <p className="text-slate-400 text-sm leading-relaxed bg-slate-800/30 p-4 rounded-xl border border-white/5">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs Column */}
        <div className="space-y-12">
           {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
                {EDUCATION_DATA.map((edu, index) => (
                    <div key={index} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                        <h4 className="text-lg font-semibold text-slate-200">{edu.institution}</h4>
                        <p className="text-emerald-400 font-medium">{edu.degree}</p>
                        <p className="text-slate-500 mt-2 text-sm">{edu.grade}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <Award className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="flex flex-col gap-3">
                {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span className="text-slate-300 text-sm">{cert}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};