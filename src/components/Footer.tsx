import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ChevronRight, Heart, Sparkles, Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090a] border-t border-[#1d2024] text-[#9ca3af] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
                  PARADISE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#dfb755]"></span>
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#dfb755] font-semibold -mt-0.5">
                RESTAURANT &bull; FAISALABAD
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-sm">
              Faisalabad’s hallmark for fine dining, authentic charcoal BBQ, cast-iron Karahi, Handi, gourmet steaks, and handcrafted Cold Bar beverages.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#141618] hover:bg-[#25D366] text-[#dfb755] hover:text-black border border-[#272a2e] hover:border-[#25D366] transition-all cursor-pointer"
                title="WhatsApp Us"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                className="p-2.5 rounded-full bg-[#141618] hover:bg-[#dfb755] text-[#dfb755] hover:text-black border border-[#272a2e] hover:border-[#dfb755] transition-all cursor-pointer"
                title="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#141618] hover:bg-[#dfb755] text-[#dfb755] hover:text-black border border-[#272a2e] hover:border-[#dfb755] transition-all cursor-pointer"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Full Menu', href: '#menu' },
                { label: 'Signatures', href: '#signatures' },
                { label: 'Photo Gallery', href: '#gallery' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'Find Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#dfb755] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#dfb755]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Menu Highlights
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Traditional Charcoal BBQ', href: '#menu' },
                { label: 'Desi Butter & Mutton Karahi', href: '#menu' },
                { label: 'Clay Pot Handi & Makhni', href: '#menu' },
                { label: 'Flame Grilled Steaks', href: '#menu' },
                { label: 'Artisan & Turkish Pizza', href: '#menu' },
                { label: 'Chinese Woks & Fried Rice', href: '#menu' },
                { label: 'Cold Bar & Mocktails', href: '#menu' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#dfb755] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#dfb755]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Location & Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-[#9ca3af]">
                <MapPin className="w-4 h-4 text-[#dfb755] shrink-0 mt-0.5" />
                <span>Naqvi Rd, near Faisal Gardens, Faisalabad, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#dfb755] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                  className="text-white hover:text-[#dfb755] font-semibold transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-[#9ca3af]">
                <Clock className="w-4 h-4 text-[#dfb755] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monday – Sunday</div>
                  <div className="text-emerald-400">1:00 PM – 2:00 AM Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-[#1d2024] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
          <div>
            &copy; 2026 Paradise Restaurant Faisalabad. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Dine-In &bull; Takeout &bull; Home Delivery &bull; Outdoor Seating &bull; Reservations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
