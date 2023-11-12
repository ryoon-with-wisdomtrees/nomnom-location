import UserLocationContext from "@/context/UserLocationContext";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useContext } from "react";

type Props = {};

const GoogleMapView = (props: Props) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const containerStyle = {
    width: "100%",
    height: "70vh",
  };
  const cordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
      {/**  //NEXT_PUBLIC for CLient Side */}
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={[process.env.NEXT_PUBLIC_GOOGLE_MAP_ID]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={cordinate}
          zoom={10}
          options={{ mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID }}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
