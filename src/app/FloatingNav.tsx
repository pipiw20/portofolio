"use client";

import React from "react";
import { Home, User, Cpu, Briefcase, Mail } from "lucide-react";

interface FloatingNavProps {
  activeSection: 'home' | 'about' | 'skills' | 'work' | 'contact';
  setActiveSection: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function FloatingNav({ activeSection, setActiveSection }: FloatingNavProps) {
  const menuItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT", icon: User },
    { id: "skills", label: "SKILLS", icon: Cpu },
    { id: "work", label: "WORK", icon: Briefcase },
    { id: "contact", label: "CONTACT", icon: Mail },
  ] as const;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#141b2f]/60 backdrop-blur-[30px] border border-white/15 px-4 py-2.5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-2 transition-all duration-300">
      {menuItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center gap-1 px-3.5 py-1.5 rounded-md transition-all duration-200 ${
              isActive 
                ? "bg-white/10 text-[#ffaedc] font-bold scale-105 shadow-[0_0_20px_rgba(255,174,220,0.15)]" 
                : "text-[#dce1fe]/60 hover:text-[#dce1fe] hover:bg-white/5"
            }`}
          >
            <Icon size={16} className={isActive ? "text-[#ffaedc]" : "text-[#dce1fe]/60"} />
            <span className="text-[9px] font-['Space_Mono'] tracking-widest leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}