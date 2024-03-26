"use client";
import styles from "./page.module.scss";
import Loading from "@/components/Global/Loading/Loading";
import Profile from "@/components/Account/Profile/Profile";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useUser } from "@/hooks/useUser";

export default function Page({ params }: { params: { id: string } }) {
  const user = useUser();
  return (
    <div className={styles.wrapper}>
      <Sidebar user={user} />
      <Profile userId={params.id} />
    </div>
  );
}
