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
import Data from "@/\bSharedData/Data";
import SelectedBusinessContext from "@/context/SelectedBusinessContext";

export default function Home() {
  const { data: session } = useSession();

  const [category, setCategory] = useState(Data.CategoryListData[0].value); //초기화
  const [radius, setRadius] = useState(2500);
  const [selectRating, setSelectedRating] = useState<number[]>([]);

  const { setSelectedBusiness }: any = useContext(SelectedBusinessContext);

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
    if (category) {
      setLoading(true);
      //https://stackoverflow.com/questions/31816061/why-am-i-getting-an-error-object-literal-may-only-specify-known-properties
      const tempLat = userLocation.lat;
      const tempLng = userLocation.lng;
      GlobalApi.getGooglePlace({ category, radius, tempLat, tempLng }).then(
        (response: AxiosResponse) => {
          // console.log("AxiosResponse========: ", response.data.product.results);
          setBusinessList(response.data.product.results);
          setBusinessListOrg(response.data.product.results);
          setLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    if (selectRating.length == 0) {
      setBusinessList(businessListOrg);
    }
    const result = businessList.filter((item: any) => {
      for (let i = 0; i < selectRating.length; i++) {
        if (item.rating >= selectRating[i]) {
          return true;
        }
        return false;
      }
    });

    console.log("result", result);
    setBusinessList(result);
  }, [selectRating]);

  const handleOnRangeChange = (event: any) => {
    setRadius(Number(event.target.value));
    console.log("radius", radius);
  };

  const handleOnRatingChange = (isChecked: boolean, value: any) => {
    if (isChecked) {
      setSelectedRating([...selectRating, value]);
    } else {
      setSelectedRating(selectRating.filter((num) => num !== value));
    }
    console.log("selectRating", selectRating);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen justify-center">
      <div className=" p-3">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect
          radius={radius}
          handleOnRangeChange={handleOnRangeChange}
        />
        <SelectRating
          selectRating={selectRating}
          handleOnRatingChange={handleOnRatingChange}
        />
      </div>
      <div className=" col-span-3">
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          {!loading ? (
            <BusinessList
              businessList={businessList}
              setSelectedBusiness={setSelectedBusiness}
            />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
