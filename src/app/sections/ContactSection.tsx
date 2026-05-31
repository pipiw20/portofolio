"use client";

import React from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="font-['Sora'] text-4xl font-bold leading-tight">
          Let&apos;s build something <span className="text-[#ffaedc] italic">extraordinary</span>.
        </h2>
      </div>

      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="bg-[#141b2f]/50 backdrop-blur-[20px] border border-white/15 rounded-xl p-6 space-y-6"
      >
        {/* Minimalist Input Field */}
        <div className="space-y-1">
          <label className="block text-[10px] font-['Space_Mono'] text-[#dabfcc] uppercase tracking-wider">Your Name</label>
          <input 
            type="text" 
            placeholder="Identity Name"
            className="w-full bg-transparent border-b-2 border-white/10 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffaedc] transition-colors placeholder:text-white/20" 
          />
        </div>

        {/* Minimalist Textarea Field */}
        <div className="space-y-1">
          <label className="block text-[10px] font-['Space_Mono'] text-[#dabfcc] uppercase tracking-wider">Transmission Message</label>
          <textarea 
            rows={4} 
            placeholder="Type your transmission project details here..." 
            className="w-full bg-transparent border-b-2 border-white/10 py-2.5 text-sm text-white focus:outline-none focus:border-[#ffaedc] transition-colors resize-none placeholder:text-white/20" 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full flex items-center justify-center gap-2 bg-[#ffaedc] text-[#600049] font-['Sora'] font-bold py-3.5 rounded shadow-[0_0_25px_rgba(255,174,220,0.2)] hover:opacity-90 transition-all duration-300"
        >
          <span>Send Transmission</span>
          <Send size={14} />
        </button>
      </form>
    </section>
  );
}