import google from '../../assets/Google.svg'
const GoogleLoginButton = () => {

    const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = `${import.meta.env.VITE_REACT_APP_URL}/login`;
    const handleLogin = () =>{
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile&prompt=consent`;
        window.location.href = authUrl;
    }
    return (
        
        <button onClick={handleLogin} className="flex flex-row items-center py-[0.6rem]  gap-[.5rem] border-[#0A0A0A] border justify-center  rounded-[1.75rem]">
            <img className='w-[2.5rem] h-[2.5rem]' src={google} alt="google icon"/>
            <span className='text-body2 font-medium'>Continue with Google</span>
        </button>
        
    );
}
 
export default GoogleLoginButton;