import React from 'react'
import './Albumcard.css'

export const Albumcard = (props) => {
  return (
    <>
      <div className='card'>
          <img className='cardImage' src={props.info} alt="" />
          <div className='albumInfo'>
            <span className='albumText'>{props.name}</span>
          </div>
      </div>
    </>
  )
}
