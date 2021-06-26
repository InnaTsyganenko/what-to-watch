import { nanoid } from 'nanoid';

const reviews = [
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Morgan Freeman',
    },
    rating: 8,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: new Date(),
  },
];

export default reviews;
