import SelectedBusinessContext from "@/context/SelectedBusinessContext";
import UserLocationContext from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import Markers from "./Markers";

// interface tempMapInterface {
//   state: any;
//   registeredEvents: google.maps.MapsEventListener[];
//   mapRef: HTMLDivElement | null;
//   getInstance: () => google.maps.Map | null;
//   panTo: (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
//   setMapCallback: () => void;
//   componentDidMount(): void;
//   componentDidUpdate(prevProps: GoogleMapProps): void;
//   componentWillUnmount(): void;
//   getRef: React.LegacyRef<HTMLDivElement>;
//   render(): React.ReactNode;
// }

const GoogleMapView = ({ businessList }: any) => {
  // const { isLoaded } = useJsApiLoader({
  //   id: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // });
  //https://goddino.tistory.com/216
  const { userLocation, setUserLocation }: any =
    useContext(UserLocationContext);
  const { selectedBusiness, setSelectedBusiness }: any = useContext(
    SelectedBusinessContext
  );
  // const [map, setMap] = useState<GoogleMap>(); //panTo is not a function error 해결
  const [map, setMap] = useState<any>(); //panTo is not a function error 해결
  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  const { lat, lng } = userLocation;
  const cordinate = { lat: Number(lat), lng: Number(lng) };
  // const { lat2, lng2 } = selectedBusiness.geometry.location;
  // const cordinate2 = { lat: Number(lat2), lng: Number(lng) };

  // console.log("lat2: ", lat2);
  useEffect(() => {
    if (map && selectedBusiness) {
      map.panTo(selectedBusiness.geometry.location);
    }
  }, [selectedBusiness]);

  // if (!isLoaded) return null;
  return (
    <div>
      {/**  //NEXT_PUBLIC for CLient Side */}

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={[process.env.NEXT_PUBLIC_GOOGLE_MAP_ID]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            !selectedBusiness.name
              ? cordinate
              : {
                  lat: Number(selectedBusiness.geometry.location.lat),
                  lng: Number(selectedBusiness.geometry.location.lng),
                }
          }
          zoom={17}
          options={{ mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID }}
          onLoad={(map: google.maps.Map) => {
            // console.log("ddd??", typeof map);
            // console.log(map);
            setMap(map);
          }}
        >
          <MarkerF
            position={cordinate}
            icon={{
              url: "now-here.png",
              scaledSize: {
                width: 200,
                height: 200,
                equals(other) {
                  return true;
                },
              },
            }}
          />
          {businessList.map(
            (item: any, index: any) =>
              index <= 10 && <Markers business={item} key={index} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
