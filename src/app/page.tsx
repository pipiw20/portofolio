'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingNav from './FloatingNav';
import HomeSection from '../app/sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import WorkSection from './sections/WorkSection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  // State untuk melacak halaman / seksi aktif yang sedang dilihat pengunjung
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'skills' | 'work' | 'contact'>('home');

  // Fungsi router internal untuk merender konten seksi secara dinamis
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onNavigate={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'work':
        return <WorkSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1227] text-[#dce1fe] font-['Inter'] relative overflow-x-hidden pb-32 selection:bg-[#ffaedc] selection:text-[#600049]">
      
      {/* ---------------- DECORATIVE GLOW ORBS ---------------- */}
      {/* Pendaran Pink (Primary Layer) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ff71ce] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      {/* Pendaran Cyan (Tertiary Layer) */}
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#01cdfe] opacity-5 rounded-full blur-[150px] pointer-events-none" />
      {/* Pendaran Ungu (Secondary Layer) */}
      <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-[#dfb7ff] opacity-10 rounded-full blur-[130px] pointer-events-none" />

      {/* ---------------- APPLICATION LAYOUT ---------------- */}
      {/* Top Navigation Terminal */}
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Dynamic Main Content Slot */}
      <main className="w-full max-w-md mx-auto px-6 pt-12 md:max-w-2xl lg:max-w-4xl min-h-[60vh] transition-all duration-300">
        {renderSection()}
      </main>

      {/* Bottom Information Grid */}
      <Footer onNavigate={setActiveSection} />

      {/* Interactive Floating Control Dock */}
      <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />
      
    </div>
  );
}