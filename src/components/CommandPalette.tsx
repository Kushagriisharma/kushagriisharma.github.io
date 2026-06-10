'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Search, Monitor, Moon, Sun, FileText, Github, Linkedin, Mail, ArrowRight, Phone, Copy } from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  };

  const commands: CommandItem[] = [
    { id: 'sec-hero', title: 'Go to Hero Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('hero') },
    { id: 'sec-about', title: 'Go to About Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('about') },
    { id: 'sec-exp', title: 'Go to Experience Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('experience') },
    { id: 'sec-proj', title: 'Go to Projects Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('projects') },
    { id: 'sec-skills', title: 'Go to Skills Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('skills') },
    { id: 'sec-contact', title: 'Go to Contact Section', category: 'Navigation', icon: <ArrowRight className="w-4 h-4" />, action: () => scrollToSection('contact') },
    { id: 'act-theme', title: 'Toggle Light / Dark Theme', category: 'Actions', icon: <Sun className="w-4 h-4" />, action: toggleTheme },
    { id: 'act-resume', title: 'Download Resume', category: 'Actions', icon: <FileText className="w-4 h-4" />, action: () => window.open('/resume.pdf', '_blank') },
    { id: 'act-copy-phone', title: 'Copy Phone Number to Clipboard', category: 'Actions', icon: <Copy className="w-4 h-4" />, action: () => { navigator.clipboard.writeText('9079945728'); } },
    { id: 'lnk-git', title: 'Open GitHub Profile', category: 'Links', icon: <Github className="w-4 h-4" />, action: () => window.open('https://github.com/Kushagriisharma', '_blank') },
    { id: 'lnk-link', title: 'Open LinkedIn Profile', category: 'Links', icon: <Linkedin className="w-4 h-4" />, action: () => window.open('https://www.linkedin.com/in/kushagri-sharma-7a4613288', '_blank') },
    { id: 'lnk-mail', title: 'Email Kushagri', category: 'Links', icon: <Mail className="w-4 h-4" />, action: () => window.open('mailto:kushagrisharma12@gmail.com', '_self') },
    { id: 'lnk-phone', title: 'Call Kushagri (9079945728)', category: 'Links', icon: <Phone className="w-4 h-4" />, action: () => window.open('tel:+919079945728', '_self') },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearch('');
    }
  }, [isOpen]);

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl overflow-hidden glass-card !border-white/10 shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 border-b border-white/10 py-3.5">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-0 outline-none text-foreground placeholder-gray-400 text-base"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-white/5 border border-white/10 rounded">ESC</kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
          {filteredCommands.length === 0 ? (
            <div className="py-6 text-center text-gray-400 text-sm">No results found for &quot;{search}&quot;.</div>
          ) : (
            filteredCommands.reduce((acc: React.ReactNode[], cmd, index) => {
              const prevCmd = filteredCommands[index - 1];
              const showCategory = !prevCmd || prevCmd.category !== cmd.category;

              if (showCategory) {
                acc.push(
                  <div key={`cat-${cmd.category}`} className="px-3 py-1.5 text-xs font-semibold text-primary-red uppercase tracking-wider opacity-80 mt-2 first:mt-0">
                    {cmd.category}
                  </div>
                );
              }

              acc.push(
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                    activeIndex === index 
                      ? 'bg-primary-red/10 text-primary-red font-medium border-l-2 border-primary-red pl-2' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {cmd.icon}
                    <span>{cmd.title}</span>
                  </div>
                  {activeIndex === index && (
                    <kbd className="text-[10px] font-semibold text-primary-red bg-primary-red/10 border border-primary-red/20 px-1 py-0.5 rounded">ENTER</kbd>
                  )}
                </button>
              );

              return acc;
            }, [])
          )}
        </div>
      </div>
    </div>
  );
}
