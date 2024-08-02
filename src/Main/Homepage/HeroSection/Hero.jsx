import './Hero.css'
import React, { useState } from 'react';
import axios from 'axios';
import hero1 from '../../Assets/BANNER_1.webp'
import hero2 from '../../Assets/BANNER_2.webp'
import hero3 from '../../Assets/BANNER_3.webp'

export const Hero = () => {
    const [playlist,setplaylist] = useState({});
    const getAlbumArt = async ()=>
        {
            const {data} = await axios.get('https://saavn.dev/api/search/playlists?query=Indie');
            const {results} = data?.data; 
            setplaylist(results);
            
        }
        // console.log(playlist);
       
return (
    
    <>
         
    {/* <div id="myCarousel" class="carousel slide" data-interval="6500" data-ride="carousel">
    	
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
       
        <div class="carousel-inner">
            <div class="active item carousel-fade">
                <img src={hero1} alt="" />
            </div>
            <div class="item carousel-fade">
                <img src={hero2} alt="" />
            </div>
            <div class="item carousel-fade">
                <img src={hero3} alt="" />
            </div>
        </div>
        
        <a class="carousel-control left" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
    </div> */}
         
    
    </>
)
}
