import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  GraduationCap, 
  Calendar, 
  Building2, 
  ArrowUpRight, 
  Code2, 
  GitBranch, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

export const ConnectSections = () => {
  return (
    <div className="border-t border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#07090e] py-16 md:py-24 space-y-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual Card Grid: GitHub Section & LinkedIn Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* GITHUB SECTION: Built With Code */}
          <motion.div
            id="github-section-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between shadow-xs dark:shadow-xl dark:shadow-black/40 group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-800 dark:text-white shadow-xs">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-200 dark:border-cyan-800/30 font-medium">
                  Open Source & Repos
                </span>
              </div>

              <h3
                id="github-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2"
              >
                Built With Code
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Explore backend REST API implementations, modular MVC architectures, full-stack MERN projects, and secure authentication workflows on GitHub.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-zinc-400">
                <span className="flex items-center gap-1 bg-white dark:bg-zinc-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.05]">
                  <GitBranch className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  MERN Architecture
                </span>
                <span className="flex items-center gap-1 bg-white dark:bg-zinc-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.05]">
                  <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Node.js / Express
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.06]">
              <a
                id="github-cta-button"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-white border border-slate-200 dark:border-white/[0.1] hover:border-cyan-500/40 transition-all duration-200 shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-400" />
              </a>
            </div>
          </motion.div>

          {/* LINKEDIN SECTION */}
          <motion.div
            id="linkedin-section-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between shadow-xs dark:shadow-xl dark:shadow-black/40 group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800/30 font-medium">
                  Professional Network
                </span>
              </div>

              <h3
                id="linkedin-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2"
              >
                Connect on LinkedIn
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Let's discuss full-stack engineering opportunities, remote developer roles, enterprise REST API design, and scalable web solutions.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-zinc-400">
                <span className="flex items-center gap-1 bg-white dark:bg-zinc-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.05]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Full-Stack Roles
                </span>
                <span className="flex items-center gap-1 bg-white dark:bg-zinc-900/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.05]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Engineering Contracts
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.06]">
              <a
                id="linkedin-cta-button"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 dark:bg-blue-600/20 hover:bg-blue-100 dark:hover:bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 transition-all duration-200 shadow-xs"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* EDUCATION SECTION */}
        <div id="education" className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400 text-xs font-mono font-medium tracking-wide uppercase mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Academic Foundation</span>
            </div>
            <h3
              id="education-heading"
              className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Education
            </h3>
          </div>

          <motion.div
            id="education-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0a0e17] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs dark:shadow-lg dark:shadow-black/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {EDUCATION.degree}
                </h4>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <Building2 className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-500" />
                  <span>{EDUCATION.institution}</span>
                </div>
                {EDUCATION.focus && (
                  <p className="text-xs text-slate-500 dark:text-zinc-500 font-mono pt-1">
                    {EDUCATION.focus}
                  </p>
                )}
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/[0.06] text-cyan-700 dark:text-cyan-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{EDUCATION.period}</span>
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
