
//These are a samll array that correspondes to the array below and will match the icon with the name
const Icons = [
  { image: require('../assets/icons/carabiner.png') }, // Adrenaline Forest
  { image: require('../assets/icons/golf.png') }, // Ferrymead Golf
  { image: require('../assets/icons/gondola.png') }, // Christchurch Gondola
  { image: require('../assets/icons/skate.png') },  // Alpine Ice Skating
  { image: require('../assets/icons/museum.png') },  // Christchurch Museum
  { image: require('../assets/icons/snow.png') },  // Antartic Centre
  { image: require('../assets/icons/tree.png') },  // Orana Park
  { image: require('../assets/icons/paintball.png') }, // Paintball Macleans Island
  { image: require('../assets/icons/boat.png') }, // Alpine Jet Thrills
];

//These are a samll array that correspondes to the array below and will match the image with the name
const Images = [
  { image: require('../assets/locations/adrenalineForest.jpg') },
  { image: require('../assets/locations/ferrymeadGolf.jpg') },
  { image: require('../assets/locations/christchurchgondola.jpg') },
  { image: require('../assets/locations/alpineIce.jpg') },
  { image: require('../assets/locations/christchurchMuseum.jpg') },
  { image: require('../assets/locations/antarticCentre.jpg') },
  { image: require('../assets/locations/oranaPark.jpg') },
  { image: require('../assets/locations/paintballMacleans.jpg') },
  { image: require('../assets/locations/alpineJetThrills.jpg') },
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
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.565948205408006,
      longitude: 172.70028642693956
    },
    icon: Icons[1].image,
    title: 'Ferrymead Minigolf',
    description:
      'Family fun for all ages',
    image: Images[1].image,
    rating: 4,
    reviews: 439,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.58480427832419,
      longitude: 172.70749620476715,
    },
    icon: Icons[2].image,
    title: 'Christchurch Gondola',
    description:
      'See Christchurch from a new perspective',
    image: Images[2].image,
    rating: 4.5,
    reviews: 1797,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.54776611473159,
      longitude: 172.65733370106344,
    },
    icon: Icons[3].image,
    title: 'Alpine Ice Skating',
    description:
      'Ice skating entertainment for the whole family',
    image: Images[3].image,
    rating: 4.5,
    reviews: 585,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.53069105302571,
      longitude: 172.62716691205105
    },
    icon: Icons[4].image,
    title: 'Christchurch Museum',
    description:
      'Explore the history of Christchurch',
    image: Images[4].image,
    rating: 4.5,
    reviews: 4226,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.48828155241349,
      longitude: 172.54692821280332
    },
    icon: Icons[5].image,
    title: 'Antartic Centre',
    description:
      'Wrap up and explore the cold',
    image: Images[5].image,
    rating: 4.5,
    reviews: 2773,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.465529084378204, 
      longitude: 172.46309881151106
    },
    icon: Icons[6].image,
    title: 'Orana Park',
    description:
      'See the wilderness like never before',
    image: Images[6].image,
    rating: 4,
    reviews: 2709,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.464076425331506, 
      longitude: 172.45492254906029
    },
    icon: Icons[7].image,
    title: 'PaintBall Mcleans Isalnd',
    description:
      'Pain is temporary, good memories live forever',
    image: Images[7].image,
    rating: 4,
    reviews: 91,
    isFavorited: false,
  },
  {
    coordinate: {
      latitude: -43.45487933807574, 
      longitude: 172.44270179670323
    },
    icon: Icons[8].image,
    title: 'Alpine Jet Thrills',
    description:
      'Explore the waimakiriri while being sokaed in turquoise waters.',
    image: Images[8].image,
    rating: 4,
    reviews: 49,
    isFavorited: false,
  },
];
