"use client";
import styles from "./page.module.scss";
import Search from "../../../components/Search/Search";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../../../components/Loading/Loading";
import Games, { GamesProps } from "../../../components/Games/Games";

export default function Page() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [userId, setUserId] = useState<Id<"users">>();
  const userMutation = useMutation(api.users.store);
  const [sizes, setSizes] = useState<GamesProps>({ width: 0, height: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    const getUserId = async () => {
      setUserId(await userMutation());
    };
    if (isAuthenticated) {
      getUserId();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const width = ref.current ? ref?.current.clientWidth : 0;
    const height = ref.current ? ref?.current.clientHeight : 0;
    const buffer = {
      width,
      height,
    };
    setSizes(buffer);
  }, [ref, ref.current, userId]);
  return (
    <>
      {!isLoading && userId ? (
        <div className={styles.wrapper}>
          <Sidebar user_id={userId} />
          <div className={styles.content} ref={ref}>
            <h1 className={styles.heading}>Объявление о продаже</h1>
            <h3 className={styles.title}>Выберите игру</h3>
            <div className={styles.search}>
              <Search setValue={setSearchValue} />
            </div>
            <Games width={sizes?.width} height={sizes?.height} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
