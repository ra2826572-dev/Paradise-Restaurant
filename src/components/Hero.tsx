import React from 'react';
import { Sparkles, Calendar, ChevronDown, Star, MapPin, Award, ShieldCheck, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import heroBgImg from '../assets/images/paradise_exterior_1787663350887.jpg';

export const Hero: React.FC = () => {
  const { setIsReservationOpen } = useCart();

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0e]">
      {/* Background Image with Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgImg}
          alt="Paradise Restaurant exterior at dusk on Naqvi Road, Faisalabad"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms] opacity-50 filter brightness-75 contrast-110"
        />
        {/* Layered Luxury Gradient Overlays for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/75 to-[#0c0d0e]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e]/90 via-transparent to-[#0c0d0e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,183,85,0.08),transparent_70%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d]/80 border border-gold-subtle backdrop-blur-md mb-6 animate-fade-in shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#dfb755] animate-ping" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755]">
            FAISALABAD &bull; EST. FOR GREAT TASTE
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.08]">
          PARADISE <span className="text-gold-gradient block sm:inline">RESTAURANT</span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#e5e7eb] max-w-3xl mb-4 font-light tracking-wide">
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
        </p>

        {/* Subtitle Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#9ca3af] max-w-2xl mb-8 sm:mb-10 font-normal leading-relaxed">
          Indulge in Faisalabad’s premier dining destination. Authentic Pakistani BBQ, signature wok Karahi, sizzling clay-pot Handi, gourmet steaks, and handcrafted beverages.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12 sm:mb-16">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-gradient text-black font-bold text-sm tracking-wide shadow-xl hover:shadow-[#dfb755]/20 hover:brightness-110 active:scale-98 transition-all"
            id="hero-explore-menu-cta"
          >
            <Flame className="w-4 h-4 text-black" />
            <span>EXPLORE MENU</span>
          </a>

          <button
            onClick={() => setIsReservationOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#181b1e]/90 hover:bg-[#202428] text-white border border-[#dfb755]/40 hover:border-[#dfb755] font-semibold text-sm tracking-wide shadow-lg backdrop-blur-sm active:scale-98 transition-all cursor-pointer"
            id="hero-book-table-cta"
          >
            <Calendar className="w-4 h-4 text-[#dfb755]" />
            <span>BOOK A TABLE</span>
          </button>
        </div>

        {/* Service Highlights / Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-6 border-t border-[#232629]/70 text-left">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121416]/60 border border-[#232629]/50">
            <div className="p-2 rounded-lg bg-[#dfb755]/10 text-[#dfb755]">
              <Star className="w-4 h-4 fill-[#dfb755]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">4.7 / 5.0</div>
              <div className="text-[11px] text-[#9ca3af]">944+ Google Reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121416]/60 border border-[#232629]/50">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Live Charcoal</div>
              <div className="text-[11px] text-[#9ca3af]">Traditional BBQ</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121416]/60 border border-[#232629]/50">
            <div className="p-2 rounded-lg bg-[#dfb755]/10 text-[#dfb755]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Premium Quality</div>
              <div className="text-[11px] text-[#9ca3af]">Fresh Desi Ingredients</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121416]/60 border border-[#232629]/50">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Faisal Gardens</div>
              <div className="text-[11px] text-[#9ca3af]">Naqvi Rd, Faisalabad</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-10 sm:mt-12 inline-flex flex-col items-center gap-1 text-[#6b7280] hover:text-[#dfb755] transition-colors focus:outline-none"
          aria-label="Scroll down to about section"
        >
          <span className="text-[11px] uppercase tracking-widest font-medium">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
