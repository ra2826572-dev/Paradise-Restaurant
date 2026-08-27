import { MenuCategory, MenuItem } from '../types';

import karahiImg from '../assets/images/paradise_karahi_1787663366776.jpg';
import bbqImg from '../assets/images/bbq_platter_1787663382928.jpg';
import drinksImg from '../assets/images/paradise_drinks_1787663399515.jpg';
import pastaImg from '../assets/images/paradise_pasta_1787824336652.jpg';
import turkishPizzaImg from '../assets/images/turkish_pizza_1787824363338.jpg';
import clubSandwichImg from '../assets/images/club_sandwich_1787824376942.jpg';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Menu', icon: 'UtensilsCrossed', description: 'Explore our complete dining selection', count: 136 },
  { id: 'starter', name: 'Starter', icon: 'Sparkles', description: 'Crispy appetizers and signature prawn & chicken bites', count: 10 },
  { id: 'soups', name: 'Soups', icon: 'Soup', description: 'Rich, warming broths and thick velvety soups', count: 5 },
  { id: 'salad', name: 'Salad', icon: 'Salad', description: 'Fresh crisp greens, Russian salad & raita', count: 5 },
  { id: 'bbq', name: 'Traditional B.B.Q', icon: 'Flame', description: 'Charcoal grilled kebabs, tender boti & royal platters', count: 18 },
  { id: 'karahi', name: 'Karahi', icon: 'CookingPot', description: 'Fresh wok-cooked chicken, desi murgh & mutton in tomato gravy', count: 4 },
  { id: 'handi', name: 'Handi', icon: 'ChefHat', description: 'Creamy clay-pot boneless specialties & Daal Makhni', count: 8 },
  { id: 'tandoor', name: 'Tandoor', icon: 'Wheat', description: 'Freshly baked Roghni, Garlic, Kalvonji naan & rotis', count: 6 },
  { id: 'english', name: 'English & Continental', icon: 'Fish', description: 'Cheesy stuffed chicken, fish & chips, and creamy pastas', count: 7 },
  { id: 'steak', name: 'Steak', icon: 'Beef', description: 'Charcoal grilled chicken steaks with signature rich sauces', count: 6 },
  { id: 'sandwich-burger', name: 'Sandwich & Burger', icon: 'Sandwich', description: 'Paninis, club sandwiches and crunchy crispy burgers', count: 4 },
  { id: 'pizza', name: 'Pizza', icon: 'Pizza', description: 'Stone-baked artisan pizzas & Turkish style specialties', count: 4 },
  { id: 'chinese', name: 'Chinese & Rice', icon: 'Bowl', description: 'Authentic woks, chowmein, gravies & egg fried rice', count: 17 },
  { id: 'cold-bar', name: 'Cold Bar', icon: 'GlassWater', description: 'Artisan mocktails, mojitos, shakes, frappes & lassi', count: 39 },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- 1. STARTER ---
  {
    id: 'starter-1',
    name: 'Chilli Cheese Prawn',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Prawn, Cheese, Chilli, Cover with Crumbs',
    price: 2695,
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-2',
    name: 'Japanese Fried Prawn',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Fried prawns marinated in Japanese spices, coated with crispy crumbs',
    price: 2495,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-3',
    name: 'Spicy Honey Wings',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Deep fried wings, glazed in spices & honey sauce',
    price: 1480,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-4',
    name: 'Dynamite Chicken',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Fried chicken cube marinated in hot spices, served with dynamite sauce',
    price: 1650,
    isPopular: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-5',
    name: 'Strips Chicken',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Crispy chicken strips marinated with mixed spices and coated with crispy crumbs',
    price: 1480,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-6',
    name: 'Loaded Crispy Fries',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Bed of fries, crispy chicken cube, jalapeño, salsa, cheese',
    price: 1170,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-7',
    name: 'French Fries',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Crunchy Texture & Savory Taste',
    price: 795,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-8',
    name: 'Chicken Nuggets',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Crumbs Fried Chicken Cube, Fries, Serve with Ketchup',
    price: 1080,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-9',
    name: 'Family Platter',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Fish Balls, wings, batter fried chicken, fries and sauce',
    price: 1930,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'starter-10',
    name: 'Dhaka Chicken',
    category: 'Starter',
    categoryId: 'starter',
    description: 'Fried sliced chicken marinated hot spices served with fries',
    price: 1680,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&auto=format&fit=crop&q=80'
  },

  // --- 2. SOUPS ---
  {
    id: 'soup-11',
    name: 'Paradise Special Soup',
    category: 'Soups',
    categoryId: 'soups',
    description: 'Chicken, Prawn, Carrot, Black Mushroom, Top on Crushed Cashew nut',
    price: { half: 1350, full: 2190 },
    hasPortions: true,
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'soup-12',
    name: 'Hot & Sour',
    category: 'Soups',
    categoryId: 'soups',
    description: 'Chicken, Vegetable, Egg, Cooked in Chicken Stock',
    price: { half: 1295, full: 1870 },
    hasPortions: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'soup-13',
    name: 'Chicken Corn',
    category: 'Soups',
    categoryId: 'soups',
    description: 'Minced Chicken, Sweet Corn, Egg, Chicken Stock',
    price: { half: 1295, full: 1870 },
    hasPortions: true,
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'soup-14',
    name: 'Chicken Clear',
    category: 'Soups',
    categoryId: 'soups',
    description: 'Clear Chicken Stock, Sliced Chicken, Green Chilli',
    price: { half: 1295, full: 1870 },
    hasPortions: true,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'soup-15',
    name: 'Cream of Chicken',
    category: 'Soups',
    categoryId: 'soups',
    description: 'Creamy Thick Soup, Blend Black Mushroom, Chicken',
    price: 720,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&auto=format&fit=crop&q=80'
  },

  // --- 3. SALAD ---
  {
    id: 'salad-16',
    name: 'Paradise Special Salad',
    category: 'Salad',
    categoryId: 'salad',
    description: 'Apple, Mix Fruit, Dry Nuts, Glaze in Special Sauce',
    price: 1095,
    isChefSpecial: true,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'salad-17',
    name: 'Russian Salad',
    category: 'Salad',
    categoryId: 'salad',
    description: 'Creamy Mixture, Diced Vegetable, Fruit',
    price: 799,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'salad-18',
    name: 'Fresh Green Salad',
    category: 'Salad',
    categoryId: 'salad',
    description: 'Ice Berg, Cucumber, Onion, Tomato, Lemon Wedge',
    price: 290,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'salad-19',
    name: 'Kachumar Salad',
    category: 'Salad',
    categoryId: 'salad',
    description: 'Covering Something Light, Bursting fresh diced veggies with lemon & spices',
    price: 340,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'salad-20',
    name: 'Raita & Mint Sauce',
    category: 'Salad',
    categoryId: 'salad',
    description: 'Cooling whipped yogurt tempered with garden fresh mint & roasted cumin',
    price: 290,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&auto=format&fit=crop&q=80'
  },

  // --- 4. TRADITIONAL B.B.Q ---
  {
    id: 'bbq-21',
    name: 'Malai Boti',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Boneless Thai Chicken Cubes, Marinated in a Rich Cream Mixture',
    price: 1795,
    isPopular: true,
    isChefSpecial: true,
    image: bbqImg
  },
  {
    id: 'bbq-22',
    name: 'Chicken Boti',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken cubes with bone marinated in yogurt & spices',
    price: 1795,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-23',
    name: 'Hariyali Boti',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken Cubes Marinated in Bold Mix Green, Yogurt, Spice',
    price: 1795,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-24',
    name: 'Shish Tauk',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Middle East Chicken, Marinated in a Tangy Mix, Typically Spice',
    price: 2175,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-25',
    name: 'Afghani Boti',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken cube marinated salty flavour and grill vegetables',
    price: 2125,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-26',
    name: 'Rajasthani Cheese Boti',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken cube marinated in spicy yogurt chilli cheese',
    price: 2195,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-27',
    name: 'Dum Pukht',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken leg marinated in rich blend of yogurt spice',
    price: 2045,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1514944298352-c3f2541c4a03?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-28',
    name: 'Fish Tikka',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Cube a Fish, Marinated a our Spices',
    price: 2945,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-29',
    name: 'Tikka Piece (L/C)',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken piece with bone marinated in yogurt & spices',
    price: 700,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-30',
    name: 'Malai Piece',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken piece marinated in rich cream & spices',
    price: 950,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-31',
    name: 'Mutton Multani Chops',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Ribs/rib bones typically marinated, rich juicy flavour',
    price: 3595,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-32',
    name: 'Chicken Kebab',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Minced chicken, smoke flavour, tender textures, rich spice',
    price: 1545,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-33',
    name: 'Chicken Reshmi Kebab',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken minced marinated in cream cheese and cashewnut paste',
    price: 1850,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-34',
    name: 'Chicken Cheese Kebab',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Chicken cheese kabab in flavourful melted cheese',
    price: 1755,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-35',
    name: 'Turkish Chicken Kebab',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Marinated chicken in a blend of spice, rich aromatic',
    price: 1810,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-36',
    name: 'Mutton Kebab',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Mutton minced mix with spice, herbs, onions',
    price: 1895,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'bbq-37',
    name: 'Platter for 2 Persons',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Malai Boti, Fish Tikka, Turkish Kebab, Mutton Kebab with rice & sauces',
    price: 2995,
    isChefSpecial: true,
    isPopular: true,
    image: bbqImg
  },
  {
    id: 'bbq-38',
    name: 'Family Platter for 4 Persons',
    category: 'Traditional B.B.Q',
    categoryId: 'bbq',
    description: 'Malai Boti, Shish Tauk Boti, Dum Pukht, Mutton Kebab, Chicken Cheese Kebab, Afghani Boti with rice',
    price: 5495,
    isChefSpecial: true,
    isPopular: true,
    image: bbqImg
  },

  // --- 5. KARAHI ---
  {
    id: 'karahi-39',
    name: 'Chicken Karahi',
    category: 'Karahi',
    categoryId: 'karahi',
    description: 'Traditional Pakistani Dish, Cooked in Tomato Gravy',
    price: { half: 1499, full: 2299 },
    hasPortions: true,
    isPopular: true,
    image: karahiImg
  },
  {
    id: 'karahi-40',
    name: 'Desi Murgh Karahi',
    category: 'Karahi',
    categoryId: 'karahi',
    description: 'Desi Murgh, tomato, yogurt, green chilli, spice',
    price: { half: 2970, full: 4875 },
    hasPortions: true,
    isChefSpecial: true,
    image: karahiImg
  },
  {
    id: 'karahi-41',
    name: 'Boneless Karahi',
    category: 'Karahi',
    categoryId: 'karahi',
    description: 'Chicken Cube, tomato, yogurt, green chilli, spice',
    price: { half: 1400, full: 2600 },
    hasPortions: true,
    image: karahiImg
  },
  {
    id: 'karahi-42',
    name: 'Mutton Karahi',
    category: 'Karahi',
    categoryId: 'karahi',
    description: 'Mutton, tomato, yogurt, green chilli, spice',
    price: { half: 3090, full: 4995 },
    hasPortions: true,
    isChefSpecial: true,
    isPopular: true,
    image: karahiImg
  },

  // --- 6. HANDI ---
  {
    id: 'handi-43',
    name: 'Murgh Makhni',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Chicken Cubes, Cooked in Thick Creamy Gravy',
    price: 2175,
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-44',
    name: 'Chicken Handi',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Chicken, Prepared in a Tangy Gravy',
    price: 2295,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-45',
    name: 'Achari Handi',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Chicken, Tomato Gravy, Spice, & Tangy',
    price: 2195,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-46',
    name: 'Madrasi Handi',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Chicken Tomato Gravy, Spice, Tangy',
    price: 2195,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-47',
    name: 'Chicken Jalfrezi',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless chicken cubes stir fried with bell peppers, onions, tomatoes in spicy masala sauce',
    price: 2195,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-48',
    name: 'Green Chilli Chicken',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Long Cutting Chicken Hot Thick Green Aromatic',
    price: 2145,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-49',
    name: 'Patiyaala Handi',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Boneless Chicken Cube, Cooked In Thick White Gravy & Vegetables',
    price: 2295,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'handi-50',
    name: 'Daal Makhni',
    category: 'Handi',
    categoryId: 'handi',
    description: 'Daal Maash Cooked in Creamy Butter Sauce',
    price: 1425,
    isVegetarian: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80'
  },

  // --- 7. TANDOOR ---
  {
    id: 'tandoor-54',
    name: 'Roghni Nan',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Soft tandoori leavened flatbread brushed with butter and sprinkled with sesame seeds',
    price: 125,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoor-55',
    name: 'Garlic Nan',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Clay-oven baked naan infused with fresh minced garlic and fresh coriander butter',
    price: 240,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoor-56',
    name: 'Kalvonji Nan',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Aromatic tandoori naan topped with nigella seeds (kalonji) and butter',
    price: 240,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoor-57',
    name: 'Tandori Paratha',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Crispy layered whole wheat paratha baked in clay tandoor with pure ghee',
    price: 240,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoor-58',
    name: 'Tandoori Roti (Per Head)',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Traditional wholesome whole-wheat roti freshly baked in live charcoal tandoor',
    price: 105,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'tandoor-59',
    name: 'Qandari Roti',
    category: 'Tandoor',
    categoryId: 'tandoor',
    description: 'Authentic large soft textured Afghan style tandoori bread',
    price: 105,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80'
  },

  // --- 8. ENGLISH & CONTINENTAL ---
  {
    id: 'english-60',
    name: 'Three Cheese Chicken',
    category: 'English',
    categoryId: 'english',
    description: 'Oven Baked Chicken, Top on Cheese, Saute Vegetable, Pasta',
    price: 2495,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-61',
    name: 'Stuff Chicken',
    category: 'English',
    categoryId: 'english',
    description: 'Chicken Breast, Pesto, Sundried, Cheese, Mushroom',
    price: 2595,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-62',
    name: 'Texas Road House Chicken',
    category: 'English',
    categoryId: 'english',
    description: 'Charcoal Grilled Chicken, Saute Vegetable, Mushroom Sauce',
    price: 2395,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-63',
    name: 'Schnitzel Chicken',
    category: 'English',
    categoryId: 'english',
    description: 'Fried Crumb Chicken Fillet, Served With Red Sauce & Fried Egg & Mash Potato',
    price: 2495,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-64',
    name: 'Fish & Chips',
    category: 'English',
    categoryId: 'english',
    description: 'Crumbed Fried Fish, Served with French Fries & Tator Sauce',
    price: 2890,
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-65',
    name: 'Alfredo Pasta',
    category: 'English',
    categoryId: 'english',
    description: 'Grilled Chicken, Mushroom, Creamy Sauce',
    price: 1975,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'english-66',
    name: 'Paradise Special Pasta',
    category: 'English',
    categoryId: 'english',
    description: 'Grilled Chicken, Sausage, Mushroom, Sundried Tomato Sauce',
    price: 2100,
    isChefSpecial: true,
    isPopular: true,
    image: pastaImg
  },

  // --- 9. STEAK ---
  {
    id: 'steak-67',
    name: 'Tarragon Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Grilled flattened or fillet with tarragon sauce',
    price: 2195,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'steak-68',
    name: 'Mushroom Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Chicken breast marinated and cooked on the grill with mushroom sauce',
    price: 2195,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'steak-69',
    name: 'Jalapeño Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Spicy marinated chicken fillet cooked on the grill with jalapeño sauce',
    price: 2195,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'steak-70',
    name: 'Pepper Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Marinated chicken fillet cooked with creamy pepper sauce',
    price: 2195,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'steak-71',
    name: 'Moroccan Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Hot spicy marinated fillet cooked with spicy creamy sauce',
    price: 2195,
    isSpicy: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'steak-72',
    name: 'Mexican Steak',
    category: 'Steak',
    categoryId: 'steak',
    description: 'Hot spicy and herb marinated breast grilled on charcoal with spicy tomato sauce',
    price: 2395,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80'
  },

  // --- 10. SANDWICH & BURGER ---
  {
    id: 'sandwich-73',
    name: 'Paradise Special Sandwich',
    category: 'Sandwich & Burger',
    categoryId: 'sandwich-burger',
    description: 'Grilled Chicken, Cheese, Egg, Chicken Strips, Special Sauce',
    price: 1825,
    isChefSpecial: true,
    isPopular: true,
    image: clubSandwichImg
  },
  {
    id: 'sandwich-74',
    name: 'Double Layer Roster Panini',
    category: 'Sandwich & Burger',
    categoryId: 'sandwich-burger',
    description: 'Chicken Patty, Cheese, Tomato, Cucumber',
    price: 1725,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sandwich-75',
    name: 'Crispy Chicken Burger',
    category: 'Sandwich & Burger',
    categoryId: 'sandwich-burger',
    description: 'Crispy Chicken, Cheese, Mayo',
    price: 1445,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sandwich-76',
    name: 'Jalapeno Chicken Burger',
    category: 'Sandwich & Burger',
    categoryId: 'sandwich-burger',
    description: 'Slice Chicken, Jalapeno, Onion, Sundried, Tomato, Cheese',
    price: 1645,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80'
  },

  // --- 11. PIZZA ---
  {
    id: 'pizza-77',
    name: 'Paradise Special Pizza',
    category: 'Pizza',
    categoryId: 'pizza',
    description: 'Handmade Crispy Bread, Tomato Sauce, Chicken, Sausage, Pepperoni, Jalapeno, Mushroom, Cheese',
    price: 2175,
    isChefSpecial: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pizza-78',
    name: 'Sausage & Pepperoni Pizza',
    category: 'Pizza',
    categoryId: 'pizza',
    description: 'Crispy Bread, Sausage, Pepperoni, Green Chilli, Tomato Sauce',
    price: 1975,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pizza-79',
    name: 'Turkish Pizza',
    category: 'Pizza',
    categoryId: 'pizza',
    description: 'Turkish Style Bread, Hummus, Mutton Minced Vegetable, Olive, Cheese',
    price: 2495,
    isChefSpecial: true,
    isPopular: true,
    image: turkishPizzaImg
  },
  {
    id: 'pizza-80',
    name: 'Tikka Pizza',
    category: 'Pizza',
    categoryId: 'pizza',
    description: 'Grilled Chicken, Mushroom, Cheese',
    price: 1975,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80'
  },

  // --- 12. CHINESE & RICE ---
  {
    id: 'chinese-81',
    name: 'Hot & Spice Chicken',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Crispy Fried Cube Chicken, Glazed in our Special Sauce',
    price: 2075,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-82',
    name: 'Dragon Chicken',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Deep Fried Cube Chicken, Glazed in Red Sauce',
    price: 2045,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-83',
    name: 'Chicken Chilli Dry',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Stir Fried Slice Chicken, Glaze in Signature Sauce',
    price: 2075,
    isPopular: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-84',
    name: 'Crispy Manchurian',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Crispy Fried Slice Chicken, Glazed in Red Sauce',
    price: 2045,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-85',
    name: 'Chicken Cashew Nut',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Stir Fried Cube Chicken, Vegetable Glazed in Thai Sauce',
    price: 2395,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-86',
    name: 'Black Pepper Chicken',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Chicken cubes fried with vegetables, glazed in black pepper sauce',
    price: 1945,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-87',
    name: 'Chicken Shashlik',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Crispy fried chicken cubes with vegetables, glazed in red sauce',
    price: 2045,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-88',
    name: 'Almond Chicken',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Stir fry cube chicken glazed in signature sauce',
    price: 2095,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-89',
    name: 'Kung Pao Chicken',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Stir fried sliced chicken with vegetables and peanut, glazed in Thai sauce',
    price: 2095,
    isPopular: true,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-90',
    name: 'Chicken Chilli Mint',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Stir fried sliced chicken with onions, green chilli, and mint, glazed in signature sauce',
    price: 2045,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-91',
    name: 'Chicken Chowmein',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Chicken, Vegetable, Green Onion, Glaze in Chilli Oyster Sauce',
    price: 1645,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-92',
    name: 'Special Chowmein',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Chicken, Prawn, Black Mushroom, Vegetable, Glaze in Special Sauce',
    price: 1755,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-93',
    name: 'Special Rice',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Chicken, Fish, Almonds, Pineapple',
    price: 1425,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-94',
    name: 'Egg Fried Rice',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Classic wok-tossed long grain basmati with golden scrambled egg & spring onions',
    price: 1195,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-95',
    name: 'Vegetable Rice',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Fragrant basmati rice tossed with fresh garden carrots, peas, and cabbage',
    price: 1095,
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-96',
    name: 'Chicken Fried Rice',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Wok tossed rice with tender sliced chicken, egg, and Asian aromatics',
    price: 1295,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chinese-97',
    name: 'Masala Rice',
    category: 'Chinese',
    categoryId: 'chinese',
    description: 'Spiced aromatic Pakistani fusion wok-fried rice with herbs',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80'
  },

  // --- 13. COLD BAR ---
  // Juice Cooler
  {
    id: 'drink-98',
    name: 'Lemon Mint Cooler',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Juice Cooler',
    description: 'Fresh lemon juice, crushed garden mint, mineral splash over crushed ice',
    price: 499,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-99',
    name: 'Raspberry Cooler',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Juice Cooler',
    description: 'Wild raspberry nectar, citrus twist and iced refreshment',
    price: 499,
    image: drinksImg
  },
  {
    id: 'drink-100',
    name: 'Strawberry Cooler',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Juice Cooler',
    description: 'Ripe red strawberry puree blended with fresh lime and ice',
    price: 499,
    image: drinksImg
  },

  // Soda
  {
    id: 'drink-101',
    name: 'Blue Soda',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Soda',
    description: 'Vibrant blue curacao flavor sparkling with citrus fizz',
    price: 499,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-102',
    name: 'Raspberry Soda',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Soda',
    description: 'Sparkling artisanal berry soda with fresh mint',
    price: 499,
    image: drinksImg
  },
  {
    id: 'drink-103',
    name: 'Strawberry Soda',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Soda',
    description: 'Crisp effervescent strawberry fizz on crushed ice',
    price: 499,
    image: drinksImg
  },
  {
    id: 'drink-104',
    name: 'Passion Fruit Soda',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Soda',
    description: 'Tropical passion fruit pulp with bubbly refreshing soda',
    price: 499,
    image: drinksImg
  },

  // Smoothies
  {
    id: 'drink-105',
    name: 'Mango Smoothie',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Smoothies',
    description: 'Thick creamy Pakistani Chaunsa mango blended with yogurt and cream',
    price: 599,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-106',
    name: 'Strawberry Smoothie',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Smoothies',
    description: 'Fresh strawberries blended with rich cream and honey',
    price: 599,
    image: drinksImg
  },
  {
    id: 'drink-107',
    name: 'Peach Smoothie',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Smoothies',
    description: 'Juicy summer peaches blended to velvety perfection',
    price: 599,
    image: drinksImg
  },

  // Mojitos
  {
    id: 'drink-108',
    name: 'Blue Mojito',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mojitos',
    description: 'Muddled fresh mint, lime wheels, blue lagoon syrup & sparkling water',
    price: 525,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-109',
    name: 'Raspberry Mojito',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mojitos',
    description: 'Tangy muddled raspberries, garden mint, lime and crisp fizz',
    price: 525,
    image: drinksImg
  },
  {
    id: 'drink-110',
    name: 'Strawberry Mojito',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mojitos',
    description: 'Crushed sweet strawberries with fresh mint leaves and sparkling soda',
    price: 525,
    image: drinksImg
  },
  {
    id: 'drink-111',
    name: 'Peach Mojito',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mojitos',
    description: 'Fragrant sweet peach essence with zesty lime and crushed ice',
    price: 525,
    image: drinksImg
  },

  // Ice Latte
  {
    id: 'drink-112',
    name: 'Caramel Ice Latte',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Ice Latte',
    description: 'Chilled espresso poured over creamy milk and rich golden caramel drizzle',
    price: 649,
    image: drinksImg
  },
  {
    id: 'drink-113',
    name: 'English Ice Latte',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Ice Latte',
    description: 'Traditional rich double shot espresso over chilled silky milk',
    price: 649,
    image: drinksImg
  },
  {
    id: 'drink-114',
    name: 'Hazelnut Ice Latte',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Ice Latte',
    description: 'Roasted hazelnut syrup with smooth cold coffee and foam',
    price: 649,
    image: drinksImg
  },
  {
    id: 'drink-115',
    name: 'Vanilla Ice Latte',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Ice Latte',
    description: 'Madagascar vanilla infused chilled latte',
    price: 649,
    image: drinksImg
  },

  // Frappe
  {
    id: 'drink-116',
    name: 'Cookies and Cream Frappe',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Frappe',
    description: 'Blended Oreo cookies, vanilla ice cream, espresso, topped with whipped cream',
    price: 630,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-117',
    name: 'Chocolate Frappe',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Frappe',
    description: 'Dark Belgian chocolate syrup, espresso, and blended ice crunch',
    price: 630,
    image: drinksImg
  },
  {
    id: 'drink-118',
    name: 'Caramel Frappe',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Frappe',
    description: 'Creamy blended caramel coffee frappe with crunchy toffee bits',
    price: 630,
    image: drinksImg
  },

  // Mocktail
  {
    id: 'drink-119',
    name: 'Madhera Red Mocktail',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mocktail',
    description: 'Exotic ruby berry blend with pomegranate reduction and citrus foam',
    price: 650,
    isChefSpecial: true,
    image: drinksImg
  },
  {
    id: 'drink-120',
    name: 'Paradise Signature Mocktail',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mocktail',
    description: 'Secret house infusion of tropical fruits, elderflower and sparkling essence',
    price: 630,
    isChefSpecial: true,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-121',
    name: 'Day and Night Mocktail',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Mocktail',
    description: 'Dramatic dual-layered ombre mocktail featuring citrus & dark berry nectar',
    price: 670,
    isChefSpecial: true,
    image: drinksImg
  },

  // Shakes
  {
    id: 'drink-122',
    name: 'Lotus Biscoff Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Creamy speculoos cookie butter blended with premium vanilla ice cream & Lotus crumbles',
    price: 720,
    isPopular: true,
    isChefSpecial: true,
    image: drinksImg
  },
  {
    id: 'drink-123',
    name: 'Brownie Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Fudgy chocolate brownie blended thick with chocolate gelato',
    price: 650,
    image: drinksImg
  },
  {
    id: 'drink-124',
    name: 'Vanilla Oreo Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Crunchy chocolate Oreos blended in rich sweet cream',
    price: 650,
    image: drinksImg
  },
  {
    id: 'drink-125',
    name: 'Nutella Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Generous swirl of hazelnut cocoa Nutella with whole milk and cream',
    price: 745,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-126',
    name: 'Signature Chocolate Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Triple chocolate indulgence with chocolate chips and chocolate drizzle',
    price: 675,
    image: drinksImg
  },
  {
    id: 'drink-127',
    name: 'Caramel Praline Shake',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Shakes',
    description: 'Sweet caramelized praline nuts blended in decadent ice cream base',
    price: 745,
    image: drinksImg
  },

  // Seasoned Flavoured Lassi
  {
    id: 'drink-128',
    name: 'Sweet Lassi',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Seasoned Flavoured Lassi',
    description: 'Traditional Punjabi thick sweetened yogurt drink topped with clotted cream',
    price: 390,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-129',
    name: 'Mango Lassi',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Seasoned Flavoured Lassi',
    description: 'Sweet local mango pulp swirled into rich chilled yogurt lassi',
    price: 450,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-130',
    name: 'Salty Lassi (Namkeen)',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Seasoned Flavoured Lassi',
    description: 'Refreshing savory yogurt drink spiced with roasted cumin and Himalayan black salt',
    price: 390,
    image: drinksImg
  },
  {
    id: 'drink-131',
    name: 'Peach Lassi',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Seasoned Flavoured Lassi',
    description: 'Delicate peach infused creamy Punjab style lassi',
    price: 450,
    image: drinksImg
  },

  // Beverages & Refreshments
  {
    id: 'drink-132',
    name: 'Tin Pack Soft Drink',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Beverages',
    description: 'Coke, Sprite, Fanta, Diet Coke 250ml chilled can',
    price: 180,
    image: drinksImg
  },
  {
    id: 'drink-133',
    name: 'Small Mineral Water',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Beverages',
    description: '500ml pure mineral water',
    price: 90,
    image: drinksImg
  },
  {
    id: 'drink-134',
    name: 'Large Mineral Water',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Beverages',
    description: '1.5L chilled mineral water',
    price: 170,
    image: drinksImg
  },
  {
    id: 'drink-135',
    name: 'Fresh Lime',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Beverages',
    description: 'Freshly squeezed lime juice with 7Up or soda and rock salt',
    price: 250,
    isPopular: true,
    image: drinksImg
  },
  {
    id: 'drink-136',
    name: 'Mint Margarita',
    category: 'Cold Bar',
    categoryId: 'cold-bar',
    subCategory: 'Beverages',
    description: 'Signature frozen crushed mint slush with lime zest, black salt, and fizz',
    price: 310,
    isPopular: true,
    isChefSpecial: true,
    image: drinksImg
  }
];

export const SIGNATURE_DISHES = [
  {
    id: 'karahi-39',
    name: 'Paradise Special Karahi',
    category: 'Traditional Special',
    description: 'Simmered in pure desi butter, fresh hand-crushed tomatoes, fragrant julienned ginger, green chillies & secret spices in a cast iron wok.',
    price: 'H Rs. 1499 / F Rs. 2299',
    tag: 'House Special',
    image: karahiImg
  },
  {
    id: 'bbq-21',
    name: 'Malai Boti',
    category: 'Charcoal BBQ',
    description: 'Tender boneless chicken cubes steeped for 12 hours in fresh cream, mild spices, and char-grilled over fragrant coals.',
    price: 'Rs. 1795',
    tag: 'Most Loved',
    image: bbqImg
  },
  {
    id: 'karahi-42',
    name: 'Mutton Karahi',
    category: 'Traditional Special',
    description: 'Succulent cuts of fresh mutton slow-braised to melting tenderness in a rich, reduction of spiced tomatoes and fresh yogurt.',
    price: 'H Rs. 3090 / F Rs. 4995',
    tag: 'Chef Choice',
    image: karahiImg
  },
  {
    id: 'english-66',
    name: 'Paradise Special Pasta',
    category: 'English Cuisine',
    description: 'Penne tossed with flame-grilled chicken strips, gourmet sausage, sautéed mushrooms in our signature sun-dried tomato sauce.',
    price: 'Rs. 2100',
    tag: 'Continental Hit',
    image: pastaImg
  },
  {
    id: 'pizza-79',
    name: 'Turkish Pizza',
    category: 'Artisan Pizza',
    description: 'Crispy stone-baked Turkish flatbread layered with spiced minced mutton, velvety hummus, black olives, and melted mozzarella.',
    price: 'Rs. 2495',
    tag: 'Gourmet Specialty',
    image: turkishPizzaImg
  },
  {
    id: 'sandwich-73',
    name: 'Paradise Special Sandwich',
    category: 'Sandwich & Burger',
    description: 'Triple-layer artisan sandwich stacked with grilled spiced chicken breast, golden egg, crispy chicken strips, melted cheese & secret sauce.',
    price: 'Rs. 1825',
    tag: 'Crowd Favorite',
    image: clubSandwichImg
  }
];
