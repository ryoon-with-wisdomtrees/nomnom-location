"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  }, []);
  return (
    <div>
      <h2>Yes</h2>
      <button onClick={() => signOut()}> Signout</button>
    </div>
  );
}
