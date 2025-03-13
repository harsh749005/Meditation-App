
# 🤖 Introduction
A Meditation app built with react native expo . It showcases various affirmations.
It includes concepts like :  
📌 Dynamic Routing  
📌 Dynamic Files  
📌 Creating Tabs  
📌 Folder Structure  
📌 FlatList  
📌 ScrollView  

# ⚙️ Tech Stack  
•  React Native  
•  JavaScript  
•  TypeScript  
•  Css  

# 🔋 Features  

👉 Tab Navigation  
👉 Affirmation List  
👉 Meditations Timer    
# Dependies Used

1. expo-router
   ```bash
   npx expo install expo-router
   ```
2. expo-icons
   ```bash
   npm i @expo/vector-icons
   ```
# 🤸 Quick Start   
Cloning repository
```bash
git clone https://github.com/harsh749005/Meditation-App
```

Updating Dependencies To ensure your project is using the latest stable versions of Expo and React Native:   

Run the Expo upgrade command:
```bash
expo upgrade
```
This will update package.json and install the correct versions of dependencies.   
# Installation   
If you did not run, expo upgrade, then install the project dependencies manually using npm:
```bash
npm install
```
# Running the Project  

The --clear flag clears the cache.
```bash
npx expo start --clear
```
# Expo Go

Download the [ Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

# 🕸️ Snippets

<details>
  <summary>Meditation Data</summary>

  ```javascript
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

# Installation  
1. Install dependencies

   ```bash
   npx create-expo-app@latest appName
   ```

2. Start the app

   ```bash
    npx expo start
   ```
3. Reset app
   ```bash
   npm run reset-project
   ```
