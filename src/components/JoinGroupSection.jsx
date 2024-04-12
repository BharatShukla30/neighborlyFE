import React from "react";
import mainDashboard from "../assets/mainDashboard.png"

const JoinGroupSection = () => {
  return (
    <div className="h-full px-4 flex flex-col justify-center items-center">
      <img
        width="500px"
        className="w-100 mx-auto mb-2"
        src={mainDashboard}
        alt="Welcome Image"
      />
      <h2>The Group is closed</h2>
      <h2>Click 'Join Group' to get connected</h2>
      <button

        className="mt-4 mx-auto w-48 flex items-center justify-center bg-transparent hover:bg-cblue text-cblue font-semibold hover:text-white py-2 px-4 border border-cblue hover:border-transparent rounded-full"
      >
        Join Group
      </button>
    </div>
  );
};

export default JoinGroupSection;
