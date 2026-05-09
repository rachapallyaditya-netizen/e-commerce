/**
 * products.js — Mock product catalogue
 *
 * Each object mirrors the backend Product entity shape so the
 * frontend can swap to real API calls with zero refactoring.
 */

const products = [
  {
    id: 1,
    name: 'Vanilla Bean Soy Candle',
    description: 'Hand-poured soy wax candle with real vanilla extract. Burns up to 45 hours.',
    price: 24.00,
    imageUrl: '/images/candle.svg',
    category: 'Home',
  },
  {
    id: 2,
    name: 'Chunky Knit Throw Blanket',
    description: 'Ultra-soft chenille throw in oatmeal. Perfect for movie nights.',
    price: 68.00,
    imageUrl: '/images/blanket.svg',
    category: 'Textiles',
  },
  {
    id: 3,
    name: 'Ceramic Pour-Over Set',
    description: 'Minimalist ceramic dripper + carafe. Makes 3 cups of perfect coffee.',
    price: 42.00,
    imageUrl: '/images/coffee.svg',
    category: 'Kitchen',
  },
  {
    id: 4,
    name: 'Linen Cushion Cover',
    description: 'Stonewashed linen in sage green. Fits standard 18×18" inserts.',
    price: 32.00,
    imageUrl: '/images/cushion.svg',
    category: 'Textiles',
  },
  {
    id: 5,
    name: 'Dried Eucalyptus Bundle',
    description: 'Preserved eucalyptus stems. Lasts 12+ months with no water needed.',
    price: 18.00,
    imageUrl: '/images/eucalyptus.svg',
    category: 'Décor',
  },
  {
    id: 6,
    name: 'Stoneware Mug — Speckled',
    description: 'Handmade speckled stoneware mug, 12 oz. Microwave & dishwasher safe.',
    price: 22.00,
    imageUrl: '/images/mug.svg',
    category: 'Kitchen',
  },
  {
    id: 7,
    name: 'Cotton Waffle Robe',
    description: 'Lightweight waffle-weave robe in warm white. One size fits most.',
    price: 55.00,
    imageUrl: '/images/robe.svg',
    category: 'Textiles',
  },
  {
    id: 8,
    name: 'Wooden Recipe Card Holder',
    description: 'Walnut wood stand for recipe cards or small prints. Handcrafted.',
    price: 16.00,
    imageUrl: '/images/holder.svg',
    category: 'Kitchen',
  },
];

export default products;
