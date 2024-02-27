import styles from "./Radio.module.scss";
import React from "react";

export type RadioProps = {
  value: string;
  id: string;
  name: string;
  activeRadio: string;
  setActiveRadio: React.Dispatch<React.SetStateAction<string>>;
};
export default function Radio({
  value,
  name,
  id,
  activeRadio,
  setActiveRadio,
}: RadioProps) {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <input
        type="radio"
        id={id}
        name={name}
        onChange={() => setActiveRadio(value)}
        className={styles.radioDefault}
      />
      <div
        className={
          activeRadio === value
            ? styles.radio + " " + styles.checked
            : styles.radio
        }
      >
        {activeRadio === value && <div className={styles.circle}></div>}
      </div>
      <span>{value}</span>
    </label>
  );
}
