"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface HomeSectionProps {
  onNavigate: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section className="space-y-12 animate-fadeIn">
      {/* Badge Status */}
      <div className="inline-flex items-center gap-2 bg-[#141b2f] border border-[#a28a96]/30 px-4 py-1.5 rounded-full text-[11px] font-['Space_Mono'] tracking-widest text-[#dabfcc]">
        <span className="w-2 h-2 rounded-full bg-[#ffaedc] animate-pulse shadow-[0_0_10px_#ffaedc]" />
        AVAILABLE FOR INTERNSHIPS
      </div>

      {/* Hero Headline */}
      <div className="space-y-4">
        <h1 className="font-['Sora'] text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Hi, I&apos;m <span className="bg-gradient-to-r from-[#ffaedc] to-[#dfb7ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,174,220,0.2)]">Fira.</span>
        </h1>
        <p className="font-['Inter'] text-lg md:text-xl text-[#dabfcc] max-w-2xl leading-relaxed">
          Computer Science Student & <span className="text-[#58d5ff]">Aspiring Developer</span> crafting digital experiences at the intersection of logic and art.
        </p>
      </div>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        {/* Glass-Fill Button */}
        <button 
          onClick={() => onNavigate("work")}
          className="group relative flex items-center justify-center gap-2 bg-[#141b2f]/40 backdrop-blur-[20px] text-white font-['Sora'] font-semibold px-6 py-3 rounded-md border-2 border-transparent before:absolute before:inset-0 before:rounded-md before:p-[2px] before:bg-gradient-to-r before:from-[#ffaedc] before:to-[#dfb7ff] before:-z-10 before:content-[''] hover:shadow-[0_0_35px_rgba(255,174,220,0.25)] transition-all duration-300"
        >
          <span className="bg-gradient-to-r from-[#ffaedc] to-[#dfb7ff] bg-clip-text text-transparent font-bold">View Projects</span>
          <ArrowRight size={16} className="text-[#dfb7ff] group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button 
          onClick={() => onNavigate("about")}
          className="bg-[#141b2f] border border-white/10 hover:border-[#ffaedc]/50 font-['Sora'] text-[#dce1fe] px-6 py-3 rounded-md transition-all"
        >
          About Me
        </button>
      </div>

      {/* Quick Stats Banner */}
      <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6 font-['Space_Mono'] text-xs">
        <div>
          <span className="text-[#dabfcc] block uppercase tracking-widest mb-1">Studying At</span>
          <span className="text-white font-medium text-sm font-['Sora']">Informatics Institute</span>
        </div>
        <div>
          <span className="text-[#dabfcc] block uppercase tracking-widest mb-1">Focus Core</span>
          <span className="text-[#58d5ff] font-medium text-sm font-['Sora']">Fullstack & Cyber Sec</span>
        </div>
      </div>
    </section>
  );
}