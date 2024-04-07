const userHasCoordinates = (user) => {
  if (
    user?.current_coordinates?.coordinates[0] === 0 &&
    user?.current_coordinates?.coordinates[1] === 0 &&
    user?.city?.coordinates[0] === 0 &&
    user?.city?.coordinates[1] === 0
  ) {
    return false;
  }
  return true;
};

export const formUserCoordinatesObject = (locationDetails, responseCoordinates) => {
  const body = {};
  if (locationDetails.userLocation) {
    body.current_coordinates = {
      type: "Point",
      coordinates: responseCoordinates,
    };
  } else if (locationDetails.cityLocation) {
    body.city = {
      type: "Point",
      coordinates: responseCoordinates,
    };
  }
  return body;
};

export default userHasCoordinates;
