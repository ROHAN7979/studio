
import type { Cafe } from './types';

export const cafes: Cafe[] = [
  {
    id: 'chennai-express',
    name: "TS-1",
    building: 'TS-1',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'south indian restaurant',
    menu: [
      { id: 'e1', name: 'Filter Coffee', description: 'Authentic South Indian filter coffee.', price: 2.50, image: 'https://placehold.co/150x150.png', imageHint: 'filter coffee' },
      { id: 'e2', name: 'Masala Dosa', description: 'Crispy crepe with a spiced potato filling.', price: 5.00, image: 'https://placehold.co/150x150.png', imageHint: 'masala dosa' },
      { id: 'e3', name: 'Idli with Sambar', description: 'Steamed rice cakes served with lentil stew.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'idli sambar' },
    ],
  },
  {
    id: 'mysore-masala',
    name: 'TS-2',
    building: 'TS-2',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'indian food',
    menu: [
      { id: 'l1', name: 'Medu Vada', description: 'Savory fried lentil doughnuts.', price: 4.00, image: 'https://placehold.co/150x150.png', imageHint: 'medu vada' },
      { id: 'l2', name: 'Rava Upma', description: 'Thick porridge from dry-roasted semolina.', price: 3.50, image: 'https://placehold.co/150x150.png', imageHint: 'upma' },
      { id: 'l3', name: 'Vegetable Uttapam', description: 'Thick pancake with vegetable toppings.', price: 5.75, image: 'https://placehold.co/150x150.png', imageHint: 'uttapam' },
    ],
  },
  {
    id: 'kerala-kitchen',
    name: "TS-3",
    building: 'TS-3',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kerala food',
    menu: [
      { id: 'a1', name: 'Puttu with Kadala Curry', description: 'Steamed cylinders of ground rice with chickpea curry.', price: 6.00, image: 'https://placehold.co/150x150.png', imageHint: 'puttu' },
      { id: 'a2', name: 'Appam with Stew', description: 'Rice pancake with a creamy vegetable stew.', price: 6.50, image: 'https://placehold.co/150x150.png', imageHint: 'appam stew' },
      { id: 'a3', name: 'Lemon Rice', description: 'Flavorful rice with lemon, peanuts, and spices.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'lemon rice' },
    ],
  },
  {
    id: 'andhra-spice',
    name: "TS-4",
    building: 'TS-4',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'andhra food',
    menu: [
      { id: 'as1', name: 'Pesarattu', description: 'Green gram crepe, typically served with ginger chutney.', price: 5.50, image: 'https://placehold.co/150x150.png', imageHint: 'pesarattu' },
      { id: 'as2', name: 'Gutti Vankaya Kura', description: 'Stuffed eggplant curry with a rich, nutty gravy.', price: 7.00, image: 'https://placehold.co/150x150.png', imageHint: 'stuffed eggplant' },
      { id: 'as3', name: 'Hyderabadi Biryani', description: 'Aromatic and flavorful layered rice and vegetable dish.', price: 8.50, image: 'https://placehold.co/150x150.png', imageHint: 'biryani' },
    ],
  },
  {
    id: 'udupi-delights',
    name: 'TS-5',
    building: 'TS-5',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'udupi food',
    menu: [
      { id: 'ud1', name: 'Bisi Bele Bath', description: 'Hot lentil rice dish with vegetables and spices.', price: 6.25, image: 'https://placehold.co/150x150.png', imageHint: 'bisi bele bath' },
      { id: 'ud2', name: 'Neer Dosa', description: 'Thin, soft rice crepes, perfect with chutney.', price: 4.75, image: 'https://placehold.co/150x150.png', imageHint: 'neer dosa' },
      { id: 'ud3', name: 'Rava Kesari', description: 'Sweet semolina pudding with ghee and nuts.', price: 3.75, image: 'https://placehold.co/150x150.png', imageHint: 'kesari bath' },
    ],
  },
  {
    id: 'chettinad-cafe',
    name: "TS-6",
    building: 'TS-6',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'chettinad food',
    menu: [
      { id: 'cc1', name: 'Kuzhi Paniyaram', description: 'Pan-fried savory or sweet dumplings.', price: 5.25, image: 'https://placehold.co/150x150.png', imageHint: 'paniyaram' },
      { id: 'cc2', name: 'Chettinad Mushroom Masala', description: 'Spicy mushroom curry with a peppery Chettinad gravy.', price: 7.50, image: 'https://placehold.co/150x150.png', imageHint: 'mushroom masala' },
      { id: 'cc3', name: 'Parotta with Salna', description: 'Layered flatbread served with a spicy vegetable gravy.', price: 6.75, image: 'https://placehold.co/150x150.png', imageHint: 'parotta salna' },
    ],
  },
];
