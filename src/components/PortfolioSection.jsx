import React, { useState } from 'react';
import { MapPin, Calendar, Maximize2, ArrowUpRight } from 'lucide-react';

export default function PortfolioSection({ t, onOpenConsultation, hideHeader = false }) {
  const [activeCategory, setActiveCategory] = useState('Semua Proyek');

  const filteredItems = activeCategory === 'Semua Proyek' || activeCategory === 'All Projects'
    ? t.portfolio.items
    : t.portfolio.items.filter(item => item.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="portfolio" className={`${hideHeader ? 'py-10' : 'py-20'} bg-slate-50 border-b border-slate-200 scroll-mt-20`}>
      <div className="wp-container">
        {/* Section Header (Optional) */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3">
              {t.portfolio.badge}
            </span>
            <h2 className="wp-section-title text-slate-900 mb-4">
              {t.portfolio.title}
            </h2>
            <p className="wp-section-subtitle mx-auto">
              {t.portfolio.subtitle}
            </p>
          </div>
        )}

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {t.portfolio.categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-wp hover:shadow-wp-card transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Dokumentasi Realisasi Proyek ${item.title} di ${item.location} - Lingkup: ${item.scope}`} 
                  width="800"
                  height="500"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded text-gold-400 text-xs font-semibold">
                  {item.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
                    <span className="font-semibold text-slate-800">Cakupan Pekerjaan:</span> {item.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => onOpenConsultation('Konsultasi Portofolio Serupa (Ref: LK-PORT-26)')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Konsultasikan Proyek Serupa</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
