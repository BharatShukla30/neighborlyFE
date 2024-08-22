import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/Logo.svg'
import Email from '../../assets/Email.svg'
import or from '../../assets/or.svg'
import pass from '../../assets/Password.svg'
import phone from '../../assets/Phone.svg'
import show from '../../assets/ShowPassword.svg'
import { useNavigate } from 'react-router-dom'
import { validatePassword, validatePhone, validateEmail } from '../../utils/Validators'
import { phoneRegexPattern } from '../../utils/Regex'
import { useDispatch } from "react-redux"
import { registerUser } from "../../redux/actions/authActions"
import GoogleLoginButton from './GoogleLoginButton';


const SignUpForm = (props) => {
    //props
    const { setGotoOtp, mobile, setMobile, setMobileMethod,setEmailData} = props

    //Google Auth use effect
    useEffect(()=>{
        const handleRedirect = async () =>{

            const param = new URLSearchParams(window.location.search);

            const code = param.get('code');
            if(code){
                //keep these credentials into env file if needed
                const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;
                const clientSecret = import.meta.env.VITE_REACT_APP_GOOGLE_SECRET_ID
                const redirectUri = `${import.meta.env.VITE_REACT_APP_URL}/login`

                try {
                    const data = {
                        client_id:clientId,
                        client_secret:clientSecret,
                        code:code,
                        grant_type:'authorization_code',
                        redirect_uri:redirectUri
                    }
                    fetch('https:oauth2.googleapis.com/token', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body:new URLSearchParams(data),
                    }).then((response)=>{
                        return response.json()
                    }).then((data)=>{
                        console.log(data)                        
                        dispatch(googleAuth({token:data.id_token}))
                                        .then((result)=>{
                                            console.log(result)
                                            if (result.payload?.user) {
                                                console.log("User signed in successfully")
                                                navigate("/feed")
                                            }
                                        })
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }
        handleRedirect();
    },[]);




    // warning
    const notify = () => toast("signup failed");

    //usestates
    const [methodMobile, setMethodMobile] = useState(true)

    const [email, setEmail] = useState({value : '',
                                        isError: false,
                                        errMessage : ''
                                    })

    const [password, setPassword] = useState({value : '',
                                              isError: false,
                                              errMessage : '',
                                              visible : false
                                            })

    const [repassword, setRepassword] = useState({value : '',
                                              isError: false,
                                              errMessage : '',
                                              visible : false
                                            })

    //usenavigate, useSelectors and dispatch.
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // clear usestates.
    const clearMobile = () => {
        setMobile({value : '',
                   isError: false,
                   errMessage : ''
                 })
    }

    const clearEmailPass = () => {
        setEmail({value : '',
                  isError: false,
                  errMessage : ''
                })

        setPassword({value : '',
                    isError: false,
                    errMessage : '',
                    visible : false
                    })

        setRepassword({value : '',
                       isError: false,
                       errMessage : '',
                       visible : false
                     })
    }
    

    //event handler functions.
    const handleContinue = (e) => {
        e.preventDefault()

        
        if(methodMobile) {
            const mobileValidatorResult = validatePhone(mobile.value)
            if(mobileValidatorResult.status) {
                const formData = {
                    phoneNumber: mobile.value,
                }
                dispatch(registerUser(formData))
                .then((result) => {
                    console.log(result)
                    if (result.payload?.user) {
                        console.log("User registered successfully")
                        setGotoOtp(true)
                    }else{
                        notify()
                    }
                })
            }
            else {
                setMobile((prev)=>({...prev, isError: true, errMessage : mobileValidatorResult.errMessage}))
            }
        }
        else {
            const emailValidatorResult = validateEmail(email.value)
            //email validation
            if(emailValidatorResult.status) {
                    const passwordValidatorResult = validatePassword(password.value)
                    //password validation
                    if(passwordValidatorResult.status) {
                        const repasswordValidatorResult = validatePassword(repassword.value)
                        //repasssword validation
                        if(repasswordValidatorResult.status) {
                            // password is same as repassword or not
                            if (password.value === repassword.value) {
                                //register user
                                const formData = {email : email.value,
                                                  password : password.value,
                                                //   confirm_password : repassword.value
                                                }
                                setEmailData(formData)
                                dispatch(registerUser(formData))
                                .then((result) => {
                                    console.log(result)
                                    if (result.payload?.user) {
                                      console.log("User registered successfully")
                                      setMobileMethod(false)
                                      setGotoOtp(true)
                                    }else{
                                        notify() 
                                    }
                                })
                            }
                            else {
                                setRepassword((prev) => ({...prev , isError : true, errMessage : `Re-password is not same as password`}))
                            }

                        }
                        else {
                            setRepassword((prev) => ({...prev , isError : true, errMessage : repasswordValidatorResult.errMessage}))
                        }
                    }
                    else {
                        setPassword((prev)=>({...prev, isError: true, errMessage : passwordValidatorResult.errMessage}))
                    }
            }
            else {
                setEmail((prev)=>({...prev, isError: true, errMessage : emailValidatorResult.errMessage}))
            }

        }
    }

    const handleContinueWithEmail = () => {
        setMethodMobile(false)
        clearMobile()
    }

    const handleContinueWithMobile = () => {
        setMethodMobile(true)
        clearEmailPass()
    }
    
    const switchToLogin = () => {
        navigate('/')
    }
    


  return (
    <div className='md:h-1/2 md:w-auto
                        xl:w-1/2 xl:h-screen xl:px-[5rem] xl:py-[4.68rem]'>

                <div className='flex flex-col 
                                md:gap-[2rem] px-[12rem] md:py-[2rem]
                                xl:h-full xl:justify-between xl:py-0 xl:px-[5rem]  
                                '> 
                    <div className='flex flex-col gap-[3.5rem]'>

                        <img src={logo} alt="logo" className='logo w-[4rem] h-[4rem]'/>

                        <div className='flex flex-col gap-[1.5rem]'>
                            <div className='flex flex-col text-[#0A0A0A]'>
                                <p className='text-h3 font-bold'> Join Neighborly</p>
                                <p className='text-body2 font-normal'>Explore your neighborhood</p>
                            </div>

                         
                                <div className='flex flex-col gap-[1rem]'>
                                    {/* phone feild */}
                                    { methodMobile && 
                                    
                                        <div className='flex flex-col gap-[.5rem]'>
                                        <input className={`fPhone flex border rounded-[.5rem] px-[1rem] py-[.813rem] ${mobile.isError ? 'border-[#FD1D1D]' : 'border-[#0A0A0A]' }  text-body2 font-normal focus:border-2 focus:outline-none`} 
                                                name = 'mobile' 
                                                type="text" 
                                                placeholder='Enter your phone number' 
                                                value = {mobile.value} 
                                                maxLength={10}
                                                onChange={
                                                    (e)=>{
                                                        const val = e.target.value.trim()
                                                        if(val==='' || phoneRegexPattern.test(val)) {
                                                            setMobile((prev) => ({...prev, value : val, isError: false }))
                                                        }
                                                    }
                                                } 
                                                required />
                                                {mobile.isError && <p className='phone_error_message text-[#FD1D1D] text-small' >{mobile.errMessage}</p>}
                                        </div>
                                    }

                                    {/* email feild */}
                                    { !methodMobile && 
                                        <div className='flex flex-col gap-[.5rem]'>
                                            <input className={`fEmailflex items-center border rounded-[.5rem] px-[1rem] py-[.813rem] ${email.isError ? 'border-[#FD1D1D]' : 'border-[#0A0A0A]' }   text-body2 font-normal focus:border-2`}
                                                name = 'email' 
                                                type="email" 
                                                placeholder='Enter your E-mail address'
                                                value = {email.value} 
                                                onChange={
                                                    (e) => {
                                                        setEmail((prev)=>({...prev, value : e.target.value, isError : false}))
                                                        
                                                    } 
                                                }
                                                required/>
                                               {email.isError && <p className=' text-[#FD1D1D] text-small' >{email.errMessage}</p>}
                                        </div>
                                    }

                                    {/* password field */}
                                    { !methodMobile && 
                                        <div className='flex flex-col gap-[.5rem]'>
                                            <div className={`fPassword flex justify-end items-center px-[1rem] py-[.813rem]  border rounded-[.5rem] ${password.isError.isError ? 'border-[#FD1D1D]' : 'border-[#0A0A0A]' }  focus-within:border-2`}> 
                                                <input className=' w-full flex text-body2 font-normal focus:outline-none' 
                                                    name = 'password' 
                                                    type={password.visible ? "text" : "password"} 
                                                    placeholder='Password' 
                                                    value = {password.value} 
                                                    onChange={(e)=>setPassword(prev => ({...prev, value : e.target.value, isError : false}))} 
                                                    required/>
                                                    
                                                <img  className='flex justify-center w-[1.5rem] h-[1.5rem]' 
                                                    src={password.visible ? show : pass}
                                                    onClick={()=>setPassword((prev) => ({...prev, visible: !prev.visible}))}/> 
                                            </div>
                                            {password.isError &&<p className='pass_error_message text-[#FD1D1D] text-small' >{password.errMessage}</p>}
                                        </div>
                                    }
                                    {/* Re-password feild */}
                                    { !methodMobile && 
                                        <div className='flex flex-col gap-[.5rem]'>
                                            <div className={`flex border justify-end items-center px-[1rem] py-[.813rem] rounded-[.5rem] ${repassword.isError ? 'border-[#FD1D1D]' : 'border-[#0A0A0A]' }  focus-within:border-2`}>
                                                <input className='flex  w-full  text-body2 font-normal focus:outline-none' 
                                                    name = 're-password' 
                                                    type={repassword.visible ? "text" :"password"} 
                                                    placeholder='Re-password' 
                                                    value = {repassword.value} 
                                                    onChange={
                                                        (e) => {
                                                            setRepassword((prev) => ({...prev, value : e.target.value, isError : false}))
                                                        }
                                                    } 
                                                    required/>

                                                <img className='flex justify-center w-[1.5rem] h-[1.5rem]' 
                                                    src={repassword.visible ? show : pass}  
                                                    onClick={()=>setRepassword((prev) => ({...prev, visible : !prev.visible}))}/> 
                                            </div>
                                            {repassword.isError && <p className='repass_error_message text-[#FD1D1D] text-small' >{repassword.errMessage}</p>}
                                        </div>
                                    }

                                    {/* Continue button */}
                                    <button className='bg-[#635BFF]  py-[0.813rem] text-white text-body2 font-medium flex justify-center items-center rounded-[1.75rem]'
                                            onClick = { handleContinue } >
                                        Continue
                                    </button>

                                    <img  src={or}/>
                                
                                    {/* continue with google */}
                                    <GoogleLoginButton/>

                                    {/* continue with email */}
                                    { methodMobile && 
                                        <button className='flex flex-row items-center py-[0.6rem] gap-[.5rem] border border-[#0A0A0A] justify-center  rounded-[1.75rem]'
                                                onClick={ handleContinueWithEmail }>
                                                    
                                            <img className='w-[2.5rem] h-[2.5rem]'
                                                 src={Email} 
                                                 alt="email icon"  />

                                            <span className='text-body2 font-medium'>Continue with E-mail</span>
                                        </button>
                                    }

                                    {/* continue with mobile */}
                                    { !methodMobile && 
                                        <button className='flex flex-row items-center py-[0.6rem] gap-[.5rem] border border-[#0A0A0A] justify-center rounded-[1.75rem]'
                                                onClick={ handleContinueWithMobile }>

                                            <img className='w-[2.5rem] h-[2.5rem]'
                                                 src={phone} 
                                                 alt="phone icon" />

                                            <span className='text-body2 font-medium'>Continue with Phone.</span>
                                        </button>
                                    }
                                    <p className='text-center text-body2 font-normal text-[#0A0A0A]'>Already have and account? &nbsp; <font className ='font-bold text-[#635BFF] cursor-pointer' onClick = { switchToLogin }>Log In</font>.</p>
                                
                            </div> 

                        </div>
                    </div>

                    <p className=' text-[#666666] text-small font-medium'>By clicking the above button and creating an account, you have read and accepted the <font className ='font-bold text-[#635BFF]'> Terms of Service </font> and acknowledged our <font className ='font-bold text-[#635BFF]'> Privacy Policy </font>.</p>
                </div> 
                <ToastContainer/>
        </div>
  )
}

export default SignUpForm
