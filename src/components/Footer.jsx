import { useLocation } from "react-router-dom"

const Footer = () => {
    const location = useLocation();

  return (
    
<footer className={`bg-white border-t-[1px] border-slate-300 px-10 py-4 ${location.pathname === '/dashboard' || location.pathname === '/dashboard/' ? "hidden" : ""}`}>
    <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className=''>
                <a href="/" className="flex items-center sm:mb-0">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Neighborly</span>
                </a>
            <p className='pt-1 lg:py-3 text-slate-500'>Explore, Connect, Thrive - Your Local Community Hub</p>
            </div>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 mt-4">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="border-[1px] border-gray-200 sm:mx-auto my-3" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="/" className="hover:underline">Neighborly™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer