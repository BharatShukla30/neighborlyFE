import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg'
import { otpRegexPattern } from '../../utils/Regex'
import { validateOtp } from '../../utils/Validators'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authUserWithEmailOtp, authUserWithPhoneOtp, sendOtpToEmail, sendOtpToPhone } from '../../redux/actions/authActions'
import Cookies from 'js-cookie';

const OtpForm = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  //props
  const {mobile, isLogin, setGotoOtp, mobileMethod,emailData} = props
    
  // usesates.
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [err , setErr] = useState({isError : false,
                                    message : ''})
    
    // Adding send otp API
    const sendOtp = async (phoneNumber) => {
        const response = await fetch('/authentication/send-phone-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber: phoneNumber }),
        });
        const data = await response.json();
        console.log("Data >>>>>>>>>>> :" , data);
    }
    //useEffect.
    useEffect(()=>{
        console.log('otp sent',mobileMethod ? mobile.value : emailData.email)
        const data = {phoneNumber:mobile.value}
        const data2 = {email:emailData.email}
        
        mobileMethod ? (dispatch(sendOtpToPhone(data)).then(console.log('otp sent to phone'))) : (dispatch(sendOtpToEmail(data2)).then(console.log('otp sent to email')))    
        
    },[])


    //handler function.

    const handleOtpChange = (e, index) => {

        setErr((prev)=>({...prev, isError : false, message : ''}))
        
        const val = e.target.value.trim()
        if (otpRegexPattern.test(val) || val === '') {
            const newOtp = [...otp]
            newOtp[index] = val
            setOtp(newOtp)
        }
        else {
            return
        }
        //shifting focus 
        if(val && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }
        else if (val ==='' && e.target.previousSibling){
            e.target.previousSibling.focus()
        }
    }

       // Adding send otp API
       const verifyOtp = async (otp, phoneNumber) => {
        const response = await fetch('/authentication/verify-phone-otp', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                body: JSON.stringify({
                    "phoneNumber": phoneNumber,
                    "otp":  otp
                }),
                'mode': 'no-cors'
                }
        });
        const data = await response.json();
        console.log("Data >>>>>>>>>>> :" , data);
    }

    const handleContinue = ()=>{
        const OTP = otp.join('')
        const otpValidatorResult = validateOtp(OTP)
        if(otpValidatorResult.status) {
            if(isLogin) {
                //login logic
                const formData = {
                    phoneNumber: mobile.value,
                    otp: OTP
                }
                
                dispatch(authUserWithPhoneOtp(formData))
                                    .then((result) => {
                                        console.log(result)
                                        if (result.payload?.user) {
                                            console.log("User signed in successfully")
                                            Cookies.set('refreshToken', result.payload.refreshToken, { expires: 7 });
                                            navigate("/feed")
                                        }
                                    }
                                )
            }
            else{
                //signup logic

                const formData = {
                    phoneNumber: mobile.value,
                    otp: OTP
                }
                const formData2 = {
                    "email": emailData.email ,
                    "otp": OTP,
                    "verificationFor":"email-verify"
                }
                mobileMethod ? (dispatch(authUserWithPhoneOtp(formData))
                                    .then((result) => {
                                        console.log(result)
                                        if (result.payload?.user) {
                                            console.log("User signed in successfully")
                                            Cookies.set('refreshToken', result.payload.refreshToken, { expires: 7 });
                                            navigate("/feed")
                                        }
                                    }
                                )) : (dispatch(authUserWithEmailOtp(formData2))
                                        .then((result)=>{
                                            console.log(result)
                                            if(result.payload?.message === "Email verified successfully"){
                                                console.log("User signed in successfully")
                                                Cookies.set('refreshToken', result.payload.refreshToken, { expires: 7 });
                                                navigate("/feed")   
                                            }
                                        }
                                ))
            }
        }
        else {
            setErr((prev)=>({...prev, isError : true, message : otpValidatorResult.errMessage}))
        }
    }

    const handleResendCode = () => {
        console.log('code resent.')
    }
     


  return (
    <div className='flex flex-col gap-[3.5rem]
                    md:h-1/2 md:w-auto md:px-[11rem] md: py-[2rem]
                    xl:w-1/2 xl:h-full xl:p-[9rem]'>

            <img src={logo} alt="logo" className='logo w-[4rem] h-[4rem]'/>

        
        <div className='flex flex-col text-[#0A0A0A]'>
            <p className='text-h3 font-bold'> Enter Verification Code</p>
            <p className='text-body2 font-normal text-[#666666]'>We have sent a verification code to your {mobileMethod ? 'phone number':'email'} &nbsp;<font className='text-body2 font-medium text-[#635BFF]'>{mobileMethod ? mobile.value : emailData.email}.</font></p>
        </div>

        <div className='flex flex-col gap-[.5rem]'>
            <div className='flex flex-row w-auto gap-[.75rem]'>
                {otp.map(
                    (value, index) => (<input className = {`w-[3.5rem] h-[3.5rem] rounded-[.5rem] ${err.isError ? 'border border-[#FD1D1D] text-[#FD1D1D]' : ' border border-[#0A0A0A] text-[#0A0A0A]'} focus-within:border-2 text-h4 font-medium text-center `}
                                            key = {index}   
                                            type = 'text' 
                                            maxLength = {1}
                                            value={value}
                                            onChange={ (e)=>{ handleOtpChange(e, index) } }
                                            />
                                    )
                )}
            </div>
            {err.isError && <p className='text-[#FD1D1D] text-small'>{err.message}</p>}
        </div>

        <div className='flex flex-col gap-[1rem]'>
            <button className='bg-[#635BFF]  py-[0.813rem] text-white text-body2 font-medium flex justify-center items-center rounded-[1.75rem]'
                    onClick={ handleContinue }
                                                 >
                                            Continue
                                        </button>
            <p className = 'text-center font-bold text-[#635BFF] text-body2' onClick={ handleResendCode }>Resend code?</p>
            <p className = 'text-center font-bold text-[#635BFF] text-body2' onClick={ ()=>{setGotoOtp(false)} }>{mobileMethod ? "Change phone number" : ""}</p>
        </div>
    </div>

  )
}

export default OtpForm
