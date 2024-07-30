import React from 'react'

import rectangle from '../assets/Rectangle.svg'
import face1 from '../assets/face1.svg'
import face2 from '../assets/face2.svg'
import face3 from '../assets/face3.svg'
import face4 from '../assets/face4.svg'
import earth from '../assets/earth.svg'


const CommunityBox = () => {
  return (
  <div className='bg-white p-6 m-28 rounded-lg shadow-lg w-[400px] h-[250px]'>
  <div className='pb-6 flex justify-between items-end'>
    <h2 className='font-semibold text-2xl'>Top active communities</h2>
    <a href="/" className=' text-[#635BFF]'>See all</a>
  </div>
  <div className='p-2 flex justify-between'>
    <img src={rectangle} alt="rectangle" className=' ' />
    <div className='space-y-3 my-[.0175rem]'>
      <p className='bg-[#000000A3] flex justify-evenly text-white text-sm rounded-xl w-[67px]'><img src={earth} alt="earth" />Public</p>
      <p className='text-[#0a0a0a] text-xl font-medium'>Yoga Enthusiasts</p>
      <div className='flex'>
        <div className='flex'>
          <img src={face1} alt="" className='z-50' /><img src={face2} alt="" className='z-40 relative right-1 '/><img src={face3} alt="" className='z-30 relative right-2'/><img src={face4} alt="" className='z-20 relative right-3'/>
        </div>
        <p className='text-sm'>16K+ Members</p>
      </div>
      <button className='bg-[#635BFF] w-44 h-8 text-white rounded-2xl text-base'>Join</button>
    </div>
    </div>
    </div>
  )
}

export default CommunityBox
