"use client";

import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onNavigate?: (section: 'home' | 'about' | 'skills' | 'work' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#141b2f]/40 backdrop-blur-[20px] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <h3 className="text-2xl font-['Sora'] font-bold tracking-wider text-[#ffaedc] drop-shadow-[0_0_15px_rgba(255,174,220,0.3)]">
              Safira Muztasyifa Syah
            </h3>
            <p className="text-sm font-['Inter'] text-[#dabfcc] max-w-xs leading-relaxed">
              Fira&apos;s Futuristic Informatics Portfolio. Navigating the intersection of elegant logic and digital art.
            </p>
          </div>

          {/* Column 2: Quick Links (Diselaraskan dengan sistem navigasi page.tsx) */}
          <div>
            <h4 className="text-sm font-['Space_Mono'] uppercase tracking-widest text-[#dfb7ff] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-['Inter'] text-sm text-[#dce1fe]/70">
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-[#ffaedc] hover:underline decoration-[#ffaedc]/40 underline-offset-4 transition-all text-left"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('work')}
                  className="hover:text-[#ffaedc] hover:underline decoration-[#ffaedc]/40 underline-offset-4 transition-all text-left"
                >
                  Projects & Artifacts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('skills')}
                  className="hover:text-[#ffaedc] hover:underline decoration-[#ffaedc]/40 underline-offset-4 transition-all text-left"
                >
                  Skills Arsenal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-[#ffaedc] hover:underline decoration-[#ffaedc]/40 underline-offset-4 transition-all text-left"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex gap-6 font-['Space_Mono'] text-xs tracking-wider pt-4 md:pt-0">
  <a 
    href="https://github.com/pipiw20" // 👈 GANTI DENGAN LINK GITHUB ANDA
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors"
  >
    GitHub
  </a>
  <a 
    href="https://linkedin.com/in/username-kamu" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors"
  >
    LinkedIn
  </a>
  <a 
    href="https://twitter.com/username-kamu" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#dce1fe]/60 hover:text-[#ffaedc] transition-colors"
  >
    Twitter
  </a>
</div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-['Space_Mono'] text-[#dce1fe]/40">
          <p>&copy; {year} Safira Muztasyifa Syah. All rights reserved.</p>
          <div className="flex gap-2 items-center text-[10px] text-white/20">
            <span>SYS_STATUS: ONLINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#58d5ff] animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}