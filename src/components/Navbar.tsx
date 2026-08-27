import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Calendar, Menu as MenuIcon, X, MapPin, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const Navbar: React.FC = () => {
  const { totalItems, openCart, setIsReservationOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-[#08090a] border-b border-[#232629] text-xs text-[#9ca3af] hidden sm:block py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#d1d5db]">
              <MapPin className="w-3.5 h-3.5 text-[#dfb755]" />
              Naqvi Rd, near Faisal Gardens, Faisalabad
            </span>
            <span className="text-[#4b5563]">|</span>
            <span className="flex items-center gap-1.5 text-[#d1d5db]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open Daily: 1:00 PM – 2:00 AM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.formattedPhone}`}
              className="flex items-center gap-1 text-[#dfb755] hover:text-[#f3d078] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#4b5563]">|</span>
            <span className="text-emerald-400 font-medium">★ 4.7 (944+ Google Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d0e]/95 backdrop-blur-md shadow-2xl border-b border-[#232629]/80 py-3'
            : 'bg-gradient-to-b from-[#0c0d0e]/90 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="group flex flex-col items-start focus:outline-none">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-gold-light transition-colors">
                  PARADISE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb755]"></span>
              </div>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#9ca3af] font-medium -mt-1 group-hover:text-white transition-colors">
                RESTAURANT &bull; FAISALABAD
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#d1d5db] hover:text-[#dfb755] tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#dfb755] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Table Booking CTA */}
              <button
                onClick={() => setIsReservationOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle text-xs sm:text-sm font-medium text-[#dfb755] hover:bg-[#dfb755]/10 hover:border-[#dfb755] transition-all cursor-pointer"
                id="navbar-book-table-btn"
              >
                <Calendar className="w-3.5 h-3.5 text-[#dfb755]" />
                <span>Book Table</span>
              </button>

              {/* View Menu Button */}
              <a
                href="#menu"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-gradient text-black font-semibold text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
                id="navbar-view-menu-btn"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>View Menu</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-full bg-[#1c1f22] border border-[#2d3136] text-[#e5e7eb] hover:text-[#dfb755] hover:border-[#dfb755]/40 transition-all cursor-pointer active:scale-95"
                aria-label="View shopping cart"
                id="navbar-cart-btn"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#dfb755] text-black font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-scale">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-[#141618] border border-[#272a2e] text-[#d1d5db] hover:text-white"
                aria-label="Toggle mobile menu"
                id="navbar-mobile-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#101214] border-b border-[#232629] px-5 pt-3 pb-6 space-y-3 animate-fade-down">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#e5e7eb] hover:text-[#dfb755] hover:bg-[#181a1d] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#232629] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsReservationOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#dfb755]/50 text-[#dfb755] font-medium text-sm hover:bg-[#dfb755]/10"
                id="mobile-book-table-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-gradient text-black font-semibold text-sm shadow-md"
                id="mobile-explore-menu-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.formattedPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#9ca3af] hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#dfb755]" />
                <span>Call: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
