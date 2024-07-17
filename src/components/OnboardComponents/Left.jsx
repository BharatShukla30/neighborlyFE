import React from 'react'
import img from '../../assets/BackImg.svg'

const Left = () => {
  return (
    <div className=' bg-cover bg-center m-[1rem] rounded-[1rem] 
                        xl:w-1/2 xl:h-auto xl:py-[5rem] xl:px-[3.75rem]
                        md : h-1/2 md:w-auto'
             style={{backgroundImage: `url(${img})`}}>

            <div className='flex flex-col gap-[.25rem] text-white 
                            xl:items-start  xl:justify-end 
                            md:justify-center md:items-center md:h-full'>
                <p className = 'text-h2 font-bold'>Neighborly</p>
                <p className='text-body1 font-medium'>Connect right where you are.</p>
            </div>
        </div>
  )
}

export default Left
