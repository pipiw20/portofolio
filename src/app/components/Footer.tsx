"use client";

import React from "react";
// Menggunakan ikon yang di-import agar tidak memicu eror linter
import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onNavigate?: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-[#141b2f]/30 backdrop-blur-[10px] py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Hak Cipta */}
        <p className="font-['Space_Mono'] text-[11px] text-[#dabfcc]/50 tracking-wider">
          &copy; {new Date().getFullYear()} CODE.PINK. ALL RIGHTS RESERVED.
        </p>

        {/* Tautan Sosial Media dengan Ikon Aktif */}
        <div className="flex gap-5 font-['Space_Mono'] text-xs tracking-wider">
          <a 
            href="https://github.com/pipiw20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors group"
          >
            <Github size={14} className="group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/pipiw20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors group"
          >
            <Linkedin size={14} className="group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="mailto:email-kamu@gmail.com" 
            className="flex items-center gap-1.5 text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors group"
          >
            <Mail size={14} className="group-hover:scale-110 transition-transform" />
            <span>Contact</span>
          </a>
        </div>

      </div>
    </footer>
  );
}