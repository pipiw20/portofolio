"use client";

import React from "react";

// Kita definisikan ulang tipe datanya agar page.tsx tidak eror
interface FooterProps {
  onNavigate?: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-[#141b2f]/30 backdrop-blur-[10px] py-6 px-4 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Hak Cipta */}
        <p className="font-['Space_Mono'] text-[11px] text-[#dabfcc]/50 tracking-wider">
          &copy; {new Date().getFullYear()} CODE.PINK. ALL RIGHTS RESERVED.
        </p>

        {/* Tautan Menu Internal & Eksternal */}
        <div className="flex gap-6 font-['Space_Mono'] text-xs tracking-wider">
          {/* Tombol Navigasi Internal yang Menggunakan Properti onNavigate (Linter Pasti Lolos!) */}
          <button 
            onClick={() => onNavigate?.('about')}
            className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors cursor-pointer"
          >
            About
          </button>
          
          <button 
            onClick={() => onNavigate?.('skills')}
            className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors cursor-pointer"
          >
            Skills
          </button>

          {/* Tautan Luar menuju GitHub */}
          <a 
            href="https://github.com/pipiw20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}