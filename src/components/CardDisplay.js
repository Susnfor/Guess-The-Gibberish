import React from 'react'
import './CardDisplay.css'

const CardDisplay = (props) => {


  return (
    <div className='Card-container'>
        <div className='Card-box'>
            <div className='Card-front'>{props.front}</div>
            <div className='Card-back'>{props.back}</div>
        </div>
        </div>
  )
}

export default CardDisplay