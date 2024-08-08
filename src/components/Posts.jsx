import React from 'react'
import Post from '../components/Post'

const Posts = ({postList}) => {
  console.log(postList,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  return (
    <div className='flex flex-col items-baseline'>
      
      {
        postList?.map((post)=><Post key={post.contentid} username={post.username} title={post.title} city={post.city} body={post.body} cheers={post.cheers} commentCount={post.commentCount} boos={post.boos} awardsCount={post.awards.length} userProfilePicture={post.userProfilePicture} multimedia={post.multimedia}/>)
      }

    </div>
  )
}

export default Posts
