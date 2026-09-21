import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BlogSection from '../components/BlogSection';
import { BookOpen, Sparkles, TrendingUp, Tag, Mail } from 'lucide-react';

export default function BlogPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Wawasan, Regulasi & Berita' : 'Insights & Statutory News' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Header */}
      <section className="py-14 bg-white border-b border-slate-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3 border border-gold-300">
            {t.blog.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.blog.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Full Blog Section Component with search, category filtering & reader modal */}
      <BlogSection t={t} lang={lang} />

      {/* Editorial Topics Overview & Newsletter */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
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
              className="shrink-0 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors"
            >
              {lang === 'id' ? 'Ajukan Pertanyaan' : 'Ask Our Experts'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
