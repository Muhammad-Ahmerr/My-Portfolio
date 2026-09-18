import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Layers, 
  Server, 
  ShieldCheck, 
  Award,
  Lock,
  Cpu,
  Database
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const About = () => {
  const statIcons = [
    <Award key="award" className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    <Layers key="layers" className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Server key="server" className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#07090e] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & About Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
                <span>Background & Philosophy</span>
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
              >
                About Me
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p id="about-text-paragraph-1">
                {PERSONAL_INFO.aboutText1}
              </p>
              <p id="about-text-paragraph-2">
                {PERSONAL_INFO.aboutText2}
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>End-to-End Application Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>JWT Access & Refresh Token Lifecycles</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>RESTful API Design & MVC Patterns</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>MongoDB Schema Validation & Indexing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Four Compact Statistic Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  id={`stat-card-${idx}`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-200 overflow-hidden shadow-xs dark:shadow-lg dark:shadow-black/40"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center shadow-xs">
                      {statIcons[idx]}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-mono">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <p className="text-xs text-slate-500 dark:text-zinc-400 pt-1 leading-normal font-normal">
                        {stat.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
