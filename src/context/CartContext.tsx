import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, OrderCustomerDetails, PortionOption } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, portion?: PortionOption, quantity?: number, instructions?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  selectedDish: MenuItem | null;
  setSelectedDish: (item: MenuItem | null) => void;
  isReservationOpen: boolean;
  setIsReservationOpen: (open: boolean) => void;
  generateWhatsAppOrderUrl: (details: OrderCustomerDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'paradise_restaurant_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (
    item: MenuItem,
    portion: PortionOption = 'single',
    quantity: number = 1,
    instructions: string = ''
  ) => {
    let price = 0;
    if (typeof item.price === 'number') {
      price = item.price;
    } else {
      if (portion === 'half' && item.price.half) {
        price = item.price.half;
      } else if (portion === 'full' && item.price.full) {
        price = item.price.full;
      } else {
        price = item.price.full || item.price.single || 0;
      }
    }

    const cartItemId = `${item.id}-${portion}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          specialInstructions: instructions || updated[existingIndex].specialInstructions,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            menuItem: item,
            portion,
            selectedPrice: price,
            quantity,
            specialInstructions: instructions,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.selectedPrice * item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const generateWhatsAppOrderUrl = (details: OrderCustomerDetails): string => {
    let text = `*👑 PARADISE RESTAURANT — ORDER REQUEST 👑*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Service Type:* ${details.orderType.toUpperCase()}\n`;
    text += `*Customer Name:* ${details.name}\n`;
    text += `*Phone:* ${details.phone}\n`;

    if (details.orderType === 'dine-in' && details.tableNumber) {
      text += `*Table / Hall:* ${details.tableNumber}\n`;
    }
    if (details.orderType === 'delivery' && details.deliveryAddress) {
      text += `*Delivery Address:* ${details.deliveryAddress}\n`;
    }
    if (details.notes) {
      text += `*Special Instructions:* ${details.notes}\n`;
    }

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*ORDER ITEMS:*\n`;

    cart.forEach((item, idx) => {
      const portionText = item.portion !== 'single' ? ` (${item.portion.toUpperCase()})` : '';
      text += `${idx + 1}. *${item.menuItem.name}*${portionText}\n`;
      text += `   Qty: ${item.quantity} × Rs. ${item.selectedPrice.toLocaleString()} = *Rs. ${(
        item.selectedPrice * item.quantity
      ).toLocaleString()}*\n`;
      if (item.specialInstructions) {
        text += `   _Note: ${item.specialInstructions}_\n`;
      }
    });

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*ESTIMATED TOTAL: Rs. ${subtotal.toLocaleString()}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `📍 Naqvi Rd, near Faisal Gardens, Faisalabad\n`;
    text += `Please confirm my order. Thank you!`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        selectedDish,
        setSelectedDish,
        isReservationOpen,
        setIsReservationOpen,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
