import React, { useEffect, useState } from 'react';
import './Indiemusic.css';
import axios from 'axios';
import { newReleasesApi } from '../../Utils/api';

export const Indiemusic = () => {
  const [indie,setIndie] = useState([]);
  const fetchData = async ()=>
    {
      const {data} = await axios.get(newReleasesApi+'indie')
      const {results} = data?.data;
      setIndie(results);
    }
    // console.log(indie);
    useEffect(()=>{
      fetchData();
      
    },[])
  return (
    <>
    <div>
        <h2 className='indiemusic'>Indie Music</h2>
        <div className='cardLayout'>
        {
                indie?.map((item)=>
                  {
                    return(
                      <div className='indieSection' key={item?.id}>
                        <div>
                          <img className='indieImage' src={item?.image[2]?.url} alt="" />
                        </div>
                        <div>
                          <span className='indieName'>{item?.name}</span>
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
