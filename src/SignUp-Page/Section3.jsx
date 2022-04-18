import React from 'react'
import './Section3.css'

const Section3 = (props) => {
  return (
        <div className='Section3'>
        <div className="left_section3">
            <h1>{props.heading}</h1>
            <p>{props.info}</p>
        </div>
        <div className="right_section3">
            <video controls  autoPlay loop muted>
                <source type='video/mp4' src={props.video}/>
            </video>
            <img src={props.image}/>
        </div>
    </div>
  )
}

export default Section3
