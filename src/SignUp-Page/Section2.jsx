import React from 'react'
import './Section2.css'



const Section2 = (props) => {
  return (
    <div className='Section2'>
        <div className="left_section2">
            <div className={`Downloading_animtion ${props.loadingAnimation}`}>
                <img className='poster' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                <div className='text'>
                    <b>Stranger Things</b>
                    <p>Downloading...</p>
                </div>
                <img className={`animation`} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"/>
            </div>
            <img  src={props.img}/>
        </div>
        <div className="right_section2">
            <h1>{props.heading}</h1>
            <p>{props.info}</p>
        </div>
        
    </div>
  )
}

export default Section2