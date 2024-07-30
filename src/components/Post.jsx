import React from "react";
import glassCheers from '../assets/cheers.svg'
import booyaah from '../assets/booyaaah.svg'
import comment from '../assets/commentsIcon.svg'
import couple from '../assets/beautyIcon.svg'
import share from '../assets/shareIcon.svg'


const Post = () => {
  return (
    <div className="flex flex-col items-start p-6 gap-8 w-[856px] h-[302px] bg-white rounded-2xl mb-4">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg"
          alt="Profile"
        />
        <div>
          <div className="font-semibold">James Williams</div>
          <div className="text-gray-500 text-sm">United States</div>
        </div>
      </div>
      <div className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        paria
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-6 font-semibold text-gray-600">
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={glassCheers} alt="Icon" />
            <span>02</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={booyaah} alt="Icon" />
            <span>02</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={comment} alt="Icon" />
            <span>02</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={couple} alt="Icon" />
            <span>02</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
          <img src={share} alt="Icon" />
          <span>02</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
