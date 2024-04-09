import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import explore from "../assets/explore.png";
import current from "../assets/current.png";
import {
  fetchCitiesList,
  updateUserLocation,
} from "../redux/actions/authActions";
import ReactCardFlip from "react-card-flip";
import { useEffect, useState } from "react";
import ImageBox from "../components/ImageBox";
import { cityMapping } from "../utils/helpers";

function Location() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, availableCities } = useSelector(
    (state) => state.auth
  );
  const [cardFlipped, setCardFlipped] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCitiesList());
    }
  }, [isAuthenticated]);

  const successLocationHandler = (position) => {
    console.log(position);
    const locationDetails = {
      userLocation: [position.coords.latitude, position.coords.longitude],
      // userLocation: [0, 0],
    };
    dispatch(updateUserLocation(locationDetails)).then((result) => {
      console.log(result);
      if (result?.payload?.success) {
        navigate("/dashboard");
      }
    });
  };

  const errorLocationHandler = (error) => {
    console.log(error);
  };

  const currentCityHandler = () => {
    try {
      if (navigator?.geolocation) {
        navigator.geolocation.getCurrentPosition(
          successLocationHandler,
          errorLocationHandler
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const chooseCityHandler = (cityName) => {
    console.log("Chosen city: " + cityName);
    try {
      const locationDetails = {
        cityLocation: cityName,
      };
      dispatch(updateUserLocation(locationDetails)).then((result) => {
        console.log(result);
        if (result?.payload?.success) {
          navigate("/dashboard");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return isAuthenticated ? (
    <div
      className={`"w-screen h-[85vh] ${
        isAuthenticated ? "mr-12 ml-12 mb-12" : ""
      }"`}
      style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="max-w-2xl mx-auto mt-24">
        <h1 className="font-bold text-zinc-700 text-4xl py-2 mb-4 ms-4 md:ms-0">
          Start exploring from
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="cursor-pointer  bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full h-[22rem] transition-all duration-500 ease-in-out transform hover:scale-105">
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
                  My Current Location
                </button>
              </h2>
            </div>
          </div>
          <ReactCardFlip
            isFlipped={cardFlipped}
            containerClassName="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="cursor-pointer w-full h-[22rem]">
              <img
                src={explore}
                alt="Mountain"
                className="w-full h-64 object-cover"
                onClick={() => setCardFlipped((cardFlipped) => !cardFlipped)}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-600 mb-2 text-center">
                  <button
                    onClick={() =>
                      setCardFlipped((cardFlipped) => !cardFlipped)
                    }
                    className="outline-none focus:outline-none"
                  >
                    City of Choice
                  </button>
                </h2>
              </div>
            </div>
            <div className="pt-3 pb-3 w-full h-[22rem] flex flex-wrap justify-center gap-4">
              {availableCities?.map((city) => {
                const { label, imageSource } = cityMapping[city];
                return (
                  <ImageBox
                    key={city}
                    label={label}
                    src={imageSource}
                    value={city}
                    selectHandler={chooseCityHandler}
                  />
                );
              })}
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  ) : (
    navigate("/")
  );
}

export default Location;
