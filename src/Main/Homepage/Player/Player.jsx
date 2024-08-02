import React, { useEffect } from 'react'
import PlayerStyles from './Player.module.scss'
import { PlayCircleOutlined, StepBackwardFilled, StepForwardFilled } from '@ant-design/icons'
import { Newrelease } from '../Newreleases/Newrelease'
import { useSelector } from 'react-redux'
const Player = () => {

  const selectedSong = useSelector(state=>state.playlist.play);
  useEffect(()=>
    {
      // console.log(selectedSong?.downloadUrl[4]?.url);
    },[selectedSong]);
   
   
  return (
    <>
     <div className={PlayerStyles.playerSection}>
      <div>
        {selectedSong?.image && 
          <img className={PlayerStyles.playerImg} src={selectedSong?.image[0]?.url} alt="" />
        }
        <div>
          <span>{selectedSong?.name}</span>
          <span>{selectedSong?.year}</span>
        </div>
      </div>
      <div>
         
         {
          <audio src="" controls />}
         
      </div>
      <div></div>
     </div>   
    </>
  )
}

export default Player;