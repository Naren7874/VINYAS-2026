"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern relative flex flex-col justify-center items-center p-6 selection:bg-brand-rust/10 selection:text-brand-rust">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-brand-burgundy/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 filter blur-[100px] pointer-events-none" />

      {/* Main Core Simple Text Page */}
      <main className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 z-10 py-12">
        <span className="px-3.5 py-1.5 rounded-full bg-brand-burgundy/10 border border-brand-burgundy/20 text-xs text-brand-burgundy font-bold uppercase tracking-widest">
          IIID Charotar Showcase
        </span>

        <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tight leading-none text-brand-burgundy text-glow">
          VINYAS 2026
        </h1>

        <p className="font-display text-lg sm:text-2xl font-bold text-brand-rust uppercase tracking-wide">
          Rooted in Heritage • Growing in Innovation • Designing Tomorrow
        </p>

        <p className="max-w-2xl text-base sm:text-lg text-brand-taupe leading-relaxed">
          The ultimate convergence of building materials, interior products, and spatial design. 
          Organized by the Indian Institute of Interior Designers (IIID) Charotar Centre. 
          December 18th to 20th, 2026.
        </p>
      </main>

      {/* Footer */}
      {/* <footer className="w-full py-8 text-center border-t border-brand-taupe/10 bg-white/40 backdrop-blur-sm z-10 text-xs text-brand-taupe">
        <span className="font-bold text-brand-burgundy">VINYAS 2026</span> &bull; IIID Charotar Centre. All rights reserved.
      </footer> */}
    </div>
  );
}

/* 
======================================================================
COMMENTED PARTS FOR FUTURE REFERENCE:
======================================================================

const [stallType, setStallType] = useState<"corner" | "other">("corner");
const [quantity, setQuantity] = useState<number>(1);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "Stall Booking",
  message: "",
});
const [formSubmitted, setFormSubmitted] = useState(false);

const stallPrice = stallType === "corner" ? 225000 : 195000;
const baseTotal = stallPrice * quantity;
const gst = baseTotal * 0.18;
const grandTotal = baseTotal + gst;

<header className="w-full py-6 px-6 md:px-12 border-b border-brand-taupe/10 bg-white/40 backdrop-blur-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-brand-burgundy flex items-center justify-center font-display font-black text-white text-lg tracking-wider">
        V
      </div>
      <div className="flex flex-col">
        <span className="font-display font-black text-lg tracking-widest text-brand-burgundy">VINYAS 2026</span>
        <span className="text-[9px] uppercase tracking-wider text-brand-taupe font-bold">IIID Charotar Expo</span>
      </div>
    </div>
    <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-brand-taupe">
      <a href="#about" className="hover:text-brand-burgundy transition-colors">About</a>
      <a href="#theme" className="hover:text-brand-burgundy transition-colors">Theme</a>
      <a href="#why" className="hover:text-brand-burgundy transition-colors">Why Exhibit</a>
      <a href="#pricing" className="hover:text-brand-burgundy transition-colors">Pricing</a>
      <a href="#guidelines" className="hover:text-brand-burgundy transition-colors">Guidelines</a>
    </nav>
    <a href="#contact" className="px-5 py-2.5 rounded-full bg-brand-rust hover:bg-brand-rust/90 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm">Inquire Now</a>
  </div>
</header>

<section id="about" className="py-20 px-6 border-t border-brand-taupe/10 bg-white/30 backdrop-blur-sm relative z-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="flex flex-col gap-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-brand-rust">Showcase 2026</h2>
      <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-burgundy leading-tight">Shaping the Future of Design together</h3>
      <p className="text-sm sm:text-base text-brand-taupe leading-relaxed">
        Vinyas 2026 returns as the landmark showcase in Gujarat. Bringing together over 25,000 visitors, including architects, builders, spatial designers, and product specifiers.
      </p>
    </div>
    <div className="glass-panel p-6 rounded-2xl border border-brand-taupe/20 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[300px]">
      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-burgundy mb-4">Organizing Committee</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-brand-taupe">
        <div><span className="block font-bold text-brand-burgundy text-sm">Ar. Maulik Pavagadhi</span><span className="text-[10px]">Chairman, IIID Charotar</span></div>
        <div><span className="block font-bold text-brand-burgundy text-sm">Mr. Vipul Trivedi</span><span className="text-[10px]">Incoming Chairman &amp; Co-Convenor</span></div>
        <div><span className="block font-bold text-brand-burgundy text-sm">Ar. Kamal Patel</span><span className="text-[10px]">Past Chairman &amp; Convenor</span></div>
        <div><span className="block font-bold text-brand-burgundy text-sm">The Managing Committee</span><span className="text-[10px]">Vinyas 2026 Team</span></div>
      </div>
    </div>
  </div>
</section>

<section id="pricing" className="py-20 px-6 border-t border-brand-taupe/10 relative z-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="flex flex-col gap-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-brand-rust">Investment Packages</h2>
      <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-burgundy leading-tight">Exhibitor Rates</h3>
    </div>
    <div className="glass-panel p-8 rounded-2xl border border-brand-taupe/20 shadow-sm flex flex-col gap-6">
      <h4 className="font-display font-bold text-lg text-brand-burgundy">Stall Budget Calculator</h4>
      <div className="grid grid-cols-2 gap-4">
        <button type="button" onClick={() => setStallType("corner")} className={`py-3 px-4 rounded-xl border text-xs font-bold ${stallType === "corner" ? "bg-brand-burgundy text-white" : "bg-white"}`}>Corner &amp; Spine</button>
        <button type="button" onClick={() => setStallType("other")} className={`py-3 px-4 rounded-xl border text-xs font-bold ${stallType === "other" ? "bg-brand-burgundy text-white" : "bg-white"}`}>Other Stalls</button>
      </div>
      <div className="bg-brand-taupe/5 p-4 rounded-xl flex flex-col gap-2 text-xs">
        <div className="flex justify-between"><span>Base Investment</span><span>₹{baseTotal.toLocaleString()}</span></div>
        <div className="flex justify-between"><span>GST (18%)</span><span>₹{gst.toLocaleString()}</span></div>
        <div className="flex justify-between font-bold"><span>Total Budget</span><span>₹{grandTotal.toLocaleString()}</span></div>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="py-20 px-6 border-t border-brand-taupe/10 relative z-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="flex flex-col gap-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-brand-rust">Contact</h2>
      <a href="tel:+919825032891" className="text-sm font-bold">+91 98250 32891</a>
      <a href="mailto:vinyas2026@gmail.com" className="text-sm font-bold">vinyas2026@gmail.com</a>
    </div>
  </div>
</section>
*/
