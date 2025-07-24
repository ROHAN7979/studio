
import type { Cafe } from './types';

export const cafes: Cafe[] = [
  {
    id: 'chennai-express',
    name: "Chennai Express",
    building: 'South Campus Union',
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
    name: 'Mysore Masala',
    building: 'Central Library Annex',
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
    name: "Kerala Kitchen",
    building: 'West Wing Gallery',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kerala food',
    menu: [
      { id: 'a1', name: 'Puttu with Kadala Curry', description: 'Steamed cylinders of ground rice with chickpea curry.', price: 6.00, image: 'https://placehold.co/150x150.png', imageHint: 'puttu' },
      { id: 'a2', name: 'Appam with Stew', description: 'Rice pancake with a creamy vegetable stew.', price: 6.50, image: 'https://placehold.co/150x150.png', imageHint: 'appam stew' },
      { id: 'a3', name: 'Lemon Rice', description: 'Flavorful rice with lemon, peanuts, and spices.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'lemon rice' },
    ],
  },
];
