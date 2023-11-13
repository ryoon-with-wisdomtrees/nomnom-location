import UserLocationContext from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";

const GoogleMapView = (businessList: any) => {
  //https://goddino.tistory.com/216
  const { userLocation, setUserLocation }: any =
    useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  // const cordinate = { lat: -34.397, lng: 150.644 };

  console.log("userLocation: ", userLocation);
  return (
    <div>
      {/**  //NEXT_PUBLIC for CLient Side */}
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={[process.env.NEXT_PUBLIC_GOOGLE_MAP_ID]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={14}
          options={{ mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID }}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
                equals(other) {
                  return true;
                },
              },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
