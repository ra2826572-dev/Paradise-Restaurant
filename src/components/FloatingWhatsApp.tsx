import React from 'react';
import { Send, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
          'Hello Paradise Restaurant! I would like to inquire about dining / placing an order.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        id="floating-whatsapp-btn"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
        <Send className="w-4 h-4 fill-black text-black" />
        <span className="hidden sm:inline">WhatsApp Order & Inquiries</span>
        <span className="sm:hidden font-bold">WhatsApp</span>
      </a>
    </aside>
  );
};
