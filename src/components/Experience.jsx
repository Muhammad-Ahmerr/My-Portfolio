import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#07090e] transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
            <span>Career Milestones</span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Experience
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-normal">
            Proven track record delivering production-ready MERN stack web applications and cross-functional technical workflows.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-300 dark:border-zinc-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={`experience-timeline-item-${exp.id}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#07090e] border-2 border-cyan-600 dark:border-cyan-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              </div>

              {/* Date stamp positioned on the left for larger screens */}
              <div className="sm:absolute sm:-left-32 md:-left-40 sm:top-1 text-xs font-mono text-cyan-700 dark:text-cyan-400/90 font-medium whitespace-nowrap mb-2 sm:mb-0">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-200 shadow-xs dark:shadow-xl dark:shadow-black/40">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-300 mt-1 font-medium">
                      <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>{exp.company}</span>
                      <span className="text-slate-400 dark:text-zinc-600">•</span>
                      <span className="text-slate-500 dark:text-zinc-400 text-xs font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Tech stack badges */}
                {exp.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Key Deliverables / Responsibilities */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
                    Core Responsibilities & Impact:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
