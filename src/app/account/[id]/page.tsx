"use client";
import styles from "./page.module.scss";
import Loading from "@/components/Global/Loading/Loading";
import Profile from "@/components/Account/Profile/Profile";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import { useSession } from "next-auth/react";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useSession();
  return (
    <>
      {data ? (
        <div className={styles.wrapper}>
          <Sidebar />
          <Profile userId={params.id} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
