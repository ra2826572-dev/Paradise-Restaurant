import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Flame, Leaf, Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PortionOption } from '../types';
import karahiImg from '../assets/images/paradise_karahi_1787663366776.jpg';
import bbqImg from '../assets/images/bbq_platter_1787663382928.jpg';
import drinksImg from '../assets/images/paradise_drinks_1787663399515.jpg';

export const DishModal: React.FC = () => {
  const { selectedDish, setSelectedDish, addToCart } = useCart();
  const [portion, setPortion] = useState<PortionOption>('single');
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (selectedDish) {
      if (selectedDish.hasPortions || (typeof selectedDish.price === 'object' && selectedDish.price.half)) {
        setPortion('full');
      } else {
        setPortion('single');
      }
      setQuantity(1);
      setInstructions('');
      setImageError(false);
    }
  }, [selectedDish]);

  if (!selectedDish) return null;

  const getFallbackImage = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('karahi') || cat.includes('handi')) return karahiImg;
    if (cat.includes('bbq') || cat.includes('steak') || cat.includes('starter')) return bbqImg;
    if (cat.includes('cold') || cat.includes('drink') || cat.includes('beverage')) return drinksImg;
    return 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80';
  };

  const modalImage = imageError ? getFallbackImage(selectedDish.category) : (selectedDish.image || getFallbackImage(selectedDish.category));

  const getUnitPrice = (): number => {
    if (typeof selectedDish.price === 'number') {
      return selectedDish.price;
    }
    if (portion === 'half' && selectedDish.price.half) {
      return selectedDish.price.half;
    }
    if (portion === 'full' && selectedDish.price.full) {
      return selectedDish.price.full;
    }
    return selectedDish.price.full || selectedDish.price.single || 0;
  };

  const unitPrice = getUnitPrice();
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    addToCart(selectedDish, portion, quantity, instructions);
    setSelectedDish(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-[#141618] border border-gold-subtle rounded-2xl shadow-2xl overflow-hidden my-8 animate-scale text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedDish(null)}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#dfb755] backdrop-blur-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Visual */}
        <div className="relative h-60 sm:h-72 w-full bg-[#1c1f22]">
          <img
            src={modalImage}
            alt={selectedDish.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-transparent to-black/30" />

          {/* Badges Over Image */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 border border-gold-subtle text-[#dfb755] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {selectedDish.category}
            </span>
            {selectedDish.subCategory && (
              <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-md">
                {selectedDish.subCategory}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {selectedDish.name}
              </h3>
              {selectedDish.isChefSpecial && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#dfb755]/20 text-[#dfb755] text-xs font-bold uppercase">
                  Chef Choice
                </span>
              )}
              {selectedDish.isSpicy && (
                <span className="flex items-center gap-1 text-amber-500 text-xs font-medium">
                  <Flame className="w-4 h-4 fill-amber-500" /> Spicy
                </span>
              )}
              {selectedDish.isVegetarian && (
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  <Leaf className="w-4 h-4" /> Vegetarian
                </span>
              )}
            </div>

            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed">
              {selectedDish.description}
            </p>
          </div>

          {/* Portion Selector (Half vs Full) if applicable */}
          {typeof selectedDish.price !== 'number' && selectedDish.hasPortions && (
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#d1d5db]">
                Select Portion Size:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {selectedDish.price.half && (
                  <button
                    type="button"
                    onClick={() => setPortion('half')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      portion === 'half'
                        ? 'bg-[#dfb755]/15 border-[#dfb755] text-[#dfb755]'
                        : 'bg-[#1a1d20] border-[#272a2e] text-[#9ca3af] hover:border-[#3a3f45]'
                    }`}
                  >
                    <span>Half Portion</span>
                    <span className="font-bold">Rs. {selectedDish.price.half.toLocaleString()}</span>
                  </button>
                )}

                {selectedDish.price.full && (
                  <button
                    type="button"
                    onClick={() => setPortion('full')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      portion === 'full'
                        ? 'bg-[#dfb755]/15 border-[#dfb755] text-[#dfb755]'
                        : 'bg-[#1a1d20] border-[#272a2e] text-[#9ca3af] hover:border-[#3a3f45]'
                    }`}
                  >
                    <span>Full Portion</span>
                    <span className="font-bold">Rs. {selectedDish.price.full.toLocaleString()}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Special Preparation Instructions */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af]">
              Special Requests (Optional):
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Less spicy, extra salad/raita, dressing on side..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#1a1d20] border border-[#272a2e] text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] transition-colors"
            />
          </div>

          {/* Quantity & Add to Cart Footer */}
          <div className="pt-4 border-t border-[#232629] flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Quantity Adjuster */}
            <div className="flex items-center gap-3 bg-[#1a1d20] border border-[#272a2e] rounded-xl p-1.5 w-full sm:w-auto justify-between sm:justify-start">
              <span className="text-xs text-[#9ca3af] px-2 font-medium">Quantity</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-[#24282d] hover:bg-[#2e333a] text-white flex items-center justify-center transition-colors cursor-pointer"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-white text-base">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-[#24282d] hover:bg-[#2e333a] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gold-gradient text-black font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer shadow-lg"
              id="modal-add-to-order-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Order &bull; Rs. {totalPrice.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
