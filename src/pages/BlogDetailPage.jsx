import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Quote,
  Check,
} from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles.js';

export function BlogDetailPage({ onStartProject }) {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Find article by slug or id
  const article =
    blogArticles.find(
      (a) =>
        a.slug === slug ||
        a.id === slug ||
        a.id === id ||
        a.slug === id
    ) || blogArticles[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.subtitle || article.summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Recommended articles (exclude current)
  const recommendedArticles = blogArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const handleStartConsultation = () => {
    if (onStartProject) {
      onStartProject(`Strategy Call: ${article.title}`);
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#082D72] selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');`}</style>

      {/* ================= BACKGROUND GRADIENT ORBS (MATCHING SCREENSHOT) ================= */}
      <div
        className="absolute -top-16 -left-28 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          background:
            'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-10 -right-24 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          background:
            'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[600px] -left-36 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full pointer-events-none z-0 opacity-70"
        style={{
          background:
            'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1200px] -right-32 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full pointer-events-none z-0 opacity-70"
        style={{
          background:
            'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />
      <div
        className="absolute top-[1800px] -left-32 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full pointer-events-none z-0 opacity-70"
        style={{
          background:
            'radial-gradient(84.85% 84.85% at 40% 40%, #BFE2FF 0%, #DDF0FF 50%, rgba(221, 240, 255, 0) 75%)',
        }}
      />

      {/* ================= 1. TOP BREADCRUMB & BACK NAVIGATION ================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Back to Articles Button */}
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-[#0066ff] hover:text-blue-700 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Articles</span>
          </button>

          {/* Breadcrumb Links */}
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#0066ff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/blog" className="hover:text-[#0066ff] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#082D72] font-bold">
              {article.category}
            </span>
          </nav>

        </div>
      </div>

      {/* ================= 2. ARTICLE HEADER & META ================= */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 relative z-10">
        
        {/* Eyebrow Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0066ff] text-[11px] font-black uppercase tracking-wider mb-5">
          <span className="text-[#0066ff] text-xs">⚡</span>
          <span>{article.eyebrow || article.category}</span>
        </div>

        {/* Main Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-black text-[#082D72] tracking-tight leading-[1.16] mb-4">
          {article.title}
        </h1>

        {/* Subtitle / Dek */}
        <p className="text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed mb-6 font-normal">
          {article.subtitle || article.summary}
        </p>

        {/* Author & Action Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          
          {/* Author Block + Action Icons */}
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100 shadow-xs"
            />
            <div>
              <div className="text-sm font-black text-[#082D72]">
                {article.author.name}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {article.author.role}
              </div>
            </div>

            {/* Share & Bookmark Buttons */}
            <div className="flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-200">
              <button
                type="button"
                onClick={handleShare}
                className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-[#0066ff] flex items-center justify-center transition cursor-pointer"
                title={copied ? 'Link Copied!' : 'Share article'}
                aria-label="Share article"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => setBookmarked(!bookmarked)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer ${
                  bookmarked
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-500'
                }`}
                title={bookmarked ? 'Saved to bookmarks' : 'Bookmark article'}
                aria-label="Bookmark article"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Date & Read Time */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>{article.readTime}</span>
            </div>
          </div>

        </div>

      </header>

      {/* ================= 3. HERO IMAGE CARD (MATCHING SCREENSHOT) ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative z-10">
        <div className="rounded-[28px] overflow-hidden shadow-[0_16px_50px_rgba(8,45,114,0.08)] border border-slate-200/80 bg-slate-100 relative group aspect-16/10 max-h-[480px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          {/* Bottom Caption Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082D72]/85 via-[#082D72]/40 to-transparent p-4 sm:p-5 flex items-center justify-between text-white">
            <span className="text-[11.5px] sm:text-xs font-medium text-blue-100">
              {article.caption ||
                'Digital Elite Services Insights • Scalable Technology Infrastructure & Strategy'}
            </span>
          </div>
        </div>
      </section>

      {/* ================= 4. KEY STRATEGIC TAKEAWAYS BOX (MATCHING SCREENSHOT) ================= */}
      {article.takeaways && article.takeaways.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 relative z-10">
          <div className="bg-blue-50/60 rounded-2xl sm:rounded-[22px] p-6 sm:p-8 border border-blue-200/70 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0066ff] mb-4">
              <span className="text-amber-500">⚡</span>
              <span>KEY STRATEGIC TAKEAWAYS</span>
            </div>

            <div className="space-y-3.5">
              {article.takeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0066ff] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-[13.5px] text-[#082D72] font-semibold leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= 5. MAIN ARTICLE CONTENT BODY ================= */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
        
        {/* Intro Paragraph */}
        {article.intro && (
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {article.intro}
          </p>
        )}

        {/* 3 Metric Highlight Stat Cards (Matching Screenshot) */}
        {article.metrics && article.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-8">
            {article.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#082D72] text-white rounded-2xl py-6 px-4 text-center shadow-md flex flex-col justify-center items-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-200">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Structured Sections */}
        {article.sections &&
          article.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-[#082D72] tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed font-normal">
                {section.body}
              </p>
            </div>
          ))}

        {/* Pull Quote Box (Matching Screenshot) */}
        {article.quote && (
          <div className="my-10 rounded-[28px] sm:rounded-[32px] bg-[#082D72] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
            {/* Outlined Double Quote Icon on top right */}
            <div className="absolute top-6 sm:top-8 right-6 sm:right-10 pointer-events-none select-none text-white/15">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20"
                viewBox="0 0 24 24"
                fill="currentColor"
                fillOpacity="0.08"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl lg:text-[22px] font-bold italic leading-relaxed text-white relative z-10 pr-12 sm:pr-20">
              "{article.quote.text}"
            </p>

            {/* Divider Line */}
            <div className="border-t border-white/10 my-6 sm:my-7 relative z-10" />

            {/* Author Profile Footer */}
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-[#0066ff] text-white font-black flex items-center justify-center text-sm shrink-0 shadow-sm">
                {article.quote.initial || 'E'}
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {article.quote.author}
                </div>
                <div className="text-xs sm:text-[13px] text-blue-200/80 font-normal mt-0.5">
                  {article.quote.role}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conclusion / Next Steps Callout Box (Matching Screenshot) */}
        {article.conclusion && (
          <div className="my-8 rounded-2xl bg-blue-50/50 border-l-4 border-[#0066ff] p-6 sm:p-7 space-y-2">
            <h3 className="text-base sm:text-lg font-black text-[#082D72]">
              {article.conclusion.heading}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {article.conclusion.body}
            </p>
          </div>
        )}

        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
            TAGS:
          </span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full hover:bg-blue-50 hover:text-[#0066ff] transition cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

      </article>

      {/* ================= 6. RECOMMENDED ARTICLES SECTION (MATCHING SCREENSHOT) ================= */}
      <section className="bg-slate-50/70 border-t border-slate-100 py-16 sm:py-20 relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0066ff] block mb-1">
                CONTINUE READING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#082D72] tracking-tight">
                Recommended Articles
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0066ff] hover:text-blue-800 transition"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Recommended Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {recommendedArticles.map((rec) => (
              <div
                key={rec.id}
                onClick={() => navigate(`/blog/${rec.slug}`)}
                className="group bg-white rounded-[24px] overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Image with Category Badge */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#082D72] text-[10px] font-black tracking-wider px-3 py-1 rounded-full uppercase shadow-xs">
                      {rec.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-semibold text-slate-400 mb-2">
                      {rec.readTime}
                    </div>

                    <h3 className="text-base font-black text-[#082D72] tracking-tight leading-snug group-hover:text-[#0066ff] transition-colors mb-2.5 line-clamp-2">
                      {rec.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-normal">
                      {rec.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0066ff] group-hover:translate-x-1 transition-transform">
                    <span>Read Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 7. BOTTOM STRATEGY CTA SECTION (MATCHING SCREENSHOT) ================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-white/95 border border-[#D5E6FE] shadow-xs backdrop-blur-md mb-4">
            <span className="text-[#0066ff] text-xs">⚡</span>
            <span className="font-extrabold text-[11px] leading-none tracking-[0.6px] uppercase text-[#0066ff]">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#082D72] tracking-tight leading-[1.15] mb-4">
            Ready to Execute These Strategies on Your Project?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Schedule a free technical strategy call with our digital engineering and performance growth experts.
          </p>

          {/* Button */}
          <div>
            <button
              type="button"
              onClick={()=>navigate("/contact")}
              className="inline-flex items-center gap-2 bg-[#082D72] hover:bg-blue-900 text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02]"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default BlogDetailPage;
