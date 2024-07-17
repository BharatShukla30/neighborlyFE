import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg'
import { otpRegexPattern } from '../../utils/Regex'
import { validateOtp } from '../../utils/Validators'

const OtpForm = (props) => {
  //props
  const {mobile, isLogin, setGotoOtp} = props
    
  // usesates.
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [err , setErr] = useState({isError : false,
                                    message : ''})
                                    
    //useEffect.
    useEffect(()=>{
        console.log('otp sent to mobile',mobile.value)
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

    const handleContinue = ()=>{
        const OTP = otp.join('')
        const otpValidatorResult = validateOtp(OTP)
        if(otpValidatorResult.status) {
            if(isLogin) {
                //login logic
                console.log('login done')
            }
            else{
                //signup logic
                console.log('signup done')
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
            <p className='text-body2 font-normal text-[#666666]'>We have sent a verification code to your phone number &nbsp;<font className='text-body2 font-medium text-[#635BFF]'>{mobile.value}.</font></p>
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
            <p className = 'text-center font-bold text-[#635BFF] text-body2' onClick={ ()=>{setGotoOtp(false)} }>Change phone number</p>
        </div>
    </div>

  )
}

export default OtpForm
