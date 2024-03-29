import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import explore from "../assets/explore.png"
import current from "../assets/current.png"

function Location() {
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state) => state.auth) 
  const currentCityHandler = () => {
    try {
      //update the user's location here

      navigate("/dashboard")
    } catch (e) {
      console.log(e)
    }
  }

  const chooseCityHandler = () => {
    try {
      //update the user's location here

      navigate("/dashboard")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    
    isAuthenticated ? (
    <div className="w-screen ">
      <div className="max-w-2xl mx-auto md:mt-20 mt-16">
        <h1 className="font-bold text-zinc-700 text-4xl py-2 mb-4 ms-4 md:ms-0">
          Start exploring from here
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className=" bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full transition-all duration-500 ease-in-out transform hover:scale-105">
            <img
              src={current}
              alt="Mountain"
              className="w-full h-64 object-cover transition-all duration-500 ease-in-out hover:bg-blend-darken"
              onClick={currentCityHandler}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-600 mb-2 text-center">
                <button
                  onClick={currentCityHandler}
                  className="outline-none focus:outline-none"
                >
                  Current City
                </button>
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full  transition-all duration-500 ease-in-out transform  hover:scale-105">
            <img
              src={explore}
              alt="Mountain"
              className="w-full h-64 object-cover"
              onClick={chooseCityHandler}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-600 mb-2 text-center">
                <button
                  onClick={chooseCityHandler}
                  className="outline-none focus:outline-none"
                >
                  Choose City
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):(
    navigate("/")
  )
  
  
  )

}


export default Location
