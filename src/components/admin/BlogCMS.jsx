import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  ExternalLink,
  Check,
  AlertCircle
} from 'lucide-react';
import ImageField from './ImageField';

export default function BlogCMS({ posts = [], onSavePost, onDeletePost }) {
  const [search, setSearch] = useState('');
  const [editingPost, setEditingPost] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    category: 'Konstruksi & RAB',
    excerpt: '',
    author: 'Tim LivingKu Indonesia',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: '5 menit',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    content: '',
    tags: 'Konstruksi, RAB, Investasi'
  });

  const categories = [
    'Arsitektur & Desain',
    'Konstruksi & RAB',
    'Legalitas Bisnis',
    'Pajak & Keuangan',
    'Regulasi & Berita'
  ];

  const handleStartCreate = () => {
    setFormData({
      id: `artikel-${Date.now()}`,
      title: '',
      category: 'Konstruksi & RAB',
      excerpt: '',
      author: 'Tim LivingKu Indonesia',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '5 menit',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      content: '### Judul Bagian Artikel\n\nTuliskan isi ulasan berita atau panduan wawasan di sini...',
      tags: 'Konstruksi, Properti'
    });
    setIsCreatingNew(true);
    setEditingPost(null);
  };

  const handleStartEdit = (post) => {
    setFormData({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || '')
    });
    setEditingPost(post.id);
    setIsCreatingNew(false);
  };

  const handleCancel = () => {
    setEditingPost(null);
    setIsCreatingNew(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Judul berita/artikel wajib diisi!');
      return;
    }

    const processedPost = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    onSavePost(processedPost);
    setEditingPost(null);
    setIsCreatingNew(false);
  };

  const filteredPosts = posts.filter(p => 
    p.title?.toLowerCase().includes(search.toLowerCase()) ||
    p.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari judul berita atau kategori..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 bg-slate-50"
          />
        </div>

        {!isCreatingNew && !editingPost && (
          <button
            type="button"
            onClick={handleStartCreate}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tulis Berita Baru</span>
          </button>
        )}
      </div>

      {/* Editor Modal / Drawer */}
      {(isCreatingNew || editingPost) && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-turkish-300 shadow-xl p-6 space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              {isCreatingNew ? 'Buat Artikel / Berita Baru' : 'Edit Artikel Berita'}
            </h3>
            <button
              type="button"
              onClick={handleCancel}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
            >
              Batal &amp; Tutup
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Judul Berita</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Contoh: Regulasi Baru PBG & Estimasi RAB Konstruksi Villa 2026"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Kategori Berita</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 bg-white"
              >
                {categories.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Penulis / Sumber</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Tanggal Publikasi</label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Estimasi Waktu Baca</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="misal: 6 menit"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
              />
            </div>
          </div>

          {/* Photo / Thumbnail Upload with ImageField */}
          <ImageField
            label="Foto Sampul Berita (Thumbnail)"
            value={formData.image}
            onChange={(newImg) => setFormData({ ...formData, image: newImg })}
            helpText="Gunakan resolusi landscape (min 1000px) agar tampilan kartu berita dan modal artikel terlihat tajam."
          />

          {/* Excerpt */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Ringkasan Singkat (Excerpt)</label>
            <textarea
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Ringkasan 1-2 kalimat untuk kartu depan berita..."
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          {/* Full Content */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase flex items-center justify-between">
              <span>Isi Artikel Lengkap (Mendukung Markdown &amp; Paragraf)</span>
              <span className="text-[10px] text-slate-400 normal-case">Gunakan ### untuk Subjudul, - untuk List</span>
            </label>
            <textarea
              rows={8}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Tuliskan isi berita di sini..."
              className="w-full px-3 py-2 text-xs font-mono border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 leading-relaxed"
            />
          </div>

          {/* Tags */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Tags (Pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="Konstruksi, RAB, Bali, Regulasi"
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
            >
              <Check className="w-4 h-4" />
              <span>Simpan &amp; Publikasikan</span>
            </button>
          </div>
        </form>
      )}

      {/* Posts List Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 w-full bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-semibold text-turkish-300">
                  {post.category}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-slate-900 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">{post.readTime}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleStartEdit(post)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Yakin ingin menghapus berita "${post.title}"?`)) {
                      onDeletePost(post.id);
                    }
                  }}
                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
