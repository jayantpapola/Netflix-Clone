import React, { useState } from 'react'
import './Collapse.css'

const Collapse = (props) => {

    const [state, setState] = useState('')
    const [rotate, setRotate] = useState('')

    function openCollapse()
    {
        if(state === '')
        {
            setState('show')
            setRotate('rotate')
        }
        else
        {
            setState('')
            setRotate('')
        }
        
    }

  return (
    <div className='Collapse'>
        <div className='collapse_btn'>
            <p className='question'>{props.Question}</p>
            <p onClick={openCollapse}><i class={`fa-light fa-plus ${rotate}`}></i></p>
        </div>
        
        <div className={`collapse_dropdown ${state}`}>
            <p>{props.Anwser}</p>
        </div>
    </div>
  )
}

export default Collapse