import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PartnersSection from '../components/PartnersSection';
import { 
  Building2, 
  Landmark, 
  Layers, 
  ShieldCheck, 
  CheckCircle, 
  Handshake, 
  FileCheck,
  Send 
} from 'lucide-react';

export default function PartnersPage({ t, lang, onOpenConsultation }) {
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    category: 'Material Supplier',
    contactPerson: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [applied, setApplied] = useState(false);

  const breadcrumbs = [
    { label: lang === 'id' ? 'Mitra Strategis' : 'Strategic Partners' }
  ];

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Header */}
      <section className="py-14 bg-white border-b border-slate-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0ea8a4 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3 border border-gold-300">
            {t.partners.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {t.partners.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {t.partners.subtitle}
          </p>
        </div>
      </section>

      {/* Directory Grid Component */}
      <PartnersSection t={t} />

      {/* Vendor & Partner Criteria */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-2">
              {lang === 'id' ? 'Standar Kerjasama' : 'Partnership Standards'}
            </span>
            <h3 className="wp-section-title text-slate-900">
              {lang === 'id' ? 'Kriteria Mitra & Prinsipal Material LivingKu' : 'LivingKu Partner & Supplier Criteria'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-serif font-bold text-slate-900 mb-1">
                {lang === 'id' ? 'Sertifikasi Resmi & SNI' : 'Certified Quality'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'id'
                  ? 'Setiap material konstruksi wajib memiliki sertifikat SNI dan uji laboratorium pabrikan.'
                  : 'All construction materials must satisfy official SNI standards and manufacturer lab certifications.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <FileCheck className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-serif font-bold text-slate-900 mb-1">
                {lang === 'id' ? 'Faktur Pajak Valid' : 'Tax Compliance'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'id'
                  ? 'Mitra wajib merupakan Pengusaha Kena Pajak (PKP) yang menerbitkan e-Faktur PPN 12% resmi.'
                  : 'Partners must be registered taxable enterprises (PKP) providing genuine 12% VAT electronic tax invoices.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Handshake className="w-6 h-6 text-gold-600 mb-3" />
              <h4 className="font-serif font-bold text-slate-900 mb-1">
                {lang === 'id' ? 'Garansi Purna Jual' : 'Warranty & Support'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'id'
                  ? 'Dukungan penggantian material cacat pabrik secara cepat tanpa menghambat timeline proyek.'
                  : 'Direct replacement support for defective materials without delaying project timelines.'}
              </p>
            </div>
          </div>

          {/* Supplier Application Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-turkish-50/70 border border-turkish-200/80 text-slate-900 shadow-sm">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {lang === 'id' ? 'Tertarik Menjadi Mitra Vendor / Suplier LivingKu?' : 'Interested in Becoming a LivingKu Partner / Vendor?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 font-light">
              {lang === 'id'
                ? 'Kirimkan profil perusahaan dan katalog material Anda kepada divisi pengadaan LivingKu.'
                : 'Submit your company deck and product catalog to LivingKu procurement.'}
            </p>

            {applied ? (
              <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'id'
                    ? 'Terima kasih! Informasi kemitraan Anda telah diterima divisi pengadaan kami.'
                    : 'Thank you! Your partnership application has been forwarded to procurement.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={lang === 'id' ? 'Nama Perusahaan / Merk' : 'Company / Brand Name'}
                    value={partnerForm.companyName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-gold-500"
                  />
                  <select
                    value={partnerForm.category}
                    onChange={(e) => setPartnerForm({ ...partnerForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-gold-500"
                  >
                    <option value="Material Supplier">Material Supplier</option>
                    <option value="Finishing & Interior Decor">Finishing & Interior Decor</option>
                    <option value="Banking & Financial Partner">Banking & Financial Partner</option>
                    <option value="Legal & Notary Associate">Legal & Notary Associate</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={lang === 'id' ? 'Nama Kontak Person' : 'Contact Person'}
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-gold-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={lang === 'id' ? 'Nomor WhatsApp' : 'WhatsApp Number'}
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{lang === 'id' ? 'Kirim Pendaftaran Mitra' : 'Submit Partner Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
