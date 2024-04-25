import { BsPeople } from "react-icons/bs";
import { isGroupJoinedByUser } from "../../utils/helpers";
import { HiOutlineDotsVertical } from "react-icons/hi";

/* eslint-disable react/prop-types */
const GroupHeader = (props) => {
    const {activeChat, grpPanel, setGrpPanel, groups, groupDetails, handleJoinGroup} = props;

  return (
    <div className="shadow-inner py-3 px-3 flex items-center justify-between  bg-white z-40">
      <div
        className="text-xl font-medium flex items-center cursor-pointer"
        onClick={() => {
          setGrpPanel(!grpPanel);
        }}
      >
        <div className="me-3 md:me-4 bg-slate-200 px-3 py-3 rounded-full">
          <BsPeople />
        </div>
        <div>
          <p className="font-medium">{activeChat?.group_name}</p>
          <p className="text-sm text-gray-400">
            {`${groupDetails?.members.length} members`}
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        {isGroupJoinedByUser(groups, groupDetails?._id) ? (
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
              disabled
            />
          </div>
        ) : (
          <button
            className="border border-cblue px-8 py-1 rounded text-cblue hover:text-white hover:bg-cblue"
            onClick={() =>
              handleJoinGroup(activeChat.group_id, activeChat.group_name)
            }
          >
            {groupDetails?.isOpen ? "Join" : "Request"}
          </button>
        )}
        <p>
          <HiOutlineDotsVertical className="cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default GroupHeader;
