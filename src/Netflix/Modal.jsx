import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Modal.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Modal = () => {

    // const base_img_URL ="https://image.tmdb.org/t/p/original/"

    const [trailerUrl, setTrailerUrl] = useState('')
    
    const opts = {
                minHeight : '350px',
                width : '100%',
                playerVars : {
                    autoplay : 1,
                }
    }


    const [ modal, setModal] = useState('none')
    const [ like, setLike] = useState({})
    const [ rating, setRating] = useState({
                                            backgroundColor:'white'
                                            })

    const state = useSelector((e)=>e.ModalReducer)

   function liked()
   {
    setLike({
        backgroundColor:'royalblue',
        color:'white'
    })
    
   }


   useEffect(()=>{
    setLike({})
},[state])


//  const movieRender =  async (url)=>{
//     movieTrailer(`${state.Name}` || "")
//     try{
//         const urlParams = await URLSearchParams(new URL(url).search)
//         setTrailerUrl(urlParams.get('v'))
//     }
//     catch(err){
//         console.log(err)
//     }

//  }

    useEffect(()=>{

        if(state.status ==='closed')
        {
            //Opening Modal
            setModal('')
            //Movie Trailer Function
            if(trailerUrl)
            {
                setTrailerUrl('')
            }
            else
            {
                 movieTrailer(`${state.Name}` || "")
                .then((url)=>{
                    console.log(url)
                    const urlParams =  new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error)=>console.log(error))
                // movieRender()
            }
        }

    },[state])

    useEffect(()=>{

        if(state.rating >= 7)
        {
            setRating({
                backgroundColor:'rgb(84, 239, 84)'
                })
        }
        else if(state.rating >= 4)
        {
            setRating({
                backgroundColor:'orange'
                })
        }
        else if(state.rating >= 0)
            {
            setRating({
                backgroundColor:'red'
                })
        }

    },[state])

    function shutModal()
    {
        setModal('none')
        setTrailerUrl('')
    }
    
    


  return (
    <div className={`Modal ${modal}`}>
        <div className="modal_shut_btn" onClick={shutModal}><i className="fa-solid fa-xmark"></i></div>
        <div className="modal_content">
            <div className='modal_img'>
                {/* <img src={`${base_img_URL}${state.Image}`}/> */}
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>

            <div className="modal_description">
                <h2>
                    {state.Name}
                    {/* ??rase una vez... Pero ya no */}
                </h2>
                <p>
                    {state.desc}
                    {/* A tragically separated couple must find each other
                     in another life to break a spell on their town, 
                     but the arrival of two tourists threaten their chance. */}
                </p>   
            </div>

            <div className="modal_footer">
                <div className="modal_rating" style={rating}>
                        {state.rating}<i className="fa-solid fa-star"></i>
                </div>
                <div className="modals_btn">
                    <button><i className="fa-solid fa-play"></i></button>
                    <button style={like} onClick={liked}><i className="fa-solid fa-thumbs-up" ></i></button>
                    <button><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal