import facebook from '../../assets/productDesign/Facebook.png';
import instagram from '../../assets/productDesign/Instagram.png';
import X from '../../assets/productDesign/TwitterX.png';

const Footer = () => {
    return (
        <footer className="bg-custom-blue text-white p-16 max-[431px]:p-14">
            <h1 className="text-4xl max-[431px]:text-2xl"><b>Neighborly</b></h1>
            <div className="mt-4 flex">
                <div className="flex flex-col justify-between space-y-3 mr-20 max-[431px]:mr-10 max-[431px]:space-y-0">
                    <p className="mb-4 text-2xl max-[431px]:text-[18px]">Important Links</p>
                    <a href="/" className='max-[431px]:text-xs'>Home</a>
                    <a href="/" className='max-[431px]:text-xs'>Contact Us</a>
                    <a href="/" className='max-[431px]:text-xs'>Download app</a>
                    <div className='flex space-x-3 max-[431px]:pt-3'>
                        <a href="/"><img src={facebook} alt="facebook" className='max-[431px]:h-7'/></a>
                        <a href="/"><img src={instagram} alt="instagram" className='max-[431px]:h-7' /></a>
                        <a href="/"><img src={X} alt="X" className='max-[431px]:h-7'/></a>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-60 max-[431px]:ml-0 max-[821px]:ml-0">
                    <p className="mb-4 text-2xl max-[431px]:text-[18px]">Other Links</p>
                    <a href="/" className='max-[431px]:text-xs'>About Us</a>
                    <a href="/" className='max-[431px]:text-xs'>Privacy Policy</a>
                    <a href="/" className='max-[431px]:text-xs'>Terms & Condition</a>
                    <a href="/" className='max-[431px]:text-xs'>FAQs</a>
                </div>
                
            </div>
        </footer>
    );
}
 
export default Footer;