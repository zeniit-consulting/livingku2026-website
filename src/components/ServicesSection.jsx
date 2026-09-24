import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  Receipt, 
  Check, 
  Clock, 
  Package, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function ServicesSection({ t, onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const icons = {
    design: Building2,
    construction: ShieldCheck,
    legal: FileCheck2,
    tax: Receipt,
  };

  const filteredServices = activeTab === 'all' 
    ? t.services.list 
    : t.services.list.filter(s => s.id === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="wp-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3">
            {t.services.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.services.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Tab Navigation (WordPress Category Filter style) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Semua Layanan ({t.services.list.length})
          </button>
          {t.services.list.map((item) => {
            const Icon = icons[item.key] || Building2;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 text-gold-500" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards List */}
        <div className="space-y-12">
          {filteredServices.map((service, index) => {
            const Icon = icons[service.key] || Building2;
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={service.id}
                id={`services-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-wp hover:shadow-wp-card transition-all duration-300 scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] overflow-hidden ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img 
                      src={service.image} 
                      alt={`Layanan ${service.title} - ${service.category} Livingku.ID Indonesia`}
                      width="800"
                      height="600"
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md text-gold-400 text-xs font-semibold border border-slate-700 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{service.category}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-50 text-gold-700 text-xs font-semibold mb-3 border border-gold-200">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{service.category}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-base leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      {/* Key features checklist */}
                      <div className="space-y-2.5 mb-6">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Cakupan Pekerjaan & Keunggulan:
                        </span>
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                            <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata bar & CTA */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-gold-600" />
                          <span><strong>Durasi:</strong> {service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Package className="w-4 h-4 text-gold-600" />
                          <span><strong>Output:</strong> {service.deliverable}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectService(service.title)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-gold-300 font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                          <span>Konsultasikan Layanan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
