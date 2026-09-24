import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Newspaper, 
  Image as ImageIcon, 
  Type, 
  Briefcase, 
  Sliders, 
  Layers, 
  Lock, 
  LogOut, 
  ArrowLeft, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import BlogCMS from '../../components/admin/BlogCMS';
import ServicesPhotosCMS from '../../components/admin/ServicesPhotosCMS';
import PortfolioCMS from '../../components/admin/PortfolioCMS';
import GeneralCopywritingCMS from '../../components/admin/GeneralCopywritingCMS';
import HeroSliderCMS from '../../components/admin/HeroSliderCMS';

export default function CMSPage() {
  const { 
    content, 
    saveContent, 
    resetToDefault, 
    updateSection, 
    isAdminAuthenticated, 
    loginAdmin, 
    logoutAdmin,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  } = useContent();

  const [activeTab, setActiveTab] = useState('blog'); // 'blog', 'photos', 'hero', 'copywriting', 'portfolio'
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // If not authenticated, show sleek admin login screen
  if (!isAdminAuthenticated) {
    const handleLogin = (e) => {
      e.preventDefault();
      const success = loginAdmin(passwordInput);
      if (!success) {
        setLoginError('Password salah. Gunakan: livingku2026 atau admin123');
      } else {
        setLoginError('');
      }
    };

    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-slate-200 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-turkish-50 border border-turkish-200 rounded-2xl flex items-center justify-center mx-auto text-turkish-600 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              LivingKu CMS Portal
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Sistem Pengelolaan Konten, Foto Arsitektur, Copywriting, dan Berita
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Kata Sandi Administrator
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Masukkan password admin..."
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-turkish-500 transition-all"
              />
              <span className="text-[11px] text-slate-400 block">
                Petunjuk default: <code className="text-turkish-700 font-mono">livingku2026</code>
              </span>
            </div>

            {loginError && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-turkish-600 hover:bg-turkish-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-turkish-500/25 transition-all"
            >
              Masuk ke Dashboard CMS
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <Link to="/" className="text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Website</span>
            </Link>
            <span className="text-slate-400 text-[11px]">LivingKu v1.0.0</span>
          </div>
        </div>
      </div>
    );
  }

  // Active language data for preview
  const currentLang = 'id';
  const idData = content.id || {};

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <img 
                src="/images/logo-white.png" 
                alt="LivingKu" 
                className="h-8 w-auto object-contain" 
              />
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-turkish-500/20 text-turkish-400 border border-turkish-500/30">
                CMS LIVE
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-turkish-400" />
              <span>Lihat Web Langsung</span>
            </Link>

            <button
              type="button"
              onClick={logoutAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 text-xs font-semibold border border-rose-800/40 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('blog')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'blog'
                ? 'bg-turkish-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>1. Manajemen Berita &amp; Wawasan ({idData.blog?.posts?.length || 0})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hero')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'hero'
                ? 'bg-turkish-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>2. Foto Slider Hero</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('photos')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'photos'
                ? 'bg-turkish-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3. Foto &amp; Info 4 Layanan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('portfolio')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'portfolio'
                ? 'bg-turkish-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>4. Galeri Portofolio Proyek</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('copywriting')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'copywriting'
                ? 'bg-turkish-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>5. Copywriting &amp; Header/Kontak</span>
          </button>
        </div>

        {/* Tab 1: Blog & News CMS */}
        {activeTab === 'blog' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                Kelola Berita, Artikel &amp; Panduan Wawasan
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Tambah berita baru, ganti thumbnail photo, perbarui kutipan (excerpt), dan tulis artikel lengkap. Perubahan langsung tampil pada menu Berita dan Pop-up bacaan pengunjung.
              </p>

              <BlogCMS 
                posts={idData.blog?.posts || []} 
                onSavePost={(post) => {
                  const exists = (idData.blog?.posts || []).some(p => p.id === post.id);
                  if (exists) {
                    updateBlogPost(post.id, post);
                  } else {
                    addBlogPost(post);
                  }
                }}
                onDeletePost={(postId) => {
                  deleteBlogPost(postId);
                }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Hero Slider CMS */}
        {activeTab === 'hero' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                Kelola Foto Slide Banner Hero
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Atur foto beranda ukuran penuh yang berputar otomatis setiap 6 detik, lengkapi dengan label kategori dan lokasi proyek.
              </p>

              <HeroSliderCMS />
            </div>
          </div>
        )}

        {/* Tab 3: Services & Photos CMS */}
        {activeTab === 'photos' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                Kelola Foto Thumbnail &amp; Teks 4 Pilar Layanan
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Ganti gambar thumbnail untuk Desain Interior/Eksterior, Jasa Konstruksi &amp; RAB, Legalitas Usaha, dan Perpajakan.
              </p>

              <ServicesPhotosCMS 
                services={idData.services?.list || []} 
                onUpdateServices={(updatedList) => {
                  updateSection('id', 'services', {
                    ...idData.services,
                    list: updatedList
                  });
                }}
              />
            </div>
          </div>
        )}

        {/* Tab 4: Portfolio CMS */}
        {activeTab === 'portfolio' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                Kelola Foto &amp; Riwayat Portofolio Proyek
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Unggah hasil foto karya proyek residensial, villa, dan komersial LivingKu beserta cakupan dan luas bangunan.
              </p>

              <PortfolioCMS 
                items={idData.portfolio?.items || []}
                onUpdatePortfolio={(updatedItems) => {
                  updateSection('id', 'portfolio', {
                    ...idData.portfolio,
                    items: updatedItems
                  });
                }}
              />
            </div>
          </div>
        )}

        {/* Tab 5: General Copywriting & Contacts CMS */}
        {activeTab === 'copywriting' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-1">
                Kelola Copywriting Website &amp; Kontak Hotline
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Sesuaikan teks headline pembuka, nomor hotline telepon, email, alamat kantor Denpasar, dan pesan banner pengumuman (mendukung Bahasa Indonesia dan Bahasa Inggris).
              </p>

              <GeneralCopywritingCMS 
                currentContent={content}
                onSaveSection={(lang, sectionKey, sectionData) => {
                  updateSection(lang, sectionKey, sectionData);
                }}
                onResetDefault={resetToDefault}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
