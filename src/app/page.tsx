"use client";

import Home from "../components/Home/Home";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Global/Loading/Loading";

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth");
    return () => {};
  }, [status]);

  if (status === "loading") return <Loading />;
  else if (status === "authenticated") return <Home />;
  return null;
}
