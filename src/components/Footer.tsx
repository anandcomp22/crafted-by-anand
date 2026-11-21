import React from 'react';
import { ShieldCheck, Github, Linkedin, Mail, FileText, Scale } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
  onOpenDeploymentLock: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeploymentLock }) => {
  return (
    <footer className="relative bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50 border-t border-obsidian-border dark:border-obsidian-border border-paper-border text-zinc-400 dark:text-zinc-400 text-zinc-600 transition-colors">
      <div className="corner-mark corner-mark-tl"></div>
      <div className="corner-mark corner-mark-tr"></div>
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
          {/* Identity & Colophon (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white flex items-center justify-center font-mono text-xs font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900">
                AM
              </div>
              <span className="font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900 text-sm">
                ANAND MORE
              </span>
            </div>
            <p className="text-xs max-w-sm leading-relaxed mb-4">
              Server Engineer at Concentrix and systems developer specializing in enterprise server infrastructure, multi-agent AI architectures (upStack), and high-availability distributed systems. Based in Pune, Maharashtra, India.
            </p>

            {/* Hard Launch Status Indicator */}
            <button
              onClick={onOpenDeploymentLock}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 font-mono text-xs transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DEPLOYMENT LOCK: 5/5 PASSED</span>
            </button>
          </div>

          {/* Site Navigation (3 cols) */}
          <div className="md:col-span-3 font-mono text-xs">
            <div className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-bold uppercase tracking-wider mb-4">
              INDEX
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [00] SPECIFICATION
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [01] SYSTEM WORKS
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [02] EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [03] ARCHITECTURE
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [04] PHILOSOPHY
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors">
                  [05] CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Direct Links (4 cols) */}
          <div className="md:col-span-4 font-mono text-xs">
            <div className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-bold uppercase tracking-wider mb-4">
              LEGAL &amp; COMPLIANCE
            </div>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-brand transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Privacy Policy (GDPR / DPDP Compliant)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-brand transition-colors flex items-center gap-1.5"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeploymentLock}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Hard Launch Deployment Criteria</span>
                </button>
              </li>
            </ul>

            <div className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-bold uppercase tracking-wider mb-2">
              VERIFIED CHANNELS
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/anandcomp22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white dark:hover:text-white hover:text-zinc-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-more-4b2887256/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white dark:hover:text-white hover:text-zinc-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:moreanand111011@gmail.com"
                className="hover:text-white dark:hover:text-white hover:text-zinc-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Monogram, Canonical Domain, Zero AI Stamp */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            &copy; 2026 Anand More. All engineering specifications reserved.
          </div>

          <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-400 text-zinc-600">
            <span>DOMAIN: anandmore.dev</span>
            <span>·</span>
            <span>REACT 18 · TYPESCRIPT · TAILWIND</span>
            <span>·</span>
            <span>PUNE, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
