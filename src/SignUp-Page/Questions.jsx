import React, {useState} from 'react'
import './Question.css'
import Collapse from './Collapse'
import { Link } from 'react-router-dom'

const Questions = () => {

  
  const [inputValue, setInputValue] = useState('')


  return (
    <div className='Questions'>
        <h1>Frequently asked questions</h1>

        <Collapse
          Question={'What is Netflix?'}
          Anwser={'Netflix is a streaming service that lets you enjoy a variety of award-winning TV shows, movies, anime, documentaries on thousands of Internet-connected devices. You can watch as much as you want, whenever you want, without any ads - all for a very low monthly fee. Theres always something new to discover and new TV shows and movies added every week!'}
        />
        <Collapse
          Question={'How much does Netflix cost?'}
          Anwser={'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device for a fixed monthly fee. Plans from ₹ 149 to ₹ 649 per month. No extra prices or contracts.'}
        />
        <Collapse
          Question={'where can i watch'}
          Anwser={`Watch anywhere, anytime From your personal computer or on any Internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles, watch your Netflix on the web at netflix.com Sign in to account.You can also download your favorite shows from the iOS, Android or Windows 10 apps. Use Downloads to watch on the go and without an internet connection. Take Netflix with you wherever you go.`}
        />
        <Collapse
          Question={'How do i cancel?'}
          Anwser={'Netflix is flexible. There are no annoying contracts and no bindings. You can easily cancel your account online in two clicks. There are no cancellation fees - start or close your account at any time.'}
        />
        <Collapse
          Question={'What can i watch on Netflix?'}
          Anwser={"Netflix's vast library of feature films, documentaries, TV shows, anime, award-winning Netflix Originals and more. Watch as much as you want, anytime."}
        />
        <Collapse
          Question={'Is Netflix OK for kids?'}
          Anwser={"Your membership includes the Netflix Kids Experience. Kids enjoy family TV shows and movies their own way, but you can control the content they watch.Children's profiles have PIN-protected parental controls that allow you to block children from viewing content with maturity ratings and block titles you don't want children to see."}
        />

        <p className='subscription_line'>Ready to watch? Enter your email address to create or restart your membership.</p>
        <div className='input_field2'>
            <input type="email" name='email' placeholder='Email address' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <Link  to='/Signing_Up'>
              <button>Start<i class="fa-solid fa-angle-right"></i></button>
            </Link>
        </div>
        
    </div>
  )
}

export default Questions