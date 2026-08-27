export type PortionOption = 'single' | 'half' | 'full';

export interface PriceStructure {
  single?: number;
  half?: number;
  full?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  subCategory?: string;
  description: string;
  price: number | PriceStructure;
  hasPortions?: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  image?: string;
  addOns?: Array<{ name: string; price: number | PriceStructure }>;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface CartItem {
  id: string; // unique cart item id (e.g. item.id + portion)
  menuItem: MenuItem;
  portion: PortionOption;
  selectedPrice: number;
  quantity: number;
  specialInstructions?: string;
}

export type OrderType = 'dine-in' | 'takeaway' | 'delivery';

export interface OrderCustomerDetails {
  name: string;
  phone: string;
  orderType: OrderType;
  tableNumber?: string;
  deliveryAddress?: string;
  notes?: string;
}

export interface ReservationDetails {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor_vip' | 'family_hall' | 'outdoor_terrace' | 'no_preference';
  specialRequests?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'restaurant' | 'food' | 'bbq' | 'interior' | 'events';
  image: string;
  description?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  tags?: string[];
  avatar?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  address: string;
  googleMapUrl: string;
  googleRating: number;
  reviewCount: number;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  hours: {
    days: string;
    time: string;
  };
  features: string[];
}
