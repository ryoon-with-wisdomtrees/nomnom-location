"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryList from "./components/Home/CategoryList";
import GoogleMapView from "./components/Home/GoogleMapView";
import RangeSelect from "./components/Home/RangeSelect";
import SelectRating from "./components/Home/SelectRating";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);
  // useEffect(() => {
  //   getUserLocation();
  // }, []);
  // const getUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (pos) {
  //     console.log(typeof pos);
  //     console.log(typeof pos.coords);
  //     // setUserLocation({
  //     //   lat: pos.coords.latitude,
  //     //   lng: pos.coords.longitude,
  //     // });
  //   });
  // };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen justify-center">
      <div className=" p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className=" col-span-3">
        <GoogleMapView />
      </div>
    </div>
  );
}
