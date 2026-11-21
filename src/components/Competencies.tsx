import React from 'react';
import { SkillCategory } from '../types';

export const Competencies: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      index: '01',
      title: 'Frontend Engineering & Web Systems',
      description: 'Engineering responsive, performant user interfaces with deterministic state flows and optimal asset pipelines.',
      technologies: [
        { name: 'React 18', level: 'Production', focus: 'Concurrent features, hooks, memoization, lifecycle optimization' },
        { name: 'TypeScript', level: 'Production', focus: 'Strict type safety, generics, interface modeling, compile-time validation' },
        { name: 'Tailwind CSS', level: 'Production', focus: 'Utility-first layout, custom design systems, responsive architectural grids' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', focus: 'Event loop, asynchronous patterns, DOM manipulation, closures' },
        { name: 'WebRTC & Streams', level: 'Applied', focus: 'RTCPeerConnection, MediaStream API, peer negotiation, audio/video channels' },
        { name: 'Vite & Bundling', level: 'Production', focus: 'HMR, tree-shaking, production bundle analysis, code splitting' },
      ],
    },
    {
      index: '02',
      title: 'Backend & Distributed Services',
      description: 'Designing fault-tolerant REST APIs, webhook ingestion pipelines, and asynchronous event-driven services.',
      technologies: [
        { name: 'Node.js', level: 'Production', focus: 'Event-driven architecture, non-blocking I/O, cluster modules, micro-endpoints' },
        { name: 'Express.js', level: 'Production', focus: 'Middleware chains, routing architectures, payload validation, error handlers' },
        { name: 'Python', level: 'Production', focus: 'Automation scripts, backend services, scientific computing, ML ingestion' },
        { name: 'Django', level: 'Production', focus: 'ORM modeling, REST Framework, migration management, authentication' },
        { name: 'Apache Kafka & Sockets', level: 'Applied', focus: 'Event-driven bus (upStack), Socket.IO live sync, consumer groups' },
        { name: 'Payment APIs (Razorpay)', level: 'Production', focus: 'Webhook validation, HMAC signature verification, order lifecycle management' },
      ],
    },
    {
      index: '03',
      title: 'Data Systems & Storage',
      description: 'Structuring normalized relational schemas, scalable document stores, and transactional audit ledgers.',
      technologies: [
        { name: 'MongoDB', level: 'Production', focus: 'Aggregation pipelines, indexing, compound queries, document modeling' },
        { name: 'PostgreSQL & MySQL', level: 'Proficient', focus: 'Relational schema design, ACID transactions, join optimization, foreign keys' },
        { name: 'Redis (Caching)', level: 'Applied', focus: 'Key-value caching, TTL management, rate limiting, session storage' },
        { name: 'Data Security & JWT', level: 'Production', focus: 'Cryptographic hashing (bcrypt), token rotation, salted encryption' },
      ],
    },
    {
      index: '04',
      title: 'Server Engineering, DevOps & Multi-Agent AI',
      description: 'Enterprise server operations at Concentrix, containerization, Model Context Protocol (MCP), and multi-agent AI systems.',
      technologies: [
        { name: 'Enterprise Server Ops (Concentrix)', level: 'Production', focus: 'Linux (RHEL/Ubuntu), Windows Server, high availability, patching cycles' },
        { name: 'Model Context Protocol (MCP)', level: 'Applied', focus: 'Standardized tool layer bridging AI agents with backend calculation engines' },
        { name: 'Multi-Agent AI Orchestration', level: 'Applied', focus: 'Coordinated swarms (Coordinator, Portfolio, Market, Risk, Explanation agents)' },
        { name: 'Docker & Virtualization', level: 'Applied', focus: 'Container isolation, Dockerfile specs, hypervisor management, recovery' },
        { name: 'Git & GitHub Workflows', level: 'Production', focus: 'Branching strategies, code reviews, semantic releases, issue tracking' },
        { name: 'Applied ML & Computer Vision', level: 'Applied', focus: 'OpenCV crop leaf classification, local LLaMA NLP summarization' },
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 sm:py-28 border-b border-obsidian-border dark:border-obsidian-border border-paper-border relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        {/* Section Header with Precision Corner Crosshairs */}
        <div className="relative border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 bg-obsidian-subtle/60 dark:bg-obsidian-subtle/60 bg-zinc-50/60 p-4 sm:p-6 mb-12">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
            <span className="text-brand font-bold tracking-wider">SEC.03</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
            <span>CORE COMPETENCIES &amp; TOOLING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tightest uppercase text-zinc-100 dark:text-zinc-100 text-zinc-900">
            Technical Architecture
          </h2>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600 max-w-2xl font-mono">
            Categorized technical capabilities and engineering competencies. Zero simulated progress bars; strictly verified tooling and architectural disciplines.
          </p>
        </div>

        {/* Competencies Grid with Corner Marks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.index}
              className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200">
                  <div className="flex items-center gap-2 font-mono text-xs text-brand font-bold">
                    <span>[{cat.index}]</span>
                    <span className="uppercase text-zinc-400 dark:text-zinc-400 text-zinc-600 tracking-wider">PILLAR</span>
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-400 text-zinc-600">
                    VERIFIED DOMAIN
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Tech List */}
                <div className="space-y-3">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 border border-zinc-800/60 dark:border-zinc-800/60 border-zinc-200 bg-obsidian/60 dark:bg-obsidian/60 bg-white"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-zinc-100 dark:text-zinc-100 text-zinc-900 font-mono">
                          {tech.name}
                        </span>
                        <span className="px-1.5 py-0.5 text-[10px] font-mono border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-zinc-300 dark:text-zinc-300 text-zinc-700">
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-400 text-zinc-600 font-mono">
                        {tech.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
