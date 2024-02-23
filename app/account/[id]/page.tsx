"use client";
import styles from "./page.module.scss";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../../../components/Loading/Loading";
import Profile from "../../../components/Profile/Profile";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function Page({ params }: { params: { id: Id<"users"> } }) {
  const user = useQuery(api.users.getById, { user_id: params.id });
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
