"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryList from "./components/Home/CategoryList";
import GoogleMapView from "./components/Home/GoogleMapView";
import RangeSelect from "./components/Home/RangeSelect";
import SelectRating from "./components/Home/SelectRating";
import GlobalApi from "@/\bSharedData/GlobalApi";
import UserLocationContext from "@/context/UserLocationContext";
import SkeltonLoading from "./components/SkeltonLoading";
import BusinessList from "./components/Home/BusinessList";
import { AxiosResponse } from "axios";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState("마라탕"); //초기화
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList]: any = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLocation, setUserLocation }: any =
    useContext(UserLocationContext);

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    // if (category) {
    //   setLoading(true);
    //https://stackoverflow.com/questions/31816061/why-am-i-getting-an-error-object-literal-may-only-specify-known-properties
    const tempLat = userLocation.lat;
    const tempLng = userLocation.lng;
    GlobalApi.getGooglePlace({ category, radius, tempLat, tempLng }).then(
      (response: AxiosResponse) => {
        console.log("AxiosResponse========: ", response.data.product.results);
        setBusinessList(response.data.product.results);
        setBusinessListOrg(response.data.product.results);
        setLoading(false);
      }
    );
    // }
  };

  //any만이 무적은 아닐텐데 이거 하며 따로 찾아보자.
  const onRatingChange = (rating: any) => {
    if (rating.length == 0) {
      setBusinessList(businessListOrg);
    }
    const result = businessList.filter((item: any) => {
      for (let i = 0; i < rating.length; i++) {
        if (item.rating >= rating[i]) {
          return true;
        }
        return false;
      }
    });

    console.log(result);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen justify-center">
      <div className=" p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className=" col-span-3">
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
