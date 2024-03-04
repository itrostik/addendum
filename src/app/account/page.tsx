"use client";
import { useEffect } from "react";
import { useConvexAuth, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Global/Loading/Loading";
import { api } from "../../../convex/_generated/api";

export default function Page() {
  const { isAuthenticated } = useConvexAuth();
  const user = useMutation(api.users.store);
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      const userId = await user();
      router.push(`/account/${userId}`);
    };
    if (isAuthenticated) {
      getUser();
    }
  }, [isAuthenticated]);
  return <Loading />;
}
