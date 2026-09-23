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
  const [showTooltip, setShowTooltip] = useState(true);

  // Match current path
  const currentPath = location.pathname.endsWith('/') && location.pathname.length > 1 
    ? location.pathname.slice(0, -1) 
    : location.pathname;

  const currentRef = PAGE_REF_CODES[currentPath] || {
    code: 'LK-GEN-26',
    titleId: 'Website LivingKu',
    titleEn: 'LivingKu Website',
  };

  const pageTitle = lang === 'id' ? currentRef.titleId : currentRef.titleEn;

  const whatsappMessage = lang === 'id'
    ? `Halo Tim LivingKu, saya ingin mengajukan konsultasi dari ${pageTitle}. (Kode Referensi: ${currentRef.code})`
    : `Hello LivingKu Team, I would like to request a consultation from ${pageTitle}. (Reference Code: ${currentRef.code})`;

  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Informative Tooltip Badge */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 rounded-xl px-3.5 py-2.5 shadow-2xl animate-fadeIn max-w-[230px] relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-full transition-colors"
            title={lang === 'id' ? 'Tutup pesan' : 'Dismiss notice'}
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-1.5 text-gold-400 font-bold text-[11px] mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>{lang === 'id' ? 'Konsultan Online' : 'Consultant Online'}</span>
          </div>

          <p className="text-[11px] text-slate-300 leading-snug">
            {lang === 'id' 
              ? 'Tanya arsitektur, RAB, legalitas & pajak via WhatsApp.' 
              : 'Direct inquiry on architecture, BOQ, legal & tax.'}
          </p>

          {/* Reference Code Badge */}
          <div className="mt-1.5 pt-1.5 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span>Ref:</span>
            <span className="font-mono font-bold text-gold-400 bg-slate-800 px-1.5 py-0.2 rounded border border-slate-700">
              {currentRef.code}
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label={`${lang === 'id' ? 'Chat WhatsApp Resmi LivingKu' : 'LivingKu Official WhatsApp Chat'} (Ref: ${currentRef.code})`}
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
        
        <WhatsAppIcon className="w-7 h-7 text-white relative z-10 transition-transform group-hover:rotate-6" />

        {/* Small badge displaying reference code on hover for mobile/desktop */}
        <span className="sr-only">
          {currentRef.code}
        </span>
      </a>
    </aside>
  );
}
