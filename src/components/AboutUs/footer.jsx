import facebook from '../../assets/AboutUs/Facebook.png';
import instagram from '../../assets/AboutUs/Instagram.png';
import X from '../../assets/AboutUs/TwitterX.png';

const Footer = () => {
    return (
        <footer className="bg-[#0A2540] text-white p-16 ">
            <h1 className="text-4xl max-[430px]:text-2xl"><b>Neighborly</b></h1>
            <div className="mt-4 flex text-[#F6F9FC]">
                <div className="flex flex-col justify-between space-y-3 mr-20 max-[430px]:mr-0">
                    <p className="mb-4 text-2xl max-[430px]:text-lg">Important Links</p>
                    <a href="/" className='max-[430px]:text-xs'>Home</a>
                    <a href="/"className='max-[430px]:text-xs'>Contact Us</a>
                    <a href="/"className='max-[430px]:text-xs'>Download app</a>
                    <div className='flex space-x-3'>
                        <a href="/"><img src={facebook} alt="facebook" className='h-6'/></a>
                        <a href="/"><img src={instagram} alt="instagram"  className='h-6'/></a>
                        <a href="/"><img src={X} alt="X" className='h-6'/></a>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-60 max-[430px]:ml-10">
                    <p className="mb-4 text-2xl max-[430px]:text-lg">Other Links</p>
                    <a href="/" className='max-[430px]:text-xs'>About Us</a>
                    <a href="/" className='max-[430px]:text-xs'>Privacy Policy</a>
                    <a href="/" className='max-[430px]:text-xs'>Terms & Condition</a>
                    <a href="/" className='max-[430px]:text-xs'>FAQs</a>
                </div>
                
            </div>
        </footer>
    );
}
 
export default Footer;