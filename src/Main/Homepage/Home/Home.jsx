import React, { useEffect, useState } from 'react'
import { Navbar } from '../Nav/Navbar'
import { Navmenu } from '../Navmenu/Navmenu'
import axios from 'axios';
import { songsApi } from '../../Utils/api'
import Body from '../Body/body';
import Player from '../Player/Player';
import { useDispatch, useSelector } from 'react-redux';
import homeStyles from './Home.module.scss'
import { playSong } from '../../../components/slice';

const Home = () => {
    const dispatch = useDispatch();
    const [songs,setSongs] = useState([]);
    const [selectedSong , setSelectedSong] = useState({});
    const getPlaylist = async() => {
    const {data} = await axios.get(songsApi+search)

     setSongs(data.data.results)
     }
    
     const playNext = () => {
       const findIndOfCurrSong = songs.findIndex((e) => e.id == selectedSong.id)
   
      setSelectedSong(songs[findIndOfCurrSong - 1])
    }
    useEffect(()=>{
        // console.log(songs);
        getPlaylist();
   },[songs])
    const search = useSelector(state=>state.playlist.search);
    // console.log(search);
    useEffect(()=>
      {
        dispatch(playSong(selectedSong));
        console.log(selectedSong)
      },[selectedSong])
  return (
    <div>
      <Navbar/>
      <Navmenu/>
      {
         !search?
         <>
           <Body/>
         </>
         : 
         <>
         <div className={homeStyles.searchSection}>
         {
          
          songs?.map((song)=>
            {
              return(
                <div className={homeStyles.song} onClick={()=>{setSelectedSong(song)}}>
                <div key={song?.id}>
                   <div>
                    <img src={song?.image[1]?.url} alt="" />
                   </div>
                   <div>
                    <span className={homeStyles.songAlbum}>{song?.album?.name?.substring(0,6) + "..."}</span>
                   </div>
                </div>
                </div>
              )
            })
            
         }
        </div>
         </>
      }
        
        <Player/>
    </div>
  )
}

export default Home;