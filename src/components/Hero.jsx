import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Database, 
  Server, 
  Cpu, 
  Copy, 
  Check, 
  ExternalLink,
  MessageCircle,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Lock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden transition-colors duration-200"
    >
      {/* Clean subtle dot grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Verified Credentials & Contact Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <div
              id="hero-availability-pill"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Time Roles & Contracts</span>
            </div>

            {/* Main Name & Title */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-3"
            >
              {PERSONAL_INFO.mainHeading}
            </h1>

            {/* Supporting Headline */}
            <h2
              id="hero-supporting-heading"
              className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-tight leading-snug mb-5"
            >
              {PERSONAL_INFO.supportingHeading}
            </h2>

            {/* Narrative Description */}
            <p
              id="hero-description-text"
              className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6 font-normal"
            >
              {PERSONAL_INFO.description}
            </p>

            {/* Direct Quick-Contact Information Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
              {/* Phone Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium">
                  {PERSONAL_INFO.phoneFormatted}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium">
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  aria-label="Copy email"
                  className="ml-1 p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* WhatsApp Quick Message */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-700/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                id="hero-primary-cta"
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 dark:hover:from-blue-500 dark:hover:to-cyan-400 shadow-md shadow-slate-900/10 dark:shadow-cyan-500/25 transition-all duration-200 cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/[0.1] transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact & Inquiries</span>
              </a>
            </div>

            {/* Technology Stack Footer Line */}
            <div
              id="hero-technology-line"
              className="flex items-center flex-wrap gap-2.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400 border-t border-slate-200 dark:border-white/[0.08] pt-4 w-full"
            >
              <span className="text-slate-400 dark:text-zinc-500 uppercase tracking-wider text-[11px] font-semibold">Core Stack:</span>
              <span className="font-medium text-slate-800 dark:text-cyan-300">MongoDB</span>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <span className="font-medium text-slate-800 dark:text-blue-300">Express.js</span>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <span className="font-medium text-slate-800 dark:text-cyan-300">React.js</span>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <span className="font-medium text-slate-800 dark:text-blue-300">Node.js</span>
            </div>
          </motion.div>

          {/* Right Column: Authentic Engineering Blueprint & System Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div
              id="hero-architecture-card"
              className="bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/[0.1] rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/70"
            >
              {/* Card Header & Controls */}
              <div className="bg-slate-50 dark:bg-[#080b12] px-5 py-3.5 border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    Full Stack Engineering Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                  MERN v19
                </span>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center bg-slate-100/70 dark:bg-[#0d121f] px-3 pt-2 border-b border-slate-200 dark:border-white/[0.08] gap-1.5 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-2 rounded-t-lg transition-colors border-t-2 ${
                    activeTab === 'architecture'
                      ? 'bg-white dark:bg-[#0b0f19] text-cyan-700 dark:text-cyan-300 border-cyan-500 font-semibold'
                      : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 border-transparent'
                  }`}
                >
                  Request Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('security')}
                  className={`px-3 py-2 rounded-t-lg transition-colors border-t-2 ${
                    activeTab === 'security'
                      ? 'bg-white dark:bg-[#0b0f19] text-cyan-700 dark:text-cyan-300 border-cyan-500 font-semibold'
                      : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 border-transparent'
                  }`}
                >
                  Security Controls
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('contact')}
                  className={`px-3 py-2 rounded-t-lg transition-colors border-t-2 ${
                    activeTab === 'contact'
                      ? 'bg-white dark:bg-[#0b0f19] text-cyan-700 dark:text-cyan-300 border-cyan-500 font-semibold'
                      : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 border-transparent'
                  }`}
                >
                  Developer Specs
                </button>
              </div>

              {/* Tab Content Panel */}
              <div className="p-5 sm:p-6 min-h-[310px]">
                {activeTab === 'architecture' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono">
                      <span>CLIENT-SERVER DATA PIPELINE</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">HTTPS / TLS 1.3</span>
                    </div>

                    {/* Step 1 */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          React.js Single Page Interface
                        </span>
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">Layer 1</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-400">
                        Context API state management, responsive Tailwind layouts, and protected route wrappers.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                        <span className="flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          Express.js RESTful Gateway
                        </span>
                        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">Layer 2</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-400">
                        Modular MVC architecture, rate limiting, centralized error handling middleware, and Helmet headers.
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                        <span className="flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          MongoDB & Mongoose ODM
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">Layer 3</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-400">
                        Strict schema validation, optimized indexing, relational population, and compound indexes.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
                      SECURITY & AUTHENTICATION ENFORCEMENT
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-400 dark:text-zinc-500 block text-[10px]">AUTH MECHANISM</span>
                        <strong className="text-slate-900 dark:text-white">JWT Access (15m)</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-400 dark:text-zinc-500 block text-[10px]">REFRESH CYCLE</span>
                        <strong className="text-slate-900 dark:text-white">HTTP-Only SameSite</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-400 dark:text-zinc-500 block text-[10px]">PASSWORD HASH</span>
                        <strong className="text-slate-900 dark:text-white">bcrypt (12 Rounds)</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-400 dark:text-zinc-500 block text-[10px]">AUTHORIZATION</span>
                        <strong className="text-slate-900 dark:text-white">Role-Based (RBAC)</strong>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/30 text-xs text-cyan-900 dark:text-cyan-300">
                      <div className="flex items-center gap-1.5 font-semibold mb-1">
                        <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>Token Rotation & Replay Protection</span>
                      </div>
                      <p className="text-[11px] leading-relaxed opacity-90">
                        Old refresh tokens are automatically invalidated upon exchange, mitigating stolen credential replay.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
                      DEVELOPER PROFILE SNAPSHOT
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-zinc-400">Phone Contact:</span>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                          {PERSONAL_INFO.phoneFormatted}
                        </a>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-zinc-400">Email Address:</span>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-zinc-400">GitHub:</span>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="font-mono font-semibold text-slate-800 dark:text-white hover:underline flex items-center gap-1">
                          <span>Muhammad-Ahmerr</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-zinc-400">LinkedIn:</span>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                          <span>muhammad-ahmar-7709a8394</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="bg-slate-50 dark:bg-[#080b12] px-5 py-2.5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>MERN Production Stack</span>
                </div>
                <span>Muhammad Ahmar</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
