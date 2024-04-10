/* eslint-disable react/prop-types */
import { FaPlus, FaRunning } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import girl from "../assets/girl.jpg";
import { addUser, nearestGroup } from "../redux/actions/groupActions";
import { getUserCoordinates } from "../utils/helpers";

const GroupsListSidebar = (props) => {
  const { groups, activeChat, setActiveChat, setNewGroupPanel } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const nearbyGrps = useSelector((state) => state.groups.nearbyGrps);

  const [nearbyGroupPanel, setNearbyGroupPanel] = useState(true);
  const [nearbySlider, setNearbySlider] = useState(50);

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

  const selectedButtonStyle =
    "py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-cblue rounded-lg border border-cblue hover:bg-cblue hover:text-white focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
  const unselectedButtonStyle =
    "py-2.5 px-5 text-sm font-medium text-cblue focus:outline-none bg-white rounded-lg border border-cblue hover:bg-cblue hover:text-white focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

  const handleJoinGroup = (grpId, grpName) => {
    try {
      setActiveChat({ group_id: grpId, group_name: grpName });
      dispatch(addUser({ group_id: grpId, userId: user._id }))
        .then((result) => {
          console.log(result);
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
        <button className="rounded-full bg-[#ffffff75] p-2">
          <IoLocationSharp className="text-2xl text-cblue pointer-events-auto" />
        </button>
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
          groups?.map((grp) => {
            return (
              <div
                className={`flex justify-between px-6 py-5 border-b-2 ${
                  activeChat?.group_id === grp.group_id ? "bg-appTheme" : ""
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
                  <img src={girl} alt="girl" className="h-8 w-8 rounded-full" />
                  <h1>{grp.group_name}</h1>
                </div>
              </div>
            );
          })
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
            {nearbyGrps?.nearGroup?.map((grp, idx) => (
              <div
                className={`flex justify-between px-6 py-5  border-b-2 hover:bg-gray-200 transition-all ease-in-out ${
                  idx == 0 ? "border-t-2" : ""
                } `}
                key={grp.groupId}
                onClick={() =>
                  setActiveChat({
                    group_id: grp.group_id,
                    group_name: grp.groupname,
                  })
                }
              >
                <div className="flex gap-3">
                  <img src={girl} alt="girl" className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col">
                    <h1>{grp.groupName}</h1>
                    {/* <p className="text-sm block font-light text-gray-500">
                      {grp.topic}
                    </p> */}
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleJoinGroup(grp.group_id, grp.groupname);
                  }}
                  className="font-medium hover:text-cblue text-sm "
                >
                  {" "}
                  Join{" "}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="notification-bar w-full text-cblue text-2xl p-6 flex justify-evenly bg-appTheme rounded-t-lg absolute bottom-0">
        <button
          className="rounded-full bg-[#ffffff75] p-2 mr-4"
          onClick={handleGroupCreation}
        >
          <FaPlus />
        </button>
        <button className="rounded-full bg-[#ffffff75] p-2 ml-4">
          <HiBellAlert />
        </button>
      </div>
    </aside>
  );
};

export default GroupsListSidebar;
