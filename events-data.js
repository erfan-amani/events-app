const DATA = [
  {
    id: 'e1',
    title: 'React event',
    location: 'Street 12, 120 Newtown',
    description: 'React js new features and some old deprecated ones.',
    date: '2022-05-12',
    image: 'images/react-event.png',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Vue event',
    location: 'Street 1, 20 Newtown',
    description:
      'We are going to talk about future of Vue and answers some questions.',
    date: '2021-11-23',
    image: 'images/vue-event.png',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: 'Angular event',
    location: 'Street 1, 20 Newtown',
    description:
      'We are going to talk about future of Vue and answers some questions.',
    date: '2021-11-23',
    image: 'images/angular-event.png',
    isFeatured: false,
  },
  {
    id: 'e4',
    title: 'Javascript event',
    location: 'Street 31, 25 Newtown',
    description:
      'A long talk with Mr. Jone walk about best way to learn javascript and why it is important.',
    date: '2022-9-1',
    image: 'images/javascript-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e5',
    title: 'Node.js event',
    location: 'Street 22, 1 Newtown',
    description:
      'Conference about back-end developer of javascript and a brief talk in full-stack javascript.',
    date: '2022-9-1',
    image: 'images/nodejs-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e6',
    title: 'Next.js event',
    location: 'Street 22, 1 Newtown',
    description:
      'Talk about benefits of server side rendering and how Next.js can imporve your app.',
    date: '2021-2-22',
    image: 'images/nextjs-event.png',
    isFeatured: false,
  },
];

export const getAllEvents = () => DATA;
