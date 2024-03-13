import graphic from "../assets/graphic.png";
import blob1 from "../assets/blob1.png";
import blob2 from "../assets/blob2.png";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoChatboxOutline } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="block w-screen  bg-slate-900">
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-auto   flex flex-col-reverse gap-15 justify-around items-center md:flex-row ">
          <div className="relative">
          <div className = "absolute blur-3xl w-[200px] h-[200px] opacity-40 z-0 rounded top-1/3 inset-0 mx-auto -translate-x-10  abstract_motion"></div>
            <div className="w-full max-w-[450px] ">
              <h1 className="text-white text-center md:text-left text-3xl text-wrap m-5 ">
                Explore, Connect, Share , Chat and Learn
              </h1>
            </div>
            <p className="text-center md:text-left text-sm text-gray-200 m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ipsa!</p>
            <div className="w-full m-5 flex justify-center md:justify-start">
              <button
                className="middle none center mr-4 rounded-lg  bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                Group Chat
              </button>
            </div>
          </div>
          <div className=" w-full relative min-h-[500px] m-5   ">
            <div className = "absolute blur-3xl w-[350px] h-[300px] opacity-40 z-0 rounded top-1/3 inset-0 mx-auto -translate-x-10  abstract_motion"></div>
            <img src={graphic} alt="graphic" className="absolute  w-[368px] h-[368px] top-16 inset-0 mx-auto  z-20  " />
            <img src={blob1} alt="blob1" className=" absolute w-[396px] h-[457px]   -translate-x-4 -translate-y-2  top-16 inset-0 mx-auto  z-10 " />
            <img src={blob2} alt="blob2" className=" absolute w-[396px] h-[457px]     top-16 inset-0 mx-auto  z-0 " />
          </div>
        </div>
 

        <div className="mx-auto flex">
              <div className="pb-16">
            
              <section className="max-w-8xl mx-auto container  pt-16">
                    <div>
                      <div role="contentinfo" className="flex items-center flex-col px-4">
                        <h1  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-white  lg:w-5/12 md:w-9/12 pt-4">Features</h1>
                      </div>
                      <div  aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                        <div  aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                          <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                              <LiaUserFriendsSolid className="text-2xl" />                            </div>
                          </div>
                          <div className="w-10/12">
                            <h2  className="focus:outline-none text-lg font-bold leading-tight text-gray-400">01. Make Online Friends</h2>
                            <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas? Explicabo, maiores. Accusamus, vel cupiditate.</p>
                          </div>
                        </div>
                        <div  aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                          <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                              <IoChatboxOutline className="text-2xl"/>
                            </div>
                          </div>
                          <div className="w-10/12">
                            <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-400">Chat Online &  Share Interest</h2>
                            <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae earum atque totam veniam vero nam aspernatur fugiat. Adipisci, nulla.</p>
                          </div>
                        </div>
                        <div  aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                          <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <FaEarthAfrica className="text-2xl"/>
                            </div>
                          </div>
                          <div className="w-10/12">
                            <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-400">Geological Chatting</h2>
                            <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nulla illo laboriosam cumque iste impedit!</p>
                          </div>
                        </div>
                        <div  aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                          <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                            <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                            <FiActivity className="text-2xl"/>
                            </div>
                          </div>
                          <div className="w-10/12">
                            <h2  className="focus:outline-none text-lg font-semibold leading-tight text-gray-400">Karma Activity Control</h2>
                            <p  className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit rem perspiciatis quis aspernatur temporibus ex exercitationem odio quia, cupiditate voluptatum amet minus explicabo vero.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              
              </div>
        </div>

 

    </div>
    </div>
  )
};

export default HeroSection;
