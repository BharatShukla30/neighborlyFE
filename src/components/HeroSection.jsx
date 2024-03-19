import graphic from "../assets/graphic.png";
import blob1 from "../assets/blob1.png";
import blob2 from "../assets/blob2.png";
import bike from "../assets/bike.jpg";
import girl from "../assets/girl.jpg"
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


        <div className="md:grid md:grid-col-12 md:grid-rows-2 flex flex-col gap-6   mx-auto my-10 gap-5   ">
   
        <div className="md:col-start-2 md:col-span-7">
          <a href="#" className="bg-transparent flex flex-col items-center backdrop-blur-3xl backdrop-saturate-200 p-0.5 shadow-2xl outline outline-2 outline-offset-1 outline-slate-500 transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] rounded-lg  md:flex-row   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-sm mx-auto md:max-w-xl">
              <img className="object-cover w-full rounded-t-lg h-96 md:items-stretch md:w-48 md:rounded-none md:rounded-s-lg" src={bike} alt="bike" />
              <div className="flex flex-col justify-between p-4 leading-normal ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">                Know nearby places from nearby people
</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here we connect people from all walks of life, sharing advice and recommendations on popular places nearby. Whether you're a seasoned local or a curious traveler, this community is your go-to resource for discovering the best spots to eat, drink, explore, and relax. From hidden gems to iconic landmarks, our members are always eager to share their personal favorites and insider tips. Join us and start exploring the world, one recommendation at a time!
</p>
              </div>
          </a>
        </div>
        <div className="md:col-start-6 md:row-start-2 md:col-end-11">
          <a href="#" className="bg-transparent flex flex-col items-center backdrop-blur-3xl backdrop-saturate-200 p-0.5 shadow-2xl outline outline-2 outline-offset-1 outline-slate-500 transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] rounded-lg  md:flex-row   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-sm mx-auto md:max-w-xl">
              <img className="object-cover w-full rounded-t-lg h-96 md:items-stretch md:w-48 md:justify-stretch md:rounded-none md:rounded-s-lg" src={girl} alt="girl" />
              <div className="flex flex-col justify-between p-4 leading-normal ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">              Here we connect people from all walks of life, sharing advice and recommendations on popular places nearby. Whether you're a seasoned local or a curious traveler, this community is your go-to resource for discovering the best spots to eat, drink, explore, and relax. From hidden gems to iconic landmarks, our members are always eager to share their personal favorites and insider tips. Join us and start exploring the world, one recommendation at a time!
</p>
              </div>
          </a>
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


        <div className="space-y-10 pb-10">
          
            <figure className="max-w-screen-md mx-auto text-center mb-5">
                <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white"> Lorem ipsum dolor sit amet consectetur.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Abcdefg</cite>
                    </div>
                </figcaption>
            </figure>
           
        </div>

    </div>
    </div>
  )
};

export default HeroSection;
