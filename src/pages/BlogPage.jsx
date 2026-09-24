import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BlogSection from '../components/BlogSection';
import { BookOpen, Sparkles, TrendingUp, Tag, Mail } from 'lucide-react';

export default function BlogPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Berita' : 'News' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Clean Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Screen reader & crawler primary semantic heading */}
      <h1 className="sr-only">
        {lang === 'id' ? 'Berita & Wawasan Regulasi Konstruksi, OSS & Pajak Properti LivingKu' : 'LivingKu Construction, Licensing & Property Tax Insights'}
      </h1>

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
