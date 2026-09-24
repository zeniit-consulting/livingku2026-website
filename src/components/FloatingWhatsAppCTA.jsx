import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export const PAGE_REF_CODES = {
  '/': {
    code: 'LK-HOME-26',
    titleId: 'Halaman Beranda',
    titleEn: 'Homepage',
  },
  '/tentang-kami': {
    code: 'LK-ABT-26',
    titleId: 'Halaman Tentang Kami',
    titleEn: 'About Us Page',
  },
  '/layanan': {
    code: 'LK-SRV-26',
    titleId: 'Halaman Layanan Terpadu',
    titleEn: 'Services Page',
  },
  '/simulasi-rab': {
    code: 'LK-RAB-26',
    titleId: 'Halaman Simulasi RAB',
    titleEn: 'RAB Estimator Page',
  },
  '/mitra': {
    code: 'LK-PTR-26',
    titleId: 'Halaman Mitra Resmi',
    titleEn: 'Partners Directory',
  },
  '/portofolio': {
    code: 'LK-PORT-26',
    titleId: 'Halaman Portofolio Proyek',
    titleEn: 'Portfolio Projects',
  },
  '/blog': {
    code: 'LK-BLOG-26',
    titleId: 'Halaman Berita',
    titleEn: 'News Page',
  },
  '/kontak': {
    code: 'LK-CNT-26',
    titleId: 'Halaman Kontak & Kantor',
    titleEn: 'Contact Hub',
  },
};

export default function FloatingWhatsAppCTA({ lang }) {
  const location = useLocation();

  // Match current path
  const currentPath = location.pathname.endsWith('/') && location.pathname.length > 1 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  const currentRef = PAGE_REF_CODES[currentPath] || {
    code: 'LK-GEN-26',
    titleId: 'Website LivingKu',
    titleEn: 'LivingKu Website',
  };

  const whatsappUrl = 'https://wa.me/628970065402?text=Halo+Livingku%2C+saya+tertarik+dengan+properti+di+Livingku+dan+ingin+bertanya+lebih+lanjut.';

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 select-none animate-float-gentle">
      {/* Floating Action Button with Animated Glow and Wave */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-[0_10px_25px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label={`${lang === 'id' ? 'Chat WhatsApp Resmi LivingKu' : 'LivingKu Official WhatsApp Chat'} (Ref: ${currentRef.code})`}
      >
        {/* Continuous pulsing radar waves */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/40 animate-ping-slow pointer-events-none" />
        <span className="absolute -inset-3 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />
        
        {/* Shaking & rotating WhatsApp Icon on hover */}
        <WhatsAppIcon className="w-7 h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />

        {/* Live green active badge dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-slate-900 rounded-full z-20 shadow-xs" />

        <span className="sr-only">
          {currentRef.code}
        </span>
      </a>
    </aside>
  );
}
