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

export const formUserCoordinatesObject = (
  locationDetails,
  responseCoordinates
) => {
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

export const cityMapping = {
  delhi: {
    label: "Delhi",
    imageSource:
      "https://cdn2.iconfinder.com/data/icons/indian-cities/64/Delhi-512.png",
  },
  noida: {
    label: "Noida",
    imageSource: "https://static.thenounproject.com/png/1497628-200.png",
  },
  gurugram: {
    label: "Gurugram",
    imageSource:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57V33MB0LVUj61MkUzKoFauZAPqugDRfaetF-lCECRQ&s",
  },
};

export default userHasCoordinates;
