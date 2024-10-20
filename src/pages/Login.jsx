import React, {useState, useEffect} from 'react'
import Left from '../components/OnboardComponents/Left'
import OtpForm from '../components/OnboardComponents/OtpForm'
import LogInForm from '../components/OnboardComponents/LogInForm'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { isAuthenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const [mobileMethod, setMobileMethod] = useState(true);
  const [emailData, setEmailData] = useState({ email:"",
                                               password: "" 
                                            })

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
    <div className='sm:hidden w-screen h-screen
                    xl:flex xl:flex-row
                    md:flex md:flex-col'>
        <Left/>
        { gotoOtp ? 
          <OtpForm mobile = {mobile}  isLogin = {true} setGotoOtp = {setGotoOtp} mobileMethod={mobileMethod} emailData={emailData} />
          :
          <LogInForm setGotoOtp = {setGotoOtp} mobile = {mobile} setMobile = {setMobile}/>
        }
    </div>
  )
}

export default Login
