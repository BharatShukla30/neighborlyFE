import facebook from '../../assets/Facebook.png';
import instagram from '../../assets/Instagram.png';
import X from '../../assets/TwitterX.png';

const Footer = () => {
    return (
        <footer className="bg-custom-blue text-white p-16 max-phone:p-14">
            <h1 className="text-4xl max-phone:text-2xl"><b>Neighborly</b></h1>
            <div className="mt-4 flex">
                <div className="flex flex-col justify-between space-y-3 mr-20 max-phone:mr-10 max-phone:space-y-0">
                    <p className="mb-4 text-2xl max-phone:text-[18px]">Important Links</p>
                    <a href="/" className='max-phone:text-[12px]'>Home</a>
                    <a href="/" className='max-phone:text-[12px]'>Contact Us</a>
                    <a href="/" className='max-phone:text-[12px]'>Download app</a>
                    <div className='flex space-x-3 max-phone:pt-3'>
                        <a href="/"><img src={facebook} alt="facebook" className='max-phone:h-7'/></a>
                        <a href="/"><img src={instagram} alt="instagram" className='max-phone:h-7' /></a>
                        <a href="/"><img src={X} alt="X" className='max-phone:h-7'/></a>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-60 max-phone:ml-0">
                    <p className="mb-4 text-2xl max-phone:text-[18px]">Other Links</p>
                    <a href="/about" className='max-phone:text-[12px]'>About Us</a>
                    <a href="/" className='max-phone:text-[12px]'>Privacy Policy</a>
                    <a href="/" className='max-phone:text-[12px]'>Terms & Condition</a>
                    <a href="/" className='max-phone:text-[12px]'>FAQs</a>
                </div>
                
            </div>
        </footer>
    );
}
 
export default Footer;