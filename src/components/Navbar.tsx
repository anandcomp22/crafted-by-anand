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
          : 'bg-obsidian/85 dark:bg-obsidian/85 bg-white/85 backdrop-blur-sm border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 py-3.5'
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          {/* Identity & Status */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="#hero" className="group flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-zinc-700 dark:border-zinc-700 border-zinc-300 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-100 flex items-center justify-center font-mono text-xs sm:text-sm font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:border-brand transition-colors relative">
                <span className="relative z-10">AM</span>
                <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-brand"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-xs sm:text-sm text-zinc-100 dark:text-zinc-100 text-zinc-900 leading-tight">
                  ANAND MORE
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 dark:text-zinc-400 text-zinc-600 tracking-wider whitespace-nowrap">
                  SERVER ENGINEER · FULL-STACK
                </span>
              </div>
            </a>

            {/* Live Availability Signal (Guaranteed Single-Line No Wrapping) */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle/60 dark:bg-obsidian-subtle/60 bg-zinc-50 font-mono text-[10px] text-zinc-300 dark:text-zinc-300 text-zinc-700 shrink-0 whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>PUNE, IN · SERVER ENGINEER @ CONCENTRIX</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            <div className="flex items-center gap-0.5 lg:gap-1 font-mono text-xs">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 lg:px-2.5 py-1 text-zinc-400 dark:text-zinc-400 text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-100 hover:text-zinc-900 transition-colors flex items-center gap-1 group"
                >
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-400 text-zinc-700 group-hover:text-brand transition-colors">
                    [{item.index}]
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Actions: Uniform h-8 Height & Crisp Geometric Alignment */}
            <div className="flex items-center gap-2.5 pl-4 border-l border-zinc-800 dark:border-zinc-800 border-zinc-200 shrink-0">
              {/* Hard Launch Checklist Trigger */}
              <button
                onClick={onOpenDeploymentLock}
                className="h-8 px-2.5 font-mono text-[11px] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-150 flex items-center gap-1.5 shrink-0"
                title="Review Deployment Lock & Hard Launch Checklist"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">LOCK:</span>
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

              {/* Contact CTA */}
              <a
                href="#contact"
                className="h-8 px-3.5 font-mono text-xs tracking-wider uppercase bg-brand text-white hover:bg-brand-hover transition-all duration-150 flex items-center gap-1.5 shrink-0 shadow-sm hover:shadow-brand/20"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDeploymentLock}
              className="h-8 px-2 font-mono text-[10px] text-emerald-400 border border-emerald-500/30 flex items-center gap-1"
              title="Deployment Lock"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>5/5</span>
            </button>
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="h-8 w-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-400 flex items-center justify-center"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-200 dark:text-zinc-200 text-zinc-800 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian dark:bg-obsidian bg-white px-4 py-6 space-y-4 animate-fade-in">
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
