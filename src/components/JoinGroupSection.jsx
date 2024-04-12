import React from "react";
import mainDashboard from "../assets/mainDashboard.png";
import { RiChatPrivateFill } from "react-icons/ri";

const JoinGroupSection = (props) => {
  const { handleJoinGroup, activeChat } = props;

  return (
    <div className="h-full px-4 flex flex-col justify-center items-center">
      <div className="text-cblue mb-5">
        <RiChatPrivateFill size={100} />
      </div>

      <h2>The Group is Private</h2>
      <h2>Only Member can see messages</h2>
      <button
        className="mt-4 mx-auto w-48 flex items-center justify-center bg-transparent hover:bg-cblue text-cblue font-semibold hover:text-white py-2 px-4 border border-cblue hover:border-transparent rounded-full"
        onClick={() =>
          handleJoinGroup(activeChat.group_id, activeChat.group_name)
        }
      >
        Request to Join
      </button>
    </div>
  );
};

export default JoinGroupSection;
