import React, { useState } from "react";
import { BiSolidChat } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPeople, BsSend } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import {IoIosArrowBack} from 'react-icons/io';

const Dashboard = () => {
  const groups = [
    "Group 1",
    "Group 2",
    "Group 3",
    "Group 4",
    "Group 5",
    "Group 6",
    "Group 7",
    "Group 8",
    "Group 9",
    "Group 10",
  ];

  const [activeGroup, setActiveGroup] = useState(
    groups.length > 0 ? groups[0] : null
  );

    const [openRecentChats, setOpenRecentChats] = useState(true);

  const handleEnterKey = (e) => {
    if(e.keyCode === 13 && !e.shiftKey){
      e.preventDefault();
      const message = e.target.value;
      console.log(message)

      e.target.value="";

    }
    
  } 

  return (
    <>
      <section className="flex max-h-screen h-screen bg-chatBg pt-16">

        {/* Recent Chats List */}
        <aside className={`md:block flex md:w-[32vw] flex-col border-r bg-white px-5 ${openRecentChats ? "block w-screen" : "hidden"}`}>
          <div className="mt-4 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6">
              <div className="space-y-3 ">
                <div className="mb-5">
                  <div className="shadow-sm cursor-pointer bg-blue-200 py-3 w-full border-[1px] border-slate-400 rounded-lg hover:bg-slate-700 hover:text-white duration-200 active:shadow-xl transition-all flex justify-center items-center">
                    <div className="me-3 text-xl">
                      <AiOutlinePlus />
                    </div>
                    <div>New Chat</div>
                  </div>
                </div>

                <label className="px-3 text-lg font-semibold uppercase text-gray-900">
                  Recent Chats
                </label>
                <hr></hr>
                <div className="h-[70vh] overflow-y-scroll">
                  {groups &&
                    groups.map((group, key) => (
                      <a
                        key={key}
                        className={`flex transform items-center rounded-lg px-3 py-5 focus:shadow-lg focus:text-white focus:border-[1px] focus:border-slate-400 active:bg-blue-300 text-gray-600 transition-colors duration-300 
                          ${
                            activeGroup === group
                              ? "bg-[#3a8df5] text-white"
                              : "hover:bg-blue-200 hover:text-gray-700"
                          }`}
                        href="#"
                        onClick={() => {
                          setActiveGroup(group);
                          setOpenRecentChats(false);
                        }}
                      >
                        <div className="text-2xl me-3">
                          <BiSolidChat />
                        </div>
                        {/* <BarChart className="h-5 w-5" aria-hidden="true" /> */}
                        <div className="mx-2 text-sm font-medium w-full">
                          {group}
                        </div>

                        <div className="text-xs justify-end">11:40</div>
                      </a>
                    ))}
                </div>
              </div>
            </nav>
          </div>
        </aside>


        {/* Left Chatting Section */}
        <div className={`md:block w-full h-[70vh] ${openRecentChats ? "hidden w-screen" : "block"}`}>
          <div>
            <div className="shadow-lg py-3 px-3 flex items-center justify-between sticky top-16 bg-white">
              <div className="text-xl font-medium flex items-center">
                <div className="me-4 text-2xl cursor-pointer hover:shadow-slate-300 hover:shadow-lg rounded-full px-2 py-2 transition-all duration-300 md:hidden"
                  onClick={() => setOpenRecentChats(true)}  
                >
                  <IoIosArrowBack />
                </div>
                <div className="me-3 md:me-4 bg-slate-200 px-3 py-3 rounded-full cursor-pointer">
                  <BsPeople />
                </div>
                <div className="cursor-pointer">{activeGroup}</div>
              </div>
              <div>
                <SlOptionsVertical className="text-xl hover:shadow-sm hover:opacity-70 hover:text-2xl transition-all duration-200 cursor-pointer" />
              </div>
            </div>
            
            {/* Chats Section */}
            <div className=" py-5 bg-chatBg w-full">
              <div className="h-[66vh] overflow-y-scroll px-4">
                <div className="flex flex-col w-full">
                  <div className="border-2  border-primary bg-primary text-white px-3 py-1 w-fit sm:max-w-xs lg:max-w-lg md:max-w-md my-2 rounded-md self-end">
                    <p className="pe-4">Suno bhai suno</p>
                    <p className="text-xs text-end mt-1">00:58</p>
                  </div>
                  <div className="border-2  border-primary bg-white px-3 pt-1 pb-3 max-w-[15rem] lg:max-w-lg md:max-w-sm sm:max-w-sm my-2 rounded-md">
                    <h5 className="font-medium text-primary mb-1">Rangbaaz</h5>
                    <p className="pe-4">
                      Haa Bhai Sunao. Bhai Matter hua to btao kiski kb aur kaha
                      picture banani hai
                    </p>
                    <p className="text-xs text-end mt-1">00:58</p>
                  </div>
                  <div className="border-2  border-primary bg-primary text-white px-3 max-w-[15rem] py-1 lg:max-w-lg md:max-w-sm my-2 rounded-md self-end">
                    <p className="pe-4">
                      Aree nhi bhai nhi matter nhi hua koi.. bs raat ho gyi h na
                      to ab overthinking peeche bhaag rhi
                    </p>
                    <p className="text-xs text-end mt-1">00:58</p>
                  </div>
                </div>
              </div>

              
              {/* Message Input */}
              <div className="flex items-center justify-center  sticky bottom-0 w-full bg-chatBg py-3">
                <textarea
                  className="resize-none px-4 w-[60vw] lg:w-[40vw] py-3 rounded-md shadow-md"
                  placeholder="Type a message"
                  rows={1}
                  onKeyDown={handleEnterKey}
                ></textarea>
                <button
                  type="button"
                  className="ms-5 rounded-full bg-primary px-3 py-3 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <BsSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
