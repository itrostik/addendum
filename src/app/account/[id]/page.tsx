"use client";
import styles from "./page.module.scss";
import Loading from "@/components/Global/Loading/Loading";
import Profile from "@/components/Account/Profile/Profile";
import Sidebar from "@/components/Global/Sidebar/Sidebar";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      {user ? (
        <div className={styles.wrapper}>
          <Sidebar user_id={params.id} />
          <Profile user={user} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
