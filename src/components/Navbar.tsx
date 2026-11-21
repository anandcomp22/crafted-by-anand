import React, { useState, useEffect } from 'react';
import { Sun, Moon, ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenDeploymentLock: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenDeploymentLock,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORKS', href: '#works', index: '01' },
    { label: 'EXPERIENCE', href: '#experience', index: '02' },
    { label: 'ARCHITECTURE', href: '#architecture', index: '03' },
    { label: 'PHILOSOPHY', href: '#philosophy', index: '04' },
    { label: 'CONTACT', href: '#contact', index: '05' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-obsidian/95 dark:bg-obsidian/95 bg-white/95 backdrop-blur-md border-zinc-800 dark:border-zinc-800 border-zinc-200 py-2.5 shadow-lg shadow-black/20'
          : 'bg-obsidian/85 dark:bg-obsidian/85 bg-white/85 backdrop-blur-sm border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 py-3'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Identity & Status */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#hero" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-zinc-700 dark:border-zinc-700 border-zinc-300 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-100 flex items-center justify-center font-mono text-xs sm:text-sm font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:border-brand transition-colors relative shrink-0">
                <span className="relative z-10">AM</span>
                <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-brand"></span>
              </div>
              <div className="flex flex-col shrink-0">
                <span className="font-bold tracking-tight text-xs sm:text-sm text-zinc-100 dark:text-zinc-100 text-zinc-900 leading-tight">
                  ANAND MORE
                </span>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-600 tracking-wider whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span>SERVER ENGINEER</span>
                  <span className="hidden sm:inline text-zinc-600 dark:text-zinc-500">·</span>
                  <span className="hidden sm:inline">CONCENTRIX</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items (Responsive for standard laptops & wide monitors) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
            <div className="flex items-center gap-0.5 xl:gap-1 font-mono text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 xl:px-2.5 py-1 text-zinc-400 dark:text-zinc-400 text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors flex items-center gap-1 group whitespace-nowrap"
                >
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-500 group-hover:text-brand transition-colors hidden xl:inline">
                    [{item.index}]
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Actions: Guaranteed Zero-Clipping on Laptop Viewports */}
            <div className="flex items-center gap-2 xl:gap-2.5 pl-2.5 xl:pl-3.5 border-l border-zinc-800 dark:border-zinc-800 border-zinc-200 shrink-0">
              {/* Hard Launch Checklist Trigger */}
              <button
                onClick={onOpenDeploymentLock}
                className="h-8 px-2 xl:px-2.5 font-mono text-[11px] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-150 flex items-center gap-1.5 shrink-0 whitespace-nowrap"
                title="Review Deployment Lock & Hard Launch Checklist"
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xl:inline">LOCK:</span>
                <span>5/5 PASSED</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle light and dark theme"
                className="h-8 w-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-400 hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 hover:border-zinc-500 transition-all duration-150 flex items-center justify-center shrink-0"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              {/* Contact CTA (Guaranteed No Overflow Clipping) */}
              <a
                href="#contact"
                className="h-8 px-3 xl:px-3.5 font-mono text-xs tracking-wider uppercase bg-brand text-white hover:bg-brand-hover transition-all duration-150 flex items-center gap-1.5 shrink-0 whitespace-nowrap shadow-sm hover:shadow-brand/20"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Tablet & Compact Desktop Actions (shown below lg: 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenDeploymentLock}
              className="h-8 px-2 font-mono text-[10px] text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shrink-0"
              title="Deployment Lock"
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>5/5</span>
            </button>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="h-8 w-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-400 flex items-center justify-center shrink-0"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <a
              href="#contact"
              className="h-8 px-2.5 font-mono text-[11px] tracking-wider uppercase bg-brand text-white flex items-center gap-1 shrink-0 whitespace-nowrap"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3 h-3 shrink-0" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-200 dark:text-zinc-200 text-zinc-800 flex items-center justify-center shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian dark:bg-obsidian bg-white px-4 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2 font-mono text-sm">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:text-white flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-brand">[{item.index}]</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 font-mono text-xs text-center block uppercase tracking-wider bg-brand text-white"
            >
              INITIATE CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
