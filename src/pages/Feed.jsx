import React from 'react'
import FeedHeader from '../components/FeedHeader'
import Posts from '../components/Posts'
import PostCreation from '../components/PostCreation'
import SideNavbar from '../components/SideNavbar'
import CommunityBox from '../components/CommunityBox'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const { isAuthenticated } = useSelector(
    (state) => state.auth
  );
  return isAuthenticated ? (
    <div className='bg-[#E1DFF8] h-auto'>
      <FeedHeader />
      <div className='flex'>
      <SideNavbar />
      <div className='overflow-y-scroll ml-28'>
      <PostCreation />
      <Posts />
      </div>
      <div>
      <CommunityBox />
      <CommunityBox />
      </div>
      </div>
    </div>
  ) : (
    navigate('/')
  )
}

export default Feed
