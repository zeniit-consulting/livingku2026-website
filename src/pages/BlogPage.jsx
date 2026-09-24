import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BlogSection from '../components/BlogSection';
import { BookOpen, Sparkles, TrendingUp, Tag, Mail, ArrowUpRight } from 'lucide-react';

export default function BlogPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Berita & Wawasan' : 'News & Insights' }
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
            {t.blog.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Full Blog Section Component with search, category filtering & reader modal */}
      <BlogSection t={t} lang={lang} hideHeader={true} />

      {/* Editorial Topics Overview & Newsletter */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-turkish-50/80 border border-turkish-200/90 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-gold-700 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Konsultasi Penulis' : 'Editorial Desk'}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                {lang === 'id' ? 'Butuh Kajian Khusus Mengenai Lahan atau Bisnis Anda?' : 'Need a Specific Advisory Review for Your Property?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl leading-relaxed">
                {lang === 'id'
                  ? 'Kirimkan pertanyaan regulasi KBLI, PBG, atau strategi PPN proyek kepada tim redaksi & konsultan hukum kami.'
                  : 'Submit questions regarding OSS zoning, building permits, or construction VAT directly to our advisors.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation('Konsultasi Regulasi & Pajak (Ref: LK-BLOG-26)')}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-600 hover:bg-gold-500 text-white font-bold text-xs sm:text-sm shadow transition-colors group"
            >
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>{lang === 'id' ? 'Ajukan Pertanyaan' : 'Ask Our Experts'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
