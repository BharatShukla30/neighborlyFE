import { useEffect, useMemo, useRef, useState } from "react";
import { BsPeople, BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  nearestGroup,
  getUserGroups,
  fetchGroupMessages,
  fetchGroupDetails,
} from "../redux/actions/groupActions";
import { getChatMessages } from "../redux/actions/chatActions";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosAttach } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Dropzone from "../components/Dropzone";
import { motion, AnimatePresence } from "framer-motion";
import GroupDetails from "../components/GroupDetails";
import { useNavigate } from "react-router-dom";
import userHasCoordinates, { getUserCoordinates } from "../utils/helpers";
import mainDashboard from "../assets/mainDashboard.png";
import CreateGroupPopup from "../components/CreateGroupPopup";
import GroupsListSidebar from "../components/GroupsListSidebar";
import { io } from "socket.io-client";


const Dashboard = () => {
  // const socketServer = import.meta.env.VITE_REACT_APP_SOCKET_URL;
  const socketServer = "http://localhost:3001"
  const socket = io(socketServer);
  const navigate = useNavigate();

  // ----------------------------Selector-----------------------------

  const user = useSelector((state) => state.auth.user);

  //  ----------------------------State-----------------------------
  const [newGroupPanel, setNewGroupPanel] = useState(false);
  const dispatch = useDispatch();

  const userCoordinates = getUserCoordinates(user);
  const [newGroupCreation, setNewGroupCreation] = useState({
    name: "",
    description: "",
    type: "open",
    karma: 0,
    icon: "",
    latitude: userCoordinates[0],
    longitude: userCoordinates[1],
  });

  const [search, setSearch] = useState("");

  let groups = useSelector((state) => state.groups.grps);
  let [activeChat, setActiveChat] = useState({
    group_id: groups[0]?.group_id,
    group_name: groups[0]?.group_name,
  });
  let [messages, setMessages] = useState([]);
  let [newMessage, setNewMessage] = useState("");
  const [groupDetails, setGroupDetails] = useState(null);
  let [grpPanel, setGrpPanel] = useState(false);
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
  ];
  let chatRef = useRef(null);

  // ----------------------------socket-----------------------------

  const joinRoom = () => {
    console.log("Joining..");
    if (user.username && activeChat?.group_id) {
      socket.emit("join-room", {
        username: user.username,
        group_id: activeChat.group_id,
      });
    }
  };

  const leaveRoom = () => {
    console.log("leave-room");
    if (user.username && activeChat?.groupId) {
      socket.emit("leave-room", {
        username: user.username,
        group_id: activeChat.group_id,
      });
    }
  };

  // ----------------------------UseEffect-----------------------------

  useEffect(() => {
    dispatch(getUserGroups());
    setActiveChat({
      group_id: groups[0]?.group_id,
      group_name: groups[0]?.group_name,
    });
  }, []);

  useEffect(() => {
    //Check if user coordinates are not set
    if (userHasCoordinates(user)) {
      const coordinates = getUserCoordinates(user);
      dispatch(nearestGroup(coordinates));
      setNewGroupCreation({
        ...newGroupCreation,
        latitude: coordinates[0],
        longitude: coordinates[1],
      });
    } else {
      navigate("/location");
    }
  }, [user]);

  useEffect(() => {
    if (activeChat?.group_id) {
      dispatch(fetchGroupDetails(activeChat.group_id)).then((result) => {
        setGroupDetails(result.payload);
      });
      dispatch(fetchGroupMessages(activeChat.group_id)).then((result) => {
        console.log(result.payload);
        setMessages(
          [...result.payload].sort(
            (a, b) => new Date(a.sent_at) - new Date(b.sent_at)
          )
        );
      });
      joinRoom();
    }
  }, [activeChat]);

  useEffect(() => {
    if (activeChat && activeChat.group_id) {
      dispatch(getChatMessages({ groupId: activeChat.group_id, page: 1 })).then(
        (result) => {
          setMessages(
            [...result.payload].sort(
              (a, b) => new Date(a.sent_at) - new Date(b.sent_at)
            )
          );
        }
      );
    }
  }, [activeChat, dispatch]);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  useMemo(() => {
    socket.on("receive_message", (data) => {
      console.log("Received message : " + data);
      setMessages((list) => [...list, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      const message = e.target.value;
      if (message !== "") {
        const messageData = {
          group_id: activeChat.group_id,
          senderName: user.username,
          msg: message,
          time: new Date(Date.now()).toISOString(),
          votes: 0,
        };
        socket.emit("send-message", messageData);
        console.log(messageData);
        setMessages((list) => [...list, messageData]);
        setNewMessage("");
      }
      e.target.value = "";
    }
  };

  // TODO: remove this
  const hashing = (name) => {
    let hash = 0;
    for (let i = 0; i < name?.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (newMessage) {
      const messageData = {
        group_id: activeChat.group_id,
        senderName: user.username,
        msg: newMessage,
        time: new Date(Date.now()).toISOString(),
      };
      // socket.emit("send-message", messageData);
      setMessages((list) => [...list, messageData]);
      setNewMessage("");
    }
    e.target.value = "";
  };

  const HandleSearch = (value) => {
    setSearch(value);
    // TODO: add some filter highlight logic
  };

  //   const handleThumbsUp = (msg_id) => {
  //   socket.emit('up-vote', { msg_id });
  // };

  // const handleThumbsDown = (msg_id) => {
  //   socket.emit('down-vote', { msg_id });
  // };

  return (
    <>
      <section className="flex h-full bg-white rounded-md mx-12 shadow-xl">
        {/* {openNewChatBox && <NewChat changeState={setOpenNewChatBox} />} */}

        {newGroupPanel && (
          <CreateGroupPopup
            userCoordinates={userCoordinates}
            newGroupCreation={newGroupCreation}
            setNewGroupCreation={setNewGroupCreation}
            setNewGroupPanel={setNewGroupPanel}
          />
        )}

        <GroupsListSidebar
          groups={groups}
          setActiveChat={setActiveChat}
          setNewGroupPanel={setNewGroupPanel}
        />

        {/* Right Chatting Section */}
        <div className={`w-full h-[89vh]`}>
          {activeChat.group_name ? (
            <div className="h-full relative">
              {/* Top Bar Section */}
              <div className="shadow-inner py-3 px-3 flex items-center justify-between  bg-white z-40">
                <div className="text-xl font-medium flex items-center">
                  <div className="me-3 md:me-4 bg-slate-200 px-3 py-3 rounded-full cursor-pointer">
                    <BsPeople />
                  </div>
                  <p className="font-medium capitalize">
                    {activeChat?.group_name}
                  </p>
                </div>
                <div className="flex gap-6 items-center justify-center">
                  <div className="relative flex items-center  h-8 rounded-lg shadow-inner  bg-gray-100 overflow-hidden">
                    <div className="grid place-items-center h-full w-8 text-gray-300 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-100"
                      type="text"
                      id="search"
                      placeholder="Search ..."
                      onChange={(e) => {
                        HandleSearch(e.target.value);
                      }}
                      value={search}
                    />
                  </div>
                  <p>
                    <HiOutlineDotsVertical
                      className="cursor-pointer"
                      onClick={() => {
                        setGrpPanel(!grpPanel);
                      }}
                    />
                  </p>
                </div>
              </div>

              {/* Chats Section */}
              <div
                className={
                  "bg-mainBg h-[75vh] items-stretch justify-stretch relative"
                }
              >
                <div className=" h-full overflow-y-scroll px-4">
                  <AnimatePresence>
                    {grpPanel && (
                      <motion.div
                        className="absolute w-4/12 right-0 bg-white rounded-md shadow-lg z-60 h-full"
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
                      const isLastMessage = messages.length - 1 === index;
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
                                  colors[
                                    hashing(msg.senderName) % colors.length
                                  ]
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
                                onClick={() => handleThumbsDown(msg._id)}
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
                                onClick={() => handleThumbsDown(msg._id)}
                                className="mr-2 "
                              >
                                <GoThumbsdown />
                              </motion.button>
                              <p className="text-gray-600 text-sm">
                                {msg.votes}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Message Input */}
              {activeChat.group_name && (
                <div className="absolute bottom-0 flex items-center justify-center  w-full bg-chatBg  pt-2 pb-2">
                  <button className="h-10 w-10 me-5 ms-2 rounded-full bg-slate-300 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    <IoIosAttach className="mx-2 my-2 text-gray-600 font-bold text-2xl rotate-45" />
                    <Dropzone />
                  </button>
                  <textarea
                    className=" resize-none pl-3 w-5/6 py-3 rounded-md shadow-md"
                    placeholder="Type a message"
                    rows={1}
                    onKeyDown={handleEnterKey}
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button
                    type="button"
                    onClick={handleMessageSubmit}
                    className="ms-5 me-3 rounded-full bg-primary px-3 py-3 text-xl font-semibold text-white shadow-sm hover:bg-black-bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <BsSend />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full w-full flex flex-col justify-center text-xl text-center text-cblue">
              <img
                width="500px"
                className="w-100 mx-auto mb-2"
                src={mainDashboard}
                alt="Welcome Image"
              />
              <h2>Looking to meet new people?</h2>
              <h2>Click 'Create Group' to get started</h2>
              <button
                onClick={() => setNewGroupPanel(true)}
                className="mt-4 mx-auto w-48 flex items-center justify-between bg-transparent hover:bg-cblue text-cblue font-semibold hover:text-white py-2 px-4 border border-cblue hover:border-transparent rounded-full"
              >
                Create Group <FaPlus />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Dashboard;
