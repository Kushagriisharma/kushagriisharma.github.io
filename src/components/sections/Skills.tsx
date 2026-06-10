'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
}

export default function Skills() {
  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'AI/ML', 'Tools'];
  const [activeCategory, setActiveCategory] = useState('All');

  const skills: Skill[] = [
    // Programming
    { name: 'Python', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'C', category: 'Programming' },
    { name: 'C++', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'SQL', category: 'Programming' },
    // Frontend
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Flask', category: 'Backend' },
    // Database
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Database' },
    { name: 'SQLite', category: 'Database' },
    // AI/ML
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Keras', category: 'AI/ML' },
    { name: 'Scikit-learn', category: 'AI/ML' },
    { name: 'NumPy', category: 'AI/ML' },
    { name: 'Pandas', category: 'AI/ML' },
    { name: 'OpenCV', category: 'AI/ML' },
    // Tools
    { name: 'Git', category: 'Tools' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Google Cloud Platform', category: 'Tools' },
    { name: 'REST APIs', category: 'Tools' },
    { name: 'Command Line', category: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left space-y-3"
      >
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          Technical <span className="text-primary-red">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </motion.div>

      {/* Category Tab Filters */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer border ${
              activeCategory === cat
                ? 'bg-primary-red border-primary-red text-white shadow-lg shadow-primary-red/10'
                : 'bg-white/5 border-white/5 hover:border-white/10 text-gray-300 hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Skill Cloud Container */}
      <div className="glass-card p-6 sm:p-10 overflow-hidden">
        <motion.div layout className="flex flex-wrap gap-3 justify-center md:justify-start">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:border-primary-red/35 hover:bg-white/10 text-sm font-medium text-gray-200 hover:text-foreground shadow-sm cursor-default select-none"
              >
                {skill.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
