import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  X,
  Filter,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles.js';
import { StatsBannerBar } from '../components/StatsBannerBar.jsx';
import { BlogReaderModal } from '../components/BlogReaderModal.jsx';

export function BlogPage({ onStartProject }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    'All Articles',
    'Digital Marketing',
    'Web Development',
    'SEO & Search',
    'Lead Generation',
    'Social Media',
    'Brand Strategy',
  ];

  // Filtering articles based on category and search query
  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        article.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is either the marked featured one or the first in filtered list
  const featuredArticle = useMemo(() => {
    if (selectedCategory !== 'All Articles' || searchQuery.trim() !== '') {
      return null;
    }
    return blogArticles.find((a) => a.isFeatured) || blogArticles[0];
  }, [selectedCategory, searchQuery]);

  // Regular grid articles (exclude featured one on initial view)
  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredArticles.filter((a) => a.id !== featuredArticle.id);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => {
        setNewsletterSubscribed(false);
      }, 5000);
    }
  };

  const handleDiscoveryCall = () => {
    if (onStartProject) {
      onStartProject('Strategic Discovery Call');
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}</style>

      {/* ================= BACKGROUND GRADIENT ORBS (REDUCED HERO CIRCLE SIZES) ================= */}
      <div
        className="absolute -top-10 -left-20 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full pointer-events-none z-0 opacity-75"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-6 -right-16 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full pointer-events-none z-0 opacity-75"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[750px] -left-24 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full pointer-events-none z-0 opacity-65"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1500px] -right-24 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none z-0 opacity-65"
        style={{
          background: 'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />

      {/* ================= 1. HERO HEADER SECTION ================= */}
      <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" />
            <span className="font-extrabold text-[11.5px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
              INSIGHTS & STRATEGIES • DIGITAL ELITE BLOG
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#082D72] tracking-[-0.035em] leading-[1.14] max-w-4xl mx-auto mb-4">
            Digital Elite <span className="text-[#0066ff]">Insights &</span> <br />
            <span className="text-[#0066ff]">Knowledge</span> Hub
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Actionable guides, engineering deep-dives, performance marketing playbooks, and modern branding frameworks designed to help high-growth businesses scale.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto mb-8 relative">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-4.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword, category, or topic..."
                className="w-full h-12 pl-11 pr-10 bg-white rounded-full border border-slate-200/90 text-sm text-[#082D72] placeholder:text-slate-400 focus:outline-none focus:border-[#0066ff] focus:ring-2 focus:ring-blue-100 shadow-[0_4px_20px_rgba(8,45,114,0.05)] transition-all flex items-center"
                style={{ lineHeight: 'normal' }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#082D72] text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-[#082D72]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 2. FEATURED POST CARD (MATCHING SCREENSHOT) ================= */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div
            onClick={() => navigate(`/blog/${featuredArticle.slug}`)}
            className="group bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_12px_40px_rgba(8,45,114,0.06)] hover:shadow-[0_20px_50px_rgba(8,45,114,0.12)] hover:border-[#93c5fd] transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Image with FEATURED POST Badge */}
            <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden aspect-video sm:aspect-16/10 bg-slate-100 shadow-sm">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#082D72] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase shadow-md">
                FEATURED POST
              </div>
            </div>

            {/* Right Meta & Content */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                {/* Tag Row: Category + Date + Read Time */}
                <div className="flex flex-wrap items-center gap-3 text-xs mb-3 font-semibold">
                  <span className="bg-blue-50 text-[#0066ff] px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#082D72] tracking-tight leading-snug group-hover:text-[#0066ff] transition-colors mb-3">
                  {featuredArticle.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {featuredArticle.summary}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Row & Read Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-50"
                  />
                  <div>
                    <div className="text-xs font-black text-[#082D72]">
                      {featuredArticle.author.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {featuredArticle.author.role}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-black text-[#0066ff] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= 3. ALL LATEST INSIGHTS SECTION HEADER & GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#082D72] tracking-tight">
              All Latest Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Showing {filteredArticles.length} article{filteredArticles.length === 1 ? '' : 's'}
              {selectedCategory !== 'All Articles' && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* 6 Grid Cards */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs max-w-md mx-auto my-12">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-black text-[#082D72] mb-1">
              No matching articles found
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Articles');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#082D72] text-white text-xs font-bold hover:bg-blue-900 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {gridArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => navigate(`/blog/${article.slug}`)}
                className="group bg-white rounded-[26px] overflow-hidden border border-slate-200/80 shadow-[0_8px_30px_rgba(8,45,114,0.04)] hover:shadow-[0_16px_40px_rgba(8,45,114,0.08)] hover:border-[#93c5fd] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Image with Category Badge */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#082D72] text-[10px] font-black tracking-wider px-3 py-1 rounded-full uppercase shadow-xs border border-white/60">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Meta Row: Date & Read Time */}
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mb-2.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-base sm:text-lg font-black text-[#082D72] tracking-tight leading-snug group-hover:text-[#0066ff] transition-colors mb-2.5 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3 font-normal">
                      {article.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1 mb-2">
                      {article.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Bar Bottom */}
                <div className="p-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-blue-50"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-black text-[#082D72] truncate">
                        {article.author.name}
                      </div>
                      <div className="text-[10.5px] text-slate-400 font-medium truncate">
                        {article.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0066ff] shrink-0 group-hover:translate-x-0.5 transition-transform ml-2">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>

      {/* ================= 4. EXECUTIVE GROWTH DIGEST NEWSLETTER (MATCHING SCREENSHOT) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        <div
          className="rounded-[32px] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_60px_rgba(8,45,114,0.18)] relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #00153f 0%, #022475 35%, #0144aa 70%, #0062f5 100%)',
          }}
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/40 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <span className="text-amber-400 text-xs">⚡</span>
                <span className="font-extrabold text-[11px] leading-none tracking-[0.5px] uppercase text-blue-200">
                  EXECUTIVE GROWTH DIGEST
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-white tracking-tight leading-snug">
                Get Weekly Tech & Growth Insights In Your Inbox
              </h2>

              <p className="text-blue-100 text-xs sm:text-sm font-normal max-w-xl leading-relaxed">
                Join over 12,000+ founders, marketers, and technology executives receiving our bi-weekly strategy breakdowns. Zero spam.
              </p>
            </div>

            {/* Right Subscription Form */}
            <div className="lg:col-span-5 space-y-2.5">
              {newsletterSubscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-4 text-emerald-200 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox for the welcome digest.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <div className="relative grow">
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your work email address..."
                        className="w-full h-12 sm:h-[52px] px-5 sm:px-6 rounded-full bg-white text-slate-800 text-sm font-medium placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#0066ff] shadow-sm transition-all flex items-center"
                        style={{ lineHeight: 'normal' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-12 sm:h-[52px] inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-blue-600 active:scale-95 text-white font-bold text-sm px-7 rounded-full transition-all shadow-md shrink-0 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-blue-100/90 font-medium">
                    By subscribing, you agree to receive digital insights. Unsubscribe anytime in 1 click.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. STANDARDIZED STATS BANNER BAR (MATCHING SCREENSHOT) ================= */}
      <StatsBannerBar />

      {/* ================= 6. BOTTOM STRATEGIC CTA SECTION ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md mb-4">
            <span className="text-[#0066ff] text-xs">⚡</span>
            <span className="font-extrabold text-[11px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
              READY TO SCALE YOUR BRAND?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#082D72] tracking-tight leading-[1.15] mb-4">
            Turn These Strategic Insights <br />
            Into <span className="text-[#0066ff]">Measurable Business Revenue</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Partner with Digital Elite Services to implement custom web applications, performance marketing campaigns, and high-converting sales funnels.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDiscoveryCall}
              className="inline-flex items-center gap-2 bg-[#082D72] hover:bg-blue-900 text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02]"
            >
              <span>Schedule Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#082D72] border border-slate-300 font-extrabold text-sm px-7 py-3.5 rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>View Case Studies</span>
            </button>
          </div>

        </div>
      </section>

      {/* ================= 7. ARTICLE READER MODAL ================= */}
      {activeArticleModal && (
        <BlogReaderModal
          article={activeArticleModal}
          onClose={() => setActiveArticleModal(null)}
          onStartProject={onStartProject}
        />
      )}

    </div>
  );
}

export default BlogPage;
