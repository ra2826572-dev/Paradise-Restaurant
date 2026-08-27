import React, { useState } from 'react';
import { X, Calendar, Clock, Users, User, Phone, MapPin, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ReservationDetails } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<ReservationDetails>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: 4,
    seatingArea: 'indoor_vip',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isReservationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your contact number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    let msg = `*👑 PARADISE RESTAURANT — TABLE RESERVATION REQUEST 👑*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `*Name:* ${formData.name}\n`;
    msg += `*Phone:* ${formData.phone}\n`;
    msg += `*Date:* ${formData.date}\n`;
    msg += `*Time:* ${formData.time}\n`;
    msg += `*Guests:* ${formData.guests} Persons\n`;
    msg += `*Seating Area:* ${
      formData.seatingArea === 'indoor_vip'
        ? 'Indoor VIP Hall'
        : formData.seatingArea === 'family_hall'
        ? 'Family Lounge'
        : formData.seatingArea === 'outdoor_terrace'
        ? 'Outdoor Terrace'
        : 'Any Available Seating'
    }\n`;
    if (formData.specialRequests) {
      msg += `*Special Notes:* ${formData.specialRequests}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm table availability. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsReservationOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#141618] border border-gold-subtle rounded-2xl shadow-2xl overflow-hidden my-8 animate-scale text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsReservationOpen(false);
            setIsSubmitted(false);
          }}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1c1f22] text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#181a1d] border-b border-[#232629]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dfb755]/10 border border-[#dfb755]/30 text-[11px] font-bold uppercase tracking-widest text-[#dfb755] mb-2">
            <Sparkles className="w-3 h-3" />
            <span>FINE DINING RESERVATION</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Book Your Table at <span className="text-gold-gradient">Paradise</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#9ca3af] mt-1">
            Reserve seating for families, romantic dinners, or special private feasts.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Reservation Request Logged!</h4>
              <p className="text-xs sm:text-sm text-[#9ca3af] max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your table request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> is ready.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>CONFIRM INSTANTLY ON WHATSAPP</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsReservationOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1c1f22] text-[#d1d5db] hover:text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Tariq Mehmood"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#1a1d20] border text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] ${
                        errors.name ? 'border-rose-500' : 'border-[#272a2e]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+92 3XX XXXXXXX"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#1a1d20] border text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] ${
                        errors.phone ? 'border-rose-500' : 'border-[#272a2e]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-[#1a1d20] border border-[#272a2e] text-xs text-white focus:outline-none focus:border-[#dfb755]"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-[#1a1d20] border border-[#272a2e] text-xs text-white focus:outline-none focus:border-[#dfb755]"
                    >
                      <option value="13:30">1:30 PM (Lunch)</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="20:00">8:00 PM (Dinner)</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="23:00">11:00 PM (Late Night)</option>
                      <option value="00:30">12:30 AM</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full pl-9 pr-2 py-2.5 rounded-xl bg-[#1a1d20] border border-[#272a2e] text-xs text-white focus:outline-none focus:border-[#dfb755]"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Seating Area Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'indoor_vip', label: 'Indoor VIP Hall' },
                    { id: 'family_hall', label: 'Family Lounge' },
                    { id: 'outdoor_terrace', label: 'Outdoor Terrace' },
                    { id: 'no_preference', label: 'Any Preference' },
                  ].map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          seatingArea: area.id as any,
                        })
                      }
                      className={`p-2.5 rounded-xl border text-center font-medium transition-colors cursor-pointer ${
                        formData.seatingArea === area.id
                          ? 'bg-[#dfb755]/15 border-[#dfb755] text-[#dfb755]'
                          : 'bg-[#1a1d20] border-[#272a2e] text-[#9ca3af] hover:border-[#383d44]'
                      }`}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-1">
                  Special Occasion or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g., Birthday decor, anniversary quiet corner, high chair for toddler..."
                  className="w-full p-3 rounded-xl bg-[#1a1d20] border border-[#272a2e] text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer mt-2"
                id="reservation-submit-btn"
              >
                REQUEST RESERVATION
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
