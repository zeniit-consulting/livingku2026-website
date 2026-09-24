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
      {/* Clean Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Screen reader & crawler primary semantic heading */}
      <h1 className="sr-only">
        {lang === 'id' ? 'Portofolio Karya & Proyek Konstruksi LivingKu Indonesia' : 'LivingKu Architecture & Construction Projects Portfolio'}
      </h1>

      {/* Portfolio Section with filtered grid directly */}
      <PortfolioSection t={t} onOpenConsultation={onOpenConsultation} hideHeader={true} />

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
