"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function HeaderNavBar() {
  const { data: session } = useSession();
  const [profileClick, setProfileClick] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProfileClick(false); //클릭한후 6초 정도 뒤에는 다시 사라지게.
    }, 6000);
  }, [profileClick == true]); //오직 프로필 클릭이 트루일때만

  return (
    session?.user && (
      <div className="flex items-center justify-between p-2 shadow-md">
        <div className="flex gap-7 items-center">
          <Image src="/nom_logo.png" alt="logo" width={50} height={50} />
          <h2 className=" text-[#f49e42] font-bold">쩝쩝 Location</h2>
          <Link href={"/"}>
            <h2 className="cursor-pointer hover:text-[#f49e42]">Home</h2>
          </Link>

          <h2 className="cursor-pointer hover:text-[#f49e42]">Favourite</h2>
          <Link href={"/about"}>
            <h2 className="cursor-pointer text-[#f0ba81]  hover:text-[#f49e42]">
              about
            </h2>
          </Link>
        </div>
        <div className=" bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex">
          {/**https://heroicons.com/ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div>
          {/* {session?.user ? (
            <div>
              <Image
                src={session.user.image || ""}
                alt="user"
                width={40}
                height={40}
                onClick={() => setProfileClick((prev) => !prev)}
                className="rounded-full cursor-pointer 
              hover:border-[2px] border-blue-500"
              />
              {profileClick ? (
                <div className="absolute rounded-md bg-white p-3 shadow-md border-[1px] mt-2 z-30 right-4 ">
                  <h2
                    className="cursor-pointer hover:text-[#f49e42] hover:font-bold"
                    onClick={() => signOut()}
                  >
                    Logout
                  </h2>
                </div>
              ) : null}
            </div>
          ) : null} */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session.user.image || ""}
                alt="user"
                width={40}
                height={40}
                onClick={() => setProfileClick((prev) => !prev)}
                className="rounded-full cursor-pointer 
              hover:border-[2px] border-[#f49e42]"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className={" text-[#f0ba81]  hover:text-[#f49e42]"}
                onClick={() => signOut()}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  );
}

export default HeaderNavBar;
