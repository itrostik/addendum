"use client";
import { SignInOAuthButtons } from "@/components/Auth/SignInOAuthButtons/SignInOAuthButtons";
import styles from "./page.module.scss";
export default function Page() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Вход</h1>
      <SignInOAuthButtons />
    </div>
  );
}
