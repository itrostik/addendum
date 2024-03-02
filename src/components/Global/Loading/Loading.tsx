import React from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import styles from "./Loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt={"logo"} className={styles.logo} />
    </div>
  );
}
