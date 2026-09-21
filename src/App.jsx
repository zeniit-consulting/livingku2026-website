import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { content } from './data/content';
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

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('livingku_lang') || 'id';
  });

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    localStorage.setItem('livingku_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = content[lang];

  const handleOpenConsultation = (serviceName = '') => {
    setSelectedService(serviceName || (lang === 'id' ? 'Jasa Konstruksi & RAB Estimator' : 'Construction & BOQ Estimation'));
    setConsultationOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-slate-800 selection:bg-gold-500 selection:text-white">
        {/* Global WordPress Header */}
        <Header
          lang={lang}
          setLang={setLang}
          t={t}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
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

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global WordPress Footer */}
        <Footer t={t} lang={lang} />

        {/* Global Quick Consultation Modal */}
        <ConsultationModal
          isOpen={consultationOpen}
          onClose={() => setConsultationOpen(false)}
          t={t}
          initialService={selectedService}
          lang={lang}
        />

        {/* Floating WhatsApp CTA with Per-Page Reference Code */}
        <FloatingWhatsAppCTA lang={lang} />
      </div>
    </Router>
  );
}
