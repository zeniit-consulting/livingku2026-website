import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import { Phone, Mail, Clock, MapPin, Building2, MessageCircle } from 'lucide-react';

export default function ContactPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Hubungi & Kantor Kami' : 'Contact & Offices' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Header */}
      <section className="py-14 bg-slate-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/20 px-3 py-1 rounded-full inline-block mb-3 border border-gold-500/30">
            {t.contact.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Full Contact Form & Offices Component */}
      <ContactSection t={t} preselectedService="" />

      {/* Frequently Asked Questions */}
      <FaqSection t={t} />
    </div>
  );
}
