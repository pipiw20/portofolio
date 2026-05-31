"use client";

import React, { useState, useEffect } from "react";
// Impor ikon pendukung dari lucide-react sesuai standar komponen
import { Code2, Laptop, Wrench, ArrowRight } from "lucide-react";

// Ganti nilai ini dengan nama pengguna (username) GitHub asli Anda
const GITHUB_USERNAME = "pipiw20"; 

interface LanguageData {
  name: string;
  progress: string;
}

export default function SkillsSection() {
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Daftar statis untuk Frameworks & Tools berdasarkan panduan desain visual Anda
  const webDevStacks = ["React", "Tailwind", "Next.js", "TypeScript"];
  const toolsStacks = [
    { name: "Git", desc: "Version Control" },
    { name: "Docker", desc: "Containerization" },
    { name: "AWS", desc: "Cloud Hosting" },
    { name: "Kubernetes", desc: "Orchestration" }
  ];

  useEffect(() => {
    async function fetchGitHubLanguages() {
      try {
        // 1. Ambil data seluruh repositori publik pengguna
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error("Gagal mengambil data repositori");
        const repos = await reposResponse.json();

        const langStats: { [key: string]: number } = {};
        let totalScore = 0;

        // 2. Iterasi untuk mengambil kalkulasi byte bahasa dari setiap repositori
        await Promise.all(
          repos.map(async (repo: any) => {
            if (repo.fork) return; // Abaikan repositori hasil fork milik orang lain
            try {
              const langResponse = await fetch(repo.languages_url);
              if (langResponse.ok) {
                const languagesData = await langResponse.json();
                for (const [lang, bytes] of Object.entries(languagesData)) {
                  langStats[lang] = (langStats[lang] || 0) + (bytes as number);
                  totalScore += bytes as number;
                }
              }
            } catch (err) {
              console.error("Gagal memuat bahasa untuk repositori:", repo.name);
            }
          })
        );

        // 3. Konversikan bit skor menjadi nilai persentase (%) dan urutkan dari yang terbesar
        const formattedLanguages = Object.entries(langStats)
          .map(([name, bytes]) => ({
            name,
            progress: `${Math.round((bytes / totalScore) * 100)}%`,
          }))
          .sort((a, b) => parseInt(b.progress) - parseInt(a.progress))
          .slice(0, 4); // Ambil top 4 bahasa utama saja agar tampilan tetap minimalis

        if (formattedLanguages.length > 0) {
          setLanguages(formattedLanguages);
        } else {
          // Cadangan jika data repositori kosong / API limit tercapai
          setLanguages([
            { name: "Python", progress: "95%" },
            { name: "Java", progress: "85%" },
            { name: "C++", progress: "80%" }
          ]);
        }
      } catch (error) {
        console.error("Error GitHub API:", error);
        // Fallback default data
        setLanguages([
          { name: "Python", progress: "95%" },
          { name: "Java", progress: "85%" },
          { name: "C++", progress: "80%" }
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubLanguages();
  }, []);

  return (
    <section className="space-y-8 animate-fadeIn text-[#dce1fe]">
      {/* Header Utama Seksi */}
      <div>
        <h2 className="font-['Sora'] text-4xl font-bold tracking-tight text-white">
          Technical <span className="text-[#58d5ff]">Arsenal</span>
        </h2>
        <p className="font-['Inter'] text-xs text-[#dabfcc] mt-2 max-w-xl">
          A focused collection of digital tools and languages I&apos;ve mastered to bridge the gap between complex algorithms and elegant user experiences.
        </p>
      </div>

      {/* 1. SEKSI: Programming Languages (DIAMBIL DARI GITHUB) */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
        <h3 className="text-xs font-['Space_Mono'] uppercase tracking-widest text-[#ffaedc] flex items-center gap-2">
          <Code2 size={14} /> Programming Languages
        </h3>
        
        <div className="space-y-5">
          {isLoading ? (
            // Indikator Loading Transparan yang Cantik
            <div className="space-y-3 py-2 animate-pulse">
              <div className="h-3 bg-white/10 rounded w-1/4"></div>
              <div className="h-1.5 bg-white/5 rounded w-full"></div>
            </div>
          ) : (
            languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-xs font-['Space_Mono']">
                  <span className="text-[#dce1fe]">{lang.name}</span>
                  <span className="text-[#58d5ff] font-bold">{lang.progress}</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-[#ffaedc] to-[#dfb7ff] h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(255,174,220,0.5)]" 
                    style={{ width: lang.progress }} 
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-2 border-t border-white/5">
          <p className="text-[11px] font-['Inter'] italic text-[#dabfcc]/70">
            &quot;Fluent in building scalable backends and optimizing low-level memory management.&quot;
          </p>
        </div>
      </div>

      {/* 2. SEKSI: Web Dev */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-['Space_Mono'] uppercase tracking-widest text-[#58d5ff] flex items-center gap-2">
          <Laptop size={14} /> Web Dev
        </h3>
        <div className="flex flex-wrap gap-2 pt-1">
          {webDevStacks.map((tech) => (
            <span 
              key={tech} 
              className="bg-[#58d5ff]/5 border border-[#58d5ff]/30 text-[#58d5ff] px-4 py-1.5 rounded-full text-xs font-['Space_Mono'] tracking-wider flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#58d5ff]" />
              {tech}
            </span>
          ))}
        </div>
        {/* Dekorasi Ilustrasi Sirkuit Mikro */}
        <div className="w-full h-28 bg-[#0c1227] rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden mt-2 opacity-80">
          <span className="text-[10px] font-['Space_Mono'] text-white/20 tracking-widest uppercase">[ Microchip Stacks Visual ]</span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141b2f]/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. SEKSI: Tools Grid */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-4">
        <h3 className="text-xs font-['Space_Mono'] uppercase tracking-widest text-[#dfb7ff] flex items-center gap-2">
          <Wrench size={14} /> Tools
        </h3>
        <div className="grid grid-cols-2 gap-3 font-['Space_Mono']">
          {toolsStacks.map((tool) => (
            <div key={tool.name} className="bg-[#23293e]/40 border border-white/5 p-3.5 rounded-lg text-center hover:border-[#dfb7ff]/30 transition-colors">
              <span className="block text-xs font-bold text-white tracking-wide">{tool.name}</span>
              <span className="text-[9px] text-[#dabfcc] uppercase tracking-widest mt-0.5 block">{tool.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SEKSI: Systems Architecture Showcase Card */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="h-28 bg-gradient-to-r from-[#6e06b3]/40 to-[#141b2f] flex items-center justify-center border-b border-white/5 relative">
          <span className="text-[10px] font-['Space_Mono'] text-[#dfb7ff]/40 tracking-widest">[ Wave Network Geometry ]</span>
        </div>
        <div className="p-5 space-y-1">
          <h4 className="font-['Sora'] text-lg font-bold text-[#dfb7ff]">Systems Architecture</h4>
          <p className="font-['Inter'] text-xs text-[#dabfcc] leading-relaxed">
            Designing high-availability systems with a focus on low-latency data processing and microservices.
          </p>
        </div>
      </div>

      {/* 5. SEKSI: Call to Action Bottom Banner */}
      <div className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 text-center space-y-4">
        <div className="space-y-1">
          <h4 className="font-['Sora'] text-xl font-bold text-white">See these skills in action</h4>
          <p className="font-['Inter'] text-xs text-[#dabfcc]">
            Check out my recent projects involving distributed systems and AI.
          </p>
        </div>
        <button 
          className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffaedc] to-[#dfb7ff] text-[#600049] font-['Sora'] font-bold text-xs px-6 py-3 rounded shadow-[0_0_20px_rgba(255,174,220,0.3)] hover:opacity-90 transition-opacity"
          onClick={() => {
            // Logika kustom pemicu navigasi halaman (jika terhubung ke router state induk)
            const btn = document.querySelector('button[id="work"]') as HTMLButtonElement;
            if(btn) btn.click();
          }}
        >
          <span>Explore Work</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}