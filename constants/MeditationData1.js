// Import images
import trees from '../assets/meditation-images/trees.webp';
import beach from '../assets/meditation-images/beach.webp';
import meditate_under_tree from '../assets/meditation-images/meditate-under-tree.webp';
import river from '../assets/meditation-images/river.webp';
import waterfall from '../assets/meditation-images/waterfall.webp';
import yosemite_stars from '../assets/meditation-images/yosemite-stars.webp';

// Import audio files
import trees_audio from '../assets/audio/trees.mp3';
import beach_audio from '../assets/audio/beach.mp3';
import meditate_under_tree_audio from '../assets/audio/meditate-under-tree.mp3';
import river_audio from '../assets/audio/river.mp3';
import waterfall_audio from '../assets/audio/waterfall.mp3';
import yosemite_stars_audio from '../assets/audio/yosemite-stars.mp3';

// Meditation Data
const meditationData = [
  {
    id: 1,
    title: "Mountains",
    image: trees,
    audio: trees_audio,
  },
  {
    id: 2,
    title: "Rivers",
    image: river,
    audio: river_audio,
  },
  {
    id: 3,
    title: "Sunset",
    image: meditate_under_tree,
    audio: meditate_under_tree_audio,
  },
  {
    id: 4,
    title: "Beaches",
    image: beach,
    audio: beach_audio,
  },
  {
    id: 5,
    title: "Starry Night",
    image: yosemite_stars,
    audio: yosemite_stars_audio,
  },
  {
    id: 6,
    title: "Waterfall",
    image: waterfall,
    audio: waterfall_audio,
  },
];

export default meditationData;
