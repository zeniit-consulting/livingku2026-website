import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ContentProvider, useContent } from './context/ContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsAppCTA from './components/FloatingWhatsAppCTA';

// Dedicated Subpages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import EstimatorPage from './pages/EstimatorPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CMSPage from './pages/admin/CMSPage';
import SEOHead from './components/SEOHead';

function WebsiteLayout() {
  const location = useLocation();
  const isCMS = location.pathname.startsWith('/cms') || location.pathname.startsWith('/admin');

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('livingku_lang') || 'id';
  });

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const { content } = useContent();

  useEffect(() => {
    localStorage.setItem('livingku_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = content[lang] || content.id;

  const handleOpenConsultation = (serviceName = '') => {
    setSelectedService(serviceName || (lang === 'id' ? 'Jasa Konstruksi & RAB Estimator' : 'Construction & BOQ Estimation'));
    setConsultationOpen(true);
  };

  return (
    <>
      {/* Dynamic SEO Meta, Titles & OpenGraph Injection */}
      <SEOHead lang={lang} />
      <ScrollToTop />
      {/* Accessible Skip to Content Link for keyboard & screen reader users */}
      {!isCMS && (
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-slate-900 focus:text-gold-300 focus:font-bold focus:text-xs focus:rounded-lg focus:shadow-xl focus:border focus:border-gold-500/50 outline-none"
        >
          {lang === 'id' ? 'Lewati ke konten utama' : 'Skip to main content'}
        </a>
      )}

      <div className={`min-h-screen flex flex-col font-sans ${isCMS ? 'bg-slate-100' : 'bg-[#FAF9F6] text-slate-800 selection:bg-gold-500 selection:text-white'}`}>
        {/* Global Header (Hidden on CMS) */}
        {!isCMS && (
          <Header
            lang={lang}
            setLang={setLang}
            t={t}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {/* Dynamic Route Pages with semantic main landmark */}
        <main id="main-content" tabIndex="-1" className="flex-1 focus:outline-none">
          <Routes>
            {/* Clean & Balanced Home Landing Page */}
            <Route 
              path="/" 
              element={
                <HomePage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />

            {/* Dedicated About Us Page */}
            <Route 
              path="/tentang-kami" 
              element={
                <AboutPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />
            <Route path="/about" element={<Navigate to="/tentang-kami" replace />} />

            {/* Dedicated Services Page (4 Core Pillars) */}
            <Route 
              path="/layanan" 
              element={
                <ServicesPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />
            <Route path="/services" element={<Navigate to="/layanan" replace />} />

            {/* Dedicated RAB Cost Estimator Page */}
            <Route 
              path="/simulasi-rab" 
              element={
                <EstimatorPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />
            <Route path="/estimator" element={<Navigate to="/simulasi-rab" replace />} />

            <Route path="/mitra" element={<Navigate to="/layanan" replace />} />
            <Route path="/partners" element={<Navigate to="/layanan" replace />} />

            {/* Dedicated Portfolio & Projects Page */}
            <Route 
              path="/portofolio" 
              element={
                <PortfolioPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />
            <Route path="/portfolio" element={<Navigate to="/portofolio" replace />} />

            {/* Dedicated WordPress Blog & Magazine Page */}
            <Route 
              path="/blog" 
              element={
                <BlogPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />

            {/* Dedicated Contact & Consultation Hub */}
            <Route 
              path="/kontak" 
              element={
                <ContactPage 
                  t={t} 
                  lang={lang} 
                  onOpenConsultation={handleOpenConsultation} 
                />
              } 
            />
            <Route path="/contact" element={<Navigate to="/kontak" replace />} />

            {/* LivingKu CMS Portal */}
            <Route path="/cms" element={<CMSPage />} />
            <Route path="/admin" element={<Navigate to="/cms" replace />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global WordPress Footer (Hidden on CMS) */}
        {!isCMS && <Footer t={t} lang={lang} />}

        {/* Global Quick Consultation Modal (Hidden on CMS) */}
        {!isCMS && (
          <ConsultationModal
            isOpen={consultationOpen}
            onClose={() => setConsultationOpen(false)}
            t={t}
            initialService={selectedService}
            lang={lang}
          />
        )}

        {/* Floating WhatsApp CTA (Hidden on CMS) */}
        {!isCMS && <FloatingWhatsAppCTA lang={lang} />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <Router>
        <WebsiteLayout />
      </Router>
    </ContentProvider>
  );
}
