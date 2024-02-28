import styles from "./Home.module.scss";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import Sidebar from "../Sidebar/Sidebar";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";
import { Plus } from "lucide-react";
import Modal from "../Modal/Modal";

export default function Home() {
  const store = useMutation(api.users.store);
  const [userId, setUserId] = useState<Id<"users">>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
            <button
              className={styles.addButton}
              onClick={() => setIsOpen(true)}
            >
              <Plus className={styles.lucide} />
            </button>
          </div>
          {isOpen && (
            <Modal setIsOpen={setIsOpen}>
              <div className={styles.modalContent}>
                <h1 className={styles.modalTitle}>Что хотите сделать?</h1>
                <button className={styles.modalButton}>Продать</button>
                <button className={styles.modalButton}>
                  Выставить на аукцион
                </button>
                <button className={styles.modalButton}>Обменять</button>
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
