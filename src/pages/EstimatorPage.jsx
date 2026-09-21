import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RabEstimator from '../components/RabEstimator';
import { 
  Calculator, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  FileSpreadsheet,
  AlertCircle 
} from 'lucide-react';

export default function EstimatorPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Simulasi Biaya & RAB' : 'Cost & BOQ Estimator' }
  ];

  const comparisons = lang === 'id' ? [
    {
      element: 'Pondasi & Struktur',
      standard: 'Pondasi Batu Kali + Footplat Beton K-250',
      premium: 'Bored Pile / Tiang Pancang + Beton Bertulang K-300 SNI',
      luxury: 'Struktur Tahan Gempa Khusus + Post-Tension Slab K-350+',
    },
    {
      element: 'Lantai & Dinding',
      standard: 'Keramik 60x60 motif polos + Bata Ringan plester aci',
      premium: 'Homogeneous Tile 80x80 / Granit tile + Finishing acian halus',
      luxury: 'Marmer Import (Travertine/Statuario) + Solid Teak Wood Parquet',
    },
    {
      element: 'Sanitasi & Fitting',
      standard: 'Sanitair American Standard / TOTO Eco Standard',
      premium: 'TOTO Signature Series + Kaca Tempered Shower 10mm',
      luxury: 'Grohe / Kohler + Bathtub Freestanding & Sensor Automation',
    },
    {
      element: 'Kusen & Pintu',
      standard: 'Aluminium 3 inch Alexindo + Pintu Double Teakwood',
      premium: 'Aluminium Powder Coating YKK 4 inch + Kayu Kamper Samarinda',
      luxury: 'Schuco / YKK Nexsta High Performance + Kayu Ulin / Jati Solid',
    },
  ] : [
    {
      element: 'Foundation & Framing',
      standard: 'Rubble Stone + Footing Reinforced Concrete K-250',
      premium: 'Deep Bored Pile + Reinforced Structural Concrete K-300',
      luxury: 'Seismic Engineered Framing + Post-Tension Concrete K-350+',
    },
    {
      element: 'Flooring & Walls',
      standard: '60x60 Ceramic Tiles + Aerated Autoclaved Concrete',
      premium: '80x80 Homogeneous Granit Tiles + Skim Coat Finish',
      luxury: 'Imported Marble (Travertine/Statuario) + Solid Teak Flooring',
    },
    {
      element: 'Sanitary & Fittings',
      standard: 'American Standard / TOTO Eco Series',
      premium: 'TOTO Premium Series + 10mm Tempered Glass Enclosures',
      luxury: 'Grohe / Kohler + Freestanding Bathtubs & Smart Sensor Bidets',
    },
    {
      element: 'Doors & Fenestrations',
      standard: '3-inch Aluminum Alexindo + Engineered Timber Doors',
      premium: '4-inch Powder-Coated YKK + Solid Samarinda Camphor Wood',
      luxury: 'Schuco / YKK Nexsta Thermal Break + Solid Teak / Ironwood',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Page Header */}
      <section className="py-14 bg-white border-b border-slate-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 text-gold-700 text-xs font-semibold mb-3 border border-gold-300">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kalkulator Investasi Real Time' : 'Real-Time Investment Calculator'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {lang === 'id' ? 'Simulasi Biaya Konstruksi & Perizinan (RAB)' : 'Interactive Construction & Legal BOQ Simulator'}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {lang === 'id'
              ? 'Dapatkan estimasi akurat berbasis standar AHSP SNI 2026 sebelum menyusun Gambar Kerja Detail (DED).'
              : 'Calculate reliable preliminary budgets benchmarked against official 2026 Indonesian construction standards.'}
          </p>
        </div>
      </section>

      {/* Full RAB Estimator Component */}
      <RabEstimator t={t} lang={lang} />

      {/* Specification Comparison Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="wp-container max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-2">
              {lang === 'id' ? 'Tolak Ukur Material' : 'Material Benchmarks'}
            </span>
            <h3 className="wp-section-title text-slate-900">
              {lang === 'id' ? 'Perbandingan Tingkatan Spesifikasi Bangunan' : 'Specification Tier Comparison Guide'}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'id'
                ? 'Panduan standar bahan yang digunakan dalam estimasi biaya LivingKu.'
                : 'Understanding the material grades factored into LivingKu budget models.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="p-3 sm:p-4 font-serif font-bold text-slate-900">{lang === 'id' ? 'Komponen Pekerjaan' : 'Element'}</th>
                  <th className="p-3 sm:p-4 font-serif font-bold text-slate-700">Standar (1.0x)</th>
                  <th className="p-3 sm:p-4 font-serif font-bold text-gold-700">Premium (1.35x)</th>
                  <th className="p-3 sm:p-4 font-serif font-bold text-amber-700">Luxury (1.8x)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">{row.element}</td>
                    <td className="p-3 sm:p-4 text-slate-600">{row.standard}</td>
                    <td className="p-3 sm:p-4 text-slate-800 font-medium bg-gold-50/40">{row.premium}</td>
                    <td className="p-3 sm:p-4 text-slate-900 font-medium bg-amber-50/30">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Guarantee notice */}
          <div className="mt-8 p-5 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5">
                {lang === 'id' ? 'Komitmen Transparansi Harga LivingKu:' : 'LivingKu Price Transparency Guarantee:'}
              </strong>
              {lang === 'id'
                ? 'Kami tidak menerapkan markup sepihak pada material. Kontrak kerja mencakup Bill of Quantity (BQ) terperinci dengan spesifikasi merk yang jelas, sehingga Anda memegang kendali penuh atas anggaran Anda.'
                : 'We operate with zero hidden contractor markups. Every contract is accompanied by a transparent line-item BOQ with clear manufacturer specifications.'}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
