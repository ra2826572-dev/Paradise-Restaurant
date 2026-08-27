/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedDishes } from './components/FeaturedDishes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishModal } from './components/DishModal';
import { ReservationModal } from './components/ReservationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0c0d0e] text-[#f3f4f6] flex flex-col selection:bg-[#dfb755]/30 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <FeaturedDishes />
          <MenuSection />
          <GallerySection />
          <ReviewsSection />
          <LocationContact />
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Global Floating Elements & Modals */}
        <FloatingWhatsApp />
        <CartDrawer />
        <DishModal />
        <ReservationModal />
      </div>
    </CartProvider>
  );
}

