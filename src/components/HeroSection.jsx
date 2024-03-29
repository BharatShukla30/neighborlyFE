 
import Signin from "./Signin";
import Signup from "./Signup";
import { useState } from "react";
import ppl from "../assets/ppl.png"

const HeroSection = () => {

  const [signIn , setSignin] = useState(1);
// 1 -> signin
// 0 -> Signup

  return (
    <div className="block w-screen bg-vector bg-cover bg-top">
      <div className="max-w-screen-lg mx-auto">
        <div className=" mx-auto pt-20  flex flex-col gap-15 justify-around items-center md:flex-row  ">
          <div className="relative md:pl-3">
          {/* <div className = "absolute blur-3xl w-[200px] h-[200px] opacity-40 z-0 rounded top-1/3 inset-0 mx-auto -translate-x-10  abstract_motion"></div> */}
            <div className="w-full max-w-[550px] text-b font-bold ">
              <h1 className="text-balck  text-center md:text-left text-3xl text-wrap m-5 ">
                Explore,
                 <span className="text-cblue"> Connect</span>
                 , Share, Chat and  
                 <span className="text-cblue"> Spread</span>
              </h1> 
            </div>
            <p className="text-center md:text-left text-sm text-cblue m-5 font-semibold">Connecting People <br/> Connecting Communities</p>
            <img className="mx-auto" src = {ppl} />
          </div>
          <div className=" w-full   h-[650px]  mb-16  md:pl-3 ">
             
             
             <div className="h-[584px] ">



                {signIn==1 && <Signin setSignin={setSignin}/>}
                {!signIn==1 && <Signup setSignin={setSignin}/>}

             </div>
          </div>
        </div>
 
{/* --------------------feature Section ---------------------------- */}
        {/* <div className="mx-auto flex">
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
                            <div className="absolute text-white bottom-0 left-0 bg-cblue rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
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
                            <div className="absolute text-white bottom-0 left-0 bg-cblue rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
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
                            <div className="absolute text-white bottom-0 left-0 bg-cblue rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
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
                            <div className="absolute text-white bottom-0 left-0 bg-cblue rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
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
        </div> */}

 

    </div>
    </div>
  )
};

export default HeroSection;
