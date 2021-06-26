const Icons = [
  { image: require('../assets/icons/carabiner.png') },
  { image: require('../assets/icons/gondola.png') },
  { image: require('../assets/icons/skate.png') },
];

//These are a samll array that corresponde to the array below and will match the image with the name
const Images = [
  { image: require('../assets/locations/adrenalineForest.jpg') },
  { image: require('../assets/locations/christchurchgondola.jpg') },
  { image: require('../assets/locations/alpineIce.jpg') },
];

//This variable hold all the different data for the markers and if I want to add more I just copy more in the varaible below
export const markers = [
  {
    coordinate: {
      latitude: -43.42777451578711,
      longitude: 172.7040198536929,
    },
    icon: Icons[0].image,
    title: 'Adrenaline Forest',
    description:
      'This is a great place to explore nature while facing your fears',
    image: Images[0].image,
    rating: 5,
    reviews: 193,
    isFavorited: true,
  },
  {
    coordinate: {
      latitude: -43.58480427832419,
      longitude: 172.70749620476715,
    },
    icon: Icons[1].image,
    title: 'Christchurch Gondola',
    description:
      'This is a great place to explore nature while facing your fears',
    image: Images[1].image,
    rating: 4.5,
    reviews: 1797,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.54776611473159,
      longitude: 172.65733370106344,
    },
    icon: Icons[2].image,
    title: 'Alpine Ice Skating',
    description:
      'This is a great place to explore nature while facing your fears',
    image: Images[2].image,
    rating: 4.5,
    reviews: 585,
    isFavorited: true,
  },
];
