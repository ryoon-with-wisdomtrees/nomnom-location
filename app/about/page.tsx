"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);
  return (
    <div className="flex flex-col justify-center items-center mt-[5%] gap-10">
      <Image src="/nom_logo.png" alt="logo" width={500} height={500} />
      <div className="flex flex-col items-center justify-center text-center">
        쩝쩝로케이션(가칭)은 Google Maps API와 Google Places API를 이용하여
        제작한 짝은 사이드 프로젝트입니다
        <br />
        쩝쩝푸드 카테고리는 제가 요즘 꽂힌 7가지 종류도 구성해봤어요.
        <br />
        부디 이 서비스를 이용하는 누군가에게 오직 평점 4.5의 맛집들만 연이 닿길
        바랍니다... ✨
      </div>
    </div>
  );
};

export default page;
