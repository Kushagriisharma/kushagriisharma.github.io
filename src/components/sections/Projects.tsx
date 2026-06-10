'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, BookOpen, X, ShieldAlert } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  isPrivate?: boolean;
  caseStudy: {
    role: string;
    challenges: string;
    solutions: string;
    impact: string;
  };
}

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'alertify',
      title: 'Alertify – SOS Emergency Web Client',
      description: 'A responsive PWA emergency response system featuring one-click SOS button, Leaflet/OSM mapping, Twilio background SMS/call alerts, and local fallback storage.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase DB', 'Leaflet.js', 'Twilio API'],
      image: '/images/alertify.png',
      githubUrl: 'https://github.com/Kushagriisharma/alertify',
      demoUrl: 'https://kushagriisharma.github.io/alertify/',
      caseStudy: {
        role: 'Lead Full-Stack Developer',
        challenges: 'Integrating real-time location mapping and direct SMS redirects natively on mobile viewports without third-party app dependencies during signal loss.',
        solutions: 'Configured a Progressive Web App (PWA) cache structure allowing complete offline launch, and utilized native browser Geolocation APIs backed by Twilio voice API integration.',
        impact: 'Provides immediate crisis signaling, resolving geographic coordinates into structured alert links within 3 seconds of activation.',
      },
    },
    {
      id: 'plant',
      title: 'Plant Disease Recognition System',
      description: 'Deep Learning agricultural diagnostics dashboard enabling instant detection of 38 categories of crop leaf diseases with dynamic on-the-fly model compilation fallbacks.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'OpenCV', 'NumPy'],
      image: '/images/plant_disease.png',
      githubUrl: 'https://github.com/Kushagriisharma/Plant_disease_dectection_system',
      demoUrl: 'https://plantdiseasedectectionsystem-6yvue4gjvpdtofdu5dtthv.streamlit.app/',
      caseStudy: {
        role: 'AI / Machine Learning Engineer',
        challenges: 'Deploying heavy deep learning model weights (99MB+) to memory-restricted, low-power free tier cloud servers without hitting performance and size limits.',
        solutions: 'Engineered an automatic compiler fallback script in Python that constructs a lightweight, optimized model structure at startup if weights are missing, resolving start-up failures.',
        impact: 'Ensures 100% cloud up-time and rapid image processing latency for farmers accessing diagnostic outputs.',
      },
    },
    {
      id: 'parinam',
      title: 'PARINAM Web Application Portal',
      description: 'Government-oriented management system featuring high-security authentication workflows, database operations, and modular administrative dashboards.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
      image: '/images/parinam.png',
      githubUrl: '',
      demoUrl: '',
      isPrivate: true,
      caseStudy: {
        role: 'Backend & Integration Intern (Oktets)',
        challenges: 'Maintaining modular data flow and optimizing nested API aggregation queries across thousands of official portal records.',
        solutions: 'Refactored Express.js database routers, implemented schema indices in MongoDB, and secured routes with JWT session filters.',
        impact: 'Significantly decreased admin dashboard loading delays and stabilized credentials verification modules.',
      },
    },
  ];

  // Lightweight 3D Tilt Effect calculations
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const angleX = (yc - y) / 15;
    const angleY = (x - xc) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Interactive glow pointer positions
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = '0.15';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    const glow = card.querySelector('.card-glow') as HTMLDivElement;
    if (glow) {
      glow.style.opacity = '0';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          Featured <span className="text-primary-red">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s ease-out' }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-card-bg backdrop-blur-md cursor-default p-5 shadow-lg select-none"
          >
            {/* Card Glow Mask */}
            <div className="card-glow absolute pointer-events-none w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red blur-[80px] opacity-0 transition-opacity duration-300" />

            <div className="space-y-4">
              {/* Project Image Banner */}
              <div className="relative w-full h-44 overflow-hidden rounded-xl bg-black/30 border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Meta */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 text-[10px] font-semibold bg-white/5 border border-white/5 rounded text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links / Buttons Row */}
            <div className="flex items-center gap-2 pt-5 mt-auto border-t border-white/5">
              {project.isPrivate ? (
                <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 mr-auto">
                  <ShieldAlert className="w-3.5 h-3.5" /> Private Repo
                </span>
              ) : (
                <>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 text-xs font-semibold text-gray-300 hover:text-foreground cursor-pointer transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary-red hover:bg-primary-red/90 text-xs font-semibold text-white cursor-pointer transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                </>
              )}
              
              <button
                onClick={() => setActiveCaseStudy(project)}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary-red/35 hover:bg-white/10 text-xs font-semibold text-gray-300 hover:text-foreground cursor-pointer transition-all ml-auto"
              >
                <BookOpen className="w-3.5 h-3.5" /> Study
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal Overlay */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-2xl glass-card !border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in zoom-in-95 duration-200">
            {/* Close trigger */}
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-foreground cursor-pointer hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-bold text-primary-red uppercase tracking-wider">Case Study / Portfolio Contribution</span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-foreground font-heading mt-1">{activeCaseStudy.title}</h3>
              <p className="text-sm text-primary-red font-semibold mt-1">Role: {activeCaseStudy.caseStudy.role}</p>
            </div>

            {/* Study Contents */}
            <div className="space-y-4 text-sm sm:text-base max-h-96 overflow-y-auto pr-2 no-scrollbar">
              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground font-heading uppercase text-xs tracking-wide text-gray-400">The Challenge</h4>
                <p className="text-gray-300 leading-relaxed">{activeCaseStudy.caseStudy.challenges}</p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground font-heading uppercase text-xs tracking-wide text-gray-400">Our Solution</h4>
                <p className="text-gray-300 leading-relaxed">{activeCaseStudy.caseStudy.solutions}</p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-foreground font-heading uppercase text-xs tracking-wide text-gray-400">Impact & Results</h4>
                <p className="text-gray-300 leading-relaxed">{activeCaseStudy.caseStudy.impact}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              {!activeCaseStudy.isPrivate && (
                <>
                  <a
                    href={activeCaseStudy.githubUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-semibold text-gray-300 cursor-pointer transition-all"
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </a>
                  <a
                    href={activeCaseStudy.demoUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-red hover:bg-primary-red/90 text-sm font-semibold text-white cursor-pointer transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Launch Live Demo
                  </a>
                </>
              )}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-gray-400 hover:text-foreground cursor-pointer ml-auto"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
