/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { createGroup, getUserGroups } from "../../redux/actions/groupActions";
import { Tooltip } from "react-tooltip";

const CreateGroupPopupPageTwo = (props) => {
  const {
    setNewGroupPanel,
    newGroupCreation,
    setNewGroupCreation,
    handleCancelButton,
  } = props;

  const dispatch = useDispatch();
  const nearByUsersList = useSelector((state) => state.groups.nearbyUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = { ...newGroupCreation, list: nearByUsersList };
    console.log(reqBody);

    dispatch(createGroup(reqBody)).then((response) => {
      console.log(response);
      dispatch(getUserGroups());
      handleCancelButton();
    });
  };

  return (
    <div className="h-full">
      <form className="h-full relative" onSubmit={handleSubmit}>
        <h1 className="text-cblue">
          Found <u>{nearByUsersList.length}</u> users near you
        </h1>
        {nearByUsersList?.length === 0 ? (
          <div>
            <img
              width="150px"
              height="150px"
              className="mx-auto mt-4"
              src="https://static.vecteezy.com/system/resources/previews/006/208/684/original/search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
              alt="placeholder"
            />
          </div>
        ) : (
          <div className="h-[80%] flex gap-4 mt-2 mb-16 flex-wrap min-h-[13rem] overflow-y-scroll">
            {nearByUsersList?.map((userObject) => {
              const { userId, userName, picture, karma } = userObject.user;
              const tooltipContent = (
                <div className="text-center">
                  <p>{userName}</p>
                  <p>Karma: {karma >= 1000 ? `${karma / 1000}K` : karma}</p>
                </div>
              );
              return (
                <div
                  key={userId}
                  className="group-item flex flex-col items-center w-[6rem]"
                >
                  {/* <RxAvatar size={40} /> */}
                  <img
                    src={picture}
                    alt="avatar"
                    className="h-16 w-16 rounded-full"
                    data-tooltip-id={userName}
                  />
                  <Tooltip
                    id={userName}
                    place="bottom"
                    content={tooltipContent}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="flex w-full justify-end gap-4 text-sm mt-4 absolute bottom-0">
          <button
            type="submit"
            className="bg-cblue px-2 rounded-md py-[0.2rem] text-sm text-white"
          >
            Create Group
          </button>
          <button
            type="button"
            onClick={handleCancelButton}
            className="bg-gray-300 px-2 rounded-md py-[0.2rem] text-sm text-black hover:text-white border-gray-300 border-2 hover:bg-red-500 hover:border-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroupPopupPageTwo;
