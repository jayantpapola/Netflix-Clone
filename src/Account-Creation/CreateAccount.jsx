import React, { useState } from 'react'
import './CreateAccount.css'

const CreateAccount = () => {

  const [step1, setStep1] = useState('active')
  const [step2, setStep2] = useState('')
  const [step3, setStep3] = useState('')
  const [step4, setStep4] = useState('')
  const [signIn, signOut] = useState('Sign In')
  const [mobile, setMobile] = useState('')
  const [basic, setBasic] = useState('active')
  const [standard, setStandard] = useState('')
  const [premium, setPremium] = useState('')
  const [planTableHeight, setPlanTableHeight] = useState({})
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

   function selectPlan1()
    {
      setMobile('active')
      setBasic('')
      setStandard('')
      setPremium('')
    }
   function selectPlan2()
    {
      setBasic('active')
      setMobile('')
      setStandard('')
      setPremium('')
    }
   function selectPlan3()
    {
      setStandard('active')
      setMobile('')
      setBasic('')
      setPremium('')
    }
   function selectPlan4()
    {
      setPremium('active')
      setMobile('')
      setBasic('')
      setStandard('')
    }



  function setActive1()
  {
    setStep1('')
    setStep2('active')
  }
  function setActive2()
  {
    if(emailInput === '')
    {
      alert('Enter Your Email first')
    }
    else if(passwordInput === '')
    {
      alert('Password is necessary')
    }
    else
    {
      setStep2('done')
      setStep3('active')
      signOut('Sign Out')
    }
    
  }
  function setActive3()
  {
    setStep3('done')
    setStep4('active')
    setPlanTableHeight({
      minHeight:'600px'
    })
  }



  return (
    <div className='CreateAccount'>
        <div className="CreateAccount_header">
          <div className="inner_header">

            <svg viewBox="0 0 111 30" class="CreateAccount_logo" focusable="false">
                <g id="netflix-logo">
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
                </g>
            </svg>

            <p>{signIn}</p>

          </div>

        </div>


        <div className="createAccount_Steps" style={planTableHeight}>



            {/* Step1 */}
            <div className={`Step1 ${step1}`}>
              <div className='Step1_bgImg'></div>
              <div className='setting_up_guide'>
                  <span className='steps'>STEP 1 OF <b>3</b></span>
                  <h1>Finish setting up your account</h1>
                  <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
              </div>
              <button className='Step1_btn' onClick={setActive1}>Next</button>
            </div>



            {/* Step2 */}
            <div className={`Step2 ${step2}`}>
            <span className='steps'>STEP 1 OF <b>3</b></span>
            <h1>Create a password to start your membership</h1>
            <p>Just a few more steps and you're done!
                We hate paperwork, too.</p>
              <form className='step2_input'>
                <input type="email" name='email' placeholder='email or phone' value={emailInput} onChange={e=>setEmailInput(e.target.value)}/>
                <input type="password" placeholder='Add a Password' value={passwordInput} onChange={e=>setPasswordInput(e.target.value)}/>
              </form>
              
              <button className='Step2_btn'onClick={setActive2}>Next</button>
            </div>



            {/* Step3*/}
            <div className={`Step3 ${step3}`}>
              <div className='Step3_bgImg'></div>
              <span className='steps'>STEP 2 OF <b>3</b></span>
              <h1>Choose your plan.</h1>
              <div className='Step3_guide'>
                    <span>
                      <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <p>
                      No commitments, cancel anytime.
                    </p>
              </div>

              <div className='Step3_guide'>
                    <span>
                      <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <p>
                      Everything on Netflix for one low price.
                    </p>
              </div>

              <div className='Step3_guide'>
                    <span>
                      <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <p>
                      No ads and no extra fees. Ever.
                    </p>
              </div>
              
              
              
              <button className='Step3_btn' onClick={setActive3}>Next</button>
            </div>  



            {/* Netflix Plans */}
            <div className={`Netflix_plans ${step4}`}>
              <span className='steps'>STEP 2 OF <b>3</b></span>
                    <h1>Choose the plan that's right for you</h1>
                    <div className='Netflix_plans_guide'>
                          <span>
                            <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          <p>
                          Watch all you want. Ad-free.
                          </p>
                    </div>

                    <div className='Netflix_plans_guide'>
                          <span>
                            <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          <p>
                          Recommendations just for you.
                          </p>
                    </div>
                    <div className='Netflix_plans_guide'>
                          <span>
                            <svg fill='none' width="24" height="24" viewBox="0 0 24 24" id='tick_svg'  xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path>
                            </svg>
                          </span>
                          <p>
                          Change or cancel your plan anytime.
                          </p>
                    </div>
              

                <div className="Netflix_plans_table">
                  <div className="Netflix_plans_table row1">
                    <div className='col1'></div>
                    <div className='col2'><div className={`plan_type ${mobile}`} onClick={selectPlan1}><b>Mobile</b></div></div>
                    <div className='col3'><div className={`plan_type ${basic}`} onClick={selectPlan2}><b>Basic</b></div></div>
                    <div className='col4'><div className={`plan_type ${standard}`} onClick={selectPlan3}><b>Standard</b></div></div>
                    <div className='col5'><div className={`plan_type ${premium}`} onClick={selectPlan4}><b>Premium</b></div></div>
                  </div>
                  <div className="Netflix_plans_table row2">
                    <div className={`col1`}>Monthly price</div>
                    <div className={`col2 ${mobile}`}><b>₹ 149</b></div>
                    <div className={`col3 ${basic}`}><b>₹ 199</b></div>
                    <div className={`col3 ${standard}`}><b>₹ 499</b></div>
                    <div className={`col3 ${premium}`}><b>₹ 649</b></div>
                  </div>
                  <div className="Netflix_plans_table row2">
                    <div className={`col1`}>Video quality</div>
                    <div className={`col2 ${mobile}`}><b>Good</b></div>
                    <div className={`col3 ${basic}`}><b>Good</b></div>
                    <div className={`col3 ${standard}`}><b>Better</b></div>
                    <div className={`col3 ${premium}`}><b>Best</b></div>
                  </div>
                  <div className="Netflix_plans_table row2">
                    <div className={`col1`}>Resolution</div>
                    <div className={`col2 ${mobile}`}><b>480p</b></div>
                    <div className={`col3 ${basic}`}><b>480p</b></div>
                    <div className={`col3 ${standard}`}><b>1080p</b></div>
                    <div className={`col3 ${premium}`}><b>4k+HDR</b></div>
                  </div>
                  <div className="Netflix_plans_table row3">
                    <div className={`col1`}>Devices you can use to watch</div>
                    <div className={`col ${mobile}`}>
                        <p><i class="fa-solid fa-2x fa-mobile-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-tablet-screen-button"></i></p>
                    </div>
                    <div className={`col ${basic}`}>
                        <p><i class="fa-solid fa-2x fa-mobile-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-tablet-screen-button"></i></p>
                    </div>
                    <div className={`col ${standard}`}>
                        <p><i class="fa-solid fa-2x fa-mobile-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-tablet-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-display"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-display"></i></p>
                    </div>
                    <div className={`col ${premium}`}>
                        <p><i class="fa-solid fa-2x fa-mobile-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-tablet-screen-button"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-display"></i></p><br/><br/>
                        <p><i class="fa-solid fa-2x fa-display"></i></p>
                    </div>
                  </div>
                  
                </div>

                <div className='Netflix_plans_more_info'>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR 
                      availability subject to your internet service and 
                      device capabilities. Not all content is available 
                      in all resolutions. See our Terms of Use for more 
                      details.
                    </p>
                      <br/>
                    <p>
                    Only people who live with you may use your account.
                     Watch on 4 different devices at the same time with 
                     Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </p>
                </div>
                <center><button className='final_Btn'>Next</button></center>

              
              </div>
 
        </div>

        



        <div className="CreateAccount_Footer">
          <p>Questions? Call 000-800-040-1843</p>

          <p>
            <span>FAQ</span><span>Help Centre </span><span>Terms of Use</span><span>Privacy</span>
                <br/>
                <br/>
            <span>Cookie Preferences</span><span id='uni'>Corporate Information</span>
          </p>
        </div>

    </div>
  )
}

export default CreateAccount