'use client';

import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  provider: string;
  date: string;
  verifyUrl: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: 'Google Arcade Champion (46 Skill Badges)',
      provider: 'Google Cloud Platform (GCP)',
      date: 'Dec 2025',
      verifyUrl: 'https://cloud.google.com/training',
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      provider: 'Microsoft',
      date: 'Sep 2025',
      verifyUrl: 'https://learn.microsoft.com/en-us/credentials/browse/',
    },
    {
      title: 'Cisco Python Essentials 1 & 2',
      provider: 'Cisco Networking Academy',
      date: 'Aug 2024',
      verifyUrl: 'https://www.netacad.com/',
    },
    {
      title: 'Generative AI & Responsible AI Certifications',
      provider: 'Google Cloud',
      date: 'Jul 2025',
      verifyUrl: 'https://cloud.google.com/training',
    },
    {
      title: 'Cisco Cybersecurity Essentials Certificate',
      provider: 'Cisco Networking Academy',
      date: 'Feb 2024',
      verifyUrl: 'https://www.netacad.com/',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left space-y-3"
      >
        <h2 className="text-3xl sm:text-5xl font-bold font-heading">
          Licenses & <span className="text-primary-red">Certifications</span>
        </h2>
        <div className="w-12 h-1 bg-primary-red mx-auto md:mx-0 rounded" />
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.verifyUrl}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group glass-card p-6 flex flex-col justify-between hover:border-primary-red/35 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-primary-red/10 group-hover:border-primary-red/20 transition-all duration-300">
                  <Award className="w-5 h-5 text-primary-red" />
                </span>
                <span className="text-gray-400 group-hover:text-primary-red transition-colors duration-200">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground font-heading group-hover:text-primary-red transition-colors duration-200 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold">{cert.provider}</p>
              </div>
            </div>

            <div className="text-xs text-gray-500 font-medium pt-4 mt-4 border-t border-white/5">
              Issued: {cert.date}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
