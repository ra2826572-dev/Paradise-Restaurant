import { GalleryItem } from '../types';

import exteriorImg from '../assets/images/paradise_exterior_1787663350887.jpg';
import interiorImg from '../assets/images/paradise_interior_1787663418153.jpg';
import karahiImg from '../assets/images/paradise_karahi_1787663366776.jpg';
import bbqImg from '../assets/images/bbq_platter_1787663382928.jpg';
import drinksImg from '../assets/images/paradise_drinks_1787663399515.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Paradise Restaurant Night Exterior',
    category: 'restaurant',
    image: exteriorImg,
    description: 'Iconic glowing emerald and golden facade on Naqvi Road, Faisal Gardens'
  },
  {
    id: 'gal-2',
    title: 'Royal Charcoal BBQ Platter',
    category: 'bbq',
    image: bbqImg,
    description: 'Freshly grilled Malai Boti, Seekh Kebabs, Shish Taouk, and fragrant rice'
  },
  {
    id: 'gal-3',
    title: 'Signature Cast-Iron Karahi',
    category: 'food',
    image: karahiImg,
    description: 'Simmered with desi ghee, fresh green chillies and hand-picked spices'
  },
  {
    id: 'gal-4',
    title: 'Executive VIP Lounge & Dining Hall',
    category: 'interior',
    image: interiorImg,
    description: 'Warm ambient crystal chandeliers and velvet seating for families'
  },
  {
    id: 'gal-5',
    title: 'Artisan Cold Bar & Signature Mocktails',
    category: 'food',
    image: drinksImg,
    description: 'Crafted Lemon Mint Coolers, Blue Mojitos, and thick velvety shakes'
  },
  {
    id: 'gal-6',
    title: 'Authentic Clay Oven Tandoor',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    description: 'Steaming hot Roghni, Garlic, and Kalvonji naans baked fresh to order'
  },
  {
    id: 'gal-7',
    title: 'Special Celebrations & Private Dinners',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
    description: 'Host memorable birthdays, corporate gatherings, and family feasts'
  },
  {
    id: 'gal-8',
    title: 'Continental Steaks & Gourmet Pastas',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80',
    description: 'Flame-broiled chicken steaks with creamy mushroom and pepper sauces'
  }
];
