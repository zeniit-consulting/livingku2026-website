import React, { useState } from 'react';
import { 
  Type, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  RefreshCw, 
  Sliders, 
  Layers,
  Sparkles,
  Award
} from 'lucide-react';
import ImageField from './ImageField';

export default function GeneralCopywritingCMS({ currentContent, onSaveSection, onResetDefault }) {
  const [langTab, setLangTab] = useState('id'); // 'id' or 'en'
  const data = currentContent[langTab] || {};

  const [topBar, setTopBar] = useState(data.topBar || {});
  const [hero, setHero] = useState(data.hero || {});
  const [announcement, setAnnouncement] = useState(data.announcement || {});
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if lang changes
  const handleLangChange = (newLang) => {
    setLangTab(newLang);
    const nextData = currentContent[newLang] || {};
    setTopBar(nextData.topBar || {});
    setHero(nextData.hero || {});
    setAnnouncement(nextData.announcement || {});
  };

  const handleSave = () => {
    onSaveSection(langTab, 'topBar', topBar);
    onSaveSection(langTab, 'hero', hero);
    onSaveSection(langTab, 'announcement', announcement);

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Language tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Edit Bahasa:
          </span>
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => handleLangChange('id')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                langTab === 'id' ? 'bg-white shadow text-turkish-800' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇮🇩 Bahasa Indonesia
            </button>
            <button
              type="button"
              onClick={() => handleLangChange('en')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                langTab === 'en' ? 'bg-white shadow text-turkish-800' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (confirm('Kembalikan seluruh teks ke konfigurasi awal?')) {
                onResetDefault();
              }
            }}
            className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-rose-600"
          >
            Reset Default
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <RefreshCw className="w-4 h-4" />}
            <span>{savedSuccess ? 'Perubahan Disimpan!' : 'Simpan Perubahan Teks'}</span>
          </button>
        </div>
      </div>

      {/* 1. Announcement Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Sparkles className="w-4 h-4 text-gold-500" />
          <h4 className="font-serif text-sm font-bold text-slate-900">
            Pengumuman &amp; Banner Notifikasi Atas (Announcement)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Label Badge</label>
            <input
              type="text"
              value={announcement.tag || ''}
              onChange={(e) => setAnnouncement({ ...announcement, tag: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Isi Pesan Pengumuman</label>
            <input
              type="text"
              value={announcement.text || ''}
              onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>
        </div>
      </div>

      {/* 2. Top Bar Contact Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Phone className="w-4 h-4 text-turkish-600" />
          <h4 className="font-serif text-sm font-bold text-slate-900">
            Header Top Bar (Kontak Hotline, Email &amp; Kantor)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Hotline / WhatsApp</label>
            <input
              type="text"
              value={topBar.hotline || ''}
              onChange={(e) => setTopBar({ ...topBar, hotline: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Email Kantor</label>
            <input
              type="text"
              value={topBar.email || ''}
              onChange={(e) => setTopBar({ ...topBar, email: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Jam Operasional</label>
            <input
              type="text"
              value={topBar.officeHours || ''}
              onChange={(e) => setTopBar({ ...topBar, officeHours: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Alamat Kantor</label>
            <input
              type="text"
              value={topBar.locations || ''}
              onChange={(e) => setTopBar({ ...topBar, locations: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>
        </div>
      </div>

      {/* 3. Hero Section Copywriting */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Type className="w-4 h-4 text-turkish-600" />
          <h4 className="font-serif text-sm font-bold text-slate-900">
            Teks Hero Section (Headline &amp; Subtitle Beranda)
          </h4>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Badge Atas</label>
            <input
              type="text"
              value={hero.badge || ''}
              onChange={(e) => setHero({ ...hero, badge: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Judul Utama (Awalan)</label>
              <input
                type="text"
                value={hero.titlePre || ''}
                onChange={(e) => setHero({ ...hero, titlePre: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Kata Highlight (Warna Biru)</label>
              <input
                type="text"
                value={hero.titleHighlight || ''}
                onChange={(e) => setHero({ ...hero, titleHighlight: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 text-turkish-700 font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Judul Utama (Akhiran)</label>
              <input
                type="text"
                value={hero.titlePost || ''}
                onChange={(e) => setHero({ ...hero, titlePost: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Deskripsi / Subtitle Hero</label>
            <textarea
              rows={3}
              value={hero.description || ''}
              onChange={(e) => setHero({ ...hero, description: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Teks Tombol CTA Utama</label>
              <input
                type="text"
                value={hero.primaryCta || ''}
                onChange={(e) => setHero({ ...hero, primaryCta: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Teks Tombol CTA Kedua</label>
              <input
                type="text"
                value={hero.secondaryCta || ''}
                onChange={(e) => setHero({ ...hero, secondaryCta: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
