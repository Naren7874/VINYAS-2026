"use client";

import React, { useState, useEffect, useRef } from "react";

// Inline Custom SVGs for Premium Icons
const Icons = {
  Calendar: () => (
    <svg className="w-5 h-5 text-brand-rust" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-5 h-5 text-brand-rust" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Building: () => (
    <svg className="w-6 h-6 text-brand-burgundy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="16" />
      <line x1="15" y1="22" x2="15" y2="16" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M8 6h2v2H8V6zm0 4h2v2H8v-2zm8-4h2v2h-2V6zm0 4h2v2h-2v-2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6 text-brand-burgundy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Dome: () => (
    <svg className="w-6 h-6 text-brand-burgundy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M2 22a10 10 0 0 1 20 0H2z" />
      <path d="M12 2v20" />
      <path d="M6 8a10 10 0 0 1 12 0" />
    </svg>
  ),
  Award: () => (
    <svg className="w-6 h-6 text-brand-burgundy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Download: () => (
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4 text-brand-rust shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Info: () => (
    <svg className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  ChevronDown: ({ className }: { className?: string }) => (
    <svg className={`w-4 h-4 transition-transform duration-300 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="w-5 h-5 text-brand-taupe" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

function FlipDigit({ digit }: { digit: string }) {
  const [current, setCurrent] = useState(digit);
  const [next, setNext] = useState(digit);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (digit !== current) {
      setNext(digit);
      setAnimating(true);
      const timer = setTimeout(() => {
        setCurrent(digit);
        setAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [digit, current]);

  return (
    <div className="relative w-6 h-9 min-[360px]:w-7 min-[360px]:h-10 min-[400px]:w-8 min-[400px]:h-12 sm:w-11 sm:h-16 md:w-14 md:h-20 font-display font-black text-base min-[360px]:text-lg min-[400px]:text-xl sm:text-3xl md:text-5xl text-white rounded-md min-[400px]:rounded-lg sm:rounded-xl shadow-md perspective overflow-visible">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 bg-gradient-to-b from-[#3E3530] to-[#2D2622] rounded-t-md min-[400px]:rounded-t-lg sm:rounded-t-xl overflow-hidden border-b border-black/20 flex items-end justify-center select-none">
          <span className="translate-y-1/2">{next}</span>
        </div>
        <div className="h-1/2 bg-gradient-to-b from-[#2D2622] to-[#1F1916] rounded-b-md min-[400px]:rounded-b-lg sm:rounded-b-xl overflow-hidden flex items-start justify-center select-none">
          <span className="-translate-y-1/2">{current}</span>
        </div>
      </div>

      {animating && (
        <div className="absolute inset-0 flex flex-col pointer-events-none z-20">
          <div className="h-1/2 bg-gradient-to-b from-[#3E3530] to-[#2D2622] rounded-t-md min-[400px]:rounded-t-lg sm:rounded-t-xl overflow-hidden border-b border-black/20 flex items-end justify-center select-none origin-bottom backface-hidden animate-flip-top">
            <span className="translate-y-1/2">{current}</span>
          </div>
          <div className="h-1/2" />
        </div>
      )}

      {animating && (
        <div className="absolute inset-0 flex flex-col pointer-events-none z-10">
          <div className="h-1/2" />
          <div className="h-1/2 bg-gradient-to-b from-[#2D2622] to-[#1F1916] rounded-b-md min-[400px]:rounded-b-lg sm:rounded-b-xl overflow-hidden flex items-start justify-center select-none origin-top backface-hidden animate-flip-bottom">
            <span className="-translate-y-1/2">{next}</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 rounded-md min-[400px]:rounded-lg sm:rounded-xl border border-white/5 pointer-events-none z-30" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-rust/20 shadow-sm z-30" />
    </div>
  );
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Calculator State
  const [stallType, setStallType] = useState<"corner" | "regular">("regular");
  const [quantity, setQuantity] = useState<number>(1);

  // Theme slides active tab
  const [activeSlide, setActiveSlide] = useState<"theme" | "why" | "how" | "flyer">("theme");

  // Guidelines accordion state
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Stall Booking",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetDate = new Date("2026-12-18T11:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const daysVal = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursVal = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesVal = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsVal = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(daysVal).padStart(2, "0"),
        hours: String(hoursVal).padStart(2, "0"),
        minutes: String(minutesVal).padStart(2, "0"),
        seconds: String(secondsVal).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Pricing calculations
  const stallPrice = stallType === "corner" ? 225000 : 195000;
  const baseTotal = stallPrice * quantity;
  const cgst = baseTotal * 0.09;
  const sgst = baseTotal * 0.09;
  const grandTotal = baseTotal + cgst + sgst;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleInquiryFromCalculator = () => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: "Stall Booking",
      message: `Hi, I am interested in booking ${quantity} x ${stallType === "corner" ? "Premium Corner Stall (₹2,25,000)" : "Standard Stall (₹1,95,000)"
        }. Please share stall availability, layout options, and next booking steps.`,
    }));

    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSponsorshipInquiry = (sponsorTier: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: "Sponsorship Opportunities",
      message: `Hi, I am interested in exploring the ${sponsorTier} Sponsorship package for VINYAS 2026. Please share the strategic benefits folder and commercial terms.`,
    }));

    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const renderDigitCards = (valueString: string) => {
    const digits = valueString.split("");
    return (
      <div className="flex gap-0.5 sm:gap-1">
        {digits.map((digit, idx) => (
          <FlipDigit key={idx} digit={digit} />
        ))}
      </div>
    );
  };

  const accordionData = [
    {
      title: "Stall Construction & Handover Timelines",
      content:
        "Stalls will be handed over to exhibitors for construction and customization starting from December 16, 2026 at 09:00 AM. All stall construction, interior setup, and exhibit display arrangements must be fully completed by December 17, 2026 at 08:00 PM for official inspections.",
    },
    {
      title: "Design Guidelines & Height Restrictions",
      content:
        "The standard structural heights limit for standard/regular stalls is 3.0 meters. Custom pavilions in the AC Dome can extend up to a maximum height of 4.5 meters, subject to structural drawings approval by the IIID Charotar organizing architect team prior to November 30, 2026.",
    },
    {
      title: "Electrical Load & Utility Requisitions",
      content:
        "Each 9 sq. m. stall is provisioned with 1 kW single-phase power supply. Exhibitors requiring heavy-duty power (three-phase), high electric loads, water supply connections, or compressed air lines must submit their custom utility requirement sheets by November 15, 2026.",
    },
    {
      title: "Dismantling & Waste Management Policies",
      content:
        "Exhibition officially closes on December 20, 2026 at 08:00 PM. Dismantling of stalls and relocation of products can begin from 09:00 PM onwards and must be fully completed by December 21, 2026 at 12:00 PM. Exhibitors are responsible for removing all booth structural materials and custom debris.",
    },
  ];

  const sponsorPackages = [
    {
      name: "Title Sponsor",
      price: "₹ 7,50,000",
      benefits: [
        "Exclusive Title branding across the main AC Dome entrance",
        "Primary logo placement on all national print & digital collateral",
        "Complimentary 36 sq. m. premium island stall layout space",
        "Key speaker slot in the Design Seminar & B2B Meet",
        "Dedicated page in the official VINYAS 2026 directory",
      ],
      badge: "Exclusive",
      color: "border-brand-burgundy bg-brand-burgundy/5",
    },
    {
      name: "Co-Sponsor",
      price: "₹ 5,00,000",
      benefits: [
        "Prominent co-branding across the main exhibition arena",
        "High-visibility logo on all invitation cards & media boards",
        "Complimentary 18 sq. m. double-side open corner stall space",
        "Special acknowledgement during the inaugural & award ceremonies",
        "Full page advertisement space in the official directory",
      ],
      badge: "Highly Popular",
      color: "border-brand-rust bg-brand-rust/5",
    },
    {
      name: "Associate Sponsor",
      price: "₹ 3,00,000",
      benefits: [
        "Associate logo branding on the digital registration walls",
        "Logo listing on the official website & online marketing campaigns",
        "Complimentary 9 sq. m. standard stall space",
        "Distribution of corporate brochures in the VIP lounge",
        "Half-page branding space in the directory",
      ],
      badge: "Strategic",
      color: "border-brand-teal bg-brand-teal/5",
    },
  ];

  return (
    <div className="w-full flex-1 min-h-screen bg-[#FAF8F5] bg-grid-pattern relative flex flex-col justify-between selection:bg-brand-rust/10 selection:text-brand-rust text-[#2C2623]">

      {/* Decorative Premium Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-brand-burgundy/10 to-transparent filter blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tl from-brand-rust/8 to-transparent filter blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-brand-teal/6 to-transparent filter blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Floating Glassmorphic Header */}
      <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-brand-taupe/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img src="/Logo%20CRC.PNG" alt="IIID Charotar Logo" className="h-8 sm:h-11 w-auto object-contain" />
              <div className="h-7 w-[1px] bg-brand-taupe/20 hidden min-[400px]:block" />
              <img src="/Logo%20Vinyas%202026.jpeg" alt="Vinyas 2026 Logo" className="h-8 sm:h-11 w-auto object-contain rounded shadow-sm" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-sm sm:text-lg tracking-wider text-brand-burgundy text-left">VINYAS 2026</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-brand-taupe font-bold text-left">IIID Charotar Expo</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wider text-brand-taupe">
            <a href="#about" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">About</a>
            <a href="#highlights" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Highlights</a>
            <a href="#brochure" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Brochure</a>
            <a href="#pricing" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Calculator</a>
            <a href="#sponsorships" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Sponsorships</a>
            <a href="#guidelines" className="hover:text-brand-burgundy transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-burgundy after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Guidelines</a>
          </nav>

          <a
            href="#contact"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-burgundy/95 hover:shadow-lg text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Inquire Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full relative py-10 sm:py-20 flex flex-col items-center justify-center z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8 sm:gap-12 animate-fade-in">

          {/* Subheading Badge */}
          <span className="px-4 py-1.5 rounded-full bg-brand-burgundy/5 border border-brand-burgundy/15 text-[10px] sm:text-xs font-bold text-brand-burgundy uppercase tracking-[0.2em] shadow-sm animate-pulse">
            IIID Charotar Centre Presents
          </span>

          {/* Hero Titles */}
          <div className="flex flex-col gap-3 sm:gap-4 items-center">
            <h1 className="font-display font-black text-4xl min-[375px]:text-5xl min-[410px]:text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none text-brand-burgundy text-glow">
              VINYAS 2026
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-brand-taupe font-medium max-w-2xl mt-1">
              Building Material &amp; Interior Products Expo
            </p>

            {/* Elegant underline decoration */}
            <div className="w-24 sm:w-40 h-[3px] bg-gradient-to-r from-transparent via-brand-rust to-transparent opacity-85 mt-2" />

            {/* Date and Location indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-rust">
              <div className="flex items-center gap-1.5">
                <Icons.Calendar />
                <span>Dec 18 - 20, 2026</span>
              </div>
              <span className="text-brand-taupe/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Icons.MapPin />
                <span>AC Dome, Anand, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Glassmorphic Countdown Timer Console */}
          <div className="w-full max-w-3xl bg-white/60 backdrop-blur-xl p-4 min-[360px]:p-5 sm:p-7 md:p-9 rounded-3xl border border-brand-taupe/15 shadow-2xl relative animate-slide-up">
            <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-brand-burgundy/25" />
            <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-brand-burgundy/25" />
            <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-brand-burgundy/25" />
            <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-burgundy/25" />

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-burgundy/80 mb-5 sm:mb-7 block">
              Exhibition Countdown
            </span>

            <div className="flex items-center justify-center gap-1 min-[360px]:gap-1.5 min-[400px]:gap-2 sm:gap-4 md:gap-5">
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                {renderDigitCards(timeLeft.days)}
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-taupe uppercase mt-1">Days</span>
              </div>
              <span className="text-lg min-[360px]:text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl font-bold text-brand-burgundy/30 self-start mt-1 sm:mt-3 md:mt-4 animate-pulse">:</span>

              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                {renderDigitCards(timeLeft.hours)}
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-taupe uppercase mt-1">Hours</span>
              </div>
              <span className="text-lg min-[360px]:text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl font-bold text-brand-burgundy/30 self-start mt-1 sm:mt-3 md:mt-4 animate-pulse">:</span>

              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                {renderDigitCards(timeLeft.minutes)}
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-taupe uppercase mt-1">Minutes</span>
              </div>
              <span className="text-lg min-[360px]:text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl font-bold text-brand-burgundy/30 self-start mt-1 sm:mt-3 md:mt-4 animate-pulse">:</span>

              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                {renderDigitCards(timeLeft.seconds)}
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-taupe uppercase mt-1">Seconds</span>
              </div>
            </div>
          </div>

          {/* Hero Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="group flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-rust hover:bg-brand-rust/95 text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-brand-rust/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book a Stall <Icons.ArrowRight />
            </a>
            <a
              href="#brochure"
              className="flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-taupe/30 bg-white/40 hover:bg-white/90 text-brand-burgundy font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              Explore Brochure
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 sm:py-24 border-y border-brand-taupe/10 bg-white/30 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
                EXHIBITION PROFILE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight leading-tight">
                An Absolute Catalyst for the Building &amp; Design Ecosystem
              </h2>
              <div className="w-16 h-[2.5px] bg-brand-burgundy" />

              <p className="text-sm sm:text-base text-brand-taupe leading-relaxed font-medium">
                Organized by the esteemed <span className="font-bold text-brand-burgundy">IIID Charotar Centre</span>,
                <strong> VINYAS 2026</strong> stands as the ultimate convergence point for the building material and interior design industries.
                Spanning three action-packed days, this premium expo is designed to bridge the gap between innovation-driven manufacturers
                and design decision-makers.
              </p>

              <p className="text-sm sm:text-base text-brand-taupe leading-relaxed font-medium">
                Whether you are looking to launch a brand new product catalog, connect with top-tier Gujarat architects,
                or display luxury interior collections, VINYAS 2026 offers unmatched commercial avenues, high-quality B2B networking
                arrangements, and massive public exposure.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-brand-taupe/10">
                  <div className="p-2 bg-brand-burgundy/5 rounded-lg">
                    <Icons.Award />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-burgundy">IIID Leadership</h4>
                    <p className="text-xs text-brand-taupe mt-0.5 font-medium">Backed by the Indian Institute of Interior Designers network.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl border border-brand-taupe/10">
                  <div className="p-2 bg-brand-rust/5 rounded-lg">
                    <Icons.Building />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-rust">State-of-the-Art Setup</h4>
                    <p className="text-xs text-brand-taupe mt-0.5 font-medium">Custom layout structures in a giant climatized AC Dome.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Visual / Image Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-brand-taupe/15 max-w-md w-full overflow-hidden group">
                <img
                  src="/drive-download-20260611T190333Z-3-001/About.png"
                  alt="About VINYAS 2026 Exhibition"
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/30 to-transparent pointer-events-none rounded-xl" />
                <span className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-brand-burgundy/85 px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                  Official Poster
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Grid Section */}
      <section id="highlights" className="w-full py-16 sm:py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              METRICS &amp; REACH
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Scale of VINYAS 2026
            </h2>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">

            {/* Highlight Card 1 */}
            <div className="flex flex-col items-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-brand-taupe/10 shadow-sm transition-all duration-300 hover:border-brand-burgundy/30 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-burgundy/5 flex items-center justify-center mb-6">
                <Icons.Users />
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-burgundy leading-none mb-2">25,000+</h3>
              <h4 className="font-bold text-sm text-brand-rust uppercase tracking-wider mb-3">Trade Visitors</h4>
              <p className="text-xs text-brand-taupe leading-relaxed font-medium">
                Connect with prominent architects, interior designers, structural engineers, real-estate builders, and premium direct consumers.
              </p>
            </div>

            {/* Highlight Card 2 */}
            <div className="flex flex-col items-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-brand-taupe/10 shadow-sm transition-all duration-300 hover:border-brand-rust/30 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-rust/5 flex items-center justify-center mb-6">
                <Icons.Building />
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-burgundy leading-none mb-2">150+</h3>
              <h4 className="font-bold text-sm text-brand-rust uppercase tracking-wider mb-3">Stalls / Brands</h4>
              <p className="text-xs text-brand-taupe leading-relaxed font-medium">
                Display products side-by-side with leading regional and national brands, presenting interior hardware, fittings, surfaces, and technologies.
              </p>
            </div>

            {/* Highlight Card 3 */}
            <div className="flex flex-col items-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-brand-taupe/10 shadow-sm transition-all duration-300 hover:border-brand-teal/30 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-brand-teal/5 flex items-center justify-center mb-6">
                <Icons.Dome />
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-burgundy leading-none mb-2">AC Dome</h3>
              <h4 className="font-bold text-sm text-brand-rust uppercase tracking-wider mb-3">Anand, Gujarat</h4>
              <p className="text-xs text-brand-taupe leading-relaxed font-medium">
                Experience superior comfort at Anand's prime commercial pavilion space featuring full climate control, luxury hospitality, and security.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Brochure Slides Section */}
      <section id="brochure" className="w-full py-16 sm:py-24 bg-white/40 border-y border-brand-taupe/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-4 mb-10 sm:mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              VISUAL GUIDE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Official Exhibition Materials
            </h2>
            <p className="text-xs sm:text-sm text-brand-taupe max-w-xl font-medium">
              Explore thematic concepts, participant values, and structural guidelines directly from the presentation folders.
            </p>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="flex flex-col items-center gap-8">
            {/* Tab Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/80 rounded-2xl border border-brand-taupe/12 shadow-sm max-w-3xl w-full">
              <button
                onClick={() => setActiveSlide("theme")}
                className={`flex-1 min-w-[140px] text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeSlide === "theme"
                    ? "bg-brand-burgundy text-white shadow-md"
                    : "text-brand-taupe hover:text-brand-burgundy hover:bg-brand-burgundy/5"
                  }`}
              >
                Theme Concept
              </button>
              <button
                onClick={() => setActiveSlide("why")}
                className={`flex-1 min-w-[140px] text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeSlide === "why"
                    ? "bg-brand-burgundy text-white shadow-md"
                    : "text-brand-taupe hover:text-brand-burgundy hover:bg-brand-burgundy/5"
                  }`}
              >
                Why Exhibit?
              </button>
              <button
                onClick={() => setActiveSlide("how")}
                className={`flex-1 min-w-[140px] text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeSlide === "how"
                    ? "bg-brand-burgundy text-white shadow-md"
                    : "text-brand-taupe hover:text-brand-burgundy hover:bg-brand-burgundy/5"
                  }`}
              >
                How to Showcase?
              </button>
              <button
                onClick={() => setActiveSlide("flyer")}
                className={`flex-1 min-w-[140px] text-center py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeSlide === "flyer"
                    ? "bg-brand-burgundy text-white shadow-md"
                    : "text-brand-taupe hover:text-brand-burgundy hover:bg-brand-burgundy/5"
                  }`}
              >
                Event Flyer
              </button>
            </div>

            {/* Display Area for Active Slide */}
            <div className="w-full max-w-4xl bg-white p-3 rounded-2xl border border-brand-taupe/15 shadow-xl transition-all duration-300 relative group">
              <div className="overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center max-h-[500px]">
                {activeSlide === "theme" && (
                  <img
                    src="/drive-download-20260611T190333Z-3-001/P 1_Theme Concept.png"
                    alt="Vinyas 2026 Theme Concept brochure slide"
                    className="w-auto h-auto max-h-[480px] object-contain"
                  />
                )}
                {activeSlide === "why" && (
                  <img
                    src="/drive-download-20260611T190333Z-3-001/P 2_WHY.png"
                    alt="Why Exhibit in Vinyas 2026 brochure slide"
                    className="w-auto h-auto max-h-[480px] object-contain"
                  />
                )}
                {activeSlide === "how" && (
                  <img
                    src="/drive-download-20260611T190333Z-3-001/P 3_HOW.png"
                    alt="How to Participate in Vinyas 2026 brochure slide"
                    className="w-auto h-auto max-h-[480px] object-contain"
                  />
                )}
                {activeSlide === "flyer" && (
                  <img
                    src="/drive-download-20260611T190333Z-3-001/Prime Image.png"
                    alt="Vinyas 2026 Primary Exhibition Flyer"
                    className="w-auto h-auto max-h-[480px] object-contain"
                  />
                )}
              </div>

              {/* Floating Slide Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-lg text-white text-xs">
                <span className="font-bold uppercase tracking-wider text-left">
                  {activeSlide === "theme" && "Theme Concept: Heritage, Innovation, Tomorrow"}
                  {activeSlide === "why" && "Why Exhibit: Massive Network & Brand Recognition"}
                  {activeSlide === "how" && "How to Participate: Step-by-Step Expo Entry"}
                  {activeSlide === "flyer" && "Primary Showcase Flyer"}
                </span>
                <a
                  href={
                    activeSlide === "theme"
                      ? "/drive-download-20260611T190333Z-3-001/P 1_Theme Concept.png"
                      : activeSlide === "why"
                        ? "/drive-download-20260611T190333Z-3-001/P 2_WHY.png"
                        : activeSlide === "how"
                          ? "/drive-download-20260611T190333Z-3-001/P 3_HOW.png"
                          : "/drive-download-20260611T190333Z-3-001/Prime Image.png"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-brand-rust font-bold transition-colors uppercase tracking-widest text-[10px]"
                >
                  Open High-Res
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="pricing" className="w-full py-16 sm:py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              LIVE BUDGETING WIDGET
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Interactive Stall Pricing Calculator
            </h2>
            <p className="text-xs sm:text-sm text-brand-taupe max-w-xl font-medium">
              Choose your stall category, configure stall quantities, and review immediate GST price calculations below.
            </p>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Calculator Card Pane */}
            <div className="lg:col-span-7 bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-brand-taupe/12 shadow-xl flex flex-col gap-6">

              {/* Step 1: Stall Type Select */}
              <div className="flex flex-col gap-3 text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-taupe">
                  1. Select Stall Category
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Regular Card */}
                  <div
                    onClick={() => setStallType("regular")}
                    className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 select-none flex flex-col justify-between ${stallType === "regular"
                        ? "border-brand-burgundy bg-brand-burgundy/5"
                        : "border-brand-taupe/20 hover:border-brand-burgundy/40"
                      }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-base text-brand-burgundy">Standard Stall</h4>
                      {stallType === "regular" && <div className="w-2.5 h-2.5 rounded-full bg-brand-rust" />}
                    </div>
                    <p className="text-xs text-brand-taupe mb-4 font-medium leading-relaxed">
                      Size: 3m x 3m (9 sq. m.) area. Includes basic carpet, partitions, logo fascia, lights, power, and counter.
                    </p>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-burgundy">
                      ₹ 1,95,000 <span className="text-[10px] text-brand-taupe font-normal">+ GST</span>
                    </span>
                  </div>

                  {/* Corner Card */}
                  <div
                    onClick={() => setStallType("corner")}
                    className={`p-5 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 select-none flex flex-col justify-between ${stallType === "corner"
                        ? "border-brand-burgundy bg-brand-burgundy/5"
                        : "border-brand-taupe/20 hover:border-brand-burgundy/40"
                      }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-base text-brand-burgundy">Premium Corner Stall</h4>
                      {stallType === "corner" && <div className="w-2.5 h-2.5 rounded-full bg-brand-rust" />}
                    </div>
                    <p className="text-xs text-brand-taupe mb-4 font-medium leading-relaxed">
                      Size: 3m x 3m (9 sq. m.) area. Double-side open location with maximum footfall visibility across aisles.
                    </p>
                    <span className="font-display font-black text-lg sm:text-xl text-brand-burgundy">
                      ₹ 2,25,000 <span className="text-[10px] text-brand-taupe font-normal">+ GST</span>
                    </span>
                  </div>

                </div>
              </div>

              {/* Step 2: Quantity selector */}
              <div className="flex flex-col gap-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-taupe">
                    2. Configure Stall Quantity
                  </span>
                  <span className="text-xs text-brand-rust font-bold">
                    Total Area: {quantity * 9} sq. m.
                  </span>
                </div>

                <div className="flex items-center gap-4 bg-white/50 p-2.5 rounded-2xl border border-brand-taupe/10 max-w-xs">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-xl bg-white border border-brand-taupe/15 flex items-center justify-center font-bold text-brand-burgundy shadow-sm hover:bg-brand-burgundy hover:text-white transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-display font-black text-lg text-brand-burgundy">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="w-10 h-10 rounded-xl bg-white border border-brand-taupe/15 flex items-center justify-center font-bold text-brand-burgundy shadow-sm hover:bg-brand-burgundy hover:text-white transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Cost Calculations */}
              <div className="mt-2 pt-6 border-t border-brand-taupe/10 flex flex-col gap-3.5 text-left">
                <div className="flex justify-between text-xs sm:text-sm font-medium text-brand-taupe">
                  <span>Base Cost ({quantity} Stall{quantity > 1 ? "s" : ""})</span>
                  <span>{formatCurrency(baseTotal)}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-brand-taupe">
                  <span>CGST (9%)</span>
                  <span>{formatCurrency(cgst)}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-medium text-brand-taupe">
                  <span>SGST (9%)</span>
                  <span>{formatCurrency(sgst)}</span>
                </div>

                <div className="h-[1px] bg-brand-taupe/10 my-1" />

                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm sm:text-base text-brand-burgundy uppercase tracking-wider">Estimated Total</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-brand-rust">
                    {formatCurrency(grandTotal)}
                  </span>
                </div>

                <button
                  onClick={handleInquiryFromCalculator}
                  className="w-full py-3.5 rounded-full bg-brand-burgundy hover:bg-brand-burgundy/95 text-white font-bold text-xs uppercase tracking-wider mt-4 shadow-lg hover:shadow-brand-burgundy/15 transition-all duration-300 cursor-pointer"
                >
                  Book this Stall Space Layout
                </button>
              </div>

            </div>

            {/* Price Poster Layout Map Pane */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4 w-full">
              <div className="relative p-2.5 bg-white rounded-3xl shadow-xl border border-brand-taupe/15 w-full flex flex-col gap-3 group">
                <div className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] flex items-center justify-center h-[260px] sm:h-[300px]">
                  <img
                    src="/drive-download-20260611T190333Z-3-001/P 5_Price.png"
                    alt="Official Exhibition Stall layout pricing sheet"
                    className="w-auto h-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-200" />
                </div>

                <div className="px-2 flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-brand-burgundy">Pricing Reference</h4>
                    <p className="text-[10px] text-brand-taupe font-medium">Detailed stall dimensions &amp; inclusions.</p>
                  </div>
                  <a
                    href="/drive-download-20260611T190333Z-3-001/P 5_Price.png"
                    target="_blank"
                    className="px-3.5 py-1.5 rounded-lg border border-brand-taupe/15 hover:border-brand-burgundy hover:bg-brand-burgundy/5 text-brand-burgundy font-bold text-[9px] uppercase tracking-wider transition-all"
                  >
                    View Layout
                  </a>
                </div>
              </div>

              {/* Informative Note */}
              <div className="flex gap-3 bg-brand-burgundy/5 p-4 rounded-2xl border border-brand-burgundy/10 text-left w-full">
                <Icons.Info />
                <p className="text-xs text-brand-taupe leading-relaxed font-medium">
                  <strong>Exhibitor Kit Inclusions:</strong> Stall prices include high-strength Octanorm partitioning structures,
                  premium carpet installation, a custom laminated table counter, two visitor chairs, spotlights, power, and brand name board.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorships" className="w-full py-16 sm:py-24 bg-white/40 border-y border-brand-taupe/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              STRATEGIC BRANDING
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Sponsorship Packages
            </h2>
            <p className="text-xs sm:text-sm text-brand-taupe max-w-xl font-medium">
              Elevate your brand presence. Leverage major corporate opportunities to showcase leadership before 25,000+ industry specialists.
            </p>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsorPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border-2 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.color}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest text-white bg-brand-rust shadow-sm">
                      {pkg.badge}
                    </span>
                    <span className="font-display font-black text-lg text-brand-burgundy">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="text-left">
                    <h3 className="font-display font-black text-xl text-brand-burgundy mb-2">{pkg.name}</h3>
                    <div className="h-[2px] bg-brand-rust/20 w-12 mb-4" />
                  </div>

                  <ul className="text-left flex flex-col gap-3">
                    {pkg.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-brand-taupe leading-relaxed font-medium">
                        <Icons.Check />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSponsorshipInquiry(pkg.name)}
                  className="w-full py-3 rounded-full bg-brand-burgundy hover:bg-brand-burgundy/95 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider mt-8 transition-all duration-200 cursor-pointer"
                >
                  Apply for {pkg.name}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="w-full py-16 sm:py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              PARTICIPATION TERMS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Exhibitor Guidelines &amp; Operations
            </h2>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">

            {/* Guidelines Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-3 w-full">
              {accordionData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-taupe/12 overflow-hidden shadow-sm text-left"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-brand-burgundy transition-colors hover:bg-brand-burgundy/5 cursor-pointer"
                  >
                    <span>{item.title}</span>
                    <Icons.ChevronDown className={activeAccordion === idx ? "rotate-180" : ""} />
                  </button>

                  {activeAccordion === idx && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-brand-taupe/6 text-xs sm:text-sm text-brand-taupe leading-relaxed text-left font-medium">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Guidelines Poster Frame */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4 w-full">
              <div className="relative p-2.5 bg-white rounded-3xl shadow-xl border border-brand-taupe/15 w-full flex flex-col gap-3 group">
                <div className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] flex items-center justify-center h-[260px] sm:h-[300px]">
                  <img
                    src="/drive-download-20260611T190333Z-3-001/P 4_Guide.png"
                    alt="Official Exhibition Operations Guide leaflet"
                    className="w-auto h-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-200" />
                </div>

                <div className="px-2 flex items-center justify-between">
                  <div className="text-left">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-brand-burgundy">Operations Leaflet</h4>
                    <p className="text-[10px] text-brand-taupe font-medium">Layout guide and logistics blueprint.</p>
                  </div>
                  <a
                    href="/drive-download-20260611T190333Z-3-001/P 4_Guide.png"
                    target="_blank"
                    className="px-3.5 py-1.5 rounded-lg border border-brand-taupe/15 hover:border-brand-burgundy hover:bg-brand-burgundy/5 text-brand-burgundy font-bold text-[9px] uppercase tracking-wider transition-all"
                  >
                    View Leaflet
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Form (Contact) Section */}
      <section ref={contactRef} id="contact" className="w-full py-16 sm:py-24 bg-white/40 border-t border-brand-taupe/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-rust">
              GET IN TOUCH
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-burgundy tracking-tight">
              Stall Booking &amp; General Inquiries
            </h2>
            <div className="w-16 h-[2.5px] bg-brand-burgundy" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">

            {/* Contact Information Pane */}
            <div className="lg:col-span-5 bg-brand-burgundy rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between gap-10 shadow-xl relative overflow-hidden">

              {/* Background glow orb inside contact card */}
              <div className="absolute bottom-[-20%] right-[-20%] w-[250px] h-[250px] rounded-full bg-brand-rust/20 filter blur-[50px] pointer-events-none" />

              <div className="flex flex-col gap-6 text-left relative z-10">
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider text-white">Contact Info</h3>
                <div className="h-[2px] bg-brand-rust w-12" />

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Have questions about custom stall layouts, sponsorship slots, or visiting guidelines? Reach out directly to the IIID Charotar Centre coordinators.
                </p>

                <div className="flex flex-col gap-5 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icons.Mail />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Email address</span>
                      <a href="mailto:info@vinyas2026iiid.com" className="text-xs sm:text-sm text-white font-bold hover:underline">info@vinyas2026iiid.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icons.Phone />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Coordinator Contact</span>
                      <a href="tel:+919879512345" className="text-xs sm:text-sm text-white font-bold hover:underline">+91 98795 12345</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icons.MapPin />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Exhibition Venue</span>
                      <span className="text-xs sm:text-sm text-white font-medium">IIID AC Dome, Anand, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Committee Members Mention */}
              <div className="text-left border-t border-white/10 pt-6 relative z-10">
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold block mb-2">IIID Committee Core</span>
                <span className="text-xs text-white/85 font-medium leading-relaxed block">
                  Kamal Patel • Maulik Pavagadhi
                </span>
              </div>

            </div>

            {/* Interactive Form Pane */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-brand-taupe/12 shadow-xl flex flex-col justify-center">
              {formSubmitted ? (
                // Success State
                <div className="flex flex-col items-center justify-center text-center gap-5 py-8 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-rust/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-rust" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-2xl text-brand-burgundy uppercase tracking-wide">Inquiry Submitted</h3>
                  <p className="text-xs sm:text-sm text-brand-taupe max-w-sm leading-relaxed font-medium">
                    Thank you, <span className="font-bold text-brand-burgundy">{formData.name}</span>.
                    Your inquiry regarding <span className="font-bold text-brand-burgundy">{formData.inquiryType}</span> has been received.
                    Our representative will contact you with availability and details shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        inquiryType: "Stall Booking",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-brand-taupe/20 text-brand-burgundy hover:bg-brand-burgundy/5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                // Form Interface
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 text-left">

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors font-medium"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors font-medium"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Company / Brand</label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors font-medium"
                        placeholder="e.g. Apex Hardware Pvt Ltd"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="inquiryType" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors cursor-pointer font-medium"
                    >
                      <option value="Stall Booking">Stall Booking / Space Rental</option>
                      <option value="Sponsorship Opportunities">Strategic Sponsorship Opportunities</option>
                      <option value="Visitor pass">Visitor Pass &amp; Delegation Entry</option>
                      <option value="General Inquiry">General Event Inquiry</option>
                    </select>
                  </div>

                  {/* Message Box */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-brand-taupe">Details / Requirements</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="p-3 rounded-xl border border-brand-taupe/20 bg-[#FAF8F5] focus:outline-none focus:border-brand-burgundy text-xs sm:text-sm transition-colors resize-none leading-relaxed font-medium"
                      placeholder="Please share stall sizing needs, branding aspirations, or specific setup questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-brand-rust hover:bg-brand-rust/95 disabled:bg-brand-taupe/40 text-white font-bold text-xs uppercase tracking-wider mt-2 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-brand-rust/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Request...
                      </span>
                    ) : (
                      "Submit Official Inquiry"
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
