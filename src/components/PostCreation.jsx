import React from 'react';
import imageIcon from '../assets/ImageIcon.svg'
import community from '../assets/communityIcon.svg'
import location from '../assets/locationIconOrange.svg'
import event from '../assets/CalenderIcon.svg'
import poll from '../assets/pollIcon.svg'
import emojiIcon from '../assets/emojiIcon.svg'



const PostCreation = () => {
  return (
    <div className="flex flex-col items-start p-6 gap-6 w-[856px] h-[184px] bg-white rounded-2xl mt-24 mb-3">
      
      <div className="flex items-center w-full gap-4">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721347200&semt=ais_user"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-row items-center w-[625px] h-[64px] bg-[#F5F5F5] rounded-[12px] justify-center px-1">
        <input
        type="text"
        placeholder="What's in your mind?"
        className="ml-4 w-full border-none focus:outline-none bg-[#F5F5F5]"
        />
        <img src={emojiIcon} alt="" />
        </div>
        <button className='bg-[#635BFF] font-semibold text-white px-4 py-3 w-24 rounded-3xl'>Post</button>
      </div>

      <div className="flex gap-4 w-full">
        <button className="font-semibold flex items-center justify-center w-full py-2 text-[#D74A43] rounded-xl bg-[#FAE7E6] px-5">
        <img src={imageIcon} alt="" />
          Photo/GIF/Video
        </button>
        <button className="font-semibold flex items-center justify-center w-full py-2 text-[#312C8E] rounded-xl bg-[#E1DFF8] px-2">
        <img src={community} alt="" />
          
          Community
        </button>
        <button className="font-semibold flex items-center justify-center w-full py-2 text-[#D87B2F] rounded-xl bg-[#FAEFE5] px-2">
        <img src={location} alt="" />
          
          Location
        </button>
        <button className="font-semibold flex items-center justify-center w-full py-2 text-[#4C92CB] rounded-xl bg-[#E7F1F8] px-2">
        <img src={event} alt="" />
         
          Event
        </button>
        <button className="font-semibold flex items-center justify-center w-full py-2 text-[#7821A1] rounded-xl bg-[#F3E6FA] px-2">
        <img src={poll} alt="" />
          
          Poll
        </button>
      </div>
    </div>
  );
};

export default PostCreation;