import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PortfolioSection from '../components/PortfolioSection';
import { Award, CheckCircle2, Building, Layers } from 'lucide-react';

export default function PortfolioPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Portofolio Proyek' : 'Project Portfolio' }
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
            {t.portfolio.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {t.portfolio.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {t.portfolio.subtitle}
          </p>
        </div>
      </section>

      {/* Portfolio Section Component */}
      <PortfolioSection t={t} onOpenConsultation={onOpenConsultation} />

      {/* Quality Standards Summary */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-serif text-3xl font-bold text-gold-600 mb-1">100%</div>
              <div className="font-serif font-bold text-slate-900 text-sm mb-1">Izin PBG & SLF Terbit</div>
              <p className="text-xs text-slate-500">Setiap bangunan fisik mengantongi izin resmi sebelum serah terima kunci.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-serif text-3xl font-bold text-gold-600 mb-1">Zero</div>
              <div className="font-serif font-bold text-slate-900 text-sm mb-1">Klaim Overbudget Liar</div>
              <p className="text-xs text-slate-500">Sistem kontrak fixed-price melindungi anggaran investasi pemilik properti.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-serif text-3xl font-bold text-gold-600 mb-1">6 Bln</div>
              <div className="font-serif font-bold text-slate-900 text-sm mb-1">Garansi Pemeliharaan</div>
              <p className="text-xs text-slate-500">Retensi perawatan penuh pasca serah terima fisik (BAST).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
