import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Calendar, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { useCart } from '../context/CartContext';
import exteriorImg from '../assets/images/paradise_exterior_1787663350887.jpg';

export const LocationContact: React.FC = () => {
  const { setIsReservationOpen } = useCart();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0c0d0e] border-t border-[#1d2024] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a1d] border border-gold-subtle text-xs font-semibold uppercase tracking-[0.25em] text-[#dfb755] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#dfb755]" />
            <span>FIND & CONNECT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            VISIT <span className="text-gold-gradient">PARADISE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af]">
            Situated on Naqvi Road near Faisal Gardens, Faisalabad. We welcome you for dining, takeaways, delivery, and grand celebratory feasts.
          </p>
        </div>

        {/* Contact Info Grid + Interactive Map Composite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 5 Cols: Contact Information Details & Direct CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#141618] p-6 sm:p-8 rounded-2xl border border-[#232629]">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af]">
                  Reach out for table inquiries, catering arrangements, takeaway pickups, or home delivery.
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#1a1d20] border border-[#272a2e]">
                  <div className="p-2.5 rounded-lg bg-[#dfb755]/10 text-[#dfb755] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-0.5">Location Address</h4>
                    <p className="text-[#9ca3af] leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#1a1d20] border border-[#272a2e]">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-0.5">Direct Line & WhatsApp</h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                      className="text-white hover:text-[#dfb755] font-semibold transition-colors block"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#1a1d20] border border-[#272a2e]">
                  <div className="p-2.5 rounded-lg bg-[#dfb755]/10 text-[#dfb755] mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-0.5">Operating Hours</h4>
                    <p className="text-white font-medium">
                      {RESTAURANT_INFO.hours.days}
                    </p>
                    <p className="text-emerald-400 text-xs mt-0.5">
                      {RESTAURANT_INFO.hours.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#232629]">
              <a
                href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                className="py-3 px-3 rounded-xl bg-[#1f2226] hover:bg-[#282d33] text-white border border-[#2f343b] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                id="contact-call-now-btn"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfb755]" />
                <span>CALL NOW</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center shadow-md"
                id="contact-whatsapp-btn"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl bg-[#1f2226] hover:bg-[#282d33] text-[#dfb755] border border-gold-subtle text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                id="contact-directions-btn"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>DIRECTIONS</span>
              </a>

              <button
                onClick={() => setIsReservationOpen(true)}
                className="py-3 px-3 rounded-xl bg-gold-gradient text-black text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center shadow-md cursor-pointer"
                id="contact-book-table-btn"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK TABLE</span>
              </button>
            </div>
          </div>

          {/* Right 7 Cols: Visual Map Display */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#141618] border border-[#232629] relative flex flex-col justify-between shadow-2xl min-h-[420px]">
            {/* Map Frame Visual / Image */}
            <div className="relative flex-1 w-full overflow-hidden">
              <iframe
                title="Paradise Restaurant Location Map"
                src="https://maps.google.com/maps?q=Paradise%20Restaurant%20Naqvi%20Rd%20Faisal%20Gardens%20Faisalabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] border-0 filter grayscale contrast-125 invert opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Marker Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#0c0d0e]/95 border border-gold-subtle backdrop-blur-md shadow-2xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#dfb755] text-black font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">Paradise Restaurant</h4>
                    <p className="text-[11px] text-[#9ca3af] mt-0.5">
                      Naqvi Rd, near Faisal Gardens, Faisalabad
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] text-emerald-400 font-semibold">Open Daily till 2 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Strip */}
            <div className="p-4 bg-[#111315] border-t border-[#232629] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-[#9ca3af] text-center sm:text-left">
                🚗 Complimentary Valet Parking &bull; 🪑 Outdoor Terrace Seating
              </div>
              <a
                href={RESTAURANT_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#dfb755] hover:text-[#f3d078] transition-colors"
              >
                <span>Open in Google Maps App</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
