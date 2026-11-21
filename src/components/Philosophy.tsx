import React from 'react';
import { Shield, Zap, BookOpen, CheckCircle2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Resilient By Design',
      subtitle: 'Defensive Architecture & Graceful Degradation',
      description: 'Distributed services must anticipate network latency, payment timeouts, and service outages. Idempotent API requests, structured error boundaries, and strict payload schema validation always take precedence over superficial visual effects.',
      icon: Shield,
    },
    {
      number: '02',
      title: 'Code As Communication',
      subtitle: 'Architectural Clarity & Team Readability',
      description: 'Code is read ten times more frequently than it is written. Transparent modular design, explicit variable naming, and strict TypeScript types minimize collective cognitive burden and prevent regression bugs.',
      icon: BookOpen,
    },
    {
      number: '03',
      title: 'Measured Performance Targets',
      subtitle: 'Sub-100ms Responses & Lean Asset Footprints',
      description: 'Performance is engineered at the database index and network packet layer. We target sub-100ms API response latency, minimal bundle weight, and rapid First Contentful Paint without reliance on laggy client-side animations.',
      icon: Zap,
    },
    {
      number: '04',
      title: 'Authentic Verification',
      subtitle: 'Verified Artifacts Over Simulated Hype',
      description: 'Zero fake testimonials. Zero simulated metric counter bars. Zero placeholder corporate buzzwords. Every project shown is backed by tangible source repositories, real commits, and production-tested engineering rigor.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 border-b border-obsidian-border dark:border-obsidian-border border-paper-border structural-grid">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header with Corner Guides */}
        <div className="relative pb-8 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
          <div className="corner-mark corner-mark-tl"></div>
          <div className="corner-mark corner-mark-tr"></div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
            <span className="text-brand font-bold tracking-wider">SEC.04</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
            <span>ENGINEERING TENETS &amp; CODE ETHICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest uppercase text-zinc-100 dark:text-zinc-100 text-zinc-900">
            Design &amp; Build Philosophy
          </h2>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600 max-w-2xl font-mono">
            Guiding engineering principles prioritizing structural integrity, security, and computational precision.
          </p>
        </div>

        {/* Principles Grid with Corner Marks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
                <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
                <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
                <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 font-mono text-xs">
                    <span className="text-brand font-bold text-sm">
                      [{item.number}]
                    </span>
                    <Icon className="w-4 h-4 text-zinc-400 dark:text-zinc-400 text-zinc-600" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-brand mb-4 font-medium">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-zinc-300 dark:text-zinc-300 text-zinc-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
