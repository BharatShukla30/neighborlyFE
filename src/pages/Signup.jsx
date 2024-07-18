import React , { useState, useEffect } from 'react'
import Left from '../components/OnboardComponents/Left'
import SignUpForm from '../components/OnboardComponents/SignUpForm'
import OtpForm from '../components/OnboardComponents/OtpForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Signup = () => {

  const { isAuthenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/location")
    }
  }, [isAuthenticated])

  const[gotoOtp, setGotoOtp] = useState(false)
  const [mobile, setMobile] = useState({value : '',
                                        isError: false,
                                        errMessage : ''
                                      })

  return (
    <div className='hidden w-screen h-screen
                    xl:flex xl:flex-row
                    md:flex md:flex-col'>
        
        <Left/>
        { gotoOtp ? 
          <OtpForm mobile = {mobile} isLogin = {false} setGotoOtp = {setGotoOtp}/>
          :
          <SignUpForm setGotoOtp = {setGotoOtp} mobile = {mobile} setMobile = {setMobile}/>
        }
    </div>
  )
}

export default Signup
