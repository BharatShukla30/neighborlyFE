import React from 'react'

import HomeGrayIcon from '../assets/HomeIcon.svg'
import CalenderIconGray from '../assets/CalenderIconGray.svg'
import CommunityIconGray from '../assets/CommunityIconGray.svg'
import ProfileGrayIcon from '../assets/ProfileGrayIcon.svg'

const SideNavbar = () => {
    return (
      <div className="fixed h-screen w-20 flex flex-col bg-white shadow-lg z-[9000] justify-center items-center gap-28 rounded-md mt-20">
        <div className="sidebar-icon group">
          <img src={HomeGrayIcon} alt="" />
        </div>
        <div className="sidebar-icon group">
        <img src={CalenderIconGray} alt="" />
        </div>
        <div className="sidebar-icon group">
        <img src={CommunityIconGray} alt="" />
        </div>
        <div className="sidebar-icon group">
        <img src={ProfileGrayIcon} alt="" />
        </div>
      </div>
    );
  };

export default SideNavbar;