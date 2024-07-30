import React, { useState, useEffect } from 'react'
import Post from '../components/Post'

const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL+'/api/posts', { mode: 'no-cors'}); // Replace with your actual endpoint
          const data = await response.json();
          setPosts(data);
          console.log(data)
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();
  }, []);

  return (
    <div className='flex flex-col items-baseline'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Posts
