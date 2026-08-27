import React, { useState } from 'react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'restaurant', label: 'Restaurant Facade' },
    { id: 'bbq', label: 'Charcoal BBQ' },
    { id: 'food', label: 'Signature Dishes' },
    { id: 'interior', label: 'VIP Lounge & Hall' },
    { id: 'events', label: 'Celebrations' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0c0d0e] border-t border-[#1d2024] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#dfb755]" />
            <span>VISUAL AMBIANCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            EXPERIENCE <span className="text-gold-gradient">PARADISE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            A glimpse into the warmth, architectural luxury, and culinary craftsmanship that await you in Faisalabad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-black font-bold shadow-md shadow-[#dfb755]/10'
                  : 'bg-[#141618] hover:bg-[#1a1d20] text-[#9ca3af] hover:text-white border border-[#232629]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#141618] border border-[#232629] hover:border-[#dfb755]/50 shadow-lg cursor-pointer h-72 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Dark Hover Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#dfb755] transition-colors">
                    {item.title}
                  </h4>
                  <div className="p-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                {item.description && (
                  <p className="text-xs text-[#d1d5db] line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredGallery.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Active Image and Caption */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-[#272a2e]"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                {filteredGallery[lightboxIndex].title}
              </h3>
              {filteredGallery[lightboxIndex].description && (
                <p className="text-xs sm:text-sm text-[#9ca3af] mt-1 max-w-xl">
                  {filteredGallery[lightboxIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
