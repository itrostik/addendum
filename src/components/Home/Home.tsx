"use client";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Global/Sidebar/Sidebar";
import Filter from "@/components/Global/Filter/Filter";
import { Plus } from "lucide-react";
import Modal from "@/components/UI/Modal/Modal";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const user = useUser();

  console.log(user);

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
