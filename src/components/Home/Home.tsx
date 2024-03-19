import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import Loading from "@/components/Global/Loading/Loading";
import Filter from "@/components/Global/Filter/Filter";
import { Plus } from "lucide-react";
import Modal from "@/components/UI/Modal/Modal";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data } = useSession();

  console.log(data);

  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.block}>
          <Filter />
          <button className={styles.addButton} onClick={() => setIsOpen(true)}>
            <Plus className={styles.lucide} />
          </button>
        </div>
        {isOpen && (
          <Modal setIsOpen={setIsOpen}>
            <div className={styles.modalContent}>
              <h1 className={styles.modalTitle}>Что хотите сделать?</h1>
              <Link href={"/advertisement/add"} className={styles.modalButton}>
                Продать
              </Link>
              <Link href={"/auction/add"} className={styles.modalButton}>
                Выставить на аукцион
              </Link>
              <Link href={"/exchange/add"} className={styles.modalButton}>
                Обменять
              </Link>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
