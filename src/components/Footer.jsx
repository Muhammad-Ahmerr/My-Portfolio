import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-100 dark:bg-[#05070c] border-t border-slate-200/80 dark:border-white/[0.08] py-12 md:py-16 text-slate-600 dark:text-zinc-400 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/[0.06]">
          
          {/* Brand & Stack */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-cyan-950 border border-slate-300 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-700 dark:text-zinc-300 font-medium">
              {PERSONAL_INFO.role}
            </p>

            <p className="text-xs text-cyan-700 dark:text-cyan-400 font-mono mt-2 tracking-wide font-medium">
              MongoDB • Express.js • React.js • Node.js
            </p>
          </div>

          {/* Direct Social / Contact Links */}
          <div className="flex items-center flex-wrap justify-center gap-5 sm:gap-6 text-sm font-medium">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              id="footer-phone-link"
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>

            <a
              id="footer-whatsapp-link"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline transition-colors text-xs font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-200/80 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/30 transition-all flex items-center gap-2 text-xs font-mono shadow-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </button>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-zinc-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="text-slate-500 dark:text-zinc-600">
            Engineered with React, Tailwind CSS & MERN Architecture
          </div>
        </div>

      </div>
    </footer>
  );
};
