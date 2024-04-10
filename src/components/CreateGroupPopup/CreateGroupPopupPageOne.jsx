import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkGroupNameUniqueness } from "../../redux/actions/groupActions";
import { LoadingAnimationTwo } from "../LoadingAnimation/LoadingAnimation";

/* eslint-disable react/prop-types */
const CreateGroupPopupPageOne = (props) => {
  const {
    handleNextButton,
    handleCancelButton,
    newGroupCreation,
    handleGroupCreationChange,
  } = props;

  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState("");
  const groupStatus = useSelector((state) => state.groups.uniqueGroup);
  const [groupType, setGroupType] = useState(true);

  useEffect(() => {
    const reqBody = { name: groupName };
    const timeoutID = setTimeout(() => {
      dispatch(checkGroupNameUniqueness(reqBody)).then((response) => {
        console.log("Response => ", response);
      });
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [groupName]);

  const handleGroupNameChange = (e) => {
    e.preventDefault();
    setGroupName(e.target.value.replace(" ", ""));
  };

  const handleGroupTypeChange = (e) => {
    e.preventDefault();

    let value = true;
    if (e.target.id === "openButton") {
      value = true;
    } else if (e.target.id === "closeButton") {
      value = false;
    }
    setGroupType(value);
    const payload = {
      target: {
        name: "isOpen",
        value: value,
      },
    };
    handleGroupCreationChange(payload);
  };
  console.log("groupStatus => ", groupStatus);
  return (
    <>
      <h1 className="text-2xl mb-4 text-cblue font-bold">Create New Group</h1>
      <form className="max-w-md" onSubmit={handleNextButton}>
        <div>
          {/* <div className="col-span-1 relative">
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
            </div> */}
          <div className="col-start-2 col-end-4 ">
            <div className="relative">
              <label
                htmlFor="name"
                className={`text-sm font-thin ${
                  groupStatus.success ? "text-gray-600" : "text-red-500"
                }`}
              >
                Group Name<abbr className="text-red-500">*</abbr>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`ps-2 w-full py-1 border ${
                  groupStatus.success ? "border-cblue" : "border-red-500"
                } rounded-md mb-2`}
                onChange={handleGroupNameChange}
                value={groupName}
                pattern="[A-Za-z0-9]+"
                required
              />
              <div className="absolute top-7 right-2">
                {groupStatus?.loading ? (
                  <LoadingAnimationTwo />
                ) : groupStatus?.success && groupStatus?.groupName ? (
                  <p className="text-green-600">✓</p>
                ) : !groupStatus?.success || groupStatus?.error ? (
                  <p className="text-red-600">✕</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
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
              className="ps-2 w-full resize-none border border-cblue rounded mb-2"
              onChange={handleGroupCreationChange}
              value={newGroupCreation.description}
            ></textarea>

            <div className="flex justify-between items-center">
              <div>
                <label
                  htmlFor="type"
                  className="text-sm font-thin text-gray-600"
                >
                  Group Type<abbr className="text-red-500">*</abbr>
                </label>
                <input
                  type="checkbox"
                  id="type"
                  name="type"
                  className="hidden"
                  value={groupType}
                  onChange={handleGroupTypeChange}
                ></input>

                <div className="flex rounded-md bg-gray-200">
                  <button
                    id="openButton"
                    onClick={handleGroupTypeChange}
                    className={`rounded-md p-2 hover:bg-cblue hover:text-white ${
                      groupType && "bg-cblue text-white"
                    }`}
                  >
                    Open
                  </button>
                  <button
                    id="closeButton"
                    onClick={handleGroupTypeChange}
                    className={`rounded-md p-2 hover:bg-cblue hover:text-white ${
                      !groupType && "bg-cblue text-white"
                    }`}
                  >
                    Close
                  </button>

                  {/* <label
                  htmlFor="type"
                  className="text-sm font-thin text-gray-600"
                >
                  Group Type<abbr className="text-red-500">*</abbr>
                </label>
                <label
                  htmlFor="type"
                  className="inline-flex items-center p-1 rounded-md cursor-pointer dark:text-gray-100"
                >
                  <input
                    id="type"
                    type="checkbox"
                    className="hidden peer"
                    onChange={handleGroupCreationChange}
                    value={newGroupCreation.type}
                  />
                  <span className="px-2 py-[0.1rem] rounded-l-md dark:bg-cblue peer-checked:dark:bg-gray-600">
                    Open
                  </span>
                  <span className="px-2 py-[0.1rem] rounded-r-md dark:bg-gray-600 peer-checked:dark:bg-cblue">
                    Close
                  </span>
                </label> */}
                </div>
              </div>
              <div className="flex flex-col w-24">
                <label
                  htmlFor="karma"
                  className="text-sm font-thin text-gray-600"
                >
                  Karma Req.
                </label>
                <input
                  type="number"
                  name="karma"
                  id="karma"
                  className=" border border-cblue rounded-md px-2 text-gray-700"
                  max={5000}
                  onChange={handleGroupCreationChange}
                  value={newGroupCreation.karma}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 text-sm mt-4">
            <button
              type="submit"
              className={`bg-cblue px-2 rounded-md py-[0.2rem] text-sm text-white ${
                groupStatus?.error || !groupStatus?.success ? "opacity-25" : ""
              }`}
              disabled={groupStatus?.error || !groupStatus?.success}
            >
              Next
            </button>
            <button
              type="button"
              onClick={handleCancelButton}
              className="bg-gray-300 px-2 rounded-md py-[0.2rem] text-sm text-black hover:text-white border-gray-300 border-2 hover:bg-red-500 hover:border-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateGroupPopupPageOne;
