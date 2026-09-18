import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Route, 
  Palette, 
  Code2, 
  Layers, 
  Smartphone, 
  Server, 
  Cpu, 
  Network, 
  Boxes, 
  ArrowRightLeft, 
  Database, 
  FileCode2, 
  KeyRound, 
  RefreshCw, 
  ShieldCheck, 
  UserCheck, 
  FileLock2, 
  GitBranch, 
  Github, 
  Send, 
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon string names to Lucide icons safely
const getSkillIcon = (iconName) => {
  const iconProps = { className: "w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover/chip:text-cyan-500 transition-colors" };
  switch (iconName) {
    case 'Atom': return <Atom {...iconProps} />;
    case 'Route': return <Route {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Network': return <Network {...iconProps} />;
    case 'Boxes': return <Boxes {...iconProps} />;
    case 'ArrowRightLeft': return <ArrowRightLeft {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'FileCode2': return <FileCode2 {...iconProps} />;
    case 'KeyRound': return <KeyRound {...iconProps} />;
    case 'RefreshCw': return <RefreshCw {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
    case 'UserCheck': return <UserCheck {...iconProps} />;
    case 'FileLock2': return <FileLock2 {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Github': return <Github {...iconProps} />;
    case 'Send': return <Send {...iconProps} />;
    case 'Terminal': return <Terminal {...iconProps} />;
    default: return <Code2 {...iconProps} />;
  }
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'security', label: 'Auth & Security' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.categoryKey === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-white/[0.06] bg-[#fafafa] dark:bg-[#07090e] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
              <span>Stack Capabilities</span>
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Specialized across client-side React rendering, modular Express architectures, MongoDB collections, and production security controls.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center flex-wrap gap-1.5 bg-slate-200/70 dark:bg-[#0b0f19] p-1.5 rounded-xl border border-slate-300/60 dark:border-white/[0.08] max-w-full overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-slate-300 dark:border-cyan-500/40 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Organized Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.categoryKey}
              id={`skill-category-${category.categoryKey}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 p-6 flex flex-col justify-between shadow-xs dark:shadow-lg dark:shadow-black/50 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/[0.06]">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-zinc-400">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills Chips / Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-white/[0.05] hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:bg-cyan-50/40 dark:hover:bg-cyan-950/20 transition-all duration-200 group/chip"
                    >
                      <div className="w-6 h-6 rounded-lg bg-white dark:bg-[#07090e] border border-slate-200 dark:border-white/[0.06] flex items-center justify-center shrink-0 shadow-xs">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 group-hover/chip:text-slate-900 dark:group-hover/chip:text-white transition-colors truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>Domain verified</span>
                <span className="text-cyan-600 dark:text-cyan-400/80 font-semibold">• MERN Stack</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
