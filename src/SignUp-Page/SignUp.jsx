import React from 'react'
import './SignUp.css'
import Banner from './Banner'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Questions from './Questions'
import SignUpFooter from './SignUpFooter'

const SignUp = () => {
  return (
    <div className='SignUp'>
        <Banner/>

        <Section1
          heading={'Have fun on your TV.'}
          info={'Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players as well as other devices.'}
          image={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'}
          video={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'}
        />

        <Section2
        heading={'Download your shows for offline viewing.'}
        info={'Save your favorite shows and movies so you can watch them anytime.'}
        img={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'}
        loadingAnimation={''}
        />

        <Section3
          heading={'Look everywhere.'}
          info={'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying extra.'}
          image={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'}
          video={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'}
        />

        <Section2
        heading={'Create a profile for kids.'}
        info={'Let the kids go on an adventure with your favorite characters just for them - free with your membership.'}
        img={'https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABWyR4PRbOrZ7gTlG51xaRQOAhgyD8fC4tsAWgdWZ-YAH5oXXwMG7P_17Yw25UzINovm0C4-sibYhqQJfoN63_OYEUC0S.png?r=fcd'}
        loadingAnimation={'none'}
        />

        <Questions/>

        <SignUpFooter/>
    </div>
  )
}

export default SignUp