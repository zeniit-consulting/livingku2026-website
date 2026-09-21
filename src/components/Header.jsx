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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full">
      {/* WordPress-style Top Bar (Scrolls away naturally, NOT sticky) */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="wp-container flex flex-wrap justify-between items-center gap-y-2">
          {/* Left contact info */}
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
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>{t.topBar.officeHours}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>{t.topBar.locations}</span>
            </div>
          </div>

          {/* Right: Language switch & client desk */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Bilingual Switcher */}
            <div className="flex items-center bg-slate-800/80 rounded-full p-0.5 border border-slate-700">
              <Globe className="w-3.5 h-3.5 text-gold-400 ml-2 mr-1" />
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all ${
                  lang === 'id' 
                    ? 'bg-gold-500 text-slate-950 shadow-sm font-bold' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Beralih ke Bahasa Indonesia"
              >
                ID
              </button>
              <span className="text-slate-600 text-xs">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all ${
                  lang === 'en' 
                    ? 'bg-gold-500 text-slate-950 shadow-sm font-bold' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            <Link 
              to="/kontak" 
              className="hidden sm:inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium transition-colors text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Layanan Klien' : 'Client Desk'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — STICKY ONLY (stays at top on scroll without top bar) */}
      <nav 
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled 
            ? 'shadow-md border-slate-200/90 py-3' 
            : 'shadow-sm border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="wp-container flex justify-between items-center">
          {/* Brand Logo with Actual Image */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="LivingKu Logo - Studio Arsitektur, Kontraktor & Legalitas" 
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight block leading-none">
                Living<span className="text-gold-600">Ku</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block mt-1">
                Architecture • Build • Legal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link 
              to="/" 
              className={`hover:text-gold-600 transition-colors py-2 border-b-2 ${
                isActive('/') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.home}
            </Link>

            <Link 
              to="/tentang-kami" 
              className={`hover:text-gold-600 transition-colors py-2 border-b-2 ${
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
                className={`flex items-center gap-1 hover:text-gold-600 transition-colors py-2 border-b-2 ${
                  isActive('/layanan') || isActive('/simulasi-rab') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
                }`}
              >
                <span>{t.nav.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-88 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 mt-1 transition-all animate-fadeIn z-50">
                  <div className="px-4 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {lang === 'id' ? 'Layanan & Estimasi Proyek' : 'Services & Budgeting'}
                    </span>
                    <Link to="/layanan" className="text-[11px] font-bold text-gold-700 hover:underline">
                      {lang === 'id' ? 'Halaman Layanan →' : 'Services Page →'}
                    </Link>
                  </div>

                  <Link 
                    to="/layanan#design" 
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-gold-600 transition-colors">
                        {t.nav.servicesDropdown.design}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">3D DED, Interior & Exterior Tropis</div>
                    </div>
                  </Link>

                  <Link 
                    to="/layanan#construction" 
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-gold-600 transition-colors">
                        {t.nav.servicesDropdown.construction}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">Kontraktor Sipil & Pengawasan Lapangan</div>
                    </div>
                  </Link>

                  <Link 
                    to="/layanan#legal" 
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors mt-0.5">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-gold-600 transition-colors">
                        {t.nav.servicesDropdown.legal}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">PT Lokal, PMA, NIB OSS-RBA & KITAS</div>
                    </div>
                  </Link>

                  <Link 
                    to="/layanan#tax" 
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors mt-0.5">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-gold-600 transition-colors">
                        {t.nav.servicesDropdown.tax}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">SPT Tahunan, PPN 12%, PSAK & SP2DK</div>
                    </div>
                  </Link>

                  {/* Simulasi RAB item inside Layanan group */}
                  <div className="pt-1.5 mt-1.5 border-t border-slate-100 bg-amber-50/50">
                    <Link 
                      to="/simulasi-rab" 
                      className="flex items-start gap-3 px-4 py-2.5 hover:bg-amber-100/60 transition-colors group"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold group-hover:bg-slate-900 group-hover:text-gold-300 transition-colors mt-0.5">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-gold-800 transition-colors flex items-center gap-1.5">
                          <span>{t.nav.calculator}</span>
                          <span className="text-[10px] bg-amber-200 text-amber-900 font-bold px-1.5 py-0.2 rounded">Kalkulator</span>
                        </div>
                        <div className="text-xs text-slate-600 line-clamp-1">Kalkulator Interaktif Biaya & Material SNI</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/portofolio" 
              className={`hover:text-gold-600 transition-colors py-2 border-b-2 ${
                isActive('/portofolio') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.portfolio}
            </Link>

            <Link 
              to="/blog" 
              className={`hover:text-gold-600 transition-colors py-2 border-b-2 ${
                isActive('/blog') ? 'text-gold-700 border-gold-600 font-bold' : 'border-transparent'
              }`}
            >
              {t.nav.blog}
            </Link>
          </div>

          {/* Desktop Right Action: CTA directs straight to /kontak */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-gold-300 hover:text-gold-200 font-semibold text-sm shadow-md hover:shadow-lg transition-all border border-gold-500/30 group"
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
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {/* Mobile language switch */}
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Bahasa / Language:</span>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md ${lang === 'id' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  ID (Indonesia)
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md ${lang === 'en' ? 'bg-white shadow text-slate-900 font-bold' : 'text-slate-600'}`}
                >
                  EN (English)
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
                  className="block px-3 py-2 text-sm font-bold text-gold-800 bg-amber-50 rounded-md"
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
