import { v4 as uuidv4 } from "uuid"
import { useEffect, useMemo, useRef, useState } from "react"
import { BsPeople, BsSend } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import {
  nearestGroup,
  createGroup,
  getUserGroups,
  fetchGroupMessages,
  makeGroupPermanent,
  addUser,
  fetchGroupDetails,
} from "../redux/actions/groupActions"
import { getChatMessages } from "../redux/actions/chatActions"
import { IoLocationSharp } from "react-icons/io5"
import { GoThumbsup, GoThumbsdown } from "react-icons/go"
import { FaCamera, FaPlus } from "react-icons/fa"
import { HiBellAlert } from "react-icons/hi2"
import { FaCircleUser } from "react-icons/fa6"
import { IoIosAttach } from "react-icons/io"
import Dropzone from "../components/Dropzone"
import girl from "../assets/girl.jpg"
import { motion, AnimatePresence } from "framer-motion"
import GroupDetails from "../components/GroupDetails"
import io from "socket.io-client"

const socket = io("http://localhost:3001") // Adjust the URL accordingly

const Dashboard = () => {
  // ----------------------------Selector-----------------------------
  let coords = useSelector((state) => state.auth.user?.current_coordinates)
  let { nearGroup } = useSelector((state) => state.groups.nearbyGrps)
  let user = useSelector((state) => state.auth.user)

  //  ----------------------------State-----------------------------
  const [newGrpPanel, setNewGrpPanel] = useState(false)
  const dispatch = useDispatch()
  const [nearbyGrpPanel, setNearbyGrpPanel] = useState(false)
  const [newGrpCreation, setNewGrpCreation] = useState({
    name: "",
    description: "",
    type: "open",
    karma: 0,
    icon: "",
    latitude: coords.coordinates[0],
    longitude: coords.coordinates[1],
  })

  let groups = useSelector((state) => state.groups.grps)
  let [activeChat, setActiveChat] = useState({
    groupId: groups[0]?.group_id,
    group_name: groups[0]?.group_name,
  })
  let [messages, setMessages] = useState([])
  let [newMessage, setNewMessage] = useState("")
  const [groupDetails, setGroupDetails] = useState(null)
  let [grpPanel, setGrpPanel] = useState(false)
  const colors = [
    "red-800",
    "yellow-600",
    "green-700",
    "blue-800",
    "indigo-800",
    "purple-700",
    "pink-500",
    "zinc-700",
    "red-600",
    "blue-600",
    "indigo-400",
    "pink-900",
  ]
  let chatRef = useRef(null)

  // ----------------------------socket-----------------------------
  
  const joinRoom = () => {
    if (user.username && activeChat?.groupId) {
      socket.emit("join-room", {
        username: user.username,
        group_id: activeChat.groupId,
      })
    }
  }

  const leaveRoom = () => {
    console.log("leave-room")
    if (user.username && activeChat?.groupId) {
      socket.emit("leave-room", {
        username: user.username,
        group_id: activeChat.groupId,
      })
    }
  }

  // ----------------------------UseEffect-----------------------------

  useEffect(() => {
    dispatch(getUserGroups())
    setActiveChat({
      group_id: groups[0]?.group_id,
      group_name: groups[0]?.group_name,
    })
  }, [dispatch])

  useEffect(() => {

    if (activeChat?.group_id) {
      dispatch(fetchGroupDetails(activeChat.group_id)).then((result) => {
        setGroupDetails(result.payload)
      })
      dispatch(fetchGroupMessages(activeChat.group_id)).then((result) => {
        setMessages(
          [...result.payload].sort(
            (a, b) => new Date(a.sent_at) - new Date(b.sent_at)
          )
        )
      })
      joinRoom()
    }

  }, [activeChat])

  useEffect(() => {
    if (coords) {
      dispatch(nearestGroup(coords))
      setNewGrpCreation({
        ...newGrpCreation,
        latitude: coords.coordinates[0],
        longitude: coords.coordinates[1],
      })
    }
  }, [coords, dispatch])

  useEffect(() => {
    if (activeChat && activeChat.group_id) {
      dispatch(getChatMessages({ groupId: activeChat.group_id, page: 1 })).then(
        (result) => {
          setMessages(
            [...result.payload].sort(
              (a, b) => new Date(a.sent_at) - new Date(b.sent_at)
            )
          )
        }
      )
    }
  }, [activeChat, dispatch])

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages])

  useMemo(() => {
    socket.on("receive_message", (data) => {
      console.log(data)
      setMessages((list) => [...list, data])
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);


  const handleEnterKey = (e) => {
    
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      const message = e.target.value
      if (message !== "") {
        const messageData = {
          group_id: activeChat.group_id,
          senderName: user.username,
          msg: message,
          time: new Date(Date.now()).toISOString(),
        }
        socket.emit("send-message", messageData)
        setMessages((list) => [...list, messageData])
        setNewMessage("")
      }
      e.target.value = ""
    }
    
  }

  const handleGrpCreation = () => {
    setNewGrpPanel(!newGrpPanel)
  }

  const cancelGrp = () => {
    setNewGrpCreation({
      name: "",
      description: "",
      type: "open",
      karma: 0,
      icon: "",
    })
    setNewGrpPanel(false)
  }

  const handleGrpCreationChange = (e) => {
    setNewGrpCreation({ ...newGrpCreation, [e.target.name]: e.target.value })
  }

  // TODO: remove this
  const hashing = (name) => {
    let hash = 0
    for (let i = 0; i < name?.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return hash
  }


  const createGrp = (e) => {
    e.preventDefault()

    try {
      // TODO: waiting for backend to be ready

      dispatch(createGroup(newGrpCreation))
        .then((result) => {
          console.log(result)
          setNewGrpCreation({
            name: "",
            description: "",
            type: "open",
            karma: 0,
            icon: "",
            latitude: coords.coordinates[0],
            longitude: coords.coordinates[1],
          })
        })
        .catch((err) => {
          console.log(err)
          alert("Error in creating group")
        })
    } catch (err) {
      console.log(err)
    }
    setNewGrpPanel(false)
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setNewGrpCreation({ ...newGrpCreation, icon: URL.createObjectURL(img) })
    }
  }

  const handleNearbyPanel = () => {
    setNearbyGrpPanel(true)
  }

  const handleChatPanel = () => {
    setNearbyGrpPanel(false)
  }

  const handleJoinGroup = (grpId, grpName) => {
    try {
      setActiveChat({ group_id: grpId, group_name: grpName })
      dispatch(addUser({ group_id: grpId, userId: user._id }))
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          alert("Error in joining group")
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    console.log(newMessage)
      if (newMessage ) {
        const messageData = {
          group_id: activeChat.group_id,
          senderName: user.username,
          msg: newMessage,
          time: new Date(Date.now()).toISOString(),
        }
        socket.emit("send-message", messageData)
        setMessages((list) => [...list, messageData])
        setNewMessage("")
      }
      e.target.value = ""
  }

  return (
    <>
      <section className="flex h-rest  bg-chatBg ">
        {/* {openNewChatBox && <NewChat changeState={setOpenNewChatBox} />} */}

        {newGrpPanel && (
          <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
            <div className="bg-white  rounded-md p-5">
              <h1 className="text-2xl  text-cblue m-2 font-bold">
                Create New Group
              </h1>
              <form className="my-5 max-w-md" onSubmit={createGrp}>
                <div className="grid grid-col-6 gap-x-6 mx-auto ">
                  <div className="col-span-1 relative">
                    <label
                      htmlFor="grpIcon"
                      className="absolute text-black left-3 top-[10px] "
                    >
                      <FaCamera className="pointer-events-auto" />
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="grpIcon"
                      name="grpIcon"
                      onChange={handleImageChange}
                      className="opacity-5 bg-gray-400 rounded-full border h-10 w-10"
                    />
                    {newGrpCreation.icon ? (
                      <img
                        src={newGrpCreation.icon}
                        alt="preview"
                        className="absolute top-0 left-0 h-10 w-10 rounded-full border"
                      />
                    ) : (
                      <div className="absolute pointer-events-none top-0 opacity-30 bg-gray-400 rounded-full border h-10 w-10"></div>
                    )}
                  </div>
                  <div className="col-start-2 col-end-4 ">
                    <label
                      htmlFor="name"
                      className="text-sm font-thin text-gray-600"
                    >
                      Group Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="ps-2 w-full py-1 border border-cblue rounded-md mb-2"
                      onChange={handleGrpCreationChange}
                      value={newGrpCreation.name}
                      required
                    />

                    <label
                      htmlFor="description"
                      className="text-sm font-thin text-gray-600"
                    >
                      Group Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      cols="38"
                      rows="2"
                      className="ps-2 resize-none border border-cblue rounded mb-2"
                      onChange={handleGrpCreationChange}
                      value={newGrpCreation.description}
                    ></textarea>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <label
                          htmlFor="type"
                          className="text-[0.7rem] font-thin text-gray-600"
                        >
                          Group Type
                        </label>
                        <label
                          htmlFor="type"
                          className="inline-flex items-center p-1 rounded-md cursor-pointer dark:text-gray-100"
                        >
                          <input
                            id="type"
                            type="checkbox"
                            className="hidden peer"
                            onChange={handleGrpCreationChange}
                            value={newGrpCreation.type}
                          />
                          <span className="px-2 py-[0.1rem] rounded-l-md dark:bg-cblue peer-checked:dark:bg-gray-600">
                            Open
                          </span>
                          <span className="px-2 py-[0.1rem] rounded-r-md dark:bg-gray-600 peer-checked:dark:bg-cblue">
                            Close
                          </span>
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="karma"
                          className="text-[0.7rem] font-thin text-gray-600"
                        >
                          Karma Req.
                        </label>
                        <input
                          type="number"
                          name="karma"
                          id="karma"
                          className="w-16 border border-cblue rounded-md px-2 text-gray-700"
                          max={100}
                          onChange={handleGrpCreationChange}
                          value={newGrpCreation.karma}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-3 col-end-6  text-sm mt-2">
                    <button
                      type="submit"
                      className="bg-cblue m-1 px-2 rounded-md py-[0.2rem] text-white"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      onClick={cancelGrp}
                      className="bg-gray-300 m-1 px-2 rounded-md py-[0.2rem] text-black"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        <aside
          className={`md:block flex md:w-[38vw] flex-col border-r bg-white px-5`}
        >
          <div className="flex flex-1 flex-col justify-between h-full">
            <nav className="-mx-4 space-y-6 h-full">
              <div className="space-y-3 h-full">
                <div className="mb-5 p-5 space-y-8 bg-indigo-300">
                  <div className="flex flex-row justify-between items-center">
                    <div className="img">
                      <img src={girl} className="rounded-full h-10 w-10" />
                    </div>
                    <div className="flex space-between gap-3 text-white text-bold">
                      <IoLocationSharp className="text-2xl pointer-events-auto" />
                      <button onClick={handleGrpCreation}>
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
                    {nearbyGrpPanel === false
                      ? groups?.map((grp) => {
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
                                <h1 className="font-light">{grp.group_name}</h1>
                              </div>
                            </div>
                          )
                        })
                      : nearGroup?.map((grp) => (
                          <div
                            className="flex justify-between px-6 py-5  border-b-2 hover:bg-gray-200 transition-all ease-in-out "
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
                                <h1 className="font-light">{grp.groupname}</h1>
                                <p className="text-sm block font-light text-gray-500">
                                  {grp.topic}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                handleJoinGroup(grp.group_id, grp.groupname)
                              }}
                              className="font-medium hover:text-cblue text-sm"
                            >
                              {" "}
                              Join{" "}
                            </button>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Left Chatting Section */}
        <div className={`md:block w-full  block h-full`}>
          <div className="h-full">
            {activeChat.group_name && (
              <div
                className="shadow-inner py-3 px-3 flex items-center justify-between  bg-white z-40"
                onClick={() => {
                  setGrpPanel(!grpPanel)
                }}
              >
                <div className="text-xl font-medium flex items-center">
                  <div className="me-3 md:me-4 bg-slate-200 px-3 py-3 rounded-full cursor-pointer">
                    <BsPeople />
                  </div>
                  <p className="font-medium capitalize">
                    {activeChat?.group_name}
                  </p>
                </div>
              </div>
            )}

            {/* Chats Section */}
            <div
              className={` ${
                activeChat.group_name
                  ? "bg-chatBg"
                  : "bg-logo bg-no-repeat bg-center bg-opacity-5"
              } h-chatWindow  items-stretch justify-stretch  relative`}
            >
              <div className="  overflow-y-scroll px-4 relative h-chatWindow">
                <AnimatePresence>
                  {grpPanel && (
                    <motion.div
                      className="absolute w-4/12 right-0 bg-white rounded-md shadow-lg z-20"
                      initial={{ x: "100vw" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100vw" }}
                      transition={{ type: "easeInOut", duration: 0.2 }}
                    >
                      {groupDetails ? (
                        <GroupDetails {...groupDetails} />
                      ) : (
                        <div className="flex justify-center items-center h-screen">
                          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col w-full">
                  {messages?.map((msg, index) => {
                    const isLastMessage = messages.length - 1 === index
                    return (
                      <div
                        className={`flex ${
                          msg.senderName == user?.username
                            ? "flex-row"
                            : "flex-row-reverse"
                        } gap-2.5 my-4  w-full  `}
                        key={index}
                        ref={isLastMessage ? chatRef : null}
                      >
                        <FaCircleUser
                          className={`w-8 h-8 rounded-full  text-${
                            colors[hashing(msg.senderName) % colors.length]
                          }`}
                        />
                        <div className="flex flex-col justify-between items-center  leading-1.5 ">
                          <div
                            className={`px-[0.2rem] bg-white  border-gray-200 backdrop-blur-md ${
                              msg.senderName == user?.username
                                ? "rounded-tr-xl rounded-br-xl rounded-bl-xl"
                                : "rounded-tl-xl rounded-br-xl rounded-bl-xl"
                            }   backdrop-brightness-125 shadow-md`}
                          >
                            <h1
                              className={`font-bold text-sm ps-2 pe-3 capitalize text-${
                                colors[hashing(msg.senderName) % colors.length]
                              }`}
                            >
                              {msg.senderName == user?.username
                                ? "You"
                                : msg.senderName}
                            </h1>
                            <p className="block text-sm font-normal py-1 ps-2 pe-3 text-left  ">
                              {msg.msg}
                            </p>
                            <p className="text-[11px] font-thin text-right ps-1">
                              <span className=" pr-1 text-gray-500 dark:text-gray-400 text-right">
                                {new Date(msg.sent_at).toLocaleTimeString(
                                  "en-US",
                                  {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                                {/* {new Date(msg.time).getHours()}:{new Date(msg.time).getMinutes()} */}
                              </span>
                            </p>
                          </div>
                          <div className="flex justify-end text-gray-700 mt-2 text-sm">
                            <motion.button
                              whileTap={{
                                scale: 0.9,
                                rotate: -45,
                                color: "aqua",
                              }}
                              className="mr-2 "
                            >
                              <GoThumbsup />
                            </motion.button>
                            <motion.button
                              whileTap={{
                                scale: 0.9,
                                rotate: 45,
                                color: "red",
                              }}
                              className="mr-2 "
                            >
                              <GoThumbsdown />
                            </motion.button>
                            <p className="text-gray-600 text-sm">{msg.votes}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Message Input */}
              {activeChat.group_name && (
                <div className=" flex items-center justify-center  sticky bottom-3 w-full bg-chatBg  ">
                  <button className="h-10 w-10 me-5 ms-2 rounded-full bg-slate-300 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <IoIosAttach className="mx-2 my-2 text-gray-600 font-bold text-2xl rotate-45" />
                    <Dropzone />
                  </button>
                  <textarea
                    className=" resize-none pl-3 w-[60vw] lg:w-[40vw] py-3 rounded-md shadow-md"
                    placeholder="Type a message"
                    rows={1}
                    onKeyDown={handleEnterKey}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleMessageSubmit}
                    className="ms-5 rounded-full bg-primary px-3 py-3 text-xl font-semibold text-white shadow-sm hover:bg-black-bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <BsSend />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Dashboard
