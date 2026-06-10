import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import GitHub from '@/components/sections/GitHub';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. HERO HOME SECTION */}
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 2. ABOUT PROFILE SECTION */}
      <About />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 3. EXPERIENCE TIMELINE */}
      <Experience />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 4. PROJECTS SHOWCASE */}
      <Projects />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 5. TECHNICAL SKILLS */}
      <Skills />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 6. LICENSES & CERTIFICATIONS */}
      <Certifications />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 7. GITHUB INTERACTION */}
      <GitHub />

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-4">
        <hr className="border-white/5" />
      </div>

      {/* 8. CONTACT FORM */}
      <Contact />
      
      {/* Footer Branding */}
      <footer className="w-full py-8 text-center text-xs text-gray-500 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Kushagri Sharma. Designed & Built with Next.js, Tailwind, & Framer.</p>
      </footer>
    </div>
  );
}
