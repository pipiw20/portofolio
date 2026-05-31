"use client";

import React from "react";
// Impor komponen Image bawaan Next.js untuk optimasi performa gambar
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="space-y-10 animate-fadeIn">
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Kontainer Lingkaran Avatar */}
        <div className="w-28 h-28 rounded-full border-2 border-[#ffaedc] bg-white/5 relative shadow-[0_0_30px_rgba(255,174,220,0.15)] overflow-hidden group">
          <Image
            src="/foto-fira.JPG" // DISESUAIKAN: Menggunakan .JPG kapital sesuai struktur folder public Anda
            alt="Safira Muztasyifa Syah"
            fill 
            sizes="112px" 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
            priority 
          />
        </div>
        
        <h2 className="font-['Sora'] text-4xl font-bold tracking-tight">
          I&apos;m <span className="text-[#ffaedc]">Fira.</span>
        </h2>
        <p className="font-['Inter'] text-[#dabfcc] max-w-xl text-sm leading-relaxed">
          A CS student navigating the intersection of <span className="text-[#58d5ff]">elegant code</span> and <span className="text-[#ffaedc]">human-centric design</span>. Currently building digital experiences that feel like floating in high-tech clouds.
        </p>

        {/* Badge Karakter/Keahlian Tambahan */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-[10px] font-['Space_Mono'] tracking-widest">
          <span className="bg-[#141b2f] border border-white/10 px-3 py-1 rounded-full text-[#58d5ff]">Algorithm Enthusiast</span>
          <span className="bg-[#141b2f] border border-white/10 px-3 py-1 rounded-full text-[#dfb7ff]">UI Architect</span>
          <span className="bg-[#141b2f] border border-white/10 px-3 py-1 rounded-full text-[#dabfcc]">Late-night Coder</span>
        </div>
      </div>

      {/* Narrative Card */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-4">
        <h3 className="font-['Sora'] text-xl font-bold text-[#ffaedc]">My Story</h3>
        <p className="font-['Inter'] text-sm text-[#dce1fe]/80 leading-relaxed space-y-4">
          My journey began with a curiosity about how a few lines of logic could create infinite possibilities. From my first &quot;Hello World&quot; to architecting complex distributed systems, I&apos;ve always been driven by the thrill of solving puzzles.
          <br /><br />
          As a Computer Science student, I don&apos;t just see code as a tool—I see it as a medium for creativity. I spend my time exploring the boundaries between backend efficiency and frontend beauty, ensuring every pixel and every byte serves a purpose.
        </p>
      </div>

      {/* Education Timeline Card */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-6">
        <h3 className="font-['Sora'] text-xl font-bold text-[#ffaedc]">Education</h3>
        <div className="border-l border-white/10 ml-2 pl-4 space-y-6">
          
          {/* Kuliah */}
          <div className="relative">
            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#ffaedc] ring-4 ring-[#ffaedc]/20" />
            <h4 className="font-['Sora'] text-sm font-bold text-white">
              B.Sc. in Computer Science
            </h4>
            <p className="text-xs font-['Inter'] text-[#dabfcc]">Universitas Dipa Makassar</p>
            <p className="text-[10px] font-['Space_Mono'] text-[#58d5ff] mt-0.5">2024 — Present</p>
          </div>
          
          {/* Sekolah Menengah */}
          <div className="relative">
            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#ffaedc] ring-4 ring-[#ffaedc]/20" />
            <h4 className="font-['Sora'] text-sm font-bold text-white">
              SMAS PPM Al-Ikhlash Polewali Mandar
            </h4>
            <p className="text-xs font-['Inter'] text-[#dabfcc]">Science Major</p>
            <p className="text-[10px] font-['Space_Mono'] text-[#58d5ff] mt-0.5">2021 — 2024</p>
          </div>

        </div>
      </div>
    </section>
  );
}