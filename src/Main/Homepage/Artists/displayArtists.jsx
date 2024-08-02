import { artistsInApi, newReleasesApi } from '../../Utils/api';
import artistsStyles from './displayArtists.module.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DisplayArtists = () => {
    const [artists,setArtists] = useState([]);
    const fetchData = async ()=>
        {
            const {data} = await axios.get(artistsInApi+'A');
            setArtists(data.data.results);
        }
        // console.log(artists);
        useEffect(()=>
            {
                fetchData();
              
            },[]);
  return (
    <>
       <div>
            <h2 className={artistsStyles.topArtists}>Top Artists</h2>
            <div className={artistsStyles.artistsLayout}>
                {
                    artists?.map((artist)=>{
                        return(
                        <div className={artistsStyles.artistCard} key={artist.id}>
                            <div>
                                <img className={artistsStyles.artistImage} src={artist?.image[1]?.url}/>
                            </div>
                            <div>
                                <span className={artistsStyles.artistName}>{artist?.name}</span>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
       </div>
    </>
  )
}

export default DisplayArtists;