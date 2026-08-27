import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Send,
  Sparkles,
  MapPin,
  Utensils,
  Truck,
  Package,
  Phone,
  User,
  MessageSquare
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderCustomerDetails, OrderType } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [customerDetails, setCustomerDetails] = useState<OrderCustomerDetails>({
    name: '',
    phone: '',
    orderType: 'dine-in',
    tableNumber: '',
    deliveryAddress: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isCartOpen) return null;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!customerDetails.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!customerDetails.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    }
    if (customerDetails.orderType === 'delivery' && !customerDetails.deliveryAddress?.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const waUrl = generateWhatsAppOrderUrl(customerDetails);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111315] border-l border-[#232629] text-white shadow-2xl flex flex-col justify-between animate-slide-left">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-[#232629] flex items-center justify-between bg-[#141618]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#dfb755]/10 text-[#dfb755]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Your Order</h3>
                <p className="text-xs text-[#9ca3af]">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-full bg-[#1c1f22] text-[#9ca3af] hover:text-white hover:bg-[#272a2e] transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#181b1e] border border-[#272a2e] flex items-center justify-center mx-auto mb-4 text-[#6b7280]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-1">Your Cart is Empty</h4>
                <p className="text-xs text-[#9ca3af] max-w-xs mx-auto mb-6">
                  Browse our menu and add authentic Pakistani BBQ, Karahi, steaks or drinks to begin your order.
                </p>
                <a
                  href="#menu"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Browse Menu</span>
                </a>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#9ca3af] pb-1">
                    <span className="font-semibold uppercase tracking-wider">Ordered Items</span>
                    <button
                      onClick={clearCart}
                      className="text-rose-400 hover:text-rose-300 font-medium transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-[#17191c] border border-[#232629] flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-bold text-white truncate">
                          {item.menuItem.name}
                        </h5>
                        <div className="flex items-center gap-2 text-xs text-[#9ca3af] mt-0.5">
                          {item.portion !== 'single' && (
                            <span className="px-1.5 py-0.2 rounded bg-[#25282d] text-[#dfb755] font-semibold uppercase text-[10px]">
                              {item.portion}
                            </span>
                          )}
                          <span>Rs. {item.selectedPrice.toLocaleString()} each</span>
                        </div>
                        {item.specialInstructions && (
                          <div className="text-[11px] text-[#6b7280] italic mt-1 truncate">
                            &ldquo;{item.specialInstructions}&rdquo;
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#1c1f22] rounded-lg border border-[#2a2d32]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:text-[#dfb755] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:text-[#dfb755] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-[#6b7280] hover:text-rose-400 transition-colors cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Type Tabs */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#d1d5db]">
                    Choose Order Type:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'dine-in', label: 'Dine-In', icon: <Utensils className="w-3.5 h-3.5" /> },
                      { id: 'takeaway', label: 'Takeaway', icon: <Package className="w-3.5 h-3.5" /> },
                      { id: 'delivery', label: 'Delivery', icon: <Truck className="w-3.5 h-3.5" /> },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() =>
                          setCustomerDetails({
                            ...customerDetails,
                            orderType: type.id as OrderType,
                          })
                        }
                        className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                          customerDetails.orderType === type.id
                            ? 'bg-[#dfb755]/15 border-[#dfb755] text-[#dfb755]'
                            : 'bg-[#17191c] border-[#272a2e] text-[#9ca3af] hover:border-[#383d44]'
                        }`}
                      >
                        {type.icon}
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Details Form */}
                <form id="cart-order-form" onSubmit={handleOrderSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                      <input
                        type="text"
                        value={customerDetails.name}
                        onChange={(e) => {
                          setCustomerDetails({ ...customerDetails, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Your Name"
                        className={`w-full pl-9 pr-3 py-2 rounded-xl bg-[#17191c] border text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] ${
                          errors.name ? 'border-rose-500' : 'border-[#272a2e]'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280]" />
                      <input
                        type="tel"
                        value={customerDetails.phone}
                        onChange={(e) => {
                          setCustomerDetails({ ...customerDetails, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="+92 3XX XXXXXXX"
                        className={`w-full pl-9 pr-3 py-2 rounded-xl bg-[#17191c] border text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] ${
                          errors.phone ? 'border-rose-500' : 'border-[#272a2e]'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>

                  {customerDetails.orderType === 'dine-in' && (
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
                        Table No. / Seating Hall (Optional)
                      </label>
                      <input
                        type="text"
                        value={customerDetails.tableNumber}
                        onChange={(e) =>
                          setCustomerDetails({ ...customerDetails, tableNumber: e.target.value })
                        }
                        placeholder="e.g. Table 12 / Family VIP Hall"
                        className="w-full px-3 py-2 rounded-xl bg-[#17191c] border border-[#272a2e] text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755]"
                      />
                    </div>
                  )}

                  {customerDetails.orderType === 'delivery' && (
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
                        Delivery Address in Faisalabad *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-[#6b7280]" />
                        <textarea
                          rows={2}
                          value={customerDetails.deliveryAddress}
                          onChange={(e) => {
                            setCustomerDetails({
                              ...customerDetails,
                              deliveryAddress: e.target.value,
                            });
                            if (errors.deliveryAddress) setErrors({ ...errors, deliveryAddress: '' });
                          }}
                          placeholder="House / Street / Sector, Faisalabad"
                          className={`w-full pl-9 pr-3 py-2 rounded-xl bg-[#17191c] border text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755] ${
                            errors.deliveryAddress ? 'border-rose-500' : 'border-[#272a2e]'
                          }`}
                        />
                      </div>
                      {errors.deliveryAddress && (
                        <p className="text-[10px] text-rose-400 mt-1">{errors.deliveryAddress}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1">
                      Order Notes (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-[#6b7280]" />
                      <input
                        type="text"
                        value={customerDetails.notes}
                        onChange={(e) =>
                          setCustomerDetails({ ...customerDetails, notes: e.target.value })
                        }
                        placeholder="e.g. Mild spice, please provide napkins and mint raita"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#17191c] border border-[#272a2e] text-xs text-white placeholder-[#6b7280] focus:outline-none focus:border-[#dfb755]"
                      />
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#232629] bg-[#141618] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#9ca3af]">
                  <span>Items Subtotal</span>
                  <span className="font-semibold text-white">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-[#9ca3af]">
                  <span>GST / Taxes</span>
                  <span className="text-emerald-400 font-medium">Inclusive / As Applicable</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-white pt-2 border-t border-[#232629]">
                  <span>Estimated Total</span>
                  <span className="text-[#dfb755] text-lg">Rs. {subtotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                form="cart-order-form"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
                id="cart-whatsapp-order-btn"
              >
                <Send className="w-4 h-4" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-[#6b7280]">
                  Official Line: <strong>+92 329 8124444</strong> &bull; Direct confirmation
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
