"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Global/Loading/Loading";

export default function Page() {
  const router = useRouter();
  return <Loading />;
}
