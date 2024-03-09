"use client";
import { SignOAuthButtons } from "@/components/Auth/SignOAuthButtons/SignOAuthButtons";
import styles from "./page.module.scss";
import { useState } from "react";
export default function Page() {
  const [isHaveAccount, setIsHaveAccount] = useState(false);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{isHaveAccount ? "Вход" : "Регистрация"}</h1>
      <SignOAuthButtons isHaveAccount={isHaveAccount} />
      <h3 className={styles.subtitle}>
        {isHaveAccount ? (
          <span>
            Ещё нет аккаунта?{" "}
            <span
              className={styles.head}
              onClick={() => setIsHaveAccount(false)}
            >
              Зарегистрироваться
            </span>
          </span>
        ) : (
          <span>
            Уже есть аккаунт?{" "}
            <span
              className={styles.head}
              onClick={() => setIsHaveAccount(true)}
            >
              Войти
            </span>
          </span>
        )}
      </h3>
    </div>
  );
}
