import React, { useState, useMemo } from 'react';
import {
  Search,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Soup,
  Salad,
  CookingPot,
  ChefHat,
  Wheat,
  Fish,
  Beef,
  Sandwich,
  Pizza,
  GlassWater,
  LayoutGrid,
  List,
  Layers,
  Filter,
  Check
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { MenuCard } from './MenuCard';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Map icon component strings
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'all': return <UtensilsCrossed className="w-4 h-4" />;
      case 'starter': return <Sparkles className="w-4 h-4" />;
      case 'soups': return <Soup className="w-4 h-4" />;
      case 'salad': return <Salad className="w-4 h-4" />;
      case 'bbq': return <Flame className="w-4 h-4" />;
      case 'karahi': return <CookingPot className="w-4 h-4" />;
      case 'handi': return <ChefHat className="w-4 h-4" />;
      case 'tandoor': return <Wheat className="w-4 h-4" />;
      case 'english': return <Fish className="w-4 h-4" />;
      case 'steak': return <Beef className="w-4 h-4" />;
      case 'sandwich-burger': return <Sandwich className="w-4 h-4" />;
      case 'pizza': return <Pizza className="w-4 h-4" />;
      case 'chinese': return <CookingPot className="w-4 h-4" />;
      case 'cold-bar': return <GlassWater className="w-4 h-4" />;
      default: return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  // Cold bar subcategories
  const coldBarSubCategories = [
    'all',
    'Juice Cooler',
    'Soda',
    'Smoothies',
    'Mojitos',
    'Ice Latte',
    'Frappe',
    'Mocktail',
    'Shakes',
    'Seasoned Flavoured Lassi',
    'Beverages'
  ];

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category Match
      const matchesCategory =
        activeCategory === 'all' || item.categoryId === activeCategory;

      // SubCategory Match (for cold-bar)
      const matchesSubCategory =
        activeCategory !== 'cold-bar' ||
        activeSubCategory === 'all' ||
        item.subCategory === activeSubCategory;

      // Search Query Match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(query));

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0c0d0e] border-t border-[#1d2024] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb755]" />
            <span>CULINARY EXCELLENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            OUR COMPLETE <span className="text-gold-gradient">MENU</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            Authentic recipes, pure ingredients, and masterful preparation across 13 diverse categories.
          </p>
        </div>

        {/* Search & Layout View Mode Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#141618] p-3 sm:p-4 rounded-2xl border border-[#232629]">
          {/* Search Field */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our menu (e.g. Karahi, Malai Boti, Steak, Shake)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1f22] border border-[#272a2e] text-sm text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] transition-colors"
              id="menu-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9ca3af] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count & View Mode Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="text-xs text-[#9ca3af] font-medium">
              Showing <span className="text-white font-bold">{filteredItems.length}</span> items
            </div>

            <div className="flex items-center gap-1 bg-[#1c1f22] p-1 rounded-xl border border-[#272a2e]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gold-gradient text-black shadow-sm'
                    : 'text-[#9ca3af] hover:text-white'
                }`}
                title="Grid Card View"
                aria-label="Grid Card View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Cards</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-gold-gradient text-black shadow-sm'
                    : 'text-[#9ca3af] hover:text-white'
                }`}
                title="Classic Restaurant Menu Two-Column View"
                aria-label="Classic Restaurant Menu Two-Column View"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">Classic Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs (Sticky on horizontal scroll) */}
        <div className="mb-8 overflow-x-auto no-scrollbar pb-2 pt-1">
          <div className="flex items-center gap-2 min-w-max">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveSubCategory('all');
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gold-gradient text-black shadow-lg shadow-[#dfb755]/15 scale-100 font-bold'
                      : 'bg-[#141618] hover:bg-[#1c1f22] text-[#d1d5db] border border-[#272a2e] hover:border-[#3a3f45]'
                  }`}
                >
                  <span className={isActive ? 'text-black' : 'text-[#dfb755]'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/20 text-black' : 'bg-[#232629] text-[#9ca3af]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategories selector if Cold Bar is selected */}
        {activeCategory === 'cold-bar' && (
          <div className="mb-8 p-4 rounded-2xl bg-[#141618] border border-[#232629] animate-fade-in">
            <div className="text-xs font-bold uppercase tracking-wider text-[#dfb755] mb-3 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter Cold Bar Specialities:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {coldBarSubCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubCategory(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeSubCategory === sub
                      ? 'bg-[#dfb755]/20 text-[#dfb755] border border-[#dfb755]'
                      : 'bg-[#1c1f22] text-[#9ca3af] hover:text-white border border-[#272a2e]'
                  }`}
                >
                  {sub === 'all' ? 'All Beverages' : sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Karahi Add-Ons Notice Banner (Visible when Karahi is selected or in All view) */}
        {(activeCategory === 'karahi' || activeCategory === 'all') && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17191c] via-[#1c1f23] to-[#17191c] border border-gold-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#dfb755]/10 text-[#dfb755]">
                <CookingPot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Karahi Add-Ons & Preparation Choices</h4>
                <p className="text-xs text-[#9ca3af]">Customise your Karahi with premium pure cooking mediums</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-[#141618] border border-[#272a2e] text-[#e5e7eb]">
                🧈 <strong>Butter:</strong> H Rs. 350 / F Rs. 650
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#141618] border border-[#272a2e] text-[#e5e7eb]">
                🫕 <strong>Desi Ghee:</strong> H Rs. 350 / F Rs. 650
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#141618] border border-[#272a2e] text-[#e5e7eb]">
                🫒 <strong>Olive Oil:</strong> H Rs. 400 / F Rs. 700
              </span>
            </div>
          </div>
        )}

        {/* Menu Items Rendering */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-[#141618] rounded-2xl border border-[#232629]">
            <UtensilsCrossed className="w-12 h-12 text-[#4b5563] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-white mb-1">No Dishes Found</h3>
            <p className="text-sm text-[#9ca3af] max-w-md mx-auto mb-4">
              We couldn&apos;t find any dishes matching &ldquo;{searchQuery}&rdquo;. Try another keyword or browse our full category list.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setActiveSubCategory('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#1c1f22] border border-[#272a2e] text-xs font-semibold text-[#dfb755] hover:bg-[#25292e] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} layout="grid" />
            ))}
          </div>
        ) : (
          /* Classic Fine-Dining 2-Column Book Layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2 bg-[#121416] p-6 sm:p-8 rounded-2xl border border-[#232629]">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} layout="list" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
