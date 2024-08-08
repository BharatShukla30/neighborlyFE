import {React,useEffect, useState} from "react";
import FeedHeader from "../components/FeedHeader";
import Posts from "../components/Posts";
import PostCreation from "../components/PostCreation";
import SideNavbar from "../components/SideNavbar";
import CommunityBox from "../components/CommunityBox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  
  const [ postList , setPostList ] = useState([]);
  // let postList;
  
  const navigate = useNavigate();


  useEffect(() => {
    
    fetch(`${import.meta.VITE_REACT_APP_API_URl}/wall/fetch-posts?home=false`, {
      method: 'GET',
      credentials: 'include'

    })
    .then((res) =>{
      return res.json();
    }).then(data => {
      console.log(data,">>>>>>>>>>>>data")
      setPostList(data);
    });
  }, []);

  const { isAuthenticated} = useSelector(
    (state) => state.auth
  );

  return isAuthenticated ? (
    <div className="bg-[#E1DFF8] h-auto">
      <FeedHeader />
      <div className="flex">
        <SideNavbar />
        <div className="overflow-y-scroll ml-28">
          <PostCreation />
          <Posts postList ={postList}/>
        </div>
        <div>
          <CommunityBox />
          <CommunityBox />
        </div>
      </div>
    </div>
  ) : (
    navigate('/')
  );
};

export default Feed;
