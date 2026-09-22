import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building,
  Award
} from 'lucide-react';

export default function Hero({ t, lang, onOpenConsultation }) {
  const isId = lang !== 'en';

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      alt: "Arsitektur Villa Modern Tropis LivingKu Indonesia",
      category: isId ? "Arsitektur Tropis & Interior" : "Tropical Architecture & Interior",
      location: "Canggu & Uluwatu, Bali",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=2000&q=85",
      alt: "Konstruksi Sipil dan Estimasi RAB SNI LivingKu",
      category: isId ? "Jasa Konstruksi & RAB SNI" : "Civil Construction & SNI BOQ",
      location: "Jabodetabek & Badung",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
      alt: "Fit-Out Kantor Korporat & Penasihat Pajak SCBD",
      category: isId ? "Legalitas PMDN/PMA & Pajak" : "PMDN/PMA Setup & Tax Advisory",
      location: "SCBD Sudirman, Jakarta",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
      alt: "Masterpiece Residensial Mewah LivingKu",
      category: isId ? "Solusi Terpadu Turnkey" : "Turnkey Integrated Solutions",
      location: "Nusantara & Bali",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay timer with 6000ms interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section 
      id="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label={isId ? "Proyek Unggulan LivingKu" : "LivingKu Featured Architecture & Construction"}
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] -mt-[96px] sm:-mt-[102px] pt-[96px] sm:pt-[102px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Screen Reader Live Announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`${isId ? "Slide aktif" : "Active slide"} ${currentIndex + 1} ${isId ? "dari" : "of"} ${slides.length}: ${slides[currentIndex].category}`}
      </div>

      {/* Fullwidth Carousel Background Slides */}
      <div id="hero-carousel-track" className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} ${isId ? "dari" : "of"} ${slides.length}: ${slide.category}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width="2000"
                height="1000"
                decoding="async"
                className={`w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Cinematic Dark Overlay for striking contrast against vivid hero imagery */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90 backdrop-blur-[0.5px]" />
        
        {/* Subtle luminous Turkish blue ambient glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-turkish-500/15 rounded-full blur-3xl pointer-events-none z-10" />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(14, 168, 164, 0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Centered Hero Content with High-Contrast Typography */}
      <div className="wp-container relative z-20 text-center max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        
        {/* Centered Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 border border-turkish-500/40 shadow-xl backdrop-blur-md text-xs font-semibold text-slate-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-turkish-400 animate-pulse shadow-[0_0_8px_rgba(14,168,164,0.8)]" />
          <span className="text-turkish-300">{slides[currentIndex].category}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-medium hidden sm:inline">{slides[currentIndex].location}</span>
        </div>

        {/* Simple Hero Title in Center - Maximum Contrast White & Turkish Blue */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] mb-5 drop-shadow-md">
          {isId ? (
            <>
              Membangun Properti Impian &amp;{' '}
              <span className="text-turkish-400 underline decoration-turkish-400/50 decoration-wavy decoration-1 underline-offset-8">
                Fondasi Legalitas
              </span>{' '}
              Bisnis
            </>
          ) : (
            <>
              Building Visionary Properties &amp;{' '}
              <span className="text-turkish-400 underline decoration-turkish-400/50 decoration-wavy decoration-1 underline-offset-8">
                Statutory Foundations
              </span>
            </>
          )}
        </h1>

        {/* Simple & Concise Subtitle in Center */}
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-sm">
          {isId 
            ? 'Solusi terintegrasi arsitektur presisi, kontraktor berstandar SNI, pendirian PT PMDN/PMA, dan tata kelola akuntansi & perpajakan di Indonesia.'
            : 'Integrated architectural planning, SNI general contracting, corporate PMDN/PMA licensing, and statutory tax governance in Indonesia.'}
        </p>

        {/* Centered CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-turkish-500 hover:bg-turkish-600 text-white font-bold text-sm shadow-lg hover:shadow-turkish-500/25 transition-all group"
          >
            <span>{isId ? 'Mulai Konsultasi Proyek' : 'Start Project Consultation'}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/simulasi-rab"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-turkish-300 font-semibold text-sm border border-white/25 hover:border-turkish-400/60 shadow-sm transition-all backdrop-blur-md"
          >
            <Calculator className="w-4 h-4 text-turkish-400" />
            <span>{isId ? 'Hitung Estimasi RAB' : 'Cost & BOQ Simulator'}</span>
          </a>
        </div>

        {/* Centered Trust Indicators */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sertifikasi LPJK &amp; GAPENSI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Konsultan Pajak Berizin (BKP)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Izin PBG, SLF &amp; OSS-RBA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Standar Material SNI &amp; ISO 9001</span>
          </div>
        </div>
      </div>

      {/* Carousel Navigation: Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-controls="hero-carousel-track"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white hover:text-turkish-400 border border-slate-700/80 shadow-xl flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95 focus:outline-none"
        aria-label={isId ? "Slide sebelumnya" : "Previous slide"}
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Carousel Navigation: Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-controls="hero-carousel-track"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white hover:text-turkish-400 border border-slate-700/80 shadow-xl flex items-center justify-center transition-all backdrop-blur-md hover:scale-105 active:scale-95 focus:outline-none"
        aria-label={isId ? "Slide selanjutnya" : "Next slide"}
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Carousel Slide Indicators at the Bottom Center */}
      <div 
        role="tablist" 
        aria-label={isId ? "Pemilih slide proyek unggulan" : "Slide selector"}
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800/90 shadow-xl"
      >
        {slides.map((s, idx) => {
          const isSelected = currentIndex === idx;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls="hero-carousel-track"
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                isSelected 
                  ? 'w-7 h-2.5 bg-turkish-400 shadow-[0_0_8px_rgba(14,168,164,0.7)]' 
                  : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`${isId ? "Pindah ke slide" : "Switch to slide"} ${idx + 1}: ${s.category}`}
            />
          );
        })}
      </div>
    </section>
  );
}
