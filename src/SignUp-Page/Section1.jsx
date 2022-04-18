import React from 'react'
import './Section1.css'

const Section1 = (props) => {
  return (
    <div className='Section1'>
        <div className="left_section">
            <h1>{props.heading}</h1>
            <p>{props.info}</p>
        </div>
        <div className="right_section">
            <video controls  autoPlay loop muted>
                <source type='video/mp4' src={props.video}/>
            </video>
            <img src={props.image}/>
        </div>
    </div>
  )
}

export default Section1