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
    <div className="flex flex-col justify-center items-center mt-[5%] mb-[5%] gap-10">
      <Image src="/nom_logo.png" alt="logo" width={500} height={500} />
      <div className="flex flex-col items-center justify-center text-center width-[60%]">
        <p>
          {" "}
          쩝쩝로케이션(가칭)은 Google Maps API와 Google Places API를 이용하여
          제작한 짝은 사이드 프로젝트입니다
          <br />
          Google Maps API&Google Places API에 대해 공부할겸 제작한 앱인데 만들면
          만들수록 재밌어서
          <br />
          자꾸 수제로 아이콘작업을 하다보니 대략 넉넉잡아 3일정도 걸려서 만든 것
          같네요...껄껄
          <br />
        </p>
        <br />
        <p>
          {" "}
          <a
            href="https://youtu.be/SGsDxZukodQ"
            className=" text-orange-400 hover:text-orange-200"
          >
            이 유튜브 강의
          </a>
          를 바탕으로 발전시킨 웹앱인데, 기존 강의와 달리 타입스크립트로
          제작하다보니 <br />
          자잘한 에러 수정 및 트러블슈팅을 하느라 세부 사항들에 대하여 더
          깊숙하게 Docs를보면서 제작 할 수 있었고
          <br />그 덕분에 오히려 더 촘촘히 알아가며 만들어 나갈 수 있었던 토이
          프로젝트가 된 것 같습니다.
        </p>
        <br />
        쩝쩝푸드 카테고리는 제가 요즘 꽂힌 7가지 종류도 구성해봤습니다. <br />{" "}
        나중에 부디 이 서비스를 이용하는 누군가에게 오직 평점 4.5의 맛집들만
        연이 닿길 바랍니다... ✨
      </div>
    </div>
  );
};

export default page;
