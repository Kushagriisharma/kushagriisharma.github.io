'use client';

import React from 'react';
import { GraduationCap, Award, Briefcase, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Cumulative CGPA', value: '7.78/10', icon: <GraduationCap className="w-5 h-5 text-primary-red" /> },
    { label: 'Completed Projects', value: '5+', icon: <Zap className="w-5 h-5 text-primary-red" /> },
    { label: 'Google Badges', value: '46+', icon: <Award className="w-5 h-5 text-primary-red" /> },
    { label: 'Internships Worked', value: '3 Completed', icon: <Briefcase className="w-5 h-5 text-primary-red" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left space-y-3"
      >
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          About <span className="text-primary-red">Me</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Summary & Education */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">Professional Profile</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I am a B.Tech Computer Science & Engineering student at Medi-Caps University specializing in Artificial Intelligence. Passionate about software development and machine learning, I focus on building responsive web solutions, training Convolutional Neural Networks (CNNs), and developing reliable backend workflows.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              My engineering approach bridges full-stack coding (Next.js/React/Node) with machine learning pipelines (TensorFlow/Keras/OpenCV) to solve practical, real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-6 sm:p-8 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary-red" /> Education Details
            </h3>
            
            <div className="space-y-6 border-l border-white/10 pl-4">
              {/* College */}
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">Medi-Caps University, Indore</h4>
                <p className="text-primary-red text-sm font-semibold">B.Tech in Computer Science and Engineering (Artificial Intelligence)</p>
                <p className="text-gray-400 text-xs sm:text-sm">Aug 2022 — June 2026 (Expected Graduation)   |   CGPA: 7.78/10</p>
                <p className="text-gray-300 text-sm pt-1.5">
                  Focusing on Artificial Intelligence workflows, neural networks, database scalability, and web services.
                </p>
              </div>

              {/* 12th */}
              <div className="space-y-1 pt-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">Shivjyoti International School, Kota (Raj.)</h4>
                <p className="text-primary-red text-sm font-semibold">Senior Secondary Education (CBSE) — 12th Grade</p>
                <p className="text-gray-400 text-xs sm:text-sm">2021 — 2022   |   Percentage: 73%</p>
              </div>

              {/* 10th */}
              <div className="space-y-1 pt-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">Bansal Public School, Kota (Raj.)</h4>
                <p className="text-primary-red text-sm font-semibold">Secondary Education (CBSE) — 10th Grade</p>
                <p className="text-gray-400 text-xs sm:text-sm">2019 — 2020   |   Percentage: 75%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Quick Stats Card Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <span className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  {stat.icon}
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
