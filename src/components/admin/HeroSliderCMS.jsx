import React, { useState } from 'react';
import { 
  Building2, 
  Plus, 
  Trash2, 
  Check, 
  RefreshCw,
  Image as ImageIcon,
  Play
} from 'lucide-react';
import ImageField from './ImageField';

export default function HeroSliderCMS({ onSaveSlides }) {
  // Load initial slides from localStorage or defaults
  const [slides, setSlides] = useState(() => {
    try {
      const saved = localStorage.getItem('livingku_hero_slides');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
        alt: "Arsitektur Villa Modern Tropis LivingKu Indonesia",
        category: "Arsitektur Tropis & Interior",
        location: "Canggu & Uluwatu, Bali",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
        alt: "Konstruksi Sipil dan Estimasi RAB SNI LivingKu",
        category: "Jasa Konstruksi & RAB SNI",
        location: "Jabodetabek & Badung",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
        alt: "Fit-Out Kantor Korporat & Penasihat Pajak SCBD",
        category: "Legalitas PMDN/PMA & Pajak",
        location: "SCBD Sudirman, Jakarta",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
        alt: "Masterpiece Residensial Mewah LivingKu",
        category: "Solusi Terpadu Turnkey",
        location: "Nusantara & Bali",
      },
    ];
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleFieldChange = (index, field, value) => {
    const updated = [...slides];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setSlides(updated);
  };

  const handleAddSlide = () => {
    const newSlide = {
      id: Date.now(),
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      alt: "Dokumentasi Proyek Arsitektur LivingKu",
      category: "Arsitektur Tropis & Desain",
      location: "Denpasar, Bali"
    };
    setSlides([...slides, newSlide]);
  };

  const handleDeleteSlide = (index) => {
    if (slides.length <= 1) {
      alert('Minimal harus ada 1 foto slide di Hero!');
      return;
    }
    if (confirm('Hapus slide ini dari carousel Hero?')) {
      const updated = slides.filter((_, i) => i !== index);
      setSlides(updated);
    }
  };

  const handleSave = () => {
    try {
      localStorage.setItem('livingku_hero_slides', JSON.stringify(slides));
      // Trigger a custom storage event so active Hero component updates immediately
      window.dispatchEvent(new Event('livingku_hero_slides_updated'));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (e) {
      console.error(e);
      alert('Gagal menyimpan slides ke browser storage');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h3 className="font-serif text-base font-bold text-slate-900">
            Foto Slider Hero Beranda (Auto-Sliding 6000ms)
          </h3>
          <p className="text-xs text-slate-500">
            Ubah foto banner background besar, teks kategori badge, dan lokasi proyek pada slider utama.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddSlide}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Slide</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <RefreshCw className="w-4 h-4" />}
            <span>{savedSuccess ? 'Tersimpan!' : 'Simpan Foto Hero'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id || idx}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 hover:border-turkish-300 transition-all"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-turkish-700 uppercase tracking-wider">
                Slide Hero #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleDeleteSlide(idx)}
                className="text-xs text-rose-500 hover:text-rose-700 inline-flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Hapus</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Kategori Badge</label>
                <input
                  type="text"
                  value={slide.category}
                  onChange={(e) => handleFieldChange(idx, 'category', e.target.value)}
                  placeholder="Arsitektur Tropis & Interior"
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Lokasi Proyek</label>
                <input
                  type="text"
                  value={slide.location}
                  onChange={(e) => handleFieldChange(idx, 'location', e.target.value)}
                  placeholder="Canggu & Uluwatu, Bali"
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Alt Text (Aksesibilitas)</label>
              <input
                type="text"
                value={slide.alt}
                onChange={(e) => handleFieldChange(idx, 'alt', e.target.value)}
                placeholder="Deskripsi foto untuk pembaca layar..."
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>

            {/* Photo ImageField */}
            <ImageField
              label="Foto Background Slide Hero"
              value={slide.image}
              onChange={(newUrl) => handleFieldChange(idx, 'image', newUrl)}
              helpText="Disarankan rasio 16:9 atau lebar minimal 1920px untuk tampilan sinematik tajam."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
