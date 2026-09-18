import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  ArrowDown, 
  CheckCircle2, 
  Lock, 
  KeyRound, 
  RefreshCw,
  Boxes,
  FileCode2,
  Terminal
} from 'lucide-react';
export const CaseStudyModal = ({ project, isOpen, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div
        id="case-study-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="case-study-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-white/[0.12] rounded-2xl shadow-2xl shadow-slate-900/30 dark:shadow-black overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0c111e] sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/40">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Architecture Case Study</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {project.title}
              </h3>
            </div>
            <button
              id="close-case-study-modal-button"
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-700 dark:text-zinc-300">
            
            {/* 1. Overview */}
            <section id="case-study-section-overview" className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>1. Overview</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">System Concept & Architectural Goals</h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                {caseStudy.overview}
              </p>
              <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pt-1">
                {project.description}
              </p>
            </section>

            {/* 2. Architecture */}
            <section id="case-study-section-architecture" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>2. Architecture</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Stack Request Pipeline</h4>
              
              {/* Architecture Visual Diagram */}
              <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#06080e] border border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
                <div className="flex flex-col items-center max-w-lg mx-auto space-y-3 py-2">
                  
                  {/* Step 1: React Frontend */}
                  <div className="w-full p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-cyan-500/40 text-center shadow-xs">
                    <div className="flex items-center justify-center gap-2 text-cyan-800 dark:text-cyan-300 font-semibold text-sm sm:text-base">
                      <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>React.js Frontend</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">Single Page App • Context State • Protected Client Routes</p>
                  </div>

                  {/* Down Arrow */}
                  <div className="flex items-center justify-center text-cyan-600 dark:text-cyan-400/80 my-0.5">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>

                  {/* Step 2: REST API */}
                  <div className="w-full p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-blue-500/40 text-center shadow-xs">
                    <div className="flex items-center justify-center gap-2 text-blue-800 dark:text-blue-300 font-semibold text-sm sm:text-base">
                      <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span>REST API Gateway</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">HTTPS Endpoints • JSON Payloads • CORS & Rate Limiting</p>
                  </div>

                  {/* Down Arrow */}
                  <div className="flex items-center justify-center text-blue-600 dark:text-blue-400/80 my-0.5">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>

                  {/* Step 3: Express / Node.js */}
                  <div className="w-full p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-cyan-500/40 text-center shadow-xs">
                    <div className="flex items-center justify-center gap-2 text-cyan-800 dark:text-cyan-300 font-semibold text-sm sm:text-base">
                      <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <span>Express / Node.js</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">MVC Controllers • Middleware Pipeline • Centralized Error Handler</p>
                  </div>

                  {/* Down Arrow */}
                  <div className="flex items-center justify-center text-cyan-600 dark:text-cyan-400/80 my-0.5">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>

                  {/* Step 4: MongoDB */}
                  <div className="w-full p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-emerald-500/40 text-center shadow-xs">
                    <div className="flex items-center justify-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm sm:text-base">
                      <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>MongoDB & Mongoose</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">Mongoose ODM • Indexed Schemas • Session & Order Persistence</p>
                  </div>

                </div>
              </div>
            </section>

            {/* 3. Authentication Flow */}
            <section id="case-study-section-authentication" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>3. Authentication</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Token Lifecycle & Rotation Mechanism</h4>
              
              {/* Sequential Flow Representation */}
              <div className="space-y-3">
                {caseStudy.authenticationFlow.steps.map((flowStep) => (
                  <div
                    key={flowStep.step}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {flowStep.step}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>{flowStep.name}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">
                          {flowStep.detail}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.06] shrink-0 self-start sm:self-auto font-medium">
                      {flowStep.securityNote}
                    </span>
                  </div>
                ))}
              </div>

              {/* Text visual sequence */}
              <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-white/[0.06] font-mono text-xs text-slate-600 dark:text-zinc-400 flex items-center flex-wrap gap-2 justify-center text-center">
                <span className="text-cyan-700 dark:text-cyan-400 font-medium">User</span>
                <span>↓</span>
                <span className="text-slate-900 dark:text-white font-medium">Login</span>
                <span>↓</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-medium">Access Token</span>
                <span>↓</span>
                <span className="text-slate-900 dark:text-white font-medium">Protected API</span>
                <span>↓</span>
                <span className="text-cyan-700 dark:text-cyan-400 font-medium">Refresh Token</span>
                <span>↓</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Session Rotation</span>
              </div>
            </section>

            {/* 4. Key Features */}
            <section id="case-study-section-features" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>4. Key Features</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Feature Implementation Matrix</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.keyFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/[0.06] shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Technology Stack */}
            <section id="case-study-section-tech-stack" className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                <span>5. Technology Stack</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Tier Breakdown</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.technologyStack.map((tier) => (
                  <div
                    key={tier.layer}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/[0.08] shadow-xs"
                  >
                    <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase mb-2 font-semibold">
                      {tier.layer}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.06] text-xs text-slate-700 dark:text-zinc-300 font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#0c111e] flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
            <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
              Designed & Built with MERN Stack
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
              <a
                href={project.githubUrl || 'https://github.com'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 shadow-md shadow-slate-900/10 dark:shadow-cyan-500/20 hover:brightness-110 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
