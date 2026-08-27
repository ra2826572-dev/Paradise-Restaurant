import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hamza Tariq',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'Hands down the best dining experience in Faisalabad! The Paradise Special Karahi cooked in butter was rich and flavorful, and the Malai Boti melted in the mouth. Ambiance at night on Naqvi Rd with the outdoor seating is unmatched.',
    tags: ['Paradise Karahi', 'Malai Boti', 'Great Ambiance'],
    avatar: 'HT'
  },
  {
    id: 'rev-2',
    author: 'Dr. Ayesha Malik',
    rating: 5,
    timeAgo: '1 month ago',
    comment: 'We hosted a 25-person family dinner in their VIP hall. The staff was courteous, orders were served hot despite the crowd, and the Family Platter BBQ was exceptional. Truly high standards of hygiene and taste.',
    tags: ['Family Dinner', 'VIP Hall', 'BBQ Platter'],
    avatar: 'AM'
  },
  {
    id: 'rev-3',
    author: 'Usman Ali Chaudhry',
    rating: 5,
    timeAgo: '3 weeks ago',
    comment: 'Top-notch Pakistani & Continental food. Tried their Mutton Karahi and Moroccan Steak — both were cooked to perfection. Also do not skip the Mint Margarita and Lotus Shake from the Cold Bar!',
    tags: ['Mutton Karahi', 'Steak', 'Cold Bar'],
    avatar: 'UC'
  },
  {
    id: 'rev-4',
    author: 'Zainab Fatima',
    rating: 4.8,
    timeAgo: '2 months ago',
    comment: 'One of the few places in Faisalabad that excels equally at Desi Handi and English cuisine. Turkish Pizza and Murgh Makhni are must-tries. Lovely parking space and prompt valet service.',
    tags: ['Turkish Pizza', 'Handi', 'Valet Parking'],
    avatar: 'ZF'
  },
  {
    id: 'rev-5',
    author: 'Bilal Ahmad',
    rating: 5,
    timeAgo: 'Recently',
    comment: 'Late night service is a blessing in Faisalabad. Ordered takeaway on WhatsApp, and the food was packed meticulously and ready on time. Desi Murgh Karahi was pure authentic taste.',
    tags: ['Late Night Service', 'WhatsApp Order', 'Desi Murgh'],
    avatar: 'BA'
  }
];

export const RATING_STATS = {
  overall: 4.7,
  totalReviews: 944,
  breakdown: [
    { stars: 5, percentage: 84 },
    { stars: 4, percentage: 11 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ]
};
