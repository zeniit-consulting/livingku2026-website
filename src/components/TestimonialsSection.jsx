import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection({ lang }) {
  const testimonials = lang === 'id' ? [
    {
      name: "Marcus Vance",
      role: "Managing Director, Horizon Hospitality Group",
      project: "Pembangunan Luxury Villa 5 Unit & Pendirian PT PMA di Canggu, Bali",
      content: "LivingKu adalah game-changer. Menggabungkan arsitektur villa dengan pengurusan PT PMA dan izin PBG dalam satu tim menghemat waktu kami lebih dari 4 bulan. Eksekusi RAB sangat akurat tanpa biaya tersembunyi.",
      rating: 5,
    },
    {
      name: "Dian Anggraini",
      role: "CEO & Co-Founder, Fintech Nusantara",
      project: "Office Fit-Out SCBD Jakarta & Retainer Pajak Bulanan PPN 12%",
      content: "Kualitas pengerjaan interior kantor kami di SCBD sangat presisi. Nilai tambah terbesarnya adalah tim akuntansi LivingKu yang langsung mendampingi administrasi e-Faktur dan kepatuhan SPT tanpa kami perlu repot rekrut tim terpisah.",
      rating: 5,
    },
    {
      name: "Christopher Lee",
      role: "Property Investor, Singapore",
      project: "Pembangunan Resort & Pengurusan Visa Investor E23 di Labuan Bajo",
      content: "Sebagai investor asing, regulasi pertanahan dan legalitas di Indonesia bisa sangat membingungkan. LivingKu membimbing kami langkah demi langkah dengan transparansi penuh dari kalkulasi awal hingga izin operasional.",
      rating: 5,
    },
  ] : [
    {
      name: "Marcus Vance",
      role: "Managing Director, Horizon Hospitality Group",
      project: "5-Unit Luxury Villa Construction & PT PMA Setup in Canggu, Bali",
      content: "LivingKu is a game-changer. Unifying architectural design, physical construction, and corporate PT PMA / PBG permits under one accountable team saved us more than 4 months. The BOQ estimate was remarkably spot-on.",
      rating: 5,
    },
    {
      name: "Dian Anggraini",
      role: "CEO & Co-Founder, Fintech Nusantara",
      project: "SCBD Jakarta Office Fit-Out & Monthly Corporate Tax Retainer",
      content: "The workmanship on our SCBD headquarters is immaculate. Their accounting desk took over our e-Faktur VAT reconciliation and corporate filings seamlessly from day one.",
      rating: 5,
    },
    {
      name: "Christopher Lee",
      role: "Property Investor, Singapore",
      project: "Resort Development & E23 Investor KITAS in Labuan Bajo",
      content: "As an overseas investor, foreign ownership regulations can be daunting. LivingKu provided complete statutory clarity from initial budget simulations to operational permits.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="wp-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3 border border-gold-300">
            {lang === 'id' ? 'Ulasan Klien Terverifikasi' : 'Verified Client Reviews'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {lang === 'id' ? 'Kepercayaan Pemilik Properti & Korporasi' : 'Trusted by Property Developers & Executives'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mx-auto">
            {lang === 'id' 
              ? 'Pengalaman nyata sinergi konstruksi, arsitektur, dan legalitas LivingKu.'
              : 'Authentic testimonials showcasing our integrated engineering and regulatory governance.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-gold-500/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-600 to-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
                    </div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>

                <div className="mt-2.5 text-[11px] text-gold-800 font-medium bg-amber-50/80 px-2.5 py-1 rounded border border-amber-200/60 line-clamp-1">
                  Proyek: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
