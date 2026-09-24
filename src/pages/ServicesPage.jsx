import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { trackWhatsAppLead } from '../utils/gtm';
import { 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  Receipt, 
  Check, 
  Clock, 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Download
} from 'lucide-react';

const WHATSAPP_NUMBER = '628970065402';

const SERVICE_CODES = {
  design: 'LK-SRV-DES',
  construction: 'LK-SRV-KTR',
  legal: 'LK-SRV-PMA',
  tax: 'LK-SRV-TAX',
};

const getServiceWhatsAppUrl = (service, currentLang) => {
  const code = SERVICE_CODES[service.key || service.id] || `LK-SRV-${(service.id || 'GEN').toUpperCase()}`;
  
  const messages = {
    design: {
      id: `Halo Livingku, saya ingin berkonsultasi mengenai Layanan Desain Interior & Eksterior (Kode Layanan: ${code}).\n\nMohon informasi terkait:\n- Diskusi konsep awal & portofolio\n- Estimasi waktu pengerjaan & anggaran\n\nTerima kasih.`,
      en: `Hello Livingku, I would like to consult regarding Interior & Exterior Design Services (Service Code: ${code}).\n\nCould you please share details regarding:\n- Conceptual discovery & portfolio review\n- Timeline & budgeting\n\nThank you.`,
    },
    construction: {
      id: `Halo Livingku, saya ingin berkonsultasi mengenai Jasa Konstruksi & Estimasi RAB (Kode Layanan: ${code}).\n\nMohon informasi terkait:\n- Survei lokasi & pengecekan preliminary\n- Penyusunan Bill of Quantity (BQ) / RAB transparan\n\nTerima kasih.`,
      en: `Hello Livingku, I would like to inquire about Construction & RAB Estimator Services (Service Code: ${code}).\n\nCould you please share details regarding:\n- Site survey & preliminary assessment\n- Itemized Bill of Quantities (BOQ) calculation\n\nThank you.`,
    },
    legal: {
      id: `Halo Livingku, saya ingin berkonsultasi mengenai Pengurusan Legalitas Usaha / Pendirian PT PMA/PMDN & PBG (Kode Layanan: ${code}).\n\nMohon informasi terkait:\n- Persyaratan pendirian & izin OSS-RBA\n- Estimasi alur & waktu proses resmi\n\nTerima kasih.`,
      en: `Hello Livingku, I need assistance with Legal Incorporation for PT PMA / PMDN & Building Permits (Service Code: ${code}).\n\nCould you please share information regarding:\n- Legal requirements & OSS-RBA licensing\n- Official timeline & process\n\nThank you.`,
    },
    tax: {
      id: `Halo Livingku, saya ingin berkonsultasi mengenai Pengurusan Akuntansi & Perpajakan Korporasi (Kode Layanan: ${code}).\n\nMohon informasi terkait:\n- Layanan pembukuan & pelaporan SPT/PPN (e-Faktur)\n- Paket retainer pendampingan pajak\n\nTerima kasih.`,
      en: `Hello Livingku, I would like to consult regarding Corporate Accounting & Tax Advisory (Service Code: ${code}).\n\nCould you please share details regarding:\n- Bookkeeping & periodic tax filings (VAT/Corporate Income Tax)\n- Retainer advisory packages\n\nThank you.`,
    },
  };

  const serviceKey = service.key || service.id;
  const msgObj = messages[serviceKey];
  let text = '';

  if (msgObj) {
    text = currentLang === 'id' ? msgObj.id : msgObj.en;
  } else {
    text = currentLang === 'id'
      ? `Halo Livingku, saya tertarik dengan layanan ${service.title} (Kode Layanan: ${code}). Mohon informasi lebih lanjut untuk penjadwalan konsultasi. Terima kasih.`
      : `Hello Livingku, I am interested in your ${service.title} service (Service Code: ${code}). Please share more details and consultation availability. Thank you.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const getBundleWhatsAppUrl = (currentLang) => {
  const code = 'LK-SRV-ALL';
  const text = currentLang === 'id'
    ? `Halo Livingku, saya tertarik dengan Paket Kustom Terpadu (Kombinasi Desain + Konstruksi + Legalitas + Pajak) (Kode Layanan: ${code}).\n\nMohon panduan untuk konsultasi proyek terintegrasi satu atap (One-Stop Turnkey Solution).\n\nTerima kasih.`
    : `Hello Livingku, I am interested in the Integrated Custom Package (Design + Build + Legal + Tax) (Service Code: ${code}).\n\nPlease guide me with the one-stop turnkey project consultation.\n\nThank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export default function ServicesPage({ t, lang, onOpenConsultation }) {
  const { hash } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const icons = {
    design: Building2,
    construction: ShieldCheck,
    legal: FileCheck2,
    tax: Receipt,
  };

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const breadcrumbs = [
    { label: lang === 'id' ? 'Layanan Terpadu' : 'Integrated Services' }
  ];

  const workflowStages = lang === 'id' ? [
    {
      step: '01',
      title: 'Konsultasi Konsep & Studi Kelayakan',
      desc: 'Analisis lahan, pengecekan tata ruang (RTRW/KBLI), dan penentuan arah desain awal.',
    },
    {
      step: '02',
      title: 'Desain Arsitektur & RAB Terperinci (DED)',
      desc: 'Penyusunan gambar kerja lengkap, render 3D 4K, dan Bill of Quantity (BQ) transparan.',
    },
    {
      step: '03',
      title: 'Perizinan Legalitas (OSS, PBG & PMA)',
      desc: 'Pengurusan akta notaris, pengesahan Kemenkumham, NIB OSS-RBA, dan persetujuan gedung PBG.',
    },
    {
      step: '04',
      title: 'Konstruksi Fisik & Pengawasan Lapangan',
      desc: 'Pengerjaan struktur & finishing berstandar SNI diawasi Site Manager dengan laporan Kurva S mingguan.',
    },
    {
      step: '05',
      title: 'Serah Terima (BAST) & Kepatuhan Pajak',
      desc: 'Garansi pemeliharaan 3-6 bulan, sertifikat SLF, serta tata kelola e-Faktur PPN 12% dan SPT.',
    },
  ] : [
    {
      step: '01',
      title: 'Feasibility & Conceptual Discovery',
      desc: 'Zoning verification (RTRW/KBLI), land assessment, and preliminary architectural briefs.',
    },
    {
      step: '02',
      title: 'Architectural DED & Itemized BOQ',
      desc: 'Complete detailed engineering blueprints, 4K renderings, and line-item Bill of Quantities.',
    },
    {
      step: '03',
      title: 'Licensing & Entity Incorporation',
      desc: 'Notary deeds, Ministry approvals, OSS-RBA NIB registration, and statutory PBG building permits.',
    },
    {
      step: '04',
      title: 'Physical Construction & Supervision',
      desc: 'SNI-certified civil execution supervised by certified project managers with weekly S-Curve tracking.',
    },
    {
      step: '05',
      title: 'Turnkey Handover & Tax Governance',
      desc: '3-to-6 month retention warranty, SLF occupancy certificate, and ongoing corporate tax compliance.',
    },
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
            {t.services.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Main Service Pillars Container */}
      <div className="wp-container py-12">
        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'id' ? 'Semua 4 Layanan' : 'All 4 Services'}
          </button>
          {t.services.list.map((item) => {
            const Icon = icons[item.key] || Building2;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCategory(item.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === item.id
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

        {/* Services Detail Dossiers */}
        <div className="space-y-16">
          {t.services.list
            .filter(s => selectedCategory === 'all' || s.id === selectedCategory)
            .map((service, index) => {
              const Icon = icons[service.key] || Building2;
              const isEven = index % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-wp scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Media Frame */}
                    <div className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <img
                        src={service.image}
                        alt={`Layanan ${service.title} - Spesifikasi Mutu SNI & Deliverables Livingku.ID Indonesia`}
                        width="800"
                        height="600"
                        decoding="async"
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md text-gold-400 text-xs font-semibold border border-slate-700 flex items-center gap-1.5">
                        <Icon className="w-4 h-4" />
                        <span>{service.category}</span>
                      </div>
                    </div>

                    {/* Content Frame */}
                    <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <div className="text-xs font-bold text-gold-700 uppercase tracking-wider mb-2">
                          {service.category}
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {service.summary}
                        </p>

                        <div className="space-y-3 mb-8">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                            {lang === 'id' ? 'Item Pekerjaan & Standar Mutu:' : 'Scope & Quality Deliverables:'}
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Specs & Booking */}
                      <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1 text-xs text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-gold-600" />
                            <span><strong>{lang === 'id' ? 'Estimasi Durasi:' : 'Estimated Timeline:'}</strong> {service.timeline}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Package className="w-4 h-4 text-gold-600" />
                            <span><strong>{lang === 'id' ? 'Output Utama:' : 'Key Deliverable:'}</strong> {service.deliverable}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <a
                            href={getServiceWhatsAppUrl(service, lang)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppLead('services_card', service.title)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                          >
                            <WhatsAppIcon className="w-4 h-4 fill-white" />
                            <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>

        {/* Turnkey 5-Stage Workflow */}
        <section className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3">
              {lang === 'id' ? 'Alur Kerja Terpadu' : 'Turnkey Delivery Process'}
            </span>
            <h3 className="wp-section-title text-slate-900 mb-3">
              {lang === 'id' ? 'Bagaimana Livingku.ID Bekerja dari Awal Hingga Selesai' : 'How Livingku.ID Executes Projects End-to-End'}
            </h3>
            <p className="wp-section-subtitle mx-auto">
              {lang === 'id'
                ? 'Sistem alur terintegrasi memastikan arsitektur, RAB, legalitas, dan pajak berjalan harmonis tanpa friksi.'
                : 'A synchronized workflow synchronizing architectural design, itemized budgeting, corporate permits, and fiscal filings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workflowStages.map((wf, wIdx) => (
              <div
                key={wf.step || wIdx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif font-black text-3xl text-gold-600/30 block mb-2">
                    {wf.step}
                  </span>
                  <h4 className="font-serif text-base font-bold text-slate-900 mb-2">
                    {wf.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-turkish-50/80 border border-turkish-200/90 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/70 px-2.5 py-0.5 rounded border border-gold-200 inline-block mb-1">
              {lang === 'id' ? 'Paket Kustom Terpadu' : 'Custom Bundle'}
            </span>
            <h4 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              {lang === 'id' ? 'Punya Kebutuhan Khusus atau Paket Kombinasi?' : 'Have Custom Project Requirements?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              {lang === 'id'
                ? 'Diskusikan paket lengkap kombinasi Desain + Kontraktor + PMA + Pajak untuk efisiensi biaya maksimal.'
                : 'Discuss bundled engagements combining architecture, general contracting, PT PMA, and tax advisory.'}
            </p>
          </div>
          <a
            href={getBundleWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
