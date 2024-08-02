import React from 'react'
import { Hero } from '../HeroSection/Hero';
import { Newrelease } from '../Newreleases/Newrelease';
import { Topcharts } from '../TopCharts/Topcharts';
import { Indiemusic } from '../IndieMusic/Indiemusic';
import DisplayArtists from '../Artists/displayArtists';
import Player from '../Player/Player';

function Body(props) {
  return (
    <>
       {props.inputVal?<div></div>:
       <>
        <Hero/>
        <Newrelease/>
        <Topcharts/>
        <Indiemusic/>
        <DisplayArtists/>
        
       </>
       }
    </>
  )
}

export default Body;