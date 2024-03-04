"use client";

import styles from "./page.module.scss";
import { Id } from "../../../../../convex/_generated/dataModel";
import ChosenGame from "@/components/Advertisement/ChosenGame/ChosenGame";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import useUser from "@/hooks/useUser";
import Loading from "@/components/Global/Loading/Loading";
import Condition from "@/components/Advertisement/Condition/Condition";

export default function Page({ params }: { params: { id: Id<"games"> } }) {
  const userId = useUser();
  return (
    <>
      {userId ? (
        <div className={styles.wrapper}>
          <Sidebar user_id={userId} />
          <div className={styles.content}>
            <ChosenGame game_id={params.id} />
            <Condition />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
