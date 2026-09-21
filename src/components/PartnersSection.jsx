import React, { useState } from 'react';
import { 
  Building2, 
  Landmark, 
  Layers, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink 
} from 'lucide-react';

export default function PartnersSection({ t }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    banking: Landmark,
    suppliers: Layers,
    institutions: ShieldCheck,
  };

  const filteredPartners = activeCategory === 'all'
    ? t.partners.list
    : t.partners.list.filter(p => p.category === activeCategory);

  return (
    <section id="partners" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="wp-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-3">
            {t.partners.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.partners.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-gold-400 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.partners.categories.all}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('banking')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'banking'
                ? 'bg-slate-900 text-gold-400 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.partners.categories.banking}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('suppliers')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'suppliers'
                ? 'bg-slate-900 text-gold-400 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.partners.categories.suppliers}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('institutions')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'institutions'
                ? 'bg-slate-900 text-gold-400 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.partners.categories.institutions}
          </button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredPartners.map((partner, idx) => {
            const Icon = categoryIcons[partner.category] || Building2;
            return (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-gold-400 hover:shadow-wp transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-600 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      {partner.category}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-gold-600 transition-colors" />
                  </div>

                  {/* Logo Badge Styling */}
                  <div className="h-12 flex items-center justify-start">
                    <div className="font-serif font-black text-lg tracking-wider text-slate-800 group-hover:text-slate-950 transition-colors">
                      {partner.logoText}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors">
                    {partner.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 pt-3 border-t border-slate-100 mt-2">
                  {partner.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-1">
                Jaminan Autentisitas Material & Integritas Legal
              </div>
              <div className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                {t.partners.quote}
              </div>
            </div>
          </div>

          <a 
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs tracking-wide shadow-md transition-colors"
          >
            Verifikasi Kerjasama
          </a>
        </div>
      </div>
    </section>
  );
}
