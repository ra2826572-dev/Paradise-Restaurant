import React from 'react';
import { Sparkles, Plus, Eye, Flame, Award } from 'lucide-react';
import { SIGNATURE_DISHES, MENU_ITEMS } from '../data/menu';
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

export const FeaturedDishes: React.FC = () => {
  const { addToCart, setSelectedDish } = useCart();

  const handleQuickAdd = (signatureId: string) => {
    const fullItem = MENU_ITEMS.find((item) => item.id === signatureId);
    if (fullItem) {
      addToCart(fullItem, 'single', 1);
    }
  };

  const handleOpenDetails = (signatureId: string) => {
    const fullItem = MENU_ITEMS.find((item) => item.id === signatureId);
    if (fullItem) {
      setSelectedDish(fullItem);
    }
  };

  return (
    <section id="signatures" className="py-20 sm:py-28 bg-[#0c0d0e] border-t border-[#1d2024] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755] mb-4">
            <Award className="w-3.5 h-3.5 text-[#dfb755]" />
            <span>CHEF&apos;S RECOMMENDATIONS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            SIGNATURE <span className="text-gold-gradient">DISHES</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af] font-normal">
            &ldquo;Our favourites, crafted to make every visit memorable.&rdquo;
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group relative rounded-2xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#dfb755]/5"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#1c1f22]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-black/30" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0c0d0e]/85 border border-[#dfb755]/40 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#dfb755]">
                  {dish.tag}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium text-[#d1d5db]">
                  {dish.category}
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleOpenDetails(dish.id)}
                    className="p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
                    title="View details"
                    aria-label={`View details of ${dish.name}`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleQuickAdd(dish.id)}
                    className="p-3 rounded-full bg-gold-gradient text-black font-bold hover:brightness-110 transition-all active:scale-95 cursor-pointer shadow-lg"
                    title="Quick add to order"
                    aria-label={`Add ${dish.name} to order`}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Dish Info Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-light transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9ca3af] line-clamp-2 mb-4 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232629] flex items-center justify-between">
                  <div className="font-bold text-[#dfb755] text-sm sm:text-base">
                    {dish.price}
                  </div>

                  <button
                    onClick={() => handleOpenDetails(dish.id)}
                    className="text-xs font-semibold text-[#e5e7eb] hover:text-[#dfb755] flex items-center gap-1 cursor-pointer transition-colors group-hover:translate-x-0.5"
                  >
                    <span>View Dish</span>
                    <Sparkles className="w-3 h-3 text-[#dfb755]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#16181b] via-[#1a1d20] to-[#16181b] border border-gold-subtle flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Explore Over 130+ Authentic Dishes & Beverages
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af]">
              Traditional Karahi, Clay Handi, Charcoal BBQ, Continental Steaks, Chinese Woks & Cold Bar Refreshments.
            </p>
          </div>

          <a
            href="#menu"
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            VIEW COMPLETE MENU
          </a>
        </div>
      </div>
    </section>
  );
};
