import React, { useEffect, useState } from 'react'
import './NetflixBanner.css'
import axios from 'axios'
import request from '../request'

const NetflixBanner = () => {

    const [movie, setMovie] = useState([])
    const base_img_URL ="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{

        async function fetchMovie()
        {
            const Data = await axios.get(`https://api.themoviedb.org/3${request.fetchNetflixOriginals}`)
        
            setMovie(
                Data.data.results[
                    Math.floor(Math.random() * Data.data.results.length - 1)
                ]
            )
            return Data;
        }

        fetchMovie()
    },[])

    console.log(movie)

  return (
    <div className='NetflixBanner' 
        style={{
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundImage:`url(${base_img_URL}${movie.backdrop_path}) , linear-gradient(to right, rgb(17,17,17,0.8),transparent)`,
            backgroundBlendMode:'multiply',
            backgroundPosition:'center top, center left',
            minHeight:'600px',
            width:'100%'
        }}
    >

            <div className="NetflixBannerContent">

                    <h1>{movie.name}</h1>
                   
                    <div className="BannerButtons">
                        <button>Play</button>
                        <button>More Info</button>
                    </div>
                    <p>{movie.overview}</p>

            </div>
        <div className="NetflixBannerBottom">

        </div>
    </div>
  )
}

export default NetflixBanner