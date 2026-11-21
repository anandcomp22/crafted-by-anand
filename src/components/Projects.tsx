import React, { useState } from 'react';
import { ArrowUpRight, Github, Cpu } from 'lucide-react';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const projects: ProjectItem[] = [
    {
      id: 'upstack',
      index: '01',
      title: 'upStack',
      tagline: 'AI-Powered Multi-Agent Portfolio Intelligence Platform',
      category: 'MULTI-AGENT SYSTEMS & FINTECH',
      year: '2026 - Present',
      image: '/assets/upstack_architecture.png',
      summary: 'An intelligent investment copilot integrating multi-agent reasoning, Model Context Protocol (MCP) tool execution, and real-time market event streaming to analyze portfolio health, quantify risk, and recommend optimization strategies.',
      techStack: ['React 18', 'TypeScript', 'Python', 'Node.js', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Model Context Protocol', 'Multi-Agent LLMs', 'Docker'],
      highlights: [
        'Multi-Agent Swarm: Coordinator Agent orchestrating specialized sub-agents (Portfolio, Market, Risk, News, Recommendation, Explanation) for deterministic financial reasoning.',
        'Model Context Protocol (MCP): Standardized tool layer executing secure portfolio metrics, real-time price feeds, and sector diversification algorithms.',
        'Event-Driven Microservices: Asynchronous communication over Apache Kafka and Redis supporting automated risk threshold alerts and portfolio health scoring.',
      ],
      githubUrl: 'https://github.com/anandcomp22/upStack-portfolio-intelligence',
      status: 'Featured',
    },
    {
      id: 'farmax-agro',
      index: '02',
      title: 'Farmax Agro',
      tagline: 'AI-Driven Smart Agriculture Intelligence Platform',
      category: 'APPLIED AI & AGRITECH',
      year: '2024 - 2025',
      image: '/assets/farmax_agro.png',
      summary: 'AgriTech intelligence system equipped with real-time weather telemetry, automated crop leaf disease detection using computer vision, and soil-specific nutrient recommendations designed for multi-lingual farmer usability.',
      techStack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Python', 'OpenCV', 'LLaMA'],
      highlights: [
        'Integrated OpenCV neural image pre-processing to identify common crop leaf pathologies in under 800ms.',
        'Engineered responsive multi-lingual UI architecture optimized for high performance on 3G rural mobile networks.',
        'Constructed soil diagnostic recommendation logic linking micro-climate predictions with fertilizer guidelines.',
      ],
      githubUrl: 'https://github.com/anandcomp22/Farmax_Agro',
      status: 'Featured',
    },
    {
      id: 'aidme',
      index: '03',
      title: 'AidMe',
      tagline: 'Real-Time Telemedicine Platform & Clinical Consultation System',
      category: 'DISTRIBUTED REAL-TIME PLATFORMS',
      year: '2024 - 2025',
      image: '/assets/AidMe.png',
      summary: 'Full-stack clinical consultation architecture delivering peer-to-peer WebRTC video/audio feeds, automated clinical transcription summarization with LLaMA NLP, and role-segregated patient-doctor dashboards.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'LLaMA 3.2', 'JWT'],
      highlights: [
        'Implemented low-latency peer-to-peer WebRTC mesh streaming coordinated via Socket.IO signaling servers.',
        'Reduced practitioner consultation note preparation time by 40% utilizing localized LLaMA NLP summarization.',
        'Secured health record access through role-based access control (RBAC) and cryptographically signed JWT sessions.',
      ],
      githubUrl: 'https://github.com/anandcomp22/Patient-Engagement-',
      status: 'Featured',
    },
    {
      id: 'weather-predictor',
      index: '04',
      title: 'Weather Predictor',
      tagline: 'Time-Series Meteorological Forecasting Engine',
      category: 'DATA SYSTEMS & ML',
      year: '2024',
      image: '/assets/weather_predictor.png',
      summary: 'Django-based predictive modeling dashboard analyzing meteorological time-series records to generate 15-hour interval weather projections with interactive visualization.',
      techStack: ['Python', 'Django', 'Scikit-Learn', 'Pandas', 'REST API', 'Data Visualization'],
      highlights: [
        'Built multi-variate regression pipeline forecasting precipitation and temperature patterns at 5-hour increments.',
        'Designed caching layer for external meteorological API feeds to minimize third-party query overhead.',
        'Constructed telemetry analytics dashboard with client-side SVG charting.',
      ],
      githubUrl: 'https://github.com/anandcomp22/Weather-Prediction-dashboard',
      status: 'Production',
    },
    {
      id: 'crop-yield-predictor',
      index: '05',
      title: 'Crop Yield Predictor',
      tagline: 'Agricultural Yield Multi-Variable Regression Dashboard',
      category: 'APPLIED AI & AGRITECH',
      year: '2024',
      image: '/assets/crop_predictor.png',
      summary: 'Interactive machine learning analytics dashboard processing rainfall statistics, temperature records, and pesticide dosage data to predict agricultural yield probability bands.',
      techStack: ['React', 'Python', 'Scikit-Learn', 'Data Visualization', 'REST API'],
      highlights: [
        'Formulated decision regression model classifying predicted yield into Low, Moderate, Good, and Optimal tiers.',
        'Implemented immediate parameter sensitivity sliders allowing agricultural planners to model hypothetical climate scenarios.',
        'Containerized Python inference backend serving normalized JSON response payloads.',
      ],
      githubUrl: 'https://github.com/anandcomp22/crop_predictor.git',
      status: 'Production',
    },
  ];

  const categories = [
    'ALL',
    'MULTI-AGENT SYSTEMS & FINTECH',
    'DISTRIBUTED REAL-TIME PLATFORMS',
    'APPLIED AI & AGRITECH',
    'DATA SYSTEMS & ML',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-20 sm:py-28 border-b border-obsidian-border dark:border-obsidian-border border-paper-border relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        {/* Section Header with Precision Corner Crosshairs */}
        <div className="relative border border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200/80 bg-obsidian-subtle/60 dark:bg-obsidian-subtle/60 bg-zinc-50/60 p-4 sm:p-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</span>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
              <span className="text-brand font-bold tracking-wider">SEC.01</span>
              <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
              <span>SELECTED ENGINEERING WORKS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tightest uppercase text-zinc-100 dark:text-zinc-100 text-zinc-900">
              System Case Studies
            </h2>
          </div>

          {/* Category Filter Pills (Sharp Rectangular with Smooth Transitions) */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-zinc-100 text-zinc-950 border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-100 bg-zinc-900 text-zinc-100 border-zinc-900 shadow-sm'
                    : 'border-zinc-800 dark:border-zinc-800 border-zinc-200 text-zinc-400 dark:text-zinc-400 text-zinc-600 hover:text-zinc-200 dark:hover:text-zinc-200 hover:text-zinc-800 hover:border-zinc-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Architectural Corner Framing */}
        <div className="mt-8 space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 group"
            >
              {/* Corner Crosshair Markers */}
              <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>

              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-brand text-white font-bold tracking-wider">
                    [{project.index}]
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-400 text-zinc-600">
                  <span>TIMELINE: {project.year}</span>
                  <span className="px-2 py-0.5 border border-zinc-700 dark:border-zinc-700 border-zinc-300 text-[10px] text-zinc-300 dark:text-zinc-300 text-zinc-700">
                    STATUS: {project.status}
                  </span>
                </div>
              </div>

              {/* Asymmetrical 2-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual Screenshot Frame (7 cols) with Smooth Hover Zoom */}
                <div className="lg:col-span-7">
                  <div className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-black overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto max-h-[460px] object-cover object-top filter contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />

                    {/* Architectural Overlay Tag */}
                    <div className="absolute bottom-3 left-3 bg-obsidian/90 dark:bg-obsidian/90 bg-white/90 border border-zinc-800 dark:border-zinc-800 border-zinc-200 px-2.5 py-1 font-mono text-[11px] text-zinc-300 dark:text-zinc-300 text-zinc-700">
                      SYS.ARCH // SCREENSHOT TELEMETRY
                    </div>
                  </div>
                </div>

                {/* Technical Dossier Content (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs text-brand mb-4 font-semibold">
                      {project.tagline}
                    </div>

                    <p className="text-sm text-zinc-300 dark:text-zinc-300 text-zinc-700 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Engineering Highlights */}
                    <div className="mb-6">
                      <div className="font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-3 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-brand" />
                        <span>ENGINEERING SOLUTIONS &amp; SPECS</span>
                      </div>
                      <ul className="space-y-2.5 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand font-bold">»</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack Badges */}
                    <div className="mb-8">
                      <div className="font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-2">
                        TECHNOLOGY STACK
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 font-mono text-[11px] border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:border-zinc-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 font-mono text-xs uppercase tracking-wider bg-zinc-100 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 transition-all duration-200 flex items-center gap-2 group shadow-sm active:translate-y-0.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE REPOSITORY</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
