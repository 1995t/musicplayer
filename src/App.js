import { useEffect, useState } from 'react';
import './App.css';
import DisplayArtists from './Main/Homepage/Artists/displayArtists';
import { Hero } from './Main/Homepage/HeroSection/Hero';
import { Indiemusic } from './Main/Homepage/IndieMusic/Indiemusic';
import { Navbar } from './Main/Homepage/Nav/Navbar';
import { Navmenu } from './Main/Homepage/Navmenu/Navmenu';
import { Newrelease } from './Main/Homepage/Newreleases/Newrelease';
import Player from './Main/Homepage/Player/Player';
import { Topcharts } from './Main/Homepage/TopCharts/Topcharts';
import axios from 'axios';
import { newReleasesApi } from './Main/Utils/api';
import Home from './Main/Homepage/Home/Home';

function App() {
 
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
