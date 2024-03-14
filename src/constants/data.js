import images from './images';

const food = [
  {
    title: 'Rendang',
    price: '45,000 IDR',
    tags: 'Tender beef slow-cooked in a rich coconut and spice-infused sauce.',
  },
  {
    title: 'Nasi Goreng',
    price: '35,000 IDR',
    tags: 'Fragrant Indonesian fried rice with a combination of vegetables, chicken, and shrimp.',
  },
  {
    title: 'Satay Ayam',
    price: '30,000 IDR',
    tags: 'Grilled skewers of marinated chicken, served with a savory peanut sauce.',
  },
  {
    title: 'Soto Betawi',
    price: '40,000 IDR',
    tags: 'Jakarta-style beef soup with aromatic herbs and spices, served with rice cakes.',
  },
  {
    title: 'Pempek',
    price: '20,000 IDR',
    tags: 'Traditional Palembang fishcakes served with a tangy vinegar-based sauce.',
  },
];

const drinks = [
  {
    title: 'Es Teh',
    price: '10,000 IDR',
    tags: 'Indonesian iced tea with a hint of jasmine fragrance.',
  },
  {
    title: 'Es Cendol',
    price: '20,000 IDR',
    tags: 'A sweet and creamy dessert drink with pandan-flavored jelly, coconut milk, and palm sugar syrup.',
  },
  {
    title: 'Es Campur',
    price: '18,000 IDR',
    tags: 'A delightful mix of various tropical fruits, jellies, and sweet syrups served with shaved ice.',
  },
  {
    title: 'Jus Alpukat',
    price: '15,000 IDR',
    tags: 'Creamy avocado juice blended with sweetened condensed milk and a touch of chocolate syrup.',
  },
  {
    title: 'Soda Gembira',
    price: '8,000 IDR',
    tags: 'A fizzy soda drink made with a mix of flavored syrups and soda water.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Indonesian Restaurant',
    subtitle: 'Recognized for authentic and flavorsome Indonesian cuisine.',
  },
  {
    imgUrl: images.award01,
    title: 'Diners Choice Award',
    subtitle: 'Chosen as a top dining destination by discerning diners.',
  },
  {
    imgUrl: images.award05,
    title: 'Culinary Innovation Award',
    subtitle: 'Honored for creative and unique culinary offerings.',
  },
  {
    imgUrl: images.award03,
    title: 'Sustainability Excellence Award',
    subtitle: 'Acknowledged for environmentally conscious practices and commitment to sustainability.',
  },
];

export default { food, drinks, awards };
