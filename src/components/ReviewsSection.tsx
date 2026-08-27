import React from 'react';
import { Star, MessageSquare, ExternalLink, Sparkles, CheckCircle, Award } from 'lucide-react';
import { REVIEWS_DATA, RATING_STATS } from '../data/reviews';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0e1012] border-t border-[#1d2024] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#dfb755] text-[#dfb755]" />
            <span>AUTHENTIC DINER FEEDBACK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            TRUSTED BY <span className="text-gold-gradient">FAISALABAD</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            Celebrated by local food lovers, families, and guests for unmatched taste, generous hospitality, and exquisite ambiance.
          </p>
        </div>

        {/* Rating Overview Master Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#141618] border border-gold-subtle shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Big Score */}
            <div className="md:col-span-5 text-center md:text-left md:border-r md:border-[#272a2e] md:pr-8">
              <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-white">
                  4.7
                </span>
                <span className="text-lg text-[#9ca3af]">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-1 text-[#dfb755] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#dfb755]" />
                ))}
              </div>

              <div className="text-xs sm:text-sm text-[#9ca3af]">
                Based on <strong className="text-white">944+ Verified Google Reviews</strong>
              </div>

              <div className="mt-4">
                <a
                  href={RESTAURANT_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#dfb755] hover:text-[#f3d078] transition-colors"
                >
                  <span>VIEW GOOGLE REVIEWS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Rating Breakdown Bars */}
            <div className="md:col-span-7 space-y-2 text-xs">
              {RATING_STATS.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="w-12 font-semibold text-right text-[#d1d5db] flex items-center justify-end gap-1">
                    <span>{item.stars}</span>
                    <Star className="w-3 h-3 fill-[#dfb755] text-[#dfb755]" />
                  </div>

                  <div className="flex-1 h-2 rounded-full bg-[#1e2124] overflow-hidden">
                    <div
                      className="h-full bg-gold-gradient rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <div className="w-10 text-right text-[#9ca3af] font-medium">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1f2226] border border-gold-subtle flex items-center justify-center font-bold text-xs text-[#dfb755]">
                      {rev.avatar || rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
                      </h4>
                      <span className="text-[11px] text-[#6b7280]">{rev.timeAgo} &bull; Google</span>
                    </div>
                  </div>

                  <div className="flex items-center text-[#dfb755]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(rev.rating) ? 'fill-[#dfb755]' : 'text-[#374151]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Tags */}
              {rev.tags && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#232629]">
                  {rev.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#1a1d20] text-[#9ca3af] text-[10px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Google Reviews CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_INFO.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#181a1d] hover:bg-[#22262a] text-[#dfb755] border border-gold-subtle font-bold text-xs uppercase tracking-wider shadow-lg hover:border-[#dfb755] transition-all"
            id="reviews-view-google-btn"
          >
            <ExternalLink className="w-4 h-4" />
            <span>VIEW ALL 944+ REVIEWS ON GOOGLE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
