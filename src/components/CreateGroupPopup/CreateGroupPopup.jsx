/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  createGroup,
  fetchNearbyUsers,
} from "../../redux/actions/groupActions";
import { useState } from "react";
import CreateGroupPopupPageOne from "./CreateGroupPopupPageOne";
import CreateGroupPopupPageTwo from "./CreateGroupPopupPageTwo";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
// import { FaCamera } from "react-icons/fa";

const CreateGroupPopup = (props) => {
  const {
    userCoordinates,
    newGroupCreation,
    setNewGroupCreation,
    setNewGroupPanel,
  } = props;

  const dispatch = useDispatch();
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [userAdditionPage, setUserAdditionPage] = useState(false);

  //   const handleImageChange = (e) => {
  //     if (e.target.files && e.target.files[0]) {
  //       let img = e.target.files[0];
  //       setNewGrpCreation({ ...newGrpCreation, icon: URL.createObjectURL(img) });
  //     }
  //   };

  const handleNextButton = (e) => {
    e.preventDefault();
    setShowLoadingAnimation(true);
    dispatch(fetchNearbyUsers(newGroupCreation))
      .then((result) => {
        console.log("Nearby Users => ", result);
        setShowLoadingAnimation(false);
        setUserAdditionPage(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelButton = () => {
    setNewGroupCreation({
      name: "",
      description: "",
      isOpen: true,
      karma: 0,
      icon: "",
      latitude: userCoordinates[0],
      longitude: userCoordinates[1],
      radius: 5,
      list: [],
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
      <div className="bg-white rounded-md p-5 min-w-[25rem] min-h-[18rem] ">
        {showLoadingAnimation ? (
          // <div>
          <LoadingAnimation />
        ) : // </div>
        userAdditionPage ? (
          <CreateGroupPopupPageTwo
            setNewGroupPanel={setNewGroupPanel}
            newGroupCreation={newGroupCreation}
            setNewGroupCreation={setNewGroupCreation}
            handleCancelButton={handleCancelButton}
          />
        ) : (
          <CreateGroupPopupPageOne
            handleNextButton={handleNextButton}
            handleCancelButton={handleCancelButton}
            newGroupCreation={newGroupCreation}
            handleGroupCreationChange={handleGroupCreationChange}
          />
        )}
      </div>
    </div>
  );
};

export default CreateGroupPopup;
