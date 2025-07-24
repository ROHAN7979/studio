
import type { Cafe } from './types';

export const cafes: Cafe[] = [
  {
    id: 'chennai-express',
    name: "TS-1",
    building: 'TS-1',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'south indian restaurant',
    menu: [
      { id: 'e1', name: 'Filter Coffee', description: 'Rich, aromatic coffee, the perfect South Indian wake-up call.', price: 2.50, image: 'https://placehold.co/150x150.png', imageHint: 'filter coffee' },
      { id: 'e2', name: 'Masala Dosa', description: 'Golden-crisp crepe filled with a savory potato masala. A timeless classic.', price: 5.00, image: 'https://placehold.co/150x150.png', imageHint: 'masala dosa' },
      { id: 'e3', name: 'Idli with Sambar', description: 'Soft, fluffy steamed rice cakes paired with a flavorful lentil sambar.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'idli sambar' },
    ],
  },
  {
    id: 'mysore-masala',
    name: 'TS-2',
    building: 'TS-2',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'indian food',
    menu: [
      { id: 'l1', name: 'Medu Vada', description: 'Crispy on the outside, soft on the inside. The perfect savory doughnut.', price: 4.00, image: 'https://placehold.co/150x150.png', imageHint: 'medu vada' },
      { id: 'l2', name: 'Rava Upma', description: 'A comforting and savory semolina porridge, tempered with classic spices.', price: 3.50, image: 'https://placehold.co/150x150.png', imageHint: 'upma' },
      { id: 'l3', name: 'Vegetable Uttapam', description: 'A savory pancake topped with a colorful medley of fresh vegetables.', price: 5.75, image: 'https://placehold.co/150x150.png', imageHint: 'uttapam' },
    ],
  },
  {
    id: 'kerala-kitchen',
    name: "TS-3",
    building: 'TS-3',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kerala food',
    menu: [
      { id: 'a1', name: 'Puttu with Kadala Curry', description: 'Steamed rice cylinders with coconut, served with a spicy black chickpea curry.', price: 6.00, image: 'https://placehold.co/150x150.png', imageHint: 'puttu' },
      { id: 'a2', name: 'Appam with Stew', description: 'Lacy, soft-centered rice pancakes, perfect for our creamy vegetable stew.', price: 6.50, image: 'https://placehold.co/150x150.png', imageHint: 'appam stew' },
      { id: 'a3', name: 'Lemon Rice', description: 'Tangy rice brightened with lemon, crunchy peanuts, and fragrant spices.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'lemon rice' },
    ],
  },
  {
    id: 'andhra-spice',
    name: "TS-4",
    building: 'TS-4',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'andhra food',
    menu: [
      { id: 'as1', name: 'Pesarattu', description: 'A wholesome and crispy crepe made from green moong dal, a healthy delight.', price: 5.50, image: 'https://placehold.co/150x150.png', imageHint: 'pesarattu' },
      { id: 'as2', name: 'Gutti Vankaya Kura', description: 'Tender eggplants in a rich, nutty, and spicy gravy. An Andhra specialty.', price: 7.00, image: 'https://placehold.co/150x150.png', imageHint: 'stuffed eggplant' },
      { id: 'as3', name: 'Hyderabadi Biryani', description: 'Aromatic layered rice and vegetables, slow-cooked to perfection.', price: 8.50, image: 'https://placehold.co/150x150.png', imageHint: 'biryani' },
    ],
  },
  {
    id: 'udupi-delights',
    name: 'TS-5',
    building: 'TS-5',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'udupi food',
    menu: [
      { id: 'ud1', name: 'Bisi Bele Bath', description: 'A hot, tangy lentil rice dish brimming with vegetables and flavor.', price: 6.25, image: 'https://placehold.co/150x150.png', imageHint: 'bisi bele bath' },
      { id: 'ud2', name: 'Neer Dosa', description: 'Delicate, paper-thin rice crepes that melt in your mouth.', price: 4.75, image: 'https://placehold.co/150x150.png', imageHint: 'neer dosa' },
      { id: 'ud3', name: 'Rava Kesari', description: 'A luscious and sweet semolina pudding, fragrant with saffron and ghee.', price: 3.75, image: 'https://placehold.co/150x150.png', imageHint: 'kesari bath' },
    ],
  },
  {
    id: 'chettinad-cafe',
    name: "TS-6",
    building: 'TS-6',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chettinad food',
    menu: [
      { id: 'cc1', name: 'Kuzhi Paniyaram', description: 'Crispy golden pan-fried dumplings, savory, spicy, and satisfying.', price: 5.25, image: 'https://placehold.co/150x150.png', imageHint: 'paniyaram' },
      { id: 'cc2', name: 'Chettinad Mushroom', description: 'Earthy mushrooms in a fiery, aromatic Chettinad pepper gravy.', price: 7.50, image: 'https://placehold.co/150x150.png', imageHint: 'mushroom masala' },
      { id: 'cc3', name: 'Parotta with Salna', description: 'Flaky, layered flatbread served with a soul-warming spicy vegetable salna.', price: 6.75, image: 'https://placehold.co/150x150.png', imageHint: 'parotta salna' },
    ],
  },
];
