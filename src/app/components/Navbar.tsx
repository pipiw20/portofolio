"use client";

import React, { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10 backdrop-blur-[20px] sticky top-0 z-50 bg-[#0c1227]/70">
      
      {/* Brand Logo */}
      <button 
        onClick={() => onNavigate("home")}
        className="flex items-center gap-2 text-2xl font-['Sora'] font-bold tracking-wider text-[#ffaedc] drop-shadow-[0_0_15px_rgba(255,174,220,0.4)] text-left focus:outline-none"
      >
        <Terminal className="w-6 h-6 text-[#58d5ff]" />
        <span>Fira's Portofolio</span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-['Inter'] text-sm">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative py-1.5 transition-colors duration-300 ${
                isActive 
                  ? "text-[#ffaedc] font-semibold" 
                  : "text-[#dce1fe]/70 hover:text-[#ffaedc]"
              }`}
            >
              {item.label}
              {/* Active Indicator Line */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ffaedc] to-[#dfb7ff] rounded-full drop-shadow-[0_0_8px_rgba(255,174,220,0.6)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-[#dce1fe] hover:text-[#ffaedc] transition-colors focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 p-6 bg-[#0c1227]/95 border-b border-white/10 backdrop-blur-xl md:hidden animate-fadeIn space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-40">
          <div className="flex flex-col gap-4 font-['Inter']">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false); // Tutup drawer setelah diklik
                  }}
                  className={`text-left py-2 px-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#ffaedc]/10 text-[#ffaedc] font-semibold border-l-2 border-[#ffaedc]"
                      : "text-[#dce1fe]/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}