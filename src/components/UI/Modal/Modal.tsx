import styles from "./Modal.module.scss";
import React, { ReactNode } from "react";
import { X } from "lucide-react";

export type ModalProps = {
  children: Readonly<ReactNode>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ children, setIsOpen }: ModalProps) {
  return (
    <div className={styles.wrapper} onClick={() => setIsOpen(false)}>
      <div
        className={styles.content}
        onClick={(event) => event.stopPropagation()}
      >
        <div>{children}</div>
        <button onClick={() => setIsOpen(false)}>
          <X size={33} className={styles.lucide} />
        </button>
      </div>
    </div>
  );
}
