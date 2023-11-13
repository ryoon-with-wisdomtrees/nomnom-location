"use client";
// import type { Metadata } from "next";
import UserLocationContext from "@/context/UserLocationContext";
import SelectedBusinessContext from "@/context/SelectedBusinessContext";
import {
  Titillium_Web,
  Nanum_Gothic,
  Nanum_Gothic_Coding,
  Nanum_Myeongjo,
} from "next/font/google";
import { useEffect, useState } from "react";
import HeaderNavbar from "./components/HeaderNavbar";
import "./globals.css";
import NextAuthSessionProvider from "./provider/Provider";

const googleFont = Nanum_Gothic_Coding({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface IProductItem {}
  type IProductContext = [
    IProductItem[] | undefined,
    React.Dispatch<React.SetStateAction<IProductItem[] | undefined>>
  ];

  const [userLocation, setUserLocation] = useState<any>({});
  const [selectedBusiness, setSelectedBusiness] = useState<any>({}); //일단 경복궁에다가 초기화 내가 좋아하니까 ㅎ
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <html lang="en">
      {/* <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      ></script> */}
      <body className={googleFont.className}>
        <NextAuthSessionProvider>
          <SelectedBusinessContext.Provider
            value={{ selectedBusiness, setSelectedBusiness }}
          >
            <UserLocationContext.Provider
              value={{ userLocation, setUserLocation }}
            >
              <HeaderNavbar />
              {children}
            </UserLocationContext.Provider>
          </SelectedBusinessContext.Provider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
