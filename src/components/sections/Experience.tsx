'use client';

import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Python Developer Intern',
      company: 'Oktets Private Limited',
      duration: 'January 2026 – May 2026',
      responsibilities: [
        'Worked on maintenance and enhancement of the PARINAM web application.',
        'Performed bug fixing, module updates, API integration, and debugging to improve system.',
      ],
      skills: ['Python', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      role: 'AI/ML Summer Intern',
      company: 'Google AI/ML Program, Medi-Caps University',
      duration: 'June 2025 – July 2025',
      responsibilities: [
        'Built and evaluated Machine Learning models using NumPy, Pandas, Scikit-learn.',
        'Performed data preprocessing and feature engineering, improving model accuracy and robustness.',
      ],
      skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Data Preprocessing', 'Model Tuning'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Edunet-Shell Skills4Future (AICTE)',
      duration: 'Feb 2025 – Mar 2025',
      responsibilities: [
        'Developed Python-based solutions for real-world problems, applying algorithm optimization and debugging to improve efficiency and code performance.',
      ],
      skills: ['Python', 'Algorithm Design', 'Optimization', 'Problem Solving', 'Debugging'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left space-y-3"
      >
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          Work <span className="text-primary-red">Experience</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative pt-6">
        {/* Central vertical line */}
        <div className="timeline-line" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
                className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-[14px] h-[14px] rounded-full border-2 border-primary-red bg-background z-10" 
              />

              {/* Left Side (Shows Duration on Desktop) */}
              <div className="md:w-[45%] md:text-right pl-10 md:pl-0 mb-2 md:mb-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>

              {/* Right Side (Card Content) */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0">
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="glass-card p-6 space-y-4"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">{exp.role}</h3>
                    <p className="text-primary-red text-sm font-semibold flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/5 rounded text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
