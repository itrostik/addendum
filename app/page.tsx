"use client";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";
import Home from "../components/Home/Home";

export default function Page() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.push("/auth");
  }, [isLoading, isAuthenticated]);

  return (
    <>
      {isAuthenticated && <Home />}
      {isLoading && <Loading />}
    </>
  );
}
