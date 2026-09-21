import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  Sparkles 
} from 'lucide-react';
import BlogModal from './BlogModal';

export default function BlogSection({ t, lang }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [activePost, setActivePost] = useState(null);

  const posts = t.blog.posts;

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = 
      selectedCategory === 'Semua Kategori' || 
      selectedCategory === 'All Categories' || 
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="wp-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-3">
            {t.blog.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.blog.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        {/* WordPress Search & Filter Toolbar */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.blog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-slate-50"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center md:justify-end">
            {t.blog.categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-gold-400 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-wp hover:shadow-wp-card transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setActivePost(post)}
              >
                {/* Thumbnail */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={`Foto Sampul Artikel Wawasan LivingKu: ${post.title} (${post.category})`}
                    width="600"
                    height="360"
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-md text-gold-400 text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta: Author & Date */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-gold-700 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600 flex items-center gap-1.5 transition-colors">
                      <span>{t.blog.readArticle}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <div className="flex gap-1.5">
                      {post.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl max-w-2xl mx-auto border border-dashed border-slate-300">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <div className="text-base font-bold text-slate-800">Tidak ada artikel yang sesuai</div>
            <p className="text-xs text-slate-500 mt-1">Coba kata kunci lain atau pilih semua kategori.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua Kategori'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-gold-400 text-xs font-semibold"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {/* Modal for full reading */}
        {activePost && (
          <BlogModal
            post={activePost}
            onClose={() => setActivePost(null)}
            lang={lang}
          />
        )}
      </div>
    </section>
  );
}
