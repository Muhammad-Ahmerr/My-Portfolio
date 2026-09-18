import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  ShieldCheck, 
  Layers, 
  Lock, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Package,
  ShoppingBag,
  Database,
  Server
} from 'lucide-react';
import { FEATURED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [activePreviewTab, setActivePreviewTab] = useState('storefront');
  const [showLiveDemoNotice, setShowLiveDemoNotice] = useState(false);

  const mainProject = FEATURED_PROJECTS[0];

  const handleLiveDemoClick = () => {
    setShowLiveDemoNotice(true);
    setTimeout(() => setShowLiveDemoNotice(false), 4000);
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative border-t border-slate-200/80 dark:border-white/[0.06] bg-[#fafafa] dark:bg-[#07090e] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
              <span>Featured Engineering</span>
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Featured Project
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              A comprehensive showcase demonstrating complete MERN stack architecture, enterprise authentication, role-based controls, and production database modeling.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
              Repository:
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-xs font-mono font-medium text-slate-800 dark:text-zinc-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Muhammad-Ahmerr</span>
            </a>
          </div>
        </div>

        {/* Hero Featured Project Showcase Card */}
        <motion.div
          id={`featured-project-card-${mainProject.id}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-white/[0.1] overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-2xl dark:shadow-black/70"
        >
          {/* Top Bar of Project */}
          <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-[#080b12] border-b border-slate-200/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60">
                {mainProject.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono hidden sm:inline">
                Full Stack Production Architecture
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                Production-Ready Spec
              </span>
            </div>
          </div>

          {/* Project Body Grid */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Column: Project Overview & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {mainProject.title}
                </h3>
                
                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mt-3 font-normal">
                  {mainProject.description}
                </p>

                {/* Technology Chips */}
                <div className="mt-5">
                  <div className="text-xs font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-2 font-semibold">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mainProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-zinc-900/90 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-600 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                      Core Implementation Features ({mainProject.features.length})
                    </span>
                    <span className="text-[11px] text-cyan-700 dark:text-cyan-400 font-mono font-semibold">REST + RBAC</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {mainProject.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300 py-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo, GitHub, Case Study */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                <button
                  id="project-case-study-button"
                  type="button"
                  onClick={() => setSelectedCaseStudy(mainProject)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 dark:hover:from-blue-500 dark:hover:to-cyan-400 shadow-md shadow-slate-900/10 dark:shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Architecture Case Study</span>
                </button>

                <a
                  id="project-github-button"
                  href={mainProject.githubUrl || PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/[0.1] transition-all duration-200 cursor-pointer"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-zinc-300" />
                  <span>View on GitHub</span>
                </a>

                <button
                  id="project-live-demo-button"
                  type="button"
                  onClick={handleLiveDemoClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20 transition-all duration-200 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Interactive Walkthrough</span>
                </button>
              </div>

              {showLiveDemoNotice && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/40 text-xs text-cyan-900 dark:text-cyan-200 flex items-center justify-between"
                >
                  <span>Interactive demonstration available in the Architecture Case Study below.</span>
                  <button
                    onClick={() => setShowLiveDemoNotice(false)}
                    className="text-cyan-700 dark:text-cyan-400 hover:underline font-mono text-xs ml-2 cursor-pointer"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Column: High-Fidelity Project Preview Canvas */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="h-full rounded-2xl bg-slate-50 dark:bg-[#06080e] border border-slate-200 dark:border-white/[0.08] overflow-hidden flex flex-col shadow-inner">
                
                {/* Mock Browser Header */}
                <div className="px-4 py-3 bg-white dark:bg-[#0a0e18] border-b border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 ml-2 bg-slate-100 dark:bg-zinc-900 px-3 py-0.5 rounded-md border border-slate-200 dark:border-white/[0.06] truncate max-w-[200px] sm:max-w-[260px]">
                      ecommerce-store.ahmar.dev
                    </span>
                  </div>

                  {/* Preview Mode Switcher */}
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-950 p-1 rounded-lg border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActivePreviewTab('storefront')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activePreviewTab === 'storefront'
                          ? 'bg-white dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-semibold shadow-xs'
                          : 'text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-300'
                      }`}
                    >
                      Storefront
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreviewTab('admin')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activePreviewTab === 'admin'
                          ? 'bg-white dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 font-semibold shadow-xs'
                          : 'text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-300'
                      }`}
                    >
                      Admin RBAC
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreviewTab('security')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activePreviewTab === 'security'
                          ? 'bg-white dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-semibold shadow-xs'
                          : 'text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-300'
                      }`}
                    >
                      Security
                    </button>
                  </div>
                </div>

                {/* Interactive Screenshot & Preview Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-100/60 dark:bg-gradient-to-b dark:from-[#080b13] dark:to-[#05070c]">
                  
                  {activePreviewTab === 'storefront' && (
                    <div className="space-y-4">
                      {/* Mini store navbar */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          <span className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Apex Retail Store</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-slate-500 dark:text-zinc-400">Cart (3 items)</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                            Authenticated
                          </span>
                        </div>
                      </div>

                      {/* Mock Product Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] space-y-2 shadow-xs">
                          <div className="w-full h-20 rounded-lg bg-slate-100 dark:bg-zinc-900/80 flex items-center justify-center text-slate-400 dark:text-zinc-600">
                            <Layers className="w-6 h-6 text-cyan-600 dark:text-cyan-400/60" />
                          </div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">Mechanical Keyboard</div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-cyan-700 dark:text-cyan-400 font-mono font-bold">$129.00</span>
                            <span className="text-slate-400 dark:text-zinc-500 text-[10px]">★ 4.9 (124)</span>
                          </div>
                          <button className="w-full py-1 rounded bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-[10px] font-medium border border-cyan-200 dark:border-transparent">
                            Add to Cart
                          </button>
                        </div>

                        <div className="p-3 rounded-xl bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] space-y-2 shadow-xs">
                          <div className="w-full h-20 rounded-lg bg-slate-100 dark:bg-zinc-900/80 flex items-center justify-center text-slate-400 dark:text-zinc-600">
                            <Package className="w-6 h-6 text-blue-600 dark:text-blue-400/60" />
                          </div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">Wireless ANC Headset</div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-blue-700 dark:text-blue-400 font-mono font-bold">$189.00</span>
                            <span className="text-slate-400 dark:text-zinc-500 text-[10px]">★ 4.8 (89)</span>
                          </div>
                          <button className="w-full py-1 rounded bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-[10px] font-medium border border-blue-200 dark:border-transparent">
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      {/* Checkout summary indicator */}
                      <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs shadow-xs">
                        <span className="text-slate-600 dark:text-zinc-400">Payment support:</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-mono font-medium">Cash on Delivery (COD)</span>
                      </div>
                    </div>
                  )}

                  {activePreviewTab === 'admin' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06]">
                        <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span>Admin Control Panel (RBAC)</span>
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                          Role: Administrator
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] shadow-xs">
                          <div className="text-[10px] text-slate-500 dark:text-zinc-400">Orders</div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">1,429</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] shadow-xs">
                          <div className="text-[10px] text-slate-500 dark:text-zinc-400">Products</div>
                          <div className="text-sm font-bold text-cyan-700 dark:text-cyan-300 font-mono">248</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] shadow-xs">
                          <div className="text-[10px] text-slate-500 dark:text-zinc-400">Sessions</div>
                          <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400 font-mono">84</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-white/[0.06] space-y-2 shadow-xs">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-zinc-300">
                          <span>Inventory API</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-mono text-[11px]">200 OK</span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                          PATCH /api/v1/admin/products/:id/stock &bull; JWT Verified
                        </div>
                      </div>
                    </div>
                  )}

                  {activePreviewTab === 'security' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06]">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <Lock className="w-4 h-4" />
                          <span>Security Engine & Token Matrix</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">bcrypt + JWT</span>
                      </div>

                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-emerald-500/20 flex items-center justify-between shadow-xs">
                          <span className="text-slate-600 dark:text-zinc-300">Access Token Lifespan:</span>
                          <span className="text-cyan-700 dark:text-cyan-300 font-bold">15 Minutes</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-emerald-500/20 flex items-center justify-between shadow-xs">
                          <span className="text-slate-600 dark:text-zinc-300">Refresh Token Storage:</span>
                          <span className="text-cyan-700 dark:text-cyan-300 font-bold">HTTP-Only Cookie</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-emerald-500/20 flex items-center justify-between shadow-xs">
                          <span className="text-slate-600 dark:text-zinc-300">Session Rotation:</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">Enabled</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white dark:bg-[#0c101b] border border-slate-200 dark:border-emerald-500/20 flex items-center justify-between shadow-xs">
                          <span className="text-slate-600 dark:text-zinc-300">Password Hashing:</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">bcrypt 12 rounds</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Architecture footer badge */}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                    <span>MERN Stack Architecture</span>
                    <span className="text-cyan-600 dark:text-cyan-400">Click Case Study for full details</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Structured Slot for Future Real Projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-dashed dark:border-white/[0.12] flex flex-col justify-between text-slate-600 dark:text-zinc-400 shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-transparent">
                  In Development
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-500 font-mono">Next Release</span>
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-zinc-200">
                Extensible Production Slot
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Reserved for additional production web applications, SaaS microservices, or client deliverables.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
              <span>Stack: React • Node • Express • Mongo</span>
              <span className="text-cyan-600 dark:text-cyan-400/80">Upcoming</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-dashed dark:border-white/[0.12] flex flex-col justify-between text-slate-600 dark:text-zinc-400 shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-transparent">
                  Custom Engineering
                </span>
                <span className="text-xs text-slate-500 dark:text-zinc-500 font-mono">Available for Hire</span>
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-zinc-200">
                Your Custom Web Application
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Ready to engineer your full-stack product with robust authentication, clean API design, and performant React frontends.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
              <a href="#contact" className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                <span>Start a project discussion</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Expanded Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
