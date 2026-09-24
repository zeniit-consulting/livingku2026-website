import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import { Phone, Mail, Clock, MapPin, Building2, MessageCircle } from 'lucide-react';

export default function ContactPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Kontak Kami' : 'Contact Us' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Clean Page Header with Integrated Breadcrumb */}
      <section className="py-12 bg-white border-b border-slate-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0ea8a4 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          {/* Breadcrumb placed right above the title */}
          <div className="flex justify-center mb-3.5">
            <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} variant="pill" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            {t.contact.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Full Contact Form & Offices Component (Clean, without duplicate header) */}
      <ContactSection t={t} preselectedService="" hideHeader={true} />

      {/* Frequently Asked Questions */}
      <FaqSection t={t} />
    </div>
  );
}
