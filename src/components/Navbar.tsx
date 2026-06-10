'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const navItems = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    // Check initial theme state
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
      document.documentElement.classList.add('light-theme');
      setIsLightMode(true);
    } else {
      document.documentElement.classList.remove('light-theme');
      setIsLightMode(false);
    }

    const handleScroll = () => {
      // 1. Scroll progress calculations
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Active section highlights
      const scrollPosition = window.scrollY + 200;
      navItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    setIsLightMode(isLight);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsMobileMenuOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerSearch = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full px-4 py-4 sm:px-6">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary-red transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 glass-card bg-background/50 border-white/5 shadow-lg">
        {/* Name / Logo */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-xl font-bold tracking-tight text-foreground cursor-pointer font-heading"
        >
          Kushagri<span className="text-primary-red">.</span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                activeSection === item.id 
                  ? 'text-primary-red font-semibold' 
                  : 'text-gray-400 hover:text-foreground'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Toolbar (Search, Theme, Menu) */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <button 
            onClick={triggerSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-gray-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg cursor-pointer transition-colors"
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="hidden sm:inline-block font-sans text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/10 rounded px-1">Ctrl + K</kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-foreground hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-200"
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-gray-400 hover:text-foreground hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full mt-2 p-3 glass-card bg-background/90 border-white/5 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'bg-primary-red/10 text-primary-red' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
