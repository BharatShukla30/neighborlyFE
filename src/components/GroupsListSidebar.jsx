/* eslint-disable react/prop-types */
import { FaPlus, FaRunning, FaSearchLocation } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { IoLocationSharp, IoLocate } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import girl from "../assets/girl.jpg";
import NoUserGroups from "../assets/NoUserGroups.png";
import NoNearbyGroups from "../assets/NoNearbyGroups.png";
import { addUser, fetchGroupDetails, nearestGroup } from "../redux/actions/groupActions";
import { cityMapping, getUserCoordinates } from "../utils/helpers";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import { updateUserLocation } from "../redux/actions/authActions";
import { LoadingAnimationTwo } from "./LoadingAnimation/LoadingAnimation";
import Modal from "react-modal";
import ImageBox from "./ImageBox";
import { useNavigate } from "react-router-dom";
import EmptyUIUtil from "./EmptyUIUtil";

const GroupsListSidebar = (props) => {
  const { activeChat, setActiveChat, setNewGroupPanel, setJoinGroupOverlay, setOpenNotJoined} =
    props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const userGroups = useSelector((state) => state.groups.grps);
  const nearbyGrps = useSelector((state) => state.groups.nearbyGrps);
  const { availableCities } = useSelector((state) => state.auth);

  const [nearbySlider, setNearbySlider] = useState(50);
  const [nearbyGroupPanel, setNearbyGroupPanel] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [openLocationModal, setOpenLocationModal] = useState(false);

  const handleNearbyPanel = () => {
    setNearbyGroupPanel(true);
    const coordinates = getUserCoordinates(user);
    dispatch(nearestGroup(coordinates));
  };

  const handleChatPanel = () => {
    setNearbyGroupPanel(false);
  };

  const handleGroupCreation = () => {
    setNewGroupPanel(true);
  };

  const successLocationHandler = (position) => {
    console.log(position);
    const locationDetails = {
      userLocation: [position.coords.latitude, position.coords.longitude],
    };
    dispatch(updateUserLocation(locationDetails)).then((result) => {
      console.log(result);
      if (result?.payload?.success) {
        dispatch(
          nearestGroup([position.coords.latitude, position.coords.longitude])
        );
      }
      setShowLoadingAnimation(false);
    });
  };

  const handleNearbyGroupSelect = (grp) => {
    dispatch(fetchGroupDetails(grp.groupId)).then((result) => {
      const groupDetails = result.payload;
      if (groupDetails.isOpen) {
        setActiveChat({
          group_id: grp.groupId,
          group_name: grp.groupName,
        });
        setJoinGroupOverlay(false);
        setOpenNotJoined(true);
      } else {
        setActiveChat({
          group_id: grp.groupId,
          group_name: grp.groupName,
        });
        setJoinGroupOverlay(true);
      }
    });
  };

  useEffect(() => {
    if (userGroups?.length === 0) {
      setNearbyGroupPanel(true);
    } else setNearbyGroupPanel(false);
  }, [userGroups]);

  const errorLocationHandler = (error) => {
    console.log(error);
    setShowLoadingAnimation(false);
  };

  const currentCityHandler = () => {
    setShowLoadingAnimation(true);
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

  const chooseCityHandler = (e) => {
    e.preventDefault();
    setOpenLocationModal(true);
    setShowLocationOptions(false);
  };

  const selectCityHandler = (cityName) => {
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

  const selectedButtonStyle =
    "py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-cblue rounded-lg border border-cblue hover:bg-cblue hover:text-white focus:z-10";
  const unselectedButtonStyle =
    "py-2.5 px-5 text-sm font-medium text-cblue focus:outline-none bg-white rounded-lg border border-cblue hover:bg-cblue hover:text-white focus:z-10";

  const handleJoinGroup = (grpId, grpName) => {
    try {
      setActiveChat({ group_id: grpId, group_name: grpName });
      dispatch(addUser({ groupId: grpId, userId: user._id }))
        .then((result) => {
          setNearbyGroupPanel(false);
          setActiveChat({ group_id: grpId, group_name: grpName });
        })
        .catch((err) => {
          alert("Error in joining group");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside
      className={`md:block flex w-2/5 flex-col bg-white relative`}
      style={{ boxShadow: "2px 0px 15px -10px rgba(0,0,0,0.75)" }}
    >
      {showNotificationPanel ? (
        <NotificationPanel
          setShowNotificationPanel={setShowNotificationPanel}
        />
      ) : (
        <>
          <div className="search-bar bg-appTheme flex items-center p-6 justify-between rounded-b-lg">
            <form className="w-5/6">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 text-sm text-black rounded-md border border-gray-300 bg-white"
                  placeholder="Search "
                  required
                />
                <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
            <div className="relative">
              <button
                className="rounded-full bg-[#ffffff75] border-2 border-appTheme hover:border-cblue  p-2"
                onClick={() => {
                  setShowLocationOptions(!showLocationOptions);
                }}
              >
                <IoLocationSharp className="text-2xl text-cblue pointer-events-auto" />
              </button>
              {showLocationOptions && (
                <div className="md:block w-56 text-left absolute  hidden bg-gray-100 z-10 shadow-md border border-gray-300 text-sm rounded-md">
                  <ul>
                    <li
                      className="px-2 py-2 flex items-center gap-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300"
                      onClick={currentCityHandler}
                    >
                      {showLoadingAnimation ? (
                        <LoadingAnimationTwo />
                      ) : (
                        <>
                          <IoLocate />
                          <p>My Current Location</p>
                        </>
                      )}
                    </li>
                    <li
                      className="px-2 py-2 flex items-center gap-2 border-b border-gray-200 cursor-pointer hover:bg-gray-300"
                      onClick={chooseCityHandler}
                    >
                      <FaSearchLocation />
                      <p>Choose Location</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="group-selection p-6 border-b-2">
            <div className="flex  gap-x-3 items-center justify-center">
              {/* <button className="px-0.5 w-1/2" onClick={handleNearbyPanel}> */}
              <button
                onClick={handleNearbyPanel}
                className={`${
                  nearbyGroupPanel ? selectedButtonStyle : unselectedButtonStyle
                } w-1/2 m-0`}
              >
                Nearby Groups
              </button>
              {/* <button className="px-0.5 w-1/2" onClick={handleChatPanel}> */}
              <button
                onClick={handleChatPanel}
                className={`${
                  nearbyGroupPanel ? unselectedButtonStyle : selectedButtonStyle
                } w-1/2`}
              >
                My Groups
              </button>
            </div>
          </div>
          <div className="group-list">
            {nearbyGroupPanel === false ? (
              userGroups.length === 0 ? (
                <EmptyUIUtil
                  imageSource={NoUserGroups}
                  contentHeading="Discover Groups"
                  content={"join local communities"}
                  buttonText="Go to nearby groups"
                  buttonHandler={() => setNearbyGroupPanel(true)}
                />
              ) : (
                userGroups?.map((grp) => {
                  return (
                    <div
                      className={`flex justify-between px-6 py-5 border-b-2 ${
                        activeChat?.group_id === grp.group_id
                          ? "bg-appTheme"
                          : ""
                      } hover:bg-gray-200 transition-all ease-in-out cursor-pointer`}
                      key={grp.group_id}
                      onClick={() =>
                        setActiveChat({
                          group_id: grp.group_id,
                          group_name: grp.group_name,
                        })
                      }
                    >
                      <div className="flex gap-3">
                        <img
                          src={girl}
                          alt="girl"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1>{grp.group_name}</h1>
                      </div>
                    </div>
                  );
                })
              )
            ) : (
              <>
                <div className=" ms-2 mb-4 pt-4 flex justify-center items-center gap-4">
                  <input
                    id="default-range"
                    type="range"
                    min="0"
                    max="50"
                    value={nearbySlider}
                    step="5"
                    className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    onChange={(e) => setNearbySlider(e.target.value)}
                    onMouseUp={() => {
                      // trigger api here  or make a function
                      console.log("Slider drag is over");
                    }}
                    style={{
                      background: `linear-gradient(90deg, #a5b4fc ${
                        nearbySlider * 2
                      }%, #d3d3d3 ${nearbySlider * 2}%)`,
                    }}
                    title={` ${nearbySlider}km`}
                  />
                  <FaRunning className="text-cblue font-bold text-xl" />
                </div>
                {nearbyGrps?.nearGroup?.length === 0 ? (
                  <EmptyUIUtil
                    imageSource={NoNearbyGroups}
                    contentHeading="No nearby groups"
                    content="Explore another places"
                    buttonText="Change location"
                    buttonHandler={() => setShowLocationOptions(true)}
                  />
                ) : (
                  nearbyGrps?.nearGroup?.map((grp, idx) => (
                    <div
                      className={`flex justify-between px-6 py-5 cursor-pointer  border-b-2 hover:bg-gray-200 transition-all ease-in-out ${
                        idx == 0 ? "border-t-2" : ""
                      } `}
                      key={grp.groupId}
                      onClick={() =>
                        setActiveChat({
                          group_id: grp.groupId,
                          group_name: grp.groupName,
                        })
                      }
                    >
                      <div className="flex gap-3">
                        <img
                          src={girl}
                          alt="girl"
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="flex flex-col">
                          <h1>{grp.groupName}</h1>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          handleJoinGroup(grp.groupId, grp.groupName);
                        }}
                        className="font-medium hover:text-cblue text-sm "
                      >
                        {" "}
                        Join{" "}
                      </button>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </>
      )}

      <div className="notification-bar w-full text-cblue text-2xl p-6 flex justify-evenly bg-appTheme rounded-t-lg absolute bottom-0">
        <button
          className="rounded-full bg-[#ffffff75] border-2 border-appTheme hover:border-cblue  p-2 mr-4"
          onClick={handleGroupCreation}
        >
          <FaPlus />
        </button>
        <div className="relative">
          <button
            onClick={() => setShowNotificationPanel(true)}
            className="rounded-full bg-[#ffffff75] border-2 border-appTheme hover:border-cblue p-2 ml-4"
          >
            <HiBellAlert />
          </button>
          <div className="absolute left-[40px] top-[22px] inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
            2
          </div>
        </div>
      </div>

      <Modal
        isOpen={openLocationModal}
        onRequestClose={() => setOpenLocationModal(false)}
        contentLabel="Choose a location"
        className="flex items-center justify-center outline-none "
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "40vw",
            height: "40vh",
            margin: "auto",
            borderRadius: "20px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2rem",
          },
        }}
      >
        {availableCities?.map((city) => {
          const { label, imageSource } = cityMapping[city];
          return (
            <ImageBox
              key={city}
              label={label}
              src={imageSource}
              value={city}
              selectHandler={selectCityHandler}
            />
          );
        })}
      </Modal>
    </aside>
  );
};

export default GroupsListSidebar;
