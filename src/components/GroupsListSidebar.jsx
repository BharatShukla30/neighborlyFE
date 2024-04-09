/* eslint-disable react/prop-types */
import { FaPlus, FaRunning } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { HiBellAlert } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import girl from "../assets/girl.jpg";
import { addUser } from "../redux/actions/groupActions";

const GroupsListSidebar = (props) => {
  const { groups, setActiveChat, setNewGroupPanel } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const nearbyGrps = useSelector((state) => state.groups.nearbyGrps);

  const [nearbyGroupPanel, setNearbyGroupPanel] = useState(false);
  const [nearbySlider, setNearbySlider] = useState(50);

  const handleNearbyPanel = () => {
    setNearbyGroupPanel(true);
  };

  const handleChatPanel = () => {
    setNearbyGroupPanel(false);
  };

  const handleGroupCreation = () => {
    setNewGroupPanel(true);
  };

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
    <aside className={`md:block flex w-2/5 flex-col border-r bg-white`}>
      <div className="flex flex-1 flex-col justify-between h-full">
        <nav className="space-y-6 h-full">
          <div className="space-y-3 h-full">
            <div className="mb-5 p-5 space-y-8 bg-appTheme">
              <div className="flex flex-row justify-between items-center">
                <div className="flex space-between gap-3 text-white text-bold">
                  <div className="img">
                    <img src={girl} className="rounded-full h-10 w-10" />
                  </div>
                  <IoLocationSharp className="text-2xl pointer-events-auto" />
                  <button onClick={handleGroupCreation}>
                    <FaPlus className="text-2xl" />
                  </button>
                  <HiBellAlert className="text-2xl pointer-events-auto" />
                </div>
              </div>

              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative rounded-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 ps-10 text-sm rounded-full text-black border border-gray-300 bg-white"
                    placeholder="Search "
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex  gap-x-3 items-center">
              <button className="px-0.5 w-1/2" onClick={handleNearbyPanel}>
                Nearby Groups
              </button>
              <p>|</p>
              <button className="px-0.5 w-1/2" onClick={handleChatPanel}>
                Chats{" "}
              </button>
            </div>

            <hr />

            <div className="h-aside overflow-y-scroll mt-0">
              {/* TODO: mockup ,  */}
              <div className=" grp-section ">
                {nearbyGroupPanel === false ? (
                  groups?.map((grp) => {
                    return (
                      <div
                        className="flex justify-between px-6 py-5 mb-2 border-b-2 hover:bg-gray-200 transition-all ease-in-out"
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
                ) : (
                  <>
                    <div className=" ms-2 mb-1 flex justify-center items-center gap-4">
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
                        key={uuidv4()}
                        onClick={() =>
                          setActiveChat({
                            group_id: grp.group_id,
                            group_name: grp.groupname,
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
                            <h1>{grp.groupname}</h1>
                            <p className="text-sm block font-light text-gray-500">
                              {grp.topic}
                            </p>
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
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default GroupsListSidebar;
