
import type { Cafe } from './types';

export const initialCafes: Cafe[] = [
  {
    id: 'chennai-express',
    name: "Chennai Express",
    building: 'TS-1',
    image: '/images/south-indian-restaurant.png',
    imageHint: 'south indian restaurant',
    menu: [
      { id: 'e1', name: 'Filter Coffee', description: 'Rich, aromatic coffee, the perfect South Indian wake-up call.', price: 2.50, image: '/images/filter-coffee.png', imageHint: 'filter coffee' },
      { id: 'e2', name: 'Masala Dosa', description: 'Golden-crisp crepe filled with a savory potato masala. A timeless classic.', price: 5.00, image: '/images/masala-dosa.png', imageHint: 'masala dosa' },
      { id: 'e3', name: 'Idli with Sambar', description: 'Soft, fluffy steamed rice cakes paired with a flavorful lentil sambar.', price: 4.50, image: '/images/idli-sambar.png', imageHint: 'idli sambar' },
      { id: 'thali-north', name: 'North Indian Thali', description: 'A hearty platter with dal, sabzi, roti, rice, and salad. (Pre-book only)', price: 12.00, image: 'https://placehold.co/150x150.png', imageHint: 'north indian thali' },
      { id: 'thali-south', name: 'South Indian Thali', description: 'A traditional spread with sambar, rasam, poriyal, rice, and appalam. (Pre-book only)', price: 10.00, image: 'https://placehold.co/150x150.png', imageHint: 'south indian thali' },
    ],
  },
  {
    id: 'mysore-masala',
    name: 'Mysore Masala',
    building: 'TS-2',
    image: '/images/indian-food.png',
    imageHint: 'indian food',
    menu: [
      { id: 'l1', name: 'Medu Vada', description: 'Crispy on the outside, soft on the inside. The perfect savory doughnut.', price: 4.00, image: '/images/medu-vada.png', imageHint: 'medu vada' },
      { id: 'l2', name: 'Rava Upma', description: 'A comforting and savory semolina porridge, tempered with classic spices.', price: 3.50, image: '/images/upma.png', imageHint: 'upma' },
      { id: 'l3', name: 'Vegetable Uttapam', description: 'A savory pancake topped with a colorful medley of fresh vegetables.', price: 5.75, image: '/images/uttapam.png', imageHint: 'uttapam' },
    ],
  },
  {
    id: 'kerala-kitchen',
    name: "Kerala Kitchen",
    building: 'TS-3',
    image: '/images/kerala-food.png',
    imageHint: 'kerala food',
    menu: [
      { id: 'a1', name: 'Puttu with Kadala Curry', description: 'Steamed rice cylinders with coconut, served with a spicy black chickpea curry.', price: 6.00, image: '/images/puttu.png', imageHint: 'puttu' },
      { id: 'a2', name: 'Appam with Stew', description: 'Lacy, soft-centered rice pancakes, perfect for our creamy vegetable stew.', price: 6.50, image: '/images/appam-stew.png', imageHint: 'appam stew' },
      { id: 'a3', name: 'Lemon Rice', description: 'Tangy rice brightened with lemon, crunchy peanuts, and fragrant spices.', price: 4.50, image: '/images/lemon-rice.png', imageHint: 'lemon rice' },
      { id: 'thali-south', name: 'South Indian Thali', description: 'A traditional spread with sambar, rasam, poriyal, rice, and appalam. (Pre-book only)', price: 10.00, image: 'https://placehold.co/150x150.png', imageHint: 'south indian thali' },
      { id: 'thali-north', name: 'North Indian Thali', description: 'A hearty platter with dal, sabzi, roti, rice, and salad. (Pre-book only)', price: 12.00, image: 'https://placehold.co/150x150.png', imageHint: 'north indian thali' },
    ],
  },
  {
    id: 'andhra-spice',
    name: "Andhra Spice",
    building: 'TS-4',
    image: '/images/andhra-food.png',
    imageHint: 'andhra food',
    menu: [
      { id: 'as1', name: 'Pesarattu', description: 'A wholesome and crispy crepe made from green moong dal, a healthy delight.', price: 5.50, image: '/images/pesarattu.png', imageHint: 'pesarattu' },
      { id: 'as2', name: 'Gutti Vankaya Kura', description: 'Tender eggplants in a rich, nutty, and spicy gravy. An Andhra specialty.', price: 7.00, image: '/images/stuffed-eggplant.png', imageHint: 'stuffed eggplant' },
      { id: 'as3', name: 'Hyderabadi Biryani', description: 'Aromatic layered rice and vegetables, slow-cooked to perfection.', price: 8.50, image: '/images/biryani.png', imageHint: 'biryani' },
    ],
  },
  {
    id: 'udupi-delights',
    name: 'Udupi Delights',
    building: 'TS-5',
    image: '/images/udupi-food.png',
    imageHint: 'udupi food',
    menu: [
      { id: 'ud1', name: 'Bisi Bele Bath', description: 'A hot, tangy lentil rice dish brimming with vegetables and flavor.', price: 6.25, image: '/images/bisi-bele-bath.png', imageHint: 'bisi bele bath' },
      { id: 'ud2', name: 'Neer Dosa', description: 'Delicate, paper-thin rice crepes that melt in your mouth.', price: 4.75, image: '/images/neer-dosa.png', imageHint: 'neer dosa' },
      { id: 'ud3', name: 'Rava Kesari', description: 'A luscious and sweet semolina pudding, fragrant with saffron and ghee.', price: 3.75, image: '/images/kesari-bath.png', imageHint: 'kesari bath' },
    ],
  },
  {
    id: 'chettinad-cafe',
    name: "Chettinad Cafe",
    building: 'TS-6',
    image: '/images/chettinad-food.png',
    imageHint: 'chettinad food',
    menu: [
      { id: 'cc1', name: 'Kuzhi Paniyaram', description: 'Crispy golden pan-fried dumplings, savory, spicy, and satisfying.', price: 5.25, image: '/images/paniyaram.png', imageHint: 'paniyaram' },
      { id: 'cc2', name: 'Chettinad Mushroom', description: 'Earthy mushrooms in a fiery, aromatic Chettinad pepper gravy.', price: 7.50, image: '/images/mushroom-masala.png', imageHint: 'mushroom masala' },
      { id: 'cc3', name: 'Parotta with Salna', description: 'Flaky, layered flatbread served with a soul-warming spicy vegetable salna.', price: 6.75, image: '/images/parotta-salna.png', imageHint: 'parotta salna' },
    ],
  },
];
