import React from 'react';
import { Sparkles, Utensils, HeartHandshake, Award, Clock, Users, Flame } from 'lucide-react';
import interiorImg from '../assets/images/paradise_interior_1787663418153.jpg';
import karahiImg from '../assets/images/paradise_karahi_1787663366776.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0e1012] border-t border-[#1d2024] relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfb755]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composite */}
          <div className="lg:col-span-6 relative">
            {/* Main Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-[#272a2e] shadow-2xl bg-[#141618]">
              <img
                src={interiorImg}
                alt="Paradise Restaurant interior dining hall and VIP lounge in Faisalabad"
                className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/90 via-transparent to-transparent" />

              {/* Float Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#121416]/90 border border-gold-subtle backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#dfb755]/10 text-[#dfb755]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Live Charcoal Grill & Desi Tandoor</h4>
                    <p className="text-xs text-[#9ca3af]">Freshly cooked upon your order</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs text-[#dfb755] font-semibold uppercase tracking-wider">Late Night</span>
                  <div className="text-xs text-white">Open till 2:00 AM</div>
                </div>
              </div>
            </div>

            {/* Small Overlapping Visual Badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#dfb755]/40 shadow-2xl">
              <img
                src={karahiImg}
                alt="Signature Karahi close-up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Feature Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.2em] text-[#dfb755] mb-4">
              <Sparkles className="w-3 h-3 text-[#dfb755]" />
              <span>THE PARADISE PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Taste Worth <span className="text-gold-gradient">Remembering</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-6 font-normal">
              Located on Naqvi Road near Faisal Gardens, <strong className="text-white">Paradise Restaurant</strong> stands as Faisalabad’s benchmark for culinary luxury. We unite generations-old Pakistani culinary traditions with modern global gastronomy.
            </p>

            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-8">
              Whether you crave the smoky perfection of our melt-in-mouth <span className="text-[#e5e7eb]">Malai Boti</span>, the fiery depth of cast-iron <span className="text-[#e5e7eb]">Desi Murgh Karahi</span>, sizzling gourmet <span className="text-[#e5e7eb]">Steaks</span>, stone-baked <span className="text-[#e5e7eb]">Turkish Pizza</span>, or artisanal mocktails from our Cold Bar, every dish is an ode to flavor.
            </p>

            {/* 3 Structured Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#dfb755]/10 flex items-center justify-center text-[#dfb755] mb-3">
                  <Utensils className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Fresh Ingredients</h3>
                <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                  Carefully selected farm-fresh produce and premium prime meats daily.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Signature Flavours</h3>
                <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                  Authentic heritage recipes prepared with artistic modern presentation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141618] border border-[#232629] hover:border-[#dfb755]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#dfb755]/10 flex items-center justify-center text-[#dfb755] mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Premium Ambiance</h3>
                <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                  Luxurious, comfortable spaces for families, corporate dinners and gatherings.
                </p>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs tracking-wider uppercase shadow-md hover:brightness-110 active:scale-95 transition-all"
                id="about-explore-menu-btn"
              >
                <span>DISCOVER OUR MENU</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181a1d] hover:bg-[#22262a] text-[#dfb755] border border-gold-subtle font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <span>VISIT US TODAY</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
