import React from 'react'
import { useNavigate } from 'react-router-dom'


function Location() {
  
  const navigate = useNavigate()

  const currentCityHandler = () => {

    try{

      //update the user's location here

      navigate.push('/dashboard')
    }catch(e){
      console.log(e)
    }
  }

  const chooseCityHandler = () => {
    
    try{

      //update the user's location here

      navigate.push('/dashboard')
    }catch(e){
      console.log(e)
    }
    
  }

  return (
    <div className='mx-auto w-screen' >
      <button onClick={currentCityHandler}>Current</button>
      <button onClick={chooseCityHandler}>Choose City</button>
    </div>
    
  )
}

export default Location