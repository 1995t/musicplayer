import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Newrelease.css';
import { useDispatch } from 'react-redux';
import { add } from '../../../components/slice';

export const Newrelease = () => {
    const [playlist,setplaylist] = useState([]);
    const [albums,setAlbums] = useState([]);
    const [selectedSong , setSelectedSong] = useState({})
    const dispatch = useDispatch();
    const fetchData = async ()=>
        {
            const {data} = await axios.get('https://saavn.dev/api/search/playlists?query=Top');
            const {results} = data?.data; 
            setplaylist(results);
            
        }
        // console.log(playlist);
        useEffect(()=>
            {
                dispatch(add(selectedSong));
            },[selectedSong]);
        useEffect(()=>
            {
                fetchData();
            },[playlist]);
        
        // console.log(albums);
        
  return (
    <>
    <div>
        <h2 className='newreleases'>New Releases</h2>
        <div className='cardLayout'>
            {/* <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://img-dynamic.wynk.in/unsafe/top/filters:watermark(https://discovery-prod-arsenal.s3.ap-south-1.amazonaws.com/arsenal/library/new_songs_mix_1/var4/v4/new_songs_mix_1.png,0,-0,0,100,100)/https://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240620170431839/5021732405999/1718904627454/resources/5021732412195.jpg?dynamic=true" name="New Songs Mix"/>
            <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/668d06e9a629e158575970de/COLLECTION_22679028315645.png" name="New Hindi Songs"/>
            <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6687ed81440a065199998599/COLLECTION_115658765291769.png" name="New English Songs"/>
            <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_timesmusic/2024-07/01/11-36/8902633356702.jpg" name="Sarfira"/>
            <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602465638707_20240517010339240/1715912408377/24UMGIM36186_T1_cvrart.jpg" name="HIT ME HARD AND SOFT"/>
            <Albumcard info="https://img.wynk.in/unsafe/220x220/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/20240710173627303/5021732430656/1720634727144/resources/5021732430656.jpg" name="KODAK"/> */}
            {playlist?.map((item)=>
                {
                    return(
                    <div className='cardSection' key={item?.id}  onClick={()=>{setSelectedSong(item);}}>
                        <div className='cardImageSection'>
                            <img className='cardImage' src={item?.image[2]?.url} alt="" />
                        </div>
                        <div>
                            <span className='cardImageName'>{item?.name}</span>
                        </div>
                    </div>
                    )
                })}
        </div>
    </div>
    
    </>
  )
}
