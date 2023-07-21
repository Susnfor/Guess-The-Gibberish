import React from 'react'
import './btn.css'

const Modebtn = (props) => {
  return (
    <div className='Modebtn-container'>
        <div className='Modebtn-box'>
            <button onClick={props.clicked}>{props.mode}</button>
            </div>
    </div>
  )
}

export default Modebtn