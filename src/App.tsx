import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Competencies } from './components/Competencies';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { DeploymentLockModal } from './components/DeploymentLockModal';

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('main');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [deploymentModalOpen, setDeploymentModalOpen] = useState<boolean>(false);

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('crafted-theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Check hash for direct route simulation
    const hash = window.location.hash.toLowerCase();
    if (hash === '#privacy' || hash === '#privacy-policy') {
      setViewMode('privacy');
    } else if (hash === '#terms' || hash === '#terms-and-conditions') {
      setViewMode('terms');
    }
  }, []);

  const handleToggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('crafted-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('crafted-theme', 'light');
      }
      return next;
    });
  };

  const handleNavigate = (view: ViewMode) => {
    setViewMode(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'privacy') {
      window.location.hash = 'privacy';
    } else if (view === 'terms') {
      window.location.hash = 'terms';
    } else {
      history.pushState(null, '', window.location.pathname);
    }
  };

  if (viewMode === 'privacy') {
    return <PrivacyPolicy onBack={() => handleNavigate('main')} />;
  }

  if (viewMode === 'terms') {
    return <TermsConditions onBack={() => handleNavigate('main')} />;
  }

  return (
    <div className="min-h-screen bg-obsidian text-zinc-100 dark:bg-obsidian dark:text-zinc-100 bg-white text-zinc-900 transition-colors duration-150 structural-grid relative selection:bg-brand selection:text-white">
      {/* Top Architectural Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenDeploymentLock={() => setDeploymentModalOpen(true)}
      />

      {/* Main Structural Frame - Stretched Width for Expansive Architectural Alignment */}
      <div className="max-w-[1720px] mx-auto border-x border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 relative bg-obsidian/40 dark:bg-obsidian/40 bg-white/40 shadow-2xl">
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Competencies />
          <Philosophy />
          <Contact />
        </main>

        {/* Structured Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenDeploymentLock={() => setDeploymentModalOpen(true)}
        />
      </div>

      {/* Hard Launch Checklist & Deployment Lock Modal */}
      <DeploymentLockModal
        isOpen={deploymentModalOpen}
        onClose={() => setDeploymentModalOpen(false)}
        onNavigate={(view) => handleNavigate(view)}
      />
    </div>
  );
}

export default App;
