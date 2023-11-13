import { MarkerF, OverlayView } from "@react-google-maps/api";
import React, { useContext } from "react";
import BusinessItem from "./BusinessItem";
import SelectedBusinessContext from "@/context/SelectedBusinessContext";

function Markers({ business }: any) {
  const { selectedBusiness, setSelectedBusiness }: any = useContext(
    SelectedBusinessContext
  );

  const { lat, lng } = business.geometry.location;
  const cordinate = { lat: Number(lat), lng: Number(lng) };
  return (
    <div>
      <MarkerF
        position={cordinate}
        onClick={() => {
          // console.log("business", business);
          setSelectedBusiness(business);
        }}
        icon={{
          url: "/marker-with-no-bg.png",
          scaledSize: {
            width: 30,
            height: 30,
            equals(other) {
              return true;
            },
          },
        }}
      >
        {selectedBusiness.reference == business.reference ? (
          <OverlayView
            position={cordinate}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="ml-[-90px] mt-[-230px]">
              <BusinessItem business={business} showDir={true} />
            </div>
          </OverlayView>
        ) : null}
      </MarkerF>
    </div>
  );
}

export default Markers;
