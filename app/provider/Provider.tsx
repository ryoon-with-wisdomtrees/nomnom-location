"use client"; //client side에서 사용한다고 명시해줘야함
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NextAuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
