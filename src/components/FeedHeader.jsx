import React from 'react'
import logo from '../assets/Logo.svg'
import searchLogo from "../assets/searchIcon.svg"
import homeIcon from "../assets/home.svg"
import notificationIcon from "../assets/notificationIcon.svg"
import locationIcon from '../assets/locationIcon.svg'
import fluentChatIcon from "../assets/fluentChatIcon.svg"


const FeedHeader = () => {
  return (
<div className="fixed z-[10000] shadow-md w-full h-[80px] left-0 top-0 bg-white border-b border-gray-300 flex flex-row items-center py-2 px-6 gap-[500px]">
  <img src={logo} alt="logo" className="w-[4rem] h-[4rem]" />

<div className="flex flex-row items-center px-4 pr-[206px] py-1 gap-1 w-[308px] h-[40px] bg-[#F5F5FF] shadow-md rounded-lg">
  <img src={searchLogo} alt="Search" className="w-4 h-4" />
  <input className="bg-[#F5F5FF] outline-none flex-grow" type="text" placeholder="Search" />
</div>

  <div className="flex flex-row items-center gap-8">
    <div className="flex flex-row items-start p-1 gap-1 w-[76px] h-[40px] bg-[#C5C2FF] rounded-[23px]">
      <button>
        <img src={homeIcon} alt="home" />
      </button>
      <button>
        <img src={locationIcon} alt="location" />
      </button>
    </div>
    
    <button>
      <img src={notificationIcon} alt="notification" />
    </button>
    
    <button>
      <img src={fluentChatIcon} alt="chat" />
    </button>
  </div>
</div>

  )
}


export default FeedHeader
