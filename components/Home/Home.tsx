import styles from "./Home.module.scss";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import Sidebar from "../Sidebar/Sidebar";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";

export default function Home() {
  const store = useMutation(api.users.store);
  const [userId, setUserId] = useState<Id<"users">>();
  useEffect(() => {
    const getUser = async () => {
      setUserId(await store());
    };
    getUser();
  }, [store]);
  return (
    <>
      {userId ? (
        <div className={styles.wrapper}>
          <Sidebar user_id={userId} />
          <div className={styles.block}>
            <Filter />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
