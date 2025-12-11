import React from 'react';
import { Section } from './ui/Section';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A showcase of my technical capabilities in action, from robust backends to polished mobile interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col"
          >
            {/* Image Placeholder with Overlay */}
            <div className="relative h-48 overflow-hidden bg-slate-800">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90" />
              
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                {project.role}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (Placeholders) */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <Github size={16} /> Code
                </button>
                <button className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors ml-auto">
                    Live Demo <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};