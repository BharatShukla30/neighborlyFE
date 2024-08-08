import React from "react";
import glassCheers from '../assets/cheers.svg'
import booyaah from '../assets/booyaaah.svg'
import comment from '../assets/commentsIcon.svg'
import couple from '../assets/beautyIcon.svg'
import share from '../assets/shareIcon.svg'


const Post = (props) => {

  const {username,title,city,body,cheers,commentCount,boos,awardsCount,userProfilePicture,multimedia} = props;


  return (
    <div className="flex flex-col items-start  w-[856px] max-h-fit bg-white rounded-2xl p-4 mb-3">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={userProfilePicture}
          alt="Profile"
        />
        <div>
          <div className="font-semibold">{username}</div>
          <div className="text-gray-500 text-sm">{city}</div>
        </div>
      </div>
      <div className="text-gray-700 my-3">
        {body}
      </div>
      <div>
        {multimedia?<img src={multimedia} alt="img" className="h-60 my-7"/> : ""}
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-6 font-semibold text-gray-600">
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={glassCheers} alt="Icon" />
            <span>{cheers>0?cheers:0}</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={booyaah} alt="Icon" />
            <span>{boos}</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={comment} alt="Icon" />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={couple} alt="Icon" />
            <span>{awardsCount}</span>
          </div>
          <button className="flex items-center border rounded-3xl gap-2 border-[#B8B8B8] box-border w-fit h-12 justify-center px-2">
            <img src={share} alt="Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
