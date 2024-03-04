import styles from "./Switch.module.scss";
import { useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div className={styles.wrapper} onClick={() => setIsOn((prev) => !prev)}>
      <div
        className={isOn ? styles.circle + " " + styles.oncircle : styles.circle}
      ></div>
    </div>
  );
}
