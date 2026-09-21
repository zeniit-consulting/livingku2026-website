import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  Receipt, 
  ArrowRight, 
  Calculator, 
  CheckCircle, 
  Sparkles,
  MapPin,
  Calendar,
  BookOpen
} from 'lucide-react';

export default function HomePage({ t, lang, onOpenConsultation }) {
  const serviceIcons = {
    design: Building2,
    construction: ShieldCheck,
    legal: FileCheck2,
    tax: Receipt,
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero t={t} lang={lang} onOpenConsultation={onOpenConsultation} />

      {/* 4 Core Pillars Value Proposition Strip */}
      <Features t={t} />

      {/* Services Highlight Section (Clean & Non-Overwhelming) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="wp-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-2">
                {t.services.badge}
              </span>
              <h2 className="wp-section-title text-slate-900">
                {t.services.title}
              </h2>
            </div>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 hover:text-gold-800 transition-colors group self-start md:self-auto"
            >
              <span>{lang === 'id' ? 'Lihat Semua Rincian Layanan' : 'Explore All Services in Detail'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.list.map((service) => {
              const Icon = serviceIcons[service.key] || Building2;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-wp hover:shadow-wp-card hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Layanan Terpadu LivingKu (${service.category})`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-0.5 rounded text-gold-400 text-[11px] font-semibold flex items-center gap-1">
                      <Icon className="w-3 h-3" />
                      <span>{service.category}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-gold-700 transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {service.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/layanan#${service.id}`}
                        className="text-xs font-bold text-slate-900 hover:text-gold-700 flex items-center gap-1"
                      >
                        <span>{lang === 'id' ? 'Spesifikasi & DED' : 'Specifications'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => onOpenConsultation(service.title)}
                        className="text-xs font-semibold text-gold-700 hover:underline"
                      >
                        {lang === 'id' ? 'Konsultasi' : 'Inquire'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RAB Estimator Teaser Card */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="wp-container">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold border border-gold-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>{t.estimator.badge}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                {lang === 'id' 
                  ? 'Ingin Mengetahui Estimasi Biaya Konstruksi & Perizinan Proyek Anda?' 
                  : 'Need a Fast Investment & Construction BOQ Estimate for Your Project?'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {lang === 'id'
                  ? 'Gunakan kalkulator interaktif kami untuk menghitung rentang RAB berdasarkan luas bangunan (m²), spesifikasi material, serta izin PBG dan PT PMA.'
                  : 'Use our interactive calculator to simulate preliminary budgets based on square meters, material grades, and licensing parameters.'}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                to="/simulasi-rab"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-md transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>{lang === 'id' ? 'Buka Kalkulator RAB Penuh' : 'Open Full RAB Calculator'}</span>
              </Link>
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
              >
                <span>{lang === 'id' ? 'Konsultasi Survei Lokasi' : 'Book Site Survey'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Preview (2 Top Items) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="wp-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-2">
                {t.portfolio.badge}
              </span>
              <h2 className="wp-section-title text-slate-900">
                {t.portfolio.title}
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 hover:text-gold-800 transition-colors group self-start md:self-auto"
            >
              <span>{lang === 'id' ? 'Lihat Semua Portofolio Proyek' : 'View Full Portfolio Gallery'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.portfolio.items.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-wp hover:shadow-wp-card transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Dokumentasi Proyek ${item.title} di ${item.location} - Lingkup: ${item.scope}`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded text-gold-400 text-xs font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                    <strong className="text-slate-800">Cakupan:</strong> {item.scope}
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Luas: {item.area}</span>
                    <Link to="/portofolio" className="font-bold text-slate-900 hover:text-gold-700 flex items-center gap-1">
                      <span>Rincian Proyek</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Insights (2 Top Posts) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="wp-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-2">
                {t.blog.badge}
              </span>
              <h2 className="wp-section-title text-slate-900">
                {t.blog.title}
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-700 hover:text-gold-800 transition-colors group self-start md:self-auto"
            >
              <span>{lang === 'id' ? 'Buka Halaman Blog Lengkap' : 'Read Full Editorial Blog'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.blog.posts.slice(0, 2).map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-wp hover:shadow-wp-card transition-all flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Foto Sampul Artikel Wawasan LivingKu: ${post.title} oleh ${post.author}`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded text-gold-400 text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-gold-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/blog`}
                      className="text-xs font-bold text-slate-900 hover:text-gold-700 flex items-center gap-1"
                    >
                      <span>{lang === 'id' ? 'Baca Artikel Penuh' : 'Read Full Guide'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-slate-400">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Consultation Callout with Ref Code LK-HOME-26 passed to handler */}
      <section className="py-14 bg-amber-50/70 border-t border-b border-amber-200/80 text-slate-900">
        <div className="wp-container text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block border border-gold-300">
            {lang === 'id' ? 'Konsultasi Terpadu' : 'Integrated Advisory'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {lang === 'id' ? 'Siap Memulai Proyek Anda dengan LivingKu?' : 'Ready to Start Your Project with LivingKu?'}
          </h3>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            {lang === 'id'
              ? 'Konsultasikan rencana arsitektur, RAB konstruksi, perizinan PMA/PMDN, atau pelaporan pajak Anda dengan konsultan berpengalaman kami.'
              : 'Consult with our licensed architects, estimators, legal counsel, and certified tax advisors.'}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenConsultation('Konsultasi Umum (Ref: LK-HOME-26)')}
              className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              {lang === 'id' ? 'Ajukan Konsultasi Sekarang' : 'Request Consultation Now'}
            </button>
            <Link
              to="/kontak"
              className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors shadow-sm"
            >
              {lang === 'id' ? 'Kunjungi Halaman Kontak & Kantor' : 'Visit Contact & Offices Page'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
