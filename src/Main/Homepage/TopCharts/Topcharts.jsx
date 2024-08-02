import React, { useEffect, useState } from 'react'
import './Topcharts.css'
import axios from 'axios'
import { topCharts } from '../../Utils/api'
import { useDispatch } from 'react-redux'
import { add } from '../../../components/slice'

export const Topcharts = () => {
  const [charts,setCharts]= useState([]);
  const [selectedSong,setSelectedSong] = useState();
  const dispatch = useDispatch();
  const displayCharts = async ()=>
    {
              const {data} = await axios.get(topCharts+'chart');
              const {results} = data?.data;
              setCharts(results);
              dispatch(add(selectedSong));
    }
    // console.log(charts);
    useEffect(()=>
      {
          displayCharts();
          
      },[]);
  return (
    <div>
        <h2 className='topcharts'>Top Charts</h2>
        <div className='cardLayout'>
               {
                charts?.map((item)=>
                  {
                    return(
                      <div className='chartSection' key={item?.id} onClick={(e)=>{setSelectedSong(item);displayCharts();}}>
                        <div>
                          <img className='chartImage' src={item?.image[2]?.url} alt="" />
                        </div>
                      </div>
                    )
                  })
               }
        </div>
    </div>
  )
}
