"use client";

import React from "react";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function WorkSection() {
  return (
    <section className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="font-['Sora'] text-4xl font-bold tracking-tight text-white">
          Selected <span className="text-[#dfb7ff] italic">Artifacts</span>
        </h2>
      </div>

      {/* Project Card */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl overflow-hidden hover:border-[#ffaedc]/40 transition-all duration-300 group">
        {/* Banner Mockup */}
        <div className="h-44 bg-gradient-to-br from-[#600049] to-[#141b2f] flex items-center justify-center border-b border-white/10 relative overflow-hidden">
          <FolderGit2 size={40} className="text-[#ffaedc]/20 group-hover:scale-110 group-hover:text-[#ffaedc]/40 transition-all duration-500" />
          <div className="absolute top-4 right-4 text-[10px] font-['Space_Mono'] text-[#58d5ff] bg-[#58d5ff]/10 px-2 py-0.5 rounded border border-[#58d5ff]/20">
            PRODUCTION_READY
          </div>
        </div>

        {/* Content Info */}
        <div className="p-6 space-y-3">
          <h3 className="font-['Sora'] text-2xl font-bold text-[#ffaedc]">
            NeuralSynth Engine
          </h3>
          <p className="font-['Inter'] text-sm text-[#dabfcc] leading-relaxed">
            Sistem analisis data berbasis kecerdasan buatan untuk merangkum aktivitas repositori kode, menyajikannya dalam grafik visual interaktif beraliran neon cyber.
          </p>
          
          <div className="flex gap-4 font-['Space_Mono'] text-xs pt-3">
  <a 
    href="https://github.com/pipiw20" // 👈 GANTI DENGAN LINK GITHUB ANDA
    target="_blank" 
    rel="noopener noreferrer" // Praktik terbaik keamanan untuk tautan eksternal
    className="flex items-center gap-1.5 border border-[#ffaedc]/30 text-[#ffaedc] px-3.5 py-1.5 rounded bg-[#ffaedc]/5 hover:bg-[#ffaedc]/10 transition-colors"
  >
    <span>Source Code</span>
    <ExternalLink size={12} />
  </a>
</div>
        </div>
      </div>
    </section>
  );
}