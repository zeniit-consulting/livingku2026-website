import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck2,
  Receipt,
  MessageSquare
} from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const location = useLocation();

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Dynamic header transparency state: 50% transparent at initial state, 100% solid after hero is scrolled past
  useEffect(() => {
    if (location.pathname !== '/') {
      setIsScrolledPastHero(true);
      return;
    }

    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const threshold = heroEl ? (heroEl.offsetTop + heroEl.offsetHeight - 110) : 550;
      if (window.scrollY > threshold) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isSolid = isScrolledPastHero || mobileMenuOpen;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isSolid 
        ? 'bg-white shadow-md' 
        : 'bg-transparent shadow-xs'
    }`}>
      {/* Top Bar (Sticky with header): 50% transparent initial, 100% solid when scrolled past hero */}
      <div className={`text-xs py-1.5 transition-colors duration-300 ${
        isSolid
          ? 'bg-slate-900 text-slate-300 border-b border-slate-800'
          : 'bg-slate-900/50 backdrop-blur-md text-slate-200 border-b border-slate-800/40'
      }`}>
        <div className="wp-container flex flex-wrap justify-between items-center gap-y-1">
          {/* Contact info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${t.topBar.hotline.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>{t.topBar.hotline}</span>
            </a>
            <a 
              href={`mailto:${t.topBar.email}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>{t.topBar.email}</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{t.topBar.locations}</span>
            </div>
          </div>

          {/* Language switch */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center bg-slate-800 rounded-full p-0.5 border border-slate-700">
              <Globe className="w-3 h-3 text-gold-400 ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-full transition-all ${
                  lang === 'id' 
                    ? 'bg-gold-500 text-slate-950 font-bold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ID
              </button>
              <span className="text-slate-600 text-[10px]">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-full transition-all ${
                  lang === 'en' 
                    ? 'bg-gold-500 text-slate-950 font-bold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <Link 
              to="/kontak" 
              className="hidden sm:inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium text-xs transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>{lang === 'id' ? 'Layanan Klien' : 'Client Desk'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: 50% transparent initial, 100% solid when scrolled past hero */}
      <nav 
        aria-label={lang === 'id' ? 'Navigasi Utama' : 'Main Navigation'} 
        className={`py-3 sm:py-3.5 transition-all duration-300 ${
          isSolid 
            ? 'bg-white border-b border-slate-100 shadow-xs' 
            : 'bg-white/50 backdrop-blur-md border-b border-slate-200/50 shadow-xs'
        }`}
      >
        <div className="wp-container flex justify-between items-center">
          {/* Simplified Logo: Standalone without black background and without text */}
          <Link to="/" className="inline-flex items-center group py-1" aria-label="LivingKu Home">
            <img 
              src="/images/logo.png" 
              alt="LivingKu" 
              width="150"
              height="44"
              decoding="async"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link 
              to="/" 
              className={`hover:text-gold-600 transition-colors py-1.5 border-b-2 ${
                isActive('/') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.home}
            </Link>

            <Link 
              to="/tentang-kami" 
              className={`hover:text-gold-600 transition-colors py-1.5 border-b-2 ${
                isActive('/tentang-kami') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.about}
            </Link>

            {/* Services Dropdown (with Simulasi RAB included) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                to="/layanan"
                className={`flex items-center gap-1 hover:text-gold-600 transition-colors py-1.5 border-b-2 ${
                  isActive('/layanan') || isActive('/simulasi-rab') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 lg:-left-36 w-[800px] lg:w-[860px] max-w-[92vw] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 mt-2 transition-all animate-fadeIn z-50 text-left">
                  {/* Top Bar Header */}
                  <div className="pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-turkish-800 bg-turkish-50 border border-turkish-200 px-2.5 py-0.5 rounded-full">
                        {lang === 'id' ? 'Layanan Terpadu & Kalkulator' : 'Integrated Services & Estimator'}
                      </span>
                      <span className="text-xs text-slate-500 hidden sm:inline font-light">
                        {lang === 'id' ? 'Arsitektur, Kontraktor, Legalitas & Pajak' : 'Design, Construction, Legal & Tax'}
                      </span>
                    </div>
                    <Link 
                      to="/layanan" 
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-turkish-700 hover:text-turkish-800 hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'id' ? 'Lihat Semua Layanan' : 'All Services'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 3 Columns Grid (3x lebar container) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Column 1: Desain & Konstruksi */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                        {lang === 'id' ? 'Arsitektur & Konstruksi' : 'Design & Construction'}
                      </div>

                      <Link 
                        to="/layanan#design" 
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200/80"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-turkish-50 text-turkish-700 group-hover:bg-turkish-500 group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-sm">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-turkish-700 transition-colors">
                            {t.nav.servicesDropdown.design}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            3D DED, Interior & Exterior Tropis
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/layanan#construction" 
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200/80"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-turkish-50 text-turkish-700 group-hover:bg-turkish-500 group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-sm">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-turkish-700 transition-colors">
                            {t.nav.servicesDropdown.construction}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            Kontraktor Sipil & Pengawasan Lapangan SNI
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Column 2: Legalitas & Perpajakan */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                        {lang === 'id' ? 'Legalitas & Finansial' : 'Corporate Legal & Tax'}
                      </div>

                      <Link 
                        to="/layanan#legal" 
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200/80"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-turkish-50 text-turkish-700 group-hover:bg-turkish-500 group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-sm">
                          <FileCheck2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-turkish-700 transition-colors">
                            {t.nav.servicesDropdown.legal}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            PT PMDN, PT PMA, NIB OSS-RBA & PBG
                          </div>
                        </div>
                      </Link>

                      <Link 
                        to="/layanan#tax" 
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-200/80"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-2 rounded-lg bg-turkish-50 text-turkish-700 group-hover:bg-turkish-500 group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-sm">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-turkish-700 transition-colors">
                            {t.nav.servicesDropdown.tax}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                            SPT Tahunan, PPN 12%, PSAK & SP2DK
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Column 3: Featured Interactive Calculator (RAB) */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-turkish-50/90 to-white border border-turkish-200/90 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-turkish-800 bg-turkish-200/70 px-2 py-0.5 rounded">
                            {lang === 'id' ? 'Fitur Unggulan' : 'Featured Tool'}
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-turkish-500 text-white flex items-center justify-center shadow-sm">
                            <Calculator className="w-3.5 h-3.5" />
                          </div>
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">
                          {t.nav.calculator}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed mb-3 font-light">
                          {lang === 'id' 
                            ? 'Simulasi estimasi anggaran konstruksi & perizinan real-time berstandar AHSP SNI 2026.'
                            : 'Calculate real-time preliminary BOQ estimates benchmarked against 2026 standards.'}
                        </p>
                      </div>

                      <Link
                        to="/simulasi-rab"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="w-full py-2 px-3 rounded-lg bg-turkish-500 hover:bg-turkish-600 text-white font-bold text-xs text-center shadow transition-colors block"
                      >
                        {lang === 'id' ? 'Buka Kalkulator RAB →' : 'Launch BOQ Tool →'}
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Footer Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
                    <span>
                      {lang === 'id' 
                        ? 'Konsultasi awal gratis bersama tim arsitek & konsultan legal berizin' 
                        : 'Complimentary consultation with licensed architects & legal counsel'}
                    </span>
                    <Link 
                      to="/kontak" 
                      onClick={() => setServicesDropdownOpen(false)}
                      className="font-bold text-slate-800 hover:text-turkish-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{lang === 'id' ? 'Hubungi Kantor Kami' : 'Contact Us'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/portofolio" 
              className={`hover:text-gold-600 transition-colors py-1.5 border-b-2 ${
                isActive('/portofolio') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.portfolio}
            </Link>

            <Link 
              to="/blog" 
              className={`hover:text-gold-600 transition-colors py-1.5 border-b-2 ${
                isActive('/blog') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.blog}
            </Link>
          </div>

          {/* Desktop Right Action: Direct to /kontak */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-gold-300 hover:text-gold-200 font-semibold text-sm shadow-md transition-all border border-gold-500/30 group"
            >
              <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-gold-400" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? (lang === 'id' ? 'Tutup navigasi' : 'Close navigation') : (lang === 'id' ? 'Buka navigasi' : 'Open navigation')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation"
            role="region"
            aria-label={lang === 'id' ? 'Navigasi Seluler' : 'Mobile Navigation'}
            className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn"
          >
            {/* Mobile language switch */}
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Bahasa / Language:</span>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md ${lang === 'id' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md ${lang === 'en' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-gold-50 text-gold-800 font-bold' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                {t.nav.home}
              </Link>
              
              <Link 
                to="/tentang-kami" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/tentang-kami') ? 'bg-gold-50 text-gold-800 font-bold' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                {t.nav.about}
              </Link>

              {/* Grouped Layanan & Simulasi RAB on Mobile */}
              <div className="py-2 border-t border-b border-slate-100 my-2 space-y-1">
                <Link 
                  to="/layanan" 
                  className="text-xs font-bold text-gold-700 px-3 uppercase tracking-wider block mb-1 hover:underline"
                >
                  {t.nav.services} ({lang === 'id' ? 'Halaman Layanan →' : 'Services Page →'})
                </Link>
                <Link 
                  to="/layanan#design" 
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:text-gold-600"
                >
                  • {t.nav.servicesDropdown.design}
                </Link>
                <Link 
                  to="/layanan#construction" 
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:text-gold-600"
                >
                  • {t.nav.servicesDropdown.construction}
                </Link>
                <Link 
                  to="/layanan#legal" 
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:text-gold-600"
                >
                  • {t.nav.servicesDropdown.legal}
                </Link>
                <Link 
                  to="/layanan#tax" 
                  className="block px-3 py-1.5 text-sm text-slate-700 hover:text-gold-600"
                >
                  • {t.nav.servicesDropdown.tax}
                </Link>
                <Link 
                  to="/simulasi-rab" 
                  className="block px-3 py-2 text-sm font-bold text-turkish-800 bg-turkish-50 border border-turkish-200 rounded-md"
                >
                  ★ {t.nav.calculator} (Kalkulator Anggaran)
                </Link>
              </div>

              <Link 
                to="/portofolio" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/portofolio') ? 'bg-gold-50 text-gold-800 font-bold' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                {t.nav.portfolio}
              </Link>

              <Link 
                to="/blog" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/blog') ? 'bg-gold-50 text-gold-800 font-bold' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                {t.nav.blog}
              </Link>
            </div>

            {/* Mobile Bottom CTA directs to /kontak */}
            <div className="pt-2">
              <Link
                to="/kontak"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-900 text-gold-300 font-semibold text-center text-sm shadow-md"
              >
                <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
