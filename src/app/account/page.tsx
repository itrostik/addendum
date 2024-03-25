"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Global/Loading/Loading";
import { useSession } from "next-auth/react";
import { useUser } from "@/hooks/useUser";

export default function Page() {
  const router = useRouter();

  const user = useUser();

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (user) router.push(`/account/${user?.id}`);
  }, [user]);

  return <Loading />;
}
