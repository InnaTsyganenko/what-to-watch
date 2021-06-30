import { nanoid } from 'nanoid';

const reviews = [
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Kate Muir',
    },
    rating: '8,9',
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.',
    date: new Date('2021-12-24'),
  },
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Amanda Greever',
    },
    rating: '8,0',
    comment: 'I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.',
    date: new Date('2015-11-18'),
  },
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Bill Goodykoontz',
    },
    rating: '8,0',
    comment: 'Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: new Date('2015-11-18'),
  },
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Matthew Lickona',
    },
    rating: '7,2',
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: new Date('2016-12-20'),
  },
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Paula Fleri-Soler',
    },
    rating: '7,6',
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: new Date('2016-12-20'),
  },
  {
    id: nanoid(),
    user: {
      id: nanoid(),
      name: 'Morgan Freeman',
    },
    rating: '9,0',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    date: new Date('2016-12-24'),
  },
];

export default reviews;
