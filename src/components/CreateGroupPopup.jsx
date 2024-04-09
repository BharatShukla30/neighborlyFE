/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { createGroup } from "../redux/actions/groupActions";
// import { FaCamera } from "react-icons/fa";

const CreateGroupPopup = (props) => {
  const { userCoordinates, newGroupCreation, setNewGroupCreation, setNewGroupPanel } =
    props;

  const dispatch = useDispatch();

  //   const handleImageChange = (e) => {
  //     if (e.target.files && e.target.files[0]) {
  //       let img = e.target.files[0];
  //       setNewGrpCreation({ ...newGrpCreation, icon: URL.createObjectURL(img) });
  //     }
  //   };

  const handleNextButton = (e) => {
    e.preventDefault();

    try {
      dispatch(createGroup(newGroupCreation))
        .then((result) => {
          console.log(result);
          setNewGroupCreation({
            name: "",
            description: "",
            type: "open",
            karma: 0,
            icon: "",
            latitude: userCoordinates[0],
            longitude: userCoordinates[1],
          });
        })
        .catch((err) => {
          console.log(err);
          alert("Error in creating group");
        });
    } catch (err) {
      console.log(err);
    }
    setNewGroupPanel(false);
  };

  const handleCancelButton = () => {
    setNewGroupCreation({
      name: "",
      description: "",
      type: "open",
      karma: 0,
      icon: "",
    });
    setNewGroupPanel(false);
  };

  const handleGroupCreationChange = (e) => {
    setNewGroupCreation({
      ...newGroupCreation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <div className="bg-white rounded-md p-5">
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
              <label htmlFor="name" className="text-sm font-thin text-gray-600">
                Group Name<abbr className="text-red-500">*</abbr>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="ps-2 w-full py-1 border border-cblue rounded-md mb-2"
                onChange={handleGroupCreationChange}
                value={newGroupCreation.name}
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
                className="ps-2 w-full resize-none border border-cblue rounded mb-2"
                onChange={handleGroupCreationChange}
                value={newGroupCreation.description}
              ></textarea>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <label
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
                  </label>
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
                    max={100}
                    onChange={handleGroupCreationChange}
                    value={newGroupCreation.karma}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 text-sm mt-4">
              <button
                type="submit"
                className="bg-cblue px-2 rounded-md py-[0.2rem] text-sm text-white"
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
      </div>
    </div>
  );
};

export default CreateGroupPopup;
