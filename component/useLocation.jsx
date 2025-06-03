import * as Location from "expo-location";
import { useEffect, useState } from "react";
const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
const [location, setLocation] = useState([]);
  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access Location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    if (location) {
      const { coords } = location;
      const { longitude, latitude } = coords;
      setLongitude(longitude);
      setLatitude(latitude);
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      setLocation(response);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return {
    longitude,
    latitude,
    location,
    errorMsg,
  };
};

export default useLocation;
