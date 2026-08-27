import React, { useState } from 'react';
import { Plus, Flame, Eye, Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import karahiImg from '../assets/images/paradise_karahi_1787663366776.jpg';
import bbqImg from '../assets/images/bbq_platter_1787663382928.jpg';
import drinksImg from '../assets/images/paradise_drinks_1787663399515.jpg';

interface MenuCardProps {
  item: MenuItem;
  layout?: 'grid' | 'list';
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, layout = 'grid' }) => {
  const { addToCart, setSelectedDish } = useCart();
  const [imageError, setImageError] = useState(false);

  // Category fallback image if URL fails
  const getFallbackImage = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('karahi') || cat.includes('handi')) return karahiImg;
    if (cat.includes('bbq') || cat.includes('steak') || cat.includes('starter')) return bbqImg;
    if (cat.includes('cold') || cat.includes('drink') || cat.includes('beverage')) return drinksImg;
    return 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80';
  };

  const currentImage = imageError ? getFallbackImage(item.category) : (item.image || getFallbackImage(item.category));

  const renderPrice = () => {
    if (typeof item.price === 'number') {
      return `Rs. ${item.price.toLocaleString()}`;
    }
    if (item.price.half && item.price.full) {
      return `Half: Rs. ${item.price.half.toLocaleString()} / Full: Rs. ${item.price.full.toLocaleString()}`;
    }
    return `Rs. ${(item.price.full || item.price.single || 0).toLocaleString()}`;
  };

  if (layout === 'list') {
    return (
      <div className="group relative py-4 px-3 sm:px-4 rounded-xl hover:bg-[#141619] transition-all border-b border-[#1f2226] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3.5 flex-1">
          {/* Thumbnail in List View */}
          <div
            onClick={() => setSelectedDish(item)}
            className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#1c1f22] border border-[#282c30] cursor-pointer"
          >
            <img
              src={currentImage}
              alt={item.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4
                onClick={() => setSelectedDish(item)}
                className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-light transition-colors cursor-pointer truncate"
              >
                {item.name}
              </h4>

              {item.isChefSpecial && (
                <span className="px-2 py-0.5 rounded-full bg-[#dfb755]/15 text-[#dfb755] text-[10px] font-bold uppercase tracking-wider">
                  Special
                </span>
              )}
              {item.isPopular && (
                <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                  Popular
                </span>
              )}
              {item.isSpicy && (
                <span className="flex items-center gap-0.5 text-amber-500 text-[10px] font-medium" title="Spicy">
                  <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                </span>
              )}
              {item.isVegetarian && (
                <span className="flex items-center gap-0.5 text-emerald-400 text-[10px] font-medium" title="Vegetarian">
                  <Leaf className="w-3 h-3 text-emerald-400" />
                </span>
              )}
            </div>

            <p className="text-xs text-[#9ca3af] mt-1 line-clamp-2 pr-2 leading-relaxed">
              {item.description}
            </p>

            {item.subCategory && (
              <span className="inline-block mt-1 text-[10px] text-[#6b7280] uppercase tracking-wider font-semibold">
                {item.subCategory}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#232629]">
          <div className="text-sm sm:text-base font-bold text-[#dfb755] whitespace-nowrap">
            {renderPrice()}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedDish(item)}
              className="p-2 rounded-lg bg-[#1a1d20] hover:bg-[#25282d] text-[#d1d5db] hover:text-white transition-colors cursor-pointer text-xs"
              title="View dish details"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (typeof item.price !== 'number' && item.hasPortions) {
                  setSelectedDish(item);
                } else {
                  addToCart(item, 'single', 1);
                }
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold-gradient text-black font-bold text-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-sm whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid Card Layout
  return (
    <div className="group rounded-2xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1">
      {/* Top Image */}
      <div 
        onClick={() => setSelectedDish(item)}
        className="relative h-48 sm:h-52 overflow-hidden bg-[#1c1f22] cursor-pointer"
      >
        <img
          src={currentImage}
          alt={item.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-transparent opacity-80" />

        {/* Badges on Image */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          {item.isChefSpecial && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#0c0d0e]/85 border border-[#dfb755]/60 text-[#dfb755] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              Chef Choice
            </span>
          )}
          {item.isPopular && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#0c0d0e]/85 border border-rose-500/60 text-rose-400 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              Popular
            </span>
          )}
        </div>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
          {item.isSpicy && (
            <span className="p-1.5 rounded-full bg-black/70 text-amber-400 backdrop-blur-md border border-amber-500/30" title="Spicy">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
            </span>
          )}
          {item.isVegetarian && (
            <span className="p-1.5 rounded-full bg-black/70 text-emerald-400 backdrop-blur-md border border-emerald-500/30" title="Vegetarian">
              <Leaf className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h4
              onClick={() => setSelectedDish(item)}
              className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-light transition-colors cursor-pointer"
            >
              {item.name}
            </h4>
          </div>

          {item.subCategory && (
            <div className="text-[10px] uppercase font-semibold tracking-wider text-[#dfb755] mb-1.5">
              {item.subCategory}
            </div>
          )}

          <p className="text-xs text-[#9ca3af] leading-relaxed line-clamp-2 mb-4">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#232629] flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#6b7280]">Price</span>
            <span className="text-sm sm:text-base font-bold text-[#dfb755]">
              {typeof item.price === 'number'
                ? `Rs. ${item.price.toLocaleString()}`
                : `H ${item.price.half} / F ${item.price.full}`}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedDish(item)}
              className="p-2 rounded-lg bg-[#1c1f22] hover:bg-[#272a2e] text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
              title="Quick view"
              aria-label={`View details of ${item.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (typeof item.price !== 'number' && item.hasPortions) {
                  setSelectedDish(item);
                } else {
                  addToCart(item, 'single', 1);
                }
              }}
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-gold-gradient text-black font-bold text-xs hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-md"
              aria-label={`Add ${item.name} to order`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
