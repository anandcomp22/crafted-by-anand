import React from 'react';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      index: '01',
      company: 'Concentrix',
      role: 'Server Engineer',
      period: '2026 - Present',
      type: 'Enterprise Operations',
      location: 'Pune, India',
      overview: 'Managing mission-critical enterprise server infrastructure, high-availability Linux/Windows server environments, virtualization architectures, and automated infrastructure health telemetry.',
      highlights: [
        'Administering enterprise server nodes ensuring 99.9%+ uptime, proactive resource monitoring, and strict SLA compliance.',
        'Automating server maintenance cycles, vulnerability mitigation, and patch deployments utilizing shell scripting and configuration tooling.',
        'Executing incident diagnosis, root-cause investigation, and disaster recovery failover procedures across distributed enterprise networks.',
      ],
      skills: ['Linux (RHEL/Ubuntu)', 'Windows Server', 'Infrastructure Operations', 'Virtualization', 'Shell Scripting', 'Network Protocols (DNS/DHCP)', 'Security Patching'],
    },
    {
      index: '02',
      company: 'Celebal Technologies',
      role: 'Backend Developer Intern',
      period: '2025',
      type: 'Internship',
      location: 'Remote / India',
      overview: 'Engineered high-reliability payment gateway infrastructure utilizing Razorpay APIs, integrating end-to-end checkout, automated webhook validation, and tamper-resistant transaction logging.',
      highlights: [
        'Implemented Razorpay payment pipelines supporting multi-method transactions, automated refunds, and webhook event listeners.',
        'Structured encrypted client-server payloads and JWT token rotation for tamper-resistant authentication workflows.',
        'Constructed MongoDB transaction ledger architecture providing audit logging for order reconciliations.',
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'Razorpay API', 'Docker', 'JWT', 'REST APIs'],
    },
    {
      index: '03',
      company: 'i2ispecialist Pvt. Ltd.',
      role: 'MERN Stack Developer Intern',
      period: '2024 - 2025',
      type: 'Internship',
      location: 'Pune, India',
      overview: 'Engineered a full-scale Vehicle Service Management System featuring vehicle onboarding, maintenance history auditing, and workshop billing workflows.',
      highlights: [
        'Developed end-to-end MERN modules managing vehicle service stages from intake to final billing inspection.',
        'Formulated performant RESTful API routes with MongoDB aggregation pipelines for fleet service reporting.',
        'Streamlined client-side state handling in React for real-time technician workload synchronization.',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JavaScript'],
    },
    {
      index: '04',
      company: 'StartUp AidMe',
      role: 'Software Engineer',
      period: '2024 - Present',
      type: 'Product Engineering',
      location: 'Pune, India',
      overview: 'Engineered a telemedicine platform enabling encrypted peer-to-peer audio/video streaming, patient queue management, and automated consultation notes summarization.',
      highlights: [
        'Integrated WebRTC and Socket.IO for low-latency browser-to-browser clinical consultations.',
        'Deployed LLaMA NLP pipelines reducing physician post-consultation documentation overhead by 40%.',
        'Implemented role-based dashboards with JWT-authenticated session invalidation and encrypted health records.',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Socket.IO', 'LLaMA', 'Git'],
    },
    {
      index: '05',
      company: 'Pimpri Chinchwad College of Engineering & Research (PCCOER)',
      role: 'Bachelor of Engineering in Computer Engineering',
      period: '2021 - 2025',
      type: 'Academic Education',
      location: 'Pune, India',
      overview: 'Comprehensive study of computer science fundamentals, software engineering methodologies, distributed systems, and algorithmic problem-solving.',
      highlights: [
        'Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Systems, Computer Networks.',
        'Led technical initiatives and development of high-performance campus computing projects.',
      ],
      skills: ['Data Structures', 'Algorithms', 'System Design', 'DBMS', 'Operating Systems', 'C++'],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-obsidian-border dark:border-obsidian-border border-paper-border relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header with Corner Guides */}
        <div className="relative pb-8 border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
          <div className="corner-mark corner-mark-tl"></div>
          <div className="corner-mark corner-mark-tr"></div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 mb-2">
            <span className="text-brand font-bold tracking-wider">SEC.02</span>
            <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">/</span>
            <span>VERIFIED PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest uppercase text-zinc-100 dark:text-zinc-100 text-zinc-900">
            Engineering Roles
          </h2>
          <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600 max-w-2xl font-mono">
            Active server infrastructure operations at Concentrix alongside verified experience in enterprise payment gateways and distributed architectures.
          </p>
        </div>

        {/* Experience Timeline Grid with Corner Marks */}
        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.index}
              className="relative border border-zinc-800 dark:border-zinc-800 border-zinc-200 bg-obsidian-subtle dark:bg-obsidian-subtle bg-zinc-50/50 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="absolute -top-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-mono text-xs text-brand select-none leading-none pointer-events-none">+</div>
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/80 dark:border-zinc-800/80 border-zinc-200">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand font-bold">
                      [{exp.index}]
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-300 dark:text-zinc-300 text-zinc-700 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-zinc-700 dark:text-zinc-700 text-zinc-300">·</span>
                    <span className="font-mono text-xs font-normal text-zinc-400 dark:text-zinc-400 text-zinc-600">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600">
                  <span className="px-2 py-0.5 border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-300 dark:text-zinc-300 text-zinc-700">
                    {exp.period}
                  </span>
                  <span className="text-[11px] mt-1 text-brand">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <p className="text-sm text-zinc-300 dark:text-zinc-300 text-zinc-700 leading-relaxed mb-4">
                    {exp.overview}
                  </p>

                  <ul className="space-y-2 font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="lg:col-span-4 lg:border-l lg:border-zinc-800/80 lg:dark:border-zinc-800/80 lg:border-zinc-200 lg:pl-6">
                  <div className="font-mono text-xs text-zinc-400 dark:text-zinc-400 text-zinc-600 uppercase mb-3">
                    DEPLOYED TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 font-mono text-[11px] border border-zinc-800 dark:border-zinc-800 border-zinc-300 bg-obsidian dark:bg-obsidian bg-white text-zinc-300 dark:text-zinc-300 text-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
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
