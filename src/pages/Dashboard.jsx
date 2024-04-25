import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nearestGroup,
  getUserGroups,
  fetchGroupMessages,
  fetchGroupDetails,
  addUser,
} from "../redux/actions/groupActions";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import userHasCoordinates, {
  getUserCoordinates,
} from "../utils/helpers";
import mainDashboard from "../assets/mainDashboard.png";
import CreateGroupPopup from "../components/CreateGroupPopup/CreateGroupPopup";
import GroupsListSidebar from "../components/GroupComponents/GroupsListSidebar";
import { io } from "socket.io-client";
import GroupHeader from "../components/GroupComponents/GroupHeader";
import GroupChatBar from "../components/GroupComponents/GroupChatBar";
import GroupChatDisplay from "../components/GroupComponents/GroupChatDisplay";

const Dashboard = () => {
  const socketServer = import.meta.env.VITE_REACT_APP_SOCKET_URL;
  const socket = io(socketServer, {
    transports: ["websocket"],
    upgrade: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ----------------------------Selector-----------------------------

  const user = useSelector((state) => state.auth.user);

  //  ----------------------------State-----------------------------
  const [newGroupPanel, setNewGroupPanel] = useState(false);
  let groups = useSelector((state) => state.groups.grps);

  const userCoordinates = getUserCoordinates(user);

  const [newGroupCreation, setNewGroupCreation] = useState({
    name: "",
    description: "",
    isOpen: true,
    karma: 1000,
    icon: "",
    latitude: userCoordinates[0],
    longitude: userCoordinates[1],
    radius: 5,
    list: [],
  });

  let [activeChat, setActiveChat] = useState({
    group_id: null,
    group_name: null,
  });

  let [messages, setMessages] = useState([]);
  let [newMessage, setNewMessage] = useState("");
  const [groupDetails, setGroupDetails] = useState(null);
  let [grpPanel, setGrpPanel] = useState(false);
  const [joinGroupOverlay, setJoinGroupOverlay] = useState(false);
  const [nearbyGroupPanel, setNearbyGroupPanel] = useState(false);

  let chatRef = useRef(null);
  // ----------------------------socket-----------------------------

  const joinRoom = () => {
    if (user.username && activeChat?.group_id) {
      console.log("Attempting to join room", {
        username: user.username,
        group_id: activeChat.group_id,
      });
      socket.emit(
        "join-room",
        {
          username: user.username,
          group_id: activeChat.group_id,
        },
        (response) => {
          console.log("Join room response:", response);
        }
      );
    }
  };

  const leaveRoom = () => {
    console.log("leave-room");
    if (user.username && activeChat?.group_id) {
      socket.emit("leave-room", {
        username: user.username,
        group_id: activeChat.group_id,
      });
    }
  };

  // ----------------------------UseEffect-----------------------------

  useEffect(() => {
    dispatch(getUserGroups());
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
        setMessages([...result.payload]);
      });
      joinRoom();
    }
  }, [activeChat]);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  useMemo(() => {
    socket.on("receive_message", (data) => {
      console.log("Received message : ", data);
      if (data.senderName !== user.username) {
        setMessages((list) => [data, ...list]);
      }
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const handleJoinGroup = (grpId, grpName) => {
    try {
      setActiveChat({ group_id: grpId, group_name: grpName });
      dispatch(addUser({ groupId: grpId, userId: user._id }))
        .then((result) => {
          setNearbyGroupPanel(false);
          setActiveChat({ group_id: grpId, group_name: grpName });
          dispatch(getUserGroups());
          dispatch(nearestGroup());
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
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          setNewGroupPanel={setNewGroupPanel}
          nearbyGroupPanel={nearbyGroupPanel}
          setJoinGroupOverlay={setJoinGroupOverlay}
          setNearbyGroupPanel={setNearbyGroupPanel}
          handleJoinGroup={handleJoinGroup}
        />

        {/* Right Chatting Section */}
        <div className={`w-full h-[89vh] chat-background `}>
          {activeChat.group_name ? (
            <div className="h-full relative">
              {/* Top Bar Section */}
              <GroupHeader
                activeChat={activeChat}
                grpPanel={grpPanel}
                setGrpPanel={setGrpPanel}
                groups={groups}
                groupDetails={groupDetails}
                handleJoinGroup={handleJoinGroup}
              />

              {/* Chats Section */}
              <GroupChatDisplay
                chatRef={chatRef}
                groups={groups}
                grpPanel={grpPanel}
                messages={messages}
                groupDetails={groupDetails}
                activeChat={activeChat}
                setActiveChat={setActiveChat}
                setNearbyGroupPanel={setNearbyGroupPanel}
              />

              {/* Message Input */}
              <GroupChatBar
                socket={socket}
                activeChat={activeChat}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                setMessages={setMessages}
                groupDetails={groupDetails}
              />
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
