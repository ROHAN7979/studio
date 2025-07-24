import type { Cafe } from './types';

export const cafes: Cafe[] = [
  {
    id: 'engineering-cafe',
    name: "The Integrator's Brew",
    building: 'Engineering & Tech Building',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern cafe',
    menu: [
      { id: 'e1', name: 'Binary Brew Coffee', description: 'Dark roast, strong and bold.', price: 3.50, image: 'https://placehold.co/150x150.png', imageHint: 'coffee cup' },
      { id: 'e2', name: 'The Algorithm Croissant', description: 'Flaky, buttery, perfectly calculated.', price: 4.00, image: 'https://placehold.co/150x150.png', imageHint: 'croissant' },
      { id: 'e3', name: 'Data-Driven Danish', description: 'Sweet cheese danish with a berry coulis.', price: 4.50, image: 'https://placehold.co/150x150.png', imageHint: 'danish pastry' },
    ],
  },
  {
    id: 'library-cafe',
    name: 'The Page Turner',
    building: 'Main Library',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'cozy library',
    menu: [
      { id: 'l1', name: 'Literary Latte', description: 'A smooth, comforting latte.', price: 4.00, image: 'https://placehold.co/150x150.png', imageHint: 'latte art' },
      { id: 'l2', name: 'Shakespearmint Tea', description: 'Refreshing peppermint herbal tea.', price: 2.50, image: 'https://placehold.co/150x150.png', imageHint: 'tea cup' },
      { id: 'l3', name: 'Novel Nibbler Scone', description: 'Classic scone with clotted cream and jam.', price: 3.75, image: 'https://placehold.co/150x150.png', imageHint: 'scone' },
    ],
  },
  {
    id: 'arts-cafe',
    name: "The Muse's Morsel",
    building: 'Fine Arts Center',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'art gallery',
    menu: [
      { id: 'a1', name: 'Abstract Espresso', description: 'A complex and artistic shot of espresso.', price: 3.00, image: 'https://placehold.co/150x150.png', imageHint: 'espresso shot' },
      { id: 'a2', name: 'Pastel de Nata', description: 'A creamy, caramelized Portuguese custard tart.', price: 3.50, image: 'https://placehold.co/150x150.png', imageHint: 'custard tart' },
      { id: 'a3', name: 'Still Life Smoothie', description: 'A beautiful blend of mixed berries and banana.', price: 5.50, image: 'https://placehold.co/150x150.png', imageHint: 'berry smoothie' },
    ],
  },
];
