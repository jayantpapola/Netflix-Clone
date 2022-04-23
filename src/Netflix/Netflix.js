import React, { useEffect, useState } from 'react'
import Row from './Row'
import request from '../request'
import './Netflix.css'
import NetflixBanner from './NetflixBanner'
import NetflixNavbar from './NetflixNavbar'
import Modal from './Modal'

const Netflix = () => {

    // const [ show, setShow] = useState('none')

    // function modal()
    // {
    //   setShow('')
    // }

  return (
    <div className='Netflix'>

        <NetflixNavbar/>

        <NetflixBanner/>

        {/* <Modal display={show}/> */}
        <Modal />

      <div className="Movies">
        <Row title={'Netflix Originals'} fetchURL={request.fetchNetflixOriginals} LargeRow />
        <Row title={'Trending Now'} fetchURL={request.fetchTrending}/>
        <Row title={'Top Rated'} fetchURL={request.fetchTopRated}/>
        <Row title={'Action Movies'} fetchURL={request.fetchActionMovies}/>
        <Row title={'Comedy Movies'} fetchURL={request.fetchComedyMovies}/>
        <Row title={'Horror Movies'} fetchURL={request.fetchHorrorMovies}/>
        <Row title={'Romantic Now'} fetchURL={request.fetchRomanticMovies}/>
        <Row title={'For Kids'} fetchURL={request.fetchUnknown}/>
        
      </div>
        
    </div>
  )
}

export default Netflix