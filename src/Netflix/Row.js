import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import { modalOpen } from '../Actionsssssssss/Action'
import { useDispatch } from 'react-redux'


const Row = ({title, fetchURL, LargeRow }) => {

    const dispatch = useDispatch()

    const base_img_URL ="https://image.tmdb.org/t/p/original/"

    const [movies, setMovies] = useState([])

    useEffect(()=>{

        async function fetchData()
        {
            const Data = await axios.get(`https://api.themoviedb.org/3${fetchURL}`)
            
            setMovies(Data.data.results)
            return Data;
        }
        fetchData();
    },[fetchURL])


    


  return (
    <div className='Row'>
        <h3>{title}</h3>
        <div className={`Row_container ${LargeRow && 'poster_row'}`}>
            {movies.map(e=>(
                <img onClick={
                    ()=>dispatch(
                    modalOpen({
                        Image:e.backdrop_path,
                        Name: e.title || e.name || e.original_name ,
                        desc:e.overview,
                        rating:e.vote_average,
                        status:'closed'
                    })
                )
                } key={e.id} src={`${base_img_URL}${LargeRow?e.poster_path: e.backdrop_path}`}/>
            ))}
        </div>
    </div>
  )
}

export default Row