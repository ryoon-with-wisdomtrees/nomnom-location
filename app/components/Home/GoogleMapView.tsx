import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

type Props = {};
// const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GoogleMapView = (props: Props) => {
  //NEXT_PUBLIC for CLient Side
  const containerStyle = {
    width: "100%",
    height: "70vh",
  };
  const cordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
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
