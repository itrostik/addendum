"use client";
import styles from "./AuthError.module.scss";
import Link from "next/link";
import logo from "/public/logo.svg";
import Image from "next/image";
export default function AuthError() {
  const authErrorMessage = localStorage.getItem("auth-error")!;
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt={"logo"} width={100} height={100} />

      <span className={styles.error}>Произошла ошибка 😔</span>
      <span className={styles.error}>{authErrorMessage}</span>
      <Link href={"/auth"} className={styles.button}>
        Вернуться на страницу авторизации
      </Link>
    </div>
  );
}
