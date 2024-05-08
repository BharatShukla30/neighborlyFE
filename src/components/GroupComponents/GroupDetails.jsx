/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { leaveGroup } from "../../redux/actions/groupActions";

const GroupDetails = ({ _id: groupId, name, description, admin, members }) => {
  const dispatch = useDispatch();
  const { _id: userId } = useSelector((state) => state?.auth?.user);

  const handleLeaveGrp = () => {
    // TODO: w8ing for backend to make api
    dispatch(leaveGroup({ groupId, userId }));
  };

  let membersList = [];
  admin.forEach((element) => {
    membersList.push({ ...element, isAdmin: true });
  });

  membersList = [...membersList, ...members];

  return (
    <div className="flex flex-col w-full h-full bg-white overflow-y-scroll z-60">
      <div className="py-4 px-6 w-full flex flex-col items-center  pointer-events-none">
        <div className="flex-shrink-0 mb-4">
          <img
            className="h-25 w-25 rounded-full ring-2 ring-offset-2 ring-fuchsia-900"
            src="https://via.placeholder.com/150"
            alt="Group Avatar"
          />
        </div>
        <div className="mb-4 flex flex-col items-center justify-center gap-2">
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
      </div>

      <div className=" p-4 w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">
          Description
        </h2>
        <p className="text-sm  font-thin text-zinc-600">{description}</p>
      </div>

      {/* <div className=" w-full p-4 mt-4">
        <h2 className="text-lg font-semibold mb-2  text-gray-700">Media</h2>
      </div> */}

      <div className=" w-full p-4">
        <h2 className="text-lg font-semibold mb-2  text-zinc-700">Members</h2>

        {membersList?.map((member) => {
          const { userId, userName, picture, karma, isAdmin } = member;
          return (
            <div
              className="flex items-center space-x-4 mt-1 hover:bg-slate-200 hover:scale-105 transition-all ease-in p-1 rounded-md"
              key={userId}
            >
              <div className="flex-shrink-0">
                <img
                  className={`h-10 w-10 rounded-full${
                    isAdmin ? " border-dashed border-2 border-red-500" : ""
                  }`}
                  src={picture}
                  alt={`Member ${userName}`}
                />
              </div>
              <div className="">
                {/* <p className="font-semibold">{member.user.username}</p> */}
                <p className="text-sm font-bold text-gray-600">{userName}</p>
                <p className="text-sm text-gray-600">
                  {(karma / 1000).toFixed(1)}k 🔥
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" py-4 px-6 w-full mt-4 flex flex-col gap-3 items-center justify-center mb-3">
        {/* <button
          className="bg-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-colors ease-in"
          onClick={handleGroupPermanent}
        >
          Make Permanent
        </button> */}
        <button
          className="bg-rose-500 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors ease-in "
          onClick={handleLeaveGrp}
        >
          Leave Group
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;
