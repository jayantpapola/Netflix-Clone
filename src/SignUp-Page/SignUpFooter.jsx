import React, {useState} from 'react'
import './SignUpFooter.css'

const SignUpFooter = () => {


    const [langDropDown, setLangDropDown] = useState('')
    const [language, setLanguage] = useState('English')

    function change_lang(e)
    {
        setLanguage( e.target.innerText)
    }
    
    function show()
    {
        if(langDropDown === '')
        {
            setLangDropDown('show')
        }
        else
        {
            setLangDropDown('')
        }
    }
  return (
    <div className='SignUpFooter'>
        <p>Got a question? Call 000-800-040-1843</p>
        <div className='footer'>

            <div className='foot'>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>privacy</li>
                    <li>speed test</li>
                </ul>
            </div>
            <div className='foot'>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>cookie preferences</li>
                    <li>legal notices</li>
                </ul>
            </div>
            <div className='foot'>
                <ul>
                    <li>account</li>
                    <li>ways of seeing</li>
                    <li>corporate information</li>
                    <li>only on netflix</li>
                </ul>
            </div>
            <div className='foot'>
                <ul>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact us</li>
                </ul>
            </div>

        </div>

        <button className='lang_btn' onClick={show}>
        <i class="fa-solid fa-globe"></i>
        {language}
        <i class="fa-solid fa-caret-down"></i>
        <div className={`lang_dropdown down ${langDropDown}`}>
                    <ul>
                        <li onClick={change_lang}> English</li>
                        <li onClick={change_lang}>Hindi</li>
                    </ul>
                </div>
        </button>

        <p id='netflix_india'>Netflix India</p>
        
    </div>
  )
}

export default SignUpFooter