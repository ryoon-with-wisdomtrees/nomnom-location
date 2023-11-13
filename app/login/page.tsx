"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("session:", session);
    if (session?.user) {
      //이미 유저로그인 돼 있으면 기본/페이지로
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex flex-col justify-center items-center mt-[2%] mb-[2%] gap-4">
      <div className="flex flex-row items-center">
        {" "}
        <Image alt="logo" src="/nom_logo.png" height={200} width={200} />
        <div className="ml-6 sm:px-0 max-w-sm flex flex-col">
          <h2 className=" text-[#f47d42] font-bold">쩝쩝 Location</h2>
          <button
            type="button"
            onClick={() => signIn()}
            className="text-white w-fullm bg-[#f49e42] hover:bg-[#f49e42]/90 focus:ring-4 focus:outline-none
           focus:ring-[#f49e42]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
           justify-between dark:focus:ring-[#f49e42]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5
                52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.20 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google
            <div></div>
          </button>
        </div>
      </div>
      <Image
        src="/screenshot.png"
        alt="logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "80%",
          height: "auto",
          borderRadius: 24,
          border: "1px solid orange",
        }}
      />
    </div>
  );
};

export default Login;
