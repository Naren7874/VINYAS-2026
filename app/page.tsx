"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 bg-grid-pattern relative flex flex-col justify-between overflow-hidden selection:bg-primary/10 selection:text-primary">
      {/* Decorative Light Blur Orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-primary/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[500px] h-[500px] rounded-full bg-accent/5 filter blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="w-full py-8 px-6 md:px-12 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-display font-black text-2xl tracking-wider text-zinc-900">
            VINYAS
          </span>
          <a
            href="mailto:info@vinyas2026.com"
            className="text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:text-primary transition-colors focus:outline-none"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-[10px] sm:text-xs text-zinc-500 font-semibold tracking-widest uppercase">
            Architectural Design &amp; Layout Studio
          </div>

          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter leading-none text-glow text-zinc-900">
            VINYAS 2026
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-500 leading-relaxed font-normal">
            A premium showcase of spatial composition, sustainable architecture, and structural 
            excellence. Shaping tomorrow's physical layouts with contemporary design integrity.
          </p>

          {/* Philosophy Card */}
          <div className="w-full max-w-lg mt-6 border border-zinc-200/80 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-4 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
              Core Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Derived from the classical concept of layout, composition, and arrangement, 
              <strong> VINYAS 2026</strong> stands as a landmark of structural balance. 
              We prioritize spatial flow, sustainable materials, and contemporary geometric harmony 
              to craft timeless architectural systems.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 border-t border-zinc-200/50 bg-white/40 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-900">VINYAS 2026</span>
            <span>&bull;</span>
            <span>Spatial &amp; Structural Design</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} VINYAS 2026. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
