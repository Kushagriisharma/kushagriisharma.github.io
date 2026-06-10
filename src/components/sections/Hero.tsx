'use client';

import React, { useEffect, useState } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = ['Software Engineer', 'Python Developer', 'AI/ML Enthusiast'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = words[currentWordIdx];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText.length === activeWord.length) {
          // Pause before deleting
          setTypingSpeed(2500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 14 } 
    }
  } as const;

  return (
    <section 
      id="hero" 
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden"
    >
      {/* Background Aurora Gradient Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-primary-red/10 rounded-full blur-[100px] animate-pulse-slow" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-6 select-none"
      >
        {/* Intro Tag */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-primary-red animate-bounce">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-ping" />
            Open to Opportunities
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground font-heading"
        >
          Kushagri Sharma
        </motion.h1>

        {/* Subtitle / Typewriter */}
        <motion.div 
          variants={itemVariants} 
          className="h-10 text-lg sm:text-2xl text-gray-300 font-medium font-sans"
        >
          <span>I am an aspiring </span>
          <span className="text-primary-red font-semibold typing-cursor font-heading">
            {currentText}
          </span>
        </motion.div>

        {/* Short bio hook */}
        <motion.p 
          variants={itemVariants} 
          className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 font-normal leading-relaxed"
        >
          Crafting high-performance web systems, training predictive neural network architectures, and developing clean software solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4"
        >
          <motion.button 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-red hover:bg-primary-red/90 text-white font-medium shadow-lg hover:shadow-primary-red/10 cursor-pointer transition-all duration-300"
          >
            View Projects
          </motion.button>
          
          <motion.a 
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 text-foreground hover:bg-white/10 font-medium cursor-pointer transition-all duration-300"
          >
            <FileText className="w-4 h-4" /> Download Resume
          </motion.a>

          <motion.button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-red/35 text-foreground hover:bg-white/10 font-medium cursor-pointer transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-center gap-5 pt-6 text-gray-400"
        >
          <motion.a whileHover={{ y: -3 }} href="https://github.com/Kushagriisharma" target="_blank" className="hover:text-primary-red transition-colors duration-200">
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/kushagri-sharma-7a4613288" target="_blank" className="hover:text-primary-red transition-colors duration-200">
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="mailto:kushagrisharma12@gmail.com" className="hover:text-primary-red transition-colors duration-200">
            <Mail className="w-5 h-5" />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="tel:+919079945728" className="hover:text-primary-red transition-colors duration-200 flex items-center gap-1.5" title="Call Kushagri">
            <Phone className="w-4 h-4" />
            <span className="text-xs font-semibold font-sans tracking-wide">+91 9079945728</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Down indicator */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary-red transition-colors duration-200 cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
